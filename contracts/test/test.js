const { expect } = require('chai')
const { ethers } = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

const abiEncode = (index, address) => {
  const hashed = ethers.utils.defaultAbiCoder.encode(
    ['uint256', 'address'],
    [index, address]
  )
  return hashed
}

describe('YourContract', function () {
  let contract
  let splitter
  let mintPrice, presaleMintPrice, maxSupply, maxMintCount, artistProofCount, _baseURI
  let owner, bob, alice
  let managerRole, adminRole
  let tree, root, accounts, leaves

  beforeEach(async () => {
    ;[owner, bob, alice] = await ethers.getSigners()
    const Contract = await ethers.getContractFactory('YourContract')
    contract = await Contract.deploy()
    await contract.deployed()
    managerRole = await contract.MANAGER_ROLE()
    adminRole = await contract.DEFAULT_ADMIN_ROLE()
    mintPrice = await contract.ETH_PRICE()
    presaleMintPrice = await contract.PRESALE_ETH_PRICE()
    maxMintCount = (await contract.MAX_MINT_COUNT()) - 1
    artistProofCount = (await contract.ARTIST_PROOF_COUNT()) - 1
    maxSupply = (await contract.maxSupply()) - 1
    _baseURI = await contract._baseURIextended()
    // Test Splitter contract
    const Splitter = await ethers.getContractFactory('TestSplitter')
    splitter = await Splitter.deploy([bob.address, alice.address], [62, 38])
    await splitter.deployed()
    // Merkle tree
    const users = await ethers.getSigners()
    accounts = users.map((a) => a.address)
    leaves = accounts.map((account, index) => keccak256(abiEncode(index, account)))
    tree = new MerkleTree(leaves, keccak256, { sortPairs: true })
    root = tree.getRoot().toString('hex')
    // Update contract merkle root hash
    await contract.setMerkleRoot(`0x${root}`)
  })

  it('Starts with sale and presale inactive', async function () {
    await expect(
      contract.mint(1, {
        value: mintPrice,
      })
    ).to.be.revertedWith('Sale has not begun')

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await expect(
      contract.connect(bob).presaleMint(1, index, proof, {
        value: presaleMintPrice,
      })
    ).to.be.revertedWith('Presale has not begun')
  })

  it('Ownership can be transferred', async function () {
    await contract.connect(owner).transferOwnership(alice.address)
    await contract.connect(alice).setPresaleActive(true)

    await expect(contract.connect(owner).setPresaleActive(true)).to.be.revertedWith(
      `AccessControl: account ${owner.address.toLowerCase()} is missing role ${managerRole}`
    )
  })

  it('Ownership cannot be transferred by the public', async function () {
    await expect(
      contract.connect(alice).transferOwnership(alice.address)
    ).to.be.revertedWith(`Ownable: caller is not the owner`)
  })

  it('Cannot presale mint if not on allowlist', async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const fakeAddress = '0x4492eCACB5da5D933af0e55eEDad4383BF8D2dB5'
    const index = 666
    const proof = tree.getHexProof(keccak256(abiEncode(index, fakeAddress)))
    await expect(
      contract.connect(bob).presaleMint(1, index, proof, {
        value: presaleMintPrice,
      })
    ).to.be.revertedWith('Invalid proof')
  })

  it('Can presale mint if on allowlist, but not regular mint', async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    await expect(
      contract.mint(1, {
        value: mintPrice,
      })
    ).to.be.revertedWith('Sale has not begun')

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice,
    })
    const totalSupply = await contract.totalSupply()
    expect(totalSupply).to.equal('1')
    const data = await contract.tokenURI(1)
    expect(data).to.equal(`${_baseURI}1.json`)
  })

  it('Can presale mint 3', async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(3, index, proof, {
      value: presaleMintPrice.mul(3),
    })

    const totalSupply = await contract.totalSupply()
    expect(totalSupply).to.equal('3')
  })

  it('Can presale mint 1 three times', async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice.mul(1),
    })
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice.mul(1),
    })
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice.mul(1),
    })
    const totalSupply = await contract.totalSupply()
    expect(totalSupply).to.equal('3')
  })

  it('Can presale mint 2 then 1', async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(2, index, proof, {
      value: presaleMintPrice.mul(2),
    })
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice.mul(1),
    })
    const totalSupply = await contract.totalSupply()
    expect(totalSupply).to.equal('3')
  })

  it("Can't presale mint under 1", async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await expect(
      contract.connect(bob).presaleMint(-1, index, proof, {
        value: presaleMintPrice.mul(1),
      })
    ).to.be.reverted
  })

  it("Can't presale mint over 3", async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await expect(
      contract.connect(bob).presaleMint(4, index, proof, {
        value: presaleMintPrice.mul(4),
      })
    ).to.be.revertedWith("Can't mint more than allocated")
  })

  it("Can't presale mint 2 twice", async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(2, index, proof, {
      value: presaleMintPrice.mul(2),
    })
    await expect(
      contract.connect(bob).presaleMint(2, index, proof, {
        value: presaleMintPrice.mul(2),
      })
    ).to.be.revertedWith("Can't mint more than allocated")
  })

  it("Can't presale mint 1 four times", async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice.mul(1),
    })
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice.mul(1),
    })
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice.mul(1),
    })
    await expect(
      contract.connect(bob).presaleMint(1, index, proof, {
        value: presaleMintPrice.mul(1),
      })
    ).to.be.revertedWith("Can't mint more than allocated")
  })

  it("Can't presale mint 2 then 1 twice", async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(2, index, proof, {
      value: presaleMintPrice.mul(2),
    })
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice.mul(1),
    })
    await expect(
      contract.connect(bob).presaleMint(1, index, proof, {
        value: presaleMintPrice.mul(1),
      })
    ).to.be.revertedWith("Can't mint more than allocated")
  })

  it("Can't presale mint 1 then 3", async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice.mul(1),
    })
    await expect(
      contract.connect(bob).presaleMint(3, index, proof, {
        value: presaleMintPrice.mul(3),
      })
    ).to.be.revertedWith("Can't mint more than allocated")
  })

  it('Presale can be stopped', async function () {
    // Unpause contract
    await contract.connect(owner).setPresaleActive(true)
    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice,
    })
    const totalSupply = await contract.totalSupply()
    expect(totalSupply).to.equal('1')
    const data = await contract.tokenURI(1)
    expect(data).to.equal(`${_baseURI}1.json`)

    // Stop presale
    await contract.connect(owner).setPresaleActive(false)
    await expect(
      contract.connect(bob).presaleMint(1, index, proof, {
        value: presaleMintPrice,
      })
    ).to.be.revertedWith('Presale has not begun')
  })

  it('Both sale and presale can be paused', async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)
    await contract.connect(owner).setPresaleActive(true)

    const index = accounts.indexOf(bob.address)
    const proof = tree.getHexProof(keccak256(abiEncode(index, bob.address)))
    await contract.connect(bob).presaleMint(1, index, proof, {
      value: presaleMintPrice,
    })

    await contract.connect(owner).pause()

    await expect(
      contract.mint(1, {
        value: mintPrice,
      })
    ).to.be.revertedWith('Pausable: paused')

    await expect(
      contract.connect(bob).presaleMint(1, index, proof, {
        value: presaleMintPrice,
      })
    ).to.be.revertedWith('Pausable: paused')
  })

  it('Can regular mint', async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)

    await contract.mint(1, {
      value: mintPrice,
    })
    const totalSupply = await contract.totalSupply()
    expect(totalSupply).to.equal('1')
    const data = await contract.tokenURI(1)
    expect(data).to.equal(`${_baseURI}1.json`)
  })

  it('Cannot mint more than MAX_SUPPLY', async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)

    for (var i = 1; i <= maxSupply; i++) {
      await contract.mint(1, {
        value: mintPrice,
      })
    }
    const totalSupply = await contract.totalSupply()
    expect(totalSupply).to.equal(maxSupply)
    // mint one more than MAX_SUPPLY
    await expect(
      contract.connect(alice).mint(1, {
        value: mintPrice,
      })
    ).to.be.revertedWith('SOLD OUT')
  })

  it(`Can mint MAX_MINT_COUNT pieces`, async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)

    await contract.connect(alice).mint(maxMintCount - 1, {
      value: mintPrice.mul(maxMintCount - 1),
    })
    const data = await contract.tokenURI(maxMintCount - 1)
    expect(data).to.equal(`${_baseURI}${maxMintCount - 1}.json`)
  })

  it(`Can't mint more than MAX_MINT_COUNT at once`, async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)

    await expect(
      contract.connect(alice).mint(maxMintCount + 1, {
        value: mintPrice.mul(maxMintCount + 1),
      })
    ).to.be.revertedWith('Tried to mint too many NFTs at once')
  })

  it('Can change base url', async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)
    await contract.connect(bob).mint(2, {
      value: mintPrice.mul(2),
    })
    await contract.connect(owner).setBaseURI('http://anotherapi.com/tokens/')

    const data = await contract.tokenURI(1)
    expect(data).to.equal('http://anotherapi.com/tokens/1.json')
  })

  it('Has Pausable minting', async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)

    await contract.connect(owner).pause()

    // Should fail to mint while paused
    await expect(
      contract.connect(bob).mint(1, {
        value: mintPrice,
      })
    ).to.be.revertedWith('Pausable: paused')

    await contract.unpause()

    await contract.connect(bob).mint(1, {
      value: mintPrice,
    })
    const data = await contract.tokenURI(1)
    expect(data).to.equal(`${_baseURI}1.json`)
  })

  it('Normal user cannot set presale live', async function () {
    // Should fail to mint while paused
    await expect(contract.connect(bob).setSaleActive(true)).to.be.revertedWith(
      `AccessControl: account ${bob.address.toLowerCase()} is missing role ${managerRole}`
    )
  })

  it('Normal user cannot set sale live', async function () {
    // Should fail to mint while paused
    await expect(contract.connect(bob).setSaleActive(true)).to.be.revertedWith(
      `AccessControl: account ${bob.address.toLowerCase()} is missing role ${managerRole}`
    )
  })

  it('Normal user cannot Pause minting', async function () {
    // Should fail to mint while paused
    await expect(contract.connect(bob).pause()).to.be.revertedWith(
      `AccessControl: account ${bob.address.toLowerCase()} is missing role ${managerRole}`
    )
  })

  it("Can't add a manager unless you're an admin", async function () {
    await expect(
      contract.connect(bob).grantRole(managerRole, bob.address)
    ).to.be.revertedWith(
      `AccessControl: account ${bob.address.toLowerCase()} is missing role ${adminRole}`
    )
  })

  it('Can add a fresh manager', async function () {
    await contract.connect(owner).grantRole(managerRole, bob.address)
    const isAdmin = await contract.hasRole(managerRole, bob.address)
    expect(isAdmin).to.equal(true)
  })

  it('Non-manager cannot withdraw money', async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)

    // Add funds
    await contract.connect(bob).mint(maxMintCount, {
      value: mintPrice.mul(maxMintCount),
    })
    await expect(contract.connect(alice).withdraw()).to.be.revertedWith(
      `AccessControl: account ${alice.address.toLowerCase()} is missing role ${managerRole}`
    )
  })

  it('Manager can withdraw money', async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)

    // Add funds
    await contract.connect(bob).mint(maxMintCount, {
      value: mintPrice.mul(maxMintCount),
    })

    // Pause contract
    await contract.connect(owner).pause()

    // Store initial balances
    const aliceBalance = await contract.provider.getBalance(alice.address)
    const contractBalance = await contract.provider.getBalance(contract.address)
    // Make Bob a manager
    await contract.connect(owner).grantRole(managerRole, bob.address)
    // Set Alice as the withdrawal wallet
    await contract.connect(owner).setWithdrawalWallet(alice.address)
    // Withdraw money to Alice
    await contract.connect(bob).withdraw()
    const newAliceBalance = await contract.provider.getBalance(alice.address)
    // Check alice's new balance increased
    expect(newAliceBalance).to.equal(aliceBalance.add(contractBalance))
  })

  it('Can withdraw to a splitter contract', async function () {
    // Unpause contract
    await contract.connect(owner).setSaleActive(true)
    // Add funds
    await contract.connect(bob).mint(maxMintCount, {
      value: mintPrice.mul(maxMintCount),
    })
    // Pause contract
    await contract.connect(owner).pause()
    // Store initial balances
    const splitContractBalance = await contract.provider.getBalance(splitter.address)
    const contractBalance = await contract.provider.getBalance(contract.address)
    // Make Bob a manager
    await contract.connect(owner).grantRole(managerRole, bob.address)
    // Set Split contract as the withdrawal wallet
    await contract.connect(owner).setWithdrawalWallet(splitter.address)
    // Withdraw money to Split contract
    await contract.connect(bob).withdraw()
    const newSplitterBalance = await contract.provider.getBalance(splitter.address)
    // Check Split contract's new balance increased
    expect(newSplitterBalance).to.equal(splitContractBalance.add(contractBalance))
  })

  it('Admin mint', async function () {
    // Ensure admins can mint while contract is paused
    await contract.pause()

    // Add a manager
    await contract.grantRole(managerRole, bob.address)

    // Mint from Bob to Alice
    await contract.connect(bob).artistMint(1, alice.address)
    const data = await contract.tokenURI(1)
    expect(data).to.equal(`${_baseURI}1.json`)

    // Ensure non-manager can't mint
    await expect(contract.connect(alice).artistMint(1, alice.address)).to.be.revertedWith(
      `AccessControl: account ${alice.address.toLowerCase()} is missing role ${managerRole}`
    )
  })

  it('Admins can only mint ARTIST_PROOF_COUNT of artist proofs', async function () {
    await contract.connect(owner).artistMint(artistProofCount - 5, bob.address)
    await contract.connect(owner).artistMint(1, alice.address)

    await expect(contract.connect(owner).artistMint(6, alice.address)).to.be.revertedWith(
      'Exceeded max proofs'
    )
  })
})

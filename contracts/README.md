# ERC721 Contract setup

## Updating your environment variables

Before you can begin, you will need to set up an etherscan account, and an alchemy account.
You will need an API key from both of these services.

```shell
cp .env.example .env
// add the required .env values
```


## Example contract

Your main contract lives within `contracts/YOURCONTRACT.sol`.

All references to "YOURCONTRACT" should be changed to the name of your own project.
The filename itself isn't referenced within the rest of the code, the actual definitions within `contracts/YOURCONTRACT.sol` are the important parts to change.

These appear within:
1. `contracts/YOURCONTRACT.sol` (lines: 18,38)
2. `test/test.js` (lines: 4,13)
3. `scripts/deploy-testnet.js` (line: 6)
4. `scripts/deploy.js` (line: 7)

The most important part of your contract development sits inside of `test/test.js`.
This contains an extensive suite of tests which should test every possible function of the contract, as well as covering as many breaking cases you can think of.

These tests can be run using:
```shell
npx hardhat test
```

## Local development and testing

For local development, and testing of your frontend app, you will need to run a local hardhat node, and deploy the contract onto it.

To run a local hardhat node,

```shell
npx hardhat node
```

Then we need to deploy the contract onto the node (this needs to happen every time you stop and then restart the node).

```shell
npx hardhat run scripts/deploy-testnet.js --network localhost
```

Then copy the 'Token address' which is returned (ie. "0x6969B2315678afecb367f032d93F642f64180aa3"), this will need to go into then .env.local file within our main frontend app as `NEXT_PUBLIC_CONTRACT_ADDRESS=`. We will also use this to interact with the contract through the hardhat console, so keep it saved somewhere close to hand.

Then, the last step, the contract begins paused, so we need to unpause it to interact with it with our frontend.

```shell
npx hardhat console --network localhost
```

Then, inside the console, run these two commands:

```shell
const c = await (await ethers.getContractFactory("YOURCONTRACT")).attach("0x6969B2315678afecb367f032d93F642f64180aa3")
```

```shell
c.unpause()
```

* One little gotcha, if you're using a wallet (like [Metamask](https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node)) to connect to hardhat for testing, every time you restart the network, you will need to [reset your nonce](https://medium.com/singapore-blockchain-dapps/reset-metamask-nonce-766dd4c27ca8) on your rinkeby wallet, as this needs to be in sync with the local hardhat network.

## Testnet deployment

Before you can deploy the contract on rinkeby, you will need to set up a fresh wallet which you will never use on the ethereum mainnet (best practice is to set up a fresh rinkeby wallet for each new project). We will be using the private key of this wallet to deploy, so there is a non-trivial chance you will accidentally leak it. This is why it is important not to use a wallet which also contains ether, or assets from mainnet.

This wallet will also needed to be seeded with some rinkeby ether, which can be attained from one of the rinkeby faucets for free. :)

Once you have this all set up, update the `.env` file within this contracts folder with your rinkeby wallet private key.

If you want to keep your private key extra-secure, you can use `scripts/deploy.js` instead of `scripts/deploy-testnet.js` in the deploy command. This will verify the transactions using <https://frame.sh>, which you can install, and then add your rinkeby wallet to, and use that to verify the required transaction.

Deploying the contract to the rinkeby testnet is as simple as running:

```shell
npx hardhat run scripts/deploy-testnet.js --network rinkeby
```

This will return a contract address which you can view directly on <https://rinkeby.etherscan.io/>, save this contract address somewhere, as you will need it for the next step.

Before you can view the source code and run any of the methods directly on etherscan (like unpausing the contract, don't forget that part!), you will need to verify the contract.

```shell
npx hardhat verify "0x6969B2315678afecb367f032d93F642f64186969" --network rinkeby
```

Once this has completed, you can view your contract, including all of the source code, and test out the methods (as long as you are using the same rinkeby wallet which deployed the contract - the one matching the rinkeby private key you are using inside your .env file).

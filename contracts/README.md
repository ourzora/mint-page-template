# ERC721 Contract setup

## Updating your environment variables

To install all the required libraries you will need to first run
```shell
yarn install
```
within this folder.

Before you can begin testing in earnest, you will need to set up an etherscan and an alchemy account.
You will need your API keys from both of these services. For now you can leave `RINKEBY_PRIVATE_KEY` empty.

```shell
cp .env.example .env
// add the required .env values
```


## Example contract & testing

Your main contract lives within `contracts/YourContract.sol`.

All references to "YourContract" should be changed to the name of your own project.
The filename itself isn't referenced within the rest of the code, the actual definitions within `contracts/YourContract.sol` are the important parts to change.

These appear within:
1. `contracts/YourContract.sol` (lines: 18,38)
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

For local development and testing of your frontend app, you will need to a local hardhat node running, and then to deploy your contract onto it.

To run a local hardhat node,

```shell
npx hardhat node
```

When you start up a node, it will spit out a number of test addresses, you can take one of the private keys and [connect it to Metamask](https://stackoverflow.com/questions/68814078/how-do-i-add-ether-to-my-localhost-metamask-wallet-with-hardhat) and use it to test your frontend app in-browser.

Then we need to deploy the contract onto the node (note: you need to do this every time you restart the node).

```shell
npx hardhat run scripts/deploy-testnet.js --network localhost
```

Copy the 'Token address' which is returned (ie. `0x6969B2315678afecb367f032d93F642f64180aa3`), this will need to go into your `.env.local` file within the main frontend app as `NEXT_PUBLIC_CONTRACT_ADDRESS=`. We will also use this to interact with the contract through the hardhat console, so keep it saved somewhere close to hand.

Then, the last step, the contract begins paused, so we need to `unpause` it to test most of the useful methods.

```shell
npx hardhat console --network localhost
```

Then, inside the console, run these two commands:

```shell
const c = await (await ethers.getContractFactory("YourContract")).attach("0x6969B2315678afecb367f032d93F642f64180aa3")
```

```shell
c.unpause()
```

* One little gotcha, if you're using a wallet (like [Metamask](https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node)) to connect to hardhat for testing, every time you restart the network, you will need to [reset your nonce](https://medium.com/singapore-blockchain-dapps/reset-metamask-nonce-766dd4c27ca8) on your rinkeby wallet, as this needs to be in sync with the local hardhat network.

## Testnet deployment

Before you can deploy the contract on rinkeby, you will need to set up a fresh wallet address. This wallet can NEVER be used on the ethereum mainnet (best practice is to set up a fresh rinkeby wallet for each new project). We will be using the private key of this wallet to deploy, so there is a non-trivial chance you will accidentally leak it publicly. It is important to use a wallet address which does NOT contain any ether or assets on the ethereum mainnet, unless you are willing to risk losing them.

This wallet will also need some rinkeby ether, which can be attained from one of the rinkeby faucets for free. :)
The faucets which actually work do tend to change quite frequently, so it is best to check for the best current rinkeby faucet on discord or reddit [references needed].

Once you have this all set up, update the `.env` file within folder with your rinkeby wallet private key.

Note: If you want to keep your private key extra-secure, you can use `scripts/deploy.js` instead of `scripts/deploy-testnet.js` in the following deploy command. This will verify the transactions using <https://frame.sh>, which you can install, add your rinkeby wallet to, and use to verify the required transaction.

Deploying the contract to the rinkeby testnet is as simple as running:

```shell
npx hardhat run scripts/deploy-testnet.js --network rinkeby
```

This will return a contract address which you can view directly on <https://rinkeby.etherscan.io/token/YOURCONTRACT_ADDRESS>. Save this contract address somewhere, as you will need it for the next step.

Before you can view the source code and run any of the methods directly on etherscan (like unpausing the contract, don't forget that part!), you will need to verify the contract.

```shell
npx hardhat verify "0x6969B2315678afecb367f032d93F642f64186969" --network rinkeby
```

Once this has completed, you can view your contract, including all of the source code, and test out all the methods (any admin-only methods will require using the same rinkeby wallet address which deployed the contract - the one matching the rinkeby private key you are using inside your .env file - or used through frame.sh).

You can also update the `NEXT_PUBLIC_CONTRACT_ADDRESS=` in your main frontend app `.env.local` file and test your site using the deployed contract on rinkeby directly.

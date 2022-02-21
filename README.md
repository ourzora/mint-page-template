## Zora NFT Launch

First you will need to run a local node, go into the contract directory and run,

```
cd contracts
npx hardhat node
```

Next we need to deploy the contract onto the running node (there's more information about this in `contracts/README.md`).

```
npx hardhat run scripts/deploy-testnet.js --network localhost
```
Copy the 'Token address' which is returned (ie. `0x6969B2315678afecb367f032d93F642f64180aa3`).

Then back in the main directory,

```
cd ..
cp .env.local.example .env.local
# change NEXT_PUBLIC_CONTRACT_ADDRESS to the contract address output from the deploy script (ie. 0x6969B2315678afecb367f032d93F642f64180aa3)
# change NEXT_PUBLIC_RPC_URL to your alchemy or infura URL
# change NEXT_PUBLIC_RINKEBY_RPC_URL to your alchemy or infura URL
```

Now finally you can install all the required packages, and run the server. :)

```
yarn install
yarn dev
```

# Interacting with a contract

Check out the README in `/contracts` for more information.

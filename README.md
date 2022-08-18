# Zora Mint Page Template

Ideally, first create your collection here: <https://create.zora.co> or here <https://testnet.create.zora.co>, and then copy the contract address after it has been deployed.

Alternatively, you can test with one of the included collections while you're setting up, or grab _any_ collection address from either the above sites (just make sure you update `NEXT_PUBLIC_CHAIN_ID` to match the network the contract exists on).

## Clone and deploy with Vercel

Click the '▲ Deploy' button below to clone your own version of the mint page template.

You will be prompted to fill in three variables as part of the deployment process.

`ALCHEMY_ID` can be found by creating a new project in [Alchemy](https://dashboard.alchemyapi.io/) and then grabbing the API KEY from the project dashboard page (after clicking the 'Get Key' button)

`NEXT_PUBLIC_CHAIN_ID` will be the chain your contract exists on.
```
1 = Ethereum mainnet
4 = Rinkeby
5 = Goerli
```

`NEXT_PUBLIC_CONTRACT_ADDRESSES` will be your contract address (or a comma-separated list if you want to render multiple contracts.


### Deploy

Start your own custom minting site using the deploy link below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fourzora%2Fmint-page-template&env=ALCHEMY_ID,NEXT_PUBLIC_CHAIN_ID,NEXT_PUBLIC_CONTRACT_ADDRESSES)


## Run the mint site locally

1. Copy `.env.local.example`, and rename it to `.env.local`. Files starting with a dot are often hidden in the file explorer, so you may need to open the folder with a code editor like Visual Studio Code or Atom to see it.

2. Update the values inside the newly created `.env.local` file.

`ALCHEMY_ID` can be found by creating a new project in [Alchemy](https://dashboard.alchemyapi.io/) and then grabbing the API KEY from the project dashboard page (after clicking the 'Get Key' button)
`NEXT_PUBLIC_CHAIN_ID` will be the chain your contract exists on.
```
1 = Ethereum mainnet
4 = Rinkeby
5 = Goerli
```

`NEXT_PUBLIC_CONTRACT_ADDRESSES` will be your contract address (or a comma-separated list if you want to render multiple contracts.

The final `.env.local` file should look something like this:
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000

NEXT_PUBLIC_IMAGE_HOST=
NEXT_PUBLIC_IMAGE_HOST_APPEND=

# First create a new project on Alchemy, and grab the API Key from the project dashboard (under 'View Key')
ALCHEMY_ID=xxCG3Cw2CrnL5PM0bvqgZ6TFpdNyL6Xx

# 1 = mainnet, #4 = rinkeby, #1337 = hardhat (local)
NEXT_PUBLIC_CHAIN_ID=4

# Comma-separated for multiple contracts
NEXT_PUBLIC_CONTRACT_ADDRESSES=0xd1510f0cfb647a438baa570c85ef9d8c7d24595f
```

3. If you don't have it already, you will need to install [Node](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

4. Then install all the required packages, and run the server. :)

Open the project folder in console and run the following two commands.
```
yarn install
yarn dev
```

Your project should now be running and accessible on `http://localhost:3000`

---

You can customise the main theme in `styles/theme.css.ts`, and add custom css overrides in `styles/global.css`

Good luck! :)


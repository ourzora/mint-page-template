## Zora Mint Page Template

Ideally, first create your collection here: <https://create.zora.co> or here <https://testnet.create.zora.co>, and then copy the contract address after it has been deployed.

Alternatively, you can test with one of the included collections while you're setting up, or grab _any_ collection address from either the above sites (just make sure you update `NEXT_PUBLIC_CHAIN_ID` to match the network the contract exists on).

```
cp .env.local.example .env.local

# vi .env.local
# change NEXT_PUBLIC_CHAIN_ID to the right network (4 for rinkeby, 1 for mainnet)
# update ALCHEMY_ID with your alchemy id
```

To change the target collection, open up `lib/constants.ts` and replace the `collectionAddressesList` with a list of collections you want to render (just a single collection is fine as well).

Then install all the required packages, and run the server. :)
```
yarn install
yarn dev
```

You can customise the main theme in `styles/theme.css.ts`, and add custom css overrides in `styles/global.css`

Good luck! :)

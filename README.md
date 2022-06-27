## Zora Create Drop Template
```
cd ..
cp .env.local.example .env.local
# change NEXT_PUBLIC_CONTRACT_ADDRESS to the contract address you're using
# change NEXT_PUBLIC_CHAIN_ID to the right network
# change ALCHEMY_ID to your alchemy or infura URL
```

Now finally you can install all the required packages, and run the server. :)

```
yarn install
yarn dev

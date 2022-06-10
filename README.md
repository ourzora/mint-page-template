## Zoratopia NYC Project
```
cd ..
cp .env.local.example .env.local
# change NEXT_PUBLIC_CONTRACT_ADDRESS to the contract address output from the deploy script (ie. 0x6969B2315678afecb367f032d93F642f64180aa3)
# change NEXT_PUBLIC_CAHIN_ID to the right network
# change NEXT_PUBLIC_ALCHEMY_ID to your alchemy or infura URL
```

Now finally you can install all the required packages, and run the server. :)

```
yarn install
yarn dev

# Zora Create / Mint Page Template

Demo site: <https://mint-page-template.vercel.app/>

## Step 1. Creating a mintable collection

First create your collection here (for mainnet) <https://create.zora.co> or here (for rinkeby) <https://testnet.create.zora.co>, and copy the contract address once your collection has been deployed.

Alternatively, you can test with one of the included collections while you're setting up, or grab _any_ collection address from either of the above sites (just make sure you update `NEXT_PUBLIC_CHAIN_ID` to match the network the collection exists on).

## Step 2 (Option A). Clone and deploy with Vercel

Click the '▲ Deploy' button below to clone your own version of the mint page template.

You will be prompted to fill in three variables as part of the deployment process.

`NEXT_PUBLIC_ALCHEMY_ID` can be found by creating a new project in [Alchemy](https://dashboard.alchemyapi.io/) and then grabbing the API KEY from the project dashboard page and clicking the 'Get Key' button.

`NEXT_PUBLIC_CHAIN_ID` will be the chain your contract exists on.

```
1 = Ethereum mainnet
4 = Rinkeby
5 = Goerli
```

`NEXT_PUBLIC_CONTRACT_ADDRESSES` will be your contract address (or a comma-separated list if you want to render multiple contracts).

### Deploy

Create your own custom minting site using the deploy link below. :)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fourzora%2Fmint-page-template&env=NEXT_PUBLIC_ALCHEMY_ID,NEXT_PUBLIC_CHAIN_ID,NEXT_PUBLIC_CONTRACT_ADDRESSES)

## Step 2 (Option B). Run the mint site locally

First [clone the repository locally](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

1. Copy `.env.local.example`, and rename it to `.env.local`. Files starting with a dot are often hidden in the file explorer, so you may need to open the folder with a code editor like [Visual Studio Code](https://code.visualstudio.com/) or [Atom](https://atom.io/) to see it.

2. Update the values inside the newly created `.env.local` file.

`NEXT_PUBLIC_ALCHEMY_ID` can be found by creating a new project in [Alchemy](https://dashboard.alchemyapi.io/) and then grabbing the API KEY from the project dashboard page and clicking the 'Get Key' button.

`NEXT_PUBLIC_CHAIN_ID` will be the chain your contract exists on.

```
1 = Ethereum mainnet
4 = Rinkeby
5 = Goerli
```

`NEXT_PUBLIC_CONTRACT_ADDRESSES` will be your contract address (or a comma-separated list if you want to render multiple contracts.

If needed, you can grab all of the edition contract addresses created by a single wallet by running the following command in a terminal, replacing `0x17cd072cBd45031EFc21Da538c783E0ed3b25DCc` with the desired wallet address (requires python).
```
# Rinkeby subgraph: https://api.thegraph.com/subgraphs/name/iainnash/erc721droprinkeby
# Goerli subgraph: https://api.thegraph.com/subgraphs/name/iainnash/erc721drop-goerli

curl -s 'https://api.thegraph.com/subgraphs/name/iainnash/zora-editions-mainnet' \
  -X POST -H 'content-type: application/json' \
  --data '{
    "query": "{erc721Drops(where: { owner: \"0x17cd072cBd45031EFc21Da538c783E0ed3b25DCc\", }) { address}}"
  }' | python3 -c "import sys, json; print(','.join(list(map(lambda x: x['address'], json.load(sys.stdin)['data']['erc721Drops']))))"
```

The final `.env.local` file should now look something like this:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# This will be used to replace ipfs:// in IPFS urls, if left blank it will default to using 'https://ipfs.io/ipfs/'
NEXT_PUBLIC_IMAGE_HOST=
# If your image host needs file extensions after the IPFS hash, you can add it here (ie. .jpg)
NEXT_PUBLIC_IMAGE_HOST_APPEND=

# First create a new project on Alchemy, and grab the API Key from the project dashboard (under 'View Key')
NEXT_PUBLIC_ALCHEMY_ID=xxCG3Cw2CrnL5PM0bvqgZ6TFpdNyL6Xx

# 1 = mainnet, 4 = rinkeby, 5 = goerli, 1337 = hardhat (local)
NEXT_PUBLIC_CHAIN_ID=4

# Comma-separated for multiple contracts
NEXT_PUBLIC_CONTRACT_ADDRESSES=0xd1510f0cfb647a438baa570c85ef9d8c7d24595f
```

3. If you don't have it already, you will need to install [Node](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).

4. Then install all the required packages, and run the server. :)

Open the project folder in a terminal and run the following two commands.

```
yarn install
yarn dev
```

Your project should now be running and accessible on `http://localhost:3000`.

---

## Theming / Styling

You can customise the main theme in `styles/theme.css.ts`, and add custom css overrides in `styles/global.css`.

For a simple color scheme change, you can change the color values in `styles/theme.css.ts`.

```
// Valid colour values are short and long hex codes (#00ff00) (#f00)
const { colors, shadows } = colorTheme({
  foreground: '#252329',
  background: '#ffffff',
  accent: '#92ea22',
})
```

Typefaces and settings are compiled from `styles/tokens/typography.ts`.

The full theme token set is compiled from `styles/theme.css.ts` and contains all the following values which can be kept as default or individually overridden:

```
{
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    mono: `'Roboto Mono', monospace`,
  },
  fontSizing: {
    fontSize: {
      0: '0',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      28: '28px',
      30: '30px',
      35: '35px',
      40: '40px',
      48: '48px',
      50: '50px',
      65: '65px',
      80: '80px',
      unset: 'unset',
    },
    lineHeight: {
      0: '0',
      14: '14px',
      20: '20px',
      24: '24px',
      25: '25px',
      30: '30px',
      34: '34px',
      40: '40px',
      50: '50px',
      55: '55px',
      65: '65px',
      70: '70px',
      85: '85px',
      95: '95px',
      unset: 'unset',
    },
    fontWeight: {
      paragraph: '400',
      heading: '500',
      label: '600',
      display: '700',
    },
  },
  radii: {
    tiny: '2px',
    small: '4px',
    normal: '5px',
    curved: '10px',
    phat: '20px',
    round: '9999px',
  },
  size: {
    x0: '0px',
    x1: '4px',
    x2: '8px',
    x3: '12px',
    x4: '16px',
    x5: '20px',
    x6: '24px',
    x7: '28px',
    x8: '32px',
    x9: '36px',
    x10: '40px',
    x11: '44px',
    x12: '48px',
    x13: '52px',
    x14: '56px',
    x15: '60px',
    x16: '64px',
    x17: '68px',
    x18: '72px',
    x19: '76px',
    x20: '80px',
    x21: '84px',
    x22: '88px',
    x23: '92px',
    x24: '96px',
    x25: '100px',
    x26: '104px',
    x27: '108px',
    x28: '112px',
    x29: '116px',
    x30: '120px',
    x32: '128px',
    x64: '256px',
    auto: 'auto',
    '100vw': '100vw',
    '100vh': '100vh',
    '100%': '100%',
    unset: 'unset',
  },
  space: {
    x0: '0px',
    x1: '4px',
    x2: '8px',
    x3: '12px',
    x4: '16px',
    x5: '20px',
    x6: '24px',
    x7: '28px',
    x8: '32px',
    x9: '36px',
    x10: '40px',
    x11: '44px',
    x12: '48px',
    x13: '52px',
    x14: '56px',
    x15: '60px',
    x16: '64px',
    x17: '68px',
    x18: '72px',
    x19: '76px',
    x20: '80px',
    x21: '84px',
    x22: '88px',
    x23: '92px',
    x24: '96px',
    x25: '100px',
    x26: '104px',
    x27: '108px',
    x28: '112px',
    x29: '116px',
    x30: '120px',
    x32: '128px',
    x64: '256px',
    auto: 'auto',
  },
  ease: {
    in: 'cubic-bezier(0.32, 0, 0.67, 0)',
    out: 'cubic-bezier(0.33, 1, 0.68, 1)',
    inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
  },
  border: {
    width: {
      none: '0',
      thin: '1px',
      normal: '2px',
      thick: '4px',
    },
    style: {
      solid: 'solid',
      dashed: 'dashed',
      dotted: 'dotted',
    },
  },
  colors: {
    background1: '#FFFFFF',
    background2: '#F2F2F2',

    text1: '#000000',
    text2: '#4D4D4D',
    text3: '#808080',
    text4: '#B3B3B3',

    icon1: '#000000',
    icon2: '#B3B3B3',

    border: '#F2F2F2',
    borderOnImage: 'rgba(0, 0, 0, 0.1)',

    backdrop: 'rgba(0, 0, 0, 0.17)',

    accent: '#000000',
    accentHover: '#282828',
    accentActive: '#333333',
    accentDisabled: '#505050',
    onAccent: '#FFFFFF',
    onAccentDisabled: '#ABABAB',

    neutral: '#EDEDED',
    neutralHover: '#DEDEDE',
    neutralActive: '#D8D8D8',
    neutralDisabled: '#EDEDED',
    onNeutral: '#000000',
    onNeutralDisabled: '#C1C1C1',

    ghost: '#FFFFFF',
    ghostHover: '#F2F2F2',
    ghostActive: '#EDEDED',
    ghostDisabled: '#EDEDED',
    onGhost: '#000000',
    onGhostDisabled: '#C1C1C1',

    positive: '#1CB687',
    positiveHover: '#16AD7F',
    positiveActive: '#13A87A',
    positiveDisabled: '#8DE4CA',
    onPositive: '#FFFFFF',
    onPositiveDisabled: '#63C8AA',

    negative: '#F03232',
    negativeHover: '#E42D2D',
    negativeActive: '#DF2929',
    negativeDisabled: '#F3B4B4',
    onNegative: '#FFFFFF',
    onNegativeDisabled: '#E88A8A',

    warning: '#F5A623',
    warningHover: '#ED9F1D',
    warningActive: '#E79918',
    warningDisabled: '#F9DEB1',
    onWarning: '#FFFFFF',
    onWarningDisabled: '#DDB777',
  },
  shadows: {
    small '0px 4px 10px rgba(0, 0, 0, 0.06)',
    medium: '0px 9px 20px rgba(0, 0, 0, 0.14)',
  },
}
```

Good luck! :)

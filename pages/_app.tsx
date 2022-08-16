import '@rainbow-me/rainbowkit/styles.css'
import '@zoralabs/zord/index.css'
import 'styles/global.css'

import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig, chain } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { contractAddress } from '@lib/constants'
import { ThemeProvider } from 'degen'
import ERC721DropContractProvider from 'providers/ERC721DropProvider'
import 'degen/styles'

const { chains, provider } = configureChains(
  [
    chain.goerli, chain.mainnet, chain.polygonMumbai
  ],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Zora Create',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={lightTheme({
            accentColor: 'black',
            borderRadius: 'small',
          })}
        >
          <ERC721DropContractProvider erc721DropAddress={contractAddress}>
            <Component {...pageProps} />
          </ERC721DropContractProvider>
        </RainbowKitProvider>
      </WagmiConfig>    
    </ThemeProvider>
  )
}

export default App

import '@rainbow-me/rainbowkit/styles.css'
import '@zoralabs/zord/index.css'
import 'styles/theme.css'
import 'styles/global.css'

import { SWRConfig } from 'swr'
import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit'
import { defaultChains, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'

const { chains, provider } = configureChains(
  [
    defaultChains.find(
      (chain) => chain.id.toString() === process.env.NEXT_PUBLIC_CHAIN_ID
    )!,
  ],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID })]
)

const { connectors } = getDefaultWallets({
  appName: 'Zora Create Minting Page',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={lightTheme({
          accentColor: 'black',
          borderRadius: 'small',
        })}
      >
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App

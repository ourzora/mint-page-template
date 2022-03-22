import { chains } from '@lib/chains'
import { chainId, title } from '@lib/constants'

import { providers } from 'ethers'
import { Provider } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'

function App({ Component, pageProps }) {
  const provider = () => {
    const chain = chains.find((x) => x.id == chainId)?.rpcUrls[0]
    return new providers.StaticJsonRpcProvider(chain)
  }

  // Set up connectors
  const connectors = () => {
    const rpcUrl = chains.find((x) => x.id == chainId)?.rpcUrls[0]
    const rpcUrls = chains.reduce(
      (obj, item) => Object.assign(obj, { [item.id]: item.rpcUrls[0] }),
      {}
    )
    return [
      new InjectedConnector({
        chains: chains,
        options: { shimDisconnect: true },
      }),
      new WalletConnectConnector({
        options: {
          qrcode: true,
          rpc: rpcUrls,
        },
      }),
      new WalletLinkConnector({
        options: {
          appName: title,
          jsonRpcUrl: rpcUrl,
        },
      }),
    ]
  }
  return (
    <Provider autoConnect provider={provider} connectors={connectors}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App

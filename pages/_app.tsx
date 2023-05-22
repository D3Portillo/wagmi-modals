import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Roboto } from "@next/font/google"
import { WagmiConfig, createClient, configureChains } from "wagmi"
import { polygon } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { Toaster } from "react-hot-toast"
import { InjectedConnector } from "wagmi/connectors/injected"

const { provider, chains } = configureChains([polygon], [publicProvider()])

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [new InjectedConnector({ chains })],
})

const nextFont = Roboto({ weight: ["400", "500", "700"], subsets: [] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nextFont.className}>
      <Toaster />
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </main>
  )
}

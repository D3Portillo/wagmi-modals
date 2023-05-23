import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Inter } from "@next/font/google"
import { WagmiConfig, createClient, configureChains } from "wagmi"
import { polygon } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

import { Toaster } from "react-hot-toast"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"

import MainLayout from "@/components/MainLayout"

const { provider, chains } = configureChains([polygon], [publicProvider()])

const client = createClient({
  autoConnect: true,
  provider,
  connectors: [new MetaMaskConnector({ chains })],
})

const nextFont = Inter({ weight: ["400", "500", "600", "700"], subsets: [] })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nextFont.className}>
      <Toaster />
      <WagmiConfig client={client}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </WagmiConfig>
    </main>
  )
}

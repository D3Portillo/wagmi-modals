import Image from "next/image"
import Link from "next/link"

import { useConnectMetamask } from "@/lib/wagmi"
import ConnectButton from "./ConnectButton"

import asset_logo from "@/assets/logo.svg"

function Navigation({ className }: { className?: string }) {
  return (
    <nav className={`flex items-center gap-8 ${className}`}>
      <Link href="/">
        <figure className="relative w-10 h-10">
          <Image
            className="object-contain w-full h-full"
            fill
            src={asset_logo}
            alt=""
          />
        </figure>
      </Link>

      <div className="flex-grow" />

      <Link
        className="text-sm whitespace-nowrap font-semibold hover:opacity-70"
        href="https://buy.moonpay.com/"
        target="_blank"
      >
        Buy Crypto
      </Link>

      <ConnectButton />
    </nav>
  )
}

export default Navigation

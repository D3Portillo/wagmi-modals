import Image from "next/image"
import { useConnect } from "wagmi"

import Link from "next/link"
import Button from "./Button"

import asset_logo from "@/assets/logo.svg"

function Navigation({ className }: { className?: string }) {
  const { connect, connectors } = useConnect()

  function handleConnect() {
    connect({
      connector: connectors?.[0], // Metamask Connector
    })
  }

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
        className="text-sm font-semibold hover:opacity-70"
        href="https://buy.moonpay.com/"
        target="_blank"
      >
        Buy Crypto
      </Link>

      <Button
        onClick={handleConnect}
        className="px-8 py-2"
        type="gradient-blue"
      >
        Connect
      </Button>
    </nav>
  )
}

export default Navigation

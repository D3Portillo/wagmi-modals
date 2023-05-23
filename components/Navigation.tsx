import Image from "next/image"

import asset_logo from "@/assets/logo.svg"
import Link from "next/link"
import Button from "./Button"

function Navigation() {
  return (
    <nav className="flex items-center gap-8">
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
        className="text-sm font-semibold hover:underline underline-offset-[6px] decoration-kakao-blue/40"
        href="/"
        target="_blank"
      >
        Buy Crypto
      </Link>

      <Button className="px-8 py-2" type="gradient-blue">
        Connect
      </Button>
    </nav>
  )
}

export default Navigation

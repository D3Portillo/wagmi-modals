import { Fragment } from "react"
import Image from "next/image"
import Button from "@/components/Button"
import Input from "@/components/Input"

function ConnectButton() {
  return <button>YAAY</button>
}

export default function Home() {
  return (
    <Fragment>
      <main className="min-h-screen">
        <h1 className="text-[calc(3vw+2rem)] font-bold mb-2">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ConnectButton />
        <section className="flex flex-col mt-12 max-w-sm gap-4">
          <h1 className="text-lg font-semibold">A 🦄 Design System</h1>
          <Input placeholder="A lil input" />
          <Button>Click Me!</Button>
        </section>
      </main>
    </Fragment>
  )
}

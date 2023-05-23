import { Fragment } from "react"
import Swap from "@/components/Swap"
import SeoTags from "@/components/SeoTags"

export default function Home() {
  return (
    <Fragment>
      <SeoTags />
      <Swap />
      <footer className="mt-32" />
    </Fragment>
  )
}

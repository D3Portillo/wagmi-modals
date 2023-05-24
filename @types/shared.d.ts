import { type PropsWithChildren } from "react"

export type PropsWithChildrenCx<Props = unknown> = PropsWithChildren<Props> & {
  className?: string
}

export type Token = {
  name: string
  symbol: string
  decimals: number
  address: string
  imageURI: string
}

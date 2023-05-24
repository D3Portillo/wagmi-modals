import { atom, useAtom } from "jotai"
import { MATIC, USDC } from "./tokenList"

const atomSwapor = atom({
  from: MATIC,
  to: USDC,
})

export const useAtomSwapor = () => useAtom(atomSwapor)

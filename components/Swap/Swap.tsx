import { FiArrowDown } from "react-icons/fi"
import { useMaticBalance } from "@/lib/matic"
import { prettifyNumber } from "@/lib/numbers"

import { useAtomSwapor } from "@/lib/jotai"
import { MdOutlineWallet } from "react-icons/md"
import ModalTrigger from "@/components/Modal/ModalTrigger"
import ModalConfirmSwap from "@/components/Modal/ModalConfirmSwap"
import TokenInput from "./TokenInput"

function Swap() {
  const [swapor, setSwapor] = useAtomSwapor()
  const { data } = useMaticBalance()

  function handleSwapTokens() {
    setSwapor(({ from, to }) => ({
      from: to,
      to: from,
    }))
  }

  return (
    <section className="bg-white rounded-2xl flex flex-col gap-2 p-4 border border-black/5 shadow-lg shadow-black/5 max-w-md mx-auto">
      <nav className="flex items-center justify-between">
        <h2>Swap</h2>
        <p className="text-sm flex items-center gap-1">
          <MdOutlineWallet className="text-base" />
          <span>{prettifyNumber(Number(data?.formatted || 0))} MATIC</span>
        </p>
      </nav>

      <TokenInput direction="from" token={swapor.from} />

      <section className="flex justify-center -my-[1.65rem] relative z-[1]">
        <button
          onClick={handleSwapTokens}
          className="bg-kakao-whiter group p-2 rounded-xl border-4 border-white"
        >
          <FiArrowDown className="text-xl group-hover:translate-y-px group-active:scale-105" />
        </button>
      </section>

      <TokenInput direction="to" token={swapor.to} />

      <ModalTrigger opens={ModalConfirmSwap} className="text-lg">
        Swap Assets
      </ModalTrigger>
    </section>
  )
}

export default Swap

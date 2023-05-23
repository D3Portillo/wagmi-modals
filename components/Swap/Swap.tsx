import { FiArrowDown } from "react-icons/fi"

import Input from "@/components/Input"
import ModalTrigger from "@/components/Modal/ModalTrigger"
import ModalConfirmSwap from "@/components/Modal/ModalConfirmSwap"

function Swap() {
  return (
    <section className="bg-white rounded-2xl flex flex-col gap-2 p-4 border border-black/5 shadow-lg shadow-black/5 max-w-md mx-auto">
      <h2>Swap</h2>

      <TokenInput />

      <section className="flex justify-center -my-[1.65rem] relative z-[1]">
        <button className="bg-kakao-whiter group p-2 rounded-xl border-4 border-white">
          <FiArrowDown className="text-xl group-hover:translate-y-px" />
        </button>
      </section>

      <TokenInput />

      <ModalTrigger opens={ModalConfirmSwap} className="text-lg">
        Swap Assets
      </ModalTrigger>
    </section>
  )
}

function TokenInput() {
  return (
    <fieldset className="bg-kakao-blue/[0.03] p-4 rounded-xl border">
      <div className="flex items-center text-2xl mb-2">
        <Input placeholder="0" />
      </div>

      <div className="flex items-center justify-between text-sm text-black/50">
        <span>$ 23.02</span>
        <span>Balance: 0.03</span>
      </div>
    </fieldset>
  )
}

export default Swap

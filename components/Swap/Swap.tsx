import Image from "next/image"
import { FiArrowDown } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"
import { useMaticBalance } from "@/lib/matic"
import { prettifyNumber } from "@/lib/numbers"

import Input from "@/components/Input"
import ModalTrigger from "@/components/Modal/ModalTrigger"
import ModalConfirmSwap from "@/components/Modal/ModalConfirmSwap"
import ModalAssetSelection from "@/components/Modal/ModalAssetSelection"
import asset_token_eth from "@/assets/tokens/eth.png"

function Swap() {
  const { data } = useMaticBalance()

  return (
    <section className="bg-white rounded-2xl flex flex-col gap-2 p-4 border border-black/5 shadow-lg shadow-black/5 max-w-md mx-auto">
      <nav className="flex items-center justify-between">
        <h2>Swap</h2>
        <p className="text-sm">
          Wallet ― {prettifyNumber(Number(data?.formatted || 0))} MATIC
        </p>
      </nav>

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
        <ModalTrigger opens={ModalAssetSelection}>
          {({ open }) => (
            <button
              onClick={open}
              className="flex gap-1 text-base items-center bg-kakao-blue/10 border border-transparent hover:border-kakao-purple/10 px-2 py-1 rounded-full"
            >
              <figure className="w-5 h-5 relative">
                <Image
                  fill
                  className="object-contain"
                  src={asset_token_eth}
                  alt=""
                />
              </figure>
              <strong className="font-semibold pl-1">ETH</strong>
              <IoIosArrowDown />
            </button>
          )}
        </ModalTrigger>
      </div>

      <div className="flex items-center justify-between text-sm text-black/50">
        <span>$ 23.02</span>
        <span>Balance: 0.03</span>
      </div>
    </fieldset>
  )
}

export default Swap

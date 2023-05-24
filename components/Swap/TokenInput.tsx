import type { Token } from "@/types/shared"
import { useCallback } from "react"
import Image from "next/image"

import { useAccountBalance } from "@/lib/wagmi"
import { prettifyNumber } from "@/lib/numbers"

import { IoIosArrowDown } from "react-icons/io"
import Input from "@/components/Input"
import ModalTrigger from "@/components/Modal/ModalTrigger"
import ModalAssetSelection from "@/components/Modal/ModalAssetSelection"

function TokenInput({
  token,
  direction,
}: {
  token: Token
  direction: "from" | "to"
}) {
  const { data: balance } = useAccountBalance(token.address)

  const ModalWithDirection = useCallback(
    (props: any) => <ModalAssetSelection {...props} direction={direction} />,
    [token.address]
  )

  return (
    <fieldset className="bg-kakao-blue/[0.03] p-4 rounded-xl border">
      <div className="flex items-center text-2xl mb-2">
        <Input placeholder="0" />
        <ModalTrigger opens={ModalWithDirection}>
          {({ open }) => (
            <button
              onClick={open}
              className="flex gap-1 text-base items-center bg-kakao-blue/10 border border-transparent hover:border-kakao-purple/10 px-2 py-1 rounded-full"
            >
              <figure className="w-5 h-5 relative">
                <Image
                  fill
                  className="object-contain"
                  src={token.imageURI}
                  alt=""
                />
              </figure>
              <strong className="font-semibold pl-1">{token.symbol}</strong>
              <IoIosArrowDown />
            </button>
          )}
        </ModalTrigger>
      </div>

      <div className="flex items-center justify-between text-sm text-black/50">
        <span>$ 23.02</span>
        <span>Balance: {prettifyNumber(Number(balance?.formatted || 0))}</span>
      </div>
    </fieldset>
  )
}

export default TokenInput

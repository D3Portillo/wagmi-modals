import Image from "next/image"
import TOKEN_LIST from "@/lib/tokenList"
import Modal, { type ModalProps } from "./Modal"

function ModalAssetSelection(props: ModalProps) {
  return (
    <Modal {...props}>
      <h2 className="mb-4">Select a token</h2>
      {TOKEN_LIST.map((token) => {
        return (
          <button
            key={`token-${token.address}`}
            className="w-full hover:bg-gradient-to-r from-white via-kakao-blue/5 to-kakao-blue/[0.01] flex text-left items-center py-2 gap-4"
          >
            <figure className="w-8 h-8 relative rounded-full border border-black/5">
              <Image
                fill
                className="object-contain w-full h-full"
                src={token.imageURI}
                alt=""
              />
            </figure>
            <div className="flex text-sm flex-col -space-y-0.5">
              <h3 className="font-semibold">{token.name}</h3>
              <p>{token.symbol}</p>
            </div>
            <div className="flex-grow text-right text-sm text-black/40">
              0 {token.symbol}
            </div>
          </button>
        )
      })}
    </Modal>
  )
}

export default ModalAssetSelection

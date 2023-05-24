import Image from "next/image"
import TOKEN_LIST from "@/lib/tokenList"
import Modal, { type ModalProps } from "./Modal"

function ModalAssetSelection(props: ModalProps) {
  return (
    <Modal {...props}>
      <h2 className="mb-4">Select a token</h2>
      {TOKEN_LIST.map((token) => {
        return (
          <section
            key={`token-${token.address}`}
            className="flex items-center py-2 gap-4"
          >
            <figure className="w-8 h-8 relative rounded-full border border-black/5">
              <Image
                fill
                className="object-contain w-full h-full"
                src={token.imageURI}
                alt=""
              />
            </figure>
            <div className="flex flex-col -space-y-1">
              <h3 className="text-sm font-semibold">{token.name}</h3>
              <p className="text-xs">{token.symbol}</p>
            </div>
            <div className="flex-grow text-right text-sm text-black/40">
              0 {token.symbol}
            </div>
          </section>
        )
      })}
    </Modal>
  )
}

export default ModalAssetSelection

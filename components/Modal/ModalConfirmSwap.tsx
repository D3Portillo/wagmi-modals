import Modal, { type ModalProps } from "./Modal"

import { useConnectedAccount, useConnectMetamask } from "@/lib/wagmi"
import { useAtomSwapor } from "@/lib/jotai"
import Button from "@/components/Button"
import Badge from "@/components/Badge"

function ModalConfirmSwap(props: ModalProps) {
  const { connect } = useConnectMetamask()
  const { isConnected } = useConnectedAccount()
  const [{ from, to }] = useAtomSwapor()

  return (
    <Modal {...props}>
      <h2>{isConnected ? "Confirm Swap" : "Not Connected"}</h2>

      {isConnected ? (
        <p>
          Confirm to swap <Badge>1 ${from.symbol}</Badge> for{" "}
          <Badge>32 ${to.symbol}</Badge>
        </p>
      ) : (
        <p>Connect your wallet to continue.</p>
      )}

      <section className="mt-6 text-lg flex flex-col">
        {isConnected ? (
          <Button
            asLink
            target="_blank"
            href={`https://app.1inch.io/#/137/simple/swap/${from.symbol}/${to.symbol}`}
          >
            Confirm
          </Button>
        ) : (
          <Button onClick={connect}>Connect Wallet</Button>
        )}
      </section>
    </Modal>
  )
}

export default ModalConfirmSwap

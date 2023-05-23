import { Fragment } from "react"
import Modal, { type ModalProps } from "./Modal"

import { useConnectedAccount, useConnectMetamask } from "@/lib/wagmi"
import Button from "@/components/Button"
import Badge from "../Badge"

function ModalConfirmSwap(props: ModalProps) {
  const { isConnected } = useConnectedAccount()

  return (
    <Modal {...props}>{isConnected ? <Confirm /> : <ConnectContent />}</Modal>
  )
}

function Confirm() {
  return (
    <Fragment>
      <h2>Confirm Swap</h2>
      <p>
        Confirm to swap <Badge>1 $ETH</Badge> for <Badge>32 $ONYX</Badge>
      </p>
      <Button onClick={() => alert("Confirm")} className="w-full text-lg mt-6">
        Confirm
      </Button>
    </Fragment>
  )
}

function ConnectContent() {
  const { connect } = useConnectMetamask()

  return (
    <Fragment>
      <h2>Not Connected</h2>
      <p>Connect your wallet to continue.</p>
      <Button onClick={connect} className="w-full text-lg mt-6">
        Connect Wallet
      </Button>
    </Fragment>
  )
}

export default ModalConfirmSwap

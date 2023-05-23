import Modal, { type ModalProps } from "./Modal"
import Button from "@/components/Button"
import { useConnectedAccount, useConnectMetamask } from "@/lib/wagmi"
import { Fragment, PropsWithChildren } from "react"

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
      <Button onClick={() => alert("Confirm")} className="w-full text-lg mt-4">
        Confirm
      </Button>
    </Fragment>
  )
}

function Badge({ children }: PropsWithChildren) {
  return (
    <span className="py-1 rounded-full text-[85%] px-2 bg-kakao-blue/5 text-kakao-blue">
      {children}
    </span>
  )
}

function ConnectContent() {
  const { connect } = useConnectMetamask()

  return (
    <Fragment>
      <h2>Not Connected</h2>
      <p>Connect your wallet to continue.</p>
      <Button onClick={connect} className="w-full text-lg mt-4">
        Connect Wallet
      </Button>
    </Fragment>
  )
}

export default ModalConfirmSwap

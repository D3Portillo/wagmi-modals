import { beautifyAddress } from "@/lib/helpers"
import { useConnectedAccount } from "@/lib/wagmi"

import Badge from "@/components/Badge"
import Button from "@/components/Button"
import Modal, { type ModalProps } from "./Modal"
import { useDisconnect } from "wagmi"

function ModalAccount(props: ModalProps) {
  const { disconnect } = useDisconnect()
  const { address } = useConnectedAccount()

  function handleDisconnect() {
    props.onClose()
    disconnect()
  }

  return (
    <Modal {...props}>
      <h2>Connected Wallet</h2>
      <p>
        Manage wallet <Badge>{beautifyAddress(address)}</Badge>
      </p>

      <section className="flex items-center gap-4 mt-6">
        <Button
          target="_blank"
          asLink
          href={`https://polygonscan.com/address/${address}`}
          type="outlined"
          className="w-full !px-0"
        >
          Polyscan
        </Button>
        <Button onClick={handleDisconnect} className="w-full !px-0">
          Disconnect
        </Button>
      </section>
    </Modal>
  )
}

export default ModalAccount

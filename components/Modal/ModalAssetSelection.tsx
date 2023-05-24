import Modal, { type ModalProps } from "./Modal"

function ModalAssetSelection(props: ModalProps) {
  return (
    <Modal {...props}>
      <h2>Select a token</h2>
      <p>Connect your wallet to continue.</p>
    </Modal>
  )
}

export default ModalAssetSelection

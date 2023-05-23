import { useEmojiAvatar } from "@/lib/avatars"
import { beautifyAddress } from "@/lib/helpers"
import { useConnectedAccount, useConnectMetamask } from "@/lib/wagmi"

import ModalTrigger from "./Modal/ModalTrigger"
import ModalAccount from "./Modal/ModalAccount"
import Button from "./Button"

function ConnectButton() {
  const { isConnected, address } = useConnectedAccount()
  const { connect } = useConnectMetamask()

  const avatar = useEmojiAvatar(address)

  if (isConnected) {
    return (
      <ModalTrigger opens={ModalAccount} className="pl-2 pr-4 py-2">
        <span
          style={{
            background: avatar.color,
          }}
          className="inline-flex w-6 h-6 items-center justify-center rounded-full mr-1"
        >
          {avatar.emoji}
        </span>
        <span>{beautifyAddress(address)}</span>
      </ModalTrigger>
    )
  }

  return (
    <Button onClick={connect} className="px-8 py-2" type="gradient-blue">
      Connect
    </Button>
  )
}

export default ConnectButton

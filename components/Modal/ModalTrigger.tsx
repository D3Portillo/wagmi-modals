import type { PropsWithChildrenCx } from "@/types/shared"
import type Modal from "./Modal"
import React, { Fragment } from "react"
import Button from "@/components/Button"
import useOnOffMachine from "@/lib/useOnOffMachine"

function ModalTrigger({
  opens: ModalContent,
  children,
  className,
}: PropsWithChildrenCx<{ opens: typeof Modal }>) {
  const modalMachine = useOnOffMachine()

  return (
    <Fragment>
      <ModalContent onClose={modalMachine.turnOff} isOpen={modalMachine.isOn} />
      <Button onClick={modalMachine.turnOn} className={className}>
        {children}
      </Button>
    </Fragment>
  )
}

export default ModalTrigger

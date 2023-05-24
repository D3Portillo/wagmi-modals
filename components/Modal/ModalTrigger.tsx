import type Modal from "./Modal"
import React, { Fragment, type ReactNode } from "react"
import useOnOffMachine from "@/lib/useOnOffMachine"
import Button from "@/components/Button"

type RenderProp = (props: { open: () => void }) => JSX.Element

function ModalTrigger({
  opens: ModalContent,
  children,
  className,
}: {
  opens: typeof Modal
  className?: string
  children: ReactNode | RenderProp
}) {
  const modalMachine = useOnOffMachine()

  return (
    <Fragment>
      <ModalContent onClose={modalMachine.turnOff} isOpen={modalMachine.isOn} />
      {typeof children === "function" ? (
        children({
          open: modalMachine.turnOn,
        })
      ) : (
        <Button onClick={modalMachine.turnOn} className={className}>
          {children}
        </Button>
      )}
    </Fragment>
  )
}

export default ModalTrigger

import { Fragment, type PropsWithChildren } from "react"
import { Dialog, Transition } from "@headlessui/react"

import { IoClose } from "react-icons/io5"

export type ModalProps = PropsWithChildren<{
  isOpen: boolean
  onClose: () => void
  unmount?: boolean
}>

function Modal({ children, isOpen, onClose, unmount }: ModalProps) {
  return (
    <Transition unmount={unmount} appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end md:items-center justify-center pt-4 md:px-4 md:pb-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full bg-white rounded-t-2xl md:rounded-b-2xl p-6 pb-8 shadow-lg shadow-black/20 max-w-md transform overflow-hidden transition-all">
                <button
                  onClick={onClose}
                  className="absolute top-0 right-0 text-xl opacity-50 hover:opacity-70 mt-3 mr-3"
                >
                  <IoClose />
                </button>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal

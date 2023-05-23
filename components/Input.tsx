import { classnames } from "@/lib/helpers"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={classnames(
        "bg-transparent focus:outline-none w-full",
        props.className
      )}
    />
  )
}

export default Input

import type { PropsWithChildrenCx } from "@/types/shared"
import type { HTMLProps } from "react"
import Link from "next/link"
import { classnames } from "@/lib/helpers"

function Button({
  children,
  className,
  type = "blue",
  asLink,
  ...props
}: PropsWithChildrenCx<
  HTMLProps<HTMLButtonElement> & {
    type?: "blue" | "gradient-blue" | "outlined"
    href?: string
    asLink?: boolean
    target?: "_blank"
  }
>) {
  const Container = asLink ? Link : "button"
  return (
    <Container
      {...(props as any)}
      className={classnames(
        className,
        className?.includes("py-") || "py-3",
        className?.includes("px-") || "px-16",
        "filter text-center hover:contrast-[1.15] rounded-xl font-semibold border-opacity-20",
        type === "blue" && "bg-kakao-blue text-white",
        type === "outlined" && "border text-kakao-blue",
        type === "gradient-blue" && "bg-gradient-kakao text-white shadow-xl",
        props.disabled &&
          "cursor-not-allowed grayscale text-opacity-50 hover:contrast-100"
      )}
    >
      {children}
    </Container>
  )
}

export default Button

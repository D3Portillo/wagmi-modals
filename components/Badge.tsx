import type { PropsWithChildren } from "react"

function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-block py-1 rounded-full text-[85%] px-2 bg-kakao-blue/5 text-kakao-blue">
      {children}
    </span>
  )
}

export default Badge

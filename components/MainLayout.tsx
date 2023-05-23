import { PropsWithChildrenCx } from "@/types/shared"
import Navigation from "./Navigation"

function MainLayout({ children, className }: PropsWithChildrenCx) {
  return (
    <main className={`mx-auto max-w-screen-lg p-4 ${className}`}>
      <Navigation />
      {children}
    </main>
  )
}

export default MainLayout

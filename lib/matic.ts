import { constants } from "ethers"
import { useBalance } from "wagmi"
import { polygon } from "wagmi/chains"
import { useConnectedAccount } from "./wagmi"

export const useMaticBalance = () => {
  const { address } = useConnectedAccount()
  return useBalance({
    address: address as any,
    enabled: Boolean(address),
    chainId: polygon.id,
    watch: true,
  })
}

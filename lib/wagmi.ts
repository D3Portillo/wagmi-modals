import { useEffect, useState } from "react"
import { useAccount, useBalance, useConnect, useContractRead } from "wagmi"

export type UseContractReadReturn = ReturnType<typeof useContractRead>

export const withFormatted = <T, Formatted>(
  result: T,
  formatterFunction: (
    data: T extends UseContractReadReturn ? T["data"] : T
  ) => Formatted
) => {
  return {
    ...result,
    formatted: formatterFunction((result as any).data),
  }
}

export const useAccountBalance = (token?: string) => {
  const { address } = useAccount()
  return useBalance({
    address,
    keepPreviousData: true,
    scopeKey: `useAccountBalance.${token}`,
    watch: true,
    token: token as any,
  })
}

export const useConnectedAccount = () => {
  const { address: wagmiAddress } = useAccount()
  const [address, setAddress] = useState("")

  useEffect(() => {
    setAddress(wagmiAddress || "")
  }, [wagmiAddress])

  return {
    isConnected: address.length > 1,
    address,
  }
}

export const useConnectMetamask = () => {
  const { connect: wagmiConnect, connectors } = useConnect()

  function connect() {
    wagmiConnect({
      connector: connectors?.[0], // Metamask Connector
    })
  }

  return {
    connect,
  }
}

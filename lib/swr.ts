import useSWR from "swr"

export const fetcher = (...args: any[]) =>
  fetch.apply(null, args as any).then((res) => res.json())

export const useTokenPrice = (address: string) => {
  return useSWR<{ priceUSD: number }>(`/api/price/${address}`, fetcher)
}

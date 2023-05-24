import type { NextApiRequest, NextApiResponse } from "next"
import Moralis from "moralis"

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address } = req.query as { address: string }
  res.status(200)
  res.setHeader("Cache-Control", "max-age=10, stale-while-revalidate=15")

  try {
    const response = await Moralis.EvmApi.token.getTokenPrice({
      chain: "0x89",
      exchange: "uniswap-v3",
      address,
    })

    res.send({
      priceUSD: Number(response.toJSON()?.usdPrice || 0),
    })
  } catch (apiError) {
    console.error({ apiError })
    res.send({
      priceUSD: 0,
    })
  }
}

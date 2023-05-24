import type { Token } from "@/types/shared"

export const MATIC = {
  name: "MATIC",
  symbol: "MATIC",
  decimals: 18,
  address: "0x0000000000000000000000000000000000001010",
  imageURI:
    "https://tokens-data.1inch.io/images/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
}

export const USDC = {
  name: "USD Coin",
  symbol: "USDC",
  decimals: 6,
  address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  imageURI:
    "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
}

const LIST: Array<Token> = [
  MATIC,
  {
    name: "Binance USD",
    symbol: "BUSD",
    decimals: 18,
    address: "0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7",
    imageURI:
      "https://tokens.1inch.io/0x9c9e5fd8bbc25984b178fdce6117defa39d2db39.png",
  },
  USDC,
  {
    name: "Wrapped Ethereum",
    symbol: "WETH",
    decimals: 18,
    address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    imageURI:
      "https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png",
  },
  {
    name: "Lido DAO Token",
    symbol: "LDO",
    decimals: 18,
    address: "0xC3C7d422809852031b44ab29EEC9F1EfF2A58756",
    imageURI:
      "https://tokens.1inch.io/0xc3c7d422809852031b44ab29eec9f1eff2a58756.png",
  },
  {
    name: "AAVE Token",
    symbol: "AAVE",
    decimals: 18,
    address: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
    imageURI:
      "https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
  },

  {
    name: "DAI Stablecoin",
    symbol: "DAI",
    decimals: 18,
    address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    imageURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
  },
]

export default LIST

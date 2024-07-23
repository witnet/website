import { localeCodes, type LanguageDictionary } from './types'

export const URLS: Record<string, string> = {
  ado: 'https://github.com/adoracles/',
  advocateProgram:
    'https://witnet.notion.site/The-Witnet-Advocate-Program-f572baff6b1d49a69d4db785a924fc61',
  bitmart: 'https://www.bitmart.com/trade/en-US?symbol=WIT_USDT',
  block_explorer: 'https://witnet.network/',
  changelly: 'https://changelly.com/es/buy/wit',
  data_feeds_explorer: 'https://feeds.witnet.io',
  discord: 'https://discord.gg/witnet',
  docker_node: 'https://hub.docker.com/r/witnet/witnet-rust/tags',
  documentation: 'https://docs.witnet.io/',
  gate: 'https://www.gate.io/trade/WIT_USDT',
  github: 'https://github.com/witnet',
  grantProgram:
    'https://witnet.notion.site/The-Witnet-Grant-Program-0e6bc5ddbe4a4bf8a22c262dedfe268f',
  letsexchange: 'https://letsexchange.io/coin/wit',
  linux_node: 'https://github.com/witnet/witnet-rust/releases',
  macos_node: 'https://github.com/witnet/witnet-rust/releases',
  mediaKit:
    'https://drive.google.com/drive/u/1/folders/1z9dSts64xyaIZqRvniMPDib7UWOE2P3z',
  medium: 'https://medium.com/witnet',
  mexc: 'https://www.mexc.com/exchange/WIT_USDT',
  my_wit_wallet: 'https://mywitwallet.com/',
  sheikah: 'https://sheikah.app/',
  newsletter: 'http://eepurl.com/iDxYzs',
  rasberrypi_node: 'https://github.com/witnet/witnet-rust/releases',
  reddit: 'https://reddit.com/r/witnet',
  simpleSwap: 'https://simpleswap.io/coins/wit',
  telegram: 'https://t.me/witnetio',
  windows_node: 'https://github.com/witnet/witnet-rust/releases',
  witnet_foundation: 'https://witnet.foundation',
  x: 'https://twitter.com/witnet_io',
  whitepaper: 'witnet.io/witnet-whitepaper.pdf',

  tutorials: 'https://docs.witnet.io/intro/tutorials',
  // TODO: Stake is not available yet so change the copy and link to the docs
  get_started: 'https://docs.witnet.io/intro/about',
  github_contribute: 'https://github.com/witnet/',
  //
  http_requests:
    'https://docs.witnet.io/smart-contracts/witnet-web-oracle/make-a-get-request',
  graph_ql:
    'https://docs.witnet.io/smart-contracts/witnet-web-oracle/query-graphql-apis-in-solidity',
  dynamic_requests:
    'https://docs.witnet.io/smart-contracts/witnet-web-oracle/dynamic-requests-in-solidity',
  // TODO: Uncomment next line and delete default url when docs are finished
  // api_reference:
  //   'https://docs.witnet.io/smart-contracts/witnet-web-oracle/api-reference',
  api_reference:
    'https://docs.witnet.io/smart-contracts/witnet-web-oracle/api-reference/radon-api',
  price_feed_routes: 'https://docs.witnet.io/smart-contracts/supported-chains',
  reading_price_pairs:
    'https://docs.witnet.io/smart-contracts/witnet-data-feeds/price-feeds-registry',
  price_api_reference:
    'https://docs.witnet.io/smart-contracts/witnet-data-feeds/api-reference',
  multichain_addresses:
    'https://docs.witnet.io/smart-contracts/witnet-data-feeds/addresses',
  generating_rng:
    'https://docs.witnet.io/smart-contracts/witnet-data-feeds/addresses',
  low_level_request:
    'https://docs.witnet.io/smart-contracts/witnet-randomness-oracle/randomness-requests',
  solidity_api:
    'https://docs.witnet.io/smart-contracts/witnet-randomness-oracle/api-reference',
  randomness_addresses:
    'https://docs.witnet.io/smart-contracts/witnet-randomness-oracle/contract-addresses',
  reference:
    'https://docs.witnet.io/smart-contracts/witnet-data-feeds/api-reference',
  supported_chains: 'https://docs.witnet.io/smart-contracts/supported-chains',
  randomness: 'https://docs.witnet.io/smart-contracts/witnet-randomness-oracle',
}

export const languageLocales: LanguageDictionary = {
  [localeCodes.en]: {
    code: 'en-US',
    iso: 'en-US',
    name: 'ENGLISH',
    file: 'en-US.json',
  },
  // [localeCodes.es]: {
  //   code: 'es-ES',
  //   iso: 'es-ES',
  //   name: 'ESPAÑOL',
  //   file: 'es-ES.json',
  // },
}

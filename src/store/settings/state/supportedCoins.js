import supportedNetworks from './supportedNetworks';

export default [
  // {
  //   displayName: 'Bitcoin',
  //   name: 'Bitcoin',
  //   sdk: 'Bitcoin',
  //   coinType: 0,
  //   symbol: 'BTC',
  //   network: 'BITCOIN_TESTNET',
  //   denomination: '0.00000000',
  //   minConfirmations: 6,
  //   decimals: 8,
  // },
  {
    displayName: 'Ethereum',
    name: 'Ethereum',
    identifier: 'ethereum',
    sdk: 'Ethereum',
    coinType: 60,
    symbol: 'ETH',
    network: 'ETHEREUM',
    denomination: '0.00000000',
    minConfirmations: 11,
    decimals: 18,
    api: supportedNetworks.ETHEREUM,
    testnet: false,
    transak: true,
    rampNetwork: true,
  },
  {
    displayName: 'Ethereum Classic',
    name: 'Ethereum Classic',
    identifier: 'ethereum-classic',
    sdk: 'Ethereum',
    coinType: 61,
    symbol: 'ETC',
    network: 'ETHEREUM_CLASSIC',
    denomination: '0.00000000',
    minConfirmations: 11,
    decimals: 18,
    api: supportedNetworks.ETHEREUM_CLASSIC,
    testnet: false,
    transak: true,
  },
  {
    displayName: 'XDai',
    name: 'XDai',
    identifier: 'dai',
    sdk: 'Ethereum',
    coinType: 700,
    symbol: 'XDAI',
    network: 'XDAI',
    denomination: '0.00000000',
    minConfirmations: 1,
    decimals: 18,
    api: supportedNetworks.XDAI,
    testnet: false,
  },
  {
    displayName: 'POA',
    name: 'POA',
    identifier: 'poa-network',
    sdk: 'Ethereum',
    coinType: 178,
    symbol: 'POA',
    network: 'POA',
    denomination: '0.00000000',
    minConfirmations: 1,
    decimals: 18,
    api: supportedNetworks.POA,
    testnet: false,
  },
  {
    displayName: 'Wrapped BTC',
    name: 'Wrapped BTC',
    sdk: 'ERC20',
    parentSdk: 'Ethereum',
    symbol: 'WBTC',
    contractAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    decimals: 8,
    parentName: 'Ethereum',
    network: 'ETHEREUM',
    denomination: '0.00000000',
    minConfirmations: 11,
    api: supportedNetworks.ETHERUM,
    transak: true,
  },
  {
    displayName: 'Tether USD',
    name: 'Tether USD',
    sdk: 'ERC20',
    parentSdk: 'Ethereum',
    symbol: 'USDT',
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimals: 6,
    parentName: 'Ethereum',
    network: 'ETHEREUM',
    denomination: '0.000000',
    minConfirmations: 11,
    api: supportedNetworks.ETHERUM,
    transak: true,
  },
  {
    displayName: 'USD Coin',
    name: 'USD Coin',
    sdk: 'ERC20',
    parentSdk: 'Ethereum',
    symbol: 'USDC',
    contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    decimals: 6,
    parentName: 'Ethereum',
    network: 'ETHEREUM',
    denomination: '0.000000',
    minConfirmations: 11,
    api: supportedNetworks.ETHERUM,
    transak: true,
    rampNetwork: true,
  },
  {
    displayName: 'DAI',
    name: 'DAI',
    sdk: 'ERC20',
    parentSdk: 'Ethereum',
    symbol: 'DAI',
    contractAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    decimals: 18,
    parentName: 'Ethereum',
    network: 'ETHEREUM',
    denomination: '0.00000000',
    minConfirmations: 11,
    api: supportedNetworks.ETHERUM,
    transak: true,
    rampNetwork: true,
  },
  {
    displayName: 'Maker',
    name: 'Maker',
    sdk: 'ERC20',
    parentSdk: 'Ethereum',
    symbol: 'MKR',
    contractAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    decimals: 18,
    parentName: 'Ethereum',
    network: 'ETHEREUM',
    denomination: '0.00000000',
    minConfirmations: 11,
    api: supportedNetworks.ETHERUM,
    transak: true,
  },
  {
    displayName: 'ChainLink',
    name: 'ChainLink',
    sdk: 'ERC20',
    parentSdk: 'Ethereum',
    symbol: 'LINK',
    contractAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
    decimals: 18,
    parentName: 'Ethereum',
    network: 'ETHEREUM',
    denomination: '0.00000000',
    minConfirmations: 11,
    api: supportedNetworks.ETHERUM,
    transak: true,
  },
  {
    displayName: 'BAT',
    name: 'BAT',
    sdk: 'ERC20',
    parentSdk: 'Ethereum',
    symbol: 'BAT',
    contractAddress: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    decimals: 18,
    parentName: 'Ethereum',
    network: 'ETHEREUM',
    denomination: '0.00000000',
    minConfirmations: 11,
    api: supportedNetworks.ETHERUM,
    transak: true,
  },
  {
    displayName: 'ZRX',
    name: 'ZRX',
    sdk: 'ERC20',
    parentSdk: 'Ethereum',
    symbol: 'ZRX',
    contractAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    decimals: 18,
    parentName: 'Ethereum',
    network: 'ETHEREUM',
    denomination: '0.00000000',
    minConfirmations: 11,
    api: supportedNetworks.ETHERUM,
    transak: true,
  },
  {
    displayName: 'Reputation',
    name: 'Reputation',
    sdk: 'ERC20',
    parentSdk: 'Ethereum',
    symbol: 'REP',
    contractAddress: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
    decimals: 18,
    parentName: 'Ethereum',
    network: 'ETHEREUM',
    denomination: '0.00000000',
    minConfirmations: 11,
    api: supportedNetworks.ETHERUM,
    transak: true,
  },
  {
    displayName: 'Ethereum Ropsten',
    name: 'Ethereum Ropsten',
    sdk: 'Ethereum',
    coinType: 60,
    symbol: 'ETH',
    network: 'ETHEREUM_ROPSTEN',
    denomination: '0.00000000',
    minConfirmations: 11,
    decimals: 18,
    api: supportedNetworks.ETHEREUM_ROPSTEN,
    testnet: true,
  },
  {
    displayName: 'Ethereum Kovan',
    name: 'Ethereum Kovan',
    identifier: 'ethereum',
    sdk: 'Ethereum',
    coinType: 60,
    symbol: 'ETH',
    network: 'ETHEREUM_KOVAN',
    denomination: '0.00000000',
    minConfirmations: 1,
    decimals: 18,
    api: supportedNetworks.ETHEREUM_KOVAN,
    testnet: true,
  },
  {
    displayName: 'Ethereum Rinkeby',
    name: 'Ethereum Rinkeby',
    identifier: 'ethereum',
    sdk: 'Ethereum',
    coinType: 60,
    symbol: 'ETH',
    network: 'ETHEREUM_RINKEBY',
    denomination: '0.00000000',
    minConfirmations: 1,
    decimals: 18,
    api: supportedNetworks.ETHEREUM_RINKEBY,
    testnet: true,
    transak: true,
    rampNetwork: true,
  },
  {
    displayName: 'Ethereum Goerli',
    name: 'Ethereum Goerli',
    identifier: 'ethereum',
    sdk: 'Ethereum',
    coinType: 60,
    symbol: 'ETH',
    network: 'ETHEREUM_GOERLI',
    denomination: '0.00000000',
    minConfirmations: 1,
    decimals: 18,
    api: supportedNetworks.ETHEREUM_GOERLI,
    testnet: true,
  },
  {
    displayName: 'POA Sokol',
    name: 'POA Sokol',
    identifier: 'poa-network',
    sdk: 'Ethereum',
    coinType: 178,
    symbol: 'POA',
    network: 'POA_SOKOL',
    denomination: '0.00000000',
    minConfirmations: 1,
    decimals: 18,
    api: supportedNetworks.POA_SOKOL,
    testnet: true,
  },
  // {
  //   displayName: 'Catalyst',
  //   name: 'Catalyst',
  //   sdk: 'ERC20',
  //   parentSdk: 'Ethereum',
  //   symbol: 'CAT',
  //   contractAddress: '0x26705403968a8c73656a2fed0f89245698718f3f',
  //   decimals: 3,
  //   parentName: 'Ethereum',
  //   network: 'ETHEREUM_ROPSTEN',
  //   denomination: '0.000',
  //   minConfirmations: 11,
  //   api: supportedNetworks.ETHERUM_ROPSTEN,
  // },
  // {
  //   displayName: 'Litecoin',
  //   name: 'Litecoin',
  //   sdk: 'Bitcoin',
  //   coinType: 1,
  //   symbol: 'LTC',
  //   network: 'LITECOIN_TESTNET',
  //   denomination: '0.00000000',
  //   minConfirmations: 6,
  //   decimals: 8,
  // },
  // {
  //   displayName: 'Dash',
  //   name: 'Dash',
  //   sdk: 'Bitcoin',
  //   coinType: 1,
  //   symbol: 'DASH',
  //   network: 'DASH_TESTNET',
  //   denomination: '0.00000000',
  //   minConfirmations: 6,
  //   decimals: 8,
  // },
  // {
  //   displayName: 'BNB',
  //   name: 'BNB',
  //   sdk: 'ERC20',
  //   parentSdk: 'Ethereum',
  //   symbol: 'BNB',
  //   contractAddress: '0xd36910522028f9e520c5541caea9d286fcbe0251',
  //   decimals: 18,
  //   parentName: 'Ethereum',
  //   network: 'ETHEREUM_ROPSTEN',
  //   denomination: '0.00000000',
  //   minConfirmations: 11,
  // },
  // {
  //   displayName: 'Maker',
  //   name: 'Maker',
  //   sdk: 'ERC20',
  //   parentSdk: 'Ethereum',
  //   symbol: 'MKR',
  //   contractAddress: '0xbc381bc79beda32b0eff49f6f80dd24f90774989',
  //   decimals: 18,
  //   parentName: 'Ethereum',
  //   network: 'ETHEREUM_ROPSTEN',
  //   denomination: '0.00000000',
  //   minConfirmations: 11,
  // },
  // {
  //   displayName: 'ChainLink Token',
  //   name: 'ChainLink Token',
  //   sdk: 'ERC20',
  //   parentSdk: 'Ethereum',
  //   symbol: 'LINK',
  //   contractAddress: '0xd7d5577234f41d69f21f03e80ad513c0edd81503',
  //   decimals: 18,
  //   parentName: 'Ethereum',
  //   network: 'ETHEREUM_ROPSTEN',
  //   denomination: '0.00000000',
  //   minConfirmations: 11,
  // },
  // {
  //   displayName: 'BAT',
  //   name: 'BAT',
  //   sdk: 'ERC20',
  //   parentSdk: 'Ethereum',
  //   symbol: 'BAT',
  //   contractAddress: '0x3713f5cb7234d51e84c88477c80b9f9fd7de421b',
  //   decimals: 18,
  //   parentName: 'Ethereum',
  //   network: 'ETHEREUM_ROPSTEN',
  //   denomination: '0.00000000',
  //   minConfirmations: 11,
  // },
  // {
  //   displayName: 'USD Coin',
  //   name: 'USD Coin',
  //   sdk: 'ERC20',
  //   parentSdk: 'Ethereum',
  //   symbol: 'USDC',
  //   contractAddress: '0x4ecef14beeb8edd52fd3fad011c5a361563a3cf5',
  //   decimals: 18,
  //   parentName: 'Ethereum',
  //   network: 'ETHEREUM_ROPSTEN',
  //   denomination: '0.00000000',
  //   minConfirmations: 11,
  // },
];

import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PIKACHU-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x45b604027262cca499519ef66ed768c43211e0cf',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xd592dfe9e1b687b1d9dbdacf5b9f0789cc9cd584',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PIKACHU',
    lpAddresses: {
      97: '',
      56: '0x45b604027262cca499519ef66ed768c43211e0cf', // PIKACHU-BUSD LP
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xd592dfe9e1b687b1d9dbdacf5b9f0789cc9cd584',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x45b604027262cca499519ef66ed768c43211e0cf', // PIKACHU-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

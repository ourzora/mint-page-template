import { BigNumber } from 'ethers'
import { parseEther } from 'ethers/lib/utils'

export const MAX_UINT64 = BigNumber.from('18446744073709551615')
export const MAX_UINT32 = BigNumber.from('4294967295')
export const OPEN_EDITION_SIZE = 100000000

export const ZORA_COMMISSION_FEE_PERCENTAGE = 0.05
export const ZORA_MINT_FEE = parseEther('0.000777')

import { BigNumberish } from '@ethersproject/bignumber'
import BigNumber from 'bignumber.js'

/**
 * @NOTE: amountFormatter deprecated, use formatCryptoVal instead
 */
export function amountFormatter(
  amount: BigNumber | BigNumberish | string,
  baseDecimals = 18,
  displayDecimals = 2,
  format: boolean = false
) {
  const raw = typeof amount === 'string' ? amount : amount.toString()
  const parsedAmount = new BigNumber(raw)
    .shiftedBy(baseDecimals > 0 ? baseDecimals * -1 : 0)
    .dp(displayDecimals)
  return !format ? parsedAmount.toString() : parsedAmount.toFormat()
}

export function numberFormatter(number: number | string) {
  const parsed =
    typeof number === 'string'
      ? number.includes('.')
        ? parseFloat(number)
        : parseInt(number, 10)
      : number
  return new Intl.NumberFormat('en-US').format(parsed)
}

const ONE_QUADRILLION = new BigNumber(1000000000000000)
const ONE_TRILLION = new BigNumber(1000000000000)
const ONE_BILLION = new BigNumber(1000000000)
const ONE_MILLION = new BigNumber(1000000)
const ONE_HUNDRED_THOUSAND = new BigNumber(100000)
const TEN_THOUSAND = new BigNumber(10000)
const ONE_THOUSAND = new BigNumber(1000)
const ONE_HUNDRED = new BigNumber(100)
const TEN = new BigNumber(10)
const ONE = new BigNumber(1)
const ONE_MILLIONTH = new BigNumber(0.000001)

function formatCryptoValUnder100K(amount: BigNumber) {
  const formattedVal = amount.isInteger()
    ? amount.toFormat(2)
    : amount.isGreaterThan(TEN_THOUSAND)
    ? amount.precision(7).decimalPlaces(2).toFormat()
    : amount.isGreaterThan(ONE_THOUSAND)
    ? amount.precision(6).decimalPlaces(2)
    : amount.isGreaterThan(ONE_HUNDRED)
    ? amount.precision(6).decimalPlaces(3)
    : amount.isGreaterThan(TEN)
    ? amount.precision(6).decimalPlaces(4)
    : amount.isGreaterThan(ONE)
    ? amount.precision(6).decimalPlaces(5)
    : amount.isGreaterThanOrEqualTo(ONE_MILLIONTH)
    ? amount.precision(6).decimalPlaces(6)
    : `<${ONE_MILLIONTH}` // otherwise we'll get output like '1e-18'
  return formattedVal.toString()
}

function formatCryptoValFrom100Kto1Quadrillion(amount: BigNumber) {
  return amount.isGreaterThan(ONE_TRILLION)
    ? `${amount.dividedBy(ONE_TRILLION).decimalPlaces(2).toString()}T`
    : amount.isGreaterThan(ONE_BILLION)
    ? `${amount.dividedBy(ONE_BILLION).decimalPlaces(2).toString()}B`
    : amount.isGreaterThan(ONE_MILLION)
    ? `${amount.dividedBy(ONE_MILLION).decimalPlaces(2).toString()}M`
    : `${amount.dividedBy(ONE_THOUSAND).decimalPlaces(2).toString()}k`
}

export function formatCryptoVal(
  cryptoVal: BigNumber | BigNumberish | string,
  baseDecimals = 18
) {
  const raw = typeof cryptoVal === 'string' ? cryptoVal : cryptoVal.toString()
  const parsedamount = new BigNumber(raw).shiftedBy(
    baseDecimals > 0 ? baseDecimals * -1 : 0
  )
  return parsedamount.isGreaterThan(ONE_QUADRILLION)
    ? parsedamount.toExponential(2).toString().replace('e+', 'ᴇ')
    : parsedamount.isGreaterThanOrEqualTo(ONE_HUNDRED_THOUSAND)
    ? formatCryptoValFrom100Kto1Quadrillion(parsedamount)
    : formatCryptoValUnder100K(parsedamount)
}

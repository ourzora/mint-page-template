import blend from 'shade-blend-color'

const yellow = '#ffff00'
const red = '#ff0000'

export const color = {
  black100: red,
  black70: blend(0.7, yellow, red),
  black50: blend(0.5, yellow, red),
  black30: blend(0.3, yellow, red),
  black10: '#00ffff',
  black5: '#00ffff',

  white100: yellow,
  white70: '#B2B2B2',
  white50: '#808080',
  white30: '#4C4C4C',
  white10: '#191919',
  white5: '#0D0D0D',

  transparent: 'transparent',

  errorLight: '#F35C5C',
  errorDefault: '#F03232',
  errorDark: '#DE0E0E',
  errorBackground: '#FCEFE8',

  successLight: '#d8f3eb',
  successDefault: '#1CB687',
  successBackground: '#d8f3eb',
  successDark: '#009165',

  warningLight: '#F7B955',
  warningDefault: '#F5A623',
  warningBackground: '#F7B955',
  warningDark: '#F49B0B',
}

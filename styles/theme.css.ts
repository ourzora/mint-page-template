import { colorTheme, theme, border, ease, radii, size, space } from '@zoralabs/zord'
import * as typography from './tokens/typography'
import {
  createTheme,
  style,
} from '@vanilla-extract/css'

const colors = colorTheme({
  foreground: '#ffff00',
  background: '#000000',
  accent: '#00ffff',
  positive: '#00ff00',
  negative: '#ff00ff',
  warning: '#9f00ff',
})

export const customTheme = createTheme(theme, {
  fonts: {
    heading: typography.fonts.body,
    body: typography.fonts.body,
    mono: typography.fonts.mono,
  },
  fontSizing: {
    fontSize: typography.fontSize,
    lineHeight: typography.lineHeight,
    fontWeight: typography.fontWeight,
  },
  colors: colors,
})


export const [baseTheme, vars] = createTheme({
  color: theme.colors,
  fonts: theme.fonts,
  fontSize: theme.fontSizing.fontSize,
  lineHeight: theme.fontSizing.lineHeight,
  fontWeight: theme.fontSizing.fontWeight,
  space,
  size,
  radii,
  border,
  ease,
})

export const root = style({
  backgroundColor: vars.color.background.primary,
  color: vars.color.foreground.primary,
})

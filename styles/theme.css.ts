import { theme, border, ease, radii, size, space } from '@zoralabs/zord'
import { color } from './tokens/color'
import * as typography from './tokens/typography'
import {
  createTheme,
  style,
} from '@vanilla-extract/css'

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
  colors: {
    foreground: {
      primary: color.black100,
      secondary: color.black70,
      tertiary: color.black50,
      success: color.successDefault,
      warning: color.warningDefault,
      destructive: color.errorDefault,
      reverse: color.white100,
      transparent: 'transparent',
    },
    background: {
      primary: color.white100,
      secondary: color.black10,
      tertiary: color.black5,
      success: color.successBackground,
      warning: color.warningBackground,
      destructive: color.errorDefault,
      reverse: color.black100,
      transparent: 'transparent',
    },
    border: {
      primary: color.black100,
      secondary: color.black10,
      tertiary: color.black5,
      success: color.successDefault,
      warning: color.warningDefault,
      destructive: color.errorDefault,
      transparent: 'transparent',
    },
    text: {
      primary: color.black100,
      secondary: color.black30,
      tertiary: color.black70,
      success: color.successDefault,
      warning: color.warningDefault,
      destructive: color.errorDefault,
      primaryInverse: color.white100,
      transparent: 'transparent',
    },
    error: {
      light: color.errorLight,
      default: color.errorDefault,
      dark: color.errorDark,
      background: color.errorBackground,
    },
    success: {
      light: color.successLight,
      default: color.successDefault,
      dark: color.successDark,
      background: color.successBackground,
    },
    warning: {
      light: color.warningLight,
      default: color.warningDefault,
      dark: color.warningDark,
      background: color.warningBackground,
    },
  }
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

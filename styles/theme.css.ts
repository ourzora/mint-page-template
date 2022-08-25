import { colorTheme, theme, border, radii, ease, size, space } from '@zoralabs/zord'
import * as typography from './tokens/typography'
import { createTheme, style } from '@vanilla-extract/css'

// Valid colour values are short and long hex codes (#00ff00) (#f00)
const { colors, shadows } = colorTheme({
  foreground: '#252329',
  background: '#ffffff',
  accent: '#92ea22',
  positive: '#92ea22',
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
  colors: {
    ...colors,
    secondary: colors.primary,
    tertiary: colors.primary,
    onAccent: '#3D3B40',
    onNegative: '#ffffff',
  },
  radii: {
    ...radii,
    small: '12px',
    normal: '12px',
  },
  shadows,
  size,
  space: {
    ...space,
    x3: '24px',
    x4: '20px',
  },
  ease,
  border,
})

export const [baseTheme, vars] = createTheme({
  color: theme.colors,
  fonts: theme.fonts,
  fontSize: theme.fontSizing.fontSize,
  lineHeight: theme.fontSizing.lineHeight,
  fontWeight: theme.fontSizing.fontWeight,
  space,
  size,
  radii: theme.radii,
  border,
  ease,
})

export const root = style({
  backgroundColor: vars.color.background1,
  color: vars.color.primary,
})

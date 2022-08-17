# Zora Design System

## Setup

Adding to your project boils down to;

1. Add zord stylesheet from `@zoralabs/zord/index.css`
2. Set up webfonts
3. Add zord root component

### Usage with Next.js

```tsx
// pages/_app.tsx

import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@zoralabs/zord/index.css'
import { ThemeProvider, lightTheme } from '@zoralabs/zord'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={lightTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
```
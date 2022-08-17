import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider } from '@zoralabs/zord'
import { customTheme } from 'styles/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ThemeProvider theme={customTheme}>
            <Main />
          </ThemeProvider>

          <NextScript />
        </body>
      </Html>
    )
  }
}

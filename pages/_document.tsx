import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider, lightTheme } from '@zoralabs/zord'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ThemeProvider theme={lightTheme}>
            <Main />
          </ThemeProvider>

          <NextScript />
        </body>
      </Html>
    )
  }
}

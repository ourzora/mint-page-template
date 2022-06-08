import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText, globalStyles } from '../stitches.config'
import { ThemeProvider, lightTheme } from '@zoralabs/zord'

export default class Document extends NextDocument {
  render() {
    globalStyles()
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
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

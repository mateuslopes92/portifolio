import React from "react"
import { ThemeProvider } from "styled-components"

import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import light from "../src/styles/themes/light"
import GlobalStyle from "../src/styles/global.js"

export function wrapRootElement({ element, props }) {
  return (
    <ThemeProvider theme={light}>
      <Header />
      <GlobalStyle />
      {element}
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

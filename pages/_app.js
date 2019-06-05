import App, { Container as AppContainer } from "next/app"
import Head from "next/head"
import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container"

import theme from "../theme"

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <AppContainer>
        <Head>
          <link rel="icon" type="image/x-icon" href="static/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <Container innerWidth={1024} px={[3, 4, 5]}>
            <Global
              styles={css`
                body {
                  margin: 0;
                  font-family: ${theme.font.sansSerif};
                  background-color: ${theme.colors.gray[9]};
                }
              `}
            />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Container>
        </ThemeProvider>
      </AppContainer>
    )
  }
}

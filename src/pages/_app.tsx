import type { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NavBarProvider } from '../contexts/navbar'
import '../styles/global.css'
import { theme } from '../styles/theme'



export default function MyApp({ Component, pageProps }: AppProps) {

  return <ThemeProvider theme={theme}>
    <NavBarProvider>
      <Component {...pageProps} />
    </NavBarProvider>
  </ThemeProvider>

}
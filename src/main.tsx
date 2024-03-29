import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/Themes/default'
import GlobalStyle from './Styles/global';

import { Home } from './Pages/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Home />
    </ThemeProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './Styles/Themes/default'
import GlobalStyle from './Styles/global';

import { Home } from './Pages/Home'
import { UserTransactionsProvider } from './Contexts/useTransactions';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <UserTransactionsProvider>
          <Home />
        </UserTransactionsProvider>       
    </ThemeProvider>
  </React.StrictMode>,
)

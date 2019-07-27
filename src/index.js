import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from './components/globals/theme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store/store'
import Routes from './routes'
import 'reset-css'
import 'typeface-roboto'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

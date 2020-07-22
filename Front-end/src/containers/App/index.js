import React from "react";
import { createGlobalStyle } from 'styled-components'

import Router from '../../Router/router.js'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
    margin:0;
    font-family: 'Roboto', sans-serif;
  }
  body {
    min-width: 800px;
  }
`

export const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>
);

export default App;

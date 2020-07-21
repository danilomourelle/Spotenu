import React from "react";
import { createGlobalStyle } from 'styled-components'
// import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// import { routerMiddleware } from "connected-react-router";
// import thunk from "redux-thunk";
// import { createBrowserHistory } from "history";
import Router from '../../Router/router.js'
// import { generateReducers } from "../../reducers";

/* export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares)); */

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

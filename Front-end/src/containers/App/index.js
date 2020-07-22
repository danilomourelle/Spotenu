import React from "react";
import { createGlobalStyle } from "styled-components";

import { useAppStore } from "../../hooks/useAppStore";
import AppStoreContext from "../../context/store";
// import Router from '../../Router/router.js'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
    margin:0;
    font-family: 'Roboto', sans-serif;
  }
  body {
    min-width: 800px;
  }
`;

export const App = () => {
  const { store, dispatch } = useAppStore();

  return (
    <AppStoreContext.Provider value={{ ...store, ...dispatch }}>
      <GlobalStyle />
      {/* <Router /> */}
    </AppStoreContext.Provider>
  );
};

export default App;
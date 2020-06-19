import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/HomePage";
import Login from "../containers/Login";
import SignIn from "../containers/SignIn";


export const routes = {
  home: "/",
  login: "/login",
  signIn: "/signin",
  allBands: "/bands/all"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signIn} component={SignIn} />
        {/*<Route exact path={routes.page4} component={} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;

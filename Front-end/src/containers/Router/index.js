import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../HomePage";
import Login from "../Login";
import SignIn from "../SignIn";


export const routes = {
  home: "/",
  login: "/login",
  signIn: "/signin",
  page4: "/route4"
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

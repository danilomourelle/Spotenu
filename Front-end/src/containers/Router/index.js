import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../HomePage";


export const routes = {
  home: "/",
  page2: "/route2",
  page3: "/route3",
  page4: "/route4"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        {/* <Route exact path={routes.page2} component={} />
        <Route exact path={routes.page3} component={} />
        <Route exact path={routes.page4} component={} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;

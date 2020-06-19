import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/HomePage";
import Login from "../containers/Login";
import SignIn from "../containers/SignIn";
import AllBands from "../containers/Bands/AllBands";
import SignOtherAdmin from "../containers/Admin/SignOtherAdmin";
import HomeAdmin from "../containers/Admin/Home";
import ApproveBand from "../containers/Admin/ApproveBand";
import MusicGenre from "../containers/Admin/MusicalGenres";


export const routes = {
  home: "/",
  login: "/login",
  signIn: "/signin",
  allBands: "/bands/all",
  adminHome:'/admin',
  approveBand:'/admin/approve',
  createMusicalGenre: '/admin/genre/create',
  createOtherAdmin: '/admin/create'

};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signIn} component={SignIn} />
        <Route exact path={routes.allBands} component={AllBands} />
        <Route exact path={routes.allBands} component={AllBands} />
        <Route exact path={routes.allBands} component={AllBands} />
        <Route exact path={routes.allBands} component={AllBands} />
        <Route exact path={routes.adminHome} component={HomeAdmin} />
        <Route exact path={routes.approveBand} component={ApproveBand} />
        <Route exact path={routes.createMusicalGenre} component={MusicGenre} />
        <Route exact path={routes.createOtherAdmin} component={SignOtherAdmin} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;

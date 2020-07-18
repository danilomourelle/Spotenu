import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/HomePage";
import Login from "../containers/Auth/Login";
import SignIn from "../containers/Auth/SignIn";
import Premium from "../containers/Auth/Premium";
import HomeAdmin from "../containers/Admin/Home";
import ApproveBand from "../containers/Admin/ApproveBand";
import SignOtherAdmin from "../containers/Admin/SignOtherAdmin";
import MusicGenre from "../containers/Admin/MusicalGenres";
import HomeBand from "../containers/Bands/Home";
import Album from "../containers/Bands/Album";
import Music from "../containers/Bands/Musics";
import AllBands from "../containers/Bands/AllBands";


export const routes = {
  //auth
  home: "/",
  login: "/login",
  signIn: "/signin",
  premium: "/premium",
  //bands
  allBands: "/band/all",
  bandHome: "/band",
  myAlbums: '/band/my-albums',
  myMusics: '/band/my-music',
  //admin
  adminHome: '/admin',
  approveBand: '/admin/approve',
  createMusicalGenre: '/admin/genre/create',
  createOtherAdmin: '/admin/create'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {/* auth */}
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signIn} component={SignIn} />
        <Route exact path={routes.premium} component={Premium} />
        {/* bands */}
        <Route exact path={routes.bandHome} component={HomeBand} />
        <Route exact path={routes.allBands} component={AllBands} />
        <Route exact path={routes.myAlbums} component={Album} />
        <Route exact path={routes.myMusics} component={Music} />
        {/* admin */}
        <Route exact path={routes.adminHome} component={HomeAdmin} />
        <Route exact path={routes.approveBand} component={ApproveBand} />
        <Route exact path={routes.createMusicalGenre} component={MusicGenre} />
        <Route exact path={routes.createOtherAdmin} component={SignOtherAdmin} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;

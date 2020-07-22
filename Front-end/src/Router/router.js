import React from "react";
// import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Switch>
        {/* auth */}
        <Route exact path={routes.home}> <Home /> </Route>
        <Route exact path={routes.login}> <Login /> </Route>
        <Route exact path={routes.signIn}> <SignIn /> </Route>
        <Route exact path={routes.premium}> <Premium /> </Route>
        {/* bands */}
        <Route exact path={routes.bandHome}> <HomeBand /> </Route>
        <Route exact path={routes.allBands}> <AllBands /> </Route>
        <Route exact path={routes.myAlbums}> <Album /> </Route>
        <Route exact path={routes.myMusics}> <Music /> </Route>
        {/* admin */}
        <Route exact path={routes.adminHome}> <HomeAdmin /> </Route>
        <Route exact path={routes.approveBand}> <ApproveBand /> </Route>
        <Route exact path={routes.createMusicalGenre}> <MusicGenre /> </Route>
        <Route exact path={routes.createOtherAdmin}> <SignOtherAdmin /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

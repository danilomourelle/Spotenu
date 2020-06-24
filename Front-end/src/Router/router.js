import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/HomePage";
import Login from "../containers/Auth/Login";
import SignIn from "../containers/Auth/SignIn";
import Premium from "../containers/Auth/Premium";
import AllBands from "../containers/Bands/AllBands";
import SignOtherAdmin from "../containers/Admin/SignOtherAdmin";
import HomeAdmin from "../containers/Admin/Home";
import ApproveBand from "../containers/Admin/ApproveBand";
import MusicGenre from "../containers/Admin/MusicalGenres";
import HomeBand from "../containers/Bands/Home";
import MyAlbuns from '../containers/Bands/MyAlbuns'
import EditMusic from "../containers/Bands/MyMusics";
import NewAlbum from "../containers/Bands/NewAlbum";
import NewMusic from "../containers/Bands/NewMusic";


export const routes = {
  //auth
  home: "/",
  login: "/login",
  signIn: "/signin",
  premiun: "/premiun",
  //bands
  allBands: "/band/all",
  bandHome: "/band",
  createAlbum: '/band/create-album',
  myAlbuns: '/band/my-albuns',
  createMusic: '/band/create-music',
  myMusics: '/band/my-music',
  //admin
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
        <Route exact path={routes.premiun} component={Premium} />
        <Route exact path={routes.bandHome} component={HomeBand} />
        <Route exact path={routes.allBands} component={AllBands} />
        <Route exact path={routes.createAlbum} component={NewAlbum} />
        <Route exact path={routes.myAlbuns} component={MyAlbuns} />
        <Route exact path={routes.createMusic} component={NewMusic} />
        <Route exact path={routes.myMusics} component={EditMusic} />
        <Route exact path={routes.adminHome} component={HomeAdmin} />
        <Route exact path={routes.approveBand} component={ApproveBand} />
        <Route exact path={routes.createMusicalGenre} component={MusicGenre} />
        <Route exact path={routes.createOtherAdmin} component={SignOtherAdmin} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authenticator from './authenticator'
import admin from './admin'
import band from "./band";
import dialog from './dialog'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    authenticator,
    admin,
    band,
    dialog
    //outros reducers
  });

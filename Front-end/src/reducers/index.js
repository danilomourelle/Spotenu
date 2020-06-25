import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authenticator from './authenticator'
import admin from './admin'
import band from "./band";
import responses from './responses'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    authenticator: authenticator,
    admin: admin,
    band: band,
    responses
    //outros reducers
  });

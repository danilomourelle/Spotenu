import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import  reducer1 from "./example" 
import authenticator from './authenticator'
import admin from './admin'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    reducer01: reducer1,
    authenticator: authenticator,
    admin: admin
    //outros reducers
  });

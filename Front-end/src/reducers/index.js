import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import  reducer1 from "./example" 

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    routeUm: reducer1
    //outros reducers
  });

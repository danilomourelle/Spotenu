import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../Router/router';

export const baseURL = 'link da base da API'

//*****ASSÍNCRONAS*****//
export const signIn = (form) => async (dispatch) => {
  try {
    const previousToken = localStorage.getItem('token') || 'NO TOKEN'
    const response = await axios.post(`${baseURL}/endpoint`, form, {
      headers: {
        authorization: previousToken,
        "Content-Type": 'application/json'
      }
    });

    const token = response.data.token
    if (token) {
      window.localStorage.setItem("token", token)
      dispatch(push(routes.customerHome))
      dispatch(setUserType(response.data.userType))
    }
    else if (previousToken) {
      dispatch(push(routes.adminHome))
    }
    else {
      dispatch(push(routes.home))
    }
    console.log(form)
  }
  catch (error) {
    console.error(error)
  }
}

export const login = (form) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/endpoint`, form);

    window.localStorage.setItem("token", response.data.token)

    const userRole = response.data.userRole
    dispatch(setUserType(userRole))

    switch (userRole) {
      case 'ADMIN':
        dispatch(push(routes.adminHome))
        break;
      case 'BAND':
        dispatch(push(routes.bandHome))
        break;
      default:
        //dispatch(push(routes.customerHome))
        break;
    }
  }
  catch (error) {
    console.error(error)
  }
}

//*****SÍNCRONAS*****//
export const setUserType = (userType) => (
  {
    type: 'SET_USER_TYPE',
    payload: { userType }
  }
)
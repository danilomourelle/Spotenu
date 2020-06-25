import axios from 'axios';
import { push, replace } from "connected-react-router";
import { routes } from '../Router/router';
import { setSignInResponse, setLoginResponse } from './responses';

export const baseURL = 'http://localhost:3003' //TODO: Ajustar endereço

//*****ASSÍNCRONAS*****//
export const signIn = (form) => async (dispatch) => {
  try {
    const previousToken = localStorage.getItem('token')
    const response = await axios.post(`${baseURL}/user/signIn`, form, {
      headers: {
        authorization: previousToken,
        "Content-Type": 'application/json'
      }
    });

    const token = response.data.token
    if (response.data.user.type === "CUSTOMER") {
      window.localStorage.setItem("token", token)
      dispatch(replace(routes.bandHome))
      dispatch(setUser(response.data.user))
    }
    else if (form.userType === "ADMIN") {
      dispatch(replace(routes.adminHome))
    }
    else {
      dispatch(replace(routes.home))
    }
  }
  catch (error) {
    console.error(error.response)
    dispatch(setSignInResponse({ isOpen: true, message: error.response.data.message }))
  }
}

export const login = (form) => async (dispatch) => {
  try {
    console.log('login', form)
    const response = await axios.post(`${baseURL}/user/login`, form);

    window.localStorage.setItem("token", response.data.token)

    const user = response.data.user
    dispatch(setUser(user))

    switch (user.type) {
      case 'ADMIN':
        dispatch(push(routes.adminHome))
        break;
      case 'BAND':
        user.isActive ? dispatch(push(routes.bandHome)) : dispatch(push(routes.home))
        break;
      default:
        //dispatch(push(routes.customerHome))
        break;
    }
  }

  catch (error) {
    console.error(error.response)
    dispatch(setLoginResponse({ isOpen: true, message: error.response.data.message }))
  }
}

//*****SÍNCRONAS*****//
export const setUser = (user) => (
  {
    type: 'SET_USER',
    payload: { user }
  }
)
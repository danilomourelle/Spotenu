import axios from 'axios';
import { push, replace } from "connected-react-router";
import { routes } from '../Router/router';

export const baseURL = 'http://localhost:3003' //TODO: Ajustar endereço

//*****ASSÍNCRONAS*****//
export const signIn = (form) => async (dispatch) => {
  try {
    console.log('signIn', form)
    const previousToken = localStorage.getItem('token')
    const response = await axios.post(`${baseURL}/user/signIn`, form, {
      headers: {
        authorization: previousToken,
        "Content-Type": 'application/json'
      }
    });

    const token = response.data.token
    console.log(token, previousToken)
    if (token) {
      window.localStorage.setItem("token", token)
      dispatch(replace(routes.bandHome))
      dispatch(setUser(response.data.user))
    }
    else if (previousToken) {
      dispatch(replace(routes.adminHome))
    }
    else {
      dispatch(replace(routes.home))
    } 
  }
  catch (error) {
    console.error(error)
  }
}

export const login = (form) => async (dispatch) => {
  try {
   /*  const response = await axios.post(`${baseURL}/endpoint`, form);

    window.localStorage.setItem("token", response.data.token)

    const userRole = response.data.userRole
    dispatch(setUser(userRole))

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
    } */
    console.log('login')

  }
  catch (error) {
    console.error(error)
  }
}

//*****SÍNCRONAS*****//
export const setUser = (user) => (
  {
    type: 'SET_USER',
    payload: { user }
  }
)
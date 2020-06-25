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
    switch (form.userType) {
      case 'CUSTOMER':
        window.localStorage.setItem("token", token)
        dispatch(replace(routes.bandHome))
        dispatch(setUser(response.data.user))
        break;
      case 'ADMIN':
        dispatch(setSignInResponse(
          {
            isOpen: true,
            message: "Novo ADMINISTRADOR cadastrado com sucesso",
            type: "info"
          }
        ))
        setTimeout(() => {
          dispatch(setSignInResponse(
            {
              isOpen: false,
              message: "",
              type: "info"
            }
          ))
        }, 2000)
        break;
      case 'BAND':
        dispatch(setSignInResponse(
          {
            isOpen: true,
            message: "Cadastro realizado com sucesso. \n Você será redirecionado para página inicial",
            type: "info"
          }
        ))
        setTimeout(() => {
          dispatch(setSignInResponse(
            {
              isOpen: false,
              message: "",
              type: "info"
            }
          ))
          dispatch(replace(routes.home))
        }, 5000)
        break;
      default:
        dispatch(replace(routes.home))
        break;
    }
  }
  catch (error) {
    console.error(error)
    dispatch(setSignInResponse({
      isOpen: true,
      message: error.response.data.message,
      type: 'confirm'
    }))
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
        dispatch(push(routes.bandHome))
        break;
      default:
        //dispatch(push(routes.customerHome))
        break;
    }
  }

  catch (error) {
    console.error(error)
    dispatch(setLoginResponse({
      isOpen: true,
      message: error.response.data.message,
      type: 'confirm'
    }))
  }
}

//*****SÍNCRONAS*****//
export const setUser = (user) => (
  {
    type: 'SET_USER',
    payload: { user }
  }
)
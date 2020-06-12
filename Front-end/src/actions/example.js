import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router/index';

export const baseURL = 'link da base da API'

//*****ASSÍNCRONAS*****//
export const functionName1 = (infoFromComponent) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/endpoint`, infoFromComponent);

    const token = response.data.token
    window.localStorage.setItem("token", token)

    const info = response.data.user;
    dispatch(functionName2(info))

    dispatch(push(routes.page1))
    
  }
  catch (error) {
    console.error(error)
    alert("Mensagem de erro")
  }
}

//*****SÍNCRONAS*****//
export const functionName2 = (infoToState) => (
  {
    type: 'AÇÃO_REALIZADA_PELA_ACTION',
    payload: { infoToState }
  }
)
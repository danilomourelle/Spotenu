import axios from 'axios';
import { replace } from "connected-react-router";
import { baseURL } from './authenticator'
import { routes } from '../Router/router';
import { setApproveResponse, setGenreResponse } from './responses';

//*****ASSÍNCRONAS*****//
export const fetchBandsToApprove = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/user/band-to-approve`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });

    const bandsListToApprove = response.data.bands

    dispatch(setBandListToApprove(bandsListToApprove))
  }
  catch (error) {
    console.error(error)
    dispatch(setApproveResponse(
      {
        isOpen: true,
        message: "Aconteceu algo errado. \n Você será redirecionado para página inicial",
        type: "info"
      }
    ))
    setTimeout(() => {
      dispatch(setApproveResponse(
        {
          isOpen: false,
          message: "",
          type: "info"
        }
      ))
      dispatch(replace(routes.home))
    }, 3000)
  }
}

export const approveBand = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')

    await axios.put(`${baseURL}/user/band/${id}`, null, {
      headers: {
        authorization: token,
        "Content-Type": 'application/jsons'
      }
    })
    dispatch(setApproveResponse(
      {
        isOpen: true,
        message: "Banda Aprovada",
        type: "info"
      }
    ))
    setTimeout(() => {
      dispatch(setApproveResponse(
        {
          isOpen: false,
          message: "",
          type: "info"
        }
      ))
    }, 2000)
    dispatch(fetchBandsToApprove())
  }
  catch (error) {
    console.error(error)
    dispatch(setApproveResponse({
      isOpen: true,
      message: error.response.data.message,
      type: 'confirm'
    }))
  }
}

export const approveAllBands = (idList) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    await axios.put(`${baseURL}/user/band`, { idList }, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    })
    dispatch(fetchBandsToApprove())
  }
  catch (error) {
    console.error(error)
    dispatch(setApproveResponse({
      isOpen: true,
      message: error.response.data.message,
      type: 'confirm'
    }))
  }
}

export const fetchAllMusicGenre = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/genre/all`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });

    const genreList = response.data.genres
    dispatch(setGenreList(genreList))
  }
  catch (error) {
    console.error(error)

    dispatch(setGenreResponse(
      {
        isOpen: true,
        message: "Aconteceu algo errado. \n Você será redirecionado para página inicial",
        type: "info"
      }
    ))
    setTimeout(() => {
      dispatch(setGenreResponse(
        {
          isOpen: false,
          message: "",
          type: "info"
        }
      ))
      dispatch(replace(routes.home))
    }, 3000)
  }
}

export const createNewMusicGenre = (name) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    await axios.put(`${baseURL}/genre/create`, name, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });
    dispatch(fetchAllMusicGenre())
    dispatch(setGenreResponse(
      {
        isOpen: true,
        message: "Genero Musical cadastrado com sucesso",
        type: "info"
      }
    ))
    setTimeout(() => {
      dispatch(setGenreResponse(
        {
          isOpen: false,
          message: "",
          type: "info"
        }
      ))
    }, 2000)
  }
  catch (error) {
    console.error(error)
    dispatch(setGenreResponse({
      isOpen: true,
      message: error.response.data.message,
      type: 'confirm'
    }))
  }
}


//*****SÍNCRONAS*****//
export const setBandListToApprove = (bandsListToApprove) => (
  {
    type: 'SET_BAND_LIST_TO_APPROVE',
    payload: { bandsListToApprove }
  }
)

export const setGenreList = (genreList) => (
  {
    type: 'SET_GENRE_LIST',
    payload: { genreList }
  }
)

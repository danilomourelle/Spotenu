import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../Router/router';
import { baseURL } from './authenticator'
import NewAlbum from '../containers/Bands/NewAlbum';

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

    const bandsListToApprove = response.data.bands //TODO: Ajustar res.data

    dispatch(setBandListToApprove(bandsListToApprove))
    console.log('fetch to aprove')
  }
  catch (error) {
    console.error(error)
  }
}

export const approveBand = (id) => async (dispatch) => {
  try {
    /*  const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/endpoint`, id {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });*/
    console.log('aprove band')
    dispatch(fetchBandsToApprove())

  }
  catch (error) {
    console.error(error)
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

    const genreList = response.data.genres //TODO: Ajustar res.data

    dispatch(setGenreList(genreList))
  }
  catch (error) {
    console.error(error)
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
  }
  catch (error) {
    console.error(error)
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

import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../Router/router';

export const baseURL = 'link da base da API'

//*****ASSÍNCRONAS*****//
export const fetchBandsToApprove = () => async (dispatch) => {
  try {
   /*  const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/endpoint`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });

    const bandsListToApprove = response.data.bands

    dispatch(setBandListToApprove(bandsListToApprove)) */
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
    });
    
    const bandsListToApprove = response.data.bands
    
    dispatch(fetchBandsToApprove()) */
  }
  catch (error) {
    console.error(error)
  }
}

export const fetchAllMusicGenre = () => async (dispatch) => {
  try {
   /*  const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/endpoint`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });

    const genreList = response.data.genreList

    dispatch(setGenreList(genreList)) */
    console.log('fetch genreList')
  }
  catch (error) {
    console.error(error)
  }
}

export const createNewMusicGenre = (name) => async (dispatch) => {
  try {
   /*  const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/endpoint`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });

    dispatch(fetchAllMusicGenre()) */
    console.log('create music genre')
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

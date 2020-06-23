import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../Router/router';
import { baseURL } from './authenticator'

//*****ASSÍNCRONAS*****//
export const createNewAlbum = (form) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.post(`${baseURL}/album/create`, form, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    }); 
  }
  catch (error) {
    console.error(error)
  }
}

export const createNewMusic = (form) => async (dispatch) => {
  try {
    /* const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/endpoint`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    }); 

    const myMusicsList = response.data.bands //TODO: Ajustar res.data

    dispatch(setMusicsList(myMusicsList))*/
    console.log('create new music')
  }
  catch (error) {
    console.error(error)
  }
}

export const fetchMyAlbunsList = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/album/my-albuns`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });

    const myAlbunsList = response.data.albuns //TODO: Ajustar res.data

    dispatch(setMyAlbunsList(myAlbunsList))
    console.log('fetch albuns list')
  }
  catch (error) {
    console.error(error)
  }
}

export const fetchMyMusicsList = (bandId) => async (dispatch) => {
  try {
    /* const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/endpoint`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    }); 

    const myMusicsList = response.data.bands //TODO: Ajustar res.data

    dispatch(setMusicsList(myMusicsList))*/
    console.log('fetch music list')
  }
  catch (error) {
    console.error(error)
  }
}

//*****SÍNCRONAS*****//
export const setMyAlbunsList = (myAlbunsList) => (
  {
    type: 'SET_MY_ALBUNS_LIST',
    payload: { myAlbunsList }
  }
)

export const setMusicsList = (myMusicsList) => (
  {
    type: 'SET_MY_MUSICS_LIST',
    payload: { myMusicsList }
  }
)
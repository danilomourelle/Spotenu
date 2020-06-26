import axios from 'axios';
import { baseURL } from './authenticator'
import { setDialog } from './dialog';
import { replace } from 'connected-react-router';
import { routes } from '../Router/router';

//*****ASSÍNCRONAS*****//
export const createNewAlbum = (form) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    await axios.post(`${baseURL}/album/create`, form, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });
    dispatch(fetchMyAlbunsList())
    dispatch(setDialog(
      {
        isOpen: true,
        message: "Abum criado com sucesso",
        type: "info"
      }
    ))
    setTimeout(() => {
      dispatch(setDialog(
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
    dispatch(setDialog({
      isOpen: true,
      message: error.response.data.message,
      type: 'confirm'
    }))
  }
}

export const createNewMusic = (form) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    await axios.post(`${baseURL}/music/create`, form, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });
    dispatch(fetchMyAlbunsList())
    dispatch(setDialog(
      {
        isOpen: true,
        message: "Musica criada com sucesso",
        type: "info"
      }
    ))
    setTimeout(() => {
      dispatch(setDialog(
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
    dispatch(setDialog({
      isOpen: true,
      message: error.response.data.message,
      type: 'confirm'
    }))
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
  }
  catch (error) {
    console.error(error)
    dispatch(setDialog(
      {
        isOpen: true,
        message: "Aconteceu algo errado. \n Você será redirecionado para página inicial",
        type: "info"
      }
    ))
    setTimeout(() => {
      dispatch(setDialog(
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

export const fetchAlbumDetails = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/album/my-albuns/${id}`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });

    const albumDetails = response.data.details //TODO: Ajustar res.data
    return albumDetails
  }
  catch (error) {
    console.error(error)
  }
}


export const fetchMyMusicsList = (albumId) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/music/my-musics/${albumId}`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });

    const myMusicsList = response.data.musics //TODO: Ajustar res.data

    dispatch(setMusicsList(myMusicsList))
  }
  catch (error) {
    console.error(error)
    dispatch(setDialog(
      {
        isOpen: true,
        message: "Aconteceu algo errado. \n Você será redirecionado para página inicial",
        type: "info"
      }
    ))
    setTimeout(() => {
      dispatch(setDialog(
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

export const deleteAlbum = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    await axios.delete(`${baseURL}/album/${id}`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });
    dispatch(fetchMyAlbunsList())
    dispatch(setDialog(
      {
        isOpen: true,
        message: "Abum deletado",
        type: "info"
      }
    ))
    setTimeout(() => {
      dispatch(setDialog(
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
    dispatch(setDialog({
      isOpen: true,
      message: error.response.data.message,
      type: 'confirm'
    }))
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

export const setAlbumIdToDelete = (id) => (
  {
    type: 'SET_ALBUM_ID_TO_DELETE',
    payload: { id }
  }
)

export const setMusicIdToDelete = (id) => (
  {
    type: 'SET_ALBUM_ID_TO_DELETE',
    payload: { id }
  }
)
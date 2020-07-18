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
    dispatch(fetchMyAlbumsList())
    dispatch(setDialog(
      {
        isOpen: true,
        message: "Album criado com sucesso",
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

export const fetchMyAlbumsList = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(`${baseURL}/album/my-albums`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });

    const myAlbumsList = response.data.albums //TODO: Ajustar res.data


    dispatch(setMyAlbumsList(myAlbumsList))
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
    const response = await axios.get(`${baseURL}/album/my-albums/${id}`, {
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

export const deleteAlbum = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    await axios.delete(`${baseURL}/album/${id}`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });
    dispatch(fetchMyAlbumsList())
    dispatch(setDialog(
      {
        isOpen: true,
        message: "Album deletado",
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

export const createNewMusic = (form) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    await axios.post(`${baseURL}/music/create`, form, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });
    dispatch(fetchMyAlbumsList())
    dispatch(fetchMyMusicsList('all'))
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

export const deleteMusic = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    await axios.delete(`${baseURL}/music/${id}`, {
      headers: {
        authorization: token,
        "Content-Type": 'application/json'
      }
    });
    dispatch(fetchMyAlbumsList())
    dispatch(fetchMyMusicsList('all'))
    dispatch(setDialog(
      {
        isOpen: true,
        message: "Musica deletada",
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
export const setMyAlbumsList = (myAlbumsList) => (
  {
    type: 'SET_MY_ALBUMS_LIST',
    payload: { myAlbumsList: myAlbumsList }
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
    type: 'SET_MUSIC_ID_TO_DELETE',
    payload: { id }
  }
)
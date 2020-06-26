import express from 'express'
import { AlbumController } from '../controller/AlbumController'

export const albumRouter = express.Router()

const album = new AlbumController()

albumRouter.post('/create', album.create)

albumRouter.get('/my-albuns', album.getAlbunsByBandId)
albumRouter.get('/my-albuns/id', album.getAlbumDetails)

albumRouter.put('/:id', album.create)

albumRouter.delete('/:id', album.deleteAlbum)
import express from 'express'
import { AlbumController } from '../controller/AlbumController'

export const albumRouter = express.Router()

const album = new AlbumController()

albumRouter.post('/create', album.create)

albumRouter.get('/my-albums', album.getAlbumsByBandId)
albumRouter.get('/my-albums/:id', album.getAlbumDetails)

albumRouter.put('/:id', album.create)

albumRouter.delete('/:id', album.deleteAlbum)
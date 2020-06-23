import express from 'express'
import { AlbumController } from '../controller/AlbumController'

export const albumRouter = express.Router()

const album = new AlbumController()

albumRouter.post('/create', album.create)

albumRouter.get('/my-albuns', album.create)

albumRouter.put('/:id', album.create)
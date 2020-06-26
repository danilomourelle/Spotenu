import { Request, Response } from 'express'
import { BaseDatabase } from '../data/BaseDatabase'
import { MusicDatabase } from '../data/MusicDatabase'
import { AlbumDatabase } from '../data/AlbumDatabase'
import { TokenManager } from '../services/TokenManager'
import { IdManager } from '../services/IdManager'
import { MusicBusiness } from '../business/MusicBusiness'


export class MusicController {
  private static MusicBusiness = new MusicBusiness(
    new MusicDatabase(),
    new AlbumDatabase(),
    new TokenManager(),
    new IdManager()
  )

  async create(req: Request, res: Response) {
    try {
      const { name, albumIdToAddMusic } = req.body;
      const token = req.headers.authorization || req.headers.Authorization as string

      const result = await MusicController.MusicBusiness.create(name, albumIdToAddMusic, token);

      await BaseDatabase.desconnectDB()
      res.sendStatus(result.statusCode)
    } catch (err) {
      await BaseDatabase.desconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async getMusicByAlbum(req: Request, res: Response) {
    try {
      const albumId = req.params.albumId
      const token = req.headers.authorization || req.headers.Authorization as string

      const result = await MusicController.MusicBusiness.getMusicByAlbum(albumId, token);

      await BaseDatabase.desconnectDB()
      res.status(result.statusCode).send({ musics: result.message })
    } catch (err) {
      await BaseDatabase.desconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id
      const token = req.headers.authorization || req.headers.Authorization as string

      const result = await MusicController.MusicBusiness.delete(id, token);

      await BaseDatabase.desconnectDB()
      res.status(result.statusCode).send({ musics: result.message })
    } catch (err) {
      await BaseDatabase.desconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

}
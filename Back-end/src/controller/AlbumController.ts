import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { AlbumDatabase } from "../data/AlbumDatabase";
import { AlbumGenreDatabase } from "../data/AlbumGenreDatabase";
import { GenreDatabase } from "../data/GenreDatabase";
import { TokenManager } from "../services/TokenManager";
import { IdManager } from "../services/IdManager";
import { AlbumBusiness } from "../business/AlbumBusiness";

export class AlbumController {
  private static AlbumBusiness = new AlbumBusiness(
    new AlbumDatabase(),
    new AlbumGenreDatabase(),
    new GenreDatabase(),
    new TokenManager(),
    new IdManager()
  )

  async create(req: Request, res: Response) {
    try {
      const { name, genreIdList, image } = req.body;
      const token = req.headers.authorization || req.headers.Authorization as string

      const result = await AlbumController.AlbumBusiness.create(name, genreIdList, image, token);
      await BaseDatabase.desconnectDB()
      res.status(result.statusCode).send({ message: result.message });
    } catch (err) {
      await BaseDatabase.desconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async deleteAlbum(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const token = req.headers.authorization || req.headers.Authorization as string

      const result = await AlbumController.AlbumBusiness.delete(id, token);

      await BaseDatabase.desconnectDB()
      res.status(result.statusCode).send({ message: result.message });
    } catch (err) {
      await BaseDatabase.desconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async getAlbunsByBandId(req: Request, res: Response) {
    try {
      const token = req.headers.authorization || req.headers.Authorization as string

      const result = await AlbumController.AlbumBusiness.getAlbumsByBandId(token);
      await BaseDatabase.desconnectDB()
      res.status(result.statusCode).send({ albuns: result.message });
    } catch (err) {
      await BaseDatabase.desconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async getAlbumDetails(req: Request, res: Response) {
    try {
      const token = req.headers.authorization || req.headers.Authorization as string
      const id = req.params.id

      const result = await AlbumController.AlbumBusiness.getAlbumDetails(id, token);

      await BaseDatabase.desconnectDB()
      res.status(result.statusCode).send({ details: result.message });
    } catch (err) {
      await BaseDatabase.desconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
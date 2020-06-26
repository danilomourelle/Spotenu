import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { GenreDatabase } from "../data/GenreDatabase";
import { TokenManager } from "../services/TokenManager";
import { IdManager } from "../services/IdManager";
import { GenreBusiness } from "../business/GenreBusiness";

export class GenreController {
  private static GenreBusiness = new GenreBusiness(
    new GenreDatabase(),
    new TokenManager(),
    new IdManager()
  )

  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const token = req.headers.authorization || req.headers.Authorization as string

      const result = await GenreController.GenreBusiness.create(name, token);

      await BaseDatabase.desconnectDB()
      res.sendStatus(result.statusCode);
    } catch (err) {
      await BaseDatabase.desconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async getAllGenre(req: Request, res: Response) {
    try {
      const token = req.headers.authorization || req.headers.Authorization as string

      const result = await GenreController.GenreBusiness.getAllGenre(token);

      await BaseDatabase.desconnectDB()
      res.status(result.statusCode).send({ genres: result.message });
    } catch (err) {
      await BaseDatabase.desconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
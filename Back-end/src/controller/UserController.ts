import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { TokenManager } from "../services/TokenManager";
import { HashManager } from "../services/HashManager";
import { IdManager } from "../services/IdManager";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  private static UserBusiness = new UserBusiness(
    new UserDatabase(),
    new HashManager(),
    new TokenManager(),
    new IdManager
  )

  async signIn(req: Request, res: Response) {
    try {
      const {
        name,
        nickname,
        email,
        password,
        description,
        userType
      } = req.body;

      const token = req.headers.authorization || req.headers.Authorization as string

      const result = await UserController.UserBusiness.signIn(
        name,
        nickname,
        email,
        password,
        userType,
        description,
        token
      );

      await BaseDatabase.disconnectDB()
      res.status(result.statusCode).send(result.message)

    } catch (err) {
      await BaseDatabase.disconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }


  async login(req: Request, res: Response) {
    try {
      const {
        user,
        password,
      } = req.body;

      const result = await UserController.UserBusiness.login(
        user,
        password
      );

      await BaseDatabase.disconnectDB()
      res.status(result.statusCode).send(result.message);
    } catch (err) {
      await BaseDatabase.disconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async getAllBands(req: Request, res: Response) {
    try {
      const token = req.headers.authorization || req.headers.Authorization as string;

      const result = await UserController.UserBusiness.getAllBands(token);

      await BaseDatabase.disconnectDB()
      res.status(200).send({ bands: result.message });
    } catch (err) {
      await BaseDatabase.disconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async getBandsToApprove(req: Request, res: Response) {
    try {
      const token = req.headers.authorization || req.headers.Authorization as string;

      const result = await UserController.UserBusiness.getBandsToApprove(token);

      await BaseDatabase.disconnectDB()
      res.status(result.statusCode).send({ bands: result.message });
    } catch (err) {
      await BaseDatabase.disconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async approveBand(req: Request, res: Response) {
    try {
      const token = req.headers.authorization || req.headers.Authorization as string;
      const id = req.params.id

      const result = await UserController.UserBusiness.approveBand(token, id);

      await BaseDatabase.disconnectDB()
      res.sendStatus(result.statusCode);
    } catch (err) {
      await BaseDatabase.disconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async approveAllBands(req: Request, res: Response) {
    try {
      const token = req.headers.authorization || req.headers.Authorization as string;
      const idList = req.body.idList as string[]

      const result = await UserController.UserBusiness.approveAllBands(token, idList);

      await BaseDatabase.disconnectDB()
      res.sendStatus(result.statusCode);
    } catch (err) {
      await BaseDatabase.disconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const token = req.headers.authorization || req.headers.Authorization as string;
      const name = req.body.name

      const result = await UserController.UserBusiness.updateUser(token, name);

      await BaseDatabase.disconnectDB()
      res.sendStatus(result.statusCode);
    } catch (err) {
      await BaseDatabase.disconnectDB()
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
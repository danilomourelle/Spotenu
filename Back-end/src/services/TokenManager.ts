import * as jwt from "jsonwebtoken";
import { UserType } from "../models/User";

export class TokenManager {
  public generateToken(payload: any): string {
    return jwt.sign(payload, process.env.JWT_KEY as string,
      { expiresIn: process.env.JWT_EXPIRE_TIME }
    );
  }

  public retrieveDataFromToken(token: string): TokenContent {
    const data = jwt.verify(token, process.env.JWT_KEY as string) as any;
    return {
      isActive: data.isActive,
      type: data.type,
      id: data.id
    }
  }
}

interface TokenContent {
  isActive: boolean,
  type: UserType,
  id: string
}
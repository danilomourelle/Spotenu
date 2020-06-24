import { BaseResponse } from "./BaseResponse";

export class UserAuth extends BaseResponse {
  constructor(public token: string, public user: object, public statusCode: number) {
    super({
      token:token,
      user: user
    }, statusCode)
  }
}
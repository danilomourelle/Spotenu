import { BaseResponse } from "./BaseResponse"

export class Creation extends BaseResponse{
  constructor(public msg: string) {
    super({message: msg}, 201)
  }
}
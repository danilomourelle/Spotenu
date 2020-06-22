import { BaseResponse } from "./BaseResponse"

export class Creation extends BaseResponse{
  constructor(private msg: string) {
    super({message: msg}, 201)
  }
}
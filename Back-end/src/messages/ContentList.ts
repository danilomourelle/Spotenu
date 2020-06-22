import { BaseResponse } from "./BaseResponse";

export class ContentList{
  constructor(public message: any[], public statusCode: number = 200) {
  }
}
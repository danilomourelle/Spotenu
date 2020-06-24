export abstract class BaseResponse {
  constructor(public message: any, public statusCode: number = 200){
  }
}
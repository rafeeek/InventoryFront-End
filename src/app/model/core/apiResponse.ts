export class ApiResponse {
    success: boolean;
    statusCode: number;
    message: string;
    data: any;
    text:string;
  
    constructor(
      success: boolean,
      statusCode: number,
      message: string,
      data: any,
      text:string
    ) {
      this.success = success;
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.text = text;

    }
  }





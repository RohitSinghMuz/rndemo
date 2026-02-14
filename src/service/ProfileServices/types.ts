export interface commonResponse {
  code?: string;
  responseCode?: string;
  responseMessage?: String | null;
  status?: number;
  data?: any | null;
  errorMsg?: string;
  str?: string;
  toekn?: string;
  message?: string;
}

export declare namespace ProfileHomeResponse {
  interface ProfileResponse extends commonResponse {
    data?: any | string;
  }
}

export interface commonRequest{
str?:string;
}

export declare namespace ProfileHomeRequest {
    interface ProfileRequest extends commonRequest {
        userId:string;
        userName:string;
    }
  }
  

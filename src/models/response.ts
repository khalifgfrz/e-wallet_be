import { IUser } from "./user.model";
import { IDataUser } from "./user.model";

interface IPaginationMeta {
    totalData?: number;
    totalPage?: number;
    page: number;
    prevLink: string | null;
    nextLink: string | null;
  }
  
  export interface IBasicResponse {
    msg: string;
    data?: any[];
    err?: string;
    meta?: IPaginationMeta;
  }

  export interface IUserResponse extends IBasicResponse {
    data?: IUser[];
  }
  
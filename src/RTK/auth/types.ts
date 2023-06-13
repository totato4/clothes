export type IUser = {
    email: string;
}

export type AuthSliceState = {
    email: string | null;
    accessToken: number | string | null;
    _id: string | null;
    role: string | null;
    status: Status;
}
export type AuthSliceStatePayload = {
    email: string;
    _id: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number | string;
    token: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',

}

export type Iparams = {
    email: string;
    password: string;
    
}
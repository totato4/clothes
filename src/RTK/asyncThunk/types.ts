export interface Iitem {
  id?: string;
  imageURL?: string;
    humanCategory?: string;
    clothesCategory?: string;
    brand?: string;
  price?: number;
  rating?: number;
  discount?: number;
  name?: string;
}



export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',

}


export interface IitemsSliceState {
  items: Iitem[]
  status: Status;
}
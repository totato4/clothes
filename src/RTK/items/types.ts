




export interface Iitem {
  id: string;
  imageUrl: string;
  name: string;
  category?: number;
  price: number;
  rating?: number;
  discount?: number | boolean;
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
export interface IProduct {
  _id: string;
  id: number;
  imageURL: string;
    humanCategory: string;
    clothesCategory: string;
    brand: string;
  price: number;
  rating: number;
  discount: number;
  title: string;
  count: number;
}

export interface IResponseProduct {
  products: IProduct[],
  limit: number;
  totalPages: number;
  count: number;
  currentPage: number;
  query: any;
}


export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',

}


export interface IitemsSliceState {
  products: IProduct[];
  countPages: number;
  countProducts: number;
  currentPage: number;
  status: Status;
  itemPageStatus: Status;
  itemPage: IProduct | {};
}
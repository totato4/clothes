import { Iitem } from "../asyncThunk/types";







export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',

}


export interface IitemsSliceState {
  items: Iitem[]
  status: Status;
}

export type ICategory = {
      clothes: string;
      humanCategory: string  ;
}

export type ICategoriesArray = string[];

export interface IFilterState {
  filter: {
    category: ICategory;
    categoriesArray: ICategoriesArray;
    color:  string;
  size:  string;
  brand: string;
    price: SortPriceType;
    pagination: {
      page: number;
      pageQty: number;
    }
    query: string;
  }
}


export type SortCategory = number | number[] | boolean;
export type SortPriceType = [number, number]

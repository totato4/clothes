






// export enum Status {
//   LOADING = 'loading',
//   SUCCESS = 'success',
//   ERROR = 'error',

// }


// export interface IitemsSliceState {
//   items: Iitem[]
//   status: Status;
// }

export interface ISort {
  color: string[];
  size: string[];
  brand: string[];
  price: SortPriceType;

  
}


export type SortCategory = number | number[] | boolean;
export type SortPriceType = number | number[] | [boolean, number] 
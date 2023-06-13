import { IProduct } from '../RTK/cart/types';



export const calcTotalPrice = (products: IProduct[]) => {
    return  products.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
}

export const calcTotalCount = (products: IProduct[]) => {
  return products.reduce((sum, obj) => {
      return obj.count + sum;
      }, 0);
}
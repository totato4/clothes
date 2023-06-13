








export interface ICartState {
  products: IProduct[];
  totalPrice: number;
  count: number,
}

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
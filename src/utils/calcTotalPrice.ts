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



const dropSubCategoryArray = [
  [
    "Футболки",
    "Штаны",
    "Майки",
    "Джинсы",
    "Куртки",
    "Рубашки",
    "Толстовки",
    "Брюки",
  ],
  ["Кроссовки", "Туфли", "Ботинки", "Тапочки", "Сандали"],
  ["Брелки", "Цепочки", "Ожерелья", "Галстуки"],
  [
    "Кросовки для бега",
    "Спортивные костюмы",
    "Шапочки для бассейна",
    "Футболки для бега",
    "Тренировочные маски",
  ],
  ["Резинки для волос", "Заколки"],
  ["Товары со скидкой", "Уцененные товары"],
];

const filterArray = [
  [" Одежда "],
  ["Обувь  "],
  [" Аксессуары "],
  ["Спорт  "],
  [" Красота "],
  [" Распродажа "],
];

const brands = ["Бренд1", "Бренд2", "Бренд3"];

const humanCategory = ["woman", "man", "kid"];
const itemColor = [
  "красный",
  "синий",
  "зеленый",
  "желтый",
  "черный",
  "оранжевый",
  "серый",
];
const itemSize = ["XS", "M", "L", "S", "XL"];

const clothesAll = dropSubCategoryArray.flat(1);
clothesAll.pop();
clothesAll.pop();
var rand = Math.floor(Math.random() * clothesAll.length);

// СОЗДАНИЕ МАССИВА ТОВАРОВ УКАЖИ В LENGTH КОЛИЧЕСТВО СОЗДАННЫХ ТОВАРОВ 500 без скидки и 120 со скидкой я делал

// const me = Array.from({ length: 120 }).map((obj, i: number) => ({
//   id: i + 500,
//   // id: i,

//   discount: Math.round(Math.random() * 20),
//   // discount: 0,

//   humanCategory:
//     humanCategory[Math.floor(Math.random() * humanCategory.length)],
//   price: Math.round(Math.random() * 10000),
//   rating: Math.round(Math.random() * 10),
//   brand: brands[Math.floor(Math.random() * brands.length)],
//   clothesCategory: clothesAll[Math.floor(Math.random() * clothesAll.length)],
//   imageURL: "item" + [Math.round(Math.random() * 4)],
//   // imageURL: "item" + id,
//   color: itemColor[Math.floor(Math.random() * itemColor.length)],
//   size: itemSize[Math.floor(Math.random() * itemSize.length)],
// }));
// // @ts-ignore
// const fullMe = me.map((o, i) => {
//   return { ...o, title: o.clothesCategory };
// });
// console.log(fullMe);
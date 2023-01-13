import React from "react";

const categoryArray = [
  { name: "Платья и сарафаны", categoryId: 0 },
  { name: "Джемперы и кардиганы", categoryId: 1 },
  { name: "Верхняя одежда", categoryId: 2 },
  { name: "Футболки и поло", categoryId: 3 },
  { name: "Большие размеры", categoryId: 4 },
  { name: "Юбки", categoryId: 5 },
  { name: "Блузы и туники", categoryId: 6 },
  { name: "Джинсы", categoryId: 7 },
  { name: "Белье", categoryId: 8 },
  { name: "Пиджаки и костюмы", categoryId: 9 },
  { name: "Толстовки и свитшоты", categoryId: 10 },
  { name: "Шорты", categoryId: 11 },
  { name: "Спортивные костюмы", categoryId: 12 },
  { name: "Комплекты одежды", categoryId: 13 },
  { name: "Обувь", categoryId: 14 },
];

const Left = () => {
  return (
    <div>
      <div className="text-gcCBCBCB text-[16px] leading-[19.5px] font-normal">
        Категория
      </div>
      <div className="ml-[10px] mt-[14px] text-[14px] leading-[17.07px] font-normal text-black2">
        <ul className="grid gap-3">
          {categoryArray.map((arr, i) => (
            <li key={i + arr.categoryId}>{arr.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Left;

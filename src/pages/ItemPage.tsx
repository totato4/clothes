import React from "react";
import { Iitem } from "./../RTK/asyncThunk/types";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

const ItemPage: React.FC = () => {
  const [item, setItems] = React.useState<any>([{}]);
  const [loaded, setLoaded] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await Axios.get(
          `http://localhost:3001/items?id=` + id
        );
        setLoaded(true);
        setItems(data);
      } catch (error) {
        alert("ошибка при загрузке страницы");
        navigate("/");
      }
    }
    fetchItem();
  }, []);

  const goBack = () => navigate(-1);

  return (
    <div className=" flex flex-col justify-center items-center relative max-w-[1144px] mx-auto min-w-[800px] ">
      <button
        onClick={() => goBack()}
        className="  mb-[50px] mr-auto ml-[20px] rounded-sm whitespace-nowrap hover:text-orange-400 transition duration-150"
      >
        Вернуться назад
      </button>
      {loaded == true && (
        <div className="text-black2  font-medium text-[11px] leading-[13.41px]">
          <div className="relative max-w-[224px] max-h-[340px] select-none">
            {item[0].humanCategory == "woman" && (
              <img src={`../img/w${item[0].imageURL[4]}.jpg`} alt="" />
            )}
            {item[0].humanCategory == "man" && (
              <img src={`../img/m${item[0].imageURL[4]}.jpg`} alt="" />
            )}
            {item[0].humanCategory == "kid" && (
              <img src={`../img/k${item[0].imageURL[4]}.jpg`} alt="" />
            )}

            {item[0].discount ? (
              <div className="absolute bottom-2 right-2 py-[5px] px-[10px] text-white bg-yc1">
                {`-${item[0].discount}%`}
              </div>
            ) : (
              ""
            )}
          </div>
          <span className="text-[10px] leading-[12.19px]">
            {item[0].clothesCategory}
          </span>
          <div className="flex gap-2">
            <span
              className={`${
                item[0].discount !== 0 && item[0].discount ? "line-through" : ""
              }`}
            >
              {item[0].price} ₽
            </span>
            {item[0].discount !== 0 && item[0].discount && item[0].price ? (
              <span className="text-yc1">
                {Math.round(
                  item[0].price - (item[0].discount / 100) * item[0].price
                )}{" "}
                ₽
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
      {loaded == false && <div>Идет загрузка товара ...</div>}
    </div>
  );
};

export default ItemPage;

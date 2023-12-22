import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ data, showButton = true }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left p-2 m-2 border-gray-200 border-b-2 flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            {showButton && (
              <div className="absolute">
                <button
                  className="p-2 rounded-lg bg-black text-white shadow-lg "
                  onClick={() => handleAddItem(item)}
                >
                  Add+
                </button>
              </div>
            )}
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              className="w-30 h-30"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;

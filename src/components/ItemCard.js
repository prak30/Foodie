import React from "react";

const ItemCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left p-2 m-2 border-gray-200 border-b-2 flex justify-between "
        >
          <div>
            <div>
              <span>{item.card.info.name}</span>
              <span>- Rs {item.card.info.price}</span>
            </div>
            <div>
              <p>{item.card.info.description}</p>
            </div>
          </div>
          <div className="p-4">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              className="w-48 h-48"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;

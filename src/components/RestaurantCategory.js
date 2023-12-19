import React from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="w-6/12  mx-auto shadow-lg p-4">
      <div className="flex justify-between">
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      <div>
        <ItemCard data={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;

import React, { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="w-6/12  mx-auto shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      <div>{showItems && <ItemCard data={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;

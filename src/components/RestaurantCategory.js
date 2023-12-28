import { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto shadow-lg p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg sm:text-xl">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      <div className="mt-2">
        {showItems && <ItemCard data={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

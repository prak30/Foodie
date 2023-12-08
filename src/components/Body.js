import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="toprated"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant, index) => (
          <RestaurantCard key={index} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

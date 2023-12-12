import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restItem, setRestItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.2832187&lng=73.98619099999999&restaurantId=" +
        id
    );
    const data = await response.json();
    console.log(data);
    setRestItem(data.data.cards[0].card.card.info);
  };

  return restItem.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="rest-div">
      <h1>{restItem.name}</h1>
      <img
        style={{ width: "300px", height: "200px" }}
        src={CDN_URL + restItem.cloudinaryImageId}
      />
      <h2>{restItem.cuisines.join(",")}</h2>
      <h3>{restItem.costForTwoMessage}</h3>
      <h3>Rating: {restItem.avgRating}</h3>
    </div>
  );
};

export default RestaurantMenu;

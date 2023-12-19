import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  // Check if cards array exists and has at least 3 elements
  if (!resInfo || !resInfo.cards || resInfo.cards.length < 3) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-5">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",") + "-" + costForTwoMessage}
      </p>
    </div>
  );
};

export default RestaurantMenu;

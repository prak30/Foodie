import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  // Check if cards array exists and has at least 3 elements
  if (!resInfo || !resInfo.cards || resInfo.cards.length < 3) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  // console.log("yp", resInfo?.cards[0]?.card?.card?.info);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-5">{name}</h1>
      <img
        className="mx-auto w-60 h-60"
        src={CDN_URL + cloudinaryImageId}
        alt="food image"
      />
      <p className="font-bold text-lg">
        {cuisines.join(",") + "-" + costForTwoMessage}
      </p>
      <div>
        {categories.map((category) => (
          <RestaurantCategory data={category.card.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

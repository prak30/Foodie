import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restItem = useRestaurantMenu(id);

  // const { name, cloudinaryImageId, cuisines, costForTwoMessage, avgRating } =
  //   restItem.cards[0].card.card.info;

  return restItem.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="rest-div">
      <h1>{restItem.cards[0].card.card.info.name}</h1>
      <img
        style={{ width: "300px", height: "200px" }}
        src={CDN_URL + restItem.cards[0].card.card.info.cloudinaryImageId}
      />
      <h2>{restItem.cards[0].card.card.info.cuisines.join(",")}</h2>
      <h3>{restItem.cards[0].card.card.info.costForTwoMessage}</h3>
      <h3>Rating: {restItem.cards[0].card.card.info.avgRating}</h3>
    </div>
  );
};

export default RestaurantMenu;

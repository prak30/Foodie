import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { ALL_RESTAURANTS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.2832187&lng=73.98619099999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(response);
    const data = await response.json();
    console.log("inside fetchdata");

    console.log(data);
    setListOfRestaurants(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRestaurants);
              setFilteredList(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="toprated"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {console.log(listOfRestaurants)}
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

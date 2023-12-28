import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { ALL_RESTAURANTS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
    console.log("initial render", +listOfRestaurants.length);
  }, []);

  const fetchData = async () => {
    const response = await fetch(ALL_RESTAURANTS_URL);
    const data = await response.json();
    setListOfRestaurants(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!onlineStatus) {
    return <h1>You seem to be offline. Check your internet connection</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-col sm:flex-row">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black p-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="search m-4 p-4">
          <button
            className="toprated px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              console.log("top");
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              console.log(filteredList);
              setFilteredList(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
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

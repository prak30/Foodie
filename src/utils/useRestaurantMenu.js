import { useState, useEffect } from "react";
const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        id
    );
    const json = await response.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;

import { useState, useEffect } from "react";
const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.2832187&lng=73.98619099999999&restaurantId=" +
        id
    );
    const json = await response.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;

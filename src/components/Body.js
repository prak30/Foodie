import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

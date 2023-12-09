import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  // const { cloudinaryImageId, costForTwo, name, cuisines, avgRating } =
  //   resdata?.info;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + resdata.info.cloudinaryImageId} />
      <h3>{resdata.info.name}</h3>
      <h4 className="res-text">{resdata.info.cuisines.join(",")}</h4>
      <h4>{resdata.info.costForTwo}</h4>
      <h4>{resdata.info.avgRating} stars</h4>
      <h4>{resdata.info.sla.deliveryTime} min</h4>
    </div>
  );
};
export default RestaurantCard;

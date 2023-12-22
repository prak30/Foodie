import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  // const { cloudinaryImageId, costForTwo, name, cuisines, avgRating } =
  //   resdata?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 overflow-hidden">
      <img
        className="rounded-lg"
        src={CDN_URL + resdata.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg whitespace-normal">
        {resdata.info.name}
      </h3>
      <h4 className="whitespace-pre-line">{resdata.info.cuisines.join(",")}</h4>
      <h4>{resdata.info.costForTwo}</h4>
      <h4>{resdata.info.avgRating} stars</h4>
      <h4>{resdata.info.sla.deliveryTime} min</h4>
    </div>
  );
};
export default RestaurantCard;

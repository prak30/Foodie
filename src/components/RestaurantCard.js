import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;

  return (
    <div className="m-4 p-4 w-full md:w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 overflow-hidden">
      <img
        className="rounded-lg w-full"
        src={CDN_URL + resdata.info.cloudinaryImageId}
        alt={resdata.info.name}
      />
      <h3 className="font-bold py-4 text-lg whitespace-normal">
        {resdata.info.name}
      </h3>
      <h4 className="whitespace-pre-line text-sm">
        {resdata.info.cuisines.join(", ")}
      </h4>
      <h4 className="text-sm">₹{resdata.info.costForTwo}</h4>
      <h4 className="text-sm">{resdata.info.avgRating} stars</h4>
      <h4 className="text-sm">{resdata.info.sla.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;

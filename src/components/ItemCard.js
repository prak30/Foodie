import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ data, showButton = true }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left p-2 m-2 border-gray-200 border-b-2 flex flex-col sm:flex-row items-center justify-between "
        >
          <div className="mb-4 sm:mb-0 w-full sm:w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-full sm:w-3/12 p-4">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              className="w-full h-40 sm:h-30 object-cover mb-4 sm:mb-0"
              alt={item.card.info.name}
            />
            {showButton && (
              <div className="flex justify-center">
                <button
                  className="p-2 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add+
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;

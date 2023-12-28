import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleCheckoutClick = () => {
    // Redirect to the checkout component when the button is clicked
    history("/checkout"); // Replace '/checkout' with the actual path of your checkout component
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center mx-auto p-4 md:w-8/12 lg:w-6/12 xl:w-4/12">
      <h1 className="font-bold text-xl md:text-2xl p-5">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1>Your cart is empty. Add items to your cart.</h1>
      )}
      <div>
        <ItemCard data={cartItems} showButton={false} />
      </div>
      <div className="font-bold mt-2">
        Total - ₹
        {cartItems.reduce((acc, item) => acc + item.card.info.price / 100, 0)}
      </div>
      <div>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

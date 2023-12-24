import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

// Add feature to remove add button
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
    <div className="text-center w-6/12 m-auto">
      <h1 className="text-bold text-2xl p-5">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1>Your cart is empty add items to your cart</h1>
      )}
      <div>
        <ItemCard data={cartItems} showButton={false} />
      </div>
      <div>
        Total -
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

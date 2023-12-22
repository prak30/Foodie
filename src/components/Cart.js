import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

// A dd feature to remove add button
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center">
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
        <ItemCard data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

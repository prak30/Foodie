import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  const status = useOnlineStatus();
  //subscribing to cart using a selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log("header rendered");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="logo">
        <img
          src={LOGO_URL}
          width="100"
          height="auto"
          alt="logo"
          onClick={() => window.location.reload()}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">🛒-{cartItems.length}</Link>
          </li>
          <button
            onClick={() => {
              loginbtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginbtn}
          </button>
          <li className="px-4">{status ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  const status = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  console.log("header rendered");

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 p-4">
      <div className="mx-auto sm:mx-0 mb-4 sm:mb-0">
        <img
          src={LOGO_URL}
          width="100"
          height="auto"
          alt="logo"
          onClick={() => window.location.reload()}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex flex-wrap">
          <li className="px-4 mb-2 sm:mb-0">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 mb-2 sm:mb-0">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 mb-2 sm:mb-0">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 mb-2 sm:mb-0 font-bold">
            <Link to="/cart">🛒-{cartItems.length}</Link>
          </li>
          <button
            className="px-4 mb-2 sm:mb-0"
            onClick={() => {
              loginbtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginbtn}
          </button>
          <li className="px-4 mb-2 sm:mb-0">{status ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [loginbtn, setLoginBtn] = useState("Login");
  console.log("header rendered");
  return (
    <div className="top-header">
      <div className="logo">
        <img src={LOGO_URL} width="100" height="auto" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="loginbtn"
            onClick={() => {
              loginbtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
              // console.log(loginbtn);
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

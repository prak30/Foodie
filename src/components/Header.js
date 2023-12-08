import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="top-header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Pmgwclym0lINzs_-jo9RjVilemwJIgH0iw&usqp=CAU"
          width="100"
          height="auto"
          alt="logo"
        />
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHUiaNPEkExCjcaMqetiz3Ii6_v8SULrwOg&usqp=CAU"
      />
      <h3>Baba Au Rhum</h3>
      <h4>Burger&fries</h4>
      <h4>4.5stars</h4>
      <h4>38min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

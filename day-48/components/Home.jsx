import React from "react";
import { Route, Outlet } from "react-router-dom";
import Products from "./Products";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-container">
          <img
            src="https://m.media-amazon.com/images/I/61Z5DaOEVeL._SX3000_.jpg"
            alt="Hero Image"
            className="home-image"
          />
        </div>
      </div>
      <Products />
      <Outlet />
    </div>
  );
};

export default Home;

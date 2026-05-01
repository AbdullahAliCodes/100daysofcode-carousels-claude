import React from "react";
import { Link, NavLink } from "react-router-dom";
import amazonLogo from "../../assets/amazon-logo-large-white.png";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/home">
        <img
          src={amazonLogo}
          alt="Amazon Logo"
          className="amazon-logo"
          width={95}
        />
      </Link>
      <div className="header-search">
        <input className="header-input" type="text" />
        <div className="search-icon-container">
          <SearchSharpIcon className="search-icon" />
        </div>
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <span className="header-option-1">Hello Guest</span>
            <span className="header-option-2">
              <strong>Sign In</strong>
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <span className="header-option-1">Returns</span>
            <span className="header-option-2">
              <strong>& Orders</strong>
            </span>
          </div>
        </Link>
        <Link to="/prime">
          <div className="header-option">
            <span className="header-option-1">Your</span>
            <span className="header-option-2">
              <strong>Prime</strong>
            </span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="header-cart">
            <ShoppingBasketSharpIcon className="header-cart" />
            <span className="header-cart-items">0</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

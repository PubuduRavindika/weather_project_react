import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div class="app-header">
      <img class="logo" src={assets.logo} alt="" />
      <div class="input-div">
        <input type="text" placeholder="Enter a city" id="city" />
        <button>
          Add City
        </button>
      </div>
    </div>
  );
};

export default Header;

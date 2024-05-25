import React from "react";
import "./DetailsHeader.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div class="app-header-details">
      <img class="logo" src={assets.logo} alt="" />
    </div>
  );
};

export default Header;

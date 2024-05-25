import React from "react";
import "./Details.css";
import Footer from "../../components/Footer/Footer";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";
import { assets } from "../../assets/assets";
import DetailBody from "../../components/DetailBody/DetailBody";

const Details = () => {
  return (
    <div className="container">
      <div className="background">
        <img src={assets.background} alt="" />
        <div className="bg-dark"></div>
      </div>

      <DetailsHeader/>
      <DetailBody/>
      <Footer />
    </div>
  );
};

export default Details;

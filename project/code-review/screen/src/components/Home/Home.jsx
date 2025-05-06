import React from "react";
import "./Home.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Home = () => {
  return (
    <div className="price-container">
      <h1 className="price-heading">Pricing Plans</h1>
      <p className="price-discrption">
        Select the perfect plan that fits your QR code generation needs
      </p>
      <div className="tabs-button">
        <ToggleSwitch />
      </div>
      <div className="price-carts">
        <div className="price-cart">basic</div>
        <div className="price-cart">pro</div>
        <div className="price-cart">enterprise</div>
      </div>
    </div>
  );
};

export default Home;

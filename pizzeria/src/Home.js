import React, { Component } from "react";
import timer from "./timer.jpg";
import chef from "./chef.jpg";
import ingredients from "./ingredients.jpg";
import content from "./content.json";

import CopyRight from "./CopyRight";
import copyright from "./CopyRight";

export default class Home extends Component {
 
  render() {
    return (
      <div className="home">
        <center>
          <h3>Our Story</h3>
        </center>
        <p className="storyparagraph">
          {content.story}
        </p>
        <div className="ingredients">
          <div className="ingredientsdivimg">
            <img
              className="ingredientsimg"
              src={ingredients}
              alt="image not available"
            ></img>
          </div>
          <div className="ingredientsdivpara">
            <br />
            <br />
            <h2>Ingredients</h2>
            <br />
            <p>
              {content.ingredients}
            </p>
          </div>
        </div>
        <div className="ourchefs">
          <div className="ourchefsdivimg">
            <img
              className="ourchefsimg"
              src={chef}
              alt="image not available"
            ></img>
          </div>
          <div className="ourchefsdivpara">
            <br />
            <br />
            <h2>Our Chefs</h2>
            <br />
            <p>
              {content.chef}
            </p>
          </div>
        </div>
        <div className="delivery">
          <div className="deliverydivimg">
            <img
              className="deliveryimg"
              src={timer}
              alt="image not available"
            ></img>
          </div>
          <div className="deliverydivpara">
            <h2>45 min Delivery</h2>
          </div>
        </div>
        <br />
        <br />
        <CopyRight/>
      </div>
    );
  }
}

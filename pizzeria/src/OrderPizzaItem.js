import React, { Component } from "react";
import logo from "./pizzalogo.jpg"
export default class OrderPizzaItem extends Component {

    
     
  
  render() {
    
  
  
    return (
      <div className="orderpizzaitem">
        <div className="column1">
          <h5 className="itemname">{this.props.pizzadata.name}</h5>
          {/* <vegnonveg/> */}
          {/* <div className="vegnon">v</div> */}
          {this.props.pizzadata.type == "veg"?

 <div className="veg">v</div>:

  <div className="nonveg">v</div>
    }
          <br />
          <br />
          <h6 className="price">₹{this.props.pizzadata.price}.00</h6>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="column2">
          <div className="itemdesc">
            <p>{this.props.pizzadata.description}</p>
            <h7 className="desctitles">Ingredients :</h7>
            <p>{this.props.pizzadata.ingredients.toString()}</p>
            <h7 className="desctitles">Toppings :</h7>

            <p>{this.props.pizzadata.topping.toString()}</p>
          </div>
        </div>
        <div className="column3">
          <div>
            <img
              className="orderimage"
              src={this.props.pizzadata.image}
              alt="not available"
            ></img>
          </div>
        </div>
        <div>
          <button
            className="ordercartbutton"
            type="submit"
            onClick={() => alert("You have selected "+this.props.pizzadata.name)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

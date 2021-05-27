import React, { Component } from "react";
import axios from "axios";

import BuildPizzaItem from "./BuildPizzaItem";

import CopyRight from "./CopyRight";
import copyright from "./CopyRight";
export default class BuildPizza extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: [],
      sum:0,
    };
    
  }
  increasedecreasesum(event,item) {
     if (event.target.checked) {

      this.setState({ sum: this.state.sum +item.price})
    
    } else {
     this.setState({ sum: this.state.sum - item.price })
    }
    return this.state.sum;
  }
  componentDidMount() {
    axios
      .get("http://localhost:3100/ingredients")
      .then((resp) => this.setState({ ingredients: resp.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <center>
          <p className="paragraph">
            pizzeria now gives you options to build your own pizza. Customize
            your pizza by choosing ingredients from the list given below.
          </p>
          <table className="buildtable" >
            {this.state.ingredients.map((item, index) => (
              <div className="builditem">
                <tr className="buildtr">
                  <td className="tdimage">
                    <img className="buildpizzaimg" src={item.image}></img>
                  </td>
                  <td className="tdtitle">
                    {item.tname}
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;₹
                    {item.price}.00
                  </td>
                  <td className="tdcheckbox">
                    <input
                      type="checkbox"
                      className="addcheckbox"
                      id="checkbox"
                      name="addcart"
                      onChange={(event) =>
                        this.increasedecreasesum(event, item)
                      }
                    ></input>
                    <label className="label" for="addcart">
                      Add
                    </label>
                  </td>
                </tr>
              </div>
            ))}
          </table>
        </center>
        <div className="total">
          <h5 className="totalsum">Total Cost : ₹{this.state.sum}.00</h5>
          <center>
            <button className="buildButton" type="submit">
              Build Ur Pizza
            </button>
          </center>
        </div>
        <CopyRight />
      </div>
    );
  }
}

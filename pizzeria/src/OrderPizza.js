import React, { Component } from "react";
import axios from "axios";
import OrderPizzaItem from "./OrderPizzaItem";
import CopyRight from "./CopyRight";



export default class OrderPizza extends Component {
  constructor() {
    super();
    this.state = {
      pizzas: [],
    };
  }
  showAlertBox(item) {
    alert("selected")
  }
  componentDidMount() {
    axios
      .get("http://localhost:3100/pizza")
      .then((resp) => this.setState({ pizzas: resp.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="table">
        <center>
          <table>
            {this.state.pizzas.map((pizza, index) => (
              <tr className="tr" key={index}>
                <td className="td">
                  <OrderPizzaItem pizzadata={pizza} />
                </td>
              </tr>
            ))}
          </table>
        </center>
        <br />
        <CopyRight/>
      </div>
    );
  }
}

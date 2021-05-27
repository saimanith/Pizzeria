import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./pizzalogo.jpg";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/" className="title" style={{ color: "rgb(179, 175, 175)" }}>
          Pizzeria
        </Link>
        <Link to="/" style={{ color: "rgb(179, 175, 175)" }}>
          <img className="pizzalogo" src={logo} alt="image not available"></img>
        </Link>
        <Link
          to="/OrderPizza"
          className="orderpizza"
          style={{ color: "rgb(179, 175, 175)" }}
        >
          Order Pizza
        </Link>
        <Link
          to="/BuildPizza"
          className="buildpizza"
          style={{ color: "rgb(179, 175, 175)" }}
        >
          Build Pizza
        </Link>
        <button type="submit" className="button">
          <i className="fas fa-shopping-cart"></i>Shopping Cart
        </button>
      </div>
    );
  }
}


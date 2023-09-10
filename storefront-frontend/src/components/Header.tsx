import logo from "/logo.svg";
import "./styles.scss";
import shoppingCart from "../assets/shopping-cart.svg";
import { useState } from "react";

export const Header = (props: {
  loadCartFunction: () => void;
  loadProductsFunction: () => void;
}) => {
  const { loadCartFunction, loadProductsFunction } = { ...props };
  const [title, setTitle] = useState("Products");
  const productsButton = () => {
    setTitle("Products");
    loadProductsFunction();
  };
  const cartButton = () => {
    setTitle("Cart");
    loadCartFunction();
  };
  return (
    <header className="header">
      <div>
        <img
          src={logo}
          alt="Shopping Cart Application"
          className="logo"
          onClick={productsButton}
        />
      </div>
      <h3>{title}</h3>
      <button onClick={cartButton}>
        <img src={shoppingCart} alt="Go To Cart" className="logo" />
      </button>
    </header>
  );
};

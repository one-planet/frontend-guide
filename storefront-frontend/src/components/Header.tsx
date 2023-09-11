import logo from "/logo.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

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
    <AppBar>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button onClick={productsButton}>
          <img
            src={logo}
            alt="Shopping Cart Application"
            style={{ width: "50px", height: "50px" }}
          />
        </Button>
        <Typography variant="h6">{title}</Typography>
        <Button onClick={cartButton}>
          <img src={shoppingCart} alt="Go To Cart" />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

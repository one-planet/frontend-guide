import { FunctionComponent } from "react";
import classes from "./cart.module.scss";
import thumbnail from "../assets/thumbnail.jpg";

export const Cart: FunctionComponent = () => {
  const products = [1, 2, 3];
  const title = "iPhone 9";
  const getCart = products.map((product) => (
    <div className={classes.product} key={product}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
    </div>
  ));

  return (
    <section className={classes.cart}>
      <div className={classes.container}>{getCart}</div>
    </section>
  );
};

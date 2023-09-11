import { FunctionComponent } from "react";
import "./styles.scss";
import thumbnail from "../assets/thumbnail.jpg";

export const Cart: FunctionComponent = () => {
  const products = [1, 2, 3];
  const title = "iPhone 9";
  const getCart = products.map((product) => (
    <div className="product" key={product}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
    </div>
  ));

  return (
    <section className="cart">
      <div className="container">{getCart}</div>
    </section>
  );
};

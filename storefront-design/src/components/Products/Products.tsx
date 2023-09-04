import { FunctionComponent } from "react";
import classes from './products.module.scss'
import thumbnail from "../../assets/thumbnail.jpg"

export const Products: FunctionComponent = () => {
  const id = [1,2,3,4,5,6,7,8,9];
  const title = "iPhone 9";
  const price = 109;
  const productList = id.map( () => (
    <div className={classes.product} onClick={() => console.log("howdy")}>
      <img src={thumbnail} alt={title}></img>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button>Add to Cart</button>
    </div>
  ))

  return (
    <section className={classes.productPage}>
      {/* <h1>Products</h1> */}
      <div className={classes.container}>
        {productList}
      </div>
    </section>
  )
}
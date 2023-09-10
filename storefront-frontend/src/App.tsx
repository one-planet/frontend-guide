import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { useState } from "react";
import { Cart } from "./components/Cart";
import Footer from "./components/footer";

function App() {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const loadCart = () => {
    setShowShoppingCart(true);
  };
  const loadProducts = () => {
    setShowShoppingCart(false);
  };
  const redirect = () => {
    alert("Howdy. 🤠");
  };
  return (
    <>
      <Header loadCartFunction={loadCart} loadProductsFunction={loadProducts} />
      {showShoppingCart ? <Cart /> : <Products />}
      <Footer name={"Marcus Aurelius"} year={2023} callback={redirect} />
    </>
  );
}
export default App;

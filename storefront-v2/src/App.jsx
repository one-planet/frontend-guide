import { Typography, AppBar, Toolbar, CssBaseline } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ProductList from "./ProductList";
function App() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <StorefrontIcon />
          <Typography sx={{ flexGrow: 1, textAlign: "center" }} variant="h6">
            Products
          </Typography>
          <ShoppingCartIcon />
        </Toolbar>
      </AppBar>
      <main>
        <ProductList products={products} />
      </main>
    </>
  );
}

export default App;

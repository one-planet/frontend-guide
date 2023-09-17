import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import thumbnail from "./assets/thumbnail.jpg";

const productList = ({ products }) => {
  // Sample data for the cards
  const title = "iPhone 9";
  const price = 109;
  return (
    <Container sx={{ marginTop: 12 }}>
      <Grid container spacing={2}>
        {products.map((key) => (
          <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img" // Set the component type to 'img' for images
                  alt={title} // Provide the appropriate alt text
                  height="140" // Set your preferred height
                  image={thumbnail} // Replace 'imageUrl' with the actual image URL property
                />
                <CardContent>
                  <Typography variant="h6">{title}</Typography>
                  <Typography color="textSecondary">${price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default productList;

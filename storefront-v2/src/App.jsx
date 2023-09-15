import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@mui/material";

function App() {
  // Sample data for the cards
  const data = [1,2,3,4,5,6,7,8,9];
  const description = "Description for Product";

  return (
    <div >
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Products</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} >
          {data.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} >
              <Card >
                <CardContent>
                  <Typography variant="h6" component="div">
                    {item}
                  </Typography>
                  <Typography color="textSecondary">
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;

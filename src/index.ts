import ProductsRoute from './router/products.router';
import StatusRoute from './router/status.routes';

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.use(StatusRoute);
app.use(ProductsRoute);

app.listen(port, () => {
  console.warn(`Example app listening on port ${port}`);
});
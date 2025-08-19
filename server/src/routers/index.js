import baseRouter from "./base.js";
import productsRouter from "./product.js";


const configureRouters = (app) => {
  app.use("/api", baseRouter);
  app.use("/api/products", productsRouter);
};

export default configureRouters;

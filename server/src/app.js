import cors from "cors";
import express from "express"; // loads a package (express) installed in node_modules
import envConfig from "./config/envConfig.js";
import { mockProducts } from "./mockdata.js";

const app = express(); // creates an Express application object. app is now your server “controller” where you define routes, middleware, settings, etc.
app.use(express.json());

app.use(
  cors({
    origin: envConfig.ALLOWED_ORIGIN,
  }),
);

app.get("/status", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
app.get("/api/products", (req, res) => {
  res.status(200).json(mockProducts);
  // res.send(mockProducts);
});

app.listen(envConfig.PORT, () => {
  console.log(`Example app listening on port ${envConfig.PORT}`);
});

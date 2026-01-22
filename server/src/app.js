import cors from "cors";
import express from "express"; // loads a package (express) installed in node_modules
import { mockProducts } from "./mockdata.js";

const app = express(); // creates an Express application object. app is now your server “controller” where you define routes, middleware, settings, etc.
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
}));

const port = 5000; //This is the port number your server will listen on. http://localhost:5000

app.get("/status", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
app.get("/api/products", (req, res) => {
  // res.status(200).json(mockProducts);
  res.send(mockProducts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

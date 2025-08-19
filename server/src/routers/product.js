import { Router } from "express";
import { mockProducts } from "../mockdata.js";
import { RouteNotImplementedError } from "../error/index.js";

const productsRouter = Router();

productsRouter.post("/", (req, res) => {
  throw new RouteNotImplementedError();
});

productsRouter.get("/", (req, res) => {
  res.status(200).json(mockProducts);
});

productsRouter.get("/:productId", (req, res) => {
  const { productId } = req.params;
  const product = mockProducts.find((p) => p.id === parseInt(productId));
  res.json({message: `Product ID: ${productId}`});
});

export default productsRouter;

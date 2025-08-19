import { Router } from "express";
import { mockProducts } from "../mockdata.js";

const productsRouter = Router();

productsRouter.post("/", (req, res) => {
  throw new Error("Not implemented yet");
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

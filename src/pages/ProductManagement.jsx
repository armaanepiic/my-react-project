import { useCallback, useEffect, useMemo, useState } from "react";
import { productServices } from "../api/services";

export default function ProductManagement() {
  const { theme } = useState();
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const products = await productServices.getProducts();
      setProducts(products);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch product");
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => acc + product.price, 0);
  }, [products]);

  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-2">Product Management</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <div key={product.name}>{product.name}</div>
        ))}
      </div>
      <div className="text-2xl font-bold">Total Price: {totalPrice}</div>
    </div>
  );
}
// https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json

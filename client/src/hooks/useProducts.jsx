import React, { useCallback, useEffect, useMemo, useState } from "react";
import { productServices } from "../api/services";

export default function useProducts() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const getProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const products = await productServices.getProducts();
      setProducts(products);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  
  const getProductByName = useCallback(
    (name) => {
      if (!name.trim()) return "Enter a search term";

      try {
        // Create a regex pattern that's case-insensitive and allows partial matches
        const regexPattern = new RegExp(name, "i");
        const product = products.find((product) =>
          regexPattern.test(product.name)
        );
        return product ? product.name : "Product not found";
      } catch {
        // If regex is invalid, fall back to simple string matching
        const product = products.find((product) =>
          product.name.toLowerCase().includes(name.toLowerCase())
        );
        return product ? product.name : "Product not found";
      }
    },
    [products]
  );

  // total price calculation
  const totalPrice = useMemo(() => {
    return products.reduce((total, product) => total + product.price, 0);
  }, [products]);

  // event handling
  const handleProductSearch = useCallback((e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }, []);

  const filteredProducts = useMemo(() => {
      if (!search.trim()) return products;
  
      try {
        const regexPattern = new RegExp(search, "i");
        return products.filter((product) => regexPattern.test(product.name));
      } catch {
        // If regex is invalid, fall back to simple string matching
        return products.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
      }
    }, [products, search]);
  return {products, search, filteredProducts, isLoading, error, getProductByName, totalPrice, handleProductSearch};
}

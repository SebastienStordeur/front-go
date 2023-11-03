import { useEffect, useState } from "react";
import { Product } from "../types/types";

const Homepage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:8080/products", {
        method: "GET",
      });
      // Error Handling
      const data = await response.json();

      setProducts(data.data);
    };

    getProducts();
  }, []);

  return (
    <div>
      {" "}
      LIST
      {products &&
        products.map((product) => {
          return <div key={product._id}>{product.title}</div>;
        })}
    </div>
  );
};

export default Homepage;

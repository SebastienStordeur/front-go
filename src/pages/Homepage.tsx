import { useEffect, useState } from "react";
import { Product } from "../types/types";

const Homepage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      console.log("sent");
      const response = await fetch("http://localhost:8080/products", {
        method: "GET",
      });
      // Error Handling
      const data = await response.json();

      setProducts(data.data);
    };

    getProducts();
  }, []);

  const token = localStorage.getItem("token");

  return (
    <div>
      {token && <h1>Authenticated</h1>}
      LIST
      {products &&
        products.map((product) => {
          return <div key={product._id}>{product.title}</div>;
        })}
    </div>
  );
};

export default Homepage;

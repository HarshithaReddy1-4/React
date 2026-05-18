import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Products List</h1>

      {products.map((product) => (
        <div className="card" key={product.id}>
          <h2>{product.title}</h2>

          <p>
            <strong>Price:</strong>{" "}
            <span className="price">${product.price}</span>
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Description:</strong> {product.description}
          </p>

          <div className="category">{product.category}</div>
        </div>
      ))}
    </div>
  );
}

export default Products;
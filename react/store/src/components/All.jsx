import React, { useState, useEffect } from "react";
import "./styles/All.css";
import { useCart } from '../contexts/CartContext';

function All() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="products-container-4">
      <h1>All Products</h1>
      <div className="product-list-4">
        {products.map((product) => (
          <div key={product.id} className="product-card-4">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default All;

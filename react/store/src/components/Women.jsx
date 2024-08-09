import React, { useState, useEffect } from "react";
import "./styles/Women.css";
import { useCart } from '../contexts/CartContext';

function Women() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="women-container">
      <h1>Women's Clothing</h1>
      <div className="products-container-1">
        {products.map((product) => (
          <div key={product.id} className="product-card-1">
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

export default Women;

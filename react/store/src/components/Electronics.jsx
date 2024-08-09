import React, { useState, useEffect } from "react";
import "./styles/Electronicts.css";
import { useCart } from '../contexts/CartContext';

function Electronics() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="electronics-container">
      <h1>Electronics</h1>
      <div className="products-container-2">
        {products.map((product) => (
          <div key={product.id} className="product-card-2">
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

export default Electronics;

import React from "react";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((product, index) => (
              <li key={index}>
                <img src={product.images[0]} alt={product.title} />
                <h2>{product.title}</h2>
                <p>Description: {product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;

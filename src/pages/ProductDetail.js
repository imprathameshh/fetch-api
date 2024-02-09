import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const jsonData = await response.json();
      setProduct(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //When product is still loading
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.images[0]} alt={product.title} />
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
};

export default ProductDetail;

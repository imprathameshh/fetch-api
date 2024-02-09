import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  //Fetching a Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const jsonData = await response.json();
      setProducts(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //Serching a Product
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  //Serching a Category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToCart = (productId) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    existingCartItems.push(selectedProduct);

    localStorage.setItem("cart", JSON.stringify(existingCartItems));

    alert("Product added to cart!");
  };

  const filteredProducts = products.filter((product) => {
    const isInSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isInCategory =
      !selectedCategory || selectedCategory === product.category;
    return isInSearch && isInCategory;
  });

  return (
    <div className="product-wrap">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div>
          <h3>Category:</h3>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h1>Product List</h1>

      <div className="product-list">
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              <img src={product.images[0]} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <button onClick={() => addToCart(product.id)}>
                Add to Cart
              </button>{" "}
              <Link to={`/product/${product.id}`}>View</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

export default App;

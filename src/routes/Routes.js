import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";

const RouteDemo = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouteDemo;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="container">
        <div className="header-left">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="serch-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

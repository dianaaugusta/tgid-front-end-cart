import React from "react";
import { Link } from "react-router-dom";
import CartIcon from '../assets/cart-shopping-solid.svg'
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Lojinha da Diana
          </Link>
        </h1>
      </div>
      <div className="header-routes">
        <ul>
          <li>
            <Link to="/cart" className="cart">
               <img src={CartIcon} width="20px" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

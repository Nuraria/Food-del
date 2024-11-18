import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu, setMenu] = React.useState(0);
  const menuLi = ["Home", "Menu", "Mobile-app", "Contact us"];

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        {menuLi.map((itemLi, index) => (
          <li
            className={menu === index ? "active" : ""}
            onClick={() => setMenu(index)}
            key={index}
          >
            {itemLi}
          </li>
        ))}
        {/* <li className='active'>Home</li>
            <li>Menu</li>
            <li>mobile-app</li>
            <li>contact us</li> */}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button>sign-in</button>
      </div>
    </div>
  );
};

export default Navbar;

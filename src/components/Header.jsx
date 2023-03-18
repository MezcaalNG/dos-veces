import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import MenuMobile from "@components/MenuMobile";
import menu from "@icons/icon_menu.svg";
import logoGamatoto from "@logos/gamatoto.webp"
import AppContext from "@context/AppContext";
import MyOrder from "@containers/MyOrder";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleMobile = () => {
    console.log('asd');
    setToggleMobile(!toggleMobile);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" onClick={handleToggleMobile} />
      <div className="navbar-left">
        <img src={logoGamatoto} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">Todo</a>
          </li>
          <li>
            <a href="/">Abarrotes</a>
          </li>
          <li>
            <a href="/">Lácteos</a>
          </li>
          <li>
            <a href="/">Botanas</a>
          </li>
          <li>
            <a href="/">Bebidas</a>
          </li>
          <li>
            <a href="/">Higiene Personal</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            user@email.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
      {toggleMobile && <MenuMobile />}
    </nav>
  );
};

export default Header;

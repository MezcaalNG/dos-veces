import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom';
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.precio;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">Mi Orden</p>
      </div>
      <div className="my-order-content">
        <div className="my-order-content-items">
        {state.cart.map((product, index) => (
          <OrderItem product={product} key={index} indexValue={index} />
        ))}
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button" onClick={navigateToCheckout}>Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;

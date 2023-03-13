import React, { useContext } from "react";
import OrderItem from '@components/OrderItem';
import AppContext from "@context/AppContext";
import '@styles/Checkout.scss';

const Checkout = () => {
	const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.precio;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">Mi Orden</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>11.03.23</span>
							<span>{state.cart.length} Articulos</span>
						</p>
						<p>${sumTotal()}</p>
					</div>
					{state.cart.map((product, index) => (
          			<OrderItem product={product} key={index} indexValue={index} />
       				 ))}
				</div>
			</div>
		</div>
	);
}

export default Checkout;

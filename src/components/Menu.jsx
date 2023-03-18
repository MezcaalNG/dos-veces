import React from 'react';
import {useNavigate} from 'react-router-dom';
import '@styles/Menu.scss';

const Menu = () => {
	const navigate = useNavigate();

	const navigateLogin = () => {
		navigate('/login');
	};

	const navigateOrders = () => {
		navigate('/orders');
	};
	const navigateAccount = () => {
		navigate('/account');
	};

	

	return (
		<div className="Menu">
			<ul>
				<li>
					<a onClick={navigateOrders} className="title">Mis Ordenes</a>
				</li>
				<li>
					<a onClick={navigateAccount}>Mi Cuenta</a>
				</li>
				<li>
					<a onClick={navigateLogin}>Salir</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;

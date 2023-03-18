import React from "react";
import {useNavigate} from 'react-router-dom';
import '@styles/MenuMobile.scss';

const MenuMobile = () => {
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
		<div className="MenuMobile">
			<ul>
            <li>
					<a className="title">Todo</a>
				</li>
                <li>
					<a className="title">Abarrotes</a>
				</li>
                <li>
					<a className="title">Lácteos</a>
				</li>
                <li>
					<a className="title">Botanas</a>
				</li>
                <li>
					<a className="title">Bebidas</a>
				</li>
                <li>
					<a className="title">Higiene Personal</a>
				</li>
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

export default MenuMobile;
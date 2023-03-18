import React from 'react';
import {useNavigate} from 'react-router-dom';
import '@styles/NewPassword.scss';
import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
	const navigate = useNavigate();

	const navigateLogin = () => {
		navigate('/login');
	};
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title">crear un nuevo password</h1>
				<p className="subtitle">Ingresa un nuevo password para tu cuenta</p>
				<form  className="form">
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label htmlFor="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<button onClick={navigateLogin} className="primary-button login-button" >Confirmar</button>
				</form>
			</div>
		</div>
	);
}

export default NewPassword;

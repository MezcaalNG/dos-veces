import React from 'react';
import {useNavigate} from 'react-router-dom';
import '@styles/PasswordRecovery.scss';
import logo from '@logos/logo_yard_sale.svg'

const PasswordRecovery = () => {
	const navigate = useNavigate();

	const navigateEmailSend = () => {
		navigate('/send-email');
	};
	return (
		<div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title">Recuperacion de Password</h1>
				<p className="subtitle">Ingresa tu correo para recuperar tu password</p>
				<form className="form">
					<label htmlFor="email" className="label">Email</label>
					<input type="text" id="email" className="input input-email" />
					<button onClick={navigateEmailSend} className="primary-button login-button" >Confirmar</button>
				</form>
			</div>
		</div>
	);
}

export default PasswordRecovery;

import React from 'react';
import {useNavigate} from 'react-router-dom';
import '@styles/SendEmail.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';


const SendEmail = () => {
	const navigate = useNavigate();
	const navigateNewPassword = () => {
		navigate('/new-password');
	};
	const navigateLogin = () => {
		navigate('/login');
	};
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title">El Email ha sido enviado!</h1>
				<p className="subtitle">Por favor revisa tu Email</p>
				<div className="email-image">
					<img src={email} alt="email" />
				</div>
				<button onClick={navigateLogin} className="primary-button login-button">Login</button>
				<p className="resend">
					<span>No recibi el email?</span>
					<a onClick={navigateNewPassword}>Reenviar</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;

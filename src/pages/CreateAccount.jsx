import React from 'react';
import {useNavigate} from 'react-router-dom';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
	const navigate = useNavigate();

	const navigateLogin = () => {
		navigate('/login');
	};
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">Mi Cuenta</h1>
				<form className="form">
					<div>
						<label htmlFor="name" className="label">Nombre</label>
						<input htmlFor="text" id="name" placeholder="Gamatoto" className="input input-name" />
						<label htmlFor="email" className="label">Email</label>
						<input htmlFor="text" id="email" placeholder="user@email.com" className="input input-email" />
						<label htmlFor="password" className="label">Password</label>
						<input htmlFor="password" id="password" placeholder="*********" className="input input-password" />
					</div>
					<button onClick={navigateLogin} className="primary-button login-button" >Crear</button>
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;

import React, { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {

	const form = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}

		console.log(data);
	}
  const navigate = useNavigate();

	const navigateLogin = () => {
		navigate('/');
	};
  const navigatePassRecovery = () => {
		navigate('/password-recovery');
	};
  const navigateSignup = () => {
		navigate('/signup');
	};

	return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="user@email.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            type="submit"
            className="primary-button login-button"
            onClick={navigateLogin}
          >
            Login
          </button>
          <a onClick={navigatePassRecovery}>Olvide mi password</a>
        </form>
        <button onClick={navigateSignup} className="secondary-button signup-button">Registrarse</button>
      </div>
    </div>
  );
}

export default Login;

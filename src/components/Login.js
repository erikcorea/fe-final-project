import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../config';

const Login = ({ setToken, setRefresh }) => {
    const [loginInfo, setLoginInfo] = useState({});
    let history = useHistory();
    
    function handleChange(event) {
		event.preventDefault();
		setLoginInfo({ ...loginInfo, [event.target.id]: event.target.value });
	}

	function handleCancel(event) {
		setLoginInfo('');
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `${apiUrl}/token/login/`,
            data: {email: loginInfo.email, password: loginInfo.password},
        })
        .then((res) => {
            console.log(res);
            if(res.data.auth_token) {
                localStorage.setItem('token', res.data.auth_token);
				setToken(res.data.auth_token);
				history.push('/home');
				setRefresh(true);
            }
        })
        .catch(console.error);
    }
    return (
			<div className='form-div'>
				<h1 id="login-message">Welcome to Code Connections</h1>
				<h3>Get Started Today</h3>
				<form id="login-form" onSubmit={handleSubmit}>
					<label className="login-label" htmlFor='email'>Email</label>
					<input
						className='login-input'
						type='email'
						placeholder='Email'
						id='email'
						onChange={handleChange}
						value={loginInfo.email}
						name={loginInfo.email}
					/>
					<label className="login-label" htmlFor='password'>Password</label>
					<input
						className='login-input'
						type='password'
						placeholder='Password'
						id='password'
						onChange={handleChange}
						value={loginInfo.password}
						name={loginInfo.password}
					/>

					<button className='login-btns' type='submit'>
						Login
					</button>
					<button
						type='button'
						onClick={handleCancel}
						className='login-btns'
						id='cancel'>
						Cancel
					</button>

					<p
						style={
							loginInfo.attempted ? { display: 'block' } : { display: 'none' }
						}
						className={loginInfo.valid ? 'valid' : 'invalid'}>
						Passwords must match.
					</p>
				</form>
				<h4>Don't Have An Account?</h4>
				<Link to='/create'>Create Account</Link>
			</div>
		);
};

export default Login;
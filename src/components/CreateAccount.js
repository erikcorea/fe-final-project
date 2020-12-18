import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { apiUrl } from '../config';

const CreateAccount = () => {
    const [regInfo, setRegInfo] = useState({});
    let history = useHistory();

    function handleChange(event){
        event.preventDefault();
        setRegInfo({...regInfo, [event.target.id]: event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(apiUrl);
        console.log(regInfo);
        axios({
            method: 'POST',
            url: `${apiUrl}/users/`,
            data: regInfo,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).catch(console.error);
        history.push('/');
    }
    return (
			<div className='login-main-div'>
				<div className="form-div">
					<div className="login-messages">
						<h1>CODE CONNECTIONS</h1>
					</div>
					<form className='login-form' onSubmit={handleSubmit}>
						<label className="create-acc-label" htmlFor="text">First Name</label>
						<input
							className='login-input'
							type='text'
							required
							id='first_name'
							placeholder='First Name'
							onChange={handleChange}
						/>
						<label className="create-acc-label" htmlFor="text">Last Name</label>
						<input
							className='login-input'
							type='text'
							required
							id='last_name'
							placeholder='Last Name'
							onChange={handleChange}
						/>
						<label className="create-acc-label" htmlFor="text">Username</label>
						<input
							className='login-input'
							type='text'
							required
							id='username'
							placeholder='Username'
							onChange={handleChange}
						/>
						<label className="create-acc-label" htmlFor="email">Email</label>
						<input
							className='login-input'
							type='email'
							required
							id='email'
							placeholder='Email'
							onChange={handleChange}
						/>
						<label className="create-acc-label" htmlFor="password">Password</label>
						<input
							className='login-input'
							type='password'
							required
							id='password'
							placeholder='password'
							onChange={handleChange}
						/>
						<label className="create-acc-label" htmlFor="password">Retype Password</label>
						<input
							className='login-input'
							type='password'
							required
							id='re_password'
							placeholder='Retype Password'
							onChange={handleChange}
						/>
						<button className="login-btns" type='submit'>Create Account</button>
					</form>
				</div>
			</div>
		);
};

export default CreateAccount;
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
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						required
						id='first_name'
						placeholder='First Name'
						onChange={handleChange}
					/>
					<input
						type='text'
						required
						id='last_name'
						placeholder='Last Name'
						onChange={handleChange}
					/>
					<input
						type='text'
						required
						id='username'
						placeholder='Username'
						onChange={handleChange}
					/>
					<input
						type='email'
						required
						id='email'
						placeholder='Email'
						onChange={handleChange}
					/>
					<input
						type='password'
						required
						id='password'
						placeholder='password'
						onChange={handleChange}
					/>
					<input
						type='password'
						required
						id='re_password'
						placeholder='Retype Password'
						onChange={handleChange}
					/>
					<button type='submit'>Create Account</button>
				</form>
			</div>
		);
};

export default CreateAccount;
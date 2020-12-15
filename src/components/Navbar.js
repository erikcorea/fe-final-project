import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = ({ token, setToken, setRefresh }) => {
	let history = useHistory();
	const [open, setOpen] = useState(false);
	// const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	function logout() {
		localStorage();
		setToken('');
		history.push('/');
	}

	function home() {
		history.push('/home');
		setRefresh(true);
	}

    return (
			<div>
				<nav>
					<div className='logo'>React Nav</div>
					<ul
						className='nav-links'
						style={{ transform: open ? 'translateX(0px)' : '' }}>
						<li>
							<button onClick={home}>Home</button>
						</li>
						{token ? (
							<li>
								<button onClick={logout}>Logout</button>
							</li>
						) : (
							<li>
								<Link to='/'>Login</Link>
							</li>
						)}
					</ul>
					<i onClick={() => setOpen(!open)} className='fas fa-bars burger'></i>
				</nav>
			</div>
		);
};

export default Navbar;
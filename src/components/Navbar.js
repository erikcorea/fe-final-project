import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ModalComponent from './PostModal';

const Navbar = ({ token, setToken, setRefresh }) => {
	let history = useHistory();
	const [open, setOpen] = useState(false);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function logout() {
		localStorage.clear();
		setToken('');
		history.push('/');
	}

	function home() {
		history.push('/home');
		setRefresh(true);
	}

    return (
			<div className="nav-div">
				<nav className="nav-main">
					<div className='logo'>Code Connections</div>
					<ul
						className='nav-links'
						style={{ transform: open ? 'translateX(0px)' : '' }}>
						<li>
							<button className='nav-btns' onClick={home}>
								Home
							</button>
						</li>
						<li>
							<button className='nav-btns btn-open' onClick={handleShow}>Create Post</button>
						</li>
						{token ? (
							<li>
								<button className='nav-btns' onClick={logout}>
									Logout
								</button>
							</li>
						) : (
							<li>
								<Link to='/' className="nav-btns">Login</Link>
							</li>
						)}
					</ul>
					<i onClick={() => setOpen(!open)} className='fas fa-bars burger'></i>
				</nav>
				{show ? <div className="back-drop" onClick={handleClose}></div> : null }
				<ModalComponent show={show} handleClose={handleClose} setRefresh={setRefresh} token={token}/>
			</div>
		);
};

export default Navbar;
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Create from './components/CreateAccount';
import './App.css';

function App() {
  const [token, setToken] = useState();
  const [refresh, setRefresh] = useState(true);
  return (
		<div className='App'>
			<Route
				path='/home'
				render={() => (
					<Navbar token={token} setToken={setToken} setRefresh={setRefresh} />
				)}
			/>
			<main>
				<Route
					path='/'
					exact
					render={() => <Login setToken={setToken} setRefresh={setRefresh} />}
				/>
				<Route
					path='/home'
					render={() => <Home refresh={refresh} setRefresh={setRefresh} />}
				/>
				<Route path='/create' component={Create} />
			</main>
		</div>
	);
}

export default App;

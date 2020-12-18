export const apiUrl =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://code-connections-be.herokuapp.com/';
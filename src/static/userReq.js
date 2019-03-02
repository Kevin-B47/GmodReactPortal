import axios from 'axios';

const axiosWithAuth = axios.create({
	withCredentials: true,
	headers: {
		'Access-Control-Allow-Credentials': 'true'
	}
});

export const fetchUserData = () => {
	return axiosWithAuth.get('http://localhost:8080/auth/get');
};

export const login = () => {
	return axiosWithAuth.get('http://localhost:8080/auth/login');
};

export const logout = () => {
	return axiosWithAuth.get('http://localhost:8080/auth/logout');
};

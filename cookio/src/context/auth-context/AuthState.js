import React, {useReducer} from 'react';
import AuthReducer from './AuthReducer';
import AuthContext from './AuthContext';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthTokens';

import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS
} from '../types';

import {v4 as uuidv4} from 'uuid';

const AuthState = props => {
	const InitialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		error: null
	};

	const [state, dispatch] = useReducer(AuthReducer, InitialState);

	// Load User
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		try {
			const res = await axios.get('/api/auth');

			dispatch({tyoe: USER_LOADED, payload: res.data});
		} catch (error) {
			dispatch({type: AUTH_ERROR});
		}
	};

	// Register User
	const register = async formData => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const res = await axios.post('api/users', formData, config);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});

			loadUser();
		} catch (error) {
			dispatch({
				type: REGISTER_FAIL,
				payload: error.response.data.msg
			});
		}
	};
	// Login User
	const login = async () => console.log('login');

	// Logout User
	const logout = () => console.log('logou');

	// Clear Errors
	const clearErrors = () => dispatch({type: CLEAR_ERRORS});

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				register,
				login,
				logout,
				clearErrors
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;

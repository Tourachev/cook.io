import React, {useReducer} from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import {SET_LOADING} from '../types';

const UserState = props => {
	const InitialState = {
		username: '',
		email: '',
		recipes: [],
		isLoggedIn: false,
		isLoading: false
	};

	const [state, dispatch] = useReducer(UserReducer, InitialState);

	// Logging in

	// Fetch all Recipes

	// Search The Recipes

	// Fetch Recipes By Meal

	// Fetch Recipes

	// Set Loading

	return (
		<UserContext
			value={{
				username: state.username,
				email: state.email,
				recipes: [],
				isLoggedIn: state.isLoggedIn,
				isLoading: state.isLoading
			}}
		>
			{props.children}
		</UserContext>
	);
};

export default UserState;

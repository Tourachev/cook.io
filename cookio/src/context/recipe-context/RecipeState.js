import React, {useReducer} from 'react';
import axios from 'axios';
import RecipeContext from './RecipeContext';
import RecipeReducer from './RecipeReducer';
import {SET_LOADING} from '../types';

const RecipeState = props => {
	const InitialState = {
		recipes: [],
		isLoading: false
	};

	const [state, dispatch] = useReducer(RecipeReducer, InitialState);

	// Fetch all Recipes

	// Search The Recipes

	// Fetch Recipes By Meal

	// Fetch Recipes

	// Set Loading

	return (
		<RecipeContext
			value={{
				recipes: state.recipes,
				isLoading: state.isLoading
			}}
		>
			{props.children}
		</RecipeContext>
	);
};

export default RecipeState;

import React, {useReducer} from 'react';
import RecipeContext from './RecipeContext';
import RecipeReducer from './RecipeReducer';
import {
	ADD_RECIPE,
	DELETE_RECIPE,
	UPDATE_RECIPE,
	FILTER_RECIPE,
	CLEAR_FILTER,
	CONTACT_ERROR,
	GET_RECIPES,
	GET_ONE_RECIPE,
	GET_MY_RECIPES
} from '../types';
import axios from 'axios';

const RecipeState = props => {
	const InitialState = {
		recipes: [],
		recipe: null,
		isLoading: true
	};

	const [state, dispatch] = useReducer(RecipeReducer, InitialState);

	// Fetch all Recipes
	const getRecipes = async () => {
		try {
			const res = await axios.get('/api/recipes');
			dispatch({
				type: GET_RECIPES,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Fetch one Recipe
	const getOneRecipe = async id => {
		try {
			const res = await axios.get('/api/recipes/' + id);
			dispatch({
				type: GET_ONE_RECIPE,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Fetch Recipes that the user owns
	const getMyRecipes = async userID => {
		try {
			const res = await axios.get('/api/recipes/user/' + userID);
			dispatch({
				type: GET_MY_RECIPES,
				payload: res.data
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				payload: err.response.msg
			});
		}
	};

	// Add Recipe
	const addRecipe = async recipe => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		try {
			const res = await axios.post('/api/recipes', recipe, config);

			dispatch({type: ADD_RECIPE, payload: res});
		} catch (error) {
			dispatch({type: CONTACT_ERROR, payload: error.response.msg});
		}
	};

	// Delete Recipe
	const deleteRecipe = id => {
		dispatch({type: DELETE_RECIPE, payload: id});
	};
	// Update Recipe

	// Search The Recipes

	// Clear search

	// Fetch Recipes By Meal

	// Fetch Recipes

	return (
		<RecipeContext.Provider
			value={{
				recipes: state.recipes,
				error: state.error,
				recipe: state.recipe,
				addRecipe,
				deleteRecipe,
				getRecipes,
				getOneRecipe,
				getMyRecipes
			}}
		>
			{props.children}
		</RecipeContext.Provider>
	);
};

export default RecipeState;

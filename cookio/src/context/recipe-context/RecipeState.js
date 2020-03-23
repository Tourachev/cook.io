import React, { useReducer } from 'react';
import axios from 'axios';
import RecipeContext from './RecipeContext';
import RecipeReducer from './RecipeReducer';
import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, FILTER_RECIPE, CLEAR_FILTER } from '../types';

const RecipeState = (props) => {
	const InitialState = {
		recipes: [
			{
				id: 0,
				rating: 0,
				name: 'Smoked Salmon',
				ingredients: [
					{
						id: 0,
						name: 'Salmon',
						quantity: '10 ounces'
					},
					{
						id: 1,
						name: 'Lemon',
						quantity: '1'
					}
				],
				cooktime: 20,
				preptime: 10,
				difficulty: 'Easy',
				comments: []
			},
			{
				id: 1,
				rating: 0,
				name: 'Baked Salmon',
				ingredients: [
					{
						id: 0,
						name: 'Salmon',
						quantity: '10 ounces'
					},
					{
						id: 1,
						name: 'Lemon',
						quantity: '1'
					}
				],
				cooktime: 20,
				preptime: 10,
				difficulty: 'Easy',
				comments: []
			},
			{
				id: 2,
				rating: 0,
				name: 'Roasted Salmon',
				ingredients: [
					{
						id: 0,
						name: 'Salmon',
						quantity: '10 ounces'
					},
					{
						id: 1,
						name: 'Lemon',
						quantity: '1'
					}
				],
				cooktime: 20,
				preptime: 10,
				difficulty: 'Easy',
				comments: []
			}
		],
		isLoading: false
	};

	const [ state, dispatch ] = useReducer(RecipeReducer, InitialState);

	// Fetch all Recipes

	// Add Recipe

	// Delete Recipe

	// Update Recipe

	// Search The Recipes

	// Clear search

	// Filter Recipes

	// Clear Filter

	// Fetch Recipes By Meal

	// Fetch Recipes

	return (
		<RecipeContext
			value={{
				recipes: state.recipes
			}}
		>
			{props.children}
		</RecipeContext>
	);
};

export default RecipeState;

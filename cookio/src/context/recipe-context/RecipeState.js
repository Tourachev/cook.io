import React, { useReducer } from 'react';
import RecipeContext from './RecipeContext';
import RecipeReducer from './RecipeReducer';
import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, FILTER_RECIPE, CLEAR_FILTER } from '../types';
import { v4 as uuidv4 } from 'uuid';

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
					},
					{
						id: 1,
						name: 'Butter',
						quantity: '1'
					}
				],
				cooktime: 30,
				preptime: 10,
				difficulty: 'Easy',
				comments: [],
				instructions: [
					{
						instruction: 'Do this, do that'
					},
					{
						instruction: 'Do this, do that'
					},
					{
						instruction: 'Do this, do this'
					}
				]
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
				difficulty: 'Medium',
				comments: [],
				instructions: [
					{
						instruction: 'Do this, do that'
					},
					{
						instruction: 'Do this, do that'
					},
					{
						instruction: 'Do this, do this'
					}
				]
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
					}
				],
				cooktime: 20,
				preptime: 20,
				difficulty: 'Easy',
				comments: [],
				instructions: [
					{
						instruction: 'Do this, do that'
					},
					{
						instruction: 'Do this, do that'
					},
					{
						instruction: 'Do this, do this'
					}
				]
			},
			{
				id: 4,
				rating: 0,
				name: 'Roasted Pork',
				ingredients: [
					{
						id: 3,
						name: 'Pork',
						quantity: '10 ounces'
					}
				],
				cooktime: 20,
				preptime: 20,
				difficulty: 'Hard',
				comments: []
			},
			{
				id: 5,
				rating: 0,
				name: 'Roasted Pork',
				ingredients: [
					{
						id: 3,
						name: 'Pork',
						quantity: '10 ounces'
					}
				],
				cooktime: 20,
				preptime: 20,
				difficulty: 'Hard',
				comments: []
			},
			{
				id: 6,
				rating: 0,
				name: 'Roasted Pork',
				ingredients: [
					{
						id: 3,
						name: 'Pork',
						quantity: '10 ounces'
					}
				],
				cooktime: 20,
				preptime: 20,
				difficulty: 'Hard',
				comments: []
			},
			{
				id: 7,
				rating: 0,
				name: 'Roasted Pork',
				ingredients: [
					{
						id: 3,
						name: 'Pork',
						quantity: '10 ounces'
					}
				],
				cooktime: 20,
				preptime: 20,
				difficulty: 'Hard',
				comments: []
			},
			{
				id: 4,
				rating: 0,
				name: 'Roasted Pork',
				ingredients: [
					{
						id: 3,
						name: 'Pork',
						quantity: '10 ounces'
					}
				],
				cooktime: 20,
				preptime: 20,
				difficulty: 'Hard',
				comments: []
			}
		],
		isLoading: false
	};

	const [ state, dispatch ] = useReducer(RecipeReducer, InitialState);

	// Fetch all Recipes

	// Add Recipe
	const addRecipe = (recipe) => {
		recipe.id = uuidv4();
		dispatch({ type: ADD_RECIPE, payload: recipe });
	};

	// Delete Recipe
	const deleteRecipe = (id) => {
		dispatch({ type: DELETE_RECIPE, payload: id });
	};
	// Update Recipe

	// Search The Recipes

	// Clear search

	// Filter Recipes

	// Clear Filter

	// Fetch Recipes By Meal

	// Fetch Recipes

	return (
		<RecipeContext.Provider
			value={{
				recipes: state.recipes,
				addRecipe,
				deleteRecipe
			}}
		>
			{props.children}
		</RecipeContext.Provider>
	);
};

export default RecipeState;

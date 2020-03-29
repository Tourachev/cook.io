import { GET_RECIPES, ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, FILTER_RECIPE, CLEAR_FILTER } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return {
				...state,
				recipes: action.payload,
				loading: false
			};
		case ADD_RECIPE:
			return {
				...state,
				recipes: [ action.payload, ...state.recipes ],
				loading: false
			};
		case UPDATE_RECIPE:
			return {
				...state,
				recipes: state.recipes.map((recipe) => (recipe._id === action.payload._id ? action.payload : recipe)),
				loading: false
			};
		case DELETE_RECIPE:
			return {
				...state,
				recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
				loading: false
			};
		case FILTER_RECIPE:
			return {
				...state,
				filtered: state.recipes.filter((recipe) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return recipe.name.match(regex) || recipe.email.match(regex);
				})
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null
			};
		default:
			return state;
	}
};

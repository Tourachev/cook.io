import { GET_RECIPES, ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, FILTER_RECIPE, CLEAR_FILTER } from '../types';

export default (state, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return {
				...state,
				contacts: action.payload,
				loading: false
			};
		case ADD_RECIPE:
			return {
				...state,
				contacts: [ action.payload, ...state.contacts ],
				loading: false
			};
		case UPDATE_RECIPE:
			return {
				...state,
				contacts: state.contacts.map(
					(contact) => (contact._id === action.payload._id ? action.payload : contact)
				),
				loading: false
			};
		case DELETE_RECIPE:
			return {
				...state,
				contacts: state.contacts.filter((contact) => contact._id !== action.payload),
				loading: false
			};
		case FILTER_RECIPE:
			return {
				...state,
				filtered: state.contacts.filter((contact) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return contact.name.match(regex) || contact.email.match(regex);
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

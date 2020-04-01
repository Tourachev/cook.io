import React, { useContext, useEffect, useRef } from 'react';
import RecipeList from '../../components/Recipe/RecipeList';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth-context/AuthContext';
import RecipeContext from '../../context/recipe-context/RecipeContext';
const RecipeMenu = (props) => {
	const authContext = useContext(AuthContext);
	const recipeContext = useContext(RecipeContext);

	const { isAuthenticated } = authContext;
	const { filterRecipes, clearFilter, filtered } = recipeContext;

	const text = useRef('');

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const onChange = (e) => {
		if (text.current.value !== '') {
			filterRecipes(e.target.value);
		} else {
			clearFilter();
		}
	};

	const selected = props.selected;

	if (isAuthenticated) {
		return (
			<div>
				<div className='recipe-container'>
					<h1 className='display-1'>
						<Link to='/recipes'>Recipes</Link>
					</h1>
					<form>
						<input
							ref={text}
							type='text'
							placeholder='Filter Contacts...'
							onChange={onChange}
							class='form-control'
						/>
					</form>

					<div className='filter-selection-row'>
						<a className={` ${selected === 'top' ? 'filter-selection-button-selected' : ''}`}>
							Top Recipes
						</a>
						<a className={` ${selected === 'random' ? 'filter-selection-button-selected' : ''}`}>
							Random Recipes
						</a>
						<Link
							to='/bymeal'
							className={` ${selected === 'meal' ? 'filter-selection-button-selected' : ''}`}
						>
							By Meal
						</Link>
						<Link
							to='/byingredient'
							className={` ${selected === 'ingredients' ? 'filter-selection-button-selected' : ''}`}
						>
							By Ingredient
						</Link>
						<Link to='/newrecipe'>Create a Recipe</Link>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className='recipe-container'>
				<h1 className='display-1'>
					<Link to='/recipes'>Recipes</Link>
				</h1>
				<form>
					<input
						ref={text}
						type='text'
						placeholder='Filter Contacts...'
						onChange={onChange}
						class='form-control'
					/>
				</form>

				<br />
				<div className='filter-selection-row'>
					<a className={` ${selected === 'top' ? 'filter-selection-button-selected' : ''}`}>Top Recipes</a>
					<a className={` ${selected === 'random' ? 'filter-selection-button-selected' : ''}`}>
						Random Recipes
					</a>
					<Link to='/bymeal' className={` ${selected === 'meal' ? 'filter-selection-button-selected' : ''}`}>
						By Meal
					</Link>
					<Link
						to='/byingredient'
						className={` ${selected === 'ingredients' ? 'filter-selection-button-selected' : ''}`}
					>
						By Ingredient
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RecipeMenu;

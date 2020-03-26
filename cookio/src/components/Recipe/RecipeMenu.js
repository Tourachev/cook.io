import React, { useContext, useState } from 'react';
import { MDBInput } from 'mdbreact';
import RecipeList from '../../components/Recipe/RecipeList';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth-context/AuthContext';

const RecipeMenu = (props) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated } = authContext;

	const selected = props.selected;

	if (isAuthenticated) {
		return (
			<div>
				<div className='recipe-container'>
					<h1 className='display-1'>
						<Link to='/recipes'>Recipes</Link>
					</h1>
					<MDBInput hint='Search' type='text' containerClass='active-pink active-pink-2 mt-0 mb-3' />

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
				<MDBInput hint='Search' type='text' containerClass='active-pink active-pink-2 mt-0 mb-3' />

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

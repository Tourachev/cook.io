import React, { useContext, useState } from 'react';
import axios from 'axios';
import { MDBInput, MDBCol } from 'mdbreact';
import RecipeList from '../../components/Recipe/RecipeList';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth-context/AuthContext';

const RecipesMain = (props) => {
	const authContext = useContext(AuthContext);
	const { isAuthenticated } = authContext;

	if (isAuthenticated) {
		return (
			<div>
				<div className='recipe-container'>
					<h1 className='display-1'>Recipes</h1>
					<MDBInput hint='Search' type='text' containerClass='active-pink active-pink-2 mt-0 mb-3' />

					<div className='filter-selection-row'>
						<Link to=''>Top Recipes</Link>
						<Link to=''>Random Recipes</Link>
						<Link to='/bymeal'>Recipes By Meal</Link>
						<Link to='/byingredient'>Recipes By Ingredient</Link>
						<Link to='/newrecipe'>Create a Recipe</Link>
					</div>

					<RecipeList />
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className='recipe-container'>
				<h1 className='display-1'>Recipes</h1>
				<MDBInput hint='Search' type='text' containerClass='active-pink active-pink-2 mt-0 mb-3' />

				<div className='filter-selection-row'>
					<Link to=''>Top Recipes</Link>
					<Link to=''>Random Recipes</Link>
					<Link to='/bymeal'>Recipes By Meal</Link>
					<Link to='/byingredient'>Recipes By Ingredient</Link>
				</div>

				<RecipeList />
			</div>
		</div>
	);
};

RecipesMain.defaultProps = {
	isLoggedIn: true
};

export default RecipesMain;

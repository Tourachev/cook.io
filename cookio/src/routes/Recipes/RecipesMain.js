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
						<a href=''>Top Recipes</a>
						<a href=''>Random Recipes</a>
						<Link to='/bymeal'>
							<a href=''>Recipes By Meal</a>
						</Link>
						<Link to='/byingredient'>
							<a href=''>Recipes By Ingredient</a>
						</Link>
						<Link to='/newrecipe'>
							<a href=''>Create a Recipe</a>
						</Link>
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
					<a href=''>Top Recipes</a>
					<a href=''>Random Recipes</a>
					<Link to='/bymeal'>
						<a href=''>Recipes By Meal</a>
					</Link>
					<Link to='/byingredient'>
						<a href=''>Recipes By Ingredient</a>
					</Link>
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

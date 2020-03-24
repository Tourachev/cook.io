import React, { Fragement, useEffect, useState } from 'react';
import axios from 'axios';
import { MDBInput, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import RecipeList from '../../components/Recipe/RecipeList';

const RecipesByMeal = () => {
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

export default RecipesByMeal;

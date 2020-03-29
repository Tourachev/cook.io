import React, { useEffect, useState, Fragment, useContext } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import RecipeContext from '../../context/recipe-context/RecipeContext';
import temp from '../../img/img11.com.jpg';

const RecipeList = (props) => {
	// const [ recipes, setRecipes ] = useState({});
	const [ loading, setLoading ] = useState(false);
	const recipeContext = useContext(RecipeContext);
	const { recipes, getRecipes } = recipeContext;

	// Mimics component did mount. Square brackets hold content of what needs to change in order to update
	useEffect(() => {
		getRecipes();
	}, []);

	return (
		<div>
			<div className='recipe-card-container'>
				{recipes.map((recipe) => <RecipeCard recipeContent={recipe} />)}
			</div>
		</div>
	);
};

export default RecipeList;

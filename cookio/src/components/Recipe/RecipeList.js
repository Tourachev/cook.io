import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import RecipeContext from '../../context/recipe-context/RecipeContext';
import temp from '../../img/img11.com.jpg';
import LinearProgress from '@material-ui/core/LinearProgress';

const RecipeList = (props) => {
	// const [ recipes, setRecipes ] = useState({});
	const [ loading, setLoading ] = useState(false);
	const recipeContext = useContext(RecipeContext);
	const { recipes, getRecipes, filtered } = recipeContext;

	// Mimics component did mount. Square brackets hold content of what needs to change in order to update
	useEffect(() => {
		// Will load all recipes into the context
		getRecipes();
	}, []);

	return (
		<div>
			{recipes !== [] && !loading ? filtered !== null ? (
				filtered.map((recipe) => (
					<div className='recipe-card-container'>
						<RecipeCard recipeContent={recipe} />
					</div>
				))
			) : (
				<div className='recipe-card-container'>
					{recipes.map((recipe) => <RecipeCard recipeContent={recipe} />)}
				</div>
			) : (
				<LinearProgress />
			)}
		</div>
	);
};

export default RecipeList;

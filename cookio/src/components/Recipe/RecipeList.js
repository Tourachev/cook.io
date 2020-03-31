import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import RecipeContext from '../../context/recipe-context/RecipeContext';
import temp from '../../img/img11.com.jpg';
import LinearProgress from '@material-ui/core/LinearProgress';

const RecipeList = props => {
	// const [ recipes, setRecipes ] = useState({});
	const [loading, setLoading] = useState(false);
	const recipeContext = useContext(RecipeContext);
	const {recipes, getRecipes} = recipeContext;

	// Mimics component did mount. Square brackets hold content of what needs to change in order to update
	useEffect(() => {
		getRecipes();
	}, []);

	return (
		<div>
			{recipes !== [] && !loading ? (
				<div className='recipe-card-container'>
					{recipes.map(recipe => (
						<RecipeCard recipeContent={recipe} />
					))}
				</div>
			) : (
				<LinearProgress />
			)}
		</div>
	);
};

export default RecipeList;

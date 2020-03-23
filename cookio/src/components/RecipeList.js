import React, { Fragement, useEffect, useState, Fragment, useContext } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import RecipeContext from '../context/recipe-context/RecipeContext';

const RecipeList = (props) => {
	// const [ recipes, setRecipes ] = useState({});
	const [ loading, setLoading ] = useState(false);

	const recipeContext = useContext(RecipeContext);

	const { recipes } = recipeContext;

	const getRecpices = async () => {
		setLoading(true);

		const res = await axios.get('http://localhost:3001/recipes');
		console.log(res.data);
		// setRecipes(res.data.items);
		setLoading(false);
	};

	// Mimics component did mount. Square brackets hold content of what needs to change in order to update
	useEffect(() => {
		getRecpices();
	}, []);

	return (
		<div className='recipe-card-container'>
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
		</div>
	);
};

export default RecipeList;

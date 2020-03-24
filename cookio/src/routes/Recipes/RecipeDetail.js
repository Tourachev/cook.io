import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeDetail = (props) => {
	const [ recipe, setRecipe ] = useState({ recipeID: props.match.params.id });
	const [ loading, setLoading ] = useState(false);

	const getRecipeDetails = async (recipeID) => {
		setLoading(true);

		const res = await axios.post('/api/recipes/' + recipe.recipeID, {
			recipeID
		});
		console.log(res.data);
		setRecipe(res.data);
		setLoading(false);
	};

	useEffect(() => {
		getRecipeDetails(recipe.recipeID);
	}, []);

	return (
		<div>
			<div className='recipe-detail'>
				<h1>RECIPE DETAIL PAGE</h1>
				<h2>Extracting from props: {recipe.recipeID}</h2>
			</div>
		</div>
	);
};

export default RecipeDetail;

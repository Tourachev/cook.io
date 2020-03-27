import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import RecipeContext from  '../../context/recipe-context/RecipeContext'
import temp from '../../img/img11.com.jpg'

const RecipeDetail = (props) => {
	const [ recipe, setRecipe ] = useState({ recipeID: props.match.params.id });
	const [ loading, setLoading ] = useState(false);

	const recipeContext = useContext(RecipeContext)
	const {recipes} = recipeContext;
	const { name, cooktime, preptime, difficulty, ingredients, id } = recipes[props.match.params.id];
	// const getRecipeDetails = async (recipeID) => {
	// 	setLoading(true);

	// 	const res = await axios.post('/api/recipes/' + recipe.recipeID, {
	// 		recipeID
	// 	});
	// 	console.log(res.data);
	// 	setRecipe(res.data);
	// 	setLoading(false);
	// };

	// useEffect(() => {
	// 	getRecipeDetails(recipe.recipeID);
	// }, []);

	return (
		<div>
			<div className='recipe-detail'>

				<div className='recipe-detail-header'>
					<div className='recipe-detail-header-left'><h1 className='display-4'>{name}</h1><hr/></div>
					<div className='detail-img-container'><img src={temp} alt=""/></div>
				</div>
				<hr/>
				<h2>Instructions: {recipe.recipeID}</h2>
			</div>
		</div>
	);
};

export default RecipeDetail;

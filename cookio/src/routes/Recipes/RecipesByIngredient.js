import React, { useEffect, useState } from 'react';
import RecipeList from '../../components/Recipe/RecipeList';
import RecipeMenu from '../../components/Recipe/RecipeMenu';
import Semicircle from '../../img/img1.png';

const RecipesByIngredient = () => {
	var ingredients = [
		{ name: 'potatoes', quantity: 4 },
		{ name: 'butter', quantity: 1 },
		{ name: 'milk', quantity: 1, description: '1 cup' },
		{ name: 'potatoes', quantity: 3 },
		{ name: 'oil', quantity: 1, description: '3 cups' },
		{ name: 'potatoes', quantity: 4 },
		{ name: 'butter', quantity: 1 },
		{ name: 'milk', quantity: 1, description: '1 cup' },
		{ name: 'potatoes', quantity: 3 },
		{ name: 'potatoes', quantity: 4 },
		{ name: 'butter', quantity: 1 },
		{ name: 'milk', quantity: 1, description: '1 cup' },
		{ name: 'potatoes', quantity: 3 },
		{ name: 'potatoes', quantity: 4 },
		{ name: 'butter', quantity: 1 },
		{ name: 'milk', quantity: 1, description: '1 cup' },
		{ name: 'potatoes', quantity: 3 },
		{ name: 'potatoes', quantity: 4 },
		{ name: 'butter', quantity: 1 },
		{ name: 'milk', quantity: 1, description: '1 cup' },
		{ name: 'potatoes', quantity: 3 },
		{ name: 'potatoes', quantity: 4 },
		{ name: 'butter', quantity: 1 },
		{ name: 'milk', quantity: 1, description: '1 cup' },
		{ name: 'potatoes', quantity: 3 },
		{ name: 'potatoes', quantity: 4 },
		{ name: 'butter', quantity: 1 },
		{ name: 'milk', quantity: 1, description: '1 cup' },
		{ name: 'potatoes', quantity: 3 },
		{ name: 'potatoes', quantity: 4 },
		{ name: 'butter', quantity: 1 },
		{ name: 'milk', quantity: 1, description: '1 cup' },
		{ name: 'potatoes', quantity: 3 }
	];

	return (
		<div>
			<RecipeMenu selected='ingredients' />

			<div className='ingredient-content-container'>
				<div className='ingredient-button-container'>
					{ingredients.map((ingredient) => (
						<button type='button' className='btn btn-outline-dark ingredient-button'>
							{ingredient.name}
						</button>
					))}
				</div>

				{/* <RecipeList /> */}
				<div id='circle-cont' className='ingredients-logo'>
					<img id='semicircle' src={Semicircle} alt='' />
				</div>
			</div>
		</div>
	);
};
export default RecipesByIngredient;

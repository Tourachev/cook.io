import React, { useContext, useState } from 'react';
import RecipeList from '../../components/Recipe/RecipeList';
import RecipeMenu from '../../components/Recipe/RecipeMenu';

const RecipesMain = () => {
	return (
		<div>
			<RecipeMenu />
			<RecipeList />
		</div>
	);
};

export default RecipesMain;

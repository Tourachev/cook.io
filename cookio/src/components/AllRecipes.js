import React, {Fragement, useEffect, useState} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const AllRecipes = props => {
	const [recipes, setRecipes] = useState({recipes: []});
	const [loading, setLoading] = useState(false)

	const getRecpices = async () =>{
		setLoading(true);

		const res = await axios.get()

		setRecipes()
	}


	useEffect(() => {
		// const recipes = axios.get('http://localhost:8081/').data;
		console.log('Howdy');
	});

	return (
		<div>
			<div className='recipe-card-container'>
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
				<RecipeCard />
			</div>
		</div>
	);
};

export default AllRecipes;

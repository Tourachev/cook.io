import React, {
	Fragement,
	useEffect,
	useState,
	Fragment,
	useContext
} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import RecipeContext from '../../context/recipe-context/RecipeContext';
import temp from '../../img/img4.jpg';

const RecipeList = props => {
	// const [ recipes, setRecipes ] = useState({});
	const [loading, setLoading] = useState(false);

	const recipeContext = useContext(RecipeContext);

	const {recipes} = recipeContext;

	const getRecpices = async () => {
		setLoading(true);

		const res = await axios.get('api/recipes');
		console.log(res.data);
		setLoading(false);
	};

	// Mimics component did mount. Square brackets hold content of what needs to change in order to update
	useEffect(() => {
		getRecpices();
	}, []);

	return (
		<div>
			<div className='new-recipe-card-container'>
				<div className='recipe-top-bar'>
					<h3 className='text-center'>Baked Salmon</h3>
				</div>

				<div className='recipe-time-circle'>
					<h1 className='center-text'>50</h1>
					<h5 className='center-text'>mins</h5>
				</div>

				<div className='recipe-sidebar'>
					<h4>Difficulty</h4>
					<h5>Easy</h5>
					<h4>Time</h4>
					<h5s>20 mins</h5s>
				</div>
				<div className='recipe-image-holder'>
					<img src={temp} alt='' />
				</div>
			</div>

			<div className='recipe-card-container'>
				{recipes.map(recipe => (
					<RecipeCard recipeContent={recipe} />
				))}
			</div>
		</div>
	);
};

export default RecipeList;

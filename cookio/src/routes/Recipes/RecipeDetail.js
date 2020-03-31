import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import RecipeContext from '../../context/recipe-context/RecipeContext';
import AuthContext from '../../context/auth-context/AuthContext';
import temp from '../../img/img11.com.jpg';
import StarRatings from 'react-star-ratings';
import {useHistory} from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const RecipeDetail = props => {
	let history = useHistory();

	const recipeContext = useContext(RecipeContext);
	const authContext = useContext(AuthContext);

	const {user} = authContext;
	const {recipe, deleteRecipe, loading, getOneRecipe} = recipeContext;

	console.log(user);

	useEffect(() => {
		getOneRecipe(props.match.params.id);
	}, []);

	console.log(recipe);

	const handleDelete = () => {
		deleteRecipe(recipe.id);
		history.push('/recipes');
	};

	const handleEdit = () => {
		console.log('Editing goes here');
	};

	return (
		<div>
			{recipe !== null && !loading ? (
				<div className='recipe-detail'>
					<div className='recipe-detail-header'>
						<div className='recipe-detail-header-left'>
							<div className='flex-row-between'>
								<h1 className='display-3'>{recipe.name}</h1>
								<div id='star-rating-detail'>
									<div>
										<h3>
											Cook Time: {recipe.cooktime} mins
										</h3>
										<h3>
											Prep Time: {recipe.preptime} mins
										</h3>
									</div>
								</div>
							</div>
							<StarRatings
								rating={recipe.rating}
								starRatedColor='black'
								// changeRating={this.changeRating}
								starDimension='30px'
								starSpacing='1px'
								numberOfStars={5}
								name='rating'
							/>
							<hr />
							<div className='recipe-detail-specs'>
								<h2>Ingredients</h2>
								<ul>
									{recipe.ingredients.map(ingredient => (
										<div>
											<li>
												{ingredient.name}{' '}
												{ingredient.quantity}
											</li>
										</div>
									))}
								</ul>
							</div>
						</div>
						<div className='detail-img-container'>
							<img src={temp} alt='' />
							<div>
								{' '}
								<div className='recipe-detail-button-row flex-row-between'>
									<button className='btn btn-outline-dark '>
										Add To Cart!
									</button>
									<button className='btn btn-outline-dark'>
										Add To Favorites!
									</button>
								</div>
								{user !== null && user._id == recipe.user ? (
									<div className='recipe-detail-button-row flex-row-between'>
										<button
											className=' btn btn-outline-dark'
											id='edit-button'
											onClick={handleEdit}
										>
											Edit
										</button>
										<br />
										<button
											className=' btn btn-danger'
											id='delete-button'
											onClick={handleDelete}
										>
											Delete
										</button>
									</div>
								) : (
									<span></span>
								)}
							</div>
						</div>
					</div>
					<hr />
					<h1 className='display-3 center-text'>Instructions</h1>
					{recipe.instructions.map(instruction => (
						<div>
							{' '}
							<h1 className='display-4'>
								Step{' '}
								{recipe.instructions.indexOf(instruction) + 1}
							</h1>
							<hr />
							<p className='enlarged-text'>
								{instruction.instruction}
							</p>
						</div>
					))}
					<hr />
					<h1 className='display-3 center-text'>Comments</h1>
				</div>
			) : (
				<LinearProgress />
			)}
		</div>
	);
};

export default RecipeDetail;

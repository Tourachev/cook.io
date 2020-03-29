import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import RecipeContext from '../../context/recipe-context/RecipeContext';
import temp from '../../img/img11.com.jpg';
import StarRatings from 'react-star-ratings';
import { useHistory } from 'react-router-dom';

const RecipeDetailCard = (props) => {
	let history = useHistory();
	const recipeContext = useContext(RecipeContext);
	const { recipes, deleteRecipe, getOneRecipe } = recipeContext;
	console.log(recipes);
	const { name, cooktime, preptime, difficulty, ingredients, id, instructions, rating } = recipes;

	const handleDelete = () => {
		deleteRecipe(id);
		history.push('/recipes');
	};

	return (
		<div>
			{/* <div className='recipe-detail'>
				<div className='recipe-detail-header'>
					<div className='recipe-detail-header-left'>
						<div className='flex-row-between'>
							<h1 className='display-3'>{name}</h1>
							<div id='star-rating-detail'>
								<button className=' btn btn-danger' id='delete-button' onClick={handleDelete}>
									Delete
								</button>
							</div>
						</div>
						<StarRatings
							rating={rating}
							starRatedColor='black'
							// changeRating={this.changeRating}
							starDimension='30px'
							starSpacing='1px'
							numberOfStars={5}
							name='rating'
						/>
						<hr />
						<div className='recipe-detail-specs'>
							<div>
								<h1>Cook Time: {cooktime}</h1>
								<h1>Prep Time: {preptime}</h1>
							</div>

							<div>
								<h1>Number of Ingredients: {ingredients.length}</h1>
								<h1>Number of Instructions: {instructions.length}</h1>
							</div>
						</div>
					</div>
					<div className='detail-img-container'>
						<img src={temp} alt='' />
					</div>
				</div>
				<hr />
				<h1 className='display-3 center-text'>Instructions</h1>
				{instructions.map((instruction) => (
					<div>
						{' '}
						<h1 className='display-4'>Step {instructions.indexOf(instruction) + 1}</h1>
						<hr />
						<p className='enlarged-text'>{instruction.instruction}</p>
					</div>
				))}
				<hr />
				<h1 className='display-3 center-text'>Comments</h1>
			</div> */}
		</div>
	);
};

export default RecipeDetailCard;

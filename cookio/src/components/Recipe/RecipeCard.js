import React, { Component, useState } from 'react';
import temp from '../../img/img11.com.jpg';
import StarRatings from 'react-star-ratings';

const RecipeCard = ({ recipeContent }) => {
	const { name, cooktime, preptime, difficulty, ingredients } = recipeContent;
	return (
		<div>
			<div className='new-recipe-card-container'>
				<div className='recipe-top-bar'>
					<h2 className='text-center'>{name}</h2>
					<div id='star-rating'>
						<StarRatings
							rating={4.5}
							starRatedColor='black'
							// changeRating={this.changeRating}
							starDimension='30px'
							starSpacing='1px'
							numberOfStars={5}
							name='rating'
							id='star-rating'
						/>
					</div>
				</div>

				<div className='recipe-time-circle'>
					<h1 className='center-text'>{preptime + cooktime}</h1>
					<h5 className='center-text'>mins</h5>
				</div>

				<div className='recipe-sidebar'>
					<h4>Difficulty</h4>
					<h5>{difficulty}</h5>
					<h4>Cook Time</h4>
					<h5>{cooktime} mins</h5>
					<h4>Prep Time</h4>
					<h5>{preptime} mins</h5>
				</div>
				<div className='recipe-image-holder'>
					<img src={temp} alt='' />
				</div>
			</div>
		</div>
		// 	<div className='card-container'>
		// 	<div className='card-container-left'>
		// 		<img src={temp} alt='' />
		// 	</div>
		// 	<div className='card-container-right'>
		// 		<h2 className='center-text'>{name}</h2>
		// 		{/* <hr /> */}
		// 		<div className='rating-container'>
		// 			{' '}
		// 			<StarRatings
		// 				rating={4.5}
		// 				starRatedColor='gold'
		// 				// changeRating={this.changeRating}
		// 				starDimension='20px'
		// 				starSpacing='1px'
		// 				numberOfStars={5}
		// 				name='rating'
		// 			/>
		// 		</div>

		// 		<div className='recipe-spec-container'>
		// 			<div className='recipe-spec' id='cooktime-container'>
		// 				<div className='recipe-spec-content'>
		// 					<h5 className='center-text'>Cook Time </h5>{' '}
		// 					<p>{cooktime} mins</p>
		// 				</div>
		// 			</div>
		// 			<div className='recipe-spec'>
		// 				<div
		// 					className='recipe-spec-content'
		// 					id='preptime-container'
		// 				>
		// 					<h5 className='center-text'>Prep Time</h5>
		// 					<p>{preptime} mins</p>
		// 				</div>
		// 			</div>
		// 			<div
		// 				className={`recipe-spec ${
		// 					difficulty === 'Easy'
		// 						? 'recipe-difficulty-easy'
		// 						: difficulty === 'Medium'
		// 						? 'recipe-difficulty-medium'
		// 						: 'recipe-difficulty-hard'
		// 				}`}
		// 			>
		// 				<div
		// 					className='recipe-spec-content'
		// 					id='difficulty-container'
		// 				>
		// 					<h5 className='center-text'>Difficulty</h5>
		// 					<p>{difficulty}</p>
		// 				</div>
		// 			</div>
		// 			<div className='recipe-spec'>
		// 				<div
		// 					className='recipe-spec-content'
		// 					id='ingredient-container'
		// 				>
		// 					<h5 className='center-text'>Ingredients</h5>
		// 					<p>{ingredients.length}</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default RecipeCard;

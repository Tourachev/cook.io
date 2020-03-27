import React, {Component, useState} from 'react';
import temp from '../../img/img4.jpg';
import StarRatings from 'react-star-ratings';

const RecipeCard = ({recipeContent}) => {
	const {name, cooktime, preptime, difficulty, ingredients} = recipeContent;
	return (
		<div className='card-container'>
			<div className='card-container-left'>
				<img src={temp} alt='' />
			</div>
			<div className='card-container-right'>
				<h2 className='center-text'>{name}</h2>
				{/* <hr /> */}
				<div className='rating-container'>
					{' '}
					<StarRatings
						rating={4.5}
						starRatedColor='gold'
						// changeRating={this.changeRating}
						starDimension='20px'
						starSpacing='1px'
						numberOfStars={5}
						name='rating'
					/>
				</div>

				<div className='recipe-spec-container'>
					<div className='recipe-spec' id='cooktime-container'>
						<div className='recipe-spec-content'>
							<h5 className='center-text'>Cook Time </h5>{' '}
							<p>{cooktime} mins</p>
						</div>
					</div>
					<div className='recipe-spec'>
						<div
							className='recipe-spec-content'
							id='preptime-container'
						>
							<h5 className='center-text'>Prep Time</h5>
							<p>{preptime} mins</p>
						</div>
					</div>
					<div
						className={`recipe-spec ${
							difficulty === 'Easy'
								? 'recipe-difficulty-easy'
								: difficulty === 'Medium'
								? 'recipe-difficulty-medium'
								: 'recipe-difficulty-hard'
						}`}
					>
						<div
							className='recipe-spec-content'
							id='difficulty-container'
						>
							<h5 className='center-text'>Difficulty</h5>
							<p>{difficulty}</p>
						</div>
					</div>
					<div className='recipe-spec'>
						<div
							className='recipe-spec-content'
							id='ingredient-container'
						>
							<h5 className='center-text'>Ingredients</h5>
							<p>{ingredients.length}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;

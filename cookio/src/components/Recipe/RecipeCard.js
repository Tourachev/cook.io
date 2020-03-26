import React, { Component, useState } from 'react';
import temp from '../../img/img4.jpg';

const RecipeCard = ({ recipeContent }) => {
	const [ recipe, setRecipe ] = useState({});

	const { name, cooktime, preptime, difficulty, ingredients } = recipeContent;
	return (
		<div className='card-container'>
			<div className='card-container-left'>
				<img src={temp} alt='' />
			</div>
			<div className='card-container-right'>
				<h2 className='center-text'>{name}</h2>
				<hr />
				<div className='recipe-spec-container'>
					<div className='recipe-spec'>
						<div className='recipe-spec-content'>
							<h5 className='center-text'>Cook Time</h5> <p>{cooktime} mins</p>
						</div>
					</div>
					<div className='recipe-spec'>
						<div className='recipe-spec-content'>
							<h5 className='center-text'>Prep Time</h5>
							<p>{preptime}</p>
						</div>
					</div>
					<div className='recipe-spec'>
						<div className='recipe-spec-content'>
							<h5 className='center-text'>Difficulty</h5>
							<p>{difficulty}</p>
						</div>
					</div>
					<div className='recipe-spec'>
						<div className='recipe-spec-content'>
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

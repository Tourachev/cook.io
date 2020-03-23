import React, { Component, useState } from 'react';
import temp from '../img/img4.jpg';

const RecipeCard = ({ name, cooktime, preptime, difficulty, numIngredients }) => {
	const [ recipe, setRecipe ] = useState({});

	return (
		<div>
			<div className='card-container'>
				<div className='card-container-left'>
					<img src={temp} alt='' />
				</div>
				<div className='card-container-right'>
					<h2 className='center-text'>Baked Salmon</h2>
					<hr />
					<div className='recipe-spec-container'>
						<div className='recipe-spec'>
							<div className='recipe-spec-content'>
								<h5 className='center-text'>Cook Time</h5> <p>20 mins</p>
							</div>
						</div>
						<div className='recipe-spec'>
							<div className='recipe-spec-content'>
								<h5 className='center-text'>Prep Time</h5>
								<p>10 mins</p>
							</div>
						</div>
						<div className='recipe-spec'>
							<div className='recipe-spec-content'>
								<h5 className='center-text'>Difficulty</h5>
								<p>Easy</p>
							</div>
						</div>
						<div className='recipe-spec'>
							<div className='recipe-spec-content'>
								<h5 className='center-text'>Ingredients</h5>
								<p>5</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;

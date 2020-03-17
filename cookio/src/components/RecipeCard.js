import React, {Component, useState} from 'react';
import temp from '../img/img4.jpg';

const RecipeCard = props => {
	const [recipe, setRecipe] = useState({});

	return (
		<div>
			<div className='card-container'>
				<div className='card-container-left'>
					<img src={temp} alt='' />
				</div>
				<div className='card-container-right'>
					<h2 className='center-text'>Baked Salmon</h2>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;

import React, { Fragement, useEffect, useState } from 'react';
import axios from 'axios';
import { MDBInput, MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import RecipeList from '../../components/Recipe/RecipeList';
import RecipeMenu from '../../components/Recipe/RecipeMenu';

const RecipesByMeal = () => {
	return (
		<div>
			<RecipeMenu selected='meal' />
			<div className='by-meal-content-container'>
				<div className='by-meal-img-container' id='breakfast-img' data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-duration="900">
					<h1>Breakfast</h1>
				</div>
				<div className='by-meal-img-container' id='lunch-img' data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-duration="900">
					<h1>Lunch</h1>
				</div>
				<div className='by-meal-img-container' id='dinner-img' data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-duration="900">
					<h1>Dinner</h1>
				</div>
				<div className='by-meal-img-container' id='dessert-img' data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-duration="900">
					<h1>Dessert</h1>
				</div>
			</div>
		</div>
	);
};

export default RecipesByMeal;

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
				<div className='by-meal-img-container' id='breakfast-img'>
					<h1>Breakfast</h1>
				</div>
				<div className='by-meal-img-container' id='lunch-img'>
					<h1>Lunch</h1>
				</div>
				<div className='by-meal-img-container' id='dinner-img'>
					<h1>Dinner</h1>
				</div>
				<div className='by-meal-img-container' id='dessert-img'>
					<h1>Dessert</h1>
				</div>
			</div>
		</div>
	);
};

export default RecipesByMeal;

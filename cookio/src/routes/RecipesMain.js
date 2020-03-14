import React, {Component} from 'react';
import AllRecipes from '../components/AllRecipes';
import {MDBInput, MDBCol} from 'mdbreact';

export class RecipesMain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: null
		};
	}

	render() {
		return (
			<div>
				<div className='recipe-container'>
					<h1 className='display-1'>Recipes</h1>
					<MDBInput
						hint='Search'
						type='text'
						containerClass='active-pink active-pink-2 mt-0 mb-3'
					/>
					<div className='filter-selection-row'>
						<a href=''>Top Recipes</a>
						<a href=''>Random Recipes</a>
						<a href=''>Recipes By Meal</a>
						<a href=''>Recipes By Ingredient</a>
					</div>
					<AllRecipes></AllRecipes>
				</div>
			</div>
		);
	}
}

export default RecipesMain;

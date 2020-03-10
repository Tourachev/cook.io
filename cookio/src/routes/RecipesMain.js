import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import AllRecipes from '../components/AllRecipes';

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
				<Navbar></Navbar>
				<div className='container'>The main recipe page.</div>
				<AllRecipes></AllRecipes>
			</div>
		);
	}
}

export default RecipesMain;

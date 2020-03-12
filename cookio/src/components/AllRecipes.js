import React, {Component} from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard'

export class AllRecipes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: null
		};
	}

	async componentDidMount() {
		const recipes = (await axios.get('http://localhost:8081/')).data;
		this.setState({
			recipes
		});
	}

	render() {
		return (
			<div>
				<div className='recipe-card-container'>
					<RecipeCard/>
					<RecipeCard/>
					<RecipeCard/>
					<RecipeCard/>
				</div>
				
			</div>
		);
	}
}

export default AllRecipes;

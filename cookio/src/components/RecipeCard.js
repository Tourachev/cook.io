import React, {Component} from 'react';
import temp from '../img/img4.jpg'

export class RecipeCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: null
		};
	}


	render() {
		return (
			<div>
				<div className='card-container'>
                    <div className='card-container-left'>
                        <img src={temp} alt=""/>
                    </div>
                    <div className='card-container-right'>
                        <h2 className='center-text'>Baked Salmon</h2>
                        <hr/>
                    </div>
                </div>
			</div>
		);
	}
}

export default RecipeCard;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
	render() {
		return (
			<div>
				<nav>
					<div id='nav-left'>
						<Link to='/index'>
							<a href=''>Home</a>
						</Link>
						<Link to='/login'>
							<a href=''>Login</a>
						</Link>
						<Link to='/signup'>
							<a href=''>Sign-up</a>
						</Link>
						<Link to='/recipes'>
							<a href=''>Recipes</a>
						</Link>
					</div>
					<div id='nav-right'>
						<Link to='/aboutus'>
							<a href=''>About Us</a>
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;

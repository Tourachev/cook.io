import React, {Component} from 'react';

export class Navbar extends Component {
	render() {
		return (
			<div>
				<nav>
                    <div id="nav-left">
                        <a href="">Login</a>
                        <a href="">Sign-up</a>
                        <a href="">Recipes</a>
                    </div>
                    <div id="nav-right">
                        <a href="">About Us</a>
                    </div>
                </nav>
			</div>
		);
	}
}

export default Navbar;

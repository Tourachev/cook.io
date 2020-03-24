import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/img3.jpg';

const Navbar = (props) => {
	if (props.isLoggedIn) {
		return (
			<div>
				<nav className='nav-logged-in'>
					<div id='nav-left'>
						<Link to='/index'>
							<a>Home</a>
						</Link>
						<Link to='/myaccount'>
							<a>My Account</a>
						</Link>
						<Link to='/recipes'>
							<a href=''>Recipes</a>
						</Link>
						<Link to='/aboutus'>
							<a href=''>About Us</a>
						</Link>
					</div>
					<div id='nav-right'>
						<img src={Logo} alt='' />
					</div>
				</nav>
			</div>
		);
	}

	return (
		<div>
			<nav className='nav-not-logged-in'>
				<div id='nav-left'>
					<Link to='/index'>
						<a>Home</a>
					</Link>
					<Link to='/login'>
						<a>Login</a>
					</Link>
					<Link to='/signup'>
						<a>Sign-up</a>
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
};

Navbar.defaultProps = {
	isLoggedIn: true
};

export default Navbar;

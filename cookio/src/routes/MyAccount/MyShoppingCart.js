import React, {useEffect, useState} from 'react';
import DefaultAvatar from '../../img/img5.png';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import empty from '../../img/img13.png';
const MyAccount = props => {
	const [recipe, setRecipe] = useState({recipeID: props.match.params.id});

	return (
		<div>
			<div className='myaccount-container'>
				<div className='myaccount-top-bar'>
					<h1 className='display-4'>My Account</h1>
					<div className='avatar-container'>
						<img
							src={DefaultAvatar}
							alt=''
							id='my-account-avatar'
						/>
					</div>
				</div>

				<hr />
				<div className='myaccount-content-container'>
					<div className='myaccount-sidebar'>
						<Link to='/myaccount/'>
							<button
								type='button'
								className='btn btn-light btn-block'
							>
								<h3>My Dashboard</h3>
							</button>
						</Link>
						<Link to='/myaccount/recipes'>
							<button
								type='button'
								className='btn btn-light btn-block'
							>
								<h3>My Recipes</h3>
							</button>
						</Link>
						<Link to='/myaccount/shoppingcart'>
							<button
								type='button'
								className='btn btn-dark btn-block'
							>
								<h3>My Shopping Cart</h3>
							</button>
						</Link>
						<Link to='/myaccount/favorite'>
							{' '}
							<button
								type='button'
								className='btn btn-light btn-block'
							>
								<h3>My Favourite Recipes</h3>
							</button>
						</Link>
						<Link to='/myaccount/diet'>
							<button
								type='button'
								className='btn btn-light btn-block'
							>
								<h3>My Diet Restrictions</h3>
							</button>
						</Link>
						<hr />
						<h2 className='center-text'>Settings</h2>
						<Link to='/myaccount/changepassword'>
							<button
								type='button'
								className='btn btn-light btn-block'
							>
								<h3>Change Password</h3>
							</button>
						</Link>
						<Link to='/myaccount/changeemail'>
							<button
								type='button'
								className='btn btn-light btn-block'
							>
								<h3>Change Email</h3>
							</button>
						</Link>
					</div>
					<div className='myaccount-content container'>
						<h1 className='display-4 center-text'>
							My Shopping Cart
						</h1>
						<h2 className='currently-empty center-text'>
							Currently empty...
						</h2>
						<img src={empty} alt='' />
						<hr />
						<h1 className='display-4 '>
							{' '}
							Add Recipes To Your Cart{' '}
						</h1>
						<p>
							When you add a recipe to your cart it will display
							all the ingredients needed to purchase on this page!
							Woah!{' '}
						</p>
						<Link to='/recipes'>
							<a href='#' className='go-button'>
								Explore!
							</a>
						</Link>
					</div>{' '}
				</div>
			</div>
		</div>
	);
};

export default MyAccount;

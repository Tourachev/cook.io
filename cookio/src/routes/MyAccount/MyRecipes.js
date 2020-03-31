import React, {useContext, useState, useEffect} from 'react';
import DefaultAvatar from '../../img/img5.png';
import {Link} from 'react-router-dom';
import RecipeContext from '../../context/recipe-context/RecipeContext';
import AuthContext from '../../context/auth-context/AuthContext';
import empty from '../../img/img13.png';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const MyAccount = props => {
	const [loading, setLoading] = useState(false);

	const recipeContext = useContext(RecipeContext);
	const authContext = useContext(AuthContext);

	const {user} = authContext;
	const {recipes, getMyRecipes} = recipeContext;

	useEffect(() => {
		getMyRecipes(user._id);
		console.log(recipes);
	}, []);

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
								className='btn btn-dark btn-block'
							>
								<h3>My Recipes</h3>
							</button>
						</Link>
						<Link to='/myaccount/shoppingcart'>
							<button
								type='button'
								className='btn btn-light btn-block'
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

					<div className='my-recipe-content container'>
						<h1 className='display-4 center-text'>My Recipes</h1>
						{recipes !== [] && !loading ? (
							<div className='my-recipe-card-container'>
								<TableContainer component={Paper}>
									<Table aria-label='simple table'>
										<TableHead>
											<TableRow>
												<TableCell>Name</TableCell>
												<TableCell align='right'></TableCell>
												<TableCell align='right'></TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{recipes.map(recipe => (
												<TableRow key={recipe.name}>
													<TableCell
														component='th'
														scope='row'
													>
														{recipe.name}
													</TableCell>

													<TableCell align='right'>
														Edit
													</TableCell>
													<TableCell align='right'>
														Delete
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</div>
						) : (
							<div>
								<h2 className='currently-empty center-text'>
									Currently empty...
								</h2>
								<img src={empty} alt='' />
								<hr />
								<h1 className='display-4 '>
									{' '}
									Create A New Recipe Now!{' '}
								</h1>
								<p>
									Feel like you know a great recipe? Click the
									button to get started
								</p>
								<Link to='/newrecipe'>
									<a href='#' className='go-button'>
										Let's go!
									</a>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyAccount;

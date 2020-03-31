import React, {useEffect, useContext, useState} from 'react';
import DefaultAvatar from '../../img/img5.png';
import {Link} from 'react-router-dom';
import {Form, Button, Col} from 'react-bootstrap';
import empty from '../../img/img13.png';
import AuthContext from '../../context/auth-context/AuthContext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const MyAccount = props => {
	const [dietRestriction, setDietRestriction] = useState([]);

	const authContext = useContext(AuthContext);
	const {addDietRestrictions, user} = authContext;

	const handleRestrictionSubmit = event => {
		event.preventDefault();
		addDietRestrictions(user._id, dietRestriction);
	};

	const handleChange = event => {
		event.persist();
		setDietRestriction(restriction => ({
			...restriction,
			[event.target.id]: event.target.value
		}));
	};

	useEffect(() => {
		console.log(dietRestriction);
	}, [dietRestriction]);

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
								className='btn btn-dark btn-block'
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
							Dietary Restrictions
						</h1>
						<br />
						{user.dietRestrictions != undefined ? (
							<div>
								<TableContainer>
									<Table aria-label='simple table'>
										<TableHead>
											<TableRow>
												<TableCell>Name</TableCell>
												<TableCell align='right'>
													Delete
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{user.dietRestrictions.map(
												restriction =>
													restriction != null ? (
														<TableRow
															key={restriction}
														>
															<TableCell
																component='th'
																scope='row'
															>
																{restriction}
															</TableCell>
															<TableCell align='right'>
																<DeleteForeverIcon></DeleteForeverIcon>
															</TableCell>
														</TableRow>
													) : (
														console.log()
													)
											)}
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
							</div>
						)}
						<br />
						<h1 className='display-4'>Add New Diet Restriction</h1>
						<Form onSubmit={handleRestrictionSubmit}>
							<Form.Group
								controlId='restriction'
								onChange={handleChange}
							>
								<Form.Label>Add Restriction:</Form.Label>
								<Form.Control as='select' custom>
									<option selected>Vegan</option>
									<option>Vegetarian</option>
									<option>Pescatarian</option>
								</Form.Control>
							</Form.Group>

							<Button variant='primary' type='submit'>
								Add +
							</Button>
						</Form>
						<hr />
						<h1 className='display-4'>Add New Allergy</h1>

						<Form onSubmit={handleRestrictionSubmit}>
							<Form.Group
								controlId='restriction'
								onChange={handleChange}
							>
								<Form.Label>Add Allergy:</Form.Label>
								<Form.Control as='select' custom>
									<option selected>Peanuts</option>
									<option>Gluten</option>
									<option>Shellfish</option>
								</Form.Control>
							</Form.Group>

							<Button variant='primary' type='submit'>
								Add +
							</Button>
						</Form>
					</div>{' '}
				</div>
			</div>
		</div>
	);
};

export default MyAccount;

import React, {useEffect, useContext, useState} from 'react';
import DefaultAvatar from '../../img/img5.png';
import {Link} from 'react-router-dom';
import {Form, Button, Col} from 'react-bootstrap';
import empty from '../../img/img13.png';
import AuthContext from '../../context/auth-context/AuthContext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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
								{user.dietRestrictions.map(restriction =>
									restriction != null ? (
										<div>
											<hr />
											<div className='flex-row-between'>
												<h2>{restriction}</h2>{' '}
												<DeleteForeverIcon></DeleteForeverIcon>
											</div>
										</div>
									) : (
										console.log()
									)
								)}
							</div>
						) : (
							<div>
								<h2 className='currently-empty center-text'>
									Currently empty...
								</h2>
								<img src={empty} alt='' />
							</div>
						)}
						<hr />
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

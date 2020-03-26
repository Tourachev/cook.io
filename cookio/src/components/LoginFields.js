import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const LoginFields = props => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const handleChange = event => {
		event.persist();
		setUser(user => ({
			...user,
			[event.target.id]: event.target.value
		}));
	};

	const handleSubmit = event => {
		event.preventDefault();
	};

	return (
		<div>
			<div id='sign-up-form'>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId='email'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='ramsey@me.com'
							value={user.email}
							onChange={handleChange}
							required
						/>
					</Form.Group>

					<Form.Group controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							value={user.password}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Button variant='outline-dark' type='submit'>
						Log In!
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default LoginFields;

import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const LoginFields = props => {
	const [inputs, setInputs] = useState({
		email: '',
		password: ''
	});

	const handleChange = event => {
		event.persist();
		setInputs(inputs => ({
			...inputs,
			[event.target.id]: event.target.value
		}));
	};

	const handleSubmit = event => {
		event.preventDefault();
		axios
			.post('/api/auth', {email: inputs.email, password: inputs.password})
			.then(res => {
				console.log(res.data);
			});
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
							value={inputs.email}
							onChange={handleChange}
							required
						/>
					</Form.Group>

					<Form.Group controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							value={inputs.password}
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

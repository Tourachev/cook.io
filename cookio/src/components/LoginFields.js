import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const LoginFields = props => {
	const [inputs, setInputs] = useState({
		email: 'email@me.com',
		password: 'Fdsdksopdk'
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

		const credentials = {
			email: inputs.email,
			password: inputs.password
		};

		axios.post('http://localhost:3001/auth', {credentials}).then(res => {
			console.log(res);
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
							placeholder='Enter email'
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
					<Button variant='primary' type='submit'>
						Log In!
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default LoginFields;

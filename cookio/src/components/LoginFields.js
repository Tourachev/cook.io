import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const LoginFields = props => {
	const [email, setEmail] = useState('example@me.com');
	const [password, setPassword] = useState('test');

	const handleChange = event => {
		setEmail({
			[event.target.id]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();

		const credentials = {
			email: email,
			password: password
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
							value={email}
							onChange={handleChange}
							required
						/>
					</Form.Group>

					<Form.Group controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							value={password}
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

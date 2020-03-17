import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const SignUpFields = props => {
	const [inputs, setInputs] = useState({
		email: '',
		username: '',
		password: '',
		confirmPassword: ''
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

		const signUpInfo = {
			email: this.state.email,
			username: this.state.username,
			password: this.state.password
		};

		axios.post('http://localhost:3001/signup', {signUpInfo}).then(res => {
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
							placeholder='ramsey@me.com'
							value={inputs.email}
							onChange={handleChange}
							required
						/>
					</Form.Group>

					<Form.Group controlId='username'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type='text'
							placeholder='Username'
							value={inputs.username}
							onChange={handleChange}
							required
						/>
					</Form.Group>

					<Form.Group controlId='password'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							required
							value={inputs.password}
							onChange={handleChange}
							pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
							title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
						/>
					</Form.Group>

					<Form.Group controlId='confirmPassword'>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Connfirm password'
							required
							value={inputs.confirmPassword}
							onChange={handleChange}
						/>
					</Form.Group>

					<Button variant='outline-dark' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default SignUpFields;

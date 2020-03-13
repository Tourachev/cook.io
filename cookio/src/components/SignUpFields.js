import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class SignUpFields extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'tes',
			username: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = event => {
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

	render() {
		const {email, password, username, confirmPassword} = this.state;
		return (
			<div>
				<div id='sign-up-form'>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId='email'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								value={email}
								onChange={this.handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId='username'>
							<Form.Label>Username</Form.Label>
							<Form.Control
								type='text'
								placeholder='Username'
								value={username}
								onChange={this.handleChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								required
								value={password}
								onChange={this.handleChange}
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
								value={confirmPassword}
								onChange={this.handleChange}
							/>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}

export default SignUpFields;

import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export class LoginFields extends Component {
	constructor(props) {
		super(props);
		this.state = {email: 'test', password: 'ters'};
	}

	componentDidMount() {}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		const credentials = {
			email: this.state.email,
			password: this.state.password
		};

		axios.post('http://localhost:3001/auth', {credentials}).then(res => {
			console.log(res);
			console.log(res.data);
		});
	};

	render() {
		const {email, password} = this.state;
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

						<Form.Group controlId='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								value={password}
								onChange={this.handleChange}
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
	}
}

export default LoginFields;

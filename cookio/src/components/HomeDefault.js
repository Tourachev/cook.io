import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class HomeDefault extends Component {
	render() {
		return (
			<div>
				<div id='sign-up-form'>
					<Form>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								required
							/>
						</Form.Group>

						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								required
								pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
								title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
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

export default HomeDefault;

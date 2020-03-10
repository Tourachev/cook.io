import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Logo from '../img/img3.jpg';
import Semicircle from '../img/img1.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export class LogIn extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>
				<div id='img-cont'>
					<div id='logo-cont'>
                        <img src={Logo} alt=""/>
                        <h3>The last cooking website you will ever visit.</h3>
                        <div id="sign-up-form">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" required/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" required   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Log In!
                                </Button>
                            </Form>
                        </div>
					</div>
					<div id='circle-cont'>
						<img id='semicircle' src={Semicircle} alt="" />
					</div>
				</div>
			</div>
		);
	}
}

export default LogIn;

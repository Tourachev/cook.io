import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Logo from '../img/img3.jpg';
import Semicircle from '../img/img1.png';
import Button from 'react-bootstrap/Button';
import LoginFields from '../components/LoginFields';

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginTriggered: false,
			signUpTriggered: false,
			homeTrigerred: true
		};

		this.triggerLogin = this.triggerLogin.bind(this);
		this.triggerSignUp = this.triggerSignUp.bind(this);
	}

	triggerLogin = loginButtonStatus => {
		this.setState({
			loginTriggered: loginButtonStatus,
			signUpTriggered: false,
			homeTrigerred: false
		});
		console.log(loginButtonStatus);
		console.log('Fired');
	};

	triggerSignUp = signUpButtonStatus => {
		this.setState({
			signUpTriggered: true,
			loginButtonStatus: false,
			homeTrigerred: false
		});
	};

	render() {
		let {loginTriggered} = this.state.loginTriggered;
		let {homeTrigerred} = this.state.homeTrigerred;

		const homeFields = () => {
			if (loginTriggered) {
				return <LoginFields></LoginFields>;
			}
			if (homeTrigerred) {
				return <Button variant='outline-dark'>Learn More!</Button>;
			}
		};

		return (
			<div>
				<Navbar triggerLogin={this.triggerLogin}></Navbar>
				<div id='img-cont'>
					<div id='logo-cont'>
						<img src={Logo} alt='' />
						<h3>The last cooking website you will ever visit.</h3>
						{homeFields()}
					</div>
					<div id='circle-cont'>
						<img id='semicircle' src={Semicircle} alt='' />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

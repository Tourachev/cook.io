import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Logo from '../img/img3.jpg';
import Semicircle from '../img/img1.png';
import LoginFields from '../components/LoginFields';
import axios from 'axios';

export class LogIn extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div id='img-cont'>
					<div id='logo-cont'>
						<img src={Logo} alt='' />
						<h3>The last cooking website you will ever visit.</h3>
						<LoginFields />
					</div>
					<div id='circle-cont'>
						<img id='semicircle' src={Semicircle} alt='' />
					</div>
				</div>
			</div>
		);
	}
}

export default LogIn;

import React, {Component} from 'react';
import Logo from '../img/img3.jpg';
import Semicircle from '../img/img1.png';
import SignUpFields from '../components/SignUpFields';

export class SignUp extends Component {
	render() {
		return (
			<div>
				<div id='img-cont'>
					<div id='logo-cont'>
						<img src={Logo} alt='' />
						<h3>The last cooking website you will ever visit.</h3>
						<SignUpFields />
					</div>
					<div id='circle-cont'>
						<img id='semicircle' src={Semicircle} alt='' />
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;

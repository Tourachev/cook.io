import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import Logo from '../img/img3.jpg';
import Semicircle from '../img/img1.png';


export class AboutUs extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>
                <div id='about-us-container'>
                    <img src={Logo} alt=""/>
                    <h3>The last cooking website you will ever visit.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque commodi nisi iure adipisci, nam 
                tenetur rerum recusandae mollitia corrupti, unde nihil pariatur perspiciatis cum at quae provident ratione laudantium temporibus.</p>
                </div>
			</div>
		);
	}
}

export default AboutUs;

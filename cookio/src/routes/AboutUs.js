import React, {Component} from 'react';
import Logo from '../img/img3.jpg';
import AboutUsImg from '../img/img4.jpg';

export class AboutUs extends Component {
	render() {
		return (
			<div>
				<div id='about-us-container'>
					<img src={Logo} alt='' />
					<h3>The last cooking website you will ever visit.</h3>
					<br />
					<div className='container'>
						<p>
							Cook.io was initially developed as a UI/UX project
							for a Human Computer Interaction Class. However I
							decided to make it something bigger than just a
							visual prototype. It is currently being developed
							using React, MariaDB, NodeJS and ExpressJS. At the
							end of production it will carry full functionality
							that was initially outlined by the project, and
							hopefully become a resource for some people. For
							educational purposes during development the database
							server is deployed over a Raspberry Pi and in the
							future the whole application will be moved to Docker
							and Kubernetes.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutUs;

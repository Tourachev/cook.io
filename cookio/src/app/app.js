import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Context from '../components/Context';

// import css
import '../css/index.css';

// import components below

// Provider established for future use of context
class Provider extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		username: '',
		isLoggedIn: false,
		login: () => {
			this.setState({isLoggedIn: true});
		},
		logout: () => {
			this.setState({isLoggedIn: false, usernmae: ''});
		},
		setUsername: name => {
			this.setState({username: name});
		}
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

function App() {
	return (
		<div>
			<h1>Huzzah</h1>
		</div>
	);
}

export default App;

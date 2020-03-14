import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Context from '../components/Context';
import Navbar from '../components/Navbar';

// import css
import '../css/index.css';

// import components below

// import views below
import Home from '../routes/HomePage';
import NotFound from '../routes/NotFound';
import AboutUs from '../routes/AboutUs';
import SignUp from '../routes/SignUp';
import LogIn from '../routes/LogIn';
import RecipesMain from '../routes/RecipesMain';
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
		<Provider>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/index' component={Home} />
					<Route path='/aboutus' component={AboutUs} />
					<Route path='/login' component={LogIn} />
					<Route path='/signup' component={SignUp} />
					<Route path='/recipes' component={RecipesMain} />
					<Route path='/*' component={NotFound} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;

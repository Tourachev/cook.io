import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
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
import RecipeDetail from '../routes/RecipeDetail';
import RecipesByMeal from '../routes/RecipesByMeal';
import RecipesByIngredient from '../routes/RecipesByIngredient';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/index' component={Home} />
				<Route path='/aboutus' component={AboutUs} />
				<Route path='/login' component={LogIn} />
				<Route path='/signup' component={SignUp} />
				<Route path='/recipes' component={RecipesMain} />
				<Route path='/recipe/:id' component={RecipeDetail} />
				<Route path='/bymeal' component={RecipesByMeal} />
				<Route path='/byingredient' component={RecipesByIngredient} />
				<Route path='/*' component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;

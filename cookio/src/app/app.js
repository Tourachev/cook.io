import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

// import context
// import UserContext from '../context/user-context/UserContext';
// import RecipeContext from '../context/recipe-context/RecipeContext';

import RecipeState from '../context/recipe-context/RecipeState';

// import css
import '../css/index.css';

// import components below

// import views below
import Home from '../routes/HomePage';
import NotFound from '../routes/NotFound';
import AboutUs from '../routes/About';
import SignUp from '../routes/SignUp';
import LogIn from '../routes/LogIn';
import RecipesMain from '../routes/RecipesMain';
import RecipeDetail from '../routes/RecipeDetail';
import RecipesByMeal from '../routes/RecipesByMeal';
import RecipesByIngredient from '../routes/RecipesByIngredient';

function App() {
	return (
		<RecipeState>
			<Router>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/index' component={Home} />
						<Route exact path='/aboutus' component={AboutUs} />
						<Route exact path='/login' component={LogIn} />
						<Route exact path='/signup' component={SignUp} />
						<Route exact path='/recipes' component={RecipesMain} />
						<Route exact path='/recipe/:id' component={RecipeDetail} />
						<Route exact path='/bymeal' component={RecipesByMeal} />
						<Route path='/byingredient' component={RecipesByIngredient} />
						<Route path='/*' component={NotFound} />
					</Switch>
				</Fragment>
			</Router>
		</RecipeState>
	);
}

export default App;

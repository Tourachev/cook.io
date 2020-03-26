import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PrivateRoute from '../components/routing/PrivateRoute';

import RecipeState from '../context/recipe-context/RecipeState';
import AuthState from '../context/auth-context/AuthState';
import setAuthToken from '../utils/setAuthTokens';
// import css
import '../css/index.css';

// import components below

// import views below
import Home from '../routes/HomePage';
import NotFound from '../routes/NotFound';
import AboutUs from '../routes/About';
import SignUp from '../routes/SignUp';
import LogIn from '../routes/LogIn';
import RecipesMain from '../routes/Recipes/RecipesMain';
import RecipeDetail from '../routes/Recipes/RecipeDetail';
import RecipesByMeal from '../routes/Recipes/RecipesByMeal';
import RecipesByIngredient from '../routes/Recipes/RecipesByIngredient';
import MyAccount from '../routes/MyAccount/MyAccountHome';
import MyRecipes from '../routes/MyAccount/MyRecipes';
import MyCart from '../routes/MyAccount/MyShoppingCart';
import MyFavorite from '../routes/MyAccount/MyFavouriteRecipes';
import MyDiet from '../routes/MyAccount/MyDietRestrictions';
import ChangeEmail from '../routes/MyAccount/ChangeEmail';
import ChangePassword from '../routes/MyAccount/ChangePassword';
import CreateRecipe from '../routes/Recipes/CreateRecipe';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	return (
		<AuthState>
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
							<PrivateRoute path='/newrecipe' component={CreateRecipe} />
							<Route exact path='/bymeal' component={RecipesByMeal} />
							<Route exact path='/byingredient' component={RecipesByIngredient} />
							<PrivateRoute exact path='/myaccount/' component={MyAccount} />
							<PrivateRoute exact path='/myaccount/recipes' component={MyRecipes} />
							<PrivateRoute exact path='/myaccount/shoppingcart' component={MyCart} />
							<PrivateRoute exact path='/myaccount/favorite' component={MyFavorite} />
							<PrivateRoute exact path='/myaccount/diet' component={MyDiet} />
							<PrivateRoute exact path='/myaccount/changeemail' component={ChangeEmail} />
							<PrivateRoute exact path='/myaccount/changepassword' component={ChangePassword} />
							<Route exact path='/*' component={NotFound} />
						</Switch>
					</Fragment>
				</Router>
			</RecipeState>
		</AuthState>
	);
}

export default App;

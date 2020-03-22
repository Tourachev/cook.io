var express = require('express');
var router = express.Router();

const Recipe = require('../models/Recipe');
const User = require('../models/User')
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth')



// @route GET api/recipe
// Get all recipes
// Public

router.get('/', async (req, res, next) => {
	try {
		const recipes = await Recipe.find()
		res.json(recipes)
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error')
	}
});

// @route GET api/recipe
// Get a recipe
// Public

router.get('/:id', async (req, res, next) => {
	try {
		const recipes = await Recipe.find({id: req.params.id})
		res.json(recipes)
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error')
	}
});

// @route POST api/recpipe
// Create a recipe
// Private

// @ts-ignore
router.post('/', [auth, [check('name', 'Name is required').not().isEmpty(), check('ingredients', 'ingredients is required').not().isEmpty(), check('cooktime', 'cooktime is required').not().isEmpty(), check('preptime', 'preptime is required').not().isEmpty(), check('difficulty', 'difficulty is required').not().isEmpty()]], async (req, res, next) => {
	
	const errors = validationResult(req);
	
	// Return the errors if invalid format. 
	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array()})
	}

	const {name, ingredients,cooktime,preptime,difficulty,id} = req.body


	try {
		const newRecipe = new Recipe({
			name, ingredients,cooktime,preptime,difficulty, author: req.user.id, id
		});

		const recipe = await newRecipe.save();
		res.json(recipe)

	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error')
	}
});

// @route DELETE api/recipe
// Delete a Recipe
// Private

router.delete('/', (req, res, next) => {
	res.send('Delete a recipe');
});
// @route PUT api/recipe/:id
// Update a Recipe
// Private

router.put('/:id', (req, res, next) => {
	res.send('Update a recipe');
});

module.exports = router;

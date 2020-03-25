var express = require('express');
var router = express.Router();

const Recipe = require('../models/Recipe');
const User = require('../models/User');
const {check, validationResult} = require('express-validator');
const auth = require('../middleware/auth');

// @route GET api/recipe
// Get all recipes
// Public

router.get('/', async (req, res, next) => {
	try {
		const recipes = await Recipe.find();
		res.json(recipes);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route GET api/recipe
// Get a recipe
// Public

router.get('/:id', async (req, res, next) => {
	try {
		const recipes = await Recipe.findById(req.params.id);
		res.json(recipes);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route POST api/recpipe
// Create a recipe
// Private

// @ts-ignore
router.post(
	'/',
	[
		[
			check('name', 'Name is required')
				.not()
				.isEmpty(),
			check('ingredients', 'ingredients is required')
				.not()
				.isEmpty(),
			check('cooktime', 'cooktime is required')
				.not()
				.isEmpty(),
			check('preptime', 'preptime is required')
				.not()
				.isEmpty(),
			check('difficulty', 'difficulty is required')
				.not()
				.isEmpty()
		]
	],
	async (req, res, next) => {
		const errors = validationResult(req);
		console.log(req.body);
		console.log(errors);
		// Return the errors if invalid format.
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}
		console.log(req.body);
		const {
			name,
			ingredients,
			cooktime,
			preptime,
			difficulty,
			instructions
		} = req.body;

		try {
			const newRecipe = new Recipe({
				name,
				ingredients,
				cooktime,
				preptime,
				difficulty,
				instructions
			});

			const recipe = await newRecipe.save();
			res.json(recipe);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route DELETE api/recipe
// Delete a Recipe
// Private

router.delete('/:id', auth, async (req, res, next) => {
	try {
		let recipe = await Recipe.findById(req.params.id);
		if (!recipe) return res.status(404).json({msg: 'Contact not found'});

		// Make sure user owns recipe
		if (recipe.author.toString() !== req.user.id) {
			return res.status(401).json({msg: 'Unauthorized'});
		}

		recipe = await Recipe.findByIdAndRemove(req.params.id);

		res.json({msg: 'Contact Removed'});
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route PUT api/recipe/:id
// Update a Recipe
// Private
// @ts-ignore
router.put(
	'/:id',
	[
		auth,
		[
			check('name', 'Name is required')
				.not()
				.isEmpty(),
			check('ingredients', 'ingredients is required')
				.not()
				.isEmpty(),
			check('cooktime', 'cooktime is required')
				.not()
				.isEmpty(),
			check('preptime', 'preptime is required')
				.not()
				.isEmpty(),
			check('difficulty', 'difficulty is required')
				.not()
				.isEmpty()
		]
	],
	async (req, res, next) => {
		const errors = validationResult(req);

		// Return the errors if invalid format.
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}

		const {name, ingredients, cooktime, preptime, difficulty} = req.body;

		const recipeFields = {};
		if (name) recipeFields.name = name;
		if (ingredients) recipeFields.ingredients = ingredients;
		if (cooktime) recipeFields.cooktime = cooktime;
		if (preptime) recipeFields.preptime = preptime;
		if (difficulty) recipeFields.difficulty = difficulty;

		try {
			let recipe = await Recipe.findById(req.params.id);
			if (!recipe)
				return res.status(404).json({msg: 'Contact not found'});

			// Make sure user owns recipe
			if (recipe.author.toString() !== req.user.id) {
				return res.status(401).json({msg: 'Unauthorized'});
			}

			recipe = await Recipe.findByIdAndUpdate(
				req.params.id,
				{$set: recipeFields},
				{new: true}
			);

			res.json(recipe);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;

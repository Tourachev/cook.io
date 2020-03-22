var express = require('express');
var router = express.Router();

const Recipe = require('../models/Recipe');

// @route POST api/recpipe
// Create a recipe
// Private

router.post('/', (req, res, next) => {
	res.send('Create a recipe');
});

// @route GET api/recipe
// Get a recipe
// Public

router.get('/:id', (req, res, next) => {
	res.send('get a recipe');
});
// @route DELETE api/recipe
// Delete a Recipe
// Public

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

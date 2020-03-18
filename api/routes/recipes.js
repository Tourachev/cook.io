var express = require('express');
var router = express.Router();


// @route POST api/recpipe
// Create a recipe
// Private

router.post('/', (req, res, next) => {
	res.send("Create a recipe")

});

// @route GET api/recipe
// Get a recipe
// Public

router.post('/:id', (req, res, next) => {
	res.send("Create a recpipe")

});
// @route DELETE api/recipe
// Delete a Recipe
// Public

router.delete('/', (req, res, next) => {
	res.send("Delete a recpipe")

});
// @route PUT api/recipe/:id
// Update a Recipe
// Private

router.put('/:id', (req, res, next) => {
	res.send("Update a recpipe")

});

module.exports = router;

var express = require('express');
var router = express.Router();
var userTranscactions = require('../transactions/user-transactions');

router.get('/recipes', (req, res, next) => {
	res.json({
		message: 'Recipes Fired'
	});
});

module.exports = router;

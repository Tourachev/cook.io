var express = require('express');
var router = express.Router();
var userTranscactions = require('../transactions/user-transactions');

router.get('/all', (req, res, next) => {
	res.json({
		message: 'All Recipes Fired'
	});
});

router.post('/', (req, res, next) => {
	console.log(req.body);
	res.json({
		message: 'One Recipe Fired'
	});
});

module.exports = router;

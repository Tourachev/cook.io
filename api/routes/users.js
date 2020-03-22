const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

// @route POST api/users
// Create a user
// Public

router.post('/',[check('email', 'please include a valid email').isEmail(), check('username', 'username is required').not().isEmpty(), check('password', 'Please enter a password with 6 or more characters'). isLength({min:6})], (req, res, next) => {
	const errors = validationResult(req);

	if(!errors.isEmpty()){
		return res.status(400).json({errors: errors.array()})
	}

	res.send(req.body);
});

module.exports = router;

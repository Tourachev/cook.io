const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
// @route POST api/auth
// Auth User
// Public

router.post(
	'/',
	[
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Passwor is required.').exists()
	],
	async (req, res, next) => {
		const errors = validationResult(req);

		// Return the errors if invalid format.
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}

		// Extract the actual data from the body
		const {email, password} = req.body;

		try {
			let user = await User.findOne({email});

			if (!user) {
				return res.status(400).json({msg: 'Invalid Credentials'});
			}

			const matched = await bcrypt.compare(password, user.password);

			if (!matched) {
				return res.status(400).json({msg: 'Invalid Credentials'});
			}

			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					expiresIn: 360000
				},
				(err, token) => {
					if (err) throw err;
					res.json({token});
				}
			);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route GET api/auth
// Get logged in user
// Public

router.get('/', auth, async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		res.json(user);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;

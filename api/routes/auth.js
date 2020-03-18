var express = require('express');
var router = express.Router();


// @route GET api/auth
// Get user logged in
// Private

router.get('/', (req, res, next) => {
	res.send("Get logged in user")

});

// @route POST api/auth
// Auth user and get token
// Public

router.post('/', (req, res, next) => {
	res.send("Login user")


});




module.exports = router;



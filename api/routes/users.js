var express = require('express');
var router = express.Router();

// @route POST api/users
// Create a user
// Public

router.post('/', (req, res, next) => {
	res.send("Create a user")

});




module.exports = router;


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	dietRestrictions: {
		type: [String]
	},
	shoppingCart: {
		type: [{name: String, quantity: String}]
	},
	favoriteRecipes: {
		type: [String]
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('users', UserSchema);

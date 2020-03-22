const mongoose = require('mongoose');


const RecipeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	ingredients: {
		type: [ {name: String, quantity: String} ],
		required: true
	},
	cooktime: {
		type: Number,
		required: true
	},
	preptime: {
		type: Number,
		required: true
	},
	difficulty: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		default: 0
	},
	comments: {
		type: [ {author: String, comment: String} ]
	},
	author: {
		type: String
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	}
});

module.exports = mongoose.model('recipe', RecipeSchema);

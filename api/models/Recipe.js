const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	ingredients: {
		type: [ String ],
		required: true
	},
	cooktime: {
		type: Number,
		required: true
	},
	difficulty: {
		type: String,
		required: true
	},
	rating: {
		type: Number
	},
	comments: {
		type: [ String ]
	}
});

module.exports = mongoose.model('recipe', RecipeSchema);

const uniqid = require("uniqid");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	blogid: {
		type: String,
		default: uniqid(),
		unique: true,
	},
	author: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	relatedlinks: 
		{ 
			title: { type: String },
			id: { type: String },
		},
,
	image: {
		type: Buffer,
		contentType: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

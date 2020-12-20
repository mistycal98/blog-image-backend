const uniqid = require("uniqid");
const mongoose = require("mongoose");
const { text } = require("express");

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
	links: {
		type: [
			{
				_id: false,
				title: { type: String, required: true },
				id: { type: String, default: uniqid() },
			},
		],
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

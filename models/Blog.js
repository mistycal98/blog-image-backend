const uniqid = require("uniqid");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
	{
		blogid: {
			type: String,
			default: uniqid(),
			unique: true,
		},
		header: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

const uniqid = require("uniqid");
const fs = require("fs");
const path = require("path");

const AppError = require("../helpers/appError");
const sendErrorMessage = require("../helpers/sendErrorResponse");
const sendResponse = require("../helpers/sendResponse");
const Blog = require("../models/Blog");

// GET all blogs
const getAllBlogs = async (req, res) => {
	try {
		let data = await Blog.find().select("blogid author title content relatedlinks imageUrl");
		let result = {
			count: data.length,
			data: data,
		};
		sendResponse(200, "Sucessfull", result, req, res);
	} catch (error) {
		sendErrorMessage(new AppError(400, "Unsuccessful", "Invalid Request"), req, res);
	}
};

// GET all blogs by id
const getBlogById = async (req, res) => {
	try {
		let data = await Blog.find({ blogid: req.params.blogid });
		sendResponse(200, "Sucessfull", data, req, res);
	} catch (error) {
		sendErrorMessage(new AppError(400, "Unsuccessful", "Invalid Request"), req, res);
	}
};

// POST create a blog
const createBlog = async (req, res) => {
	try {
		const data = new Blog({
			blogid: uniqid(),
			author: req.body.author,
			title: req.body.title,
			content: req.body.content,
			relatedlinks: req.body.relatedlinks,
			imageUrl: `http://localhost:${process.env.PORT}/image/${req.file.filename}`,
		});
		let newBlog = await data.save();
		sendResponse(200, "SucessFull", newBlog, req, res);
	} catch (error) {
		console.log(error);
		sendErrorMessage(new AppError(400, "Unsucessfull", error), req, res);
	}
};



//DELETE delete a blog
const deleteBlog = async (req, res) => {
	try {
		const data = await Blog.deleteOne({ _id: req.params.blogid });
		sendResponse(200, "SucessFull", data, req, res);
	} catch (error) {
		console.log(error);
		sendErrorMessage(new AppError(400, "Unsucessfull", "Invalid Data"), req, res);
	}
};

//
const deleteAllBlogs = async (req, res) => {
	try {
		let data = await Blog.deleteMany();
		sendResponse(200, "SucessFull", data, req, res);
	} catch (error) {
		sendErrorMessage(new AppError(400, "Unsucessfull", "Invalid Data"), req, res);
	}
};
module.exports = {
	getAllBlogs,
	getBlogById,
	createBlog,
	deleteBlog,
	deleteAllBlogs,
};

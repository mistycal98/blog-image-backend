const express = require("express");
const {
	getAllBlogs,
	createBlog,
	getBlogById,
	updateBlog,
	deleteBlog,
	deleteAllBlogs,
} = require("../controllers/blogControllers");
const upload = require("../middlewares/multerUploads");
const blogRouter = express.Router();

blogRouter.route("/").get(getAllBlogs).post(upload.single("image"), createBlog).delete(deleteAllBlogs);
blogRouter.route("/:blogid").get(getBlogById).patch(updateBlog).delete(deleteBlog);

module.exports = blogRouter;

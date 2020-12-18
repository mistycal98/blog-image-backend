const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const blogRouter = require("./routes/blogRoutes");
const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());

app.use('/image',express.static('blog-images/images'));
app.get("/", (req, res) => {
	res.send("<h1>Home Page</h1>");
});

app.use("/blogs", blogRouter);

app.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
});

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
	() => {
		console.log("Connected to DB!");
	}
);

app.listen(process.env.PORT, () => {
	console.log(`Listening on http://localhost:${process.env.PORT}`);
});

const multer = require("multer");
const path = require("path");

//Multer Storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, ".." , "images"));
	},
	filename: (req, file, next) => {
		next(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
	},
});

// Multer
const upload = multer({
	storage: storage,
})

module.exports = upload;

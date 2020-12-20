# Blog-Image-Backend
This API is for basic blog creation developed with Node.js MongoDB Express and Mongoose and Multer for handling image uploads

# Folder Structure 

```
.
├── app.js
├── blog-images
│   └── images   //this is where images from multerMiddleware saved
├── controllers
│   └── blogControllers.js
├── helpers
│   ├── appError.js
│   ├── sendErrorResponse.js
│   └── sendResponse.js
├── middlewares
│   └── multerUploads.js
├── models
│   └── Blog.js
├── package.json
├── README.md
└── routes
    └── blogRoutes.js
```

# Endpoints

- /blogs <br>
GET - **Fetches all** the blogs from the storage
<br>

POST - This **Creates** a blog

```
{
    "author" : "Author Name",
    "title" : "Your title for the blogs",
    "content" : "Your content for the blog",
    "links" : [
                {
                    "title" : "Your title for related links",
                }
              ],
    /* for imageUrl the type will be a file and imageUrl stores a String which containts location of the image */

    "imageUrl" : "The image for the banner page",   
}  
``` 
 The images are saved in *projectfolder/blog-images/images/* 

DELETE - **Deletes all** the blogs you create
<br>

- /blogs/:blogid <br>

GET - Get a blog by a specific id

DELETE - Delete a blog by a specific id

# Pre-requisite

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) - Node Package Manager

# Running the project on localhost
Clone Repository

```
$ git clone https://github.com/mistycal98/blog-image-backend.git
```
<br>

Download all packages and dependencies
```
$ npm install 
```
Configure **config.env** enviroment file

```
/* create a file config.env in the root folder
include variables */

PORT = '<on which port you want to start your server/>'
DB_CONNECTION = '<your mongoDB server base-url running on your local machine or cloud Atlas/>'

```
Run project on your local Machine
```
$ npm start
```

# Try it out with Postman

[Blog-backend-Image](https://www.getpostman.com/collections/b7298d6a1370471cfadf)
 
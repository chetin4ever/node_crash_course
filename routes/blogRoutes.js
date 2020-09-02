const Blog = require("../models/blogs");
const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/", blogController.blog_index);
// post request for getting data from blog-form and saving to database
router.post("/", blogController.blog_create_post);

//create blog
router.get("/create", blogController.blog_create_get);
//blog details
router.get("/:id", blogController.blog_details);
//delete post
router.delete("/:id", blogController.blog_delete);
module.exports = router;

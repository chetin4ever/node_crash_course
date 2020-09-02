const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blog = require("./models/blogs");
const Blog = require("./models/blogs");

// app
const app = express();
//connect to mongoDb

const dbURI =
  "mongodb+srv://chetin4ever:chetan@123@nodetuts.fzzyy.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log());
// register view engine
app.set("view engine", "ejs");
//listing for request
//app.listen(3000);

//middleware & static file
app.use(express.static("public"));
app.use(morgan("dev"));
//mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "more about my new blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/single-blog", (req, res) => {
  Blog.findById("5f3bf5340955a02551106915")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//home page
app.get("/", (req, res) => {
  // res.send("<p>home page</p>");
  //res.sendFile("./views/index.html", { root: __dirname });
  blogs = [
    {
      title: "youshi find the eggs",
      snippet: "  Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      title: "mario find star",
      snippet: "  Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      title: "how to defeat bowswer",
      snippet: "  Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      title: "youshi find the eggs",
      snippet: "  Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      title: "youshi find the eggs",
      snippet: "  Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];
  res.render("index", { title: "Home", blogs });
});
//create blog
app.get("/blogs/create", (req, res) => {
  res.render("createBlog", { title: "Create-Blog" });
});
blogs;
// about page
app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//redirect url
app.get("/about-us", (req, res) => {
  res.redirect("./about");
});

//404 page
app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

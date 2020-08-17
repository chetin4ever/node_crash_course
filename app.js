const express = require("express");

// app
const app = express();

//listing for request
app.listen(3000);
// register view engine
app.set("view engine", "ejs");
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

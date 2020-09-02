const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// app
const app = express();

//connect to mongoDb

// const dbURI =
//   "mongodb+srv://chetin4ever:chetin@1988@nodetuts.fzzyy.mongodb.net/node-tuts?retryWrites=true&w=majority";
const dbURI =
  "mongodb+srv://chetan:chetan@123@node-tuts.hka47.mongodb.net/node-tuts?retryWrites=true&w=majority";
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
app.use(express.urlencoded({ extended: true }));

//home page
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// blog route
app.use("/blogs", blogRoutes);
// about page
app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//redirect url
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page
app.use((req, res) => {
  //res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

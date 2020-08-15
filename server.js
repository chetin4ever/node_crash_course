const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((req, res) => {
  //lodash
  num = _.random(0, 20);
  console.log(num);

  //console.log(req.url);
  //console.log(req.method);
  //console.log(res);
  // set header content type
  //res.setHeader("Content-Type", "text/palin");
  res.setHeader("Content-Type", "text/html");

  //write data
  //res.write("hello world");
  //   res.write("<h1>hello world</h1>");
  //   res.write("<h1>hello world again</h1>");

  //   //end of setheader
  //   res.end();
  path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listing for request on port 3000");
});

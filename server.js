const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request mode");
});
server.listen(3000, "localhost", (req, resp) => {
  console.log("listing for request on port 3000");
  log(res);
});

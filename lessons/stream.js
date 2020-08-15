const fs = require("fs");
// const readStream = fs.createReadStream("./docs/blog3.txt");
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf-8",
});
const wiriteStream = fs.createWriteStream("./docs/blog5.txt");

// readStream.on("data", (chunk) => {
//   console.log("------------------new chunk-----------------------");
//   //   console.log(chunk.toString());
//   console.log(chunk.toString());
//   wiriteStream.write("\n-----------New Chunks------------\n");
//   wiriteStream.write(chunk);
// });

readStream.pipe(wiriteStream);

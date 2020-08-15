const fs = require("fs");

//reading files

fs.readFile("./docs/blogs1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data); // give buffer
  console.log(data.toString());
});
//writing files
fs.writeFile("./docs/blogs1.txt", "hello world", () => {
  console.log("file was writeen");
});
//if file not exits it create file
fs.writeFile("./docs/blogs2.txt", "hello world", () => {
  console.log("file was writeen");
});

//directores

//fs.mkdir('PATH',(ERROR)=>{c.log(ERROR)})
if (!fs.existsSync("./assets")) {
  //syncronous
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder craeted");
  });
} else {
  //delting directores
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log("folder was deleted");
}

//delete file
if (fs.existsSync("./docs/deleteMe.txt")) {
  fs.unlink("./docs/deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
} else {
  fs.writeFile("./docs/deleteMe.txt", "", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file created");
  });
}

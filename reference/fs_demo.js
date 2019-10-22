const fs = require("fs");
const path = require("path");

// Create folder
//fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//  if (err) throw err;
//  console.log("Folder created");
//});

// Create and write file
/* fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  err => {
    if (err) throw err;
    console.log("File written");

    //append file
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "I love react!",
      err => {
        if (err) throw err;
        console.log("File written");
      }
    );
  }
); */

//read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

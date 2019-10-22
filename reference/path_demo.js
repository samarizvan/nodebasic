const path = require("path");

//Basename
console.log(path.basename(__filename));

//dir name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

//create path
console.log(path.parse(__filename));

//join
console.log(path.join(__dirname, "test", "hello.html"));

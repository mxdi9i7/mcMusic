var math = require("./math.js");

var command = process.argv[2];
var a = Number(process.argv[3]);
var b = Number(process.argv[4]);

var value = math[command](a, b);

console.log("The result of " + a + " " + command + " " + b + " is " + value);
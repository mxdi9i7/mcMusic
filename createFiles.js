exports.a = function() {
	var fs = require("fs");
	fs.writeFileSync("yolo.txt", "Hello man");
	var m = fs.readFileSync("yolo.txt", "utf-8");
	console.log(m);

}

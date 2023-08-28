var fs = require("fs");
var path = require("path");

var inlineFile = function (relativePath) {
  var fullPath = path.join(__dirname, relativePath);
  return fs.readFileSync(fullPath, "utf-8");
};

module.exports = {
  css: [
    inlineFile("../assets/styles/bootstrap.min.css"),
    inlineFile("../assets/styles/global.css"),
    inlineFile("../assets/styles/profile.css"),
    inlineFile("../assets/styles/style.css"),
  ].join("\n"),
  javascript: inlineFile("../assets/scripts/main.js"),
};

var fs = require("fs");
var path = require("path");
var Handlebars = require("handlebars");

var helpers = require("./helpers");

var inlineFile = function (relativePath) {
  var fullPath = path.join(__dirname, relativePath);
  return fs.readFileSync(fullPath, "utf-8");
};

Handlebars.registerPartial({
  css: [
    inlineFile("./assets/bootstrap.min.css"),
    inlineFile("./assets/global.css"),
    inlineFile("./assets/profile.css"),
    inlineFile("./assets/style.css"),
  ].join("\n"),
  javascript: inlineFile("./assets/main.js"),
});

Handlebars.registerHelper(helpers);

module.exports = {
  render: function (resume) {
    var template = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");

    return Handlebars.compile(template)({
      resume: resume,
    });
  },
};

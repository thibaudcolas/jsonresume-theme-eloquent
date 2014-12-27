var fs = require('fs');
var Handlebars = require('handlebars');

var render = function(resume) {
  var css = fs.readFileSync(__dirname + '/style.css', 'utf-8');
  var template = fs.readFileSync(__dirname + '/resume.template', 'utf-8');


  return Handlebars.compile(template)({
    css: css,
    resume: resume
  });
};

Handlebars.registerHelper('nl2br', function(value) {
    value = (value || '').replace(/\n/g, '<br>');
    return new Handlebars.SafeString(value);
});

module.exports = {
  render: render
};

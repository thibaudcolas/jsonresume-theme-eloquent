var fs = require('fs');
var Handlebars = require('handlebars');
var moment = require('moment');

var render = function(resume) {
  var css = fs.readFileSync(__dirname + '/style.css', 'utf-8');
  var template = fs.readFileSync(__dirname + '/resume.template', 'utf-8');


  return Handlebars.compile(template)({
    css: css,
    resume: resume
  });
};

Handlebars.registerHelper('nl2br', function(value) {
    value = value || '';
    var html = (value).replace(/\n/g, '<br>');
    return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('formatMMMMYYYY', function(value) {
    value = value || '';
    var html = moment(new Date((value))).format('MMMM YYYY');
    return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('formatDDMMYYYY', function(value) {
    value = value || '';
    var html = moment(new Date((value))).format('DD/MM/YYYY');
    return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('sanitizePhone', function(value) {
    value = value || '';
    var html = (value).replace(/[-\s]/g, '');
    return new Handlebars.SafeString(html);
});

module.exports = {
  render: render
};

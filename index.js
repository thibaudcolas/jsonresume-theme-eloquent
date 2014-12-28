var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');
var moment = require('moment');

var render = function(resume) {
  var template = fs.readFileSync(__dirname + '/resume.template', 'utf-8');

  // TODO: Inline helper

  return Handlebars.compile(template)({
    resume: resume
  });
};

Handlebars.registerPartial({
  webfonts: fs.readFileSync(path.join(__dirname, '/assets/styles/webfonts.css'), 'utf-8'),
  style: fs.readFileSync(path.join(__dirname, '/assets/styles/style.css'), 'utf-8')
});

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

Handlebars.registerHelper('formatMMMDDYYYY', function(value) {
  value = value || '';
  var html = moment(new Date((value))).format('MMM DD, YYYY');
  return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('sanitizePhone', function(value) {
  value = value || '';
  var html = (value).replace(/[-\s]/g, '');
  return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('sanitizeURL', function(value) {
  value = value || '';
  var html = (value).replace(/http?s:\/\//g, '');
  return new Handlebars.SafeString(html);
});

module.exports = {
  render: render
};

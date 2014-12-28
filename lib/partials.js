var fs = require('fs');
var path = require('path');
var csso = require('csso');

var inlineCSS = function(source) {
  var css = fs.readFileSync(path.join(__dirname, source), 'utf-8');
  return csso.justDoIt(css, true);
};

module.exports = {
  webfonts: inlineCSS('../assets/styles/webfonts.css'),
  style: inlineCSS('../assets/styles/style.css')
};

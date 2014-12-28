var fs = require('fs');
var path = require('path');
var csso = require('csso');
var UglifyJS = require('uglify-js');

var inlineCSS = function(cssPath) {
  var css = fs.readFileSync(path.join(__dirname, cssPath), 'utf-8');
  return csso.justDoIt(css, true);
};

var inlineJS = function(jsPath) {
  var result = UglifyJS.minify(path.join(__dirname, jsPath));
  return result.code;
};

module.exports = {
  webfonts: inlineCSS('../assets/styles/webfonts.css'),
  style: inlineCSS('../assets/styles/style.css'),
  domReady: inlineJS('../node_modules/domready/ready.min.js'),
  FastClick: inlineJS('../node_modules/fastclick/lib/fastclick.js'),
  smoothScroll: inlineJS('../node_modules/smooth-scroll/dist/js/smooth-scroll.min.js'),
  script: inlineJS('../assets/scripts/script.js')
};

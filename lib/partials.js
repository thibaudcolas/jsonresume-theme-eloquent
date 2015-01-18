var fs = require('fs');
var path = require('path');
var csso = require('csso');
var autoprefixer = require('autoprefixer-core');
var UglifyJS = require('uglify-js');

var inlineCSS = function(cssPath) {
  var css = fs.readFileSync(path.join(__dirname, cssPath), 'utf-8');
  css = csso.justDoIt(css, false);
  css = autoprefixer.process(css).css;
  return css;
};

var inlineJS = function(jsPath) {
  var result = UglifyJS.minify(path.join(__dirname, jsPath));
  return result.code;
};

module.exports = {
  opensans: inlineCSS('../assets/styles/opensans.css'),
  icomoon: inlineCSS('../assets/styles/icomoon.css'),
  bootstrap: inlineCSS('../assets/styles/bootstrap.min.css'),
  global: inlineCSS('../assets/styles/global.css'),
  profile: inlineCSS('../assets/styles/profile.css'),
  style: inlineCSS('../assets/styles/style.css'),
  saveAs: inlineJS('../node_modules/browser-saveas/index.js'),
  smoothScroll: inlineJS('../node_modules/smooth-scroll/dist/js/smooth-scroll.min.js'),
  emailScramble: inlineJS('../node_modules/email-scramble/email-scramble.js'),
  script: inlineJS('../assets/scripts/script.js')
};

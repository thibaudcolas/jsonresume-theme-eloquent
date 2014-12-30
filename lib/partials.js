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
  card: inlineCSS('../assets/styles/card.css'),
  profile: inlineCSS('../assets/styles/profile.css'),
  networks: inlineCSS('../assets/styles/networks.css'),
  style: inlineCSS('../assets/styles/style.css'),
  print: inlineCSS('../assets/styles/print.css'),
  domReady: inlineJS('../node_modules/domready/ready.min.js'),
  saveAs: inlineJS('../node_modules/browser-saveas/index.js'),
  smoothScroll: inlineJS('../node_modules/smooth-scroll/dist/js/smooth-scroll.min.js'),
  script: inlineJS('../assets/scripts/script.js')
};

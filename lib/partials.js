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

// Changes font-face definitions to only include inline WOFF.
var inlineIconFont = function(cssPath, woffPath) {
  var css = fs.readFileSync(path.join(__dirname, cssPath), 'utf-8');
  var woff = fs.readFileSync(path.join(__dirname, woffPath));
  var inlineWOFF = 'src:url("data:application/x-font-woff;base64,' + (new Buffer(woff)).toString('base64') + '") format("woff");';
  css = css.replace(/src:.*;/g, '');
  css = csso.justDoIt(css, false);
  css = autoprefixer.process(css).css;
  css = css.replace(/@font-face\s?{/g, '@font-face{' + inlineWOFF);
  return css;
};

var inlineJS = function(jsPath) {
  var result = UglifyJS.minify(path.join(__dirname, jsPath));
  return result.code;
};

module.exports = {
  webfonts: inlineCSS('../assets/styles/webfonts.css'),
  fontAwesome: inlineIconFont('../node_modules/font-awesome/css/font-awesome.css', '../node_modules/font-awesome/fonts/fontawesome-webfont.woff'),
  bootstrap: inlineCSS('../node_modules/bootstrap/dist/css/bootstrap.min.css'),
  style: inlineCSS('../assets/styles/style.css'),
  profile: inlineCSS('../assets/styles/profile.css'),
  print: inlineCSS('../assets/styles/print.css'),
  domReady: inlineJS('../node_modules/domready/ready.min.js'),
  FastClick: inlineJS('../node_modules/fastclick/lib/fastclick.js'),
  smoothScroll: inlineJS('../node_modules/smooth-scroll/dist/js/smooth-scroll.min.js'),
  script: inlineJS('../assets/scripts/script.js')
};

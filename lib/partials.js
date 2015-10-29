var fs = require('fs');
var path = require('path');
var csso = require('csso');
var autoprefixer = require('autoprefixer');

var inlineCSS = function(cssPath) {
    var css = fs.readFileSync(path.join(__dirname, cssPath), 'utf-8');
    css = csso.minify(css, false);
    css = autoprefixer.process(css).css;
    return css;
};

var inlineFile = function(relativePath) {
    var fullPath = path.join(__dirname, relativePath);
    return fs.readFileSync(fullPath, 'utf-8');
};

module.exports = {
    opensans: inlineCSS('../assets/styles/opensans.css'),
    icomoon: inlineCSS('../assets/styles/icomoon.css'),
    bootstrap: inlineCSS('../assets/styles/bootstrap.min.css'),
    global: inlineCSS('../assets/styles/global.css'),
    profile: inlineCSS('../assets/styles/profile.css'),
    style: inlineCSS('../assets/styles/style.css'),
    javascript: inlineFile('../assets/bundle.js')
};

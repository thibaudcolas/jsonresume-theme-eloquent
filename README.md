jsonresume-theme-eloquent
=========================

[![npm](https://img.shields.io/npm/v/jsonresume-theme-eloquent.svg?style=flat-square)](https://www.npmjs.com/package/jsonresume-theme-eloquent) [![Build Status](https://img.shields.io/travis/ThibWeb/jsonresume-theme-eloquent.svg?style=flat-square)](https://travis-ci.org/ThibWeb/jsonresume-theme-eloquent) [![Dependency Status](https://img.shields.io/david/ThibWeb/jsonresume-theme-eloquent.svg?style=flat-square)](https://david-dm.org/ThibWeb/jsonresume-theme-eloquent) [![Code Climate](https://img.shields.io/codeclimate/github/ThibWeb/jsonresume-theme-eloquent.svg?style=flat-square)](https://codeclimate.com/github/ThibWeb/jsonresume-theme-eloquent)

An eloquent JSON Resume theme: fluent, persuasive, for developers. [See it live](https://rawgit.com/ThibWeb/jsonresume-theme-eloquent/master/test/resume.html).

[![Theme screenshot](raw/theme-screenshot.png)](https://rawgit.com/ThibWeb/jsonresume-theme-eloquent/master/test/resume.html)

> [Online demo](https://rawgit.com/ThibWeb/jsonresume-theme-eloquent/master/test/resume.html)

## Features

- Mobile First theme based on Bootstrap.
- Download your resume with a single click, in a single file.
- Keep your resume offline if you want to: the theme is self-contained.
- Obfuscates your email address and phone number from spam bots.
- Great Font Awesome icons.
- Gorgeous Open Sans web font.
- Optimized for print and screen readers.
- Contains Schema.org markup to make the most of your content.
- Uses Open Graph & Twitter metas to improve social sharing.
- All fields are optional, pick what you need!

## Usage

Install the theme with `npm install --save jsonresume-theme-eloquent`, then:

```js
'use strict';

var fs = require('fs');
var path = require('path');
var eloquent = require('jsonresume-theme-eloquent');

var resumeJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '/resume.json'), 'utf-8'));
var resumeHTML = eloquent.render(resumeJSON);

fs.writeFile(path.join(__dirname, '/resume.html'), resumeHTML, function(err) {
    console.log(err || 'Resume exported to resume.html');
});

```

## Contributing

Install the project with:

```sh
git clone git@github.com:ThibWeb/jsonresume-theme-eloquent.git
cd jsonresume-theme-eloquent
npm install
./.githooks/deploy
# To actively work on the theme.
npm run start
```

To run the tests locally:

```sh
# To create a reference resume export.
npm run test
cp test/resume.html test/old-resume.html
# To compare the result of your changes against the reference.
npm run test
diff -u test/old-resume.html test/resume.html
```

To release a new version:

```sh
npm version minor -m "Release %s"
git push origin master
git push --tags
npm publish
```

## Built with

- [Bootstrap](http://getbootstrap.com/): custom build
- [IcoMoon](https://icomoon.io/): custom [Font Awesome](https://fortawesome.github.io/Font-Awesome/) build
- [Open Sans](http://www.google.com/fonts/specimen/Open+Sans): great web font-face, taken from Google Fonts
- [saveAs polyfill](https://github.com/eligrey/FileSaver.js)
- [domready](https://github.com/ded/domready)
- [smoothScroll](https://github.com/cferdinandi/smooth-scroll)

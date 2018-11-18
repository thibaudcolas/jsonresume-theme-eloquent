# Eloquent [![npm](https://img.shields.io/npm/v/jsonresume-theme-eloquent.svg)](https://www.npmjs.com/package/jsonresume-theme-eloquent) [![Build Status](https://img.shields.io/travis/thibaudcolas/jsonresume-theme-eloquent.svg)](https://travis-ci.org/thibaudcolas/jsonresume-theme-eloquent)

An eloquent JSON Resume theme: fluent, persuasive, for developers. [See it live](https://rawgit.com/thibaudcolas/jsonresume-theme-eloquent/master/test/resume.html).

[![Theme screenshot](raw/theme-screenshot.png)](https://rawgit.com/thibaudcolas/jsonresume-theme-eloquent/master/test/resume.html)

> [Online demo](https://rawgit.com/thibaudcolas/jsonresume-theme-eloquent/master/test/resume.html)

## Features

* Mobile First theme based on Bootstrap.
* Download your resume with a single click, in a single file.
* Keep your resume offline if you want to: the theme is self-contained.
* Obfuscates your email address and phone number from spam bots.
* Great Font Awesome icons.
* Gorgeous Open Sans web font.
* Optimized for print and screen readers.
* Contains Schema.org markup to make the most of your content.
* Uses Open Graph & Twitter metas to improve social sharing.
* Optionally use Google Analytics to track page views on your resume.
* All fields are optional, pick what you need!

## Usage

Install the theme,

```sh
npm install --save jsonresume-theme-eloquent
```

Then use it:

```js
'use strict';

var theme = require('jsonresume-theme-eloquent');

var resume = require('./resume.json');
process.stdout.write(theme.render(resume));
```

## Contributing

Install the project with:

```sh
git clone git@github.com:thibaudcolas/jsonresume-theme-eloquent.git
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

* [Bootstrap](http://getbootstrap.com/): custom build
* [IcoMoon](https://icomoon.io/): custom [Font Awesome](https://fortawesome.github.io/Font-Awesome/) build
* [Open Sans](http://www.google.com/fonts/specimen/Open+Sans): great web font-face, taken from Google Fonts
* [saveAs polyfill](https://github.com/eligrey/FileSaver.js)

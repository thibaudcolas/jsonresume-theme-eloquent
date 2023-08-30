# [jsonresume-theme-eloquent](https://www.npmjs.com/package/jsonresume-theme-eloquent)

An eloquent [JSON Resume](https://jsonresume.org/) theme: fluent, persuasive, for developers. [See it live](https://thibaudcolas.github.io/jsonresume-theme-eloquent/).

[![Theme screenshot](raw/theme-screenshot.png)](https://thibaudcolas.github.io/jsonresume-theme-eloquent/)

> [Online demo](https://thibaudcolas.github.io/jsonresume-theme-eloquent/)

## Features

- Mobile First theme based on Bootstrap.
- Download your resume with a single click, in a single file.
- Keep your resume offline if you want to: the theme is self-contained.
- Obfuscates your email address and phone number from spam bots.
- Great Font Awesome icons.
- Optimized for print and screen readers.
- Contains Schema.org markup to make the most of your content.
- Uses Open Graph & Twitter metas to improve social sharing.
- Optionally use Google Analytics to track page views on your resume.
- All fields are optional, pick what you need!

## Usage

Install the theme,

```sh
npm install --save jsonresume-theme-eloquent
```

Then use it:

```js
"use strict";

var theme = require("jsonresume-theme-eloquent");

var resume = require("./resume.json");
process.stdout.write(theme.render(resume));
```

## Contributing

Install the project with:

```sh
git clone git@github.com:thibaudcolas/jsonresume-theme-eloquent.git
cd jsonresume-theme-eloquent
npm install
# To actively work on the theme.
npm run start
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

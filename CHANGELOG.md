# Change Log

> All notable changes to this project will be documented in this file.
> This project adheres to [Semantic Versioning](http://semver.org/).

## [[v5.0.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/v5.0.0) - 2023-08-29

### Changed

- Switch Download feature to use HTML5 `download` attribute.
- Move from Open Sans to icon font
- Move from font icon to SVG icons
- Switch from Moment.js date formatting to Day.js

### Removed

- Stop processing styles through legacy CSS support conversions.

## [[v4.1.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/v4.1.0) - 2018-11-18

### Added

- Add new icon for Medium ([#15](https://github.com/thibaudcolas/jsonresume-theme-eloquent/pull/15)).

### Changed

- Upgrade all dependencies to latest

## [[v4.0.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/v4.0.0) - 2018-01-25

### Added

- Add optional GA tracking via `google_analytics_id` property on resume.
- Add `rel="noreferrer noopener"` on all target `_blank` links.

### Changed

- Change license from ISC to MIT.
- Stop testing in Node 0.12.

### Removed

- Remove outdated IE8/9/10 compatibility code.
- Remove smooth scrolling from the project.
- Remove harmful alt on profile picture image.
- Stop justifying about text (hard to read for people with dyslexia).

## [[v3.0.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/3.0.0) - 2016-03-27

### Added

- Use Twitter meta tags to improve display on social networks / Slack.

### Changed

- Now using the `summary` for the description meta tag, (used by search engines & social networks) instead of the same fields as the title.

## [[v2.3.2]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/2.3.2) - 2016-03-27

### Removed

- Exclude more files (build tool configuration and changelog) from npm package for faster installs.

## [[v2.3.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/2.3.0) - 2016-02-07

### Fixed

- Bump moment.js version due to security issue.

## [[2.2.3]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/2.2.3) - 2016-01-07

### Fixed

- Fix style issue showing a scrollbar when it's not necessary.

## [[2.1.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/2.1.0) - 2015-10-29

### Changed

- CSS is now parsed with [Pleeease](http://pleeease.io), with a better cross-browser transform story.
- JS is now written in ES6 and compiled with [Babel](https://babeljs.io/).

### Fixed

- Switch from runtime compilation of JS & CSS assets to build time before publish. Fixes [#3](https://github.com/thibaudcolas/jsonresume-theme-eloquent/issues/3).

## [[2.0.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/2.0.0) - 2015-10-27

### Added

- Introduce this [Change Log](http://keepachangelog.com/).
- Added usage and contributing sections to README.

### Changed

- Upgrade autoprefixer to latest major release.
- Upgrade Handlebars to latest major release.
- Use CSSO `minify` instead of `justDoIt`.

### Fixed

- Always parse dates as UTC, ignoring timezones. Fixes [#2](https://github.com/thibaudcolas/jsonresume-theme-eloquent/issues/2). This will cause the output to be different when resumes are rendered in timezones that are after UTC (GMT-1 to GMT-12).

## [[1.2.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/1.2.0) - 2015-08-31

### Fixed

- Upgrade UglifyJS2 to latest release to fix security issue.

## [[1.1.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/1.1.0) – 2015-03-04

### Changed

- Upgrade Handlebars to latest major release.

## [[1.0.0]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/1.0.0) - 2015-01-29

First stable release!

---

## [[x.y.z]](https://github.com/thibaudcolas/jsonresume-theme-eloquent/releases/tag/x.y.z) - YYYY-MM-DD (Template: http://keepachangelog.com/)

### Added

- Something was added to the API / a new feature was introduced.

### Changed

### Fixed

### Removed

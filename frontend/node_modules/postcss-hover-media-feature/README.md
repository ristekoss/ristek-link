# PostCSS Hover Media Feature

[![NPM Version][npm-img]][npm-url] [![NPM Monthly Downloads][npm-dl-img]][npm-url] [![Build Status][ci-img]][ci-url]

[PostCSS](https://github.com/postcss/postcss) plugin that extracts and wraps
rules containing `:hover` pseudo-classes in `@media (hover: hover) {}` media
queries.

Certain mobile browsers apply `:hover` styles on 'tap', which (in most cases)
isn't desirable. By wrapping `:hover` styles with a
[Hover Media Feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover)
Media Query these styles will only be applied on devices that support them.

```css
.foo:hover {
  color: blue;
  text-decoration: underline;
}

/* becomes */

@media (hover: hover) {
  .foo:hover {
    color: blue;
    text-decoration: underline;
  }
}
```

## Installation

Using npm:

```shell
> npm install --save-dev postcss postcss-hover-media-feature
```

Using Yarn:

```shell
> yarn add --dev postcss postcss-hover-media-feature
```

## Usage

Check your project for an existing PostCSS config: `postcss.config.js` in the
project root, `"postcss"` section in `package.json` or `postcss` in bundle
config.

If you already use PostCSS, add the plugin to plugins list:

```diff
// postcss.config.js
module.exports = {
  plugins: [
+   require('postcss-hover-media-feature'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to
[official docs](https://github.com/postcss/postcss#usage) and set this plugin in
settings.

## Options

### `fallback`

Type: `Boolean` Default: `false`

The `fallback` option provides a way to extend this functionality to browsers
that don't themselves support the Hover Media Feature. It prefixes rules whose
selectors contain the `:hover` pseudo-selector – only when this selector is also
matched will the hover styles apply.

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-hover-media-feature')({
      fallback: true
    })
  ]
}
```

```css
.foo:hover {
  color: blue;
  text-decoration: underline;
}

/* becomes */

html:not(.supports-touch) .foo:hover {
  color: blue;
  text-decoration: underline;
}

@media (hover: hover) {
  .foo:hover {
    color: blue;
    text-decoration: underline;
  }
}
```

### `fallbackSelector`

Type: `String` Default: `html:not(.supports-touch)`

Only relevant when `fallback: true`.

Specifies the selector that is prepended with a descendent combinator to
selectors containing `:hover` pseudo-class.

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-hover-media-feature')({
      fallback: true,
      fallbackSelector: '.supports-hover'
    })
  ]
}
```

```css
.foo:hover {
  color: blue;
  text-decoration: underline;
}

/* becomes */

.supports-hover .foo:hover {
  color: blue;
  text-decoration: underline;
}

@media (hover: hover) {
  .foo:hover {
    color: blue;
    text-decoration: underline;
  }
}
```

### `rootSelectors`

Type: `Array[String]` Default: `[]`

Only relevant when `fallback: true`.

Accepts an array of selectors that match the `:root` element (i.e. `<html>`) so
that `fallbackSelector` is chained rather than prepended with descendent
combinator.

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-hover-media-feature')({
      fallback: true,
      rootSelectors: ['.t-dark']
    })
  ]
}
```

```css
.t-dark .foo:hover {
  color: white;
}

/* becomes */

html:not(.supports-touch).t-dark .foo:hover {
  color: white;
}

@media (hover: hover) {
  .t-dark .foo:hover {
    color: blue;
  }
}
```

[npm-img]: https://img.shields.io/npm/v/postcss-hover-media-feature.svg
[npm-dl-img]: https://img.shields.io/npm/dm/postcss-hover-media-feature
[npm-url]: https://www.npmjs.com/package/postcss-hover-media-feature
[ci-img]: https://img.shields.io/travis/saulhardman/postcss-hover-media-feature.svg
[ci-url]: https://travis-ci.org/saulhardman/postcss-hover-media-feature

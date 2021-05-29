# get-orientation

[![Build Status](https://travis-ci.com/mooyoul/get-orientation.svg?branch=master)](https://travis-ci.com/mooyoul/get-orientation)
[![Semantic Release enabled](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/get-orientation.svg)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![MIT license](http://img.shields.io/badge/license-MIT-blue.svg)](http://mooyoul.mit-license.org/)

Get orientation from EXIF of image file. Supports both Browser and Server (Node.js) environment.

`get-orientation` has fast, efficient built-in EXIF parser. 
Built-in EXIF Parser is stream-based, and uses small memory footprint.

Also, Compatibility is the key. `get-orientation` was tested with 50+ test images.

## Sponsor

- [Vingle](https://www.vingle.net) - Vingle, Very Community. Love the things that you love. - [We're hiring!](https://careers.vingle.net/#/engineering/backend)

## Demo

https://mooyoul.github.io/get-orientation/

## Why?

![adaption stats of CSS3 Image Orientation](/docs/why-2.png)

Most Browsers don't rotate images automatically.

Hmm... How about adaption stats of CSS3 Image Orientation?

![missing auto rotation](/docs/why-1.png)

Well. Good luck. 

To rotate image by its orientation, you'll have to make a EXIF parser or install heavy EXIF related libraries.

That's why i made this.           

## Compatibility

get-orientation works in major environments, including IE 10.

#### Tested Platforms (Node.js) 

Platform | Environment | Build | Compatibility 
-------- | ----------- | ----- | -------------
macOS Mojave | Node.js 4 | Default | Compatible
macOS Mojave | Node.js 6 | Default | Compatible
Linux Ubuntu Trusty | Node.js 6 | Default | Compatible
macOS Mojave | Node.js 8 | Default | Compatible
Linux Ubuntu Trusty | Node.js 10 | Default | Compatible
macOS Mojave | Node.js 10 | Default | Compatible

#### Tested Platforms (Browser)

Platform | Environment | Build | Compatibility
-------- | ----------- | ----- | -------------
Windows XP/7 | ~ IE 9 | N/A | Incompatible due to missing FileReader/DataView support   
Windows 7 | IE 10 | Browser/ES5 | Compatible, Requires Promise and WeakMap polyfill
Windows 7| IE 11 | Browser/ES5 | Compatible, Requires Promise polyfill
Windows 10 | IE 11 | Browser/ES5 | Compatible, Requires Promise polyfill
macOS Mojave | Chrome 74 | Browser/ES6 (Default) | Compatible
macOS Mojave | Safari | Browser/ES6 (Default) | Compatible
macOS Mojave | Safari TP | Browser/ES6 (Default) | Compatible
macOS Mojave | Firefox Developer Edition 67 | Browser/ES6 (Default) | Compatible
macOS Mojave | Firefox 65 | Browser/ES6 (Default) | Compatible
iOS 12.0.1 | Safari | Browser/ES6 (Default) | Compatible
Android 5 | Mobile Chrome 74 | Browser/ES6 (Default) | Compatible


## Install

#### from NPM

```bash
$ npm install get-orientation
```

#### from unpkg

```html
<!-- ES6 Target Build (default) -->
<script type="text/javascript" src="https://unpkg.com/get-orientation/browser"></script>

<!-- ES5 Target Build (for Compat, requires Promise, WeakMap polyfill -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.6.5/core.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/get-orientation/browser.es5"></script>
```


## Supported Image Format

- JPEG/JFIF
- JPEG/EXIF
- TIFF/EXIF
    
 
## Usage

#### Node.js

```typescript

import * as fs from "fs";
import { getOrientation } from "get-orientation";

// using Readable File Stream as input
const stream = fs.createReadStream(imageFilePath);
const orientation = await getOrientation(stream);

// using Buffer as input
const bufFile = fs.readFileSync(imageFilePath);
const orientation = await getOrientation(bufFile);

// using HTTP Response body as input
import axios from "axios";
const response = await axios({ url, responseType: "stream" });
const orientation = await getOrientation(response.data);


// using Stream interface directly
import { EXIFOrientationParser, Orientation } from "get-orientation";

const parser = new EXIFOrientationParser();
parser.on("orientation", (orientation: Orientation) => {
  console.log("got orientation: ", orientation);
});

fs.createReadStream(imageFilePath).pipe(parser);
```

#### Browser

```javascript
import { getOrientation } from "get-orientation/browser";

async function onFileChanged() {
  const orientation = await getOrientation(fileInput.files[0]);
  // do stuff...
}
```

> *IMPORTANT NOTE*
>
> The ES5 target browser build does not include any Polyfills like Promise/A+.
> For example, To use this library from Microsoft Internet Explorer 11, You'll have to polyfill Promise.

 
## API (Node.js)

### `getOrientation(input: Buffer | ReadableStream)` => `Promise<Orientation>`

returns Orientation of given image.

If image is non-jpeg image, or non-image, `getOrientation` will return Orientation.TOP_LEFT (Horizontal - Default value).  

### `new EXIFOrientationParser()` => `WritableStream`

returns a parser stream instance that implements WritableStream interface.

Please note that EXIFOrientationParser won't emit any `orientation` event if stream doesn't have any Orientation tags.
also, Stream will be closed without any errors.

For example, Using non-EXIF images, non-JPEG images as input won't emit a `orientation` event.     

#### Stream Events

##### `orientation`

emitted after parsing orientation.


## API (Browser)

### `getOrientation(input: ArrayBuffer | Blob | File)` => `Promise<Orientation>` 

returns Orientation of given image.

If image is non-jpeg image, or non-image, `getOrientation` will return Orientation.TOP_LEFT (Horizontal - Default value).

## Types

### Orientation

```typescript
enum Orientation {
  TOP_LEFT = 1,         // Horizontal (Default)
  TOP_RIGHT = 2,        // Mirror Horizontal
  BOTTOM_RIGHT  = 3,    // Rotate 180
  BOTTOM_LEFT = 4,      // Mirror vertical
  LEFT_TOP = 5,         // Mirror horizontal and rotate 270 CW
  RIGHT_TOP = 6,        // Rotate 90 CW
  RIGHT_BOTTOM = 7,     // Mirror horizontal and rotate 90 CW
  LEFT_BOTTOM = 8,      // Rotate 270 CW
}
```


## Changelog

See [CHANGELOG](/CHANGELOG.md).


## Testing

```bash
$ npm run test
```


## Build

```bash
$ npm run build
```

## Related

- [mooyoul/node-webpinfo](https://github.com/mooyoul/node-webpinfo) - Strongly typed, Stream based WebP Container Parser

## License
[MIT](LICENSE)

See full license on [mooyoul.mit-license.org](http://mooyoul.mit-license.org/)

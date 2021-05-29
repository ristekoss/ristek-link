/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./response */ "./src/response.js");


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

const handleRequest = async event => {
  const { request } = event
  if (request.method === 'OPTIONS') {
    return new Response('ok', {
      headers: { 'Access-Control-Allow-Origin': '*', ..._response__WEBPACK_IMPORTED_MODULE_0__["corsHeaders"] },
      status: 200,
    })
  }

  try {
    // if auth is not on headers, reject
    const auth = request.headers.get('Authorization')
    if (auth !== RISTEK_LINK_SECRET) {
      return new Response('Unauthorized', {
        status: 401,
        headers: { ..._response__WEBPACK_IMPORTED_MODULE_0__["corsHeaders"], 'Content-Type': 'application/json' },
      })
    }

    // get params from event and requests
    const method = event.request.method
    const url = new URL(event.request.url)
    const path = url.pathname

    // handle shorten url endpoint
    if (method === 'POST' && path === '/shorten') {
      const { short_url, long_url } = await request.json()
      // check if the short url exists
      const existing_short_url = await LINKS.get(short_url)
      if (!!existing_short_url) {
        return new Response(
          JSON.stringify({
            data: `The short url /${short_url} already exists. Please choose another one.`,
            ok: false,
          }),
          { status: 200, headers: _response__WEBPACK_IMPORTED_MODULE_0__["corsHeaders"] },
        )
      }
      const _ = await LINKS.put(short_url, long_url)
      return new Response(JSON.stringify({ data: short_url, ok: true }), {
        status: 200,
        headers: _response__WEBPACK_IMPORTED_MODULE_0__["corsHeaders"],
      })
    }

    if (method === 'POST' && path === '/retrieve') {
      const { short_url } = await request.json()
      const long_url = await LINKS.get(short_url)
      if (!!long_url) {
        return new Response(JSON.stringify({ data: long_url, ok: true }), {
          status: 200,
          headers: _response__WEBPACK_IMPORTED_MODULE_0__["corsHeaders"],
        })
      }
      return new Response(
        JSON.stringify({
          data: `The short url /${short_url} does not exist.`,
          ok: false,
        }),
        {
          status: 200,
          headers: _response__WEBPACK_IMPORTED_MODULE_0__["corsHeaders"],
        },
      )
    }

    if (method === 'GET') {
      return new Response('all work and no play makes jack a dull boy', {
        status: 200,
        headers: _response__WEBPACK_IMPORTED_MODULE_0__["corsHeaders"],
      })
    }
  } catch (ex) {
    console.warn('Error', ex)
  }
}


/***/ }),

/***/ "./src/response.js":
/*!*************************!*\
  !*** ./src/response.js ***!
  \*************************/
/*! exports provided: corsHeaders, JSONResponse, RedirectResponse, UnauthorizedResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corsHeaders", function() { return corsHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONResponse", function() { return JSONResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectResponse", function() { return RedirectResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedResponse", function() { return UnauthorizedResponse; });
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}


const JSONResponse = (data) => {
  return new Response(JSON.stringify({data: data}),{
    headers: { 'content-type': 'application/json', ...corsHeaders },
})
}

const RedirectResponse = (url) => {
  return Response.redirect(url,301, {headers: {...corsHeaders}})
}

const UnauthorizedResponse = () => {
  return new Response("Unauthorized", {status:401, headers: {...corsHeaders}})
}

/***/ })

/******/ });
//# sourceMappingURL=worker.js.map
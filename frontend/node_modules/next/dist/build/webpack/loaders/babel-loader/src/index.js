"use strict";exports.__esModule=true;exports.default=makeLoader;var _loaderUtils=_interopRequireDefault(require("next/dist/compiled/loader-utils"));var _trace=require("../../../../../telemetry/trace");var _cache=_interopRequireDefault(require("./cache"));var _transform=_interopRequireDefault(require("./transform"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// import babel from 'next/dist/compiled/babel/core'
// When using `import` Babel will be undefined
const babel=require('next/dist/compiled/babel/core');function makeLoader(callback){const overrides=callback(babel);return function(source,inputSourceMap){// Make the loader async
const cb=this.async();loader.call(this,source,inputSourceMap,overrides).then(args=>cb(null,...args),err=>cb(err));};}async function loader(source,inputSourceMap,overrides){var _this$currentTraceSpa;// this.currentTraceSpan is provided by profiling-plugin.ts
const loaderSpan=(0,_trace.trace)('babel-loader',(_this$currentTraceSpa=this.currentTraceSpan)==null?void 0:_this$currentTraceSpa.id);return loaderSpan.traceAsyncFn(async()=>{const filename=this.resourcePath;loaderSpan.setAttribute('filename',filename);let loaderOptions=_loaderUtils.default.getOptions(this)||{};let customOptions;if(overrides&&overrides.customOptions){const customoptionsSpan=(0,_trace.trace)('loader-overrides-customoptions');const result=await customoptionsSpan.traceAsyncFn(async()=>await overrides.customOptions.call(this,loaderOptions,{source,map:inputSourceMap}));customOptions=result.custom;loaderOptions=result.loader;}// Standardize on 'sourceMaps' as the key passed through to Webpack, so that
// users may safely use either one alongside our default use of
// 'this.sourceMap' below without getting error about conflicting aliases.
if(Object.prototype.hasOwnProperty.call(loaderOptions,'sourceMap')&&!Object.prototype.hasOwnProperty.call(loaderOptions,'sourceMaps')){loaderOptions=Object.assign({},loaderOptions,{sourceMaps:loaderOptions.sourceMap});delete loaderOptions.sourceMap;}const programmaticOptions=Object.assign({},loaderOptions,{filename,inputSourceMap:inputSourceMap||undefined,// Set the default sourcemap behavior based on Webpack's mapping flag,
// but allow users to override if they want.
sourceMaps:loaderOptions.sourceMaps===undefined?this.sourceMap:loaderOptions.sourceMaps,// Ensure that Webpack will get a full absolute path in the sourcemap
// so that it can properly map the module back to its internal cached
// modules.
sourceFileName:filename,caller:{name:'babel-loader',// Provide plugins with insight into webpack target.
// https://github.com/babel/babel-loader/issues/787
target:this.target,// Webpack >= 2 supports ESM and dynamic import.
supportsStaticESM:true,supportsDynamicImport:true,// Webpack 5 supports TLA behind a flag. We enable it by default
// for Babel, and then webpack will throw an error if the experimental
// flag isn't enabled.
supportsTopLevelAwait:true,...loaderOptions.caller}});// Remove loader related options
delete programmaticOptions.cacheDirectory;delete programmaticOptions.cacheIdentifier;const partialConfigSpan=(0,_trace.trace)('babel-load-partial-config-async');const config=partialConfigSpan.traceFn(()=>{return babel.loadPartialConfig(programmaticOptions);});if(config){let options=config.options;if(overrides&&overrides.config){const overridesSpan=(0,_trace.trace)('loader-overrides-config');options=await overridesSpan.traceAsyncFn(async()=>await overrides.config.call(this,config,{source,map:inputSourceMap,customOptions}));}if(options.sourceMaps==='inline'){// Babel has this weird behavior where if you set "inline", we
// inline the sourcemap, and set 'result.map = null'. This results
// in bad behavior from Babel since the maps get put into the code,
// which Webpack does not expect, and because the map we return to
// Webpack is null, which is also bad. To avoid that, we override the
// behavior here so "inline" just behaves like 'true'.
options.sourceMaps=true;}const{cacheDirectory,cacheIdentifier}=loaderOptions;let result;if(cacheDirectory){result=await(0,_cache.default)({source,options,cacheDirectory,cacheIdentifier,cacheCompression:false});}else{const transformSpan=(0,_trace.trace)('transform');transformSpan.setAttribute('filename',filename);transformSpan.setAttribute('cache','DISABLED');result=await transformSpan.traceAsyncFn(async()=>{return(0,_transform.default)(source,options);});}// TODO: Babel should really provide the full list of config files that
// were used so that this can also handle files loaded with 'extends'.
if(typeof config.babelrc==='string'){this.addDependency(config.babelrc);}if(result){const{code,map}=result;return[code,map];}}// If the file was ignored, pass through the original content.
return[source,inputSourceMap];});}
//# sourceMappingURL=index.js.map
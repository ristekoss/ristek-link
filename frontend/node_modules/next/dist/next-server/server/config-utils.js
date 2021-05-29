"use strict";exports.__esModule=true;exports.install=install;exports.shouldLoadWithWebpack5=shouldLoadWithWebpack5;exports.loadWebpackHook=loadWebpackHook;var _env=require("@next/env");var _jestWorker=require("jest-worker");var _findUp=_interopRequireDefault(require("next/dist/compiled/find-up"));var _webpack=require("next/dist/compiled/webpack/webpack");var _constants=require("../lib/constants");var _configShared=require("./config-shared");var Log=_interopRequireWildcard(require("../../build/output/log"));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}let installed=false;function install(useWebpack5){if(installed){return;}installed=true;(0,_webpack.init)(useWebpack5);// hook the Node.js require so that webpack requires are
// routed to the bundled and now initialized webpack version
require('../../build/webpack/require-hook');}async function shouldLoadWithWebpack5(phase,dir){var _userConfig$future;await(0,_env.loadEnvConfig)(dir,phase===_constants.PHASE_DEVELOPMENT_SERVER,Log);const path=await(0,_findUp.default)(_constants.CONFIG_FILE,{cwd:dir});if(Number(process.env.NEXT_PRIVATE_TEST_WEBPACK5_MODE)>0){return{enabled:true,reason:'test-mode'};}// No `next.config.js`:
if(!(path!=null&&path.length)){// Uncomment to add auto-enable when there is no next.config.js
// Use webpack 5 by default in new apps:
// return {
//   enabled: true,
//   reason: 'no-config',
// }
return{enabled:false,reason:'no-future-flag'};}// Default to webpack 4 for backwards compatibility on boot:
install(false);const userConfigModule=require(path);const userConfig=(0,_configShared.normalizeConfig)(phase,userConfigModule.default||userConfigModule);// Opted-in manually
if(((_userConfig$future=userConfig.future)==null?void 0:_userConfig$future.webpack5)===true){return{enabled:true,reason:'future-flag'};}// Uncomment to add auto-enable when there is no custom webpack config
// The user isn't configuring webpack
// if (!userConfig.webpack) {
//   return {
//     enabled: true,
//     reason: 'no-webpack-config',
//   }
// }
// return {
//   enabled: false,
//   reason: 'webpack-config',
// }
return{enabled:false,reason:'no-future-flag'};}function reasonMessage(reason){switch(reason){case'future-flag':return'future.webpack5 option enabled';case'no-future-flag':return'future.webpack5 option not enabled';case'no-config':return'no next.config.js';case'webpack-config':return'custom webpack configuration in next.config.js';case'no-webpack-config':return'no custom webpack configuration in next.config.js';case'test-mode':return'internal test mode';default:return'';}}async function loadWebpackHook(phase,dir){let useWebpack5=false;const worker=new _jestWorker.Worker(__filename,{enableWorkerThreads:false});try{const result=await worker.shouldLoadWithWebpack5(phase,dir);Log.info(`Using webpack ${result.enabled?'5':'4'}. Reason: ${reasonMessage(result.reason)} https://nextjs.org/docs/messages/webpack5`);useWebpack5=Boolean(result.enabled);}catch(_unused){// If this errors, it likely will do so again upon boot, so we just swallow
// it here.
}finally{worker.end();}install(useWebpack5);}
//# sourceMappingURL=config-utils.js.map
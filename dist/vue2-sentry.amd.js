define(function(){"use strict";function t(){return"undefined"==typeof document||null==document.location?"":document.location.href}function e(t){this.name="RavenConfigError",this.message=t}function r(){return+new Date}function n(t,e){return i(e)?function(r){return e(r,t)}:e}function a(){this._hasJSON=!("object"!=typeof JSON||!JSON.stringify),this._hasDocument=!o(A),this._hasNavigator=!o($),this._lastCapturedException=null,this._lastData=null,this._lastEventId=null,this._globalServer=null,this._globalKey=null,this._globalProject=null,this._globalContext={},this._globalOptions={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],collectWindowErrors:!0,maxMessageLength:0,maxUrlLength:250,stackTraceLimit:50,autoBreadcrumbs:!0,instrument:!0,sampleRate:1},this._ignoreOnError=0,this._isRavenInstalled=!1,this._originalErrorStackTraceLimit=Error.stackTraceLimit,this._originalConsole=q.console||{},this._originalConsoleMethods={},this._plugins=[],this._startTime=r(),this._wrappedBuiltIns=[],this._breadcrumbs=[],this._lastCapturedEvent=null,this._keypressTimeout,this._location=q.location,this._lastHref=this._location&&this._location.href,this._resetBackoff();for(var t in this._originalConsole)this._originalConsoleMethods[t]=this._originalConsole[t]}function o(t){return void 0===t}function i(t){return"function"==typeof t}function s(t){return"[object String]"===W.toString.call(t)}function l(t){for(var e in t)return!1;return!0}function c(t,e){var r,n;if(o(t.length))for(r in t)p(t,r)&&e.call(null,r,t[r]);else if(n=t.length)for(r=0;r<n;r++)e.call(null,r,t[r])}function u(t,e){return e?(c(e,function(e,r){t[e]=r}),t):t}function h(t){return!!Object.isFrozen&&Object.isFrozen(t)}function f(t,e){return!e||t.length<=e?t:t.substr(0,e)+"…"}function p(t,e){return W.hasOwnProperty.call(t,e)}function d(t){for(var e,r=[],n=0,a=t.length;n<a;n++)s(e=t[n])?r.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):e&&e.source&&r.push(e.source);return new RegExp(r.join("|"),"i")}function g(t){var e=[];return c(t,function(t,r){e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}),e.join("&")}function _(t){var e=t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};var r=e[6]||"",n=e[8]||"";return{protocol:e[2],host:e[4],path:e[5],relative:e[5]+r+n}}function v(){var t=q.crypto||q.msCrypto;if(!o(t)&&t.getRandomValues){var e=new Uint16Array(8);t.getRandomValues(e),e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(t){for(var e=t.toString(16);e.length<4;)e="0"+e;return e};return r(e[0])+r(e[1])+r(e[2])+r(e[3])+r(e[4])+r(e[5])+r(e[6])+r(e[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})}function m(t){for(var e,r=[],n=0,a=0,o=" > ".length;t&&n++<5&&!("html"===(e=b(t))||n>1&&a+r.length*o+e.length>=80);)r.push(e),a+=e.length,t=t.parentNode;return r.reverse().join(" > ")}function b(t){var e,r,n,a,o,i=[];if(!t||!t.tagName)return"";if(i.push(t.tagName.toLowerCase()),t.id&&i.push("#"+t.id),(e=t.className)&&s(e))for(r=e.split(/\s+/),o=0;o<r.length;o++)i.push("."+r[o]);var l=["type","name","title","alt"];for(o=0;o<l.length;o++)n=l[o],(a=t.getAttribute(n))&&i.push("["+n+'="'+a+'"]');return i.join("")}function y(t,e){return!!(!!t^!!e)}function x(t,e){return!y(t,e)&&(t=t.values[0],e=e.values[0],t.type===e.type&&t.value===e.value&&k(t.stacktrace,e.stacktrace))}function k(t,e){if(y(t,e))return!1;var r=t.frames,n=e.frames;if(r.length!==n.length)return!1;for(var a,o,i=0;i<r.length;i++)if(a=r[i],o=n[i],a.filename!==o.filename||a.lineno!==o.lineno||a.colno!==o.colno||a.function!==o.function)return!1;return!0}function E(t,e,r,n){var a=t[e];t[e]=r(a),n&&n.push([t,e,a])}function w(t){if(t.$root===t)return"root instance";var e=t._isVue?t.$options.name||t.$options._componentTag:t.name;return(e?"component <"+e+">":"anonymous component")+(t._isVue&&t.$options.__file?" at "+t.$options.__file:"")}var S="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},O={isObject:function(t){return"object"==typeof t&&null!==t},isError:function(t){switch({}.toString.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return t instanceof Error}},wrappedCallback:function(t){return function(e,r){var n=t(e)||e;return r?r(n)||n:n}}},C={collectWindowErrors:!0,debug:!1},R="undefined"!=typeof window?window:void 0!==S?S:"undefined"!=typeof self?self:{},T=[].slice,D="?",j=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;C.report=function(){function e(t,e){var r=null;if(!e||C.collectWindowErrors){for(var n in c)if(c.hasOwnProperty(n))try{c[n].apply(null,[t].concat(T.call(arguments,2)))}catch(t){r=t}if(r)throw r}}function r(r,n,a,i,l){if(f)C.computeStackTrace.augmentStackTraceWithInitialElement(f,n,a,r),o();else if(l&&O.isError(l))e(C.computeStackTrace(l),!0);else{var c,u={url:n,line:a,column:i},h=void 0,p=r;"[object String]"==={}.toString.call(r)&&(c=r.match(j))&&(h=c[1],p=c[2]),u.func=D,e({name:h,message:p,url:t(),stack:[u]},!0)}return!!s&&s.apply(this,arguments)}function n(){l||(s=R.onerror,R.onerror=r,l=!0)}function a(){l&&(R.onerror=s,l=!1,s=void 0)}function o(){var t=f,r=u;u=null,f=null,h=null,e.apply(null,[t,!1].concat(r))}function i(t,e){var r=T.call(arguments,1);if(f){if(h===t)return;o()}var n=C.computeStackTrace(t);if(f=n,h=t,u=r,setTimeout(function(){h===t&&o()},n.incomplete?2e3:0),!1!==e)throw t}var s,l,c=[],u=null,h=null,f=null;return i.subscribe=function(t){n(),c.push(t)},i.unsubscribe=function(t){for(var e=c.length-1;e>=0;--e)c[e]===t&&c.splice(e,1)},i.uninstall=function(){a(),c=[]},i}(),C.computeStackTrace=function(){function e(e){if(void 0!==e.stack&&e.stack){for(var r,n,a,o=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,i=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,s=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,l=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,c=/\((\S*)(?::(\d+))(?::(\d+))\)/,u=e.stack.split("\n"),h=[],f=(/^(.*) is undefined$/.exec(e.message),0),p=u.length;f<p;++f){if(n=o.exec(u[f])){var d=n[2]&&0===n[2].indexOf("native");(g=n[2]&&0===n[2].indexOf("eval"))&&(r=c.exec(n[2]))&&(n[2]=r[1],n[3]=r[2],n[4]=r[3]),a={url:d?null:n[2],func:n[1]||D,args:d?[n[2]]:[],line:n[3]?+n[3]:null,column:n[4]?+n[4]:null}}else if(n=s.exec(u[f]))a={url:n[2],func:n[1]||D,args:[],line:+n[3],column:n[4]?+n[4]:null};else{if(!(n=i.exec(u[f])))continue;var g=n[3]&&n[3].indexOf(" > eval")>-1;g&&(r=l.exec(n[3]))?(n[3]=r[1],n[4]=r[2],n[5]=null):0!==f||n[5]||void 0===e.columnNumber||(h[0].column=e.columnNumber+1),a={url:n[3],func:n[1]||D,args:n[2]?n[2].split(","):[],line:n[4]?+n[4]:null,column:n[5]?+n[5]:null}}!a.func&&a.line&&(a.func=D),h.push(a)}return h.length?{name:e.name,message:e.message,url:t(),stack:h}:null}}function r(t,e,r,n){var a={url:e,line:r};if(a.url&&a.line){if(t.incomplete=!1,a.func||(a.func=D),t.stack.length>0&&t.stack[0].url===a.url){if(t.stack[0].line===a.line)return!1;if(!t.stack[0].line&&t.stack[0].func===a.func)return t.stack[0].line=a.line,!1}return t.stack.unshift(a),t.partial=!0,!0}return t.incomplete=!0,!1}function n(e,o){for(var i,s,l=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,c=[],u={},h=!1,f=n.caller;f&&!h;f=f.caller)if(f!==a&&f!==C.report){if(s={url:null,func:D,line:null,column:null},f.name?s.func=f.name:(i=l.exec(f.toString()))&&(s.func=i[1]),void 0===s.func)try{s.func=i.input.substring(0,i.input.indexOf("{"))}catch(t){}u[""+f]?h=!0:u[""+f]=!0,c.push(s)}o&&c.splice(0,o);var p={name:e.name,message:e.message,url:t(),stack:c};return r(p,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),p}function a(r,a){var o=null;a=null==a?0:+a;try{if(o=e(r))return o}catch(t){if(C.debug)throw t}try{if(o=n(r,a+1))return o}catch(t){if(C.debug)throw t}return{name:r.name,message:r.message,url:t()}}return a.augmentStackTraceWithInitialElement=r,a.computeStackTraceFromStackProp=e,a}();var I=C,B=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,e){function r(t,e){for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}function n(t){var e={stack:t.stack,message:t.message,name:t.name};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function a(t,e){var a=[],o=[];return null==e&&(e=function(t,e){return a[0]===e?"[Circular ~]":"[Circular ~."+o.slice(0,r(a,e)).join(".")+"]"}),function(i,s){if(a.length>0){var l=r(a,this);~l?a.splice(l+1):a.push(this),~l?o.splice(l,1/0,i):o.push(i),~r(a,s)&&(s=e.call(this,i,s))}else a.push(s);return null==t?s instanceof Error?n(s):s:t.call(this,i,s)}}(t.exports=function(t,e,r,n){return JSON.stringify(t,a(e,n),r)}).getSerialize=a});(e.prototype=new Error).constructor=e;var N=e,U={wrapMethod:function(t,e,r){var n=t[e],a=t;if(e in t){var o="warn"===e?"warning":e;t[e]=function(){var t=[].slice.call(arguments),i=""+t.join(" "),s={level:o,logger:"console",extra:{arguments:t}};"assert"===e?!1===t[0]&&(i="Assertion failed: "+(t.slice(1).join(" ")||"console.assert"),s.extra.arguments=t.slice(1),r&&r(i,s)):r&&r(i,s),n&&Function.prototype.apply.call(n,a,t)}}}},L=O.isError,H=O.isObject,P=U.wrapMethod,M="source protocol user pass host port path".split(" "),F=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,q="undefined"!=typeof window?window:void 0!==S?S:"undefined"!=typeof self?self:{},A=q.document,$=q.navigator;a.prototype={VERSION:"3.18.1",debug:!1,TraceKit:I,config:function(t,e){var r=this;if(r._globalServer)return this._logDebug("error","Error: Raven has already been configured"),r;if(!t)return r;var n=r._globalOptions;e&&c(e,function(t,e){"tags"===t||"extra"===t||"user"===t?r._globalContext[t]=e:n[t]=e}),r.setDSN(t),n.ignoreErrors.push(/^Script error\.?$/),n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),n.ignoreErrors=d(n.ignoreErrors),n.ignoreUrls=!!n.ignoreUrls.length&&d(n.ignoreUrls),n.whitelistUrls=!!n.whitelistUrls.length&&d(n.whitelistUrls),n.includePaths=d(n.includePaths),n.maxBreadcrumbs=Math.max(0,Math.min(n.maxBreadcrumbs||100,100));var a={xhr:!0,console:!0,dom:!0,location:!0},o=n.autoBreadcrumbs;"[object Object]"==={}.toString.call(o)?o=u(a,o):!1!==o&&(o=a),n.autoBreadcrumbs=o;var i={tryCatch:!0},s=n.instrument;return"[object Object]"==={}.toString.call(s)?s=u(i,s):!1!==s&&(s=i),n.instrument=s,I.collectWindowErrors=!!n.collectWindowErrors,r},install:function(){var t=this;return t.isSetup()&&!t._isRavenInstalled&&(I.report.subscribe(function(){t._handleOnErrorStackInfo.apply(t,arguments)}),t._globalOptions.instrument&&t._globalOptions.instrument.tryCatch&&t._instrumentTryCatch(),t._globalOptions.autoBreadcrumbs&&t._instrumentBreadcrumbs(),t._drainPlugins(),t._isRavenInstalled=!0),Error.stackTraceLimit=t._globalOptions.stackTraceLimit,this},setDSN:function(t){var e=this,r=e._parseDSN(t),n=r.path.lastIndexOf("/"),a=r.path.substr(1,n);e._dsn=t,e._globalKey=r.user,e._globalSecret=r.pass&&r.pass.substr(1),e._globalProject=r.path.substr(n+1),e._globalServer=e._getGlobalServer(r),e._globalEndpoint=e._globalServer+"/"+a+"api/"+e._globalProject+"/store/",this._resetBackoff()},context:function(t,e,r){return i(t)&&(r=e||[],e=t,t=void 0),this.wrap(t,e).apply(this,r)},wrap:function(t,e,r){function n(){var n=[],o=arguments.length,s=!t||t&&!1!==t.deep;for(r&&i(r)&&r.apply(this,arguments);o--;)n[o]=s?a.wrap(t,arguments[o]):arguments[o];try{return e.apply(this,n)}catch(e){throw a._ignoreNextOnError(),a.captureException(e,t),e}}var a=this;if(o(e)&&!i(t))return t;if(i(t)&&(e=t,t=void 0),!i(e))return e;try{if(e.__raven__)return e;if(e.__raven_wrapper__)return e.__raven_wrapper__}catch(t){return e}for(var s in e)p(e,s)&&(n[s]=e[s]);return n.prototype=e.prototype,e.__raven_wrapper__=n,n.__raven__=!0,n.__inner__=e,n},uninstall:function(){return I.report.uninstall(),this._restoreBuiltIns(),Error.stackTraceLimit=this._originalErrorStackTraceLimit,this._isRavenInstalled=!1,this},captureException:function(t,e){if(!L(t))return this.captureMessage(t,u({trimHeadFrames:1,stacktrace:!0},e));this._lastCapturedException=t;try{var r=I.computeStackTrace(t);this._handleStackInfo(r,e)}catch(e){if(t!==e)throw e}return this},captureMessage:function(t,e){if(!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(t)){var r=u({message:t+""},e=e||{});if(this._globalOptions.stacktrace||e&&e.stacktrace){var n;try{throw new Error(t)}catch(t){n=t}n.name=null,e=u({fingerprint:t,trimHeadFrames:(e.trimHeadFrames||0)+1},e);var a=I.computeStackTrace(n),o=this._prepareFrames(a,e);r.stacktrace={frames:o.reverse()}}return this._send(r),this}},captureBreadcrumb:function(t){var e=u({timestamp:r()/1e3},t);if(i(this._globalOptions.breadcrumbCallback)){var n=this._globalOptions.breadcrumbCallback(e);if(H(n)&&!l(n))e=n;else if(!1===n)return this}return this._breadcrumbs.push(e),this._breadcrumbs.length>this._globalOptions.maxBreadcrumbs&&this._breadcrumbs.shift(),this},addPlugin:function(t){var e=[].slice.call(arguments,1);return this._plugins.push([t,e]),this._isRavenInstalled&&this._drainPlugins(),this},setUserContext:function(t){return this._globalContext.user=t,this},setExtraContext:function(t){return this._mergeContext("extra",t),this},setTagsContext:function(t){return this._mergeContext("tags",t),this},clearContext:function(){return this._globalContext={},this},getContext:function(){return JSON.parse(B(this._globalContext))},setEnvironment:function(t){return this._globalOptions.environment=t,this},setRelease:function(t){return this._globalOptions.release=t,this},setDataCallback:function(t){var e=this._globalOptions.dataCallback;return this._globalOptions.dataCallback=n(e,t),this},setBreadcrumbCallback:function(t){var e=this._globalOptions.breadcrumbCallback;return this._globalOptions.breadcrumbCallback=n(e,t),this},setShouldSendCallback:function(t){var e=this._globalOptions.shouldSendCallback;return this._globalOptions.shouldSendCallback=n(e,t),this},setTransport:function(t){return this._globalOptions.transport=t,this},lastException:function(){return this._lastCapturedException},lastEventId:function(){return this._lastEventId},isSetup:function(){return!!this._hasJSON&&(!!this._globalServer||(this.ravenNotConfiguredError||(this.ravenNotConfiguredError=!0,this._logDebug("error","Error: Raven has not been configured.")),!1))},afterLoad:function(){var t=q.RavenConfig;t&&this.config(t.dsn,t.config).install()},showReportDialog:function(t){if(A){var e=(t=t||{}).eventId||this.lastEventId();if(!e)throw new N("Missing eventId");var r=t.dsn||this._dsn;if(!r)throw new N("Missing DSN");var n=encodeURIComponent,a="";a+="?eventId="+n(e),a+="&dsn="+n(r);var o=t.user||this._globalContext.user;o&&(o.name&&(a+="&name="+n(o.name)),o.email&&(a+="&email="+n(o.email)));var i=this._getGlobalServer(this._parseDSN(r)),s=A.createElement("script");s.async=!0,s.src=i+"/api/embed/error-page/"+a,(A.head||A.body).appendChild(s)}},_ignoreNextOnError:function(){var t=this;this._ignoreOnError+=1,setTimeout(function(){t._ignoreOnError-=1})},_triggerEvent:function(t,e){var r,n;if(this._hasDocument){e=e||{},t="raven"+t.substr(0,1).toUpperCase()+t.substr(1),A.createEvent?(r=A.createEvent("HTMLEvents")).initEvent(t,!0,!0):(r=A.createEventObject()).eventType=t;for(n in e)p(e,n)&&(r[n]=e[n]);if(A.createEvent)A.dispatchEvent(r);else try{A.fireEvent("on"+r.eventType.toLowerCase(),r)}catch(t){}}},_breadcrumbEventHandler:function(t){var e=this;return function(r){if(e._keypressTimeout=null,e._lastCapturedEvent!==r){e._lastCapturedEvent=r;var n;try{n=m(r.target)}catch(t){n="<unknown>"}e.captureBreadcrumb({category:"ui."+t,message:n})}}},_keypressEventHandler:function(){var t=this;return function(e){var r;try{r=e.target}catch(t){return}var n=r&&r.tagName;if(n&&("INPUT"===n||"TEXTAREA"===n||r.isContentEditable)){var a=t._keypressTimeout;a||t._breadcrumbEventHandler("input")(e),clearTimeout(a),t._keypressTimeout=setTimeout(function(){t._keypressTimeout=null},1e3)}}},_captureUrlChange:function(t,e){var r=_(this._location.href),n=_(e),a=_(t);this._lastHref=e,r.protocol===n.protocol&&r.host===n.host&&(e=n.relative),r.protocol===a.protocol&&r.host===a.host&&(t=a.relative),this.captureBreadcrumb({category:"navigation",data:{to:e,from:t}})},_instrumentTryCatch:function(){function t(t){return function(r,n){for(var a=new Array(arguments.length),o=0;o<a.length;++o)a[o]=arguments[o];var s=a[0];return i(s)&&(a[0]=e.wrap(s)),t.apply?t.apply(this,a):t(a[0],a[1])}}var e=this,r=e._wrappedBuiltIns,n=this._globalOptions.autoBreadcrumbs;E(q,"setTimeout",t,r),E(q,"setInterval",t,r),q.requestAnimationFrame&&E(q,"requestAnimationFrame",function(t){return function(r){return t(e.wrap(r))}},r);for(var a=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],o=0;o<a.length;o++)!function(t){var a=q[t]&&q[t].prototype;a&&a.hasOwnProperty&&a.hasOwnProperty("addEventListener")&&(E(a,"addEventListener",function(r){return function(a,o,i,s){try{o&&o.handleEvent&&(o.handleEvent=e.wrap(o.handleEvent))}catch(t){}var l,c,u;return n&&n.dom&&("EventTarget"===t||"Node"===t)&&(c=e._breadcrumbEventHandler("click"),u=e._keypressEventHandler(),l=function(t){if(t){var e;try{e=t.type}catch(t){return}return"click"===e?c(t):"keypress"===e?u(t):void 0}}),r.call(this,a,e.wrap(o,void 0,l),i,s)}},r),E(a,"removeEventListener",function(t){return function(e,r,n,a){try{r=r&&(r.__raven_wrapper__?r.__raven_wrapper__:r)}catch(t){}return t.call(this,e,r,n,a)}},r))}(a[o])},_instrumentBreadcrumbs:function(){function t(t,r){t in r&&i(r[t])&&E(r,t,function(t){return e.wrap(t)})}var e=this,r=this._globalOptions.autoBreadcrumbs,n=e._wrappedBuiltIns;if(r.xhr&&"XMLHttpRequest"in q){var a=XMLHttpRequest.prototype;E(a,"open",function(t){return function(r,n){return s(n)&&-1===n.indexOf(e._globalKey)&&(this.__raven_xhr={method:r,url:n,status_code:null}),t.apply(this,arguments)}},n),E(a,"send",function(r){return function(n){function a(){if(o.__raven_xhr&&4===o.readyState){try{o.__raven_xhr.status_code=o.status}catch(t){}e.captureBreadcrumb({type:"http",category:"xhr",data:o.__raven_xhr})}}for(var o=this,s=["onload","onerror","onprogress"],l=0;l<s.length;l++)t(s[l],o);return"onreadystatechange"in o&&i(o.onreadystatechange)?E(o,"onreadystatechange",function(t){return e.wrap(t,void 0,a)}):o.onreadystatechange=a,r.apply(this,arguments)}},n)}r.xhr&&"fetch"in q&&E(q,"fetch",function(t){return function(r,n){for(var a=new Array(arguments.length),o=0;o<a.length;++o)a[o]=arguments[o];var i,s=a[0],l="GET";"string"==typeof s?i=s:(i=s.url,s.method&&(l=s.method)),a[1]&&a[1].method&&(l=a[1].method);var c={method:l,url:i,status_code:null};return e.captureBreadcrumb({type:"http",category:"fetch",data:c}),t.apply(this,a).then(function(t){return c.status_code=t.status,t})}},n),r.dom&&this._hasDocument&&(A.addEventListener?(A.addEventListener("click",e._breadcrumbEventHandler("click"),!1),A.addEventListener("keypress",e._keypressEventHandler(),!1)):(A.attachEvent("onclick",e._breadcrumbEventHandler("click")),A.attachEvent("onkeypress",e._keypressEventHandler())));var o=q.chrome,l=!(o&&o.app&&o.app.runtime)&&q.history&&history.pushState;if(r.location&&l){var u=q.onpopstate;q.onpopstate=function(){var t=e._location.href;if(e._captureUrlChange(e._lastHref,t),u)return u.apply(this,arguments)},E(history,"pushState",function(t){return function(){var r=arguments.length>2?arguments[2]:void 0;return r&&e._captureUrlChange(e._lastHref,r+""),t.apply(this,arguments)}},n)}if(r.console&&"console"in q&&console.log){var h=function(t,r){e.captureBreadcrumb({message:t,level:r.level,category:"console"})};c(["debug","info","warn","error","log"],function(t,e){P(console,e,h)})}},_restoreBuiltIns:function(){for(var t;this._wrappedBuiltIns.length;){var e=(t=this._wrappedBuiltIns.shift())[0],r=t[1],n=t[2];e[r]=n}},_drainPlugins:function(){var t=this;c(this._plugins,function(e,r){var n=r[0],a=r[1];n.apply(t,[t].concat(a))})},_parseDSN:function(t){var e=F.exec(t),r={},n=7;try{for(;n--;)r[M[n]]=e[n]||""}catch(e){throw new N("Invalid DSN: "+t)}if(r.pass&&!this._globalOptions.allowSecretKey)throw new N("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");return r},_getGlobalServer:function(t){var e="//"+t.host+(t.port?":"+t.port:"");return t.protocol&&(e=t.protocol+":"+e),e},_handleOnErrorStackInfo:function(){this._ignoreOnError||this._handleStackInfo.apply(this,arguments)},_handleStackInfo:function(t,e){var r=this._prepareFrames(t,e);this._triggerEvent("handle",{stackInfo:t,options:e}),this._processException(t.name,t.message,t.url,t.lineno,r,e)},_prepareFrames:function(t,e){var r=this,n=[];if(t.stack&&t.stack.length&&(c(t.stack,function(e,a){var o=r._normalizeFrame(a,t.url);o&&n.push(o)}),e&&e.trimHeadFrames))for(var a=0;a<e.trimHeadFrames&&a<n.length;a++)n[a].in_app=!1;return n=n.slice(0,this._globalOptions.stackTraceLimit)},_normalizeFrame:function(t,e){var r={filename:t.url,lineno:t.line,colno:t.column,function:t.func||"?"};return t.url||(r.filename=e),r.in_app=!(this._globalOptions.includePaths.test&&!this._globalOptions.includePaths.test(r.filename)||/(Raven|TraceKit)\./.test(r.function)||/raven\.(min\.)?js$/.test(r.filename)),r},_processException:function(t,e,r,n,a,o){var i=(t||"")+": "+(e||"");if(!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(i)){var s;if(a&&a.length?(r=a[0].filename||r,a.reverse(),s={frames:a}):r&&(s={frames:[{filename:r,lineno:n,in_app:!0}]}),(!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(r))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(r))){var l=u({exception:{values:[{type:t,value:e,stacktrace:s}]},culprit:r},o);this._send(l)}}},_trimPacket:function(t){var e=this._globalOptions.maxMessageLength;if(t.message&&(t.message=f(t.message,e)),t.exception){var r=t.exception.values[0];r.value=f(r.value,e)}var n=t.request;return n&&(n.url&&(n.url=f(n.url,this._globalOptions.maxUrlLength)),n.Referer&&(n.Referer=f(n.Referer,this._globalOptions.maxUrlLength))),t.breadcrumbs&&t.breadcrumbs.values&&this._trimBreadcrumbs(t.breadcrumbs),t},_trimBreadcrumbs:function(t){for(var e,r,n,a=["to","from","url"],o=0;o<t.values.length;++o)if((r=t.values[o]).hasOwnProperty("data")&&H(r.data)&&!h(r.data)){n=u({},r.data);for(var i=0;i<a.length;++i)e=a[i],n.hasOwnProperty(e)&&n[e]&&(n[e]=f(n[e],this._globalOptions.maxUrlLength));t.values[o].data=n}},_getHttpData:function(){if(this._hasNavigator||this._hasDocument){var t={};return this._hasNavigator&&$.userAgent&&(t.headers={"User-Agent":navigator.userAgent}),this._hasDocument&&(A.location&&A.location.href&&(t.url=A.location.href),A.referrer&&(t.headers||(t.headers={}),t.headers.Referer=A.referrer)),t}},_resetBackoff:function(){this._backoffDuration=0,this._backoffStart=null},_shouldBackoff:function(){return this._backoffDuration&&r()-this._backoffStart<this._backoffDuration},_isRepeatData:function(t){var e=this._lastData;return!(!e||t.message!==e.message||t.culprit!==e.culprit)&&(t.stacktrace||e.stacktrace?k(t.stacktrace,e.stacktrace):!t.exception&&!e.exception||x(t.exception,e.exception))},_setBackoffState:function(t){if(!this._shouldBackoff()){var e=t.status;if(400===e||401===e||429===e){var n;try{n=t.getResponseHeader("Retry-After"),n=1e3*parseInt(n,10)}catch(t){}this._backoffDuration=n||(2*this._backoffDuration||1e3),this._backoffStart=r()}}},_send:function(t){var e=this._globalOptions,n={project:this._globalProject,logger:e.logger,platform:"javascript"},a=this._getHttpData();a&&(n.request=a),t.trimHeadFrames&&delete t.trimHeadFrames,(t=u(n,t)).tags=u(u({},this._globalContext.tags),t.tags),t.extra=u(u({},this._globalContext.extra),t.extra),t.extra["session:duration"]=r()-this._startTime,this._breadcrumbs&&this._breadcrumbs.length>0&&(t.breadcrumbs={values:[].slice.call(this._breadcrumbs,0)}),l(t.tags)&&delete t.tags,this._globalContext.user&&(t.user=this._globalContext.user),e.environment&&(t.environment=e.environment),e.release&&(t.release=e.release),e.serverName&&(t.server_name=e.serverName),i(e.dataCallback)&&(t=e.dataCallback(t)||t),t&&!l(t)&&(i(e.shouldSendCallback)&&!e.shouldSendCallback(t)||(this._shouldBackoff()?this._logDebug("warn","Raven dropped error due to backoff: ",t):"number"==typeof e.sampleRate?Math.random()<e.sampleRate&&this._sendProcessedPayload(t):this._sendProcessedPayload(t)))},_getUuid:function(){return v()},_sendProcessedPayload:function(t,e){var r=this,n=this._globalOptions;if(this.isSetup())if(t=this._trimPacket(t),this._globalOptions.allowDuplicates||!this._isRepeatData(t)){this._lastEventId=t.event_id||(t.event_id=this._getUuid()),this._lastData=t,this._logDebug("debug","Raven about to send:",t);var a={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this._globalKey};this._globalSecret&&(a.sentry_secret=this._globalSecret);var o=t.exception&&t.exception.values[0];this.captureBreadcrumb({category:"sentry",message:o?(o.type?o.type+": ":"")+o.value:t.message,event_id:t.event_id,level:t.level||"error"});var i=this._globalEndpoint;(n.transport||this._makeRequest).call(this,{url:i,auth:a,data:t,options:n,onSuccess:function(){r._resetBackoff(),r._triggerEvent("success",{data:t,src:i}),e&&e()},onError:function(n){r._logDebug("error","Raven transport failed to send: ",n),n.request&&r._setBackoffState(n.request),r._triggerEvent("failure",{data:t,src:i}),n=n||new Error("Raven send failed (no additional details provided)"),e&&e(n)}})}else this._logDebug("warn","Raven dropped repeat event: ",t)},_makeRequest:function(t){var e=q.XMLHttpRequest&&new q.XMLHttpRequest;if(e&&("withCredentials"in e||"undefined"!=typeof XDomainRequest)){var r=t.url;"withCredentials"in e?e.onreadystatechange=function(){if(4===e.readyState)if(200===e.status)t.onSuccess&&t.onSuccess();else if(t.onError){var r=new Error("Sentry error code: "+e.status);r.request=e,t.onError(r)}}:(e=new XDomainRequest,r=r.replace(/^https?:/,""),t.onSuccess&&(e.onload=t.onSuccess),t.onError&&(e.onerror=function(){var r=new Error("Sentry error code: XDomainRequest");r.request=e,t.onError(r)})),e.open("POST",r+"?"+g(t.auth)),e.send(B(t.data))}},_logDebug:function(t){this._originalConsoleMethods[t]&&this.debug&&Function.prototype.apply.call(this._originalConsoleMethods[t],this._originalConsole,[].slice.call(arguments,1))},_mergeContext:function(t,e){o(e)?delete this._globalContext[t]:this._globalContext[t]=u(this._globalContext[t]||{},e)}};var W=Object.prototype;"undefined"!=typeof __DEV__&&__DEV__&&(a.utils={isUndefined:o,isFunction:i,isString:s,isObject:H,isEmptyObject:l,isError:L,each:c,objectMerge:u,truncate:f,hasKey:p,joinRegExp:d,urlencode:g,uuid4:v,htmlTreeAsString:m,htmlElementAsString:b,parseUrl:_,fill:E}),a.prototype.setUser=a.prototype.setUserContext,a.prototype.setReleaseContext=a.prototype.setRelease;var X=a,V="undefined"!=typeof window?window:void 0!==S?S:"undefined"!=typeof self?self:{},K=V.Raven,z=new X;z.noConflict=function(){return V.Raven=K,z},z.afterLoad();var J=z,G=function(t,e){if((e=e||window.Vue)&&e.config){var r=e.config.errorHandler;e.config.errorHandler=function(e,n,a){var o={componentName:w(n),propsData:n.$options.propsData};void 0!==a&&(o.lifecycleHook=a),t.captureException(e,{extra:o}),"function"==typeof r&&r.call(this,e,n,a)}}},Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};return function(t,e){var r={enable:!0};e&&(object=Z({},r,e)),e.enable&&(J.config((e.protocol||"https")+"://"+e.key+"@sentry.io/"+e.project,Z({},e.config)).addPlugin(G,t).install(),t.prototype.$raven=J)}});

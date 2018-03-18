!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=396)}({396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(397),a=n.n(r);a.a.apiKey="a3246545081c8decaf0185c7a7f8d402",a.a.appVersion="1.2.0",a.a.beforeNotify=function(){var e=uw.store.getState(),t=e.auth&&e.auth.user;t&&(a.a.user={id:t._id,name:t.username})}},397:function(e,t,n){var r;!function(n,a){var o,i,u={},s=!0,c=0,l=[],d=10,f=5;function m(e){try{if("function"!=typeof e)return e;if(!e.bugsnag){var t=y();e.bugsnag=function(){if(o=t,!s){var r=e.apply(this,arguments);return o=null,r}try{return e.apply(this,arguments)}catch(e){if(x("autoNotify",!0)){var a={};b(a),I({name:e.name,message:e.message,stacktrace:T(e)||D(),file:e.fileName||e.sourceURL,lineNumber:e.lineNumber||e.line,columnNumber:e.columnNumber?e.columnNumber+1:void 0},a,{originalSeverity:"error",unhandled:!0,severityReason:{type:"unhandledException"}}),c+=1,n.setTimeout(function(){c-=1})}throw e}finally{o=null}},e.bugsnag.bugsnag=e.bugsnag}return e.bugsnag}catch(t){return e}}u.breadcrumbLimit=20,u.noConflict=function(){return n.Bugsnag=a,void 0===a&&delete n.Bugsnag,u},u.refresh=function(){d=10},u.notifyException=function(e,t,n,r){if(!e){var a="Bugsnag.notifyException() was called with no arguments";return R(a),void u.notify("BugsnagNotify",a)}if("string"==typeof e)return R("Bugsnag.notifyException() was called with a string. Expected instance of Error. To send a custom message instantiate a new Error or use Bugsnag.notify('<string>'). see https://docs.bugsnag.com/platforms/browsers/#reporting-handled-exceptions"),void u.notify.apply(null,arguments);t&&"string"!=typeof t&&(n=t,t=void 0),n||(n={}),b(n),I({name:t||e.name,message:e.message||e.description,stacktrace:T(e)||D(),file:e.fileName||e.sourceURL,lineNumber:e.lineNumber||e.line,columnNumber:e.columnNumber?e.columnNumber+1:void 0,severity:r},n,{originalSeverity:"warning",unhandled:!1,severityReason:{type:"handledException"}})},u.notify=function(e,t,r,a){e||(e="BugsnagNotify",R(t="Bugsnag.notify() was called with no arguments")),I({name:e,message:t,stacktrace:D(),file:""+n.location,lineNumber:1,severity:a},r,{originalSeverity:"warning",unhandled:!1,severityReason:{type:"handledError"}})},u.leaveBreadcrumb=function(e,t){var n={type:"manual",name:"Manual",timestamp:(new Date).getTime()};switch(typeof e){case"object":n=L(n,e);break;case"string":t&&"object"==typeof t?n=L(n,{name:e,metaData:t}):n.metaData={message:e};break;default:return void R("expecting 1st argument to leaveBreadcrumb to be a 'string' or 'object', got "+typeof e)}for(var r=["manual","error","log","navigation","process","request","state","user"],a=!1,o=0;o<8;o++)if(r[o]===n.type){a=!0;break}a||(R("Converted invalid breadcrumb type '"+n.type+"' to 'manual'"),n.type="manual");var i,s,c,d=l.slice(-1)[0];if(s=d,(i=n)&&s&&i.type===s.type&&i.name===s.name&&(c=s.metaData,k(i.metaData)===k(c)))d.count=d.count||1,d.count++;else{var m=Math.min(u.breadcrumbLimit,40);n.name=j(n.name,32),l.push(function e(t,n,r){var a=(r||0)+1;var o=x("maxDepth",f);if(r>o)return"[RECURSIVE]";if("string"==typeof t)return j(t,n);if("[object Array]"===Object.prototype.toString.call(t)){for(var i=[],u=0;u<t.length;u++)i[u]=e(t[u],n,a);return i}if("object"==typeof t&&null!=t){var s={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(s[c]=e(t[c],n,a));return s}return t}(n,140)),l.length>m&&(l=l.slice(-m))}};var p=void 0!==n.addEventListener;u.enableAutoBreadcrumbsConsole=function(){},u.disableAutoBreadcrumbsConsole=function(){},u.enableAutoBreadcrumbsNavigation=function(){},u.disableAutoBreadcrumbsNavigation=function(){},u.enableAutoBreadcrumbsErrors=function(){u.autoBreadcrumbsErrors=!0},u.disableAutoBreadcrumbsErrors=function(){u.autoBreadcrumbsErrors=!1},u.enableAutoBreadcrumbsClicks=function(){u.autoBreadcrumbsClicks=!0},u.disableAutoBreadcrumbsClicks=function(){u.autoBreadcrumbsClicks=!1},u.enableAutoBreadcrumbs=function(){u.enableAutoBreadcrumbsClicks(),u.enableAutoBreadcrumbsConsole(),u.enableAutoBreadcrumbsErrors(),u.enableAutoBreadcrumbsNavigation()},u.disableAutoBreadcrumbs=function(){u.disableAutoBreadcrumbsClicks(),u.disableAutoBreadcrumbsConsole(),u.disableAutoBreadcrumbsErrors(),u.disableAutoBreadcrumbsNavigation()},u.enableNotifyUnhandledRejections=function(){u.notifyUnhandledRejections=!0},u.disableNotifyUnhandledRejections=function(){u.notifyUnhandledRejections=!1};var g="complete"!==document.readyState;function v(){g=!1}function y(){var e=document.currentScript||o;if(!e&&g){var t=document.scripts||document.getElementsByTagName("script");e=t[t.length-1]}return e}function b(e){var t=y();t&&(e.script={src:t.src,content:x("inlineScript",!0)?t.innerHTML:""})}document.addEventListener?(document.addEventListener("DOMContentLoaded",v,!0),n.addEventListener("load",v,!0)):n.attachEvent("onload",v);var h,N=/^[0-9a-f]{32}$/i,B=/function\s*([\w\-$]+)?\s*\(/i,S="https://notify.bugsnag.com/js",E="3.3.2",w=document.getElementsByTagName("script"),A=w[w.length-1];function C(e,t,n){var r=e[t];e[t]=function(){n.apply(this,arguments),"function"==typeof r&&r.apply(this,arguments)}}function R(e){var t=x("disableLog"),r=n.console;void 0===r||void 0===r.log||t||r.log("[Bugsnag] "+e)}function j(e,t){return e&&e.length>t?e.slice(0,t-5)+"(...)":e}function k(e,t,r){if(r>=x("maxDepth",f))return encodeURIComponent(t)+"=[RECURSIVE]";r=r+1||1;try{if(n.Node&&e instanceof n.Node)return encodeURIComponent(t)+"="+encodeURIComponent(function(e){if(e){var t=e.attributes;if(t){for(var n="<"+e.nodeName.toLowerCase(),r=0;r<t.length;r++)t[r].value&&""+t[r].value!="null"&&(n+=" "+t[r].name+'="'+t[r].value+'"');return n+">"}return e.nodeName}}(e));var a=[];for(var o in e)if((!e.hasOwnProperty||e.hasOwnProperty(o))&&null!=o&&null!=e[o]){var i=t?t+"["+o+"]":o,u=e[o];a.push("object"==typeof u?k(u,i,r):encodeURIComponent(i)+"="+encodeURIComponent(u))}return a.sort().join("&")}catch(e){return encodeURIComponent(t)+"="+encodeURIComponent(""+e)}}function L(e,t,n){if(null==t)return e;if(n>=x("maxDepth",f))return"[RECURSIVE]";for(var r in e=e||{},t)if(t.hasOwnProperty(r))try{e[r]=t[r].constructor===Object?L(e[r],t[r],n+1||1):t[r]}catch(n){e[r]=t[r]}return e}function x(e,t){h=h||function(e){var t={},n=/^data\-([\w\-]+)$/;if(e)for(var r=e.attributes,a=0;a<r.length;a++){var o=r[a];n.test(o.nodeName)&&(t[o.nodeName.match(n)[1]]=o.value||o.nodeValue)}return t}(A);var n=void 0!==u[e]?u[e]:h[e.toLowerCase()];return"false"===n&&(n=!1),"notifyReleaseStages"===e&&"string"==typeof n&&(n=n.split(/\s*,\s*/)),void 0!==n?n:t}function U(e){return x(e,x("autoBreadcrumbs",!0))}function I(e,t,r){var a=x("apiKey");if(function(e){return!(!e||!e.match(N))||(R("Invalid API key '"+e+"'"),!1)}(a)&&d){d-=1;var o=x("releaseStage","production"),s=x("notifyReleaseStages");if(s){for(var c=!1,f=0;f<s.length;f++)if(o===s[f]){c=!0;break}if(!c)return}var m=[e.name,e.message,e.stacktrace].join("|");if(m!==i){i=m;var p={device:{time:(new Date).getTime()}},g={notifierVersion:E,apiKey:a,projectRoot:x("projectRoot")||n.location.protocol+"//"+n.location.host,context:x("context")||n.location.pathname,user:x("user"),metaData:L(L(p,x("metaData")),t),releaseStage:o,appVersion:x("appVersion"),url:n.location.href,userAgent:navigator.userAgent,language:navigator.language||navigator.userLanguage,severity:e.severity,name:e.name,message:e.message,stacktrace:e.stacktrace,file:e.file,lineNumber:e.lineNumber,columnNumber:e.columnNumber,breadcrumbs:l,payloadVersion:"3"},v=e.severity,y=v&&v!==r.originalSeverity;y&&(g.severity=new String(y),g.severity.__userSpecifiedSeverity=!0);var b=u.beforeNotify;if("function"==typeof b)if(!1===b(g,g.metaData))return;var h=g.severity;if(h&&!h.__userSpecifiedSeverity&&h!==r.originalSeverity?(g.severity=h,g.severityReason={type:"userCallbackSetSeverity"}):y?(g.severity=v,g.severityReason={type:"userSpecifiedSeverity"}):(g.severity=r.originalSeverity,g.severityReason=r.severityReason),g.unhandled=r.unhandled,0===g.lineNumber&&/Script error\.?/.test(g.message))return R("Ignoring cross-domain or eval script error. See https://docs.bugsnag.com/platforms/browsers/faq/#3-cross-origin-script-errors");!function(e,t){if(e+="?"+k(t)+"&ct=img&cb="+(new Date).getTime(),"undefined"!=typeof BUGSNAG_TESTING&&u.testRequest)u.testRequest(e,t);else if("xhr"===x("notifyHandler")){var n=new XMLHttpRequest;n.open("GET",e,!0),n.send()}else(new Image).src=e}(x("endpoint")||S,g)}}}function D(){var e,t;try{throw Error("")}catch(n){e="<generated>\n",t=T(n)}if(!t){e="<generated-ie>\n";var n=[];try{for(var r=arguments.callee.caller.caller;r&&n.length<10;){var a=B.test(""+r)&&RegExp.$1||"[anonymous]";n.push(a),r=r.caller}}catch(e){R(e)}t=n.join("\n")}return e+t}function T(e){return e.stack||e.backtrace||e.stacktrace}if(u._serialize=k,n.atob){if(n.ErrorEvent)try{0===new n.ErrorEvent("test").colno&&(s=!1)}catch(e){}}else s=!1;function O(e,t,r){var a=e[t],o=r(a);e[t]=o,"undefined"!=typeof BUGSNAG_TESTING&&n.undo&&n.undo.push(function(){e[t]=a})}if(x("autoNotify",!0)){O(n,"onerror",function(e){return"undefined"!=typeof BUGSNAG_TESTING&&(u._onerror=e),function(t,r,a,i,s){var l,d,f=x("autoNotify",!0),m={};(!i&&n.event&&(i=n.event.errorCharacter),b(m),o=null,f&&!c)&&(1===arguments.length?(l=t&&t.type?"Event: "+t.type:"window.onerror",d=t&&t.detail?t.detail:void 0,m.event=t):(l=s&&s.name||"window.onerror",d=t),I({name:l,message:d,file:r,lineNumber:a,columnNumber:i,stacktrace:s&&T(s)||D()},m,{originalSeverity:"error",unhandled:!0,severityReason:{type:"unhandledException"}}),U("autoBreadcrumbsErrors")&&u.leaveBreadcrumb({type:"error",name:l,metaData:{severity:"error",file:r,message:d,line:a}}));"undefined"!=typeof BUGSNAG_TESTING&&(e=u._onerror),e&&e(t,r,a,i,s)}});var _=function(e){return function(t,n){if("function"==typeof t){t=m(t);var r=Array.prototype.slice.call(arguments,2);return e(function(){t.apply(this,r)},n)}return e(t,n)}};O(n,"setTimeout",_),O(n,"setInterval",_),n.requestAnimationFrame&&O(n,"requestAnimationFrame",function(e){return function(t){return e(m(t))}}),n.setImmediate&&O(n,"setImmediate",function(e){return function(){var t=Array.prototype.slice.call(arguments);return t[0]=m(t[0]),e.apply(this,t)}}),"onunhandledrejection"in n&&n.addEventListener("unhandledrejection",function(e){if(x("notifyUnhandledRejections",!1)){var t=e.reason;t||(t={});var n={};b(n),t.message||(n.promiseRejectionValue=t),I({name:t.name?t.name:"UnhandledRejection",message:t.message?t.message:"",stacktrace:T(t)||D(),file:t.fileName||t.sourceURL,lineNumber:t.lineNumber||t.line,columnNumber:t.columnNumber?t.columnNumber+1:void 0},n,{originalSeverity:"error",unhandled:!0,severityReason:{type:"unhandledPromiseRejection"}})}})}p&&n.addEventListener("click",function(e){if(U("autoBreadcrumbsClicks")){var t,n;try{a=(r=e.target).textContent||r.innerText||"","submit"!==r.type&&"button"!==r.type||(a=r.value),t=j(a=a.replace(/^\s+|\s+$/g,""),140),n=function e(t){var n=[t.tagName];if(t.id&&n.push("#"+t.id),t.className&&t.className.length){var r="."+t.className.split(" ").join(".");n.push(r)}var a=n.join("");if(!document.querySelectorAll||!Array.prototype.indexOf)return a;try{if(1===document.querySelectorAll(a).length)return a}catch(e){return a}if(t.parentNode.childNodes.length>1){var o=Array.prototype.indexOf.call(t.parentNode.childNodes,t)+1;a=a+":nth-child("+o+")"}return 1===document.querySelectorAll(a).length?a:t.parentNode?e(t.parentNode)+" > "+a:a}(e.target)}catch(e){t="[hidden]",n="[hidden]",R("Cross domain error when tracking click event. See https://docs.bugsnag.com/platforms/browsers/faq/#3-cross-origin-script-errors")}u.leaveBreadcrumb({type:"user",name:"UI click",metaData:{targetText:t,targetSelector:n}})}var r,a},!0),function(){function e(e,t){U("autoBreadcrumbsConsole")&&u.leaveBreadcrumb({type:"log",name:"Console output",metaData:{severity:e,message:Array.prototype.slice.call(t).join(", ")}})}if(void 0!==n.console){var t=console.log,r=console.warn,a=console.error,o=console.group,i=console.groupCollapsed;u.enableAutoBreadcrumbsConsole=function(){u.autoBreadcrumbsConsole=!0,C(console,"log",function(){e("log",arguments)}),C(console,"warn",function(){e("warn",arguments)}),C(console,"error",function(){e("error",arguments)}),C(console,"group",function(){e("log",["[group]"].concat(Array.prototype.slice.call(arguments)))}),C(console,"groupCollapsed",function(){e("log",["[group]"].concat(Array.prototype.slice.call(arguments)))})},u.disableAutoBreadcrumbsConsole=function(){u.autoBreadcrumbsConsole=!1,console.log=t,console.warn=r,console.error=a,console.group=o,console.groupCollapsed=i},U("autoBreadcrumbsConsole")&&u.enableAutoBreadcrumbsConsole()}}(),function(){function e(e){return e.split("#")[1]||""}function t(e,t,n,r){var a=location.pathname+location.search+location.hash;return{type:"navigation",name:"History "+e,metaData:{from:a,to:r||a,prevState:history.state,nextState:t}}}function r(e,n,r){return t("pushState",e,0,r)}function a(e,n,r){return t("replaceState",e,0,r)}function o(e){return function(){U("autoBreadcrumbsNavigation")&&u.leaveBreadcrumb(e.apply(null,arguments))}}if(p&&n.history&&n.history.state&&n.history.pushState&&n.history.pushState.bind){var i=history.pushState,s=history.replaceState;u.enableAutoBreadcrumbsNavigation=function(){u.autoBreadcrumbsNavigation=!0,C(history,"pushState",o(r)),C(history,"replaceState",o(a))},u.disableAutoBreadcrumbsNavigation=function(){u.autoBreadcrumbsNavigation=!1,history.pushState=i,history.replaceState=s},n.addEventListener("hashchange",o(function(t){var n=t.oldURL,r=t.newURL,a={};return n&&r?(a.from=e(n),a.to=e(r)):a.to=location.hash,{type:"navigation",name:"Hash changed",metaData:a}}),!0),n.addEventListener("popstate",o(function(){return{type:"navigation",name:"Navigated back"}}),!0),n.addEventListener("pagehide",o(function(){return{type:"navigation",name:"Page hidden"}}),!0),n.addEventListener("pageshow",o(function(){return{type:"navigation",name:"Page shown"}}),!0),n.addEventListener("load",o(function(){return{type:"navigation",name:"Page loaded"}}),!0),n.addEventListener("DOMContentLoaded",o(function(){return{type:"navigation",name:"DOMContentLoaded"}}),!0),U("autoBreadcrumbsNavigation")&&u.enableAutoBreadcrumbsNavigation()}}(),x("autoBreadcrumbs",!0)&&u.leaveBreadcrumb({type:"navigation",name:"Bugsnag Loaded"}),n.Bugsnag=u,void 0===(r=function(){return u}.apply(t,[]))||(e.exports=r)}(window,window.Bugsnag)}});
//# sourceMappingURL=bugsnag_297bba2.js.map
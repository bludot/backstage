/*! For license information please see 81ccf1c8.d93bd061.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[60056],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=n.createContext({}),p=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(f.Provider,{value:t},e.children)},l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,f=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=p(r),y=o,b=l["".concat(f,".").concat(y)]||l[y]||s[y]||c;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=y;var a={};for(var f in t)hasOwnProperty.call(t,f)&&(a[f]=t[f]);a.originalType=e,a[l]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},634778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>f,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>l});r(827378);var n=r(603905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={id:"config.appconfig",title:"AppConfig",description:"API reference for AppConfig"},f=void 0,p={unversionedId:"reference/config.appconfig",id:"reference/config.appconfig",title:"AppConfig",description:"API reference for AppConfig",source:"@site/../docs/reference/config.appconfig.md",sourceDirName:"reference",slug:"/reference/config.appconfig",permalink:"/docs/reference/config.appconfig",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config.appconfig.md",tags:[],version:"current",frontMatter:{id:"config.appconfig",title:"AppConfig",description:"API reference for AppConfig"}},u={},l=[],s={toc:l};function y(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",c(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},s,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/reference/"},"Home")," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/config"},(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/config"))," ",">"," ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/config.appconfig"},(0,n.kt)("inlineCode",{parentName:"a"},"AppConfig"))),(0,n.kt)("p",null,"A serialized form of configuration data that carries additional context."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"type AppConfig = {\n    context: string;\n    data: JsonObject;\n    filteredKeys?: string[];\n    deprecatedKeys?: {\n        key: string;\n        description: string;\n    }[];\n};\n")),(0,n.kt)("b",null,"References:")," [JsonObject](/docs/reference/types.jsonobject)")}y.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var i,a,f=o(e),p=1;p<arguments.length;p++){for(var u in i=Object(arguments[p]))r.call(i,u)&&(f[u]=i[u]);if(t){a=t(i);for(var l=0;l<a.length;l++)n.call(i,a[l])&&(f[a[l]]=i[a[l]])}}return f}},541535:(e,t,r)=>{var n=r(862525),o=60103,c=60106;var i=60109,a=60110,f=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),i=l("react.provider"),a=l("react.context"),f=l("react.forward_ref"),l("react.suspense"),p=l("react.memo"),u=l("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function d(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||b}function m(){}function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||b}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=d.prototype;var v=O.prototype=new m;v.constructor=O,n(v,d.prototype),v.isPureReactComponent=!0;var h={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,c={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(c[n]=t[n]);var f=arguments.length-2;if(1===f)c.children=r;else if(1<f){for(var p=Array(f),u=0;u<f;u++)p[u]=arguments[u+2];c.children=p}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===c[n]&&(c[n]=f[n]);return{$$typeof:o,type:e,key:i,ref:a,props:c,_owner:h.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var f=!1;if(null===e)f=!0;else switch(a){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case o:case c:f=!0}}if(f)return i=i(f=e),e=""===n?"."+_(f,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),C(i,t,r,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||f&&f.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(f=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=n+_(a=e[p],p);f+=C(a,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),p=0;!(a=e.next()).done;)f+=C(a=a.value,t,r,u=n+_(a,p++),i);else if("object"===a)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return f}function E(e,t,r){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function D(){var e=A.current;if(null===e)throw Error(y(321));return e}},827378:(e,t,r)=>{r(541535)}}]);
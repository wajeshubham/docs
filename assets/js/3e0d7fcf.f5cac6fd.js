"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[78832],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},17913:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:2},c="Connection Config",u={unversionedId:"reference/connection-config",id:"version-0.4.x/reference/connection-config",isDocsHomePage:!1,title:"Connection Config",description:"| Property name   | Data type | Required                 | Use                                                                                                                                                                                                                      |",source:"@site/react-native_versioned_docs/version-0.4.x/reference/connection-config.mdx",sourceDirName:"reference",slug:"/reference/connection-config",permalink:"/react-native/0.4.x/reference/connection-config",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.4.x/reference/connection-config.mdx",tags:[],version:"0.4.x",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1656319568,formattedLastUpdatedAt:"6/27/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.4.0/mainSidebar",previous:{title:"DyteMeeting (React component)",permalink:"/react-native/0.4.x/reference/dyte-meeting"},next:{title:"Meeting",permalink:"/react-native/0.4.x/reference/meeting"}},p=[],d={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connection-config"},"Connection Config"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Use"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"authToken"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Auth token for the particpant")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"roomName"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"Meeting name to join")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"showSetupScreen"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"No (defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"Show audio / video setup screen to the participant")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"autoTune"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"No (defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"Dyte uses VP9 codec by default, but switches to H264/VP8 depending on participants video codec support. VP9 is a superior codec but not all browsers support it. If you disable ",(0,o.kt)("inlineCode",{parentName:"td"},"autoTune")," Dyte will use VP8 by default.")))))}s.isMDXComponent=!0}}]);
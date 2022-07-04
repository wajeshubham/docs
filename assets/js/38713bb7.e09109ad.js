"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[32614],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},26594:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:2},p="DyteMeetingConfig",u={unversionedId:"reference/connection-config",id:"version-1.12/reference/connection-config",isDocsHomePage:!1,title:"DyteMeetingConfig",description:"| Property name   | Data type | Required                   | Use                                                                                                                                                                                                                      |",source:"@site/ios_versioned_docs/version-1.12/reference/connection-config.mdx",sourceDirName:"reference",slug:"/reference/connection-config",permalink:"/ios/1.12/reference/connection-config",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-1.12/reference/connection-config.mdx",tags:[],version:"1.12",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1656917641,formattedLastUpdatedAt:"7/4/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-1.12/mainSidebar",previous:{title:"Sample app",permalink:"/ios/1.12/sample-app"},next:{title:"DyteMeetingView",permalink:"/ios/1.12/reference/meeting"}},c=[],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dytemeetingconfig"},"DyteMeetingConfig"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authToken"),(0,i.kt)("td",{parentName:"tr",align:null},"NSString"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Auth token for the particpant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"roomName"),(0,i.kt)("td",{parentName:"tr",align:null},"NSString"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Meeting name to join")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"showSetupScreen"),(0,i.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,i.kt)("td",{parentName:"tr",align:null},"No (defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Show audio / video setup screen to the participant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"autoTune"),(0,i.kt)("td",{parentName:"tr",align:null},"BOOL"),(0,i.kt)("td",{parentName:"tr",align:null},"No (defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Dyte uses VP9 codec by default, but switches to H264/VP8 depending on participants video codec support. VP9 is a superior codec but not all browsers support it. If you disable ",(0,i.kt)("inlineCode",{parentName:"td"},"autoTune")," Dyte will use VP8 by default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"width"),(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null},"Width of the meeting view"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"height"),(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null},"Height of the meeting view"),(0,i.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);
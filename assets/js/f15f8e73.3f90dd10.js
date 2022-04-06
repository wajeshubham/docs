"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[14565],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90132:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={sidebar_position:2},s="Quickstart",p={unversionedId:"quickstart",id:"version-0.23.x/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Get the roomName for the meeting and the participant's authToken from our backend APIs (read more about our server APIs here), and pass them as props to Dyte's DyteMeeting React Native component.",source:"@site/react-native_versioned_docs/version-0.23.x/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/react-native/quickstart",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.23.x/quickstart.mdx",tags:[],version:"0.23.x",lastUpdatedBy:"Palash",lastUpdatedAt:1649241630,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.23.x/mainSidebar",previous:{title:"Installation",permalink:"/react-native/installation"},next:{title:"Basic Usage",permalink:"/react-native/usage"}},u=[],l={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Get the ",(0,o.kt)("inlineCode",{parentName:"p"},"roomName")," for the meeting and the participant's ",(0,o.kt)("inlineCode",{parentName:"p"},"authToken")," from our backend APIs (read more about our server APIs ",(0,o.kt)("a",{parentName:"p",href:"/api/"},"here"),"), and pass them as props to Dyte's ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," React Native component."),(0,o.kt)("p",null,"You can initialize a meeting in your React Native app, using this component, like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { DyteMeeting } from "@dytesdk/mobile";\n\nfunction App() {\n  return (\n    <DyteMeeting\n      onInit={(meeting) => {}}\n      clientId={`orgId || clientId`}\n      meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`,\n      }}\n    />\n  );\n}\n\nexport default App;\n')))}m.isMDXComponent=!0}}]);
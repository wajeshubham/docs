"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[80145],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67502:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={sidebar_position:3},u="Basic Usage",s={unversionedId:"usage",id:"version-0.3.x/usage",isDocsHomePage:!1,title:"Basic Usage",description:"Include Dyte's Flutter widget in your app",source:"@site/flutter_versioned_docs/version-0.3.x/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/flutter/0.3.x/usage",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.3.x/usage.mdx",tags:[],version:"0.3.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1649321072,formattedLastUpdatedAt:"4/7/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.3.2/mainSidebar",previous:{title:"Quickstart",permalink:"/flutter/0.3.x/quickstart"},next:{title:"Customize the meeting UI",permalink:"/flutter/0.3.x/customize-meeting-ui"}},l=[{value:"Include Dyte&#39;s Flutter widget in your app",id:"include-dytes-flutter-widget-in-your-app",children:[{value:"Configure the meeting connection",id:"configure-the-meeting-connection",children:[]},{value:"Get meeting instance on successful creation",id:"get-meeting-instance-on-successful-creation",children:[]}]}],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("h2",{id:"include-dytes-flutter-widget-in-your-app"},"Include Dyte's Flutter widget in your app"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./reference/dyte-meeting"},(0,a.kt)("inlineCode",{parentName:"a"},"DyteMeeting"))," is a Flutter widget that can be used in your Flutter application to show the Dyte Meeting UI."),(0,a.kt)("p",null,"It has 3 mandatory and 2 optional properties. The mandatory ones are defined below along with their usage, and the optional ones can be found ",(0,a.kt)("a",{parentName:"p",href:"./advanced-usage#turn-on-the-setup--preview-screen"},"here in the advanced usage")," page."),(0,a.kt)("h3",{id:"configure-the-meeting-connection"},"Configure the meeting connection"),(0,a.kt)("p",null,"You need to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"authToken")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"roomName")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," to define which meeting should the client connect to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"{5-6}","{5-6}":!0},'SizedBox(\n    width: <width>,\n    height: <height>,\n    child: DyteMeeting(\n        roomName: "<roomName>",\n        authToken: "<authToken>",\n    )\n)\n')),(0,a.kt)("h3",{id:"get-meeting-instance-on-successful-creation"},"Get meeting instance on successful creation"),(0,a.kt)("p",null,"You need to pass an ",(0,a.kt)("inlineCode",{parentName:"p"},"onInit")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," to get reference to the meeting instance that is created. ",(0,a.kt)("inlineCode",{parentName:"p"},"onInit")," is an async callback function which has a single param of type ",(0,a.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,a.kt)("inlineCode",{parentName:"a"},"DyteMeetingHandler")),". This ",(0,a.kt)("inlineCode",{parentName:"p"},"DyteMeetingHandler")," reference can be used to take further actions and make customizations to the meeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart",metastring:"{7-9}","{7-9}":!0},'SizedBox(\n    width: <width>,\n    height: <height>,\n    child: DyteMeeting(\n        roomName: "<roomName>",\n        authToken: "<authToken>",\n        onInit: (DyteMeetingHandler meeting) async {\n          // your handler\n        },\n    )\n)\n')))}d.isMDXComponent=!0}}]);
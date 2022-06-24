"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[72059],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(r),u=o,m=p["".concat(d,".").concat(u)]||p[u]||g[u]||i;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},25295:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={sidebar_position:15,web_core_version:"0.24.0"},d=void 0,l={unversionedId:"Reference/DyteRecording",id:"version-0.24.x/Reference/DyteRecording",isDocsHomePage:!1,title:"DyteRecording",description:"The DyteRecording module represents the state of the current recording, and allows",source:"@site/web-core_versioned_docs/version-0.24.x/Reference/DyteRecording.md",sourceDirName:"Reference",slug:"/Reference/DyteRecording",permalink:"/web-core/0.24.x/Reference/DyteRecording",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.24.x/Reference/DyteRecording.md",tags:[],version:"0.24.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:15,frontMatter:{sidebar_position:15,web_core_version:"0.24.0"},sidebar:"version-0.24.x/mainSidebar",previous:{title:"DyteRemote",permalink:"/web-core/0.24.x/Reference/DyteRemote"}},s=[{value:"meeting.recording.recordingId",id:"meetingrecordingrecordingid",children:[]},{value:"meeting.recording.start()",id:"meetingrecordingstart",children:[]},{value:"meeting.recording.stop()",id:"meetingrecordingstop",children:[]},{value:"meeting.recording.refreshActiveRecordingState()",id:"meetingrecordingrefreshactiverecordingstate",children:[]}],g={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"module_DyteRecording"}),(0,i.kt)("p",null,"The DyteRecording module represents the state of the current recording, and allows\nto start/stop recordings and check if there's a recording in progress."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DyteRecording"},"DyteRecording"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DyteRecording+recordingId"},".recordingId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DyteRecording+start"},".start()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DyteRecording+stop"},".stop()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DyteRecording+refreshActiveRecordingState"},".refreshActiveRecordingState()"))))),(0,i.kt)("a",{name:"module_DyteRecording+recordingId"}),(0,i.kt)("h3",{id:"meetingrecordingrecordingid"},"meeting.recording.recordingId"),(0,i.kt)("p",null,"NOTE(CallMeTarush):\nNot setting recording state here, waiting for recording\npeer to join to set state automatically"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,i.kt)("a",{parentName:"p",href:"#module_DyteRecording"},(0,i.kt)("code",null,"DyteRecording")),"  "),(0,i.kt)("a",{name:"module_DyteRecording+start"}),(0,i.kt)("h3",{id:"meetingrecordingstart"},"meeting.recording.start()"),(0,i.kt)("p",null,"Starts recording the meeting."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DyteRecording"},(0,i.kt)("code",null,"DyteRecording")),"  "),(0,i.kt)("a",{name:"module_DyteRecording+stop"}),(0,i.kt)("h3",{id:"meetingrecordingstop"},"meeting.recording.stop()"),(0,i.kt)("p",null,"Stops recording the meeting assuming there\nis a recording in progress."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DyteRecording"},(0,i.kt)("code",null,"DyteRecording")),"  "),(0,i.kt)("a",{name:"module_DyteRecording+refreshActiveRecordingState"}),(0,i.kt)("h3",{id:"meetingrecordingrefreshactiverecordingstate"},"meeting.recording.refreshActiveRecordingState()"),(0,i.kt)("p",null,"Refreshes current recording state."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DyteRecording"},(0,i.kt)("code",null,"DyteRecording"))))}p.isMDXComponent=!0}}]);
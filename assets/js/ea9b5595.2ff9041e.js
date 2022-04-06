"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[56666],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42249:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=n(55064),l=n(58215),u=["components"],s={sidebar_position:5},c="Advanced usage",d={unversionedId:"advanced-usage",id:"version-1.12/advanced-usage",isDocsHomePage:!1,title:"Advanced usage",description:"Turn on the setup / preview screen",source:"@site/ios_versioned_docs/version-1.12/advanced-usage.mdx",sourceDirName:".",slug:"/advanced-usage",permalink:"/ios/1.12/advanced-usage",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-1.12/advanced-usage.mdx",tags:[],version:"1.12",lastUpdatedBy:"kushagra12",lastUpdatedAt:1649252636,formattedLastUpdatedAt:"4/6/2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-1.12/mainSidebar",previous:{title:"Basic Usage",permalink:"/ios/1.12/usage"},next:{title:"Events",permalink:"/ios/1.12/events"}},p=[{value:"Turn on the setup / preview screen",id:"turn-on-the-setup--preview-screen",children:[]},{value:"Dynamic codec switching",id:"dynamic-codec-switching",children:[]},{value:"Control the meeting, and take meeting &amp; participant actions",id:"control-the-meeting-and-take-meeting--participant-actions",children:[]},{value:"Replace the meeting control buttons with your own buttons",id:"replace-the-meeting-control-buttons-with-your-own-buttons",children:[{value:"Mic control",id:"mic-control",children:[]},{value:"Camera control",id:"camera-control",children:[]}]}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-usage"},"Advanced usage"),(0,o.kt)("h2",{id:"turn-on-the-setup--preview-screen"},"Turn on the setup / preview screen"),(0,o.kt)("p",null,"The audio / video setup screen that appears for the participant right before getting into the meeting is turned off by default. You can set ",(0,o.kt)("inlineCode",{parentName:"p"},"showSetupScreen")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to turn it on (default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{8}","{8}":!0},'import DyteSdk;\n\nlet  config = DyteMeetingConfig();\nmeetingConfig.roomName = "YOUR_ROOM_NAME";\nmeetingConfig.authToken = "YOUR_AUTH_TOKEN";\nmeetingConfig.width = self.view.frame.size.width\nmeetingConfig.height = self.view.frame.size.height\nmeetingConfig.showSetupScreen = true\n'))),(0,o.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec",metastring:"{8}","{8}":!0},'@import DyteSdk;\n\nDyteMeetingConfig *meetingConfig = [[DyteMeetingConfig alloc] init];\nmeetingConfig.roomName = @"YOUR_ROOM_NAME";\nmeetingConfig.authToken = @"YOUR_AUTH_TOKEN";\nmeetingConfig.width = self.view.frame.size.width;\nmeetingConfig.height = self.view.frame.size.height;\nmeetingConfig.showSetupScreen = YES;\n')))),(0,o.kt)("h2",{id:"dynamic-codec-switching"},"Dynamic codec switching"),(0,o.kt)("p",null,"Dyte uses VP9 codec by default, but switches to H264/VP8 depending on participants' video codec support. VP9 is a superior codec but not all browsers support it. If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"autoTune")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"meetingConfig")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", Dyte will use VP8 only for all participants (default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,o.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{8}","{8}":!0},'import DyteSdk;\n\nlet  config = DyteMeetingConfig();\nmeetingConfig.roomName = "YOUR_ROOM_NAME";\nmeetingConfig.authToken = "YOUR_AUTH_TOKEN";\nmeetingConfig.width = self.view.frame.size.width\nmeetingConfig.height = self.view.frame.size.height\nmeetingConfig.autoTune = true\n'))),(0,o.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec",metastring:"{8}","{8}":!0},'@import DyteSdk;\n\nDyteMeetingConfig *meetingConfig = [[DyteMeetingConfig alloc] init];\nmeetingConfig.roomName = @"YOUR_ROOM_NAME";\nmeetingConfig.authToken = @"YOUR_AUTH_TOKEN";\nmeetingConfig.width = self.view.frame.size.width;\nmeetingConfig.height = self.view.frame.size.height;\nmeetingConfig.autoTune = YES;\n')))),(0,o.kt)("h2",{id:"control-the-meeting-and-take-meeting--participant-actions"},"Control the meeting, and take meeting & participant actions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteMeetingView")," instance (referenced as ",(0,o.kt)("inlineCode",{parentName:"p"},"dyteView"),") helps you interact with the meeting. You can take actions on the meeting as well as the participants. You can also setup custom controls to that interact with the meeting in certain ways that help you send events and messages across to other participants in the meeting. You can find the complete reference to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DyteMeetingView")," type ",(0,o.kt)("a",{parentName:"p",href:"./reference/meeting"},"here"),". Read on to understand how to use these individual controls."),(0,o.kt)("h2",{id:"replace-the-meeting-control-buttons-with-your-own-buttons"},"Replace the meeting control buttons with your own buttons"),(0,o.kt)("p",null,"Let's say you don't want to give many options to the participants in a meeting, other than the basic audio and video turning on, or you don't like our buttons and control bar design (you really should give us feedback too, in this case), or for any other reason - you just want to build your own buttons for basic meeting controls. This is possible with Dyte, with the minor caveat that you will need to put some validations at your end."),(0,o.kt)("p",null,"First thing in such a scenario would be to do away with our control bar using ",(0,o.kt)("a",{parentName:"p",href:"/docs/home/introduction#glossary"},(0,o.kt)("inlineCode",{parentName:"a"},"preset")),"."),(0,o.kt)("p",null,"Now you can perform the basic functions of a meeting, like below. These functions can be used as the ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," handlers of your own buttons."),(0,o.kt)("h3",{id:"mic-control"},"Mic control"),(0,o.kt)("p",null,"To turn the mic on / off"),(0,o.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"dyteView.toggleAudio()\n"))),(0,o.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"[dyteView toggleAudio];\n")))),(0,o.kt)("h3",{id:"camera-control"},"Camera control"),(0,o.kt)("p",null,"To turn the camera on / off"),(0,o.kt)(r.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"dyteView.toggleVideo()\n"))),(0,o.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"[dyteView toggleVideo];\n")))))}f.isMDXComponent=!0},58215:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(67294),a=n(79443);var o=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,a=e.block,s=e.defaultValue,c=e.values,d=e.groupId,p=e.className,m=i.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=o(),v=h.tabGroupChoices,b=h.setTabGroupChoices,y=(0,i.useState)(g),w=y[0],k=y[1],C=[];if(null!=d){var T=v[d];null!=T&&T!==w&&f.some((function(e){return e.value===T}))&&k(T)}var N=function(e){var t=e.currentTarget,n=C.indexOf(t),i=f[n].value;k(i),null!=d&&(b(d,i),setTimeout((function(){var e,n,i,a,o,r,l,s;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,o=e.right,r=window,l=r.innerHeight,s=r.innerWidth,n>=0&&o<=s&&a<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=C.indexOf(e.target)+1;n=C[i]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":a},p)},f.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,r.default)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:O,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,i.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){var i=(0,n(67294).createContext)(void 0);t.Z=i},86010:function(e,t,n){function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{default:function(){return a}})}}]);
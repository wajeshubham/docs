"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[20830],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var i=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=i.createContext({}),o=function(t){var e=i.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=o(t.components);return i.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},s=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),s=o(a),m=n,k=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return a?i.createElement(k,p(p({ref:e},d),{},{components:a})):i.createElement(k,p({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,p=new Array(r);p[0]=s;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:n,p[1]=c;for(var o=2;o<r;o++)p[o]=a[o];return i.createElement.apply(null,p)}return i.createElement.apply(null,a)}s.displayName="MDXCreateElement"},29109:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),p=["components"],c={sidebar_position:5,web_core_version:"0.26.0"},l=void 0,o={unversionedId:"Reference/DyteParticipant",id:"version-0.26.x/Reference/DyteParticipant",isDocsHomePage:!1,title:"DyteParticipant",description:"This module represents a single participant in the meeting.",source:"@site/web-core_versioned_docs/version-0.26.x/Reference/DyteParticipant.md",sourceDirName:"Reference",slug:"/Reference/DyteParticipant",permalink:"/web-core/0.26.x/Reference/DyteParticipant",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.26.x/Reference/DyteParticipant.md",tags:[],version:"0.26.x",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1656319568,formattedLastUpdatedAt:"6/27/2022",sidebarPosition:5,frontMatter:{sidebar_position:5,web_core_version:"0.26.0"},sidebar:"version-0.26.x/mainSidebar",previous:{title:"DyteParticipantMap",permalink:"/web-core/0.26.x/Reference/DyteParticipantMap"},next:{title:"DytePermissionsPreset",permalink:"/web-core/0.26.x/Reference/DytePermissionsPreset"}},d=[{value:"participant.id",id:"participantid",children:[]},{value:"participant.userId",id:"participantuserid",children:[]},{value:"participant.name",id:"participantname",children:[]},{value:"participant.picture",id:"participantpicture",children:[]},{value:"participant.clientSpecificId",id:"participantclientspecificid",children:[]},{value:"participant.device",id:"participantdevice",children:[]},{value:"participant.videoTrack",id:"participantvideotrack",children:[]},{value:"participant.audioTrack",id:"participantaudiotrack",children:[]},{value:"participant.screenShareTracks",id:"participantscreensharetracks",children:[]},{value:"participant.videoEnabled",id:"participantvideoenabled",children:[]},{value:"participant.audioEnabled",id:"participantaudioenabled",children:[]},{value:"participant.screenShareEnabled",id:"participantscreenshareenabled",children:[]},{value:"participant.supportsRemoteControl",id:"participantsupportsremotecontrol",children:[]},{value:"participant.isPinned",id:"participantispinned",children:[]},{value:"participant.pin()",id:"participantpin",children:[]},{value:"participant.unpin()",id:"participantunpin",children:[]},{value:"participant.setIsPinned()",id:"participantsetispinned",children:[]}],u={toc:d};function s(t){var e=t.components,a=(0,n.Z)(t,p);return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_DyteParticipant"}),(0,r.kt)("p",null,"This module represents a single participant in the meeting.\nThe participant object can be accessed from one of the participant lists\npresent in the ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.participants")," object. For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const participant1 = meeting.participants.active.get(participantId);\nconst participant2 = meeting.participants.joined.get(participantId);\nconst participant3 = meeting.participants.active.toArray()[0];\nconst participant4 = meeting.participants.active.toArray().filter((p) => p.name === 'John');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant"},"DyteParticipant"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+id"},".id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+userId"},".userId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+name"},".name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+picture"},".picture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+clientSpecificId"},".clientSpecificId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+device"},".device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+videoTrack"},".videoTrack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+audioTrack"},".audioTrack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+screenShareTracks"},".screenShareTracks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+videoEnabled"},".videoEnabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+audioEnabled"},".audioEnabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+screenShareEnabled"},".screenShareEnabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+supportsRemoteControl"},".supportsRemoteControl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+isPinned"},".isPinned")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+pin"},".pin()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+unpin"},".unpin()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_DyteParticipant+setIsPinned"},".setIsPinned()"))))),(0,r.kt)("a",{name:"module_DyteParticipant+id"}),(0,r.kt)("h3",{id:"participantid"},"participant.id"),(0,r.kt)("p",null,"The peer ID of the participant.\nThe participants are indexed by this ID in the participant map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+userId"}),(0,r.kt)("h3",{id:"participantuserid"},"participant.userId"),(0,r.kt)("p",null,"The user ID of the participant."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+name"}),(0,r.kt)("h3",{id:"participantname"},"participant.name"),(0,r.kt)("p",null,"The name of the participant."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+picture"}),(0,r.kt)("h3",{id:"participantpicture"},"participant.picture"),(0,r.kt)("p",null,"The picture of the participant."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+clientSpecificId"}),(0,r.kt)("h3",{id:"participantclientspecificid"},"participant.clientSpecificId"),(0,r.kt)("p",null,"The clientSpecificId of the participant."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+device"}),(0,r.kt)("h3",{id:"participantdevice"},"participant.device"),(0,r.kt)("p",null,"The device configuration of the participant."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+videoTrack"}),(0,r.kt)("h3",{id:"participantvideotrack"},"participant.videoTrack"),(0,r.kt)("p",null,"The participant's video track."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+audioTrack"}),(0,r.kt)("h3",{id:"participantaudiotrack"},"participant.audioTrack"),(0,r.kt)("p",null,"The participant's audio track."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+screenShareTracks"}),(0,r.kt)("h3",{id:"participantscreensharetracks"},"participant.screenShareTracks"),(0,r.kt)("p",null,"The participant's screenshare video and audio track."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+videoEnabled"}),(0,r.kt)("h3",{id:"participantvideoenabled"},"participant.videoEnabled"),(0,r.kt)("p",null,"This is true if the participant's video is enabled."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+audioEnabled"}),(0,r.kt)("h3",{id:"participantaudioenabled"},"participant.audioEnabled"),(0,r.kt)("p",null,"This is true if the participant's audio is enabled."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+screenShareEnabled"}),(0,r.kt)("h3",{id:"participantscreenshareenabled"},"participant.screenShareEnabled"),(0,r.kt)("p",null,"This is true if the participant is screensharing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+supportsRemoteControl"}),(0,r.kt)("h3",{id:"participantsupportsremotecontrol"},"participant.supportsRemoteControl"),(0,r.kt)("p",null,"This is true if the dyte participant supports remote control."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+isPinned"}),(0,r.kt)("h3",{id:"participantispinned"},"participant.isPinned"),(0,r.kt)("p",null,"Returns true if the participant is pinned."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+pin"}),(0,r.kt)("h3",{id:"participantpin"},"participant.pin()"),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"participant.id")," if user has permission\nto pin participants."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+unpin"}),(0,r.kt)("h3",{id:"participantunpin"},"participant.unpin()"),(0,r.kt)("p",null,"Returns ",(0,r.kt)("inlineCode",{parentName:"p"},"participant.id")," if user has permission\nto unpin participants."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant")),"  "),(0,r.kt)("a",{name:"module_DyteParticipant+setIsPinned"}),(0,r.kt)("h3",{id:"participantsetispinned"},"participant.setIsPinned()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#module_DyteParticipant"},(0,r.kt)("code",null,"DyteParticipant"))))}s.isMDXComponent=!0}}]);
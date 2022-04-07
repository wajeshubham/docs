"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[30156],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=d(n),m=a,g=h["".concat(s,".").concat(m)]||h[m]||l[m]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15742:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],c={sidebar_position:6},s="Events",d={unversionedId:"events",id:"version-0.7.x/events",isDocsHomePage:!1,title:"Events",description:"To integrate well with modern workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the meeting object, which is an instance of Meeting.",source:"@site/flutter_versioned_docs/version-0.7.x/events.mdx",sourceDirName:".",slug:"/events",permalink:"/flutter/events",editUrl:"https://github.com/dyte-in/docs/tree/main/flutter_versioned_docs/version-0.7.x/events.mdx",tags:[],version:"0.7.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1649321072,formattedLastUpdatedAt:"4/7/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.7.x/mainSidebar",previous:{title:"Advanced usage",permalink:"/flutter/advanced-usage"},next:{title:"Sample app",permalink:"/flutter/sample-app"}},p=[{value:"Connected to the meeting",id:"connected-to-the-meeting",children:[]},{value:"Joined the meeting",id:"joined-the-meeting",children:[]},{value:"Disconnected from the meeting",id:"disconnected-from-the-meeting",children:[]},{value:"End of the meeting",id:"end-of-the-meeting",children:[]},{value:"Input media devices get connected to the meeting",id:"input-media-devices-get-connected-to-the-meeting",children:[]},{value:"Another participant joins the meeting",id:"another-participant-joins-the-meeting",children:[]},{value:"Another participant leaves the meeting",id:"another-participant-leaves-the-meeting",children:[]}],l={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("p",null,"To integrate well with modern workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting")," object, which is an instance of ",(0,r.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,r.kt)("inlineCode",{parentName:"a"},"Meeting")),"."),(0,r.kt)("h3",{id:"connected-to-the-meeting"},"Connected to the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant has connected to the meeting but hasn't started producing or consuming content streams. Think of this as establishing a successful connection to the meeting and nothing else."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.events.on('meetingConnected', this, (ev, cont) {\n\n});\n")),(0,r.kt)("h3",{id:"joined-the-meeting"},"Joined the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant actually joins the meeting, and can start producing as well as consuming content streams."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.events.on('meetingJoin', this, (ev, cont) {\n\n});\n")),(0,r.kt)("h3",{id:"disconnected-from-the-meeting"},"Disconnected from the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant gets disconnected from the meeting for any reason. It could be a bad network connection, the meeting being exited by the participant manually, the meeting tab / browser / app being closed by the participant, or just any other reason."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.events.on('meetingDisconnected', this, (ev, cont) {\n\n});\n")),(0,r.kt)("h3",{id:"end-of-the-meeting"},"End of the meeting"),(0,r.kt)("p",null,"This event is triggered when the meeting is ended by the host or by the organization (as an admin function). In this case, all the participants are kicked out and you can take actions such as asking for feedback or redirecting to an exercise."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"meeting.events.on('meetingEnd', this, (ev, cont) {\n\n});\n")),(0,r.kt)("h3",{id:"input-media-devices-get-connected-to-the-meeting"},"Input media devices get connected to the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant's local media input devices (camera, mic) are initialized and connected to the meeting for the first time. Since the media device states can be toggled only after the device is connected, you need to use this event to manage the starting state of participant's audio or video."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"}," meeting.events.on('localMediaConnected', null, (a, b) {\n                  \n });\n")),(0,r.kt)("h3",{id:"another-participant-joins-the-meeting"},"Another participant joins the meeting"),(0,r.kt)("p",null,'This event is triggered when another participant joins the meeting. "Join" here as the same context as the ',(0,r.kt)("inlineCode",{parentName:"p"},"meetingJoined")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dyte_client/dyteParticipant.dart';\nmeeting.events.on('participantJoin', this, (ev, cont) {\n    DyteParticipant p = ev.eventData as DyteParticipant;\n});\n")),(0,r.kt)("h3",{id:"another-participant-leaves-the-meeting"},"Another participant leaves the meeting"),(0,r.kt)("p",null,'This event is triggered when another participant disconnects from the meeting. "Disconnect" here as the same context as the ',(0,r.kt)("inlineCode",{parentName:"p"},"disconnect")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:dyte_client/dyteParticipant.dart';\nmeeting.events.on('participantLeave', this, (ev, cont) {\n    DyteParticipant p = ev.eventData as DyteParticipant;\n});\n")))}h.isMDXComponent=!0}}]);
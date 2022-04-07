"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[97500],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),h=a,m=l["".concat(c,".").concat(h)]||l[h]||g[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},19943:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return l}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={sidebar_position:6},c="Events",d={unversionedId:"events",id:"version-0.1.x/events",isDocsHomePage:!1,title:"Events",description:"To integrate well with modern workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the DyteMeeting class.",source:"@site/android_versioned_docs/version-0.1.x/events.mdx",sourceDirName:".",slug:"/events",permalink:"/android/0.1.x/events",editUrl:"https://github.com/dyte-in/docs/tree/main/android_versioned_docs/version-0.1.x/events.mdx",tags:[],version:"0.1.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1649321072,formattedLastUpdatedAt:"4/7/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.1.30/mainSidebar",previous:{title:"Advanced usage",permalink:"/android/0.1.x/advanced-usage"},next:{title:"Sample app",permalink:"/android/0.1.x/sample-app"}},p=[{value:"Connected to the meeting",id:"connected-to-the-meeting",children:[]},{value:"Joined the meeting",id:"joined-the-meeting",children:[]},{value:"Disconnected from the meeting",id:"disconnected-from-the-meeting",children:[]},{value:"End of the meeting",id:"end-of-the-meeting",children:[]},{value:"Another participant joins the meeting",id:"another-participant-joins-the-meeting",children:[]},{value:"Another participant leaves the meeting",id:"another-participant-leaves-the-meeting",children:[]},{value:"Receiving a custom broadcast event",id:"receiving-a-custom-broadcast-event",children:[]},{value:"Receiving a custom targeted event",id:"receiving-a-custom-targeted-event",children:[]},{value:"Detecting change in active speaker",id:"detecting-change-in-active-speaker",children:[]}],g={toc:p};function l(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("p",null,"To integrate well with modern workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the ",(0,r.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,r.kt)("inlineCode",{parentName:"a"},"DyteMeeting"))," class."),(0,r.kt)("h3",{id:"connected-to-the-meeting"},"Connected to the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant has connected to the meeting but hasn't started producing or consuming content streams. Think of this as establishing a successful connection to the meeting and nothing else."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.addEventListener(new DyteMeeting.MeetingEventListener() {\n    void connect() {\n\n    }\n});\n")),(0,r.kt)("h3",{id:"joined-the-meeting"},"Joined the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant actually joins the meeting, and can start producing as well as consuming content streams."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.addEventListener(new DyteMeeting.MeetingEventListener() {\n    void meetingJoined() {\n\n    }\n});\n")),(0,r.kt)("h3",{id:"disconnected-from-the-meeting"},"Disconnected from the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant gets disconnected from the meeting for any reason. It could be a bad network connection, the meeting being exited by the participant manually, the meeting tab / browser / app being closed by the participant, or just any other reason."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.addEventListener(new DyteMeeting.MeetingEventListener() {\n    void disconnect() {\n\n    }\n});\n")),(0,r.kt)("h3",{id:"end-of-the-meeting"},"End of the meeting"),(0,r.kt)("p",null,"This event is triggered when the meeting is ended by the host or by the organization (as an admin function). In this case, all the participants are kicked out and you can take actions such as asking for feedback or redirecting to an exercise."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.addEventListener(new DyteMeeting.MeetingEventListener() {\n    void meetingEnded() {\n\n    }\n});\n")),(0,r.kt)("h3",{id:"another-participant-joins-the-meeting"},"Another participant joins the meeting"),(0,r.kt)("p",null,'This event is triggered when another participant joins the meeting. "Join" here as the same context as the ',(0,r.kt)("inlineCode",{parentName:"p"},"meetingJoined")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.addEventListener(new DyteMeeting.MeetingEventListener() {\n    void participantJoin(DyteParticipant participant) {\n\n    }\n});\n")),(0,r.kt)("h3",{id:"another-participant-leaves-the-meeting"},"Another participant leaves the meeting"),(0,r.kt)("p",null,'This event is triggered when another participant disconnects from the meeting. "Disconnect" here as the same context as the ',(0,r.kt)("inlineCode",{parentName:"p"},"disconnect")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.addEventListener(new DyteMeeting.MeetingEventListener() {\n    void participantLeave(DyteParticipant participant) {\n\n    }\n});\n")),(0,r.kt)("h3",{id:"receiving-a-custom-broadcast-event"},"Receiving a custom broadcast event"),(0,r.kt)("p",null,"This event is triggered when a custom message is broadcast to all participants in the meeting. A custom message may contain any serializable data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.addEventListener(new DyteMeeting.MeetingEventListener() {\n    void roomMessage(Hashmap <String, Object> data) {\n\n    }\n});\n")),(0,r.kt)("h3",{id:"receiving-a-custom-targeted-event"},"Receiving a custom targeted event"),(0,r.kt)("p",null,"This event is triggered when a custom message is targeted to a particular participant in the meeting and only the target participant receives this event. A custom message may contain any serializable data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.addEventListener(new DyteMeeting.MeetingEventListener() {\n    void message(Hashmap <String, Object> data) {\n\n    }\n});\n")),(0,r.kt)("h3",{id:"detecting-change-in-active-speaker"},"Detecting change in active speaker"),(0,r.kt)("p",null,"This event is triggered when the active speaker in the meeting changes. Active speaker is the participant whose audio level has most recently been the highest (kind of like LRU with the selection factor being audio level). The ",(0,r.kt)("inlineCode",{parentName:"p"},"participant")," is an instance of ",(0,r.kt)("a",{parentName:"p",href:"./reference/participant"},(0,r.kt)("inlineCode",{parentName:"a"},"DyteParticipant")),", whose prototype is defined in the reference section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DyteMeeting.addEventListener(new DyteMeeting.MeetingEventListener() {\n    void activeSpeaker(DyteParticipant participant) {\n\n    }\n});\n")))}l.isMDXComponent=!0}}]);
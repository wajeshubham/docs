"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[57345],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return l}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),h=p(n),l=i,m=h["".concat(c,".").concat(l)]||h[l]||d[l]||r;return n?a.createElement(m,s(s({ref:t},g),{},{components:n})):a.createElement(m,s({ref:t},g))}));function l(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40102:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return g},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),s=["components"],o={sidebar_position:6},c="Events",p={unversionedId:"events",id:"version-0.22.x/events",isDocsHomePage:!1,title:"Events",description:"To integrate well with modern JS frameworks and workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the meeting object, which is an instance of Meeting.",source:"@site/react-native_versioned_docs/version-0.22.x/events.mdx",sourceDirName:".",slug:"/events",permalink:"/react-native/0.22.x/events",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.22.x/events.mdx",tags:[],version:"0.22.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1656917641,formattedLastUpdatedAt:"7/4/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"version-0.22.x/mainSidebar",previous:{title:"Advanced usage",permalink:"/react-native/0.22.x/advanced-usage"},next:{title:"Sample app",permalink:"/react-native/0.22.x/sample-app"}},g=[{value:"Connected to the meeting",id:"connected-to-the-meeting",children:[]},{value:"Joined the meeting",id:"joined-the-meeting",children:[]},{value:"Disconnected from the meeting",id:"disconnected-from-the-meeting",children:[]},{value:"End of the meeting",id:"end-of-the-meeting",children:[]},{value:"Another participant joins the meeting",id:"another-participant-joins-the-meeting",children:[]},{value:"Another participant leaves the meeting",id:"another-participant-leaves-the-meeting",children:[]},{value:"Receiving a chat message",id:"receiving-a-chat-message",children:[]},{value:"Receiving a custom broadcast event",id:"receiving-a-custom-broadcast-event",children:[]},{value:"Receiving a custom targeted event",id:"receiving-a-custom-targeted-event",children:[]},{value:"Detecting change in active speaker",id:"detecting-change-in-active-speaker",children:[]},{value:"Recording started (version &gt; 0.3.11)",id:"recording-started-version--0311",children:[]},{value:"Recording stopped (version &gt; 0.3.11)",id:"recording-stopped-version--0311",children:[]}],d={toc:g};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("p",null,"To integrate well with modern JS frameworks and workflows, Dyte SDK also emits a rich set of events on meeting events and state changes. Using these events on the client side, you can make your app event driven and respond to changes in the meeting in real-time. You can subscribe to the following events on the ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting")," object, which is an instance of ",(0,r.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,r.kt)("inlineCode",{parentName:"a"},"Meeting")),"."),(0,r.kt)("h3",{id:"connected-to-the-meeting"},"Connected to the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant has connected to the meeting but hasn't started producing or consuming content streams. Think of this as establishing a successful connection to the meeting and nothing else."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.connect, () => {});\n")),(0,r.kt)("h3",{id:"joined-the-meeting"},"Joined the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant actually joins the meeting, and can start producing as well as consuming content streams."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.meetingJoined, () => {});\n")),(0,r.kt)("h3",{id:"disconnected-from-the-meeting"},"Disconnected from the meeting"),(0,r.kt)("p",null,"This event is triggered when the participant gets disconnected from the meeting for any reason. It could be a bad network connection, the meeting being exited by the participant manually, the meeting tab / browser / app being closed by the participant, or just any other reason."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.disconnect, () => {});\n")),(0,r.kt)("h3",{id:"end-of-the-meeting"},"End of the meeting"),(0,r.kt)("p",null,"This event is triggered when the meeting is ended by the host or by the organization (as an admin function). In this case, all the participants are kicked out and you can take actions such as asking for feedback or redirecting to an exercise."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.meetingEnded, () => {});\n")),(0,r.kt)("h3",{id:"another-participant-joins-the-meeting"},"Another participant joins the meeting"),(0,r.kt)("p",null,'This event is triggered when another participant joins the meeting. "Join" here as the same context as the ',(0,r.kt)("inlineCode",{parentName:"p"},"meetingJoined")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.participantJoin, (participant) => {});\n")),(0,r.kt)("h3",{id:"another-participant-leaves-the-meeting"},"Another participant leaves the meeting"),(0,r.kt)("p",null,'This event is triggered when another participant disconnects from the meeting. "Disconnect" here as the same context as the ',(0,r.kt)("inlineCode",{parentName:"p"},"disconnect")," event: so when that event triggers for the a participant, this event triggers for all other participants that have already joined the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.participantLeave, (participant) => {});\n")),(0,r.kt)("h3",{id:"receiving-a-chat-message"},"Receiving a chat message"),(0,r.kt)("p",null,"This event is triggered when the participant receives a chat message. The ",(0,r.kt)("inlineCode",{parentName:"p"},"chatMessage")," is an instance of ",(0,r.kt)("a",{parentName:"p",href:"./reference/chat-message"},(0,r.kt)("inlineCode",{parentName:"a"},"ChatMessage")),", whose prototype is defined in the reference section and can be directly used as a type if you prefer using TypeScript bindings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.chatMessage, (chatMessage) => {});\n")),(0,r.kt)("h3",{id:"receiving-a-custom-broadcast-event"},"Receiving a custom broadcast event"),(0,r.kt)("p",null,"This event is triggered when a custom message is broadcast to all participants in the meeting. A custom message may contain any serializable data. You can read more on how to ",(0,r.kt)("a",{parentName:"p",href:"./advanced-usage#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"send these messages here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.roomMessage, (message) => {});\n")),(0,r.kt)("h3",{id:"receiving-a-custom-targeted-event"},"Receiving a custom targeted event"),(0,r.kt)("p",null,"This event is triggered when a custom message is targeted to a particular participant in the meeting and only the target participant receives this event. A custom message may contain any serializable data. You can read more on how to ",(0,r.kt)("a",{parentName:"p",href:"./advanced-usage#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},"send these messages here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.message, (message) => {});\n")),(0,r.kt)("h3",{id:"detecting-change-in-active-speaker"},"Detecting change in active speaker"),(0,r.kt)("p",null,"This event is triggered when the active speaker in the meeting changes. Active speaker is the participant whose audio level has most recently been the highest (kind of like LRU with the selection factor being audio level). The ",(0,r.kt)("inlineCode",{parentName:"p"},"participant")," is an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Participant"),", whose prototype is defined below in the reference section and can be directly used as a type if you prefer using TypeScript bindings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.activeSpeaker (participant) => {\n});\n")),(0,r.kt)("h3",{id:"recording-started-version--0311"},"Recording started (version > 0.3.11)"),(0,r.kt)("p",null,"This event is triggered when a recording of the meeting is started by the host or by the organization (as an admin function). You can use this event to show a popup or a warning to the participants about the meeting being recorded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.recordingStarted, () => {});\n")),(0,r.kt)("h3",{id:"recording-stopped-version--0311"},"Recording stopped (version > 0.3.11)"),(0,r.kt)("p",null,"This event is triggered when a recording of the meeting is started by the host or by the organization (as an admin function). You can use this event to tell the participants about the recording being stopped."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.on(meeting.Events.recordingStopped, () => {});\n")))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[83498],{3905:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return u}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):p(p({},t),e)),i},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=s(i),u=n,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return i?a.createElement(g,p(p({ref:t},l),{},{components:i})):a.createElement(g,p({ref:t},l))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,p=new Array(r);p[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var s=2;s<r;s++)p[s]=i[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},32546:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var a=i(87462),n=i(63366),r=(i(67294),i(3905)),p=["components"],o={sidebar_position:1,title:"Participants",description:"Events, methods and data pertaining to meeting participants.",slug:"participants",tags:["web-core","participants","participant"]},c="Participants",s={unversionedId:"Participants/participants",id:"version-0.2/Participants/participants",isDocsHomePage:!1,title:"Participants",description:"Events, methods and data pertaining to meeting participants.",source:"@site/web-core_versioned_docs/version-0.2/05-Participants/01-participants.mdx",sourceDirName:"05-Participants",slug:"/Participants/participants",permalink:"/web-core/0.2/Participants/participants",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.2/05-Participants/01-participants.mdx",tags:[{label:"web-core",permalink:"/web-core/0.2/tags/web-core"},{label:"participants",permalink:"/web-core/0.2/tags/participants"},{label:"participant",permalink:"/web-core/0.2/tags/participant"}],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1656319568,formattedLastUpdatedAt:"6/27/2022",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Participants",description:"Events, methods and data pertaining to meeting participants.",slug:"participants",tags:["web-core","participants","participant"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Room Metadata",permalink:"/web-core/0.2/room-metadata"},next:{title:"Participant Events",permalink:"/web-core/0.2/Participants/participants/events"}},l=[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[{value:"Set view mode",id:"set-view-mode",children:[]},{value:"Set page number",id:"set-page-number",children:[]},{value:"Disable audio or video for participants",id:"disable-audio-or-video-for-participants",children:[]},{value:"Kick participants",id:"kick-participants",children:[]}]}],d={toc:l};function m(e){var t=e.components,i=(0,n.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"participants"},"Participants"),(0,r.kt)("p",null,"All meeting participants data is stored under ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.participants"),". Use the methods and events to consume the participants data.\nFor example, to get all the participants who joined the meeting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// get all joined participants\nconst joinedParticipants = meeting.participants.joined;\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"joined"),": Contains all the participants who have joined the meeting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"waitlisted"),": Contains all the participants waiting to join the meeting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"active"),": Contains all the active participants producing media (audio/ video/screen)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pinned"),": Contains all the pinned participants of the meeting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count"),": The number of participants who are joined in the meeting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageCount"),": Number of pages available in paginated mode. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxActiveParticipantsCount"),": The maximum number of participants that can be present in the active state.")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"set-view-mode"},"Set view mode"),(0,r.kt)("p",null,"Change the participant view between paginated and active grid mode. This will trigger ",(0,r.kt)("inlineCode",{parentName:"p"},"viewModeChanged")," event as a side affect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// set the view mode to paginated\nawait meeting.participants.setViewMode('PAGINATED');\n// set the view mode to active grid\nawait meeting.participants.setViewMode('ACTIVE_GRID');\n")),(0,r.kt)("h3",{id:"set-page-number"},"Set page number"),(0,r.kt)("p",null,"Switching beween pages "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// switch to second page\nawait meeting.participants.setPage(2);\n")),(0,r.kt)("h3",{id:"disable-audio-or-video-for-participants"},"Disable audio or video for participants"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// mute all participants\nawait meeting.participants.disableAllAudio();\n// disable video for all participants\nawait meeting.participants.disableAllVideo();\n// disable audio for a specific participant\nawait meeting.participants.disableAudio(peerId);\n// disable video for a specific participant\nawait meeting.participants.disableVideo(peerId);\n")),(0,r.kt)("h3",{id:"kick-participants"},"Kick participants"),(0,r.kt)("p",null,"To remove participats from a meeting, you can user kick methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// remove all participants from the meeting\nawait meeting.participants.kickAll();\n// remove a specified participant from the meeting\nawait meeting.participants.kick(peerId);\n")))}m.isMDXComponent=!0}}]);
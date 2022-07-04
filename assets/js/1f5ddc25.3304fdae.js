"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[49379],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,h=u["".concat(o,".").concat(g)]||u[g]||l[g]||r;return n?a.createElement(h,p(p({ref:t},d),{},{components:n})):a.createElement(h,p({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,p[1]=c;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94629:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),p=["components"],c={title:"Participant Events",description:"Event handling for participants.",slug:"participants/events",tags:["web-core","participants","self"]},o=void 0,s={unversionedId:"Participants/events",id:"version-0.27.x/Participants/events",isDocsHomePage:!1,title:"Participant Events",description:"Event handling for participants.",source:"@site/web-core_versioned_docs/version-0.27.x/05-Participants/03-events.mdx",sourceDirName:"05-Participants",slug:"/Participants/participants/events",permalink:"/web-core/Participants/participants/events",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.27.x/05-Participants/03-events.mdx",tags:[{label:"web-core",permalink:"/web-core/tags/web-core"},{label:"participants",permalink:"/web-core/tags/participants"},{label:"self",permalink:"/web-core/tags/self"}],version:"0.27.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1656917641,formattedLastUpdatedAt:"7/4/2022",sidebarPosition:3,frontMatter:{title:"Participant Events",description:"Event handling for participants.",slug:"participants/events",tags:["web-core","participants","self"]},sidebar:"version-0.27.x/mainSidebar",previous:{title:"The participant object",permalink:"/web-core/Participants/participants/participant"},next:{title:"Introducing chat",permalink:"/web-core/Chat/introduction"}},d=[{value:"Events",id:"events",children:[{value:"View mode change",id:"view-mode-change",children:[]},{value:"Page change",id:"page-change",children:[]},{value:"Active speaker",id:"active-speaker",children:[]}]},{value:"Events on all participants",id:"events-on-all-participants",children:[{value:"Participant joined",id:"participant-joined",children:[]},{value:"Participant left",id:"participant-left",children:[]},{value:"Video update",id:"video-update",children:[]},{value:"Audio update",id:"audio-update",children:[]},{value:"Screen share update",id:"screen-share-update",children:[]}]},{value:"Events for specific participant",id:"events-for-specific-participant",children:[]}],l={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"You can subscribe to events for all participants using ",(0,r.kt)("inlineCode",{parentName:"p"},"meeeting.participants.on()")," method.\nHere are the supported events:"),(0,r.kt)("h3",{id:"view-mode-change"},"View mode change"),(0,r.kt)("p",null,"Triggered when the View mode changes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.on('viewModeChanged', ({ viewMode, currentPage, pageCount }) => {\n    console.log('view mode changed', viewMode);\n});\n")),(0,r.kt)("h3",{id:"page-change"},"Page change"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.on('pageChanged', ({ viewMode, currentPage, pageCount }) => {\n    console.log('page changed', currentPage);\n});\n")),(0,r.kt)("h3",{id:"active-speaker"},"Active speaker"),(0,r.kt)("p",null,"This event is triggered when a participant becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," when they starts to speak."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.on('activeSpeaker', (participant) => {\n    console.log(`${participant.id} is currently speaking`);\n});\n")),(0,r.kt)("h2",{id:"events-on-all-participants"},"Events on all participants"),(0,r.kt)("p",null,"Instead of subscribing to individual participant events, you can subscribe to a participant map, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"joined")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," and get updated when any of the participant emits an event."),(0,r.kt)("p",null,"If you want to subscribe to participants when they become ",(0,r.kt)("inlineCode",{parentName:"p"},"active"),", you can do so by subscribing to ",(0,r.kt)("inlineCode",{parentName:"p"},"meetings.participants.active.on('participantJoined')")," "),(0,r.kt)("h3",{id:"participant-joined"},"Participant joined"),(0,r.kt)("p",null,"Trigger an event when any participant joins the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('participantJoined', (participant) => {\n    console.log(`A participant with id \"${participant.id}\" has joined`);\n});\n")),(0,r.kt)("h3",{id:"participant-left"},"Participant left"),(0,r.kt)("p",null,"Trigger an event when any participant leaves the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('participantLeft', (participant) => {\n    console.log(`A participant with id \"${participant.id}\" has left the meeting`);\n});\n")),(0,r.kt)("h3",{id:"video-update"},"Video update"),(0,r.kt)("p",null,"Trigger an event when any participant starts / stops video."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('videoUpdate', (participant) => {\n    console.log(`A participant with id \"${participant.id}\" updated their video track in the meeting`);\n    // Use the video track if it exists\n    if (participant.videoEnabled) {\n        // participant.videoTrack\n    } else {\n        // handle stop video \n    }\n});\n")),(0,r.kt)("h3",{id:"audio-update"},"Audio update"),(0,r.kt)("p",null,"Trigger an event when any participant starts / stops audio."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('audioUpdate', (participant) => {\n    console.log(`A participant with id \"${participant.id}\" updated their audio track in the meeting`);\n    // Use the audio track if it exists\n    if (participant.audioEnabled) {\n        // participant.audioTrack\n    } else {\n        // handle stop audio \n    }\n});\n")),(0,r.kt)("h3",{id:"screen-share-update"},"Screen share update"),(0,r.kt)("p",null,"Trigger an event when any participant starts / stops screen share."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"meeting.participants.joined.on('screenShareUpdate', (participant) => {\n    console.log(`A participant with id \"${participant.id}\" updated their screen share in the meeting`);\n    // Use the screen share track if it exists\n    if (participant.screenShareEnabled) {\n        // participant.screenShareTrack\n    } else {\n        // handle stop screen share\n    }\n});\n")),(0,r.kt)("h2",{id:"events-for-specific-participant"},"Events for specific participant"),(0,r.kt)("p",null,"If you want to subscribe to above events but for a specific participant only, you can do so by binding event to ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.participants.joined.get(peerId).on()")," method. where the ",(0,r.kt)("inlineCode",{parentName:"p"},"peerId")," is the id of the participant that you want to watch."))}u.isMDXComponent=!0}}]);
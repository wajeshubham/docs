"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[44493],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(o,".").concat(c)]||u[c]||s[c]||i;return a?n.createElement(k,l(l({ref:e},m),{},{components:a})):n.createElement(k,l({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68300:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],p={sidebar_position:4},o="DyteParticipant",d={unversionedId:"reference/participant",id:"version-0.5.x/reference/participant",isDocsHomePage:!1,title:"DyteParticipant",description:"Properties",source:"@site/react-native_versioned_docs/version-0.5.x/reference/participant.mdx",sourceDirName:"reference",slug:"/reference/participant",permalink:"/react-native/0.5.x/reference/participant",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.5.x/reference/participant.mdx",tags:[],version:"0.5.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.5.2/mainSidebar",previous:{title:"Meeting",permalink:"/react-native/0.5.x/reference/meeting"},next:{title:"DyteSelfParticipant",permalink:"/react-native/0.5.x/reference/self-participant"}},m=[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]},{value:"DyteViewTypes",id:"dyteviewtypes",children:[]}],s={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dyteparticipant"},"DyteParticipant"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property name"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Peer ID of the participant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientSpecificId"),(0,i.kt)("td",{parentName:"tr",align:null},"any"),(0,i.kt)("td",{parentName:"tr",align:null},"Client specific ID for this participant that was passed to the add participant API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Name set by the participant or as sent in the ",(0,i.kt)("inlineCode",{parentName:"td"},"add participant")," API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"picture"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"URL of the participant picture, as sent in the ",(0,i.kt)("inlineCode",{parentName:"td"},"add participant")," API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"audioEnabled"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Checks if the participant is producing audio")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"videoEnabled"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Checks if the participant is producing video")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"audioTrack"),(0,i.kt)("td",{parentName:"tr",align:null},"MediaStreamTrack"),(0,i.kt)("td",{parentName:"tr",align:null},"Audio stream from the participant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"videoTrack"),(0,i.kt)("td",{parentName:"tr",align:null},"MediaStreamTrack"),(0,i.kt)("td",{parentName:"tr",align:null},"Video stream from the participant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isMe"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Checks if the participant is the current participant, in which case it can be treated as ",(0,i.kt)("a",{parentName:"td",href:"./self-participant"},(0,i.kt)("inlineCode",{parentName:"a"},"DyteSelfParticipant")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isPinned"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Checks if the participant video is pinned (by the host, by the user, or by the preset)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metadata.preset_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The preset that is applied to the participant")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metadata.view_type"),(0,i.kt)("td",{parentName:"tr",align:null},"Enum (",(0,i.kt)("a",{parentName:"td",href:"#dyteviewtypes"},"DyteViewTypes"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of meeting view that the participant is in")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method name"),(0,i.kt)("th",{parentName:"tr",align:null},"Params (with data type)"),(0,i.kt)("th",{parentName:"tr",align:null},"Use"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pin"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Pin the participant video to the grid for everyone in the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"unpin"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Unpin the participant video from the grid for everyone in the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"disableAudio"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Disable audio stream from another participant, effectively muting them for everyone in the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"disableVideo"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Disable video stream from another participant, effectively blanking them out for everyone in the meeting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zoom"),(0,i.kt)("td",{parentName:"tr",align:null},"scale: number, x: number, y: number"),(0,i.kt)("td",{parentName:"tr",align:null},"Zoom on to a participant's video for everyone in the meeting. Scale represents the scale of zoom whereas x and y represent the offset from center to reposition the video inside the container")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sendMessage"),(0,i.kt)("td",{parentName:"tr",align:null},"message: any"),(0,i.kt)("td",{parentName:"tr",align:null},"Send custom event to the participant (see ",(0,i.kt)("a",{parentName:"td",href:"./../advanced-usage#send-a-custom-message-to-a-participant-p2p-message--data-exchange"},"this section")," for more details)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"updatePreset"),(0,i.kt)("td",{parentName:"tr",align:null},"preset_name: string"),(0,i.kt)("td",{parentName:"tr",align:null},"Update user preset dynamically")))),(0,i.kt)("h2",{id:"dyteviewtypes"},"DyteViewTypes"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DyteViewTypes")," is an enum that enumerates the different kind of meeting views, that are available to a participant in Dyte meeting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'DyteViewTypes {\n    "GROUP_CALL",\n    "WEBINAR"\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GROUP_CALL"),(0,i.kt)("td",{parentName:"tr",align:null},"A meeting where all participants are usually allowed to produce audio and video, useful for meetings where all participants are required to participate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WEBINAR"),(0,i.kt)("td",{parentName:"tr",align:null},"A meeting where only participant(s) with privilege permissions (a presenter or a group of presenters or a host or a group of hosts) are allowed to produce audio and video whereas the other participants may request permissions to ask questions or join as a presenter")))))}u.isMDXComponent=!0}}]);
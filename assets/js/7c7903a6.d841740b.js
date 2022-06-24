"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[63740],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(v,i(i({ref:n},d),{},{components:t})):r.createElement(v,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3023:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={sidebar_position:2,title:"Events",description:"Local user events guide.",slug:"/local-user/events",tags:["web-core","local-user","self","self events"]},c="Local User - Events",l={unversionedId:"LocalUser/events",id:"version-0.24.x/LocalUser/events",isDocsHomePage:!1,title:"Events",description:"Local user events guide.",source:"@site/web-core_versioned_docs/version-0.24.x/03-LocalUser/02-events.mdx",sourceDirName:"03-LocalUser",slug:"/local-user/events",permalink:"/web-core/0.24.x/local-user/events",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.24.x/03-LocalUser/02-events.mdx",tags:[{label:"web-core",permalink:"/web-core/0.24.x/tags/web-core"},{label:"local-user",permalink:"/web-core/0.24.x/tags/local-user"},{label:"self",permalink:"/web-core/0.24.x/tags/self"},{label:"self events",permalink:"/web-core/0.24.x/tags/self-events"}],version:"0.24.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Events",description:"Local user events guide.",slug:"/local-user/events",tags:["web-core","local-user","self","self events"]},sidebar:"version-0.24.x/mainSidebar",previous:{title:"Introduction",permalink:"/web-core/0.24.x/local-user/introduction"},next:{title:"Manage media devices",permalink:"/web-core/0.24.x/local-user/manage-media-devices"}},d=[{value:"Video update",id:"video-update",children:[]},{value:"Audio update",id:"audio-update",children:[]},{value:"Screenshare update",id:"screenshare-update",children:[]},{value:"Device change",id:"device-change",children:[]}],u={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"local-user---events"},"Local User - Events"),(0,o.kt)("p",null,"You can subscribe to various events on the local user by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"meeting.self.on(EVENT_NAME)"),"."),(0,o.kt)("h3",{id:"video-update"},"Video update"),(0,o.kt)("p",null,"Triggered when the user starts / stops the video using ",(0,o.kt)("inlineCode",{parentName:"p"},"enableVideo")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"disableVideo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const videoElem = document.getElementById('my-video');\n\nmeeting.self.on('videoUpdate', async ({ videoEnabled, videoTrack }) => {\n    if (videoEnabled) {\n        const stream = new MediaStream();\n        stream.addTrack(videoTrack);\n        videoElem.srcObject = stream;\n        videoElem.play();\n    } else {\n        videoElem.stop();\n    }\n});\n")),(0,o.kt)("h3",{id:"audio-update"},"Audio update"),(0,o.kt)("p",null,"Triggered when the user starts / stops the audio using ",(0,o.kt)("inlineCode",{parentName:"p"},"enableAudio")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"disableAudio")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const audioElem = document.getElementById('my-audio');\n\nmeeting.self.on('audioUpdate', async ({ audioEnabled, audioTrack }) => {\n    if (audioEnabled) {\n        const stream = new MediaStream();\n        stream.addTrack(audioTrack);\n        audioElem.srcObject = stream;\n        audioElem.play();\n    } else {\n        audioElem.stop();\n    }\n});\n")),(0,o.kt)("h3",{id:"screenshare-update"},"Screenshare update"),(0,o.kt)("p",null,"Triggered when the user starts / stops the screen share using ",(0,o.kt)("inlineCode",{parentName:"p"},"enableScreenShare()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"disableScreenShare()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const screenElem = document.getElementById('my-screen-share');\n\nmeeting.self.on('screenShareUpdate', async ({ screenShareEnabled, screenShareTracks }) => {\n    if (screenShareEnabled) {\n        const stream = new MediaStream();\n        stream.addTrack(screenShareTracks.video);\n        screenElem.srcObject(stream);\n        await screenElem.play();\n    } else {\n        await screenElem.stop();\n    }\n});\n")),(0,o.kt)("h3",{id:"device-change"},"Device change"),(0,o.kt)("p",null,"Subscribe to the ",(0,o.kt)("inlineCode",{parentName:"p"},"deviceChange")," event to handle the changing video, audio and speaker devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"meeting.self.on('deviceChange', ({ device, preview }) => {\n  // handle microphone change\n  if (device.kind === 'audioinput') {\n    console.log('mic change', device);\n  }\n  // handle camera change\n  if (device.kind === 'videoinput') {\n    console.log('camera change', device);\n  }\n  // handle speaker change\n  if (device.kind === 'audiooutput') {\n    console.log('speaker change', device);\n  }\n});\n")))}p.isMDXComponent=!0}}]);
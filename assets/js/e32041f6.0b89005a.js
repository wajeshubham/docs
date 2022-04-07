"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[98306],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66824:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=n(61422),l=["components"],s={sidebar_position:4},d="Customize the meeting UI",c={unversionedId:"customize-meeting-ui",id:"version-0.13.x/customize-meeting-ui",isDocsHomePage:!1,title:"Customize the meeting UI",description:"Dyte offers a host of customizations for the UI of meetings, some of which also defines the interactions the participants can have within a meeting room. While the initial values for these options are picked up from the preset used to generate the authToken, you can override them at the client end based on specific use cases or events. There are 2 ways to update the config:",source:"@site/react_versioned_docs/version-0.13.x/customize-meeting-ui.mdx",sourceDirName:".",slug:"/customize-meeting-ui",permalink:"/react/0.13.x/customize-meeting-ui",editUrl:"https://github.com/dyte-in/docs/tree/main/react_versioned_docs/version-0.13.x/customize-meeting-ui.mdx",tags:[],version:"0.13.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1649321072,formattedLastUpdatedAt:"4/7/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.13.1/mainSidebar",previous:{title:"Basic Usage",permalink:"/react/0.13.x/usage"},next:{title:"Advanced usage",permalink:"/react/0.13.x/advanced-usage"}},m=[{value:"Set your logo in the meeting room",id:"set-your-logo-in-the-meeting-room",children:[]},{value:"Change the color scheme to your brand / theme",id:"change-the-color-scheme-to-your-brand--theme",children:[]},{value:"Adjust the meeting size to a custom container",id:"adjust-the-meeting-size-to-a-custom-container",children:[]},{value:"Make the meeting fit your container size (dynamic)",id:"make-the-meeting-fit-your-container-size-dynamic",children:[]},{value:"Hide the bottom control bar",id:"hide-the-bottom-control-bar",children:[]},{value:"Hide individual controls from the bottom control bar",id:"hide-individual-controls-from-the-bottom-control-bar",children:[]},{value:"Hide the header bar",id:"hide-the-header-bar",children:[]},{value:"Hide individual controls from the header bar",id:"hide-individual-controls-from-the-header-bar",children:[]},{value:"Customize waiting room",id:"customize-waiting-room",children:[]},{value:"Add overlay / filter to meeting video",id:"add-overlay--filter-to-meeting-video",children:[{value:"Meeting grid overlay",id:"meeting-grid-overlay",children:[]},{value:"Participant video overlay",id:"participant-video-overlay",children:[]}]}],u={toc:m};function p(e){var t=e.components,s=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customize-the-meeting-ui"},"Customize the meeting UI"),(0,o.kt)("p",null,"Dyte offers a host of customizations for the UI of meetings, some of which also defines the interactions the participants can have within a meeting room. While the initial values for these options are picked up from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/home/introduction#glossary"},(0,o.kt)("inlineCode",{parentName:"a"},"preset"))," used to generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"authToken"),", you can override them at the client end based on specific use cases or events. There are 2 ways to update the config:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"pass the config options at the time of initiating a meeting.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8}","{8}":!0},"<DyteMeeting\n    onInit={(meeting) => { }}\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`\n    }}\n    uiConfig={uiConfigOptions}\n>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"call the ",(0,o.kt)("inlineCode",{parentName:"li"},"updateUIConfig")," method on ",(0,o.kt)("a",{parentName:"li",href:"./reference/meeting"},(0,o.kt)("inlineCode",{parentName:"a"},"meeting")," instance")," and pass the ",(0,o.kt)("a",{parentName:"li",href:"./reference/dyte-ui-config"},(0,o.kt)("inlineCode",{parentName:"a"},"uiConfigOptions"))," as a parameter to this call")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.updateUIConfig(uiConfigOptions);\n")),(0,o.kt)("p",null,"Described below are various different options that you can customize in a meeting. The complete reference for UI config options can be found ",(0,o.kt)("a",{parentName:"p",href:"./reference/dyte-ui-config"},"here"),"."),(0,o.kt)("p",null,"Here is a pictorial representation of all the config options defined below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"meeting UI screenshot with labeled parts",src:n(78469).Z})),(0,o.kt)("h2",{id:"set-your-logo-in-the-meeting-room"},"Set your logo in the meeting room"),(0,o.kt)("p",null,"You can change the logo in the meeting room to reflect your brand or your organization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"logo: logoUrlString;\n")),(0,o.kt)("h2",{id:"change-the-color-scheme-to-your-brand--theme"},"Change the color scheme to your brand / theme"),(0,o.kt)("p",null,"You can change the color scheme of the meeting to reflect your brand and theme. Dyte allows you to specify four color values."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"primary"),": color of the primary elements like participant name box"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secondary"),": color of the secondary elements like control bar, control buttons, hover"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"textPrimary"),": color of the text elements"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"videoBackground"),": color behind the video when the video is turned off")),(0,o.kt)("p",null,"The default values for each of these are shown in the below example. Remember to specify all the colors, otherwise this feature won't work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"colors: {\n    primary:         '#2160FD',\n    secondary:       '#262626',\n    textPrimary:     '#EEEEEE',\n    videoBackground: '#1A1A1A'\n}\n")),(0,o.kt)(r.Z,{src:"/ui-customizations/themes.mp4",mdxType:"VideoPlayer"}),(0,o.kt)("h2",{id:"adjust-the-meeting-size-to-a-custom-container"},"Adjust the meeting size to a custom container"),(0,o.kt)("p",null,"The default behaviour of a meeting on Dyte is to take up the full viewport. However, if you want to customize the size of a meeting to fit within a certain container or ",(0,o.kt)("inlineCode",{parentName:"p"},"div"),", you can do so by specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensions")," as numerical values which are taken as pixels (",(0,o.kt)("inlineCode",{parentName:"p"},"px")," in CSS). Remember to specify both, otherwise this feature won't work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"dimensions: {\n    width:  400,\n    height: 800\n}\n")),(0,o.kt)("h2",{id:"make-the-meeting-fit-your-container-size-dynamic"},"Make the meeting fit your container size (dynamic)"),(0,o.kt)("p",null,"Similarly, if you want to make the size of a meeting dynamically fit to within the bounds of its parent container or ",(0,o.kt)("inlineCode",{parentName:"p"},"div"),", you can do so by specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"mode")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensions")," and set the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"fillParent"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'dimensions: {\n  mode: "fillParent";\n}\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use either the ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," OR the ",(0,o.kt)("inlineCode",{parentName:"p"},"mode")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensions"),", but not both."))),(0,o.kt)("h2",{id:"hide-the-bottom-control-bar"},"Hide the bottom control bar"),(0,o.kt)("p",null,"You can hide the bottom control bar by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"controlBar")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in config. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", which means the control bar is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"controlBar: true;\n")),(0,o.kt)(r.Z,{src:"/ui-customizations/control-bar.mp4",mdxType:"VideoPlayer"}),(0,o.kt)("h2",{id:"hide-individual-controls-from-the-bottom-control-bar"},"Hide individual controls from the bottom control bar"),(0,o.kt)("p",null,"You can hide individual controls from the bottom control bar by setting their respective options to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in the config. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," for all controls, which means all the controls are visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"controlBarElements: {\n    fullscreen:   true,\n    share:        true,\n    screenShare:  true,\n    layout:       true,\n    chat:         true,\n    polls:        true,\n    participants: true,\n    plugins:      true\n}\n")),(0,o.kt)(r.Z,{src:"/ui-customizations/control-bar-elements.mp4",mdxType:"VideoPlayer"}),(0,o.kt)("h2",{id:"hide-the-header-bar"},"Hide the header bar"),(0,o.kt)("p",null,"You can hide the header bar by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in config. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", which means the header is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"header: true;\n")),(0,o.kt)(r.Z,{src:"/ui-customizations/header.mp4",mdxType:"VideoPlayer"}),(0,o.kt)("h2",{id:"hide-individual-controls-from-the-header-bar"},"Hide individual controls from the header bar"),(0,o.kt)("p",null,"You can hide individual elements from the header bar by setting their respective options to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in the config. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," for all elements, which means all the elements are visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"headerElements: {\n    logo:             true,\n    title:            true,\n    participantCount: true,\n    clock:            true\n}\n")),(0,o.kt)(r.Z,{src:"/ui-customizations/header-elements.mp4",mdxType:"VideoPlayer"}),(0,o.kt)("h2",{id:"customize-waiting-room"},"Customize waiting room"),(0,o.kt)("p",null,"If you have enabled waiting room in the ",(0,o.kt)("inlineCode",{parentName:"p"},"role"),", the participant will be put in an empty zone until the host joins and / or lets them in. You can choose the exact HTML to be rendered while the participant is in the waiting room (such as an infographic or play a video or display info about your org) by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"element")," to a ReactNode or an HTMLElement, and whether the participant sees their own video while in the waiting room using ",(0,o.kt)("inlineCode",{parentName:"p"},"showSelfVideo")," (which is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"waitingRoom: {\n    showSelfVideo: true,\n    element:       ReactNode|HTMLElement\n}\n")),(0,o.kt)("h2",{id:"add-overlay--filter-to-meeting-video"},"Add overlay / filter to meeting video"),(0,o.kt)("p",null,"You can add an overlay or filter to the meeting videos. You can add them to the individual participant videos or to the entire meeting grid at once. You would generally need to listen to the meeting events, such as ",(0,o.kt)("a",{parentName:"p",href:"./advanced-usage#send-a-custom-message-to-other-participants-in-the-meeting-p2p-message--data-exchange"},(0,o.kt)("inlineCode",{parentName:"a"},"roomMessage")),", to determine when to show an overlay, or you could build your own custom logic around this."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Adding any overlay disables the context menu (right click) on the video stream(s)."))),(0,o.kt)("h3",{id:"meeting-grid-overlay"},"Meeting grid overlay"),(0,o.kt)("p",null,"You can add overlay to the entire meeting grid, which is the area including all the participant videos. Generally it will be all the area between the header and the control bar."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"meeting.grid.setOverlay(ReactNode)")," to set overlay on top of the entire video grid. This can be useful for use cases like enabling reactions etc. Simply pass either a React component or a HTML string to the function. Remember to set the width and height to 100% to occupy the full size of the grid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'meeting.grid.setOverlay(\n  \'<canvas id="reaction-1" style="width: 100%; height: 100%;" />\'\n);\n')),(0,o.kt)("p",null,"To remove, you can simply set the overlay to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"meeting.grid.setOverlay(null);\n")),(0,o.kt)("h3",{id:"participant-video-overlay"},"Participant video overlay"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./advanced-usage#set-an-overlay--filter-on-the-participant-video"},"Check this section"),"."))}p.isMDXComponent=!0},61422:function(e,t,n){var i=n(87462),a=n(63366),o=n(67294),r=n(86010),l=n(45697),s=["src","mobile"],d=function(e){var t=e.src,n=e.mobile,l=(0,a.Z)(e,s);return o.createElement("video",(0,i.Z)({className:(0,r.default)("dyte-video-showcase",n&&"mobile"),src:t,autoPlay:!0,loop:!0,controls:!1,muted:!0},l))};d.propTypes={src:l.string,mobile:l.bool},t.Z=d},86010:function(e,t,n){function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{default:function(){return a}})},78469:function(e,t,n){t.Z=n.p+"assets/images/meeting-ui-0f1c58ede58cd36be6c5bed13ee675c9.png"}}]);
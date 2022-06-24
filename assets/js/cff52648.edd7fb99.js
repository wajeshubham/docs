"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[16175],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={sidebar_position:3},s="Basic Usage",p={unversionedId:"usage",id:"version-0.33.x/usage",isDocsHomePage:!1,title:"Basic Usage",description:"Include Dyte's React component in your app",source:"@site/react_versioned_docs/version-0.33.x/usage.mdx",sourceDirName:".",slug:"/usage",permalink:"/react/usage",editUrl:"https://github.com/dyte-in/docs/tree/main/react_versioned_docs/version-0.33.x/usage.mdx",tags:[],version:"0.33.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.33.x/mainSidebar",previous:{title:"Quickstart",permalink:"/react/quickstart"},next:{title:"Customize the meeting UI",permalink:"/react/customize-meeting-ui"}},u=[{value:"Include Dyte&#39;s React component in your app",id:"include-dytes-react-component-in-your-app",children:[{value:"Pass Client ID for verification",id:"pass-client-id-for-verification",children:[]},{value:"Configure the meeting connection",id:"configure-the-meeting-connection",children:[]},{value:"Get meeting instance on successful creation",id:"get-meeting-instance-on-successful-creation",children:[]}]}],l={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("h2",{id:"include-dytes-react-component-in-your-app"},"Include Dyte's React component in your app"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./reference/dyte-meeting"},(0,i.kt)("inlineCode",{parentName:"a"},"DyteMeeting"))," is a React component that can be included in your React application to show the Dyte Meeting UI."),(0,i.kt)("p",null,"It has 3 mandatory and 2 optional properties. The mandatory ones are defined below along with their usage, and the optional ones can be found ",(0,i.kt)("a",{parentName:"p",href:"./advanced-usage#turn-on-the-setup--preview-screen"},"here in the advanced usage")," page."),(0,i.kt)("h3",{id:"pass-client-id-for-verification"},"Pass Client ID for verification"),(0,i.kt)("p",null,"You need to pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," to verify the participant's ",(0,i.kt)("inlineCode",{parentName:"p"},"authToken")," against."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2}","{2}":!0},"<DyteMeeting\n    clientId=`yourClientID`\n    >\n")),(0,i.kt)("h3",{id:"configure-the-meeting-connection"},"Configure the meeting connection"),(0,i.kt)("p",null,"You need to pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"meetingConfig")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," to define which meeting should the client connect to and a couple of other setup parameters, out of which only ",(0,i.kt)("inlineCode",{parentName:"p"},"authToken")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"roomName")," are mandatory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3-6}","{3-6}":!0},"<DyteMeeting\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`\n    }}\n    >\n")),(0,i.kt)("h3",{id:"get-meeting-instance-on-successful-creation"},"Get meeting instance on successful creation"),(0,i.kt)("p",null,"You need to pass an ",(0,i.kt)("inlineCode",{parentName:"p"},"onInit")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"DyteMeeting")," to get reference to the meeting instance that is created. ",(0,i.kt)("inlineCode",{parentName:"p"},"onInit")," expects a function which has a single param of type ",(0,i.kt)("a",{parentName:"p",href:"./reference/meeting"},(0,i.kt)("inlineCode",{parentName:"a"},"Meeting"))," and is not expected to return anything. This ",(0,i.kt)("inlineCode",{parentName:"p"},"Meeting")," reference can be used to take further actions and make customizations to the meeting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2}","{2}":!0},"<DyteMeeting\n    onInit={(meeting) => { }}\n    clientId=`yourClientID`\n    meetingConfig={{\n        roomName: `roomName`,\n        authToken: `authToken`\n    }}\n    >\n")))}d.isMDXComponent=!0}}]);
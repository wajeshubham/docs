"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[67301],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76693:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={sidebar_position:2},s="React (Hooks & Context)",p={unversionedId:"Customization/hooks-provider",id:"version-0.2/Customization/hooks-provider",isDocsHomePage:!1,title:"React (Hooks & Context)",description:"We provide the package @dytesdk/react-web-core which is a hooks wrapper on @dytesdk/web-core.",source:"@site/react-ui-kit_versioned_docs/version-0.2/04-Customization/hooks-provider.mdx",sourceDirName:"04-Customization",slug:"/Customization/hooks-provider",permalink:"/react-ui-kit/Customization/hooks-provider",editUrl:"https://github.com/dyte-in/docs/tree/main/react-ui-kit_versioned_docs/version-0.2/04-Customization/hooks-provider.mdx",tags:[],version:"0.2",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.2/mainSidebar",previous:{title:"Components",permalink:"/react-ui-kit/Customization/components"},next:{title:"Avatar",permalink:"/react-ui-kit/Customization/atoms/dyte-avatar"}},u=[{value:"Context Provider",id:"context-provider",children:[{value:"Selector",id:"selector",children:[]},{value:"Example",id:"example",children:[]}]}],l={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-hooks--context"},"React (Hooks & Context)"),(0,i.kt)("p",null,"We provide the package ",(0,i.kt)("inlineCode",{parentName:"p"},"@dytesdk/react-web-core")," which is a hooks wrapper on ",(0,i.kt)("inlineCode",{parentName:"p"},"@dytesdk/web-core"),".\nWhile the Quickstart example talks about the ",(0,i.kt)("inlineCode",{parentName:"p"},"useDyteClient")," hook, here is a more complete example"),(0,i.kt)("h2",{id:"context-provider"},"Context Provider"),(0,i.kt)("p",null,"It is a simple context provider providing the meeting object to child components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useDyteClient } from '@dytesdk/react-web-core';\n\nfunction App() {\n  const [ client, initClient ] = useDyteClient();\n\n  useEffect(() => {\n    initClient({\n      roomName: '<room-name>',\n      authToken: '<auth-token>',\n      defaults: {\n        audio: false,\n        video: true,\n      },\n    });\n  }, []);\n\n  return (\n    <DyteProvider value={client}>\n      <Meeting />\n    </DyteProvider>\n  );\n}\n")),(0,i.kt)("p",null,"And to consume it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useDyteSelector, useDyteMeeting } from '@dytesdk/';\n\nfunction Meeting() {\n  const { meeting } = useDyteMeeting();\n\n  const joinedParticipants = useDyteSelector((m) => m.participants.joined);\n\n  /*\n    use joinRoom() method or the setup screen component\n    to actually enter the meeting\n  */\n  useEffect(() => {\n    meeting.joinRoom();\n  }, [meeting]);\n\n  /// display joined participnats\n\n")),(0,i.kt)("h3",{id:"selector"},"Selector"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const joinedParticipants = useDyteSelector((meeting) => meeting.participants.joined);\n")),(0,i.kt)("p",null,"You can use the hook to subscribe for updates on any of the web-core objects.\nThis hook will re-render when the selected data changes."),(0,i.kt)("p",null,"Refer to core ",(0,i.kt)("a",{parentName:"p",href:"../../web-core/Reference/DyteClient"},"documentation for reference")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';\nimport { DyteGrid, DyteSetupScreen } from '@dytesdk/react-ui-kit';\n\nfunction Meeting() {\n    const { meeting } = useDyteMeeting();\n    const joined = useDyteSelector((m) => m.meta.joined);\n    return (\n        <div style={{ height: '100vh', width: '100vw' }}>\n            {!joined ? <DyteSetupScreen meeting={meeting} /> :\n                <DyteGrid meeting={meeting} />}\n        </div>\n    );\n}\n\nexport default Meeting;\n")))}d.isMDXComponent=!0}}]);
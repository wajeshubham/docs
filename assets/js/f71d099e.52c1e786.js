"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[94466],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(t),d=a,m=g["".concat(u,".").concat(d)]||g[d]||c[d]||r;return t?i.createElement(m,l(l({ref:n},p),{},{components:t})):i.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},73584:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return g}});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],o={title:"Functions to enable plugins",description:"Methods on a plugin in a meeting.",slug:"enable-plugin",tags:["web-core","plugins"]},u="Functions to enable plugins",s={unversionedId:"Plugins/enable-plugin",id:"version-0.2/Plugins/enable-plugin",isDocsHomePage:!1,title:"Functions to enable plugins",description:"Methods on a plugin in a meeting.",source:"@site/web-core_versioned_docs/version-0.2/08-Plugins/02-enable-plugin.mdx",sourceDirName:"08-Plugins",slug:"/Plugins/enable-plugin",permalink:"/web-core/0.2/Plugins/enable-plugin",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.2/08-Plugins/02-enable-plugin.mdx",tags:[{label:"web-core",permalink:"/web-core/0.2/tags/web-core"},{label:"plugins",permalink:"/web-core/0.2/tags/plugins"}],version:"0.2",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:2,frontMatter:{title:"Functions to enable plugins",description:"Methods on a plugin in a meeting.",slug:"enable-plugin",tags:["web-core","plugins"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Introduction",permalink:"/web-core/0.2/Plugins/introduction"},next:{title:"Functions to disable plugins",permalink:"/web-core/0.2/Plugins/disable-plugins"}},p=[{value:"Add Plugin View",id:"add-plugin-view",children:[]},{value:"Activate Plugins",id:"activate-plugins",children:[]},{value:"Enable Plugins",id:"enable-plugins",children:[]}],c={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"functions-to-enable-plugins"},"Functions to enable plugins"),(0,r.kt)("p",null,"Each plugin in ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.plugins")," object is of type ",(0,r.kt)("a",{parentName:"p",href:"./introduction"},(0,r.kt)("inlineCode",{parentName:"a"},"DytePlugin"))," and exposes the following functions to enable plugins."),(0,r.kt)("h2",{id:"add-plugin-view"},"Add Plugin View"),(0,r.kt)("p",null,"This method adds the communcation layer between the plugin inside the iframe\nand the core application (meeting object) in the main window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const plugins = meeting.plugins.all.toArray();\n\nplugins.forEach(async (plugin: DytePlugin) => {\n    const iframe = document.createElement('iframe');\n    await plugin.addPluginView(iframe);\n})\n")),(0,r.kt)("h2",{id:"activate-plugins"},"Activate Plugins"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"activate()")," method activates a plugin for all users in the meeting. When you activate a plugin, it moves into the active plugins map and can be accessed from ",(0,r.kt)("inlineCode",{parentName:"p"},"meeting.plugins.active"),"."),(0,r.kt)("p",null,"The snippet below displays all plugins and activates a plugin on click."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const plugins = meeting.plugins.all.toArray();\n\nplugins.forEach((plugin: DytePlugin) => {\n  const button = document.createElement('button');\n  button.innerText = plugin.name;\n  button.onclick = async () => {\n    await plugin.activate();\n  }\n  document.body.appendChild(button);\n})\n")),(0,r.kt)("p",null,"Here is another way you can activate a plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const plugins = meeting.plugins.all.toArray();\nconst plugin = plugins.find((p) => p.name === "YouTube");\n\nawait plugin?.activate();\n')),(0,r.kt)("h2",{id:"enable-plugins"},"Enable Plugins"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"enable()")," method enables a plugin for the current user. This does not affect other users in the meeting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const plugins = meeting.plugins.all.toArray();\nconst plugin = plugins.find((p) => p.name === "YouTube");\n\nawait plugin?.enable();\n')))}g.isMDXComponent=!0}}]);
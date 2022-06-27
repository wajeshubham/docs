"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[27038],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),g=u(t),d=i,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return t?r.createElement(m,a(a({ref:e},c),{},{components:t})):r.createElement(m,a({ref:e},c))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:i,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},65589:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={title:"Introduction",description:"Manage plugins in a meeting.",slug:"introduction",tags:["web-core","plugins"]},s="Introduction",u={unversionedId:"Plugins/introduction",id:"version-0.2/Plugins/introduction",isDocsHomePage:!1,title:"Introduction",description:"Manage plugins in a meeting.",source:"@site/web-core_versioned_docs/version-0.2/08-Plugins/01-introduction.mdx",sourceDirName:"08-Plugins",slug:"/Plugins/introduction",permalink:"/web-core/0.2/Plugins/introduction",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.2/08-Plugins/01-introduction.mdx",tags:[{label:"web-core",permalink:"/web-core/0.2/tags/web-core"},{label:"plugins",permalink:"/web-core/0.2/tags/plugins"}],version:"0.2",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1656319568,formattedLastUpdatedAt:"6/27/2022",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Manage plugins in a meeting.",slug:"introduction",tags:["web-core","plugins"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Other poll functions",permalink:"/web-core/0.2/Polls/other-poll-functions"},next:{title:"Functions to enable plugins",permalink:"/web-core/0.2/Plugins/enable-plugin"}},c=[],p={toc:c};function g(n){var e=n.components,t=(0,i.Z)(n,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Plugins are one-click add-ons that can make your meetings more immersive and collaborative. Dyte provides a bunch of inbuilt plugins to choose from, you can also build your own plugins using the Plugin SDK."),(0,o.kt)("p",null,"The meeting plugins can be accessed from the ",(0,o.kt)("inlineCode",{parentName:"p"},"meeting.plugins")," object, it exposes the following."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"active"),(0,o.kt)("td",{parentName:"tr",align:null},"Map"),(0,o.kt)("td",{parentName:"tr",align:null},"All plugins that are currently in use.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"all"),(0,o.kt)("td",{parentName:"tr",align:null},"Map"),(0,o.kt)("td",{parentName:"tr",align:null},"All plugins the meeting has access to.")))),(0,o.kt)("p",null,"Each plugin in the map is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"DytePlugin"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface DytePlugin {\n    baseURL: string;\n    createdAt: string;\n    description: string;\n    id: string;\n    name: string;\n    config: PluginConfig | undefined;\n    organizationId: string;\n    picture: string;\n    private: boolean;\n    published: boolean;\n    staggered: boolean;\n    tags: string[];\n    type: string;\n    updatedAt: string;\n}\n")),(0,o.kt)("p",null,"Once a plugin is activated, ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin.config")," get's populated. It is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"PluginConfig"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface PluginConfig {\n    name: string,\n    pluginId: string,\n    version: string,\n    description: string,\n    author?: string,\n    repository?: string,\n    tags?: string[],\n    picture?: string,\n    url?: string,\n    files: {\n        include: string[],\n        exclude?: string[],\n    },\n    views?: {\n        [viewId: string]: {\n            url: string,\n            suggestedPosition: string,\n        }\n    },\n    contentScript?: string,\n    permissions?: {\n        [key: string]: {\n            default: boolean,\n            description: string,\n        },\n    },\n    config?: {\n        [key: string]: string,\n    }\n}\n")))}g.isMDXComponent=!0}}]);
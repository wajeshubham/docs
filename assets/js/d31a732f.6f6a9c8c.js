"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[51769],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),g=u(t),d=i,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return t?r.createElement(m,o(o({ref:e},c),{},{components:t})):r.createElement(m,o({ref:e},c))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},63249:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return g}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={title:"Introduction",description:"Manage plugins in a meeting.",slug:"introduction",tags:["web-core","plugins"]},s="Introduction",u={unversionedId:"Plugins/introduction",id:"version-0.2/Plugins/introduction",isDocsHomePage:!1,title:"Introduction",description:"Manage plugins in a meeting.",source:"@site/react-native-core_versioned_docs/version-0.2/08-Plugins/01-introduction.mdx",sourceDirName:"08-Plugins",slug:"/Plugins/introduction",permalink:"/react-native-core/Plugins/introduction",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native-core_versioned_docs/version-0.2/08-Plugins/01-introduction.mdx",tags:[{label:"web-core",permalink:"/react-native-core/tags/web-core"},{label:"plugins",permalink:"/react-native-core/tags/plugins"}],version:"0.2",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1656917641,formattedLastUpdatedAt:"7/4/2022",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Manage plugins in a meeting.",slug:"introduction",tags:["web-core","plugins"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Other poll functions",permalink:"/react-native-core/Polls/other-poll-functions"},next:{title:"Functions to enable plugins",permalink:"/react-native-core/Plugins/enable-plugin"}},c=[],p={toc:c};function g(n){var e=n.components,t=(0,i.Z)(n,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Plugins are one-click add-ons that can make your meetings more immersive and collaborative. Dyte provides a bunch of inbuilt plugins to choose from, you can also build your own plugins using the Plugin SDK."),(0,a.kt)("p",null,"The meeting plugins can be accessed from the ",(0,a.kt)("inlineCode",{parentName:"p"},"meeting.plugins")," object, it exposes the following."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"active"),(0,a.kt)("td",{parentName:"tr",align:null},"Map"),(0,a.kt)("td",{parentName:"tr",align:null},"All plugins that are currently in use.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"all"),(0,a.kt)("td",{parentName:"tr",align:null},"Map"),(0,a.kt)("td",{parentName:"tr",align:null},"All plugins the meeting has access to.")))),(0,a.kt)("p",null,"Each plugin in the map is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"DytePlugin"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface DytePlugin {\n    baseURL: string;\n    createdAt: string;\n    description: string;\n    id: string;\n    name: string;\n    config: PluginConfig | undefined;\n    organizationId: string;\n    picture: string;\n    private: boolean;\n    published: boolean;\n    staggered: boolean;\n    tags: string[];\n    type: string;\n    updatedAt: string;\n}\n")),(0,a.kt)("p",null,"Once a plugin is activated, ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin.config")," get's populated. It is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"PluginConfig"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface PluginConfig {\n    name: string,\n    pluginId: string,\n    version: string,\n    description: string,\n    author?: string,\n    repository?: string,\n    tags?: string[],\n    picture?: string,\n    url?: string,\n    files: {\n        include: string[],\n        exclude?: string[],\n    },\n    views?: {\n        [viewId: string]: {\n            url: string,\n            suggestedPosition: string,\n        }\n    },\n    contentScript?: string,\n    permissions?: {\n        [key: string]: {\n            default: boolean,\n            description: string,\n        },\n    },\n    config?: {\n        [key: string]: string,\n    }\n}\n")))}g.isMDXComponent=!0}}]);
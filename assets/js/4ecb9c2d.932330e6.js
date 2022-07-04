"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[11244],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99783:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],p={sidebar_position:11,web_core_version:"0.26.0"},c=void 0,u={unversionedId:"Reference/DytePluginMap",id:"version-0.26.x/Reference/DytePluginMap",isDocsHomePage:!1,title:"DytePluginMap",description:"This is a map of plugins, indexed by plugin.id.",source:"@site/web-core_versioned_docs/version-0.26.x/Reference/DytePluginMap.md",sourceDirName:"Reference",slug:"/Reference/DytePluginMap",permalink:"/web-core/0.26.x/Reference/DytePluginMap",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.26.x/Reference/DytePluginMap.md",tags:[],version:"0.26.x",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1656917641,formattedLastUpdatedAt:"7/4/2022",sidebarPosition:11,frontMatter:{sidebar_position:11,web_core_version:"0.26.0"},sidebar:"version-0.26.x/mainSidebar",previous:{title:"DytePlugins",permalink:"/web-core/0.26.x/Reference/DytePlugins"},next:{title:"DytePlugin",permalink:"/web-core/0.26.x/Reference/DytePlugin"}},l=[],s={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_DytePluginMap"}),(0,o.kt)("p",null,"This is a map of plugins, indexed by ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin.id"),".\nThis map emits an event whenever a plugin present in the map emits an event.\nFor example, when a plugin is added to this map, a ",(0,o.kt)("inlineCode",{parentName:"p"},"pluginAdded")," event is\nemitted from the map. When a plugin object emits an event ",(0,o.kt)("inlineCode",{parentName:"p"},"stateUpdate"),", the map\nre-emits that event (provided the plugin is present in the map)."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[51815],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={sidebar_position:11,web_core_version:"0.18.1"},p=void 0,u={unversionedId:"Reference/DytePluginMap",id:"version-0.2/Reference/DytePluginMap",isDocsHomePage:!1,title:"DytePluginMap",description:"This is a map of plugins, indexed by plugin.id.",source:"@site/react-native-core_versioned_docs/version-0.2/Reference/DytePluginMap.md",sourceDirName:"Reference",slug:"/Reference/DytePluginMap",permalink:"/react-native-core/Reference/DytePluginMap",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native-core_versioned_docs/version-0.2/Reference/DytePluginMap.md",tags:[],version:"0.2",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1656917641,formattedLastUpdatedAt:"7/4/2022",sidebarPosition:11,frontMatter:{sidebar_position:11,web_core_version:"0.18.1"},sidebar:"version-0.2/mainSidebar",previous:{title:"DytePlugins",permalink:"/react-native-core/Reference/DytePlugins"},next:{title:"DytePlugin",permalink:"/react-native-core/Reference/DytePlugin"}},l=[],s={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_DytePluginMap"}),(0,o.kt)("p",null,"This is a map of plugins, indexed by ",(0,o.kt)("inlineCode",{parentName:"p"},"plugin.id"),".\nThis map emits an event whenever a plugin present in the map emits an event.\nFor example, when a plugin is added to this map, a ",(0,o.kt)("inlineCode",{parentName:"p"},"pluginAdded")," event is\nemitted from the map. When a plugin object emits an event ",(0,o.kt)("inlineCode",{parentName:"p"},"stateUpdate"),", the map\nre-emits that event (provided the plugin is present in the map)."))}d.isMDXComponent=!0}}]);
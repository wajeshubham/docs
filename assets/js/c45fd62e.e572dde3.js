"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[9362],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),g=p(n),s=l,c=g["".concat(o,".").concat(s)]||g[s]||m[s]||i;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=g;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,r[1]=u;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},14982:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var a=n(87462),l=n(63366),i=(n(67294),n(3905)),r=["components"],u={sidebar_position:12,web_core_version:"0.26.0"},o=void 0,p={unversionedId:"Reference/DytePlugin",id:"version-0.26.x/Reference/DytePlugin",isDocsHomePage:!1,title:"DytePlugin",description:"The DytePlugin module represents a single plugin in the meeting.",source:"@site/web-core_versioned_docs/version-0.26.x/Reference/DytePlugin.md",sourceDirName:"Reference",slug:"/Reference/DytePlugin",permalink:"/web-core/Reference/DytePlugin",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.26.x/Reference/DytePlugin.md",tags:[],version:"0.26.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:12,frontMatter:{sidebar_position:12,web_core_version:"0.26.0"},sidebar:"version-0.26.x/mainSidebar",previous:{title:"DytePluginMap",permalink:"/web-core/Reference/DytePluginMap"},next:{title:"DyteThemePreset",permalink:"/web-core/Reference/DyteThemePreset"}},d=[{value:"plugin.sendIframeEvent(message)",id:"pluginsendiframeeventmessage",children:[]},{value:"plugin.sendData(data)",id:"pluginsenddatadata",children:[]},{value:"plugin.removePluginView(viewId)",id:"pluginremovepluginviewviewid",children:[]},{value:"plugin.addPluginView(iframe, viewId)",id:"pluginaddpluginviewiframe-viewid",children:[]},{value:"plugin.enable()",id:"pluginenable",children:[]},{value:"plugin.disable()",id:"plugindisable",children:[]},{value:"plugin.activate()",id:"pluginactivate",children:[]},{value:"plugin.deactivate()",id:"plugindeactivate",children:[]}],m={toc:d};function g(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"module_DytePlugin"}),(0,i.kt)("p",null,"The DytePlugin module represents a single plugin in the meeting.\nA plugin can be obtained from one of the plugin arrays in ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.plugins"),".\nFor example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const plugin1 = meeting.plugins.active.get(pluginId);\nconst plugin2 = meeting.plugins.all.get(pluginId);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DytePlugin"},"DytePlugin"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DytePlugin+sendIframeEvent"},".sendIframeEvent(message)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DytePlugin+sendData"},".sendData(data)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DytePlugin+removePluginView"},".removePluginView(viewId)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DytePlugin+addPluginView"},".addPluginView(iframe, viewId)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DytePlugin+enable"},".enable()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DytePlugin+disable"},".disable()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DytePlugin+activate"},".activate()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#module_DytePlugin+deactivate"},".deactivate()"))))),(0,i.kt)("a",{name:"module_DytePlugin+sendIframeEvent"}),(0,i.kt)("h3",{id:"pluginsendiframeeventmessage"},"plugin.sendIframeEvent(message)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,i.kt)("code",null,"DytePlugin")),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"message"),(0,i.kt)("td",{parentName:"tr",align:null},"Socket message forwarded to this plugin.")))),(0,i.kt)("a",{name:"module_DytePlugin+sendData"}),(0,i.kt)("h3",{id:"pluginsenddatadata"},"plugin.sendData(data)"),(0,i.kt)("p",null,"This method is used to send arbitrary data to the plugin."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,i.kt)("code",null,"DytePlugin")),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"data"),(0,i.kt)("td",{parentName:"tr",align:null},"The data that you want to send inside the plugin.")))),(0,i.kt)("a",{name:"module_DytePlugin+removePluginView"}),(0,i.kt)("h3",{id:"pluginremovepluginviewviewid"},"plugin.removePluginView(viewId)"),(0,i.kt)("p",null,"This method is used for cleaning up event listeners attached to an iframe. It must\nbe used before the iframe is removed from the DOM."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,i.kt)("code",null,"DytePlugin")),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"viewId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"default")),(0,i.kt)("td",{parentName:"tr",align:null},"ID of the view corresponding to this iframe. Default is 'default'.")))),(0,i.kt)("a",{name:"module_DytePlugin+addPluginView"}),(0,i.kt)("h3",{id:"pluginaddpluginviewiframe-viewid"},"plugin.addPluginView(iframe, viewId)"),(0,i.kt)("p",null,"This method adds the communcation layer between the plugin inside the iframe\nand the core application (meeting object) in the main window."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,i.kt)("code",null,"DytePlugin")),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"iframe"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Iframe element to display this plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"viewId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"default")),(0,i.kt)("td",{parentName:"tr",align:null},"ID of the view corresponding to this iframe. Default is 'default'.")))),(0,i.kt)("a",{name:"module_DytePlugin+enable"}),(0,i.kt)("h3",{id:"pluginenable"},"plugin.enable()"),(0,i.kt)("p",null,"Enable this plugin for the current user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,i.kt)("code",null,"DytePlugin")),"  "),(0,i.kt)("a",{name:"module_DytePlugin+disable"}),(0,i.kt)("h3",{id:"plugindisable"},"plugin.disable()"),(0,i.kt)("p",null,"Disable this plugin for the current user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,i.kt)("code",null,"DytePlugin")),"  "),(0,i.kt)("a",{name:"module_DytePlugin+activate"}),(0,i.kt)("h3",{id:"pluginactivate"},"plugin.activate()"),(0,i.kt)("p",null,"Activate this plugin for all participants."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,i.kt)("code",null,"DytePlugin")),"  "),(0,i.kt)("a",{name:"module_DytePlugin+deactivate"}),(0,i.kt)("h3",{id:"plugindeactivate"},"plugin.deactivate()"),(0,i.kt)("p",null,"Deactivate this plugin for all participants."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,i.kt)("a",{parentName:"p",href:"#module_DytePlugin"},(0,i.kt)("code",null,"DytePlugin"))))}g.isMDXComponent=!0}}]);
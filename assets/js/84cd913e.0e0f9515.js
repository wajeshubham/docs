"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[4101],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(55064),u=n(58215),l=["components"],c={sidebar_position:7},s="Virtual Background",d={unversionedId:"virtual-background",id:"version-0.33.x/virtual-background",isDocsHomePage:!1,title:"Virtual Background",description:"To add virtual backgroung you need to install a new npm package.",source:"@site/react_versioned_docs/version-0.33.x/virtual-background.mdx",sourceDirName:".",slug:"/virtual-background",permalink:"/react/virtual-background",editUrl:"https://github.com/dyte-in/docs/tree/main/react_versioned_docs/version-0.33.x/virtual-background.mdx",tags:[],version:"0.33.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-0.33.x/mainSidebar",previous:{title:"Sample app",permalink:"/react/sample-app"},next:{title:"DyteMeeting (React component)",permalink:"/react/reference/dyte-meeting"}},p=[{value:"Usage",id:"usage",children:[]}],g={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"virtual-background"},"Virtual Background"),(0,o.kt)("p",null,"To add virtual backgroung you need to install a new npm package."),(0,o.kt)(i.Z,{groupId:"node-pm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save @dytesdk/background-changer-module\n"))),(0,o.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @dytesdk/background-changer-module\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import backgroundModule from '@dytesdk/background-changer-module';\n\n<DyteMeeting\n          onInit={(meeting: Meeting) => {\n                 meeting.modules.initAndAdd(backgroundModule);\n          }}\n          clientId={clientId}\n          meetingConfig={meetingConfig}\n        />\n")),(0,o.kt)("p",null,"To add your own images"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {createAndGetModule} from '@dytesdk/background-changer-module';\n\nconst backgroundModule = createAndGetModule({\n  defaultImageUrl: undefined,\n  imageUrls: [\n    'https://assets.dyte.io/backgrounds/bg_0.jpg',\n    'https://assets.dyte.io/backgrounds/bg_1.jpg',\n    'https://assets.dyte.io/backgrounds/bg_2.jpg',\n    'https://assets.dyte.io/backgrounds/bg_3.jpg',\n    'https://assets.dyte.io/backgrounds/bg_4.jpg',\n    'https://assets.dyte.io/backgrounds/bg_5.jpg',\n    'https://assets.dyte.io/backgrounds/bg_6.jpg',\n    'https://assets.dyte.io/backgrounds/bg_7.jpeg',\n  ]\n});\n\n\n<DyteMeeting\n          onInit={(meeting: Meeting) => {\n                 meeting.modules.initAndAdd(backgroundModule);\n          }}\n          clientId={clientId}\n          meetingConfig={meetingConfig}\n        />\n\n")))}m.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),u="tabItem_1uMI",l="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,s=e.values,d=e.groupId,p=e.className,g=r.Children.toArray(e.children),m=null!=s?s:g.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value,b=o(),v=b.tabGroupChoices,y=b.setTabGroupChoices,k=(0,r.useState)(f),h=k[0],O=k[1],w=[];if(null!=d){var j=v[d];null!=j&&j!==h&&m.some((function(e){return e.value===j}))&&O(j)}var x=function(e){var t=e.currentTarget,n=w.indexOf(t),r=m[n].value;O(r),null!=d&&(y(d,r),setTimeout((function(){var e,n,r,a,o,i,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,u=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},p)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.default)("tabs__item",u,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{default:function(){return a}})}}]);
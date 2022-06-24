"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[77938],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=l,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9175:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),l=n(63366),o=(n(67294),n(3905)),a=["components"],i={sidebar_position:9,web_core_version:"0.26.0"},s=void 0,p={unversionedId:"Reference/DytePolls",id:"version-0.26.x/Reference/DytePolls",isDocsHomePage:!1,title:"DytePolls",description:"The DytePolls module consists of the polls that have been created in the meeting.",source:"@site/web-core_versioned_docs/version-0.26.x/Reference/DytePolls.md",sourceDirName:"Reference",slug:"/Reference/DytePolls",permalink:"/web-core/Reference/DytePolls",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.26.x/Reference/DytePolls.md",tags:[],version:"0.26.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:9,frontMatter:{sidebar_position:9,web_core_version:"0.26.0"},sidebar:"version-0.26.x/mainSidebar",previous:{title:"DyteChat",permalink:"/web-core/Reference/DyteChat"},next:{title:"DytePlugins",permalink:"/web-core/Reference/DytePlugins"}},u=[{value:"meeting.polls.items",id:"meetingpollsitems",children:[]},{value:"meeting.polls.create(question, options, anonymous, hideVotes)",id:"meetingpollscreatequestion-options-anonymous-hidevotes",children:[]},{value:"meeting.polls.vote(pollId, index)",id:"meetingpollsvotepollid-index",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"module_DytePolls"}),(0,o.kt)("p",null,"The DytePolls module consists of the polls that have been created in the meeting."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_DytePolls"},"DytePolls"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_DytePolls+items"},".items")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_DytePolls+create"},".create(question, options, anonymous, hideVotes)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#module_DytePolls+vote"},".vote(pollId, index)"))))),(0,o.kt)("a",{name:"module_DytePolls+items"}),(0,o.kt)("h3",{id:"meetingpollsitems"},"meeting.polls.items"),(0,o.kt)("p",null,"An array of poll items."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,o.kt)("a",{parentName:"p",href:"#module_DytePolls"},(0,o.kt)("code",null,"DytePolls")),"  "),(0,o.kt)("a",{name:"module_DytePolls+create"}),(0,o.kt)("h3",{id:"meetingpollscreatequestion-options-anonymous-hidevotes"},"meeting.polls.create(question, options, anonymous, hideVotes)"),(0,o.kt)("p",null,"Creates a poll in the meeting."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_DytePolls"},(0,o.kt)("code",null,"DytePolls")),"  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"question"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The question that is to be voted for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"The options of the poll.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"anonymous"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"false")),(0,o.kt)("td",{parentName:"tr",align:null},"If true, the poll votes are anonymous.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hideVotes"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"false")),(0,o.kt)("td",{parentName:"tr",align:null},"If true, the votes on the poll are hidden.")))),(0,o.kt)("a",{name:"module_DytePolls+vote"}),(0,o.kt)("h3",{id:"meetingpollsvotepollid-index"},"meeting.polls.vote(pollId, index)"),(0,o.kt)("p",null,"Casts a vote on an existing poll."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"#module_DytePolls"},(0,o.kt)("code",null,"DytePolls")),"  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Param"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pollId"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID of the poll that is to be voted on.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"index"),(0,o.kt)("td",{parentName:"tr",align:null},"The index of the option.")))))}d.isMDXComponent=!0}}]);
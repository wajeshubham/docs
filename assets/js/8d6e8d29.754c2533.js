"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[5993],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45449:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Creating a poll",description:"Create polls in a meeting.",slug:"creating-a-poll",tags:["web-core","polls","create"]},p="Creating a poll",c={unversionedId:"Polls/creating-a-poll",id:"version-0.2/Polls/creating-a-poll",isDocsHomePage:!1,title:"Creating a poll",description:"Create polls in a meeting.",source:"@site/web-core_versioned_docs/version-0.2/07-Polls/02-creating-a-poll.mdx",sourceDirName:"07-Polls",slug:"/Polls/creating-a-poll",permalink:"/web-core/0.2/Polls/creating-a-poll",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.2/07-Polls/02-creating-a-poll.mdx",tags:[{label:"web-core",permalink:"/web-core/0.2/tags/web-core"},{label:"polls",permalink:"/web-core/0.2/tags/polls"},{label:"create",permalink:"/web-core/0.2/tags/create"}],version:"0.2",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1656917641,formattedLastUpdatedAt:"7/4/2022",sidebarPosition:2,frontMatter:{title:"Creating a poll",description:"Create polls in a meeting.",slug:"creating-a-poll",tags:["web-core","polls","create"]},sidebar:"version-0.2/mainSidebar",previous:{title:"Introduction",permalink:"/web-core/0.2/Polls/introduction"},next:{title:"Voting on a poll",permalink:"/web-core/0.2/Polls/voting-on-a-poll"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"creating-a-poll"},"Creating a poll"),(0,l.kt)("p",null,"A new poll can be created using the ",(0,l.kt)("inlineCode",{parentName:"p"},"create")," method from the ",(0,l.kt)("a",{parentName:"p",href:"./introduction"},(0,l.kt)("inlineCode",{parentName:"a"},"meeting.polls"))," object. The ",(0,l.kt)("inlineCode",{parentName:"p"},"meeting.polls.create()")," method accepts the following params."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"question"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The question that is to be voted for.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The options of the poll.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"anonymous"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, the poll votes are anonymous.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideVotes"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, the votes on the poll are hidden.")))),(0,l.kt)("p",null,"The following snippet creates a poll where votes are anonymous."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"await meeting.poll.create(\n    'Are you an early bird or a night owl?',\n    ['Early bird', 'Night owl'],\n    true\n)\n")))}m.isMDXComponent=!0}}]);
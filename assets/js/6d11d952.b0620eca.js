"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[64978],{48411:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return m},default:function(){return l}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=n(70499),o=["components"],u={},c="Sidebar [WIP]",d={unversionedId:"Customization/organisms/dyte-sidebar",id:"version-0.2/Customization/organisms/dyte-sidebar",isDocsHomePage:!1,title:"Sidebar [WIP]",description:"A Sidebar component which groups multiple components:",source:"@site/react-ui-kit_versioned_docs/version-0.2/04-Customization/05-organisms/dyte-sidebar.mdx",sourceDirName:"04-Customization/05-organisms",slug:"/Customization/organisms/dyte-sidebar",permalink:"/react-ui-kit/Customization/organisms/dyte-sidebar",editUrl:"https://github.com/dyte-in/docs/tree/main/react-ui-kit_versioned_docs/version-0.2/04-Customization/05-organisms/dyte-sidebar.mdx",tags:[],version:"0.2",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",frontMatter:{},sidebar:"version-0.2/mainSidebar",previous:{title:"Settings",permalink:"/react-ui-kit/Customization/organisms/dyte-settings"}},m=[],p={toc:m};function l(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sidebar-wip"},"Sidebar ","[WIP]"),(0,a.kt)("p",null,"A Sidebar component which groups multiple components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chat"),(0,a.kt)("li",{parentName:"ul"},"Participants"),(0,a.kt)("li",{parentName:"ul"},"Plugins")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<DyteSidebar view="full-screen" meeting={meeting} />\n')),(0,a.kt)("div",{className:"chat-preview relative",ref:function(){return(0,s.XH)("dyte-el")}},(0,a.kt)("dyte-sidebar",{id:"dyte-el",view:"full-screen",style:{width:"100%",height:"100%",display:"block"},ref:function(t){t&&(t.states={sidebar:"chat"})}})))}l.isMDXComponent=!0},70499:function(t,e,n){n.d(e,{XH:function(){return d},iY:function(){return m},GB:function(){return p},J1:function(){return l}});var r=n(55196),i=n(15861),a=n(87757),s=n.n(a),o=n(28285);function u(){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.meeting){t.next=5;break}return t.next=3,o.Z.init({authToken:"",roomName:"",defaults:{audio:!1,video:!1}});case 3:e=t.sent,window.meeting=e;case 5:return t.abrupt("return",window.meeting);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=function(){var t=(0,i.Z)(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:return n=t.sent,(r=document.getElementById(e))&&(r.meeting=n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,i.Z)(s().mark((function t(e){var n,i,a,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:for(n=t.sent,i=document.getElementsByClassName(e),a=(0,r.Z)(i);!(o=a()).done;)o.value.meeting=n;return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,i.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:return n=t.sent,document.querySelectorAll(e).forEach((function(t){t.peer=n.self,t.meeting=n})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,i.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=document.getElementById(e))&&(n.notification={id:"notif-1",message:"A notification message."});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[15218],{68699:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=i(87462),r=i(63366),a=(i(67294),i(3905)),o=i(70499),u=["components"],s={sidebar_position:2},c="Audio Visualizer",d={unversionedId:"customization/atoms/dyte-audio-visualizer",id:"version-0.2/customization/atoms/dyte-audio-visualizer",isDocsHomePage:!1,title:"Audio Visualizer",description:"Audio Visualizer component is used inside peer view and participant views which displays user's audio level.",source:"@site/ui-kit_versioned_docs/version-0.2/customization/03-atoms/dyte-audio-visualizer.md",sourceDirName:"customization/03-atoms",slug:"/customization/atoms/dyte-audio-visualizer",permalink:"/ui-kit/customization/atoms/dyte-audio-visualizer",editUrl:"https://github.com/dyte-in/docs/tree/main/ui-kit_versioned_docs/version-0.2/customization/03-atoms/dyte-audio-visualizer.md",tags:[],version:"0.2",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-0.2/mainSidebar",previous:{title:"Avatar",permalink:"/ui-kit/customization/atoms/dyte-avatar"},next:{title:"Button",permalink:"/ui-kit/customization/atoms/dyte-button"}},p=[],l={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"audio-visualizer"},"Audio Visualizer"),(0,a.kt)("p",null,"Audio Visualizer component is used inside peer view and participant views which displays user's audio level."),(0,a.kt)("p",null,"You can pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"participant")," object to it to render it properly with a participants data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<dyte-audio-visualizer />\n")),(0,a.kt)("p",null,"Sizes ",(0,a.kt)("inlineCode",{parentName:"p"},"'sm' | 'md' | 'lg'")),(0,a.kt)("div",{className:"ui-preview space-x-4",ref:function(){return(0,o.GB)(".peerview")}},(0,a.kt)("dyte-audio-visualizer",{class:"peerview",size:"sm"}),(0,a.kt)("dyte-audio-visualizer",{class:"peerview",size:"md"}),(0,a.kt)("dyte-audio-visualizer",{class:"peerview",size:"lg"})))}m.isMDXComponent=!0},70499:function(e,t,i){i.d(t,{XH:function(){return d},iY:function(){return p},GB:function(){return l},J1:function(){return m}});var n=i(55196),r=i(15861),a=i(87757),o=i.n(a),u=i(28285);function s(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.meeting){e.next=5;break}return e.next=3,u.Z.init({authToken:"",roomName:"",defaults:{audio:!1,video:!1}});case 3:t=e.sent,window.meeting=t;case 5:return e.abrupt("return",window.meeting);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=function(){var e=(0,r.Z)(o().mark((function e(t){var i,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return i=e.sent,(n=document.getElementById(t))&&(n.meeting=i),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t){var i,r,a,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:for(i=e.sent,r=document.getElementsByClassName(t),a=(0,n.Z)(r);!(u=a()).done;)u.value.meeting=i;return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(t){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return i=e.sent,document.querySelectorAll(t).forEach((function(e){e.peer=i.self,e.meeting=i})),e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(o().mark((function e(t){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(i=document.getElementById(t))&&(i.notification={id:"notif-1",message:"A notification message."});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
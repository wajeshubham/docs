"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[21318],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=l(n),p=s,u=g["".concat(c,".").concat(p)]||g[p]||m[p]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73218:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return g}});var a=n(87462),s=n(63366),i=(n(67294),n(3905)),r=["components"],o={title:"Sending a chat message",description:"Send a chat message in a meeting.",slug:"sending-a-chat-message",tags:["web-core","chat"]},c="Sending a chat message",l={unversionedId:"Chat/sending-a-chat-message",id:"version-0.25.x/Chat/sending-a-chat-message",isDocsHomePage:!1,title:"Sending a chat message",description:"Send a chat message in a meeting.",source:"@site/web-core_versioned_docs/version-0.25.x/06-Chat/02-sending-a-chat-message.mdx",sourceDirName:"06-Chat",slug:"/Chat/sending-a-chat-message",permalink:"/web-core/0.25.x/Chat/sending-a-chat-message",editUrl:"https://github.com/dyte-in/docs/tree/main/web-core_versioned_docs/version-0.25.x/06-Chat/02-sending-a-chat-message.mdx",tags:[{label:"web-core",permalink:"/web-core/0.25.x/tags/web-core"},{label:"chat",permalink:"/web-core/0.25.x/tags/chat"}],version:"0.25.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:2,frontMatter:{title:"Sending a chat message",description:"Send a chat message in a meeting.",slug:"sending-a-chat-message",tags:["web-core","chat"]},sidebar:"version-0.25.x/mainSidebar",previous:{title:"Introducing chat",permalink:"/web-core/0.25.x/Chat/introduction"},next:{title:"Receiving chat messages",permalink:"/web-core/0.25.x/Chat/receiving-chat-messages"}},d=[{value:"Send a text message",id:"send-a-text-message",children:[]},{value:"Send an image",id:"send-an-image",children:[]},{value:"Send a file",id:"send-a-file",children:[]},{value:"Extra",id:"extra",children:[]}],m={toc:d};function g(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-a-chat-message"},"Sending a chat message"),(0,i.kt)("p",null,"As mentioned in ",(0,i.kt)("a",{parentName:"p",href:"./introduction"},"introduction"),", there are 3 types of chat messages - text messages, images, and files. There is a method in ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.chat")," to send a message of each type."),(0,i.kt)("h2",{id:"send-a-text-message"},"Send a text message"),(0,i.kt)("p",null,"To send a text message, the ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.chat.sendTextMessage()")," method can be used. This accepts a string ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," and sends it to the room."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const message = 'Is this the real life?';\nawait meeting.chat.sendTextMessage(message);\n")),(0,i.kt)("h2",{id:"send-an-image"},"Send an image"),(0,i.kt)("p",null,"You can send an image with the help of ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.chat.sendImageMessage()"),". This accepts an image of type ",(0,i.kt)("inlineCode",{parentName:"p"},"File"),", and sends it to the participants in the meeting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<label for="img">Select image:</label>\n<input type="file" id="img" name="img" accept="image/*">\n<button onclick="onSendImage()">Send Image</button>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"async function onSendImage() {\n    const image = document.getElementById('img');\n    await meeting.chat.sendImageMessage(image.files[0]);\n}\n")),(0,i.kt)("h2",{id:"send-a-file"},"Send a file"),(0,i.kt)("p",null,"Sending a file is quite similar to sending an image. The only difference is that when you send an image, a preview will be shown in the meeting chat, which is not the case for sending files. That being said, an image can be sent as a file too using ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.chat.sendFileMessage()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<label for="file">Select image:</label>\n<input type="file" id="file" name="file">\n<button onclick="onSendFile()">Send Image</button>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"async function onSendFile() {\n    const file = document.getElementById('file');\n    await meeting.chat.sendFileMessage(file.files[0]);\n}\n")),(0,i.kt)("h2",{id:"extra"},"Extra"),(0,i.kt)("p",null,"There is also a common method called ",(0,i.kt)("inlineCode",{parentName:"p"},"meeting.chat.sendMessage()")," that can be used to send any of the 3 types of messages displayed above. It essentially calls one of the methods from above depending upon the type of payload you send to the method. The ",(0,i.kt)("inlineCode",{parentName:"p"},"sendMessage()")," method accepts a parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," of the following type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"async function sendMessage(\n    message: { type: 'text', message: string }\n        | { type: 'image', image: File }\n        | { type: 'file', file: File },\n) {...}\n")),(0,i.kt)("p",null,"Here's how you would use the ",(0,i.kt)("inlineCode",{parentName:"p"},"sendMessage()")," method to send a text message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const message = 'Is this just fantasy?';\nawait meeting.chat.sendMessage({ type: 'text', message });\n")))}g.isMDXComponent=!0}}]);
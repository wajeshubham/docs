"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[99305],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93741:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],c={sidebar_position:1},u="Installation",p={unversionedId:"installation",id:"version-0.13.x/installation",isDocsHomePage:!1,title:"Installation",description:"1. Install the client SDK from npm",source:"@site/react-native_versioned_docs/version-0.13.x/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/react-native/0.13.x/installation",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.13.x/installation.mdx",tags:[],version:"0.13.x",lastUpdatedBy:"Palash",lastUpdatedAt:1656071859,formattedLastUpdatedAt:"6/24/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.13.x/mainSidebar",next:{title:"Quickstart",permalink:"/react-native/0.13.x/quickstart"}},d=[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the client SDK from npm")),(0,o.kt)(i.Z,{groupId:"node-pm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @dytesdk/mobile\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @dytesdk/mobile\n")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install external dependencies required by our SDK")),(0,o.kt)(i.Z,{groupId:"node-pm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react-native-webview react-native-webrtc @react-native-async-storage/async-storage react-native-vector-icons\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add react-native-webview react-native-webrtc @react-native-async-storage/async-storage react-native-vector-icons\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add this to the root of your project")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { registerGlobals } from "react-native-webrtc";\n\nregisterGlobals();\n')),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The below instructions are for the release builds, debug builds should work without any additional steps."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit your ",(0,o.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")," and add the following line")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"android.enableDexingArtifactTransform.desugaring=false\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create / append to the file ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/proguard-rules.pro"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-keep class org.webrtc.** { *; }\n-dontwarn org.chromium.build.BuildHooksAndroid\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In your ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," edit the release configuration and add the following line importing the proguard configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"buildTypes {\n        release {\n            ...\n            ...\n            ...\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n        }\n    }\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you encounter chinese characters in your app instead of icons, please apply this fix mentioned in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons/issues/1106#issuecomment-574683931"},"react-native-vector-icons issue")))),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"iOS minimum version 12.0")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We support minimum OS version ",(0,o.kt)("inlineCode",{parentName:"p"},"12.0")," for our iOS SDK."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your podfile and make sure your platform is set to ios 12 ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"platform :ios, '12.0'\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add the fonts and permission entries in ",(0,o.kt)("inlineCode",{parentName:"li"},"info.plist"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<key>UIAppFonts</key>\n<array>\n    <string>MaterialCommunityIcons.ttf</string>\n    <string>MaterialIcons.ttf</string>\n</array>\n<key>NSBluetoothPeripheralUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSBluetoothAlwaysUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSCameraUsageDescription</key>\n<string>For people to see you during meetings, we need access to your camera.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>For people to hear you during meetings, we need access to your microphone.</string>\n<key>NSPhotoLibraryUsageDescription</key>\n<string>For people to share, we need access to your photos.</string>\n<key>UIViewControllerBasedStatusBarAppearance</key>\n<false/>\n")))}v.isMDXComponent=!0},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),v=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),k=g.tabGroupChoices,h=g.setTabGroupChoices,y=(0,a.useState)(f),b=y[0],N=y[1],w=[];if(null!=p){var x=k[p];null!=x&&x!==b&&v.some((function(e){return e.value===x}))&&N(x)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=v[n].value;N(a),null!=p&&(h(p,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":r},d)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.default)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.r(t),n.d(t,{default:function(){return r}})}}]);
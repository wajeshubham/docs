"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[20314],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69360:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],c={sidebar_position:1},u="Installation",d={unversionedId:"installation",id:"version-0.4.x/installation",isDocsHomePage:!1,title:"Installation",description:"1. Install the client SDK from npm",source:"@site/react-native_versioned_docs/version-0.4.x/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/react-native/0.4.x/installation",editUrl:"https://github.com/dyte-in/docs/tree/main/react-native_versioned_docs/version-0.4.x/installation.mdx",tags:[],version:"0.4.x",lastUpdatedBy:"Rohan Mukherjee",lastUpdatedAt:1656319568,formattedLastUpdatedAt:"6/27/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.4.0/mainSidebar",next:{title:"Quickstart",permalink:"/react-native/0.4.x/quickstart"}},p=[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the client SDK from npm")),(0,o.kt)(i.Z,{groupId:"node-pm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @dytesdk/mobile\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @dytesdk/mobile\n")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install external dependencies required by our SDK")),(0,o.kt)(i.Z,{groupId:"node-pm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react-native-webview react-native-webrtc @react-native-async-storage/async-storage react-native-vector-icons\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add react-native-webview react-native-webrtc @react-native-async-storage/async-storage react-native-vector-icons\n")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add this to the root of your project")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { registerGlobals } from "react-native-webrtc";\n\nregisterGlobals();\n')),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The below instructions are for the release builds, debug builds should work without any additional steps."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit your ",(0,o.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")," and add the following line")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"android.enableDexingArtifactTransform.desugaring=false\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create / append to the file ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/proguard-rules.pro"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-keep class org.webrtc.** { *; }\n-dontwarn org.chromium.build.BuildHooksAndroid\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In your ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," edit the release configuration and add the following line importing the proguard configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"buildTypes {\n        release {\n            ...\n            ...\n            ...\n            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n        }\n    }\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you encounter chinese characters in your app instead of icons, please apply this fix mentioned in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons/issues/1106#issuecomment-574683931"},"react-native-vector-icons issue")))),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"Add the fonts and permission entries in ",(0,o.kt)("inlineCode",{parentName:"p"},"info.plist")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<key>UIAppFonts</key>\n<array>\n    <string>MaterialCommunityIcons.ttf</string>\n    <string>MaterialIcons.ttf</string>\n</array>\n<key>NSBluetoothPeripheralUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSBluetoothAlwaysUsageDescription</key>\n<string>We will use your Bluetooth to access your Bluetooth headphones.</string>\n<key>NSCameraUsageDescription</key>\n<string>For people to see you during meetings, we need access to your camera.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>For people to hear you during meetings, we need access to your microphone.</string>\n<key>NSPhotoLibraryUsageDescription</key>\n<string>For people to share, we need access to your photos.</string>\n<key>UIViewControllerBasedStatusBarAppearance</key>\n<false/>\n")))}f.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,a=e.block,c=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=r.Children.toArray(e.children),f=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),y=g.tabGroupChoices,h=g.setTabGroupChoices,k=(0,r.useState)(v),b=k[0],N=k[1],w=[];if(null!=d){var x=y[d];null!=x&&x!==b&&f.some((function(e){return e.value===x}))&&N(x)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;N(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":a},p)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.default)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{default:function(){return a}})}}]);
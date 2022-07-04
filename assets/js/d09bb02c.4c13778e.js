"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([[94975],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,p=f["".concat(u,".").concat(m)]||f[m]||d[m]||o;return n?i.createElement(p,a(a({ref:t},c),{},{components:n})):i.createElement(p,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58392:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return f},default:function(){return p}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=n(55064),l=n(58215),u=["components"],s={sidebar_position:2},c="Quickstart",d={unversionedId:"quickstart",id:"version-1.2.8/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"Get the roomName for the meeting and the participant's authToken from our backend APIs (read more about our server APIs here), and pass them to Dyte's client SDK.",source:"@site/ios_versioned_docs/version-1.2.8/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/ios/1.2.8/quickstart",editUrl:"https://github.com/dyte-in/docs/tree/main/ios_versioned_docs/version-1.2.8/quickstart.mdx",tags:[],version:"1.2.8",lastUpdatedBy:"Vaibhav Shinde",lastUpdatedAt:1656917641,formattedLastUpdatedAt:"7/4/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-1.2.8/mainSidebar",previous:{title:"Installation",permalink:"/ios/1.2.8/installation"},next:{title:"Basic Usage",permalink:"/ios/1.2.8/usage"}},f=[{value:"Programatically",id:"programatically",children:[]},{value:"Using Storyboard",id:"using-storyboard",children:[]}],m={toc:f};function p(e){var t=e.components,s=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"Get the ",(0,o.kt)("inlineCode",{parentName:"p"},"roomName")," for the meeting and the participant's ",(0,o.kt)("inlineCode",{parentName:"p"},"authToken")," from our backend APIs (read more about our server APIs ",(0,o.kt)("a",{parentName:"p",href:"/api/"},"here"),"), and pass them to Dyte's client SDK."),(0,o.kt)("p",null,"There are 2 ways to manage a meeting view:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Programatically"),(0,o.kt)("li",{parentName:"ol"},"Using Storyboard")),(0,o.kt)("h2",{id:"programatically"},"Programatically"),(0,o.kt)(a.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport DyteSdk;\n\nclass ViewController: UIViewController {\n    @IBOutlet weak var videoButton: UIButton?\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        // Do any additional setup after loading the view.\n    }\n\n    @IBAction func joinMeeting(_ sender: Any) {\n        let  config = DyteMeetingConfig();\n        meetingConfig.roomName = "YOUR_ROOM_NAME";\n        meetingConfig.authToken = "YOUR_AUTH_TOKEN";\n        let dyteView = DyteMeetingView(frame: CGRect(x: 0, y: 0, width: self.view.bounds.size.width, height:self.view.bounds.size.height ))\n        self.view.addSubview(dyteView)\n        dyteView.join(config);\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import "ViewController.h"\n@import DyteSdk;\n\n@interface ViewController ()\n\n@end\n\n@implementation ViewController\n\n- (void)viewDidLoad {\n    [super viewDidLoad];\n    // Do any additional setup after loading the view.\n}\n\n- (IBAction)joinMeeting:(UIButton *)sender {\n    DyteMeetingConfig *meetingConfig = [[DyteMeetingConfig alloc] init];\n    meetingConfig.roomName = @"YOUR_ROOM_NAME";\n    meetingConfig.authToken = @"YOUR_AUTH_TOKEN";\n    DyteMeetingView *dyteView = [[DyteMeetingView alloc] initWithFrame:CGRectMake(0.0, 0.0, meetingConfig.width, meetingConfig.height)];\n    [self.view addSubview:dyteView];\n    [dyteView join:meetingConfig];\n}\n\n@end\n')))),(0,o.kt)("h2",{id:"using-storyboard"},"Using Storyboard"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a View in Storyboard and set it's custom class to ",(0,o.kt)("inlineCode",{parentName:"li"},"DyteMeetingView"),". Similar to above example, if you want to use ",(0,o.kt)("inlineCode",{parentName:"li"},"tag"),", you can set that too in Storyboard.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"xcode-screenshot-showing-storyboard-setup",src:n(35874).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Reference the view in your code and initiate the meeting.")),(0,o.kt)(a.Z,{groupId:"ios-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Obj-C",value:"obj-c"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport DyteSdk;\n\nclass ViewController: UIViewController {\n    @IBOutlet weak var videoButton: UIButton?\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        // Do any additional setup after loading the view.\n\n        let  config = DyteMeetingConfig();\n        meetingConfig.roomName = "YOUR_ROOM_NAME";\n        meetingConfig.authToken = "YOUR_AUTH_TOKEN";\n        let dyteView = self.view as DyteMeetingView\n        dyteView.join(config)\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"obj-c",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'#import "ViewController.h"\n@import DyteSdk;\n\n@interface ViewController ()\n\n@end\n\n@implementation ViewController\n\n- (void)viewDidLoad {\n    [super viewDidLoad];\n    // Do any additional setup after loading the view.\n\n    DyteMeetingConfig *meetingConfig = [[DyteMeetingConfig alloc] init];\n    meetingConfig.roomName = @"YOUR_ROOM_NAME";\n    meetingConfig.authToken = @"YOUR_AUTH_TOKEN";\n    DyteMeetingView *dyteView = (DyteMeetingView *) self.view;\n    [dyteView join:meetingConfig];\n}\n\n@end\n')))))}p.isMDXComponent=!0},58215:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(67294),r=n(79443);var o=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(86010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,c=e.values,d=e.groupId,f=e.className,m=i.Children.toArray(e.children),p=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),y=v.tabGroupChoices,b=v.setTabGroupChoices,w=(0,i.useState)(g),h=w[0],k=w[1],O=[];if(null!=d){var C=y[d];null!=C&&C!==h&&p.some((function(e){return e.value===C}))&&k(C)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),i=p[n].value;k(i),null!=d&&(b(d,i),setTimeout((function(){var e,n,i,r,o,a,l,s;(e=t.getBoundingClientRect(),n=e.top,i=e.left,r=e.bottom,o=e.right,a=window,l=a.innerHeight,s=a.innerWidth,n>=0&&o<=s&&r<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=O.indexOf(e.target)+1;n=O[i]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.target)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.default)("tabs",{"tabs--block":r},f)},p.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,a.default)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:N,onFocus:D,onClick:D},null!=n?n:t)}))),n?(0,i.cloneElement)(m.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){var i=(0,n(67294).createContext)(void 0);t.Z=i},86010:function(e,t,n){function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.r(t),n.d(t,{default:function(){return r}})},35874:function(e,t,n){t.Z=n.p+"assets/images/ios-setup-4e05106d2933e92cfaac387752ad62bb.png"}}]);
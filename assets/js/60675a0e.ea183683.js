"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[6895],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1051:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Use Prolific",sidebar_position:7},l=void 0,p={unversionedId:"Run your study/Use-Prolific",id:"version-1.0.0/Run your study/Use-Prolific",isDocsHomePage:!1,title:"Use Prolific",description:"It is very easy to use JATOS together with Prolific to recruit participants.",source:"@site/versioned_docs/version-1.0.0/Run your study/Use-Prolific.md",sourceDirName:"Run your study",slug:"/Run your study/Use-Prolific",permalink:"/before-3.7.1/Run your study/Use-Prolific",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-1.0.0/Run your study/Use-Prolific.md",tags:[],version:"1.0.0",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1638741348,formattedLastUpdatedAt:"12/5/2021",sidebarPosition:7,frontMatter:{title:"Use Prolific",sidebar_position:7},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Use MTurk",permalink:"/before-3.7.1/Run your study/Connect-to-Mechanical-Turk"},next:{title:"Write cross-sectional and longitudinal studies",permalink:"/before-3.7.1/Run your study/Cross-sectional-and-longitudinal-studies"}},c=[{value:"1. Enter your JATOS study link",id:"1-enter-your-jatos-study-link",children:[],level:3},{value:"2. (Optional) Consider passing Prolific URL parameters to your study",id:"2-optional-consider-passing-prolific-url-parameters-to-your-study",children:[],level:3},{value:"3. Redirect to Prolific&#39;s end page after the study is done",id:"3-redirect-to-prolifics-end-page-after-the-study-is-done",children:[],level:3}],u={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is very easy to use JATOS together with ",(0,o.kt)("a",{parentName:"p",href:"https://www.prolific.co/"},"Prolific")," to recruit participants. "),(0,o.kt)("p",null,"This is what the ",(0,o.kt)("em",{parentName:"p"},"New Study")," page in Prolific looks like:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Prolific screenshot",src:r(9230).Z})),(0,o.kt)("h3",{id:"1-enter-your-jatos-study-link"},"1. Enter your JATOS study link"),(0,o.kt)("p",null,"In the field under ",(0,o.kt)("em",{parentName:"p"},"What is the URL of your study?")," (first red box in the screenshot), enter a link to your JATOS study.You probably want a link to either a ",(0,o.kt)("em",{parentName:"p"},"General Single")," or a ",(0,o.kt)("em",{parentName:"p"},"General Multiple")," worker type (see ",(0,o.kt)("a",{parentName:"p",href:"Worker-Types.html"},"JATOS' worker types")," and ",(0,o.kt)("a",{parentName:"p",href:"Run-your-Study-with-Worker-and-Batch-Manager.html"},"Run your Study with Worker & Batch Manager"),")."),(0,o.kt)("h3",{id:"2-optional-consider-passing-prolific-url-parameters-to-your-study"},"2. (Optional) Consider passing Prolific URL parameters to your study"),(0,o.kt)("p",null,"Prolific allows you to pass the parameters PROLIFIC PID, STUDY ID, and SESSION ID as URL parameters. Click on 'Show advanced' and then 'Add parameters' like in the screenshot."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Prolific screenshot",src:r(6636).Z})),(0,o.kt)("p",null,"Then you can access those URL parameters in your study's JavaScript via ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#original-url-query-parameters"},"jatos.urlQueryParameters"),"."),(0,o.kt)("h3",{id:"3-redirect-to-prolifics-end-page-after-the-study-is-done"},"3. Redirect to Prolific's end page after the study is done"),(0,o.kt)("p",null,"The second red box contains a link that will (re)direct the participant to a Prolific page, with information on how to claim their payment."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Choose one of the three ways")," (differ in JATOS version and your preferences)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Include ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyajax"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAjax"))," in the JavaScript of your ",(0,o.kt)("strong",{parentName:"p"},"last")," component (works with ",(0,o.kt)("strong",{parentName:"p"},"all JATOS versions"),")"),(0,o.kt)("p",{parentName:"li"},"All you need to do is call ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.endStudyAjax"),", and add a callback that will replace ",(0,o.kt)("inlineCode",{parentName:"p"},"window.location.href")," with the Prolific end page once the ajax call is ",(0,o.kt)("inlineCode",{parentName:"p"},"done"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"jatos.endStudyAjax().then(() => {\n  // Change this URL to the one you see in Prolific\n  window.location.href = 'https://app.prolific.co/submissions/complete?cc=1234ABCD'\n});\n")),(0,o.kt)("p",{parentName:"li"},"Of course, this can also be done together with ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.submitResultData")," if you want to store result data in JATOS:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"var result = { test: \"some results\" };\njatos.submitResultData(result)\n  .then(jatos.endStudyAjax)\n  .then(() => {\n    window.location.href = 'https://app.prolific.co/submissions/complete?cc=1234ABCD'\n});\n")),(0,o.kt)("p",{parentName:"li"},"We provide a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_examples/raw/master/examples/prolific_example.zip"},"Prolific example study")," that you can use as a template.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Setup ",(0,o.kt)("strong",{parentName:"p"},"End Redirect URL")," in the Study Properties (easiest - but only ",(0,o.kt)("strong",{parentName:"p"},"since JATOS v3.5.1"),")"),(0,o.kt)("p",{parentName:"li"},"In JATOS GUI you can put the in Prolific link in the ",(0,o.kt)("strong",{parentName:"p"},"End Redirect URL")," field of your Study Properties"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"screenshot",src:r(3807).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Include ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyandredirect"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAndRedirect"))," in the JavaScript of your ",(0,o.kt)("strong",{parentName:"p"},"last")," component (",(0,o.kt)("strong",{parentName:"p"},"since JATOS v3.5.1"),")"),(0,o.kt)("p",{parentName:"li"},"E.g. but change this URL to the one you see in Prolific"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Change this URL the one you see in Prolific\njatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD");\n')),(0,o.kt)("p",{parentName:"li"},"You can even combine it with sending result data"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var resultData = {id: 123, data: "my important result data"};\njatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD", resultData);\n')))))}d.isMDXComponent=!0},9230:function(e,t,r){t.Z=r.p+"assets/images/Screenshot_Prolific_create_study-97d069e806f37550f7c0c771a958fa22.png"},6636:function(e,t,r){t.Z=r.p+"assets/images/Screenshot_Prolific_query_parameter-3d35afd80565777bb63f2df155cdef8e.png"},3807:function(e,t,r){t.Z=r.p+"assets/images/Screenshot_end-redirect-url-c3520fefdf5d82a83a5a68b0138c8ad9.png"}}]);
"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4879],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7877:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),s=["components"],i={title:"Submit and upload data to the server",slug:"/Submit-and-upload-data-to-the-server.html",sidebar_position:7},l=void 0,d={unversionedId:"Write_your_study/Submit-and-upload-data-to-the-server",id:"version-3.6.1/Write_your_study/Submit-and-upload-data-to-the-server",title:"Submit and upload data to the server",description:"If you wrote your study with HTML/JavaScript/CSS, you'll need to know how to send to the JATOS server for safe storage and easy later retrieval. Here we describe how to submit data. See Manage Results to know how to retrieve it.",source:"@site/versioned_docs/version-3.6.1/Write_your_study/Submit-and-upload-data-to-the-server.md",sourceDirName:"Write_your_study",slug:"/Submit-and-upload-data-to-the-server.html",permalink:"/Submit-and-upload-data-to-the-server.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Write_your_study/Submit-and-upload-data-to-the-server.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1640032114,formattedLastUpdatedAt:"12/20/2021",sidebarPosition:7,frontMatter:{title:"Submit and upload data to the server",slug:"/Submit-and-upload-data-to-the-server.html",sidebar_position:7},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"OSWeb/OpenSesame and JATOS",permalink:"/OSWeb-and-JATOS.html"},next:{title:"Session Data - Three Types",permalink:"/Session-Data-Three-Types.html"}},u=[{value:"Submit result data",id:"submit-result-data",children:[],level:3},{value:"Upload and download result files (Since JATOS version 3.5.1)",id:"upload-and-download-result-files-since-jatos-version-351",children:[],level:3}],p={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you wrote your study with HTML/JavaScript/CSS, you'll need to know how to send to the JATOS server for safe storage and easy later retrieval. Here we describe how to submit data. See ",(0,o.kt)("a",{parentName:"p",href:"Manage-Results.html"},"Manage Results")," to know how to retrieve it."),(0,o.kt)("h3",{id:"submit-result-data"},"Submit result data"),(0,o.kt)("p",null,"There are a couple of ",(0,o.kt)("em",{parentName:"p"},"jatos.js")," functions that allow you to send data to the JATOS server. The result data can be anything that can be put into text, which includes formats like JSON or CSV. Images, audio or video data can only be sent via Upload (explained below)."),(0,o.kt)("p",null,"The two functions ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatossubmitresultdata"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.submitResultData"))," and ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosappendresultdata"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.appendResultData"))," (available since version 3.1.7) let you submit text data to the server. They are similar to each other. The only difference is that the first overwrites the data and therefore deletes previously sent data, while the latter appends new data to old data. "),(0,o.kt)("p",null,"Then there are a couple of functions that do something else (primarily) but allow you to send result data out of convenience, since they usually go together anyway. These are all functions that start a new component (e.g. ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosstartnextcomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.startNextComponent")),", ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosstartcomponentbypos"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.startComponentByPos")),") and all functions that end a study (",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudy"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.endStudy"))," and ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyandredirect"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAndRedirect")),"). The latter one exists only since JATOS version 3.5.1 (prior versions can use ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyajax"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAjax")),")."),(0,o.kt)("p",null,"Sending data to a server can take some time, depending on the internet connection and the size of the result data. The convenience functions have the advantage that they will execute their primary function (e.g. start next component) only ",(0,o.kt)("em",{parentName:"p"},"after")," the result data have been submitted. Therefore these are generally safer ways to submit your result data. "),(0,o.kt)("h3",{id:"upload-and-download-result-files-since-jatos-version-351"},"Upload and download result files (Since JATOS version 3.5.1)"),(0,o.kt)("p",null,"If you want to upload audio, video, images or any other data that is not in text format, then uploading a result file is what you need: ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatossubmitresultdata"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.uploadResultFile")),". "),(0,o.kt)("p",null,"And if you want to, in a later component, access the uploaded files again you can download them with ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosdownloadresultfile"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.downloadResultFile")),"."),(0,o.kt)("p",null,"For more real-world examples have a look at the ",(0,o.kt)("a",{parentName:"p",href:"Example-Studies.html"},"'Drawing' and the 'Video Recording' examples"),"."))}c.isMDXComponent=!0}}]);
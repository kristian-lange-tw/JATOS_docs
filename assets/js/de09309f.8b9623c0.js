"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[345],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3859:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={title:"jsPsych and JATOS",slug:"/jsPsych-and-JATOS.html",sidebar_position:4},l=void 0,c={unversionedId:"Write your study/jsPsych-and-JATOS",id:"version-1.0.0/Write your study/jsPsych-and-JATOS",isDocsHomePage:!1,title:"jsPsych and JATOS",description:"JATOS basically cares for the server side: it stores result data, does worker management etc. JATOS doesn't care so much for what happens in the browser itself - your HTML, JavaScript and CSS. Of course you can write this all yourself, but you could also use a framework for this. A very good one is jsPsych.",source:"@site/versioned_docs/version-1.0.0/Write your study/jsPsych-and-JATOS.md",sourceDirName:"Write your study",slug:"/jsPsych-and-JATOS.html",permalink:"/before-3.7.1/jsPsych-and-JATOS.html",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/versioned_docs/version-1.0.0/Write your study/jsPsych-and-JATOS.md",tags:[],version:"1.0.0",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1639426991,formattedLastUpdatedAt:"12/13/2021",sidebarPosition:4,frontMatter:{title:"jsPsych and JATOS",slug:"/jsPsych-and-JATOS.html",sidebar_position:4},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Adapt Pre written Code to run it in JATOS (Jatosify)",permalink:"/before-3.7.1/Adapt-Pre-written-Code-to-run-it-in-JATOS.html"},next:{title:"lab.js and JATOS",permalink:"/before-3.7.1/labjs-and-JATOS.html"}},u=[{value:"How to turn your jsPsych experiment into a JATOS study",id:"how-to-turn-your-jspsych-experiment-into-a-jatos-study",children:[],level:3},{value:"Send jsPsych&#39;s result data back to JATOS",id:"send-jspsychs-result-data-back-to-jatos",children:[{value:"jsPsych 5",id:"jspsych-5",children:[],level:4},{value:"jsPsych 6",id:"jspsych-6",children:[],level:4}],level:3},{value:"Adding additional HTML snippets to a jPsych code (e.g. cancel button)",id:"adding-additional-html-snippets-to-a-jpsych-code-eg-cancel-button",children:[],level:3}],d={toc:u};function p(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{style:{float:"right",width:"300px"}},(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7698).Z}))),(0,r.kt)("p",null,"JATOS basically cares for the server side: it stores result data, does worker management etc. JATOS doesn't care so much for what happens in the browser itself - your HTML, JavaScript and CSS. Of course you can write this all yourself, but you could also use a framework for this. A very good one is ",(0,r.kt)("a",{parentName:"p",href:"http://www.jspsych.org/"},"jsPsych"),"."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"Example-Studies.html"},"our example studies")," are a couple of jsPsych ones."),(0,r.kt)("p",null,"Here are the necessary changes if you want to adapt your jsPsych experiment so that it runs within (and sends the result data to) JATOS. Additionally you can have a look at ",(0,r.kt)("a",{parentName:"p",href:"Adapt-Pre-written-Code-to-run-it-in-JATOS.html"},"Adapt Pre written Code to run it in JATOS (Jatosify)"),"."),(0,r.kt)("h3",{id:"how-to-turn-your-jspsych-experiment-into-a-jatos-study"},"How to turn your jsPsych experiment into a JATOS study"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Include the ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.js")," library in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="/assets/javascripts/jatos.js"><\/script>\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"Troubleshooting.html#a-file-library-image--included-in-the-html-fails-to-load"},"Remember"),": Any URL or file path in a HTML file should only use '/' as a file path separator - even on Windows systems. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wrap jsPsych's init call ",(0,r.kt)("inlineCode",{parentName:"p"},"jsPsych.init")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.onLoad")," call"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.onLoad(function() {\n  jsPsych.init( {\n    // ...\n  });\n});\n")))),(0,r.kt)("p",null,"That's all. If you additionally want to send your result data to JATOS read on."),(0,r.kt)("h3",{id:"send-jspsychs-result-data-back-to-jatos"},"Send jsPsych's result data back to JATOS"),(0,r.kt)("p",null,"Here we use jsPsych's function ",(0,r.kt)("inlineCode",{parentName:"p"},"jsPsych.data.getData()")," (jsPsych 5) or ",(0,r.kt)("inlineCode",{parentName:"p"},"jsPsych.data.get().json()")," (jsPsych 6) to collect the data into a JSON-formatted string. Then we use JATOS' function ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.submitResultData")," to send your result to JATOS and ask JATOS to move to the next component, if there is one."),(0,r.kt)("h4",{id:"jspsych-5"},"jsPsych 5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.onLoad(function() {\n  jsPsych.init( {\n    // ...\n    on_finish: function() {\n      var resultJson = JSON.stringify(jsPsych.data.getData());\n      jatos.submitResultData(resultJson, jatos.startNextComponent);\n    }\n  }\n});\n")),(0,r.kt)("h4",{id:"jspsych-6"},"jsPsych 6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.onLoad(function() {\n  jsPsych.init( {\n    // ...\n    on_finish: function() {\n      var resultJson = jsPsych.data.get().json();\n      jatos.submitResultData(resultJson, jatos.startNextComponent);\n    }\n  });\n});\n")),(0,r.kt)("h3",{id:"adding-additional-html-snippets-to-a-jpsych-code-eg-cancel-button"},"Adding additional HTML snippets to a jPsych code (e.g. cancel button)"),(0,r.kt)("p",null,"jsPsych has the habit of cleaning the HTML's body and fill it with its own code. This means that whatever you write between the ",(0,r.kt)("inlineCode",{parentName:"p"},"<body>")," tags will be ignored. But you might want to add some additional HTML element like a cancel button to the page without changing the jsPsych plugin or writing a new one. How can this be done?"),(0,r.kt)("p",null,"Luckily jsPsych offers a ",(0,r.kt)("a",{parentName:"p",href:"https://www.jspsych.org/overview/callbacks/#on_load"},"callback function on_load"),". Whatever we write in there is called after jsPsych did its body clean-up. So you could add your extra HTML elements in there."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hint"),": Since JATOS version 3.5.1 it's much easier to add a cancel button: use ",(0,r.kt)("a",{parentName:"p",href:"http://www.jatos.org/jatos.js-Reference.html#jatosaddabortbutton"},(0,r.kt)("inlineCode",{parentName:"a"},"jatos.addAbortButton")),"."),(0,r.kt)("p",null,"Here's an example (you need jQuery for this one to work):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var my_trial = {\n  type: 'some-plugin',\n  on_load: function() {\n    $(\"body\").append('<button onclick=\"jatos.abortStudy()\">Cancel Study</button>');\n  },\n  ...\n")),(0,r.kt)("p",null,"And without jQuery it's more cumbersome:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var my_trial = {\n  type: \'some-plugin\',\n  on_load: function() {\n    var button = document.createElement("button");\n    button.innerHTML = "Cancel Study";\n    document.body.appendChild(button);\n    button.addEventListener("click", function() {\n      jatos.abortStudy();\n    });\n  },\n  ...\n')),(0,r.kt)("p",null,"You probably want to add some styling but this is how it works in principle."))}p.isMDXComponent=!0},7698:function(e,t,n){t.Z=n.p+"assets/images/jspsych-logo-a9d6ad3909046e3e55943bf5141d30ed.png"}}]);
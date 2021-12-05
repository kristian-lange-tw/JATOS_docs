"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1617],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7952:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"Write cross-sectional and longitudinal studies",sidebar_position:8},l=void 0,u={unversionedId:"Run your study/Cross-sectional-and-longitudinal-studies",id:"Run your study/Cross-sectional-and-longitudinal-studies",isDocsHomePage:!1,title:"Write cross-sectional and longitudinal studies",description:"There are several situation in which you might want to store (some parts) of the result data in a way that is accessible from more than just a single study run. This might be the case if you want to:",source:"@site/docs/Run your study/Cross-sectional-and-longitudinal-studies.md",sourceDirName:"Run your study",slug:"/Run your study/Cross-sectional-and-longitudinal-studies",permalink:"/./Run your study/Cross-sectional-and-longitudinal-studies",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Run your study/Cross-sectional-and-longitudinal-studies.md",tags:[],version:"current",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1638741348,formattedLastUpdatedAt:"12/5/2021",sidebarPosition:8,frontMatter:{title:"Write cross-sectional and longitudinal studies",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Use Prolific",permalink:"/./Run your study/Use-Prolific"},next:{title:"Manage Results",permalink:"/./Run your study/Manage-Results"}},c=[{value:"1. Counterbalance conditions between participants",id:"1-counterbalance-conditions-between-participants",children:[],level:2},{value:"2. Run cross-sectional designs",id:"2-run-cross-sectional-designs",children:[],level:2},{value:"3. Write longitudinal studies",id:"3-write-longitudinal-studies",children:[{value:"Using Personal Multiple Worker links",id:"using-personal-multiple-worker-links",children:[],level:3},{value:"Using MTurk",id:"using-mturk",children:[],level:3},{value:"Using Prolific",id:"using-prolific",children:[],level:3},{value:"Using a General Multiple link with IDs assigned to individual workers",id:"using-a-general-multiple-link-with-ids-assigned-to-individual-workers",children:[],level:3}],level:2},{value:"Store bits of result data that are necessary for future sessions",id:"store-bits-of-result-data-that-are-necessary-for-future-sessions",children:[],level:2},{value:"Recover the corresponding bit of the result data from the Batch Session",id:"recover-the-corresponding-bit-of-the-result-data-from-the-batch-session",children:[],level:2}],d={toc:c};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are several situation in which you might want to store (some parts) of the result data in a way that is accessible from more than just a single study run. This might be the case if you want to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"counterbalance your conditions across participants to acount for order effects. "),(0,a.kt)("li",{parentName:"ol"},"run a between-participants study."),(0,a.kt)("li",{parentName:"ol"},"run a longitudinal study.")),(0,a.kt)("p",null,"Whenever a participant clicks on a study link, JATOS internally starts a study run. Once the data from the last component are sumitted, the study run is finished and the data are no longer avalable to the client side. So, to run a cross-sectional or a longitudinal study, you need store data in a way that outlives the particular study run and is avalable to future runs. The ",(0,a.kt)("a",{parentName:"p",href:"Session-Data-Three-Types.html"},"Batch session data")," does just this.  "),(0,a.kt)("h2",{id:"1-counterbalance-conditions-between-participants"},"1. Counterbalance conditions between participants"),(0,a.kt)("p",null,"The basic idea here is simple. Every time a new participant clicks on a worker link, you assign them randomly to one of the possible conditions. And you keep track of how many participants did each condition in the Batch Session data. "),(0,a.kt)("p",null,"Have a look at the ",(0,a.kt)("a",{parentName:"p",href:"Example-Studies.html"},'"Randomize tasks between workers"')," study in our examples for a full example that you can easily add as a first component in your study. "),(0,a.kt)("h2",{id:"2-run-cross-sectional-designs"},"2. Run cross-sectional designs"),(0,a.kt)("p",null,"From the coding perspective, the exact same logic applies as for point 1. But please remember: different participants may run a study using different computers with different processing speed, operating systems and browser. All these factors can influence the timing of your response. So be careful when comparing different populations (epecially if they differ in demographics) as they might present systematic differences in the computers they run your study from. See ",(0,a.kt)("a",{parentName:"p",href:"https://link.springer.com/article/10.3758/s13428-015-0567-2"},"this paper")," for a more thorugh discussion."),(0,a.kt)("h2",{id:"3-write-longitudinal-studies"},"3. Write longitudinal studies"),(0,a.kt)("p",null,"You might want to collect data from the same participant multiple times and, crucially, be able to link the multiple result data from a single participant. The first thing you need to do is make sure that the same ",(0,a.kt)("em",{parentName:"p"},"person")," is assigned a single, unique ID. There are several options for this, and your exact solution may depend on how you are recruiting participants. "),(0,a.kt)("h3",{id:"using-personal-multiple-worker-links"},"Using Personal Multiple Worker links"),(0,a.kt)("p",null,"If your sample size is relatively small and it is logistically doable, you could send individualized ",(0,a.kt)("a",{parentName:"p",href:"Worker-Types.html#-personal-multiple-worker"},"Personal Multiple links")," to each participant. If a participant runs a study with this link, JATOS will assign them a unique number. You can access the worker ID in your JavaScript through ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.urlQueryParameters.workerId")," from the ",(0,a.kt)("em",{parentName:"p"},"jatos.js")," library."),(0,a.kt)("h3",{id:"using-mturk"},"Using MTurk"),(0,a.kt)("p",null,"If you are recruiting participants through a MTurk, it's straightforward: You can access the worker ID in your JavaScript through ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.urlQueryParameters.workerId"),"."),(0,a.kt)("h3",{id:"using-prolific"},"Using Prolific"),(0,a.kt)("p",null,"If you are usning Prolific to recruit participants, it's a bit more complicated. To access the worker ID, you first need to tell Prolific to include it in their query parameters. In Prolific, go to Study Settings and enable the option to include special query parameters in the URL. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Prolific Screenshot",src:n(150).Z}),"   "),(0,a.kt)("p",null,"If you select these options in Prolific, you'll be able to collect the Prolific ID from your JavaScript by using the ",(0,a.kt)("em",{parentName:"p"},"jatos.js")," object "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var prolificPid = jatos.urlQueryParameters.PROLIFIC_PID;\n")),(0,a.kt)("h3",{id:"using-a-general-multiple-link-with-ids-assigned-to-individual-workers"},"Using a General Multiple link with IDs assigned to individual workers"),(0,a.kt)("p",null,"If you want a large sample of participants recruited outside of a marketplace (i.e. if you are using a ",(0,a.kt)("a",{parentName:"p",href:"Worker-Types.html#-general-multiple-worker"},"General Multiple link"),", you could provide each new participant with a unique ID that they then have to store and provide (manually) in the following session. Note that, when a participant runs a study with a General Single JATOS stores cookies on their browser to prevent them from taking part twice in the same study. But these cookies are minimal and not intended to be used to identify participants or to link a browser to any given result data. "),(0,a.kt)("h2",{id:"store-bits-of-result-data-that-are-necessary-for-future-sessions"},"Store bits of result data that are necessary for future sessions"),(0,a.kt)("p",null,"Once you have an ID, you should assign to it the information relevant for the following sessions in your longitudinal study. Say you need to store the number of correct responses for a given session. You could do it with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var performanceInfo = {"percentageCorrect" : nCorrect/nTrials, "nTrials" : nTrials}\njatos.batchSession.add("/subjects/" + ID, performanceInfo); \n')),(0,a.kt)("p",null,"Which will append the information from ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"percentageCorrect")," to the already existing Batch session data and give you something that looks (e.g.) like this in the Batch session: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "subjects": {\n    "MyemLF": {\n      "percentCorrect": 62,\n      "nTrials" : 250\n    },\n    "74b61m": {\n      "percentCorrect": 78,\n      "nTrials" : 250\n    },\n    "pFyxRT": {\n      "percentCorrect": 67,\n      "nTrials" : 247\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note that the information stored in the Batch Session is visible to the client side, so it should contain only the strictly necessary, pseudonymized data.")," In other words, store only summary data like the condition assigned, number of trials completed or correct, etc. But nothing else."),(0,a.kt)("h2",{id:"recover-the-corresponding-bit-of-the-result-data-from-the-batch-session"},"Recover the corresponding bit of the result data from the Batch Session"),(0,a.kt)("p",null,"You could do that with the following command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var subjsPreviousPerformance = jatos.batchSession.getAll().subjects[ID]\n")),(0,a.kt)("p",null,"That's it. Once you have your worker's ID and the corresponding longitudinally-relevant data, you can use it as a starting point for your next session."))}p.isMDXComponent=!0},150:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_ExtendURL_Prolific-3d35afd80565777bb63f2df155cdef8e.png"}}]);
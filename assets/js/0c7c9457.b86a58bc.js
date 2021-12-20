"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1249],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9073:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var n=o(3117),r=o(102),a=(o(7294),o(3905)),i=["components"],s={title:"Troubleshooting",slug:"/Troubleshooting.html",sidebar_position:4},l=void 0,u={unversionedId:"Manage_your_JATOS/Troubleshooting",id:"Manage_your_JATOS/Troubleshooting",title:"Troubleshooting",description:"JATOS test page",source:"@site/docs/Manage_your_JATOS/Troubleshooting.md",sourceDirName:"Manage_your_JATOS",slug:"/Troubleshooting.html",permalink:"/3.7.1/Troubleshooting.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Manage_your_JATOS/Troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1640035862,formattedLastUpdatedAt:"12/20/2021",sidebarPosition:4,frontMatter:{title:"Troubleshooting",slug:"/Troubleshooting.html",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Update JATOS",permalink:"/3.7.1/Update-JATOS.html"},next:{title:"Example Group Studies",permalink:"/3.7.1/Example-Group-Studies.html"}},d=[{value:"JATOS test page",id:"jatos-test-page",children:[],level:3},{value:"Downloading a study / exporting a study fails (e.g. in Safari browsers)",id:"downloading-a-study--exporting-a-study-fails-eg-in-safari-browsers",children:[],level:3},{value:"JATOS fails to start?",id:"jatos-fails-to-start",children:[],level:3},{value:"Read log file in the browser",id:"read-log-file-in-the-browser",children:[],level:3},{value:"A file (library, image, ...) included in the HTML fails to load?",id:"a-file-library-image--included-in-the-html-fails-to-load",children:[],level:3},{value:"Database is corrupted?",id:"database-is-corrupted",children:[],level:3}],p={toc:d};function c(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"jatos-test-page"},"JATOS test page"),(0,a.kt)("p",null,"JATOS comes with build in tests (e.g. WebSockets connections and database connection), but they are only accessible for users with admin rights: go to ",(0,a.kt)("em",{parentName:"p"},"Administration")," \u21d2 ",(0,a.kt)("em",{parentName:"p"},"Tests")," and check that all tests are 'OK' (in older version the test page is under '/jatos/test', e.g. for a local installation: ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:9000/jatos/test"},"localhost:9000/jatos/test"),")."),(0,a.kt)("h3",{id:"downloading-a-study--exporting-a-study-fails-eg-in-safari-browsers"},"Downloading a study / exporting a study fails (e.g. in Safari browsers)"),(0,a.kt)("p",null,"As a default, Safari (and some other browsers) automatically unzips every archive file after downloading it. When you export a study, JATOS zips your study together (study properties, all components, and all files like HTML, JavaScripts, images) and delivers it to your browser, who should save it in your local computer. Safari's default unzipping interferes with this. Follow ",(0,a.kt)("a",{parentName:"p",href:"https://discussions.apple.com/thread/1958374?start=0&tstart=0"},"these instructions")," to prevent Safari's automatic unzip."),(0,a.kt)("h3",{id:"jatos-fails-to-start"},"JATOS fails to start?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(Or, if you are running Windows, do you get the message 'JATOS is already running. Press any key to continue'...)")),(0,a.kt)("p",null,"This will happen if your computer crashed before you had the chance to close JATOS. "),(0,a.kt)("p",null,"This is what you might see on a Mac Terminal if JATOS doesn't start:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jatos doesn&#39;t start",src:o(8410).Z})),(0,a.kt)("p",null,"Close any open command prompt windows. Then look into your JATOS folder, and check if there's a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"RUNNING_PID"),". Delete this file and try to start JATOS again. "),(0,a.kt)("p",null,"Here is how it should look if JATOS started successfully:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jatos doesn&#39;t start",src:o(7834).Z})),(0,a.kt)("h3",{id:"read-log-file-in-the-browser"},"Read log file in the browser"),(0,a.kt)("p",null,"In a perfect world, JATOS always works smoothly and, when it doesn't, it describes the problem in an error message. Unfortunately we aren't in a perfect world: every now and then something will go wrong and you might not get any clear error messages, or no message at all. In these (rare) cases, you can look into JATOS' log file (not to be confused with the ",(0,a.kt)("a",{parentName:"p",href:"http://www.jatos.org/Study-Log.html"},"study log"),") to try to find what the problem might be.  "),(0,a.kt)("p",null,"The standard way to read the log file is directly on the server. You'll find your complete log files in ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos_directory/logs/application.log"),". Because JATOS is designed to avoid the command line interface, we offer a way to view your log file directly in your browser."),(0,a.kt)("p",null,"For security reasons, you must be logged in as a user with admin rights."),(0,a.kt)("p",null,"From version 3.6.1 on you can see and download all log files in the ",(0,a.kt)("em",{parentName:"p"},"Administration")," page."),(0,a.kt)("p",null,"In older versions you can only see today's log file: open the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://your-jatos-server/jatos/log"),". For example, if you're running JATOS locally with the standard settings:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://localhost:9000/jatos/log"},"http://localhost:9000/jatos/log")),(0,a.kt)("h3",{id:"a-file-library-image--included-in-the-html-fails-to-load"},"A file (library, image, ...) included in the HTML fails to load?"),(0,a.kt)("p",null,"There is a common mistake Windows users make that might prevent files in the HTML from loading: Any URL or file path in a HTML file should only use '/' as a file path separator - even on Windows systems. So it should always be e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'<script src="/study_assets/mystudy/jsPsych-5.0.3/myscript.js"><\/script>')," and ",(0,a.kt)("strong",{parentName:"p"},"not")," ",(0,a.kt)("inlineCode",{parentName:"p"},'<script src="\\study_assets\\mystudy\\jsPsych-5.0.3\\myscript.js"><\/script>'),". And since version 3.2.3 you can leave out the path's first part and just write ",(0,a.kt)("inlineCode",{parentName:"p"},'<script src="myscript.js"><\/script>'),". "),(0,a.kt)("h3",{id:"database-is-corrupted"},"Database is corrupted?"),(0,a.kt)("p",null,"If you get an error that reads something like: ",(0,a.kt)("inlineCode",{parentName:"p"},"Error in custom provider, Configuration error: Configuration error[Cannot connect to database [default]]"),", your database might be corrupted. By default JATOS comes with an H2 database and the H2 database doesn't handle ",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/2036117/how-to-back-up-the-embedded-h2-database-engine-while-it-is-running"},"copying its files while running")," too well. "),(0,a.kt)("p",null,"There are two reasons why this might be the case: you moved your JATOS folder while it was running or you installed JATOS in a synced folder. To prevent this, be sure to always be careful with the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Don't copy or move while JATOS is running")," - Always ",(0,a.kt)("strong",{parentName:"li"},"stop JATOS")," (type ",(0,a.kt)("inlineCode",{parentName:"li"},"/loader.sh stop")," in your Linux / Mac OS X terminal or close the window on Windows) before moving it.  "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Don't sync while JATOS is running")," - As we mentioned in the ",(0,a.kt)("a",{parentName:"li",href:"Installation.html"},"Installation page"),", you can run JATOS from pretty much anywhere ",(0,a.kt)("strong",{parentName:"li"},"except")," from a folder that syncs across devices, like Dropbox or Google Drive. Doing so might lead to database corruption, because while the files might be synced between computers, the running processes aren't. This will lead to havoc and destruction and, in extreme cases, to the implosion of the known Universe. You can find in our ",(0,a.kt)("a",{parentName:"li",href:"http://blog.jatos.org/Database_Recovery/"},"blog post")," a description of an attempt to recover a corrupted database. Didn't work.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Of course, this brings us to an important point: back up your result data (i.e., simply download and save your text files) regularly if you're running a study!")))}c.isMDXComponent=!0},8410:function(e,t,o){t.Z=o.p+"assets/images/shell_start1-f1cbbc8cdad402173ab612037374e62b.png"},7834:function(e,t,o){t.Z=o.p+"assets/images/shell_start2-5c05e4b8364f8f2408611f26d21ea0f1.png"}}]);
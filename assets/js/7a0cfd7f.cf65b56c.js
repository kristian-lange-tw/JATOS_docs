"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2011],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Expose your local JATOS",sidebar_position:2},s=void 0,p={unversionedId:"Serving the Internet/Expose-your-local-JATOS",id:"Serving the Internet/Expose-your-local-JATOS",isDocsHomePage:!1,title:"Expose your local JATOS",description:"Introduction",source:"@site/docs/Serving the Internet/Expose-your-local-JATOS.md",sourceDirName:"Serving the Internet",slug:"/Serving the Internet/Expose-your-local-JATOS",permalink:"/./Serving the Internet/Expose-your-local-JATOS",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Serving the Internet/Expose-your-local-JATOS.md",tags:[],version:"current",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1638741348,formattedLastUpdatedAt:"12/5/2021",sidebarPosition:2,frontMatter:{title:"Expose your local JATOS",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bring your JATOS online",permalink:"/./Serving the Internet/Bring-your-JATOS-online"},next:{title:"JATOS on DigitalOcean",permalink:"/./Serving the Internet/JATOS-on-DigitalOcean"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"ngrok",id:"ngrok",children:[],level:2},{value:"localhost.run",id:"localhostrun",children:[],level:2}],c={toc:u};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This page is about how to expose your locally installed JATOS to the Internet. That means using your personal computer as a server. If you want to know a bit more about the background, I recommend reading ",(0,a.kt)("a",{parentName:"p",href:"https://www.chenhuijing.com/blog/tunnelling-services-for-exposing-localhost-to-the-web"},"Tunnelling services for exposing localhost to the web"),". There are several tunneling services and some of those are free or have at least a free offer. Here we concentrate on ",(0,a.kt)("em",{parentName:"p"},"ngrok")," and ",(0,a.kt)("em",{parentName:"p"},"localhost.run"),". Both are working fine. Just pick one. If you have ",(0,a.kt)("strong",{parentName:"p"},"Windows")," and don't know SSH, ",(0,a.kt)("em",{parentName:"p"},"ngrok")," will suit you best since it has an installer."),(0,a.kt)("p",null,"But first some general advice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This way to bring JATOS online is the easiest to use - but also the ",(0,a.kt)("strong",{parentName:"li"},"least reliable")," one. Your local computer is prone to accidents (e.g. unplugged power cable, interrupted Internet). If you need a more dependable JATOS look at ",(0,a.kt)("a",{parentName:"li",href:"Bring-your-JATOS-online.html"},"Bring your JATOS online"),"."),(0,a.kt)("li",{parentName:"ul"},"You have to ",(0,a.kt)("strong",{parentName:"li"},"leave your computer running")," you want your participants to access your JATOS with your study. Potentially you can use your computer in the mean time, but be aware that everything might interfere with JATOS, e.g. a crashed OS stops JATOS too. Better let your computer run in peace for the duration of your study."),(0,a.kt)("li",{parentName:"ul"},"Find more reliable ",(0,a.kt)("a",{parentName:"li",href:"Bring-your-JATOS-online.html"},"ways to bring your JATOS online"))),(0,a.kt)("h2",{id:"ngrok"},"ngrok"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download & setup ngrok: ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"https://ngrok.com/download"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"I recommend creating an account with ngrok. It's free and ngrok gives you better connection compared to without.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start your local JATOS")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your terminal move to the directory where you installed ngrok and start it with:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./ngrok http 9000\n")),(0,a.kt)("p",{parentName:"li"},"The output should look similar to this:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"ngrok screenshot",src:n(9767).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy & Paste the URL with ",(0,a.kt)("em",{parentName:"p"},"https")," to your browser and check that JATOS is running properly with JATOS' build-in ",(0,a.kt)("a",{parentName:"p",href:"/Troubleshooting.html#jatos-test-page"},"tests"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"That's all. Now you can ",(0,a.kt)("a",{parentName:"p",href:"Run-your-Study-with-Worker-and-Batch-Manager.html"},"create worker links")," and send them to your participents. Remember to use JATOS under the ",(0,a.kt)("em",{parentName:"p"},"ngrog.io")," address when you create worker links (and not your localhost one)."))),(0,a.kt)("p",null,"More information on ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"https://ngrok.com"),"."),(0,a.kt)("h2",{id:"localhostrun"},"localhost.run"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start your local JATOS")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Execute in your terminal"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -R 80:localhost:9000 ssh.localhost.run\n")),(0,a.kt)("p",{parentName:"li"},"E.g. the output could look like:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh -R 80:localhost:9000 ssh.localhost.run\nConnect to http://kristian-44bs.localhost.run or https://kristian-44bs.localhost.run\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy & Paste the URL with ",(0,a.kt)("em",{parentName:"p"},"https")," to your browser and check that JATOS is running properly with JATOS' build-in ",(0,a.kt)("a",{parentName:"p",href:"/Troubleshooting.html#jatos-test-page"},"tests"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"That's all. Now you can ",(0,a.kt)("a",{parentName:"p",href:"Run-your-Study-with-Worker-and-Batch-Manager.html"},"create worker links")," and send them to your participents. Remember to use JATOS under the ",(0,a.kt)("em",{parentName:"p"},"localhost.run")," address when you create worker links (and not your localhost one)."))),(0,a.kt)("p",null,"More information on ",(0,a.kt)("a",{parentName:"p",href:"http://localhost.run/"},"http://localhost.run/"),"."))}m.isMDXComponent=!0},9767:function(e,t,n){t.Z=n.p+"assets/images/screenshot_ngrok-3c5e220b051d99d286d24f1d9113e503.png"}}]);
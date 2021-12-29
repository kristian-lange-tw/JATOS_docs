"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1277],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,_=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return t?o.createElement(_,i(i({ref:n},l),{},{components:t})):o.createElement(_,i({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1769:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var o=t(3117),r=t(102),a=(t(7294),t(3905)),i=["components"],s={title:"JATOS with Nginx",slug:"/JATOS-with-Nginx.html",sidebar_position:8},p=void 0,c={unversionedId:"Serving_the_Internet/JATOS-with-Nginx",id:"Serving_the_Internet/JATOS-with-Nginx",title:"JATOS with Nginx",description:"These are examples for configurations of Nginx as a proxy in front of JATOS. It is not necessary to run JATOS with a proxy but it's common. They support WebSockets for JATOS' group studies.",source:"@site/docs/Serving_the_Internet/JATOS-with-Nginx.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-with-Nginx.html",permalink:"/3.7.1/JATOS-with-Nginx.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Serving_the_Internet/JATOS-with-Nginx.md",tags:[],version:"current",lastUpdatedBy:"Poulami Ghosh",lastUpdatedAt:1640777939,formattedLastUpdatedAt:"12/29/2021",sidebarPosition:8,frontMatter:{title:"JATOS with Nginx",slug:"/JATOS-with-Nginx.html",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"JATOS with MySQL",permalink:"/3.7.1/JATOS-with-MySQL.html"},next:{title:"JATOS with Apache",permalink:"/3.7.1/JATOS-with-Apache.html"}},l=[{value:"With HTTPS",id:"with-https",children:[],level:2},{value:"With HTTPS and Docker",id:"with-https-and-docker",children:[],level:2},{value:"Simple without encryption",id:"simple-without-encryption",children:[],level:2}],d={toc:l};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are examples for configurations of ",(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx")," as a proxy in front of JATOS. It is not necessary to run JATOS with a proxy but it's common. They support WebSockets for JATOS' group studies. "),(0,a.kt)("p",null,"The following two configs are the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),". Change them to your needs. You probably want to change your servers address (",(0,a.kt)("inlineCode",{parentName:"p"},"www.example.com")," in the example) and the path to the SSL certificate and its key. This ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy_set_header X-Forwarded-*")," is necessary to tell JATOS the original requester's IP address - please leave it unchanged."),(0,a.kt)("p",null,"As an additional security measurement you can uncomment the ",(0,a.kt)("inlineCode",{parentName:"p"},"location /jatos")," and config your local network. This will restrict the access to JATOS' GUI (every URL starting with ",(0,a.kt)("inlineCode",{parentName:"p"},"/jatos"),") to the local network."),(0,a.kt)("p",null,"A JATOS server that handles sensitive or private data should always use encryption (HTTPS)."),(0,a.kt)("h2",{id:"with-https"},"With HTTPS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"user www-data;\nworker_processes auto;\npid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\n\nevents {\n        worker_connections 768;\n        # multi_accept on;\n}\n\nhttp {\n        sendfile             on;\n        tcp_nopush           on;\n        tcp_nodelay          on;\n        keepalive_timeout    65;\n        client_max_body_size 500M;\n\n        include      /etc/nginx/mime.types;\n        default_type application/octet-stream;\n\n        proxy_buffering    off;\n        proxy_set_header   X-Forwarded-Proto https;\n        proxy_set_header   X-Forwarded-Ssl on;\n        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header   Host $http_host;\n        proxy_http_version 1.1;\n\n        upstream jatos-backend {\n                server 127.0.0.1:9000;\n        }\n\n        # needed for websockets\n        map $http_upgrade $connection_upgrade {\n                default upgrade;\n                ''      close;\n        }\n\n        # redirect http to https\n        server {\n                listen      80;\n                server_name www.example.com;\n                rewrite     ^ https://www.example.com$request_uri? permanent;\n        }\n\n        server {\n                listen        443 ssl;\n                server_name   www.example.com;\n\n                keepalive_timeout    70;\n\n                ssl_certificate      /etc/ssl/certs/localhost.crt;\n                ssl_certificate_key  /etc/ssl/private/localhost.key;\n\n                ssl_protocols             TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;\n                ssl_prefer_server_ciphers on;\n\n                # websocket location (JATOS' group and batch channel and the test page)\n                location ~ \"/(jatos/testWebSocket|publix/[\\d]+/(group/join|batch/open))\" {\n                        proxy_pass              http://jatos-backend;\n                        proxy_http_version      1.1;\n                        proxy_set_header        Upgrade $http_upgrade;\n                        proxy_set_header        Connection $connection_upgrade;\n                        proxy_connect_timeout   7d; # keep open for 7 days even without any transmission\n                        proxy_send_timeout      7d;\n                        proxy_read_timeout      7d;\n                }\n\n                # restrict access to JATOS' GUI to local network\n                #location /jatos {\n                #       allow           192.168.1.0/24;\n                #       deny            all;\n                #       proxy_pass      http://jatos-backend;\n                #}\n\n                # all other traffic\n                location / {\n                        proxy_pass              http://jatos-backend;\n                }\n                \n                # restrict access to JATOS' GUI to local network 192.168.1.*\n                #location /jatos {\n                #       allow                   192.168.1.0/24;\n                #       deny                    all;\n                #       proxy_pass              http://jatos-backend;\n                #       proxy_connect_timeout   300;\n                #       proxy_send_timeout      300;\n                #       proxy_read_timeout      300;\n                #       send_timeout            300;\n                #}\n\n                # all other traffic\n                location / {\n                        proxy_pass              http://jatos-backend;\n                        proxy_connect_timeout   300;\n                        proxy_send_timeout      300;\n                        proxy_read_timeout      300;\n                        send_timeout            300;\n                }\n        }\n\n        access_log /var/log/nginx/access.log;\n        error_log /var/log/nginx/error.log;\n\n        include /etc/nginx/conf.d/*.conf;\n        #include /etc/nginx/sites-enabled/*;\n}\n")),(0,a.kt)("h2",{id:"with-https-and-docker"},"With HTTPS and Docker"),(0,a.kt)("p",null,"Have a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/robinsonkwame/jatos-https-docker-compose"},"github.com/robinsonkwame/jatos-https-docker-compose")," for a good example in how to do this (Thanks to Kwame Porter Robinson)"),(0,a.kt)("h2",{id:"simple-without-encryption"},"Simple without encryption"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"user www-data;\nworker_processes auto;\npid /run/nginx.pid;\n\nevents {\n        worker_connections 768;\n        # multi_accept on;\n}\n\nhttp {\n        sendfile on;\n        keepalive_timeout 65;\n        client_max_body_size 500M;\n\n        include /etc/nginx/mime.types;\n        default_type application/octet-stream;\n\n        proxy_buffering    off;\n        proxy_set_header   X-Forwarded-Proto http;\n        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header   Host $http_host;\n        proxy_http_version 1.1;\n\n        upstream jatos-backend {\n                server 127.0.0.1:9000;\n        }\n\n        # needed for websockets\n        map $http_upgrade $connection_upgrade {\n                default upgrade;\n                ''      close;\n        }\n\n        server {\n                listen               80;\n\n                keepalive_timeout    70;\n                server_name          www.example.com;\n\n                # websocket location (JATOS' group and batch channel and the test page)\n                location ~ \"^/(jatos/testWebSocket|publix/[\\d]+/(group/join|batch/open))\" {\n                        proxy_pass              http://jatos-backend;\n                        proxy_http_version      1.1;\n                        proxy_set_header        Upgrade $http_upgrade;\n                        proxy_set_header        Connection $connection_upgrade;\n                        proxy_connect_timeout   7d; # keep open for 7 days even without any transmission\n                        proxy_send_timeout      7d;\n                        proxy_read_timeout      7d;\n                }\n\n                # restrict access to JATOS' GUI to local network\n                #location /jatos {\n                #       allow           192.168.1.0/24;\n                #       deny            all;\n                #       proxy_pass      http://jatos-backend;\n                #       proxy_connect_timeout   300;\n                #       proxy_send_timeout      300;\n                #       proxy_read_timeout      300;\n                #       send_timeout            300;\n                #}\n\n                # all other traffic\n                location / {\n                        proxy_pass              http://jatos-backend;\n                        proxy_connect_timeout   300;\n                        proxy_send_timeout      300;\n                        proxy_read_timeout      300;\n                        send_timeout            300;\n\n                }\n        }\n\n        access_log /var/log/nginx/access.log;\n        error_log /var/log/nginx/error.log;\n\n        include /etc/nginx/conf.d/*.conf;\n        #include /etc/nginx/sites-enabled/*;\n}\n")))}u.isMDXComponent=!0}}]);
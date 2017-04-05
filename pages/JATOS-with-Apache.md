---
title: JATOS with Apache
keywords: apache, server, httpd, installation
tags:
summary:
sidebar: mydoc_sidebar
permalink: JATOS-with-Apache.html
folder:
toc: false
last_updated: 29 Dec 2016
---

This is an example for a configuration of [Apache](https://httpd.apache.org/) as a proxy in front of JATOS. It is not necessary to run JATOS with a proxy but it's common.

The following is the content of Apache's `httpd.conf`. Change it to your needs. You probably want to change your servers address (`www.example.com` in the example). If you want to use JATOS with group studies you have to add the [mod_proxy_wstunnel module](https://httpd.apache.org/docs/2.4/mod/mod_proxy_wstunnel.html).

~~~ shell
<VirtualHost *:80>
  ServerName www.example.com
  
  # Redirect all unencrypted traffic to the respective HTTPS page
  Redirect "/" "https://www.example.com/"
</VirtualHost>

<VirtualHost *:443>
  ServerName www.example.com

  # Needed for JATOS to get the correct host and protocol
  ProxyPreserveHost On
  RequestHeader set X-Forwarded-Proto "https"
  RequestHeader set X-Forwarded-Ssl "on"
  
  # Your certificate for encryption
  SSLEngine On
  SSLCertificateFile /etc/ssl/certs/localhost.crt
  SSLCertificateKeyFile /etc/ssl/private/localhost.key

  # JATOS uses WebSockets in its group studies
  RewriteEngine On
  RewriteCond %{HTTP:Upgrade} =websocket [NC]
  RewriteRule /(.*)           ws://localhost:9000/$1 [P,L]
  RewriteCond %{HTTP:Upgrade} !=websocket [NC]
  RewriteRule /(.*)           http://localhost:9000/$1 [P,L]

  # Proxy everything to the JATOS running on localhost on port 9000
  ProxyPass / http://localhost:9000/
  ProxyPassReverse / http://localhost:9000/
</VirtualHost>
~~~

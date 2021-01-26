(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{120:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var r=i.a.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=l(e.components);return i.a.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=t,f=u["".concat(o,".").concat(b)]||u[b]||p[b]||c;return n?i.a.createElement(f,a(a({ref:r},d),{},{components:n})):i.a.createElement(f,a({ref:r},d))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,o=new Array(c);o[0]=b;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var d=2;d<c;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},71:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),i=n(7),c=(n(0),n(120)),o={id:"index-docker",title:"Using Docker",sidebar_label:"Docker",slug:"/create/docker"},a={unversionedId:"create/docker/index-docker",id:"create/docker/index-docker",isDocsHomePage:!1,title:"Using Docker",description:"Installing and creating Redis database using Docker",source:"@site/docs/create/docker/index-docker.mdx",slug:"/create/docker",permalink:"/create/docker",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/docker/index-docker.mdx",version:"current",sidebar_label:"Docker",sidebar:"docs",previous:{title:"Using Redis Enterprise Cloud",permalink:"/create/cloud"},next:{title:"Using Redis Enterprise Software",permalink:"/create/resoftware"}},s=[{value:"Installing and creating Redis database using Docker",id:"installing-and-creating-redis-database-using-docker",children:[]}],d={toc:s};function l(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},d,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"installing-and-creating-redis-database-using-docker"},"Installing and creating Redis database using Docker"),Object(c.b)("h4",{id:"pre-requisites"},"Pre-requisites:"),Object(c.b)("p",null,"Ensure that Docker is installed in your system. Follow ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"https://docs.docker.com/engine/install/")," if you haven\u2019t installed yet."),Object(c.b)("h4",{id:"run-the-redis-instance"},"Run the Redis instance:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"$ docker run --name myredis -d redis\n")),Object(c.b)("h4",{id:"verify-if-redis-container-is-running-or-not"},"Verify if Redis container is running or not:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),'$ docker ps\nCONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES\n241f2411637e   redis     "docker-entrypoint.s\u2026"   2 minutes ago   Up 2 minutes   6379/tcp   myredis\n')),Object(c.b)("h4",{id:"connecting-to-redis-server-using-redis-cli-client"},"Connecting to Redis Server using redis-cli client"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"$ docker exec -it 241 sh\n# redis-cli\n127.0.0.1:6379>ping\nPONG\n")),Object(c.b)("h4",{id:"running-redis-container-with-persistent-storage"},"Running Redis container with Persistent Storage"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"$ docker run --name some-redis -d redis redis-server --appendonly yes\n")),Object(c.b)("p",null,"If persistence is enabled, data is stored in the VOLUME /data, which can be used with --volumes-from some-volume-container or -v /docker/host/dir:/data "))}l.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),r=(a(0),a(139)),i={id:"index-sampleapp",title:"10. Sample Application",sidebar_label:"10. Sample Application",slug:"/howtos/moviesdatabase/sampleapp"},p={unversionedId:"howtos/moviesdatabase/sampleapp/index-sampleapp",id:"howtos/moviesdatabase/sampleapp/index-sampleapp",isDocsHomePage:!1,title:"10. Sample Application",description:"Application Development",source:"@site/docs/howtos/moviesdatabase/sampleapp/index-sampleapp.mdx",slug:"/howtos/moviesdatabase/sampleapp",permalink:"/howtos/moviesdatabase/sampleapp",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/moviesdatabase/sampleapp/index-sampleapp.mdx",version:"current",sidebar_label:"10. Sample Application",sidebar:"docs",previous:{title:"9. Advanced Option",permalink:"/howtos/moviesdatabase/advancedoption"},next:{title:"How to build a Shopping cart app using NodeJS and RedisJSON",permalink:"/howtos/shoppingcart"}},l=[{value:"Run the Sample Application",id:"run-the-sample-application",children:[]}],c={toc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"application-development"},"Application Development"),Object(r.b)("p",null,"It is time now to see how to use RediSearch in your application."),Object(r.b)("h2",{id:"run-the-sample-application"},"Run the Sample Application"),Object(r.b)("p",null,"The application and all the services, including RediSearch, are available as a Docker Compose application."),Object(r.b)("p",null,"If you have not already downloaded the project, clone it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"> git clone https://github.com/RediSearch/redisearch-getting-started.git\n\n> cd redisearch-getting-started\n")),Object(r.b)("p",null,"To run the application:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"> cd sample-app\n\n> docker-compose up --force-recreate --build\n\n")),Object(r.b)("p",null,"This Docker Compose will start:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"RediSearch instance on port 6380, and import all movies, actors and create indexes"),Object(r.b)("li",{parentName:"ol"},"The Java, Node and Python REST Services available on port 8085, 8086, 8087"),Object(r.b)("li",{parentName:"ol"},"The frontend on port 8084")),Object(r.b)("p",null,"Once started you can access the application and its services using the following URLs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"http://localhost:8084"),Object(r.b)("li",{parentName:"ul"},"http://localhost:8085/api/1.0/movies/search?q=star&offset=0&limit=10"),Object(r.b)("li",{parentName:"ul"},"http://localhost:8086/api/1.0/movies/search?q=star&offset=0&limit=10"),Object(r.b)("li",{parentName:"ul"},"http://localhost:8087/api/1.0/movies/search?q=star&offset=0&limit=10")),Object(r.b)("h4",{id:"stop-and-delete-everything"},"Stop and Delete Everything"),Object(r.b)("p",null,"Run the following command to delete the containers & images:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"> docker-compose down -v --rmi local --remove-orphans\n")))}s.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||r;return a?o.a.createElement(m,p(p({ref:t},c),{},{components:a})):o.a.createElement(m,p({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
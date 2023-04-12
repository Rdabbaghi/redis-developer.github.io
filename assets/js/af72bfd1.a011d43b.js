"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},c=void 0,i={unversionedId:"howtos/solutions/caching-architecture/common-caching/caching-movie-app",id:"howtos/solutions/caching-architecture/common-caching/caching-movie-app",title:"caching-movie-app",description:"The demonstration application showcases a movie application that uses basic create, read, update, and delete (CRUD) operations.",source:"@site/docs/howtos/solutions/caching-architecture/common-caching/caching-movie-app.mdx",sourceDirName:"howtos/solutions/caching-architecture/common-caching",slug:"/howtos/solutions/caching-architecture/common-caching/caching-movie-app",permalink:"/howtos/solutions/caching-architecture/common-caching/caching-movie-app",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/caching-architecture/common-caching/caching-movie-app.mdx",tags:[],version:"current",lastUpdatedAt:1681130274,formattedLastUpdatedAt:"Apr 10, 2023",frontMatter:{}},s={},p=[],l={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The demonstration application showcases a movie application that uses basic create, read, update, and delete (CRUD) operations.\n",(0,o.kt)("img",{alt:"demo-01",src:n(82989).Z,width:"2616",height:"1348"})),(0,o.kt)("p",null,"The movie application dashboard contains a search section at the top and a list of movie cards in the middle. The floating plus icon displays a pop-up when the user selects it, permitting the user to enter new movie details. The search section has a text search bar and a toggle link between text search and basic (that is, form-based) search. Each movie card has edit and delete icons, which are displayed when a mouse hovers over the card."))}h.isMDXComponent=!0},82989:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/demo-01-e8fece1a10d65e2298fa3e312b75ce29.png"}}]);
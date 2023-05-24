"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},50358:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),o=r(52263);const a="authorByline_VoxI",i="authorLabel_a70t",l="authorProfileImage_URwT";const c=function(e){let{frontMatter:t}=e;const{siteConfig:r}=(0,o.Z)(),c=r.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:a},n.createElement("img",{className:l,src:`/img/${c[e].image?c[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${c[e].name}`}),n.createElement("div",null,n.createElement("div",{className:i},"Author:"),n.createElement("div",null,n.createElement("a",{href:c[e].link,target:"_blank"},c[e].name),", ",c[e].title))))),n.createElement("hr",null)))}},85621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905)),a=r(50358);const i={id:"index-rti-local-inventory-search",title:"Real-time Local Inventory Search Using Redis",sidebar_label:"Real-time Local Inventory Search Using Redis",slug:"/howtos/solutions/real-time-inventory/local-inventory-search",authors:["prasan","will"]},l=void 0,c={unversionedId:"howtos/solutions/real-time-inventory/local-inventory-search/index-rti-local-inventory-search",id:"howtos/solutions/real-time-inventory/local-inventory-search/index-rti-local-inventory-search",title:"Real-time Local Inventory Search Using Redis",description:"",source:"@site/docs/howtos/solutions/real-time-inventory/local-inventory-search/index-rti-local-inventory-search.mdx",sourceDirName:"howtos/solutions/real-time-inventory/local-inventory-search",slug:"/howtos/solutions/real-time-inventory/local-inventory-search",permalink:"/howtos/solutions/real-time-inventory/local-inventory-search",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/real-time-inventory/local-inventory-search/index-rti-local-inventory-search.mdx",tags:[],version:"current",lastUpdatedAt:1684866843,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{id:"index-rti-local-inventory-search",title:"Real-time Local Inventory Search Using Redis",sidebar_label:"Real-time Local Inventory Search Using Redis",slug:"/howtos/solutions/real-time-inventory/local-inventory-search",authors:["prasan","will"]}},s={},u=[],m={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{frontMatter:i,mdxType:"Authors"}))}p.isMDXComponent=!0}}]);
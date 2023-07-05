"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5146],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),p=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),h=p(a),u=n,c=h["".concat(i,".").concat(u)]||h[u]||m[u]||s;return a?r.createElement(c,l(l({ref:e},d),{},{components:a})):r.createElement(c,l({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,l=new Array(s);l[0]=h;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},79374:(t,e,a)=>{a.d(e,{ZP:()=>l});var r=a(87462),n=(a(67294),a(3905));const s={toc:[]};function l(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"End-of-Life Notice",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Redis is phasing out ",(0,n.kt)("strong",{parentName:"p"},"RedisGraph"),". ",(0,n.kt)("a",{parentName:"p",href:"https://redis.com/blog/redisgraph-eol/"},(0,n.kt)("u",null,(0,n.kt)("strong",{parentName:"a"},"This blog post")))," explains the motivation behind this decision and the implications for existing Redis customers and community members."),(0,n.kt)("p",{parentName:"admonition"},"End of support is scheduled for January 31, 2025."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("em",{parentName:"p"},"Beginning with Redis Stack 7.2.x-y, Redis Stack will no longer include graph capabilities (RedisGraph)."))))}l.isMDXComponent=!0},48781:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),s=a(79374);const l={id:"index-redisgraph-cheatsheet",title:"RedisGRAPH Cheatsheet",sidebar_label:"RedisGRAPH CheatSheet",slug:"/howtos/redisgraph/redisgraph-cheatsheet"},o=void 0,i={unversionedId:"howtos/redisgraph/redisgraph-cheatsheet/index-redisgraph-cheatsheet",id:"howtos/redisgraph/redisgraph-cheatsheet/index-redisgraph-cheatsheet",title:"RedisGRAPH Cheatsheet",description:"| Command                                                                                                                                      | Purpose                                                                                                                                                                                | Syntax                                                                                                                                                                                       |",source:"@site/docs/howtos/redisgraph/redisgraph-cheatsheet/index-redisgraph-cheatsheet.mdx",sourceDirName:"howtos/redisgraph/redisgraph-cheatsheet",slug:"/howtos/redisgraph/redisgraph-cheatsheet",permalink:"/howtos/redisgraph/redisgraph-cheatsheet",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/redisgraph-cheatsheet/index-redisgraph-cheatsheet.mdx",tags:[],version:"current",lastUpdatedAt:1688572679,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{id:"index-redisgraph-cheatsheet",title:"RedisGRAPH Cheatsheet",sidebar_label:"RedisGRAPH CheatSheet",slug:"/howtos/redisgraph/redisgraph-cheatsheet"}},p={},d=[],m={toc:d};function h(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(s.ZP,{mdxType:"GraphEol"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Purpose"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Syntax"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#graphquery"},"GRAPH.QUERY")))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Execute a query against a named graph"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "',"<","query",">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#graphro_query"},"GRAPH.RO_QUERY")))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Executes a read only query against a named graph"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.RO_QUERY ","<","graph name",">",' "',"<","query",">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#match"},'GRAPH.QUERY ... "MATCH ..."')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Query Structure: MATCH describes the relationship between queried entities, using ascii art to represent pattern(s) to match against"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#optional-match"},'GRAPH.QUERY ... "MATCH ... OPTIONAL MATCH"')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The OPTIONAL MATCH clause is a MATCH variant that produces null values for elements that do not match successfully, rather than the all-or-nothing logic for patterns in MATCH clauses"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," OPTIONAL MATCH ","<","pattern",">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#where"},'GRAPH.QUERY ... "MATCH ... WHERE ..."')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The WHERE clause is not mandatory, but if you want to filter results, you can specify your predicates here. Click the link to see supported operations."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#return"},'GRAPH.QUERY ... "MATCH ... WHERE ... RETURN ..."')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The RETURN clause essentially defines the result set. In this way, a tailored result-set is customized."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">"," RETURN ","<","pattern",">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#order-by"},'GRAPH.QUERY ... "MATCH ... WHERE ... RETRUN ... ORDER BY ..."')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"ORDER BY specifies that the output be sorted and how"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">"," RETURN ","<","pattern",">"," ORDER BY ","<","variables",">"," ","[","ASC","|","DESC","]",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#skip"},'GRAPH.QUERY ... "MATCH \u2026 WHERE \u2026 RETURN \u2026 ORDER BY \u2026 SKIP ..."')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"SKIP optional clause allows for a specified number of records to be omitted from the result set"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">"," RETURN ","<","pattern",">"," ORDER BY ","<","variables",">"," ","<","[ASC ","|"," DESC ","]",' SKIP \\" where "n" is an integer'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#limit"},'GRAPH.QUERY ... "MATCH \u2026 WHERE \u2026 RETURN \u2026 ORDER BY \u2026 LIMIT ..."')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"LIMIT clause is not mandatory and can be used to limit the number of records returned by a RETURN set."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," WHERE ","<","pattern",">"," RETURN ","<","pattern",">"," ORDER BY ","<","variables",">"," ","[","ASC ","|"," DESC ","]",' LIMIT " where "n" is an integer'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#limit"},'GRAPH.QUERY ... "MATCH \u2026 WHERE \u2026 RETURN \u2026 ORDER BY \u2026 LIMIT ..."')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"LIMIT clause is not mandatory and can be used to limit the number of records returned by a RETURN set."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH \\<pattern',">"," WHERE \\<pattern",">"," RETURN \\<pattern",">"," ORDER BY \\<variables",">"," ","[","ASC ","|"," DESC ","]"," LIMIT \\<n",">",'" where "n" is an integer'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#create"},'GRAPH.QUERY ... "MATCH ... CREATE \u2026"')," "))),(0,n.kt)("td",{parentName:"tr",align:"left"},"CREATE clause is used to introduce new nodes and relationships"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH ',"<","pattern",">"," CREATE ","<","nodes",">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#delete"},'GRAPH.QUERY ... "MATCH \u2026 DELETE \u2026"')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"DELETE clause is used to remove both nodes and relationships"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH \\<pattern',">"," DELETE \\<alias",">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#set"},'GRAPH.QUERY ... "MATCH \u2026 SET \u2026"')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"SET clause is used to create or update properties on nodes and relationships"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH \\<pattern',">"," SET \\<property value",">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#merge"},'GRAPH.QUERY ... "MERGE \u2026"')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"MERGE clause ensures that a path exists in the graph"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MERGE \\<property value',">",'"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("button",null,(0,n.kt)("b",null,(0,n.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisgraph/commands/#with"},'GRAPH.QUERY ... "MATCH \u2026 WITH \u2026 AS ..."')))),(0,n.kt)("td",{parentName:"tr",align:"left"},"WITH clause allows parts of queries to be independently executed and have their results handled uniquely."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("code",null,"GRAPH.QUERY ","<","graph name",">",' "MATCH \\<pattern',">"," WITH \\<property value",">"," AS \\<property value",">",'"'))))))}h.isMDXComponent=!0}}]);
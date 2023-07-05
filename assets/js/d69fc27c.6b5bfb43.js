"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[8252],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(a),m=i,u=c["".concat(d,".").concat(m)]||c[m]||h[m]||n;return a?r.createElement(u,s(s({ref:t},p),{},{components:a})):r.createElement(u,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},79374:(e,t,a)=>{a.d(t,{ZP:()=>s});var r=a(87462),i=(a(67294),a(3905));const n={toc:[]};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},n,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"End-of-Life Notice",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Redis is phasing out ",(0,i.kt)("strong",{parentName:"p"},"RedisGraph"),". ",(0,i.kt)("a",{parentName:"p",href:"https://redis.com/blog/redisgraph-eol/"},(0,i.kt)("u",null,(0,i.kt)("strong",{parentName:"a"},"This blog post")))," explains the motivation behind this decision and the implications for existing Redis customers and community members."),(0,i.kt)("p",{parentName:"admonition"},"End of support is scheduled for January 31, 2025."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Beginning with Redis Stack 7.2.x-y, Redis Stack will no longer include graph capabilities (RedisGraph)."))))}s.isMDXComponent=!0},86599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=a(87462),i=(a(67294),a(3905)),n=a(79374);const s={id:"index-redisgraph",title:"RedisGraph",sidebar_label:"RedisGraph",slug:"/modules/redisgraph"},o=void 0,d={unversionedId:"modules/redisgraph/index-redisgraph",id:"modules/redisgraph/index-redisgraph",title:"RedisGraph",description:"RedisGraph is a Redis module that enables enterprises to process any kind of connected data much faster than with traditional relational or existing graph databases. RedisGraph implements a unique data storage and processing solution (with sparse-adjacency matrices and GraphBLAS) to deliver the fastest and most efficient way to store, manage, and process connected data in graphs. With RedisGraph, you can process complex transactions 10 - 600 times faster than with traditional graph solutions while using 50 - 60% less memory resources than other graph databases!",source:"@site/docs/modules/redisgraph/index-redisgraph.mdx",sourceDirName:"modules/redisgraph",slug:"/modules/redisgraph",permalink:"/modules/redisgraph",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/modules/redisgraph/index-redisgraph.mdx",tags:[],version:"current",lastUpdatedAt:1688572679,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{id:"index-redisgraph",title:"RedisGraph",sidebar_label:"RedisGraph",slug:"/modules/redisgraph"}},l={},p=[{value:"Step 1. Register and subscribe",id:"step-1-register-and-subscribe",level:3},{value:"Step 2. Create a database with RedisGraph Module",id:"step-2-create-a-database-with-redisgraph-module",level:3},{value:"Step 3. Connect to a database",id:"step-3-connect-to-a-database",level:3},{value:"Step 4. Getting Started with RedisGraph",id:"step-4-getting-started-with-redisgraph",level:3},{value:"Step 5: Insert data into a graph",id:"step-5-insert-data-into-a-graph",level:3},{value:"Insert actors",id:"insert-actors",level:4},{value:"Insert a movie",id:"insert-a-movie",level:4},{value:"Associate actors and movies",id:"associate-actors-and-movies",level:4},{value:"Querying the graph",id:"querying-the-graph",level:4},{value:"\u201cWhat are the titles of all the movies?\u201d",id:"what-are-the-titles-of-all-the-movies",level:4},{value:"\u201cWhat is the information for the movie with the ID of 1?\u201d",id:"what-is-the-information-for-the-movie-with-the-id-of-1",level:4},{value:"\u201cWho are the actors in the movie &#39;Star Wars: Episode V - The Empire Strikes Back&#39; and what roles did they play?\u201d",id:"who-are-the-actors-in-the-movie-star-wars-episode-v---the-empire-strikes-back-and-what-roles-did-they-play",level:4},{value:"Visualizing graph databases with RedisInsight",id:"visualizing-graph-databases-with-redisinsight",level:4},{value:"Next Steps",id:"next-steps",level:3}],h={toc:p};function c(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(n.ZP,{mdxType:"GraphEol"}),"RedisGraph is a Redis module that enables enterprises to process any kind of connected data much faster than with traditional relational or existing graph databases. RedisGraph implements a unique data storage and processing solution (with sparse-adjacency matrices and GraphBLAS) to deliver the fastest and most efficient way to store, manage, and process connected data in graphs. With RedisGraph, you can process complex transactions 10 - 600 times faster than with traditional graph solutions while using 50 - 60% less memory resources than other graph databases!",(0,i.kt)("h3",{id:"step-1-register-and-subscribe"},"Step 1. Register and subscribe"),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"/create/cloud/rediscloud"},"this link to register")," and subscribe to Redis Enterprise Cloud"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RedisGraph",src:a(48706).Z,width:"1444",height:"606"})),(0,i.kt)("h3",{id:"step-2-create-a-database-with-redisgraph-module"},"Step 2. Create a database with RedisGraph Module"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RedisGraph",src:a(37853).Z,width:"1248",height:"844"})),(0,i.kt)("h3",{id:"step-3-connect-to-a-database"},"Step 3. Connect to a database"),(0,i.kt)("p",null,"Follow ",(0,i.kt)("a",{parentName:"p",href:"explore/redisinsight"},"this")," link to know how to connect to a database"),(0,i.kt)("h3",{id:"step-4-getting-started-with-redisgraph"},"Step 4. Getting Started with RedisGraph"),(0,i.kt)("p",null,"In the following steps, we will use some basic RediGraph commands to insert data into a graph and then query the graph. You can run them from the Redis command-line interface (redis-cli) or use the CLI available in RedisInsight. (See part 2 of this tutorial to learn more about using the RedisInsight CLI.)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RedisGraph",src:a(65972).Z,width:"1198",height:"292"})),(0,i.kt)("h3",{id:"step-5-insert-data-into-a-graph"},"Step 5: Insert data into a graph"),(0,i.kt)("h4",{id:"insert-actors"},"Insert actors"),(0,i.kt)("p",null,"To interact with RedisGraph you will typically use the GRAPH.QUERY command and execute Cypher queries. Let\u2019s start to insert some actors into the graph:movies graph name, which is automatically created using this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'>> GRAPH.QUERY graph:movies "CREATE (:Actor {name:\'Mark Hamill\', actor_id:1}), (:Actor {name:\'Harrison Ford\', actor_id:2}), (:Actor {name:\'Carrie Fisher\', actor_id:3})"\n\n1) 1) "Labels added: 1"\n   2) "Nodes created: 3"\n   3) "Properties set: 6"\n   4) "Query internal execution time: 0.675400 milliseconds"\n')),(0,i.kt)("p",null,"This single query creates three actors, along with their names and unique IDs."),(0,i.kt)("h4",{id:"insert-a-movie"},"Insert a movie"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "CREATE (:Movie {title:\'Star Wars: Episode V - The Empire Strikes Back\', release_year: 1980 , movie_id:1})"\n1) 1) "Labels added: 1"\n   2) "Nodes created: 1"\n   3) "Properties set: 3"\n   4) "Query internal execution time: 0.392300 milliseconds"\n')),(0,i.kt)("p",null,"This single query creates a movie with a title, the release year, and an ID."),(0,i.kt)("h4",{id:"associate-actors-and-movies"},"Associate actors and movies"),(0,i.kt)("p",null,"The core of a graph is the relationships between the nodes, allowing the applications to navigate and query them. Let\u2019s create a relationship between the actors and the movies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "MATCH (a:Actor),(m:Movie) WHERE a.actor_id = 1 AND m.movie_id = 1 CREATE (a)-[r:Acted_in {role:\'Luke Skywalker\'}]->(m) RETURN r"\n1) 1) "r"\n2) 1) 1) 1) 1) "id"\n            2) (integer) 1\n         2) 1) "type"\n            2) "Acted_in"\n         3) 1) "src_node"\n            2) (integer) 0\n         4) 1) "dest_node"\n            2) (integer) 3\n         5) 1) "properties"\n            2) 1) 1) "role"\n                  2) "Luke Skywalker"\n3) 1) "Properties set: 1"\n   2) "Relationships created: 1"\n   3) "Query internal execution time: 0.664800 milliseconds"\n')),(0,i.kt)("p",null,"This command created a new relation indicating that the actor Mark Hamill acted in Star Wars: Episode V as Luke Skywalker."),(0,i.kt)("p",null,"Let\u2019s repeat this process for the other actors:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> GRAPH.QUERY graph:movies \"MATCH (a:Actor), (m:Movie) WHERE a.actor_id = 2 AND m.movie_id = 1 CREATE (a)-[r:Acted_in {role:'Han Solo'}]->(m) RETURN r\"\n> GRAPH.QUERY graph:movies \"MATCH (a:Actor), (m:Movie) WHERE a.actor_id = 3 AND m.movie_id = 1 CREATE (a)-[r:Acted_in {role:'Princess Leila'}]->(m) RETURN r\"\n")),(0,i.kt)("p",null,"You can also do all of this in a single query, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "CREATE (:Actor {name:\'Marlo Brando\', actor_id:4})-[:Acted_in {role:\'Don Vito Corleone\'}]->(:Movie {title:\'The Godfather\', release_year: 1972 , movie_id:2})"\n\n1) 1) "Nodes created: 2"\n   2) "Properties set: 6"\n   3) "Relationships created: 1"\n   4) "Query internal execution time: 0.848500 milliseconds"\n')),(0,i.kt)("h4",{id:"querying-the-graph"},"Querying the graph"),(0,i.kt)("p",null,"Now that you have data in your graph, you\u2019re ready to ask some questions, such as:"),(0,i.kt)("h4",{id:"what-are-the-titles-of-all-the-movies"},"\u201cWhat are the titles of all the movies?\u201d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "MATCH (m:Movie) RETURN m.title"\n\n1) 1) "m.title"\n2) 1) 1) "Star Wars: Episode V - The Empire Strikes Back"\n   2) 1) "The Godfather"\n3) 1) "Query internal execution time: 0.349400 milliseconds"\n')),(0,i.kt)("h4",{id:"what-is-the-information-for-the-movie-with-the-id-of-1"},"\u201cWhat is the information for the movie with the ID of 1?\u201d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "MATCH (m:Movie) WHERE m.movie_id = 1 RETURN m"\n\n1) 1) "m"\n2) 1) 1) 1) 1) "id"\n            2) (integer) 3\n         2) 1) "labels"\n            2) 1) "Movie"\n         3) 1) "properties"\n            2) 1) 1) "title"\n                  2) "Star Wars: Episode V - The Empire Strikes Back"\n               2) 1) "release_year"\n                  2) (integer) 1980\n               3) 1) "movie_id"\n                  2) (integer) 1\n3) 1) "Query internal execution time: 0.365800 milliseconds"\n')),(0,i.kt)("h4",{id:"who-are-the-actors-in-the-movie-star-wars-episode-v---the-empire-strikes-back-and-what-roles-did-they-play"},"\u201cWho are the actors in the movie 'Star Wars: Episode V - The Empire Strikes Back' and what roles did they play?\u201d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'> GRAPH.QUERY graph:movies "MATCH (a:Actor)-[r:Acted_in]-(m:Movie) WHERE m.movie_id = 1 RETURN a.name,m.title,r.role"\n1) 1) "a.name"\n   2) "m.title"\n   3) "r.role"\n2) 1) 1) "Mark Hamill"\n      2) "Star Wars: Episode V - The Empire Strikes Back"\n      3) "Luke Skywalker"\n   2) 1) "Harrison Ford"\n      2) "Star Wars: Episode V - The Empire Strikes Back"\n      3) "Han Solo"\n   3) 1) "Carrie Fisher"\n      2) "Star Wars: Episode V - The Empire Strikes Back"\n      3) "Princess Leila"\n3) 1) "Query internal execution time: 0.641200 milliseconds"\n')),(0,i.kt)("h4",{id:"visualizing-graph-databases-with-redisinsight"},"Visualizing graph databases with RedisInsight"),(0,i.kt)("p",null,"If you are using RedisInsight, you can visualize and navigate into the nodes and relationships graphically.\nClick on the RedisGraph menu entry on the left and enter the query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"MATCH (m:Actor) return m\n")),(0,i.kt)("p",null,"Click on the Execute button, and double click on the actors to follow the relationships You should see a graph like this one:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RedisGraph",src:a(94825).Z,width:"1526",height:"976"})),(0,i.kt)("h3",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn more about RedisGraph in the ",(0,i.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisgraph/"},"Quickstart")," tutorial.")))}c.isMDXComponent=!0},37853:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redisgraph-2105f44e0f297f5a5cc67c8b6ed4fcdc.png"},48706:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redisgraph1-b44744e302a6aaf7c455dbcffee3b325.png"},94825:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redisgraph4-f408a02a39ac7bb111677a317bd5b695.png"},65972:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/redisgraphflow-d35eff71cab37cb13ed5dc479bba4fbd.png"}}]);
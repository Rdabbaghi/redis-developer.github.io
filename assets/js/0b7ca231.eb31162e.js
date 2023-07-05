"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[8922],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},d=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(o),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||n;return o?r.createElement(m,p(p({ref:t},d),{},{components:o})):r.createElement(m,p({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,p=new Array(n);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<n;i++)p[i]=o[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},50358:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(67294),a=o(52263);const n="authorByline_VoxI",p="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:o}=(0,a.Z)(),l=o.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:n},r.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:p},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},79374:(e,t,o)=>{o.d(t,{ZP:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={toc:[]};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},n,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"End-of-Life Notice",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Redis is phasing out ",(0,a.kt)("strong",{parentName:"p"},"RedisGraph"),". ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/blog/redisgraph-eol/"},(0,a.kt)("u",null,(0,a.kt)("strong",{parentName:"a"},"This blog post")))," explains the motivation behind this decision and the implications for existing Redis customers and community members."),(0,a.kt)("p",{parentName:"admonition"},"End of support is scheduled for January 31, 2025."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Beginning with Redis Stack 7.2.x-y, Redis Stack will no longer include graph capabilities (RedisGraph)."))))}p.isMDXComponent=!0},45400:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(87462),a=(o(67294),o(3905)),n=o(50358),p=o(79374);const s={id:"index-explorepythoncode",title:"Explore Python Codebase using RedisGraph",sidebar_label:"Explore Python Codebase using RedisGraph",slug:"/howtos/redisgraph/explore-python-code",authors:["ajeet"]},l=void 0,i={unversionedId:"howtos/redisgraph/explore-python-code/index-explorepythoncode",id:"howtos/redisgraph/explore-python-code/index-explorepythoncode",title:"Explore Python Codebase using RedisGraph",description:"Pycograph is an open source tool that creates a RedisGraph model of your Python code. The tool lets you to explore your Python codebase with graph queries. With Pycograph, you can query the python code with Cypher. Additionally, it is possible to visualize the graph model using RedisInsight.",source:"@site/docs/howtos/redisgraph/explore-python-code/index-explorepythoncode.mdx",sourceDirName:"howtos/redisgraph/explore-python-code",slug:"/howtos/redisgraph/explore-python-code",permalink:"/howtos/redisgraph/explore-python-code",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisgraph/explore-python-code/index-explorepythoncode.mdx",tags:[],version:"current",lastUpdatedAt:1688572679,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{id:"index-explorepythoncode",title:"Explore Python Codebase using RedisGraph",sidebar_label:"Explore Python Codebase using RedisGraph",slug:"/howtos/redisgraph/explore-python-code",authors:["ajeet"]}},d={},c=[{value:"Step 1. Install Docker",id:"step-1-install-docker",level:3},{value:"Step 2. Install Pycograph from PyPI",id:"step-2-install-pycograph-from-pypi",level:3},{value:"Step 3. Start RedisGraph Module",id:"step-3-start-redisgraph-module",level:3},{value:"Step 4. Run RedisInsight",id:"step-4-run-redisinsight",level:3},{value:"Step 5. Load a sample Python code",id:"step-5-load-a-sample-python-code",level:3},{value:"Step 6. Load Python Code",id:"step-6-load-python-code",level:3},{value:"Step 7. Visualize the project",id:"step-7-visualize-the-project",level:3},{value:"Query #1: Return every node",id:"query-1-return-every-node",level:4},{value:"Query #2: Return every non-test object",id:"query-2-return-every-non-test-object",level:4},{value:"Query #3. Displaying the function behind the docker-compose up command",id:"query-3-displaying-the-function-behind-the-docker-compose-up-command",level:4},{value:"Query #4. Displaying the &#39;docker-compose up&#39; and its calls relationships",id:"query-4-displaying-the-docker-compose-up-and-its-calls-relationships",level:4},{value:"Query #5. Displaying the &#39;docker-compose up&#39; vs &#39;docker-compose run&#39;",id:"query-5-displaying-the-docker-compose-up-vs-docker-compose-run",level:4},{value:"References:",id:"references",level:3}],u={toc:c};function h(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p.ZP,{mdxType:"GraphEol"}),(0,a.kt)(n.Z,{frontMatter:s,mdxType:"Authors"}),(0,a.kt)("p",null,"Pycograph is an open source tool that creates a RedisGraph model of your Python code. The tool lets you to explore your Python codebase with graph queries. With Pycograph, you can query the python code with Cypher. Additionally, it is possible to visualize the graph model using RedisInsight."),(0,a.kt)("p",null,"The project is hosted over ",(0,a.kt)("a",{parentName:"p",href:"https://pycograph.com/"},"https://pycograph.com/")," and package is available in ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/pycograph/"},"PyPI repository"),". It was introduced for the first time by ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/user/reka/"},"Reka Horvath")," during RedisConf 2021."),(0,a.kt)("div",{class:"text--center"},(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pE3cg6jK2Zg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("p",null,"Let us see how to explore Python code using Pycograph and RedisGraph below:"),(0,a.kt)("h3",{id:"step-1-install-docker"},"Step 1. Install Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," curl -sSL https://get.docker.com/ | sh\n")),(0,a.kt)("h3",{id:"step-2-install-pycograph-from-pypi"},"Step 2. Install Pycograph from PyPI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pip install pycograph\n")),(0,a.kt)("h3",{id:"step-3-start-redisgraph-module"},"Step 3. Start RedisGraph Module"),(0,a.kt)("p",null,"The redis/redis-stack Docker image provides you all the essential Redis modules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -p 6379:6379 redis/redis-stack\n")),(0,a.kt)("h3",{id:"step-4-run-redisinsight"},"Step 4. Run RedisInsight"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -d -v redisinsight:/db -p 8001:8001 redislabs/redisinsight:latest\n")),(0,a.kt)("h3",{id:"step-5-load-a-sample-python-code"},"Step 5. Load a sample Python code"),(0,a.kt)("p",null,"We will be using a popular Docker compose project for our sample python code.\nClone the Docker Compose project repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  git clone https://github.com/docker/compose\n")),(0,a.kt)("h3",{id:"step-6-load-python-code"},"Step 6. Load Python Code"),(0,a.kt)("p",null,"Load your project's code with the pycograph load command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pycograph load --project-dir compose\n")),(0,a.kt)("b",null,"Results"),":",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," Graph successfully updated.\n {'graph name': 'compose', 'nodes added': 2428, 'edges added': 11239}\n")),(0,a.kt)("h3",{id:"step-7-visualize-the-project"},"Step 7. Visualize the project"),(0,a.kt)("p",null,"Open RedisInsight, select RedisGraph on the left menu and run the below query:"),(0,a.kt)("h4",{id:"query-1-return-every-node"},"Query #1: Return every node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," MATCH (n) RETURN n\n")),(0,a.kt)("p",null,"You will see the below output:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:o(17701).Z,width:"3090",height:"1256"})),(0,a.kt)("h4",{id:"query-2-return-every-non-test-object"},"Query #2: Return every non-test object"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:o(47241).Z,width:"3068",height:"1200"})),(0,a.kt)("h4",{id:"query-3-displaying-the-function-behind-the-docker-compose-up-command"},"Query #3. Displaying the function behind the docker-compose up command"),(0,a.kt)("p",null,"A query returning exactly one node using the unique full_name property. Double-click on the node to display all its relationships."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:o(48251).Z,width:"3018",height:"1144"})),(0,a.kt)("h4",{id:"query-4-displaying-the-docker-compose-up-and-its-calls-relationships"},"Query #4. Displaying the 'docker-compose up' and its calls relationships"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:o(28461).Z,width:"3026",height:"1152"})),(0,a.kt)("h4",{id:"query-5-displaying-the-docker-compose-up-vs-docker-compose-run"},"Query #5. Displaying the 'docker-compose up' vs 'docker-compose run'"),(0,a.kt)("p",null,"Functions called by the Docker Compose top level commands up and run"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:o(96065).Z,width:"3378",height:"2016"})),(0,a.kt)("h3",{id:"references"},"References:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pycograph.com/"},"Pycograph Project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/docker/compose"},"Docker Compose Source Code"))),(0,a.kt)("h2",{id:""}),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,a.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}h.isMDXComponent=!0},17701:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/pycograph1-c613b539a1b9593e890ac48f8327d037.png"},47241:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/pycograph2-4d39ddb177262c70e6ed5b457d6c0b92.png"},48251:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/pycograph3-82079be3e40ebd99ce870a81dc628071.png"},28461:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/pycograph4-f7fe963e1425562926ecff93c68c76e0.png"},96065:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/pycograph5-77bc3dc108918d7a4ca8a9e45f83e929.png"}}]);
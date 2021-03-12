(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return d}));var r=o(3),i=o(7),n=(o(0),o(139)),a={id:"index-redisbloom",title:"RedisBloom",sidebar_label:"RedisBloom",slug:"/modules/redisbloom"},s={unversionedId:"modules/redisbloom/index-redisbloom",id:"modules/redisbloom/index-redisbloom",isDocsHomePage:!1,title:"RedisBloom",description:"RedisBloom extends Redis core to support additional probabilistic data structures. It allows for solving computer science problems in a constant memory space with extremely fast processing and a low error rate. It supports scalable Bloom and Cuckoo filters to determine (with a specified degree of certainty) whether an item is present or absent from a collection.",source:"@site/docs/modules/redisbloom/index-redisbloom.mdx",slug:"/modules/redisbloom",permalink:"/modules/redisbloom",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/modules/redisbloom/index-redisbloom.mdx",version:"current",sidebar_label:"RedisBloom",sidebar:"docs",previous:{title:"RedisGraph",permalink:"/modules/redisgraph"},next:{title:"1. Getting Started",permalink:"/howtos/moviesdatabase/getting-started"}},l=[{value:"Step 1. Register and subscribe",id:"step-1-register-and-subscribe",children:[]},{value:"Step 2. Create a database with RedisBloom Module",id:"step-2-create-a-database-with-redisbloom-module",children:[]},{value:"Step 3. Connect to a database",id:"step-3-connect-to-a-database",children:[]},{value:"Step 4. Getting Started with RedisBloom",id:"step-4-getting-started-with-redisbloom",children:[]},{value:"Next Step",id:"next-step",children:[]}],c={toc:l};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"RedisBloom extends Redis core to support additional probabilistic data structures. It allows for solving computer science problems in a constant memory space with extremely fast processing and a low error rate. It supports scalable Bloom and Cuckoo filters to determine (with a specified degree of certainty) whether an item is present or absent from a collection. "),Object(n.b)("p",null,"The RedisBloom module provides four data types:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bloom filter: A probabilistic data structure that can test for presence. A Bloom filter is a data structure designed to tell you, rapidly and memory-efficiently, whether an element is present in a set. Bloom filters typically exhibit better performance and scalability when inserting items (so if you're often adding items to your dataset then Bloom may be ideal). Learn more about Bloom Filters here."),Object(n.b)("li",{parentName:"ul"},"Cuckoo filter: An alternative to Bloom filters, Cuckoo filters comes with additional support for deletion of elements from a set. These filters are quicker on check operations."),Object(n.b)("li",{parentName:"ul"},"Count-min sketch: A count-min sketch is generally used to determine the frequency of events in a stream. You can query the count-min sketch to get an estimate of the frequency of any given event. Learn more about count-min sketch here. "),Object(n.b)("li",{parentName:"ul"},"Top-K: The Top-k probabilistic data structure in RedisBloom is a deterministic algorithm that approximates frequencies for the top k items. With Top-K, you\u2019ll be notified in real time whenever elements enter into or are expelled from your Top-K list. If an element add-command enters the list, the dropped element will be returned. Learn more about Top-K here.")),Object(n.b)("h3",{id:"step-1-register-and-subscribe"},"Step 1. Register and subscribe"),Object(n.b)("p",null,"Follow ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/create/cloud/rediscloud"}),"this")," link to register and subscribe to Redis Enterprise Cloud"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Redisbloom",src:o(247).default})),Object(n.b)("h3",{id:"step-2-create-a-database-with-redisbloom-module"},"Step 2. Create a database with RedisBloom Module"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Redisbloom",src:o(248).default})),Object(n.b)("h3",{id:"step-3-connect-to-a-database"},"Step 3. Connect to a database"),Object(n.b)("p",null,"Follow ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"explore/redisinsight"}),"this")," link to know how to connect to a database"),Object(n.b)("h3",{id:"step-4-getting-started-with-redisbloom"},"Step 4. Getting Started with RedisBloom"),Object(n.b)("p",null,"In the next steps you will use some basic RedisBloom commands. You can run them from the Redis command-line interface (redis-cli) or use the CLI available in RedisInsight. (See part 2 of this tutorial to learn more about using the RedisInsight CLI.) To interact with RedisBloom, you use the BF.ADD and BF.EXISTS commands. "),Object(n.b)("p",null,"Let\u2019s go ahead and test drive some RedisBloom-specific operations. We will create a basic dataset based on unique visitors\u2019 IP addresses, and you will see how to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a Bloom filter"),Object(n.b)("li",{parentName:"ul"},"Determine whether or not an item exists in the Bloom filter"),Object(n.b)("li",{parentName:"ul"},"Add one or more items to the Bloom filter"),Object(n.b)("li",{parentName:"ul"},"Determine whether or not a unique visitor\u2019s IP address exists")),Object(n.b)("p",null,"Let\u2019s walk through the process step-by-step:"),Object(n.b)("h4",{id:"create-a-bloom-filter"},"Create a Bloom filter"),Object(n.b)("p",null,"Use the BF.ADD command to add a unique visitor IP address to the Bloom filter as shown here:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),">> BF.ADD unique_visitors 10.94.214.120\n(integer) 1\n(1.75s)\n")),Object(n.b)("h4",{id:"determine-whether-or-not-an-item-exists"},"Determine whether or not an item exists"),Object(n.b)("p",null,"Use the BF.EXISTS command to determine whether or not an item may exist in the Bloom filter:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),">> BF.EXISTS unique_visitors 10.94.214.120\n(integer) 1\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),">> BF.EXISTS unique_visitors 10.94.214.121\n(integer) 0\n(1.46s)\n")),Object(n.b)("p",null,'In the above example, the first command shows the result as \u201c1\u201d, indicating that the item may exist, whereas the second command displays "0", indicating that the item certainly may not exist.'),Object(n.b)("h4",{id:"add-one-or-more-items-to-the-bloom-filter"},"Add one or more items to the Bloom filter"),Object(n.b)("p",null,"Use the BF.MADD command to add one or more items to the Bloom filter, creating the filter if it does not yet exist. This command operates identically to BF.ADD, except it allows multiple inputs and returns multiple values:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),">> BF.MADD unique_visitors 10.94.214.100 10.94.214.200 10.94.214.210 10.94.214.212\n1) (integer) 1\n2) (integer) 1\n3) (integer) 1\n4) (integer) 1\n")),Object(n.b)("p",null,"As shown above, the BF.MADD allows you to add one or more visitors\u2019 IP addresses to the Bloom filter."),Object(n.b)("h4",{id:"determine-whether-or-not-a-unique-visitors-ip-address-exists"},"Determine whether or not a unique visitor\u2019s IP address exists"),Object(n.b)("p",null,"Use BF.MEXISTS to determine if one or more items may exist in the filter or not:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),">> BF.MEXISTS unique_visitors 10.94.214.200 10.94.214.212\n1) (integer) 1\n2) (integer) 1\n")),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{})," >> BF.MEXISTS unique_visitors 10.94.214.200 10.94.214.213\n1) (integer) 1\n2) (integer) 0\n")),Object(n.b)("p",null,'In the above example, the first command shows the result as \u201c1\u201d for both the visitors\u2019 IP addresses, indicating that these items do exist. The second command displays "0" for one of the visitor\u2019s IP addresses, indicating that the item certainly does not exist.'),Object(n.b)("h3",{id:"next-step"},"Next Step"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Learn more about RedisBloom in the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisbloom/Quick_Start/"}),"Quick Start")," tutorial.")))}d.isMDXComponent=!0},139:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return p}));var r=o(0),i=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(o),u=r,p=m["".concat(a,".").concat(u)]||m[u]||b[u]||n;return o?i.a.createElement(p,s(s({ref:t},c),{},{components:o})):i.a.createElement(p,s({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,a=new Array(n);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<n;c++)a[c]=o[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},247:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/redisbloom1-b44744e302a6aaf7c455dbcffee3b325.png"},248:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/redisbloom-576e1ed5d6ed83aa38fb92fcd93614c2.png"}}]);
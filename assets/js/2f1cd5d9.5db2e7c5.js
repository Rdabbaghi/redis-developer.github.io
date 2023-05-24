"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,s={unversionedId:"howtos/solutions/real-time-inventory/available-to-promise/api/increment-sku",id:"howtos/solutions/real-time-inventory/available-to-promise/api/increment-sku",title:"increment-sku",description:"The code that follows shows an example API request and response for incrementSKU activity.",source:"@site/docs/howtos/solutions/real-time-inventory/available-to-promise/api/increment-sku.mdx",sourceDirName:"howtos/solutions/real-time-inventory/available-to-promise/api",slug:"/howtos/solutions/real-time-inventory/available-to-promise/api/increment-sku",permalink:"/howtos/solutions/real-time-inventory/available-to-promise/api/increment-sku",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/solutions/real-time-inventory/available-to-promise/api/increment-sku.mdx",tags:[],version:"current",lastUpdatedAt:1684462271,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The code that follows shows an example API request and response for incrementSKU activity."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"incrementSKU API Request")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'POST http://localhost:3000/api/incrementSKU\n{\n    "sku":1019688,\n    "quantity":2\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"incrementSKU API Response")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "sku": 1019688,\n    "name": "5-Year Protection Plan - Geek Squad",\n    "type": "BlackTie",\n    "totalQuantity": 12 //previous value 10\n  },\n  "error": null\n}\n')),(0,o.kt)("p",null,"When you make a request, it goes through the API gateway to the inventory service. Ultimately, it ends up calling a ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementSKU")," function which looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/inventory-service.ts"',title:'"src/inventory-service.ts"'},"static async incrementSKU(_productId: number, _incrQuantity: number, _isDecrement: boolean, _isReturnProduct: boolean): Promise<IProduct> {\n        /**\n        increment quantity of a Product.\n\n        :param _productId: Product Id\n        :param _incrQuantity: new increment quantity\n        :return: Product with Quantity\n        */\n\n        const redisOmClient = getRedisOmClient();\n        let retItem: IProduct = {};\n\n        if (!_incrQuantity) {\n            _incrQuantity = 1;\n        }\n        if (_isDecrement) {\n            _incrQuantity = _incrQuantity * -1;\n        }\n        if (redisOmClient && _productId && _incrQuantity) {\n\n            const updateKey = `${ProductRepo.PRODUCT_KEY_PREFIX}:${_productId}`;\n\n            //increment json number field by specific (positive/ negative) value\n            await redisOmClient.redis?.json.numIncrBy(updateKey, '$.totalQuantity', _incrQuantity);\n\n            if (_isReturnProduct) {\n                retItem = await InventoryServiceCls.retrieveSKU(_productId);\n            }\n\n        }\n        else {\n            throw `Input params failed !`;\n        }\n\n        return retItem;\n    }\n")))}p.isMDXComponent=!0}}]);
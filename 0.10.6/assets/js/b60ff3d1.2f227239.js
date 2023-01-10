"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},s="Postgres",i={unversionedId:"re_cloud/integrations/postgres",id:"re_cloud/integrations/postgres",title:"Postgres",description:"Overview",source:"@site/docs/re_cloud/integrations/postgres.md",sourceDirName:"re_cloud/integrations",slug:"/re_cloud/integrations/postgres",permalink:"/0.10.6/docs/re_cloud/integrations/postgres",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_cloud/integrations/postgres.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pandas-profiling",permalink:"/0.10.6/docs/re_cloud/integrations/pandas_profiling"},next:{title:"re_data",permalink:"/0.10.6/docs/re_cloud/integrations/re_data"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Postgres specific support",id:"postgres-specific-support",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postgres"},"Postgres"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"re_cloud can you you track anomalies, schema changes and failed data tests in your Postgres tables.\nAll of this can be done through re_data library which supports Postgres."),(0,o.kt)("p",null,"You can check on how monitoring re_data information looks on Postgres ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.getre.io/ui-latest/#/alerts"},"here"))),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Best way to start using re_data is to check out our quicksart tutorials. Either for users using dbt or the ones who are just using data warehouse:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/re_data/getting_started/installation/for_dbt_users"},"Quickstart - dbt users"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/re_data/getting_started/installation/new_to_dbt"},"Quickstart - new to dbt")))),(0,o.kt)("h2",{id:"postgres-specific-support"},"Postgres specific support"),(0,o.kt)("p",null,"If you have things you would like to monitor specifically for Postgres let us know on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a")),". We are looking into adding more feaures for Postgres in the future."))}u.isMDXComponent=!0}}]);
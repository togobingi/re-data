"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6656],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),l=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(o),m=n,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return o?r.createElement(f,i(i({ref:t},s),{},{components:o})):r.createElement(f,i({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3372:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const a={},i="dbt docs",c={unversionedId:"re_cloud/integrations/dbt_docs",id:"re_cloud/integrations/dbt_docs",title:"dbt docs",description:"Overview",source:"@site/docs/re_cloud/integrations/dbt_docs.md",sourceDirName:"re_cloud/integrations",slug:"/re_cloud/integrations/dbt_docs",permalink:"/master/docs/re_cloud/integrations/dbt_docs",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_cloud/integrations/dbt_docs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom HTML",permalink:"/master/docs/re_cloud/integrations/custom_html"},next:{title:"great-expectations",permalink:"/master/docs/re_cloud/integrations/great_expectations"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Uploading to re_cloud",id:"uploading-to-re_cloud",level:2},{value:"re_cloud command",id:"re_cloud-command",level:2},{value:"Next steps",id:"next-steps",level:2}],s={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dbt-docs"},"dbt docs"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Dbt docs help you share documentation about your data with your team and other shareholderes in the company."),(0,n.kt)("p",null,"You can generate dbt docs from your dbt project. Dbt allows you also to add descriptions to each of the tables, columns, macros."),(0,n.kt)("p",null,"Below example of how generated documentation looks like:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dbt_docs_example",src:o(5783).Z,width:"1912",height:"937"})),(0,n.kt)("p",null,"More information on generating dbt docs is available on ",(0,n.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/docs/building-a-dbt-project/documentation"},"dbt pages")),(0,n.kt)("h2",{id:"uploading-to-re_cloud"},"Uploading to re_cloud"),(0,n.kt)("p",null,"In order to effectively work with dbt docs it's crucial to share it with other people in the company.\nre_cloud makes it super easy. The simplest way to do it is to run commands below in your dbt project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dbt docs generate\nre_cloud upload dbt-docs\n")),(0,n.kt)("h2",{id:"re_cloud-command"},"re_cloud command"),(0,n.kt)("p",null,"Below we show all the currently supported options on how you can upload dbt-docs to ",(0,n.kt)("inlineCode",{parentName:"p"},"re_cloud")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_cloud upload dbt-docs --name TEXT --project-dir TEXT\n\nOptions:\n  --project-dir TEXT  Which directory to look in for the dbt_project.yml file.\n                      Default is the current working directory and its parents\n  --name TEXT         Name of the upload used for identification\n")),(0,n.kt)("p",null,"You don't need to pass project-dir paramter if calling this command from witin dbt main directory. Otherwise pass ",(0,n.kt)("inlineCode",{parentName:"p"},"project-dir")," to upload generated docs from this directory."),(0,n.kt)("h2",{id:"next-steps"},"Next steps"),(0,n.kt)("p",null,"If you would like to jump into uploading data you can create your ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://cloud.getre.io/#/register"},"free account here \ud83d\ude0a"))," if you have more questions for us: don't be reluctant to join our ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))))}u.isMDXComponent=!0},5783:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/dbt_docs-c05c3e353722d4d7169a1a309956bf80.png"}}]);
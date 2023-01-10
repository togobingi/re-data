"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[394],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8704:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:0},l="Overview",s={unversionedId:"reference/cli/overview",id:"reference/cli/overview",isDocsHomePage:!1,title:"Overview",description:"re_data overview cli command is used to generate & serve observability UI.",source:"@site/docs/reference/cli/overview.md",sourceDirName:"reference/cli",slug:"/reference/cli/overview",permalink:"/feature-slack-notifications/docs/reference/cli/overview",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/cli/overview.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/feature-slack-notifications/docs/reference/data_monitoring/tests"},next:{title:"Run",permalink:"/feature-slack-notifications/docs/reference/cli/run"}},u=[{value:"generate",id:"generate",children:[]},{value:"serve",id:"serve",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"re_data overview")," cli command is used to generate & serve observability UI. "),(0,o.kt)("h3",{id:"generate"},"generate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"re_data overview generate --start-date 2021-01-01 --end-date 2021-01-30 --interval days:1\n")),(0,o.kt)("p",null,"Generates overview as HTML and JSON files and saves them in ",(0,o.kt)("inlineCode",{parentName:"p"},"target/re_data")," folder of your dbt project. "),(0,o.kt)("p",null,"Supported argments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"start-date (",(0,o.kt)("em",{parentName:"li"},"default: today - 7 days"),") - start date of period for which you generate overview"),(0,o.kt)("li",{parentName:"ul"},"end-date (",(0,o.kt)("em",{parentName:"li"},"default: today"),") - end date of period for which you generate overview"),(0,o.kt)("li",{parentName:"ul"},"interval (",(0,o.kt)("em",{parentName:"li"},"default: days:1"),") - basic time grain for the overview, supported values - ",(0,o.kt)("em",{parentName:"li"},"days"),", ",(0,o.kt)("em",{parentName:"li"},"hours"),", example: ",(0,o.kt)("strong",{parentName:"li"},"days:7"),", ",(0,o.kt)("strong",{parentName:"li"},"hours:1"),".")),(0,o.kt)("p",null,"For this command to generate HTLL/JSON with data, you need to have already re_data models for chosen dates/intervals in your data warehouse. ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data run")," command or just bare ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt run")," for re_data package (can be called in your dbt Cloud env) are command to use for that."),(0,o.kt)("h3",{id:"serve"},"serve"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"re_data overview serve\n")),(0,o.kt)("p",null,"Starts simple python server that serves HTML/JSON files generated & opens your browser \ud83d\ude0a"))}p.isMDXComponent=!0}}]);
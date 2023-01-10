"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[799],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3539:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:1},l="Run",u={unversionedId:"reference/cli/run",id:"reference/cli/run",isDocsHomePage:!1,title:"Run",description:"redata run CLI command is a helper command for computing & backfilling redata observability data.",source:"@site/docs/reference/cli/run.md",sourceDirName:"reference/cli",slug:"/reference/cli/run",permalink:"/re-data/feature-react-app/docs/reference/cli/run",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/cli/run.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/re-data/feature-react-app/docs/reference/cli/overview"},next:{title:"Data Cleaning",permalink:"/re-data/feature-react-app/docs/reference/data_preparation/data_cleaning"}},p=[{value:"run",id:"run-1",children:[]}],d={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run"},"Run"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"re_data run")," CLI command is a helper command for computing & backfilling re_data observability data."),(0,i.kt)("h3",{id:"run-1"},"run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"re_data run --start-date 2021-01-01 --end-date 2021-01-30 --interval days:1\n")),(0,i.kt)("p",null,"Running this command will create/fill re_data specific models with observability data."),(0,i.kt)("p",null,"Supported argments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"start-date (",(0,i.kt)("em",{parentName:"li"},"default: today - 7 days"),") - start date of period for which you generate data"),(0,i.kt)("li",{parentName:"ul"},"end-date (",(0,i.kt)("em",{parentName:"li"},"default: today"),") - end date of period for which you generate data"),(0,i.kt)("li",{parentName:"ul"},"interval (",(0,i.kt)("em",{parentName:"li"},"default: days:1"),") - basic time grain for the overview, supported values - ",(0,i.kt)("em",{parentName:"li"},"days"),", ",(0,i.kt)("em",{parentName:"li"},"hours"),", example: ",(0,i.kt)("strong",{parentName:"li"},"days:7"),", ",(0,i.kt)("strong",{parentName:"li"},"hours:1"),".")))}s.isMDXComponent=!0}}]);
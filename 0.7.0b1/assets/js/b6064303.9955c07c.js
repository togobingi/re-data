"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[394],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},178:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:1},u="Overview",p={unversionedId:"reference/cli/overview",id:"reference/cli/overview",title:"Overview",description:"re_data overview cli command is used to generate & serve reliability UI.",source:"@site/docs/reference/cli/overview.md",sourceDirName:"reference/cli",slug:"/reference/cli/overview",permalink:"/0.7.0b1/docs/reference/cli/overview",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/cli/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Init",permalink:"/0.7.0b1/docs/reference/cli/init"},next:{title:"Run",permalink:"/0.7.0b1/docs/reference/cli/run"}},c={},d=[{value:"generate",id:"generate",level:3},{value:"serve",id:"serve",level:3}],s={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"re_data overview")," cli command is used to generate & serve reliability UI. "),(0,i.kt)("h3",{id:"generate"},"generate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"re_data overview generate --start-date 2021-01-01 --end-date 2021-01-30 --interval days:1\n")),(0,i.kt)("p",null,"Generates overview as HTML and JSON files and saves by default in the target folder specified in the dbt project. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Supported arguments:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"start-date (",(0,i.kt)("em",{parentName:"li"},"default: today - 7 days"),") - start date of period for which you generate overview"),(0,i.kt)("li",{parentName:"ul"},"end-date (",(0,i.kt)("em",{parentName:"li"},"default: today"),") - end date of period for which you generate overview"),(0,i.kt)("li",{parentName:"ul"},"interval (",(0,i.kt)("em",{parentName:"li"},"default: days:1"),") - basic time grain for the overview, supported values - ",(0,i.kt)("em",{parentName:"li"},"days"),", ",(0,i.kt)("em",{parentName:"li"},"hours"),", example: ",(0,i.kt)("strong",{parentName:"li"},"days:7"),", ",(0,i.kt)("strong",{parentName:"li"},"hours:1"),"."),(0,i.kt)("li",{parentName:"ul"},"re-data-target-dir - directory to store artefacts generated by re_data. Defaults to the 'target-path' used in dbt_project.yml."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dbt supported arguments:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"profile - Which profile to load. Overrides setting in dbt_project.yml."),(0,i.kt)("li",{parentName:"ul"},"target - Which target to load for the given profile."),(0,i.kt)("li",{parentName:"ul"},"project-dir - Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents."),(0,i.kt)("li",{parentName:"ul"},"profiles-dir - Which directory to look in for the profiles.yml file. Default = ~/.dbt.")))),(0,i.kt)("p",null,"For this command to generate HTML/JSON with data, you need to have already re_data models for chosen dates/intervals in your data warehouse. ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data run")," command or just bare ",(0,i.kt)("inlineCode",{parentName:"p"},"dbt run")," for re_data package (can be called in your dbt Cloud env) are command to use for that."),(0,i.kt)("h3",{id:"serve"},"serve"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"re_data overview serve\n")),(0,i.kt)("p",null,"Starts simple python server that serves HTML/JSON files generated & opens your browser \ud83d\ude0a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supported arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"port - Specify the port number for the UI server. Default is 8085."),(0,i.kt)("li",{parentName:"ul"},"re-data-target-dir - directory serve files generated by re_data. Defaults to the 'target-path' used in dbt_project.yml."))),(0,i.kt)("li",{parentName:"ul"},"Dbt supported arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"project-dir - Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents.")))))}f.isMDXComponent=!0}}]);
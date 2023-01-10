"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[662],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9218:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:3},s="Notify",c={unversionedId:"reference/cli/notify",id:"reference/cli/notify",title:"Notify",description:"redata notify command is used to send notifications relating to redata alerts.",source:"@site/docs/reference/cli/notify.md",sourceDirName:"reference/cli",slug:"/reference/cli/notify",permalink:"/0.9.1/docs/reference/cli/notify",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/cli/notify.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/0.9.1/docs/reference/cli/run"},next:{title:"Overview",permalink:"/0.9.1/docs/reference/metrics/overview_metric"}},d={},u=[{value:"slack",id:"slack",level:3},{value:"email",id:"email",level:3}],p={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"notify"},"Notify"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"re_data notify")," command is used to send notifications relating to re_data alerts."),(0,i.kt)("h3",{id:"slack"},"slack"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'re_data notify slack \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--webhook-url https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \\\n--subtitle="[Optional] Markdown text to be added as a subtitle in the slack message generated" \\\n--select anomaly \\\n--select test \\\n--select schema_change\n')),(0,i.kt)("p",null,"Running this command would generate a slack message from the alerts re_data detected."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supported arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"start-date (default: today - 7 days) - start date of the period for which you want to generate alerts"),(0,i.kt)("li",{parentName:"ul"},"end-date (default: today) - end date of the period for which you want to generate alerts"),(0,i.kt)("li",{parentName:"ul"},"webhook-url - ",(0,i.kt)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks"},"incoming webhook")," gotten from a slack app."),(0,i.kt)("li",{parentName:"ul"},"subtitle (optional) - extra markdown text passed to the generated message. Often used to add some more context to the message generated."),(0,i.kt)("li",{parentName:"ul"},"dbt-vars - This accepts a valid YAML dictionary as string which is passed down to the dbt command using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/using-variables"},"--vars"),"."),(0,i.kt)("li",{parentName:"ul"},"select - (default: anomaly, schema_change, test) - alert type to be included in the notifications. This option allows multiple values and must be a valid alert type."))),(0,i.kt)("li",{parentName:"ul"},"Dbt supported arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"profile - Which profile to load. Overrides setting in dbt_project.yml."),(0,i.kt)("li",{parentName:"ul"},"target - Which target to load for the given profile."),(0,i.kt)("li",{parentName:"ul"},"project-dir - Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents."),(0,i.kt)("li",{parentName:"ul"},"profiles-dir - Which directory to look in for the profiles.yml file. Default = ~/.dbt.")))),(0,i.kt)("h3",{id:"email"},"email"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"re_data notify email \\\n--start-date 2021-01-01 \\\n--end-date 2021-01-31 \\\n--select anomaly \\\n--select test \\\n--select schema_change\n")),(0,i.kt)("p",null,"Running this command would generate a slack message from the alerts re_data detected."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supported arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"start-date (default: today - 7 days) - start date of the period for which you want to generate alerts"),(0,i.kt)("li",{parentName:"ul"},"end-date (default: today) - end date of the period for which you want to generate alerts"),(0,i.kt)("li",{parentName:"ul"},"select - (default: anomaly, schema_change, test) - alert type to be included in the notifications. This option allows multiple values and must be a valid alert type."),(0,i.kt)("li",{parentName:"ul"},"dbt-vars - This accepts a valid YAML dictionary as string which is passed down to the dbt command using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/using-variables"},"--vars"),"."))),(0,i.kt)("li",{parentName:"ul"},"Dbt supported arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"profile - Which profile to load. Overrides setting in dbt_project.yml."),(0,i.kt)("li",{parentName:"ul"},"target - Which target to load for the given profile."),(0,i.kt)("li",{parentName:"ul"},"project-dir - Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents."),(0,i.kt)("li",{parentName:"ul"},"profiles-dir - Which directory to look in for the profiles.yml file. Default = ~/.dbt.")))))}m.isMDXComponent=!0}}]);
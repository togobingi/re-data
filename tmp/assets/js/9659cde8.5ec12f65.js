"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[116],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8651:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:5},l="Q&A \ud83d\udcac",u={unversionedId:"re_data/qa",id:"re_data/qa",title:"Q&A \ud83d\udcac",description:"How do I run re_data?",source:"@site/docs/re_data/qa.md",sourceDirName:"re_data",slug:"/re_data/qa",permalink:"/tmp/docs/re_data/qa",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/qa.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Anonymous data collection",permalink:"/tmp/docs/re_data/reference/anonymous_usage"},next:{title:"What is re_cloud?",permalink:"/tmp/docs/re_cloud/Introduction/whatis_cloud"}},p={},c=[{value:"How do I run re_data?",id:"how-do-i-run-re_data",level:3},{value:"What are common examples of &quot;bad data&quot;?",id:"what-are-common-examples-of-bad-data",level:3},{value:"Other questions?",id:"other-questions",level:4}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"qa-"},"Q&A \ud83d\udcac"),(0,o.kt)("h3",{id:"how-do-i-run-re_data"},"How do I run re_data?"),(0,o.kt)("p",null,"re_data doesn't have any internal scheduler and it's leaving the operation of regularly computing metrics for you to set up. We believe it's best to use existing scheduling tools your company has and we are not trying to build a new one. "),(0,o.kt)("p",null,"As re_data is a dbt package, you can (and we have installations of that) run re_data using just dbt cloud & set up jobs for computing metrics there. But definitely other methods like running it in Airflow dag are also possible."),(0,o.kt)("h3",{id:"what-are-common-examples-of-bad-data"},'What are common examples of "bad data"?'),(0,o.kt)("p",null,'Here is are a couple of problems we call "bad data":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Data is incomplete (or sometimes just empty)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Think about your data missing an important source which other team stopped a week ago"),(0,o.kt)("li",{parentName:"ul"},"is based on 1000, not 100000 rows which normally come from the source"),(0,o.kt)("li",{parentName:"ul"},"is just still empty for an important board meeting..."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Data is based on erroneous assumptions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For example, you assumed there will be no ",(0,o.kt)("inlineCode",{parentName:"li"},"nulls")," in the table or from another side ",(0,o.kt)("inlineCode",{parentName:"li"},"nulls")," were supposed to be there and suddenly ",(0,o.kt)("inlineCode",{parentName:"li"},"zeroes")," appear instead breaking averages computed by reports."),(0,o.kt)("li",{parentName:"ul"},"Records in this table were not supposed to have any duplicate names, IDs, etc...")))),(0,o.kt)("h4",{id:"other-questions"},"Other questions?"),(0,o.kt)("p",null,"Have more questions? Ask as on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://www.getre.io/slack"},"Slack! \ud83d\ude0a"))," (we are very responsive there)"))}m.isMDXComponent=!0}}]);
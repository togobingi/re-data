"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[484],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),s=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,u=p["".concat(m,".").concat(f)]||p[f]||d[f]||i;return t?n.createElement(u,o(o({ref:a},c),{},{components:t})):n.createElement(u,o({ref:a},c))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8581:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:4},m="Data Preparation",s={unversionedId:"getting_started/example_project/data_preparation",id:"getting_started/example_project/data_preparation",isDocsHomePage:!1,title:"Data Preparation",description:"redata provides useful macros for performing data preparation tasks like cleaning, normalizing, filtering and validating. In the example shown below, common data preparation tasks are shown.",source:"@site/docs/getting_started/example_project/data_preparation.md",sourceDirName:"getting_started/example_project",slug:"/getting_started/example_project/data_preparation",permalink:"/re-data/feature-adjust-docs/docs/getting_started/example_project/data_preparation",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project/data_preparation.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Checking for schema changes",permalink:"/re-data/feature-adjust-docs/docs/getting_started/example_project/data_monitoring/checking_for_schema_changes"},next:{title:"Data Cleaning",permalink:"/re-data/feature-adjust-docs/docs/reference/data_preparation/data_cleaning"}},c=[],d={toc:c};function p(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-preparation"},"Data Preparation"),(0,i.kt)("p",null,"re_data provides useful macros for performing data preparation tasks like ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/data_preparation/data_cleaning"},"cleaning"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/data_preparation/data_normalization"},"normalizing"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/data_preparation/data_filtering"},"filtering")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/data_preparation/data_validation"},"validating"),". In the example shown below, common data preparation tasks are shown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="user_data preview"',title:'"user_data','preview"':!0},"=> select * from toy_shop.user_data;\n\n        full_name        |             email              |   state   |     created_at      \n-------------------------+--------------------------------+-----------+---------------------\n lizzie effertz          | torp.trisha@fakemail.com       | Arizona   | 2020-01-31 11:51:00\n orlando abbott          | dayton.hermiston@fakemail.com  | IN        | 2020-01-31 11:50:00\n kelley     harann       | borer.blake@fakemail.com       | WV        | 2020-01-31 11:49:00\n ruth   langworth        | garett66@fakemail.com          | MN        | 2020-01-31 11:48:00\n lane swift              | nienow.coralie@fakemail.com    | IN        | 2020-01-31 11:47:00\n bertha corwin           | tstroman@fakemail.com          | WV        | 2020-01-31 11:46:00\n manuela   kling         | shawn.langworth@fakemail.com   | MN        | 2020-01-31 11:45:00\n mose balistreri         | dorris70@fakemail.com          | NY        | 2020-01-31 11:44:00\n robin    halvorson      | murazik.americo@fakemail.com   | IN        | 2020-01-31 11:43:00\n osbaldo parker i        | friesen.angeline@fakemail.com  | WV        | 2020-01-31 11:42:00\n javier runolfsson       | benjamin.bailey@fakemail.net   | Minnesota | 2020-01-31 11:41:00\n amelia batz             | garrison60@fakemail.com        | IN        | 2020-01-31 11:40:00\n abby  pouros            | dominique.leannon@fakemail.com | WV        | 2020-01-31 11:39:00\n markus homenick         | piper73@fakemail.com           | New York  | 2020-01-31 11:38:00\n braeden turner          | kozey.jace@fakemail.com        | IN        | 2020-01-31 11:37:00\n horacio   parker        | vtillman@fakemail.info         | WV        | 2020-01-31 11:36:00\n ms. stacy       padberg | erdman.elaina@fakemail.com     | MN        | 2020-01-31 11:35:00\n dr.     deshawn stracke | rosendo.beer@fakemail.com      | IN        | 2020-01-31 11:34:00\n pascale grady           | princess60@fakemail.com        | WV        | 2020-01-31 11:33:00\n lacy     brekke         | romaguera.darrell@fakemail.com | AZ        | 2020-01-31 11:32:00\n")),(0,i.kt)("p",null,"First we start by filtering out the duplicated based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," column.\nYou will notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"full_name")," column above has additional whitespaces between words, we can strip those additional whitespaces and capitalize the words."),(0,i.kt)("p",null,"For further analysis, we would like to have the full state name as a separate column, re_data allows you to pass dictionary mapping of source and target values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="toy_shop/models/sanitized_user_data.sql"',title:'"toy_shop/models/sanitized_user_data.sql"'},"{% set states_mapping = {'AZ': 'Arizona', 'IN': 'Indiana', 'WV': 'West Virginia', 'MN': 'Minnesota', 'NY': 'New York'}%}\n\nwith deduplicated as (\n    select * from {{ re_data.filter_remove_duplicates(ref('user_data'), ['email'], ['created_at DESC']) }} as dedup\n), \ncleaned as (\n    select\n        *,\n        {{ re_data.clean_capitalize_words(re_data.clean_additional_whitespaces('full_name')) }} as formatted_full_name,\n        {{ re_data.clean_blacklist('email', ['^[a-zA-Z0-9_.+-]+'], '*****') }} as redacted_email,\n        {{ re_data.valid_email('email') }} is_valid_email\n    from deduplicated \n)\n\nselect\n    *\nfrom {{ re_data.normalize_values('cleaned', 'state', states_mapping) }} u\n")),(0,i.kt)("p",null,"Let's run the ",(0,i.kt)("inlineCode",{parentName:"p"},"sanitized_user_data")," model and view the results."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dbt run --models sanitized_user_data\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"=> select * from toy_shop.sanitized_user_data;\n\n        full_name        |             email              |   state   |     created_at      | formatted_full_name |   redacted_email    | is_valid_email | state__normalized \n-------------------------+--------------------------------+-----------+---------------------+---------------------+---------------------+----------------+-------------------\n lacy     brekke         | romaguera.darrell@fakemail.com | AZ        | 2020-01-31 11:32:00 | Lacy Brekke         | *****@fakemail.com  | t              | Arizona\n dr.     deshawn stracke | rosendo.beer@fakemail.com      | IN        | 2020-01-31 11:34:00 | Dr. Deshawn Stracke | *****@fakemail.com  | t              | Indiana\n lane swift              | nienow.coralie@fakemail.com    | IN        | 2020-01-31 11:47:00 | Lane Swift          | *****@fakemail.com  | t              | Indiana\n robin    halvorson      | murazik.americo@fakemail.com   | IN        | 2020-01-31 11:43:00 | Robin Halvorson     | *****@fakemail.com  | t              | Indiana\n braeden turner          | kozey.jace@fakemail.com        | IN        | 2020-01-31 11:37:00 | Braeden Turner      | *****@fakemail.com  | t              | Indiana\n amelia batz             | garrison60@fakemail.com        | IN        | 2020-01-31 11:40:00 | Amelia Batz         | *****@fakemail.com  | t              | Indiana\n orlando abbott          | dayton.hermiston@fakemail.com  | IN        | 2020-01-31 11:50:00 | Orlando Abbott      | *****@fakemail.com  | t              | Indiana\n horacio   parker        | vtillman@fakemail.info         | WV        | 2020-01-31 11:36:00 | Horacio Parker      | *****@fakemail.info | t              | West Virginia\n bertha corwin           | tstroman@fakemail.com          | WV        | 2020-01-31 11:46:00 | Bertha Corwin       | *****@fakemail.com  | t              | West Virginia\n pascale grady           | princess60@fakemail.com        | WV        | 2020-01-31 11:33:00 | Pascale Grady       | *****@fakemail.com  | t              | West Virginia\n osbaldo parker i        | friesen.angeline@fakemail.com  | WV        | 2020-01-31 11:42:00 | Osbaldo Parker I    | *****@fakemail.com  | t              | West Virginia\n abby  pouros            | dominique.leannon@fakemail.com | WV        | 2020-01-31 11:39:00 | Abby Pouros         | *****@fakemail.com  | t              | West Virginia\n kelley     harann       | borer.blake@fakemail.com       | WV        | 2020-01-31 11:49:00 | Kelley Harann       | *****@fakemail.com  | t              | West Virginia\n manuela   kling         | shawn.langworth@fakemail.com   | MN        | 2020-01-31 11:45:00 | Manuela Kling       | *****@fakemail.com  | t              | Minnesota\n ruth   langworth        | garett66@fakemail.com          | MN        | 2020-01-31 11:48:00 | Ruth Langworth      | *****@fakemail.com  | t              | Minnesota\n ms. stacy       padberg | erdman.elaina@fakemail.com     | MN        | 2020-01-31 11:35:00 | Ms. Stacy Padberg   | *****@fakemail.com  | t              | Minnesota\n mose balistreri         | dorris70@fakemail.com          | NY        | 2020-01-31 11:44:00 | Mose Balistreri     | *****@fakemail.com  | t              | New York\n javier runolfsson       | benjamin.bailey@fakemail.net   | Minnesota | 2020-01-31 11:41:00 | Javier Runolfsson   | *****@fakemail.net  | t              | Minnesota\n markus homenick         | piper73@fakemail.com           | New York  | 2020-01-31 11:38:00 | Markus Homenick     | *****@fakemail.com  | t              | New York\n lizzie effertz          | torp.trisha@fakemail.com       | Arizona   | 2020-01-31 11:51:00 | Lizzie Effertz      | *****@fakemail.com  | t              | Arizona\n")))}p.isMDXComponent=!0}}]);
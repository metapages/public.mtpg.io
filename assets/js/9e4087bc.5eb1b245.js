"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[3608],{1120:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});a(959);var r=a(9290),n=a(2778),s=a(3410),i=a(6194),c=a(8294),l=a(7778),o=a(1527);function d(e){let{year:t,posts:a}=e;const n=(0,i.P)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.Z,{as:"h3",id:t,children:t}),(0,o.jsx)("ul",{children:a.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(r.Z,{to:e.metadata.permalink,children:[(t=e.metadata.date,n.format(new Date(t)))," - ",e.metadata.title]})},e.metadata.date);var t}))})]})}function h(e){let{years:t}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},t)))})})})}function m(e){let{archive:t}=e;const a=(0,n.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,n.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const t=e.reduce(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{title:a,description:r}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.Z,{as:"h1",className:"hero__title",children:a}),(0,o.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,o.jsx)("main",{children:i.length>0&&(0,o.jsx)(h,{years:i})})]})]})}},6194:(e,t,a)=>{a.d(t,{P:()=>n});var r=a(5913);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,r.Z)(),a=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,r.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:a,...e})}}}]);
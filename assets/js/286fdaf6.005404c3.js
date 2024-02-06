"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[9583],{8980:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=s(1527),t=s(3703);const o={title:"The problems and friction of sharing data science, visualizations, and workflows between collaborating scientists and engineers",sidebar_position:13,slug:"/problems-sharing-visualizations-workflows"},a="Google Colab {#844cc95c64b34b0a8c264f2a7bb356aa}",r={permalink:"/blog/problems-sharing-visualizations-workflows",source:"@site/blog/problems-sharing-visualizations-workflows.mdx",title:"The problems and friction of sharing data science, visualizations, and workflows between collaborating scientists and engineers",description:"---",date:"2024-02-06T19:33:19.210Z",formattedDate:"February 6, 2024",tags:[],readingTime:1.73,hasTruncateMarker:!1,authors:[],frontMatter:{title:"The problems and friction of sharing data science, visualizations, and workflows between collaborating scientists and engineers",sidebar_position:13,slug:"/problems-sharing-visualizations-workflows"},unlisted:!1,nextItem:{title:"Connect compute to my tasks- it\u2019s too complicated",permalink:"/blog/cloud-compute-too-complicated"}},c={authorsImageUrls:[]},l=[{value:"Links to resources and internal resources",id:"7357889d4fd44cd8ba2270e2cc84006a",level:3},{value:"Interactivity",id:"cc1ab32c6f8249bc84a254df94484108",level:3},{value:"Files/Storage",id:"159abe32bc3740cc927b4525e8dcbf36",level:3},{value:"Javascript (UI interaction, visualizations)",id:"6a798e9112994494b11bdc1a4b7e9a80",level:3},{value:"Secrets",id:"a88c89af178a47f4bae066cb9ae700f5",level:3},{value:"Minimal example",id:"2d20a91b67514181aedd8b52dc58a7f8",level:3},{value:"Connecting Google Resources is cumbersome and relatively bespoke",id:"d0e2dff36ebe4acfac7fd3a833225814",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"I am collaborating with a scientist on my team. It\u2019s a combination of visualization tools, machine learning models, python, maybe javascript interaction. Let\u2019s say there is some ML model that will infer some properties of sets of genes that will help in a pipeline looking for target for lab experiments."}),"\n",(0,i.jsx)(n.p,{children:"What tool(s) will I use?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Google Colab"})," : ",(0,i.jsx)(n.a,{href:"https://colab.research.google.com/",children:"https://colab.research.google.com/"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://colab.research.google.com/",children:"https://colab.research.google.com/"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Python only"}),"\n",(0,i.jsxs)(n.li,{children:["Google Drive storage only","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You must stay within their ecosystem"}),"\n",(0,i.jsx)(n.li,{children:"Github for storing public notebooks"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Free access to GPUs"}),"\n",(0,i.jsx)(n.li,{children:"Access to good Google Cloud resources, but still a lot of manual ceremony to set up"}),"\n",(0,i.jsx)(n.li,{children:"Sharing via links"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"7357889d4fd44cd8ba2270e2cc84006a",children:"Links to resources and internal resources"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://colab.research.google.com/notebooks/intro.ipynb#scrollTo=C4HZx7Gndbrh&line=4&uniqifier=1",children:"https://colab.research.google.com/notebooks/intro.ipynb#scrollTo=C4HZx7Gndbrh&line=4&uniqifier=1"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Similar rudimentary ideas to metapages: hash parameters used to create links for specific f"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Limited notebook storage options:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9302).Z+"",width:"372",height:"372"})}),"\n",(0,i.jsx)(n.p,{children:"Linking from github:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(8283).Z+"",width:"1994",height:"504"})}),"\n",(0,i.jsx)(n.p,{children:"Not ideal to require a Chrome extension just to open notebooks"}),"\n",(0,i.jsx)(n.p,{children:"The github org/branch browser is pretty good though:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(7143).Z+"",width:"1784",height:"1228"})}),"\n",(0,i.jsx)(n.h3,{id:"cc1ab32c6f8249bc84a254df94484108",children:"Interactivity"}),"\n",(0,i.jsx)(n.p,{children:"An ugly limited python config to form"}),"\n",(0,i.jsx)(n.p,{children:"This is an issue with notebooks in general: bolting on"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9627).Z+"",width:"2746",height:"812"})}),"\n",(0,i.jsx)(n.p,{children:"They lend you a pretty substantial machine:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6638).Z+"",width:"656",height:"332"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This machine is running constantly:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Slow to start up (but sometimes fast because the infrastructure is good)"}),"\n",(0,i.jsx)(n.li,{children:"Constantly running, very wasteful"}),"\n",(0,i.jsx)(n.li,{children:"Overkill for simple operations"}),"\n",(0,i.jsxs)(n.li,{children:["No good story for getting data in and out except via regular python","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You are figuring out where to get and put your data yourself"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"159abe32bc3740cc927b4525e8dcbf36",children:"Files/Storage"}),"\n",(0,i.jsx)(n.p,{children:"Only Google Drive"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(7458).Z+"",width:"430",height:"326"})}),"\n",(0,i.jsx)(n.p,{children:"The data uses your Google Drive organization scoping and rules, which are complex and not designed with Jupyter notebooks in mind, it\u2019s simply bolted on"}),"\n",(0,i.jsx)(n.h3,{id:"6a798e9112994494b11bdc1a4b7e9a80",children:"Javascript (UI interaction, visualizations)"}),"\n",(0,i.jsx)(n.p,{children:"Running Javascript as well is complicated and technical spaghetti"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3386).Z+"",width:"1774",height:"432"})}),"\n",(0,i.jsx)(n.h3,{id:"a88c89af178a47f4bae066cb9ae700f5",children:"Secrets"}),"\n",(0,i.jsx)(n.p,{children:"Support for secrets, imported via Python:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3953).Z+"",width:"892",height:"724"})}),"\n",(0,i.jsx)(n.h3,{id:"2d20a91b67514181aedd8b52dc58a7f8",children:"Minimal example"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(8050).Z+"",width:"1460",height:"1392"})}),"\n",(0,i.jsx)(n.h3,{id:"d0e2dff36ebe4acfac7fd3a833225814",children:"Connecting Google Resources is cumbersome and relatively bespoke"}),"\n",(0,i.jsx)(n.p,{children:"No centralized management outside of the big and complex GCP console, and scoping users there is very complex"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(8645).Z+"",width:"1604",height:"692"})}),"\n",(0,i.jsx)(n.p,{children:"ENDSLIDE"}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9302:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/1008473552-48eece352f77bc45c02b634201806de2.png"},3953:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/1513567364-20a7398eb0240b5c1fee3e4633809664.png"},7143:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/1533300346-067e76a7d8107d869d71ae4e9944e98a.png"},8283:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/1950781061-ddf30f675d0e6536eb180d2e0dead613.png"},8050:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/1983033427-1ef8c081fa2d7db76bf7e7c3cc175262.png"},8645:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/2085522255-e6a6b21a9c44307264dc5642df7045ce.png"},7458:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/2124063072-4a6b75321b3fc560e3eb237635e45885.png"},9627:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/356653088-655d2a84ca397ca245abc8c3d8a28011.png"},3386:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/867923601-8dc76659645335163ac4a3b6f844dad0.png"},6638:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/90157327-781df1e36c0f0d105cfd87b59c44ad9a.png"},3703:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var i=s(959);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
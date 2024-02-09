"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[2728],{281:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(1527),a=s(3703);const o={title:"Embed metapages into your app",sidebar_position:0,slug:"/embed"},i=void 0,r={id:"Embed-and-Publish/embed",title:"Embed metapages into your app",description:"This page is meant for developers, with some coding knowledge, or those who build web apps/sites",source:"@site/docs/Embed-and-Publish/embed.mdx",sourceDirName:"Embed-and-Publish",slug:"/embed",permalink:"/docs/embed",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Embed metapages into your app",sidebar_position:0,slug:"/embed"},sidebar:"tutorialSidebar",previous:{title:"Create a metaframe",permalink:"/docs/create-metaframe"},next:{title:"Embed a metaframe in a react app",permalink:"/docs/embed-metaframe"}},m={},d=[{value:"<strong>Embed metapages in your site (links to code examples)</strong>",id:"4d58288979954add8d83b1f337c919b1",level:3},{value:"Links to code example",id:"0ba26708b1eb4296bab40fd139307271",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.mermaid,{value:'\nflowchart LR\n  embedmf["Embed a metaframe"]\n  embedmp["Embed metapages"]\n  embedmf --\x3e embedmp\n  click embedmf "/docs/embed-metaframe"\n  click embedmp "/docs/embed"\n  style embedmp fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n'}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This page is meant for developers, with some coding knowledge, or those who build web apps/sites"})}),"\n",(0,n.jsx)(t.h3,{id:"4d58288979954add8d83b1f337c919b1",children:(0,n.jsx)(t.strong,{children:"Embed metapages in your site (links to code examples)"})}),"\n",(0,n.jsx)(t.p,{children:"Embedding a metapage/frame means you get a complete, functional, already-deployed piece of software that takes a few lines of code to add to your own app."}),"\n",(0,n.jsx)(t.p,{children:"One way to think about embedding metapages is that each metaframe is a web component with inputs and outputs."}),"\n",(0,n.jsx)(t.p,{children:"You can wire them up together with the metapage library, or even stitch them together yourself in your own app, if that makes more sense for you use cases."}),"\n",(0,n.jsx)(t.p,{children:"Developer advantages:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Embed visual modules like the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/monaco-editor",children:"monaco code editor"})," with a few lines of code","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/monaco-editor",children:"monaco module"})," requires various complex and specific workarounds for various build tools (",(0,n.jsx)(t.a,{href:"https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md",children:"webpack"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/vitejs/vite/discussions/1791",children:"vite"}),", etc)"]}),"\n",(0,n.jsx)(t.li,{children:"The component is only loaded when shown to the user, so no assets are downloaded if the component is not used in your app"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.code,{children:"metaframes"})," in the ",(0,n.jsx)(t.code,{children:"metapage"})," are iframes, and communicate using the web standard ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",children:"postMessage"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["This means they are security isolated:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If there is malicious code in a metaframe, it is very difficult for it to interfere with your main app code, as the only way to access the parent (your app) is via the secured ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",children:"postMessage"})," system (metapages control who can send messages)"]}),"\n",(0,n.jsx)(t.li,{children:"The code running in metaframes"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)("div",{className:"custom-docunotion-row"}),"\n",(0,n.jsx)(t.p,{children:"A single metapage"}),"\n",(0,n.jsx)(t.p,{children:"Metapage plus editor"}),"\n",(0,n.jsx)(t.h3,{id:"0ba26708b1eb4296bab40fd139307271",children:"Links to code example"}),"\n",(0,n.jsx)(t.p,{children:"A single metaframe:"}),"\n",(0,n.jsx)(t.mermaid,{value:"flowchart TD\n    subgraph test [your-site.com]\n        direction LR\n        style js fill:#fff,stroke:#fff,stroke-width:2px\n        style metaframe fill:#fff,stroke:#32AEE4,stroke-width:2px\n        js[your javascript] <--\x3e |messages| metaframe[Single Metaframe]\n    end"}),"\n",(0,n.jsx)(t.p,{children:"A single metapage:"}),"\n",(0,n.jsx)(t.mermaid,{value:"flowchart LR\n    subgraph test [your-site.com]\n        direction TB\n\n        style js fill:#fff,stroke:#fff,stroke-width:2px\n        style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n        subgraph metapage [metapage]\n\n            mf1[metaframe 1] --\x3e mf2[metaframe 2]\n            mf2 --\x3e mf3[metaframe 3]\n            mf1 --\x3e mf3\n        end\n        js[ javascript] <--\x3e |messages| metapage\n    end"}),"\n",(0,n.jsx)(t.p,{children:"Metapage plus editor:"}),"\n",(0,n.jsx)(t.mermaid,{value:"flowchart LR\n    style metaframes fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style metapages fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n    style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n    subgraph test [your-site.com]\n        direction LR\n\n        subgraph gallery [gallery.metapage.io]\n            direction LR\n            metaframes[...metaframes]\n            metapages[...metapages]\n        end\n        subgraph metapage [metapage]\n\n            mf1[metaframe 1] --\x3e mf2[metaframe 2]\n            mf2 --\x3e mf3[metaframe 3]\n            mf1 --\x3e mf3\n        end\n\n        gallery --\x3e |add from gallery| metapage\n    end"})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3703:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var n=s(959);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
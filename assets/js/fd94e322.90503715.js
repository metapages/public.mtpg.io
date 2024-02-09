"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[2815],{5110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(1527),s=a(3703);const r={title:"Provide your site as a metaframe",sidebar_position:4,slug:"/your-app-metaframe"},i=void 0,o={id:"Embed-and-Publish/your-app-metaframe",title:"Provide your site as a metaframe",description:"Code example:",source:"@site/docs/Embed-and-Publish/your-app-metaframe.mdx",sourceDirName:"Embed-and-Publish",slug:"/your-app-metaframe",permalink:"/docs/your-app-metaframe",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Provide your site as a metaframe",sidebar_position:4,slug:"/your-app-metaframe"},sidebar:"tutorialSidebar",previous:{title:"Embed the metapage editor + library",permalink:"/docs/embed-metapage-library"},next:{title:"Guides",permalink:"/docs/guides"}},m={},d=[{value:"Code example:",id:"7c2ea8bb3309450c86a786d15eb9ff70",level:2},{value:"<strong>Integrated simply as a metaframe</strong>",id:"7031c036905d4a269e8153e277065cc7",level:2},{value:"<strong>Integrated as a metapage in a third-party site</strong>",id:"db61a26643494e09af22085ede82ad58",level:2},{value:"<strong>Integrated with a metapage @ app.metapage.io</strong>",id:"6dbd1cd44b2b4b7cad8a430d0afe18e2",level:2}];function f(e){const t={code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"7c2ea8bb3309450c86a786d15eb9ff70",children:"Code example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'\nimport { Metaframe } from "@metapages/metapage";\n\nconst metaframe = new Metaframe();\n\nmetaframe.onInputs((inputs :any) => {\n\t// inputs is an object, keys are input pipe names\n});\n\nmetaframe.onInput((inputKey :string, value:any) => {\n\t// inputs is an object, keys are input pipe names\n});\n\nmetaframe.setOutput("some-key", {some:"value"});\nmetaframe.setOutputs({key:"value"});\n\n'})}),"\n",(0,n.jsx)(t.p,{children:"Basically: create the metaframe object, and listen to inputs, send outputs."}),"\n",(0,n.jsx)(t.p,{children:"Examples of how your site can be connected to others"}),"\n",(0,n.jsx)(t.h2,{id:"7031c036905d4a269e8153e277065cc7",children:(0,n.jsx)(t.strong,{children:"Integrated simply as a metaframe"})}),"\n",(0,n.jsx)(t.mermaid,{value:"flowchart TD\n    subgraph test [other-site.com]\n        direction LR\n        style js fill:#fff,stroke:#fff,stroke-width:2px\n        style metaframe fill:#fff,stroke:#32AEE4,stroke-width:2px\n        js[their code] <--\x3e |messages| metaframe[yoursite.com/api1]\n    end"}),"\n",(0,n.jsx)(t.h2,{id:"db61a26643494e09af22085ede82ad58",children:(0,n.jsx)(t.strong,{children:"Integrated as a metapage in a third-party site"})}),"\n",(0,n.jsx)(t.mermaid,{value:"flowchart LR\n    subgraph test [other-site.com]\n        direction TB\n\n        style js fill:#fff,stroke:#fff,stroke-width:2px\n        style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n        subgraph metapage [metapage]\n\n            mf1[other-site.com/api] --\x3e mf2[your-site.com/api1]\n            mf2 --\x3e mf3[metaframe 3]\n            mf1 --\x3e mf3\n        end\n        js[ javascript] <--\x3e |messages| metapage\n    end"}),"\n",(0,n.jsx)(t.h2,{id:"6dbd1cd44b2b4b7cad8a430d0afe18e2",children:(0,n.jsx)(t.strong,{children:"Integrated with a metapage @ app.metapage.io"})}),"\n",(0,n.jsx)(t.mermaid,{value:"flowchart LR\n    subgraph test [app.metapage.io/owner/metapage-name]\n        direction TB\n\n        style js fill:#fff,stroke:#fff,stroke-width:2px\n        style mf1 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf2 fill:#fff,stroke:#32AEE4,stroke-width:2px\n        style mf3 fill:#fff,stroke:#32AEE4,stroke-width:2px\n\n        subgraph metapage [metapage]\n\n            mf1[other-site.com/api] --\x3e mf2[your-site.com/api1]\n            mf2 --\x3e mf3[metaframe 3]\n            mf1 --\x3e mf3\n        end\n        js[ javascript] <--\x3e |messages| metapage\n    end"})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},3703:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var n=a(959);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
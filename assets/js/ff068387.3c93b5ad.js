"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[9393],{8866:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(1527),r=n(3703);const i={title:"Connect Outputs \u2192 Inputs",sidebar_position:2,slug:"/connect-inputs-outputs"},d=void 0,o={id:"Getting-Started/connect-inputs-outputs",title:"Connect Outputs \u2192 Inputs",description:"Metaframe outputs can be connected to downstream inputs, and optionally",source:"@site/docs/Getting-Started/connect-inputs-outputs.mdx",sourceDirName:"Getting-Started",slug:"/connect-inputs-outputs",permalink:"/docs/connect-inputs-outputs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Connect Outputs \u2192 Inputs",sidebar_position:2,slug:"/connect-inputs-outputs"},sidebar:"tutorialSidebar",previous:{title:"Creating your first metapage",permalink:"/docs/your-first-metapage"},next:{title:"Running Python with Pyodide",permalink:"/docs/python-pyodide-walkthrough"}},c={},l=[{value:"Filtering Outputs",id:"149018579bb580778261f0c29dd7c479",level:2},{value:"Mapping To Inputs",id:"149018579bb5807195b5dcc3186dd330",level:2}];function a(t){const e={a:"a",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Metaframe outputs can be connected to downstream inputs, and optionally"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["filtering the outputs using ",(0,s.jsx)(e.a,{href:"https://code.visualstudio.com/docs/editor/glob-patterns",children:"glob"})," patters"]}),"\n",(0,s.jsx)(e.li,{children:"renaming an output to an input"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"You can completely leave out any filtering, and all outputs will go to the same inputs downstream."}),"\n",(0,s.jsx)(e.mermaid,{value:'flowchart LR\n\tsubgraph m1 [metaframe A]\n\t\ta["some/files/*.json"]\n\t%%\tb["some/files/*.csv"]\n\n\tend\n\tsubgraph m2 [metaframe B]\n\t\tc["json/"]\n\tend\n%%\tsubgraph m3 [metaframe C]\n%%\t\td["targetfolder/"]\n%%\tend\n\t\n  a --\x3e c\n%%  a --\x3e d\n%%  b --\x3e d'}),"\n",(0,s.jsx)(e.p,{children:"There are two parts to the connection definition, both are optional:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"The output name or filter"}),"\n",(0,s.jsx)(e.li,{children:"The target file or folder"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"149018579bb580778261f0c29dd7c479",children:"Filtering Outputs"}),"\n",(0,s.jsxs)(e.p,{children:["Use names or ",(0,s.jsx)(e.a,{href:"https://code.visualstudio.com/docs/editor/glob-patterns",children:"globs"})," to filter and collect outputs:"]}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Output name"}),(0,s.jsx)(e.th,{children:"Output filter"}),(0,s.jsx)(e.th,{children:"Passed downstream?"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"foo.bar"})}),(0,s.jsx)(e.td,{children:"*.bar"}),(0,s.jsx)(e.td,{children:"\u2705"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"dir1/foo.bar"})}),(0,s.jsx)(e.td,{children:"*.bar"}),(0,s.jsx)(e.td,{children:"\u274c"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"dir1/foo.bar"})}),(0,s.jsx)(e.td,{children:"**/*.bar"}),(0,s.jsx)(e.td,{children:"\u2705"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"dir1/foo.bar"})}),(0,s.jsxs)(e.td,{children:["*",(0,s.jsx)(e.em,{children:"/foo"})]}),(0,s.jsx)(e.td,{children:"\u2705"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"any output"}),(0,s.jsx)(e.td,{children:"(empty string)"}),(0,s.jsx)(e.td,{children:"\u2705"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"any output"}),(0,s.jsx)(e.td,{children:"**"}),(0,s.jsx)(e.td,{children:"\u2705"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"149018579bb5807195b5dcc3186dd330",children:"Mapping To Inputs"}),"\n",(0,s.jsx)(e.p,{children:"The input part of the connection can be either a name, directory, or empty"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"empty"}),(0,s.jsx)(e.th,{children:"If empty then the filtered outputs are passed as inputs, without modification to the path or name"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["a directory name (ends with ",(0,s.jsx)(e.code,{children:"/"}),")"]}),(0,s.jsx)(e.td,{children:"The directory name will be prepended to the full path of the input(s)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["a (file) name (does ",(0,s.jsx)(e.strong,{children:"not"})," end with ",(0,s.jsx)(e.code,{children:"/"}),")"]}),(0,s.jsx)(e.td,{children:"Upstream output(s) are renamed as the input file name. If multiple outputs match, then only one will be the input."})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(a,{...t})}):a(t)}},3703:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>d});var s=n(959);const r={},i=s.createContext(r);function d(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:d(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);
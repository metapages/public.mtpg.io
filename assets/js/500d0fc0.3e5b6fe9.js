"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[8358],{98785:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(11527),s=n(33703);const r={title:"How do metapages work?",sidebar_position:0,slug:"/how-metapages-work"},o=void 0,i={id:"FAQs/how-metapages-work",title:"How do metapages work?",description:"Metapages are connected iframes (websites) where you can send/receive JSON messages",source:"@site/docs/FAQs/how-metapages-work.mdx",sourceDirName:"FAQs",slug:"/how-metapages-work",permalink:"/docs/how-metapages-work",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"How do metapages work?",sidebar_position:0,slug:"/how-metapages-work"},sidebar:"tutorialSidebar",previous:{title:"metapage.json",permalink:"/docs/metapage-json"},next:{title:"Roadmap",permalink:"/docs/18201857-9bb5-80a5-8421-e79cfe8d56ab"}},m={},c=[{value:"<strong>Metapages are connected</strong> <strong>iframes</strong> <strong>(websites) where you can send/receive JSON messages</strong>",id:"21a359f8cb754975ac3fe2ebf87534e2",level:2},{value:"Communicate with the metapage",id:"b2d9096c0b1d4f76835b47227e8c5e9b",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",hr:"hr",mermaid:"mermaid",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.h2,{id:"21a359f8cb754975ac3fe2ebf87534e2",children:[(0,t.jsx)(a.strong,{children:"Metapages are connected"})," ",(0,t.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",children:(0,t.jsx)(a.strong,{children:"iframes"})})," ",(0,t.jsx)(a.strong,{children:"(websites) where you can send/receive JSON messages"})]}),"\n",(0,t.jsx)(a.mermaid,{value:'flowchart LR\n    subgraph page [https://metapage.io]\n        \n        subgraph metapage [https://metapage.io/your-metapage]\n        direction LR\n        mf1["Metaframe-A (iframe)"]\n        mf2["Metaframe-B (iframe)"]\n        mf3["Metaframe-C (iframe)"]\n\n        mf1 --\x3e |data| mf2\n        mf1 --\x3e |data| mf3\n        mf2 --\x3e |data| mf3\n        end\n    end'}),"\n",(0,t.jsxs)(a.p,{children:["An ",(0,t.jsx)(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",children:"iframe"})," is an entire HTML page that is embedded in another HTML page."]}),"\n",(0,t.jsxs)(a.p,{children:["We have created a special kind of iframe called a ",(0,t.jsx)(a.strong,{children:"[Problem Internal Link]"}),". A ",(0,t.jsx)(a.strong,{children:"[Problem Internal Link]"})," iframe runs a small ",(0,t.jsx)(a.code,{children:"javascript"})," client that can send and receive messages to and from other metaframe iframes via the parent page (the metapage). The metapage library coordinates messages between metaframes via the graph defined in the metapage's ",(0,t.jsx)(a.a,{href:"/docs/metapage-json",children:"metapage.json"})," file."]}),"\n",(0,t.jsx)(a.p,{children:"Because of the precautions of Cross Domain security, iframe page isolation plus secure messaging enables safe isolated webpage communication, controlled by the user or parent page."}),"\n",(0,t.jsx)(a.p,{children:"Parent page content cannot inspect iframe content and vice versa."}),"\n",(0,t.jsx)(a.p,{children:"The page can send and receive messages to frames.  Frames send messages to each other via the page."}),"\n",(0,t.jsx)(a.hr,{}),"\n",(0,t.jsx)(a.h2,{id:"b2d9096c0b1d4f76835b47227e8c5e9b",children:"Communicate with the metapage"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"/docs/embed-metapage",children:"Example embedding a metapage as a react component"})}),"\n",(0,t.jsx)(a.p,{children:"If you embed a metapage in your own site, you can send/receive messages to any metaframe:"}),"\n",(0,t.jsx)(a.mermaid,{value:'flowchart LR\n    subgraph page [Your website]\n        js("Your website javascript")\n        metapage ---\x3e |"JSON messages (any output changes)"| js\n        js ---\x3e |"set any inputs"| metapage\n        subgraph metapage [Metapage]\n        direction LR\n        mf1["Metaframe A (iframe)"]\n        mf2["Metaframe B (iframe)"]\n        mf3["Metaframe C (iframe)"]\n\n        mf1 --\x3e mf2\n        mf1 --\x3e mf3\n        mf2 --\x3e mf3\n        end\n    end'})]})}function p(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},33703:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>o});var t=n(50959);const s={},r=t.createContext(s);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);
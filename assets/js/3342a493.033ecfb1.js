"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[3721],{8486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(1527),i=t(3703);const s={title:"Embed a metaframe in a React app",sidebar_position:2,slug:"/embed-metaframe"},o=void 0,r={id:"Embed-and-Publish/embed-metaframe",title:"Embed a metaframe in a React app",description:"Embed a metaframe in your React app",source:"@site/docs/Embed-and-Publish/embed-metaframe.mdx",sourceDirName:"Embed-and-Publish",slug:"/embed-metaframe",permalink:"/docs/embed-metaframe",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Embed a metaframe in a React app",sidebar_position:2,slug:"/embed-metaframe"},sidebar:"tutorialSidebar",previous:{title:"Embed metapages into your app",permalink:"/docs/embed"},next:{title:"Embed a metapage in your React app",permalink:"/docs/embed-metapage"}},d={},l=[{value:"<strong>Embed a metaframe in your React app</strong>",id:"0adbcba3b5b84d01b41e6e1d6929402a",level:2},{value:"<strong>Live demo</strong>",id:"b26ee2635ba644a0acbb38bf2cc1cb6f",level:2},{value:"<strong>Example: JSON editor as a react component</strong>",id:"80233b6400534e0682e757c7475d1358",level:2},{value:"<strong>Use cases</strong>",id:"e35d717ce5e94bcd985382ceac1af363",level:2},{value:"<strong>Advantages</strong>",id:"244d30d9815e4990a6ab844728f18fbd",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.mermaid,{value:"flowchart TD\n    subgraph test [your-site.com]\n        direction LR\n        style js fill:#fff,stroke:#fff,stroke-width:2px\n        style metaframe fill:#fff,stroke:#32AEE4,stroke-width:2px\n        js[your javascript] <--\x3e |messages| metaframe[Single Metaframe]\n    end"}),"\n",(0,a.jsx)(n.h2,{id:"0adbcba3b5b84d01b41e6e1d6929402a",children:(0,a.jsx)(n.strong,{children:"Embed a metaframe in your React app"})}),"\n",(0,a.jsx)(n.p,{children:"(Check npm link)"}),"\n",(0,a.jsxs)(n.p,{children:["Integrate single or multiple npm packages into your website as an alternative to typical ",(0,a.jsx)(n.code,{children:"npm/yarn install"})," etc."]}),"\n",(0,a.jsxs)(n.p,{children:["Integrate any ",(0,a.jsx)(n.a,{href:"https://npm.com/",children:"npm"}),"/javascript module"]}),"\n",(0,a.jsx)(n.p,{children:"You see a metaframe with functionality you would like for your own site. With a few lines of code, you can integrate any of the large library of"}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.h2,{id:"b26ee2635ba644a0acbb38bf2cc1cb6f",children:(0,a.jsx)(n.strong,{children:"Live demo"})}),"\n",(0,a.jsx)(n.p,{children:"This example shows an editor as an embedded metaframe with outputs handled by React hooks"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function ExampleEmbedMetaframe() {\n  const url =\n    "https://editor.mtfm.io/#?button=hidden&menuhidden=true&options=JTdCJTIyYXV0b3NlbmQlMjIlM0F0cnVlJTJDJTIyaGlkZW1lbnVpZmlmcmFtZSUyMiUzQWZhbHNlJTJDJTIybW9kZSUyMiUzQSUyMnBsYWludGV4dCUyMiUyQyUyMnRoZW1lJTIyJTNBJTIydnMtZGFyayUyMiU3RA==";\n\n  const [text, setText] = useState("Edit me!! ");\n\n  const onOutputs = useCallback(\n    (outputs) => {\n      if (outputs && outputs.text) {\n        setText(outputs.text);\n      }\n    },\n    [setText]\n  );\n\n  return (\n    <>\n      <Admonition type="tip" title="Text output from the embedded metaframe">\n        {text}\n      </Admonition>\n\n      <MetaframeStandaloneComponent\n        url={url}\n        inputs={{ text }}\n        onOutputs={onOutputs}\n      />\n    </>\n  );\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"80233b6400534e0682e757c7475d1358",children:(0,a.jsx)(n.strong,{children:"Example: JSON editor as a react component"})}),"\n",(0,a.jsx)(n.p,{children:"This is a minimal example in react, embedding the monaco (link) code editor configured for JSON."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'import { useCallback } from "react";\nimport { MetaframeStandaloneComponent } from "@metapages/metapage-embed-react";\nimport { MetaframeInputMap } from "@metapages/metapage";\n\nexport const EditorJson: React.FC<{\n  content: string;\n  onChange: (s: string) => void;\n}> = ({ content, onChange }) => {\n  const onOutputs = useCallback(\n    (outputs: MetaframeInputMap) => {\n      if (outputs["value"] === undefined || outputs["value"] === null) {\n        return;\n      }\n      onChange(outputs["value"]);\n    },\n    [onChange]\n  );\n\n  return (\n    <div>\n      <MetaframeStandaloneComponent\n        url="https://editor.mtfm.io/#?options=eyJhdXRvc2VuZCI6dHJ1ZSwiaGlkZW1lbnVpZmlmcmFtZSI6dHJ1ZSwibW9kZSI6Impzb24iLCJ0aGVtZSI6ImxpZ2h0In0="\n        inputs={{ value: content }}\n        onOutputs={onOutputs}\n      />\n    </div>\n  );\n};\n'})}),"\n",(0,a.jsx)(n.h2,{id:"e35d717ce5e94bcd985382ceac1af363",children:(0,a.jsx)(n.strong,{children:"Use cases"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"quickly integrate complex code into your main app"}),"\n",(0,a.jsxs)(n.li,{children:["quickly experiment with different modules without requiring installation or rebuilding","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"some javascript modules, e.g. monaco, require custom complex build step (depending on your builder, webpack, vite, etc)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"244d30d9815e4990a6ab844728f18fbd",children:(0,a.jsx)(n.strong,{children:"Advantages"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"the assets are not bundled with the main app, reducing build times and increasing download speed"}),"\n",(0,a.jsx)(n.li,{children:"the editor can be easily configured via the URL"}),"\n",(0,a.jsx)(n.li,{children:"the editor can easily be replaced without installing any additional modules"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},3703:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(959);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[2898],{76013:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Containers/containers","title":"Containers","description":"182018579bb5805d8ec5e9d2ef32c999}","source":"@site/docs/Containers/containers.mdx","sourceDirName":"Containers","slug":"/containers","permalink":"/docs/containers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Containers","sidebar_position":0,"slug":"/containers"},"sidebar":"tutorialSidebar","previous":{"title":"Roadmap","permalink":"/docs/18201857-9bb5-80a5-8421-e79cfe8d56ab"},"next":{"title":"remote","permalink":"/docs/container-remote-mode"}}');var t=r(74848),s=r(28453);const o={title:"Containers",sidebar_position:0,slug:"/containers"},c="Run docker containers in the browser {#182018579bb5805d8ec5e9d2ef32c999}",a={},d=[{value:"Quickstart: Run a worker",id:"182018579bb580bbb46bc64fcff8950e",level:2},{value:"Quickstart: Run a job from the browser",id:"182018579bb580e2813ddfc42095dd40",level:2},{value:"Inputs, outputs, and caching",id:"182018579bb58009b091efebc56694f6",level:2},{value:"Define Inputs and Outputs",id:"182018579bb580cbb955f2aa4afacac6",level:3},{value:"Directory for caching data and large ML models",id:"182018579bb580a2b13ec3905120ef2b",level:3},{value:"Description",id:"182018579bb580ba89edfd8bbfea4cfa",level:2},{value:"Getting started",id:"182018579bb580b88592cf6a49edc48d",level:2},{value:"Example URL",id:"182018579bb5806d8af7cc0e136a2d63",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.mermaid,{value:'graph LR\n  containers["Metaframe: Containers"]\n  local["Local mode"]\n  remote["Remote mode"]\n  gitrefs["git refs in URLs"]\n\n  containers --\x3e remote  \n  containers --\x3e local\n  containers --\x3e gitrefs\n  click containers "/docs/containers"\n  style containers fill:#fff,stroke:#999999,stroke-width:2px,color:#000\n  click remote "/docs/container-remote-mode"\n  click local "/docs/container-local-mode"\n  click gitrefs "/docs/18201857-9bb5-8008-974f-d3068fa75507"'}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"182018579bb5805d8ec5e9d2ef32c999",children:"Run docker containers in the browser"})}),"\n",(0,t.jsxs)(n.p,{children:["Metapage workflows run in the browser, however many scientific workflows need to run e.g. python or R which does not yet run natively in the browser. The container metaframe (",(0,t.jsx)(n.a,{href:"https://container.mtfm.io/",children:"container.mtfm.io"}),") solves this problem by providing public compute queues (a \u201cgrid\u201d) that metapage workflows simply \u201cplug\u201d into like an electrical grid."]}),"\n",(0,t.jsx)(n.p,{children:"You can provide your own computer(s) to your personal grid (queue), or plug a cluster into the grid so your entire team can share the same resources. When someone else runs your workflows, they will automatically run it on their own grid, or their own computer."}),"\n",(0,t.jsx)(n.p,{children:"We abstract away where compute is done, so you don\u2019t have to think about it."}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb580bbb46bc64fcff8950e",children:"Quickstart: Run a worker"}),"\n",(0,t.jsx)(n.p,{children:"Until the metapage platform provides compute resources on demand (on our roadmap) you will need to run a worker agent on your computer(s):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/container-remote-mode",children:"run in remote mode"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/container-local-mode",children:"run in local mode"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb580e2813ddfc42095dd40",children:"Quickstart: Run a job from the browser"}),"\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"https://container.mtfm.io/?command=cHJpbnQgXCggc2Rmc2RmMiBcKQ%3D%3D&image=python3#/queue/1?command=cHl0aG9uIC1jICdwcmludCgiaGVscCIpJw%253D%253D&image=python%253A3.8.8-alpine3.13&job=JTdCJTIyY29tbWFuZCUyMiUzQSUyMnB5dGhvbiUyMC1jJTIwJ3ByaW50KCU1QyUyMmhlbHAlNUMlMjIpJyUyMiUyQyUyMmltYWdlJTIyJTNBJTIycHl0aG9uJTNBMy4xMi4xLWFscGluZTMuMTklMjIlN0Q=&queue=public1",children:"this link"})," to run a simple python job using the worker above:"]}),"\n",(0,t.jsx)(n.h1,{id:"182018579bb5802d9836db3a88aa60d1",children:"Docker environment"}),"\n",(0,t.jsx)(n.p,{children:"Env vars available in the container process:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"JOB_INPUTS"})}),(0,t.jsxs)(n.th,{children:["Default: ",(0,t.jsx)(n.code,{children:"/inputs"}),". The directory where job input files are copied."]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"JOB_OUTPUTS"})}),(0,t.jsxs)(n.td,{children:["Default: ",(0,t.jsx)(n.code,{children:"/outputs"}),". The directory where job output files will be copied when the job finishes successfully."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"JOB_CACHE"})}),(0,t.jsxs)(n.td,{children:["Default: ",(0,t.jsx)(n.code,{children:"/job-cache"}),". Shared directory for caching e.g. large models."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb58009b091efebc56694f6",children:"Inputs, outputs, and caching"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["env var ",(0,t.jsx)(n.code,{children:"JOB_INPUTS"})," is the directory where job input files are copied. Defaults to ",(0,t.jsx)(n.code,{children:"/inputs"})]}),"\n",(0,t.jsxs)(n.li,{children:["env var ",(0,t.jsx)(n.code,{children:"JOB_OUTPUTS"})," is .\nDefaults to ",(0,t.jsx)(n.code,{children:"/outputs"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"182018579bb580cbb955f2aa4afacac6",children:"Define Inputs and Outputs"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"Settings / Definition"})," you can define inputs and outputs. This doesn't change how the code runs, but it allows much\neasier connecting upstream and downstream metaframes when editing ",(0,t.jsx)(n.a,{href:"https://metapage.io/",children:"metapages"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we defined an input: ",(0,t.jsx)(n.code,{children:"input.json"})," and an output ",(0,t.jsx)(n.code,{children:"data.csv"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(85854).A+"",width:"1116",height:"334"})}),"\n",(0,t.jsx)(n.p,{children:"You will see these inputs and outputs automatically in the metapage editor."}),"\n",(0,t.jsx)(n.h3,{id:"182018579bb580a2b13ec3905120ef2b",children:"Directory for caching data and large ML models"}),"\n",(0,t.jsxs)(n.p,{children:["The directory defined in the env var ",(0,t.jsx)(n.code,{children:"JOB_CACHE"})," (defaults to ",(0,t.jsx)(n.code,{children:"/job-cache"}),") is shared between all jobs running on a\nhost. Use this location to store large data sets and models."]}),"\n",(0,t.jsx)(n.p,{children:"The cache is not shared between worker instances, only between jobs running on a single instance or computer."}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb580ba89edfd8bbfea4cfa",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"container.mtfm.io"})," runs docker containers on workers. It is currently in beta."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Run any publicly available docker image: ",(0,t.jsx)(n.code,{children:"Python"}),", ",(0,t.jsx)(n.code,{children:"R"}),", ",(0,t.jsx)(n.code,{children:"C++"}),", ",(0,t.jsx)(n.code,{children:"Java"}),", ... anything."]}),"\n",(0,t.jsxs)(n.li,{children:["Bring your own workers","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Currently individual machines are supported, but kubernetes and nomad support coming soon"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Your queue is simply an unguessable hash. Do not share it without consideration."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Use cases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"machine learning pipelines"}),"\n",(0,t.jsx)(n.li,{children:"data analysis workflows"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Any time the inputs change (and on start) the configured docker container is run:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/inputs"})," is the location where inputs are copied as files"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/outputs"}),": any files here when the container exits are passed on as metaframe outputs"]}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart TD\n  classDef mpColor fill:#fff,stroke:#31AEE4,stroke-width:2px;\n\n  subgraph metapage\n    browser["<https://docker.mtfm.io>"]:::mpColor\n    metaframeIn[metaframe with inputs]:::mpColor --\x3e | inputs to docker job| browser\n    browser --\x3e | outputs from docker job| metaframeOut[metaframe consuming outputs]:::mpColor\n  end\n  server[server with job queue];\n  worker["worker (takes jobs running on your infrastructure/computer)"] --- |docker image,inputs,outouts| server\n  browser --- |docker image,inputs,outouts| server\n  worker --\x3e container["docker job"]\n  linkStyle 0,1 stroke:#31AEE4,stroke-width:2px;\n'}),"\n",(0,t.jsx)(n.p,{children:"Versioned. Reproducible. No client install requirements, as long as you have at least one worker running somewhere, you\ncan run any programming language."}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb580b88592cf6a49edc48d",children:"Getting started"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a queue"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Click the connect button in the bottom-right"}),"\n",(0,t.jsx)(n.li,{children:'A "queue" is simply string or key'}),"\n",(0,t.jsxs)(n.li,{children:["The part of the URL that looks like ",(0,t.jsx)(n.code,{children:"#?queue=my-queue-e7eebea2-c607-11ee-84de-b7a272dd08fc"})]}),"\n",(0,t.jsxs)(n.li,{children:["Best if the ",(0,t.jsx)(n.code,{children:"queue"})," value is a long impossible to guess string e.g. a GUID"]}),"\n",(0,t.jsx)(n.li,{children:"Workers point to this queue, and run the configured docker jobs"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure the docker job"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run a worker (or a bunch) pointing to a queue: ",(0,t.jsx)(n.code,{children:"public1"})," (warning: this is a public shared compute queue)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"docker run --pull always --restart unless-stopped -tid -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp metapage/metaframe-docker-worker:latest run --cpus=4 --gpus=0 public1\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you have GPUs, you can add ",(0,t.jsx)(n.code,{children:"--gpus=1"})," (or more) to the worker command."]}),"\n",(0,t.jsx)(n.h2,{id:"182018579bb5806d8af7cc0e136a2d63",children:"Example URL"}),"\n",(0,t.jsx)(n.p,{children:"Run the python command in a container:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://container.mtfm.io/?command=cHJpbnQgXCggc2Rmc2RmMiBcKQ%3D%3D&image=python3#/queue/1?command=cHl0aG9uIC1jICdwcmludCgiaGVscCIpJw%253D%253D&image=python%253A3.8.8-alpine3.13&job=JTdCJTIyY29tbWFuZCUyMiUzQSUyMnB5dGhvbiUyMC1jJTIwJ3ByaW50KCU1QyUyMmhlbHAlNUMlMjIpJyUyMiUyQyUyMmltYWdlJTIyJTNBJTIycHl0aG9uJTNBMy4xMi4xLWFscGluZTMuMTklMjIlN0Q=&queue=public1",children:"https://container.mtfm.io/?command=cHJpbnQgXCggc2Rmc2RmMiBcKQ%3D%3D&image=python3#/queue/1?command=cHl0aG9uIC1jICdwcmludCgiaGVscCIpJw%253D%253D&image=python%253A3.8.8-alpine3.13&job=JTdCJTIyY29tbWFuZCUyMiUzQSUyMnB5dGhvbiUyMC1jJTIwJ3ByaW50KCU1QyUyMmhlbHAlNUMlMjIpJyUyMiUyQyUyMmltYWdlJTIyJTNBJTIycHl0aG9uJTNBMy4xMi4xLWFscGluZTMuMTklMjIlN0Q=&queue=public1"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},85854:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/containers.18201857-9bb5-804f-89ea-ede3b541ffe7-3ed7530923481ccd27b57f5917fcf33b.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var i=r(96540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkmetapage_docs=self.webpackChunkmetapage_docs||[]).push([[4903],{1769:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var d=a(1527),i=a(3703);const r={title:"Run docker containers",sidebar_position:4,slug:"/example-metaframe-running-docker-container"},t=void 0,c={id:"Guides/example-metaframe-running-docker-container",title:"Run docker containers",description:"You can run arbitrary docker containers as jobs within your metapage workflows.",source:"@site/docs/Guides/example-metaframe-running-docker-container.mdx",sourceDirName:"Guides",slug:"/example-metaframe-running-docker-container",permalink:"/docs/example-metaframe-running-docker-container",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Run docker containers",sidebar_position:4,slug:"/example-metaframe-running-docker-container"},sidebar:"tutorialSidebar",previous:{title:"Files- upload, download, saving",permalink:"/docs/files"},next:{title:"What is a metaframe?",permalink:"/docs/what-is-a-metaframe"}},s={},o=[{value:"Run python via a docker container on your own computer",id:"a778b7482e1c45578f281959708e69e9",level:2},{value:"1. Generate a uuid for the job queue",id:"24458ce51dbf45ddb181e36e0f759cbb",level:2},{value:"2. Take the uuid generated, and start the worker process",id:"e7ede88bb5d7411b972733b89c416695",level:2},{value:"3. Add a docker metaframe to your metapage",id:"1d994114cd3445bd8d31f6a738ad5673",level:2},{value:"Create a new metapage:",id:"d1904ae18336448fa5ceccc378b13d43",level:3},{value:"Click \u201cEdit\u201d for edit mode",id:"c6c559f572f045f78fcce2248c8e6fa2",level:3},{value:"Add the \u201cRun Docker Container Jobs\u201d metaframe",id:"6c8c4063c43b4742bdea4f3b5bf6158b",level:3},{value:"Switch to \u201cView\u201d mode",id:"2fd4714b39e84f04a127ec783c34ebbc",level:3},{value:"Add your queue id",id:"5d14041dab014cd09ca2b3a7cc8a149e",level:3},{value:"4. Configure the docker container frame",id:"30ea83a3849e41429aa91cd1126345f3",level:2},{value:"Set the docker image to python",id:"4e03c57bfc7d40e0b4a52145c8cd83fe",level:3},{value:"Add a python script",id:"d5f0504776a04249a9f10ae867cb22ea",level:3},{value:"Edit the python script",id:"566591163ede4083a689520224cd3355",level:3},{value:"Copy the script and save",id:"e13e32d54afd416bb374b57c2e56c017",level:3},{value:"5. Add an image viewer to see the docker output",id:"a88c93f0843b4f25adfdaaa408ba44ae",level:2},{value:"Edit mode",id:"68c65786fbf143fcb59c74040a09bd56",level:3},{value:"Search for \u201cImage Viewer\u201d and add",id:"101407884687459eb53729cb7bd46d91",level:3},{value:"Edit the Image Viewer",id:"0b2d6fcc52f44910afe0165a126aa8dd",level:3},{value:"Connect all outputs to inputs",id:"e9078227fefc4c3982cbca495e4eeb56",level:3},{value:"6. Congrats you have generated an image",id:"e7733bd6db9b46f1bb0a358e4c03312c",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.mermaid,{value:'flowchart LR\n  docker[docker]\n\tfs[files]\n\n\tdocker --\x3e fs\n  click fs "/docs/files"\n  click docker "/docs/example-metaframe-running-docker-container"\n  style docker fill:#fff,stroke:#999999,stroke-width:2px,color:#000'}),"\n",(0,d.jsx)(n.p,{children:"You can run arbitrary docker containers as jobs within your metapage workflows."}),"\n",(0,d.jsx)(n.p,{children:"These steps need to be set up only once, then you can run any docker image."}),"\n",(0,d.jsx)(n.admonition,{type:"caution",children:(0,d.jsxs)(n.p,{children:["The public docker work queue service is currently for ",(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.strong,{children:"testing"})}),"/",(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.strong,{children:"demonstration"})})," purposes. Do not ",(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.strong,{children:"publicly"})})," share these workflows as others will be able to run arbitrary docker containers on your infrastructure."]})}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"This service will soon be replaced with one secure for teams."})}),"\n",(0,d.jsx)(n.h2,{id:"a778b7482e1c45578f281959708e69e9",children:"Run python via a docker container on your own computer"}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsx)(n.p,{children:"Requires familiarity with the command line terminal"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Host requirements:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"Docker"})}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Steps (from ",(0,d.jsx)(n.a,{href:"https://container.mtfm.io/#?tab=6",children:"https://container.mtfm.io/#?tab=6"}),"):"]}),"\n",(0,d.jsx)(n.h2,{id:"24458ce51dbf45ddb181e36e0f759cbb",children:"1. Generate a uuid for the job queue"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"uuid\n"})}),"\n",(0,d.jsxs)(n.p,{children:["If your terminal does not have this program, go to this page and copy the uuid: ",(0,d.jsx)(n.a,{href:"https://www.uuidgenerator.net/version4",children:"https://www.uuidgenerator.net/version4"})]}),"\n",(0,d.jsx)(n.h2,{id:"e7ede88bb5d7411b972733b89c416695",children:"2. Take the uuid generated, and start the worker process"}),"\n",(0,d.jsxs)(n.p,{children:["Replace ",(0,d.jsx)(n.code,{children:"<uuid>"}),"  with your generated one above"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"docker run --restart unless-stopped -tid -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp metapage/metaframe-docker-worker:0.25.0 --cpus=2 <uuid>\n"})}),"\n",(0,d.jsx)(n.p,{children:"Now your local machine will run docker images on this unguessable queue."}),"\n",(0,d.jsx)(n.admonition,{type:"caution",children:(0,d.jsx)(n.p,{children:"Do not share this queue id, and do not publicly share workflows using this queue id."})}),"\n",(0,d.jsx)(n.h2,{id:"1d994114cd3445bd8d31f6a738ad5673",children:"3. Add a docker metaframe to your metapage"}),"\n",(0,d.jsx)(n.h3,{id:"d1904ae18336448fa5ceccc378b13d43",children:"Create a new metapage:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(5297).Z+"",width:"1472",height:"290"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"c6c559f572f045f78fcce2248c8e6fa2",children:"Click \u201cEdit\u201d for edit mode"}),"\n",(0,d.jsx)(n.p,{children:"The metapage will initially be empty"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(4843).Z+"",width:"1746",height:"394"})}),"\n",(0,d.jsx)(n.p,{children:"This is how you can add metaframe components."}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"6c8c4063c43b4742bdea4f3b5bf6158b",children:"Add the \u201cRun Docker Container Jobs\u201d metaframe"}),"\n",(0,d.jsx)(n.p,{children:"Search for the docker metaframe, type \u201cdocker\u201d in the search field, you should see something like:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(8228).Z+"",width:"1890",height:"464"})}),"\n",(0,d.jsx)(n.p,{children:"Add the \u201cRun Docker Container Jobs\u201d metaframe, click on the \u201c+ Add\u201d button next to it"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"2fd4714b39e84f04a127ec783c34ebbc",children:"Switch to \u201cView\u201d mode"}),"\n",(0,d.jsx)(n.p,{children:"You can directly configure the metaframe this way"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(6718).Z+"",width:"660",height:"124"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"5d14041dab014cd09ca2b3a7cc8a149e",children:"Add your queue id"}),"\n",(0,d.jsx)(n.p,{children:"Now time to add your queue id. Click on \u201cQueue\u201d the \u201cQueue Key\u201d"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(5914).Z+"",width:"1394",height:"286"})}),"\n",(0,d.jsxs)(n.p,{children:["Enter in the ",(0,d.jsx)(n.code,{children:"uuid"}),"  from above."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Congratulations!"})," Now your local machine will run any docker containers you want."]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"30ea83a3849e41429aa91cd1126345f3",children:"4. Configure the docker container frame"}),"\n",(0,d.jsx)(n.h3,{id:"4e03c57bfc7d40e0b4a52145c8cd83fe",children:"Set the docker image to python"}),"\n",(0,d.jsx)(n.p,{children:"Set:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"image:"})," czentye/matplotlib-minimal:3.1.2"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"command:"}),"python3 /inputs/run.py"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(8349).Z+"",width:"1176",height:"1104"})}),"\n",(0,d.jsx)(n.h3,{id:"d5f0504776a04249a9f10ae867cb22ea",children:"Add a python script"}),"\n",(0,d.jsx)(n.p,{children:"Click the inputs tab"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(2069).Z+"",width:"1550",height:"440"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.p,{children:["Click the ",(0,d.jsx)(n.code,{children:"+"}),"  and name the new file ",(0,d.jsx)(n.a,{href:"http://run.py/",children:(0,d.jsx)(n.code,{children:"run.py"})})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(5271).Z+"",width:"948",height:"456"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"566591163ede4083a689520224cd3355",children:"Edit the python script"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(9853).Z+"",width:"1630",height:"284"})}),"\n",(0,d.jsx)(n.h3,{id:"e13e32d54afd416bb374b57c2e56c017",children:"Copy the script and save"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"import matplotlib.pyplot as plt\nimport numpy as np\n\n# Fixing random state for reproducibility\nnp.random.seed(19680801)\n\nys = 200 + np.random.randn(100)\nx = [x for x in range(len(ys))]\n\nplt.plot(x, ys, '-')\nplt.fill_between(x, ys, 195, where=(ys > 195), facecolor='g', alpha=0.6)\n\nplt.title(\"Sample Visualization\")\n# plt.show() # save instead of show because we are headless \nplt.savefig('/outputs/plot.png')\nprint(\"Created image and sent!\")\n"})}),"\n",(0,d.jsx)(n.h2,{id:"a88c93f0843b4f25adfdaaa408ba44ae",children:"5. Add an image viewer to see the docker output"}),"\n",(0,d.jsx)(n.h3,{id:"68c65786fbf143fcb59c74040a09bd56",children:"Edit mode"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(6718).Z+"",width:"660",height:"124"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"101407884687459eb53729cb7bd46d91",children:"Search for \u201cImage Viewer\u201d and add"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(8573).Z+"",width:"1076",height:"446"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"0b2d6fcc52f44910afe0165a126aa8dd",children:"Edit the Image Viewer"}),"\n",(0,d.jsx)(n.p,{children:"Click \u201cShow Image\u201d and \u201cConnect\u201d"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(2558).Z+"",width:"1770",height:"722"})}),"\n",(0,d.jsx)(n.h3,{id:"e9078227fefc4c3982cbca495e4eeb56",children:"Connect all outputs to inputs"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"*"}),"  means ",(0,d.jsx)(n.strong,{children:"all"}),"."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(35).Z+"",width:"2846",height:"1060"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"e7733bd6db9b46f1bb0a358e4c03312c",children:"6. Congrats you have generated an image"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:a(630).Z+"",width:"2430",height:"1916"})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.p,{children:"Do you want to save the image? See \u2192"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/files",children:"Files: upload, download, saving"})}),"\n",(0,d.jsx)(n.mermaid,{value:'flowchart LR\n  docker[docker]\n\tfs[files]\n\n\tdocker --\x3e fs\n  click fs "/docs/files"\n  click docker "/docs/example-metaframe-running-docker-container"\n  style docker fill:#fff,stroke:#999999,stroke-width:2px,color:#000'})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},8573:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/1008768631-f97f08e0449b5096a81ddc60a9b35801.png"},8349:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/1019698249-edd47d6c420340900bd113610e998904.png"},5914:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/1073757961-0c9d0427efbe9571657dad8aa89ceab9.png"},9853:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/1076596254-862bd41cecdcae18a4d8491dbe090d6b.png"},2069:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/1326802392-a9b1bd118d5bf99234ba6f93cb2d7bfa.png"},35:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/1459288079-413e8e9a363b35669f744458b16b2962.png"},2558:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/1600734465-bb901b6399342fdd83b7dc2f3c51e359.png"},6718:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/1673923344-a89304edf3c60eb6aeec91b6c79946fd.png"},4843:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/1710252235-dc363cf47e3a3e7896a8751961c5a991.png"},5297:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/2144743766-f06b6759f4751d406ae12b6cab12d200.png"},630:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/327299290-c4513db315a78755a545d17063e225cb.png"},5271:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/452365161-4a1aa1c79128a04ea48f6d167c970387.png"},8228:(e,n,a)=>{a.d(n,{Z:()=>d});const d=a.p+"assets/images/782876922-17aba48f6b70542f9565a706031f4d55.png"},3703:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>t});var d=a(959);const i={},r=d.createContext(i);function t(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);
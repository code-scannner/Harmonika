(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1004:function(e,t,s){Promise.resolve().then(s.bind(s,7785))},7785:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var l=s(7437),a=s(2265),n=s(5203),r=s(8472);function c(e){let{setSongs:t,setLabelText:s}=e,[c,i]=(0,a.useState)(""),o=(0,a.useRef)(null);return(0,l.jsxs)("form",{className:"flex items-center max-w-lg mx-auto",onSubmit:e=>{o.current.continuousStart(),e.preventDefault(),(0,r.Z)("/api/search/".concat(c)).then(e=>{t(e.data),s("Search Results for : ".concat(c)),o.current.complete()})},children:[(0,l.jsx)(n.Z,{color:"#cfcfcf",ref:o}),(0,l.jsx)("label",{htmlFor:"voice-search",className:"sr-only",children:"Search"}),(0,l.jsxs)("div",{className:"relative w-full",children:[(0,l.jsx)("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",children:(0,l.jsx)("svg",{className:"w-4 h-4 text-gray-400",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"#fff",version:"1.1",id:"Capa_1",width:"800px",height:"800px",viewBox:"0 0 344.156 344.156",xmlSpace:"preserve",children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"M343.766,28.723c0-5.525-4.483-10.006-10.006-10.006H106.574c-5.531,0-10.006,4.48-10.006,10.006v194.18   c-10.25-8.871-23.568-14.279-38.156-14.279C26.207,208.623,0,234.824,0,267.029c0,32.209,26.207,58.41,58.412,58.41   c32.215,0,58.412-26.201,58.412-58.41c0-2.854-0.246-175.924-0.246-175.924h207.176v131.666   c-10.229-8.795-23.487-14.148-38.008-14.148c-32.217,0-58.412,26.201-58.412,58.406c0,32.209,26.195,58.41,58.412,58.41   c32.205,0,58.41-26.201,58.41-58.41C344.156,264.068,343.766,28.723,343.766,28.723z M58.412,305.43   c-21.174,0-38.4-17.227-38.4-38.4c0-21.17,17.227-38.396,38.4-38.396s38.4,17.228,38.4,38.396   C96.812,288.203,79.586,305.43,58.412,305.43z M116.578,71.094V38.728h207.176v32.365L116.578,71.094L116.578,71.094z    M285.746,305.43c-21.174,0-38.4-17.227-38.4-38.4c0-21.17,17.228-38.396,38.4-38.396s38.4,17.228,38.4,38.396   C324.146,288.203,306.92,305.43,285.746,305.43z"})})})}),(0,l.jsx)("input",{type:"text",value:c,onChange:e=>i(e.target.value),id:"voice-search",className:"outline-none border text-sm rounded-lg block w-full ps-10 p-2.5 focus:bg-gray-800/40 transition-colors bg-gray-800/70 border-gray-600 placeholder-gray-400 text-white",placeholder:"Search Your Music...",required:!0,minLength:3,maxLength:20}),(0,l.jsx)("button",{type:"submit",className:"absolute inset-y-0 end-0 flex items-center pe-3",children:(0,l.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,l.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})})]})]})}let i=(e,t)=>e.length<=t?e:e.substr(0,t)+"...",o=function(e){let t=new URL(e).searchParams.get("v");return null==t?"":"https://img.youtube.com/vi/".concat(t,"/hqdefault.jpg")};var x=s(8501),d=e=>{let{src:t,alt:s,fallbackSrc:n,className:r,...c}=e,[i,o]=(0,a.useState)(!1);return(0,l.jsx)("div",{className:r+" overflow-hidden",children:(0,l.jsx)("img",{src:i?t:n,alt:s,className:"block rounded w-18 h-32 scale-[1.2] -translate-y-2 -translate-x-2",onLoad:()=>{o(!0)},...c})})};function h(e){let{song:t,delay:s,setSongs:c,setLabelText:h}=e,u=(0,a.useRef)(null);return(0,l.jsxs)(x.E.div,{transition:{duration:.4,delay:.1*s},initial:{opacity:0,translateY:"12px"},animate:{opacity:1,translateY:"0"},className:"shadow-lg relative hover:shadow-xl min-h-full",children:[(0,l.jsx)(n.Z,{className:"absolute",color:"#cfcfcf",ref:u}),(0,l.jsx)("div",{className:"absolute -z-10 inset-0 transform scale-[1.01] rounded-md bg-gradient-to-br from-zinc-500 via-zinc-900/80 to-zinc-500 transition-all"}),(0,l.jsxs)("div",{className:"flex flex-col p-2.5 h-full rounded-md overflow-hidden outline-none bg-zinc-900/80 hover:bg-zinc-900/95 transition-colors",children:[(0,l.jsxs)("div",{className:"group relative",children:[(0,l.jsx)(d,{className:"block rounded h-28 w-18",src:o(t.download_link),alt:t.title,fallbackSrc:"https://img.youtube.com/d.jpg"}),(0,l.jsx)("div",{className:"absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly",children:(0,l.jsx)("a",{href:t.download_link,target:"_blank",className:"relative top-2 group-hover:top-0 hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:40,height:40,xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",viewBox:"0 0 49 49",xmlSpace:"preserve",children:(0,l.jsx)("g",{children:(0,l.jsxs)("g",{children:[(0,l.jsx)("path",{d:"M39.256,6.5H9.744C4.371,6.5,0,10.885,0,16.274v16.451c0,5.39,4.371,9.774,9.744,9.774h29.512    c5.373,0,9.744-4.385,9.744-9.774V16.274C49,10.885,44.629,6.5,39.256,6.5z M47,32.726c0,4.287-3.474,7.774-7.744,7.774H9.744    C5.474,40.5,2,37.012,2,32.726V16.274C2,11.988,5.474,8.5,9.744,8.5h29.512c4.27,0,7.744,3.488,7.744,7.774V32.726z"}),(0,l.jsx)("path",{d:"M33.36,24.138l-13.855-8.115c-0.308-0.18-0.691-0.183-1.002-0.005S18,16.527,18,16.886v16.229    c0,0.358,0.192,0.69,0.502,0.868c0.154,0.088,0.326,0.132,0.498,0.132c0.175,0,0.349-0.046,0.505-0.137l13.855-8.113    c0.306-0.179,0.495-0.508,0.495-0.863S33.667,24.317,33.36,24.138z M20,31.37V18.63l10.876,6.371L20,31.37z"})]})})})})})]}),(0,l.jsxs)("div",{className:"flex items-center grow-[1] mb-0 justify-between my-2 text-sm relative",children:[(0,l.jsxs)("div",{className:"text-xs flex flex-col gap-y-1",children:[(0,l.jsx)("h3",{className:"text-white leading-tight font-semibold",title:t.title,children:(0,l.jsx)("span",{children:i(t.title,16)})}),(0,l.jsx)("p",{className:"text-gray-400",children:t.year})]}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{onClick:()=>{window.scrollTo(0,0),u.current.continuousStart(),(0,r.Z)("/api/recommend/".concat(t.index)).then(e=>{c(e.data),h("Similar to : ".concat(t.title)),u.current.complete()})},children:(0,l.jsx)("svg",{className:"w-6 cursor-pointer fill-zinc-300",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",viewBox:"0 0 442.04 442.04",xmlSpace:"preserve",children:(0,l.jsxs)("g",{children:[(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203    c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219    c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367    c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021    c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212    c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071    c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"})})," ",(0,l.jsxs)("g",{children:[" ",(0,l.jsx)("path",{d:"M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188    c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993    c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5    s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"})]})," ",(0,l.jsxs)("g",{children:[" ",(0,l.jsx)("path",{d:"M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"})]})," "]})})})})]})]})]},t.download_link)}var u=function(e){let{songs:t,setSongs:s,setLabelText:a}=e;return(0,l.jsx)("section",{className:"flex flex-wrap gap-x-4 gap-y-6 justify-center",children:t.map((e,t)=>(0,l.jsx)(h,{setLabelText:a,setSongs:s,song:e,delay:t},e.download_link))})};function m(){let e=(0,a.useRef)(null),[t,s]=(0,a.useState)([]),[i,o]=(0,a.useState)("");return(0,a.useEffect)(()=>{e.current.continuousStart(),(0,r.Z)("/api/search").then(t=>{s(t.data),e.current.complete()})},[]),(0,l.jsxs)("section",{className:"flex flex-col justify-center items-center mx-auto relative place-items-center min-h-screen bg-black/60 overflow-hidden pb-10",children:[(0,l.jsx)(n.Z,{color:"#cbcbcb",ref:e}),(0,l.jsxs)("div",{className:"max-w-5xl mb-5 my-8",children:[(0,l.jsxs)("div",{className:"my-6 mx-auto w-fit text-center select-none",children:[(0,l.jsx)("p",{className:"font-fancy text-4xl text-center sm:text-5xl md:text-3xl font-bold text-gray-200 -mb-5",children:"Welcome to"}),(0,l.jsx)("h1",{className:"font-fancy text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200",children:"Harmonika"})]}),(0,l.jsx)("div",{className:"mt-6 mb-6",children:(0,l.jsx)(c,{setLabelText:o,setSongs:s})}),i&&(0,l.jsx)("p",{className:"text-gray-100 tracking-wide text-left text-md my-4 left-2 relative",children:i}),(0,l.jsx)(u,{setLabelText:o,songs:t,setSongs:s})]})]})}var p=function(){return(0,l.jsxs)("p",{className:"flex gap-x-1 items-center justify-center font-medium font-normal text-white text-sm py-1 bg-black/80 text-center",children:["Made with ",(0,l.jsx)("span",{className:"text-xl text-[#e25555]",children:"❤"})," by ",(0,l.jsx)("a",{className:"underline",target:"_blank",href:"https://shreyansh-gupta.vercel.app/",children:"Shreyansh Gupta"})]})};function f(){let[e,t]=(0,a.useState)("");return(0,l.jsxs)("main",{className:"relative",children:[(0,l.jsx)("div",{className:"filter blur-[10px] absolute inset-0 w-full -z-10",style:{backgroundImage:"url('".concat("https://w0.peakpx.com/wallpaper/476/955/HD-wallpaper-colorful-lines-abstract-art-dark-backgrounds-creative-lines-background-with-lines.jpg","')")}}),(0,l.jsx)(m,{}),(0,l.jsx)(p,{})]})}}},function(e){e.O(0,[195,971,23,744],function(){return e(e.s=1004)}),_N_E=e.O()}]);
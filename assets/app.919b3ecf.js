var _t=Object.defineProperty,mt=Object.defineProperties;var pt=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var B=(t,e,n)=>e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Y=(t,e)=>{for(var n in e||(e={}))ut.call(e,n)&&B(t,n,e[n]);if(H)for(var n of H(e))dt.call(e,n)&&B(t,n,e[n]);return t},Z=(t,e)=>mt(t,pt(e));import{c as ht,N,a as q,o as r,b as c,d as o,e as h,f as v,g as M,u as L,r as y,t as g,h as m,i as l,w as u,j,k as F,F as k,l as E,m as O,n as I,p as gt,q as W,s as G,v as K,x as ft,y as vt,z as wt,A as xt,B as bt,C as U,D as R,E as $t,G as yt,V as kt}from"./vendor.e22f72d7.js";const zt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const _ of s)if(_.type==="childList")for(const i of _.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const _={};return s.integrity&&(_.integrity=s.integrity),s.referrerpolicy&&(_.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?_.credentials="include":s.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function a(s){if(s.ep)return;s.ep=!0;const _=n(s);fetch(s.href,_)}};zt();var Lt={about:t=>{const{normalize:e}=t;return e(["About"])},"not-found":t=>{const{normalize:e}=t;return e(["Not found"])},categories:{misc:t=>{const{normalize:e}=t;return e(["Misc"])},ling:t=>{const{normalize:e}=t;return e(["Ling"])},comp:t=>{const{normalize:e}=t;return e(["Computer"])},math:t=>{const{normalize:e}=t;return e(["Math"])},roam:t=>{const{normalize:e}=t;return e(["Travel"])}},genre:{posts:t=>{const{normalize:e}=t;return e(["Posts"])},notes:t=>{const{normalize:e}=t;return e(["Notes"])},sheets:t=>{const{normalize:e}=t;return e(["Sheets"])}},empty:t=>{const{normalize:e}=t;return e(["Nothing here"])},"empty-aphorism":t=>{const{normalize:e}=t;return e([`"I am ashamed of my emptiness," said the Word to the Work.
"I know how poor I am when I see you," said the Work to the Word.
(Stray Birds, Rabindranath Tagore, 138)
`])},archive:t=>{const{normalize:e}=t;return e(["Archive"])},friends:t=>{const{normalize:e}=t;return e(["Friends"])},button:{toggleDark:t=>{const{normalize:e}=t;return e(["Toggle Dark Mode"])},toggleLocale:t=>{const{normalize:e}=t;return e(["Toggle Language"])}}},At=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lt}),Et={button:{toggleLocale:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u8BED\u8A00"])},toggleDark:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u6697\u8272\u6A21\u5F0F"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u672A\u627E\u5230"])},empty:t=>{const{normalize:e}=t;return e(["\u8FD9\u91CC\u662F\u7A7A\u7684"])},"empty-aphorism":t=>{const{normalize:e}=t;return e([`\u672C\u6765\u65E0\u4E00\u7269
\u4F55\u5904\u60F9\u5C18\u57C3
`])},categories:{misc:t=>{const{normalize:e}=t;return e(["\u6742\u8C08"])},ling:t=>{const{normalize:e}=t;return e(["\u8BED\u8A00\u5B66"])},comp:t=>{const{normalize:e}=t;return e(["\u4FE1\u606F\u5B66"])},math:t=>{const{normalize:e}=t;return e(["\u6570\u5B66"])},roam:t=>{const{normalize:e}=t;return e(["\u65C5\u884C"])}},genre:{posts:t=>{const{normalize:e}=t;return e(["\u6587\u7AE0"])},notes:t=>{const{normalize:e}=t;return e(["\u7B14\u8BB0"])},sheets:t=>{const{normalize:e}=t;return e(["\u6E05\u5355"])}},about:t=>{const{normalize:e}=t;return e(["\u5173\u4E8E"])},archive:t=>{const{normalize:e}=t;return e(["\u5F52\u6863"])},friends:t=>{const{normalize:e}=t;return e(["\u670B\u53CB"])}},Tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Et});const Mt=Object.fromEntries(Object.entries({"../../locales/en.yml":At,"../../locales/zh-Hans.yml":Tt}).map(([t,e])=>{const n=t.endsWith(".yaml");return[t.slice(14,n?-5:-4),e.default]})),jt=({app:t})=>{const e=ht({legacy:!1,locale:"en",messages:Mt,datetimeFormats:{iso:{short:{year:"numeric",month:"2-digit",day:"2-digit"},monthDay:{month:"2-digit",day:"2-digit"}}}});t.use(e)};var Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:jt});const Vt=({isClient:t,router:e})=>{t&&(e.beforeEach(()=>{N.start()}),e.afterEach(()=>{N.done()}))};var Ot=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Vt});const It=({isClient:t,initialState:e,app:n})=>{const a=q();n.use(a),t?a.state.value=e.pinia||{}:e.pinia=a.state.value};var Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:It});const Pt="modulepreload",Q={},St="/",p=function(e,n){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=`${St}${a}`,a in Q)return;Q[a]=!0;const s=a.endsWith(".css"),_=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${_}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":Pt,s||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),s)return new Promise((d,b)=>{i.addEventListener("load",d),i.addEventListener("error",b)})})).then(()=>e())},Dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ht=o("path",{d:"M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6z",fill:"currentColor"},null,-1),Bt=[Ht];function Yt(t,e){return r(),c("svg",Dt,Bt)}var Zt={name:"mdi-file",render:Yt},w=(t,e)=>{const n=t.__vccOpts||t;for(const[a,s]of e)n[a]=s;return n};const Nt={};function qt(t,e){const n=Zt;return r(),h(n)}var J=w(Nt,[["render",qt]]);const Ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Wt=o("path",{d:"M4 3h16a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 4v3h4V7H4m6 0v3h4V7h-4m10 3V7h-4v3h4M4 12v3h4v-3H4m0 8h4v-3H4v3m6-8v3h4v-3h-4m0 8h4v-3h-4v3m10 0v-3h-4v3h4m0-8h-4v3h4v-3z",fill:"currentColor"},null,-1),Gt=[Wt];function Kt(t,e){return r(),c("svg",Ft,Gt)}var Ut={name:"mdi-table-large",render:Kt};const Qt={};function Jt(t,e){const n=Ut;return r(),h(n)}var X=w(Qt,[["render",Jt]]);const Xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},te=o("path",{d:"M14 10V4.5l5.5 5.5M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9l-6-6H5z",fill:"currentColor"},null,-1),ee=[te];function ne(t,e){return r(),c("svg",Xt,ee)}var oe={name:"mdi-note",render:ne};const se={};function re(t,e){const n=oe;return r(),h(n)}var tt=w(se,[["render",re]]);const et=v({props:{genre:null},setup(t){return(e,n)=>{const a=J,s=X,_=tt;return t.genre==="posts"?(r(),h(a,{key:0})):t.genre==="sheets"?(r(),h(s,{key:1})):t.genre==="notes"?(r(),h(_,{key:2})):M("",!0)}}}),ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ie=o("path",{d:"M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.39 3.39 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.39 3.39 0 0 0 15 11a3.5 3.5 0 0 0 0-7z",fill:"currentColor"},null,-1),ce=[ie];function le(t,e){return r(),c("svg",ae,ce)}var _e={name:"mdi-account-multiple",render:le};const me=["lang"],pe={class:"font-mono"},ue={class:"transition-lively"},de=v({props:{article:null,hide:null},setup(t){var s;const e=t,{d:n}=L(),a=(s=e.article.frontmatter.lang)!=null?s:"zh-Hans";return(_,i)=>{const d=y("router-link");return r(),c("article",{class:"flex items-start gap-2 items-center rounded",lang:m(a)},[o("time",pe,g(m(n)(t.article.frontmatter.date,"monthDay","iso")),1),o("h2",ue,[l(d,{to:t.article.path},{default:u(()=>[j(g(t.article.frontmatter.title),1)]),_:1},8,["to"])])],8,me)}}});var he=w(de,[["__scopeId","data-v-30267d44"]]);const ge={},fe={class:"inline-block text-xs rounded px-2 py-1 font-mono font-bold transition-lively"};function ve(t,e){return r(),c("span",fe,[F(t.$slots,"default")])}var we=w(ge,[["render",ve]]);const xe={class:"flex flex-wrap gap-x-1 gap-y-0.5 justify-start items-center"},be={key:0,class:"flex justify-center text-lg"},$e={class:"flex gap-1 justify-center items-center"},ye={class:"flex gap-1 justify-center items-center"},ke={class:"flex gap-1 justify-center items-center"},ze={class:"flex gap-1 justify-center items-center"},Le=v({props:{article:null,hide:null},setup(t){var i;const e=t,{t:n,d:a,locale:s}=L(),_=(i=e.article.frontmatter.lang)!=null?i:"zh-Hans";return(d,b)=>{var A;const T=et,z=y("router-link"),$=we;return r(),c("div",xe,[((A=t.hide)==null?void 0:A.genre)?M("",!0):(r(),c("span",be,[l(z,{to:`/${t.article.genre}`},{default:u(()=>[l(T,{class:"transition-lively hover:text-acc",genre:t.article.genre},null,8,["genre"])]),_:1},8,["to"])])),o("span",$e,[l($,{class:"ring-inset ring-2 ring-fgd"},{default:u(()=>[o("time",null,g(m(a)(t.article.frontmatter.date,"short","iso")),1)]),_:1}),m(_)!==m(s)?(r(),h($,{key:0,class:"ring-inset ring-2 ring-fgd"},{default:u(()=>[j(g(m(_)),1)]),_:1})):M("",!0)]),o("span",ye,[l($,{class:"ring-inset ring-2 ring-acc text-acc hover:bg-acc hover:text-bgd"},{default:u(()=>[l(z,{to:`/categories/${t.article.frontmatter.category}`},{default:u(()=>[j(g(m(n)(`categories.${t.article.frontmatter.category}`)),1)]),_:1},8,["to"])]),_:1})]),o("span",ke,[(r(!0),c(k,null,E(t.article.frontmatter.tags,x=>(r(),h($,{key:x,class:"ring-inset ring-2 ring-sec text-sec hover:bg-sec hover:text-bgd"},{default:u(()=>[l(z,{to:{path:"/tags",query:{tag:x}}},{default:u(()=>[j(" @"+g(x),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),o("span",ze,[(r(!0),c(k,null,E(t.article.frontmatter.keywords,x=>(r(),h($,{key:x,class:"text-dim !px-0"},{default:u(()=>[o("span",null," #"+g(x),1)]),_:2},1024))),128))])])}}});var Ae=w(Le,[["__scopeId","data-v-46efa071"]]);const Ee=["lang"],Te={class:"mb-0.5 text-xl font-bold transition-lively"},Me=v({props:{article:null,hide:null},setup(t){var a;const n=(a=t.article.frontmatter.lang)!=null?a:"zh-Hans";return(s,_)=>{const i=y("router-link"),d=Ae;return r(),c("article",{class:"flex flex-col items-start gap-1 rounded",lang:m(n)},[o("div",null,[l(i,{class:"card-article-text",to:`${t.article.path}`},{default:u(()=>[o("h2",Te,g(t.article.frontmatter.title),1),o("p",null,g(t.article.excerpt),1)]),_:1},8,["to"])]),l(d,{article:t.article,hide:t.hide},null,8,["article","hide"])],8,Ee)}}});var je=w(Me,[["__scopeId","data-v-3a0f14cc"]]);const Ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ve=o("path",{d:"M19.36 2.72l1.42 1.42l-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32l5.71-5.72M5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09l7.44 7.44l-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58z",fill:"currentColor"},null,-1),Oe=[Ve];function Ie(t,e){return r(),c("svg",Ce,Oe)}var Re={name:"mdi-broom",render:Ie};const Pe=o("br",null,null,-1),Se={class:"text-lg"},De=o("br",null,null,-1),He={class:"text-dim whitespace-pre"},Be=v({setup(t){const{t:e}=L();return(n,a)=>{const s=Re;return r(),c("div",null,[l(s,{class:"text-4xl"}),Pe,o("span",Se,g(m(e)("empty")),1),De,o("span",He,g(m(e)("empty-aphorism")),1)])}}}),Ye={key:0},Ze={key:0,class:"flex flex-col gap-2"},Ne={key:1,class:"flex flex-col gap-4"},qe={key:1},Fe=v({props:{articles:null,compact:{type:Boolean}},setup(t){return(e,n)=>{const a=he,s=je,_=Be;return t.articles.length?(r(),c("section",Ye,[t.compact?(r(),c("ul",Ze,[(r(!0),c(k,null,E(t.articles,(i,d)=>(r(),h(a,{key:d,article:i},null,8,["article"]))),128))])):(r(),c("ul",Ne,[(r(!0),c(k,null,E(t.articles,(i,d)=>(r(),h(s,{key:d,article:i},null,8,["article"]))),128))]))])):(r(),c("section",qe,[l(_)]))}}}),We={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ge=o("path",{d:"M14 17H7v-2h7m3-2H7v-2h10m0-2H7V7h10m2-4H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z",fill:"currentColor"},null,-1),Ke=[Ge];function Ue(t,e){return r(),c("svg",We,Ke)}var nt={name:"mdi-text-box",render:Ue};const Qe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Je=o("path",{d:"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z",fill:"currentColor"},null,-1),Xe=[Je];function tn(t,e){return r(),c("svg",Qe,Xe)}var en={name:"mdi-home",render:tn};const nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},on=o("path",{d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z",fill:"currentColor"},null,-1),sn=[on];function rn(t,e){return r(),c("svg",nn,sn)}var ot={name:"mdi-github",render:rn};const an=["src"],cn={class:"col-start-2"},ln={class:"col-start-3 flex gap-2 justify-start"},_n=["href"],mn=["href"],pn=v({props:{friend:null},setup(t){return(e,n)=>{const a=en,s=ot;return r(),c(k,null,[o("img",{class:"block col-start-1 w-[2em] h-[2em] rounded-[50%]",src:t.friend.avatar},null,8,an),o("span",cn,g(t.friend.name),1),o("span",ln,[o("a",{href:t.friend.blog,target:"_blank"},[l(a)],8,_n),o("a",{href:t.friend.link,target:"_blank"},[l(s)],8,mn)])],64)}}}),P=O(),un=I(()=>P.value?`${P.value} | Pak`:"Pak"),st=gt("store",()=>{const t=O([]),e=O("");return{articles:t,title:e,setTitle:s=>{e.value=s?`${s} | Pak`:"Pak"},generateArticles:s=>{var _;t.value=(_=s.filter(({path:i})=>i.match(/(posts|sheets|notes)\/.+/)))==null?void 0:_.map(i=>i.children[0].meta).sort((i,d)=>d.timestamp-i.timestamp)}}});var dn={friends:[{name:"Allan Chain",avatar:"https://avatars.githubusercontent.com/u/36528777?s=400&u=958f1c8e4c303df99a0c1e910bd416f09f56681d&v=4",link:"https://github.com/AllanChain",blog:"https://allanchain.github.io/blog/"},{name:"Alice_space",avatar:"https://avatars.githubusercontent.com/u/47878052?s=400&u=0f94d94011530258f7920397fabdd824329787a8&v=4",link:"https://github.com/Alice-space",blog:"https://alicespace.cn/"},{name:"ZincCat",avatar:"https://avatars.githubusercontent.com/u/52513999?s=400&v=4",link:"https://github.com/zinccat",blog:"https://zinccat.github.io/"},{name:"BicPotato",avatar:"https://avatars.githubusercontent.com/u/73098821?v=4",link:"https://github.com/bic-potato",blog:"https://blog.bicpotato.net/"}]},hn=dn.friends;const rt=t=>(ft("data-v-c8d5b068"),t=t(),vt(),t),gn=rt(()=>o("h1",{class:"mt-4"}," Pak ",-1)),fn=rt(()=>o("p",{class:"mb-8 italic"}," This is a bl\u043Eg, not a bl\u03BFg. ",-1)),vn={class:"flex flex-col gap-8"},wn={class:"flex gap-2"},xn=["onClick"],bn={key:0},$n={key:1,class:"flex flex-col gap-2"},yn={class:"text-xl font-bold"},kn={class:"grid grid-cols-[auto,auto,1fr] gap-2 items-center"},zn=v({setup(t){P.value=null,W({meta:[{name:"description",content:"Yixuan Wang's personal blog"}]});const e=st(),{t:n}=L(),a=G({posts:!0,sheets:!0,notes:!0}),s=G({friends:!0}),_=I(()=>d=>a==null?void 0:a[d.genre]),i=I(()=>e.articles.filter(_.value));return(d,b)=>{const T=et,z=_e,$=Fe,A=nt,x=y("router-link"),V=pn;return r(),c(k,null,[gn,fn,o("div",vn,[o("div",wn,[(r(!0),c(k,null,E(Object.keys(m(a)),f=>(r(),c("button",{key:f,onClick:D=>m(a)[f]=!m(a)[f]},[l(T,{class:K({"genre-hide":!m(a)[f]}),genre:f},null,8,["class","genre"])],8,xn))),128)),o("button",{onClick:b[0]||(b[0]=f=>m(s).friends=!m(s).friends)},[l(z,{class:K({"genre-hide":!m(s).friends})},null,8,["class"])])]),l($,{articles:m(i).slice(0,10)},null,8,["articles"]),m(i).length>=10&&Object.values(m(a)).every(f=>f)?(r(),c("button",bn,[l(x,{to:"/archive",class:"flex gap-1 items-center"},{default:u(()=>[l(A,{class:"text-lg"}),o("span",null,g(m(n)("archive")),1)]),_:1})])):M("",!0),m(s).friends?(r(),c("div",$n,[o("h2",yn,g(m(n)("friends")),1),o("li",kn,[(r(!0),c(k,null,E(m(hn),f=>(r(),h(V,{key:f.name,friend:f},null,8,["friend"]))),128))])])):M("",!0)])],64)}}});var Ln=w(zn,[["__scopeId","data-v-c8d5b068"]]);const An=[{path:"/about",component:()=>p(()=>import("./about.603fd438.js"),["assets/about.603fd438.js","assets/about-en.96a763d5.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js","assets/about-zh-Hans.96c8b076.js"]),children:[{name:"about-about-en",path:"about-en",component:()=>p(()=>import("./about-en.96a763d5.js").then(function(t){return t._}),["assets/about-en.96a763d5.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0},{name:"about-about-zh-Hans",path:"about-zh-hans",component:()=>p(()=>import("./about-zh-Hans.96c8b076.js").then(function(t){return t._}),["assets/about-zh-Hans.96c8b076.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0}],props:!0,meta:{layout:"default"}},{name:"archive",path:"/archive",component:()=>p(()=>import("./archive.42643f40.js"),["assets/archive.42643f40.js","assets/vendor.e22f72d7.js"]),props:!0},{name:"index",path:"/",component:Ln,props:!0,meta:{layout:"home"}},{name:"tags",path:"/tags",component:()=>p(()=>import("./tags.8d3f6b22.js"),["assets/tags.8d3f6b22.js","assets/TheTaxonomy.fed73ee5.js","assets/vendor.e22f72d7.js"]),props:!0},{name:"genre-notes",path:"/genre/notes",component:()=>p(()=>import("./notes.483a7472.js"),["assets/notes.483a7472.js","assets/TheTaxonomy.fed73ee5.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{alias:"/notes"},alias:"/notes"},{name:"genre-posts",path:"/genre/posts",component:()=>p(()=>import("./posts.f5cbdab8.js"),["assets/posts.f5cbdab8.js","assets/TheTaxonomy.fed73ee5.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{alias:"/posts"},alias:"/posts"},{name:"genre-sheets",path:"/genre/sheets",component:()=>p(()=>import("./sheets.9ca2f16b.js"),["assets/sheets.9ca2f16b.js","assets/TheTaxonomy.fed73ee5.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{alias:"/sheets"},alias:"/sheets"},{name:"dialect-zho-septipartite",path:"/posts/dialect-zho-septipartite",component:()=>p(()=>import("./comp_dialect-zho-septipartite.2d25d075.js"),["assets/comp_dialect-zho-septipartite.2d25d075.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"dialect-zho-septipartite",path:"/posts/dialect-zho-septipartite",frontmatter:{title:"\u6C49\u8BED\u65B9\u8A00\u7684\u4E03\u5206\u6CD5",date:"2021-12-27T06:12:00.000Z",category:"ling",tags:["comparative","dialectology"],keywords:["chinese"]},excerpt:"\u6C49\u8BED\u65B9\u8A00\u4F20\u7EDF\u4E0A\u91C7\u7528\u4E03\u5206\u6CD5\u3002 \u5B98\u8BDD\u662F\u552F\u4E00\u7684\u5317\u65B9\u65B9\u8A00\uFF0C\u6E58\u8BED\u548C\u8D63\u8BED\u662F\u5E26\u6709\u5317\u65B9\u65B9\u8A00\u7279\u5F81\u7684\u5357\u65B9\u65B9\u8A00\uFF0C\u5434\u8BED\u3001\u5BA2\u5BB6\u8BDD\u3001\u7CA4\u8BED\u548C\u95FD\u8BED\u662F\u5357\u65B9\u65B9\u8A00\u3002",genre:"posts",timestamp:164058552e4}},{name:"leipzig-glossing",path:"/posts/leipzig-glossing",component:()=>p(()=>import("./comp_leipzig-glossing.323111a0.js"),["assets/comp_leipzig-glossing.323111a0.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"leipzig-glossing",path:"/posts/leipzig-glossing",frontmatter:{title:"\u83B1\u6BD4\u9521\u6807\u6CE8\u6CD5",date:"2021-08-03T15:14:00.000Z",category:"ling",tags:["comparative"],keywords:["fieldworks"],novue:!0},excerpt:"\u83B1\u6BD4\u9521\u6807\u6CE8\u6CD5\uFF08Leipzig Glossing Rules\uFF09\u662F\u4EE5\u8BED\u7D20\u4E3A\u5355\u4F4D\uFF0C\u6807\u6CE8\u8BED\u6599\u5F62\u6001\u7684\u4F53\u7CFB\u3002\u672C\u6587\u7B80\u5355\u7FFB\u8BD1\u5176\u89C4\u5219\uFF0C\u65B9\u4FBF\u67E5\u9605\u3002",genre:"posts",timestamp:162800364e4}},{name:"zho-nasal-coda",path:"/posts/zho-nasal-coda",component:()=>p(()=>import("./comp_zho-nasal-coda.2fc9d87a.js"),["assets/comp_zho-nasal-coda.2fc9d87a.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"zho-nasal-coda",path:"/posts/zho-nasal-coda",frontmatter:{title:"\u6C49\u8BED\u65B9\u8A00\u7684\u9F3B\u97F3\u97F5\u5C3E\u6570\u91CF",date:"2020-07-16T03:48:00.000Z",category:"ling",tags:["comparative","dialectology"],keywords:["chinese"]},excerpt:"\u6C49\u8BED\u666E\u901A\u8BDD\u6709\u4E24\u4E2A\u9F3B\u97F3\u97F5\u5C3E\u97F3\u4F4D\uFF0C\u5434\u8BED\u82CF\u5DDE\u8BDD\u6709\u4E00\u4E2A\uFF0C\u7CA4\u8BED\u5E7F\u5E9C\u8BDD\u6709\u4E09\u4E2A\u3002",genre:"posts",timestamp:159487128e4}},{name:"del-bst",path:"/posts/del-bst",component:()=>p(()=>import("./dsa_del-bst.2bce466f.js"),["assets/dsa_del-bst.2bce466f.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"del-bst",path:"/posts/del-bst",frontmatter:{title:"\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u5220\u9664\u7ED3\u70B9\u64CD\u4F5C",date:"2020-09-18T02:48:00.000Z",category:"comp",tags:["dsa"],keywords:["bst"],math:!0},excerpt:"\u4E8C\u53C9\u641C\u7D22\u6811\u5220\u9664\u7ED3\u70B9\u7684\u64CD\u4F5C\u5B9E\u9645\u4E0A\u662F\u4E00\u79CD\u65CB\u8F6C\u3002",genre:"posts",timestamp:160039728e4}},{name:"kmp",path:"/posts/kmp",component:()=>p(()=>import("./dsa_kmp.a738f91e.js"),["assets/dsa_kmp.a738f91e.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"kmp",path:"/posts/kmp",frontmatter:{title:"KMP \u7B97\u6CD5",date:"2020-06-11T13:39:02.000Z",category:"comp",tags:["dsa"],keywords:["string"],math:!0},excerpt:"KMP \u7B97\u6CD5\u662F\u5229\u7528\u91CD\u590D\u7247\u6BB5\u8FDB\u884C\u4F18\u5316\u7684\uFF0C\u65E0\u56DE\u6EAF\u7684\u5B57\u7B26\u4E32\u5339\u914D\u7B97\u6CD5\u3002",genre:"posts",timestamp:1591882742e3}},{name:"blogging-nontech",path:"/posts/blogging-nontech",component:()=>p(()=>import("./essay_blogging-nontech.25f41c0b.js"),["assets/essay_blogging-nontech.25f41c0b.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"blogging-nontech",path:"/posts/blogging-nontech",frontmatter:{title:"\u642D\u5EFA\u535A\u5BA2\u7684\u975E\u6280\u672F\u6027\u601D\u8003",date:"2020-10-05T07:31:57.000Z",category:"misc",tags:["essay"]},excerpt:"\u642D\u5EFA\u535A\u5BA2\u65F6\u8003\u8651\u7684\u975E\u6280\u672F\u7684\u3001\u5F62\u800C\u4E0A\u7684\u95EE\u9898\u3002",genre:"posts",timestamp:1601883117e3}},{name:"blogging-tech",path:"/posts/blogging-tech",component:()=>p(()=>import("./essay_blogging-tech.ef635dfb.js"),["assets/essay_blogging-tech.ef635dfb.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"blogging-tech",path:"/posts/blogging-tech",frontmatter:{title:"\u642D\u5EFA\u535A\u5BA2\u7684\u6280\u672F\u6027\u601D\u8003",date:"2020-10-11T00:00:00.000Z",category:"misc",tags:["essay","frontend"]},excerpt:"\u642D\u5EFA\u9759\u6001\u535A\u5BA2\u65F6\u8003\u8651\u7684\u6280\u672F\u7684\u7684\u95EE\u9898\u3002",genre:"posts",timestamp:16023744e5}},{name:"tailwindcss-tentative",path:"/posts/tailwindcss-tentative",component:()=>p(()=>import("./front_tailwindcss-tentative.9575798b.js"),["assets/front_tailwindcss-tentative.9575798b.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"tailwindcss-tentative",path:"/posts/tailwindcss-tentative",frontmatter:{title:"Tailwind CSS \u521D\u63A2",date:"2021-02-04T00:00:00.000Z",category:"comp",tags:["frontend"],keywords:["CSS"]},excerpt:"Tailwind CSS \u4ECE\u771F\u9999\u5230\u653E\u5F03\u7684\u4E2A\u4EBA\u7ECF\u5386\u3002",genre:"posts",timestamp:16123968e5}},{name:"pku-bell-manchu-inscription",path:"/posts/pku-bell-manchu-inscription",component:()=>p(()=>import("./lang_pku-bell-manchu-inscription.76a2a8ee.js"),["assets/lang_pku-bell-manchu-inscription.76a2a8ee.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"pku-bell-manchu-inscription",path:"/posts/pku-bell-manchu-inscription",frontmatter:{title:"\u5317\u5927\u949F\u4EAD\u7684\u6EE1\u6587\u94ED\u6587",date:"2020-10-12T00:00:00.000Z",category:"ling",tags:["language"],keywords:["manchu","script"]},excerpt:"\u5317\u5927\u949F\u4EAD\u91CC\u7684\u90A3\u53E3\u949F\u662F\u6E05\u671D\u7684\u9057\u7269\uFF0C\u5728\u5317\u4FA7\u523B\u6709\u6EE1\u6587\u94ED\u6587\u3002",genre:"posts",timestamp:16024608e5}},{name:"common-designs",path:"/posts/common-designs",component:()=>p(()=>import("./phil_common-designs.4ca4360a.js"),["assets/phil_common-designs.4ca4360a.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"common-designs",path:"/posts/common-designs",frontmatter:{title:"\u4EBA\u7C7B\u8BED\u8A00\u7684\u5171\u6027",date:"2020-09-30T06:22:00.000Z",category:"ling",tags:["lang-phil"],keywords:["structuralism","saussurean"]},excerpt:"\u4EBA\u7C7B\u8BED\u8A00\u5B58\u5728\u4E00\u4E9B\u5171\u6027\u7684\u672C\u8D28\u7279\u5F81\u3002",genre:"posts",timestamp:160144692e4}},{name:"bibli-with-md",path:"/posts/bibli-with-md",component:()=>p(()=>import("./soft_bibli-with-md.6a44fd33.js"),["assets/soft_bibli-with-md.6a44fd33.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"bibli-with-md",path:"/posts/bibli-with-md",frontmatter:{title:"\u5728 Markdown \u4E2D\u5F15\u7528\u53C2\u8003\u6587\u732E",date:"2020-12-30T15:05:00.000Z",category:"comp",tags:["softwares"],keywords:["markdown","bibliography"]},excerpt:"\u501F\u52A9 Pandoc\uFF0C\u5728 Markdown \u4E2D\u5F15\u7528\u53C2\u8003\u6587\u732E\u975E\u5E38\u65B9\u4FBF\u3002",genre:"posts",timestamp:16093407e5}},{name:"test-content",path:"/posts/test-content",component:()=>p(()=>import("./test_test-content.464ac77f.js"),["assets/test_test-content.464ac77f.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"test-content",path:"/posts/test-content",frontmatter:{title:"\u9875\u9762\u5185\u5BB9\u6D4B\u8BD5",date:"2021-02-14",category:"misc",tags:["test"]},excerpt:"\u9875\u9762\u5185\u5BB9\u6E32\u67D3\u6548\u679C\u7684\u6D4B\u8BD5\uFF0C\u517C\u4F5C Markdown \u53C2\u8003\u3002",genre:"posts",timestamp:16132608e5}},{name:"test-vertical",path:"/posts/test-vertical",component:()=>p(()=>import("./test_test-vertical.25e7a48e.js"),["assets/test_test-vertical.25e7a48e.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"test-vertical",path:"/posts/test-vertical",frontmatter:{title:"\u7AD6\u6392\u663E\u793A\u6D4B\u8BD5",date:"2020-05-05",category:"misc",tags:["test","frontend"]},excerpt:"\u5B66\u4E60\u5C42\u53E0\u6837\u5F0F\u8868\u65F6\u7684\u73A9\u800D\uFF1A\u7AD6\u6392\u300A\u5343\u5B57\u6587\u300B\u3002",genre:"posts",timestamp:15886368e5}},{name:"21-chongqing",path:"/posts/21-chongqing",component:()=>p(()=>import("./travel_21-chongqing.ea29f58d.js"),["assets/travel_21-chongqing.ea29f58d.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{name:"21-chongqing",path:"/posts/21-chongqing",frontmatter:{title:"\u91CD\u5E86",date:"2021-07-18T08:00:00.000Z",category:"roam",tags:["travel"],keywords:["chongqing"]},excerpt:"2021 \u5E74\u6691\u5047\u91CD\u5E86\u4E4B\u884C\u7684\u6E38\u8BB0\u3002",genre:"posts",timestamp:16265952e5}},{name:"categories-category",path:"/categories/:category",component:()=>p(()=>import("./_category_.4c1ed68a.js"),["assets/_category_.4c1ed68a.js","assets/TheTaxonomy.fed73ee5.js","assets/vendor.e22f72d7.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>p(()=>import("./_...all_.306688c0.js"),["assets/_...all_.306688c0.js","assets/vendor.e22f72d7.js"]),props:!0,meta:{layout:404}}],En=[{name:"test-issues",path:"/notes/test-issues",component:()=>p(()=>import("./test-issues.7a495153.js"),["assets/test-issues.7a495153.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),meta:{name:"test-issues",path:"/notes/test-issues",frontmatter:{title:"Issues \u6D4B\u8BD5",date:"2021-02-19",category:"misc",tags:["test"]},excerpt:"Issues API \u7684\u6D4B\u8BD5\u3002",genre:"notes",timestamp:16136928e5},props:!0},{name:"saussure-general-linguistics",path:"/notes/saussure-general-linguistics",component:()=>p(()=>import("./saussure-general-linguistics.115b4534.js"),["assets/saussure-general-linguistics.115b4534.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),meta:{name:"saussure-general-linguistics",path:"/notes/saussure-general-linguistics",frontmatter:{title:"\u7D22\u7EEA\u5C14\u300A\u666E\u901A\u8BED\u8A00\u5B66\u6559\u7A0B\u300B\u8BFB\u4E66\u7B14\u8BB0",date:"2021-09-10T00:00:00.000Z",category:"ling",tags:["lang-phil"],keywords:["structuralism","saussurian"]},excerpt:"\u73B0\u4EE3\u8BED\u8A00\u5B66\u53CA\u7ED3\u6784\u4E3B\u4E49\u8BED\u8A00\u5B66\u5F00\u5C71\u4E4B\u4F5C\u300A\u666E\u901A\u8BED\u8A00\u5B66\u6559\u7A0B\u300B\u7684\u8BFB\u4E66\u7B14\u8BB0\u3002",genre:"notes",timestamp:1631232e6},props:!0},{name:"cpp-practice-of-programming",path:"/notes/cpp-practice-of-programming",component:()=>p(()=>import("./cpp-practice-of-programming.7dbc71b8.js"),["assets/cpp-practice-of-programming.7dbc71b8.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),meta:{name:"cpp-practice-of-programming",path:"/notes/cpp-practice-of-programming",frontmatter:{title:"\u7A0B\u8BBE C++ \u7B14\u8BB0",date:"2021-06-26T00:00:00.000Z",category:"comp",tags:["cpp"]},excerpt:"\u7A0B\u8BBE\u8BFE\u7684 C++ \u7B14\u8BB0\u3002\u4E0A\u534A\u5B66\u671F\u662F\u8BED\u6CD5\u53CA STL\uFF0C\u4E0B\u534A\u5B66\u671F\u662F\u7B97\u6CD5\u57FA\u7840\u3002",genre:"notes",timestamp:16246656e5},props:!0},{name:"favorites-stackoverflow",path:"/sheets/favorites-stackoverflow",component:()=>p(()=>import("./favorites-stackoverflow.52f85466.js"),["assets/favorites-stackoverflow.52f85466.js","assets/TheArticle.fe2e3fe9.js","assets/vendor.e22f72d7.js"]),meta:{name:"favorites-stackoverflow",path:"/sheets/favorites-stackoverflow",frontmatter:{title:"StackOverflow \u95EE\u9898\u6536\u85CF\u5939",date:"2022-01-10T07:07:38Z",category:"comp",tags:["utils","pl","tex"]},excerpt:"\u8BA9\u7A0B\u5E8F\u5458\u5F00\u5FC3\u7684 StackOverflow \u95EE\u9898\uFF0C\u6284\u4E86\u53C8\u6284\u3002",genre:"sheets",timestamp:1641798458e3},props:!0}],Tn={},Mn={class:"mb-8"};function jn(t,e){const n=y("router-view");return r(),c("main",Mn,[l(n)])}var Cn=w(Tn,[["render",jn]]);const Vn={"404":()=>p(()=>import("./404.4e203193.js"),["assets/404.4e203193.js","assets/vendor.e22f72d7.js"]),default:Cn,home:()=>p(()=>import("./home.be254003.js"),["assets/home.be254003.js","assets/vendor.e22f72d7.js"])};function On(t){return t.map(e=>{var n;return{path:e.path,component:Vn[((n=e.meta)==null?void 0:n.layout)||"default"],children:[Z(Y({},e),{path:""})]}})}const In={},Rn={class:"flex justify-between items-center my-4 gap-2"},Pn={class:"inline-block px-2 py-1 rounded bg-acc text-bgd font-bold transition-lively hover:bg-sec"},Sn=j(" Pak "),Dn={class:"flex justify-between items-center gap-3"};function Hn(t,e){const n=y("router-link"),a=nt,s=J,_=X,i=tt;return r(),c("header",Rn,[o("nav",Pn,[l(n,{to:"/"},{default:u(()=>[Sn]),_:1})]),o("nav",Dn,[o("button",null,[l(n,{to:"/archive"},{default:u(()=>[l(a)]),_:1})]),o("button",null,[l(n,{to:"/posts"},{default:u(()=>[l(s)]),_:1})]),o("button",null,[l(n,{to:"/sheets"},{default:u(()=>[l(_)]),_:1})]),o("button",null,[l(n,{to:"/notes"},{default:u(()=>[l(i)]),_:1})])])])}var Bn=w(In,[["render",Hn],["__scopeId","data-v-e4bf1430"]]);const Yn=["href","title"],Zn=v({props:{href:null,title:null},setup(t){return(e,n)=>(r(),c("a",{rel:"noreferrer",href:t.href,target:"_blank",title:t.title},[F(e.$slots,"default")],8,Yn))}}),Nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024"},qn=o("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm-90.7 477.8l-.1 1.5c-1.5 20.4-6.3 43.9-12.9 67.6l24-18.1l71 80.7c9.2 33-3.3 63.1-3.3 63.1l-95.7-111.9v-.1c-8.9 29-20.1 57.3-33.3 84.7c-22.6 45.7-55.2 54.7-89.5 57.7c-34.4 3-23.3-5.3-23.3-5.3c68-55.5 78-87.8 96.8-123.1c11.9-22.3 20.4-64.3 25.3-96.8H264.1s4.8-31.2 19.2-41.7h101.6c.6-15.3-1.3-102.8-2-131.4h-49.4c-9.2 45-41 56.7-48.1 60.1c-7 3.4-23.6 7.1-21.1 0c2.6-7.1 27-46.2 43.2-110.7c16.3-64.6 63.9-62 63.9-62c-12.8 22.5-22.4 73.6-22.4 73.6h159.7c10.1 0 10.6 39 10.6 39h-90.8c-.7 22.7-2.8 83.8-5 131.4H519s12.2 15.4 12.2 41.7H421.3zm346.5 167h-87.6l-69.5 46.6l-16.4-46.6h-40.1V321.5h213.6v387.3zM408.2 611s0-.1 0 0zm216 94.3l56.8-38.1h45.6h-.1V364.7H596.7v302.5h14.1z",fill:"currentColor"},null,-1),Fn=[qn];function Wn(t,e){return r(),c("svg",Nn,Fn)}var Gn={name:"ant-design-zhihu-circle-filled",render:Wn};const Kn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Un=o("path",{d:"M17.71 9.33c.48-.4 1.04-.88 1.29-1.41c-.41.21-.9.34-1.44.41c.5-.36.91-.83 1.12-1.47c-.52.28-1.05.52-1.71.64c-1.55-1.87-5.26-.35-4.6 2.45c-2.61-.16-4.2-1.34-5.52-2.79c-.75 1.22-.1 3.07.79 3.58c-.46-.03-.81-.17-1.14-.33c.04 1.54.89 2.28 2.08 2.68c-.36.07-.76.09-1.14.03c.37 1.07 1.14 1.74 2.46 1.88c-.9.76-2.56 1.29-3.9 1.08c1.15.73 2.46 1.31 4.28 1.23c4.41-.2 7.36-3.36 7.43-7.98M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2z",fill:"currentColor"},null,-1),Qn=[Un];function Jn(t,e){return r(),c("svg",Kn,Qn)}var Xn={name:"mdi-twitter-circle",render:Jn};const to={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},eo=o("path",{d:"M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z",fill:"currentColor"},null,-1),no=[eo];function oo(t,e){return r(),c("svg",to,no)}var so={name:"mdi-information",render:oo};const ro={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ao=o("path",{d:"M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z",fill:"currentColor"},null,-1),io=[ao];function co(t,e){return r(),c("svg",ro,io)}var lo={name:"mdi-earth",render:co};const _o={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},mo=o("path",{d:"M14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9M20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12L20 8.69m-9.15 3.96h2.3L12 9l-1.15 3.65z",fill:"currentColor"},null,-1),po=[mo];function uo(t,e){return r(),c("svg",_o,po)}var ho={name:"mdi-brightness-auto",render:uo};const go={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},fo=o("path",{d:"M12 8a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 10a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12L20 8.69z",fill:"currentColor"},null,-1),vo=[fo];function wo(t,e){return r(),c("svg",go,vo)}var xo={name:"mdi-brightness7",render:wo};const bo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},$o=o("path",{d:"M12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12c0-2.42-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-9.31V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69L23.31 12L20 8.69z",fill:"currentColor"},null,-1),yo=[$o];function ko(t,e){return r(),c("svg",bo,yo)}var zo={name:"mdi-brightness4",render:ko};function at(t,e){if(wt(e))return n=>{e.value=n!=null?n:t[(t.indexOf(e.value)+1)%t.length]};{const n=xt(e);return[n,s=>{n.value=s!=null?s:t[(t.indexOf(n.value)+1)%t.length]}]}}var C;(function(t){t[t.Auto=-1]="Auto",t[t.Light=0]="Light",t[t.Dark=1]="Dark"})(C||(C={}));function Lo(){{const t=bt("(prefers-color-scheme: dark)"),e=U("darkmode",-1,window==null?void 0:window.localStorage,{window,listenToStorageChanges:!0}),n=a=>{const s=window==null?void 0:window.document.querySelector("html");s==null||s.classList.toggle("dark",a===1||a===-1&&t.value)};return R(e,n,{flush:"post"}),R(t,()=>e.value===-1&&n(e.value)),$t(()=>n(e.value)),e}}const S=Lo(),Ao=at([-1,0,1],S),Eo="zh-Hans";function it(t){document.firstElementChild.lang=t}function To(t){{const{locale:e}=t({useScope:"global"}),n=U("locale",Eo,window.localStorage,{window,listenToStorageChanges:!0});yt(n,e),it(n.value),R(n,it)}}function Mo(t){{const{availableLocales:e,locale:n}=t({useScope:"global"});return at(e,n)}}const jo={class:"flex justify-between items-center py-4"},Co={class:"flex justify-between items-center gap-2"},Vo={class:"button_container"},Oo={class:"button_prompt"},Io={class:"inline-block px-1.5 py-0.5 rounded bg-acc text-bgd text-sm font-mono"},Ro={class:"flex justify-between items-center gap-2"},Po={class:"button_container"},So={class:"button_prompt"},Do={class:"inline-block px-1.5 py-0.5 rounded bg-acc text-bgd text-sm font-mono"},Ho=["title"],Bo=["title"],Yo=v({setup(t){const e=Mo(L),{t:n,locale:a}=L(),s="2.0.0-alpha.2";return(_,i)=>{const d=ot,b=Zn,T=Gn,z=Xn,$=so,A=y("router-link"),x=lo,V=ho,f=xo,D=zo,ct=y("client-only");return r(),h(ct,null,{default:u(()=>[o("footer",jo,[o("nav",Co,[o("button",null,[l(b,{href:"https://github.com/Yixuan-Wang",title:"GitHub"},{default:u(()=>[l(d)]),_:1})]),o("button",null,[l(b,{href:"https://www.zhihu.com/people/tom-wang-19-44",title:"Zhihu"},{default:u(()=>[l(T)]),_:1})]),o("button",null,[l(b,{href:"https://twitter.com/tom_yixuan_wang",title:"Twitter"},{default:u(()=>[l(z)]),_:1})]),o("button",Vo,[o("div",Oo,[o("p",Io," v"+g(m(s)),1)]),l(A,{to:"/about"},{default:u(()=>[l($)]),_:1})])]),o("nav",Ro,[o("button",Po,[o("div",So,[o("span",Do,g(m(a)),1)]),o("a",{title:m(n)("button.toggleLocale"),onClick:i[0]||(i[0]=lt=>m(e)())},[l(x)],8,Ho)]),o("button",{title:m(n)("button.toggleDark"),onClick:i[1]||(i[1]=lt=>m(Ao)())},[m(S)===m(C).Auto?(r(),h(V,{key:0})):m(S)===m(C).Light?(r(),h(f,{key:1})):(r(),h(D,{key:2}))],8,Bo)])])]),_:1})}}});var Zo=w(Yo,[["__scopeId","data-v-574a054b"]]);const No={class:"text-left"},qo=v({setup(t){return To(L),W({title:un}),(e,n)=>{const a=Bn,s=y("router-view"),_=Zo;return r(),c(k,null,[l(a),o("main",No,[l(s)]),l(_)],64)}}});const Fo=On([...An,...En]),Wo=(t,e,n)=>n||{top:0};kt(qo,{routes:Fo,scrollBehavior:Wo},t=>{Object.values({"./modules/i18n.ts":Ct,"./modules/nprogress.ts":Ot,"./modules/pinia.ts":Rt}).map(_=>{var i;return(i=_.install)==null?void 0:i.call(_,t)});const{app:e,routes:n}=t,a=q();e.use(a),st(a).generateArticles(n)});export{Ae as _,Fe as a,Be as b,w as c,P as p,st as u};

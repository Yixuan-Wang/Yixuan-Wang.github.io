import{d as T,g as E,u as k,n as _,_ as x,h as y,i as h,r as w,j as H,k as v,o as a,c as i,a as l,t as V,b,e as A,l as p,F as B,m as L,p as I,q as M}from"./app.5fa76bb0.js";const N={key:0,class:"flex flex-col justify-start items-start gap-2 mt-4 mb-8"},R={key:1,m:"t-4 b-8"},W=["href"],C=I("::"),O=["innerHTML"],P=["innerHTML"],q=T({__name:"TheArticle",props:{frontmatter:null,inner:null},setup(c){const m=c,o=E();m.frontmatter.title&&k({title:`${m.frontmatter.title} | Pak`,meta:[{name:"description",content:o.meta.excerpt}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css",integrity:"sha384-zTROYFVGOfTw7JV7KUu8udsvW2fx4lWOsCEDqhBreBwlHI4ioVRtmIvEThzJHGET",crossorigin:"anonymous"}]}),_(async()=>{const{unoify:s}=await x(()=>import("./uno.cad89ea9.js"),[]),e=await s(m.inner);y(e)}),h(()=>{if(o.hash){const s=o.hash.slice(1),e=document.getElementById(s);e&&_(()=>e.scrollIntoView())}});const g=w();h(()=>{Array.from(document.getElementsByTagName("shout")).forEach(e=>{var n;if(((n=e.attributes.getNamedItem("ty"))==null?void 0:n.value)==="dyn-style"){const t=y(e.innerText),f=()=>{const d=e.parentElement.getBoundingClientRect();return d.top<=(window.innerHeight||document.documentElement.clientHeight)&&d.left<=(window.innerWidth||document.documentElement.clientWidth)&&d.bottom>=0&&d.right>=0};let r=f();r?t.load():t.unload(),H(window,"scroll",()=>{f()!==r&&(r?t.unload():t.load(),r=!r)})}})});const u=v([]);return h(()=>{if(o.fullPath.startsWith("/notes")){const e=Array.from(document.querySelectorAll("#md article[note] h2:first-child")).map(n=>[n.id,n.innerHTML]);u.push(...e)}}),(s,e)=>{const n=M;return a(),i("article",{ref_key:"theArticle",ref:g,class:"text-left"},[c.frontmatter.title?(a(),i("header",N,[l("h1",null,V(c.frontmatter.title),1),b(n,{article:A(o).meta},null,8,["article"])])):p("",!0),u?(a(),i("nav",R,[l("ul",null,[(a(!0),i(B,null,L(u,t=>(a(),i("li",{key:t[0],font:"serif bold"},[l("a",{href:`#${t[0]}`},[C,l("span",{innerHTML:t[1]},null,8,O)],8,W)]))),128))])])):p("",!0),l("article",{id:"md",innerHTML:c.inner},null,8,P)],512)}}});export{q as _};

import{d as m,g as u,u as d,n as o,_ as f,h,i as _,o as r,c as i,a as c,t as p,b as x,e as y,j as k,k as T}from"./app.c96d98ee.js";const V={class:"text-left"},g={key:0,class:"flex flex-col justify-start items-start gap-2 mt-4 mb-8"},E=["innerHTML"],H=m({props:{frontmatter:null,inner:null},setup(e){const a=e,n=u();return a.frontmatter.title&&d({title:`${a.frontmatter.title} | Pak`,meta:[{name:"description",content:n.meta.excerpt}],link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/katex.min.css",integrity:"sha384-zTROYFVGOfTw7JV7KUu8udsvW2fx4lWOsCEDqhBreBwlHI4ioVRtmIvEThzJHGET",crossorigin:"anonymous"}]}),o(async()=>{const{unoify:s}=await f(()=>import("./uno.bdce7542.js"),[]),t=await s(a.inner);h(t)}),_(()=>{if(n.hash){const s=n.hash.slice(1),t=document.getElementById(s);t&&o(()=>t.scrollIntoView())}}),(s,t)=>{const l=T;return r(),i("article",V,[e.frontmatter.title?(r(),i("header",g,[c("h1",null,p(e.frontmatter.title),1),x(l,{article:y(n).meta},null,8,["article"])])):k("",!0),c("article",{id:"md",innerHTML:e.inner},null,8,E)])}}});export{H as _};
import{u as r,a as n}from"./app.83c93e76.js";import{f as c,s as i,o as l,b as m,d as p,t as u,i as f,h as d,F as _}from"./vendor.68320762.js";const h={class:"mt-4 mb-8"},g=c({props:{name:null,filter:{type:Function,default:()=>!0},sort:{type:Function,default:(t,e)=>e.timestamp-t.timestamp}},setup(t){const e=t,s=r(),a=i(()=>s.articles.filter(e.filter).sort(e.sort));return(F,y)=>{const o=n;return l(),m(_,null,[p("h1",h,u(t.name),1),f(o,{articles:d(a),compact:""},null,8,["articles"])],64)}}});export{g as _};

import{u as r,a as c}from"./app.9a52c8e0.js";import{f as n,B as i,o as l,b as m,d as p,t as u,i as f,h as d,F as _}from"./vendor.bb0e13c3.js";const b={class:"mt-4 mb-8"},g=n({props:{name:null,filter:{type:Function,default:()=>!0},sort:{type:Function,default:(t,e)=>e.timestamp-t.timestamp}},setup(t){const e=t,s=r(),a=i(()=>s.articles.filter(e.filter).sort(e.sort));return(h,B)=>{const o=c;return l(),m(_,null,[p("h1",b,u(t.name),1),f(o,{articles:d(a),compact:""},null,8,["articles"])],64)}}});export{g as _};

import{_ as m}from"./TheTaxonomy.486346a6.js";import{f as u,S as p,P as l,u as f,B as s,y as i,o as _,e as y,h as d}from"./vendor.a2cf0b24.js";import"./app.7d1b9ec6.js";const x=u({setup(g){const{params:e}=p(l()),{t:n}=f(),c=t=>{var o;return t.frontmatter.category===((o=e.value)==null?void 0:o.category)},a=s(()=>n(`categories.${e.value.category}`,e.value.category));return i({title:s(()=>`${a.value} | Pak`),meta:[{name:"description",content:`Articles about ${a.value} on Pak`}]}),(t,o)=>{const r=m;return _(),y(r,{name:d(a),filter:c},null,8,["name"])}}});export{x as default};

import{_ as m}from"./TheTaxonomy.725e1f6f.js";import{f as u,W as f,Q as p,u as l,B as s,y as i,o as _,e as y,h as d}from"./vendor.7f9880fc.js";import"./app.c0c6e37c.js";const x=u({setup(g){const{params:e}=f(p()),{t:n}=l(),c=t=>{var o;return t.frontmatter.category===((o=e.value)==null?void 0:o.category)},a=s(()=>n(`categories.${e.value.category}`,e.value.category));return i({title:s(()=>`${a.value} | Pak`),meta:[{name:"description",content:`Articles about ${a.value} on Pak`}]}),(t,o)=>{const r=m;return _(),y(r,{name:d(a),filter:c},null,8,["name"])}}});export{x as default};

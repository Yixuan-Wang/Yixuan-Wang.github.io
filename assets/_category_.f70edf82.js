import{_ as m}from"./TheTaxonomy.957e5c73.js";import{f as u,L as p,I as l,u as i,s,p as f,o as _,e as d,h as y}from"./vendor.68320762.js";import"./app.eb887b3d.js";const x=u({setup(g){const{params:e}=p(l()),{t:n}=i(),c=t=>{var o;return t.frontmatter.category===((o=e.value)==null?void 0:o.category)},a=s(()=>n(`categories.${e.value.category}`,e.value.category));return f({title:s(()=>`${a.value} | Pak`),meta:[{name:"description",content:`Articles about ${a.value} on Pak`}]}),(t,o)=>{const r=m;return _(),d(r,{name:y(a),filter:c},null,8,["name"])}}});export{x as default};

import{_ as m}from"./TheTaxonomy.b26e4bd1.js";import{f as u,L as p,I as l,u as f,s,p as i,o as _,e as d,h as y}from"./vendor.68320762.js";import"./app.809341bf.js";const k=u({setup(g){const{params:e}=p(l()),{t:n}=f(),r=t=>{var o;return t.frontmatter.category===((o=e.value)==null?void 0:o.category)},a=s(()=>n(`categories.${e.value.category}`,e.value.category));return i({title:s(()=>`${a.value} | Pak`),meta:[{name:"description",content:`Articles about ${a.value} on Pak`}]}),(t,o)=>{const c=m;return _(),d(c,{name:y(a),filter:r},null,8,["name"])}}});export{k as default};

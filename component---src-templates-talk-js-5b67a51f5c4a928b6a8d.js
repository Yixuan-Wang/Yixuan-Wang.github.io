(self.webpackChunkpak=self.webpackChunkpak||[]).push([[71],{1624:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(5963);function c(e){var t=e.article.frontmatter,n=t.title,c=t.date,l=t.category,i=t.tags,o=t.keywords;return r.createElement(r.Fragment,null,r.createElement("h1",{className:"title",style:{marginBottom:"0"}},n),r.createElement(a.Z,{className:"subtitle",time:c,taxonomies:{category:l,tags:i,keywords:o}}))}},5963:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(5444);function c(e){var t=e.children;return r.createElement("span",{className:"chip"},t)}var l=function(e){var t=e.className,n=e.time,l=e.taxonomies,i=l.category,o=l.tags,s=l.keywords;return r.createElement("span",{className:t,style:{display:"inline-block"}},r.createElement("time",{style:{marginRight:"1em"}},n),r.createElement("span",{style:{color:"var(--clr-ac)",fontWeight:"bold"}},r.createElement(c,null,r.createElement(a.Link,{to:"/categories/"+i},i))),r.createElement("span",null,null==o?void 0:o.map((function(e){return r.createElement(c,{key:e},r.createElement(a.Link,{to:"/categories/"+i+"#"+e},"@"+e))}))),r.createElement("span",{style:{color:"var(--clr-dm)"}},null==s?void 0:s.map((function(e){return r.createElement(c,{key:e},"#"+e)}))))}},2248:function(e,t,n){"use strict";var r=n(7294),a=n(5414),c=n(5444);function l(e){var t=e.type,n=e.description,l=e.lang,i=e.meta,o=e.title,s=(0,c.useStaticQuery)("63159454").site,m=n||s.siteMetadata.description,u=s.siteMetadata.title;return r.createElement(a.q,{htmlAttributes:{lang:l},title:o?o+" | "+u:u,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:t},{property:"og:site-name",content:u},{property:"og:image",content:(0,c.withPrefix)("/icon.png")}].concat(i)})}l.defaultProps={lang:"zh-Hans",meta:[],description:"",type:"webpage",title:""},t.Z=l},1603:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7294),a=n(2248),c=n(1624);function l(e){var t=e.data.markdownRemark;return r.createElement(r.Fragment,null,r.createElement(a.Z,{title:t.frontmatter.title,type:"article"}),r.createElement(c.Z,{article:t}),r.createElement("article",{dangerouslySetInnerHTML:{__html:t.html}}))}}}]);
//# sourceMappingURL=component---src-templates-talk-js-5b67a51f5c4a928b6a8d.js.map
(self.webpackChunkpak=self.webpackChunkpak||[]).push([[678],{5963:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7294),r=n(5444);function c(e){var t=e.children;return a.createElement("span",{className:"chip"},t)}var l=function(e){var t=e.className,n=e.time,l=e.taxonomies,i=l.category,s=l.tags,m=l.keywords;return a.createElement("span",{className:t,style:{display:"inline-block"}},a.createElement("time",{style:{marginRight:"1em"}},n),a.createElement("span",{style:{color:"var(--clr-ac)",fontWeight:"bold"}},a.createElement(c,null,a.createElement(r.Link,{to:"/categories/"+i},i))),a.createElement("span",null,null==s?void 0:s.map((function(e){return a.createElement(c,{key:e},a.createElement(r.Link,{to:"/categories/"+i+"#"+e},"@"+e))}))),a.createElement("span",{style:{color:"var(--clr-dm)"}},null==m?void 0:m.map((function(e){return a.createElement(c,{key:e},"#"+e)}))))}},4696:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.friend,n=t.name,r=t.avatar,c=t.link,l=t.blog;return a.createElement("div",{className:"card-friend"},a.createElement("a",{className:"card-friend-link",href:c,target:"_blank",rel:"noopener noreferrer"},a.createElement("img",{className:"card-friend-avatar",src:r})),a.createElement("a",{className:"card-friend-name",href:l,target:"_blank",rel:"noopener noreferrer"},n))}},2248:function(e,t,n){"use strict";var a=n(7294),r=n(5414),c=n(5444);function l(e){var t=e.type,n=e.description,l=e.lang,i=e.meta,s=e.title,m=(0,c.useStaticQuery)("63159454").site,o=n||m.siteMetadata.description,d=m.siteMetadata.title;return a.createElement(r.q,{htmlAttributes:{lang:l},title:s?s+" | "+d:d,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:t},{property:"og:site-name",content:d},{property:"og:image",content:(0,c.withPrefix)("/icon.png")}].concat(i)})}l.defaultProps={lang:"zh-Hans",meta:[],description:"",type:"webpage",title:""},t.Z=l},9255:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(7294),r=n(5444),c=n(2248),l=n(5963);function i(e){var t=e.article,n=t.frontmatter,c=n.title,i=n.date,s=n.category,m=n.tags,o=n.keywords,d=i;return a.createElement("section",{style:{padding:".25em .5em"}},a.createElement("h3",{style:{margin:"0"}},a.createElement(r.Link,{to:"/"+t.fields.slug},c)),a.createElement("p",{style:{margin:"0"}},t.excerpt),a.createElement(l.Z,{time:d,taxonomies:{category:s,tags:m,keywords:o}}))}var s=n(4696),m=function(e){var t=e.data,n=t.site.siteMetadata;return a.createElement(a.Fragment,null,a.createElement(c.Z,{title:""}),a.createElement("h1",{className:"title"},n.title),a.createElement("p",{className:"subtitle description"},n.description),a.createElement("section",{className:"index-block"},a.createElement("h2",{id:"recents"},"文章和言论"),t.recents.nodes.map((function(e){return a.createElement(i,{key:e.id,article:e})})),a.createElement("span",{className:"index-link-more"},a.createElement(r.Link,{to:"/posts/"},"全部文章…")),a.createElement("span",{className:"index-link-more"},a.createElement(r.Link,{to:"/talks/"},"全部言论…"))),a.createElement("section",{className:"index-block"},a.createElement("h2",{id:"recent-sheets"},"清单"),t.sheets.nodes.map((function(e){return a.createElement(i,{key:e.id,article:e})})),a.createElement("span",{className:"index-link-more"},a.createElement(r.Link,{to:"/sheets/"},"全部清单…"))),a.createElement("section",{className:"index-block"},a.createElement("h2",{id:"friends"},"朋友"),a.createElement("div",{className:"index-block-friends"},t.friends.childYaml.friends.map((function(e){return a.createElement(s.Z,{key:e.name,friend:e})}))),a.createElement("span",{className:"index-link-more"},a.createElement(r.Link,{to:"/friends"},"详细…"))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-73e23ea4dd704db684b6.js.map
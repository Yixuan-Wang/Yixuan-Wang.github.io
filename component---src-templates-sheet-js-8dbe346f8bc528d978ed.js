(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0Nbe":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));var n=a("q1tI"),r=a.n(n),c=a("EYWl"),l=a("16eG");function i(e){var t=e.data.markdownRemark;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:t.frontmatter.title,type:"article"}),r.a.createElement(l.a,{article:t}),r.a.createElement("article",{dangerouslySetInnerHTML:{__html:t.html}}))}},"16eG":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),c=a("5gM9");function l(e){var t=e.article.frontmatter,a=t.title,n=t.date,l=t.category,i=t.tags,o=t.keywords;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title",style:{marginBottom:"0"}},a),r.a.createElement(c.a,{className:"subtitle",time:n,taxonomies:{category:l,tags:i,keywords:o}}))}},"5gM9":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz");a("zHCO");function l(e){var t=e.children;return r.a.createElement("span",{className:"chip"},t)}t.a=function(e){var t=e.className,a=e.time,n=e.taxonomies,i=n.category,o=n.tags,s=n.keywords;return r.a.createElement("span",{className:t,style:{display:"inline-block"}},r.a.createElement("time",{style:{marginRight:"1em"}},a),r.a.createElement("span",{style:{color:"var(--clr-ac)",fontWeight:"bold"}},r.a.createElement(l,null,r.a.createElement(c.Link,{to:"../../categories/"+i},i))),r.a.createElement("span",null,null==o?void 0:o.map((function(e){return r.a.createElement(l,{key:e},r.a.createElement(c.Link,{to:"../../categories/"+e},"@"+e))}))),r.a.createElement("span",{style:{color:"var(--clr-dm)"}},null==s?void 0:s.map((function(e){return r.a.createElement(l,{key:e},"#"+e)}))))}},EYWl:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("TJpk"),l=a("Wbzz");function i(e){var t=e.type,a=e.description,n=e.lang,i=e.meta,o=e.title,s=Object(l.useStaticQuery)("63159454").site,m=a||s.siteMetadata.description,u=s.siteMetadata.title;return r.a.createElement(c.Helmet,{htmlAttributes:{lang:n},title:o?o+" | "+u:u,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:t},{property:"og:site-name",content:u},{property:"og:image",content:Object(l.withPrefix)("/icon.png")}].concat(i)})}i.defaultProps={lang:"zh-Hans",meta:[],description:"",type:"webpage",title:""},t.a=i},zHCO:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-sheet-js-8dbe346f8bc528d978ed.js.map
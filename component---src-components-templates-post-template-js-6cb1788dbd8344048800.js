(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"C6/n":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("ayPR"),r=a("3MMh"),l=a("gP4Z"),c=(a("f3/d"),a("vOnD")),m=a("p3AD"),s=a("shvM"),p=a("eJM4"),d=a("rOcY");var h=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={active:!1},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.getToc=function(e){if(e)return i.a.createElement(w,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.data}}))},o.render=function(){var e=this,t=this.state.active;return i.a.createElement(g,null,i.a.createElement(u,null,i.a.createElement("div",null,i.a.createElement(b,null,"目次")),i.a.createElement(f,{onClick:function(){return e.setState({active:!t})}},i.a.createElement("span",null,t?"-":"+"))),this.getToc(t))},n}(n.Component),g=c.a.div.withConfig({displayName:"Toc__Background",componentId:"stcxjh-0"})(["margin:"," 0 "," 0 padding:"," "," background-color:rgba(224,224,224,0.5);@media (min-width:","){width:56%}"],Object(m.a)(3),Object(m.a)(1),Object(m.a)(.5),Object(m.a)(1),d.responsive.tablet.minWidth),b=c.a.span.withConfig({displayName:"Toc__Title",componentId:"stcxjh-1"})(["font-size:"," font-weight:bold color:rgb(87,87,87);"],Object(m.b)(1/6).fontSize),u=c.a.div.withConfig({displayName:"Toc__FlexContainer",componentId:"stcxjh-2"})(["display:flex;flex-direction:row;justify-content:space-between;"]),f=c.a.div.withConfig({displayName:"Toc__ClickCircle",componentId:"stcxjh-3"})(["cursor:pointer;width:"," height:"," border-radius:50% background:rgba(156,156,156,0.5);text-align:center & > span{font-weight:bold}"],Object(m.a)(1.2),Object(m.a)(1.2)),w=c.a.div.withConfig({displayName:"Toc__TocContainer",componentId:"stcxjh-4"})(["width:80% margin:0 auto padding:"," 0 & > div > ul{width:auto;li{color:#96acb3;list-style:decimal;line-height:"," p{margin-bottom:0}ul{margin-top:0}}a{text-decoration:none text-shadow:none color:rgb(82,82,82);}}}"],Object(m.a)(1),Object(m.a)(1.5)),j=function(e){var t=e.url,a=e.title;return i.a.createElement(O,{className:"columns is-mobile"},i.a.createElement(_,{color:"#3b5998",className:"column"},i.a.createElement("a",{href:"https://www.facebook.com/share.php?u="+t,target:"_blank",rel:"noreferrer noopener"},i.a.createElement("i",{className:"fab fa-facebook"}))),i.a.createElement(_,{color:"#55acee",className:"column"},i.a.createElement("a",{href:"https://twitter.com/share?url="+t,target:"_blank",rel:"noreferrer noopener"},i.a.createElement("i",{className:"fab fa-twitter"}))),i.a.createElement(_,{color:"#008fde",className:"column"},i.a.createElement("a",{href:"https://b.hatena.ne.jp/add?mode=confirm&url="+t+"&title="+a,target:"_blank",rel:"noreferrer noopener"},i.a.createElement(E,null,"B!"))),i.a.createElement(_,{color:"#d3505a",className:"column"},i.a.createElement("a",{href:"https://getpocket.com/edit?url="+t+"&title="+a,target:"_blank",rel:"noreferrer noopener"},i.a.createElement("i",{className:"fab fa-get-pocket"}))))},O=c.a.div.withConfig({displayName:"ShareButtons__Container",componentId:"sc-15fiicb-0"})(["margin-top:0;width:100% margin:auto"]),_=c.a.div.withConfig({displayName:"ShareButtons__ShareButton",componentId:"sc-15fiicb-1"})(["background:"," padding:0 & > a{display:block;color:#fff;padding:"," 0 text-align:center;font-size:1.3em;}"],(function(e){return e.color}),Object(m.a)(.25)),E=c.a.span.withConfig({displayName:"ShareButtons__Hatena",componentId:"sc-15fiicb-2"})(["font-weight:bold"]),k=a("XFC8");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.getTags=function(e){return e.map((function(e){return i.a.createElement("span",{className:"label"},e)}))},o.render=function(){var e=this.props.metadata,t=this.props.toc,a="https://www.takigawa-memo.com"+e.slug,n=e.title+" - TAKIGAWA MEMO";return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null,i.a.createElement(C,null,e.title),i.a.createElement(T,null,i.a.createElement(N,null,i.a.createElement("h4",null,e.date)),i.a.createElement(I,{className:"tags"},this.getTags(e.tags))),i.a.createElement(S,null,e.description),i.a.createElement(k.a,null),i.a.createElement(s.a,{fileName:e.thumbnail.name,alt:"thumbnail"}),i.a.createElement(j,{url:a,title:n}),i.a.createElement(h,{data:t}),i.a.createElement(z,{dangerouslySetInnerHTML:{__html:this.props.html}})),i.a.createElement(p.a,null))},n}(i.a.Component),v=c.a.div.withConfig({displayName:"BlogPage__StyledContainer",componentId:"piuekt-0"})(["padding-bottom:"," width:90% margin:auto"],Object(m.a)(4)),z=c.a.div.withConfig({displayName:"BlogPage__MobileStyledHtml",componentId:"piuekt-1"})(["padding-top:",";& > p{font-size:"," line-height:"," margin:"," 0}& > ol > li{font-size:"," line-height:","}& > h2{font-size:"," line-height:","}& > ul > li{font-size:"," line-height:","}@media (min-width:","){padding-top:",";& > p{font-size:"," line-height:"," margin:"," 0}& > ol > li{font-size:"," line-height:","}& > h2{font-size:"," line-height:","}& > ul > li{font-size:"," line-height:","}}"],Object(m.a)(2),Object(m.b)(0).fontSize,Object(m.a)(1.5),Object(m.a)(1),Object(m.b)(0).fontSize,Object(m.a)(1),Object(m.b)(.5).fontSize,Object(m.a)(2),Object(m.b)(0).fontSize,Object(m.a)(1),d.responsive.tablet.minWidth,Object(m.a)(2),Object(m.b)(1/8).fontSize,Object(m.a)(2),Object(m.a)(1),Object(m.b)(1/8).fontSize,Object(m.a)(2),Object(m.b)(.5).fontSize,Object(m.a)(2),Object(m.b)(1/8).fontSize,Object(m.a)(2)),C=c.a.h1.withConfig({displayName:"BlogPage__MobileTitle",componentId:"piuekt-2"})(["padding-top:"," font-size:"," line-height:"," @media (min-width:","){padding-top:"," font-size:"," line-height:","}"],Object(m.a)(2),Object(m.b)(1).fontSize,Object(m.a)(2),d.responsive.tablet.minWidth,Object(m.a)(4),Object(m.b)(1.5).fontSize,Object(m.a)(3)),N=c.a.div.withConfig({displayName:"BlogPage__Date",componentId:"piuekt-3"})(["& > h4{font-size:"," line-height:"," text-align:center color:#4b5454 margin:auto}"],Object(m.b)(0).fontSize,Object(m.a)(3)),S=c.a.p.withConfig({displayName:"BlogPage__Description",componentId:"piuekt-4"})(["font-size:"," line-height:",""],Object(m.b)(0).fontSize,Object(m.b)(0).lineHeight),I=c.a.div.withConfig({displayName:"BlogPage__Tags",componentId:"piuekt-5"})(["margin-left:",";"],Object(m.a)(1)),T=c.a.div.withConfig({displayName:"BlogPage__Info",componentId:"piuekt-6"})(["display:flex;height:",";"],Object(m.a)(3));a.d(t,"query",(function(){return x}));t.default=function(e){var t=e.data,a=t.markdownRemark.frontmatter,n=t.markdownRemark.html,c=t.markdownRemark.tableOfContents,m="https://www.takigawa-memo.com"+t.markdownRemark.frontmatter.slug,s="https://www.takigawa-memo.com"+t.markdownRemark.frontmatter.thumbnail.publicURL;return i.a.createElement(o.a,null,i.a.createElement(l.a,{isPostPage:!0,title:a.title,description:a.description,url:m,imageUrl:s}),i.a.createElement(r.a,null,i.a.createElement(y,{metadata:a,html:n,toc:c})))};var x="3029658406"}}]);
//# sourceMappingURL=component---src-components-templates-post-template-js-6cb1788dbd8344048800.js.map
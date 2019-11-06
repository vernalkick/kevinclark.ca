(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(171),i=n(153),l=n(172),c=n(183),m=n(184),s=n(154),p=n(155),d=n.n(p),f=(n(30),n(188)),u=i.c.div.withConfig({displayName:"FeaturedContentSection__Container",componentId:"sc-1lyx9t3-0"})(["@media ",'{display:grid;grid-template-columns:1fr auto;grid-row-gap:2rem;grid-template-areas:"title button" "content content";align-items:center;}& + &{margin-top:8rem;}'],s.a.mobileLargeUp),g=i.c.h1.withConfig({displayName:"FeaturedContentSection__SectionTitle",componentId:"sc-1lyx9t3-1"})(["grid-area:title;color:var(--subdued-elements-color);font-size:60px;line-height:0.9;margin-bottom:-0.2em;@media ","{font-size:60px;margin-bottom:-0.75em;}@media ","{font-size:85px;margin-bottom:-0.6em;}@media ","{font-size:120px;margin-bottom:-0.5em;}"],s.a.mobileLargeUp,s.a.tabletUp,s.a.desktop),h=Object(i.c)(f.a).withConfig({displayName:"FeaturedContentSection__ViewMoreButton",componentId:"sc-1lyx9t3-2"})([""]),b=i.c.div.withConfig({displayName:"FeaturedContentSection__ButtonContainer",componentId:"sc-1lyx9t3-3"})(["position:relative;z-index:2;@media ","{margin-top:1.5rem !important;}"],s.a.mobileLargeDown),y=i.c.div.withConfig({displayName:"FeaturedContentSection__Content",componentId:"sc-1lyx9t3-4"})(["grid-area:content;"]),w=function(e){var t=e.title,n=e.url,a=e.children;return o.a.createElement(u,null,o.a.createElement(g,{dangerouslySetInnerHTML:{__html:t.replace(/ /,"<br/>")}}),o.a.createElement(y,null,a),o.a.createElement(b,null,o.a.createElement(h,{href:n,icon:"plus"},"View All")))},x=i.c.span.withConfig({displayName:"TextStyles__CaptionText",componentId:"tmns1r-0"})(['color:var(--secondary-text-color);font-size:16px;font-family:var(--secondary-font);line-height:1.5;display:block;position:relative;&:before{content:"";display:',";position:absolute;height:140px;width:2px;background:var(--subdued-elements-color);transform:rotate(45deg) translateY(15%);bottom:-2rem;right:1rem;z-index:-1;}a{border-bottom:2px solid var(--subdued-elements-color);}"],function(e){return e.decoration?"block":"none"}),k=i.c.figcaption.withConfig({displayName:"HomeProfilePicture__Caption",componentId:"sc-1y8ahhi-0"})(["display:grid;grid-template-columns:1fr auto;margin-top:1rem;align-items:baseline;"]),v=i.c.img.withConfig({displayName:"HomeProfilePicture__Img",componentId:"sc-1y8ahhi-1"})(["box-shadow:0 45.4px 70px -20.4px rgba(0,0,0,0.3);"]),E=i.c.p.withConfig({displayName:"HomeProfilePicture__Description",componentId:"sc-1y8ahhi-2"})(["font-weight:500;"]),C=function(e){var t=e.src;return o.a.createElement("figure",null,o.a.createElement(v,{src:t}),o.a.createElement(k,null,o.a.createElement(E,null,"↑ That’s me"),o.a.createElement(x,null,"Picture by ",o.a.createElement("a",{href:""},"Willem Shepherd"))))},_=n(190),I=n(187),P=n.n(I);n.d(t,"homeArticlesQuery",function(){return S});var N=i.c.ul.withConfig({displayName:"pages__PostList",componentId:"h0mn4z-0"})(["list-style-type:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-gap:2rem;z-index:2;position:relative;@media ","{grid-gap:4.5rem;}"],s.a.desktop),z=i.c.a.withConfig({displayName:"pages__TwitterLink",componentId:"h0mn4z-1"})(["font-size:20px;font-weight:500;margin-top:1.5rem;display:inline-block;@media ","{margin-top:3rem;}"],s.a.tabletUp),U=i.c.div.withConfig({displayName:"pages__HomeHeaderContainer",componentId:"h0mn4z-2"})(["position:relative;margin-bottom:2.5rem;@media ","{margin-bottom:6.5rem;}"],s.a.tabletUp),L=i.c.div.withConfig({displayName:"pages__ProfilePictureContainer",componentId:"h0mn4z-3"})(["position:absolute;left:70%;top:4em;width:45%;@media ","{display:none;}"],s.a.mobileLargeDown),j=i.c.div.withConfig({displayName:"pages__ProjectContainer",componentId:"h0mn4z-4"})(["display:grid;grid-template-columns:1fr;grid-gap:0.5rem;> *{padding-bottom:50%;}@media ","{margin-left:-1em;width:calc(100% + 2em);}@media ","{display:grid;grid-template-columns:2fr 1fr;grid-gap:1.5rem;>:nth-child(1){grid-column-end:span 2;padding-bottom:50%;}>:nth-child(2){padding-bottom:50%;margin-bottom:15%;}>:nth-child(3){padding-bottom:92%;}}@media ","{grid-gap:3rem;}"],s.a.mobileLargeDown,s.a.mobileLargeUp,s.a.desktopUp),S=(t.default=function(e){var t=e.location,n=e.data.allMarkdownRemark,a=Object(_.a)(3);return o.a.createElement(r.a,{location:t},o.a.createElement(U,null,o.a.createElement(l.a,null,o.a.createElement("h1",null,"Designer.",o.a.createElement("br",null),"Manager.",o.a.createElement("br",null),"Podcaster.",o.a.createElement("br",null),"Developer.",o.a.createElement("br",null))),o.a.createElement(z,{href:"https://twitter.com/vernalkick"},o.a.createElement(d.a,null)," Follow me on Twitter →"),o.a.createElement(L,null,o.a.createElement(C,{src:P.a}))),o.a.createElement(w,{title:"Selected Projects",url:"/work"},o.a.createElement(j,null,a.map(function(e,t){return o.a.createElement(m.a,{index:t,project:e,key:t})}))),o.a.createElement(w,{title:"Latest Articles",url:"/articles"},o.a.createElement(N,null,n.edges.map(function(e){return o.a.createElement(c.a,{post:e.node,key:e.node.fields.slug})}))))},"202888543")},154:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=992,o=768,r=550,i={mobile:"(max-width: "+376+"px)",mobileLargeDown:"(max-width: "+o+"px)",mobileLarge:"(min-width: "+r+"px) and (max-width: "+o+"px)",mobileLargeUp:"(min-width: "+r+"px)",tabletDown:"(max-width: "+a+"px)",tablet:"(min-width: "+o+"px) and (max-width: "+a+"px)",tabletUp:"(min-width: "+o+"px)",desktop:"(min-width: "+a+"px)",desktopUp:"(min-width: "+a+"px)"}},155:function(e,t,n){var a=n(0);function o(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"path22"),a.createElement("path",{d:"M20 1.894a8.306 8.306 0 0 1-2.356.636A4.065 4.065 0 0 0 19.447.295a8.283 8.283 0 0 1-2.605.98A4.127 4.127 0 0 0 13.847 0c-2.266 0-4.103 1.808-4.103 4.04 0 .316.036.624.107.92A11.71 11.71 0 0 1 1.393.74a3.97 3.97 0 0 0-.555 2.03c0 1.401.724 2.637 1.825 3.362a4.13 4.13 0 0 1-1.858-.505v.05c0 1.958 1.414 3.59 3.29 3.961a4.164 4.164 0 0 1-1.852.07 4.1 4.1 0 0 0 3.833 2.805 8.32 8.32 0 0 1-5.097 1.729c-.33 0-.658-.02-.979-.057A11.75 11.75 0 0 0 6.29 16c7.547 0 11.674-6.155 11.674-11.493 0-.175-.005-.349-.012-.522a8.284 8.284 0 0 0 2.047-2.091",fill:"currentColor",fillRule:"evenodd",key:1})])}o.defaultProps={width:"20",height:"16",viewBox:"0 0 20 16"},e.exports=o,o.default=o},156:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},157:function(e,t,n){var a=n(0);function o(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"glyph-logo_May2016"),a.createElement("defs",{key:1},a.createElement("path",{id:"a",d:"M0 16.998h16.995V.005H0z"})),a.createElement("g",{fill:"none",fillRule:"evenodd",opacity:".9",key:2},[a.createElement("g",{key:0},[a.createElement("mask",{id:"b",fill:"#fff",key:0},a.createElement("use",{xlinkHref:"#a"})),a.createElement("path",{d:"M8.497.005C6.19.005 5.9.015 4.994.056 4.089.098 3.472.241 2.93.451a4.165 4.165 0 0 0-1.505.98 4.165 4.165 0 0 0-.98 1.506c-.21.54-.354 1.158-.395 2.062C.01 5.906 0 6.195 0 8.503c0 2.307.01 2.597.051 3.503.041.905.185 1.522.395 2.063.217.559.508 1.032.98 1.505.473.472.946.763 1.505.98.54.21 1.158.354 2.063.395C5.9 16.99 6.19 17 8.497 17c2.308 0 2.597-.01 3.504-.051.904-.041 1.522-.185 2.062-.395a4.166 4.166 0 0 0 1.505-.98c.473-.473.763-.946.98-1.505.21-.54.354-1.158.396-2.063.04-.906.05-1.196.05-3.503 0-2.308-.01-2.597-.05-3.504-.042-.904-.185-1.522-.395-2.062a4.166 4.166 0 0 0-.98-1.505 4.165 4.165 0 0 0-1.506-.98c-.54-.21-1.158-.354-2.062-.396-.907-.04-1.196-.05-3.504-.05zm0 1.531c2.27 0 2.538.01 3.434.05.828.038 1.278.176 1.578.293.396.154.68.338.977.635.297.298.481.58.635.977.117.3.255.75.293 1.578.04.896.05 1.165.05 3.434s-.01 2.537-.05 3.433c-.038.829-.176 1.279-.293 1.578-.154.397-.338.68-.635.977-.298.298-.58.482-.977.636-.3.116-.75.255-1.578.292-.896.041-1.165.05-3.434.05s-2.537-.009-3.433-.05c-.829-.037-1.279-.176-1.578-.292a2.632 2.632 0 0 1-.977-.636 2.633 2.633 0 0 1-.636-.977c-.116-.3-.255-.75-.292-1.578-.041-.896-.05-1.164-.05-3.433 0-2.27.009-2.538.05-3.434.037-.828.176-1.278.292-1.578.154-.396.338-.68.636-.977.297-.297.58-.481.977-.635.3-.117.75-.255 1.578-.293.896-.04 1.164-.05 3.433-.05z",fill:"currentColor",mask:"url(#b)",key:1})]),a.createElement("path",{d:"M8.5 11.421a2.921 2.921 0 1 1 0-5.842 2.921 2.921 0 0 1 0 5.842zM8.5 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0",fill:"currentColor",key:1})])])}o.defaultProps={width:"17",height:"17",viewBox:"0 0 17 17"},e.exports=o,o.default=o},158:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=(n(28),n(156),o.a.createContext({})),c=function(e){return o.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return C});var a=n(181),o=n.n(a),r=n(153),i=n(154),l=n(163),c=n.n(l),m=n(164),s=n.n(m),p=n(165),d=n.n(p),f=n(166),u=n.n(f),g=n(167),h=n.n(g),b=n(168),y=n.n(b),w=n(169),x=n.n(w),k=n(170),v=n.n(k);function E(){var e=o()(["\n  @font-face {\n    font-family: 'Graphik';\n    src: url('","') format('woff2'),\n        url('","') format('woff');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n      font-family: 'Graphik';\n      src: url('"," ') format('woff2'),\n          url('"," ') format('woff');\n      font-weight: 600;\n      font-style: normal;\n  }\n\n  @font-face {\n      font-family: 'Graphik';\n      src: url('","') format('woff2'),\n          url('","') format('woff');\n      font-weight: 500;\n      font-style: normal;\n  }\n\n  @font-face {\n      font-family: 'GT Pressura Mono';\n      src: url('","') format('woff2'),\n          url('","') format('woff');\n      font-weight: normal;\n      font-style: normal;\n  }\n\n  :root {\n    --base-font: 'Graphik', -apple-system;\n    --secondary-font: 'GT Pressura Mono', monospace;\n    --paragraph-text-color: #333;\n    --primary-text-color: #333;\n    --secondary-text-color: #777;\n    --subdued-elements-color: #fff;\n    --really-subdued-elements-color: #fff;\n    --top-background-color: #fff;\n    --bottom-background-color: #F1F1F1;\n    --dark-tiles: #333;\n  }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --base-font: 'Graphik', -apple-system;\n    --secondary-font: 'GT Pressura Mono', monospace;\n    --paragraph-text-color: #ccc;\n    --primary-text-color: #fff;\n    --secondary-text-color: #999;\n    --subdued-elements-color: rgba(255, 255, 255, 0.15);\n    --really-subdued-elements-color: rgba(255, 255, 255, 0.08);\n    --top-background-color: #161616;\n    --bottom-background-color: #000;\n    --dark-tiles: #222;\n  }\n}\n\n  html {\n    height: 100%;\n    overflow-x: hidden;\n    background: var(--bottom-background-color);\n  }\n\n  body {\n    font-family: var(--base-font);\n    overflow-x: hidden;\n    color: var(--primary-text-color);\n    margin: 0;\n    min-height: 100vh;\n    transition: .3s ease-in-out all;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  code {\n    font-family: var(--secondary-font);\n  }\n\n  p, ol > li, ul > li {\n    line-height: 1.7;\n    font-size: 18px;\n    margin: 0;\n    color: var(--paragraph-text-color);\n\n    & + &,\n    figure + &,\n    blockquote + & {\n      margin-top: 2.5rem;\n    }\n  }\n\n  a {\n    color: var(--primary-text-color);\n    text-decoration: none;\n  }\n\n  p a {\n    border-bottom: 2px solid var(--subdued-elements-color);\n    font-weight: 500;\n\n    &:hover {\n      background: var(--subdued-elements-color);\n    }\n  }\n\n  ul {\n    font-size: 18px;\n    line-height: 1.7;\n  }\n\n  ol {\n    counter-reset: li;\n    list-style: none;\n    padding: 0;\n  }\n\n  ol li {\n    counter-increment: li;\n    position: relative;\n    padding-left: 2.5em;\n\n    &:before {\n      content: counter(li);\n      display: inline-block;\n      background: var(--subdued-elements-color);\n      border-radius: 20px;\n      padding: 0 0.5em;\n      min-width: 0.6em;\n      text-align: center;\n      position: absolute;\n      left: 0;\n    }\n  }\n\n  ol > li + li {\n    margin-top: 1.5em;\n  }\n\n  hr {\n    height: 2px;\n    background: var(--subdued-elements-color);\n    border: none;\n    margin: 3rem 0;\n    max-width: 9rem;\n  }\n\n  figure {\n    margin: 0;\n  }\n\n  strong {\n    font-weight: 600;\n  }\n\n  blockquote {\n    position: relative;\n    margin: 0;\n    padding: 0 2em 0 3em;\n    color: #777;\n    font-size: 14px;\n    border-left: 2px solid var(--subdued-elements-color);\n\n    // &:before {\n    //   content: \"“\";\n    //   position: absolute;\n    //   left: 0;\n    //   // font-size: 60px;\n    // }\n\n    & + & {\n      padding-top: 2.5rem;\n    }\n\n    p + & {\n      margin-top: 2.5rem;\n    }\n  }\n\n  strong {\n    font-weight: 500;\n    color: var(--primary-text-color);\n  }\n\n  img, video {\n    max-width: 100%;\n    display: block;\n  }\n\n  .gatsby-resp-image-wrapper {\n    margin-left: -1rem !important;\n    width: calc(100% + 2rem);\n\n    @media "," {\n      width: 100%;\n      margin-left: auto !important;\n    }\n  }\n\n  h1 {\n    font-size: 1em;\n    margin: 0;\n    line-height: 1;\n  }\n\n  h2 {\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 1.3;\n    margin: 0;\n    margin-bottom: 0.5em;\n    color: var(--primary-text-color);\n\n    @media "," {\n      font-size: 36px;\n    }\n  }\n\n  h3 {\n    font-size: 20px;\n    margin: 0;\n    margin-top: 2em;\n    margin-bottom: 0.5em;\n    font-weight: 500;\n\n    @media "," {\n      font-size: 24px;\n    }\n\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n\n  h4 {\n    font-size: 1.17em;\n    margin: 2em 0 0.5em;\n    font-weight: 500;\n\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n"]);return E=function(){return e},e}var C=Object(r.a)(E(),c.a,s.a,d.a,u.a,h.a,y.a,x.a,v.a,i.a.mobileLargeUp,i.a.tabletUp,i.a.tabletUp)},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Kevin Clark"}}}}},161:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(50),c=n(2),m=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},163:function(e,t,n){e.exports=n.p+"static/Graphik-Regular-13c6337caf0e2d05d511208c36337b8c.woff2"},164:function(e,t,n){e.exports=n.p+"static/Graphik-Regular-475fb1f8332e3a4a5364d0cc76d2a9cd.woff"},165:function(e,t,n){e.exports=n.p+"static/Graphik-Semibold-1c8df4528ee25113741d08341bbdf35c.woff2"},166:function(e,t,n){e.exports=n.p+"static/Graphik-Semibold-1b205519a54eb297e538a728cbb9b281.woff"},167:function(e,t,n){e.exports=n.p+"static/Graphik-Medium-d92a58e99202047fe2aa5212f4f5f76b.woff2"},168:function(e,t,n){e.exports=n.p+"static/Graphik-Medium-320dfef11ff346be8471ce27b1ca7c9d.woff"},169:function(e,t,n){e.exports=n.p+"static/GTPressuraMonoTrial-Regular-4e6c0cde2313933d0e41452864a9c632.woff2"},170:function(e,t,n){e.exports=n.p+"static/GTPressuraMonoTrial-Regular-9e628ac1acd658a0a135148e062b4da9.woff"},171:function(e,t,n){"use strict";var a=n(160),o=n(0),r=n.n(o),i=n(158),l=n(4),c=n.n(l),m=n(162),s=n.n(m),p=n(153),d=n(154),f=p.c.div.withConfig({displayName:"Wrap",componentId:"sc-1xm1ql8-0"})(["max-width:1100px;margin:0 auto;padding:0 1rem;@media ","{padding:0 5%;}"],d.a.tabletUp),u=n(28),g=n.n(u),h=(n(179),n(5)),b=n.n(h),y=p.c.li.withConfig({displayName:"NavItem__NavListItem",componentId:"sc-18teqlc-0"})(["@media ","{flex-grow:0;margin-right:2.5rem;}"],d.a.tabletUp),w=Object(p.c)(g.a).withConfig({displayName:"NavItem__NavLink",componentId:"sc-18teqlc-1"})(["font-size:16px;font-weight:",";@media ","{font-size:18px;}"],function(e){return e.selected?"500":"normal"},d.a.desktopUp),x=function(e){function t(){return e.apply(this,arguments)||this}return b()(t,e),t.prototype.render=function(){var e=String(this.props.currentPath),t=String(this.props.url),n=e.startsWith(t);return r.a.createElement(y,null,r.a.createElement(w,{to:this.props.url,selected:n},this.props.selected,this.props.children,n?" ↓":""))},t}(r.a.Component),k=n(157),v=n.n(k),E=n(155),C=n.n(E),_=p.c.header.withConfig({displayName:"Header__MainHeader",componentId:"sc-62quc2-0"})(['display:grid;grid-template-columns:45% auto 70px;grid-row-gap:2rem;grid-template-areas:"logo logo social" "nav nav nav";align-items:center;margin-top:2rem;@media ','{margin-top:5vw;grid-template-areas:"logo logo logo" "nav nav social";}@media ','{margin-top:10vw;grid-template-areas:"logo nav social";}'],d.a.tabletUp,d.a.desktopUp),I=Object(p.c)(g.a).withConfig({displayName:"Header__Logo",componentId:"sc-62quc2-1"})(["font-size:16px;line-height:1.3;display:block;grid-area:logo;@media ","{font-size:18px;}"],d.a.desktopUp),P=p.c.span.withConfig({displayName:"Header__Name",componentId:"sc-62quc2-2"})(["display:block;font-weight:500;"]),N=p.c.span.withConfig({displayName:"Header__Role",componentId:"sc-62quc2-3"})(["display:block;"]),z=p.c.ul.withConfig({displayName:"Header__List",componentId:"sc-62quc2-4"})(["list-style-type:none;margin:0;padding:0;overflow:hidden;flex-grow:1;display:flex;flex-wrap:wrap;justify-content:space-between;grid-area:nav;@media ","{justify-content:flex-start;}"],d.a.tabletUp),U=p.c.div.withConfig({displayName:"Header__Social",componentId:"sc-62quc2-5"})(["text-align:right;grid-area:social;"]),L=Object(p.c)(g.a).withConfig({displayName:"Header__SocialLink",componentId:"sc-62quc2-6"})(["margin-right:1rem;&:last-child{margin-right:0;}"]),j=function(e){e.siteTitle;var t=e.pathName;return r.a.createElement(_,null,r.a.createElement(I,{to:"/"},r.a.createElement(P,null,"Kevin Clark"),r.a.createElement(N,null,"Design Lead, Shopify")),r.a.createElement(z,null,r.a.createElement(x,{url:"/articles",currentPath:t},"Articles"),r.a.createElement(x,{url:"/work",currentPath:t},"Work"),r.a.createElement(x,{url:"/speaking",currentPath:t},"Speaking"),r.a.createElement(x,{url:"/about",currentPath:t},"About")),r.a.createElement(U,null,r.a.createElement(L,{to:"http://instagram.com/vernalkick/"},r.a.createElement(v.a,null)),r.a.createElement(L,{to:"http://twitter.com/vernalkick"},r.a.createElement(C.a,null))))},S=p.c.div.withConfig({displayName:"Footer__FooterContainer",componentId:"oinud6-0"})(["border-top:2px solid var(--subdued-elements-color);font-size:15px;display:flex;flex-wrap:wrap;padding:2rem 0 calc(2rem + env(safe-area-inset-bottom));margin-top:5rem;@media ","{font-size:16px;}@media ","{padding-bottom:4rem;}"],d.a.tabletUp,d.a.desktopUp),M=p.c.span.withConfig({displayName:"Footer__Copyright",componentId:"oinud6-1"})(["min-width:35%;margin-right:1rem;flex-grow:1;@media ","{flex-grow:0;}"],d.a.tabletUp),T=p.c.div.withConfig({displayName:"Footer__Contact",componentId:"oinud6-2"})(["flex-grow:1;display:none;@media ","{display:block;}"],d.a.tabletUp),R=Object(p.c)(g.a).withConfig({displayName:"Footer__SocialLink",componentId:"oinud6-3"})(["margin-right:1rem;&:last-child{margin-right:0;}"]),q=Object(p.c)(g.a).withConfig({displayName:"Footer__FooterLink",componentId:"oinud6-4"})(["font-weight:500;"]),F=(new Date).getFullYear(),G=function(){return r.a.createElement(S,null,r.a.createElement(M,null,"Copyright © ",F," ",r.a.createElement(q,null,"Kevin Clark")),r.a.createElement(T,null,"Email me at ",r.a.createElement(q,{to:"mailto:kevin@kevinclark.ca"},"kevin@kevinclark.ca")),r.a.createElement("div",null,r.a.createElement(R,{to:"http://instagram.com/vernalkick/"},r.a.createElement(v.a,null)),r.a.createElement(R,{to:"http://twitter.com/vernalkick"},r.a.createElement(C.a,null))))},A=(n(180),n(159)),H=function(e){var t=e.location,n=e.children;return r.a.createElement(i.a,{query:"3470870683",render:function(e){return r.a.createElement("div",null,r.a.createElement(A.a,null),r.a.createElement(s.a,{defaultTitle:e.site.siteMetadata.title,titleTemplate:"%s — "+e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"},{name:"viewport",content:"initial-scale=1, viewport-fit=cover"}]}),r.a.createElement(f,null,r.a.createElement(j,{siteTitle:e.site.siteMetadata.title,pathName:t.pathname}),n,r.a.createElement(G,null)))},data:a})};H.propTypes={children:c.a.func};t.a=H},172:function(e,t,n){"use strict";var a=n(5),o=n.n(a),r=n(0),i=n.n(r),l=n(153),c=n(154),m=l.c.header.withConfig({displayName:"MainPageHeader__HeaderContainer",componentId:"xnhltv-0"})(["position:relative;font-size:50px;margin-top:0.63em;@media ","{margin-top:0.75em;font-size:85px;}@media ","{margin-top:1.25em;font-size:120px;}&:before{content:'';background:var(--top-background-color);height:10000px;display:block;position:absolute;bottom:1.5rem;left:-10000px;right:-10000px;z-index:-1;@media ","{bottom:2.5rem;}@media ","{bottom:3.5rem;}}"],c.a.tabletUp,c.a.desktopUp,c.a.tabletUp,c.a.desktopUp),s=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement(m,null,this.props.children)},t}(i.a.Component);t.a=s},183:function(e,t,n){"use strict";n(30);var a=n(5),o=n.n(a),r=n(0),i=n.n(r),l=n(28),c=n.n(l),m=n(153),s=m.c.li.withConfig({displayName:"PostItem__Item",componentId:"d819r4-0"})([""]),p=Object(m.c)(c.a).withConfig({displayName:"PostItem__PostLink",componentId:"d819r4-1"})(["display:block;"]),d=m.c.h2.withConfig({displayName:"PostItem__PostTitle",componentId:"d819r4-2"})(["font-size:18px;font-weight:500;line-height:1.4em;"]),f=m.c.p.withConfig({displayName:"PostItem__PostExcerpt",componentId:"d819r4-3"})(["font-size:15px;line-height:1.6em;opacity:0.75;hyphens:auto;"]),u=m.c.span.withConfig({displayName:"PostItem__More",componentId:"d819r4-4"})(["font-size:16px;font-weight:500;margin-top:1rem;display:block;"]),g=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.frontmatter,n=e.excerpt,a=e.fields;return String.prototype.prettify=function(){return this.replace(/ (?=[^ ]*$)/i," ")},i.a.createElement(s,null,i.a.createElement(p,{to:a.slug},i.a.createElement(d,null,t.title.prettify()),i.a.createElement(f,null,n),i.a.createElement(u,null,"Read more →")))},t}(i.a.Component);t.a=g},184:function(e,t,n){"use strict";var a=n(5),o=n.n(a),r=n(0),i=n.n(r),l=n(28),c=n.n(l),m=n(153),s=Object(m.c)(c.a).withConfig({displayName:"Project",componentId:"kxp78k-0"})(["background:var(--dark-tiles);overflow:hidden;position:relative;padding-left:120px;transition:box-shadow .3s ease-in-out;box-shadow:0 45.4px 70px -20.4px rgba(0,0,0,0.3);display:block;&:hover{box-shadow:0 45.4px 100px -20.4px rgba(0,0,0,0.5);& img{transform:scale(1.075);}}"]),p=m.c.span.withConfig({displayName:"Project__Title",componentId:"kxp78k-1"})(["color:#fff;position:absolute;top:1.5rem;left:1.5rem;font-size:18px;font-weight:500;width:120px;line-height:1.3;"]),d=m.c.img.withConfig({displayName:"Project__Image",componentId:"kxp78k-2"})(["position:absolute;right:0;top:0;bottom:0;height:100%;width:calc(100% - 180px);object-fit:cover;object-position:0 50%;transition:transform 1s ease-out;"]),f=m.c.span.withConfig({displayName:"Project__Number",componentId:"kxp78k-3"})(["position:absolute;bottom:1.5rem;left:1.5rem;color:rgba(255,255,255,0.6);font-family:var(--secondary-font);"]),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.index,n=e.project.node.frontmatter,a=n.image,o=n.slug,r=n.title,l="/work/"+o;return i.a.createElement(s,{to:l},a&&i.a.createElement(d,{src:a.publicURL}),i.a.createElement(p,null,r),i.a.createElement(f,null,"0",t+1))},t}(i.a.Component);t.a=u},187:function(e,t,n){e.exports=n.p+"static/profile-c3972ec9edf70907faf79683954c7fdf.jpg"},188:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(153),i=(n(154),n(189)),l=n.n(i),c=r.c.a.withConfig({displayName:"Button",componentId:"sc-19yaxmh-0"})(["padding:1.25rem 1.5rem;display:inline-block;border-radius:12px;font-weight:500;font-size:18px;background:var(",");color:var(",");display:flex;align-items:center;justify-content:center;p + &{margin-top:1.5rem;}"],function(e){return e.primary?"--primary-text-color":"--really-subdued-elements-color"},function(e){return e.primary?"--bottom-background-color":"--primary-text-color"}),m=r.c.div.withConfig({displayName:"Button__Icon",componentId:"sc-19yaxmh-1"})(["margin-right:0.5rem;display:flex;align-items:center;"]);t.a=function(e){var t=e.href,n=e.icon,a=e.primary,r=e.children;return o.a.createElement(c,{href:t,primary:a},n&&o.a.createElement(m,null,"plus"==n&&o.a.createElement(l.a,null)),r)}},189:function(e,t,n){var a=n(0);function o(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Group 11"),a.createElement("desc",{key:1},"Created with Sketch."),a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:2},a.createElement("g",{id:"Artboard-Copy-120",transform:"translate(-1169.000000, -1129.000000)",stroke:"currentColor",strokeWidth:"2"},a.createElement("g",{id:"Group-13-Copy",transform:"translate(1148.000000, 1111.000000)"},a.createElement("g",{id:"Group-11",transform:"translate(22.500000, 19.000000)"},[a.createElement("path",{d:"M12,7 L12,17",id:"Line-2",strokeLinecap:"round",key:0}),a.createElement("path",{d:"M12,7 L12,17",id:"Line-2-Copy",strokeLinecap:"round",transform:"translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) ",key:1}),a.createElement("circle",{id:"Oval",cx:"12",cy:"12",r:"12",key:2})]))))])}o.defaultProps={width:"27px",height:"26px",viewBox:"0 0 27 26",version:"1.1"},e.exports=o,o.default=o},190:function(e,t,n){"use strict";var a=n(191),o=["weatherline","shopify-pay-landing","order-status-page","shopify-apple-watch","climate","tipsy","tiny-conf"];t.a=function(e){var t=a.data.allJavascriptFrontmatter.edges,n=o.map(function(e){return n=e,t.filter(function(e){return e.node.frontmatter.slug===n})[0];var n});return e&&(n=n.slice(0,e)),n}},191:function(e){e.exports={data:{allJavascriptFrontmatter:{edges:[{node:{fileAbsolutePath:"/Users/kevinclark/Sites/kevinclark.ca/src/pages/work/weatherline/index.jsx",frontmatter:{title:"Weather Line",slug:"weatherline",image:{publicURL:"/static/wl-hero-dark-8c807fa941734638a3caba088ce1f252.png"}}}},{node:{fileAbsolutePath:"/Users/kevinclark/Sites/kevinclark.ca/src/pages/work/tipsy/index.jsx",frontmatter:{title:"Tipsy",slug:"tipsy",image:{publicURL:"/static/tipsy-thumb-8d9baaae256661cb981bc1a0e10cd0a1.png"}}}},{node:{fileAbsolutePath:"/Users/kevinclark/Sites/kevinclark.ca/src/pages/work/shopify-apple-watch/index.jsx",frontmatter:{title:"Shopify for Apple Watch",slug:"shopify-apple-watch",image:{publicURL:"/static/shopify-watch-thumb-7ec8b5a5bfe87372caeb69d38ea5ae7d.png"}}}},{node:{fileAbsolutePath:"/Users/kevinclark/Sites/kevinclark.ca/src/pages/work/climate/index.jsx",frontmatter:{title:"Climate",slug:"climate",image:{publicURL:"/static/climate-hero-0dbd9f71b11eb9b0864fc6c224c1f1d1.png"}}}},{node:{fileAbsolutePath:"/Users/kevinclark/Sites/kevinclark.ca/src/pages/work/order-status-page/index.jsx",frontmatter:{title:"Order Status Page",slug:"order-status-page",image:{publicURL:"/static/osp-hero-a82eb6b6ed79dfeda9c1b490cb72153c.png"}}}},{node:{fileAbsolutePath:"/Users/kevinclark/Sites/kevinclark.ca/src/pages/work/tiny-conf/index.jsx",frontmatter:{title:"Tiny Conf",slug:"tiny-conf",image:{publicURL:"/static/tiny-conf-thumb-dafae4720e4b405b6c69c3dbc8e2b4aa.png"}}}},{node:{fileAbsolutePath:"/Users/kevinclark/Sites/kevinclark.ca/src/pages/work/shopify-pay-landing/index.jsx",frontmatter:{title:"Shopify Pay Landing Page",slug:"shopify-pay-landing",image:{publicURL:"/static/shopify-pay-hero-ipad-5096d908bc8376344ab52837fe8003d9.png"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-1cf1e78173c54bb4b9d9.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"A+s3":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("E5k/");var n=a("qKvR"),o=a("LuZP"),i=a("1Yd/"),r=a("q1tI");t.default=function(e){var t=e.data,a=e.location,c=e.pageContext.lang,l=t.allMarkdownRemark,s=l.edges,d=l.pageInfo;return Object(n.c)(r.Fragment,null,Object(n.c)(i.a,{lang:c}),Object(n.c)(o.a,{posts:s.map((function(e){return e.node})),pageInfo:Object.assign({},d,{defaultUrl:"/",lang:c}),location:a}))};var c="3977325626"},Ie8z:function(e,t,a){"use strict";a("sc67");var n=a("wx14"),o=a("Ff2n"),i=a("q1tI"),r=(a("17x9"),a("iuhU")),c=a("H2TA"),l=["video","audio","picture","iframe","img"],s=i.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.component,u=void 0===d?"div":d,b=e.image,p=e.src,m=e.style,g=Object(o.a)(e,["children","classes","className","component","image","src","style"]),f=-1!==l.indexOf(u),v=!f&&b?Object(n.a)({backgroundImage:'url("'.concat(b,'")')},m):m;return i.createElement(u,Object(n.a)({className:Object(r.a)(c.root,s,f&&c.media,-1!=="picture img".indexOf(u)&&c.img),ref:t,style:v,src:f?b||p:void 0},g),a)}));t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},LuZP:function(e,t,a){"use strict";var n=a("qKvR"),o=a("q1tI"),i=a("hlFM"),r=a("mpeT"),c=a("GZdA"),l=a("Wbzz"),s=a("30+C"),d=a("lFIR"),u=a("Ie8z"),b=a("oa/T"),p=a("ofer");function m(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n            color: inherit;\n            text-decoration: none;\n          "]);return m=function(){return e},e}var g=function(e){var t=e.thumbnail,a=e.title,i=e.content,r=e.path,c=e.date,g=void 0===c?"":c,f=e.categories,v=void 0===f?[]:f,h=e.onClick,O=Object(o.useMemo)((function(){return null!=v?v.join("/"):""}),[v]);return Object(n.c)(s.a,{onClick:function(){return null==h?void 0:h(r)}},Object(n.c)(d.a,null,Object(n.c)(l.Link,{to:r,css:Object(n.b)(m())},Object(n.c)(u.a,{component:"img",image:t,title:a,alt:a,height:"280"}),Object(n.c)(b.a,null,Object(n.c)(p.a,{gutterBottom:!0,color:"textSecondary",variant:"body2",component:"p"},g," ",O),Object(n.c)(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),Object(n.c)(p.a,{color:"textSecondary",component:"p",variant:"body2",dangerouslySetInnerHTML:{__html:i}})))))},f=a("NHwv");function v(){var e=O(["\n              list-style: none;\n              margin: 0 0 1rem 0;\n              padding: 0;\n            "]);return v=function(){return e},e}function h(){var e=O(["\n        margin: 0;\n        padding: 0;\n      "]);return h=function(){return e},e}function O(e,t){return t||(t=e.slice(0)),e.raw=t,e}var j=function(e){var t=e.posts,a=void 0===t?[]:t,i=Object(o.useCallback)((function(e){Object(f.a)(e,"메인 아티클 링크 클릭")}),[]);return Object(n.c)("ul",{css:Object(n.b)(h())},a.map((function(e){var t,a,o,r,c,l,s,d=e.frontmatter,u=e.fields,b=e.excerpt,p=null!==(t=d.title)&&void 0!==t?t:u.slug,m=null!==(a=u.path)&&void 0!==a?a:u.slug,f=null!==(o=null!==(r=d.description)&&void 0!==r?r:b)&&void 0!==o?o:"",h=null!==(c=null===(l=d.thumbnail)||void 0===l||null===(s=l.childImageSharp.fluid)||void 0===s?void 0:s.src)&&void 0!==c?c:"",O=d.date,j=d.categories;return Object(n.c)("li",{key:null==u?void 0:u.slug,css:Object(n.b)(v())},Object(n.c)(g,{key:null==u?void 0:u.slug,thumbnail:h,title:p,path:m,content:f,date:O,categories:j,onClick:i}))})))},y=a("tl3u"),x=a("5ZT3"),C=a("urq+"),k=(a("E5k/"),a("AqHK"),a("wx14")),w=a("Ff2n"),N=(a("17x9"),a("iuhU")),z=a("H2TA"),$=(a("sc67"),a("YbXK"),a("cFtU"),a("KQm4")),I=a("ODXe");a("pJf4");function L(e){var t=e.controlled,a=e.default,n=(e.name,e.state,o.useRef(void 0!==t).current),i=o.useState(a),r=i[0],c=i[1];return[n?t:r,o.useCallback((function(e){n||c(e)}),[])]}var M=a("ye/S"),P=a("tr08"),R=a("VD++"),B=a("5AJ6"),E=Object(B.a)(o.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),V=Object(B.a)(o.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),F=Object(B.a)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),S=Object(B.a)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),A=a("NqtD"),T=o.forwardRef((function(e,t){var a=e.classes,n=e.className,i=e.color,r=void 0===i?"standard":i,c=e.component,l=e.disabled,s=void 0!==l&&l,d=e.page,u=e.selected,b=void 0!==u&&u,p=e.shape,m=void 0===p?"round":p,g=e.size,f=void 0===g?"medium":g,v=e.type,h=void 0===v?"page":v,O=e.variant,j=void 0===O?"text":O,y=Object(w.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),x=("rtl"===Object(P.a)().direction?{previous:S,next:F,last:E,first:V}:{previous:F,next:S,first:E,last:V})[h];return"start-ellipsis"===h||"end-ellipsis"===h?o.createElement("div",{ref:t,className:Object(N.a)(a.root,a.ellipsis,s&&a.disabled,"medium"!==f&&a["size".concat(Object(A.a)(f))])},"…"):o.createElement(R.a,Object(k.a)({ref:t,component:c,disabled:s,focusVisibleClassName:a.focusVisible,className:Object(N.a)(a.root,a.page,a[j],a[m],n,"standard"!==r&&a["".concat(j).concat(Object(A.a)(r))],s&&a.disabled,b&&a.selected,"medium"!==f&&a["size".concat(Object(A.a)(f))])},y),"page"===h&&d,x?o.createElement(x,{className:a.icon}):null)})),H=Object(z.a)((function(e){return{root:Object(k.a)({},e.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(M.c)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(M.c)(e.palette.primary.main,.5)),backgroundColor:Object(M.c)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(M.c)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(M.c)(e.palette.secondary.main,.5)),backgroundColor:Object(M.c)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(M.c)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(T);function q(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var U=o.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,n=e.className,i=e.color,r=void 0===i?"standard":i,c=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),l=void 0===c?q:c,s=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),d=void 0===s?function(e){return o.createElement(H,e)}:s,u=e.shape,b=void 0===u?"round":u,p=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),m=void 0===p?"medium":p,g=e.variant,f=void 0===g?"text":g,v=Object(w.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,n=e.componentName,o=void 0===n?"usePagination":n,i=e.count,r=void 0===i?1:i,c=e.defaultPage,l=void 0===c?1:c,s=e.disabled,d=void 0!==s&&s,u=e.hideNextButton,b=void 0!==u&&u,p=e.hidePrevButton,m=void 0!==p&&p,g=e.onChange,f=e.page,v=e.showFirstButton,h=void 0!==v&&v,O=e.showLastButton,j=void 0!==O&&O,y=e.siblingCount,x=void 0===y?1:y,C=Object(w.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),N=a-1,z=L({controlled:f,default:l,name:o,state:"page"}),M=Object(I.a)(z,2),P=M[0],R=M[1],B=function(e,t){f||R(t),g&&g(e,t)},E=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},V=E(1,Math.min(N+1,r)),F=E(Math.max(r-N,N+2),r),S=Math.max(Math.min(P-x,r-N-2*x-2),N+3),A=Math.min(Math.max(P+x,N+2*x+3),F[0]-2),T=[].concat(Object($.a)(h?["first"]:[]),Object($.a)(m?[]:["previous"]),Object($.a)(V),Object($.a)(S>N+3?["start-ellipsis"]:2+N<r-N-1?[2+N]:[]),Object($.a)(E(S,A)),Object($.a)(A<r-N-2?["end-ellipsis"]:r-N-1>N+1?[r-N-1]:[]),Object($.a)(F),Object($.a)(b?[]:["next"]),Object($.a)(j?["last"]:[])),H=function(e){switch(e){case"first":return 1;case"previous":return P-1;case"next":return P+1;case"last":return r;default:return null}},q=T.map((function(e){return"number"==typeof e?{onClick:function(t){B(t,e)},type:"page",page:e,selected:e===P,disabled:d,"aria-current":e===P?"true":void 0}:{onClick:function(t){B(t,H(e))},type:e,page:H(e),selected:!1,disabled:d||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?P>=r:P<=1)}}));return Object(k.a)({items:q},C)}(Object(k.a)({},e,{componentName:"Pagination"})).items;return o.createElement("nav",Object(k.a)({"aria-label":"pagination navigation",className:Object(N.a)(a.root,n),ref:t},v),o.createElement("ul",{className:a.ul},h.map((function(e,t){return o.createElement("li",{key:t},d(Object(k.a)({},e,{color:r,"aria-label":l(e.type,e.page,e.selected),shape:b,size:m,variant:f})))}))))})),K=Object(z.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(U),W=a("blIu");function D(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n        margin-top: 2rem;\n      "]);return D=function(){return e},e}var J=function(e){var t=e.pageCount,a=e.currentPage,r=e.defaultUrl,c=e.lang,s=Object(W.a)().defaultLanguage,d=Object(o.useMemo)((function(){return c===s?"":c}),[s,c]),u=Object(o.useCallback)((function(e){return 1===e?""+r+d:r+"page/"+e+"/"+d}),[r,d]);return Object(n.c)(i.a,{display:"flex",justifyContent:"center",css:Object(n.b)(D())},Object(n.c)(K,{count:t,page:a,color:"primary",size:"large",renderItem:function(e){return Object(n.c)(H,Object.assign({component:l.Link,to:u(e.page)},e))}}))};function Z(){var e=Q(["\n              margin-bottom: 1rem;\n            "]);return Z=function(){return e},e}function G(){var e=Q(["\n              margin-bottom: 1rem;\n            "]);return G=function(){return e},e}function Q(e,t){return t||(t=e.slice(0)),e.raw=t,e}t.a=function(e){var t=e.posts,a=void 0===t?[]:t,l=e.location,s=e.pageInfo;return Object(n.c)(r.a,{location:l,left:Object(n.c)(o.Fragment,null,Object(n.c)(i.a,{css:Object(n.b)(G())},Object(n.c)(c.a,null)),Object(n.c)(i.a,null,Object(n.c)(x.a,null))),right:Object(n.c)(o.Fragment,null,Object(n.c)(i.a,{css:Object(n.b)(Z())},Object(n.c)(y.a,null)),Object(n.c)(i.a,null,Object(n.c)(C.a,null)))},Object(n.c)(j,{posts:a}),Object(n.c)(J,{pageCount:s.pageCount,currentPage:s.currentPage,defaultUrl:s.defaultUrl,lang:s.lang}))}},lFIR:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),i=a("q1tI"),r=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("VD++"),s=i.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.focusVisibleClassName,u=Object(o.a)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(l.a,Object(n.a)({className:Object(r.a)(c.root,s),focusVisibleClassName:Object(r.a)(d,c.focusVisible),ref:t},u),a,i.createElement("span",{className:c.focusHighlight}))}));t.a=Object(c.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(s)}}]);
//# sourceMappingURL=component---src-templates-posts-tsx-9a93a25d30f383408f13.js.map
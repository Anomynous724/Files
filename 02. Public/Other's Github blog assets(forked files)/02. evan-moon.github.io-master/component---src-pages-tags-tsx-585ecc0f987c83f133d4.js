(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2Q/g":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("sC2a");var o=function(e){return e.toLowerCase().replace(/\s/g,"-")}},"9jPY":function(e,a,t){"use strict";var o=t("wx14"),r=t("Ff2n"),l=t("q1tI"),c=(t("17x9"),t("iuhU")),n=t("5AJ6"),i=Object(n.a)(l.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),d=t("H2TA"),p=t("ye/S"),s=t("bfFb"),b=t("NqtD"),m=t("VD++");function u(e){return"Backspace"===e.key||"Delete"===e.key}var g=l.forwardRef((function(e,a){var t=e.avatar,n=e.classes,d=e.className,p=e.clickable,g=e.color,y=void 0===g?"default":g,h=e.component,f=e.deleteIcon,v=e.disabled,C=void 0!==v&&v,O=e.icon,k=e.label,j=e.onClick,S=e.onDelete,x=e.onKeyDown,w=e.onKeyUp,$=e.size,I=void 0===$?"medium":$,T=e.variant,R=void 0===T?"default":T,L=Object(r.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),E=l.useRef(null),N=Object(s.a)(E,a),P=function(e){e.stopPropagation(),S&&S(e)},z=!(!1===p||!j)||p,D="small"===I,K=h||(z?m.a:"div"),q=K===m.a?{component:"div"}:{},A=null;if(S){var F=Object(c.a)("default"!==y&&("default"===R?n["deleteIconColor".concat(Object(b.a)(y))]:n["deleteIconOutlinedColor".concat(Object(b.a)(y))]),D&&n.deleteIconSmall);A=f&&l.isValidElement(f)?l.cloneElement(f,{className:Object(c.a)(f.props.className,n.deleteIcon,F),onClick:P}):l.createElement(i,{className:Object(c.a)(n.deleteIcon,F),onClick:P})}var U=null;t&&l.isValidElement(t)&&(U=l.cloneElement(t,{className:Object(c.a)(n.avatar,t.props.className,D&&n.avatarSmall,"default"!==y&&n["avatarColor".concat(Object(b.a)(y))])}));var V=null;return O&&l.isValidElement(O)&&(V=l.cloneElement(O,{className:Object(c.a)(n.icon,O.props.className,D&&n.iconSmall,"default"!==y&&n["iconColor".concat(Object(b.a)(y))])})),l.createElement(K,Object(o.a)({role:z||S?"button":void 0,className:Object(c.a)(n.root,d,"default"!==y&&[n["color".concat(Object(b.a)(y))],z&&n["clickableColor".concat(Object(b.a)(y))],S&&n["deletableColor".concat(Object(b.a)(y))]],"default"!==R&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[y]],C&&n.disabled,D&&n.sizeSmall,z&&n.clickable,S&&n.deletable),"aria-disabled":!!C||void 0,tabIndex:z||S?0:void 0,onClick:j,onKeyDown:function(e){e.currentTarget===e.target&&u(e)&&e.preventDefault(),x&&x(e)},onKeyUp:function(e){e.currentTarget===e.target&&(S&&u(e)?S(e):"Escape"===e.key&&E.current&&E.current.blur()),w&&w(e)},ref:N},q,L),U||V,l.createElement("span",{className:Object(c.a)(n.label,D&&n.labelSmall)},k),A)}));a.a=Object(d.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(p.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(p.b)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(p.b)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(p.c)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(p.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(p.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(p.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(p.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(g)},xSjX:function(e,a,t){"use strict";t.r(a);var o=t("qKvR"),r=t("mpeT"),l=t("1Yd/"),c=t("GZdA"),n=t("urq+"),i=t("tl3u");a.default=function(e){var a=e.location;return Object(o.c)(r.a,{location:a,left:Object(o.c)(c.a,null),right:Object(o.c)(i.a,null)},Object(o.c)(l.a,{title:"태그"}),Object(o.c)(n.a,null))}}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-585ecc0f987c83f133d4.js.map
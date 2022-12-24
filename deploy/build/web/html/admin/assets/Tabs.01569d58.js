import{m as e,z as t,bb as n,bc as a,j as r,be as o,bH as i,bI as l,bJ as s,i as d,a3 as b,Q as c,bD as f,q as p,aQ as u,ak as v,N as g,bh as h,bK as x,aG as m,k as y,a6 as C,V as w,l as S,a7 as z,n as P,p as R,bm as $,ba as T,a9 as L,a4 as B,am as A,af as W,Z as _,bL as j,ae as k,v as N,x as E,ai as F,al as I,ao as O,br as M,bs as H,bM as D,bN as G}from"./index.9c865cdf.js";import{A as V}from"./Add.313e5361.js";const X=o(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[o("&::-webkit-scrollbar",{width:0,height:0})]),U=e({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=t(null);const r=n();X.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:a,ssr:r});const o={scrollTo(...t){var n;null===(n=e.value)||void 0===n||n.scrollTo(...t)}};return Object.assign({selfRef:e,handleWheel:function(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&0!==e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}},o)},render(){return r("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var q=/\s/;var Q=/^\s+/;function Y(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&q.test(e.charAt(t)););return t}(e)+1).replace(Q,""):e}var J=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,ee=parseInt;function te(e){if("number"==typeof e)return e;if(i(e))return NaN;if(l(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=l(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Y(e);var n=K.test(e);return n||Z.test(e)?ee(e.slice(2),n?2:8):J.test(e)?NaN:+e}const ne=function(){return s.Date.now()};var ae=Math.max,re=Math.min;function oe(e,t,n){var a,r,o,i,s,d,b=0,c=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function u(t){var n=a,o=r;return a=r=void 0,b=t,i=e.apply(o,n)}function v(e){return b=e,s=setTimeout(h,t),c?u(e):i}function g(e){var n=e-d;return void 0===d||n>=t||n<0||f&&e-b>=o}function h(){var e=ne();if(g(e))return x(e);s=setTimeout(h,function(e){var n=t-(e-d);return f?re(n,o-(e-b)):n}(e))}function x(e){return s=void 0,p&&a?u(e):(a=r=void 0,i)}function m(){var e=ne(),n=g(e);if(a=arguments,r=this,d=e,n){if(void 0===s)return v(d);if(f)return clearTimeout(s),s=setTimeout(h,t),u(d)}return void 0===s&&(s=setTimeout(h,t)),i}return t=te(t)||0,l(n)&&(c=!!n.leading,o=(f="maxWait"in n)?ae(te(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),m.cancel=function(){void 0!==s&&clearTimeout(s),b=0,a=d=r=s=void 0},m.flush=function(){return void 0===s?i:x(ne())},m}function ie(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return l(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),oe(e,t,{leading:a,maxWait:t,trailing:r})}const le={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},se={name:"Tabs",common:d,self:e=>{const{textColor2:t,primaryColor:n,textColorDisabled:a,closeIconColor:r,closeIconColorHover:o,closeIconColorPressed:i,closeColorHover:l,closeColorPressed:s,tabColor:d,baseColor:b,dividerColor:c,fontWeight:f,textColor1:p,borderRadius:u,fontSize:v,fontWeightStrong:g}=e;return Object.assign(Object.assign({},le),{colorSegment:d,tabFontSizeCard:v,tabTextColorLine:p,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:a,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:a,tabTextColorBar:p,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:a,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:n,tabTextColorDisabledCard:a,barColor:n,closeIconColor:r,closeIconColorHover:o,closeIconColorPressed:i,closeColorHover:l,closeColorPressed:s,closeBorderRadius:u,tabColor:d,tabColorSegment:b,tabBorderColor:c,tabFontWeightActive:f,tabFontWeight:f,tabBorderRadius:u,paneTextColor:t,fontWeightStrong:g})}},de=b("n-tabs"),be={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ce=e({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:be,setup(e){const t=c(de,null);return t||f("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return r("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),fe=e({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},m(be,["displayDirective"])),setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:a,closableRef:r,tabStyleRef:o,tabChangeIdRef:i,onBeforeLeaveRef:l,triggerRef:s,handleAdd:d,activateTab:b,handleClose:f}=c(de);return{trigger:s,mergedClosable:p((()=>{if(e.internalAddable)return!1;const{closable:t}=e;return void 0===t?r.value:t})),style:o,clsPrefix:t,value:n,type:a,handleClose(t){t.stopPropagation(),e.disabled||f(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable)return void d();const{name:t}=e,a=++i.id;if(t!==n.value){const{value:r}=l;r?Promise.resolve(r(e.name,n.value)).then((e=>{e&&i.id===a&&b(t)})):b(t)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:a,label:o,tab:i,value:l,mergedClosable:s,style:d,trigger:b,$slots:{default:c}}=this,f=null!=o?o:i;return r("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?r("div",{class:`${t}-tabs-tab-pad`}):null,r("div",Object.assign({key:n,"data-name":n,"data-disabled":!!a||void 0},u({class:[`${t}-tabs-tab`,l===n&&`${t}-tabs-tab--active`,a&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:"click"===b?this.activateTab:void 0,onMouseenter:"hover"===b?this.activateTab:void 0,style:e?void 0:d},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),r("span",{class:`${t}-tabs-tab__label`},e?r(v,null,r("div",{class:`${t}-tabs-tab__height-placeholder`}," "),r(g,{clsPrefix:t},{default:()=>r(V,null)})):c?c():"object"==typeof f?f:h(null!=f?f:n)),s&&"card"===this.type?r(x,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:a}):null))}}),pe=y("tabs","\n box-sizing: border-box;\n width: 100%;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n",[C("segment-type",[y("tabs-rail",[w("&.transition-disabled","color: red;",[y("tabs-tab","\n transition: none;\n ")])])]),y("tabs-rail","\n padding: 3px;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n background-color: var(--n-color-segment);\n transition: background-color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ",[y("tabs-tab-wrapper","\n flex-basis: 0;\n flex-grow: 1;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[y("tabs-tab","\n overflow: hidden;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[C("active","\n font-weight: var(--n-font-weight-strong);\n color: var(--n-tab-text-color-active);\n background-color: var(--n-tab-color-segment);\n box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);\n "),w("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])])]),C("flex",[y("tabs-nav",{width:"100%"},[y("tabs-wrapper",{width:"100%"},[y("tabs-tab",{marginRight:0})])])]),y("tabs-nav","\n box-sizing: border-box;\n line-height: 1.5;\n display: flex;\n transition: border-color .3s var(--n-bezier);\n ",[S("prefix, suffix","\n display: flex;\n align-items: center;\n "),S("prefix","padding-right: 16px;"),S("suffix","padding-left: 16px;")]),y("tabs-nav-scroll-wrapper","\n flex: 1;\n position: relative;\n overflow: hidden;\n ",[C("shadow-before",[w("&::before","\n box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),C("shadow-after",[w("&::after","\n box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),w("&::before, &::after",'\n transition: box-shadow .3s var(--n-bezier);\n pointer-events: none;\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 20px;\n z-index: 1;\n '),w("&::before","\n left: 0;\n "),w("&::after","\n right: 0;\n ")]),y("tabs-nav-scroll-content","\n display: flex;\n position: relative;\n min-width: 100%;\n width: fit-content;\n "),y("tabs-wrapper","\n display: inline-flex;\n flex-wrap: nowrap;\n position: relative;\n "),y("tabs-tab-wrapper","\n display: flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n flex-grow: 0;\n "),y("tabs-tab","\n cursor: pointer;\n white-space: nowrap;\n flex-wrap: nowrap;\n display: inline-flex;\n align-items: center;\n color: var(--n-tab-text-color);\n font-size: var(--n-tab-font-size);\n background-clip: padding-box;\n padding: var(--n-tab-padding);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[C("disabled",{cursor:"not-allowed"}),S("close","\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),S("label","\n display: flex;\n align-items: center;\n ")]),y("tabs-bar","\n position: absolute;\n bottom: 0;\n height: 2px;\n border-radius: 1px;\n background-color: var(--n-bar-color);\n transition:\n left .2s var(--n-bezier),\n max-width .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ",[w("&.transition-disabled","\n transition: none;\n "),C("disabled","\n background-color: var(--n-tab-text-color-disabled)\n ")]),y("tabs-pane-wrapper","\n position: relative;\n overflow: hidden;\n transition: max-height .2s var(--n-bezier);\n "),y("tab-pane","\n color: var(--n-pane-text-color);\n width: 100%;\n padding: var(--n-pane-padding);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .2s var(--n-bezier);\n left: 0;\n right: 0;\n top: 0;\n ",[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .2s var(--n-bezier),\n opacity .2s var(--n-bezier);\n "),w("&.next-transition-leave-active, &.prev-transition-leave-active","\n position: absolute;\n "),w("&.next-transition-enter-from, &.prev-transition-leave-to","\n transform: translateX(32px);\n opacity: 0;\n "),w("&.next-transition-leave-to, &.prev-transition-enter-from","\n transform: translateX(-32px);\n opacity: 0;\n "),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to","\n transform: translateX(0);\n opacity: 1;\n ")]),y("tabs-tab-pad","\n width: var(--n-tab-gap);\n flex-grow: 0;\n flex-shrink: 0;\n "),C("line-type, bar-type",[y("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n box-sizing: border-box;\n vertical-align: bottom;\n ",[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),C("active","\n color: var(--n-tab-text-color-active);\n font-weight: var(--n-tab-font-weight-active);\n "),C("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),y("tabs-nav",[C("line-type",[S("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),y("tabs-nav-scroll-content","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),y("tabs-bar","\n border-radius: 0;\n bottom: -1px;\n ")]),C("card-type",[S("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),y("tabs-pad","\n flex-grow: 1;\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),y("tabs-tab-pad","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),y("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n border: 1px solid var(--n-tab-border-color);\n border-top-left-radius: var(--n-tab-border-radius);\n border-top-right-radius: var(--n-tab-border-radius);\n background-color: var(--n-tab-color);\n box-sizing: border-box;\n position: relative;\n vertical-align: bottom;\n display: flex;\n justify-content: space-between;\n font-size: var(--n-tab-font-size);\n color: var(--n-tab-text-color);\n ",[C("addable","\n padding-left: 8px;\n padding-right: 8px;\n font-size: 16px;\n ",[S("height-placeholder","\n width: 0;\n font-size: var(--n-tab-font-size);\n "),z("disabled",[w("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])]),C("closable","padding-right: 6px;"),C("active","\n border-bottom: 1px solid #0000;\n background-color: #0000;\n font-weight: var(--n-tab-font-weight-active);\n color: var(--n-tab-text-color-active);\n "),C("disabled","color: var(--n-tab-text-color-disabled);")]),y("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]),ue=e({name:"Tabs",props:Object.assign(Object.assign({},R.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),setup(e,{slots:n}){var a,r,o,i;const{mergedClsPrefixRef:l,inlineThemeDisabled:s}=P(e),d=R("Tabs","-tabs",pe,se,e,l),b=t(null),c=t(null),f=t(null),u=t(null),v=t(null),g=t(!0),h=t(!0),x=$(e,["labelSize","size"]),m=$(e,["activeName","value"]),y=t(null!==(r=null!==(a=m.value)&&void 0!==a?a:e.defaultValue)&&void 0!==r?r:n.default?null===(i=null===(o=T(n.default())[0])||void 0===o?void 0:o.props)||void 0===i?void 0:i.name:null),C=L(m,y),w={id:0},S=p((()=>{if(e.justifyContent&&"card"!==e.type)return{display:"flex",justifyContent:e.justifyContent}}));function z(){var e;const{value:t}=C;if(null===t)return null;return null===(e=b.value)||void 0===e?void 0:e.querySelector(`[data-name="${t}"]`)}function F(){if("card"===e.type)return;const t=z();t&&function(t){if("card"===e.type)return;const{value:n}=c;if(n&&t){const a=`${l.value}-tabs-bar--disabled`,{barWidth:r}=e;if("true"===t.dataset.disabled?n.classList.add(a):n.classList.remove(a),"number"==typeof r&&t.offsetWidth>=r){const e=Math.floor((t.offsetWidth-r)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${r}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}}(t)}function I(e){var t;const n=null===(t=v.value)||void 0===t?void 0:t.$el;if(!n)return;const a=z();if(!a)return;const{scrollLeft:r,offsetWidth:o}=n,{offsetLeft:i,offsetWidth:l}=a;r>i?n.scrollTo({top:0,left:i,behavior:"smooth"}):i+l>r+o&&n.scrollTo({top:0,left:i+l-o,behavior:"smooth"})}B(C,(()=>{w.id=0,F(),I()}));const M=t(null);let H=0,D=null;const G={value:[]},V=t("next");function X(){const{value:e}=c;if(!e)return;const t="transition-disabled";e.classList.add(t),F(),e.classList.remove(t)}let U=0;const q=ie((function(t){var n;if(0===t.contentRect.width&&0===t.contentRect.height)return;if(U===t.contentRect.width)return;U=t.contentRect.width;const{type:a}=e;"line"!==a&&"bar"!==a||X(),"segment"!==a&&J(null===(n=v.value)||void 0===n?void 0:n.$el)}),64);B([()=>e.justifyContent,()=>e.size],(()=>{A((()=>{const{type:t}=e;"line"!==t&&"bar"!==t||X()}))}));const Q=t(!1);const Y=ie((function(e){var t;const{target:n,contentRect:{width:a}}=e,r=n.parentElement.offsetWidth;if(Q.value){const{value:e}=u;if(!e)return;r-a>e.$el.offsetWidth&&(Q.value=!1)}else r<a&&(Q.value=!0);J(null===(t=v.value)||void 0===t?void 0:t.$el)}),64);function J(e){if(!e)return;const{scrollLeft:t,scrollWidth:n,offsetWidth:a}=e;g.value=t<=0,h.value=t+a>=n}const K=ie((e=>{J(e.target)}),64);W(de,{triggerRef:_(e,"trigger"),tabStyleRef:_(e,"tabStyle"),paneClassRef:_(e,"paneClass"),paneStyleRef:_(e,"paneStyle"),mergedClsPrefixRef:l,typeRef:_(e,"type"),closableRef:_(e,"closable"),valueRef:C,tabChangeIdRef:w,onBeforeLeaveRef:_(e,"onBeforeLeave"),activateTab:function(t){const n=C.value;let a="next";for(const e of G.value){if(e===n)break;if(e===t){a="prev";break}}V.value=a,function(t){const{onActiveNameChange:n,onUpdateValue:a,"onUpdate:value":r}=e;n&&O(n,t);a&&O(a,t);r&&O(r,t);y.value=t}(t)},handleClose:function(t){const{onClose:n}=e;n&&O(n,t)},handleAdd:function(){const{onAdd:t}=e;t&&t(),A((()=>{const e=z(),{value:t}=v;e&&t&&t.scrollTo({left:e.offsetLeft,top:0,behavior:"smooth"})}))}}),j((()=>{F(),I()})),k((()=>{const{value:e}=f;if(!e)return;const{value:t}=l,n=`${t}-tabs-nav-scroll-wrapper--shadow-before`,a=`${t}-tabs-nav-scroll-wrapper--shadow-after`;g.value?e.classList.remove(n):e.classList.add(n),h.value?e.classList.remove(a):e.classList.add(a)}));const Z=t(null);B(C,(()=>{if("segment"===e.type){const e=Z.value;e&&A((()=>{e.classList.add("transition-disabled"),e.offsetWidth,e.classList.remove("transition-disabled")}))}}));const ee={syncBarPosition:()=>{F()}},te=p((()=>{const{value:t}=x,{type:n}=e,a=`${t}${{card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n]}`,{self:{barColor:r,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:l,tabColor:s,tabBorderColor:b,paneTextColor:c,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:u,colorSegment:v,fontWeightStrong:g,tabColorSegment:h,closeSize:m,closeIconSize:y,closeColorHover:C,closeColorPressed:w,closeBorderRadius:S,[N("panePadding",t)]:z,[N("tabPadding",a)]:P,[N("tabGap",a)]:R,[N("tabTextColor",n)]:$,[N("tabTextColorActive",n)]:T,[N("tabTextColorHover",n)]:L,[N("tabTextColorDisabled",n)]:B,[N("tabFontSize",t)]:A},common:{cubicBezierEaseInOut:W}}=d.value;return{"--n-bezier":W,"--n-color-segment":v,"--n-bar-color":r,"--n-tab-font-size":A,"--n-tab-text-color":$,"--n-tab-text-color-active":T,"--n-tab-text-color-disabled":B,"--n-tab-text-color-hover":L,"--n-pane-text-color":c,"--n-tab-border-color":b,"--n-tab-border-radius":p,"--n-close-size":m,"--n-close-icon-size":y,"--n-close-color-hover":C,"--n-close-color-pressed":w,"--n-close-border-radius":S,"--n-close-icon-color":o,"--n-close-icon-color-hover":i,"--n-close-icon-color-pressed":l,"--n-tab-color":s,"--n-tab-font-weight":f,"--n-tab-font-weight-active":u,"--n-tab-padding":P,"--n-tab-gap":R,"--n-pane-padding":z,"--n-font-weight-strong":g,"--n-tab-color-segment":h}})),ne=s?E("tabs",p((()=>`${x.value[0]}${e.type[0]}`)),te,e):void 0;return Object.assign({mergedClsPrefix:l,mergedValue:C,renderedNames:new Set,tabsRailElRef:Z,tabsPaneWrapperRef:M,tabsElRef:b,barElRef:c,addTabInstRef:u,xScrollInstRef:v,scrollWrapperElRef:f,addTabFixed:Q,tabWrapperStyle:S,handleNavResize:q,mergedSize:x,handleScroll:K,handleTabsResize:Y,cssVars:s?void 0:te,themeClass:null==ne?void 0:ne.themeClass,animationDirection:V,renderNameListRef:G,onAnimationBeforeLeave:function(e){const t=M.value;if(t){H=e.getBoundingClientRect().height;const n=`${H}px`,a=()=>{t.style.height=n,t.style.maxHeight=n};D?(a(),D(),D=null):D=a}},onAnimationEnter:function(e){const t=M.value;if(t){const n=e.getBoundingClientRect().height,a=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(H,n)}px`};D?(D(),D=null,a()):D=a}},onAnimationAfterEnter:function(){const e=M.value;e&&(e.style.maxHeight="",e.style.height="")},onRender:null==ne?void 0:ne.onRender},ee)},render(){const{mergedClsPrefix:e,type:t,addTabFixed:n,addable:a,mergedSize:o,renderNameListRef:i,onRender:l,$slots:{default:s,prefix:d,suffix:b}}=this;null==l||l();const c=s?T(s()).filter((e=>!0===e.type.__TAB_PANE__)):[],f=s?T(s()).filter((e=>!0===e.type.__TAB__)):[],p=!f.length,u="card"===t,v="segment"===t,g=!u&&!v&&this.justifyContent;return i.value=[],r("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${o}-size`,g&&`${e}-tabs--flex`],style:this.cssVars},r("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav`]},F(d,(t=>t&&r("div",{class:`${e}-tabs-nav__prefix`},t))),v?r("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},p?c.map(((e,t)=>(i.value.push(e.props.name),r(fe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t}),e.children?{default:e.children.tab}:void 0)))):f.map(((e,t)=>(i.value.push(e.props.name),0===t?e:he(e))))):r(I,{onResize:this.handleNavResize},{default:()=>r("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},r(U,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const t=r("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},g?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),p?c.map(((e,t)=>(i.value.push(e.props.name),xe(r(fe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t&&(!g||"center"===g||"start"===g||"end"===g)}),e.children?{default:e.children.tab}:void 0))))):f.map(((e,t)=>(i.value.push(e.props.name),xe(0===t||g?e:he(e))))),!n&&a&&u?ge(a,0!==(p?c.length:f.length)):null,g?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let o=t;return u&&a&&(o=r(I,{onResize:this.handleTabsResize},{default:()=>t})),r("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},o,u?r("div",{class:`${e}-tabs-pad`}):null,u?null:r("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),n&&a&&u?ge(a,!0):null,F(b,(t=>t&&r("div",{class:`${e}-tabs-nav__suffix`},t)))),p&&(this.animated?r("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},ve(c,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ve(c,this.mergedValue,this.renderedNames)))}});function ve(e,t,n,a,o,i,l){const s=[];return e.forEach((e=>{const{name:a,displayDirective:r,"display-directive":o}=e.props,i=e=>r===e||o===e,l=t===a;if(void 0!==e.key&&(e.key=a),l||i("show")||i("show:lazy")&&n.has(a)){n.has(a)||n.add(a);const t=!i("if");s.push(t?M(e,[[H,l]]):e)}})),l?r(D,{name:`${l}-transition`,onBeforeLeave:a,onEnter:o,onAfterEnter:i},{default:()=>s}):s}function ge(e,t){return r(fe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:"object"==typeof e&&e.disabled})}function he(e){const t=G(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function xe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{ce as _,ue as a};

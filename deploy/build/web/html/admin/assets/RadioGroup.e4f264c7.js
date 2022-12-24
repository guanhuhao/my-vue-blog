import{m as e,bb as o,bc as t,ac as n,bd as r,b2 as i,q as a,z as l,ab as s,aR as d,aV as u,j as c,aQ as b,al as h,be as v,b0 as p,i as f,a2 as g,a3 as m,aa as x,Q as w,Z as S,a9 as z,n as y,ao as R,k,a6 as C,l as B,V as T,a7 as F,p as $,v as I,ag as D,x as H,ai as A,af as _,ba as E}from"./index.9d7012d3.js";import{g as V}from"./get-slot.8207e825.js";function L(e){return e&-e}class M{constructor(e,o){this.l=e,this.min=o;const t=new Array(e+1);for(let n=0;n<e+1;++n)t[n]=0;this.ft=t}add(e,o){if(0===o)return;const{l:t,ft:n}=this;for(e+=1;e<=t;)n[e]+=o,e+=L(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(void 0===e&&(e=this.l),e<=0)return 0;const{ft:o,min:t,l:n}=this;if(e>n)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let r=e*t;for(;e>0;)r+=o[e],e-=L(e);return r}getBound(e){let o=0,t=this.l;for(;t>o;){const n=Math.floor((o+t)/2),r=this.sum(n);if(r>e)t=n;else{if(!(r<e))return n;if(o===n)return this.sum(o+1)<=e?o+1:n;o=n}}return o}}let P,j;function N(){return void 0===j&&(j="chrome"in window?window.devicePixelRatio:1),j}const O=v(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[v("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[v("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),U=e({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const c=o();O.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:t,ssr:c}),n((()=>{const{defaultScrollIndex:o,defaultScrollKey:t}=e;null!=o?k({index:o}):null!=t&&k({key:t})}));let b=!1,h=!1;r((()=>{b=!1,h?k({top:z.value,left:S}):h=!0})),i((()=>{b=!0,h||(h=!0)}));const v=a((()=>{const o=new Map,{keyField:t}=e;return e.items.forEach(((e,n)=>{o.set(e[t],n)})),o})),f=l(null),g=l(void 0),m=new Map,x=a((()=>{const{items:o,itemSize:t,keyField:n}=e,r=new M(o.length,t);return o.forEach(((e,o)=>{const t=e[n],i=m.get(t);void 0!==i&&r.add(o,i)})),r})),w=l(0);let S=0;const z=l(0),y=s((()=>Math.max(x.value.getBound(z.value-d(e.paddingTop))-1,0))),R=a((()=>{const{value:o}=g;if(void 0===o)return[];const{items:t,itemSize:n}=e,r=y.value,i=Math.min(r+Math.ceil(o/n+1),t.length-1),a=[];for(let e=r;e<=i;++e)a.push(t[e]);return a})),k=(e,o)=>{if("number"==typeof e)return void F(e,o,"auto");const{left:t,top:n,index:r,key:i,position:a,behavior:l,debounce:s=!0}=e;if(void 0!==t||void 0!==n)F(t,n,l);else if(void 0!==r)T(r,l,s);else if(void 0!==i){const e=v.value.get(i);void 0!==e&&T(e,l,s)}else"bottom"===a?F(0,Number.MAX_SAFE_INTEGER,l):"top"===a&&F(0,0,l)};let C,B=null;function T(o,t,n){const{value:r}=x,i=r.sum(o)+d(e.paddingTop);if(n){C=o,null!==B&&window.clearTimeout(B),B=window.setTimeout((()=>{C=void 0,B=null}),16);const{scrollTop:e,offsetHeight:n}=f.value;if(i>e){const a=r.get(o);i+a<=e+n||f.value.scrollTo({left:0,top:i+a-n,behavior:t})}else f.value.scrollTo({left:0,top:i,behavior:t})}else f.value.scrollTo({left:0,top:i,behavior:t})}function F(e,o,t){f.value.scrollTo({left:e,top:o,behavior:t})}const $=(void 0===P&&(P="matchMedia"in window&&window.matchMedia("(pointer:coarse)").matches),!P);let I=!1;function D(){const{value:e}=f;null!=e&&(z.value=e.scrollTop,S=e.scrollLeft)}function H(e){let o=e;for(;null!==o;){if("none"===o.style.display)return!0;o=o.parentElement}return!1}return{listHeight:g,listStyle:{overflow:"auto"},keyToIndex:v,itemsStyle:a((()=>{const{itemResizable:o}=e,t=u(x.value.sum());return w.value,[e.itemsStyle,{boxSizing:"content-box",height:o?"":t,minHeight:o?t:"",paddingTop:u(e.paddingTop),paddingBottom:u(e.paddingBottom)}]})),visibleItemsStyle:a((()=>(w.value,{transform:`translateY(${u(x.value.sum(y.value))})`}))),viewportItems:R,listElRef:f,itemsElRef:l(null),scrollTo:k,handleListResize:function(o){if(b)return;if(H(o.target))return;if(o.contentRect.height===g.value)return;g.value=o.contentRect.height;const{onResize:t}=e;void 0!==t&&t(o)},handleListScroll:function(o){var t;null===(t=e.onScroll)||void 0===t||t.call(e,o),$&&I||D()},handleListWheel:function(o){var t;if(null===(t=e.onWheel)||void 0===t||t.call(e,o),$){const e=f.value;if(null!=e){if(0===o.deltaX){if(0===e.scrollTop&&o.deltaY<=0)return;if(e.scrollTop+e.offsetHeight>=e.scrollHeight&&o.deltaY>=0)return}o.preventDefault(),e.scrollTop+=o.deltaY/N(),e.scrollLeft+=o.deltaX/N(),D(),I=!0,p((()=>{I=!1}))}}},handleItemResize:function(o,t){var n,r,i;if(b)return;if(e.ignoreItemResize)return;if(H(t.target))return;const{value:a}=x,l=v.value.get(o),s=a.get(l),d=null!==(i=null===(r=null===(n=t.borderBoxSize)||void 0===n?void 0:n[0])||void 0===r?void 0:r.blockSize)&&void 0!==i?i:t.contentRect.height;if(d===s)return;0===d-e.itemSize?m.delete(o):m.set(o,d-e.itemSize);const u=d-s;if(0===u)return;a.add(l,u);const c=f.value;if(null!=c){if(void 0===C){const e=a.sum(l);c.scrollTop>e&&c.scrollBy(0,u)}else if(l<C)c.scrollBy(0,u);else if(l===C){d+a.sum(l)>c.scrollTop+c.offsetHeight&&c.scrollBy(0,u)}D()}w.value++}}},render(){const{itemResizable:e,keyField:o,keyToIndex:t,visibleItemsTag:n}=this;return c(h,{onResize:this.handleListResize},{default:()=>{var r,i;return c("div",b(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[0!==this.items.length?c("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[c(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map((n=>{const r=n[o],i=t.get(r),a=this.$slots.default({item:n,index:i})[0];return e?c(h,{key:r,onResize:e=>this.handleItemResize(r,e)},{default:()=>a}):(a.key=r,a)}))})]):null===(i=(r=this.$slots).empty)||void 0===i?void 0:i.call(r)])}})}}),W=e({props:{onFocus:Function,onBlur:Function},setup:e=>()=>c("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}),Y={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px"},G={name:"Radio",common:f,self:e=>{const{borderColor:o,primaryColor:t,baseColor:n,textColorDisabled:r,inputColorDisabled:i,textColor2:a,opacityDisabled:l,borderRadius:s,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:c,heightSmall:b,heightMedium:h,heightLarge:v,lineHeight:p}=e;return Object.assign(Object.assign({},Y),{labelLineHeight:p,buttonHeightSmall:b,buttonHeightMedium:h,buttonHeightLarge:v,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:c,boxShadow:`inset 0 0 0 1px ${o}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${g(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${o}`,color:n,colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:r,dotColorActive:t,dotColorDisabled:o,buttonBorderColor:o,buttonBorderColorActive:t,buttonBorderColorHover:o,buttonColor:n,buttonColorActive:n,buttonTextColor:a,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:l,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${g(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:s})}},X={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},q=m("n-radio-group");function K(e){const o=x(e,{mergedSize(o){const{size:t}=e;if(void 0!==t)return t;if(a){const{mergedSizeRef:{value:e}}=a;if(void 0!==e)return e}return o?o.mergedSize.value:"medium"},mergedDisabled:o=>!!e.disabled||(!!(null==a?void 0:a.disabledRef.value)||!!(null==o?void 0:o.disabled.value))}),{mergedSizeRef:t,mergedDisabledRef:n}=o,r=l(null),i=l(null),a=w(q,null),d=l(e.defaultChecked),u=S(e,"checked"),c=z(u,d),b=s((()=>a?a.valueRef.value===e.value:c.value)),h=s((()=>{const{name:o}=e;return void 0!==o?o:a?a.nameRef.value:void 0})),v=l(!1);function p(){n.value||b.value||function(){if(a){const{doUpdateValue:o}=a,{value:t}=e;R(o,t)}else{const{onUpdateChecked:t,"onUpdate:checked":n}=e,{nTriggerFormInput:r,nTriggerFormChange:i}=o;t&&R(t,!0),n&&R(n,!0),r(),i(),d.value=!0}}()}return{mergedClsPrefix:a?a.mergedClsPrefixRef:y(e).mergedClsPrefixRef,inputRef:r,labelRef:i,mergedName:h,mergedDisabled:n,uncontrolledChecked:d,renderSafeChecked:b,focus:v,mergedSize:t,handleRadioInputChange:function(){p()},handleRadioInputBlur:function(){v.value=!1},handleRadioInputFocus:function(){v.value=!0}}}const Q=k("radio","\n line-height: var(--n-label-line-height);\n outline: none;\n position: relative;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n align-items: flex-start;\n flex-wrap: nowrap;\n font-size: var(--n-font-size);\n word-break: break-word;\n",[C("checked",[B("dot","\n background-color: var(--n-color-active);\n ")]),B("dot-wrapper","\n position: relative;\n flex-shrink: 0;\n flex-grow: 0;\n width: var(--n-radio-size);\n "),k("radio-input","\n position: absolute;\n border: 0;\n border-radius: inherit;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n opacity: 0;\n z-index: 1;\n cursor: pointer;\n "),B("dot","\n position: absolute;\n top: 50%;\n left: 0;\n transform: translateY(-50%);\n height: var(--n-radio-size);\n width: var(--n-radio-size);\n background: var(--n-color);\n box-shadow: var(--n-box-shadow);\n border-radius: 50%;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ",[T("&::before",'\n content: "";\n opacity: 0;\n position: absolute;\n left: 4px;\n top: 4px;\n height: calc(100% - 8px);\n width: calc(100% - 8px);\n border-radius: 50%;\n transform: scale(.8);\n background: var(--n-dot-color-active);\n transition: \n opacity .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .3s var(--n-bezier);\n '),C("checked",{boxShadow:"var(--n-box-shadow-active)"},[T("&::before","\n opacity: 1;\n transform: scale(1);\n ")])]),B("label","\n color: var(--n-text-color);\n padding: var(--n-label-padding);\n display: inline-block;\n transition: color .3s var(--n-bezier);\n "),F("disabled","\n cursor: pointer;\n ",[T("&:hover",[B("dot",{boxShadow:"var(--n-box-shadow-hover)"})]),C("focus",[T("&:not(:active)",[B("dot",{boxShadow:"var(--n-box-shadow-focus)"})])])]),C("disabled","\n cursor: not-allowed;\n ",[B("dot",{boxShadow:"var(--n-box-shadow-disabled)",backgroundColor:"var(--n-color-disabled)"},[T("&::before",{backgroundColor:"var(--n-dot-color-disabled)"}),C("checked","\n opacity: 1;\n ")]),B("label",{color:"var(--n-text-color-disabled)"}),k("radio-input","\n cursor: not-allowed;\n ")])]),Z=e({name:"Radio",props:Object.assign(Object.assign({},$.props),X),setup(e){const o=K(e),t=$("Radio","-radio",Q,G,e,o.mergedClsPrefix),n=a((()=>{const{mergedSize:{value:e}}=o,{common:{cubicBezierEaseInOut:n},self:{boxShadow:r,boxShadowActive:i,boxShadowDisabled:a,boxShadowFocus:l,boxShadowHover:s,color:d,colorDisabled:u,colorActive:c,textColor:b,textColorDisabled:h,dotColorActive:v,dotColorDisabled:p,labelPadding:f,labelLineHeight:g,[I("fontSize",e)]:m,[I("radioSize",e)]:x}}=t.value;return{"--n-bezier":n,"--n-label-line-height":g,"--n-box-shadow":r,"--n-box-shadow-active":i,"--n-box-shadow-disabled":a,"--n-box-shadow-focus":l,"--n-box-shadow-hover":s,"--n-color":d,"--n-color-active":c,"--n-color-disabled":u,"--n-dot-color-active":v,"--n-dot-color-disabled":p,"--n-font-size":m,"--n-radio-size":x,"--n-text-color":b,"--n-text-color-disabled":h,"--n-label-padding":f}})),{inlineThemeDisabled:r,mergedClsPrefixRef:i,mergedRtlRef:l}=y(e),s=D("Radio",l,i),d=r?H("radio",a((()=>o.mergedSize.value[0])),n,e):void 0;return Object.assign(o,{rtlEnabled:s,cssVars:r?void 0:n,themeClass:null==d?void 0:d.themeClass,onRender:null==d?void 0:d.onRender})},render(){const{$slots:e,mergedClsPrefix:o,onRender:t,label:n}=this;return null==t||t(),c("label",{class:[`${o}-radio`,this.themeClass,{[`${o}-radio--rtl`]:this.rtlEnabled,[`${o}-radio--disabled`]:this.mergedDisabled,[`${o}-radio--checked`]:this.renderSafeChecked,[`${o}-radio--focus`]:this.focus}],style:this.cssVars},c("input",{ref:"inputRef",type:"radio",class:`${o}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),c("div",{class:`${o}-radio__dot-wrapper`}," ",c("div",{class:[`${o}-radio__dot`,this.renderSafeChecked&&`${o}-radio__dot--checked`]})),A(e.default,(e=>e||n?c("div",{ref:"labelRef",class:`${o}-radio__label`},e||n):null)))}}),J=k("radio-group","\n display: inline-block;\n font-size: var(--n-font-size);\n",[B("splitor","\n display: inline-block;\n vertical-align: bottom;\n width: 1px;\n transition:\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n background: var(--n-button-border-color);\n ",[C("checked",{backgroundColor:"var(--n-button-border-color-active)"}),C("disabled",{opacity:"var(--n-opacity-disabled)"})]),C("button-group","\n white-space: nowrap;\n height: var(--n-height);\n line-height: var(--n-height);\n ",[k("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),B("splitor",{height:"var(--n-height)"})]),k("radio-button","\n vertical-align: bottom;\n outline: none;\n position: relative;\n user-select: none;\n -webkit-user-select: none;\n display: inline-block;\n box-sizing: border-box;\n padding-left: 14px;\n padding-right: 14px;\n white-space: nowrap;\n transition:\n background-color .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: var(--n-button-text-color);\n border-top: 1px solid var(--n-button-border-color);\n border-bottom: 1px solid var(--n-button-border-color);\n ",[k("radio-input","\n pointer-events: none;\n position: absolute;\n border: 0;\n border-radius: inherit;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n opacity: 0;\n z-index: 1;\n "),B("state-border","\n z-index: 1;\n pointer-events: none;\n position: absolute;\n box-shadow: var(--n-button-box-shadow);\n transition: box-shadow .3s var(--n-bezier);\n left: -1px;\n bottom: -1px;\n right: -1px;\n top: -1px;\n "),T("&:first-child","\n border-top-left-radius: var(--n-button-border-radius);\n border-bottom-left-radius: var(--n-button-border-radius);\n border-left: 1px solid var(--n-button-border-color);\n ",[B("state-border","\n border-top-left-radius: var(--n-button-border-radius);\n border-bottom-left-radius: var(--n-button-border-radius);\n ")]),T("&:last-child","\n border-top-right-radius: var(--n-button-border-radius);\n border-bottom-right-radius: var(--n-button-border-radius);\n border-right: 1px solid var(--n-button-border-color);\n ",[B("state-border","\n border-top-right-radius: var(--n-button-border-radius);\n border-bottom-right-radius: var(--n-button-border-radius);\n ")]),F("disabled","\n cursor: pointer;\n ",[T("&:hover",[B("state-border","\n transition: box-shadow .3s var(--n-bezier);\n box-shadow: var(--n-button-box-shadow-hover);\n "),F("checked",{color:"var(--n-button-text-color-hover)"})]),C("focus",[T("&:not(:active)",[B("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),C("checked","\n background: var(--n-button-color-active);\n color: var(--n-button-text-color-active);\n border-color: var(--n-button-border-color-active);\n "),C("disabled","\n cursor: not-allowed;\n opacity: var(--n-opacity-disabled);\n ")])]);const ee=e({name:"RadioGroup",props:Object.assign(Object.assign({},$.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(e){const o=l(null),{mergedSizeRef:t,mergedDisabledRef:n,nTriggerFormChange:r,nTriggerFormInput:i,nTriggerFormBlur:s,nTriggerFormFocus:d}=x(e),{mergedClsPrefixRef:u,inlineThemeDisabled:c,mergedRtlRef:b}=y(e),h=$("Radio","-radio-group",J,G,e,u),v=l(e.defaultValue),p=S(e,"value"),f=z(p,v);_(q,{mergedClsPrefixRef:u,nameRef:S(e,"name"),valueRef:f,disabledRef:n,mergedSizeRef:t,doUpdateValue:function(o){const{onUpdateValue:t,"onUpdate:value":n}=e;t&&R(t,o),n&&R(n,o),v.value=o,r(),i()}});const g=D("Radio",b,u),m=a((()=>{const{value:e}=t,{common:{cubicBezierEaseInOut:o},self:{buttonBorderColor:n,buttonBorderColorActive:r,buttonBorderRadius:i,buttonBoxShadow:a,buttonBoxShadowFocus:l,buttonBoxShadowHover:s,buttonColorActive:d,buttonTextColor:u,buttonTextColorActive:c,buttonTextColorHover:b,opacityDisabled:v,[I("buttonHeight",e)]:p,[I("fontSize",e)]:f}}=h.value;return{"--n-font-size":f,"--n-bezier":o,"--n-button-border-color":n,"--n-button-border-color-active":r,"--n-button-border-radius":i,"--n-button-box-shadow":a,"--n-button-box-shadow-focus":l,"--n-button-box-shadow-hover":s,"--n-button-color-active":d,"--n-button-text-color":u,"--n-button-text-color-hover":b,"--n-button-text-color-active":c,"--n-height":p,"--n-opacity-disabled":v}})),w=c?H("radio-group",a((()=>t.value[0])),m,e):void 0;return{selfElRef:o,rtlEnabled:g,mergedClsPrefix:u,mergedValue:f,handleFocusout:function(e){const{value:t}=o;t&&(t.contains(e.relatedTarget)||s())},handleFocusin:function(e){const{value:t}=o;t&&(t.contains(e.relatedTarget)||d())},cssVars:c?void 0:m,themeClass:null==w?void 0:w.themeClass,onRender:null==w?void 0:w.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:t,handleFocusin:n,handleFocusout:r}=this,{children:i,isButtonGroup:a}=function(e,o,t){var n;const r=[];let i=!1;for(let a=0;a<e.length;++a){const l=e[a],s=null===(n=l.type)||void 0===n?void 0:n.name;"RadioButton"===s&&(i=!0);const d=l.props;if("RadioButton"===s)if(0===a)r.push(l);else{const e=r[r.length-1].props,n=o===e.value,i=e.disabled,a=o===d.value,s=d.disabled,u=(n?2:0)+(i?0:1)<(a?2:0)+(s?0:1)?{[`${t}-radio-group__splitor--disabled`]:s,[`${t}-radio-group__splitor--checked`]:a}:{[`${t}-radio-group__splitor--disabled`]:i,[`${t}-radio-group__splitor--checked`]:n};r.push(c("div",{class:[`${t}-radio-group__splitor`,u]}),l)}else r.push(l)}return{children:r,isButtonGroup:i}}(E(V(this)),o,t);return null===(e=this.onRender)||void 0===e||e.call(this),c("div",{onFocusin:n,onFocusout:r,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,a&&`${t}-radio-group--button-group`],style:this.cssVars},i)}});export{W as F,U as V,ee as _,Z as a,G as r};

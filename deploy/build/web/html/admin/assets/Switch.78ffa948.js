import{i as e,a2 as n,k as t,l as a,X as i,V as o,a6 as r,a7 as l,m as s,n as d,p as c,aa as u,z as h,Z as b,a9 as v,q as g,x as p,bC as f,j as w,ai as m,v as x,aV as y,aR as k,$ as C,a1 as S,ao as $}from"./index.9c865cdf.js";const B={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},_={name:"Switch",common:e,self:e=>{const{primaryColor:t,opacityDisabled:a,borderRadius:i,textColor3:o}=e;return Object.assign(Object.assign({},B),{iconColor:o,textColor:"white",loadingColor:t,opacityDisabled:a,railColor:"rgba(0, 0, 0, .14)",railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${n(t,{alpha:.2})}`})}},z=t("switch","\n height: var(--n-height);\n min-width: var(--n-width);\n vertical-align: middle;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n outline: none;\n justify-content: center;\n align-items: center;\n",[a("children-placeholder","\n height: var(--n-rail-height);\n display: flex;\n flex-direction: column;\n overflow: hidden;\n pointer-events: none;\n visibility: hidden;\n "),a("rail-placeholder","\n display: flex;\n flex-wrap: none;\n "),a("button-placeholder","\n width: calc(1.75 * var(--n-rail-height));\n height: var(--n-rail-height);\n "),t("base-loading","\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n font-size: calc(var(--n-button-width) - 4px);\n color: var(--n-loading-color);\n transition: color .3s var(--n-bezier);\n ",[i({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),a("checked, unchecked","\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n box-sizing: border-box;\n position: absolute;\n white-space: nowrap;\n top: 0;\n bottom: 0;\n display: flex;\n align-items: center;\n line-height: 1;\n "),a("checked","\n right: 0;\n padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),a("unchecked","\n left: 0;\n justify-content: flex-end;\n padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),o("&:focus",[a("rail","\n box-shadow: var(--n-box-shadow-focus);\n ")]),r("round",[a("rail","border-radius: calc(var(--n-rail-height) / 2);",[a("button","border-radius: calc(var(--n-button-height) / 2);")])]),l("disabled",[l("icon",[r("rubber-band",[r("pressed",[a("rail",[a("button","max-width: var(--n-button-width-pressed);")])]),a("rail",[o("&:active",[a("button","max-width: var(--n-button-width-pressed);")])]),r("active",[r("pressed",[a("rail",[a("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),a("rail",[o("&:active",[a("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),r("active",[a("rail",[a("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),a("rail","\n overflow: hidden;\n height: var(--n-rail-height);\n min-width: var(--n-rail-width);\n border-radius: var(--n-rail-border-radius);\n cursor: pointer;\n position: relative;\n transition:\n opacity .3s var(--n-bezier),\n background .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-rail-color);\n ",[a("button-icon","\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n font-size: calc(var(--n-button-height) - 4px);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n justify-content: center;\n align-items: center;\n line-height: 1;\n ",[i()]),a("button",'\n align-items: center; \n top: var(--n-offset);\n left: var(--n-offset);\n height: var(--n-button-height);\n width: var(--n-button-width-pressed);\n max-width: var(--n-button-width);\n border-radius: var(--n-button-border-radius);\n background-color: var(--n-button-color);\n box-shadow: var(--n-button-box-shadow);\n box-sizing: border-box;\n cursor: inherit;\n content: "";\n position: absolute;\n transition:\n background-color .3s var(--n-bezier),\n left .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ')]),r("active",[a("rail","background-color: var(--n-rail-color-active);")]),r("loading",[a("rail","\n cursor: wait;\n ")]),r("disabled",[a("rail","\n cursor: not-allowed;\n opacity: .5;\n ")])]);let R;const V=s({name:"Switch",props:Object.assign(Object.assign({},c.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),setup(e){void 0===R&&(R="undefined"==typeof CSS||void 0!==CSS.supports&&CSS.supports("width","max(1px)"));const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=d(e),a=c("Switch","-switch",z,_,e,n),i=u(e),{mergedSizeRef:o,mergedDisabledRef:r}=i,l=h(e.defaultValue),s=b(e,"value"),f=v(s,l),w=g((()=>f.value===e.checkedValue)),m=h(!1),C=h(!1),S=g((()=>{const{railStyle:n}=e;if(n)return n({focused:C.value,checked:w.value})}));function B(n){const{"onUpdate:value":t,onChange:a,onUpdateValue:o}=e,{nTriggerFormInput:r,nTriggerFormChange:s}=i;t&&$(t,n),o&&$(o,n),a&&$(a,n),l.value=n,r(),s()}const V=g((()=>{const{value:e}=o,{self:{opacityDisabled:n,railColor:t,railColorActive:i,buttonBoxShadow:r,buttonColor:l,boxShadowFocus:s,loadingColor:d,textColor:c,iconColor:u,[x("buttonHeight",e)]:h,[x("buttonWidth",e)]:b,[x("buttonWidthPressed",e)]:v,[x("railHeight",e)]:g,[x("railWidth",e)]:p,[x("railBorderRadius",e)]:f,[x("buttonBorderRadius",e)]:w},common:{cubicBezierEaseInOut:m}}=a.value;let C,S,$;return R?(C=`calc((${g} - ${h}) / 2)`,S=`max(${g}, ${h})`,$=`max(${p}, calc(${p} + ${h} - ${g}))`):(C=y((k(g)-k(h))/2),S=y(Math.max(k(g),k(h))),$=k(g)>k(h)?p:y(k(p)+k(h)-k(g))),{"--n-bezier":m,"--n-button-border-radius":w,"--n-button-box-shadow":r,"--n-button-color":l,"--n-button-width":b,"--n-button-width-pressed":v,"--n-button-height":h,"--n-height":S,"--n-offset":C,"--n-opacity-disabled":n,"--n-rail-border-radius":f,"--n-rail-color":t,"--n-rail-color-active":i,"--n-rail-height":g,"--n-rail-width":p,"--n-width":$,"--n-box-shadow-focus":s,"--n-loading-color":d,"--n-text-color":c,"--n-icon-color":u}})),F=t?p("switch",g((()=>o.value[0])),V,e):void 0;return{handleClick:function(){e.loading||r.value||(f.value!==e.checkedValue?B(e.checkedValue):B(e.uncheckedValue))},handleBlur:function(){C.value=!1,function(){const{nTriggerFormBlur:e}=i;e()}(),m.value=!1},handleFocus:function(){C.value=!0,function(){const{nTriggerFormFocus:e}=i;e()}()},handleKeyup:function(n){e.loading||r.value||" "===n.key&&(f.value!==e.checkedValue?B(e.checkedValue):B(e.uncheckedValue),m.value=!1)},handleKeydown:function(n){e.loading||r.value||" "===n.key&&(n.preventDefault(),m.value=!0)},mergedRailStyle:S,pressed:m,mergedClsPrefix:n,mergedValue:f,checked:w,mergedDisabled:r,cssVars:t?void 0:V,themeClass:null==F?void 0:F.themeClass,onRender:null==F?void 0:F.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:t,mergedRailStyle:a,onRender:i,$slots:o}=this;null==i||i();const{checked:r,unchecked:l,icon:s,"checked-icon":d,"unchecked-icon":c}=o,u=!(f(s)&&f(d)&&f(c));return w("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,u&&`${e}-switch--icon`,t&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},w("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:a},m(r,(n=>m(l,(t=>n||t?w("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},w("div",{class:`${e}-switch__rail-placeholder`},w("div",{class:`${e}-switch__button-placeholder`}),n),w("div",{class:`${e}-switch__rail-placeholder`},w("div",{class:`${e}-switch__button-placeholder`}),t)):null)))),w("div",{class:`${e}-switch__button`},m(s,(n=>m(d,(t=>m(c,(a=>w(C,null,{default:()=>this.loading?w(S,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(t||n)?w("div",{class:`${e}-switch__button-icon`,key:t?"checked-icon":"icon"},t||n):this.checked||!a&&!n?null:w("div",{class:`${e}-switch__button-icon`,key:a?"unchecked-icon":"icon"},a||n)}))))))),m(r,(n=>n&&w("div",{key:"checked",class:`${e}-switch__checked`},n))),m(l,(n=>n&&w("div",{key:"unchecked",class:`${e}-switch__unchecked`},n))))))}});export{V as N};

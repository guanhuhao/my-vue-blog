import{b8 as r,i as e,a2 as t,k as n,m as o,n as a,q as i,aS as s,p as l,v as c,x as d,j as g}from"./index.9d7012d3.js";let p=!1;const m={name:"GradientText",common:e,self:r=>{const{primaryColor:e,successColor:n,warningColor:o,errorColor:a,infoColor:i,fontWeightStrong:s}=r;return{fontWeight:s,rotate:"252deg",colorStartPrimary:t(e,{alpha:.6}),colorEndPrimary:e,colorStartInfo:t(i,{alpha:.6}),colorEndInfo:i,colorStartWarning:t(o,{alpha:.6}),colorEndWarning:o,colorStartError:t(a,{alpha:.6}),colorEndError:a,colorStartSuccess:t(n,{alpha:.6}),colorEndSuccess:n}}},u=n("gradient-text","\n display: inline-block;\n font-weight: var(--n-font-weight);\n -webkit-background-clip: text;\n background-clip: text;\n color: #0000;\n white-space: nowrap;\n background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);\n transition:\n --n-color-start .3s var(--n-bezier),\n --n-color-end .3s var(--n-bezier);\n"),S=o({name:"GradientText",props:Object.assign(Object.assign({},l.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),setup(e){!function(){if(r&&window.CSS&&!p&&(p=!0,"registerProperty"in(null===window||void 0===window?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch(e){}}();const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=a(e),o=i((()=>{const{type:r}=e;return"danger"===r?"error":r})),g=i((()=>{let r=e.size||e.fontSize;return r&&(r=s(r)),r||void 0})),S=i((()=>{const r=e.color||e.gradient;if("string"==typeof r)return r;if(r){return`linear-gradient(${r.deg||0}deg, ${r.from} 0%, ${r.to} 100%)`}})),f=l("GradientText","-gradient-text",u,m,e,t),h=i((()=>{const{value:r}=o,{common:{cubicBezierEaseInOut:e},self:{rotate:t,[c("colorStart",r)]:n,[c("colorEnd",r)]:a,fontWeight:i}}=f.value;return{"--n-bezier":e,"--n-rotate":t,"--n-color-start":n,"--n-color-end":a,"--n-font-weight":i}})),y=n?d("gradient-text",i((()=>o.value[0])),h,e):void 0;return{mergedClsPrefix:t,compatibleType:o,styleFontSize:g,styleBgImage:S,cssVars:n?void 0:h,themeClass:null==y?void 0:y.themeClass,onRender:null==y?void 0:y.onRender}},render(){const{mergedClsPrefix:r,onRender:e}=this;return null==e||e(),g("span",{class:[`${r}-gradient-text`,`${r}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});export{S as _};

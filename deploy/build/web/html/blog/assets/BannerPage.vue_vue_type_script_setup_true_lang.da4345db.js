import{_}from"./AppFooter.0e9df5c3.js";import{j as h,bd as w,E as r,z as x,A as y,o as b,w as B,k,c as n,g as l,h as v,H as $,u as F,e as d,l as S,f as i,F as z,b as s,d as c}from"./index.3b366916.js";import{_ as A}from"./Spin.b63c2adb.js";const C={"mt-40":"","text-26":"","font-bold":"","text-light":"","animate-fade-in-down":"","animate-duration-800":"",lg:"text-40"},N={"flex-1":"","mx-5":""},R={key:0,"card-view":"","pt-30":"","mt-300":"","mb-40":"","mx-auto":"","min-h-180":"",class:"card-fade-up",lg:"px-55 pt-50 pb-30 mt-440 max-w-970"},V={key:1,"min-h-400":"","max-w-1150":"","px-5":"","py-40":"",class:"card-fade-up","mx-auto":"","mt-260":"","lg:mt-400":""},E={key:0},H=h({__name:"BannerPage",props:{label:{default:"default"},title:{default:()=>{var e;return(e=w().meta)==null?void 0:e.title}},showFooter:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},card:{type:Boolean,default:!1}},setup(e){const u=r(e,"loading"),m=x(y()),f=r(m,"pageList");b(()=>{var t;e.loading&&((t=window.$loadingBar)==null||t.start())}),B(u,t=>{var a,o;t?(a=window.$loadingBar)==null||a.start():(o=window.$loadingBar)==null||o.finish()});const p=k(()=>{const t=f.value.find(a=>a.label===e.label);return t?`background: url('${t.cover}') center center / cover no-repeat;`:"background: grey center center / cover no-repeat;"});return(t,a)=>{const o=A,g=_;return s(),n(z,null,[l("div",{style:$(F(p)),class:"banner-fade-down",absolute:"","inset-x-0":"","top-0":"","f-c-c":"","h-280":"","lg:h-400":""},[l("h1",C,v(e.title),1)],4),l("main",N,[d(o,{show:e.loading,size:"large"},{default:S(()=>[e.card?(s(),n("div",R,[e.loading?i("",!0):c(t.$slots,"default",{key:0})])):(s(),n("div",V,[c(t.$slots,"default")]))]),_:3},8,["show"])]),e.showFooter?(s(),n("footer",E,[d(g)])):i("",!0)],64)}}});export{H as _};

import{_ as p}from"./BannerPage.vue_vue_type_script_setup_true_lang.3c63966f.js";import{j as f,r,o as x,I as g,x as s,l,b as a,g as i,h as _,c as h,v,H as b,s as y,F as k,y as B,_ as $}from"./index.8c13a795.js";import"./AppFooter.6fcf9b5e.js";import"./Spin.d54163c2.js";const M={"text-center":"","leading-20":"","mb-8rem":"","text-25":"","mt-10":"",lg:"text-36"},C={"text-center":""},S=f({__name:"index",setup(z){let n=r(!0),t=r({});x(()=>{g.getTags().then(o=>{t.value=o.data.list,n.value=!1})});function c(){return Math.floor(Math.random()*16)+15}function d(){return`#${Math.floor(Math.random()*16777215).toString(16)}`}return(o,E)=>{const u=B("router-link"),m=p;return a(),s(m,{loading:n.value,title:"\u6807\u7B7E",label:"tag",card:""},{default:l(()=>[i("h2",M," \u6807\u7B7E - "+_(t.value.length),1),i("div",C,[(a(!0),h(k,null,v(t.value,e=>(a(),s(u,{key:e.id,to:`tags/${e.id}?name=${e.name}`,style:b({"font-size":`${c()}px`,color:`${d()}`}),"px-8":"","text-8xl":"","leading-45":"","inline-block":"","transition-300":"","i_hover:text-lightblue":"","hover:scale-130":""},{default:l(()=>[y(_(e.name),1)]),_:2},1032,["to","style"]))),128))])]),_:1},8,["loading"])}}});const N=$(S,[["__scopeId","data-v-c7bbfef5"]]);export{N as default};

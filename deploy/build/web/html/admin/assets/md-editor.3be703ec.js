import{_ as e}from"./CommonPage.a8aaeea9.js";import{_ as a}from"./TheIcon.2954b663.js";import{m as t,z as l,c as s,w as o,o as n,e as i,br as r,cd as m,a as c,h as u,d as p,b as d,_ as f}from"./index.9c865cdf.js";import{E as g}from"./style.b6f192f0.js";import"./AppPage.383132e7.js";const v={"h-60":"","pl-20":"","pr-20":"",flex:"","items-center":"","bg-white":""},h=t({name:"MDEditor"}),b=Object.assign(h,{setup(t){const h=l({});let b=l(!1);function x(){b.value=!0,$message.loading("正在保存..."),setTimeout((()=>{$message.success("保存成功"),b.value=!1}),2e3)}return(t,l)=>{const y=a,j=f,_=e;return n(),s(_,null,{default:o((()=>[i("div",v,[r(i("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>h.value.title=e),class:"flex-1 pt-15 pb-15 mr-20 text-20 font-bold color-primary",type:"text",placeholder:"输入文章标题..."},null,512),[[m,h.value.title]]),c(j,{type:"primary",style:{width:"80px"},loading:b.value,onClick:x},{default:o((()=>[b.value?u("",!0):(n(),s(y,{key:0,icon:"line-md:confirm-circle",class:"mr-5",size:18})),p(" 保存 ")])),_:1},8,["loading"])]),c(d(g),{modelValue:h.value.content,"onUpdate:modelValue":l[1]||(l[1]=e=>h.value.content=e),style:{height:"calc(100vh - 305px)"}},null,8,["modelValue"])])),_:1})}}});export{b as default};

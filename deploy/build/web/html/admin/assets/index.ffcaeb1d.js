import{_ as e}from"./CommonPage.82132f80.js";import{_ as t}from"./CrudModal.ac49fde8.js";import{_ as a}from"./CrudTable.3c7aac4b.js";import{_ as l}from"./QueryBarItem.47443169.js";import{_ as i}from"./TheIcon.4b855aa1.js";import{b_ as s,m as o,z as r,ac as d,c as n,w as u,o as m,a as p,d as c,b as f,_ as h,F as b,at as v,j as y,b$ as g,av as w,c0 as j}from"./index.9d7012d3.js";import{u as _}from"./useCRUD.774ac15a.js";import{N as k}from"./Switch.cee4c352.js";import{_ as P}from"./Input.97383cda.js";import{_ as x,a as C}from"./FormItem.9268271e.js";import"./AppPage.0b05ab95.js";import"./Space.ac4d43a7.js";import"./get-slot.8207e825.js";import"./Checkbox.37cf1be9.js";import"./RadioGroup.e4f264c7.js";import"./Select.0b9c566a.js";import"./Forward.219497c7.js";const z={getPosts:(e={})=>s.get("posts",{params:e}),getPostById:e=>s.get(`/post/${e}`),addPost:e=>s.post("/post",e),updatePost:e=>s.put(`/post/${e.id}`,e),deletePost:e=>s.delete(`/post/${e}`)},S=o({name:"CrudTable"}),U=Object.assign(S,{setup(s){const o=r(null),S=r({}),U=r({}),{modalVisible:$,modalAction:D,modalTitle:F,modalLoading:q,handleAdd:R,handleDelete:I,handleEdit:T,handleView:B,handleSave:O,modalForm:A,modalFormRef:V}=_({name:"文章",initForm:{author:"大脸怪"},doCreate:z.addPost,doDelete:z.deletePost,doUpdate:z.updatePost,refresh:()=>{var e;return null==(e=o.value)?void 0:e.handleSearch()}});d((()=>{var e;null==(e=o.value)||e.handleSearch()}));const K=[{type:"selection",fixed:"left"},{title:"发布",key:"isPublish",width:60,align:"center",fixed:"left",render:e=>y(k,{size:"small",rubberBand:!1,value:e.isPublish,loading:!!e.publishing,onUpdateValue:()=>function(e){if(j(e.id))return;e.publishing=!0,setTimeout((()=>{e.isPublish=!e.isPublish,e.publishing=!1,null==$message||$message.success(e.isPublish?"已发布":"已取消发布")}),1e3)}(e)})},{title:"标题",key:"title",width:150,ellipsis:{tooltip:!0}},{title:"分类",key:"category",width:80,ellipsis:{tooltip:!0}},{title:"创建人",key:"author",width:80},{title:"创建时间",key:"createDate",width:150,render:e=>y("span",g(e.createDate))},{title:"最后更新时间",key:"updateDate",width:150,render:e=>y("span",g(e.updateDate))},{title:"操作",key:"actions",width:240,align:"center",fixed:"right",render:e=>[y(h,{size:"small",type:"primary",secondary:!0,onClick:()=>B(e)},{default:()=>"查看",icon:w("majesticons:eye-line",{size:14})}),y(h,{size:"small",type:"primary",style:"margin-left: 15px;",onClick:()=>T(e)},{default:()=>"编辑",icon:w("material-symbols:edit-outline",{size:14})}),y(h,{size:"small",type:"error",style:"margin-left: 15px;",onClick:()=>I([e.id])},{default:()=>"删除",icon:w("material-symbols:delete-outline",{size:14})})]}];function E(e){e.length&&$message.info(`选中 ${e.join(" ")}`)}return(s,r)=>{const d=i,y=P,g=l,w=a,j=x,_=C,k=t,I=e;return m(),n(I,{"show-footer":"",title:"文章"},{action:u((()=>[p(f(h),{type:"primary",onClick:f(R)},{default:u((()=>[p(d,{icon:"material-symbols:add",size:18,class:"mr-5"}),c(" 新建文章 ")])),_:1},8,["onClick"])])),default:u((()=>[p(w,{ref_key:"$table",ref:o,"query-items":S.value,"onUpdate:query-items":r[1]||(r[1]=e=>S.value=e),"extra-params":U.value,"scroll-x":1200,columns:K,"get-data":f(z).getPosts,"row-key":"title",onOnChecked:E},{queryBar:u((()=>[p(g,{label:"标题","label-width":50},{default:u((()=>{var e;return[p(y,{value:S.value.title,"onUpdate:value":r[0]||(r[0]=e=>S.value.title=e),type:"text",placeholder:"请输入标题",onKeydown:b(null==(e=o.value)?void 0:e.handleSearch,["enter"])},null,8,["value","onKeydown"])]})),_:1})])),_:1},8,["query-items","extra-params","get-data"]),p(k,{visible:f($),"onUpdate:visible":r[5]||(r[5]=e=>v($)?$.value=e:null),title:f(F),loading:f(q),"show-footer":"view"!==f(D),onOnSave:f(O)},{default:u((()=>[p(_,{ref_key:"modalFormRef",ref:V,"label-placement":"left","label-align":"left","label-width":80,model:f(A),disabled:"view"===f(D)},{default:u((()=>[p(j,{label:"作者",path:"author"},{default:u((()=>[p(y,{value:f(A).author,"onUpdate:value":r[2]||(r[2]=e=>f(A).author=e),disabled:""},null,8,["value"])])),_:1}),p(j,{label:"文章标题",path:"title",rule:{required:!0,message:"请输入文章标题",trigger:["input","blur"]}},{default:u((()=>[p(y,{value:f(A).title,"onUpdate:value":r[3]||(r[3]=e=>f(A).title=e),placeholder:"请输入文章标题"},null,8,["value"])])),_:1}),p(j,{label:"文章内容",path:"content",rule:{required:!0,message:"请输入文章内容",trigger:["input","blur"]}},{default:u((()=>[p(y,{value:f(A).content,"onUpdate:value":r[4]||(r[4]=e=>f(A).content=e),placeholder:"请输入文章内容",type:"textarea",autosize:{minRows:3,maxRows:5}},null,8,["value"])])),_:1})])),_:1},8,["model","disabled"])])),_:1},8,["visible","title","loading","show-footer","onOnSave"])])),_:1})}}});export{U as default};

import{_ as e}from"./CommonPage.1d983d4f.js";import{_ as a}from"./CrudModal.9509fb96.js";import{_ as l}from"./CrudTable.f8f71e39.js";import{_ as t}from"./QueryBarItem.1c0c6760.js";import{m as i,z as s,H as r,ac as n,c as o,w as d,o as u,a as m,F as p,b as c,g as f,bV as h,ak as b,at as v,j as _,bx as g,bl as y,au as k,av as w,_ as j}from"./index.ddbeb507.js";import{u as x}from"./useCRUD.65b560cc.js";import{l as U,e as S}from"./data.67ec6cdf.js";import{a as z,_ as C}from"./Checkbox.3f865768.js";import{N as F}from"./Image.5a9a9769.js";import{N as P}from"./Switch.eaa8ef37.js";import{_ as I}from"./Input.ba0cee33.js";import{_ as R}from"./Select.7dfcacef.js";import{_ as V,a as q}from"./FormItem.7c98b271.js";import{_ as O}from"./Space.b99b39b1.js";import"./AppPage.662cd676.js";import"./RadioGroup.4a7ab258.js";import"./get-slot.8207e825.js";import"./Forward.292852ee.js";import"./utils.3e78d745.js";const B=i({name:"用户列表"}),$=Object.assign(B,{setup(i){const B=s(null),$=s({}),{modalVisible:D,modalLoading:K,handleSave:N,modalForm:A,modalFormRef:E,handleEdit:G}=x({name:"用户",doUpdate:r.updateUser,refresh:()=>{var e;return null==(e=B.value)?void 0:e.handleSearch()}});let H=s([]);n((()=>{var e;r.getRoleOption().then((e=>H.value=e.data)),null==(e=B.value)||e.handleSearch()}));const L=[{title:"头像",key:"avatar",width:50,align:"center",render:e=>_(F,{height:50,imgProps:{style:{"border-radius":"3px"}},src:g(e.avatar),"fallback-src":"http://dummyimage.com/400x400","show-toolbar-tooltip":!0})},{title:"昵称",key:"nickname",width:60,align:"center",ellipsis:{tooltip:!0}},{title:"登录方式",key:"login_type",width:40,align:"center",render:e=>_(y,{type:S[e.login_type].tag},{default:()=>S[e.login_type].name})},{title:"用户角色",key:"role",width:80,align:"center",render(e){var a;const l=null!=(a=e.roles)?a:[],t=[];for(let i=0;i<l.length;i++)t.push(_(y,{type:"info",style:{margin:"2px 3px"}},{default:()=>l[i].name}));return _("span",t)}},{title:"登录 IP",key:"ip_address",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>_("span",e.ip_address||"未知")},{title:"登录地址",key:"ip_source",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>_("span",e.ip_source||"未知")},{title:"创建时间",key:"created_at",align:"center",width:70,render:e=>_(j,{size:"small",type:"text",ghost:!0},{default:()=>k(e.created_at),icon:w("mdi:update",{size:18})})},{title:"上次登录时间",key:"last_login_time",align:"center",width:70,render:e=>_(j,{size:"small",type:"text",ghost:!0},{default:()=>k(e.last_login_time),icon:w("mdi:update",{size:18})})},{title:"禁用",key:"is_disable",width:30,align:"center",fixed:"left",render:e=>_(P,{size:"small",rubberBand:!1,value:e.is_disable,loading:!!e.publishing,checkedValue:1,uncheckedValue:0,onUpdateValue:()=>function(e){return a=this,l=null,t=function*(){var a;if(e.id){e.publishing=!0,e.is_disable=0===e.is_disable?1:0;try{yield r.updateUserDisable(e),null==$message||$message.success(e.is_disable?"已禁用该用户":"已取消禁用该用户"),null==(a=B.value)||a.handleSearch()}catch(l){e.is_disable=0===e.is_disable?1:0}finally{e.publishing=!1}}},new Promise(((e,i)=>{var s=e=>{try{n(t.next(e))}catch(a){i(a)}},r=e=>{try{n(t.throw(e))}catch(a){i(a)}},n=a=>a.done?e(a.value):Promise.resolve(a.value).then(s,r);n((t=t.apply(a,l)).next())}));var a,l,t}(e)})},{title:"操作",key:"actions",width:60,align:"center",fixed:"right",render:e=>[_(j,{size:"small",type:"primary",onClick:()=>{e.role_ids=e.roles.map((e=>e.id)),G(e)}},{default:()=>"编辑",icon:w("material-symbols:delete-outline",{size:14})})]}];return(i,s)=>{const n=I,_=t,g=R,y=l,k=V,w=C,j=O,x=z,S=q,F=a,P=e;return u(),o(P,{"show-footer":"",title:"用户列表"},{default:d((()=>[m(y,{ref_key:"$table",ref:B,"query-items":$.value,"onUpdate:query-items":s[2]||(s[2]=e=>$.value=e),columns:L,"get-data":c(r).getUsers},{queryBar:d((()=>[m(_,{label:"昵称","label-width":40},{default:d((()=>{var e;return[m(n,{value:$.value.nickname,"onUpdate:value":s[0]||(s[0]=e=>$.value.nickname=e),clearable:"",type:"text",placeholder:"请输入用户昵称",onKeydown:p(null==(e=B.value)?void 0:e.handleSearch,["enter"])},null,8,["value","onKeydown"])]})),_:1}),m(_,{label:"登录方式","label-width":70,"content-width":180},{default:d((()=>{var e;return[m(g,{value:$.value.login_type,"onUpdate:value":[s[1]||(s[1]=e=>$.value.login_type=e),null==(e=B.value)?void 0:e.handleSearch],clearable:"",filterable:"",placeholder:"请选择登录方式",options:c(U)},null,8,["value","options","onUpdate:value"])]})),_:1})])),_:1},8,["query-items","get-data"]),m(F,{visible:c(D),"onUpdate:visible":s[5]||(s[5]=e=>v(D)?D.value=e:null),title:"修改用户",loading:c(K),onOnSave:c(N)},{default:d((()=>[m(S,{ref_key:"modalFormRef",ref:E,"label-placement":"left","label-align":"left","label-width":80,model:c(A)},{default:d((()=>[m(k,{label:"用户昵称",path:"name"},{default:d((()=>[m(n,{value:c(A).nickname,"onUpdate:value":s[3]||(s[3]=e=>c(A).nickname=e),clearable:"",placeholder:"请输入用户昵称"},null,8,["value"])])),_:1}),m(k,{label:"角色",path:"role_ids"},{default:d((()=>[m(x,{value:c(A).role_ids,"onUpdate:value":s[4]||(s[4]=e=>c(A).role_ids=e)},{default:d((()=>[m(j,{"item-style":"display: flex;"},{default:d((()=>[(u(!0),f(b,null,h(H.value,(e=>(u(),o(w,{key:e.value,value:e.value,label:e.label},null,8,["value","label"])))),128))])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","loading","onOnSave"])])),_:1})}}});export{$ as default};

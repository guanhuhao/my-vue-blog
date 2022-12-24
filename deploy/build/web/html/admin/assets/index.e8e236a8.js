import{_ as e}from"./CommonPage.82132f80.js";import{_ as t}from"./CrudTable.3c7aac4b.js";import{m as a,z as s,ac as i,c as r,w as l,o,a as n,b as c,H as p,j as d,bx as m,au as u,av as g,_ as f}from"./index.9d7012d3.js";import{N as h}from"./Image.eafc70f4.js";import{N as y}from"./Popconfirm.d2d26363.js";import"./AppPage.0b05ab95.js";import"./Space.ac4d43a7.js";import"./get-slot.8207e825.js";import"./Checkbox.37cf1be9.js";import"./RadioGroup.e4f264c7.js";import"./Input.97383cda.js";import"./Select.0b9c566a.js";import"./Forward.219497c7.js";import"./utils.3e78d745.js";const b=a({name:"在线用户"}),j=Object.assign(b,{setup(a){const b=s(null);i((()=>{var e;null==(e=b.value)||e.handleSearch()}));const j=[{title:"头像",key:"avatar",width:50,align:"center",render:e=>d(h,{height:50,imgProps:{style:{"border-radius":"3px"}},src:m(e.avatar),"fallback-src":"http://dummyimage.com/400x400","show-toolbar-tooltip":!0})},{title:"昵称",key:"nickname",width:60,align:"center",ellipsis:{tooltip:!0}},{title:"登录 IP",key:"ip_address",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>d("span",e.ip_address||"未知")},{title:"登录地址",key:"ip_source",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>d("span",e.ip_source||"未知")},{title:"登录浏览器",key:"browser",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>d("span",e.browser||"未知")},{title:"操作系统",key:"os",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>d("span",e.os||"未知")},{title:"登录时间",key:"last_login_time",align:"center",width:70,render:e=>d(f,{size:"small",type:"text",ghost:!0},{default:()=>u(e.last_login_time),icon:g("mdi:update",{size:18})})},{title:"操作",key:"actions",width:60,align:"center",fixed:"right",render:e=>d(y,{onPositiveClick:()=>function(e){return t=this,a=null,s=function*(){var t;try{yield p.forceOfflineUser(e),$message.success("该用户已被强制下线!"),null==(t=b.value)||t.handleSearch()}catch(a){$message.error("强制下线失败!")}},new Promise(((e,i)=>{var r=e=>{try{o(s.next(e))}catch(t){i(t)}},l=e=>{try{o(s.throw(e))}catch(t){i(t)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,l);o((s=s.apply(t,a)).next())}));var t,a,s}(e)},{trigger:()=>d(f,{size:"small",type:"primary"},{default:()=>"下线",icon:g("material-symbols:delete-outline",{size:14})}),default:()=>d("div",{},"确定强制该用户下线吗?")})}];return(a,s)=>{const i=t,d=e;return o(),r(d,{"show-footer":"",title:"在线用户"},{default:l((()=>[n(i,{ref_key:"$table",ref:b,columns:j,"get-data":c(p).getOnlineUsers},null,8,["get-data"])])),_:1})}}});export{j as default};

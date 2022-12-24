import{_ as e}from"./CommonPage.a8aaeea9.js";import{_ as t}from"./CrudTable.d6949f2f.js";import{m as a,z as s,ac as i,c as r,w as l,o,a as n,b as c,H as d,j as p,bx as m,au as u,av as f,_ as g}from"./index.9c865cdf.js";import{N as h}from"./Image.8f55d63d.js";import{N as y}from"./Popconfirm.1938afcb.js";import"./AppPage.383132e7.js";import"./Space.1cedc616.js";import"./get-slot.8207e825.js";import"./Checkbox.411021da.js";import"./RadioGroup.42efc504.js";import"./Input.463ffced.js";import"./Select.433e10cf.js";import"./Forward.2d3992a8.js";import"./utils.3e78d745.js";const j=a({name:"在线用户"}),w=Object.assign(j,{setup(a){const j=s(null);i((()=>{var e;null==(e=j.value)||e.handleSearch()}));const w=[{title:"头像",key:"avatar",width:50,align:"center",render:e=>p(h,{height:50,imgProps:{style:{"border-radius":"3px"}},src:m(e.avatar),"fallback-src":"http://dummyimage.com/400x400","show-toolbar-tooltip":!0})},{title:"昵称",key:"nickname",width:60,align:"center",ellipsis:{tooltip:!0}},{title:"登录 IP",key:"ip_address",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>p("span",e.ip_address||"未知")},{title:"登录地址",key:"ip_source",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>p("span",e.ip_source||"未知")},{title:"登录浏览器",key:"browser",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>p("span",e.browser||"未知")},{title:"操作系统",key:"os",width:70,align:"center",ellipsis:{tooltip:!0},render:e=>p("span",e.os||"未知")},{title:"登录时间",key:"last_login_time",align:"center",width:70,render:e=>p(g,{size:"small",type:"text",ghost:!0},{default:()=>u(e.last_login_time),icon:f("mdi:update",{size:18})})},{title:"操作",key:"actions",width:60,align:"center",fixed:"right",render:e=>p(y,{onPositiveClick:()=>function(e){return t=this,a=null,s=function*(){var t;try{yield d.forceOfflineUser(e),$message.success("该用户已被强制下线!"),null==(t=j.value)||t.handleSearch()}catch(a){$message.error("强制下线失败!")}},new Promise(((e,i)=>{var r=e=>{try{o(s.next(e))}catch(t){i(t)}},l=e=>{try{o(s.throw(e))}catch(t){i(t)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,l);o((s=s.apply(t,a)).next())}));var t,a,s}(e)},{trigger:()=>p(g,{size:"small",type:"primary"},{default:()=>"下线",icon:f("material-symbols:delete-outline",{size:14})}),default:()=>p("div",{},"确定强制该用户下线吗?")})}];return(a,s)=>{const i=t,p=e;return o(),r(p,{"show-footer":"",title:"在线用户"},{default:l((()=>[n(i,{ref_key:"$table",ref:j,columns:w,"get-data":c(d).getOnlineUsers},null,8,["get-data"])])),_:1})}}});export{w as default};

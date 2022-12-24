import{_ as e}from"./CommonPage.1d983d4f.js";import{_ as i}from"./CrudModal.9509fb96.js";import{_ as t}from"./CrudTable.f8f71e39.js";import{_ as a}from"./QueryBarItem.1c0c6760.js";import{o as l,g as o,e as n,z as d,bU as c,a as u,w as m,d as r,ak as s,bV as p,aH as f,m as v,H as h,ac as k,c as b,b as g,_,F as y,h as w,at as j,j as x,au as U,av as z}from"./index.ddbeb507.js";import{_ as C}from"./TheIcon.9330a376.js";import{_ as S}from"./Input.ba0cee33.js";import{u as q}from"./useCRUD.65b560cc.js";import{_ as A}from"./InputNumber.af0dfaf1.js";import{N as F}from"./Switch.eaa8ef37.js";import{N as I}from"./Popconfirm.e7219379.js";import{a as M,_ as P}from"./RadioGroup.4a7ab258.js";import{_ as O}from"./Space.b99b39b1.js";import{_ as V,a as B}from"./FormItem.7c98b271.js";import"./AppPage.662cd676.js";import"./Checkbox.3f865768.js";import"./Select.7dfcacef.js";import"./Forward.292852ee.js";import"./Add.caacc64b.js";import"./get-slot.8207e825.js";const R={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},$=[n("path",{fill:"currentColor",d:"M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"},null,-1)];const D={name:"mdi-magnify",render:function(e,i){return l(),o("svg",R,$)}},K=["mdi-air-humidifier-off","mdi-chili-off","mdi-cigar-off","mdi-clock-time-eight","mdi-clock-time-eight-outline","mdi-clock-time-eleven","mdi-clock-time-eleven-outline","mdi-clock-time-five","mdi-clock-time-five-outline","mdi-clock-time-four","mdi-clock-time-four-outline","mdi-clock-time-nine","mdi-clock-time-nine-outline","mdi-clock-time-one","mdi-clock-time-one-outline","mdi-clock-time-seven","mdi-clock-time-seven-outline","mdi-clock-time-six","mdi-clock-time-six-outline","mdi-clock-time-ten","mdi-clock-time-ten-outline","mdi-clock-time-three","mdi-clock-time-three-outline","mdi-clock-time-twelve","mdi-clock-time-twelve-outline","mdi-clock-time-two","mdi-clock-time-two-outline","mdi-cog-refresh","mdi-cog-refresh-outline","mdi-cog-sync","mdi-cog-sync-outline","mdi-content-save-cog","mdi-content-save-cog-outline","mdi-cosine-wave","mdi-cube-off","mdi-cube-off-outline","mdi-dome-light","mdi-download-box","mdi-download-box-outline","mdi-download-circle","mdi-download-circle-outline","mdi-fan-alert","mdi-fan-chevron-down","mdi-fan-chevron-up","mdi-fan-minus","mdi-fan-plus","mdi-fan-remove","mdi-fan-speed-1","mdi-fan-speed-2","mdi-fan-speed-3","mdi-food-drumstick","mdi-food-drumstick-off","mdi-food-drumstick-off-outline","mdi-food-drumstick-outline","mdi-food-steak","mdi-food-steak-off","mdi-fuse-alert","mdi-fuse-off","mdi-heart-minus","mdi-heart-minus-outline","mdi-heart-off-outline","mdi-heart-plus","mdi-heart-plus-outline","mdi-heart-remove","mdi-heart-remove-outline","mdi-hours-24","mdi-incognito-circle","mdi-incognito-circle-off","mdi-lingerie","mdi-microwave-off","mdi-minus-circle-off","mdi-minus-circle-off-outline","mdi-motion-sensor-off","mdi-pail-minus","mdi-pail-minus-outline","mdi-pail-off","mdi-pail-off-outline","mdi-pail-outline","mdi-pail-plus","mdi-pail-plus-outline","mdi-pail-remove","mdi-pail-remove-outline","mdi-pine-tree-fire","mdi-power-plug-off-outline","mdi-power-plug-outline","mdi-printer-eye","mdi-printer-search","mdi-puzzle-check","mdi-puzzle-check-outline","mdi-rug","mdi-sawtooth-wave","mdi-set-square","mdi-smoking-pipe-off","mdi-spoon-sugar","mdi-square-wave","mdi-table-split-cell","mdi-ticket-percent-outline","mdi-triangle-wave","mdi-waveform","mdi-wizard-hat","mdi-ab-testing","mdi-abjad-arabic","mdi-abjad-hebrew","mdi-abugida-devanagari","mdi-abugida-thai","mdi-access-point","mdi-access-point-network","mdi-access-point-network-off","mdi-account","mdi-account-alert","mdi-account-alert-outline","mdi-account-arrow-left","mdi-account-arrow-left-outline","mdi-account-arrow-right","mdi-account-arrow-right-outline","mdi-account-box","mdi-account-box-multiple","mdi-account-box-multiple-outline","mdi-account-box-outline","mdi-account-cancel","mdi-account-cancel-outline","mdi-account-cash","mdi-account-cash-outline","mdi-account-check","mdi-account-check-outline","mdi-account-child","mdi-account-child-circle","mdi-account-child-outline","mdi-account-circle","mdi-account-circle-outline","mdi-account-clock","mdi-account-clock-outline","mdi-account-cog","mdi-account-cog-outline","mdi-account-convert","mdi-account-convert-outline","mdi-account-cowboy-hat","mdi-account-details","mdi-account-details-outline","mdi-account-edit","mdi-account-edit-outline","mdi-account-group","mdi-account-group-outline","mdi-account-hard-hat","mdi-account-heart","mdi-account-heart-outline","mdi-account-key","mdi-account-key-outline","mdi-account-lock","mdi-account-lock-outline","mdi-account-minus","mdi-account-minus-outline","mdi-account-multiple","mdi-account-multiple-check","mdi-account-multiple-check-outline","mdi-account-multiple-minus","mdi-account-multiple-minus-outline","mdi-account-multiple-outline","mdi-account-multiple-plus","mdi-account-multiple-plus-outline","mdi-account-multiple-remove","mdi-account-multiple-remove-outline","mdi-account-music","mdi-account-music-outline","mdi-account-network","mdi-account-network-outline","mdi-account-off","mdi-account-off-outline","mdi-account-outline","mdi-account-plus","mdi-account-plus-outline","mdi-account-question","mdi-account-question-outline","mdi-account-remove","mdi-account-remove-outline","mdi-account-search","mdi-account-search-outline","mdi-account-settings","mdi-account-settings-outline","mdi-account-star","mdi-account-star-outline","mdi-account-supervisor","mdi-account-supervisor-circle","mdi-account-supervisor-outline","mdi-account-switch","mdi-account-switch-outline","mdi-account-tie","mdi-account-tie-outline","mdi-account-tie-voice","mdi-account-tie-voice-off","mdi-account-tie-voice-off-outline","mdi-account-tie-voice-outline","mdi-account-voice","mdi-adjust","mdi-adobe","mdi-adobe-acrobat","mdi-air-conditioner","mdi-air-filter","mdi-air-horn","mdi-air-humidifier","mdi-air-purifier","mdi-airbag","mdi-airballoon","mdi-airballoon-outline","mdi-airplane","mdi-airplane-landing","mdi-airplane-off","mdi-airplane-takeoff","mdi-airport","mdi-alarm","mdi-alarm-bell","mdi-alarm-check","mdi-alarm-light","mdi-alarm-light-outline","mdi-alarm-multiple","mdi-alarm-note","mdi-alarm-note-off","mdi-alarm-off","mdi-alarm-plus","mdi-alarm-snooze","mdi-album","mdi-alert","mdi-alert-box","mdi-alert-box-outline","mdi-alert-circle","mdi-alert-circle-check","mdi-alert-circle-check-outline","mdi-alert-circle-outline"],N=n("a",{"color-blue":"",target:"_blank",href:"https://icones.js.org/collection/all"},"Icones",-1),T={key:0,"w-300":"","h-150":"","overflow-y-scroll":""},H=["onClick"],L={key:1},E={__name:"IconPicker",props:{value:String},emits:["update:value"],setup(e,{emit:i}){let t=d(e.value),a=d(K.filter((e=>e.includes(t.value))));function n(){a.value=K.filter((e=>e.includes(t.value)))}return c(t,(()=>{n(),i("update:value",t.value)}),{debounce:500}),(e,d)=>{const c=D,v=C,h=S,k=f;return l(),o("div",null,[u(k,{trigger:"click",placement:"bottom-start"},{trigger:m((()=>[u(h,{value:t.value,"onUpdate:value":[d[0]||(d[0]=e=>t.value=e),n],placeholder:"请输入图标名称"},{prefix:m((()=>[u(c)])),suffix:m((()=>[u(v,{icon:t.value,size:18},null,8,["icon"])])),_:1},8,["value"])])),footer:m((()=>[r(" 更多图标去 "),N,r(" 查看 ")])),default:m((()=>[a.value.length?(l(),o("ul",T,[(l(!0),o(s,null,p(a.value,((e,a)=>(l(),o("li",{key:a,"mx-5":"","cursor-pointer":"","hover:text-cyan":"","inline-block":"",onClick:a=>function(e){t.value=e,i("update:value",t.value)}(e)},[u(v,{icon:e,size:18},null,8,["icon"])],8,H)))),128))])):(l(),o("div",L,[u(v,{icon:t.value,size:18},null,8,["icon"])]))])),_:1})])}}},G=v({name:"菜单管理"}),Q=Object.assign(G,{setup(o){const n=d(null),c=d({}),s=d({order_num:1,is_hidden:0}),{modalVisible:p,modalTitle:f,modalLoading:v,handleAdd:R,handleDelete:$,handleEdit:D,handleSave:K,modalForm:N,modalFormRef:T}=q({name:"菜单",initForm:s.value,doCreate:h.saveOrUpdateMenu,doDelete:h.deleteMenu,doUpdate:h.saveOrUpdateMenu,refresh:()=>{var e;return null==(e=n.value)?void 0:e.handleSearch()}});k((()=>{var e;null==(e=n.value)||e.handleSearch()}));let H=d(!1);const L=[{title:"菜单名称",key:"name",width:80,ellipsis:{tooltip:!0}},{title:"图标",key:"icon",width:30,render:e=>x(C,{icon:e.icon,size:20})},{title:"排序",key:"order_num",width:30,ellipsis:{tooltip:!0}},{title:"访问路径",key:"path",width:60,ellipsis:{tooltip:!0}},{title:"跳转路径",key:"redirect",width:80,ellipsis:{tooltip:!0}},{title:"组件路径",key:"component",width:80,ellipsis:{tooltip:!0}},{title:"保活",key:"keep_alive",width:30,fixed:"left",render:e=>x("span",1===e.keep_alive)},{title:"隐藏",key:"is_hidden",width:30,fixed:"left",render:e=>x(F,{size:"small",rubberBand:!1,value:e.is_hidden,loading:!!e.publishing,checkedValue:1,uncheckedValue:0,onUpdateValue:()=>function(e){return i=this,t=null,a=function*(){e.id&&(e.publishing=!0,e.is_hidden=0===e.is_hidden?1:0,yield h.saveOrUpdateMenu(e),e.publishing=!1,null==$message||$message.success(e.is_hidden?"已隐藏":"已取消隐藏"))},new Promise(((e,l)=>{var o=e=>{try{d(a.next(e))}catch(i){l(i)}},n=e=>{try{d(a.throw(e))}catch(i){l(i)}},d=i=>i.done?e(i.value):Promise.resolve(i.value).then(o,n);d((a=a.apply(i,t)).next())}));var i,t,a}(e)})},{title:"创建日期",key:"created_at",width:70,render:e=>x("span",U(e.created_at))},{title:"操作",key:"actions",width:115,align:"center",fixed:"right",render:e=>[x(_,{size:"tiny",quaternary:!0,type:"primary",style:`display: ${e.children?"":"none"};`,onClick:()=>{s.value.is_catelogue=!1,s.value.component="",s.value.parent_id=e.id,H.value=!1,R()}},{default:()=>"新增",icon:z("material-symbols:add",{size:14})}),x(_,{size:"tiny",quaternary:!0,type:"info",onClick:()=>{H.value=!1,D(e)}},{default:()=>"编辑",icon:z("material-symbols:edit-outline",{size:14})}),x(I,{onPositiveClick:()=>$([e.id],!1)},{trigger:()=>x(_,{size:"tiny",quaternary:!0,type:"error"},{default:()=>"删除",icon:z("material-symbols:delete-outline",{size:14})}),default:()=>x("div",{},"确定删除该菜单吗?")})]}];function G(){H.value=!0,s.value.is_catelogue=!0,s.value.component="Layout",s.value.parent_id=0,R()}return(o,d)=>{const s=S,k=a,x=t,U=M,z=O,q=P,I=V,R=A,$=B,D=i,Q=e;return l(),b(Q,{"show-footer":"",title:"菜单管理"},{action:m((()=>[u(g(_),{type:"primary",onClick:G},{default:m((()=>[u(C,{icon:"material-symbols:add",size:18}),r(" 新建菜单 ")])),_:1})])),default:m((()=>[u(x,{ref_key:"$table",ref:n,"query-items":c.value,"onUpdate:query-items":d[1]||(d[1]=e=>c.value=e),"is-pagination":!1,columns:L,"get-data":g(h).getMenus,"single-line":!0},{queryBar:m((()=>[u(k,{label:"菜单名","label-width":50},{default:m((()=>{var e;return[u(s,{value:c.value.keyword,"onUpdate:value":d[0]||(d[0]=e=>c.value.keyword=e),clearable:"",type:"text",placeholder:"请输入菜单名",onKeydown:y(null==(e=n.value)?void 0:e.handleSearch,["enter"])},null,8,["value","onKeydown"])]})),_:1})])),_:1},8,["query-items","get-data"]),u(D,{visible:g(p),"onUpdate:visible":d[11]||(d[11]=e=>j(p)?p.value=e:null),title:g(f),loading:g(v),onOnSave:g(K)},{default:m((()=>[u($,{ref_key:"modalFormRef",ref:T,"label-placement":"left","label-align":"left","label-width":80,model:g(N)},{default:m((()=>[H.value?(l(),b(I,{key:0,label:"菜单类型",path:"type"},{default:m((()=>[u(q,{value:g(N).is_catelogue,"onUpdate:value":d[2]||(d[2]=e=>g(N).is_catelogue=e),name:"radiogroup"},{default:m((()=>[u(z,null,{default:m((()=>[u(U,{value:!0},{default:m((()=>[r(" 目录 ")])),_:1}),u(U,{value:!1},{default:m((()=>[r(" 一级菜单 ")])),_:1})])),_:1})])),_:1},8,["value"])])),_:1})):w("",!0),u(I,{label:"菜单名称",path:"name"},{default:m((()=>[u(s,{value:g(N).name,"onUpdate:value":d[3]||(d[3]=e=>g(N).name=e),placeholder:"请输入菜单名称"},null,8,["value"])])),_:1}),u(I,{label:"菜单图标",path:"icon"},{default:m((()=>[u(E,{value:g(N).icon,"onUpdate:value":d[4]||(d[4]=e=>g(N).icon=e),"w-full":""},null,8,["value"])])),_:1}),g(N).is_catelogue?w("",!0):(l(),b(I,{key:1,label:"组件路径",path:"component"},{default:m((()=>[u(s,{value:g(N).component,"onUpdate:value":d[5]||(d[5]=e=>g(N).component=e),placeholder:"请输入组件路径"},null,8,["value"])])),_:1})),u(I,{label:"访问路径",path:"path"},{default:m((()=>[u(s,{value:g(N).path,"onUpdate:value":d[6]||(d[6]=e=>g(N).path=e),placeholder:"请输入访问路径"},null,8,["value"])])),_:1}),u(I,{label:"跳转路径",path:"redirect"},{default:m((()=>[u(s,{value:g(N).redirect,"onUpdate:value":d[7]||(d[7]=e=>g(N).redirect=e),disabled:0!==g(N).parent_id,placeholder:"只有一级菜单可以设置跳转路径"},null,8,["value","disabled"])])),_:1}),u(I,{label:"显示排序",path:"order_num"},{default:m((()=>[u(R,{value:g(N).order_num,"onUpdate:value":d[8]||(d[8]=e=>g(N).order_num=e)},null,8,["value"])])),_:1}),u(I,{label:"是否隐藏",path:"is_hidden"},{default:m((()=>[u(g(F),{value:g(N).is_hidden,"onUpdate:value":d[9]||(d[9]=e=>g(N).is_hidden=e),"checked-value":1,"unchecked-value":0},null,8,["value"])])),_:1}),u(I,{label:"KeepAlive",path:"keep_alive"},{default:m((()=>[u(g(F),{value:g(N).keep_alive,"onUpdate:value":d[10]||(d[10]=e=>g(N).keep_alive=e),"checked-value":1,"unchecked-value":0},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title","loading","onOnSave"])])),_:1})}}});export{Q as default};

var e=(e,a,s)=>new Promise(((t,n)=>{var o=e=>{try{l(s.next(e))}catch(a){n(a)}},r=e=>{try{l(s.throw(e))}catch(a){n(a)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,r);l((s=s.apply(e,a)).next())}));import{_ as a}from"./AppPage.662cd676.js";import{y as s,f as t,u as n,z as o,A as r,B as l,c as u,w as d,C as c,b as i,D as m,o as p,e as f,a as v,d as w,t as h,F as g,G as y,_ as b,H as x,J as _,K as k}from"./index.ddbeb507.js";import{_ as q}from"./Input.ba0cee33.js";import{_ as I}from"./Checkbox.3f865768.js";const j="2088053498",C={style:{transform:"translateY(25px)"},"f-c-c":"","min-w-345":"","max-w-700":"","m-auto":"","p-15":"","rounded-10":"","card-shadow":"","bg-white":"","bg-opacity-60":""},P=f("div",{"w-380":"",hidden:"","md:block":"","px-20":"","py-35":""},[f("img",{src:"/admin/assets/login_banner.6e96327c.webp","w-full":"",alt:"login_banner"})],-1),$={"w-320":"","flex-col":"","px-20":"","py-35":""},A={"f-c-c":"","text-24":"","font-normal":"",color:"#6a6a6a"},B={"mt-30":""},K={"mt-30":""},U={"mt-20":""},G={"mt-20":""},J={__name:"index",setup(J){const[R,z,D]=[s(),t(),n()],{query:F}=m();let H=o({username:"test@qq.com",password:"11111"});!function(){const e=r.get("loginInfo");e&&(H.value={username:e.username||"test@qq.com",password:e.password||"11111"})}();const N=l("isRemember",!1);let O=o(!1);function S(){return e(this,null,(function*(){const{username:a,password:s}=H.value;if(!a||!s)return void $message.warning("请输入用户名和密码");const t=(a,s)=>e(this,null,(function*(){O.value=!0,$message.loading("正在验证...");try{const e=yield x.login({username:a,password:s});if(_(e.data.token),$message.success("登录成功"),yield R.getUserInfo(),yield z.getBlogInfo(),N.value?r.set("loginInfo",{username:a,password:s}):r.remove("loginInfo"),yield k(),F.redirect){const e=F.redirect;Reflect.deleteProperty(F,"redirect"),D.push({path:e,query:F})}else D.push("/")}finally{O.value=!1}}));if(JSON.parse("true")){new TencentCaptcha(j,(n=>e(this,null,(function*(){return 0===n.ret&&t(a,s)})))).show()}else t(a,s)}))}return(e,s)=>{const t=y,n=q,o=I,r=b,l=a;return p(),u(l,{"show-footer":"","bg-cover":"",style:c({backgroundImage:`url(${i("/admin/assets/login_bg.ed2739b3.webp")})`})},{default:d((()=>[f("div",C,[P,f("div",$,[f("h5",A,[v(t,{"mr-10":"","text-50":"","color-primary":""}),w(" "+h(i("Gin Blog Admin")),1)]),f("div",B,[v(n,{value:H.value.username,"onUpdate:value":s[0]||(s[0]=e=>H.value.username=e),"text-16":"","items-center":"","h-50":"","pl-10":"",autofocus:"",placeholder:"test@qq.com",maxlength:20},null,8,["value"])]),f("div",K,[v(n,{value:H.value.password,"onUpdate:value":s[1]||(s[1]=e=>H.value.password=e),"text-16":"","items-center":"","h-50":"","pl-10":"",type:"password","show-password-on":"mousedown",placeholder:"11111",maxlength:20,onKeydown:g(S,["enter"])},null,8,["value","onKeydown"])]),f("div",U,[v(o,{checked:N.value,label:"记住我","on-update:checked":e=>N.value=e},null,8,["checked","on-update:checked"])]),f("div",G,[v(r,{"w-full":"","h-50":"","rounded-5":"","text-16":"",type:"primary",loading:O.value,onClick:S},{default:d((()=>[w(" 登录 ")])),_:1},8,["loading"])])])])])),_:1},8,["style"])}}};export{J as default};

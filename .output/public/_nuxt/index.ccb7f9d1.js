import{_}from"./nuxt-link.de7ebd02.js";import{_ as h,V as v,o as a,c as n,a as s,P as d,W as g,t as u,I as c,X as w,K as f,d as m,b,w as x,p as y,e as k}from"./entry.d6e88b4d.js";import{_ as S}from"./logo.2b10dfee.js";const V={name:"login",data(){return{passwordShow:!0,result:{email:"",password:""},user:{email:{value:"test@admin.com",errormsg:""},password:{value:"test@123456",errormsg:""}}}},methods:{login(){!this.user.password.value||this.user.password.value.length<7?this.user.password.errormsg="min length 7":this.user.password.errormsg="",this.user.email.value?this.validEmail(this.user.email.value)?this.user.email.errormsg="":this.user.email.errormsg="Valid email required.":this.user.email.errormsg="empty not allowed",(!this.user.email.errormsg&&!this.user.password.errormsg&&this.user.email.value!="test@admin.com"||this.user.password.value!="test@123456")&&alert("wrong credenstials"),!this.user.email.errormsg&&!this.user.password.errormsg&&this.user.email.value=="test@admin.com"&&this.user.password.value=="test@123456"&&(this.result={email:this.user.email.value,password:this.user.password.value},v("User").value=JSON.stringify({email:this.user.email.value,useer:!0}),this.$router.push("/student"))},validEmail:function(r){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)}}},t=r=>(y("data-v-9bae0a05"),r=r(),k(),r),C={class:"container-fluid"},I={class:"row"},N={class:"col-12 p-0"},E={class:"login-card"},q=t(()=>s("div",null,[s("a",{class:"logo"},[s("img",{class:"img-fluid",src:S,alt:"looginpage"})])],-1)),B={class:"login-main"},D={class:"theme-form"},M=t(()=>s("h4",{class:"m-b-10"},"Нэвтрэх",-1)),T=t(()=>s("p",{class:"m-b-5"},"Майл хаяг болон нууц үгээ оруулна уу.",-1)),U={class:"form-group"},z=t(()=>s("label",{class:"col-form-label"},"Майл хаяг",-1)),A={key:0,class:"validate-error"},Z={class:"form-group"},J=t(()=>s("label",{class:"col-form-label"},"Нууц үг",-1)),K={class:"form-input position-relative"},O=["type"],P={key:0,class:"validate-error"},W=t(()=>s("span",{class:"show"},null,-1)),X=[W],j={class:"form-group"},F=t(()=>s("div",{class:"checkbox p-0"},[s("input",{id:"checkbox1",type:"checkbox"}),s("label",{class:"text-muted",for:"checkbox1"}," Нууц үг хадгалах ")],-1)),G={class:"text-end mt-3"},H={class:"m-t-5 text-center"};function L(r,o,Q,R,e,l){const p=_;return a(),n("div",null,[s("div",C,[s("div",I,[s("div",N,[s("div",E,[s("div",null,[q,s("div",B,[s("form",D,[M,T,s("div",U,[z,d(s("input",{class:"form-control",type:"email",required:"",placeholder:"Test@gmail.com","onUpdate:modelValue":o[0]||(o[0]=i=>e.user.email.value=i)},null,512),[[g,e.user.email.value]]),!e.user.email.value||!l.validEmail(e.user.email.value)?(a(),n("span",A,u(e.user.email.errormsg),1)):c("",!0)]),s("div",Z,[J,s("div",K,[d(s("input",{class:"form-control",type:e.passwordShow?"password":"text",name:"login[password]",required:"",placeholder:"*********","onUpdate:modelValue":o[1]||(o[1]=i=>e.user.password.value=i)},null,8,O),[[w,e.user.password.value]]),e.user.password.value.length<7?(a(),n("span",P,u(e.user.password.errormsg),1)):c("",!0),s("div",{onClick:o[2]||(o[2]=i=>e.passwordShow=!e.passwordShow),class:"show-hide"},X)])]),s("div",j,[F,s("div",G,[s("button",{class:"btn btn-primary btn-block w-100",type:"submit",onClick:o[3]||(o[3]=f((...i)=>l.login&&l.login(...i),["prevent"]))}," Нэвтрэх ")])]),s("p",H,[m(" Бүртгэл үүсгэх үү? "),b(p,{class:"ms-2",to:"/auth/register"},{default:x(()=>[m(" Бүртгэл үүсгэх ")]),_:1})])])])])])])])])])}const es=h(V,[["render",L],["__scopeId","data-v-9bae0a05"]]);export{es as default};

import{_ as b,o as a,c as d,a as e,n as c,F as n,h as r,P as _,a0 as f,d as m,t as u,i as h,b as x}from"./entry.d6e88b4d.js";const y={data(){return{active:!1,active1:!1,active2:!1,workTime:[{selected:!1,name:"Бүтэн цагаар",value:"full_time"},{selected:!1,name:"Гэрээт",value:"contract"},{selected:!1,name:"Цагийн ажил",value:"part_time"},{selected:!1,name:"Түр ажил",value:"hour_work"}],fieldOfWorks:[{selected:!0,name:"Автомашин, засвар үйлчилгээ",id:"work_field_machine"},{selected:!1,name:"Аялал жуулчлал",id:"work_field_tour"},{selected:!1,name:"Банк, санхүү, эдийн засаг, даатгал",id:"work_field_bank"},{selected:!1,name:"Барилга, Инженеринг",id:"work_field_construction"},{selected:!1,name:"Бизнес менежмент",id:"work_field_business"},{selected:!1,name:"Боловсрол, нийгмийн ухаан",id:"work_field_education"},{selected:!1,name:"Дизайн",id:"work_field_design"},{selected:!1,name:"Дэд бүтэц",id:"work_field_sub_struct"},{selected:!1,name:"Зочид буудал, ресторан",id:"work_field_hotel"},{selected:!1,name:"Маркетинг, PR",id:"work_field_marketing"},{selected:!1,name:"Мэдээлэл технологи",id:"work_field_it"},{selected:!1,name:"Спорт, Гоо сайхан, Фитнесс",id:"work_field_sport"},{selected:!1,name:"Төрийн болон ТББ, ОУБ",id:"work_field_goverment"},{selected:!1,name:"Тээвэр, гааль, агуулах",id:"work_field_tranport"},{selected:!1,name:"Уул уурхай, газрын тос",id:"work_field_mining"},{selected:!1,name:"Үйлдвэрлэл",id:"work_field_factory"},{selected:!1,name:"Үйлчилгээ",id:"work_field_service"},{selected:!1,name:"Үл хөдлөх хөрөнгө",id:"work_field_remax"},{selected:!1,name:"ХАА, Байгаль экологи",id:"work_field_ecology"},{selected:!1,name:"Харилцаа холбоо",id:"work_field_tele"},{selected:!1,name:"Харуул хамгаалалт",id:"work_field_secuirity"},{selected:!1,name:"Худалдаа, Борлуулалт",id:"work_field_selling"},{selected:!1,name:"Хууль эрх зүй",id:"work_field_law"},{selected:!1,name:"Хүний нөөц, захиргаа",id:"work_field_hr"},{selected:!1,name:"Хэвлэл мэдээлэл, Медиа",id:"work_field_media"},{selected:!1,name:"Шинжлэх ухаан",id:"work_field_science"},{selected:!1,name:"Энтертайнмент, Соёл урлаг",id:"work_field_entertainment"},{selected:!1,name:"Эрүүл мэнд",id:"work_field_health"},{selected:!1,name:"Бусад",id:"work_field_etc"}],selectedField:"",selectedTime:""}}},g={class:"card"},T={class:"card-header",id:"headingOne"},j={class:"m-b-0"},O=["aria-expanded"],F={class:"card-body"},V=["for"],$=["id","value"],C=e("button",{class:"btn btn-primary text-center",type:"button"}," Ажил хайх ",-1),B={class:"card"},N={class:"card-header",id:"headingTwo"},D={class:"m-b-0"},E=["aria-expanded"],P={class:"card-body animate-chk"},R={class:"location-checkbox"},U=["for"],W=["id","value"],q=e("button",{class:"btn btn-block btn-primary text-center",type:"button"}," Салбар хайх ",-1);function z(k,t,p,v,s,w){return a(),d(n,null,[e("div",g,[e("div",T,[e("h2",j,[e("button",{class:"btn btn-link btn-block text-start",type:"button","data-bs-target":"#collapseOne","aria-expanded":s.active?"false":"true","aria-controls":"collapseOne",onClick:t[0]||(t[0]=l=>s.active=!s.active)}," Төрөл сонгох ",8,O)])]),e("div",{class:c(["collapse",s.active?"":"show"]),id:"collapseOne","aria-labelledby":"headingOne"},[e("div",F,[(a(!0),d(n,null,r(s.workTime,(l,i)=>(a(),d("div",{key:`work_time_${i}`,class:"mb-2"},[e("label",{for:l.value},[_(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.selectedTime=o),type:"radio",class:"radio_animated",id:l.value,value:l.value,name:"work_field"},null,8,$),[[f,s.selectedTime]]),m(" "+u(l.name),1)],8,V)]))),128)),C])],2)]),e("div",B,[e("div",N,[e("h2",D,[e("button",{class:"btn btn-link btn-block text-start collapsed",type:"button","data-bs-target":"#collapseTwo","aria-expanded":s.active1?"false":"true","aria-controls":"collapseTwo",onClick:t[2]||(t[2]=l=>s.active1=!s.active1)}," Салбар ",8,E)])]),e("div",{class:c(["collapse",s.active1?"":"show"]),id:"collapseTwo","aria-labelledby":"headingTwo"},[e("div",P,[e("div",R,[(a(!0),d(n,null,r(s.fieldOfWorks,(l,i)=>(a(),d("div",{key:`work_field_${i}`,class:"mb-2"},[e("label",{for:l.id},[_(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>s.selectedField=o),type:"radio",class:"radio_animated",id:l.id,value:l.id,name:"work_field"},null,8,W),[[f,s.selectedField]]),m(" "+u(l.name),1)],8,U)]))),128))])]),q],2)])],64)}const L=b(y,[["render",z]]),M={components:{jobfilter:L},data(){return{}}},S={class:"col-xl-3 xl-40 box-col-12"},A={class:"md-sidebar"},G={class:"md-sidebar-aside job-sidebar"},H={class:"default-according style-1 faq-accordion job-accordion"},I={class:"accordion",id:"accordionExample"};function J(k,t,p,v,s,w){const l=h("jobfilter");return a(),d("div",S,[e("div",A,[e("div",G,[e("div",H,[e("div",I,[x(l)])])])])])}const Q=b(M,[["render",J]]);export{Q as j};
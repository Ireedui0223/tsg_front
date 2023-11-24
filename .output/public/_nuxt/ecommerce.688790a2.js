import{_,o as e,c as o,a as s,F as v,h as $,n as y,t as u,g as k,i as l,b as t,w as g,d as a,j as w}from"./entry.d6e88b4d.js";import{_ as f}from"./nuxt-link.de7ebd02.js";import{D as x,e as C}from"./dropDown1.a7a9a15c.js";import"./layout.d7657599.js";const F=[{cardClass:"card-body primary",title:"New Orders",dataInNumber:"2,908",spanClass:"font-primary f-12 f-w-500",iconClass:"icon-arrow-up",status:"+20%",svgIcon:"new-order"},{cardClass:"card-body warning",title:"New Customers",dataInNumber:"2,435",spanClass:"font-warning f-12 f-w-500",iconClass:"icon-arrow-up",status:"+50%",svgIcon:"customers"},{cardClass:"card-body secondary",title:"Average Sale",dataInNumber:"$389k",spanClass:"font-secondary f-12 f-w-500",iconClass:"icon-arrow-down",status:"-10%",svgIcon:"sale"},{cardClass:"card-body success",title:"Gross Profit",dataInNumber:"$3,908",spanClass:"font-primary f-12 f-w-500",iconClass:"icon-arrow-up",status:"+80%",svgIcon:"profit"}],V=[{name:"Jane Cooper",email:"alma.lawson@gmail.com",image:"user/1.jpg"},{name:"Cameron Willia",email:"tim.jennings@gmail.com",image:"user/2.jpg"},{name:"Floyd Miles",email:"kenzi.lawson@gmail.com",image:"user/6.jpg"},{name:"Dianne Russell",email:"curtis.weaver@gmail.com",image:"user/5.jpg"},{name:"Guy Hawkins",email:"curtis.weaver@gmail.com",image:"user/3.jpg"}],j=[{svgIcon:"orders",title:"Orders",overviewInNumber:"10,098"},{svgIcon:"expense",title:"Earning",overviewInNumber:"$12,678"},{svgIcon:"doller-return",title:"Refunds",overviewInNumber:"3,001"}],B=[{image:"category/1.png",name:"Food & Drinks",orders:"12,200"},{image:"category/2.png",name:"Furniture",orders:"7,510"},{image:"category/3.png",name:"Grocery",orders:"15,475"},{image:"category/4.png",name:"Electronics",orders:"27,840"},{image:"category/5.png",name:"Toys & Games",orders:"8,788"},{image:"category/6.png",name:"Desktop",orders:"10,673"},{image:"category/7.png",name:"Mobile & Accessories",orders:"5,129"}],X=[{class:"activity-dot-warning",date:"2nd Sep, Today",title:"Anamika Comments this Poducts",decription:"I don't like things to be staged or fussy."},{class:"activity-dot-secondary",date:"3nd Sep, 2022",title:"  Jacksion Purchase ",decription:"Fashion fades, only style remain the same."},{class:"activity-dot-success",date:"2nd Sep, Today",title:" Anamika Comments this Poducts",decription:"I like to be real. I don't like things to staged."}],G=[{image:"product/1.png"},{image:"product/2.png"},{image:"product/3.png"}],z=""+globalThis.__publicAssetsURL("images/dashboard-2/widget-img.png"),Q=""+globalThis.__publicAssetsURL("images/dashboard-2/mobile.gif"),H={data(){return{allDetails:F}},methods:{getImgURL(r){return`/svg/icon-sprite.svg/#${r}`}}},M={class:"col-xxl-5 col-md-7 box-col-7"},J={class:"row"},W=k('<div class="col-sm-12"><div class="card o-hidden"><div class="card-body balance-widget"><span class="f-w-500 f-light">Total Balance</span><h4 class="mb-3 mt-1 f-w-500 m-b-0 f-22"> $<span class="counter">245,154.00 </span><span class="f-light f-14 f-w-400 ms-1">this month</span></h4><a class="purchase-btn btn btn-primary btn-hover-effect f-w-500" href="#">Tap Up Balance</a><div class="mobile-right-img"><img class="left-mobile-img" src="'+z+'" alt=""><img class="mobile-img" src="'+Q+'" alt="mobile with coin"></div></div></div></div>',1),Y={class:"card small-widget"},q={class:"f-light"},K={class:"d-flex align-items-end gap-1"},Z={class:"bg-gradient"},ss={class:"stroke-icon svg-fill"},ts=["xlink:href"];function es(r,h,i,b,n,p){return e(),o("div",M,[s("div",J,[W,(e(!0),o(v,null,$(n.allDetails,c=>(e(),o("div",{class:"col-6",key:c},[s("div",Y,[s("div",{class:y(c.cardClass)},[s("span",q,u(c.title),1),s("div",K,[s("h4",null,u(c.dataInNumber),1),s("span",{class:y(c.spanClass)},[s("i",{class:y(c.iconClass)},null,2),s("span",null,u(c.status),1)],2)]),s("div",Z,[(e(),o("svg",ss,[s("use",{"xlink:href":p.getImgURL(c.svgIcon)},null,8,ts)]))])],2)])]))),128))])])}const os=_(H,[["render",es]]),cs={components:{DropDown1:x},data(){return{valuableCustomer:V}},methods:{getImgURL(r){return"/images/dashboard/"+r}}},as={class:"col-xxl-3 col-md-5 col-sm-6 box-col-5"},ns={class:"appointment"},is={class:"card"},ls={class:"card-header card-no-border"},rs={class:"header-top"},ds=s("h5",{class:"m-0"},"Valuable Customer",-1),_s={class:"card-header-right-icon"},hs={class:"card-body pt-0"},ps={class:"appointment-table customer-table table-responsive"},ms={class:"table table-bordernone"},us=["src"],gs={class:"img-content-box"},bs={class:"f-w-500"},fs={class:"f-light"};function vs(r,h,i,b,n,p){const c=l("DropDown1"),d=f;return e(),o("div",as,[s("div",ns,[s("div",is,[s("div",ls,[s("div",rs,[ds,s("div",_s,[t(c)])])]),s("div",hs,[s("div",ps,[s("table",ms,[s("tbody",null,[(e(!0),o(v,null,$(n.valuableCustomer,m=>(e(),o("tr",{key:m},[s("td",null,[s("img",{class:"img-fluid img-40 rounded-circle me-2",src:p.getImgURL(m.image),alt:"user"},null,8,us)]),s("td",gs,[s("a",bs,[t(d,{to:"/student/profile"},{default:g(()=>[a(u(m.name),1)]),_:2},1024)]),s("span",fs,u(m.email),1)])]))),128))])])])])])])])}const $s=_(cs,[["render",vs]]),ws={components:{DropDown1:x},data(){return{ecomDashboard:C}}},ys={class:"col-xxl-4 col-sm-6 box-col-6"},xs={class:"card"},Cs={class:"card-header card-no-border"},Ts={class:"header-top"},Is=s("h5",{class:"m-0"},"Order this month",-1),Ds={class:"card-header-right-icon"},ks={class:"card-body pt-0"},Ls=s("div",{class:"light-card balance-card d-inline-block"},[s("h4",{class:"m-b-0"},[a(" $12,000 "),s("span",{class:"f-light f-14"},"(15,080 To Goal)")])],-1),Rs={class:"order-wrapper"};function Us(r,h,i,b,n,p){const c=l("DropDown1"),d=l("apexchart");return e(),o("div",ys,[s("div",xs,[s("div",Cs,[s("div",Ts,[Is,s("div",Ds,[t(c)])])]),s("div",ks,[Ls,s("div",Rs,[t(d,{height:"245",type:"line",options:n.ecomDashboard.options,series:n.ecomDashboard.series},null,8,["options","series"])])])])])}const As=_(ws,[["render",Us]]),Ns={data(){return{ecomDashboard:C}}},Ps={class:"col-xxl-3 col-md-6 box-col-6"},Ss={class:"card"},Es=s("div",{class:"card-header card-no-border"},[s("h5",null,"Monthly Profits"),s("span",{class:"f-light f-w-500 f-14"},"(Total profit growth of 30%)")],-1),Os={class:"card-body pt-0"},Fs={class:"monthly-profit"};function Vs(r,h,i,b,n,p){const c=l("apexchart");return e(),o("div",Ps,[s("div",Ss,[Es,s("div",Os,[s("div",Fs,[t(c,{height:"271.3",type:"donut",options:n.ecomDashboard.options1,series:n.ecomDashboard.series1},null,8,["options","series"])])])])])}const js=_(Ns,[["render",Vs]]),Bs={components:{DropDown1:x},data(){return{ecomDashboard:C,orderOverview:j}},methods:{getImgURL(r){return`/svg/icon-sprite.svg#${r}`}}},Xs={class:"col-xxl-9 box-col-12"},Gs={class:"card"},zs=s("div",{class:"card-header card-no-border"},[s("h5",null,"Order Overview")],-1),Qs={class:"card-body pt-0"},Hs={class:"row m-0 overall-card overview-card"},Ms={class:"col-xl-9 col-md-8 col-sm-7 p-0 box-col-7"},Js={class:"chart-right"},Ws={class:"row"},Ys={class:"col-xl-12"},qs={class:"card-body p-0"},Ks=k('<ul class="balance-data"><li><span class="circle bg-secondary"></span><span class="f-light ms-1">Refunds</span></li><li><span class="circle bg-primary"></span><span class="f-light ms-1">Earning</span></li><li><span class="circle bg-success"></span><span class="f-light ms-1">Order</span></li></ul>',1),Zs={class:"current-sale-container order-container"},st={class:"overview-wrapper"},tt={class:"back-bar-container"},et={class:"col-xl-3 col-md-4 col-sm-5 p-0 box-col-5"},ot={class:"row g-sm-3 g-2"},ct={class:"light-card balance-card widget-hover"},at={class:"svg-box"},nt={class:"svg-fill"},it=["xlink:href"],lt={class:"f-light"},rt={class:"mt-1 m-b-0"},dt={class:"ms-auto text-end"};function _t(r,h,i,b,n,p){const c=l("apexchart"),d=l("DropDown1");return e(),o("div",Xs,[s("div",Gs,[zs,s("div",Qs,[s("div",Hs,[s("div",Ms,[s("div",Js,[s("div",Ws,[s("div",Ys,[s("div",qs,[Ks,s("div",Zs,[s("div",st,[t(c,{height:"265",type:"line",options:n.ecomDashboard.options2,series:n.ecomDashboard.series2},null,8,["options","series"])]),s("div",tt,[t(c,{height:"195",type:"bar",options:n.ecomDashboard.options3,series:n.ecomDashboard.series3},null,8,["options","series"])])])])])])])]),s("div",et,[s("div",ot,[(e(!0),o(v,null,$(n.orderOverview,m=>(e(),o("div",{class:"col-md-12",key:m},[s("div",ct,[s("div",at,[(e(),o("svg",nt,[s("use",{"xlink:href":p.getImgURL(m.svgIcon)},null,8,it)]))]),s("div",null,[s("span",lt,u(m.title),1),s("h6",rt,u(m.overviewInNumber),1)]),s("div",dt,[t(d)])])]))),128))])])])])])])}const ht=_(Bs,[["render",_t]]),pt=""+globalThis.__publicAssetsURL("images/dashboard-2/discover.png"),mt={},ut={class:"col-xxl-3 col-xl-4 col-sm-6 box-col-6 wow zoomIn"},gt=k('<div class="card purchase-card discover"><img class="img-fluid" src="'+pt+'" alt="vector discover"><div class="card-body pt-3"><h5 class="mb-1">Discover Pro</h5><p class="f-light"> Design and style should work toward making you look good. </p><a class="purchase-btn btn btn-hover-effect btn-primary f-w-500" href="https://1.envato.market/3GVzd" target="_blank">Update Now</a></div></div>',1),bt=[gt];function ft(r,h){return e(),o("div",ut,bt)}const vt=_(mt,[["render",ft]]),$t={data(){return{ecomDashboard:C}}},wt=w+"#user-visitor",yt={class:"col-xxl-4 col-xl-4 col-sm-6 box-col-6"},xt={class:"card visitor-card"},Ct=s("div",{class:"card-header card-no-border"},[s("div",{class:"header-top"},[s("h5",{class:"m-0"},[a(" Visitors"),s("span",{class:"f-14 font-primary f-w-500 ms-1"},[s("svg",{class:"svg-fill me-1"},[s("use",{href:wt})]),a("(+2.8)")])]),s("div",{class:"card-header-right-icon"},[s("div",{class:"dropdown icon-dropdown"},[s("button",{class:"btn dropdown-toggle",id:"visitorButton",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[s("i",{class:"icon-more-alt"})]),s("div",{class:"dropdown-menu dropdown-menu-end","aria-labelledby":"visitorButton"},[s("a",{class:"dropdown-item",href:"#"},"Today"),s("a",{class:"dropdown-item",href:"#"},"Tomorrow"),s("a",{class:"dropdown-item",href:"#"},"Yesterday")])])])])],-1),Tt={class:"card-body pt-0"},It={class:"visitors-container"},Dt={id:"visitor-chart"};function kt(r,h,i,b,n,p){const c=l("apexchart");return e(),o("div",yt,[s("div",xt,[Ct,s("div",Tt,[s("div",It,[s("div",Dt,[t(c,{height:"285",type:"bar",options:n.ecomDashboard.options4,series:n.ecomDashboard.series4},null,8,["options","series"])])])])])])}const Lt=_($t,[["render",kt]]),Rt=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/4.png"),Ut=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/3.png"),At={},L=w+"#24-hour",Nt={class:"recent-table table-responsive"},Pt={class:"table"},St=s("thead",null,[s("tr",null,[s("th",{class:"f-light"},"Item"),s("th",{class:"f-light"},"Qty"),s("th",{class:"f-light"},"Price"),s("th",{class:"f-light"},"Status"),s("th",{class:"f-light"},"Total Price")])],-1),Et={class:"product-content"},Ot=s("div",{class:"order-image"},[s("img",{src:Rt,alt:"t-shirt"})],-1),Ft={class:"f-14 m-b-0"},Vt=s("span",{class:"f-light f-12"},"Id : #CFDE-2163",-1),jt=s("td",{class:"f-w-500"},"X1",-1),Bt=s("td",{class:"f-w-500"},"$56.00",-1),Xt=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-success"},[s("svg",{class:"me-1"},[s("use",{href:L})]),a("Verified ")])],-1),Gt=s("td",{class:"f-w-500"},"$100.00",-1),zt={class:"product-content"},Qt=s("div",{class:"order-image"},[s("img",{src:Ut,alt:"t-shirt"})],-1),Ht={class:"f-14 m-b-0"},Mt=s("span",{class:"f-light f-12"},"Id : #CFDE-2780",-1),Jt=s("td",{class:"f-w-500"},"X2",-1),Wt=s("td",{class:"f-w-500"},"$156.00",-1),Yt=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-danger"},[s("svg",{class:"me-1"},[s("use",{href:L})]),a("Rejected ")])],-1),qt=s("td",{class:"f-w-500"},"$870.00",-1);function Kt(r,h){const i=f;return e(),o("div",Nt,[s("table",Pt,[St,s("tbody",null,[s("tr",null,[s("td",null,[s("div",Et,[Ot,s("div",null,[s("h6",Ft,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("T-shirt")]),_:1})])]),Vt])])]),jt,Bt,Xt,Gt]),s("tr",null,[s("td",null,[s("div",zt,[Qt,s("div",null,[s("h6",Ht,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("Pink T-shirt")]),_:1})])]),Mt])])]),Jt,Wt,Yt,qt])])])])}const Zt=_(At,[["render",Kt]]),se=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/5.png"),te=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/6.png"),ee={},R=w+"#24-hour",oe={class:"recent-table table-responsive"},ce={class:"table"},ae=s("thead",null,[s("tr",null,[s("th",{class:"f-light"},"Item"),s("th",{class:"f-light"},"Qty"),s("th",{class:"f-light"},"Price"),s("th",{class:"f-light"},"Status"),s("th",{class:"f-light"},"Total Price")])],-1),ne={class:"product-content"},ie=s("div",{class:"order-image"},[s("img",{src:se,alt:"television"})],-1),le={class:"f-14 m-b-0"},re=s("span",{class:"f-light f-12"},"Id : #CFDE-2163",-1),de=s("td",{class:"f-w-500"},"X1",-1),_e=s("td",{class:"f-w-500"},"$56.00",-1),he=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-danger"},[s("svg",{class:"me-1"},[s("use",{href:R})]),a("Rejected ")])],-1),pe=s("td",{class:"f-w-500"},"$390.00",-1),me={class:"product-content"},ue=s("div",{class:"order-image"},[s("img",{src:te,alt:"television"})],-1),ge={class:"f-14 m-b-0"},be=s("span",{class:"f-light f-12"},"Id : #CFDE-2780",-1),fe=s("td",{class:"f-w-500"},"X2",-1),ve=s("td",{class:"f-w-500"},"$100.00",-1),$e=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-success"},[s("svg",{class:"me-1"},[s("use",{href:R})]),a("Verified ")])],-1),we=s("td",{class:"f-w-500"},"$870.00",-1);function ye(r,h){const i=f;return e(),o("div",oe,[s("table",ce,[ae,s("tbody",null,[s("tr",null,[s("td",null,[s("div",ne,[ie,s("div",null,[s("h6",le,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("Sony")]),_:1})])]),re])])]),de,_e,he,pe]),s("tr",null,[s("td",null,[s("div",me,[ue,s("div",null,[s("h6",ge,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("Samsung")]),_:1})])]),be])])]),fe,ve,$e,we])])])])}const xe=_(ee,[["render",ye]]),Ce=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/1.png"),Te=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/2.png"),Ie={},U=w+"#24-hour",De={class:"recent-table table-responsive"},ke={class:"table"},Le=s("thead",null,[s("tr",null,[s("th",{class:"f-light"},"Item"),s("th",{class:"f-light"},"Qty"),s("th",{class:"f-light"},"Price"),s("th",{class:"f-light"},"Status"),s("th",{class:"f-light"},"Total Price")])],-1),Re={class:"product-content"},Ue=s("div",{class:"order-image"},[s("img",{src:Ce,alt:"headephones"})],-1),Ae={class:"f-14 m-b-0"},Ne=s("span",{class:"f-light f-12"},"Id : #CFDE-2163",-1),Pe=s("td",{class:"f-w-500"},"X1",-1),Se=s("td",{class:"f-w-500"},"$56.00",-1),Ee=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-success"},[s("svg",{class:"me-1"},[s("use",{href:U})]),a("Verified ")])],-1),Oe=s("td",{class:"f-w-500"},"$100.00",-1),Fe={class:"product-content"},Ve=s("div",{class:"order-image"},[s("img",{src:Te,alt:"headephones"})],-1),je={class:"f-14 m-b-0"},Be=s("span",{class:"f-light f-12"},"Id : #CFDE-2780",-1),Xe=s("td",{class:"f-w-500"},"X2",-1),Ge=s("td",{class:"f-w-500"},"$156.00",-1),ze=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-danger"},[s("svg",{class:"me-1"},[s("use",{href:U})]),a("Rejected ")])],-1),Qe=s("td",{class:"f-w-500"},"$100.00",-1);function He(r,h){const i=f;return e(),o("div",De,[s("table",ke,[Le,s("tbody",null,[s("tr",null,[s("td",null,[s("div",Re,[Ue,s("div",null,[s("h6",Ae,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("Sony")]),_:1})])]),Ne])])]),Pe,Se,Ee,Oe]),s("tr",null,[s("td",null,[s("div",Fe,[Ve,s("div",null,[s("h6",je,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("Sennheiser")]),_:1})])]),Be])])]),Xe,Ge,ze,Qe])])])])}const Me=_(Ie,[["render",He]]),Je=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/7.png"),We=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/8.png"),Ye={},A=w+"#24-hour",qe={class:"recent-table table-responsive"},Ke={class:"table"},Ze=s("thead",null,[s("tr",null,[s("th",{class:"f-light"},"Item"),s("th",{class:"f-light"},"Qty"),s("th",{class:"f-light"},"Price"),s("th",{class:"f-light"},"Status"),s("th",{class:"f-light"},"Total Price")])],-1),so={class:"product-content"},to=s("div",{class:"order-image"},[s("img",{src:Je,alt:"chair"})],-1),eo={class:"f-14 m-b-0"},oo=s("span",{class:"f-light f-12"},"Id : #CFDE-2163",-1),co=s("td",{class:"f-w-500"},"X1",-1),ao=s("td",{class:"f-w-500"},"$48.00",-1),no=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-success"},[s("svg",{class:"me-1"},[s("use",{href:A})]),a("Verified ")])],-1),io=s("td",{class:"f-w-500"},"$50.00",-1),lo={class:"product-content"},ro=s("div",{class:"order-image"},[s("img",{src:We,alt:"chair"})],-1),_o={class:"f-14 m-b-0"},ho=s("span",{class:"f-light f-12"},"Id : #CFDE-2780",-1),po=s("td",{class:"f-w-500"},"X2",-1),mo=s("td",{class:"f-w-500"},"$73.00",-1),uo=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-danger"},[s("svg",{class:"me-1"},[s("use",{href:A})]),a("Rejected ")])],-1),go=s("td",{class:"f-w-500"},"$75.00",-1);function bo(r,h){const i=f;return e(),o("div",qe,[s("table",Ke,[Ze,s("tbody",null,[s("tr",null,[s("td",null,[s("div",so,[to,s("div",null,[s("h6",eo,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("Chair")]),_:1})])]),oo])])]),co,ao,no,io]),s("tr",null,[s("td",null,[s("div",lo,[ro,s("div",null,[s("h6",_o,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("Office chair")]),_:1})])]),ho])])]),po,mo,uo,go])])])])}const fo=_(Ye,[["render",bo]]),vo=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/9.png"),$o=""+globalThis.__publicAssetsURL("images/dashboard-2/order/sub-product/10.png"),wo={},N=w+"#24-hour",yo={class:"recent-table table-responsive"},xo={class:"table"},Co=s("thead",null,[s("tr",null,[s("th",{class:"f-light"},"Item"),s("th",{class:"f-light"},"Qty"),s("th",{class:"f-light"},"Price"),s("th",{class:"f-light"},"Status"),s("th",{class:"f-light"},"Total Price")])],-1),To={class:"product-content"},Io=s("div",{class:"order-image"},[s("img",{src:vo,alt:"lamp"})],-1),Do={class:"f-14 m-b-0"},ko=s("span",{class:"f-light f-12"},"Id : #CFDE-2163",-1),Lo=s("td",{class:"f-w-500"},"X1",-1),Ro=s("td",{class:"f-w-500"},"$20.00",-1),Uo=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-success"},[s("svg",{class:"me-1"},[s("use",{href:N})]),a("Verified ")])],-1),Ao=s("td",{class:"f-w-500"},"$25.00",-1),No={class:"product-content"},Po=s("div",{class:"order-image"},[s("img",{src:$o,alt:"lamp"})],-1),So={class:"f-14 m-b-0"},Eo=s("span",{class:"f-light f-12"},"Id : #CFDE-2780",-1),Oo=s("td",{class:"f-w-500"},"X2",-1),Fo=s("td",{class:"f-w-500"},"$70.00",-1),Vo=s("td",{class:"f-w-500"},[s("div",{class:"recent-status font-danger"},[s("svg",{class:"me-1"},[s("use",{href:N})]),a("Rejected ")])],-1),jo=s("td",{class:"f-w-500"},"$88.00",-1);function Bo(r,h){const i=f;return e(),o("div",yo,[s("table",xo,[Co,s("tbody",null,[s("tr",null,[s("td",null,[s("div",To,[Io,s("div",null,[s("h6",Do,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("Lamp")]),_:1})])]),ko])])]),Lo,Ro,Uo,Ao]),s("tr",null,[s("td",null,[s("div",No,[Po,s("div",null,[s("h6",So,[s("a",null,[t(i,{to:"/ecommerce/order/history"},{default:g(()=>[a("Bedside lamp")]),_:1})])]),Eo])])]),Oo,Fo,Vo,jo])])])])}const Xo=_(wo,[["render",Bo]]),Go=""+globalThis.__publicAssetsURL("images/dashboard-2/order/1.png"),zo=""+globalThis.__publicAssetsURL("images/dashboard-2/order/2.png"),Qo=""+globalThis.__publicAssetsURL("images/dashboard-2/order/3.png"),Ho=""+globalThis.__publicAssetsURL("images/dashboard-2/order/4.png"),Mo=""+globalThis.__publicAssetsURL("images/dashboard-2/order/5.png"),Jo={components:{DropDown1:x,ShirtTable:Zt,TelevisionTable:xe,HeadphoneTable:Me,ChairTable:fo,LampTable:Xo}},Wo={class:"col-xxl-5 col-xl-4 box-col-12"},Yo={class:"card recent-order"},qo={class:"card-header card-no-border"},Ko={class:"header-top"},Zo=s("h5",{class:"m-0"},"Recent Orders",-1),sc={class:"card-header-right-icon"},tc={class:"card-body pt-0"},ec={class:"recent-sliders"},oc=s("div",{class:"nav nav-pills",id:"v-pills-tab",role:"tablist"},[s("button",{class:"active frame-box",id:"v-pills-shirt-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-shirt",type:"button",role:"tab","aria-controls":"v-pills-shirt","aria-selected":"true"},[s("span",{class:"frame-image"},[s("img",{src:Go,alt:"vector T-shirt"})])]),s("button",{class:"frame-box",id:"v-pills-television-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-television",type:"button",role:"tab","aria-controls":"v-pills-television","aria-selected":"false"},[s("span",{class:"frame-image"},[s("img",{src:zo,alt:"vector television"})])]),s("button",{class:"frame-box",id:"v-pills-headphone-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-headphone",type:"button",role:"tab","aria-controls":"v-pills-headphone","aria-selected":"false"},[s("span",{class:"frame-image"},[s("img",{src:Qo,alt:"vector headphone"})])]),s("button",{class:"frame-box",id:"v-pills-chair-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-chair",type:"button",role:"tab","aria-controls":"v-pills-chair","aria-selected":"false"},[s("span",{class:"frame-image"},[s("img",{src:Ho,alt:"vector chair"})])]),s("button",{class:"frame-box",id:"v-pills-lamp-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-lamp",type:"button",role:"tab","aria-controls":"v-pills-lamp","aria-selected":"false"},[s("span",{class:"frame-image"},[s("img",{src:Mo,alt:"vector lamp"})])])],-1),cc={class:"tab-content",id:"v-pills-tabContent"},ac={class:"tab-pane fade show active",id:"v-pills-shirt",role:"tabpanel","aria-labelledby":"v-pills-shirt-tab"},nc={class:"tab-pane fade",id:"v-pills-television",role:"tabpanel","aria-labelledby":"v-pills-television-tab"},ic={class:"tab-pane fade",id:"v-pills-headphone",role:"tabpanel","aria-labelledby":"v-pills-headphone-tab"},lc={class:"tab-pane fade",id:"v-pills-chair",role:"tabpanel","aria-labelledby":"v-pills-chair-tab"},rc={class:"tab-pane fade",id:"v-pills-lamp",role:"tabpanel","aria-labelledby":"v-pills-lamp-tab"};function dc(r,h,i,b,n,p){const c=l("DropDown1"),d=l("ShirtTable"),m=l("TelevisionTable"),T=l("HeadphoneTable"),I=l("ChairTable"),D=l("LampTable");return e(),o("div",Wo,[s("div",Yo,[s("div",qo,[s("div",Ko,[Zo,s("div",sc,[t(c)])])]),s("div",tc,[s("div",ec,[oc,s("div",cc,[s("div",ac,[t(d)]),s("div",nc,[t(m)]),s("div",ic,[t(T)]),s("div",lc,[t(I)]),s("div",rc,[t(D)])])])])])])}const _c=_(Jo,[["render",dc]]),hc={data(){return{topcategories:B,activities:X,products:G}},methods:{getImgURL(r){return"/images/dashboard-2/"+r}}},pc={class:"card"},mc=s("div",{class:"card-header card-no-border"},[s("h5",null,"Top Categories")],-1),uc={class:"card-body pt-0"},gc={class:"categories-list"},bc={class:"bg-light"},fc=["src"],vc={class:"m-b-0"},$c={class:"f-light f-12 f-w-500"},wc={class:"recent-activity notification"},yc=s("h5",null,"Recent Activity",-1),xc={class:"d-flex"},Cc=s("div",{class:"activity-dot-primary"},null,-1),Tc={class:"w-100 ms-3"},Ic=s("p",{class:"d-flex justify-content-between mb-2"},[s("span",{class:"date-content light-background"},"8th March, 2022 ")],-1),Dc=s("h6",null,[a("Added New Items"),s("span",{class:"dot-notification"})],-1),kc=s("span",{class:"f-light"},"If you have it, you can make anything look good.",-1),Lc={class:"recent-images"},Rc={class:"recent-img-wrap"},Uc=["src"],Ac={class:"w-100 ms-3"},Nc={class:"d-flex justify-content-between mb-2"},Pc={class:"date-content light-background"},Sc=s("span",{class:"dot-notification"},null,-1);function Ec(r,h,i,b,n,p){const c=f;return e(),o("div",pc,[mc,s("div",uc,[s("ul",gc,[(e(!0),o(v,null,$(n.topcategories,d=>(e(),o("li",{class:"d-flex",key:d},[s("div",bc,[s("img",{src:p.getImgURL(d.image),alt:"vector burger"},null,8,fc)]),s("div",null,[s("h6",vc,[s("a",null,[t(c,{to:"/ecommerce/product"},{default:g(()=>[a(u(d.name),1)]),_:2},1024)])]),s("span",$c,"("+u(d.orders)+")",1)])]))),128))]),s("div",wc,[yc,s("ul",null,[s("li",xc,[Cc,s("div",Tc,[Ic,Dc,kc,s("div",Lc,[s("ul",null,[(e(!0),o(v,null,$(n.products,d=>(e(),o("li",{key:d},[s("div",Rc,[s("img",{src:p.getImgURL(d.image),alt:"chair"},null,8,Uc)])]))),128))])])])]),(e(!0),o(v,null,$(n.activities,d=>(e(),o("li",{class:"d-flex",key:d},[s("div",{class:y(d.class)},null,2),s("div",Ac,[s("p",Nc,[s("span",Pc,u(d.date),1)]),s("h6",null,[a(u(d.title),1),Sc]),s("span",null,u(d.decription),1)])]))),128))])])])])}const Oc=_(hc,[["render",Ec]]),Fc={components:{allfourCard:os,valuableCustomerCard:$s,orderthismonthCard:As,monthlyProfitsCard:js,orderOverviewCard:ht,discoverProCard:vt,visitorsCard:Lt,recetOrderCard:_c,topCategoriesCardVue:Oc}},Vc={class:"container-fluid"},jc={class:"row size-column"},Bc={class:"col-xxl-10 col-md-12 box-col-8 grid-ed-12"},Xc={class:"row"},Gc={class:"col-xxl-2 col-xl-3 col-md-4 grid-ed-none box-col-4e d-xxl-block d-none"};function zc(r,h,i,b,n,p){const c=l("Breadcrumbs"),d=l("allfourCard"),m=l("valuableCustomerCard"),T=l("orderthismonthCard"),I=l("monthlyProfitsCard"),D=l("orderOverviewCard"),P=l("discoverProCard"),S=l("visitorsCard"),E=l("recetOrderCard"),O=l("topCategoriesCardVue");return e(),o("div",null,[t(c,{main:"Dashboard",title:"e-commerce"}),s("div",Vc,[s("div",jc,[s("div",Bc,[s("div",Xc,[t(d),t(m),t(T),t(I),t(D),t(P),t(S),t(E)])]),s("div",Gc,[t(O)])])])])}const Qc=_(Fc,[["render",zc]]),Hc={components:{indexEcommerce:Qc}};function Mc(r,h,i,b,n,p){const c=l("indexEcommerce");return e(),o("div",null,[t(c)])}const Kc=_(Hc,[["render",Mc]]);export{Kc as default};
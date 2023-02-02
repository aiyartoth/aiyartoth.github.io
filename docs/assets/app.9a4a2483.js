import{d as v,r as f,a as $,b as H,c as P,i as h,e as I,f as N,g as F,o as A,h as u,j as g,k as E,l as k,m as M,n as x,R as j,p as U,q as B,S as q,u as G,w as J,s as K,t as W,v as Y}from"./framework.4103f851.js";const z="modulepreload",Z=function(e){return"/docs/"+e},R={},i=function(t,r,a){if(!r||r.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=Z(o),o in R)return;R[o]=!0;const s=o.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!a)for(let _=n.length-1;_>=0;_--){const L=n[_];if(L.href===o&&(!s||L.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":z,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((_,L)=>{c.addEventListener("load",_),c.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},Q={"v-8daa1a0e":()=>i(()=>import("./index.html.94824032.js"),[]).then(({data:e})=>e),"v-15054f24":()=>i(()=>import("./index.html.8a49ada6.js"),[]).then(({data:e})=>e),"v-0d35c313":()=>i(()=>import("./collect.html.bdd89431.js"),[]).then(({data:e})=>e),"v-1046a773":()=>i(()=>import("./plain.html.af99bd5c.js"),[]).then(({data:e})=>e),"v-ca04c7b8":()=>i(()=>import("./index.html.a1c15c35.js"),[]).then(({data:e})=>e),"v-32824840":()=>i(()=>import("./index.html.4f6e18a5.js"),[]).then(({data:e})=>e),"v-3706649a":()=>i(()=>import("./404.html.50edea1e.js"),[]).then(({data:e})=>e)},X=JSON.parse('{"base":"/docs/","lang":"zh-CN","title":"Aiyartoth","description":"docs backup","head":[],"locales":{}}'),D={"v-8daa1a0e":v(()=>i(()=>import("./index.html.3213df78.js"),["assets/index.html.3213df78.js","assets/framework.4103f851.js"])),"v-15054f24":v(()=>i(()=>import("./index.html.3ae1fb60.js"),["assets/index.html.3ae1fb60.js","assets/framework.4103f851.js"])),"v-0d35c313":v(()=>i(()=>import("./collect.html.d7a9a324.js"),["assets/collect.html.d7a9a324.js","assets/framework.4103f851.js"])),"v-1046a773":v(()=>i(()=>import("./plain.html.145ab05a.js"),["assets/plain.html.145ab05a.js","assets/framework.4103f851.js"])),"v-ca04c7b8":v(()=>i(()=>import("./index.html.2c7f489e.js"),["assets/index.html.2c7f489e.js","assets/framework.4103f851.js"])),"v-32824840":v(()=>i(()=>import("./index.html.c67273b1.js"),["assets/index.html.c67273b1.js","assets/framework.4103f851.js"])),"v-3706649a":v(()=>i(()=>import("./404.html.c6dc7575.js"),["assets/404.html.c6dc7575.js","assets/framework.4103f851.js"]))};var ee=f(Q),b=$({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),p=f(b),T=()=>p,S=Symbol(""),Ae=()=>{const e=E(S);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},O=Symbol(""),te=()=>{const e=E(O);if(!e)throw new Error("usePageHead() is called without provider.");return e},ae=Symbol(""),w=Symbol(""),re=()=>{const e=E(w);if(!e)throw new Error("usePageLang() is called without provider.");return e},C=Symbol(""),De=()=>{const e=E(C);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},m=f(X),oe=()=>m,V=Symbol(""),be=()=>{const e=E(V);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},ne=Symbol(""),d=H({resolvePageData:async e=>{const t=ee.value[e],r=await(t==null?void 0:t());return r!=null?r:b},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,r)=>{const a=h(t.description)?t.description:r.description,n=[...I(t.head)?t.head:[],...r.head,["title",{},e],["meta",{name:"description",content:a}]];return N(n)},resolvePageHeadTitle:(e,t)=>`${e.title?`${e.title}`:""}${t.title?` | ${t.title}`:""}`,resolvePageLang:e=>e.lang||"en",resolveRouteLocale:(e,t)=>F(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),se=P({name:"ClientOnly",setup(e,t){const r=f(!1);return A(()=>{r.value=!0}),()=>{var a,n;return r.value?(n=(a=t.slots).default)==null?void 0:n.call(a):null}}}),le=P({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=T(),r=u(()=>D[e.pageKey||t.value.key]);return()=>r.value?g(r.value):g("div","404 Not Found")}}),ie=e=>k(e)?e:`${oe().value.base}${M(e)}`;const ue=[["v-8daa1a0e","/",{title:"准备工作"},["/index.html","/README.md"]],["v-15054f24","/note/",{title:"导航"},["/note/index.html","/note/README.md"]],["v-0d35c313","/note/collect.html",{title:"收集"},["/note/collect","/note/collect.md"]],["v-1046a773","/note/plain.html",{title:"每日计划"},["/note/plain","/note/plain.md"]],["v-ca04c7b8","/program/",{title:""},["/program/index.html","/program/README.md"]],["v-32824840","/program/html/",{title:""},["/program/html/index.html","/program/html/README.md"]],["v-3706649a","/404.html",{title:""},["/404"]]];var ce="Layout",ve="NotFound",de=async()=>{const{clientConfigs:e}=await i(()=>import("./clientConfigs.2142e26b.js"),["assets/clientConfigs.2142e26b.js","assets/framework.4103f851.js"]),t=e.reduce((a,n)=>({...a,...n.layouts}),{});return P({name:"Vuepress",setup(){const a=T(),n=u(()=>{let o;if(a.value.path){const s=a.value.frontmatter.layout;h(s)?o=s:o=ce}else o=ve;return t[o]});return()=>g(n.value)}})},pe=async()=>{const e=await de();return ue.reduce((t,[r,a,n,o])=>(t.push({name:r,path:a,component:e,meta:n},...o.map(s=>({path:s,redirect:a}))),t),[{name:"404",path:"/:catchAll(.*)",component:e}])},me=K,he=async()=>{const e=U({history:me(B(m.value.base)),routes:await pe(),scrollBehavior:(t,r,a)=>a||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,r)=>{var a;(t.path!==r.path||r===q)&&([p.value]=await Promise.all([d.resolvePageData(t.name),(a=D[t.name])==null?void 0:a.__asyncLoader()]))}),e},_e=e=>{e.component("ClientOnly",se),e.component("Content",le)},ge=(e,t)=>{const r=u(()=>d.resolveRouteLocale(m.value.locales,t.currentRoute.value.path)),a=u(()=>d.resolveSiteLocaleData(m.value,r.value)),n=u(()=>d.resolvePageFrontmatter(p.value)),o=u(()=>d.resolvePageHeadTitle(p.value,a.value)),s=u(()=>d.resolvePageHead(o.value,n.value,a.value)),l=u(()=>d.resolvePageLang(p.value));return e.provide(C,r),e.provide(V,a),e.provide(S,n),e.provide(ae,o),e.provide(O,s),e.provide(w,l),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>n.value},$head:{get:()=>s.value},$headTitle:{get:()=>o.value},$lang:{get:()=>l.value},$page:{get:()=>p.value},$routeLocale:{get:()=>r.value},$site:{get:()=>m.value},$siteLocale:{get:()=>a.value},$withBase:{get:()=>ie}}),{pageData:p,pageFrontmatter:n,pageHead:s,pageHeadTitle:o,pageLang:l,routeLocale:r,siteData:m,siteLocaleData:a}},fe=()=>{const e=G(),t=te(),r=re(),a=f([]),n=()=>{t.value.forEach(s=>{const l=Ee(s);l&&a.value.push(l)})},o=()=>{document.documentElement.lang=r.value,a.value.forEach(s=>{s.parentNode===document.head&&document.head.removeChild(s)}),a.value.splice(0,a.value.length),t.value.forEach(s=>{const l=ye(s);l!==null&&(document.head.appendChild(l),a.value.push(l))})};Y(ne,o),A(()=>{n(),o(),J(()=>e.path,()=>o())})},Ee=([e,t,r=""])=>{const a=Object.entries(t).map(([l,y])=>h(y)?`[${l}=${JSON.stringify(y)}]`:y===!0?`[${l}]`:"").join(""),n=`head > ${e}${a}`;return Array.from(document.querySelectorAll(n)).find(l=>l.innerText===r)||null},ye=([e,t,r])=>{if(!h(e))return null;const a=document.createElement(e);return W(t)&&Object.entries(t).forEach(([n,o])=>{h(o)?a.setAttribute(n,o):o===!0&&a.setAttribute(n,"")}),h(r)&&a.appendChild(document.createTextNode(r)),a},Le=x,Pe=async()=>{var a;const{clientConfigs:e}=await i(()=>import("./clientConfigs.2142e26b.js"),["assets/clientConfigs.2142e26b.js","assets/framework.4103f851.js"]),t=Le({name:"VuepressApp",setup(){var n;fe();for(const o of e)(n=o.setup)==null||n.call(o);return()=>[g(j),...e.flatMap(({rootComponents:o=[]})=>o.map(s=>g(s)))]}}),r=await he();_e(t),ge(t,r);for(const n of e)await((a=n.enhance)==null?void 0:a.call(n,{app:t,router:r,siteData:m}));return t.use(r),{app:t,router:r}};Pe().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{se as C,Ae as a,T as b,oe as c,Pe as createVueApp,be as d,C as r,De as u,ie as w};

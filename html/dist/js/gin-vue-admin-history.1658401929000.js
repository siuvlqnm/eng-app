/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{D as n,u,r,j as o,N as i,S as v,L as m,M as c,b as p,o as y,c as d,e as f,w as g,F as b,z as h,q as S,d as O,G as q,y as I,h as N,t as k,P as w,U as j,Q as x,V as J}from"../gva/gin-vue-admin-index.1658401929000.js";const C={class:"router-history"},P=["tab"],V={name:"HistoryComponent"},E=Object.assign(V,{setup(e){const V=n(),E=u(),L=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),T=r([]),R=r(""),A=r(!1),U=o(),_=e=>e.name+JSON.stringify(e.query)+JSON.stringify(e.params),z=r(0),D=r(0),F=r(!1),G=r(!1),H=r(""),M=i((()=>U.userInfo.authority.defaultRouter)),Q=()=>{T.value=[{name:M.value,meta:{title:"首页"},query:{},params:{}}],E.push({name:M.value}),A.value=!1,sessionStorage.setItem("historys",JSON.stringify(T.value))},X=()=>{let e;const a=T.value.findIndex((a=>(L(a)===H.value&&(e=a),L(a)===H.value))),l=T.value.findIndex((e=>L(e)===R.value));T.value.splice(0,a),a>l&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(T.value))},Y=()=>{let e;const a=T.value.findIndex((a=>(L(a)===H.value&&(e=a),L(a)===H.value))),l=T.value.findIndex((e=>L(e)===R.value));T.value.splice(a+1,T.value.length),a<l&&E.push(e),sessionStorage.setItem("historys",JSON.stringify(T.value))},$=()=>{let e;T.value=T.value.filter((a=>(L(a)===H.value&&(e=a),L(a)===H.value))),E.push(e),sessionStorage.setItem("historys",JSON.stringify(T.value))},B=e=>{if(!T.value.some((a=>((e,a)=>{if(e.name!==a.name)return!1;if(Object.keys(e.query).length!==Object.keys(a.query).length||Object.keys(e.params).length!==Object.keys(a.params).length)return!1;for(const l in e.query)if(e.query[l]!==a.query[l])return!1;for(const l in e.params)if(e.params[l]!==a.params[l])return!1;return!0})(a,e)))){const n={};n.name=e.name,n.meta=((e,n)=>{for(var u in n||(n={}))l.call(n,u)&&s(e,u,n[u]);if(a)for(var u of a(n))t.call(n,u)&&s(e,u,n[u]);return e})({},e.meta),delete n.meta.matched,n.query=e.query,n.params=e.params,T.value.push(n)}window.sessionStorage.setItem("activeValue",L(e))},K=r({});v((()=>T.value),(()=>{K.value={},T.value.forEach((e=>{K.value[L(e)]=e}))}));const W=e=>{const a=K.value[e];E.push({name:a.name,query:a.query,params:a.params})},Z=e=>{const a=T.value.findIndex((a=>L(a)===e));L(V)===e&&(1===T.value.length?E.push({name:M.value}):a<T.value.length-1?E.push({name:T.value[a+1].name,query:T.value[a+1].query,params:T.value[a+1].params}):E.push({name:T.value[a-1].name,query:T.value[a-1].query,params:T.value[a-1].params})),T.value.splice(a,1)};v((()=>A.value),(()=>{A.value?document.body.addEventListener("click",(()=>{A.value=!1})):document.body.removeEventListener("click",(()=>{A.value=!1}))})),v((()=>V),((e,a)=>{"Login"!==e.name&&"Reload"!==e.name&&(T.value=T.value.filter((e=>!e.meta.closeTab)),B(e),sessionStorage.setItem("historys",JSON.stringify(T.value)),R.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),v((()=>T.value),(()=>{sessionStorage.setItem("historys",JSON.stringify(T.value))}),{deep:!0});return(()=>{c.on("closeThisPage",(()=>{Z(_(V))})),c.on("closeAllPage",(()=>{Q()})),c.on("mobile",(e=>{G.value=e})),c.on("collapse",(e=>{F.value=e}));const e=[{name:M.value,meta:{title:"首页"},query:{},params:{}}];T.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?R.value=window.sessionStorage.getItem("activeValue"):R.value=L(V),B(V)})(),m((()=>{c.off("collapse"),c.off("mobile")})),(e,a)=>{const l=p("el-tab-pane"),t=p("el-tabs");return y(),d("div",C,[f(t,{modelValue:R.value,"onUpdate:modelValue":a[0]||(a[0]=e=>R.value=e),closable:!(1===T.value.length&&e.$route.name===I(M)),type:"card",onContextmenu:a[1]||(a[1]=j((e=>(e=>{if(1===T.value.length&&V.name===M.value)return!1;let a="";if(a="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id,a){let l;A.value=!0,l=F.value?54:220,G.value&&(l=0),z.value=e.clientX-l,D.value=e.clientY+10,H.value=a.split("-")[1]}})(e)),["prevent"])),onTabChange:W,onTabRemove:Z},{default:g((()=>[(y(!0),d(b,null,h(T.value,(e=>(y(),S(l,{key:_(e),label:e.meta.title,name:_(e),tab:e,class:"gva-tab"},{label:g((()=>[O("span",{tab:e,style:q({color:R.value===_(e)?I(U).activeColor:"#333"})},[O("i",{class:"dot",style:q({backgroundColor:R.value===_(e)?I(U).activeColor:"#ddd"})},null,4),N(" "+k(I(w)(e.meta.title,e)),1)],12,P)])),_:2},1032,["label","name","tab"])))),128))])),_:1},8,["modelValue","closable"]),x(O("ul",{style:q({left:z.value+"px",top:D.value+"px"}),class:"contextmenu"},[O("li",{onClick:Q},"关闭所有"),O("li",{onClick:X},"关闭左侧"),O("li",{onClick:Y},"关闭右侧"),O("li",{onClick:$},"关闭其他")],4),[[J,A.value]])])}}});export{E as default};

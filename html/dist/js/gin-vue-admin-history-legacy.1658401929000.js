/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
!function(){function e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function n(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var t=document.createElement("style");t.innerHTML='.contextmenu{width:100px;margin:0;border:1px solid #ccc;background:#fff;z-index:3000;position:absolute;list-style-type:none;padding:5px 0;border-radius:4px;font-size:14px;color:#333;box-shadow:2px 2px 3px rgba(0,0,0,.2)}.el-tabs__item .el-icon-close{color:initial!important}.el-tabs__item .dot{content:"";width:9px;height:9px;margin-right:8px;display:inline-block;border-radius:50%;transition:background-color .2s}.contextmenu li{margin:0;padding:7px 16px}.contextmenu li:hover{background:#f2f2f2;cursor:pointer}\n',document.head.appendChild(t),System.register(["../gva/gin-vue-admin-index-legacy.1658401929000.js"],(function(t){"use strict";var a,r,u,o,i,l,s,c,v,f,m,p,d,y,g,b,h,O,x,S,j,w,q,k,I;return{setters:[function(e){a=e.D,r=e.u,u=e.r,o=e.j,i=e.N,l=e.S,s=e.L,c=e.M,v=e.b,f=e.o,m=e.c,p=e.e,d=e.w,y=e.F,g=e.z,b=e.q,h=e.d,O=e.G,x=e.y,S=e.h,j=e.t,w=e.P,q=e.U,k=e.Q,I=e.V}],execute:function(){var N={class:"router-history"},P=["tab"],C={name:"HistoryComponent"};t("default",Object.assign(C,{setup:function(t){var C=a(),J=r(),E=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},V=u([]),_=u(""),D=u(!1),L=o(),T=function(e){return e.name+JSON.stringify(e.query)+JSON.stringify(e.params)},z=u(0),R=u(0),A=u(!1),H=u(!1),M=u(""),U=i((function(){return L.userInfo.authority.defaultRouter})),F=function(){V.value=[{name:U.value,meta:{title:"首页"},query:{},params:{}}],J.push({name:U.value}),D.value=!1,sessionStorage.setItem("historys",JSON.stringify(V.value))},G=function(){var e,n=V.value.findIndex((function(n){return E(n)===M.value&&(e=n),E(n)===M.value})),t=V.value.findIndex((function(e){return E(e)===_.value}));V.value.splice(0,n),n>t&&J.push(e),sessionStorage.setItem("historys",JSON.stringify(V.value))},Q=function(){var e,n=V.value.findIndex((function(n){return E(n)===M.value&&(e=n),E(n)===M.value})),t=V.value.findIndex((function(e){return E(e)===_.value}));V.value.splice(n+1,V.value.length),n<t&&J.push(e),sessionStorage.setItem("historys",JSON.stringify(V.value))},X=function(){var e;V.value=V.value.filter((function(n){return E(n)===M.value&&(e=n),E(n)===M.value})),J.push(e),sessionStorage.setItem("historys",JSON.stringify(V.value))},Y=function(t){if(!V.value.some((function(e){return function(e,n){if(e.name!==n.name)return!1;if(Object.keys(e.query).length!==Object.keys(n.query).length||Object.keys(e.params).length!==Object.keys(n.params).length)return!1;for(var t in e.query)if(e.query[t]!==n.query[t])return!1;for(var a in e.params)if(e.params[a]!==n.params[a])return!1;return!0}(e,t)}))){var a={};a.name=t.name,a.meta=function(t){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?e(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t.meta),delete a.meta.matched,a.query=t.query,a.params=t.params,V.value.push(a)}window.sessionStorage.setItem("activeValue",E(t))},$=u({});l((function(){return V.value}),(function(){$.value={},V.value.forEach((function(e){$.value[E(e)]=e}))}));var B=function(e){var n=$.value[e];J.push({name:n.name,query:n.query,params:n.params})},K=function(e){var n=V.value.findIndex((function(n){return E(n)===e}));E(C)===e&&(1===V.value.length?J.push({name:U.value}):n<V.value.length-1?J.push({name:V.value[n+1].name,query:V.value[n+1].query,params:V.value[n+1].params}):J.push({name:V.value[n-1].name,query:V.value[n-1].query,params:V.value[n-1].params})),V.value.splice(n,1)};l((function(){return D.value}),(function(){D.value?document.body.addEventListener("click",(function(){D.value=!1})):document.body.removeEventListener("click",(function(){D.value=!1}))})),l((function(){return C}),(function(e,n){"Login"!==e.name&&"Reload"!==e.name&&(V.value=V.value.filter((function(e){return!e.meta.closeTab})),Y(e),sessionStorage.setItem("historys",JSON.stringify(V.value)),_.value=window.sessionStorage.getItem("activeValue"))}),{deep:!0}),l((function(){return V.value}),(function(){sessionStorage.setItem("historys",JSON.stringify(V.value))}),{deep:!0});return function(){c.on("closeThisPage",(function(){K(T(C))})),c.on("closeAllPage",(function(){F()})),c.on("mobile",(function(e){H.value=e})),c.on("collapse",(function(e){A.value=e}));var e=[{name:U.value,meta:{title:"首页"},query:{},params:{}}];V.value=JSON.parse(sessionStorage.getItem("historys"))||e,window.sessionStorage.getItem("activeValue")?_.value=window.sessionStorage.getItem("activeValue"):_.value=E(C),Y(C)}(),s((function(){c.off("collapse"),c.off("mobile")})),function(e,n){var t=v("el-tab-pane"),a=v("el-tabs");return f(),m("div",N,[p(a,{modelValue:_.value,"onUpdate:modelValue":n[0]||(n[0]=function(e){return _.value=e}),closable:!(1===V.value.length&&e.$route.name===x(U)),type:"card",onContextmenu:n[1]||(n[1]=q((function(e){return function(e){if(1===V.value.length&&C.name===U.value)return!1;var n,t="";(t="SPAN"===e.srcElement.nodeName?e.srcElement.offsetParent.id:e.srcElement.id)&&(D.value=!0,n=A.value?54:220,H.value&&(n=0),z.value=e.clientX-n,R.value=e.clientY+10,M.value=t.split("-")[1])}(e)}),["prevent"])),onTabChange:B,onTabRemove:K},{default:d((function(){return[(f(!0),m(y,null,g(V.value,(function(e){return f(),b(t,{key:T(e),label:e.meta.title,name:T(e),tab:e,class:"gva-tab"},{label:d((function(){return[h("span",{tab:e,style:O({color:_.value===T(e)?x(L).activeColor:"#333"})},[h("i",{class:"dot",style:O({backgroundColor:_.value===T(e)?x(L).activeColor:"#ddd"})},null,4),S(" "+j(x(w)(e.meta.title,e)),1)],12,P)]})),_:2},1032,["label","name","tab"])})),128))]})),_:1},8,["modelValue","closable"]),k(h("ul",{style:O({left:z.value+"px",top:R.value+"px"}),class:"contextmenu"},[h("li",{onClick:F},"关闭所有"),h("li",{onClick:G},"关闭左侧"),h("li",{onClick:Q},"关闭右侧"),h("li",{onClick:X},"关闭其他")],4),[[I,D.value]])])}}}))}}}))}();

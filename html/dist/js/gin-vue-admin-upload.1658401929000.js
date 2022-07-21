/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a,t)=>new Promise(((l,n)=>{var i=e=>{try{r(t.next(e))}catch(a){n(a)}},o=e=>{try{r(t.throw(e))}catch(a){n(a)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(i,o);r((t=t.apply(e,a)).next())}));import{_ as o,U as r,g as s,d as u,e as c}from"./gin-vue-admin-common.1658401929000.js";import{_ as d,r as p,j as m,b as g,O as v,Q as f,o as h,c as y,d as w,e as b,w as _,t as j,y as x,h as C,B as k,i as O}from"../gva/gin-vue-admin-index.1658401929000.js";import{C as z}from"./gin-vue-admin-index.16584019290009.js";import{f as U}from"./gin-vue-admin-format.1658401929000.js";import{W as S}from"./gin-vue-admin-warningBar.1658401929000.js";import"./gin-vue-admin-date.1658401929000.js";import"./gin-vue-admin-dictionary.1658401929000.js";import"./gin-vue-admin-sysDictionary.1658401929000.js";const B=(e,a)=>{var t=new Image;t.setAttribute("crossOrigin","anonymous"),t.onload=function(){var e=document.createElement("canvas");e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0,t.width,t.height);var l=e.toDataURL("image/png"),n=document.createElement("a"),i=new MouseEvent("click");n.download=a||"photo",n.href=l,n.dispatchEvent(i)},t.src=e};const E={class:"gva-table-box"},P={class:"gva-btn-list"},I=C("查询"),T=["onClick"],V=C("下载"),A=C("删除"),D={class:"gva-pagination"},L={name:"Upload"};var M=d(Object.assign(L,{setup(e){const d=p("/api");m();const L=p(""),M=p(""),F=p(1),Q=p(0),R=p(10),W=p({}),q=p([]),G=e=>{R.value=e,J()},H=e=>{F.value=e,J()},J=()=>i(this,null,(function*(){const e=yield s(((e,i)=>{for(var o in i||(i={}))t.call(i,o)&&n(e,o,i[o]);if(a)for(var o of a(i))l.call(i,o)&&n(e,o,i[o]);return e})({page:F.value,pageSize:R.value},W.value));0===e.code&&(q.value=e.data.list,Q.value=e.data.total,F.value=e.data.page,R.value=e.data.pageSize)}));J();const K=e=>i(this,null,(function*(){k.confirm("此操作将永久文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>i(this,null,(function*(){0===(yield u(e)).code&&(O({type:"success",message:"删除成功!"}),1===q.value.length&&F.value>1&&F.value--,J())})))).catch((()=>{O({type:"info",message:"已取消删除"})}))})),N=e=>i(this,null,(function*(){k.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:e.name}).then((a=>i(this,[a],(function*({value:a}){e.name=a;0===(yield c(e)).code&&(O({type:"success",message:"编辑成功!"}),J())})))).catch((()=>{O({type:"info",message:"取消修改"})}))}));return(e,a)=>{const t=g("el-input"),l=g("el-form-item"),n=g("el-button"),i=g("el-form"),s=g("el-table-column"),u=g("el-tag"),c=g("el-table"),p=g("el-pagination"),m=v("loading");return f((h(),y("div",null,[w("div",E,[b(S,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),w("div",P,[b(o,{imageCommon:M.value,"onUpdate:imageCommon":a[0]||(a[0]=e=>M.value=e),class:"upload-btn",onOnSuccess:J},null,8,["imageCommon"]),b(r,{imageUrl:L.value,"onUpdate:imageUrl":a[1]||(a[1]=e=>L.value=e),"file-size":512,"max-w-h":1080,class:"upload-btn",onOnSuccess:J},null,8,["imageUrl"]),b(i,{ref:"searchForm",inline:!0,model:W.value},{default:_((()=>[b(l,{label:""},{default:_((()=>[b(t,{modelValue:W.value.keyword,"onUpdate:modelValue":a[2]||(a[2]=e=>W.value.keyword=e),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),b(l,null,{default:_((()=>[b(n,{size:"small",type:"primary",icon:"search",onClick:J},{default:_((()=>[I])),_:1})])),_:1})])),_:1},8,["model"])]),b(c,{data:q.value},{default:_((()=>[b(s,{align:"left",label:"预览",width:"100"},{default:_((e=>[b(z,{"pic-type":"file","pic-src":e.row.url},null,8,["pic-src"])])),_:1}),b(s,{align:"left",label:"日期",prop:"UpdatedAt",width:"180"},{default:_((e=>[w("div",null,j(x(U)(e.row.UpdatedAt)),1)])),_:1}),b(s,{align:"left",label:"文件名/备注",prop:"name",width:"180"},{default:_((e=>[w("div",{class:"name",onClick:a=>N(e.row)},j(e.row.name),9,T)])),_:1}),b(s,{align:"left",label:"链接",prop:"url","min-width":"300"}),b(s,{align:"left",label:"标签",prop:"tag",width:"100"},{default:_((e=>[b(u,{type:"jpg"===e.row.tag?"primary":"success","disable-transitions":""},{default:_((()=>[C(j(e.row.tag),1)])),_:2},1032,["type"])])),_:1}),b(s,{align:"left",label:"操作",width:"160"},{default:_((e=>[b(n,{size:"small",icon:"download",type:"primary",link:"",onClick:a=>{var t;(t=e.row).url.indexOf("http://")>-1||t.url.indexOf("https://")>-1?B(t.url,t.name):B(d.value+"/"+t.url,t.name)}},{default:_((()=>[V])),_:2},1032,["onClick"]),b(n,{size:"small",icon:"delete",type:"primary",link:"",onClick:a=>K(e.row)},{default:_((()=>[A])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),w("div",D,[b(p,{"current-page":F.value,"page-size":R.value,"page-sizes":[10,30,50,100],style:{float:"right",padding:"20px"},total:Q.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:H,onSizeChange:G},null,8,["current-page","page-size","total"])])])])),[[m,e.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}}}),[["__scopeId","data-v-c2c5de4c"]]);export{M as default};

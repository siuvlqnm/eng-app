/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
var e=(e,a,t)=>new Promise(((l,r)=>{var u=e=>{try{n(t.next(e))}catch(a){r(a)}},i=e=>{try{n(t.throw(e))}catch(a){r(a)}},n=e=>e.done?l(e.value):Promise.resolve(e.value).then(u,i);n((t=t.apply(e,a)).next())}));import{f as a,c as t,u as l}from"./gin-vue-admin-userEntryCard.16584019290002.js";import"./gin-vue-admin-date.1658401929000.js";import"./gin-vue-admin-dictionary.1658401929000.js";import{D as r,u,r as i,a as n,b as s,o,c as d,d as c,e as m,w as v,h as p,i as f}from"../gva/gin-vue-admin-index.1658401929000.js";import"./gin-vue-admin-sysDictionary.1658401929000.js";const y={class:"gva-form-box"},b=p("保存"),h=p("返回"),g={name:"UserEntryCard"},j=Object.assign(g,{setup(p){const g=r(),j=u(),x=i(""),_=i({contractNumber:""}),w=n({}),C=i();(()=>{e(this,null,(function*(){if(g.query.id){const e=yield a({ID:g.query.id});0===e.code&&(_.value=e.data.reuserEntryCard,x.value="update")}else x.value="create"}))})();const k=()=>e(this,null,(function*(){var a;null==(a=C.value)||a.validate((a=>e(this,null,(function*(){if(!a)return;let e;switch(x.value){case"create":default:e=yield t(_.value);break;case"update":e=yield l(_.value)}0===e.code&&f({type:"success",message:"创建/更改成功"})}))))})),N=()=>{j.go(-1)};return(e,a)=>{const t=s("el-input"),l=s("el-form-item"),r=s("el-button"),u=s("el-form");return o(),d("div",null,[c("div",y,[m(u,{model:_.value,ref_key:"elFormRef",ref:C,"label-position":"right",rules:w,"label-width":"80px"},{default:v((()=>[m(l,{label:"合同编号:",prop:"contractNumber"},{default:v((()=>[m(t,{modelValue:_.value.contractNumber,"onUpdate:modelValue":a[0]||(a[0]=e=>_.value.contractNumber=e),clearable:!1,placeholder:"请输入"},null,8,["modelValue"])])),_:1}),m(l,null,{default:v((()=>[m(r,{size:"mini",type:"primary",onClick:k},{default:v((()=>[b])),_:1}),m(r,{size:"mini",type:"primary",onClick:N},{default:v((()=>[h])),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{j as default};
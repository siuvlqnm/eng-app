/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
import{C as a}from"./gin-vue-admin-github.1658401929000.js";import{f as s}from"./gin-vue-admin-date.1658401929000.js";import{_ as e,r as t,o as m,c as o,d as i,F as l,z as d,n as c,t as n,p as r,l as v}from"../gva/gin-vue-admin-index.1658401929000.js";const f={class:"commit-table"},u=(a=>(r("data-v-02421634"),a=a(),v(),a))((()=>i("div",{class:"commit-table-title"}," 更新日志 ",-1))),g={class:"log"},p={class:"flex-1 flex key-box"},h={class:"flex-5 flex message"},x={class:"flex-3 flex form"},y={name:"DashboardTable"};var b=e(Object.assign(y,{setup(e){const r=t(!0),v=t([]);return a(0).then((({data:a})=>{r.value=!1,a.forEach(((a,e)=>{a.commit.message&&e<10&&v.value.push({from:s(a.commit.author.date,"yyyy-MM-dd"),title:a.commit.author.name,showDayAndMonth:!0,message:a.commit.message})}))})),(a,s)=>(m(),o("div",f,[u,i("div",g,[(m(!0),o(l,null,d(v.value,((a,s)=>(m(),o("div",{key:s,class:"log-item"},[i("div",p,[i("span",{class:c(["key",s<3&&"top"])},n(s+1),3)]),i("div",h,n(a.message),1),i("div",x,n(a.from),1)])))),128))])]))}}),[["__scopeId","data-v-02421634"]]);export{b as default};

/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
import e from"./gin-vue-admin-menuItem.1658401929000.js";import n from"./gin-vue-admin-asyncSubmenu.1658401929000.js";import{N as t,b as o,o as r,q as s,w as i,c as u,z as a,F as l,f,v as m,y as d}from"../gva/gin-vue-admin-index.1658401929000.js";const c={name:"AsideComponent"},p=Object.assign(c,{props:{routerInfo:{type:Object,default:()=>null},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup(c){const p=c,h=t((()=>p.routerInfo.children&&p.routerInfo.children.filter((e=>!e.hidden)).length?n:e));return(e,n)=>{const t=o("AsideComponent");return c.routerInfo.hidden?f("",!0):(r(),s(m(d(h)),{key:0,"is-collapse":c.isCollapse,theme:c.theme,"router-info":c.routerInfo},{default:i((()=>[c.routerInfo.children&&c.routerInfo.children.length?(r(!0),u(l,{key:0},a(c.routerInfo.children,(e=>(r(),s(t,{key:e.name,"is-collapse":!1,"router-info":e,theme:c.theme},null,8,["router-info","theme"])))),128)):f("",!0)])),_:1},8,["is-collapse","theme","router-info"]))}}});export{p as default};

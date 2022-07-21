/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
import{i as e}from"./gin-vue-admin-initdb.1658401929000.js";import{_ as l,u as a,r as s,a as t,b as d,o,c as u,d as i,n as p,e as n,w as r,f as m,g as c,h as v,E as g,i as h}from"../gva/gin-vue-admin-index.1658401929000.js";const b={class:"init_page"},y={class:"init_page_panel"},f=c('<div class="hello_title" data-v-20d54e04>GIN-VUE-ADMIN</div><p class="in-two a-fadeinT" data-v-20d54e04>初始化须知</p><p class="init_p" data-v-20d54e04>1.您需有用一定的VUE和GOLANG基础</p><p class="init_p" data-v-20d54e04>2.请您确认是否已经阅读过官方文档</p><p class="init_p" data-v-20d54e04>3.请您确认是否了解后续的配置流程</p><p class="init_p" data-v-20d54e04>注：开发组不为文档中书写过的内容提供无偿服务</p>',6),_={class:"init_btn"},V=v(" 阅读文档 "),w=v(" 我已确认 "),N={style:{"text-align":"right"}},q=v("立即初始化"),k={name:"Init"};var U=l(Object.assign(k,{setup(l){const c=a(),v=s(0),k=()=>{v.value=v.value+1},U=()=>{window.open("https://www.gin-vue-admin.com/guide/start-quickly/env.html")},x=s(!1),T=t({dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva"}),j=e=>{switch(e){case"mysql":default:Object.assign(T,{dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva"});break;case"pgsql":Object.assign(T,{dbType:"pgsql",host:"127.0.0.1",port:"5432",userName:"postgres",password:"",dbName:"gva"})}},C=()=>{return l=this,a=null,s=function*(){const l=g.service({lock:!0,text:"正在初始化数据库，请稍候",spinner:"loading",background:"rgba(0, 0, 0, 0.7)"});try{const a=yield e(T);0===a.code&&(x.value=!0,h({type:"success",message:a.msg}),c.push({name:"Login"})),l.close()}catch(a){l.close()}},new Promise(((e,t)=>{var d=e=>{try{u(s.next(e))}catch(l){t(l)}},o=e=>{try{u(s.throw(e))}catch(l){t(l)}},u=l=>l.done?e(l.value):Promise.resolve(l.value).then(d,o);u((s=s.apply(l,a)).next())}));var l,a,s};return(e,l)=>{const a=d("el-button"),s=d("el-option"),t=d("el-select"),c=d("el-form-item"),g=d("el-input"),h=d("el-form");return o(),u("div",b,[i("div",y,[v.value<2?(o(),u("div",{key:0,id:"hello",class:p([[v.value<1?"slide-in-fwd-top":"slide-out-right"],"hello"])},[i("div",null,[f,i("p",_,[n(a,{type:"primary",onClick:U},{default:r((()=>[V])),_:1}),n(a,{type:"primary",onClick:k},{default:r((()=>[w])),_:1})])])],2)):m("",!0),v.value>0?(o(),u("div",{key:1,class:p([[v.value>0&&!x.value?"slide-in-left":"",x.value?"slide-out-right":""],"form"])},[n(h,{ref:"formRef",model:T,"label-width":"100px"},{default:r((()=>[n(c,{label:"数据库类型"},{default:r((()=>[n(t,{modelValue:T.dbType,"onUpdate:modelValue":l[0]||(l[0]=e=>T.dbType=e),placeholder:"请选择",onChange:j},{default:r((()=>[n(s,{key:"mysql",label:"mysql",value:"mysql"}),n(s,{key:"pgsql",label:"pgsql(测试版)",value:"pgsql"})])),_:1},8,["modelValue"])])),_:1}),n(c,{label:"host"},{default:r((()=>[n(g,{modelValue:T.host,"onUpdate:modelValue":l[1]||(l[1]=e=>T.host=e),placeholder:"请输入数据库链接"},null,8,["modelValue"])])),_:1}),n(c,{label:"port"},{default:r((()=>[n(g,{modelValue:T.port,"onUpdate:modelValue":l[2]||(l[2]=e=>T.port=e),placeholder:"请输入数据库端口"},null,8,["modelValue"])])),_:1}),n(c,{label:"userName"},{default:r((()=>[n(g,{modelValue:T.userName,"onUpdate:modelValue":l[3]||(l[3]=e=>T.userName=e),placeholder:"请输入数据库用户名"},null,8,["modelValue"])])),_:1}),n(c,{label:"password"},{default:r((()=>[n(g,{modelValue:T.password,"onUpdate:modelValue":l[4]||(l[4]=e=>T.password=e),placeholder:"请输入数据库密码（没有则为空）"},null,8,["modelValue"])])),_:1}),n(c,{label:"dbName"},{default:r((()=>[n(g,{modelValue:T.dbName,"onUpdate:modelValue":l[5]||(l[5]=e=>T.dbName=e),placeholder:"请输入数据库名称"},null,8,["modelValue"])])),_:1}),n(c,null,{default:r((()=>[i("div",N,[n(a,{type:"primary",onClick:C},{default:r((()=>[q])),_:1})])])),_:1})])),_:1},8,["model"])],2)):m("",!0)])])}}}),[["__scopeId","data-v-20d54e04"]]);export{U as default};

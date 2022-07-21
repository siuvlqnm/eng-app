/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,o=(e,o)=>{for(var u in o||(o={}))a.call(o,u)&&i(e,u,o[u]);if(l)for(var u of l(o))t.call(o,u)&&i(e,u,o[u]);return e},u=(e,l,a)=>new Promise(((t,i)=>{var o=e=>{try{r(a.next(e))}catch(l){i(l)}},u=e=>{try{r(a.throw(e))}catch(l){i(l)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,u);r((a=a.apply(e,l)).next())}));import{r,S as s,b as d,o as n,c as m,e as p,d as c,w as v,q as h,f as g,h as y,a8 as f,B as b,a9 as w,i as I,aa as V,ab as k,ac as _,J as N,ad as C}from"../gva/gin-vue-admin-index.1658401929000.js";import{g as x}from"./gin-vue-admin-authority.16584019290002.js";import{C as z}from"./gin-vue-admin-index.16584019290009.js";import{_ as U}from"./gin-vue-admin-index.165840192900013.js";import{W as j}from"./gin-vue-admin-warningBar.1658401929000.js";import"./gin-vue-admin-common.1658401929000.js";const S={class:"gva-table-box"},O={class:"gva-btn-list"},D=y("新增用户"),P=c("p",null,"确定要删除此用户吗",-1),q={style:{"text-align":"right","margin-top":"8px"}},J=y("取消"),B=y("确定"),T=y("删除"),E=y("编辑"),F=y("重置密码"),R={class:"gva-pagination"},W={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},A=["src"],G={key:1,class:"header-img-box"},H={class:"dialog-footer"},K=y("取 消"),L=y("确 定"),M={name:"User"},Q=Object.assign(M,{setup(e){const l=r("/api/"),a=(e,l)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const t={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};a(e.children,t.children),l.push(t)}else{const a={authorityId:e.authorityId,authorityName:e.authorityName};l.push(a)}}))},t=r(1),i=r(0),y=r(10),M=r([]),Q=e=>{y.value=e,Y()},X=e=>{t.value=e,Y()},Y=()=>u(this,null,(function*(){const e=yield f({page:t.value,pageSize:y.value});0===e.code&&(M.value=e.data.list,i.value=e.data.total,t.value=e.data.page,y.value=e.data.pageSize)}));s((()=>M.value),(()=>{$()}));(()=>{u(this,null,(function*(){Y();const e=yield x({page:1,pageSize:999});te(e.data.list)}))})();const Z=e=>{b.confirm("是否将此用户密码重置为123456?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>u(this,null,(function*(){const l=yield w({ID:e.ID});0===l.code?I({type:"success",message:l.msg}):I({type:"error",message:l.msg})}))))},$=()=>{M.value&&M.value.forEach((e=>{const l=e.authorities&&e.authorities.map((e=>e.authorityId));e.authorityIds=l}))},ee=r(null),le=()=>{ee.value.open()},ae=r([]),te=e=>{ae.value=[],a(e,ae.value)},ie=e=>u(this,null,(function*(){0===(yield V({id:e.ID})).code&&(I.success("删除成功"),e.visible=!1,yield Y())})),oe=r({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),ue=r({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),re=r(null),se=()=>u(this,null,(function*(){oe.value.authorityId=oe.value.authorityIds[0],re.value.validate((e=>u(this,null,(function*(){if(e){const e=o({},oe.value);if("add"===me.value){0===(yield k(e)).code&&(I({type:"success",message:"创建成功"}),yield Y(),ne())}if("edit"===me.value){0===(yield _(e)).code&&(I({type:"success",message:"编辑成功"}),yield Y(),ne())}}}))))})),de=r(!1),ne=()=>{re.value.resetFields(),oe.value.headerImg="",oe.value.authorityIds=[],de.value=!1},me=r("add"),pe=()=>{me.value="add",de.value=!0},ce=(e,l)=>u(this,null,(function*(){if(l)return;yield N();0===(yield C({ID:e.ID,authorityIds:e.authorityIds})).code&&I({type:"success",message:"角色设置成功"})})),ve=e=>u(this,null,(function*(){oe.value=JSON.parse(JSON.stringify(e)),yield N();const l=o({},oe.value);0===(yield _(l)).code&&(I({type:"success",message:(2===l.enable?"禁用":"启用")+"成功"}),yield Y(),oe.value.headerImg="",oe.value.authorityIds=[])}));return(e,a)=>{const o=d("el-button"),u=d("el-table-column"),r=d("el-cascader"),s=d("el-switch"),f=d("el-popover"),b=d("el-table"),w=d("el-pagination"),I=d("el-input"),V=d("el-form-item"),k=d("el-form"),_=d("el-dialog");return n(),m("div",null,[p(j,{title:"注：右上角头像下拉可切换角色"}),c("div",S,[c("div",O,[p(o,{size:"small",type:"primary",icon:"plus",onClick:pe},{default:v((()=>[D])),_:1})]),p(b,{data:M.value,"row-key":"ID"},{default:v((()=>[p(u,{align:"left",label:"头像","min-width":"75"},{default:v((e=>[p(z,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1}),p(u,{align:"left",label:"ID","min-width":"50",prop:"ID"}),p(u,{align:"left",label:"用户名","min-width":"150",prop:"userName"}),p(u,{align:"left",label:"昵称","min-width":"150",prop:"nickName"}),p(u,{align:"left",label:"手机号","min-width":"180",prop:"phone"}),p(u,{align:"left",label:"邮箱","min-width":"180",prop:"email"}),p(u,{align:"left",label:"用户角色","min-width":"200"},{default:v((e=>[p(r,{modelValue:e.row.authorityIds,"onUpdate:modelValue":l=>e.row.authorityIds=l,options:ae.value,"show-all-levels":!1,"collapse-tags":"",props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1,onVisibleChange:l=>{ce(e.row,l)},onRemoveTag:()=>{ce(e.row,!1)}},null,8,["modelValue","onUpdate:modelValue","options","onVisibleChange","onRemoveTag"])])),_:1}),p(u,{align:"left",label:"启用","min-width":"150"},{default:v((e=>[p(s,{modelValue:e.row.enable,"onUpdate:modelValue":l=>e.row.enable=l,"inline-prompt":"","active-value":1,"inactive-value":2,onChange:()=>{ve(e.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),p(u,{label:"操作","min-width":"250",fixed:"right"},{default:v((e=>[p(f,{modelValue:e.row.visible,"onUpdate:modelValue":l=>e.row.visible=l,placement:"top",width:"160"},{reference:v((()=>[p(o,{type:"primary",link:"",icon:"delete",size:"small"},{default:v((()=>[T])),_:1})])),default:v((()=>[P,c("div",q,[p(o,{size:"small",type:"primary",link:"",onClick:l=>e.row.visible=!1},{default:v((()=>[J])),_:2},1032,["onClick"]),p(o,{type:"primary",size:"small",onClick:l=>ie(e.row)},{default:v((()=>[B])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"]),p(o,{type:"primary",link:"",icon:"edit",size:"small",onClick:l=>{return a=e.row,me.value="edit",oe.value=JSON.parse(JSON.stringify(a)),void(de.value=!0);var a}},{default:v((()=>[E])),_:2},1032,["onClick"]),p(o,{type:"primary",link:"",icon:"magic-stick",size:"small",onClick:l=>Z(e.row)},{default:v((()=>[F])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),c("div",R,[p(w,{"current-page":t.value,"page-size":y.value,"page-sizes":[10,30,50,100],total:i.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:X,onSizeChange:Q},null,8,["current-page","page-size","total"])])]),p(_,{modelValue:de.value,"onUpdate:modelValue":a[7]||(a[7]=e=>de.value=e),"custom-class":"user-dialog",title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:v((()=>[c("div",H,[p(o,{size:"small",onClick:ne},{default:v((()=>[K])),_:1}),p(o,{size:"small",type:"primary",onClick:se},{default:v((()=>[L])),_:1})])])),default:v((()=>[c("div",W,[p(k,{ref_key:"userForm",ref:re,rules:ue.value,model:oe.value,"label-width":"80px"},{default:v((()=>["add"===me.value?(n(),h(V,{key:0,label:"用户名",prop:"userName"},{default:v((()=>[p(I,{modelValue:oe.value.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>oe.value.userName=e)},null,8,["modelValue"])])),_:1})):g("",!0),"add"===me.value?(n(),h(V,{key:1,label:"密码",prop:"password"},{default:v((()=>[p(I,{modelValue:oe.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>oe.value.password=e)},null,8,["modelValue"])])),_:1})):g("",!0),p(V,{label:"昵称",prop:"nickName"},{default:v((()=>[p(I,{modelValue:oe.value.nickName,"onUpdate:modelValue":a[2]||(a[2]=e=>oe.value.nickName=e)},null,8,["modelValue"])])),_:1}),p(V,{label:"手机号",prop:"phone"},{default:v((()=>[p(I,{modelValue:oe.value.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>oe.value.phone=e)},null,8,["modelValue"])])),_:1}),p(V,{label:"邮箱",prop:"email"},{default:v((()=>[p(I,{modelValue:oe.value.email,"onUpdate:modelValue":a[4]||(a[4]=e=>oe.value.email=e)},null,8,["modelValue"])])),_:1}),p(V,{label:"用户角色",prop:"authorityId"},{default:v((()=>[p(r,{modelValue:oe.value.authorityIds,"onUpdate:modelValue":a[5]||(a[5]=e=>oe.value.authorityIds=e),style:{width:"100%"},options:ae.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),p(V,{label:"启用",prop:"disabled"},{default:v((()=>[p(s,{modelValue:oe.value.enable,"onUpdate:modelValue":a[6]||(a[6]=e=>oe.value.enable=e),"inline-prompt":"","active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),p(V,{label:"头像","label-width":"80px"},{default:v((()=>[c("div",{style:{display:"inline-block"},onClick:le},[oe.value.headerImg?(n(),m("img",{key:0,class:"header-img-box",src:oe.value.headerImg&&"http"!==oe.value.headerImg.slice(0,4)?l.value+oe.value.headerImg:oe.value.headerImg},null,8,A)):(n(),m("div",G,"从媒体库选择"))])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"]),p(U,{ref_key:"chooseImg",ref:ee,target:oe.value,"target-key":"headerImg"},null,8,["target"])])}}});export{Q as default};

/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
var e=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,u=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,o=(e,l,a)=>new Promise(((t,u)=>{var o=e=>{try{d(a.next(e))}catch(l){u(l)}},i=e=>{try{d(a.throw(e))}catch(l){u(l)}},d=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,i);d((a=a.apply(e,l)).next())}));import{g as i,d,a as s,u as r,c as n,b as p}from"./gin-vue-admin-api.16584019290002.js";import{t as m}from"./gin-vue-admin-stringFun.1658401929000.js";import{W as c}from"./gin-vue-admin-warningBar.1658401929000.js";import{_ as v,r as f,b as g,o as h,c as b,d as y,e as _,w as V,F as w,z as k,q as C,t as z,h as x,p as A,l as P,i as I,B as U}from"../gva/gin-vue-admin-index.1658401929000.js";const j=e=>(A("data-v-0d320866"),e=e(),P(),e),G={class:"gva-search-box"},O=x("查询"),S=x("重置"),T={class:"gva-table-box"},q={class:"gva-btn-list"},D=x("新增"),E=j((()=>y("p",null,"确定要删除吗？",-1))),F={style:{"text-align":"right","margin-top":"8px"}},$=x("取消"),B=x("确定"),K=x("删除"),L=x("编辑"),W=x("删除"),H={class:"gva-pagination"},J={class:"dialog-footer"},M=x("取 消"),N=x("确 定"),Q={name:"Api"};var R=v(Object.assign(Q,{setup(e){const v=e=>{const l=P.value.filter((l=>l.value===e))[0];return l&&`${l.label}`},x=f([]),A=f({path:"",apiGroup:"",method:"",description:""}),P=f([{value:"POST",label:"创建",type:"success"},{value:"GET",label:"查看",type:""},{value:"PUT",label:"更新",type:"warning"},{value:"DELETE",label:"删除",type:"danger"}]),j=f(""),Q=f({path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),R=f(1),X=f(0),Y=f(10),Z=f([]),ee=f({}),le=()=>{ee.value={}},ae=()=>{R.value=1,Y.value=10,ie()},te=e=>{Y.value=e,ie()},ue=e=>{R.value=e,ie()},oe=({prop:e,order:l})=>{e&&("ID"===e&&(e="id"),ee.value.orderKey=m(e),ee.value.desc="descending"===l),ie()},ie=()=>o(this,null,(function*(){const e=yield i(((e,o)=>{for(var i in o||(o={}))a.call(o,i)&&u(e,i,o[i]);if(l)for(var i of l(o))t.call(o,i)&&u(e,i,o[i]);return e})({page:R.value,pageSize:Y.value},ee.value));0===e.code&&(Z.value=e.data.list,X.value=e.data.total,R.value=e.data.page,Y.value=e.data.pageSize)}));ie();const de=e=>{x.value=e},se=f(!1),re=()=>o(this,null,(function*(){const e=x.value.map((e=>e.ID)),l=yield d({ids:e});0===l.code&&(I({type:"success",message:l.msg}),Z.value.length===e.length&&R.value>1&&R.value--,se.value=!1,ie())})),ne=f(null),pe=f("新增Api"),me=f(!1),ce=e=>{switch(e){case"addApi":pe.value="新增Api";break;case"edit":pe.value="编辑Api"}j.value=e,me.value=!0},ve=()=>{ne.value.resetFields(),A.value={path:"",apiGroup:"",method:"",description:""},me.value=!1},fe=e=>o(this,null,(function*(){const l=yield s({id:e.ID});A.value=l.data.api,ce("edit")})),ge=()=>o(this,null,(function*(){ne.value.validate((e=>o(this,null,(function*(){if(e)switch(j.value){case"addApi":0===(yield n(A.value)).code&&I({type:"success",message:"添加成功",showClose:!0}),ie(),ve();break;case"edit":0===(yield r(A.value)).code&&I({type:"success",message:"编辑成功",showClose:!0}),ie(),ve();break;default:I({type:"error",message:"未知操作",showClose:!0})}}))))})),he=e=>o(this,null,(function*(){U.confirm("此操作将永久删除所有角色下该api, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>o(this,null,(function*(){0===(yield p(e)).code&&(I({type:"success",message:"删除成功!"}),1===Z.value.length&&R.value>1&&R.value--,ie())}))))}));return(e,l)=>{const a=g("el-input"),t=g("el-form-item"),u=g("el-option"),o=g("el-select"),i=g("el-button"),d=g("el-form"),s=g("el-popover"),r=g("el-table-column"),n=g("el-table"),p=g("el-pagination"),m=g("el-dialog");return h(),b("div",null,[y("div",G,[_(d,{ref:"searchForm",inline:!0,model:ee.value},{default:V((()=>[_(t,{label:"路径"},{default:V((()=>[_(a,{modelValue:ee.value.path,"onUpdate:modelValue":l[0]||(l[0]=e=>ee.value.path=e),placeholder:"路径"},null,8,["modelValue"])])),_:1}),_(t,{label:"描述"},{default:V((()=>[_(a,{modelValue:ee.value.description,"onUpdate:modelValue":l[1]||(l[1]=e=>ee.value.description=e),placeholder:"描述"},null,8,["modelValue"])])),_:1}),_(t,{label:"API组"},{default:V((()=>[_(a,{modelValue:ee.value.apiGroup,"onUpdate:modelValue":l[2]||(l[2]=e=>ee.value.apiGroup=e),placeholder:"api组"},null,8,["modelValue"])])),_:1}),_(t,{label:"请求"},{default:V((()=>[_(o,{modelValue:ee.value.method,"onUpdate:modelValue":l[3]||(l[3]=e=>ee.value.method=e),clearable:"",placeholder:"请选择"},{default:V((()=>[(h(!0),b(w,null,k(P.value,(e=>(h(),C(u,{key:e.value,label:`${e.label}(${e.value})`,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(t,null,{default:V((()=>[_(i,{size:"small",type:"primary",icon:"search",onClick:ae},{default:V((()=>[O])),_:1}),_(i,{size:"small",icon:"refresh",onClick:le},{default:V((()=>[S])),_:1})])),_:1})])),_:1},8,["model"])]),y("div",T,[y("div",q,[_(i,{size:"small",type:"primary",icon:"plus",onClick:l[4]||(l[4]=e=>ce("addApi"))},{default:V((()=>[D])),_:1}),_(s,{modelValue:se.value,"onUpdate:modelValue":l[7]||(l[7]=e=>se.value=e),placement:"top",width:"160"},{reference:V((()=>[_(i,{icon:"delete",size:"small",disabled:!x.value.length,style:{"margin-left":"10px"},onClick:l[6]||(l[6]=e=>se.value=!0)},{default:V((()=>[K])),_:1},8,["disabled"])])),default:V((()=>[E,y("div",F,[_(i,{size:"small",type:"primary",link:"",onClick:l[5]||(l[5]=e=>se.value=!1)},{default:V((()=>[$])),_:1}),_(i,{size:"small",type:"primary",onClick:re},{default:V((()=>[B])),_:1})])])),_:1},8,["modelValue"])]),_(n,{data:Z.value,onSortChange:oe,onSelectionChange:de},{default:V((()=>[_(r,{type:"selection",width:"55"}),_(r,{align:"left",label:"id","min-width":"60",prop:"ID",sortable:"custom"}),_(r,{align:"left",label:"API路径","min-width":"150",prop:"path",sortable:"custom"}),_(r,{align:"left",label:"API分组","min-width":"150",prop:"apiGroup",sortable:"custom"}),_(r,{align:"left",label:"API简介","min-width":"150",prop:"description",sortable:"custom"}),_(r,{align:"left",label:"请求","min-width":"150",prop:"method",sortable:"custom"},{default:V((e=>[y("div",null,z(e.row.method)+" / "+z(v(e.row.method)),1)])),_:1}),_(r,{align:"left",fixed:"right",label:"操作",width:"200"},{default:V((e=>[_(i,{icon:"edit",size:"small",type:"primary",link:"",onClick:l=>fe(e.row)},{default:V((()=>[L])),_:2},1032,["onClick"]),_(i,{icon:"delete",size:"small",type:"primary",link:"",onClick:l=>he(e.row)},{default:V((()=>[W])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),y("div",H,[_(p,{"current-page":R.value,"page-size":Y.value,"page-sizes":[10,30,50,100],total:X.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:ue,onSizeChange:te},null,8,["current-page","page-size","total"])])]),_(m,{modelValue:me.value,"onUpdate:modelValue":l[12]||(l[12]=e=>me.value=e),"before-close":ve,title:pe.value},{footer:V((()=>[y("div",J,[_(i,{size:"small",onClick:ve},{default:V((()=>[M])),_:1}),_(i,{size:"small",type:"primary",onClick:ge},{default:V((()=>[N])),_:1})])])),default:V((()=>[_(c,{title:"新增API，需要在角色管理内配置权限才可使用"}),_(d,{ref_key:"apiForm",ref:ne,model:A.value,rules:Q.value,"label-width":"80px"},{default:V((()=>[_(t,{label:"路径",prop:"path"},{default:V((()=>[_(a,{modelValue:A.value.path,"onUpdate:modelValue":l[8]||(l[8]=e=>A.value.path=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),_(t,{label:"请求",prop:"method"},{default:V((()=>[_(o,{modelValue:A.value.method,"onUpdate:modelValue":l[9]||(l[9]=e=>A.value.method=e),placeholder:"请选择",style:{width:"100%"}},{default:V((()=>[(h(!0),b(w,null,k(P.value,(e=>(h(),C(u,{key:e.value,label:`${e.label}(${e.value})`,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),_(t,{label:"api分组",prop:"apiGroup"},{default:V((()=>[_(a,{modelValue:A.value.apiGroup,"onUpdate:modelValue":l[10]||(l[10]=e=>A.value.apiGroup=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),_(t,{label:"api简介",prop:"description"},{default:V((()=>[_(a,{modelValue:A.value.description,"onUpdate:modelValue":l[11]||(l[11]=e=>A.value.description=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-0d320866"]]);export{R as default};
/*! 
 Build based on gin-vue-admin 
 Time : 1658401929000 */
System.register(["../gva/gin-vue-admin-index-legacy.1658401929000.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.s}],execute:function(){t("p",(function(t){return e({url:"/autoCode/preview",method:"post",data:t})})),t("c",(function(t){return e({url:"/autoCode/createTemp",method:"post",data:t,responseType:"blob"})})),t("d",(function(){return e({url:"/autoCode/getDB",method:"get"})})),t("g",(function(t){return e({url:"/autoCode/getTables",method:"get",params:t})})),t("a",(function(t){return e({url:"/autoCode/getColumn",method:"get",params:t})})),t("f",(function(t){return e({url:"/autoCode/getSysHistory",method:"post",data:t})})),t("r",(function(t){return e({url:"/autoCode/rollback",method:"post",data:t})})),t("e",(function(t){return e({url:"/autoCode/getMeta",method:"post",data:t})})),t("h",(function(t){return e({url:"/autoCode/delSysHistory",method:"post",data:t})})),t("i",(function(t){return e({url:"/autoCode/createPackage",method:"post",data:t})})),t("b",(function(){return e({url:"/autoCode/getPackage",method:"post"})})),t("j",(function(t){return e({url:"/autoCode/delPackage",method:"post",data:t})})),t("k",(function(t){return e({url:"/autoCode/createPlug",method:"post",data:t})}))}}}));

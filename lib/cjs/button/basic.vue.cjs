"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.createElementVNode("div",null,"按钮组件测试",-1),o=e.defineComponent({name:"basicButton"}),l=e.defineComponent({...o,props:{name:{type:String,default:"hzlzh"}},setup(r){return(t,u)=>(e.openBlock(),e.createElementBlock("div",null,[n,e.renderSlot(t.$slots,"default")]))}});exports.default=l;

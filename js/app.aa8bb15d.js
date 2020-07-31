(function(t){function e(e){for(var n,a,r=e[0],s=e[1],l=e[2],u=0,p=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(p.length)p.shift()();return d.push.apply(d,l||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,r=1;r<o.length;r++){var s=o[r];0!==i[s]&&(n=!1)}n&&(d.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},d=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/todo-list-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=s;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"4f40":function(t,e,o){t.exports=o.p+"img/hobbs_logo.db1193d1.jpg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"navbar"},[n("md-toolbar",{attrs:{"md-elevation":"1"}},[n("a",{staticClass:"md-title",staticStyle:{flex:"1"},attrs:{href:"https://jjh204.github.io/todo-list-app/"}},[n("img",{staticClass:"navbar-img",attrs:{src:o("4f40"),alt:"Logo stating Jennifer Hobbs"}})]),n("a",{staticClass:"navigation-list_item",attrs:{href:"https://jjh204.github.io/todo-list-app/",role:"menuitem"}},[t._v("Refresh")]),n("a",{staticClass:"navigation-list_item",attrs:{href:"https://jjh204.github.io/portfolio-website",target:"_blank",role:"menuitem"}},[t._v(" Developer Portfolio ")]),n("a",{staticClass:"navigation-list_item",attrs:{href:"https://github.com/jjh204",target:"_blank",role:"menuitem"}},[t._v("Github")])])],1),n("div",{staticClass:"todo-container"},[n("md-field",{staticClass:"todo-input"},[n("md-input",{staticClass:"todo-input-area",attrs:{placeholder:"add new list item"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()}},model:{value:t.currentTodo,callback:function(e){t.currentTodo=e},expression:"currentTodo"}}),n("md-button",{staticClass:"md-fab md-mini",on:{click:t.addTodo},model:{value:t.currentTodo,callback:function(e){t.currentTodo=e},expression:"currentTodo"}},[n("md-icon",[t._v("add")])],1)],1),t.displayList()?n("md-card",{staticClass:"card-list"},[n("md-card-content",[n("md-list",{staticClass:"todos"},[n("md-subheader",[t._v("THINGS THAT I MIGHT DO TODAY:")]),t._l(t.todos,(function(e){return n("md-list-item",{key:e.id},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(o){var n=e.completed,i=o.target,d=!!i.checked;if(Array.isArray(n)){var a=null,r=t._i(n,a);i.checked?r<0&&t.$set(e,"completed",n.concat([a])):r>-1&&t.$set(e,"completed",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(e,"completed",d)}}}),n("span",{directives:[{name:"show",rawName:"v-show",value:t.editTodoId!==e.id,expression:"editTodoId !== todo.id"}],staticClass:"input-list-item",class:{completed:e.completed},on:{dblclick:function(o){return t.editTodo(e)}}},[t._v(t._s(e.label))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"todo.label"},{name:"show",rawName:"v-show",value:t.editTodoId==e.id,expression:"editTodoId == todo.id"}],staticClass:"input-edit-item",domProps:{value:e.label},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveTodo(e)},input:function(o){o.target.composing||t.$set(e,"label",o.target.value)}}}),n("md-button",{directives:[{name:"show",rawName:"v-show",value:t.editTodoId!==e.id,expression:"editTodoId !== todo.id"}],staticClass:"md-fab md-mini",on:{click:function(o){return t.editTodo(e)}}},[n("md-icon",[t._v("edit")])],1),n("md-button",{directives:[{name:"show",rawName:"v-show",value:t.editTodoId==e.id,expression:"editTodoId == todo.id"}],staticClass:"md-fab md-mini",attrs:{size:"small"},on:{click:t.saveTodo}},[n("md-icon",[t._v("save")])],1),n("md-button",{staticClass:"md-fab md-mini",on:{click:function(o){return t.removeTodo(e)}}},[n("md-icon",[t._v("cancel")])],1)],1)}))],2)],1)],1):t._e()],1)])},d=[],a=(o("c975"),o("a434"),{data:function(){return{todos:[],currentTodo:"",editTodoId:null}},methods:{displayList:function(){return this.todos.length>0},addTodo:function(){this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1}),this.currentTodo=""},removeTodo:function(t){var e=this.todos.indexOf(t);this.todos.splice(e,1)},editTodo:function(t){this.editTodoId=t.id},saveTodo:function(){this.editTodoId=null}}}),r=a,s=(o("034f"),o("2877")),l=Object(s["a"])(r,i,d,!1,null,null,null),c=l.exports,u=o("43f9"),p=o.n(u),m=o("9c30");o("51de");n["default"].use(p.a),n["default"].use(m["MdField"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,o){}});
//# sourceMappingURL=app.aa8bb15d.js.map
(function(t){function e(e){for(var o,c,i=e[0],s=e[1],u=e[2],l=0,m=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&m.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(o=!1)}o&&(n.splice(e--,1),t=c(c.s=r[0]))}return t}var o={},a={app:0},n=[];function c(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=o,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(r,o,function(e){return t[e]}.bind(null,o));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/ejercicio/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("router-view")],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"nav"}},[o("div",{staticClass:"inner-width"},[o("img",{staticClass:"logo",attrs:{src:r("cf05")}})])])}],c=(r("5c0b"),r("2877")),i={},s=Object(c["a"])(i,a,n,!1,null,null,null),u=s.exports,d=r("8c4f"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v("TIENDA")]),r("NuevoProducto",{on:{new:t.addProduct}}),r("h2",[t._v("Lista de Productos")]),t._l(t.productos,(function(e,o){return r("listaproducto",{key:o,attrs:{producto:e},on:{update:function(e){return t.actualizarElemento(o,arguments)},delete:function(e){return t.borrarProducto(o)}}})}))],2)},m=[],p=(r("a434"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-4 mx-auto "},[r("div",{staticClass:"card rounded-4 bg-success"},[t._m(0),r("div",{staticClass:"card-body"},[r("form",{staticClass:"form",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.NuevoProducto()}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"nombre"}},[t._v("Nombre")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"form-control form-control-lg rounded-4",attrs:{type:"text",name:"nombre",id:"nombre"},domProps:{value:t.nombre},on:{input:function(e){e.target.composing||(t.nombre=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"marca"}},[t._v("Marca")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.marca,expression:"marca"}],staticClass:"form-control form-control-lg rounded-4",attrs:{type:"text",name:"marca",id:"marca"},domProps:{value:t.marca},on:{input:function(e){e.target.composing||(t.marca=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Cantidad")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cantidad,expression:"cantidad"}],staticClass:"form-control form-control-lg rounded-4",attrs:{type:"number",name:"cantidad",id:"cantidad"},domProps:{value:t.cantidad},on:{input:function(e){e.target.composing||(t.cantidad=e.target.value)}}})]),r("button",{staticClass:"btn btn-outline-primary btn-lg",attrs:{type:"submit"}},[t._v("Nuevo Producto")])])])])])}),f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header"},[r("h3",{staticClass:"mb-0 mt-3"},[t._v("Cargar Productos")])])}],v={name:"NuevoProducto",data:function(){return{nombre:null,marca:null,cantidad:null}},methods:{NuevoProducto:function(){var t={nombre:this.nombre,marca:this.marca,cantidad:this.cantidad};this.nombre||alert("Debes agregar el nombre!"),this.marca||alert("Debes agregar el marca!"),this.cantidad||alert("Debes agregar el cantidad!"),this.nombre&&this.marca&&this.cantidad&&(this.$emit("new",t),this.nombre=null,this.marca=null,this.cantidad=null)}}},b=v,g=Object(c["a"])(b,p,f,!1,null,null,null),h=g.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container "},[r("table",{staticClass:"table "},[r("ul",{staticClass:" row mb-6 container"},[t.editMode?r("input",{directives:[{name:"model",rawName:"v-model",value:t.producto.nombre,expression:"producto.nombre"}],staticClass:"input-group-prepend",attrs:{type:"text"},domProps:{value:t.producto.nombre},on:{input:function(e){e.target.composing||t.$set(t.producto,"nombre",e.target.value)}}}):r("li",{staticClass:"col-md-2 bg-success"},[t._v(t._s(t.producto.nombre))]),t.editMode?r("input",{directives:[{name:"model",rawName:"v-model",value:t.producto.marca,expression:"producto.marca"}],staticClass:"input-group-prepend",attrs:{type:"text"},domProps:{value:t.producto.marca},on:{input:function(e){e.target.composing||t.$set(t.producto,"marca",e.target.value)}}}):r("li",{staticClass:"col-md-2 bg-success"},[t._v(t._s(t.producto.marca))]),t.editMode?r("input",{directives:[{name:"model",rawName:"v-model",value:t.producto.cantidad,expression:"producto.cantidad"}],staticClass:"input-group-prepend",attrs:{type:"number"},domProps:{value:t.producto.cantidad},on:{input:function(e){e.target.composing||t.$set(t.producto,"cantidad",e.target.value)}}}):r("li",{staticClass:"col-md-2 bg-success"},[t._v(t._s(t.producto.cantidad))]),r("div",{staticClass:" float-right "},[t.editMode?r("button",{staticClass:"btn btn-success ",on:{click:function(e){return t.guardarCambios()}}},[t._v(" Guardar cambios ")]):r("button",{staticClass:"btn btn-info",on:{click:function(e){return t.editar()}}},[t._v(" Editar ")]),r("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.borrar()}}},[t._v(" Eliminar ")])])])])])},C=[],y={name:"listaproducto",props:["producto"],data:function(){return{editMode:!1}},methods:{borrar:function(){this.$emit("delete")},editar:function(){this.editMode=!0},guardarCambios:function(){this.editMode=!1,this.$emit("update",this.producto)}}},P=y,w=(r("ff7f"),Object(c["a"])(P,_,C,!1,null,"189c33e0",null)),x=w.exports,j={name:"Home",components:{NuevoProducto:h,listaproducto:x},data:function(){return{productos:[{nombre:"Pantalon",marca:"levis",cantidad:18}]}},methods:{addProduct:function(t){this.productos.push(t)},borrarProducto:function(t){this.productos.splice(t,1)},actualizarElemento:function(t,e){this.producto[t]=e}}},O=j,N=(r("cccb"),Object(c["a"])(O,l,m,!1,null,null,null)),$=N.exports;o["a"].use(d["a"]);var M=[{path:"/",name:"Home",component:$}],E=new d["a"]({mode:"history",base:"/ejercicio/",routes:M}),k=E;o["a"].config.productionTip=!1,new o["a"]({router:k,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var o=r("9c0c"),a=r.n(o);a.a},"5ced":function(t,e,r){},8267:function(t,e,r){},"9c0c":function(t,e,r){},cccb:function(t,e,r){"use strict";var o=r("5ced"),a=r.n(o);a.a},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},ff7f:function(t,e,r){"use strict";var o=r("8267"),a=r.n(o);a.a}});
//# sourceMappingURL=app.39731eb5.js.map
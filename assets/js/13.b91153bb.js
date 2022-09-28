(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{178:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"wacth-监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wacth-监听"}},[t._v("#")]),t._v(" wacth(监听)")]),t._v(" "),s("ul",[s("li",[t._v("使用方法")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\twatch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\twatchObj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("newName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" oldName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tdeep"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//深入监听")]),t._v("\n\t\t\timmediate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一次执行")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h4",{attrs:{id:"但是数组在下面两种情况下无法监听："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#但是数组在下面两种情况下无法监听："}},[t._v("#")]),t._v(" 但是数组在下面两种情况下无法监听：")]),t._v(" "),s("ul",[s("li",[t._v("利用索引直接设置数组项时，例如arr[index]=newValue")]),t._v(" "),s("li",[t._v("修改数组的长度时，例如arr.length=newLength")])]),t._v(" "),s("h4",{attrs:{id:"解决方法：使用-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法：使用-set"}},[t._v("#")]),t._v(" 解决方法：使用$set")]),t._v(" "),s("ul",[s("li",[t._v("this.$set(arr, index, newValue)")])]),t._v(" "),s("h2",{attrs:{id:"router-和-route-区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-和-route-区别"}},[t._v("#")]),t._v(" $router 和$route 区别")]),t._v(" "),s("h4",{attrs:{id:"_1-router是vuerouter的一个对象，通过vue-use-vuerouter-和vuerouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-router是vuerouter的一个对象，通过vue-use-vuerouter-和vuerouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。"}},[t._v("#")]),t._v(" 1.router是VueRouter的一个对象，通过Vue.use(VueRouter)和VueRouter构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。")]),t._v(" "),s("ul",[s("li",[t._v("举例：history对象")]),t._v(" "),s("li",[t._v("$router.push({path:'home'});本质是向history栈中添加一个路由，在我们看来是 切换路由，但本质是在添加一个history记录")]),t._v(" "),s("li",[t._v("方法：")]),t._v(" "),s("li",[t._v("$router.replace({path:'home'});//替换路由，没有历史记录")])]),t._v(" "),s("h4",{attrs:{id:"_2-route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name-path-params-query等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name-path-params-query等"}},[t._v("#")]),t._v(" 2.route是一个跳转的路由对象，每一个路由都会有一个route对象，是一个局部的对象，可以获取对应的name,path,params,query等")]),t._v(" "),s("ul",[s("li",[t._v("我们可以从vue devtools中看到每个路由对象的不同")])]),t._v(" "),s("h4",{attrs:{id:"_2、如何获取所有route对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何获取所有route对象"}},[t._v("#")]),t._v(" 2、如何获取所有route对象")]),t._v(" "),s("ul",[s("li",[t._v("this.$router.options.routes")])]),t._v(" "),s("h2",{attrs:{id:"filereader用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filereader用法"}},[t._v("#")]),t._v(" fileReader用法")]),t._v(" "),s("h4",{attrs:{id:"用途如："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用途如："}},[t._v("#")]),t._v(" 用途如：")]),t._v(" "),s("ul",[s("li",[t._v("el-opload 上传后的文件内容读取")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileReader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\treader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\treader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readAsText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])}],!1,null,null,null);a.default=r.exports}}]);
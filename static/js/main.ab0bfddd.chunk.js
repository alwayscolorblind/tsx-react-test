(this["webpackJsonptsx-react-test"]=this["webpackJsonptsx-react-test"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(13),s=n.n(o),r=n(8),a=n(1),d=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"nav-wrapper px1",children:[Object(a.jsx)("a",{href:"/",className:"brand-logo",children:"React + TS"}),Object(a.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"/",children:"To Do"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"/about",children:"Information"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"/test",children:"Test"})})]})]})})},l=(n(35),n(12)),j=n(25),u=function(){return Object(c.useContext)(T)},b=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(c.useState)(t),i=Object(j.a)(n,2),o=i[0],s=i[1];return{value:o,onKeyPress:function(t){"Enter"===t.key&&(e(o),s((function(){return""})))},onChange:function(e){s((function(){return e.target.value}))}}}(u().handleAdd);return Object(a.jsxs)("div",{className:"input-field mt5",children:[Object(a.jsx)("input",Object(l.a)({type:"text",id:"title",placeholder:"Title"},e)),Object(a.jsx)("label",{htmlFor:"title",className:"active",children:"Enter title"})]})},h=function(){var e=u(),t=e.todos,n=e.onToggle,c=e.onRemove;return t.length?Object(a.jsx)("ul",{children:t.map((function(e){var t=["todo"];return e.completed&&t.push("completed"),Object(a.jsx)("li",{className:t.join(" "),children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:e.completed,onChange:function(){return n(e.id)}}),Object(a.jsx)("span",{children:e.title}),Object(a.jsx)("i",{className:"material-icons red-text",onClick:function(){return c(e.id)},children:"delete"})]})},e.id)}))}):Object(a.jsx)("p",{className:"center",children:"There is empty!"})},O=n(23),x=Object(O.a)((function(){return function(e){Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todos")||"[]");e.setTodos(t)}),[e]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(e.todos))}),[e.todos])}(u()),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{}),Object(a.jsx)(h,{})]})})),m=n(3),f=function(){var e=Object(m.f)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"About Page"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid aspernatur eaque magni maxime minima odio officia reiciendis similique?"}),Object(a.jsx)("button",{className:"btn",onClick:function(){e.push("/")},children:"Go back!"})]})},p=n(24),v=n(22),g=n(2),N=new function e(){var t=this;Object(v.a)(this,e),this.todos=[],this.setTodos=function(e){t.todos=e},this.handleAdd=function(e){var n={id:Date.now(),title:e,completed:!1};t.todos=[n].concat(Object(p.a)(t.todos))},this.onRemove=function(e){t.todos=t.todos.filter((function(t){return t.id!==e}))},this.onToggle=function(e){t.todos=t.todos.map((function(t){return t.id!==e?t:Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed})}))},Object(g.l)(this)},T=Object(c.createContext)(N),k=function(){return Object(a.jsxs)(r.a,{children:[Object(a.jsx)(d,{}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(T.Provider,{value:N,children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{component:x,path:"/",exact:!0}),Object(a.jsx)(m.a,{component:f,path:"/about"})]})})})]})};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ab0bfddd.chunk.js.map
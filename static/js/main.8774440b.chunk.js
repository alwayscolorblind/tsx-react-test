(this["webpackJsonptsx-react-test"]=this["webpackJsonptsx-react-test"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(22),r=n.n(o),s=n(11),a=n(1),d=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"nav-wrapper px1",children:[Object(a.jsx)("a",{href:"/",className:"brand-logo",children:"React + TS"}),Object(a.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/",children:"To Do"})}),Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/about",children:"Information"})}),Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/test",children:"Test"})})]})]})})},l=(n(51),n(16)),j=n(20),u=n(26),b=n(36),O=n(12),h=n(3),x=function e(){var t=this;Object(b.a)(this,e),Object(O.a)(this,"todos",[]),Object(O.a)(this,"setTodos",(function(e){t.todos=e})),Object(O.a)(this,"handleAdd",(function(e){var n={id:Date.now(),title:e,completed:!1};t.todos=[n].concat(Object(u.a)(t.todos))})),Object(O.a)(this,"onRemove",(function(e){t.todos=t.todos.filter((function(t){return t.id!==e}))})),Object(O.a)(this,"onToggle",(function(e){t.todos=t.todos.map((function(t){return t.id!==e?t:Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed})}))})),Object(h.l)(this)},f=new x,m=Object(c.createContext)(f),p=function(){return Object(c.useContext)(m)},g=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(c.useState)(t),i=Object(j.a)(n,2),o=i[0],r=i[1];return{value:o,onKeyPress:function(t){"Enter"===t.key&&(e(o),r((function(){return""})))},onChange:function(e){r((function(){return e.target.value}))}}}(p().handleAdd);return Object(a.jsxs)("div",{className:"input-field mt5",children:[Object(a.jsx)("input",Object(l.a)({type:"text",id:"title",placeholder:"Title"},e)),Object(a.jsx)("label",{htmlFor:"title",className:"active",children:"Enter title"})]})},v=n(58),N=n(59),y="card",T=function(e){var t=e.id,n=e.title,i=e.completed,o=e.index,r=p(),s=r.onToggle,d=r.onRemove,l=["todo"],b=function(){var e=p(),t=e.todos,n=e.setTodos;return Object(c.useCallback)((function(e,c){var i=t[e],o=Object(u.a)(t);o.splice(e,1),o.splice(c,0,i),n(o)}),[t,n])}(),O=Object(c.useRef)(null),h=Object(v.a)({accept:y,collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var n;if(O.current){var c=e.index,i=o;if(c!==i){var r=null===(n=O.current)||void 0===n?void 0:n.getBoundingClientRect(),s=(r.bottom-r.top)/2,a=t.getClientOffset().y-r.top;c<i&&a<s||c>i&&a>s||(b(c,i),e.index=i)}}}}),x=Object(j.a)(h,2),f=x[0].handlerId,m=x[1],g=Object(N.a)({type:y,item:function(){return{id:t,index:o}},collect:function(e){return{isDragging:e.isDragging()}}}),T=Object(j.a)(g,2),k=T[0].isDragging,C=T[1];i&&l.push("completed");var w=k?0:1;return C(m(O)),Object(a.jsx)("li",{ref:O,className:l.join(" "),style:{opacity:w},"data-handler-id":f,children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:i,onChange:function(){return s(t)}}),Object(a.jsx)("span",{children:n}),Object(a.jsx)("i",{className:"material-icons red-text",onClick:function(){return d(t)},children:"delete"})]})},t)},k=function(){var e=p().todos;return e.length?Object(a.jsx)("ul",{children:e.map((function(e,t){return Object(a.jsx)(T,{id:e.id,title:e.title,completed:e.completed,index:t},e.id)}))}):Object(a.jsx)("p",{className:"center",children:"There is empty!"})},C=n(38),w=Object(C.a)((function(){return function(e){Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todos")||"[]");e.setTodos(t)}),[e]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(e.todos))}),[e.todos])}(p()),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{}),Object(a.jsx)(k,{})]})})),I=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"About Page"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquid aspernatur eaque magni maxime minima odio officia reiciendis similique?"}),Object(a.jsx)(s.b,{to:"/",children:Object(a.jsx)("button",{className:"btn",children:"Go back!"})})]})},S=n(57),D=n(39),E=n(4),R=new x,A=function(){return Object(a.jsxs)(s.a,{children:[Object(a.jsx)(d,{}),Object(a.jsx)(S.a,{backend:D.a,children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(m.Provider,{value:R,children:Object(a.jsxs)(E.c,{children:[Object(a.jsx)(E.a,{component:w,path:"/",exact:!0}),Object(a.jsx)(E.a,{component:I,path:"/about"})]})})})})]})};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.8774440b.chunk.js.map
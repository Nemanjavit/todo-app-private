(this["webpackJsonptodo-app-private"]=this["webpackJsonptodo-app-private"]||[]).push([[0],{54:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(39),a=n.n(i),l=(n(54),n(17)),o=n(24),r=n(13),d=n(14),j=n(4),b=n(2),u=function(e){var t=e.changeHandler,n=e.value,c=e.name,s=e.clickHandler,i=e.keydown;return Object(b.jsxs)("div",{className:"input__wrapper",children:[Object(b.jsx)("button",{className:"input__button",onClick:s}),Object(b.jsx)("input",{autocomplete:"off",onKeyDown:i,className:"input",type:"text",onChange:t,value:n,name:c})]})},m="card",O=n(82),x=n(83),h=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",children:Object(b.jsx)("path",{fill:"#494C6B",fillRule:"evenodd",d:"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"})})},g=n(41),f=function(e){var t=e.doneHandler,n=e.deleteHandler,s=e.isFinished,i=e.name,a=e.index,l=e.moveTask,o=e.id,d=Object(c.useRef)(null),j=Object(O.a)({accept:m,collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,t){var n;if(d.current){var c=e.index,s=a;if(c!==s){var i=null===(n=d.current)||void 0===n?void 0:n.getBoundingClientRect(),o=(i.bottom-i.top)/2,r=t.getClientOffset().y-i.top;console.log(r),c<s&&r<o||c>s&&r>o||(l(c,s),e.index=s)}}}}),u=Object(r.a)(j,2),f=u[0].handlerId,v=u[1],p=Object(x.a)({type:m,item:function(){return{id:o,index:a}},collect:function(e){return{isDragging:e.isDragging()}}}),_=Object(r.a)(p,2);_[0].isDragging;return(0,_[1])(v(d)),Object(b.jsxs)("li",{className:"taskList__item",ref:d,"data-handler-id":f,children:[Object(b.jsx)("button",{className:"done__button ".concat(s?"done":""),onClick:t,children:s?Object(b.jsx)(g.a,{}):null}),s?Object(b.jsx)("strike",{className:"done__task",children:i}):Object(b.jsx)("span",{children:i}),Object(b.jsx)("button",{className:"delete__button",onClick:n,children:Object(b.jsx)(h,{})})]})},v=n(42),p=n.n(v),_=n(12),N=function(e){var t=e.list,n=e.clearCompleted;return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)(_.Visible,{lg:!0,xl:!0,xxl:!0,children:Object(b.jsxs)(_.Row,{nogutter:!0,justify:"between",align:"center",className:"bottomNav",children:[Object(b.jsxs)("p",{className:"items__left",children:[t.length," items left"]}),Object(b.jsxs)("div",{className:"bottomNav__links",children:[Object(b.jsx)(d.b,{activeClassName:"selected",className:"bottomNav__Links__item",to:"/completed",exact:!0,children:"Completed"}),Object(b.jsx)(d.b,{activeClassName:"selected",className:"bottomNav__Links__item",to:"/",exact:!0,children:"All"}),Object(b.jsx)(d.b,{activeClassName:"selected",className:"bottomNav__Links__item",to:"/Active",exact:!0,children:"Active"})]}),Object(b.jsx)("button",{className:"bottomNav__button",onClick:n,children:"Clear Completed"})]})}),Object(b.jsxs)(_.Visible,{xs:!0,sm:!0,md:!0,children:[Object(b.jsxs)(_.Row,{nogutter:!0,justify:"between",align:"center",className:"bottomNav",children:[Object(b.jsxs)("p",{className:"items__left",children:[t.length," items left"]}),Object(b.jsx)("button",{className:"bottomNav__button",onClick:n,children:"Clear Completed"})]}),Object(b.jsxs)(_.Row,{className:"bottomNav__Links__mobile",justify:"center",align:"center",nogutter:!0,children:[Object(b.jsx)(d.b,{activeClassName:"selected",className:"bottomNav__Links__item",to:"/completed",exact:!0,children:"Completed"}),Object(b.jsx)(d.b,{activeClassName:"selected",className:"bottomNav__Links__item",to:"/",exact:!0,children:"All"}),Object(b.jsx)(d.b,{activeClassName:"selected",className:"bottomNav__Links__item",to:"/Active",exact:!0,children:"Active"})]})]})]})},k=function(e){var t=e.list,s=Object(c.useContext)(R),i=s.settasklist,a=s.tasklist,o=n(74),r=Object(c.useCallback)(o((function(e,t){var n=a[e];i(p()(a,{$splice:[[e,1],[t,0,n]]}))}),100),[a]);return Object(b.jsxs)("div",{className:"taskListwrapper",children:[Object(b.jsx)("ul",{className:"taskList",children:t?t.map((function(e,t){return Object(b.jsx)(f,{moveTask:r,index:t,name:e.name,isFinished:e.isFinished,doneHandler:function(){return function(e){var t=a;t.filter((function(t){return t.id===e}))[0].isFinished=!0,i(Object(l.a)(t)),console.log("donetask",e)}(e.id)},deleteHandler:function(){return function(e){var t=a.filter((function(t){return t.id!==e}));i(t)}(e.id)},id:e.id},e.id)})):null}),Object(b.jsx)(N,{clearCompleted:function(){var e=a.filter((function(e){return!1===e.isFinished}));i(e)},list:t})]})},C=function(e){var t=e.list;return Object(b.jsx)(k,{list:t})},w=(n(75),function(e){var t=e.list.filter((function(e){return!0===e.isFinished}));return Object(b.jsx)("div",{children:Object(b.jsx)(k,{list:t})})}),y=function(e){var t=e.list,n=Object(c.useState)(Object(l.a)(t)),s=Object(r.a)(n,2),i=s[0],a=(s[1],i.filter((function(e){return!1===e.isFinished})));return Object(b.jsx)("div",{children:Object(b.jsx)(k,{list:a})})},L=n(81),F=n(47),I=n(45),H=n(46),R=Object(c.createContext)();var A=function(){var e=Object(c.useState)({name:"",id:0,isFinished:!1}),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),a=Object(r.a)(i,2),m=a[0],O=a[1],x=Object(c.useState)(!1),h=Object(r.a)(x,2),g=h[0],f=h[1],v=function(){s(Object(o.a)(Object(o.a)({},n),{},{id:(100*Math.random()).toFixed(0)})),O([].concat(Object(l.a)(m),[n]))},p=function(){var e=document.getElementsByTagName("body"),t=window.innerWidth;!1===g&&t>768?e[0].style.backgroundImage='url("./Images/bg-desktop-light.jpg")':!1===g&&t<768?e[0].style.backgroundImage='url("./Images/bg-mobile-light.jpg")':!0===g&&t>768?e[0].style.backgroundImage='url("./Images/bg-desktop-dark.jpg")':!0===g&&t<768&&(e[0].style.backgroundImage='url("./Images/bg-mobile-dark.jpg")')};return Object(c.useEffect)((function(){p()}),[g]),window.onload=p,window.onresize=p,Object(b.jsx)(R.Provider,{value:{settasklist:O,tasklist:m},children:Object(b.jsx)(d.a,{children:Object(b.jsx)(L.a,{backend:F.a,children:Object(b.jsx)(_.Row,{justify:"center",children:Object(b.jsx)(_.Col,{xs:11,md:8,lg:6,xl:6,children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(_.Row,{nogutter:!0,className:"header",align:"center",justify:"between",children:[Object(b.jsx)("span",{children:"TODO"}),Object(b.jsx)("button",{className:"theme__toggle__button",onClick:function(){return document.getElementsByTagName("body")[0].classList.toggle("dark"),void f(!g)},children:g?Object(b.jsx)(I.a,{}):Object(b.jsx)(H.a,{})})]}),Object(b.jsx)(u,{changeHandler:function(e){s(Object(o.a)(Object(o.a)({},n),{},{name:e.target.value}))},value:n.name,name:"task.name",clickHandler:v,keydown:function(e){return function(e){13==e.keyCode&&v()}(e)}}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",exact:!0,component:function(){return Object(b.jsx)(C,{list:m})}}),Object(b.jsx)(j.a,{path:"/completed",component:function(){return Object(b.jsx)(w,{list:m})}}),Object(b.jsx)(j.a,{path:"/active",component:function(){return Object(b.jsx)(y,{list:m})}})]})]})})})})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(A,{})}),document.getElementById("root")),T()}},[[76,1,2]]]);
//# sourceMappingURL=main.d8ba6b4e.chunk.js.map
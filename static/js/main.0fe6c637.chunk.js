(this.webpackJsonpreact2012=this.webpackJsonpreact2012||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(19),s=c.n(a),i=(c(26),c(6)),l=(c(27),c(7)),o=c(0),r=function(e){var t=Object(n.useState)({home:"/",contact:"/contact",Projects:"/projects",login:"/login"}),c=Object(i.a)(t,2),a=c[0];c[1];var s=Object(n.useState)({count:0}),r=Object(i.a)(s,2),j=r[0],b=r[1];return Object(o.jsxs)("nav",{id:"nav",children:[Object(o.jsx)("div",{className:"logoMenu",children:Object(o.jsx)(l.b,{to:a.home,className:"nav-menu",children:"Min199x"})}),Object(o.jsxs)("ul",{id:"nav-links",className:"nav-links",children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:a.home,className:"nav-home",children:"Min199x"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:a.Projects,className:"nav-item",children:"My Project"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:a.contact,className:"nav-item",children:"Contact"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:a.login,className:"nav-item",children:"Login"})}),Object(o.jsx)("li",{id:"search",onClick:function(){var e=document.getElementById("modal-search");0===j.count?(e.style.display="block",b({count:j.count=1})):1===j.count&&(e.style.display="none",b({count:j.count=0}))},children:"Search"})]}),Object(o.jsxs)("div",{id:"modal-search",className:"search",children:[Object(o.jsxs)("p",{className:"form",children:[Object(o.jsx)("input",{type:"text",placeholder:"Search"}),Object(o.jsx)("button",{onClick:function(){document.getElementById("modal-search").style.display="none",b({count:j.count=0})},children:"Close"})]}),Object(o.jsx)("p",{className:"form-footer",children:"Search by Min"})]}),Object(o.jsxs)("div",{onClick:function(){document.getElementById("nav-links").classList.toggle("open")},className:"hamberger",children:[Object(o.jsx)("div",{className:"line"}),Object(o.jsx)("div",{className:"line"}),Object(o.jsx)("div",{className:"line"})]})]})},j=(c(37),c(38),function(){var e="#2980b9";return Object(o.jsx)("div",{className:"landing",children:Object(o.jsx)("form",{onClick:function(){var t=document.getElementById("h-box"),c=document.getElementById("hello");"#2980b9"===e?(t.style.backgroundColor="#282741",c.style.color="#ff6138",e="#282741"):"#282741"===e?(t.style.backgroundColor="#ffbe53",c.style.color="#282741",e="#ffbe53"):"#ffbe53"===e?(t.style.backgroundColor="#ff6138",c.style.color="#2980b9",e="#ff6138"):"#ff6138"===e&&(t.style.backgroundColor="#2980b9",c.style.color="#282741",e="#2980b9")},id:"h-box",className:"h-box",children:Object(o.jsx)("h1",{id:"hello",className:"hello",children:"Hello, Min"})})})}),b=(c(39),function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(r,{}),Object(o.jsx)(j,{})]})}),u=(c(40),function(e){return Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)(r,{}),Object(o.jsxs)("div",{className:"login-form",children:[Object(o.jsx)("h2",{children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"}),Object(o.jsxs)("form",{children:[Object(o.jsx)("label",{for:"username",children:"\u0e0a\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19"}),Object(o.jsx)("input",{id:"username",type:"text",autoComplete:"off"}),Object(o.jsx)("label",{for:"password",children:"\u0e23\u0e2b\u0e31\u0e2a\u0e1c\u0e48\u0e32\u0e19"}),Object(o.jsx)("input",{id:"password",type:"password",autoComplete:"off"}),Object(o.jsx)("button",{type:"submit",children:"\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"})]})]})]})}),d=(c(41),function(){return Object(o.jsxs)("div",{className:"contact",children:[Object(o.jsx)(r,{}),Object(o.jsxs)("div",{className:"contact-form",children:[Object(o.jsx)("h1",{children:"Contact Me."}),Object(o.jsxs)("form",{className:"item-form",children:[Object(o.jsx)("label",{id:"iusername",for:"username",children:"My Phone"}),Object(o.jsx)("input",{className:"username",id:"username",type:"text",autoComplete:"off",value:"098-873-6962"}),Object(o.jsx)("label",{id:"iEmail",for:"Email",children:"Email"}),Object(o.jsx)("input",{id:"Email",name:"Email",type:"text",autoComplete:"off",value:"s.statiion@icloud.com"}),Object(o.jsx)("label",{id:"iLine",for:"Line",children:"Line"}),Object(o.jsx)("input",{id:"Line",name:"Line",type:"text",autoComplete:"off",value:"Min199x"}),Object(o.jsx)("label",{id:"iGithub",for:"Github",children:"Github"}),Object(o.jsx)("input",{id:"Github",name:"Github",type:"text",autoComplete:"off",value:"github.com/supermin199x"})]})]})]})}),h=(c(42),c(21)),m=c(13),x=c(10),O=(c(43),{content:"",author:""}),p=function(){var e=Object(n.useState)(O),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),l=Object(i.a)(s,2),r=l[0],j=l[1],b=Object(n.useState)([]),u=Object(i.a)(b,2),d=u[0],p=u[1];function f(e){var t=e.target,c=t.name,n=t.value;a((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},c,n))}))}function v(e){var t=e.target,c=t.name,n=t.value;j((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},c,n))}))}var y=d.map((function(e){return Object(o.jsxs)("div",{className:"app-note",children:[Object(o.jsx)("p",{className:"content-item",children:e.content}),Object(o.jsx)("h5",{className:"author-item",children:e.author}),Object(o.jsxs)("p",{children:[Object(o.jsx)("a",{onClick:function(){j(e)},children:"Edit"}),Object(o.jsx)("span",{children:" | "}),Object(o.jsx)("a",{onClick:function(){var t;t=e.id,p((function(e){return e.filter((function(e){return e.id!==t}))}))},children:"Delete"})]})]},e.id)})),N=null;return r&&(N=Object(o.jsx)("div",{className:"app-edit-note",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p((function(e){return e.map((function(e){return e.id!==r.id?e:r}))})),j(null)},children:[Object(o.jsx)("p",{children:Object(o.jsx)("textarea",{rows:"3",placeholder:"\u0e04\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e2d\u0e22\u0e39\u0e48 . . .",name:"content",value:r.content,onChange:v})}),Object(o.jsx)("p",{children:Object(o.jsx)("input",{type:"text",placeholder:"\u0e25\u0e07\u0e0a\u0e37\u0e48\u0e2d",name:"author",value:r.author,onChange:v})}),Object(o.jsx)("p",{children:Object(o.jsx)("button",{type:"submit",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})})),Object(o.jsxs)("section",{className:"app-section",children:[Object(o.jsxs)("div",{className:"app-container",children:[Object(o.jsx)("h3",{children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e42\u0e19\u0e4a\u0e15"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===c.content||""===c.author?alert("\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"):(p((function(e){var t=Object(x.a)({},c);return t.id=Date.now().toString(),[t].concat(Object(h.a)(e))})),a(O))},children:[Object(o.jsx)("p",{children:Object(o.jsx)("textarea",{rows:"3",placeholder:"\u0e04\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e2d\u0e22\u0e39\u0e48",name:"content",value:c.content,onChange:f})}),Object(o.jsx)("p",{children:Object(o.jsx)("input",{type:"text",placeholder:"\u0e25\u0e07\u0e0a\u0e37\u0e48\u0e2d",name:"author",value:c.author,onChange:f})}),Object(o.jsx)("p",{children:Object(o.jsx)("button",{type:"submit",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})})]}),Object(o.jsx)("div",{className:"app-notes",children:y})]}),N]})};c(44),c(45);var f=function(){return Object(o.jsx)("header",{className:"app-header",children:Object(o.jsx)("h2",{className:"name",children:"Cat Gallery"})})};c(46);var v=function(e){var t=e.value,c=e.onValueChange;return Object(o.jsx)("div",{className:"app-search",children:Object(o.jsx)("input",{className:"app-search-input",type:"text",value:t,placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32 . . .",onChange:function(e){return c(e.target.value)}})})};c(47);var y=function(e){var t=e.tattoo,c=e.onTattooClick;return Object(o.jsxs)("div",{className:"tattoo-item",children:[Object(o.jsx)("img",{src:t.thumbnailUrl,onClick:function(){return c(t)}}),Object(o.jsx)("h4",{children:t.title})]})};c(48);var N=function(e){var t=e.tattoo,c=e.onBgClick;return Object(o.jsxs)("div",{className:"tattoo-post",children:[Object(o.jsx)("div",{className:"tattoo-bg",onClick:c}),Object(o.jsxs)("div",{className:"tattoo-content",children:[Object(o.jsx)("img",{src:t.thumbnailUrl}),Object(o.jsx)("h3",{children:t.title})]})]})},g=[{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 01",thumbnailUrl:"https://i.ibb.co/By6JfTw/1.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 02",thumbnailUrl:"https://i.ibb.co/vxRVqG1/2.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 03",thumbnailUrl:"https://i.ibb.co/5M1KtWZ/3.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 04",thumbnailUrl:"https://i.ibb.co/ynjsDd1/4.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 05",thumbnailUrl:"https://i.ibb.co/fCTQ2VT/5.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 06",thumbnailUrl:"https://i.ibb.co/qM2yDJG/6.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 07",thumbnailUrl:"https://i.ibb.co/PzGw0k4/7.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 08",thumbnailUrl:"https://i.ibb.co/6WQv521/8.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 09",thumbnailUrl:"https://i.ibb.co/LSrftbk/9.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 10",thumbnailUrl:"https://i.ibb.co/BghrXTP/10.jpg"}];var C=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),r=l[0],j=l[1];function b(e){a(e)}var u=g.filter((function(e){return e.title.includes(r)})).map((function(e,t){return Object(o.jsx)(y,{tattoo:e,onTattooClick:b},t)})),d=null;return c&&(d=Object(o.jsx)(N,{tattoo:c,onBgClick:function(){a(null)}})),Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(f,{}),Object(o.jsx)("section",{className:"app-section",children:Object(o.jsxs)("div",{className:"app-container",children:[Object(o.jsx)(v,{value:r,onValueChange:j}),Object(o.jsx)("div",{className:"app-grid",children:u})]})}),d]})},k=function(){var e=Object(n.useState)({home:"/",todolist:"/todolist",gallery:"/gallery"}),t=Object(i.a)(e,2),c=t[0];t[1];return Object(o.jsxs)("div",{className:"box",children:[Object(o.jsxs)("aside",{className:"aside",children:[Object(o.jsx)("ul",{className:"aside-links",children:Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:c.home,className:"aside-item",children:"Min199x"})})}),Object(o.jsxs)("ul",{className:"exam-links",children:[Object(o.jsx)("li",{children:Object(o.jsxs)(l.b,{onClick:function(){var e=document.querySelector(".content-01"),t=document.querySelector(".content-02");e.style.display="block",t.style.display="none"},className:"exam-item",children:["Project 01 ",Object(o.jsx)("a",{children:"React State & Object"})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)(l.b,{onClick:function(){var e=document.querySelector(".content-01");document.querySelector(".content-02").style.display="block",e.style.display="none"},className:"exam-item",children:["Project 02 ",Object(o.jsx)("a",{children:"Gallery Cats"})]})})]})]}),Object(o.jsx)("content",{className:"content-01",children:Object(o.jsx)(p,{})}),Object(o.jsx)("content",{className:"content-02",children:Object(o.jsx)(C,{})})]})},S=(c(49),function(){return Object(o.jsxs)("div",{className:"error404",children:[Object(o.jsx)("h1",{className:"error",children:"404"}),Object(o.jsx)("h3",{className:"notfound",children:"File not found."})]})}),E=c(2),M=function(){return Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(l.a,{children:Object(o.jsxs)(E.c,{children:[Object(o.jsx)(E.a,{exact:!0,path:"/",component:b}),Object(o.jsx)(E.a,{exact:!0,path:"/react2012",component:b}),Object(o.jsx)(E.a,{path:"/contact",component:d}),Object(o.jsx)(E.a,{path:"/projects",component:k}),Object(o.jsx)(E.a,{path:"/todolist",component:p}),Object(o.jsx)(E.a,{path:"/gallery",component:C}),Object(o.jsx)(E.a,{path:"/login",component:u}),Object(o.jsx)(E.a,{component:S})]})})})};s.a.render(Object(o.jsx)(M,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0fe6c637.chunk.js.map
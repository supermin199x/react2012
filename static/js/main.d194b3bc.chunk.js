(this.webpackJsonpreact2012=this.webpackJsonpreact2012||[]).push([[0],{26:function(t,e,c){},27:function(t,e,c){},37:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){},41:function(t,e,c){},42:function(t,e,c){},43:function(t,e,c){},44:function(t,e,c){},45:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){},48:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c(19),i=c.n(a),l=(c(26),c(8)),s=(c(27),c(9)),j=c(0),o=function(t){var e=Object(n.useState)({home:"/",contact:"/contact",Projects:"/projects"}),c=Object(l.a)(e,2),a=c[0];c[1];return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:a.home,className:"nav-item",children:"Min199x"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:a.Projects,className:"nav-item",children:"My Project"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:a.contact,className:"nav-item",children:"Contact"})})]})})},r=c(6),b=(c(37),c.p,function(){var t;t={htmlopen:"<html>",htmlclose:"</html>"},Object(r.a)(t,"htmlopen","<html>"),Object(r.a)(t,"htmlclose","</html>"),Object(r.a)(t,"htmlopen","<html>"),Object(r.a)(t,"htmlclose","</html>"),Object(r.a)(t,"htmlopen","<html>"),Object(r.a)(t,"htmlclose","</html>");return Object(j.jsx)("div",{className:"landing",children:Object(j.jsx)("section",{className:"h-box",children:Object(j.jsx)("h1",{className:"hello",children:"Hello, Min"})})})}),u=(c(38),function(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(o,{}),Object(j.jsx)(b,{})]})}),h=(c(39),function(){return Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)(o,{}),Object(j.jsxs)("div",{className:"contact-form",children:[Object(j.jsx)("h1",{children:"Contact Me."}),Object(j.jsxs)("form",{className:"item-form",children:[Object(j.jsx)("label",{id:"iusername",for:"username",children:"My Phone"}),Object(j.jsx)("input",{className:"username",id:"username",type:"text",autoComplete:"off",value:"098-873-6962"}),Object(j.jsx)("label",{id:"iEmail",for:"Email",children:"Email"}),Object(j.jsx)("input",{id:"Email",name:"Email",type:"text",autoComplete:"off",value:"s.statiion@icloud.com"}),Object(j.jsx)("label",{id:"iLine",for:"Line",children:"Line"}),Object(j.jsx)("input",{id:"Line",name:"Line",type:"text",autoComplete:"off",value:"Min199x"}),Object(j.jsx)("label",{id:"iGithub",for:"Github",children:"Github"}),Object(j.jsx)("input",{id:"Github",name:"Github",type:"text",autoComplete:"off",value:"github.com/supermin199x"})]})]})]})}),d=(c(40),c(21)),m=c(11),O=(c(41),{content:"",author:""}),x=function(){var t=Object(n.useState)(O),e=Object(l.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(null),s=Object(l.a)(i,2),o=s[0],b=s[1],u=Object(n.useState)([]),h=Object(l.a)(u,2),x=h[0],p=h[1];function f(t){var e=t.target,c=e.name,n=e.value;a((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(r.a)({},c,n))}))}function v(t){var e=t.target,c=e.name,n=e.value;b((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(r.a)({},c,n))}))}var N=x.map((function(t){return Object(j.jsxs)("div",{className:"app-note",children:[Object(j.jsx)("p",{className:"content-item",children:t.content}),Object(j.jsx)("h5",{className:"author-item",children:t.author}),Object(j.jsxs)("p",{children:[Object(j.jsx)("a",{onClick:function(){b(t)},children:"Edit"}),Object(j.jsx)("span",{children:" | "}),Object(j.jsx)("a",{onClick:function(){var e;e=t.id,p((function(t){return t.filter((function(t){return t.id!==e}))}))},children:"Delete"})]})]},t.id)})),g=null;return o&&(g=Object(j.jsx)("div",{className:"app-edit-note",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p((function(t){return t.map((function(t){return t.id!==o.id?t:o}))})),b(null)},children:[Object(j.jsx)("p",{children:Object(j.jsx)("textarea",{rows:"3",placeholder:"\u0e04\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e2d\u0e22\u0e39\u0e48 . . .",name:"content",value:o.content,onChange:v})}),Object(j.jsx)("p",{children:Object(j.jsx)("input",{type:"text",placeholder:"\u0e25\u0e07\u0e0a\u0e37\u0e48\u0e2d",name:"author",value:o.author,onChange:v})}),Object(j.jsx)("p",{children:Object(j.jsx)("button",{type:"submit",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})})),Object(j.jsxs)("section",{className:"app-section",children:[Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)("h3",{children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e42\u0e19\u0e4a\u0e15"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===c.content||""===c.author?alert("\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"):(p((function(t){var e=Object(m.a)({},c);return e.id=Date.now().toString(),[e].concat(Object(d.a)(t))})),a(O))},children:[Object(j.jsx)("p",{children:Object(j.jsx)("textarea",{rows:"3",placeholder:"\u0e04\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e2d\u0e22\u0e39\u0e48",name:"content",value:c.content,onChange:f})}),Object(j.jsx)("p",{children:Object(j.jsx)("input",{type:"text",placeholder:"\u0e25\u0e07\u0e0a\u0e37\u0e48\u0e2d",name:"author",value:c.author,onChange:f})}),Object(j.jsx)("p",{children:Object(j.jsx)("button",{type:"submit",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})})]}),Object(j.jsx)("div",{className:"app-notes",children:N})]}),g]})};c(42),c(43);var p=function(){return Object(j.jsx)("header",{className:"app-header",children:Object(j.jsx)("h2",{className:"name",children:"Cat Gallery"})})};c(44);var f=function(t){var e=t.value,c=t.onValueChange;return Object(j.jsx)("div",{className:"app-search",children:Object(j.jsx)("input",{className:"app-search-input",type:"text",value:e,placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32 . . .",onChange:function(t){return c(t.target.value)}})})};c(45);var v=function(t){var e=t.tattoo,c=t.onTattooClick;return Object(j.jsxs)("div",{className:"tattoo-item",children:[Object(j.jsx)("img",{src:e.thumbnailUrl,onClick:function(){return c(e)}}),Object(j.jsx)("h4",{children:e.title})]})};c(46);var N=function(t){var e=t.tattoo,c=t.onBgClick;return Object(j.jsxs)("div",{className:"tattoo-post",children:[Object(j.jsx)("div",{className:"tattoo-bg",onClick:c}),Object(j.jsxs)("div",{className:"tattoo-content",children:[Object(j.jsx)("img",{src:e.thumbnailUrl}),Object(j.jsx)("h3",{children:e.title})]})]})},g=[{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 01",thumbnailUrl:"https://i.ibb.co/By6JfTw/1.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 02",thumbnailUrl:"https://i.ibb.co/vxRVqG1/2.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 03",thumbnailUrl:"https://i.ibb.co/5M1KtWZ/3.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 04",thumbnailUrl:"https://i.ibb.co/ynjsDd1/4.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 05",thumbnailUrl:"https://i.ibb.co/fCTQ2VT/5.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 06",thumbnailUrl:"https://i.ibb.co/qM2yDJG/6.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 07",thumbnailUrl:"https://i.ibb.co/PzGw0k4/7.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 08",thumbnailUrl:"https://i.ibb.co/6WQv521/8.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 09",thumbnailUrl:"https://i.ibb.co/LSrftbk/9.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 10",thumbnailUrl:"https://i.ibb.co/BghrXTP/10.jpg"}];var y=function(){var t=Object(n.useState)(null),e=Object(l.a)(t,2),c=e[0],a=e[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),o=s[0],r=s[1];function b(t){a(t)}var u=g.filter((function(t){return t.title.includes(o)})).map((function(t,e){return Object(j.jsx)(v,{tattoo:t,onTattooClick:b},e)})),h=null;return c&&(h=Object(j.jsx)(N,{tattoo:c,onBgClick:function(){a(null)}})),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(p,{}),Object(j.jsx)("section",{className:"app-section",children:Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)(f,{value:o,onValueChange:r}),Object(j.jsx)("div",{className:"app-grid",children:u})]})}),h]})},C=function(){var t=Object(n.useState)({home:"/",todolist:"/todolist",gallery:"/gallery"}),e=Object(l.a)(t,2),c=e[0];e[1];return Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("aside",{className:"aside",children:[Object(j.jsx)("ul",{className:"aside-links",children:Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:c.home,className:"aside-item",children:"Min199x"})})}),Object(j.jsxs)("ul",{className:"exam-links",children:[Object(j.jsx)("li",{children:Object(j.jsxs)(s.b,{onClick:function(){var t=document.querySelector(".content-01"),e=document.querySelector(".content-02");t.style.display="block",e.style.display="none"},className:"exam-item",children:["Project 01 ",Object(j.jsx)("a",{children:"React State & Object"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(s.b,{onClick:function(){var t=document.querySelector(".content-01");document.querySelector(".content-02").style.display="block",t.style.display="none"},className:"exam-item",children:["Project 02 ",Object(j.jsx)("a",{children:"Gallery Cats"})]})})]})]}),Object(j.jsx)("content",{className:"content-01",children:Object(j.jsx)(x,{})}),Object(j.jsx)("content",{className:"content-02",children:Object(j.jsx)(y,{})})]})},k=(c(47),function(){return Object(j.jsx)("div",{className:"error404",children:Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Page not found 404"})})})}),S=c(2),U=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(s.a,{children:Object(j.jsxs)(S.c,{children:[Object(j.jsx)(S.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(S.a,{exact:!0,path:"/react2012",component:u}),Object(j.jsx)(S.a,{path:"/contact",component:h}),Object(j.jsx)(S.a,{path:"/projects",component:C}),Object(j.jsx)(S.a,{path:"/todolist",component:x}),Object(j.jsx)(S.a,{path:"/gallery",component:y}),Object(j.jsx)(S.a,{component:k})]})})})};i.a.render(Object(j.jsx)(U,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.d194b3bc.chunk.js.map
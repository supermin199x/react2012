(this.webpackJsonpreact2012=this.webpackJsonpreact2012||[]).push([[0],{26:function(t,e,c){},27:function(t,e,c){},37:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){},41:function(t,e,c){},42:function(t,e,c){},43:function(t,e,c){},44:function(t,e,c){},45:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c(19),s=c.n(a),i=(c(26),c(7)),j=(c(27),c(8)),l=c(0),o=function(t){var e=Object(n.useState)({home:"/",contact:"/contact",Projects:"/projects"}),c=Object(i.a)(e,2),a=c[0];c[1];return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"nav-links",children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:a.home,className:"nav-item",children:"Min199x"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:a.Projects,className:"nav-item",children:"My Project"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:a.contact,className:"nav-item",children:"Contact"})})]})})};c(37),c(38);var r=function(){return Object(l.jsx)("header",{className:"app-header",children:Object(l.jsx)("h2",{className:"name",children:"Cat Gallery"})})};c(39);var b=function(t){var e=t.value,c=t.onValueChange;return Object(l.jsx)("div",{className:"app-search",children:Object(l.jsx)("input",{className:"app-search-input",type:"text",value:e,placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32 . . .",onChange:function(t){return c(t.target.value)}})})};c(40);var u=function(t){var e=t.tattoo,c=t.onTattooClick;return Object(l.jsxs)("div",{className:"tattoo-item",children:[Object(l.jsx)("img",{src:e.thumbnailUrl,onClick:function(){return c(e)}}),Object(l.jsx)("h4",{children:e.title})]})};c(41);var h=function(t){var e=t.tattoo,c=t.onBgClick;return Object(l.jsxs)("div",{className:"tattoo-post",children:[Object(l.jsx)("div",{className:"tattoo-bg",onClick:c}),Object(l.jsxs)("div",{className:"tattoo-content",children:[Object(l.jsx)("img",{src:e.thumbnailUrl}),Object(l.jsx)("h3",{children:e.title})]})]})},d=[{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 01",thumbnailUrl:"https://i.ibb.co/By6JfTw/1.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 02",thumbnailUrl:"https://i.ibb.co/vxRVqG1/2.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 03",thumbnailUrl:"https://i.ibb.co/5M1KtWZ/3.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 04",thumbnailUrl:"https://i.ibb.co/ynjsDd1/4.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 05",thumbnailUrl:"https://i.ibb.co/fCTQ2VT/5.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 06",thumbnailUrl:"https://i.ibb.co/qM2yDJG/6.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 07",thumbnailUrl:"https://i.ibb.co/PzGw0k4/7.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 08",thumbnailUrl:"https://i.ibb.co/6WQv521/8.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 09",thumbnailUrl:"https://i.ibb.co/LSrftbk/9.jpg"},{title:"\u0e41\u0e2a\u0e19\u0e2a\u0e27\u0e22 10",thumbnailUrl:"https://i.ibb.co/BghrXTP/10.jpg"}];var O=function(){var t=Object(n.useState)(null),e=Object(i.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)(""),j=Object(i.a)(s,2),o=j[0],O=j[1];function p(t){a(t)}var x=d.filter((function(t){return t.title.includes(o)})).map((function(t,e){return Object(l.jsx)(u,{tattoo:t,onTattooClick:p},e)})),m=null;return c&&(m=Object(l.jsx)(h,{tattoo:c,onBgClick:function(){a(null)}})),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(r,{}),Object(l.jsx)("section",{className:"app-section",children:Object(l.jsxs)("div",{className:"app-container",children:[Object(l.jsx)(b,{value:o,onValueChange:O}),Object(l.jsx)("div",{className:"app-grid",children:x})]})}),m]})},p=(c(42),function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(o,{}),Object(l.jsx)(O,{})]})}),x=(c(43),function(){return Object(l.jsxs)("div",{className:"contact",children:[Object(l.jsx)(o,{}),Object(l.jsxs)("div",{className:"contact-form",children:[Object(l.jsx)("h1",{children:"Contact Me."}),Object(l.jsxs)("form",{className:"item-form",children:[Object(l.jsx)("label",{for:"username",children:"My Phone"}),Object(l.jsx)("input",{className:"username",id:"username",name:"username",type:"text",autoComplete:"off",value:"098-873-6962"}),Object(l.jsx)("label",{for:"password",children:"Email"}),Object(l.jsx)("input",{id:"password",name:"password",type:"text",autoComplete:"off",value:"s.statiion@icloud.com"}),Object(l.jsx)("label",{for:"password",children:"Line"}),Object(l.jsx)("input",{id:"password",name:"password",type:"text",autoComplete:"off",value:"s.statiion@icloud.com"}),Object(l.jsx)("label",{for:"password",children:"Github"}),Object(l.jsx)("input",{id:"password",name:"password",type:"text",autoComplete:"off",value:"github.com/supermin199x"})]})]})]})}),m=(c(44),c(21)),f=c(13),v=c(10),N=(c(45),{content:"",author:""}),g=function(){var t=Object(n.useState)(N),e=Object(i.a)(t,2),c=e[0],a=e[1],s=Object(n.useState)(null),j=Object(i.a)(s,2),o=j[0],r=j[1],b=Object(n.useState)([]),u=Object(i.a)(b,2),h=u[0],d=u[1];function O(t){var e=t.target,c=e.name,n=e.value;a((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(f.a)({},c,n))}))}function p(t){var e=t.target,c=e.name,n=e.value;r((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(f.a)({},c,n))}))}var x=h.map((function(t){return Object(l.jsxs)("div",{className:"app-note",children:[Object(l.jsx)("p",{className:"content-item",children:t.content}),Object(l.jsx)("h5",{className:"author-item",children:t.author}),Object(l.jsxs)("p",{children:[Object(l.jsx)("a",{onClick:function(){r(t)},children:"Edit"}),Object(l.jsx)("span",{children:" | "}),Object(l.jsx)("a",{onClick:function(){var e;e=t.id,d((function(t){return t.filter((function(t){return t.id!==e}))}))},children:"Delete"})]})]},t.id)})),g=null;return o&&(g=Object(l.jsx)("div",{className:"app-edit-note",children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d((function(t){return t.map((function(t){return t.id!==o.id?t:o}))})),r(null)},children:[Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{rows:"3",placeholder:"\u0e04\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e2d\u0e22\u0e39\u0e48 . . .",name:"content",value:o.content,onChange:p})}),Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"text",placeholder:"\u0e25\u0e07\u0e0a\u0e37\u0e48\u0e2d",name:"author",value:o.author,onChange:p})}),Object(l.jsx)("p",{children:Object(l.jsx)("button",{type:"submit",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"})})]})})),Object(l.jsxs)("section",{className:"app-section",children:[Object(l.jsxs)("div",{className:"app-container",children:[Object(l.jsx)("h3",{children:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e42\u0e19\u0e4a\u0e15"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===c.content||""===c.author?alert("\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"):(d((function(t){var e=Object(v.a)({},c);return e.id=Date.now().toString(),[e].concat(Object(m.a)(t))})),a(N))},children:[Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{rows:"3",placeholder:"\u0e04\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e2d\u0e22\u0e39\u0e48",name:"content",value:c.content,onChange:O})}),Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"text",placeholder:"\u0e25\u0e07\u0e0a\u0e37\u0e48\u0e2d",name:"author",value:c.author,onChange:O})}),Object(l.jsx)("p",{children:Object(l.jsx)("button",{type:"submit",children:"\u0e40\u0e1e\u0e34\u0e48\u0e21"})})]}),Object(l.jsx)("div",{className:"app-notes",children:x})]}),g]})},C=function(){var t=Object(n.useState)({home:"/",todolist:"/todolist"}),e=Object(i.a)(t,2),c=e[0];e[1];return Object(l.jsxs)("div",{className:"box",children:[Object(l.jsxs)("aside",{className:"aside",children:[Object(l.jsx)("ul",{className:"aside-links",children:Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:c.home,className:"aside-item",children:"Min199x"})})}),Object(l.jsx)("ul",{className:"exam-links",children:Object(l.jsx)("li",{children:Object(l.jsxs)(j.b,{to:c.todolist,className:"exam-item",children:["Project 01 ",Object(l.jsx)("a",{children:"React State & Object"})]})})})]}),Object(l.jsx)("content",{className:"content",children:Object(l.jsx)(g,{})})]})},w=(c(46),function(){return Object(l.jsx)("div",{className:"error404",children:Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Page not found 404"})})})}),y=c(2),k=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(j.a,{children:Object(l.jsxs)(y.c,{children:[Object(l.jsx)(y.a,{exact:!0,path:"/",component:p}),Object(l.jsx)(y.a,{exact:!0,path:"/react2012",component:p}),Object(l.jsx)(y.a,{path:"/contact",component:x}),Object(l.jsx)(y.a,{path:"/projects",component:C}),Object(l.jsx)(y.a,{path:"/todolist",component:g}),Object(l.jsx)(y.a,{component:w})]})})})};s.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.820121db.chunk.js.map
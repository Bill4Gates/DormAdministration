(this["webpackJsonpreact-dorm-administration"]=this["webpackJsonpreact-dorm-administration"]||[]).push([[0],{15:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Task__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__),Tasks=function Tasks(_ref){var tasks=_ref.tasks,id=_ref.id,tag1=_ref.tag1,tag2=_ref.tag2,tag3=_ref.tag3,tag4=_ref.tag4,tag5=_ref.tag5,titleTag1=_ref.titleTag1,titleTag2=_ref.titleTag2,titleTag3=_ref.titleTag3,titleTag4=_ref.titleTag4,link=_ref.link,inputData=_ref.inputData,onOpen=_ref.onOpen,onDelete=_ref.onDelete,onToggle=_ref.onToggle;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:tasks.filter((function(task){return""===inputData.text1&&""===inputData.text2&&""===inputData.text3&&""===inputData.text4||eval("task."+tag1).toLowerCase().includes(inputData.text1.toLowerCase())&&eval("task."+tag2).toLowerCase().includes(inputData.text2.toLowerCase())&&eval("task."+tag3).toLowerCase().includes(inputData.text3.toLowerCase())&&eval("task."+tag4).toLowerCase().includes(inputData.text4.toLowerCase())?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_0__.a,{id:eval("task."+id),task:task,tag1:eval("task."+tag1),tag2:eval("task."+tag2),tag3:eval("task."+tag3),tag4:eval("task."+tag4),tag5:eval("task."+tag5),titleTag1:titleTag1,titleTag2:titleTag2,titleTag3:titleTag3,titleTag4:titleTag4,link:link,onDelete:onDelete,onOpen:onOpen,onToggle:onToggle},eval("task."+id)):void 0})).map((function(task){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_0__.a,{id:eval("task."+id),task:task,tag1:eval("task."+tag1),tag2:eval("task."+tag2),tag3:eval("task."+tag3),tag4:eval("task."+tag4),tag5:eval("task."+tag5),titleTag1:titleTag1,titleTag2:titleTag2,titleTag3:titleTag3,titleTag4:titleTag4,link:link,onDelete:onDelete,onOpen:onOpen,onToggle:onToggle},eval("task."+id))}))})};__webpack_exports__.a=Tasks},21:function(t,e,a){"use strict";var n=a(12),r=a(19),c=a(0),s=function(t){var e=t.id,a=t.tag1,s=t.tag2,i=t.tag3,o=t.tag4,l=t.tag5,u=t.titleTag1,j=t.titleTag2,b=t.titleTag3,d=t.titleTag4,O=t.link,x=t.onDelete,p=t.onOpen,m=t.onToggle;return Object(c.jsxs)("div",{className:"task ".concat(l?"details":""),onDoubleClick:function(){return m(e)},children:[Object(c.jsxs)("h3",{children:[u,a,Object(c.jsx)(r.c,{onClick:function(){return x(e)},style:{color:"#CC1C1C"}})]}),Object(c.jsxs)("section",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[j,s]}),Object(c.jsxs)("p",{children:[b,i]}),Object(c.jsxs)("p",{children:[d,o]})]}),Object(c.jsx)("div",{children:Object(c.jsx)(n.b,{to:O,children:Object(c.jsx)(r.b,{onClick:function(){return p(e)},style:{color:"#007AF3",marginTop:"52px"}})})})]})]})};s.defaultProps={titleTag1:"Title",link:"/"},e.a=s},41:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(35),s=a.n(c),i=(a(41),a(12)),o=a(4),l=a(3),u=a.n(l),j=a(5),b=a(2),d=a(7),O=a.n(d),x=a(0),p=function(t){var e=t.text,a=t.color,n=t.onShow;return Object(x.jsx)("button",{onClick:n,style:{backgroundColor:a},className:"btn",children:e})};p.defaultProps={text:"Add"};var m=p,f=a(19),g=function(t){var e=t.color,a=t.onFilter;t.showFilter;return Object(x.jsx)(f.a,{className:"filter-icon",style:{backgroundColor:e},onClick:a})},h=function(t){var e=t.title,a=t.text,n=t.color,r=t.onShow,c=t.showAdd,s=t.onFilter,i=t.showFilter,l=Object(o.f)();return Object(x.jsx)("div",{children:Object(x.jsxs)("header",{className:"header",children:[Object(x.jsx)("h1",{children:e}),"/DormAdministration/"!==l.pathname&&"/register"!==l.pathname&&"/404"!==l.pathname&&Object(x.jsx)(g,{color:i?"#CC1C1C":n,onFilter:s}),"/404"!==l.pathname&&Object(x.jsx)(m,{text:c?"Close":a,color:c?"#CC1C1C":n,onShow:r})]})})};h.defaultProps={title:"Title",color:"#007AF3"};var v,_=h,T=function(){return Object(x.jsx)("footer",{children:Object(x.jsx)("p",{children:"Copyright \xa9 2021 Dorm Administration. All rights reserved."})})},k=function(){var t=Object(n.useState)([]),e=Object(b.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(""),s=Object(b.a)(c,2),i=s[0],l=s[1],d=Object(n.useState)(""),p=Object(b.a)(d,2),m=p[0],f=p[1],g=Object(o.e)(),h=Object(n.useCallback)((function(){return g.push("/register")}),[g]),k=Object(n.useCallback)((function(){return g.push("/dorm")}),[g]);Object(n.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var D=function(){var t=Object(j.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://60ec737ea78dc700178adb52.mockapi.io/api/users");case 2:return e=t.sent,t.next=5,e.data;case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(_,{title:"Login",text:"Register",color:"#111",onShow:function(){h()}}),Object(x.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),""!==i?""!==m?a.find((function(t){return t.Username===i}))?a.find((function(t){return t.Password===m}))?(v=i,k(),l(""),f("")):(alert("Password Incorrect"),f("")):(alert("Username Incorrect"),l("")):alert("Password is empty"):alert("Username is empty")},children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Username"}),Object(x.jsx)("input",{type:"text",value:i,onChange:function(t){return l(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",value:m,onChange:function(t){return f(t.target.value)}})]}),Object(x.jsx)("input",{type:"submit",value:"Login",className:"btn btn-block"})]}),Object(x.jsx)(T,{})]})},D=function(){var t=Object(n.useState)(""),e=Object(b.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(""),s=Object(b.a)(c,2),i=s[0],l=s[1],d=Object(n.useState)(""),p=Object(b.a)(d,2),m=p[0],f=p[1],g=Object(o.e)(),h=Object(n.useCallback)((function(){return g.push("/DormAdministration")}),[g]),v=Object(n.useCallback)((function(){return g.push("/dorm")}),[g]),k=function(){var t=Object(j.a)(u.a.mark((function t(e){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a={}).Username=e.username,a.Email=e.email,a.Password=e.password,t.next=6,O.a.post("https://60ec737ea78dc700178adb52.mockapi.io/api/users/",a);case 6:return n=t.sent,t.next=9,n.data;case 9:r=t.sent,console.log(r);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(_,{title:"Register",text:"Login",color:"#111",onShow:function(){h()}}),Object(x.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),""!==a?""!==i?""!==m?(v(),k({username:a,email:i,password:m}),r(""),l(""),f("")):alert("Password is empty"):alert("Email is empty"):alert("Username is empty")},children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Username"}),Object(x.jsx)("input",{type:"text",value:a,onChange:function(t){return r(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)("input",{type:"text",value:i,onChange:function(t){return l(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{type:"password",value:m,onChange:function(t){return f(t.target.value)}})]}),Object(x.jsx)("input",{type:"submit",value:"Register",className:"btn btn-block"})]}),Object(x.jsx)(T,{})]})},C=a(13),w=a(16),S=function(t){var e=t.title;return Object(x.jsxs)("div",{className:"user-data",children:[Object(x.jsx)("p",{children:e}),Object(x.jsx)(i.b,{to:"/DormAdministration",style:{textDecoration:"none",color:"#111"},children:Object(x.jsx)("p",{children:"Log out"})})]})};S.defaultProps={title:"Username"};var y=S,N=a(15),E=function(t){var e=t.titleTag1,a=t.titleTag2,r=t.titleTag3,c=t.titleTag4,s=t.onAdd,i=Object(n.useState)(""),o=Object(b.a)(i,2),l=o[0],u=o[1],j=Object(n.useState)(""),d=Object(b.a)(j,2),O=d[0],p=d[1],m=Object(n.useState)(""),f=Object(b.a)(m,2),g=f[0],h=f[1],v=Object(n.useState)(""),_=Object(b.a)(v,2),T=_[0],k=_[1];return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h3",{children:["Add ",e]}),Object(x.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),l?O?g?T?(s({text1:l,text2:O,text3:g,text4:T}),u(""),p(""),h(""),k("")):alert("Please add a "+c):alert("Please add a "+r):alert("Please add a "+a):alert("Please add a "+e)},children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:e}),Object(x.jsx)("input",{type:"text",value:l,onChange:function(t){return u(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:a}),Object(x.jsx)("input",{type:"text",value:O,onChange:function(t){return p(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:r}),Object(x.jsx)("input",{type:"text",value:g,onChange:function(t){return h(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:c}),Object(x.jsx)("input",{type:"text",value:T,onChange:function(t){return k(t.target.value)}})]}),Object(x.jsx)("input",{type:"submit",value:"Save",className:"btn btn-block"})]})]})};E.defaultProps={titleTag1:"Title",titleTag2:"Title",titleTag3:"Title",titleTag4:"Title"};var F,P,A=E,L=function(){var t=Object(n.useState)(!1),e=Object(b.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),i=s[0],o=s[1],l=Object(n.useState)([]),d=Object(b.a)(l,2),p=d[0],m=d[1],f=Object(n.useState)(""),g=Object(b.a)(f,2),h=g[0],k=g[1],D=Object(n.useState)(""),S=Object(b.a)(D,2),E=S[0],P=S[1],L=Object(n.useState)(""),I=Object(b.a)(L,2),R=I[0],M=I[1],U=Object(n.useState)(""),B=Object(b.a)(U,2),K=B[0],W=B[1],q={text1:h,text2:E,text3:R,text4:K};Object(n.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J();case 2:e=t.sent,m(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var J=function(){var t=Object(j.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://60ec737ea78dc700178adb52.mockapi.io/api/camin/");case 2:return e=t.sent,t.next=5,e.data;case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=Object(j.a)(u.a.mark((function t(e){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a={}).Numar=e.text1,a.Admin=e.text2,a.Location=e.text3,a.Floors=e.text4,t.next=7,O.a.post("https://60ec737ea78dc700178adb52.mockapi.io/api/camin/",a);case 7:return n=t.sent,t.next=10,n.data;case 10:r=t.sent,m([].concat(Object(w.a)(p),[r]));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete("https://60ec737ea78dc700178adb52.mockapi.io/api/camin/".concat(e));case 2:m(p.filter((function(t){return t.ID_Camin!==e})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(y,{title:v}),Object(x.jsx)(_,{title:"Dorms",text:"Add Dorm",onShow:function(){r(!a),o(!1)},showAdd:a,onFilter:function(){o(!i),r(!1)},showFilter:i}),i&&Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Filters"}),Object(x.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),k(""),P(""),M(""),W("")},children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Dorm"}),Object(x.jsx)("input",{type:"number",min:"1",value:h,onChange:function(t){return k(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Administrator"}),Object(x.jsx)("input",{type:"text",value:E,onChange:function(t){return P(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Location"}),Object(x.jsx)("input",{type:"text",value:R,onChange:function(t){return M(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Floors"}),Object(x.jsx)("input",{type:"number",min:"1",value:K,onChange:function(t){return W(t.target.value)}})]}),Object(x.jsx)("input",{type:"submit",value:"Clear",className:"btn btn-block"})]})]}),a&&Object(x.jsx)(A,{titleTag1:"Dorm",titleTag2:"Administrator",titleTag3:"Location",titleTag4:"Floors",onAdd:G}),p.length>0?Object(x.jsx)(N.a,{tasks:p,id:"ID_Camin",tag1:"Numar",titleTag1:"Dorm ",tag2:"Admin",titleTag2:"Administrator: ",tag3:"Location",titleTag3:"Location: ",tag4:"Floors",titleTag4:"Floors: ",tag5:"Details",link:"/dorm/room",inputData:q,onOpen:function(t){F=t},onDelete:z,onToggle:function(t){m(p.map((function(e){return e.ID_Camin===t?Object(C.a)(Object(C.a)({},e),{},{Details:!e.Details}):e})))}}):"No Dorms To Show",Object(x.jsx)(T,{})]})},I=function(){var t=Object(n.useState)(!1),e=Object(b.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),i=s[0],o=s[1],l=Object(n.useState)([]),d=Object(b.a)(l,2),p=d[0],m=d[1],f=Object(n.useState)(""),g=Object(b.a)(f,2),h=g[0],k=g[1],D=Object(n.useState)(""),S=Object(b.a)(D,2),E=S[0],L=S[1],I=Object(n.useState)(""),R=Object(b.a)(I,2),M=R[0],U=R[1],B=Object(n.useState)(""),K=Object(b.a)(B,2),W=K[0],q=K[1],J={text1:h,text2:E,text3:M,text4:W};Object(n.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:e=t.sent,m(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var G=function(){var t=Object(j.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://60ec737ea78dc700178adb52.mockapi.io/api/camin/".concat(F,"/camera/"));case 2:return e=t.sent,t.next=5,e.data;case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(j.a)(u.a.mark((function t(e){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a={}).NumarCamera=e.text1,a.Etaj=e.text2,a.NrLocuri=e.text3,a.TipCamera=e.text4,t.next=7,O.a.post("https://60ec737ea78dc700178adb52.mockapi.io/api/camin/".concat(F,"/camera/"),a);case 7:return n=t.sent,t.next=10,n.data;case 10:r=t.sent,m([].concat(Object(w.a)(p),[r]));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete("https://60ec737ea78dc700178adb52.mockapi.io/api/camin/".concat(F,"/camera/").concat(e));case 2:m(p.filter((function(t){return t.ID_Camera!==e})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(y,{title:v}),Object(x.jsx)(_,{title:"Rooms",text:"Add Room",onShow:function(){r(!a),o(!1)},showAdd:a,onFilter:function(){o(!i),r(!1)},showFilter:i}),i&&Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Filters"}),Object(x.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),k(""),L(""),U(""),q("")},children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Room"}),Object(x.jsx)("input",{type:"number",min:"1",value:h,onChange:function(t){return k(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Floor"}),Object(x.jsx)("input",{type:"number",min:"1",value:E,onChange:function(t){return L(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Beds"}),Object(x.jsx)("input",{type:"number",min:"1",value:M,onChange:function(t){return U(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Room type"}),Object(x.jsx)("input",{type:"text",value:W,onChange:function(t){return q(t.target.value)}})]}),Object(x.jsx)("input",{type:"submit",value:"Clear",className:"btn btn-block"})]})]}),a&&Object(x.jsx)(A,{titleTag1:"Room",titleTag2:"Floor",titleTag3:"Beds",titleTag4:"Room type",onAdd:z}),p.length>0?Object(x.jsx)(N.a,{tasks:p,id:"ID_Camera",tag1:"NumarCamera",titleTag1:"Room ",tag2:"Etaj",titleTag2:"Floor: ",tag3:"NrLocuri",titleTag3:"Beds: ",tag4:"TipCamera",titleTag4:"Room type: ",tag5:"Details",link:"/dorm/room/student",inputData:J,onOpen:function(t){P=t},onDelete:H,onToggle:function(t){m(p.map((function(e){return e.ID_Camera===t?Object(C.a)(Object(C.a)({},e),{},{Details:!e.Details}):e})))}}):"No Rooms To Show",Object(x.jsx)(T,{})]})},R=function(){var t=Object(n.useState)(!1),e=Object(b.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(!1),s=Object(b.a)(c,2),i=s[0],o=s[1],l=Object(n.useState)([]),d=Object(b.a)(l,2),p=d[0],m=d[1],f=Object(n.useState)(""),g=Object(b.a)(f,2),h=g[0],k=g[1],D=Object(n.useState)(""),S=Object(b.a)(D,2),E=S[0],L=S[1],I=Object(n.useState)(""),R=Object(b.a)(I,2),M=R[0],U=R[1],B=Object(n.useState)(""),K=Object(b.a)(B,2),W=K[0],q=K[1],J={text1:h,text2:E,text3:M,text4:W};Object(n.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:e=t.sent,m(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var G=function(){var t=Object(j.a)(u.a.mark((function t(){var e,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://60ec737ea78dc700178adb52.mockapi.io/api/camin/".concat(F,"/camera/").concat(P,"/student"));case 2:return e=t.sent,t.next=5,e.data;case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(j.a)(u.a.mark((function t(e){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a={}).Nume=e.text1,a.Sex=e.text2,a.Facultate=e.text3,a.FormaFinantare=e.text4,t.next=7,O.a.post("https://60ec737ea78dc700178adb52.mockapi.io/api/camin/".concat(F,"/camera/").concat(P,"/student"),a);case 7:return n=t.sent,t.next=10,n.data;case 10:r=t.sent,m([].concat(Object(w.a)(p),[r]));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(j.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete("https://60ec737ea78dc700178adb52.mockapi.io/api/camin/".concat(F,"/camera/").concat(P,"/student/").concat(e));case 2:m(p.filter((function(t){return t.ID_Student!==e})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(y,{title:v}),Object(x.jsx)(_,{title:"Student",text:"Add Student",onShow:function(){r(!a),o(!1)},showAdd:a,onFilter:function(){o(!i),r(!1)},showFilter:i}),i&&Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Filters"}),Object(x.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),k(""),L(""),U(""),q("")},children:[Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Name"}),Object(x.jsx)("input",{type:"text",value:h,onChange:function(t){return k(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Sex"}),Object(x.jsx)("input",{type:"text",value:E,onChange:function(t){return L(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"Faculty"}),Object(x.jsx)("input",{type:"text",value:M,onChange:function(t){return U(t.target.value)}})]}),Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("label",{children:"State/Tax"}),Object(x.jsx)("input",{type:"text",value:W,onChange:function(t){return q(t.target.value)}})]}),Object(x.jsx)("input",{type:"submit",value:"Clear",className:"btn btn-block"})]})]}),a&&Object(x.jsx)(A,{titleTag1:"Student",titleTag2:"Sex",titleTag3:"Faculty",titleTag4:"State/Tax",onAdd:z}),p.length>0?Object(x.jsx)(N.a,{tasks:p,id:"ID_Student",tag1:"Nume",titleTag1:"",tag2:"Sex",titleTag2:"Sex: ",tag3:"Facultate",titleTag3:"Faculty: ",tag4:"FormaFinantare",titleTag4:"State/Tax: ",tag5:"Details",link:"/404",inputData:J,onOpen:function(t){t},onDelete:H,onToggle:function(t){m(p.map((function(e){return e.ID_Student===t?Object(C.a)(Object(C.a)({},e),{},{Details:!e.Details}):e})))}}):"No Students To Show",Object(x.jsx)(T,{})]})},M=function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(_,{title:"404"}),Object(x.jsx)("h4",{children:"Page Not Found"}),Object(x.jsx)(i.b,{to:"/dorm/room/student",children:"Go Back"}),Object(x.jsx)(T,{})]})};var U=function(){return Object(x.jsxs)(i.a,{children:[Object(x.jsx)(o.a,{path:"/DormAdministration",exact:!0,component:k}),Object(x.jsx)(o.a,{path:"/register",exact:!0,component:D}),Object(x.jsx)(o.a,{path:"/dorm",exact:!0,component:L}),Object(x.jsx)(o.a,{path:"/dorm/room",exact:!0,component:I}),Object(x.jsx)(o.a,{path:"/dorm/room/student",exact:!0,component:R}),Object(x.jsx)(o.a,{path:"/404",exact:!0,component:M})]})},B=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),n(t),r(t),c(t),s(t)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root")),B()}},[[67,1,2]]]);
//# sourceMappingURL=main.a46bf59f.chunk.js.map
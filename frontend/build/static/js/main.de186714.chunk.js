(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),r=n.n(c),o=(n(13),n(14),n(2)),s=n.n(o),i=n(3),l=n(5),d=n(4),u=(n(16),n(0)),j=function(){var e=Object(a.useState)({name:"",numberplate:"",routerid:"",locationzone:""}),t=Object(d.a)(e,2),n=t[0],c=t[1];function r(e){var t=Object(l.a)({},n);t[e.target.id]=e.target.value,c(t)}var o=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={data:n},e.next=5,fetch("/taxi",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 5:e.sent,window.location="/",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("h1",{className:"text-center mt-5",children:"SebenzaWifi Taxi dashboard"}),Object(u.jsx)("h2",{children:"Add new Taxi information"}),Object(u.jsxs)("form",{className:"d-flex mt-5",onSubmit:o,children:[Object(u.jsxs)("div",{id:"form",children:[Object(u.jsxs)("label",{children:["Full name",Object(u.jsx)("input",{id:"name",maxLength:"50",type:"text",required:!0,placeholder:"Full Name",className:"form-control",value:n.name,onChange:function(e){return r(e)}})]}),Object(u.jsxs)("label",{children:[" number plate",Object(u.jsx)("input",{id:"numberplate",maxLength:"9",type:"text",required:!0,placeholder:"Number plate",className:"form-control",value:n.numberplate,onChange:function(e){return r(e)}})]}),Object(u.jsxs)("label",{children:[" Router ID",Object(u.jsx)("input",{id:"routerid",maxLength:"10",type:"text",required:!0,placeholder:"Router ID",className:"form-control",value:n.routerid,onChange:function(e){return r(e)}})]}),Object(u.jsxs)("label",{children:[" Location zone",Object(u.jsx)("input",{id:"locationzone",maxLength:"50",type:"text",required:!0,placeholder:"Location zone",className:"form-control",value:n.locationzone,onChange:function(e){return r(e)}})]})]}),Object(u.jsx)("button",{onSubmit:o,className:"btn btn-success",children:"Add"})]}),"\xa0"]})},b=n(6),h=(n(18),function(e){var t=e.taxis,n=Object(a.useState)({name:t.name,numberplate:t.numberplate,routerid:t.routerid,locationzone:t.locationzone}),c=Object(d.a)(n,2),r=c[0],o=c[1];function j(e){Object(l.a)({},r);o(Object(l.a)(Object(l.a)({},r),{},Object(b.a)({},e.target.id,e.target.value)))}var h=function(){var e=Object(i.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log("edit on submit form=new location: "+r.locationzone),e.prev=2,a={data:r},e.next=6,fetch("/taxi/".concat(t.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 6:e.sent,console.log(r),window.location="/",e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("button",{type:"button",className:"btn btn-warning","data-bs-toggle":"modal","data-bs-target":"#id".concat(t.id),children:"Edit"}),Object(u.jsx)("div",{id:"id".concat(t.id),className:"modal fade",children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("button",{type:"button",className:"close","data-bs-dismiss":"modal",children:"\xd7"}),Object(u.jsx)("h4",{className:"modal-title",children:"Edit Taxi name"})]}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsxs)("label",{children:["Name",Object(u.jsx)("input",{id:"name",type:"text",maxLength:"50",required:!0,className:"form-control",defaultValue:t.name,onChange:function(e){return j(e)}})]}),Object(u.jsxs)("label",{children:["Number plate",Object(u.jsx)("input",{id:"numberplate",type:"text",maxLength:"9",required:!0,className:"form-control",defaultValue:t.numberplate,onChange:function(e){return j(e)}})]}),Object(u.jsxs)("label",{children:["Router ID",Object(u.jsx)("input",{id:"routerid",type:"text",maxLength:"10",required:!0,className:"form-control",defaultValue:t.routerid,onChange:function(e){return j(e)}})]}),Object(u.jsxs)("label",{children:["Location",Object(u.jsx)("input",{id:"locationzone",type:"text",maxLength:"50",required:!0,className:"form-control",defaultValue:t.locationzone,onChange:function(e){return j(e)}})]})]}),Object(u.jsxs)("div",{class:"modal-footer",children:[Object(u.jsx)("button",{type:"button",className:"btn btn-warning","data-bs-dismiss":"modal",onClick:function(e){return h(e)},children:"Edit"}),Object(u.jsx)("button",{type:"button",className:"btn btn-default","data-bs-dismiss":"modal",children:"Close"})]})]})})})]})}),m=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/taxi/".concat(t),{method:"DELETE"});case 3:e.sent,c(n.filter((function(e){return e.id!==t}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/taxi");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)("h2",{children:"List of taxi drivers"}),Object(u.jsxs)("table",{className:"table mt-5 text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Full name"}),Object(u.jsx)("th",{children:"Number plate"}),Object(u.jsx)("th",{children:"Router ID"}),Object(u.jsx)("th",{children:"Location"}),Object(u.jsx)("th",{children:"Edit"}),Object(u.jsx)("th",{children:"Delete"})]})}),Object(u.jsx)("tbody",{children:n.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.numberplate}),Object(u.jsx)("td",{children:e.routerid}),Object(u.jsx)("td",{children:e.locationzone}),Object(u.jsx)("td",{children:Object(u.jsx)(h,{taxis:e})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return r(e.id)},children:"Delete"})})]},e.id)}))})]})]})};var x=function(){return Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{}),Object(u.jsx)(m,{})]})})};r.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.de186714.chunk.js.map
(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(22),a=n(6),r=n(4),s=n(0);function i(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var o=n(3),j={people:[],findPersonFather:function(){},findPersonMother:function(){},isLoading:!1,setIsLoading:function(){},setIsPageActive:function(){},error:null},l=function(e,t){var n=e.find((function(e){return e.name===t.fatherName}));return null===n||void 0===n?void 0:n.slug},d=function(e,t){var n=e.find((function(e){return e.name===t.motherName}));return null===n||void 0===n?void 0:n.slug},b=Object(s.createContext)(j),h=function(e){var t=e.children,n=Object(s.useState)([]),c=Object(r.a)(n,2),a=c[0],j=c[1],h=Object(s.useState)(!1),u=Object(r.a)(h,2),O=u[0],x=u[1],p=Object(s.useState)(!1),f=Object(r.a)(p,2),m=f[0],v=f[1],g=Object(s.useState)(null),N=Object(r.a)(g,2),y=N[0],P=N[1];return Object(s.useEffect)((function(){x(!0),i().then(j).catch((function(){P("Something went wrong")})).finally((function(){x(!1)}))}),[m]),Object(o.jsx)(b.Provider,{value:{people:a,findPersonFather:l,findPersonMother:d,isLoading:O,setIsLoading:x,setIsPageActive:v,error:y},children:t})},u=(n(32),n(33),n(2)),O=(n(34),n(10)),x=n.n(O),p=function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},f=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{to:"/",className:p,children:"Home"}),Object(o.jsx)(a.c,{to:"/people",className:p,children:"People"})]})})})},m=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},v=function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})},g=(n(35),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),N=function(e){var t=e.person;return Object(o.jsx)(a.b,{to:"".concat(null===t||void 0===t?void 0:t.slug),className:x()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:null===t||void 0===t?void 0:t.name})},y=function(e){var t=e.people,n=Object(u.q)().slug;function c(e){return t.find((function(t){return t.name===e}))}return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){var t=c(e.fatherName),a=c(e.motherName);return Object(o.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":e.slug===n}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(N,{person:e})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:a?Object(o.jsx)(N,{person:a}):e.motherName||"-"}),Object(o.jsx)("td",{children:t?Object(o.jsx)(N,{person:t}):e.fatherName||"-"})]},e.slug)}))})]})},P=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(r.a)(a,2),j=i[0],l=i[1],d=Object(s.useState)(!1),b=Object(r.a)(d,2),h=b[0],u=b[1];Object(s.useEffect)((function(){l(!0),fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then(c).catch((function(){u(!0)})).finally((function(){l(!1)}))}),[]);var O=!h&&!j&&!n.length;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[j&&Object(o.jsx)(g,{}),h&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),O&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),n.length>0&&Object(o.jsx)(y,{people:n})]})})]})},w=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(f,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(u.d,{children:[Object(o.jsx)(u.b,{path:"/",element:Object(o.jsx)(m,{})}),Object(o.jsx)(u.b,{path:"/home",element:Object(o.jsx)(u.a,{to:"/",replace:!0})}),Object(o.jsx)(u.b,{path:"/people",element:Object(o.jsx)(P,{}),children:Object(o.jsx)(u.b,{path:":slug"})}),Object(o.jsx)(u.b,{path:"*",element:Object(o.jsx)(v,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(h,{children:Object(o.jsx)(w,{})})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.3906727a.chunk.js.map
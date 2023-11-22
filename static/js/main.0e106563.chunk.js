(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(22),r=n(10),a=n(4),s=n(0);function i(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var o=n(3),j={people:[],findPersonFather:function(){},findPersonMother:function(){},isLoading:!1,setIsLoading:function(){},setIsPageActive:function(){},error:null},l=function(e,t){var n=e.find((function(e){return e.name===t.fatherName}));return null===n||void 0===n?void 0:n.slug},d=function(e,t){var n=e.find((function(e){return e.name===t.motherName}));return null===n||void 0===n?void 0:n.slug},h=Object(s.createContext)(j),b=function(e){var t=e.children,n=Object(s.useState)([]),c=Object(a.a)(n,2),r=c[0],j=c[1],b=Object(s.useState)(!1),u=Object(a.a)(b,2),O=u[0],x=u[1],p=Object(s.useState)(!1),m=Object(a.a)(p,2),f=m[0],v=m[1],g=Object(s.useState)(null),N=Object(a.a)(g,2),P=N[0],y=N[1];return Object(s.useEffect)((function(){x(!0),i().then((function(e){j(e)})).catch((function(){y("Something went wrong")})).finally((function(){x(!1)}))}),[f]),Object(o.jsx)(h.Provider,{value:{people:r,findPersonFather:l,findPersonMother:d,isLoading:O,setIsLoading:x,setIsPageActive:v,error:P},children:t})},u=(n(32),n(33),n(2)),O=(n(34),function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),x=n(12),p=n.n(x),m=function(e){var t=e.person,n=Object(u.q)().personSlug,c=Object(s.useContext)(h),r=c.findPersonFather,a=c.findPersonMother,i=c.people;return Object(o.jsxs)("tr",{"data-cy":"person",className:p()("",{"has-background-warning":n===t.slug}),children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/".concat(t.slug),className:p()("",{"has-text-danger":"f"===t.sex}),children:t.name})}),Object(o.jsx)("td",{children:t.sex}),Object(o.jsx)("td",{children:t.born}),Object(o.jsx)("td",{children:t.died}),a(i,t)?Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/".concat(a(i,t)),className:"has-text-danger",children:t.motherName})}):Object(o.jsx)("td",{children:t.motherName?t.motherName:"-"}),r(i,t)?Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"#/people/".concat(r(i,t)),children:t.fatherName})}):Object(o.jsx)("td",{children:t.fatherName?t.fatherName:"-"})]})},f=function(){var e=Object(s.useContext)(h).people;return Object(o.jsx)("tbody",{children:null===e||void 0===e?void 0:e.map((function(e){return Object(o.jsx)(m,{person:e},e.slug)}))})},v=(n(35),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),g=function(){var e=Object(s.useContext)(h),t=e.isLoading,n=e.error,c=e.people;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[n&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!t&&0===c.length&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),t&&!n?Object(o.jsx)(v,{}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)(f,{})]})})]})})]})},N=function(e){var t=e.isActive;return p()("navbar-item",{"has-background-grey-lighter":t})},P=function(){var e=Object(s.useContext)(h).setIsPageActive;return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(r.b,{className:N,to:"/",onClick:function(){return e(!1)},children:"Home"}),Object(o.jsx)(r.b,{className:N,to:"/people",onClick:function(){return e(!0)},children:"People"})]})})}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(u.d,{children:[Object(o.jsx)(u.b,{path:"/",element:Object(o.jsx)(O,{})}),Object(o.jsx)(u.b,{path:"/people",element:Object(o.jsx)(g,{}),children:Object(o.jsx)(u.b,{path:":personSlug?"})}),Object(o.jsx)(u.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})}),Object(o.jsx)(u.b,{path:"home",element:Object(o.jsx)(u.a,{to:"/"})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(o.jsx)(r.a,{children:Object(o.jsx)(b,{children:Object(o.jsx)(P,{})})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.0e106563.chunk.js.map
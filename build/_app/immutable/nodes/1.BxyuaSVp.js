import{u as v,k as o,m as h,i as $,r as x,b as I,l as c,d as y,n as b,t as k,a as f,e as E,s as l}from"../chunks/disclose-version.yqNkPQFL.js";import{n as a,g as N,U as p,u as U,s as g,p as w,a as A}from"../chunks/runtime.Bd7Y9sb8.js";import{s as D}from"../chunks/entry.C2iu3dEs.js";function L(s,n,t){if(s==null)return n(void 0),t&&t(void 0),a;const e=s.subscribe(n,t);return e.unsubscribe?()=>e.unsubscribe():e}function S(s,n,t){let e=t[n];const r=e===void 0;r&&(e={store:null,last_value:null,value:h(p),unsubscribe:a},t[n]=e),(r||e.store!==s)&&(e.unsubscribe(),e.store=s??null,e.unsubscribe=T(s,e.value));const u=N(e.value);return u===p?e.last_value:u}function T(s,n){return s==null?(o(n,void 0),a):L(s,e=>{g(!0),o(n,e),g(!1)})}function Z(s){j(()=>{let n;for(n in s)s[n].unsubscribe()})}function j(s){v(()=>()=>U(s))}const q=()=>{const s=D;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},z={subscribe(s){return q().page.subscribe(s)}};var B=k("<h1> </h1> <p> </p>",!0);function H(s,n){A(n,!1);const t={};Z(t);const e=()=>S(z,"$page",t);$();var r=y(s,!0,B),u=E(r),_=b(f(u)),d=l(l(u,!0)),m=b(f(d));x(()=>{var i;c(_,e().status),c(m,(i=e().error)==null?void 0:i.message)}),I(s,r),w()}export{H as component};

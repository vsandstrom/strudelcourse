import{m as g,r as le,D as B,q as T,R as F,M as w,v as d,E as V,w as xe,P as fe,x as ue,y as Y,z as q,C as M,A as Ne,B as Ce,F as L,G as oe,H as W,J as Se,K as z,L as Re,f as N,N as Ae,c as k,O as G,k as C,Q as Ie,U as Oe,T as Le,V as ke,W as De,X as Pe,j as $,g as O,Y as ce,a as Be,p as Fe,Z as Ve,d as j,_ as P,u as ie,$ as Me,l as $e,S as Ue}from"./runtime.Bd7Y9sb8.js";function ae(e,n){const t=e.r;t===null?e.r=[n]:t.push(n)}function x(e,n,t,r,s){const l={b:r,c:null,d:null,e:null,f:e|B,l:0,i:n,r:null,v:null,w:0,x:T,y:null};return d!==null&&(l.l=d.l+1,e&w||ae(d,l)),s&&le(l,t),l}function yn(){return d?(d.f&w)===0:!1}function Z(e){if(d===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=d.f&F&&T!==null&&!T.m,t=x(V,e,!1,g,!n);if(n){const r=T;(r.e??(r.e=[])).push(t)}return t}function J(e){return x(V,e,!1,g,!0)}function He(e){return x(V|w,e,!1,g,!0)}function Ke(e,n){return x(fe|w,e,n,g,!0)}function Ye(e){if(d===null)throw new Error("ERR_SVELTE_ORPHAN_EFFECT");const n=d!==null&&(d.f&F)!==0;return x(fe,()=>{const t=e();return xe(),t},n,g,!0)}function S(e,n=g,t=!1,r=!0){let s=F;return t&&(s|=w),x(s,e,r,n,!0)}function de(e,n){return e===n}function _e(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function pe(e,n){return!_e(e,n)}function qe(e){return{c:null,e:de,f:ue|M,v:e,w:0}}function We(e){var t;const n=qe(e);return n.e=pe,T&&((t=T).d??(t.d=[])).push(n),n}function ze(e,n){if(!Ce&&!q&&L!==null&&Y(null)&&L.f&oe)throw new Error("ERR_SVELTE_UNSAFE_MUTATION");return e.f&ue&&!e.e(n,e.v)&&(e.v=n,e.w++,Y(null)&&!q&&d!==null&&d.c===null&&d.f&M&&!(d.f&w)&&(z!==null&&z.includes(e)?(Re(d,B),le(d,!1)):W===null?Se([e]):W.push(e)),Ne(e,B,!0)),n}var b,I,Q,he,me,U,ge,Ge;function Ee(){b===void 0&&(b=Node.prototype,I=Element.prototype,Q=Text.prototype,he=b.appendChild,me=b.cloneNode,Ge=document,I.__click=void 0,Q.__nodeValue=" ",I.__className="",U=N(b,"firstChild").get,ge=N(b,"nextSibling").get,N(b,"textContent").set,N(I,"className").set)}function X(e,n){he.call(e,n)}function je(e,n){return me.call(e,n)}function E(){return document.createTextNode("")}function Ze(e){const n=U.call(e);if(p)if(n===null){const t=E();return e.appendChild(t),t}else return H(n);return n}function vn(e,n){if(p){const t=e[0];if(n&&(t==null?void 0:t.nodeType)!==3){const r=E();return m.unshift(r),t&&t.parentNode.insertBefore(r,t),r}return t!==null?H(t):t}return U.call(e)}function Tn(e,n=!1){const t=ge.call(e);if(p){if(n&&(t==null?void 0:t.nodeType)!==3){const r=E();if(t){const s=m.indexOf(t);m.splice(s,0,r),t.parentNode.insertBefore(r,t)}else m.push(r);return r}if(t!==null)return H(t)}return t}function H(e){if(e.nodeType===8&&e.data.startsWith("ssr:")&&m[m.length-1]!==e){const n=D(e),r=(n[n.length-1]||e).nextSibling;return r.$$fragment=n,r}return e}let p=!1,m=null;function y(e){p=e!==null,m=e}function D(e,n=!1){const t=[];let r=e,s=null;for(;r!==null;){const l=r.nodeType,o=r.nextSibling;if(l===8){const i=r.data;if(i.startsWith("ssr:")){const a=i.slice(4);if(s===null)s=a;else if(a===s){if(n&&t.length===0){const f=E();t.push(f),r.parentNode.insertBefore(f,r)}return t}else t.push(r);r=o;continue}}s!==null&&t.push(r),r=o}return null}function K(e,n){if(p){let t=e;if(n&&(t=t.firstChild),t.nodeType===8){let r=t.$$fragment;r===void 0?r=D(t):Ae(()=>{t.$$fragment=void 0}),y(r)}else{const r=t.firstChild;y(r===null?[]:[r])}}}function Je(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function Qe(e,n,t){if(k(e)){for(var r=0,s;r<e.length;r++)s=e[r],t===null?X(n,s):t.before(s);return e[0]}else e!==null&&(t===null?X(n,e):t.before(e));return e}function v(e){var n=e;if(k(e))for(var t=0,r;t<e.length;t++)r=e[t],t===0&&(n=r),r.isConnected&&r.remove();else e.isConnected&&e.remove();return n}const Xe=1,en=2,nn=4,tn=8,ee=["touchstart","touchmove","touchend"];function rn(e,n,t){const r=[];for(const s of e){const l=s.r,o=s.e;n==="in"?(l==="in"||l==="both"?s.in():s.c(),s.d.inert=!1,G(o,!1)):n==="key"?l==="key"&&(s.p||(s.p=s.i(t)),s.in()):((l==="out"||l==="both")&&(s.p||(s.p=s.i()),r.push(s.o)),s.d.inert=!0,G(o,!0))}if(r.length>0){const s=Ke(()=>{C(s);const l=He(()=>{C(l),Ie(r)})},!1)}}function sn(e){let n=oe|M;d===null&&(n|=Le);const t={b:g,c:null,d:null,e:de,f:n,i:e,r:null,v:Oe,w:0,x:null,y:null};return L!==null&&ae(L,t),t}function ln(e){return{d:null,e:null,i:e,p:null,r:null,t:ke}}function fn(){return{d:null,e:null,p:g,r:null,t:De}}function un(){return{d:null,e:null,p:g,r:null,t:Pe}}const on=new Set,ne=new Set;function ye(e,n){let t;return()=>{if(t===void 0){const r=Je(e);t=n?r:Ze(r)}return t}}function ve(e,n,t,r){if(p){t!==null&&K(t,!1);const s=m;if(s!==null)return e?s:s[0]}return n?je(r(),!0):document.importNode(r(),!0)}function cn(e,n,t){return ve(!1,n,e,t)}function an(e,n,t){return ve(!0,n,e,t)}const dn=ye(" ",!1),_n=ye("<!>",!0);function bn(e){var n=cn(e,!0,dn);return p&&(n==null?void 0:n.nodeType)!==3&&(n=E(),e.before(n)),n}function wn(e){if(p&&e.nodeType!==3){const n=E();return e.before(n),n}return e}function xn(e){return an(e,!0,_n)}function Te(e,n,t){const r=g,s=n?k(e)?e:Array.from(e.childNodes):e;!p&&t!==null&&Qe(s,null,t),r.d=s}function Nn(e,n){Te(n,!1,e)}function Cn(e,n){Te(n,!0,e)}function Sn(e,n){S(()=>pn(e,n()))}function pn(e,n){const t=e.__nodeValue,r=hn(n);p&&e.nodeValue===r?e.__nodeValue=r:t!==r&&(e.nodeValue=r,e.__nodeValue=r)}function te(e,n){var r;const t=e&&((r=e[Ue])==null?void 0:r.t);return e===n||t===n}function Rn(e,n,t,r){let s,l;const o=J(()=>{s=l,l=(r==null?void 0:r())||[],ie(()=>{e!==t(...l)&&(n(e,...l),s&&te(t(...s),e)&&n(null,...s))})});$(o,()=>{J(()=>{l&&te(t(...l),e)&&n(null,...l)})})}function re(e,n){var a;const t=e.ownerDocument,r=n.type,s=((a=n.composedPath)==null?void 0:a.call(n))||[];let l=s[0]||n.target;n.target!==l&&j(n,"target",{configurable:!0,value:l});let o=0;const i=n.__root;if(i){const f=s.indexOf(i);if(f!==-1&&(e===document||e===window)){n.__root=e;return}const u=s.indexOf(e);if(u===-1)return;f<=u&&(o=f+1)}for(l=s[o]||n.target,j(n,"currentTarget",{configurable:!0,get(){return l||t}});l!==null;){const f=l.parentNode||l.host||null,u="__"+r,c=l[u];if(c!==void 0&&!l.disabled)if(k(c)){const[h,..._]=c;h.apply(l,[n,..._])}else c.call(l,n);if(n.cancelBubble||f===e||l===e)break;l=f}n.__root=e,l=e}function An(e,n,t,r){K(e),n===void 0?r!==null&&r(e):n(e,t)}function In(e){const n=fn();let t=null,r=null,s=p;s&&(t=D(document.head.firstChild),r=m,y(t));try{const l=S(()=>{const o=n.d;o!==null&&(v(o),n.d=null);let i=null;p||(i=E(),document.head.appendChild(i)),e(i)},n,!1);$(l,()=>{const o=n.d;o!==null&&v(o)}),n.e=l}finally{s&&y(r)}}function On(e,n,t){const r=un();let s=null;K(e);let l=null;r.r=f=>{const u=s,c=u.s;c.add(f),f.f(()=>{c.delete(f),c.size===0&&s!==u&&u.e!==null&&(u.d!==null&&(v(u.d),u.d=null),C(u.e),u.e=null)})};const o=()=>{const f={d:null,e:null,s:new Set,p:s},u=S(()=>{const c=r.d;c!==null&&(v(c),r.d=null),l&&t(l),f.d=r.d,r.d=null},r,!0);f.e=u,s=f},i=()=>{const f=s;if(f===null){o();return}const u=f.s;u.size===0?(f.d!==null&&(v(f.d),f.d=null),f.e?$e(f.e):o()):(o(),rn(u,"out"))},a=S(()=>{const f=n();l!==f&&(l=f,i())},r,!1);$(a,()=>{let f=s;for(;f!==null;){const u=f.d;u!==null&&v(u);const c=f.e;c!==null&&C(c),f=f.p}}),r.e=a}function hn(e){return typeof e=="string"?e:e==null?"":e+""}function Ln(e,n,t){t=t==null?null:t+"",(!p||e.getAttribute(n)!==t&&n!=="src"&&n!=="href"&&n!=="srcset")&&(t===null?e.removeAttribute(n):e.setAttribute(n,t))}function mn(e,n){Ee();const t=E();return n.target.appendChild(t),ce(()=>be(e,{...n,anchor:t}),!1)}function kn(e,n){var a,f;Ee();const t=n.target,r=t.firstChild,s=D(r,!0),l=m;y(s);let o=null;s===null&&(o=E(),t.appendChild(o));let i=!1;try{return ce(()=>{const u=be(e,{...n,anchor:o});return y(null),i=!0,u},!1)}catch(u){if(!i&&n.recover!==!1&&s!==null)return console.error("ERR_SVELTE_HYDRATION_MISMATCH",u),v(s),r.remove(),(f=(a=s[s.length-1])==null?void 0:a.nextSibling)==null||f.remove(),y(null),mn(e,n);throw u}finally{y(l)}}function be(e,n){const t=new Set,r=n.target,s=ln(n.intro||!1);let l;const o=S(()=>{n.context&&(Be({}),T.c=n.context),n.props||(n.props={}),n.events&&(n.props.$$events=n.events),l=e(n.anchor,n.props)||{},n.context&&Fe()},s,!0);s.e=o;const i=re.bind(null,r),a=re.bind(null,document),f=u=>{for(let c=0;c<u.length;c++){const h=u[c];t.has(h)||(t.add(h),r.addEventListener(h,i,ee.includes(h)?{passive:!0}:void 0),document.addEventListener(h,a,ee.includes(h)?{passive:!0}:void 0))}};return f(Ve(on)),ne.add(f),we.set(l,()=>{for(const c of t)r.removeEventListener(c,i);ne.delete(f);const u=s.d;u!==null&&v(u),C(s.e)}),l}let we=new WeakMap;function Dn(e){const n=we.get(e);n==null||n()}function Pn(e,n,t,r){var h;var s=(t&Xe)!==0,l=(t&en)!==0,o=e[n],i=(h=N(e,n))==null?void 0:h.set;if(o===void 0&&r!==void 0){if(i&&l)throw new Error("ERR_SVELTE_BINDING_FALLBACK");t&tn&&(r=r()),o=r,i&&i(o)}var a=()=>{var _=e[n];return _!==void 0&&(r=void 0),_===void 0?r:_};if(!(t&nn))return a;if(i)return function(_){return arguments.length===1?(i(_),_):a()};var f=!1,u=We(o),c=sn(()=>{var _=a(),R=O(u);return f?(f=!1,R):u.v=_});return s||(c.e=pe),function(_,R=!1){var A=O(c);return arguments.length>0?((R||(s?_!==A:_e(_,A)))&&(f=!0,ze(u,R?A:_),O(c)),_):A}}function Bn(){const e=T,n=e.u;n&&(n.b.length&&Ye(()=>{se(e),n.b.forEach(P)}),Z(()=>{const t=ie(()=>n.m.map(P));return()=>{for(const r of t)typeof r=="function"&&r()}}),n.a.length&&Z(()=>{se(e),n.a.forEach(P)}))}function se(e){if(e.d)for(const n of e.d)O(n);Me(e.s)}const gn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gn);export{Ge as $,m as A,y as B,kn as C,mn as D,Dn as E,Ye as F,On as G,Sn as H,xn as I,bn as J,Rn as K,Ze as a,Cn as b,Nn as c,an as d,vn as e,Ln as f,hn as g,An as h,Bn as i,In as j,ze as k,pn as l,We as m,wn as n,cn as o,Pn as p,qe as q,S as r,Tn as s,ye as t,Z as u,yn as v,v as w,K as x,rn as y,p as z};

"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{154:(y,v,a)=>{a.d(v,{c:()=>d});var u=a(5960),e=a(9951),i=a(6535);const d=(s,t)=>{let n,o;const l=(c,g,p)=>{if(typeof document>"u")return;const M=document.elementFromPoint(c,g);M&&t(M)?M!==n&&(r(),h(M,p)):r()},h=(c,g)=>{n=c,o||(o=n);const p=n;(0,u.w)(()=>p.classList.add("ion-activated")),g()},r=(c=!1)=>{if(!n)return;const g=n;(0,u.w)(()=>g.classList.remove("ion-activated")),c&&o!==n&&n.click(),n=void 0};return(0,i.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>l(c.currentX,c.currentY,e.a),onMove:c=>l(c.currentX,c.currentY,e.b),onEnd:()=>{r(!0),(0,e.h)(),o=void 0}})}},1836:(y,v,a)=>{a.d(v,{g:()=>e});var u=a(1848);const e=()=>{if(void 0!==u.w)return u.w.Capacitor}},983:(y,v,a)=>{a.d(v,{c:()=>u,i:()=>e});const u=(i,d,s)=>"function"==typeof s?s(i,d):"string"==typeof s?i[s]===d[s]:Array.isArray(d)?d.includes(i):i===d,e=(i,d,s)=>void 0!==i&&(Array.isArray(i)?i.some(t=>u(t,d,s)):u(i,d,s))},4510:(y,v,a)=>{a.d(v,{g:()=>u});const u=(t,n,o,l,h)=>i(t[1],n[1],o[1],l[1],h).map(r=>e(t[0],n[0],o[0],l[0],r)),e=(t,n,o,l,h)=>h*(3*n*Math.pow(h-1,2)+h*(-3*o*h+3*o+l*h))-t*Math.pow(h-1,3),i=(t,n,o,l,h)=>s((l-=h)-3*(o-=h)+3*(n-=h)-(t-=h),3*o-6*n+3*t,3*n-3*t,t).filter(c=>c>=0&&c<=1),s=(t,n,o,l)=>{if(0===t)return((t,n,o)=>{const l=n*n-4*t*o;return l<0?[]:[(-n+Math.sqrt(l))/(2*t),(-n-Math.sqrt(l))/(2*t)]})(n,o,l);const h=(3*(o/=t)-(n/=t)*n)/3,r=(2*n*n*n-9*n*o+27*(l/=t))/27;if(0===h)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-h),-Math.sqrt(-h)];const c=Math.pow(r/2,2)+Math.pow(h/3,3);if(0===c)return[Math.pow(r/2,.5)-n/3];if(c>0)return[Math.pow(-r/2+Math.sqrt(c),1/3)-Math.pow(r/2+Math.sqrt(c),1/3)-n/3];const g=Math.sqrt(Math.pow(-h/3,3)),p=Math.acos(-r/(2*Math.sqrt(Math.pow(-h/3,3)))),M=2*Math.pow(g,1/3);return[M*Math.cos(p/3)-n/3,M*Math.cos((p+2*Math.PI)/3)-n/3,M*Math.cos((p+4*Math.PI)/3)-n/3]}},4162:(y,v,a)=>{a.d(v,{i:()=>u});const u=e=>e&&""!==e.dir?"rtl"===e.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},8434:(y,v,a)=>{a.r(v),a.d(v,{startFocusVisible:()=>d});const u="ion-focused",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],d=s=>{let t=[],n=!0;const o=s?s.shadowRoot:document,l=s||document.body,h=E=>{t.forEach(f=>f.classList.remove(u)),E.forEach(f=>f.classList.add(u)),t=E},r=()=>{n=!1,h([])},c=E=>{n=i.includes(E.key),n||h([])},g=E=>{if(n&&void 0!==E.composedPath){const f=E.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));h(f)}},p=()=>{o.activeElement===l&&h([])};return o.addEventListener("keydown",c),o.addEventListener("focusin",g),o.addEventListener("focusout",p),o.addEventListener("touchstart",r,{passive:!0}),o.addEventListener("mousedown",r),{destroy:()=>{o.removeEventListener("keydown",c),o.removeEventListener("focusin",g),o.removeEventListener("focusout",p),o.removeEventListener("touchstart",r),o.removeEventListener("mousedown",r)},setFocus:h}}},9749:(y,v,a)=>{a.d(v,{c:()=>e});var u=a(512);const e=t=>{const n=t;let o;return{hasLegacyControl:()=>{if(void 0===o){const h=void 0!==n.label||i(n),r=n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")&&null===n.shadowRoot,c=(0,u.h)(n);o=!0===n.legacy||!h&&!r&&null!==c}return o}}},i=t=>!!(d.includes(t.tagName)&&null!==t.querySelector('[slot="label"]')||s.includes(t.tagName)&&""!==t.textContent),d=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},9951:(y,v,a)=>{a.d(v,{I:()=>e,a:()=>n,b:()=>o,c:()=>t,d:()=>h,h:()=>l});var u=a(1836),e=function(r){return r.Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT",r}(e||{});const d={getEngine(){const r=window.TapticEngine;if(r)return r;const c=(0,u.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,u.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,u.g)(),impact(r){const c=this.getEngine();if(!c)return;const g=this.isCapacitor()?r.style:r.style.toLowerCase();c.impact({style:g})},notification(r){const c=this.getEngine();if(!c)return;const g=this.isCapacitor()?r.type:r.type.toLowerCase();c.notification({type:g})},selection(){const r=this.isCapacitor()?e.Light:"light";this.impact({style:r})},selectionStart(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionStart():r.gestureSelectionStart())},selectionChanged(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionChanged():r.gestureSelectionChanged())},selectionEnd(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionEnd():r.gestureSelectionEnd())}},s=()=>d.available(),t=()=>{s()&&d.selection()},n=()=>{s()&&d.selectionStart()},o=()=>{s()&&d.selectionChanged()},l=()=>{s()&&d.selectionEnd()},h=r=>{s()&&d.impact(r)}},7946:(y,v,a)=>{a.d(v,{I:()=>t,a:()=>h,b:()=>s,c:()=>g,d:()=>M,f:()=>r,g:()=>l,i:()=>o,p:()=>p,r:()=>E,s:()=>c});var u=a(5861),e=a(512),i=a(2400);const s="ion-content",t=".ion-content-scroll-host",n=`${s}, ${t}`,o=f=>"ION-CONTENT"===f.tagName,l=function(){var f=(0,u.Z)(function*(_){return o(_)?(yield new Promise(w=>(0,e.c)(_,w)),_.getScrollElement()):_});return function(w){return f.apply(this,arguments)}}(),h=f=>f.querySelector(t)||f.querySelector(n),r=f=>f.closest(n),c=(f,_)=>o(f)?f.scrollToTop(_):Promise.resolve(f.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),g=(f,_,w,O)=>o(f)?f.scrollByPoint(_,w,O):Promise.resolve(f.scrollBy({top:w,left:_,behavior:O>0?"smooth":"auto"})),p=f=>(0,i.b)(f,s),M=f=>{if(o(f)){const w=f.scrollY;return f.scrollY=!1,w}return f.style.setProperty("overflow","hidden"),!0},E=(f,_)=>{o(f)?f.scrollY=_:f.style.removeProperty("overflow")}},5307:(y,v,a)=>{a.d(v,{a:()=>u,b:()=>g,c:()=>n,d:()=>p,e:()=>D,f:()=>t,g:()=>M,h:()=>i,i:()=>e,j:()=>O,k:()=>C,l:()=>o,m:()=>r,n:()=>E,o:()=>h,p:()=>s,q:()=>d,r:()=>w,s:()=>m,t:()=>c,u:()=>f,v:()=>_,w:()=>l});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5917:(y,v,a)=>{a.d(v,{c:()=>d,g:()=>s});var u=a(1848),e=a(512),i=a(2400);const d=(n,o,l)=>{let h,r;if(void 0!==u.w&&"MutationObserver"in u.w){const M=Array.isArray(o)?o:[o];h=new MutationObserver(E=>{for(const f of E)for(const _ of f.addedNodes)if(_.nodeType===Node.ELEMENT_NODE&&M.includes(_.slot))return l(),void(0,e.r)(()=>c(_))}),h.observe(n,{childList:!0})}const c=M=>{var E;r&&(r.disconnect(),r=void 0),r=new MutationObserver(f=>{l();for(const _ of f)for(const w of _.removedNodes)w.nodeType===Node.ELEMENT_NODE&&w.slot===o&&p()}),r.observe(null!==(E=M.parentElement)&&void 0!==E?E:M,{subtree:!0,childList:!0})},p=()=>{r&&(r.disconnect(),r=void 0)};return{destroy:()=>{h&&(h.disconnect(),h=void 0),p()}}},s=(n,o,l)=>{const h=null==n?0:n.toString().length,r=t(h,o);if(void 0===l)return r;try{return l(h,o)}catch(c){return(0,i.a)("Exception in provided `counterFormatter`.",c),r}},t=(n,o)=>`${n} / ${o}`},6591:(y,v,a)=>{a.r(v),a.d(v,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>d,copyVisualViewport:()=>C,keyboardDidClose:()=>f,keyboardDidOpen:()=>M,keyboardDidResize:()=>E,resetKeyboardAssist:()=>h,setKeyboardClose:()=>p,setKeyboardOpen:()=>g,startKeyboardAssist:()=>r,trackViewportChanges:()=>O});var u=a(3920);a(1836),a(1848);const d="ionKeyboardDidShow",s="ionKeyboardDidHide";let n={},o={},l=!1;const h=()=>{n={},o={},l=!1},r=m=>{if(u.K.getEngine())c(m);else{if(!m.visualViewport)return;o=C(m.visualViewport),m.visualViewport.onresize=()=>{O(m),M()||E(m)?g(m):f(m)&&p(m)}}},c=m=>{m.addEventListener("keyboardDidShow",D=>g(m,D)),m.addEventListener("keyboardDidHide",()=>p(m))},g=(m,D)=>{_(m,D),l=!0},p=m=>{w(m),l=!1},M=()=>!l&&n.width===o.width&&(n.height-o.height)*o.scale>150,E=m=>l&&!f(m),f=m=>l&&o.height===m.innerHeight,_=(m,D)=>{const P=new CustomEvent(d,{detail:{keyboardHeight:D?D.keyboardHeight:m.innerHeight-o.height}});m.dispatchEvent(P)},w=m=>{const D=new CustomEvent(s);m.dispatchEvent(D)},O=m=>{n=Object.assign({},o),o=C(m.visualViewport)},C=m=>({width:Math.round(m.width),height:Math.round(m.height),offsetTop:m.offsetTop,offsetLeft:m.offsetLeft,pageTop:m.pageTop,pageLeft:m.pageLeft,scale:m.scale})},3920:(y,v,a)=>{a.d(v,{K:()=>d,a:()=>i});var u=a(1836),e=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(e||{}),i=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(i||{});const d={getEngine(){const s=(0,u.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(t=>{if(t.code!==e.Unimplemented)throw t}):Promise.resolve(void 0)}}},9252:(y,v,a)=>{a.d(v,{c:()=>t});var u=a(5861),e=a(1848),i=a(3920);const d=n=>{if(void 0===e.d||n===i.a.None||void 0===n)return null;const o=e.d.querySelector("ion-app");return null!=o?o:e.d.body},s=n=>{const o=d(n);return null===o?0:o.clientHeight},t=function(){var n=(0,u.Z)(function*(o){let l,h,r,c;const g=function(){var _=(0,u.Z)(function*(){const w=yield i.K.getResizeMode(),O=void 0===w?void 0:w.mode;l=()=>{void 0===c&&(c=s(O)),r=!0,p(r,O)},h=()=>{r=!1,p(r,O)},null==e.w||e.w.addEventListener("keyboardWillShow",l),null==e.w||e.w.addEventListener("keyboardWillHide",h)});return function(){return _.apply(this,arguments)}}(),p=(_,w)=>{o&&o(_,M(w))},M=_=>{if(0===c||c===s(_))return;const w=d(_);return null!==w?new Promise(O=>{const m=new ResizeObserver(()=>{w.clientHeight===c&&(m.disconnect(),O())});m.observe(w)}):void 0};return yield g(),{init:g,destroy:()=>{null==e.w||e.w.removeEventListener("keyboardWillShow",l),null==e.w||e.w.removeEventListener("keyboardWillHide",h),l=h=void 0},isKeyboardVisible:()=>r}});return function(l){return n.apply(this,arguments)}}()},9229:(y,v,a)=>{a.d(v,{c:()=>e});var u=a(5861);const e=()=>{let i;return{lock:function(){var s=(0,u.Z)(function*(){const t=i;let n;return i=new Promise(o=>n=o),void 0!==t&&(yield t),n});return function(){return s.apply(this,arguments)}}()}}},4793:(y,v,a)=>{a.d(v,{c:()=>i});var u=a(1848),e=a(512);const i=(d,s,t)=>{let n;const o=()=>!(void 0===s()||void 0!==d.label||null===t()),h=()=>{const c=s();if(void 0===c)return;if(!o())return void c.style.removeProperty("width");const g=t().scrollWidth;if(0===g&&null===c.offsetParent&&void 0!==u.w&&"IntersectionObserver"in u.w){if(void 0!==n)return;const p=n=new IntersectionObserver(M=>{1===M[0].intersectionRatio&&(h(),p.disconnect(),n=void 0)},{threshold:.01,root:d});p.observe(c)}else c.style.setProperty("width",.75*g+"px")};return{calculateNotchWidth:()=>{o()&&(0,e.r)(()=>{h()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},2217:(y,v,a)=>{a.d(v,{S:()=>e});const e={bubbles:{dur:1e3,circles:9,fn:(i,d,s)=>{const t=i*d/s-i+"ms",n=2*Math.PI*d/s;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(i,d,s)=>{const t=d/s,n=i*t-i+"ms",o=2*Math.PI*t;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(i,d)=>({r:6,style:{left:32-32*d+"%","animation-delay":-110*d+"ms"}})},lines:{dur:1e3,lines:8,fn:(i,d,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*d+(d<s/2?180:-180)}deg)`,"animation-delay":i*d/s-i+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(i,d,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*d+(d<s/2?180:-180)}deg)`,"animation-delay":i*d/s-i+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(i,d,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":i*d/s-i+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(i,d,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*d+(d<6?180:-180)}deg)`,"animation-delay":i*d/s-i+"ms"}})}}},3049:(y,v,a)=>{a.r(v),a.d(v,{createSwipeBackGesture:()=>s});var u=a(512),e=a(4162),i=a(6535);a(2019);const s=(t,n,o,l,h)=>{const r=t.ownerDocument.defaultView;let c=(0,e.i)(t);const p=w=>c?-w.deltaX:w.deltaX;return(0,i.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:w=>(c=(0,e.i)(t),(w=>{const{startX:C}=w;return c?C>=r.innerWidth-50:C<=50})(w)&&n()),onStart:o,onMove:w=>{const C=p(w)/r.innerWidth;l(C)},onEnd:w=>{const O=p(w),C=r.innerWidth,m=O/C,D=(w=>c?-w.velocityX:w.velocityX)(w),P=D>=0&&(D>.2||O>C/2),T=(P?1-m:m)*C;let L=0;if(T>5){const x=T/Math.abs(D);L=Math.min(x,540)}h(P,m<=0?.01:(0,u.l)(0,m,.9999),L)}})}},6806:(y,v,a)=>{a.d(v,{w:()=>u});const u=(d,s,t)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(o=>{t(e(o,s))});return n.observe(d,{childList:!0,subtree:!0}),n},e=(d,s)=>{let t;return d.forEach(n=>{for(let o=0;o<n.addedNodes.length;o++)t=i(n.addedNodes[o],s)||t}),t},i=(d,s)=>{if(1!==d.nodeType)return;const t=d;return(t.tagName===s.toUpperCase()?[t]:Array.from(t.querySelectorAll(s))).find(o=>o.value===t.value)}},3180:(y,v,a)=>{a.d(v,{T:()=>o});var u=a(5861),e=a(9127),i=a(3800),d=a(6814);let s=(()=>{var l;class h{constructor(c){this.modalController=c}ngOnInit(){console.log("Media Details:",this.selectedMedia)}trimLeadingSpace(c){return c?c.replace(/^\s+/g,""):""}addToFavorites(){}closeDetails(){var c=this;return(0,u.Z)(function*(){yield c.modalController.dismiss()})()}}return(l=h).\u0275fac=function(c){return new(c||l)(e.Y36(i.IN))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-view-details"]],inputs:{selectedMedia:"selectedMedia"},decls:31,vars:11,consts:[["color","primary"],["slot","end"],["name","close",3,"click"],[1,"details-content"],[1,"details-card-container"],[1,"details-card"],["size","5"],[3,"src"],["size","7"],["expand","full","color","danger",1,"btn-favorite",3,"click"],["name","heart",1,"heart-icon"],[1,"details-card-title"],[1,"overview"]],template:function(c,g){1&c&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1)(3,"ion-icon",2),e.NdJ("click",function(){return g.closeDetails()}),e.qZA()()()(),e.TgZ(4,"ion-content",3)(5,"div",4)(6,"ion-card",5)(7,"ion-grid")(8,"ion-row")(9,"ion-col",6),e._UZ(10,"ion-img",7),e.qZA(),e.TgZ(11,"ion-col",8)(12,"ion-card-content")(13,"ion-card-title"),e._uU(14),e.qZA(),e.TgZ(15,"ion-card-subtitle"),e._uU(16),e.ALo(17,"date"),e.qZA(),e.TgZ(18,"ion-card-subtitle"),e._uU(19),e.ALo(20,"number"),e.qZA(),e.TgZ(21,"ion-button",9),e.NdJ("click",function(){return g.addToFavorites()}),e._UZ(22,"ion-icon",10),e.TgZ(23,"b"),e._uU(24,"FAVORITE"),e.qZA()()()()()()()(),e.TgZ(25,"div",4)(26,"ion-card",5)(27,"p",11),e._uU(28,"Synopsis"),e.qZA(),e.TgZ(29,"p",12),e._uU(30),e.qZA()()()()),2&c&&(e.xp6(10),e.Q6J("src","https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+g.selectedMedia.poster_path),e.xp6(4),e.Oqu(null==(g.selectedMedia.title||g.selectedMedia.name)?null:(g.selectedMedia.title||g.selectedMedia.name).trim()),e.xp6(2),e.hij("Released on ",e.xi3(17,5,g.selectedMedia.release_date||g.selectedMedia.first_air_date,"dd/MM/yyyy"),""),e.xp6(3),e.hij("Recommended at ",e.xi3(20,8,10*g.selectedMedia.vote_average,"1.0-0"),"%"),e.xp6(11),e.Oqu(g.selectedMedia.overview))},dependencies:[i.YG,i.Sm,i.PM,i.FN,i.tO,i.Dq,i.wI,i.W2,i.jY,i.Gu,i.gu,i.Xz,i.Nd,i.sr,d.JJ,d.uU],styles:['@charset "UTF-8";ion-toolbar[_ngcontent-%COMP%]{--ion-color-primary: white;border:1px solid black}ion-icon[_ngcontent-%COMP%]{fill:#000;margin-right:10px}.details-popup[_ngcontent-%COMP%]{margin:16px;background-color:#000c}.details-content[_ngcontent-%COMP%]{max-width:500px;margin:auto;padding:16px;border-radius:4px;text-align:center}.details-card[_ngcontent-%COMP%]{margin:0 auto;box-shadow:0 2px 4px #0000001a}ion-card-title[_ngcontent-%COMP%]{font-size:20px;text-align:left;margin-bottom:5px}ion-card-subtitle[_ngcontent-%COMP%]{text-align:left}ion-img[_ngcontent-%COMP%]{margin:20px;max-width:100%;border-radius:20px}.overview[_ngcontent-%COMP%]{padding-left:30px;padding-right:30px;text-align:left}.details-card-title[_ngcontent-%COMP%]{padding-left:30px;padding-right:30px;font-size:20px;text-align:left}.heart-icon[_ngcontent-%COMP%]{fill:#fff;margin-right:10px}ion-button[_ngcontent-%COMP%]{--background: #ff0000;--color: white;margin-top:20px;margin-bottom:20px}']}),h})();var t=a(3209);function n(l,h){if(1&l){const r=e.EpF();e.TgZ(0,"ion-col")(1,"ion-card")(2,"ion-img",2),e.NdJ("click",function(){const p=e.CHM(r).$implicit,M=e.oxw();return e.KtG(M.openDetailsModal(p))}),e.qZA()()()}if(2&l){const r=h.$implicit;e.xp6(2),e.Q6J("src","https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+r.poster_path)}}let o=(()=>{var l;class h{constructor(c,g){this._tmdbService=c,this.modalController=g}openDetailsModal(c){var g=this;return(0,u.Z)(function*(){return yield(yield g.modalController.create({component:s,componentProps:{selectedMedia:c}})).present()})()}}return(l=h).\u0275fac=function(c){return new(c||l)(e.Y36(t.U),e.Y36(i.IN))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-little-posters"]],inputs:{medias:"medias"},decls:3,vars:2,consts:[[3,"fixed"],[4,"ngFor","ngForOf"],[3,"src","click"]],template:function(c,g){1&c&&(e.TgZ(0,"ion-grid",0)(1,"ion-row"),e.YNc(2,n,3,1,"ion-col",1),e.qZA()()),2&c&&(e.Q6J("fixed",!0),e.xp6(2),e.Q6J("ngForOf",g.medias))},dependencies:[d.sg,i.PM,i.wI,i.jY,i.Xz,i.Nd],styles:["ion-card[_ngcontent-%COMP%]{width:100px;max-height:180px;word-wrap:break-word;padding:0;margin:0;background-color:#d3d3d3;justify-content:space-between;align-items:center;text-align:center;border-radius:10px}ion-col[_ngcontent-%COMP%]{margin:0;display:flex;justify-content:center;align-items:center}ion-img[_ngcontent-%COMP%]{border-radius:10px;margin:0;padding:0}"]}),h})()},8930:(y,v,a)=>{a.r(v),a.d(v,{DiscoverPageModule:()=>c});var u=a(6814),e=a(6223),i=a(3800),d=a(6800),s=a(5459),t=a(9127),n=a(3209),o=a(3180);const h=[{path:"",component:(()=>{var g;class p{constructor(E){this._tmdbService=E,this.SeriesPage=s.Q}ngOnInit(){this._tmdbService.getTrending("all").subscribe(E=>{console.log(E),this.medias=E.results})}}return(g=p).\u0275fac=function(E){return new(E||g)(t.Y36(n.U))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-discover"]],decls:12,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"medias"]],template:function(E,f){1&E&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Discover"),t.qZA(),t.TgZ(4,"ion-buttons",1),t._UZ(5,"ion-menu-button"),t.qZA()()(),t.TgZ(6,"ion-content",2)(7,"ion-header",3)(8,"ion-toolbar")(9,"ion-title",4),t._uU(10,"Discover"),t.qZA()()(),t._UZ(11,"app-little-posters",5),t.qZA()),2&E&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("fullscreen",!0),t.xp6(5),t.Q6J("medias",f.medias))},dependencies:[i.Sm,i.W2,i.Gu,i.fG,i.wd,i.sr,o.T]}),p})()}];let r=(()=>{var g;class p{}return(g=p).\u0275fac=function(E){return new(E||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[d.Bz.forChild(h),d.Bz]}),p})(),c=(()=>{var g;class p{}return(g=p).\u0275fac=function(E){return new(E||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[u.ez,e.u5,i.Pc,r]}),p})()},5459:(y,v,a)=>{a.d(v,{Q:()=>s});var u=a(9127),e=a(3209),i=a(3800),d=a(3180);let s=(()=>{var t;class n{static openModal(l){throw new Error("Method not implemented.")}static openSeriesPage(l){throw new Error("Method not implemented.")}constructor(l){this.service=l}ngOnInit(){this.service.getDiscover("tv").subscribe(l=>{console.log(l),this.series=l.results})}}return(t=n).\u0275fac=function(l){return new(l||t)(u.Y36(e.U))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-series"]],decls:12,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"medias"]],template:function(l,h){1&l&&(u.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),u._uU(3,"Series"),u.qZA(),u.TgZ(4,"ion-buttons",1),u._UZ(5,"ion-menu-button"),u.qZA()()(),u.TgZ(6,"ion-content",2)(7,"ion-header",3)(8,"ion-toolbar")(9,"ion-title",4),u._uU(10,"Series"),u.qZA()()(),u._UZ(11,"app-little-posters",5),u.qZA()),2&l&&(u.Q6J("translucent",!0),u.xp6(6),u.Q6J("fullscreen",!0),u.xp6(5),u.Q6J("medias",h.series))},dependencies:[i.Sm,i.W2,i.Gu,i.fG,i.wd,i.sr,d.T]}),n})()},3209:(y,v,a)=>{a.d(v,{U:()=>d});var u=a(9862),e=a(553),i=a(9127);let d=(()=>{var s;class t{constructor(o){this.httpClient=o,this.tmdbBaseUrl=e.N.TMDB_BASE_URL,this.apiKey=e.N.API_KEY,this.headers=new u.WM({"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`})}getTrending(o){return this.httpClient.get(`${this.tmdbBaseUrl}/3/trending/${o}/day?language=en-US`,{headers:this.headers})}getDiscover(o){return this.httpClient.get(`${this.tmdbBaseUrl}/3/discover/${o}`,{headers:this.headers})}getDetails(o,l){return this.httpClient.get(`${this.tmdbBaseUrl}/3/${o}/${l}`,{headers:this.headers})}getSearchResults(o){return this.httpClient.get(`${this.tmdbBaseUrl}/3/search/${o}`,{headers:this.headers})}}return(s=t).\u0275fac=function(o){return new(o||s)(i.LFG(u.eN))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),t})()}}]);
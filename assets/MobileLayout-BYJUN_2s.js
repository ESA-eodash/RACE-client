import{k as Ie,p as R,o as Pe,m as Xe,g as $,u as Ye,r as I,c as y,a as M,V as G,b as v,F as O,d as z,e as ie,f as ue,h as Ge,i as De,j as pe,l as Ue,n as Be,s as E,w as Ee,q as je,t as q,v as Ne,x as re,y as ze,z as qe,A as Ke,B as le,C as ae,D as Qe,I as fe,E as Je,G as Ze,H as et,J as me,K as tt,L as he,M as ge,N as nt,O as ot,P as st,Q as lt,R as W,S as at,T as it,_ as ut,U as rt,W as ct,X as be,Y as dt,Z as vt,$ as C,a0 as A,a1 as F,a2 as ye,a3 as X,a4 as Se,a5 as se,a6 as Y,a7 as we,a8 as xe,a9 as ft,aa as mt}from"./index-UktYg3a_.js";import{f as ht,a as gt,s as bt,m as yt,u as St,b as wt}from"./forwardRefs-CtuWXg5Q.js";import{u as xt}from"./ssrBoot-CcESgnc0.js";import{M as kt}from"./transition-BnyrxOXB.js";import{V as ke}from"./index-DAvkPQyY.js";import{V as Tt}from"./VMain-Dw2BMygO.js";const Vt=e=>{const{touchstartX:n,touchendX:s,touchstartY:t,touchendY:l}=e,u=.5,o=16;e.offsetX=s-n,e.offsetY=l-t,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&s<n-o&&e.left(e),e.right&&s>n+o&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&l<t-o&&e.up(e),e.down&&l>t+o&&e.down(e))};function Ct(e,n){const s=e.changedTouches[0];n.touchstartX=s.clientX,n.touchstartY=s.clientY,n.start?.({originalEvent:e,...n})}function _t(e,n){const s=e.changedTouches[0];n.touchendX=s.clientX,n.touchendY=s.clientY,n.end?.({originalEvent:e,...n}),Vt(n)}function It(e,n){const s=e.changedTouches[0];n.touchmoveX=s.clientX,n.touchmoveY=s.clientY,n.move?.({originalEvent:e,...n})}function Pt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:s=>Ct(s,n),touchend:s=>_t(s,n),touchmove:s=>It(s,n)}}function pt(e,n){const s=n.value,t=s?.parent?e.parentElement:e,l=s?.options??{passive:!0},u=n.instance?.$.uid;if(!t||!u)return;const o=Pt(n.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[u]=o,Ie(o).forEach(f=>{t.addEventListener(f,o[f],l)})}function Bt(e,n){const s=n.value?.parent?e.parentElement:e,t=n.instance?.$.uid;if(!s?._touchHandlers||!t)return;const l=s._touchHandlers[t];Ie(l).forEach(u=>{s.removeEventListener(u,l[u])}),delete s._touchHandlers[t]}const We={mounted:pt,unmounted:Bt},Et=We,ce=Symbol.for("vuetify:v-tabs"),zt=R({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Pe(Xe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Re=$()({name:"VTab",props:zt(),setup(e,n){let{slots:s,attrs:t}=n;const{textColorClasses:l,textColorStyles:u}=Ye(e,"sliderColor"),o=I(),f=I(),r=y(()=>e.direction==="horizontal"),h=y(()=>o.value?.group?.isSelected.value??!1);function x(m){let{value:a}=m;if(a){const g=o.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"),d=f.value;if(!g||!d)return;const _=getComputedStyle(g).color,T=g.getBoundingClientRect(),V=d.getBoundingClientRect(),P=r.value?"x":"y",p=r.value?"X":"Y",b=r.value?"right":"bottom",S=r.value?"width":"height",k=T[P],H=V[P],B=k>H?T[b]-V[b]:T[P]-V[P],K=Math.sign(B)>0?r.value?"right":"bottom":Math.sign(B)<0?r.value?"left":"top":"center",Q=(Math.abs(B)+(Math.sign(B)<0?T[S]:V[S]))/Math.max(T[S],V[S])||0,j=T[S]/V[S]||0,N=1.5;gt(d,{backgroundColor:[_,"currentcolor"],transform:[`translate${p}(${B}px) scale${p}(${j})`,`translate${p}(${B/N}px) scale${p}(${(Q-1)/N+1})`,"none"],transformOrigin:Array(3).fill(K)},{duration:225,easing:bt})}}return M(()=>{const m=G.filterProps(e);return v(G,z({symbol:ce,ref:o,class:["v-tab",e.class],style:e.style,tabindex:h.value?0:-1,role:"tab","aria-selected":String(h.value),active:!1},m,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":x}),{...s,default:()=>v(O,null,[s.default?.()??e.text,!e.hideSlider&&v("div",{ref:f,class:["v-tab__slider",l.value],style:u.value},null)])})}),ht({},o)}}),$e=Symbol.for("vuetify:v-window"),Me=Symbol.for("vuetify:v-window-group"),He=R({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...ie(),...ue(),...Ge()},"VWindow"),Te=$()({name:"VWindow",directives:{Touch:We},props:He(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const{themeClasses:t}=De(e),{isRtl:l}=pe(),{t:u}=Ue(),o=Be(e,Me),f=I(),r=y(()=>l.value?!e.reverse:e.reverse),h=E(!1),x=y(()=>{const b=e.direction==="vertical"?"y":"x",k=(r.value?!h.value:h.value)?"-reverse":"";return`v-window-${b}${k}-transition`}),m=E(0),a=I(void 0),g=y(()=>o.items.value.findIndex(b=>o.selected.value.includes(b.id)));Ee(g,(b,S)=>{const k=o.items.value.length,H=k-1;k<=2?h.value=b<S:b===H&&S===0?h.value=!0:b===0&&S===H?h.value=!1:h.value=b<S}),je($e,{transition:x,isReversed:h,transitionCount:m,transitionHeight:a,rootRef:f});const d=y(()=>e.continuous||g.value!==0),_=y(()=>e.continuous||g.value!==o.items.value.length-1);function T(){d.value&&o.prev()}function V(){_.value&&o.next()}const P=y(()=>{const b=[],S={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:o.prev,"aria-label":u("$vuetify.carousel.prev")};b.push(d.value?s.prev?s.prev({props:S}):v(G,S,null):v("div",null,null));const k={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:o.next,"aria-label":u("$vuetify.carousel.next")};return b.push(_.value?s.next?s.next({props:k}):v(G,k,null):v("div",null,null)),b}),p=y(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?T():V()},right:()=>{r.value?V():T()},start:S=>{let{originalEvent:k}=S;k.stopPropagation()}},...e.touch===!0?{}:e.touch});return M(()=>q(v(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>[v("div",{class:"v-window__container",style:{height:a.value}},[s.default?.({group:o}),e.showArrows!==!1&&v("div",{class:"v-window__controls"},[P.value])]),s.additional?.({group:o})]}),[[Ne("touch"),p.value]])),{group:o}}}),Wt=R({...Pe(He(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Rt=$()({name:"VTabsWindow",props:Wt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const t=re(ce,null),l=ze(e,"modelValue"),u=y({get(){return l.value!=null||!t?l.value:t.items.value.find(o=>t.selected.value.includes(o.id))?.value},set(o){l.value=o}});return M(()=>{const o=Te.filterProps(e);return v(Te,z({_as:"VTabsWindow"},o,{modelValue:u.value,"onUpdate:modelValue":f=>u.value=f,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),s)}),{}}}),Ae=R({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ie(),...qe(),...yt()},"VWindowItem"),Ve=$()({name:"VWindowItem",directives:{Touch:Et},props:Ae(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:s}=n;const t=re($e),l=Ke(e,Me),{isBooted:u}=xt();if(!t||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=E(!1),f=y(()=>u.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!o.value||!t||(o.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function h(){o.value||!t||(o.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=ae(t.rootRef.value?.clientHeight)),t.transitionCount.value+=1)}function x(){r()}function m(d){o.value&&Qe(()=>{!f.value||!o.value||!t||(t.transitionHeight.value=ae(d.clientHeight))})}const a=y(()=>{const d=t.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof d!="string"?t.transition.value:d,onBeforeEnter:h,onAfterEnter:r,onEnterCancelled:x,onBeforeLeave:h,onAfterLeave:r,onLeaveCancelled:x,onEnter:m}:!1}),{hasContent:g}=St(e,l.isSelected);return M(()=>v(kt,{transition:a.value,disabled:!u.value},{default:()=>[q(v("div",{class:["v-window-item",l.selectedClass.value,e.class],style:e.style},[g.value&&s.default?.()]),[[le,l.isSelected.value]])]})),{groupItem:l}}}),$t=R({...Ae()},"VTabsWindowItem"),Mt=$()({name:"VTabsWindowItem",props:$t(),setup(e,n){let{slots:s}=n;return M(()=>{const t=Ve.filterProps(e);return v(Ve,z({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),s)}),{}}});function Ht(e){let{selectedElement:n,containerElement:s,isRtl:t,isHorizontal:l}=e;const u=D(l,s),o=Fe(l,t,s),f=D(l,n),r=Oe(l,n),h=f*.4;return o>r?r-h:o+u<r+f?r-u+f+h:o}function At(e){let{selectedElement:n,containerElement:s,isHorizontal:t}=e;const l=D(t,s),u=Oe(t,n),o=D(t,n);return u-l/2+o/2}function Ce(e,n){return n?.[e?"scrollWidth":"scrollHeight"]||0}function Ft(e,n){return n?.[e?"clientWidth":"clientHeight"]||0}function Fe(e,n,s){if(!s)return 0;const{scrollLeft:t,offsetWidth:l,scrollWidth:u}=s;return e?n?u-l+t:t:s.scrollTop}function D(e,n){return n?.[e?"offsetWidth":"offsetHeight"]||0}function Oe(e,n){return n?.[e?"offsetLeft":"offsetTop"]||0}const Ot=Symbol.for("vuetify:v-slide-group"),Le=R({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ot},nextIcon:{type:fe,default:"$next"},prevIcon:{type:fe,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ie(),...Je({mobile:null}),...ue(),...Ze({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),_e=$()({name:"VSlideGroup",props:Le(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const{isRtl:t}=pe(),{displayClasses:l,mobile:u}=et(e),o=Be(e,e.symbol),f=E(!1),r=E(0),h=E(0),x=E(0),m=y(()=>e.direction==="horizontal"),{resizeRef:a,contentRect:g}=me(),{resizeRef:d,contentRect:_}=me(),T=tt(),V=y(()=>({container:a.el,duration:200,easing:"easeOutQuart"})),P=y(()=>o.selected.value.length?o.items.value.findIndex(i=>i.id===o.selected.value[0]):-1),p=y(()=>o.selected.value.length?o.items.value.findIndex(i=>i.id===o.selected.value[o.selected.value.length-1]):-1);if(he){let i=-1;Ee(()=>[o.selected.value,g.value,_.value,m.value],()=>{cancelAnimationFrame(i),i=requestAnimationFrame(()=>{if(g.value&&_.value){const c=m.value?"width":"height";h.value=g.value[c],x.value=_.value[c],f.value=h.value+1<x.value}if(P.value>=0&&d.el){const c=d.el.children[p.value];S(c,e.centerActive)}})})}const b=E(!1);function S(i,c){let w=0;c?w=At({containerElement:a.el,isHorizontal:m.value,selectedElement:i}):w=Ht({containerElement:a.el,isHorizontal:m.value,isRtl:t.value,selectedElement:i}),k(w)}function k(i){if(!he||!a.el)return;const c=D(m.value,a.el),w=Fe(m.value,t.value,a.el);if(!(Ce(m.value,a.el)<=c||Math.abs(i-w)<16)){if(m.value&&t.value&&a.el){const{scrollWidth:ne,offsetWidth:oe}=a.el;i=ne-oe-i}m.value?T.horizontal(i,V.value):T(i,V.value)}}function H(i){const{scrollTop:c,scrollLeft:w}=i.target;r.value=m.value?w:c}function B(i){if(b.value=!0,!(!f.value||!d.el)){for(const c of i.composedPath())for(const w of d.el.children)if(w===c){S(w);return}}}function K(i){b.value=!1}let U=!1;function Q(i){!U&&!b.value&&!(i.relatedTarget&&d.el?.contains(i.relatedTarget))&&L(),U=!1}function j(){U=!0}function N(i){if(!d.el)return;function c(w){i.preventDefault(),L(w)}m.value?i.key==="ArrowRight"?c(t.value?"prev":"next"):i.key==="ArrowLeft"&&c(t.value?"next":"prev"):i.key==="ArrowDown"?c("next"):i.key==="ArrowUp"&&c("prev"),i.key==="Home"?c("first"):i.key==="End"&&c("last")}function L(i){if(!d.el)return;let c;if(!i)c=nt(d.el)[0];else if(i==="next"){if(c=d.el.querySelector(":focus")?.nextElementSibling,!c)return L("first")}else if(i==="prev"){if(c=d.el.querySelector(":focus")?.previousElementSibling,!c)return L("last")}else i==="first"?c=d.el.firstElementChild:i==="last"&&(c=d.el.lastElementChild);c&&c.focus({preventScroll:!0})}function J(i){const c=m.value&&t.value?-1:1,w=(i==="prev"?-c:c)*h.value;let te=r.value+w;if(m.value&&t.value&&a.el){const{scrollWidth:ne,offsetWidth:oe}=a.el;te+=ne-oe}k(te)}const Z=y(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),ee=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!u.value;case!0:return f.value||Math.abs(r.value)>0;case"mobile":return u.value||f.value||Math.abs(r.value)>0;default:return!u.value&&(f.value||Math.abs(r.value)>0)}}),de=y(()=>Math.abs(r.value)>1),ve=y(()=>{if(!a.value)return!1;const i=Ce(m.value,a.el),c=Ft(m.value,a.el);return i-c-Math.abs(r.value)>1});return M(()=>v(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!m.value,"v-slide-group--has-affixes":ee.value,"v-slide-group--is-overflowing":f.value},l.value,e.class],style:e.style,tabindex:b.value||o.selected.value.length?-1:0,onFocus:Q},{default:()=>[ee.value&&v("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!de.value}],onMousedown:j,onClick:()=>de.value&&J("prev")},[s.prev?.(Z.value)??v(ke,null,{default:()=>[v(ge,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),v("div",{key:"container",ref:a,class:"v-slide-group__container",onScroll:H},[v("div",{ref:d,class:"v-slide-group__content",onFocusin:B,onFocusout:K,onKeydown:N},[s.default?.(Z.value)])]),ee.value&&v("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ve.value}],onMousedown:j,onClick:()=>ve.value&&J("next")},[s.next?.(Z.value)??v(ke,null,{default:()=>[v(ge,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]})),{selected:o.selected,scrollTo:J,scrollOffset:r,focus:L}}});function Lt(e){return e?e.map(n=>it(n)?n:{text:n,value:n}):[]}const Xt=R({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Le({mandatory:"force",selectedClass:"v-tab-item--selected"}),...ot(),...ue()},"VTabs"),Yt=$()({name:"VTabs",props:Xt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:s,slots:t}=n;const l=ze(e,"modelValue"),u=y(()=>Lt(e.items)),{densityClasses:o}=st(e),{backgroundColorClasses:f,backgroundColorStyles:r}=lt(W(e,"bgColor")),{scopeId:h}=wt();return at({VTab:{color:W(e,"color"),direction:W(e,"direction"),stacked:W(e,"stacked"),fixed:W(e,"fixedTabs"),sliderColor:W(e,"sliderColor"),hideSlider:W(e,"hideSlider")}}),M(()=>{const x=_e.filterProps(e),m=!!(t.window||e.items.length>0);return v(O,null,[v(_e,z(x,{modelValue:l.value,"onUpdate:modelValue":a=>l.value=a,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,f.value,e.class],style:[{"--v-tabs-height":ae(e.height)},r.value,e.style],role:"tablist",symbol:ce},h,s),{default:()=>[t.default?.()??u.value.map(a=>t.tab?.({item:a})??v(Re,z(a,{key:a.text,value:a.value}),{default:t[`tab.${a.value}`]?()=>t[`tab.${a.value}`]?.({item:a}):void 0}))]}),m&&v(Rt,z({modelValue:l.value,"onUpdate:modelValue":a=>l.value=a,key:"tabs-window"},h),{default:()=>[u.value.map(a=>t.item?.({item:a})??v(Mt,{value:a.value},{default:()=>t[`item.${a.value}`]?.({item:a})})),t.window?.()]})])}),{}}}),Gt={key:0,id:"overlay",class:"pa-2 panel bg-surface"},Dt={class:"component-container"},Ut={__name:"MobileLayout",setup(e){rt(m=>({fbf7b91a:h.value,"2c845582":r.value,fdee920e:x.value}));const n=re(ct),s=n.template.widgets,t=be(s),[l]=be([n.template?.background]),{mainRect:u}=dt(),o=I(-1),f=I(null),r=I(""),h=I(""),x=I("");return vt(()=>{h.value=u.value.top+"px",x.value=(u.value.bottom||48)+"px",r.value=u.value.bottom+(f.value?.$el?.clientHeight??0)+"px"}),(m,a)=>(C(),A(Tt,{class:"overflow-hidden main"},{default:F(()=>[(C(),A(ye,{suspensible:""},{default:F(()=>[X(l).component?(C(),A(Se(X(l).component),z({key:0,id:"bg-widget"},X(l).props),null,16)):se("v-if",!0)]),_:1})),(C(!0),Y(O,null,we(X(t),(g,d)=>(C(),Y(O,{key:d},[g.value.component?q((C(),Y("div",Gt,[v(G,{icon:"",variant:"text",class:"close-btn",onClick:a[0]||(a[0]=_=>o.value=-1)},{default:F(()=>[xe("✕")]),_:1}),(C(),A(ye,{suspensible:""},{default:F(()=>[q(ft("div",Dt,[(C(),A(Se(g.value.component),z({key:g.value.id},g.value.props),null,16))],512),[[le,o.value===d]])]),_:2},1024))],512)),[[le,o.value===d]]):se("v-if",!0)],64))),128)),v(Yt,{ref_key:"tabs",ref:f,"align-tabs":"center","bg-color":"surface",class:"tabs","show-arrows":"",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=g=>o.value=g)},{default:F(()=>[(C(!0),Y(O,null,we(X(t),(g,d)=>(C(),Y(O,{key:d},[g.value.component?(C(),A(Re,{key:0,value:d},{default:F(()=>[xe(mt(g.value.title),1)]),_:2},1032,["value"])):se("v-if",!0)],64))),128))]),_:1},8,["modelValue"])]),_:1}))}},Zt=ut(Ut,[["__scopeId","data-v-e69b9875"]]);export{Zt as default};

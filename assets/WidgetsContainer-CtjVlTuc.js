import{X as g,r as i,Y as y,Z as x,D as v,$ as n,a6 as m,a7 as E,a3 as H,F as k,a9 as f,aa as C,a0 as _,bC as w,bD as D,a4 as A,bE as b}from"./index-UktYg3a_.js";class F extends HTMLDetailsElement{constructor(){super()}connectedCallback(){this.el=this,this.summary=this.querySelector("summary"),this.content=this.lastElementChild,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.summary.addEventListener("click",e=>this.onClick(e))}onClick(e){e?.preventDefault(),this.el.style.overflow="hidden",this.isClosing||!this.el.open?this.doOpen():(this.isExpanding||this.el.open)&&this.shrink()}shrink(){this.isClosing=!0;const e=`${this.el.offsetHeight}px`,t=`${this.summary.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[e,t]},{duration:300,easing:"ease-out"}),this.animation.onfinish=()=>this.onAnimationFinish(!1),this.animation.oncancel=()=>this.isClosing=!1}doOpen(){this.el.style.height=`${this.el.offsetHeight}px`,this.el.open=!0,window.requestAnimationFrame(()=>this.expand()),this.parentElement.querySelectorAll("details[open][exclusive]").forEach(t=>{t!==this&&t.onClick()})}expand(){this.isExpanding=!0;const e=`${this.el.offsetHeight}px`,t=`${this.summary.offsetHeight+this.content.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[e,t]},{duration:300,easing:"ease-out"}),this.animation.onfinish=()=>this.onAnimationFinish(!0),this.animation.oncancel=()=>this.isExpanding=!1}onAnimationFinish(e){this.el.open=e,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.el.style.height=this.el.style.overflow=""}}customElements.define("animated-details",F,{extends:"details"});const q={__name:"WidgetsContainer",props:{widgets:{type:Array,required:!0}},setup(a){const t=g(a.widgets),l=i([]),o=i([]),h=i(""),r=i(0),{mainRect:d}=y();return x(async()=>{await v(()=>{r.value=o.value.reduce((c,u)=>c+=u.clientHeight,0),h.value=(l.value[0].parentElement?.scrollHeight??0)-r.value-d.value.top+"px"})}),(c,u)=>(n(!0),m(k,null,E(H(t),(s,p)=>(n(),m("details",{is:"animated-details",ref_for:!0,ref_key:"detailsEls",ref:l,key:p,class:"overflow-auto",exclusive:""},[f("summary",{ref_for:!0,ref_key:"summaryEls",ref:o},C(s.value.title),513),f("span",{style:b({height:h.value}),class:"d-flex flex-column"},[(n(),_(A(s.value.component),w(D(s.value.props)),null,16))],4)]))),128))}};export{q as default};

import{D as y,E as k,ac as b,a6 as C,G as S,a7 as x,$ as m,W as P,av as I,H as a,af as B,Z as F,x as R,a5 as V,r as w,e as D,f as N,n as T,t as z,J as E,K as H,P as n,S as j,Q as h,y as f,aB as K,aC as L}from"./index-DvLaIhV0.js";import{_ as A}from"./Dashboard-DZXmAt0Y.js";import{c as G,d as J,a as M,m as O,u as Q,e as U,f as W,b as Y}from"./color-CQsUKrQN.js";const Z=y({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...G(),...k(),...J(),...b(),...M(),...O({tag:"footer"}),...C()},"VFooter"),$=S()({name:"VFooter",props:Z(),setup(e,s){let{slots:t}=s;const{themeClasses:o}=x(e),{backgroundColorClasses:r,backgroundColorStyles:l}=Q(m(e,"color")),{borderClasses:u}=U(e),{elevationClasses:g}=W(e),{roundedClasses:v}=Y(e),c=P(32),{resizeRef:p}=I(d=>{d.length&&(c.value=d[0].target.clientHeight)}),i=a(()=>e.height==="auto"?c.value:parseInt(e.height,10)),{layoutItemStyles:_}=B({id:e.name,order:a(()=>parseInt(e.order,10)),position:a(()=>"bottom"),layoutSize:i,elementSize:a(()=>e.height==="auto"?void 0:i.value),active:a(()=>e.app),absolute:m(e,"absolute")});return F(()=>R(e.tag,{ref:p,class:["v-footer",o.value,r.value,u.value,g.value,v.value,e.class],style:[l.value,e.app?_.value:{height:V(e.height)},e.style]},t)),{}}}),q=e=>(K("data-v-afa68326"),e=e(),L(),e),X=q(()=>n("p",{class:"pt-0 footer-text"}," Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. ",-1)),ee={class:"footer-text"},ae={__name:"Footer",setup(e){const s=w(null),t=D(N),o=t.brand?.shortName??t.brand?.name,{mdAndDown:r}=T();return(l,u)=>(z(),E($,{ref_key:"footer",ref:s,height:f(r)?"48px":"auto",color:"secondary",app:"",class:"d-flex justify-space-between"},{default:H(()=>[X,n("div",ee,[j(h(new Date().getFullYear())+" — ",1),n("strong",null,h(f(o)),1)])]),_:1},8,["height"]))}},re=A(ae,[["__scopeId","data-v-afa68326"]]);export{re as default};

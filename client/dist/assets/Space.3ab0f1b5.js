import{bs as B,d as C,as as G,at as v,aX as R,q as j,bn as E,O as x,av as L,bt as M,U as b}from"./index.bc132317.js";function _(e,a="default",i=[]){const s=e.$slots[a];return s===void 0?i:s()}const I={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},O=()=>I,P={name:"Space",self:O},T=P;let h;const A=()=>{if(!B)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},U=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),D=C({name:"Space",props:U,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:i}=G(e),n=v("Space","-space",void 0,T,e,a),s=R("Space",i,a);return{useGap:A(),rtlEnabled:s,mergedClsPrefix:a,margin:j(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[L("gap",t)]:f}}=n.value,{row:c,col:d}=M(f);return{horizontal:b(d),vertical:b(c)}})}},render(){const{vertical:e,align:a,inline:i,justify:n,itemStyle:s,margin:t,wrap:f,mergedClsPrefix:c,rtlEnabled:d,useGap:l,wrapItem:S,internalUseGap:w}=this,u=E(_(this));if(!u.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,$=`${t.vertical}px`,o=`${t.vertical/2}px`,p=u.length-1,g=n.startsWith("space-");return x("div",{role:"none",class:[`${c}-space`,d&&`${c}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!f||e?"nowrap":"wrap",marginTop:l||e?"":`-${o}`,marginBottom:l||e?"":`-${o}`,alignItems:a,gap:l?`${t.vertical}px ${t.horizontal}px`:""}},!S&&(l||w)?u:u.map((z,r)=>x("div",{role:"none",style:[s,{maxWidth:"100%"},l?"":e?{marginBottom:r!==p?$:""}:d?{marginLeft:g?n==="space-between"&&r===p?"":m:r!==p?y:"",marginRight:g?n==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}:{marginRight:g?n==="space-between"&&r===p?"":m:r!==p?y:"",marginLeft:g?n==="space-between"&&r===0?"":m:"",paddingTop:o,paddingBottom:o}]},z)))}});export{D as _,_ as g};

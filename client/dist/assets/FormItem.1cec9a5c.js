import{i as ie,E as De,L as Me,m as Ye,ao as Ue,ap as I,aC as V,ar as Q,v as Le,d as ze,as as Ve,at as me,r as X,D as be,O as P,a$ as qe,q as R,bf as Ke,aq as le,M as de,bg as Re,bh as Je,f as Ze,av as B,aw as Ge,aB as Qe,aF as Xe,b3 as Fe}from"./index.bc132317.js";import{f as he}from"./format-length.9e4dbec0.js";import{g as Ie}from"./Input.a9cfcc4d.js";function et(r,e,t){var n;const i=ie(r,null);if(i===null)return;const o=(n=De())===null||n===void 0?void 0:n.proxy;Me(t,a),a(t.value),Ye(()=>{a(void 0,t.value)});function a(d,l){const m=i[e];l!==void 0&&s(m,l),d!==void 0&&f(m,d)}function s(d,l){d[l]||(d[l]=[]),d[l].splice(d[l].findIndex(m=>m===o),1)}function f(d,l){d[l]||(d[l]=[]),~d[l].findIndex(m=>m===o)||d[l].push(o)}}const tt={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right"},nt=r=>{const{heightSmall:e,heightMedium:t,heightLarge:n,textColor1:i,errorColor:o,warningColor:a,lineHeight:s,textColor3:f}=r;return Object.assign(Object.assign({},tt),{blankHeightSmall:e,blankHeightMedium:t,blankHeightLarge:n,lineHeight:s,labelTextColor:i,asteriskColor:o,feedbackTextColorError:o,feedbackTextColorWarning:a,feedbackTextColor:f})},rt={name:"Form",common:Ue,self:nt},Ce=rt,it=I("form",[V("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[I("form-item",{width:"auto",marginRight:"18px"},[Q("&:last-child",{marginRight:0})])])]),ae=Le("n-form"),Te=Le("n-form-item-insts");var at=globalThis&&globalThis.__awaiter||function(r,e,t,n){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(l){try{d(n.next(l))}catch(m){a(m)}}function f(l){try{d(n.throw(l))}catch(m){a(m)}}function d(l){l.done?o(l.value):i(l.value).then(s,f)}d((n=n.apply(r,e||[])).next())})};const ot=Object.assign(Object.assign({},me.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:r=>r.preventDefault()},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),Jt=ze({name:"Form",props:ot,setup(r){const{mergedClsPrefixRef:e}=Ve(r);me("Form","-form",it,Ce,r,e);const t={},n=X(void 0),i=f=>{const d=n.value;(d===void 0||f>=d)&&(n.value=f)};function o(f,d=()=>!0){return at(this,void 0,void 0,function*(){return yield new Promise((l,m)=>{const v=[];for(const c of qe(t)){const y=t[c];for(const g of y)g.path&&v.push(g.internalValidate(null,d))}Promise.all(v).then(c=>{if(c.some(y=>!y.valid)){const y=c.filter(g=>g.errors).map(g=>g.errors);f&&f(y),m(y)}else f&&f(),l()})})})}function a(){for(const f of qe(t)){const d=t[f];for(const l of d)l.restoreValidation()}}return be(ae,{props:r,maxChildLabelWidthRef:n,deriveMaxChildLabelWidth:i}),be(Te,{formItems:t}),Object.assign({validate:o,restoreValidation:a},{mergedClsPrefix:e})},render(){const{mergedClsPrefix:r}=this;return P("form",{class:[`${r}-form`,this.inline&&`${r}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function Y(){return Y=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Y.apply(this,arguments)}function st(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,re(r,e)}function ve(r){return ve=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ve(r)}function re(r,e){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},re(r,e)}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ce(r,e,t){return ft()?ce=Reflect.construct.bind():ce=function(i,o,a){var s=[null];s.push.apply(s,o);var f=Function.bind.apply(i,s),d=new f;return a&&re(d,a.prototype),d},ce.apply(null,arguments)}function lt(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function ye(r){var e=typeof Map=="function"?new Map:void 0;return ye=function(n){if(n===null||!lt(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,i)}function i(){return ce(n,arguments,ve(this).constructor)}return i.prototype=Object.create(n.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),re(i,n)},ye(r)}var dt=/%[sdj%]/g,ut=function(){};typeof process<"u"&&process.env;function xe(r){if(!r||!r.length)return null;var e={};return r.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function j(r){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var i=0,o=t.length;if(typeof r=="function")return r.apply(null,t);if(typeof r=="string"){var a=r.replace(dt,function(s){if(s==="%%")return"%";if(i>=o)return s;switch(s){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return s}});return a}return r}function ct(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function q(r,e){return!!(r==null||e==="array"&&Array.isArray(r)&&!r.length||ct(e)&&typeof r=="string"&&!r)}function mt(r,e,t){var n=[],i=0,o=r.length;function a(s){n.push.apply(n,s||[]),i++,i===o&&t(n)}r.forEach(function(s){e(s,a)})}function Se(r,e,t){var n=0,i=r.length;function o(a){if(a&&a.length){t(a);return}var s=n;n=n+1,s<i?e(r[s],o):t([])}o([])}function gt(r){var e=[];return Object.keys(r).forEach(function(t){e.push.apply(e,r[t]||[])}),e}var Pe=function(r){st(e,r);function e(t,n){var i;return i=r.call(this,"Async Validation Error")||this,i.errors=t,i.fields=n,i}return e}(ye(Error));function ht(r,e,t,n,i){if(e.first){var o=new Promise(function(v,c){var y=function(u){return n(u),u.length?c(new Pe(u,xe(u))):v(i)},g=gt(r);Se(g,t,y)});return o.catch(function(v){return v}),o}var a=e.firstFields===!0?Object.keys(r):e.firstFields||[],s=Object.keys(r),f=s.length,d=0,l=[],m=new Promise(function(v,c){var y=function(w){if(l.push.apply(l,w),d++,d===f)return n(l),l.length?c(new Pe(l,xe(l))):v(i)};s.length||(n(l),v(i)),s.forEach(function(g){var w=r[g];a.indexOf(g)!==-1?Se(w,t,y):mt(w,t,y)})});return m.catch(function(v){return v}),m}function pt(r){return!!(r&&r.message!==void 0)}function bt(r,e){for(var t=r,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function _e(r,e){return function(t){var n;return r.fullFields?n=bt(e,r.fullFields):n=e[t.field||r.fullField],pt(t)?(t.field=t.field||r.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||r.fullField}}}function Oe(r,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof r[t]=="object"?r[t]=Y({},r[t],n):r[t]=n}}return r}var Ne=function(e,t,n,i,o,a){e.required&&(!n.hasOwnProperty(e.field)||q(t,a||e.type))&&i.push(j(o.messages.required,e.fullField))},vt=function(e,t,n,i,o){(/^\s+$/.test(t)||t==="")&&i.push(j(o.messages.whitespace,e.fullField))},ue,yt=function(){if(ue)return ue;var r="[a-fA-F\\d:]",e=function(x){return x&&x.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),f=function(x){return x&&x.exact?o:new RegExp("(?:"+e(x)+t+e(x)+")|(?:"+e(x)+i+e(x)+")","g")};f.v4=function(p){return p&&p.exact?a:new RegExp(""+e(p)+t+e(p),"g")},f.v6=function(p){return p&&p.exact?s:new RegExp(""+e(p)+i+e(p),"g")};var d="(?:(?:[a-z]+:)?//)",l="(?:\\S+(?::\\S*)?@)?",m=f.v4().source,v=f.v6().source,c="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",y="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",g="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",w="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',M="(?:"+d+"|www\\.)"+l+"(?:localhost|"+m+"|"+v+"|"+c+y+g+")"+w+u;return ue=new RegExp("(?:^"+M+"$)","i"),ue},Ae={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},te={integer:function(e){return te.number(e)&&parseInt(e,10)===e},float:function(e){return te.number(e)&&!te.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!te.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Ae.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(yt())},hex:function(e){return typeof e=="string"&&!!e.match(Ae.hex)}},xt=function(e,t,n,i,o){if(e.required&&t===void 0){Ne(e,t,n,i,o);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;a.indexOf(s)>-1?te[s](t)||i.push(j(o.messages.types[s],e.fullField,e.type)):s&&typeof t!==e.type&&i.push(j(o.messages.types[s],e.fullField,e.type))},wt=function(e,t,n,i,o){var a=typeof e.len=="number",s=typeof e.min=="number",f=typeof e.max=="number",d=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=t,m=null,v=typeof t=="number",c=typeof t=="string",y=Array.isArray(t);if(v?m="number":c?m="string":y&&(m="array"),!m)return!1;y&&(l=t.length),c&&(l=t.replace(d,"_").length),a?l!==e.len&&i.push(j(o.messages[m].len,e.fullField,e.len)):s&&!f&&l<e.min?i.push(j(o.messages[m].min,e.fullField,e.min)):f&&!s&&l>e.max?i.push(j(o.messages[m].max,e.fullField,e.max)):s&&f&&(l<e.min||l>e.max)&&i.push(j(o.messages[m].range,e.fullField,e.min,e.max))},G="enum",kt=function(e,t,n,i,o){e[G]=Array.isArray(e[G])?e[G]:[],e[G].indexOf(t)===-1&&i.push(j(o.messages[G],e.fullField,e[G].join(", ")))},qt=function(e,t,n,i,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(j(o.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(j(o.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},b={required:Ne,whitespace:vt,type:xt,range:wt,enum:kt,pattern:qt},Rt=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t,"string")&&!e.required)return n();b.required(e,t,i,a,o,"string"),q(t,"string")||(b.type(e,t,i,a,o),b.range(e,t,i,a,o),b.pattern(e,t,i,a,o),e.whitespace===!0&&b.whitespace(e,t,i,a,o))}n(a)},Ft=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t)&&!e.required)return n();b.required(e,t,i,a,o),t!==void 0&&b.type(e,t,i,a,o)}n(a)},St=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t===""&&(t=void 0),q(t)&&!e.required)return n();b.required(e,t,i,a,o),t!==void 0&&(b.type(e,t,i,a,o),b.range(e,t,i,a,o))}n(a)},Pt=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t)&&!e.required)return n();b.required(e,t,i,a,o),t!==void 0&&b.type(e,t,i,a,o)}n(a)},_t=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t)&&!e.required)return n();b.required(e,t,i,a,o),q(t)||b.type(e,t,i,a,o)}n(a)},Ot=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t)&&!e.required)return n();b.required(e,t,i,a,o),t!==void 0&&(b.type(e,t,i,a,o),b.range(e,t,i,a,o))}n(a)},At=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t)&&!e.required)return n();b.required(e,t,i,a,o),t!==void 0&&(b.type(e,t,i,a,o),b.range(e,t,i,a,o))}n(a)},$t=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(t==null&&!e.required)return n();b.required(e,t,i,a,o,"array"),t!=null&&(b.type(e,t,i,a,o),b.range(e,t,i,a,o))}n(a)},Et=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t)&&!e.required)return n();b.required(e,t,i,a,o),t!==void 0&&b.type(e,t,i,a,o)}n(a)},jt="enum",Mt=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t)&&!e.required)return n();b.required(e,t,i,a,o),t!==void 0&&b[jt](e,t,i,a,o)}n(a)},Lt=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t,"string")&&!e.required)return n();b.required(e,t,i,a,o),q(t,"string")||b.pattern(e,t,i,a,o)}n(a)},zt=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t,"date")&&!e.required)return n();if(b.required(e,t,i,a,o),!q(t,"date")){var f;t instanceof Date?f=t:f=new Date(t),b.type(e,f,i,a,o),f&&b.range(e,f.getTime(),i,a,o)}}n(a)},Vt=function(e,t,n,i,o){var a=[],s=Array.isArray(t)?"array":typeof t;b.required(e,t,i,a,o,s),n(a)},pe=function(e,t,n,i,o){var a=e.type,s=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(q(t,a)&&!e.required)return n();b.required(e,t,i,s,o,a),q(t,a)||b.type(e,t,i,s,o)}n(s)},It=function(e,t,n,i,o){var a=[],s=e.required||!e.required&&i.hasOwnProperty(e.field);if(s){if(q(t)&&!e.required)return n();b.required(e,t,i,a,o)}n(a)},ne={string:Rt,method:Ft,number:St,boolean:Pt,regexp:_t,integer:Ot,float:At,array:$t,object:Et,enum:Mt,pattern:Lt,date:zt,url:pe,hex:pe,email:pe,required:Vt,any:It};function we(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var ke=we(),oe=function(){function r(t){this.rules=null,this._messages=ke,this.define(t)}var e=r.prototype;return e.define=function(n){var i=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(o){var a=n[o];i.rules[o]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=Oe(we(),n)),this._messages},e.validate=function(n,i,o){var a=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var s=n,f=i,d=o;if(typeof f=="function"&&(d=f,f={}),!this.rules||Object.keys(this.rules).length===0)return d&&d(null,s),Promise.resolve(s);function l(g){var w=[],u={};function M(x){if(Array.isArray(x)){var S;w=(S=w).concat.apply(S,x)}else w.push(x)}for(var p=0;p<g.length;p++)M(g[p]);w.length?(u=xe(w),d(w,u)):d(null,s)}if(f.messages){var m=this.messages();m===ke&&(m=we()),Oe(m,f.messages),f.messages=m}else f.messages=this.messages();var v={},c=f.keys||Object.keys(this.rules);c.forEach(function(g){var w=a.rules[g],u=s[g];w.forEach(function(M){var p=M;typeof p.transform=="function"&&(s===n&&(s=Y({},s)),u=s[g]=p.transform(u)),typeof p=="function"?p={validator:p}:p=Y({},p),p.validator=a.getValidationMethod(p),p.validator&&(p.field=g,p.fullField=p.fullField||g,p.type=a.getType(p),v[g]=v[g]||[],v[g].push({rule:p,value:u,source:s,field:g}))})});var y={};return ht(v,f,function(g,w){var u=g.rule,M=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");M=M&&(u.required||!u.required&&g.value),u.field=g.field;function p(F,_){return Y({},_,{fullField:u.fullField+"."+F,fullFields:u.fullFields?[].concat(u.fullFields,[F]):[F]})}function x(F){F===void 0&&(F=[]);var _=Array.isArray(F)?F:[F];!f.suppressWarning&&_.length&&r.warning("async-validator:",_),_.length&&u.message!==void 0&&(_=[].concat(u.message));var L=_.map(_e(u,s));if(f.first&&L.length)return y[u.field]=1,w(L);if(!M)w(L);else{if(u.required&&!g.value)return u.message!==void 0?L=[].concat(u.message).map(_e(u,s)):f.error&&(L=[f.error(u,j(f.messages.required,u.field))]),w(L);var W={};u.defaultField&&Object.keys(g.value).map(function(z){W[z]=u.defaultField}),W=Y({},W,g.rule.fields);var ee={};Object.keys(W).forEach(function(z){var h=W[z],$=Array.isArray(h)?h:[h];ee[z]=$.map(p.bind(null,z))});var N=new r(ee);N.messages(f.messages),g.rule.options&&(g.rule.options.messages=f.messages,g.rule.options.error=f.error),N.validate(g.value,g.rule.options||f,function(z){var h=[];L&&L.length&&h.push.apply(h,L),z&&z.length&&h.push.apply(h,z),w(h.length?h:null)})}}var S;if(u.asyncValidator)S=u.asyncValidator(u,g.value,x,g.source,f);else if(u.validator){try{S=u.validator(u,g.value,x,g.source,f)}catch(F){console.error==null||console.error(F),f.suppressValidatorError||setTimeout(function(){throw F},0),x(F.message)}S===!0?x():S===!1?x(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):S instanceof Array?x(S):S instanceof Error&&x(S.message)}S&&S.then&&S.then(function(){return x()},function(F){return x(F)})},function(g){l(g)},s)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!ne.hasOwnProperty(n.type))throw new Error(j("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var i=Object.keys(n),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?ne.required:ne[this.getType(n)]||void 0},r}();oe.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");ne[e]=t};oe.warning=ut;oe.messages=ke;oe.validators=ne;function Ct(r){const e=ie(ae,null);return{mergedSize:R(()=>r.size!==void 0?r.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function Tt(r){const e=ie(ae,null),t=R(()=>{const{labelPlacement:c}=r;return c!==void 0?c:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),n=R(()=>t.value==="left"&&(r.labelWidth==="auto"||(e==null?void 0:e.props.labelWidth)==="auto")),i=R(()=>{if(t.value==="top")return;const{labelWidth:c}=r;if(c!==void 0&&c!=="auto")return he(c);if(n.value){const y=e==null?void 0:e.maxChildLabelWidthRef.value;return y!==void 0?he(y):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return he(e.props.labelWidth)}),o=R(()=>{const{labelAlign:c}=r;if(c)return c;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),a=R(()=>{var c;return[(c=r.labelProps)===null||c===void 0?void 0:c.style,r.labelStyle,{width:i.value}]}),s=R(()=>{const{showRequireMark:c}=r;return c!==void 0?c:e==null?void 0:e.props.showRequireMark}),f=R(()=>{const{requireMarkPlacement:c}=r;return c!==void 0?c:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),d=X(!1),l=R(()=>{const{validationStatus:c}=r;if(c!==void 0)return c;if(d.value)return"error"}),m=R(()=>{const{showFeedback:c}=r;return c!==void 0?c:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),v=R(()=>{const{showLabel:c}=r;return c!==void 0?c:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:d,mergedLabelStyle:a,mergedLabelPlacement:t,mergedLabelAlign:o,mergedShowRequireMark:s,mergedRequireMarkPlacement:f,mergedValidationStatus:l,mergedShowFeedback:m,mergedShowLabel:v,isAutoLabelWidth:n}}function Nt(r){const e=ie(ae,null),t=R(()=>{const{rulePath:a}=r;if(a!==void 0)return a;const{path:s}=r;if(s!==void 0)return s}),n=R(()=>{const a=[],{rule:s}=r;if(s!==void 0&&(Array.isArray(s)?a.push(...s):a.push(s)),e){const{rules:f}=e.props,{value:d}=t;if(f!==void 0&&d!==void 0){const l=Ie(f,d);l!==void 0&&(Array.isArray(l)?a.push(...l):a.push(l))}}return a}),i=R(()=>n.value.some(a=>a.required)),o=R(()=>i.value||r.required);return{mergedRules:n,mergedRequired:o}}const{cubicBezierEaseInOut:$e}=Ke;function Wt({name:r="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:n=".3s",enterCubicBezier:i=$e,leaveCubicBezier:o=$e}={}){return[Q(`&.${r}-transition-enter-from, &.${r}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),Q(`&.${r}-transition-enter-to, &.${r}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),Q(`&.${r}-transition-leave-active`,{transition:`opacity ${n} ${o}, transform ${n} ${o}`}),Q(`&.${r}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}const Bt=I("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[I("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 `,[le("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),le("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),I("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),V("auto-label-width",[I("form-item-label","white-space: nowrap;")]),V("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: start;
 `,[I("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[V("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),V("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),V("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),V("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),le("text",`
 grid-area: text; 
 `),le("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),V("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[V("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),I("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),I("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),I("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[Q("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),I("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[V("warning",{color:"var(--n-feedback-text-color-warning)"}),V("error",{color:"var(--n-feedback-text-color-error)"}),Wt({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var Ee=globalThis&&globalThis.__awaiter||function(r,e,t,n){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(l){try{d(n.next(l))}catch(m){a(m)}}function f(l){try{d(n.throw(l))}catch(m){a(m)}}function d(l){l.done?o(l.value):i(l.value).then(s,f)}d((n=n.apply(r,e||[])).next())})};const Ht=Object.assign(Object.assign({},me.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0},labelProps:Object});function je(r,e){return(...t)=>{try{const n=r(...t);return!e&&(typeof n=="boolean"||n instanceof Error||Array.isArray(n))||(n==null?void 0:n.then)?n:(n===void 0||Fe("form-item/validate",`You return a ${typeof n} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(n){Fe("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(n);return}}}const Zt=ze({name:"FormItem",props:Ht,setup(r){et(Te,"formItems",de(r,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=Ve(r),n=ie(ae,null),i=Ct(r),o=Tt(r),{validationErrored:a}=o,{mergedRequired:s,mergedRules:f}=Nt(r),{mergedSize:d}=i,{mergedLabelPlacement:l,mergedLabelAlign:m,mergedRequireMarkPlacement:v}=o,c=X([]),y=X(Re()),g=n?de(n.props,"disabled"):X(!1),w=me("Form","-form-item",Bt,Ce,r,e);Me(de(r,"path"),()=>{r.ignorePathChange||u()});function u(){c.value=[],a.value=!1,r.feedback&&(y.value=Re())}function M(){_("blur")}function p(){_("change")}function x(){_("focus")}function S(){_("input")}function F(h,$){return Ee(this,void 0,void 0,function*(){let E,O,H,U;return typeof h=="string"?(E=h,O=$):h!==null&&typeof h=="object"&&(E=h.trigger,O=h.callback,H=h.shouldRuleBeApplied,U=h.options),yield new Promise((K,J)=>{_(E,H,U).then(({valid:Z,errors:D})=>{Z?(O&&O(),K()):(O&&O(D),J(D))})})})}const _=(h=null,$=()=>!0,E={suppressWarning:!0})=>Ee(this,void 0,void 0,function*(){const{path:O}=r;E?E.first||(E.first=r.first):E={};const{value:H}=f,U=n?Ie(n.props.model,O||""):void 0,K={},J={},Z=(h?H.filter(C=>Array.isArray(C.trigger)?C.trigger.includes(h):C.trigger===h):H).filter($).map((C,T)=>{const k=Object.assign({},C);if(k.validator&&(k.validator=je(k.validator,!1)),k.asyncValidator&&(k.asyncValidator=je(k.asyncValidator,!0)),k.renderMessage){const A=`__renderMessage__${T}`;J[A]=k.message,k.message=A,K[A]=k.renderMessage}return k});if(!Z.length)return{valid:!0};const D=O!=null?O:"__n_no_path__",se=new oe({[D]:Z}),{validateMessages:fe}=(n==null?void 0:n.props)||{};return fe&&se.messages(fe),yield new Promise(C=>{se.validate({[D]:U},E,T=>{T!=null&&T.length?(c.value=T.map(k=>{const A=(k==null?void 0:k.message)||"";return{key:A,render:()=>A.startsWith("__renderMessage__")?K[A]():A}}),T.forEach(k=>{var A;!((A=k.message)===null||A===void 0)&&A.startsWith("__renderMessage__")&&(k.message=J[k.message])}),a.value=!0,C({valid:!1,errors:T})):(u(),C({valid:!0}))})})});be(Je,{path:de(r,"path"),disabled:g,mergedSize:i.mergedSize,mergedValidationStatus:o.mergedValidationStatus,restoreValidation:u,handleContentBlur:M,handleContentChange:p,handleContentFocus:x,handleContentInput:S});const L={validate:F,restoreValidation:u,internalValidate:_},W=X(null);Ze(()=>{if(!o.isAutoLabelWidth.value)return;const h=W.value;if(h!==null){const $=h.style.whiteSpace;h.style.whiteSpace="nowrap",h.style.width="",n==null||n.deriveMaxChildLabelWidth(Number(getComputedStyle(h).width.slice(0,-2))),h.style.whiteSpace=$}});const ee=R(()=>{var h;const{value:$}=d,{value:E}=l,O=E==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:H},self:{labelTextColor:U,asteriskColor:K,lineHeight:J,feedbackTextColor:Z,feedbackTextColorWarning:D,feedbackTextColorError:se,feedbackPadding:fe,[B("labelHeight",$)]:C,[B("blankHeight",$)]:T,[B("feedbackFontSize",$)]:k,[B("feedbackHeight",$)]:A,[B("labelPadding",O)]:We,[B("labelTextAlign",O)]:Be,[B(B("labelFontSize",E),$)]:He}}=w.value;let ge=(h=m.value)!==null&&h!==void 0?h:Be;return E==="top"&&(ge=ge==="right"?"flex-end":"flex-start"),{"--n-bezier":H,"--n-line-height":J,"--n-blank-height":T,"--n-label-font-size":He,"--n-label-text-align":ge,"--n-label-height":C,"--n-label-padding":We,"--n-asterisk-color":K,"--n-label-text-color":U,"--n-feedback-padding":fe,"--n-feedback-font-size":k,"--n-feedback-height":A,"--n-feedback-text-color":Z,"--n-feedback-text-color-warning":D,"--n-feedback-text-color-error":se}}),N=t?Ge("form-item",R(()=>{var h;return`${d.value[0]}${l.value[0]}${((h=m.value)===null||h===void 0?void 0:h[0])||""}`}),ee,r):void 0,z=R(()=>l.value==="left"&&v.value==="left"&&m.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:W,mergedClsPrefix:e,mergedRequired:s,feedbackId:y,renderExplains:c,reverseColSpace:z},o),i),L),{cssVars:t?void 0:ee,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender})},render(){const{$slots:r,mergedClsPrefix:e,mergedShowLabel:t,mergedShowRequireMark:n,mergedRequireMarkPlacement:i,onRender:o}=this,a=n!==void 0?n:this.mergedRequired;o==null||o();const s=()=>{const f=this.$slots.label?this.$slots.label():this.label;if(!f)return null;const d=P("span",{class:`${e}-form-item-label__text`},f),l=a?P("span",{class:`${e}-form-item-label__asterisk`},i!=="left"?"\xA0*":"*\xA0"):i==="right-hanging"&&P("span",{class:`${e}-form-item-label__asterisk-placeholder`},"\xA0*"),{labelProps:m}=this;return P("label",Object.assign({},m,{class:[m==null?void 0:m.class,`${e}-form-item-label`,`${e}-form-item-label--${i}-mark`,this.reverseColSpace&&`${e}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),i==="left"?[l,d]:[d,l])};return P("div",{class:[`${e}-form-item`,this.themeClass,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${e}-form-item--auto-label-width`,!t&&`${e}-form-item--no-label`],style:this.cssVars},t&&s(),P("div",{class:[`${e}-form-item-blank`,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`]},r),this.mergedShowFeedback?P("div",{key:this.feedbackId,class:`${e}-form-item-feedback-wrapper`},P(Qe,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:f}=this;return Xe(r.feedback,d=>{var l;const{feedback:m}=this,v=d||m?P("div",{key:"__feedback__",class:`${e}-form-item-feedback__line`},d||m):this.renderExplains.length?(l=this.renderExplains)===null||l===void 0?void 0:l.map(({key:c,render:y})=>P("div",{key:c,class:`${e}-form-item-feedback__line`},y())):null;return v?f==="warning"?P("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},v):f==="error"?P("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},v):f==="success"?P("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},v):P("div",{key:"controlled-default",class:`${e}-form-item-feedback`},v):null})}})):null)}});export{Zt as _,Jt as a};

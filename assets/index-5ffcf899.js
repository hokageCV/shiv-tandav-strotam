(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function _(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=_(i);fetch(i.href,r)}})();var M,f,ie,N,J,le,ce,U={},se=[],Ne=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var _ in t)e[_]=t[_];return e}function ue(e){var t=e.parentNode;t&&t.removeChild(e)}function Ce(e,t,_){var o,i,r,l={};for(r in t)r=="key"?o=t[r]:r=="ref"?i=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?M.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return T(e,l,o,i,null)}function T(e,t,_,o,i){var r={type:e,props:t,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++ie};return i==null&&f.vnode!=null&&f.vnode(r),r}function D(e){return e.children}function A(e,t){this.props=e,this.context=t}function w(e,t){if(t==null)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?w(e):null}function fe(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return fe(e)}}function q(e){(!e.__d&&(e.__d=!0)&&N.push(e)&&!O.__r++||J!==f.debounceRendering)&&((J=f.debounceRendering)||le)(O)}function O(){var e,t,_,o,i,r,l,s;for(N.sort(function(u,a){return u.__v.__b-a.__v.__b});e=N.shift();)e.__d&&(t=N.length,o=void 0,i=void 0,l=(r=(_=e).__v).__e,(s=_.__P)&&(o=[],(i=k({},r)).__v=r.__v+1,j(s,r,i,_.__n,s.ownerSVGElement!==void 0,r.__h!=null?[l]:null,o,l??w(r),r.__h),ve(o,r),r.__e!=l&&fe(r)),N.length>t&&N.sort(function(u,a){return u.__v.__b-a.__v.__b}));O.__r=0}function ae(e,t,_,o,i,r,l,s,u,a){var n,v,d,c,h,C,m,g=o&&o.__k||se,x=g.length;for(_.__k=[],n=0;n<t.length;n++)if((c=_.__k[n]=(c=t[n])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?T(null,c,null,null,c):Array.isArray(c)?T(D,{children:c},null,null,null):c.__b>0?T(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=_,c.__b=_.__b+1,(d=g[n])===null||d&&c.key==d.key&&c.type===d.type)g[n]=void 0;else for(v=0;v<x;v++){if((d=g[v])&&c.key==d.key&&c.type===d.type){g[v]=void 0;break}d=null}j(e,c,d=d||U,i,r,l,s,u,a),h=c.__e,(v=c.ref)&&d.ref!=v&&(m||(m=[]),d.ref&&m.push(d.ref,null,c),m.push(v,c.__c||h,c)),h!=null?(C==null&&(C=h),typeof c.type=="function"&&c.__k===d.__k?c.__d=u=de(c,u,e):u=he(e,c,d,g,h,u),typeof _.type=="function"&&(_.__d=u)):u&&d.__e==u&&u.parentNode!=e&&(u=w(d))}for(_.__e=C,n=x;n--;)g[n]!=null&&(typeof _.type=="function"&&g[n].__e!=null&&g[n].__e==_.__d&&(_.__d=pe(o).nextSibling),ye(g[n],g[n]));if(m)for(n=0;n<m.length;n++)me(m[n],m[++n],m[++n])}function de(e,t,_){for(var o,i=e.__k,r=0;i&&r<i.length;r++)(o=i[r])&&(o.__=e,t=typeof o.type=="function"?de(o,t,_):he(_,o,o,i,o.__e,t));return t}function he(e,t,_,o,i,r){var l,s,u;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(_==null||i!=r||i.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(i),l=null;else{for(s=r,u=0;(s=s.nextSibling)&&u<o.length;u+=1)if(s==i)break e;e.insertBefore(i,r),l=r}return l!==void 0?l:i.nextSibling}function pe(e){var t,_,o;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((_=e.__k[t])&&(o=pe(_)))return o}return null}function Se(e,t,_,o,i){var r;for(r in _)r==="children"||r==="key"||r in t||F(e,r,null,_[r],o);for(r in t)i&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||_[r]===t[r]||F(e,r,t[r],_[r],o)}function Q(e,t,_){t[0]==="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||Ne.test(t)?_:_+"px"}function F(e,t,_,o,i){var r;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)_&&t in _||Q(e.style,t,"");if(_)for(t in _)o&&_[t]===o[t]||Q(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=_,_?o||e.addEventListener(t,r?Y:X,r):e.removeEventListener(t,r?Y:X,r);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,_))}}function X(e){return this.l[e.type+!1](f.event?f.event(e):e)}function Y(e){return this.l[e.type+!0](f.event?f.event(e):e)}function j(e,t,_,o,i,r,l,s,u){var a,n,v,d,c,h,C,m,g,x,$,S,K,H,P,b=t.type;if(t.constructor!==void 0)return null;_.__h!=null&&(u=_.__h,s=t.__e=_.__e,t.__h=null,r=[s]),(a=f.__b)&&a(t);try{e:if(typeof b=="function"){if(m=t.props,g=(a=b.contextType)&&o[a.__c],x=a?g?g.props.value:a.__:o,_.__c?C=(n=t.__c=_.__c).__=n.__E:("prototype"in b&&b.prototype.render?t.__c=n=new b(m,x):(t.__c=n=new A(m,x),n.constructor=b,n.render=$e),g&&g.sub(n),n.props=m,n.state||(n.state={}),n.context=x,n.__n=o,v=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),b.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,b.getDerivedStateFromProps(m,n.__s))),d=n.props,c=n.state,n.__v=t,v)b.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(b.getDerivedStateFromProps==null&&m!==d&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(m,x),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(m,n.__s,x)===!1||t.__v===_.__v){for(t.__v!==_.__v&&(n.props=m,n.state=n.__s,n.__d=!1),n.__e=!1,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(E){E&&(E.__=t)}),$=0;$<n._sb.length;$++)n.__h.push(n._sb[$]);n._sb=[],n.__h.length&&l.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(m,n.__s,x),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(d,c,h)})}if(n.context=x,n.props=m,n.__P=e,S=f.__r,K=0,"prototype"in b&&b.prototype.render){for(n.state=n.__s,n.__d=!1,S&&S(t),a=n.render(n.props,n.state,n.context),H=0;H<n._sb.length;H++)n.__h.push(n._sb[H]);n._sb=[]}else do n.__d=!1,S&&S(t),a=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++K<25);n.state=n.__s,n.getChildContext!=null&&(o=k(k({},o),n.getChildContext())),v||n.getSnapshotBeforeUpdate==null||(h=n.getSnapshotBeforeUpdate(d,c)),P=a!=null&&a.type===D&&a.key==null?a.props.children:a,ae(e,Array.isArray(P)?P:[P],t,_,o,i,r,l,s,u),n.base=t.__e,t.__h=null,n.__h.length&&l.push(n),C&&(n.__E=n.__=null),n.__e=!1}else r==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=we(_.__e,t,_,o,i,r,l,u);(a=f.diffed)&&a(t)}catch(E){t.__v=null,(u||r!=null)&&(t.__e=s,t.__h=!!u,r[r.indexOf(s)]=null),f.__e(E,t,_)}}function ve(e,t){f.__c&&f.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(o){o.call(_)})}catch(o){f.__e(o,_.__v)}})}function we(e,t,_,o,i,r,l,s){var u,a,n,v=_.props,d=t.props,c=t.type,h=0;if(c==="svg"&&(i=!0),r!=null){for(;h<r.length;h++)if((u=r[h])&&"setAttribute"in u==!!c&&(c?u.localName===c:u.nodeType===3)){e=u,r[h]=null;break}}if(e==null){if(c===null)return document.createTextNode(d);e=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,d.is&&d),r=null,s=!1}if(c===null)v===d||s&&e.data===d||(e.data=d);else{if(r=r&&M.call(e.childNodes),a=(v=_.props||U).dangerouslySetInnerHTML,n=d.dangerouslySetInnerHTML,!s){if(r!=null)for(v={},h=0;h<e.attributes.length;h++)v[e.attributes[h].name]=e.attributes[h].value;(n||a)&&(n&&(a&&n.__html==a.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(Se(e,d,v,i,s),n)t.__k=[];else if(h=t.props.children,ae(e,Array.isArray(h)?h:[h],t,_,o,i&&c!=="foreignObject",r,l,r?r[0]:_.__k&&w(_,0),s),r!=null)for(h=r.length;h--;)r[h]!=null&&ue(r[h]);s||("value"in d&&(h=d.value)!==void 0&&(h!==e.value||c==="progress"&&!h||c==="option"&&h!==v.value)&&F(e,"value",h,v.value,!1),"checked"in d&&(h=d.checked)!==void 0&&h!==e.checked&&F(e,"checked",h,v.checked,!1))}return e}function me(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(o){f.__e(o,_)}}function ye(e,t,_){var o,i;if(f.unmount&&f.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||me(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){f.__e(r,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&ye(o[i],t,_||typeof e.type!="function");_||e.__e==null||ue(e.__e),e.__=e.__e=e.__d=void 0}function $e(e,t,_){return this.constructor(e,_)}function He(e,t,_){var o,i,r;f.__&&f.__(e,t),i=(o=typeof _=="function")?null:_&&_.__k||t.__k,r=[],j(t,e=(!o&&_||t).__k=Ce(D,null,[e]),i||U,U,t.ownerSVGElement!==void 0,!o&&_?[_]:i?null:t.firstChild?M.call(t.childNodes):null,r,!o&&_?_:i?i.__e:t.firstChild,o),ve(r,e)}function Pe(e,t){var _={__c:t="__cC"+ce++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&i.some(function(s){s.__e=!0,q(s)})},this.sub=function(l){i.push(l);var s=l.componentWillUnmount;l.componentWillUnmount=function(){i.splice(i.indexOf(l),1),s&&s.call(l)}}),o.children}};return _.Provider.__=_.Consumer.contextType=_}M=se.slice,f={__e:function(e,t,_,o){for(var i,r,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),l=i.__d),l)return i.__E=i}catch(s){e=s}throw e}},ie=0,A.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},_),this.props)),e&&k(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),q(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),q(this))},A.prototype.render=D,N=[],le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O.__r=0,ce=0;var Ee=0;function p(e,t,_,o,i,r){var l,s,u={};for(s in t)s=="ref"?l=t[s]:u[s]=t[s];var a={type:e,props:u,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ee,__source:i,__self:r};if(typeof e=="function"&&(l=e.defaultProps))for(s in l)u[s]===void 0&&(u[s]=l[s]);return f.vnode&&f.vnode(a),a}function W({titleName:e,onClick:t}){return p("label",{className:"label flex flex-col mx-1 cursor-pointer",children:[p("span",{className:"label-text text-md text-navSelectorLabel",children:e}),p("input",{type:"radio",name:"radio-10",className:"my-1 radio radio-sm checked:bg-navSelectorChecked checked:outline-none outline outline-2 outline-navHeading",onClick:t})]})}var R,y,I,Z,G=0,ge=[],B=[],ee=f.__b,te=f.__r,_e=f.diffed,ne=f.__c,re=f.unmount;function be(e,t){f.__h&&f.__h(y,e,G||t),G=0;var _=y.__H||(y.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:B}),_.__[e]}function Te(e){return G=1,Ae(ke,e)}function Ae(e,t,_){var o=be(R++,2);if(o.t=e,!o.__c&&(o.__=[_?_(t):ke(void 0,t),function(r){var l=o.__N?o.__N[0]:o.__[0],s=o.t(l,r);l!==s&&(o.__N=[s,o.__[1]],o.__c.setState({}))}],o.__c=y,!y.u)){y.u=!0;var i=y.shouldComponentUpdate;y.shouldComponentUpdate=function(r,l,s){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return!n.__N}))return!i||i.call(this,r,l,s);var a=!1;return u.forEach(function(n){if(n.__N){var v=n.__[0];n.__=n.__N,n.__N=void 0,v!==n.__[0]&&(a=!0)}}),!(!a&&o.__c.props===r)&&(!i||i.call(this,r,l,s))}}return o.__N||o.__}function xe(e){var t=y.context[e.__c],_=be(R++,9);return _.c=e,t?(_.__==null&&(_.__=!0,t.sub(y)),t.props.value):e.__}function Be(){for(var e;e=ge.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(L),e.__H.__h.forEach(V),e.__H.__h=[]}catch(t){e.__H.__h=[],f.__e(t,e.__v)}}f.__b=function(e){y=null,ee&&ee(e)},f.__r=function(e){te&&te(e),R=0;var t=(y=e.__c).__H;t&&(I===y?(t.__h=[],y.__h=[],t.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=B,_.__N=_.i=void 0})):(t.__h.forEach(L),t.__h.forEach(V),t.__h=[])),I=y},f.diffed=function(e){_e&&_e(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ge.push(t)!==1&&Z===f.requestAnimationFrame||((Z=f.requestAnimationFrame)||Le)(Be)),t.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==B&&(_.__=_.__V),_.i=void 0,_.__V=B})),I=y=null},f.__c=function(e,t){t.some(function(_){try{_.__h.forEach(L),_.__h=_.__h.filter(function(o){return!o.__||V(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],f.__e(o,_.__v)}}),ne&&ne(e,t)},f.unmount=function(e){re&&re(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(o){try{L(o)}catch(i){t=i}}),_.__H=void 0,t&&f.__e(t,_.__v))};var oe=typeof requestAnimationFrame=="function";function Le(e){var t,_=function(){clearTimeout(o),oe&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(_,100);oe&&(t=requestAnimationFrame(_))}function L(e){var t=y,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),y=t}function V(e){var t=y;e.__c=e.__(),y=t}function ke(e,t){return typeof t=="function"?t(e):t}const Ue=()=>{const[e,t]=Te("2");return{blur:e,changeBlur:o=>t(o)}},z=Pe({}),Oe=({children:e})=>{const{blur:t,changeBlur:_}=Ue();return p(z.Provider,{value:{blur:t,changeBlur:_},children:e})},Fe=()=>xe(z),Me="/shiv-tandav-strotam/assets/om.png";function De(){const e=xe(z),{blur:t,changeBlur:_}=e;return p("div",{className:"navbar bg-navBG sticky top-0 z-50  flex flex-col md:flex-row",children:[p("div",{className:"logoHeading md:flex-1",children:[p("span",{children:p("img",{src:Me,alt:"OM icon",width:50,height:50,className:"m-1"})}),p("p",{className:"btn btn-ghost mx-0.5 px-0.5 normal-case text-2xl text-navHeading",children:"Shiv Tandav Strotam"})]}),p("div",{className:"md:flex-none flex flex-row",children:[p(W,{titleName:"Show All",onClick:()=>_("1")}),p(W,{titleName:"Show first few",onClick:()=>_("2")}),p(W,{titleName:"Show None",onClick:()=>_("3")})]})]})}const We=[{first1:"जटा-टवी-",first2:"गलज्-जल-प्रवाह-पावि-तस्थले",second:"गलेऽव-लम्ब्य-लम्बितां   भुजंग-तुंग-मालिकाम्‌।",third:"डमड्-डमड्-डमड्-डमन्-निनाद-वड्-डमर्वयं",fourth:"चकार चंड-तांडवं  तनोतुनः शिवः शिवम ॥1॥"},{first1:"जटा-कटाह-",first2:"संभ्रम-भ्रमन्-निलिम्प्-निर्झरी",second:"विलोल-वीचि-वल्लरी-विराजमान-मूर्धनि ।",third:"धगद्-धगद्-धगज्-ज्वलल् ललाट-पट्ट्-पावके",fourth:"किशोर-चंद्र-शेखरे  रतिः प्रति-क्षणं मम ॥2॥"},{first1:"धरा-धरेंद्र-",first2:"नंदिनी-विलास-बंधु-बंधुर",second:"स्फुरद्-दिगन्त्-संतति-प्रमोद-मान-मानसे ।",third:"कृपा-कटाक्ष-धोरणी-निरुद्ध-दुर्धरा-पदि",fourth:"क्वछिद्-दिगम्बरे-मनो-विनोद-मेतु-वस्तुनि ॥3॥"},{first1:"जटा-भुजंग-",first2:"पिंगल-स्फुरत्-फणा-मणि-प्रभा",second:"कदंब-कुङ्कुमद्रव-प्रलिप्त-दिग्वधू-मुखे ।",third:"मदांध-सिंधुर-स्फुरत्त्व-गुत्तरीय-मेदुरे",fourth:"मनो-विनोद-मद्भुतं-बिभर्तु-भूत-भर्तरि ॥4॥"},{first1:"सहस्र-लोचन-",first2:"प्रभृत्य-शेष-लेख-शेखर",second:"प्रसून-धूलि-धोरणी-विधू-सरांघ्रि-पीठभूः ।",third:"भुजंग-राज-मालया-निबद्ध-जाट-जूटक",fourth:"श्रियै-चिराय-जायतां-चकोर-बंधु-शेखरः ॥5॥"},{first1:"ललाट-चत्वर-",first2:"ज्वल-धनंजय-स्फुलिङगभा",second:"निपीत-पंच-सायकं-नमन्-निलिम्प्-नायकम्‌ ।",third:"सुधा-मयुख-लेखया-विराज-मान-शेखरं",fourth:"महा-कपालि-संपदे-शिरो-जटाल-मस्तुनः ॥6॥"},{first1:"कराल-भाल-",first2:"पट्टिका-धगद्-धगद्-धगज्-ज्वल ",second:"द्धनंजया-हुती-कृत-प्रचंड-पंच-सायके ।",third:"धरा-धरेंद्र-नंदिनी-कुचाग्र-चित्र-पत्रक",fourth:"प्रकल्प-नैक-शिल्पिनि-त्रिलोचने-रतिर्मम ॥7॥"},{first1:"नवीन-मेघ-",first2:"मंडली-निरुदध्-दुर्धर्-स्फुरत्",second:"कुहू-निशीथिनी-तमः-प्रबंध-बंध-कंधरः ।",third:"निलिम्प-निर्झरि-धरस्तनोतु-कृत्ति-सिंधुरः",fourth:"कला-निधान-बंधुरः-श्रियं-जगद्-धुरंधरः ॥8॥"},{first1:"प्रफुल्ल-नील-",first2:"पंकज-प्रपंच-कालिम-प्रभा",second:"वलम्बि-कंठ-कन्दली-रुचि-प्रबध-कंधरम्‌  |",third:"स्मरच्छिदं-पुरच्छिदं-भवच्छिदं-मखच्छिदं",fourth:"गजच्छि-दांध-कच्छिदं-तमंत-कच्छिदं-भजे ॥9॥"},{first1:"अखर्व-सर्व-",first2:"मंगला-कला-कदम्ब-मंजरी",second:"रस-प्रवाह-माधुरी-विजृम्भणा-मधु-व्रतम्‌ ।",third:"स्मरांतकं-पुरातकं-भावंतकं-मखांतकं",fourth:"गजांत-कांध-कांतकं-तमंत-कांतकं-भजे ॥10॥"},{first1:"जयत्-वदभ्र-",first2:"विभ्रम-भ्रमद्-भुजङ्ग-मश्वस",second:"द्विनिर्गमत्-क्रम्-स्फुरत्-कराल-भाल-हव्य-वाट् ।",third:"धिमिद्-धिमिद्-धिमिद्-ध्वनन्-म्रिदङ्ग-तुंग-मंगल",fourth:"ध्वनि-क्रम-प्रवर्तित-प्रचण्ड-ताण्डवः शिवः ॥11॥"},{first1:"द्रिषद्-विचित्र-",first2:"तल्पयोर-भुजङ्ग-मौक्ति-कस्त्रजोर",second:"र्गरिष्ठ-रत्न-लोष्टयोः-सुहृद्-विपक्ष-पक्ष-योः ।",third:"तृणारविंद-चक्षुषोः-प्रजा-मही-महेन्द्रयोः",fourth:"समं-प्रविृतिकः कदा-सदा-शिवं-भजाम्यहम्‌॥12॥"},{first1:"कदा-निलिंप-",first2:"निर्झरी-निकुन्ज्-कोटरे-वसन्‌",second:"विमुक्त-दुर्मतिःसदा-शिरःस्थ-मंजलिं-वहन्‌।",third:"विलोल-लोल-लोचनो-ललाम-भाल-लग्नकः",fourth:"शिवेति-मंत्र-मुच्चरन्‌-कदा-सुखी-भवाम्यहम्‌॥13॥"},{first1:"निलिम्प-नाथनागरी-",first2:"कदम्ब-मौल-मल्लिका",second:"निगुम्फ-निर्झर-क्षणम-धूष्णिकामनोहरः ।",third:"तनोतु-नो-मनोमुदं-विनोदिनी-महनिशं",fourth:"परिश्रय परं-पदं-तदंगजत्विषां-चयः ॥14॥"},{first1:"प्रचण्ड-वाड-",first2:"वानल-प्रभाशुभ-प्रचारणी",second:"महाष्ट-सिद्धिकामिनी-जनावहूत-जल्पना ।",third:"विमुक्त-वाम-लोचनो-विवाह-कालि-कध्वनिः",fourth:"शिवेति मन्त्र-भूषगो-जगज्जयाय-जायताम्‌ ॥15॥"},{first1:"इमं-हि-",first2:"नित्य-मेव-मुक्त-मुत्त-मोत्तमं-स्तवं",second:"पठन्-स्मरन्-ब्रुवन्-नरो-विशुद्धि-मेति-संततम्‌।",third:"हरे-गुरौ-सुभक्ति-माशु-याति-नांयथा-गतिं",fourth:"विमोहनं-हि-देहिनां-सुशंकरस्य-चिंतनम ॥16॥"},{first1:"पूजा-वसान-",first2:"समये-दश-वक्रत्र-गीतं",second:"यःशम्भू-पूजन-परंं-पठति-प्रदोषे ।",third:"तस्य-स्थिरां-रथ-गजेंद्र-तुरंग-युक्तां",fourth:"लक्ष्मीं-सदैव-सुमुखीं-प्रददाति-शम्भुः ॥17॥"}];function Ie({first1:e,first2:t,second:_,third:o,fourth:i}){const{blur:r}=Fe(),l="blur-lg hover:blur-none bg-blurBG hover:bg-blurHoverBG",s="my-0.5 mx-0 py-1 px-0",u="m-0 p-0",a=r!=="1"?`${l} ${u}`:`${u}`;return p("div",{className:"card select-none mx-0.5 my-1 py-1 px-0 w-96 bg-shlokCardBG text-shlokText",children:p("div",{className:`card-body w-full flex xs:flex-col justify-center items-center  md:text-md lg:text-lg  ${s}`,children:[p("p",{className:a,children:[p("span",{className:r==="3"?l:"",children:e}),p("span",{className:r!=="1"?l:"",children:t})]}),p("p",{className:a,children:_}),p("p",{className:a,children:o}),p("p",{className:a,children:i})]})})}function qe(){return p("div",{className:"flex flex-col justify-center items-center my-7 mx-0  md:p-2",children:[We.map(e=>p(Ie,{first1:e.first1,first2:e.first2,second:e.second,third:e.third,fourth:e.fourth})),p("div",{className:"card select-none my-2 w-96  text-shlokText",children:p("div",{className:"card-body",children:p("p",{children:"इति श्रीरावण-कृतम्-शिव-ताण्डव-स्तोत्रम्म्पूर्णम् ॥"})})})]})}function Ge(){return p("footer",{className:"footer footer-center relative"})}function Ve(){return p(Oe,{children:p("div",{className:" bg-baseBG mx-0 px-0.5",children:[p(De,{}),p(qe,{}),p(Ge,{})]})})}He(p(Ve,{}),document.getElementById("app"));
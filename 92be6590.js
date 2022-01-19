/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,o,i){var n,a=arguments.length,r=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,o,r):n(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new n(i,o)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new n("string"==typeof t?t:t+"",o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s;const l=window.trustedTypes,d=l?l.emptyScript:"",p=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},c=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:c};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Eh(o,e);void 0!==i&&(this._$Eu.set(i,o),t.push(i))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{e?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=h){var i,n;const a=this.constructor._$Eh(t,o);if(void 0!==a&&!0===o.reflect){const r=(null!==(n=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:u.toAttribute)(e,o.type);this._$Ei=t,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Ei=null}}_$AK(t,e){var o,i,n;const a=this.constructor,r=a._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=a.getPropertyOptions(r),s=t.converter,l=null!==(n=null!==(i=null===(o=s)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof s?s:null)&&void 0!==n?n:u.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:m}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.1.1");const g=globalThis.trustedTypes,v=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,_="?"+f,y=`<${_}>`,x=document,w=(t="")=>x.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$=/-->/g,C=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,j=/"/g,N=/^(?:script|style|textarea)$/i,T=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),U=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),I=new WeakMap,M=x.createTreeWalker(x,129,null,!1),D=(t,e)=>{const o=t.length-1,i=[];let n,a=2===e?"<svg>":"",r=E;for(let e=0;e<o;e++){const o=t[e];let s,l,d=-1,p=0;for(;p<o.length&&(r.lastIndex=p,l=r.exec(o),null!==l);)p=r.lastIndex,r===E?"!--"===l[1]?r=$:void 0!==l[1]?r=C:void 0!==l[2]?(N.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=A):void 0!==l[3]&&(r=A):r===A?">"===l[0]?(r=null!=n?n:E,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?A:'"'===l[3]?j:P):r===j||r===P?r=A:r===$||r===C?r=E:(r=A,n=void 0);const u=r===A&&t[e+1].startsWith("/>")?" ":"";a+=r===E?o+y:d>=0?(i.push(s),o.slice(0,d)+"$lit$"+o.slice(d)+f+u):o+f+(-2===d?(i.push(void 0),e):u)}const s=a+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(s):s,i]};class z{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,a=0;const r=t.length-1,s=this.parts,[l,d]=D(t,e);if(this.el=z.createElement(l,o),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=M.nextNode())&&s.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const o=d[a++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?Z:"@"===e[1]?F:V})}else s.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(N.test(i.tagName)){const t=i.textContent.split(f),e=t.length-1;if(e>0){i.textContent=g?g.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],w()),M.nextNode(),s.push({type:2,index:++n});i.append(t[e],w())}}}else if(8===i.nodeType)if(i.data===_)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(f,t+1));)s.push({type:7,index:n}),t+=f.length-1}n++}}static createElement(t,e){const o=x.createElement("template");return o.innerHTML=t,o}}function R(t,e,o=t,i){var n,a,r,s;if(e===U)return e;let l=void 0!==i?null===(n=o._$Cl)||void 0===n?void 0:n[i]:o._$Cu;const d=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,o,i)),void 0!==i?(null!==(r=(s=o)._$Cl)&&void 0!==r?r:s._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(e=R(t,l._$AS(t,e.values),l,i)),e}class O{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(o,!0);M.currentNode=n;let a=M.nextNode(),r=0,s=0,l=i[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new B(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new G(a,this,t)),this.v.push(e),l=i[++s]}r!==(null==l?void 0:l.index)&&(a=M.nextNode(),r++)}return n}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class B{constructor(t,e,o,i){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),k(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==U&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==L&&k(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=z.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(o);else{const t=new O(n,this),e=t.p(this.options);t.m(o),this.S(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new z(t)),e}A(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new B(this.M(w()),this.M(w()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,o,i,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const n=this.strings;let a=!1;if(void 0===n)t=R(this,t,e,0),a=!k(t)||t!==this._$AH&&t!==U,a&&(this._$AH=t);else{const i=t;let r,s;for(t=n[0],r=0;r<n.length-1;r++)s=R(this,i[o+r],e,r),s===U&&(s=this._$AH[r]),a||(a=!k(s)||s!==this._$AH[r]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+n[r+1]),this._$AH[r]=s}a&&!i&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends V{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}const W=g?g.emptyScript:"";class Z extends V{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class F extends V{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=R(this,t,e,0))&&void 0!==o?o:L)===U)return;const i=this._$AH,n=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==L&&(i===L||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const J=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,q;null==J||J(z,B),(null!==(b=globalThis.litHtmlVersions)&&void 0!==b?b:globalThis.litHtmlVersions=[]).push("2.1.1");class K extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var i,n;const a=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let r=a._$litPart$;if(void 0===r){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;a._$litPart$=r=new B(e.insertBefore(w(),t),t,void 0,null!=o?o:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return U}}K.finalized=!0,K._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:K});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:K}),(null!==(q=globalThis.litElementVersions)&&void 0!==q?q:globalThis.litElementVersions=[]).push("3.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function tt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):X(t,e)}const et={weekday:"long",year:"numeric",month:"long",day:"numeric"};function ot(t){return localStorage.setItem("ielou_app",JSON.stringify(t))}function it(){const t=localStorage.getItem("ielou_app");return JSON.parse(t)}const nt={isDark:!1,activeProject:null,projects:[{id:"01",title:"Example Project",description:"Here are some tips on how to use the ielou app.",date:(new Date).toLocaleString(void 0,et),notes:[{id:"01",isPinned:!0,content:"Hello there! Lets go!."},{id:"03",isPinned:!1,content:"Double click the Project title or description to edit"},{id:"04",isPinned:!1,content:"Double click a note content to edit"},{id:"05",isPinned:!1,content:"Go to the settings to change the theme"}]}]},at=a`:host{box-sizing:border-box;min-height:100vh;width:100%;display:grid;grid-template-columns:min-content 1fr;grid-template-rows:auto 1fr;grid-template-areas:'topbar topbar' 'sidebar stage';transition:all 2s ease-out}@media screen and (min-width:${640}px){:host{grid-template-areas:'topbar stage' 'sidebar stage'}}`
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,rt="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,st=(t,e,o=null)=>{for(;e!==o;){const o=e.nextSibling;t.removeChild(e),e=o}},lt=`{{lit-${String(Math.random()).slice(2)}}}`,dt=`\x3c!--${lt}--\x3e`,pt=new RegExp(`${lt}|${dt}`);class ut{constructor(t,e){this.parts=[],this.element=e;const o=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let a=0,r=-1,s=0;const{strings:l,values:{length:d}}=t;for(;s<d;){const t=n.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let i=0;for(let t=0;t<o;t++)ct(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=l[s],o=bt.exec(e)[2],i=o.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const a=n.split(pt);this.parts.push({type:"attribute",index:r,name:o,strings:a}),s+=a.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(lt)>=0){const i=t.parentNode,n=e.split(pt),a=n.length-1;for(let e=0;e<a;e++){let o,a=n[e];if(""===a)o=mt();else{const t=bt.exec(a);null!==t&&ct(t[2],"$lit$")&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),o=document.createTextNode(a)}i.insertBefore(o,t),this.parts.push({type:"node",index:++r})}""===n[a]?(i.insertBefore(mt(),t),o.push(t)):t.data=n[a],s+=a}}else if(8===t.nodeType)if(t.data===lt){const e=t.parentNode;null!==t.previousSibling&&r!==a||(r++,e.insertBefore(mt(),t)),a=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(o.push(t),r--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(lt,e+1));)this.parts.push({type:"node",index:-1}),s++}}else n.currentNode=i.pop()}for(const t of o)t.parentNode.removeChild(t)}}const ct=(t,e)=>{const o=t.length-e.length;return o>=0&&t.slice(o)===e},ht=t=>-1!==t.index,mt=()=>document.createComment(""),bt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function gt(t,e){const{element:{content:o},parts:i}=t,n=document.createTreeWalker(o,133,null,!1);let a=ft(i),r=i[a],s=-1,l=0;const d=[];let p=null;for(;n.nextNode();){s++;const t=n.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(d.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==r&&r.index===s;)r.index=null!==p?-1:r.index-l,a=ft(i,a),r=i[a]}d.forEach((t=>t.parentNode.removeChild(t)))}const vt=t=>{let e=11===t.nodeType?0:1;const o=document.createTreeWalker(t,133,null,!1);for(;o.nextNode();)e++;return e},ft=(t,e=-1)=>{for(let o=e+1;o<t.length;o++){const e=t[o];if(ht(e))return o}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _t=new WeakMap,yt=t=>"function"==typeof t&&_t.has(t),xt={},wt={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class kt{constructor(t,e,o){this.__parts=[],this.template=t,this.processor=e,this.options=o}update(t){let e=0;for(const o of this.__parts)void 0!==o&&o.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=rt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],o=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,a=0,r=0,s=i.nextNode();for(;a<o.length;)if(n=o[a],ht(n)){for(;r<n.index;)r++,"TEMPLATE"===s.nodeName&&(e.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=e.pop(),s=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,n.name,n.strings,this.options));a++}else this.__parts.push(void 0),a++;return rt&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const St=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),Et=` ${lt} `;class $t{constructor(t,e,o,i){this.strings=t,this.values=e,this.type=o,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");o=(n>-1||o)&&-1===t.indexOf("--\x3e",n+1);const a=bt.exec(t);e+=null===a?t+(o?Et:dt):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+lt}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==St&&(e=St.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ct=t=>null===t||!("object"==typeof t||"function"==typeof t),At=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Pt{constructor(t,e,o){this.dirty=!0,this.element=t,this.name=e,this.strings=o,this.parts=[];for(let t=0;t<o.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new jt(this)}_getValue(){const t=this.strings,e=t.length-1,o=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=o[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!At(t))return t}let i="";for(let n=0;n<e;n++){i+=t[n];const e=o[n];if(void 0!==e){const t=e.value;if(Ct(t)||!At(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class jt{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===xt||Ct(t)&&t===this.value||(this.value=t,yt(t)||(this.committer.dirty=!0))}commit(){for(;yt(this.value);){const t=this.value;this.value=xt,t(this)}this.value!==xt&&this.committer.commit()}}class Nt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(mt()),this.endNode=t.appendChild(mt())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=mt()),t.__insert(this.endNode=mt())}insertAfterPart(t){t.__insert(this.startNode=mt()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;yt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=xt,t(this)}const t=this.__pendingValue;t!==xt&&(Ct(t)?t!==this.value&&this.__commitText(t):t instanceof $t?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):At(t)?this.__commitIterable(t):t===wt?(this.value=wt,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,o="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof kt&&this.value.template===e)this.value.update(t.values);else{const o=new kt(e,t.processor,this.options),i=o._clone();o.update(t.values),this.__commitNode(i),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let o,i=0;for(const n of t)o=e[i],void 0===o&&(o=new Nt(this.options),e.push(o),0===i?o.appendIntoPart(this):o.insertAfterPart(e[i-1])),o.setValue(n),o.commit(),i++;i<e.length&&(e.length=i,this.clear(o&&o.endNode))}clear(t=this.startNode){st(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Tt{constructor(t,e,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;yt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=xt,t(this)}if(this.__pendingValue===xt)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=xt}}class Ut extends Pt{constructor(t,e,o){super(t,e,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new Lt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Lt extends jt{}let It=!1;(()=>{try{const t={get capture(){return It=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class Mt{constructor(t,e,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=o,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;yt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=xt,t(this)}if(this.__pendingValue===xt)return;const t=this.__pendingValue,e=this.value,o=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Dt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=xt}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Dt=t=>t&&(It?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function zt(t){let e=Rt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Rt.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(lt);return o=e.keyString.get(i),void 0===o&&(o=new ut(t,t.getTemplateElement()),e.keyString.set(i,o)),e.stringsArray.set(t.strings,o),o}const Rt=new Map,Ot=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Bt=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,o,i){const n=e[0];if("."===n){return new Ut(t,e.slice(1),o).parts}if("@"===n)return[new Mt(t,e.slice(1),i.eventContext)];if("?"===n)return[new Tt(t,e.slice(1),o)];return new Pt(t,e,o).parts}handleTextExpression(t){return new Nt(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Vt=(t,...e)=>new $t(t,e,"html",Bt)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,Ht=(t,e)=>`${t}--${e}`;let Wt=!0;void 0===window.ShadyCSS?Wt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Wt=!1);const Zt=t=>e=>{const o=Ht(e.type,t);let i=Rt.get(o);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Rt.set(o,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const a=e.strings.join(lt);if(n=i.keyString.get(a),void 0===n){const o=e.getTemplateElement();Wt&&window.ShadyCSS.prepareTemplateDom(o,t),n=new ut(e,o),i.keyString.set(a,n)}return i.stringsArray.set(e.strings,n),n},Ft=["html","svg"],Gt=new Set,Jt=(t,e,o)=>{Gt.add(t);const i=o?o.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:a}=n;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<a;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{Ft.forEach((e=>{const o=Rt.get(Ht(e,t));void 0!==o&&o.keyString.forEach((t=>{const{element:{content:e}}=t,o=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{o.add(t)})),gt(t,o)}))}))})(t);const s=i.content;o?function(t,e,o=null){const{element:{content:i},parts:n}=t;if(null==o)return void i.appendChild(e);const a=document.createTreeWalker(i,133,null,!1);let r=ft(n),s=0,l=-1;for(;a.nextNode();)for(l++,a.currentNode===o&&(s=vt(e),o.parentNode.insertBefore(e,o));-1!==r&&n[r].index===l;){if(s>0){for(;-1!==r;)n[r].index+=s,r=ft(n,r);return}r=ft(n,r)}}(o,r,s.firstChild):s.insertBefore(r,s.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(o){s.insertBefore(r,s.firstChild);const t=new Set;t.add(r),gt(o,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Qt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},qt=(t,e)=>e!==t&&(e==e||t==t),Kt={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:qt};class Yt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,o)=>{const i=this._attributeNameForProperty(o,e);void 0!==i&&(this._attributeToPropertyMap.set(i,o),t.push(i))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Kt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const o="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdateInternal(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Kt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const o of e)this.createProperty(o,t[o])}}static _attributeNameForProperty(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,o=qt){return o(t,e)}static _propertyValueFromAttribute(t,e){const o=e.type,i=e.converter||Qt,n="function"==typeof i?i:i.fromAttribute;return n?n(t,o):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const o=e.type,i=e.converter;return(i&&i.toAttribute||Qt.toAttribute)(t,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,o){e!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,e,o=Kt){const i=this.constructor,n=i._attributeNameForProperty(t,o);if(void 0!==n){const t=i._propertyValueToAttribute(e,o);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const o=this.constructor,i=o._attributeToPropertyMap.get(t);if(void 0!==i){const t=o.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=o._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,o){let i=!0;if(void 0!==t){const n=this.constructor;o=o||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Yt.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Xt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol();class ee{constructor(t,e){if(e!==te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Xt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const oe=(t,...e)=>{const o=e.reduce(((e,o,i)=>e+(t=>{if(t instanceof ee)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1]),t[0]);return new ee(o,te)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const ie={};class ne extends Yt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,o)=>t.reduceRight(((t,o)=>Array.isArray(o)?e(o,t):(t.add(o),t)),o),o=e(t,new Set),i=[];o.forEach((t=>i.unshift(t))),this._styles=i}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Xt){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new ee(String(e),te)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Xt?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ie&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return ie}}ne.finalized=!0,ne.render=(t,e,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const i=o.scopeName,n=Ot.has(e),a=Wt&&11===e.nodeType&&!!e.host,r=a&&!Gt.has(i),s=r?document.createDocumentFragment():e;if(((t,e,o)=>{let i=Ot.get(e);void 0===i&&(st(e,e.firstChild),Ot.set(e,i=new Nt(Object.assign({templateFactory:zt},o))),i.appendInto(e)),i.setValue(t),i.commit()})(t,s,Object.assign({templateFactory:Zt(i)},o)),r){const t=Ot.get(s);Ot.delete(s);const o=t.value instanceof kt?t.value.template:void 0;Jt(i,s,o),st(e,e.firstChild),e.appendChild(s),Ot.set(e,t)}!n&&a&&window.ShadyCSS.styleElement(e.host)},ne.shadowRootOptions={mode:"open"};var ae,re=oe`
      :host {
        box-sizing: border-box;
        position: relative;
        cursor: pointer;
        height: 24px;
        width: 24px;
        transform: scale(var(--burgton-button-scale));
        
        --burgton-button-default-line-color: #66cc99;
        
        --burgton-button-border-radius: 0px;
        --burgton-button-line-color: var(--burgton-button-default-line-color);
        --burgton-button-line-color-active: var(--burgton-button-line-color);
        --burgton-button-animation-duration: 500ms;
        --burgton-button-animation-delay: 0s;
        --burgton-button-easing: ease-in-out;
        --burgton-button-scale: 1;
        
        --burgton-button-label-font-size: 14px;
        --burgton-button-label-font-color: #999999;
        --burgton-button-label-font-color-active: #999999;
        --burgton-button-label-font-weight: inherit;
        --burgton-button-label-text-transform: uppercase;
      }
      
      .line {
        position: absolute;
        left: 1px;
        height: 3px;
        width: 20px;
        background-color: var(--burgton-button-line-color);
        border-radius: var(--burgton-button-border-radius);
      }
      
      :host([active]) .line {
        background-color: var(--burgton-button-line-color-active);
      }
      
      :host(:focus:not(.focus-visible)) {
        outline: none;
      }
      
      /* NO ANIMATION */
      :host([noAnimation]) .line--top,
      :host([noAnimation]) .line--middle,
      :host([noAnimation]) .line--bottom {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
      }
      
      ${oe`
  :host([type='default']) .line--top {
    top: 4px;
    animation: default__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
      
  :host([type='default'][active]) .line--top {
    top: 4px;
    animation: default__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='default']) .line--middle {
    top: 10px;
    animation: default__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='default'][active]) .line--middle {
    top: 10px;
    animation: default__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='default']) .line--bottom {
    top: 16px;
    animation: default__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='default'][active]) .line--bottom {
    top: 16px;
    animation: default__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
      
  @keyframes default__line-top-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(-45deg);
    }

    30% {
      top: 10px;
      transform: rotate(0deg);
    }

    60% {
      top: 10px;
    }

    100% {
      top: 4px;
    }
  }

  @keyframes default__line-top-animation--activate {
    0% {
      top: 4px;
    }

    30% {
      top: 10px;
    }

    60% {
      top: 10px;
      transform: rotate(0deg);
    }

    100% {
      top: 10px;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes default__line-middle-animation--deactivate {
    0% {
      opacity: 0;
    }

    30% {
      opacity: 0;
    }

    60% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes default__line-middle-animation--activate {
    0% {
      opacity: 1;
    }
  
    30% {
      opacity: 1;
    }
  
    60% {
      opacity: 0;
    }
  
    100% {
      opacity: 0;
    }
  }
  
  @keyframes default__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(45deg);
    }

    30% {
      top: 10px;
      transform: rotate(0deg);
    }

    60% {
      top: 10px;
    }

    100% {
      top: 16px;
    }
  }

  @keyframes default__line-bottom-animation--activate {
    0% {
      top: 16px;
    }
  
    30% {
      top: 10px;
    }
  
    60% {
      top: 10px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(45deg);
    }
  }
`}
      ${oe`
  :host([type='arrow-left']) .line--top {
    top: 0;
    animation: arrow-left__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-left'][active]) .line--top {
    animation: arrow-left__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-left']) .line--middle {
    top: 10px;
  }
  
  :host([type='arrow-left']) .line--bottom {
    top: 20px;
    animation: arrow-left__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-left'][active]) .line--bottom {
    animation: arrow-left__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes arrow-left__line-top-animation--deactivate {
    0% {
      top: 2px;
      width: 14px;
      left: 0;
      transform: rotate(-45deg);
    }

    30% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }

    60% {
      top: 10px;
    }

    100% {
      top: 4px;
      left: 1px;
    }
  }
  
  @keyframes arrow-left__line-top-animation--activate {
    0% {
      top: 4px;
      left: 1px;
    }

    30% {
      top: 10px;
    }

    60% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }

    100% {
      top: 5px;
      width: 14px;
      left: 0;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes arrow-left__line-bottom-animation--deactivate {
    0% {
      top: 15px;
      width: 14px;
      left: 0;
      transform: rotate(45deg);
    }
  
    30% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
    }
  
    100% {
      top: 16px;
      left: 1px;
    }
  }
  
  @keyframes arrow-left__line-bottom-animation--activate {
    0% {
      top: 16px;
      left: 1px;
    }
  
    30% {
      top: 10px;
    }
  
    60% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 15px;
      width: 14px;
      left: 0;
      transform: rotate(45deg);
    }
  }
`}
      ${oe`
  :host([type='arrow-right']) .line--top {
    top: 0;
    animation: arrow-right__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-right'][active]) .line--top {
    animation: arrow-right__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-right']) .line--middle {
    top: 10px;
  }
  
  :host([type='arrow-right']) .line--bottom {
    top: 20px;
    animation: arrow-right__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-right'][active]) .line--bottom {
    animation: arrow-right__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes arrow-right__line-top-animation--deactivate {
    0% {
      top: 2px;
      width: 14px;
      left: 8px;
      transform: rotate(45deg);
    }

    30% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }

    60% {
      top: 10px;
    }

    100% {
      top: 4px;
      left: 1px;
    }
  }
  
  @keyframes arrow-right__line-top-animation--activate {
    0% {
      top: 4px;
      left: 1px;
    }

    30% {
      top: 10px;
    }

    60% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }

    100% {
      top: 5px;
      width: 14px;
      left: 8px;
      transform: rotate(45deg);
    }
  }
  
  @keyframes arrow-right__line-bottom-animation--deactivate {
    0% {
      top: 15px;
      width: 14px;
      left: 8px;
      transform: rotate(-45deg);
    }
  
    30% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
    }
  
    100% {
      top: 16px;
      left: 1px;
    }
  }
  
  @keyframes arrow-right__line-bottom-animation--activate {
    0% {
      top: 16px;
      left: 1px;
    }
  
    30% {
      top: 10px;
    }
  
    60% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 15px;
      width: 14px;
      left: 8px;
      transform: rotate(-45deg);
    }
  }
`}
      ${oe`
  :host([type='astronaut']) .line--top {
    top: 4px;
    animation: astronaut__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
      
  :host([type='astronaut'][active]) .line--top {
    top: 4px;
    animation: astronaut__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='astronaut']) .line--middle {
    top: 10px;
    animation: astronaut__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='astronaut'][active]) .line--middle {
    top: 10px;
    animation: astronaut__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='astronaut']) .line--bottom {
    top: 16px;
    animation: astronaut__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='astronaut'][active]) .line--bottom {
    top: 16px;
    animation: astronaut__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
      
  @keyframes astronaut__line-top-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(-45deg);
      opacity: 1;
    }

    48% {
      top: 20px;
      transform: rotate(-45deg);
      opacity: 0;
    }

    52% {
      top: -6px;
      transform: rotate(0deg);
      opacity: 0;
    }

    100% {
      top: 4px;
      opacity: 1;
    }
  }

  @keyframes astronaut__line-top-animation--activate {
    0% {
      top: 4px;
      opacity: 1;
    }

    48% {
      top: -6px;
      opacity: 0;
      transform: rotate(0deg);
    }

    52% {
      top: 20px;
      transform: rotate(-45deg);
      opacity: 0;
    }

    100% {
      top: 10px;
      transform: rotate(-45deg);
      opacity: 1;
    }
  }
  
  @keyframes astronaut__line-middle-animation--deactivate {
    0% {
      top: 10px;
      opacity: 0;
    }

    48% {
      top: 20px;
    }

    52% {
      top: 0px;
      opacity: 0;
    }

    100% {
      top: 10px;
      opacity: 1;
    }
  }

  @keyframes astronaut__line-middle-animation--activate {
    0% {
      top: 10px;
      opacity: 1;
    }

    48% {
      top: 0px;
      opacity: 0;
    }

    52% {
      top: 20px;
    }

    100% {
      top: 10px;
      opacity: 0;
    }
  }
  
  @keyframes astronaut__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(45deg);
      opacity: 1;
    }

    48% {
      top: 20px;
      transform: rotate(45deg);
      opacity: 0;
    }

    52% {
      top: 6px;
      transform: rotate(0deg);
      opacity: 0;
    }

    100% {
      top: 16px;
      opacity: 1;
    }
  }

  @keyframes astronaut__line-bottom-animation--activate {
    0% {
      top: 16px;
      opacity: 1;
    }
  
    48% {
      top: 6px;
      transform: rotate(0deg);
      opacity: 0;
    }
  
    52% {
      top: 20px;
      transform: rotate(45deg);
      opacity: 0;
    }
  
    100% {
      top: 10px;
      transform: rotate(45deg);
      opacity: 1;
    }
  }
`}
      ${oe`
  :host([type='async']) .line--top {
    top: 4px;
    animation: async__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async'][active]) .line--top {
        animation: async__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async']) .line--middle {
    top: 10px;
    animation: async__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async'][active]) .line--middle {
    animation: async__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async']) .line--bottom {
    top: 16px;
    animation: async__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='async'][active]) .line--bottom {
    animation: async__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes async__line-top-animation--deactivate {
    0% {
      width: 20px;
      top: 10px;
      transform: rotate(-45deg);
    }
  
    20%,
    80% {
      width: 0;
    }
  
    100% {
      width: 20px;
    }
  }
  
  @keyframes async__line-top-animation--activate {
    0% {
      width: 20px;
    }
  
    20%,
    80% {
      width: 0;
    }
    
    100% {
      width: 20px;
      top: 10px;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes async__line-middle-animation--deactivate {
    0%,
    60% {
      width: 0;
    }
  
    80%,
    100% {
      width: 20px;
    }
  }
  
  @keyframes async__line-middle-animation--activate {
    0%,
    20% {
      width: 20px;
    }
  
    40%,
    100% {
      width: 0;
    }
  }
  
  @keyframes async__line-bottom-animation--deactivate {
    0% {
      width: 20px;
      top: 10px;
      transform: rotate(45deg);
    }
  
    20%,
    40% {
      width: 0;
      top: 20px;
      transform: rotate(0deg);
    }
  
    60%,
    100% {
      width: 20px;
    }
  }
  
  @keyframes async__line-bottom-animation--activate {
    0%,
    40% {
      width: 20px;
    }
  
    60%,
    80% {
      width: 0;
      top: 20px;
      transform: rotate(0deg);
    }
  
    100% {
      width: 20px;
      top: 10px;
      transform: rotate(45deg);
    }
  }
`}
      ${oe`
  :host([type='crossed']) .line--top {
    top: 0;
    animation: crossed__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed'][active]) .line--top {
    animation: crossed__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed']) .line--middle {
    top: 10px;
    animation: crossed__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed'][active]) .line--middle {
    animation: crossed__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed']) .line--bottom {
    top: 20px;
    animation: crossed__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='crossed'][active]) .line--bottom {
    animation: crossed__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes crossed__line-top-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(-45deg);
    }
  
    30% {
      top: 10px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
    }
  
    100% {
      top: 4px;
    }
  }
  
  @keyframes crossed__line-top-animation--activate {
    0% {
      top: 4px;
    }
  
    30% {
      top: 10px;
    }
  
    60% {
      top: 10px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes crossed__line-middle-animation--deactivate {
    0% {
      opacity: 1;
    }
  
    30% {
      opacity: 0;
    }
  
    60% {
      opacity: 1;
    }
  
    100% {
      opacity: 1;
    }
  }
  
  @keyframes crossed__line-middle-animation--activate {
    0% {
      opacity: 1;
    }
  
    30% {
      opacity: 1;
    }
  
    60% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }
  
  @keyframes crossed__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(45deg);
    }
  
    30% {
      top: 10px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
    }
  
    100% {
      top: 16px;
    }
  }
  
  @keyframes crossed__line-bottom-animation--activate {
    0% {
      top: 16px;
    }
  
    30% {
      top: 10px;
    }
  
    60% {
      top: 10px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(45deg);
    }
  }
`}
      ${oe`
  :host([type='ellipsis']) .line--top {
    top: 0;
    animation: ellipsis__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis'][active]) .line--top {
    animation: ellipsis__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis']) .line--middle {
    top: 10px;
    animation: ellipsis__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis'][active]) .line--middle {
    animation: ellipsis__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis']) .line--bottom {
    top: 20px;
    animation: ellipsis__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='ellipsis'][active]) .line--bottom {
    animation: ellipsis__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes ellipsis__line-top-animation--deactivate {
    0% {
      top: 10px;
      left: 2px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 4px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  }
  
  @keyframes ellipsis__line-top-animation--activate {
    0% {
      top: 4px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 10px;
      left: 2px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  }
  
  @keyframes ellipsis__line-middle-animation--deactivate {
    0% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  }
  
  @keyframes ellipsis__line-middle-animation--activate {
    0% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  }
  
  @keyframes ellipsis__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      left: 18px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 16px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  }
  
  @keyframes ellipsis__line-bottom-animation--activate {
    0% {
      top: 16px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
    }
  
    30% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    60% {
      top: 10px;
      left: 10px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  
    100% {
      top: 10px;
      left: 18px;
      width: 4px;
      height: 4px;
      border-radius: 3px;
    }
  }
`}
      ${oe`
  :host([type='fall-down']) .line--top {
    top: 0;
    animation: fall-down__line-top-animation--deactivate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down'][active]) .line--top {
    animation: fall-down__line-top-animation--activate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down']) .line--middle {
    top: 10px;
    animation: fall-down__line-middle-animation--deactivate .var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down'][active]) .line--middle {
    animation: fall-down__line-middle-animation--activate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down']) .line--bottom {
    top: 20px;
    animation: fall-down__line-bottom-animation--deactivate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='fall-down'][active]) .line--bottom {
    animation: fall-down__line-bottom-animation--activate  var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes fall-down__line-top-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(-45deg);
    }
  
    30% {
      top: 16px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 16px;
    }
  
    100% {
      top: 4px;
    }
  }
  
  @keyframes fall-down__line-top-animation--activate {
    0% {
      top: 4px;
    }
  
    30% {
      top: 16px;
    }
  
    60% {
      top: 16px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes fall-down__line-middle-animation--deactivate {
    0% {
      opacity: 0;
    }
  
    30% {
      top: 16px;
      opacity: 0;
    }
  
    60% {
      top: 16px;
      opacity: 1;
    }
  
    100% {
      top: 10px;
      opacity: 1;
    }
  }
  
  @keyframes fall-down__line-middle-animation--activate {
    0% {
      top: 10px;
      opacity: 1;
    }
  
    30% {
      top: 16px;
      opacity: 1;
    }
  
    60% {
      top: 16px;
      opacity: 0;
    }
  
    100% {
      opacity: 0;
    }
  }
  
  @keyframes fall-down__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(45deg);
    }
  
    30% {
      top: 16px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 16px;
    }
  
    100% {
      top: 16px;
    }
  }
  
  @keyframes fall-down__line-bottom-animation--activate {
    0% {
      top: 16px;
    }
  
    30% {
      top: 16px;
    }
  
    60% {
      top: 16px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(45deg);
    }
  }
`}
      ${oe`
  :host([type='minus']) .line--top {
    top: 4px;
    animation: minus__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='minus'][active]) .line--top {
    animation: minus__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='minus']) .line--middle {
    top: 10px;
  }
  
  :host([type='minus']) .line--bottom {
    top: 16px;
    animation: minus__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='minus'][active]) .line--bottom {
    animation: minus__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes minus__line-top-animation--deactivate {
    0% {
      top: 10px;
    }
  
    100% {
      top: 4px;
    }
  }
  
  @keyframes minus__line-top-animation--activate {
    0% {
      top: 4px;
    }
  
    100% {
      top: 10px;
    }
  }
  
  @keyframes minus__line-bottom-animation--deactivate {
    0% {
      top: 10px;
    }
  
    100% {
      top: 16px;
    }
  }
  
  @keyframes minus__line-bottom-animation--activate {
    0% {
      top: 16px;
    }
  
    100% {
      top: 10px;
    }
  }
`}
      ${oe`
  :host([type='rotator']) .line--top {
    top: 4px;
    animation: rotator__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator'][active]) .line--top {
    animation: rotator__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator']) .line--middle {
    top: 10px;
    animation: rotator__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator'][active]) .line--middle {
    animation: rotator__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator']) .line--bottom {
    top: 16px;
    animation: rotator__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='rotator'][active]) .line--bottom {
    animation: rotator__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes rotator__line-top-animation--deactivate {
    0% {
      transform: rotate(315deg);
      top: 10px;
    }
  
    40%,
    70% {
      transform: rotate(180deg);
      top: 10px;
    }
  
    100% {
      transform: rotate(0);
      top: 4px;
    }
  }
  
  @keyframes rotator__line-top-animation--activate {
    0% {
      transform: rotate(0);
      top: 4px;
    }
  
    30%,
    60% {
      transform: rotate(180deg);
      top: 10px;
    }
  
    100% {
      transform: rotate(315deg);
      top: 10px;
    }
  }
  
  @keyframes rotator__line-middle-animation--deactivate {
    0%,
    40% {
      opacity: 0;
    }
  
    70% {
      transform: rotate(180deg);
      opacity: 0;
    }
  
    100% {
      transform: rotate(0)
    }
  }
  
  @keyframes rotator__line-middle-animation--activate {
    0% {
      transform: rotate(0)
    }
  
    30% {
      transform: rotate(180deg);
      opacity: 0;
    }
  
    60%,
    100% {
      opacity: 0;
    }
  }
  
  @keyframes rotator__line-bottom-animation--deactivate {
    0% {
      transform: rotate(405deg);
      top: 10px;
    }
  
    40%,
    70% {
      top: 10px;
      transform: rotate(180deg);
    }
  
    100% {
      transform: rotate(0);
      top: 16px;
    }
  }
  
  @keyframes rotator__line-bottom-animation--activate {
    0% {
      transform: rotate(0);
      top: 16px;
    }
  
    30%,
    60% {
      top: 10px;
      transform: rotate(180deg);
    }
  
    100% {
      transform: rotate(405deg);
      top: 10px;
    }
  }
`}
      ${oe`
  :host([type='spin']) .line--top {
    top: 0;
    animation: spin__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin'][active]) .line--top {
    animation: spin__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin']) .line--middle {
    top: 10px;
    animation: spin__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin'][active]) .line--middle {
    animation: spin__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin']) .line--bottom {
    top: 20px;
    animation: spin__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='spin'][active]) .line--bottom {
    animation: spin__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes spin__line-top-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(315deg);
    }
  
    100% {
      top: 4px;
      transform: rotate(0deg);
    }
  }
  
  @keyframes spin__line-top-animation--activate {
    0% {
      top: 4px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 10px;
      transform: rotate(315deg);
    }
  }
  
  @keyframes spin__line-middle-animation--deactivate {
    0% {
      opacity: 0;
      transform: rotate(360deg);
    }
  
    100% {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
  
  @keyframes spin__line-middle-animation--activate {
    0% {
      opacity: 1;
      transform: rotate(0deg);
    }
  
    100% {
      opacity: 0;
      transform: rotate(360deg);
    }
  }
  
  @keyframes spin__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      transform: rotate(405deg);
    }
  
    100% {
      top: 16px;
      transform: rotate(0deg);
    }
  }
  
  @keyframes spin__line-bottom-animation--activate {
    0% {
      top: 16px;
      transform: rotate(0deg);
    }
  
  100% {
      top: 10px;
      transform: rotate(405deg);
    }
  }
`}
      ${oe`
  :host([type='underlined']) .line--top {
    top: 4px;
    animation: underlined__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined'][active]) .line--top {
    animation: underlined__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined']) .line--middle {
    top: 10px;
    animation: underlined__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined'][active]) .line--middle {
    animation: underlined__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined']) .line--bottom {
    top: 16px;
    animation: underlined__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='underlined'][active]) .line--bottom {
    animation: underlined__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes underlined__line-top-animation--deactivate {
    0% {
      width: 20px;
      top: 4px;
      left: 1px;
      transform: rotate(-135deg);
    }
  
    100% {
      transform: rotate(0deg);
    }
  }
  
  @keyframes underlined__line-top-animation--activate {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      width: 20px;
      top: 4px;
      left: 1px;
      transform: rotate(-135deg);
    }
  }
  
  @keyframes underlined__line-middle-animation--deactivate {
    0% {
      width: 20px;
      transform: rotate(135deg);
      top: 4px;
      left: 1px;
    }
  
    100% {
      transform: rotate(0deg);
      top: 10px;
    }
  }
  
  @keyframes underlined__line-middle-animation--activate {
    0% {
      transform: rotate(0deg);
      top: 10px;
    }
  
    100% {
      width: 20px;
      transform: rotate(135deg);
      top: 4px;
      left: 1px;
    }
  }
  
  @keyframes underlined__line-bottom-animation--deactivate {
    0% {
      width: 20px;
      left: 1px;
    }
  
    100% {
      width: 20px;
      left: 1px;
    }
  }
  
  @keyframes underlined__line-bottom-animation--activate {
    0% {
      width: 20px;
      left: 1px;
    }
  
    100% {
      width: 20px;
      left: 1px;
    }
  }
`}
      ${oe`
  :host([type='vertical-rotator']) .line--top {
    top: 4px;
    animation: vertical-rotator__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator'][active]) .line--top {
    animation: vertical-rotator__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator']) .line--middle {
    top: 10px;
    animation: vertical-rotator__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator'][active]) .line--middle {
    animation: vertical-rotator__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator']) .line--bottom {
    top: 16px;
    animation: vertical-rotator__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='vertical-rotator'][active]) .line--bottom {
    animation: vertical-rotator__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes vertical-rotator__line-top-animation--deactivate {
    0% {
      transform: rotate(135deg);
      top: 9px;
    }
  
    40%,
    70% {
      transform: rotate(90deg);
      top: 9px;
    }
  
    100% {
      transform: rotate(0);
      top: 4px;
    }
  }
  
  @keyframes vertical-rotator__line-top-animation--activate {
    0% {
      transform: rotate(0);
      top: 4px;
    }
  
    30%,
    60% {
      transform: rotate(90deg);
      top: 9px;
      color: red;
    }
  
    100% {
      transform: rotate(135deg);
      top: 9px;
    }
  }
  
  @keyframes vertical-rotator__line-middle-animation--deactivate {
    0%,
    40% {
      opacity: 0;
    }
  
    70% {
      transform: rotate(90deg);
      opacity: 0;
    }
  
    100% {
      transform: rotate(0)
    }
  }
  
  @keyframes vertical-rotator__line-middle-animation--activate {
    0% {
      transform: rotate(0)
    }
  
    30% {
      transform: rotate(90deg);
      opacity: 0;
    }
  
    60%,
    100% {
      opacity: 0;
    }
  }
  
  @keyframes vertical-rotator__line-bottom-animation--deactivate {
    0% {
      transform: rotate(225deg);
      top: 9px;
    }
  
    40%,
    70% {
      top: 9px;
      transform: rotate(90deg);
    }
  
    100% {
      transform: rotate(0);
      top: 16px;
    }
  }
  
  @keyframes vertical-rotator__line-bottom-animation--activate {
    0% {
      transform: rotate(0);
      top: 16px;
    }
  
    30%,
    60% {
      top: 9px;
      transform: rotate(90deg);
    }
  
    100% {
      transform: rotate(225deg);
      top: 9px;
    }
  }
`}
      ${oe`
  :host([type='zoom']) .line--top {
    top: 4px;
    animation: zoom__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom'][active]) .line--top {
    animation: zoom__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom']) .line--middle {
    top: 10px;
    animation: zoom__line-middle-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom'][active]) .line--middle {
    animation: zoom__line-middle-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom']) .line--bottom {
    top: 16px;
    animation: zoom__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='zoom'][active]) .line--bottom {
    animation: zoom__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes zoom__line-top-animation--deactivate {
    0% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(45deg);
    }
  
    30% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(45deg);
    }
  
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 1px;
      border-radius: 3px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 4px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(0deg);
    }
  }
  
  @keyframes zoom__line-top-animation--activate {
    0% {
      top: 4px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(0deg);
    }
  
    30% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 1px;
      border-radius: 3px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(45deg);
    }
  
    100% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(45deg);
    }
  }
  
  @keyframes zoom__line-middle-animation--deactivate {
    0%,
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      opacity: 0;
    }
  
    100% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      opacity: 1;
    }
  }
  
  @keyframes zoom__line-middle-animation--activate {
    0% {
      top: 10px;
      left: 1xp;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      opacity: 1;
    }
  
    30%,
    100% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      opacity: 0;
    }
  }
  
  @keyframes zoom__line-bottom-animation--deactivate {
    0% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(-45deg);
    }
  
    30% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(-45deg);
    }
  
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 16px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(0deg);
    }
  }
  
  @keyframes zoom__line-bottom-animation--activate {
    0% {
      top: 16px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(0deg);
    }
  
    30% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
      left: 12px;
      width: 2px;
      height: 2px;
      border-radius: 1px;
      transform: rotate(-45deg);
    }
  
    100% {
      top: 10px;
      left: 1px;
      width: 20px;
      height: 3px;
      border-radius: var(--burgton-button-border-radius);
      transform: rotate(-45deg);
    }
  }
`}
      ${oe`
  :host([type='arrow-to-arrow']) .line--top {
    top: 4px;
    animation: arrow-to-arrow__line-top-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-to-arrow'][active]) .line--top {
    animation: arrow-to-arrow__line-top-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  
  :host([type='arrow-to-arrow']) .line--middle {
    top: 10px;
  }
  
  :host([type='arrow-to-arrow']) .line--bottom {
    top: 16px;
    animation: arrow-to-arrow__line-bottom-animation--deactivate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  :host([type='arrow-to-arrow'][active]) .line--bottom {
    animation: arrow-to-arrow__line-bottom-animation--activate var(--burgton-button-animation-duration) var(--burgton-button-easing) var(--burgton-button-animation-delay) 1 normal forwards;
  }
  
  @keyframes arrow-to-arrow__line-top-animation--deactivate {
    0% {
      top: 5px;
      width: 14px;
      left: 0;
      transform: rotate(-45deg);
    }
  
    30% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 5px;
      width: 14px;
      left: 8px;
      transform: rotate(45deg);
    }
  }
  
  @keyframes arrow-to-arrow__line-top-animation--activate {
    0% {
      top: 5px;
      width: 14px;
      left: 8px;
      transform: rotate(45deg);
    }
  
    30% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
      width: 20px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 5px;
      width: 14px;
      left: 0;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes arrow-to-arrow__line-bottom-animation--deactivate {
    0% {
      top: 15px;
      width: 14px;
      left: 0;
      transform: rotate(45deg);
    }
  
    30% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 15px;
      width: 14px;
      left: 8px;
      transform: rotate(-45deg);
    }
  }
  
  @keyframes arrow-to-arrow__line-bottom-animation--activate {
    0% {
      top: 15px;
      width: 14px;
      left: 8px;
      transform: rotate(-45deg);
    }
  
    30% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    60% {
      top: 10px;
      width: 16px;
      left: 1px;
      transform: rotate(0deg);
    }
  
    100% {
      top: 15px;
      width: 14px;
      left: 0;
      transform: rotate(45deg);
    }
  }
`}
      
      ${oe`
  .label {
    position: absolute;
    font-size: var(--burgton-button-label-font-size);
    color: var(--burgton-button-label-font-color);
    font-weight: var(--burgton-button-label-font-weight);
    text-transform: var(--burgton-button-label-text-transform);
  }
  
  .label,
  :host([active]) .label {
    color: var(--burgton-button-label-font-color-active);
  }
  
  :host([labelPosition='bottom']) .label {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  :host([labelPosition='top']) .label {
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  
  :host([labelPosition='left']) .label {
    top: 50%;
    transform: translate(-100%, -50%);
    left: -5px;
  }
  
  :host([labelPosition='right']) .label {
    top: 50%;
    transform: translateY(-50%);
    left: calc(100% + 3px);
  }
`}
`;ae=function(){function t(t){var e=!0,o=!1,i=null,n={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function r(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function s(t){e=!1}function l(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(o){o.metaKey||o.altKey||o.ctrlKey||(a(t.activeElement)&&r(t.activeElement),e=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(t){"hidden"===document.visibilityState&&(o&&(e=!0),l())}),!0),l(),t.addEventListener("focus",(function(t){var o,i,s;a(t.target)&&(e||(o=t.target,i=o.type,"INPUT"===(s=o.tagName)&&n[i]&&!o.readOnly||"TEXTAREA"===s&&!o.readOnly||o.isContentEditable))&&r(t.target)}),!0),t.addEventListener("blur",(function(t){var e;a(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(i),i=window.setTimeout((function(){o=!1}),100),(e=t.target).hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added")))}),!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)},"object"==typeof exports&&"undefined"!=typeof module?ae():"function"==typeof define&&define.amd?define(ae):ae();class se extends ne{static get is(){return"burgton-button"}static get styles(){return re}render(){return Vt`
      <span class="line line--top"></span>
      <span class="line line--middle"></span>
      <span class="line line--bottom"></span>
      ${this.label?Vt`<span class="label">${this.label}</span>`:""}
    `}static get properties(){return{type:{type:String},state:{type:Boolean},label:{type:String},labelPosition:{type:String},targetSelectors:{type:String},targetClasses:{type:String},description:{type:String}}}set state(t){this._state=t,this._state?this.setAttribute("active",""):this.removeAttribute("active"),this.setAttribute("aria-pressed",this._state),this._toggleTargetClasses(),this._dispatchEvent("burgton-button-state-change")}get state(){return this._state}set type(t){this._type=t,this.setAttribute("type",this._type)}get type(){return this._type}set labelPosition(t){t&&!["top","bottom","right","left"].includes(t)||""===t?(this._logError(`"${t}" is not a valid labelPosition value`),this.setAttribute("labelPosition","bottom"),this._labelPosition="bottom"):this._labelPosition=t}get labelPosition(){return this._labelPosition}set targetSelectors(t){this._targetSelectors=t}get targetSelectors(){return this._targetSelectors}set targetClasses(t){this._targetClasses=t}get targetClasses(){return this._targetClasses}set description(t){this._description=this.label?this.label:t,this.setAttribute("aria-label",this._description)}get description(){return this._description}constructor(){super(),this.type="default",this.state=!1,this.label=null,this.labelPosition="bottom",this.description="Menu button",this.acceptedTypes=["default","arrow-left","arrow-right","arrow-to-arrow","astronaut","async","crossed","ellipsis","fall-down","minus","rotator","spin","underlined","vertical-rotator","zoom"],this.addA11yFeatures()}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick),this.addEventListener("keydown",this._handleKeyPressed)}attributeChangedCallback(t,e,o){"type"!==t||this.acceptedTypes.includes(o)?super.attributeChangedCallback(t,e,o):(this._logError(`"${o}" is not a valid type value`),this.type="default")}addA11yFeatures(){this.setAttribute("role","button"),this.setAttribute("aria-pressed",!1),this.tabIndex=0,this.setAttribute("aria-haspopup","menu")}_handleClick(){this.toggleState(),this._dispatchEvent("burgton-button-click")}_handleKeyPressed(t){" "!==t.key&&"Enter"!==t.key&&"Spacebar"!==t.key||(t.preventDefault(),this._handleClick())}_toggleTargetClasses(){if(this._targetSelectors&&this._targetClasses){const t=this.getAttribute("targetSelectors").split(",").map((t=>t.trim())),e=this.getAttribute("targetClasses").split(",").map((t=>t.trim()));if(t.length!==e.length)return void this._logError(`The number of target selectors (${t.length}) does not match the number of target classes (${e.length}), so to prevent errors the selector toggle will be disabled. Make sure the number of targetSelectors and targetClasses match.`);t.forEach(((t,o)=>{document.querySelector(t).classList.toggle(e[o])}))}}_dispatchEvent(t){const e=new CustomEvent(t,{bubbles:!0,composed:!0,detail:{state:this.state}});this.dispatchEvent(e)}_logError(t){console.error(`BURGTON BUTTON ERROR: ${t}`),console.info("You can find the documentation for the burgton button here: https://boguz.github.io/burgton-button-docs/")}toggleState(){this.state=!this.hasAttribute("active")}activate(){this.state=!0,this._dispatchEvent("burgton-button-activate")}deactivate(){this.state=!1,this._dispatchEvent("burgton-button-deactivate")}}customElements.define(se.is,se);const le=[[a`:host{--ielou-icon-delete:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaIiAvPjwvc3ZnPg==');--ielou-icon-pin:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE2LDEyVjRIMTdWMkg3VjRIOFYxMkw2LDE0VjE2SDExLjJWMjJIMTIuOFYxNkgxOFYxNEwxNiwxMk04LjgsMTRMMTAsMTIuOFY0SDE0VjEyLjhMMTUuMiwxNEg4LjhaIiAvPjwvc3ZnPg==');--ielou-icon-pin-full:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE2LDEyVjRIMTdWMkg3VjRIOFYxMkw2LDE0VjE2SDExLjJWMjJIMTIuOFYxNkgxOFYxNEwxNiwxMloiIC8+PC9zdmc+')}`,a`:host{--space-normal:1rem;--space-double:2rem;--space-half:0.5rem;--space-quarter:0.25rem;--transition-duration-normal:0.25s;--border-radius-normal:0.125rem;--font-weight-medium:500;--font-weight-bold:700;--font-size-bigger:1.75rem;--font-size-big:1.25rem;--font-size-normal:1rem;--font-size-small:0.875rem;--font-size-smaller:0.75rem;--topbar-height:3rem;--topbar-logo-height:1.5rem;--sidebar-width:100vw;--sidebar-list-item-height:2rem;--sidebar-active-marker-width:4px;--delete-button-size:1.5rem;--note-width-min:200px;--note-icon-size:1.25rem}@media screen and (min-width:${640}px){:host{--sidebar-width:320px}}`],a``],de=a`:host{box-sizing:border-box;background-color:var(--color-surface);height:var(--topbar-height);width:100%;display:flex;align-items:center;grid-area:topbar;padding:0 var(--space-normal)}.header{display:flex;align-items:center}.burger{--burgton-button-line-color:var(--color-primary);--burgton-button-line-color-active:var(--color-primary);--burgton-button-animation-duration:var(--transition-duration-normal);margin-right:var(--space-normal)}.logo{height:var(--topbar-logo-height);width:auto;cursor:pointer}@media (hover:hover){.burger:hover{--burgton-button-line-color:var(--color-primary-light);--burgton-button-line-color-active:var(--color-primary-light)}.logo:hover{opacity:.75}}@media screen and (min-width:${640}px){:host{position:fixed;top:0;width:var(--sidebar-width)}.burger{display:none}}`;class pe extends K{constructor(){super();se||console.error("Could not load the burger button!")}render(){return T` <header class="header"> <burgton-button type="arrow-left" class="burger"></burgton-button> <img src="./dist/assets/logo.svg" alt="ielou app logo" class="logo" @click="${this._onLogoClick}" @keydown="${this._onLogoKeydown}"> </header> `}_onLogoClick(){this.dispatchEvent(new CustomEvent("ielou-show-start-page",{bubbles:!0,composed:!0}))}_onLogoKeydown(t){const e=t.currentTarget;"Enter"!==t.code&&"Enter"!==t.key||e.click()}}pe.styles=[le,de],customElements.define("ielou-topbar",pe);const ue=a`:host{box-sizing:border-box;background-color:var(--color-surface);grid-area:sidebar;width:0;padding:var(--space-normal) 0;transition:all var(--transition-duration-normal) ease-in-out;overflow:hidden;position:relative;display:flex;flex-direction:column}:host([isvisible]){width:var(--sidebar-width);padding:var(--space-normal)}.list-container{flex-grow:1}.list{list-style:none;margin:0;padding:0}.list__item{height:var(--sidebar-list-item-height);display:flex;align-items:center;justify-content:space-between;color:var(--color-text-secondary);position:relative;cursor:pointer;gap:var(--space-half)}.list__item--empty{font-size:var(--font-size-small);opacity:.5;pointer-events:none}.list__item[active]{color:var(--color-primary)}.list__item[active]::after{content:'';width:var(--sidebar-active-marker-width);height:100%;position:absolute;top:0;right:calc(var(--space-normal) * -1);background-color:var(--color-primary)}.list__item-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.new-project-button{display:flex;align-items:center;justify-content:center;width:100%;margin-top:var(--space-double);padding:var(--space-half);background-color:var(--color-surface);color:var(--color-text-secondary);border:3px dashed var(--color-text-secondary);border-radius:var(--border-radius-normal);cursor:pointer;outline:0;font-weight:var(--font-weight-bold)}.settings{border:3px solid red}.bottom-buttons{margin-top:var(--space-double)}.settings-button{border:none;background-color:transparent;color:var(--color-text-secondary);display:flex;align-items:center;justify-content:center;width:fit-content;margin:0 auto;font-weight:var(--font-weight-bold);cursor:pointer}@media (hover:hover){.list__item:hover{color:var(--color-primary-light)}.new-project-button:hover{border:3px dashed var(--color-primary);color:var(--color-primary)}.settings-button:hover{color:var(--color-primary)}}@media screen and (min-width:${640}px){:host{position:fixed;top:var(--topbar-height);height:calc(100vh - var(--topbar-height));width:var(--sidebar-width);padding:var(--space-normal);overflow-y:scroll}}`;class ce extends K{constructor(){super(...arguments),this.activeProject=null,this.projects=null}render(){return T` <div class="list-container"> <ul class="list"> ${this.projects.length?this.projects.map((t=>this._renderListItem(t))):this._renderNoProjectsMessage()} </ul> <button class="new-project-button" @click="${this._onNewProjectButtonClick}"> New Project </button> </div> <div class="bottom-buttons"> <button class="settings-button" @click="${this._onSettingsButtonClick}"> Settings </button> </div> `}_renderListItem(t){return T` <li class="list__item" id="${t.id}" ?active="${t.id===this.activeProject}" @click="${this._onListItemClick}" @keyDown="${this._onListItemKeyDown}"> <span class="list__item-name">${t.title}</span> <span class="list__item-count">${t.notes.length}</span> </li> `}_renderNoProjectsMessage(){return T` <li class="list__item list__item--empty"> No projects yet. Click the "New Project" button to get started... </li> `}_onNewProjectButtonClick(){this.dispatchEvent(new CustomEvent("ielou-new-project-button-click",{bubbles:!0,composed:!0}))}_onListItemClick(t){const e=t.currentTarget;this.dispatchEvent(new CustomEvent("ielou-select-project",{bubbles:!0,composed:!0,detail:{selectedProject:e.getAttribute("id")}}))}_onListItemKeyDown(t){const e=t.currentTarget;"Enter"!==t.code&&"Enter"!==t.key||e.click()}_onSettingsButtonClick(){this.dispatchEvent(new CustomEvent("ielou-settings-button-click",{bubbles:!0,composed:!0}))}}ce.styles=[le,ue],t([tt({type:String})],ce.prototype,"activeProject",void 0),t([tt({type:Array})],ce.prototype,"projects",void 0),customElements.define("ielou-sidebar",ce);const he=a`:host{box-sizing:border-box;background-color:var(--color-bg);grid-area:stage;padding:var(--space-normal)}.header{width:100%;display:grid;align-items:center;justify-content:space-between;grid-template-areas:'title delete' 'date date' 'description description';grid-template-columns:1fr auto;margin-bottom:var(--space-normal)}.title{grid-area:title;font-size:var(--font-size-bigger);color:var(--color-text-primary);margin:0;outline:0;border-bottom:2px transparent}.title:focus{border-bottom:2px dashed var(--color-primary)}.no-project-selected{height:100%;width:100%;display:flex;align-items:center;justify-content:center;text-align:center;margin:0;color:var(--color-text-secondary);font-weight:var(--font-weight-medium)}.delete-button{grid-area:delete;border:none;outline:0;height:var(--delete-button-size);width:var(--delete-button-size);background-color:var(--color-text-secondary);mask-position:center;-webkit-mask-position:center;mask-size:contain;-webkit-mask-size:contain;mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;mask-image:var(--ielou-icon-delete);-webkit-mask-image:var(--ielou-icon-delete);cursor:pointer;align-self:flex-start;top:.5rem;position:relative}.date{grid-area:date;margin:0;font-size:var(--font-size-small);color:var(--color-text-secondary)}.description{grid-area:description;margin:var(--space-normal) 0;color:var(--color-text-primary);border-bottom:2px transparent;outline:0}.description:focus{border-bottom:2px dashed var(--color-primary)}.notes{display:grid;grid-template-columns:repeat(auto-fill,minmax(var(--note-width-min),1fr));grid-gap:var(--space-normal)}.new-note-button{width:var(--note-width);height:auto;display:flex;align-items:center;justify-content:center;aspect-ratio:1;background-color:transparent;color:var(--color-text-secondary);border:4px dashed var(--color-text-secondary);font-size:var(--font-size-big);font-weight:var(--font-weight-bold);cursor:pointer;box-sizing:border-box;border-radius:var(--border-radius-normal)}@media (hover:hover){.delete-button:hover{background-color:var(--color-primary)}.new-note-button:hover{border:4px dashed var(--color-primary);color:var(--color-primary)}}@media screen and (min-width:${640}px){:host{padding:var(--space-normal) var(--space-double) var(--space-double) calc(var(--sidebar-width) + var(--space-double))}}`;function me(t){return t[Math.floor(Math.random()*t.length)]}const be=["New Project","Super cool project","Click me twice to edit","Change this title","Amaaaaazing","🚀 BAAAM!","This will be great!","We all have to start somewhere","The early bird...","Let´s go!"],ge=["Project description goes here. Double click to edit...","Write a nice project description here","A nice project description makes everyone happy!","An apple a day keeps the doctor away","I will not be lazy, i will not be lazy, i will not be lazy","Let´s get started","Let`s get this show on the road","Yesterday all my troubles seemed so far away","They were on a break!","Joey doesn’t share food!","May the force be with you","Do. Or do not. There is no try"],ve=["Add content to this note","This is a note","Click me twice to edit","Double click me to get going...","Example note","This is a really beautiful note example","🦄","🦖","👾","Let´s do something cool","1, 2, 3, let´s go!","Badabim, badabum!"],fe=["Select a project...","Select a project to get started!","Hello there, how are you doing?","Let´s get stuff done today!!!","Howdy partner 🤠 how are you doing?","Don´t look now, but there is a 🦖 right behind you!","Are you superstitious or just a little stitious?","Ned, I would love to stand here and talk with you—but I’m not going to","I walk around like everything’s fine, but deep down, inside my shoe, my sock is sliding off","I’m not good at the advice. Can I interest you in a sarcastic comment?","Anyone who lives within their means suffers from a lack of imagination","Outside of a dog, a book is man’s best friend. Inside of a dog, it’s too dark to read","✨ Today will be great!","🚀 Fly me to the moon, let me play among the stars"],_e=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ye=(t,e)=>{var o,i;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(i=(o=t)._$AO)||void 0===i||i.call(o,e,!1),ye(t,e);return!0},xe=t=>{let e,o;do{if(void 0===(e=t._$AM))break;o=e._$AN,o.delete(t),t=e}while(0===(null==o?void 0:o.size))},we=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(void 0===o)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Ee(e)}};function ke(t){void 0!==this._$AN?(xe(this),this._$AM=t,we(this)):this._$AM=t}function Se(t,e=!1,o=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let t=o;t<i.length;t++)ye(i[t],!1),xe(i[t]);else null!=i&&(ye(i,!1),xe(i));else ye(this,t)}const Ee=t=>{var e,o,i,n;t.type==_e&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=Se),null!==(o=(n=t)._$AQ)&&void 0!==o||(n._$AQ=ke))};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $e=()=>new Ce;class Ce{}const Ae=new WeakMap,Pe=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),we(this),this.isConnected=t._$AU}_$AO(t,e=!0){var o,i;t!==this.isConnected&&(this.isConnected=t,t?null===(o=this.reconnected)||void 0===o||o.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(ye(this,t),xe(this))}setValue(t){if((t=>void 0===t.strings)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}{render(t){return L}update(t,[e]){var o;const i=e!==this.U;return i&&void 0!==this.U&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.U=e,this.ht=null===(o=t.options)||void 0===o?void 0:o.host,this.ot(this.lt=t.element)),L}ot(t){"function"==typeof this.U?(void 0!==Ae.get(this.U)&&this.U.call(this.ht,void 0),Ae.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)):this.U.value=t}get rt(){var t;return"function"==typeof this.U?Ae.get(this.U):null===(t=this.U)||void 0===t?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),je=a`:host{position:relative;width:var(--note-width);height:auto;display:flex;align-items:center;justify-content:center;aspect-ratio:1;background-color:var(--color-surface);color:var(--color-text-primary);font-size:var(--font-size-big);font-weight:var(--font-weight-bold);box-sizing:border-box;border-radius:var(--border-radius-normal)}:host([pinned]){background-color:var(--color-pinned)}.buttons{position:absolute;top:var(--space-half);right:var(--space-half);display:grid;grid-template-columns:repeat(2,var(--note-icon-size));grid-gap:var(--space-half)}.button{height:var(--note-icon-size);width:var(--note-icon-size);background-color:var(--color-text-secondary);mask-size:contain;-webkit-mask-size:contain;mask-position:center;-webkit-mask-position:center;mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;cursor:pointer}.button--delete{position:relative;top:-10%;mask-image:var(--ielou-icon-delete);-webkit-mask-image:var(--ielou-icon-delete)}.button--pin{mask-image:var(--ielou-icon-pin);-webkit-mask-image:var(--ielou-icon-pin)}.button--pin[active]{mask-image:var(--ielou-icon-pin-full);-webkit-mask-image:var(--ielou-icon-pin-full);background-color:var(--color-primary)}.content{border:2px solid transparent;outline:0;text-align:center;margin:var(--space-half)}.content:focus{border-bottom:2px dashed var(--color-primary)}.count{position:absolute;bottom:var(--space-half);right:var(--space-half);font-size:var(--font-size-small);font-weight:var(--font-weight-medium);color:var(--color-text-secondary)}@media (hover:hover){.button:hover{background-color:var(--color-primary)}.button--pin[active]:hover{background-color:var(--color-primary-light)}}@media screen and (min-width:${640}px){.count{display:none}:host(:focus-within) .count,:host(:hover) .count{display:block}}`;class Ne extends K{constructor(){super(),this.note=null,this.countCurrent=0,this.contentRef=$e(),this.countTotal=80,this.allowedKeysWhenFull=["Backspace","ArrowRight","ArrowLeft","ArrowUp","ArrowDown"]}get getCount(){return(this.contentRef.value.textContent.trim()||"").length||0}render(){return this.note?T` <div class="buttons"> <div class="button button--delete" @click="${this._onDeleteButtonClick}" @keydown="${this._onButtonKeyDown}"></div> <div class="button button--pin" ?active="${this.note.isPinned}" @click="${this._onPinButtonClick}" @keydown="${this._onButtonKeyDown}"></div> </div> <p class="content" @dblclick="${this._onContentDoubleClick}" @blur="${this._onContentBlur}" @keydown="${this._onContentKeyDown}" @input="${this._onContentInput}" ${Pe(this.contentRef)}> ${this.note.content} </p> <div class="count"> <span class="count__current">${this.countCurrent}</span> / <span class="count__total">${this.countTotal}</span> </div> `:null}firstUpdated(){this.countCurrent=this.getCount}_onDeleteButtonClick(){window.confirm("Are you sure you want to delete this note?")&&this.dispatchEvent(new CustomEvent("ielou-delete-note",{bubbles:!0,composed:!0,detail:{noteId:this.note.id}}))}_onPinButtonClick(){this.dispatchEvent(new CustomEvent("ielou-note-is-pinned-toggle",{bubbles:!0,composed:!0,detail:{noteId:this.note.id}}))}_onContentDoubleClick(t){const e=t.currentTarget;e.setAttribute("contenteditable",""),e.focus()}_onContentBlur(t){const e=t.currentTarget;this.dispatchEvent(new CustomEvent("ielou-update-note",{bubbles:!0,composed:!0,detail:{noteId:this.note.id,newContent:e.textContent}}))}_onContentInput(t){const e=t.currentTarget;return e&&e.textContent&&e.textContent.trim().length?(this.countCurrent=this.getCount,null):0}_onContentKeyDown(t){const e=t.currentTarget,o=e.textContent.trim().length,i=t.code||t.key;o>=this.countTotal&&!this.allowedKeysWhenFull.includes(i)?t.preventDefault():"Enter"!==t.code&&"Enter"!==t.key||e.blur()}_onButtonKeyDown(t){const e=t.currentTarget;"Enter"!==t.code&&"Enter"!==t.key||e.click()}}Ne.styles=[le,je],t([tt({type:Object})],Ne.prototype,"note",void 0),t([tt({type:Number})],Ne.prototype,"countCurrent",void 0),customElements.define("ielou-note",Ne);class Te extends K{constructor(){super(...arguments),this.project=null}get pinnedNotes(){return this.project.notes.filter((t=>!0===t.isPinned))}get unpinnedNotes(){return this.project.notes.filter((t=>!1===t.isPinned))}render(){return this.project?T` <div class="header"> <h2 class="title" @dblclick="${this._onElementDoubleClick}" @blur="${this._onTitleBlur}" @keydown="${this._onElementKeyDown}"> ${this.project.title} </h2> <p class="date">${this.project.date}</p> <p class="description" @dblclick="${this._onElementDoubleClick}" @blur="${this._onDescriptionBlur}" @keydown="${this._onElementKeyDown}"> ${this.project.description} </p> <button class="delete-button" @click="${this._onDeleteButtonClick}"></button> </div> <section class="notes"> ${this.pinnedNotes.map((t=>T`<ielou-note .note="${t}" ?pinned="${t.isPinned}"></ielou-note>`))} ${this.unpinnedNotes.map((t=>T`<ielou-note .note="${t}"></ielou-note>`))} <button class="new-note-button" @click="${this._onNewNoteButtonClick}"> New note </button> </section> `:T` <h2 class="no-project-selected"> ${me(fe)} </h2> `}_onElementDoubleClick(t){const e=t.currentTarget;e.setAttribute("contenteditable",""),e.focus()}_onTitleBlur(t){const e=t.currentTarget;this.dispatchEvent(new CustomEvent("ielou-update-project-title",{bubbles:!0,composed:!0,detail:{projectId:this.project.id,newTitle:e.textContent}}))}_onDescriptionBlur(t){const e=t.currentTarget;this.dispatchEvent(new CustomEvent("ielou-update-project-description",{bubbles:!0,composed:!0,detail:{projectId:this.project.id,newDescription:e.textContent}}))}_onElementKeyDown(t){const e=t.currentTarget;"Enter"!==t.key&&"Enter"!==t.code||e.blur()}_onDeleteButtonClick(){window.confirm(`Do you really want to delete the "${this.project.title}" project?`)&&this.dispatchEvent(new CustomEvent("ielou-delete-project",{bubbles:!0,composed:!0,detail:{projectId:this.project.id}}))}_onNewNoteButtonClick(){this.dispatchEvent(new CustomEvent("ielou-new-note-button-click",{bubbles:!0,composed:!0,detail:{projectId:this.project.id}}))}}Te.styles=[le,he],t([tt({type:Object})],Te.prototype,"project",void 0),customElements.define("ielou-stage",Te);const Ue=a`:host{box-sizing:border-box;background-color:var(--color-bg);grid-area:stage;padding:var(--space-normal)}.header{width:100%;display:grid;align-items:center;justify-content:space-between;grid-template-areas:'title delete' 'date date' 'description description';grid-template-columns:1fr auto;margin-bottom:var(--space-normal)}.title{grid-area:title;font-size:var(--font-size-bigger);color:var(--color-text-primary);margin:0;outline:0;border-bottom:2px transparent}.setting{margin-bottom:var(--space-double)}.setting__title{color:var(--color-text-primary);margin:0}.setting__description{color:var(--color-text-secondary);margin:0;font-weight:var(--font-weight-medium);font-size:var(--font-size-small)}.setting__button{border:none;margin-top:var(--space-half);background-color:var(--color-primary);color:var(--color-bg);padding:var(--space-half);border-radius:var(--border-radius-normal);cursor:pointer;appearance:none}.setting__file-button{display:none}@media (hover:hover){.setting__button:hover{background-color:var(--color-primary-light)}}@media screen and (min-width:840px){:host{padding:var(--space-normal) var(--space-double) var(--space-double) calc(var(--sidebar-width) + var(--space-double))}}`;class Le extends K{constructor(){super(...arguments),this.importButtonRef=$e()}render(){return T` <div class="header"> <h2 class="title">Settings</h2> </div> <section class="settings"> <div class="setting"> <h4 class="setting__title">Dark mode</h4> <p class="setting__description">Turn dark mode on or off</p> <button class="setting__button" @click="${this._onThemeToggleClick}"> Toggle dark mode </button> </div> <div class="setting"> <h4 class="setting__title">Reset</h4> <p class="setting__description"> Reset the app to the original state by removing all projects, notes and settings </p> <button class="setting__button" @click="${this._onResetButtonClick}"> Reset </button> </div> <div class="setting"> <h4 class="setting__title">Export data</h4> <p class="setting__description"> Export your data as a JSON file (as backup or to use in another computer) </p> <button class="setting__button" @click="${this._onExportButtonClick}"> Export </button> </div> <div class="setting"> <h4 class="setting__title">Import data</h4> <p class="setting__description"> Import data from a JSON file. This data will be merged with your current data </p> <button class="setting__button" @click="${this._onImportButtonClick}"> Import </button> <input type="file" class="setting__file-button" ${Pe(this.importButtonRef)}> </div> </section> `}_onThemeToggleClick(){this.dispatchEvent(new CustomEvent("ielou-toggle-theme-click",{bubbles:!0,composed:!0}))}_onResetButtonClick(){this.dispatchEvent(new CustomEvent("ielou-reset-click",{bubbles:!0,composed:!0}))}_onExportButtonClick(){this.dispatchEvent(new CustomEvent("ielou-export-button-click",{bubbles:!0,composed:!0}))}_onImportButtonClick(){this.importButtonRef.value.click(),this.importButtonRef.value.addEventListener("change",(t=>{var e;if(!(null===(e=t.target.files)||void 0===e?void 0:e.length))return void console.error("Could not load file");const o=new FileReader;o.onload=()=>{if("string"==typeof o.result){const t=JSON.parse(o.result);!function(t){return"ielou app export"===t.title&&Object.prototype.hasOwnProperty.call(t,"projects")}(t)?console.error("Import data is not valid!"):this.dispatchEvent(new CustomEvent("ielou-import-data",{bubbles:!0,composed:!0,detail:{importData:t.projects}}))}},o.readAsText(t.target.files[0])}))}}var Ie;Le.styles=[le,Ue],customElements.define("ielou-settings",Le);var Me=new Uint8Array(16);function De(){if(!Ie&&!(Ie="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ie(Me)}var ze=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Re(t){return"string"==typeof t&&ze.test(t)}for(var Oe=[],Be=0;Be<256;++Be)Oe.push((Be+256).toString(16).substr(1));function Ve(t,e,o){var i=(t=t||{}).random||(t.rng||De)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){o=o||0;for(var n=0;n<16;++n)e[o+n]=i[n];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(Oe[t[e+0]]+Oe[t[e+1]]+Oe[t[e+2]]+Oe[t[e+3]]+"-"+Oe[t[e+4]]+Oe[t[e+5]]+"-"+Oe[t[e+6]]+Oe[t[e+7]]+"-"+Oe[t[e+8]]+Oe[t[e+9]]+"-"+Oe[t[e+10]]+Oe[t[e+11]]+Oe[t[e+12]]+Oe[t[e+13]]+Oe[t[e+14]]+Oe[t[e+15]]).toLowerCase();if(!Re(o))throw TypeError("Stringified UUID is invalid");return o}(i)}class He extends K{constructor(){super(),this.state=nt,this.sidebarVisible=!1,this.isDark=!1,it()||ot(nt),this.state=it(),this.isDark=this.state.isDark,this._onUpdateStore=this._onUpdateStore.bind(this),this._onBurgerClick=this._onBurgerClick.bind(this),this._onNewProjectButtonClick=this._onNewProjectButtonClick.bind(this),this._onSelectProject=this._onSelectProject.bind(this),this._onUpdateProjectTitle=this._onUpdateProjectTitle.bind(this),this._onUpdateProjectDescription=this._onUpdateProjectDescription.bind(this),this._onDeleteProject=this._onDeleteProject.bind(this),this._onNewNoteButtonClick=this._onNewNoteButtonClick.bind(this),this._onNoteDeleteClick=this._onNoteDeleteClick.bind(this),this._onNoteIsPinnedToggle=this._onNoteIsPinnedToggle.bind(this),this._onUpdateNote=this._onUpdateNote.bind(this),this._onShowStartPage=this._onShowStartPage.bind(this),this._onSettingsButtonClick=this._onSettingsButtonClick.bind(this),this._onSettingsThemeToggleClick=this._onSettingsThemeToggleClick.bind(this),this._onResetClick=this._onResetClick.bind(this),this._onExportButtonClick=this._onExportButtonClick.bind(this),this._onImportData=this._onImportData.bind(this)}get activeProject(){return this.state&&this.state.activeProject&&this.state.projects.length&&this.state.projects.find((t=>t.id===this.state.activeProject))||null}connectedCallback(){super.connectedCallback(),window.addEventListener("ielou-update-store",this._onUpdateStore),window.addEventListener("burgton-button-state-change",this._onBurgerClick),this.addEventListener("ielou-new-project-button-click",this._onNewProjectButtonClick),this.addEventListener("ielou-select-project",this._onSelectProject),this.addEventListener("ielou-update-project-title",this._onUpdateProjectTitle),this.addEventListener("ielou-update-project-description",this._onUpdateProjectDescription),this.addEventListener("ielou-delete-project",this._onDeleteProject),this.addEventListener("ielou-new-note-button-click",this._onNewNoteButtonClick),this.addEventListener("ielou-delete-note",this._onNoteDeleteClick),this.addEventListener("ielou-note-is-pinned-toggle",this._onNoteIsPinnedToggle),this.addEventListener("ielou-update-note",this._onUpdateNote),this.addEventListener("ielou-show-start-page",this._onShowStartPage),this.addEventListener("ielou-settings-button-click",this._onSettingsButtonClick),this.addEventListener("ielou-toggle-theme-click",this._onSettingsThemeToggleClick),this.addEventListener("ielou-reset-click",this._onResetClick),this.addEventListener("ielou-export-button-click",this._onExportButtonClick),this.addEventListener("ielou-import-data",this._onImportData)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("ielou-update-store",this._onUpdateStore),window.removeEventListener("burgton-button-state-change",this._onBurgerClick),this.removeEventListener("ielou-new-project-button-click",this._onNewProjectButtonClick),this.removeEventListener("ielou-select-project",this._onSelectProject),this.removeEventListener("ielou-update-project-title",this._onUpdateProjectTitle),this.removeEventListener("ielou-update-project-description",this._onUpdateProjectDescription),this.removeEventListener("ielou-delete-project",this._onDeleteProject),this.removeEventListener("ielou-new-note-button-click",this._onNewNoteButtonClick),this.removeEventListener("ielou-delete-note",this._onNoteDeleteClick),this.removeEventListener("ielou-note-is-pinned-toggle",this._onNoteIsPinnedToggle),this.removeEventListener("ielou-update-note",this._onUpdateNote),this.removeEventListener("ielou-show-start-page",this._onShowStartPage),this.removeEventListener("ielou-settings-button-click",this._onSettingsButtonClick),this.removeEventListener("ielou-toggle-theme-click",this._onSettingsThemeToggleClick),this.removeEventListener("ielou-reset-click",this._onResetClick),this.removeEventListener("ielou-export-button-click",this._onExportButtonClick),this.removeEventListener("ielou-import-data",this._onImportData)}updateState(){this.state=it(),this.isDark=this.state.isDark}_onBurgerClick(){this.sidebarVisible=!this.sidebarVisible}_onUpdateStore(t){ot(t),this.updateState()}_onNewProjectButtonClick(){const t={id:Ve().toString(),title:me(be),description:me(ge),date:(new Date).toLocaleString(void 0,et),notes:[]},e=this.state;e.projects.push(t),e.activeProject=t.id,this._onUpdateStore(e)}_onSelectProject(t){const e=this.state;e.activeProject=t.detail.selectedProject,this._onUpdateStore(e)}_onUpdateProjectTitle(t){const{projectId:e,newTitle:o}=t.detail,i=this.state,n=i.projects.map((t=>{if(t.id===e){t.title=o.trim()}return t}));i.projects=n,this._onUpdateStore(i)}_onUpdateProjectDescription(t){const{projectId:e,newDescription:o}=t.detail,i=this.state,n=i.projects.map((t=>{if(t.id===e){t.description=o.trim()}return t}));i.projects=n,this._onUpdateStore(i)}_onDeleteProject(t){const e=this.state,{projectId:o}=t.detail;e.projects=e.projects.filter((t=>t.id.toString()!==o.toString())),e.activeProject=null,this._onUpdateStore(e)}_onNewNoteButtonClick(t){const{projectId:e}=t.detail,o={id:Ve(),content:me(ve),isPinned:!1},i=this.state;i.projects.map((t=>(t.id===e&&t.notes.push(o),t))),this._onUpdateStore(i)}_onNoteDeleteClick(t){const{noteId:e}=t.detail,o=this.state;o.projects=o.projects.map((t=>(t.notes=t.notes.filter((t=>t.id.toString()!==e.toString())),t))),this._onUpdateStore(o)}_onNoteIsPinnedToggle(t){const{noteId:e}=t.detail,o=this.state;o.projects=o.projects.map((t=>(t.notes=t.notes.map((t=>(t.id.toString()===e.toString()&&(t.isPinned=!t.isPinned),t))),t))),this._onUpdateStore(o)}_onUpdateNote(t){const{noteId:e,newContent:o}=t.detail,i=this.state;i.projects=i.projects.map((t=>(t.notes=t.notes.map((t=>(t.id.toString()===e.toString()&&(t.content=o),t))),t))),this._onUpdateStore(i)}_onShowStartPage(){const t=this.state;t.activeProject=null,this._onUpdateStore(t)}_onSettingsButtonClick(){const t=this.state;t.activeProject="settings",this._onUpdateStore(t)}_onSettingsThemeToggleClick(){const t=this.state;t.isDark=!t.isDark,this._onUpdateStore(t)}_onResetClick(){if(window.confirm("Do you really want to reset your data? This will permanently delete all of your projects and notes.")){const t=this.state;t.projects=[],this._onUpdateStore(t)}}_onExportButtonClick(){const t=function(t){const e={title:"ielou app export",date:(new Date).toLocaleString(void 0,et),projects:t};return JSON.stringify(e)}(this.state.projects),e=`data:application/json;charset=utf-8,${encodeURIComponent(t)}`,o=document.createElement("a");o.setAttribute("href",e),o.setAttribute("download","ielouAppExport.json"),o.click()}_onImportData(t){const{importData:e}=t.detail,o=this.state,i=o.projects;e.forEach((t=>{i.filter((e=>e.id===t.id)).length||i.push(t)})),o.projects=i,this._onUpdateStore(o)}render(){return T` <ielou-topbar></ielou-topbar> <ielou-sidebar ?isVisible="${this.sidebarVisible}" .projects="${this.state.projects}" .activeProject="${this.state.activeProject}"> </ielou-sidebar> ${"settings"===this.state.activeProject?T`<ielou-settings></ielou-settings>`:T`<ielou-stage .project="${this.activeProject}"></ielou-stage>`} `}}He.styles=[at],t([tt({type:Array})],He.prototype,"state",void 0),t([tt({type:Boolean,reflect:!0})],He.prototype,"sidebarVisible",void 0),t([tt({type:Boolean,hasChanged:t=>(t?document.documentElement.setAttribute("isDark",""):document.documentElement.removeAttribute("isDark"),t)})],He.prototype,"isDark",void 0),customElements.define("ielou-app",He);

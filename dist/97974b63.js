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
function t(t,e,o,n){var i,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,o,r):i(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new Map;class i{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return e&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const a=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,o,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1]),t[0]);return new i(n,o)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new i("string"==typeof t?t:t+"",o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s;const l=window.trustedTypes,d=l?l.emptyScript:"",p=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},m=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m};class h extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const n=this._$Eh(o,e);void 0!==n&&(this._$Eu.set(n,o),t.push(n))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdate(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{e?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),n=window.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=c){var n,i;const a=this.constructor._$Eh(t,o);if(void 0!==a&&!0===o.reflect){const r=(null!==(i=null===(n=o.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:u.toAttribute)(e,o.type);this._$Ei=t,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Ei=null}}_$AK(t,e){var o,n,i;const a=this.constructor,r=a._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=a.getPropertyOptions(r),s=t.converter,l=null!==(i=null!==(n=null===(o=s)||void 0===o?void 0:o.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==i?i:u.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let n=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;h.finalized=!0,h.elementProperties=new Map,h.elementStyles=[],h.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:h}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.1.1");const g=globalThis.trustedTypes,v=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,_="?"+f,y=`<${_}>`,x=document,w=(t="")=>x.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,k=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,N=/"/g,T=/^(?:script|style|textarea)$/i,U=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),O=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),R=new WeakMap,M=x.createTreeWalker(x,129,null,!1),z=(t,e)=>{const o=t.length-1,n=[];let i,a=2===e?"<svg>":"",r=A;for(let e=0;e<o;e++){const o=t[e];let s,l,d=-1,p=0;for(;p<o.length&&(r.lastIndex=p,l=r.exec(o),null!==l);)p=r.lastIndex,r===A?"!--"===l[1]?r=E:void 0!==l[1]?r=k:void 0!==l[2]?(T.test(l[2])&&(i=RegExp("</"+l[2],"g")),r=C):void 0!==l[3]&&(r=C):r===C?">"===l[0]?(r=null!=i?i:A,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?C:'"'===l[3]?N:P):r===N||r===P?r=C:r===E||r===k?r=A:(r=C,i=void 0);const u=r===C&&t[e+1].startsWith("/>")?" ":"";a+=r===A?o+y:d>=0?(n.push(s),o.slice(0,d)+"$lit$"+o.slice(d)+f+u):o+f+(-2===d?(n.push(void 0),e):u)}const s=a+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(s):s,n]};class V{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let i=0,a=0;const r=t.length-1,s=this.parts,[l,d]=z(t,e);if(this.el=V.createElement(l,o),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=M.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const o=d[a++];if(t.push(e),void 0!==o){const t=n.getAttribute(o.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?D:"?"===e[1]?F:"@"===e[1]?W:B})}else s.push({type:6,index:i})}for(const e of t)n.removeAttribute(e)}if(T.test(n.tagName)){const t=n.textContent.split(f),e=t.length-1;if(e>0){n.textContent=g?g.emptyScript:"";for(let o=0;o<e;o++)n.append(t[o],w()),M.nextNode(),s.push({type:2,index:++i});n.append(t[e],w())}}}else if(8===n.nodeType)if(n.data===_)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=n.data.indexOf(f,t+1));)s.push({type:7,index:i}),t+=f.length-1}i++}}static createElement(t,e){const o=x.createElement("template");return o.innerHTML=t,o}}function j(t,e,o=t,n){var i,a,r,s;if(e===O)return e;let l=void 0!==n?null===(i=o._$Cl)||void 0===i?void 0:i[n]:o._$Cu;const d=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,o,n)),void 0!==n?(null!==(r=(s=o)._$Cl)&&void 0!==r?r:s._$Cl=[])[n]=l:o._$Cu=l),void 0!==l&&(e=j(t,l._$AS(t,e.values),l,n)),e}class H{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:n}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(o,!0);M.currentNode=i;let a=M.nextNode(),r=0,s=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new I(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new J(a,this,t)),this.v.push(e),l=n[++s]}r!==(null==l?void 0:l.index)&&(a=M.nextNode(),r++)}return i}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class I{constructor(t,e,o,n){var i;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cg=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),S(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return $(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==L&&S(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=V.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(o);else{const t=new H(i,this),e=t.p(this.options);t.m(o),this.S(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new V(t)),e}A(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const i of t)n===e.length?e.push(o=new I(this.M(w()),this.M(w()),this,this.options)):o=e[n],o._$AI(i),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class B{constructor(t,e,o,n,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const i=this.strings;let a=!1;if(void 0===i)t=j(this,t,e,0),a=!S(t)||t!==this._$AH&&t!==O,a&&(this._$AH=t);else{const n=t;let r,s;for(t=i[0],r=0;r<i.length-1;r++)s=j(this,n[o+r],e,r),s===O&&(s=this._$AH[r]),a||(a=!S(s)||s!==this._$AH[r]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+i[r+1]),this._$AH[r]=s}a&&!n&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends B{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}const q=g?g.emptyScript:"";class F extends B{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class W extends B{constructor(t,e,o,n,i){super(t,e,o,n,i),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=j(this,t,e,0))&&void 0!==o?o:L)===O)return;const n=this._$AH,i=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,a=t!==L&&(n===L||i);i&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const K=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Y;null==K||K(V,I),(null!==(b=globalThis.litHtmlVersions)&&void 0!==b?b:globalThis.litHtmlVersions=[]).push("2.1.1");class X extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var n,i;const a=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:e;let r=a._$litPart$;if(void 0===r){const t=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;a._$litPart$=r=new I(e.insertBefore(w(),t),t,void 0,null!=o?o:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return O}}X.finalized=!0,X._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:X});const Z=globalThis.litElementPolyfillSupport;null==Z||Z({LitElement:X}),(null!==(Y=globalThis.litElementVersions)&&void 0!==Y?Y:globalThis.litElementVersions=[]).push("3.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function tt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):Q(t,e)}function et(t){return localStorage.setItem("ielou_app",JSON.stringify(t))}function ot(){const t=localStorage.getItem("ielou_app");return JSON.parse(t)}const nt={activeProject:null,projects:[]},it=a`:host{box-sizing:border-box;min-height:100vh;width:100%;display:grid;grid-template-columns:min-content 1fr;grid-template-rows:auto 1fr;grid-template-areas:'topbar topbar' 'sidebar stage';transition:all 2s ease-out}`
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
 */,at="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,rt=(t,e,o=null)=>{for(;e!==o;){const o=e.nextSibling;t.removeChild(e),e=o}},st=`{{lit-${String(Math.random()).slice(2)}}}`,lt=`\x3c!--${st}--\x3e`,dt=new RegExp(`${st}|${lt}`);class pt{constructor(t,e){this.parts=[],this.element=e;const o=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let a=0,r=-1,s=0;const{strings:l,values:{length:d}}=t;for(;s<d;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let n=0;for(let t=0;t<o;t++)ut(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=l[s],o=ht.exec(e)[2],n=o.toLowerCase()+"$lit$",i=t.getAttribute(n);t.removeAttribute(n);const a=i.split(dt);this.parts.push({type:"attribute",index:r,name:o,strings:a}),s+=a.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(st)>=0){const n=t.parentNode,i=e.split(dt),a=i.length-1;for(let e=0;e<a;e++){let o,a=i[e];if(""===a)o=ct();else{const t=ht.exec(a);null!==t&&ut(t[2],"$lit$")&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),o=document.createTextNode(a)}n.insertBefore(o,t),this.parts.push({type:"node",index:++r})}""===i[a]?(n.insertBefore(ct(),t),o.push(t)):t.data=i[a],s+=a}}else if(8===t.nodeType)if(t.data===st){const e=t.parentNode;null!==t.previousSibling&&r!==a||(r++,e.insertBefore(ct(),t)),a=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(o.push(t),r--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(st,e+1));)this.parts.push({type:"node",index:-1}),s++}}else i.currentNode=n.pop()}for(const t of o)t.parentNode.removeChild(t)}}const ut=(t,e)=>{const o=t.length-e.length;return o>=0&&t.slice(o)===e},mt=t=>-1!==t.index,ct=()=>document.createComment(""),ht=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function bt(t,e){const{element:{content:o},parts:n}=t,i=document.createTreeWalker(o,133,null,!1);let a=vt(n),r=n[a],s=-1,l=0;const d=[];let p=null;for(;i.nextNode();){s++;const t=i.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(d.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==r&&r.index===s;)r.index=null!==p?-1:r.index-l,a=vt(n,a),r=n[a]}d.forEach((t=>t.parentNode.removeChild(t)))}const gt=t=>{let e=11===t.nodeType?0:1;const o=document.createTreeWalker(t,133,null,!1);for(;o.nextNode();)e++;return e},vt=(t,e=-1)=>{for(let o=e+1;o<t.length;o++){const e=t[o];if(mt(e))return o}return-1};
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
const ft=new WeakMap,_t=t=>"function"==typeof t&&ft.has(t),yt={},xt={};
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
class wt{constructor(t,e,o){this.__parts=[],this.template=t,this.processor=e,this.options=o}update(t){let e=0;for(const o of this.__parts)void 0!==o&&o.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=at?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],o=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,a=0,r=0,s=n.nextNode();for(;a<o.length;)if(i=o[a],mt(i)){for(;r<i.index;)r++,"TEMPLATE"===s.nodeName&&(e.push(s),n.currentNode=s.content),null===(s=n.nextNode())&&(n.currentNode=e.pop(),s=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,i.name,i.strings,this.options));a++}else this.__parts.push(void 0),a++;return at&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const St=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),$t=` ${st} `;class At{constructor(t,e,o,n){this.strings=t,this.values=e,this.type=o,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");o=(i>-1||o)&&-1===t.indexOf("--\x3e",i+1);const a=ht.exec(t);e+=null===a?t+(o?$t:lt):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+st}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==St&&(e=St.createHTML(e)),t.innerHTML=e,t}}
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
 */const Et=t=>null===t||!("object"==typeof t||"function"==typeof t),kt=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Ct{constructor(t,e,o){this.dirty=!0,this.element=t,this.name=e,this.strings=o,this.parts=[];for(let t=0;t<o.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Pt(this)}_getValue(){const t=this.strings,e=t.length-1,o=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=o[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!kt(t))return t}let n="";for(let i=0;i<e;i++){n+=t[i];const e=o[i];if(void 0!==e){const t=e.value;if(Et(t)||!kt(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Pt{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===yt||Et(t)&&t===this.value||(this.value=t,_t(t)||(this.committer.dirty=!0))}commit(){for(;_t(this.value);){const t=this.value;this.value=yt,t(this)}this.value!==yt&&this.committer.commit()}}class Nt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(ct()),this.endNode=t.appendChild(ct())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=ct()),t.__insert(this.endNode=ct())}insertAfterPart(t){t.__insert(this.startNode=ct()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;_t(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=yt,t(this)}const t=this.__pendingValue;t!==yt&&(Et(t)?t!==this.value&&this.__commitText(t):t instanceof At?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):kt(t)?this.__commitIterable(t):t===xt?(this.value=xt,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,o="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof wt&&this.value.template===e)this.value.update(t.values);else{const o=new wt(e,t.processor,this.options),n=o._clone();o.update(t.values),this.__commitNode(n),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let o,n=0;for(const i of t)o=e[n],void 0===o&&(o=new Nt(this.options),e.push(o),0===n?o.appendIntoPart(this):o.insertAfterPart(e[n-1])),o.setValue(i),o.commit(),n++;n<e.length&&(e.length=n,this.clear(o&&o.endNode))}clear(t=this.startNode){rt(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Tt{constructor(t,e,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;_t(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=yt,t(this)}if(this.__pendingValue===yt)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=yt}}class Ut extends Ct{constructor(t,e,o){super(t,e,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new Ot(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ot extends Pt{}let Lt=!1;(()=>{try{const t={get capture(){return Lt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class Rt{constructor(t,e,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=o,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;_t(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=yt,t(this)}if(this.__pendingValue===yt)return;const t=this.__pendingValue,e=this.value,o=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Mt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=yt}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Mt=t=>t&&(Lt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function zt(t){let e=Vt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Vt.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const n=t.strings.join(st);return o=e.keyString.get(n),void 0===o&&(o=new pt(t,t.getTemplateElement()),e.keyString.set(n,o)),e.stringsArray.set(t.strings,o),o}const Vt=new Map,jt=new WeakMap;
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
 */const Ht=new
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
class{handleAttributeExpressions(t,e,o,n){const i=e[0];if("."===i){return new Ut(t,e.slice(1),o).parts}if("@"===i)return[new Rt(t,e.slice(1),n.eventContext)];if("?"===i)return[new Tt(t,e.slice(1),o)];return new Ct(t,e,o).parts}handleTextExpression(t){return new Nt(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const It=(t,...e)=>new At(t,e,"html",Ht)
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
 */,Bt=(t,e)=>`${t}--${e}`;let Dt=!0;void 0===window.ShadyCSS?Dt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Dt=!1);const qt=t=>e=>{const o=Bt(e.type,t);let n=Vt.get(o);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},Vt.set(o,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const a=e.strings.join(st);if(i=n.keyString.get(a),void 0===i){const o=e.getTemplateElement();Dt&&window.ShadyCSS.prepareTemplateDom(o,t),i=new pt(e,o),n.keyString.set(a,i)}return n.stringsArray.set(e.strings,i),i},Ft=["html","svg"],Wt=new Set,Jt=(t,e,o)=>{Wt.add(t);const n=o?o.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:a}=i;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(n,t);const r=document.createElement("style");for(let t=0;t<a;t++){const e=i[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{Ft.forEach((e=>{const o=Vt.get(Bt(e,t));void 0!==o&&o.keyString.forEach((t=>{const{element:{content:e}}=t,o=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{o.add(t)})),bt(t,o)}))}))})(t);const s=n.content;o?function(t,e,o=null){const{element:{content:n},parts:i}=t;if(null==o)return void n.appendChild(e);const a=document.createTreeWalker(n,133,null,!1);let r=vt(i),s=0,l=-1;for(;a.nextNode();)for(l++,a.currentNode===o&&(s=gt(e),o.parentNode.insertBefore(e,o));-1!==r&&i[r].index===l;){if(s>0){for(;-1!==r;)i[r].index+=s,r=vt(i,r);return}r=vt(i,r)}}(o,r,s.firstChild):s.insertBefore(r,s.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(o){s.insertBefore(r,s.firstChild);const t=new Set;t.add(r),bt(o,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Kt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Gt=(t,e)=>e!==t&&(e==e||t==t),Yt={attribute:!0,type:String,converter:Kt,reflect:!1,hasChanged:Gt};class Xt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,o)=>{const n=this._attributeNameForProperty(o,e);void 0!==n&&(this._attributeToPropertyMap.set(n,o),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=Yt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const o="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,o,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdateInternal(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Yt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const o of e)this.createProperty(o,t[o])}}static _attributeNameForProperty(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,o=Gt){return o(t,e)}static _propertyValueFromAttribute(t,e){const o=e.type,n=e.converter||Kt,i="function"==typeof n?n:n.fromAttribute;return i?i(t,o):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const o=e.type,n=e.converter;return(n&&n.toAttribute||Kt.toAttribute)(t,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,o){e!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,e,o=Yt){const n=this.constructor,i=n._attributeNameForProperty(t,o);if(void 0!==i){const t=n._propertyValueToAttribute(e,o);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const o=this.constructor,n=o._attributeToPropertyMap.get(t);if(void 0!==n){const t=o.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=o._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,o){let n=!0;if(void 0!==t){const i=this.constructor;o=o||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Xt.finalized=!0;
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
const Zt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol();class te{constructor(t,e){if(e!==Qt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Zt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(t,...e)=>{const o=e.reduce(((e,o,n)=>e+(t=>{if(t instanceof te)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[n+1]),t[0]);return new te(o,Qt)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const oe={};class ne extends Xt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,o)=>t.reduceRight(((t,o)=>Array.isArray(o)?e(o,t):(t.add(o),t)),o),o=e(t,new Set),n=[];o.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Zt){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new te(String(e),Qt)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Zt?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==oe&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return oe}}ne.finalized=!0,ne.render=(t,e,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const n=o.scopeName,i=jt.has(e),a=Dt&&11===e.nodeType&&!!e.host,r=a&&!Wt.has(n),s=r?document.createDocumentFragment():e;if(((t,e,o)=>{let n=jt.get(e);void 0===n&&(rt(e,e.firstChild),jt.set(e,n=new Nt(Object.assign({templateFactory:zt},o))),n.appendInto(e)),n.setValue(t),n.commit()})(t,s,Object.assign({templateFactory:qt(n)},o)),r){const t=jt.get(s);jt.delete(s);const o=t.value instanceof wt?t.value.template:void 0;Jt(n,s,o),rt(e,e.firstChild),e.appendChild(s),jt.set(e,t)}!i&&a&&window.ShadyCSS.styleElement(e.host)},ne.shadowRootOptions={mode:"open"};var ie,ae=ee`
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
      
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      ${ee`
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
      
      ${ee`
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
`;ie=function(){function t(t){var e=!0,o=!1,n=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function r(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function s(t){e=!1}function l(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(o){o.metaKey||o.altKey||o.ctrlKey||(a(t.activeElement)&&r(t.activeElement),e=!0)}),!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",(function(t){"hidden"===document.visibilityState&&(o&&(e=!0),l())}),!0),l(),t.addEventListener("focus",(function(t){var o,n,s;a(t.target)&&(e||(o=t.target,n=o.type,"INPUT"===(s=o.tagName)&&i[n]&&!o.readOnly||"TEXTAREA"===s&&!o.readOnly||o.isContentEditable))&&r(t.target)}),!0),t.addEventListener("blur",(function(t){var e;a(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(n),n=window.setTimeout((function(){o=!1}),100),(e=t.target).hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added")))}),!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)},"object"==typeof exports&&"undefined"!=typeof module?ie():"function"==typeof define&&define.amd?define(ie):ie();class re extends ne{static get is(){return"burgton-button"}static get styles(){return ae}render(){return It`
      <span class="line line--top"></span>
      <span class="line line--middle"></span>
      <span class="line line--bottom"></span>
      ${this.label?It`<span class="label">${this.label}</span>`:""}
    `}static get properties(){return{type:{type:String},state:{type:Boolean},label:{type:String},labelPosition:{type:String},targetSelectors:{type:String},targetClasses:{type:String},description:{type:String}}}set state(t){this._state=t,this._state?this.setAttribute("active",""):this.removeAttribute("active"),this.setAttribute("aria-pressed",this._state),this._toggleTargetClasses(),this._dispatchEvent("burgton-button-state-change")}get state(){return this._state}set type(t){this._type=t,this.setAttribute("type",this._type)}get type(){return this._type}set labelPosition(t){t&&!["top","bottom","right","left"].includes(t)||""===t?(this._logError(`"${t}" is not a valid labelPosition value`),this.setAttribute("labelPosition","bottom"),this._labelPosition="bottom"):this._labelPosition=t}get labelPosition(){return this._labelPosition}set targetSelectors(t){this._targetSelectors=t}get targetSelectors(){return this._targetSelectors}set targetClasses(t){this._targetClasses=t}get targetClasses(){return this._targetClasses}set description(t){this._description=this.label?this.label:t,this.setAttribute("aria-label",this._description)}get description(){return this._description}constructor(){super(),this.type="default",this.state=!1,this.label=null,this.labelPosition="bottom",this.description="Menu button",this.acceptedTypes=["default","arrow-left","arrow-right","arrow-to-arrow","astronaut","async","crossed","ellipsis","fall-down","minus","rotator","spin","underlined","vertical-rotator","zoom"],this.addA11yFeatures()}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleClick),this.addEventListener("keydown",this._handleKeyPressed)}attributeChangedCallback(t,e,o){"type"!==t||this.acceptedTypes.includes(o)?super.attributeChangedCallback(t,e,o):(this._logError(`"${o}" is not a valid type value`),this.type="default")}addA11yFeatures(){this.setAttribute("role","button"),this.setAttribute("aria-pressed",!1),this.tabIndex=0,this.setAttribute("aria-haspopup","menu")}_handleClick(){this.toggleState(),this._dispatchEvent("burgton-button-click")}_handleKeyPressed(t){" "!==t.key&&"Enter"!==t.key&&"Spacebar"!==t.key||(t.preventDefault(),this._handleClick())}_toggleTargetClasses(){if(this._targetSelectors&&this._targetClasses){const t=this.getAttribute("targetSelectors").split(",").map((t=>t.trim())),e=this.getAttribute("targetClasses").split(",").map((t=>t.trim()));if(t.length!==e.length)return void this._logError(`The number of target selectors (${t.length}) does not match the number of target classes (${e.length}), so to prevent errors the selector toggle will be disabled. Make sure the number of targetSelectors and targetClasses match.`);t.forEach(((t,o)=>{document.querySelector(t).classList.toggle(e[o])}))}}_dispatchEvent(t){const e=new CustomEvent(t,{bubbles:!0,composed:!0,detail:{state:this.state}});this.dispatchEvent(e)}_logError(t){console.error(`BURGTON BUTTON ERROR: ${t}`),console.info("You can find the documentation for the burgton button here: https://boguz.github.io/burgton-button-docs/")}toggleState(){this.state=!this.hasAttribute("active")}activate(){this.state=!0,this._dispatchEvent("burgton-button-activate")}deactivate(){this.state=!1,this._dispatchEvent("burgton-button-deactivate")}}customElements.define(re.is,re);const se=[a`:host{--color-surface:#fce5ad;--color-primary:#6a9a8f;--color-primary-light:#6da798;--color-text-primary:#404446;--color-text-secondary:#40444677;--space-normal:1rem;--space-double:2rem;--space-half:0.5rem;--space-quarter:0.25rem;--transition-duration-normal:0.25s;--border-radius-normal:0.125rem;--font-weight-medium:500;--font-weight-bold:700;--font-size-normal:1rem;--font-size-small:.875rem;--font-size-smaller:.75rem;--topbar-height:3rem;--topbar-logo-height:1.5rem;--sidebar-width:100vw;--sidebar-list-item-height:2rem;--sidebar-active-marker-width:4px}@media screen and (min-width:640px){:host{--sidebar-width:320px}}`,a``],le=a`:host{box-sizing:border-box;background-color:var(--color-surface);height:var(--topbar-height);width:100%;display:flex;align-items:center;grid-area:topbar;padding:0 var(--space-normal)}.header{display:flex;align-items:center}.burger{--burgton-button-line-color:var(--color-primary);--burgton-button-line-color-active:var(--color-primary);--burgton-button-animation-duration:var(--transition-duration-normal);margin-right:var(--space-normal)}.logo{height:var(--topbar-logo-height);width:auto}@media (hover:hover){.burger:hover{--burgton-button-line-color:var(--color-primary-light);--burgton-button-line-color-active:var(--color-primary-light)}}`;class de extends X{constructor(){super();re||console.log("could not load the burger button!")}render(){return U` <header class="header"> <burgton-button type="arrow-left" class="burger"></burgton-button> <img src="../assets/logo.svg" alt="ielou app logo" class="logo"> </header> `}}de.styles=[se,le],customElements.define("ielou-topbar",de);const pe=a`:host{box-sizing:border-box;background-color:var(--color-surface);grid-area:sidebar;width:0;padding:var(--space-normal) 0;transition:all var(--transition-duration-normal) ease-in-out;overflow:hidden;position:relative}:host([isvisible]){width:var(--sidebar-width);padding:var(--space-normal)}.list{list-style:none;margin:0;padding:0}.list__item{height:var(--sidebar-list-item-height);display:flex;align-items:center;justify-content:space-between;color:var(--color-text-secondary);position:relative;cursor:pointer}.list__item--empty{font-size:var(--font-size-small);opacity:.5;pointer-events:none}.list__item[active]{color:var(--color-primary)}.list__item[active]::after{content:'';width:var(--sidebar-active-marker-width);height:100%;position:absolute;top:0;right:calc(var(--space-normal) * -1);background-color:var(--color-primary)}.bottom-button{position:absolute;bottom:0;left:0;padding:var(--space-normal);box-sizing:border-box;width:100%}.new-project-button{background-color:var(--color-primary);color:var(--color-surface);cursor:pointer;width:100%;display:flex;align-items:center;justify-content:center;border:none;outline:0;padding:var(--space-half);border-radius:var(--border-radius-normal)}@media (hover:hover){.list__item:hover{color:var(--color-primary-light)}.new-project-button:hover{background-color:var(--color-primary-light)}}`;class ue extends X{constructor(){super(...arguments),this.activeProject=null,this.projects=null}render(){return U` <ul class="list"> ${this.projects.length?this.projects.map((t=>this._renderListItem(t))):this._renderNoProjectsMessage()} </ul> <div class="bottom-button"> <button class="new-project-button">New Project</button> </div> `}_renderListItem(t){return U` <li class="list__item" id="${t.id}" ?active="${t.id===this.activeProject}"> <span class="list__item-name">${t.title}</span> <span class="list__item-count">${t.notes.length}</span> </li> `}_renderNoProjectsMessage(){return U` <li class="list__item list__item--empty">No projects yet. Click the "New Project" button to get started</li> `}}ue.styles=[se,pe],t([tt({type:String})],ue.prototype,"activeProject",void 0),t([tt({type:Array})],ue.prototype,"projects",void 0),customElements.define("ielou-sidebar",ue);const me=a`:host{box-sizing:border-box;background-color:#add8e6;grid-area:stage}`;class ce extends X{render(){return U` <main>STAGE</main> `}}ce.styles=[se,me],customElements.define("ielou-stage",ce);class he extends X{constructor(){super(),this.state=nt,this.sidebarVisible=!1,ot()||et(nt),this.state=ot(),console.log("STORE",this.state),this._onUpdateStore=this._onUpdateStore.bind(this),this._onBurgerClick=this._onBurgerClick.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("ielou-update-store",this._onUpdateStore),window.addEventListener("burgton-button-state-change",this._onBurgerClick)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("ielou-update-store",this._onUpdateStore),window.removeEventListener("burgton-button-state-change",this._onBurgerClick)}updateState(){this.state=ot(),console.log("Updates State",this.state)}_onBurgerClick(){this.sidebarVisible=!this.sidebarVisible}_onUpdateStore(t){et(t.detail)}render(){return U` <ielou-topbar></ielou-topbar> <ielou-sidebar ?isVisible="${this.sidebarVisible}" .projects="${this.state.projects}" .activeProject="${this.state.activeProject}"> </ielou-sidebar> <ielou-stage></ielou-stage> `}}he.styles=[it],t([tt({type:Array})],he.prototype,"state",void 0),t([tt({type:Boolean,reflect:!0})],he.prototype,"sidebarVisible",void 0),customElements.define("ielou-app",he);

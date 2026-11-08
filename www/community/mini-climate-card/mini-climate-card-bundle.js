!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let s=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new s(n,t,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:r,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,m=globalThis,p=m.trustedTypes,g=p?p.emptyScript:"",f=m.reactiveElementPolyfillSupport,_=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!r(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of n){const n=document.createElement("style"),s=t.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=n;const o=s.fromAttribute(e,t.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(void 0!==t){const o=this.constructor;if(!1===n&&(s=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[_("elementProperties")]=new Map,w[_("finalized")]=new Map,f?.({ReactiveElement:w}),(m.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,x=t=>t,A=$.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,k=`<${E}>`,M=document,O=()=>M.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,D="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,I=/>/g,z=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,L=/"/g,R=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,W=M.createTreeWalker(M,129);function K(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":3===e?"<math>":"",a=H;for(let e=0;e<i;e++){const i=t[e];let r,c,h=-1,l=0;for(;l<i.length&&(a.lastIndex=l,c=a.exec(i),null!==c);)l=a.lastIndex,a===H?"!--"===c[1]?a=j:void 0!==c[1]?a=I:void 0!==c[2]?(R.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=z):void 0!==c[3]&&(a=z):a===z?">"===c[0]?(a=s??H,h=-1):void 0===c[1]?h=-2:(h=a.lastIndex-c[2].length,r=c[1],a=void 0===c[3]?z:'"'===c[3]?L:N):a===L||a===N?a=z:a===j||a===I?a=H:(a=z,s=void 0);const d=a===z&&t[e+1].startsWith("/>")?" ":"";o+=a===H?i+k:h>=0?(n.push(r),i.slice(0,h)+T+i.slice(h)+S+d):i+S+(-2===h?e:d)}return[K(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class Z{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const a=t.length-1,r=this.parts,[c,h]=G(t,e);if(this.el=Z.createElement(c,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=W.nextNode())&&r.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(T)){const e=h[o++],i=n.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);r.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:X}),n.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:s}),n.removeAttribute(t));if(R.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],O()),W.nextNode(),r.push({type:2,index:++s});n.append(t[e],O())}}}else if(8===n.nodeType)if(n.data===E)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)r.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,n){if(e===B)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=U(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=J(t,s._$AS(t,e.values),s,n)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??M).importNode(e,!0);W.currentNode=n;let s=W.nextNode(),o=0,a=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new Q(s,s.nextSibling,this,t):1===r.type?e=new r.ctor(s,r.name,r.strings,this,t):6===r.type&&(e=new nt(s,this,t)),this._$AV.push(e),r=i[++a]}o!==r?.index&&(s=W.nextNode(),o++)}return W.currentNode=M,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),U(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Y(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=J(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const n=t;let a,r;for(t=s[0],a=0;a<s.length-1;a++)r=J(this,n[i+a],e,a),r===B&&(r=this._$AH[a]),o||=!U(r)||r!==this._$AH[a],r===V?t=V:t!==V&&(t+=(r??"")+s[a+1]),this._$AH[a]=r}o&&!n&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends X{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??V)===B)return;const i=this._$AH,n=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==V&&(i===V||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(Z,Q),($.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;let at=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new Q(e.insertBefore(O(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const rt=ot.litElementPolyfillSupport;rt?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");const ct=(t,e)=>{customElements.get(t)||customElements.define(t,e)},ht=1,lt=t=>(...e)=>({_$litDirective$:t,values:e});let dt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const ut=lt(class extends dt{constructor(t){if(super(t),t.type!==ht||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return B}}),mt="important",pt=" !"+mt,gt=lt(class extends dt{constructor(t){if(super(t),t.type!==ht||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const n=e[t];if(null!=n){this.ft.add(t);const e="string"==typeof n&&n.endsWith(pt);t.includes("-")||e?i.setProperty(t,e?n.slice(0,-11):n,e?mt:""):i[t]=n}}return B}}),ft=o`
  :host {
    overflow: visible !important;
    display: block;
    --mc-scale: var(--mini-climate-scale, 1);
    --mc-unit: calc(var(--mc-scale) * 40px);
    --mc-name-font-weight: var(--mini-climate-name-font-weight, 400);
    --mc-info-font-weight: var(--mini-climate-info-font-weight, 300);
    --mc-entity-info-left-offset: 8px;
    --mc-accent-color: var(--mini-climate-accent-color, var(--accent-color, #f39c12));
    --mc-text-color: var(--mini-climate-base-color, var(--primary-text-color, #000));
    --mc-active-color: var(--mc-accent-color);
    --mc-button-color: var(--mini-climate-button-color, var(--paper-item-icon-color, #44739e));
    --mc-icon-color:
      var(--mini-climate-icon-color,
        var(--mini-climate-base-color,
          var(--paper-item-icon-color, #44739e)));
    --mc-icon-active-color: var(--state-binary_sensor-active-color, #ffc107);
    --mc-info-opacity: 1;
    --mc-bg-opacity: var(--mini-climate-background-opacity, 1);
    color: var(--mc-text-color);
    --mc-dropdown-unit: calc(var(--mc-unit) * .75);
    --paper-item-min-height: var(--mc-unit);
    /* --mdc-icon-button-size is the pre-2026 knob, --ha-icon-button-size the
       current one; both are set so the card sizes correctly on either. */
    --mdc-icon-button-size: calc(var(--mc-unit) * 0.75);
    --ha-icon-button-size: calc(var(--mc-unit) * 0.75);
  }
  ha-card.--group {
    box-shadow: none;
  }
  ha-card.--bg {
    --mc-info-opacity: .75;
  }
  ha-card {
    cursor: default;
    display: flex;
    background: transparent;
    overflow: visible;
    padding: 0;
    position: relative;
    color: inherit;
    font-size: calc(var(--mc-unit) * 0.35);
    border: none;
  }
  ha-card:before {
    content: '';
    padding-top: 0px;
    transition: padding-top .5s cubic-bezier(.21,.61,.35,1);
    will-change: padding-top;
  }
  header {
    display: none;
  }
  .mc__bg {
    background: var(--ha-card-background, var(--card-background-color, var(--paper-card-background-color, white)));
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: var(--mc-bg-opacity);
    box-shadow: var(--mini-climate-card-box-shadow, var(--ha-card-box-shadow, none));
    box-sizing: border-box;
    border-radius: var(--ha-card-border-radius, 12px);
    border-width: var(--ha-card-border-width, 1px);
    border-style: solid;
    border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0) );
  }
  ha-card.--group .mc__bg {
    background: none;
    border: none;
  }
  .mc-climate {
    align-self: flex-end;
    box-sizing: border-box;
    position: relative;
    padding: 16px 16px 0px 16px;
    transition: padding .25s ease-out;
    width: 100%;
    will-change: padding;
  }
  .flex {
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: row;
  }
  .mc-climate__core {
    position: relative;
    padding-right: 5px;
  }
  .entity__info {
    user-select: none;
    margin-left: var(--mc-entity-info-left-offset);
    flex: 1;
    min-width: 0;
    white-space: nowrap;
  }
  .entity__icon {
    color: var(--mc-icon-color);
    white-space: nowrap;
  }
  .entity__icon[color] {
    color: var(--mc-icon-active-color);
  }
  .entity__icon {
    animation: fade-in .25s ease-out;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    height: var(--mc-unit);
    width: var(--mc-unit);
    min-width: var(--mc-unit);
    line-height: var(--mc-unit);
    margin-right: calc(var(--mc-unit) / 5);
    position: relative;
    text-align: center;
    will-change: border-color;
    transition: border-color .25s ease-out;
  }
  .entity__info__name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: calc(var(--mc-unit) / 2);
    color: var(--mc-text-color);
    font-weight: var(--mc-name-font-weight);
  }
  .entity__secondary_info {
    margin-top: -2px;
  }
  ha-card.--initial .mc-climate {
    padding: 16px 16px 5px 16px;
  }
  ha-card.--unavailable .mc-climate {
    padding: 16px;
  }
  ha-card.--group .mc-climate {
    padding: 8px 0px 0px 0px;
  }
  .toggle-button {
    width: calc(var(--mc-unit) * .75);
    height: calc(var(--mc-unit) * .75);
    --mdc-icon-button-size: calc(var(--mc-unit) * .75);
    --ha-icon-button-size: calc(var(--mc-unit) * .75);
    color: var(--mc-icon-color);
    margin-left: auto;
    margin-top: calc(var(--mc-unit) * -.125);
    margin-right: calc(var(--mc-unit) * .05);
    --ha-icon-display: flex;
  }
  .toggle-button.open {
     transform: rotate(180deg);
     color: var(--mc-active-color);
  }
  .wrap {
    display: flex;
    flex-direction: row;
  }
  .entity__controls {
    margin-left: auto;
    display: flex;
    white-space: nowrap;
    margin-top: calc(var(--mc-unit) * -.25);
  }
  .ctl-wrap {
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
    margin-left: auto;
    /* Both margins auto, so the mode and the temperatures sit on the middle
       of the row rather than on its bottom edge. With margin-bottom: 0 the
       block was 4.5px lower than the middle of the entity icon beside it,
       which is what #99 is: the icon on the left not lining up with what is
       on the right. */
    margin-top: auto;
    margin-bottom: auto;
    --ha-icon-display: flex;
  }
  .bottom {
    margin-top: calc(var(--mc-unit) * .05);
    height: calc(var(--mc-unit) * .625);;
  }
  .entity__info__name_wrap {
    margin-right: 10px;
    min-width: 0;
    height: var(--mc-unit);
  }
  /* With a secondary info line the pair fills the row and the name reads as
     part of it. Without one the name was left at the top of a row as tall as
     the icon, 10px above the middle of everything beside it (#100). Centring
     it is confined to that case: applied to both, it would shift the
     secondary line for cards that never asked for a change. */
  .--no-secondary-info .entity__info__name_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .--more-info .entity__info__name_wrap {
    cursor: pointer;
  }
  mc-buttons {
    width: 100%;
    justify-content: space-evenly;
    display: flex;
    --ha-icon-display: flex;
  }
  mc-temperature {
    min-width: 0;
  }
  .--unavailable .ctl-wrap {
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
  .--unavailable .entity__info {
    margin-top: auto;
    margin-bottom: auto;
  }
  .mc-toggle_content {
    margin-top: calc(var(--mc-unit) * .05);
  }
  .ctl-wrap mc-dropdown, .ctl-wrap mc-button {
    min-width: calc(var(--mc-unit) * .75);
    margin-right: 3px;
  }
  .ctl-wrap mc-button {
    width: calc(var(--mc-unit) * 0.75);
    height: calc(var(--mc-unit) * 0.75);
  }
`,_t=o`
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .label {
    margin: 0 8px;
  }
  ha-icon {
    width: calc(var(--mc-unit) * .6);
    height: calc(var(--mc-unit) * .6);
    --mdc-icon-size: calc(var(--mc-unit) * .6);
  }
  ha-icon-button {
    color: var(--mc-button-color);
    transition: color .25s;
  }
  ha-icon-button[color] {
    color: var(--mc-icon-active-color) !important;
    opacity: 1 !important;
  }
  ha-icon-button[inactive] {
    opacity: .5;
  }
`;var vt=(t,e,i,n)=>{let s;if(i)switch(i.action){case"more-info":s=new Event("hass-more-info",{composed:!0}),s.detail={entityId:i.entity||n},t.dispatchEvent(s);break;case"navigate":if(!i.navigation_path)return;window.history.pushState(null,"",i.navigation_path),s=new Event("location-changed",{composed:!0}),s.detail={replace:!1},window.dispatchEvent(s);break;case"call-service":{if(!i.service)return;const[t,n]=i.service.split(".",2),s={...i.service_data};e.callService(t,n,s);break}case"fire-dom-event":s=new Event("ll-custom",{composed:!0,bubbles:!0}),s.detail={...i},t.dispatchEvent(s);break;case"url":if(!i.url)return;window.location.href=i.url}};const yt=(t,e,i="unknown")=>{for(let i=0;i<e.length;i+=1){const n=e[i],s=t.localize(n);if(""!==s)return s}return i};console.info("%c MINI-CLIMATE-CARD %c v3.4.0 ","color: white; background: coral; font-weight: 700;","color: coral; background: white; font-weight: 700;");const bt={DEFAULT:"mdi:air-conditioner",FAN:"mdi:fan",OFF:"mdi:power",HEAT:"mdi:weather-sunny",AUTO:"mdi:cached",COOL:"mdi:snowflake",HEAT_COOL:"mdi:sun-snowflake",DRY:"mdi:water",FAN_ONLY:"mdi:fan",TOGGLE:"mdi:dots-horizontal",UP:"mdi:chevron-up",DOWN:"mdi:chevron-down"},wt=["closed","locked","off"],$t=["unavailable","unknown"],xt=["more-info","navigate","call-service","url","fire-dom-event"],At="-",Ct=t=>t?wt.includes(t)||$t.includes(t)?wt.includes(t)&&!$t.includes(t)?"on":t:"off":t,Tt=(t,e)=>{if(t)return e&&e.attribute&&t.attributes?t.attributes[e.attribute]:t.state},St=(t,e)=>Number(`${Math.round(Number(`${t}e${e}`))}e-${e}`),Et=t=>"number"==typeof t?Number.isFinite(t):"string"==typeof t&&""!==t.trim()&&Number.isFinite(Number(t)),kt=t=>"string"==typeof t?{action:t}:{action:"none",...t||{}},Mt=(t,e)=>{try{return new Function("",`return ${t}`).call(e||{})}catch(e){throw new Error(`\n[COMPILE ERROR]: [${e.toString()}]\n[SOURCE]: ${t}\n`,{cause:e})}};class Ot{constructor(t,e,i,n){this.climate=n||{},this.temperatureEntity=t||{},this.targetTemperatureEntity=e||{},this.config=i,this.config.hide_current_temperature?"boolean"==typeof this.config.hide_current_temperature?this.shouldHideCurrentTemperature=()=>!0:this.shouldHideCurrentTemperature=Mt(this.config.hide_current_temperature):this.shouldHideCurrentTemperature=()=>!1}get hass(){return this.climate.hass}get tapAction(){return this.config.temperature.tap_action}get targetTapAction(){return this.config.target_temperature.tap_action}get entityId(){return this.config.temperature.source&&this.config.temperature.source.entity||this.config.entity}get targetEntityId(){return this.config.target_temperature.source&&this.config.target_temperature.source.entity||this.config.entity}get unit(){return this.config.temperature.unit||this.config.target_temperature.unit||"°C"}get step(){const t=this.targetTemperatureEntity;return"step"in this.config.target_temperature?this.config.target_temperature.step:t&&t.attributes&&t.attributes.target_temp_step?t.attributes.target_temp_step:1}get value(){const t=this.rawValue;if(Et(t)){if("fixed"in this.config.temperature)return parseFloat(t.toString()).toFixed(this.config.temperature.fixed);if("round"in this.config.temperature)return St(t,this.config.temperature.round)}return t}get rawValue(){return Tt(this.temperatureEntity,this.config.temperature.source)}get hide(){return this.shouldHideCurrentTemperature(this.value,this.temperatureEntity,this.targetTemperatureEntity,this.climate.entity,this.climate.mode)}}class Ut{constructor(t,e,i){this.entity=t||{},this.config=e,this._hass=i,this.min=this.getMin(),this.max=this.getMax(),this.step=this.getStep()}get hass(){return this._hass}get icons(){return this.config.target_temperature.icons}getStep(){return"step"in this.config.target_temperature?parseFloat(this.config.target_temperature.step):this.entity&&this.entity.attributes&&this.entity.attributes.target_temp_step?parseFloat(this.entity.attributes.target_temp_step):1}getMin(){return"min"in this.config.target_temperature?parseFloat(this.config.target_temperature.min):this.entity&&this.entity.attributes&&this.entity.attributes.min_temp?parseFloat(this.entity.attributes.min_temp):16}getMax(){return"max"in this.config.target_temperature?parseFloat(this.config.target_temperature.max):this.entity&&this.entity.attributes&&this.entity.attributes.max_temp?parseFloat(this.entity.attributes.max_temp):30}_floatOrPlaceholder(t){return Number.isNaN(t)?At:t}get value(){if(void 0!==this._targetTemperature)return this._floatOrPlaceholder(parseFloat(this._targetTemperature));const t=Tt(this.entity,this.config.target_temperature.source);return this._floatOrPlaceholder(parseFloat(t))}set value(t){this._targetTemperature=parseFloat(t)}increment(){const t=this.value;if(t===At)return!1;const e=this._round(this.value+this.step);return e<=this.max?e<=this.min?this.value=this.min:this.value=e:this.value=this.max,t!==this.value}decrement(){const t=this.value;if(t===At)return!1;const e=this._round(this.value-this.step);return e>=this.min?this.value=e:this.value=this.min,t!==this.value}_round(t){const e=this.step.toString().split(".");return e[1]?parseFloat(t.toFixed(e[1].length)):Math.round(t)}update(t){if(this.config.target_temperature.functions.change_action){const e=this.hass.states[this.config.entity];return this.config.target_temperature.functions.change_action(t,this.entity,e)}return this.hass.callService("climate","set_temperature",{entity_id:this.entity.entity_id,temperature:t})}}class Pt{constructor(t,e,i,n){this.config=e||{},this.entity=t||{},this.climate=i||{},this._hass=n||{}}get id(){return this.config.id}get location(){return this.config.location||"bottom"}get hass(){return this._hass}get type(){return this.config.type}get order(){return this.config.order}get hide(){return!!this.config.functions.hide&&this.config.functions.hide(this.state,this.entity,this.climate.entity,this.climate.mode)}get icon(){return this.config.functions.icon&&this.config.functions.icon.template?this.config.functions.icon.template(this.state,this.entity,this.climate.entity,this.climate.mode):this.config.icon}get originalState(){return Tt(this.entity,this.config.state)}get state(){let t=this.originalState;return this.config.functions.state&&this.config.functions.state.mapper&&(t=this.config.functions.state.mapper(t,this.entity,this.climate.entity,this.climate.mode)),t}isActive(t){return!!this.config.functions.active&&this.config.functions.active(t,this.entity,this.climate.entity,this.climate.mode)}get isUnavailable(){return void 0===this.entity||$t.includes(this.state)}get isOn(){return void 0!==this.entity&&!wt.includes(this.state)&&!$t.includes(this.state)}get disabled(){return!!this.config.functions.disabled&&this.config.functions.disabled(this.state,this.entity,this.climate.entity,this.climate.mode)}get style(){return this.config.functions.style&&this.config.functions.style(this.state,this.entity,this.climate.entity,this.climate.mode)||{}}get source(){const{functions:t}=this.config;let e=Object.entries(this.config.source||{}).filter(([t])=>"__filter"!==t).map(([t,e])=>"object"==typeof e?{id:t,...e||{}}:{id:t,name:e});return e.some(t=>"order"in t)&&(e=e.sort((t,e)=>t.order>e.order?1:e.order>t.order?-1:0)),t.source&&t.source.filter?t.source.filter(e,this.state,this.entity,this.climate.entity,this.climate.mode):e}get selected(){const{state:t}=this;if(null!=t)return this.source.find(e=>e.id===t.toString())}get actionTimeout(){return"action_timeout"in this.config?this.config.action_timeout:2e3}handleToggle(){return this.config.functions.toggle_action?this.config.functions.toggle_action(this.state,this.entity,this.climate.entity,this.climate.mode):this.climate.callService("switch","toggle",{entity_id:this.entity.entity_id})}handleChange(t){if(this.config.functions.change_action)return this.config.functions.change_action(t,this.state,this.entity,this.climate.entity,this.climate.mode)}}class Dt{constructor(t,e,i,n){this.config=e||{},this.entity=t||{},this.climate=i||{},this._hass=n||{}}get id(){return this.config.id}get hass(){return this._hass}get originalValue(){return Tt(this.entity,this.config.source)}get value(){let t=this.originalValue;return this.config.functions.mapper&&(t=this.config.functions.mapper(t,this.entity,this.climate.entity,this.climate.mode)),Et(t)&&("fixed"in this.config?t=parseFloat(t.toString()).toFixed(this.config.fixed):"round"in this.config&&(t=St(t,this.config.round))),t}get unit(){return this.config.functions.unit&&this.config.functions.unit.template?this.config.functions.unit.template(this.value,this.originalValue,this.entity,this.climate.entity,this.climate.mode):this.config.unit}get icon(){return this.config.functions.icon&&this.config.functions.icon.template?this.config.functions.icon.template(this.value,this.entity,this.climate.entity,this.climate.mode):this.config.icon&&"string"==typeof this.config.icon?this.config.icon:""}get iconStyle(){return this.config.functions.icon&&this.config.functions.icon.style&&this.config.functions.icon.style(this.value,this.entity,this.climate.entity,this.climate.mode)||{}}get valueStyle(){return this.config.functions.value&&this.config.functions.value.style&&this.config.functions.value.style(this.value,this.entity,this.climate.entity,this.climate.mode)||{}}get hide(){return!!this.config.functions.hide&&this.config.functions.hide(this.value,this.entity,this.climate.entity,this.climate.mode)}}const Ht="component.climate.entity_component._";class jt{constructor(t,e,i){this.hass=t||{},this.config=e||{},this.entity=i||{},this.state=this.entity.state,this.attr={friendly_name:"",temperature:16,current_temperature:24,fan_mode:"",hvac_modes:[],target_temp_step:void 0,min_temp:void 0,max_temp:void 0,hvac_action:"",fan_modes:[],...this.entity.attributes||{}}}get lastChanged(){return this.entity.last_changed}get lastUpdated(){return this.entity.last_updated}get hvacAction(){const t=this.config.secondary_info&&this.config.secondary_info.source||{},e=this.attr.hvac_action;let i={id:e};const n=[`${Ht}.state_attributes.hvac_action.state.${e}`,`state_attributes.climate.hvac_action.${e}`];return i.name=yt(this.hass,n,e),e in t&&("string"==typeof t[e]?i.name=t[e]:i={...i,...t[e]}),i}get mode(){return this._hvac_mode}set mode(t){this._hvac_mode=t}get defaultHvacModes(){const t=this.attr.hvac_modes,e=[];for(let i=0;i<t.length;i+=1){const n=t[i],s=[`${Ht}.state.${n}`,`state.climate.${n}`,`component.climate.state._.${n}`],o={id:n,name:yt(this.hass,s,n)},a=n.toString().toUpperCase();a in bt&&(o.icon=bt[a]),e.push(o)}return e}get defaultFanModes(){const t=this.attr.fan_modes,e={};for(let i=0;i<t.length;i+=1){const n=t[i],s=[`${Ht}.state_attributes.fan_mode.state.${n}`,`state_attributes.climate.fan_mode.${n}`];e[n]=yt(this.hass,s,n)}return e}get id(){return this.entity.entity_id}get icon(){return this.attr.icon}get name(){return this.attr.friendly_name||""}get isOff(){return!1===this.isUnavailable&&wt.includes(this.state)}get isActive(){return!1===this.isOff&&!1===this.isUnavailable||!1}get isUnavailable(){return void 0===this.entity.entity_id||$t.includes(this.state)}get isOn(){return!1===this.isUnavailable&&!1===wt.includes(this.state)}callService(t,e,i){return this.hass.callService(t,e,{entity_id:this.config.entity,...i})}}class It{constructor(t,e,i){this.config=e||{},this.entity=t||{},this.climate=i||{}}get hide(){return!!this.config.functions.hide&&this.config.functions.hide(this.state,this.entity,this.climate.entity,this.climate.mode)}get originalState(){return Tt(this.entity,this.config.state)}get state(){let t=this.originalState;return this.config.functions.state&&this.config.functions.state.mapper&&(t=this.config.functions.state.mapper(t,this.entity,this.climate.entity)),t}isActive(t){return!!this.config.functions.active&&this.config.functions.active(t,this.entity,this.climate.entity)}get disabled(){return!!this.config.functions.disabled&&this.config.functions.disabled(this.state,this.entity,this.climate.entity)}get style(){return this.config.functions.style&&this.config.functions.style(this.state,this.entity,this.climate.entity)||{}}get source(){const{functions:t}=this.config;let e=Object.entries(this.config.source||{}).filter(([t])=>"__filter"!==t).map(([t,e])=>"object"==typeof e?{id:t,...e||{}}:{id:t,name:e});return e.some(t=>"order"in t)&&(e=e.sort((t,e)=>t.order>e.order?1:e.order>t.order?-1:0)),t.source&&t.source.filter?t.source.filter(e,this.state,this.entity,this.climate.entity):e}get selected(){const{state:t}=this;if(null!=t)return this.source.find(e=>e.id===t.toString())}get icon(){const{selected:t}=this;if(t?.icon)return t.icon;if(void 0!==t?.id&&null!==t.id){const e=t.id.toString().toUpperCase();if(e in bt)return bt[e]}return bt.DEFAULT}get actionTimeout(){const t=this.config.action_timeout;return"number"==typeof t?t:2e3}handleChange(t){if(this.config.functions.change_action)return this.config.functions.change_action(t,this.entity,this.climate.entity)}}class zt extends at{static get properties(){return{temperature:{type:Object},changing:{type:Boolean},target:{type:Number},swapTemperatures:{type:Boolean}}}get targetStr(){const t=this.target.toString(),e=parseFloat(t);if(Number.isNaN(e)||t===At)return At;const i=this.temperature.step.toString().split(".");return i[1]?e.toFixed(i[1].length):t}static clickable(t){return!!t&&!!t.action&&"none"!==t.action}handleTap(t,e,i){zt.clickable(e)&&(t.stopPropagation(),vt(this,this.temperature.hass,e,i))}renderValue(t,e,i,n=!1){const s=["state__value",n?"changing":"",zt.clickable(e)?"clickable":""].filter(Boolean).join(" ");return F`<span
      class='${s}'
      @click=${t=>this.handleTap(t,e,i)}>${t}</span>`}renderTemperature(){return void 0===this.temperature.value||this.temperature.hide?"":this.renderValue(this.temperature.value,this.temperature.tapAction,this.temperature.entityId)}renderTarget(){return this.renderValue(this.targetStr,this.temperature.targetTapAction,this.temperature.targetEntityId,this.changing)}render(){if(!this.temperature)return F``;const{unit:t}=this.temperature,e=this.renderTemperature(),i=""===e?"":F`<span class='state__value'>/</span>`,[n,s]=this.swapTemperatures?[e,this.renderTarget()]:[this.renderTarget(),e];return F`
    <div class='state ellipsis'>
      ${n}
      ${i}
      ${s}
      <span class='state__uom'>${t}</span>
    </div>
    `}static get styles(){return o`
    .state {
      margin-top:calc(var(--mc-unit) * .15);
    }
    .state__value {
      font-weight: var(--mc-info-font-weight);
      line-height: calc(var(--mc-unit) * .475);
      font-size: calc(var(--mc-unit) * .475);
    }
    .state__uom {
      font-size: calc(var(--mc-unit) * 0.35);
      font-weight: var(--mc-name-font-weight);
      opacity: 0.6;
      line-height: calc(var(--mc-unit) * 0.475);
    }
    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .changing {
      color: var(--mc-accent-color);
    }
    .clickable {
      cursor: pointer;
    }
    `}}ct("mc-temperature",zt);ct("mc-target-temperature",class extends at{constructor(){super(),this.timeout=800}static get properties(){return{targetTemperature:{type:Object}}}increment(t){t.stopPropagation();this.targetTemperature.increment()&&(this.temp_last_changed=Date.now(),this.targetTemperatureChanged())}decrement(t){t.stopPropagation();this.targetTemperature.decrement()&&(this.temp_last_changed=Date.now(),this.targetTemperatureChanged())}sendChangeEvent(t){const e=new CustomEvent("changing",{detail:{changing:t}});this.dispatchEvent(e)}targetTemperatureChanged(){this.temp_last_changed&&(this.sendChangeEvent(!0),window.setTimeout(()=>{if(!this.temp_last_changed)return;if(Date.now()-this.temp_last_changed<this.timeout)return;const{value:t}=this.targetTemperature;try{this.targetTemperature.update(t)}finally{this.sendChangeEvent(!1),this.temp_last_changed=null}},this.timeout+10))}render(){return this.targetTemperature?F`
      <div class='controls-wrap'>
        <ha-icon-button class='temp --up'
          .icon=${this.targetTemperature.icons.up}
          @click=${t=>this.increment(t)}>
          <ha-icon .icon=${this.targetTemperature.icons.up}></ha-icon>
        </ha-icon-button>
        <ha-icon-button class='temp --down'
          .icon=${this.targetTemperature.icons.down}
          @click=${t=>this.decrement(t)}>
           <ha-icon .icon=${this.targetTemperature.icons.down}></ha-icon>
        </ha-icon-button>
      </div>
    `:""}static get styles(){return o`
    .controls-wrap {
      display: flex;
      flex-direction: column;
      height: 100%;
      --ha-icon-display: flex;
    }
    .temp {
      width: calc(var(--mc-unit) * .75);
      height: calc(var(--mc-unit) * .75);
      --mdc-icon-button-size: calc(var(--mc-unit) * .75);
      --ha-icon-button-size: calc(var(--mc-unit) * .75);
      --mdc-icon-size: calc(var(--mc-unit) * .6);
      color: var(--mc-icon-color);
    }
    .temp.--up {
      margin-top: -2px;
    }
    .temp.--down {
      margin-top: -2px;
    }
    .temp.--down {
      margin-top: auto;
    }
    `}});ct("mc-menu",class extends at{static get properties(){return{items:{type:Array},selected:{type:String},open:{type:Boolean,state:!0}}}constructor(){super(),this.items=[],this.open=!1,this.anchor=null,this.onDocumentPointerDown=t=>this.handleDocumentPointerDown(t),this.onDocumentKeydown=t=>this.handleDocumentKeydown(t),this.onViewportChange=()=>this.close()}disconnectedCallback(){this.stopListening(),super.disconnectedCallback()}get selectedIndex(){return void 0===this.selected||null===this.selected?-1:this.items.map(t=>t.id).indexOf(this.selected)}get surface(){return this.shadowRoot&&this.shadowRoot.getElementById("surface")}get options(){return this.surface?[...this.surface.querySelectorAll(".mc-menu__item")]:[]}show(){this.open=!0}close(){this.open&&(this.open=!1)}select(t){this.close(),this.items[t]&&this.dispatchEvent(new CustomEvent("selected",{detail:{index:t}}))}handleKeydown(t){const{options:e}=this,i=e.indexOf(this.shadowRoot.activeElement),n=i=>{t.preventDefault();const n=e[(i+e.length)%e.length];n&&n.focus()};switch(t.key){case"ArrowDown":n(i+1);break;case"ArrowUp":n(i-1);break;case"Home":n(0);break;case"End":n(e.length-1);break;case"Tab":this.close()}}handleDocumentKeydown(t){"Escape"===t.key&&(t.stopPropagation(),this.close(),this.anchor&&this.anchor.focus&&this.anchor.focus())}handleDocumentPointerDown(t){const e=t.composedPath();e.includes(this)||this.anchor&&e.includes(this.anchor)||this.close()}startListening(){document.addEventListener("pointerdown",this.onDocumentPointerDown,!0),document.addEventListener("keydown",this.onDocumentKeydown,!0),window.addEventListener("scroll",this.onViewportChange,!0),window.addEventListener("resize",this.onViewportChange)}stopListening(){document.removeEventListener("pointerdown",this.onDocumentPointerDown,!0),document.removeEventListener("keydown",this.onDocumentKeydown,!0),window.removeEventListener("scroll",this.onViewportChange,!0),window.removeEventListener("resize",this.onViewportChange)}updated(t){if(!t.has("open"))return;if(!this.open)return void this.stopListening();const{surface:e}=this;if(!e)return;this.showAsPopover(e),this.position(),this.startListening();const i=this.options[this.selectedIndex]||this.options[0];i&&i.focus()}showAsPopover(t){if(t.showPopover)try{t.showPopover()}catch{t.removeAttribute("popover")}}position(){const{surface:t,anchor:e}=this;if(!t||!e)return;const i=e.getBoundingClientRect(),{width:n,height:s}=t.getBoundingClientRect(),o=window.innerWidth,a=window.innerHeight,r=Math.min(Math.max(8,i.right-n),Math.max(8,o-n-8)),c=i.top+s>a-8?Math.max(8,i.bottom-s):Math.max(8,i.top);t.style.left=`${r}px`,t.style.top=`${c}px`}render(){return this.open?F`
      <div
        id="surface"
        class="mc-menu"
        role="listbox"
        popover="manual"
        @keydown=${this.handleKeydown}
      >
        ${this.items.map((t,e)=>F`
            <button
              type="button"
              role="option"
              class="mc-menu__item"
              data-value=${t.id}
              aria-selected=${e===this.selectedIndex?"true":"false"}
              @click=${()=>this.select(e)}
            >
              <span class="mc-menu__item__label ellipsis">${t.name}</span>
            </button>
          `)}
      </div>
    `:F``}static get styles(){return o`
      /* The surface. The colours are Home Assistant's own menu colours, so
         this follows the theme the same way the menu it replaces did. */
      .mc-menu {
        position: fixed;
        inset: auto;
        z-index: 9;
        box-sizing: border-box;
        margin: 0;
        padding: 8px 0;
        border: none;
        border-radius: 4px;
        min-width: 112px;
        max-width: 280px;
        max-height: 60vh;
        overflow-y: auto;
        background: var(
          --mdc-theme-surface,
          var(--card-background-color, var(--ha-card-background, #fff))
        );
        color: var(--primary-text-color, #212121);
        box-shadow:
          0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14),
          0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }
      .mc-menu__item {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        min-height: 48px;
        margin: 0;
        padding: 0 16px;
        border: none;
        background: none;
        color: inherit;
        font-family: inherit;
        font-size: 16px;
        text-align: start;
        cursor: pointer;
        /* No 300ms wait for a second tap that is not coming. */
        touch-action: manipulation;
        -webkit-appearance: none;
        appearance: none;
      }
      .mc-menu__item:hover,
      .mc-menu__item:focus {
        outline: none;
        background: rgba(127, 127, 127, 0.12);
      }
      .mc-menu__item[aria-selected='true'] {
        color: var(--mc-active-color);
      }
      .mc-menu__item__label {
        pointer-events: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `}});ct("mc-dropdown-base",class extends at{static get properties(){return{items:{type:Array},label:{type:String},selected:{type:String},icon:{type:String},active:{type:Boolean},disabled:{type:Boolean},iconStyle:{type:Object}}}constructor(){super(),this.iconStyle={}}get selectedId(){return this.items.map(t=>t.id).indexOf(this.selected)}onChange(t){const{index:e}=t.detail;e!==this.selectedId&&this.items[e]&&this.dispatchEvent(new CustomEvent("change",{detail:this.items[e]}))}handleClick(){const t=this.shadowRoot.querySelector("#menu");t.anchor=this.shadowRoot.querySelector("#button"),t.show()}render(){return F`
      <div class='mc-dropdown'>
        <ha-icon-button class='mc-dropdown__button icon'
          style=${gt(this.iconStyle)}
          id=${"button"}
          @click=${this.handleClick}
          ?disabled=${this.disabled}
          ?color=${this.active}>
            <ha-icon .icon=${this.icon}></ha-icon>
        </ha-icon-button>
        <mc-menu
          id=${"menu"}
          .items=${this.items}
          .selected=${this.selected}
          @selected=${this.onChange}
        ></mc-menu>
      </div>
    `}static get styles(){return[_t,o`
        :host {
          position: relative;
          overflow: hidden;
        }
        .mc-dropdown
        :host([disabled]) {
          opacity: .25;
          pointer-events: none;
        }
        :host([faded]) {
          opacity: .75;
        }
        .mc-dropdown {
          padding: 0;
        }
        ha-icon-button[disabled] {
          opacity: .25;
          pointer-events: none;
        }
        .mc-dropdown__button.icon {
          margin: 0;
        }
        ha-icon-button {
          width: calc(var(--mc-dropdown-unit));
          height: calc(var(--mc-dropdown-unit));
          --mdc-icon-button-size: calc(var(--mc-dropdown-unit));
          --ha-icon-button-size: calc(var(--mc-dropdown-unit));
        }
        .mc-dropdown[focused] ha-icon-button {
          color: var(--mc-accent-color);
        }
        .mc-dropdown[focused] ha-icon-button[focused] {
          color: var(--mc-text-color);
          transform: rotate(0deg);
        }
      `]}});ct("mc-mode-menu",class extends at{constructor(){super(),this.mode={}}static get properties(){return{mode:{type:Object}}}get calcIcon(){if(this.selected){if(this.selected.icon)return this.selected.icon;if(void 0!==this.selected.id&&null!==this.selected.id){const t=this.selected.id.toString().toUpperCase();if(t in bt)return bt[t]}}return""}get selected(){return this.mode.source.find(t=>t.id===this.mode.state)||{}}get sources(){return this.mode.source.filter(t=>!t.hide).map(t=>({name:t.name,id:t.id,type:"source"}))}handleChange(t){t.stopPropagation();const e=t.detail.id;this.mode.handleChange(e)}render(){return F`
      <mc-dropdown-base
        @change=${this.handleChange}
        .items=${this.sources}
        .icon=${this.calcIcon}
        .iconStyle=${this.mode.style}
        .active=${this.mode.isActive(this.mode.state)}
        .selected=${this.selected.id}>
      </mc-dropdown-base>
    `}static get styles(){return o`
      :host {
        min-width: calc(var(--mc-unit) * .85);
        --mc-dropdown-unit: calc(var(--mc-unit) * .75);
        --paper-item-min-height: var(--mc-unit);
      }
    `}});ct("mc-indicators",class extends at{static get properties(){return{indicators:{type:Object}}}handlePopup(t,e){t.stopPropagation(),vt(this,e.hass,e.config.tap_action,e.entity.entity_id)}renderIcon(t){const{icon:e}=t;return e?F`<ha-icon style=${gt(t.iconStyle)} class='state__value_icon' .icon=${e}></ha-icon>`:""}renderUnit(t){return t.unit?F`<span class='state__uom' style=${gt(t.valueStyle)}>${t.unit}</span>`:""}renderIndicator(t){if(!t)return"";const e=t.config&&t.config.tap_action&&t.config.tap_action.action,i=e&&xt.includes(e)?"pointer":"";return F`
       <div class='state ${i}' @click=${e=>this.handlePopup(e,t)}>
         ${this.renderIcon(t)}
         <span class='state__value' style=${gt(t.valueStyle)}>${t.value}</span>
         ${this.renderUnit(t)}
       </div>
    `}render(){const t=Object.entries(this.indicators).map(t=>t[1]).filter(t=>!t.hide);return F`
     <div class='mc-indicators__container'>
       ${t.map(t=>this.renderIndicator(t))}
     </div>
    `}static get styles(){return o`
     :host {
        position: relative;
        box-sizing: border-box;
        font-size: calc(var(--mc-unit) * .35);
        line-height: calc(var(--mc-unit) * .35);
      }
     .mc-indicators__container {
       display: flex;
       flex-wrap: wrap;
       margin-right: calc(var(--mc-unit) * .075);
     }
     .state {
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        margin-right: calc(var(--mc-unit) * .1);
     }
     .pointer {
        cursor: pointer
     }
     .state__value_icon {
        height: calc(var(--mc-unit) * .475);
        width: calc(var(--mc-unit) * .5);
        color: var(--mc-icon-color);
        --mdc-icon-size: calc(var(--mc-unit) * 0.5);
     }
     .state__value {
        margin: 0 1px;
        font-weight: var(--mc-info-font-weight);
        line-height: calc(var(--mc-unit) * .475);
     }
     .state__uom {
        font-size: calc(var(--mc-unit) * .275);
        line-height: calc(var(--mc-unit) * .525);
        margin-left: 1px;
        height: calc(var(--mc-unit) * .475);
        opacity: 0.8;
     }
    `}});ct("mc-dropdown",class extends at{constructor(){super(),this.dropdown={},this.timer=void 0,this._state=void 0}static get properties(){return{dropdown:{type:Object}}}handleChange(t){t.stopPropagation();const e=t.detail.id,{entity:i}=this.dropdown;this._state=e,this.dropdown.handleChange(e),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(async()=>{this.dropdown.entity===i&&(this._state=void 0!==this.dropdown.state&&null!==this.dropdown.state?this.dropdown.state.toString():"",this.requestUpdate("_state"))},this.dropdown.actionTimeout),this.requestUpdate("_state")}render(){return F`
      <mc-dropdown-base
        .iconStyle=${this.dropdown.style}
        @change=${t=>this.handleChange(t)}
        .items=${this.dropdown.source}
        .icon=${this.dropdown.icon}
        .disabled="${this.dropdown.disabled}"
        .active=${this.dropdown.isActive(this._state)}
        .selected=${this._state}>
      </mc-dropdown-base>
    `}willUpdate(t){t.has("dropdown")&&(this._state=void 0!==this.dropdown.state&&null!==this.dropdown.state?this.dropdown.state.toString():"",this.timer&&clearTimeout(this.timer))}static get styles(){return[_t,o`
      :host {
        position: relative;
        box-sizing: border-box;
        margin: 0;
        overflow: hidden;
        transition: background .5s;
      }
      :host([color]) {
        background: var(--mc-active-color);
        transition: background .25s;
        opacity: 1;
      }
      :host([disabled]) {
        opacity: .25;
        pointer-events: none;
      }
    `]}});ct("mc-button",class extends at{constructor(){super(),this._isOn=!1,this.timer=void 0}static get properties(){return{button:{type:Object}}}handleToggle(t){t.stopPropagation();const{entity:e}=this.button;this._isOn=!this._isOn,this.button.handleToggle(),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(async()=>{this.button.entity===e&&(this._isOn=this.button.isOn,this.requestUpdate("_isOn"))},this.button.actionTimeout),this.requestUpdate("_isOn")}render(){return F`
       <ha-icon-button
         style=${gt(this.button.style)}
         .icon=${this.button.icon}
         @click=${t=>this.handleToggle(t)}
         ?disabled="${this.button.disabled||this.button.isUnavailable}"
         ?color=${this._isOn}>
           <ha-icon .icon=${this.button.icon}></ha-icon>
        </ha-icon-button>
    `}willUpdate(t){t.has("button")&&(this._isOn=this.button.isOn,this.timer&&clearTimeout(this.timer))}static get styles(){return[_t,o`
      :host {
        position: relative;
        box-sizing: border-box;
        margin: 0;
        overflow: hidden;
        transition: background .5s;
      }
      :host([color]) {
        background: var(--mc-active-color);
        transition: background .25s;
        opacity: 1;
      }
      :host([disabled]) {
        opacity: .25;
        pointer-events: none;
      }
    `]}});ct("mc-buttons",class extends at{static get properties(){return{buttons:{type:Object}}}renderButton(t){return t.isUnavailable?"":F`
       <mc-button
         class="custom-button"
         .button=${t}>
        </mc-button>
    `}renderDropdown(t){return F`
      <mc-dropdown
        .dropdown=${t}>
      </mc-dropdown>
    `}renderInternal(t){return"dropdown"===t.type?this.renderDropdown(t):this.renderButton(t)}render(){return F`${Object.entries(this.buttons).map(t=>t[1]).filter(t=>"main"!==t.location&&!t.hide).sort((t,e)=>t.order>e.order?1:e.order>t.order?-1:0).map(t=>this.renderInternal(t))}`}static get styles(){return[_t,o`
      :host {
        position: relative;
        box-sizing: border-box;
        margin: 0;
        overflow: hidden;
        transition: background .5s;
        --paper-item-min-height: var(--mc-unit);
        --mc-dropdown-unit: var(--mc-unit);
        --mdc-icon-button-size: calc(var(--mc-unit));
        --ha-icon-button-size: calc(var(--mc-unit));
      }
      :host([color]) {
        background: var(--mc-active-color);
        transition: background .25s;
        opacity: 1;
      }
      :host([disabled]) {
        opacity: .25;
        pointer-events: none;
      }
      mc-button {
        width: calc(var(--mc-unit));
        height: calc(var(--mc-unit));
      }
    `]}});ct("mc-fan-mode-secondary",class extends at{constructor(){super(),this.fanMode={},this.config={},this.timer=void 0,this._selected={}}static get properties(){return{fanMode:{type:Object},config:{type:Object}}}get items(){return this.fanMode.source.filter(t=>!t.hide)}get selectedIndex(){return this.items.map(t=>t.id).indexOf(this._selected?.id)}handleChange(t){const{index:e}=t.detail;if(e===this.selectedIndex||!this.items[e])return;clearTimeout(this.timer);const i=this.items[e],{entity:n}=this.fanMode,s=this._selected;this._selected=i,this.timer=setTimeout(async()=>{this.fanMode.entity===n&&(this._selected=s,this.requestUpdate("_selected"))},this.fanMode.actionTimeout),this.fanMode.handleChange(i.id),this.requestUpdate("_selected")}renderFanMode(t=0){const e=this._selected?this._selected.name:this.fanMode.state,i=this.config.secondary_info.icon?this.config.secondary_info.icon:this.fanMode.icon;return F`
       <ha-icon class='icon' .icon=${i}></ha-icon>
       <span class='name' style=${gt(t?{"padding-left":`${t}px`}:{})}>${e}</span>
    `}handleClick(){const t=this.shadowRoot.querySelector("#menu"),e=this.shadowRoot.querySelector("#button");t.anchor=e,t.show()}handleKeydown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.handleClick())}renderFanModeDropdown(){return F`
      <div class='mc-dropdown'>
        <!-- The whole drop (icon + label) is the button, not just the 20x20
             icon grid. Anchored and keyboard-focusable like one, so the menu
             opens wherever the reader presses, not only on the glyph. -->
        <button
          class='mc-dropdown__button'
          id=${"button"}
          @click=${this.handleClick}
          @keydown=${this.handleKeydown}
          ?disabled=${this.fanMode.disabled}
          role='button'
          tabindex='0'
        >
          ${this.renderFanMode(3)}
        </button>
        <mc-menu
          id=${"menu"}
          .items=${this.items}
          .selected=${this._selected?.id}
          @selected=${this.handleChange}
        ></mc-menu>
      </div>
    `}render(){const{type:t}=this.config.secondary_info;return"fan-mode-dropdown"===t||"hvac-mode-dropdown"===t?this.renderFanModeDropdown():this.renderFanMode()}willUpdate(t){t.has("fanMode")&&(clearTimeout(this.timer),this._selected=this.fanMode.selected)}static get styles(){return[_t,o`
      .mc-dropdown {
        padding: 0;
      }
      /* The whole drop is the click target - icon and label in one row - and
         the label is sized by the same unit as the secondary info line. The
         only shadow-owning element left is the menu, which renders in a top
         layer and does not interfere. */
      .mc-dropdown__button {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        color: inherit;
        font-family: inherit;
        cursor: pointer;
        text-align: start;
        -webkit-appearance: none;
        appearance: none;
      }
      .mc-dropdown__button[disabled] {
        opacity: .25;
        pointer-events: none;
      }
      .name {
        font-size: calc(var(--mc-unit) * .35);
        font-weight: var(--mc-info-font-weight);
        line-height: calc(var(--mc-unit) * .5);
        vertical-align: middle;
        display: inline-block;
      }
      .icon {
        color: var(--mc-icon-color);
        /* Square, and the same size as the button and the glyph inside it.
           The height was .475 against a width of .5 - 19px against 20px - so
           whatever the button did, it could not sit inside the host. */
        height: calc(var(--mc-unit) * .5);
        width: calc(var(--mc-unit) * .5);
        min-width: calc(var(--mc-unit) * .5);
        --mdc-icon-size: calc(var(--mc-unit) * 0.5);
        /* The button inside ha-icon-button is sized by these, not by the host:
           without them it keeps whatever it inherits - 30px against a 20px
           host on 2026.8.3 - and spills out of the secondary info line. Both
           spellings, like everywhere else in this card: --mdc-icon-button-size
           is the pre-2026 knob and --ha-icon-button-size the current one. */
        --mdc-icon-button-size: calc(var(--mc-unit) * .5);
        --ha-icon-button-size: calc(var(--mc-unit) * .5);
      }
    `]}});ct("mc-secondary-info",class extends at{constructor(){super(),this.fanMode={},this.hvacMode={},this.config={},this.climate={}}static get properties(){return{fanMode:{type:Object},config:{type:Object},hvacMode:{type:Object},climate:{type:Object}}}renderHvacAction(){const t=this.climate.hvacAction;if(!t)return"";const e=t.icon?t.icon:this.config.secondary_info.icon;return F`
        ${e?F`<ha-icon class='icon' .icon=${e}></ha-icon>`:""}
         <span class='name ${e?"":"gray"}'>${t.name}</span>
      `}renderHvacMode(){const{hvacMode:t}=this,e=t.selected||{},i=e.icon?e.icon:this.config.secondary_info.icon;return F`
        ${i?F`<ha-icon class='icon' .icon=${i}></ha-icon>`:""}
         <span class='name'>${e.name}</span>
      `}render(){const{type:t}=this.config.secondary_info;switch(t){case"hvac-mode":return this.renderHvacMode();case"hvac-mode-dropdown":return F`<mc-fan-mode-secondary .fanMode=${this.hvacMode} .config=${this.config}></mc-fan-mode-secondary>`;case"hvac-action":return this.renderHvacAction();case"last-changed":return F`<ha-relative-time .hass=${this.climate.hass} .datetime=${this.climate.lastChanged}></ha-relative-time>`;case"last-updated":return F`<ha-relative-time .hass=${this.climate.hass} .datetime=${this.climate.lastUpdated}></ha-relative-time>`;default:return F`<mc-fan-mode-secondary .fanMode=${this.fanMode} .config=${this.config}></mc-fan-mode-secondary>`}}static get styles(){return[_t,o`
      ha-relative-time, .gray {
        color: #727272;
      }
      .name {
        font-size: calc(var(--mc-unit) * .35);
        font-weight: var(--mc-info-font-weight);
        line-height: calc(var(--mc-unit) * .5);
        vertical-align: middle;
        display: inline-block;
      }
      .icon {
        color: var(--mc-icon-color);
        height: calc(var(--mc-unit) * .475);
        width: calc(var(--mc-unit) * .5);
        min-width: calc(var(--mc-unit) * .5);
        --mdc-icon-size: calc(var(--mc-unit) * 0.5);
      }
    `]}});const Nt=[{name:"entity",required:!0,selector:{entity:{domain:["climate","fan"]}}},{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"group",selector:{boolean:{}}},{name:"scale",selector:{number:{min:.5,max:3,step:.1,mode:"box"}}},{name:"swap_temperatures",selector:{boolean:{}}},{name:"hide_current_temperature",selector:{boolean:{}}}],Lt=[{value:"more-info",label:"More info (default)"},{value:"navigate",label:"Navigate"},{value:"call-service",label:"Call service"},{value:"url",label:"Open URL"},{value:"fire-dom-event",label:"Fire DOM event"},{value:"none",label:"None"}];const Rt=[{name:"hide",selector:{boolean:{}}},{name:"default",selector:{boolean:{}}},{name:"icon",selector:{icon:{}}}],Ft=[{name:"type",selector:{select:{options:[{value:"fan-mode",label:"Fan mode"},{value:"fan-mode-dropdown",label:"Fan mode (dropdown)"},{value:"hvac-mode",label:"HVAC mode"},{value:"hvac-mode-dropdown",label:"HVAC mode (dropdown)"},{value:"hvac-action",label:"HVAC action"},{value:"last-changed",label:"Last changed"},{value:"last-updated",label:"Last updated"}]}}},{name:"hide",selector:{boolean:{}}},{name:"icon",selector:{icon:{}}}],Bt=[{name:"unit",selector:{select:{options:["°C","°F"],custom_value:!0}}},{name:"round",selector:{number:{min:0,max:5,step:1,mode:"box"}}}],Vt=[{name:"unit",selector:{select:{options:["°C","°F"],custom_value:!0}}},{name:"min",selector:{number:{step:.5,mode:"box"}}},{name:"max",selector:{number:{step:.5,mode:"box"}}},{name:"step",selector:{number:{min:.1,max:5,step:.1,mode:"box"}}},{name:"icon_up",selector:{icon:{}}},{name:"icon_down",selector:{icon:{}}}],qt=[{name:"hide",selector:{boolean:{}}}],Wt=[{name:"icon",selector:{icon:{}}},{name:"hide",selector:{boolean:{}}},{name:"location",selector:{select:{options:[{value:"bottom",label:"Bottom panel"},{value:"main",label:"Main row"}]}}}],Kt={entity:"Entity",name:"Name (optional override)",icon:"Icon",group:"Group mode (remove card background)",scale:"UI scale",swap_temperatures:"Swap current and target temperature",hide_current_temperature:"Hide current temperature",action:"Action",navigation_path:"Navigation path",url:"URL",service:"Service / Action",service_data:"Service data",hide:"Hide",default:"Expanded by default",type:"Type",unit:"Unit",round:"Decimal places (round)",min:"Minimum temperature",max:"Maximum temperature",step:"Step",icon_up:"Up icon",icon_down:"Down icon",location:"Button location"},Gt=["entity","name","icon","group","scale","swap_temperatures","hide_current_temperature"];ct("mini-climate-editor",class extends at{constructor(){super(),this._basicSchema=Nt,this._computeLabel=t=>Kt[t.name]??t.name,this._basicChanged=t=>this._handleBasicChanged(t),this._tapActionChanged=t=>this._handleTapActionChanged(t),this._targetTempChanged=t=>this._handleTargetTempChanged(t),this._onSecondaryInfo=t=>this._onSub("secondary_info",t),this._onToggle=t=>this._onSub("toggle",t),this._onTemperature=t=>this._onSub("temperature",t),this._onHvacMode=t=>this._onSub("hvac_mode",t),this._onFanMode=t=>this._onSub("fan_mode",t)}static get properties(){return{hass:{type:Object},config:{type:Object}}}static get styles(){return o`
      :host {
        display: block;
      }
      ha-expansion-panel {
        display: block;
        margin-top: 4px;
        --expansion-panel-summary-padding: 0 16px;
        --expansion-panel-content-padding: 0 16px 8px;
      }
      ha-form {
        display: block;
      }
    `}setConfig(t){let e=t.secondary_info;"string"==typeof e&&(e={type:e}),"string"==typeof t.tap_action&&(t={...t,tap_action:{action:t.tap_action}}),this.config={...t,secondary_info:e??{}},this._basicSchema=this.config.icon&&"object"==typeof this.config.icon?Nt.filter(t=>"icon"!==t.name):Nt}_fire(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t}}))}_onSub(t,e){if(!this.config||!this.hass)return;const i=e.detail.value;this._fire({...this.config,[t]:{...this._subData(t),...i}})}_basicData(){const t={};for(let e=0;e<Gt.length;e+=1){const i=Gt[e];void 0!==this.config[i]&&("icon"===i&&"object"==typeof this.config[i]||(t[i]=this.config[i]))}return t}_tapActionData(){return{action:"more-info",...this.config.tap_action}}_targetTempData(){const t=this.config.target_temperature??{},e=t.icons??{},i={};return void 0!==t.unit&&(i.unit=t.unit),void 0!==t.min&&(i.min=t.min),void 0!==t.max&&(i.max=t.max),void 0!==t.step&&(i.step=t.step),void 0!==e.up&&(i.icon_up=e.up),void 0!==e.down&&(i.icon_down=e.down),i}_subData(t){return this.config[t]??{}}_handleBasicChanged(t){if(!this.config||!this.hass)return;const e=t.detail.value,i={...this.config};for(let t=0;t<Gt.length;t+=1){const n=Gt[t];"icon"===n&&"object"==typeof this.config.icon||(void 0!==e[n]&&""!==e[n]?i[n]=e[n]:delete i[n])}this._fire(i)}_handleTapActionChanged(t){if(!this.config||!this.hass)return;const e=t.detail.value,i=e.action??"more-info",n={action:i};"navigate"===i&&e.navigation_path?n.navigation_path=e.navigation_path:"url"===i&&e.url?n.url=e.url:"more-info"===i&&e.entity?n.entity=e.entity:"call-service"===i&&(e.service&&(n.service=e.service),e.service_data&&Object.keys(e.service_data).length>0&&(n.service_data=e.service_data)),this._fire({...this.config,tap_action:n})}_handleTargetTempChanged(t){if(!this.config||!this.hass)return;const e=t.detail.value,i=this.config.target_temperature??{},n={...i.icons};e.icon_up?n.up=e.icon_up:delete n.up,e.icon_down?n.down=e.icon_down:delete n.down;const s={...i};void 0!==e.unit?s.unit=e.unit:delete s.unit,void 0!==e.min?s.min=e.min:delete s.min,void 0!==e.max?s.max=e.max:delete s.max,void 0!==e.step?s.step=e.step:delete s.step,Object.keys(n).length>0?s.icons=n:delete s.icons,this._fire({...this.config,target_temperature:s})}_renderSection(t,e,i,n){return F`
      <ha-expansion-panel .header=${t} outlined>
        <ha-form
          .hass=${this.hass}
          .data=${i}
          .schema=${e}
          .computeLabel=${this._computeLabel}
          @value-changed=${n}
        ></ha-form>
      </ha-expansion-panel>
    `}render(){return this.hass&&this.config?F`
      <ha-form
        .hass=${this.hass}
        .data=${this._basicData()}
        .schema=${this._basicSchema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._basicChanged}
      ></ha-form>

      ${this._renderSection("Tap action",function(t){const e=[{name:"action",selector:{select:{options:Lt}}}];return"navigate"===t?e.push({name:"navigation_path",selector:{text:{}}}):"url"===t?e.push({name:"url",selector:{text:{}}}):"more-info"===t?e.push({name:"entity",selector:{entity:{}}}):"call-service"===t&&(e.push({name:"service",selector:{action:{}}}),e.push({name:"service_data",selector:{object:{}}})),e}(this._tapActionData().action),this._tapActionData(),this._tapActionChanged)}

      ${this._renderSection("Secondary info",Ft,this._subData("secondary_info"),this._onSecondaryInfo)}

      ${this._renderSection("Toggle panel button",Rt,this._subData("toggle"),this._onToggle)}

      ${this._renderSection("Temperature display",Bt,this._subData("temperature"),this._onTemperature)}

      ${this._renderSection("Target temperature",Vt,this._targetTempData(),this._targetTempChanged)}

      ${this._renderSection("HVAC mode",qt,this._subData("hvac_mode"),this._onHvacMode)}

      ${this._renderSection("Fan mode",Wt,this._subData("fan_mode"),this._onFanMode)}
    `:F``}});ct("mini-climate",class extends at{static getStubConfig(t,e,i){let n=e.find(t=>"climate"===t.split(".")[0]);return n||(n=i.find(t=>"climate"===t.split(".")[0])),{entity:n}}static getConfigElement(){return document.createElement("mini-climate-editor")}constructor(){super(),this.initial=!0,this.toggle=!1,this.temperature={},this.targetTemperature={},this.swapTemperatures=!1,this.buttons={},this.indicators={},this.hvacMode={},this.targetTemperatureChanging=!1,this.climate={},this.targetTemperatureValue=0,this.shouldHideIcon=()=>!1,this.iconTemplate=void 0,this.iconStyle=void 0}static get properties(){return{_hass:{type:Object},config:{type:Object},entity:{type:Object},climate:{type:Object},initial:{type:Boolean},toggle:{type:Boolean}}}static get styles(){return[_t,ft]}set hass(t){if(!t)return;const e=t.states[this.config.entity];this._hass=t;let i=!1;this.entity===e&&this.climate instanceof jt||(this.entity=e,this.climate=new jt(t,this.config,e),i=!0),this.updateIndicators(i),this.updateButtons(i),this.updateTemperature(i),this.updateTargetTemperature(i),this.updateHvacMode(i),this.climate.mode=this.hvacMode.selected}get hass(){return this._hass}get name(){return this.config.name||this.climate.name}updateIndicators(t){const e={};let i=!1;for(let t=0;t<this.config.indicators.length;t+=1){const n=this.config.indicators[t],{id:s}=n,o=n.source.entity||this.climate.id,a=this.hass.states[o];a&&(e[s]=new Dt(a,n,this.climate,this.hass)),a!==(this.indicators[s]&&this.indicators[s].entity)&&(i=!0)}(i||t)&&(this.indicators=e)}updateTemperature(t){if(this.targetTemperatureChanging)return;const e=this.config.temperature.source.entity||this.config.entity,i=this.hass.states[e],n=this.config.target_temperature.source&&this.config.target_temperature.source.entity||this.config.entity,s=this.hass.states[n],o=new Ot(i,s,this.config,this.climate);(this.temperature.rawValue!==o.rawValue||t)&&(this.temperature=o)}updateTargetTemperature(t){if(this.targetTemperatureChanging)return;const e=this.config.target_temperature.source&&this.config.target_temperature.source.entity||this.config.entity,i=this.hass.states[e];(this.targetTemperature.entity!==i||t)&&(this.targetTemperature=new Ut(i,this.config,this.hass),this.targetTemperatureValue=this.targetTemperature.value)}updateHvacMode(t){const e=this.config.hvac_mode,i=e.state&&e.state.entity||this.climate.id,n=this.hass.states[i];(n&&n!==(this.hvacMode&&this.hvacMode.entity)||t)&&(this.hvacMode=new It(n,e,this.climate))}updateButtons(t){const e={};let i=!1;for(let t=0;t<this.config.buttons.length;t+=1){const n=this.config.buttons[t],{id:s}=n,o=n.state&&n.state.entity||this.climate.id,a=this.hass.states[o];a&&(e[s]=new Pt(a,n,this.climate,this.hass)),a!==(this.buttons[s]&&this.buttons[s].entity)&&(i=!0)}(i||t)&&(this.buttons=e)}getButtonsConfig(t){const e=Object.entries(t.buttons||{}),i=[];for(let n=0;n<e.length;n+=1){const[s,o]=e[n],a=this.getButtonConfig(o,t);a.id=s,"order"in a||(a.order=n+1),i.push(a)}return i}getButtonConfig(t,e){const i={icon:"mdi:radiobox-marked",type:"button",toggle_action:void 0,...t};i.functions={};const n={...t};return n.call_service=(t,e,i)=>this.hass.callService(t,e,i),n.entity_config=e,n.toggle_state=Ct,i.disabled&&(i.functions.disabled=Mt(i.disabled,n)),i.state&&i.state.mapper&&(i.functions.state={mapper:Mt(i.state.mapper,n)}),i.active&&(i.functions.active=Mt(i.active,n)),i.source&&i.source.__filter&&(i.functions.source={filter:Mt(i.source.__filter,n)}),i.toggle_action&&(i.functions.toggle_action=Mt(i.toggle_action,n)),i.change_action&&(i.functions.change_action=Mt(i.change_action,n)),i.style&&(i.functions.style=Mt(i.style,n)),"object"==typeof i.icon&&(i.functions.icon={},i.icon.template&&(i.functions.icon.template=Mt(i.icon.template,n)),i.icon.style&&(i.functions.icon.style=Mt(i.icon.style,n))),i.hide&&("boolean"==typeof i.hide?i.functions.hide=()=>!0:i.functions.hide=Mt(i.hide,n)),i}getFanModeConfig(t){let e={id:"fan_mode",icon:"mdi:fan",type:"dropdown",order:0,state:{attribute:"fan_mode"},change_action:(t,e,i)=>{const n={fan_mode:t,entity_id:i.entity_id};return this.call_service("climate","set_fan_mode",n)},...t.fan_mode||{}};e=this.getButtonConfig(e,t);const{functions:i}=e;return i.active||(i.active=()=>this.climate.isOn),e}getIndicatorConfig(t,e,i){const n={id:t,source:{enitity:void 0,attribute:void 0,mapper:void 0},icon:"",...e};n.tap_action=kt(e.tap_action),n.functions=n.functions||{};const s={...e};return s.entity_config=i,s.toggle_state=Ct,n.source.mapper&&(n.functions.mapper=Mt(n.source.mapper,s)),"object"==typeof n.icon&&(n.functions.icon={},n.icon.template&&(n.functions.icon.template=Mt(n.icon.template,s)),n.icon.style&&(n.functions.icon.style=Mt(n.icon.style,s))),"object"==typeof n.value&&(n.functions.value={},n.value.style&&(n.functions.value.style=Mt(n.value.style,s))),"object"==typeof n.unit&&(n.functions.unit={},n.unit.template&&(n.functions.unit.template=Mt(n.unit.template,s))),n.hide&&("boolean"==typeof n.hide?n.functions.hide=()=>!0:n.functions.hide=Mt(n.hide,s)),n}getSecondaryInfoConfig(t){const e={...t};e.functions=e.functions||{};const i={...t};return e.hide&&("boolean"==typeof e.hide?e.functions.hide=()=>!0:e.functions.hide=Mt(e.hide,i)),e}getToggleConfig(t){const e={...t};e.functions=e.functions||{};const i={...t};return e.hide&&("boolean"==typeof e.hide?e.functions.hide=()=>!0:e.functions.hide=Mt(e.hide,i)),e}getIndicatorsConfig(t){return Object.entries(t.indicators||{}).map(e=>this.getIndicatorConfig(e[0],e[1]||{},t))}getTargetTemperatureConfig(t){const e={source:{entity:void 0,attribute:"temperature"},...t.target_temperature||{}};e.icons={up:bt.UP,down:bt.DOWN,...e.icons||{}},e.tap_action=kt(e.tap_action),e.functions={};const i={...t.target_temperature||{}};return i.call_service=(t,e,i)=>this.hass.callService(t,e,i),i.entity_config=t,i.toggle_state=Ct,e.change_action&&(e.functions.change_action=Mt(e.change_action,i)),e}getHvacModeConfig(t){let e={type:"dropdown",change_action:(t,e)=>{const i={hvac_mode:t,entity_id:e.entity_id};return this.call_service("climate","set_hvac_mode",i)},...t.hvac_mode||{}};e=this.getButtonConfig(e,this.config);const{functions:i}=e;return i.active||(i.active=()=>this.climate.isOn),e}setConfig(t){const e=["climate","fan"];if(!t.entity||!1===e.includes(t.entity.split(".")[0]))throw new Error(`Specify an entity from within domains: [${e.join(", ")}].`);this.config={tap_action:{action:"more-info",navigation_path:"",url:"",entity:"",service:"",service_data:{}},...t},"string"==typeof t.tap_action&&(this.config.tap_action={action:t.tap_action});const i=t.hide_icon;if(this.shouldHideIcon="string"==typeof i?Mt(i,this.config):()=>!0===i,this.iconTemplate=void 0,this.iconStyle=void 0,t.icon&&"object"==typeof t.icon){const e={...t.icon,entity_config:t};t.icon.template&&(this.iconTemplate=Mt(t.icon.template,e)),t.icon.style&&(this.iconStyle=Mt(t.icon.style,e))}this.config.indicators=this.getIndicatorsConfig(t),this.config.buttons=this.getButtonsConfig(t),this.fanModeConfig=this.getFanModeConfig(t),this.config.buttons.push(this.fanModeConfig),this.config.target_temperature=this.getTargetTemperatureConfig(t),this.config.temperature={round:1,source:{entity:void 0,attribute:"current_temperature"},...t.temperature||{},tap_action:kt((t.temperature||{}).tap_action)},this.config.hvac_mode=this.getHvacModeConfig(this.config),this.config.toggle=this.getToggleConfig({icon:bt.TOGGLE,hide:!1,default:!1,...t.toggle||{}}),"string"==typeof t.secondary_info?this.config.secondary_info={type:t.secondary_info}:this.config.secondary_info={type:"fan_mode",...t.secondary_info||{}},this.config.secondary_info=this.getSecondaryInfoConfig(this.config.secondary_info),this.toggle=this.config.toggle.default,this.swapTemperatures=!!this.config.swap_temperatures}renderCtlWrap(){if(this.climate.isUnavailable)return F`
        <span class="label ellipsis">        
          ${yt(this.hass,["state.default.unavailable"],"Unavailable")}
        </span>
      `;const t=Object.entries(this.buttons).map(t=>t[1]).filter(t=>"main"===t.location&&!t.hide).sort((t,e)=>t.order>e.order?1:e.order>t.order?-1:0);return F`
        ${t.map(t=>"dropdown"===t.type?F`<mc-dropdown .dropdown=${t}></mc-dropdown>`:F`<mc-button .button=${t}></mc-button>`)}
        ${this.hvacMode.hide?"":F`<mc-mode-menu .mode=${this.hvacMode}></mc-mode-menu>`}
        <mc-temperature
          .temperature=${this.temperature}
          .target=${this.targetTemperatureValue}
          .changing=${this.targetTemperatureChanging}
          .swapTemperatures=${this.swapTemperatures}>
        </mc-temperature>
    `}renderEntityControls(){return this.climate.isUnavailable?"":F`
        <div class="entity__controls">
          <mc-target-temperature
            .targetTemperature=${this.targetTemperature}
            @changing="${t=>this.handleChangingTargetTemperature(t)}">
          </mc-target-temperature>
        </div>
    `}render(){const t=!this.secondaryInfoIsDropdown();return F`
      <ha-card
        class=${this.computeClasses()}
        style=${gt(this.computeStyles())}>
        <div class='mc__bg'></div>
        <div class='mc-climate'>
          <div class='mc-climate__core flex'>
            ${this.renderIcon()}
            <div class='entity__info'>
              <div class="wrap">
                <div class="entity__info__name_wrap" @click=${e=>this.handlePopup(e,t)}>
                  ${this.renderEntityName()}
                </div>
                <div class="ctl-wrap ellipsis">
                  ${this.renderCtlWrap()}
                </div>
              </div>
              ${this.renderBottomPanel()}
            </div>
            ${this.renderEntityControls()}
          </div>
          ${this.renderTogglePanel()}
        </div>
      </ha-card>
    `}handleChangingTargetTemperature(t){this.targetTemperatureValue=this.targetTemperature.value,this.targetTemperatureChanging=t.detail.changing,this.requestUpdate("targetTemperatureChanging")}handlePopup(t,e){e&&(t.stopPropagation(),vt(this,this.hass,this.config.tap_action,this.climate.id))}handleToggle(t){t.stopPropagation(),this.toggle=!this.toggle}toggleButtonCls(){return this.toggle?"open":""}renderIcon(){if(this.shouldHideIcon(this.climate.entity,this.climate.mode))return F``;const t=this.climate.isActive&&!this.iconStyle;return F`
      <div class='entity__icon' ?color=${t} style=${gt(this.computeIconStyle())}>
        <ha-icon .icon=${this.computeIcon()} ></ha-icon>
      </div>`}renderTogglePanel(){return this.toggle?F`
        <div class="mc-toggle_content">
          <mc-buttons
            .buttons=${this.buttons}>
          </mc-buttons>
        </div>
    `:""}renderBottomPanel(){return this.climate.isUnavailable?"":F`
        <div class='bottom flex'>
          <mc-indicators
            .indicators=${this.indicators}>
          </mc-indicators>
          ${this.renderToggleButton()}
        </div>
    `}renderToggleButton(){return 0===Object.entries(this.buttons).map(t=>t[1]).filter(t=>!t.hide&&"main"!==t.location).length||this.config.toggle.functions.hide&&this.config.toggle.functions.hide(this.climate.entity,this.climate.mode)?F``:F`
        <ha-icon-button class='toggle-button ${this.toggleButtonCls()}'
          .icon=${this.config.toggle.icon}
          @click=${t=>this.handleToggle(t)}>
            <ha-icon .icon=${this.config.toggle.icon}></ha-icon>
        </ha-icon-button>
    `}renderEntityName(){return F`
      <div class='entity__info__name' @click=${t=>this.handlePopup(t,!0)}>
        ${this.name}
      </div>
     ${this.renderSecondaryInfo()}
    `}secondaryInfoHidden(){return!!this.climate.isUnavailable||Boolean(this.config.secondary_info.functions.hide&&this.config.secondary_info.functions.hide(this.climate.entity,this.climate.mode))}secondaryInfoIsDropdown(){const t=this.config.secondary_info.type;return"fan-mode-dropdown"===t||"hvac-mode-dropdown"===t}renderSecondaryInfo(){return this.secondaryInfoHidden()?F``:F`
      <div class='entity__secondary_info ellipsis'>
        <mc-secondary-info
          .climate=${this.climate}
          .config=${this.config}
          .hvacMode=${this.hvacMode}
          .fanMode=${this.buttons.fan_mode}>
        </mc-secondary-info>
      </div>`}computeIcon(){if(this.iconTemplate){const t=this.iconTemplate(this.climate.entity,this.climate.mode);if(t)return t}return"string"==typeof this.config.icon&&this.config.icon?this.config.icon:this.climate.icon||bt.DEFAULT}computeIconStyle(){return this.iconStyle&&this.iconStyle(this.climate.entity,this.climate.mode)||{}}computeClasses({config:t}=this){return ut({"--initial":this.initial,"--group":t.group,"--more-info":"none"!==t.tap_action.action,"--inactive":!this.climate.isActive,"--unavailable":this.climate.isUnavailable,"--no-secondary-info":this.secondaryInfoHidden()})}computeStyles(){const{scale:t}=this.config;return t?{"--mc-unit":40*t+"px"}:{}}initDefaultFanModeSource(){const t=this.fanModeConfig,e=Object.entries(t.source||{}).filter(t=>"__filter"!==t[0]),{entity:i}=this.climate;i&&0===e.length&&i.attributes&&i.attributes.fan_modes&&(t.source={...this.climate.defaultFanModes,...t.source||{}})}initDefaultHvacModeSource(){const t=this.config.hvac_mode,e=Object.entries(t.source||{}).filter(t=>"__filter"!==t[0]),{entity:i}=this.climate;i&&0===e.length&&(t.source={...this.climate.defaultHvacModes,...t.source||{}})}firstUpdated(t){super.firstUpdated(t),t.has("climate")&&(this.initDefaultFanModeSource(),this.initDefaultHvacModeSource(),this.requestUpdate("climate")),t.has("targetTemperature")&&(this.targetTemperatureValue=this.targetTemperature.value,this.requestUpdate("targetTemperatureValue"))}}),window.customCards=window.customCards||[],window.customCards.push({type:"mini-climate",name:"Mini Climate",preview:!0,description:"A custom climate card",documentationURL:"https://github.com/artem-sedykh/mini-climate-card",configurable:!0})});

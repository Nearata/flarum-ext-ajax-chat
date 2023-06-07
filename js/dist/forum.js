/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,n)=>{var r=n(288).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,a=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),s=new O(r||[]);return i(a,"_invoke",{value:A(t,n,s)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var m={};function p(){}function v(){}function g(){}var y={};h(y,c,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(S([])));b&&b!==n&&a.call(b,c)&&(y=b);var w=g.prototype=p.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,s,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function A(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return{value:void 0,done:!0}}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=E(i,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=g,i(w,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:v,configurable:!0}),v.displayName=h(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,h(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},j(_.prototype),h(_.prototype,u,(function(){return this})),e.AsyncIterator=_,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new _(d(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(w),h(w,l,"Generator"),h(w,c,(function(){return this})),h(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,n)=>{var r=n(648)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";function t(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function s(e){t(i,o,a,s,c,"next",e)}function c(e){t(i,o,a,s,c,"throw",e)}s(void 0)}))}}n.r(r),n.d(r,{extend:()=>rt});var o=n(357),a=n.n(o);function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}const c=flarum.core.compat["common/Component"];var u=n.n(c);const l=flarum.core.compat["common/components/Button"];var h=n.n(l);const d=flarum.core.compat["common/components/Tooltip"];var f=n.n(d);const p=flarum.core.compat["common/utils/Stream"];var v=n.n(p);const g=flarum.core.compat["forum/app"];var y=n.n(g),x=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state=void 0,e.content=void 0,e.loading=void 0,e}s(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=e.attrs.state,this.content=v()(""),this.loading=!1},n.view=function(t){return m("div",{class:"ChatComposer"},m("form",null,m("input",{class:"FormControl",type:"text",name:"content",bidi:this.content,placeholder:y().translator.trans("nearata-ajax-chat.forum.chat.composer.placeholder_label"),disabled:this.loading}),m(f(),{text:y().translator.trans("nearata-ajax-chat.forum.chat.composer.submit_button_tooltip")},m(h(),{class:"Button Button--icon",icon:"fas fa-paper-plane",onclick:this.onClick.bind(this),type:"submit",loading:this.loading}))))},n.onClick=function(t){var e=this;t.preventDefault(),this.loading=!0,y().store.createRecord("ajaxChat").save({content:this.content()}).then((function(){e.content(""),e.state.refresh()})).catch((function(t){return console.error(t)})).finally((function(){e.loading=!1,m.redraw()}))},e}(u());const b=flarum.core.compat["common/utils/humanTime"];var w=n.n(b),j=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).message=void 0,e}return s(e,t),e.prototype.view=function(t){var e=t.attrs.message,n=y().translator.trans("nearata-ajax-chat.forum.chat.message.edited_tooltip",{user:e.editedUser(),ago:w()(e.editedAt())});return m(f(),{text:n},m("div",{class:"editedAt"},y().translator.trans("nearata-ajax-chat.forum.chat.message.edited_text")))},e}(u());const _=flarum.core.compat["common/components/Link"];var A=n.n(_);const E=flarum.core.compat["common/helpers/avatar"];var L=n.n(E);const C=flarum.core.compat["common/helpers/humanTime"];var O=n.n(C);const S=flarum.core.compat["common/helpers/userOnline"];var k=n.n(S);const F=flarum.core.compat["common/helpers/username"];var P=n.n(F);const N=flarum.core.compat["common/utils/ItemList"];var T=n.n(N);const B=flarum.core.compat["common/utils/extractText"];var D=n.n(B),M=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).message=void 0,e.state=void 0,e.content=void 0,e.editing=void 0,e.loading=void 0,e}s(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.message=e.attrs.message,this.state=e.attrs.state,this.content=v()(this.message.content()),this.editing=!1,this.loading=!1},n.view=function(t){var e=this.message.user();return m("div",{class:"ChatMessage"},m("div",{class:"avatar"},L()(e)),m("div",{class:"body"},m("header",{class:"header"},e.lastSeenAt()&&e.isOnline()&&m("div",{class:"online"},k()(e)),m(A(),{href:y().route.user(e)},P()(this.message.user())),m("div",{class:"createdAt"},O()(this.message.createdAt())),this.message.editedAt()&&m(j,{message:this.message})),m("main",{class:"main"},m("div",{class:"content"},this.editing?m("input",{class:"FormControl",type:"text",name:"content",bidi:this.content,disabled:this.loading}):this.message.content())),m("footer",{class:"footer"},this.controls().toArray())))},n.controls=function(){var t=this,e=new(T());return this.message.canEdit()&&!this.editing&&e.add("edit",m(h(),{className:"Button Button--link",onclick:function(){return t.editing=!0}},y().translator.trans("nearata-ajax-chat.forum.chat.message.actions.edit_label"))),this.message.canDelete()&&!this.editing&&e.add("delete",m(h(),{className:"Button Button--link",onclick:this.onDelete.bind(this),loading:this.loading,disabled:this.loading},y().translator.trans("nearata-ajax-chat.forum.chat.message.actions.delete_label"))),this.editing&&e.add("saveEdit",m(h(),{className:"Button Button--link",onclick:this.onSaveEdit.bind(this),loading:this.loading,disabled:this.loading},y().translator.trans("nearata-ajax-chat.forum.chat.message.actions.edit_save_label"))),this.editing&&e.add("cancelEdit",m(h(),{className:"Button Button--link",onclick:this.onCancelEdit.bind(this)},y().translator.trans("nearata-ajax-chat.forum.chat.message.actions.edit_cancel_label"))),e},n.onSaveEdit=function(t){var e=this;if(this.loading=!0,this.content()===this.message.content())return this.editing=!1,void(this.loading=!1);this.message.save({content:this.content()}).then((function(){return e.state.refresh(!1)})).catch((function(t){return console.error(t)})).finally((function(){e.editing=!1,e.loading=!1,m.redraw()}))},n.onCancelEdit=function(t){this.editing=!1,this.content(this.message.content())},n.onDelete=function(t){var e=this,n=D()(y().translator.trans("nearata-ajax-chat.forum.chat.message.actions.delete_confirm_text"));confirm(n)&&(this.loading=!0,this.message.delete().then((function(){return e.state.refresh(!1)})).finally((function(){e.loading=!1,m.redraw()})))},e}(u());const G=flarum.core.compat["common/components/Placeholder"];var I=n.n(G),R=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state=void 0,e}s(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=e.attrs.state},n.onupdate=function(e){var n,r,o;t.prototype.onupdate.call(this,e),null!=(n=y().session.user)&&null!=(r=n.preferences())&&r.nearataAjaxChatAutoFocus&&this.state.needsFocus&&(this.state.needsFocus=!1,null==(o=this.element.lastElementChild)||o.scrollIntoView({behavior:"smooth",block:"nearest"}))},n.view=function(t){var e=this;return m("div",{class:"ChatList"},!this.state.data.length&&m(I(),{text:y().translator.trans("nearata-ajax-chat.forum.chat.list.placeholder_label")}),this.state.data.map((function(t){return m(M,{key:t.id(),message:t,state:e.state})})))},e}(u());const V=flarum.core.compat["common/components/Switch"];var U=n.n(V),Y=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).loading=void 0,e.autoFocus=void 0,e}s(e,t);var n=e.prototype;return n.oninit=function(e){var n;t.prototype.oninit.call(this,e),this.loading=!1,this.autoFocus=v()((null==(n=y().session.user.preferences())?void 0:n.nearataAjaxChatAutoFocus)||!1)},n.view=function(t){return m("div",{class:"ChatOptions"},this.items().toArray())},n.items=function(){var t=new(T());return t.add("autoFocus",m(U(),{onchange:this.onChangeAutoFocus.bind(this),state:this.autoFocus(),loading:this.loading,disabled:this.loading},y().translator.trans("nearata-ajax-chat.forum.chat.options.auto_focus"))),t},n.onChangeAutoFocus=function(t){var e=this;this.loading=!0,y().session.user.savePreferences({nearataAjaxChatAutoFocus:t}).then((function(){return e.autoFocus(t)})).catch((function(t){return console.error(t)})).finally((function(){e.loading=!1,m.redraw()}))},e}(u());const z=flarum.core.compat["common/components/LoadingIndicator"];var q=n.n(z),H=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state=void 0,e}s(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=e.attrs.state},n.view=function(t){return m("div",{class:"NearataAjaxChat container"},m("div",{class:"Chat"},m("header",{class:"header"},m("div",{class:"label"},y().translator.trans("nearata-ajax-chat.forum.chat.label")),this.state.loading&&m(q(),null)),m("main",{class:"main"},m(R,{state:this.state})),m("footer",{class:"footer"},y().session.user.attribute("nearata-ajax-chat.canCreate")&&m(x,{state:this.state}),m(Y,null))))},e}(u()),J=function(){function t(){this.loading=void 0,this.data=void 0,this.needsFocus=void 0,this.loading=!1,this.data=[],this.needsFocus=!1}var n=t.prototype;return n.load=function(){var t=e(a().mark((function t(e){var n,r,o,i=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&(e=0),null!=(n=y().session.user)&&n.attribute("nearata-ajax-chat.canView")){t.next=3;break}return t.abrupt("return");case 3:return this.loading=!0,m.redraw(),r={page:{offset:e}},o=this.data,t.next=9,y().store.find("ajaxChat",r).then((function(t){i.data=[].concat(t),i.data.sort((function(t,e){return t.createdAt()-e.createdAt()})),i.data.length>o.length&&(i.needsFocus=!0)})).catch((function(t){return console.error(t)})).finally((function(){i.loading=!1,m.redraw()}));case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),n.refresh=function(t){void 0===t&&(t=!0),this.data=y().store.all("ajaxChat"),this.needsFocus=t,m.redraw()},t}();const K=flarum.core.compat["common/extend"],Q=flarum.core.compat["forum/ForumApplication"];var W=n.n(Q);const X=flarum.core.compat["forum/components/IndexPage"];var Z=n.n(X);const $=flarum.core.compat["common/Model"];var tt=n.n($),et=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).content=tt().attribute("content"),e.createdAt=tt().attribute("createdAt",tt().transformDate),e.updatedAt=tt().attribute("updatedAt",tt().transformDate),e.editedAt=tt().attribute("editedAt",tt().transformDate),e.canEdit=tt().attribute("canEdit"),e.canDelete=tt().attribute("canDelete"),e}s(e,t);var n=e.prototype;return n.user=function(){return tt().hasOne("user").call(this)},n.editedUser=function(){return tt().hasOne("editedUser").call(this)},e}(tt());const nt=flarum.core.compat["common/extenders"],rt=[(new(n.n(nt)().Store)).add("ajaxChat",et)];y().initializers.add("nearata-ajax-chat",(function(){(0,K.extend)(W().prototype,"mount",(function(){var t;null!=(t=y().session.user)&&t.attribute("nearata-ajax-chat.canView")&&(y().nearataAjaxChatState=new J,y().nearataAjaxChatState.load(),setInterval(e(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(y().current.get("stream")){t.next=3;break}return t.next=3,y().nearataAjaxChatState.load();case 3:case"end":return t.stop()}}),t)}))),1e4))})),(0,K.override)(Z().prototype,"hero",(function(t){var e;return null!=(e=y().session.user)&&e.attribute("nearata-ajax-chat.canView")?[t(),m(H,{state:y().nearataAjaxChatState})]:t()}))}))})(),module.exports=r})();
//# sourceMappingURL=forum.js.map
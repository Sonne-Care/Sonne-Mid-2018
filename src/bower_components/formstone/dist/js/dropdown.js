/*! formstone v1.4.2 [dropdown.js] 2017-12-06 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./scrollbar","./touch"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function l(t){for(var l="",i=0,s=t.$allOptions.length;i<s;i++){var o=t.$allOptions.eq(i),a=[];if("OPTGROUP"===o[0].tagName)a.push(g.group),o.prop("disabled")&&a.push(g.disabled),l+='<span class="'+a.join(" ")+'">'+o.attr("label")+"</span>";else{var d=o.val(),n=o.data("label"),r=t.links?"a":'button type="button"';o.attr("value")||o.attr("value",d),a.push(g.item),o.hasClass(g.item_placeholder)&&(a.push(g.item_placeholder),r="span"),o.prop("selected")&&a.push(g.item_selected),o.prop("disabled")&&a.push(g.item_disabled),l+="<"+r+' class="'+a.join(" ")+'"',t.links?"span"===r?l+=' aria-hidden="true"':(l+=' href="'+d+'"',t.external&&(l+=' target="_blank"')):l+=' data-value="'+d+'"',l+=' role="option"',o.prop("selected")&&(l+=' "aria-selected"="true"'),l+=">",l+=n||I.decodeEntities(h(o.text(),t.trim)),l+="</"+r+">",0}}t.$items=t.$wrapper.html(e.parseHTML(l)).find(w.item)}function i(e){I.killEvent(e);var t=e.data;t.disabled||t.useNative||(t.closed?o(t):a(t)),s(t)}function s(t){e(w.base).not(t.$dropdown).trigger(C.close,[t])}function o(e){if(e.closed){var t=_.height(),l=e.$wrapper.outerHeight(!0);e.$dropdown[0].getBoundingClientRect().bottom+l>t-e.bottomEdge&&e.$dropdown.addClass(g.bottom),y.on(C.click+e.dotGuid,":not("+w.options+")",e,d),e.$dropdown.trigger(C.focusIn),e.$dropdown.addClass(g.open),b(e),e.closed=!1}}function a(e){e&&!e.closed&&(y.off(C.click+e.dotGuid),e.$dropdown.removeClass([g.open,g.bottom].join(" ")),e.closed=!0)}function d(t){I.killEvent(t);var l=t.data;l&&0===e(t.currentTarget).parents(w.base).length&&(a(l),l.$dropdown.trigger(C.focusOut))}function n(e){var t=e.data;t&&(a(t),t.$dropdown.trigger(C.focusOut))}function r(t){var l=e(this),i=t.data;if(I.killEvent(t),!i.disabled){var s=i.$items.index(l);i.focusIndex=s,i.$wrapper.is(":visible")&&(m(s,i,t.shiftKey,t.metaKey||t.ctrlKey),$(i)),i.multiple||a(i),i.$dropdown.trigger(C.focus)}}function p(t,l){e(this);var i=t.data;if(!l&&!i.multiple){var s=i.$options.index(i.$options.filter(":selected"));i.focusIndex=s,m(s,i),$(i,!0)}}function c(t){I.killEvent(t);e(t.currentTarget);var l=t.data;l.disabled||l.multiple||l.focused||(s(l),l.focused=!0,l.focusIndex=l.index,l.input="",l.$dropdown.addClass(g.focus).on(C.keyDown+l.dotGuid,l,f))}function u(t){I.killEvent(t);e(t.currentTarget);var l=t.data;l.focused&&l.closed&&(l.focused=!1,l.$dropdown.removeClass(g.focus).off(C.keyDown+l.dotGuid),l.multiple||(a(l),l.index!==l.focusIndex&&($(l),l.focusIndex=l.index)))}function f(l){var i=l.data;if(i.keyTimer=I.startTimer(i.keyTimer,1e3,function(){i.input=""}),13===l.keyCode)i.closed||(a(i),m(i.index,i)),$(i);else if(!(9===l.keyCode||l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)){I.killEvent(l);var s=i.$items.length-1,o=i.index<0?0:i.index;if(e.inArray(l.keyCode,t.isFirefox?[38,40,37,39]:[38,40])>-1)(o+=38===l.keyCode||t.isFirefox&&37===l.keyCode?-1:1)<0&&(o=0),o>s&&(o=s);else{var d,n=String.fromCharCode(l.keyCode).toUpperCase();for(i.input+=n,d=i.index+1;d<=s;d++)if(i.$options.eq(d).text().substr(0,i.input.length).toUpperCase()===i.input){o=d;break}if(o<0||o===i.index)for(d=0;d<=s;d++)if(i.$options.eq(d).text().substr(0,i.input.length).toUpperCase()===i.input){o=d;break}}o>=0&&(m(o,i),b(i))}}function m(e,t,l,i){var s=t.$items.eq(e),o=t.$options.eq(e),a=s.hasClass(g.item_selected);if(!s.hasClass(g.item_disabled))if(t.multiple)if(t.useNative)a?(o.prop("selected",null).attr("aria-selected",null),s.removeClass(g.item_selected)):(o.prop("selected",!0).attr("aria-selected",!0),s.addClass(g.item_selected));else if(l&&!1!==t.lastIndex){var d=t.lastIndex>e?e:t.lastIndex,n=(t.lastIndex>e?t.lastIndex:e)+1;t.$options.prop("selected",null).attr("aria-selected",null),t.$items.filter(w.item_selected).removeClass(g.item_selected),t.$options.slice(d,n).not("[disabled]").prop("selected",!0),t.$items.slice(d,n).not(w.item_disabled).addClass(g.item_selected)}else i?(a?(o.prop("selected",null).attr("aria-selected",null),s.removeClass(g.item_selected)):(o.prop("selected",!0).attr("aria-selected",!0),s.addClass(g.item_selected)),t.lastIndex=e):(t.$options.prop("selected",null).attr("aria-selected",null),t.$items.filter(w.item_selected).removeClass(g.item_selected),o.prop("selected",!0).attr("aria-selected",!0),s.addClass(g.item_selected),t.lastIndex=e);else if(e>-1&&e<t.$items.length){if(e!==t.index){var r=o.data("label")||s.html();t.$selected.html(r).removeClass(w.item_placeholder),t.$items.filter(w.item_selected).removeClass(g.item_selected),t.$el[0].selectedIndex=e,s.addClass(g.item_selected),t.index=e}}else""!==t.label&&t.$selected.html(t.label)}function b(t){var l=t.$items.eq(t.index),i=t.index>=0&&!l.hasClass(g.item_placeholder)?l.position():{left:0,top:0},s=(t.$wrapper.outerHeight()-l.outerHeight())/2;void 0!==e.fn.fsScrollbar?t.$wrapper.fsScrollbar("resize").fsScrollbar("scroll",t.$wrapper.find(".fs-scrollbar-content").scrollTop()+i.top):t.$wrapper.scrollTop(t.$wrapper.scrollTop()+i.top-s)}function $(e,t){e.links?v(e):t||e.$el.trigger(C.raw.change,[!0])}function v(e){var t=e.$el.val();e.external?k.open(t):k.location.href=t}function h(e,t){return 0===t?e:e.length>t?e.substring(0,t)+"...":e}var x=t.Plugin("dropdown",{widget:!0,defaults:{bottomEdge:0,cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,native:!1,theme:"fs-light",trim:0},methods:{_construct:function(s){s.multiple=this.prop("multiple"),s.disabled=this.prop("disabled")||this.is("[readonly]"),s.lastIndex=!1,s.native=s.mobile||s.native,s.useNative=s.native||t.isMobile,s.multiple?s.links=!1:s.external&&(s.links=!0);var o=this.find("[selected]").not(":disabled"),a=this.find(":selected").not(":disabled"),d=a.text(),f=this.find("option").index(a);s.multiple||""===s.label||o.length?s.label="":(a=this.prepend('<option value="" class="'+g.item_placeholder+'" selected>'+s.label+"</option>"),d=s.label,f=0);var b=this.find("option, optgroup"),$=b.filter("option"),v=e('[for="'+this.attr("id")+'"]');s.tabIndex=this[0].tabIndex,this[0].tabIndex=-1,v.length&&(v[0].tabIndex=-1);var x=[g.base,s.theme,s.customClass];s.useNative?x.push(g.native):s.cover&&x.push(g.cover),s.multiple&&x.push(g.multiple),s.disabled&&x.push(g.disabled),s.id=this.attr("id"),s.id?s.ariaId=s.id:s.ariaId=s.rawGuid,s.ariaId+="-dropdown",s.selectedAriaId=s.ariaId+"-selected";var I="",k="";I+='<div class="'+x.join(" ")+'"id="'+s.ariaId+'" tabindex="'+s.tabIndex+'" role="listbox"',s.multiple?I+=' aria-label="multi select"':I+=' aria-haspopup="true" aria-live="polite" aria-labeledby="'+s.selectedAriaId+'"',I+="></div>",s.multiple||(k+='<button type="button" class="'+g.selected+'" id="'+s.selectedAriaId+'" tabindex="-1">',k+=e("<span></span>").text(h(d,s.trim)).html(),k+="</button>"),k+='<div class="'+g.options+'">',k+="</div>",this.wrap(I).after(k),s.$dropdown=this.parent(w.base),s.$label=v,s.$allOptions=b,s.$options=$,s.$selected=s.$dropdown.find(w.selected),s.$wrapper=s.$dropdown.find(w.options),s.$placeholder=s.$dropdown.find(w.placeholder),s.index=-1,s.closed=!0,s.focused=!1,l(s),s.multiple||m(f,s),void 0!==e.fn.fsScrollbar&&s.$wrapper.fsScrollbar({theme:s.theme}).find(".fs-scrollbar-content").attr("tabindex",null),s.$dropdown.on(C.click,s,i),s.$selected.on(C.click,s,i),s.$dropdown.on(C.click,w.item,s,r).on(C.close,s,n),this.on(C.change,s,p),s.useNative||(this.on(C.focusIn,s,function(e){e.data.$dropdown.trigger(C.raw.focus)}),s.$dropdown.on(C.focusIn,s,c).on(C.focusOut,s,u))},_destruct:function(t){t.$dropdown.hasClass(g.open)&&t.$selected.trigger(C.click),void 0!==e.fn.fsScrollbar&&t.$wrapper.fsScrollbar("destroy"),t.$el[0].tabIndex=t.tabIndex,t.$label.length&&(t.$label[0].tabIndex=t.tabIndex),t.$dropdown.off(C.namespace),t.$options.off(C.namespace),t.$placeholder.remove(),t.$selected.remove(),t.$wrapper.remove(),t.$el.off(C.namespace).show().unwrap()},disable:function(e,t){if(void 0!==t){var l=e.$items.index(e.$items.filter("[data-value="+t+"]"));e.$items.eq(l).addClass(g.item_disabled),e.$options.eq(l).prop("disabled",!0)}else e.$dropdown.hasClass(g.open)&&e.$selected.trigger(C.click),e.$dropdown.addClass(g.disabled),e.$el.prop("disabled",!0),e.disabled=!0},enable:function(e,t){if(void 0!==t){var l=e.$items.index(e.$items.filter("[data-value="+t+"]"));e.$items.eq(l).removeClass(g.item_disabled),e.$options.eq(l).prop("disabled",!1)}else e.$dropdown.removeClass(g.disabled),e.$el.prop("disabled",!1),e.disabled=!1},update:function(t){void 0!==e.fn.fsScrollbar&&t.$wrapper.fsScrollbar("destroy");var i=t.index;t.$allOptions=t.$el.find("option, optgroup"),t.$options=t.$allOptions.filter("option"),t.index=-1,i=t.$options.index(t.$options.filter(":selected")),l(t),t.multiple||m(i,t),void 0!==e.fn.fsScrollbar&&t.$wrapper.fsScrollbar({theme:t.theme}).find(".fs-scrollbar-content").attr("tabindex",null)},open:o,close:a},classes:["cover","bottom","multiple","mobile","native","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{close:"close"}}),w=x.classes,g=w.raw,C=x.events,I=x.functions,k=t.window,_=t.$window,y=(t.document,null);t.Ready(function(){y=t.$body})});
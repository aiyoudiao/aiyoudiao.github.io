(window.webpackJsonp=window.webpackJsonp||[]).push([[17,19,32,45],{254:function(t,e,i){},255:function(t,e,i){"use strict";i.r(e);var n=i(11),s={props:{item:{required:!0}},computed:{link(){return Object(n.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:n.g,isMailto:n.h,isTel:n.i,focusoutAction(){this.$emit("focusout")}}},o=i(4),r=Object(o.a)(s,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.default=r.exports},259:function(t,e,i){},260:function(t,e,i){"use strict";i.r(e);var n={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},s=(i(261),i(4)),o=Object(s.a)(n,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},261:function(t,e,i){"use strict";i(254)},265:function(t,e,i){},273:function(t,e,i){"use strict";i(259)},286:function(t,e,i){"use strict";i.r(e);var n=i(255),s=i(260),o=i(99),r=i.n(o),a={props:{item:{required:!0}},components:{NavLink:n.default,DropdownTransition:s.default},data:()=>({open:!1,isMQMobile:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},beforeMount(){this.isMQMobile=window.innerWidth<720,window.addEventListener("resize",()=>{this.isMQMobile=window.innerWidth<720})},methods:{toggle(){this.isMQMobile&&(this.open=!this.open)},isLastItemOfArray:(t,e)=>r()(e)===t}},l=(i(273),i(4)),u=Object(l.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[t.item.link?e("router-link",{staticClass:"link-title",attrs:{to:t.item.link}},[t._v(t._s(t.item.text))]):t._e(),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.item.link,expression:"!item.link"}],staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})],1),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(i,n){return e("li",{key:i.link||n,staticClass:"dropdown-item"},["links"===i.type?e("h4",[t._v(t._s(i.text))]):t._e(),t._v(" "),"links"===i.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(i.items,(function(n){return e("li",{key:n.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,i.items)&&t.isLastItemOfArray(i,t.item.items)&&t.toggle()}}})],1)})),0):e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},290:function(t,e,i){"use strict";i(265)},295:function(t,e,i){"use strict";i.r(e);var n=i(286),s=i(11),o={components:{NavLink:i(255).default,DropdownLink:n.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,i=this.$router.options.routes,n=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(s=>{const o=t[s],r=n[s]&&n[s].label||o.lang;let a;return o.lang===this.$lang?a=e:(a=e.replace(this.$localeConfig.path,s),i.some(t=>t.path===a)||(a=s)),{text:r,link:a}})};return[...this.userNav,s]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(s.k)(t),{items:(t.items||[]).map(s.k)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let i=0;i<e.length;i++){const n=e[i];if(new RegExp(n,"i").test(t))return n}return"Source"}}},r=(i(290),i(4)),a=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{12:function(e,t,n){var o=n(50);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(17).default)("255ab0c3",o,!1,{})},15:function(e,t,n){var o=n(52);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(17).default)("9a22c8ca",o,!1,{})},16:function(e,t,n){var o=n(54);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(17).default)("093584e2",o,!1,{})},49:function(e,t,n){"use strict";var o=n(12);n.n(o).a},50:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,".fade-enter-active[data-v-0f09583f], .fade-leave-active[data-v-0f09583f] {\n  transition: opacity .3s ease;\n}\n.fade-enter[data-v-0f09583f], .fade-leave-to[data-v-0f09583f] {\n  opacity: 0;\n}\n.linked-icons[data-v-0f09583f] {\n  display: flex;\n}\n.linked-icons span[data-v-0f09583f] {\n    padding: 16px;\n    display: block;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.7;\n}\n.linked-icons span[data-v-0f09583f]:hover {\n      opacity: 1;\n}\n.collection-list[data-v-0f09583f] {\n  flex-wrap: wrap;\n  height: auto;\n}\n.collection-list form[data-v-0f09583f], .collection-list .username[data-v-0f09583f] {\n    flex-basis: 10%;\n    flex-grow: 1;\n    display: flex;\n}\n.collection-list .resource-list-details[data-v-0f09583f] {\n    flex-basis: 100%;\n    width: 100%;\n}\n.collection-list .resource-list-details li[data-v-0f09583f] {\n      display: flex;\n      margin-left: 44px;\n}\n.collection-list .resource-list-details li a[data-v-0f09583f] {\n        flex-grow: 1;\n        padding: 3px;\n        max-width: calc(100% - 30px);\n        display: flex;\n}\n.collection-list .resource-list-details span[data-v-0f09583f] {\n      display: inline-block;\n      vertical-align: top;\n      margin-right: 10px;\n}\n.collection-list .resource-list-details span.resource-name[data-v-0f09583f] {\n      text-overflow: ellipsis;\n      overflow: hidden;\n      position: relative;\n      vertical-align: top;\n      white-space: nowrap;\n      flex-grow: 1;\n}\n",""])},51:function(e,t,n){"use strict";var o=n(15);n.n(o).a},52:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,".multiselect[data-v-57f1548c] {\n  width: 100%;\n  margin-left: 3px;\n}\nspan.avatar[data-v-57f1548c] {\n  padding: 16px;\n  display: block;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.7;\n}\nspan.avatar[data-v-57f1548c]:hover {\n    opacity: 1;\n}\n\n/** TODO provide white icon in core */\n.icon-category-integration.icon-white[data-v-57f1548c] {\n  filter: invert(100%);\n  padding: 16px;\n  display: block;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.option__wrapper[data-v-57f1548c] {\n  display: flex;\n}\n.option__wrapper .avatar[data-v-57f1548c] {\n    display: block;\n    background-color: var(--color-background-darker) !important;\n}\n.option__wrapper .option__title[data-v-57f1548c] {\n    padding: 4px;\n}\n",""])},53:function(e,t,n){"use strict";var o=n(16);n.n(o).a},54:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,"/** TODO check why this doesn't work when scoped */\n.shareWithList .multiselect:not(.multiselect--active) .multiselect__tags {\n  border: none !important;\n}\n.shareWithList .multiselect:not(.multiselect--active) .multiselect__tags input::placeholder {\n    color: var(--color-main-text);\n}\n",""])},6:function(e,n,o){"use strict";o.r(n);var i=o(11),c=o(18),a=o(9),s=o(25),r=o.n(s),l=o(26),u=o(27),p=o.n(u);function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var f=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.http=p.a,this.baseUrl=OC.linkToOCS("collaboration/resources",2)}var t,n,o;return t=e,(n=[{key:"listCollection",value:function(e){return this.http.get("".concat(this.baseUrl,"collections/").concat(e))}},{key:"renameCollection",value:function(e,t){var n=OC.linkToOCS("collaboration/resources/collections",2);return this.http.put("".concat(n).concat(e,"?format=json"),{collectionName:t}).then(function(e){return e.data.ocs.data})}},{key:"getCollectionsByResource",value:function(e,t){var n=OC.linkToOCS("collaboration/resources/".concat(e),2);return this.http.get("".concat(n).concat(t,"?format=json")).then(function(e){return e.data.ocs.data}).catch(function(e){return console.error(e),Promise.reject(e)})}},{key:"createCollection",value:function(e,t,n){var o=OC.linkToOCS("collaboration/resources/".concat(e),2);return this.http.post("".concat(o).concat(t,"?format=json"),{name:n}).then(function(e){return e.data.ocs.data}).catch(function(e){return console.error(e),Promise.reject(e)})}},{key:"addResource",value:function(e,t,n){n=""+n;var o=OC.linkToOCS("collaboration/resources/collections",2);return this.http.post("".concat(o).concat(e,"?format=json"),{resourceType:t,resourceId:n}).then(function(e){return e.data.ocs.data})}},{key:"removeResource",value:function(e,t,n){return this.http.delete("".concat(this.baseUrl,"/collections/").concat(e),{params:{resourceType:t,resourceId:n}}).then(function(e){return e.data.ocs.data})}},{key:"search",value:function(e){var t=OC.linkToOCS("collaboration/resources/collections/search",2);return this.http.get("".concat(t,"%25").concat(e,"%25?format=json")).then(function(e){return e.data.ocs.data})}}])&&d(t.prototype,n),o&&d(t,o),e}()),h={state:{collections:[]},mutations:{addCollections:function(e,t){e.collections=t},addCollection:function(e,t){e.collections.push(t)},removeCollection:function(e,t){e.collections=e.collections.filter(function(e){return e.id!==t})},updateCollection:function(e,t){var n=e.collections.findIndex(function(e){return e.id===t.id});-1!==n?i.a.set(e.collections,n,t):e.collections.push(t)}},getters:{collectionsByResource:function(e){return function(t,n){return e.collections.filter(function(e){return void 0!==e.resources.find(function(e){return e&&e.id===""+n&&e.type===t})})}},getSearchResults:function(e){return function(t){return e.collections.filter(function(e){return e.name.contains(t)})}}},actions:{fetchCollectionsByResource:function(e,t){var n=t.resourceType,o=t.resourceId;return f.getCollectionsByResource(n,o).then(function(t){return e.commit("addCollections",t),t})},createCollection:function(e,t){var n=t.baseResourceType,o=t.baseResourceId,i=t.resourceType,c=t.resourceId,a=t.name;return f.createCollection(n,o,a).then(function(t){e.commit("addCollection",t),e.dispatch("addResourceToCollection",{collectionId:t.id,resourceType:i,resourceId:c})})},renameCollection:function(e,t){var n=t.collectionId,o=t.name;return f.renameCollection(n,o).then(function(t){return e.commit("updateCollection",t),t})},addResourceToCollection:function(e,t){var n=t.collectionId,o=t.resourceType,i=t.resourceId;return f.addResource(n,o,i).then(function(t){return e.commit("updateCollection",t),t})},removeResource:function(e,t){var n=t.collectionId,o=t.resourceType,i=t.resourceId;return f.removeResource(n,o,i).then(function(t){t.resources.length>0?e.commit("updateCollection",t):e.commit("removeCollection",n)})},search:function(e,t){return f.search(t)}}},v=function(){return new c.a.Store(h)},m=function(){var e=this.$createElement;return(this._self._c||e)("collection-list",{attrs:{type:"files"}})};m._withStripped=!0;var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.collections?n("ul",{staticClass:"shareWithList",attrs:{id:"shareWithList"}},[n("li",{on:{click:e.showSelect}},[e._m(0),e._v(" "),n("multiselect",{ref:"select",attrs:{options:e.options,placeholder:e.placeholder,"tag-placeholder":"Create a new collection",label:"title","track-by":"title","reset-after":!0,limit:5},on:{select:e.select,"search-change":e.search},scopedSlots:e._u([{key:"singleLabel",fn:function(t){return[n("span",{staticClass:"option__desc"},[n("span",{staticClass:"option__title"},[e._v(e._s(t.option.title))])])]}},{key:"option",fn:function(t){return[n("span",{staticClass:"option__wrapper"},[t.option.class?n("span",{staticClass:"avatar",class:t.option.class}):n("avatar",{attrs:{displayName:t.option.title,allowPlaceholder:!0}}),e._v(" "),n("span",{staticClass:"option__title"},[e._v(e._s(t.option.title))])],1)]}}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),e._l(e.collections,function(e){return n("collection-list-item",{key:e.id,attrs:{collection:e}})})],2):e._e()};C._withStripped=!0;var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideDetails,expression:"hideDetails"}],staticClass:"collection-list"},[n("avatar",{attrs:{displayName:e.collection.name,allowPlaceholder:!0}}),e._v(" "),""===this.newName?n("span",{staticClass:"username",attrs:{title:""},on:{click:e.showDetails}},[e._v(e._s(e.collection.name))]):n("form",{on:{submit:function(t){return t.preventDefault(),e.renameCollection(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{type:"text",autocomplete:"off",autocapitalize:"off"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),e._v(" "),n("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.detailsOpen?e._e():n("div",{staticClass:"linked-icons"},e._l(e.collection.resources,function(t){return n("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"resource.name"}],key:t.id,attrs:{href:t.link}},[n("span",{class:e.getIcon(t)})])}),0)]),e._v(" "),n("span",{staticClass:"sharingOptionsGroup"},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.close,expression:"close"}],staticClass:"share-menu"},[n("a",{staticClass:"icon icon-more",attrs:{href:"#"},on:{click:e.toggle}}),e._v(" "),n("span",{staticClass:"icon icon-loading-small hidden"}),e._v(" "),n("div",{staticClass:"popovermenu",class:{open:e.isOpen}},[n("popover-menu",{attrs:{menu:e.menu}})],1)])]),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.detailsOpen?n("ul",{staticClass:"resource-list-details"},e._l(e.collection.resources,function(t){return n("li",[n("a",{attrs:{href:t.link}},[n("span",{class:e.getIcon(t)}),n("span",{staticClass:"resource-name"},[e._v(e._s(t.name||""))])]),e._v(" "),n("span",{staticClass:"icon-delete",on:{click:function(n){e.removeResource(e.collection,t)}}})])}),0):e._e()])],1)};y._withStripped=!0;var g={name:"CollectionListItem",components:{Avatar:a.Avatar},props:{collection:{type:Object}},data:function(){return{isOpen:!1,detailsOpen:!1,newName:""}},computed:{menu:function(){var e=this;return[{action:function(){e.detailsOpen=!0,e.isOpen=!1},icon:"icon-info",text:t("files_sharing","Details")},{action:function(){return e.openRename()},icon:"icon-rename",text:t("files_sharing","Rename collection")}]},getIcon:function(){return function(e){return[e.iconClass]}}},methods:{open:function(){this.isOpen=!0},close:function(){this.isOpen=!1},toggle:function(){this.isOpen=!this.isOpen},showDetails:function(){this.detailsOpen=!0},hideDetails:function(){this.detailsOpen=!1},removeResource:function(e,t){this.$store.dispatch("removeResource",{collectionId:e.id,resourceType:t.type,resourceId:t.id})},openRename:function(){this.newName=this.collection.name},renameCollection:function(){var e=this;this.$store.dispatch("renameCollection",{collectionId:this.collection.id,name:this.newName}).then(function(t){e.newName=""})}}},w=(o(49),o(14)),_=Object(w.a)(g,y,[],!1,null,"0f09583f",null);_.options.__file="src/components/CollectionListItem.vue";var b=_.exports,k={name:"CollectionList",components:{CollectionListItem:b,Avatar:a.Avatar,Multiselect:a.Multiselect},props:{type:{type:String,default:""}},data:function(){return{selectIsOpen:!1,generatingCodes:!1,codes:void 0,value:null,model:{},searchCollections:[]}},mounted:function(){this.$store.dispatch("fetchCollectionsByResource",{resourceType:this.type,resourceId:this.$root.model.id})},computed:{collections:function(){return this.$store.getters.collectionsByResource(this.type,this.$root.model.id)},placeholder:function(){return t("files_sharing","Add to a collection")},options:function(){var e=this,t=[],n=window.OCP.Collaboration.getTypes().sort(),o=function(e){t.push({method:0,type:n[e],title:window.OCP.Collaboration.getLabel(n[e]),class:window.OCP.Collaboration.getIcon(n[e]),action:function(){return window.OCP.Collaboration.trigger(n[e])}})};for(var i in n)o(i);var c=function(n){-1===e.collections.findIndex(function(t){return t.id===e.searchCollections[n].id})&&t.push({method:1,title:e.searchCollections[n].name,collectionId:e.searchCollections[n].id})};for(var a in this.searchCollections)c(a);return t}},methods:{select:function(e,t){var n=this;0===e.method&&e.action().then(function(t){n.$store.dispatch("createCollection",{baseResourceType:n.type,baseResourceId:n.$root.model.id,resourceType:e.type,resourceId:t,name:n.$root.model.name})}).catch(function(e){console.error("No resource selected",e)}),1===e.method&&this.$store.dispatch("addResourceToCollection",{collectionId:e.collectionId,resourceType:this.type,resourceId:this.$root.model.id})},search:function(e){var t=this;this.$store.dispatch("search",e).then(function(e){t.searchCollections=e})},showSelect:function(){this.selectIsOpen=!0,this.$refs.select.$el.focus()},hideSelect:function(){this.selectIsOpen=!1},isVueComponent:function(e){return e._isVue}}},O=(o(51),o(53),Object(w.a)(k,C,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"avatar"},[t("span",{staticClass:"icon-category-integration icon-white"})])}],!1,null,"57f1548c",null));O.options.__file="src/components/CollectionList.vue";var x={name:"CollaborationView",components:{CollectionList:O.exports}},I=Object(w.a)(x,m,[],!1,null,null,null);I.options.__file="src/views/CollaborationView.vue";var T=I.exports;o.d(n,"Vue",function(){return i.a}),o.d(n,"View",function(){return T}),o.d(n,"Store",function(){return v}),
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
i.a.prototype.t=t,i.a.component("PopoverMenu",a.PopoverMenu),i.a.directive("ClickOutside",r.a),i.a.directive("Tooltip",l.a),i.a.use(c.a)}}]);
//# sourceMappingURL=files_sharing.2.js.map
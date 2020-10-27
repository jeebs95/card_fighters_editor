(function(t){function e(e){for(var r,s,o=e[0],i=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},c=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/card_fighters_editor/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var f=i;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("CardDatabase")],1)],1)},c=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-file-input",{attrs:{accept:".sqlite3","hide-input":"","prepend-icon":"mdi-database"},on:{change:t.import_database}}),a("WarriorsBank",{attrs:{warriors_data:t.warrior_data,linked_database:t.has_database},on:{add_warrior_card:t.add_warrior}}),a("br"),a("v-btn",{attrs:{color:"primary",dark:"",disabled:!t.has_database},on:{click:t.download_database}},[t._v("Save Out Database")])],1)},o=[],i=(a("d3b7"),a("3ca3"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("Warriors Bank")]),a("v-row",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",dark:"",justify:"end",disabled:!t.linked_database},on:{click:function(e){return t.$emit("add_warrior_card")}}},[t._v("Add Warrior")])],1),a("br"),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.card_headers,items:t.warriors_data,"items-per-page":5,"show-expand":""},scopedSlots:t._u([{key:"item.effect",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.effect_text(a.id))+" ")]}},{key:"expanded-item",fn:function(e){var r=e.headers,n=e.item;return[a("td",{attrs:{colspan:r.length}},[a("v-container",[a("v-row",[a("v-text-field",{attrs:{label:"Name"},model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"item.name"}}),a("v-spacer"),a("v-select",{attrs:{items:t.classes,label:"Class"},model:{value:n.class,callback:function(e){t.$set(n,"class",e)},expression:"item.class"}}),a("v-spacer"),a("v-text-field",{attrs:{label:"Cost"},model:{value:n.cost,callback:function(e){t.$set(n,"cost",e)},expression:"item.cost"}}),a("v-spacer"),a("v-text-field",{attrs:{label:"Armor"},model:{value:n.armor,callback:function(e){t.$set(n,"armor",e)},expression:"item.armor"}}),a("v-spacer"),a("v-text-field",{attrs:{label:"Health"},model:{value:n.health,callback:function(e){t.$set(n,"health",e)},expression:"item.health"}}),a("v-spacer"),a("v-text-field",{attrs:{label:"Attack"},model:{value:n.attack,callback:function(e){t.$set(n,"attack",e)},expression:"item.attack"}})],1),a("v-row",[a("v-text-field",{attrs:{label:"Effect"},domProps:{textContent:t._s(n.effect)}}),a("v-spacer"),a("EffectEditor",{attrs:{card_effect:n.effect,card_id:n.id},on:{updated_effect:t.update_effect}})],1)],1)],1)]}}])})],1)},f=[],u=(a("c740"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{persistent:"","max-width":"70%"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",dark:""},on:{click:t.get_effect}},"v-btn",n,!1),r),[t._v("Edit Effect")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Effect Editor")])]),a("v-card-text",[a("v-container",[t._l(t.effect,(function(e){return a("div",{key:e.id},[a("v-row",[a("h1",[t._v("Effect Chunk "+t._s(e.id))]),a("v-spacer"),e.id>1?a("v-btn",{attrs:{color:"red darken-1",dark:"",justify:"end"},on:{click:function(a){return t.remove_effect_chunk(e.id)}}},[t._v("Delete")]):t._e()],1),a("hr"),a("br"),a("h2",[t._v("Type")]),a("v-layout",[a("v-select",{attrs:{items:t.type.focus,label:"Focus"},model:{value:e.type.focus,callback:function(a){t.$set(e.type,"focus",a)},expression:"effect_item.type.focus"}}),a("v-spacer"),a("v-select",{attrs:{items:"move_card"==e.type.focus?t.type.move_card_types:t.type.type,label:"SubType"},on:{click:function(a){return t.updateTypeType(e.type.focus)}},model:{value:e.type.sub,callback:function(a){t.$set(e.type,"sub",a)},expression:"effect_item.type.sub"}}),a("v-spacer"),a("v-select",{attrs:{items:t.type.end,label:"End Condition"},model:{value:e.type.end,callback:function(a){t.$set(e.type,"end",a)},expression:"effect_item.type.end"}})],1),a("br"),a("h2",[t._v("Target")]),a("v-layout",[a("v-select",{attrs:{items:t.target.focus,label:"Focus"},model:{value:e.target.focus,callback:function(a){t.$set(e.target,"focus",a)},expression:"effect_item.target.focus"}}),a("v-spacer"),a("v-text-field",{attrs:{label:"Number of Targets"},model:{value:e.target.number,callback:function(a){t.$set(e.target,"number",a)},expression:"effect_item.target.number"}}),a("v-spacer"),a("v-select",{attrs:{items:t.target.restriction,multiple:"",chips:"",label:"Restrictions"},model:{value:e.target.restriction,callback:function(a){t.$set(e.target,"restriction",a)},expression:"effect_item.target.restriction"}})],1),a("br"),a("v-checkbox",{attrs:{label:"Has Stat?"},on:{click:function(a){return t.showStat(e)}},model:{value:e.has_stat,callback:function(a){t.$set(e,"has_stat",a)},expression:"effect_item.has_stat"}}),null!==e.stat?a("div",[a("h2",[t._v("Stat")]),a("v-layout",[a("v-select",{attrs:{items:t.stat.focus,label:"Focus"},model:{value:e.stat.focus,callback:function(a){t.$set(e.stat,"focus",a)},expression:"effect_item.stat.focus"}}),a("v-spacer"),a("v-select",{attrs:{items:"ability"==e.stat.focus?t.stat.ability_types:"status"==e.stat.focus?t.stat.status_types:t.stat.type,label:"Type"},on:{click:function(a){return t.updateStatType(e.stat.focus)}},model:{value:e.stat.type,callback:function(a){t.$set(e.stat,"type",a)},expression:"effect_item.stat.type"}}),a("v-spacer"),a("v-text-field",{attrs:{label:"Amount to apply"},model:{value:e.stat.amount,callback:function(a){t.$set(e.stat,"amount",a)},expression:"effect_item.stat.amount"}})],1),a("br")],1):t._e(),a("h2",[t._v("Text")]),a("v-text-field",{attrs:{label:"Effect Text"},model:{value:e.text,callback:function(a){t.$set(e,"text",a)},expression:"effect_item.text"}}),a("br")],1)})),a("br"),a("v-btn",{attrs:{color:"blue darken-1",dark:""},on:{click:t.add_effect_chunk}},[t._v("Add Effect Chunk")])],2)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save_effect}},[t._v("Save")])],1)],1)],1)}),d=[],p=(a("4160"),a("a434"),a("159b"),a("2ef0")),v={name:"EffectEditor",props:["card_effect","card_id"],data:function(){return{dialog:!1,type:{focus:["modify_stat","move_card","counter","owner","ability"],type:["instant","temporary","repeat","swap","change"],move_card_types:["rift_to_hand","field_to_hand","hand_to_deck","deck_to_rift","rift_to_deck","hand_to_field","deck_to_field"],end:["null","after_use","after_turn","after_battle","leave_field"]},target:{focus:["card_on_field","played_card","card_in_rift","card_in_deck","card_in_hand"],restriction:["warrior","effect","targets_self","targets_others","self","others","orc","elf","necro","grei"]},stat:{focus:["attack","health","armor","cost","ability","ap","status"],type:["increase","decrease","boost","hinder"],ability_types:["direct","guardian","multi_attack","wall","taunt","revenge"],status_types:["regen","poison","stun"]},lastTypeFocus:null,lastStatFocus:null,effect:null}},methods:{get_effect:function(){var t=this;if(t.card_effect.length>0){var e=JSON.parse(t.card_effect),a=0;p.forEach(e,(function(t){t.has_stat=null!=t.stat,t.id=++a})),t.effect=e}else t.effect=[{type:{focus:"",sub:"",end:null},target:{focus:"",number:"",restriction:[]},stat:null,text:"",id:1}]},add_effect_chunk:function(){var t=this;t.effect.push({type:{focus:"",sub:"",end:null},target:{focus:"",number:"",restriction:[]},stat:null,text:"",id:t.effect.length+1})},remove_effect_chunk:function(t){var e=this,a=p.findIndex(e.effect,["id",t]);e.effect.splice(a,1);var r=0;p.forEach(e.effect,(function(t){t.id=++r}))},save_effect:function(){var t=this;p.forEach(t.effect,(function(t){delete t.has_stat,delete t.id})),console.log("Effect saved!"),console.log(t.effect),t.$emit("updated_effect",JSON.stringify(t.effect),t.card_id),t.dialog=!1},showStat:function(t){var e=this;null!=t.stat?t.stat=null:t.stat=[],e.$forceUpdate()},updateTypeType:function(t){var e=this;t!=e.lastTypeFocus&&"move_card"==(e.lastTypeFocus||t)&&(console.log("Refreshed"),e.lastTypeFocus=t,e.$forceUpdate())},updateStatType:function(t){var e=this;t!=e.lastStatFocus&&"ability"==(e.lastStatFocus||t)&&(console.log("Refreshed"),e.lastStatFocus=t,e.$forceUpdate())}}},_=v,b=a("2877"),m=a("6544"),h=a.n(m),y=a("8336"),g=a("b0af"),k=a("99d9"),x=a("ac7c"),w=a("a523"),E=a("169a"),S=a("a722"),T=a("0fd9"),$=a("b974"),O=a("2fa4"),V=a("8654"),C=Object(b["a"])(_,u,d,!1,null,null,null),j=C.exports;h()(C,{VBtn:y["a"],VCard:g["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VCheckbox:x["a"],VContainer:w["a"],VDialog:E["a"],VLayout:S["a"],VRow:T["a"],VSelect:$["a"],VSpacer:O["a"],VTextField:V["a"]});var F=a("369b"),A=a("2ef0"),R={name:"WarriorsBank",components:{EffectEditor:j},props:["warriors_data","linked_database"],data:function(){return{card_headers:[{text:"ID",value:"id",align:"start"},{text:"Name",value:"name",align:"start"},{text:"Class",value:"class",align:"start"},{text:"Cost",value:"cost",align:"start"},{text:"Armor",value:"armor",align:"start"},{text:"Health",value:"health",align:"start"},{text:"Attack",value:"attack",align:"start"},{text:"Effect",value:"effect",align:"start"}],classes:["orc","elf","beastfolk","necro","grei"],cards:[]}},created:function(){},methods:{import_csv:function(t){var e=this;F.parse(t,{header:!0,complete:function(t){e.parsed_csv(t)}})},parsed_csv:function(t){var e=this;console.log("Parsing complete:",t),e.cards=t.data},effect_text:function(t){var e=this,a="",r=A.findIndex(e.warriors_data,["id",t]);if(r>-1&&e.warriors_data[r].effect.length>0){var n=JSON.parse(e.warriors_data[r].effect);a=n[0].text}return a},update_effect:function(t,e){var a=this;console.log("Update Effect");var r=A.findIndex(a.warriors_data,["id",e]);a.warriors_data[r].effect=t}}},B=R,D=a("8fea"),P=Object(b["a"])(B,l,f,!1,null,null,null),N=P.exports;h()(P,{VBtn:y["a"],VContainer:w["a"],VDataTable:D["a"],VRow:T["a"],VSelect:$["a"],VSpacer:O["a"],VTextField:V["a"]});var U,I=a("fdac4"),M=null,L={name:"CardDatabase",components:{WarriorsBank:N},data:function(){return{warrior_data:[],has_database:!1}},created:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I({locateFile:function(t){return"https://sql.js.org/dist/".concat(t)}});case 2:U=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{import_database:function(t){var e=this,a=new FileReader;a.onload=function(){var t=new Uint8Array(a.result);M=new U.Database(t),e.has_database=!0;var r=M.prepare("SELECT * FROM warriors");while(r.step())e.warrior_data.push(r.getAsObject())},a.readAsArrayBuffer(t)},add_warrior:function(){if(void 0!==M){var t=this,e=t.warrior_data.length+1,a="INSERT INTO warriors VALUES ("+e+", '', '', '', 0, 0, 0, 1, '');";M.run(a),t.warrior_data=[];var r=M.prepare("SELECT * FROM warriors");while(r.step())t.warrior_data.push(r.getAsObject())}},download_database:function(){var t=M.export(),e=new Blob([t],{type:"application/sqlite3"}),a=document.createElement("a");a.href=window.URL.createObjectURL(e),a.download="card_database.sqlite3",a.click()}}},J=L,W=a("23a7"),q=Object(b["a"])(J,s,o,!1,null,null,null),H=q.exports;h()(q,{VBtn:y["a"],VContainer:w["a"],VFileInput:W["a"]});var z={name:"App",components:{CardDatabase:H},data:function(){return{}}},G=z,K=a("7496"),Q=a("f6c4"),X=Object(b["a"])(G,n,c,!1,null,null,null),Y=X.exports;h()(X,{VApp:K["a"],VMain:Q["a"]});var Z=a("f309");r["a"].use(Z["a"]);var tt=new Z["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:tt,render:function(t){return t(Y)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){}});
//# sourceMappingURL=app.d7ff0629.js.map
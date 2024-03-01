"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[496],{87496:(E,s,a)=>{a.r(s),a.d(s,{CardsDemoModule:()=>_});var v=a(60095),r=a(96814),l=a(11828),u=a(9673),h=a(4893),p=a(86975),c=a(65879),m=a(96565),Z=a(86064),n=a(60291);function g(e,o){1&e&&(c.TgZ(0,"div",7),c._uU(1,"Click to select me"),c.qZA())}function f(e,o){1&e&&(c.TgZ(0,"div",7),c._uU(1,"I am the selected card"),c.qZA())}function T(e,o){if(1&e){const d=c.EpF();c.TgZ(0,"div",4)(1,"div",20),c.NdJ("click",function(){const w=c.CHM(d).index,D=c.oxw();return c.KtG(D.activateCard(w))}),c.TgZ(2,"div",6),c._uU(3),c.qZA(),c.YNc(4,g,2,0,"div",21),c.YNc(5,f,2,0,"div",21),c.qZA()()}if(2&e){const d=o.$implicit;c.xp6(1),c.ekj("card-active",d.active),c.xp6(2),c.Oqu(d.title),c.xp6(1),c.Q6J("ngIf",!d.active),c.xp6(1),c.Q6J("ngIf",d.active)}}function A(e,o){1&e&&(c.TgZ(0,"clr-dropdown-menu",22)(1,"button",23),c._uU(2,"Edit"),c.qZA(),c.TgZ(3,"button",23),c._uU(4,"Duplicate"),c.qZA(),c.TgZ(5,"button",23),c._uU(6,"Delete"),c.qZA()())}h.Q.addIcons(p.F);let y=(()=>{class e extends u.K{htmlExample='\n<div class="clr-row">\n    <div class="clr-col-4">\n        <div class="card card-active clickable">\n            <div class="card-header">\n                I am an active card\n            </div>\n            <div class="card-block">\n                I am also clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card clickable">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                But I am clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                And I am also not clickable\n            </div>\n        </div>\n    </div>\n</div>\n';htmlExamplePlaceholder='\n<div class="card card-placeholder">\n    <div class="card-header">\n        Placeholder card\n    </div>\n    <div class="card-block">\n        Card block\n        <div>\n            <a class="btn btn-link">Action</a>\n        </div>\n    </div>\n</div>\n';htmlExampleCustomActions='\n<div class="card">\n    <div class="card-header">\n        Card header with custom actions\n        <clr-dropdown class="card-actions">\n            <button type="button" class="btn btn-icon btn-link card-action dropdown-toggle" clrDropdownTrigger>\n                <cds-icon shape="ellipsis-vertical"></cds-icon>\n            </button>\n            <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n                ...\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    <div class="card-block">\n        Card Block\n    </div>\n</div>\n';cards=[{title:"Selectable card",active:!0},{title:"Selectable card",active:!1},{title:"Selectable card",active:!1}];activateCard(d){for(let t of this.cards)t.active=!1;this.cards[d].active=!0}constructor(){super("cards")}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=c.Xpm({type:e,selectors:[["clr-cards-demo"]],hostVars:4,hostBindings:function(t,i){2&t&&c.ekj("content-area",!0)("dox-content-panel",!0)},features:[c.qOj],decls:85,vars:5,consts:[[3,"title"],["id","cards-header",1,"component-summary"],["id","design-guidelines"],[1,"clr-row"],[1,"clr-col-4"],[1,"card","clickable"],[1,"card-header"],[1,"card-block"],["href","https://clarity.design/documentation/cards"],["class","clr-col-4",4,"ngFor","ngForOf"],[1,"clr-code"],["id","examples"],[3,"clrCode"],[1,"card","card-placeholder"],[1,"btn","btn-link"],[1,"card"],[1,"card-actions"],["type","button","clrDropdownTrigger","",1,"btn","btn-icon","btn-link","card-action","dropdown-toggle"],["shape","ellipsis-vertical"],["clrPosition","bottom-right",4,"clrIfOpen"],[1,"card","selectable",3,"click"],["class","card-block",4,"ngIf"],["clrPosition","bottom-right"],["type","button","clrDropdownItem",""]],template:function(t,i){1&t&&(c.TgZ(0,"clr-doc-wrapper",0)(1,"article")(2,"h5",1),c._uU(3," The Addons extend the default Clarity cards by providing following additional types: "),c.qZA(),c.TgZ(4,"ul")(5,"li"),c._uU(6,"Selectable card. The selected stays visually highlighted."),c.qZA(),c.TgZ(7,"li"),c._uU(8,"Placeholder card. Represents an empty card which can be filled by user actions."),c.qZA()(),c.TgZ(9,"h2"),c._uU(10,"Selectable card"),c.qZA(),c.TgZ(11,"div",2)(12,"h3"),c._uU(13,"Behavior"),c.qZA(),c.TgZ(14,"p"),c._uU(15," Only one card at the time can have the selection indicator. Compare this behavior to a radio button. Note the different hover style in the example below. "),c.qZA(),c.TgZ(16,"h6"),c._uU(17,"Default clickable card (Standard Clarity)"),c.qZA(),c.TgZ(18,"div",3)(19,"div",4)(20,"div",5)(21,"div",6),c._uU(22,"Default card"),c.qZA(),c.TgZ(23,"div",7),c._uU(24," See the official "),c.TgZ(25,"a",8),c._uU(26,"Clarity documentation"),c.qZA(),c._uU(27," for details. "),c.qZA()()()(),c.TgZ(28,"h6"),c._uU(29,"Selectable card (Clarity Addons)"),c.qZA(),c.TgZ(30,"div",3),c.YNc(31,T,6,5,"div",9),c.qZA(),c.TgZ(32,"h3"),c._uU(33,"Usage"),c.qZA(),c.TgZ(34,"p"),c._uU(35," On contrast to the default clickable-cards, the selectable card does not start an action, it is only marked as selected. Note that multiple selection is not supported. If you depend on multi-selection, use a different element such as a checkbox. A selectable card should have the class "),c.TgZ(36,"code",10),c._uU(37,"selectable"),c.qZA(),c._uU(38," instead of the clarity-default "),c.TgZ(39,"code",10),c._uU(40,"clickable"),c.qZA(),c._uU(41," class. Use the "),c.TgZ(42,"code",10),c._uU(43,"card-active"),c.qZA(),c._uU(44," class to mark the currently selected one. "),c.qZA()(),c.TgZ(45,"div",11),c._UZ(46,"clr-code-snippet",12),c.qZA(),c.TgZ(47,"h2"),c._uU(48,"Placeholder card"),c.qZA(),c._uU(49," The placeholder card represents an empty card by a dashed border. The style is provided by class "),c.TgZ(50,"code",10),c._uU(51,"card-placeholder"),c.qZA(),c._uU(52,". All buttons inside a placeholder card should be flat (btn-link). "),c.TgZ(53,"div",3)(54,"div",4)(55,"div",13)(56,"div",6),c._uU(57,"Placeholder card"),c.qZA(),c.TgZ(58,"div",7),c._uU(59," Card block "),c.TgZ(60,"div")(61,"a",14),c._uU(62,"Action"),c.qZA()()()()()(),c._UZ(63,"clr-code-snippet",12),c.TgZ(64,"h2"),c._uU(65,"Card with custom actions"),c.qZA(),c._uU(66," To use a card with custom actions, use the classes "),c.TgZ(67,"code",10),c._uU(68,"card-actions"),c.qZA(),c._uU(69," on the dropdown itself and "),c.TgZ(70,"code",10),c._uU(71,"card-action"),c.qZA(),c._uU(72," on the dropdown-toggle. "),c.TgZ(73,"div",3)(74,"div",4)(75,"div",15)(76,"div",6),c._uU(77," Card header with custom actions "),c.TgZ(78,"clr-dropdown",16)(79,"button",17),c._UZ(80,"cds-icon",18),c.qZA(),c.YNc(81,A,7,0,"clr-dropdown-menu",19),c.qZA()(),c.TgZ(82,"div",7),c._uU(83,"Card Block"),c.qZA()()()(),c._UZ(84,"clr-code-snippet",12),c.qZA()()),2&t&&(c.Q6J("title",i.title),c.xp6(31),c.Q6J("ngForOf",i.cards),c.xp6(15),c.Q6J("clrCode",i.htmlExample),c.xp6(17),c.Q6J("clrCode",i.htmlExamplePlaceholder),c.xp6(21),c.Q6J("clrCode",i.htmlExampleCustomActions))},dependencies:[r.sg,r.O5,l.nkF,l.nqY,l.f_W,l.zwp,l.ZUS,l.lU3,m.O,Z.k,n.Qci],encapsulation:2})}return e})();var k=a(61153),q=a(37054),x=a(97877);let _=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=c.oAB({type:e});static \u0275inj=c.cJS({imports:[r.ez,v.u5,l.K6A,x.A,k.B,q.Bz.forChild([{path:"",component:y}]),n.mmz]})}return e})()}}]);
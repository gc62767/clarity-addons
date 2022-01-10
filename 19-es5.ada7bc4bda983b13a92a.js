!function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ISuI:function(e,o,c){"use strict";c.r(o),c.d(o,"LetterAvatarDemoModule",function(){return g});var i,b,l=c("3Pt+"),s=c("ofXK"),f=c("8MG2"),u=c("N+3j"),d=c("fXoL"),p=c("0G9f"),h=c("6Y1o"),v=c("vAyd"),m=((i=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(c,e);var o=a(c);function c(){var e;return n(this,c),(e=o.call(this,"letter-avatar")).htmlExample='\n<div class="parent">\n    <clr-letter-avatar class="demo-avatar" clrName="John Doe"></clr-letter-avatar>\n    <span>John Doe</span>\n</div>\n\n.parent {\n    display: flex;\n    align-items: center;\n}\n\n.demo-avatar {\n    margin-right: .5rem;\n}\n',e.htmlExample2='\n<div class="parent">\n    <clr-letter-avatar class="demo-avatar avatar-large" clrName="John Doe" clrSize="48"></clr-letter-avatar>\n    <span>John Doe</span>\n</div>\n\n.avatar-large {\n    font-size: 1rem;\n}\n',e}return t(c)}(u.a)).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=d.Eb({type:i,selectors:[["clr-letter-avatar-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&d.Cb("content-area",!0)("dox-content-panel",!0)},features:[d.wb],decls:73,vars:3,consts:[[3,"title"],[1,"component-summary"],["id","design-guidelines"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","code-examples"],["id","examples"],[2,"display","flex"],[1,"parent"],["clrName","John Doe",1,"demo-avatar"],["href","#"],[3,"clrCode"],[1,"clr-code"],["clrName","John Doe","clrSize","48",1,"demo-avatar","avatar-large"]],template:function(e,t){1&e&&(d.Qb(0,"clr-doc-wrapper",0),d.Qb(1,"article"),d.Qb(2,"h5",1),d.Bc(3,"The letter avatar is used to display initials of a name."),d.Pb(),d.Qb(4,"div",2),d.Qb(5,"h3"),d.Bc(6,"Summary of Options"),d.Pb(),d.Qb(7,"table",3),d.Qb(8,"thead"),d.Qb(9,"tr"),d.Qb(10,"th",4),d.Bc(11,"Input"),d.Pb(),d.Qb(12,"th",5),d.Bc(13,"Values"),d.Pb(),d.Qb(14,"th",6),d.Bc(15,"Default"),d.Pb(),d.Qb(16,"th",4),d.Bc(17,"Effect"),d.Pb(),d.Pb(),d.Pb(),d.Qb(18,"tbody"),d.Qb(19,"tr"),d.Qb(20,"td",4),d.Qb(21,"b"),d.Bc(22,"clrName"),d.Pb(),d.Qb(23,"div",7),d.Bc(24,"Type: string"),d.Pb(),d.Qb(25,"div",7),d.Bc(26,"Default: undefined"),d.Pb(),d.Pb(),d.Qb(27,"td",5),d.Bc(28,"String"),d.Pb(),d.Qb(29,"td",6),d.Bc(30,"undefined"),d.Pb(),d.Qb(31,"td",4),d.Bc(32,"The full name from which the initials are generated"),d.Pb(),d.Pb(),d.Qb(33,"tr"),d.Qb(34,"td",4),d.Qb(35,"b"),d.Bc(36,"clrSize"),d.Pb(),d.Qb(37,"div",7),d.Bc(38,"Type: Number"),d.Pb(),d.Qb(39,"div",7),d.Bc(40,"Default: 24"),d.Pb(),d.Pb(),d.Qb(41,"td",5),d.Bc(42,"Number"),d.Pb(),d.Qb(43,"td",6),d.Bc(44,"24"),d.Pb(),d.Qb(45,"td",4),d.Bc(46,"Defines the size of the letter avatar in px"),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(47,"div",8),d.Qb(48,"h3",9),d.Bc(49,"Code & Examples"),d.Pb(),d.Qb(50,"h4"),d.Bc(51,"Standard behaviour"),d.Pb(),d.Qb(52,"p"),d.Bc(53,"The letter avatar gets a hover effect when hovering over anything inside his direct parent. See it in action by hovering over the name."),d.Pb(),d.Qb(54,"div",10),d.Qb(55,"div",11),d.Lb(56,"clr-letter-avatar",12),d.Qb(57,"a",13),d.Bc(58,"John Doe"),d.Pb(),d.Pb(),d.Pb(),d.Lb(59,"clr-code-snippet",14),d.Qb(60,"h4"),d.Bc(61,"Larger size"),d.Pb(),d.Qb(62,"p"),d.Bc(63,"For a larger size of the avatar set the "),d.Qb(64,"code",15),d.Bc(65,"clrSize"),d.Pb(),d.Bc(66," attribute and adapt the font-size of the avatar accordingly."),d.Pb(),d.Qb(67,"div",10),d.Qb(68,"div",11),d.Lb(69,"clr-letter-avatar",16),d.Qb(70,"a",13),d.Bc(71,"John Doe"),d.Pb(),d.Pb(),d.Pb(),d.Lb(72,"clr-code-snippet",14),d.Pb(),d.Pb(),d.Pb()),2&e&&(d.hc("title",t.title),d.zb(59),d.hc("clrCode",t.htmlExample),d.zb(13),d.hc("clrCode",t.htmlExample2))},directives:[p.a,h.t,v.a],styles:[".parent[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center}.demo-avatar[_ngcontent-%COMP%]{margin-right:.5rem}.avatar-large[_ngcontent-%COMP%]{font-size:1rem}"]}),i),P=c("JsA7"),Q=c("tyNb"),y=c("XPsC"),g=((b=t(function e(){n(this,e)})).\u0275fac=function(e){return new(e||b)},b.\u0275mod=d.Ib({type:b}),b.\u0275inj=d.Hb({imports:[[s.c,l.h,f.a,y.a,P.a,Q.g.forChild([{path:"",component:m}]),h.b]]}),b)}}])}();
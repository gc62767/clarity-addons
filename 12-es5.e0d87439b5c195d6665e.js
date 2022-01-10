!function(){function e(e,t){for(var r=0;r<t.length;r++){var c=t[r];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function t(t,r,c){return r&&e(t.prototype,r),c&&e(t,c),t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var r,c=o(e);if(t){var n=o(this).constructor;r=Reflect.construct(c,arguments,n)}else r=c.apply(this,arguments);return l(this,r)}}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{STiG:function(e,l,o){"use strict";o.r(l),o.d(l,"DatagridDemoModule",function(){return P});var a,i,d=o("ofXK"),u=o("8MG2"),b=o("N+3j"),g=o("fXoL"),s=o("0G9f"),f=o("vAyd"),p=((a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(o,e);var l=n(o);function o(){var e;return r(this,o),(e=l.call(this,"datagrid")).noSelectAllExample='\n<clr-datagrid class="datagrid-no-select-all" [(clrDgSelected)]="selected">\n    <clr-dg-column>Description</clr-dg-column>\n    <clr-dg-row clrDgItem="1"><clr-dg-cell>Item 1</clr-dg-cell></clr-dg-row>\n    <clr-dg-row clrDgItem="2"><clr-dg-cell>Item 2</clr-dg-cell></clr-dg-row>\n    <clr-dg-row clrDgItem="3"><clr-dg-cell>Item 3</clr-dg-cell></clr-dg-row>\n    <clr-dg-row clrDgItem="4"><clr-dg-cell>Item 4</clr-dg-cell></clr-dg-row>\n    <clr-dg-row clrDgItem="5"><clr-dg-cell>Item 5</clr-dg-cell></clr-dg-row>\n</clr-datagrid>',e.selected=[],e}return t(o)}(b.a)).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=g.Eb({type:a,selectors:[["clr-datagrid-demo-docu"]],hostVars:4,hostBindings:function(e,t){2&e&&g.Cb("content-area",!0)("dox-content-panel",!0)},features:[g.wb],decls:38,vars:3,consts:[[3,"title"],[1,"component-summary"],["href","https://clarity.design/documentation/datagrid/structure"],[1,"clr-code"],[1,"datagrid-no-select-all",3,"clrDgSelected","clrDgSelectedChange"],["clrDgItem","1"],["clrDgItem","2"],["clrDgItem","3"],["clrDgItem","4"],["clrDgItem","5"],[3,"clrCode"]],template:function(e,t){1&e&&(g.Qb(0,"clr-doc-wrapper",0),g.Qb(1,"article"),g.Qb(2,"h5",1),g.Bc(3," Datagrids are for organizing large volumes of data that users can scan, compare and perform actions on. "),g.Pb(),g.Qb(4,"p"),g.Bc(5," Please find the main documentation here: "),g.Qb(6,"a",2),g.Bc(7,"Clarity Datagrid"),g.Pb(),g.Lb(8,"br"),g.Bc(9,"In the following only additional features are documented "),g.Pb(),g.Qb(10,"h3"),g.Bc(11,"Selection"),g.Pb(),g.Qb(12,"h4"),g.Bc(13,'Omit "select-all" in datagrid header'),g.Pb(),g.Qb(14,"p"),g.Bc(15," Use class "),g.Qb(16,"code",3),g.Bc(17,"datagrid-no-select-all"),g.Pb(),g.Bc(18," to prevent rendering of the select-all checkbox in datagrid header. "),g.Pb(),g.Qb(19,"clr-datagrid",4),g.Xb("clrDgSelectedChange",function(e){return t.selected=e}),g.Qb(20,"clr-dg-column"),g.Bc(21,"Description"),g.Pb(),g.Qb(22,"clr-dg-row",5),g.Qb(23,"clr-dg-cell"),g.Bc(24,"Item 1"),g.Pb(),g.Pb(),g.Qb(25,"clr-dg-row",6),g.Qb(26,"clr-dg-cell"),g.Bc(27,"Item 2"),g.Pb(),g.Pb(),g.Qb(28,"clr-dg-row",7),g.Qb(29,"clr-dg-cell"),g.Bc(30,"Item 3"),g.Pb(),g.Pb(),g.Qb(31,"clr-dg-row",8),g.Qb(32,"clr-dg-cell"),g.Bc(33,"Item 4"),g.Pb(),g.Pb(),g.Qb(34,"clr-dg-row",9),g.Qb(35,"clr-dg-cell"),g.Bc(36,"Item 5"),g.Pb(),g.Pb(),g.Pb(),g.Lb(37,"clr-code-snippet",10),g.Pb(),g.Pb()),2&e&&(g.hc("title",t.title),g.zb(19),g.hc("clrDgSelected",t.selected),g.zb(18),g.hc("clrCode",t.noSelectAllExample))},directives:[s.a,u.o,u.ib,u.kb,u.eb,u.lb,u.q,u.hb,u.r,u.jb,u.p,u.gb,f.a],encapsulation:2}),a),m=o("JsA7"),h=o("tyNb"),w=o("XPsC"),P=((i=t(function e(){r(this,e)})).\u0275fac=function(e){return new(e||i)},i.\u0275mod=g.Ib({type:i}),i.\u0275inj=g.Hb({imports:[[d.c,u.a,m.a,w.a,h.g.forChild([{path:"",component:p}])]]}),i)}}])}();
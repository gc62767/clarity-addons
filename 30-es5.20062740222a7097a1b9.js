!function(){function t(t,l){for(var c=0;c<l.length;c++){var e=l[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function l(l,c,e){return c&&t(l.prototype,c),e&&t(l,e),l}function c(t,l){if(!(t instanceof l))throw new TypeError("Cannot call a class as a function")}function e(t,l){return(e=Object.setPrototypeOf||function(t,l){return t.__proto__=l,t})(t,l)}function r(t){var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var c,e=o(t);if(l){var r=o(this).constructor;c=Reflect.construct(e,arguments,r)}else c=e.apply(this,arguments);return b(this,c)}}function b(t,l){return!l||"object"!=typeof l&&"function"!=typeof l?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):l}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{selW:function(t,b,o){"use strict";o.r(b),o.d(b,"TreetableDemoModule",function(){return y});var n,a,i=o("ofXK"),P=o("tyNb"),Q=o("6Y1o"),s=o("8MG2"),u=o("XPsC"),d=o("3Pt+"),B=o("JsA7"),m=o("N+3j"),h=o("fXoL"),p=o("0G9f"),w=o("vAyd"),f=((a=function(t){!function(t,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(l&&l.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),l&&e(t,l)}(o,t);var b=r(o);function o(){var t;return c(this,o),(t=b.call(this,"treetable")).htmlExampleClickableRows="\n<clr-treetable>\n    <clr-tt-column>Name</clr-tt-column>\n    <clr-tt-column>Role</clr-tt-column>\n    <clr-tt-column>Random Number</clr-tt-column>\n    <clr-tt-column>Random Date</clr-tt-column>\n\n    <clr-tt-row>\n        <clr-tt-cell>David Wallace</clr-tt-cell>\n        <clr-tt-cell>CFO</clr-tt-cell>\n        <clr-tt-cell>2</clr-tt-cell>\n        <clr-tt-cell>2nd of August</clr-tt-cell>\n\n        <clr-tt-row>\n            <clr-tt-cell>Michael Scott</clr-tt-cell>\n            <clr-tt-cell>Regional Manager</clr-tt-cell>\n            <clr-tt-cell>19</clr-tt-cell>\n            <clr-tt-cell>3rd of April</clr-tt-cell>\n\n            <clr-tt-row>\n                <clr-tt-cell>Dwight K. Schrute</clr-tt-cell>\n                <clr-tt-cell>Assistant to the Regional Manager</clr-tt-cell>\n                <clr-tt-cell>290</clr-tt-cell>\n                <clr-tt-cell>17th of May</clr-tt-cell>\n            </clr-tt-row>\n            ...\n        </clr-tt-row>\n    </clr-tt-row>\n</clr-treetable>",t.htmlExampleClickableCaret='\n<clr-treetable [clrClickableRows]="false">\n    <clr-tt-column>Name</clr-tt-column>\n    <clr-tt-column>Role</clr-tt-column>\n    <clr-tt-column>Actor</clr-tt-column>\n\n    <clr-tt-row [clrExpanded]="true">\n        <clr-tt-cell>David Wallace</clr-tt-cell>\n        <clr-tt-cell>CFO</clr-tt-cell>\n        <clr-tt-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-tt-cell>\n    </clr-tt-row>\n    ...\n</clr-treetable>',t.htmlExampleCustomSize='\n<clr-treetable>\n    <clr-tt-column class="clr-col-9">Some column</clr-tt-column>\n    <clr-tt-column class="clr-col-3">Some other column</clr-tt-column>\n    <clr-tt-row clrExpandable="true">\n        ...\n    </clr-tt-row>\n</clr-treetable>',t.htmlExampleSingleRowAction='\n<clr-treetable>\n  <clr-tt-column>Some column</clr-tt-column>\n  <clr-tt-column>Some other column</clr-tt-column>\n  <clr-tt-row clrExpandable="true">\n    <clr-tt-action-overflow>\n      <button class="action-item">Test Action</button>\n    </clr-tt-action-overflow>\n    <clr-tt-cell>Lorem ipsum dolor sit amet</clr-tt-cell>\n    <clr-tt-cell>2</clr-tt-cell>\n    <clr-tt-row>\n      <clr-tt-cell>Lorem ipsum dolor sit amet</clr-tt-cell>\n      <clr-tt-cell>3</clr-tt-cell>\n    </clr-tt-row>\n  </clr-tt-row>\n  <clr-tt-row>\n    <clr-tt-cell>Lorem ipsum dolor sit amet</clr-tt-cell>\n    <clr-tt-cell>1</clr-tt-cell>\n  </clr-tt-row>\n</clr-treetable>\n',t}return l(o)}(m.a)).\u0275fac=function(t){return new(t||a)},a.\u0275cmp=h.Eb({type:a,selectors:[["clr-treetable-demo"]],hostVars:4,hostBindings:function(t,l){2&t&&h.Cb("content-area",!0)("dox-content-panel",!0)},features:[h.wb],decls:535,vars:7,consts:[[3,"title"],[1,"component-summary"],["id","design-guidelines"],[1,"list"],["href","https://clarity.design/documentation/tree-view"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["id","examples"],["clrExpandable","true"],[3,"clrCode"],[1,"clr-code"],[3,"clrClickableRows"],["clrExpandable","true",3,"clrExpanded"],["target","_blank","href","https://www.google.com"],[1,"action-item"],[1,"clr-col-9"],[1,"clr-col-3"]],template:function(t,l){if(1&t){h.Qb(0,"clr-doc-wrapper",0),h.Qb(1,"article"),h.Qb(2,"h5",1),h.Bc(3," Treetables are for organizing hierarchical data with multiple columns. "),h.Pb(),h.Qb(4,"div",2),h.Qb(5,"h3"),h.Bc(6,"Use When"),h.Pb(),h.Qb(7,"p"),h.Bc(8," Use this component when you need to display a hierarchichal data structure with multiple columns per entry. Make sure all entries use the same columns. E.g. the parent has a name and a description column, the child cannot have a name and a date column. "),h.Pb(),h.Qb(9,"h3"),h.Bc(10,"Do not use"),h.Pb(),h.Qb(11,"p"),h.Bc(12,"Avoid using this component in any of the following cases:"),h.Pb(),h.Qb(13,"ul",3),h.Qb(14,"li"),h.Bc(15," You require using a pagination. The treetable does not support paging. "),h.Pb(),h.Qb(16,"li"),h.Bc(17," The entries in your datastructure do not have multiple values (columns). Consider using a "),h.Qb(18,"a",4),h.Bc(19,"TreeView"),h.Pb(),h.Bc(20,". "),h.Pb(),h.Qb(21,"li"),h.Bc(22," Your elements need to be sorted. Since the data-rows are indented, a change of the order would cause confusion. "),h.Pb(),h.Pb(),h.Qb(23,"h3"),h.Bc(24,"Behavior"),h.Pb(),h.Qb(25,"p"),h.Bc(26," Each entry can have none, one or multiple descendants. The first column of a descendant-row is indentend to visualize the hierarchy. Parent rows are collapsed, i.e. all children rows are hidden initially. To display the children the user can either click on the leading caret-icon or the whole parent row, depending on the row-selection mode. Avoid the row-selection mode when the row contains individually clickable items. "),h.Pb(),h.Qb(27,"h4"),h.Bc(28,"Sorting"),h.Pb(),h.Bc(29," The treetable cannot be sorted by the user. Display the entries in alphabetical order. Consider collapsing either all or none of the parent nodes. "),h.Qb(30,"h3"),h.Bc(31,"Technical limitations"),h.Pb(),h.Qb(32,"p"),h.Bc(33," Note that up to 6 levels of nesting are supported. "),h.Pb(),h.Qb(34,"h3"),h.Bc(35,"Summary of Options"),h.Pb(),h.Qb(36,"h4"),h.Bc(37,"clr-treetable"),h.Pb(),h.Qb(38,"table",5),h.Qb(39,"thead"),h.Qb(40,"tr"),h.Qb(41,"th",6),h.Bc(42,"Input/Output"),h.Pb(),h.Qb(43,"th",7),h.Bc(44,"Values"),h.Pb(),h.Qb(45,"th",8),h.Bc(46,"Default"),h.Pb(),h.Qb(47,"th",6),h.Bc(48,"Effect"),h.Pb(),h.Pb(),h.Pb(),h.Qb(49,"tbody"),h.Qb(50,"tr"),h.Qb(51,"td",6),h.Qb(52,"b"),h.Bc(53,"[clrClickableRows]"),h.Pb(),h.Qb(54,"div",9),h.Bc(55,"Type: boolean"),h.Pb(),h.Qb(56,"div",9),h.Bc(57,"Default: true"),h.Pb(),h.Pb(),h.Qb(58,"td",7),h.Bc(59,"boolean"),h.Pb(),h.Qb(60,"td",8),h.Bc(61,"true"),h.Pb(),h.Qb(62,"td",6),h.Bc(63,"Sets the [clrClickable] for every row"),h.Pb(),h.Pb(),h.Qb(64,"tr"),h.Qb(65,"td",6),h.Qb(66,"b"),h.Bc(67,"[clrHideHeader]"),h.Pb(),h.Qb(68,"div",9),h.Bc(69,"Type: boolean"),h.Pb(),h.Qb(70,"div",9),h.Bc(71,"Default: false"),h.Pb(),h.Pb(),h.Qb(72,"td",7),h.Bc(73,"boolean"),h.Pb(),h.Qb(74,"td",8),h.Bc(75,"false"),h.Pb(),h.Qb(76,"td",6),h.Bc(77,"Hides the header row"),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(78,"h4"),h.Bc(79,"clr-tt-row"),h.Pb(),h.Qb(80,"table",5),h.Qb(81,"thead"),h.Qb(82,"tr"),h.Qb(83,"th",6),h.Bc(84,"Input/Output"),h.Pb(),h.Qb(85,"th",7),h.Bc(86,"Values"),h.Pb(),h.Qb(87,"th",8),h.Bc(88,"Default"),h.Pb(),h.Qb(89,"th",6),h.Bc(90,"Effect"),h.Pb(),h.Pb(),h.Pb(),h.Qb(91,"tbody"),h.Qb(92,"tr"),h.Qb(93,"td",6),h.Qb(94,"b"),h.Bc(95,"[clrExpanded]"),h.Pb(),h.Qb(96,"div",9),h.Bc(97,"Type: boolean"),h.Pb(),h.Qb(98,"div",9),h.Bc(99,"Default: false"),h.Pb(),h.Pb(),h.Qb(100,"td",7),h.Bc(101,"boolean"),h.Pb(),h.Qb(102,"td",8),h.Bc(103,"false"),h.Pb(),h.Qb(104,"td",6),h.Bc(105,"Whether the row is expanded or not"),h.Pb(),h.Pb(),h.Qb(106,"tr"),h.Qb(107,"td",6),h.Qb(108,"b"),h.Bc(109,"[clrClickable]"),h.Pb(),h.Qb(110,"div",9),h.Bc(111,"Type: boolean"),h.Pb(),h.Qb(112,"div",9),h.Bc(113,"Default: true"),h.Pb(),h.Pb(),h.Qb(114,"td",7),h.Bc(115,"boolean"),h.Pb(),h.Qb(116,"td",8),h.Bc(117,"true"),h.Pb(),h.Qb(118,"td",6),h.Bc(119," Whether the whole row is clickable to expand it "),h.Pb(),h.Pb(),h.Qb(120,"tr"),h.Qb(121,"td",6),h.Qb(122,"b"),h.Bc(123,"[clrExpandable]"),h.Pb(),h.Qb(124,"div",9),h.Bc(125,"Type: boolean"),h.Pb(),h.Qb(126,"div",9),h.Bc(127,"Default: false"),h.Pb(),h.Pb(),h.Qb(128,"td",7),h.Bc(129,"boolean"),h.Pb(),h.Qb(130,"td",8),h.Bc(131,"false"),h.Pb(),h.Qb(132,"td",6),h.Bc(133," Whether the row is expandable (also shows caret icons) "),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(134,"div",10),h.Qb(135,"h3"),h.Bc(136,"Code & Examples"),h.Pb(),h.Qb(137,"h4"),h.Bc(138,"Treetable with clickable rows"),h.Pb(),h.Qb(139,"p"),h.Bc(140," Click on a row to display its children. "),h.Pb(),h.Qb(141,"clr-treetable"),h.Qb(142,"clr-tt-column"),h.Bc(143,"Name"),h.Pb(),h.Qb(144,"clr-tt-column"),h.Bc(145,"Role"),h.Pb(),h.Qb(146,"clr-tt-column"),h.Bc(147,"Random Number"),h.Pb(),h.Qb(148,"clr-tt-column"),h.Bc(149,"Random Date"),h.Pb(),h.Qb(150,"clr-tt-row",11),h.Qb(151,"clr-tt-cell"),h.Bc(152,"David Wallace"),h.Pb(),h.Qb(153,"clr-tt-cell"),h.Bc(154,"CFO"),h.Pb(),h.Qb(155,"clr-tt-cell"),h.Bc(156,"2"),h.Pb(),h.Qb(157,"clr-tt-cell"),h.Bc(158,"2nd of August"),h.Pb(),h.Qb(159,"clr-tt-row",11),h.Qb(160,"clr-tt-cell"),h.Bc(161,"Michael Scott"),h.Pb(),h.Qb(162,"clr-tt-cell"),h.Bc(163,"Regional Manager"),h.Pb(),h.Qb(164,"clr-tt-cell"),h.Bc(165,"19"),h.Pb(),h.Qb(166,"clr-tt-cell"),h.Bc(167,"3rd of April"),h.Pb(),h.Qb(168,"clr-tt-row"),h.Qb(169,"clr-tt-cell"),h.Bc(170,"Dwight K. Schrute"),h.Pb(),h.Qb(171,"clr-tt-cell"),h.Bc(172,"Assistant to the Regional Manager"),h.Pb(),h.Qb(173,"clr-tt-cell"),h.Bc(174,"290"),h.Pb(),h.Qb(175,"clr-tt-cell"),h.Bc(176,"17th of May"),h.Pb(),h.Pb(),h.Qb(177,"clr-tt-row",11),h.Qb(178,"clr-tt-cell"),h.Bc(179,"Jim Halpert"),h.Pb(),h.Qb(180,"clr-tt-cell"),h.Bc(181,"Head of Sales"),h.Pb(),h.Qb(182,"clr-tt-cell"),h.Bc(183,"Lucky 7"),h.Pb(),h.Qb(184,"clr-tt-cell"),h.Bc(185,"21st of December"),h.Pb(),h.Qb(186,"clr-tt-row"),h.Qb(187,"clr-tt-cell"),h.Bc(188,"Andy Bernard"),h.Pb(),h.Lb(189,"clr-tt-cell"),h.Qb(190,"clr-tt-cell"),h.Bc(191,"13"),h.Pb(),h.Qb(192,"clr-tt-cell"),h.Bc(193,"1st of December"),h.Pb(),h.Pb(),h.Qb(194,"clr-tt-row"),h.Qb(195,"clr-tt-cell"),h.Bc(196,"Stanley Hudson"),h.Pb(),h.Lb(197,"clr-tt-cell"),h.Qb(198,"clr-tt-cell"),h.Bc(199,"3"),h.Pb(),h.Qb(200,"clr-tt-cell"),h.Bc(201,"15th of November"),h.Pb(),h.Pb(),h.Qb(202,"clr-tt-row"),h.Qb(203,"clr-tt-cell"),h.Bc(204,"Phyllis Vance"),h.Pb(),h.Lb(205,"clr-tt-cell"),h.Lb(206,"clr-tt-cell"),h.Lb(207,"clr-tt-cell"),h.Pb(),h.Qb(208,"clr-tt-row"),h.Qb(209,"clr-tt-cell"),h.Bc(210,"Todd Packer"),h.Pb(),h.Qb(211,"clr-tt-cell"),h.Bc(212,"The Packman"),h.Pb(),h.Qb(213,"clr-tt-cell"),h.Bc(214,"96"),h.Pb(),h.Qb(215,"clr-tt-cell"),h.Bc(216,"6th of September"),h.Pb(),h.Pb(),h.Pb(),h.Qb(217,"clr-tt-row",11),h.Qb(218,"clr-tt-cell"),h.Bc(219,"Angela Martin"),h.Pb(),h.Qb(220,"clr-tt-cell"),h.Bc(221,"Head of Accounting"),h.Pb(),h.Qb(222,"clr-tt-cell"),h.Bc(223,"29"),h.Pb(),h.Qb(224,"clr-tt-cell"),h.Bc(225,"7th of September"),h.Pb(),h.Qb(226,"clr-tt-row"),h.Qb(227,"clr-tt-cell"),h.Bc(228,"Kevin Malone"),h.Pb(),h.Lb(229,"clr-tt-cell"),h.Qb(230,"clr-tt-cell"),h.Bc(231,"10"),h.Pb(),h.Qb(232,"clr-tt-cell"),h.Bc(233,"4th of June"),h.Pb(),h.Pb(),h.Qb(234,"clr-tt-row"),h.Qb(235,"clr-tt-cell"),h.Bc(236,"Oscar Martinez"),h.Pb(),h.Lb(237,"clr-tt-cell"),h.Qb(238,"clr-tt-cell"),h.Bc(239,"11"),h.Pb(),h.Qb(240,"clr-tt-cell"),h.Bc(241,"9th of June"),h.Pb(),h.Pb(),h.Pb(),h.Qb(242,"clr-tt-row",11),h.Qb(243,"clr-tt-cell"),h.Bc(244,"Kelly Kapoor"),h.Pb(),h.Qb(245,"clr-tt-cell"),h.Bc(246,"Head of Customer Service"),h.Pb(),h.Qb(247,"clr-tt-cell"),h.Bc(248,"1"),h.Pb(),h.Lb(249,"clr-tt-cell"),h.Qb(250,"clr-tt-row"),h.Qb(251,"clr-tt-cell"),h.Bc(252,"Ryan Howard"),h.Pb(),h.Qb(253,"clr-tt-cell"),h.Bc(254,"Temp"),h.Pb(),h.Lb(255,"clr-tt-cell"),h.Lb(256,"clr-tt-cell"),h.Pb(),h.Pb(),h.Qb(257,"clr-tt-row"),h.Qb(258,"clr-tt-cell"),h.Bc(259,"Creed Bratton"),h.Pb(),h.Qb(260,"clr-tt-cell"),h.Bc(261,"Quality Assurance"),h.Pb(),h.Qb(262,"clr-tt-cell"),h.Bc(263,"3"),h.Pb(),h.Qb(264,"clr-tt-cell"),h.Bc(265,"Early 1900s"),h.Pb(),h.Pb(),h.Qb(266,"clr-tt-row"),h.Qb(267,"clr-tt-cell"),h.Bc(268,"Meredith Palmer"),h.Pb(),h.Qb(269,"clr-tt-cell"),h.Bc(270,"Supplier Relations"),h.Pb(),h.Lb(271,"clr-tt-cell"),h.Lb(272,"clr-tt-cell"),h.Pb(),h.Qb(273,"clr-tt-row"),h.Qb(274,"clr-tt-cell"),h.Bc(275,"Toby Flenderson"),h.Pb(),h.Qb(276,"clr-tt-cell"),h.Bc(277,"Human Resources"),h.Pb(),h.Qb(278,"clr-tt-cell"),h.Bc(279,"0"),h.Pb(),h.Qb(280,"clr-tt-cell"),h.Bc(281,"Ugh..."),h.Pb(),h.Pb(),h.Qb(282,"clr-tt-row"),h.Qb(283,"clr-tt-cell"),h.Bc(284,"Pam Beesly"),h.Pb(),h.Qb(285,"clr-tt-cell"),h.Bc(286,"Reception"),h.Pb(),h.Qb(287,"clr-tt-cell"),h.Bc(288,"10"),h.Pb(),h.Qb(289,"clr-tt-cell"),h.Bc(290,"4th of July"),h.Pb(),h.Pb(),h.Qb(291,"clr-tt-row"),h.Qb(292,"clr-tt-cell"),h.Bc(293,"Darryl Philbin"),h.Pb(),h.Qb(294,"clr-tt-cell"),h.Bc(295,"Warehouse"),h.Pb(),h.Qb(296,"clr-tt-cell"),h.Bc(297,"99"),h.Pb(),h.Qb(298,"clr-tt-cell"),h.Bc(299,"31st of August"),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(300,"clr-tt-row"),h.Qb(301,"clr-tt-cell"),h.Bc(302,"Some Dude - you probably know him, but he definitely knows you!"),h.Pb(),h.Qb(303,"clr-tt-cell"),h.Bc(304,"N/A"),h.Pb(),h.Qb(305,"clr-tt-cell"),h.Bc(306,"-1"),h.Pb(),h.Qb(307,"clr-tt-cell"),h.Bc(308,"1st of April"),h.Pb(),h.Pb(),h.Pb(),h.Lb(309,"clr-code-snippet",12),h.Qb(310,"h4"),h.Bc(311,"Treetable with clickable carets and expanded rows"),h.Pb(),h.Qb(312,"p"),h.Bc(313," Sometimes you might want to have links or buttons inside your rows. Click event bubbling might prevent clicking on said links without expanding or contracting that row. Additionally, you can have rows that are expanded by default using the "),h.Qb(314,"code",13),h.Bc(315,"clrExpanded"),h.Pb(),h.Bc(316," input property. "),h.Pb(),h.Qb(317,"clr-treetable",14),h.Qb(318,"clr-tt-column"),h.Bc(319,"Name"),h.Pb(),h.Qb(320,"clr-tt-column"),h.Bc(321,"Role"),h.Pb(),h.Qb(322,"clr-tt-column"),h.Bc(323,"Actor"),h.Pb(),h.Qb(324,"clr-tt-row",15),h.Qb(325,"clr-tt-cell"),h.Bc(326,"David Wallace"),h.Pb(),h.Qb(327,"clr-tt-cell"),h.Bc(328,"CFO"),h.Pb(),h.Qb(329,"clr-tt-cell"),h.Qb(330,"a",16),h.Bc(331,"Some actor"),h.Pb(),h.Pb(),h.Qb(332,"clr-tt-row",11),h.Qb(333,"clr-tt-cell"),h.Bc(334,"Michael Scott"),h.Pb(),h.Qb(335,"clr-tt-cell"),h.Bc(336,"Regional Manager"),h.Pb(),h.Qb(337,"clr-tt-cell"),h.Qb(338,"a",16),h.Bc(339,"Some actor"),h.Pb(),h.Pb(),h.Qb(340,"clr-tt-row"),h.Qb(341,"clr-tt-cell"),h.Bc(342,"Dwight K. Schrute"),h.Pb(),h.Qb(343,"clr-tt-cell"),h.Bc(344,"Assistant to the Regional Manager"),h.Pb(),h.Qb(345,"clr-tt-cell"),h.Qb(346,"a",16),h.Bc(347,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Qb(348,"clr-tt-row"),h.Qb(349,"clr-tt-cell"),h.Bc(350,"Jim Halpert"),h.Pb(),h.Qb(351,"clr-tt-cell"),h.Bc(352,"Head of Sales"),h.Pb(),h.Qb(353,"clr-tt-cell"),h.Qb(354,"a",16),h.Bc(355,"Some actor"),h.Pb(),h.Pb(),h.Qb(356,"clr-tt-row"),h.Qb(357,"clr-tt-cell"),h.Bc(358,"Andy Bernard"),h.Pb(),h.Lb(359,"clr-tt-cell"),h.Qb(360,"clr-tt-cell"),h.Qb(361,"a",16),h.Bc(362,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Qb(363,"clr-tt-row"),h.Qb(364,"clr-tt-cell"),h.Bc(365,"Stanley Hudson"),h.Pb(),h.Lb(366,"clr-tt-cell"),h.Qb(367,"clr-tt-cell"),h.Qb(368,"a",16),h.Bc(369,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Qb(370,"clr-tt-row"),h.Qb(371,"clr-tt-cell"),h.Bc(372,"Phyllis Vance"),h.Pb(),h.Lb(373,"clr-tt-cell"),h.Qb(374,"clr-tt-cell"),h.Qb(375,"a",16),h.Bc(376,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Qb(377,"clr-tt-row"),h.Qb(378,"clr-tt-cell"),h.Bc(379,"Todd Packer"),h.Pb(),h.Qb(380,"clr-tt-cell"),h.Bc(381,"The Packman"),h.Pb(),h.Qb(382,"clr-tt-cell"),h.Qb(383,"a",16),h.Bc(384,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(385,"clr-tt-row",11),h.Qb(386,"clr-tt-cell"),h.Bc(387,"Angela Martin"),h.Pb(),h.Qb(388,"clr-tt-cell"),h.Bc(389,"Head of Accounting"),h.Pb(),h.Qb(390,"clr-tt-cell"),h.Qb(391,"a",16),h.Bc(392,"Some actor"),h.Pb(),h.Pb(),h.Qb(393,"clr-tt-row"),h.Qb(394,"clr-tt-cell"),h.Bc(395,"Kevin Malone"),h.Pb(),h.Lb(396,"clr-tt-cell"),h.Qb(397,"clr-tt-cell"),h.Qb(398,"a",16),h.Bc(399,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Qb(400,"clr-tt-row"),h.Qb(401,"clr-tt-cell"),h.Bc(402,"Oscar Martinez"),h.Pb(),h.Lb(403,"clr-tt-cell"),h.Qb(404,"clr-tt-cell"),h.Qb(405,"a",16),h.Bc(406,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(407,"clr-tt-row",11),h.Qb(408,"clr-tt-cell"),h.Bc(409,"Kelly Kapoor"),h.Pb(),h.Qb(410,"clr-tt-cell"),h.Bc(411,"Head of Customer Service"),h.Pb(),h.Qb(412,"clr-tt-cell"),h.Qb(413,"a",16),h.Bc(414,"Some actor"),h.Pb(),h.Pb(),h.Qb(415,"clr-tt-row"),h.Qb(416,"clr-tt-cell"),h.Bc(417,"Ryan Howard"),h.Pb(),h.Qb(418,"clr-tt-cell"),h.Bc(419,"Temp"),h.Pb(),h.Qb(420,"clr-tt-cell"),h.Qb(421,"a",16),h.Bc(422,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(423,"clr-tt-row"),h.Qb(424,"clr-tt-cell"),h.Bc(425,"Creed Bratton"),h.Pb(),h.Qb(426,"clr-tt-cell"),h.Bc(427,"Quality Assurance"),h.Pb(),h.Qb(428,"clr-tt-cell"),h.Qb(429,"a",16),h.Bc(430,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Qb(431,"clr-tt-row"),h.Qb(432,"clr-tt-cell"),h.Bc(433,"Meredith Palmer"),h.Pb(),h.Qb(434,"clr-tt-cell"),h.Bc(435,"Supplier Relations"),h.Pb(),h.Qb(436,"clr-tt-cell"),h.Qb(437,"a",16),h.Bc(438,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Qb(439,"clr-tt-row"),h.Qb(440,"clr-tt-cell"),h.Bc(441,"Toby Flenderson"),h.Pb(),h.Qb(442,"clr-tt-cell"),h.Bc(443,"Human Resources"),h.Pb(),h.Qb(444,"clr-tt-cell"),h.Qb(445,"a",16),h.Bc(446,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Qb(447,"clr-tt-row"),h.Qb(448,"clr-tt-cell"),h.Bc(449,"Pam Beesly"),h.Pb(),h.Qb(450,"clr-tt-cell"),h.Bc(451,"Reception"),h.Pb(),h.Qb(452,"clr-tt-cell"),h.Qb(453,"a",16),h.Bc(454,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Qb(455,"clr-tt-row"),h.Qb(456,"clr-tt-cell"),h.Bc(457,"Darryl Philbin"),h.Pb(),h.Qb(458,"clr-tt-cell"),h.Bc(459,"Warehouse"),h.Pb(),h.Qb(460,"clr-tt-cell"),h.Qb(461,"a",16),h.Bc(462,"Some actor"),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(463,"clr-tt-row"),h.Qb(464,"clr-tt-cell"),h.Bc(465,"Some Dude"),h.Pb(),h.Qb(466,"clr-tt-cell"),h.Bc(467,"N/A"),h.Pb(),h.Qb(468,"clr-tt-cell"),h.Bc(469,"You know him, nothing more to see"),h.Pb(),h.Pb(),h.Pb(),h.Lb(470,"clr-code-snippet",12),h.Qb(471,"h4"),h.Bc(472,"Treetable with single row actions"),h.Pb(),h.Qb(473,"p"),h.Bc(474," To show single row actions add "),h.Qb(475,"code",13),h.Bc(476,"clr-tt-action-overflow"),h.Pb(),h.Bc(477," inside a "),h.Qb(478,"code",13),h.Bc(479,"clr-tt-row"),h.Pb(),h.Pb(),h.Qb(480,"clr-treetable"),h.Qb(481,"clr-tt-column"),h.Bc(482,"Some column"),h.Pb(),h.Qb(483,"clr-tt-column"),h.Bc(484,"Some other column"),h.Pb(),h.Qb(485,"clr-tt-row",11),h.Qb(486,"clr-tt-action-overflow"),h.Qb(487,"button",17),h.Bc(488,"Test Action"),h.Pb(),h.Pb(),h.Qb(489,"clr-tt-cell"),h.Bc(490,"Lorem ipsum dolor sit amet"),h.Pb(),h.Qb(491,"clr-tt-cell"),h.Bc(492,"2"),h.Pb(),h.Qb(493,"clr-tt-row"),h.Qb(494,"clr-tt-cell"),h.Bc(495,"Lorem ipsum dolor sit amet"),h.Pb(),h.Qb(496,"clr-tt-cell"),h.Bc(497,"3"),h.Pb(),h.Pb(),h.Pb(),h.Qb(498,"clr-tt-row"),h.Qb(499,"clr-tt-cell"),h.Bc(500,"Lorem ipsum dolor sit amet"),h.Pb(),h.Qb(501,"clr-tt-cell"),h.Bc(502,"1"),h.Pb(),h.Pb(),h.Pb(),h.Lb(503,"clr-code-snippet",12),h.Qb(504,"h4"),h.Bc(505,"Custom column sizing"),h.Pb(),h.Qb(506,"p"),h.Bc(507," For custom column widths use the "),h.Qb(508,"code",13),h.Bc(509,"clr-col-"),h.Pb(),h.Bc(510," classes on the header columns "),h.Qb(511,"code",13),h.Bc(512,"clr-tt-column"),h.Pb(),h.Bc(513,". The cells in the body will adjust accordingly automatically. "),h.Pb(),h.Qb(514,"clr-treetable"),h.Qb(515,"clr-tt-column",18);h.Bc(516,"Some column"),h.Pb(),h.Qb(517,"clr-tt-column",19),h.Bc(518,"Some other column"),h.Pb(),h.Qb(519,"clr-tt-row",11),h.Qb(520,"clr-tt-cell"),h.Bc(521,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus dignissimos, ducimus..."),h.Pb(),h.Qb(522,"clr-tt-cell"),h.Bc(523,"2"),h.Pb(),h.Qb(524,"clr-tt-row"),h.Qb(525,"clr-tt-cell"),h.Bc(526,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda, at atque dignissimos ..."),h.Pb(),h.Qb(527,"clr-tt-cell"),h.Bc(528,"3"),h.Pb(),h.Pb(),h.Pb(),h.Qb(529,"clr-tt-row"),h.Qb(530,"clr-tt-cell"),h.Bc(531,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut cumque ex libero, minus ..."),h.Pb(),h.Qb(532,"clr-tt-cell"),h.Bc(533,"1"),h.Pb(),h.Pb(),h.Pb(),h.Lb(534,"clr-code-snippet",12),h.Pb(),h.Pb(),h.Pb()}2&t&&(h.hc("title",l.title),h.zb(309),h.hc("clrCode",l.htmlExampleClickableRows),h.zb(8),h.hc("clrClickableRows",!1),h.zb(7),h.hc("clrExpanded",!0),h.zb(146),h.hc("clrCode",l.htmlExampleClickableCaret),h.zb(33),h.hc("clrCode",l.htmlExampleSingleRowAction),h.zb(31),h.hc("clrCode",l.htmlExampleCustomSize))},directives:[p.a,Q.L,Q.R,Q.O,Q.S,Q.P,Q.T,Q.N,Q.U,w.a,Q.M],encapsulation:2}),a),y=((n=l(function t(){c(this,t)})).\u0275fac=function(t){return new(t||n)},n.\u0275mod=h.Ib({type:n}),n.\u0275inj=h.Hb({imports:[[i.c,u.a,B.a,P.g.forChild([{path:"",component:f}]),d.h,s.a,Q.b]]}),n)}}])}();
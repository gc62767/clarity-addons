"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[309],{52309:(b,m,c)=>{c.r(m),c.d(m,{NumericFieldDemoModule:()=>v});var d=c(36895),l=c(90433),s=c(14931),o=c(70897),r=c(4965),p=c(24603),Z=c(62678),g=c(11489),e=c(98256),U=c(71884),A=c(29031);let x=(()=>{class n extends g.K{constructor(){super("numericfield"),this.htmlExample='\n<form clrForm clrLayout="vertical" [formGroup]="exampleForm">\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               type="text"\n               formControlName="money"\n               [clrUnit]="\'\u20ac\'"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Percentage</label>\n        <input clrInput clrNumeric\n               type="text"\n               formControlName="percentage"\n               [clrUnit]="\'%\'"\n               [clrDecimalPlaces]="0"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',this.htmlExample2='\n<form clrForm>\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'\u20ac\'"\n               [(ngModel)]="money"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Percentage</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'%\'"\n               [(ngModel)]="percentage"\n               [clrDecimalPlaces]="0"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',this.htmlExample3='\n<form clrForm>\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'\u20ac\'"\n               [clrUnitPosition]="\'left\'"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n</form>\n',this.htmlExample4='\n<form clrForm [formGroup]="exampleForm2">\n    <clr-input-container>\n        <label>Rounded Value</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               formControlName="money1"\n               [clrUnit]="\'\u20ac\'"\n               [clrRoundDisplayValue]="true"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Original Value</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               formControlName="money2"\n               [clrUnit]="\'\u20ac\'"\n               [clrDecimalPlaces]="5"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',this.tsExample='\nimport { FormControl, FormGroup, Validators } from "@angular/forms";\nimport { ClrNumericFieldValidators } from "@porscheinformatik/clr-addons";\n\nexampleForm = new FormGroup({\n    money: new FormControl(undefined, {\n        validators: [ClrNumericFieldValidators.min(0, ".", ","), ClrNumericFieldValidators.max(10000, ".", ","), Validators.required],\n        updateOn: "blur",\n    }),\n    percentage: new FormControl(undefined, {\n        validators: [ClrNumericFieldValidators.min(0, ".", ","), ClrNumericFieldValidators.max(100, ".", ","), Validators.required],\n        updateOn: "blur",\n    }),\n});\n',this.exampleForm=new l.cw({money:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),r.M7o.max(1e4,".",","),l.kI.required],updateOn:"blur"}),percentage:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),r.M7o.max(100,".",","),l.kI.required],updateOn:"blur"})}),this.exampleForm2=new l.cw({money1:new l.NI(89.99999,{validators:[r.M7o.min(0,".",","),r.M7o.max(100,".",","),l.kI.required],updateOn:"blur"}),money2:new l.NI(89.99999,{validators:[r.M7o.min(0,".",","),r.M7o.max(100,".",","),l.kI.required],updateOn:"blur"})}),this.usageForm=new l.cw({money:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),l.kI.required],updateOn:"blur"}),weight:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),l.kI.required],updateOn:"blur"}),emission:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),l.kI.required],updateOn:"blur"}),kilometres:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),l.kI.required],updateOn:"blur"}),cubic:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),l.kI.required],updateOn:"blur"}),millimetres:new l.NI(void 0,{validators:[l.kI.required],updateOn:"blur"}),kilowatt:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),l.kI.required],updateOn:"blur"}),timeunit:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),l.kI.required],updateOn:"blur"}),horsepower:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),l.kI.required],updateOn:"blur"}),percentage:new l.NI(void 0,{validators:[r.M7o.min(0,".",","),r.M7o.max(100,".",","),l.kI.required],updateOn:"blur"})})}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["clr-numericfield-demo"]],hostVars:4,hostBindings:function(i,t){2&i&&e.ekj("content-area",!0)("dox-content-panel",!0)},features:[e.qOj],decls:356,vars:39,consts:[[3,"title"],[1,"component-summary"],["id","usage"],[1,"list"],["clrForm","","clrLayout","horizontal",3,"formGroup"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac","formControlName","money",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","clrUnit","kg","formControlName","weight",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12"],["clrInput","","clrNumeric","","type","text","clrUnit","g/km","formControlName","emission",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","km","formControlName","kilometres",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","cc","formControlName","cubic",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","mm","formControlName","millimetres",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","kW","formControlName","kilowatt",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","TU","formControlName","timeunit",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12"],["clrInput","","clrNumeric","","type","text","clrUnit","hp","formControlName","horsepower",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","%","formControlName","percentage",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],[1,"clr-row"],[1,"clr-col-md-12","clr-col-lg-6"],[1,"clrweb-DoxMedia","is-do-block"],[1,"clrweb-DoxMedia-block"],["clrForm","","clrLayout","horizontal"],[1,"clr-col-4"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac",1,"clr-col-md-5","clr-col-sm-12",3,"clrAutofillDecimals"],[1,"clrweb-DoxMedia-text"],[1,"clrweb-DoxMedia-do-dont"],[1,"clrweb-DoxMedia","is-dont-block"],["clrInput","","type","text",1,"clr-col-md-5","clr-col-sm-12"],["id","code-examples"],["id","examples"],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["clrForm","","clrLayout","vertical",3,"formGroup"],["clrInput","","clrNumeric","","type","text","formControlName","money",3,"clrUnit","clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","formControlName","percentage",3,"clrUnit","clrDecimalPlaces"],[3,"clrCode"],["clrLanguage","typescript",3,"clrCode"],["clrForm",""],["clrInput","","clrNumeric","","type","text","name","money",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","ngModel","clrAutofillDecimals","ngModelChange"],["clrInput","","clrNumeric","","type","text","name","percentage",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","ngModel","clrDecimalPlaces","ngModelChange"],["clrInput","","clrNumeric","","type","text",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrUnitPosition","clrAutofillDecimals"],["clrForm","",3,"formGroup"],["clrInput","","clrNumeric","","type","text","formControlName","money1",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrRoundDisplayValue","clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","formControlName","money2",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrDecimalPlaces","clrAutofillDecimals"]],template:function(i,t){1&i&&(e.TgZ(0,"clr-doc-wrapper",0)(1,"article")(2,"h5",1),e._uU(3,"The Numeric Field is used to enter numeric values of a certain type."),e.qZA(),e.TgZ(4,"h3",2),e._uU(5,"Usage"),e.qZA(),e.TgZ(6,"ul")(7,"li"),e._uU(8,"Invalid characters are ignored during input."),e.qZA(),e.TgZ(9,"li"),e._uU(10,"Amount of decimal places should be defined according to the input type and usecase."),e.qZA(),e.TgZ(11,"li"),e._uU(12,"Decimal separator and grouping separator should be set according to locale."),e.qZA()(),e.TgZ(13,"h3"),e._uU(14,"Use when"),e.qZA(),e.TgZ(15,"ul",3)(16,"li"),e._uU(17,"One of the following inputs is required from the user:"),e.qZA()(),e.TgZ(18,"form",4)(19,"clr-input-container")(20,"label"),e._uU(21,"Money Amount"),e.qZA(),e._UZ(22,"input",5),e.TgZ(23,"clr-control-error"),e._uU(24,"Please enter a value greater than or equal to 0"),e.qZA()(),e.TgZ(25,"clr-input-container")(26,"label"),e._uU(27,"Weight"),e.qZA(),e._UZ(28,"input",6),e.TgZ(29,"clr-control-error"),e._uU(30,"Please enter a value greater than or equal to 0"),e.qZA()(),e.TgZ(31,"clr-input-container")(32,"label"),e._uU(33,"Emission"),e.qZA(),e._UZ(34,"input",7),e.TgZ(35,"clr-control-error"),e._uU(36,"Please enter a value greater than or equal to 0"),e.qZA()(),e.TgZ(37,"clr-input-container")(38,"label"),e._uU(39,"Kilometer Reading"),e.qZA(),e._UZ(40,"input",8),e.TgZ(41,"clr-control-error"),e._uU(42,"Please enter a value greater than or equal to 0"),e.qZA()(),e.TgZ(43,"clr-input-container")(44,"label"),e._uU(45,"Cubic Capacity"),e.qZA(),e._UZ(46,"input",9),e.TgZ(47,"clr-control-error"),e._uU(48,"Please enter a value greater than or equal to 0"),e.qZA()(),e.TgZ(49,"clr-input-container")(50,"label"),e._uU(51,"Millimeter"),e.qZA(),e._UZ(52,"input",10),e.TgZ(53,"clr-control-error"),e._uU(54,"Please enter a value greater than or equal to 0"),e.qZA()(),e.TgZ(55,"clr-input-container")(56,"label"),e._uU(57,"Kilowatt"),e.qZA(),e._UZ(58,"input",11),e.TgZ(59,"clr-control-error"),e._uU(60,"Please enter a value greater than or equal to 0"),e.qZA()(),e.TgZ(61,"clr-input-container")(62,"label"),e._uU(63,"Timeunit"),e.qZA(),e._UZ(64,"input",12),e.TgZ(65,"clr-control-error"),e._uU(66,"Please enter a value greater than or equal to 0"),e.qZA()(),e.TgZ(67,"clr-input-container")(68,"label"),e._uU(69,"Horsepower"),e.qZA(),e._UZ(70,"input",13),e.TgZ(71,"clr-control-error"),e._uU(72,"Please enter a value greater than or equal to 0"),e.qZA()(),e.TgZ(73,"clr-input-container")(74,"label"),e._uU(75,"Percentage"),e.qZA(),e._UZ(76,"input",14),e.TgZ(77,"clr-control-error"),e._uU(78,"Please enter a value between 0 and 100 (including)."),e.qZA()()(),e.TgZ(79,"div",15)(80,"div",16)(81,"div",17)(82,"div",18)(83,"form",19)(84,"clr-input-container")(85,"label",20),e._uU(86,"Price (gross)"),e.qZA(),e._UZ(87,"input",21),e.TgZ(88,"clr-control-error"),e._uU(89,"Please enter a value greater than 0"),e.qZA()(),e.TgZ(90,"clr-input-container")(91,"label",20),e._uU(92,"Price (net)"),e.qZA(),e._UZ(93,"input",21),e.TgZ(94,"clr-control-error"),e._uU(95,"Please enter a value greater than 0"),e.qZA()()()(),e.TgZ(96,"div",22)(97,"h6",23),e._uU(98,"Do"),e.qZA(),e.TgZ(99,"p"),e._uU(100,"Use the numeric field consistently for the listed input types."),e.qZA()()()(),e.TgZ(101,"div",16)(102,"div",24)(103,"div",18)(104,"form",19)(105,"clr-input-container")(106,"label",20),e._uU(107,"Price (gross)"),e.qZA(),e._UZ(108,"input",25),e.TgZ(109,"clr-control-error"),e._uU(110,"Please enter a value greater than 0"),e.qZA()(),e.TgZ(111,"clr-input-container")(112,"label",20),e._uU(113,"Price (net)"),e.qZA(),e._UZ(114,"input",21),e.TgZ(115,"clr-control-error"),e._uU(116,"Please enter a value greater than 0"),e.qZA()()()(),e.TgZ(117,"div",22)(118,"h6",23),e._uU(119,"Don't"),e.qZA(),e.TgZ(120,"p"),e._uU(121,"Don't use normal input and numeric fields inconsistently."),e.qZA()()()()(),e.TgZ(122,"div",26)(123,"h3",27),e._uU(124,"Code & Examples"),e.qZA(),e.TgZ(125,"p"),e._uU(126," Because the numeric field is a directive, it can be applied on any "),e.TgZ(127,"code",28),e._uU(128,"input"),e.qZA(),e._uU(129," element. This makes the numeric field compatible with the existing "),e.TgZ(130,"code",28),e._uU(131,"ClrInputContainer"),e.qZA(),e._uU(132," and forms. See code examples below which include "),e.TgZ(133,"code",28),e._uU(134,"clr-control-error"),e.qZA(),e._uU(135," and "),e.TgZ(136,"code",28),e._uU(137,"clr-control-helper"),e.qZA(),e._uU(138," elements. "),e.qZA(),e.TgZ(139,"p"),e._uU(140,"The numeric field supports template driven as well as reactive forms, see the form demos below."),e.qZA(),e.TgZ(141,"p"),e._uU(142,"The numeric field requires you to use custom validators to validate min and max values:"),e.qZA(),e.TgZ(143,"ul")(144,"li"),e._uU(145,"Reactive: "),e.TgZ(146,"code",28),e._uU(147,"ClrNumericFieldValidators"),e.qZA()(),e.TgZ(148,"li"),e._uU(149," Template driven: "),e.TgZ(150,"code",28),e._uU(151,"clrMaxNumeric"),e.qZA(),e._uU(152," and "),e.TgZ(153,"code",28),e._uU(154,"clrMinNumeric"),e.qZA()()(),e.TgZ(155,"h2"),e._uU(156,"Angular Directive"),e.qZA(),e.TgZ(157,"h3"),e._uU(158,"Summary of Options"),e.qZA(),e.TgZ(159,"table",29)(160,"thead")(161,"tr")(162,"th",30),e._uU(163,"Input"),e.qZA(),e.TgZ(164,"th",31),e._uU(165,"Values"),e.qZA(),e.TgZ(166,"th",32),e._uU(167,"Default"),e.qZA(),e.TgZ(168,"th",30),e._uU(169,"Effect"),e.qZA()()(),e.TgZ(170,"tbody")(171,"tr")(172,"td",30)(173,"b"),e._uU(174,"[clrTextAlign]"),e.qZA(),e.TgZ(175,"div",33),e._uU(176,"Type: String"),e.qZA(),e.TgZ(177,"div",33),e._uU(178,'Default: "right"'),e.qZA()(),e.TgZ(179,"td",31),e._uU(180,"left, right"),e.qZA(),e.TgZ(181,"td",32),e._uU(182,'"right"'),e.qZA(),e.TgZ(183,"td",30),e._uU(184,"Defines the alignment of the text inside input field."),e.qZA()(),e.TgZ(185,"tr")(186,"td",30)(187,"b"),e._uU(188,"[clrDecimalSep]"),e.qZA(),e.TgZ(189,"div",33),e._uU(190,"Type: String"),e.qZA(),e.TgZ(191,"div",33),e._uU(192,'Default: ","'),e.qZA()(),e.TgZ(193,"td",31),e._uU(194,"Javascript String"),e.qZA(),e.TgZ(195,"td",32),e._uU(196,'","'),e.qZA(),e.TgZ(197,"td",30),e._uU(198,"Defines the decimal separator."),e.qZA()(),e.TgZ(199,"tr")(200,"td",30)(201,"b"),e._uU(202,"[clrGroupingSep]"),e.qZA(),e.TgZ(203,"div",33),e._uU(204,"Type: String"),e.qZA(),e.TgZ(205,"div",33),e._uU(206,'Default: "."'),e.qZA()(),e.TgZ(207,"td",31),e._uU(208,"Javascript String"),e.qZA(),e.TgZ(209,"td",32),e._uU(210,'"."'),e.qZA(),e.TgZ(211,"td",30),e._uU(212,"Defines the grouping separator."),e.qZA()(),e.TgZ(213,"tr")(214,"td",30)(215,"b"),e._uU(216,"[clrDecimalPlaces]"),e.qZA(),e.TgZ(217,"div",33),e._uU(218,"Type: Number"),e.qZA(),e.TgZ(219,"div",33),e._uU(220,"Default: 2"),e.qZA()(),e.TgZ(221,"td",31),e._uU(222,"Javascript Number"),e.qZA(),e.TgZ(223,"td",32),e._uU(224,"2"),e.qZA(),e.TgZ(225,"td",30),e._uU(226,"Defines the number of allowed decimal places."),e.qZA()(),e.TgZ(227,"tr")(228,"td",30)(229,"b"),e._uU(230,"[clrAutofillDecimals]"),e.qZA(),e.TgZ(231,"div",33),e._uU(232,"Type: Boolean"),e.qZA(),e.TgZ(233,"div",33),e._uU(234,"Default: false"),e.qZA()(),e.TgZ(235,"td",31),e._uU(236,"true, false"),e.qZA(),e.TgZ(237,"td",32),e._uU(238,"false"),e.qZA(),e.TgZ(239,"td",30),e._uU(240," Defines whether decimal places should automatically be filled with zeroes until clrDecimalPlaces is reached. Useful for money fields. "),e.qZA()(),e.TgZ(241,"tr")(242,"td",30)(243,"b"),e._uU(244,"[clrUnit]"),e.qZA(),e.TgZ(245,"div",33),e._uU(246,"Type: string"),e.qZA(),e.TgZ(247,"div",33),e._uU(248,'Default: ""'),e.qZA()(),e.TgZ(249,"td",31),e._uU(250,"Javascript String"),e.qZA(),e.TgZ(251,"td",32),e._uU(252,'""'),e.qZA(),e.TgZ(253,"td",30),e._uU(254,"The unit to be displayed on top of the input field."),e.qZA()(),e.TgZ(255,"tr")(256,"td",30)(257,"b"),e._uU(258,"[clrUnitPosition]"),e.qZA(),e.TgZ(259,"div",33),e._uU(260,"Type: string"),e.qZA(),e.TgZ(261,"div",33),e._uU(262,'Default: "right"'),e.qZA()(),e.TgZ(263,"td",31),e._uU(264,'"left", "right"'),e.qZA(),e.TgZ(265,"td",32),e._uU(266,'"right"'),e.qZA(),e.TgZ(267,"td",30),e._uU(268,"Determines whether the unit is shown on the right or left side of the value."),e.qZA()(),e.TgZ(269,"tr")(270,"td",30)(271,"b"),e._uU(272,"[clrRoundDisplayValue]"),e.qZA(),e.TgZ(273,"div",33),e._uU(274,"Type: Boolean"),e.qZA(),e.TgZ(275,"div",33),e._uU(276,"Default: false"),e.qZA()(),e.TgZ(277,"td",31),e._uU(278,"true, false"),e.qZA(),e.TgZ(279,"td",32),e._uU(280,"false"),e.qZA(),e.TgZ(281,"td",30),e._uU(282,"Defines whether the value should be rounded or not."),e.qZA()()()(),e.TgZ(283,"h4"),e._uU(284,"Vertical Form (Reactive)"),e.qZA(),e.TgZ(285,"p"),e._uU(286,"In the following section you can find some examples with validation."),e.qZA(),e.TgZ(287,"form",34)(288,"clr-input-container")(289,"label"),e._uU(290,"Money"),e.qZA(),e._UZ(291,"input",35),e.TgZ(292,"clr-control-error"),e._uU(293,"Please enter a value between 0 and 10.000"),e.qZA()(),e.TgZ(294,"clr-input-container")(295,"label"),e._uU(296,"Percentage"),e.qZA(),e._UZ(297,"input",36),e.TgZ(298,"clr-control-error"),e._uU(299,"Please enter a value between 0 and 100"),e.qZA()()(),e._UZ(300,"clr-code-snippet",37)(301,"clr-code-snippet",38),e.TgZ(302,"h4"),e._uU(303,"Horizontal Form (Template Driven)"),e.qZA(),e.TgZ(304,"form",39)(305,"clr-input-container")(306,"label"),e._uU(307,"Money"),e.qZA(),e.TgZ(308,"input",40),e.NdJ("ngModelChange",function(u){return t.moneyTemplate=u}),e.qZA(),e.TgZ(309,"clr-control-error"),e._uU(310,"Please enter a value between 0 and 10.000"),e.qZA()(),e.TgZ(311,"clr-input-container")(312,"label"),e._uU(313,"Percentage"),e.qZA(),e.TgZ(314,"input",41),e.NdJ("ngModelChange",function(u){return t.percentageTemplate=u}),e.qZA(),e.TgZ(315,"clr-control-error"),e._uU(316,"Please enter a value between 0 and 100"),e.qZA()()(),e._UZ(317,"clr-code-snippet",37),e.TgZ(318,"h4"),e._uU(319,"Alignment"),e.qZA(),e.TgZ(320,"p"),e._uU(321,"For special usecases, if necessary the Unit and Value alignment can be defined independently."),e.qZA(),e.TgZ(322,"form",39)(323,"clr-input-container")(324,"label"),e._uU(325,"Money"),e.qZA(),e._UZ(326,"input",42),e.TgZ(327,"clr-control-error"),e._uU(328,"Please enter a value between 0 and 10.000"),e.qZA()()(),e._UZ(329,"clr-code-snippet",37),e.TgZ(330,"h4"),e._uU(331,"Rounding"),e.qZA(),e.TgZ(332,"p"),e._uU(333," If "),e.TgZ(334,"code"),e._uU(335,"[clrRoundDisplayValue]"),e.qZA(),e._uU(336," is "),e.TgZ(337,"code"),e._uU(338,"true"),e.qZA(),e._uU(339,", the displayed value is rounded."),e._UZ(340,"br"),e._uU(341," A change event is only fired, after the user modifies the input field. "),e.qZA(),e.TgZ(342,"form",43)(343,"clr-input-container")(344,"label"),e._uU(345,"Rounded Value"),e.qZA(),e._UZ(346,"input",44),e.TgZ(347,"clr-control-error"),e._uU(348,"Please enter a value between 0 and 100"),e.qZA()(),e.TgZ(349,"clr-input-container")(350,"label"),e._uU(351,"Original Value"),e.qZA(),e._UZ(352,"input",45),e.TgZ(353,"clr-control-error"),e._uU(354,"Please enter a value between 0 and 100"),e.qZA()()(),e._UZ(355,"clr-code-snippet",37),e.qZA()()()),2&i&&(e.Q6J("title",t.title),e.xp6(18),e.Q6J("formGroup",t.usageForm),e.xp6(4),e.Q6J("clrAutofillDecimals",!0),e.xp6(12),e.Q6J("clrDecimalPlaces",0),e.xp6(6),e.Q6J("clrDecimalPlaces",0),e.xp6(6),e.Q6J("clrDecimalPlaces",0),e.xp6(6),e.Q6J("clrDecimalPlaces",0),e.xp6(6),e.Q6J("clrDecimalPlaces",0),e.xp6(12),e.Q6J("clrDecimalPlaces",0),e.xp6(6),e.Q6J("clrDecimalPlaces",0),e.xp6(11),e.Q6J("clrAutofillDecimals",!0),e.xp6(6),e.Q6J("clrAutofillDecimals",!0),e.xp6(21),e.Q6J("clrAutofillDecimals",!0),e.xp6(173),e.Q6J("formGroup",t.exampleForm),e.xp6(4),e.Q6J("clrUnit","\u20ac")("clrAutofillDecimals",!0),e.xp6(6),e.Q6J("clrUnit","%")("clrDecimalPlaces",0),e.xp6(3),e.Q6J("clrCode",t.htmlExample),e.xp6(1),e.Q6J("clrCode",t.tsExample),e.xp6(7),e.Q6J("clrUnit","\u20ac")("ngModel",t.moneyTemplate)("clrAutofillDecimals",!0),e.xp6(6),e.Q6J("clrUnit","%")("ngModel",t.percentageTemplate)("clrDecimalPlaces",0),e.xp6(3),e.Q6J("clrCode",t.htmlExample2),e.xp6(9),e.Q6J("clrUnit","\u20ac")("clrUnitPosition","left")("clrAutofillDecimals",!0),e.xp6(3),e.Q6J("clrCode",t.htmlExample3),e.xp6(13),e.Q6J("formGroup",t.exampleForm2),e.xp6(4),e.Q6J("clrUnit","\u20ac")("clrRoundDisplayValue",!0)("clrAutofillDecimals",!0),e.xp6(6),e.Q6J("clrUnit","\u20ac")("clrDecimalPlaces",5)("clrAutofillDecimals",!0),e.xp6(3),e.Q6J("clrCode",t.htmlExample4))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,l.sg,l.u,o.MgK,o.VqA,o.YAP,o.mIp,o.xRP,o.G55,U.O,A.k,r.xdS,r.WxR,r.$e1],encapsulation:2}),n})(),v=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,l.u5,l.UX,o.K6A,o.AnW,p.A,Z.B,s.Bz.forChild([{path:"",component:x}]),r.mmz]}),n})()}}]);
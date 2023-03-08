"use strict";(self.webpackChunkclarity=self.webpackChunkclarity||[]).push([[592],{62678:(f,g,r)=>{r.d(g,{B:()=>m});var e=r(81180),t=r(36895),n=r(52653),p=r(24603),u=r(14931),d=r(41571);let m=(()=>{class i{}return(0,e.Z)(i,"\u0275fac",function(c){return new(c||i)}),(0,e.Z)(i,"\u0275mod",d.oAB({type:i})),(0,e.Z)(i,"\u0275inj",d.cJS({imports:[t.ez,n.K6A,p.A,u.Bz]})),i})()},29031:(f,g,r)=>{r.d(g,{k:()=>c});var e=r(81180),t=r(41571),n=r(36895),p=r(14931);let u=(()=>{class a{constructor(o,l){(0,e.Z)(this,"route",void 0),(0,e.Z)(this,"platformId",void 0),(0,e.Z)(this,"sub",void 0),this.route=o,this.platformId=l,this.sub=this.route.fragment.subscribe(h=>{this.scrollToAnchor(h,!1)})}ngOnInit(){this.scrollToAnchor(this.route.snapshot.fragment,!1)}scrollToAnchor(o,l=!0){if(o&&(0,n.NF)(this.platformId)){const h=document.querySelector("#"+o);h&&h.scrollIntoView({behavior:l?"smooth":"instant",block:"start"})}}ngOnDestroy(){this.sub.unsubscribe()}}return(0,e.Z)(a,"\u0275fac",function(o){return new(o||a)(t.Y36(p.gz),t.Y36(t.Lbi))}),(0,e.Z)(a,"\u0275dir",t.lG2({type:a,selectors:[["","hash-listener",""]]})),a})(),d=(()=>{class a{constructor(o){(0,e.Z)(this,"renderer",void 0),(0,e.Z)(this,"scrollable",void 0),(0,e.Z)(this,"anchors",[]),(0,e.Z)(this,"sub",void 0),(0,e.Z)(this,"linkElements",void 0),(0,e.Z)(this,"throttle",!1),(0,e.Z)(this,"scrollPosition",void 0),this.renderer=o}set links(o){this.anchors=o.map(l=>"#"+l.fragment),this.sub=o.changes.subscribe(()=>{this.anchors=o.map(l=>"#"+l.fragment)})}handleEvent(){this.scrollPosition=this.scrollable.scrollTop,this.throttle||window.requestAnimationFrame(()=>{let o=this.findCurrentAnchor()||0;this.linkElements.forEach((l,h)=>{h===o?this.renderer.addClass(l.nativeElement,"active"):this.renderer.removeClass(l.nativeElement,"active")}),this.throttle=!1}),this.throttle=!0}findCurrentAnchor(){for(let o=this.anchors.length-1;o>=0;o--){let l=this.anchors[o];if(this.scrollable.querySelector(l)&&this.scrollable.querySelector(l).offsetTop<=this.scrollPosition)return o}}ngOnInit(){this.scrollable.addEventListener("scroll",this)}ngOnDestroy(){this.scrollable&&this.scrollable.removeEventListener("scroll",this),this.sub&&this.sub.unsubscribe()}}return(0,e.Z)(a,"\u0275fac",function(o){return new(o||a)(t.Y36(t.Qsj))}),(0,e.Z)(a,"\u0275dir",t.lG2({type:a,selectors:[["","scrollspy",""]],contentQueries:function(o,l,h){if(1&o&&(t.Suo(h,p.rH,5),t.Suo(h,p.rH,5,t.SBq)),2&o){let v;t.iGM(v=t.CRH())&&(l.links=v),t.iGM(v=t.CRH())&&(l.linkElements=v)}},inputs:{scrollable:["scrollspy","scrollable"]}})),a})();function m(a,s){1&a&&(t.TgZ(0,"span",11),t._uU(1," Deprecated "),t.TgZ(2,"span",12),t._uU(3,"v7.0"),t.qZA()())}function i(a,s){if(1&a&&(t.TgZ(0,"h5"),t._uU(1),t.qZA()),2&a){const o=t.oxw();t.xp6(1),t.Oqu(o.description)}}const _=["*"];let c=(()=>{class a{constructor(){(0,e.Z)(this,"title",""),(0,e.Z)(this,"description",""),(0,e.Z)(this,"deprecated",!1)}}return(0,e.Z)(a,"\u0275fac",function(o){return new(o||a)}),(0,e.Z)(a,"\u0275cmp",t.Xpm({type:a,selectors:[["clr-doc-wrapper"]],hostVars:2,hostBindings:function(o,l){2&o&&t.ekj("dox-wrapper",!0)},inputs:{title:"title",description:"description",deprecated:"deprecated"},ngContentSelectors:_,decls:19,vars:4,consts:[[1,"dox-wrapper","dox-header","new-component-layout"],["class","label label-warning clr-align-middle",4,"ngIf"],[4,"ngIf"],[1,"dox-tabs"],[1,"list-unstyled",3,"scrollspy"],["routerLink",".","routerLinkActive","active","fragment","top","id","topTabLink",1,"clrweb-tablink"],["routerLink",".","routerLinkActive","active","fragment","examples","id","guidelinesTabLink",1,"clrweb-tablink"],["hash-listener","",1,"dox-content"],["scrollable",""],[1,"dox-content-wrapper"],["id","top"],[1,"label","label-warning","clr-align-middle"],[1,"badge","badge-warning"]],template:function(o,l){if(1&o&&(t.F$t(),t.TgZ(0,"div",0)(1,"section")(2,"h1"),t._uU(3),t.YNc(4,m,4,0,"span",1),t.qZA(),t.YNc(5,i,2,1,"h5",2),t.TgZ(6,"div",3)(7,"ul",4)(8,"li")(9,"a",5),t._uU(10," Design Guidelines "),t.qZA()(),t.TgZ(11,"li")(12,"a",6),t._uU(13," Code & Examples "),t.qZA()()()()()(),t.TgZ(14,"section",7,8)(16,"div",9),t._UZ(17,"a",10),t.Hsn(18),t.qZA()()),2&o){const h=t.MAs(15);t.xp6(3),t.hij(" ",l.title," "),t.xp6(1),t.Q6J("ngIf",l.deprecated),t.xp6(1),t.Q6J("ngIf",l.description),t.xp6(2),t.Q6J("scrollspy",h)}},dependencies:[n.O5,u,d,p.rH,p.Od],encapsulation:2})),a})()},11489:(f,g,r)=>{r.d(g,{K:()=>u});var e=r(81180);const t=r(334),n=new Map;for(let d of t.list)n.set(d.url,d);class u{constructor(m){(0,e.Z)(this,"title","");let i=n.get(m);this.populateComponentDetails(i.text)}populateComponentDetails(m){this.title=m}}},19976:(f,g,r)=>{r.d(g,{J:()=>m});var e=r(81180),t=r(36895),n=r(14931),p=r(52653),u=r(50420),d=r(41571);let m=(()=>{class i{}return(0,e.Z)(i,"\u0275fac",function(c){return new(c||i)}),(0,e.Z)(i,"\u0275mod",d.oAB({type:i})),(0,e.Z)(i,"\u0275inj",d.cJS({imports:[t.ez,n.Bz,p.K6A,u.mmz]})),i})()},24070:(f,g,r)=>{r.d(g,{M:()=>a});var e=r(81180),t=r(41571),n=r(36895),p=r(14931),u=r(52653),d=r(50420);function m(s,o){if(1&s){const l=t.EpF();t.TgZ(0,"button",32),t.NdJ("click",function(){const Z=t.CHM(l).$implicit,y=t.oxw(2);return t.KtG(y.setTheme(Z))}),t._uU(1),t.qZA()}if(2&s){const l=o.$implicit;t.xp6(1),t.hij(" ",l.name," ")}}function i(s,o){if(1&s&&(t.TgZ(0,"clr-dropdown-menu",30),t.YNc(1,m,2,1,"button",31),t.qZA()),2&s){const l=t.oxw();t.xp6(1),t.Q6J("ngForOf",l.themes)}}function _(s,o){1&s&&(t.TgZ(0,"clr-dropdown-menu",30)(1,"a",33),t._uU(2,"Application 1"),t.qZA(),t.TgZ(3,"a",33),t._uU(4,"Application 2"),t.qZA(),t.TgZ(5,"a",33),t._uU(6,"Application 3"),t.qZA()())}function c(s,o){1&s&&(t.TgZ(0,"clr-dropdown-menu",30)(1,"h4",34),t._uU(2,"John Doe"),t.qZA(),t.TgZ(3,"a",33),t._uU(4,"Support"),t.qZA(),t.TgZ(5,"a",33),t._uU(6,"User Settings"),t.qZA(),t.TgZ(7,"a",33),t._uU(8,"Logout"),t.qZA()())}let a=(()=>{class s{constructor(l,h){(0,e.Z)(this,"document",void 0),(0,e.Z)(this,"platformId",void 0),(0,e.Z)(this,"linkRef",void 0),(0,e.Z)(this,"themes",[{name:"PHS",href:"styles/clr-addons-phs.min.css"},{name:"Clarity (light)",href:"styles/clr-ui.min.css"},{name:"Clarity (dark)",href:"styles/clr-ui-dark.min.css"}]),this.document=l,this.platformId=h,(0,n.NF)(this.platformId)&&(this.linkRef=this.document.getElementById("theme"))}setTheme(l){this.linkRef.href=l.href}}return(0,e.Z)(s,"\u0275fac",function(l){return new(l||s)(t.Y36(n.K0),t.Y36(t.Lbi))}),(0,e.Z)(s,"\u0275cmp",t.Xpm({type:s,selectors:[["clr-demo-menu"]],decls:50,vars:1,consts:[[1,"header-5"],[1,"branding"],["routerLink","/",1,"logo-and-title"],[1,"clr-icon","clarity-logo"],[1,"title"],[1,"divider"],[1,"header-nav",3,"clr-nav-level"],[1,"header-overflow"],["routerLink","/full-page-layouts/basepage-layout-command","routerLinkActive","active",1,"nav-link"],[1,"nav-text"],["clrTitle","Layouts","routerLinkActive","active"],["routerLink","/full-page-layouts/basepage-layout","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],["routerLink","/full-page-layouts/sidebarpage-layout","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],["routerLink","/full-page-layouts/content-panel","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],["routerLink","/full-page-layouts/flow-bar","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],["routerLink","/full-page-layouts/sticky-footer","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],["routerLink","/full-page-layouts/content-with-history","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],["clrTitle","Forms","routerLinkActive","active"],["routerLink","/full-page-layouts/basepage-layout-sub1/forms","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],["routerLink","/full-page-layouts/basepage-layout-sub1/ves","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],["clrTitle","Menu 4","routerLinkActive","active"],["routerLink","/full-page-layouts/basepage-layout-sub2/five","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],["routerLink","/full-page-layouts/basepage-layout-sub2/six","routerLinkActive","active","clrMainNavGroupItem","",1,"nav-link"],[1,"header-actions"],["type","button","clrDropdownTrigger","",1,"nav-icon","dropdown-toggle"],["shape","cog"],["clrPosition","bottom-right",4,"clrIfOpen"],["shape","applications",1,"is-solid"],["shape","caret down"],["shape","user"],["clrPosition","bottom-right"],["type","button","clrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["type","button","clrDropdownItem","",3,"click"],["onClick","return false;","href","#","clrDropdownItem",""],[1,"dropdown-header"]],template:function(l,h){1&l&&(t.TgZ(0,"clr-header",0)(1,"div",1)(2,"a",2),t._UZ(3,"span",3),t.TgZ(4,"span",4),t._uU(5,"Project title"),t.qZA()()(),t._UZ(6,"div",5),t.TgZ(7,"div",6)(8,"div",7)(9,"a",8)(10,"span",9),t._uU(11,"Command bar"),t.qZA()(),t.TgZ(12,"clr-main-nav-group",10)(13,"a",11),t._uU(14,"Base Pagelayout"),t.qZA(),t.TgZ(15,"a",12),t._uU(16,"Sidebar Pagelayout"),t.qZA(),t.TgZ(17,"a",13),t._uU(18,"Content Panel Layout"),t.qZA(),t.TgZ(19,"a",14),t._uU(20,"Flow Bar Layout"),t.qZA(),t.TgZ(21,"a",15),t._uU(22,"Sticky Footer Layout"),t.qZA(),t.TgZ(23,"a",16),t._uU(24,"Content Panel Layout with History"),t.qZA()(),t.TgZ(25,"clr-main-nav-group",17)(26,"a",18),t._uU(27,"Form Layout"),t.qZA(),t.TgZ(28,"a",19),t._uU(29,"View Edit Section"),t.qZA()(),t.TgZ(30,"clr-main-nav-group",20)(31,"a",21),t._uU(32,"Submenu 5"),t.qZA(),t.TgZ(33,"a",22),t._uU(34,"Submenu 6"),t.qZA()()()(),t.TgZ(35,"div",23)(36,"clr-dropdown")(37,"button",24),t._UZ(38,"clr-icon",25),t.qZA(),t.YNc(39,i,2,1,"clr-dropdown-menu",26),t.qZA(),t.TgZ(40,"clr-dropdown")(41,"button",24),t._UZ(42,"clr-icon",27)(43,"clr-icon",28),t.qZA(),t.YNc(44,_,7,0,"clr-dropdown-menu",26),t.qZA(),t.TgZ(45,"clr-dropdown")(46,"button",24),t._UZ(47,"clr-icon",29)(48,"clr-icon",28),t.qZA(),t.YNc(49,c,9,0,"clr-dropdown-menu",26),t.qZA()()()),2&l&&(t.xp6(7),t.Q6J("clr-nav-level",1))},dependencies:[n.sg,p.rH,p.Od,u.qvL,u.nqY,u.uUW,u.saT,u.toC,u.f_W,u.zwp,u.ZUS,u.lU3,d.MHK,d.jrd,d.Qci],encapsulation:2})),s})()},71884:(f,g,r)=>{r.d(g,{O:()=>m});var e=r(81180),t=r(36895),n=r(41571);let p=(()=>{class i{constructor(c,a,s){(0,e.Z)(this,"_el",void 0),(0,e.Z)(this,"renderer",void 0),(0,e.Z)(this,"platformId",void 0),(0,e.Z)(this,"_highlight",""),this._el=c,this.renderer=a,this.platformId=s}ngAfterContentInit(){this.redraw()}redraw(){Prism&&this._el&&this._el.nativeElement&&(0,t.NF)(this.platformId)&&Prism.highlightElement(this._el.nativeElement)}set highlight(c){c&&""!==c.trim()&&(this._highlight=c,this.renderer.addClass(this._el.nativeElement,this._highlight))}get highlight(){return this._highlight}}return(0,e.Z)(i,"\u0275fac",function(c){return new(c||i)(n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(n.Lbi))}),(0,e.Z)(i,"\u0275dir",n.lG2({type:i,selectors:[["code","clr-code-highlight",""]],inputs:{highlight:["clr-code-highlight","highlight"]}})),i})();function u(i,_){if(1&i&&(n.ynx(0),n.TgZ(1,"pre")(2,"code",1),n._uU(3),n.qZA()(),n.BQk()),2&i){const c=n.oxw();n.xp6(2),n.Q6J("clr-code-highlight","language-"+c.language),n.xp6(1),n.Oqu(c.code.trim())}}function d(i,_){if(1&i&&(n.ynx(0),n.TgZ(1,"pre")(2,"code",2),n._uU(3),n.qZA()(),n.BQk()),2&i){const c=n.oxw();n.xp6(3),n.Oqu(c.code.trim())}}let m=(()=>{class i{constructor(){(0,e.Z)(this,"codeHighlight",void 0),(0,e.Z)(this,"code",void 0),(0,e.Z)(this,"language","html"),(0,e.Z)(this,"disablePrism",!1)}ngAfterViewInit(){this.codeHighlight&&this.codeHighlight.redraw()}}return(0,e.Z)(i,"\u0275fac",function(c){return new(c||i)}),(0,e.Z)(i,"\u0275cmp",n.Xpm({type:i,selectors:[["clr-code-snippet"]],viewQuery:function(c,a){if(1&c&&n.Gf(p,5),2&c){let s;n.iGM(s=n.CRH())&&(a.codeHighlight=s.first)}},inputs:{code:["clrCode","code"],language:["clrLanguage","language"],disablePrism:["clrDisablePrism","disablePrism"]},decls:2,vars:2,consts:[[4,"ngIf"],[3,"clr-code-highlight"],[1,"clr-code"]],template:function(c,a){1&c&&(n.YNc(0,u,4,2,"ng-container",0),n.YNc(1,d,4,1,"ng-container",0)),2&c&&(n.Q6J("ngIf",!a.disablePrism),n.xp6(1),n.Q6J("ngIf",a.disablePrism))},dependencies:[t.O5,p],styles:["pre[_ngcontent-%COMP%]{background:transparent;padding:12px}"]})),i})()}}]);
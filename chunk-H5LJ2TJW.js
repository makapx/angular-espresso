import{a as L,b as P}from"./chunk-AB42RHR4.js";import{$a as A,Da as d,Fa as p,Ha as c,Ia as a,Ja as f,Ka as D,La as R,M as V,Ma as F,Na as x,Oa as y,Pa as B,Qa as N,R as k,Ra as z,Sa as w,Ta as I,V as v,Va as O,Xa as M,Ya as g,ba as h,ca as _,da as S,e as T,ja as j,pa as $,pb as H,qb as b,sa as m,sb as u,ta as C}from"./chunk-7MRGRB3C.js";function J(t,e){t&1&&(D(0),S(),c(1,"svg",3),f(2,"path",4),a(),R())}function K(t,e){t&1&&(S(),c(0,"svg",3),f(1,"path",5),a())}var U=(()=>{let e=class e{constructor(){this.isFavorite=!1,this.isFavorite$=new j}toggleFavorite(){this.isFavorite=!this.isFavorite,this.isFavorite$.emit(this.isFavorite)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=v({type:e,selectors:[["app-favorite-btn"]],inputs:{isFavorite:"isFavorite"},outputs:{isFavorite$:"isFavorite$"},standalone:!0,features:[g],decls:4,vars:2,consts:[["notFavorite",""],[1,"favorite-btn",3,"click"],[4,"ngIf","ngIfElse"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24"],["d","M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"],["d","M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"]],template:function(i,o){if(i&1){let s=F();c(0,"button",1),x("click",function(){return h(s),_(o.toggleFavorite())}),d(1,J,3,0,"ng-container",2)(2,K,2,0,"ng-template",null,0,A),a()}if(i&2){let s=w(3);m(),p("ngIf",o.isFavorite)("ngIfElse",s)}},dependencies:[u,b],styles:[".favorite-btn[_ngcontent-%COMP%]{cursor:pointer;background:transparent;outline:none;border:none;fill:var(--primary)}"]});let t=e;return t})();var l=(()=>{let e=class e{constructor(r){this.http=r}setFavorite(r,i){localStorage.setItem(r.toString(),i.toString())}getFavorite(r){return localStorage.getItem(r)==="true"}getAllCoffees(){return new T(r=>{this.http.get("https://fake-coffee-api.vercel.app/api").subscribe(i=>{r.next(i.map(o=>({_id:o._id,id:o.id,name:o.name,description:o.description,price:o.price,region:o.region,weight:o.weight,flavorProfile:o.flavor_profile,grindOption:o.grind_option,roastLevel:o.roast_level,imageUrl:o.image_url,isFavorite:this.getFavorite(o.id)})).sort((o,s)=>o.isFavorite===s.isFavorite?0:o.isFavorite?-1:1))})})}};e.\u0275fac=function(i){return new(i||e)(k(L))},e.\u0275prov=V({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var W=["cardRef"];function X(t,e){if(t&1&&(c(0,"figure",7),f(1,"img",8),a()),t&2){let n=y(2);m(),p("src",n.coffee.imageUrl,$)("alt",n.coffee.name)("title",n.coffee.name)}}function Y(t,e){if(t&1){let n=F();c(0,"div",2,0)(2,"div",3)(3,"h3"),I(4),a(),c(5,"app-favorite-btn",4),x("isFavorite$",function(i){h(n);let o=w(1),s=y();return _(s.setFavorite(i,o))}),a(),f(6,"hr"),a(),c(7,"div",5),d(8,X,2,3,"figure",6),I(9),a()()}if(t&2){let n=y();m(4),O(" ",n.coffee.name?n.coffee.name:"No name available"," "),m(),p("isFavorite",n.coffee.isFavorite),m(3),p("ngIf",n.coffee.imageUrl),m(),O(" ",n.coffee.description?n.coffee.description:"No description available"," ")}}var q=(()=>{let e=class e{constructor(r){this.coffeeProviderService=r}setFavorite(r,i){this.coffee&&(i.classList.toggle("is-favorite",r),this.coffee.isFavorite=r,this.coffeeProviderService.setFavorite(this.coffee.id,r))}};e.\u0275fac=function(i){return new(i||e)(C(l))},e.\u0275cmp=v({type:e,selectors:[["app-card"]],viewQuery:function(i,o){if(i&1&&B(W,5),i&2){let s;N(s=z())&&(o.cardRef=s.first)}},inputs:{coffee:"coffee"},standalone:!0,features:[M([l]),g],decls:1,vars:1,consts:[["cardRef",""],["class","card",4,"ngIf"],[1,"card"],[1,"card-header"],[1,"favorite-component",3,"isFavorite$","isFavorite"],[1,"card-body"],["class","card-image",4,"ngIf"],[1,"card-image"],[3,"src","alt","title"]],template:function(i,o){i&1&&d(0,Y,10,4,"div",1),i&2&&p("ngIf",o.coffee)},dependencies:[U,u,b,P],styles:[".is-favorite[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_wiggle 2s linear normal}@keyframes _ngcontent-%COMP%_wiggle{0%,7%{transform:rotate(0)}15%{transform:rotate(-15deg)}20%{transform:rotate(10deg)}25%{transform:rotate(-10deg)}30%{transform:rotate(6deg)}35%{transform:rotate(-4deg)}40%,to{transform:rotate(0)}}.card[_ngcontent-%COMP%]{position:relative;background-color:var(--light);border-radius:10px;box-shadow:0 0 10px #0000001a;padding:1rem;display:flex;flex-direction:column;gap:1rem;max-height:500px;height:100%}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{text-transform:uppercase}.card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:200px;border-radius:10px;overflow:hidden}.card[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto;width:100%;max-width:200px;height:200px;object-fit:cover;border-radius:10px}.favorite-component[_ngcontent-%COMP%]{position:absolute;right:1rem;top:1rem}"]});let t=e;return t})();function Z(t,e){if(t&1&&f(0,"app-card",2),t&2){let n=e.$implicit;p("coffee",n)}}var _e=(()=>{let e=class e{constructor(r){this.coffeeProviderService=r,this.coffees=[]}ngOnInit(){this.coffeeProviderService.getAllCoffees().subscribe(r=>{this.coffees=r})}};e.\u0275fac=function(i){return new(i||e)(C(l))},e.\u0275cmp=v({type:e,selectors:[["app-home"]],standalone:!0,features:[M([l]),g],decls:2,vars:1,consts:[[1,"cards-container"],[3,"coffee",4,"ngFor","ngForOf"],[3,"coffee"]],template:function(i,o){i&1&&(c(0,"div",0),d(1,Z,1,1,"app-card",1),a()),i&2&&(m(),p("ngForOf",o.coffees))},dependencies:[u,H,q,P],styles:[".cards-container[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:1rem;min-height:100vh}@media (min-width: 768px){.cards-container[_ngcontent-%COMP%]{padding:5rem}}"]});let t=e;return t})();export{_e as HomeComponent};
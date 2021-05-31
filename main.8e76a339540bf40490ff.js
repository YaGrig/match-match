(()=>{var e={596:(e,t,s)=>{"use strict";s.r(t)},614:(e,t,s)=>{"use strict";s.r(t)},76:(e,t,s)=>{"use strict";s.r(t)},80:(e,t,s)=>{"use strict";s.r(t)},687:(e,t,s)=>{"use strict";s.r(t)},336:(e,t,s)=>{"use strict";s.r(t)},528:(e,t,s)=>{"use strict";s.r(t)},62:(e,t,s)=>{"use strict";s.r(t)},233:(e,t,s)=>{"use strict";s.r(t)},580:(e,t,s)=>{"use strict";s.r(t)},387:(e,t,s)=>{"use strict";s.r(t)},752:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const n=s(54),i=s(83),r=s(229),o=s(366),a=s(595),c=s(440),d=new o.Header,l=new Map([["/",()=>(new n.About).element],["/about",()=>(new n.About).element],["/game",()=>(new r.Game).element],["/score",()=>(new i.Best).element],["/settings",()=>(new a.Settings).element]]);t.App=class{constructor(e){this.rootElement=e,this.pageOutlet=document.createElement("div"),this.rootElement&&this.rootElement.appendChild(d.element),this.rootElement.appendChild(this.pageOutlet)}start(){c.router.subscribe((e=>{const t=l.get(e);if(t){const e=t();this.pageOutlet.innerHTML="",this.pageOutlet.append(e)}}))}}},54:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.About=void 0,s(596);const n=s(583);class i extends n.BaseComponent{constructor(){super("div",["about"]);const e=document.createElement("div");e.classList.add("aboutPage"),this.element.appendChild(e);const t=document.createElement("img");t.classList.add("image"),e.appendChild(t)}}t.About=i},583:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},83:function(e,t,s){"use strict";var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(i,r){function o(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Best=void 0,s(614);const i=s(583),r=s(440),o=new(s(141).UserService);class a extends i.BaseComponent{constructor(){super("div",["best"]),this.getPlayers()}getPlayers(){return n(this,void 0,void 0,(function*(){r.router.navigate("/score");const e=document.createElement("div");e.classList.add("bestPage");const t=document.createElement("h2");t.classList.add("headerBest"),t.innerText="best players",e.appendChild(t),this.element.appendChild(e);const s=this.element.querySelector(".bestPage"),n=yield o.getTopPlayers();n.sort(((e,t)=>e.score>t.score?-1:t.score>e.score?1:0));for(let e=0;e<10;e++){const t=document.createElement("div");t.classList.add("player");const i=document.createElement("div");i.classList.add("playerInfo");const r=document.createElement("h3"),o=document.createElement("p"),a=document.createElement("p");r.innerText=`${n[e].firstname}`,o.innerText=`${n[e].email}`,a.innerText=`Score:  ${n[e].score}`,i.appendChild(r),i.appendChild(o),t.appendChild(i),t.appendChild(a),null==s||s.appendChild(t)}}))}}t.Best=a},977:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0,s(76);const n=s(583);class i extends n.BaseComponent{constructor(e){super("div",["card-container"]),this.image=e;const t=document.createElement("div");t.classList.add("card");const s=document.createElement("div");s.classList.add("card__front"),s.style.backgroundImage=`url('./images/${e}')`;const n=document.createElement("div");n.classList.add("card__back"),this.element.append(t),t.appendChild(s),t.appendChild(n)}flipToBack(){return this.flip(!0)}flipToFront(){return this.flip(!1)}flip(e=!1){return new Promise((t=>{this.element.classList.toggle("flipped",e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}}t.Card=i},610:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=void 0,s(80);const n=s(583);class i extends n.BaseComponent{constructor(){super("div",["cards-field"]),this.cards=[]}clear(){this.cards=[],this.element.innerHTML=""}addCards(e){this.cards=e,this.cards.forEach((e=>this.element.appendChild(e.element))),setTimeout((()=>{this.cards.forEach((e=>e.flipToBack()))}),5e3)}}t.CardsField=i},758:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=void 0,s(687);const n=s(583),i=s(440);class r extends n.BaseComponent{constructor(){super("div",["congr"]);const e=document.createElement("div"),t=document.createElement("button");t.innerText="Okay",t.classList.add("buttonOkay"),e.classList.add("alert"),this.element.append(e),e.append(t);const s=document.getElementById("app");null==s||s.append(this.element),t.addEventListener("click",(()=>{const e=document.querySelector(".congr");null==e||e.remove(),i.router.navigate("/score")}))}alertScore(e){const t=this.element.getElementsByClassName("alert")[0],s=document.createElement("p");s.innerText=`Congratulations! You successfully found all matches. Your score: ${e}`,t.appendChild(s)}}t.Alert=r},229:function(e,t,s){"use strict";var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(i,r){function o(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=t.rightChoise=void 0,s(336);const i=s(583),r=s(610),o=s(977),a=s(416),c=s(981),d=s(758),l=s(141),u=s(595),m=(new(s(366).Header),new u.Settings,new l.UserService);t.rightChoise=!0;class h extends i.BaseComponent{constructor(){super("div",["game"]),this.cardsField=new r.CardsField,this.timer=new c.Timer,this.correctChoise=0,this.nonCorrectChoise=0,this.scoreNumber=0,this.count=0,this.checkGame="true",this.isAnimation=!1,"true"===this.checkGame&&(this.cardsField=new r.CardsField,this.element.appendChild(this.timer.element),this.element.appendChild(this.cardsField.element),h.loadImages().then((e=>this.startGame(e))))}static loadImages(){return n(this,void 0,void 0,(function*(){const e=yield fetch("./images.json"),t=yield e.json(),s=yield m.getUserCards();console.log(s);const n=t[s];return console.log(n),n.images.map((e=>`${n.category}/${e}`))}))}startGame(e){return n(this,void 0,void 0,(function*(){const t=yield m.getUserDiff();let s=4;s=0===t?4:1===t?8:32,this.cardsField.clear();const n=e.splice(0,s),i=n.concat(n).map((e=>new o.Card(e))).sort((()=>Math.random()-.5));i.forEach((e=>{e.element.addEventListener("click",(()=>this.cardHandler(e)))})),this.cardsField.addCards(i),this.timer.startTimer(),this.timer.getTime()}))}cardHandler(e){return n(this,void 0,void 0,(function*(){if(!this.isAnimation){if(this.isAnimation=!0,yield e.flipToFront(),!this.activeCard)return this.activeCard=e,void(this.isAnimation=!1);this.activeCard.image!==e.image?(t.rightChoise=!0,this.changeColor(e),yield a.delay(3e3),yield Promise.all([this.activeCard.flipToBack(),e.flipToBack()]),this.nonCorrectChoise+=1,this.count+=1,this.getScore(),this.activeCard.element.classList.add("wrong"),e.element.classList.add("wrong")):(this.changeColor(e),this.correctChoise+=1,this.count+=1,this.getScore(),4===this.correctChoise&&this.gameEnd()),this.activeCard=void 0,this.isAnimation=!1}}))}getScore(){return this.scoreNumber=100*(this.count-this.nonCorrectChoise)-10*this.timer.getTime(),this.scoreNumber<0?0:this.scoreNumber}changeColor(e){var s;t.rightChoise&&(null===(s=this.activeCard)||void 0===s||s.element.classList.add("right"),e.element.classList.add("right"))}gameEnd(){(new d.Alert).alertScore(this.getScore()),m.updateUserScore(this.getScore())}}t.Game=h},366:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0,s(528);const n=s(583),i=s(440),r=s(708),o=new(s(141).UserService),a=new r.Form;class c extends n.BaseComponent{constructor(){super("header",["header"]),this.check=!1,this.element.innerHTML='\n      <h1 style="display: none">Match-match game</h1>\n      <div class="logo">\n        <p class="logo__text">match</p>\n        <p class="logo__text transparent">match</p>\n      </div>\n      <nav class="nav">\n        <div class="nav__link" data-route="/about"><span class="nav__icon info"></span>About Game</div>\n        <div class="nav__link" data-route="/score"><span class="nav__icon scores"></span>Best Score</div>\n        <div class="nav__link" data-route="/settings"><span class="nav__icon settings"></span>Game Settings</div>\n      </nav>';const e=document.createElement("button");e.classList.add("btn","register-btn"),this.check?e.innerText="New Game":e.innerText="register new player",this.element.append(e),this.handleNavigation()}handleNavigation(){this.element.addEventListener("click",(e=>{const t=e.target,s=t.getAttribute("data-route");t.classList.contains("register-btn")&&(document.body.classList.add("body"),this.element.append((new r.Form).element),o.getTopPlayers()),t.classList.contains("game-btn")&&(i.router.navigate("/game"),this.changeButton()),t.classList.contains("submit")&&a.formSubmit()&&(document.body.classList.remove("body"),this.changeButton()),t.classList.contains("cancel")&&(document.body.classList.remove("body"),a.deleteSubmit()),s&&(this.check=!1,i.router.navigate(s))}))}changeButton(){const e=document.querySelector(".btn");e&&this.check&&(null==e||e.classList.remove("game-btn"),null==e||e.classList.add("stopGame-btn"),e.innerHTML="Stop Game"),e&&!this.check&&(null==e||e.classList.remove("register-btn"),null==e||e.classList.add("game-btn"),e.innerHTML="New Game")}}t.Header=c},708:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Form=void 0,s(62);const n=s(583),i=new(s(141).UserService);class r extends n.BaseComponent{constructor(){super("div",["form"]);const e=document.createElement("div"),t=document.createElement("div"),s=document.createElement("div"),n=document.createElement("img"),i=document.createElement("p"),r=document.createElement("h2");r.classList.add("header-form"),r.innerText="Register new player",i.innerText="Your name";const o=document.createElement("p");o.innerText="Your Last name";const a=document.createElement("p");a.innerText="email",s.classList.add("inputs"),t.classList.add("form-inner"),e.classList.add("foorm"),this.element.appendChild(e);const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","fname"),c.setAttribute("data-title","haha"),c.classList.add("input-element"),c.classList.add("input-fname");const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("id","lname"),d.classList.add("input-element");const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("id","email"),l.classList.add("input-element"),s.appendChild(i),s.appendChild(c),s.appendChild(o),s.appendChild(d),s.appendChild(a),s.appendChild(l),t.appendChild(s),t.appendChild(n);const u=document.createElement("div");u.classList.add("buttons"),e.appendChild(r),e.appendChild(t);const m=document.createElement("button");m.classList.add("submit"),m.innerText="Add User",u.append(m);const h=document.createElement("button");h.classList.add("cancel"),h.innerText="Cancel",u.append(h),e.append(u)}formSubmit(){let e="false";const t=document.getElementById("fname"),s=document.getElementById("lname"),n=document.getElementById("email");if(t.value.match("[a-zA-Z]+")||t.classList.add("input-wrong"),s.value.match("[a-zA-Z]+")||s.classList.add("input-wrong"),n.value.match("^.+@.+..+$")||n.classList.add("input-wrong"),t.value.match("[a-zA-Z]+")&&t.classList.add("input-right"),s.value.match("[a-zA-Z]+")&&s.classList.add("input-right"),n.value.match("^.+@.+..+$")&&n.classList.add("input-right"),t.value.match("[a-zA-Z]+")&&s.value.match("[a-zA-Z]+")&&n.value.match("^.+@.+..+$"))return i.create(t.value,s.value,n.value),e="true","true"===e&&this.deleteSubmit(),!0}deleteSubmit(){const e=document.querySelector(".form");null==e||e.remove()}}t.Form=r},595:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=t.check=void 0,s(233);const n=s(583),i=new(s(141).UserService);t.check=!1;class r extends n.BaseComponent{constructor(){super("div",["settings"]);const e=document.createElement("div"),t=document.createElement("p");t.classList.add("difficulty-header"),t.innerText="Difficulty";const s=document.createElement("p");s.classList.add("difficulty-header"),s.innerText="Game Cards",e.classList.add("settingsPage");const n=document.createElement("select");n.setAttribute("name",">>?");const i=document.createElement("option");i.innerText="easy",i.classList.add("option");const r=document.createElement("option");r.innerText="medium",r.classList.add("option");const o=document.createElement("option");o.innerText="hard",o.classList.add("option"),n.classList.add("select"),e.appendChild(t),n.appendChild(i),n.appendChild(r),n.appendChild(o),e.appendChild(n),e.appendChild(s);const a=document.createElement("select");a.setAttribute("name",">>?");const c=document.createElement("option");c.innerText="random",c.classList.add("option");const d=document.createElement("option");d.innerText="nature",d.classList.add("option"),a.classList.add("selectCards"),a.appendChild(c),a.appendChild(d),e.appendChild(a),this.element.appendChild(e),this.diffHandler(),this.CardHandler()}getDiff(){const e=document.querySelector(".select").selectedIndex;return console.log(e),e}changeDiff(){i.updateUserDiff(this.getDiff())}diffHandler(){this.element.querySelector(".select").addEventListener("change",this.changeDiff.bind(this))}getCards(){const e=document.querySelector(".selectCards").selectedIndex;return console.log(e),e}changeCards(){i.updateUserCards(this.getCards())}CardHandler(){this.element.querySelector(".selectCards").addEventListener("change",this.changeCards.bind(this))}}t.Settings=r},981:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0,s(580);const n=s(583);class i extends n.BaseComponent{constructor(){super("div",["timer"]),this.minute=0,this.hours=0,this.seconds=0,this.isRunning=!0,this.element.innerHTML="\n    <div class='timer'></div>\n    ",setTimeout((()=>{this.isRunning&&this.startTimer()}),1e5),setTimeout((()=>{this.stopTime()}),15e3)}startTimer(){this.isRunning?setTimeout((()=>{const e=document.querySelector(".timer");setInterval((()=>{this.seconds+=1,60===this.seconds&&(this.minute+=1,this.seconds=0),60===this.minute&&(this.hours+=1,this.minute=0);const t=`<div>${this.hours}:${this.minute}:${this.seconds}</div>`;e&&(e.innerHTML=t)}),1e3)}),4e3):clearInterval()}getTime(){return this.seconds+60*this.minute+360*this.hours}stopTime(){this.isRunning=!1,this.minute,this.hours,this.seconds}}t.Timer=i},464:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0;const{v4:n}=s(877);t.User=class{constructor(e,t,s,i,r,o=0,a=0){this.score=0,this.id=n(),this.diff=0,this.card=0,this.firstname=e,this.lastname=t,this.email=s,this.score=r,this.id=i,this.diff=o,this.card=a}}},440:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.router=void 0;const n=s(458);t.router=new n.Router},458:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0,t.Router=class{constructor(){this.state=document.location.pathname,this.subscribers=[],window.addEventListener("popstate",(()=>{this.notify(document.location.pathname)}))}navigate(e){this.state!==e&&(window.history.pushState(null,"",e),this.notify(e))}subscribe(e){return e(this.state),this.subscribers.push(e),()=>{const t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}}getState(){return this.state}notify(e){e!==this.state&&(this.state=e,this.subscribers.forEach((e=>e(this.state))))}}},787:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UserRepository=void 0;const n=s(464);t.UserRepository=class{constructor(){this.dbName="match-match",this.storeName="users",this.loggedUser=null,this.players=[];const e=indexedDB.open(this.dbName);e.onsuccess=e=>{this.db=e.target.result,console.log(this.db)},e.onupgradeneeded=e=>{const t=e.target.result;t.objectStoreNames.contains(this.storeName)||t.createObjectStore(this.storeName,{keyPath:"id"}).createIndex("f","firstname")}}create(e="",t="",s="",i,r=0,o=0){return new Promise(((a,c)=>{var d;const l=null===(d=this.db)||void 0===d?void 0:d.transaction(this.storeName,"readwrite"),u=new n.User(e,t,s,i,r,o),m=null==l?void 0:l.objectStore(this.storeName);m?m.add(u).onsuccess=()=>{a(u),console.log("success")}:(c(),console.log("nosuccess"))}))}GetAllPlayers(){return new Promise(((e,t)=>{var s;const n=null===(s=this.db)||void 0===s?void 0:s.transaction(this.storeName,"readwrite"),i=null==n?void 0:n.objectStore(this.storeName);if(i){const t=i.getAll();t.onsuccess=()=>{e(t.result)}}}))}updateUserScore(e,t){var s;const n=null===(s=this.db)||void 0===s?void 0:s.transaction(this.storeName,"readwrite"),i=null==n?void 0:n.objectStore(this.storeName);if(i){const s=i.openCursor();s.onsuccess=function(){const n=s.result;if(n){const{key:s}=n;if(s===`${t}`){const{value:t}=n;t.score=e,n.update(t).onsuccess=()=>{}}n.continue()}}}}updateUserDiff(e,t){var s;const n=null===(s=this.db)||void 0===s?void 0:s.transaction(this.storeName,"readwrite"),i=null==n?void 0:n.objectStore(this.storeName);if(i){const s=i.openCursor();s.onsuccess=function(){const n=s.result;if(n){const{key:s}=n;if(s===`${t}`){const{value:t}=n;t.diff=e,n.update(t).onsuccess=()=>{}}n.continue()}}}}updateUserCards(e,t){var s;const n=null===(s=this.db)||void 0===s?void 0:s.transaction(this.storeName,"readwrite"),i=null==n?void 0:n.objectStore(this.storeName);if(i){const s=i.openCursor();s.onsuccess=function(){const n=s.result;if(n){const{key:s}=n;if(s===`${t}`){const{value:t}=n;t.card=e,n.update(t).onsuccess=()=>{}}n.continue()}}}}getUserDiff(e){return new Promise(((t,s)=>{var n;const i=null===(n=this.db)||void 0===n?void 0:n.transaction(this.storeName,"readwrite"),r=null==i?void 0:i.objectStore(this.storeName);if(r){const s=r.getAll();s.onsuccess=()=>{const n=s.result.find((t=>t.id===e));t(n.diff)}}}))}getUserCards(e){return new Promise(((t,s)=>{var n;const i=null===(n=this.db)||void 0===n?void 0:n.transaction(this.storeName,"readwrite"),r=null==i?void 0:i.objectStore(this.storeName);if(r){const s=r.getAll();s.onsuccess=()=>{const n=s.result.find((t=>t.id===e));t(n.card)}}}))}}},141:function(e,t,s){"use strict";var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(i,r){function o(e){try{c(n.next(e))}catch(e){r(e)}}function a(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.UserService=void 0;const i=s(877),r=new(s(787).UserRepository),o=[];t.UserService=class{constructor(){this.currentUser=null}create(e="",t="",s="",a=i.v4(),c=0,d=0){return n(this,void 0,void 0,(function*(){const n=yield r.create(e,t,s,a,c,d);return this.currentUser=n,o[0]=this.currentUser,this.currentUser}))}getTopPlayers(){return n(this,void 0,void 0,(function*(){return yield r.GetAllPlayers()}))}updateUserScore(e,t=Object.values(o[0])[1]){return n(this,void 0,void 0,(function*(){return yield r.updateUserScore(e,t)}))}updateUserDiff(e,t=Object.values(o[0])[1]){return n(this,void 0,void 0,(function*(){return yield r.updateUserDiff(e,t)}))}getUserDiff(e=Object.values(o[0])[1]){return n(this,void 0,void 0,(function*(){return yield r.getUserDiff(e)}))}updateUserCards(e,t=Object.values(o[0])[1]){return n(this,void 0,void 0,(function*(){return yield r.updateUserCards(e,t)}))}getUserCards(e=Object.values(o[0])[1]){return n(this,void 0,void 0,(function*(){return yield r.getUserCards(e)}))}}},416:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}},877:(e,t,s)=>{var n=s(570),i=s(171),r=i;r.v1=n,r.v4=i,e.exports=r},327:e=>{for(var t=[],s=0;s<256;++s)t[s]=(s+256).toString(16).substr(1);e.exports=function(e,s){var n=s||0,i=t;return[i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]]].join("")}},217:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var s=new Uint8Array(16);e.exports=function(){return t(s),s}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},570:(e,t,s)=>{var n,i,r=s(217),o=s(327),a=0,c=0;e.exports=function(e,t,s){var d=t&&s||0,l=t||[],u=(e=e||{}).node||n,m=void 0!==e.clockseq?e.clockseq:i;if(null==u||null==m){var h=r();null==u&&(u=n=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==m&&(m=i=16383&(h[6]<<8|h[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:c+1,f=p-a+(v-c)/1e4;if(f<0&&void 0===e.clockseq&&(m=m+1&16383),(f<0||p>a)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=p,c=v,i=m;var g=(1e4*(268435455&(p+=122192928e5))+v)%4294967296;l[d++]=g>>>24&255,l[d++]=g>>>16&255,l[d++]=g>>>8&255,l[d++]=255&g;var y=p/4294967296*1e4&268435455;l[d++]=y>>>8&255,l[d++]=255&y,l[d++]=y>>>24&15|16,l[d++]=y>>>16&255,l[d++]=m>>>8|128,l[d++]=255&m;for(var b=0;b<6;++b)l[d+b]=u[b];return t||o(l)}},171:(e,t,s)=>{var n=s(217),i=s(327);e.exports=function(e,t,s){var r=t&&s||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||n)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var a=0;a<16;++a)t[r+a]=o[a];return t||i(o)}}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,s),r.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";s(387);const e=s(752);window.onload=()=>{const t=document.getElementById("app");if(!t)throw Error("App root element not found");new e.App(t).start()}})()})();
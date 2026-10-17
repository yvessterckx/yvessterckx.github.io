const kt="pawcour.touch.v1";const wt=110*Math.PI/180,et=160*Math.PI/180,Ht=1.5,St=.6,Pt=1.8,jt=`
html.touch{overscroll-behavior:none;touch-action:none}
html.touch body{position:fixed;inset:0;width:100%;height:100%;overflow:hidden;overscroll-behavior:none;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}
html.touch canvas{touch-action:none}
#cc-touch{--u:clamp(12px,calc(1.6vmin + 6px),18px);--j:clamp(76px,22vmin,112px);--b:clamp(56px,15vmin,80px);--g:clamp(8px,2vmin,14px);
  --sr:calc(env(safe-area-inset-right,0px) + 14px);--sl:calc(env(safe-area-inset-left,0px) + 14px);--sb:calc(env(safe-area-inset-bottom,0px) + 14px);--st:calc(env(safe-area-inset-top,0px) + 8px);
  position:fixed;inset:0;z-index:18;pointer-events:none;color:#f6efff;font:600 var(--u)/1.2 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-font-smoothing:antialiased;
  -webkit-user-select:none;user-select:none;-webkit-touch-callout:none;touch-action:none}
#cc-touch[hidden]{display:none}
#cc-touch *{box-sizing:border-box;touch-action:none;-webkit-tap-highlight-color:transparent}
#cc-touch [hidden]{display:none!important}
#cc-touch .tBtn{position:absolute;pointer-events:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.15em;border-radius:50%;text-align:center;line-height:1.1;font-size:.82em;
  letter-spacing:.08em;text-transform:uppercase;background:rgba(20,16,40,.62);border:2px solid rgba(255,200,120,.38);box-shadow:0 .4em 1.2em rgba(8,4,24,.4),inset 0 1px 0 rgba(255,255,255,.08);
  transition:transform .08s,background .12s,border-color .12s}
#cc-touch .tBtn[data-down],#cc-touch .tBtn[data-on]{transform:scale(.94);background:rgba(255,199,102,.34);border-color:#ffc766}
#cc-touch .tBtn[data-s=locked]{opacity:.35;filter:grayscale(1)}
#cc-touch .tBtn[data-run]{box-shadow:0 0 1em rgba(255,199,102,.7),inset 0 1px 0 rgba(255,255,255,.08)}
#cc-touch .tJump{right:var(--sr);bottom:var(--sb);width:var(--j);height:var(--j);font-size:1em}
#cc-touch .tSneak{right:calc(var(--sr) + var(--j) + var(--g));bottom:var(--sb);width:var(--b);height:var(--b)}
#cc-touch .tSprint{right:calc(var(--sr) + (var(--j) - var(--b)) / 2);bottom:calc(var(--sb) + var(--j) + var(--g));width:var(--b);height:var(--b)}
#cc-touch .tSub{font-size:.78em;letter-spacing:.02em;text-transform:none;color:rgba(246,239,255,.7)}
#cc-touch .tPips{display:flex;gap:.35em;height:.8em;align-items:center}
#cc-touch .tPips i{display:block;width:.7em;height:.7em;border-radius:50%;border:2px solid rgba(183,156,255,.65)}
#cc-touch .tPips i[data-lit]{background:#b79cff;box-shadow:0 0 .6em #b79cff}
#cc-touch .tPips i[data-off]{display:none}
#cc-touch .tUse{right:calc(var(--sr) + var(--j) + var(--g));bottom:calc(var(--sb) + var(--b) + var(--g));min-width:calc(var(--b) * 1.6);height:max(48px,calc(var(--b) * .8));padding:0 1.2em;border-radius:999px;flex-direction:row;
  font-size:.95em;letter-spacing:.02em;text-transform:none;white-space:nowrap;color:#2a1a08;background:linear-gradient(#ffd68a,#ffb64a);border-color:rgba(255,255,255,.55);box-shadow:0 .3em 1.2em rgba(255,182,74,.45)}
@media (orientation:portrait){#cc-touch .tUse{right:var(--sr);bottom:calc(var(--sb) + var(--j) + var(--g) + var(--b) + var(--g))}}
#cc-touch .tUse{max-width:60vw}
#cc-touch .tUse[data-down]{background:linear-gradient(#ffe2a8,#ffc766);border-color:#fff}
#cc-touch .tTop{position:absolute;right:calc(env(safe-area-inset-right,0px) + 10px);top:var(--st);display:flex;gap:8px}
#cc-touch .tSm{position:relative;pointer-events:auto;width:46px;height:46px;border-radius:50%;display:grid;place-items:center;background:rgba(20,16,40,.62);border:2px solid rgba(255,200,120,.3);color:#ffc766}
#cc-touch .tSm[data-down]{background:rgba(255,199,102,.34);border-color:#ffc766}
#cc-touch .tSm svg{width:22px;height:22px;fill:currentColor;pointer-events:none}
body.incourse #cc-touch .tPet{display:none}
#cc-touch .tBase{position:absolute;left:0;top:0;width:calc(var(--u) * 11);height:calc(var(--u) * 11);border-radius:50%;border:2px solid rgba(246,239,255,.4);background:radial-gradient(circle,rgba(255,255,255,.05),rgba(255,255,255,.14));
  opacity:0;will-change:transform}
#cc-touch .tBase[data-on]{opacity:1}
#cc-touch .tKnob{position:absolute;left:50%;top:50%;width:calc(var(--u) * 4.4);height:calc(var(--u) * 4.4);margin:calc(var(--u) * -2.2) 0 0 calc(var(--u) * -2.2);border-radius:50%;background:rgba(255,199,102,.55);border:2px solid #ffc766;will-change:transform}
#cc-touch .tGhost{position:absolute;left:calc(var(--sl) + var(--u));bottom:calc(var(--sb) + var(--u));width:calc(var(--u) * 9);height:calc(var(--u) * 9);border-radius:50%;border:2px dashed rgba(246,239,255,.3);opacity:.7;transition:opacity .2s}
#cc-touch .tGhost[data-hide]{opacity:0}
#cc-touch .tHint{position:absolute;left:50%;top:max(4.5em,18vh);transform:translateX(-50%);padding:.45em 1.1em;border-radius:999px;white-space:nowrap;font-size:.95em;background:rgba(20,16,40,.7);border:1px solid rgba(255,200,120,.3);opacity:0;transition:opacity .4s}
#cc-touch .tHint[data-show]{opacity:1}

/* the rest of the game on a touch device: no key hints, bigger text and targets, nothing that needs hover. No backdrop-filter over the moving 3D scene (a full-screen blur every frame heats a phone) */
html.touch #cc-ui .glass,html.touch #cc-course .glass{-webkit-backdrop-filter:none;backdrop-filter:none}
html.touch #cc-ui .pause,html.touch #cc-course .panel{-webkit-backdrop-filter:none;backdrop-filter:none;background:rgba(14,9,32,.8)}
html.touch #msg{-webkit-backdrop-filter:none;backdrop-filter:none}
html.touch #cc-ui,html.touch #cc-course,html.touch #cc-cat{font-size:clamp(13px,calc(.4vw + .75vmin + 6px),18px)}
html.touch #cc-ui .dock,html.touch #cc-ui .rhint,html.touch #cc-ui .catdock,html.touch #cc-ui .hint{display:none!important}
html.touch #cc-ui .stats{left:50%;right:auto;transform:translateX(-50%);bottom:max(.6em,env(safe-area-inset-bottom));font-size:.8em}
@media (orientation:portrait){html.touch #cc-ui .stats{display:none}}
html.touch #msg{top:clamp(52px,22vh,120px)}
html.touch #cc-interact,html.touch #cc-course .prompt{display:none!important}
html.touch #cc-course .hud .hint{display:none}
html.touch #cc-ui small,html.touch #cc-course .go small,html.touch #cc-course .alt small{display:none}
html.touch #cc-ui .pause,html.touch #cc-course .panel{touch-action:none}
html.touch #cc-ui .card,html.touch #cc-course .card{max-height:calc(100vh - 2em);max-height:calc(100dvh - 2em);touch-action:pan-y;-webkit-overflow-scrolling:touch}
html.touch #cc-ui .resume,html.touch #cc-ui .catopen{min-height:46px}
html.touch #cc-ui .ptab,html.touch #cc-ui .mini,html.touch #cc-ui .set label.sw{min-height:40px}
html.touch #cc-ui .set select{min-height:42px}
html.touch #cc-ui .set input[type=range]{height:3em}
html.touch #cc-ui .sw input{width:100%}
html.touch #cc-course .go,html.touch #cc-course .alt,html.touch #cc-course .tile{min-height:46px}
html.touch #cc-course .step{width:44px;height:44px}
@media (max-height:540px) and (orientation:landscape){
  html.touch #cc-course .card{width:min(44em,100%);padding:.7em 1.2em}
  html.touch #cc-course .card h1{font-size:1.4em}
  html.touch #cc-course .tiles{grid-template-columns:repeat(10,1fr)}
  html.touch #cc-course .card .stats{grid-template-columns:1fr auto 1fr auto;margin:.4em 0 .6em}
  html.touch #cc-ui .card{width:min(40em,100%)}
}
html.touch #cc-cat.open{touch-action:pan-y}
html.touch #cc-cat .stage{touch-action:none}
html.touch #cc-cat .tab,html.touch #cc-cat .mode{min-height:40px}
html.touch #cc-cat .btns button{min-height:46px}
html.touch #cc-cat .opt,html.touch #cc-cat .card{min-height:44px}
html.touch #cc-cat .sw{grid-template-columns:repeat(auto-fill,minmax(3.2em,1fr))}
html.touch #cc-cat input[type=text]{font-size:16px}
html.touch #cc-cat input[type=color]{width:4em;height:2.8em}
`;function Rt({canvas:v,input:X,ui:y,getUse:Lt=()=>null,onRestart:Ot=()=>{},win:k=window,doc:r=document,now:Y=()=>performance.now()}){const{keys:b,pressed:ct,stick:w}=X,N=[],s=(t,e,c,o)=>{t.addEventListener(e,c,o),N.push(()=>t.removeEventListener(e,c,o))},l=(t,e,c,o)=>{const a=r.createElement(t);return e&&(a.className=e),o&&(a.textContent=o),c&&c.appendChild(a),a},J=r.createElement("style");J.textContent=jt,r.head.appendChild(J);const x=l("div","",r.body);x.id="cc-touch";const _t=l("div","tGhost",x),I=l("div","tBase",x),Ct=l("div","tKnob",I),M=(t,e,c=x)=>{const o=l("div","tBtn "+t,c);return o.setAttribute("role","button"),o.setAttribute("aria-label",e),o},z=M("tJump","Jump"),Et=l("span","tLbl",z,"Jump"),It=l("span","tPips",z),A=[];for(let t=0;t<3;t++){const e=l("i","",It);e.dataset.lit="1",t>1&&(e.dataset.off="1"),A.push(e)}const U=M("tSneak","Sneak");l("span","tLbl",U,"Sneak");const Dt=l("span","tSub",U,y.leapName||"Pounce"),_=M("tSprint","Sprint");l("span","tLbl",_,"Sprint");const C=M("tUse","Use");C.hidden=!0;const Ft=l("span","tLbl",C,"Use"),Tt=l("div","tTop",x),B={fs:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"/></svg>',restart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 1 0 7.6 10.5h-2.2A6 6 0 1 1 12 6c1.7 0 3.2.7 4.3 1.7L13 11h7V4l-2.6 2.6A7.9 7.9 0 0 0 12 4z"/></svg>',pet:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3l4.2 3.1A9 9 0 0 1 12 5.5c1.4 0 2.7.3 3.8.8L20 3v9.2c0 4.5-3.4 8.3-8 8.3s-8-3.8-8-8.3V3zm4.5 9.2a1.3 1.3 0 1 0 0 .01zm7 0a1.3 1.3 0 1 0 0 .01z"/></svg>',pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>'},H=(t,e,c)=>{const o=l("div","tSm "+t,Tt);return o.setAttribute("role","button"),o.setAttribute("aria-label",e),o.innerHTML=c,o},P=r.documentElement,ot=P&&(P.requestFullscreen||P.webkitRequestFullscreen),V=!!(ot&&(r.fullscreenEnabled||r.webkitFullscreenEnabled))?H("tFs","Fullscreen",B.fs):null,at=H("tRestart","Back to the start",B.restart),nt=H("tPet","Customise your pet",B.pet),it=H("tPause","Pause",B.pause),st=l("div","tHint",x,"Landscape is more comfortable");r.documentElement.classList.add("touch");let D=k.innerWidth||800,F=k.innerHeight||400,m=5.5*14;const rt=()=>{D=k.innerWidth||D,F=k.innerHeight||F,m=5.5*Math.min(18,Math.max(12,.016*Math.min(D,F)+6)),I.style.width=I.style.height=2*m+"px"};rt(),s(k,"resize",rt);const h={id:-1,cx:0,cy:0},u={id:-1,x:0,y:0},f={id:-1,x:0,y:0};let S=0,L=!1,E=0,T=0;const d={sneak:{on:!1,t0:0,skip:!1,id:-1},sprint:{on:!1,t0:0,skip:!1,id:-1},jump:{down:!1,id:-1}},lt=[];let K=!1,ht=-1,ut=-1,dt=-1,pt="",Z="Jump",ft=null,mt=0;const p=(t,e,c)=>{c?t.dataset[e]===void 0&&(t.dataset[e]="1"):t.dataset[e]!==void 0&&delete t.dataset[e]},bt=t=>{p(I,"on",t),p(_t,"hide",t)},Kt=(t,e)=>{I.style.transform="translate3d("+(h.cx-m)+"px,"+(h.cy-m)+"px,0)",Ct.style.transform="translate3d("+t+"px,"+e+"px,0)"},gt=(t,e)=>{let c=t-h.cx,o=e-h.cy;const a=Math.hypot(c,o);if(a>m){const g=(a-m)/a;h.cx+=c*g,h.cy+=o*g,c=t-h.cx,o=e-h.cy}const i=Math.min(a,m);if(i<.15*m)w.x=0,w.y=0;else{const g=Math.min(1,(i-.15*m)/(.75*m-.15*m));w.x=c/i*g,w.y=-o/i*g}Kt(c,o)},xt=()=>{h.id=-1,w.x=0,w.y=0,bt(!1)},q=()=>Math.hypot(u.x-f.x,u.y-f.y),Mt=t=>{if(t.pointerId===u.id)u.id=-1;else if(t.pointerId===f.id)f.id=-1;else return!1;return S=0,!0},vt=(t,e)=>{try{t.setPointerCapture&&t.setPointerCapture(e)}catch{}};s(v,"pointerdown",t=>{t.pointerType==="mouse"||L||(t.preventDefault(),vt(v,t.pointerId),h.id===-1&&t.clientX<D*.5&&t.clientY>F*.28?(h.id=t.pointerId,h.cx=t.clientX,h.cy=t.clientY,bt(!0),gt(t.clientX,t.clientY)):u.id===-1?(u.id=t.pointerId,u.x=t.clientX,u.y=t.clientY,S=f.id===-1?0:q()):f.id===-1&&(f.id=t.pointerId,f.x=t.clientX,f.y=t.clientY,S=q()))}),s(v,"pointermove",t=>{if(t.pointerType!=="mouse"){if(t.pointerId===h.id){gt(t.clientX,t.clientY);return}if(t.pointerId===u.id||t.pointerId===f.id){const e=t.pointerId===u.id?u:f,c=e===u?f:u;if(c.id===-1&&X.look(t.clientX-e.x,t.clientY-e.y,1.5),e.x=t.clientX,e.y=t.clientY,c.id!==-1){const o=q();S>8&&o>8&&X.zoom(S/o),S=o}}}});const G=t=>{t.pointerId===h.id?xt():Mt(t)};s(v,"pointerup",G),s(v,"pointercancel",G),s(v,"lostpointercapture",G),s(v,"contextmenu",t=>t.preventDefault());const Q=(t,e,c,o)=>{lt.push(e),s(t,"pointerdown",i=>{e.id!==-1||L||(i.preventDefault(),e.id=i.pointerId,vt(t,i.pointerId),p(t,"down",!0),c())});const a=i=>{i.pointerId===e.id&&(e.id=-1,p(t,"down",!1),o(i.type==="pointercancel"))};s(t,"pointerup",a),s(t,"pointercancel",a),s(t,"lostpointercapture",a)},j=(t,e)=>{Q(t,{id:-1},e,()=>{})};Q(z,d.jump,()=>{d.jump.down=!0,ct.add("Space"),b.add("Space")},()=>{d.jump.down=!1,b.delete("Space")});const yt=(t,e,c,o)=>Q(t,e,()=>{o()&&(e.on?(e.on=!1,e.skip=!0,b.delete(c),p(t,"on",!1)):(e.on=!0,e.skip=!1,e.t0=Y(),b.add(c),p(t,"on",!0)))},()=>{e.on&&!e.skip&&Y()-e.t0>=350&&(e.on=!1,b.delete(c),p(t,"on",!1))});yt(U,d.sneak,"KeyC",()=>!0),yt(_,d.sprint,"ShiftLeft",()=>!K),j(C,()=>{ct.add("KeyE")}),j(at,()=>{Ot()}),j(nt,()=>{y.openCat&&y.openCat()}),j(it,()=>{y.paused||y.pause()}),V&&s(V,"click",()=>{try{if(r.fullscreenElement||r.webkitFullscreenElement)(r.exitFullscreen||r.webkitExitFullscreen).call(r);else{const e=ot.call(P);e&&e.catch&&e.catch(()=>{})}}catch{}}),s(r,"gesturestart",t=>t.preventDefault(),{passive:!1}),s(r,"touchmove",t=>{const e=t.target;e!==v&&e&&e.closest&&e.closest("#cc-ui .card, #cc-course .card, #cc-cat")||t.preventDefault()},{passive:!1}),s(x,"contextmenu",t=>t.preventDefault()),s(k,"blur",()=>W());function zt(t,e){if(!(t>0))return 0;if(u.id!==-1||f.id!==-1?E=Ht:E>0&&(E-=t),L||E>0||y.settings&&y.settings.autoCam===!1)return T=0,0;let c=0;const o=w.x,a=Math.abs(o);if(a>.12){const O=Math.atan2(a,w.y);let $=1;if(O>=et)$=0;else if(O>wt){const tt=(et-O)/(et-wt);$=tt*tt*(3-2*tt)}c=-2*(o>0?1:-1)*(a-.12)/(1-.12)*$}const i=Math.exp(-t/.15),g=(T-c)*.15*(1-i),R=c*t+g;T=c+(T-c)*i;let n=(e-St)/(Pt-St);return n=n<=0?0:n>=1?1:n*n*(3-2*n),R*n}function W(){xt(),u.id=f.id=-1,S=0,E=0,T=0;for(const[t,e,c]of[[U,d.sneak,"KeyC"],[_,d.sprint,"ShiftLeft"]])e.on=!1,e.id=-1,e.skip=!1,b.delete(c),p(t,"on",!1),p(t,"down",!1);d.jump.down=!1,d.jump.id=-1,b.delete("Space"),p(z,"down",!1);for(const t of lt)t.id=-1;for(const t of[C,at,nt,it,V])t&&p(t,"down",!1)}function At(t){L=!t,x.hidden=L,L&&W()}function Ut(t,e,c,o){if(o!==K&&(K=o,_.dataset.s=K?"locked":"",K&&d.sprint.on&&(d.sprint.on=!1,b.delete("ShiftLeft"),p(_,"on",!1))),d.sneak.on&&b.add("KeyC"),d.sprint.on&&b.add("ShiftLeft"),d.jump.down&&b.add("Space"),t!==ht||e!==ut){ht=t,ut=e;for(let n=0;n<A.length;n++)p(A[n],"lit",n<t),p(A[n],"off",n>=e)}const a=c?1:0;a!==dt&&(dt=a,p(_,"run",c));const i=y.leapName||"Pounce";i!==pt&&(pt=i,Dt.textContent=i,Z="");const g=d.sneak.on?i:"Jump";g!==Z&&(Z=g,Et.textContent=g);const R=Y();if(R-mt>=100){mt=R;const n=Lt();if(n!==ft&&(ft=n,C.hidden=!n,n)){const O=n.replace(/^E\s*[-\u2013:]\s*/,"");Ft.textContent=O.charAt(0).toUpperCase()+O.slice(1),C.setAttribute("aria-label",O)}}}function Bt(){W();for(const t of N)t();N.length=0,x.remove(),J.remove()}if(F>D){let t=!1;try{t=!!k.localStorage.getItem(kt)}catch{t=!1}if(!t){try{k.localStorage.setItem(kt,"1")}catch{}st.dataset.show="1",setTimeout(()=>{delete st.dataset.show},5e3)}}return{update:Ut,release:W,show:At,dispose:Bt,follow:zt,root:x,get camHold(){return E},get hidden(){return L},get stickRadius(){return m}}}export{Rt as createTouchControls};

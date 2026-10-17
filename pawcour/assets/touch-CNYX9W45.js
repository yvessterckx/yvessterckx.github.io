const bt="pawcour.touch.v1",Tt=`
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
`;function Mt({canvas:x,input:H,ui:w,getUse:gt=()=>null,onRestart:vt=()=>{},win:y=window,doc:r=document,now:F=()=>performance.now()}){const{keys:b,pressed:V,stick:S}=H,R=[],a=(t,e,c,o)=>{t.addEventListener(e,c,o),R.push(()=>t.removeEventListener(e,c,o))},s=(t,e,c,o)=>{const n=r.createElement(t);return e&&(n.className=e),o&&(n.textContent=o),c&&c.appendChild(n),n},X=r.createElement("style");X.textContent=Tt,r.head.appendChild(X);const g=s("div","",r.body);g.id="cc-touch";const xt=s("div","tGhost",g),_=s("div","tBase",g),yt=s("div","tKnob",_),T=(t,e,c=g)=>{const o=s("div","tBtn "+t,c);return o.setAttribute("role","button"),o.setAttribute("aria-label",e),o},D=T("tJump","Jump"),kt=s("span","tLbl",D,"Jump"),wt=s("span","tPips",D),M=[];for(let t=0;t<3;t++){const e=s("i","",wt);e.dataset.lit="1",t>1&&(e.dataset.off="1"),M.push(e)}const B=T("tSneak","Sneak");s("span","tLbl",B,"Sneak");const St=s("span","tSub",B,w.leapName||"Pounce"),C=T("tSprint","Sprint");s("span","tLbl",C,"Sprint");const I=T("tUse","Use");I.hidden=!0;const Ct=s("span","tLbl",I,"Use"),It=s("div","tTop",g),j={fs:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"/></svg>',restart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 1 0 7.6 10.5h-2.2A6 6 0 1 1 12 6c1.7 0 3.2.7 4.3 1.7L13 11h7V4l-2.6 2.6A7.9 7.9 0 0 0 12 4z"/></svg>',pet:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3l4.2 3.1A9 9 0 0 1 12 5.5c1.4 0 2.7.3 3.8.8L20 3v9.2c0 4.5-3.4 8.3-8 8.3s-8-3.8-8-8.3V3zm4.5 9.2a1.3 1.3 0 1 0 0 .01zm7 0a1.3 1.3 0 1 0 0 .01z"/></svg>',pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>'},A=(t,e,c)=>{const o=s("div","tSm "+t,It);return o.setAttribute("role","button"),o.setAttribute("aria-label",e),o.innerHTML=c,o},O=r.documentElement,W=O&&(O.requestFullscreen||O.webkitRequestFullscreen),Y=!!(W&&(r.fullscreenEnabled||r.webkitFullscreenEnabled))?A("tFs","Fullscreen",j.fs):null,Q=A("tRestart","Back to the start",j.restart),$=A("tPet","Customise your pet",j.pet),tt=A("tPause","Pause",j.pause),et=s("div","tHint",g,"Landscape is more comfortable");r.documentElement.classList.add("touch");let K=y.innerWidth||800,z=y.innerHeight||400,m=5.5*14;const ct=()=>{K=y.innerWidth||K,z=y.innerHeight||z,m=5.5*Math.min(18,Math.max(12,.016*Math.min(K,z)+6)),_.style.width=_.style.height=2*m+"px"};ct(),a(y,"resize",ct);const l={id:-1,cx:0,cy:0},d={id:-1,x:0,y:0},p={id:-1,x:0,y:0};let k=0,E=!1;const h={sneak:{on:!1,t0:0,skip:!1,id:-1},sprint:{on:!1,t0:0,skip:!1,id:-1},jump:{down:!1,id:-1}},ot=[];let L=!1,at=-1,nt=-1,it=-1,rt="",N="Jump",st=null,lt=0;const u=(t,e,c)=>{c?t.dataset[e]===void 0&&(t.dataset[e]="1"):t.dataset[e]!==void 0&&delete t.dataset[e]},ht=t=>{u(_,"on",t),u(xt,"hide",t)},Et=(t,e)=>{_.style.transform="translate3d("+(l.cx-m)+"px,"+(l.cy-m)+"px,0)",yt.style.transform="translate3d("+t+"px,"+e+"px,0)"},ut=(t,e)=>{let c=t-l.cx,o=e-l.cy;const n=Math.hypot(c,o);if(n>m){const v=(n-m)/n;l.cx+=c*v,l.cy+=o*v,c=t-l.cx,o=e-l.cy}const i=Math.min(n,m);if(i<.15*m)S.x=0,S.y=0;else{const v=Math.min(1,(i-.15*m)/(.75*m-.15*m));S.x=c/i*v,S.y=-o/i*v}Et(c,o)},dt=()=>{l.id=-1,S.x=0,S.y=0,ht(!1)},J=()=>Math.hypot(d.x-p.x,d.y-p.y),_t=t=>{if(t.pointerId===d.id)d.id=-1;else if(t.pointerId===p.id)p.id=-1;else return!1;return k=0,!0},pt=(t,e)=>{try{t.setPointerCapture&&t.setPointerCapture(e)}catch{}};a(x,"pointerdown",t=>{t.pointerType==="mouse"||E||(t.preventDefault(),pt(x,t.pointerId),l.id===-1&&t.clientX<K*.5&&t.clientY>z*.28?(l.id=t.pointerId,l.cx=t.clientX,l.cy=t.clientY,ht(!0),ut(t.clientX,t.clientY)):d.id===-1?(d.id=t.pointerId,d.x=t.clientX,d.y=t.clientY,k=p.id===-1?0:J()):p.id===-1&&(p.id=t.pointerId,p.x=t.clientX,p.y=t.clientY,k=J()))}),a(x,"pointermove",t=>{if(t.pointerType!=="mouse"){if(t.pointerId===l.id){ut(t.clientX,t.clientY);return}if(t.pointerId===d.id||t.pointerId===p.id){const e=t.pointerId===d.id?d:p,c=e===d?p:d;if(c.id===-1&&H.look(t.clientX-e.x,t.clientY-e.y,1.5),e.x=t.clientX,e.y=t.clientY,c.id!==-1){const o=J();k>8&&o>8&&H.zoom(k/o),k=o}}}});const Z=t=>{t.pointerId===l.id?dt():_t(t)};a(x,"pointerup",Z),a(x,"pointercancel",Z),a(x,"lostpointercapture",Z),a(x,"contextmenu",t=>t.preventDefault());const q=(t,e,c,o)=>{ot.push(e),a(t,"pointerdown",i=>{e.id!==-1||E||(i.preventDefault(),e.id=i.pointerId,pt(t,i.pointerId),u(t,"down",!0),c())});const n=i=>{i.pointerId===e.id&&(e.id=-1,u(t,"down",!1),o(i.type==="pointercancel"))};a(t,"pointerup",n),a(t,"pointercancel",n),a(t,"lostpointercapture",n)},P=(t,e)=>{q(t,{id:-1},e,()=>{})};q(D,h.jump,()=>{h.jump.down=!0,V.add("Space"),b.add("Space")},()=>{h.jump.down=!1,b.delete("Space")});const mt=(t,e,c,o)=>q(t,e,()=>{o()&&(e.on?(e.on=!1,e.skip=!0,b.delete(c),u(t,"on",!1)):(e.on=!0,e.skip=!1,e.t0=F(),b.add(c),u(t,"on",!0)))},()=>{e.on&&!e.skip&&F()-e.t0>=350&&(e.on=!1,b.delete(c),u(t,"on",!1))});mt(B,h.sneak,"KeyC",()=>!0),mt(C,h.sprint,"ShiftLeft",()=>!L),P(I,()=>{V.add("KeyE")}),P(Q,()=>{vt()}),P($,()=>{w.openCat&&w.openCat()}),P(tt,()=>{w.paused||w.pause()}),Y&&a(Y,"click",()=>{try{if(r.fullscreenElement||r.webkitFullscreenElement)(r.exitFullscreen||r.webkitExitFullscreen).call(r);else{const e=W.call(O);e&&e.catch&&e.catch(()=>{})}}catch{}}),a(r,"gesturestart",t=>t.preventDefault(),{passive:!1}),a(r,"touchmove",t=>{const e=t.target;e!==x&&e&&e.closest&&e.closest("#cc-ui .card, #cc-course .card, #cc-cat")||t.preventDefault()},{passive:!1}),a(g,"contextmenu",t=>t.preventDefault()),a(y,"blur",()=>U());function U(){dt(),d.id=p.id=-1,k=0;for(const[t,e,c]of[[B,h.sneak,"KeyC"],[C,h.sprint,"ShiftLeft"]])e.on=!1,e.id=-1,e.skip=!1,b.delete(c),u(t,"on",!1),u(t,"down",!1);h.jump.down=!1,h.jump.id=-1,b.delete("Space"),u(D,"down",!1);for(const t of ot)t.id=-1;for(const t of[I,Q,$,tt,Y])t&&u(t,"down",!1)}function Kt(t){E=!t,g.hidden=E,E&&U()}function zt(t,e,c,o){if(o!==L&&(L=o,C.dataset.s=L?"locked":"",L&&h.sprint.on&&(h.sprint.on=!1,b.delete("ShiftLeft"),u(C,"on",!1))),h.sneak.on&&b.add("KeyC"),h.sprint.on&&b.add("ShiftLeft"),h.jump.down&&b.add("Space"),t!==at||e!==nt){at=t,nt=e;for(let f=0;f<M.length;f++)u(M[f],"lit",f<t),u(M[f],"off",f>=e)}const n=c?1:0;n!==it&&(it=n,u(C,"run",c));const i=w.leapName||"Pounce";i!==rt&&(rt=i,St.textContent=i,N="");const v=h.sneak.on?i:"Jump";v!==N&&(N=v,kt.textContent=v);const ft=F();if(ft-lt>=100){lt=ft;const f=gt();if(f!==st&&(st=f,I.hidden=!f,f)){const G=f.replace(/^E\s*[-\u2013:]\s*/,"");Ct.textContent=G.charAt(0).toUpperCase()+G.slice(1),I.setAttribute("aria-label",G)}}}function Lt(){U();for(const t of R)t();R.length=0,g.remove(),X.remove()}if(z>K){let t=!1;try{t=!!y.localStorage.getItem(bt)}catch{t=!1}if(!t){try{y.localStorage.setItem(bt,"1")}catch{}et.dataset.show="1",setTimeout(()=>{delete et.dataset.show},5e3)}}return{update:zt,release:U,show:Kt,dispose:Lt,root:g,get hidden(){return E},get stickRadius(){return m}}}export{Mt as createTouchControls};

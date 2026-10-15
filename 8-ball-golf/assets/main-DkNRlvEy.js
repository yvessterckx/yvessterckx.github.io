import{S as $s}from"./index-C7lsZvon.js";const Jh="0.4.0",Fc="8bg:",oa={script:5e3,init:6e3,adStart:12e3,adMax:15e4};let nr=null,ei="none",to=null,Bi=null,js=0,aa=!1,ki=!1,ls=!1,pu=-1;const Oc=new Set,kc=new Map,Qh=()=>typeof window<"u"?window:null,Gn=(...i)=>{try{console.warn("[platform]",...i)}catch{}};function Ki(i){if(nr)try{const t=i(nr);t&&typeof t.catch=="function"&&t.catch(e=>Gn(e))}catch(t){Gn(t)}}function mu(i,t,e){let n=0;return Promise.race([Promise.resolve(i).catch(()=>e),new Promise(s=>{n=setTimeout(()=>s(e),t)})]).finally(()=>clearTimeout(n))}function ca(){const i=Bc();for(const t of[...Oc])try{t(i)}catch(e){Gn(e)}}function td(){try{const i=Qh();return i&&i.localStorage||null}catch{return null}}function ed(){return to||(to=(async()=>{try{const i=Qh();if(!i||!i.__cgSdk)return{env:ei};const e=await mu(i.__cgSdk,oa.script,!1)&&i.CrazyGames&&i.CrazyGames.SDK;if(!e||typeof e.init!="function")return{env:ei};if(!await mu(Promise.resolve().then(()=>e.init()).then(()=>!0,o=>(Gn("init failed",o),!1)),oa.init,!1))return{env:ei};const s=String(e.environment||"disabled");if(s!=="crazygames"&&s!=="local")return ei=s,{env:ei};const r=e.game;try{ls=!!(r.settings&&r.settings.muteAudio)}catch{ls=!1}try{r.addSettingsChangeListener(o=>{let a=ls;try{a=!!((o&&"muteAudio"in o?o:r.settings)||{}).muteAudio}catch{}a!==ls&&(ls=a,ca())})}catch(o){Gn("settings listener",o)}try{e.data&&typeof e.data.getItem=="function"&&(e.data.getItem(Fc+"probe"),Bi=e.data)}catch(o){Gn("data module off",o&&(o.code||o.message||o)),Bi=null}nr=e,ei=s,js===1&&Ki(o=>o.game.loadingStart()),ls&&ca()}catch(i){Gn("SDK unavailable",i),nr=null,Bi=null,(ei==="crazygames"||ei==="local")&&(ei="none")}return{env:ei}})(),to)}function _p(){js||(js=1,Ki(i=>i.game.loadingStart()))}function Mp(){if(js===2)return;const i=js;js=2,i===1&&Ki(t=>t.game.loadingStop())}function yp(){aa||ki||(aa=!0,Ki(i=>i.game.gameplayStart()))}function Sp(){aa&&(aa=!1,Ki(i=>i.game.gameplayStop()))}function gu(){Ki(i=>i.game.happytime())}function wp(i){Ki(t=>i?t.game.setGameContext(i):t.game.clearGameContext())}function bp(i){const t=Math.max(0,Math.min(100,Math.round(Number(i)||0)));t<=pu||(pu=t,Ki(e=>e.game.reportGameCompletedPercentage(t)))}function Ep(){return!nr||ki?Promise.resolve():new Promise(i=>{let t=!1,e=0,n=0;const s=()=>{t||(t=!0,clearTimeout(e),i())},r=()=>{clearTimeout(n),ki&&(ki=!1,ca()),s()};e=setTimeout(()=>{ki||s()},oa.adStart);const o={adStarted:()=>{clearTimeout(e),clearTimeout(n),ki||(ki=!0,ca()),n=setTimeout(r,oa.adMax)},adFinished:r,adError:a=>{const c=a&&a.code;c&&c!=="adCooldown"&&c!=="adsDisabledBasicLaunch"&&c!=="unfilled"&&Gn("ad",c),r()}};try{const a=nr.ad.requestAd("midgame",o);a&&typeof a.then=="function"&&a.then(void 0,()=>r())}catch(a){Gn("ad",a),r()}})}function Bc(){return ls||ki}function Tp(i){return typeof i!="function"?()=>{}:(Oc.add(i),()=>{Oc.delete(i)})}const Ap={async load(i){await ed();const t=Fc+i;if(Bi)try{const e=Bi.getItem(t);if(e!=null)return String(e);const n=xu(t);if(n!=null){try{Bi.setItem(t,n)}catch(s){Gn("migrate",s)}return n}return null}catch(e){Gn("data load",e)}return xu(t)},save(i,t){const e=Fc+i,n=String(t);if(Bi)try{Bi.setItem(e,n);return}catch(s){Gn("data save",s)}Cp(e,n)}};function xu(i){const t=td();if(t)try{const e=t.getItem(i);if(e!=null)return String(e)}catch{}return kc.has(i)?kc.get(i):null}function Cp(i,t){kc.set(i,t);const e=td();if(e)try{e.setItem(i,t)}catch{}}function Rp(){const i=new Map;return{on(t,e){return i.has(t)||i.set(t,new Set),i.get(t).add(e),()=>i.get(t).delete(e)},emit(t,e){const n=i.get(t);if(n)for(const s of[...n])try{s(e)}catch(r){console.error("[events] "+t,r)}}}}const Hc=Math.PI/180,Ys=i=>Math.round(i*100)/100;function ni(i,t=12){const e=i.length,n=[];for(let s=0;s<e;s++){const r=i[s],o=r[2]||0;if(!o){n.push([r[0],r[1]]);continue}const a=i[(s+e-1)%e],c=i[(s+1)%e];let l=a[0]-r[0],u=a[1]-r[1],d=c[0]-r[0],f=c[1]-r[1];const h=Math.hypot(l,u),g=Math.hypot(d,f);l/=h,u/=h,d/=g,f/=g;const x=Math.acos(Math.max(-1,Math.min(1,l*d+u*f)));let m=o/Math.tan(x/2),p=o;const y=.5*Math.min(h,g);m>y&&(m=y,p=m*Math.tan(x/2));const M=l+d,S=u+f,R=Math.hypot(M,S),P=p/Math.sin(x/2),b=r[0]+M/R*P,w=r[1]+S/R*P,v=Math.atan2(r[1]+u*m-w,r[0]+l*m-b);let _=Math.atan2(r[1]+f*m-w,r[0]+d*m-b)-v;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;const T=Math.max(1,Math.ceil(Math.abs(_)/(t*Hc)));for(let z=0;z<=T;z++)n.push([Ys(b+p*Math.cos(v+_*z/T)),Ys(w+p*Math.sin(v+_*z/T))])}return n.filter((s,r)=>{const o=n[(r+n.length-1)%n.length];return r===0&&n.length>1?!(s[0]===n[n.length-1][0]&&s[1]===n[n.length-1][1]):!(s[0]===o[0]&&s[1]===o[1])})}function vu(i,t,e,n,s,r=10){const o=[],a=Math.max(2,Math.ceil((s-n)/r));for(let c=0;c<=a;c++){const l=(n+(s-n)*c/a)*Hc;o.push([Ys(i[0]+e*Math.cos(l)),Ys(i[1]+e*Math.sin(l))])}for(let c=a;c>=0;c--){const l=(n+(s-n)*c/a)*Hc;o.push([Ys(i[0]+t*Math.cos(l)),Ys(i[1]+t*Math.sin(l))])}return o}const Pp=[{id:"g1",name:"Hello, Eight!",par:2,circle:5,size:[30,12],tee:[4,6],cup:[21,6],tip:"Sink the 8 in the hole!",border:"wall",ground:ni([[0,.8,4],[15,0,8],[30,.8,4],[30,11.2,4],[15,12,8],[0,11.2,4]]),zones:[{surface:"green",circle:{c:[21,6],r:3.6}}],props:[{type:"sign",at:[1.5,-1.4]},{type:"flowers",at:[6,-1.3]},{type:"flowers",at:[11,13.3]},{type:"flowers",at:[19,-1.3]},{type:"flowers",at:[25,13.2]},{type:"tree",at:[-3.2,13.5]},{type:"tree",at:[33.5,-2.2]},{type:"bush",at:[27,13.4]},{type:"bush",at:[-1.4,3]},{type:"statue8",at:[33.6,6]}]},{id:"g2",name:"Easy Does It",par:2,circle:5,size:[34,14],tee:[4,7],cup:[16,7],tip:"Softer is smarter.",border:"wall",ground:ni([[0,2,3],[9,1.5,3],[11,3,2],[16,1,5],[21,3.5,2],[34,3.5,3],[34,10.5,3],[21,10.5,2],[16,13,5],[11,11,2],[9,12.5,3],[0,12,3]]),zones:[{surface:"green",circle:{c:[16,7],r:3.6}}],props:[{type:"sign",at:[1,.2]},{type:"flowers",at:[10.5,1.2]},{type:"flowers",at:[10.5,12.8]},{type:"flowers",at:[16,-.6]},{type:"flowers",at:[16,14.6]},{type:"bush",at:[26,2]},{type:"bush",at:[29,12]},{type:"flowerbox",at:[22,12.3]},{type:"flowerbox",at:[31,1.7]},{type:"tree",at:[37.5,7]},{type:"tree",at:[24,15.5]}]},{id:"g3",name:"Side Swipe",par:3,circle:4,size:[30,18],tee:[2.8,3.54],cup:[25,15],tip:"Hit its side!",border:"hedge",ground:ni([[0,5.73,1.5],[2.92,0,1.5],[22,0,6],[30,3,5],[30,18,4],[17,18,4],[15,9.5,3],[0,10,3]]),zones:[{surface:"green",circle:{c:[25,15],r:3.8}}],props:[{type:"bush",at:[-1,2.2]},{type:"bush",at:[1.2,-1]},{type:"bush",at:[-1,7.5]},{type:"fountain",at:[6.5,14.5]},{type:"flowers",at:[2,12.5]},{type:"flowers",at:[11.5,12]},{type:"flowers",at:[12,16.5]},{type:"flowers",at:[12,-1.2]},{type:"tree",at:[33.5,9]},{type:"tree",at:[26,-3.2]}]},{id:"g4",name:"Bank Job",par:3,circle:4,size:[26,15],tee:[3,3],cup:[23,3],tip:"Bounce it off the wall!",border:"wall",ground:ni([[0,.5,3],[11.5,0,1.5],[11.5,8.5,1.5],[14.5,8.5,1.5],[14.5,0,1.5],[26,.5,3],[26,15,4],[0,15,4]]),zones:[{surface:"green",circle:{c:[23,3],r:3.8}}],props:[{type:"flowerbox",at:[13,2]},{type:"flowerbox",at:[13,5.2]},{type:"flowers",at:[13,7.6]},{type:"tree",at:[-3.3,7]},{type:"flowers",at:[6,16.3]},{type:"flowers",at:[20,16.3]},{type:"bush",at:[27.6,9]},{type:"sign",at:[1,-1]},{type:"tree",at:[29.3,-1.5]}]},{id:"g5",name:"Toadstool Trail",par:3,circle:3,size:[42,22],tee:[4,6],cup:[37,16],tip:"Move the white ball!",border:"wall",ground:ni([[0,1.5,3],[19,1.5,6],[29,11.5,4],[42,11.5,3],[42,20.5,3],[23,20.5,6],[13,10.5,4],[0,10.5,3]]),zones:[{surface:"green",circle:{c:[37,16],r:3.5}}],posts:[{at:[1.6,6],r:.7,kind:"mushroom"},{at:[15.5,8.2],r:1.5,kind:"mushroom"},{at:[23.5,12.5],r:1.2,kind:"mushroom"},{at:[29.5,14.2],r:.8,kind:"mushroom"}],props:[{type:"sign",at:[-1.4,3.5]},{type:"toadstool",at:[5,17],scale:2.6},{type:"toadstool",at:[9.5,19.5],scale:1.8},{type:"tree",at:[2.5,20]},{type:"toadstool",at:[35,5],scale:2.6},{type:"toadstool",at:[29.5,4],scale:1.8},{type:"tree",at:[40,3]},{type:"flowers",at:[3,12]},{type:"flowers",at:[11,12.2]},{type:"toadstool",at:[7,11.6]},{type:"toadstool",at:[15,13.8]},{type:"flowers",at:[25.5,5.5]},{type:"toadstool",at:[29,9.2]},{type:"flowers",at:[33,10.2]},{type:"toadstool",at:[39.5,10.3]},{type:"toadstool",at:[10,.3]},{type:"flowers",at:[16,-.3]},{type:"toadstool",at:[31,21.8]},{type:"flowers",at:[37,21.7]},{type:"statue8",at:[45.6,16]},{type:"tree",at:[20,24.3]}]},{id:"g6",name:"Up & Over",par:3,circle:4,size:[42,22],tee:[4,5],cup:[36,11],tip:"Uphill? Hit harder.",border:"hedge",ground:ni([[0,1,3],[16,1,3],[20,3,2],[42,3,4],[42,21,4],[28,21,2],[26.5,18.5,1.5],[20.5,18.5,2],[12,21,4],[0,12,4]]),steps:[{axis:"x",from:22.5,to:26,h:1.4,band:[-5,6.5]},{axis:"x",from:25.75,to:26,h:1.4,band:[6.75,12.75]},{axis:"x",from:21,to:26,h:1.4,band:[13,40]}],walls:[{kind:"wall",pts:[[22.5,6.75],[25.75,6.75],[25.75,12.75],[21,12.75]]}],zones:[{surface:"green",circle:{c:[36,11],r:4}}],props:[{type:"sign",at:[-1.4,3]},{type:"tree",at:[4,19]},{type:"flowers",at:[1,15.5]},{type:"bush",at:[8,20.5]},{type:"flowers",at:[13.5,22.4]},{type:"flowers",at:[17,21.2]},{type:"flowerbox",at:[23.5,19.7]},{type:"bush",at:[27.3,22.2]},{type:"flowers",at:[6,-.5]},{type:"bush",at:[12,-.6]},{type:"flowers",at:[21,1.6]},{type:"flowerbox",at:[31,1.6]},{type:"flowers",at:[37,1.7]},{type:"tree",at:[45.2,5]},{type:"statue8",at:[45.6,13]},{type:"flowers",at:[34,22.3]},{type:"tree",at:[40,24.5]}]},{id:"g7",name:"Sidewinder",par:3,circle:4,size:[42,20],tee:[2.5,3.5],cup:[39,15],tip:"Arrows show the slope.",border:"wall",tilt:[0,.05],ground:ni([[0,1,3],[12,0,8],[30,2.5,8],[42,7,4],[42,19.5,4],[32,20,8],[14,16,8],[0,12.5,3]]),zones:[{surface:"green",circle:{c:[39,15],r:4}}],props:[{type:"tree",at:[4,18]},{type:"tree",at:[18,21.5]},{type:"flowers",at:[8,15.5]},{type:"flowers",at:[26,20.3]},{type:"bush",at:[22,.2]},{type:"flowers",at:[36,3.2]},{type:"tree",at:[44.8,2]},{type:"sign",at:[.5,-1]}]},{id:"g8",name:"Sandy Toes",par:3,circle:3.5,size:[40,20],tee:[4,11],cup:[33,8.5],tip:"Sand slows the 8.",border:"wall",ground:ni([[0,4,3],[12,1,6],[32,1,5],[40,4,4],[40,16,4],[32,20,5],[12,20,6],[0,18,3]]),zones:[{surface:"green",circle:{c:[33,8.5],r:3.6}},{surface:"sand",poly:ni([[13,5,3],[20,2.5,4],[29,3.5,3],[30,7,2],[27,10.6,3],[17,10.6,3],[12.5,8.5,2]])},{surface:"sand",poly:vu([33,8.5],3,4.6,-70,80)}],props:[{type:"flowers",at:[22,-.5]},{type:"bush",at:[9,.2]},{type:"flowers",at:[22,21]},{type:"bush",at:[36,19.2]},{type:"tree",at:[-3.4,11]},{type:"tree",at:[43.5,10]},{type:"sign",at:[.5,2]}]},{id:"g9",name:"King of the Hill",par:4,circle:3.5,size:[50,28],tee:[5,5],cup:[37,17.5],tip:"Find the way up!",border:"hedge",ground:ni([[0,0,4],[14.5,0,1.5],[14.5,14,1.5],[17.5,14,1.5],[17.5,0,1.5],[50,0,5],[50,28,5],[0,28,4]]),plateaus:[{circle:{c:[37,17],r:5},h:1.5,ramp:4,linear:!0}],arcs:[{kind:"hedge",c:[37,17],r:5,from:250,to:530}],zones:[{surface:"green",circle:{c:[37,17],r:4.6}},{surface:"sand",poly:vu([37,17],9.3,11,255,525)}],props:[{type:"flowerbox",at:[16,3]},{type:"flowerbox",at:[16,9]},{type:"flowers",at:[16,12.6]},{type:"tree",at:[-3.5,21]},{type:"tree",at:[53.5,8]},{type:"tree",at:[30,31.5]},{type:"flowers",at:[8,-1]},{type:"flowers",at:[33,-1]},{type:"statue8",at:[53.6,22]},{type:"sign",at:[-1,2]}]}],_u=i=>Math.round(i*100)/100,$o=(i,t)=>[_u(i),_u(t)];function In(i,t=2.5,e=5,n=!0){const s=i.filter((a,c)=>{const l=i[(c+i.length-1)%i.length];return!n&&c===0||Math.hypot(a[0]-l[0],a[1]-l[1])>1e-6}),r=[],o=s.length;for(let a=0;a<o;a++){const c=s[a],l=c[2]??t;if(!n&&(a===0||a===o-1)){r.push($o(c[0],c[1]));continue}const u=s[(a+o-1)%o],d=s[(a+1)%o],f=Math.hypot(u[0]-c[0],u[1]-c[1]),h=Math.hypot(d[0]-c[0],d[1]-c[1]),g=[(u[0]-c[0])/f,(u[1]-c[1])/f],x=[(d[0]-c[0])/h,(d[1]-c[1])/h],m=Math.max(-1,Math.min(1,g[0]*x[0]+g[1]*x[1])),p=Math.acos(m)/2;if(!l||p>1.55){r.push($o(c[0],c[1]));continue}const y=Math.min(l/Math.tan(p),f*.48,h*.48),M=[c[0]+g[0]*y,c[1]+g[1]*y],S=[c[0]+x[0]*y,c[1]+x[1]*y];for(let R=0;R<=e;R++){const P=R/e,b=(1-P)*(1-P),w=2*(1-P)*P,v=P*P;r.push($o(b*M[0]+w*c[0]+v*S[0],b*M[1]+w*c[1]+v*S[1]))}}return r}function Gc(i,t,e,n,s=10){const r=Math.max(2,Math.ceil(Math.abs(n-e)/s)),o=[];for(let a=0;a<=r;a++){const c=(e+(n-e)*a/r)*Math.PI/180;o.push($o(i[0]+Math.cos(c)*t,i[1]+Math.sin(c)*t))}return o}function Lp(i,t,e){const n=r=>i.reduce((o,a,c)=>Math.hypot(a[0]-r[0],a[1]-r[1])<Math.hypot(i[o][0]-r[0],i[o][1]-r[1])?c:o,0),s=[];for(let r=n(t),o=n(e);s.push(i[r]),r!==o;r=(r+1)%i.length);return s}const Ip={id:"l1",name:"Bend It",par:3,circle:4.5,size:[40,22],tee:[5,11],cup:[35,11],tip:"Slide the dot to bend the 8!",ground:In([[1,4],[12,1],[26,1.5],[39,3],[39,19],[26,20.5],[12,21],[1,18]],4.5),border:"wall",posts:[{at:[16,12.3],r:1.6,kind:"tree"},{at:[30.5,14],r:1.3,kind:"post"},{at:[30.5,8],r:1.3,kind:"post"}],zones:[{surface:"green",circle:{c:[35,11],r:4}}],props:[{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[41.5,22.5]},{type:"tree",at:[20,23.5],scale:1.2},{type:"bush",at:[6,-1.5]},{type:"bush",at:[33,-1.5]},{type:"flowers",at:[18,-1.6]},{type:"flowers",at:[-2,11]},{type:"sign",at:[-2.2,6]}]},La=(i,t,e,n)=>{const s=n?1:-1;return[{kind:"hedge",pts:[[i-1.2,t],[i,t+s*1.2],[i+1.2,t]]},{kind:"hedge",pts:[[i,t+s*1.2],[i,e]]}]},Dp={id:"l2",name:"Slalom",par:4,circle:4,size:[46,22],tee:[4,11.5],cup:[38,9],tip:"Bend left, then bend right!",ground:In([[1,2],[23,1],[45,2],[45,20],[23,21],[1,20]],4),border:"wall",walls:[...La(10,20.36,14,!1),...La(18,1.36,9.1,!0),...La(29,1.5,9.2,!0)],posts:[{at:[10,13],r:1.2,kind:"tree"},{at:[18,10.1],r:1.2,kind:"tree"},{at:[29,10.2],r:1.2,kind:"tree"}],zones:[{surface:"rough",rect:[0,0,46,22]},{surface:"fairway",poly:In([[2,5],[23,4],[44,5],[44,17],[23,18],[2,17]],3)},{surface:"green",circle:{c:[38,9],r:3.5}}],props:[{type:"tree",at:[-1.5,23]},{type:"tree",at:[47.5,-1]},{type:"tree",at:[30,23.5]},{type:"flowers",at:[14,-1.5]},{type:"flowers",at:[24,-1.6]},{type:"bush",at:[47.5,14]},{type:"sign",at:[-2,6]}]},zp={id:"l3",name:"Lily Pad Lagoon",par:3,circle:4,size:[44,24],tee:[4,12],cup:[39.5,16.5],tip:"Splash = +1",ground:In([[1,4],[10,.8],[34,.8],[43,4],[43,20],[34,23.2],[10,23.2],[1,20]],4),border:"wall",zones:[{surface:"water",ellipse:{c:[22,12],rx:8.5,ry:6.2}},{surface:"fairway",rect:[12.5,10.5,31.5,13.5]},{surface:"green",circle:{c:[39,16],r:3.8}}],props:[{type:"bridge",at:[22,12],r:8.6,scale:.75},{type:"lilypad",at:[17,16],r:.9},{type:"lilypad",at:[20.5,17.2],r:.7},{type:"lilypad",at:[26.5,15.6],r:.8},{type:"lilypad",at:[18.5,7.6],r:.8},{type:"lilypad",at:[24,6.8],r:.7},{type:"lilypad",at:[27.5,8.5],r:.9},{type:"reeds",at:[15,14.6]},{type:"reeds",at:[28.5,15]},{type:"reeds",at:[15.5,9]},{type:"reeds",at:[28.6,9]},{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[45.5,1]},{type:"flowers",at:[22,25.5]},{type:"flowers",at:[22,-1.6]}]},Mu=In([[6,21.2],[1.5,20.4],[1,4],[4,1.2],[36,1.2],[39,4],[38.5,20.4],[34,21.2]],3,5,!1),Np={id:"l4",name:"Boing Boing",par:3,circle:3.5,size:[40,22],tee:[8,6],cup:[32,6],tip:"Cushions bounce more!",ground:Mu,border:null,walls:[{kind:"wall",pts:Mu},{kind:"cushion",pts:[[34,21.2],[6,21.2]]},{kind:"hedge",pts:[[9.9,1.2],[12.3,3.2]]},{kind:"hedge",pts:[[30.1,1.2],[27.7,3.2]]}],arcs:[{kind:"hedge",c:[20,1.2],r:8,from:14,to:166}],zones:[{surface:"rough",circle:{c:[20,1.2],r:7.6}},{surface:"green",circle:{c:[32,6],r:3.5}}],props:[{type:"flowers",at:[17,4]},{type:"flowers",at:[22.5,5]},{type:"bush",at:[20,2.6],scale:1.3},{type:"flowers",at:[14.5,2.4]},{type:"flowers",at:[25.5,2.4]},{type:"tree",at:[-1.5,22]},{type:"tree",at:[41.5,22]},{type:"bush",at:[20,23.6]},{type:"flowers",at:[10,23.6]},{type:"flowers",at:[30,23.6]}]},nd=(i,t,e=.5)=>[...Gc([26,2.5],i,0,180,7.5).map(([n,s])=>[n,2.5+(s-2.5)*t/i]),[26-i,e],[26+i,e]],yu=In(nd(25,21.6),2.5),Up={id:"l5",name:"Banana Bay",par:4,circle:3.5,size:[52,25],tee:[6,4],cup:[46,4],tip:"Dot up = bend late!",ground:yu,border:"wall",zones:[{surface:"rough",poly:yu},{surface:"fairway",poly:In(nd(23,19.4,2.2),2)},{surface:"water",ellipse:{c:[26,2],rx:17,ry:14}},{surface:"green",circle:{c:[46.5,5.5],r:3}}],props:[{type:"lilypad",at:[20,8],r:.9},{type:"lilypad",at:[26,11],r:.8},{type:"lilypad",at:[32,7],r:1},{type:"lilypad",at:[24,4],r:.7},{type:"fountain",at:[26,3.5]},{type:"reeds",at:[11.2,6.8]},{type:"reeds",at:[40.8,6.8]},{type:"reeds",at:[18,13.6]},{type:"reeds",at:[34,13.6]},{type:"tree",at:[-1.5,24]},{type:"tree",at:[53.5,24]},{type:"tree",at:[26,26.5],scale:1.2},{type:"flowers",at:[-2,12]},{type:"flowers",at:[54,12]}]},Su=In([[39,4],[39,19],[33,21],[25,21],[25,11.5],[15,11.5],[15,21],[8,21],[1,18],[1,6],[5,1.5],[12,1],[28,1],[33,2.5]],2.5),Fp={id:"l6",name:"Rooftop Rally",par:3,circle:3,size:[40,22],tee:[5,16],cup:[33,15],tip:"Open edge = out!",ground:Su,border:null,walls:[{kind:"wall",pts:Lp(Su,[39,18],[2,7])},{kind:"cushion",pts:[[12,1],[28,1]]}],tilt:[0,.03],zones:[{surface:"green",circle:{c:[33,15],r:3.5}}],props:[{type:"tree",at:[20,17.5],scale:1.1},{type:"flowers",at:[17.5,14]},{type:"flowers",at:[22.5,14]},{type:"flowerbox",at:[4,23]},{type:"flowerbox",at:[11,23.2]},{type:"flowerbox",at:[29,23.2]},{type:"flowerbox",at:[36,22.8]},{type:"flowerbox",at:[-1.5,12],rot:90},{type:"sign",at:[-1.8,18]}]},Op=[[1,3.5],[3.5,1],[36,1],[43,8],[43,8.6],[35.6,16],[30.5,16],[30.5,20.5],[28,23],[8,23],[1,16]],kp={id:"l7",name:"Tight Squeeze",par:4,circle:2.5,size:[44,24],tee:[5,4],cup:[19,19.5],tip:"Stuck on a cushion? Push it in!",ground:Op,border:null,walls:[{kind:"hedge",pts:[[36,1],[3.5,1],[1,3.5],[1,16]]},{kind:"hedge",pts:[[8,23],[28,23],[30.5,20.5],[30.5,17.6]]},{kind:"cushion",pts:[[36,1],[43,8],[43,8.6],[35.6,16],[27,16]]},{kind:"cushion",pts:[[28.9,16],[30.5,17.6]]},{kind:"cushion",pts:[[1,16],[8,23]]},{kind:"cushion",pts:[[8.8,7.8],[1,15.6]]},{kind:"cushion",pts:[[1,6.2],[2.6,7.8],[36,7.8]]},{kind:"cushion",pts:[[8,16],[24.5,16]]}],zones:[{surface:"water",poly:[[.8,7.6],[8.8,7.6],[.8,15.6]]},{surface:"green",circle:{c:[19,19.5],r:2.6}}],props:[{type:"lilypad",at:[2.6,10],r:.6},{type:"reeds",at:[2,13]},{type:"flowerbox",at:[36,22.5]},{type:"flowerbox",at:[40.5,18.5],rot:90},{type:"bush",at:[37.5,19.5]},{type:"tree",at:[-1.5,24.5]},{type:"tree",at:[45.5,-1]},{type:"flowers",at:[20,-1.6]},{type:"sign",at:[-2,6]}]},Bp={id:"l8",name:"Island Hop",par:4,circle:3,size:[40,34],tee:[8.5,27],cup:[12,8.5],tip:"Hop island to island!",ground:In([[1,5],[4,1],[35,1.5],[39,5],[38.5,29],[35,33],[5,32.5],[1.5,29]],4),border:"wall",walls:[{kind:"cushion",pts:[[13.8,25],[22,25]]},{kind:"cushion",pts:[[13.8,29],[22.2,29]]},{kind:"cushion",pts:[[22.5,22.4],[22.5,13.6]]},{kind:"cushion",pts:[[26.5,21],[26.5,11.8]]}],arcs:[{kind:"cushion",c:[9,27],r:4.6,from:30,to:330},{kind:"cushion",c:[28.5,25],r:6.2,from:-75,to:150},{kind:"cushion",c:[13,9],r:4.9,from:110,to:250}],hills:[{c:[29,25],r:4.5,h:.25}],plateaus:[{circle:{c:[12,8.5],r:2.8},h:.25,ramp:1.2}],zones:[{surface:"water",rect:[0,0,40,34]},{surface:"rough",poly:In([[0,0],[5.5,0],[5.5,13],[3.5,19],[0,20]],2.5)},{surface:"rough",poly:In([[31.5,0],[40,0],[40,16],[35,15.5],[31.5,13]],2.5)},{surface:"rough",poly:In([[15.5,31.5],[21,31.5],[22,34],[14.5,34]],1.5)},{surface:"fairway",circle:{c:[9,27],r:5}},{surface:"fairway",circle:{c:[28.5,25],r:6.6}},{surface:"fairway",ellipse:{c:[18,9],rx:9.5,ry:5.5}},{surface:"fairway",rect:[13.6,25,22.6,29]},{surface:"fairway",rect:[22.5,11,26.5,22]},{surface:"green",circle:{c:[12,8.5],r:2.8}}],props:[{type:"bridge",at:[18,27],r:4.2},{type:"bridge",at:[24.5,17],r:4.4,rot:90},{type:"lilypad",at:[6,17],r:.9},{type:"lilypad",at:[33,13],r:.8},{type:"lilypad",at:[35.5,7],r:1},{type:"lilypad",at:[17,20],r:.7},{type:"lilypad",at:[5,6],r:.8},{type:"lilypad",at:[34,31],r:.7},{type:"reeds",at:[3.4,21]},{type:"reeds",at:[36,20.5]},{type:"reeds",at:[29,4]},{type:"reeds",at:[3.5,12]},{type:"fountain",at:[33.5,9]},{type:"tree",at:[-1.5,35]},{type:"tree",at:[41.5,35]},{type:"flowers",at:[20,35.5]}]},eo=Math.atan2(Math.sqrt(29),14)*(180/Math.PI),Hp=[...Gc([44,16],15,180+eo,540-eo,7.5),...Gc([16,16],15,eo,360-eo,7.5).slice(1,-1)],Gp={id:"l9",name:"Figure Eight",par:5,circle:3.5,size:[60,32],tee:[4.5,16],cup:[55.5,16],tip:"Last hole: loop the 8!",ground:In(Hp,2,4),border:"wall",posts:[{at:[30,16],r:1.8,kind:"bumper"}],arcs:[{kind:"cushion",c:[16,16],r:8.5,from:100,to:170},{kind:"cushion",c:[16,16],r:8.5,from:190,to:260},{kind:"cushion",c:[44,16],r:8.5,from:10,to:80},{kind:"cushion",c:[44,16],r:8.5,from:280,to:350}],plateaus:[{circle:{c:[55.5,16],r:2.6},h:.3,ramp:1.5}],zones:[{surface:"rough",circle:{c:[16,16],r:15.5}},{surface:"rough",circle:{c:[44,16],r:15.5}},{surface:"fairway",circle:{c:[16,16],r:13}},{surface:"fairway",circle:{c:[44,16],r:13}},{surface:"fairway",rect:[26,9.5,34,22.5]},{surface:"water",circle:{c:[16,16],r:8}},{surface:"water",circle:{c:[44,16],r:8}},{surface:"green",circle:{c:[55.5,16],r:3}}],props:[{type:"fountain",at:[16,16],scale:1.2},{type:"fountain",at:[44,16],scale:1.2},{type:"lilypad",at:[12,12],r:.9},{type:"lilypad",at:[20.5,19.5],r:.8},{type:"lilypad",at:[13,20],r:.7},{type:"lilypad",at:[47.5,12.5],r:.9},{type:"lilypad",at:[40,19.5],r:.8},{type:"lilypad",at:[48,20.5],r:.7},{type:"reeds",at:[9.5,19.5]},{type:"reeds",at:[22.5,12]},{type:"reeds",at:[37.5,12.5]},{type:"reeds",at:[50.5,19.5]},{type:"statue8",at:[58.5,28],scale:1.3},{type:"flowers",at:[56,30.5]},{type:"flowers",at:[60.5,25]},{type:"tree",at:[1.5,29.5]},{type:"tree",at:[1.5,2.5]},{type:"tree",at:[58.5,3]},{type:"bush",at:[30,27.5]},{type:"bush",at:[30,4.5]},{type:"flowers",at:[29,26.5]},{type:"flowers",at:[31,5.5]}]},Vp=[Ip,Dp,zp,Np,Up,Fp,kp,Bp,Gp],Kr=Object.freeze([{id:1,name:"Greenside",holes:Pp},{id:2,name:"Lakeside",holes:Vp}]),Ai=Object.freeze(Kr.flatMap((i,t)=>i.holes.map((e,n)=>Object.freeze({...e,round:i.id,number:t*9+n+1})))),Kt=Object.freeze({DT:1/240,R:.5,MAX_EVENTS:8,E_BALL:.95,SLOPE_K:21,GRAD_EPS:.1,V_SLEEP:.05,SLOW_V:.3,SLOW_MAX_T:2.5,MAX_SHOT_T:20,D_MAX:40,D_REF_DECEL:3,POWER_MIN:.03,PLACE_GAP:.05,CUE_MAX_TRAVEL:12,CUE_FADE_T:.5,GHOST_DECEL:8,CURVE_K:.3,CURVE_LEN:4,EIGHT_CURVE_K:.04,EIGHT_CURVE_LEN:15,EIGHT_EARLY_LEN:5,EIGHT_HOOK_START:3,EIGHT_HOOK_LEN:7,HOLE_R:1.1,HOLE_VCAP:8,LIP_W:.5,LIP_A:4,HOLE_SETTLE_V:1,HOP_KEEP:.85}),wu=Object.freeze({green:Object.freeze({decel:2}),fairway:Object.freeze({decel:3}),rough:Object.freeze({decel:6}),sand:Object.freeze({decel:14}),ice:Object.freeze({decel:.8})}),Vc=Object.freeze({wall:Object.freeze({e:.6,keep:.95}),hedge:Object.freeze({e:.6,keep:.95}),cushion:Object.freeze({e:.85,keep:.97}),bumper:Object.freeze({e:1,keep:1}),post:Object.freeze({e:.6,keep:.95}),tree:Object.freeze({e:.6,keep:.95}),lollipop:Object.freeze({e:.6,keep:.95}),mushroom:Object.freeze({e:.6,keep:.95})}),Xi=1/0,Ia=i=>Vc[i]||Vc.wall;function Wp(i){const t=[],e=[],n=new Set,s=(l,u,d)=>{const f=l+","+u;n.has(f)||(n.add(f),e.push({x:l,z:u,e:d.e,keep:d.keep,kind:d===Vc.cushion?"cushion":"wall",minx:l,maxx:l,minz:u,maxz:u}))};for(const l of i.segments||[]){const u=l.bx-l.ax,d=l.bz-l.az,f=u*u+d*d;if(f===0)continue;const h=Math.sqrt(f),g=Ia(l.kind);t.push({ax:l.ax,az:l.az,ex:u,ez:d,len2:f,nx:-d/h,nz:u/h,e:g.e,keep:g.keep,kind:l.kind||"wall",minx:Math.min(l.ax,l.bx),maxx:Math.max(l.ax,l.bx),minz:Math.min(l.az,l.bz),maxz:Math.max(l.az,l.bz)}),s(l.ax,l.az,g),s(l.bx,l.bz,g)}const r=(i.posts||[]).map(l=>{const u=Ia(l.kind||"post");return{x:l.x,z:l.z,r:l.r,e:u.e,keep:u.keep,kind:l.kind||"post",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),o=(i.arcs||[]).map(l=>{const u=Ia(l.kind);return s(l.x+l.sx*l.r,l.z+l.sz*l.r,u),s(l.x+l.ex*l.r,l.z+l.ez*l.r,u),{x:l.x,z:l.z,r:l.r,sx:l.sx,sz:l.sz,ex:l.ex,ez:l.ez,e:u.e,keep:u.keep,kind:l.kind||"wall",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),a=bu(0,i.eight.x,i.eight.z);a.mode="off";const c=bu(1,i.eight.x,i.eight.z);return{t:0,shotT:0,active:!1,balls:[a,c],segs:t,caps:e,posts:r,arcs:o,hole:{x:i.hole.x,z:i.hole.z},placeR:i.placeR||4,lieX:i.eight.x,lieZ:i.eight.z,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function bu(i,t,e){return{id:i,x:t,z:e,px:t,pz:e,vx:0,vz:0,mode:"rest",spin:0,top:0,travel:0,curveS:0,slowT:0,fadeT:0,overHole:!1,decel:0,slopeA2:0}}function Eu(i,t,e){const n=i.balls[1];n.x=n.px=t,n.z=n.pz=e,n.vx=0,n.vz=0,n.mode="rest",n.spin=0,n.top=0,n.curveS=0,n.slowT=0,n.overHole=!1,i.lieX=t,i.lieZ=e}function id(i){const t=i<Kt.POWER_MIN?Kt.POWER_MIN:i>1?1:i;return Math.sqrt(2*Kt.D_REF_DECEL*Kt.D_MAX*t)/((1+Kt.E_BALL)/2)}function sd(i){const t=typeof i=="number"?i:i&&i.x||0,e=typeof i=="number"?0:i&&i.y||0;return{side:t<-1?-1:t>1?1:t,top:e<-1?-1:e>1?1:e}}function rd(i,t,e,n){const s=i.balls[0],r=i.balls[1],o=Math.sqrt(t.dx*t.dx+t.dz*t.dz),a=id(n);s.x=s.px=t.x,s.z=s.pz=t.z,s.vx=t.dx/o*a,s.vz=t.dz/o*a;const c=sd(e);s.mode="cue",s.spin=c.side,s.top=c.top,s.travel=0,s.fadeT=0,i.lieX=r.x,i.lieZ=r.z,r.slowT=0,i.shotT=i.t,i.active=!0}const Wc={x:0,z:0},He={t:0,kind:0,i:0,j:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""},oi=0,od=1,Vl=2,Da=3;function ad(i,t=Kt.DT){const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];s.px=s.x,s.pz=s.z,s.mode==="cue"?Xp(s,t):s.mode==="roll"?Kp(i,s,t):s.mode==="ghost"&&qp(s,t)}Zp(i,t);for(let n=0;n<e.length;n++)Qp(i,e[n],t);if(i.t+=t,i.active){let n=!1;for(let s=0;s<e.length;s++){const r=e[s].mode;(r==="cue"||r==="roll"||r==="ghost")&&(n=!0)}if(n&&i.t-i.shotT>Kt.MAX_SHOT_T){for(let s=0;s<e.length;s++){const r=e[s];r.mode==="roll"?Xc(i,r):(r.mode==="cue"||r.mode==="ghost")&&(r.mode="off")}n=!1}n||(i.active=!1,i.events.push({type:"shotEnd",t:i.t}))}}function Hr(i){return Math.sqrt(i.vx*i.vx+i.vz*i.vz)}function Gr(i,t,e){const n=1-.5*t*t,s=i.vx*n-i.vz*t,r=i.vx*t+i.vz*n,o=e/Math.sqrt(s*s+r*r);i.vx=s*o,i.vz=r*o}function Xp(i,t){const e=Hr(i);if(i.spin!==0&&e>0){const n=1-i.travel/Kt.CURVE_LEN;n>0&&Gr(i,Kt.CURVE_K*i.spin*n*e*t,e)}i.travel+=e*t}function cd(i,t){const e=Kt.EIGHT_CURVE_LEN;if(t<0){const o=e+(Kt.EIGHT_EARLY_LEN-e)*-t;return i<o?Kt.EIGHT_CURVE_K*e/o*(1-i/o):0}const n=i<e?Kt.EIGHT_CURVE_K*(1-i/e):0;if(t===0)return n;const s=i-Kt.EIGHT_HOOK_START,r=s>0&&s<Kt.EIGHT_HOOK_LEN?Kt.EIGHT_CURVE_K*e*s/(Kt.EIGHT_HOOK_LEN*Kt.EIGHT_HOOK_LEN):0;return n*(1-t)+r*t}function qp(i,t){const e=Hr(i),n=Kt.GHOST_DECEL*t;if(e<=n)i.vx=0,i.vz=0;else{const s=(e-n)/e;i.vx*=s,i.vz*=s}}function Yp(i,t,e,n=Wc){const s=Kt.GRAD_EPS,r=i.heightAt;return n.x=(r(t+s,e)-r(t-s,e))/(2*s),n.z=(r(t,e+s)-r(t,e-s))/(2*s),n}function Kp(i,t,e){const n=wu[i.surfaceAt(t.x,t.z)]||wu.fairway;Yp(i,t.x,t.z);let s=-Kt.SLOPE_K*Wc.x,r=-Kt.SLOPE_K*Wc.z;const o=i.hole.x-t.x,a=i.hole.z-t.z,c=o*o+a*a,l=Kt.HOLE_R+Kt.LIP_W;if(c<l*l&&c>=Kt.HOLE_R*Kt.HOLE_R){const h=Math.sqrt(c);s+=Kt.LIP_A*o/h,r+=Kt.LIP_A*a/h}if(t.spin!==0){const h=Hr(t),g=1-t.curveS/Kt.EIGHT_CURVE_LEN;if(t.top===0)g>0&&h>0?Gr(t,Kt.EIGHT_CURVE_K*t.spin*g*h*e,h):g<=0&&(t.spin=0);else if(g<=0)t.spin=0;else if(h>0){const x=cd(t.curveS,t.top);x>0&&Gr(t,x*t.spin*h*e,h)}t.curveS+=h*e}t.vx+=s*e,t.vz+=r*e;const u=Hr(t),d=n.decel*e,f=s*s+r*r;if(u>d){const h=(u-d)/u;t.vx*=h,t.vz*=h}else if(f<=n.decel*n.decel)t.vx=0,t.vz=0;else{const h=Math.sqrt(f),g=(h-n.decel)*e/h;t.vx=s*g,t.vz=r*g}t.decel=n.decel,t.slopeA2=f}function jo(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=a*e+c*n;if(l>=0)return Xi;const u=a*a+c*c-o*o;if(u<=0)return 0;const d=e*e+n*n,f=l*l-d*u;return f<0?Xi:u/(-l+Math.sqrt(f))}function $p(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=e*e+n*n;if(l===0)return Xi;const u=a*e+c*n,d=a*a+c*c-o*o;if(d>=0)return u>0?0:Xi;const f=Math.sqrt(u*u-l*d);return u>0?-d/(u+f):(-u+f)/l}const Tu=1e-9;function no(i,t,e,n,s){return i.maxx<t||i.minx>e||i.maxz<n||i.minz>s}function ld(i,t,e,n,s,r,o,a){let c=o,l=oi;const u=(n<0?-n:n)*o+r+Tu,d=(s<0?-s:s)*o+r+Tu,f=t-u,h=t+u,g=e-d,x=e+d,m=i.segs;for(let S=0;S<m.length;S++){const R=m[S];if(no(R,f,h,g,x))continue;let P=R.nx,b=R.nz,w=(t-R.ax)*P+(e-R.az)*b;w<0&&(P=-P,b=-b,w=-w);const v=n*P+s*b;if(v>=0)continue;let _=(w-r)/-v;if(_<0&&(_=0),_>c||_===c&&l!==oi)continue;const T=t+n*_,z=e+s*_,U=((T-R.ax)*R.ex+(z-R.az)*R.ez)/R.len2;U<0||U>1||(c=_,l=Vl,a.nx=P,a.nz=b,a.e=R.e,a.keep=R.keep,a.ck=R.kind)}const p=i.caps;for(let S=0;S<p.length;S++){const R=p[S];if(no(R,f,h,g,x))continue;const P=jo(t,e,n,s,R.x,R.z,r);(P<c||P===c&&l===oi)&&(c=P,l=Da,a.cx=R.x,a.cz=R.z,a.sign=1,a.e=R.e,a.keep=R.keep,a.ck=R.kind)}const y=i.posts;for(let S=0;S<y.length;S++){const R=y[S];if(no(R,f,h,g,x))continue;const P=jo(t,e,n,s,R.x,R.z,R.r+r);(P<c||P===c&&l===oi)&&(c=P,l=Da,a.cx=R.x,a.cz=R.z,a.sign=1,a.e=R.e,a.keep=R.keep,a.ck=R.kind)}const M=i.arcs;for(let S=0;S<M.length;S++){const R=M[S];if(no(R,f,h,g,x))continue;const P=t-R.x,b=e-R.z,w=P*P+b*b>R.r*R.r,v=w?jo(t,e,n,s,R.x,R.z,R.r+r):$p(t,e,n,s,R.x,R.z,R.r-r);if(!(v<c||v===c&&l===oi))continue;const _=t+n*v-R.x,T=e+s*v-R.z;R.sx*T-R.sz*_<0||_*R.ez-T*R.ex<0||(c=v,l=Da,a.cx=R.x,a.cz=R.z,a.sign=w?1:-1,a.e=R.e,a.keep=R.keep,a.ck=R.kind)}return a.t=c,a.kind=l,l===oi?Xi:c}function Au(i){return i==="cue"||i==="roll"||i==="rest"}function za(i){return i==="cue"||i==="roll"}const ii={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function jp(i,t){const e=i.balls;He.kind=oi,He.t=t;for(let n=0;n<e.length;n++){const s=e[n];if(!Au(s.mode))continue;for(let o=n+1;o<e.length;o++){const a=e[o];if(!Au(a.mode)||!za(s.mode)&&!za(a.mode))continue;const c=jo(s.x,s.z,s.vx-a.vx,s.vz-a.vz,a.x,a.z,2*Kt.R);(c<He.t||c===He.t&&He.kind===oi)&&(He.t=c,He.kind=od,He.i=n,He.j=o)}if(!za(s.mode))continue;const r=ld(i,s.x,s.z,s.vx,s.vz,Kt.R,He.t,ii);(r<He.t||r===He.t&&He.kind===oi&&r!==Xi)&&(He.t=r,He.kind=ii.kind,He.i=n,He.nx=ii.nx,He.nz=ii.nz,He.cx=ii.cx,He.cz=ii.cz,He.sign=ii.sign,He.e=ii.e,He.keep=ii.keep,He.ck=ii.ck)}return He}function Cu(i,t){if(t===0)return;const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];(s.mode==="cue"||s.mode==="roll"||s.mode==="ghost")&&(s.x+=s.vx*t,s.z+=s.vz*t)}}function Zp(i,t){let e=t;for(let n=0;n<Kt.MAX_EVENTS;n++){const s=jp(i,e);if(s.kind===oi){Cu(i,e);return}if(Cu(i,s.t),Jp(i,s),e-=s.t,e<=0)return}}function Jp(i,t){const e=i.balls;if(t.kind===od){const l=e[t.i],u=e[t.j];let d=u.x-l.x,f=u.z-l.z;const h=Math.sqrt(d*d+f*f);d/=h,f/=h;const g=l.vx-u.vx,x=l.vz-u.vz,m=g*d+x*f;if(m<=0)return;const p=(1+Kt.E_BALL)/2*m;l.vx-=p*d,l.vz-=p*f,u.vx+=p*d,u.vz+=p*f;const y=l.mode==="cue"?t.i:u.mode==="cue"?t.j:-1;if(l.mode==="rest"&&(l.mode="roll"),u.mode==="rest"&&(u.mode="roll"),y>=0){const M=e[y],S=e[y===t.i?t.j:t.i],R=y===t.i?1:-1;i.events.push({type:"contact",t:i.t,gx:M.x,gz:M.z,nx:d*R,nz:f*R,v8x:S.vx,v8z:S.vz,cutCos:m/Math.sqrt(g*g+x*x),spin:M.spin,top:M.top}),S.spin=M.spin,S.top=M.top,S.curveS=0,S.slowT=0,M.mode="ghost",M.spin=0,M.top=0,M.fadeT=Kt.CUE_FADE_T}else i.events.push({type:"ballHit",t:i.t,speed:m});return}const n=e[t.i];let s,r;if(t.kind===Vl)s=t.nx,r=t.nz;else{s=(n.x-t.cx)*t.sign,r=(n.z-t.cz)*t.sign;const l=Math.sqrt(s*s+r*r);s/=l,r/=l}const o=n.vx*s+n.vz*r;if(o>=0)return;const a=n.vx-o*s,c=n.vz-o*r;n.vx=a*t.keep-t.e*o*s,n.vz=c*t.keep-t.e*o*r,n.spin=0,n.top=0,i.events.push({type:"wall",t:i.t,id:n.id,x:n.x,z:n.z,nx:s,nz:r,speed:-o,kind:t.ck})}function Xc(i,t){t.vx=0,t.vz=0,t.mode="rest",t.slowT=0,t.spin=0,t.top=0,i.events.push({type:"rest",t:i.t,id:t.id,x:t.x,z:t.z})}function Qp(i,t,e){if(t.mode==="ghost"){t.fadeT-=e,t.fadeT<=0&&(t.mode="off");return}if(t.mode!=="cue"&&t.mode!=="roll")return;const n=i.hazardAt(t.x,t.z);if(n){t.mode==="cue"?(t.mode="off",i.events.push({type:"whiff",t:i.t,reason:n,x:t.x,z:t.z})):(t.mode="sunk",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:n,t:i.t,id:t.id,x:t.x,z:t.z,dropX:i.lieX,dropZ:i.lieZ}));return}if(t.mode==="cue"){t.travel>Kt.CUE_MAX_TRAVEL&&(t.mode="ghost",t.fadeT=Kt.CUE_FADE_T,i.events.push({type:"whiff",t:i.t,reason:"miss",x:t.x,z:t.z}));return}const s=t.x-i.hole.x,r=t.z-i.hole.z,o=s*s+r*r,a=Hr(t);if(o<Kt.HOLE_R*Kt.HOLE_R){let c=a<Kt.HOLE_SETTLE_V;if(!c&&!t.overHole&&(c=a<=Kt.HOLE_VCAP,c||(t.vx*=Kt.HOP_KEEP,t.vz*=Kt.HOP_KEEP,i.events.push({type:"hop",t:i.t,id:t.id,x:t.x,z:t.z,speed:a,vcap:Kt.HOLE_VCAP}))),t.overHole=!0,c){t.mode="holed",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:"holed",t:i.t,id:t.id,speed:a});return}}else t.overHole=!1;if(a===0||a<Kt.V_SLEEP&&t.slopeA2<t.decel*t.decel){Xc(i,t);return}a<Kt.SLOW_V?(t.slowT+=e,t.slowT>Kt.SLOW_MAX_T&&Xc(i,t)):t.slowT=0}function gr(i,t,e){const n=i.balls[1],s=t-n.x,r=e-n.z,o=s*s+r*r,a=2*Kt.R+Kt.PLACE_GAP;return o>i.placeR*i.placeR||o<a*a?!1:t0(i,t,e)&&!ud(i,n.x,n.z,t,e)}function ud(i,t,e,n,s){const r=n-t,o=s-e;for(const c of i.segs){const l=r*c.ez-o*c.ex;if(l===0)continue;const u=c.ax-t,d=c.az-e,f=(u*c.ez-d*c.ex)/l,h=(u*o-d*r)/l;if(f>0&&f<1&&h>=0&&h<=1)return!0}const a=r*r+o*o;for(const c of i.arcs){const l=t-c.x,u=e-c.z,d=l*r+u*o,f=l*l+u*u-c.r*c.r,h=d*d-a*f;if(h<0||a===0)continue;const g=Math.sqrt(h);for(const x of[(-d-g)/a,(-d+g)/a]){if(!(x>0&&x<1))continue;const m=l+r*x,p=u+o*x;if(c.sx*p-c.sz*m>=0&&m*c.ez-p*c.ex>=0)return!0}}return!1}function t0(i,t,e){const n=Kt.R;if(i.hazardAt(t,e))return!1;for(const s of i.segs){let r=((t-s.ax)*s.ex+(e-s.az)*s.ez)/s.len2;r=r<0?0:r>1?1:r;const o=s.ax+s.ex*r-t,a=s.az+s.ez*r-e;if(o*o+a*a<n*n)return!1}for(const s of i.posts){const r=s.x-t,o=s.z-e,a=s.r+n;if(r*r+o*o<a*a)return!1}for(const s of i.arcs){const r=t-s.x,o=e-s.z,a=Math.sqrt(r*r+o*o);if(s.sx*o-s.sz*r>=0&&r*s.ez-o*s.ex>=0&&a>s.r-n&&a<s.r+n)return!1}for(const s of i.caps){const r=s.x-t,o=s.z-e;if(r*r+o*o<n*n)return!1}return!0}function io(i,t,e,n){return i.filter(s=>{const r=t<s.minx?s.minx:t>s.maxx?s.maxx:t,o=e<s.minz?s.minz:e>s.maxz?s.maxz:e,a=r-t,c=o-e;return a*a+c*c<=n*n})}function e0(i,t,e){const n=Kt.CUE_MAX_TRAVEL+2*Kt.R+.5;return{t:i.t,shotT:i.shotT,active:!1,balls:i.balls.map(s=>({...s})),segs:io(i.segs,t,e,n),caps:io(i.caps,t,e,n),posts:io(i.posts,t,e,n),arcs:io(i.arcs,t,e,n),hole:i.hole,placeR:i.placeR,lieX:i.lieX,lieZ:i.lieZ,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function Ru(i,t,e,n,s=3){const r=e0(i,t.x,t.z);rd(r,t,e,n);const o=r.balls[0],a=r.balls[1],c=[t.x,t.z],l=Math.ceil((Kt.CUE_MAX_TRAVEL+1)/(id(n)*Kt.DT))+4;for(let u=1;u<=l;u++){ad(r);for(let d=0;d<r.events.length;d++){const f=r.events[d];if(f.type==="wall"&&f.id===0)c.push(f.x,f.z);else if(f.type==="contact"){c.push(f.gx,f.gz);const h=Math.sqrt(f.v8x*f.v8x+f.v8z*f.v8z);return{hit:!0,points:c,ghost:{x:f.gx,z:f.gz},normal:{x:f.nx,z:f.nz},eightDir:{x:f.v8x/h,z:f.v8z/h},eightSpeed:h,cutCos:f.cutCos,spin:f.spin,top:f.top,eightStart:{x:a.x,z:a.z},reason:null}}else if(f.type==="whiff")return c.push(f.x,f.z),{hit:!1,points:c,reason:f.reason}}r.events.length=0,u%s===0&&c.push(o.x,o.z)}return{hit:!1,points:c,reason:"miss"}}const Un={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function n0(i,t,e,n,s,r,o=14,a=3){const l=[t,e];let u=Math.sqrt(n*n+s*s);n/=u,s/=u;let d=0,f=null,h=null,g=!1,x=o;const m=sd(r);let p=m.side;const y=m.top,M={vx:n,vz:s};for(let S=0;S<400&&d<x;S++){const R=x-d<.25?x-d:.25;if(p!==0)if(y===0){const _=1-d/Kt.EIGHT_CURVE_LEN;_>0&&Gr(M,Kt.EIGHT_CURVE_K*p*_*R,1)}else{const _=cd(d,y);_>0&&Gr(M,_*p*R,1)}const P=ld(i,t,e,M.vx,M.vz,Kt.R,R,Un);if(P!==Xi&&!f){t+=M.vx*P,e+=M.vz*P,d+=P,l.push(t,e);let _,T;Un.kind===Vl?(_=Un.nx,T=Un.nz):(_=(t-Un.cx)*Un.sign,T=(e-Un.cz)*Un.sign,u=Math.sqrt(_*_+T*T),_/=u,T/=u);const z=M.vx*_+M.vz*T,U=(M.vx-z*_)*Un.keep-Un.e*z*_,X=(M.vz-z*T)*Un.keep-Un.e*z*T;u=Math.sqrt(U*U+X*X),M.vx=U/u,M.vz=X/u,f={x:t,z:e},p=0,x=d+a;continue}if(P!==Xi){t+=M.vx*P,e+=M.vz*P,l.push(t,e);break}t+=M.vx*R,e+=M.vz*R,d+=R,l.push(t,e);const b=i.hazardAt(t,e);if(b){h=b;break}const w=t-i.hole.x,v=e-i.hole.z;w*w+v*v<Kt.HOLE_R*Kt.HOLE_R&&(g=!0)}return{points:l,hazard:h,bounce:f,cup:g}}function i0(i,t,e,n=240){e.acc+=t>.25?.25:t;let s=0;for(;e.acc>=Kt.DT&&s<n;)ad(i),e.acc-=Kt.DT,s++;return s>=n&&(e.acc=0),e.acc/Kt.DT}function s0(i,t,e,n,s=0,r=0){return(o,a)=>{let c=(o-s)/n,l=(a-r)/n;c=c<0?0:c>t-1.000001?t-1.000001:c,l=l<0?0:l>e-1.000001?e-1.000001:l;const u=c|0,d=l|0,f=c-u,h=l-d,g=d*t+u,x=i[g]+(i[g+1]-i[g])*f,m=i[g+t]+(i[g+t+1]-i[g+t])*f;return x+(m-x)*h}}const Pi=.25,so=4,r0=Object.freeze({oob:0,fairway:1,green:2,rough:3,sand:4,water:5,ice:6}),o0=Object.freeze(["oob","fairway","green","rough","sand","water","ice"]),xr=i=>({x:i[0],z:-i[1]});function qc(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[s][0],a=i[s][1],c=i[r][0],l=i[r][1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function a0(i,t,e){let n=1/0;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[r][0],a=i[r][1],c=i[s][0]-o,l=i[s][1]-a,u=c*c+l*l||1e-12;let d=((t-o)*c+(e-a)*l)/u;d=d<0?0:d>1?1:d;const f=o+c*d-t,h=a+l*d-e,g=Math.sqrt(f*f+h*h);g<n&&(n=g)}return n}const fd=i=>[[i[0],i[1]],[i[2],i[1]],[i[2],i[3]],[i[0],i[3]]];function Yc(i){if(i.poly)return i.poly;if(i.rect)return fd(i.rect);const t=i.circle?{c:i.circle.c,rx:i.circle.r,ry:i.circle.r,rot:0}:i.ellipse;if(!t)throw new Error("zone without a shape");const e=48,n=Math.cos((t.rot||0)*Math.PI/180),s=Math.sin((t.rot||0)*Math.PI/180),r=[];for(let o=0;o<e;o++){const a=o/e*Math.PI*2,c=Math.cos(a)*t.rx,l=Math.sin(a)*t.ry;r.push([t.c[0]+c*n-l*s,t.c[1]+c*s+l*n])}return r}const Na=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function c0(i){const t=i.steps||[],e=i.hills||[],n=(i.plateaus||[]).map(r=>({pts:Yc(r),h:r.h,ramp:r.ramp??2,linear:!!r.linear})),s=i.tilt||[0,0];return(r,o)=>{let a=s[0]*r+s[1]*o;for(const c of t){const l=c.axis==="y"?o:r;if(c.band){const d=c.axis==="y"?r:o;if(d<c.band[0]||d>c.band[1])continue}const u=(l-c.from)/(c.to-c.from);a+=c.h*(c.smooth?Na(u):u<=0?0:u>=1?1:u)}for(const c of e){const l=r-c.c[0],u=o-c.c[1],d=Math.sqrt(l*l+u*u),f=c.flat||0;d<c.r&&(a+=c.h*Na(1-(d-f)/(c.r-f)))}for(const c of n)if(qc(c.pts,r,o))a+=c.h;else{const l=a0(c.pts,r,o);l<c.ramp&&(a+=c.h*(c.linear?1-l/c.ramp:Na(1-l/c.ramp)))}return a}}function hd(i){const[t,e]=i.size,n=i.ground||fd([0,0,t,e]),s=i.border===void 0?"wall":i.border,r=[];s&&r.push({kind:s,pts:n,closed:!0,border:!0});for(const w of i.walls||[])r.push({kind:w.kind||"wall",pts:w.pts,closed:!!w.closed,h:w.h});const o=[],a=[];for(const w of i.arcs||[]){let v=w.from;const _=w.to;if(!(_>v))throw new Error(i.id+": arc needs to > from");for(a.push({kind:w.kind||"wall",c:w.c,r:w.r,from:v,to:_});v<_-1e-9;){const T=Math.min(_,v+180),z=T*Math.PI/180,U=v*Math.PI/180;o.push({kind:w.kind||"wall",x:w.c[0],z:-w.c[1],r:w.r,sx:Math.cos(z),sz:-Math.sin(z),ex:Math.cos(U),ez:-Math.sin(U)}),v=T}}const c=[];for(const w of r){const v=w.pts.length,_=w.closed?v:v-1;for(let T=0;T<_;T++){const z=w.pts[T],U=w.pts[(T+1)%v];c.push({ax:z[0],az:-z[1],bx:U[0],bz:-U[1],kind:w.kind})}}const l=(i.posts||[]).map(w=>({x:w.at[0],z:-w.at[1],r:w.r,kind:w.kind||"post"})),u=-so,d=-(e+so),f=Math.round((t+2*so)/Pi)+1,h=Math.round((e+2*so)/Pi)+1,g=c0(i),x=new Float64Array(f*h),m=new Uint8Array(f*h),p=(i.zones||[]).map(w=>{const v=r0[w.surface];if(v===void 0||v===0)throw new Error(i.id+": unknown surface "+w.surface);return{code:v,pts:Yc(w)}});for(let w=0;w<h;w++){const _=-(d+w*Pi);for(let T=0;T<f;T++){const z=u+T*Pi,U=w*f+T;x[U]=g(z,_);let X=qc(n,z,_)?1:0;if(X)for(const Y of p)qc(Y.pts,z,_)&&(X=Y.code);m[U]=X}}const y=s0(x,f,h,Pi,u,d),M=(w,v)=>{let _=Math.round((w-u)/Pi),T=Math.round((v-d)/Pi);return _=_<0?0:_>=f?f-1:_,T=T<0?0:T>=h?h-1:T,m[T*f+_]},S=(w,v)=>o0[M(w,v)],R=(w,v)=>{const _=M(w,v);return _===0?"oob":_===5?"water":null},P=xr(i.tee),b=xr(i.cup);return{hole:i,id:i.id,name:i.name,par:i.par,round:i.round,spin:!0,tip:i.tip||null,placeR:i.circle,eight:P,tee:P,cup:b,segments:c,posts:l,arcs:o,surfaceAt:S,heightAt:y,hazardAt:R,grid:{cell:Pi,cols:f,rows:h,x0:u,z0:d,height:x,surface:m},bounds:{minx:0,maxx:t,minz:-e,maxz:0},ground:n.map(xr),walls:r.map(w=>({kind:w.kind,closed:w.closed,border:!!w.border,h:w.h,pts:w.pts.map(xr)})),arcsRender:a.map(w=>({kind:w.kind,x:w.c[0],z:-w.c[1],r:w.r,from:w.from,to:w.to})),props:(i.props||[]).map(w=>({...w,x:w.at[0],z:-w.at[1]})),zones:(i.zones||[]).map(w=>({surface:w.surface,pts:Yc(w).map(xr)})),camera:i.camera||null}}function l0(i){return Wp({eight:i.eight,hole:i.cup,placeR:i.placeR,segments:i.segments,posts:i.posts,arcs:i.arcs,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt})}const u0=4,f0=5;function h0(i){return{par:i,strokes:0,penalties:0,done:!1,holed:!1,picked:!1}}function d0(i,t){if(i.done)return{penalty:0,done:!0,picked:i.picked};i.strokes+=1;let e=0;return t.holed?(i.done=!0,i.holed=!0,{penalty:e,done:!0,picked:!1}):(t.hazard&&(e=1,i.penalties+=1,i.strokes+=1),i.strokes>=i.par+u0&&(i.done=!0,i.picked=!0),{penalty:e,done:i.done,picked:i.picked})}function p0(i){return i.picked?i.par+f0:i.strokes}function m0(i,t,e=!1){return e?0:i===1||i<=t-1?3:i<=t?2:1}function Kc(i,t,e=!1){if(e)return{key:"picked",label:"Picked up"};if(i===1)return{key:"ace",label:"Hole-in-one!"};const n=i-t;return n<=-3?{key:"albatross",label:"Albatross!"}:n===-2?{key:"eagle",label:"Eagle!"}:n===-1?{key:"birdie",label:"Birdie!"}:n===0?{key:"par",label:"Par"}:n===1?{key:"bogey",label:"Bogey"}:n===2?{key:"double",label:"Double bogey"}:{key:"over",label:"+"+n}}function $c(i,t){const e=i-t;return e===0?"E":e>0?"+"+e:String(e)}const g0=.9,x0=1.2,v0=14,Pu=2.5,Lu=1.8,_0=1.5,Ua=15.5,M0=3,dd=[0,15,-15,30,-30,45,-45,60,-60,72,-72,80,-80,85,-85,89,-89].map(i=>i*Math.PI/180),Fa=dd.map(Math.cos),Iu=dd.map(Math.sin);function y0({events:i}){const t=(b,w)=>i&&i.emit(b,w),e={acc:0},n={state:"idle",level:null,index:-1,world:null,score:null,intent:{x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},lastPower:.5,speed:1,pace:Lu,shotContact:!1,shotHazard:null,shotHoled:!1,dropAt:null,timer:0,_guideKey:"",_guide:null},s=[r(),r()];function r(){return{x:0,y:0,z:0,visible:!1,alpha:1,mode:"off",vx:0,vz:0}}function o(){const b=n.intent,w=n.world.balls[1];let v=w.x-b.x,_=w.z-b.z;const T=Math.sqrt(v*v+_*_)||1;v/=T,_/=T;const z=Math.cos(b.offset),U=Math.sin(b.offset),X=v*z-_*U,Y=v*U+_*z,Q=u(b,X,Y);n.intent={...b,ax:X,az:Y,dx:Q.x,dz:Q.z},n._guideKey=""}const a=b=>b.power<Kt.POWER_MIN?Kt.POWER_MIN:b.power,c=b=>({x:b.spin,y:b.top}),l=(b,w,v)=>{const _=Math.cos(v),T=Math.sin(v);return{x:b*_-w*T,z:b*T+w*_}};function u(b,w,v){if(!b.spin)return{x:w,z:v};const _=n.world.balls[1],T=_.x-b.x,z=_.z-b.z,U=T*w+z*v,X=w*z-v*T,Y=2*Kt.R,Q=U>0&&X*X<Y*Y,xt=Q?U-Math.sqrt(Y*Y-X*X):U>0?U:0,ot=xt>1e-6?-d(b.spin,xt):0;if(!Q)return l(w,v,ot);const k=b.x+w*xt,D=b.z+v*xt,q=(_.x-k)/Y,K=(_.z-D)/Y,nt=a(b),O=c(b),J=tt=>{const pt=l(w,v,tt),H=Ru(n.world,{x:b.x,z:b.z,dx:pt.x,dz:pt.z},O,nt,1e9);return H.hit?q*H.normal.z-K*H.normal.x:null};let ut=ot,B=J(ut);if(B===null)return l(w,v,ot);let it=ut,ft=Math.abs(B),gt=ut+.02,Tt=J(gt);for(let tt=0;tt<10&&Tt!==null&&(Math.abs(Tt)<ft&&(it=gt,ft=Math.abs(Tt)),!(ft<1e-7||Tt===B));tt++){let pt=-Tt*(gt-ut)/(Tt-B);pt=pt>.3?.3:pt<-.3?-.3:pt,ut=gt,B=Tt,gt+=pt,Tt=J(gt)}return l(w,v,it)}function d(b,w){const v=Kt.CURVE_K*b,_=Kt.CURVE_LEN,T=.02;let z=0,U=0,X=0;for(let Y=0;Y<2e3&&z*z+U*U<w*w;Y++){const Q=X<_?v*(X-X*X/(2*_)):v*_/2;z+=Math.cos(Q)*T,U+=Math.sin(Q)*T,X+=T}return Math.atan2(U,z)}function f(){const b=n.world,w=b.balls[1];let v=b.hole.x-w.x,_=b.hole.z-w.z;const T=Math.sqrt(v*v+_*_)||1;v/=T,_/=T;const z=Math.min(.6*b.placeR,2.5),U=p(w.x-v*z,w.z-_*z)||p(w.x-v*1.6,w.z-_*1.6)||{x:w.x-v*1.2,z:w.z-_*1.2};n.intent={...n.intent,x:U.x,z:U.z,offset:0,spin:0,top:0,power:n.lastPower},o()}let h=NaN,g=NaN;function x(b,w,v,_){const T=n.world,z=(ut,B)=>gr(T,ut,B),U=h===h?Math.sqrt((v-h)*(v-h)+(_-g)*(_-g)):1/0;h=v,g=_;const X=T.balls[1],Y=v-X.x,Q=_-X.z,xt=Math.sqrt(Y*Y+Q*Q),ot=T.placeR-.001;if(xt>ot&&(v=X.x+Y/xt*ot,_=X.z+Q/xt*ot),z(v,_))return{x:v,z:_};let k=2*U+.1,D=b,q=w,K=Math.sqrt((v-D)*(v-D)+(_-q)*(_-q));const nt=K/16>.25?.25:K/16<.04?.04:K/16;let O=nt;for(let ut=0;ut<600&&K>1e-4&&O>=.01&&k>1e-4;ut++){const B=(v-D)/K,it=(_-q)/K,ft=O<K?O<k?O:k:K<k?K:k;let gt=0,Tt=0,tt=K-1e-5;for(let pt=0;pt<Fa.length;pt++){const H=B*Fa[pt]-it*Iu[pt],rt=B*Iu[pt]+it*Fa[pt],jt=D+H*ft,ie=q+rt*ft,qt=Math.sqrt((v-jt)*(v-jt)+(_-ie)*(_-ie));if(qt<tt&&z(jt,ie)&&(gt=jt,Tt=ie,tt=qt),tt<K-1e-5&&(pt===0||pt%2===0))break}tt<K-1e-5?(D=gt,q=Tt,K=tt,k-=ft,O=O*2>nt?nt:O*2):O/=2}const J=K>1e-9&&k<K?k>0?k/K:0:1;return m(z,D,q,D+(v-D)*J,q+(_-q)*J)}function m(b,w,v,_,T){let z=0,U=1;for(let X=0;X<16;X++){const Y=(z+U)/2;b(w+(_-w)*Y,v+(T-v)*Y)?z=Y:U=Y}return{x:w+(_-w)*z,z:v+(T-v)*z}}function p(b,w){const v=n.world;if(gr(v,b,w))return{x:b,z:w};const _=v.balls[1];let T=b-_.x,z=w-_.z,U=Math.sqrt(T*T+z*z);const X=2*Kt.R+Kt.PLACE_GAP+.01,Y=v.placeR-.01;if(U>Y&&(T*=Y/U,z*=Y/U,U=Y),U<X){const k=U>1e-6?X/U:0;T=U>1e-6?T*k:-X,z=U>1e-6?z*k:0,U=X}if(gr(v,_.x+T,_.z+z))return{x:_.x+T,z:_.z+z};const Q=Math.atan2(z,T);let xt=null,ot=1/0;for(let k=X;k<=Y+1e-9;k+=.25)for(let D=0;D<72;D++){const q=Q+D*Math.PI/36,K=_.x+Math.cos(q)*k,nt=_.z+Math.sin(q)*k;if(!gr(v,K,nt))continue;const O=(K-b)*(K-b)+(nt-w)*(nt-w);O<ot&&(ot=O,xt={x:K,z:nt})}return xt}n.load=(b,w)=>{n.level=b,n.index=w,n.world=l0(b),n.score=h0(b.par),n.lastPower=.5,n.speed=1,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,n.timer=0,e.acc=0,n.intent={x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},f(),n.state="ready",t("hole:start",{level:b,index:w}),t("shot:ready",{strokes:0,par:b.par,first:!0})},n.retry=()=>n.load(n.level,n.index),n.setPlacement=(b,w)=>{if(n.state!=="ready")return!1;const v=n.intent,_=gr(n.world,v.x,v.z)?x(v.x,v.z,b,w):p(b,w);return!_||_.x===v.x&&_.z===v.z?!1:(n.intent={...n.intent,x:_.x,z:_.z},o(),!0)},n.setAimToward=(b,w)=>{if(n.state!=="ready")return;const v=n.intent,_=n.world.balls[1],T=_.x-v.x,z=_.z-v.z,U=b-v.x,X=w-v.z;U*U+X*X<1e-6||(n.intent={...v,offset:Math.atan2(T*X-z*U,T*U+z*X)},o())},n.rotateAim=b=>{if(n.state!=="ready")return;let w=n.intent.offset+b;for(;w>Math.PI;)w-=2*Math.PI;for(;w<-Math.PI;)w+=2*Math.PI;n.intent={...n.intent,offset:w},o()},n.setSpin=(b,w)=>{const v=n.intent,_=!!(n.level&&n.level.spin),T=w===void 0?v.top:w;let z=_&&b===b?b<-1?-1:b>1?1:b:0,U=_&&T===T?T<-1?-1:T>1?1:T:0;const X=z*z+U*U;if(X>1){const Y=1/Math.sqrt(X);z*=Y,U*=Y}z===v.spin&&U===v.top||(n.intent={...v,spin:z,top:U},n.world&&o())},n.setPower=b=>{const w=b<0?0:b>1?1:b;w!==n.intent.power&&(n.intent={...n.intent,power:w},n.intent.spin&&n.world?o():n._guideKey="")},n.guide=()=>{if(!n.world||n.state!=="ready")return null;const b=n.intent,w=a(b),v=b.x+","+b.z+","+b.dx+","+b.dz+","+b.spin+","+b.top+","+w;if(v===n._guideKey)return n._guide;const _=Ru(n.world,b,c(b),w);let T=null;if(_.hit){const z=_.eightSpeed/Ua,U=Pu+(v0-Pu)*(z>1?1:z);T=n0(n.world,_.eightStart.x,_.eightStart.z,_.eightDir.x,_.eightDir.z,{x:_.spin,y:_.top},U,Math.min(M0,U*.3))}return n._guide={cue:_,eight:T,warn:!_.hit||!!(T&&T.hazard)},n._guideKey=v,n._guide},n.fire=()=>{if(n.state!=="ready")return!1;const b=n.intent,w=a(b);return n.lastPower=w,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,e.acc=0,rd(n.world,b,c(b),w),n.state="rolling",t("shot:fire",{power:w,spin:b.spin,top:b.top,strokes:n.score.strokes+1}),!0},n.setSpeed=b=>{n.speed=b>1?b:1};function y(){const b=n.world.events;for(let w=0;w<b.length;w++){const v=b[w];switch(v.type){case"contact":n.shotContact=!0,t("ball:contact",{x:v.gx,z:v.gz,nx:v.nx,nz:v.nz,speed:Math.sqrt(v.v8x*v.v8x+v.v8z*v.v8z),cutCos:v.cutCos,spin:v.spin,top:v.top});break;case"wall":t("ball:wall",{id:v.id,x:v.x,z:v.z,nx:v.nx,nz:v.nz,speed:v.speed,kind:v.kind});break;case"hop":t("ball:hop",{x:v.x,z:v.z,speed:v.speed});break;case"holed":n.shotHoled=!0,t("ball:holed",{speed:v.speed});break;case"water":case"oob":n.shotHazard=v.type,n.dropAt={x:v.dropX,z:v.dropZ},t("ball:hazard",{kind:v.type,x:v.x,z:v.z});break;case"whiff":t("ball:whiff",{reason:v.reason,x:v.x,z:v.z});break;case"rest":t("ball:rest",{id:v.id,x:v.x,z:v.z});break;case"ballHit":t("ball:ballhit",{speed:v.speed});break;case"shotEnd":M();break}}b.length=0}function M(){const b=d0(n.score,{holed:n.shotHoled,hazard:n.shotHazard});t("shot:end",{strokes:n.score.strokes,par:n.score.par,penalty:b.penalty,whiff:!n.shotContact,outcome:n.shotHoled?"holed":n.shotHazard||"rest",picked:b.picked}),n.state="resolving",n.timer=n.shotHoled?x0:n.shotHazard?g0:b.done?.6:0}function S(){const b=n.score;if(b.done){n.state="done";const w=p0(b);t("hole:done",{index:n.index,level:n.level,strokes:w,par:b.par,picked:b.picked,penalties:b.penalties,stars:m0(w,b.par,b.picked),term:Kc(w,b.par,b.picked)});return}if(n.dropAt)Eu(n.world,n.dropAt.x,n.dropAt.z),t("ball:drop",{x:n.dropAt.x,z:n.dropAt.z}),n.dropAt=null;else{const w=n.world.balls[1];Eu(n.world,w.x,w.z)}n.world.balls[0].mode="off",f(),n.state="ready",t("shot:ready",{strokes:b.strokes,par:b.par,first:!1})}function R(){let b=0;const w=n.world.balls;for(let _=0;_<w.length;_++){const T=w[_];if(T.mode!=="cue"&&T.mode!=="roll")continue;const z=T.vx*T.vx+T.vz*T.vz;z>b&&(b=z)}const v=b/(Ua*Ua);return Lu*(1+_0*(v>1?1:v))}let P=0;return n.update=b=>{if(n.state==="rolling"){const w=R();n.pace=w,P=i0(n.world,b*w*n.speed,e,Math.ceil(240*w*n.speed)+1),y()}else n.state==="resolving"&&(n.timer-=b,n.timer<=0&&S())},n.balls=()=>{const b=n.world;if(!b)return s;const w=n.state==="rolling";for(let v=0;v<2;v++){const _=b.balls[v],T=s[v],z=w?P:1;T.x=_.px+(_.x-_.px)*z,T.z=_.pz+(_.z-_.pz)*z,T.mode=_.mode,T.vx=_.vx,T.vz=_.vz,T.visible=_.mode!=="off"&&_.mode!=="sunk"&&_.mode!=="holed",T.alpha=_.mode==="ghost"?Math.max(0,_.fadeT/Kt.CUE_FADE_T):1,T.y=b.heightAt(T.x,T.z)+Kt.R}if(n.state==="ready"){const v=s[0];v.x=n.intent.x,v.z=n.intent.z,v.mode="placed",v.visible=!0,v.alpha=1,v.vx=0,v.vz=0,v.y=b.heightAt(v.x,v.z)+Kt.R}if(s[1].mode==="holed"||n.shotHoled){const v=s[1];v.visible=!0,v.x=b.hole.x,v.z=b.hole.z,v.y=b.heightAt(v.x,v.z)-Kt.R*.9}return s},n}const Du="eightballgolf.progress",la=Object.freeze([{id:"classic",name:"Classic",need:0},{id:"tennis",name:"Tennis",need:9},{id:"beach",name:"Beach ball",need:18},{id:"planet",name:"Planet",need:27},{id:"donut",name:"Donut",need:36},{id:"snow",name:"Snowball",need:45},{id:"gold",name:"Gold",need:54}]),Oa=(i,t,e)=>Number.isInteger(i)&&i>=t&&i<=e?i:null;function S0(i,t){const e=i&&typeof i=="object"?i:{},n=Array.isArray(e.holes)?e.holes:[],s=[];for(let c=0;c<t;c++){const l=n[c]&&typeof n[c]=="object"?n[c]:{},u=Oa(l.best,1,99);s.push({best:u,stars:u===null?0:Oa(l.stars,0,3)??0})}const r=Array.isArray(e.seenTips)?[...new Set(e.seenTips.filter(c=>typeof c=="string"&&c.length<40))].slice(0,200):[],o=la.some(c=>c.id===e.skin)?e.skin:"classic",a=Oa(e.last,0,Math.max(0,t-1));return{v:1,holes:s,skin:o,seenTips:r,muted:e.muted===!0,last:a}}async function w0(i,t={}){const e=t.rounds||Kr,n=e.flatMap(h=>h.holes.map(g=>g.par)),s=n.length,r=new Map;let o=0;for(const h of e)r.set(h.id,o),o+=h.holes.length;let a=null;try{const h=i&&i.load?await i.load(Du):null;typeof h=="string"&&h.length&&(a=JSON.parse(h))}catch{a=null}const c=S0(a,s);b0(c.skin)>ro(c)&&(c.skin="classic");function l(){if(!(!i||!i.save))try{const h=i.save(Du,JSON.stringify(c));h&&typeof h.catch=="function"&&h.catch(()=>{})}catch{}}const u=h=>Number.isInteger(h)&&h>=0&&h<s,d=()=>{let h=-1;for(let g=0;g<s;g++)c.holes[g].best!==null&&(h=g);return h},f={data:c,get skin(){return c.skin},get muted(){return c.muted},holeCount:s,isUnlocked(h){return u(h)&&h<=d()+1},best(h){return u(h)?c.holes[h].best:null},stars(h){return u(h)?c.holes[h].stars:0},totalStars(){return ro(c)},roundStars(h){const g=r.get(h),x=e.find(p=>p.id===h);if(g===void 0||!x)return 0;let m=0;for(let p=0;p<x.holes.length;p++)m+=c.holes[g+p].stars;return m},roundTotal(h){const g=r.get(h),x=e.find(M=>M.id===h);if(g===void 0||!x)return{total:0,par:0,complete:!1};let m=0,p=0,y=!0;for(let M=0;M<x.holes.length;M++){p+=n[g+M];const S=c.holes[g+M].best;S===null?y=!1:m+=S}return{total:m,par:p,complete:y}},record(h,g,x){if(!u(h))return{newBest:!1,newStars:!1,firstTime:!1};const m=c.holes[h],p=Math.max(1,Math.round(Number(g)||1)),y=Math.max(0,Math.min(3,Math.round(Number(x)||0))),M=m.best===null,S=m.best===null||p<m.best,R=y>m.stars;return S&&(m.best=p),R&&(m.stars=y),c.last=h,l(),{newBest:S,newStars:R,firstTime:M}},nextIndex(){for(let h=0;h<s;h++)if(c.holes[h].best===null)return f.isUnlocked(h)?h:0;for(let h=0;h<s;h++)if(c.holes[h].stars<3)return h;return c.last??0},skins(){const h=ro(c);return la.map(g=>({...g,unlocked:h>=g.need}))},setSkin(h){const g=la.find(x=>x.id===h);return!g||g.need>ro(c)||c.skin===h?!1:(c.skin=h,l(),!0)},seenTip(h){return c.seenTips.includes(String(h))},markTip(h){h==null||f.seenTip(h)||(c.seenTips.push(String(h)),l())},setMuted(h){c.muted!==!!h&&(c.muted=!!h,l())},isFresh(){return d()<0}};return f}function ro(i){let t=0;for(const e of i.holes)t+=e.stars;return t}function b0(i){const t=la.find(e=>e.id===i);return t?t.need:1/0}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wl="170",E0=0,zu=1,T0=2,Xl=1,A0=2,vi=3,qi=0,vn=1,Pn=2,Gi=0,Zs=1,Nu=2,Uu=3,Fu=4,pd=5,Hi=100,C0=101,R0=102,P0=103,L0=104,I0=200,jc=201,D0=202,z0=203,Zc=204,Vr=205,N0=206,U0=207,F0=208,O0=209,k0=210,B0=211,H0=212,G0=213,V0=214,Jc=0,Qc=1,tl=2,ir=3,el=4,nl=5,il=6,sl=7,Ma=0,W0=1,X0=2,Vi=0,q0=1,Y0=2,K0=3,$0=4,j0=5,Z0=6,md=7,gd=300,sr=301,rr=302,rl=303,ol=304,ya=306,ua=1e3,bi=1001,al=1002,Dn=1003,J0=1004,oo=1005,Vn=1006,ka=1007,ms=1008,fi=1009,xd=1010,vd=1011,Wr=1012,ql=1013,vs=1014,ui=1015,$r=1016,Yl=1017,Kl=1018,or=1020,_d=35902,Md=1021,yd=1022,Wn=1023,Sd=1024,wd=1025,Js=1026,ar=1027,$l=1028,jl=1029,bd=1030,Zl=1031,Jl=1033,Zo=33776,Jo=33777,Qo=33778,ta=33779,cl=35840,ll=35841,ul=35842,fl=35843,hl=36196,dl=37492,pl=37496,ml=37808,gl=37809,xl=37810,vl=37811,_l=37812,Ml=37813,yl=37814,Sl=37815,wl=37816,bl=37817,El=37818,Tl=37819,Al=37820,Cl=37821,ea=36492,Rl=36494,Pl=36495,Ed=36283,Ll=36284,Il=36285,Dl=36286,Q0=3200,tm=3201,Sa=0,em=1,yi="",pn="srgb",fr="srgb-linear",wa="linear",Ue="srgb",ws=7680,Ou=519,nm=512,im=513,sm=514,Td=515,rm=516,om=517,am=518,cm=519,ku=35044,Wi=35048,Bu="300 es",Ei=2e3,fa=2001;class hr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hu=1234567;const Ur=Math.PI/180,Xr=180/Math.PI;function dr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function Ql(i,t){return(i%t+t)%t}function lm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function um(i,t,e){return i!==t?(e-i)/(t-i):0}function Fr(i,t,e){return(1-e)*i+e*t}function fm(i,t,e,n){return Fr(i,t,1-Math.exp(-e*n))}function hm(i,t=1){return t-Math.abs(Ql(i,t*2)-t)}function dm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function pm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function mm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function gm(i,t){return i+Math.random()*(t-i)}function xm(i){return i*(.5-Math.random())}function vm(i){i!==void 0&&(Hu=i);let t=Hu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _m(i){return i*Ur}function Mm(i){return i*Xr}function ym(i){return(i&i-1)===0&&i!==0}function Sm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),h=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zl={DEG2RAD:Ur,RAD2DEG:Xr,generateUUID:dr,clamp:cn,euclideanModulo:Ql,mapLinear:lm,inverseLerp:um,lerp:Fr,damp:fm,pingpong:hm,smoothstep:dm,smootherstep:pm,randInt:mm,randFloat:gm,randFloatSpread:xm,seededRandom:vm,degToRad:_m,radToDeg:Mm,isPowerOfTwo:ym,ceilPowerOfTwo:Sm,floorPowerOfTwo:wm,setQuaternionFromProperEuler:bm,normalize:gn,denormalize:Xs};class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(t,e,n,s,r,o,a,c,l){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],M=s[4],S=s[7],R=s[2],P=s[5],b=s[8];return r[0]=o*x+a*y+c*R,r[3]=o*m+a*M+c*P,r[6]=o*p+a*S+c*b,r[1]=l*x+u*y+d*R,r[4]=l*m+u*M+d*P,r[7]=l*p+u*S+d*b,r[2]=f*x+h*y+g*R,r[5]=f*m+h*M+g*P,r[8]=f*p+h*S+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=e*d+n*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=h*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Re;function Ad(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Em(){const i=ha("canvas");return i.style.display="block",i}const Gu={};function Rr(i){i in Gu||(Gu[i]=!0,console.warn(i))}function Tm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Am(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Cm(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const De={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ue&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ue&&(i.r=Qs(i.r),i.g=Qs(i.g),i.b=Qs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?wa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vu=[.64,.33,.3,.6,.15,.06],Wu=[.2126,.7152,.0722],Xu=[.3127,.329],qu=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);De.define({[fr]:{primaries:Vu,whitePoint:Xu,transfer:wa,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:Wu,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Vu,whitePoint:Xu,transfer:Ue,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:Wu,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});let bs;class Rm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bs===void 0&&(bs=ha("canvas")),bs.width=t.width,bs.height=t.height;const n=bs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pm=0;class Cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=dr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ha(s[o].image)):r.push(Ha(s[o]))}else r=Ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lm=0;class mn extends hr{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,n=bi,s=bi,r=Vn,o=ms,a=Wn,c=fi,l=mn.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=dr(),this.name="",this.source=new Cd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=gd;mn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,e=0,n=0,s=1){Ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,S=(h+1)/2,R=(p+1)/2,P=(u+f)/4,b=(d+x)/4,w=(g+m)/4;return M>S&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=P/n,r=b/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=P/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=w/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(f-u)/y,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Im extends hr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends Im{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rd extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dm extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const f=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==f||l!==h||u!==g){let m=1-a;const p=c*f+l*h+u*g+d*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),P=Math.atan2(R,p*y);m=Math.sin(m*P)/R,a=Math.sin(a*P)/R}const S=a*y;if(c=c*m+f*S,l=l*m+h*S,u=u*m+g*S,d=d*m+x*S,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*h-l*f,t[e+1]=c*g+u*f+l*d-a*h,t[e+2]=l*g+u*h+a*f-c*d,t[e+3]=u*g-a*d-c*f-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,n=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ku.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new et,Ku=new $i;class ji{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),co.subVectors(this.max,vr),Es.subVectors(t.a,vr),Ts.subVectors(t.b,vr),As.subVectors(t.c,vr),Li.subVectors(Ts,Es),Ii.subVectors(As,Ts),Ji.subVectors(Es,As);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-Ji.z,Ji.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,Ji.z,0,-Ji.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-Ji.y,Ji.x,0];return!Va(e,Es,Ts,As,co)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,Es,Ts,As,co))?!1:(lo.crossVectors(Li,Ii),e=[lo.x,lo.y,lo.z],Va(e,Es,Ts,As,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const di=[new et,new et,new et,new et,new et,new et,new et,new et],Kn=new et,ao=new ji,Es=new et,Ts=new et,As=new et,Li=new et,Ii=new et,Ji=new et,vr=new et,co=new et,lo=new et,Qi=new et;function Va(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const zm=new ji,_r=new et,Wa=new et;class Zi{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);const e=_r.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_r,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(Wa)),this.expandByPoint(_r.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new et,Xa=new et,uo=new et,Di=new et,qa=new et,fo=new et,Ya=new et;class Nm{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xa.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(Xa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(uo),a=Di.dot(this.direction),c=-Di.dot(uo),l=Di.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xa).addScaledVector(uo,f),h}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){qa.subVectors(e,t),fo.subVectors(n,t),Ya.crossVectors(qa,fo);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);const c=a*this.direction.dot(fo.crossVectors(Di,fo));if(c<0)return null;const l=a*this.direction.dot(qa.cross(Di));if(l<0||c+l>o)return null;const u=-a*Di.dot(Ya);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,h=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=h+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+h*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,h=c*d,g=l*u,x=l*d;e[0]=f+x*a,e[4]=g*a-h,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,h=c*d,g=l*u,x=l*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,h=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-h,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=h*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*d,e[8]=g*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*d+g,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+x,e[5]=o*u,e[9]=h*d-g,e[2]=g*d-h,e[6]=a*u,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Um,t,Fm)}lookAt(t,e,n){const s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),zi.crossVectors(n,wn),zi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),zi.crossVectors(n,wn)),zi.normalize(),ho.crossVectors(wn,zi),s[0]=zi.x,s[4]=ho.x,s[8]=wn.x,s[1]=zi.y,s[5]=ho.y,s[9]=wn.y,s[2]=zi.z,s[6]=ho.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],M=n[7],S=n[11],R=n[15],P=s[0],b=s[4],w=s[8],v=s[12],_=s[1],T=s[5],z=s[9],U=s[13],X=s[2],Y=s[6],Q=s[10],xt=s[14],ot=s[3],k=s[7],D=s[11],q=s[15];return r[0]=o*P+a*_+c*X+l*ot,r[4]=o*b+a*T+c*Y+l*k,r[8]=o*w+a*z+c*Q+l*D,r[12]=o*v+a*U+c*xt+l*q,r[1]=u*P+d*_+f*X+h*ot,r[5]=u*b+d*T+f*Y+h*k,r[9]=u*w+d*z+f*Q+h*D,r[13]=u*v+d*U+f*xt+h*q,r[2]=g*P+x*_+m*X+p*ot,r[6]=g*b+x*T+m*Y+p*k,r[10]=g*w+x*z+m*Q+p*D,r[14]=g*v+x*U+m*xt+p*q,r[3]=y*P+M*_+S*X+R*ot,r[7]=y*b+M*T+S*Y+R*k,r[11]=y*w+M*z+S*Q+R*D,r[15]=y*v+M*U+S*xt+R*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],h=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*h-n*c*h)+x*(+e*c*h-e*l*f+r*o*f-s*o*h+s*l*u-r*c*u)+m*(+e*l*d-e*a*h-r*o*d+n*o*h+r*a*u-n*l*u)+p*(-s*a*u-e*c*d+e*a*f+s*o*d-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],h=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=d*m*l-x*f*l+x*c*h-a*m*h-d*c*p+a*f*p,M=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,S=u*x*l-g*d*l+g*a*h-o*x*h-u*a*p+o*d*p,R=g*d*c-u*x*c-g*a*f+o*x*f+u*a*m-o*d*m,P=e*y+n*M+s*S+r*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/P;return t[0]=y*b,t[1]=(x*f*r-d*m*r-x*s*h+n*m*h+d*s*p-n*f*p)*b,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*b,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*h-n*c*h)*b,t[4]=M*b,t[5]=(u*m*r-g*f*r+g*s*h-e*m*h-u*s*p+e*f*p)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*b,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*h+e*c*h)*b,t[8]=S*b,t[9]=(g*d*r-u*x*r-g*n*h+e*x*h+u*n*p-e*d*p)*b,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*b,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*h-e*a*h)*b,t[12]=R*b,t[13]=(u*x*s-g*d*s+g*n*f-e*x*f-u*n*m+e*d*m)*b,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*b,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,x=o*u,m=o*d,p=a*d,y=c*l,M=c*u,S=c*d,R=n.x,P=n.y,b=n.z;return s[0]=(1-(x+p))*R,s[1]=(h+S)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(h-S)*P,s[5]=(1-(f+p))*P,s[6]=(m+y)*P,s[7]=0,s[8]=(g+M)*b,s[9]=(m-y)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Cs.set(s[0],s[1],s[2]).length();const o=Cs.set(s[4],s[5],s[6]).length(),a=Cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);const l=1/r,u=1/o,d=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,e.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ei){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let h,g;if(a===Ei)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===fa)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ei){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),f=(e+t)*l,h=(n+s)*u;let g,x;if(a===Ei)g=(o+r)*d,x=-2*d;else if(a===fa)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Cs=new et,$n=new ze,Um=new et(0,0,0),Fm=new et(1,1,1),zi=new et,ho=new et,wn=new et,$u=new ze,ju=new $i;class zn{constructor(t=0,e=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $u.makeRotationFromQuaternion(t),this.setFromRotationMatrix($u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ju.setFromEuler(this),this.setFromQuaternion(ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Om=0;const Zu=new et,Rs=new $i,mi=new ze,po=new et,Mr=new et,km=new et,Bm=new $i,Ju=new et(1,0,0),Qu=new et(0,1,0),tf=new et(0,0,1),ef={type:"added"},Hm={type:"removed"},Ps={type:"childadded",child:null},Ka={type:"childremoved",child:null};class ln extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new et,e=new zn,n=new $i,s=new et(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Re}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis(Qu,t)}rotateZ(t){return this.rotateOnAxis(tf,t)}translateOnAxis(t,e){return Zu.copy(t).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis(Qu,t)}translateZ(t){return this.translateOnAxis(tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?po.copy(t):po.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Mr,po,this.up):mi.lookAt(po,Mr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(mi),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ef),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hm),Ka.child=t,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ef),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ln.DEFAULT_UP=new et(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new et,gi=new et,$a=new et,xi=new et,Ls=new et,Is=new et,nf=new et,ja=new et,Za=new et,Ja=new et,Qa=new Ge,tc=new Ge,ec=new Ge;class Qn{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),jn.subVectors(t,e),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){jn.subVectors(s,e),gi.subVectors(n,e),$a.subVectors(t,e);const o=jn.dot(jn),a=jn.dot(gi),c=jn.dot($a),l=gi.dot(gi),u=gi.dot($a),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Qa.setScalar(0),tc.setScalar(0),ec.setScalar(0),Qa.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,n),ec.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Qa,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(t,e,n,s){return jn.subVectors(n,e),gi.subVectors(t,e),jn.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),jn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Qn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,n),Is.subVectors(r,n),ja.subVectors(t,n);const c=Ls.dot(ja),l=Is.dot(ja);if(c<=0&&l<=0)return e.copy(n);Za.subVectors(t,s);const u=Ls.dot(Za),d=Is.dot(Za);if(u>=0&&d<=u)return e.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ls,o);Ja.subVectors(t,r);const h=Ls.dot(Ja),g=Is.dot(Ja);if(g>=0&&h<=g)return e.copy(r);const x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Is,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return nf.subVectors(r,s),a=(d-u)/(d-u+(h-g)),e.copy(s).addScaledVector(nf,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},mo={h:0,s:0,l:0};function nc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class me{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=De.workingColorSpace){return this.r=t,this.g=e,this.b=n,De.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=De.workingColorSpace){if(t=Ql(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=nc(o,r,t+1/3),this.g=nc(o,r,t),this.b=nc(o,r,t-1/3)}return De.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const n=Ld[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return De.fromWorkingColorSpace(fn.copy(this),t),Math.round(cn(fn.r*255,0,255))*65536+Math.round(cn(fn.g*255,0,255))*256+Math.round(cn(fn.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=De.workingColorSpace){De.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=De.workingColorSpace){return De.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=pn){De.fromWorkingColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,s=fn.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(mo);const n=Fr(Ni.h,mo.h,e),s=Fr(Ni.s,mo.s,e),r=Fr(Ni.l,mo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new me;me.NAMES=Ld;let Gm=0;class ys extends hr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=dr(),this.name="",this.blending=Zs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Vr,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Id extends ys{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Je=new et,go=new ce;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ku,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)go.fromBufferAttribute(this,e),go.applyMatrix3(t),this.setXY(e,go.x,go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ku&&(t.usage=this.usage),t}}class Dd extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zd extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vm=0;const Fn=new ze,ic=new ln,Ds=new et,bn=new ji,yr=new ji,an=new et;class Ze extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ad(t)?zd:Dd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(bn.min,yr.min),bn.expandByPoint(an),an.addVectors(bn.max,yr.max),bn.expandByPoint(an)):(bn.expandByPoint(yr.min),bn.expandByPoint(yr.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)an.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(an));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)an.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(t,l),an.add(Ds)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new et,c[w]=new et;const l=new et,u=new et,d=new et,f=new ce,h=new ce,g=new ce,x=new et,m=new et;function p(w,v,_){l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,_),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,v),g.fromBufferAttribute(r,_),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const T=1/(h.x*g.y-g.x*h.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(T),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(T),a[w].add(x),a[v].add(x),a[_].add(x),c[w].add(m),c[v].add(m),c[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let w=0,v=y.length;w<v;++w){const _=y[w],T=_.start,z=_.count;for(let U=T,X=T+z;U<X;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new et,S=new et,R=new et,P=new et;function b(w){R.fromBufferAttribute(s,w),P.copy(R);const v=a[w];M.copy(v),M.sub(R.multiplyScalar(R.dot(v))).normalize(),S.crossVectors(P,v);const T=S.dot(c[w])<0?-1:1;o.setXYZW(w,M.x,M.y,M.z,T)}for(let w=0,v=y.length;w<v;++w){const _=y[w],T=_.start,z=_.count;for(let U=T,X=T+z;U<X;U+=3)b(t.getX(U+0)),b(t.getX(U+1)),b(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const s=new et,r=new et,o=new et,a=new et,c=new et,l=new et,u=new et,d=new et;if(t)for(let f=0,h=t.count;f<h;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Ke(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=t(f,n);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sf=new ze,ts=new Nm,xo=new Zi,rf=new et,vo=new et,_o=new et,Mo=new et,sc=new et,yo=new et,of=new et,So=new et;class Ve extends ln{constructor(t=new Ze,e=new Id){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(sc.fromBufferAttribute(d,t),o?yo.addScaledVector(sc,u):yo.addScaledVector(sc.sub(e),u))}e.add(yo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(xo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(xo,rf)===null||ts.origin.distanceToSquared(rf)>(t.far-t.near)**2))&&(sf.copy(r).invert(),ts.copy(t.ray).applyMatrix4(sf),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,R=M;S<R;S+=3){const P=a.getX(S),b=a.getX(S+1),w=a.getX(S+2);s=wo(this,p,t,n,l,u,d,P,b,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=wo(this,o,t,n,l,u,d,y,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),M=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let S=y,R=M;S<R;S+=3){const P=S,b=S+1,w=S+2;s=wo(this,p,t,n,l,u,d,P,b,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const y=m,M=m+1,S=m+2;s=wo(this,o,t,n,l,u,d,y,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Wm(i,t,e,n,s,r,o,a){let c;if(t.side===vn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===qi,a),c===null)return null;So.copy(a),So.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(So);return l<e.near||l>e.far?null:{distance:l,point:So.clone(),object:i}}function wo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,vo),i.getVertexPosition(c,_o),i.getVertexPosition(l,Mo);const u=Wm(i,t,e,n,vo,_o,Mo,of);if(u){const d=new et;Qn.getBarycoord(of,vo,_o,Mo,d),s&&(u.uv=Qn.getInterpolatedAttribute(s,a,c,l,d,new ce)),r&&(u.uv1=Qn.getInterpolatedAttribute(r,a,c,l,d,new ce)),o&&(u.normal=Qn.getInterpolatedAttribute(o,a,c,l,d,new et),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new et,materialIndex:0};Qn.getNormal(vo,_o,Mo,f.normal),u.face=f,u.barycoord=d}return u}class Nn extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(d,2));function g(x,m,p,y,M,S,R,P,b,w,v){const _=S/b,T=R/w,z=S/2,U=R/2,X=P/2,Y=b+1,Q=w+1;let xt=0,ot=0;const k=new et;for(let D=0;D<Q;D++){const q=D*T-U;for(let K=0;K<Y;K++){const nt=K*_-z;k[x]=nt*y,k[m]=q*M,k[p]=X,l.push(k.x,k.y,k.z),k[x]=0,k[m]=0,k[p]=P>0?1:-1,u.push(k.x,k.y,k.z),d.push(K/b),d.push(1-D/w),xt+=1}}for(let D=0;D<w;D++)for(let q=0;q<b;q++){const K=f+q+Y*D,nt=f+q+Y*(D+1),O=f+(q+1)+Y*(D+1),J=f+(q+1)+Y*D;c.push(K,nt,J),c.push(nt,O,J),ot+=6}a.addGroup(h,ot,v),h+=ot,f+=xt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){const t={};for(let e=0;e<i.length;e++){const n=cr(i[e]);for(const s in n)t[s]=n[s]}return t}function Xm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const qm={clone:cr,merge:xn};var Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends ys{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=Xm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ud extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new et,af=new ce,cf=new ce;class Cn extends Ud{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,af,cf),e.subVectors(cf,af)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zs=-90,Ns=1;class $m extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(zs,Ns,t,e);s.layers=this.layers,this.add(s);const r=new Cn(zs,Ns,t,e);r.layers=this.layers,this.add(r);const o=new Cn(zs,Ns,t,e);o.layers=this.layers,this.add(o);const a=new Cn(zs,Ns,t,e);a.layers=this.layers,this.add(a);const c=new Cn(zs,Ns,t,e);c.layers=this.layers,this.add(c);const l=new Cn(zs,Ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fd extends mn{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jm extends _s{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nn(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Gi});r.uniforms.tEquirect.value=e;const o=new Ve(s,r),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=Vn),new $m(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const rc=new et,Zm=new et,Jm=new Re;class us{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=rc.subVectors(n,e).cross(Zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jm.getNormalMatrix(t),s=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Zi,bo=new et;class tu{constructor(t=new us,e=new us,n=new us,s=new us,r=new us,o=new us){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],h=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],M=s[14],S=s[15];if(n[0].setComponents(c-r,f-l,m-h,S-p).normalize(),n[1].setComponents(c+r,f+l,m+h,S+p).normalize(),n[2].setComponents(c+o,f+u,m+g,S+y).normalize(),n[3].setComponents(c-o,f-u,m-g,S-y).normalize(),n[4].setComponents(c-a,f-d,m-x,S-M).normalize(),e===Ei)n[5].setComponents(c+a,f+d,m+x,S+M).normalize();else if(e===fa)n[5].setComponents(a,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qm(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const x=d[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ss extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,f=e/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const y=p*f-o;for(let M=0;M<l;M++){const S=M*d-r;g.push(S,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const M=y+l*p,S=y+l*(p+1),R=y+1+l*(p+1),P=y+1+l*p;h.push(M,S,P),h.push(S,R,P)}this.setIndex(h),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.widthSegments,t.heightSegments)}}var tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,og=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ov=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,av=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:tg,alphahash_pars_fragment:eg,alphamap_fragment:ng,alphamap_pars_fragment:ig,alphatest_fragment:sg,alphatest_pars_fragment:rg,aomap_fragment:og,aomap_pars_fragment:ag,batching_pars_vertex:cg,batching_vertex:lg,begin_vertex:ug,beginnormal_vertex:fg,bsdfs:hg,iridescence_fragment:dg,bumpmap_pars_fragment:pg,clipping_planes_fragment:mg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:xg,clipping_planes_vertex:vg,color_fragment:_g,color_pars_fragment:Mg,color_pars_vertex:yg,color_vertex:Sg,common:wg,cube_uv_reflection_fragment:bg,defaultnormal_vertex:Eg,displacementmap_pars_vertex:Tg,displacementmap_vertex:Ag,emissivemap_fragment:Cg,emissivemap_pars_fragment:Rg,colorspace_fragment:Pg,colorspace_pars_fragment:Lg,envmap_fragment:Ig,envmap_common_pars_fragment:Dg,envmap_pars_fragment:zg,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:qg,envmap_vertex:Ug,fog_vertex:Fg,fog_pars_vertex:Og,fog_fragment:kg,fog_pars_fragment:Bg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:Gg,lights_lambert_fragment:Vg,lights_lambert_pars_fragment:Wg,lights_pars_begin:Xg,lights_toon_fragment:Yg,lights_toon_pars_fragment:Kg,lights_phong_fragment:$g,lights_phong_pars_fragment:jg,lights_physical_fragment:Zg,lights_physical_pars_fragment:Jg,lights_fragment_begin:Qg,lights_fragment_maps:tx,lights_fragment_end:ex,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:rx,map_fragment:ox,map_pars_fragment:ax,map_particle_fragment:cx,map_particle_pars_fragment:lx,metalnessmap_fragment:ux,metalnessmap_pars_fragment:fx,morphinstance_vertex:hx,morphcolor_vertex:dx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:xx,normal_fragment_maps:vx,normal_pars_fragment:_x,normal_pars_vertex:Mx,normal_vertex:yx,normalmap_pars_fragment:Sx,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Tx,opaque_fragment:Ax,packing:Cx,premultiplied_alpha_fragment:Rx,project_vertex:Px,dithering_fragment:Lx,dithering_pars_fragment:Ix,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:zx,shadowmap_pars_fragment:Nx,shadowmap_pars_vertex:Ux,shadowmap_vertex:Fx,shadowmask_pars_fragment:Ox,skinbase_vertex:kx,skinning_pars_vertex:Bx,skinning_vertex:Hx,skinnormal_vertex:Gx,specularmap_fragment:Vx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:qx,transmission_fragment:Yx,transmission_pars_fragment:Kx,uv_pars_fragment:$x,uv_pars_vertex:jx,uv_vertex:Zx,worldpos_vertex:Jx,background_vert:Qx,background_frag:tv,backgroundCube_vert:ev,backgroundCube_frag:nv,cube_vert:iv,cube_frag:sv,depth_vert:rv,depth_frag:ov,distanceRGBA_vert:av,distanceRGBA_frag:cv,equirect_vert:lv,equirect_frag:uv,linedashed_vert:fv,linedashed_frag:hv,meshbasic_vert:dv,meshbasic_frag:pv,meshlambert_vert:mv,meshlambert_frag:gv,meshmatcap_vert:xv,meshmatcap_frag:vv,meshnormal_vert:_v,meshnormal_frag:Mv,meshphong_vert:yv,meshphong_frag:Sv,meshphysical_vert:wv,meshphysical_frag:bv,meshtoon_vert:Ev,meshtoon_frag:Tv,points_vert:Av,points_frag:Cv,shadow_vert:Rv,shadow_frag:Pv,sprite_vert:Lv,sprite_frag:Iv},oe={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},ai={basic:{uniforms:xn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:xn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new me(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:xn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:xn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:xn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new me(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:xn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:xn([oe.points,oe.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:xn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:xn([oe.common,oe.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:xn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:xn([oe.sprite,oe.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:xn([oe.common,oe.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:xn([oe.lights,oe.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};ai.physical={uniforms:xn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Eo={r:0,b:0,g:0},ns=new zn,Dv=new ze;function zv(i,t,e,n,s,r,o){const a=new me(0);let c=r===!0?0:1,l,u,d=null,f=0,h=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1;const S=g(y);S===null?p(a,c):S&&S.isColor&&(p(S,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,M){const S=g(M);S&&(S.isCubeTexture||S.mapping===ya)?(u===void 0&&(u=new Ve(new Nn(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:cr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(M.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(ns)),u.material.toneMapped=De.getTransfer(S.colorSpace)!==Ue,(d!==S||f!==S.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,h=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ve(new Ss(2,2),new _n({name:"BackgroundMaterial",uniforms:cr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=De.getTransfer(S.colorSpace)!==Ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(Eo,Nd(i)),n.buffers.color.setClear(Eo.r,Eo.g,Eo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m}}function Nv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(_,T,z,U,X){let Y=!1;const Q=d(U,z,T);r!==Q&&(r=Q,l(r.object)),Y=h(_,U,z,X),Y&&g(_,U,z,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(_,T,z,U),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,T,z){const U=z.wireframe===!0;let X=n[_.id];X===void 0&&(X={},n[_.id]=X);let Y=X[T.id];Y===void 0&&(Y={},X[T.id]=Y);let Q=Y[U];return Q===void 0&&(Q=f(c()),Y[U]=Q),Q}function f(_){const T=[],z=[],U=[];for(let X=0;X<e;X++)T[X]=0,z[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:U,object:_,attributes:{},index:null}}function h(_,T,z,U){const X=r.attributes,Y=T.attributes;let Q=0;const xt=z.getAttributes();for(const ot in xt)if(xt[ot].location>=0){const D=X[ot];let q=Y[ot];if(q===void 0&&(ot==="instanceMatrix"&&_.instanceMatrix&&(q=_.instanceMatrix),ot==="instanceColor"&&_.instanceColor&&(q=_.instanceColor)),D===void 0||D.attribute!==q||q&&D.data!==q.data)return!0;Q++}return r.attributesNum!==Q||r.index!==U}function g(_,T,z,U){const X={},Y=T.attributes;let Q=0;const xt=z.getAttributes();for(const ot in xt)if(xt[ot].location>=0){let D=Y[ot];D===void 0&&(ot==="instanceMatrix"&&_.instanceMatrix&&(D=_.instanceMatrix),ot==="instanceColor"&&_.instanceColor&&(D=_.instanceColor));const q={};q.attribute=D,D&&D.data&&(q.data=D.data),X[ot]=q,Q++}r.attributes=X,r.attributesNum=Q,r.index=U}function x(){const _=r.newAttributes;for(let T=0,z=_.length;T<z;T++)_[T]=0}function m(_){p(_,0)}function p(_,T){const z=r.newAttributes,U=r.enabledAttributes,X=r.attributeDivisors;z[_]=1,U[_]===0&&(i.enableVertexAttribArray(_),U[_]=1),X[_]!==T&&(i.vertexAttribDivisor(_,T),X[_]=T)}function y(){const _=r.newAttributes,T=r.enabledAttributes;for(let z=0,U=T.length;z<U;z++)T[z]!==_[z]&&(i.disableVertexAttribArray(z),T[z]=0)}function M(_,T,z,U,X,Y,Q){Q===!0?i.vertexAttribIPointer(_,T,z,X,Y):i.vertexAttribPointer(_,T,z,U,X,Y)}function S(_,T,z,U){x();const X=U.attributes,Y=z.getAttributes(),Q=T.defaultAttributeValues;for(const xt in Y){const ot=Y[xt];if(ot.location>=0){let k=X[xt];if(k===void 0&&(xt==="instanceMatrix"&&_.instanceMatrix&&(k=_.instanceMatrix),xt==="instanceColor"&&_.instanceColor&&(k=_.instanceColor)),k!==void 0){const D=k.normalized,q=k.itemSize,K=t.get(k);if(K===void 0)continue;const nt=K.buffer,O=K.type,J=K.bytesPerElement,ut=O===i.INT||O===i.UNSIGNED_INT||k.gpuType===ql;if(k.isInterleavedBufferAttribute){const B=k.data,it=B.stride,ft=k.offset;if(B.isInstancedInterleavedBuffer){for(let gt=0;gt<ot.locationSize;gt++)p(ot.location+gt,B.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let gt=0;gt<ot.locationSize;gt++)m(ot.location+gt);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let gt=0;gt<ot.locationSize;gt++)M(ot.location+gt,q/ot.locationSize,O,D,it*J,(ft+q/ot.locationSize*gt)*J,ut)}else{if(k.isInstancedBufferAttribute){for(let B=0;B<ot.locationSize;B++)p(ot.location+B,k.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let B=0;B<ot.locationSize;B++)m(ot.location+B);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let B=0;B<ot.locationSize;B++)M(ot.location+B,q/ot.locationSize,O,D,q*J,q/ot.locationSize*B*J,ut)}}else if(Q!==void 0){const D=Q[xt];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(ot.location,D);break;case 3:i.vertexAttrib3fv(ot.location,D);break;case 4:i.vertexAttrib4fv(ot.location,D);break;default:i.vertexAttrib1fv(ot.location,D)}}}}y()}function R(){w();for(const _ in n){const T=n[_];for(const z in T){const U=T[z];for(const X in U)u(U[X].object),delete U[X];delete T[z]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;const T=n[_.id];for(const z in T){const U=T[z];for(const X in U)u(U[X].object),delete U[X];delete T[z]}delete n[_.id]}function b(_){for(const T in n){const z=n[T];if(z[_.id]===void 0)continue;const U=z[_.id];for(const X in U)u(U[X].object),delete U[X];delete z[_.id]}}function w(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:v,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Uv(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];e.update(h,n,1)}function c(l,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Fv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Wn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const w=b===$r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==fi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ui&&!w)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:R,maxSamples:P}}function Ov(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new us,a=new Re,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,M=y*4;let S=p.clippingState||null;c.value=S,S=u(g,f,M,h);for(let R=0;R!==M;++R)S[R]=e[R];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,h,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=h+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=h;M!==x;++M,S+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function kv(i){let t=new WeakMap;function e(o,a){return a===rl?o.mapping=sr:a===ol&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===rl||a===ol)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jm(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class kd extends Ud{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ks=4,lf=[.125,.215,.35,.446,.526,.582],ds=20,oc=new kd,uf=new me;let ac=null,cc=0,lc=0,uc=!1;const fs=(1+Math.sqrt(5))/2,Us=1/fs,ff=[new et(-fs,Us,0),new et(fs,Us,0),new et(-Us,0,fs),new et(Us,0,fs),new et(0,fs,-Us),new et(0,fs,Us),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)];class hf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ac=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ac,cc,lc),this._renderer.xr.enabled=uc,t.scissorTest=!1,To(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ac=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),uc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:$r,format:Wn,colorSpace:fr,depthBuffer:!1},s=df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bv(r)),this._blurMaterial=Hv(r,t,e)}return s}_compileMaterial(t){const e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,oc)}_sceneToCubeUV(t,e,n,s){const a=new Cn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(uf),u.toneMapping=Vi,u.autoClear=!1;const h=new Id({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Ve(new Nn,h);let x=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,x=!0):(h.color.copy(uf),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;To(s,y*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===sr||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;To(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,oc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ff[(s-r-1)%ff.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ve(this._lodPlanes[s],l),f=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ds-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const p=[];let y=0;for(let b=0;b<ds;++b){const w=b/x,v=Math.exp(-w*w/2);p.push(v),b===0?y+=v:b<m&&(y+=2*v)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const S=this._sizeLods[s],R=3*S*(s>M-Ks?s-M+Ks:0),P=4*(this._cubeSize-S);To(e,R,P,3*S,2*S),c.setRenderTarget(e),c.render(d,oc)}}function Bv(i){const t=[],e=[],n=[];let s=i;const r=i-Ks+1+lf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ks?c=lf[o-i+Ks-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*h),M=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let P=0;P<h;P++){const b=P%3*2/3-1,w=P>2?0:-1,v=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];y.set(v,x*g*P),M.set(f,m*g*P);const _=[P,P,P,P,P,P];S.set(_,p*g*P)}const R=new Ze;R.setAttribute("position",new Ke(y,x)),R.setAttribute("uv",new Ke(M,m)),R.setAttribute("faceIndex",new Ke(S,p)),t.push(R),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function df(i,t,e){const n=new _s(i,t,e);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hv(i,t,e){const n=new Float32Array(ds),s=new et(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function pf(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function mf(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===rl||c===ol,u=c===sr||c===rr;if(l||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new hf(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new hf(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wv(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const x=h[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){const f=[],h=d.index,g=d.attributes.position;let x=0;if(h!==null){const y=h.array;x=h.version;for(let M=0,S=y.length;M<S;M+=3){const R=y[M+0],P=y[M+1],b=y[M+2];f.push(R,P,P,b,b,R)}}else if(g!==void 0){const y=g.array;x=g.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const R=M+0,P=M+1,b=M+2;f.push(R,P,P,b,b,R)}}else return;const m=new(Ad(f)?zd:Dd)(f,1);m.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Xv(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,f*o,g),e.update(h,n,g))}function u(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,n,1)}function d(f,h,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Yv(i,t,e){const n=new WeakMap,s=new Ge;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let v=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;h===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let S=a.attributes.position.count*M,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const P=new Float32Array(S*R*4*d),b=new Rd(P,S,R,d);b.type=ui,b.needsUpdate=!0;const w=M*4;for(let _=0;_<d;_++){const T=m[_],z=p[_],U=y[_],X=S*R*4*_;for(let Y=0;Y<T.count;Y++){const Q=Y*w;h===!0&&(s.fromBufferAttribute(T,Y),P[X+Q+0]=s.x,P[X+Q+1]=s.y,P[X+Q+2]=s.z,P[X+Q+3]=0),g===!0&&(s.fromBufferAttribute(z,Y),P[X+Q+4]=s.x,P[X+Q+5]=s.y,P[X+Q+6]=s.z,P[X+Q+7]=0),x===!0&&(s.fromBufferAttribute(U,Y),P[X+Q+8]=s.x,P[X+Q+9]=s.y,P[X+Q+10]=s.z,P[X+Q+11]=U.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new ce(S,R)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];const g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Kv(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Bd extends mn{constructor(t,e,n,s,r,o,a,c,l,u=Js){if(u!==Js&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Js&&(n=vs),n===void 0&&u===ar&&(n=or),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=c!==void 0?c:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hd=new mn,gf=new Bd(1,1),Gd=new Rd,Vd=new Dm,Wd=new Fd,xf=[],vf=[],_f=new Float32Array(16),Mf=new Float32Array(9),yf=new Float32Array(4);function pr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=xf[s];if(r===void 0&&(r=new Float32Array(s),xf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ba(i,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $v(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2fv(this.addr,t),rn(e,t)}}function Zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;i.uniform3fv(this.addr,t),rn(e,t)}}function Jv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4fv(this.addr,t),rn(e,t)}}function Qv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;yf.set(n),i.uniformMatrix2fv(this.addr,!1,yf),rn(e,n)}}function t1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;Mf.set(n),i.uniformMatrix3fv(this.addr,!1,Mf),rn(e,n)}}function e1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(sn(e,n))return;_f.set(n),i.uniformMatrix4fv(this.addr,!1,_f),rn(e,n)}}function n1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function i1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2iv(this.addr,t),rn(e,t)}}function s1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3iv(this.addr,t),rn(e,t)}}function r1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4iv(this.addr,t),rn(e,t)}}function o1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function a1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2uiv(this.addr,t),rn(e,t)}}function c1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3uiv(this.addr,t),rn(e,t)}}function l1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4uiv(this.addr,t),rn(e,t)}}function u1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gf.compareFunction=Td,r=gf):r=Hd,e.setTexture2D(t||r,s)}function f1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vd,s)}function h1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wd,s)}function d1(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gd,s)}function p1(i){switch(i){case 5126:return $v;case 35664:return jv;case 35665:return Zv;case 35666:return Jv;case 35674:return Qv;case 35675:return t1;case 35676:return e1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return s1;case 35669:case 35673:return r1;case 5125:return o1;case 36294:return a1;case 36295:return c1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(i,t){i.uniform1fv(this.addr,t)}function g1(i,t){const e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function x1(i,t){const e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function v1(i,t){const e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function _1(i,t){const e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function M1(i,t){const e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function y1(i,t){const e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function S1(i,t){i.uniform1iv(this.addr,t)}function w1(i,t){i.uniform2iv(this.addr,t)}function b1(i,t){i.uniform3iv(this.addr,t)}function E1(i,t){i.uniform4iv(this.addr,t)}function T1(i,t){i.uniform1uiv(this.addr,t)}function A1(i,t){i.uniform2uiv(this.addr,t)}function C1(i,t){i.uniform3uiv(this.addr,t)}function R1(i,t){i.uniform4uiv(this.addr,t)}function P1(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Hd,r[o])}function L1(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vd,r[o])}function I1(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Wd,r[o])}function D1(i,t,e){const n=this.cache,s=t.length,r=ba(e,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gd,r[o])}function z1(i){switch(i){case 5126:return m1;case 35664:return g1;case 35665:return x1;case 35666:return v1;case 35674:return _1;case 35675:return M1;case 35676:return y1;case 5124:case 35670:return S1;case 35667:case 35671:return w1;case 35668:case 35672:return b1;case 35669:case 35673:return E1;case 5125:return T1;case 36294:return A1;case 36295:return C1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return I1;case 36289:case 36303:case 36311:case 36292:return D1}}class N1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=p1(e.type)}}class U1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=z1(e.type)}}class F1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function Sf(i,t){i.seq.push(t),i.map[t.id]=t}function O1(i,t,e){const n=i.name,s=n.length;for(fc.lastIndex=0;;){const r=fc.exec(n),o=fc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Sf(e,l===void 0?new N1(a,i,t):new U1(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new F1(a),Sf(e,d)),e=d}}}class na{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);O1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function wf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const k1=37297;let B1=0;function H1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const bf=new Re;function G1(i){De._getMatrix(bf,De.workingColorSpace,i);const t=`mat3( ${bf.elements.map(e=>e.toFixed(4))} )`;switch(De.getTransfer(i)){case wa:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ef(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+H1(i.getShaderSource(t),o)}else return s}function V1(i,t){const e=G1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function W1(i,t){let e;switch(t){case q0:e="Linear";break;case Y0:e="Reinhard";break;case K0:e="Cineon";break;case $0:e="ACESFilmic";break;case Z0:e="AgX";break;case md:e="Neutral";break;case j0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ao=new et;function X1(){De.getLuminanceCoefficients(Ao);const i=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function Y1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function K1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Pr(i){return i!==""}function Tf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Af(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(i){return i.replace($1,Z1)}const j1=new Map;function Z1(i,t){let e=Pe[t];if(e===void 0){const n=j1.get(t);if(n!==void 0)e=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}const J1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(i){return i.replace(J1,Q1)}function Q1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===A0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function e_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function i_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ma:t="ENVMAP_BLENDING_MULTIPLY";break;case W0:t="ENVMAP_BLENDING_MIX";break;case X0:t="ENVMAP_BLENDING_ADD";break}return t}function s_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function r_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=t_(e),l=e_(e),u=n_(e),d=i_(e),f=s_(e),h=q1(e),g=Y1(r),x=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?Pe.tonemapping_pars_fragment:"",e.toneMapping!==Vi?W1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,V1("linearToOutputTexel",e.outputColorSpace),X1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),o=Nl(o),o=Tf(o,e),o=Af(o,e),a=Nl(a),a=Tf(a,e),a=Af(a,e),o=Cf(o),a=Cf(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,S=y+p+a,R=wf(s,s.VERTEX_SHADER,M),P=wf(s,s.FRAGMENT_SHADER,S);s.attachShader(x,R),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(T){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(R).trim(),X=s.getShaderInfoLog(P).trim();let Y=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,P);else{const xt=Ef(s,R,"vertex"),ot=Ef(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+xt+`
`+ot)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||X==="")&&(Q=!1);Q&&(T.diagnostics={runnable:Y,programLog:z,vertexShader:{log:U,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(R),s.deleteShader(P),w=new na(s,x),v=K1(s,x)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,k1)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=P,this}let o_=0;class a_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new c_(t),e.set(t,n)),n}}class c_{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}}function l_(i,t,e,n,s,r,o){const a=new Pd,c=new a_,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,_,T,z,U){const X=z.fog,Y=U.geometry,Q=v.isMeshStandardMaterial?z.environment:null,xt=(v.isMeshStandardMaterial?e:t).get(v.envMap||Q),ot=xt&&xt.mapping===ya?xt.image.height:null,k=g[v.type];v.precision!==null&&(h=s.getMaxPrecision(v.precision),h!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,q=D!==void 0?D.length:0;let K=0;Y.morphAttributes.position!==void 0&&(K=1),Y.morphAttributes.normal!==void 0&&(K=2),Y.morphAttributes.color!==void 0&&(K=3);let nt,O,J,ut;if(k){const Bt=ai[k];nt=Bt.vertexShader,O=Bt.fragmentShader}else nt=v.vertexShader,O=v.fragmentShader,c.update(v),J=c.getVertexShaderID(v),ut=c.getFragmentShaderID(v);const B=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),ft=U.isInstancedMesh===!0,gt=U.isBatchedMesh===!0,Tt=!!v.map,tt=!!v.matcap,pt=!!xt,H=!!v.aoMap,rt=!!v.lightMap,jt=!!v.bumpMap,ie=!!v.normalMap,qt=!!v.displacementMap,se=!!v.emissiveMap,Yt=!!v.metalnessMap,E=!!v.roughnessMap,C=v.anisotropy>0,lt=v.clearcoat>0,ht=v.dispersion>0,bt=v.iridescence>0,At=v.sheen>0,Jt=v.transmission>0,Vt=C&&!!v.anisotropyMap,Ht=lt&&!!v.clearcoatMap,de=lt&&!!v.clearcoatNormalMap,Ot=lt&&!!v.clearcoatRoughnessMap,Qt=bt&&!!v.iridescenceMap,he=bt&&!!v.iridescenceThicknessMap,ne=At&&!!v.sheenColorMap,Wt=At&&!!v.sheenRoughnessMap,xe=!!v.specularMap,pe=!!v.specularColorMap,Me=!!v.specularIntensityMap,ct=Jt&&!!v.transmissionMap,Ct=Jt&&!!v.thicknessMap,_t=!!v.gradientMap,Et=!!v.alphaMap,Ut=v.alphaTest>0,st=!!v.alphaHash,St=!!v.extensions;let Rt=Vi;v.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Rt=i.toneMapping);const It={shaderID:k,shaderType:v.type,shaderName:v.name,vertexShader:nt,fragmentShader:O,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:gt,batchingColor:gt&&U._colorsTexture!==null,instancing:ft,instancingColor:ft&&U.instanceColor!==null,instancingMorph:ft&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:fr,alphaToCoverage:!!v.alphaToCoverage,map:Tt,matcap:tt,envMap:pt,envMapMode:pt&&xt.mapping,envMapCubeUVHeight:ot,aoMap:H,lightMap:rt,bumpMap:jt,normalMap:ie,displacementMap:f&&qt,emissiveMap:se,normalMapObjectSpace:ie&&v.normalMapType===em,normalMapTangentSpace:ie&&v.normalMapType===Sa,metalnessMap:Yt,roughnessMap:E,anisotropy:C,anisotropyMap:Vt,clearcoat:lt,clearcoatMap:Ht,clearcoatNormalMap:de,clearcoatRoughnessMap:Ot,dispersion:ht,iridescence:bt,iridescenceMap:Qt,iridescenceThicknessMap:he,sheen:At,sheenColorMap:ne,sheenRoughnessMap:Wt,specularMap:xe,specularColorMap:pe,specularIntensityMap:Me,transmission:Jt,transmissionMap:ct,thicknessMap:Ct,gradientMap:_t,opaque:v.transparent===!1&&v.blending===Zs&&v.alphaToCoverage===!1,alphaMap:Et,alphaTest:Ut,alphaHash:st,combine:v.combine,mapUv:Tt&&x(v.map.channel),aoMapUv:H&&x(v.aoMap.channel),lightMapUv:rt&&x(v.lightMap.channel),bumpMapUv:jt&&x(v.bumpMap.channel),normalMapUv:ie&&x(v.normalMap.channel),displacementMapUv:qt&&x(v.displacementMap.channel),emissiveMapUv:se&&x(v.emissiveMap.channel),metalnessMapUv:Yt&&x(v.metalnessMap.channel),roughnessMapUv:E&&x(v.roughnessMap.channel),anisotropyMapUv:Vt&&x(v.anisotropyMap.channel),clearcoatMapUv:Ht&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&x(v.sheenRoughnessMap.channel),specularMapUv:xe&&x(v.specularMap.channel),specularColorMapUv:pe&&x(v.specularColorMap.channel),specularIntensityMapUv:Me&&x(v.specularIntensityMap.channel),transmissionMapUv:ct&&x(v.transmissionMap.channel),thicknessMapUv:Ct&&x(v.thicknessMap.channel),alphaMapUv:Et&&x(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ie||C),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(Tt||Et),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:it,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:K,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Tt&&v.map.isVideoTexture===!0&&De.getTransfer(v.map.colorSpace)===Ue,decodeVideoTextureEmissive:se&&v.emissiveMap.isVideoTexture===!0&&De.getTransfer(v.emissiveMap.colorSpace)===Ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:St&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&v.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)_.push(T),_.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(y(_,v),M(_,v),_.push(i.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function y(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function M(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function S(v){const _=g[v.type];let T;if(_){const z=ai[_];T=qm.clone(z.uniforms)}else T=v.uniforms;return T}function R(v,_){let T;for(let z=0,U=u.length;z<U;z++){const X=u[z];if(X.cacheKey===_){T=X,++T.usedTimes;break}}return T===void 0&&(T=new r_(i,_,v,r),u.push(T)),T}function P(v){if(--v.usedTimes===0){const _=u.indexOf(v);u[_]=u[u.length-1],u.pop(),v.destroy()}}function b(v){c.remove(v)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:P,releaseShaderCache:b,programs:u,dispose:w}}function u_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function f_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,h,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,f,h,g,x,m){const p=o(d,f,h,g,x,m);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):e.push(p)}function c(d,f,h,g,x,m){const p=o(d,f,h,g,x,m);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,f){e.length>1&&e.sort(d||f_),n.length>1&&n.sort(f||Pf),s.length>1&&s.sort(f||Pf)}function u(){for(let d=t,f=i.length;d<f;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function h_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Lf,i.set(n,[o])):s>=r.length?(o=new Lf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new me};break;case"SpotLight":e={position:new et,direction:new et,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new et,halfWidth:new et,halfHeight:new et};break}return i[t.id]=e,e}}}function p_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let m_=0;function g_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function x_(i){const t=new d_,e=p_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new et);const s=new et,r=new ze,o=new ze;function a(l){let u=0,d=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,y=0,M=0,S=0,R=0,P=0,b=0;l.sort(g_);for(let v=0,_=l.length;v<_;v++){const T=l[v],z=T.color,U=T.intensity,X=T.distance,Y=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=z.r*U,d+=z.g*U,f+=z.b*U;else if(T.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(T.sh.coefficients[Q],U);b++}else if(T.isDirectionalLight){const Q=t.get(T);if(Q.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const xt=T.shadow,ot=e.get(T);ot.shadowIntensity=xt.intensity,ot.shadowBias=xt.bias,ot.shadowNormalBias=xt.normalBias,ot.shadowRadius=xt.radius,ot.shadowMapSize=xt.mapSize,n.directionalShadow[h]=ot,n.directionalShadowMap[h]=Y,n.directionalShadowMatrix[h]=T.shadow.matrix,y++}n.directional[h]=Q,h++}else if(T.isSpotLight){const Q=t.get(T);Q.position.setFromMatrixPosition(T.matrixWorld),Q.color.copy(z).multiplyScalar(U),Q.distance=X,Q.coneCos=Math.cos(T.angle),Q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Q.decay=T.decay,n.spot[x]=Q;const xt=T.shadow;if(T.map&&(n.spotLightMap[R]=T.map,R++,xt.updateMatrices(T),T.castShadow&&P++),n.spotLightMatrix[x]=xt.matrix,T.castShadow){const ot=e.get(T);ot.shadowIntensity=xt.intensity,ot.shadowBias=xt.bias,ot.shadowNormalBias=xt.normalBias,ot.shadowRadius=xt.radius,ot.shadowMapSize=xt.mapSize,n.spotShadow[x]=ot,n.spotShadowMap[x]=Y,S++}x++}else if(T.isRectAreaLight){const Q=t.get(T);Q.color.copy(z).multiplyScalar(U),Q.halfWidth.set(T.width*.5,0,0),Q.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=Q,m++}else if(T.isPointLight){const Q=t.get(T);if(Q.color.copy(T.color).multiplyScalar(T.intensity),Q.distance=T.distance,Q.decay=T.decay,T.castShadow){const xt=T.shadow,ot=e.get(T);ot.shadowIntensity=xt.intensity,ot.shadowBias=xt.bias,ot.shadowNormalBias=xt.normalBias,ot.shadowRadius=xt.radius,ot.shadowMapSize=xt.mapSize,ot.shadowCameraNear=xt.camera.near,ot.shadowCameraFar=xt.camera.far,n.pointShadow[g]=ot,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=T.shadow.matrix,M++}n.point[g]=Q,g++}else if(T.isHemisphereLight){const Q=t.get(T);Q.skyColor.copy(T.color).multiplyScalar(U),Q.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[p]=Q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==h||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==y||w.numPointShadows!==M||w.numSpotShadows!==S||w.numSpotMaps!==R||w.numLightProbes!==b)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+R-P,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=b,w.directionalLength=h,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=y,w.numPointShadows=M,w.numSpotShadows=S,w.numSpotMaps=R,w.numLightProbes=b,n.version=m_++)}function c(l,u){let d=0,f=0,h=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const M=l[p];if(M.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(M.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function If(i){const t=new x_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function v_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new If(i),t.set(s,[a])):r>=o.length?(a=new If(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class __ extends ys{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class M_ extends ys{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w_(i,t,e){let n=new tu;const s=new ce,r=new ce,o=new Ge,a=new __({depthPacking:tm}),c=new M_,l={},u=e.maxTextureSize,d={[qi]:vn,[vn]:qi,[Pn]:Pn},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:y_,fragmentShader:S_}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let p=this.type;this.render=function(P,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const v=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Gi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=p!==vi&&this.type===vi,X=p===vi&&this.type!==vi;for(let Y=0,Q=P.length;Y<Q;Y++){const xt=P[Y],ot=xt.shadow;if(ot===void 0){console.warn("THREE.WebGLShadowMap:",xt,"has no shadow.");continue}if(ot.autoUpdate===!1&&ot.needsUpdate===!1)continue;s.copy(ot.mapSize);const k=ot.getFrameExtents();if(s.multiply(k),r.copy(ot.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,ot.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,ot.mapSize.y=r.y)),ot.map===null||U===!0||X===!0){const q=this.type!==vi?{minFilter:Dn,magFilter:Dn}:{};ot.map!==null&&ot.map.dispose(),ot.map=new _s(s.x,s.y,q),ot.map.texture.name=xt.name+".shadowMap",ot.camera.updateProjectionMatrix()}i.setRenderTarget(ot.map),i.clear();const D=ot.getViewportCount();for(let q=0;q<D;q++){const K=ot.getViewport(q);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(o),ot.updateMatrices(xt,q),n=ot.getFrustum(),S(b,w,ot.camera,xt,this.type)}ot.isPointLightShadow!==!0&&this.type===vi&&y(ot,w),ot.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,_,T)};function y(P,b){const w=t.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new _s(s.x,s.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(b,null,w,f,x,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(b,null,w,h,x,null)}function M(P,b,w,v){let _=null;const T=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)_=T;else if(_=w.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=_.uuid,U=b.uuid;let X=l[z];X===void 0&&(X={},l[z]=X);let Y=X[U];Y===void 0&&(Y=_.clone(),X[U]=Y,b.addEventListener("dispose",R)),_=Y}if(_.visible=b.visible,_.wireframe=b.wireframe,v===vi?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:d[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,w.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const z=i.properties.get(_);z.light=w}return _}function S(P,b,w,v,_){if(P.visible===!1)return;if(P.layers.test(b.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===vi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const U=t.update(P),X=P.material;if(Array.isArray(X)){const Y=U.groups;for(let Q=0,xt=Y.length;Q<xt;Q++){const ot=Y[Q],k=X[ot.materialIndex];if(k&&k.visible){const D=M(P,k,v,_);P.onBeforeShadow(i,P,b,w,U,D,ot),i.renderBufferDirect(w,null,U,D,P,ot),P.onAfterShadow(i,P,b,w,U,D,ot)}}}else if(X.visible){const Y=M(P,X,v,_);P.onBeforeShadow(i,P,b,w,U,Y,null),i.renderBufferDirect(w,null,U,Y,P,null),P.onAfterShadow(i,P,b,w,U,Y,null)}}const z=P.children;for(let U=0,X=z.length;U<X;U++)S(z[U],b,w,v,_)}function R(P){P.target.removeEventListener("dispose",R);for(const w in l){const v=l[w],_=P.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const b_={[Jc]:Qc,[tl]:il,[el]:sl,[ir]:nl,[Qc]:Jc,[il]:tl,[sl]:el,[nl]:ir};function E_(i,t){function e(){let ct=!1;const Ct=new Ge;let _t=null;const Et=new Ge(0,0,0,0);return{setMask:function(Ut){_t!==Ut&&!ct&&(i.colorMask(Ut,Ut,Ut,Ut),_t=Ut)},setLocked:function(Ut){ct=Ut},setClear:function(Ut,st,St,Rt,It){It===!0&&(Ut*=Rt,st*=Rt,St*=Rt),Ct.set(Ut,st,St,Rt),Et.equals(Ct)===!1&&(i.clearColor(Ut,st,St,Rt),Et.copy(Ct))},reset:function(){ct=!1,_t=null,Et.set(-1,0,0,0)}}}function n(){let ct=!1,Ct=!1,_t=null,Et=null,Ut=null;return{setReversed:function(st){if(Ct!==st){const St=t.get("EXT_clip_control");Ct?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT);const Rt=Ut;Ut=null,this.setClear(Rt)}Ct=st},getReversed:function(){return Ct},setTest:function(st){st?B(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(st){_t!==st&&!ct&&(i.depthMask(st),_t=st)},setFunc:function(st){if(Ct&&(st=b_[st]),Et!==st){switch(st){case Jc:i.depthFunc(i.NEVER);break;case Qc:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case el:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=st}},setLocked:function(st){ct=st},setClear:function(st){Ut!==st&&(Ct&&(st=1-st),i.clearDepth(st),Ut=st)},reset:function(){ct=!1,_t=null,Et=null,Ut=null,Ct=!1}}}function s(){let ct=!1,Ct=null,_t=null,Et=null,Ut=null,st=null,St=null,Rt=null,It=null;return{setTest:function(Bt){ct||(Bt?B(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(Bt){Ct!==Bt&&!ct&&(i.stencilMask(Bt),Ct=Bt)},setFunc:function(Bt,le,te){(_t!==Bt||Et!==le||Ut!==te)&&(i.stencilFunc(Bt,le,te),_t=Bt,Et=le,Ut=te)},setOp:function(Bt,le,te){(st!==Bt||St!==le||Rt!==te)&&(i.stencilOp(Bt,le,te),st=Bt,St=le,Rt=te)},setLocked:function(Bt){ct=Bt},setClear:function(Bt){It!==Bt&&(i.clearStencil(Bt),It=Bt)},reset:function(){ct=!1,Ct=null,_t=null,Et=null,Ut=null,st=null,St=null,Rt=null,It=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,y=null,M=null,S=null,R=null,P=null,b=new me(0,0,0),w=0,v=!1,_=null,T=null,z=null,U=null,X=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,xt=0;const ot=i.getParameter(i.VERSION);ot.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(ot)[1]),Q=xt>=1):ot.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),Q=xt>=2);let k=null,D={};const q=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),nt=new Ge().fromArray(q),O=new Ge().fromArray(K);function J(ct,Ct,_t,Et){const Ut=new Uint8Array(4),st=i.createTexture();i.bindTexture(ct,st),i.texParameteri(ct,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(ct,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<_t;St++)ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Ct+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return st}const ut={};ut[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(i.DEPTH_TEST),o.setFunc(ir),jt(!1),ie(zu),B(i.CULL_FACE),H(Gi);function B(ct){u[ct]!==!0&&(i.enable(ct),u[ct]=!0)}function it(ct){u[ct]!==!1&&(i.disable(ct),u[ct]=!1)}function ft(ct,Ct){return d[ct]!==Ct?(i.bindFramebuffer(ct,Ct),d[ct]=Ct,ct===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ct),ct===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function gt(ct,Ct){let _t=h,Et=!1;if(ct){_t=f.get(Ct),_t===void 0&&(_t=[],f.set(Ct,_t));const Ut=ct.textures;if(_t.length!==Ut.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let st=0,St=Ut.length;st<St;st++)_t[st]=i.COLOR_ATTACHMENT0+st;_t.length=Ut.length,Et=!0}}else _t[0]!==i.BACK&&(_t[0]=i.BACK,Et=!0);Et&&i.drawBuffers(_t)}function Tt(ct){return g!==ct?(i.useProgram(ct),g=ct,!0):!1}const tt={[Hi]:i.FUNC_ADD,[C0]:i.FUNC_SUBTRACT,[R0]:i.FUNC_REVERSE_SUBTRACT};tt[P0]=i.MIN,tt[L0]=i.MAX;const pt={[I0]:i.ZERO,[jc]:i.ONE,[D0]:i.SRC_COLOR,[Zc]:i.SRC_ALPHA,[k0]:i.SRC_ALPHA_SATURATE,[F0]:i.DST_COLOR,[N0]:i.DST_ALPHA,[z0]:i.ONE_MINUS_SRC_COLOR,[Vr]:i.ONE_MINUS_SRC_ALPHA,[O0]:i.ONE_MINUS_DST_COLOR,[U0]:i.ONE_MINUS_DST_ALPHA,[B0]:i.CONSTANT_COLOR,[H0]:i.ONE_MINUS_CONSTANT_COLOR,[G0]:i.CONSTANT_ALPHA,[V0]:i.ONE_MINUS_CONSTANT_ALPHA};function H(ct,Ct,_t,Et,Ut,st,St,Rt,It,Bt){if(ct===Gi){x===!0&&(it(i.BLEND),x=!1);return}if(x===!1&&(B(i.BLEND),x=!0),ct!==pd){if(ct!==m||Bt!==v){if((p!==Hi||S!==Hi)&&(i.blendEquation(i.FUNC_ADD),p=Hi,S=Hi),Bt)switch(ct){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nu:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ct);break}else switch(ct){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ct);break}y=null,M=null,R=null,P=null,b.set(0,0,0),w=0,m=ct,v=Bt}return}Ut=Ut||Ct,st=st||_t,St=St||Et,(Ct!==p||Ut!==S)&&(i.blendEquationSeparate(tt[Ct],tt[Ut]),p=Ct,S=Ut),(_t!==y||Et!==M||st!==R||St!==P)&&(i.blendFuncSeparate(pt[_t],pt[Et],pt[st],pt[St]),y=_t,M=Et,R=st,P=St),(Rt.equals(b)===!1||It!==w)&&(i.blendColor(Rt.r,Rt.g,Rt.b,It),b.copy(Rt),w=It),m=ct,v=!1}function rt(ct,Ct){ct.side===Pn?it(i.CULL_FACE):B(i.CULL_FACE);let _t=ct.side===vn;Ct&&(_t=!_t),jt(_t),ct.blending===Zs&&ct.transparent===!1?H(Gi):H(ct.blending,ct.blendEquation,ct.blendSrc,ct.blendDst,ct.blendEquationAlpha,ct.blendSrcAlpha,ct.blendDstAlpha,ct.blendColor,ct.blendAlpha,ct.premultipliedAlpha),o.setFunc(ct.depthFunc),o.setTest(ct.depthTest),o.setMask(ct.depthWrite),r.setMask(ct.colorWrite);const Et=ct.stencilWrite;a.setTest(Et),Et&&(a.setMask(ct.stencilWriteMask),a.setFunc(ct.stencilFunc,ct.stencilRef,ct.stencilFuncMask),a.setOp(ct.stencilFail,ct.stencilZFail,ct.stencilZPass)),se(ct.polygonOffset,ct.polygonOffsetFactor,ct.polygonOffsetUnits),ct.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(ct){_!==ct&&(ct?i.frontFace(i.CW):i.frontFace(i.CCW),_=ct)}function ie(ct){ct!==E0?(B(i.CULL_FACE),ct!==T&&(ct===zu?i.cullFace(i.BACK):ct===T0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),T=ct}function qt(ct){ct!==z&&(Q&&i.lineWidth(ct),z=ct)}function se(ct,Ct,_t){ct?(B(i.POLYGON_OFFSET_FILL),(U!==Ct||X!==_t)&&(i.polygonOffset(Ct,_t),U=Ct,X=_t)):it(i.POLYGON_OFFSET_FILL)}function Yt(ct){ct?B(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function E(ct){ct===void 0&&(ct=i.TEXTURE0+Y-1),k!==ct&&(i.activeTexture(ct),k=ct)}function C(ct,Ct,_t){_t===void 0&&(k===null?_t=i.TEXTURE0+Y-1:_t=k);let Et=D[_t];Et===void 0&&(Et={type:void 0,texture:void 0},D[_t]=Et),(Et.type!==ct||Et.texture!==Ct)&&(k!==_t&&(i.activeTexture(_t),k=_t),i.bindTexture(ct,Ct||ut[ct]),Et.type=ct,Et.texture=Ct)}function lt(){const ct=D[k];ct!==void 0&&ct.type!==void 0&&(i.bindTexture(ct.type,null),ct.type=void 0,ct.texture=void 0)}function ht(){try{i.compressedTexImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function At(){try{i.texSubImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Jt(){try{i.texSubImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Ot(){try{i.texStorage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Qt(){try{i.texImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function ne(ct){nt.equals(ct)===!1&&(i.scissor(ct.x,ct.y,ct.z,ct.w),nt.copy(ct))}function Wt(ct){O.equals(ct)===!1&&(i.viewport(ct.x,ct.y,ct.z,ct.w),O.copy(ct))}function xe(ct,Ct){let _t=l.get(Ct);_t===void 0&&(_t=new WeakMap,l.set(Ct,_t));let Et=_t.get(ct);Et===void 0&&(Et=i.getUniformBlockIndex(Ct,ct.name),_t.set(ct,Et))}function pe(ct,Ct){const Et=l.get(Ct).get(ct);c.get(Ct)!==Et&&(i.uniformBlockBinding(Ct,Et,ct.__bindingPointIndex),c.set(Ct,Et))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},k=null,D={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,y=null,M=null,S=null,R=null,P=null,b=new me(0,0,0),w=0,v=!1,_=null,T=null,z=null,U=null,X=null,nt.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:it,bindFramebuffer:ft,drawBuffers:gt,useProgram:Tt,setBlending:H,setMaterial:rt,setFlipSided:jt,setCullFace:ie,setLineWidth:qt,setPolygonOffset:se,setScissorTest:Yt,activeTexture:E,bindTexture:C,unbindTexture:lt,compressedTexImage2D:ht,compressedTexImage3D:bt,texImage2D:Qt,texImage3D:he,updateUBOMapping:xe,uniformBlockBinding:pe,texStorage2D:de,texStorage3D:Ot,texSubImage2D:At,texSubImage3D:Jt,compressedTexSubImage2D:Vt,compressedTexSubImage3D:Ht,scissor:ne,viewport:Wt,reset:Me}}function Df(i,t,e,n){const s=T_(n);switch(e){case Md:return i*t;case Sd:return i*t;case wd:return i*t*2;case $l:return i*t/s.components*s.byteLength;case jl:return i*t/s.components*s.byteLength;case bd:return i*t*2/s.components*s.byteLength;case Zl:return i*t*2/s.components*s.byteLength;case yd:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case Jl:return i*t*4/s.components*s.byteLength;case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qo:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:case fl:return Math.max(i,16)*Math.max(t,8)/4;case cl:case ul:return Math.max(i,8)*Math.max(t,8)/2;case hl:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ea:case Rl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ed:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Il:case Dl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T_(i){switch(i){case fi:case xd:return{byteLength:1,components:1};case Wr:case vd:case $r:return{byteLength:2,components:1};case Yl:case Kl:return{byteLength:2,components:4};case vs:case ql:case ui:return{byteLength:4,components:1};case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function A_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,C){return h?new OffscreenCanvas(E,C):ha("canvas")}function x(E,C,lt){let ht=1;const bt=Yt(E);if((bt.width>lt||bt.height>lt)&&(ht=lt/Math.max(bt.width,bt.height)),ht<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const At=Math.floor(ht*bt.width),Jt=Math.floor(ht*bt.height);d===void 0&&(d=g(At,Jt));const Vt=C?g(At,Jt):d;return Vt.width=At,Vt.height=Jt,Vt.getContext("2d").drawImage(E,0,0,At,Jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+At+"x"+Jt+")."),Vt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,C,lt,ht,bt=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let At=C;if(C===i.RED&&(lt===i.FLOAT&&(At=i.R32F),lt===i.HALF_FLOAT&&(At=i.R16F),lt===i.UNSIGNED_BYTE&&(At=i.R8)),C===i.RED_INTEGER&&(lt===i.UNSIGNED_BYTE&&(At=i.R8UI),lt===i.UNSIGNED_SHORT&&(At=i.R16UI),lt===i.UNSIGNED_INT&&(At=i.R32UI),lt===i.BYTE&&(At=i.R8I),lt===i.SHORT&&(At=i.R16I),lt===i.INT&&(At=i.R32I)),C===i.RG&&(lt===i.FLOAT&&(At=i.RG32F),lt===i.HALF_FLOAT&&(At=i.RG16F),lt===i.UNSIGNED_BYTE&&(At=i.RG8)),C===i.RG_INTEGER&&(lt===i.UNSIGNED_BYTE&&(At=i.RG8UI),lt===i.UNSIGNED_SHORT&&(At=i.RG16UI),lt===i.UNSIGNED_INT&&(At=i.RG32UI),lt===i.BYTE&&(At=i.RG8I),lt===i.SHORT&&(At=i.RG16I),lt===i.INT&&(At=i.RG32I)),C===i.RGB_INTEGER&&(lt===i.UNSIGNED_BYTE&&(At=i.RGB8UI),lt===i.UNSIGNED_SHORT&&(At=i.RGB16UI),lt===i.UNSIGNED_INT&&(At=i.RGB32UI),lt===i.BYTE&&(At=i.RGB8I),lt===i.SHORT&&(At=i.RGB16I),lt===i.INT&&(At=i.RGB32I)),C===i.RGBA_INTEGER&&(lt===i.UNSIGNED_BYTE&&(At=i.RGBA8UI),lt===i.UNSIGNED_SHORT&&(At=i.RGBA16UI),lt===i.UNSIGNED_INT&&(At=i.RGBA32UI),lt===i.BYTE&&(At=i.RGBA8I),lt===i.SHORT&&(At=i.RGBA16I),lt===i.INT&&(At=i.RGBA32I)),C===i.RGB&&lt===i.UNSIGNED_INT_5_9_9_9_REV&&(At=i.RGB9_E5),C===i.RGBA){const Jt=bt?wa:De.getTransfer(ht);lt===i.FLOAT&&(At=i.RGBA32F),lt===i.HALF_FLOAT&&(At=i.RGBA16F),lt===i.UNSIGNED_BYTE&&(At=Jt===Ue?i.SRGB8_ALPHA8:i.RGBA8),lt===i.UNSIGNED_SHORT_4_4_4_4&&(At=i.RGBA4),lt===i.UNSIGNED_SHORT_5_5_5_1&&(At=i.RGB5_A1)}return(At===i.R16F||At===i.R32F||At===i.RG16F||At===i.RG32F||At===i.RGBA16F||At===i.RGBA32F)&&t.get("EXT_color_buffer_float"),At}function S(E,C){let lt;return E?C===null||C===vs||C===or?lt=i.DEPTH24_STENCIL8:C===ui?lt=i.DEPTH32F_STENCIL8:C===Wr&&(lt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===vs||C===or?lt=i.DEPTH_COMPONENT24:C===ui?lt=i.DEPTH_COMPONENT32F:C===Wr&&(lt=i.DEPTH_COMPONENT16),lt}function R(E,C){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Dn&&E.minFilter!==Vn?Math.log2(Math.max(C.width,C.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?C.mipmaps.length:1}function P(E){const C=E.target;C.removeEventListener("dispose",P),w(C),C.isVideoTexture&&u.delete(C)}function b(E){const C=E.target;C.removeEventListener("dispose",b),_(C)}function w(E){const C=n.get(E);if(C.__webglInit===void 0)return;const lt=E.source,ht=f.get(lt);if(ht){const bt=ht[C.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&v(E),Object.keys(ht).length===0&&f.delete(lt)}n.remove(E)}function v(E){const C=n.get(E);i.deleteTexture(C.__webglTexture);const lt=E.source,ht=f.get(lt);delete ht[C.__cacheKey],o.memory.textures--}function _(E){const C=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(C.__webglFramebuffer[ht]))for(let bt=0;bt<C.__webglFramebuffer[ht].length;bt++)i.deleteFramebuffer(C.__webglFramebuffer[ht][bt]);else i.deleteFramebuffer(C.__webglFramebuffer[ht]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[ht])}else{if(Array.isArray(C.__webglFramebuffer))for(let ht=0;ht<C.__webglFramebuffer.length;ht++)i.deleteFramebuffer(C.__webglFramebuffer[ht]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ht=0;ht<C.__webglColorRenderbuffer.length;ht++)C.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[ht]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const lt=E.textures;for(let ht=0,bt=lt.length;ht<bt;ht++){const At=n.get(lt[ht]);At.__webglTexture&&(i.deleteTexture(At.__webglTexture),o.memory.textures--),n.remove(lt[ht])}n.remove(E)}let T=0;function z(){T=0}function U(){const E=T;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),T+=1,E}function X(E){const C=[];return C.push(E.wrapS),C.push(E.wrapT),C.push(E.wrapR||0),C.push(E.magFilter),C.push(E.minFilter),C.push(E.anisotropy),C.push(E.internalFormat),C.push(E.format),C.push(E.type),C.push(E.generateMipmaps),C.push(E.premultiplyAlpha),C.push(E.flipY),C.push(E.unpackAlignment),C.push(E.colorSpace),C.join()}function Y(E,C){const lt=n.get(E);if(E.isVideoTexture&&qt(E),E.isRenderTargetTexture===!1&&E.version>0&&lt.__version!==E.version){const ht=E.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(lt,E,C);return}}e.bindTexture(i.TEXTURE_2D,lt.__webglTexture,i.TEXTURE0+C)}function Q(E,C){const lt=n.get(E);if(E.version>0&&lt.__version!==E.version){O(lt,E,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,lt.__webglTexture,i.TEXTURE0+C)}function xt(E,C){const lt=n.get(E);if(E.version>0&&lt.__version!==E.version){O(lt,E,C);return}e.bindTexture(i.TEXTURE_3D,lt.__webglTexture,i.TEXTURE0+C)}function ot(E,C){const lt=n.get(E);if(E.version>0&&lt.__version!==E.version){J(lt,E,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture,i.TEXTURE0+C)}const k={[ua]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[al]:i.MIRRORED_REPEAT},D={[Dn]:i.NEAREST,[J0]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[ms]:i.LINEAR_MIPMAP_LINEAR},q={[nm]:i.NEVER,[cm]:i.ALWAYS,[im]:i.LESS,[Td]:i.LEQUAL,[sm]:i.EQUAL,[am]:i.GEQUAL,[rm]:i.GREATER,[om]:i.NOTEQUAL};function K(E,C){if(C.type===ui&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Vn||C.magFilter===ka||C.magFilter===oo||C.magFilter===ms||C.minFilter===Vn||C.minFilter===ka||C.minFilter===oo||C.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,k[C.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,k[C.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,k[C.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,D[C.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,D[C.minFilter]),C.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,q[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Dn||C.minFilter!==oo&&C.minFilter!==ms||C.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const lt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function nt(E,C){let lt=!1;E.__webglInit===void 0&&(E.__webglInit=!0,C.addEventListener("dispose",P));const ht=C.source;let bt=f.get(ht);bt===void 0&&(bt={},f.set(ht,bt));const At=X(C);if(At!==E.__cacheKey){bt[At]===void 0&&(bt[At]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,lt=!0),bt[At].usedTimes++;const Jt=bt[E.__cacheKey];Jt!==void 0&&(bt[E.__cacheKey].usedTimes--,Jt.usedTimes===0&&v(C)),E.__cacheKey=At,E.__webglTexture=bt[At].texture}return lt}function O(E,C,lt){let ht=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ht=i.TEXTURE_3D);const bt=nt(E,C),At=C.source;e.bindTexture(ht,E.__webglTexture,i.TEXTURE0+lt);const Jt=n.get(At);if(At.version!==Jt.__version||bt===!0){e.activeTexture(i.TEXTURE0+lt);const Vt=De.getPrimaries(De.workingColorSpace),Ht=C.colorSpace===yi?null:De.getPrimaries(C.colorSpace),de=C.colorSpace===yi||Vt===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ot=x(C.image,!1,s.maxTextureSize);Ot=se(C,Ot);const Qt=r.convert(C.format,C.colorSpace),he=r.convert(C.type);let ne=M(C.internalFormat,Qt,he,C.colorSpace,C.isVideoTexture);K(ht,C);let Wt;const xe=C.mipmaps,pe=C.isVideoTexture!==!0,Me=Jt.__version===void 0||bt===!0,ct=At.dataReady,Ct=R(C,Ot);if(C.isDepthTexture)ne=S(C.format===ar,C.type),Me&&(pe?e.texStorage2D(i.TEXTURE_2D,1,ne,Ot.width,Ot.height):e.texImage2D(i.TEXTURE_2D,0,ne,Ot.width,Ot.height,0,Qt,he,null));else if(C.isDataTexture)if(xe.length>0){pe&&Me&&e.texStorage2D(i.TEXTURE_2D,Ct,ne,xe[0].width,xe[0].height);for(let _t=0,Et=xe.length;_t<Et;_t++)Wt=xe[_t],pe?ct&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Wt.width,Wt.height,Qt,he,Wt.data):e.texImage2D(i.TEXTURE_2D,_t,ne,Wt.width,Wt.height,0,Qt,he,Wt.data);C.generateMipmaps=!1}else pe?(Me&&e.texStorage2D(i.TEXTURE_2D,Ct,ne,Ot.width,Ot.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ot.width,Ot.height,Qt,he,Ot.data)):e.texImage2D(i.TEXTURE_2D,0,ne,Ot.width,Ot.height,0,Qt,he,Ot.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){pe&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,ne,xe[0].width,xe[0].height,Ot.depth);for(let _t=0,Et=xe.length;_t<Et;_t++)if(Wt=xe[_t],C.format!==Wn)if(Qt!==null)if(pe){if(ct)if(C.layerUpdates.size>0){const Ut=Df(Wt.width,Wt.height,C.format,C.type);for(const st of C.layerUpdates){const St=Wt.data.subarray(st*Ut/Wt.data.BYTES_PER_ELEMENT,(st+1)*Ut/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,st,Wt.width,Wt.height,1,Qt,St)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,Wt.width,Wt.height,Ot.depth,Qt,Wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,ne,Wt.width,Wt.height,Ot.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,Wt.width,Wt.height,Ot.depth,Qt,he,Wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,ne,Wt.width,Wt.height,Ot.depth,0,Qt,he,Wt.data)}else{pe&&Me&&e.texStorage2D(i.TEXTURE_2D,Ct,ne,xe[0].width,xe[0].height);for(let _t=0,Et=xe.length;_t<Et;_t++)Wt=xe[_t],C.format!==Wn?Qt!==null?pe?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,Wt.width,Wt.height,Qt,Wt.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,ne,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?ct&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Wt.width,Wt.height,Qt,he,Wt.data):e.texImage2D(i.TEXTURE_2D,_t,ne,Wt.width,Wt.height,0,Qt,he,Wt.data)}else if(C.isDataArrayTexture)if(pe){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,ne,Ot.width,Ot.height,Ot.depth),ct)if(C.layerUpdates.size>0){const _t=Df(Ot.width,Ot.height,C.format,C.type);for(const Et of C.layerUpdates){const Ut=Ot.data.subarray(Et*_t/Ot.data.BYTES_PER_ELEMENT,(Et+1)*_t/Ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,Ot.width,Ot.height,1,Qt,he,Ut)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,Qt,he,Ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,Ot.width,Ot.height,Ot.depth,0,Qt,he,Ot.data);else if(C.isData3DTexture)pe?(Me&&e.texStorage3D(i.TEXTURE_3D,Ct,ne,Ot.width,Ot.height,Ot.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,Qt,he,Ot.data)):e.texImage3D(i.TEXTURE_3D,0,ne,Ot.width,Ot.height,Ot.depth,0,Qt,he,Ot.data);else if(C.isFramebufferTexture){if(Me)if(pe)e.texStorage2D(i.TEXTURE_2D,Ct,ne,Ot.width,Ot.height);else{let _t=Ot.width,Et=Ot.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,ne,_t,Et,0,Qt,he,null),_t>>=1,Et>>=1}}else if(xe.length>0){if(pe&&Me){const _t=Yt(xe[0]);e.texStorage2D(i.TEXTURE_2D,Ct,ne,_t.width,_t.height)}for(let _t=0,Et=xe.length;_t<Et;_t++)Wt=xe[_t],pe?ct&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,Qt,he,Wt):e.texImage2D(i.TEXTURE_2D,_t,ne,Qt,he,Wt);C.generateMipmaps=!1}else if(pe){if(Me){const _t=Yt(Ot);e.texStorage2D(i.TEXTURE_2D,Ct,ne,_t.width,_t.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Qt,he,Ot)}else e.texImage2D(i.TEXTURE_2D,0,ne,Qt,he,Ot);m(C)&&p(ht),Jt.__version=At.version,C.onUpdate&&C.onUpdate(C)}E.__version=C.version}function J(E,C,lt){if(C.image.length!==6)return;const ht=nt(E,C),bt=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+lt);const At=n.get(bt);if(bt.version!==At.__version||ht===!0){e.activeTexture(i.TEXTURE0+lt);const Jt=De.getPrimaries(De.workingColorSpace),Vt=C.colorSpace===yi?null:De.getPrimaries(C.colorSpace),Ht=C.colorSpace===yi||Jt===Vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const de=C.isCompressedTexture||C.image[0].isCompressedTexture,Ot=C.image[0]&&C.image[0].isDataTexture,Qt=[];for(let Et=0;Et<6;Et++)!de&&!Ot?Qt[Et]=x(C.image[Et],!0,s.maxCubemapSize):Qt[Et]=Ot?C.image[Et].image:C.image[Et],Qt[Et]=se(C,Qt[Et]);const he=Qt[0],ne=r.convert(C.format,C.colorSpace),Wt=r.convert(C.type),xe=M(C.internalFormat,ne,Wt,C.colorSpace),pe=C.isVideoTexture!==!0,Me=At.__version===void 0||ht===!0,ct=bt.dataReady;let Ct=R(C,he);K(i.TEXTURE_CUBE_MAP,C);let _t;if(de){pe&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,xe,he.width,he.height);for(let Et=0;Et<6;Et++){_t=Qt[Et].mipmaps;for(let Ut=0;Ut<_t.length;Ut++){const st=_t[Ut];C.format!==Wn?ne!==null?pe?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ut,0,0,st.width,st.height,ne,st.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ut,xe,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ut,0,0,st.width,st.height,ne,Wt,st.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ut,xe,st.width,st.height,0,ne,Wt,st.data)}}}else{if(_t=C.mipmaps,pe&&Me){_t.length>0&&Ct++;const Et=Yt(Qt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,xe,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Ot){pe?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Qt[Et].width,Qt[Et].height,ne,Wt,Qt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,xe,Qt[Et].width,Qt[Et].height,0,ne,Wt,Qt[Et].data);for(let Ut=0;Ut<_t.length;Ut++){const St=_t[Ut].image[Et].image;pe?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ut+1,0,0,St.width,St.height,ne,Wt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ut+1,xe,St.width,St.height,0,ne,Wt,St.data)}}else{pe?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ne,Wt,Qt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,xe,ne,Wt,Qt[Et]);for(let Ut=0;Ut<_t.length;Ut++){const st=_t[Ut];pe?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ut+1,0,0,ne,Wt,st.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ut+1,xe,ne,Wt,st.image[Et])}}}m(C)&&p(i.TEXTURE_CUBE_MAP),At.__version=bt.version,C.onUpdate&&C.onUpdate(C)}E.__version=C.version}function ut(E,C,lt,ht,bt,At){const Jt=r.convert(lt.format,lt.colorSpace),Vt=r.convert(lt.type),Ht=M(lt.internalFormat,Jt,Vt,lt.colorSpace),de=n.get(C),Ot=n.get(lt);if(Ot.__renderTarget=C,!de.__hasExternalTextures){const Qt=Math.max(1,C.width>>At),he=Math.max(1,C.height>>At);bt===i.TEXTURE_3D||bt===i.TEXTURE_2D_ARRAY?e.texImage3D(bt,At,Ht,Qt,he,C.depth,0,Jt,Vt,null):e.texImage2D(bt,At,Ht,Qt,he,0,Jt,Vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),ie(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,bt,Ot.__webglTexture,0,jt(C)):(bt===i.TEXTURE_2D||bt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,bt,Ot.__webglTexture,At),e.bindFramebuffer(i.FRAMEBUFFER,null)}function B(E,C,lt){if(i.bindRenderbuffer(i.RENDERBUFFER,E),C.depthBuffer){const ht=C.depthTexture,bt=ht&&ht.isDepthTexture?ht.type:null,At=S(C.stencilBuffer,bt),Jt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Vt=jt(C);ie(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,At,C.width,C.height):lt?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,At,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,At,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Jt,i.RENDERBUFFER,E)}else{const ht=C.textures;for(let bt=0;bt<ht.length;bt++){const At=ht[bt],Jt=r.convert(At.format,At.colorSpace),Vt=r.convert(At.type),Ht=M(At.internalFormat,Jt,Vt,At.colorSpace),de=jt(C);lt&&ie(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Ht,C.width,C.height):ie(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Ht,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Ht,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function it(E,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=n.get(C.depthTexture);ht.__renderTarget=C,(!ht.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Y(C.depthTexture,0);const bt=ht.__webglTexture,At=jt(C);if(C.depthTexture.format===Js)ie(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0);else if(C.depthTexture.format===ar)ie(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0,At):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function ft(E){const C=n.get(E),lt=E.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==E.depthTexture){const ht=E.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ht){const bt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ht.removeEventListener("dispose",bt)};ht.addEventListener("dispose",bt),C.__depthDisposeCallback=bt}C.__boundDepthTexture=ht}if(E.depthTexture&&!C.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");it(C.__webglFramebuffer,E)}else if(lt){C.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ht]),C.__webglDepthbuffer[ht]===void 0)C.__webglDepthbuffer[ht]=i.createRenderbuffer(),B(C.__webglDepthbuffer[ht],E,!1);else{const bt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=C.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,At)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),B(C.__webglDepthbuffer,E,!1);else{const ht=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(E,C,lt){const ht=n.get(E);C!==void 0&&ut(ht.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),lt!==void 0&&ft(E)}function Tt(E){const C=E.texture,lt=n.get(E),ht=n.get(C);E.addEventListener("dispose",b);const bt=E.textures,At=E.isWebGLCubeRenderTarget===!0,Jt=bt.length>1;if(Jt||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=C.version,o.memory.textures++),At){lt.__webglFramebuffer=[];for(let Vt=0;Vt<6;Vt++)if(C.mipmaps&&C.mipmaps.length>0){lt.__webglFramebuffer[Vt]=[];for(let Ht=0;Ht<C.mipmaps.length;Ht++)lt.__webglFramebuffer[Vt][Ht]=i.createFramebuffer()}else lt.__webglFramebuffer[Vt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){lt.__webglFramebuffer=[];for(let Vt=0;Vt<C.mipmaps.length;Vt++)lt.__webglFramebuffer[Vt]=i.createFramebuffer()}else lt.__webglFramebuffer=i.createFramebuffer();if(Jt)for(let Vt=0,Ht=bt.length;Vt<Ht;Vt++){const de=n.get(bt[Vt]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&ie(E)===!1){lt.__webglMultisampledFramebuffer=i.createFramebuffer(),lt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let Vt=0;Vt<bt.length;Vt++){const Ht=bt[Vt];lt.__webglColorRenderbuffer[Vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,lt.__webglColorRenderbuffer[Vt]);const de=r.convert(Ht.format,Ht.colorSpace),Ot=r.convert(Ht.type),Qt=M(Ht.internalFormat,de,Ot,Ht.colorSpace,E.isXRRenderTarget===!0),he=jt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Qt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,lt.__webglColorRenderbuffer[Vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(lt.__webglDepthRenderbuffer=i.createRenderbuffer(),B(lt.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(At){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),K(i.TEXTURE_CUBE_MAP,C);for(let Vt=0;Vt<6;Vt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ht=0;Ht<C.mipmaps.length;Ht++)ut(lt.__webglFramebuffer[Vt][Ht],E,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,Ht);else ut(lt.__webglFramebuffer[Vt],E,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0);m(C)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Jt){for(let Vt=0,Ht=bt.length;Vt<Ht;Vt++){const de=bt[Vt],Ot=n.get(de);e.bindTexture(i.TEXTURE_2D,Ot.__webglTexture),K(i.TEXTURE_2D,de),ut(lt.__webglFramebuffer,E,de,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,0),m(de)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Vt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Vt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Vt,ht.__webglTexture),K(Vt,C),C.mipmaps&&C.mipmaps.length>0)for(let Ht=0;Ht<C.mipmaps.length;Ht++)ut(lt.__webglFramebuffer[Ht],E,C,i.COLOR_ATTACHMENT0,Vt,Ht);else ut(lt.__webglFramebuffer,E,C,i.COLOR_ATTACHMENT0,Vt,0);m(C)&&p(Vt),e.unbindTexture()}E.depthBuffer&&ft(E)}function tt(E){const C=E.textures;for(let lt=0,ht=C.length;lt<ht;lt++){const bt=C[lt];if(m(bt)){const At=y(E),Jt=n.get(bt).__webglTexture;e.bindTexture(At,Jt),p(At),e.unbindTexture()}}}const pt=[],H=[];function rt(E){if(E.samples>0){if(ie(E)===!1){const C=E.textures,lt=E.width,ht=E.height;let bt=i.COLOR_BUFFER_BIT;const At=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Jt=n.get(E),Vt=C.length>1;if(Vt)for(let Ht=0;Ht<C.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let Ht=0;Ht<C.length;Ht++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(bt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(bt|=i.STENCIL_BUFFER_BIT)),Vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[Ht]);const de=n.get(C[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,lt,ht,0,0,lt,ht,bt,i.NEAREST),c===!0&&(pt.length=0,H.length=0,pt.push(i.COLOR_ATTACHMENT0+Ht),E.depthBuffer&&E.resolveDepthBuffer===!1&&(pt.push(At),H.push(At),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Vt)for(let Ht=0;Ht<C.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[Ht]);const de=n.get(C[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,de,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const C=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function jt(E){return Math.min(s.maxSamples,E.samples)}function ie(E){const C=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function qt(E){const C=o.render.frame;u.get(E)!==C&&(u.set(E,C),E.update())}function se(E,C){const lt=E.colorSpace,ht=E.format,bt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||lt!==fr&&lt!==yi&&(De.getTransfer(lt)===Ue?(ht!==Wn||bt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),C}function Yt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=Q,this.setTexture3D=xt,this.setTextureCube=ot,this.rebindTextures=gt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ie}function C_(i,t){function e(n,s=yi){let r;const o=De.getTransfer(s);if(n===fi)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_d)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xd)return i.BYTE;if(n===vd)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===ql)return i.INT;if(n===vs)return i.UNSIGNED_INT;if(n===ui)return i.FLOAT;if(n===$r)return i.HALF_FLOAT;if(n===Md)return i.ALPHA;if(n===yd)return i.RGB;if(n===Wn)return i.RGBA;if(n===Sd)return i.LUMINANCE;if(n===wd)return i.LUMINANCE_ALPHA;if(n===Js)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===bd)return i.RG;if(n===Zl)return i.RG_INTEGER;if(n===Jl)return i.RGBA_INTEGER;if(n===Zo||n===Jo||n===Qo||n===ta)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===ll||n===ul||n===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===dl||n===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===dl)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===xl||n===vl||n===_l||n===Ml||n===yl||n===Sl||n===wl||n===bl||n===El||n===Tl||n===Al||n===Cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ea||n===Rl||n===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ea)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ed||n===Ll||n===Il||n===Dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class R_ extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gs extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P_={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const L_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class D_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:L_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends hr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const x=new D_,m=e.getContextAttributes();let p=null,y=null;const M=[],S=[],R=new ce;let P=null;const b=new Cn;b.viewport=new Ge;const w=new Cn;w.viewport=new Ge;const v=[b,w],_=new R_;let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let J=M[O];return J===void 0&&(J=new hc,M[O]=J),J.getTargetRaySpace()},this.getControllerGrip=function(O){let J=M[O];return J===void 0&&(J=new hc,M[O]=J),J.getGripSpace()},this.getHand=function(O){let J=M[O];return J===void 0&&(J=new hc,M[O]=J),J.getHandSpace()};function U(O){const J=S.indexOf(O.inputSource);if(J===-1)return;const ut=M[J];ut!==void 0&&(ut.update(O.inputSource,O.frame,l||o),ut.dispatchEvent({type:O.type,data:O.inputSource}))}function X(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Y);for(let O=0;O<M.length;O++){const J=S[O];J!==null&&(S[O]=null,M[O].disconnect(J))}T=null,z=null,x.reset(),t.setRenderTarget(p),h=null,f=null,d=null,s=null,y=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new _s(h.framebufferWidth,h.framebufferHeight,{format:Wn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ut=null,B=null;m.depth&&(B=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?ar:Js,ut=m.stencil?or:vs);const it={colorFormat:e.RGBA8,depthFormat:B,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(it),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new _s(f.textureWidth,f.textureHeight,{format:Wn,type:fi,depthTexture:new Bd(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(O){for(let J=0;J<O.removed.length;J++){const ut=O.removed[J],B=S.indexOf(ut);B>=0&&(S[B]=null,M[B].disconnect(ut))}for(let J=0;J<O.added.length;J++){const ut=O.added[J];let B=S.indexOf(ut);if(B===-1){for(let ft=0;ft<M.length;ft++)if(ft>=S.length){S.push(ut),B=ft;break}else if(S[ft]===null){S[ft]=ut,B=ft;break}if(B===-1)break}const it=M[B];it&&it.connect(ut)}}const Q=new et,xt=new et;function ot(O,J,ut){Q.setFromMatrixPosition(J.matrixWorld),xt.setFromMatrixPosition(ut.matrixWorld);const B=Q.distanceTo(xt),it=J.projectionMatrix.elements,ft=ut.projectionMatrix.elements,gt=it[14]/(it[10]-1),Tt=it[14]/(it[10]+1),tt=(it[9]+1)/it[5],pt=(it[9]-1)/it[5],H=(it[8]-1)/it[0],rt=(ft[8]+1)/ft[0],jt=gt*H,ie=gt*rt,qt=B/(-H+rt),se=qt*-H;if(J.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(se),O.translateZ(qt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),it[10]===-1)O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Yt=gt+qt,E=Tt+qt,C=jt-se,lt=ie+(B-se),ht=tt*Tt/E*Yt,bt=pt*Tt/E*Yt;O.projectionMatrix.makePerspective(C,lt,ht,bt,Yt,E),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function k(O,J){J===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(J.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let J=O.near,ut=O.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),_.near=w.near=b.near=J,_.far=w.far=b.far=ut,(T!==_.near||z!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,z=_.far),b.layers.mask=O.layers.mask|2,w.layers.mask=O.layers.mask|4,_.layers.mask=b.layers.mask|w.layers.mask;const B=O.parent,it=_.cameras;k(_,B);for(let ft=0;ft<it.length;ft++)k(it[ft],B);it.length===2?ot(_,b,w):_.projectionMatrix.copy(b.projectionMatrix),D(O,_,B)};function D(O,J,ut){ut===null?O.matrix.copy(J.matrixWorld):(O.matrix.copy(ut.matrixWorld),O.matrix.invert(),O.matrix.multiply(J.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Xr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(O){c=O,f!==null&&(f.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let q=null;function K(O,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const ut=u.views;h!==null&&(t.setRenderTargetFramebuffer(y,h.framebuffer),t.setRenderTarget(y));let B=!1;ut.length!==_.cameras.length&&(_.cameras.length=0,B=!0);for(let ft=0;ft<ut.length;ft++){const gt=ut[ft];let Tt=null;if(h!==null)Tt=h.getViewport(gt);else{const pt=d.getViewSubImage(f,gt);Tt=pt.viewport,ft===0&&(t.setRenderTargetTextures(y,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(y))}let tt=v[ft];tt===void 0&&(tt=new Cn,tt.layers.enable(ft),tt.viewport=new Ge,v[ft]=tt),tt.matrix.fromArray(gt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(gt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ft===0&&(_.matrix.copy(tt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),B===!0&&_.cameras.push(tt)}const it=s.enabledFeatures;if(it&&it.includes("depth-sensing")){const ft=d.getDepthInformation(ut[0]);ft&&ft.isValid&&ft.texture&&x.init(t,ft,s.renderState)}}for(let ut=0;ut<M.length;ut++){const B=S[ut],it=M[ut];B!==null&&it!==void 0&&it.update(B,J,l||o)}q&&q(O,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const nt=new Od;nt.setAnimationLoop(K),this.setAnimationLoop=function(O){q=O},this.dispose=function(){}}}const is=new zn,N_=new ze;function U_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,S=y.envMapRotation;M&&(m.envMap.value=M,is.copy(S),is.x*=-1,is.y*=-1,is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(is)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const S=M.program;n.uniformBlockBinding(y,S)}function l(y,M){let S=s[y.id];S===void 0&&(g(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(y,R);const P=t.render.frame;r[y.id]!==P&&(f(y),r[y.id]=P)}function u(y){const M=d();y.__bindingPointIndex=M;const S=i.createBuffer(),R=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=s[y.id],S=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,b=S.length;P<b;P++){const w=Array.isArray(S[P])?S[P]:[S[P]];for(let v=0,_=w.length;v<_;v++){const T=w[v];if(h(T,P,v,R)===!0){const z=T.__offset,U=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let Y=0;Y<U.length;Y++){const Q=U[Y],xt=x(Q);typeof Q=="number"||typeof Q=="boolean"?(T.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,z+X,T.__data)):Q.isMatrix3?(T.__data[0]=Q.elements[0],T.__data[1]=Q.elements[1],T.__data[2]=Q.elements[2],T.__data[3]=0,T.__data[4]=Q.elements[3],T.__data[5]=Q.elements[4],T.__data[6]=Q.elements[5],T.__data[7]=0,T.__data[8]=Q.elements[6],T.__data[9]=Q.elements[7],T.__data[10]=Q.elements[8],T.__data[11]=0):(Q.toArray(T.__data,X),X+=xt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,M,S,R){const P=y.value,b=M+"_"+S;if(R[b]===void 0)return typeof P=="number"||typeof P=="boolean"?R[b]=P:R[b]=P.clone(),!0;{const w=R[b];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return R[b]=P,!0}else if(w.equals(P)===!1)return w.copy(P),!0}return!1}function g(y){const M=y.uniforms;let S=0;const R=16;for(let b=0,w=M.length;b<w;b++){const v=Array.isArray(M[b])?M[b]:[M[b]];for(let _=0,T=v.length;_<T;_++){const z=v[_],U=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Y=U.length;X<Y;X++){const Q=U[X],xt=x(Q),ot=S%R,k=ot%xt.boundary,D=ot+k;S+=k,D!==0&&R-D<xt.storage&&(S+=R-D),z.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=xt.storage}}}const P=S%R;return P>0&&(S+=R-P),y.__size=S,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class O_{constructor(t={}){const{canvas:e=Em(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Vi,this.toneMappingExposure=1;const S=this;let R=!1,P=0,b=0,w=null,v=-1,_=null;const T=new Ge,z=new Ge;let U=null;const X=new me(0);let Y=0,Q=e.width,xt=e.height,ot=1,k=null,D=null;const q=new Ge(0,0,Q,xt),K=new Ge(0,0,Q,xt);let nt=!1;const O=new tu;let J=!1,ut=!1;const B=new ze,it=new ze,ft=new et,gt=new Ge,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function pt(){return w===null?ot:1}let H=n;function rt(I,L){return e.getContext(I,L)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wl}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",st,!1),H===null){const L="webgl2";if(H=rt(L,I),H===null)throw rt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let jt,ie,qt,se,Yt,E,C,lt,ht,bt,At,Jt,Vt,Ht,de,Ot,Qt,he,ne,Wt,xe,pe,Me,ct;function Ct(){jt=new Vv(H),jt.init(),pe=new C_(H,jt),ie=new Fv(H,jt,t,pe),qt=new E_(H,jt),ie.reverseDepthBuffer&&f&&qt.buffers.depth.setReversed(!0),se=new qv(H),Yt=new u_,E=new A_(H,jt,qt,Yt,ie,pe,se),C=new kv(S),lt=new Gv(S),ht=new Qm(H),Me=new Nv(H,ht),bt=new Wv(H,ht,se,Me),At=new Kv(H,bt,ht,se),ne=new Yv(H,ie,E),Ot=new Ov(Yt),Jt=new l_(S,C,lt,jt,ie,Me,Ot),Vt=new U_(S,Yt),Ht=new h_,de=new v_(jt),he=new zv(S,C,lt,qt,At,h,c),Qt=new w_(S,At,ie),ct=new F_(H,se,ie,qt),Wt=new Uv(H,jt,se),xe=new Xv(H,jt,se),se.programs=Jt.programs,S.capabilities=ie,S.extensions=jt,S.properties=Yt,S.renderLists=Ht,S.shadowMap=Qt,S.state=qt,S.info=se}Ct();const _t=new z_(S,H);this.xr=_t,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const I=jt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=jt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(I){I!==void 0&&(ot=I,this.setSize(Q,xt,!1))},this.getSize=function(I){return I.set(Q,xt)},this.setSize=function(I,L,F=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=I,xt=L,e.width=Math.floor(I*ot),e.height=Math.floor(L*ot),F===!0&&(e.style.width=I+"px",e.style.height=L+"px"),this.setViewport(0,0,I,L)},this.getDrawingBufferSize=function(I){return I.set(Q*ot,xt*ot).floor()},this.setDrawingBufferSize=function(I,L,F){Q=I,xt=L,ot=F,e.width=Math.floor(I*F),e.height=Math.floor(L*F),this.setViewport(0,0,I,L)},this.getCurrentViewport=function(I){return I.copy(T)},this.getViewport=function(I){return I.copy(q)},this.setViewport=function(I,L,F,$){I.isVector4?q.set(I.x,I.y,I.z,I.w):q.set(I,L,F,$),qt.viewport(T.copy(q).multiplyScalar(ot).round())},this.getScissor=function(I){return I.copy(K)},this.setScissor=function(I,L,F,$){I.isVector4?K.set(I.x,I.y,I.z,I.w):K.set(I,L,F,$),qt.scissor(z.copy(K).multiplyScalar(ot).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(I){qt.setScissorTest(nt=I)},this.setOpaqueSort=function(I){k=I},this.setTransparentSort=function(I){D=I},this.getClearColor=function(I){return I.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(I=!0,L=!0,F=!0){let $=0;if(I){let G=!1;if(w!==null){const vt=w.texture.format;G=vt===Jl||vt===Zl||vt===jl}if(G){const vt=w.texture.type,yt=vt===fi||vt===vs||vt===Wr||vt===or||vt===Yl||vt===Kl,Ft=he.getClearColor(),Gt=he.getClearAlpha(),ae=Ft.r,at=Ft.g,dt=Ft.b;yt?(g[0]=ae,g[1]=at,g[2]=dt,g[3]=Gt,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=ae,x[1]=at,x[2]=dt,x[3]=Gt,H.clearBufferiv(H.COLOR,0,x))}else $|=H.COLOR_BUFFER_BIT}L&&($|=H.DEPTH_BUFFER_BIT),F&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Ht.dispose(),de.dispose(),Yt.dispose(),C.dispose(),lt.dispose(),At.dispose(),Me.dispose(),ct.dispose(),Jt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",ye),_t.removeEventListener("sessionend",Ee),V.stop()};function Et(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const I=se.autoReset,L=Qt.enabled,F=Qt.autoUpdate,$=Qt.needsUpdate,G=Qt.type;Ct(),se.autoReset=I,Qt.enabled=L,Qt.autoUpdate=F,Qt.needsUpdate=$,Qt.type=G}function st(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function St(I){const L=I.target;L.removeEventListener("dispose",St),Rt(L)}function Rt(I){It(I),Yt.remove(I)}function It(I){const L=Yt.get(I).programs;L!==void 0&&(L.forEach(function(F){Jt.releaseProgram(F)}),I.isShaderMaterial&&Jt.releaseShaderCache(I))}this.renderBufferDirect=function(I,L,F,$,G,vt){L===null&&(L=Tt);const yt=G.isMesh&&G.matrixWorld.determinant()<0,Ft=Xt(I,L,F,$,G);qt.setMaterial($,yt);let Gt=F.index,ae=1;if($.wireframe===!0){if(Gt=bt.getWireframeAttribute(F),Gt===void 0)return;ae=2}const at=F.drawRange,dt=F.attributes.position;let wt=at.start*ae,Dt=(at.start+at.count)*ae;vt!==null&&(wt=Math.max(wt,vt.start*ae),Dt=Math.min(Dt,(vt.start+vt.count)*ae)),Gt!==null?(wt=Math.max(wt,0),Dt=Math.min(Dt,Gt.count)):dt!=null&&(wt=Math.max(wt,0),Dt=Math.min(Dt,dt.count));const Nt=Dt-wt;if(Nt<0||Nt===1/0)return;Me.setup(G,$,Ft,F,Gt);let $t,Zt=Wt;if(Gt!==null&&($t=ht.get(Gt),Zt=xe,Zt.setIndex($t)),G.isMesh)$.wireframe===!0?(qt.setLineWidth($.wireframeLinewidth*pt()),Zt.setMode(H.LINES)):Zt.setMode(H.TRIANGLES);else if(G.isLine){let kt=$.linewidth;kt===void 0&&(kt=1),qt.setLineWidth(kt*pt()),G.isLineSegments?Zt.setMode(H.LINES):G.isLineLoop?Zt.setMode(H.LINE_LOOP):Zt.setMode(H.LINE_STRIP)}else G.isPoints?Zt.setMode(H.POINTS):G.isSprite&&Zt.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Zt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const kt=G._multiDrawStarts,Se=G._multiDrawCounts,ue=G._multiDrawCount,Te=Gt?ht.get(Gt).bytesPerElement:1,Lt=Yt.get($).currentProgram.getUniforms();for(let Ae=0;Ae<ue;Ae++)Lt.setValue(H,"_gl_DrawID",Ae),Zt.render(kt[Ae]/Te,Se[Ae])}else if(G.isInstancedMesh)Zt.renderInstances(wt,Nt,G.count);else if(F.isInstancedBufferGeometry){const kt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Se=Math.min(F.instanceCount,kt);Zt.renderInstances(wt,Nt,Se)}else Zt.render(wt,Nt)};function Bt(I,L,F){I.transparent===!0&&I.side===Pn&&I.forceSinglePass===!1?(I.side=vn,I.needsUpdate=!0,mt(I,L,F),I.side=qi,I.needsUpdate=!0,mt(I,L,F),I.side=Pn):mt(I,L,F)}this.compile=function(I,L,F=null){F===null&&(F=I),p=de.get(F),p.init(L),M.push(p),F.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),I!==F&&I.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const $=new Set;return I.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const vt=G.material;if(vt)if(Array.isArray(vt))for(let yt=0;yt<vt.length;yt++){const Ft=vt[yt];Bt(Ft,F,G),$.add(Ft)}else Bt(vt,F,G),$.add(vt)}),M.pop(),p=null,$},this.compileAsync=function(I,L,F=null){const $=this.compile(I,L,F);return new Promise(G=>{function vt(){if($.forEach(function(yt){Yt.get(yt).currentProgram.isReady()&&$.delete(yt)}),$.size===0){G(I);return}setTimeout(vt,10)}jt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let le=null;function te(I){le&&le(I)}function ye(){V.stop()}function Ee(){V.start()}const V=new Od;V.setAnimationLoop(te),typeof self<"u"&&V.setContext(self),this.setAnimationLoop=function(I){le=I,_t.setAnimationLoop(I),I===null?V.stop():V.start()},_t.addEventListener("sessionstart",ye),_t.addEventListener("sessionend",Ee),this.render=function(I,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(L),L=_t.getCamera()),I.isScene===!0&&I.onBeforeRender(S,I,L,w),p=de.get(I,M.length),p.init(L),M.push(p),it.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),O.setFromProjectionMatrix(it),ut=this.localClippingEnabled,J=Ot.init(this.clippingPlanes,ut),m=Ht.get(I,y.length),m.init(),y.push(m),_t.enabled===!0&&_t.isPresenting===!0){const vt=S.xr.getDepthSensingMesh();vt!==null&&A(vt,L,-1/0,S.sortObjects)}A(I,L,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(k,D),tt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,tt&&he.addToRenderList(m,I),this.info.render.frame++,J===!0&&Ot.beginShadows();const F=p.state.shadowsArray;Qt.render(F,I,L),J===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,G=m.transmissive;if(p.setupLights(),L.isArrayCamera){const vt=L.cameras;if(G.length>0)for(let yt=0,Ft=vt.length;yt<Ft;yt++){const Gt=vt[yt];W($,G,I,Gt)}tt&&he.render(I);for(let yt=0,Ft=vt.length;yt<Ft;yt++){const Gt=vt[yt];N(m,I,Gt,Gt.viewport)}}else G.length>0&&W($,G,I,L),tt&&he.render(I),N(m,I,L);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(S,I,L),Me.resetDefaultState(),v=-1,_=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&Ot.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function A(I,L,F,$){if(I.visible===!1)return;if(I.layers.test(L.layers)){if(I.isGroup)F=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(L);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||O.intersectsSprite(I)){$&&gt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(it);const yt=At.update(I),Ft=I.material;Ft.visible&&m.push(I,yt,Ft,F,gt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||O.intersectsObject(I))){const yt=At.update(I),Ft=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),gt.copy(I.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),gt.copy(yt.boundingSphere.center)),gt.applyMatrix4(I.matrixWorld).applyMatrix4(it)),Array.isArray(Ft)){const Gt=yt.groups;for(let ae=0,at=Gt.length;ae<at;ae++){const dt=Gt[ae],wt=Ft[dt.materialIndex];wt&&wt.visible&&m.push(I,yt,wt,F,gt.z,dt)}}else Ft.visible&&m.push(I,yt,Ft,F,gt.z,null)}}const vt=I.children;for(let yt=0,Ft=vt.length;yt<Ft;yt++)A(vt[yt],L,F,$)}function N(I,L,F,$){const G=I.opaque,vt=I.transmissive,yt=I.transparent;p.setupLightsView(F),J===!0&&Ot.setGlobalState(S.clippingPlanes,F),$&&qt.viewport(T.copy($)),G.length>0&&Z(G,L,F),vt.length>0&&Z(vt,L,F),yt.length>0&&Z(yt,L,F),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function W(I,L,F,$){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new _s(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?$r:fi,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const vt=p.state.transmissionRenderTarget[$.id],yt=$.viewport||T;vt.setSize(yt.z,yt.w);const Ft=S.getRenderTarget();S.setRenderTarget(vt),S.getClearColor(X),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),tt&&he.render(F);const Gt=S.toneMapping;S.toneMapping=Vi;const ae=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),J===!0&&Ot.setGlobalState(S.clippingPlanes,$),Z(I,F,$),E.updateMultisampleRenderTarget(vt),E.updateRenderTargetMipmap(vt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let dt=0,wt=L.length;dt<wt;dt++){const Dt=L[dt],Nt=Dt.object,$t=Dt.geometry,Zt=Dt.material,kt=Dt.group;if(Zt.side===Pn&&Nt.layers.test($.layers)){const Se=Zt.side;Zt.side=vn,Zt.needsUpdate=!0,j(Nt,F,$,$t,Zt,kt),Zt.side=Se,Zt.needsUpdate=!0,at=!0}}at===!0&&(E.updateMultisampleRenderTarget(vt),E.updateRenderTargetMipmap(vt))}S.setRenderTarget(Ft),S.setClearColor(X,Y),ae!==void 0&&($.viewport=ae),S.toneMapping=Gt}function Z(I,L,F){const $=L.isScene===!0?L.overrideMaterial:null;for(let G=0,vt=I.length;G<vt;G++){const yt=I[G],Ft=yt.object,Gt=yt.geometry,ae=$===null?yt.material:$,at=yt.group;Ft.layers.test(F.layers)&&j(Ft,L,F,Gt,ae,at)}}function j(I,L,F,$,G,vt){I.onBeforeRender(S,L,F,$,G,vt),I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),G.onBeforeRender(S,L,F,$,I,vt),G.transparent===!0&&G.side===Pn&&G.forceSinglePass===!1?(G.side=vn,G.needsUpdate=!0,S.renderBufferDirect(F,L,$,G,I,vt),G.side=qi,G.needsUpdate=!0,S.renderBufferDirect(F,L,$,G,I,vt),G.side=Pn):S.renderBufferDirect(F,L,$,G,I,vt),I.onAfterRender(S,L,F,$,G,vt)}function mt(I,L,F){L.isScene!==!0&&(L=Tt);const $=Yt.get(I),G=p.state.lights,vt=p.state.shadowsArray,yt=G.state.version,Ft=Jt.getParameters(I,G.state,vt,L,F),Gt=Jt.getProgramCacheKey(Ft);let ae=$.programs;$.environment=I.isMeshStandardMaterial?L.environment:null,$.fog=L.fog,$.envMap=(I.isMeshStandardMaterial?lt:C).get(I.envMap||$.environment),$.envMapRotation=$.environment!==null&&I.envMap===null?L.environmentRotation:I.envMapRotation,ae===void 0&&(I.addEventListener("dispose",St),ae=new Map,$.programs=ae);let at=ae.get(Gt);if(at!==void 0){if($.currentProgram===at&&$.lightsStateVersion===yt)return Pt(I,Ft),at}else Ft.uniforms=Jt.getUniforms(I),I.onBeforeCompile(Ft,S),at=Jt.acquireProgram(Ft,Gt),ae.set(Gt,at),$.uniforms=Ft.uniforms;const dt=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(dt.clippingPlanes=Ot.uniform),Pt(I,Ft),$.needsLights=re(I),$.lightsStateVersion=yt,$.needsLights&&(dt.ambientLightColor.value=G.state.ambient,dt.lightProbe.value=G.state.probe,dt.directionalLights.value=G.state.directional,dt.directionalLightShadows.value=G.state.directionalShadow,dt.spotLights.value=G.state.spot,dt.spotLightShadows.value=G.state.spotShadow,dt.rectAreaLights.value=G.state.rectArea,dt.ltc_1.value=G.state.rectAreaLTC1,dt.ltc_2.value=G.state.rectAreaLTC2,dt.pointLights.value=G.state.point,dt.pointLightShadows.value=G.state.pointShadow,dt.hemisphereLights.value=G.state.hemi,dt.directionalShadowMap.value=G.state.directionalShadowMap,dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,dt.spotShadowMap.value=G.state.spotShadowMap,dt.spotLightMatrix.value=G.state.spotLightMatrix,dt.spotLightMap.value=G.state.spotLightMap,dt.pointShadowMap.value=G.state.pointShadowMap,dt.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=at,$.uniformsList=null,at}function Mt(I){if(I.uniformsList===null){const L=I.currentProgram.getUniforms();I.uniformsList=na.seqWithValue(L.seq,I.uniforms)}return I.uniformsList}function Pt(I,L){const F=Yt.get(I);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Xt(I,L,F,$,G){L.isScene!==!0&&(L=Tt),E.resetTextureUnits();const vt=L.fog,yt=$.isMeshStandardMaterial?L.environment:null,Ft=w===null?S.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:fr,Gt=($.isMeshStandardMaterial?lt:C).get($.envMap||yt),ae=$.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,at=!!F.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),dt=!!F.morphAttributes.position,wt=!!F.morphAttributes.normal,Dt=!!F.morphAttributes.color;let Nt=Vi;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Nt=S.toneMapping);const $t=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Zt=$t!==void 0?$t.length:0,kt=Yt.get($),Se=p.state.lights;if(J===!0&&(ut===!0||I!==_)){const ve=I===_&&$.id===v;Ot.setState($,I,ve)}let ue=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Se.state.version||kt.outputColorSpace!==Ft||G.isBatchedMesh&&kt.batching===!1||!G.isBatchedMesh&&kt.batching===!0||G.isBatchedMesh&&kt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&kt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&kt.instancing===!1||!G.isInstancedMesh&&kt.instancing===!0||G.isSkinnedMesh&&kt.skinning===!1||!G.isSkinnedMesh&&kt.skinning===!0||G.isInstancedMesh&&kt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&kt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&kt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&kt.instancingMorph===!1&&G.morphTexture!==null||kt.envMap!==Gt||$.fog===!0&&kt.fog!==vt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ot.numPlanes||kt.numIntersection!==Ot.numIntersection)||kt.vertexAlphas!==ae||kt.vertexTangents!==at||kt.morphTargets!==dt||kt.morphNormals!==wt||kt.morphColors!==Dt||kt.toneMapping!==Nt||kt.morphTargetsCount!==Zt)&&(ue=!0):(ue=!0,kt.__version=$.version);let Te=kt.currentProgram;ue===!0&&(Te=mt($,L,G));let Lt=!1,Ae=!1,ge=!1;const _e=Te.getUniforms(),en=kt.uniforms;if(qt.useProgram(Te.program)&&(Lt=!0,Ae=!0,ge=!0),$.id!==v&&(v=$.id,Ae=!0),Lt||_!==I){qt.buffers.depth.getReversed()?(B.copy(I.projectionMatrix),Am(B),Cm(B),_e.setValue(H,"projectionMatrix",B)):_e.setValue(H,"projectionMatrix",I.projectionMatrix),_e.setValue(H,"viewMatrix",I.matrixWorldInverse);const we=_e.map.cameraPosition;we!==void 0&&we.setValue(H,ft.setFromMatrixPosition(I.matrixWorld)),ie.logarithmicDepthBuffer&&_e.setValue(H,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&_e.setValue(H,"isOrthographic",I.isOrthographicCamera===!0),_!==I&&(_=I,Ae=!0,ge=!0)}if(G.isSkinnedMesh){_e.setOptional(H,G,"bindMatrix"),_e.setOptional(H,G,"bindMatrixInverse");const ve=G.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),_e.setValue(H,"boneTexture",ve.boneTexture,E))}G.isBatchedMesh&&(_e.setOptional(H,G,"batchingTexture"),_e.setValue(H,"batchingTexture",G._matricesTexture,E),_e.setOptional(H,G,"batchingIdTexture"),_e.setValue(H,"batchingIdTexture",G._indirectTexture,E),_e.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&_e.setValue(H,"batchingColorTexture",G._colorsTexture,E));const Ne=F.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&ne.update(G,F,Te),(Ae||kt.receiveShadow!==G.receiveShadow)&&(kt.receiveShadow=G.receiveShadow,_e.setValue(H,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(en.envMap.value=Gt,en.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&L.environment!==null&&(en.envMapIntensity.value=L.environmentIntensity),Ae&&(_e.setValue(H,"toneMappingExposure",S.toneMappingExposure),kt.needsLights&&ee(en,ge),vt&&$.fog===!0&&Vt.refreshFogUniforms(en,vt),Vt.refreshMaterialUniforms(en,$,ot,xt,p.state.transmissionRenderTarget[I.id]),na.upload(H,Mt(kt),en,E)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(na.upload(H,Mt(kt),en,E),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&_e.setValue(H,"center",G.center),_e.setValue(H,"modelViewMatrix",G.modelViewMatrix),_e.setValue(H,"normalMatrix",G.normalMatrix),_e.setValue(H,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ve=$.uniformsGroups;for(let we=0,on=ve.length;we<on;we++){const Yn=ve[we];ct.update(Yn,Te),ct.bind(Yn,Te)}}return Te}function ee(I,L){I.ambientLightColor.needsUpdate=L,I.lightProbe.needsUpdate=L,I.directionalLights.needsUpdate=L,I.directionalLightShadows.needsUpdate=L,I.pointLights.needsUpdate=L,I.pointLightShadows.needsUpdate=L,I.spotLights.needsUpdate=L,I.spotLightShadows.needsUpdate=L,I.rectAreaLights.needsUpdate=L,I.hemisphereLights.needsUpdate=L}function re(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,L,F){Yt.get(I.texture).__webglTexture=L,Yt.get(I.depthTexture).__webglTexture=F;const $=Yt.get(I);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=F===void 0,$.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,L){const F=Yt.get(I);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(I,L=0,F=0){w=I,P=L,b=F;let $=!0,G=null,vt=!1,yt=!1;if(I){const Gt=Yt.get(I);if(Gt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(H.FRAMEBUFFER,null),$=!1;else if(Gt.__webglFramebuffer===void 0)E.setupRenderTarget(I);else if(Gt.__hasExternalTextures)E.rebindTextures(I,Yt.get(I.texture).__webglTexture,Yt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const dt=I.depthTexture;if(Gt.__boundDepthTexture!==dt){if(dt!==null&&Yt.has(dt)&&(I.width!==dt.image.width||I.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(I)}}const ae=I.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(yt=!0);const at=Yt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(at[L])?G=at[L][F]:G=at[L],vt=!0):I.samples>0&&E.useMultisampledRTT(I)===!1?G=Yt.get(I).__webglMultisampledFramebuffer:Array.isArray(at)?G=at[F]:G=at,T.copy(I.viewport),z.copy(I.scissor),U=I.scissorTest}else T.copy(q).multiplyScalar(ot).floor(),z.copy(K).multiplyScalar(ot).floor(),U=nt;if(qt.bindFramebuffer(H.FRAMEBUFFER,G)&&$&&qt.drawBuffers(I,G),qt.viewport(T),qt.scissor(z),qt.setScissorTest(U),vt){const Gt=Yt.get(I.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+L,Gt.__webglTexture,F)}else if(yt){const Gt=Yt.get(I.texture),ae=L||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.__webglTexture,F||0,ae)}v=-1},this.readRenderTargetPixels=function(I,L,F,$,G,vt,yt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Yt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&yt!==void 0&&(Ft=Ft[yt]),Ft){qt.bindFramebuffer(H.FRAMEBUFFER,Ft);try{const Gt=I.texture,ae=Gt.format,at=Gt.type;if(!ie.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=I.width-$&&F>=0&&F<=I.height-G&&H.readPixels(L,F,$,G,pe.convert(ae),pe.convert(at),vt)}finally{const Gt=w!==null?Yt.get(w).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(I,L,F,$,G,vt,yt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Yt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&yt!==void 0&&(Ft=Ft[yt]),Ft){const Gt=I.texture,ae=Gt.format,at=Gt.type;if(!ie.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=I.width-$&&F>=0&&F<=I.height-G){qt.bindFramebuffer(H.FRAMEBUFFER,Ft);const dt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.bufferData(H.PIXEL_PACK_BUFFER,vt.byteLength,H.STREAM_READ),H.readPixels(L,F,$,G,pe.convert(ae),pe.convert(at),0);const wt=w!==null?Yt.get(w).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,wt);const Dt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Tm(H,Dt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,dt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,vt),H.deleteBuffer(dt),H.deleteSync(Dt),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,L=null,F=0){I.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,I=arguments[1]);const $=Math.pow(2,-F),G=Math.floor(I.image.width*$),vt=Math.floor(I.image.height*$),yt=L!==null?L.x:0,Ft=L!==null?L.y:0;E.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,F,0,0,yt,Ft,G,vt),qt.unbindTexture()},this.copyTextureToTexture=function(I,L,F=null,$=null,G=0){I.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,I=arguments[1],L=arguments[2],G=arguments[3]||0,F=null);let vt,yt,Ft,Gt,ae,at,dt,wt,Dt;const Nt=I.isCompressedTexture?I.mipmaps[G]:I.image;F!==null?(vt=F.max.x-F.min.x,yt=F.max.y-F.min.y,Ft=F.isBox3?F.max.z-F.min.z:1,Gt=F.min.x,ae=F.min.y,at=F.isBox3?F.min.z:0):(vt=Nt.width,yt=Nt.height,Ft=Nt.depth||1,Gt=0,ae=0,at=0),$!==null?(dt=$.x,wt=$.y,Dt=$.z):(dt=0,wt=0,Dt=0);const $t=pe.convert(L.format),Zt=pe.convert(L.type);let kt;L.isData3DTexture?(E.setTexture3D(L,0),kt=H.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),kt=H.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),kt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,L.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,L.unpackAlignment);const Se=H.getParameter(H.UNPACK_ROW_LENGTH),ue=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Te=H.getParameter(H.UNPACK_SKIP_PIXELS),Lt=H.getParameter(H.UNPACK_SKIP_ROWS),Ae=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Nt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Nt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Gt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ae),H.pixelStorei(H.UNPACK_SKIP_IMAGES,at);const ge=I.isDataArrayTexture||I.isData3DTexture,_e=L.isDataArrayTexture||L.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const en=Yt.get(I),Ne=Yt.get(L),ve=Yt.get(en.__renderTarget),we=Yt.get(Ne.__renderTarget);qt.bindFramebuffer(H.READ_FRAMEBUFFER,ve.__webglFramebuffer),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let on=0;on<Ft;on++)ge&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(I).__webglTexture,G,at+on),I.isDepthTexture?(_e&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Yt.get(L).__webglTexture,G,Dt+on),H.blitFramebuffer(Gt,ae,vt,yt,dt,wt,vt,yt,H.DEPTH_BUFFER_BIT,H.NEAREST)):_e?H.copyTexSubImage3D(kt,G,dt,wt,Dt+on,Gt,ae,vt,yt):H.copyTexSubImage2D(kt,G,dt,wt,Dt+on,Gt,ae,vt,yt);qt.bindFramebuffer(H.READ_FRAMEBUFFER,null),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else _e?I.isDataTexture||I.isData3DTexture?H.texSubImage3D(kt,G,dt,wt,Dt,vt,yt,Ft,$t,Zt,Nt.data):L.isCompressedArrayTexture?H.compressedTexSubImage3D(kt,G,dt,wt,Dt,vt,yt,Ft,$t,Nt.data):H.texSubImage3D(kt,G,dt,wt,Dt,vt,yt,Ft,$t,Zt,Nt):I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,dt,wt,vt,yt,$t,Zt,Nt.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,dt,wt,Nt.width,Nt.height,$t,Nt.data):H.texSubImage2D(H.TEXTURE_2D,G,dt,wt,vt,yt,$t,Zt,Nt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Se),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ue),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Te),H.pixelStorei(H.UNPACK_SKIP_ROWS,Lt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ae),G===0&&L.generateMipmaps&&H.generateMipmap(kt),qt.unbindTexture()},this.copyTextureToTexture3D=function(I,L,F=null,$=null,G=0){return I.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,$=arguments[1]||null,I=arguments[2],L=arguments[3],G=arguments[4]||0),Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,L,F,$,G)},this.initRenderTarget=function(I){Yt.get(I).__webglFramebuffer===void 0&&E.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?E.setTextureCube(I,0):I.isData3DTexture?E.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?E.setTexture2DArray(I,0):E.setTexture2D(I,0),qt.unbindTexture()},this.resetState=function(){P=0,b=0,w=null,qt.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=De._getDrawingBufferColorSpace(t),e.unpackColorSpace=De._getUnpackColorSpace()}}class nu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new me(t),this.near=e,this.far=n}clone(){return new nu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class k_ extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class iu extends mn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Dn,u=Dn,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da extends Ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fs=new ze,zf=new ze,Co=[],Nf=new ji,B_=new ze,Sr=new Ve,wr=new Zi;class H_ extends Ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,B_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ji),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),Nf.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Nf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),wr.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(wr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),t.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fs),zf.multiplyMatrices(n,Fs),Sr.matrixWorld=zf,Sr.raycast(t,Co);for(let o=0,a=Co.length;o<a;o++){const c=Co[o];c.instanceId=r,c.object=this,e.push(c)}Co.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new iu(new Float32Array(s*this.count),s,this.count,$l,ui));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xd extends mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ce:new et);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new et,s=[],r=[],o=[],a=new et,c=new ze;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new et)}r[0]=new et,o[0]=new et;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(cn(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(cn(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class su extends hi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ce){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class G_ extends su{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ru(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ro=new et,dc=new ru,pc=new ru,mc=new ru;class V_ extends hi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new et){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ro.subVectors(s[0],s[1]).add(s[0]),l=Ro);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),dc.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,x,m),pc.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,x,m),mc.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),pc.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),mc.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(dc.calc(c),pc.calc(c),mc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uf(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function W_(i,t){const e=1-i;return e*e*t}function X_(i,t){return 2*(1-i)*i*t}function q_(i,t){return i*i*t}function Or(i,t,e,n){return W_(i,t)+X_(i,e)+q_(i,n)}function Y_(i,t){const e=1-i;return e*e*e*t}function K_(i,t){const e=1-i;return 3*e*e*i*t}function $_(i,t){return 3*(1-i)*i*i*t}function j_(i,t){return i*i*i*t}function kr(i,t,e,n,s){return Y_(i,t)+K_(i,e)+$_(i,n)+j_(i,s)}class qd extends hi{constructor(t=new ce,e=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ce){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Z_ extends hi{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(t,s.x,r.x,o.x,a.x),kr(t,s.y,r.y,o.y,a.y),kr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yd extends hi{constructor(t=new ce,e=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ce){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ce){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J_ extends hi{constructor(t=new et,e=new et){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kd extends hi{constructor(t=new ce,e=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ce){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Or(t,s.x,r.x,o.x),Or(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q_ extends hi{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Or(t,s.x,r.x,o.x),Or(t,s.y,r.y,o.y),Or(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $d extends hi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ce){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Uf(a,c.x,l.x,u.x,d.x),Uf(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ce().fromArray(s))}return this}}var Ff=Object.freeze({__proto__:null,ArcCurve:G_,CatmullRomCurve3:V_,CubicBezierCurve:qd,CubicBezierCurve3:Z_,EllipseCurve:su,LineCurve:Yd,LineCurve3:J_,QuadraticBezierCurve:Kd,QuadraticBezierCurve3:Q_,SplineCurve:$d});class tM extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ff[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ff[s.type]().fromJSON(s))}return this}}class eM extends tM{constructor(t){super(),this.type="Path",this.currentPoint=new ce,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yd(this.currentPoint.clone(),new ce(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Kd(this.currentPoint.clone(),new ce(t,e),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new qd(this.currentPoint.clone(),new ce(t,e),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $d(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new su(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ea extends Ze{constructor(t=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=cn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,d=new et,f=new ce,h=new et,g=new et,x=new et;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,h.x=p*1,h.y=-m,h.z=p*0,x.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),c.push(h.x,h.y,h.z),x.copy(g)}for(let y=0;y<=e;y++){const M=n+y*u*s,S=Math.sin(M),R=Math.cos(M);for(let P=0;P<=t.length-1;P++){d.x=t[P].x*S,d.y=t[P].y,d.z=t[P].x*R,o.push(d.x,d.y,d.z),f.x=y/e,f.y=P/(t.length-1),a.push(f.x,f.y);const b=c[3*P+0]*S,w=c[3*P+1],v=c[3*P+0]*R;l.push(b,w,v)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const S=M+y*t.length,R=S,P=S+t.length,b=S+t.length+1,w=S+1;r.push(R,P,w),r.push(b,w,P)}this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("uv",new Ie(a,2)),this.setAttribute("normal",new Ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.points,t.segments,t.phiStart,t.phiLength)}}class ou extends Ea{constructor(t=1,e=1,n=4,s=8){const r=new eM;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ou(t.radius,t.length,t.capSegments,t.radialSegments)}}class au extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new et,u=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const h=n+d/e*s;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(a,3)),this.setAttribute("uv",new Ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ti extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let g=0;const x=[],m=n/2;let p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ie(d,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(h,2));function y(){const S=new et,R=new et;let P=0;const b=(e-t)/n;for(let w=0;w<=r;w++){const v=[],_=w/r,T=_*(e-t)+t;for(let z=0;z<=s;z++){const U=z/s,X=U*c+a,Y=Math.sin(X),Q=Math.cos(X);R.x=T*Y,R.y=-_*n+m,R.z=T*Q,d.push(R.x,R.y,R.z),S.set(Y,b,Q).normalize(),f.push(S.x,S.y,S.z),h.push(U,1-_),v.push(g++)}x.push(v)}for(let w=0;w<s;w++)for(let v=0;v<r;v++){const _=x[v][w],T=x[v+1][w],z=x[v+1][w+1],U=x[v][w+1];(t>0||v!==0)&&(u.push(_,T,U),P+=3),(e>0||v!==r-1)&&(u.push(T,z,U),P+=3)}l.addGroup(p,P,0),p+=P}function M(S){const R=g,P=new ce,b=new et;let w=0;const v=S===!0?t:e,_=S===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*_,0),f.push(0,_,0),h.push(.5,.5),g++;const T=g;for(let z=0;z<=s;z++){const X=z/s*c+a,Y=Math.cos(X),Q=Math.sin(X);b.x=v*Q,b.y=m*_,b.z=v*Y,d.push(b.x,b.y,b.z),f.push(0,_,0),P.x=Y*.5+.5,P.y=Q*.5*_+.5,h.push(P.x,P.y),g++}for(let z=0;z<s;z++){const U=R+z,X=T+z;S===!0?u.push(X,X+1,U):u.push(X+1,X,U),w+=3}l.addGroup(p,w,S===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ta extends ti{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ta(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Aa extends Ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new et,S=new et,R=new et;for(let P=0;P<e.length;P+=3)h(e[P+0],M),h(e[P+1],S),h(e[P+2],R),c(M,S,R,y)}function c(y,M,S,R){const P=R+1,b=[];for(let w=0;w<=P;w++){b[w]=[];const v=y.clone().lerp(S,w/P),_=M.clone().lerp(S,w/P),T=P-w;for(let z=0;z<=T;z++)z===0&&w===P?b[w][z]=v:b[w][z]=v.clone().lerp(_,z/T)}for(let w=0;w<P;w++)for(let v=0;v<2*(P-w)-1;v++){const _=Math.floor(v/2);v%2===0?(f(b[w][_+1]),f(b[w+1][_]),f(b[w][_])):(f(b[w][_+1]),f(b[w+1][_+1]),f(b[w+1][_]))}}function l(y){const M=new et;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(y),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function u(){const y=new et;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const S=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(S,1-R)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const M=o[y+0],S=o[y+2],R=o[y+4],P=Math.max(M,S,R),b=Math.min(M,S,R);P>.9&&b<.1&&(M<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function h(y,M){const S=y*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function g(){const y=new et,M=new et,S=new et,R=new et,P=new ce,b=new ce,w=new ce;for(let v=0,_=0;v<r.length;v+=9,_+=6){y.set(r[v+0],r[v+1],r[v+2]),M.set(r[v+3],r[v+4],r[v+5]),S.set(r[v+6],r[v+7],r[v+8]),P.set(o[_+0],o[_+1]),b.set(o[_+2],o[_+3]),w.set(o[_+4],o[_+5]),R.copy(y).add(M).add(S).divideScalar(3);const T=m(R);x(P,_+0,y,T),x(b,_+2,M,T),x(w,_+4,S,T)}}function x(y,M,S,R){R<0&&y.x===1&&(o[M]=y.x-1),S.x===0&&S.z===0&&(o[M]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.vertices,t.indices,t.radius,t.details)}}class lr extends Aa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new lr(t.radius,t.detail)}}class jr extends Aa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jr(t.radius,t.detail)}}class qn extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new et,f=new et,h=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const P=R/e;d.x=-t*Math.cos(s+P*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+P*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(P+S,1-M),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=u[p][y+1],S=u[p][y],R=u[p+1][y],P=u[p+1][y+1];(p!==0||o>0)&&h.push(M,S,P),(p!==n-1||c<Math.PI)&&h.push(S,R,P)}this.setIndex(h),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nM extends ys{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iM extends ys{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ca extends ys{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jd extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sM extends jd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const gc=new ze,Of=new et,kf=new et;class rM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tu,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Of.setFromMatrixPosition(t.matrixWorld),e.position.copy(Of),kf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kf),e.updateMatrixWorld(),gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class oM extends rM{constructor(){super(new kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aM extends jd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cM extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);const Le=Object.freeze({eightBody:1447452,eightDisc:16513779,eightInk:1447452,eightRim:10274047,cueBody:16776692,cueDots:14165548,blobShadow:795668,flagCloth:15217199,flagDisc:16513779,pinWhite:16513779,pinBand:15217199,cupInside:1780254,cupLiner:16513779,guideWhite:16777215,guideHalo:1057818,guideWarn:16747050,eightArrow:16765503,surfaceOutline:3037738,chalk:4030425,poolBalls:Object.freeze([16763196,2976991,15022389,8081353,16747050,2006618,9317178])}),Bf=Object.freeze({1:Object.freeze({name:"Greenside",rough:5216828,fairwayLight:8177237,fairwayDark:7125066,fringe:7782994,greenLight:9427046,greenDark:8703836,sand:15914907,sandLip:14268530,ice:14218239,waterShallow:6080736,waterDeep:3051460,waterFoam:15268863,waterGlint:12579839,pondBed:2916230,railSide:10115630,railTop:12745283,railSights:16051152,cushionNose:2059082,hedge:4164154,wallStone:14275267,soilTop:8015407,soilBottom:5123868,skyTop:12576511,skyBottom:15267839,reeds:8032058,wood:11040586,hemiSky:15135487,hemiGround:8022600,hemiIntensity:1.4,sun:16773596,sunIntensity:2.7,sunElevationDeg:50}),2:Object.freeze({name:"Lakeside",rough:6198336,fairwayLight:9684306,fairwayDark:8697930,fringe:9224270,greenLight:10737251,greenDark:9948506,sand:15978388,sandLip:14264422,ice:14218239,waterShallow:5224150,waterDeep:2386088,waterFoam:15268863,waterGlint:16770764,pondBed:2781050,railSide:7028516,railTop:9198132,railSights:14792794,cushionNose:2055762,hedge:4620346,wallStone:14207152,soilTop:8015407,soilBottom:5123868,skyTop:16766888,skyBottom:16772048,reeds:8032058,wood:11040586,hemiSky:16770764,hemiGround:5917242,hemiIntensity:1.8,sun:16767400,sunIntensity:3.2,sunElevationDeg:32})}),cu=i=>Bf[i]||Bf[1],ci=42,Hf=64,lM=58;function uM(i){if(!(i>0)||!Number.isFinite(i))return ci;const t=2*Math.atan(Math.tan(lM*Math.PI/360)/i)*180/Math.PI;return t<ci?ci:t>Hf?Hf:t}const fM=zl.degToRad(225),hM=90;function dM(){try{const n=typeof location<"u"?/[?&]tier=([012])\b/.exec(location.search):null;if(n)return+n[1]}catch{}const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=typeof navigator<"u"?navigator.deviceMemory:void 0,e=typeof devicePixelRatio=="number"?devicePixelRatio:1;return i&&typeof t=="number"&&t<=3?0:!i&&e>=1.5?2:1}const pM=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4( mat3( viewMatrix ) * position, 1.0 );
  gl_Position = p.xyww;
  gl_Position.z = p.w * 0.99999; // on the far plane: behind everything, never clipped
}`,mM=`
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uBelow;
uniform vec3 uSun;
uniform vec3 uSunDir;
#ifdef CLOUDS
uniform vec4 uClouds[ 8 ]; // azimuth (rad), base elevation (sin), width (rad), opacity
uniform vec3 uCloudLit;
uniform vec3 uCloudShade;
#endif
varying vec3 vDir;
void main() {
  vec3 d = normalize( vDir );
  float h = d.y;
  vec3 col = h >= 0.0 ? mix( uHorizon, uZenith, pow( smoothstep( 0.0, 0.7, h ), 0.75 ) ) : mix( uHorizon, uBelow, smoothstep( 0.0, -0.4, h ) );
  float s = max( dot( d, uSunDir ), 0.0 );
  col += uSun * ( 0.16 * pow( s, 48.0 ) + 0.06 * pow( s, 5.0 ) );
#ifdef CLOUDS
  if ( h > -0.42 && h < 0.42 ) {
    float az = atan( d.x, d.z );
    for ( int i = 0; i < 8; i ++ ) {
      vec4 q = uClouds[ i ];
      float u = az - q.x;
      u = ( u - 6.2831853 * floor( u / 6.2831853 + 0.5 ) ) / q.z;
      if ( abs( u ) > 1.3 ) continue;
      float v = ( h - q.y ) / q.z;
      if ( v < -0.3 || v > 0.9 ) continue;
      // three puffs on a flat base: toon cloud
      float dens = exp( -( ( u + 0.36 ) * ( u + 0.36 ) + ( v - 0.08 ) * ( v - 0.08 ) ) * 14.0 )
                 + exp( -( u * u + ( v - 0.22 ) * ( v - 0.22 ) ) * 10.0 )
                 + exp( -( ( u - 0.4 ) * ( u - 0.4 ) + ( v - 0.06 ) * ( v - 0.06 ) ) * 16.0 );
      float a = smoothstep( 0.42, 0.62, dens ) * smoothstep( -0.06, 0.02, v ) * q.w;
      vec3 cc = mix( uCloudShade, uCloudLit, smoothstep( 0.0, 0.3, v ) );
      col = mix( col, cc, a );
    }
  }
#endif
  gl_FragColor = vec4( col, 1.0 );
  #include <colorspace_fragment>
}`,gM=[[.3,.05,.34,.95],[1.15,-.16,.28,.8],[1.9,.12,.4,.9],[2.7,-.08,.3,.85],[3.5,.03,.36,.95],[4.3,-.2,.32,.75],[5.05,.15,.3,.9],[5.8,-.05,.38,.85]],Gf={1:7912944,2:15771752},xM={1:14083827,2:15913661},vM={1:16777215,2:16774890};function _M(i){const t=new qn(1,24,12),e=[];for(const r of gM)e.push(new Ge(r[0],r[1],r[2],r[3]));const n=new _n({uniforms:{uZenith:{value:new me},uHorizon:{value:new me},uBelow:{value:new me},uSun:{value:new me},uSunDir:{value:new et(0,1,0)},uClouds:{value:e},uCloudLit:{value:new me},uCloudShade:{value:new me}},defines:i>=1?{CLOUDS:""}:{},vertexShader:pM,fragmentShader:mM,side:vn,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1}),s=new Ve(t,n);return s.name="sky",s.frustumCulled=!1,s.renderOrder=-100,s.matrixAutoUpdate=!1,s}function MM(i){const t=dM(),e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=typeof devicePixelRatio=="number"&&devicePixelRatio>0?devicePixelRatio:1,s=Math.min(n,t===0?1:t===2?2:e?1.5:2),r=Math.min(1,n);let o=null;try{o=new O_({antialias:t>0,powerPreference:"high-performance",stencil:!1,alpha:!1})}catch(nt){o=null,typeof window<"u"&&window.document&&window.document.body&&console.error(nt)}if(o){o.outputColorSpace=pn,o.toneMapping=md,o.toneMappingExposure=1,o.shadowMap.enabled=t>=1,o.shadowMap.type=Xl,o.shadowMap.autoUpdate=!1,o.setPixelRatio(s);const nt=o.domElement;nt.style.display="block",nt.style.width="100%",nt.style.height="100%",nt.style.touchAction="none",nt.style.outline="none",i&&i.appendChild&&i.appendChild(nt)}const a=new k_,c=new Cn(ci,16/9,.5,800),l=_M(t);a.add(l),a.fog=new nu(15267839,80,300),c.position.set(0,30,17),c.lookAt(0,0,0);const u=new sM(16777215,7829367,1.4);u.position.set(0,1,0);const d=new aM(16777215,2.7);if(a.add(u,d,d.target),t>=1){d.castShadow=!0;const nt=t===2?2048:1024;d.shadow.mapSize.set(nt,nt),d.shadow.bias=-6e-4,d.shadow.normalBias=.03,d.shadow.intensity=.55}const f={w:1,h:1,portrait:!1,zero:!0},h=new Set,g=new et,x=new ji(new et(-4,-2,-16),new et(30,4,4));let m=2,p=zl.degToRad(50);const y={renderer:o,scene:a,camera:c,tier:t,size:f,container:i,round:1,yaw:0,fov:ci,hemi:u,sun:d,sky:l,kickCamera:null,pixelRatio:s,shadows:!!(o&&t>=1),setRound:T,setShadowBounds:v,invalidateShadows:_,onResize:X,render:q,dispose:K},M=new ze,S=new et,R=new et,P=new me,b=new et(0,1,0);function w(){const nt=y.yaw+fM;if(g.set(Math.sin(nt)*Math.cos(p),Math.sin(p),Math.cos(nt)*Math.cos(p)),x.getCenter(R),d.position.copy(R).addScaledVector(g,hM),d.target.position.copy(R),d.updateMatrixWorld(),d.target.updateMatrixWorld(),l.material.uniforms.uSunDir.value.copy(g),!d.castShadow)return;M.lookAt(d.position,R,b),M.setPosition(d.position),M.invert();let O=1/0,J=-1/0,ut=1/0,B=-1/0,it=1/0,ft=-1/0;for(let Tt=0;Tt<8;Tt++)S.set(Tt&1?x.max.x:x.min.x,Tt&2?x.max.y:x.min.y,Tt&4?x.max.z:x.min.z),S.applyMatrix4(M),S.x<O&&(O=S.x),S.x>J&&(J=S.x),S.y<ut&&(ut=S.y),S.y>B&&(B=S.y),S.z<it&&(it=S.z),S.z>ft&&(ft=S.z);const gt=d.shadow.camera;gt.left=O-1,gt.right=J+1,gt.bottom=ut-1,gt.top=B+1,gt.near=Math.max(.5,-ft-4),gt.far=-it+4,gt.updateProjectionMatrix(),_()}function v(nt){if(!nt||!nt.bounds)return;const O=nt.bounds;let J=0,ut=0;const B=nt.grid;if(B&&B.height)for(let it=0;it<B.height.length;it++){const ft=B.height[it];ft<J&&(J=ft),ft>ut&&(ut=ft)}x.min.set(O.minx-5,J-2.5,O.minz-5),x.max.set(O.maxx+5,ut+5,O.maxz+5),w()}function _(){m=2}function T(nt){const O=cu(nt);y.round=nt===2?2:1,u.color.setHex(O.hemiSky),u.groundColor.setHex(O.hemiGround),u.intensity=O.hemiIntensity,d.color.setHex(O.sun),d.intensity=O.sunIntensity,p=zl.degToRad(O.sunElevationDeg);const J=y.round,ut=l.material.uniforms;ut.uHorizon.value.setHex(O.skyBottom),ut.uZenith.value.setHex(O.skyTop).lerp(P.setHex(Gf[J]),.5),ut.uBelow.value.setHex(O.skyBottom).lerp(P.setHex(O.skyTop),.45).lerp(P.setHex(Gf[J]),.12),ut.uSun.value.setHex(O.sun),ut.uCloudLit.value.setHex(vM[J]),ut.uCloudShade.value.setHex(xM[J]),a.background&&a.background.isColor||(a.background=new me),a.background.setHex(O.skyBottom),a.fog.color.setHex(O.skyBottom),w()}function z(){let nt=0,O=0;if(i&&(nt=i.clientWidth||0,O=i.clientHeight||0,(!nt||!O)&&i.getBoundingClientRect)){const J=i.getBoundingClientRect();nt=nt||J.width||0,O=O||J.height||0}return{w:nt>0&&Number.isFinite(nt)?Math.round(nt):0,h:O>0&&Number.isFinite(O)?Math.round(O):0}}function U(nt){const O=z(),J=!(O.w>0&&O.h>0),ut=J?1:O.w,B=J?1:O.h;if(!nt&&ut===f.w&&B===f.h&&J===f.zero)return;const it=f.portrait;f.w=ut,f.h=B,f.zero=J,f.portrait=!J&&B>ut,y.yaw=f.portrait?-Math.PI/2:0,c.aspect=J?16/9:ut/B,y.fov=uM(c.aspect),c.fov=y.fov,c.updateProjectionMatrix(),o&&o.setSize(ut,B,!1),(nt||it!==f.portrait)&&w(),h.forEach(ft=>{try{ft(f)}catch(gt){console.error(gt)}})}function X(nt){return h.add(nt),()=>h.delete(nt)}const Y=()=>U(!1);let Q=null;typeof ResizeObserver=="function"&&i&&i.nodeType===1&&(Q=new ResizeObserver(Y),Q.observe(i)),typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",Y),window.addEventListener("orientationchange",Y));function xt(nt){nt=Math.round(nt*4)/4,!(!o||nt===y.pixelRatio)&&(y.pixelRatio=nt,o.setPixelRatio(nt),o.setSize(f.w,f.h,!1))}const ot=yM({cap:s,min:r,get:()=>y.pixelRatio,set:xt,onSlowStart(){o&&o.shadowMap.enabled&&(o.shadowMap.enabled=!1,d.castShadow=!1,y.shadows=!1)}});let k=0;const D=typeof performance<"u"?performance:Date;function q(){if(!o||f.zero)return;const nt=D.now();k&&ot.frame((nt-k)/1e3),k=nt,m>0&&(o.shadowMap.enabled&&(o.shadowMap.needsUpdate=!0),m--),o.render(a,c)}function K(){if(h.clear(),Q&&Q.disconnect(),typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",Y),window.removeEventListener("orientationchange",Y)),l.geometry.dispose(),l.material.dispose(),d.shadow&&d.shadow.map&&d.shadow.map.dispose(),o){o.dispose();const nt=o.domElement;nt&&nt.parentNode&&nt.parentNode.removeChild(nt)}}return U(!0),T(1),y}function yM({cap:i,min:t,get:e,set:n,onSlowStart:s=null}){const r={winT:0,winN:0,slowT:0,slowSum:0,fastT:0,age:0,checkT:0,checkN:0,checked:!1,probing:!1,probeT:0,probeSum:0,prevPr:0,prevAvg:0,capped:!1},o=new Map;function a(c){if(!(c>0)||c>.25||(r.age+=c,!r.checked&&r.age>1&&(r.checkT+=c,r.checkN++,r.checkT>=3&&(r.checked=!0,r.checkN/r.checkT<40&&s&&s())),r.winT+=c,r.winN++,r.winT<.5))return;const l=r.winT/r.winN,u=r.winT;if(r.winT=0,r.winN=0,r.probing){r.probeT+=u,r.probeSum+=l*u,r.probeT>=1.5&&(r.probing=!1,r.probeSum/r.probeT>r.prevAvg*.92&&(n(r.prevPr),o.set(r.prevPr,Math.max(0,(o.get(r.prevPr)||1)-1)),r.capped=!0));return}if(r.capped)if(l<.0172)r.capped=!1;else return;l>.018?(r.slowT+=u,r.slowSum+=l*u,r.fastT=0):(r.slowT=0,r.slowSum=0),l<.0172?r.fastT+=u:r.fastT=0;const d=e();if(r.slowT>=1&&d>t)o.set(d,(o.get(d)||0)+1),r.prevPr=d,r.prevAvg=r.slowSum/r.slowT,n(Math.max(t,d-.25)),r.probing=!0,r.probeT=0,r.probeSum=0,r.slowT=0,r.slowSum=0,r.fastT=0;else if(r.fastT>=5&&d<i){const f=Math.min(i,d+.25);(o.get(f)||0)<2&&n(f),r.fastT=0}}return{frame:a,state:r}}const be={enabled:!0,pulling:!1,pull:0,strike:-1,placing:!1,aiming:!1,hint:0},Hn={rest:.12,travel:2.4,elevDeg:13,len:6.43,fadeNear:.4,fadeFar:.7,hold:.12};function SM(){be.enabled=!0,be.pulling=!1,be.pull=0,be.strike=-1,be.placing=!1,be.aiming=!1,be.hint=0}const An=Math.PI/180,Ul=Math.PI*2,pa=60*An,Po=30*An,wM=36*An,bM=42*An,Mn=Kt.R,EM=22,Lo=1.6,Vf=1,Io=2.6,Do=64,TM={top:76},Wf=.3,Xf=10,qf=.85,AM=.065,CM=.34,RM=.36,PM=1.12,LM=.9,IM=1.2,Yf=.14,DM=3.5,zM=.06,Kf=12*An,zo=75*An,$f=.3,jf=3.5,NM=.04,UM=.07,xc=.3,si=0,ss=1,rs=2,Os=3,ks=4,br=5,No=6,Uo=7,vc=8,os=9,Fo=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},FM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Qe=(i,t)=>Number.isFinite(i)?i:t,Zn=i=>i-Ul*Math.floor((i+Math.PI)/Ul);function hs(i,t,e){if(!i)return 0;const n=i.grid;if(!n||!n.height){const m=i.heightAt?i.heightAt(t,e):0;return Number.isFinite(m)?m:0}const s=n.cols,r=n.rows;let o=(t-n.x0)/n.cell,a=(e-n.z0)/n.cell;if(o!==o||a!==a)return 0;o=o<0?0:o>s-1.000001?s-1.000001:o,a=a<0?0:a>r-1.000001?r-1.000001:a;const c=o|0,l=a|0,u=o-c,d=a-l,f=n.height,h=l*s+c,g=f[h]+(f[h+1]-f[h])*u,x=f[h+s]+(f[h+s+1]-f[h+s])*u;return g+(x-g)*d}class ri{constructor(t){this.tx=0,this.ty=0,this.tz=0,this.d=t,this.yaw=0,this.pitch=pa,this.valid=!1}}class Bs{constructor(){this.v=0}}class OM{constructor(){this.x=new Bs,this.y=new Bs,this.z=new Bs,this.d=new Bs,this.yaw=new Bs,this.pitch=new Bs}}class kM{constructor(){this.x=0,this.z=0,this.has=!1,this.lastX=0,this.lastZ=0,this.vx=0,this.vz=0,this.fresh=!1,this.age=0,this.yaw=0,this.baseD=20,this.ox=0,this.oz=0}}class BM{constructor(){this.d=0,this.aspect=0,this.yaw=NaN,this.pitch=NaN,this.tx=NaN,this.ty=NaN,this.tz=NaN,this.dd=NaN,this.kicked=!1}}class HM{constructor(){this.active=!1,this.t=0,this.from=new ri(60),this.to=new ri(30),this.resolve=null}}class GM{constructor(){this.dt=0,this.T=.25,this.Ty=.3,this.pin=0,this.ex=0,this.ez=0,this.eh=0,this.dLo=0}}class VM{constructor(){this.x0=-1,this.x1=1,this.y0=-1,this.y1=1}}class WM{constructor(){this.top=TM.top,this.right=0,this.bottom=0,this.left=0}}class XM{constructor(){this.x0=0,this.x1=0,this.y0=0,this.y1=0}}class qM{constructor(){this.yaw=0,this.pitch=pa}}class YM{constructor(){this.intent=null,this.ax=NaN,this.az=NaN,this.x=NaN,this.z=NaN,this.ex=NaN,this.ez=NaN}}class KM{constructor(){this.ex=0,this.ez=0,this.dx=1,this.dz=0,this.len=14}}class $M{constructor(){this.t=0,this.k=0}}class jM{constructor(){this.valid=!1,this.D=20,this.sx=0,this.sy=-.3,this.cx=NaN,this.cz=NaN,this.ex=NaN,this.ez=NaN}}class ZM{constructor(){this.init=!1,this.sync=1,this.userPitch=0,this.userZoom=1,this.seenI=null}}function JM(i){const t=i.camera,e=new Cn(ci,t.aspect,.1,4e3),n=new ri(40),s=new ri(40),r=new OM,o=new ri(60),a=new ri(30),c=new ri(30),l=new ri(30),u=new ri(30),d=new HM,f=new kM,h=new qM,g=new YM,x=new KM,m=new $M,p=new jM,y=new ZM,M=new Float64Array(os),S=new Float64Array(os),R=new Float64Array(os),P=new Float64Array(Do),b=new Float64Array(Do),w=new Float64Array(Do);let v=0;const _=new et,T=new et,z=new et,U=new zn,X={x:0,z:0};let Y=null,Q=0,xt=0,ot=60,k="idle",D=!1,q=!1,K=null,nt=-1,O=null,J=i.yaw||0;const ut=new BM,B=new WM,it=new VM,ft=new ri(30),gt=new GM,Tt=(A,N)=>hs(Y,A,N),tt=()=>Math.max(1,i.size.h||1),pt=()=>Math.max(1,i.size.w||1),H=()=>{const A=i.fov;return A>1&&A<170?A:ci},rt=()=>Math.tan(H()*An/2);function jt(){const A=pt(),N=tt(),W=Math.max(10,.03*Math.min(A,N));let Z=B.left,j=B.right,mt=B.top,Mt=B.bottom;const Pt=A*(1-Wf)-2*W;if(Z+j>Pt){const ee=Math.max(0,Pt)/(Z+j);Z*=ee,j*=ee}const Xt=N*(1-Wf)-2*W;if(mt+Mt>Xt){const ee=Math.max(0,Xt)/(mt+Mt);mt*=ee,Mt*=ee}return it.x0=-1+2*(Z+W)/A,it.x1=1-2*(j+W)/A,it.y1=1-2*(mt+W)/N,it.y0=-1+2*(Mt+W)/N,it}function ie(A,N,W,Z,j,mt,Mt){const Pt=Math.cos(Mt);A.position.set(N+Math.sin(mt)*Pt*j,W+Math.sin(Mt)*j,Z+Math.cos(mt)*Pt*j),U.set(-Mt,mt,0,"YXZ"),A.quaternion.setFromEuler(U),A.updateMatrixWorld(!0)}function qt(){Number.isFinite(n.tx)||(n.tx=0),Number.isFinite(n.ty)||(n.ty=0),Number.isFinite(n.tz)||(n.tz=0),Number.isFinite(n.yaw)||(n.yaw=0),Number.isFinite(n.pitch)||(n.pitch=pa),n.d>=.5||(n.d=Number.isFinite(n.d)?.5:40);const A=n.d,N=Math.cos(n.pitch);t.position.set(n.tx+Math.sin(n.yaw)*N*A,n.ty+Math.sin(n.pitch)*A,n.tz+Math.cos(n.yaw)*N*A),(ut.yaw!==n.yaw||ut.pitch!==n.pitch)&&(U.set(-n.pitch,n.yaw,0,"YXZ"),t.quaternion.setFromEuler(U),ut.yaw=n.yaw,ut.pitch=n.pitch);let W=H();if(m.t>0){const j=1-m.t/Yf,mt=j<.2?j/.2:(1-j)/.8,Mt=mt*mt*(3-2*mt);W+=DM*m.k*Mt;const Pt=zM*m.k*Mt,Xt=Pt*Math.sin(j*41);t.position.x+=Math.cos(n.yaw)*Xt,t.position.z-=Math.sin(n.yaw)*Xt,t.position.y+=Pt*.6*Math.cos(j*33),ut.kicked=!0}else ut.kicked=!1;t.updateMatrixWorld(!0),ut.tx=n.tx,ut.ty=n.ty,ut.tz=n.tz,ut.dd=n.d;const Z=Math.abs(A-ut.d)>ut.d*.04||t.aspect!==ut.aspect;if(Z){ut.d=A,ut.aspect=t.aspect,t.near=Math.min(8,Math.max(.3,A*.14));let j=A*1.6+ot*1.3+60;const mt=i.scene&&i.scene.fog;mt&&mt.isFog&&(mt.near=A*.9+ot*.45,mt.far=mt.near+ot*1.3+40,j<mt.far+5&&(j=mt.far+5)),t.far=j}(Z||t.fov!==W)&&(t.fov=W,t.updateProjectionMatrix())}function se(){const A=H();e.fov===A&&e.aspect===t.aspect&&e.near===.1||(e.fov=A,e.aspect=t.aspect,e.near=.1,e.far=4e3,e.updateProjectionMatrix())}function Yt(A,N,W){v>=Do||!Number.isFinite(A)||!Number.isFinite(W)||(P[v]=A,b[v]=Qe(N,0),w[v]=W,v++)}const E=new XM;function C(A,N,W,Z){ie(e,A,N,W,Z,h.yaw,h.pitch),E.x0=1/0,E.x1=-1/0,E.y0=1/0,E.y1=-1/0;for(let j=0;j<v;j++){if(_.set(P[j],b[j],w[j]).applyMatrix4(e.matrixWorldInverse),_.z>-.2)return!1;_.applyMatrix4(e.projectionMatrix),_.x<E.x0&&(E.x0=_.x),_.x>E.x1&&(E.x1=_.x),_.y<E.y0&&(E.y0=_.y),_.y>E.y1&&(E.y1=_.y)}return!0}function lt(A,N,W,Z,j){if(T.copy(A.position),z.set(N,W,.5).unproject(A).sub(T).normalize(),z.y>-1e-4)return!1;const mt=(Z-T.y)/z.y;return j.tx=T.x+z.x*mt,j.tz=T.z+z.z*mt,!0}function ht(A,N){if(se(),N.yaw=h.yaw,N.pitch=h.pitch,v===0)return N.tx=0,N.ty=0,N.tz=0,N.d=40,N;let W=0,Z=0,j=0;for(let re=0;re<v;re++)W+=P[re],Z+=b[re],j+=w[re];W/=v,Z/=v,j/=v;const mt=A.x1-A.x0,Mt=A.y1-A.y0,Pt=(A.x0+A.x1)/2,Xt=(A.y0+A.y1)/2;let ee=40;for(let re=0;re<3;re++){let I=1,L=1500;for(let F=0;F<30;F++)ee=(I+L)/2,C(W,Z,j,ee)&&E.x1-E.x0<=mt&&E.y1-E.y0<=Mt?L=ee:I=ee;if(ee=L,!C(W,Z,j,ee))break;lt(e,(E.x0+E.x1)/2-Pt,(E.y0+E.y1)/2-Xt,Z,l)&&(W=l.tx,j=l.tz)}return N.tx=W,N.ty=Z,N.tz=j,N.d=ee,N}function bt(A,N,W){return se(),C(N.tx,N.ty,N.tz,W)?E.x0>=A.x0-1e-6&&E.x1<=A.x1+1e-6&&E.y0>=A.y0-1e-6&&E.y1<=A.y1+1e-6:!1}const At=()=>tt()*2*Mn/(EM*2*rt());function Jt(){if(!Y)return;h.yaw=J,h.pitch=pa,v=0;const A=Y.bounds,N=Y.ground&&Y.ground.length?Y.ground:null;if(N){const Z=Math.max(1,Math.ceil(N.length/40));for(let j=0;j<N.length;j+=Z)Yt(N[j].x,Tt(N[j].x,N[j].z),N[j].z)}Yt(A.minx,Tt(A.minx,A.minz),A.minz),Yt(A.maxx,Tt(A.maxx,A.minz),A.minz),Yt(A.minx,Tt(A.minx,A.maxz),A.maxz),Yt(A.maxx,Tt(A.maxx,A.maxz),A.maxz);const W=Y.cup;Yt(W.x,Tt(W.x,W.z)+Io,W.z),ht(jt(),o)}function Vt(A,N,W,Z,j){for(let mt=0;mt<Z;mt++){const Mt=mt/Z*Ul,Pt=A+Math.cos(Mt)*W,Xt=N+Math.sin(Mt)*W;Yt(Pt,Tt(Pt,Xt)+j,Xt)}}function Ht(A,N){if(!A||A.length<2)return;const W=A.length>>1,Z=Math.max(1,Math.ceil(W/N));for(let j=0;j<W;j+=Z)Yt(A[2*j],Tt(A[2*j],A[2*j+1]),A[2*j+1]);Yt(A[2*W-2],Tt(A[2*W-2],A[2*W-1]),A[2*W-1])}function de(A,N,W,Z){v=0;const j=Tt(A,N);if(Vt(A,N,W+Mn*1.15,24,Mn),Vt(A,N,W,12,2*Mn),Yt(A,j+2*Mn,N),Yt(A,j,N),Z){const mt=Tt(Z.x,Z.z);Yt(Z.x,mt+2*Mn,Z.z),Vt(Z.x,Z.z,Mn*1.1,6,Mn)}}function Ot(){if(nt===1&&O)O.cue&&Ht(O.cue.points,10),O.eight&&Ht(O.eight.points,14);else if(nt===0)for(let A=1;A<=4;A++){const N=x.ex+x.dx*x.len*(A/4),W=x.ez+x.dz*x.len*(A/4);Yt(N,Tt(N,W),W)}}function Qt(A,N,W,Z,j,mt,Mt){h.yaw=Math.atan2(-j,-mt),h.pitch=Po;const Pt=jt();de(A,N,W,Z);const Xt=v;if(Ot(),ht(Pt,Mt),Y&&Y.cup){const L=Y.cup,F=Math.sqrt((L.x-A)*(L.x-A)+(L.z-N)*(L.z-N));let $=Fo(18,8,F);const G=(L.x-A)*j+(L.z-N)*mt;if($>0&&G>-1){const vt=v;Vt(L.x,L.z,Kt.HOLE_R+.6,8,0),Yt(L.x,Tt(L.x,L.z)+Io,L.z),ht(Pt,c),v=Xt;let yt=!1;for(let Ft=0;Ft<4&&!yt;Ft++,$*=.5)ne(l,Mt,c,$),yt=bt(Pt,l,l.d);yt&&Rt(Mt,l),v=vt}}const ee=Y&&Y.camera&&Y.camera.zoom>0?Y.camera.zoom:1;Mt.d=Math.max(8,Mt.d/ee);const re=Math.max(8,At());if(de(A,N,W,Z),ht(Pt,c),c.d>re)Rt(Mt,c);else if(Mt.d>re&&(Mt.d=re),!bt(Pt,Mt,Mt.d)){const L=Mt.tx,F=Mt.ty,$=Mt.tz;let G=!1;for(let vt=1;vt<=8;vt++){const yt=vt/8;if(l.tx=L+(c.tx-L)*yt,l.ty=F+(c.ty-F)*yt,l.tz=$+(c.tz-$)*yt,bt(Pt,l,Mt.d)){G=!0;break}}G?(Mt.tx=l.tx,Mt.ty=l.ty,Mt.tz=l.tz):Rt(Mt,c)}const I=Math.min(1/(2*AM*rt()),.85*re);return Mt.d<I*1.35&&(Mt.d=Math.min(I*1.35,Math.max(Mt.d,re))),gt.ex=A,gt.ez=N,gt.eh=Tt(A,N)+Mn,gt.dLo=I,he(Mt,Pt,Z),Mt.yaw=h.yaw,Mt.pitch=h.pitch,Mt}function he(A,N,W){if(se(),!bt(N,A,A.d))return;const Z=Math.cos(h.yaw),j=-Math.sin(h.yaw),mt=-Math.sin(h.yaw),Mt=-Math.cos(h.yaw),Pt=u;if(W){ie(e,A.tx,A.ty,A.tz,A.d,h.yaw,h.pitch);const G=Tt(W.x,W.z)+Mn;if(_.set(W.x,G,W.z).project(e),lt(e,(N.x0+N.x1)/2,_.y,G,Pt)){const vt=(W.x-Pt.tx)*Z+(W.z-Pt.tz)*j;let yt=0,Ft=1;if(Pt.ty=A.ty,Pt.tx=A.tx+Z*vt,Pt.tz=A.tz+j*vt,bt(N,Pt,A.d))yt=1;else for(let Gt=0;Gt<8;Gt++){const ae=(yt+Ft)/2;Pt.tx=A.tx+Z*vt*ae,Pt.tz=A.tz+j*vt*ae,bt(N,Pt,A.d)?yt=ae:Ft=ae}A.tx+=Z*vt*yt,A.tz+=j*vt*yt}}let Xt=0,ee=A.d*1.2;Pt.ty=A.ty;const re=Math.cos(h.pitch)*A.d,I=A.ty+Math.sin(h.pitch)*A.d-gt.eh,L=Math.sin(h.yaw)*re,F=Math.cos(h.yaw)*re,$=gt.dLo*gt.dLo;for(let G=0;G<12;G++){const vt=(Xt+ee)/2;Pt.tx=A.tx+mt*vt,Pt.tz=A.tz+Mt*vt;const yt=Pt.tx+L-gt.ex,Ft=Pt.tz+F-gt.ez;yt*yt+Ft*Ft+I*I>=$&&bt(N,Pt,A.d)?Xt=vt:ee=vt}A.tx+=mt*Xt*qf,A.tz+=Mt*Xt*qf}function ne(A,N,W,Z){A.tx=N.tx+(W.tx-N.tx)*Z,A.ty=N.ty+(W.ty-N.ty)*Z,A.tz=N.tz+(W.tz-N.tz)*Z,A.d=Math.exp(Math.log(N.d)+(Math.log(W.d)-Math.log(N.d))*Z),A.yaw=N.yaw,A.pitch=N.pitch}function Wt(A){const N=Y.eight,W=Y.cup;let Z=W.x-N.x,j=W.z-N.z;const mt=Math.sqrt(Z*Z+j*j)||1;Z/=mt,j/=mt;const Mt=Y.placeR||4,Pt=Math.min(.6*Mt,2.5);return X.x=N.x-Z*Pt,X.z=N.z-j*Pt,x.ex=N.x,x.ez=N.z,x.dx=Z,x.dz=j,x.len=Math.min(14,mt),nt=0,Qt(N.x,N.z,Mt,X,Z,j,A),nt=-1,A}function xe(A,N){const W=A&&A.world,Z=W&&W.balls&&W.balls[1];if(!Z)return Wt(N);const j=A.level&&A.level.placeR||W.placeR||4,mt=A.intent;let Mt=null;mt&&Number.isFinite(mt.x)&&Number.isFinite(mt.z)&&(X.x=mt.x,X.z=mt.z,Mt=X);let Pt=mt&&Number.isFinite(mt.ax)?mt.ax:mt&&Number.isFinite(mt.dx)?mt.dx:0,Xt=mt&&Number.isFinite(mt.az)?mt.az:mt&&Number.isFinite(mt.dz)?mt.dz:0;Pt*Pt+Xt*Xt>1e-8||(Mt?(Pt=Z.x-Mt.x,Xt=Z.z-Mt.z):Y&&(Pt=Y.cup.x-Z.x,Xt=Y.cup.z-Z.z),Pt*Pt+Xt*Xt>1e-8||(Pt=1,Xt=0));const ee=Math.sqrt(Pt*Pt+Xt*Xt);return Pt/=ee,Xt/=ee,O=typeof A.guide=="function"?A.guide():null,nt=1,Qt(Z.x,Z.z,j,Mt,Pt,Xt,N),nt=-1,O=null,g.intent=mt,g.ax=Pt,g.az=Xt,g.x=Mt?Mt.x:NaN,g.z=Mt?Mt.z:NaN,g.ex=Z.x,g.ez=Z.z,N}const pe=A=>A<Kf?Kf:A>zo?zo:A;function Me(A){xe(A,a),V(a),a.valid=!0;const N=A.intent,W=A.world.balls[1];se(),ie(e,a.tx,a.ty,a.tz,a.d,a.yaw,a.pitch);const Z=Tt(N.x,N.z)+Mn;_.set(N.x,Z,N.z),p.D=Math.max(1,e.position.distanceTo(_)),_.project(e),p.sx=Math.max(-.95,Math.min(.95,Qe(_.x,0))),p.sy=Math.max(-.95,Math.min(.95,Qe(_.y,-.3))),p.cx=N.x,p.cz=N.z,p.ex=W.x,p.ez=W.z,p.valid=!0}function ct(){const A=K;if(!A||A.state!=="ready"||!A.world||!A.intent)return!1;const N=A.intent,W=be.placing||be.pulling||be.strike>=0;if(!(!W&&N===y.seenI&&p.valid))if(W){if(!y.init)return!1}else{y.seenI=N;const Z=A.world.balls[1];(!p.valid||N.x!==p.cx||N.z!==p.cz||!Z||Z.x!==p.ex||Z.z!==p.ez)&&(Me(A),y.sync=1),Number.isFinite(N.ax)&&Number.isFinite(N.az)&&N.ax*N.ax+N.az*N.az>1e-10&&(S[si]=Math.atan2(-N.ax,-N.az));const j=Tt(p.cx,p.cz);S[br]=p.cx,S[No]=j+Mn,S[Uo]=p.cz,S[vc]=j}return S[ss]=pe(Po+y.userPitch),S[rs]=Math.log(p.D*y.userZoom),S[Os]=p.sx,S[ks]=p.sy,!0}function Ct(){for(let yt=br;yt<=vc;yt++)M[yt]=S[yt];const A=n.yaw,N=n.pitch,W=Math.sin(A),Z=Math.cos(A),j=Math.sin(N),mt=Math.cos(N),Mt=n.tx+W*mt*n.d,Pt=n.ty+j*n.d,Xt=n.tz+Z*mt*n.d,ee=M[br]-Mt,re=M[No]-Pt,I=M[Uo]-Xt,L=Math.sqrt(ee*ee+re*re+I*I);M[si]=A,M[ss]=N,M[rs]=Math.log(Math.max(1,L));const F=ee*-W*mt+re*-j+I*-Z*mt,$=i.fov,G=Math.tan(($>1&&$<170?$:ci)*An/2),vt=t.aspect>0?t.aspect:16/9;if(F>.5){const yt=(ee*Z-I*W)/(F*G*vt),Ft=(ee*-W*j+re*mt+I*-Z*j)/(F*G);M[Os]=yt<-.95?-.95:yt>.95?.95:yt,M[ks]=Ft<-.95?-.95:Ft>.95?.95:Ft}else M[Os]=S[Os],M[ks]=S[ks];for(let yt=0;yt<os;yt++)R[yt]=0;y.init=!0,y.sync=1}function _t(){const A=gt.dt;if(!(A>0))return;const N=be.aiming===!0;let W=!0;for(let Z=0;Z<os;Z++){let j=xc;Z===si?j=y.sync&&!N?xc:NM:(Z===ss||Z===rs)&&(j=y.sync?xc:UM);const mt=2/j,Mt=mt*A,Pt=1/(1+Mt+.48*Mt*Mt+.235*Mt*Mt*Mt);let Xt=M[Z]-S[Z];Z===si&&(Xt=Zn(Xt));const ee=(R[Z]+mt*Xt)*A;R[Z]=(R[Z]-mt*ee)*Pt;let re=S[Z]+(Xt+ee)*Pt;Z===si&&(re=Zn(re)),M[Z]=re,(Math.abs(Z===si?Zn(M[Z]-S[Z]):M[Z]-S[Z])>1e-6||Math.abs(R[Z])>1e-5)&&(W=!1)}if(W)for(let Z=0;Z<os;Z++)M[Z]=S[Z],R[Z]=0;if(y.sync&&Math.abs(Zn(M[si]-S[si]))<.004&&Math.abs(M[ss]-S[ss])<.004&&Math.abs(M[rs]-S[rs])<.01&&(y.sync=0),!Number.isFinite(M[si]+M[ss]+M[rs]+M[Os]+M[ks]+M[br]+M[No]+M[Uo]))for(let Z=0;Z<os;Z++)M[Z]=S[Z],R[Z]=0}function Et(A,N){const W=i.fov,Z=Math.tan((W>1&&W<170?W:ci)*An/2),j=t.aspect>0?t.aspect:16/9,mt=A[Os]*Z*j,Mt=A[ks]*Z,Pt=A[si],Xt=A[ss],ee=Math.sin(Pt),re=Math.cos(Pt),I=Math.sin(Xt),L=Math.cos(Xt);let F=re*mt-ee*I*Mt-ee*L,$=L*Mt-I,G=-ee*mt-re*I*Mt-re*L;const vt=Math.sqrt(F*F+$*$+G*G),yt=Math.exp(A[rs]);F/=vt,$/=vt,G/=vt;const Ft=A[br]-F*yt,Gt=A[No]-$*yt,ae=A[Uo]-G*yt,at=A[vc],dt=Math.max(.5,(Gt-at)/Math.max(.05,I));N.tx=Ft-ee*L*dt,N.ty=Gt-I*dt,N.tz=ae-re*L*dt,N.d=dt,N.yaw=Pt,N.pitch=Xt}function Ut(A){if(!Y)return;const N=Y.bounds,W=Xf+.6*Qe(A.d,40);A.tx=Math.min(N.maxx+W,Math.max(N.minx-W,Qe(A.tx,0))),A.tz=Math.min(N.maxz+W,Math.max(N.minz-W,Qe(A.tz,0))),A.d=Math.min(st(),Math.max(St(),Qe(A.d,40)))}const st=()=>Math.max(10,o.d*1.1),St=()=>Math.max(4,.25*(a.valid?a.d:o.d*.5));function Rt(A,N){A.tx=N.tx,A.ty=N.ty,A.tz=N.tz,A.d=N.d,A.yaw=N.yaw,A.pitch=N.pitch}function It(){r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,r.yaw.v=0,r.pitch.v=0}function Bt(A){Rt(n,A),Rt(s,A),It(),qt()}function le(){if(!d.active)return;d.active=!1,Rt(n,d.to),Rt(s,a.valid?a:d.to),It(),k=D?"overview":"play",y.init=!1,D&&Rt(s,o);const A=d.resolve;d.resolve=null,A&&A()}i.onResize(()=>{const A=i.yaw||0,N=A!==J;if(J=A,qt(),!!Y){if(Jt(),d.active){Rt(d.from,o),Wt(d.to),a.valid&&K&&(xe(K,a),Rt(d.to,a));return}p.valid=!1,K&&!q&&K.state==="ready"&&(Me(K),y.sync=1),D||k==="overview"?Rt(s,o):k==="play"&&!q&&a.valid&&Rt(s,a),Ut(s),N&&(Bt(s),y.init=!1)}});const te={get userMoved(){return q},set userMoved(A){q=!!A},get level(){return Y},get mode(){return k},get overviewOn(){return D},get yaw(){return n.yaw},get pitch(){return n.pitch},get goalYaw(){return d.active?d.to.yaw:s.yaw},get goalPitch(){return d.active?d.to.pitch:s.pitch},get fov(){return t.fov},get userPitch(){return y.userPitch},get userZoom(){return y.userZoom},setInsets(A){const N=Mt=>Number.isFinite(Mt)&&Mt>0?Mt:0,W=N(A&&A.top),Z=N(A&&A.right),j=N(A&&A.bottom),mt=N(A&&A.left);if(!(W===B.top&&Z===B.right&&j===B.bottom&&mt===B.left)&&(B.top=W,B.right=Z,B.bottom=j,B.left=mt,!!Y)){if(Jt(),d.active){a.valid&&K?(xe(K,a),Rt(d.to,a)):Wt(d.to);return}p.valid=!1,!q&&(K&&K.state==="ready"&&(Me(K),y.sync=1),D||k==="overview"?Rt(s,o):k==="play"&&a.valid?Rt(s,a):k==="cup"&&te.frameCup())}},get insets(){return{top:B.top,right:B.right,bottom:B.bottom,left:B.left}},setLevel(A){if(d.active&&le(),Y=A||null,Q=0,xt=0,Y&&Y.grid&&Y.grid.height){const N=Y.grid.height;Q=1/0,xt=-1/0;for(let W=0;W<N.length;W++)N[W]<Q&&(Q=N[W]),N[W]>xt&&(xt=N[W]);Number.isFinite(Q)||(Q=0,xt=0)}if(Y&&Y.bounds){const N=Y.bounds;ot=Math.max(20,Math.sqrt((N.maxx-N.minx)*(N.maxx-N.minx)+(N.maxz-N.minz)*(N.maxz-N.minz)))}q=!1,D=!1,K=null,a.valid=!1,f.has=!1,g.intent=null,m.t=0,p.valid=!1,y.init=!1,y.userPitch=0,y.userZoom=1,J=i.yaw||0,ut.d=0,i.setShadowBounds&&i.setShadowBounds(Y),Y&&(Jt(),k="overview",Bt(o))},intro(A){return d.active&&le(),Y?(Jt(),Rt(d.from,o),A&&A.state==="ready"&&A.world&&A.level===Y?(K=A,Me(A),Rt(d.to,a)):Wt(d.to),d.t=0,d.active=!0,k="intro",Bt(o),new Promise(N=>{d.resolve=N})):Promise.resolve()},skipIntro(){le()},frameShot(A){if(Y){if(K=A||K,K&&K.state==="ready"&&K.world&&K.intent?Me(K):(xe(K,a),V(a),a.valid=!0,p.valid=!1),q=!1,f.has=!1,d.active){Rt(d.to,a);return}D||(k!=="play"&&(y.init=!1),k="play",Rt(s,a))}},follow(A,N){if(!(!Y||d.active||D||q||!Number.isFinite(A)||!Number.isFinite(N))){if(k!=="follow"||!f.has){f.lastX=A,f.lastZ=N,f.vx=0,f.vz=0,f.age=0,f.yaw=n.yaw;const W=a.valid?a.d:n.d;f.baseD=Math.min(Math.max(6,W*PM),Math.max(8,At()))}k="follow",f.x=A,f.z=N,f.has=!0,f.fresh=!0}},frameCup(){if(!Y||d.active)return;h.yaw=n.yaw,h.pitch=bM,v=0;const A=Y.cup;Vt(A.x,A.z,Kt.HOLE_R+2,12,0),Yt(A.x,Tt(A.x,A.z)+Io,A.z),ht(jt(),s),s.d=Math.max(s.d,10),Ut(s),k="cup"},overview(A){Y&&(D=!!A,!d.active&&(q=!1,D?(Jt(),k="overview",Rt(s,o)):a.valid&&(K&&K.state==="ready"&&Me(K),k="play",y.init=!1,Rt(s,a))))},zoomBy(A,N,W){if(!Y||!(A>0)||!Number.isFinite(A))return;if(d.active&&le(),!(D||k==="overview")){const F=y.userZoom/A;y.userZoom=F<$f?$f:F>jf?jf:F;return}const Z=pt(),j=tt(),mt=Number.isFinite(N)?N/Z*2-1:0,Mt=Number.isFinite(W)?1-W/j*2:0;qt(),se(),ie(e,n.tx,n.ty,n.tz,n.d,n.yaw,n.pitch);const Pt=c,Xt=lt(e,mt,Mt,n.ty,Pt),ee=Pt.tx,re=Pt.tz,I=Math.min(st(),Math.max(St(),n.d/A));ie(e,n.tx,n.ty,n.tz,I,n.yaw,n.pitch);const L=lt(e,mt,Mt,n.ty,Pt);n.d=I,Xt&&L&&(n.tx+=ee-Pt.tx,n.tz+=re-Pt.tz),Ut(n),q=!0,Bt(n)},tilt(A){if(!Number.isFinite(A))return;const N=pe(Po+y.userPitch+A);y.userPitch=N-Po},panBy(A,N){if(!Y||!Number.isFinite(A)||!Number.isFinite(N)||!(D||k==="overview"))return;d.active&&le();const W=tt()/(2*Math.max(1,n.d)*rt()),Z=Math.cos(n.yaw),j=-Math.sin(n.yaw),mt=-Math.sin(n.yaw),Mt=-Math.cos(n.yaw),Pt=Math.max(.3,Math.sin(n.pitch)),Xt=-A/W,ee=N/(W*Pt);n.tx+=Z*Xt+mt*ee,n.tz+=j*Xt+Mt*ee,Ut(n),q=!0,Bt(n)},kick(A){A=Number.isFinite(A)?Math.min(1,A):0,A>.02&&(m.t=Yf,m.k=A)},update(A){if(A=Number.isFinite(A)&&A>0?Math.min(A,.1):0,m.t>0&&(m.t=Math.max(0,m.t-A)),d.active){d.t+=A;const Z=d.from,j=d.to;if(d.t<Lo){const mt=d.t/Lo;Rt(n,Z),n.d=Z.d*(1.04-.04*(mt*(2-mt)))}else{const mt=FM(Math.min(1,(d.t-Lo)/Vf));n.tx=Z.tx+(j.tx-Z.tx)*mt,n.ty=Z.ty+(j.ty-Z.ty)*mt,n.tz=Z.tz+(j.tz-Z.tz)*mt,n.d=Math.exp(Math.log(Z.d)+(Math.log(j.d)-Math.log(Z.d))*mt),n.yaw=Zn(Z.yaw+Zn(j.yaw-Z.yaw)*mt),n.pitch=Z.pitch+(j.pitch-Z.pitch)*mt}qt(),d.t>=Lo+Vf&&le();return}if(gt.dt=A,k==="play"&&!q&&!D&&ct()){if(y.init||Ct(),_t(),Et(M,n),Et(S,s),It(),f.fresh=!1,n.tx===ut.tx&&n.ty===ut.ty&&n.tz===ut.tz&&n.d===ut.dd&&n.yaw===ut.yaw&&n.pitch===ut.pitch&&m.t<=0&&!ut.kicked&&t.fov===H())return;qt();return}let N=.25,W=CM;gt.pin=0,k==="follow"&&f.has&&!q&&!D?(N=.3,W=.25,Ee(),gt.pin=1):k==="overview"?(N=.3,W=.3):k==="cup"&&(N=.45,W=.45),f.fresh=!1,!q&&A>0&&(gt.T=N,gt.Ty=W,ye()),!(n.tx===ut.tx&&n.ty===ut.ty&&n.tz===ut.tz&&n.d===ut.dd&&n.yaw===ut.yaw&&n.pitch===ut.pitch&&m.t<=0&&!ut.kicked&&t.fov===H())&&qt()},screenToGround(A,N){if(!Number.isFinite(A)||!Number.isFinite(N))return null;const W=A/pt()*2-1,Z=1-N/tt()*2;if(T.copy(t.position),z.set(W,Z,.5).unproject(t).sub(T).normalize(),!(z.y<-1e-5))return null;const j=xt+.01,mt=Q-.01;let Mt=Math.max(0,(j-T.y)/z.y);const Pt=Math.max(Mt,(mt-T.y)/z.y),Xt=Ft=>T.y+z.y*Ft-Tt(T.x+z.x*Ft,T.z+z.z*Ft);if(!Y||Pt-Mt<1e-6){const Ft=xt===Q?(xt-T.y)/z.y:Mt;return{x:T.x+z.x*Ft,z:T.z+z.z*Ft}}const ee=Math.sqrt(z.x*z.x+z.z*z.z),re=Math.min(600,Math.max(1,Math.ceil((Pt-Mt)*ee/.2))),I=(Pt-Mt)/re;let L=Xt(Mt),F=Mt,$=L<=0;if(!$)for(let Ft=1;Ft<=re;Ft++){F=Mt+I*Ft;const Gt=Xt(F);if(Gt<=0){$=!0;break}Mt=F,L=Gt}$||(F=Pt);let G=Mt,vt=F;for(let Ft=0;Ft<24&&vt-G>1e-5;Ft++){const Gt=(G+vt)/2;Xt(Gt)>0?G=Gt:vt=Gt}const yt=(G+vt)/2;return{x:T.x+z.x*yt,z:T.z+z.z*yt}},groundToScreen(A,N,W,Z){const j=Z||{x:0,y:0,onScreen:!1};_.set(Qe(A,0),Qe(N,0),Qe(W,0)).applyMatrix4(t.matrixWorldInverse);const mt=_.z>-t.near;mt&&(_.z=-t.near),_.applyMatrix4(t.projectionMatrix);const Mt=pt(),Pt=tt();let Xt=(_.x+1)/2*Mt,ee=(1-_.y)/2*Pt;return mt&&(Xt=Mt-Xt,ee=Pt-ee),j.x=Qe(Xt,Mt/2),j.y=Qe(ee,Pt/2),j.onScreen=!mt&&j.x>=0&&j.x<=Mt&&j.y>=0&&j.y<=Pt,j},pxPerMetre(A,N){const W=Tt(Qe(A,0),Qe(N,0))+Mn,Z=t.position.distanceTo(_.set(Qe(A,0),W,Qe(N,0))),j=tt()/(2*Math.max(.01,Z)*Math.tan(t.fov*An/2));return Number.isFinite(j)?j:1}};i.kickCamera=A=>te.kick(A);function ye(){const A=gt.dt;let N=2/Math.max(1e-4,gt.T),W=N*A,Z=1/(1+W+.48*W*W+.235*W*W*W),j,mt;if(gt.pin){const Pt=.3+-.255*Fo(0,.6,f.age),Xt=Math.exp(-A/Pt);n.tx=s.tx+(n.tx-s.tx)*Xt,n.ty=s.ty+(n.ty-s.ty)*Xt,n.tz=s.tz+(n.tz-s.tz)*Xt,r.x.v=0,r.y.v=0,r.z.v=0}else j=n.tx-s.tx,mt=(r.x.v+N*j)*A,r.x.v=(r.x.v-N*mt)*Z,n.tx=s.tx+(j+mt)*Z,j=n.ty-s.ty,mt=(r.y.v+N*j)*A,r.y.v=(r.y.v-N*mt)*Z,n.ty=s.ty+(j+mt)*Z,j=n.tz-s.tz,mt=(r.z.v+N*j)*A,r.z.v=(r.z.v-N*mt)*Z,n.tz=s.tz+(j+mt)*Z;N=2/Math.max(1e-4,gt.T*1.6),W=N*A,Z=1/(1+W+.48*W*W+.235*W*W*W);const Mt=Math.log(Math.max(.5,s.d));j=Math.log(Math.max(.5,n.d))-Mt,mt=(r.d.v+N*j)*A,r.d.v=(r.d.v-N*mt)*Z,n.d=Math.exp(Mt+(j+mt)*Z),N=2/Math.max(1e-4,gt.Ty),W=N*A,Z=1/(1+W+.48*W*W+.235*W*W*W),j=Zn(n.yaw-s.yaw),mt=(r.yaw.v+N*j)*A,r.yaw.v=(r.yaw.v-N*mt)*Z,n.yaw=Zn(s.yaw+(j+mt)*Z),j=n.pitch-s.pitch,mt=(r.pitch.v+N*j)*A,r.pitch.v=(r.pitch.v-N*mt)*Z,n.pitch=s.pitch+(j+mt)*Z,Number.isFinite(n.tx+n.ty+n.tz+n.d+n.yaw+n.pitch)||(Rt(n,s),It()),Math.abs(n.tx-s.tx)+Math.abs(n.ty-s.ty)+Math.abs(n.tz-s.tz)<1e-4&&Math.abs(n.d-s.d)<1e-4*s.d&&Math.abs(Zn(n.yaw-s.yaw))+Math.abs(n.pitch-s.pitch)<1e-5&&Math.abs(r.x.v)+Math.abs(r.y.v)+Math.abs(r.z.v)+Math.abs(r.d.v)+Math.abs(r.yaw.v)+Math.abs(r.pitch.v)<1e-4&&(Rt(n,s),It())}function Ee(){const A=gt.dt;if(A>0&&f.fresh){const j=(f.x-f.lastX)/A,mt=(f.z-f.lastZ)/A,Mt=1-Math.exp(-A/.12);Number.isFinite(j)&&Number.isFinite(mt)&&Math.abs(j)<400&&Math.abs(mt)<400&&(f.vx+=(j-f.vx)*Mt,f.vz+=(mt-f.vz)*Mt)}else if(A>0){const j=Math.exp(-A/.3);f.vx*=j,f.vz*=j}f.lastX=f.x,f.lastZ=f.z,f.age+=A;const N=Math.sqrt(f.vx*f.vx+f.vz*f.vz);if(N>1.5&&A>0){const j=Zn(Math.atan2(-f.vx,-f.vz)-f.yaw),mt=Math.abs(j),Mt=mt<1.75?1:mt>2.6?0:1-(mt-1.75)/.85;let Pt=j*(1-Math.exp(-A/LM))*Mt*Fo(1.5,8,N);const Xt=IM*A;Pt>Xt?Pt=Xt:Pt<-Xt&&(Pt=-Xt),f.yaw=Zn(f.yaw+Pt)}s.yaw=f.yaw;{const j=wM+y.userPitch;s.pitch=j<14*An?14*An:j>zo?zo:j}const W=jt();h.yaw=s.yaw,h.pitch=s.pitch;{const j=i.fov,mt=Math.tan((j>1&&j<170?j:ci)*An/2),Mt=t.aspect>0?t.aspect:16/9,Pt=(W.x0+W.x1)/2*mt*Mt,Xt=(W.y0+RM*(W.y1-W.y0))*mt,ee=Math.sin(h.yaw),re=Math.cos(h.yaw),I=Math.sin(h.pitch),L=Math.cos(h.pitch),F=re*Pt-ee*I*Xt-ee*L,$=L*Xt-I,G=-ee*Pt-re*I*Xt-re*L;if($<-1e-4){const vt=-I/$;f.ox=ee*L+F*vt,f.oz=re*L+G*vt}else f.ox=0,f.oz=0}let Z=f.baseD*y.userZoom;{const j=st();Z>j&&(Z=j),Z<4&&(Z=4)}if(Y&&Y.cup){const j=Y.cup,mt=Math.sqrt((j.x-f.x)*(j.x-f.x)+(j.z-f.z)*(j.z-f.z)),Mt=Fo(15,6,mt),Pt=(j.x-f.x)*-Math.sin(h.yaw)+(j.z-f.z)*-Math.cos(h.yaw);if(Mt>0&&Pt>-3){v=0;const Xt=Tt(j.x,j.z);Yt(j.x,Xt+Io,j.z),Vt(j.x,j.z,Kt.HOLE_R+.4,6,0),Yt(f.x,Tt(f.x,f.z)+2*Mn,f.z);const ee=Tt(f.x,f.z);let re=Z,I=Math.max(Z,Math.min(Z*2.2,At()*1.3));if(ft.ty=ee,ft.tx=f.x-f.ox*re,ft.tz=f.z-f.oz*re,!bt(W,ft,re)){if(ft.tx=f.x-f.ox*I,ft.tz=f.z-f.oz*I,bt(W,ft,I))for(let L=0;L<12;L++){const F=(re+I)/2;ft.tx=f.x-f.ox*F,ft.tz=f.z-f.oz*F,bt(W,ft,F)?I=F:re=F}Z+=(I-Z)*Mt}}}s.tx=f.x-f.ox*Z,s.tz=f.z-f.oz*Z,s.ty=Tt(f.x,f.z),s.d=Z,Ut(s)}function V(A){if(!Y)return;const N=Y.bounds,W=Xf+.6*Qe(A.d,30);A.tx=Math.min(N.maxx+W,Math.max(N.minx-W,Qe(A.tx,0))),A.tz=Math.min(N.maxz+W,Math.max(N.minz-W,Qe(A.tz,0))),A.d=Math.min(st(),Math.max(6,Qe(A.d,30)))}return qt(),te}function QM(i){let t=2166136261;for(let n=0;n<i.length;n++)t^=i.charCodeAt(n),t=Math.imul(t,16777619)>>>0;let e=t||1;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const fe=i=>new me(i),Ce=(i,t)=>new me(i.r*t,i.g*t,i.b*t),ia=(i,t,e)=>new me(i.r+(t.r-i.r)*e,i.g+(t.g-i.g)*e,i.b+(t.b-i.b)*e);function Ln(i,t,e,n="after"){if(!i.includes(t))throw new Error("course shader: injection target missing: "+t);return i.replace(t,n==="after"?t+`
`+e:n==="replace"?e:e+`
`+t)}const sa=i=>{const t=new Float64Array(i.length*2);for(let e=0;e<i.length;e++)t[e*2]=i[e].x,t[e*2+1]=i[e].z;return t};function Fl(i,t,e){let n=!1;const s=i.length;for(let r=0,o=s-2;r<s;o=r,r+=2){const a=i[r],c=i[r+1],l=i[o],u=i[o+1];c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(n=!n)}return n}function Zf(i,t,e,n,s){const r=i.length/2,o=t?r:r-1;let a=1/0;for(let c=0;c<o;c++){const l=(c+1)%r,u=i[c*2],d=i[c*2+1],f=i[l*2]-u,h=i[l*2+1]-d,g=f*f+h*h||1e-12;let x=((e-u)*f+(n-d)*h)/g;x=x<0?0:x>1?1:x;const m=u+f*x,p=d+h*x,y=(m-e)*(m-e)+(p-n)*(p-n);y<a&&(a=y,s.x=m,s.z=p,s.seg=c,s.t=x)}return s.d=Math.sqrt(a),s}function ty(i,t,e,n,s,r){const o=e-i,a=n-t,c=o*o+a*a||1e-12;let l=((s-i)*o+(r-t)*a)/c;l=l<0?0:l>1?1:l;const u=i+o*l-s,d=t+a*l-r;return Math.sqrt(u*u+d*d)}function Zd(i,t=6){const e=Math.max(2,Math.ceil(Math.abs(i.to-i.from)/t)),n=[];for(let s=0;s<=e;s++){const r=(i.from+(i.to-i.from)*s/e)*Math.PI/180;n.push({x:i.x+Math.cos(r)*i.r,z:i.z-Math.sin(r)*i.r})}return n}function ey(i){const t=sa(i.ground),e=t.length/2;let n=0;for(let p=0;p<e;p++){const y=(p+1)%e;n+=t[p*2]*t[y*2+1]-t[y*2]*t[p*2+1]}const s=n>0?1:-1,r=new Float64Array(e*2),o=new Float64Array(e);for(let p=0;p<e;p++){const y=(p+1)%e,M=t[y*2]-t[p*2],S=t[y*2+1]-t[p*2+1],R=Math.hypot(M,S)||1e-9;o[p]=R,r[p*2]=s*S/R,r[p*2+1]=-s*M/R}const a=[];for(const p of i.walls)a.push({poly:sa(p.pts),closed:p.closed});for(const p of i.arcsRender||[])a.push({poly:sa(Zd(p)),closed:!1});const c={d:0,x:0,z:0,seg:0,t:0},l=.25,u=new Int32Array(e+1),d=[];for(let p=0;p<e;p++){u[p]=d.length;const y=Math.max(1,Math.round(o[p]/l));for(let M=0;M<=y;M++){const S=M/y,R=t[p*2]+(t[(p+1)%e*2]-t[p*2])*S,P=t[p*2+1]+(t[(p+1)%e*2+1]-t[p*2+1])*S;let b=1/0;for(const w of a)Zf(w.poly,w.closed,R,P,c),c.d<b&&(b=c.d);d.push(b<.3?1:0)}}u[e]=d.length;const f=Uint8Array.from(d);let h=!1,g=!1;for(let p=0;p<f.length;p++)f[p]?g=!0:h=!0;const x={d:0,x:0,z:0,seg:0,t:0};return{poly:t,apronW:h?.75:3,count:e,segN:r,segLen:o,anyOpen:h,anyWalled:g,inside:(p,y)=>Fl(t,p,y),nearest:(p,y,M=x)=>Zf(t,!0,p,y,M),walled(p,y){const M=u[p],S=u[p+1]-1-M;return f[M+Math.round(y*S)]===1}}}const Oo=new et,ko=new et,Bo=new et,hn=new et,Jf=new et,Qf=new et;class ny{constructor(){this.pos=[],this.nor=[],this.col=[],this.leaf=[]}get triangles(){return this.pos.length/9}_v(t,e,n,s,r,o,a,c){this.pos.push(t,e,n),this.nor.push(s,r,o),this.col.push(a.r,a.g,a.b),this.leaf.push(c)}tri(t,e,n,s,r=0,o=null){Oo.set(t[0],t[1],t[2]),ko.set(e[0],e[1],e[2]),Bo.set(n[0],n[1],n[2]),Jf.subVectors(ko,Oo),Qf.subVectors(Bo,Oo),hn.crossVectors(Jf,Qf);const a=hn.length();if(a<1e-9)return;hn.multiplyScalar(1/a);let c=Oo,l=ko,u=Bo;o&&hn.x*o[0]+hn.y*o[1]+hn.z*o[2]<0&&(l=Bo,u=ko,hn.negate()),this._v(c.x,c.y,c.z,hn.x,hn.y,hn.z,s,r),this._v(l.x,l.y,l.z,hn.x,hn.y,hn.z,s,r),this._v(u.x,u.y,u.z,hn.x,hn.y,hn.z,s,r)}quad(t,e,n,s,r,o=0,a=null){this.tri(t,e,n,r,o,a),this.tri(t,n,s,r,o,a)}geo(t,e,{leaf:n=0,flat:s=!0,matrix:r=null}={}){const o=t.index?t.toNonIndexed():t;(s||!o.attributes.normal)&&o.computeVertexNormals();let a=o.attributes.position.array;const c=a.length/9,l=new Array(c);for(let d=0;d<c;d++){const f=d*9,h=a[f+3]-a[f],g=a[f+4]-a[f+1],x=a[f+5]-a[f+2],m=a[f+6]-a[f],p=a[f+7]-a[f+1],y=a[f+8]-a[f+2],M=g*y-x*p,S=x*m-h*y,R=h*p-g*m;if(M*M+S*S+R*R<1e-14){l[d]=null;continue}l[d]=e((a[f]+a[f+3]+a[f+6])/3,(a[f+1]+a[f+4]+a[f+7])/3,(a[f+2]+a[f+5]+a[f+8])/3,d)}r&&o.applyMatrix4(r),a=o.attributes.position.array;const u=o.attributes.normal.array;for(let d=0;d<c;d++){const f=l[d];if(!f)continue;const h=d*9;let g=!0;for(let x=0;x<9;x++)(!Number.isFinite(u[h+x])||!Number.isFinite(a[h+x]))&&(g=!1);if(g)for(let x=0;x<9;x+=3)this._v(a[h+x],a[h+x+1],a[h+x+2],u[h+x],u[h+x+1],u[h+x+2],f,n)}o!==t&&o.dispose(),t.dispose()}build(){const t=new Ze;return t.setAttribute("position",new Ie(this.pos,3)),t.setAttribute("normal",new Ie(this.nor,3)),t.setAttribute("color",new Ie(this.col,3)),t.setAttribute("aLeaf",new Ie(this.leaf,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const iy=new ze,th=new $i,eh=new et,_c=new et,sy=new et(0,1,0);function Xe(i,t,e,n=0,s=1){return eh.set(i,t,e),th.setFromAxisAngle(sy,n),Array.isArray(s)?_c.set(s[0],s[1],s[2]):_c.set(s,s,s),iy.compose(eh,th,_c).clone()}const ry={fairway:1,green:2,rough:3,sand:4,water:5,ice:6},oy=[1/16,4/16,6/16,4/16,1/16],Ho=[0,1/4,2/4,1/4,0];function as(i,t,e,n=oy){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=a+l<0?0:a+l>=t?t-1:a+l;c+=i[o*t+u]*n[l+2]}s[o*t+a]=c}for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=o+l<0?0:o+l>=e?e-1:o+l;c+=s[u*t+a]*n[l+2]}r[o*t+a]=c}return r}function ay(i,t,e,n){const r=new Float32Array(t*e);for(let a=0;a<r.length;a++)r[a]=i[a]?1e9:0;const o=Math.SQRT2;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c>0&&(u=Math.min(u,r[l-1]+1)),a>0&&(u=Math.min(u,r[l-t]+1),c>0&&(u=Math.min(u,r[l-t-1]+o)),c<t-1&&(u=Math.min(u,r[l-t+1]+o))),r[l]=u}for(let a=e-1;a>=0;a--)for(let c=t-1;c>=0;c--){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c<t-1&&(u=Math.min(u,r[l+1]+1)),a<e-1&&(u=Math.min(u,r[l+t]+1),c<t-1&&(u=Math.min(u,r[l+t+1]+o)),c>0&&(u=Math.min(u,r[l+t-1]+o))),r[l]=u}for(let a=0;a<r.length;a++)r[a]=r[a]>=1e9?50:r[a]>0?(r[a]-.5)*n:0;return r}function nh(i,t,e){const n=new iu(i,t,e,Wn,fi);return n.flipY=!1,n.magFilter=Vn,n.minFilter=Vn,n.generateMipmaps=!1,n.wrapS=bi,n.wrapT=bi,n.colorSpace=yi,n.needsUpdate=!0,n}function cy(i,t,e){const{cols:n,rows:s,cell:r,x0:o,z0:a,surface:c}=i.grid,l=n*s;let u=Uint8Array.from(c);for(let D=0;D<3;D++){const q=u;u=Uint8Array.from(q);for(let K=0;K<s;K++)for(let nt=0;nt<n;nt++){const O=K*n+nt;if(q[O]!==0)continue;const J=nt>0&&q[O-1]||nt<n-1&&q[O+1]||K>0&&q[O-n]||K<s-1&&q[O+n]||0;u[O]=J}}const d=new Float32Array(l),f=new Float32Array(l),h=new Float32Array(l),g=new Float32Array(l);let x=!1;const m=(D,q,K)=>{q===2?d[D]+=K:q===4?f[D]+=K:q===5&&(h[D]+=K),g[D]+=(q===3?1:q===6?0:.5)*K},p=(i.zones||[]).map(D=>({code:ry[D.surface]||1,poly:sa(D.pts)})),y=t.poly,M=4;for(let D=0;D<s;D++)for(let q=0;q<n;q++){const K=D*n+q,nt=u[K];c[K]===5&&(x=!0);let O=!1;for(let B=-1;B<=1&&!O;B++){const it=D+B;if(!(it<0||it>=s))for(let ft=-1;ft<=1;ft++){const gt=q+ft;if(gt>=0&&gt<n&&u[it*n+gt]!==nt){O=!0;break}}}if(!O){m(K,nt,1);continue}const J=o+q*r,ut=a+D*r;for(let B=0;B<M;B++)for(let it=0;it<M;it++){const ft=J+((B+.5)/M-.5)*r,gt=ut+((it+.5)/M-.5)*r;let Tt=nt;if(Fl(y,ft,gt)){Tt=1;for(const tt of p)Fl(tt.poly,ft,gt)&&(Tt=tt.code)}m(K,Tt,1/(M*M))}}const S=as(d,n,s,Ho),R=as(f,n,s,Ho),P=as(h,n,s,Ho),b=as(g,n,s,Ho),w=as(as(d,n,s),n,s),v=new Uint8Array(l);for(let D=0;D<l;D++)v[D]=c[D]===5?1:0;const _=ay(v,n,s,r),T=new Float32Array(l),z=.55,U=(D,q,K,nt,O)=>{const J=Math.max(0,Math.floor((D-o)/r)),ut=Math.min(n-1,Math.ceil((q-o)/r)),B=Math.max(0,Math.floor((K-a)/r)),it=Math.min(s-1,Math.ceil((nt-a)/r));for(let ft=B;ft<=it;ft++)for(let gt=J;gt<=ut;gt++){const Tt=O(o+gt*r,a+ft*r),tt=ft*n+gt;Tt>T[tt]&&(T[tt]=Tt)}};for(const D of e)if(D.r!==void 0){const q=D.r+z;U(D.x-q,D.x+q,D.z-q,D.z+q,(K,nt)=>{const O=Math.hypot(K-D.x,nt-D.z)-D.r;return O<0?1:Math.max(0,1-O/z)})}else{const q=D.hw+z;U(Math.min(D.ax,D.bx)-q,Math.max(D.ax,D.bx)+q,Math.min(D.az,D.bz)-q,Math.max(D.az,D.bz)+q,(K,nt)=>{const O=ty(D.ax,D.az,D.bx,D.bz,K,nt)-D.hw;return O<0?1:Math.max(0,1-O/z)})}const X=new Float32Array(l);if(t.anyOpen)for(let D=2;D<s-2;D++)for(let q=2;q<n-2;q++){const K=D*n+q;if(c[K]===0)continue;let nt=!1;for(let J=-2;J<=2&&!nt;J++)for(let ut=-2;ut<=2;ut++)if(c[K+J*n+ut]===0){nt=!0;break}if(!nt)continue;const O=t.nearest(o+q*r,a+D*r);O.d<.7&&!t.walled(O.seg,O.t)&&(X[K]=1)}if(t.anyOpen)for(let D=0;D<2;D++){const q=Float32Array.from(X);for(let K=1;K<s-1;K++)for(let nt=1;nt<n-1;nt++){const O=K*n+nt;c[O]!==0||q[O]||(q[O-1]||q[O+1]||q[O-n]||q[O+n])&&(X[O]=1)}}const Y=t.anyOpen?as(X,n,s):X,Q=new Uint8Array(l*4),xt=new Uint8Array(l*4),ot=D=>D<=0?0:D>=1?255:Math.round(D*255);for(let D=0;D<l;D++)Q[D*4]=ot(S[D]),Q[D*4+1]=ot(R[D]),Q[D*4+2]=ot(P[D]),Q[D*4+3]=ot(b[D]),xt[D*4]=ot(T[D]*T[D]*(3-2*T[D])),xt[D*4+1]=ot(_[D]/2.5),xt[D*4+2]=ot(Y[D]),xt[D*4+3]=ot(w[D]);const k=new Ge(o-r/2,a-r/2,1/(n*r),1/(s*r));return{mask:nh(Q,n,s),aux:nh(xt,n,s),waterDist:_,hasWater:x,xf:k}}const ma=3,ly=.15,uy=.45,fy=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function hy(i,t,e,n,s=[],r=1){const{cols:o,rows:a,cell:c,x0:l,z0:u,surface:d}=i.grid,f=i.heightAt,h=2,g=c*h,x=Math.floor((o-1)/h)+1,m=Math.floor((a-1)/h)+1,p=x*m,y=new Uint8Array(p),M=new Float64Array(p),S=new Float64Array(p),R=new Float64Array(p),P=new Float32Array(p),b=new Uint8Array(p);for(let st=0;st<m;st++)for(let St=0;St<x;St++){const Rt=st*x+St,It=st*h*o+St*h,Bt=l+St*g,le=u+st*g;y[Rt]=d[It]!==0?1:0;const te=t.nearest(Bt,le);if(M[Rt]=te.x,S[Rt]=te.z,R[Rt]=te.d,P[Rt]=t.walled(te.seg,te.t)?t.apronW:0,e.hasWater){const ye=St*h,Ee=st*h;t:for(let V=-3;V<=3;V++){const A=Ee+V;if(!(A<0||A>=a))for(let N=-3;N<=3;N++){const W=ye+N;if(!(W<0||W>=o)&&d[A*o+W]===5){b[Rt]=1;break t}}}}}const w=[],v=[],_=[],T=[],z=[],U=[],X=[];let Y=0;const Q=(st,St,Rt,It,Bt,le,te,ye,Ee,V)=>(w.push(st,St,Rt),v.push(It,Bt,le),_.push(te.r,te.g,te.b),T.push(ye,Ee),z.push(V),Y++),xt=new me(1,1,1),ot=.25,k=1,D=new Int32Array(p).fill(-1),q=[],K=st=>{if(D[st]>=0)return D[st];const St=st%x,Rt=(st-St)/x;let It=l+St*g,Bt=u+Rt*g;y[st]||(It=M[st],Bt=S[st]);const le=Rt*h*o+St*h;let te=0;y[st]&&d[le]===5&&(te=uy*fy(0,1.6,e.waterDist[le]));const ye=f(It,Bt);let Ee=(f(It+ot,Bt)-f(It-ot,Bt))/(2*ot),V=(f(It,Bt+ot)-f(It,Bt-ot))/(2*ot),A=(f(It+k,Bt)-f(It-k,Bt))/(2*k),N=(f(It,Bt+k)-f(It,Bt-k))/(2*k);const W=ih(f,It,Bt,1,0);W!==null&&(Ee=W,A=W);const Z=ih(f,It,Bt,0,1);Z!==null&&(V=Z,N=Z);const j=Math.hypot(A,1,N),mt=Q(It,ye-te,Bt,-A/j,1/j,-N/j,xt,te>0?0:-Ee,te>0?0:-V,0);return X[mt]=te>0?1:0,q[mt]=b[st],D[st]=mt,mt},nt=new Map,O=2097152,J=(st,St,Rt)=>{const It=st<St?st*O+St:St*O+st,Bt=nt.get(It);Bt?Bt[0]++:nt.set(It,[1,st,St,Rt])},ut=[],B=[0,0],it=(st,St,Rt,It)=>{const Bt=w[st*3],le=w[st*3+2],te=(w[St*3]-Bt)*(w[Rt*3+2]-le)-(w[Rt*3]-Bt)*(w[St*3+2]-le);if(!(Math.abs(te)<1e-7)&&!(te<0&&(B[It?0:1]++,It))){if(te>0){const ye=St;St=Rt,Rt=ye}U.push(st,St,Rt),J(st,St,Rt),J(St,Rt,st),J(Rt,st,St),It&&It.push(st,St,Rt)}},ft=(st,St,Rt,It,Bt,le,te,ye,Ee,V)=>{const A=Bt+le+te+ye,N=A===1?!!(Bt||te):A===3?!!(Bt&&te):A===2?!(le&&ye):!0,W=Ee(st),Z=Ee(St),j=Ee(Rt),mt=Ee(It);N?(it(W,Z,j,V),it(W,j,mt,V)):(it(W,Z,mt,V),it(Z,j,mt,V))};for(let st=0;st<m-1;st++)for(let St=0;St<x-1;St++){const Rt=st*x+St,It=Rt+1,Bt=Rt+x+1,le=Rt+x;(y[Rt]||y[It]||y[Bt]||y[le])&&ft(Rt,It,Bt,le,y[Rt],y[It],y[Bt],y[le],K,ut)}const gt=Y,Tt=new Map(nt);nt.clear();const tt=ia(fe(n.rough),fe(n.hedge),.35),pt=new Int32Array(p).fill(-1),H=[],rt={d:0,x:0,z:0,seg:0,t:0},jt=1,ie=(st,St)=>{const Rt=t.nearest(st,St,rt);let It=t.walled(Rt.seg,Rt.t)?Rt.d-t.apronW:1/0;for(let Bt=0;Bt<s.length;Bt++){const le=Math.hypot(st-s[Bt].x,St-s[Bt].z)-s[Bt].r,te=Math.max(jt-Math.abs(It-le),0)/jt;It=Math.min(It,le)-te*te*jt*.25}return It},qt=new Float64Array(p);for(let st=0;st<p;st++){if(y[st])continue;if(R[st]>t.apronW+.8&&!s.length){qt[st]=1/0;continue}const St=st%x;qt[st]=ie(l+St*g,u+(st-St)/x*g)}const se=new Float64Array(p);for(let st=0;st<p;st++)se[st]=Math.min(1e3,y[st]?Math.max(R[st],1e-4):Math.max(qt[st],-R[st]));const Yt=(st,St,Rt)=>{const It=t.nearest(st,St,rt);let Bt=st,le=St;Rt===0&&(Bt=It.x,le=It.z);const te=Rt===0?0:Math.min(It.d,ma),ye=f(It.x,It.z)-ly-.07*(te/ma),Ee=Q(Bt,ye,le,0,1,0,xt,0,0,1);return H[Ee]=Rt,Ee},E=st=>{if(pt[st]<0){const St=st%x;pt[st]=Yt(l+St*g,u+(st-St)/x*g,1)}return pt[st]},C=new Map,lt=(st,St)=>{const Rt=st<St?st*p+St:St*p+st;let It=C.get(Rt);if(It!==void 0)return It;const Bt=se[st]/(se[st]-se[St]),le=st%x,te=St%x,ye=l+(le+(te-le)*Bt)*g,Ee=u+((st-le)/x+((St-te)/x-(st-le)/x)*Bt)*g,V=t.nearest(ye,Ee,rt),A=!t.inside(ye,Ee)&&V.d<.12&&-V.d>=ie(ye,Ee)-.05;return It=Yt(ye,Ee,A||t.inside(ye,Ee)?0:2),C.set(Rt,It),It},ht=[];if(t.anyWalled||s.length)for(let st=0;st<m-1;st++)for(let St=0;St<x-1;St++){const Rt=[st*x+St,st*x+St+1,(st+1)*x+St+1,(st+1)*x+St];if(se[Rt[0]]<0||se[Rt[1]]<0||se[Rt[2]]<0||se[Rt[3]]<0){ht.length=0;for(let It=0;It<4;It++){const Bt=Rt[It],le=Rt[It+1&3];se[Bt]<0&&ht.push(E(Bt)),se[Bt]<0!=se[le]<0&&ht.push(lt(Bt,le))}for(let It=1;It<ht.length-1;It++)it(ht[0],ht[It],ht[It+1],null)}}const bt=nt,At=(st,St)=>{let Rt=(st-l)/g,It=(St-u)/g;if(Rt<0||It<0||Rt>=x-1||It>=m-1)return!1;const Bt=Math.floor(Rt),le=Math.floor(It);Rt-=Bt,It-=le;const te=le*x+Bt,ye=se[te]+(se[te+1]-se[te])*Rt,Ee=se[te+x]+(se[te+x+1]-se[te+x])*Rt;return ye+(Ee-ye)*It<0};let Jt=1/0;for(let st=1;st<w.length;st+=3)w[st]<Jt&&(Jt=w[st]);const Vt=Jt-1.6,Ht=new Float64Array(Y*2),de=st=>{const[,St,Rt,It]=st,Bt=w[Rt*3]-w[St*3],le=w[Rt*3+2]-w[St*3+2],te=Math.hypot(Bt,le);if(te<.04)return null;let ye=le/te,Ee=-Bt/te;const V=(w[St*3]+w[Rt*3])/2,A=(w[St*3+2]+w[Rt*3+2])/2;return(w[It*3]-V)*ye+(w[It*3+2]-A)*Ee>0&&(ye=-ye,Ee=-Ee),[ye*te,Ee*te]},Ot=[];for(const st of Tt.values()){if(st[0]!==1)continue;const St=de(st);if(!St)continue;const Rt=(w[st[1]*3]+w[st[2]*3])/2,It=(w[st[1]*3+2]+w[st[2]*3+2])/2,Bt=Math.hypot(St[0],St[1]),le=!((t.anyWalled||s.length)&&At(Rt+St[0]/Bt*.3,It+St[1]/Bt*.3));Ot.push([st[1],st[2],le?1:0,0,St]);for(const te of[st[1],st[2]])Ht[te*2]+=St[0],Ht[te*2+1]+=St[1]}for(const st of bt.values()){if(st[0]!==1||H[st[1]]===0&&H[st[2]]===0)continue;const St=de(st);if(St){Ot.push([st[1],st[2],1,1,St]);for(const Rt of[st[1],st[2]])Ht[Rt*2]+=St[0],Ht[Rt*2+1]+=St[1]}}const Qt=fe(n.soilTop),he=ia(fe(n.soilBottom),fe(n.skyBottom),.22),ne=ia(Qt,fe(n.soilBottom),.55),Wt=[Ce(fe(n.rough),.95),Ce(fe(n.rough),.7)],xe=[Ce(tt,.95),Ce(tt,.7)],pe=[fe(Le.pinWhite),Ce(fe(n.rough),.7)],Me=[[0,0,.35,.94],[.07,-.06,.8,.6],[.09,-.16,1,.1],[.02,"mid",1,-.05],[-.15,"bot",.8,-.6]];for(const[st,St,Rt,It,Bt]of Ot){const le=Math.hypot(Bt[0],Bt[1]),te=Bt[0]/le,ye=Bt[1]/le,Ee=It?xe:Rt?pe:Wt,V=[[],[]],A=Rt?Me:[[0,0,1,0],[0,-.22,1,0]];[st,St].forEach((N,W)=>{let Z=Ht[N*2],j=Ht[N*2+1];const mt=Math.hypot(Z,j);Z/=mt||1,j/=mt||1,(!(mt>1e-6)||Z*te+j*ye<.5)&&(Z=te,j=ye);const Mt=w[N*3],Pt=w[N*3+1],Xt=w[N*3+2];for(let ee=0;ee<A.length;ee++){const[re,I,L,F]=A[ee],$=I==="bot"?Vt:I==="mid"?Pt-.16+(Vt-(Pt-.16))*.5:Pt+I,G=Math.hypot(L,F),vt=Rt?ee===0?Ee[0]:ee===1?Ee[1]:ee===2?Qt:ee===3?ne:he:Qt;V[W].push(Q(Mt+Z*re,$,Xt+j*re,Z*L/G,F/G,j*L/G,vt,0,0,2))}});for(let N=0;N<A.length-1;N++){const W=[V[0][N],V[1][N],V[1][N+1],V[0][N+1]],Z=w[W[0]*3],j=w[W[0]*3+1],mt=w[W[0]*3+2],Mt=w[W[1]*3]-Z,Pt=w[W[1]*3+1]-j,Xt=w[W[1]*3+2]-mt,ee=w[W[2]*3]-Z,re=w[W[2]*3+1]-j,I=w[W[2]*3+2]-mt,L=Pt*I-Xt*re,F=Mt*re-Pt*ee,$=v[W[0]*3]+v[W[1]*3],G=v[W[0]*3+2]+v[W[1]*3+2];L*$+F*G>=0?U.push(W[0],W[1],W[2],W[0],W[2],W[3]):U.push(W[0],W[2],W[1],W[0],W[3],W[2])}}const ct=new Ze;ct.setAttribute("position",new Ie(w,3)),ct.setAttribute("normal",new Ie(v,3)),ct.setAttribute("color",new Ie(_,3)),ct.setAttribute("aFlow",new Ie(T,2)),ct.setAttribute("aMode",new Ie(z,1)),ct.setIndex(U),ct.computeBoundingSphere(),ct.computeBoundingBox();const{material:Ct,uniforms:_t}=my(e,n,tt,r===0),Et=new Ve(ct,Ct);Et.name="course-terrain",Et.receiveShadow=!0,Et.userData.terrain={courseVerts:gt,lowered:Uint8Array.from(X),folds:B};const Ut=[];if(e.hasWater)for(let st=0;st<ut.length;st+=3){const St=ut[st],Rt=ut[st+1],It=ut[st+2];(q[St]||q[Rt]||q[It])&&Ut.push(St,Rt,It)}return{mesh:Et,uniforms:_t,waterTris:Ut,positions:w,minY:Jt,yBot:Vt}}const dy=`
uniform sampler2D uMask;
uniform sampler2D uAux;
uniform vec4 uMaskXf;
uniform float uTime;
uniform float uFlow;
uniform float uStripeW;
uniform float uGreenW;
uniform float uContourStep;
uniform float uDotCell;
uniform vec3 uRough;
uniform vec3 uFairA;
uniform vec3 uFairB;
uniform vec3 uFringe;
uniform vec3 uGreenA;
uniform vec3 uGreenB;
uniform vec3 uSand;
uniform vec3 uSandLip;
uniform vec3 uBed;
uniform vec3 uIce;
uniform vec3 uLine;
uniform vec3 uApron;
uniform vec3 uKerbA;
uniform vec3 uKerbB;
varying vec3 vWPos;
varying vec2 vFlow;
varying float vMode;
float cgH21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float cgNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(cgH21(i), cgH21(i + vec2(1.0, 0.0)), f.x), mix(cgH21(i + vec2(0.0, 1.0)), cgH21(i + vec2(1.0, 1.0)), f.x), f.y);
}
// 0/1 bands, one per half period of s (s in periods), anti-aliased; fade to 0.5 once the bands get sub-pixel (no moire in the overview)
float cgBands(float s) {
  float fw = fwidth(s);
  float v = smoothstep(-fw, fw, abs(fract(s) - 0.5) - 0.25);
  return mix(v, 0.5, smoothstep(0.2, 0.5, fw));
}
float cgCover(float m, float iso) { float fw = max(fwidth(m), 1e-4); return smoothstep(iso - fw, iso + fw, m); }
float cgLine(float m, float iso, float px) { float fw = max(fwidth(m), 1e-4); return 1.0 - smoothstep(fw * px, fw * (px + 1.0), abs(m - iso)); }
`,py=`
{
  vec2 p = vWPos.xz;
  vec2 muv = (p - uMaskXf.xy) * uMaskXf.zw;
  vec4 m = texture2D(uMask, muv);
  vec4 ax = texture2D(uAux, muv);
  float n = cgNoise(p * 1.7) * 0.6 + cgNoise(p * 5.3) * 0.4;

  // fairway: mowing stripes alternating along +x, uStripeW metres each
  vec3 col = mix(uFairB, uFairA, cgBands(p.x / (2.0 * uStripeW)));
#ifndef EBG_LOW
  col *= 0.97 + 0.06 * cgNoise(p * 0.45);
#endif
  // rough (mask A = 1) with two-octave speckle; ice (mask A = 0) with a soft shine streak
  float cR = cgCover(m.a, 0.75);
  col = mix(col, uRough * (0.91 + 0.18 * n), cR);
  float cI = 1.0 - cgCover(m.a, 0.25);
  float shine = smoothstep(0.32, 0.5, abs(fract((p.x + p.y) * 0.16) - 0.5));
  col = mix(col, uIce * (0.95 + 0.07 * n) + vec3(0.12) * shine, cI);
  // fringe ring + green with a cross-cut checker
  col = mix(col, uFringe, cgCover(ax.a, 0.1) * (1.0 - cR));
  float chk = abs(cgBands(p.x / (2.0 * uGreenW)) - cgBands(p.y / (2.0 * uGreenW)));
  float cG = cgCover(m.r, 0.5);
  col = mix(col, mix(uGreenB, uGreenA, chk), cG);
  // sand with a darker lip just inside its edge
  float cS = cgCover(m.g, 0.5);
  float lip = 1.0 - smoothstep(0.55, 0.97, m.g);
  vec3 sand = mix(uSand, uSandLip, lip);
#ifndef EBG_LOW
  sand *= 0.95 + 0.1 * cgNoise(p * 7.0);
#endif
  col = mix(col, sand, cS);
  // pond bed (the water surface draws over it)
  float cW = cgCover(m.b, 0.5);
  col = mix(col, uBed * (1.0 - 0.35 * ax.g), cW);
  // candy kerb where the course ends in a drop (no wall)
  float cK = cgCover(ax.b, 0.5);
  col = mix(col, mix(uKerbB, uKerbA, cgBands((p.x + p.y) / 1.2)), cK);
  // thin toy outline where surfaces meet
  float ed = max(max(cgLine(m.r, 0.5, 0.6), cgLine(m.g, 0.5, 0.7)), max(cgLine(m.b, 0.5, 0.8), max(cgLine(m.a, 0.75, 0.6), cgLine(m.a, 0.25, 0.6))));
  ed = max(ed, cgLine(ax.b, 0.5, 0.8));
  col = mix(col, uLine, ed * 0.55);
  // contact shadow at the foot of walls and posts
  col *= 1.0 - 0.22 * ax.r;
  // slope readability 1: contour lines every uContourStep metres of height, only where the slope is above ~1 %
  float slope = length(vFlow);
  // lines sit at heights (k + 0.5) * step so a flat area at a round height (0, a 1.5 m plateau) never lies on a line
  float hc = vWPos.y / uContourStep;
  float cfw = max(fwidth(hc), 1e-4);
  float con = (1.0 - smoothstep(cfw * 0.5, cfw * 1.5, abs(fract(hc) - 0.5))) * (1.0 - smoothstep(0.2, 0.45, cfw));
  con *= smoothstep(0.008, 0.02, slope) * (1.0 - cW);
  col *= 1.0 - 0.14 * con;
  // slope readability 2: comets drifting downhill (uFlow eased 0..1 by setFlow; uniform branch, so fwidth stays defined)
  if (uFlow > 0.001) {
    vec2 dir = vFlow / max(slope, 1e-4);
    vec2 cid = floor(p / uDotCell);
    vec2 loc = (fract(p / uDotCell) - 0.5) * uDotCell;
    float ph = fract(uTime * 0.55 + cgH21(cid));
    float len = mix(0.16, 0.42, smoothstep(0.01, 0.12, slope));
    vec2 head = dir * ((ph - 0.5) * (uDotCell * 0.86 - len - 0.2) + len * 0.5);
    vec2 tl = head - dir * len;
    vec2 pa = loc - tl;
    vec2 ba = head - tl;
    float hh = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
    float dd = length(pa - ba * hh) - mix(0.035, 0.085, hh);
    float afw = max(fwidth(dd), 1e-4);
    float body = 1.0 - smoothstep(-afw, afw, dd);
    float halo = clamp((1.0 - smoothstep(0.0, 0.045 + afw, dd)) - body, 0.0, 1.0);
    float fade = sin(ph * PI) * smoothstep(0.006, 0.02, slope) * mix(0.4, 1.0, smoothstep(0.02, 0.08, slope)) * uFlow * (1.0 - cS) * (1.0 - cW) * (1.0 - cK);
#ifndef EBG_LOW
    col = mix(col, uLine * 0.5, halo * fade * 0.4);
#endif
    col = mix(col, vec3(1.0), body * fade * mix(0.42, 0.82, hh));
  }

  // apron lawn outside the walls: darker meadow with tiny flowers (never reads as playable)
  vec3 ap = uApron * (0.86 + 0.22 * n);
#ifndef EBG_LOW
  vec2 fc = floor(p / 0.7);
  vec2 fo = vec2(cgH21(fc + 7.1), cgH21(fc + 3.7)) - 0.5;
  float fh = cgH21(fc);
  float fd = length((fract(p / 0.7) - 0.5 - fo * 0.55) * 0.7);
  float fdw = max(fwidth(fd), 1e-4);
  float fm = (1.0 - smoothstep(0.045 - fdw, 0.045 + fdw, fd)) * step(0.6, fh);
  ap = mix(ap, mix(vec3(1.0, 0.78, 0.25), vec3(1.0, 0.97, 0.9), step(0.82, fh)), fm);

#endif
  float isApron = step(0.5, vMode) * (1.0 - step(1.5, vMode));
  float isPlain = step(1.5, vMode);
  diffuseColor.rgb = mix(mix(col, ap, isApron), diffuseColor.rgb, isPlain);
}
`;function my(i,t,e,n){const s={uMask:{value:i.mask},uAux:{value:i.aux},uMaskXf:{value:i.xf},uTime:{value:0},uFlow:{value:0},uStripeW:{value:2.4},uGreenW:{value:.9},uContourStep:{value:.15},uDotCell:{value:1.6},uRough:{value:fe(t.rough)},uFairA:{value:fe(t.fairwayLight)},uFairB:{value:fe(t.fairwayDark)},uFringe:{value:fe(t.fringe)},uGreenA:{value:fe(t.greenLight)},uGreenB:{value:fe(t.greenDark)},uSand:{value:fe(t.sand)},uSandLip:{value:fe(t.sandLip)},uBed:{value:fe(t.pondBed)},uIce:{value:fe(t.ice)},uLine:{value:fe(Le.surfaceOutline)},uApron:{value:e},uKerbA:{value:fe(Le.pinWhite)},uKerbB:{value:fe(Le.pinBand)}},r=new Ca({color:16777215,vertexColors:!0});return n&&(r.defines={EBG_LOW:""}),r.onBeforeCompile=o=>{Object.assign(o.uniforms,s);let a=o.vertexShader;a=Ln(a,"#include <common>",`attribute vec2 aFlow;
attribute float aMode;
varying vec3 vWPos;
varying vec2 vFlow;
varying float vMode;`),a=Ln(a,"#include <begin_vertex>",`vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vFlow = aFlow;
vMode = aMode;`),o.vertexShader=a;let c=o.fragmentShader;c=Ln(c,"#include <common>",dy),c=Ln(c,"#include <color_fragment>",py),o.fragmentShader=c},r.customProgramCacheKey=()=>n?"ebg-terrain-v1-low":"ebg-terrain-v1",{material:r,uniforms:s}}function ih(i,t,e,n,s){const r=i(t,e),o=(i(t+n*.25,e+s*.25)-r)/.25,a=(r-i(t-n*.25,e-s*.25))/.25,c=Math.abs(o),l=Math.abs(a),u=Math.max(c,l),d=Math.min(c,l);return u*.25<.3||d*4>u?null:c<l?o:a}const gy=`
varying vec2 vXZ;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vXZ = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,xy=`
uniform sampler2D uMask;
uniform sampler2D uAux;
uniform vec4 uMaskXf;
uniform float uTime;
uniform float uLake;
uniform vec3 uShallow;
uniform vec3 uDeep;
uniform vec3 uFoam;
uniform vec3 uGlint;
uniform vec3 uBand;
varying vec2 vXZ;
void main() {
  vec2 muv = (vXZ - uMaskXf.xy) * uMaskXf.zw;
  float m = texture2D(uMask, muv).b;
  float dm = texture2D(uAux, muv).g * 2.5; // metres from the shore
  float fw = max(fwidth(m), 1e-4);
  float cover = smoothstep(0.5 - fw, 0.5 + fw, m);
  if (cover < 0.004) discard;
  vec2 p = vXZ;
  vec3 col = mix(uShallow, uDeep, smoothstep(0.15, 2.2, dm));
  // toon ripple crests: two travelling sine fields, keep only the bright crests
  float w1 = sin(dot(p, vec2(0.83, 0.55)) * 1.25 + uTime * 1.2 + sin(p.y * 0.45 + uTime * 0.4) * 1.5);
  float w2 = sin(dot(p, vec2(-0.47, 0.88)) * 1.6 - uTime * 1.0 + sin(p.x * 0.55) * 1.2);
  float crest = w1 * w2;
  float cfw = max(fwidth(crest), 1e-4);
  float thr = mix(0.64, 0.5, uLake);
  float glint = smoothstep(thr - cfw, thr + cfw, crest) * smoothstep(0.2, 0.9, dm);
  col = mix(col, uGlint, glint * mix(0.42, 0.6, uLake));
  // Lakeside: a slow warm reflection band drifting across the lake
  float band = 1.0 - smoothstep(0.0, 0.16, abs(fract(p.x * 0.035 - p.y * 0.05 + uTime * 0.01) - 0.5));
  col = mix(col, uBand, band * 0.12 * uLake);
  // shoreline foam that breathes, plus a thin second ring on Lakeside
  float dfw = max(fwidth(dm), 1e-4);
  float fe = mix(0.24, 0.34, uLake) + 0.06 * sin(uTime * 1.6 + p.x * 0.9 + p.y * 0.7);
  float foam = 1.0 - smoothstep(fe - dfw, fe + dfw, dm);
  float r2 = 0.62 + 0.1 * sin(uTime * 1.1 + p.x * 0.6 - p.y * 0.8);
  float ring = (1.0 - smoothstep(0.025, 0.025 + dfw * 1.5, abs(dm - r2))) * uLake * 0.55;
  col = mix(col, uFoam, max(foam * 0.92, ring));
  gl_FragColor = vec4(col, cover * mix(0.8, 0.96, smoothstep(0.2, 1.0, dm)));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function vy(i,t,e,n){const s=t.waterTris;if(!e.hasWater||s.length===0)return null;const r=i.heightAt,o=t.positions,a=new Map,c=[],l=[];for(const g of s){let x=a.get(g);if(x===void 0){x=c.length/3;const m=o[g*3],p=o[g*3+2];c.push(m,r(m,p)+.03,p),a.set(g,x)}l.push(x)}const u=new Ze;u.setAttribute("position",new Ie(c,3)),u.setIndex(l),u.computeBoundingSphere();const d={uMask:{value:e.mask},uAux:{value:e.aux},uMaskXf:{value:e.xf},uTime:{value:0},uLake:{value:i.round===2?1:0},uShallow:{value:fe(n.waterShallow)},uDeep:{value:fe(n.waterDeep)},uFoam:{value:fe(n.waterFoam)},uGlint:{value:fe(n.waterGlint)},uBand:{value:fe(n.hemiSky)}},f=new _n({uniforms:d,vertexShader:gy,fragmentShader:xy,transparent:!0,depthWrite:!1}),h=new Ve(u,f);return h.name="course-water",h.renderOrder=1,{mesh:h,uniforms:d}}function _y(i,t,e){return i==="cushion"?(e=e||.42,t?{pts:[[-.2,-.3],[-.2,e-.12],[-.15,e-.03],[-.08,e],[.08,e],[.15,e-.03],[.2,e-.12],[.2,-.3]],roles:["nose","nose","nose","top","nose","nose","nose"],h:e}:{pts:[[0,-.3],[0,e-.12],[.05,e-.03],[.12,e],[.46,e],[.5,e-.05],[.53,e-.12],[.53,-.34]],roles:["nose","nose","nose","top","top","side","side"],h:e}):i==="hedge"?(e=e||.52,t?{pts:[[-.22,-.3],[-.22,e-.2],[-.17,e-.06],[-.08,e],[.08,e],[.17,e-.06],[.22,e-.2],[.22,-.3]],roles:Array(7).fill("hedge"),h:e}:{pts:[[0,-.3],[0,e-.2],[.05,e-.06],[.14,e],[.42,e],[.52,e-.08],[.56,e-.25],[.56,-.34]],roles:Array(7).fill("hedge"),h:e}):i==="bumper"?(e=e||.4,t?{pts:[[-.2,-.3],[-.2,e-.2],[-.16,e-.08],[-.09,e-.01],[-.04,e],[.04,e],[.09,e-.01],[.16,e-.08],[.2,e-.2],[.2,-.3]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}:{pts:[[0,-.3],[0,e-.2],[.04,e-.08],[.12,e-.01],[.21,e],[.31,e],[.4,e-.01],[.47,e-.08],[.5,e-.2],[.5,-.34]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}):(e=e||.4,t?{pts:[[-.18,-.3],[-.18,e-.05],[-.14,e],[.14,e],[.18,e-.05],[.18,-.3]],roles:["face","cap","cap","cap","face"],h:e}:{pts:[[0,-.3],[0,e-.05],[.04,e],[.46,e],[.5,e-.05],[.5,-.34]],roles:["face","cap","cap","cap","side"],h:e})}const My={cushion:.2,hedge:.22,bumper:.2,wall:.18};function yy(i,t,e,n,s){const r=i.heightAt,o=[],a=i.walls.map(l=>({kind:l.kind,pts:l.pts,closed:l.closed,h:l.h,border:l.border}));for(const l of i.arcsRender||[])a.push({kind:l.kind,pts:Zd(l,6),closed:!1,h:void 0,border:!1});const c={nose:fe(n.cushionNose),top:fe(n.railTop),side:fe(n.railSide),sights:fe(n.railSights),hedge:fe(n.hedge),stone:fe(n.wallStone),pad:fe(s),stripe:fe(Le.pinWhite)};for(const l of a){const u=Sy.has(l.kind)?l.kind:"wall",d=wy(l.pts,l.closed);if(d.length<2)continue;const f=d.length,h=l.closed?f:f-1;let g=0,x=0;for(let k=0;k<h;k++){const D=d[k],q=d[(k+1)%f],K=q.x-D.x,nt=q.z-D.z,O=Math.hypot(K,nt);if(O<1e-6)continue;const J=-nt/O,ut=K/O,B=(D.x+q.x)/2,it=(D.z+q.z)/2,ft=t.inside(B+J*.35,it+ut*.35),gt=t.inside(B-J*.35,it-ut*.35);ft!==gt&&(g+=ft?-O:O),x+=O}const m=l.border||Math.abs(g)>x*.5,p=m?g>=0?1:-1:1,y=_y(u,!m,l.h),M=m?0:My[u];for(let k=0;k<h;k++){const D=d[k],q=d[(k+1)%f];o.push({ax:D.x,az:D.z,bx:q.x,bz:q.z,hw:M})}const S=[],R=[];for(let k=0;k<h;k++){const D=d[k],q=d[(k+1)%f],K=Math.hypot(q.x-D.x,q.z-D.z);R.push([-(q.z-D.z)/K,(q.x-D.x)/K,K])}let P=0;const b=(k,D,q,K,nt)=>S.push({x:k,z:D,nx:q,nz:K,u:P,join:nt}),w=(k,D,q)=>{const K=Math.atan2(D[1],D[0]);let nt=Math.atan2(q[1],q[0])-K;for(;nt>Math.PI;)nt-=2*Math.PI;for(;nt<-Math.PI;)nt+=2*Math.PI;const O=Math.max(1,Math.ceil(Math.abs(nt)/(Math.PI/9)));for(let J=0;J<=O;J++){const ut=K+nt*J/O;b(k.x,k.z,Math.cos(ut),Math.sin(ut),J>0&&J<O)}},v=(k,D,q,K)=>{for(let O=0;O<=6;O++){const J=K?Math.PI-Math.PI*O/6:-Math.PI*O/6,ut=D[0]*Math.cos(J)-q[0]*Math.sin(J),B=D[1]*Math.cos(J)-q[1]*Math.sin(J);b(k.x,k.z,ut,B,O>0&&O<6)}},_=[];for(let k=0;k<h;k++){const D=d[k],q=d[(k+1)%f],[K,nt,O]=R[k],J=[(q.x-D.x)/O,(q.z-D.z)/O];if(k===0&&!l.closed)m?b(D.x,D.z,K,nt,!1):v(D,[K,nt],J,!0);else{const it=R[(k-1+h)%h];w(D,[it[0],it[1]],[K,nt])}const ut=Math.max(1,Math.ceil(O/.5)),B=P;for(let it=1;it<ut;it++)P=B+O*it/ut,b(D.x+(q.x-D.x)*(it/ut),D.z+(q.z-D.z)*(it/ut),K,nt,!1);if(P=B+O,u==="cushion")for(let it=Math.ceil((B+.4-1)/2)*2+1;it<B+O-.4;it+=2)_.push([D.x+J[0]*(it-B),D.z+J[1]*(it-B),K,nt,J]);k===h-1&&!l.closed&&(m?b(q.x,q.z,K,nt,!1):v(q,[K,nt],J,!1))}if(l.closed&&S.length){const k=S[0];S.push({...k,u:P})}const T=y.pts,z=(k,D,q)=>{const K=T[D][0]*p,nt=k.x+k.nx*K,O=k.z+k.nz*K,J=T[D][1]>=0?k.hc+T[D][1]:r(nt,O)+T[D][1];return q[0]=nt,q[1]=J,q[2]=O,q};for(const k of S)sh(r,k);let U=0,X=0;for(const k of T)U+=k[0],X+=k[1];U/=T.length,X/=T.length;const Y=[0,0,0],Q=[0,0,0],xt=[0,0,0],ot=[0,0,0];for(let k=0;k<S.length-1;k++){const D=S[k],q=S[k+1],K=(D.nx+q.nx)*.5,nt=(D.nz+q.nz)*.5,O=u==="wall"?Math.floor((D.u+q.u)*.5/1.2)%2?.95:1.04:1;for(let J=0;J<T.length-1;J++){const ut=T[J+1][0]-T[J][0];let it=T[J+1][1]-T[J][1],ft=-ut;const gt=(T[J][0]+T[J+1][0])/2-U,Tt=(T[J][1]+T[J+1][1])/2-X;it*gt+ft*Tt<0&&(it=-it,ft=-ft);const tt=[K*it*p,ft,nt*it*p],pt=y.roles[J],H=Math.max(0,(T[J][1]+T[J+1][1])/2)/y.h,rt=ft>.7?1:.72+.33*Math.min(1,H);let jt,ie=0;u==="cushion"?jt=Ce(pt==="nose"?c.nose:pt==="top"?c.top:c.side,rt):u==="hedge"?(jt=Ce(c.hedge,.62+.46*Math.min(1,H)),ie=1):u==="bumper"?jt=Ce(pt==="stripe"?c.stripe:c.pad,pt==="stripe"?1:rt):jt=Ce(c.stone,(pt==="cap"?1:pt==="face"?.8*rt:.66*rt)*O),z(D,J,Y),z(q,J,Q),z(q,J+1,xt),z(D,J+1,ot);const qt=Math.sign((T[J][0]+T[J+1][0])*p);if(u==="wall"&&pt==="face"&&D.ret>.5&&q.ret>.5&&qt===D.lo&&qt===q.lo){Ey(e,Y,Q,xt,ot,(D.u+q.u)*.5,c.stone,rt,tt);continue}e.quad(Y,Q,xt,ot,jt,ie,tt)}}if(!l.closed&&m&&S.length>=2)for(const[k,D]of[[S[0],S[1]],[S[S.length-1],S[S.length-2]]]){const q=[k.x-D.x,0,k.z-D.z],K=T.map((O,J)=>z(k,J,[0,0,0])),nt=u==="hedge"?Ce(c.hedge,.8):u==="cushion"?c.side:u==="bumper"?c.pad:Ce(c.stone,.75);for(let O=1;O<K.length-1;O++)e.tri(K[0],K[O],K[O+1],nt,u==="hedge"?1:0,q)}if(u==="wall"&&!m)for(let k=0;k<f;k++){if(!l.closed&&(k===0||k===f-1))continue;const D=d[k],q=R[Math.min(k,h-1)],K={x:D.x,z:D.z,nx:q[0],nz:q[1]};sh(r,K),K.ret>.5&&Ty(e,D.x,K.hc,D.z,c.stone,c.pad)}if(u==="cushion"){const k=m?.29:0;for(const[D,q,K,nt,O]of _){const J=D+K*k*p,ut=q+nt*k*p,B=r(D,q)+y.h+.008,it=.11,ft=.065,gt=[J+O[0]*it,B,ut+O[1]*it],Tt=[J-O[0]*it,B,ut-O[1]*it],tt=[J+K*ft,B,ut+nt*ft],pt=[J-K*ft,B,ut-nt*ft];e.quad(gt,tt,Tt,pt,c.sights,0,[0,1,0])}}}return o}const Sy=new Set(["cushion","hedge","bumper","wall"]);function wy(i,t){const e=[];for(const n of i){const s=e[e.length-1];(!s||Math.hypot(n.x-s.x,n.z-s.z)>1e-4)&&e.push({x:n.x,z:n.z})}if(t&&e.length>2){const n=e[0],s=e[e.length-1];Math.hypot(n.x-s.x,n.z-s.z)<1e-4&&e.pop()}return e}const Go=.3,Vo=.45;function sh(i,t){const e=i(t.x,t.z),n=i(t.x+t.nx*Go,t.z+t.nz*Go),s=i(t.x-t.nx*Go,t.z-t.nz*Go),r=i(t.x+t.nx*Vo,t.z+t.nz*Vo),o=i(t.x-t.nx*Vo,t.z-t.nz*Vo),a=Math.abs(r-o),c=Math.abs(n-s);let l=0;if(a>.1&&c>.85*a){const u=Math.min(1,(a-.1)/.2);l=u*u*(3-2*u)}t.hc=e+l*(Math.max(e,r,o)-e),t.ret=l,t.lo=r<o?1:-1}const rh=.36,by=.9;function Ey(i,t,e,n,s,r,o,a,c){const l=Math.min(t[1],e[1],s[1],n[1]),u=Math.max(t[1],e[1],s[1],n[1]),d=Math.max(1,Math.min(8,Math.round((u-l)/rh))),f=[0,0,0],h=[0,0,0],g=[0,0,0],x=[0,0,0],m=(p,y,M,S)=>(S[0]=p[0]+(y[0]-p[0])*M,S[1]=p[1]+(y[1]-p[1])*M,S[2]=p[2]+(y[2]-p[2])*M,S);for(let p=0;p<d;p++){m(t,s,p/d,f),m(e,n,p/d,h),m(t,s,(p+1)/d,g),m(e,n,(p+1)/d,x);const y=(f[1]+g[1])*.5,M=Math.floor(y/rh+100),R=(Math.floor(r/by+M%2*.5)*7+M*3)%4,P=R===0?.9:R===1?1.02:R===2?.96:1.07,b=.62+.3*((p+.5)/d);i.quad(f,h,x,g,Ce(o,b*P*(.85+.15*a)),0,c)}}function Ty(i,t,e,n,s,r){const a=new Nn(.44,1.05,.44);a.translate(0,(.75-.3)/2,0),i.geo(a,(u,d)=>Ce(s,d>.75-.35?.95:.78),{matrix:Xe(t,e,n)});const c=new Nn(.56,.12,.56);c.translate(0,.75+.06,0),i.geo(c,(u,d)=>Ce(s,d>.75+.1?1.08:.85),{matrix:Xe(t,e,n)});const l=new qn(.2,14,10);l.translate(0,.75+.12+.19,0),i.geo(l,(u,d)=>Ce(r,.75+.35*Math.min(1,Math.max(0,(d-.75-.12)/.38))),{flat:!1,matrix:Xe(t,e,n)})}const Ay=(i,t)=>new ce(i,t),Si=(i,t)=>new Ea(i.map(([e,n])=>Ay(e,n)),t),Rn=i=>i<0?0:i>1?1:i,Cy=[16513779,16763196,16748467,15217199,10189792],Ry=[0,0,-1],Py=[0,.866,.5];function Ly(i){const t=[fe(i.hedge),ia(fe(i.hedge),fe(i.rough),.5),Ce(fe(i.rough),1.05)];return{pal:i,greens:t,trunk:Ce(fe(i.wood),.62),wood:fe(i.wood),woodDark:Ce(fe(i.wood),.72),stone:fe(i.wallStone),soil:Ce(fe(i.soilTop),.8),chalk:fe(Le.chalk),chalkTop:fe(14674423),white:fe(Le.pinWhite),red:fe(Le.pinBand),candy:fe(15022389),black:fe(Le.eightBody),water:fe(i.waterShallow),foam:fe(i.waterFoam),reeds:fe(i.reeds),cattail:fe(7029286),lily:Ce(fe(i.rough),1.12),flowers:Cy.map(fe),caps:Iy.map(fe),stem:fe(16050898),gill:fe(14929828)}}const Iy=[15022389,15887146,12730238];function Jd(i,t,e,n,s,r,o,a=1){const c=Xe(e,n,s,o*1.7,a),l=a<.7,u=Math.max(1.05,.72+.48*r),d=r*.82,f=Si([[r+.03,-.3],[r,0],[r*1.02,.08],[r*.97,.2],[r*.9,u*.55],[d,u*.92],[d*.9,u+.02],[0,u+.02]],l?10:20);i.geo(f,(_,T)=>Ce(t.stem,T<.12?.7:.78+.27*Rn(T/u)),{flat:!1,matrix:c});const h=Math.max(r*1.38,r+.32),g=h*.62,x=u+.1,m=[[d*.85,u-.02],[h*.75,u+.02],[h*.97,x-.04],[h,x+.04]],p=l?4:7;for(let _=1;_<=p;_++){const T=_/p*(Math.PI/2);m.push([h*Math.cos(T)*(_===p?0:1),x+.04+g*Math.sin(T)])}const y=t.caps[o%t.caps.length];i.geo(Si(m,l?12:24),(_,T)=>T<x-.02?t.gill:Ce(y,.78+.34*Rn((T-x)/g)),{flat:!1,matrix:c});const M=l?4:7,S=new ze,R=new $i,P=new et(0,1,0),b=new et,w=new et,v=new et;for(let _=0;_<M;_++){const T=_*2.39996+o,z=_===0?Math.PI/2:.35+(_*.37+o*.13)%.75,U=Math.cos(z),X=Math.sin(z);w.set(h*U*Math.cos(T),x+.04+g*X,h*U*Math.sin(T)),b.set(U*Math.cos(T)/h,X/g,U*Math.sin(T)/h).normalize(),R.setFromUnitVectors(P,b);const Y=h*(_===0?.2:.13+.05*((_+o)%3)/2);v.set(Y,Y*.3,Y),S.compose(w,R,v);const Q=new qn(1,l?6:10,l?2:4,0,Math.PI*2,0,Math.PI/2);Q.applyMatrix4(S),i.geo(Q,()=>t.white,{matrix:c})}}function Dy(i,t,e,n,s,r,o){const a=1+Math.floor(o()*3);for(let c=0;c<a;c++){const l=o()*Math.PI*2,u=c===0?0:.35+o()*.2,d=(c===0?.16:.09+o()*.05)*r;Jd(i,t,e+Math.cos(l)*u*r,n,s+Math.sin(l)*u*r,d/.38,Math.floor(o()*9),.38)}}function zy(i,t,e,n,s,r,o){const{x:a,z:c,r:l}=n,u=n.kind||"post";if(u==="bumper"){const f=o[r%o.length],h=fe(Le.poolBalls[(f-1)%8]),g=Si([[l+.02,-.3],[l,0],[l,.13],[l,.27],[l,.36],[l*.95+0,.45],[l*.84,.5],[0,.5]],28);i.geo(g,(x,m)=>m>.13&&m<.27?e.white:Ce(h,m>.4?1.05:.8+.25*Rn(m/.36)),{matrix:Xe(a,s,c)}),t.disc([a,s+.503,c],[0,1,0],Ry,Math.min(l*.56,.48),f);return}if(u==="tree"){const f=Si([[l+.02,-.3],[l,.28],[l-.04,.33],[l-.15,.33],[l-.18,.2],[0,.2]],32);i.geo(f,(S,R,P)=>Math.hypot(S,P)<l-.17&&R<.25?e.soil:Ce(e.stone,R>.3?1:.68+.3*Rn(R/.28)),{matrix:Xe(a,s,c)});const h=Math.max(.55,l*.9),g=.75+h*.82,x=Math.min(.32,.08+l*.07),m=new ti(x*.8,x,g,8);m.translate(0,g/2,0),i.geo(m,()=>e.trunk,{matrix:Xe(a,s,c)});const p=e.greens[r%3],y=new qn(h,18,12);i.geo(y,(S,R)=>Ce(p,.66+.42*Rn((R+h)/(2*h))),{leaf:1,flat:!1,matrix:Xe(a,s+g,c,0,[1,.8,1])});const M=new qn(h*.5,14,10);i.geo(M,(S,R)=>Ce(p,.85+.3*Rn((R+h*.5)/h)),{leaf:1,flat:!1,matrix:Xe(a-h*.08,s+g+h*.72,c-h*.05,0,[1,.85,1])});return}if(u==="lollipop"){const f=[[l+.02,-.3]];for(let m=0;m<=5;m++)f.push([l,m*.1]);f.push([l*.9,.58],[0,.58]),i.geo(Si(f,24),(m,p,y)=>p>.52?e.white:((Math.atan2(y,m)/(Math.PI*2)*2+p*1.8)%1+1)%1<.5?e.candy:e.white,{matrix:Xe(a,s,c)});const h=new ti(.045,.045,.6,6);h.translate(0,.86,0),i.geo(h,()=>e.white,{matrix:Xe(a,s,c)});const g=Math.min(.5,Math.max(.3,l*.75)),x=new qn(g,16,10);i.geo(x,(m,p,y)=>(Math.atan2(y,m)/(Math.PI*2)*3+p/g*.9+2)%1<.5?e.candy:e.white,{matrix:Xe(a,s+1.16+g*.8,c,0,[1,.85,1])});return}if(u==="mushroom"){Jd(i,e,a,s,c,l,r,1);return}if(l>=1){const f=Si([[l+.02,-.3],[l,.42],[l-.08,.62],[l-.25,.72],[l*.5,.76],[0,.76]],32),h=e.greens[0];i.geo(f,(g,x)=>Ce(h,.62+.46*Rn(x/.76)),{leaf:1,flat:!1,matrix:Xe(a,s,c)});return}const d=Si([[l+.02,-.3],[l,0],[l,.5],[l-Math.min(.07,l*.2),.57],[0,.57]],20);i.geo(d,(f,h)=>h>.515?e.chalkTop:Ce(e.chalk,.74+.3*Rn(h/.5)),{matrix:Xe(a,s,c)})}function Qd(i,t,e,n,s,r,o,a=0){const c=Xe(e,n,s,a,r),l=.8,u=new ti(.08,.13,l+.3,6);u.translate(0,l/2-.15,0),i.geo(u,()=>t.trunk,{matrix:c});const d=t.greens[Math.floor(o()*3)],f=[[0,l+.5,0,.62],[.36,l+.3,.12,.42],[-.34,l+.34,-.12,.44],[.06,l+.95,-.04,.4]];for(const[h,g,x,m]of f){const p=new lr(m*(.92+o()*.16),1);p.translate(h,g,x),i.geo(p,(y,M)=>Ce(d,.66+.46*Rn((M-l)/1.35)),{leaf:1,matrix:c})}}function Ol(i,t,e,n,s,r,o,a=0){const c=Xe(e,n,s,a,r),l=t.greens[Math.floor(o()*3)],u=2+Math.floor(o()*2);for(let d=0;d<u;d++){const f=d/u*Math.PI*2+o(),h=.3+o()*.12,g=new lr(h,1);g.scale(1,.85,1),g.translate(Math.cos(f)*.22,h*.75,Math.sin(f)*.22),i.geo(g,(x,m)=>Ce(l,.68+.5*Rn(m/.75)),{leaf:1,matrix:c})}}function tp(i,t,e,n,s,r,o,a=0){const c=Xe(e,n,s,a,r),l=5+Math.floor(o()*3),u=Math.floor(o()*t.flowers.length),d=Ce(t.greens[1],.85);for(let f=0;f<l;f++){const h=o()*Math.PI*2,g=Math.sqrt(o())*.42,x=.18+o()*.16,m=Math.cos(h)*g,p=Math.sin(h)*g,y=new ti(.015,.018,x,3);y.translate(m,x/2,p),i.geo(y,()=>d,{matrix:c});const M=new jr(.075+o()*.025);M.scale(1,.6,1),M.translate(m,x+.02,p);const S=t.flowers[(u+(o()<.7?0:1+Math.floor(o()*3)))%t.flowers.length];i.geo(M,()=>S,{matrix:c})}for(let f=0;f<2;f++){const h=new Ta(.09,.2,4);h.translate((o()-.5)*.4,.1,(o()-.5)*.4),i.geo(h,()=>t.greens[2],{leaf:.5,matrix:c})}}const Ny=(i,t,e,n)=>((Math.atan2(e,t)/(Math.PI*2)+Math.hypot(t,e)/n*1.4)%1+1)%1<.5?i.candy:i.white;function Uy(i,t,e,n,s,r){const o=Xe(e,n,s,0,r),a=new ti(.05,.05,1.7,6);a.translate(0,.85,0),i.geo(a,()=>t.white,{matrix:o});const c=.58,l=new qn(c,24,12);l.scale(1,1,.3);const u=new ze().makeRotationX(-Math.PI/6),d=l.applyMatrix4(u),f=new ze().copy(u).invert(),h=new et;d.translate(0,1.7+c*.8,0),i.geo(d,(g,x,m)=>(h.set(g,x-1.7-c*.8,m).applyMatrix4(f),Math.abs(h.z)>.1&&Math.hypot(h.x,h.y)<c*.97?Ny(t,h.x,h.y,c):t.white),{matrix:o})}function Fy(i,t,e,n,s,r,o){const a=Xe(n,s,r,0,o),c=new Nn(1.7,.6,1.7);c.translate(0,.2,0),i.geo(c,(x,m)=>Ce(e.stone,m>.45?1:.72),{matrix:a});const l=new Nn(1.9,.14,1.9);l.translate(0,.5,0),i.geo(l,(x,m)=>Ce(e.stone,m>.55?1.05:.8),{matrix:a});const u=.95,d=new qn(u,28,18);d.translate(0,.57+u*.96,0),i.geo(d,()=>e.black,{flat:!1,matrix:a});const f=[n,s+(.57+u*.96)*o,r],h=Py,g=u*o;t.disc([f[0]+h[0]*g,f[1]+h[1]*g,f[2]+h[2]*g],h,[0,.5,-.866],u*.46*o,8,{c:f,r:g+.006})}function Oy(i,t,e,n,s,r,o){const a=Xe(e,n,s,0,r);if(!o){const d=Si([[1.3,-.3],[1.3,.42],[1.22,.5],[1.1,.5],[1.06,.42],[1.04,.3],[0,.3]],32);i.geo(d,(h,g,x)=>Math.hypot(h,x)<1.03&&g<.35?t.water:Ce(t.stone,g>.45?1:.7+.25*Rn(g/.42)),{matrix:a});const f=new au(1.04,28);f.rotateX(-Math.PI/2),f.translate(0,.37,0),i.geo(f,(h,g,x)=>Math.hypot(h,x)>.86?t.foam:t.water,{matrix:a})}const c=Si([[.22,o?-.5:.3],[.16,.5],[.13,.95],[.5,1.05],[.52,1.14],[.12,1.16],[0,1.16]],16);i.geo(c,(d,f)=>Ce(t.stone,f>1?1:.78),{matrix:a});const l=new lr(.2,1);l.scale(1,1.5,1),l.translate(0,1.42,0),i.geo(l,(d,f)=>f>1.45?t.white:t.foam,{matrix:a});const u=6;for(let d=0;d<u;d++){const f=d/u*Math.PI*2,h=new lr(.07,0);h.translate(Math.cos(f)*.62,1,Math.sin(f)*.62),i.geo(h,()=>t.foam,{matrix:a})}}function ky(i,t,e,n,s,r,o,a){const c=(r||.7)*o,l=.6,u=18,d=a()*Math.PI*2,f=t.lily,h=Ce(t.lily,.78);for(let g=0;g<u;g++){const x=d+l/2+(Math.PI*2-l)*g/u,m=d+l/2+(Math.PI*2-l)*(g+1)/u,p=[e+Math.cos(x)*c,n,s+Math.sin(x)*c],y=[e+Math.cos(m)*c,n,s+Math.sin(m)*c],M=[e+Math.cos(x)*c*.82,n+.01,s+Math.sin(x)*c*.82],S=[e+Math.cos(m)*c*.82,n+.01,s+Math.sin(m)*c*.82];i.tri([e,n+.015,s],M,S,f,0,[0,1,0]),i.quad(M,p,y,S,h,0,[0,1,0])}if(a()<.4){const g=new jr(.16*o);g.scale(1,.7,1),g.translate(e+Math.cos(d+Math.PI)*c*.3,n+.1,s+Math.sin(d+Math.PI)*c*.3),i.geo(g,()=>t.flowers[2])}}function By(i,t,e,n,s,r,o){const a=Xe(e,n,s,o()*6.28,r),c=7;for(let l=0;l<c;l++){const u=l/c*Math.PI*2+o(),d=.1+o()*.3,f=.8+o()*.5,h=new ti(.012,.035,f,3);if(h.translate(0,f/2-.2,0),h.rotateZ((o()-.5)*.25),h.translate(Math.cos(u)*d,0,Math.sin(u)*d),i.geo(h,(g,x)=>Ce(t.reeds,.75+.35*Rn(x/f)),{matrix:a}),l%2===0){const g=new ou(.05,.18,2,6);g.translate(Math.cos(u)*d,f-.3,Math.sin(u)*d),i.geo(g,()=>t.cattail,{matrix:a})}}}function Hy(i,t,e,n,s,r,o,a){const c=Xe(e,n,s,o,r),l=new Nn(1.6,.42,.55);l.translate(0,.11,0),i.geo(l,(f,h)=>h>.3?t.soil:Ce(t.wood,.7+.3*Rn((h+.1)/.4)),{matrix:c});const u=new Nn(1.7,.06,.65);u.translate(0,.33,0),i.geo(u,()=>t.wood,{matrix:c});const d=6;for(let f=0;f<d;f++){const h=-.65+1.3*f/(d-1),g=.12+a()*.1,x=new jr(.09);x.scale(1,.65,1),x.translate(h,.36+g,(a()-.5)*.2),i.geo(x,()=>t.flowers[(f+Math.floor(a()*2))%t.flowers.length],{matrix:c});const m=new Ta(.08,g+.05,4);m.translate(h,.36+g/2,0),i.geo(m,()=>t.greens[1],{leaf:.5,matrix:c})}}function Gy(i,t,e,n){const s=2*(n.r||3),r=4*(n.scale||1),o=(n.rot||0)*Math.PI/180,a=Math.cos(o),c=-Math.sin(o),l=-c,u=a,d=Math.max(2,Math.round(s/.34)),f=s/d,h=(g,x,m)=>{const p=n.x+a*g+l*x,y=n.z+c*g+u*x;return[p,e(p,y)+m,y]};for(let g=0;g<d;g++){const x=-s/2+g*f+.025,m=x+f-.05,p=Ce(t.wood,g%2?.92:1.04),y=r/2+(g%3===0?.06:0),M=h(x,-y,.03),S=h(m,-y,.03),R=h(m,y,.03),P=h(x,y,.03);i.quad(M,S,R,P,p,0,[0,1,0]);const b=h(x,-y,-.1),w=h(m,-y,-.1),v=h(m,y,-.1),_=h(x,y,-.1),T=Ce(p,.66);i.quad(M,b,w,S,T,0,[-l,0,-u]),i.quad(R,v,_,P,T,0,[l,0,u]),i.quad(S,w,v,R,T,0,[a,0,c]),i.quad(P,_,b,M,T,0,[-a,0,-c])}for(const g of[-1,1])for(const x of[-1,1]){const[m,p,y]=h(x*(s/2-.15),g*(r/2+.2),0),M=new ti(.1,.12,.7,8);M.translate(0,.1,0),i.geo(M,(S,R)=>Ce(t.wood,R>.4?1:.7),{matrix:Xe(m,p,y)})}}function Vy(i,t,e,n,s,r,o,a){const c=Xe(n,s,r,0,o),l=new Nn(.14,1.2,.14);l.translate(0,.45,0),i.geo(l,()=>e.woodDark,{matrix:c});const u=new Nn(1.2,.75,.1);u.rotateX(-.5),u.translate(0,1.15,.04),i.geo(u,(h,g,x)=>Ce(e.wood,x>.05?1.05:.75),{matrix:c});const d=[0,Math.sin(.5),Math.cos(.5)],f=[0,Math.cos(.5),-Math.sin(.5)];t.disc([n,s+1.15*o+d[1]*.056*o,r+.04*o+d[2]*.056*o],d,f,.3*o,a)}function ep(i,t,e){for(let n=0;n<=3.4;n+=.4)if(i.inside(t,e-n)||i.inside(t+n,e)||i.inside(t-.9,e-n)||i.inside(t+.9,e-n))return!1;return!0}function np(i,t,e,n){const s=i.heightAt;if(t.inside(e,n))return s(e,n);const r=t.nearest(e,n),o=Math.min(r.d,ma);return s(r.x,r.z)-.15-.07*(o/ma)}function Wy(i,t,e,n,s,r){const o=i.heightAt,a=i.hole&&i.hole.number||1;for(const c of i.props||[]){const l=c.scale||1,u=(c.rot||0)*Math.PI/180,d=i.surfaceAt(c.x,c.z)==="water",f=np(i,t,c.x,c.z);switch(c.type){case"tree":t.nearest(c.x,c.z).d<3&&!ep(t,c.x,c.z)?Ol(e,s,c.x,f,c.z,1.2*l,r,u):Qd(e,s,c.x,f,c.z,l*(c.r?c.r/.9:1),r,u);break;case"bush":Ol(e,s,c.x,f,c.z,l*(c.r?c.r/.55:1),r,u);break;case"flowers":tp(e,s,c.x,f,c.z,l*(c.r?c.r/.45:1),r,u);break;case"lollipop":Uy(e,s,c.x,f,c.z,l);break;case"statue8":Fy(e,n,s,c.x,f,c.z,l);break;case"fountain":Oy(e,s,c.x,d?f-.3:f,c.z,l,d);break;case"lilypad":ky(e,s,c.x,o(c.x,c.z)+.05,c.z,c.r,l,r);break;case"reeds":By(e,s,c.x,d?o(c.x,c.z)-.25:f,c.z,l,r);break;case"flowerbox":Hy(e,s,c.x,f,c.z,l,u,r);break;case"bridge":Gy(e,s,o,c);break;case"sign":Vy(e,n,s,c.x,f,c.z,l,a);break;case"toadstool":Dy(e,s,c.x,f,c.z,l,r);break}}}const Xy={tree:1.3,bush:.9,flowers:.8,lollipop:.9,statue8:1.5,fountain:1.6,sign:.9,flowerbox:1.1,reeds:.7,toadstool:.7};function qy(i,t){const e=[];for(const n of i.props||[]){const s=Xy[n.type];if(!s||t.inside(n.x,n.z))continue;const r=s*(n.scale||1)+.6,o=t.nearest(n.x,n.z);t.walled(o.seg,o.t)&&o.d+r<=t.apronW-.1||e.push({x:n.x,z:n.z,r})}return e}function Yy(i,t,e,n,s){if(!t.anyWalled||t.apronW<2)return 0;const r=[];for(const u of i.props||[])r.push([u.x,u.z,1.6]);for(const u of i.posts||[])r.push([u.x,u.z,u.r+1]);const o=(u,d,f)=>{for(const[h,g,x]of r)if(Math.hypot(h-u,g-d)<x+f)return!1;return!0},a=t.poly,c=t.count;let l=0;for(let u=0;u<c;u++){const d=a[u*2],f=a[u*2+1],h=a[(u+1)%c*2],g=a[(u+1)%c*2+1],x=t.segLen[u],m=t.segN[u*2],p=t.segN[u*2+1];for(let y=s()*1.2;y<x;y+=1.25+s()*.9){const M=y/x;if(!t.walled(u,M))continue;const S=1+s()*1.55,R=d+(h-d)*M+m*S,P=f+(g-f)*M+p*S;if(t.inside(R,P))continue;const b=t.nearest(R,P);if(b.d<.95||b.d>t.apronW-.35||!t.walled(b.seg,b.t))continue;const w=s(),v=np(i,t,R,P);if(w<.3&&b.d>1.55&&ep(t,R,P)&&o(R,P,1))Qd(e,n,R,v,P,.85+s()*.3,s,s()*6.28),r.push([R,P,1]);else if(w<.66&&o(R,P,.6))Ol(e,n,R,v,P,.8+s()*.4,s,s()*6.28),r.push([R,P,.6]);else if(o(R,P,.45))tp(e,n,R,v,P,.9+s()*.3,s,s()*6.28),r.push([R,P,.45]);else continue;l++}}return l}const wi=8,Br=4,ps=128;let Bn=null;const oh=i=>"#"+i.toString(16).padStart(6,"0");function ah(i){const t=i.getContext("2d");t.clearRect(0,0,i.width,i.height);for(let e=0;e<wi*Br;e++){const n=e%wi*ps+ps/2,s=Math.floor(e/wi)*ps+ps/2;t.fillStyle=oh(Le.flagDisc),t.beginPath(),t.arc(n,s,ps*.47,0,Math.PI*2),t.fill();const r=String(e+1);t.fillStyle=oh(Le.eightInk),t.font=`${r.length>1?66:82}px "Lilita One", "Arial Black", "Arial Rounded MT Bold", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,n,s+5)}}function ip(){if(Bn)return Bn;if(typeof document>"u")return Bn=new iu(new Uint8Array([255,255,255,255]),1,1),Bn.colorSpace=pn,Bn.needsUpdate=!0,Bn;const i=document.createElement("canvas");return i.width=wi*ps,i.height=Br*ps,ah(i),Bn=new Xd(i),Bn.colorSpace=pn,Bn.anisotropy=4,document.fonts&&document.fonts.load&&document.fonts.load('80px "Lilita One"').then(()=>{ah(i),Bn.needsUpdate=!0}).catch(()=>{}),Bn}const Ky=i=>i!==null&&i===Bn;function sp(i){const t=Math.max(0,Math.min(wi*Br-1,(i|0)-1)),e=t%wi,n=Math.floor(t/wi);return[e/wi,1-(n+1)/Br,1/wi,1/Br]}const Mc=new et,Wo=new et,Hs=new et,Fi=new et;class $y{constructor(){this.pos=[],this.nor=[],this.uv=[]}get count(){return this.pos.length/9}disc(t,e,n,s,r,o=null){Hs.set(e[0],e[1],e[2]).normalize(),Wo.set(n[0],n[1],n[2]),Mc.crossVectors(Wo,Hs).normalize(),Wo.crossVectors(Hs,Mc).normalize();const[a,c,l,u]=sp(r),d=24,f=[];for(let g=0;g<=d;g++){const x=g/d*Math.PI*2;f.push(Math.cos(x),Math.sin(x))}const h=(g,x)=>{Fi.set(t[0],t[1],t[2]).addScaledVector(Mc,g*s).addScaledVector(Wo,x*s);let m=Hs.x,p=Hs.y,y=Hs.z;if(o){const M=Fi.x-o.c[0],S=Fi.y-o.c[1],R=Fi.z-o.c[2],P=Math.hypot(M,S,R)||1;m=M/P,p=S/P,y=R/P,Fi.set(o.c[0]+m*o.r,o.c[1]+p*o.r,o.c[2]+y*o.r)}this.pos.push(Fi.x,Fi.y,Fi.z),this.nor.push(m,p,y),this.uv.push(a+(.5+.47*g)*l,c+(.5+.47*x)*u)};for(let g=0;g<d;g++){const x=f[g*2],m=f[g*2+1],p=f[g*2+2],y=f[g*2+3];h(0,0),h(x*.5,m*.5),h(p*.5,y*.5),h(x*.5,m*.5),h(x,m),h(p,y),h(x*.5,m*.5),h(p,y),h(p*.5,y*.5)}}build(){const t=new Ze;return t.setAttribute("position",new Ie(this.pos,3)),t.setAttribute("normal",new Ie(this.nor,3)),t.setAttribute("uv",new Ie(this.uv,2)),t.computeBoundingSphere(),t}}const Lr=3,Gs=1.7,yc=1.06;function jy(i,t,e,n){const s=new ti(.07,.075,Lr+.7,8,16);s.translate(0,(Lr+.7)/2-.7,0);const r=fe(Le.pinWhite),o=fe(Le.pinBand),a=Lr/8;i.geo(s,(l,u)=>u>0&&Math.floor(u/a)%2===1?o:r,{flat:!1,matrix:new ze().makeTranslation(t,e,n)});const c=new qn(.09,10,8);c.translate(t,e+Lr+.05,n),i.geo(c,()=>r,{flat:!1})}const Zy=`
uniform float uTime;
uniform float uAmp;
float ebgWave(float x) { return sin(x * 3.2 - uTime * 6.5) * 0.5 + sin(x * 5.3 - uTime * 10.0 + 1.3) * 0.2; }
float ebgWaveD(float x) { return cos(x * 3.2 - uTime * 6.5) * 1.6 + cos(x * 5.3 - uTime * 10.0 + 1.3) * 1.06; }
`,Jy=`
uniform vec4 uCell;
uniform vec2 uDiscC;
uniform vec2 uDiscS;
uniform vec3 uCloth;
`,Qy=`
#ifdef USE_MAP
{
  vec2 cuv = (vMapUv - uDiscC) / uDiscS + 0.5;
  float ins = step(0.0, cuv.x) * step(cuv.x, 1.0) * step(0.0, cuv.y) * step(cuv.y, 1.0);
  vec4 tx = texture2D(map, uCell.xy + clamp(cuv, 0.0, 1.0) * uCell.zw);
  vec3 cc = mix(uCloth, tx.rgb, tx.a * ins);
  cc *= mix(0.78, 1.0, smoothstep(0.0, 0.06, vMapUv.x));
  diffuseColor.rgb *= cc;
}
#endif
`;function t2(i){const t=new gs;t.name="course-flag";const e=new Ss(Gs,yc,14,3);e.translate(Gs/2+.05,Lr-yc/2-.06,0);const n=ip(),s=.78,r={uTime:{value:0},uAmp:{value:1},uCell:{value:new Ge(...sp(i))},uDiscC:{value:new ce(.56,.5)},uDiscS:{value:new ce(s/Gs,s/yc)},uCloth:{value:fe(Le.flagCloth)}},o=new Ca({color:16777215,map:n,side:Pn});o.onBeforeCompile=c=>{Object.assign(c.uniforms,r);let l=c.vertexShader;l=Ln(l,"#include <common>",Zy),l=Ln(l,"#include <beginnormal_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Gs.toFixed(3)}, 0.0, 1.0);
  float dz = (ebgWaveD(position.x) * kk + ebgWave(position.x) / ${Gs.toFixed(3)}) * 0.18 * uAmp;
  objectNormal = normalize(vec3(-dz, 0.0, 1.0));
}`),l=Ln(l,"#include <begin_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Gs.toFixed(3)}, 0.0, 1.0);
  transformed.z += ebgWave(position.x) * 0.18 * uAmp * kk;
  transformed.y -= kk * kk * 0.08;
}`),c.vertexShader=l;let u=c.fragmentShader;u=Ln(u,"#include <common>",Jy),u=Ln(u,"#include <map_fragment>",Qy,"replace"),c.fragmentShader=u},o.customProgramCacheKey=()=>"ebg-flag-v1";const a=new Ve(e,o);return a.name="course-flag-cloth",t.add(a),{group:t,uniforms:r,cloth:a}}const e2=`
varying vec2 vLocal;
void main() {
  vLocal = position.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,n2=`
uniform float uR;
uniform float uLip;
uniform float uTime;
uniform vec2 uLightDir;
uniform vec3 uInside;
uniform vec3 uLiner;
uniform vec3 uHalo;
varying vec2 vLocal;
vec4 ebgOver(vec4 dst, vec3 c, float a) {
  float o = a + dst.a * (1.0 - a);
  vec3 rgb = (c * a + dst.rgb * dst.a * (1.0 - a)) / max(o, 1e-4);
  return vec4(rgb, o);
}
void main() {
  float r = length(vLocal);
  float aa = max(fwidth(r), 1e-4);
  float hole = 1.0 - smoothstep(uR * 0.86 - aa, uR * 0.86 + aa, r);
  float liner = (1.0 - smoothstep(uR - aa, uR + aa, r)) - hole;
  float halo = smoothstep(uR - aa, uR + aa, r) * (1.0 - smoothstep(uR, uR + 0.45, r));
  float lip = 1.0 - smoothstep(0.025, 0.025 + aa * 1.5, abs(r - uLip));
  float ph = fract(uTime / 2.2);
  float pr = uR * 1.05 + ph * 1.5;
  float pulse = (1.0 - smoothstep(0.04, 0.04 + aa * 1.5, abs(r - pr))) * (1.0 - ph) * smoothstep(0.0, 0.08, ph) * 0.3;
  // inside: the wall facing the sun is lit, the near wall sits in shadow
  float lit = dot(vLocal / max(r, 1e-4), -uLightDir) * 0.5 + 0.5;
  vec3 inner = mix(uInside * 0.3, uInside * 4.5, lit * smoothstep(uR * 0.3, uR * 0.86, r));
  vec4 o = vec4(0.0);
  o = ebgOver(o, uHalo, halo * 0.32);
  o = ebgOver(o, vec3(1.0), lip * 0.16);
  o = ebgOver(o, vec3(1.0), pulse);
  o = ebgOver(o, uLiner, liner);
  o = ebgOver(o, inner, hole);
  if (o.a < 0.003) discard;
  gl_FragColor = o;
  #include <colorspace_fragment>
}
`;function i2(i,t,e,n,s){const r=[0,.3,.6,.8,n*.86,n,n+.15,n+.35,n+s,n+s+.3,n*1.05+1.55],o=40,a=[],c=[];for(let S=0;S<r.length;S++){const R=S===0?1:o;for(let P=0;P<R;P++){const b=P/o*Math.PI*2,w=Math.cos(b)*r[S],v=Math.sin(b)*r[S];a.push(w,i(t+w,e+v)+.012,v)}}const l=S=>S===0?0:1+(S-1)*o;for(let S=0;S<o;S++)c.push(0,l(1)+(S+1)%o,l(1)+S);for(let S=1;S<r.length-1;S++){const R=l(S),P=l(S+1);for(let b=0;b<o;b++){const w=(b+1)%o;c.push(R+b,R+w,P+w,R+b,P+w,P+b)}}const u=new Ze;u.setAttribute("position",new Ie(a,3)),u.setIndex(c);const d=u.attributes.position,f=c.slice(0,3),h=d.getX(f[1])-d.getX(f[0]),g=d.getZ(f[1])-d.getZ(f[0]),x=d.getX(f[2])-d.getX(f[0]),m=d.getZ(f[2])-d.getZ(f[0]);if(g*x-h*m<0){for(let S=0;S<c.length;S+=3){const R=c[S+1];c[S+1]=c[S+2],c[S+2]=R}u.setIndex(c)}u.computeBoundingSphere();const p={uR:{value:n},uLip:{value:n+s},uTime:{value:0},uLightDir:{value:new ce(-.7071,-.7071)},uInside:{value:fe(Le.cupInside)},uLiner:{value:fe(Le.cupLiner)},uHalo:{value:fe(Le.blobShadow)}},y=new _n({uniforms:p,vertexShader:e2,fragmentShader:n2,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),M=new Ve(u,y);return M.name="course-cup",M.position.set(t,0,e),M.renderOrder=2,{mesh:M,uniforms:p}}const s2=.3,r2=.3,o2=1e3;function rp(i,t){const e=cu(t.round),n=t.heightAt,s=QM(String(t.id||"hole")),r=new gs;r.name="course";const o=ey(t),a=Ly(e),c=new ny,l=new $y,u=9+Math.floor(s()*7),d=9+(u-9+2+Math.floor(s()*4))%7,f=[u,d],h=yy(t,o,c,e,Le.poolBalls[(u-1)%8]);let g=0;t.posts.forEach((D,q)=>{const K=D.kind||"post";zy(c,l,a,D,n(D.x,D.z),K==="bumper"?g++:q,f),h.push({x:D.x,z:D.z,r:D.r})});const x=cy(t,o,h),m=hy(t,o,x,e,qy(t,o),i?i.tier:1);r.add(m.mesh);const p=vy(t,m,x,e);p&&r.add(p.mesh),Wy(t,o,c,l,a,s);const y=Yy(t,o,c,a,s),M=t.cup.x,S=t.cup.z,R=n(M,S);jy(c,M,R,S);const P=i2(n,M,S,Kt.HOLE_R,Kt.LIP_W);r.add(P.mesh);const b=t2(t.hole&&t.hole.number||1);b.group.position.set(M,R,S),r.add(b.group);const w=new Ve(c.build(),c2());w.name="course-solids",w.castShadow=!0,w.receiveShadow=!0,r.add(w);let v=null;l.count>0&&(v=new Ve(l.build(),new Ca({map:ip()})),v.name="course-labels",v.receiveShadow=!0,r.add(v)),r.userData.stats={decor:y},i&&i.scene&&i.scene.add(r),i&&i.renderer&&i.renderer.shadowMap&&(i.renderer.shadowMap.needsUpdate=!0);let _=0,T=0,z=0,U=!1;const X=m.uniforms;function Y(D,q){if(U)return;const K=q%o2,nt=D/s2;T+=Math.max(-nt,Math.min(nt,_-T)),X.uTime.value=K,X.uFlow.value=T*T*(3-2*T),p&&(p.uniforms.uTime.value=K),P.uniforms.uTime.value=K,b.uniforms.uTime.value=K,z>0&&(z=Math.max(0,z-D)),b.uniforms.uAmp.value=1+Math.min(1,z/.08)}function Q(D){_=D>1?1:D>0?D:0}function xt(){z=r2}function ot(D){if(!D||!D.position)return;const q=D.position.x-M,K=D.position.z-S;if(q*q+K*K<1e-8)return;const nt=Math.atan2(q,K);b.group.rotation.y=nt;const O=(i.yaw||0)+225*Math.PI/180;P.uniforms.uLightDir.value.set(Math.sin(O),Math.cos(O))}function k(){U||(U=!0,r.removeFromParent(),r.traverse(D=>{if(!D.isMesh)return;D.geometry.dispose();const q=Array.isArray(D.material)?D.material:[D.material];for(const K of q)K.map&&!Ky(K.map)&&K.map.dispose(),K.dispose()}),x.mask.dispose(),x.aux.dispose())}return i&&i.camera&&ot(i.camera),{group:r,update:Y,setFlow:Q,wiggleFlag:xt,faceCamera:ot,dispose:k}}const a2=`
varying float vLeaf;
varying vec3 vLeafPos;
float lfH(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float lfNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lfH(i), lfH(i + vec2(1.0, 0.0)), f.x), mix(lfH(i + vec2(0.0, 1.0)), lfH(i + vec2(1.0, 1.0)), f.x), f.y);
}
`;function c2(){const i=new Ca({color:16777215,vertexColors:!0});return i.onBeforeCompile=t=>{let e=t.vertexShader;e=Ln(e,"#include <common>",`attribute float aLeaf;
varying float vLeaf;
varying vec3 vLeafPos;`),e=Ln(e,"#include <begin_vertex>",`vLeaf = aLeaf;
vLeafPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.vertexShader=e;let n=t.fragmentShader;n=Ln(n,"#include <common>",a2),n=Ln(n,"#include <color_fragment>",`{
  vec2 lp = vLeafPos.xz * 4.5 + vec2(vLeafPos.y * 3.1, vLeafPos.y * -2.3);
  float ln = lfNoise(lp) * 0.65 + lfNoise(lp * 2.7) * 0.35;
  diffuseColor.rgb *= 1.0 + vLeaf * (ln - 0.5) * 0.5;
}`),t.fragmentShader=n},i.customProgramCacheKey=()=>"ebg-solids-v1",i}const Oi=Kt.R,Yi=Math.PI*2,l2=["classic","tennis","beach","planet","donut","snow","gold"],u2=14,ch=1.4,Xo=.24,f2=.12,lh=.38,uh=.34,Sc=.7,h2=.12,wc=.16,qo=.35,_i=i=>i<0?0:i>1?1:i,$e=(i,t,e)=>{const n=_i((e-i)/(t-i));return n*n*(3-2*n)},ke=i=>[i>>16&255,i>>8&255,i&255];function je(i,t,e){i[0]+=(t[0]-i[0])*e,i[1]+=(t[1]-i[1])*e,i[2]+=(t[2]-i[2])*e}function Ci(i,t){i[0]=t[0],i[1]=t[1],i[2]=t[2]}function d2(i,t){i[0]*=t,i[1]*=t,i[2]*=t}const Zr=i=>Math.acos(i<-1?-1:i>1?1:i);function Mi(i,t,e,n){let s=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,1274126177)^Math.imul(n+1,2246822519);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function op(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=i-s,c=t-r,l=e-o,u=a*a*(3-2*a),d=c*c*(3-2*c),f=l*l*(3-2*l),h=(g,x,m)=>g+(x-g)*m;return h(h(h(Mi(s,r,o,n),Mi(s+1,r,o,n),u),h(Mi(s,r+1,o,n),Mi(s+1,r+1,o,n),u),d),h(h(Mi(s,r,o+1,n),Mi(s+1,r,o+1,n),u),h(Mi(s,r+1,o+1,n),Mi(s+1,r+1,o+1,n),u),d),f)}function ur(i,t,e,n,s=4){let r=.5,o=1,a=0,c=0;for(let l=0;l<s;l++)a+=r*op(i*o,t*o,e*o,n+l*17),c+=r,r*=.5,o*=2.03;return a/c}function ap(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function p2(i,t,e,n){const s=.809016994375,r=-.587785252292,o=-s,a=r;i=Math.abs(i);let c=Math.max(s*i+r*t,0)*2;i-=c*s,t-=c*r,c=Math.max(o*i+a*t,0)*2,i-=c*o,t-=c*a,i=Math.abs(i),t-=e;const l=n*-r-0,u=n*s-1,d=Math.min(e,Math.max(0,(i*l+t*u)/(l*l+u*u))),f=i-l*d,h=t-u*d;return Math.sqrt(f*f+h*h)*Math.sign(t*l-i*u)}const m2=ke(Le.cueBody),g2=ke(Le.cueDots),x2=ke(Le.eightBody),v2=ke(Le.eightDisc),li=Le.poolBalls.map(ke),qr=ke(16513779);function _2(i,t,e,n,s){Ci(s,m2);const r=Zr(Math.max(Math.abs(i),Math.abs(t),Math.abs(e)));je(s,g2,$e(.2+n,.2-n,r))}const fh=.52;function M2(i,t,e,n,s){Ci(s,x2);const r=Zr(Math.abs(e));je(s,v2,$e(fh+n,fh-n,r))}const kl=.72,Bl=.28,y2=2*Math.sqrt(kl*Bl),ra=(i,t)=>(t[0]=kl*Math.cos(i)+Bl*Math.cos(3*i),t[1]=y2*Math.sin(2*i),t[2]=kl*Math.sin(i)-Bl*Math.sin(3*i),t),tr=72,bc=(()=>{const i=new Float64Array(tr*3),t=[0,0,0];for(let e=0;e<tr;e++)ra(e/tr*Yi,t),i[e*3]=t[0],i[e*3+1]=t[1],i[e*3+2]=t[2];return i})(),On=[0,0,0];function S2(i,t,e){let n=-2,s=0;for(let a=0;a<tr;a++){const c=i*bc[a*3]+t*bc[a*3+1]+e*bc[a*3+2];c>n&&(n=c,s=a)}let r=(s-1)/tr*Yi,o=(s+1)/tr*Yi;for(let a=0;a<14;a++){const c=r+(o-r)*.382,l=r+(o-r)*.618;ra(c,On);const u=i*On[0]+t*On[1]+e*On[2];ra(l,On);const d=i*On[0]+t*On[1]+e*On[2];u>d?o=l:r=c}return ra((r+o)/2,On),Zr(i*On[0]+t*On[1]+e*On[2])}const w2=ke(13952570),b2=ke(16316138),E2=ke(11123498);function T2(i,t,e,n,s){Ci(s,w2),d2(s,.94+.12*ur(i*9+3,t*9,e*9,11,3));const r=S2(i,t,e);je(s,E2,$e(.085+n,.085-n,r)*.8),je(s,b2,$e(.05+n,.05-n,r))}const Ec=[li[2],qr,li[1],li[0],qr,li[5]];function A2(i,t,e,n,s){let r=Math.atan2(e,-i);r<0&&(r+=Yi);const o=Yi/6,a=Math.floor(r/o)%6,c=r-a*o,l=Math.sqrt(Math.max(0,1-t*t));Ci(s,Ec[a]);const u=Math.min(c,o-c)*l,d=c<o/2?Ec[(a+5)%6]:Ec[(a+1)%6];je(s,d,$e(n,-n,u));const f=Zr(Math.abs(t));je(s,qr,$e(.36+n,.36-n,f)),je(s,li[0],$e(.12+n,.12-n,f))}const C2=ke(2052008),R2=ke(4167142),P2=ke(15326364),L2=ke(4170573),I2=ke(9227102),D2=ke(16055039);function z2(i,t,e,n,s){const r=ur(i*1.9+7.1,t*1.9+3.3,e*1.9+1.7,5,5);Ci(s,C2),je(s,R2,$e(.36,.5,r));const o=.52,a=.012+n*.5;je(s,P2,$e(o-a,o+a,r)),je(s,L2,$e(o+.012-a,o+.012+a,r)),je(s,I2,$e(.6,.7,r)*.8);const c=Math.abs(t)-(.84+.07*(ur(i*5,t*5,e*5,9,3)-.5));je(s,D2,$e(-n,n,c))}const N2=ke(14262363),U2=ke(15778430),Tc=ke(16748480),F2=ke(15036070),hh=(()=>{const i=ap(388824),t=[],e=[li[0],li[1],qr,li[5],li[4],li[3],qr];for(let n=0;t.length<64&&n<1e3;n++){const s=i()*2-1,r=i()*Yi,o=Math.sqrt(1-s*s),a=[o*Math.cos(r),s,o*Math.sin(r)];if(a[1]<.08)continue;let c=!1;for(const M of t)if(M.c[0]*a[0]+M.c[1]*a[1]+M.c[2]*a[2]>.985){c=!0;break}if(c)continue;let l=-a[2],u=0,d=a[0],f=Math.hypot(l,u,d)||1;l/=f,u/=f,d/=f;const h=a[1]*d-a[2]*u,g=a[2]*l-a[0]*d,x=a[0]*u-a[1]*l,m=i()*Math.PI,p=[l*Math.cos(m)+h*Math.sin(m),u*Math.cos(m)+g*Math.sin(m),d*Math.cos(m)+x*Math.sin(m)],y=[a[1]*p[2]-a[2]*p[1],a[2]*p[0]-a[0]*p[2],a[0]*p[1]-a[1]*p[0]];t.push({c:a,t1:p,t2:y,col:e[t.length%e.length]})}return t})();function O2(i,t,e,n,s){const r=Math.atan2(e,-i),o=-.08+.09*Math.sin(r*7)+.05*Math.sin(r*3+1.3)+.06*(ur(i*4,t*4,e*4,21,3)-.5);Ci(s,N2),je(s,U2,$e(-.55,-.05,t)*.7);const a=$e(o-n,o+n,t);if(a<=0)return;const c=[Tc[0],Tc[1],Tc[2]];je(c,F2,$e(o+.09,o,t)*.8);for(let l=0;l<hh.length;l++){const u=hh[l];if(i*u.c[0]+t*u.c[1]+e*u.c[2]<.97)continue;const f=i*u.t1[0]+t*u.t1[1]+e*u.t1[2],h=i*u.t2[0]+t*u.t2[1]+e*u.t2[2],g=Math.max(0,Math.abs(f)-.07),x=Math.sqrt(g*g+h*h)-.026,m=$e(n,-n,x);m>0&&je(c,u.col,m)}je(s,c,a)}const k2=ke(16120319),B2=ke(13229038),H2=ke(11455462),dh=(()=>{const i=ap(77),t=[];for(let e=0;e<9;e++){const n=i()*2-1,s=i()*Yi,r=Math.sqrt(1-n*n);t.push([r*Math.cos(s),n,r*Math.sin(s),.12+i()*.1])}return t})();function G2(i,t,e,n,s){Ci(s,k2),je(s,B2,$e(.45,.75,ur(i*3.2,t*3.2,e*3.2,31,4))*.75);for(let r=0;r<dh.length;r++){const o=dh[r],a=Zr(i*o[0]+t*o[1]+e*o[2]),c=o[3]*(.8+.4*op(i*12,t*12,e*12,41+r));je(s,H2,$e(c+n*2,c-n*2,a)*.85)}Mi(Math.floor(i*90),Math.floor(t*90),Math.floor(e*90),5)>.992&&Ci(s,[255,255,255])}const V2=ke(12091423),W2=ke(15249982),X2=ke(16769674),q2=ke(16774340),Y2=ke(8015376);function K2(i,t,e,n,s){Ci(s,W2);const r=ur(i*2.5,t*2.5,e*2.5,61,4);je(s,V2,$e(.55,.3,r)*.6),je(s,X2,$e(.55,.78,r)*.6);const o=Math.abs(e);if(o<.6)return;const a=(e>0?i:-i)/o,c=t/o,l=p2(a,c+.03,.42,.45);je(s,Y2,$e(.035+n,.035-n,l)),je(s,q2,$e(n,-n,l))}const ph={classic:{paint:_2,specular:5592405,shininess:80,rimDark:.25},tennis:{paint:T2,specular:2236962,shininess:18,rimDark:.3},beach:{paint:A2,specular:6710886,shininess:70,rimDark:.25},planet:{paint:z2,specular:4868682,shininess:50,rimDark:.15},donut:{paint:O2,specular:3815994,shininess:40,rimDark:.25},snow:{paint:G2,specular:7829367,shininess:60,rimDark:.3},gold:{paint:K2,specular:16765562,shininess:140,rimDark:.12}};function Hl(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext&&e.getContext("2d");return n?{c:e,g:n}:null}function mh(i,t){const{c:e,g:n}=i,s=e.width,r=e.height;if(!n.createImageData||!n.putImageData)return;const o=n.createImageData(s,r),a=o.data,c=Math.PI/r*.75,l=[0,0,0];for(let u=0;u<r;u++){const d=(u+.5)/r*Math.PI,f=Math.sin(d),h=Math.cos(d);for(let g=0;g<s;g++){const x=(g+.5)/s*Yi;t(-Math.cos(x)*f,h,Math.sin(x)*f,c,l);const m=(u*s+g)*4;a[m]=l[0],a[m+1]=l[1],a[m+2]=l[2],a[m+3]=255}}n.putImageData(o,0,0)}const lu='"Lilita One", "Arial Black", system-ui, sans-serif';function gh(i,t,e){const{c:n,g:s}=i,r=n.width,o=n.height,a=Math.ceil(o*.42),c=Hl(a,a);if(!c||!s.drawImage)return;const l=c.g;l.fillStyle="#"+Le.eightInk.toString(16).padStart(6,"0"),l.font=`${Math.round(o*.27)}px ${lu}`,l.textAlign="center",l.textBaseline="middle",l.fillText(t,a/2,a/2+o*.012);const u=e*r,d=o/2;for(let f=0;f<a;f++){const h=d-a/2+f,g=(.5-(h+.5)/o)*Math.PI,x=1/Math.max(.2,Math.cos(g));s.drawImage(c.c,0,f,a,1,u-a*x/2,h,a*x,1)}}function xh(i,t){const e=new Xd(i.c);return e.colorSpace=pn,e.anisotropy=t,e.wrapS=ua,e}function vh(i,{rim:t=0,rimStrength:e=0,rimDark:n=0,specular:s=6710886,shininess:r=90,transparent:o=!1,key:a="ball-rim-v1"}={}){const c=new iM({map:i,shininess:r,specular:s,transparent:o,depthWrite:!0}),l=new me(t),u={value:l.clone().multiplyScalar(e)},d={value:n};return c.onBeforeCompile=f=>{f.uniforms.uRim=u,f.uniforms.uRimDark=d,f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRim;
uniform float uRimDark;`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","float rimF = pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 3.0 );","totalEmissiveRadiance += uRim * rimF;","diffuseColor.rgb *= 1.0 - uRimDark * rimF;"].join(`
`))},c.customProgramCacheKey=()=>a,c.userData.uniforms={uRim:u,uRimDark:d},c.userData.rimBase=l,c}const $2=`
attribute float aAlpha;
varying vec2 vP;
varying float vA;
void main() {
  vP = uv * 2.0 - 1.0;
  vA = aAlpha;
  vec4 p = vec4( position, 1.0 );
#ifdef USE_INSTANCING
  p = instanceMatrix * p;
#endif
  gl_Position = projectionMatrix * modelViewMatrix * p;
}`,j2=`
uniform vec3 uColor;
uniform float uOpacity;
varying vec2 vP;
varying float vA;
void main() {
  float r = length( vP );
  float a = 1.0 - smoothstep( 0.3, 1.0, r );
  a *= a * ( 3.0 - 2.0 * a );
  gl_FragColor = vec4( uColor, a * uOpacity * vA );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function Z2(i){if(!i||typeof document>"u"||!document.createElement)return null;const t=document.createElement("div");t.className="ebg-eight-marker",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",pointerEvents:"none",display:"none",zIndex:"3",willChange:"transform"});const e=document.createElement("div");Object.assign(e.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",display:"none"});const n=document.createElement("div");Object.assign(n.style,{position:"absolute",left:"22px",top:"5px",width:"0px",height:"0px",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:"9px solid #ffffff",filter:"drop-shadow(0 0 1.5px rgba(16,36,26,0.9))"}),e.appendChild(n);const s=document.createElement("div");return Object.assign(s.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",boxSizing:"border-box",borderRadius:"50%",background:"#16161c",border:"2px solid #ffffff",boxShadow:"0 0 0 1.5px rgba(16,36,26,0.85), 0 2px 4px rgba(0,0,0,0.35)",color:"#ffffff",font:`13px/18px ${lu}`,textAlign:"center"}),s.textContent="8",t.appendChild(e),t.appendChild(s),i.appendChild(t),{el:t,arrowWrap:e,shown:!1,x:-1e9,y:-1e9,ang:1e9,arrowOn:!1}}class _h{constructor(){this.shown=!1,this.x=0,this.y=0,this.z=0,this.rx=0,this.rz=0,this.vx=0,this.vz=0,this.vy=0,this.anim="none",this.t=0,this.fx=0,this.fy=0,this.fz=0,this.hk="water",this.alpha=1,this.lastMode="off",this.synced=!1,this.lx=0,this.ly=0,this.lz=0,this.la=0,this.llv=null,this.lyaw=0}}class J2{constructor(){this.valid=!1,this.cx=0,this.cy=0,this.cz=0,this.bx=0,this.by=0,this.bz=0,this.vis=!1,this.anim="",this.w=0,this.h=0}}class Q2{constructor(){this.t=0,this.k=-1}}function tS(i,t={}){const{uiRoot:e=null,rig:n=null}=t,s=i.scene,r=i.tier??1,o=4,a=r===0?256:512,c=r===0?512:1024,l=new qn(Oi,48,24),u=Hl(c,c/2);let d=null;function f(){u&&(mh(u,M2),gh(u,"8",.25),gh(u,"8",.75),d&&(d.needsUpdate=!0))}u&&(f(),d=xh(u,o));let h=!1;try{const tt=typeof document<"u"?document.fonts:null;if(tt&&tt.load){const pt=tt.check?tt.check(`64px ${lu}`):!1;tt.load('64px "Lilita One"').then(()=>{!h&&!pt&&f()},()=>{})}}catch{}const g=vh(d,{rim:Le.eightRim,rimStrength:qo,specular:6710886,shininess:90,key:"ball-eight-v1"});d||g.color.setHex(Le.eightBody);const x=new Ve(l,g);x.name="eight-ball";const m=new Map,p=vh(null,{rimDark:.25,specular:5592405,shininess:80,transparent:!0,key:"ball-cue-v1"}),y=new Ve(l,p);y.name="cue-ball",y.renderOrder=2;for(const tt of[x,y])tt.castShadow=!1,tt.receiveShadow=!1,tt.frustumCulled=!0;s.add(x,y);const M=new Ss(1,1);M.rotateX(-Math.PI/2);const S=new da(new Float32Array(2),1);S.setUsage(Wi),M.setAttribute("aAlpha",S);const R=new _n({uniforms:{uColor:{value:new me(Le.blobShadow)},uOpacity:{value:.42}},vertexShader:$2,fragmentShader:j2,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),P=new H_(M,R,2);P.instanceMatrix.setUsage(Wi),P.frustumCulled=!1,P.renderOrder=1,P.name="ball-shadows",s.add(P);const b=Z2(e),w=[new _h,new _h],v=[y,x];let _="classic",T=1;const z=new Q2;let U=!0;const X=new J2,Y=new et,Q=new $i,xt=new et,ot=new et(0,1,0),k=new ze,D=new et,q=new et,K={x:0,y:0,onScreen:!1};let nt=null;function O(tt){const pt=n?n.goalYaw:NaN,H=n?n.goalPitch:NaN;tt.quaternion.setFromAxisAngle(ot,Number.isFinite(pt)?pt:i.yaw||0),Q.setFromAxisAngle(Y.set(1,0,0),-(Number.isFinite(H)?H:Math.PI/3)),tt.quaternion.multiply(Q)}O(x),O(y),y.quaternion.multiply(Q.setFromAxisAngle(Y.set(0,1,0),.6));function J(tt,pt,H){const rt=Math.sqrt(pt*pt+H*H);rt<1e-7||(Y.set(H/rt,0,-pt/rt),tt.quaternion.premultiply(Q.setFromAxisAngle(Y,rt/Oi)),tt.quaternion.normalize())}function ut(tt){ph[tt]||(tt="classic"),_=tt;const pt=ph[tt];let H=m.get(tt);if(!H){const jt=Hl(a,a/2);jt&&(mh(jt,pt.paint),H=xh(jt,o),m.set(tt,H))}const rt=!!p.map;p.map=H||null,rt!==!!p.map&&(p.needsUpdate=!0),H?p.color.setHex(16777215):p.color.setHex(Le.cueBody),p.specular.setHex(pt.specular),p.shininess=pt.shininess,p.userData.uniforms.uRimDark.value=pt.rimDark}ut("classic");function B(tt,pt){tt.anim="drop",tt.t=0,tt.x=pt.x,tt.y=pt.y+ch,tt.z=pt.z,tt.rx=pt.x,tt.rz=pt.z}function it(tt,pt,H){const rt=w[tt],jt=v[tt],ie=tt===1,qt=ie&&pt.visible&&pt.mode==="holed";let se=!1;if(qt)rt.anim!=="sink"&&rt.anim!=="inCup"&&(rt.shown&&rt.anim!=="hazard"?(rt.anim="sink",rt.t=0,rt.fx=rt.x,rt.fy=rt.y,rt.fz=rt.z):(rt.anim="inCup",se=!0)),rt.shown=!0;else if(pt.visible)(!rt.shown||rt.anim==="inCup"||rt.anim==="sink"||rt.anim==="hazard")&&(B(rt,pt),se=!0,O(jt)),rt.shown=!0;else if(ie&&pt.mode==="sunk"&&rt.shown&&rt.anim!=="hazard"){rt.anim="hazard",rt.t=0,rt.vy=0;const ne=n&&n.level;if(rt.hk=ne&&ne.hazardAt&&ne.hazardAt(rt.x,rt.z)==="oob"?"oob":"water",rt.hk==="oob"){const Wt=Math.sqrt(rt.vx*rt.vx+rt.vz*rt.vz);Wt<1.5&&Wt>1e-4&&(rt.vx*=1.5/Wt,rt.vz*=1.5/Wt)}}else rt.anim!=="hazard"&&(rt.shown=!1,rt.anim="none");rt.lastMode=pt.mode;const Yt=rt.x,E=rt.z;if(rt.anim==="hazard"){rt.t+=H;const ne=rt.t/Sc;if(rt.hk==="water"){const Wt=Math.exp(-5*H);rt.vx*=Wt,rt.vz*=Wt,rt.x+=rt.vx*H,rt.z+=rt.vz*H,rt.y-=(.4+2.2*ne)*H}else rt.x+=rt.vx*H,rt.z+=rt.vz*H,rt.vy-=18*H,rt.y+=rt.vy*H;rt.t>=Sc&&(rt.anim="none",rt.shown=!1)}else if(rt.anim==="sink"){rt.t+=H;const ne=_i(rt.t/uh),Wt=1-Math.pow(1-_i(ne/.6),3),xe=.05*(1-ne)*Math.sin(ne*26);rt.x=rt.fx+(pt.x-rt.fx)*Wt+xe,rt.z=rt.fz+(pt.z-rt.fz)*Wt;const pe=_i((ne-.12)/.88);rt.y=rt.fy+(pt.y-rt.fy)*pe*pe,rt.t>=uh&&(rt.anim="inCup",rt.x=pt.x,rt.y=pt.y,rt.z=pt.z)}else if(rt.anim==="inCup")rt.x=pt.x,rt.y=pt.y,rt.z=pt.z;else if(rt.anim==="drop"){rt.t+=H,rt.x=pt.x,rt.z=pt.z;let ne;if(rt.t<Xo){const Wt=rt.t/Xo;ne=ch*(1-Wt*Wt)}else ne=f2*Math.sin(Math.PI*_i((rt.t-Xo)/(lh-Xo)));rt.y=pt.y+ne,rt.t>=lh&&(rt.anim="none",rt.y=pt.y)}else if(rt.shown){const ne=pt.x-rt.x,Wt=pt.z-rt.z;ne*ne+Wt*Wt>2.5*2.5&&(se=!0),rt.x=pt.x,rt.y=pt.y,rt.z=pt.z}if(rt.shown){const ne=rt.x-Yt,Wt=rt.z-E;if(!se&&rt.anim!=="drop"&&rt.anim!=="inCup"&&(ne!==0||Wt!==0)&&J(jt,ne,Wt),H>0&&!se&&rt.anim!=="hazard"){const xe=1-Math.exp(-H/.06),pe=ne/H,Me=Wt/H;Number.isFinite(pe)&&Number.isFinite(Me)&&(rt.vx+=(pe-rt.vx)*xe,rt.vz+=(Me-rt.vz)*xe)}se&&(rt.vx=0,rt.vz=0)}const C=tt===0?_i(Number.isFinite(pt.alpha)?pt.alpha:1):1;if(rt.alpha=rt.shown?C:0,jt.visible=rt.shown&&C>.01,tt===0&&(p.opacity=C),rt.synced&&rt.x===rt.lx&&rt.y===rt.ly&&rt.z===rt.lz&&rt.alpha===rt.la&&nt===rt.llv&&i.yaw===rt.lyaw&&rt.anim==="none")return;rt.synced=!0,rt.lx=rt.x,rt.ly=rt.y,rt.lz=rt.z,rt.la=rt.alpha,rt.llv=nt,rt.lyaw=i.yaw,U=!0,jt.visible&&jt.position.set(rt.x,rt.y,rt.z);const lt=nt?hs(nt,rt.x,rt.z):pt.y-Oi,ht=rt.y-Oi-lt;let bt=jt.visible?rt.alpha:0,At=2.1*Oi*1.25;ht>.01?(bt/=1+ht*1.6,At*=1+ht*.45):ht<-.01&&(bt*=_i(1+ht/(.9*Oi))),rt.anim==="hazard"&&rt.hk==="water"&&(bt*=_i(1-rt.t/(Sc*.5))),S.array[tt]=bt;const Jt=(i.yaw||0)+225*Math.PI/180,Vt=.25*Oi*Math.min(1.5,1+Math.max(0,ht)),Ht=rt.x-Math.sin(Jt)*Vt,de=rt.z-Math.cos(Jt)*Vt,Ot=.25,Qt=nt?hs(nt,Ht+Ot,de)-hs(nt,Ht-Ot,de):0,he=nt?hs(nt,Ht,de+Ot)-hs(nt,Ht,de-Ot):0;xt.set(-Qt/(2*Ot),1,-he/(2*Ot)).normalize(),Q.setFromUnitVectors(ot,xt),D.set(Ht,(nt?hs(nt,Ht,de):lt)+.03,de),q.set(At,1,At),k.compose(D,Q,q),P.setMatrixAt(tt,k)}function ft(){if(!b)return;const tt=w[1],pt=i.camera.matrixWorld.elements,H=i.size.w,rt=i.size.h;if(X.valid&&pt[12]===X.cx&&pt[13]===X.cy&&pt[14]===X.cz&&tt.x===X.bx&&tt.y===X.by&&tt.z===X.bz&&x.visible===X.vis&&tt.anim===X.anim&&H===X.w&&rt===X.h)return;X.valid=!0,X.cx=pt[12],X.cy=pt[13],X.cz=pt[14],X.bx=tt.x,X.by=tt.y,X.bz=tt.z,X.vis=x.visible,X.anim=tt.anim,X.w=H,X.h=rt;let jt=!1,ie=0,qt=0,se=0,Yt=!1;if(n&&tt.shown&&x.visible&&tt.anim!=="inCup"&&tt.anim!=="sink"&&tt.anim!=="hazard"){const E=Math.max(1,i.size.w),C=Math.max(1,i.size.h);n.groundToScreen(tt.x,tt.y,tt.z,K);const lt=2*Oi*n.pxPerMetre(tt.x,tt.z);if(!K.onScreen||lt<u2){jt=!0,ie=K.x,qt=K.y;const ht=24;if(!K.onScreen||ie<ht||ie>E-ht||qt<ht||qt>C-ht){const bt=E/2,At=C/2,Jt=ie-bt,Vt=qt-At,Ht=Math.abs(Jt)>1e-6?(E/2-ht)/Math.abs(Jt):1/0,de=Math.abs(Vt)>1e-6?(C/2-ht)/Math.abs(Vt):1/0,Ot=Math.min(1,Ht,de);ie=bt+Jt*Ot,qt=At+Vt*Ot,se=Math.atan2(Vt,Jt),Yt=!K.onScreen}}}jt!==b.shown&&(b.el.style.display=jt?"block":"none",b.shown=jt),jt&&((Math.abs(ie-b.x)>.5||Math.abs(qt-b.y)>.5)&&(b.x=ie,b.y=qt,b.el.style.transform=`translate3d(${(ie-11).toFixed(1)}px, ${(qt-11).toFixed(1)}px, 0)`),Yt!==b.arrowOn&&(b.arrowWrap.style.display=Yt?"block":"none",b.arrowOn=Yt),Yt&&Math.abs(se-b.ang)>.01&&(b.ang=se,b.arrowWrap.style.transform=`rotate(${se.toFixed(3)}rad)`))}function gt(tt,pt){if(h||!tt||tt.length<2)return;pt=Number.isFinite(pt)&&pt>0?Math.min(pt,.1):0,nt=n&&n.level?n.level:null,it(0,tt[0],pt),it(1,tt[1],pt),U&&(S.needsUpdate=!0,P.instanceMatrix.needsUpdate=!0,U=!1);let H=qo;z.t>0&&(z.t-=pt,H=z.t-wc>0?1:qo+(1-qo)*_i(z.t/wc)),H!==z.k&&(z.k=H,g.userData.uniforms.uRim.value.copy(g.userData.rimBase).multiplyScalar(H)),ft()}function Tt(){h=!0,s.remove(x,y,P),l.dispose(),M.dispose(),g.dispose(),p.dispose(),R.dispose(),d&&d.dispose(),m.forEach(tt=>tt.dispose()),m.clear(),P.dispose(),b&&b.el.parentNode&&b.el.parentNode.removeChild(b.el)}return{update:gt,flash(){z.t=h2+wc},setSkin:ut,setRound(tt){T=tt===2?2:1},dispose:Tt,get skin(){return _},get round(){return T},meshes:{cue:y,eight:x,shadows:P},skins:l2}}const kn=Kt.R,eS=9.8,Vs=0,Er=1,Mh=2,Ac=["iPos","iRot","iSize","iCol"],Cc=["iRing","iRingN","iRingC","iRingF"],nS=.3,iS=10,Tr=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};class yh{constructor(){this.on=!1,this.x=0,this.y=0,this.z=0}}const sS=`
attribute vec4 iPos;   // world xyz, shape
attribute vec4 iRot;   // axis xyz (RECT), angle
attribute vec4 iSize;  // width, height (m), add, unused
attribute vec4 iCol;   // linear rgb, alpha
varying vec2 vUv;
varying vec4 vCol;
varying float vShape;
varying float vAdd;
void main() {
  vUv = position.xy * 2.0;
  vCol = iCol;
  vShape = iPos.w;
  vAdd = iSize.z;
  vec2 c = position.xy * iSize.xy;
  float ca = cos( iRot.w );
  float sa = sin( iRot.w );
  vec4 mv;
  if ( iPos.w > 0.5 && iPos.w < 1.5 ) {
    // world-space tumbling rectangle (Rodrigues rotation about iRot.xyz), shaded by how it faces the sun
    vec3 k = iRot.xyz;
    vec3 v = vec3( c, 0.0 );
    vec3 r = v * ca + cross( k, v ) * sa + k * dot( k, v ) * ( 1.0 - ca );
    vec3 n = vec3( 0.0, 0.0, 1.0 );
    n = n * ca + cross( k, n ) * sa + k * dot( k, n ) * ( 1.0 - ca );
    vCol.rgb *= 0.72 + 0.4 * abs( dot( n, vec3( -0.55, 0.75, -0.37 ) ) );
    mv = viewMatrix * vec4( iPos.xyz + r, 1.0 );
  } else {
    mv = viewMatrix * vec4( iPos.xyz, 1.0 );
    mv.xy += vec2( c.x * ca - c.y * sa, c.x * sa + c.y * ca );
  }
  gl_Position = projectionMatrix * mv;
}`,rS=`
varying vec2 vUv;
varying vec4 vCol;
varying float vShape;
varying float vAdd;
void main() {
  float a;
  if ( vShape < 0.5 ) {
    float r = length( vUv );
    a = 1.0 - smoothstep( 0.3, 1.0, r );
  } else if ( vShape < 1.5 ) {
    vec2 p = abs( vUv );
    a = 1.0 - smoothstep( 0.86, 1.0, max( p.x, p.y ) );
  } else {
    vec2 p = abs( vUv );
    float d = min( p.x * 4.5 + p.y, p.y * 4.5 + p.x );
    a = max( 1.0 - smoothstep( 0.55, 1.0, d ), 1.0 - smoothstep( 0.0, 0.42, length( vUv ) ) );
  }
  a *= vCol.a;
  if ( a < 0.004 ) discard;
  gl_FragColor = vec4( vCol.rgb, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = vec4( gl_FragColor.rgb * a, a * ( 1.0 - vAdd ) );
}`,oS=`
attribute vec4 iRing;  // centre xyz, radius
attribute vec4 iRingN; // ground normal xyz, line width (m)
attribute vec4 iRingC; // linear rgb, alpha
attribute vec2 iRingF; // add, inner fill alpha
varying vec2 vP;
varying float vR;
varying float vW;
varying vec4 vCol;
varying vec2 vF;
void main() {
  vec3 n = normalize( iRingN.xyz );
  vec3 t = normalize( cross( n, abs( n.z ) < 0.9 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 ) ) );
  vec3 b = cross( t, n );
  float ext = iRing.w + iRingN.w;
  vP = position.xy * 2.0 * ext;
  vR = iRing.w;
  vW = iRingN.w;
  vCol = iRingC;
  vF = iRingF;
  vec3 w = iRing.xyz + t * vP.x + b * vP.y;
  gl_Position = projectionMatrix * viewMatrix * vec4( w, 1.0 );
}`,aS=`
varying vec2 vP;
varying float vR;
varying float vW;
varying vec4 vCol;
varying vec2 vF;
void main() {
  float r = length( vP );
  float aa = max( fwidth( r ), 1e-4 );
  float line = 1.0 - smoothstep( vW * 0.5 - aa, vW * 0.5 + aa, abs( r - vR ) );
  float fill = vF.y * ( 1.0 - smoothstep( vR - aa, vR + aa, r ) ) * ( 0.35 + 0.65 * r / max( vR, 1e-3 ) );
  float a = max( line, fill ) * vCol.a;
  if ( a < 0.004 ) discard;
  gl_FragColor = vec4( vCol.rgb, 1.0 );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor = vec4( gl_FragColor.rgb * a, a * ( 1.0 - vF.x ) );
}`;function Sh(i,t){return new _n({vertexShader:i,fragmentShader:t,transparent:!0,depthWrite:!1,depthTest:!0,side:Pn,blending:pd,blendEquation:Hi,blendSrc:jc,blendDst:Vr,blendSrcAlpha:jc,blendDstAlpha:Vr,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function wh(i,t){const e=i.updateRanges;(e.length!==1||e[0]!==t)&&(e.length=0,e.push(t)),i.needsUpdate=!0}function bh(i,t){const e=new Ss(1,1),n=new cM;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),n.setAttribute("uv",e.getAttribute("uv"));const s={};for(const[r,o]of t){const a=new da(new Float32Array(i*o),o);a.setUsage(Wi),n.setAttribute(r,a),s[r]=a}return n.instanceCount=0,n.boundingSphere=new Zi(new et,1e6),{geo:n,attrs:s}}function cS(i,t={}){const{events:e=null,play:n=null}=t,s=i.scene,r=i.tier??1,o=r===0?180:360,a=16,c=r===0?.4:1,l=bh(o,[["iPos",4],["iRot",4],["iSize",4],["iCol",4]]),u=Sh(sS,rS),d=new Ve(l.geo,u);d.frustumCulled=!1,d.renderOrder=5,d.name="fx-particles";const f=bh(a,[["iRing",4],["iRingN",4],["iRingC",4],["iRingF",2]]),h=Sh(oS,aS),g=new Ve(f.geo,h);g.frustumCulled=!1,g.renderOrder=3,g.name="fx-rings";const x=Ac.map(()=>({start:0,count:0})),m=Cc.map(()=>({start:0,count:0}));s.add(g,d);const p=new Float32Array(o),y=new Float32Array(o),M=new Float32Array(o),S=new Float32Array(o),R=new Float32Array(o),P=new Float32Array(o),b=new Float32Array(o),w=new Float32Array(o),v=new Float32Array(o),_=new Float32Array(o),T=new Float32Array(o),z=new Float32Array(o),U=new Float32Array(o),X=new Float32Array(o),Y=new Float32Array(o),Q=new Float32Array(o),xt=new Float32Array(o),ot=new Float32Array(o),k=new Float32Array(o),D=new Float32Array(o),q=new Float32Array(o),K=new Uint8Array(o),nt=new Float32Array(o),O=new Float32Array(o),J=new Uint8Array(o),ut=new Uint8Array(o),B=new Uint8Array(o);let it=0,ft=0;const gt=new Float32Array(a),Tt=new Float32Array(a),tt=new Float32Array(a),pt=new Float32Array(a),H=new Float32Array(a),rt=new Float32Array(a),jt=new Float32Array(a),ie=new Float32Array(a),qt=new Float32Array(a),se=new Float32Array(a),Yt=new Float32Array(a),E=new Float32Array(a),C=new Float32Array(a),lt=new Float32Array(a),ht=new Float32Array(a),bt=new Float32Array(a),At=new Float32Array(a),Jt=new Float32Array(a),Vt=new Float32Array(a),Ht=new Uint8Array(a);let de=0;const Ot=8,Qt=new Float32Array(Ot),he=new Float32Array(Ot),ne=new Float32Array(Ot),Wt=new Float32Array(Ot),xe=new Uint8Array(Ot),pe=new Uint8Array(Ot);let Me=2654435769;const ct=()=>(Me^=Me<<13,Me^=Me>>>17,Me^=Me<<5,(Me>>>0)/4294967296),Ct=(at,dt)=>at+(dt-at)*ct(),_t=new me,Et=at=>(_t.setHex(at),[_t.r,_t.g,_t.b]),Ut={white:Et(16777215),chalk:Et(Le.chalk),foam:Et(15268863),water:Et(8378092),gold:Et(16765503),dustDark:Et(5916208),dustTan:Et(10254924),sand:Et(14268530),leaf:Et(3108396),grey:Et(7037271),pool:Le.poolBalls.map(Et),cream:Et(16774358),streak8:Et(14674175),dustLight:Et(15326400)},st={};for(const at of[1,2]){const dt=cu(at);st[at]={fairway:Et(dt.fairwayLight),green:Et(dt.greenLight),rough:Et(dt.rough),sand:Et(dt.sand),ice:Et(dt.ice)}}const St=(at,dt)=>{const wt=Rt(),Dt=st[wt&&wt.round===2?2:1],Nt=Bt(at,dt);return Nt==="green"?Dt.green:Nt==="rough"?Dt.rough:Nt==="sand"?Dt.sand:Nt==="ice"?Dt.ice:Nt==="water"||Nt==="oob"?null:Dt.fairway},Rt=()=>n&&n.level||null,It=(at,dt)=>{const wt=Rt(),Dt=wt&&wt.heightAt?wt.heightAt(at,dt):0;return Number.isFinite(Dt)?Dt:0},Bt=(at,dt)=>{const wt=Rt();return wt&&wt.surfaceAt?wt.surfaceAt(at,dt):"fairway"};function le(){let at=it;for(let dt=0;dt<o;dt++){const wt=(it+dt)%o;if(!B[wt]){at=wt;break}}return it=(at+1)%o,B[at]||ft++,B[at]=1,at}function te(at,dt,wt,Dt,Nt,$t,Zt,kt,Se,ue,Te,Lt,Ae,ge,_e,en,Ne){const ve=le();if(p[ve]=at,y[ve]=dt,M[ve]=wt,S[ve]=Dt,R[ve]=Nt,P[ve]=$t,b[ve]=Zt,w[ve]=Zt,v[ve]=kt,_[ve]=Se,T[ve]=ue,xt[ve]=Te[0],ot[ve]=Te[1],k[ve]=Te[2],D[ve]=Lt,q[ve]=Ae,K[ve]=ge,nt[ve]=_e,O[ve]=en,J[ve]=Ne,ut[ve]=0,Y[ve]=Ct(0,Math.PI*2),Q[ve]=Ct(-6,6),ge===Er){let we=Ct(-1,1),on=Ct(-1,1),Yn=Ct(-1,1);const Pa=Math.sqrt(we*we+on*on+Yn*Yn)||1;we/=Pa,on/=Pa,Yn/=Pa,z[ve]=we,U[ve]=on,X[ve]=Yn,Q[ve]=Ct(5,12)*(ct()<.5?-1:1)}else z[ve]=0,U[ve]=1,X[ve]=0;return ve}function ye(at,dt,wt,Dt,Nt,$t,Zt,kt,Se,ue,Te,Lt=0,Ae=.05){const ge=de;de=(de+1)%a;const _e=.25,en=It(at+_e,dt)-It(at-_e,dt),Ne=It(at,dt+_e)-It(at,dt-_e);let ve=-en/(2*_e),we=1,on=-Ne/(2*_e);const Yn=Math.sqrt(ve*ve+we*we+on*on);ve/=Yn,we/=Yn,on/=Yn,gt[ge]=at,Tt[ge]=It(at,dt)+Ae,tt[ge]=dt,pt[ge]=ve,H[ge]=we,rt[ge]=on,jt[ge]=wt,ie[ge]=Dt,qt[ge]=Nt,se[ge]=$t,Yt[ge]=0,E[ge]=Zt,C[ge]=Lt,lt[ge]=kt[0],ht[ge]=kt[1],bt[ge]=kt[2],At[ge]=Se,Jt[ge]=ue,Vt[ge]=Te,Ht[ge]=1}function Ee(at,dt,wt,Dt,Nt,$t,Zt){for(let kt=0;kt<Dt;kt++){const Se=Ct(0,Math.PI*2),ue=Nt*Ct(.5,1);te(at,dt,wt,Math.cos(Se)*ue,Ct(.6,1.6)*Nt*.5,Math.sin(Se)*ue,Ct(.25,.45),Zt,Zt*.3,1,$t,1,.85,Vs,.4,3,0)}}function V(at,dt,wt,Dt,Nt,$t,Zt){const kt=It(at,dt)+.12;for(let Se=0;Se<wt;Se++){const ue=Ct(0,Math.PI*2),Te=Ct(.3,1)*Dt;te(at+Math.cos(ue)*.1,kt,dt+Math.sin(ue)*.1,Math.cos(ue)*Te,Ct(.3,.9),Math.sin(ue)*Te,Ct(.45,.75),$t,$t*2.6,1,Nt,Zt,0,Vs,-.15,2.6,0)}}function A(at,dt,wt,Dt){const Nt=It(at,dt)+.3;for(let $t=0;$t<wt;$t++){const Zt=Ct(0,Math.PI*2),kt=Ct(.6,3.2)*Dt,Se=Ct(6.5,11)*Dt,ue=Ut.pool[($t+Math.floor(ct()*7))%Ut.pool.length],Te=Ct(.18,.26);te(at+Math.cos(Zt)*.4,Nt,dt+Math.sin(Zt)*.4,Math.cos(Zt)*kt,Se,Math.sin(Zt)*kt,Ct(3.2,4.4),Te,Te,.6,ue,1,0,Er,.62,1.15,1)}}function N(at,dt,wt,Dt,Nt){for(let $t=0;$t<Ot;$t++)if(!pe[$t]){pe[$t]=1,Qt[$t]=at,xe[$t]=dt,he[$t]=wt,ne[$t]=Dt,Wt[$t]=Nt;return}}function W(at,dt,wt,Dt,Nt,$t){const Zt=St(at,dt);if(!Zt)return;const kt=It(at,dt)+.08;for(let Se=0;Se<$t;Se++){const ue=Ct(1.2,3.2)*(.6+.6*Nt),Te=Ct(-.9,.9);te(at+Ct(-.2,.2),kt,dt+Ct(-.2,.2),(wt+-Dt*Te)*ue,Ct(1.6,3.6)*(.7+.5*Nt),(Dt+wt*Te)*ue,Ct(.45,.8),Ct(.07,.12),.06,.45,Zt,1,0,Er,.55,1.6,2)}V(at,dt,Math.round(2+3*Nt),.5+.8*Nt,Zt===st[1].sand||Zt===st[2].sand?Ut.sand:Ut.dustLight,.2+.1*Nt,.28+.15*Nt)}function Z(at){const dt=Tr(.5,1,at&&Number.isFinite(at.power)?at.power:0);if(dt<=0||!n||!n.intent)return;const wt=n.intent;let Dt=Number.isFinite(wt.dx)?wt.dx:wt.ax,Nt=Number.isFinite(wt.dz)?wt.dz:wt.az;const $t=Math.sqrt(Dt*Dt+Nt*Nt);!($t>1e-6)||!Number.isFinite(wt.x)||!Number.isFinite(wt.z)||(Dt/=$t,Nt/=$t,W(wt.x-Dt*kn*.7,wt.z-Nt*kn*.7,-Dt*.6,-Nt*.6,dt,Math.round(3+6*dt)))}function j(at){const dt=at.x+at.nx*kn,wt=at.z+at.nz*kn,Dt=Math.min(1,(at.speed||0)/14),Nt=It(dt,wt)+kn;ye(dt,wt,.45,1+Dt*.6,.12,.04,.2,Ut.white,.9,.6,0);const $t=5+Math.round(Dt*5);for(let Se=0;Se<$t;Se++){const ue=Se%2?1:-1,Te=Ct(1.5,3.5)*(.5+Dt),Lt=-at.nz*ue,Ae=at.nx*ue,ge=Ct(-.35,.35);te(dt,Nt,wt,(Lt+at.nx*ge)*Te,Ct(.8,2.2),(Ae+at.nz*ge)*Te,Ct(.22,.4),Ct(.07,.12),.02,1,Se%3?Ut.white:Ut.chalk,1,.75,Vs,.5,4,0)}V(dt,wt,3,.8,Ut.dustDark,.16,.32);const Zt=Tr(8,15,at.speed||0);Zt>0&&W(dt,wt,at.nx,at.nz,Zt,Math.round(4+8*Zt));const kt=Tr(9,15.5,at.speed||0);kt>0&&typeof i.kickCamera=="function"&&i.kickCamera(kt)}function mt(at){const dt=at.speed||0;if(dt<.8)return;const wt=Math.min(1,dt/12),Dt=at.x-at.nx*kn*.95,Nt=at.z-at.nz*kn*.95,$t=at.id===0?.6:1,Zt=It(Dt,Nt)+kn*.6;if(at.kind==="hedge"||at.kind==="tree"){const kt=Math.round((2+5*wt)*$t);for(let Se=0;Se<kt;Se++){const ue=Ct(.8,2.2)*(.5+wt);te(Dt,Zt+.2,Nt,(at.nx+Ct(-.8,.8))*ue,Ct(1,3),(at.nz+Ct(-.8,.8))*ue,Ct(.6,1),Ct(.1,.16),.1,.6,Ut.leaf,1,0,Er,.35,2,2)}}else if(at.kind==="bumper")Ee(Dt,Zt,Nt,Math.round((3+5*wt)*$t),2.5+3*wt,Ut.gold,.14),ye(Dt,Nt,.3,1+wt,.1,.03,.22,Ut.cream,.8,.7,0);else{const kt=Math.round((2+4*wt)*$t);V(Dt,Nt,kt,.6+wt,at.kind==="cushion"?Ut.grey:Ut.dustDark,.14+.06*wt,.3+.2*wt),at.kind==="cushion"&&Ee(Dt,Zt,Nt,Math.round(2+3*wt),1.5+2*wt,Ut.chalk,.09)}}function Mt(at){const dt=at.x,wt=at.z;if(at.kind==="water"){ye(dt,wt,.35,2.4,.16,.04,.75,Ut.foam,.95,.25,.22,0,.08),ye(dt,wt,.2,1.6,.12,.03,.6,Ut.foam,.8,.25,0,.16,.08);const Dt=It(dt,wt)+.1,Nt=16;for(let $t=0;$t<Nt;$t++){const Zt=$t/Nt*Math.PI*2+Ct(-.2,.2),kt=Ct(1,2.6);te(dt,Dt,wt,Math.cos(Zt)*kt,Ct(3.5,6.5),Math.sin(Zt)*kt,1.4,Ct(.1,.16),.08,1,$t%3?Ut.foam:Ut.water,.95,.3,Vs,1,.6,2)}for(let $t=0;$t<5;$t++)te(dt+Ct(-.15,.15),Dt,wt+Ct(-.15,.15),Ct(-.4,.4),Ct(6,8.5),Ct(-.4,.4),1.4,Ct(.14,.2),.08,1,Ut.foam,.95,.3,Vs,1,.5,2)}else V(dt,wt,10,1.6,Ut.grey,.28,.5),Ee(dt,It(dt,wt)+.4,wt,5,2,Ut.white,.12)}function Pt(at){const dt=It(at.x,at.z)+kn+.2;for(let Dt=0;Dt<6;Dt++){const Nt=Dt/6*Math.PI*2;te(at.x,dt,at.z,Math.cos(Nt)*1.6,Ct(1.5,2.6),Math.sin(Nt)*1.6,Ct(.4,.6),.3,.05,1,Dt%2?Ut.gold:Ut.white,1,.8,Mh,.6,2.5,0)}const wt=Rt();wt&&wt.cup&&ye(wt.cup.x,wt.cup.z,Kt.HOLE_R,Kt.HOLE_R+.5,.14,.04,.3,Ut.gold,.9,.6,0)}function Xt(){const at=Rt();if(!at||!at.cup)return;const dt=at.cup.x,wt=at.cup.z;ye(dt,wt,Kt.HOLE_R,Kt.HOLE_R*3,.22,.04,.6,Ut.white,.95,.7,0),ye(dt,wt,Kt.HOLE_R,Kt.HOLE_R*2.2,.14,.03,.5,Ut.gold,.9,.7,0,.12);const Dt=It(dt,wt)+.2;for(let Nt=0;Nt<12;Nt++){const $t=Nt/12*Math.PI*2,Zt=Ct(1.4,2.6);te(dt,Dt,wt,Math.cos($t)*Zt,Ct(3,5.5),Math.sin($t)*Zt,Ct(.5,.8),Ct(.22,.32),.04,1,Nt%3?Ut.gold:Ut.white,1,.8,Mh,.8,1.8,0)}A(dt,wt,Math.round(10*c+4),.7)}function ee(at){if(!at||at.picked)return;const dt=at.level||Rt();if(!dt||!dt.cup)return;const wt=at.strokes-at.par,Dt=at.strokes===1,Nt=Dt||wt<=-2?150:wt===-1?100:wt===0?60:30,$t=Math.max(12,Math.round(Nt*c)),Zt=dt.cup.x,kt=dt.cup.z,Se=Dt||wt<=-2?Math.round($t*.4):$t;A(Zt,kt,Se,wt<=-1||Dt?1.15:.9),(Dt||wt<=-2)&&(N(.35,1,Zt-2,kt,Math.round($t*.3)),N(.7,1,Zt+2,kt,Math.round($t*.3)))}const re=[];e&&e.on&&(re.push(e.on("shot:fire",Z)),re.push(e.on("ball:contact",j)),re.push(e.on("ball:wall",mt)),re.push(e.on("ball:hazard",Mt)),re.push(e.on("ball:hop",Pt)),re.push(e.on("ball:holed",Xt)),re.push(e.on("hole:done",ee)));let I=0,L=NaN,F=NaN;function $(){if(!n||n.state!=="rolling"||!n.world){L=NaN;return}const at=n.world.balls[1];if(!at||at.mode!=="roll"){L=NaN;return}if(Number.isFinite(L)&&(I+=Math.sqrt((at.x-L)*(at.x-L)+(at.z-F)*(at.z-F))),L=at.x,F=at.z,I<.3||(I=0,Bt(at.x,at.z)!=="sand"))return;const dt=Math.sqrt(at.vx*at.vx+at.vz*at.vz);if(dt<.4)return;const wt=at.x-at.vx/dt*kn*.6,Dt=at.z-at.vz/dt*kn*.6;V(wt,Dt,2,.4+Math.min(1,dt/8),Ut.sand,.18,.55)}const G=[new yh,new yh];let vt=0;function yt(at){if(!n||n.state!=="rolling"||typeof n.balls!="function"||!(at>0)){G[0].on=!1,G[1].on=!1;return}const dt=n.balls();for(let wt=0;wt<2;wt++){const Dt=dt[wt],Nt=G[wt];if(!Dt||!Dt.visible||Dt.mode!==(wt===0?"cue":"roll")){Nt.on=!1;continue}const $t=Math.sqrt(Dt.vx*Dt.vx+Dt.vz*Dt.vz),Zt=wt===0?Tr(7,14,$t):Tr(5.5,13,$t);if(!Nt.on){Nt.on=!0,Nt.x=Dt.x,Nt.y=Dt.y,Nt.z=Dt.z;continue}const kt=Dt.x-Nt.x,Se=Dt.y-Nt.y,ue=Dt.z-Nt.z,Te=Math.sqrt(kt*kt+ue*ue);if(Zt<=0||Te>14||Te<1e-4){Nt.x=Dt.x,Nt.y=Dt.y,Nt.z=Dt.z;continue}const Lt=Math.min(.2,Math.max(.045,(1.5+3*Zt)/(Te/at))),Ae=Math.min(iS,Math.max(1,Math.ceil(Te/nS))),ge=wt===0?Ut.white:Ut.streak8,_e=2*kn*(.55+.35*Zt),en=.14+.26*Zt;vt+=Ae;for(let Ne=1;Ne<=Ae;Ne++){const ve=Ne/Ae,we=le();p[we]=Nt.x+kt*ve,y[we]=Nt.y+Se*ve,M[we]=Nt.z+ue*ve,S[we]=0,R[we]=0,P[we]=0,b[we]=Lt*(.7+.3*ve),w[we]=b[we],v[we]=_e,_[we]=_e*.25,T[we]=1,xt[we]=ge[0],ot[we]=ge[1],k[we]=ge[2],D[we]=en,q[we]=.4,K[we]=Vs,nt[we]=0,O[we]=0,J[we]=0,ut[we]=0,Y[we]=0,Q[we]=0,z[we]=0,U[we]=1,X[we]=0}Nt.x=Dt.x,Nt.y=Dt.y,Nt.z=Dt.z}}function Ft(at){at=Number.isFinite(at)&&at>0?Math.min(at,.1):0,$(),yt(at);for(let Lt=0;Lt<Ot;Lt++)pe[Lt]&&(Qt[Lt]-=at,Qt[Lt]<=0&&(pe[Lt]=0,xe[Lt]===1&&A(he[Lt],ne[Lt],Wt[Lt],1.15)));const dt=l.attrs.iPos.array,wt=l.attrs.iRot.array,Dt=l.attrs.iSize.array,Nt=l.attrs.iCol.array;let $t=0;if(ft>0)for(let Lt=0;Lt<o;Lt++){if(!B[Lt])continue;if(b[Lt]-=at,b[Lt]<=0){B[Lt]=0,ft--;continue}if(!ut[Lt]){const ve=Math.exp(-O[Lt]*at);if(S[Lt]*=ve,P[Lt]*=ve,R[Lt]=R[Lt]*ve-eS*nt[Lt]*at,p[Lt]+=S[Lt]*at,y[Lt]+=R[Lt]*at,M[Lt]+=P[Lt]*at,Y[Lt]+=Q[Lt]*at,K[Lt]===Er&&nt[Lt]>0&&(p[Lt]+=Math.sin(Y[Lt]*.7+Lt)*.4*at),J[Lt]&&R[Lt]<0){const we=It(p[Lt],M[Lt])+.03;if(y[Lt]<=we){if(J[Lt]===2){B[Lt]=0,ft--;continue}y[Lt]=we,ut[Lt]=1,z[Lt]=1,U[Lt]=0,X[Lt]=0,Y[Lt]=Math.PI/2+Ct(-.15,.15),b[Lt]>1.2&&(b[Lt]=1.2)}}}const Ae=1-b[Lt]/w[Lt],ge=Math.min(1,Ae*12),_e=ut[Lt]?Math.min(1,b[Lt]/1.2):Math.min(1,b[Lt]/(w[Lt]*.35)),en=v[Lt]+(_[Lt]-v[Lt])*Ae,Ne=$t*4;dt[Ne]=p[Lt],dt[Ne+1]=y[Lt],dt[Ne+2]=M[Lt],dt[Ne+3]=K[Lt],wt[Ne]=z[Lt],wt[Ne+1]=U[Lt],wt[Ne+2]=X[Lt],wt[Ne+3]=Y[Lt],Dt[Ne]=en,Dt[Ne+1]=en*T[Lt],Dt[Ne+2]=q[Lt],Dt[Ne+3]=0,Nt[Ne]=xt[Lt],Nt[Ne+1]=ot[Lt],Nt[Ne+2]=k[Lt],Nt[Ne+3]=D[Lt]*ge*_e,$t++}if(l.geo.instanceCount=$t,$t>0)for(let Lt=0;Lt<Ac.length;Lt++){const Ae=l.attrs[Ac[Lt]],ge=x[Lt];ge.count=$t*4,wh(Ae,ge)}d.visible=$t>0;const Zt=f.attrs.iRing.array,kt=f.attrs.iRingN.array,Se=f.attrs.iRingC.array,ue=f.attrs.iRingF.array;let Te=0;for(let Lt=0;Lt<a;Lt++){if(!Ht[Lt])continue;if(C[Lt]>0){C[Lt]-=at;continue}Yt[Lt]+=at;const Ae=Yt[Lt]/E[Lt];if(Ae>=1){Ht[Lt]=0;continue}const ge=1-(1-Ae)*(1-Ae)*(1-Ae),_e=Te*4;Zt[_e]=gt[Lt],Zt[_e+1]=Tt[Lt],Zt[_e+2]=tt[Lt],Zt[_e+3]=jt[Lt]+(ie[Lt]-jt[Lt])*ge,kt[_e]=pt[Lt],kt[_e+1]=H[Lt],kt[_e+2]=rt[Lt],kt[_e+3]=qt[Lt]+(se[Lt]-qt[Lt])*Ae,Se[_e]=lt[Lt],Se[_e+1]=ht[Lt],Se[_e+2]=bt[Lt],Se[_e+3]=At[Lt]*(1-Ae*Ae),ue[Te*2]=Jt[Lt],ue[Te*2+1]=Vt[Lt]*(1-Ae),Te++}if(f.geo.instanceCount=Te,Te>0)for(let Lt=0;Lt<Cc.length;Lt++){const Ae=f.attrs[Cc[Lt]],ge=m[Lt];ge.count=Te*Ae.itemSize,wh(Ae,ge)}g.visible=Te>0}function Gt(){B.fill(0),Ht.fill(0),pe.fill(0),ft=0,I=0,L=NaN,G[0].on=!1,G[1].on=!1,l.geo.instanceCount=0,f.geo.instanceCount=0,d.visible=!1,g.visible=!1}function ae(){for(const at of re)typeof at=="function"&&at();s.remove(d,g),l.geo.dispose(),f.geo.dispose(),u.dispose(),h.dispose()}return{update:Ft,clear:Gt,dispose:ae,get count(){return l.geo.instanceCount},get ringCount(){return f.geo.instanceCount},get streaks(){return vt}}}const Jn=Kt.R,Gl=.04,Rc=220,Pc=120,lS=.2,Eh={halfW:.27,haloW:.08,period:1,speed:2,startGap:Jn+.1},Th={halfW:.42,haloW:.09,startGap:Jn+.12},uS=.95,fS=1.55,hS=Jn+.22,dS=.85,En={rest:Hn.rest,travel:Hn.travel,elev:Hn.elevDeg*Math.PI/180,hold:Hn.hold,fadeFar:Hn.fadeFar,fadeNear:Hn.fadeNear},Ah=Le.eightArrow,Ch=.75;class Be{constructor(t){this.value=t}}const pS=`
attribute float aDist;
attribute float aSide;
varying float vDist;
varying float vSide;
void main() {
  vDist = aDist;
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,mS=`
uniform vec3 uColor;
uniform vec3 uHalo;
uniform float uHaloAlpha;
uniform float uHalfW;
uniform float uHaloW;
uniform float uLen;
uniform float uStartGap;
uniform float uEndGap;
uniform float uFadeLen;
uniform float uPeriod;
uniform float uSpeed;
uniform float uTime;
uniform float uOpacity;
uniform float uArrow;
uniform float uHead;
uniform float uStub;
uniform float uScale;
varying float vDist;
varying float vSide;

float coverage(float d, float aa) { return 1.0 - smoothstep(-aa, aa, d); }

void main() {
  float across = vSide * uHalfW;
  float aa = max(fwidth(across), fwidth(vDist)) * 0.75 + 1e-4;
  float inner = (uHalfW - uHaloW) * uScale;
  float endD = uLen - uEndGap;
  float d;
  float fade = 1.0;
  if (uArrow > 0.5) {
    float head = uHead * min(inner * 3.0, max(endD - uStartGap, 0.0) * 0.5);
    float w = inner * 0.42;
    if (head > 0.0 && vDist > endD - head) w = inner * clamp((endD - vDist) / head, 0.0, 1.0);
    d = max(abs(across) - w, max(uStartGap - vDist, vDist - endD));
    if (vDist > uStub && vDist < endD - head) {
      float u = mod(vDist - uStub - 0.25, 0.7) - 0.35;
      d = max(d, abs(u) - 0.21);
    }
  } else {
    float ph = mod(vDist - uTime * uSpeed, uPeriod) - 0.5 * uPeriod;
    float centre = vDist - ph;
    d = length(vec2(ph, across)) - inner;
    fade = smoothstep(uStartGap, uStartGap + 0.3, centre) * (1.0 - smoothstep(endD - 0.3, endD, centre));
    if (uFadeLen > 0.0) fade *= 1.0 - smoothstep(uLen - uFadeLen, uLen, centre);
  }
  float fillA = coverage(d, aa);
  float haloA = coverage(d - uHaloW, aa);
  vec3 col = mix(uHalo, uColor, fillA);
  float alpha = max(fillA, haloA * uHaloAlpha) * fade * uOpacity;
  if (alpha < 0.004) discard;
  gl_FragColor = vec4(col, alpha);
  #include <colorspace_fragment>
}`,gS=`
attribute vec2 aLocal;
attribute float aKind;
attribute float aMask;
varying vec2 vLocal;
varying float vKind;
varying float vMask;
void main() {
  vLocal = aLocal;
  vKind = aKind;
  vMask = aMask;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,xS=`
uniform float uTime;
uniform float uOpacity;
uniform float uPlaceR;
uniform float uDashes;
uniform float uActive;
uniform float uRingA;
uniform float uGhostA;
uniform float uMarkA;
uniform float uMarkKind;
uniform float uHintA;
uniform vec2 uFwd;
uniform vec2 uNormal;
uniform vec3 uWhite;
uniform vec3 uShade;
uniform vec3 uWarn;
varying vec2 vLocal;
varying float vKind;
varying float vMask;

const float TAU = 6.28318530718;
const float BALL_R = ${Jn.toFixed(3)};

void over(inout vec3 c, inout float a, vec3 fc, float fa) {
  float oa = fa + a * (1.0 - fa);
  c = (fc * fa + c * a * (1.0 - fa)) / max(oa, 1e-4);
  a = oa;
}
float cover(float d, float aa) { return 1.0 - smoothstep(-aa, aa, d); }
float sdSeg(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

void main() {
  // derivatives first (uniform control flow)
  float r = length(vLocal);
  float aa = fwidth(r) * 0.85 + 1e-4;
  float mfw = fwidth(vMask) * 0.85 + 1e-3;
  // screen-aligned coordinates for icons: +y = up the screen
  vec2 q = vec2(dot(vLocal, vec2(-uFwd.y, uFwd.x)), dot(vLocal, uFwd));
  vec3 col = uShade;
  float a = 0.0;

  if (vKind < 0.5) {
    // ---- placement ring round the 8-ball
    float rim = 0.16;
    float ang = atan(vLocal.y, vLocal.x) / TAU + 0.5;
    float dashT = fract(ang * uDashes - uTime * 0.5);
    float dfw = uDashes * aa / (TAU * max(r, 1e-3));
    float dash = smoothstep(0.0, dfw, dashT) * (1.0 - smoothstep(0.6 - dfw, 0.6, dashT));
    dash = mix(dash, 1.0, uActive);
    float ringD = abs(r - (uPlaceR - rim * 0.5)) - rim * 0.5;
    float band = cover(ringD, aa);
    float haloBand = cover(ringD - 0.07, aa);
    float inside = cover(r - uPlaceR, aa);
    float outside = (1.0 - inside) * (1.0 - smoothstep(uPlaceR, uPlaceR + 0.75, r));
    float pulse = mix(0.8 + 0.2 * sin(uTime * 3.0), 1.0, uActive);
    // vMask crosses 0.5 exactly where a placement stops being legal (wall / arc in between, water, OOB): cut the whole ring there, AA'd
    float open = 1.0 - smoothstep(0.5 - mfw, 0.5 + mfw, vMask);
    a = outside * 0.24;
    over(col, a, uWhite, inside * mix(0.08, 0.16, uActive));
    over(col, a, uShade, haloBand * 0.55 * mix(dash, 1.0, 0.35));
    over(col, a, uWhite, band * dash * pulse);
    a *= uRingA * open;
  } else if (vKind < 1.5) {
    // ---- ghost ball: "the white ball will be HERE" + the contact tick
    float rimW = 0.11;
    float ang = atan(vLocal.y, vLocal.x) / TAU + 0.5;
    float dashT = fract(ang * 14.0 + uTime * 0.6);
    float dfw = 14.0 * aa / (TAU * max(r, 1e-3));
    float dash = smoothstep(0.0, dfw, dashT) * (1.0 - smoothstep(0.62 - dfw, 0.62, dashT));
    float ringD = abs(r - (BALL_R - rimW * 0.5)) - rimW * 0.5;
    float band = cover(ringD, aa);
    float haloBand = cover(ringD - 0.06, aa);
    float inside = cover(r - BALL_R, aa);
    float td = length(vLocal - uNormal * BALL_R);
    float tick = cover(td - 0.09, aa);
    float tickHalo = cover(td - 0.15, aa);
    over(col, a, uWhite, inside * 0.14);
    over(col, a, uShade, haloBand * 0.6);
    over(col, a, uWhite, band * dash);
    over(col, a, uShade, tickHalo * 0.6);
    over(col, a, uWhite, tick);
    a *= uGhostA;
  } else if (vKind < 2.5) {
    // ---- splash (water) / out-of-bounds marker at the end of the 8-ball arrow
    vec2 m = q / (1.0 + 0.06 * sin(uTime * 4.0));
    float mr = length(m);
    float disc = cover(mr - 0.78, aa);
    float ring = cover(abs(mr - 0.66) - 0.07, aa);
    float d;
    if (uMarkKind < 0.5) {
      d = 1e3;
      for (int k = 0; k < 3; k++) {
        float yk = (float(k) - 1.0) * 0.17;
        float wy = m.y - yk - 0.045 * sin(m.x * 13.0 + uTime * 3.0);
        d = min(d, max(abs(wy) - 0.035, abs(m.x) - 0.3));
      }
    } else {
      d = min(sdSeg(m, vec2(-0.25, -0.25), vec2(0.25, 0.25)), sdSeg(m, vec2(-0.25, 0.25), vec2(0.25, -0.25))) - 0.06;
    }
    float icon = cover(d, aa);
    a = disc * 0.5;
    over(col, a, uWarn, ring);
    over(col, a, uWhite, icon);
    a *= uMarkA;
  } else {
    // ---- "drag me" affordance round the cue ball: breathing ring + four chevrons (screen-aligned)
    float breathe = 0.5 + 0.5 * sin(uTime * 3.2);
    float ringD = abs(r - (0.8 + 0.05 * breathe)) - 0.045;
    float ring = cover(ringD, aa);
    float ringHalo = cover(ringD - 0.05, aa);
    vec2 w = abs(q);
    if (w.x > w.y) w = w.yx;
    vec2 v = vec2(w.x, w.y - (1.12 + 0.07 * breathe));
    float cd = sdSeg(v, vec2(0.0, 0.1), vec2(0.17, -0.06)) - 0.045;
    float chev = cover(cd, aa);
    float chevHalo = cover(cd - 0.05, aa);
    over(col, a, uShade, max(ringHalo, chevHalo) * 0.55);
    over(col, a, uWhite, max(ring * (0.7 + 0.3 * breathe), chev));
    a *= uHintA;
  }
  a *= uOpacity;
  if (a < 0.004) discard;
  gl_FragColor = vec4(col, a);
  #include <colorspace_fragment>
}`;function Rh(i,t){return new _n({uniforms:{uColor:{value:new me(t.color)},uHalo:{value:new me(Le.guideHalo)},uHaloAlpha:new Be(t.haloAlpha),uHalfW:new Be(t.halfW),uHaloW:new Be(t.haloW),uLen:new Be(1),uStartGap:new Be(t.startGap),uEndGap:new Be(0),uFadeLen:new Be(0),uPeriod:new Be(t.period||1),uSpeed:new Be(t.speed||0),uTime:i,uOpacity:new Be(1),uArrow:new Be(t.arrow?1:0),uHead:new Be(1),uStub:new Be(1e6),uScale:new Be(1)},vertexShader:pS,fragmentShader:mS,transparent:!0,depthWrite:!1,toneMapped:!1,side:Pn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function Ph(i,t){const e=i*2,n=new Ze,s=new Float32Array(e*6),r=new Float32Array(e*2),o=new Float32Array(e*2);for(let d=0;d<e;d++)o[d*2]=-1,o[d*2+1]=1;const a=new Uint16Array((e-1)*6);for(let d=0;d<e-1;d++){const f=d*2;a[d*6]=f,a[d*6+1]=f+1,a[d*6+2]=f+2,a[d*6+3]=f+1,a[d*6+4]=f+3,a[d*6+5]=f+2}n.setIndex(new Ke(a,1));const c=new Ke(s,3).setUsage(Wi),l=new Ke(r,1).setUsage(Wi);n.setAttribute("position",c),n.setAttribute("aDist",l),n.setAttribute("aSide",new Ke(o,1)),n.setDrawRange(0,0),n.boundingSphere=new Zi(new et,1e4);const u=new Ve(n,t);return u.frustumCulled=!1,{mesh:u,geo:n,pos:s,dist:r,posAttr:c,distAttr:l,maxPairs:e,len:0,pairs:0}}function Lc(i,t,e,n,s,r,o,a){const c=i.pos,l=t*6,u=e-s,d=n-r,f=e+s,h=n+r;return c[l]=u,c[l+1]=a(u,d)+Gl,c[l+2]=d,c[l+3]=f,c[l+4]=a(f,h)+Gl,c[l+5]=h,i.dist[t*2]=o,i.dist[t*2+1]=o,t+1}function Lh(i,t,e,n,s){let r=0,o=0;for(let a=0;a<e&&r<i.maxPairs-1;a++){const c=t[a*2],l=t[a*2+1];let u=0,d=0,f=0,h=0;if(a>0){u=c-t[a*2-2],d=l-t[a*2-1];const x=Math.sqrt(u*u+d*d);o+=x,x>0&&(u/=x,d/=x)}if(a<e-1){f=t[a*2+2]-c,h=t[a*2+3]-l;const x=Math.sqrt(f*f+h*h);x>0&&(f/=x,h/=x)}if(a===0&&(u=f,d=h),a===e-1&&(f=u,h=d),u*f+d*h>.6){let x=-(d+h),m=u+f;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const y=-x*d+m*u,M=s/(y>.8?y:.8);r=Lc(i,r,c,l,x*M,m*M,o,n)}else r=Lc(i,r,c,l,-d*s,u*s,o,n),r=Lc(i,r,c,l,-h*s,f*s,o,n)}return i.pairs=r,i.len=o>.001?o:.001,i.posAttr.needsUpdate=!0,i.distAttr.needsUpdate=!0,i.geo.setDrawRange(0,r>1?(r-1)*6:0),i.len}function Ih(i,t,e,n){const s=i.length>>1;if(s<1)return 0;let r=0;e[0]=i[0],e[1]=i[1],r=1;let o=0,a=i[0],c=i[1];for(let l=1;l<s;l++){const u=i[l*2],d=i[l*2+1],f=u-a,h=d-c,g=Math.sqrt(f*f+h*h);if(g<1e-6)continue;o+=g;let x=!1;if(l<s-1){const p=i[l*2+2]-u,y=i[l*2+3]-d,M=Math.sqrt(p*p+y*y);M>1e-6&&(x=(f*p+h*y)/(g*M)<.995)}const m=l===s-1;if(m||x||o>=t||r>=n-1){if(r>=n-1&&!m){a=u,c=d;continue}e[r*2]=u,e[r*2+1]=d,r++,o=0}a=u,c=d}return r===1&&s>1&&(e[2]=i[s*2-2],e[3]=i[s*2-1],r=2),r}const cp=0,vS=1,_S=2,MS=3,yS=[0,3,1,2],SS=[64,8,6,6];function wS(i){const t=[];let e=0,n=0;for(let p=0;p<4;p++){const y=SS[p];t.push({seg:y,v0:e,count:(y+1)*(y+1),half:1,cx:NaN,cz:NaN}),e+=(y+1)*(y+1),n+=y*y*2}const s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Float32Array(e),a=new Float32Array(e),c=new Uint16Array(n*3);let l=0;for(let p=0;p<4;p++){const{seg:y,v0:M,count:S}=t[p];for(let R=0;R<S;R++)o[M+R]=yS[p];for(let R=0;R<y;R++)for(let P=0;P<y;P++){const b=M+R*(y+1)+P,w=b+1,v=b+y+1,_=v+1;c[l++]=b,c[l++]=v,c[l++]=w,c[l++]=w,c[l++]=v,c[l++]=_}}const u=new Ze,d=new Ke(s,3).setUsage(Wi),f=new Ke(r,2).setUsage(Wi),h=new Ke(a,1).setUsage(Wi);u.setAttribute("position",d),u.setAttribute("aLocal",f),u.setAttribute("aKind",new Ke(o,1)),u.setAttribute("aMask",h),u.setIndex(new Ke(c,1)),u.boundingSphere=new Zi(new et,1e4);const g={uTime:i,uOpacity:new Be(1),uPlaceR:new Be(4),uDashes:new Be(24),uActive:new Be(0),uRingA:new Be(1),uGhostA:new Be(0),uMarkA:new Be(0),uMarkKind:new Be(0),uHintA:new Be(0),uFwd:{value:new ce(0,-1)},uNormal:{value:new ce(1,0)},uWhite:{value:new me(Le.guideWhite)},uShade:{value:new me(Le.guideHalo)},uWarn:{value:new me(Le.guideWarn)}},x=new _n({uniforms:g,vertexShader:gS,fragmentShader:xS,transparent:!0,depthWrite:!1,toneMapped:!1,side:Pn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),m=new Ve(u,x);return m.frustumCulled=!1,m.renderOrder=5,{mesh:m,geo:u,mat:x,uniforms:g,parts:t,pos:s,local:r,mask:a,posAttr:d,localAttr:f,maskAttr:h}}function Yo(i,t,e,n,s,r){const o=i.parts[t],{seg:a,v0:c}=o,l=i.pos,u=i.local;for(let d=0;d<=a;d++){const f=d/a*2*s-s;for(let h=0;h<=a;h++){const g=h/a*2*s-s,x=c+d*(a+1)+h,m=e+g,p=n+f;l[x*3]=m,l[x*3+1]=r(m,p)+Gl,l[x*3+2]=p,u[x*2]=g,u[x*2+1]=f}}o.cx=e,o.cz=n,o.half=s,i.posAttr.needsUpdate=!0,i.localAttr.needsUpdate=!0}function qs(i,t,e,n,s,r,o){const a=e+s*o,c=n+r*o;return!!t(a,c)||ud(i,e,n,a,c)}function Ko(i,t,e,n,s,r,o,a){for(let c=0;c<6;c++){const l=(o+a)*.5;qs(i,t,e,n,s,r,l)?a=l:o=l}return(o+a)*.5}function bS(i,t,e,n,s){const r=i.parts[cp],{seg:o,v0:a,half:c}=r,l=i.local,u=i.mask,d=2*c/o,f=.5/d;for(let h=a,g=a+r.count;h<g;h++){const x=l[h*2],m=l[h*2+1],p=Math.sqrt(x*x+m*m);if(p>c){u[h]=1;continue}if(p<1e-6){u[h]=0;continue}const y=x/p,M=m/p,S=p>d?p-d:0,R=p+d;let P;qs(t,e,n,s,y,M,p)?qs(t,e,n,s,y,M,S)?qs(t,e,n,s,y,M,R)?P=1:P=.5+(Ko(t,e,n,s,y,M,R,p)-p)*f:P=.5+(p-Ko(t,e,n,s,y,M,S,p))*f:qs(t,e,n,s,y,M,R)?P=.5-(Ko(t,e,n,s,y,M,p,R)-p)*f:S>0&&qs(t,e,n,s,y,M,S)?P=.5-(p-Ko(t,e,n,s,y,M,p,S))*f:P=0,u[h]=P<0?0:P>1?1:P}i.maskAttr.needsUpdate=!0}function ES(){const a=[[0,0,4030425],[0,.07,4030425],[.025,.1,4030425],[.07,.104,4030425],[.07,.104,16183516],[.24,.107,16183516],[.24,.107,15320720],[3.4,.15,15320720],[3.4,.155,16183516],[3.48,.155,16183516],[3.48,.156,7027231],[4.7,.18,7027231],[4.7,.182,16763196],[4.8,.183,16763196],[4.8,.184,2302763],[5.9,.19,2302763],[5.9,.192,7027231],[6.35,.196,7027231],[6.35,.196,1447452],[6.43,.17,1447452],[6.43,0,1447452]],c=14,l=a.length*c,u=new Float32Array(l*3),d=new Float32Array(l*3),f=new me;for(let S=0;S<a.length;S++){const[R,P,b]=a[S];f.setHex(b);for(let w=0;w<c;w++){const v=w/c*Math.PI*2,_=(S*c+w)*3;u[_]=R,u[_+1]=Math.cos(v)*P,u[_+2]=Math.sin(v)*P,d[_]=f.r,d[_+1]=f.g,d[_+2]=f.b}}const h=[];for(let S=0;S<a.length-1;S++)for(let R=0;R<c;R++){const P=S*c+R,b=S*c+(R+1)%c,w=P+c,v=b+c;h.push(P,b,w,b,v,w)}const g=new Ze;g.setAttribute("position",new Ke(u,3)),g.setAttribute("color",new Ke(d,3)),g.setIndex(h),g.computeVertexNormals();const x=g.attributes.normal.array;for(let S=0;S<x.length;S++)x[S]!==x[S]&&(x[S]=0);g.computeBoundingSphere();const m=new nM({vertexColors:!0,roughness:.42,metalness:0,transparent:!0,depthWrite:!0}),p=new Be(0),y=new Be(.001);m.onBeforeCompile=S=>{S.uniforms.uFadeA=p,S.uniforms.uFadeB=y,S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFadeA;
uniform float uFadeB;`).replace("#include <color_fragment>",["#include <color_fragment>","diffuseColor.a *= smoothstep( uFadeA, uFadeB, length( vViewPosition ) );","if ( diffuseColor.a < 0.01 ) discard;"].join(`
`))},m.customProgramCacheKey=()=>"cue-fade-v1";const M=new Ve(g,m);return M.castShadow=!1,M.receiveShadow=!1,M.frustumCulled=!1,M.renderOrder=20,M.userData.fadeA=p,M.userData.fadeB=y,M}function TS(i){const t=new Be(0),e=new gs;e.name="guides";const n=wS(t),s=Rh(t,{color:Le.guideWhite,haloAlpha:.6,...Eh}),r=Rh(t,{color:Ah,haloAlpha:.7,arrow:!0,...Th}),o=Ph(Rc,s),a=Ph(Pc,r);o.mesh.renderOrder=10,a.mesh.renderOrder=11;const c=ES();e.add(n.mesh,o.mesh,a.mesh,c),i&&i.scene&&i.scene.add(e);const l=new Float64Array(Math.max(Rc,Pc)*2),u=new me(Le.guideWhite),d=new me(Le.guideWarn),f=new me(Ah),h=new et(1,0,0),g=new et,x=n.uniforms,m={visible:!0,fade:0,t:0,lastState:"idle",level:null,intent:null,guide:null,ringX:NaN,ringZ:NaN,hintA:0,arrowK:1,gap:1.4,hold:0,aimX:1,aimZ:0,spin:0,top:0,ballX:0,ballZ:0,aimKey:0,poseKey:-1,poseGap:NaN};function p(){n.mesh.visible=!1,o.mesh.visible=!1,a.mesh.visible=!1}p(),c.visible=!1;function y(w,v){const T=w.level.heightAt,z=v&&v.cue;if(!z||z.points.length<4)o.geo.setDrawRange(0,0),x.uGhostA.value=0;else{const ot=Ih(z.points,lS,l,Rc),k=Lh(o,l,ot,T,Eh.halfW),D=s.uniforms;D.uLen.value=k,D.uColor.value.copy(v.warn?d:u),D.uEndGap.value=z.hit?Jn*.9:0,D.uFadeLen.value=z.hit?0:Math.min(3,k*.4),z.hit?(x.uGhostA.value=1,Yo(n,_S,z.ghost.x,z.ghost.z,hS,T),x.uNormal.value.set(z.normal.x,z.normal.z)):x.uGhostA.value=0}const U=v&&v.eight;if(!U||U.points.length<4){a.geo.setDrawRange(0,0),x.uMarkA.value=0;return}const X=Ih(U.points,.25,l,Pc),Y=Lh(a,l,X,T,Th.halfW),Q=r.uniforms;Q.uLen.value=Y;let xt=1e6;if(U.bounce){let ot=0;for(let k=1;k<X;k++){const D=l[k*2]-l[k*2-2],q=l[k*2+1]-l[k*2-1];if(ot+=Math.sqrt(D*D+q*q),Math.abs(l[k*2]-U.bounce.x)<1e-6&&Math.abs(l[k*2+1]-U.bounce.z)<1e-6){xt=ot;break}}}if(Q.uStub.value=xt,U.hazard){Q.uColor.value.copy(d),Q.uHead.value=0,Q.uEndGap.value=.62,x.uMarkA.value=1,x.uMarkKind.value=U.hazard==="water"?0:1;const ot=(X-1)*2;Yo(n,MS,l[ot],l[ot+1],uS,T)}else Q.uColor.value.copy(f),Q.uHead.value=1,Q.uEndGap.value=0,x.uMarkA.value=0}function M(w,v,_){if(_)m.gap=-.02;else if(be.strike>=0){const D=En.rest+be.pull*En.travel,q=be.strike;m.gap=D+(-.02-D)*q*q}else if(be.pulling)m.gap=En.rest+be.pull*En.travel;else if(m.gap!==En.rest){const D=v*12>1?1:v*12;m.gap+=(En.rest-m.gap)*D,Math.abs(m.gap-En.rest)<.001&&(m.gap=En.rest)}if(m.gap===m.poseGap&&m.poseKey===m.aimKey)return;m.poseGap=m.gap,m.poseKey=m.aimKey;const T=m.spin*Jn*.55,z=m.top*Jn*.55,U=Math.sqrt(Math.max(Jn*Jn-T*T-z*z,0))+m.gap,X=m.aimX,Y=m.aimZ,Q=m.ballX-X*U-Y*T,xt=m.ballZ-Y*U+X*T,ot=w.level.heightAt(m.ballX,m.ballZ)+Jn+z,k=Math.cos(En.elev);g.set(-X*k,Math.sin(En.elev),-Y*k),c.quaternion.setFromUnitVectors(h,g),c.position.set(Q,ot,xt)}function S(w){const v=i&&i.camera;if(!v||!w||!w.level)return;const _=v.position,T=_.x-m.ballX,z=_.y-(w.level.heightAt(m.ballX,m.ballZ)+Jn),U=_.z-m.ballZ,X=Math.sqrt(T*T+z*z+U*U),Y=X*En.fadeNear,Q=X*En.fadeFar+.001,xt=c.userData.fadeA,ot=c.userData.fadeB;xt.value!==Y&&(xt.value=Y),ot.value!==Q&&(ot.value=Q)}function R(w){const v=Math.sqrt(w.dx*w.dx+w.dz*w.dz)||1;m.aimX=w.dx/v,m.aimZ=w.dz/v,m.spin=w.spin,m.top=Number.isFinite(w.top)?w.top:0,m.ballX=w.x,m.ballZ=w.z,m.aimKey++}function P(w,v){m.t+=v,t.value=m.t;const _=w?w.state:"idle",T=!!(w&&w.world&&w.level&&_==="ready");m.lastState==="ready"&&_==="rolling"&&(m.hold=En.hold),_!==m.lastState&&_==="ready"&&(m.gap=1.4,m.intent=null),m.lastState=_;const z=m.visible&&T&&be.enabled;if(z?m.fade=m.fade+v/.18>1?1:m.fade+v/.18:m.fade=0,z?c.visible=!0:m.hold>0&&m.visible&&w&&w.level?(m.hold-=v,c.visible=m.hold>0):(m.hold=0,c.visible=!1),!z){p(),c.visible&&(M(w,v,!0),S(w));return}const U=w.level;U!==m.level&&(m.level=U,m.aimKey++,m.ringX=NaN,m.intent=null,m.guide=null,x.uPlaceR.value=U.placeR,x.uDashes.value=Math.max(12,Math.round(2*Math.PI*U.placeR/1.25)));const X=w.world.balls[1];(X.x!==m.ringX||X.z!==m.ringZ)&&(m.ringX=X.x,m.ringZ=X.z,Yo(n,cp,X.x,X.z,U.placeR+dS,U.heightAt),bS(n,w.world,U.hazardAt,X.x,X.z));const Y=w.intent;if(Y!==m.intent){m.intent=Y,R(Y),Yo(n,vS,Y.x,Y.z,fS,U.heightAt);const D=w.guide();D!==m.guide&&(m.guide=D,y(w,D))}const Q=m.fade;x.uOpacity.value!==Q&&(x.uOpacity.value=Q,s.uniforms.uOpacity.value=Q,r.uniforms.uOpacity.value=Q),x.uActive.value=be.placing?1:0;const xt=w.intent.power,ot=Ch+(1-Ch)*(xt>1?1:xt>0?xt:0);if(m.arrowK!==ot){const D=v*14>1?1:v*14;m.arrowK+=(ot-m.arrowK)*D,Math.abs(m.arrowK-ot)<.001&&(m.arrowK=ot),r.uniforms.uScale.value=m.arrowK}const k=be.placing?0:be.hint;if(m.hintA!==k){const D=v*4>1?1:v*4;m.hintA+=(k-m.hintA)*D,Math.abs(m.hintA-k)<.002&&(m.hintA=k),x.uHintA.value=m.hintA}if(i&&i.camera){const D=i.camera.matrixWorld.elements,q=Math.sqrt(D[8]*D[8]+D[10]*D[10]);if(q>1e-4){const K=-D[8]/q,nt=-D[10]/q,O=x.uFwd.value;(K!==O.x||nt!==O.y)&&O.set(K,nt)}}n.mesh.visible=!0,o.mesh.visible=o.geo.drawRange.count>0,a.mesh.visible=a.geo.drawRange.count>0,M(w,v,!1),S(w)}const b={update:P,setVisible(w){m.visible=!!w},dispose(){e.parent&&e.parent.remove(e),n.geo.dispose(),n.mat.dispose(),o.geo.dispose(),a.geo.dispose(),s.dispose(),r.dispose(),c.geometry.dispose(),c.material.dispose()}};return Object.defineProperty(b,"_debug",{value:{group:e,decals:n,cuePath:o,arrow:a,stick:c,cueMat:s,arrowMat:r,st:m},enumerable:!1}),b}const Dh="ebg-shot-style",AS=6,lp=30,zh=14,Ir=100,Dr=100,zr=122,ga=92,Nr=22,up=ga/2-Nr/2-4,Ar=ga/2-up,CS=20,RS=10,PS=6,LS=10,Nh=8,IS=`
.ebg-shot{position:absolute;inset:0;z-index:20;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .16s ease,visibility 0s linear .16s;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;font-family:"Fredoka",system-ui,sans-serif;font-weight:600;color:#fff;--top:${lp}px;--travel:150px}
.ebg-shot.on{opacity:1;visibility:visible;transition:opacity .2s ease}
.ebg-txt{-webkit-text-stroke:4px #13261b;paint-order:stroke fill;text-shadow:0 2px 0 rgba(0,0,0,.25)}
@supports not (paint-order:stroke){.ebg-txt{-webkit-text-stroke:0;text-shadow:0 0 2px #13261b,0 0 2px #13261b,0 2px 0 #13261b}}
.ebg-num{font-family:"Lilita One",system-ui,sans-serif;font-weight:400;letter-spacing:.02em}
.ebg-pow{position:absolute;left:0;top:0;width:${Ir}px;height:200px;pointer-events:none}
.ebg-clip{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.ebg-track{position:absolute;left:50%;top:var(--top);width:34px;height:var(--travel);margin-left:-17px;border-radius:17px 17px 8px 8px;background:rgba(16,36,26,.38);box-shadow:inset 0 0 0 2px rgba(255,255,255,.6),0 0 0 2px rgba(16,36,26,.45)}
.ebg-fill{position:absolute;left:3px;right:3px;top:3px;height:calc(var(--p,0) * (100% - 6px));border-radius:14px 14px 4px 4px;background:linear-gradient(#ffffff 0,#ffd23f 45%,#ff8a2a 100%);background-size:100% calc(var(--travel) - 6px)}
.ebg-tick{position:absolute;left:-7px;right:-7px;height:3px;margin-top:-1.5px;border-radius:2px;background:#fff;box-shadow:0 0 0 1.5px #13261b}
.ebg-last{position:absolute;right:-17px;width:0;height:0;margin-top:-7px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:11px solid #ffd23f;filter:drop-shadow(0 0 1.5px #13261b) drop-shadow(0 0 1px #13261b);transition:top .2s ease}
.ebg-cue{position:absolute;left:50%;top:calc(var(--top) - 4px);width:20px;margin-left:-10px;height:calc(var(--travel) + 40px);border-radius:9px 9px 4px 4px;
  background:linear-gradient(90deg,rgba(255,255,255,.5),rgba(255,255,255,0) 42%,rgba(0,0,0,.22)),
  linear-gradient(#3d7fd9 0 8px,#f6f0dc 8px 21px,#e9c690 21px 58%,#f6f0dc 58% calc(58% + 5px),#6b3a1f calc(58% + 5px) calc(76% - 4px),#ffc93c calc(76% - 4px) 76%,#23232b 76%);
  box-shadow:0 0 0 2px #13261b,0 3px 6px rgba(0,0,0,.28);transition:transform .22s cubic-bezier(.2,.8,.3,1.25)}
.ebg-pct{position:absolute;right:calc(50% + 20px);top:calc(var(--top) - 12px);font-size:26px;line-height:1;text-align:right;white-space:nowrap;opacity:0;transition:transform .22s cubic-bezier(.2,.8,.3,1.25),opacity .15s}
.ebg-pct.show{opacity:1}
.ebg-pct.fade{opacity:0;transition:transform .22s cubic-bezier(.2,.8,.3,1.25),opacity .5s ease .35s}
.ebg-pow.pull .ebg-cue,.ebg-pow.pull .ebg-pct{transition:none}
.ebg-pow.strike .ebg-cue,.ebg-pow.strike .ebg-pct{transition:transform .08s cubic-bezier(.6,0,1,1),opacity .15s}
.ebg-hint{position:absolute;right:calc(50% + 20px);top:calc(var(--top) - 4px);font-size:18px;line-height:1;opacity:0;transition:opacity .3s;display:flex;flex-direction:column;align-items:center;white-space:nowrap}
.ebg-hint svg{width:22px;height:22px;margin-top:2px}
.ebg-hint.show{opacity:1;animation:ebg-bob 1.1s ease-in-out infinite}
@keyframes ebg-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}
.ebg-grab{position:absolute;left:0;top:0;width:100%;height:calc(var(--top) + 70px);pointer-events:auto;touch-action:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:grab}
.ebg-pow.pull .ebg-grab{cursor:grabbing}
.ebg-spin{position:absolute;left:0;top:0;box-sizing:border-box;width:${Dr}px;height:${zr}px;display:none;flex-direction:column;align-items:center;justify-content:flex-end;padding:4px;pointer-events:auto;touch-action:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:move}
.ebg-spin.on{display:flex}
.ebg-spin.drag{cursor:grabbing}
.ebg-spin-label{font-size:14px;line-height:1;letter-spacing:.08em;margin-bottom:6px}
.ebg-spin-face{position:relative;flex:none;width:${ga}px;height:${ga}px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffffff 0,#fffdf4 38%,#e6dfca 100%);box-shadow:0 0 0 3px #13261b,0 4px 8px rgba(0,0,0,.3)}
.ebg-spin-ring{position:absolute;inset:${Ar}px;border-radius:50%;border:2px dashed rgba(19,38,27,.2)}
.ebg-spin-h,.ebg-spin-v{position:absolute;border-radius:1px;background:rgba(19,38,27,.2)}
.ebg-spin-h{left:${Ar}px;right:${Ar}px;top:50%;height:2px;margin-top:-1px}
.ebg-spin-v{top:${Ar}px;bottom:${Ar}px;left:50%;width:2px;margin-left:-1px}
.ebg-spin-mid{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:rgba(19,38,27,.35)}
.ebg-spin-dot{position:absolute;left:50%;top:50%;width:${Nr}px;height:${Nr}px;margin:-${Nr/2}px 0 0 -${Nr/2}px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#6ea3ec 0,#3d7fd9 60%,#2f69b8 100%);box-shadow:0 0 0 3px #fff,0 0 0 5px #13261b;transition:transform .14s ease-out}
.ebg-spin.drag .ebg-spin-dot{transition:none}
.ebg-ff{position:absolute;z-index:20;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom) + 12px));transform:translateX(-50%);padding:6px 16px;border-radius:999px;background:rgba(16,36,26,.5);font-family:"Fredoka",system-ui,sans-serif;font-weight:600;font-size:16px;line-height:1.2;color:#fff;opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s linear .25s,background .15s;pointer-events:none;white-space:nowrap;-webkit-user-select:none;user-select:none}
.ebg-ff.show,.ebg-ff.on{opacity:1;visibility:visible;transition:opacity .25s,background .15s}
.ebg-ff.on{background:rgba(255,138,42,.9)}
.ebg-safe{position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}
`,DS='<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7" stroke="#13261b" stroke-width="8"/><path d="M5 8l7 7 7-7" stroke="#fff" stroke-width="4"/></g></svg>';function We(i,t,e,n){const s=document.createElement(i);return t&&(s.className=t),n&&(s.textContent=n),e&&e.appendChild(s),s}function zS(i,t,e={top:0,right:0,bottom:0,left:0},n=!1){const s=t>i,r=s?Math.max(90,Math.min(170,Math.round(t*.22))):Math.max(110,Math.min(210,Math.round(t*.3))),o=lp+r+zh,a=Math.max(PS,e.bottom),c=Math.max(RS,e.right+6);let l,u=null;const d={top:0,right:0,bottom:0,left:0};if(s){l={left:Math.round(i/2-Ir/2),top:t-a-o,width:Ir,height:o},n&&(u={left:i-c-Dr,top:t-a-zh-zr,width:Dr,height:zr});const f=Math.min(l.top,u?u.top:1/0);d.bottom=t-f+Nh}else{l={left:i-c-Ir,top:t-a-o,width:Ir,height:o},n&&(u={left:i-c-Dr,top:l.top-LS-zr,width:Dr,height:zr});const f=Math.min(l.left,u?u.left:1/0);d.right=i-f+Nh}return{portrait:s,travel:r,pow:l,spin:u,insets:d}}function NS(i,t={}){if(typeof document>"u"||!i){const E=()=>{},C={top:0,right:0,bottom:0,left:0};return{setVisible:E,setSpinEnabled:E,setSpin:E,setPull:E,setPreset:E,setPullHint:E,setFastForward:E,cancelPull:E,travel:()=>150,insets:()=>C,layout:E,parts:{},dispose:E}}if(!document.getElementById||!document.getElementById(Dh)){const E=We("style");E.id=Dh,E.textContent=IS,(document.head||document.body).appendChild(E)}const e=We("div","ebg-shot",i),n=We("div","ebg-safe",e),s=We("div","ebg-pow",e),r=We("div","ebg-clip",s),o=We("div","ebg-track",r),a=We("div","ebg-fill",o);for(const E of[.25,.5,.75]){const C=We("div","ebg-tick",o);C.style.top=E*100+"%"}const c=We("div","ebg-last",o),l=We("div","ebg-cue",r),u=We("div","ebg-pct ebg-txt ebg-num",s,"0%"),d=We("div","ebg-hint ebg-txt",s);We("span","",d,"Pull");const f=We("span","",d);f.innerHTML=DS;const h=We("div","ebg-grab",s);h.setAttribute("aria-label","Pull the cue down to shoot");const g=We("div","ebg-spin",e);g.setAttribute("aria-label","Spin: drag the dot sideways to curve, up or down to choose where the curve happens"),We("span","ebg-spin-label ebg-txt",g,"SPIN");const x=We("div","ebg-spin-face",g);We("div","ebg-spin-ring",x),We("div","ebg-spin-h",x),We("div","ebg-spin-v",x),We("div","ebg-spin-mid",x);const m=We("div","ebg-spin-dot",x),p=We("div","ebg-ff ebg-txt",i,"Hold to speed up");for(const E of[h,g])E.style.touchAction="none",E.style.webkitTouchCallout="none";let y=null,M=!1,S={top:0,right:0,bottom:0,left:0};const R=up;function P(){const E={top:0,right:0,bottom:0,left:0};try{if(typeof getComputedStyle=="function"){const C=getComputedStyle(n);E.top=parseFloat(C.paddingTop)||0,E.right=parseFloat(C.paddingRight)||0,E.bottom=parseFloat(C.paddingBottom)||0,E.left=parseFloat(C.paddingLeft)||0}}catch{}return E}const b=E=>Math.round(E)+"px";function w(){const E=typeof window<"u"&&window.innerWidth?window.innerWidth:800,C=typeof window<"u"&&window.innerHeight?window.innerHeight:450;y=zS(E,C,P(),M),e.style.setProperty("--travel",y.travel+"px"),s.style.left=b(y.pow.left),s.style.top=b(y.pow.top),s.style.width=b(y.pow.width),s.style.height=b(y.pow.height),y.spin&&(g.style.left=b(y.spin.left),g.style.top=b(y.spin.top));const lt=y.insets,ht=S;(lt.top!==ht.top||lt.right!==ht.right||lt.bottom!==ht.bottom||lt.left!==ht.left)&&(S=lt,t.onInsets&&t.onInsets({...lt}))}typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",w),window.addEventListener("orientationchange",w));let v=!1,_="idle",T=0,z=0,U=0,X=0,Y=!1;function Q(E,C){T=E<0?0:E>1?1:E,C!==_&&(_=C,s.className="ebg-pow"+(C==="pull"?" pull":C==="strike"?" strike":""),u.className="ebg-pct ebg-txt ebg-num"+(C==="pull"?" show":C==="cancel"?" show fade":""));const lt=C==="strike"?0:T*y.travel;l.style.transform="translateY("+lt.toFixed(1)+"px)",u.style.transform="translateY("+lt.toFixed(1)+"px)",a.style.setProperty("--p",C==="strike"?"0":T.toFixed(4)),u.textContent=(C==="cancel"?0:Math.round(T*100))+"%",C==="pull"&&Y&&xt(!1)}function xt(E){E=!!E,E!==Y&&(Y=E,d.className="ebg-hint ebg-txt"+(E?" show":""))}function ot(E,C){let lt=Number.isFinite(E)?E:0,ht=C===void 0?U:Number.isFinite(C)?C:0;const bt=Math.sqrt(lt*lt+ht*ht);bt>1&&(lt/=bt,ht/=bt),z=lt,U=ht,m.style.transform="translate("+(lt*R).toFixed(1)+"px,"+(-ht*R).toFixed(1)+"px)"}const k=new Set;function D(E){return!t.ballDown||!t.ballDown(E)?!1:(k.add(E.pointerId),!0)}function q(E,C){if(!k.has(E.pointerId))return!1;C!=="move"&&k.delete(E.pointerId);const lt=C==="move"?t.ballMove:C==="up"?t.ballUp:t.ballCancel;return lt&&lt(E),!0}let K=null;function nt(E){if(!(E.pointerType==="mouse"&&E.button!==0)&&(E.preventDefault&&E.preventDefault(),!(K||k.has(E.pointerId))&&!D(E)&&!(!t.onPullStart||!t.onPullStart(E.pointerId,E.pointerType)))){K={id:E.pointerId,y0:E.clientY,t:0};try{h.setPointerCapture(E.pointerId)}catch{}}}function O(E){if(q(E,"move")||!K||E.pointerId!==K.id)return;const C=E.clientY-K.y0-AS,lt=C<=0?0:C>=y.travel?1:C/y.travel;K.t=lt,t.onPull&&t.onPull(lt)}function J(E,C){if(!K||E.pointerId!==K.id)return;C||O(E);const lt=K.t;K=null;try{h.releasePointerCapture(E.pointerId)}catch{}t.onPullEnd&&t.onPullEnd(lt,C)}const ut=E=>{q(E,"up")||J(E,!1)},B=E=>{q(E,"cancel")||J(E,!0)},it=E=>{K&&E.pointerId===K.id&&E.target!==h&&O(E)},ft=E=>{K&&E.pointerId===K.id&&E.target!==h&&J(E,!1)},gt=E=>{K&&E.pointerId===K.id&&E.target!==h&&J(E,!0)},Tt=E=>{E.cancelable&&E.preventDefault&&E.preventDefault()};h.addEventListener("pointerdown",nt),h.addEventListener("pointermove",O),h.addEventListener("pointerup",ut),h.addEventListener("pointercancel",B),typeof window<"u"&&window.addEventListener&&(window.addEventListener("pointermove",it),window.addEventListener("pointerup",ft),window.addEventListener("pointercancel",gt)),h.addEventListener("touchstart",Tt,{passive:!1}),h.addEventListener("touchmove",Tt,{passive:!1}),h.addEventListener("contextmenu",Tt);let tt=null,pt={t:-1e9,x:0,y:0};const H={x:0,y:0};function rt(E,C){const lt=x.getBoundingClientRect();let ht=(E+tt.offX-(lt.left+lt.width/2))/R,bt=-(C+tt.offY-(lt.top+lt.height/2))/R;const At=Math.sqrt(ht*ht+bt*bt);return At>1&&(ht/=At,bt/=At),H.x=ht,H.y=bt,H}function jt(E){if(E.pointerType==="mouse"&&E.button!==0||(E.preventDefault&&E.preventDefault(),tt||k.has(E.pointerId))||D(E))return;const C=E.timeStamp||0;if(C-pt.t<320&&Math.abs(E.clientX-pt.x)<24&&Math.abs(E.clientY-pt.y)<24){pt.t=-1e9,t.onSpin&&t.onSpin(0,0,"reset");return}const ht=x.getBoundingClientRect(),bt=ht.left+ht.width/2+z*R,At=ht.top+ht.height/2-U*R,Jt=Math.hypot(E.clientX-bt,E.clientY-At)<=CS;tt={id:E.pointerId,offX:Jt?bt-E.clientX:0,offY:Jt?At-E.clientY:0,sx:E.clientX,sy:E.clientY,ts:C},g.className="ebg-spin on drag";try{g.setPointerCapture(E.pointerId)}catch{}const Vt=rt(E.clientX,E.clientY);t.onSpin&&t.onSpin(Vt.x,Vt.y,"start")}function ie(E){if(q(E,"move")||!tt||E.pointerId!==tt.id)return;const C=rt(E.clientX,E.clientY);t.onSpin&&t.onSpin(C.x,C.y,"move")}function qt(E){if(q(E,"up")||!tt||E.pointerId!==tt.id)return;const C=rt(E.clientX,E.clientY);pt=Math.abs(E.clientX-tt.sx)<6&&Math.abs(E.clientY-tt.sy)<6?{t:tt.ts,x:tt.sx,y:tt.sy}:{t:-1e9,x:0,y:0},tt=null,g.className="ebg-spin on";try{g.releasePointerCapture(E.pointerId)}catch{}t.onSpin&&t.onSpin(C.x,C.y,"end")}function se(E){q(E,"cancel")||!tt||E.pointerId!==tt.id||(tt=null,g.className="ebg-spin on",t.onSpin&&t.onSpin(z,U,"end"))}g.addEventListener("pointerdown",jt),g.addEventListener("pointermove",ie),g.addEventListener("pointerup",qt),g.addEventListener("pointercancel",se),g.addEventListener("touchstart",Tt,{passive:!1}),g.addEventListener("touchmove",Tt,{passive:!1}),g.addEventListener("contextmenu",Tt);const Yt={setVisible(E){E=!!E,E!==v&&(v=E,e.className="ebg-shot"+(E?" on":""))},setSpinEnabled(E){E=!!E,E!==M&&(M=E,g.className="ebg-spin"+(E?" on":""),w())},setSpin:ot,setPull:Q,setPreset(E){const C=E<0?0:E>1?1:E;c.style.top=(C*100).toFixed(2)+"%"},setPullHint:xt,setFastForward(E){E!==X&&(X=E,p.className="ebg-ff ebg-txt"+(E===1?" show":E===2?" on":""),p.textContent=E===2?"▶▶ 3×":"Hold to speed up")},cancelPull(){if(K){try{h.releasePointerCapture(K.id)}catch{}K=null}tt&&(tt=null,g.className="ebg-spin"+(M?" on":"")),k.clear()},travel:()=>y.travel,insets:()=>({...S}),layout:w,parts:{root:e,pow:s,grab:h,spin:g,face:x,dot:m,pct:u,hint:d,ff:p,cue:l,fill:a,last:c},dispose(){typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",w),window.removeEventListener("orientationchange",w)),h.removeEventListener("pointerdown",nt),h.removeEventListener("pointermove",O),h.removeEventListener("pointerup",ut),h.removeEventListener("pointercancel",B),window.removeEventListener("pointermove",it),window.removeEventListener("pointerup",ft),window.removeEventListener("pointercancel",gt),h.removeEventListener("touchstart",Tt),h.removeEventListener("touchmove",Tt),h.removeEventListener("contextmenu",Tt),g.removeEventListener("pointerdown",jt),g.removeEventListener("pointermove",ie),g.removeEventListener("pointerup",qt),g.removeEventListener("pointercancel",se),g.removeEventListener("touchstart",Tt),g.removeEventListener("touchmove",Tt),g.removeEventListener("contextmenu",Tt),e.parentNode&&e.parentNode.removeChild(e),p.parentNode&&p.parentNode.removeChild(p)}};return w(),Q(0,"idle"),ot(0,0),Yt.setPreset(.5),Yt}const Uh={mouse:4,pen:6,touch:10},Fh=.06,US=.1,FS=6,Oh={touch:28,pen:22,mouse:20},kh=12,OS=Math.sin(Hn.elevDeg*Math.PI/180),kS=Math.cos(Hn.elevDeg*Math.PI/180),Ic=.08,BS=.25,HS=1,GS=Math.PI,Bh=.25,Dc=60,Hh=400,VS=1,WS=Math.PI/3,XS=2*(Math.PI/180),qS=40*(Math.PI/180),YS=2.4,xa=Math.PI/180,KS=1*xa,$S=.1*xa,Gh=.1,jS=10;function ZS({stage:i,rig:t,play:e,events:n,uiRoot:s,onInsets:r}){SM(),be.enabled=!1;const o=typeof window<"u"?window:null,a=typeof document<"u"?document:null,c=i&&i.renderer&&i.renderer.domElement?i.renderer.domElement:null;let l=!1;const u={clock:.5,firedAt:-1e9,readyT:.5,idleT:.5,rollT:.5,aimHoldT:.5,spinHoldT:.5,topHoldT:.5,tiltHoldT:.5};u.clock=0,u.readyT=0,u.idleT=0,u.rollT=0,u.aimHoldT=0,u.spinHoldT=0,u.topHoldT=0,u.tiltHoldT=0;let d=e.state,f=!1;const h={shots:0,placed:!1,placeShots:0};let g=null,x=null,m=null;const p={left:!1,right:!1,up:!1,down:!1,shift:!1,a:!1,d:!1,w:!1,s:!1,f:!1},y=new Map;let M=null;const S=new Set,R=new Set;let P=1,b={left:0,top:0,w:0,h:0};const w=NS(s,{onPullStart(V,A){return z()?(q(V),xt()):!1},onPull:V=>ot(V),onPullEnd:(V,A)=>k(V,A),ballDown(V){return!l||e.state!=="ready"||_()||y.size>0||(ut(),!it(J(V),V.pointerType||"mouse"))?!1:(E(V,!0),!!(M&&M.kind==="place"&&M.id===V.pointerId))},ballMove:V=>bt(V),ballUp:V=>C(V),ballCancel:V=>lt(V),onInsets(V){typeof r=="function"&&r(V)},onSpin(V,A,N){!l||e.state!=="ready"||!(e.level&&e.level.spin)||(u.idleT=0,N==="reset"?X(0,0):X(V,A),w.setSpin(e.intent.spin,U(e.intent)))}}),v=()=>l&&e.state==="ready",_=()=>!!(g||x||m),T=()=>l&&e.state==="ready"&&!m,z=()=>T()&&!_(),U=V=>Number.isFinite(V.top)?V.top:0;function X(V,A){let N=Number.isFinite(V)?V<-1?-1:V>1?1:V:0,W=Number.isFinite(A)?A<-1?-1:A>1?1:A:0;Math.abs(N)<Gh&&(N=0),Math.abs(W)<Gh&&(W=0);const Z=Math.sqrt(N*N+W*W);Z>1&&(N/=Z,W/=Z);const j=e.intent.spin===0&&U(e.intent)===0;e.setSpin(N,W),N===0&&W===0&&!j&&Y(8)}function Y(V){try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(V)}catch{}}let Q=NaN;function xt(){return z()?(g={t0:u.clock,p:0},Q=e.intent.power,be.pulling=!0,be.pull=0,u.idleT=0,w.setPull(0,"pull"),!0):!1}function ot(V){g&&(g.p=V,be.pull=V,w.setPull(V,"pull"),D(V))}function k(V,A){if(!g)return;const N=u.clock-g.t0<US;g=null,be.pulling=!1,A||N||V<Fh||!T()?K(!0):nt(V)}function D(V){const A=Math.round((V<0?0:V>1?1:V)*100)/100;e.state==="ready"&&A!==e.intent.power&&e.setPower(A)}function q(V){y.delete(V),S.delete(V),M&&M.id===V&&(M.kind==="place"&&(be.placing=!1),M=null),Yt()}function K(V){g=null,x=null,m=null,Q===Q&&(e.state==="ready"&&e.intent.power!==Q&&e.setPower(Q),Q=NaN),w.cancelPull(),be.pulling=!1,be.pull=0,be.strike=-1,w.setPull(0,V?"cancel":"idle")}function nt(V){m={t:0,p:V},be.pulling=!1,be.pull=V,be.strike=0,w.setPull(V,"strike")}function O(V){if(m=null,be.strike=-1,be.pull=0,!T()){K(!1);return}Q=NaN,e.setPower(V),e.fire()&&(u.firedAt=u.clock,h.shots++,w.setPull(0,"idle"))}function J(V){return{x:V.clientX-b.left,y:V.clientY-b.top}}function ut(){if(c&&c.getBoundingClientRect){const V=c.getBoundingClientRect();b={left:V.left,top:V.top,w:V.width||0,h:V.height||0}}}function B(){const V=e.intent,A=e.level?e.level.heightAt(V.x,V.z)+Kt.R:Kt.R;return t.groundToScreen(V.x,A,V.z)}function it(V,A){const N=B();if(!N)return!1;const W=e.intent,Z=t.pxPerMetre(W.x,W.z)||20,j=Math.max(A==="touch"?34:28,.9*Z);return Math.hypot(V.x-N.x,V.y-N.y)<=j}const ft={ux:0,uy:1};function gt(V,A){const N=e.intent,W=e.level;if(!W)return!1;const Z=Math.sqrt(N.dx*N.dx+N.dz*N.dz)||1,j=N.dx/Z,mt=N.dz/Z,Mt=W.heightAt(N.x,N.z)+Kt.R,Pt=i&&i.camera?i.camera.position:null;let Xt=-1;if(Pt){const Ft=Pt.x-N.x,Gt=Pt.y-Mt,ae=Pt.z-N.z,at=Math.sqrt(Ft*Ft+Gt*Gt+ae*ae)*(Hn.fadeNear+Hn.fadeFar)*.5;Xt=at*at}const ee=Oh[A]||Oh.mouse;let re=NaN,I=NaN,L=NaN,F=NaN,$=1/0;for(let Ft=0;Ft<=kh;Ft++){const Gt=Ft/kh*Hn.len,ae=Kt.R+Hn.rest+Gt*kS,at=N.x-j*ae,dt=N.z-mt*ae,wt=Mt+Gt*OS;if(Pt){const Nt=Pt.x-at,$t=Pt.y-wt,Zt=Pt.z-dt;if(Nt*Nt+$t*$t+Zt*Zt<Xt)break}const Dt=t.groundToScreen(at,wt,dt);if(!Dt||Dt.onScreen===!1||!Number.isFinite(Dt.x)||!Number.isFinite(Dt.y))break;if(Ft===0)re=Dt.x,I=Dt.y;else{const Nt=Dt.x-L,$t=Dt.y-F,Zt=Nt*Nt+$t*$t;let kt=Zt>0?((V.x-L)*Nt+(V.y-F)*$t)/Zt:0;kt=kt<0?0:kt>1?1:kt;const Se=Math.hypot(V.x-L-Nt*kt,V.y-F-$t*kt);Se<$&&($=Se)}L=Dt.x,F=Dt.y}if(!($<=ee))return!1;const G=L-re,vt=F-I,yt=Math.sqrt(G*G+vt*vt);return yt>4?(ft.ux=G/yt,ft.uy=vt/yt,!0):!1}function Tt(V){const A=(V.x-M.sx)*M.ux+(V.y-M.sy)*M.uy-FS,N=w.travel();return A<=0?0:A>=N?1:A/N}function tt(){const V=e.intent;return{x:V.x,z:V.z,offset:V.offset}}function pt(V){if(!V||e.state!=="ready")return;e.setPlacement(V.x,V.z);const A=V.offset-e.intent.offset;A!==0&&e.rotateAim(A)}function H(V){V!==P&&(P=V,e.setSpeed(V))}function rt(){const V=y.values(),A=V.next().value,N=V.next().value;M={kind:"pinch",d0:Math.hypot(A.x-N.x,A.y-N.y)||1,cx:(A.x+N.x)/2,cy:(A.y+N.y)/2}}const jt=()=>b.w||o&&o.innerWidth||800,ie=()=>b.h||o&&o.innerHeight||450;function qt(V){const A=V<=Dc?0:V>=Hh?1:(V-Dc)/(Hh-Dc);return GS/jt()*(Bh+(1-Bh)*A*A*(3-2*A))}function se(V){V!==0&&t.tilt&&t.tilt(V)}function Yt(){be.aiming=l&&M!==null&&M.kind==="aim"}function E(V,A){ht(V,A),Yt()}function C(V){At(V),Yt()}function lt(V){Jt(V),Yt()}function ht(V,A){if(!l)return;V.preventDefault&&V.preventDefault(),ut();const N=J(V);V.isPrimary===!0&&V.pointerType==="touch"&&(y.clear(),S.clear(),R.clear(),M=null),R.delete(V.pointerId);let W=!1;if(V.pointerType==="mouse"&&V.button!==0){if(V.button===2&&_()&&!m){K(!0);return}if(V.button!==1&&V.button!==2)return;W=!0}if(y.set(V.pointerId,N),u.idleT=0,e.state==="rolling"){!W&&u.clock-u.firedAt>=BS&&S.add(V.pointerId),y.size>=2?rt():M={kind:"ff",id:V.pointerId};return}if(y.size>=2){M&&(M.kind==="place"||M.kind==="aim")&&(pt(M.snap),be.placing=!1),M&&M.kind==="cue"&&k(0,!0),y.size===2&&rt();return}if(e.state!=="ready"||_()){M={kind:"block"};return}Ot(V.pointerId);const Z=V.pointerType||"mouse",j=B(),mt=A===!0||!W&&it(N,Z),Mt={id:V.pointerId,type:Z,sx:N.x,sy:N.y,t0:u.clock,moved:!1,snap:tt(),travelled:0};mt?M={...Mt,kind:"place",grabX:j.x-N.x,grabY:j.y-N.y}:!W&&A!==!0&&gt(N,Z)&&xt()?M={...Mt,kind:"cue",ux:ft.ux,uy:ft.uy}:M={...Mt,kind:"aim",lastX:N.x,lastY:N.y,lastTs:V.timeStamp||0,speed:0}}function bt(V){if(!l)return;const A=J(V);if(!y.has(V.pointerId)||(y.set(V.pointerId,A),!M))return;if(M.kind==="pinch"){if(y.size<2)return;const Mt=y.values(),Pt=Mt.next().value,Xt=Mt.next().value,ee=Math.hypot(Pt.x-Xt.x,Pt.y-Xt.y)||1,re=(Pt.x+Xt.x)/2,I=(Pt.y+Xt.y)/2,L=ee/M.d0;Math.abs(L-1)>1e-4&&t.zoomBy(L,re,I),M.d0=ee,M.cx=re,M.cy=I;return}if(M.kind==="cue"){V.pointerId===M.id&&ot(Tt(A));return}if(V.pointerId!==M.id||M.kind!=="place"&&M.kind!=="aim"||e.state!=="ready")return;u.idleT=0;const N=Math.hypot(A.x-M.sx,A.y-M.sy);if(N>M.travelled&&(M.travelled=N),M.kind==="place"){if(!M.moved){if(N<(Uh[M.type]||6))return;M.moved=!0,be.placing=!0}let Mt=M.grabX,Pt=M.grabY;if(M.type==="touch"){const ee=M.travelled>=40?1:M.travelled/40;Mt+=(0-Mt)*ee,Pt+=(-52-Pt)*ee}const Xt=t.screenToGround(A.x+Mt,A.y+Pt);Xt&&e.setPlacement(Xt.x,Xt.z);return}const W=V.timeStamp||0;if(!M.moved){if(N<(Uh[M.type]||6))return;M.moved=!0;const Mt=W-M.lastTs;Mt>0&&(M.speed=Math.abs(A.x-M.sx)/(Mt/1e3)),M.lastX=A.x,M.lastY=A.y,M.lastTs=W;return}const Z=A.x-M.lastX,j=A.y-M.lastY,mt=W-M.lastTs;if(M.lastX=A.x,M.lastY=A.y,M.lastTs=W,mt>0){const Mt=Math.abs(Z)/(mt/1e3);M.speed+=(Mt-M.speed)*.35}Z!==0&&e.rotateAim(HS*Z*qt(M.speed)),j!==0&&se(VS*j*(WS/ie()))}function At(V){const A=J(V),N=y.delete(V.pointerId);if(S.delete(V.pointerId),R.delete(V.pointerId),!N||!M)return;if(M.kind==="ff"){V.pointerId===M.id&&(M=null);return}if(M.kind==="pinch"||M.kind==="block"){y.size===0?M=null:M={kind:"block"};return}if(V.pointerId!==M.id)return;if(Qt(V.pointerId),M.kind==="cue"){ot(Tt(A)),M=null,k(g?g.p:0,!1);return}const W=M;M=null,W.kind==="place"&&(be.placing=!1,W.moved&&(h.placed=!0))}function Jt(V){y.delete(V.pointerId),S.delete(V.pointerId),R.delete(V.pointerId),M&&(M.id===V.pointerId||y.size===0)&&(M.kind==="place"&&(be.placing=!1),M.kind==="cue"&&k(0,!0),M=y.size?{kind:"block"}:null)}function Vt(V){if(V.preventDefault&&V.preventDefault(),!l)return;ut();const A=J(V),N=V.deltaMode===1?V.deltaY*16:V.deltaMode===2?V.deltaY*400:V.deltaY;let W=Math.exp(-N*.0015);W=W<.8?.8:W>1.25?1.25:W,t.zoomBy(W,A.x,A.y)}const Ht=V=>{V.preventDefault&&V.preventDefault()},de=V=>{V.cancelable!==!1&&V.preventDefault&&V.preventDefault()};function Ot(V){try{c&&c.setPointerCapture&&c.setPointerCapture(V)}catch{}}function Qt(V){try{c&&c.releasePointerCapture&&c.releasePointerCapture(V)}catch{}}c&&(c.style&&(c.style.touchAction="none"),c.addEventListener("pointerdown",E),c.addEventListener("pointermove",bt),c.addEventListener("pointerup",C),c.addEventListener("pointercancel",lt),c.addEventListener("wheel",Vt,{passive:!1}),c.addEventListener("contextmenu",Ht),c.addEventListener("touchstart",de,{passive:!1}),c.addEventListener("touchmove",de,{passive:!1}),c.addEventListener("gesturestart",de));const he=[w.parts.grab,w.parts.spin],ne=V=>{const A=V.target;return A===c||A&&he.indexOf(A)>=0?!1:y.has(V.pointerId)||R.has(V.pointerId)},Wt=V=>{ne(V)&&bt(V)},xe=V=>{ne(V)&&C(V)},pe=V=>{ne(V)&&lt(V)};o&&c&&(o.addEventListener("pointermove",Wt),o.addEventListener("pointerup",xe),o.addEventListener("pointercancel",pe));function Me(V){const A=V.target;return!!(A&&(A.tagName==="INPUT"||A.tagName==="TEXTAREA"||A.isContentEditable))}function ct(V){if(Me(V))return;const A=V.code;if(A==="ShiftLeft"||A==="ShiftRight"){p.shift=!0;return}if(l&&((A==="Space"||A.startsWith("Arrow"))&&V.preventDefault(),!V.repeat))switch(A){case"ArrowLeft":case"ArrowRight":{const N=A==="ArrowLeft";N?p.left=!0:p.right=!0,u.aimHoldT=0,v()&&(u.idleT=0,e.rotateAim((N?-1:1)*(V.shiftKey||p.shift?$S:KS)));break}case"ArrowUp":case"ArrowDown":{A==="ArrowUp"?p.up=!0:p.down=!0,u.tiltHoldT=0,v()&&(u.idleT=0,se((A==="ArrowUp"?-1:1)*XS));break}case"KeyA":case"KeyD":{A==="KeyA"?p.a=!0:p.d=!0,u.spinHoldT=0,_t(A==="KeyA"?-1:1,0);break}case"KeyW":case"KeyS":{A==="KeyW"?p.w=!0:p.s=!0,u.topHoldT=0,_t(0,A==="KeyW"?1:-1);break}case"Space":z()&&(x={t:0,p:0},Q=e.intent.power,be.pulling=!0,be.pull=0,u.idleT=0,w.setPull(0,"pull"));break;case"Backspace":case"KeyX":(g||x)&&K(!0);break;case"KeyO":case"KeyV":n.emit("ui:overview",{on:!f});break;case"KeyF":p.f=!0;break}}function Ct(V){const A=V.code;if(A==="ShiftLeft"||A==="ShiftRight"){p.shift=!1;return}if(A==="ArrowLeft")p.left=!1;else if(A==="ArrowRight")p.right=!1;else if(A==="ArrowUp")p.up=!1;else if(A==="ArrowDown")p.down=!1;else if(A==="KeyA")p.a=!1;else if(A==="KeyD")p.d=!1;else if(A==="KeyW")p.w=!1;else if(A==="KeyS")p.s=!1;else if(A==="KeyF")p.f=!1;else if(A==="Space"&&x){const N=x.p;x=null,be.pulling=!1,N>=Fh&&T()?nt(N):K(!0)}}function _t(V,A){if(!v()||!(e.level&&e.level.spin))return;u.idleT=0;let N=e.intent.spin,W=U(e.intent);if(V!==0){const Z=Math.sqrt(Math.max(0,1-W*W));N=Math.round((N+V*.1)*10)/10,N=N<-Z?-Z:N>Z?Z:N}if(A!==0){const Z=Math.sqrt(Math.max(0,1-N*N));W=Math.round((W+A*.1)*10)/10,W=W<-Z?-Z:W>Z?Z:W}e.setSpin(N,W),w.setSpin(e.intent.spin,U(e.intent))}function Et(){_()&&K(!1),p.left=p.right=p.up=p.down=p.shift=p.a=p.d=p.w=p.s=p.f=!1,y.clear(),M&&M.kind==="place"&&(be.placing=!1),M=null,S.clear(),R.clear(),Yt()}function Ut(){a&&a.visibilityState==="hidden"&&Et()}o&&(o.addEventListener("keydown",ct),o.addEventListener("keyup",Ct),o.addEventListener("blur",Et),o.addEventListener&&c&&o.addEventListener("resize",ut)),a&&a.addEventListener&&a.addEventListener("visibilitychange",Ut);const st=[n.on("ui:overview",({on:V})=>{f=!!V}),n.on("ad:start",()=>Et()),n.on("shot:fire",()=>{u.firedAt=u.clock,u.rollT=0,w.setVisible(!1)}),n.on("hole:start",()=>{f=!1})];let St=!1,Rt=!1,It=null,Bt=0;function le(V){u.clock+=V;const A=e.state;if(A!==d){if(A==="ready"){u.readyT=0,u.idleT=0;for(const Mt of y.keys())R.add(Mt);y.clear(),S.clear(),M=null}d==="ready"&&_()&&!m&&K(!1),d=A}if(m&&(m.t+=V,be.strike=m.t/Ic>1?1:m.t/Ic,m.t>=Ic&&O(m.p)),x){x.t+=V;const Mt=x.t/YS%1;x.p=1-Math.abs(1-2*Mt),be.pull=x.p,w.setPull(x.p,"pull"),D(x.p)}if(v()){u.readyT+=V,u.idleT+=V;const Mt=(p.right?1:0)-(p.left?1:0);if(Mt!==0&&(u.aimHoldT+=V,u.idleT=0,u.aimHoldT>.25)){const re=p.shift?3*xa:(30+60*Math.min(1,(u.aimHoldT-.25)/1.2))*xa;e.rotateAim(Mt*re*V)}const Pt=(p.down?1:0)-(p.up?1:0);Pt!==0&&(u.tiltHoldT+=V,u.idleT=0,u.tiltHoldT>.25&&se(Pt*qS*V));const Xt=(p.d?1:0)-(p.a?1:0);Xt!==0&&(u.spinHoldT+=V,u.spinHoldT>.35&&(u.spinHoldT-=.1,_t(Xt,0)));const ee=(p.w?1:0)-(p.s?1:0);ee!==0&&(u.topHoldT+=V,u.topHoldT>.35&&(u.topHoldT-=.1,_t(0,ee)))}const N=l&&A==="rolling";N&&(u.rollT+=V),A!=="rolling"&&S.size&&S.clear(),H(N&&(p.f||S.size>0)?3:1);const W=N?P>1?2:u.rollT>1.5?1:0:0;W!==Bt&&(Bt=W,w.setFastForward(W));const Z=l&&A==="ready";Z!==St&&(St=Z,w.setVisible(Z),!Z&&_()&&!m&&K(!1));const j=!!(e.level&&e.level.spin);j!==Rt&&(Rt=j,w.setSpinEnabled(j)),e.intent!==It&&(It=e.intent,w.setSpin(e.intent.spin,U(e.intent)),w.setPreset(e.lastPower!==void 0?e.lastPower:e.intent.power));const mt=u.idleT>jS;w.setPullHint(Z&&!_()&&(h.shots===0&&u.readyT>.6||mt)),be.hint=Z&&!M&&(!h.placed&&h.shots<3&&u.readyT>.4||mt)?1:0,be.enabled=l,Yt()}function te(V){V=!!V,V!==l&&(l=V,be.enabled=V,V?(ut(),e.state==="ready"&&(St=!0,w.setVisible(!0))):(_()&&K(!1),y.clear(),M&&M.kind==="place"&&(be.placing=!1),M=null,Yt(),S.clear(),p.left=p.right=p.up=p.down=p.a=p.d=p.w=p.s=p.f=!1,H(1),St=!1,w.setVisible(!1),Bt=0,w.setFastForward(0),w.setPullHint(!1)))}function ye(){te(!1);for(const V of st)V();c&&(c.removeEventListener("pointerdown",E),c.removeEventListener("pointermove",bt),c.removeEventListener("pointerup",C),c.removeEventListener("pointercancel",lt),c.removeEventListener("wheel",Vt),c.removeEventListener("contextmenu",Ht),c.removeEventListener("touchstart",de),c.removeEventListener("touchmove",de),c.removeEventListener("gesturestart",de)),o&&(o.removeEventListener("keydown",ct),o.removeEventListener("keyup",Ct),o.removeEventListener("blur",Et),o.removeEventListener("resize",ut),o.removeEventListener("pointermove",Wt),o.removeEventListener("pointerup",xe),o.removeEventListener("pointercancel",pe)),a&&a.removeEventListener&&a.removeEventListener("visibilitychange",Ut),w.dispose()}const Ee={enable:te,update:le,dispose:ye,insets:()=>w.insets()};return Object.defineProperty(Ee,"_debug",{value:{hud:w,session:h,get gesture(){return M}},enumerable:!1}),Ee}function zt(i,t,e){const[n,...s]=i.split("."),r=document.createElement(n||"div");if(s.length&&(r.className=s.join(" ")),t)for(const o in t){const a=t[o];if(!(a==null||a===!1))if(o==="html")r.innerHTML=a;else if(o==="text")r.textContent=a;else if(o.startsWith("on"))r.addEventListener(o.slice(2),a);else if(o==="style")for(const c in a)c.startsWith("--")?r.style.setProperty(c,a[c]):r.style[c]=a[c];else r.setAttribute(o,a===!0?"":String(a))}return e!==void 0&&fp(r,e),r}function fp(i,t){if(Array.isArray(t)){for(const e of t)fp(i,e);return}t==null||t===!1||i.appendChild(typeof t=="string"||typeof t=="number"?document.createTextNode(String(t)):t)}const qe={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4.5" width="4.6" height="15" rx="1.8"/><rect x="13.9" y="4.5" width="4.6" height="15" rx="1.8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.8 12S5.6 5 12 5s10.2 7 10.2 7-3.8 7-10.2 7S1.8 12 1.8 12z"/><circle cx="12" cy="12" r="3.6" class="pupil"/></svg>',play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 4.8v14.4a1 1 0 0 0 1.5.9l11-7.2a1 1 0 0 0 0-1.8L9 3.9a1 1 0 0 0-1.5.9z"/></svg>',retry:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" fill="none" stroke-width="3" stroke-linecap="round"/><path d="M3.4 3.6l.6 5.6 5.5-1.2z"/></svg>',grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="3" width="7.6" height="7.6" rx="2"/><rect x="3" y="13.4" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="13.4" width="7.6" height="7.6" rx="2"/></svg>',soundOn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.6 8.6a5 5 0 0 1 0 6.8M18.4 5.9a9 9 0 0 1 0 12.2" fill="none" stroke-width="2.4" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.8 9.2l5.4 5.6M21.2 9.2l-5.4 5.6" fill="none" stroke-width="2.6" stroke-linecap="round"/></svg>',ball:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="9" cy="9" r="2.6" fill="#fff" opacity=".85"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.2L8 12l6.8 6.8" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',lock:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5" fill="none" stroke-width="2.8"/><rect x="4.8" y="10" width="14.4" height="11" rx="3"/></svg>',star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4l2.85 6 6.6.75-4.9 4.5 1.35 6.5L12 16.85 6.1 20.15l1.35-6.5-4.9-4.5 6.6-.75z"/></svg>'};function JS(i,{events:t}={}){const e=(R,P)=>t&&t.emit(R,P);let n=!1,s=!1,r=0,o=0;const a=zt("b.hud-num",null,"1"),c=zt("div.hud-ball",null,a),l=zt("span.hud-name",null,""),u=zt("span.hud-par",null,"Par 2"),d=zt("div.hud-chip.hud-hole",null,[c,zt("div.hud-meta",null,[l,u])]),f=zt("b.hud-strokes-n",null,"0"),h=zt("div.hud-pips",{"aria-hidden":"true"}),g=zt("span.hud-pop",{"aria-hidden":"true"},"+1"),x=zt("div.hud-chip.hud-strokes",{role:"status","aria-live":"polite"},[zt("span.hud-lbl",null,"Strokes"),f,h,g]),m=zt("button.hud-btn.hud-eye",{type:"button","aria-label":"Look at the whole hole","aria-pressed":"false",html:qe.eye,onclick:()=>M(!n,!0)}),p=zt("button.hud-btn.hud-pause",{type:"button","aria-label":"Pause",html:qe.pause,onclick:()=>e("ui:pause",{})}),y=zt("div.hud",{"data-shown":"false"},[d,x,zt("div.hud-btns",null,[m,p])]);i.appendChild(y);function M(R,P){n=!!R,m.setAttribute("aria-pressed",n?"true":"false"),m.classList.toggle("on",n),P&&e("ui:overview",{on:n})}function S(){const R=Math.max(o,Math.min(r,o+4));for(;h.childNodes.length>R;)h.removeChild(h.lastChild);for(;h.childNodes.length<R;)h.appendChild(zt("i.pip"));for(let P=0;P<R;P++){const b=h.childNodes[P];b.className="pip"+(P<r?" used":"")+(P>=o?" over":"")}}return t&&(t.on("ui:overview",({on:R}={})=>{!!R!==n&&M(R,!1)}),t.on("shot:end",({penalty:R}={})=>{R&&(g.classList.remove("go"),g.offsetWidth,g.classList.add("go"))})),{el:y,setHole(R,P){a.textContent=String((P|0)+1),l.textContent=R&&R.name?R.name:"",u.textContent="Par "+(R?R.par:""),y.setAttribute("data-round",String(R&&R.round?R.round:1)),n&&M(!1,!0)},setStrokes(R,P){const b=Math.max(0,R|0),w=b>r;r=b,P!==void 0&&(o=Math.max(1,P|0)),f.textContent=String(r),x.classList.toggle("over",r>o),S(),w&&(f.classList.remove("bump"),f.offsetWidth,f.classList.add("bump"))},show(R){s=!!R,y.setAttribute("data-shown",s?"true":"false")}}}const Vh=350,QS=1400,tw=5200,ew=1900,nw=1700,iw=3e3,sw={ace:"Unbelievable!",albatross:"Amazing shot!",eagle:"Superb!",birdie:"Great shot!",par:"Well played!",bogey:"So close!",double:"Nice try!",over:"Keep going!",picked:"Try again for a star!"},rw={ace:"Hole-in-one!",albatross:"Albatross!",eagle:"Eagle!",birdie:"Birdie!",par:"Par!"},yn="#13261b";function ow(i,t,e,n,s){let r="";for(let o=0;o<s*2;o++){const a=o*Math.PI/s-Math.PI/2,c=o%2?n:e;r+=(o?"L":"M")+(i+Math.cos(a)*c).toFixed(1)+" "+(t+Math.sin(a)*c).toFixed(1)}return r+"Z"}const Ws=(i,t,e)=>`<g transform="${e}" stroke="${yn}" stroke-width="3" stroke-linejoin="round"><path d="M15 34l-10-5 2.5 10z" fill="${t}"/><ellipse cx="29" cy="37" rx="16" ry="13" fill="${i}"/><circle cx="41" cy="25" r="10" fill="${i}"/><path d="M50 22.5l9 3.5-9 3.5z" fill="#FFC93C"/><path d="M19 35c6-3 12-1 14 5-6 3-12 2-14-5z" fill="${t}"/><circle cx="43.5" cy="23" r="2.3" fill="${yn}" stroke="none"/></g>`,cs=i=>`<svg viewBox="0 0 64 64" aria-hidden="true">${i}</svg>`,Wh={ace:cs(`<path d="${ow(32,32,30,18,12)}" fill="#FFC93C" stroke="${yn}" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="32" r="12" fill="#FBFAF3" stroke="${yn}" stroke-width="3"/><text x="32" y="39" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="19" fill="${yn}">1</text>`),albatross:cs(Ws("#9F7BE0","#7B4FC9","translate(-4 -10) scale(.62)")+Ws("#9F7BE0","#7B4FC9","translate(26 -6) scale(.62)")+Ws("#9F7BE0","#7B4FC9","translate(8 22) scale(.62)")),eagle:cs(Ws("#FFA65A","#E07020","translate(-2 -4) scale(.7)")+Ws("#FFA65A","#E07020","translate(20 18) scale(.7)")),birdie:cs(Ws("#5B93F0","#2D6CDF","translate(0 0)")),par:cs(`<ellipse cx="32" cy="53" rx="22" ry="7" fill="#3CC47A" stroke="${yn}" stroke-width="3"/><ellipse cx="32" cy="52" rx="7" ry="2.6" fill="${yn}"/><path d="M32 51V9" stroke="${yn}" stroke-width="5" stroke-linecap="round"/><path d="M32 50V10" stroke="#fff" stroke-width="2"/><path d="M34 9l21 7.5L34 24z" fill="#E8322F" stroke="${yn}" stroke-width="3" stroke-linejoin="round"/>`),smile:cs(`<circle cx="32" cy="32" r="26" fill="#8EC5FF" stroke="${yn}" stroke-width="3"/><circle cx="23" cy="27" r="3.4" fill="${yn}"/><circle cx="41" cy="27" r="3.4" fill="${yn}"/><path d="M20 38c6 8 18 8 24 0" fill="none" stroke="${yn}" stroke-width="3.6" stroke-linecap="round"/>`),picked:cs(`<g fill="#fff" stroke="${yn}" stroke-width="3" stroke-linejoin="round"><rect x="15" y="12" width="8" height="26" rx="4"/><rect x="24" y="7" width="8" height="30" rx="4"/><rect x="33" y="9" width="8" height="28" rx="4"/><rect x="42" y="15" width="8" height="23" rx="4"/><path d="M15 31h35v6c0 11-7.5 19-18 19-7.5 0-12-4.5-14.5-9L9.5 37c-1.6-2.8 2-5.6 4.6-3.4L18 37z"/></g>`)},aw=i=>Wh[i]||Wh.smile,Xh='<svg viewBox="0 0 48 58" aria-hidden="true"><path d="M17 4c2.6 0 4.6 2 4.6 4.6v15.6l1.7-.4c2.2-.5 4.4.8 5 3l.2.6 1.3-.3c2.2-.5 4.4.8 5 3l.2.8 1-.2c2.3-.4 4.5 1.1 4.9 3.4l1.3 8.6c.9 5.7-2.5 11.2-8 12.9l-6.1 1.8c-4.7 1.4-9.8-.5-12.4-4.7L4.2 38.4c-1.3-2.1-.8-4.8 1.2-6.2 2-1.3 4.6-1 6.1.8l1 1.2V8.6C12.5 6 14.5 4 17 4z" fill="#fff" stroke="#13261b" stroke-width="3" stroke-linejoin="round"/><path d="M21.6 24.2v7M29.5 27.4v5.4M36.7 31.1v4.6" stroke="#13261b" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".45"/></svg>';function cw(i,t){if(i==null)return"";if(i===1)return"m-ace";const e=i-t;return e<=-2?"m-eagle":e===-1?"m-birdie":e===0?"m-par":e===1?"m-bogey":"m-double"}function lw(i,{events:t,progress:e,holes:n=[],rounds:s=[],rig:r=null,play:o=null}={}){const a=(L,F)=>t&&t.emit(L,F),c=(L,F)=>t&&t.on(L,F),l=new Map;{let L=0;for(const F of s)l.set(F.id,L),L+=F.holes.length}const u=L=>{for(const F of s){const $=l.get(F.id);if(L>=$&&L<$+F.holes.length)return F}return s[0]},d=L=>n[L]||{name:"Hole "+(L+1),par:3,id:"h"+L};let f=null,h=!1,g=!1,x=0,m=null,p=null,y=!1,M=!1,S=0,R={index:-1,best:null,stars:0,total:0},P=!!(e&&e.muted),b=e&&e.skin||"classic",w=!1;const v=new Set,_=(L,F)=>{const $=setTimeout(()=>{v.delete($),L()},F);return v.add($),$},T=L=>{L&&(clearTimeout(L),v.delete(L))},z=zt("div.scr");i.appendChild(z);function U(L,F,$,G,vt){return zt("button.btn"+L,{type:"button","aria-label":vt||null,onclick:yt=>{Date.now()-x<Vh||G(yt)}},[$?zt("span.ico",{html:$}):null,F?zt("span.lbl",null,F):null])}function X(L,F=""){const $=zt("div.stars"+F,{role:"img","aria-label":L+(L===1?" star":" stars")});for(let G=0;G<3;G++)$.appendChild(zt("span.st"+(G<L?".on":""),{html:qe.star,style:{"--k":String(G)}}));return $}const Y=[];function Q(L){const F=U(L?".b-white.b-sound":".b-round.b-white.b-sound","","",()=>ot(!P));return Y.push({b:F,withLabel:L}),xt(),F}function xt(){for(const{b:L,withLabel:F}of Y){for(;L.firstChild;)L.removeChild(L.firstChild);L.appendChild(zt("span.ico",{html:P?qe.soundOff:qe.soundOn})),F&&L.appendChild(zt("span.lbl",null,P?"Sound off":"Sound on")),L.setAttribute("aria-label",P?"Turn sound on":"Turn sound off"),L.setAttribute("aria-pressed",P?"false":"true"),L.classList.toggle("off",P)}}function ot(L){P=!!L,xt(),a("ui:sound",{muted:P})}function k(L,F,$){const G=typeof L=="object"?L:s.find(Nt=>Nt.id===L)||s[0],vt=l.get(G.id)||0,yt=zt("div.strip",{role:"table","aria-label":G.name+" scorecard"}),Ft=zt("div.srow.s-hole",{role:"row"},zt("span.sh",{role:"rowheader"},"Hole")),Gt=zt("div.srow.s-par",{role:"row"},zt("span.sh",{role:"rowheader"},"Par")),ae=zt("div.srow.s-you",{role:"row"},zt("span.sh",{role:"rowheader"},"You"));let at=0,dt=0,wt=0;G.holes.forEach((Nt,$t)=>{const Zt=vt+$t,kt=F(Zt),Se=Zt===$?".hi":"";Ft.appendChild(zt("span.sc"+Se,{role:"cell",style:{"--k":String($t)}},String(Zt+1))),Gt.appendChild(zt("span.sc"+Se,{role:"cell"},String(Nt.par)));const ue=cw(kt,Nt.par);ae.appendChild(zt("span.sc.s-score"+Se,{role:"cell",style:{"--k":String($t)}},kt==null?zt("i.dash",null,"–"):zt("b.mk"+(ue?"."+ue:""),null,String(kt)))),kt!=null&&(at+=kt,dt+=Nt.par,wt++)}),Ft.appendChild(zt("span.sc.s-tot",{role:"cell"},"Tot")),Gt.appendChild(zt("span.sc.s-tot",{role:"cell"},String(G.holes.reduce((Nt,$t)=>Nt+$t.par,0))));const Dt=wt?$c(at,dt):"–";return ae.appendChild(zt("span.sc.s-tot.s-rel"+(wt&&at<dt?".under":""),{role:"cell",title:wt?at+" strokes":""},Dt)),yt.appendChild(Ft),yt.appendChild(Gt),yt.appendChild(ae),yt}const D={};function q(L,F,{primary:$,back:G}={}){const vt=zt("div.panel.p-"+L+(F?"."+F:""),{role:"dialog","aria-modal":"true","aria-hidden":"true"});return z.appendChild(vt),D[L]={el:vt,primary:$,back:G},vt}function K(L,F){const $=D[L];if(!$)return;for(const vt in D){const yt=vt===L;D[vt].el.classList.toggle("open",yt),D[vt].el.setAttribute("aria-hidden",yt?"false":"true")}f=L,x=Date.now();const G=typeof document<"u"?document.activeElement:null;G&&G.blur&&z.contains&&z.contains(G)&&G.blur(),$.render&&$.render(F),O(!0)}function nt(){for(const L in D)D[L].el.classList.remove("open"),D[L].el.setAttribute("aria-hidden","true");f=null,O(!1)}function O(L){L&&(Ee(),N()),L!==h&&(h=L,i.classList&&i.classList.toggle("ui-menu",L),a("ui:menu",{open:L}),L||I())}const J=zt("span.t-stars-n",null,"0"),ut=zt("span.sub",null,""),B=U(".b-yellow.b-big.t-go","",qe.play,()=>{const L=e?e.nextIndex():0;nt(),L===m&&!y||a("ui:play",{index:L})}),it=zt("span.lbl2",null,[zt("span.main",null,"Continue"),ut]);B.appendChild(it),q("title","",{primary:()=>B.click()}).appendChild(zt("div.t-wrap",null,[zt("div.logo",{role:"heading","aria-level":"1","aria-label":"8 Ball Golf"},[zt("span.logo-ball",{"aria-hidden":"true"},zt("span.logo-disc",null,"8")),zt("span.logo-word",{"aria-hidden":"true"},[zt("span.lw1",null,"BALL"),zt("span.lw2",null,"GOLF")])]),zt("p.tagline",null,"Hit the white. Sink the 8."),zt("div.t-stars",{"aria-label":"Stars collected"},[zt("span.ico",{html:qe.star}),J,zt("span.of",null," / "+n.length*3)]),B,zt("div.t-row",null,[U(".b-blue","Holes",qe.grid,()=>jt("title")),U(".b-blue","Balls",qe.ball,()=>E("title")),Q(!1)])])),D.title.render=()=>{const L=e?e.nextIndex():0,F=d(L);ut.textContent="Hole "+(L+1)+" · "+F.name,J.textContent=String(e?e.totalStars():0)};let gt="title",Tt=s.length?s[0].id:1;const tt=zt("div.tabs",{role:"tablist"}),pt=zt("div.tiles"),H=zt("p.p-note",null,"");q("holes","card-panel",{back:()=>he(gt)}).appendChild(zt("div.card.paper.c-holes",null,[zt("div.c-head",null,[U(".b-round.b-back","",qe.back,()=>he(gt),"Back"),zt("h2",null,"Holes"),zt("span.c-head-pad")]),tt,pt,H]));function jt(L){gt=L;const F=e?e.nextIndex():0;Tt=u(L==="pause"&&m!==null?m:F).id,K("holes")}D.holes.render=()=>{for(;tt.firstChild;)tt.removeChild(tt.firstChild);for(const G of s){const vt=l.get(G.id),yt=!e||e.isUnlocked(vt),Ft=e&&e.roundStars?e.roundStars(G.id):0,Gt=U(".tab"+(G.id===Tt?".sel":"")+(yt?"":".locked"),"",yt?null:qe.lock,()=>{if(!yt){ne(Gt),H.textContent="Finish hole "+vt+" to open "+G.name+"!";return}Tt=G.id,D.holes.render()});Gt.setAttribute("role","tab"),Gt.setAttribute("aria-selected",G.id===Tt?"true":"false"),Gt.appendChild(zt("span.tab-name",null,G.name)),yt&&Gt.appendChild(zt("span.tab-stars",null,[zt("span.ico",{html:qe.star}),Ft+"/"+G.holes.length*3])),tt.appendChild(Gt)}for(;pt.firstChild;)pt.removeChild(pt.firstChild);const L=s.find(G=>G.id===Tt)||s[0];if(!L)return;const F=l.get(L.id),$=e?e.nextIndex():0;pt.setAttribute("data-round",String(L.id)),L.holes.forEach((G,vt)=>{const yt=F+vt,Ft=d(yt),Gt=!e||e.isUnlocked(yt),ae=e?e.best(yt):null,at=U(".tile"+(Gt?"":".locked")+(yt===$&&Gt?".next":"")+(yt===m?".cur":""),"",null,()=>{if(!Gt){ne(at),H.textContent="Finish hole "+yt+" first!";return}g=!1,nt(),a("ui:play",{index:yt})},Gt?"Hole "+(yt+1)+", "+Ft.name:"Hole "+(yt+1)+", locked");at.appendChild(zt("span.tile-num",null,String(yt+1))),at.appendChild(zt("span.tile-name",null,Ft.name)),Gt?(at.appendChild(zt("span.tile-par",null,"Par "+Ft.par+(ae!==null?" · Best "+ae:""))),at.appendChild(X(e?e.stars(yt):0,".mini"))):at.appendChild(zt("span.tile-lock",{html:qe.lock})),pt.appendChild(at)}),H.textContent=""};let ie="title";const qt=zt("div.skins"),se=zt("p.p-note",null,"");q("skins","card-panel",{back:()=>he(ie)}).appendChild(zt("div.card.paper.c-skins",null,[zt("div.c-head",null,[U(".b-round.b-back","",qe.back,()=>he(ie),"Back"),zt("h2",null,"Balls"),zt("span.c-head-pad")]),qt,se]));function E(L){ie=L,K("skins")}function C(){if(!e)return"";const L=e.totalStars(),F=e.skins().find($=>!$.unlocked);return F?F.need-L+" more ★ for the "+F.name+" ball!":"You unlocked every ball!"}D.skins.render=()=>{for(;qt.firstChild;)qt.removeChild(qt.firstChild);const L=e?e.skins():[{id:"classic",name:"Classic",need:0,unlocked:!0}];for(const F of L){const $=U(".skin"+(F.unlocked?"":".locked")+(F.id===b?".sel":""),"",null,()=>{if(!F.unlocked){ne($),se.textContent="Collect "+F.need+" ★ to unlock "+F.name+"!";return}b=F.id,a("ui:skin",{id:F.id}),D.skins.render()},F.name+(F.unlocked?"":", locked"));$.setAttribute("aria-pressed",F.id===b?"true":"false"),$.appendChild(zt("span.skin-ball.sk-"+F.id,{"aria-hidden":"true"})),$.appendChild(zt("span.skin-name",null,F.name)),$.appendChild(F.unlocked?zt("span.skin-need.ok",null,F.id===b?"Playing":"Tap to use"):zt("span.skin-need",null,[zt("span.ico",{html:qe.star}),String(F.need)])),qt.appendChild($)}se.textContent=C()};const lt=q("card","card-panel",{primary:()=>Jt()}),ht=zt("div.card.paper.c-score");lt.appendChild(ht);let bt=null;function At(){ht.classList.add("skip")}function Jt(){if(!ht.classList.contains("skip")&&Date.now()-x<iw){At();return}bt&&bt()}ht.addEventListener("pointerdown",At),D.card.render=L=>{const{index:F,strokes:$,par:G,picked:vt,penalties:yt=0,stars:Ft=0}=L,Gt=L.term||Kc($,G,vt),ae=Gt.key,at=R.index===F?R.best:null,dt=R.index===F?R.stars:0,wt=R.index===F?R.total:e?e.totalStars():0,Dt=at!==null&&$<at,Nt=Math.max(0,Ft-dt),$t=e?e.skins().filter(ge=>ge.need>wt&&ge.need<=wt+Nt):[],Zt=(()=>{const ge=u(F);return F===l.get(ge.id)+ge.holes.length-1})(),kt=L.level||d(F);for(;ht.firstChild;)ht.removeChild(ht.firstChild);ht.className="card paper c-score t-"+ae,ht.appendChild(zt("div.sc-hole",null,"Hole "+(F+1)+" · "+(kt.name||""))),ht.appendChild(zt("div.sc-term",null,[zt("span.term-ico",{html:aw(ae)}),zt("div.term-txt",null,[zt("b.term",null,Gt.label),zt("span.term-sub",null,sw[ae]||"")])]));const Se=vt?"Picked up · Par "+G:$+($===1?" stroke":" strokes")+" · Par "+G;ht.appendChild(zt("div.sc-line",null,[Se,yt>0?zt("span.pen",null,"+"+yt+" penalty"):null])),ht.appendChild(X(Ft,".big"));const ue=zt("div.sc-extras");Dt&&ue.appendChild(zt("span.badge.b-best",null,"New best!"));for(const ge of $t){const _e=U(".b-mini","Use it",null,()=>{b=ge.id,a("ui:skin",{id:ge.id}),_e.classList.add("done"),_e.lastChild.textContent="Playing!"});ue.appendChild(zt("span.badge.b-skin",null,[zt("span.skin-ball.sk-"+ge.id,{"aria-hidden":"true"}),"New ball: "+ge.name+"!",_e]))}ue.childNodes.length&&ht.appendChild(ue);const Te=ge=>ge===F?at===null?$:Math.min(at,$):e?e.best(ge):null;ht.appendChild(k(u(F),Te,F));const Lt=w&&!vt;Lt&&ht.appendChild(zt("p.sc-hint",null,"Hole in! Next hole →"));const Ae=Zt?"Round score":"Next hole";bt=()=>{w=!1,nt(),a("ui:next",{})},ht.appendChild(zt("div.btns",null,[U(".b-blue.sc-retry","Retry",qe.retry,()=>{w=!1,nt(),a("ui:retry",{})}),U(".b-yellow.b-big.sc-next"+(Lt?".pulse":""),Ae,qe.play,()=>bt())]))};const Vt=q("round","card-panel",{primary:()=>de()}),Ht=zt("div.card.chalk.c-round");Vt.appendChild(Ht);let de=()=>{};Ht.addEventListener("pointerdown",()=>Ht.classList.add("skip")),D.round.render=L=>{const F=s.find(dt=>dt.id===L.round)||s[0],$=new Map((L.holes||[]).map(dt=>[dt.index,dt.strokes])),G=L.total||0,vt=L.par||F.holes.reduce((dt,wt)=>dt+wt.par,0),yt=L.rel||$c(G,vt),Ft=l.get(F.id)||0;let Gt=0;for(let dt=0;dt<F.holes.length;dt++)Gt+=e?e.stars(Ft+dt):0;const ae=F===s[s.length-1];for(;Ht.firstChild;)Ht.removeChild(Ht.firstChild);Ht.className="card chalk c-round",Ht.appendChild(zt("h2.r-title",null,(L.name||F.name)+" done!")),Ht.appendChild(zt("div.r-score",null,[zt("div.r-rel"+(G<vt?".under":G===vt?".even":""),null,[zt("span.r-cap",null,"Best round"),zt("b",null,yt)]),zt("div.r-meta",null,[zt("span",null,"Total "+G+" · Par "+vt),zt("span.r-stars",null,[zt("span.ico",{html:qe.star}),Gt+" / "+F.holes.length*3])])])),Ht.appendChild(k(F,dt=>$.has(dt)?$.get(dt):e?e.best(dt):null,-1));const at=ae?"You played all "+n.length+" holes! Go back for more stars.":s[s.indexOf(F)+1].name+" is open! Curves, cushions and water.";Ht.appendChild(zt("p.r-hook",null,at)),Ht.appendChild(zt("p.r-hook.r-skin",null,C())),de=()=>{nt(),a("ui:next",{})},Ht.appendChild(zt("div.btns",null,[U(".b-yellow.b-big.r-next",ae?"Continue":"Play "+s[s.indexOf(F)+1].name,qe.play,()=>de())]))},q("pause","card-panel",{primary:()=>Qt(),back:()=>Qt()}).appendChild(zt("div.card.paper.c-pause",null,[zt("h2",null,"Paused"),U(".b-yellow.b-big.ps-resume","Resume",qe.play,()=>Qt()),zt("div.ps-grid",null,[U(".b-blue.ps-retry","Retry hole",qe.retry,()=>{g=!1,nt(),a("ui:retry",{})}),U(".b-blue.ps-holes","Holes",qe.grid,()=>jt("pause")),U(".b-blue.ps-skins","Balls",qe.ball,()=>E("pause")),Q(!0)])]));function Qt(){!g&&f!=="pause"||(g=!1,nt(),a("ui:resume",{}))}function he(L){L==="pause"&&g?K("pause"):L==="title"?K("title"):nt()}function ne(L){L.classList.remove("nudge"),L.offsetWidth,L.classList.add("nudge")}const Wt=zt("span.tip-txt",null,""),xe=zt("div.tip",{role:"status","aria-live":"polite",hidden:!0},[zt("span.tip-ico",{"aria-hidden":"true"},zt("span",null,"8")),Wt]),pe=zt("span.coach-txt",null,""),Me=zt("span.coach-gesture",{html:Xh,"aria-hidden":"true"}),ct=zt("button.coach-skip",{type:"button",onclick:()=>ee()},"Skip"),Ct=zt("div.coach",{role:"status","aria-live":"polite",hidden:!0},[Me,pe,ct]),_t=zt("div.hand",{html:Xh,"aria-hidden":"true",hidden:!0}),Et=zt("b.toast-main",null,""),Ut=zt("span.toast-sub",null,""),st=zt("div.toast",{role:"status","aria-live":"polite",hidden:!0},[Et,Ut]),St=zt("div.celebrate",{"aria-hidden":"true",hidden:!0});z.appendChild(xe),z.appendChild(Ct),z.appendChild(_t),z.appendChild(st),z.appendChild(St);let Rt=null,It=0;function Bt(){T(It),!(!Rt||f!==null)&&(It=_(()=>{if(f!==null)return;const L=Rt;Rt=null,!(!L||L.index!==m||y)&&(Wt.textContent=L.text,xe.hidden=!1,W(xe,"go"),e&&e.markTip(L.id),It=_(le,tw))},QS))}function le(){T(It),It=0,xe.hidden=!0,xe.classList.remove("go")}let te=0;function ye(L,F="",$=""){h||(Et.textContent=L,Ut.textContent=F,Ut.hidden=!F,st.className="toast"+($?" k-"+$:""),st.hidden=!1,W(st,"go"),T(te),te=_(Ee,ew))}function Ee(){T(te),te=0,st.hidden=!0,st.classList.remove("go")}let V=0;function A(L){h||(St.textContent=rw[L]||"In the hole!",St.className="celebrate t-"+L,St.hidden=!1,W(St,"go"),T(V),V=_(N,nw))}function N(){T(V),V=0,St.hidden=!0,St.classList.remove("go")}function W(L,F){L.classList.remove(F),L.offsetWidth,L.classList.add(F)}const Z=[{text:"Sink the 8 in the hole!",hand:"",ms:2600},{text:"Move the white ball anywhere in the circle.",hand:"drag",ms:4200},{text:"This line shows where the 8 will roll. Drag to aim.",hand:"aim",ms:4600},{text:"Pull back for power… let go to shoot!",hand:"pull",ms:0}],j={on:!1,step:-1,timer:0,fired:!1,everyShown:!1,raf:0};function mt(){j.on=!0,j.fired=!1,j.everyShown=!1,Mt(0)}function Mt(L){T(j.timer),j.step=L;const F=Z[L];if(!F){Xt();return}Pt(F.text,F.hand),F.ms&&(j.timer=_(()=>{j.on&&j.step===L&&Mt(L+1)},F.ms))}function Pt(L,F){pe.textContent=L,Ct.hidden=!1,Ct.setAttribute("data-hand",F||"none"),Me.hidden=!F||F!=="pull"&&!!(r&&o),W(Ct,"go"),re(F)}function Xt(){T(j.timer),Ct.hidden=!0,re("")}function ee(){j.on=!1,j.step=-1,Xt()}function re(L){j.raf&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(j.raf),j.raf=0;const F=(L==="drag"||L==="aim")&&r&&o&&typeof requestAnimationFrame=="function";if(L!=="pull"&&!F){_t.hidden=!0,_t.removeAttribute("data-mode");return}if(_t.setAttribute("data-mode",L),_t.hidden=!1,F){const $=()=>{j.raf=requestAnimationFrame($);try{const G=o.intent,vt=o.level;if(!G||!vt)return;const yt=(vt.heightAt?vt.heightAt(G.x,G.z):0)+.5,Ft=r.groundToScreen(G.x,yt,G.z);Ft&&Ft.onScreen!==!1&&(_t.style.transform="translate("+Math.round(Ft.x)+"px,"+Math.round(Ft.y)+"px)")}catch{}};$()}else _t.style.transform=""}function I(){Bt()}return c("game:hole",({index:L,level:F,first:$}={})=>{m=L,p=F||d(L),y=!1,S=0,R={index:L,best:e?e.best(L):null,stars:e?e.stars(L):0,total:e?e.totalStars():0},le(),Ee(),N(),Rt=null,j.on&&ee();const G=p&&(p.id||p.hole&&p.hole.id);w=!!$,$?(e&&e.markTip(G),mt()):p&&p.tip&&e&&!e.seenTip(G)&&(Rt={index:L,id:G,text:p.tip},Bt())}),c("shot:fire",({strokes:L}={})=>{S=L|0,!xe.hidden&&It&&(T(It),It=_(le,900)),j.on&&(j.fired=!0,j.step=99,Xt())}),c("shot:end",({outcome:L,picked:F,penalty:$}={})=>{if(F&&ye("Picked up","Try again for a star!","soft"),j.on&&L!=="holed"&&!F&&!j.everyShown){j.everyShown=!0;const G=p?p.par:2;Pt("Every shot counts. Par "+G+" = in "+G+" shots is great!",""),j.timer=_(()=>{j.on&&Xt()},4500)}}),c("ball:hop",()=>ye("Too fast!","Softer next time","warn")),c("ball:hazard",({kind:L}={})=>{L==="water"?ye("Splash! +1","Back to where you were","water"):ye("Out of bounds! +1","Back to where you were","warn")}),c("ball:whiff",()=>ye("Missed the 8!","Aim the white at the 8","soft")),c("ball:holed",()=>{j.on&&ee();const L=p?p.par:3;A(Kc(Math.max(1,S||1),L,!1).key)}),c("hole:done",(L={})=>{y=!0,le(),Rt=null,j.on&&ee(),g=!1,K("card",L)}),c("game:round",(L={})=>K("round",L)),c("ui:pause",()=>{if(f===null&&!M){g=!0,K("pause");return}g||Promise.resolve().then(()=>a("ui:resume",{}))}),c("ui:sound",({muted:L}={})=>{!!L!==P&&(P=!!L,xt())}),c("ui:skin",({id:L}={})=>{L&&(b=L)}),c("ad:start",()=>{M=!0,Ee(),N()}),c("ad:end",()=>{M=!1}),typeof window<"u"&&window.addEventListener&&window.addEventListener("keydown",L=>{if(L.repeat)return;const F=L.code;if(F==="KeyP"||F==="Escape"){if(f==="pause"){Qt(),L.preventDefault();return}if(f&&D[f].back){D[f].back(),L.preventDefault();return}f===null&&m!==null&&!y&&!M&&(a("ui:pause",{}),L.preventDefault());return}if(f&&(F==="Enter"||F==="NumpadEnter"||F==="Space")){const $=L.target;if($&&$.tagName==="BUTTON"||(L.preventDefault(),Date.now()-x<Vh))return;const G=D[f];G.primary&&G.primary()}}),{el:z,showTitle(){g=!1,K("title")},hideAll(){const L=g;g=!1,f!==null&&nt(),L&&a("ui:resume",{})},isOpen(){return f!==null},get current(){return f}}}function qh(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const zc=i=>440*Math.pow(2,(i-69)/12),Tn=(i,t)=>typeof i=="number"&&Number.isFinite(i)?i:t,Yh=1e-4;function hp(i,t,e){const n=2*Math.PI*Math.min(i,e*.45)/e,s=Math.sin(n)/(2*t),r=1+s;return[s/r,0,-s/r,-2*Math.cos(n)/r,(1-s)/r]}function dp(i,t,e,n,s,r,o,a){const[c,l,u,d,f]=o;let h=0,g=0,x=0,m=0;const p=Math.min(i.length,t+e);for(let y=t,M=0;y<p;y++,M++){const S=(M<n?M/n:1)*Math.exp(-M/s),R=(a()*2-1)*S,P=c*R+l*h+u*g-d*x-f*m;g=h,h=R,m=x,x=P,i[y]+=P*r}}function uu(i,t){let e=0;for(let n=0;n<i.length;n++)e=Math.max(e,Math.abs(i[n]));if(e>0)for(let n=0;n<i.length;n++)i[n]*=t/e}function uw(i,t,e){for(let s=0;s<16;s++){const r=Math.pow(s/16,1.6)*.3+e()*.02,o=Math.floor(t*(.012+e()*.02)),a=Math.pow(1-r/.38,1.2)*(.5+.5*e());dp(i,Math.floor(r*t),o,Math.floor(t*.0015),t*(.004+e()*.004),a,hp(2400+e()*3800,1.4+e()*1.6,t),e)}uu(i,.9)}function Kh(i,t,e,n,s,r){for(let c=0;c<n;c++){const l=hp(900+e()*1500,1.1+e()*1.2,t),u=3.5+e()*2.5,d=.45+.55*e(),f=s+e()*(r-s);for(let h=e()*.2;h<f;h+=1/u*(.82+.36*e())){const g=h>f-.5?(f-h)/.5:1;dp(i,Math.floor(h*t),Math.floor(t*.03),Math.floor(t*6e-4),t*(.004+e()*.005),d*(.6+.4*g),l,e)}}const o=Math.floor(t*.023),a=Math.floor(t*.037);for(let c=i.length-1;c>=a;c--)i[c]+=.22*i[c-o]+.14*i[c-a];uu(i,.85)}const $h={white:[1,(i,t,e)=>{for(let n=0;n<i.length;n++)i[n]=e()*2-1}],brown:[1,(i,t,e)=>{let n=0;for(let s=0;s<i.length;s++)n=(n+.02*(e()*2-1))*.998,i[s]=n;uu(i,.9)}],rustle:[.38,uw],applauseLight:[1.8,(i,t,e)=>Kh(i,t,e,7,.9,1.5)],applauseBig:[3.4,(i,t,e)=>Kh(i,t,e,22,1.9,3.1)]};function fw({getWindow:i,maxVoices:t=14,hardVoices:e=22}={}){const n=qh(571921),s=[],r=new Map;let o=null,a=null,c=null,l=null,u=!1,d=!0,f=0,h=0;function g(){if(u)return!1;if(!o){const v=i(),_=v&&(v.AudioContext||v.webkitAudioContext);if(!_)return u=!0,!1;try{o=new _,a=o.createGain(),a.gain.value=.8,c=o.createDynamicsCompressor(),c.threshold.value=-12,c.knee.value=10,c.ratio.value=3.5,c.attack.value=.002,c.release.value=.2,l=o.createGain(),l.gain.value=d?1:0,a.connect(c),c.connect(l),l.connect(o.destination);const T=o.createBufferSource();T.buffer=o.createBuffer(1,1,o.sampleRate),T.connect(o.destination),T.onended=()=>{try{T.disconnect()}catch{}},T.start(0)}catch(T){return console.warn("[sfx] Web Audio unavailable",T),u=!0,o=null,!1}}if(o.state!=="running"&&o.state!=="closed")try{const v=o.resume();v&&v.catch&&v.catch(()=>{})}catch{}return!0}const x=()=>!!o&&o.state==="running",m=()=>o?o.currentTime:0;function p(v){if(d=!!v,!l)return;const _=o.currentTime,T=l.gain;try{T.cancelScheduledValues(_),T.setValueAtTime(T.value,_),T.setTargetAtTime(d?1:0,_,.012)}catch{T.value=d?1:0}}function y(v){let _=r.get(v);if(_||!o||!$h[v])return _||null;const[T,z]=$h[v],U=o.sampleRate;return _=o.createBuffer(1,Math.max(1,Math.floor(T*U)),U),z(_.getChannelData(0),U,qh(571921^v.length*7919^v.charCodeAt(0))),r.set(v,_),_}function M(){y("white"),y("brown"),y("rustle");const v=i(),_=(T,z)=>{try{(v&&v.setTimeout?v.setTimeout.bind(v):setTimeout)(T,z)}catch{}};_(()=>y("applauseLight"),700),_(()=>y("applauseBig"),1400)}function S(v){if(v.done)return;v.done=!0;for(const T of v.nodes){T.onended!==void 0&&(T.onended=null);try{T.disconnect()}catch{}}v.nodes.length=0;const _=s.indexOf(v);_>=0&&s.splice(_,1),h++}function R(v){const _=o.currentTime;for(const T of v.nodes)if(T.stop)try{T.stop(_)}catch{}S(v)}function P(){const v=o.currentTime;for(let _=s.length-1;_>=0;_--)s[_].end<v-1&&R(s[_])}function b(v=1,_=1){if(!x()||!d)return null;if(P(),s.length>=t){if(v<2)return null;if(s.length>=e){let z=null;for(const U of s)(!z||U.prio<z.prio||U.prio===z.prio&&U.t0<z.t0)&&(z=U);if(!z||z.prio>v)return null;R(z)}}const T=w(v,_);return s.push(T),f++,T}function w(v,_){const T=o.currentTime+.002,z=o.createGain();z.gain.value=_,z.connect(a);const U={prio:v,t0:T,end:T,done:!1,pending:0,nodes:[z],out:z},X=()=>{U.pending--,U.pending<=0&&S(U)},Y=k=>(U.nodes.push(k),k),Q=(k,D,q)=>(Y(k),U.pending++,k.onended=X,U.end=Math.max(U.end,q),k),xt=(k,D,q,K,nt,O)=>(K=Math.max(Yh*2,K),k.setValueAtTime(0,D),k.linearRampToValueAtTime(K,D+q),nt>0&&k.setValueAtTime(K,D+q+nt),k.exponentialRampToValueAtTime(Yh,D+q+nt+O),D+q+nt+O),ot=(k,D,q,K)=>{if(k.setValueAtTime(D,K),q)for(const[nt,O]of q)k.exponentialRampToValueAtTime(Math.max(1,nt),K+Math.max(.001,O))};return U.filter=(k,D,q=.7,K=z,nt=null,O=T)=>{const J=Y(o.createBiquadFilter());return J.type=k,J.Q.value=q,ot(J.frequency,D,nt,O),J.connect(K),J},U.tone=k=>{const D=T+Tn(k.t,0),q=Tn(k.a,.002),K=Tn(k.hold,0),nt=Tn(k.d,.1),O=o.createOscillator();O.type=k.type||"sine",ot(O.frequency,Math.max(1,Tn(k.f,440)),k.to,D),k.detune&&(O.detune.value=k.detune);const J=Y(o.createGain()),ut=xt(J.gain,D,q,Tn(k.peak,.2),K,nt)+.02;if(O.connect(J),J.connect(k.dest||z),k.vib){const[B,it,ft=0]=k.vib,gt=o.createOscillator(),Tt=Y(o.createGain());gt.frequency.value=B,Tt.gain.setValueAtTime(0,D),Tt.gain.linearRampToValueAtTime(it,D+ft+.08),gt.connect(Tt),Tt.connect(O.frequency),Q(gt,D,ut),gt.start(D),gt.stop(ut)}return Q(O,D,ut),O.start(D),O.stop(ut),O},U.noise=k=>{const D=y(k.buf||"white");if(!D)return null;const q=T+Tn(k.t,0),K=Tn(k.a,.001),nt=Tn(k.hold,0),O=Tn(k.d,.05),J=o.createBufferSource();J.buffer=D;const ut=Tn(k.rate,1);ut!==1&&(J.playbackRate.value=ut);const B=Y(o.createGain()),it=xt(B.gain,q,K,Tn(k.peak,.2),nt,O)+.02;B.connect(k.dest||z),k.filter?J.connect(U.filter(k.filter.type,k.filter.f,Tn(k.filter.q,.7),B,k.filter.to,q)):J.connect(B);const ft=D.duration||D.length/D.sampleRate,gt=(it-q)*ut,Tt=k.from0?0:Math.max(0,(ft-gt)*n());return Q(J,q,it),k.from0?J.start(q):J.start(q,Tt,Math.min(ft-Tt,gt+.01)),J.stop(it),J},U}return{start:g,ready:x,now:m,rng:n,setOutput:p,voice:b,buffer:y,prewarm:M,get ctx(){return o},stats:()=>({active:s.length,created:f,released:h})}}const Cr=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,Nc=i=>i<0?0:i>1?1:i,hw=["pointerdown","pointerup","touchend","mousedown","click","keydown"],dw=["ui:play","ui:next","ui:retry","ui:pause","ui:resume","ui:overview","ui:skin"];function pw({events:i,getWindow:t}={}){const e=t||(()=>typeof window<"u"?window:null),n=fw({getWindow:e}),s=n.rng;let r=!1,o=!1,a=!1,c=!1;function l(){const B=e(),it=B&&B.navigator&&B.navigator.userActivation;it&&it.hasBeenActive===!1||d()}function u(B){const it=e();if(!(!it||!it.addEventListener||B===a)){a=B;for(const ft of hw)B?it.addEventListener(ft,l,{capture:!0,passive:!0}):it.removeEventListener(ft,l,{capture:!0,passive:!0})}}function d(){if(!n.start()){u(!1);return}const B=n.ctx;if(!c){c=!0,n.setOutput(!r&&!o),n.prewarm();try{B.onstatechange=()=>{B.state==="running"?u(!1):B.state!=="closed"&&u(!0)}}catch{}}B.state==="running"&&u(!1)}u(!0);function f(){n.setOutput(!r&&!o)}const h=new Map;function g(B,it){if(r||o||!n.ready())return!1;const ft=n.now(),gt=h.get(B);return gt!==void 0&&ft-gt<it&&ft>=gt?!1:(h.set(B,ft),!0)}const x=B=>1+(s()-.5)*2*B;function m(B,it,ft,gt,Tt){const tt=zc(ft);B.tone({t:it,f:tt,a:.003,d:gt,peak:Tt}),B.tone({t:it,f:tt*3.93,a:.001,d:gt*.16,peak:Tt*.28}),B.noise({t:it,filter:{type:"bandpass",f:Math.min(tt*2.5,9e3),q:1.5},a:5e-4,d:.008,peak:Tt*.22})}function p(B,it,ft,gt,Tt){const tt=zc(ft),pt=[[1,1,1],[2.76,.42,.45],[5.4,.16,.22]];for(const[H,rt,jt]of pt)tt*H<14e3&&B.tone({t:it,f:tt*H,a:.001,d:gt*jt,peak:Tt*rt})}function y(B,it,ft,gt,Tt){const tt=zc(ft),pt=B.filter("lowpass",500,1.2,B.out,[[tt*5+1200,.045],[tt*3+700,.25]],B.t0+it),H=[5.6,tt*.007,.14];B.tone({t:it,type:"sawtooth",f:tt,detune:-7,a:.025,hold:gt,d:.16,peak:Tt,dest:pt,vib:H}),B.tone({t:it,type:"sawtooth",f:tt,detune:7,a:.025,hold:gt,d:.16,peak:Tt*.8,dest:pt})}function M(B,it){const ft=n.voice(3,it?.5:.36);if(!ft)return;const gt=it?3.4:1.8;ft.noise({t:B,buf:it?"applauseBig":"applauseLight",from0:!0,a:.06,hold:gt-.5,d:.45,peak:1,filter:{type:"highpass",f:260,q:.6}})}function S(B){const it=n.voice(1);if(!it)return;const ft=.3+.55*Nc(B),gt=x(.03);it.tone({f:1250*gt,to:[[760*gt,.03]],a:8e-4,d:.035,peak:.34*ft}),it.noise({filter:{type:"bandpass",f:2300*gt,q:1.1},a:5e-4,d:.014,peak:.28*ft}),it.tone({f:210,to:[[150,.05]],a:.002,d:.05,peak:.22*ft})}function R(B,it=1){const ft=n.voice(2);if(!ft)return;const gt=Nc(Cr(B)/10),Tt=(.22+.78*Math.pow(gt,.6))*it,tt=x(.03),pt=ft.filter("lowpass",2600+1e4*gt,.6);ft.noise({filter:{type:"highpass",f:1900*tt,q:.7},a:4e-4,d:.011,peak:.9*Tt,dest:pt});const H=(1650+550*gt)*tt,rt=[[1,.55,.06],[1.505,.32,.04],[2.27,.2,.025],[3.08,.1,.016]];for(const[jt,ie,qt]of rt)ft.tone({f:H*jt,to:[[H*jt*.985,qt]],a:6e-4,d:qt*(.85+.3*gt),peak:ie*Tt,dest:pt});ft.tone({f:640*tt,to:[[430*tt,.03]],a:.001,d:.03,peak:.22*Tt,dest:pt})}function P(B,it,ft,gt=1){const Tt=[[1,.5,.07],[2.31,.25,.04],[3.93,.1,.02]];for(const[tt,pt,H]of Tt)B.tone({f:ft*tt,to:[[ft*tt*.97,H*gt]],a:8e-4,d:H*gt,peak:pt*it});B.noise({filter:{type:"bandpass",f:ft*4.5,q:1.2},a:5e-4,d:.01,peak:.3*it}),B.tone({f:140,to:[[105,.06]],a:.002,d:.06,peak:.22*it})}function b({id:B,kind:it,speed:ft}){const gt=Cr(ft);if(gt<.3||!g("wall"+Cr(B),.045))return;const Tt=Nc(gt/8),tt=.15+.85*Math.pow(Tt,.7),pt=x(.04),H=n.voice(0);if(H)switch(it){case"cushion":H.tone({f:150*pt,to:[[92*pt,.16]],a:.002,d:.16,peak:.55*tt}),H.noise({buf:"brown",filter:{type:"lowpass",f:600,q:.7},a:.002,d:.07,peak:.5*tt}),H.tone({type:"triangle",f:225*pt,to:[[300*pt,.05],[270*pt,.18]],a:.004,d:.17,peak:.13*tt,vib:[16,8,0]}),H.noise({filter:{type:"bandpass",f:1400,q:.8},a:5e-4,d:.012,peak:.12*tt});break;case"hedge":H.noise({buf:"rustle",from0:!0,rate:.85+.35*s(),a:.002,hold:.12,d:.2,peak:.55*(.4+.6*tt)}),H.noise({buf:"brown",filter:{type:"lowpass",f:380,q:.7},a:.003,d:.07,peak:.35*tt});break;case"bumper":{const rt=H.filter("lowpass",2400,.8);H.tone({type:"triangle",f:170*pt,to:[[430*pt,.045],[330*pt,.32]],vib:[24,26,0],a:.003,d:.34,peak:.36*(.35+.65*tt),dest:rt}),H.tone({f:120,to:[[78,.08]],a:.002,d:.08,peak:.4*tt}),H.noise({filter:{type:"bandpass",f:3e3,q:1.5},a:5e-4,d:.006,peak:.18*tt});break}case"tree":P(H,tt,300*pt,.75),H.noise({buf:"rustle",from0:!0,rate:1.1+.3*s(),a:.004,hold:.04,d:.15,peak:.22*tt});break;case"lollipop":P(H,tt*.9,720*pt,.7);break;case"mushroom":P(H,tt*.85,240*pt,.8);break;case"post":P(H,tt,520*pt);break;default:P(H,tt,430*pt);break}}function w(){if(!g("hop",.12))return;const B=n.voice(2);if(!B)return;const it=x(.03);B.noise({filter:{type:"bandpass",f:4200*it,q:5},a:5e-4,d:.009,peak:.5}),B.tone({f:1850*it,a:.001,d:.13,peak:.22}),B.tone({f:1850*2.76*it,a:.001,d:.05,peak:.09}),B.noise({t:.075,filter:{type:"bandpass",f:3700*it,q:4},a:5e-4,d:.008,peak:.2})}function v(B){if(!g("holed",.3))return;const it=n.voice(2);if(!it)return;const ft=Cr(B,1),gt=ft>2.5?4:ft>.9?3:2,Tt=[[0,3e3,.3],[.05,2650,.24],[.092,3250,.18],[.125,2500,.13]];for(let pt=0;pt<gt;pt++){const[H,rt,jt]=Tt[pt];it.noise({t:H,filter:{type:"bandpass",f:rt*x(.04),q:3.5},a:5e-4,d:.016,peak:jt})}const tt=Tt[gt-1][0]+.05;it.tone({t:tt,f:310,to:[[205,.22]],a:.002,d:.26,peak:.5}),it.tone({t:tt,f:640,to:[[470,.1]],a:.001,d:.11,peak:.13}),it.noise({t:tt,filter:{type:"bandpass",f:820,q:2.5},a:.001,d:.1,peak:.26}),it.tone({t:tt+.13,f:285,to:[[215,.11]],a:.002,d:.12,peak:.2}),it.noise({t:tt+.24,filter:{type:"bandpass",f:1900,q:3},a:5e-4,d:.01,peak:.08})}function _(B=1){const it=n.voice(2,B);if(it){it.tone({f:260,to:[[720,.07]],a:.002,d:.09,peak:.35}),it.noise({filter:{type:"lowpass",f:5200,q:.8,to:[[500,.45]]},a:.004,d:.5,peak:.5}),it.noise({buf:"brown",filter:{type:"lowpass",f:420,q:.7},a:.004,d:.26,peak:.42});for(let ft=0;ft<4;ft++){const gt=480+s()*520;it.tone({t:.13+ft*.07+s()*.03,f:gt,to:[[gt*1.9,.045]],a:.002,d:.05,peak:.11})}for(let ft=0;ft<3;ft++)it.noise({t:.2+s()*.3,filter:{type:"bandpass",f:4200+s()*2e3,q:3},a:5e-4,d:.012,peak:.09})}}function T(B=1){const it=n.voice(2,B);it&&(it.noise({filter:{type:"bandpass",f:1900,q:1.2,to:[[340,.4]]},a:.12,d:.3,peak:.36}),it.tone({f:900,to:[[260,.42]],a:.02,hold:.1,d:.32,peak:.08}),it.tone({t:.44,f:112,to:[[56,.16]],a:.003,d:.17,peak:.5}),it.noise({t:.44,buf:"brown",filter:{type:"lowpass",f:320,q:.7},a:.003,d:.1,peak:.36}))}function z(B){if(!g("whiff",.3))return;const it=n.voice(1);if(it){const ft=it.filter("lowpass",1600,.7);it.tone({type:"triangle",f:540,to:[[300,.3]],vib:[7,14,.05],a:.03,d:.3,peak:.22,dest:ft}),it.tone({f:270,to:[[150,.3]],a:.03,d:.28,peak:.1})}B==="water"&&g("hazard",.3)?_(.45):B==="oob"&&g("hazard",.3)&&T(.45)}function U(){if(!g("drop",.2))return;const B=n.voice(1);B&&(B.tone({f:380,to:[[1e3,.035]],a:.001,d:.05,peak:.28}),B.noise({filter:{type:"bandpass",f:2500,q:1.5},a:5e-4,d:.006,peak:.14}),B.tone({t:.085,f:700,to:[[520,.03]],a:.001,d:.035,peak:.08}))}function X(B){if(!g("ui",.06))return;const it=n.voice(1);it&&(it.tone({f:1500,to:[[1e3,.03]],a:.001,d:.035,peak:.26}),it.noise({filter:{type:"highpass",f:3e3,q:.7},a:5e-4,d:.004,peak:.1}),B&&it.tone({t:.05,f:2e3,to:[[1500,.03]],a:.001,d:.04,peak:.2}))}const Y=72,Q=74,xt=76,ot=79,k=69,D=67,q=84,K=88,nt=91,O=96;function J(B){if(!g("jingle",.5))return;const it=B==="ace"||B==="albatross"||B==="eagle",ft=n.voice(3,it?.62:.7);if(ft)if(it){const gt=[[0,Y,.06],[.11,xt,.06],[.22,ot,.06],[.34,q,.6]];for(const[tt,pt,H]of gt)y(ft,tt,pt,H,.2),m(ft,tt,pt,.35,.22);y(ft,.34,ot,.6,.1),y(ft,.34,xt,.6,.08);const Tt=[q,86,K,nt,93,O,98,100];for(let tt=0;tt<Tt.length;tt++)p(ft,.48+tt*.04,Tt[tt],.5,.07);if(B!=="eagle"){for(const tt of[q,K,nt,O])p(ft,1,tt,1.2,.08);m(ft,1,Y,.8,.18)}M(.3,!0)}else if(B==="birdie"){const gt=[[0,Y],[.085,xt],[.17,ot],[.255,q]];for(const[Tt,tt]of gt)m(ft,Tt,tt,Tt>.2?.7:.3,.28);p(ft,.255,q,.9,.09),p(ft,.255,K,.9,.06),M(.28,!1)}else B==="par"?(p(ft,0,ot,1,.2),m(ft,0,ot,.3,.12),p(ft,.16,q,1.3,.22),m(ft,.16,q,.5,.13)):B==="picked"?(m(ft,0,Q,.35,.18),m(ft,.17,k,.55,.16)):(m(ft,0,xt,.3,.22),m(ft,.15,Q,.3,.2),m(ft,.3,D,.3,.16),m(ft,.45,Y,.75,.22),p(ft,.45,q,.6,.05))}if(i&&i.on){i.on("shot:fire",B=>{d(),g("shot",.05)&&S(Cr(B&&B.power,.5))}),i.on("ball:contact",B=>{g("clack",.03)&&R(B&&B.speed)}),i.on("ball:ballhit",B=>{g("clack",.03)&&R(B&&B.speed,.7)}),i.on("ball:wall",B=>b(B||{})),i.on("ball:hop",()=>w()),i.on("ball:holed",B=>v(B&&B.speed)),i.on("ball:hazard",B=>{g("hazard",.3)&&(B&&B.kind==="water"?_(1):T(1))}),i.on("ball:whiff",B=>z(B&&B.reason)),i.on("ball:drop",()=>U()),i.on("hole:done",B=>J(B&&B.term&&B.term.key));for(const B of dw)i.on(B,()=>X(B==="ui:play"||B==="ui:next"||B==="ui:retry"||B==="ui:resume"));i.on("ui:sound",B=>{ut.setMuted(!!(B&&B.muted)),X(!0)}),i.on("audio:external",B=>ut.setExternalMute(!!(B&&B.muted)))}const ut={unlock:d,setMuted(B){r=!!B,f()},setExternalMute(B){o=!!B,f()},get muted(){return r},stats:()=>n.stats()};return ut}const xs=typeof window<"u"&&window.__ebgBoot?window.__ebgBoot:null,Yr=({pct:i,label:t})=>xs!==null?xs.stage(i,t):void 0;xs!==null&&xs.codeReady&&xs.codeReady();await Yr($s.course);await ed();_p();const fu=document.getElementById("stage"),Jr=document.getElementById("ui");Object.assign(fu.style,{position:"fixed",inset:"0",overflow:"hidden"});Object.assign(Jr.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"10"});vw();const Oe=Rp(),Sn=await w0(Ap),Ye=MM(fu),tn=JM(Ye),nn=y0({events:Oe}),hu=Sn.isFresh();let Ms=hu?0:Math.min(Sn.nextIndex(),Ai.length-1),dn=hd(Ai[Ms]),Xn=rp(Ye,dn),jh=!0;Ye.setRound(dn.round);tn.setLevel(dn);await Yr($s.balls);const mr=tS(Ye,{uiRoot:Jr,rig:tn});mr.setSkin(Sn.skin);mr.setRound(dn.round);const pp=cS(Ye,{events:Oe,play:nn}),mw=TS(Ye);await Yr($s.flags);const er=JS(Jr,{events:Oe}),mp=lw(Jr,{events:Oe,progress:Sn,holes:Ai,rounds:Kr,rig:tn,play:nn}),gw=76,gp=(i={})=>{tn.setInsets&&tn.setInsets({top:Math.max(gw,i.top||0),right:i.right||0,bottom:i.bottom||0,left:i.left||0})},va=ZS({stage:Ye,rig:tn,play:nn,events:Oe,uiRoot:Jr,onInsets:gp});gp(va.insets?va.insets():{});const Ra=pw({events:Oe});Ra.setMuted(Sn.muted);const du=document.createElement("div");du.textContent=`v${Jh}`;Object.assign(du.style,{position:"fixed",right:"max(10px, env(safe-area-inset-right))",bottom:"max(6px, env(safe-area-inset-bottom))",zIndex:"5",font:"11px system-ui, sans-serif",letterSpacing:".06em",color:"rgba(255,255,255,.55)",pointerEvents:"none"});document.body.appendChild(du);const Fe={menuOpen:!1,paused:!1,ad:!1,gameplay:!1,holesThisSession:0,roundPending:null,loading:!1};function Ri(){const i=!Fe.menuOpen&&!Fe.paused&&!Fe.ad&&!Fe.loading&&nn.state!=="idle"&&nn.state!=="done";va.enable(i),i!==Fe.gameplay&&(Fe.gameplay=i,i?yp():Sp())}function _a(){Ra.setExternalMute(Bc()),Oe.emit("audio:external",{muted:Bc()})}Tp(_a);_a();function Qr(i){Ms=i,Fe.loading=!0,jh&&dn.id===Ai[i].id||(Xn.dispose(),dn=hd(Ai[i]),Xn=rp(Ye,dn)),jh=!1,Ye.setRound(dn.round),mr.setRound(dn.round),tn.setLevel(dn),Xn.faceCamera(Ye.camera),pp.clear(),nn.load(dn,i),er.setHole(dn,i),er.setStrokes(0,dn.par),er.show(!0),wp({round:dn.round,hole:i+1}),Oe.emit("game:hole",{index:i,level:dn,first:hu&&i===0&&Fe.holesThisSession===0}),Ri(),tn.intro(nn).then(()=>{Ms===i&&(Fe.loading=!1,nn.state==="ready"&&tn.frameShot(nn),Xn.setFlow(1),Ri())})}async function xp(){if(!(Fe.holesThisSession<2)){Fe.ad=!0,Oe.emit("ad:start",{}),_a(),Ri();try{await Ep()}catch(i){console.error(i)}Fe.ad=!1,_a(),Oe.emit("ad:end",{}),Ri()}}function xw(i){const t=Kr.find(r=>r.id===i),e=i===1?0:9,n=t.holes.map((r,o)=>({index:e+o,strokes:Sn.best(e+o),par:r.par})),s=Sn.roundTotal(i);return{round:i,name:t.name,holes:n,total:s.total,par:s.par,rel:$c(s.total,s.par),complete:s.complete}}Oe.on("shot:ready",({strokes:i,par:t})=>{er.setStrokes(i,t),Fe.loading||tn.frameShot(nn),Xn.setFlow(1),Ri()});Oe.on("shot:fire",({strokes:i})=>{tn.userMoved=!1,er.setStrokes(i,nn.level.par),Xn.setFlow(0),Ra.unlock()});Oe.on("shot:end",({strokes:i,par:t})=>er.setStrokes(i,t));Oe.on("ball:contact",()=>mr.flash());Oe.on("ball:holed",()=>Xn.wiggleFlag());Oe.on("hole:done",({index:i,strokes:t,stars:e,term:n,level:s})=>{const r=Sn.roundTotal(s.round);Sn.record(i,t,e),Fe.holesThisSession+=1,(n.key==="ace"||n.key==="albatross")&&gu();const o=Ai.filter((c,l)=>Sn.best(l)!==null).length;if(bp(Math.round(o/Ai.length*100)),i===8||i===17){const c=Sn.roundTotal(s.round);c.complete&&(!r.complete||c.total<r.total)&&gu(),Fe.roundPending=s.round}Ri()});Oe.on("ui:next",async()=>{if(Fe.roundPending){const i=Fe.roundPending;Fe.roundPending=null,Oe.emit("game:round",xw(i));return}if(await xp(),Ms>=Ai.length-1){mp.showTitle();return}Qr(Ms+1)});Oe.on("ui:retry",async()=>{Fe.roundPending=null,nn.state==="done"&&await xp(),Fe.paused=!1,Qr(Ms)});Oe.on("ui:play",({index:i})=>{Fe.roundPending=null,Fe.paused=!1,Qr(i)});Oe.on("ui:pause",()=>{Fe.paused=!0,Ri()});Oe.on("ui:resume",()=>{Fe.paused=!1,Ri()});Oe.on("ui:menu",({open:i})=>{Fe.menuOpen=!!i,Ri()});Oe.on("ui:overview",({on:i})=>tn.overview(!!i));Oe.on("ui:sound",({muted:i})=>{Sn.setMuted(!!i),Ra.setMuted(!!i)});Oe.on("ui:skin",({id:i})=>{Sn.setSkin(i),mr.setSkin(i)});fu.addEventListener("pointerdown",()=>{Fe.loading&&tn.skipIntro&&tn.skipIntro()});Ye.onResize(()=>{Xn.faceCamera(Ye.camera),nn.state==="ready"&&!tn.userMoved&&tn.frameShot(nn)});let Uc=0,Zh=0;function vp(i){requestAnimationFrame(vp);const t=Uc?Math.min((i-Uc)/1e3,.1):0;Uc=i,Zh+=t,!Fe.paused&&!Fe.ad&&nn.update(t);const e=nn.balls();nn.state==="rolling"&&!tn.userMoved&&tn.follow(e[1].x,e[1].z),tn.update(t),Xn&&Xn.faceCamera(Ye.camera),mr.update(e,t),mw.update(nn,t),Xn.update(t,Zh),va.update(t),pp.update(t),Ye.render()}window.ebg={version:Jh,events:Oe,play:nn,stage:Ye,rig:tn,progress:Sn,HOLES:Ai,ROUNDS:Kr,loadHole:Qr,get level(){return dn},get course(){return Xn}};if(xs!==null){if(await Yr($s.warm),Ye.renderer&&Ye.scene&&Ye.camera)try{await Promise.race([Ye.renderer.compileAsync(Ye.scene,Ye.camera),new Promise(i=>setTimeout(i,4e3))])}catch(i){console.error(i)}for(let i=0;i<3;i++)await Yr({pct:$s.warm.pct+3+i*1.5,label:$s.warm.label}),Ye.render();await xs.ready()}Mp();requestAnimationFrame(vp);Qr(Ms);hu||mp.showTitle();function vw(){window.addEventListener("keydown",i=>{const t=i.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown"].includes(i.code)&&i.preventDefault()}),window.addEventListener("wheel",i=>i.preventDefault(),{passive:!1}),window.addEventListener("contextmenu",i=>i.preventDefault())}

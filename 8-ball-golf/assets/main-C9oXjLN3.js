import{S as Ns}from"./index-BGbYKhHQ.js";const ah="0.1.2",lc="8bg:",No={script:5e3,init:6e3,adStart:12e3,adMax:15e4};let Vs=null,Vn="none",Fr=null,Di=null,Fs=0,Fo=!1,Ii=!1,Ji=!1,Bl=-1;const uc=new Set,fc=new Map,ch=()=>typeof window<"u"?window:null,In=(...i)=>{try{console.warn("[platform]",...i)}catch{}};function Hi(i){if(Vs)try{const t=i(Vs);t&&typeof t.catch=="function"&&t.catch(e=>In(e))}catch(t){In(t)}}function Hl(i,t,e){let n=0;return Promise.race([Promise.resolve(i).catch(()=>e),new Promise(s=>{n=setTimeout(()=>s(e),t)})]).finally(()=>clearTimeout(n))}function Oo(){const i=hc();for(const t of[...uc])try{t(i)}catch(e){In(e)}}function lh(){try{const i=ch();return i&&i.localStorage||null}catch{return null}}function uh(){return Fr||(Fr=(async()=>{try{const i=ch();if(!i||!i.__cgSdk)return{env:Vn};const e=await Hl(i.__cgSdk,No.script,!1)&&i.CrazyGames&&i.CrazyGames.SDK;if(!e||typeof e.init!="function")return{env:Vn};if(!await Hl(Promise.resolve().then(()=>e.init()).then(()=>!0,o=>(In("init failed",o),!1)),No.init,!1))return{env:Vn};const s=String(e.environment||"disabled");if(s!=="crazygames"&&s!=="local")return Vn=s,{env:Vn};const r=e.game;try{Ji=!!(r.settings&&r.settings.muteAudio)}catch{Ji=!1}try{r.addSettingsChangeListener(o=>{let a=Ji;try{a=!!((o&&"muteAudio"in o?o:r.settings)||{}).muteAudio}catch{}a!==Ji&&(Ji=a,Oo())})}catch(o){In("settings listener",o)}try{e.data&&typeof e.data.getItem=="function"&&(e.data.getItem(lc+"probe"),Di=e.data)}catch(o){In("data module off",o&&(o.code||o.message||o)),Di=null}Vs=e,Vn=s,Fs===1&&Hi(o=>o.game.loadingStart()),Ji&&Oo()}catch(i){In("SDK unavailable",i),Vs=null,Di=null,(Vn==="crazygames"||Vn==="local")&&(Vn="none")}return{env:Vn}})(),Fr)}function yd(){Fs||(Fs=1,Hi(i=>i.game.loadingStart()))}function Sd(){if(Fs===2)return;const i=Fs;Fs=2,i===1&&Hi(t=>t.game.loadingStop())}function bd(){Fo||Ii||(Fo=!0,Hi(i=>i.game.gameplayStart()))}function wd(){Fo&&(Fo=!1,Hi(i=>i.game.gameplayStop()))}function Gl(){Hi(i=>i.game.happytime())}function Ed(i){Hi(t=>i?t.game.setGameContext(i):t.game.clearGameContext())}function Ad(i){const t=Math.max(0,Math.min(100,Math.round(Number(i)||0)));t<=Bl||(Bl=t,Hi(e=>e.game.reportGameCompletedPercentage(t)))}function Td(){return!Vs||Ii?Promise.resolve():new Promise(i=>{let t=!1,e=0,n=0;const s=()=>{t||(t=!0,clearTimeout(e),i())},r=()=>{clearTimeout(n),Ii&&(Ii=!1,Oo()),s()};e=setTimeout(()=>{Ii||s()},No.adStart);const o={adStarted:()=>{clearTimeout(e),clearTimeout(n),Ii||(Ii=!0,Oo()),n=setTimeout(r,No.adMax)},adFinished:r,adError:a=>{const c=a&&a.code;c&&c!=="adCooldown"&&c!=="adsDisabledBasicLaunch"&&c!=="unfilled"&&In("ad",c),r()}};try{const a=Vs.ad.requestAd("midgame",o);a&&typeof a.then=="function"&&a.then(void 0,()=>r())}catch(a){In("ad",a),r()}})}function hc(){return Ji||Ii}function Cd(i){return typeof i!="function"?()=>{}:(uc.add(i),()=>{uc.delete(i)})}const Rd={async load(i){await uh();const t=lc+i;if(Di)try{const e=Di.getItem(t);if(e!=null)return String(e);const n=Vl(t);if(n!=null){try{Di.setItem(t,n)}catch(s){In("migrate",s)}return n}return null}catch(e){In("data load",e)}return Vl(t)},save(i,t){const e=lc+i,n=String(t);if(Di)try{Di.setItem(e,n);return}catch(s){In("data save",s)}Pd(e,n)}};function Vl(i){const t=lh();if(t)try{const e=t.getItem(i);if(e!=null)return String(e)}catch{}return fc.has(i)?fc.get(i):null}function Pd(i,t){fc.set(i,t);const e=lh();if(e)try{e.setItem(i,t)}catch{}}function Ld(){const i=new Map;return{on(t,e){return i.has(t)||i.set(t,new Set),i.get(t).add(e),()=>i.get(t).delete(e)},emit(t,e){const n=i.get(t);if(n)for(const s of[...n])try{s(e)}catch(r){console.error("[events] "+t,r)}}}}const dc=Math.PI/180,zs=i=>Math.round(i*100)/100;function Wn(i,t=12){const e=i.length,n=[];for(let s=0;s<e;s++){const r=i[s],o=r[2]||0;if(!o){n.push([r[0],r[1]]);continue}const a=i[(s+e-1)%e],c=i[(s+1)%e];let l=a[0]-r[0],u=a[1]-r[1],h=c[0]-r[0],d=c[1]-r[1];const f=Math.hypot(l,u),g=Math.hypot(h,d);l/=f,u/=f,h/=g,d/=g;const x=Math.acos(Math.max(-1,Math.min(1,l*h+u*d)));let m=o/Math.tan(x/2),p=o;const _=.5*Math.min(f,g);m>_&&(m=_,p=m*Math.tan(x/2));const v=l+h,M=u+d,E=Math.hypot(v,M),A=p/Math.sin(x/2),T=r[0]+v/E*A,w=r[1]+M/E*A,b=Math.atan2(r[1]+u*m-w,r[0]+l*m-T);let S=Math.atan2(r[1]+d*m-w,r[0]+h*m-T)-b;for(;S>Math.PI;)S-=2*Math.PI;for(;S<-Math.PI;)S+=2*Math.PI;const C=Math.max(1,Math.ceil(Math.abs(S)/(t*dc)));for(let N=0;N<=C;N++)n.push([zs(T+p*Math.cos(b+S*N/C)),zs(w+p*Math.sin(b+S*N/C))])}return n.filter((s,r)=>{const o=n[(r+n.length-1)%n.length];return r===0&&n.length>1?!(s[0]===n[n.length-1][0]&&s[1]===n[n.length-1][1]):!(s[0]===o[0]&&s[1]===o[1])})}function Wl(i,t,e,n,s,r=10){const o=[],a=Math.max(2,Math.ceil((s-n)/r));for(let c=0;c<=a;c++){const l=(n+(s-n)*c/a)*dc;o.push([zs(i[0]+e*Math.cos(l)),zs(i[1]+e*Math.sin(l))])}for(let c=a;c>=0;c--){const l=(n+(s-n)*c/a)*dc;o.push([zs(i[0]+t*Math.cos(l)),zs(i[1]+t*Math.sin(l))])}return o}const Id=[{id:"g1",name:"Hello, Eight!",par:2,circle:5,size:[30,12],tee:[4,6],cup:[21,6],tip:"Sink the 8 in the hole!",border:"wall",ground:Wn([[0,.8,4],[15,0,8],[30,.8,4],[30,11.2,4],[15,12,8],[0,11.2,4]]),zones:[{surface:"green",circle:{c:[21,6],r:3.6}}],props:[{type:"sign",at:[1.5,-1.4]},{type:"flowers",at:[6,-1.3]},{type:"flowers",at:[11,13.3]},{type:"flowers",at:[19,-1.3]},{type:"flowers",at:[25,13.2]},{type:"tree",at:[-3.2,13.5]},{type:"tree",at:[33.5,-2.2]},{type:"bush",at:[27,13.4]},{type:"bush",at:[-1.4,3]},{type:"statue8",at:[33.6,6]}]},{id:"g2",name:"Easy Does It",par:2,circle:5,size:[34,14],tee:[4,7],cup:[16,7],tip:"Softer is smarter.",border:"wall",ground:Wn([[0,2,3],[9,1.5,3],[11,3,2],[16,1,5],[21,3.5,2],[34,3.5,3],[34,10.5,3],[21,10.5,2],[16,13,5],[11,11,2],[9,12.5,3],[0,12,3]]),zones:[{surface:"green",circle:{c:[16,7],r:3.6}}],props:[{type:"sign",at:[1,.2]},{type:"flowers",at:[10.5,1.2]},{type:"flowers",at:[10.5,12.8]},{type:"flowers",at:[16,-.6]},{type:"flowers",at:[16,14.6]},{type:"bush",at:[26,2]},{type:"bush",at:[29,12]},{type:"flowerbox",at:[22,12.3]},{type:"flowerbox",at:[31,1.7]},{type:"tree",at:[37.5,7]},{type:"tree",at:[24,15.5]}]},{id:"g3",name:"Side Swipe",par:3,circle:4,size:[30,18],tee:[2.8,3.54],cup:[25,15],tip:"Hit its side!",border:"hedge",ground:Wn([[0,5.73,1.5],[2.92,0,1.5],[22,0,6],[30,3,5],[30,18,4],[17,18,4],[15,9.5,3],[0,10,3]]),zones:[{surface:"green",circle:{c:[25,15],r:3.8}}],props:[{type:"bush",at:[-1,2.2]},{type:"bush",at:[1.2,-1]},{type:"bush",at:[-1,7.5]},{type:"fountain",at:[6.5,14.5]},{type:"flowers",at:[2,12.5]},{type:"flowers",at:[11.5,12]},{type:"flowers",at:[12,16.5]},{type:"flowers",at:[12,-1.2]},{type:"tree",at:[33.5,9]},{type:"tree",at:[26,-3.2]}]},{id:"g4",name:"Bank Job",par:3,circle:4,size:[26,15],tee:[3,3],cup:[23,3],tip:"Bounce it off the wall!",border:"wall",ground:Wn([[0,.5,3],[11.5,0,1.5],[11.5,8.5,1.5],[14.5,8.5,1.5],[14.5,0,1.5],[26,.5,3],[26,15,4],[0,15,4]]),zones:[{surface:"green",circle:{c:[23,3],r:3.8}}],props:[{type:"flowerbox",at:[13,2]},{type:"flowerbox",at:[13,5.2]},{type:"flowers",at:[13,7.6]},{type:"tree",at:[-3.3,7]},{type:"flowers",at:[6,16.3]},{type:"flowers",at:[20,16.3]},{type:"bush",at:[27.6,9]},{type:"sign",at:[1,-1]},{type:"tree",at:[29.3,-1.5]}]},{id:"g5",name:"Lollipop Lane",par:3,circle:3,size:[40,20],tee:[4,10],cup:[36,10],tip:"Move the white ball!",border:"wall",ground:Wn([[0,3,3],[10,0,6],[30,0,6],[40,3,3],[40,17,3],[30,20,6],[10,20,6],[0,17,3]]),zones:[{surface:"green",circle:{c:[36,10],r:3.5}}],posts:[...[4,8,12,16].flatMap(i=>[12,20,28].map(t=>({at:[t,i],r:.6,kind:"lollipop"}))),...[6,10,14].flatMap(i=>[16,24].map(t=>({at:[t,i],r:.6,kind:"lollipop"})))],props:[{type:"lollipop",at:[-3.2,3]},{type:"lollipop",at:[43.2,17]},{type:"lollipop",at:[20,23.2]},{type:"flowers",at:[20,-1.2]},{type:"flowers",at:[8,20.6]},{type:"flowers",at:[32,20.6]},{type:"tree",at:[-3.5,15]},{type:"tree",at:[43.5,4]},{type:"sign",at:[1.5,1.2]}]},{id:"g6",name:"Up & Over",par:3,circle:4,size:[40,18],tee:[4,9],cup:[35,9],tip:"Uphill? Hit harder.",border:"hedge",ground:Wn([[0,2,3],[13,1,3],[15.5,5,2],[23,5,2],[25,1,3],[40,2,3],[40,16,3],[25,17,3],[23,13,2],[15.5,13,2],[13,17,3],[0,16,3]]),steps:[{axis:"x",from:16,to:22,h:1.8}],zones:[{surface:"green",circle:{c:[35,9],r:4}}],props:[{type:"flowers",at:[19,3.5]},{type:"flowers",at:[19,14.5]},{type:"bush",at:[16.5,2.5]},{type:"bush",at:[21.5,15.5]},{type:"tree",at:[7,20]},{type:"tree",at:[7,-2]},{type:"flowers",at:[32,18]},{type:"flowers",at:[32,0]},{type:"statue8",at:[43.2,9]},{type:"sign",at:[1,.8]}]},{id:"g7",name:"Sidewinder",par:3,circle:4,size:[42,20],tee:[2.5,3.5],cup:[39,15],tip:"Arrows show the slope.",border:"wall",tilt:[0,.05],ground:Wn([[0,1,3],[12,0,8],[30,2.5,8],[42,7,4],[42,19.5,4],[32,20,8],[14,16,8],[0,12.5,3]]),zones:[{surface:"green",circle:{c:[39,15],r:4}}],props:[{type:"tree",at:[4,18]},{type:"tree",at:[18,21.5]},{type:"flowers",at:[8,15.5]},{type:"flowers",at:[26,20.3]},{type:"bush",at:[22,.2]},{type:"flowers",at:[36,3.2]},{type:"tree",at:[44.8,2]},{type:"sign",at:[.5,-1]}]},{id:"g8",name:"Sandy Toes",par:3,circle:3.5,size:[40,20],tee:[4,11],cup:[33,8.5],tip:"Sand slows the 8.",border:"wall",ground:Wn([[0,4,3],[12,1,6],[32,1,5],[40,4,4],[40,16,4],[32,20,5],[12,20,6],[0,18,3]]),zones:[{surface:"green",circle:{c:[33,8.5],r:3.6}},{surface:"sand",poly:Wn([[13,5,3],[20,2.5,4],[29,3.5,3],[30,7,2],[27,10.6,3],[17,10.6,3],[12.5,8.5,2]])},{surface:"sand",poly:Wl([33,8.5],3,4.6,-70,80)}],props:[{type:"flowers",at:[22,-.5]},{type:"bush",at:[9,.2]},{type:"flowers",at:[22,21]},{type:"bush",at:[36,19.2]},{type:"tree",at:[-3.4,11]},{type:"tree",at:[43.5,10]},{type:"sign",at:[.5,2]}]},{id:"g9",name:"King of the Hill",par:4,circle:3.5,size:[50,28],tee:[5,5],cup:[37,17.5],tip:"Find the way up!",border:"hedge",ground:Wn([[0,0,4],[14.5,0,1.5],[14.5,14,1.5],[17.5,14,1.5],[17.5,0,1.5],[50,0,5],[50,28,5],[0,28,4]]),plateaus:[{circle:{c:[37,17],r:5},h:1.5,ramp:4,linear:!0}],arcs:[{kind:"hedge",c:[37,17],r:5,from:250,to:530}],zones:[{surface:"green",circle:{c:[37,17],r:4.6}},{surface:"sand",poly:Wl([37,17],9.3,11,255,525)}],props:[{type:"flowerbox",at:[16,3]},{type:"flowerbox",at:[16,9]},{type:"flowers",at:[16,12.6]},{type:"tree",at:[-3.5,21]},{type:"tree",at:[53.5,8]},{type:"tree",at:[30,31.5]},{type:"flowers",at:[8,-1]},{type:"flowers",at:[33,-1]},{type:"statue8",at:[53.6,22]},{type:"sign",at:[-1,2]}]}],Xl=i=>Math.round(i*100)/100,Eo=(i,t)=>[Xl(i),Xl(t)];function bn(i,t=2.5,e=5,n=!0){const s=i.filter((a,c)=>{const l=i[(c+i.length-1)%i.length];return!n&&c===0||Math.hypot(a[0]-l[0],a[1]-l[1])>1e-6}),r=[],o=s.length;for(let a=0;a<o;a++){const c=s[a],l=c[2]??t;if(!n&&(a===0||a===o-1)){r.push(Eo(c[0],c[1]));continue}const u=s[(a+o-1)%o],h=s[(a+1)%o],d=Math.hypot(u[0]-c[0],u[1]-c[1]),f=Math.hypot(h[0]-c[0],h[1]-c[1]),g=[(u[0]-c[0])/d,(u[1]-c[1])/d],x=[(h[0]-c[0])/f,(h[1]-c[1])/f],m=Math.max(-1,Math.min(1,g[0]*x[0]+g[1]*x[1])),p=Math.acos(m)/2;if(!l||p>1.55){r.push(Eo(c[0],c[1]));continue}const _=Math.min(l/Math.tan(p),d*.48,f*.48),v=[c[0]+g[0]*_,c[1]+g[1]*_],M=[c[0]+x[0]*_,c[1]+x[1]*_];for(let E=0;E<=e;E++){const A=E/e,T=(1-A)*(1-A),w=2*(1-A)*A,b=A*A;r.push(Eo(T*v[0]+w*c[0]+b*M[0],T*v[1]+w*c[1]+b*M[1]))}}return r}function pc(i,t,e,n,s=10){const r=Math.max(2,Math.ceil(Math.abs(n-e)/s)),o=[];for(let a=0;a<=r;a++){const c=(e+(n-e)*a/r)*Math.PI/180;o.push(Eo(i[0]+Math.cos(c)*t,i[1]+Math.sin(c)*t))}return o}function Dd(i,t,e){const n=r=>i.reduce((o,a,c)=>Math.hypot(a[0]-r[0],a[1]-r[1])<Math.hypot(i[o][0]-r[0],i[o][1]-r[1])?c:o,0),s=[];for(let r=n(t),o=n(e);s.push(i[r]),r!==o;r=(r+1)%i.length);return s}const zd={id:"l1",name:"Bend It",par:3,circle:4.5,size:[40,22],tee:[5,11],cup:[35,11],tip:"Slide the dot to bend the 8!",ground:bn([[1,4],[12,1],[26,1.5],[39,3],[39,19],[26,20.5],[12,21],[1,18]],4.5),border:"wall",posts:[{at:[16,12.3],r:1.6,kind:"tree"},{at:[30.5,14],r:1.3,kind:"post"},{at:[30.5,8],r:1.3,kind:"post"}],zones:[{surface:"green",circle:{c:[35,11],r:4}}],props:[{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[41.5,22.5]},{type:"tree",at:[20,23.5],scale:1.2},{type:"bush",at:[6,-1.5]},{type:"bush",at:[33,-1.5]},{type:"flowers",at:[18,-1.6]},{type:"flowers",at:[-2,11]},{type:"sign",at:[-2.2,6]}]},ra=(i,t,e,n)=>{const s=n?1:-1;return[{kind:"hedge",pts:[[i-1.2,t],[i,t+s*1.2],[i+1.2,t]]},{kind:"hedge",pts:[[i,t+s*1.2],[i,e]]}]},Ud={id:"l2",name:"Slalom",par:4,circle:4,size:[46,22],tee:[4,11.5],cup:[38,9],tip:"Bend left, then bend right!",ground:bn([[1,2],[23,1],[45,2],[45,20],[23,21],[1,20]],4),border:"wall",walls:[...ra(10,20.36,14,!1),...ra(18,1.36,9.1,!0),...ra(29,1.5,9.2,!0)],posts:[{at:[10,13],r:1.2,kind:"tree"},{at:[18,10.1],r:1.2,kind:"tree"},{at:[29,10.2],r:1.2,kind:"tree"}],zones:[{surface:"rough",rect:[0,0,46,22]},{surface:"fairway",poly:bn([[2,5],[23,4],[44,5],[44,17],[23,18],[2,17]],3)},{surface:"green",circle:{c:[38,9],r:3.5}}],props:[{type:"tree",at:[-1.5,23]},{type:"tree",at:[47.5,-1]},{type:"tree",at:[30,23.5]},{type:"flowers",at:[14,-1.5]},{type:"flowers",at:[24,-1.6]},{type:"bush",at:[47.5,14]},{type:"sign",at:[-2,6]}]},Nd={id:"l3",name:"Lily Pad Lagoon",par:3,circle:4,size:[44,24],tee:[4,12],cup:[39.5,16.5],tip:"Splash = +1",ground:bn([[1,4],[10,.8],[34,.8],[43,4],[43,20],[34,23.2],[10,23.2],[1,20]],4),border:"wall",zones:[{surface:"water",ellipse:{c:[22,12],rx:8.5,ry:6.2}},{surface:"fairway",rect:[12.5,10.5,31.5,13.5]},{surface:"green",circle:{c:[39,16],r:3.8}}],props:[{type:"bridge",at:[22,12],r:8.6,scale:.75},{type:"lilypad",at:[17,16],r:.9},{type:"lilypad",at:[20.5,17.2],r:.7},{type:"lilypad",at:[26.5,15.6],r:.8},{type:"lilypad",at:[18.5,7.6],r:.8},{type:"lilypad",at:[24,6.8],r:.7},{type:"lilypad",at:[27.5,8.5],r:.9},{type:"reeds",at:[15,14.6]},{type:"reeds",at:[28.5,15]},{type:"reeds",at:[15.5,9]},{type:"reeds",at:[28.6,9]},{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[45.5,1]},{type:"flowers",at:[22,25.5]},{type:"flowers",at:[22,-1.6]}]},ql=bn([[6,21.2],[1.5,20.4],[1,4],[4,1.2],[36,1.2],[39,4],[38.5,20.4],[34,21.2]],3,5,!1),Fd={id:"l4",name:"Boing Boing",par:3,circle:3.5,size:[40,22],tee:[8,6],cup:[32,6],tip:"Cushions bounce more!",ground:ql,border:null,walls:[{kind:"wall",pts:ql},{kind:"cushion",pts:[[34,21.2],[6,21.2]]},{kind:"hedge",pts:[[9.9,1.2],[12.3,3.2]]},{kind:"hedge",pts:[[30.1,1.2],[27.7,3.2]]}],arcs:[{kind:"hedge",c:[20,1.2],r:8,from:14,to:166}],zones:[{surface:"rough",circle:{c:[20,1.2],r:7.6}},{surface:"green",circle:{c:[32,6],r:3.5}}],props:[{type:"flowers",at:[17,4]},{type:"flowers",at:[22.5,5]},{type:"bush",at:[20,2.6],scale:1.3},{type:"flowers",at:[14.5,2.4]},{type:"flowers",at:[25.5,2.4]},{type:"tree",at:[-1.5,22]},{type:"tree",at:[41.5,22]},{type:"bush",at:[20,23.6]},{type:"flowers",at:[10,23.6]},{type:"flowers",at:[30,23.6]}]},fh=(i,t,e=.5)=>[...pc([26,2.5],i,0,180,7.5).map(([n,s])=>[n,2.5+(s-2.5)*t/i]),[26-i,e],[26+i,e]],Yl=bn(fh(25,21.6),2.5),Od={id:"l5",name:"Banana Bay",par:4,circle:3.5,size:[52,25],tee:[6,4],cup:[46,4],tip:"Bend it round the bay!",ground:Yl,border:"wall",zones:[{surface:"rough",poly:Yl},{surface:"fairway",poly:bn(fh(23,19.4,2.2),2)},{surface:"water",ellipse:{c:[26,2],rx:17,ry:14}},{surface:"green",circle:{c:[46.5,5.5],r:3}}],props:[{type:"lilypad",at:[20,8],r:.9},{type:"lilypad",at:[26,11],r:.8},{type:"lilypad",at:[32,7],r:1},{type:"lilypad",at:[24,4],r:.7},{type:"fountain",at:[26,3.5]},{type:"reeds",at:[11.2,6.8]},{type:"reeds",at:[40.8,6.8]},{type:"reeds",at:[18,13.6]},{type:"reeds",at:[34,13.6]},{type:"tree",at:[-1.5,24]},{type:"tree",at:[53.5,24]},{type:"tree",at:[26,26.5],scale:1.2},{type:"flowers",at:[-2,12]},{type:"flowers",at:[54,12]}]},Kl=bn([[39,4],[39,19],[33,21],[25,21],[25,11.5],[15,11.5],[15,21],[8,21],[1,18],[1,6],[5,1.5],[12,1],[28,1],[33,2.5]],2.5),kd={id:"l6",name:"Rooftop Rally",par:3,circle:3,size:[40,22],tee:[5,16],cup:[33,15],tip:"Open edge = out!",ground:Kl,border:null,walls:[{kind:"wall",pts:Dd(Kl,[39,18],[2,7])},{kind:"cushion",pts:[[12,1],[28,1]]}],tilt:[0,.03],zones:[{surface:"green",circle:{c:[33,15],r:3.5}}],props:[{type:"tree",at:[20,17.5],scale:1.1},{type:"flowers",at:[17.5,14]},{type:"flowers",at:[22.5,14]},{type:"flowerbox",at:[4,23]},{type:"flowerbox",at:[11,23.2]},{type:"flowerbox",at:[29,23.2]},{type:"flowerbox",at:[36,22.8]},{type:"flowerbox",at:[-1.5,12],rot:90},{type:"sign",at:[-1.8,18]}]},Bd=[[1,3.5],[3.5,1],[36,1],[43,8],[43,8.6],[35.6,16],[30.5,16],[30.5,20.5],[28,23],[8,23],[1,16]],Hd={id:"l7",name:"Tight Squeeze",par:4,circle:2.5,size:[44,24],tee:[5,4],cup:[19,19.5],tip:"Stuck on a cushion? Push it in!",ground:Bd,border:null,walls:[{kind:"hedge",pts:[[36,1],[3.5,1],[1,3.5],[1,16]]},{kind:"hedge",pts:[[8,23],[28,23],[30.5,20.5],[30.5,17.6]]},{kind:"cushion",pts:[[36,1],[43,8],[43,8.6],[35.6,16],[27,16]]},{kind:"cushion",pts:[[28.9,16],[30.5,17.6]]},{kind:"cushion",pts:[[1,16],[8,23]]},{kind:"cushion",pts:[[8.8,7.8],[1,15.6]]},{kind:"cushion",pts:[[1,6.2],[2.6,7.8],[36,7.8]]},{kind:"cushion",pts:[[8,16],[24.5,16]]}],zones:[{surface:"water",poly:[[.8,7.6],[8.8,7.6],[.8,15.6]]},{surface:"green",circle:{c:[19,19.5],r:2.6}}],props:[{type:"lilypad",at:[2.6,10],r:.6},{type:"reeds",at:[2,13]},{type:"flowerbox",at:[36,22.5]},{type:"flowerbox",at:[40.5,18.5],rot:90},{type:"bush",at:[37.5,19.5]},{type:"tree",at:[-1.5,24.5]},{type:"tree",at:[45.5,-1]},{type:"flowers",at:[20,-1.6]},{type:"sign",at:[-2,6]}]},Gd={id:"l8",name:"Island Hop",par:4,circle:3,size:[40,34],tee:[8.5,27],cup:[12,8.5],tip:"Hop island to island!",ground:bn([[1,5],[4,1],[35,1.5],[39,5],[38.5,29],[35,33],[5,32.5],[1.5,29]],4),border:"wall",walls:[{kind:"cushion",pts:[[13.8,25],[22,25]]},{kind:"cushion",pts:[[13.8,29],[22.2,29]]},{kind:"cushion",pts:[[22.5,22.4],[22.5,13.6]]},{kind:"cushion",pts:[[26.5,21],[26.5,11.8]]}],arcs:[{kind:"cushion",c:[9,27],r:4.6,from:30,to:330},{kind:"cushion",c:[28.5,25],r:6.2,from:-75,to:150},{kind:"cushion",c:[13,9],r:4.9,from:110,to:250}],hills:[{c:[29,25],r:4.5,h:.25}],plateaus:[{circle:{c:[12,8.5],r:2.8},h:.25,ramp:1.2}],zones:[{surface:"water",rect:[0,0,40,34]},{surface:"rough",poly:bn([[0,0],[5.5,0],[5.5,13],[3.5,19],[0,20]],2.5)},{surface:"rough",poly:bn([[31.5,0],[40,0],[40,16],[35,15.5],[31.5,13]],2.5)},{surface:"rough",poly:bn([[15.5,31.5],[21,31.5],[22,34],[14.5,34]],1.5)},{surface:"fairway",circle:{c:[9,27],r:5}},{surface:"fairway",circle:{c:[28.5,25],r:6.6}},{surface:"fairway",ellipse:{c:[18,9],rx:9.5,ry:5.5}},{surface:"fairway",rect:[13.6,25,22.6,29]},{surface:"fairway",rect:[22.5,11,26.5,22]},{surface:"green",circle:{c:[12,8.5],r:2.8}}],props:[{type:"bridge",at:[18,27],r:4.2},{type:"bridge",at:[24.5,17],r:4.4,rot:90},{type:"lilypad",at:[6,17],r:.9},{type:"lilypad",at:[33,13],r:.8},{type:"lilypad",at:[35.5,7],r:1},{type:"lilypad",at:[17,20],r:.7},{type:"lilypad",at:[5,6],r:.8},{type:"lilypad",at:[34,31],r:.7},{type:"reeds",at:[3.4,21]},{type:"reeds",at:[36,20.5]},{type:"reeds",at:[29,4]},{type:"reeds",at:[3.5,12]},{type:"fountain",at:[33.5,9]},{type:"tree",at:[-1.5,35]},{type:"tree",at:[41.5,35]},{type:"flowers",at:[20,35.5]}]},Or=Math.atan2(Math.sqrt(29),14)*(180/Math.PI),Vd=[...pc([44,16],15,180+Or,540-Or,7.5),...pc([16,16],15,Or,360-Or,7.5).slice(1,-1)],Wd={id:"l9",name:"Figure Eight",par:5,circle:3.5,size:[60,32],tee:[4.5,16],cup:[55.5,16],tip:"Last hole: loop the 8!",ground:bn(Vd,2,4),border:"wall",posts:[{at:[30,16],r:1.8,kind:"bumper"}],arcs:[{kind:"cushion",c:[16,16],r:8.5,from:100,to:170},{kind:"cushion",c:[16,16],r:8.5,from:190,to:260},{kind:"cushion",c:[44,16],r:8.5,from:10,to:80},{kind:"cushion",c:[44,16],r:8.5,from:280,to:350}],plateaus:[{circle:{c:[55.5,16],r:2.6},h:.3,ramp:1.5}],zones:[{surface:"rough",circle:{c:[16,16],r:15.5}},{surface:"rough",circle:{c:[44,16],r:15.5}},{surface:"fairway",circle:{c:[16,16],r:13}},{surface:"fairway",circle:{c:[44,16],r:13}},{surface:"fairway",rect:[26,9.5,34,22.5]},{surface:"water",circle:{c:[16,16],r:8}},{surface:"water",circle:{c:[44,16],r:8}},{surface:"green",circle:{c:[55.5,16],r:3}}],props:[{type:"fountain",at:[16,16],scale:1.2},{type:"fountain",at:[44,16],scale:1.2},{type:"lilypad",at:[12,12],r:.9},{type:"lilypad",at:[20.5,19.5],r:.8},{type:"lilypad",at:[13,20],r:.7},{type:"lilypad",at:[47.5,12.5],r:.9},{type:"lilypad",at:[40,19.5],r:.8},{type:"lilypad",at:[48,20.5],r:.7},{type:"reeds",at:[9.5,19.5]},{type:"reeds",at:[22.5,12]},{type:"reeds",at:[37.5,12.5]},{type:"reeds",at:[50.5,19.5]},{type:"statue8",at:[58.5,28],scale:1.3},{type:"flowers",at:[56,30.5]},{type:"flowers",at:[60.5,25]},{type:"tree",at:[1.5,29.5]},{type:"tree",at:[1.5,2.5]},{type:"tree",at:[58.5,3]},{type:"bush",at:[30,27.5]},{type:"bush",at:[30,4.5]},{type:"flowers",at:[29,26.5]},{type:"flowers",at:[31,5.5]}]},Xd=[zd,Ud,Nd,Fd,Od,kd,Hd,Gd,Wd],Lr=Object.freeze([{id:1,name:"Greenside",holes:Id},{id:2,name:"Lakeside",holes:Xd}]),xi=Object.freeze(Lr.flatMap((i,t)=>i.holes.map((e,n)=>Object.freeze({...e,round:i.id,number:t*9+n+1})))),Wt=Object.freeze({DT:1/240,R:.5,MAX_EVENTS:8,E_BALL:.95,SLOPE_K:21,GRAD_EPS:.1,V_SLEEP:.05,SLOW_V:.3,SLOW_MAX_T:2.5,MAX_SHOT_T:20,D_MAX:40,D_REF_DECEL:3,POWER_MIN:.03,PLACE_GAP:.05,CUE_MAX_TRAVEL:12,CUE_FADE_T:.5,GHOST_DECEL:8,CURVE_K:.3,CURVE_LEN:4,EIGHT_CURVE_K:.04,EIGHT_CURVE_LEN:15,HOLE_R:1.1,HOLE_VCAP:8,LIP_W:.5,LIP_A:4,HOLE_SETTLE_V:1,HOP_KEEP:.85}),jl=Object.freeze({green:Object.freeze({decel:2}),fairway:Object.freeze({decel:3}),rough:Object.freeze({decel:6}),sand:Object.freeze({decel:14}),ice:Object.freeze({decel:.8})}),mc=Object.freeze({wall:Object.freeze({e:.6,keep:.95}),hedge:Object.freeze({e:.6,keep:.95}),cushion:Object.freeze({e:.85,keep:.97}),bumper:Object.freeze({e:1,keep:1}),post:Object.freeze({e:.6,keep:.95}),tree:Object.freeze({e:.6,keep:.95}),lollipop:Object.freeze({e:.6,keep:.95})}),Oi=1/0,oa=i=>mc[i]||mc.wall;function qd(i){const t=[],e=[],n=new Set,s=(l,u,h)=>{const d=l+","+u;n.has(d)||(n.add(d),e.push({x:l,z:u,e:h.e,keep:h.keep,kind:h===mc.cushion?"cushion":"wall",minx:l,maxx:l,minz:u,maxz:u}))};for(const l of i.segments||[]){const u=l.bx-l.ax,h=l.bz-l.az,d=u*u+h*h;if(d===0)continue;const f=Math.sqrt(d),g=oa(l.kind);t.push({ax:l.ax,az:l.az,ex:u,ez:h,len2:d,nx:-h/f,nz:u/f,e:g.e,keep:g.keep,kind:l.kind||"wall",minx:Math.min(l.ax,l.bx),maxx:Math.max(l.ax,l.bx),minz:Math.min(l.az,l.bz),maxz:Math.max(l.az,l.bz)}),s(l.ax,l.az,g),s(l.bx,l.bz,g)}const r=(i.posts||[]).map(l=>{const u=oa(l.kind||"post");return{x:l.x,z:l.z,r:l.r,e:u.e,keep:u.keep,kind:l.kind||"post",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),o=(i.arcs||[]).map(l=>{const u=oa(l.kind);return s(l.x+l.sx*l.r,l.z+l.sz*l.r,u),s(l.x+l.ex*l.r,l.z+l.ez*l.r,u),{x:l.x,z:l.z,r:l.r,sx:l.sx,sz:l.sz,ex:l.ex,ez:l.ez,e:u.e,keep:u.keep,kind:l.kind||"wall",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),a=$l(0,i.eight.x,i.eight.z);a.mode="off";const c=$l(1,i.eight.x,i.eight.z);return{t:0,shotT:0,active:!1,balls:[a,c],segs:t,caps:e,posts:r,arcs:o,hole:{x:i.hole.x,z:i.hole.z},placeR:i.placeR||4,lieX:i.eight.x,lieZ:i.eight.z,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function $l(i,t,e){return{id:i,x:t,z:e,px:t,pz:e,vx:0,vz:0,mode:"rest",spin:0,travel:0,curveS:0,slowT:0,fadeT:0,overHole:!1,decel:0,slopeA2:0}}function Zl(i,t,e){const n=i.balls[1];n.x=n.px=t,n.z=n.pz=e,n.vx=0,n.vz=0,n.mode="rest",n.spin=0,n.curveS=0,n.slowT=0,n.overHole=!1,i.lieX=t,i.lieZ=e}function hh(i){const t=i<Wt.POWER_MIN?Wt.POWER_MIN:i>1?1:i;return Math.sqrt(2*Wt.D_REF_DECEL*Wt.D_MAX*t)/((1+Wt.E_BALL)/2)}function dh(i,t,e,n){const s=i.balls[0],r=i.balls[1],o=Math.sqrt(t.dx*t.dx+t.dz*t.dz),a=hh(n);s.x=s.px=t.x,s.z=s.pz=t.z,s.vx=t.dx/o*a,s.vz=t.dz/o*a,s.mode="cue",s.spin=e<-1?-1:e>1?1:e,s.travel=0,s.fadeT=0,i.lieX=r.x,i.lieZ=r.z,r.slowT=0,i.shotT=i.t,i.active=!0}const gc={x:0,z:0},Re={t:0,kind:0,i:0,j:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""},qn=0,ph=1,pl=2,aa=3;function mh(i,t=Wt.DT){const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];s.px=s.x,s.pz=s.z,s.mode==="cue"?Yd(s,t):s.mode==="roll"?$d(i,s,t):s.mode==="ghost"&&Kd(s,t)}Qd(i,t);for(let n=0;n<e.length;n++)ep(i,e[n],t);if(i.t+=t,i.active){let n=!1;for(let s=0;s<e.length;s++){const r=e[s].mode;(r==="cue"||r==="roll"||r==="ghost")&&(n=!0)}if(n&&i.t-i.shotT>Wt.MAX_SHOT_T){for(let s=0;s<e.length;s++){const r=e[s];r.mode==="roll"?xc(i,r):(r.mode==="cue"||r.mode==="ghost")&&(r.mode="off")}n=!1}n||(i.active=!1,i.events.push({type:"shotEnd",t:i.t}))}}function wr(i){return Math.sqrt(i.vx*i.vx+i.vz*i.vz)}function ml(i,t,e){const n=1-.5*t*t,s=i.vx*n-i.vz*t,r=i.vx*t+i.vz*n,o=e/Math.sqrt(s*s+r*r);i.vx=s*o,i.vz=r*o}function Yd(i,t){const e=wr(i);if(i.spin!==0&&e>0){const n=1-i.travel/Wt.CURVE_LEN;n>0&&ml(i,Wt.CURVE_K*i.spin*n*e*t,e)}i.travel+=e*t}function Kd(i,t){const e=wr(i),n=Wt.GHOST_DECEL*t;if(e<=n)i.vx=0,i.vz=0;else{const s=(e-n)/e;i.vx*=s,i.vz*=s}}function jd(i,t,e,n=gc){const s=Wt.GRAD_EPS,r=i.heightAt;return n.x=(r(t+s,e)-r(t-s,e))/(2*s),n.z=(r(t,e+s)-r(t,e-s))/(2*s),n}function $d(i,t,e){const n=jl[i.surfaceAt(t.x,t.z)]||jl.fairway;jd(i,t.x,t.z);let s=-Wt.SLOPE_K*gc.x,r=-Wt.SLOPE_K*gc.z;const o=i.hole.x-t.x,a=i.hole.z-t.z,c=o*o+a*a,l=Wt.HOLE_R+Wt.LIP_W;if(c<l*l&&c>=Wt.HOLE_R*Wt.HOLE_R){const f=Math.sqrt(c);s+=Wt.LIP_A*o/f,r+=Wt.LIP_A*a/f}if(t.spin!==0){const f=wr(t),g=1-t.curveS/Wt.EIGHT_CURVE_LEN;g>0&&f>0?ml(t,Wt.EIGHT_CURVE_K*t.spin*g*f*e,f):g<=0&&(t.spin=0),t.curveS+=f*e}t.vx+=s*e,t.vz+=r*e;const u=wr(t),h=n.decel*e,d=s*s+r*r;if(u>h){const f=(u-h)/u;t.vx*=f,t.vz*=f}else if(d<=n.decel*n.decel)t.vx=0,t.vz=0;else{const f=Math.sqrt(d),g=(f-n.decel)*e/f;t.vx=s*g,t.vz=r*g}t.decel=n.decel,t.slopeA2=d}function Ao(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=a*e+c*n;if(l>=0)return Oi;const u=a*a+c*c-o*o;if(u<=0)return 0;const h=e*e+n*n,d=l*l-h*u;return d<0?Oi:u/(-l+Math.sqrt(d))}function Zd(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=e*e+n*n;if(l===0)return Oi;const u=a*e+c*n,h=a*a+c*c-o*o;if(h>=0)return u>0?0:Oi;const d=Math.sqrt(u*u-l*h);return u>0?-h/(u+d):(-u+d)/l}const Jl=1e-9;function kr(i,t,e,n,s){return i.maxx<t||i.minx>e||i.maxz<n||i.minz>s}function gh(i,t,e,n,s,r,o,a){let c=o,l=qn;const u=(n<0?-n:n)*o+r+Jl,h=(s<0?-s:s)*o+r+Jl,d=t-u,f=t+u,g=e-h,x=e+h,m=i.segs;for(let M=0;M<m.length;M++){const E=m[M];if(kr(E,d,f,g,x))continue;let A=E.nx,T=E.nz,w=(t-E.ax)*A+(e-E.az)*T;w<0&&(A=-A,T=-T,w=-w);const b=n*A+s*T;if(b>=0)continue;let S=(w-r)/-b;if(S<0&&(S=0),S>c||S===c&&l!==qn)continue;const C=t+n*S,N=e+s*S,B=((C-E.ax)*E.ex+(N-E.az)*E.ez)/E.len2;B<0||B>1||(c=S,l=pl,a.nx=A,a.nz=T,a.e=E.e,a.keep=E.keep,a.ck=E.kind)}const p=i.caps;for(let M=0;M<p.length;M++){const E=p[M];if(kr(E,d,f,g,x))continue;const A=Ao(t,e,n,s,E.x,E.z,r);(A<c||A===c&&l===qn)&&(c=A,l=aa,a.cx=E.x,a.cz=E.z,a.sign=1,a.e=E.e,a.keep=E.keep,a.ck=E.kind)}const _=i.posts;for(let M=0;M<_.length;M++){const E=_[M];if(kr(E,d,f,g,x))continue;const A=Ao(t,e,n,s,E.x,E.z,E.r+r);(A<c||A===c&&l===qn)&&(c=A,l=aa,a.cx=E.x,a.cz=E.z,a.sign=1,a.e=E.e,a.keep=E.keep,a.ck=E.kind)}const v=i.arcs;for(let M=0;M<v.length;M++){const E=v[M];if(kr(E,d,f,g,x))continue;const A=t-E.x,T=e-E.z,w=A*A+T*T>E.r*E.r,b=w?Ao(t,e,n,s,E.x,E.z,E.r+r):Zd(t,e,n,s,E.x,E.z,E.r-r);if(!(b<c||b===c&&l===qn))continue;const S=t+n*b-E.x,C=e+s*b-E.z;E.sx*C-E.sz*S<0||S*E.ez-C*E.ex<0||(c=b,l=aa,a.cx=E.x,a.cz=E.z,a.sign=w?1:-1,a.e=E.e,a.keep=E.keep,a.ck=E.kind)}return a.t=c,a.kind=l,l===qn?Oi:c}function Ql(i){return i==="cue"||i==="roll"||i==="rest"}function ca(i){return i==="cue"||i==="roll"}const Xn={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function Jd(i,t){const e=i.balls;Re.kind=qn,Re.t=t;for(let n=0;n<e.length;n++){const s=e[n];if(!Ql(s.mode))continue;for(let o=n+1;o<e.length;o++){const a=e[o];if(!Ql(a.mode)||!ca(s.mode)&&!ca(a.mode))continue;const c=Ao(s.x,s.z,s.vx-a.vx,s.vz-a.vz,a.x,a.z,2*Wt.R);(c<Re.t||c===Re.t&&Re.kind===qn)&&(Re.t=c,Re.kind=ph,Re.i=n,Re.j=o)}if(!ca(s.mode))continue;const r=gh(i,s.x,s.z,s.vx,s.vz,Wt.R,Re.t,Xn);(r<Re.t||r===Re.t&&Re.kind===qn&&r!==Oi)&&(Re.t=r,Re.kind=Xn.kind,Re.i=n,Re.nx=Xn.nx,Re.nz=Xn.nz,Re.cx=Xn.cx,Re.cz=Xn.cz,Re.sign=Xn.sign,Re.e=Xn.e,Re.keep=Xn.keep,Re.ck=Xn.ck)}return Re}function tu(i,t){if(t===0)return;const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];(s.mode==="cue"||s.mode==="roll"||s.mode==="ghost")&&(s.x+=s.vx*t,s.z+=s.vz*t)}}function Qd(i,t){let e=t;for(let n=0;n<Wt.MAX_EVENTS;n++){const s=Jd(i,e);if(s.kind===qn){tu(i,e);return}if(tu(i,s.t),tp(i,s),e-=s.t,e<=0)return}}function tp(i,t){const e=i.balls;if(t.kind===ph){const l=e[t.i],u=e[t.j];let h=u.x-l.x,d=u.z-l.z;const f=Math.sqrt(h*h+d*d);h/=f,d/=f;const g=l.vx-u.vx,x=l.vz-u.vz,m=g*h+x*d;if(m<=0)return;const p=(1+Wt.E_BALL)/2*m;l.vx-=p*h,l.vz-=p*d,u.vx+=p*h,u.vz+=p*d;const _=l.mode==="cue"?t.i:u.mode==="cue"?t.j:-1;if(l.mode==="rest"&&(l.mode="roll"),u.mode==="rest"&&(u.mode="roll"),_>=0){const v=e[_],M=e[_===t.i?t.j:t.i],E=_===t.i?1:-1;i.events.push({type:"contact",t:i.t,gx:v.x,gz:v.z,nx:h*E,nz:d*E,v8x:M.vx,v8z:M.vz,cutCos:m/Math.sqrt(g*g+x*x),spin:v.spin}),M.spin=v.spin,M.curveS=0,M.slowT=0,v.mode="ghost",v.spin=0,v.fadeT=Wt.CUE_FADE_T}else i.events.push({type:"ballHit",t:i.t,speed:m});return}const n=e[t.i];let s,r;if(t.kind===pl)s=t.nx,r=t.nz;else{s=(n.x-t.cx)*t.sign,r=(n.z-t.cz)*t.sign;const l=Math.sqrt(s*s+r*r);s/=l,r/=l}const o=n.vx*s+n.vz*r;if(o>=0)return;const a=n.vx-o*s,c=n.vz-o*r;n.vx=a*t.keep-t.e*o*s,n.vz=c*t.keep-t.e*o*r,n.spin=0,i.events.push({type:"wall",t:i.t,id:n.id,x:n.x,z:n.z,nx:s,nz:r,speed:-o,kind:t.ck})}function xc(i,t){t.vx=0,t.vz=0,t.mode="rest",t.slowT=0,t.spin=0,i.events.push({type:"rest",t:i.t,id:t.id,x:t.x,z:t.z})}function ep(i,t,e){if(t.mode==="ghost"){t.fadeT-=e,t.fadeT<=0&&(t.mode="off");return}if(t.mode!=="cue"&&t.mode!=="roll")return;const n=i.hazardAt(t.x,t.z);if(n){t.mode==="cue"?(t.mode="off",i.events.push({type:"whiff",t:i.t,reason:n,x:t.x,z:t.z})):(t.mode="sunk",t.vx=0,t.vz=0,t.spin=0,i.events.push({type:n,t:i.t,id:t.id,x:t.x,z:t.z,dropX:i.lieX,dropZ:i.lieZ}));return}if(t.mode==="cue"){t.travel>Wt.CUE_MAX_TRAVEL&&(t.mode="ghost",t.fadeT=Wt.CUE_FADE_T,i.events.push({type:"whiff",t:i.t,reason:"miss",x:t.x,z:t.z}));return}const s=t.x-i.hole.x,r=t.z-i.hole.z,o=s*s+r*r,a=wr(t);if(o<Wt.HOLE_R*Wt.HOLE_R){let c=a<Wt.HOLE_SETTLE_V;if(!c&&!t.overHole&&(c=a<=Wt.HOLE_VCAP,c||(t.vx*=Wt.HOP_KEEP,t.vz*=Wt.HOP_KEEP,i.events.push({type:"hop",t:i.t,id:t.id,x:t.x,z:t.z,speed:a,vcap:Wt.HOLE_VCAP}))),t.overHole=!0,c){t.mode="holed",t.vx=0,t.vz=0,t.spin=0,i.events.push({type:"holed",t:i.t,id:t.id,speed:a});return}}else t.overHole=!1;if(a===0||a<Wt.V_SLEEP&&t.slopeA2<t.decel*t.decel){xc(i,t);return}a<Wt.SLOW_V?(t.slowT+=e,t.slowT>Wt.SLOW_MAX_T&&xc(i,t)):t.slowT=0}function la(i,t,e){const n=i.balls[1],s=t-n.x,r=e-n.z,o=s*s+r*r,a=2*Wt.R+Wt.PLACE_GAP;return o>i.placeR*i.placeR||o<a*a?!1:ip(i,t,e)&&!np(i,n.x,n.z,t,e)}function np(i,t,e,n,s){const r=n-t,o=s-e;for(const c of i.segs){const l=r*c.ez-o*c.ex;if(l===0)continue;const u=c.ax-t,h=c.az-e,d=(u*c.ez-h*c.ex)/l,f=(u*o-h*r)/l;if(d>0&&d<1&&f>=0&&f<=1)return!0}const a=r*r+o*o;for(const c of i.arcs){const l=t-c.x,u=e-c.z,h=l*r+u*o,d=l*l+u*u-c.r*c.r,f=h*h-a*d;if(f<0||a===0)continue;const g=Math.sqrt(f);for(const x of[(-h-g)/a,(-h+g)/a]){if(!(x>0&&x<1))continue;const m=l+r*x,p=u+o*x;if(c.sx*p-c.sz*m>=0&&m*c.ez-p*c.ex>=0)return!0}}return!1}function ip(i,t,e){const n=Wt.R;if(i.hazardAt(t,e))return!1;for(const s of i.segs){let r=((t-s.ax)*s.ex+(e-s.az)*s.ez)/s.len2;r=r<0?0:r>1?1:r;const o=s.ax+s.ex*r-t,a=s.az+s.ez*r-e;if(o*o+a*a<n*n)return!1}for(const s of i.posts){const r=s.x-t,o=s.z-e,a=s.r+n;if(r*r+o*o<a*a)return!1}for(const s of i.arcs){const r=t-s.x,o=e-s.z,a=Math.sqrt(r*r+o*o);if(s.sx*o-s.sz*r>=0&&r*s.ez-o*s.ex>=0&&a>s.r-n&&a<s.r+n)return!1}for(const s of i.caps){const r=s.x-t,o=s.z-e;if(r*r+o*o<n*n)return!1}return!0}function Br(i,t,e,n){return i.filter(s=>{const r=t<s.minx?s.minx:t>s.maxx?s.maxx:t,o=e<s.minz?s.minz:e>s.maxz?s.maxz:e,a=r-t,c=o-e;return a*a+c*c<=n*n})}function sp(i,t,e){const n=Wt.CUE_MAX_TRAVEL+2*Wt.R+.5;return{t:i.t,shotT:i.shotT,active:!1,balls:i.balls.map(s=>({...s})),segs:Br(i.segs,t,e,n),caps:Br(i.caps,t,e,n),posts:Br(i.posts,t,e,n),arcs:Br(i.arcs,t,e,n),hole:i.hole,placeR:i.placeR,lieX:i.lieX,lieZ:i.lieZ,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function rp(i,t,e,n,s=3){const r=sp(i,t.x,t.z);dh(r,t,e,n);const o=r.balls[0],a=r.balls[1],c=[t.x,t.z],l=Math.ceil((Wt.CUE_MAX_TRAVEL+1)/(hh(n)*Wt.DT))+4;for(let u=1;u<=l;u++){mh(r);for(let h=0;h<r.events.length;h++){const d=r.events[h];if(d.type==="wall"&&d.id===0)c.push(d.x,d.z);else if(d.type==="contact"){c.push(d.gx,d.gz);const f=Math.sqrt(d.v8x*d.v8x+d.v8z*d.v8z);return{hit:!0,points:c,ghost:{x:d.gx,z:d.gz},normal:{x:d.nx,z:d.nz},eightDir:{x:d.v8x/f,z:d.v8z/f},eightSpeed:f,cutCos:d.cutCos,spin:d.spin,eightStart:{x:a.x,z:a.z},reason:null}}else if(d.type==="whiff")return c.push(d.x,d.z),{hit:!1,points:c,reason:d.reason}}r.events.length=0,u%s===0&&c.push(o.x,o.z)}return{hit:!1,points:c,reason:"miss"}}const Cn={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function op(i,t,e,n,s,r,o=14,a=3){const l=[t,e];let u=Math.sqrt(n*n+s*s);n/=u,s/=u;let h=0,d=null,f=null,g=!1,x=o,m=r;const p={vx:n,vz:s};for(let _=0;_<400&&h<x;_++){const v=x-h<.25?x-h:.25;if(m!==0){const w=1-h/Wt.EIGHT_CURVE_LEN;w>0&&ml(p,Wt.EIGHT_CURVE_K*m*w*v,1)}const M=gh(i,t,e,p.vx,p.vz,Wt.R,v,Cn);if(M!==Oi&&!d){t+=p.vx*M,e+=p.vz*M,h+=M,l.push(t,e);let w,b;Cn.kind===pl?(w=Cn.nx,b=Cn.nz):(w=(t-Cn.cx)*Cn.sign,b=(e-Cn.cz)*Cn.sign,u=Math.sqrt(w*w+b*b),w/=u,b/=u);const S=p.vx*w+p.vz*b,C=(p.vx-S*w)*Cn.keep-Cn.e*S*w,N=(p.vz-S*b)*Cn.keep-Cn.e*S*b;u=Math.sqrt(C*C+N*N),p.vx=C/u,p.vz=N/u,d={x:t,z:e},m=0,x=h+a;continue}if(M!==Oi){t+=p.vx*M,e+=p.vz*M,l.push(t,e);break}t+=p.vx*v,e+=p.vz*v,h+=v,l.push(t,e);const E=i.hazardAt(t,e);if(E){f=E;break}const A=t-i.hole.x,T=e-i.hole.z;A*A+T*T<Wt.HOLE_R*Wt.HOLE_R&&(g=!0)}return{points:l,hazard:f,bounce:d,cup:g}}function ap(i,t,e,n=240){e.acc+=t>.25?.25:t;let s=0;for(;e.acc>=Wt.DT&&s<n;)mh(i),e.acc-=Wt.DT,s++;return s>=n&&(e.acc=0),e.acc/Wt.DT}function cp(i,t,e,n,s=0,r=0){return(o,a)=>{let c=(o-s)/n,l=(a-r)/n;c=c<0?0:c>t-1.000001?t-1.000001:c,l=l<0?0:l>e-1.000001?e-1.000001:l;const u=c|0,h=l|0,d=c-u,f=l-h,g=h*t+u,x=i[g]+(i[g+1]-i[g])*d,m=i[g+t]+(i[g+t+1]-i[g+t])*d;return x+(m-x)*f}}const Si=.25,Hr=4,lp=Object.freeze({oob:0,fairway:1,green:2,rough:3,sand:4,water:5,ice:6}),up=Object.freeze(["oob","fairway","green","rough","sand","water","ice"]),sr=i=>({x:i[0],z:-i[1]});function vc(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[s][0],a=i[s][1],c=i[r][0],l=i[r][1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function fp(i,t,e){let n=1/0;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[r][0],a=i[r][1],c=i[s][0]-o,l=i[s][1]-a,u=c*c+l*l||1e-12;let h=((t-o)*c+(e-a)*l)/u;h=h<0?0:h>1?1:h;const d=o+c*h-t,f=a+l*h-e,g=Math.sqrt(d*d+f*f);g<n&&(n=g)}return n}const xh=i=>[[i[0],i[1]],[i[2],i[1]],[i[2],i[3]],[i[0],i[3]]];function _c(i){if(i.poly)return i.poly;if(i.rect)return xh(i.rect);const t=i.circle?{c:i.circle.c,rx:i.circle.r,ry:i.circle.r,rot:0}:i.ellipse;if(!t)throw new Error("zone without a shape");const e=48,n=Math.cos((t.rot||0)*Math.PI/180),s=Math.sin((t.rot||0)*Math.PI/180),r=[];for(let o=0;o<e;o++){const a=o/e*Math.PI*2,c=Math.cos(a)*t.rx,l=Math.sin(a)*t.ry;r.push([t.c[0]+c*n-l*s,t.c[1]+c*s+l*n])}return r}const ua=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function hp(i){const t=i.steps||[],e=i.hills||[],n=(i.plateaus||[]).map(r=>({pts:_c(r),h:r.h,ramp:r.ramp??2,linear:!!r.linear})),s=i.tilt||[0,0];return(r,o)=>{let a=s[0]*r+s[1]*o;for(const c of t){const l=c.axis==="y"?o:r;if(c.band){const h=c.axis==="y"?r:o;if(h<c.band[0]||h>c.band[1])continue}const u=(l-c.from)/(c.to-c.from);a+=c.h*(c.smooth?ua(u):u<=0?0:u>=1?1:u)}for(const c of e){const l=r-c.c[0],u=o-c.c[1],h=Math.sqrt(l*l+u*u),d=c.flat||0;h<c.r&&(a+=c.h*ua(1-(h-d)/(c.r-d)))}for(const c of n)if(vc(c.pts,r,o))a+=c.h;else{const l=fp(c.pts,r,o);l<c.ramp&&(a+=c.h*(c.linear?1-l/c.ramp:ua(1-l/c.ramp)))}return a}}function vh(i){const[t,e]=i.size,n=i.ground||xh([0,0,t,e]),s=i.border===void 0?"wall":i.border,r=[];s&&r.push({kind:s,pts:n,closed:!0,border:!0});for(const w of i.walls||[])r.push({kind:w.kind||"wall",pts:w.pts,closed:!!w.closed,h:w.h});const o=[],a=[];for(const w of i.arcs||[]){let b=w.from;const S=w.to;if(!(S>b))throw new Error(i.id+": arc needs to > from");for(a.push({kind:w.kind||"wall",c:w.c,r:w.r,from:b,to:S});b<S-1e-9;){const C=Math.min(S,b+180),N=C*Math.PI/180,B=b*Math.PI/180;o.push({kind:w.kind||"wall",x:w.c[0],z:-w.c[1],r:w.r,sx:Math.cos(N),sz:-Math.sin(N),ex:Math.cos(B),ez:-Math.sin(B)}),b=C}}const c=[];for(const w of r){const b=w.pts.length,S=w.closed?b:b-1;for(let C=0;C<S;C++){const N=w.pts[C],B=w.pts[(C+1)%b];c.push({ax:N[0],az:-N[1],bx:B[0],bz:-B[1],kind:w.kind})}}const l=(i.posts||[]).map(w=>({x:w.at[0],z:-w.at[1],r:w.r,kind:w.kind||"post"})),u=-Hr,h=-(e+Hr),d=Math.round((t+2*Hr)/Si)+1,f=Math.round((e+2*Hr)/Si)+1,g=hp(i),x=new Float64Array(d*f),m=new Uint8Array(d*f),p=(i.zones||[]).map(w=>{const b=lp[w.surface];if(b===void 0||b===0)throw new Error(i.id+": unknown surface "+w.surface);return{code:b,pts:_c(w)}});for(let w=0;w<f;w++){const S=-(h+w*Si);for(let C=0;C<d;C++){const N=u+C*Si,B=w*d+C;x[B]=g(N,S);let K=vc(n,N,S)?1:0;if(K)for(const ot of p)vc(ot.pts,N,S)&&(K=ot.code);m[B]=K}}const _=cp(x,d,f,Si,u,h),v=(w,b)=>{let S=Math.round((w-u)/Si),C=Math.round((b-h)/Si);return S=S<0?0:S>=d?d-1:S,C=C<0?0:C>=f?f-1:C,m[C*d+S]},M=(w,b)=>up[v(w,b)],E=(w,b)=>{const S=v(w,b);return S===0?"oob":S===5?"water":null},A=sr(i.tee),T=sr(i.cup);return{hole:i,id:i.id,name:i.name,par:i.par,round:i.round,spin:i.round===2,tip:i.tip||null,placeR:i.circle,eight:A,tee:A,cup:T,segments:c,posts:l,arcs:o,surfaceAt:M,heightAt:_,hazardAt:E,grid:{cell:Si,cols:d,rows:f,x0:u,z0:h,height:x,surface:m},bounds:{minx:0,maxx:t,minz:-e,maxz:0},ground:n.map(sr),walls:r.map(w=>({kind:w.kind,closed:w.closed,border:!!w.border,h:w.h,pts:w.pts.map(sr)})),arcsRender:a.map(w=>({kind:w.kind,x:w.c[0],z:-w.c[1],r:w.r,from:w.from,to:w.to})),props:(i.props||[]).map(w=>({...w,x:w.at[0],z:-w.at[1]})),zones:(i.zones||[]).map(w=>({surface:w.surface,pts:_c(w).map(sr)})),camera:i.camera||null}}function dp(i){return qd({eight:i.eight,hole:i.cup,placeR:i.placeR,segments:i.segments,posts:i.posts,arcs:i.arcs,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt})}const pp=4,mp=5;function gp(i){return{par:i,strokes:0,penalties:0,done:!1,holed:!1,picked:!1}}function xp(i,t){if(i.done)return{penalty:0,done:!0,picked:i.picked};i.strokes+=1;let e=0;return t.holed?(i.done=!0,i.holed=!0,{penalty:e,done:!0,picked:!1}):(t.hazard&&(e=1,i.penalties+=1,i.strokes+=1),i.strokes>=i.par+pp&&(i.done=!0,i.picked=!0),{penalty:e,done:i.done,picked:i.picked})}function vp(i){return i.picked?i.par+mp:i.strokes}function _p(i,t,e=!1){return e?0:i===1||i<=t-1?3:i<=t?2:1}function Mc(i,t,e=!1){if(e)return{key:"picked",label:"Picked up"};if(i===1)return{key:"ace",label:"Hole-in-one!"};const n=i-t;return n<=-3?{key:"albatross",label:"Albatross!"}:n===-2?{key:"eagle",label:"Eagle!"}:n===-1?{key:"birdie",label:"Birdie!"}:n===0?{key:"par",label:"Par"}:n===1?{key:"bogey",label:"Bogey"}:n===2?{key:"double",label:"Double bogey"}:{key:"over",label:"+"+n}}function yc(i,t){const e=i-t;return e===0?"E":e>0?"+"+e:String(e)}const Mp=.9,yp=1.2,Sp=14,eu=1.8,bp=3;function wp({events:i}){const t=(f,g)=>i&&i.emit(f,g),e={acc:0},n={state:"idle",level:null,index:-1,world:null,score:null,intent:{x:0,z:0,offset:0,spin:0,power:.5,dx:1,dz:0},lastPower:.5,speed:1,shotContact:!1,shotHazard:null,shotHoled:!1,dropAt:null,timer:0,_guideKey:"",_guide:null},s=[r(),r()];function r(){return{x:0,y:0,z:0,visible:!1,alpha:1,mode:"off",vx:0,vz:0}}function o(){const f=n.intent,g=n.world.balls[1];let x=g.x-f.x,m=g.z-f.z;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const _=Math.cos(f.offset),v=Math.sin(f.offset);n.intent={...f,dx:x*_-m*v,dz:x*v+m*_},n._guideKey=""}function a(){const f=n.world,g=f.balls[1];let x=f.hole.x-g.x,m=f.hole.z-g.z;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const _=Math.min(.6*f.placeR,2.5),v=c(g.x-x*_,g.z-m*_)||c(g.x-x*1.6,g.z-m*1.6)||{x:g.x-x*1.2,z:g.z-m*1.2};n.intent={...n.intent,x:v.x,z:v.z,offset:0,spin:0,power:n.lastPower},o()}function c(f,g){const x=n.world;if(la(x,f,g))return{x:f,z:g};const m=x.balls[1];let p=f-m.x,_=g-m.z,v=Math.sqrt(p*p+_*_);const M=2*Wt.R+Wt.PLACE_GAP+.01,E=x.placeR-.01;if(v>E&&(p*=E/v,_*=E/v,v=E),v<M){const b=v>1e-6?M/v:0;p=v>1e-6?p*b:-M,_=v>1e-6?_*b:0,v=M}if(la(x,m.x+p,m.z+_))return{x:m.x+p,z:m.z+_};const A=Math.atan2(_,p);let T=null,w=1/0;for(let b=M;b<=E+1e-9;b+=.25)for(let S=0;S<72;S++){const C=A+S*Math.PI/36,N=m.x+Math.cos(C)*b,B=m.z+Math.sin(C)*b;if(!la(x,N,B))continue;const K=(N-f)*(N-f)+(B-g)*(B-g);K<w&&(w=K,T={x:N,z:B})}return T}n.load=(f,g)=>{n.level=f,n.index=g,n.world=dp(f),n.score=gp(f.par),n.lastPower=.5,n.speed=1,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,n.timer=0,e.acc=0,n.intent={x:0,z:0,offset:0,spin:0,power:.5,dx:1,dz:0},a(),n.state="ready",t("hole:start",{level:f,index:g}),t("shot:ready",{strokes:0,par:f.par,first:!0})},n.retry=()=>n.load(n.level,n.index),n.setPlacement=(f,g)=>{if(n.state!=="ready")return!1;const x=c(f,g);return x?(n.intent={...n.intent,x:x.x,z:x.z},o(),!0):!1},n.setAimToward=(f,g)=>{if(n.state!=="ready")return;const x=n.intent,m=n.world.balls[1],p=m.x-x.x,_=m.z-x.z,v=f-x.x,M=g-x.z;v*v+M*M<1e-6||(n.intent={...x,offset:Math.atan2(p*M-_*v,p*v+_*M)},o())},n.rotateAim=f=>{if(n.state!=="ready")return;let g=n.intent.offset+f;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;n.intent={...n.intent,offset:g},o()},n.setSpin=f=>{const g=n.level&&n.level.spin?f<-1?-1:f>1?1:f:0;g!==n.intent.spin&&(n.intent={...n.intent,spin:g},n._guideKey="")},n.setPower=f=>{const g=f<0?0:f>1?1:f;g!==n.intent.power&&(n.intent={...n.intent,power:g},n._guideKey="")},n.guide=()=>{if(!n.world||n.state!=="ready")return null;const f=n.intent,g=f.power<Wt.POWER_MIN?Wt.POWER_MIN:f.power,x=f.x+","+f.z+","+f.dx+","+f.dz+","+f.spin+","+g;if(x===n._guideKey)return n._guide;const m=rp(n.world,f,f.spin,g);let p=null;return m.hit&&(p=op(n.world,m.eightStart.x,m.eightStart.z,m.eightDir.x,m.eightDir.z,m.spin,Sp,bp)),n._guide={cue:m,eight:p,warn:!m.hit||!!(p&&p.hazard)},n._guideKey=x,n._guide},n.fire=()=>{if(n.state!=="ready")return!1;const f=n.intent,g=f.power<Wt.POWER_MIN?Wt.POWER_MIN:f.power;return n.lastPower=g,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,e.acc=0,dh(n.world,f,f.spin,g),n.state="rolling",t("shot:fire",{power:g,spin:f.spin,strokes:n.score.strokes+1}),!0},n.setSpeed=f=>{n.speed=f>1?f:1};function l(){const f=n.world.events;for(let g=0;g<f.length;g++){const x=f[g];switch(x.type){case"contact":n.shotContact=!0,t("ball:contact",{x:x.gx,z:x.gz,nx:x.nx,nz:x.nz,speed:Math.sqrt(x.v8x*x.v8x+x.v8z*x.v8z),cutCos:x.cutCos,spin:x.spin});break;case"wall":t("ball:wall",{id:x.id,x:x.x,z:x.z,nx:x.nx,nz:x.nz,speed:x.speed,kind:x.kind});break;case"hop":t("ball:hop",{x:x.x,z:x.z,speed:x.speed});break;case"holed":n.shotHoled=!0,t("ball:holed",{speed:x.speed});break;case"water":case"oob":n.shotHazard=x.type,n.dropAt={x:x.dropX,z:x.dropZ},t("ball:hazard",{kind:x.type,x:x.x,z:x.z});break;case"whiff":t("ball:whiff",{reason:x.reason,x:x.x,z:x.z});break;case"rest":t("ball:rest",{id:x.id,x:x.x,z:x.z});break;case"ballHit":t("ball:ballhit",{speed:x.speed});break;case"shotEnd":u();break}}f.length=0}function u(){const f=xp(n.score,{holed:n.shotHoled,hazard:n.shotHazard});t("shot:end",{strokes:n.score.strokes,par:n.score.par,penalty:f.penalty,whiff:!n.shotContact,outcome:n.shotHoled?"holed":n.shotHazard||"rest",picked:f.picked}),n.state="resolving",n.timer=n.shotHoled?yp:n.shotHazard?Mp:f.done?.6:0}function h(){const f=n.score;if(f.done){n.state="done";const g=vp(f);t("hole:done",{index:n.index,level:n.level,strokes:g,par:f.par,picked:f.picked,penalties:f.penalties,stars:_p(g,f.par,f.picked),term:Mc(g,f.par,f.picked)});return}if(n.dropAt)Zl(n.world,n.dropAt.x,n.dropAt.z),t("ball:drop",{x:n.dropAt.x,z:n.dropAt.z}),n.dropAt=null;else{const g=n.world.balls[1];Zl(n.world,g.x,g.z)}n.world.balls[0].mode="off",a(),n.state="ready",t("shot:ready",{strokes:f.strokes,par:f.par,first:!1})}let d=0;return n.update=f=>{n.state==="rolling"?(d=ap(n.world,f*eu*n.speed,e,Math.ceil(240*eu*n.speed)),l()):n.state==="resolving"&&(n.timer-=f,n.timer<=0&&h())},n.balls=()=>{const f=n.world;if(!f)return s;const g=n.state==="rolling";for(let x=0;x<2;x++){const m=f.balls[x],p=s[x],_=g?d:1;p.x=m.px+(m.x-m.px)*_,p.z=m.pz+(m.z-m.pz)*_,p.mode=m.mode,p.vx=m.vx,p.vz=m.vz,p.visible=m.mode!=="off"&&m.mode!=="sunk"&&m.mode!=="holed",p.alpha=m.mode==="ghost"?Math.max(0,m.fadeT/Wt.CUE_FADE_T):1,p.y=f.heightAt(p.x,p.z)+Wt.R}if(n.state==="ready"){const x=s[0];x.x=n.intent.x,x.z=n.intent.z,x.mode="placed",x.visible=!0,x.alpha=1,x.vx=0,x.vz=0,x.y=f.heightAt(x.x,x.z)+Wt.R}if(s[1].mode==="holed"||n.shotHoled){const x=s[1];x.visible=!0,x.x=f.hole.x,x.z=f.hole.z,x.y=f.heightAt(x.x,x.z)-Wt.R*.9}return s},n}const nu="eightballgolf.progress",ko=Object.freeze([{id:"classic",name:"Classic",need:0},{id:"tennis",name:"Tennis",need:9},{id:"beach",name:"Beach ball",need:18},{id:"planet",name:"Planet",need:27},{id:"donut",name:"Donut",need:36},{id:"snow",name:"Snowball",need:45},{id:"gold",name:"Gold",need:54}]),fa=(i,t,e)=>Number.isInteger(i)&&i>=t&&i<=e?i:null;function Ep(i,t){const e=i&&typeof i=="object"?i:{},n=Array.isArray(e.holes)?e.holes:[],s=[];for(let c=0;c<t;c++){const l=n[c]&&typeof n[c]=="object"?n[c]:{},u=fa(l.best,1,99);s.push({best:u,stars:u===null?0:fa(l.stars,0,3)??0})}const r=Array.isArray(e.seenTips)?[...new Set(e.seenTips.filter(c=>typeof c=="string"&&c.length<40))].slice(0,200):[],o=ko.some(c=>c.id===e.skin)?e.skin:"classic",a=fa(e.last,0,Math.max(0,t-1));return{v:1,holes:s,skin:o,seenTips:r,muted:e.muted===!0,last:a}}async function Ap(i,t={}){const e=t.rounds||Lr,n=e.flatMap(f=>f.holes.map(g=>g.par)),s=n.length,r=new Map;let o=0;for(const f of e)r.set(f.id,o),o+=f.holes.length;let a=null;try{const f=i&&i.load?await i.load(nu):null;typeof f=="string"&&f.length&&(a=JSON.parse(f))}catch{a=null}const c=Ep(a,s);Tp(c.skin)>Gr(c)&&(c.skin="classic");function l(){if(!(!i||!i.save))try{const f=i.save(nu,JSON.stringify(c));f&&typeof f.catch=="function"&&f.catch(()=>{})}catch{}}const u=f=>Number.isInteger(f)&&f>=0&&f<s,h=()=>{let f=-1;for(let g=0;g<s;g++)c.holes[g].best!==null&&(f=g);return f},d={data:c,get skin(){return c.skin},get muted(){return c.muted},holeCount:s,isUnlocked(f){return u(f)&&f<=h()+1},best(f){return u(f)?c.holes[f].best:null},stars(f){return u(f)?c.holes[f].stars:0},totalStars(){return Gr(c)},roundStars(f){const g=r.get(f),x=e.find(p=>p.id===f);if(g===void 0||!x)return 0;let m=0;for(let p=0;p<x.holes.length;p++)m+=c.holes[g+p].stars;return m},roundTotal(f){const g=r.get(f),x=e.find(v=>v.id===f);if(g===void 0||!x)return{total:0,par:0,complete:!1};let m=0,p=0,_=!0;for(let v=0;v<x.holes.length;v++){p+=n[g+v];const M=c.holes[g+v].best;M===null?_=!1:m+=M}return{total:m,par:p,complete:_}},record(f,g,x){if(!u(f))return{newBest:!1,newStars:!1,firstTime:!1};const m=c.holes[f],p=Math.max(1,Math.round(Number(g)||1)),_=Math.max(0,Math.min(3,Math.round(Number(x)||0))),v=m.best===null,M=m.best===null||p<m.best,E=_>m.stars;return M&&(m.best=p),E&&(m.stars=_),c.last=f,l(),{newBest:M,newStars:E,firstTime:v}},nextIndex(){for(let f=0;f<s;f++)if(c.holes[f].best===null)return d.isUnlocked(f)?f:0;for(let f=0;f<s;f++)if(c.holes[f].stars<3)return f;return c.last??0},skins(){const f=Gr(c);return ko.map(g=>({...g,unlocked:f>=g.need}))},setSkin(f){const g=ko.find(x=>x.id===f);return!g||g.need>Gr(c)||c.skin===f?!1:(c.skin=f,l(),!0)},seenTip(f){return c.seenTips.includes(String(f))},markTip(f){f==null||d.seenTip(f)||(c.seenTips.push(String(f)),l())},setMuted(f){c.muted!==!!f&&(c.muted=!!f,l())},isFresh(){return h()<0}};return d}function Gr(i){let t=0;for(const e of i.holes)t+=e.stars;return t}function Tp(i){const t=ko.find(e=>e.id===i);return t?t.need:1/0}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="170",Cp=0,iu=1,Rp=2,xl=1,Pp=2,oi=3,ki=0,mn=1,yn=2,Ui=0,Os=1,su=2,ru=3,ou=4,_h=5,zi=100,Lp=101,Ip=102,Dp=103,zp=104,Up=200,Sc=201,Np=202,Fp=203,bc=204,Er=205,Op=206,kp=207,Bp=208,Hp=209,Gp=210,Vp=211,Wp=212,Xp=213,qp=214,wc=0,Ec=1,Ac=2,Ws=3,Tc=4,Cc=5,Rc=6,Pc=7,jo=0,Yp=1,Kp=2,Ni=0,jp=1,$p=2,Zp=3,Jp=4,Qp=5,t0=6,Mh=7,yh=300,Xs=301,qs=302,Lc=303,Ic=304,$o=306,Bo=1e3,di=1001,Dc=1002,En=1003,e0=1004,Vr=1005,wn=1006,ha=1007,rs=1008,Zn=1009,Sh=1010,bh=1011,Ar=1012,vl=1013,cs=1014,jn=1015,Ir=1016,_l=1017,Ml=1018,Ys=1020,wh=35902,Eh=1021,Ah=1022,Dn=1023,Th=1024,Ch=1025,ks=1026,Ks=1027,yl=1028,Sl=1029,Rh=1030,bl=1031,wl=1033,To=33776,Co=33777,Ro=33778,Po=33779,zc=35840,Uc=35841,Nc=35842,Fc=35843,Oc=36196,kc=37492,Bc=37496,Hc=37808,Gc=37809,Vc=37810,Wc=37811,Xc=37812,qc=37813,Yc=37814,Kc=37815,jc=37816,$c=37817,Zc=37818,Jc=37819,Qc=37820,tl=37821,Lo=36492,el=36494,nl=36495,Ph=36283,il=36284,sl=36285,rl=36286,n0=3200,i0=3201,Zo=0,s0=1,ui="",Qe="srgb",Js="srgb-linear",Jo="linear",we="srgb",ps=7680,au=519,r0=512,o0=513,a0=514,Lh=515,c0=516,l0=517,u0=518,f0=519,cu=35044,Fi=35048,lu="300 es",pi=2e3,Ho=2001;class Qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uu=1234567;const _r=Math.PI/180,Tr=180/Math.PI;function tr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function El(i,t){return(i%t+t)%t}function h0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function d0(i,t,e){return i!==t?(e-i)/(t-i):0}function Mr(i,t,e){return(1-e)*i+e*t}function p0(i,t,e,n){return Mr(i,t,1-Math.exp(-e*n))}function m0(i,t=1){return t-Math.abs(El(i,t*2)-t)}function g0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function x0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function v0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _0(i,t){return i+Math.random()*(t-i)}function M0(i){return i*(.5-Math.random())}function y0(i){i!==void 0&&(uu=i);let t=uu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function S0(i){return i*_r}function b0(i){return i*Tr}function w0(i){return(i&i-1)===0&&i!==0}function E0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function A0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function T0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cr={DEG2RAD:_r,RAD2DEG:Tr,generateUUID:tr,clamp:Ze,euclideanModulo:El,mapLinear:h0,inverseLerp:d0,lerp:Mr,damp:p0,pingpong:m0,smoothstep:g0,smootherstep:x0,randInt:v0,randFloat:_0,randFloatSpread:M0,seededRandom:y0,degToRad:S0,radToDeg:b0,isPowerOfTwo:w0,ceilPowerOfTwo:E0,floorPowerOfTwo:A0,setQuaternionFromProperEuler:T0,normalize:un,denormalize:Ds};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,s,r,o,a,c,l){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],v=s[4],M=s[7],E=s[2],A=s[5],T=s[8];return r[0]=o*x+a*_+c*E,r[3]=o*m+a*v+c*A,r[6]=o*p+a*M+c*T,r[1]=l*x+u*_+h*E,r[4]=l*m+u*v+h*A,r[7]=l*p+u*M+h*T,r[2]=d*x+f*_+g*E,r[5]=d*m+f*v+g*A,r[8]=d*p+f*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new fe;function Ih(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function C0(){const i=Go("canvas");return i.style.display="block",i}const fu={};function dr(i){i in fu||(fu[i]=!0,console.warn(i))}function R0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function P0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function L0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Me={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?Jo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hu=[.64,.33,.3,.6,.15,.06],du=[.2126,.7152,.0722],pu=[.3127,.329],mu=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me.define({[Js]:{primaries:hu,whitePoint:pu,transfer:Jo,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:du,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:hu,whitePoint:pu,transfer:we,toXYZ:mu,fromXYZ:gu,luminanceCoefficients:du,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let ms;class I0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=Go("canvas")),ms.width=t.width,ms.height=t.height;const n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Go("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let D0=0;class Dh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pa(s[o].image)):r.push(pa(s[o]))}else r=pa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?I0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z0=0;class ln extends Qs{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=di,s=di,r=wn,o=rs,a=Dn,c=Zn,l=ln.DEFAULT_ANISOTROPY,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=tr(),this.name="",this.source=new Dh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bo:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bo:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=yh;ln.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,s=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,M=(f+1)/2,E=(p+1)/2,A=(u+d)/4,T=(h+x)/4,w=(g+m)/4;return v>M&&v>E?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=T/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=w/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=w/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U0 extends Qs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends U0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zh extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class N0 extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,p*_);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const M=a*_;if(c=c*m+d*M,l=l*m+f*M,u=u*m+g*M,h=h*m+x*M,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,n=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new J,xu=new fs;class Gi{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Xr.subVectors(this.max,rr),gs.subVectors(t.a,rr),xs.subVectors(t.b,rr),vs.subVectors(t.c,rr),bi.subVectors(xs,gs),wi.subVectors(vs,xs),Wi.subVectors(gs,vs);let e=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-Wi.z,Wi.y,bi.z,0,-bi.x,wi.z,0,-wi.x,Wi.z,0,-Wi.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-Wi.y,Wi.x,0];return!ga(e,gs,xs,vs,Xr)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,gs,xs,vs,Xr))?!1:(qr.crossVectors(bi,wi),e=[qr.x,qr.y,qr.z],ga(e,gs,xs,vs,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new J,new J,new J,new J,new J,new J,new J,new J],zn=new J,Wr=new Gi,gs=new J,xs=new J,vs=new J,bi=new J,wi=new J,Wi=new J,rr=new J,Xr=new J,qr=new J,Xi=new J;function ga(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const F0=new Gi,or=new J,xa=new J;class Vi{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):F0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(xa)),this.expandByPoint(or.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new J,va=new J,Yr=new J,Ei=new J,_a=new J,Kr=new J,Ma=new J;class O0{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){va.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(va);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Yr),a=Ei.dot(this.direction),c=-Ei.dot(Yr),l=Ei.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(va).addScaledVector(Yr,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){_a.subVectors(e,t),Kr.subVectors(n,t),Ma.crossVectors(_a,Kr);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const c=a*this.direction.dot(Kr.crossVectors(Ei,Kr));if(c<0)return null;const l=a*this.direction.dot(_a.cross(Ei));if(l<0||c+l>o)return null;const u=-a*Ei.dot(Ma);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,s,r,o,a,c,l,u,h,d,f,g,x,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k0,t,B0)}lookAt(t,e,n){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ai.crossVectors(n,xn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ai.crossVectors(n,xn)),Ai.normalize(),jr.crossVectors(xn,Ai),s[0]=Ai.x,s[4]=jr.x,s[8]=xn.x,s[1]=Ai.y,s[5]=jr.y,s[9]=xn.y,s[2]=Ai.z,s[6]=jr.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],v=n[7],M=n[11],E=n[15],A=s[0],T=s[4],w=s[8],b=s[12],S=s[1],C=s[5],N=s[9],B=s[13],K=s[2],ot=s[6],ct=s[10],vt=s[14],Z=s[3],X=s[7],z=s[11],$=s[15];return r[0]=o*A+a*S+c*K+l*Z,r[4]=o*T+a*C+c*ot+l*X,r[8]=o*w+a*N+c*ct+l*z,r[12]=o*b+a*B+c*vt+l*$,r[1]=u*A+h*S+d*K+f*Z,r[5]=u*T+h*C+d*ot+f*X,r[9]=u*w+h*N+d*ct+f*z,r[13]=u*b+h*B+d*vt+f*$,r[2]=g*A+x*S+m*K+p*Z,r[6]=g*T+x*C+m*ot+p*X,r[10]=g*w+x*N+m*ct+p*z,r[14]=g*b+x*B+m*vt+p*$,r[3]=_*A+v*S+M*K+E*Z,r[7]=_*T+v*C+M*ot+E*X,r[11]=_*w+v*N+M*ct+E*z,r[15]=_*b+v*B+M*vt+E*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=h*m*l-x*d*l+x*c*f-a*m*f-h*c*p+a*d*p,v=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,M=u*x*l-g*h*l+g*a*f-o*x*f-u*a*p+o*h*p,E=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,A=e*_+n*v+s*M+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=_*T,t[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*T,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*T,t[4]=v*T,t[5]=(u*m*r-g*d*r+g*s*f-e*m*f-u*s*p+e*d*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*T,t[8]=M*T,t[9]=(g*h*r-u*x*r-g*n*f+e*x*f+u*n*p-e*h*p)*T,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*T,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*T,t[12]=E*T,t[13]=(u*x*s-g*h*s+g*n*d-e*x*d-u*n*m+e*h*m)*T,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*T,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,_=c*l,v=c*u,M=c*h,E=n.x,A=n.y,T=n.z;return s[0]=(1-(x+p))*E,s[1]=(f+M)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+p))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+v)*T,s[9]=(m-_)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const l=1/r,u=1/o,h=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=pi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===pi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ho)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pi){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*l,f=(n+s)*u;let g,x;if(a===pi)g=(o+r)*h,x=-2*h;else if(a===Ho)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _s=new J,Un=new ye,k0=new J(0,0,0),B0=new J(1,1,1),Ai=new J,jr=new J,xn=new J,vu=new ye,_u=new fs;class An{constructor(t=0,e=0,n=0,s=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Uh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let H0=0;const Mu=new J,Ms=new fs,ei=new ye,$r=new J,ar=new J,G0=new J,V0=new fs,yu=new J(1,0,0),Su=new J(0,1,0),bu=new J(0,0,1),wu={type:"added"},W0={type:"removed"},ys={type:"childadded",child:null},ya={type:"childremoved",child:null};class tn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new J,e=new An,n=new fs,s=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new fe}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(yu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ar,$r,this.up):ei.lookAt($r,ar,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ei),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wu),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(W0),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wu),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,G0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,V0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}tn.DEFAULT_UP=new J(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new J,ni=new J,Sa=new J,ii=new J,Ss=new J,bs=new J,Eu=new J,ba=new J,wa=new J,Ea=new J,Aa=new Ie,Ta=new Ie,Ca=new Ie;class kn{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ni.subVectors(n,e),Sa.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(ni),c=Nn.dot(Sa),l=ni.dot(ni),u=ni.dot(Sa),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Aa.setScalar(0),Ta.setScalar(0),Ca.setScalar(0),Aa.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(Ta,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ni.subVectors(t,e),Nn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Nn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,n),bs.subVectors(r,n),ba.subVectors(t,n);const c=Ss.dot(ba),l=bs.dot(ba);if(c<=0&&l<=0)return e.copy(n);wa.subVectors(t,s);const u=Ss.dot(wa),h=bs.dot(wa);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ss,o);Ea.subVectors(t,r);const f=Ss.dot(Ea),g=bs.dot(Ea);if(g>=0&&f<=g)return e.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(bs,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Eu.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Eu,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Ss,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Ra(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=El(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ra(o,r,t+1/3),this.g=Ra(o,r,t),this.b=Ra(o,r,t-1/3)}return Me.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=Nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return Me.fromWorkingColorSpace(rn.copy(this),t),Math.round(Ze(rn.r*255,0,255))*65536+Math.round(Ze(rn.g*255,0,255))*256+Math.round(Ze(rn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Qe){Me.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,s=rn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Zr);const n=Mr(Ti.h,Zr.h,e),s=Mr(Ti.s,Zr.s,e),r=Mr(Ti.l,Zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ae;ae.NAMES=Nh;let X0=0;class hs extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=tr(),this.name="",this.blending=Os,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Er,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bc&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fh extends hs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new J,Jr=new Zt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cu,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cu&&(t.usage=this.usage),t}}class Oh extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kh extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let q0=0;const Rn=new ye,Pa=new tn,ws=new J,vn=new Gi,cr=new Gi,$e=new J;class Ve extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?kh:Oh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(vn.min,cr.min),vn.expandByPoint($e),$e.addVectors(vn.max,cr.max),vn.expandByPoint($e)):(vn.expandByPoint(cr.min),vn.expandByPoint(cr.max))}vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)$e.fromBufferAttribute(a,l),c&&(ws.fromBufferAttribute(t,l),$e.add(ws)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new J,c[w]=new J;const l=new J,u=new J,h=new J,d=new Zt,f=new Zt,g=new Zt,x=new J,m=new J;function p(w,b,S){l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[w].add(x),a[b].add(x),a[S].add(x),c[w].add(m),c[b].add(m),c[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let w=0,b=_.length;w<b;++w){const S=_[w],C=S.start,N=S.count;for(let B=C,K=C+N;B<K;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const v=new J,M=new J,E=new J,A=new J;function T(w){E.fromBufferAttribute(s,w),A.copy(E);const b=a[w];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),M.crossVectors(A,b);const C=M.dot(c[w])<0?-1:1;o.setXYZW(w,v.x,v.y,v.z,C)}for(let w=0,b=_.length;w<b;++w){const S=_[w],C=S.start,N=S.count;for(let B=C,K=C+N;B<K;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new J,r=new J,o=new J,a=new J,c=new J,l=new J,u=new J,h=new J;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new ke(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new ye,qi=new O0,Qr=new Vi,Tu=new J,to=new J,eo=new J,no=new J,La=new J,io=new J,Cu=new J,so=new J;class De extends tn{constructor(t=new Ve,e=new Fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(La.fromBufferAttribute(h,t),o?io.addScaledVector(La,u):io.addScaledVector(La.sub(e),u))}e.add(io)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(Qr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Qr,Tu)===null||qi.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(Au.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Au),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,E=v;M<E;M+=3){const A=a.getX(M),T=a.getX(M+1),w=a.getX(M+2);s=ro(this,p,t,n,l,u,h,A,T,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=a.getX(m),v=a.getX(m+1),M=a.getX(m+2);s=ro(this,o,t,n,l,u,h,_,v,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,E=v;M<E;M+=3){const A=M,T=M+1,w=M+2;s=ro(this,p,t,n,l,u,h,A,T,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=m,v=m+1,M=m+2;s=ro(this,o,t,n,l,u,h,_,v,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Y0(i,t,e,n,s,r,o,a){let c;if(t.side===mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ki,a),c===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(so);return l<e.near||l>e.far?null:{distance:l,point:so.clone(),object:i}}function ro(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,to),i.getVertexPosition(c,eo),i.getVertexPosition(l,no);const u=Y0(i,t,e,n,to,eo,no,Cu);if(u){const h=new J;kn.getBarycoord(Cu,to,eo,no,h),s&&(u.uv=kn.getInterpolatedAttribute(s,a,c,l,h,new Zt)),r&&(u.uv1=kn.getInterpolatedAttribute(r,a,c,l,h,new Zt)),o&&(u.normal=kn.getInterpolatedAttribute(o,a,c,l,h,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new J,materialIndex:0};kn.getNormal(to,eo,no,d.normal),u.face=d,u.barycoord=h}return u}class Bn extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function g(x,m,p,_,v,M,E,A,T,w,b){const S=M/T,C=E/w,N=M/2,B=E/2,K=A/2,ot=T+1,ct=w+1;let vt=0,Z=0;const X=new J;for(let z=0;z<ct;z++){const $=z*C-B;for(let j=0;j<ot;j++){const rt=j*S-N;X[x]=rt*_,X[m]=$*v,X[p]=K,l.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[p]=A>0?1:-1,u.push(X.x,X.y,X.z),h.push(j/T),h.push(1-z/w),vt+=1}}for(let z=0;z<w;z++)for(let $=0;$<T;$++){const j=d+$+ot*z,rt=d+$+ot*(z+1),O=d+($+1)+ot*(z+1),Q=d+($+1)+ot*z;c.push(j,rt,Q),c.push(rt,O,Q),Z+=6}a.addGroup(f,Z,b),f+=Z,d+=vt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){const t={};for(let e=0;e<i.length;e++){const n=js(i[e]);for(const s in n)t[s]=n[s]}return t}function K0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const j0={clone:js,merge:fn};var $0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends hs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=K0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hh extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new J,Ru=new Zt,Pu=new Zt;class Mn extends Hh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Pu),e.subVectors(Pu,Ru)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Es=-90,As=1;class J0 extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Es,As,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Es,As,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Es,As,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Es,As,t,e);a.layers=this.layers,this.add(a);const c=new Mn(Es,As,t,e);c.layers=this.layers,this.add(c);const l=new Mn(Es,As,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gh extends ln{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Q0 extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Ui});r.uniforms.tEquirect.value=e;const o=new De(s,r),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=wn),new J0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ia=new J,tm=new J,em=new fe;class Qi{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ia.subVectors(n,e).cross(tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||em.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Vi,oo=new J;class Al{constructor(t=new Qi,e=new Qi,n=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],v=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-f,M-p).normalize(),n[1].setComponents(c+r,d+l,m+f,M+p).normalize(),n[2].setComponents(c+o,d+u,m+g,M+_).normalize(),n[3].setComponents(c-o,d-u,m-g,M-_).normalize(),n[4].setComponents(c-a,d-h,m-x,M-v).normalize(),e===pi)n[5].setComponents(c+a,d+h,m+x,M+v).normalize();else if(e===Ho)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(oo.x=s.normal.x>0?t.max.x:t.min.x,oo.y=s.normal.y>0?t.max.y:t.min.y,oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function nm(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ds extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const _=p*d-o;for(let v=0;v<l;v++){const M=v*h-r;g.push(M,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const v=_+l*p,M=_+l*(p+1),E=_+1+l*(p+1),A=_+1+l*p;f.push(v,M,A),f.push(M,E,A)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Um=`#ifdef USE_ENVMAP
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
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,eg=`struct PhysicalMaterial {
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
}`,ng=`
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hg=`#if defined( USE_POINTS_UV )
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
#endif`,dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,_g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`#include <common>
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
}`,lx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,fx=`#define DISTANCE
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
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,vx=`#define LAMBERT
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
}`,_x=`#define LAMBERT
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
}`,Mx=`#define MATCAP
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
}`,yx=`#define MATCAP
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
}`,Sx=`#define NORMAL
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
}`,bx=`#define NORMAL
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
}`,wx=`#define PHONG
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
}`,Ex=`#define PHONG
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
}`,Ax=`#define STANDARD
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
}`,Tx=`#define STANDARD
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
}`,Cx=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Px=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Ix=`#include <common>
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
}`,Dx=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:om,alphatest_fragment:am,alphatest_pars_fragment:cm,aomap_fragment:lm,aomap_pars_fragment:um,batching_pars_vertex:fm,batching_vertex:hm,begin_vertex:dm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:xm,clipping_planes_fragment:vm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:ym,color_fragment:Sm,color_pars_fragment:bm,color_pars_vertex:wm,color_vertex:Em,common:Am,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Rm,displacementmap_vertex:Pm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Im,colorspace_fragment:Dm,colorspace_pars_fragment:zm,envmap_fragment:Um,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:jm,envmap_vertex:km,fog_vertex:Bm,fog_pars_vertex:Hm,fog_fragment:Gm,fog_pars_fragment:Vm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:Xm,lights_lambert_fragment:qm,lights_lambert_pars_fragment:Ym,lights_pars_begin:Km,lights_toon_fragment:$m,lights_toon_pars_fragment:Zm,lights_phong_fragment:Jm,lights_phong_pars_fragment:Qm,lights_physical_fragment:tg,lights_physical_pars_fragment:eg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:cg,map_fragment:lg,map_pars_fragment:ug,map_particle_fragment:fg,map_particle_pars_fragment:hg,metalnessmap_fragment:dg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:xg,morphtarget_pars_vertex:vg,morphtarget_vertex:_g,normal_fragment_begin:Mg,normal_fragment_maps:yg,normal_pars_fragment:Sg,normal_pars_vertex:bg,normal_vertex:wg,normalmap_pars_fragment:Eg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Tg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Rg,opaque_fragment:Pg,packing:Lg,premultiplied_alpha_fragment:Ig,project_vertex:Dg,dithering_fragment:zg,dithering_pars_fragment:Ug,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Fg,shadowmap_pars_fragment:Og,shadowmap_pars_vertex:kg,shadowmap_vertex:Bg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:Kg,tonemapping_pars_fragment:jg,transmission_fragment:$g,transmission_pars_fragment:Zg,uv_pars_fragment:Jg,uv_pars_vertex:Qg,uv_vertex:tx,worldpos_vertex:ex,background_vert:nx,background_frag:ix,backgroundCube_vert:sx,backgroundCube_frag:rx,cube_vert:ox,cube_frag:ax,depth_vert:cx,depth_frag:lx,distanceRGBA_vert:ux,distanceRGBA_frag:fx,equirect_vert:hx,equirect_frag:dx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:xx,meshlambert_vert:vx,meshlambert_frag:_x,meshmatcap_vert:Mx,meshmatcap_frag:yx,meshnormal_vert:Sx,meshnormal_frag:bx,meshphong_vert:wx,meshphong_frag:Ex,meshphysical_vert:Ax,meshphysical_frag:Tx,meshtoon_vert:Cx,meshtoon_frag:Rx,points_vert:Px,points_frag:Lx,shadow_vert:Ix,shadow_frag:Dx,sprite_vert:zx,sprite_frag:Ux},jt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Yn={basic:{uniforms:fn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:fn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new ae(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:fn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:fn([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:fn([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new ae(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:fn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:fn([jt.points,jt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:fn([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:fn([jt.common,jt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:fn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:fn([jt.sprite,jt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:fn([jt.common,jt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:fn([jt.lights,jt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Yn.physical={uniforms:fn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const ao={r:0,b:0,g:0},Ki=new An,Nx=new ye;function Fx(i,t,e,n,s,r,o){const a=new ae(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const M=g(_);M===null?p(a,c):M&&M.isColor&&(p(M,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===$o)?(u===void 0&&(u=new De(new Bn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:js(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ki.copy(v.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Ki)),u.material.toneMapped=Me.getTransfer(M.colorSpace)!==we,(h!==M||d!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new De(new ds(2,2),new gn({name:"BackgroundMaterial",uniforms:js(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Me.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(ao,Bh(i)),n.buffers.color.setClear(ao.r,ao.g,ao.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:m}}function Ox(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,C,N,B,K){let ot=!1;const ct=h(B,N,C);r!==ct&&(r=ct,l(r.object)),ot=f(S,B,N,K),ot&&g(S,B,N,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,M(S,C,N,B),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,C,N){const B=N.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let ot=K[C.id];ot===void 0&&(ot={},K[C.id]=ot);let ct=ot[B];return ct===void 0&&(ct=d(c()),ot[B]=ct),ct}function d(S){const C=[],N=[],B=[];for(let K=0;K<e;K++)C[K]=0,N[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,C,N,B){const K=r.attributes,ot=C.attributes;let ct=0;const vt=N.getAttributes();for(const Z in vt)if(vt[Z].location>=0){const z=K[Z];let $=ot[Z];if($===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),z===void 0||z.attribute!==$||$&&z.data!==$.data)return!0;ct++}return r.attributesNum!==ct||r.index!==B}function g(S,C,N,B){const K={},ot=C.attributes;let ct=0;const vt=N.getAttributes();for(const Z in vt)if(vt[Z].location>=0){let z=ot[Z];z===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(z=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(z=S.instanceColor));const $={};$.attribute=z,z&&z.data&&($.data=z.data),K[Z]=$,ct++}r.attributes=K,r.attributesNum=ct,r.index=B}function x(){const S=r.newAttributes;for(let C=0,N=S.length;C<N;C++)S[C]=0}function m(S){p(S,0)}function p(S,C){const N=r.newAttributes,B=r.enabledAttributes,K=r.attributeDivisors;N[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),K[S]!==C&&(i.vertexAttribDivisor(S,C),K[S]=C)}function _(){const S=r.newAttributes,C=r.enabledAttributes;for(let N=0,B=C.length;N<B;N++)C[N]!==S[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function v(S,C,N,B,K,ot,ct){ct===!0?i.vertexAttribIPointer(S,C,N,K,ot):i.vertexAttribPointer(S,C,N,B,K,ot)}function M(S,C,N,B){x();const K=B.attributes,ot=N.getAttributes(),ct=C.defaultAttributeValues;for(const vt in ot){const Z=ot[vt];if(Z.location>=0){let X=K[vt];if(X===void 0&&(vt==="instanceMatrix"&&S.instanceMatrix&&(X=S.instanceMatrix),vt==="instanceColor"&&S.instanceColor&&(X=S.instanceColor)),X!==void 0){const z=X.normalized,$=X.itemSize,j=t.get(X);if(j===void 0)continue;const rt=j.buffer,O=j.type,Q=j.bytesPerElement,mt=O===i.INT||O===i.UNSIGNED_INT||X.gpuType===vl;if(X.isInterleavedBufferAttribute){const H=X.data,tt=H.stride,ut=X.offset;if(H.isInstancedInterleavedBuffer){for(let Et=0;Et<Z.locationSize;Et++)p(Z.location+Et,H.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Et=0;Et<Z.locationSize;Et++)m(Z.location+Et);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Et=0;Et<Z.locationSize;Et++)v(Z.location+Et,$/Z.locationSize,O,z,tt*Q,(ut+$/Z.locationSize*Et)*Q,mt)}else{if(X.isInstancedBufferAttribute){for(let H=0;H<Z.locationSize;H++)p(Z.location+H,X.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let H=0;H<Z.locationSize;H++)m(Z.location+H);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let H=0;H<Z.locationSize;H++)v(Z.location+H,$/Z.locationSize,O,z,$*Q,$/Z.locationSize*H*Q,mt)}}else if(ct!==void 0){const z=ct[vt];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(Z.location,z);break;case 3:i.vertexAttrib3fv(Z.location,z);break;case 4:i.vertexAttrib4fv(Z.location,z);break;default:i.vertexAttrib1fv(Z.location,z)}}}}_()}function E(){w();for(const S in n){const C=n[S];for(const N in C){const B=C[N];for(const K in B)u(B[K].object),delete B[K];delete C[N]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const N in C){const B=C[N];for(const K in B)u(B[K].object),delete B[K];delete C[N]}delete n[S.id]}function T(S){for(const C in n){const N=n[C];if(N[S.id]===void 0)continue;const B=N[S.id];for(const K in B)u(B[K].object),delete B[K];delete N[S.id]}}function w(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function kx(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Bx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const w=T===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Zn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==jn&&!w)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:E,maxSamples:A}}function Hx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Qi,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const _=r?0:n,v=_*4;let M=p.clippingState||null;c.value=M,M=u(g,d,v,f);for(let E=0;E!==v;++E)M[E]=e[E];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,M=f;v!==x;++v,M+=4)o.copy(h[v]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Gx(i){let t=new WeakMap;function e(o,a){return a===Lc?o.mapping=Xs:a===Ic&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lc||a===Ic)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Q0(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wh extends Hh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Us=4,Lu=[.125,.215,.35,.446,.526,.582],ns=20,Da=new Wh,Iu=new ae;let za=null,Ua=0,Na=0,Fa=!1;const ts=(1+Math.sqrt(5))/2,Ts=1/ts,Du=[new J(-ts,Ts,0),new J(ts,Ts,0),new J(-Ts,0,ts),new J(Ts,0,ts),new J(0,ts,-Ts),new J(0,ts,Ts),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class zu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){za=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Ua,Na),this._renderer.xr.enabled=Fa,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ir,format:Dn,colorSpace:Js,depthBuffer:!1},s=Uu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Wx(r,t,e)}return s}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,s){const a=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Iu),u.toneMapping=Ni,u.autoClear=!1;const f=new Fh({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new De(new Bn,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Iu),x=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;co(s,_*v,p>2?v:0,v,v),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Du[(s-r-1)%Du.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new De(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ns-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const p=[];let _=0;for(let T=0;T<ns;++T){const w=T/x,b=Math.exp(-w*w/2);p.push(b),T===0?_+=b:T<m&&(_+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const M=this._sizeLods[s],E=3*M*(s>v-Us?s-v+Us:0),A=4*(this._cubeSize-M);co(e,E,A,3*M,2*M),c.setRenderTarget(e),c.render(h,Da)}}function Vx(i){const t=[],e=[],n=[];let s=i;const r=i-Us+1+Lu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Us?c=Lu[o-i+Us-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),v=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,w=A>2?0:-1,b=[T,w,0,T+2/3,w,0,T+2/3,w+1,0,T,w,0,T+2/3,w+1,0,T,w+1,0];_.set(b,x*g*A),v.set(d,m*g*A);const S=[A,A,A,A,A,A];M.set(S,p*g*A)}const E=new Ve;E.setAttribute("position",new ke(_,x)),E.setAttribute("uv",new ke(v,m)),E.setAttribute("faceIndex",new ke(M,p)),t.push(E),s>Us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uu(i,t,e){const n=new ls(i,t,e);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wx(i,t,e){const n=new Float32Array(ns),s=new J(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Nu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Fu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Tl(){return`

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
	`}function Xx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Lc||c===Ic,u=c===Xs||c===qs;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new zu(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new zu(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function qx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yx(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let v=0,M=_.length;v<M;v+=3){const E=_[v+0],A=_[v+1],T=_[v+2];d.push(E,A,A,T,T,E)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,M=_.length/3-1;v<M;v+=3){const E=v+0,A=v+1,T=v+2;d.push(E,A,A,T,T,E)}}else return;const m=new(Ih(d)?kh:Oh)(d,1);m.version=x;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Kx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $x(i,t,e){const n=new WeakMap,s=new Ie;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let b=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let M=a.attributes.position.count*v,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*E*4*h),T=new zh(A,M,E,h);T.type=jn,T.needsUpdate=!0;const w=v*4;for(let S=0;S<h;S++){const C=m[S],N=p[S],B=_[S],K=M*E*4*S;for(let ot=0;ot<C.count;ot++){const ct=ot*w;f===!0&&(s.fromBufferAttribute(C,ot),A[K+ct+0]=s.x,A[K+ct+1]=s.y,A[K+ct+2]=s.z,A[K+ct+3]=0),g===!0&&(s.fromBufferAttribute(N,ot),A[K+ct+4]=s.x,A[K+ct+5]=s.y,A[K+ct+6]=s.z,A[K+ct+7]=0),x===!0&&(s.fromBufferAttribute(B,ot),A[K+ct+8]=s.x,A[K+ct+9]=s.y,A[K+ct+10]=s.z,A[K+ct+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Zt(M,E)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Zx(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Xh extends ln{constructor(t,e,n,s,r,o,a,c,l,u=ks){if(u!==ks&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ks&&(n=cs),n===void 0&&u===Ks&&(n=Ys),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qh=new ln,Ou=new Xh(1,1),Yh=new zh,Kh=new N0,jh=new Gh,ku=[],Bu=[],Hu=new Float32Array(16),Gu=new Float32Array(9),Vu=new Float32Array(4);function er(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ku[s];if(r===void 0&&(r=new Float32Array(s),ku[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Qo(i,t){let e=Bu[t];e===void 0&&(e=new Int32Array(t),Bu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function nv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;Vu.set(n),i.uniformMatrix2fv(this.addr,!1,Vu),je(e,n)}}function iv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;Gu.set(n),i.uniformMatrix3fv(this.addr,!1,Gu),je(e,n)}}function sv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,n))return;Hu.set(n),i.uniformMatrix4fv(this.addr,!1,Hu),je(e,n)}}function rv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function av(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function cv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function lv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function dv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ou.compareFunction=Lh,r=Ou):r=qh,e.setTexture2D(t||r,s)}function pv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kh,s)}function mv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jh,s)}function gv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yh,s)}function xv(i){switch(i){case 5126:return Jx;case 35664:return Qx;case 35665:return tv;case 35666:return ev;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return cv;case 5125:return lv;case 36294:return uv;case 36295:return fv;case 36296:return hv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function vv(i,t){i.uniform1fv(this.addr,t)}function _v(i,t){const e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function Mv(i,t){const e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function yv(i,t){const e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function Sv(i,t){const e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bv(i,t){const e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wv(i,t){const e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ev(i,t){i.uniform1iv(this.addr,t)}function Av(i,t){i.uniform2iv(this.addr,t)}function Tv(i,t){i.uniform3iv(this.addr,t)}function Cv(i,t){i.uniform4iv(this.addr,t)}function Rv(i,t){i.uniform1uiv(this.addr,t)}function Pv(i,t){i.uniform2uiv(this.addr,t)}function Lv(i,t){i.uniform3uiv(this.addr,t)}function Iv(i,t){i.uniform4uiv(this.addr,t)}function Dv(i,t,e){const n=this.cache,s=t.length,r=Qo(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qh,r[o])}function zv(i,t,e){const n=this.cache,s=t.length,r=Qo(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kh,r[o])}function Uv(i,t,e){const n=this.cache,s=t.length,r=Qo(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jh,r[o])}function Nv(i,t,e){const n=this.cache,s=t.length,r=Qo(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yh,r[o])}function Fv(i){switch(i){case 5126:return vv;case 35664:return _v;case 35665:return Mv;case 35666:return yv;case 35674:return Sv;case 35675:return bv;case 35676:return wv;case 5124:case 35670:return Ev;case 35667:case 35671:return Av;case 35668:case 35672:return Tv;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Pv;case 36295:return Lv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Nv}}class Ov{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xv(e.type)}}class kv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fv(e.type)}}class Bv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Wu(i,t){i.seq.push(t),i.map[t.id]=t}function Hv(i,t,e){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),o=Oa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wu(e,l===void 0?new Ov(a,i,t):new kv(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Bv(a),Wu(e,h)),e=h}}}class Io{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Hv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gv=37297;let Vv=0;function Wv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qu=new fe;function Xv(i){Me._getMatrix(qu,Me.workingColorSpace,i);const t=`mat3( ${qu.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case Jo:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wv(i.getShaderSource(t),o)}else return s}function qv(i,t){const e=Xv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yv(i,t){let e;switch(t){case jp:e="Linear";break;case $p:e="Reinhard";break;case Zp:e="Cineon";break;case Jp:e="ACESFilmic";break;case t0:e="AgX";break;case Mh:e="Neutral";break;case Qp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lo=new J;function Kv(){Me.getLuminanceCoefficients(lo);const i=lo.x.toFixed(4),t=lo.y.toFixed(4),e=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function $v(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function Ku(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ol(i){return i.replace(Jv,t_)}const Qv=new Map;function t_(i,t){let e=he[t];if(e===void 0){const n=Qv.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ol(e)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(i){return i.replace(e_,n_)}function n_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function i_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function s_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function o_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jo:t="ENVMAP_BLENDING_MULTIPLY";break;case Yp:t="ENVMAP_BLENDING_MIX";break;case Kp:t="ENVMAP_BLENDING_ADD";break}return t}function a_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function c_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=i_(e),l=s_(e),u=r_(e),h=o_(e),d=a_(e),f=jv(e),g=$v(r),x=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?he.tonemapping_pars_fragment:"",e.toneMapping!==Ni?Yv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,qv("linearToOutputTexel",e.outputColorSpace),Kv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=ol(o),o=Ku(o,e),o=ju(o,e),a=ol(a),a=Ku(a,e),a=ju(a,e),o=$u(o),a=$u(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=_+m+o,M=_+p+a,E=Xu(s,s.VERTEX_SHADER,v),A=Xu(s,s.FRAGMENT_SHADER,M);s.attachShader(x,E),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(E).trim(),K=s.getShaderInfoLog(A).trim();let ot=!0,ct=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,A);else{const vt=Yu(s,E,"vertex"),Z=Yu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+vt+`
`+Z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||K==="")&&(ct=!1);ct&&(C.diagnostics={runnable:ot,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(E),s.deleteShader(A),w=new Io(s,x),b=Zv(s,x)}let w;this.getUniforms=function(){return w===void 0&&T(this),w};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Gv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}let l_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f_(t),e.set(t,n)),n}}class f_{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}}function h_(i,t,e,n,s,r,o){const a=new Uh,c=new u_,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,C,N,B){const K=N.fog,ot=B.geometry,ct=b.isMeshStandardMaterial?N.environment:null,vt=(b.isMeshStandardMaterial?e:t).get(b.envMap||ct),Z=vt&&vt.mapping===$o?vt.image.height:null,X=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const z=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,$=z!==void 0?z.length:0;let j=0;ot.morphAttributes.position!==void 0&&(j=1),ot.morphAttributes.normal!==void 0&&(j=2),ot.morphAttributes.color!==void 0&&(j=3);let rt,O,Q,mt;if(X){const Rt=Yn[X];rt=Rt.vertexShader,O=Rt.fragmentShader}else rt=b.vertexShader,O=b.fragmentShader,c.update(b),Q=c.getVertexShaderID(b),mt=c.getFragmentShaderID(b);const H=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),ut=B.isInstancedMesh===!0,Et=B.isBatchedMesh===!0,Ot=!!b.map,st=!!b.matcap,xt=!!vt,F=!!b.aoMap,et=!!b.lightMap,Bt=!!b.bumpMap,Jt=!!b.normalMap,kt=!!b.displacementMap,Kt=!!b.emissiveMap,Xt=!!b.metalnessMap,U=!!b.roughnessMap,y=b.anisotropy>0,q=b.clearcoat>0,at=b.dispersion>0,bt=b.iridescence>0,wt=b.sheen>0,Gt=b.transmission>0,Nt=y&&!!b.anisotropyMap,Dt=q&&!!b.clearcoatMap,W=q&&!!b.clearcoatNormalMap,G=q&&!!b.clearcoatRoughnessMap,nt=bt&&!!b.iridescenceMap,Mt=bt&&!!b.iridescenceThicknessMap,lt=wt&&!!b.sheenColorMap,P=wt&&!!b.sheenRoughnessMap,it=!!b.specularMap,yt=!!b.specularColorMap,Ut=!!b.specularIntensityMap,V=Gt&&!!b.transmissionMap,ft=Gt&&!!b.thicknessMap,dt=!!b.gradientMap,gt=!!b.alphaMap,Tt=b.alphaTest>0,Y=!!b.alphaHash,ht=!!b.extensions;let Pt=Ni;b.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Pt=i.toneMapping);const It={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:rt,fragmentShader:O,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Et,batchingColor:Et&&B._colorsTexture!==null,instancing:ut,instancingColor:ut&&B.instanceColor!==null,instancingMorph:ut&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Js,alphaToCoverage:!!b.alphaToCoverage,map:Ot,matcap:st,envMap:xt,envMapMode:xt&&vt.mapping,envMapCubeUVHeight:Z,aoMap:F,lightMap:et,bumpMap:Bt,normalMap:Jt,displacementMap:d&&kt,emissiveMap:Kt,normalMapObjectSpace:Jt&&b.normalMapType===s0,normalMapTangentSpace:Jt&&b.normalMapType===Zo,metalnessMap:Xt,roughnessMap:U,anisotropy:y,anisotropyMap:Nt,clearcoat:q,clearcoatMap:Dt,clearcoatNormalMap:W,clearcoatRoughnessMap:G,dispersion:at,iridescence:bt,iridescenceMap:nt,iridescenceThicknessMap:Mt,sheen:wt,sheenColorMap:lt,sheenRoughnessMap:P,specularMap:it,specularColorMap:yt,specularIntensityMap:Ut,transmission:Gt,transmissionMap:V,thicknessMap:ft,gradientMap:dt,opaque:b.transparent===!1&&b.blending===Os&&b.alphaToCoverage===!1,alphaMap:gt,alphaTest:Tt,alphaHash:Y,combine:b.combine,mapUv:Ot&&x(b.map.channel),aoMapUv:F&&x(b.aoMap.channel),lightMapUv:et&&x(b.lightMap.channel),bumpMapUv:Bt&&x(b.bumpMap.channel),normalMapUv:Jt&&x(b.normalMap.channel),displacementMapUv:kt&&x(b.displacementMap.channel),emissiveMapUv:Kt&&x(b.emissiveMap.channel),metalnessMapUv:Xt&&x(b.metalnessMap.channel),roughnessMapUv:U&&x(b.roughnessMap.channel),anisotropyMapUv:Nt&&x(b.anisotropyMap.channel),clearcoatMapUv:Dt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:W&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:P&&x(b.sheenRoughnessMap.channel),specularMapUv:it&&x(b.specularMap.channel),specularColorMapUv:yt&&x(b.specularColorMap.channel),specularIntensityMapUv:Ut&&x(b.specularIntensityMap.channel),transmissionMapUv:V&&x(b.transmissionMap.channel),thicknessMapUv:ft&&x(b.thicknessMap.channel),alphaMapUv:gt&&x(b.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(Jt||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ot.attributes.uv&&(Ot||gt),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:tt,skinning:B.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:j,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Ot&&b.map.isVideoTexture===!0&&Me.getTransfer(b.map.colorSpace)===we,decodeVideoTextureEmissive:Kt&&b.emissiveMap.isVideoTexture===!0&&Me.getTransfer(b.emissiveMap.colorSpace)===we,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ht&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&b.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)S.push(C),S.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(_(S,b),v(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const S=g[b.type];let C;if(S){const N=Yn[S];C=j0.clone(N.uniforms)}else C=b.uniforms;return C}function E(b,S){let C;for(let N=0,B=u.length;N<B;N++){const K=u[N];if(K.cacheKey===S){C=K,++C.usedTimes;break}}return C===void 0&&(C=new c_(i,S,b,r),u.push(C)),C}function A(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function T(b){c.remove(b)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:w}}function d_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),t++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||p_),n.length>1&&n.sort(d||Ju),s.length>1&&s.sort(d||Ju)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function m_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qu,i.set(n,[o])):s>=r.length?(o=new Qu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function g_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new ae};break;case"SpotLight":e={position:new J,direction:new J,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new J,halfWidth:new J,halfHeight:new J};break}return i[t.id]=e,e}}}function x_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let v_=0;function __(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function M_(i){const t=new g_,e=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new J);const s=new J,r=new ye,o=new ye;function a(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,v=0,M=0,E=0,A=0,T=0;l.sort(__);for(let b=0,S=l.length;b<S;b++){const C=l[b],N=C.color,B=C.intensity,K=C.distance,ot=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*B,h+=N.g*B,d+=N.b*B;else if(C.isLightProbe){for(let ct=0;ct<9;ct++)n.probe[ct].addScaledVector(C.sh.coefficients[ct],B);T++}else if(C.isDirectionalLight){const ct=t.get(C);if(ct.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const vt=C.shadow,Z=e.get(C);Z.shadowIntensity=vt.intensity,Z.shadowBias=vt.bias,Z.shadowNormalBias=vt.normalBias,Z.shadowRadius=vt.radius,Z.shadowMapSize=vt.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=ot,n.directionalShadowMatrix[f]=C.shadow.matrix,_++}n.directional[f]=ct,f++}else if(C.isSpotLight){const ct=t.get(C);ct.position.setFromMatrixPosition(C.matrixWorld),ct.color.copy(N).multiplyScalar(B),ct.distance=K,ct.coneCos=Math.cos(C.angle),ct.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ct.decay=C.decay,n.spot[x]=ct;const vt=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,vt.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=vt.matrix,C.castShadow){const Z=e.get(C);Z.shadowIntensity=vt.intensity,Z.shadowBias=vt.bias,Z.shadowNormalBias=vt.normalBias,Z.shadowRadius=vt.radius,Z.shadowMapSize=vt.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=ot,M++}x++}else if(C.isRectAreaLight){const ct=t.get(C);ct.color.copy(N).multiplyScalar(B),ct.halfWidth.set(C.width*.5,0,0),ct.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=ct,m++}else if(C.isPointLight){const ct=t.get(C);if(ct.color.copy(C.color).multiplyScalar(C.intensity),ct.distance=C.distance,ct.decay=C.decay,C.castShadow){const vt=C.shadow,Z=e.get(C);Z.shadowIntensity=vt.intensity,Z.shadowBias=vt.bias,Z.shadowNormalBias=vt.normalBias,Z.shadowRadius=vt.radius,Z.shadowMapSize=vt.mapSize,Z.shadowCameraNear=vt.camera.near,Z.shadowCameraFar=vt.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=ot,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=ct,g++}else if(C.isHemisphereLight){const ct=t.get(C);ct.skyColor.copy(C.color).multiplyScalar(B),ct.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=ct,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=jt.LTC_FLOAT_1,n.rectAreaLTC2=jt.LTC_FLOAT_2):(n.rectAreaLTC1=jt.LTC_HALF_1,n.rectAreaLTC2=jt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==f||w.pointLength!==g||w.spotLength!==x||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==_||w.numPointShadows!==v||w.numSpotShadows!==M||w.numSpotMaps!==E||w.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,w.directionalLength=f,w.pointLength=g,w.spotLength=x,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=_,w.numPointShadows=v,w.numSpotShadows=M,w.numSpotMaps=E,w.numLightProbes=T,n.version=v_++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const v=l[p];if(v.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(v.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function tf(i){const t=new M_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function y_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new tf(i),t.set(s,[a])):r>=o.length?(a=new tf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class S_ extends hs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b_ extends hs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`;function A_(i,t,e){let n=new Al;const s=new Zt,r=new Zt,o=new Ie,a=new S_({depthPacking:i0}),c=new b_,l={},u=e.maxTextureSize,h={[ki]:mn,[mn]:ki,[yn]:yn},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:w_,fragmentShader:E_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new De(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let p=this.type;this.render=function(A,T,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ui),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=p!==oi&&this.type===oi,K=p===oi&&this.type!==oi;for(let ot=0,ct=A.length;ot<ct;ot++){const vt=A[ot],Z=vt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",vt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const X=Z.getFrameExtents();if(s.multiply(X),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,Z.mapSize.y=r.y)),Z.map===null||B===!0||K===!0){const $=this.type!==oi?{minFilter:En,magFilter:En}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ls(s.x,s.y,$),Z.map.texture.name=vt.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const z=Z.getViewportCount();for(let $=0;$<z;$++){const j=Z.getViewport($);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),N.viewport(o),Z.updateMatrices(vt,$),n=Z.getFrustum(),M(T,w,Z.camera,vt,this.type)}Z.isPointLightShadow!==!0&&this.type===oi&&_(Z,w),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,C)};function _(A,T){const w=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ls(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,w,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,w,f,x,null)}function v(A,T,w,b){let S=null;const C=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=w.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=S.uuid,B=T.uuid;let K=l[N];K===void 0&&(K={},l[N]=K);let ot=K[B];ot===void 0&&(ot=S.clone(),K[B]=ot,T.addEventListener("dispose",E)),S=ot}if(S.visible=T.visible,S.wireframe=T.wireframe,b===oi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=i.properties.get(S);N.light=w}return S}function M(A,T,w,b,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===oi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const B=t.update(A),K=A.material;if(Array.isArray(K)){const ot=B.groups;for(let ct=0,vt=ot.length;ct<vt;ct++){const Z=ot[ct],X=K[Z.materialIndex];if(X&&X.visible){const z=v(A,X,b,S);A.onBeforeShadow(i,A,T,w,B,z,Z),i.renderBufferDirect(w,null,B,z,A,Z),A.onAfterShadow(i,A,T,w,B,z,Z)}}}else if(K.visible){const ot=v(A,K,b,S);A.onBeforeShadow(i,A,T,w,B,ot,null),i.renderBufferDirect(w,null,B,ot,A,null),A.onAfterShadow(i,A,T,w,B,ot,null)}}const N=A.children;for(let B=0,K=N.length;B<K;B++)M(N[B],T,w,b,S)}function E(A){A.target.removeEventListener("dispose",E);for(const w in l){const b=l[w],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const T_={[wc]:Ec,[Ac]:Rc,[Tc]:Pc,[Ws]:Cc,[Ec]:wc,[Rc]:Ac,[Pc]:Tc,[Cc]:Ws};function C_(i,t){function e(){let V=!1;const ft=new Ie;let dt=null;const gt=new Ie(0,0,0,0);return{setMask:function(Tt){dt!==Tt&&!V&&(i.colorMask(Tt,Tt,Tt,Tt),dt=Tt)},setLocked:function(Tt){V=Tt},setClear:function(Tt,Y,ht,Pt,It){It===!0&&(Tt*=Pt,Y*=Pt,ht*=Pt),ft.set(Tt,Y,ht,Pt),gt.equals(ft)===!1&&(i.clearColor(Tt,Y,ht,Pt),gt.copy(ft))},reset:function(){V=!1,dt=null,gt.set(-1,0,0,0)}}}function n(){let V=!1,ft=!1,dt=null,gt=null,Tt=null;return{setReversed:function(Y){if(ft!==Y){const ht=t.get("EXT_clip_control");ft?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT);const Pt=Tt;Tt=null,this.setClear(Pt)}ft=Y},getReversed:function(){return ft},setTest:function(Y){Y?H(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(Y){dt!==Y&&!V&&(i.depthMask(Y),dt=Y)},setFunc:function(Y){if(ft&&(Y=T_[Y]),gt!==Y){switch(Y){case wc:i.depthFunc(i.NEVER);break;case Ec:i.depthFunc(i.ALWAYS);break;case Ac:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Tc:i.depthFunc(i.EQUAL);break;case Cc:i.depthFunc(i.GEQUAL);break;case Rc:i.depthFunc(i.GREATER);break;case Pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Y}},setLocked:function(Y){V=Y},setClear:function(Y){Tt!==Y&&(ft&&(Y=1-Y),i.clearDepth(Y),Tt=Y)},reset:function(){V=!1,dt=null,gt=null,Tt=null,ft=!1}}}function s(){let V=!1,ft=null,dt=null,gt=null,Tt=null,Y=null,ht=null,Pt=null,It=null;return{setTest:function(Rt){V||(Rt?H(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(Rt){ft!==Rt&&!V&&(i.stencilMask(Rt),ft=Rt)},setFunc:function(Rt,qt,Yt){(dt!==Rt||gt!==qt||Tt!==Yt)&&(i.stencilFunc(Rt,qt,Yt),dt=Rt,gt=qt,Tt=Yt)},setOp:function(Rt,qt,Yt){(Y!==Rt||ht!==qt||Pt!==Yt)&&(i.stencilOp(Rt,qt,Yt),Y=Rt,ht=qt,Pt=Yt)},setLocked:function(Rt){V=Rt},setClear:function(Rt){It!==Rt&&(i.clearStencil(Rt),It=Rt)},reset:function(){V=!1,ft=null,dt=null,gt=null,Tt=null,Y=null,ht=null,Pt=null,It=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,v=null,M=null,E=null,A=null,T=new ae(0,0,0),w=0,b=!1,S=null,C=null,N=null,B=null,K=null;const ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ct=!1,vt=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(vt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ct=vt>=1):Z.indexOf("OpenGL ES")!==-1&&(vt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ct=vt>=2);let X=null,z={};const $=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),rt=new Ie().fromArray($),O=new Ie().fromArray(j);function Q(V,ft,dt,gt){const Tt=new Uint8Array(4),Y=i.createTexture();i.bindTexture(V,Y),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ht=0;ht<dt;ht++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(ft+ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Y}const mt={};mt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(Ws),Bt(!1),Jt(iu),H(i.CULL_FACE),F(Ui);function H(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function tt(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function ut(V,ft){return h[V]!==ft?(i.bindFramebuffer(V,ft),h[V]=ft,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Et(V,ft){let dt=f,gt=!1;if(V){dt=d.get(ft),dt===void 0&&(dt=[],d.set(ft,dt));const Tt=V.textures;if(dt.length!==Tt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,ht=Tt.length;Y<ht;Y++)dt[Y]=i.COLOR_ATTACHMENT0+Y;dt.length=Tt.length,gt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(dt)}function Ot(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const st={[zi]:i.FUNC_ADD,[Lp]:i.FUNC_SUBTRACT,[Ip]:i.FUNC_REVERSE_SUBTRACT};st[Dp]=i.MIN,st[zp]=i.MAX;const xt={[Up]:i.ZERO,[Sc]:i.ONE,[Np]:i.SRC_COLOR,[bc]:i.SRC_ALPHA,[Gp]:i.SRC_ALPHA_SATURATE,[Bp]:i.DST_COLOR,[Op]:i.DST_ALPHA,[Fp]:i.ONE_MINUS_SRC_COLOR,[Er]:i.ONE_MINUS_SRC_ALPHA,[Hp]:i.ONE_MINUS_DST_COLOR,[kp]:i.ONE_MINUS_DST_ALPHA,[Vp]:i.CONSTANT_COLOR,[Wp]:i.ONE_MINUS_CONSTANT_COLOR,[Xp]:i.CONSTANT_ALPHA,[qp]:i.ONE_MINUS_CONSTANT_ALPHA};function F(V,ft,dt,gt,Tt,Y,ht,Pt,It,Rt){if(V===Ui){x===!0&&(tt(i.BLEND),x=!1);return}if(x===!1&&(H(i.BLEND),x=!0),V!==_h){if(V!==m||Rt!==b){if((p!==zi||M!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,M=zi),Rt)switch(V){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,v=null,E=null,A=null,T.set(0,0,0),w=0,m=V,b=Rt}return}Tt=Tt||ft,Y=Y||dt,ht=ht||gt,(ft!==p||Tt!==M)&&(i.blendEquationSeparate(st[ft],st[Tt]),p=ft,M=Tt),(dt!==_||gt!==v||Y!==E||ht!==A)&&(i.blendFuncSeparate(xt[dt],xt[gt],xt[Y],xt[ht]),_=dt,v=gt,E=Y,A=ht),(Pt.equals(T)===!1||It!==w)&&(i.blendColor(Pt.r,Pt.g,Pt.b,It),T.copy(Pt),w=It),m=V,b=!1}function et(V,ft){V.side===yn?tt(i.CULL_FACE):H(i.CULL_FACE);let dt=V.side===mn;ft&&(dt=!dt),Bt(dt),V.blending===Os&&V.transparent===!1?F(Ui):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const gt=V.stencilWrite;a.setTest(gt),gt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Kt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(V){S!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),S=V)}function Jt(V){V!==Cp?(H(i.CULL_FACE),V!==C&&(V===iu?i.cullFace(i.BACK):V===Rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),C=V}function kt(V){V!==N&&(ct&&i.lineWidth(V),N=V)}function Kt(V,ft,dt){V?(H(i.POLYGON_OFFSET_FILL),(B!==ft||K!==dt)&&(i.polygonOffset(ft,dt),B=ft,K=dt)):tt(i.POLYGON_OFFSET_FILL)}function Xt(V){V?H(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function U(V){V===void 0&&(V=i.TEXTURE0+ot-1),X!==V&&(i.activeTexture(V),X=V)}function y(V,ft,dt){dt===void 0&&(X===null?dt=i.TEXTURE0+ot-1:dt=X);let gt=z[dt];gt===void 0&&(gt={type:void 0,texture:void 0},z[dt]=gt),(gt.type!==V||gt.texture!==ft)&&(X!==dt&&(i.activeTexture(dt),X=dt),i.bindTexture(V,ft||mt[V]),gt.type=V,gt.texture=ft)}function q(){const V=z[X];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function W(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(V){rt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),rt.copy(V))}function P(V){O.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),O.copy(V))}function it(V,ft){let dt=l.get(ft);dt===void 0&&(dt=new WeakMap,l.set(ft,dt));let gt=dt.get(V);gt===void 0&&(gt=i.getUniformBlockIndex(ft,V.name),dt.set(V,gt))}function yt(V,ft){const gt=l.get(ft).get(V);c.get(ft)!==gt&&(i.uniformBlockBinding(ft,gt,V.__bindingPointIndex),c.set(ft,gt))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},X=null,z={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,v=null,M=null,E=null,A=null,T=new ae(0,0,0),w=0,b=!1,S=null,C=null,N=null,B=null,K=null,rt.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:tt,bindFramebuffer:ut,drawBuffers:Et,useProgram:Ot,setBlending:F,setMaterial:et,setFlipSided:Bt,setCullFace:Jt,setLineWidth:kt,setPolygonOffset:Kt,setScissorTest:Xt,activeTexture:U,bindTexture:y,unbindTexture:q,compressedTexImage2D:at,compressedTexImage3D:bt,texImage2D:nt,texImage3D:Mt,updateUBOMapping:it,uniformBlockBinding:yt,texStorage2D:W,texStorage3D:G,texSubImage2D:wt,texSubImage3D:Gt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Dt,scissor:lt,viewport:P,reset:Ut}}function ef(i,t,e,n){const s=R_(n);switch(e){case Eh:return i*t;case Th:return i*t;case Ch:return i*t*2;case yl:return i*t/s.components*s.byteLength;case Sl:return i*t/s.components*s.byteLength;case Rh:return i*t*2/s.components*s.byteLength;case bl:return i*t*2/s.components*s.byteLength;case Ah:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case wl:return i*t*4/s.components*s.byteLength;case To:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uc:case Fc:return Math.max(i,16)*Math.max(t,8)/4;case zc:case Nc:return Math.max(i,8)*Math.max(t,8)/2;case Oc:case kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lo:case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ph:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function R_(i){switch(i){case Zn:case Sh:return{byteLength:1,components:1};case Ar:case bh:case Ir:return{byteLength:2,components:1};case _l:case Ml:return{byteLength:2,components:4};case cs:case vl:case jn:return{byteLength:4,components:1};case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function P_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Zt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,y){return f?new OffscreenCanvas(U,y):Go("canvas")}function x(U,y,q){let at=1;const bt=Xt(U);if((bt.width>q||bt.height>q)&&(at=q/Math.max(bt.width,bt.height)),at<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const wt=Math.floor(at*bt.width),Gt=Math.floor(at*bt.height);h===void 0&&(h=g(wt,Gt));const Nt=y?g(wt,Gt):h;return Nt.width=wt,Nt.height=Gt,Nt.getContext("2d").drawImage(U,0,0,wt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+wt+"x"+Gt+")."),Nt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(U,y,q,at,bt=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let wt=y;if(y===i.RED&&(q===i.FLOAT&&(wt=i.R32F),q===i.HALF_FLOAT&&(wt=i.R16F),q===i.UNSIGNED_BYTE&&(wt=i.R8)),y===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(wt=i.R8UI),q===i.UNSIGNED_SHORT&&(wt=i.R16UI),q===i.UNSIGNED_INT&&(wt=i.R32UI),q===i.BYTE&&(wt=i.R8I),q===i.SHORT&&(wt=i.R16I),q===i.INT&&(wt=i.R32I)),y===i.RG&&(q===i.FLOAT&&(wt=i.RG32F),q===i.HALF_FLOAT&&(wt=i.RG16F),q===i.UNSIGNED_BYTE&&(wt=i.RG8)),y===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(wt=i.RG8UI),q===i.UNSIGNED_SHORT&&(wt=i.RG16UI),q===i.UNSIGNED_INT&&(wt=i.RG32UI),q===i.BYTE&&(wt=i.RG8I),q===i.SHORT&&(wt=i.RG16I),q===i.INT&&(wt=i.RG32I)),y===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(wt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(wt=i.RGB16UI),q===i.UNSIGNED_INT&&(wt=i.RGB32UI),q===i.BYTE&&(wt=i.RGB8I),q===i.SHORT&&(wt=i.RGB16I),q===i.INT&&(wt=i.RGB32I)),y===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(wt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(wt=i.RGBA16UI),q===i.UNSIGNED_INT&&(wt=i.RGBA32UI),q===i.BYTE&&(wt=i.RGBA8I),q===i.SHORT&&(wt=i.RGBA16I),q===i.INT&&(wt=i.RGBA32I)),y===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(wt=i.RGB9_E5),y===i.RGBA){const Gt=bt?Jo:Me.getTransfer(at);q===i.FLOAT&&(wt=i.RGBA32F),q===i.HALF_FLOAT&&(wt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(wt=Gt===we?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(wt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(wt=i.RGB5_A1)}return(wt===i.R16F||wt===i.R32F||wt===i.RG16F||wt===i.RG32F||wt===i.RGBA16F||wt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),wt}function M(U,y){let q;return U?y===null||y===cs||y===Ys?q=i.DEPTH24_STENCIL8:y===jn?q=i.DEPTH32F_STENCIL8:y===Ar&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===cs||y===Ys?q=i.DEPTH_COMPONENT24:y===jn?q=i.DEPTH_COMPONENT32F:y===Ar&&(q=i.DEPTH_COMPONENT16),q}function E(U,y){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==En&&U.minFilter!==wn?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function A(U){const y=U.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&u.delete(y)}function T(U){const y=U.target;y.removeEventListener("dispose",T),S(y)}function w(U){const y=n.get(U);if(y.__webglInit===void 0)return;const q=U.source,at=d.get(q);if(at){const bt=at[y.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&b(U),Object.keys(at).length===0&&d.delete(q)}n.remove(U)}function b(U){const y=n.get(U);i.deleteTexture(y.__webglTexture);const q=U.source,at=d.get(q);delete at[y.__cacheKey],o.memory.textures--}function S(U){const y=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(y.__webglFramebuffer[at]))for(let bt=0;bt<y.__webglFramebuffer[at].length;bt++)i.deleteFramebuffer(y.__webglFramebuffer[at][bt]);else i.deleteFramebuffer(y.__webglFramebuffer[at]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[at])}else{if(Array.isArray(y.__webglFramebuffer))for(let at=0;at<y.__webglFramebuffer.length;at++)i.deleteFramebuffer(y.__webglFramebuffer[at]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let at=0;at<y.__webglColorRenderbuffer.length;at++)y.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[at]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=U.textures;for(let at=0,bt=q.length;at<bt;at++){const wt=n.get(q[at]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(q[at])}n.remove(U)}let C=0;function N(){C=0}function B(){const U=C;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),C+=1,U}function K(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function ot(U,y){const q=n.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.version>0&&q.__version!==U.version){const at=U.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(q,U,y);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+y)}function ct(U,y){const q=n.get(U);if(U.version>0&&q.__version!==U.version){O(q,U,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+y)}function vt(U,y){const q=n.get(U);if(U.version>0&&q.__version!==U.version){O(q,U,y);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+y)}function Z(U,y){const q=n.get(U);if(U.version>0&&q.__version!==U.version){Q(q,U,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+y)}const X={[Bo]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Dc]:i.MIRRORED_REPEAT},z={[En]:i.NEAREST,[e0]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},$={[r0]:i.NEVER,[f0]:i.ALWAYS,[o0]:i.LESS,[Lh]:i.LEQUAL,[a0]:i.EQUAL,[u0]:i.GEQUAL,[c0]:i.GREATER,[l0]:i.NOTEQUAL};function j(U,y){if(y.type===jn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===wn||y.magFilter===ha||y.magFilter===Vr||y.magFilter===rs||y.minFilter===wn||y.minFilter===ha||y.minFilter===Vr||y.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,X[y.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,X[y.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,X[y.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,z[y.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,z[y.minFilter]),y.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,$[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==Vr&&y.minFilter!==rs||y.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function rt(U,y){let q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",A));const at=y.source;let bt=d.get(at);bt===void 0&&(bt={},d.set(at,bt));const wt=K(y);if(wt!==U.__cacheKey){bt[wt]===void 0&&(bt[wt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),bt[wt].usedTimes++;const Gt=bt[U.__cacheKey];Gt!==void 0&&(bt[U.__cacheKey].usedTimes--,Gt.usedTimes===0&&b(y)),U.__cacheKey=wt,U.__webglTexture=bt[wt].texture}return q}function O(U,y,q){let at=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(at=i.TEXTURE_3D);const bt=rt(U,y),wt=y.source;e.bindTexture(at,U.__webglTexture,i.TEXTURE0+q);const Gt=n.get(wt);if(wt.version!==Gt.__version||bt===!0){e.activeTexture(i.TEXTURE0+q);const Nt=Me.getPrimaries(Me.workingColorSpace),Dt=y.colorSpace===ui?null:Me.getPrimaries(y.colorSpace),W=y.colorSpace===ui||Nt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let G=x(y.image,!1,s.maxTextureSize);G=Kt(y,G);const nt=r.convert(y.format,y.colorSpace),Mt=r.convert(y.type);let lt=v(y.internalFormat,nt,Mt,y.colorSpace,y.isVideoTexture);j(at,y);let P;const it=y.mipmaps,yt=y.isVideoTexture!==!0,Ut=Gt.__version===void 0||bt===!0,V=wt.dataReady,ft=E(y,G);if(y.isDepthTexture)lt=M(y.format===Ks,y.type),Ut&&(yt?e.texStorage2D(i.TEXTURE_2D,1,lt,G.width,G.height):e.texImage2D(i.TEXTURE_2D,0,lt,G.width,G.height,0,nt,Mt,null));else if(y.isDataTexture)if(it.length>0){yt&&Ut&&e.texStorage2D(i.TEXTURE_2D,ft,lt,it[0].width,it[0].height);for(let dt=0,gt=it.length;dt<gt;dt++)P=it[dt],yt?V&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,P.width,P.height,nt,Mt,P.data):e.texImage2D(i.TEXTURE_2D,dt,lt,P.width,P.height,0,nt,Mt,P.data);y.generateMipmaps=!1}else yt?(Ut&&e.texStorage2D(i.TEXTURE_2D,ft,lt,G.width,G.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,nt,Mt,G.data)):e.texImage2D(i.TEXTURE_2D,0,lt,G.width,G.height,0,nt,Mt,G.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){yt&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,lt,it[0].width,it[0].height,G.depth);for(let dt=0,gt=it.length;dt<gt;dt++)if(P=it[dt],y.format!==Dn)if(nt!==null)if(yt){if(V)if(y.layerUpdates.size>0){const Tt=ef(P.width,P.height,y.format,y.type);for(const Y of y.layerUpdates){const ht=P.data.subarray(Y*Tt/P.data.BYTES_PER_ELEMENT,(Y+1)*Tt/P.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Y,P.width,P.height,1,nt,ht)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,P.width,P.height,G.depth,nt,P.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,lt,P.width,P.height,G.depth,0,P.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,P.width,P.height,G.depth,nt,Mt,P.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,lt,P.width,P.height,G.depth,0,nt,Mt,P.data)}else{yt&&Ut&&e.texStorage2D(i.TEXTURE_2D,ft,lt,it[0].width,it[0].height);for(let dt=0,gt=it.length;dt<gt;dt++)P=it[dt],y.format!==Dn?nt!==null?yt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,P.width,P.height,nt,P.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,lt,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?V&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,P.width,P.height,nt,Mt,P.data):e.texImage2D(i.TEXTURE_2D,dt,lt,P.width,P.height,0,nt,Mt,P.data)}else if(y.isDataArrayTexture)if(yt){if(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,lt,G.width,G.height,G.depth),V)if(y.layerUpdates.size>0){const dt=ef(G.width,G.height,y.format,y.type);for(const gt of y.layerUpdates){const Tt=G.data.subarray(gt*dt/G.data.BYTES_PER_ELEMENT,(gt+1)*dt/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,G.width,G.height,1,nt,Mt,Tt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,nt,Mt,G.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,G.width,G.height,G.depth,0,nt,Mt,G.data);else if(y.isData3DTexture)yt?(Ut&&e.texStorage3D(i.TEXTURE_3D,ft,lt,G.width,G.height,G.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,nt,Mt,G.data)):e.texImage3D(i.TEXTURE_3D,0,lt,G.width,G.height,G.depth,0,nt,Mt,G.data);else if(y.isFramebufferTexture){if(Ut)if(yt)e.texStorage2D(i.TEXTURE_2D,ft,lt,G.width,G.height);else{let dt=G.width,gt=G.height;for(let Tt=0;Tt<ft;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,lt,dt,gt,0,nt,Mt,null),dt>>=1,gt>>=1}}else if(it.length>0){if(yt&&Ut){const dt=Xt(it[0]);e.texStorage2D(i.TEXTURE_2D,ft,lt,dt.width,dt.height)}for(let dt=0,gt=it.length;dt<gt;dt++)P=it[dt],yt?V&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,nt,Mt,P):e.texImage2D(i.TEXTURE_2D,dt,lt,nt,Mt,P);y.generateMipmaps=!1}else if(yt){if(Ut){const dt=Xt(G);e.texStorage2D(i.TEXTURE_2D,ft,lt,dt.width,dt.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt,Mt,G)}else e.texImage2D(i.TEXTURE_2D,0,lt,nt,Mt,G);m(y)&&p(at),Gt.__version=wt.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function Q(U,y,q){if(y.image.length!==6)return;const at=rt(U,y),bt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+q);const wt=n.get(bt);if(bt.version!==wt.__version||at===!0){e.activeTexture(i.TEXTURE0+q);const Gt=Me.getPrimaries(Me.workingColorSpace),Nt=y.colorSpace===ui?null:Me.getPrimaries(y.colorSpace),Dt=y.colorSpace===ui||Gt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const W=y.isCompressedTexture||y.image[0].isCompressedTexture,G=y.image[0]&&y.image[0].isDataTexture,nt=[];for(let gt=0;gt<6;gt++)!W&&!G?nt[gt]=x(y.image[gt],!0,s.maxCubemapSize):nt[gt]=G?y.image[gt].image:y.image[gt],nt[gt]=Kt(y,nt[gt]);const Mt=nt[0],lt=r.convert(y.format,y.colorSpace),P=r.convert(y.type),it=v(y.internalFormat,lt,P,y.colorSpace),yt=y.isVideoTexture!==!0,Ut=wt.__version===void 0||at===!0,V=bt.dataReady;let ft=E(y,Mt);j(i.TEXTURE_CUBE_MAP,y);let dt;if(W){yt&&Ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,it,Mt.width,Mt.height);for(let gt=0;gt<6;gt++){dt=nt[gt].mipmaps;for(let Tt=0;Tt<dt.length;Tt++){const Y=dt[Tt];y.format!==Dn?lt!==null?yt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt,0,0,Y.width,Y.height,lt,Y.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt,it,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt,0,0,Y.width,Y.height,lt,P,Y.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt,it,Y.width,Y.height,0,lt,P,Y.data)}}}else{if(dt=y.mipmaps,yt&&Ut){dt.length>0&&ft++;const gt=Xt(nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,it,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(G){yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,nt[gt].width,nt[gt].height,lt,P,nt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,it,nt[gt].width,nt[gt].height,0,lt,P,nt[gt].data);for(let Tt=0;Tt<dt.length;Tt++){const ht=dt[Tt].image[gt].image;yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt+1,0,0,ht.width,ht.height,lt,P,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt+1,it,ht.width,ht.height,0,lt,P,ht.data)}}else{yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,lt,P,nt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,it,lt,P,nt[gt]);for(let Tt=0;Tt<dt.length;Tt++){const Y=dt[Tt];yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt+1,0,0,lt,P,Y.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt+1,it,lt,P,Y.image[gt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),wt.__version=bt.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function mt(U,y,q,at,bt,wt){const Gt=r.convert(q.format,q.colorSpace),Nt=r.convert(q.type),Dt=v(q.internalFormat,Gt,Nt,q.colorSpace),W=n.get(y),G=n.get(q);if(G.__renderTarget=y,!W.__hasExternalTextures){const nt=Math.max(1,y.width>>wt),Mt=Math.max(1,y.height>>wt);bt===i.TEXTURE_3D||bt===i.TEXTURE_2D_ARRAY?e.texImage3D(bt,wt,Dt,nt,Mt,y.depth,0,Gt,Nt,null):e.texImage2D(bt,wt,Dt,nt,Mt,0,Gt,Nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Jt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,bt,G.__webglTexture,0,Bt(y)):(bt===i.TEXTURE_2D||bt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,bt,G.__webglTexture,wt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function H(U,y,q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),y.depthBuffer){const at=y.depthTexture,bt=at&&at.isDepthTexture?at.type:null,wt=M(y.stencilBuffer,bt),Gt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=Bt(y);Jt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,wt,y.width,y.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,wt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,wt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Gt,i.RENDERBUFFER,U)}else{const at=y.textures;for(let bt=0;bt<at.length;bt++){const wt=at[bt],Gt=r.convert(wt.format,wt.colorSpace),Nt=r.convert(wt.type),Dt=v(wt.internalFormat,Gt,Nt,wt.colorSpace),W=Bt(y);q&&Jt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,W,Dt,y.width,y.height):Jt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,W,Dt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(U,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const at=n.get(y.depthTexture);at.__renderTarget=y,(!at.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ot(y.depthTexture,0);const bt=at.__webglTexture,wt=Bt(y);if(y.depthTexture.format===ks)Jt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0);else if(y.depthTexture.format===Ks)Jt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function ut(U){const y=n.get(U),q=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const at=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),at){const bt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,at.removeEventListener("dispose",bt)};at.addEventListener("dispose",bt),y.__depthDisposeCallback=bt}y.__boundDepthTexture=at}if(U.depthTexture&&!y.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");tt(y.__webglFramebuffer,U)}else if(q){y.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[at]),y.__webglDepthbuffer[at]===void 0)y.__webglDepthbuffer[at]=i.createRenderbuffer(),H(y.__webglDepthbuffer[at],U,!1);else{const bt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=y.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,wt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),H(y.__webglDepthbuffer,U,!1);else{const at=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(U,y,q){const at=n.get(U);y!==void 0&&mt(at.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&ut(U)}function Ot(U){const y=U.texture,q=n.get(U),at=n.get(y);U.addEventListener("dispose",T);const bt=U.textures,wt=U.isWebGLCubeRenderTarget===!0,Gt=bt.length>1;if(Gt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=y.version,o.memory.textures++),wt){q.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[Nt]=[];for(let Dt=0;Dt<y.mipmaps.length;Dt++)q.__webglFramebuffer[Nt][Dt]=i.createFramebuffer()}else q.__webglFramebuffer[Nt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let Nt=0;Nt<y.mipmaps.length;Nt++)q.__webglFramebuffer[Nt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Gt)for(let Nt=0,Dt=bt.length;Nt<Dt;Nt++){const W=n.get(bt[Nt]);W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Jt(U)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Nt=0;Nt<bt.length;Nt++){const Dt=bt[Nt];q.__webglColorRenderbuffer[Nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Nt]);const W=r.convert(Dt.format,Dt.colorSpace),G=r.convert(Dt.type),nt=v(Dt.internalFormat,W,G,Dt.colorSpace,U.isXRRenderTarget===!0),Mt=Bt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,nt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,q.__webglColorRenderbuffer[Nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),H(q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(wt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),j(i.TEXTURE_CUBE_MAP,y);for(let Nt=0;Nt<6;Nt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Dt=0;Dt<y.mipmaps.length;Dt++)mt(q.__webglFramebuffer[Nt][Dt],U,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Dt);else mt(q.__webglFramebuffer[Nt],U,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Gt){for(let Nt=0,Dt=bt.length;Nt<Dt;Nt++){const W=bt[Nt],G=n.get(W);e.bindTexture(i.TEXTURE_2D,G.__webglTexture),j(i.TEXTURE_2D,W),mt(q.__webglFramebuffer,U,W,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,0),m(W)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Nt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Nt,at.__webglTexture),j(Nt,y),y.mipmaps&&y.mipmaps.length>0)for(let Dt=0;Dt<y.mipmaps.length;Dt++)mt(q.__webglFramebuffer[Dt],U,y,i.COLOR_ATTACHMENT0,Nt,Dt);else mt(q.__webglFramebuffer,U,y,i.COLOR_ATTACHMENT0,Nt,0);m(y)&&p(Nt),e.unbindTexture()}U.depthBuffer&&ut(U)}function st(U){const y=U.textures;for(let q=0,at=y.length;q<at;q++){const bt=y[q];if(m(bt)){const wt=_(U),Gt=n.get(bt).__webglTexture;e.bindTexture(wt,Gt),p(wt),e.unbindTexture()}}}const xt=[],F=[];function et(U){if(U.samples>0){if(Jt(U)===!1){const y=U.textures,q=U.width,at=U.height;let bt=i.COLOR_BUFFER_BIT;const wt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Gt=n.get(U),Nt=y.length>1;if(Nt)for(let Dt=0;Dt<y.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Dt=0;Dt<y.length;Dt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(bt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(bt|=i.STENCIL_BUFFER_BIT)),Nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Dt]);const W=n.get(y[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,q,at,0,0,q,at,bt,i.NEAREST),c===!0&&(xt.length=0,F.length=0,xt.push(i.COLOR_ATTACHMENT0+Dt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(xt.push(wt),F.push(wt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Nt)for(let Dt=0;Dt<y.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[Dt]);const W=n.get(y[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,W,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const y=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Bt(U){return Math.min(s.maxSamples,U.samples)}function Jt(U){const y=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function kt(U){const y=o.render.frame;u.get(U)!==y&&(u.set(U,y),U.update())}function Kt(U,y){const q=U.colorSpace,at=U.format,bt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||q!==Js&&q!==ui&&(Me.getTransfer(q)===we?(at!==Dn||bt!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),y}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=ot,this.setTexture2DArray=ct,this.setTexture3D=vt,this.setTextureCube=Z,this.rebindTextures=Et,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Jt}function L_(i,t){function e(n,s=ui){let r;const o=Me.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return i.BYTE;if(n===bh)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===cs)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===Eh)return i.ALPHA;if(n===Ah)return i.RGB;if(n===Dn)return i.RGBA;if(n===Th)return i.LUMINANCE;if(n===Ch)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===Rh)return i.RG;if(n===bl)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===To||n===Co||n===Ro||n===Po)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zc||n===Uc||n===Nc||n===Fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===kc||n===Bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===kc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===Kc||n===jc||n===$c||n===Zc||n===Jc||n===Qc||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lo)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ph||n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class I_ extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class os extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D_={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:z_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F_ extends Qs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const x=new N_,m=e.getContextAttributes();let p=null,_=null;const v=[],M=[],E=new Zt;let A=null;const T=new Mn;T.viewport=new Ie;const w=new Mn;w.viewport=new Ie;const b=[T,w],S=new I_;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Q=v[O];return Q===void 0&&(Q=new ka,v[O]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(O){let Q=v[O];return Q===void 0&&(Q=new ka,v[O]=Q),Q.getGripSpace()},this.getHand=function(O){let Q=v[O];return Q===void 0&&(Q=new ka,v[O]=Q),Q.getHandSpace()};function B(O){const Q=M.indexOf(O.inputSource);if(Q===-1)return;const mt=v[Q];mt!==void 0&&(mt.update(O.inputSource,O.frame,l||o),mt.dispatchEvent({type:O.type,data:O.inputSource}))}function K(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ot);for(let O=0;O<v.length;O++){const Q=M[O];Q!==null&&(M[O]=null,v[O].disconnect(Q))}C=null,N=null,x.reset(),t.setRenderTarget(p),f=null,d=null,h=null,s=null,_=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ot),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ls(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,mt=null,H=null;m.depth&&(H=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Ks:ks,mt=m.stencil?Ys:cs);const tt={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new ls(d.textureWidth,d.textureHeight,{format:Dn,type:Zn,depthTexture:new Xh(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ot(O){for(let Q=0;Q<O.removed.length;Q++){const mt=O.removed[Q],H=M.indexOf(mt);H>=0&&(M[H]=null,v[H].disconnect(mt))}for(let Q=0;Q<O.added.length;Q++){const mt=O.added[Q];let H=M.indexOf(mt);if(H===-1){for(let ut=0;ut<v.length;ut++)if(ut>=M.length){M.push(mt),H=ut;break}else if(M[ut]===null){M[ut]=mt,H=ut;break}if(H===-1)break}const tt=v[H];tt&&tt.connect(mt)}}const ct=new J,vt=new J;function Z(O,Q,mt){ct.setFromMatrixPosition(Q.matrixWorld),vt.setFromMatrixPosition(mt.matrixWorld);const H=ct.distanceTo(vt),tt=Q.projectionMatrix.elements,ut=mt.projectionMatrix.elements,Et=tt[14]/(tt[10]-1),Ot=tt[14]/(tt[10]+1),st=(tt[9]+1)/tt[5],xt=(tt[9]-1)/tt[5],F=(tt[8]-1)/tt[0],et=(ut[8]+1)/ut[0],Bt=Et*F,Jt=Et*et,kt=H/(-F+et),Kt=kt*-F;if(Q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Kt),O.translateZ(kt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),tt[10]===-1)O.projectionMatrix.copy(Q.projectionMatrix),O.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Xt=Et+kt,U=Ot+kt,y=Bt-Kt,q=Jt+(H-Kt),at=st*Ot/U*Xt,bt=xt*Ot/U*Xt;O.projectionMatrix.makePerspective(y,q,at,bt,Xt,U),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function X(O,Q){Q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let Q=O.near,mt=O.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(mt=x.depthFar)),S.near=w.near=T.near=Q,S.far=w.far=T.far=mt,(C!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,N=S.far),T.layers.mask=O.layers.mask|2,w.layers.mask=O.layers.mask|4,S.layers.mask=T.layers.mask|w.layers.mask;const H=O.parent,tt=S.cameras;X(S,H);for(let ut=0;ut<tt.length;ut++)X(tt[ut],H);tt.length===2?Z(S,T,w):S.projectionMatrix.copy(T.projectionMatrix),z(O,S,H)};function z(O,Q,mt){mt===null?O.matrix.copy(Q.matrixWorld):(O.matrix.copy(mt.matrixWorld),O.matrix.invert(),O.matrix.multiply(Q.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Q.projectionMatrix),O.projectionMatrixInverse.copy(Q.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Tr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let $=null;function j(O,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const mt=u.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let H=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,H=!0);for(let ut=0;ut<mt.length;ut++){const Et=mt[ut];let Ot=null;if(f!==null)Ot=f.getViewport(Et);else{const xt=h.getViewSubImage(d,Et);Ot=xt.viewport,ut===0&&(t.setRenderTargetTextures(_,xt.colorTexture,d.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(_))}let st=b[ut];st===void 0&&(st=new Mn,st.layers.enable(ut),st.viewport=new Ie,b[ut]=st),st.matrix.fromArray(Et.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Et.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),ut===0&&(S.matrix.copy(st.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),H===!0&&S.cameras.push(st)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const ut=h.getDepthInformation(mt[0]);ut&&ut.isValid&&ut.texture&&x.init(t,ut,s.renderState)}}for(let mt=0;mt<v.length;mt++){const H=M[mt],tt=v[mt];H!==null&&tt!==void 0&&tt.update(H,Q,l||o)}$&&$(O,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const rt=new Vh;rt.setAnimationLoop(j),this.setAnimationLoop=function(O){$=O},this.dispose=function(){}}}const ji=new An,O_=new ye;function k_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),v=_.envMap,M=_.envMapRotation;v&&(m.envMap.value=v,ji.copy(M),ji.x*=-1,ji.y*=-1,ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(ji)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){const M=v.program;n.uniformBlockBinding(_,M)}function l(_,v){let M=s[_.id];M===void 0&&(g(_),M=u(_),s[_.id]=M,_.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(_,E);const A=t.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function u(_){const v=h();_.__bindingPointIndex=v;const M=i.createBuffer(),E=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=s[_.id],M=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,T=M.length;A<T;A++){const w=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,S=w.length;b<S;b++){const C=w[b];if(f(C,A,b,E)===!0){const N=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let ot=0;ot<B.length;ot++){const ct=B[ot],vt=x(ct);typeof ct=="number"||typeof ct=="boolean"?(C.__data[0]=ct,i.bufferSubData(i.UNIFORM_BUFFER,N+K,C.__data)):ct.isMatrix3?(C.__data[0]=ct.elements[0],C.__data[1]=ct.elements[1],C.__data[2]=ct.elements[2],C.__data[3]=0,C.__data[4]=ct.elements[3],C.__data[5]=ct.elements[4],C.__data[6]=ct.elements[5],C.__data[7]=0,C.__data[8]=ct.elements[6],C.__data[9]=ct.elements[7],C.__data[10]=ct.elements[8],C.__data[11]=0):(ct.toArray(C.__data,K),K+=vt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,v,M,E){const A=_.value,T=v+"_"+M;if(E[T]===void 0)return typeof A=="number"||typeof A=="boolean"?E[T]=A:E[T]=A.clone(),!0;{const w=E[T];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return E[T]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function g(_){const v=_.uniforms;let M=0;const E=16;for(let T=0,w=v.length;T<w;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,C=b.length;S<C;S++){const N=b[S],B=Array.isArray(N.value)?N.value:[N.value];for(let K=0,ot=B.length;K<ot;K++){const ct=B[K],vt=x(ct),Z=M%E,X=Z%vt.boundary,z=Z+X;M+=X,z!==0&&E-z<vt.storage&&(M+=E-z),N.__data=new Float32Array(vt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=vt.storage}}}const A=M%E;return A>0&&(M+=E-A),_.__size=M,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class H_{constructor(t={}){const{canvas:e=C0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const _=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=Ni,this.toneMappingExposure=1;const M=this;let E=!1,A=0,T=0,w=null,b=-1,S=null;const C=new Ie,N=new Ie;let B=null;const K=new ae(0);let ot=0,ct=e.width,vt=e.height,Z=1,X=null,z=null;const $=new Ie(0,0,ct,vt),j=new Ie(0,0,ct,vt);let rt=!1;const O=new Al;let Q=!1,mt=!1;const H=new ye,tt=new ye,ut=new J,Et=new Ie,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function xt(){return w===null?Z:1}let F=n;function et(I,L){return e.getContext(I,L)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Y,!1),F===null){const L="webgl2";if(F=et(L,I),F===null)throw et(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Bt,Jt,kt,Kt,Xt,U,y,q,at,bt,wt,Gt,Nt,Dt,W,G,nt,Mt,lt,P,it,yt,Ut,V;function ft(){Bt=new qx(F),Bt.init(),yt=new L_(F,Bt),Jt=new Bx(F,Bt,t,yt),kt=new C_(F,Bt),Jt.reverseDepthBuffer&&d&&kt.buffers.depth.setReversed(!0),Kt=new jx(F),Xt=new d_,U=new P_(F,Bt,kt,Xt,Jt,yt,Kt),y=new Gx(M),q=new Xx(M),at=new nm(F),Ut=new Ox(F,at),bt=new Yx(F,at,Kt,Ut),wt=new Zx(F,bt,at,Kt),lt=new $x(F,Jt,U),G=new Hx(Xt),Gt=new h_(M,y,q,Bt,Jt,Ut,G),Nt=new k_(M,Xt),Dt=new m_,W=new y_(Bt),Mt=new Fx(M,y,q,kt,wt,f,c),nt=new A_(M,wt,Jt),V=new B_(F,Kt,Jt,kt),P=new kx(F,Bt,Kt),it=new Kx(F,Bt,Kt),Kt.programs=Gt.programs,M.capabilities=Jt,M.extensions=Bt,M.properties=Xt,M.renderLists=Dt,M.shadowMap=nt,M.state=kt,M.info=Kt}ft();const dt=new F_(M,F);this.xr=dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const I=Bt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Bt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(I){I!==void 0&&(Z=I,this.setSize(ct,vt,!1))},this.getSize=function(I){return I.set(ct,vt)},this.setSize=function(I,L,R=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=I,vt=L,e.width=Math.floor(I*Z),e.height=Math.floor(L*Z),R===!0&&(e.style.width=I+"px",e.style.height=L+"px"),this.setViewport(0,0,I,L)},this.getDrawingBufferSize=function(I){return I.set(ct*Z,vt*Z).floor()},this.setDrawingBufferSize=function(I,L,R){ct=I,vt=L,Z=R,e.width=Math.floor(I*R),e.height=Math.floor(L*R),this.setViewport(0,0,I,L)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy($)},this.setViewport=function(I,L,R,k){I.isVector4?$.set(I.x,I.y,I.z,I.w):$.set(I,L,R,k),kt.viewport(C.copy($).multiplyScalar(Z).round())},this.getScissor=function(I){return I.copy(j)},this.setScissor=function(I,L,R,k){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,L,R,k),kt.scissor(N.copy(j).multiplyScalar(Z).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(I){kt.setScissorTest(rt=I)},this.setOpaqueSort=function(I){X=I},this.setTransparentSort=function(I){z=I},this.getClearColor=function(I){return I.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(I=!0,L=!0,R=!0){let k=0;if(I){let D=!1;if(w!==null){const pt=w.texture.format;D=pt===wl||pt===bl||pt===Sl}if(D){const pt=w.texture.type,St=pt===Zn||pt===cs||pt===Ar||pt===Ys||pt===_l||pt===Ml,At=Mt.getClearColor(),Lt=Mt.getClearAlpha(),Ft=At.r,Ht=At.g,zt=At.b;St?(g[0]=Ft,g[1]=Ht,g[2]=zt,g[3]=Lt,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Ft,x[1]=Ht,x[2]=zt,x[3]=Lt,F.clearBufferiv(F.COLOR,0,x))}else k|=F.COLOR_BUFFER_BIT}L&&(k|=F.DEPTH_BUFFER_BIT),R&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Y,!1),Dt.dispose(),W.dispose(),Xt.dispose(),y.dispose(),q.dispose(),wt.dispose(),Ut.dispose(),V.dispose(),Gt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ne),dt.removeEventListener("sessionend",oe),le.stop()};function gt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=Kt.autoReset,L=nt.enabled,R=nt.autoUpdate,k=nt.needsUpdate,D=nt.type;ft(),Kt.autoReset=I,nt.enabled=L,nt.autoUpdate=R,nt.needsUpdate=k,nt.type=D}function Y(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ht(I){const L=I.target;L.removeEventListener("dispose",ht),Pt(L)}function Pt(I){It(I),Xt.remove(I)}function It(I){const L=Xt.get(I).programs;L!==void 0&&(L.forEach(function(R){Gt.releaseProgram(R)}),I.isShaderMaterial&&Gt.releaseShaderCache(I))}this.renderBufferDirect=function(I,L,R,k,D,pt){L===null&&(L=Ot);const St=D.isMesh&&D.matrixWorld.determinant()<0,At=nn(I,L,R,k,D);kt.setMaterial(k,St);let Lt=R.index,Ft=1;if(k.wireframe===!0){if(Lt=bt.getWireframeAttribute(R),Lt===void 0)return;Ft=2}const Ht=R.drawRange,zt=R.attributes.position;let te=Ht.start*Ft,_t=(Ht.start+Ht.count)*Ft;pt!==null&&(te=Math.max(te,pt.start*Ft),_t=Math.min(_t,(pt.start+pt.count)*Ft)),Lt!==null?(te=Math.max(te,0),_t=Math.min(_t,Lt.count)):zt!=null&&(te=Math.max(te,0),_t=Math.min(_t,zt.count));const ie=_t-te;if(ie<0||ie===1/0)return;Ut.setup(D,k,At,R,Lt);let re,se=P;if(Lt!==null&&(re=at.get(Lt),se=it,se.setIndex(re)),D.isMesh)k.wireframe===!0?(kt.setLineWidth(k.wireframeLinewidth*xt()),se.setMode(F.LINES)):se.setMode(F.TRIANGLES);else if(D.isLine){let $t=k.linewidth;$t===void 0&&($t=1),kt.setLineWidth($t*xt()),D.isLineSegments?se.setMode(F.LINES):D.isLineLoop?se.setMode(F.LINE_LOOP):se.setMode(F.LINE_STRIP)}else D.isPoints?se.setMode(F.POINTS):D.isSprite&&se.setMode(F.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)se.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))se.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const $t=D._multiDrawStarts,xe=D._multiDrawCounts,Vt=D._multiDrawCount,Se=Lt?at.get(Lt).bytesPerElement:1,Oe=Xt.get(k).currentProgram.getUniforms();for(let Le=0;Le<Vt;Le++)Oe.setValue(F,"_gl_DrawID",Le),se.render($t[Le]/Se,xe[Le])}else if(D.isInstancedMesh)se.renderInstances(te,ie,D.count);else if(R.isInstancedBufferGeometry){const $t=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,xe=Math.min(R.instanceCount,$t);se.renderInstances(te,ie,xe)}else se.render(te,ie)};function Rt(I,L,R){I.transparent===!0&&I.side===yn&&I.forceSinglePass===!1?(I.side=mn,I.needsUpdate=!0,Ae(I,L,R),I.side=ki,I.needsUpdate=!0,Ae(I,L,R),I.side=yn):Ae(I,L,R)}this.compile=function(I,L,R=null){R===null&&(R=I),p=W.get(R),p.init(L),v.push(p),R.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),I!==R&&I.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const k=new Set;return I.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const pt=D.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){const At=pt[St];Rt(At,R,D),k.add(At)}else Rt(pt,R,D),k.add(pt)}),v.pop(),p=null,k},this.compileAsync=function(I,L,R=null){const k=this.compile(I,L,R);return new Promise(D=>{function pt(){if(k.forEach(function(St){Xt.get(St).currentProgram.isReady()&&k.delete(St)}),k.size===0){D(I);return}setTimeout(pt,10)}Bt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let qt=null;function Yt(I){qt&&qt(I)}function ne(){le.stop()}function oe(){le.start()}const le=new Vh;le.setAnimationLoop(Yt),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(I){qt=I,dt.setAnimationLoop(I),I===null?le.stop():le.start()},dt.addEventListener("sessionstart",ne),dt.addEventListener("sessionend",oe),this.render=function(I,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(L),L=dt.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,L,w),p=W.get(I,v.length),p.init(L),v.push(p),tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),O.setFromProjectionMatrix(tt),mt=this.localClippingEnabled,Q=G.init(this.clippingPlanes,mt),m=Dt.get(I,_.length),m.init(),_.push(m),dt.enabled===!0&&dt.isPresenting===!0){const pt=M.xr.getDepthSensingMesh();pt!==null&&me(pt,L,-1/0,M.sortObjects)}me(I,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(X,z),st=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,st&&Mt.addToRenderList(m,I),this.info.render.frame++,Q===!0&&G.beginShadows();const R=p.state.shadowsArray;nt.render(R,I,L),Q===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,D=m.transmissive;if(p.setupLights(),L.isArrayCamera){const pt=L.cameras;if(D.length>0)for(let St=0,At=pt.length;St<At;St++){const Lt=pt[St];Qt(k,D,I,Lt)}st&&Mt.render(I);for(let St=0,At=pt.length;St<At;St++){const Lt=pt[St];de(m,I,Lt,Lt.viewport)}}else D.length>0&&Qt(k,D,I,L),st&&Mt.render(I),de(m,I,L);w!==null&&(U.updateMultisampleRenderTarget(w),U.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(M,I,L),Ut.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],Q===!0&&G.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function me(I,L,R,k){if(I.visible===!1)return;if(I.layers.test(L.layers)){if(I.isGroup)R=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(L);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||O.intersectsSprite(I)){k&&Et.setFromMatrixPosition(I.matrixWorld).applyMatrix4(tt);const St=wt.update(I),At=I.material;At.visible&&m.push(I,St,At,R,Et.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||O.intersectsObject(I))){const St=wt.update(I),At=I.material;if(k&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Et.copy(I.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Et.copy(St.boundingSphere.center)),Et.applyMatrix4(I.matrixWorld).applyMatrix4(tt)),Array.isArray(At)){const Lt=St.groups;for(let Ft=0,Ht=Lt.length;Ft<Ht;Ft++){const zt=Lt[Ft],te=At[zt.materialIndex];te&&te.visible&&m.push(I,St,te,R,Et.z,zt)}}else At.visible&&m.push(I,St,At,R,Et.z,null)}}const pt=I.children;for(let St=0,At=pt.length;St<At;St++)me(pt[St],L,R,k)}function de(I,L,R,k){const D=I.opaque,pt=I.transmissive,St=I.transparent;p.setupLightsView(R),Q===!0&&G.setGlobalState(M.clippingPlanes,R),k&&kt.viewport(C.copy(k)),D.length>0&&ge(D,L,R),pt.length>0&&ge(pt,L,R),St.length>0&&ge(St,L,R),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Qt(I,L,R,k){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ls(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Ir:Zn,minFilter:rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const pt=p.state.transmissionRenderTarget[k.id],St=k.viewport||C;pt.setSize(St.z,St.w);const At=M.getRenderTarget();M.setRenderTarget(pt),M.getClearColor(K),ot=M.getClearAlpha(),ot<1&&M.setClearColor(16777215,.5),M.clear(),st&&Mt.render(R);const Lt=M.toneMapping;M.toneMapping=Ni;const Ft=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Q===!0&&G.setGlobalState(M.clippingPlanes,k),ge(I,R,k),U.updateMultisampleRenderTarget(pt),U.updateRenderTargetMipmap(pt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let zt=0,te=L.length;zt<te;zt++){const _t=L[zt],ie=_t.object,re=_t.geometry,se=_t.material,$t=_t.group;if(se.side===yn&&ie.layers.test(k.layers)){const xe=se.side;se.side=mn,se.needsUpdate=!0,ce(ie,R,k,re,se,$t),se.side=xe,se.needsUpdate=!0,Ht=!0}}Ht===!0&&(U.updateMultisampleRenderTarget(pt),U.updateRenderTargetMipmap(pt))}M.setRenderTarget(At),M.setClearColor(K,ot),Ft!==void 0&&(k.viewport=Ft),M.toneMapping=Lt}function ge(I,L,R){const k=L.isScene===!0?L.overrideMaterial:null;for(let D=0,pt=I.length;D<pt;D++){const St=I[D],At=St.object,Lt=St.geometry,Ft=k===null?St.material:k,Ht=St.group;At.layers.test(R.layers)&&ce(At,L,R,Lt,Ft,Ht)}}function ce(I,L,R,k,D,pt){I.onBeforeRender(M,L,R,k,D,pt),I.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),D.onBeforeRender(M,L,R,k,I,pt),D.transparent===!0&&D.side===yn&&D.forceSinglePass===!1?(D.side=mn,D.needsUpdate=!0,M.renderBufferDirect(R,L,k,D,I,pt),D.side=ki,D.needsUpdate=!0,M.renderBufferDirect(R,L,k,D,I,pt),D.side=yn):M.renderBufferDirect(R,L,k,D,I,pt),I.onAfterRender(M,L,R,k,D,pt)}function Ae(I,L,R){L.isScene!==!0&&(L=Ot);const k=Xt.get(I),D=p.state.lights,pt=p.state.shadowsArray,St=D.state.version,At=Gt.getParameters(I,D.state,pt,L,R),Lt=Gt.getProgramCacheKey(At);let Ft=k.programs;k.environment=I.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(I.isMeshStandardMaterial?q:y).get(I.envMap||k.environment),k.envMapRotation=k.environment!==null&&I.envMap===null?L.environmentRotation:I.envMapRotation,Ft===void 0&&(I.addEventListener("dispose",ht),Ft=new Map,k.programs=Ft);let Ht=Ft.get(Lt);if(Ht!==void 0){if(k.currentProgram===Ht&&k.lightsStateVersion===St)return Fe(I,At),Ht}else At.uniforms=Gt.getUniforms(I),I.onBeforeCompile(At,M),Ht=Gt.acquireProgram(At,Lt),Ft.set(Lt,Ht),k.uniforms=At.uniforms;const zt=k.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(zt.clippingPlanes=G.uniform),Fe(I,At),k.needsLights=hn(I),k.lightsStateVersion=St,k.needsLights&&(zt.ambientLightColor.value=D.state.ambient,zt.lightProbe.value=D.state.probe,zt.directionalLights.value=D.state.directional,zt.directionalLightShadows.value=D.state.directionalShadow,zt.spotLights.value=D.state.spot,zt.spotLightShadows.value=D.state.spotShadow,zt.rectAreaLights.value=D.state.rectArea,zt.ltc_1.value=D.state.rectAreaLTC1,zt.ltc_2.value=D.state.rectAreaLTC2,zt.pointLights.value=D.state.point,zt.pointLightShadows.value=D.state.pointShadow,zt.hemisphereLights.value=D.state.hemi,zt.directionalShadowMap.value=D.state.directionalShadowMap,zt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,zt.spotShadowMap.value=D.state.spotShadowMap,zt.spotLightMatrix.value=D.state.spotLightMatrix,zt.spotLightMap.value=D.state.spotLightMap,zt.pointShadowMap.value=D.state.pointShadowMap,zt.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Ht,k.uniformsList=null,Ht}function en(I){if(I.uniformsList===null){const L=I.currentProgram.getUniforms();I.uniformsList=Io.seqWithValue(L.seq,I.uniforms)}return I.uniformsList}function Fe(I,L){const R=Xt.get(I);R.outputColorSpace=L.outputColorSpace,R.batching=L.batching,R.batchingColor=L.batchingColor,R.instancing=L.instancing,R.instancingColor=L.instancingColor,R.instancingMorph=L.instancingMorph,R.skinning=L.skinning,R.morphTargets=L.morphTargets,R.morphNormals=L.morphNormals,R.morphColors=L.morphColors,R.morphTargetsCount=L.morphTargetsCount,R.numClippingPlanes=L.numClippingPlanes,R.numIntersection=L.numClipIntersection,R.vertexAlphas=L.vertexAlphas,R.vertexTangents=L.vertexTangents,R.toneMapping=L.toneMapping}function nn(I,L,R,k,D){L.isScene!==!0&&(L=Ot),U.resetTextureUnits();const pt=L.fog,St=k.isMeshStandardMaterial?L.environment:null,At=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Js,Lt=(k.isMeshStandardMaterial?q:y).get(k.envMap||St),Ft=k.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,Ht=!!R.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),zt=!!R.morphAttributes.position,te=!!R.morphAttributes.normal,_t=!!R.morphAttributes.color;let ie=Ni;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ie=M.toneMapping);const re=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,se=re!==void 0?re.length:0,$t=Xt.get(k),xe=p.state.lights;if(Q===!0&&(mt===!0||I!==S)){const Tn=I===S&&k.id===b;G.setState(k,I,Tn)}let Vt=!1;k.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==xe.state.version||$t.outputColorSpace!==At||D.isBatchedMesh&&$t.batching===!1||!D.isBatchedMesh&&$t.batching===!0||D.isBatchedMesh&&$t.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&$t.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&$t.instancing===!1||!D.isInstancedMesh&&$t.instancing===!0||D.isSkinnedMesh&&$t.skinning===!1||!D.isSkinnedMesh&&$t.skinning===!0||D.isInstancedMesh&&$t.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&$t.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&$t.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&$t.instancingMorph===!1&&D.morphTexture!==null||$t.envMap!==Lt||k.fog===!0&&$t.fog!==pt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==G.numPlanes||$t.numIntersection!==G.numIntersection)||$t.vertexAlphas!==Ft||$t.vertexTangents!==Ht||$t.morphTargets!==zt||$t.morphNormals!==te||$t.morphColors!==_t||$t.toneMapping!==ie||$t.morphTargetsCount!==se)&&(Vt=!0):(Vt=!0,$t.__version=k.version);let Se=$t.currentProgram;Vt===!0&&(Se=Ae(k,L,D));let Oe=!1,Le=!1,ze=!1;const be=Se.getUniforms(),Gn=$t.uniforms;if(kt.useProgram(Se.program)&&(Oe=!0,Le=!0,ze=!0),k.id!==b&&(b=k.id,Le=!0),Oe||S!==I){kt.buffers.depth.getReversed()?(H.copy(I.projectionMatrix),P0(H),L0(H),be.setValue(F,"projectionMatrix",H)):be.setValue(F,"projectionMatrix",I.projectionMatrix),be.setValue(F,"viewMatrix",I.matrixWorldInverse);const Mi=be.map.cameraPosition;Mi!==void 0&&Mi.setValue(F,ut.setFromMatrixPosition(I.matrixWorld)),Jt.logarithmicDepthBuffer&&be.setValue(F,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&be.setValue(F,"isOrthographic",I.isOrthographicCamera===!0),S!==I&&(S=I,Le=!0,ze=!0)}if(D.isSkinnedMesh){be.setOptional(F,D,"bindMatrix"),be.setOptional(F,D,"bindMatrixInverse");const Tn=D.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),be.setValue(F,"boneTexture",Tn.boneTexture,U))}D.isBatchedMesh&&(be.setOptional(F,D,"batchingTexture"),be.setValue(F,"batchingTexture",D._matricesTexture,U),be.setOptional(F,D,"batchingIdTexture"),be.setValue(F,"batchingIdTexture",D._indirectTexture,U),be.setOptional(F,D,"batchingColorTexture"),D._colorsTexture!==null&&be.setValue(F,"batchingColorTexture",D._colorsTexture,U));const ir=R.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&lt.update(D,R,Se),(Le||$t.receiveShadow!==D.receiveShadow)&&($t.receiveShadow=D.receiveShadow,be.setValue(F,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gn.envMap.value=Lt,Gn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Gn.envMapIntensity.value=L.environmentIntensity),Le&&(be.setValue(F,"toneMappingExposure",M.toneMappingExposure),$t.needsLights&&We(Gn,ze),pt&&k.fog===!0&&Nt.refreshFogUniforms(Gn,pt),Nt.refreshMaterialUniforms(Gn,k,Z,vt,p.state.transmissionRenderTarget[I.id]),Io.upload(F,en($t),Gn,U)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Io.upload(F,en($t),Gn,U),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&be.setValue(F,"center",D.center),be.setValue(F,"modelViewMatrix",D.modelViewMatrix),be.setValue(F,"normalMatrix",D.normalMatrix),be.setValue(F,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Tn=k.uniformsGroups;for(let Mi=0,yi=Tn.length;Mi<yi;Mi++){const kl=Tn[Mi];V.update(kl,Se),V.bind(kl,Se)}}return Se}function We(I,L){I.ambientLightColor.needsUpdate=L,I.lightProbe.needsUpdate=L,I.directionalLights.needsUpdate=L,I.directionalLightShadows.needsUpdate=L,I.pointLights.needsUpdate=L,I.pointLightShadows.needsUpdate=L,I.spotLights.needsUpdate=L,I.spotLightShadows.needsUpdate=L,I.rectAreaLights.needsUpdate=L,I.hemisphereLights.needsUpdate=L}function hn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,L,R){Xt.get(I.texture).__webglTexture=L,Xt.get(I.depthTexture).__webglTexture=R;const k=Xt.get(I);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=R===void 0,k.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,L){const R=Xt.get(I);R.__webglFramebuffer=L,R.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(I,L=0,R=0){w=I,A=L,T=R;let k=!0,D=null,pt=!1,St=!1;if(I){const Lt=Xt.get(I);if(Lt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(F.FRAMEBUFFER,null),k=!1;else if(Lt.__webglFramebuffer===void 0)U.setupRenderTarget(I);else if(Lt.__hasExternalTextures)U.rebindTextures(I,Xt.get(I.texture).__webglTexture,Xt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const zt=I.depthTexture;if(Lt.__boundDepthTexture!==zt){if(zt!==null&&Xt.has(zt)&&(I.width!==zt.image.width||I.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(I)}}const Ft=I.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(St=!0);const Ht=Xt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ht[L])?D=Ht[L][R]:D=Ht[L],pt=!0):I.samples>0&&U.useMultisampledRTT(I)===!1?D=Xt.get(I).__webglMultisampledFramebuffer:Array.isArray(Ht)?D=Ht[R]:D=Ht,C.copy(I.viewport),N.copy(I.scissor),B=I.scissorTest}else C.copy($).multiplyScalar(Z).floor(),N.copy(j).multiplyScalar(Z).floor(),B=rt;if(kt.bindFramebuffer(F.FRAMEBUFFER,D)&&k&&kt.drawBuffers(I,D),kt.viewport(C),kt.scissor(N),kt.setScissorTest(B),pt){const Lt=Xt.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,Lt.__webglTexture,R)}else if(St){const Lt=Xt.get(I.texture),Ft=L||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Lt.__webglTexture,R||0,Ft)}b=-1},this.readRenderTargetPixels=function(I,L,R,k,D,pt,St){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Xt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){kt.bindFramebuffer(F.FRAMEBUFFER,At);try{const Lt=I.texture,Ft=Lt.format,Ht=Lt.type;if(!Jt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=I.width-k&&R>=0&&R<=I.height-D&&F.readPixels(L,R,k,D,yt.convert(Ft),yt.convert(Ht),pt)}finally{const Lt=w!==null?Xt.get(w).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(I,L,R,k,D,pt,St){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Xt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&St!==void 0&&(At=At[St]),At){const Lt=I.texture,Ft=Lt.format,Ht=Lt.type;if(!Jt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=I.width-k&&R>=0&&R<=I.height-D){kt.bindFramebuffer(F.FRAMEBUFFER,At);const zt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,zt),F.bufferData(F.PIXEL_PACK_BUFFER,pt.byteLength,F.STREAM_READ),F.readPixels(L,R,k,D,yt.convert(Ft),yt.convert(Ht),0);const te=w!==null?Xt.get(w).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,te);const _t=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await R0(F,_t,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,zt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pt),F.deleteBuffer(zt),F.deleteSync(_t),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,L=null,R=0){I.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,I=arguments[1]);const k=Math.pow(2,-R),D=Math.floor(I.image.width*k),pt=Math.floor(I.image.height*k),St=L!==null?L.x:0,At=L!==null?L.y:0;U.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,R,0,0,St,At,D,pt),kt.unbindTexture()},this.copyTextureToTexture=function(I,L,R=null,k=null,D=0){I.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,I=arguments[1],L=arguments[2],D=arguments[3]||0,R=null);let pt,St,At,Lt,Ft,Ht,zt,te,_t;const ie=I.isCompressedTexture?I.mipmaps[D]:I.image;R!==null?(pt=R.max.x-R.min.x,St=R.max.y-R.min.y,At=R.isBox3?R.max.z-R.min.z:1,Lt=R.min.x,Ft=R.min.y,Ht=R.isBox3?R.min.z:0):(pt=ie.width,St=ie.height,At=ie.depth||1,Lt=0,Ft=0,Ht=0),k!==null?(zt=k.x,te=k.y,_t=k.z):(zt=0,te=0,_t=0);const re=yt.convert(L.format),se=yt.convert(L.type);let $t;L.isData3DTexture?(U.setTexture3D(L,0),$t=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(U.setTexture2DArray(L,0),$t=F.TEXTURE_2D_ARRAY):(U.setTexture2D(L,0),$t=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),Vt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Se=F.getParameter(F.UNPACK_SKIP_PIXELS),Oe=F.getParameter(F.UNPACK_SKIP_ROWS),Le=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Lt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ft),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ht);const ze=I.isDataArrayTexture||I.isData3DTexture,be=L.isDataArrayTexture||L.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Gn=Xt.get(I),ir=Xt.get(L),Tn=Xt.get(Gn.__renderTarget),Mi=Xt.get(ir.__renderTarget);kt.bindFramebuffer(F.READ_FRAMEBUFFER,Tn.__webglFramebuffer),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let yi=0;yi<At;yi++)ze&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(I).__webglTexture,D,Ht+yi),I.isDepthTexture?(be&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(L).__webglTexture,D,_t+yi),F.blitFramebuffer(Lt,Ft,pt,St,zt,te,pt,St,F.DEPTH_BUFFER_BIT,F.NEAREST)):be?F.copyTexSubImage3D($t,D,zt,te,_t+yi,Lt,Ft,pt,St):F.copyTexSubImage2D($t,D,zt,te,_t+yi,Lt,Ft,pt,St);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else be?I.isDataTexture||I.isData3DTexture?F.texSubImage3D($t,D,zt,te,_t,pt,St,At,re,se,ie.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D($t,D,zt,te,_t,pt,St,At,re,ie.data):F.texSubImage3D($t,D,zt,te,_t,pt,St,At,re,se,ie):I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,D,zt,te,pt,St,re,se,ie.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,D,zt,te,ie.width,ie.height,re,ie.data):F.texSubImage2D(F.TEXTURE_2D,D,zt,te,pt,St,re,se,ie);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Vt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Se),F.pixelStorei(F.UNPACK_SKIP_ROWS,Oe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le),D===0&&L.generateMipmaps&&F.generateMipmap($t),kt.unbindTexture()},this.copyTextureToTexture3D=function(I,L,R=null,k=null,D=0){return I.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),R=arguments[0]||null,k=arguments[1]||null,I=arguments[2],L=arguments[3],D=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,L,R,k,D)},this.initRenderTarget=function(I){Xt.get(I).__webglFramebuffer===void 0&&U.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?U.setTextureCube(I,0):I.isData3DTexture?U.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?U.setTexture2DArray(I,0):U.setTexture2D(I,0),kt.unbindTexture()},this.resetState=function(){A=0,T=0,w=null,kt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}class G_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Cl extends ln{constructor(t=null,e=1,n=1,s,r,o,a,c,l=En,u=En,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new ye,nf=new ye,uo=[],sf=new Gi,V_=new ye,lr=new De,ur=new Vi;class W_ extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,V_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),sf.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(sf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),ur.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),nf.multiplyMatrices(n,Cs),lr.matrixWorld=nf,lr.raycast(t,uo);for(let o=0,a=uo.length;o<a;o++){const c=uo[o];c.instanceId=r,c.object=this,e.push(c)}uo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cl(new Float32Array(s*this.count),s,this.count,yl,jn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Rl extends ln{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Zt:new J);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new J,s=[],r=[],o=[],a=new J,c=new ye;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new J)}r[0]=new J,o[0]=new J;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pl extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Zt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class X_ extends Pl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const fo=new J,Ba=new Ll,Ha=new Ll,Ga=new Ll;class q_ extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new J){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(fo.subVectors(s[0],s[1]).add(s[0]),l=fo);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ba.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),Ha.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),Ga.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ha.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Ga.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ba.calc(c),Ha.calc(c),Ga.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rf(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Y_(i,t){const e=1-i;return e*e*t}function K_(i,t){return 2*(1-i)*i*t}function j_(i,t){return i*i*t}function yr(i,t,e,n){return Y_(i,t)+K_(i,e)+j_(i,n)}function $_(i,t){const e=1-i;return e*e*e*t}function Z_(i,t){const e=1-i;return 3*e*e*i*t}function J_(i,t){return 3*(1-i)*i*i*t}function Q_(i,t){return i*i*i*t}function Sr(i,t,e,n,s){return $_(i,t)+Z_(i,e)+J_(i,n)+Q_(i,s)}class $h extends Jn{constructor(t=new Zt,e=new Zt,n=new Zt,s=new Zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Zt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class t1 extends Jn{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Sr(t,s.x,r.x,o.x,a.x),Sr(t,s.y,r.y,o.y,a.y),Sr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zh extends Jn{constructor(t=new Zt,e=new Zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Zt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class e1 extends Jn{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends Jn{constructor(t=new Zt,e=new Zt,n=new Zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Zt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n1 extends Jn{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y),yr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Zt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(rf(a,c.x,l.x,u.x,h.x),rf(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Zt().fromArray(s))}return this}}var of=Object.freeze({__proto__:null,ArcCurve:X_,CatmullRomCurve3:q_,CubicBezierCurve:$h,CubicBezierCurve3:t1,EllipseCurve:Pl,LineCurve:Zh,LineCurve3:e1,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:n1,SplineCurve:Qh});class i1 extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new of[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new of[s.type]().fromJSON(s))}return this}}class s1 extends i1{constructor(t){super(),this.type="Path",this.currentPoint=new Zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zh(this.currentPoint.clone(),new Zt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Jh(this.currentPoint.clone(),new Zt(t,e),new Zt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new $h(this.currentPoint.clone(),new Zt(t,e),new Zt(n,s),new Zt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Qh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Pl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ta extends Ve{constructor(t=[new Zt(0,-.5),new Zt(.5,0),new Zt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ze(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,h=new J,d=new Zt,f=new J,g=new J,x=new J;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){const v=n+_*u*s,M=Math.sin(v),E=Math.cos(v);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*M,h.y=t[A].y,h.z=t[A].x*E,o.push(h.x,h.y,h.z),d.x=_/e,d.y=A/(t.length-1),a.push(d.x,d.y);const T=c[3*A+0]*M,w=c[3*A+1],b=c[3*A+0]*E;l.push(T,w,b)}}for(let _=0;_<e;_++)for(let v=0;v<t.length-1;v++){const M=v+_*t.length,E=M,A=M+t.length,T=M+t.length+1,w=M+1;r.push(E,A,w),r.push(T,w,A)}this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("uv",new _e(a,2)),this.setAttribute("normal",new _e(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ta(t.points,t.segments,t.phiStart,t.phiLength)}}class Il extends ta{constructor(t=1,e=1,n=4,s=8){const r=new s1;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Il(t.radius,t.length,t.capSegments,t.radialSegments)}}class Dl extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new J,u=new Zt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Hn extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function _(){const M=new J,E=new J;let A=0;const T=(e-t)/n;for(let w=0;w<=r;w++){const b=[],S=w/r,C=S*(e-t)+t;for(let N=0;N<=s;N++){const B=N/s,K=B*c+a,ot=Math.sin(K),ct=Math.cos(K);E.x=C*ot,E.y=-S*n+m,E.z=C*ct,h.push(E.x,E.y,E.z),M.set(ot,T,ct).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-S),b.push(g++)}x.push(b)}for(let w=0;w<s;w++)for(let b=0;b<r;b++){const S=x[b][w],C=x[b+1][w],N=x[b+1][w+1],B=x[b][w+1];(t>0||b!==0)&&(u.push(S,C,B),A+=3),(e>0||b!==r-1)&&(u.push(C,N,B),A+=3)}l.addGroup(p,A,0),p+=A}function v(M){const E=g,A=new Zt,T=new J;let w=0;const b=M===!0?t:e,S=M===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=s;N++){const K=N/s*c+a,ot=Math.cos(K),ct=Math.sin(K);T.x=b*ct,T.y=m*S,T.z=b*ot,h.push(T.x,T.y,T.z),d.push(0,S,0),A.x=ot*.5+.5,A.y=ct*.5*S+.5,f.push(A.x,A.y),g++}for(let N=0;N<s;N++){const B=E+N,K=C+N;M===!0?u.push(K,K+1,B):u.push(K+1,K,B),w+=3}l.addGroup(p,w,M===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ea extends Hn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ea(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new J,M=new J,E=new J;for(let A=0;A<e.length;A+=3)f(e[A+0],v),f(e[A+1],M),f(e[A+2],E),c(v,M,E,_)}function c(_,v,M,E){const A=E+1,T=[];for(let w=0;w<=A;w++){T[w]=[];const b=_.clone().lerp(M,w/A),S=v.clone().lerp(M,w/A),C=A-w;for(let N=0;N<=C;N++)N===0&&w===A?T[w][N]=b:T[w][N]=b.clone().lerp(S,N/C)}for(let w=0;w<A;w++)for(let b=0;b<2*(A-w)-1;b++){const S=Math.floor(b/2);b%2===0?(d(T[w][S+1]),d(T[w+1][S]),d(T[w][S])):(d(T[w][S+1]),d(T[w+1][S+1]),d(T[w+1][S]))}}function l(_){const v=new J;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(_),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function u(){const _=new J;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const M=m(_)/2/Math.PI+.5,E=p(_)/Math.PI+.5;o.push(M,1-E)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){const v=o[_+0],M=o[_+2],E=o[_+4],A=Math.max(v,M,E),T=Math.min(v,M,E);A>.9&&T<.1&&(v<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,v){const M=_*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const _=new J,v=new J,M=new J,E=new J,A=new Zt,T=new Zt,w=new Zt;for(let b=0,S=0;b<r.length;b+=9,S+=6){_.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),A.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),w.set(o[S+4],o[S+5]),E.copy(_).add(v).add(M).divideScalar(3);const C=m(E);x(A,S+0,_,C),x(T,S+2,v,C),x(w,S+4,M,C)}}function x(_,v,M,E){E<0&&_.x===1&&(o[v]=_.x-1),M.x===0&&M.z===0&&(o[v]=E/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.vertices,t.indices,t.radius,t.details)}}class $s extends na{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $s(t.radius,t.detail)}}class Dr extends na{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dr(t.radius,t.detail)}}class gi extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new J,d=new J,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const _=[],v=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let E=0;E<=e;E++){const A=E/e;h.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+M,1-v),_.push(l++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const v=u[p][_+1],M=u[p][_],E=u[p+1][_],A=u[p+1][_+1];(p!==0||o>0)&&f.push(v,M,A),(p!==n-1||c<Math.PI)&&f.push(M,E,A)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class r1 extends hs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class o1 extends hs{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ae(16777215),this.specular=new ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ia extends hs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class td extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class a1 extends td{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Va=new ye,af=new J,cf=new J;class c1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;af.setFromMatrixPosition(t.matrixWorld),e.position.copy(af),cf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cf),e.updateMatrixWorld(),Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class l1 extends c1{constructor(){super(new Wh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u1 extends td{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new l1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class f1 extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const pe=Object.freeze({eightBody:1447452,eightDisc:16513779,eightInk:1447452,eightRim:10274047,cueBody:16776692,cueDots:14165548,blobShadow:795668,flagCloth:15217199,flagDisc:16513779,pinWhite:16513779,pinBand:15217199,cupInside:1780254,cupLiner:16513779,guideWhite:16777215,guideHalo:1057818,guideWarn:16747050,eightArrow:16765503,surfaceOutline:3037738,chalk:4030425,poolBalls:Object.freeze([16763196,2976991,15022389,8081353,16747050,2006618,9317178])}),lf=Object.freeze({1:Object.freeze({name:"Greenside",rough:5216828,fairwayLight:8177237,fairwayDark:7125066,fringe:7782994,greenLight:9427046,greenDark:8703836,sand:15914907,sandLip:14268530,ice:14218239,waterShallow:6080736,waterDeep:3051460,waterFoam:15268863,waterGlint:12579839,pondBed:2916230,railSide:10115630,railTop:12745283,railSights:16051152,cushionNose:2059082,hedge:4164154,wallStone:14275267,soilTop:8015407,soilBottom:5123868,skyTop:12576511,skyBottom:15267839,reeds:8032058,wood:11040586,hemiSky:15135487,hemiGround:8022600,hemiIntensity:1.4,sun:16773596,sunIntensity:2.7,sunElevationDeg:50}),2:Object.freeze({name:"Lakeside",rough:6198336,fairwayLight:9684306,fairwayDark:8697930,fringe:9224270,greenLight:10737251,greenDark:9948506,sand:15978388,sandLip:14264422,ice:14218239,waterShallow:5224150,waterDeep:2386088,waterFoam:15268863,waterGlint:16770764,pondBed:2781050,railSide:7028516,railTop:9198132,railSights:14792794,cushionNose:2055762,hedge:4620346,wallStone:14207152,soilTop:8015407,soilBottom:5123868,skyTop:16766888,skyBottom:16772048,reeds:8032058,wood:11040586,hemiSky:16770764,hemiGround:5917242,hemiIntensity:1.8,sun:16767400,sunIntensity:3.2,sunElevationDeg:32})}),ed=i=>lf[i]||lf[1],Wo=30,h1=Cr.degToRad(225),d1=90;function p1(){try{const n=typeof location<"u"?/[?&]tier=([012])\b/.exec(location.search):null;if(n)return+n[1]}catch{}const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=typeof navigator<"u"?navigator.deviceMemory:void 0,e=typeof devicePixelRatio=="number"?devicePixelRatio:1;return i&&typeof t=="number"&&t<=3?0:!i&&e>=1.5?2:1}function m1(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext&&e.getContext("2d");if(!n)return null;const s=c=>"#"+c.toString(16).padStart(6,"0"),r=n.createLinearGradient(0,0,0,e.height);r.addColorStop(0,s(i)),r.addColorStop(1,s(t)),n.fillStyle=r,n.fillRect(0,0,e.width,e.height);const o=n.createRadialGradient(0,0,0,0,0,e.height*.9);o.addColorStop(0,"rgba(255,255,255,0.35)"),o.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=o,n.fillRect(0,0,e.width,e.height);const a=new Rl(e);return a.colorSpace=Qe,a.generateMipmaps=!1,a.minFilter=wn,a}function g1(i){const t=p1(),e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=typeof devicePixelRatio=="number"&&devicePixelRatio>0?devicePixelRatio:1,s=Math.min(n,t===0?1:t===2?2:e?1.5:2),r=Math.min(1,n);let o=null;try{o=new H_({antialias:t>0,powerPreference:"high-performance",stencil:!1,alpha:!1})}catch(j){o=null,typeof window<"u"&&window.document&&window.document.body&&console.error(j)}if(o){o.outputColorSpace=Qe,o.toneMapping=Mh,o.toneMappingExposure=1,o.shadowMap.enabled=t>=1,o.shadowMap.type=xl,o.shadowMap.autoUpdate=!1,o.setPixelRatio(s);const j=o.domElement;j.style.display="block",j.style.width="100%",j.style.height="100%",j.style.touchAction="none",j.style.outline="none",i&&i.appendChild&&i.appendChild(j)}const a=new G_,c=new Mn(Wo,16/9,.5,800);c.position.set(0,30,17),c.lookAt(0,0,0);const l=new a1(16777215,7829367,1.4);l.position.set(0,1,0);const u=new u1(16777215,2.7);if(a.add(l,u,u.target),t>=1){u.castShadow=!0;const j=t===2?2048:1024;u.shadow.mapSize.set(j,j),u.shadow.bias=-6e-4,u.shadow.normalBias=.03,u.shadow.intensity=.55}const h={w:1,h:1,portrait:!1,zero:!0},d=new Set,f=new J,g=new Gi(new J(-4,-2,-16),new J(30,4,4));let x=null,m=2,p=Cr.degToRad(50);const _={renderer:o,scene:a,camera:c,tier:t,size:h,container:i,round:1,yaw:0,hemi:l,sun:u,pixelRatio:s,shadows:!!(o&&t>=1),setRound:S,setShadowBounds:w,invalidateShadows:b,onResize:B,render:z,dispose:$},v=new ye,M=new J,E=new J,A=new J(0,1,0);function T(){const j=_.yaw+h1;if(f.set(Math.sin(j)*Math.cos(p),Math.sin(p),Math.cos(j)*Math.cos(p)),g.getCenter(E),u.position.copy(E).addScaledVector(f,d1),u.target.position.copy(E),u.updateMatrixWorld(),u.target.updateMatrixWorld(),!u.castShadow)return;v.lookAt(u.position,E,A),v.setPosition(u.position),v.invert();let rt=1/0,O=-1/0,Q=1/0,mt=-1/0,H=1/0,tt=-1/0;for(let Et=0;Et<8;Et++)M.set(Et&1?g.max.x:g.min.x,Et&2?g.max.y:g.min.y,Et&4?g.max.z:g.min.z),M.applyMatrix4(v),M.x<rt&&(rt=M.x),M.x>O&&(O=M.x),M.y<Q&&(Q=M.y),M.y>mt&&(mt=M.y),M.z<H&&(H=M.z),M.z>tt&&(tt=M.z);const ut=u.shadow.camera;ut.left=rt-1,ut.right=O+1,ut.bottom=Q-1,ut.top=mt+1,ut.near=Math.max(.5,-tt-4),ut.far=-H+4,ut.updateProjectionMatrix(),b()}function w(j){if(!j||!j.bounds)return;const rt=j.bounds;let O=0,Q=0;const mt=j.grid;if(mt&&mt.height)for(let H=0;H<mt.height.length;H++){const tt=mt.height[H];tt<O&&(O=tt),tt>Q&&(Q=tt)}g.min.set(rt.minx-5,O-2.5,rt.minz-5),g.max.set(rt.maxx+5,Q+5,rt.maxz+5),T()}function b(){m=2}function S(j){const rt=ed(j);_.round=j===2?2:1,l.color.setHex(rt.hemiSky),l.groundColor.setHex(rt.hemiGround),l.intensity=rt.hemiIntensity,u.color.setHex(rt.sun),u.intensity=rt.sunIntensity,p=Cr.degToRad(rt.sunElevationDeg),x&&x.dispose(),x=m1(rt.skyTop,rt.skyBottom),a.background=x||new ae(rt.skyBottom),T()}function C(){let j=0,rt=0;if(i&&(j=i.clientWidth||0,rt=i.clientHeight||0,(!j||!rt)&&i.getBoundingClientRect)){const O=i.getBoundingClientRect();j=j||O.width||0,rt=rt||O.height||0}return{w:j>0&&Number.isFinite(j)?Math.round(j):0,h:rt>0&&Number.isFinite(rt)?Math.round(rt):0}}function N(j){const rt=C(),O=!(rt.w>0&&rt.h>0),Q=O?1:rt.w,mt=O?1:rt.h;if(!j&&Q===h.w&&mt===h.h&&O===h.zero)return;const H=h.portrait;h.w=Q,h.h=mt,h.zero=O,h.portrait=!O&&mt>Q,_.yaw=h.portrait?-Math.PI/2:0,c.aspect=O?16/9:Q/mt,c.updateProjectionMatrix(),o&&o.setSize(Q,mt,!1),(j||H!==h.portrait)&&T(),d.forEach(tt=>{try{tt(h)}catch(ut){console.error(ut)}})}function B(j){return d.add(j),()=>d.delete(j)}const K=()=>N(!1);let ot=null;typeof ResizeObserver=="function"&&i&&i.nodeType===1&&(ot=new ResizeObserver(K),ot.observe(i)),typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",K),window.addEventListener("orientationchange",K));function ct(j){j=Math.round(j*4)/4,!(!o||j===_.pixelRatio)&&(_.pixelRatio=j,o.setPixelRatio(j),o.setSize(h.w,h.h,!1))}const vt=x1({cap:s,min:r,get:()=>_.pixelRatio,set:ct,onSlowStart(){o&&o.shadowMap.enabled&&(o.shadowMap.enabled=!1,u.castShadow=!1,_.shadows=!1)}});let Z=0;const X=typeof performance<"u"?performance:Date;function z(){if(!o||h.zero)return;const j=X.now();Z&&vt.frame((j-Z)/1e3),Z=j,m>0&&(o.shadowMap.enabled&&(o.shadowMap.needsUpdate=!0),m--),o.render(a,c)}function $(){if(d.clear(),ot&&ot.disconnect(),typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",K),window.removeEventListener("orientationchange",K)),x&&x.dispose(),u.shadow&&u.shadow.map&&u.shadow.map.dispose(),o){o.dispose();const j=o.domElement;j&&j.parentNode&&j.parentNode.removeChild(j)}}return N(!0),S(1),_}function x1({cap:i,min:t,get:e,set:n,onSlowStart:s=null}){const r={winT:0,winN:0,slowT:0,slowSum:0,fastT:0,age:0,checkT:0,checkN:0,checked:!1,probing:!1,probeT:0,probeSum:0,prevPr:0,prevAvg:0,capped:!1},o=new Map;function a(c){if(!(c>0)||c>.25||(r.age+=c,!r.checked&&r.age>1&&(r.checkT+=c,r.checkN++,r.checkT>=3&&(r.checked=!0,r.checkN/r.checkT<40&&s&&s())),r.winT+=c,r.winN++,r.winT<.5))return;const l=r.winT/r.winN,u=r.winT;if(r.winT=0,r.winN=0,r.probing){r.probeT+=u,r.probeSum+=l*u,r.probeT>=1.5&&(r.probing=!1,r.probeSum/r.probeT>r.prevAvg*.92&&(n(r.prevPr),o.set(r.prevPr,Math.max(0,(o.get(r.prevPr)||1)-1)),r.capped=!0));return}if(r.capped)if(l<.0172)r.capped=!1;else return;l>.018?(r.slowT+=u,r.slowSum+=l*u,r.fastT=0):(r.slowT=0,r.slowSum=0),l<.0172?r.fastT+=u:r.fastT=0;const h=e();if(r.slowT>=1&&h>t)o.set(h,(o.get(h)||0)+1),r.prevPr=h,r.prevAvg=r.slowSum/r.slowT,n(Math.max(t,h-.25)),r.probing=!0,r.probeT=0,r.probeSum=0,r.slowT=0,r.slowSum=0,r.fastT=0;else if(r.fastT>=5&&h<i){const d=Math.min(i,h+.25);(o.get(d)||0)<2&&n(d),r.fastT=0}}return{frame:a,state:r}}const Ri=Cr.degToRad(60),Rs=Math.tan(Cr.degToRad(Wo/2)),si=Wt.R,v1=22,ho=1.6,uf=.8,Wa=2.6,po=64,_1={top:76},ff=.3,hf=10,df=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},M1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,on=(i,t)=>Number.isFinite(i)?i:t;function es(i,t,e){if(!i)return 0;const n=i.grid;if(!n||!n.height){const m=i.heightAt?i.heightAt(t,e):0;return Number.isFinite(m)?m:0}const s=n.cols,r=n.rows;let o=(t-n.x0)/n.cell,a=(e-n.z0)/n.cell;if(o!==o||a!==a)return 0;o=o<0?0:o>s-1.000001?s-1.000001:o,a=a<0?0:a>r-1.000001?r-1.000001:a;const c=o|0,l=a|0,u=o-c,h=a-l,d=n.height,f=l*s+c,g=d[f]+(d[f+1]-d[f])*u,x=d[f+s]+(d[f+s+1]-d[f+s])*u;return g+(x-g)*h}class li{constructor(t){this.tx=0,this.ty=0,this.tz=0,this.d=t,this.valid=!1}}class mo{constructor(){this.v=0}}class y1{constructor(){this.x=new mo,this.y=new mo,this.z=new mo,this.d=new mo}}class S1{constructor(){this.x=0,this.z=0,this.has=!1,this.lastX=0,this.lastZ=0,this.vx=0,this.vz=0,this.fresh=!1}}class b1{constructor(){this.d=0,this.aspect=0,this.yaw=NaN,this.tx=NaN,this.ty=NaN,this.tz=NaN,this.dd=NaN}}class w1{constructor(){this.active=!1,this.t=0,this.from=new li(60),this.to=new li(30),this.resolve=null}}class E1{constructor(){this.dt=0,this.T=.25}}class A1{constructor(){this.x0=-1,this.x1=1,this.y0=-1,this.y1=1}}class T1{constructor(){this.top=_1.top,this.right=0,this.bottom=0,this.left=0}}class C1{constructor(){this.x0=0,this.x1=0,this.y0=0,this.y1=0}}function R1(i){const t=i.camera,e=new Mn(Wo,t.aspect,.1,4e3),n=new li(40),s=new li(40),r=new y1,o=new li(60),a=new li(30),c=new li(30),l=new li(30),u=new w1,h=new S1,d=new Float64Array(po),f=new Float64Array(po),g=new Float64Array(po);let x=0;const m=new J,p=new J,_=new J,v=new An,M={x:0,z:0};let E=null,A=0,T=0,w="idle",b=!1,S=!1,C=null,N=i.yaw||0;const B=new b1,K=new T1,ot=new A1,ct=new li(30),vt=new E1,Z=(W,G)=>es(E,W,G),X=()=>Math.max(1,i.size.h||1),z=()=>Math.max(1,i.size.w||1);function $(){const W=z(),G=X(),nt=Math.max(10,.03*Math.min(W,G));let Mt=K.left,lt=K.right,P=K.top,it=K.bottom;const yt=W*(1-ff)-2*nt;if(Mt+lt>yt){const V=Math.max(0,yt)/(Mt+lt);Mt*=V,lt*=V}const Ut=G*(1-ff)-2*nt;if(P+it>Ut){const V=Math.max(0,Ut)/(P+it);P*=V,it*=V}return ot.x0=-1+2*(Mt+nt)/W,ot.x1=1-2*(lt+nt)/W,ot.y1=1-2*(P+nt)/G,ot.y0=-1+2*(it+nt)/G,ot}function j(W,G,nt,Mt,lt){const P=Math.cos(Ri);W.position.set(G+Math.sin(N)*P*lt,nt+Math.sin(Ri)*lt,Mt+Math.cos(N)*P*lt),W.lookAt(G,nt,Mt),W.updateMatrixWorld(!0)}function rt(){Number.isFinite(n.tx)||(n.tx=0),Number.isFinite(n.ty)||(n.ty=0),Number.isFinite(n.tz)||(n.tz=0),n.d>=.5||(n.d=Number.isFinite(n.d)?.5:40);const W=n.d,G=Math.cos(Ri);t.position.set(n.tx+Math.sin(N)*G*W,n.ty+Math.sin(Ri)*W,n.tz+Math.cos(N)*G*W),B.yaw!==N&&(v.set(-Ri,N,0,"YXZ"),t.quaternion.setFromEuler(v),B.yaw=N),t.updateMatrixWorld(!0),B.tx=n.tx,B.ty=n.ty,B.tz=n.tz,B.dd=n.d,(Math.abs(W-B.d)>B.d*.04||t.aspect!==B.aspect)&&(B.d=W,t.near=Math.max(.3,W*.28),t.far=W*3.2+90,t.updateProjectionMatrix(),B.aspect=t.aspect)}function O(){e.fov=Wo,e.aspect=t.aspect,e.near=.1,e.far=4e3,e.updateProjectionMatrix()}function Q(W,G,nt){x>=po||!Number.isFinite(W)||!Number.isFinite(nt)||(d[x]=W,f[x]=on(G,0),g[x]=nt,x++)}const mt=new C1;function H(W,G,nt,Mt){j(e,W,G,nt,Mt),mt.x0=1/0,mt.x1=-1/0,mt.y0=1/0,mt.y1=-1/0;for(let lt=0;lt<x;lt++){if(m.set(d[lt],f[lt],g[lt]).applyMatrix4(e.matrixWorldInverse),m.z>-.2)return!1;m.applyMatrix4(e.projectionMatrix),m.x<mt.x0&&(mt.x0=m.x),m.x>mt.x1&&(mt.x1=m.x),m.y<mt.y0&&(mt.y0=m.y),m.y>mt.y1&&(mt.y1=m.y)}return!0}function tt(W,G,nt,Mt,lt){if(p.copy(W.position),_.set(G,nt,.5).unproject(W).sub(p).normalize(),_.y>-1e-4)return!1;const P=(Mt-p.y)/_.y;return lt.tx=p.x+_.x*P,lt.tz=p.z+_.z*P,!0}function ut(W,G){if(O(),x===0)return G.tx=0,G.ty=0,G.tz=0,G.d=40,G;let nt=0,Mt=0,lt=0;for(let ft=0;ft<x;ft++)nt+=d[ft],Mt+=f[ft],lt+=g[ft];nt/=x,Mt/=x,lt/=x;const P=W.x1-W.x0,it=W.y1-W.y0,yt=(W.x0+W.x1)/2,Ut=(W.y0+W.y1)/2;let V=40;for(let ft=0;ft<3;ft++){let dt=1,gt=1500;for(let Y=0;Y<30;Y++)V=(dt+gt)/2,H(nt,Mt,lt,V)&&mt.x1-mt.x0<=P&&mt.y1-mt.y0<=it?gt=V:dt=V;if(V=gt,!H(nt,Mt,lt,V))break;const Tt=l;tt(e,(mt.x0+mt.x1)/2-yt,(mt.y0+mt.y1)/2-Ut,Mt,Tt)&&(nt=Tt.tx,lt=Tt.tz)}return G.tx=nt,G.ty=Mt,G.tz=lt,G.d=V,G}function Et(W,G,nt){return O(),H(G.tx,G.ty,G.tz,nt)?mt.x0>=W.x0-1e-6&&mt.x1<=W.x1+1e-6&&mt.y0>=W.y0-1e-6&&mt.y1<=W.y1+1e-6:!1}const Ot=()=>X()*2*si/(v1*2*Rs);function st(){if(!E)return;x=0;const W=E.bounds,G=E.ground&&E.ground.length?E.ground:null;if(G){const Mt=Math.max(1,Math.ceil(G.length/40));for(let lt=0;lt<G.length;lt+=Mt)Q(G[lt].x,Z(G[lt].x,G[lt].z),G[lt].z)}Q(W.minx,Z(W.minx,W.minz),W.minz),Q(W.maxx,Z(W.maxx,W.minz),W.minz),Q(W.minx,Z(W.minx,W.maxz),W.maxz),Q(W.maxx,Z(W.maxx,W.maxz),W.maxz);const nt=E.cup;Q(nt.x,Z(nt.x,nt.z)+Wa,nt.z),ut($(),o)}function xt(W,G,nt,Mt,lt=0){for(let P=0;P<Mt;P++){const it=P/Mt*Math.PI*2,yt=W+Math.cos(it)*nt,Ut=G+Math.sin(it)*nt;Q(yt,Z(yt,Ut)+lt,Ut)}}function F(W,G){if(!W||W.length<2)return;const nt=W.length>>1,Mt=Math.max(1,Math.ceil(nt/G));for(let lt=0;lt<nt;lt+=Mt)Q(W[2*lt],Z(W[2*lt],W[2*lt+1]),W[2*lt+1]);Q(W[2*nt-2],Z(W[2*nt-2],W[2*nt-1]),W[2*nt-1])}function et(W,G,nt,Mt){x=0;const lt=Z(W,G);if(xt(W,G,nt+si*1.15,24,si),xt(W,G,nt,12,2*si),Q(W,lt+2*si,G),Q(W,lt,G),Mt){const P=Z(Mt.x,Mt.z);Q(Mt.x,P+2*si,Mt.z),xt(Mt.x,Mt.z,si*1.1,6,si)}}function Bt(W,G,nt,Mt,lt,P){const it=$();et(W,G,nt,Mt);const yt=x;if(lt(),ut(it,P),E&&E.cup){const ft=E.cup,dt=Math.sqrt((ft.x-W)*(ft.x-W)+(ft.z-G)*(ft.z-G));let gt=df(18,8,dt);if(gt>0){const Tt=x;xt(ft.x,ft.z,Wt.HOLE_R+.6,8,0),Q(ft.x,Z(ft.x,ft.z)+Wa,ft.z),ut(it,c),x=yt;let Y=!1;for(let ht=0;ht<4&&!Y;ht++,gt*=.5)Jt(l,P,c,gt),Y=Et(it,l,l.d);Y&&q(P,l),x=Tt}}const Ut=E&&E.camera&&E.camera.zoom>0?E.camera.zoom:1;P.d=Math.max(8,P.d/Ut);const V=Math.max(8,Ot());if(et(W,G,nt,Mt),ut(it,c),c.d>V)return q(P,c),P;if(P.d>V&&(P.d=V),!Et(it,P,P.d)){const ft=P.tx,dt=P.ty,gt=P.tz;let Tt=!1;for(let Y=1;Y<=8;Y++){const ht=Y/8;if(l.tx=ft+(c.tx-ft)*ht,l.ty=dt+(c.ty-dt)*ht,l.tz=gt+(c.tz-gt)*ht,Et(it,l,P.d)){Tt=!0;break}}Tt?(P.tx=l.tx,P.ty=l.ty,P.tz=l.tz):q(P,c)}return P}function Jt(W,G,nt,Mt){W.tx=G.tx+(nt.tx-G.tx)*Mt,W.ty=G.ty+(nt.ty-G.ty)*Mt,W.tz=G.tz+(nt.tz-G.tz)*Mt,W.d=Math.exp(Math.log(G.d)+(Math.log(nt.d)-Math.log(G.d))*Mt)}function kt(W){const G=E.eight,nt=E.cup;let Mt=nt.x-G.x,lt=nt.z-G.z;const P=Math.sqrt(Mt*Mt+lt*lt)||1;Mt/=P,lt/=P;const it=Math.min(14,P),yt=E.placeR||4,Ut=Math.min(.6*yt,2.5);return M.x=G.x-Mt*Ut,M.z=G.z-lt*Ut,Bt(G.x,G.z,yt,M,()=>{for(let V=1;V<=4;V++){const ft=G.x+Mt*it*(V/4),dt=G.z+lt*it*(V/4);Q(ft,Z(ft,dt),dt)}},W)}function Kt(W,G){const nt=W&&W.world,Mt=nt&&nt.balls&&nt.balls[1];if(!Mt)return kt(G);const lt=W.level&&W.level.placeR||nt.placeR||4,P=typeof W.guide=="function"?W.guide():null;let it=null;return W.intent&&Number.isFinite(W.intent.x)&&Number.isFinite(W.intent.z)&&(M.x=W.intent.x,M.z=W.intent.z,it=M),Bt(Mt.x,Mt.z,lt,it,()=>{P&&P.cue&&F(P.cue.points,10),P&&P.eight&&F(P.eight.points,14)},G)}function Xt(W){if(!E)return;const G=E.bounds,nt=hf;W.tx=Math.min(G.maxx+nt,Math.max(G.minx-nt,on(W.tx,0))),W.tz=Math.min(G.maxz+nt,Math.max(G.minz-nt,on(W.tz,0))),W.d=Math.min(U(),Math.max(y(),on(W.d,40)))}const U=()=>Math.max(10,o.d*1.1),y=()=>Math.max(6,.6*(a.valid?a.d:o.d*.5));function q(W,G){W.tx=G.tx,W.ty=G.ty,W.tz=G.tz,W.d=G.d}function at(W){q(n,W),q(s,W),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,rt()}function bt(){if(!u.active)return;u.active=!1,q(n,u.to),q(s,a.valid?a:u.to),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,w=b?"overview":"play",b&&q(s,o);const W=u.resolve;u.resolve=null,W&&W()}i.onResize(()=>{const W=i.yaw||0,G=W!==N;if(N=W,rt(),!!E){if(st(),u.active){q(u.from,o),kt(u.to),a.valid&&C&&(Kt(C,a),q(u.to,a));return}C&&!S&&(Kt(C,a),a.valid=!0),b||w==="overview"?q(s,o):w==="play"&&!S&&a.valid&&q(s,a),Xt(s),G&&at(s)}});const wt={get userMoved(){return S},set userMoved(W){S=!!W},get level(){return E},get mode(){return w},get overviewOn(){return b},setInsets(W){const G=it=>Number.isFinite(it)&&it>0?it:0,nt=G(W&&W.top),Mt=G(W&&W.right),lt=G(W&&W.bottom),P=G(W&&W.left);if(!(nt===K.top&&Mt===K.right&&lt===K.bottom&&P===K.left)&&(K.top=nt,K.right=Mt,K.bottom=lt,K.left=P,!!E)){if(st(),u.active){a.valid&&C?(Kt(C,a),q(u.to,a)):kt(u.to);return}S||(C&&(Kt(C,a),Dt(a),a.valid=!0),b||w==="overview"?q(s,o):w==="play"&&a.valid?q(s,a):w==="cup"&&wt.frameCup())}},get insets(){return{top:K.top,right:K.right,bottom:K.bottom,left:K.left}},setLevel(W){if(u.active&&bt(),E=W||null,A=0,T=0,E&&E.grid&&E.grid.height){const G=E.grid.height;A=1/0,T=-1/0;for(let nt=0;nt<G.length;nt++)G[nt]<A&&(A=G[nt]),G[nt]>T&&(T=G[nt]);Number.isFinite(A)||(A=0,T=0)}S=!1,b=!1,C=null,a.valid=!1,h.has=!1,N=i.yaw||0,i.setShadowBounds&&i.setShadowBounds(E),E&&(st(),w="overview",at(o))},intro(){return u.active&&bt(),E?(st(),q(u.from,o),kt(u.to),u.t=0,u.active=!0,w="intro",at(o),new Promise(W=>{u.resolve=W})):Promise.resolve()},skipIntro(){bt()},frameShot(W){if(E){if(C=W||C,Kt(C,a),Dt(a),a.valid=!0,S=!1,h.has=!1,u.active){q(u.to,a);return}b||(w="play",q(s,a))}},follow(W,G){!E||u.active||b||S||!Number.isFinite(W)||!Number.isFinite(G)||((w!=="follow"||!h.has)&&(h.lastX=W,h.lastZ=G,h.vx=0,h.vz=0),w="follow",h.x=W,h.z=G,h.has=!0,h.fresh=!0)},frameCup(){if(!E||u.active)return;x=0;const W=E.cup;xt(W.x,W.z,Wt.HOLE_R+2,12),Q(W.x,Z(W.x,W.z)+Wa,W.z),ut($(),s),s.d=Math.max(s.d,10),Xt(s),w="cup"},overview(W){E&&(b=!!W,!u.active&&(S=!1,b?(st(),w="overview",q(s,o)):a.valid&&(C&&C.state==="ready"&&Kt(C,a),w="play",q(s,a))))},zoomBy(W,G,nt){if(!E||!(W>0)||!Number.isFinite(W))return;u.active&&bt();const Mt=z(),lt=X(),P=Number.isFinite(G)?G/Mt*2-1:0,it=Number.isFinite(nt)?1-nt/lt*2:0;rt(),O(),j(e,n.tx,n.ty,n.tz,n.d);const yt=c,Ut=tt(e,P,it,n.ty,yt),V=yt.tx,ft=yt.tz,dt=Math.min(U(),Math.max(y(),n.d/W));j(e,n.tx,n.ty,n.tz,dt);const gt=tt(e,P,it,n.ty,yt);n.d=dt,Ut&&gt&&(n.tx+=V-yt.tx,n.tz+=ft-yt.tz),Xt(n),S=!0,at(n)},panBy(W,G){if(!E||!Number.isFinite(W)||!Number.isFinite(G))return;u.active&&bt();const nt=X()/(2*Math.max(1,n.d)*Rs),Mt=Math.cos(N),lt=-Math.sin(N),P=-Math.sin(N),it=-Math.cos(N),yt=Math.sin(Ri),Ut=-W/nt,V=G/(nt*yt);n.tx+=Mt*Ut+P*V,n.tz+=lt*Ut+it*V,Xt(n),S=!0,at(n)},update(W){if(W=Number.isFinite(W)&&W>0?Math.min(W,.1):0,u.active){u.t+=W;const nt=u.from,Mt=u.to;if(u.t<ho){const lt=u.t/ho;n.tx=nt.tx,n.ty=nt.ty,n.tz=nt.tz,n.d=nt.d*(1.04-.04*(lt*(2-lt)))}else{const lt=M1(Math.min(1,(u.t-ho)/uf));n.tx=nt.tx+(Mt.tx-nt.tx)*lt,n.ty=nt.ty+(Mt.ty-nt.ty)*lt,n.tz=nt.tz+(Mt.tz-nt.tz)*lt,n.d=Math.exp(Math.log(nt.d)+(Math.log(Mt.d)-Math.log(nt.d))*lt)}rt(),u.t>=ho+uf&&bt();return}vt.dt=W;let G=.25;w==="follow"&&h.has&&!S&&!b?(G=.35,Nt()):w==="overview"?G=.3:w==="cup"&&(G=.45),h.fresh=!1,!S&&W>0&&(vt.T=G,Gt()),!(n.tx===B.tx&&n.ty===B.ty&&n.tz===B.tz&&n.d===B.dd&&N===B.yaw)&&rt()},screenToGround(W,G){if(!Number.isFinite(W)||!Number.isFinite(G))return null;const nt=W/z()*2-1,Mt=1-G/X()*2;if(p.copy(t.position),_.set(nt,Mt,.5).unproject(t).sub(p).normalize(),!(_.y<-1e-5))return null;const lt=T+.01,P=A-.01;let it=Math.max(0,(lt-p.y)/_.y);const yt=Math.max(it,(P-p.y)/_.y),Ut=Rt=>p.y+_.y*Rt-Z(p.x+_.x*Rt,p.z+_.z*Rt);if(!E||yt-it<1e-6){const Rt=T===A?(T-p.y)/_.y:it;return{x:p.x+_.x*Rt,z:p.z+_.z*Rt}}const V=Math.sqrt(_.x*_.x+_.z*_.z),ft=Math.min(400,Math.max(1,Math.ceil((yt-it)*V/.2))),dt=(yt-it)/ft;let gt=Ut(it),Tt=it,Y=gt<=0;if(!Y)for(let Rt=1;Rt<=ft;Rt++){Tt=it+dt*Rt;const qt=Ut(Tt);if(qt<=0){Y=!0;break}it=Tt,gt=qt}Y||(Tt=yt);let ht=it,Pt=Tt;for(let Rt=0;Rt<24&&Pt-ht>1e-5;Rt++){const qt=(ht+Pt)/2;Ut(qt)>0?ht=qt:Pt=qt}const It=(ht+Pt)/2;return{x:p.x+_.x*It,z:p.z+_.z*It}},groundToScreen(W,G,nt,Mt){const lt=Mt||{x:0,y:0,onScreen:!1};m.set(on(W,0),on(G,0),on(nt,0)).applyMatrix4(t.matrixWorldInverse);const P=m.z>-t.near;P&&(m.z=-t.near),m.applyMatrix4(t.projectionMatrix);const it=z(),yt=X();let Ut=(m.x+1)/2*it,V=(1-m.y)/2*yt;return P&&(Ut=it-Ut,V=yt-V),lt.x=on(Ut,it/2),lt.y=on(V,yt/2),lt.onScreen=!P&&lt.x>=0&&lt.x<=it&&lt.y>=0&&lt.y<=yt,lt},pxPerMetre(W,G){const nt=Z(on(W,0),on(G,0))+si,Mt=t.position.distanceTo(m.set(on(W,0),nt,on(G,0))),lt=X()/(2*Math.max(.01,Mt)*Rs);return Number.isFinite(lt)?lt:1}};function Gt(){const W=vt.dt;let G=2/Math.max(1e-4,vt.T),nt=G*W,Mt=1/(1+nt+.48*nt*nt+.235*nt*nt*nt),lt=n.tx-s.tx,P=(r.x.v+G*lt)*W;r.x.v=(r.x.v-G*P)*Mt,n.tx=s.tx+(lt+P)*Mt,lt=n.ty-s.ty,P=(r.y.v+G*lt)*W,r.y.v=(r.y.v-G*P)*Mt,n.ty=s.ty+(lt+P)*Mt,lt=n.tz-s.tz,P=(r.z.v+G*lt)*W,r.z.v=(r.z.v-G*P)*Mt,n.tz=s.tz+(lt+P)*Mt,G=2/Math.max(1e-4,vt.T*1.6),nt=G*W,Mt=1/(1+nt+.48*nt*nt+.235*nt*nt*nt);const it=Math.log(Math.max(.5,s.d));lt=Math.log(Math.max(.5,n.d))-it,P=(r.d.v+G*lt)*W,r.d.v=(r.d.v-G*P)*Mt,n.d=Math.exp(it+(lt+P)*Mt),Number.isFinite(n.tx+n.ty+n.tz+n.d)||(q(n,s),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0),Math.abs(n.tx-s.tx)+Math.abs(n.ty-s.ty)+Math.abs(n.tz-s.tz)<1e-4&&Math.abs(n.d-s.d)<1e-4*s.d&&Math.abs(r.x.v)+Math.abs(r.y.v)+Math.abs(r.z.v)+Math.abs(r.d.v)<1e-4&&(q(n,s),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0)}function Nt(){const W=vt.dt;if(W>0&&h.fresh){const Qt=(h.x-h.lastX)/W,ge=(h.z-h.lastZ)/W,ce=1-Math.exp(-W/.25);Number.isFinite(Qt)&&Number.isFinite(ge)&&Math.abs(Qt)<80&&Math.abs(ge)<80&&(h.vx+=(Qt-h.vx)*ce,h.vz+=(ge-h.vz)*ce)}h.lastX=h.x,h.lastZ=h.z;const G=a.valid?a.d:n.d;let nt=h.vx*.3,Mt=h.vz*.3;const lt=Math.sqrt(nt*nt+Mt*Mt);lt>3.5&&(nt*=3.5/lt,Mt*=3.5/lt);const P=h.x+nt,it=h.z+Mt,yt=$();O(),j(e,s.tx,s.ty,s.tz,Math.max(1,s.d));let Ut=0,V=0;tt(e,(yt.x0+yt.x1)/2,(yt.y0+yt.y1)/2,s.ty,ct)&&(Ut=ct.tx-s.tx,V=ct.tz-s.tz);const ft=X()/(2*Math.max(1,s.d)*Rs),dt=.125*(yt.y1-yt.y0)*.5*X()/ft,gt=Math.cos(N),Tt=-Math.sin(N),Y=-Math.sin(N),ht=-Math.cos(N);let Pt=P-(s.tx+Ut),It=it-(s.tz+V);const Rt=Pt*gt+It*Tt,qt=Pt*Y+It*ht,Yt=dt/Math.sin(Ri),ne=Rt>dt?Rt-dt:Rt<-dt?Rt+dt:0,oe=qt>Yt?qt-Yt:qt<-Yt?qt+Yt:0;let le=s.tx+gt*ne+Y*oe,me=s.tz+Tt*ne+ht*oe,de=G;if(E&&E.cup){const Qt=E.cup,ge=Math.sqrt((Qt.x-h.x)*(Qt.x-h.x)+(Qt.z-h.z)*(Qt.z-h.z)),ce=df(15,6,ge);if(ce>0){const Ae=(h.x+Qt.x)/2-Ut,en=(h.z+Qt.z)/2-V;Pt=Qt.x-h.x,It=Qt.z-h.z;const Fe=Math.abs(Pt*gt+It*Tt)/2+2.5,nn=Math.abs(Pt*Y+It*ht)/2+2.5,We=t.aspect>0?t.aspect:16/9,hn=Math.max(.1,(yt.x1-yt.x0)/2),I=Math.max(.1,(yt.y1-yt.y0)/2),L=Math.max(Fe/(Rs*We*hn*.9),nn*Math.sin(Ri)/(Rs*I*.9));le+=(Ae-le)*ce,me+=(en-me)*ce,de=Math.min(Math.max(G,G+(L-G)*ce),Math.max(G,Ot()))}}s.tx=le,s.tz=me,s.ty=Z(h.x,h.z),s.d=de,Xt(s)}function Dt(W){if(!E)return;const G=E.bounds,nt=hf;W.tx=Math.min(G.maxx+nt,Math.max(G.minx-nt,on(W.tx,0))),W.tz=Math.min(G.maxz+nt,Math.max(G.minz-nt,on(W.tz,0))),W.d=Math.min(U(),Math.max(6,on(W.d,30)))}return rt(),wt}function P1(i){let t=2166136261;for(let n=0;n<i.length;n++)t^=i.charCodeAt(n),t=Math.imul(t,16777619)>>>0;let e=t||1;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const ee=i=>new ae(i),ve=(i,t)=>new ae(i.r*t,i.g*t,i.b*t),Do=(i,t,e)=>new ae(i.r+(t.r-i.r)*e,i.g+(t.g-i.g)*e,i.b+(t.b-i.b)*e);function Sn(i,t,e,n="after"){if(!i.includes(t))throw new Error("course shader: injection target missing: "+t);return i.replace(t,n==="after"?t+`
`+e:n==="replace"?e:e+`
`+t)}const zo=i=>{const t=new Float64Array(i.length*2);for(let e=0;e<i.length;e++)t[e*2]=i[e].x,t[e*2+1]=i[e].z;return t};function al(i,t,e){let n=!1;const s=i.length;for(let r=0,o=s-2;r<s;o=r,r+=2){const a=i[r],c=i[r+1],l=i[o],u=i[o+1];c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(n=!n)}return n}function pf(i,t,e,n,s){const r=i.length/2,o=t?r:r-1;let a=1/0;for(let c=0;c<o;c++){const l=(c+1)%r,u=i[c*2],h=i[c*2+1],d=i[l*2]-u,f=i[l*2+1]-h,g=d*d+f*f||1e-12;let x=((e-u)*d+(n-h)*f)/g;x=x<0?0:x>1?1:x;const m=u+d*x,p=h+f*x,_=(m-e)*(m-e)+(p-n)*(p-n);_<a&&(a=_,s.x=m,s.z=p,s.seg=c,s.t=x)}return s.d=Math.sqrt(a),s}function L1(i,t,e,n,s,r){const o=e-i,a=n-t,c=o*o+a*a||1e-12;let l=((s-i)*o+(r-t)*a)/c;l=l<0?0:l>1?1:l;const u=i+o*l-s,h=t+a*l-r;return Math.sqrt(u*u+h*h)}function nd(i,t=6){const e=Math.max(2,Math.ceil(Math.abs(i.to-i.from)/t)),n=[];for(let s=0;s<=e;s++){const r=(i.from+(i.to-i.from)*s/e)*Math.PI/180;n.push({x:i.x+Math.cos(r)*i.r,z:i.z-Math.sin(r)*i.r})}return n}function I1(i){const t=zo(i.ground),e=t.length/2;let n=0;for(let p=0;p<e;p++){const _=(p+1)%e;n+=t[p*2]*t[_*2+1]-t[_*2]*t[p*2+1]}const s=n>0?1:-1,r=new Float64Array(e*2),o=new Float64Array(e);for(let p=0;p<e;p++){const _=(p+1)%e,v=t[_*2]-t[p*2],M=t[_*2+1]-t[p*2+1],E=Math.hypot(v,M)||1e-9;o[p]=E,r[p*2]=s*M/E,r[p*2+1]=-s*v/E}const a=[];for(const p of i.walls)a.push({poly:zo(p.pts),closed:p.closed});for(const p of i.arcsRender||[])a.push({poly:zo(nd(p)),closed:!1});const c={d:0,x:0,z:0,seg:0,t:0},l=.25,u=new Int32Array(e+1),h=[];for(let p=0;p<e;p++){u[p]=h.length;const _=Math.max(1,Math.round(o[p]/l));for(let v=0;v<=_;v++){const M=v/_,E=t[p*2]+(t[(p+1)%e*2]-t[p*2])*M,A=t[p*2+1]+(t[(p+1)%e*2+1]-t[p*2+1])*M;let T=1/0;for(const w of a)pf(w.poly,w.closed,E,A,c),c.d<T&&(T=c.d);h.push(T<.3?1:0)}}u[e]=h.length;const d=Uint8Array.from(h);let f=!1,g=!1;for(let p=0;p<d.length;p++)d[p]?g=!0:f=!0;const x={d:0,x:0,z:0,seg:0,t:0};return{poly:t,apronW:f?.75:3,count:e,segN:r,segLen:o,anyOpen:f,anyWalled:g,inside:(p,_)=>al(t,p,_),nearest:(p,_,v=x)=>pf(t,!0,p,_,v),walled(p,_){const v=u[p],M=u[p+1]-1-v;return d[v+Math.round(_*M)]===1}}}const go=new J,xo=new J,vo=new J,an=new J,mf=new J,gf=new J;class D1{constructor(){this.pos=[],this.nor=[],this.col=[],this.leaf=[]}get triangles(){return this.pos.length/9}_v(t,e,n,s,r,o,a,c){this.pos.push(t,e,n),this.nor.push(s,r,o),this.col.push(a.r,a.g,a.b),this.leaf.push(c)}tri(t,e,n,s,r=0,o=null){go.set(t[0],t[1],t[2]),xo.set(e[0],e[1],e[2]),vo.set(n[0],n[1],n[2]),mf.subVectors(xo,go),gf.subVectors(vo,go),an.crossVectors(mf,gf);const a=an.length();if(a<1e-9)return;an.multiplyScalar(1/a);let c=go,l=xo,u=vo;o&&an.x*o[0]+an.y*o[1]+an.z*o[2]<0&&(l=vo,u=xo,an.negate()),this._v(c.x,c.y,c.z,an.x,an.y,an.z,s,r),this._v(l.x,l.y,l.z,an.x,an.y,an.z,s,r),this._v(u.x,u.y,u.z,an.x,an.y,an.z,s,r)}quad(t,e,n,s,r,o=0,a=null){this.tri(t,e,n,r,o,a),this.tri(t,n,s,r,o,a)}geo(t,e,{leaf:n=0,flat:s=!0,matrix:r=null}={}){const o=t.index?t.toNonIndexed():t;(s||!o.attributes.normal)&&o.computeVertexNormals();let a=o.attributes.position.array;const c=a.length/9,l=new Array(c);for(let h=0;h<c;h++){const d=h*9,f=a[d+3]-a[d],g=a[d+4]-a[d+1],x=a[d+5]-a[d+2],m=a[d+6]-a[d],p=a[d+7]-a[d+1],_=a[d+8]-a[d+2],v=g*_-x*p,M=x*m-f*_,E=f*p-g*m;if(v*v+M*M+E*E<1e-14){l[h]=null;continue}l[h]=e((a[d]+a[d+3]+a[d+6])/3,(a[d+1]+a[d+4]+a[d+7])/3,(a[d+2]+a[d+5]+a[d+8])/3,h)}r&&o.applyMatrix4(r),a=o.attributes.position.array;const u=o.attributes.normal.array;for(let h=0;h<c;h++){const d=l[h];if(!d)continue;const f=h*9;let g=!0;for(let x=0;x<9;x++)(!Number.isFinite(u[f+x])||!Number.isFinite(a[f+x]))&&(g=!1);if(g)for(let x=0;x<9;x+=3)this._v(a[f+x],a[f+x+1],a[f+x+2],u[f+x],u[f+x+1],u[f+x+2],d,n)}o!==t&&o.dispose(),t.dispose()}build(){const t=new Ve;return t.setAttribute("position",new _e(this.pos,3)),t.setAttribute("normal",new _e(this.nor,3)),t.setAttribute("color",new _e(this.col,3)),t.setAttribute("aLeaf",new _e(this.leaf,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const z1=new ye,xf=new fs,vf=new J,Xa=new J,U1=new J(0,1,0);function qe(i,t,e,n=0,s=1){return vf.set(i,t,e),xf.setFromAxisAngle(U1,n),Array.isArray(s)?Xa.set(s[0],s[1],s[2]):Xa.set(s,s,s),z1.compose(vf,xf,Xa).clone()}const N1={fairway:1,green:2,rough:3,sand:4,water:5,ice:6},F1=[1/16,4/16,6/16,4/16,1/16],_o=[0,1/4,2/4,1/4,0];function $i(i,t,e,n=F1){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=a+l<0?0:a+l>=t?t-1:a+l;c+=i[o*t+u]*n[l+2]}s[o*t+a]=c}for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=o+l<0?0:o+l>=e?e-1:o+l;c+=s[u*t+a]*n[l+2]}r[o*t+a]=c}return r}function O1(i,t,e,n){const r=new Float32Array(t*e);for(let a=0;a<r.length;a++)r[a]=i[a]?1e9:0;const o=Math.SQRT2;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c>0&&(u=Math.min(u,r[l-1]+1)),a>0&&(u=Math.min(u,r[l-t]+1),c>0&&(u=Math.min(u,r[l-t-1]+o)),c<t-1&&(u=Math.min(u,r[l-t+1]+o))),r[l]=u}for(let a=e-1;a>=0;a--)for(let c=t-1;c>=0;c--){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c<t-1&&(u=Math.min(u,r[l+1]+1)),a<e-1&&(u=Math.min(u,r[l+t]+1),c<t-1&&(u=Math.min(u,r[l+t+1]+o)),c>0&&(u=Math.min(u,r[l+t-1]+o))),r[l]=u}for(let a=0;a<r.length;a++)r[a]=r[a]>=1e9?50:r[a]>0?(r[a]-.5)*n:0;return r}function _f(i,t,e){const n=new Cl(i,t,e,Dn,Zn);return n.flipY=!1,n.magFilter=wn,n.minFilter=wn,n.generateMipmaps=!1,n.wrapS=di,n.wrapT=di,n.colorSpace=ui,n.needsUpdate=!0,n}function k1(i,t,e){const{cols:n,rows:s,cell:r,x0:o,z0:a,surface:c}=i.grid,l=n*s;let u=Uint8Array.from(c);for(let z=0;z<3;z++){const $=u;u=Uint8Array.from($);for(let j=0;j<s;j++)for(let rt=0;rt<n;rt++){const O=j*n+rt;if($[O]!==0)continue;const Q=rt>0&&$[O-1]||rt<n-1&&$[O+1]||j>0&&$[O-n]||j<s-1&&$[O+n]||0;u[O]=Q}}const h=new Float32Array(l),d=new Float32Array(l),f=new Float32Array(l),g=new Float32Array(l);let x=!1;const m=(z,$,j)=>{$===2?h[z]+=j:$===4?d[z]+=j:$===5&&(f[z]+=j),g[z]+=($===3?1:$===6?0:.5)*j},p=(i.zones||[]).map(z=>({code:N1[z.surface]||1,poly:zo(z.pts)})),_=t.poly,v=4;for(let z=0;z<s;z++)for(let $=0;$<n;$++){const j=z*n+$,rt=u[j];c[j]===5&&(x=!0);let O=!1;for(let H=-1;H<=1&&!O;H++){const tt=z+H;if(!(tt<0||tt>=s))for(let ut=-1;ut<=1;ut++){const Et=$+ut;if(Et>=0&&Et<n&&u[tt*n+Et]!==rt){O=!0;break}}}if(!O){m(j,rt,1);continue}const Q=o+$*r,mt=a+z*r;for(let H=0;H<v;H++)for(let tt=0;tt<v;tt++){const ut=Q+((H+.5)/v-.5)*r,Et=mt+((tt+.5)/v-.5)*r;let Ot=rt;if(al(_,ut,Et)){Ot=1;for(const st of p)al(st.poly,ut,Et)&&(Ot=st.code)}m(j,Ot,1/(v*v))}}const M=$i(h,n,s,_o),E=$i(d,n,s,_o),A=$i(f,n,s,_o),T=$i(g,n,s,_o),w=$i($i(h,n,s),n,s),b=new Uint8Array(l);for(let z=0;z<l;z++)b[z]=c[z]===5?1:0;const S=O1(b,n,s,r),C=new Float32Array(l),N=.55,B=(z,$,j,rt,O)=>{const Q=Math.max(0,Math.floor((z-o)/r)),mt=Math.min(n-1,Math.ceil(($-o)/r)),H=Math.max(0,Math.floor((j-a)/r)),tt=Math.min(s-1,Math.ceil((rt-a)/r));for(let ut=H;ut<=tt;ut++)for(let Et=Q;Et<=mt;Et++){const Ot=O(o+Et*r,a+ut*r),st=ut*n+Et;Ot>C[st]&&(C[st]=Ot)}};for(const z of e)if(z.r!==void 0){const $=z.r+N;B(z.x-$,z.x+$,z.z-$,z.z+$,(j,rt)=>{const O=Math.hypot(j-z.x,rt-z.z)-z.r;return O<0?1:Math.max(0,1-O/N)})}else{const $=z.hw+N;B(Math.min(z.ax,z.bx)-$,Math.max(z.ax,z.bx)+$,Math.min(z.az,z.bz)-$,Math.max(z.az,z.bz)+$,(j,rt)=>{const O=L1(z.ax,z.az,z.bx,z.bz,j,rt)-z.hw;return O<0?1:Math.max(0,1-O/N)})}const K=new Float32Array(l);if(t.anyOpen)for(let z=2;z<s-2;z++)for(let $=2;$<n-2;$++){const j=z*n+$;if(c[j]===0)continue;let rt=!1;for(let Q=-2;Q<=2&&!rt;Q++)for(let mt=-2;mt<=2;mt++)if(c[j+Q*n+mt]===0){rt=!0;break}if(!rt)continue;const O=t.nearest(o+$*r,a+z*r);O.d<.7&&!t.walled(O.seg,O.t)&&(K[j]=1)}if(t.anyOpen)for(let z=0;z<2;z++){const $=Float32Array.from(K);for(let j=1;j<s-1;j++)for(let rt=1;rt<n-1;rt++){const O=j*n+rt;c[O]!==0||$[O]||($[O-1]||$[O+1]||$[O-n]||$[O+n])&&(K[O]=1)}}const ot=t.anyOpen?$i(K,n,s):K,ct=new Uint8Array(l*4),vt=new Uint8Array(l*4),Z=z=>z<=0?0:z>=1?255:Math.round(z*255);for(let z=0;z<l;z++)ct[z*4]=Z(M[z]),ct[z*4+1]=Z(E[z]),ct[z*4+2]=Z(A[z]),ct[z*4+3]=Z(T[z]),vt[z*4]=Z(C[z]*C[z]*(3-2*C[z])),vt[z*4+1]=Z(S[z]/2.5),vt[z*4+2]=Z(ot[z]),vt[z*4+3]=Z(w[z]);const X=new Ie(o-r/2,a-r/2,1/(n*r),1/(s*r));return{mask:_f(ct,n,s),aux:_f(vt,n,s),waterDist:S,hasWater:x,xf:X}}const Xo=3,B1=.15,H1=.45,G1=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function V1(i,t,e,n,s=[],r=1){const{cols:o,rows:a,cell:c,x0:l,z0:u,surface:h}=i.grid,d=i.heightAt,f=2,g=c*f,x=Math.floor((o-1)/f)+1,m=Math.floor((a-1)/f)+1,p=x*m,_=new Uint8Array(p),v=new Float64Array(p),M=new Float64Array(p),E=new Float64Array(p),A=new Float32Array(p),T=new Uint8Array(p);for(let Y=0;Y<m;Y++)for(let ht=0;ht<x;ht++){const Pt=Y*x+ht,It=Y*f*o+ht*f,Rt=l+ht*g,qt=u+Y*g;_[Pt]=h[It]!==0?1:0;const Yt=t.nearest(Rt,qt);if(v[Pt]=Yt.x,M[Pt]=Yt.z,E[Pt]=Yt.d,A[Pt]=t.walled(Yt.seg,Yt.t)?t.apronW:0,e.hasWater){const ne=ht*f,oe=Y*f;t:for(let le=-3;le<=3;le++){const me=oe+le;if(!(me<0||me>=a))for(let de=-3;de<=3;de++){const Qt=ne+de;if(!(Qt<0||Qt>=o)&&h[me*o+Qt]===5){T[Pt]=1;break t}}}}}const w=[],b=[],S=[],C=[],N=[],B=[],K=[];let ot=0;const ct=(Y,ht,Pt,It,Rt,qt,Yt,ne,oe,le)=>(w.push(Y,ht,Pt),b.push(It,Rt,qt),S.push(Yt.r,Yt.g,Yt.b),C.push(ne,oe),N.push(le),ot++),vt=new ae(1,1,1),Z=.25,X=1,z=new Int32Array(p).fill(-1),$=[],j=Y=>{if(z[Y]>=0)return z[Y];const ht=Y%x,Pt=(Y-ht)/x;let It=l+ht*g,Rt=u+Pt*g;_[Y]||(It=v[Y],Rt=M[Y]);const qt=Pt*f*o+ht*f;let Yt=0;_[Y]&&h[qt]===5&&(Yt=H1*G1(0,1.6,e.waterDist[qt]));const ne=d(It,Rt),oe=(d(It+Z,Rt)-d(It-Z,Rt))/(2*Z),le=(d(It,Rt+Z)-d(It,Rt-Z))/(2*Z),me=(d(It+X,Rt)-d(It-X,Rt))/(2*X),de=(d(It,Rt+X)-d(It,Rt-X))/(2*X),Qt=Math.hypot(me,1,de),ge=ct(It,ne-Yt,Rt,-me/Qt,1/Qt,-de/Qt,vt,Yt>0?0:-oe,Yt>0?0:-le,0);return K[ge]=Yt>0?1:0,$[ge]=T[Y],z[Y]=ge,ge},rt=new Map,O=2097152,Q=(Y,ht,Pt)=>{const It=Y<ht?Y*O+ht:ht*O+Y,Rt=rt.get(It);Rt?Rt[0]++:rt.set(It,[1,Y,ht,Pt])},mt=[],H=[0,0],tt=(Y,ht,Pt,It)=>{const Rt=w[Y*3],qt=w[Y*3+2],Yt=(w[ht*3]-Rt)*(w[Pt*3+2]-qt)-(w[Pt*3]-Rt)*(w[ht*3+2]-qt);if(!(Math.abs(Yt)<1e-7)&&!(Yt<0&&(H[It?0:1]++,It))){if(Yt>0){const ne=ht;ht=Pt,Pt=ne}B.push(Y,ht,Pt),Q(Y,ht,Pt),Q(ht,Pt,Y),Q(Pt,Y,ht),It&&It.push(Y,ht,Pt)}},ut=(Y,ht,Pt,It,Rt,qt,Yt,ne,oe,le)=>{const me=Rt+qt+Yt+ne,de=me===1?!!(Rt||Yt):me===3?!!(Rt&&Yt):me===2?!(qt&&ne):!0,Qt=oe(Y),ge=oe(ht),ce=oe(Pt),Ae=oe(It);de?(tt(Qt,ge,ce,le),tt(Qt,ce,Ae,le)):(tt(Qt,ge,Ae,le),tt(ge,ce,Ae,le))};for(let Y=0;Y<m-1;Y++)for(let ht=0;ht<x-1;ht++){const Pt=Y*x+ht,It=Pt+1,Rt=Pt+x+1,qt=Pt+x;(_[Pt]||_[It]||_[Rt]||_[qt])&&ut(Pt,It,Rt,qt,_[Pt],_[It],_[Rt],_[qt],j,mt)}const Et=ot,Ot=new Map(rt);rt.clear();const st=Do(ee(n.rough),ee(n.hedge),.35),xt=new Int32Array(p).fill(-1),F=[],et={d:0,x:0,z:0,seg:0,t:0},Bt=1,Jt=(Y,ht)=>{const Pt=t.nearest(Y,ht,et);let It=t.walled(Pt.seg,Pt.t)?Pt.d-t.apronW:1/0;for(let Rt=0;Rt<s.length;Rt++){const qt=Math.hypot(Y-s[Rt].x,ht-s[Rt].z)-s[Rt].r,Yt=Math.max(Bt-Math.abs(It-qt),0)/Bt;It=Math.min(It,qt)-Yt*Yt*Bt*.25}return It},kt=new Float64Array(p);for(let Y=0;Y<p;Y++){if(_[Y])continue;if(E[Y]>t.apronW+.8&&!s.length){kt[Y]=1/0;continue}const ht=Y%x;kt[Y]=Jt(l+ht*g,u+(Y-ht)/x*g)}const Kt=new Float64Array(p);for(let Y=0;Y<p;Y++)Kt[Y]=Math.min(1e3,_[Y]?Math.max(E[Y],1e-4):Math.max(kt[Y],-E[Y]));const Xt=(Y,ht,Pt)=>{const It=t.nearest(Y,ht,et);let Rt=Y,qt=ht;Pt===0&&(Rt=It.x,qt=It.z);const Yt=Pt===0?0:Math.min(It.d,Xo),ne=d(It.x,It.z)-B1-.07*(Yt/Xo),oe=ct(Rt,ne,qt,0,1,0,vt,0,0,1);return F[oe]=Pt,oe},U=Y=>{if(xt[Y]<0){const ht=Y%x;xt[Y]=Xt(l+ht*g,u+(Y-ht)/x*g,1)}return xt[Y]},y=new Map,q=(Y,ht)=>{const Pt=Y<ht?Y*p+ht:ht*p+Y;let It=y.get(Pt);if(It!==void 0)return It;const Rt=Kt[Y]/(Kt[Y]-Kt[ht]),qt=Y%x,Yt=ht%x,ne=l+(qt+(Yt-qt)*Rt)*g,oe=u+((Y-qt)/x+((ht-Yt)/x-(Y-qt)/x)*Rt)*g,le=t.nearest(ne,oe,et),me=!t.inside(ne,oe)&&le.d<.12&&-le.d>=Jt(ne,oe)-.05;return It=Xt(ne,oe,me||t.inside(ne,oe)?0:2),y.set(Pt,It),It},at=[];if(t.anyWalled||s.length)for(let Y=0;Y<m-1;Y++)for(let ht=0;ht<x-1;ht++){const Pt=[Y*x+ht,Y*x+ht+1,(Y+1)*x+ht+1,(Y+1)*x+ht];if(Kt[Pt[0]]<0||Kt[Pt[1]]<0||Kt[Pt[2]]<0||Kt[Pt[3]]<0){at.length=0;for(let It=0;It<4;It++){const Rt=Pt[It],qt=Pt[It+1&3];Kt[Rt]<0&&at.push(U(Rt)),Kt[Rt]<0!=Kt[qt]<0&&at.push(q(Rt,qt))}for(let It=1;It<at.length-1;It++)tt(at[0],at[It],at[It+1],null)}}const bt=rt,wt=(Y,ht)=>{let Pt=(Y-l)/g,It=(ht-u)/g;if(Pt<0||It<0||Pt>=x-1||It>=m-1)return!1;const Rt=Math.floor(Pt),qt=Math.floor(It);Pt-=Rt,It-=qt;const Yt=qt*x+Rt,ne=Kt[Yt]+(Kt[Yt+1]-Kt[Yt])*Pt,oe=Kt[Yt+x]+(Kt[Yt+x+1]-Kt[Yt+x])*Pt;return ne+(oe-ne)*It<0};let Gt=1/0;for(let Y=1;Y<w.length;Y+=3)w[Y]<Gt&&(Gt=w[Y]);const Nt=Gt-1.6,Dt=new Float64Array(ot*2),W=Y=>{const[,ht,Pt,It]=Y,Rt=w[Pt*3]-w[ht*3],qt=w[Pt*3+2]-w[ht*3+2],Yt=Math.hypot(Rt,qt);if(Yt<.04)return null;let ne=qt/Yt,oe=-Rt/Yt;const le=(w[ht*3]+w[Pt*3])/2,me=(w[ht*3+2]+w[Pt*3+2])/2;return(w[It*3]-le)*ne+(w[It*3+2]-me)*oe>0&&(ne=-ne,oe=-oe),[ne*Yt,oe*Yt]},G=[];for(const Y of Ot.values()){if(Y[0]!==1)continue;const ht=W(Y);if(!ht)continue;const Pt=(w[Y[1]*3]+w[Y[2]*3])/2,It=(w[Y[1]*3+2]+w[Y[2]*3+2])/2,Rt=Math.hypot(ht[0],ht[1]),qt=!((t.anyWalled||s.length)&&wt(Pt+ht[0]/Rt*.3,It+ht[1]/Rt*.3));G.push([Y[1],Y[2],qt?1:0,0,ht]);for(const Yt of[Y[1],Y[2]])Dt[Yt*2]+=ht[0],Dt[Yt*2+1]+=ht[1]}for(const Y of bt.values()){if(Y[0]!==1||F[Y[1]]===0&&F[Y[2]]===0)continue;const ht=W(Y);if(ht){G.push([Y[1],Y[2],1,1,ht]);for(const Pt of[Y[1],Y[2]])Dt[Pt*2]+=ht[0],Dt[Pt*2+1]+=ht[1]}}const nt=ee(n.soilTop),Mt=Do(ee(n.soilBottom),ee(n.skyBottom),.22),lt=Do(nt,ee(n.soilBottom),.55),P=[ve(ee(n.rough),.95),ve(ee(n.rough),.7)],it=[ve(st,.95),ve(st,.7)],yt=[ee(pe.pinWhite),ve(ee(n.rough),.7)],Ut=[[0,0,.35,.94],[.07,-.06,.8,.6],[.09,-.16,1,.1],[.02,"mid",1,-.05],[-.15,"bot",.8,-.6]];for(const[Y,ht,Pt,It,Rt]of G){const qt=Math.hypot(Rt[0],Rt[1]),Yt=Rt[0]/qt,ne=Rt[1]/qt,oe=It?it:Pt?yt:P,le=[[],[]],me=Pt?Ut:[[0,0,1,0],[0,-.22,1,0]];[Y,ht].forEach((de,Qt)=>{let ge=Dt[de*2],ce=Dt[de*2+1];const Ae=Math.hypot(ge,ce);ge/=Ae||1,ce/=Ae||1,(!(Ae>1e-6)||ge*Yt+ce*ne<.5)&&(ge=Yt,ce=ne);const en=w[de*3],Fe=w[de*3+1],nn=w[de*3+2];for(let We=0;We<me.length;We++){const[hn,I,L,R]=me[We],k=I==="bot"?Nt:I==="mid"?Fe-.16+(Nt-(Fe-.16))*.5:Fe+I,D=Math.hypot(L,R),pt=Pt?We===0?oe[0]:We===1?oe[1]:We===2?nt:We===3?lt:Mt:nt;le[Qt].push(ct(en+ge*hn,k,nn+ce*hn,ge*L/D,R/D,ce*L/D,pt,0,0,2))}});for(let de=0;de<me.length-1;de++){const Qt=[le[0][de],le[1][de],le[1][de+1],le[0][de+1]],ge=w[Qt[0]*3],ce=w[Qt[0]*3+1],Ae=w[Qt[0]*3+2],en=w[Qt[1]*3]-ge,Fe=w[Qt[1]*3+1]-ce,nn=w[Qt[1]*3+2]-Ae,We=w[Qt[2]*3]-ge,hn=w[Qt[2]*3+1]-ce,I=w[Qt[2]*3+2]-Ae,L=Fe*I-nn*hn,R=en*hn-Fe*We,k=b[Qt[0]*3]+b[Qt[1]*3],D=b[Qt[0]*3+2]+b[Qt[1]*3+2];L*k+R*D>=0?B.push(Qt[0],Qt[1],Qt[2],Qt[0],Qt[2],Qt[3]):B.push(Qt[0],Qt[2],Qt[1],Qt[0],Qt[3],Qt[2])}}const V=new Ve;V.setAttribute("position",new _e(w,3)),V.setAttribute("normal",new _e(b,3)),V.setAttribute("color",new _e(S,3)),V.setAttribute("aFlow",new _e(C,2)),V.setAttribute("aMode",new _e(N,1)),V.setIndex(B),V.computeBoundingSphere(),V.computeBoundingBox();const{material:ft,uniforms:dt}=q1(e,n,st,r===0),gt=new De(V,ft);gt.name="course-terrain",gt.receiveShadow=!0,gt.userData.terrain={courseVerts:Et,lowered:Uint8Array.from(K),folds:H};const Tt=[];if(e.hasWater)for(let Y=0;Y<mt.length;Y+=3){const ht=mt[Y],Pt=mt[Y+1],It=mt[Y+2];($[ht]||$[Pt]||$[It])&&Tt.push(ht,Pt,It)}return{mesh:gt,uniforms:dt,waterTris:Tt,positions:w,minY:Gt,yBot:Nt}}const W1=`
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
`,X1=`
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
`;function q1(i,t,e,n){const s={uMask:{value:i.mask},uAux:{value:i.aux},uMaskXf:{value:i.xf},uTime:{value:0},uFlow:{value:0},uStripeW:{value:2.4},uGreenW:{value:.9},uContourStep:{value:.15},uDotCell:{value:1.6},uRough:{value:ee(t.rough)},uFairA:{value:ee(t.fairwayLight)},uFairB:{value:ee(t.fairwayDark)},uFringe:{value:ee(t.fringe)},uGreenA:{value:ee(t.greenLight)},uGreenB:{value:ee(t.greenDark)},uSand:{value:ee(t.sand)},uSandLip:{value:ee(t.sandLip)},uBed:{value:ee(t.pondBed)},uIce:{value:ee(t.ice)},uLine:{value:ee(pe.surfaceOutline)},uApron:{value:e},uKerbA:{value:ee(pe.pinWhite)},uKerbB:{value:ee(pe.pinBand)}},r=new ia({color:16777215,vertexColors:!0});return n&&(r.defines={EBG_LOW:""}),r.onBeforeCompile=o=>{Object.assign(o.uniforms,s);let a=o.vertexShader;a=Sn(a,"#include <common>",`attribute vec2 aFlow;
attribute float aMode;
varying vec3 vWPos;
varying vec2 vFlow;
varying float vMode;`),a=Sn(a,"#include <begin_vertex>",`vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vFlow = aFlow;
vMode = aMode;`),o.vertexShader=a;let c=o.fragmentShader;c=Sn(c,"#include <common>",W1),c=Sn(c,"#include <color_fragment>",X1),o.fragmentShader=c},r.customProgramCacheKey=()=>n?"ebg-terrain-v1-low":"ebg-terrain-v1",{material:r,uniforms:s}}const Y1=`
varying vec2 vXZ;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vXZ = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,K1=`
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
`;function j1(i,t,e,n){const s=t.waterTris;if(!e.hasWater||s.length===0)return null;const r=i.heightAt,o=t.positions,a=new Map,c=[],l=[];for(const g of s){let x=a.get(g);if(x===void 0){x=c.length/3;const m=o[g*3],p=o[g*3+2];c.push(m,r(m,p)+.03,p),a.set(g,x)}l.push(x)}const u=new Ve;u.setAttribute("position",new _e(c,3)),u.setIndex(l),u.computeBoundingSphere();const h={uMask:{value:e.mask},uAux:{value:e.aux},uMaskXf:{value:e.xf},uTime:{value:0},uLake:{value:i.round===2?1:0},uShallow:{value:ee(n.waterShallow)},uDeep:{value:ee(n.waterDeep)},uFoam:{value:ee(n.waterFoam)},uGlint:{value:ee(n.waterGlint)},uBand:{value:ee(n.hemiSky)}},d=new gn({uniforms:h,vertexShader:Y1,fragmentShader:K1,transparent:!0,depthWrite:!1}),f=new De(u,d);return f.name="course-water",f.renderOrder=1,{mesh:f,uniforms:h}}function $1(i,t,e){return i==="cushion"?(e=e||.42,t?{pts:[[-.2,-.3],[-.2,e-.12],[-.15,e-.03],[-.08,e],[.08,e],[.15,e-.03],[.2,e-.12],[.2,-.3]],roles:["nose","nose","nose","top","nose","nose","nose"],h:e}:{pts:[[0,-.3],[0,e-.12],[.05,e-.03],[.12,e],[.46,e],[.5,e-.05],[.53,e-.12],[.53,-.34]],roles:["nose","nose","nose","top","top","side","side"],h:e}):i==="hedge"?(e=e||.52,t?{pts:[[-.22,-.3],[-.22,e-.2],[-.17,e-.06],[-.08,e],[.08,e],[.17,e-.06],[.22,e-.2],[.22,-.3]],roles:Array(7).fill("hedge"),h:e}:{pts:[[0,-.3],[0,e-.2],[.05,e-.06],[.14,e],[.42,e],[.52,e-.08],[.56,e-.25],[.56,-.34]],roles:Array(7).fill("hedge"),h:e}):i==="bumper"?(e=e||.4,t?{pts:[[-.2,-.3],[-.2,e-.2],[-.16,e-.08],[-.09,e-.01],[-.04,e],[.04,e],[.09,e-.01],[.16,e-.08],[.2,e-.2],[.2,-.3]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}:{pts:[[0,-.3],[0,e-.2],[.04,e-.08],[.12,e-.01],[.21,e],[.31,e],[.4,e-.01],[.47,e-.08],[.5,e-.2],[.5,-.34]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}):(e=e||.4,t?{pts:[[-.18,-.3],[-.18,e-.05],[-.14,e],[.14,e],[.18,e-.05],[.18,-.3]],roles:["face","cap","cap","cap","face"],h:e}:{pts:[[0,-.3],[0,e-.05],[.04,e],[.46,e],[.5,e-.05],[.5,-.34]],roles:["face","cap","cap","cap","side"],h:e})}const Z1={cushion:.2,hedge:.22,bumper:.2,wall:.18};function J1(i,t,e,n,s){const r=i.heightAt,o=[],a=i.walls.map(l=>({kind:l.kind,pts:l.pts,closed:l.closed,h:l.h,border:l.border}));for(const l of i.arcsRender||[])a.push({kind:l.kind,pts:nd(l,6),closed:!1,h:void 0,border:!1});const c={nose:ee(n.cushionNose),top:ee(n.railTop),side:ee(n.railSide),sights:ee(n.railSights),hedge:ee(n.hedge),stone:ee(n.wallStone),pad:ee(s),stripe:ee(pe.pinWhite)};for(const l of a){const u=Q1.has(l.kind)?l.kind:"wall",h=tM(l.pts,l.closed);if(h.length<2)continue;const d=h.length,f=l.closed?d:d-1;let g=0,x=0;for(let X=0;X<f;X++){const z=h[X],$=h[(X+1)%d],j=$.x-z.x,rt=$.z-z.z,O=Math.hypot(j,rt);if(O<1e-6)continue;const Q=-rt/O,mt=j/O,H=(z.x+$.x)/2,tt=(z.z+$.z)/2,ut=t.inside(H+Q*.35,tt+mt*.35),Et=t.inside(H-Q*.35,tt-mt*.35);ut!==Et&&(g+=ut?-O:O),x+=O}const m=l.border||Math.abs(g)>x*.5,p=m?g>=0?1:-1:1,_=$1(u,!m,l.h),v=m?0:Z1[u];for(let X=0;X<f;X++){const z=h[X],$=h[(X+1)%d];o.push({ax:z.x,az:z.z,bx:$.x,bz:$.z,hw:v})}const M=[],E=[];for(let X=0;X<f;X++){const z=h[X],$=h[(X+1)%d],j=Math.hypot($.x-z.x,$.z-z.z);E.push([-($.z-z.z)/j,($.x-z.x)/j,j])}let A=0;const T=(X,z,$,j,rt)=>M.push({x:X,z,nx:$,nz:j,u:A,join:rt}),w=(X,z,$)=>{const j=Math.atan2(z[1],z[0]);let rt=Math.atan2($[1],$[0])-j;for(;rt>Math.PI;)rt-=2*Math.PI;for(;rt<-Math.PI;)rt+=2*Math.PI;const O=Math.max(1,Math.ceil(Math.abs(rt)/(Math.PI/9)));for(let Q=0;Q<=O;Q++){const mt=j+rt*Q/O;T(X.x,X.z,Math.cos(mt),Math.sin(mt),Q>0&&Q<O)}},b=(X,z,$,j)=>{for(let O=0;O<=6;O++){const Q=j?Math.PI-Math.PI*O/6:-Math.PI*O/6,mt=z[0]*Math.cos(Q)-$[0]*Math.sin(Q),H=z[1]*Math.cos(Q)-$[1]*Math.sin(Q);T(X.x,X.z,mt,H,O>0&&O<6)}},S=[];for(let X=0;X<f;X++){const z=h[X],$=h[(X+1)%d],[j,rt,O]=E[X],Q=[($.x-z.x)/O,($.z-z.z)/O];if(X===0&&!l.closed)m?T(z.x,z.z,j,rt,!1):b(z,[j,rt],Q,!0);else{const tt=E[(X-1+f)%f];w(z,[tt[0],tt[1]],[j,rt])}const mt=Math.max(1,Math.ceil(O/.5)),H=A;for(let tt=1;tt<mt;tt++)A=H+O*tt/mt,T(z.x+($.x-z.x)*(tt/mt),z.z+($.z-z.z)*(tt/mt),j,rt,!1);if(A=H+O,u==="cushion")for(let tt=Math.ceil((H+.4-1)/2)*2+1;tt<H+O-.4;tt+=2)S.push([z.x+Q[0]*(tt-H),z.z+Q[1]*(tt-H),j,rt,Q]);X===f-1&&!l.closed&&(m?T($.x,$.z,j,rt,!1):b($,[j,rt],Q,!1))}if(l.closed&&M.length){const X=M[0];M.push({...X,u:A})}const C=_.pts,N=(X,z,$)=>{const j=C[z][0]*p,rt=X.x+X.nx*j,O=X.z+X.nz*j,Q=C[z][1]>=0?X.hc+C[z][1]:r(rt,O)+C[z][1];return $[0]=rt,$[1]=Q,$[2]=O,$};for(const X of M)X.hc=r(X.x,X.z);let B=0,K=0;for(const X of C)B+=X[0],K+=X[1];B/=C.length,K/=C.length;const ot=[0,0,0],ct=[0,0,0],vt=[0,0,0],Z=[0,0,0];for(let X=0;X<M.length-1;X++){const z=M[X],$=M[X+1],j=(z.nx+$.nx)*.5,rt=(z.nz+$.nz)*.5,O=u==="wall"?Math.floor((z.u+$.u)*.5/1.2)%2?.95:1.04:1;for(let Q=0;Q<C.length-1;Q++){const mt=C[Q+1][0]-C[Q][0];let tt=C[Q+1][1]-C[Q][1],ut=-mt;const Et=(C[Q][0]+C[Q+1][0])/2-B,Ot=(C[Q][1]+C[Q+1][1])/2-K;tt*Et+ut*Ot<0&&(tt=-tt,ut=-ut);const st=[j*tt*p,ut,rt*tt*p],xt=_.roles[Q],F=Math.max(0,(C[Q][1]+C[Q+1][1])/2)/_.h,et=ut>.7?1:.72+.33*Math.min(1,F);let Bt,Jt=0;u==="cushion"?Bt=ve(xt==="nose"?c.nose:xt==="top"?c.top:c.side,et):u==="hedge"?(Bt=ve(c.hedge,.62+.46*Math.min(1,F)),Jt=1):u==="bumper"?Bt=ve(xt==="stripe"?c.stripe:c.pad,xt==="stripe"?1:et):Bt=ve(c.stone,(xt==="cap"?1:xt==="face"?.8*et:.66*et)*O),N(z,Q,ot),N($,Q,ct),N($,Q+1,vt),N(z,Q+1,Z),e.quad(ot,ct,vt,Z,Bt,Jt,st)}}if(!l.closed&&m&&M.length>=2)for(const[X,z]of[[M[0],M[1]],[M[M.length-1],M[M.length-2]]]){const $=[X.x-z.x,0,X.z-z.z],j=C.map((O,Q)=>N(X,Q,[0,0,0])),rt=u==="hedge"?ve(c.hedge,.8):u==="cushion"?c.side:u==="bumper"?c.pad:ve(c.stone,.75);for(let O=1;O<j.length-1;O++)e.tri(j[0],j[O],j[O+1],rt,u==="hedge"?1:0,$)}if(u==="cushion"){const X=m?.29:0;for(const[z,$,j,rt,O]of S){const Q=z+j*X*p,mt=$+rt*X*p,H=r(z,$)+_.h+.008,tt=.11,ut=.065,Et=[Q+O[0]*tt,H,mt+O[1]*tt],Ot=[Q-O[0]*tt,H,mt-O[1]*tt],st=[Q+j*ut,H,mt+rt*ut],xt=[Q-j*ut,H,mt-rt*ut];e.quad(Et,st,Ot,xt,c.sights,0,[0,1,0])}}}return o}const Q1=new Set(["cushion","hedge","bumper","wall"]);function tM(i,t){const e=[];for(const n of i){const s=e[e.length-1];(!s||Math.hypot(n.x-s.x,n.z-s.z)>1e-4)&&e.push({x:n.x,z:n.z})}if(t&&e.length>2){const n=e[0],s=e[e.length-1];Math.hypot(n.x-s.x,n.z-s.z)<1e-4&&e.pop()}return e}const eM=(i,t)=>new Zt(i,t),is=(i,t)=>new ta(i.map(([e,n])=>eM(e,n)),t),On=i=>i<0?0:i>1?1:i,nM=[16513779,16763196,16748467,15217199,10189792],iM=[0,0,-1],sM=[0,.866,.5];function rM(i){const t=[ee(i.hedge),Do(ee(i.hedge),ee(i.rough),.5),ve(ee(i.rough),1.05)];return{pal:i,greens:t,trunk:ve(ee(i.wood),.62),wood:ee(i.wood),woodDark:ve(ee(i.wood),.72),stone:ee(i.wallStone),soil:ve(ee(i.soilTop),.8),chalk:ee(pe.chalk),chalkTop:ee(14674423),white:ee(pe.pinWhite),red:ee(pe.pinBand),candy:ee(15022389),black:ee(pe.eightBody),water:ee(i.waterShallow),foam:ee(i.waterFoam),reeds:ee(i.reeds),cattail:ee(7029286),lily:ve(ee(i.rough),1.12),flowers:nM.map(ee)}}function oM(i,t,e,n,s,r,o){const{x:a,z:c,r:l}=n,u=n.kind||"post";if(u==="bumper"){const d=o[r%o.length],f=ee(pe.poolBalls[(d-1)%8]),g=is([[l+.02,-.3],[l,0],[l,.13],[l,.27],[l,.36],[l*.95+0,.45],[l*.84,.5],[0,.5]],28);i.geo(g,(x,m)=>m>.13&&m<.27?e.white:ve(f,m>.4?1.05:.8+.25*On(m/.36)),{matrix:qe(a,s,c)}),t.disc([a,s+.503,c],[0,1,0],iM,Math.min(l*.56,.48),d);return}if(u==="tree"){const d=is([[l+.02,-.3],[l,.28],[l-.04,.33],[l-.15,.33],[l-.18,.2],[0,.2]],32);i.geo(d,(M,E,A)=>Math.hypot(M,A)<l-.17&&E<.25?e.soil:ve(e.stone,E>.3?1:.68+.3*On(E/.28)),{matrix:qe(a,s,c)});const f=Math.max(.55,l*.9),g=.75+f*.82,x=Math.min(.32,.08+l*.07),m=new Hn(x*.8,x,g,8);m.translate(0,g/2,0),i.geo(m,()=>e.trunk,{matrix:qe(a,s,c)});const p=e.greens[r%3],_=new gi(f,18,12);i.geo(_,(M,E)=>ve(p,.66+.42*On((E+f)/(2*f))),{leaf:1,flat:!1,matrix:qe(a,s+g,c,0,[1,.8,1])});const v=new gi(f*.5,14,10);i.geo(v,(M,E)=>ve(p,.85+.3*On((E+f*.5)/f)),{leaf:1,flat:!1,matrix:qe(a-f*.08,s+g+f*.72,c-f*.05,0,[1,.85,1])});return}if(u==="lollipop"){const d=[[l+.02,-.3]];for(let m=0;m<=5;m++)d.push([l,m*.1]);d.push([l*.9,.58],[0,.58]),i.geo(is(d,24),(m,p,_)=>p>.52?e.white:((Math.atan2(_,m)/(Math.PI*2)*2+p*1.8)%1+1)%1<.5?e.candy:e.white,{matrix:qe(a,s,c)});const f=new Hn(.045,.045,.6,6);f.translate(0,.86,0),i.geo(f,()=>e.white,{matrix:qe(a,s,c)});const g=Math.min(.5,Math.max(.3,l*.75)),x=new gi(g,16,10);i.geo(x,(m,p,_)=>(Math.atan2(_,m)/(Math.PI*2)*3+p/g*.9+2)%1<.5?e.candy:e.white,{matrix:qe(a,s+1.16+g*.8,c,0,[1,.85,1])});return}if(l>=1){const d=is([[l+.02,-.3],[l,.42],[l-.08,.62],[l-.25,.72],[l*.5,.76],[0,.76]],32),f=e.greens[0];i.geo(d,(g,x)=>ve(f,.62+.46*On(x/.76)),{leaf:1,flat:!1,matrix:qe(a,s,c)});return}const h=is([[l+.02,-.3],[l,0],[l,.5],[l-Math.min(.07,l*.2),.57],[0,.57]],20);i.geo(h,(d,f)=>f>.515?e.chalkTop:ve(e.chalk,.74+.3*On(f/.5)),{matrix:qe(a,s,c)})}function id(i,t,e,n,s,r,o,a=0){const c=qe(e,n,s,a,r),l=.8,u=new Hn(.08,.13,l+.3,6);u.translate(0,l/2-.15,0),i.geo(u,()=>t.trunk,{matrix:c});const h=t.greens[Math.floor(o()*3)],d=[[0,l+.5,0,.62],[.36,l+.3,.12,.42],[-.34,l+.34,-.12,.44],[.06,l+.95,-.04,.4]];for(const[f,g,x,m]of d){const p=new $s(m*(.92+o()*.16),1);p.translate(f,g,x),i.geo(p,(_,v)=>ve(h,.66+.46*On((v-l)/1.35)),{leaf:1,matrix:c})}}function cl(i,t,e,n,s,r,o,a=0){const c=qe(e,n,s,a,r),l=t.greens[Math.floor(o()*3)],u=2+Math.floor(o()*2);for(let h=0;h<u;h++){const d=h/u*Math.PI*2+o(),f=.3+o()*.12,g=new $s(f,1);g.scale(1,.85,1),g.translate(Math.cos(d)*.22,f*.75,Math.sin(d)*.22),i.geo(g,(x,m)=>ve(l,.68+.5*On(m/.75)),{leaf:1,matrix:c})}}function sd(i,t,e,n,s,r,o,a=0){const c=qe(e,n,s,a,r),l=5+Math.floor(o()*3),u=Math.floor(o()*t.flowers.length),h=ve(t.greens[1],.85);for(let d=0;d<l;d++){const f=o()*Math.PI*2,g=Math.sqrt(o())*.42,x=.18+o()*.16,m=Math.cos(f)*g,p=Math.sin(f)*g,_=new Hn(.015,.018,x,3);_.translate(m,x/2,p),i.geo(_,()=>h,{matrix:c});const v=new Dr(.075+o()*.025);v.scale(1,.6,1),v.translate(m,x+.02,p);const M=t.flowers[(u+(o()<.7?0:1+Math.floor(o()*3)))%t.flowers.length];i.geo(v,()=>M,{matrix:c})}for(let d=0;d<2;d++){const f=new ea(.09,.2,4);f.translate((o()-.5)*.4,.1,(o()-.5)*.4),i.geo(f,()=>t.greens[2],{leaf:.5,matrix:c})}}const aM=(i,t,e,n)=>((Math.atan2(e,t)/(Math.PI*2)+Math.hypot(t,e)/n*1.4)%1+1)%1<.5?i.candy:i.white;function cM(i,t,e,n,s,r){const o=qe(e,n,s,0,r),a=new Hn(.05,.05,1.7,6);a.translate(0,.85,0),i.geo(a,()=>t.white,{matrix:o});const c=.58,l=new gi(c,24,12);l.scale(1,1,.3);const u=new ye().makeRotationX(-Math.PI/6),h=l.applyMatrix4(u),d=new ye().copy(u).invert(),f=new J;h.translate(0,1.7+c*.8,0),i.geo(h,(g,x,m)=>(f.set(g,x-1.7-c*.8,m).applyMatrix4(d),Math.abs(f.z)>.1&&Math.hypot(f.x,f.y)<c*.97?aM(t,f.x,f.y,c):t.white),{matrix:o})}function lM(i,t,e,n,s,r,o){const a=qe(n,s,r,0,o),c=new Bn(1.7,.6,1.7);c.translate(0,.2,0),i.geo(c,(x,m)=>ve(e.stone,m>.45?1:.72),{matrix:a});const l=new Bn(1.9,.14,1.9);l.translate(0,.5,0),i.geo(l,(x,m)=>ve(e.stone,m>.55?1.05:.8),{matrix:a});const u=.95,h=new gi(u,28,18);h.translate(0,.57+u*.96,0),i.geo(h,()=>e.black,{flat:!1,matrix:a});const d=[n,s+(.57+u*.96)*o,r],f=sM,g=u*o;t.disc([d[0]+f[0]*g,d[1]+f[1]*g,d[2]+f[2]*g],f,[0,.5,-.866],u*.46*o,8,{c:d,r:g+.006})}function uM(i,t,e,n,s,r,o){const a=qe(e,n,s,0,r);if(!o){const h=is([[1.3,-.3],[1.3,.42],[1.22,.5],[1.1,.5],[1.06,.42],[1.04,.3],[0,.3]],32);i.geo(h,(f,g,x)=>Math.hypot(f,x)<1.03&&g<.35?t.water:ve(t.stone,g>.45?1:.7+.25*On(g/.42)),{matrix:a});const d=new Dl(1.04,28);d.rotateX(-Math.PI/2),d.translate(0,.37,0),i.geo(d,(f,g,x)=>Math.hypot(f,x)>.86?t.foam:t.water,{matrix:a})}const c=is([[.22,o?-.5:.3],[.16,.5],[.13,.95],[.5,1.05],[.52,1.14],[.12,1.16],[0,1.16]],16);i.geo(c,(h,d)=>ve(t.stone,d>1?1:.78),{matrix:a});const l=new $s(.2,1);l.scale(1,1.5,1),l.translate(0,1.42,0),i.geo(l,(h,d)=>d>1.45?t.white:t.foam,{matrix:a});const u=6;for(let h=0;h<u;h++){const d=h/u*Math.PI*2,f=new $s(.07,0);f.translate(Math.cos(d)*.62,1,Math.sin(d)*.62),i.geo(f,()=>t.foam,{matrix:a})}}function fM(i,t,e,n,s,r,o,a){const c=(r||.7)*o,l=.6,u=18,h=a()*Math.PI*2,d=t.lily,f=ve(t.lily,.78);for(let g=0;g<u;g++){const x=h+l/2+(Math.PI*2-l)*g/u,m=h+l/2+(Math.PI*2-l)*(g+1)/u,p=[e+Math.cos(x)*c,n,s+Math.sin(x)*c],_=[e+Math.cos(m)*c,n,s+Math.sin(m)*c],v=[e+Math.cos(x)*c*.82,n+.01,s+Math.sin(x)*c*.82],M=[e+Math.cos(m)*c*.82,n+.01,s+Math.sin(m)*c*.82];i.tri([e,n+.015,s],v,M,d,0,[0,1,0]),i.quad(v,p,_,M,f,0,[0,1,0])}if(a()<.4){const g=new Dr(.16*o);g.scale(1,.7,1),g.translate(e+Math.cos(h+Math.PI)*c*.3,n+.1,s+Math.sin(h+Math.PI)*c*.3),i.geo(g,()=>t.flowers[2])}}function hM(i,t,e,n,s,r,o){const a=qe(e,n,s,o()*6.28,r),c=7;for(let l=0;l<c;l++){const u=l/c*Math.PI*2+o(),h=.1+o()*.3,d=.8+o()*.5,f=new Hn(.012,.035,d,3);if(f.translate(0,d/2-.2,0),f.rotateZ((o()-.5)*.25),f.translate(Math.cos(u)*h,0,Math.sin(u)*h),i.geo(f,(g,x)=>ve(t.reeds,.75+.35*On(x/d)),{matrix:a}),l%2===0){const g=new Il(.05,.18,2,6);g.translate(Math.cos(u)*h,d-.3,Math.sin(u)*h),i.geo(g,()=>t.cattail,{matrix:a})}}}function dM(i,t,e,n,s,r,o,a){const c=qe(e,n,s,o,r),l=new Bn(1.6,.42,.55);l.translate(0,.11,0),i.geo(l,(d,f)=>f>.3?t.soil:ve(t.wood,.7+.3*On((f+.1)/.4)),{matrix:c});const u=new Bn(1.7,.06,.65);u.translate(0,.33,0),i.geo(u,()=>t.wood,{matrix:c});const h=6;for(let d=0;d<h;d++){const f=-.65+1.3*d/(h-1),g=.12+a()*.1,x=new Dr(.09);x.scale(1,.65,1),x.translate(f,.36+g,(a()-.5)*.2),i.geo(x,()=>t.flowers[(d+Math.floor(a()*2))%t.flowers.length],{matrix:c});const m=new ea(.08,g+.05,4);m.translate(f,.36+g/2,0),i.geo(m,()=>t.greens[1],{leaf:.5,matrix:c})}}function pM(i,t,e,n){const s=2*(n.r||3),r=4*(n.scale||1),o=(n.rot||0)*Math.PI/180,a=Math.cos(o),c=-Math.sin(o),l=-c,u=a,h=Math.max(2,Math.round(s/.34)),d=s/h,f=(g,x,m)=>{const p=n.x+a*g+l*x,_=n.z+c*g+u*x;return[p,e(p,_)+m,_]};for(let g=0;g<h;g++){const x=-s/2+g*d+.025,m=x+d-.05,p=ve(t.wood,g%2?.92:1.04),_=r/2+(g%3===0?.06:0),v=f(x,-_,.03),M=f(m,-_,.03),E=f(m,_,.03),A=f(x,_,.03);i.quad(v,M,E,A,p,0,[0,1,0]);const T=f(x,-_,-.1),w=f(m,-_,-.1),b=f(m,_,-.1),S=f(x,_,-.1),C=ve(p,.66);i.quad(v,T,w,M,C,0,[-l,0,-u]),i.quad(E,b,S,A,C,0,[l,0,u]),i.quad(M,w,b,E,C,0,[a,0,c]),i.quad(A,S,T,v,C,0,[-a,0,-c])}for(const g of[-1,1])for(const x of[-1,1]){const[m,p,_]=f(x*(s/2-.15),g*(r/2+.2),0),v=new Hn(.1,.12,.7,8);v.translate(0,.1,0),i.geo(v,(M,E)=>ve(t.wood,E>.4?1:.7),{matrix:qe(m,p,_)})}}function mM(i,t,e,n,s,r,o,a){const c=qe(n,s,r,0,o),l=new Bn(.14,1.2,.14);l.translate(0,.45,0),i.geo(l,()=>e.woodDark,{matrix:c});const u=new Bn(1.2,.75,.1);u.rotateX(-.5),u.translate(0,1.15,.04),i.geo(u,(f,g,x)=>ve(e.wood,x>.05?1.05:.75),{matrix:c});const h=[0,Math.sin(.5),Math.cos(.5)],d=[0,Math.cos(.5),-Math.sin(.5)];t.disc([n,s+1.15*o+h[1]*.056*o,r+.04*o+h[2]*.056*o],h,d,.3*o,a)}function rd(i,t,e){for(let n=0;n<=3.4;n+=.4)if(i.inside(t,e-n)||i.inside(t+n,e)||i.inside(t-.9,e-n)||i.inside(t+.9,e-n))return!1;return!0}function od(i,t,e,n){const s=i.heightAt;if(t.inside(e,n))return s(e,n);const r=t.nearest(e,n),o=Math.min(r.d,Xo);return s(r.x,r.z)-.15-.07*(o/Xo)}function gM(i,t,e,n,s,r){const o=i.heightAt,a=i.hole&&i.hole.number||1;for(const c of i.props||[]){const l=c.scale||1,u=(c.rot||0)*Math.PI/180,h=i.surfaceAt(c.x,c.z)==="water",d=od(i,t,c.x,c.z);switch(c.type){case"tree":t.nearest(c.x,c.z).d<3&&!rd(t,c.x,c.z)?cl(e,s,c.x,d,c.z,1.2*l,r,u):id(e,s,c.x,d,c.z,l*(c.r?c.r/.9:1),r,u);break;case"bush":cl(e,s,c.x,d,c.z,l*(c.r?c.r/.55:1),r,u);break;case"flowers":sd(e,s,c.x,d,c.z,l*(c.r?c.r/.45:1),r,u);break;case"lollipop":cM(e,s,c.x,d,c.z,l);break;case"statue8":lM(e,n,s,c.x,d,c.z,l);break;case"fountain":uM(e,s,c.x,h?d-.3:d,c.z,l,h);break;case"lilypad":fM(e,s,c.x,o(c.x,c.z)+.05,c.z,c.r,l,r);break;case"reeds":hM(e,s,c.x,h?o(c.x,c.z)-.25:d,c.z,l,r);break;case"flowerbox":dM(e,s,c.x,d,c.z,l,u,r);break;case"bridge":pM(e,s,o,c);break;case"sign":mM(e,n,s,c.x,d,c.z,l,a);break}}}const xM={tree:1.3,bush:.9,flowers:.8,lollipop:.9,statue8:1.5,fountain:1.6,sign:.9,flowerbox:1.1,reeds:.7};function vM(i,t){const e=[];for(const n of i.props||[]){const s=xM[n.type];if(!s||t.inside(n.x,n.z))continue;const r=s*(n.scale||1)+.6,o=t.nearest(n.x,n.z);t.walled(o.seg,o.t)&&o.d+r<=t.apronW-.1||e.push({x:n.x,z:n.z,r})}return e}function _M(i,t,e,n,s){if(!t.anyWalled||t.apronW<2)return 0;const r=[];for(const u of i.props||[])r.push([u.x,u.z,1.6]);for(const u of i.posts||[])r.push([u.x,u.z,u.r+1]);const o=(u,h,d)=>{for(const[f,g,x]of r)if(Math.hypot(f-u,g-h)<x+d)return!1;return!0},a=t.poly,c=t.count;let l=0;for(let u=0;u<c;u++){const h=a[u*2],d=a[u*2+1],f=a[(u+1)%c*2],g=a[(u+1)%c*2+1],x=t.segLen[u],m=t.segN[u*2],p=t.segN[u*2+1];for(let _=s()*1.2;_<x;_+=1.25+s()*.9){const v=_/x;if(!t.walled(u,v))continue;const M=1+s()*1.55,E=h+(f-h)*v+m*M,A=d+(g-d)*v+p*M;if(t.inside(E,A))continue;const T=t.nearest(E,A);if(T.d<.95||T.d>t.apronW-.35||!t.walled(T.seg,T.t))continue;const w=s(),b=od(i,t,E,A);if(w<.3&&T.d>1.55&&rd(t,E,A)&&o(E,A,1))id(e,n,E,b,A,.85+s()*.3,s,s()*6.28),r.push([E,A,1]);else if(w<.66&&o(E,A,.6))cl(e,n,E,b,A,.8+s()*.4,s,s()*6.28),r.push([E,A,.6]);else if(o(E,A,.45))sd(e,n,E,b,A,.9+s()*.3,s,s()*6.28),r.push([E,A,.45]);else continue;l++}}return l}const fi=8,br=4,ss=128;let Ln=null;const Mf=i=>"#"+i.toString(16).padStart(6,"0");function yf(i){const t=i.getContext("2d");t.clearRect(0,0,i.width,i.height);for(let e=0;e<fi*br;e++){const n=e%fi*ss+ss/2,s=Math.floor(e/fi)*ss+ss/2;t.fillStyle=Mf(pe.flagDisc),t.beginPath(),t.arc(n,s,ss*.47,0,Math.PI*2),t.fill();const r=String(e+1);t.fillStyle=Mf(pe.eightInk),t.font=`${r.length>1?66:82}px "Lilita One", "Arial Black", "Arial Rounded MT Bold", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,n,s+5)}}function ad(){if(Ln)return Ln;if(typeof document>"u")return Ln=new Cl(new Uint8Array([255,255,255,255]),1,1),Ln.colorSpace=Qe,Ln.needsUpdate=!0,Ln;const i=document.createElement("canvas");return i.width=fi*ss,i.height=br*ss,yf(i),Ln=new Rl(i),Ln.colorSpace=Qe,Ln.anisotropy=4,document.fonts&&document.fonts.load&&document.fonts.load('80px "Lilita One"').then(()=>{yf(i),Ln.needsUpdate=!0}).catch(()=>{}),Ln}const MM=i=>i!==null&&i===Ln;function cd(i){const t=Math.max(0,Math.min(fi*br-1,(i|0)-1)),e=t%fi,n=Math.floor(t/fi);return[e/fi,1-(n+1)/br,1/fi,1/br]}const qa=new J,Mo=new J,Ps=new J,Pi=new J;class yM{constructor(){this.pos=[],this.nor=[],this.uv=[]}get count(){return this.pos.length/9}disc(t,e,n,s,r,o=null){Ps.set(e[0],e[1],e[2]).normalize(),Mo.set(n[0],n[1],n[2]),qa.crossVectors(Mo,Ps).normalize(),Mo.crossVectors(Ps,qa).normalize();const[a,c,l,u]=cd(r),h=24,d=[];for(let g=0;g<=h;g++){const x=g/h*Math.PI*2;d.push(Math.cos(x),Math.sin(x))}const f=(g,x)=>{Pi.set(t[0],t[1],t[2]).addScaledVector(qa,g*s).addScaledVector(Mo,x*s);let m=Ps.x,p=Ps.y,_=Ps.z;if(o){const v=Pi.x-o.c[0],M=Pi.y-o.c[1],E=Pi.z-o.c[2],A=Math.hypot(v,M,E)||1;m=v/A,p=M/A,_=E/A,Pi.set(o.c[0]+m*o.r,o.c[1]+p*o.r,o.c[2]+_*o.r)}this.pos.push(Pi.x,Pi.y,Pi.z),this.nor.push(m,p,_),this.uv.push(a+(.5+.47*g)*l,c+(.5+.47*x)*u)};for(let g=0;g<h;g++){const x=d[g*2],m=d[g*2+1],p=d[g*2+2],_=d[g*2+3];f(0,0),f(x*.5,m*.5),f(p*.5,_*.5),f(x*.5,m*.5),f(x,m),f(p,_),f(x*.5,m*.5),f(p,_),f(p*.5,_*.5)}}build(){const t=new Ve;return t.setAttribute("position",new _e(this.pos,3)),t.setAttribute("normal",new _e(this.nor,3)),t.setAttribute("uv",new _e(this.uv,2)),t.computeBoundingSphere(),t}}const mr=3,Ls=1.7,Ya=1.06;function SM(i,t,e,n){const s=new Hn(.07,.075,mr+.7,8,16);s.translate(0,(mr+.7)/2-.7,0);const r=ee(pe.pinWhite),o=ee(pe.pinBand),a=mr/8;i.geo(s,(l,u)=>u>0&&Math.floor(u/a)%2===1?o:r,{flat:!1,matrix:new ye().makeTranslation(t,e,n)});const c=new gi(.09,10,8);c.translate(t,e+mr+.05,n),i.geo(c,()=>r,{flat:!1})}const bM=`
uniform float uTime;
uniform float uAmp;
float ebgWave(float x) { return sin(x * 3.2 - uTime * 6.5) * 0.5 + sin(x * 5.3 - uTime * 10.0 + 1.3) * 0.2; }
float ebgWaveD(float x) { return cos(x * 3.2 - uTime * 6.5) * 1.6 + cos(x * 5.3 - uTime * 10.0 + 1.3) * 1.06; }
`,wM=`
uniform vec4 uCell;
uniform vec2 uDiscC;
uniform vec2 uDiscS;
uniform vec3 uCloth;
`,EM=`
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
`;function AM(i){const t=new os;t.name="course-flag";const e=new ds(Ls,Ya,14,3);e.translate(Ls/2+.05,mr-Ya/2-.06,0);const n=ad(),s=.78,r={uTime:{value:0},uAmp:{value:1},uCell:{value:new Ie(...cd(i))},uDiscC:{value:new Zt(.56,.5)},uDiscS:{value:new Zt(s/Ls,s/Ya)},uCloth:{value:ee(pe.flagCloth)}},o=new ia({color:16777215,map:n,side:yn});o.onBeforeCompile=c=>{Object.assign(c.uniforms,r);let l=c.vertexShader;l=Sn(l,"#include <common>",bM),l=Sn(l,"#include <beginnormal_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ls.toFixed(3)}, 0.0, 1.0);
  float dz = (ebgWaveD(position.x) * kk + ebgWave(position.x) / ${Ls.toFixed(3)}) * 0.18 * uAmp;
  objectNormal = normalize(vec3(-dz, 0.0, 1.0));
}`),l=Sn(l,"#include <begin_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ls.toFixed(3)}, 0.0, 1.0);
  transformed.z += ebgWave(position.x) * 0.18 * uAmp * kk;
  transformed.y -= kk * kk * 0.08;
}`),c.vertexShader=l;let u=c.fragmentShader;u=Sn(u,"#include <common>",wM),u=Sn(u,"#include <map_fragment>",EM,"replace"),c.fragmentShader=u},o.customProgramCacheKey=()=>"ebg-flag-v1";const a=new De(e,o);return a.name="course-flag-cloth",t.add(a),{group:t,uniforms:r,cloth:a}}const TM=`
varying vec2 vLocal;
void main() {
  vLocal = position.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,CM=`
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
`;function RM(i,t,e,n,s){const r=[0,.3,.6,.8,n*.86,n,n+.15,n+.35,n+s,n+s+.3,n*1.05+1.55],o=40,a=[],c=[];for(let M=0;M<r.length;M++){const E=M===0?1:o;for(let A=0;A<E;A++){const T=A/o*Math.PI*2,w=Math.cos(T)*r[M],b=Math.sin(T)*r[M];a.push(w,i(t+w,e+b)+.012,b)}}const l=M=>M===0?0:1+(M-1)*o;for(let M=0;M<o;M++)c.push(0,l(1)+(M+1)%o,l(1)+M);for(let M=1;M<r.length-1;M++){const E=l(M),A=l(M+1);for(let T=0;T<o;T++){const w=(T+1)%o;c.push(E+T,E+w,A+w,E+T,A+w,A+T)}}const u=new Ve;u.setAttribute("position",new _e(a,3)),u.setIndex(c);const h=u.attributes.position,d=c.slice(0,3),f=h.getX(d[1])-h.getX(d[0]),g=h.getZ(d[1])-h.getZ(d[0]),x=h.getX(d[2])-h.getX(d[0]),m=h.getZ(d[2])-h.getZ(d[0]);if(g*x-f*m<0){for(let M=0;M<c.length;M+=3){const E=c[M+1];c[M+1]=c[M+2],c[M+2]=E}u.setIndex(c)}u.computeBoundingSphere();const p={uR:{value:n},uLip:{value:n+s},uTime:{value:0},uLightDir:{value:new Zt(-.7071,-.7071)},uInside:{value:ee(pe.cupInside)},uLiner:{value:ee(pe.cupLiner)},uHalo:{value:ee(pe.blobShadow)}},_=new gn({uniforms:p,vertexShader:TM,fragmentShader:CM,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),v=new De(u,_);return v.name="course-cup",v.position.set(t,0,e),v.renderOrder=2,{mesh:v,uniforms:p}}const PM=.3,LM=.3,IM=1e3;function ld(i,t){const e=ed(t.round),n=t.heightAt,s=P1(String(t.id||"hole")),r=new os;r.name="course";const o=I1(t),a=rM(e),c=new D1,l=new yM,u=9+Math.floor(s()*7),h=9+(u-9+2+Math.floor(s()*4))%7,d=[u,h],f=J1(t,o,c,e,pe.poolBalls[(u-1)%8]);let g=0;t.posts.forEach((z,$)=>{const j=z.kind||"post";oM(c,l,a,z,n(z.x,z.z),j==="bumper"?g++:$,d),f.push({x:z.x,z:z.z,r:z.r})});const x=k1(t,o,f),m=V1(t,o,x,e,vM(t,o),i?i.tier:1);r.add(m.mesh);const p=j1(t,m,x,e);p&&r.add(p.mesh),gM(t,o,c,l,a,s);const _=_M(t,o,c,a,s),v=t.cup.x,M=t.cup.z,E=n(v,M);SM(c,v,E,M);const A=RM(n,v,M,Wt.HOLE_R,Wt.LIP_W);r.add(A.mesh);const T=AM(t.hole&&t.hole.number||1);T.group.position.set(v,E,M),r.add(T.group);const w=new De(c.build(),zM());w.name="course-solids",w.castShadow=!0,w.receiveShadow=!0,r.add(w);let b=null;l.count>0&&(b=new De(l.build(),new ia({map:ad()})),b.name="course-labels",b.receiveShadow=!0,r.add(b)),r.userData.stats={decor:_},i&&i.scene&&i.scene.add(r),i&&i.renderer&&i.renderer.shadowMap&&(i.renderer.shadowMap.needsUpdate=!0);let S=0,C=0,N=0,B=!1;const K=m.uniforms;function ot(z,$){if(B)return;const j=$%IM,rt=z/PM;C+=Math.max(-rt,Math.min(rt,S-C)),K.uTime.value=j,K.uFlow.value=C*C*(3-2*C),p&&(p.uniforms.uTime.value=j),A.uniforms.uTime.value=j,T.uniforms.uTime.value=j,N>0&&(N=Math.max(0,N-z)),T.uniforms.uAmp.value=1+Math.min(1,N/.08)}function ct(z){S=z>1?1:z>0?z:0}function vt(){N=LM}function Z(z){if(!z||!z.position)return;const $=z.position.x-v,j=z.position.z-M;if($*$+j*j<1e-8)return;const rt=Math.atan2($,j);T.group.rotation.y=rt;const O=rt+225*Math.PI/180;A.uniforms.uLightDir.value.set(Math.sin(O),Math.cos(O))}function X(){B||(B=!0,r.removeFromParent(),r.traverse(z=>{if(!z.isMesh)return;z.geometry.dispose();const $=Array.isArray(z.material)?z.material:[z.material];for(const j of $)j.map&&!MM(j.map)&&j.map.dispose(),j.dispose()}),x.mask.dispose(),x.aux.dispose())}return i&&i.camera&&Z(i.camera),{group:r,update:ot,setFlow:ct,wiggleFlag:vt,faceCamera:Z,dispose:X}}const DM=`
varying float vLeaf;
varying vec3 vLeafPos;
float lfH(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float lfNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lfH(i), lfH(i + vec2(1.0, 0.0)), f.x), mix(lfH(i + vec2(0.0, 1.0)), lfH(i + vec2(1.0, 1.0)), f.x), f.y);
}
`;function zM(){const i=new ia({color:16777215,vertexColors:!0});return i.onBeforeCompile=t=>{let e=t.vertexShader;e=Sn(e,"#include <common>",`attribute float aLeaf;
varying float vLeaf;
varying vec3 vLeafPos;`),e=Sn(e,"#include <begin_vertex>",`vLeaf = aLeaf;
vLeafPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.vertexShader=e;let n=t.fragmentShader;n=Sn(n,"#include <common>",DM),n=Sn(n,"#include <color_fragment>",`{
  vec2 lp = vLeafPos.xz * 4.5 + vec2(vLeafPos.y * 3.1, vLeafPos.y * -2.3);
  float ln = lfNoise(lp) * 0.65 + lfNoise(lp * 2.7) * 0.35;
  diffuseColor.rgb *= 1.0 + vLeaf * (ln - 0.5) * 0.5;
}`),t.fragmentShader=n},i.customProgramCacheKey=()=>"ebg-solids-v1",i}const Li=Wt.R,Bi=Math.PI*2,UM=["classic","tennis","beach","planet","donut","snow","gold"],NM=14,Sf=1.4,yo=.24,FM=.12,bf=.38,wf=.34,Ka=.7,OM=.12,ja=.16,So=.35,ai=i=>i<0?0:i>1?1:i,Be=(i,t,e)=>{const n=ai((e-i)/(t-i));return n*n*(3-2*n)},Ce=i=>[i>>16&255,i>>8&255,i&255];function He(i,t,e){i[0]+=(t[0]-i[0])*e,i[1]+=(t[1]-i[1])*e,i[2]+=(t[2]-i[2])*e}function vi(i,t){i[0]=t[0],i[1]=t[1],i[2]=t[2]}function kM(i,t){i[0]*=t,i[1]*=t,i[2]*=t}const zr=i=>Math.acos(i<-1?-1:i>1?1:i);function ci(i,t,e,n){let s=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,1274126177)^Math.imul(n+1,2246822519);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function ud(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=i-s,c=t-r,l=e-o,u=a*a*(3-2*a),h=c*c*(3-2*c),d=l*l*(3-2*l),f=(g,x,m)=>g+(x-g)*m;return f(f(f(ci(s,r,o,n),ci(s+1,r,o,n),u),f(ci(s,r+1,o,n),ci(s+1,r+1,o,n),u),h),f(f(ci(s,r,o+1,n),ci(s+1,r,o+1,n),u),f(ci(s,r+1,o+1,n),ci(s+1,r+1,o+1,n),u),h),d)}function Zs(i,t,e,n,s=4){let r=.5,o=1,a=0,c=0;for(let l=0;l<s;l++)a+=r*ud(i*o,t*o,e*o,n+l*17),c+=r,r*=.5,o*=2.03;return a/c}function fd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function BM(i,t,e,n){const s=.809016994375,r=-.587785252292,o=-s,a=r;i=Math.abs(i);let c=Math.max(s*i+r*t,0)*2;i-=c*s,t-=c*r,c=Math.max(o*i+a*t,0)*2,i-=c*o,t-=c*a,i=Math.abs(i),t-=e;const l=n*-r-0,u=n*s-1,h=Math.min(e,Math.max(0,(i*l+t*u)/(l*l+u*u))),d=i-l*h,f=t-u*h;return Math.sqrt(d*d+f*f)*Math.sign(t*l-i*u)}const HM=Ce(pe.cueBody),GM=Ce(pe.cueDots),VM=Ce(pe.eightBody),WM=Ce(pe.eightDisc),Kn=pe.poolBalls.map(Ce),Rr=Ce(16513779);function XM(i,t,e,n,s){vi(s,HM);const r=zr(Math.max(Math.abs(i),Math.abs(t),Math.abs(e)));He(s,GM,Be(.2+n,.2-n,r))}const Ef=.52;function qM(i,t,e,n,s){vi(s,VM);const r=zr(Math.abs(e));He(s,WM,Be(Ef+n,Ef-n,r))}const ll=.72,ul=.28,YM=2*Math.sqrt(ll*ul),Uo=(i,t)=>(t[0]=ll*Math.cos(i)+ul*Math.cos(3*i),t[1]=YM*Math.sin(2*i),t[2]=ll*Math.sin(i)-ul*Math.sin(3*i),t),Hs=72,$a=(()=>{const i=new Float64Array(Hs*3),t=[0,0,0];for(let e=0;e<Hs;e++)Uo(e/Hs*Bi,t),i[e*3]=t[0],i[e*3+1]=t[1],i[e*3+2]=t[2];return i})(),Pn=[0,0,0];function KM(i,t,e){let n=-2,s=0;for(let a=0;a<Hs;a++){const c=i*$a[a*3]+t*$a[a*3+1]+e*$a[a*3+2];c>n&&(n=c,s=a)}let r=(s-1)/Hs*Bi,o=(s+1)/Hs*Bi;for(let a=0;a<14;a++){const c=r+(o-r)*.382,l=r+(o-r)*.618;Uo(c,Pn);const u=i*Pn[0]+t*Pn[1]+e*Pn[2];Uo(l,Pn);const h=i*Pn[0]+t*Pn[1]+e*Pn[2];u>h?o=l:r=c}return Uo((r+o)/2,Pn),zr(i*Pn[0]+t*Pn[1]+e*Pn[2])}const jM=Ce(13952570),$M=Ce(16316138),ZM=Ce(11123498);function JM(i,t,e,n,s){vi(s,jM),kM(s,.94+.12*Zs(i*9+3,t*9,e*9,11,3));const r=KM(i,t,e);He(s,ZM,Be(.085+n,.085-n,r)*.8),He(s,$M,Be(.05+n,.05-n,r))}const Za=[Kn[2],Rr,Kn[1],Kn[0],Rr,Kn[5]];function QM(i,t,e,n,s){let r=Math.atan2(e,-i);r<0&&(r+=Bi);const o=Bi/6,a=Math.floor(r/o)%6,c=r-a*o,l=Math.sqrt(Math.max(0,1-t*t));vi(s,Za[a]);const u=Math.min(c,o-c)*l,h=c<o/2?Za[(a+5)%6]:Za[(a+1)%6];He(s,h,Be(n,-n,u));const d=zr(Math.abs(t));He(s,Rr,Be(.36+n,.36-n,d)),He(s,Kn[0],Be(.12+n,.12-n,d))}const ty=Ce(2052008),ey=Ce(4167142),ny=Ce(15326364),iy=Ce(4170573),sy=Ce(9227102),ry=Ce(16055039);function oy(i,t,e,n,s){const r=Zs(i*1.9+7.1,t*1.9+3.3,e*1.9+1.7,5,5);vi(s,ty),He(s,ey,Be(.36,.5,r));const o=.52,a=.012+n*.5;He(s,ny,Be(o-a,o+a,r)),He(s,iy,Be(o+.012-a,o+.012+a,r)),He(s,sy,Be(.6,.7,r)*.8);const c=Math.abs(t)-(.84+.07*(Zs(i*5,t*5,e*5,9,3)-.5));He(s,ry,Be(-n,n,c))}const ay=Ce(14262363),cy=Ce(15778430),Ja=Ce(16748480),ly=Ce(15036070),Af=(()=>{const i=fd(388824),t=[],e=[Kn[0],Kn[1],Rr,Kn[5],Kn[4],Kn[3],Rr];for(let n=0;t.length<64&&n<1e3;n++){const s=i()*2-1,r=i()*Bi,o=Math.sqrt(1-s*s),a=[o*Math.cos(r),s,o*Math.sin(r)];if(a[1]<.08)continue;let c=!1;for(const v of t)if(v.c[0]*a[0]+v.c[1]*a[1]+v.c[2]*a[2]>.985){c=!0;break}if(c)continue;let l=-a[2],u=0,h=a[0],d=Math.hypot(l,u,h)||1;l/=d,u/=d,h/=d;const f=a[1]*h-a[2]*u,g=a[2]*l-a[0]*h,x=a[0]*u-a[1]*l,m=i()*Math.PI,p=[l*Math.cos(m)+f*Math.sin(m),u*Math.cos(m)+g*Math.sin(m),h*Math.cos(m)+x*Math.sin(m)],_=[a[1]*p[2]-a[2]*p[1],a[2]*p[0]-a[0]*p[2],a[0]*p[1]-a[1]*p[0]];t.push({c:a,t1:p,t2:_,col:e[t.length%e.length]})}return t})();function uy(i,t,e,n,s){const r=Math.atan2(e,-i),o=-.08+.09*Math.sin(r*7)+.05*Math.sin(r*3+1.3)+.06*(Zs(i*4,t*4,e*4,21,3)-.5);vi(s,ay),He(s,cy,Be(-.55,-.05,t)*.7);const a=Be(o-n,o+n,t);if(a<=0)return;const c=[Ja[0],Ja[1],Ja[2]];He(c,ly,Be(o+.09,o,t)*.8);for(let l=0;l<Af.length;l++){const u=Af[l];if(i*u.c[0]+t*u.c[1]+e*u.c[2]<.97)continue;const d=i*u.t1[0]+t*u.t1[1]+e*u.t1[2],f=i*u.t2[0]+t*u.t2[1]+e*u.t2[2],g=Math.max(0,Math.abs(d)-.07),x=Math.sqrt(g*g+f*f)-.026,m=Be(n,-n,x);m>0&&He(c,u.col,m)}He(s,c,a)}const fy=Ce(16120319),hy=Ce(13229038),dy=Ce(11455462),Tf=(()=>{const i=fd(77),t=[];for(let e=0;e<9;e++){const n=i()*2-1,s=i()*Bi,r=Math.sqrt(1-n*n);t.push([r*Math.cos(s),n,r*Math.sin(s),.12+i()*.1])}return t})();function py(i,t,e,n,s){vi(s,fy),He(s,hy,Be(.45,.75,Zs(i*3.2,t*3.2,e*3.2,31,4))*.75);for(let r=0;r<Tf.length;r++){const o=Tf[r],a=zr(i*o[0]+t*o[1]+e*o[2]),c=o[3]*(.8+.4*ud(i*12,t*12,e*12,41+r));He(s,dy,Be(c+n*2,c-n*2,a)*.85)}ci(Math.floor(i*90),Math.floor(t*90),Math.floor(e*90),5)>.992&&vi(s,[255,255,255])}const my=Ce(12091423),gy=Ce(15249982),xy=Ce(16769674),vy=Ce(16774340),_y=Ce(8015376);function My(i,t,e,n,s){vi(s,gy);const r=Zs(i*2.5,t*2.5,e*2.5,61,4);He(s,my,Be(.55,.3,r)*.6),He(s,xy,Be(.55,.78,r)*.6);const o=Math.abs(e);if(o<.6)return;const a=(e>0?i:-i)/o,c=t/o,l=BM(a,c+.03,.42,.45);He(s,_y,Be(.035+n,.035-n,l)),He(s,vy,Be(n,-n,l))}const Cf={classic:{paint:XM,specular:5592405,shininess:80,rimDark:.25},tennis:{paint:JM,specular:2236962,shininess:18,rimDark:.3},beach:{paint:QM,specular:6710886,shininess:70,rimDark:.25},planet:{paint:oy,specular:4868682,shininess:50,rimDark:.15},donut:{paint:uy,specular:3815994,shininess:40,rimDark:.25},snow:{paint:py,specular:7829367,shininess:60,rimDark:.3},gold:{paint:My,specular:16765562,shininess:140,rimDark:.12}};function fl(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext&&e.getContext("2d");return n?{c:e,g:n}:null}function Rf(i,t){const{c:e,g:n}=i,s=e.width,r=e.height;if(!n.createImageData||!n.putImageData)return;const o=n.createImageData(s,r),a=o.data,c=Math.PI/r*.75,l=[0,0,0];for(let u=0;u<r;u++){const h=(u+.5)/r*Math.PI,d=Math.sin(h),f=Math.cos(h);for(let g=0;g<s;g++){const x=(g+.5)/s*Bi;t(-Math.cos(x)*d,f,Math.sin(x)*d,c,l);const m=(u*s+g)*4;a[m]=l[0],a[m+1]=l[1],a[m+2]=l[2],a[m+3]=255}}n.putImageData(o,0,0)}const zl='"Lilita One", "Arial Black", system-ui, sans-serif';function Pf(i,t,e){const{c:n,g:s}=i,r=n.width,o=n.height,a=Math.ceil(o*.42),c=fl(a,a);if(!c||!s.drawImage)return;const l=c.g;l.fillStyle="#"+pe.eightInk.toString(16).padStart(6,"0"),l.font=`${Math.round(o*.27)}px ${zl}`,l.textAlign="center",l.textBaseline="middle",l.fillText(t,a/2,a/2+o*.012);const u=e*r,h=o/2;for(let d=0;d<a;d++){const f=h-a/2+d,g=(.5-(f+.5)/o)*Math.PI,x=1/Math.max(.2,Math.cos(g));s.drawImage(c.c,0,d,a,1,u-a*x/2,f,a*x,1)}}function Lf(i,t){const e=new Rl(i.c);return e.colorSpace=Qe,e.anisotropy=t,e.wrapS=Bo,e}function If(i,{rim:t=0,rimStrength:e=0,rimDark:n=0,specular:s=6710886,shininess:r=90,transparent:o=!1,key:a="ball-rim-v1"}={}){const c=new o1({map:i,shininess:r,specular:s,transparent:o,depthWrite:!0}),l=new ae(t),u={value:l.clone().multiplyScalar(e)},h={value:n};return c.onBeforeCompile=d=>{d.uniforms.uRim=u,d.uniforms.uRimDark=h,d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRim;
uniform float uRimDark;`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","float rimF = pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 3.0 );","totalEmissiveRadiance += uRim * rimF;","diffuseColor.rgb *= 1.0 - uRimDark * rimF;"].join(`
`))},c.customProgramCacheKey=()=>a,c.userData.uniforms={uRim:u,uRimDark:h},c.userData.rimBase=l,c}const yy=`
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
}`,Sy=`
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
}`;function by(i){if(!i||typeof document>"u"||!document.createElement)return null;const t=document.createElement("div");t.className="ebg-eight-marker",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",pointerEvents:"none",display:"none",zIndex:"3",willChange:"transform"});const e=document.createElement("div");Object.assign(e.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",display:"none"});const n=document.createElement("div");Object.assign(n.style,{position:"absolute",left:"22px",top:"5px",width:"0px",height:"0px",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:"9px solid #ffffff",filter:"drop-shadow(0 0 1.5px rgba(16,36,26,0.9))"}),e.appendChild(n);const s=document.createElement("div");return Object.assign(s.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",boxSizing:"border-box",borderRadius:"50%",background:"#16161c",border:"2px solid #ffffff",boxShadow:"0 0 0 1.5px rgba(16,36,26,0.85), 0 2px 4px rgba(0,0,0,0.35)",color:"#ffffff",font:`13px/18px ${zl}`,textAlign:"center"}),s.textContent="8",t.appendChild(e),t.appendChild(s),i.appendChild(t),{el:t,arrowWrap:e,shown:!1,x:-1e9,y:-1e9,ang:1e9,arrowOn:!1}}class Df{constructor(){this.shown=!1,this.x=0,this.y=0,this.z=0,this.rx=0,this.rz=0,this.vx=0,this.vz=0,this.vy=0,this.anim="none",this.t=0,this.fx=0,this.fy=0,this.fz=0,this.hk="water",this.alpha=1,this.lastMode="off",this.synced=!1,this.lx=0,this.ly=0,this.lz=0,this.la=0,this.llv=null,this.lyaw=0}}class wy{constructor(){this.valid=!1,this.cx=0,this.cy=0,this.cz=0,this.bx=0,this.by=0,this.bz=0,this.vis=!1,this.anim="",this.w=0,this.h=0}}class Ey{constructor(){this.t=0,this.k=-1}}function Ay(i,t={}){const{uiRoot:e=null,rig:n=null}=t,s=i.scene,r=i.tier??1,o=4,a=r===0?256:512,c=r===0?512:1024,l=new gi(Li,48,24),u=fl(c,c/2);let h=null;function d(){u&&(Rf(u,qM),Pf(u,"8",.25),Pf(u,"8",.75),h&&(h.needsUpdate=!0))}u&&(d(),h=Lf(u,o));let f=!1;try{const st=typeof document<"u"?document.fonts:null;if(st&&st.load){const xt=st.check?st.check(`64px ${zl}`):!1;st.load('64px "Lilita One"').then(()=>{!f&&!xt&&d()},()=>{})}}catch{}const g=If(h,{rim:pe.eightRim,rimStrength:So,specular:6710886,shininess:90,key:"ball-eight-v1"});h||g.color.setHex(pe.eightBody);const x=new De(l,g);x.name="eight-ball";const m=new Map,p=If(null,{rimDark:.25,specular:5592405,shininess:80,transparent:!0,key:"ball-cue-v1"}),_=new De(l,p);_.name="cue-ball",_.renderOrder=2;for(const st of[x,_])st.castShadow=!1,st.receiveShadow=!1,st.frustumCulled=!0;s.add(x,_);const v=new ds(1,1);v.rotateX(-Math.PI/2);const M=new Vo(new Float32Array(2),1);M.setUsage(Fi),v.setAttribute("aAlpha",M);const E=new gn({uniforms:{uColor:{value:new ae(pe.blobShadow)},uOpacity:{value:.42}},vertexShader:yy,fragmentShader:Sy,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),A=new W_(v,E,2);A.instanceMatrix.setUsage(Fi),A.frustumCulled=!1,A.renderOrder=1,A.name="ball-shadows",s.add(A);const T=by(e),w=[new Df,new Df],b=[_,x];let S="classic",C=1;const N=new Ey;let B=!0;const K=new wy,ot=new J,ct=new fs,vt=new J,Z=new J(0,1,0),X=new ye,z=new J,$=new J,j={x:0,y:0,onScreen:!1};let rt=null;function O(st){st.quaternion.setFromAxisAngle(Z,i.yaw||0),ct.setFromAxisAngle(ot.set(1,0,0),-Math.PI/3),st.quaternion.multiply(ct)}O(x),O(_),_.quaternion.multiply(ct.setFromAxisAngle(ot.set(0,1,0),.6));function Q(st,xt,F){const et=Math.sqrt(xt*xt+F*F);et<1e-7||(ot.set(F/et,0,-xt/et),st.quaternion.premultiply(ct.setFromAxisAngle(ot,et/Li)),st.quaternion.normalize())}function mt(st){Cf[st]||(st="classic"),S=st;const xt=Cf[st];let F=m.get(st);if(!F){const Bt=fl(a,a/2);Bt&&(Rf(Bt,xt.paint),F=Lf(Bt,o),m.set(st,F))}const et=!!p.map;p.map=F||null,et!==!!p.map&&(p.needsUpdate=!0),F?p.color.setHex(16777215):p.color.setHex(pe.cueBody),p.specular.setHex(xt.specular),p.shininess=xt.shininess,p.userData.uniforms.uRimDark.value=xt.rimDark}mt("classic");function H(st,xt){st.anim="drop",st.t=0,st.x=xt.x,st.y=xt.y+Sf,st.z=xt.z,st.rx=xt.x,st.rz=xt.z}function tt(st,xt,F){const et=w[st],Bt=b[st],Jt=st===1,kt=Jt&&xt.visible&&xt.mode==="holed";let Kt=!1;if(kt)et.anim!=="sink"&&et.anim!=="inCup"&&(et.shown&&et.anim!=="hazard"?(et.anim="sink",et.t=0,et.fx=et.x,et.fy=et.y,et.fz=et.z):(et.anim="inCup",Kt=!0)),et.shown=!0;else if(xt.visible)(!et.shown||et.anim==="inCup"||et.anim==="sink"||et.anim==="hazard")&&(H(et,xt),Kt=!0,O(Bt)),et.shown=!0;else if(Jt&&xt.mode==="sunk"&&et.shown&&et.anim!=="hazard"){et.anim="hazard",et.t=0,et.vy=0;const lt=n&&n.level;if(et.hk=lt&&lt.hazardAt&&lt.hazardAt(et.x,et.z)==="oob"?"oob":"water",et.hk==="oob"){const P=Math.sqrt(et.vx*et.vx+et.vz*et.vz);P<1.5&&P>1e-4&&(et.vx*=1.5/P,et.vz*=1.5/P)}}else et.anim!=="hazard"&&(et.shown=!1,et.anim="none");et.lastMode=xt.mode;const Xt=et.x,U=et.z;if(et.anim==="hazard"){et.t+=F;const lt=et.t/Ka;if(et.hk==="water"){const P=Math.exp(-5*F);et.vx*=P,et.vz*=P,et.x+=et.vx*F,et.z+=et.vz*F,et.y-=(.4+2.2*lt)*F}else et.x+=et.vx*F,et.z+=et.vz*F,et.vy-=18*F,et.y+=et.vy*F;et.t>=Ka&&(et.anim="none",et.shown=!1)}else if(et.anim==="sink"){et.t+=F;const lt=ai(et.t/wf),P=1-Math.pow(1-ai(lt/.6),3),it=.05*(1-lt)*Math.sin(lt*26);et.x=et.fx+(xt.x-et.fx)*P+it,et.z=et.fz+(xt.z-et.fz)*P;const yt=ai((lt-.12)/.88);et.y=et.fy+(xt.y-et.fy)*yt*yt,et.t>=wf&&(et.anim="inCup",et.x=xt.x,et.y=xt.y,et.z=xt.z)}else if(et.anim==="inCup")et.x=xt.x,et.y=xt.y,et.z=xt.z;else if(et.anim==="drop"){et.t+=F,et.x=xt.x,et.z=xt.z;let lt;if(et.t<yo){const P=et.t/yo;lt=Sf*(1-P*P)}else lt=FM*Math.sin(Math.PI*ai((et.t-yo)/(bf-yo)));et.y=xt.y+lt,et.t>=bf&&(et.anim="none",et.y=xt.y)}else if(et.shown){const lt=xt.x-et.x,P=xt.z-et.z;lt*lt+P*P>2.5*2.5&&(Kt=!0),et.x=xt.x,et.y=xt.y,et.z=xt.z}if(et.shown){const lt=et.x-Xt,P=et.z-U;if(!Kt&&et.anim!=="drop"&&et.anim!=="inCup"&&(lt!==0||P!==0)&&Q(Bt,lt,P),F>0&&!Kt&&et.anim!=="hazard"){const it=1-Math.exp(-F/.06),yt=lt/F,Ut=P/F;Number.isFinite(yt)&&Number.isFinite(Ut)&&(et.vx+=(yt-et.vx)*it,et.vz+=(Ut-et.vz)*it)}Kt&&(et.vx=0,et.vz=0)}const y=st===0?ai(Number.isFinite(xt.alpha)?xt.alpha:1):1;if(et.alpha=et.shown?y:0,Bt.visible=et.shown&&y>.01,st===0&&(p.opacity=y),et.synced&&et.x===et.lx&&et.y===et.ly&&et.z===et.lz&&et.alpha===et.la&&rt===et.llv&&i.yaw===et.lyaw&&et.anim==="none")return;et.synced=!0,et.lx=et.x,et.ly=et.y,et.lz=et.z,et.la=et.alpha,et.llv=rt,et.lyaw=i.yaw,B=!0,Bt.visible&&Bt.position.set(et.x,et.y,et.z);const q=rt?es(rt,et.x,et.z):xt.y-Li,at=et.y-Li-q;let bt=Bt.visible?et.alpha:0,wt=2.1*Li*1.25;at>.01?(bt/=1+at*1.6,wt*=1+at*.45):at<-.01&&(bt*=ai(1+at/(.9*Li))),et.anim==="hazard"&&et.hk==="water"&&(bt*=ai(1-et.t/(Ka*.5))),M.array[st]=bt;const Gt=(i.yaw||0)+225*Math.PI/180,Nt=.25*Li*Math.min(1.5,1+Math.max(0,at)),Dt=et.x-Math.sin(Gt)*Nt,W=et.z-Math.cos(Gt)*Nt,G=.25,nt=rt?es(rt,Dt+G,W)-es(rt,Dt-G,W):0,Mt=rt?es(rt,Dt,W+G)-es(rt,Dt,W-G):0;vt.set(-nt/(2*G),1,-Mt/(2*G)).normalize(),ct.setFromUnitVectors(Z,vt),z.set(Dt,(rt?es(rt,Dt,W):q)+.03,W),$.set(wt,1,wt),X.compose(z,ct,$),A.setMatrixAt(st,X)}function ut(){if(!T)return;const st=w[1],xt=i.camera.matrixWorld.elements,F=i.size.w,et=i.size.h;if(K.valid&&xt[12]===K.cx&&xt[13]===K.cy&&xt[14]===K.cz&&st.x===K.bx&&st.y===K.by&&st.z===K.bz&&x.visible===K.vis&&st.anim===K.anim&&F===K.w&&et===K.h)return;K.valid=!0,K.cx=xt[12],K.cy=xt[13],K.cz=xt[14],K.bx=st.x,K.by=st.y,K.bz=st.z,K.vis=x.visible,K.anim=st.anim,K.w=F,K.h=et;let Bt=!1,Jt=0,kt=0,Kt=0,Xt=!1;if(n&&st.shown&&x.visible&&st.anim!=="inCup"&&st.anim!=="sink"&&st.anim!=="hazard"){const U=Math.max(1,i.size.w),y=Math.max(1,i.size.h);n.groundToScreen(st.x,st.y,st.z,j);const q=2*Li*n.pxPerMetre(st.x,st.z);if(!j.onScreen||q<NM){Bt=!0,Jt=j.x,kt=j.y;const at=24;if(!j.onScreen||Jt<at||Jt>U-at||kt<at||kt>y-at){const bt=U/2,wt=y/2,Gt=Jt-bt,Nt=kt-wt,Dt=Math.abs(Gt)>1e-6?(U/2-at)/Math.abs(Gt):1/0,W=Math.abs(Nt)>1e-6?(y/2-at)/Math.abs(Nt):1/0,G=Math.min(1,Dt,W);Jt=bt+Gt*G,kt=wt+Nt*G,Kt=Math.atan2(Nt,Gt),Xt=!j.onScreen}}}Bt!==T.shown&&(T.el.style.display=Bt?"block":"none",T.shown=Bt),Bt&&((Math.abs(Jt-T.x)>.5||Math.abs(kt-T.y)>.5)&&(T.x=Jt,T.y=kt,T.el.style.transform=`translate3d(${(Jt-11).toFixed(1)}px, ${(kt-11).toFixed(1)}px, 0)`),Xt!==T.arrowOn&&(T.arrowWrap.style.display=Xt?"block":"none",T.arrowOn=Xt),Xt&&Math.abs(Kt-T.ang)>.01&&(T.ang=Kt,T.arrowWrap.style.transform=`rotate(${Kt.toFixed(3)}rad)`))}function Et(st,xt){if(f||!st||st.length<2)return;xt=Number.isFinite(xt)&&xt>0?Math.min(xt,.1):0,rt=n&&n.level?n.level:null,tt(0,st[0],xt),tt(1,st[1],xt),B&&(M.needsUpdate=!0,A.instanceMatrix.needsUpdate=!0,B=!1);let F=So;N.t>0&&(N.t-=xt,F=N.t-ja>0?1:So+(1-So)*ai(N.t/ja)),F!==N.k&&(N.k=F,g.userData.uniforms.uRim.value.copy(g.userData.rimBase).multiplyScalar(F)),ut()}function Ot(){f=!0,s.remove(x,_,A),l.dispose(),v.dispose(),g.dispose(),p.dispose(),E.dispose(),h&&h.dispose(),m.forEach(st=>st.dispose()),m.clear(),A.dispose(),T&&T.el.parentNode&&T.el.parentNode.removeChild(T.el)}return{update:Et,flash(){N.t=OM+ja},setSkin:mt,setRound(st){C=st===2?2:1},dispose:Ot,get skin(){return S},get round(){return C},meshes:{cue:_,eight:x,shadows:A},skins:UM}}const ri=Wt.R,Ty=9.8,fr=0,bo=1,zf=2,Qa=["iPos","iRot","iSize","iCol"],tc=["iRing","iRingN","iRingC","iRingF"],Cy=`
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
}`,Ry=`
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
}`,Py=`
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
}`,Ly=`
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
}`;function Uf(i,t){return new gn({vertexShader:i,fragmentShader:t,transparent:!0,depthWrite:!1,depthTest:!0,side:yn,blending:_h,blendEquation:zi,blendSrc:Sc,blendDst:Er,blendSrcAlpha:Sc,blendDstAlpha:Er,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function Nf(i,t){const e=new ds(1,1),n=new f1;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),n.setAttribute("uv",e.getAttribute("uv"));const s={};for(const[r,o]of t){const a=new Vo(new Float32Array(i*o),o);a.setUsage(Fi),n.setAttribute(r,a),s[r]=a}return n.instanceCount=0,n.boundingSphere=new Vi(new J,1e6),{geo:n,attrs:s}}function Iy(i,t={}){const{events:e=null,play:n=null}=t,s=i.scene,r=i.tier??1,o=r===0?180:360,a=16,c=r===0?.4:1,l=Nf(o,[["iPos",4],["iRot",4],["iSize",4],["iCol",4]]),u=Uf(Cy,Ry),h=new De(l.geo,u);h.frustumCulled=!1,h.renderOrder=5,h.name="fx-particles";const d=Nf(a,[["iRing",4],["iRingN",4],["iRingC",4],["iRingF",2]]),f=Uf(Py,Ly),g=new De(d.geo,f);g.frustumCulled=!1,g.renderOrder=3,g.name="fx-rings";const x=Qa.map(()=>({start:0,count:0})),m=tc.map(()=>({start:0,count:0}));s.add(g,h);const p=new Float32Array(o),_=new Float32Array(o),v=new Float32Array(o),M=new Float32Array(o),E=new Float32Array(o),A=new Float32Array(o),T=new Float32Array(o),w=new Float32Array(o),b=new Float32Array(o),S=new Float32Array(o),C=new Float32Array(o),N=new Float32Array(o),B=new Float32Array(o),K=new Float32Array(o),ot=new Float32Array(o),ct=new Float32Array(o),vt=new Float32Array(o),Z=new Float32Array(o),X=new Float32Array(o),z=new Float32Array(o),$=new Float32Array(o),j=new Uint8Array(o),rt=new Float32Array(o),O=new Float32Array(o),Q=new Uint8Array(o),mt=new Uint8Array(o),H=new Uint8Array(o);let tt=0,ut=0;const Et=new Float32Array(a),Ot=new Float32Array(a),st=new Float32Array(a),xt=new Float32Array(a),F=new Float32Array(a),et=new Float32Array(a),Bt=new Float32Array(a),Jt=new Float32Array(a),kt=new Float32Array(a),Kt=new Float32Array(a),Xt=new Float32Array(a),U=new Float32Array(a),y=new Float32Array(a),q=new Float32Array(a),at=new Float32Array(a),bt=new Float32Array(a),wt=new Float32Array(a),Gt=new Float32Array(a),Nt=new Float32Array(a),Dt=new Uint8Array(a);let W=0;const G=8,nt=new Float32Array(G),Mt=new Float32Array(G),lt=new Float32Array(G),P=new Float32Array(G),it=new Uint8Array(G),yt=new Uint8Array(G);let Ut=2654435769;const V=()=>(Ut^=Ut<<13,Ut^=Ut>>>17,Ut^=Ut<<5,(Ut>>>0)/4294967296),ft=(R,k)=>R+(k-R)*V(),dt=new ae,gt=R=>(dt.setHex(R),[dt.r,dt.g,dt.b]),Tt={white:gt(16777215),chalk:gt(pe.chalk),foam:gt(15268863),water:gt(8378092),gold:gt(16765503),dustDark:gt(5916208),dustTan:gt(10254924),sand:gt(14268530),leaf:gt(3108396),grey:gt(7037271),pool:pe.poolBalls.map(gt),cream:gt(16774358)},Y=()=>n&&n.level||null,ht=(R,k)=>{const D=Y(),pt=D&&D.heightAt?D.heightAt(R,k):0;return Number.isFinite(pt)?pt:0},Pt=(R,k)=>{const D=Y();return D&&D.surfaceAt?D.surfaceAt(R,k):"fairway"};function It(R,k,D,pt,St,At,Lt,Ft,Ht,zt,te,_t,ie,re,se,$t,xe){let Vt=tt;for(let Se=0;Se<o;Se++){const Oe=(tt+Se)%o;if(!H[Oe]){Vt=Oe;break}}if(tt=(Vt+1)%o,H[Vt]||ut++,H[Vt]=1,p[Vt]=R,_[Vt]=k,v[Vt]=D,M[Vt]=pt,E[Vt]=St,A[Vt]=At,T[Vt]=Lt,w[Vt]=Lt,b[Vt]=Ft,S[Vt]=Ht,C[Vt]=zt,vt[Vt]=te[0],Z[Vt]=te[1],X[Vt]=te[2],z[Vt]=_t,$[Vt]=ie,j[Vt]=re,rt[Vt]=se,O[Vt]=$t,Q[Vt]=xe,mt[Vt]=0,ot[Vt]=ft(0,Math.PI*2),ct[Vt]=ft(-6,6),re===bo){let Se=ft(-1,1),Oe=ft(-1,1),Le=ft(-1,1);const ze=Math.sqrt(Se*Se+Oe*Oe+Le*Le)||1;Se/=ze,Oe/=ze,Le/=ze,N[Vt]=Se,B[Vt]=Oe,K[Vt]=Le,ct[Vt]=ft(5,12)*(V()<.5?-1:1)}else N[Vt]=0,B[Vt]=1,K[Vt]=0;return Vt}function Rt(R,k,D,pt,St,At,Lt,Ft,Ht,zt,te,_t=0,ie=.05){const re=W;W=(W+1)%a;const se=.25,$t=ht(R+se,k)-ht(R-se,k),xe=ht(R,k+se)-ht(R,k-se);let Vt=-$t/(2*se),Se=1,Oe=-xe/(2*se);const Le=Math.sqrt(Vt*Vt+Se*Se+Oe*Oe);Vt/=Le,Se/=Le,Oe/=Le,Et[re]=R,Ot[re]=ht(R,k)+ie,st[re]=k,xt[re]=Vt,F[re]=Se,et[re]=Oe,Bt[re]=D,Jt[re]=pt,kt[re]=St,Kt[re]=At,Xt[re]=0,U[re]=Lt,y[re]=_t,q[re]=Ft[0],at[re]=Ft[1],bt[re]=Ft[2],wt[re]=Ht,Gt[re]=zt,Nt[re]=te,Dt[re]=1}function qt(R,k,D,pt,St,At,Lt){for(let Ft=0;Ft<pt;Ft++){const Ht=ft(0,Math.PI*2),zt=St*ft(.5,1);It(R,k,D,Math.cos(Ht)*zt,ft(.6,1.6)*St*.5,Math.sin(Ht)*zt,ft(.25,.45),Lt,Lt*.3,1,At,1,.85,fr,.4,3,0)}}function Yt(R,k,D,pt,St,At,Lt){const Ft=ht(R,k)+.12;for(let Ht=0;Ht<D;Ht++){const zt=ft(0,Math.PI*2),te=ft(.3,1)*pt;It(R+Math.cos(zt)*.1,Ft,k+Math.sin(zt)*.1,Math.cos(zt)*te,ft(.3,.9),Math.sin(zt)*te,ft(.45,.75),At,At*2.6,1,St,Lt,0,fr,-.15,2.6,0)}}function ne(R,k,D,pt){const St=ht(R,k)+.3;for(let At=0;At<D;At++){const Lt=ft(0,Math.PI*2),Ft=ft(.6,3.2)*pt,Ht=ft(6.5,11)*pt,zt=Tt.pool[(At+Math.floor(V()*7))%Tt.pool.length],te=ft(.18,.26);It(R+Math.cos(Lt)*.4,St,k+Math.sin(Lt)*.4,Math.cos(Lt)*Ft,Ht,Math.sin(Lt)*Ft,ft(3.2,4.4),te,te,.6,zt,1,0,bo,.62,1.15,1)}}function oe(R,k,D,pt,St){for(let At=0;At<G;At++)if(!yt[At]){yt[At]=1,nt[At]=R,it[At]=k,Mt[At]=D,lt[At]=pt,P[At]=St;return}}function le(R){const k=R.x+R.nx*ri,D=R.z+R.nz*ri,pt=Math.min(1,(R.speed||0)/14),St=ht(k,D)+ri;Rt(k,D,.45,1+pt*.6,.12,.04,.2,Tt.white,.9,.6,0);const At=5+Math.round(pt*5);for(let Lt=0;Lt<At;Lt++){const Ft=Lt%2?1:-1,Ht=ft(1.5,3.5)*(.5+pt),zt=-R.nz*Ft,te=R.nx*Ft,_t=ft(-.35,.35);It(k,St,D,(zt+R.nx*_t)*Ht,ft(.8,2.2),(te+R.nz*_t)*Ht,ft(.22,.4),ft(.07,.12),.02,1,Lt%3?Tt.white:Tt.chalk,1,.75,fr,.5,4,0)}Yt(k,D,3,.8,Tt.dustDark,.16,.32)}function me(R){const k=R.speed||0;if(k<.8)return;const D=Math.min(1,k/12),pt=R.x-R.nx*ri*.95,St=R.z-R.nz*ri*.95,At=R.id===0?.6:1,Lt=ht(pt,St)+ri*.6;if(R.kind==="hedge"||R.kind==="tree"){const Ft=Math.round((2+5*D)*At);for(let Ht=0;Ht<Ft;Ht++){const zt=ft(.8,2.2)*(.5+D);It(pt,Lt+.2,St,(R.nx+ft(-.8,.8))*zt,ft(1,3),(R.nz+ft(-.8,.8))*zt,ft(.6,1),ft(.1,.16),.1,.6,Tt.leaf,1,0,bo,.35,2,2)}}else if(R.kind==="bumper")qt(pt,Lt,St,Math.round((3+5*D)*At),2.5+3*D,Tt.gold,.14),Rt(pt,St,.3,1+D,.1,.03,.22,Tt.cream,.8,.7,0);else{const Ft=Math.round((2+4*D)*At);Yt(pt,St,Ft,.6+D,R.kind==="cushion"?Tt.grey:Tt.dustDark,.14+.06*D,.3+.2*D),R.kind==="cushion"&&qt(pt,Lt,St,Math.round(2+3*D),1.5+2*D,Tt.chalk,.09)}}function de(R){const k=R.x,D=R.z;if(R.kind==="water"){Rt(k,D,.35,2.4,.16,.04,.75,Tt.foam,.95,.25,.22,0,.08),Rt(k,D,.2,1.6,.12,.03,.6,Tt.foam,.8,.25,0,.16,.08);const pt=ht(k,D)+.1,St=16;for(let At=0;At<St;At++){const Lt=At/St*Math.PI*2+ft(-.2,.2),Ft=ft(1,2.6);It(k,pt,D,Math.cos(Lt)*Ft,ft(3.5,6.5),Math.sin(Lt)*Ft,1.4,ft(.1,.16),.08,1,At%3?Tt.foam:Tt.water,.95,.3,fr,1,.6,2)}for(let At=0;At<5;At++)It(k+ft(-.15,.15),pt,D+ft(-.15,.15),ft(-.4,.4),ft(6,8.5),ft(-.4,.4),1.4,ft(.14,.2),.08,1,Tt.foam,.95,.3,fr,1,.5,2)}else Yt(k,D,10,1.6,Tt.grey,.28,.5),qt(k,ht(k,D)+.4,D,5,2,Tt.white,.12)}function Qt(R){const k=ht(R.x,R.z)+ri+.2;for(let pt=0;pt<6;pt++){const St=pt/6*Math.PI*2;It(R.x,k,R.z,Math.cos(St)*1.6,ft(1.5,2.6),Math.sin(St)*1.6,ft(.4,.6),.3,.05,1,pt%2?Tt.gold:Tt.white,1,.8,zf,.6,2.5,0)}const D=Y();D&&D.cup&&Rt(D.cup.x,D.cup.z,Wt.HOLE_R,Wt.HOLE_R+.5,.14,.04,.3,Tt.gold,.9,.6,0)}function ge(){const R=Y();if(!R||!R.cup)return;const k=R.cup.x,D=R.cup.z;Rt(k,D,Wt.HOLE_R,Wt.HOLE_R*3,.22,.04,.6,Tt.white,.95,.7,0),Rt(k,D,Wt.HOLE_R,Wt.HOLE_R*2.2,.14,.03,.5,Tt.gold,.9,.7,0,.12);const pt=ht(k,D)+.2;for(let St=0;St<12;St++){const At=St/12*Math.PI*2,Lt=ft(1.4,2.6);It(k,pt,D,Math.cos(At)*Lt,ft(3,5.5),Math.sin(At)*Lt,ft(.5,.8),ft(.22,.32),.04,1,St%3?Tt.gold:Tt.white,1,.8,zf,.8,1.8,0)}ne(k,D,Math.round(10*c+4),.7)}function ce(R){if(!R||R.picked)return;const k=R.level||Y();if(!k||!k.cup)return;const D=R.strokes-R.par,pt=R.strokes===1,St=pt||D<=-2?150:D===-1?100:D===0?60:30,At=Math.max(12,Math.round(St*c)),Lt=k.cup.x,Ft=k.cup.z,Ht=pt||D<=-2?Math.round(At*.4):At;ne(Lt,Ft,Ht,D<=-1||pt?1.15:.9),(pt||D<=-2)&&(oe(.35,1,Lt-2,Ft,Math.round(At*.3)),oe(.7,1,Lt+2,Ft,Math.round(At*.3)))}const Ae=[];e&&e.on&&(Ae.push(e.on("ball:contact",le)),Ae.push(e.on("ball:wall",me)),Ae.push(e.on("ball:hazard",de)),Ae.push(e.on("ball:hop",Qt)),Ae.push(e.on("ball:holed",ge)),Ae.push(e.on("hole:done",ce)));let en=0,Fe=NaN,nn=NaN;function We(){if(!n||n.state!=="rolling"||!n.world){Fe=NaN;return}const R=n.world.balls[1];if(!R||R.mode!=="roll"){Fe=NaN;return}if(Number.isFinite(Fe)&&(en+=Math.sqrt((R.x-Fe)*(R.x-Fe)+(R.z-nn)*(R.z-nn))),Fe=R.x,nn=R.z,en<.3||(en=0,Pt(R.x,R.z)!=="sand"))return;const k=Math.sqrt(R.vx*R.vx+R.vz*R.vz);if(k<.4)return;const D=R.x-R.vx/k*ri*.6,pt=R.z-R.vz/k*ri*.6;Yt(D,pt,2,.4+Math.min(1,k/8),Tt.sand,.18,.55)}function hn(R){R=Number.isFinite(R)&&R>0?Math.min(R,.1):0,We();for(let _t=0;_t<G;_t++)yt[_t]&&(nt[_t]-=R,nt[_t]<=0&&(yt[_t]=0,it[_t]===1&&ne(Mt[_t],lt[_t],P[_t],1.15)));const k=l.attrs.iPos.array,D=l.attrs.iRot.array,pt=l.attrs.iSize.array,St=l.attrs.iCol.array;let At=0;if(ut>0)for(let _t=0;_t<o;_t++){if(!H[_t])continue;if(T[_t]-=R,T[_t]<=0){H[_t]=0,ut--;continue}if(!mt[_t]){const Vt=Math.exp(-O[_t]*R);if(M[_t]*=Vt,A[_t]*=Vt,E[_t]=E[_t]*Vt-Ty*rt[_t]*R,p[_t]+=M[_t]*R,_[_t]+=E[_t]*R,v[_t]+=A[_t]*R,ot[_t]+=ct[_t]*R,j[_t]===bo&&rt[_t]>0&&(p[_t]+=Math.sin(ot[_t]*.7+_t)*.4*R),Q[_t]&&E[_t]<0){const Se=ht(p[_t],v[_t])+.03;if(_[_t]<=Se){if(Q[_t]===2){H[_t]=0,ut--;continue}_[_t]=Se,mt[_t]=1,N[_t]=1,B[_t]=0,K[_t]=0,ot[_t]=Math.PI/2+ft(-.15,.15),T[_t]>1.2&&(T[_t]=1.2)}}}const ie=1-T[_t]/w[_t],re=Math.min(1,ie*12),se=mt[_t]?Math.min(1,T[_t]/1.2):Math.min(1,T[_t]/(w[_t]*.35)),$t=b[_t]+(S[_t]-b[_t])*ie,xe=At*4;k[xe]=p[_t],k[xe+1]=_[_t],k[xe+2]=v[_t],k[xe+3]=j[_t],D[xe]=N[_t],D[xe+1]=B[_t],D[xe+2]=K[_t],D[xe+3]=ot[_t],pt[xe]=$t,pt[xe+1]=$t*C[_t],pt[xe+2]=$[_t],pt[xe+3]=0,St[xe]=vt[_t],St[xe+1]=Z[_t],St[xe+2]=X[_t],St[xe+3]=z[_t]*re*se,At++}if(l.geo.instanceCount=At,At>0)for(let _t=0;_t<Qa.length;_t++){const ie=l.attrs[Qa[_t]],re=x[_t];re.count=At*4,ie.updateRanges.length=0,ie.updateRanges.push(re),ie.needsUpdate=!0}h.visible=At>0;const Lt=d.attrs.iRing.array,Ft=d.attrs.iRingN.array,Ht=d.attrs.iRingC.array,zt=d.attrs.iRingF.array;let te=0;for(let _t=0;_t<a;_t++){if(!Dt[_t])continue;if(y[_t]>0){y[_t]-=R;continue}Xt[_t]+=R;const ie=Xt[_t]/U[_t];if(ie>=1){Dt[_t]=0;continue}const re=1-(1-ie)*(1-ie)*(1-ie),se=te*4;Lt[se]=Et[_t],Lt[se+1]=Ot[_t],Lt[se+2]=st[_t],Lt[se+3]=Bt[_t]+(Jt[_t]-Bt[_t])*re,Ft[se]=xt[_t],Ft[se+1]=F[_t],Ft[se+2]=et[_t],Ft[se+3]=kt[_t]+(Kt[_t]-kt[_t])*ie,Ht[se]=q[_t],Ht[se+1]=at[_t],Ht[se+2]=bt[_t],Ht[se+3]=wt[_t]*(1-ie*ie),zt[te*2]=Gt[_t],zt[te*2+1]=Nt[_t]*(1-ie),te++}if(d.geo.instanceCount=te,te>0)for(let _t=0;_t<tc.length;_t++){const ie=d.attrs[tc[_t]],re=m[_t];re.count=te*ie.itemSize,ie.updateRanges.length=0,ie.updateRanges.push(re),ie.needsUpdate=!0}g.visible=te>0}function I(){H.fill(0),Dt.fill(0),yt.fill(0),ut=0,en=0,Fe=NaN,l.geo.instanceCount=0,d.geo.instanceCount=0,h.visible=!1,g.visible=!1}function L(){for(const R of Ae)typeof R=="function"&&R();s.remove(h,g),l.geo.dispose(),d.geo.dispose(),u.dispose(),f.dispose()}return{update:hn,clear:I,dispose:L,get count(){return l.geo.instanceCount},get ringCount(){return d.geo.instanceCount}}}const ue={enabled:!0,pulling:!1,pull:0,strike:-1,placing:!1,hint:0};function Dy(){ue.enabled=!0,ue.pulling=!1,ue.pull=0,ue.strike=-1,ue.placing=!1,ue.hint=0}const hi=Wt.R,hl=.04,ec=220,nc=120,zy=.2,Ff={halfW:.27,haloW:.08,period:1,speed:2,startGap:hi+.1},Of={halfW:.42,haloW:.09,startGap:hi+.12},Uy=.95,Ny=1.55,Fy=hi+.22,Oy=.85,Fn={rest:.12,travel:2.4,elev:9*Math.PI/180,hold:.12},kf=pe.eightArrow;class Ne{constructor(t){this.value=t}}const ky=`
attribute float aDist;
attribute float aSide;
varying float vDist;
varying float vSide;
void main() {
  vDist = aDist;
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,By=`
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
varying float vDist;
varying float vSide;

float coverage(float d, float aa) { return 1.0 - smoothstep(-aa, aa, d); }

void main() {
  float across = vSide * uHalfW;
  float aa = max(fwidth(across), fwidth(vDist)) * 0.75 + 1e-4;
  float inner = uHalfW - uHaloW;
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
}`,Hy=`
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
}`,Gy=`
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
const float BALL_R = ${hi.toFixed(3)};

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
  float hu = (vLocal.x + vLocal.y) * 2.2;
  float hfw = fwidth(hu);
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
    float stripe = 1.0 - smoothstep(0.22 - hfw, 0.22 + hfw, abs(fract(hu) - 0.5));
    float hatch = stripe * smoothstep(0.35, 0.65, vMask) * inside;
    a = outside * 0.24;
    over(col, a, uWhite, inside * mix(0.08, 0.16, uActive));
    over(col, a, uShade, hatch * 0.34);
    over(col, a, uShade, haloBand * 0.55 * mix(dash, 1.0, 0.35));
    over(col, a, uWhite, band * dash * pulse);
    a *= uRingA;
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
}`;function Bf(i,t){return new gn({uniforms:{uColor:{value:new ae(t.color)},uHalo:{value:new ae(pe.guideHalo)},uHaloAlpha:new Ne(t.haloAlpha),uHalfW:new Ne(t.halfW),uHaloW:new Ne(t.haloW),uLen:new Ne(1),uStartGap:new Ne(t.startGap),uEndGap:new Ne(0),uFadeLen:new Ne(0),uPeriod:new Ne(t.period||1),uSpeed:new Ne(t.speed||0),uTime:i,uOpacity:new Ne(1),uArrow:new Ne(t.arrow?1:0),uHead:new Ne(1),uStub:new Ne(1e6)},vertexShader:ky,fragmentShader:By,transparent:!0,depthWrite:!1,toneMapped:!1,side:yn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function Hf(i,t){const e=i*2,n=new Ve,s=new Float32Array(e*6),r=new Float32Array(e*2),o=new Float32Array(e*2);for(let h=0;h<e;h++)o[h*2]=-1,o[h*2+1]=1;const a=new Uint16Array((e-1)*6);for(let h=0;h<e-1;h++){const d=h*2;a[h*6]=d,a[h*6+1]=d+1,a[h*6+2]=d+2,a[h*6+3]=d+1,a[h*6+4]=d+3,a[h*6+5]=d+2}n.setIndex(new ke(a,1));const c=new ke(s,3).setUsage(Fi),l=new ke(r,1).setUsage(Fi);n.setAttribute("position",c),n.setAttribute("aDist",l),n.setAttribute("aSide",new ke(o,1)),n.setDrawRange(0,0),n.boundingSphere=new Vi(new J,1e4);const u=new De(n,t);return u.frustumCulled=!1,{mesh:u,geo:n,pos:s,dist:r,posAttr:c,distAttr:l,maxPairs:e,len:0,pairs:0}}function ic(i,t,e,n,s,r,o,a){const c=i.pos,l=t*6,u=e-s,h=n-r,d=e+s,f=n+r;return c[l]=u,c[l+1]=a(u,h)+hl,c[l+2]=h,c[l+3]=d,c[l+4]=a(d,f)+hl,c[l+5]=f,i.dist[t*2]=o,i.dist[t*2+1]=o,t+1}function Gf(i,t,e,n,s){let r=0,o=0;for(let a=0;a<e&&r<i.maxPairs-1;a++){const c=t[a*2],l=t[a*2+1];let u=0,h=0,d=0,f=0;if(a>0){u=c-t[a*2-2],h=l-t[a*2-1];const x=Math.sqrt(u*u+h*h);o+=x,x>0&&(u/=x,h/=x)}if(a<e-1){d=t[a*2+2]-c,f=t[a*2+3]-l;const x=Math.sqrt(d*d+f*f);x>0&&(d/=x,f/=x)}if(a===0&&(u=d,h=f),a===e-1&&(d=u,f=h),u*d+h*f>.6){let x=-(h+f),m=u+d;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const _=-x*h+m*u,v=s/(_>.8?_:.8);r=ic(i,r,c,l,x*v,m*v,o,n)}else r=ic(i,r,c,l,-h*s,u*s,o,n),r=ic(i,r,c,l,-f*s,d*s,o,n)}return i.pairs=r,i.len=o>.001?o:.001,i.posAttr.needsUpdate=!0,i.distAttr.needsUpdate=!0,i.geo.setDrawRange(0,r>1?(r-1)*6:0),i.len}function Vf(i,t,e,n){const s=i.length>>1;if(s<1)return 0;let r=0;e[0]=i[0],e[1]=i[1],r=1;let o=0,a=i[0],c=i[1];for(let l=1;l<s;l++){const u=i[l*2],h=i[l*2+1],d=u-a,f=h-c,g=Math.sqrt(d*d+f*f);if(g<1e-6)continue;o+=g;let x=!1;if(l<s-1){const p=i[l*2+2]-u,_=i[l*2+3]-h,v=Math.sqrt(p*p+_*_);v>1e-6&&(x=(d*p+f*_)/(g*v)<.995)}const m=l===s-1;if(m||x||o>=t||r>=n-1){if(r>=n-1&&!m){a=u,c=h;continue}e[r*2]=u,e[r*2+1]=h,r++,o=0}a=u,c=h}return r===1&&s>1&&(e[2]=i[s*2-2],e[3]=i[s*2-1],r=2),r}const Vy=0,Wy=1,Xy=2,qy=3,Yy=[0,3,1,2],Ky=[40,8,6,6];function jy(i){const t=[];let e=0,n=0;for(let p=0;p<4;p++){const _=Ky[p];t.push({seg:_,v0:e,count:(_+1)*(_+1),half:1,cx:NaN,cz:NaN}),e+=(_+1)*(_+1),n+=_*_*2}const s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Float32Array(e),a=new Float32Array(e),c=new Uint16Array(n*3);let l=0;for(let p=0;p<4;p++){const{seg:_,v0:v,count:M}=t[p];for(let E=0;E<M;E++)o[v+E]=Yy[p];for(let E=0;E<_;E++)for(let A=0;A<_;A++){const T=v+E*(_+1)+A,w=T+1,b=T+_+1,S=b+1;c[l++]=T,c[l++]=b,c[l++]=w,c[l++]=w,c[l++]=b,c[l++]=S}}const u=new Ve,h=new ke(s,3).setUsage(Fi),d=new ke(r,2).setUsage(Fi),f=new ke(a,1).setUsage(Fi);u.setAttribute("position",h),u.setAttribute("aLocal",d),u.setAttribute("aKind",new ke(o,1)),u.setAttribute("aMask",f),u.setIndex(new ke(c,1)),u.boundingSphere=new Vi(new J,1e4);const g={uTime:i,uOpacity:new Ne(1),uPlaceR:new Ne(4),uDashes:new Ne(24),uActive:new Ne(0),uRingA:new Ne(1),uGhostA:new Ne(0),uMarkA:new Ne(0),uMarkKind:new Ne(0),uHintA:new Ne(0),uFwd:{value:new Zt(0,-1)},uNormal:{value:new Zt(1,0)},uWhite:{value:new ae(pe.guideWhite)},uShade:{value:new ae(pe.guideHalo)},uWarn:{value:new ae(pe.guideWarn)}},x=new gn({uniforms:g,vertexShader:Hy,fragmentShader:Gy,transparent:!0,depthWrite:!1,toneMapped:!1,side:yn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),m=new De(u,x);return m.frustumCulled=!1,m.renderOrder=5,{mesh:m,geo:u,mat:x,uniforms:g,parts:t,pos:s,local:r,mask:a,posAttr:h,localAttr:d,maskAttr:f}}function wo(i,t,e,n,s,r,o){const a=i.parts[t],{seg:c,v0:l}=a,u=i.pos,h=i.local,d=i.mask;for(let f=0;f<=c;f++){const g=f/c*2*s-s;for(let x=0;x<=c;x++){const m=x/c*2*s-s,p=l+f*(c+1)+x,_=e+m,v=n+g;u[p*3]=_,u[p*3+1]=r(_,v)+hl,u[p*3+2]=v,h[p*2]=m,h[p*2+1]=g,d[p]=o&&o(_,v)?1:0}}a.cx=e,a.cz=n,a.half=s,i.posAttr.needsUpdate=!0,i.localAttr.needsUpdate=!0,o&&(i.maskAttr.needsUpdate=!0)}function $y(){const a=[[0,0,4030425],[0,.07,4030425],[.025,.1,4030425],[.07,.104,4030425],[.07,.104,16183516],[.24,.107,16183516],[.24,.107,15320720],[3.4,.15,15320720],[3.4,.155,16183516],[3.48,.155,16183516],[3.48,.156,7027231],[4.7,.18,7027231],[4.7,.182,16763196],[4.8,.183,16763196],[4.8,.184,2302763],[5.9,.19,2302763],[5.9,.192,7027231],[6.35,.196,7027231],[6.35,.196,1447452],[6.43,.17,1447452],[6.43,0,1447452]],c=14,l=a.length*c,u=new Float32Array(l*3),h=new Float32Array(l*3),d=new ae;for(let _=0;_<a.length;_++){const[v,M,E]=a[_];d.setHex(E);for(let A=0;A<c;A++){const T=A/c*Math.PI*2,w=(_*c+A)*3;u[w]=v,u[w+1]=Math.cos(T)*M,u[w+2]=Math.sin(T)*M,h[w]=d.r,h[w+1]=d.g,h[w+2]=d.b}}const f=[];for(let _=0;_<a.length-1;_++)for(let v=0;v<c;v++){const M=_*c+v,E=_*c+(v+1)%c,A=M+c,T=E+c;f.push(M,E,A,E,T,A)}const g=new Ve;g.setAttribute("position",new ke(u,3)),g.setAttribute("color",new ke(h,3)),g.setIndex(f),g.computeVertexNormals();const x=g.attributes.normal.array;for(let _=0;_<x.length;_++)x[_]!==x[_]&&(x[_]=0);g.computeBoundingSphere();const m=new r1({vertexColors:!0,roughness:.42,metalness:0}),p=new De(g,m);return p.castShadow=!1,p.receiveShadow=!1,p.frustumCulled=!1,p}function Zy(i){const t=new Ne(0),e=new os;e.name="guides";const n=jy(t),s=Bf(t,{color:pe.guideWhite,haloAlpha:.6,...Ff}),r=Bf(t,{color:kf,haloAlpha:.7,arrow:!0,...Of}),o=Hf(ec,s),a=Hf(nc,r);o.mesh.renderOrder=10,a.mesh.renderOrder=11;const c=$y();e.add(n.mesh,o.mesh,a.mesh,c),i&&i.scene&&i.scene.add(e);const l=new Float64Array(Math.max(ec,nc)*2),u=new ae(pe.guideWhite),h=new ae(pe.guideWarn),d=new ae(kf),f=new J(1,0,0),g=new J,x=n.uniforms,m={visible:!0,fade:0,t:0,lastState:"idle",level:null,intent:null,guide:null,ringX:NaN,ringZ:NaN,hintA:0,gap:1.4,hold:0,aimX:1,aimZ:0,spin:0,ballX:0,ballZ:0,aimKey:0,poseKey:-1,poseGap:NaN};function p(){n.mesh.visible=!1,o.mesh.visible=!1,a.mesh.visible=!1}p(),c.visible=!1;function _(T,w){const S=T.level.heightAt,C=w&&w.cue;if(!C||C.points.length<4)o.geo.setDrawRange(0,0),x.uGhostA.value=0;else{const vt=Vf(C.points,zy,l,ec),Z=Gf(o,l,vt,S,Ff.halfW),X=s.uniforms;X.uLen.value=Z,X.uColor.value.copy(w.warn?h:u),X.uEndGap.value=C.hit?hi*.9:0,X.uFadeLen.value=C.hit?0:Math.min(3,Z*.4),C.hit?(x.uGhostA.value=1,wo(n,Xy,C.ghost.x,C.ghost.z,Fy,S,null),x.uNormal.value.set(C.normal.x,C.normal.z)):x.uGhostA.value=0}const N=w&&w.eight;if(!N||N.points.length<4){a.geo.setDrawRange(0,0),x.uMarkA.value=0;return}const B=Vf(N.points,.25,l,nc),K=Gf(a,l,B,S,Of.halfW),ot=r.uniforms;ot.uLen.value=K;let ct=1e6;if(N.bounce){let vt=0;for(let Z=1;Z<B;Z++){const X=l[Z*2]-l[Z*2-2],z=l[Z*2+1]-l[Z*2-1];if(vt+=Math.sqrt(X*X+z*z),Math.abs(l[Z*2]-N.bounce.x)<1e-6&&Math.abs(l[Z*2+1]-N.bounce.z)<1e-6){ct=vt;break}}}if(ot.uStub.value=ct,N.hazard){ot.uColor.value.copy(h),ot.uHead.value=0,ot.uEndGap.value=.62,x.uMarkA.value=1,x.uMarkKind.value=N.hazard==="water"?0:1;const vt=(B-1)*2;wo(n,qy,l[vt],l[vt+1],Uy,S,null)}else ot.uColor.value.copy(d),ot.uHead.value=1,ot.uEndGap.value=0,x.uMarkA.value=0}function v(T,w,b){if(b)m.gap=-.02;else if(ue.strike>=0){const Z=Fn.rest+ue.pull*Fn.travel,X=ue.strike;m.gap=Z+(-.02-Z)*X*X}else if(ue.pulling)m.gap=Fn.rest+ue.pull*Fn.travel;else if(m.gap!==Fn.rest){const Z=w*12>1?1:w*12;m.gap+=(Fn.rest-m.gap)*Z,Math.abs(m.gap-Fn.rest)<.001&&(m.gap=Fn.rest)}if(m.gap===m.poseGap&&m.poseKey===m.aimKey)return;m.poseGap=m.gap,m.poseKey=m.aimKey;const S=m.spin*hi*.55,C=Math.sqrt(Math.max(hi*hi-S*S,0))+m.gap,N=m.aimX,B=m.aimZ,K=m.ballX-N*C-B*S,ot=m.ballZ-B*C+N*S,ct=T.level.heightAt(m.ballX,m.ballZ)+hi,vt=Math.cos(Fn.elev);g.set(-N*vt,Math.sin(Fn.elev),-B*vt),c.quaternion.setFromUnitVectors(f,g),c.position.set(K,ct,ot)}function M(T){const w=Math.sqrt(T.dx*T.dx+T.dz*T.dz)||1;m.aimX=T.dx/w,m.aimZ=T.dz/w,m.spin=T.spin,m.ballX=T.x,m.ballZ=T.z,m.aimKey++}function E(T,w){m.t+=w,t.value=m.t;const b=T?T.state:"idle",S=!!(T&&T.world&&T.level&&b==="ready");m.lastState==="ready"&&b==="rolling"&&(m.hold=Fn.hold),b!==m.lastState&&b==="ready"&&(m.gap=1.4,m.intent=null),m.lastState=b;const C=m.visible&&S&&ue.enabled;if(C?m.fade=m.fade+w/.18>1?1:m.fade+w/.18:m.fade=0,C?c.visible=!0:m.hold>0&&m.visible&&T&&T.level?(m.hold-=w,c.visible=m.hold>0):(m.hold=0,c.visible=!1),!C){p(),c.visible&&v(T,w,!0);return}const N=T.level;N!==m.level&&(m.level=N,m.aimKey++,m.ringX=NaN,m.intent=null,m.guide=null,x.uPlaceR.value=N.placeR,x.uDashes.value=Math.max(12,Math.round(2*Math.PI*N.placeR/1.25)));const B=T.world.balls[1];(B.x!==m.ringX||B.z!==m.ringZ)&&(m.ringX=B.x,m.ringZ=B.z,wo(n,Vy,B.x,B.z,N.placeR+Oy,N.heightAt,N.hazardAt));const K=T.intent;if(K!==m.intent){m.intent=K,M(K),wo(n,Wy,K.x,K.z,Ny,N.heightAt,null);const vt=T.guide();vt!==m.guide&&(m.guide=vt,_(T,vt))}const ot=m.fade;x.uOpacity.value!==ot&&(x.uOpacity.value=ot,s.uniforms.uOpacity.value=ot,r.uniforms.uOpacity.value=ot),x.uActive.value=ue.placing?1:0;const ct=ue.placing?0:ue.hint;if(m.hintA!==ct){const vt=w*4>1?1:w*4;m.hintA+=(ct-m.hintA)*vt,Math.abs(m.hintA-ct)<.002&&(m.hintA=ct),x.uHintA.value=m.hintA}if(i&&i.camera){const vt=i.camera.matrixWorld.elements,Z=Math.sqrt(vt[8]*vt[8]+vt[10]*vt[10]);if(Z>1e-4){const X=-vt[8]/Z,z=-vt[10]/Z,$=x.uFwd.value;(X!==$.x||z!==$.y)&&$.set(X,z)}}n.mesh.visible=!0,o.mesh.visible=o.geo.drawRange.count>0,a.mesh.visible=a.geo.drawRange.count>0,v(T,w,!1)}const A={update:E,setVisible(T){m.visible=!!T},dispose(){e.parent&&e.parent.remove(e),n.geo.dispose(),n.mat.dispose(),o.geo.dispose(),a.geo.dispose(),s.dispose(),r.dispose(),c.geometry.dispose(),c.material.dispose()}};return Object.defineProperty(A,"_debug",{value:{group:e,decals:n,cuePath:o,arrow:a,stick:c,cueMat:s,arrowMat:r,st:m},enumerable:!1}),A}const Wf="ebg-shot-style",Jy=6,hd=30,Xf=14,gr=100,xr=100,vr=122,dl=84,Qy=10,t2=6,e2=10,qf=8,n2=`
.ebg-shot{position:absolute;inset:0;z-index:20;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .16s ease,visibility 0s linear .16s;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;font-family:"Fredoka",system-ui,sans-serif;font-weight:600;color:#fff;--top:${hd}px;--travel:150px}
.ebg-shot.on{opacity:1;visibility:visible;transition:opacity .2s ease}
.ebg-txt{-webkit-text-stroke:4px #13261b;paint-order:stroke fill;text-shadow:0 2px 0 rgba(0,0,0,.25)}
@supports not (paint-order:stroke){.ebg-txt{-webkit-text-stroke:0;text-shadow:0 0 2px #13261b,0 0 2px #13261b,0 2px 0 #13261b}}
.ebg-num{font-family:"Lilita One",system-ui,sans-serif;font-weight:400;letter-spacing:.02em}
.ebg-pow{position:absolute;left:0;top:0;width:${gr}px;height:200px;pointer-events:none}
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
.ebg-spin{position:absolute;left:0;top:0;box-sizing:border-box;width:${xr}px;height:${vr}px;display:none;flex-direction:column;align-items:center;justify-content:flex-end;padding:4px;pointer-events:auto;touch-action:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:ew-resize}
.ebg-spin.on{display:flex}
.ebg-spin-row{display:flex;align-items:center;justify-content:center;gap:2px;margin-bottom:6px}
.ebg-spin-label{font-size:14px;line-height:1;letter-spacing:.08em}
.ebg-spin-face{position:relative;flex:none;width:${dl}px;height:${dl}px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffffff 0,#fffdf4 38%,#e6dfca 100%);box-shadow:0 0 0 3px #13261b,0 4px 8px rgba(0,0,0,.3)}
.ebg-spin-axis{position:absolute;left:16%;right:16%;top:50%;height:4px;margin-top:-2px;border-radius:2px;background:rgba(19,38,27,.2)}
.ebg-spin-mid{position:absolute;left:50%;top:50%;width:4px;height:16px;margin:-8px 0 0 -2px;border-radius:2px;background:rgba(19,38,27,.32)}
.ebg-spin-dot{position:absolute;left:50%;top:50%;width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#6ea3ec 0,#3d7fd9 60%,#2f69b8 100%);box-shadow:0 0 0 3px #fff,0 0 0 5px #13261b;transition:transform .14s ease-out}
.ebg-spin.drag .ebg-spin-dot{transition:none}
.ebg-spin-arr{width:22px;height:22px;opacity:.5;transition:opacity .15s,transform .15s}
.ebg-spin-arr.r{transform:scaleX(-1)}
.ebg-spin-arr.hot{opacity:1;transform:scale(1.18)}
.ebg-spin-arr.r.hot{transform:scale(-1.18,1.18)}
.ebg-ff{position:absolute;z-index:20;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom) + 12px));transform:translateX(-50%);padding:6px 16px;border-radius:999px;background:rgba(16,36,26,.5);font-family:"Fredoka",system-ui,sans-serif;font-weight:600;font-size:16px;line-height:1.2;color:#fff;opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s linear .25s,background .15s;pointer-events:none;white-space:nowrap;-webkit-user-select:none;user-select:none}
.ebg-ff.show,.ebg-ff.on{opacity:1;visibility:visible;transition:opacity .25s,background .15s}
.ebg-ff.on{background:rgba(255,138,42,.9)}
.ebg-safe{position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}
`,Yf='<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21C17 12 13.5 8 6 7" stroke="#13261b" stroke-width="7"/><path d="M10.5 2.5L5.5 7l5 4.5" stroke="#13261b" stroke-width="7"/><path d="M17 21C17 12 13.5 8 6 7" stroke="#fff" stroke-width="3"/><path d="M10.5 2.5L5.5 7l5 4.5" stroke="#fff" stroke-width="3"/></g></svg>',i2='<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7" stroke="#13261b" stroke-width="8"/><path d="M5 8l7 7 7-7" stroke="#fff" stroke-width="4"/></g></svg>';function Pe(i,t,e,n){const s=document.createElement(i);return t&&(s.className=t),n&&(s.textContent=n),e&&e.appendChild(s),s}function s2(i,t,e={top:0,right:0,bottom:0,left:0},n=!1){const s=t>i,r=s?Math.max(90,Math.min(170,Math.round(t*.22))):Math.max(110,Math.min(210,Math.round(t*.3))),o=hd+r+Xf,a=Math.max(t2,e.bottom),c=Math.max(Qy,e.right+6);let l,u=null;const h={top:0,right:0,bottom:0,left:0};if(s){l={left:Math.round(i/2-gr/2),top:t-a-o,width:gr,height:o},n&&(u={left:i-c-xr,top:t-a-Xf-vr,width:xr,height:vr});const d=Math.min(l.top,u?u.top:1/0);h.bottom=t-d+qf}else{l={left:i-c-gr,top:t-a-o,width:gr,height:o},n&&(u={left:i-c-xr,top:l.top-e2-vr,width:xr,height:vr});const d=Math.min(l.left,u?u.left:1/0);h.right=i-d+qf}return{portrait:s,travel:r,pow:l,spin:u,insets:h}}function r2(i,t={}){if(typeof document>"u"||!i){const y=()=>{},q={top:0,right:0,bottom:0,left:0};return{setVisible:y,setSpinEnabled:y,setSpin:y,setPull:y,setPreset:y,setPullHint:y,setFastForward:y,cancelPull:y,travel:()=>150,insets:()=>q,layout:y,parts:{},dispose:y}}if(!document.getElementById||!document.getElementById(Wf)){const y=Pe("style");y.id=Wf,y.textContent=n2,(document.head||document.body).appendChild(y)}const e=Pe("div","ebg-shot",i),n=Pe("div","ebg-safe",e),s=Pe("div","ebg-pow",e),r=Pe("div","ebg-clip",s),o=Pe("div","ebg-track",r),a=Pe("div","ebg-fill",o);for(const y of[.25,.5,.75]){const q=Pe("div","ebg-tick",o);q.style.top=y*100+"%"}const c=Pe("div","ebg-last",o),l=Pe("div","ebg-cue",r),u=Pe("div","ebg-pct ebg-txt ebg-num",s,"0%"),h=Pe("div","ebg-hint ebg-txt",s);Pe("span","",h,"Pull");const d=Pe("span","",h);d.innerHTML=i2;const f=Pe("div","ebg-grab",s);f.setAttribute("aria-label","Pull the cue down to shoot");const g=Pe("div","ebg-spin",e),x=Pe("div","ebg-spin-row",g),m=Pe("span","ebg-spin-arr",x);m.innerHTML=Yf,Pe("span","ebg-spin-label ebg-txt",x,"SPIN");const p=Pe("span","ebg-spin-arr r",x);p.innerHTML=Yf;const _=Pe("div","ebg-spin-face",g);Pe("div","ebg-spin-axis",_),Pe("div","ebg-spin-mid",_);const v=Pe("div","ebg-spin-dot",_),M=Pe("div","ebg-ff ebg-txt",i,"Hold to speed up");for(const y of[f,g])y.style.touchAction="none",y.style.webkitTouchCallout="none";let E=null,A=!1,T={top:0,right:0,bottom:0,left:0};const w=dl/2-11-5;function b(){const y={top:0,right:0,bottom:0,left:0};try{if(typeof getComputedStyle=="function"){const q=getComputedStyle(n);y.top=parseFloat(q.paddingTop)||0,y.right=parseFloat(q.paddingRight)||0,y.bottom=parseFloat(q.paddingBottom)||0,y.left=parseFloat(q.paddingLeft)||0}}catch{}return y}const S=y=>Math.round(y)+"px";function C(){const y=typeof window<"u"&&window.innerWidth?window.innerWidth:800,q=typeof window<"u"&&window.innerHeight?window.innerHeight:450;E=s2(y,q,b(),A),e.style.setProperty("--travel",E.travel+"px"),s.style.left=S(E.pow.left),s.style.top=S(E.pow.top),s.style.width=S(E.pow.width),s.style.height=S(E.pow.height),E.spin&&(g.style.left=S(E.spin.left),g.style.top=S(E.spin.top));const at=E.insets,bt=T;(at.top!==bt.top||at.right!==bt.right||at.bottom!==bt.bottom||at.left!==bt.left)&&(T=at,t.onInsets&&t.onInsets({...at}))}typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",C),window.addEventListener("orientationchange",C));let N=!1,B="idle",K=0,ot=0,ct=0,vt=!1;function Z(y,q){K=y<0?0:y>1?1:y,q!==B&&(B=q,s.className="ebg-pow"+(q==="pull"?" pull":q==="strike"?" strike":""),u.className="ebg-pct ebg-txt ebg-num"+(q==="pull"?" show":q==="cancel"?" show fade":""));const at=q==="strike"?0:K*E.travel;l.style.transform="translateY("+at.toFixed(1)+"px)",u.style.transform="translateY("+at.toFixed(1)+"px)",a.style.setProperty("--p",q==="strike"?"0":K.toFixed(4)),u.textContent=(q==="cancel"?0:Math.round(K*100))+"%",q==="pull"&&vt&&X(!1)}function X(y){y=!!y,y!==vt&&(vt=y,h.className="ebg-hint ebg-txt"+(y?" show":""))}function z(y){ot=y<-1?-1:y>1?1:y,v.style.transform="translateX("+(ot*w).toFixed(1)+"px)",m.className="ebg-spin-arr"+(ot<0?" hot":""),p.className="ebg-spin-arr r"+(ot>0?" hot":"")}const $=new Set;function j(y){return!t.ballDown||!t.ballDown(y)?!1:($.add(y.pointerId),!0)}function rt(y,q){if(!$.has(y.pointerId))return!1;q!=="move"&&$.delete(y.pointerId);const at=q==="move"?t.ballMove:q==="up"?t.ballUp:t.ballCancel;return at&&at(y),!0}let O=null;function Q(y){if(!(y.pointerType==="mouse"&&y.button!==0)&&(y.preventDefault&&y.preventDefault(),!(O||$.has(y.pointerId))&&!j(y)&&!(!t.onPullStart||!t.onPullStart(y.pointerId,y.pointerType)))){O={id:y.pointerId,y0:y.clientY,t:0};try{f.setPointerCapture(y.pointerId)}catch{}}}function mt(y){if(rt(y,"move")||!O||y.pointerId!==O.id)return;const q=y.clientY-O.y0-Jy,at=q<=0?0:q>=E.travel?1:q/E.travel;O.t=at,t.onPull&&t.onPull(at)}function H(y,q){if(!O||y.pointerId!==O.id)return;q||mt(y);const at=O.t;O=null;try{f.releasePointerCapture(y.pointerId)}catch{}t.onPullEnd&&t.onPullEnd(at,q)}const tt=y=>{rt(y,"up")||H(y,!1)},ut=y=>{rt(y,"cancel")||H(y,!0)},Et=y=>{O&&y.pointerId===O.id&&y.target!==f&&mt(y)},Ot=y=>{O&&y.pointerId===O.id&&y.target!==f&&H(y,!1)},st=y=>{O&&y.pointerId===O.id&&y.target!==f&&H(y,!0)},xt=y=>{y.cancelable&&y.preventDefault&&y.preventDefault()};f.addEventListener("pointerdown",Q),f.addEventListener("pointermove",mt),f.addEventListener("pointerup",tt),f.addEventListener("pointercancel",ut),typeof window<"u"&&window.addEventListener&&(window.addEventListener("pointermove",Et),window.addEventListener("pointerup",Ot),window.addEventListener("pointercancel",st)),f.addEventListener("touchstart",xt,{passive:!1}),f.addEventListener("touchmove",xt,{passive:!1}),f.addEventListener("contextmenu",xt);let F=null,et={t:-1e9,x:0,y:0};function Bt(y){const q=_.getBoundingClientRect(),at=q.left+q.width/2;return(y-at+F.off)/w}function Jt(y){if(y.pointerType==="mouse"&&y.button!==0||(y.preventDefault&&y.preventDefault(),F||$.has(y.pointerId))||j(y))return;const q=y.timeStamp||0;if(q-et.t<320&&Math.abs(y.clientX-et.x)<24&&Math.abs(y.clientY-et.y)<24){et.t=-1e9,t.onSpin&&t.onSpin(0,"reset");return}const bt=_.getBoundingClientRect(),wt=bt.left+bt.width/2+ot*w,Gt=Math.abs(y.clientX-wt)<=16;F={id:y.pointerId,off:Gt?wt-y.clientX:0,sx:y.clientX,sy:y.clientY,ts:q},g.className="ebg-spin on drag";try{g.setPointerCapture(y.pointerId)}catch{}t.onSpin&&t.onSpin(Bt(y.clientX),"start")}function kt(y){rt(y,"move")||!F||y.pointerId!==F.id||t.onSpin&&t.onSpin(Bt(y.clientX),"move")}function Kt(y){if(rt(y,"up")||!F||y.pointerId!==F.id)return;const q=Bt(y.clientX);et=Math.abs(y.clientX-F.sx)<6&&Math.abs(y.clientY-F.sy)<6?{t:F.ts,x:F.sx,y:F.sy}:{t:-1e9,x:0,y:0},F=null,g.className="ebg-spin on";try{g.releasePointerCapture(y.pointerId)}catch{}t.onSpin&&t.onSpin(q,"end")}function Xt(y){rt(y,"cancel")||!F||y.pointerId!==F.id||(F=null,g.className="ebg-spin on",t.onSpin&&t.onSpin(ot,"end"))}g.addEventListener("pointerdown",Jt),g.addEventListener("pointermove",kt),g.addEventListener("pointerup",Kt),g.addEventListener("pointercancel",Xt),g.addEventListener("touchstart",xt,{passive:!1}),g.addEventListener("touchmove",xt,{passive:!1}),g.addEventListener("contextmenu",xt);const U={setVisible(y){y=!!y,y!==N&&(N=y,e.className="ebg-shot"+(y?" on":""))},setSpinEnabled(y){y=!!y,y!==A&&(A=y,g.className="ebg-spin"+(y?" on":""),C())},setSpin:z,setPull:Z,setPreset(y){const q=y<0?0:y>1?1:y;c.style.top=(q*100).toFixed(2)+"%"},setPullHint:X,setFastForward(y){y!==ct&&(ct=y,M.className="ebg-ff ebg-txt"+(y===1?" show":y===2?" on":""),M.textContent=y===2?"▶▶ 3×":"Hold to speed up")},cancelPull(){if(O){try{f.releasePointerCapture(O.id)}catch{}O=null}F&&(F=null,g.className="ebg-spin"+(A?" on":"")),$.clear()},travel:()=>E.travel,insets:()=>({...T}),layout:C,parts:{root:e,pow:s,grab:f,spin:g,face:_,dot:v,pct:u,hint:h,ff:M,cue:l,fill:a,last:c},dispose(){typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",C),window.removeEventListener("orientationchange",C)),f.removeEventListener("pointerdown",Q),f.removeEventListener("pointermove",mt),f.removeEventListener("pointerup",tt),f.removeEventListener("pointercancel",ut),window.removeEventListener("pointermove",Et),window.removeEventListener("pointerup",Ot),window.removeEventListener("pointercancel",st),f.removeEventListener("touchstart",xt),f.removeEventListener("touchmove",xt),f.removeEventListener("contextmenu",xt),g.removeEventListener("pointerdown",Jt),g.removeEventListener("pointermove",kt),g.removeEventListener("pointerup",Kt),g.removeEventListener("pointercancel",Xt),g.removeEventListener("touchstart",xt),g.removeEventListener("touchmove",xt),g.removeEventListener("contextmenu",xt),e.parentNode&&e.parentNode.removeChild(e),M.parentNode&&M.parentNode.removeChild(M)}};return C(),Z(0,"idle"),z(0),U.setPreset(.5),U}const sc={mouse:4,pen:6,touch:10},Kf=.06,o2=.1,rc=.08,a2=.25,jf=.35,c2=.7,$f=110,Zf=320,l2=.5,u2=2.4,qo=Math.PI/180,f2=1*qo,h2=.1*qo,d2=.1,p2=10;function m2({stage:i,rig:t,play:e,events:n,uiRoot:s,onInsets:r}){Dy(),ue.enabled=!1;const o=typeof window<"u"?window:null,a=typeof document<"u"?document:null,c=i&&i.renderer&&i.renderer.domElement?i.renderer.domElement:null;let l=!1;const u={clock:.5,firedAt:-1e9,readyT:.5,idleT:.5,rollT:.5,aimHoldT:.5,spinHoldT:.5};u.clock=0,u.readyT=0,u.idleT=0,u.rollT=0,u.aimHoldT=0,u.spinHoldT=0;let h=e.state,d=!1;const f={shots:0,placed:!1,placeShots:0};let g=null,x=null,m=null;const p={left:!1,right:!1,shift:!1,a:!1,d:!1,f:!1},_=new Map;let v=null;const M=new Set,E=new Set;let A=1,T={left:0,top:0};const w=r2(s,{onPullStart(P,it){return N()?(g={t0:u.clock,p:0},ue.pulling=!0,ue.pull=0,u.idleT=0,w.setPull(0,"pull"),!0):!1},onPull(P){g&&(g.p=P,ue.pull=P,w.setPull(P,"pull"))},onPullEnd(P,it){if(!g)return;const yt=u.clock-g.t0<o2;g=null,ue.pulling=!1,it||yt||P<Kf||!C()?ot(!0):ct(P)},ballDown(P){return!l||e.state!=="ready"||S()||_.size>0||(X(),!$(Z(P),P.pointerType||"mouse"))?!1:(mt(P,!0),!!(v&&v.kind==="place"&&v.id===P.pointerId))},ballMove:P=>H(P),ballUp:P=>tt(P),ballCancel:P=>ut(P),onInsets(P){typeof r=="function"&&r(P)},onSpin(P,it){!l||e.state!=="ready"||!(e.level&&e.level.spin)||(u.idleT=0,B(it==="reset"?0:P),w.setSpin(e.intent.spin))}}),b=()=>l&&e.state==="ready",S=()=>!!(g||x||m),C=()=>l&&e.state==="ready"&&!m,N=()=>C()&&!S();function B(P){let it=P<-1?-1:P>1?1:P;Math.abs(it)<d2&&(it=0);const yt=e.intent.spin;e.setSpin(it),it===0&&yt!==0&&K(8)}function K(P){try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(P)}catch{}}function ot(P){g=null,x=null,m=null,w.cancelPull(),ue.pulling=!1,ue.pull=0,ue.strike=-1,w.setPull(0,P?"cancel":"idle")}function ct(P){m={t:0,p:P},ue.pulling=!1,ue.pull=P,ue.strike=0,w.setPull(P,"strike")}function vt(P){if(m=null,ue.strike=-1,ue.pull=0,!C()){ot(!1);return}e.setPower(P),e.fire()&&(u.firedAt=u.clock,f.shots++,w.setPull(0,"idle"))}function Z(P){return{x:P.clientX-T.left,y:P.clientY-T.top}}function X(){if(c&&c.getBoundingClientRect){const P=c.getBoundingClientRect();T={left:P.left,top:P.top}}}function z(){const P=e.intent,it=e.level?e.level.heightAt(P.x,P.z)+Wt.R:Wt.R;return t.groundToScreen(P.x,it,P.z)}function $(P,it){const yt=z();if(!yt)return!1;const Ut=e.intent,V=t.pxPerMetre(Ut.x,Ut.z)||20,ft=Math.max(it==="touch"?34:28,.9*V);return Math.hypot(P.x-yt.x,P.y-yt.y)<=ft}function j(){const P=e.intent;return{x:P.x,z:P.z,offset:P.offset}}function rt(P){if(!P||e.state!=="ready")return;e.setPlacement(P.x,P.z);const it=P.offset-e.intent.offset;it!==0&&e.rotateAim(it)}function O(P){P!==A&&(A=P,e.setSpeed(P))}function Q(){const P=_.values(),it=P.next().value,yt=P.next().value;v={kind:"pinch",d0:Math.hypot(it.x-yt.x,it.y-yt.y)||1,cx:(it.x+yt.x)/2,cy:(it.y+yt.y)/2}}function mt(P,it){if(!l)return;P.preventDefault&&P.preventDefault(),X();const yt=Z(P);if(P.isPrimary===!0&&P.pointerType==="touch"&&(_.clear(),M.clear(),E.clear(),v&&v.kind!=="pan"&&(v=null)),E.delete(P.pointerId),P.pointerType==="mouse"&&P.button!==0){if(P.button===2&&S()&&!m){ot(!0);return}(P.button===1||P.button===2)&&(v={kind:"pan",id:P.pointerId,x:yt.x,y:yt.y},xt(P.pointerId));return}if(_.set(P.pointerId,yt),u.idleT=0,e.state==="rolling"){u.clock-u.firedAt>=a2&&M.add(P.pointerId),_.size>=2?Q():v={kind:"ff",id:P.pointerId};return}if(_.size>=2){v&&(v.kind==="place"||v.kind==="aim")&&(rt(v.snap),ue.placing=!1),_.size===2&&Q();return}if(e.state!=="ready"){v={kind:"block"};return}xt(P.pointerId);const Ut=P.pointerType||"mouse",V=z(),ft=it===!0||$(yt,Ut),dt={id:P.pointerId,type:Ut,sx:yt.x,sy:yt.y,t0:u.clock,moved:!1,snap:j(),travelled:0};if(ft)v={...dt,kind:"place",grabX:V.x-yt.x,grabY:V.y-yt.y};else if(v={...dt,kind:"aim",lastX:yt.x,lastY:yt.y,lastTs:P.timeStamp||0,speed:0},Ut!=="touch"){const gt=t.screenToGround(yt.x,yt.y);gt&&e.setAimToward(gt.x,gt.z)}}function H(P){if(!l)return;const it=Z(P);if(v&&v.kind==="pan"&&P.pointerId===v.id){const ne=it.x-v.x,oe=it.y-v.y;v.x=it.x,v.y=it.y,(ne||oe)&&t.panBy(ne,oe);return}if(!_.has(P.pointerId)||(_.set(P.pointerId,it),!v))return;if(v.kind==="pinch"){if(_.size<2)return;const ne=_.values(),oe=ne.next().value,le=ne.next().value,me=Math.hypot(oe.x-le.x,oe.y-le.y)||1,de=(oe.x+le.x)/2,Qt=(oe.y+le.y)/2,ge=me/v.d0;Math.abs(ge-1)>1e-4&&t.zoomBy(ge,de,Qt),(de!==v.cx||Qt!==v.cy)&&t.panBy(de-v.cx,Qt-v.cy),v.d0=me,v.cx=de,v.cy=Qt;return}if(P.pointerId!==v.id||v.kind!=="place"&&v.kind!=="aim"||e.state!=="ready")return;u.idleT=0;const yt=Math.hypot(it.x-v.sx,it.y-v.sy);if(yt>v.travelled&&(v.travelled=yt),v.kind==="place"){if(!v.moved){if(yt<(sc[v.type]||6))return;v.moved=!0,ue.placing=!0}let ne=v.grabX,oe=v.grabY;if(v.type==="touch"){const me=v.travelled>=40?1:v.travelled/40;ne+=(0-ne)*me,oe+=(-52-oe)*me}const le=t.screenToGround(it.x+ne,it.y+oe);le&&e.setPlacement(le.x,le.z);return}if(v.type!=="touch"){!v.moved&&yt>=(sc[v.type]||4)&&(v.moved=!0);const ne=t.screenToGround(it.x,it.y);ne&&e.setAimToward(ne.x,ne.z);return}if(!v.moved){if(yt<sc.touch)return;v.moved=!0,v.lastX=it.x,v.lastY=it.y,v.lastTs=P.timeStamp||0;return}const Ut=z(),V=it.x-v.lastX,ft=it.y-v.lastY,dt=P.timeStamp||0,gt=dt-v.lastTs;if(v.lastX=it.x,v.lastY=it.y,v.lastTs=dt,!Ut)return;const Tt=it.x-V-Ut.x,Y=it.y-ft-Ut.y,ht=Math.hypot(Tt,Y);if(ht<1)return;const Pt=(Tt*ft-Y*V)/ht,It=ht<$f?$f:ht>Zf?Zf:ht;if(gt>0){const ne=Math.hypot(V,ft)/(gt/1e3);v.speed+=(ne-v.speed)*.35}const Rt=v.speed,qt=Rt<=500?0:Rt>=1800?1:(Rt-500)/1300,Yt=jf+(c2-jf)*qt*qt;Pt!==0&&e.rotateAim(Pt/It*Yt)}function tt(P){const it=Z(P),yt=_.delete(P.pointerId);if(M.delete(P.pointerId),E.delete(P.pointerId),v&&v.kind==="pan"&&P.pointerId===v.id){v=null,F(P.pointerId);return}if(!yt||!v)return;if(v.kind==="ff"){P.pointerId===v.id&&(v=null);return}if(v.kind==="pinch"||v.kind==="block"){_.size===0?v=null:v={kind:"block"};return}if(P.pointerId!==v.id)return;F(P.pointerId);const Ut=v;if(v=null,Ut.kind==="place"){ue.placing=!1,Ut.moved&&(f.placed=!0);return}if(Ut.kind==="aim"&&Ut.type==="touch"&&!Ut.moved&&u.clock-Ut.t0<=l2&&l&&e.state==="ready"){const V=t.screenToGround(it.x,it.y);V&&e.setAimToward(V.x,V.z)}}function ut(P){if(_.delete(P.pointerId),M.delete(P.pointerId),E.delete(P.pointerId),v&&v.kind==="pan"&&v.id===P.pointerId){v=null;return}v&&(v.id===P.pointerId||_.size===0)&&(v.kind==="place"&&(ue.placing=!1),v=_.size?{kind:"block"}:null)}function Et(P){if(P.preventDefault&&P.preventDefault(),!l)return;X();const it=Z(P),yt=P.deltaMode===1?P.deltaY*16:P.deltaMode===2?P.deltaY*400:P.deltaY;let Ut=Math.exp(-yt*.0015);Ut=Ut<.8?.8:Ut>1.25?1.25:Ut,t.zoomBy(Ut,it.x,it.y)}const Ot=P=>{P.preventDefault&&P.preventDefault()},st=P=>{P.cancelable!==!1&&P.preventDefault&&P.preventDefault()};function xt(P){try{c&&c.setPointerCapture&&c.setPointerCapture(P)}catch{}}function F(P){try{c&&c.releasePointerCapture&&c.releasePointerCapture(P)}catch{}}c&&(c.style&&(c.style.touchAction="none"),c.addEventListener("pointerdown",mt),c.addEventListener("pointermove",H),c.addEventListener("pointerup",tt),c.addEventListener("pointercancel",ut),c.addEventListener("wheel",Et,{passive:!1}),c.addEventListener("contextmenu",Ot),c.addEventListener("touchstart",st,{passive:!1}),c.addEventListener("touchmove",st,{passive:!1}),c.addEventListener("gesturestart",st));const et=[w.parts.grab,w.parts.spin],Bt=P=>{const it=P.target;return it===c||it&&et.indexOf(it)>=0?!1:_.has(P.pointerId)||E.has(P.pointerId)||v&&v.kind==="pan"&&v.id===P.pointerId},Jt=P=>{Bt(P)&&H(P)},kt=P=>{Bt(P)&&tt(P)},Kt=P=>{Bt(P)&&ut(P)};o&&c&&(o.addEventListener("pointermove",Jt),o.addEventListener("pointerup",kt),o.addEventListener("pointercancel",Kt));function Xt(P){const it=P.target;return!!(it&&(it.tagName==="INPUT"||it.tagName==="TEXTAREA"||it.isContentEditable))}function U(P){if(Xt(P))return;const it=P.code;if(it==="ShiftLeft"||it==="ShiftRight"){p.shift=!0;return}if(l&&((it==="Space"||it.startsWith("Arrow"))&&P.preventDefault(),!P.repeat))switch(it){case"ArrowLeft":case"ArrowRight":{const yt=it==="ArrowLeft";yt?p.left=!0:p.right=!0,u.aimHoldT=0,b()&&(u.idleT=0,e.rotateAim((yt?-1:1)*(P.shiftKey||p.shift?h2:f2)));break}case"KeyA":case"KeyD":{it==="KeyA"?p.a=!0:p.d=!0,u.spinHoldT=0,q(it==="KeyA"?-1:1);break}case"Space":N()&&(x={t:0,p:0},ue.pulling=!0,ue.pull=0,u.idleT=0,w.setPull(0,"pull"));break;case"Backspace":case"KeyX":(g||x)&&ot(!0);break;case"KeyO":case"KeyV":n.emit("ui:overview",{on:!d});break;case"KeyF":p.f=!0;break}}function y(P){const it=P.code;if(it==="ShiftLeft"||it==="ShiftRight"){p.shift=!1;return}if(it==="ArrowLeft")p.left=!1;else if(it==="ArrowRight")p.right=!1;else if(it==="KeyA")p.a=!1;else if(it==="KeyD")p.d=!1;else if(it==="KeyF")p.f=!1;else if(it==="Space"&&x){const yt=x.p;x=null,ue.pulling=!1,yt>=Kf&&C()?ct(yt):ot(!0)}}function q(P){if(!b()||!(e.level&&e.level.spin))return;u.idleT=0;const it=Math.round((e.intent.spin+P*.1)*10)/10;e.setSpin(it<-1?-1:it>1?1:it)}function at(){S()&&ot(!1),p.left=p.right=p.shift=p.a=p.d=p.f=!1,_.clear(),v&&v.kind==="place"&&(ue.placing=!1),v=null,M.clear(),E.clear()}function bt(){a&&a.visibilityState==="hidden"&&at()}o&&(o.addEventListener("keydown",U),o.addEventListener("keyup",y),o.addEventListener("blur",at),o.addEventListener&&c&&o.addEventListener("resize",X)),a&&a.addEventListener&&a.addEventListener("visibilitychange",bt);const wt=[n.on("ui:overview",({on:P})=>{d=!!P}),n.on("ad:start",()=>at()),n.on("shot:fire",()=>{u.firedAt=u.clock,u.rollT=0,w.setVisible(!1)}),n.on("hole:start",()=>{d=!1})];let Gt=!1,Nt=!1,Dt=null,W=0;function G(P){u.clock+=P;const it=e.state;if(it!==h){if(it==="ready"){u.readyT=0,u.idleT=0;for(const gt of _.keys())E.add(gt);_.clear(),M.clear(),v&&v.kind!=="pan"&&(v=null)}h==="ready"&&S()&&!m&&ot(!1),h=it}if(m&&(m.t+=P,ue.strike=m.t/rc>1?1:m.t/rc,m.t>=rc&&vt(m.p)),x){x.t+=P;const gt=x.t/u2%1;x.p=1-Math.abs(1-2*gt),ue.pull=x.p,w.setPull(x.p,"pull")}if(b()){u.readyT+=P,u.idleT+=P;const gt=(p.right?1:0)-(p.left?1:0);if(gt!==0&&(u.aimHoldT+=P,u.idleT=0,u.aimHoldT>.25)){const Y=p.shift?3*qo:(30+60*Math.min(1,(u.aimHoldT-.25)/1.2))*qo;e.rotateAim(gt*Y*P)}const Tt=(p.d?1:0)-(p.a?1:0);Tt!==0&&(u.spinHoldT+=P,u.spinHoldT>.35&&(u.spinHoldT-=.1,q(Tt)))}const yt=l&&it==="rolling";yt&&(u.rollT+=P),it!=="rolling"&&M.size&&M.clear(),O(yt&&(p.f||M.size>0)?3:1);const Ut=yt?A>1?2:u.rollT>1.5?1:0:0;Ut!==W&&(W=Ut,w.setFastForward(Ut));const V=l&&it==="ready";V!==Gt&&(Gt=V,w.setVisible(V),!V&&S()&&!m&&ot(!1));const ft=!!(e.level&&e.level.spin);ft!==Nt&&(Nt=ft,w.setSpinEnabled(ft)),e.intent!==Dt&&(Dt=e.intent,w.setSpin(e.intent.spin),w.setPreset(e.lastPower!==void 0?e.lastPower:e.intent.power));const dt=u.idleT>p2;w.setPullHint(V&&!S()&&(f.shots===0&&u.readyT>.6||dt)),ue.hint=V&&!v&&(!f.placed&&f.shots<3&&u.readyT>.4||dt)?1:0,ue.enabled=l}function nt(P){P=!!P,P!==l&&(l=P,ue.enabled=P,P?(X(),e.state==="ready"&&(Gt=!0,w.setVisible(!0))):(S()&&ot(!1),_.clear(),v&&v.kind==="place"&&(ue.placing=!1),v=null,M.clear(),p.left=p.right=p.a=p.d=p.f=!1,O(1),Gt=!1,w.setVisible(!1),W=0,w.setFastForward(0),w.setPullHint(!1)))}function Mt(){nt(!1);for(const P of wt)P();c&&(c.removeEventListener("pointerdown",mt),c.removeEventListener("pointermove",H),c.removeEventListener("pointerup",tt),c.removeEventListener("pointercancel",ut),c.removeEventListener("wheel",Et),c.removeEventListener("contextmenu",Ot),c.removeEventListener("touchstart",st),c.removeEventListener("touchmove",st),c.removeEventListener("gesturestart",st)),o&&(o.removeEventListener("keydown",U),o.removeEventListener("keyup",y),o.removeEventListener("blur",at),o.removeEventListener("resize",X),o.removeEventListener("pointermove",Jt),o.removeEventListener("pointerup",kt),o.removeEventListener("pointercancel",Kt)),a&&a.removeEventListener&&a.removeEventListener("visibilitychange",bt),w.dispose()}const lt={enable:nt,update:G,dispose:Mt,insets:()=>w.insets()};return Object.defineProperty(lt,"_debug",{value:{hud:w,session:f,get gesture(){return v}},enumerable:!1}),lt}function Ct(i,t,e){const[n,...s]=i.split("."),r=document.createElement(n||"div");if(s.length&&(r.className=s.join(" ")),t)for(const o in t){const a=t[o];if(!(a==null||a===!1))if(o==="html")r.innerHTML=a;else if(o==="text")r.textContent=a;else if(o.startsWith("on"))r.addEventListener(o.slice(2),a);else if(o==="style")for(const c in a)c.startsWith("--")?r.style.setProperty(c,a[c]):r.style[c]=a[c];else r.setAttribute(o,a===!0?"":String(a))}return e!==void 0&&dd(r,e),r}function dd(i,t){if(Array.isArray(t)){for(const e of t)dd(i,e);return}t==null||t===!1||i.appendChild(typeof t=="string"||typeof t=="number"?document.createTextNode(String(t)):t)}const Ue={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4.5" width="4.6" height="15" rx="1.8"/><rect x="13.9" y="4.5" width="4.6" height="15" rx="1.8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.8 12S5.6 5 12 5s10.2 7 10.2 7-3.8 7-10.2 7S1.8 12 1.8 12z"/><circle cx="12" cy="12" r="3.6" class="pupil"/></svg>',play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 4.8v14.4a1 1 0 0 0 1.5.9l11-7.2a1 1 0 0 0 0-1.8L9 3.9a1 1 0 0 0-1.5.9z"/></svg>',retry:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" fill="none" stroke-width="3" stroke-linecap="round"/><path d="M3.4 3.6l.6 5.6 5.5-1.2z"/></svg>',grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="3" width="7.6" height="7.6" rx="2"/><rect x="3" y="13.4" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="13.4" width="7.6" height="7.6" rx="2"/></svg>',soundOn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.6 8.6a5 5 0 0 1 0 6.8M18.4 5.9a9 9 0 0 1 0 12.2" fill="none" stroke-width="2.4" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.8 9.2l5.4 5.6M21.2 9.2l-5.4 5.6" fill="none" stroke-width="2.6" stroke-linecap="round"/></svg>',ball:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="9" cy="9" r="2.6" fill="#fff" opacity=".85"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.2L8 12l6.8 6.8" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',lock:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5" fill="none" stroke-width="2.8"/><rect x="4.8" y="10" width="14.4" height="11" rx="3"/></svg>',star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4l2.85 6 6.6.75-4.9 4.5 1.35 6.5L12 16.85 6.1 20.15l1.35-6.5-4.9-4.5 6.6-.75z"/></svg>'};function g2(i,{events:t}={}){const e=(E,A)=>t&&t.emit(E,A);let n=!1,s=!1,r=0,o=0;const a=Ct("b.hud-num",null,"1"),c=Ct("div.hud-ball",null,a),l=Ct("span.hud-name",null,""),u=Ct("span.hud-par",null,"Par 2"),h=Ct("div.hud-chip.hud-hole",null,[c,Ct("div.hud-meta",null,[l,u])]),d=Ct("b.hud-strokes-n",null,"0"),f=Ct("div.hud-pips",{"aria-hidden":"true"}),g=Ct("span.hud-pop",{"aria-hidden":"true"},"+1"),x=Ct("div.hud-chip.hud-strokes",{role:"status","aria-live":"polite"},[Ct("span.hud-lbl",null,"Strokes"),d,f,g]),m=Ct("button.hud-btn.hud-eye",{type:"button","aria-label":"Look at the whole hole","aria-pressed":"false",html:Ue.eye,onclick:()=>v(!n,!0)}),p=Ct("button.hud-btn.hud-pause",{type:"button","aria-label":"Pause",html:Ue.pause,onclick:()=>e("ui:pause",{})}),_=Ct("div.hud",{"data-shown":"false"},[h,x,Ct("div.hud-btns",null,[m,p])]);i.appendChild(_);function v(E,A){n=!!E,m.setAttribute("aria-pressed",n?"true":"false"),m.classList.toggle("on",n),A&&e("ui:overview",{on:n})}function M(){const E=Math.max(o,Math.min(r,o+4));for(;f.childNodes.length>E;)f.removeChild(f.lastChild);for(;f.childNodes.length<E;)f.appendChild(Ct("i.pip"));for(let A=0;A<E;A++){const T=f.childNodes[A];T.className="pip"+(A<r?" used":"")+(A>=o?" over":"")}}return t&&(t.on("ui:overview",({on:E}={})=>{!!E!==n&&v(E,!1)}),t.on("shot:end",({penalty:E}={})=>{E&&(g.classList.remove("go"),g.offsetWidth,g.classList.add("go"))})),{el:_,setHole(E,A){a.textContent=String((A|0)+1),l.textContent=E&&E.name?E.name:"",u.textContent="Par "+(E?E.par:""),_.setAttribute("data-round",String(E&&E.round?E.round:1)),n&&v(!1,!0)},setStrokes(E,A){const T=Math.max(0,E|0),w=T>r;r=T,A!==void 0&&(o=Math.max(1,A|0)),d.textContent=String(r),x.classList.toggle("over",r>o),M(),w&&(d.classList.remove("bump"),d.offsetWidth,d.classList.add("bump"))},show(E){s=!!E,_.setAttribute("data-shown",s?"true":"false")}}}const Jf=350,x2=1400,v2=5200,_2=1900,M2=1700,y2=3e3,S2={ace:"Unbelievable!",albatross:"Amazing shot!",eagle:"Superb!",birdie:"Great shot!",par:"Well played!",bogey:"So close!",double:"Nice try!",over:"Keep going!",picked:"Try again for a star!"},b2={ace:"Hole-in-one!",albatross:"Albatross!",eagle:"Eagle!",birdie:"Birdie!",par:"Par!"},dn="#13261b";function w2(i,t,e,n,s){let r="";for(let o=0;o<s*2;o++){const a=o*Math.PI/s-Math.PI/2,c=o%2?n:e;r+=(o?"L":"M")+(i+Math.cos(a)*c).toFixed(1)+" "+(t+Math.sin(a)*c).toFixed(1)}return r+"Z"}const Is=(i,t,e)=>`<g transform="${e}" stroke="${dn}" stroke-width="3" stroke-linejoin="round"><path d="M15 34l-10-5 2.5 10z" fill="${t}"/><ellipse cx="29" cy="37" rx="16" ry="13" fill="${i}"/><circle cx="41" cy="25" r="10" fill="${i}"/><path d="M50 22.5l9 3.5-9 3.5z" fill="#FFC93C"/><path d="M19 35c6-3 12-1 14 5-6 3-12 2-14-5z" fill="${t}"/><circle cx="43.5" cy="23" r="2.3" fill="${dn}" stroke="none"/></g>`,Zi=i=>`<svg viewBox="0 0 64 64" aria-hidden="true">${i}</svg>`,Qf={ace:Zi(`<path d="${w2(32,32,30,18,12)}" fill="#FFC93C" stroke="${dn}" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="32" r="12" fill="#FBFAF3" stroke="${dn}" stroke-width="3"/><text x="32" y="39" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="19" fill="${dn}">1</text>`),albatross:Zi(Is("#9F7BE0","#7B4FC9","translate(-4 -10) scale(.62)")+Is("#9F7BE0","#7B4FC9","translate(26 -6) scale(.62)")+Is("#9F7BE0","#7B4FC9","translate(8 22) scale(.62)")),eagle:Zi(Is("#FFA65A","#E07020","translate(-2 -4) scale(.7)")+Is("#FFA65A","#E07020","translate(20 18) scale(.7)")),birdie:Zi(Is("#5B93F0","#2D6CDF","translate(0 0)")),par:Zi(`<ellipse cx="32" cy="53" rx="22" ry="7" fill="#3CC47A" stroke="${dn}" stroke-width="3"/><ellipse cx="32" cy="52" rx="7" ry="2.6" fill="${dn}"/><path d="M32 51V9" stroke="${dn}" stroke-width="5" stroke-linecap="round"/><path d="M32 50V10" stroke="#fff" stroke-width="2"/><path d="M34 9l21 7.5L34 24z" fill="#E8322F" stroke="${dn}" stroke-width="3" stroke-linejoin="round"/>`),smile:Zi(`<circle cx="32" cy="32" r="26" fill="#8EC5FF" stroke="${dn}" stroke-width="3"/><circle cx="23" cy="27" r="3.4" fill="${dn}"/><circle cx="41" cy="27" r="3.4" fill="${dn}"/><path d="M20 38c6 8 18 8 24 0" fill="none" stroke="${dn}" stroke-width="3.6" stroke-linecap="round"/>`),picked:Zi(`<g fill="#fff" stroke="${dn}" stroke-width="3" stroke-linejoin="round"><rect x="15" y="12" width="8" height="26" rx="4"/><rect x="24" y="7" width="8" height="30" rx="4"/><rect x="33" y="9" width="8" height="28" rx="4"/><rect x="42" y="15" width="8" height="23" rx="4"/><path d="M15 31h35v6c0 11-7.5 19-18 19-7.5 0-12-4.5-14.5-9L9.5 37c-1.6-2.8 2-5.6 4.6-3.4L18 37z"/></g>`)},E2=i=>Qf[i]||Qf.smile,th='<svg viewBox="0 0 48 58" aria-hidden="true"><path d="M17 4c2.6 0 4.6 2 4.6 4.6v15.6l1.7-.4c2.2-.5 4.4.8 5 3l.2.6 1.3-.3c2.2-.5 4.4.8 5 3l.2.8 1-.2c2.3-.4 4.5 1.1 4.9 3.4l1.3 8.6c.9 5.7-2.5 11.2-8 12.9l-6.1 1.8c-4.7 1.4-9.8-.5-12.4-4.7L4.2 38.4c-1.3-2.1-.8-4.8 1.2-6.2 2-1.3 4.6-1 6.1.8l1 1.2V8.6C12.5 6 14.5 4 17 4z" fill="#fff" stroke="#13261b" stroke-width="3" stroke-linejoin="round"/><path d="M21.6 24.2v7M29.5 27.4v5.4M36.7 31.1v4.6" stroke="#13261b" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".45"/></svg>';function A2(i,t){if(i==null)return"";if(i===1)return"m-ace";const e=i-t;return e<=-2?"m-eagle":e===-1?"m-birdie":e===0?"m-par":e===1?"m-bogey":"m-double"}function T2(i,{events:t,progress:e,holes:n=[],rounds:s=[],rig:r=null,play:o=null}={}){const a=(L,R)=>t&&t.emit(L,R),c=(L,R)=>t&&t.on(L,R),l=new Map;{let L=0;for(const R of s)l.set(R.id,L),L+=R.holes.length}const u=L=>{for(const R of s){const k=l.get(R.id);if(L>=k&&L<k+R.holes.length)return R}return s[0]},h=L=>n[L]||{name:"Hole "+(L+1),par:3,id:"h"+L};let d=null,f=!1,g=!1,x=0,m=null,p=null,_=!1,v=!1,M=0,E={index:-1,best:null,stars:0,total:0},A=!!(e&&e.muted),T=e&&e.skin||"classic",w=!1;const b=new Set,S=(L,R)=>{const k=setTimeout(()=>{b.delete(k),L()},R);return b.add(k),k},C=L=>{L&&(clearTimeout(L),b.delete(L))},N=Ct("div.scr");i.appendChild(N);function B(L,R,k,D,pt){return Ct("button.btn"+L,{type:"button","aria-label":pt||null,onclick:St=>{Date.now()-x<Jf||D(St)}},[k?Ct("span.ico",{html:k}):null,R?Ct("span.lbl",null,R):null])}function K(L,R=""){const k=Ct("div.stars"+R,{role:"img","aria-label":L+(L===1?" star":" stars")});for(let D=0;D<3;D++)k.appendChild(Ct("span.st"+(D<L?".on":""),{html:Ue.star,style:{"--k":String(D)}}));return k}const ot=[];function ct(L){const R=B(L?".b-white.b-sound":".b-round.b-white.b-sound","","",()=>Z(!A));return ot.push({b:R,withLabel:L}),vt(),R}function vt(){for(const{b:L,withLabel:R}of ot){for(;L.firstChild;)L.removeChild(L.firstChild);L.appendChild(Ct("span.ico",{html:A?Ue.soundOff:Ue.soundOn})),R&&L.appendChild(Ct("span.lbl",null,A?"Sound off":"Sound on")),L.setAttribute("aria-label",A?"Turn sound on":"Turn sound off"),L.setAttribute("aria-pressed",A?"false":"true"),L.classList.toggle("off",A)}}function Z(L){A=!!L,vt(),a("ui:sound",{muted:A})}function X(L,R,k){const D=typeof L=="object"?L:s.find(ie=>ie.id===L)||s[0],pt=l.get(D.id)||0,St=Ct("div.strip",{role:"table","aria-label":D.name+" scorecard"}),At=Ct("div.srow.s-hole",{role:"row"},Ct("span.sh",{role:"rowheader"},"Hole")),Lt=Ct("div.srow.s-par",{role:"row"},Ct("span.sh",{role:"rowheader"},"Par")),Ft=Ct("div.srow.s-you",{role:"row"},Ct("span.sh",{role:"rowheader"},"You"));let Ht=0,zt=0,te=0;D.holes.forEach((ie,re)=>{const se=pt+re,$t=R(se),xe=se===k?".hi":"";At.appendChild(Ct("span.sc"+xe,{role:"cell",style:{"--k":String(re)}},String(se+1))),Lt.appendChild(Ct("span.sc"+xe,{role:"cell"},String(ie.par)));const Vt=A2($t,ie.par);Ft.appendChild(Ct("span.sc.s-score"+xe,{role:"cell",style:{"--k":String(re)}},$t==null?Ct("i.dash",null,"–"):Ct("b.mk"+(Vt?"."+Vt:""),null,String($t)))),$t!=null&&(Ht+=$t,zt+=ie.par,te++)}),At.appendChild(Ct("span.sc.s-tot",{role:"cell"},"Tot")),Lt.appendChild(Ct("span.sc.s-tot",{role:"cell"},String(D.holes.reduce((ie,re)=>ie+re.par,0))));const _t=te?yc(Ht,zt):"–";return Ft.appendChild(Ct("span.sc.s-tot.s-rel"+(te&&Ht<zt?".under":""),{role:"cell",title:te?Ht+" strokes":""},_t)),St.appendChild(At),St.appendChild(Lt),St.appendChild(Ft),St}const z={};function $(L,R,{primary:k,back:D}={}){const pt=Ct("div.panel.p-"+L+(R?"."+R:""),{role:"dialog","aria-modal":"true","aria-hidden":"true"});return N.appendChild(pt),z[L]={el:pt,primary:k,back:D},pt}function j(L,R){const k=z[L];if(!k)return;for(const pt in z){const St=pt===L;z[pt].el.classList.toggle("open",St),z[pt].el.setAttribute("aria-hidden",St?"false":"true")}d=L,x=Date.now();const D=typeof document<"u"?document.activeElement:null;D&&D.blur&&N.contains&&N.contains(D)&&D.blur(),k.render&&k.render(R),O(!0)}function rt(){for(const L in z)z[L].el.classList.remove("open"),z[L].el.setAttribute("aria-hidden","true");d=null,O(!1)}function O(L){L&&(oe(),de()),L!==f&&(f=L,i.classList&&i.classList.toggle("ui-menu",L),a("ui:menu",{open:L}),L||I())}const Q=Ct("span.t-stars-n",null,"0"),mt=Ct("span.sub",null,""),H=B(".b-yellow.b-big.t-go","",Ue.play,()=>{const L=e?e.nextIndex():0;rt(),L===m&&!_||a("ui:play",{index:L})}),tt=Ct("span.lbl2",null,[Ct("span.main",null,"Continue"),mt]);H.appendChild(tt),$("title","",{primary:()=>H.click()}).appendChild(Ct("div.t-wrap",null,[Ct("div.logo",{role:"heading","aria-level":"1","aria-label":"8 Ball Golf"},[Ct("span.logo-ball",{"aria-hidden":"true"},Ct("span.logo-disc",null,"8")),Ct("span.logo-word",{"aria-hidden":"true"},[Ct("span.lw1",null,"BALL"),Ct("span.lw2",null,"GOLF")])]),Ct("p.tagline",null,"Hit the white. Sink the 8."),Ct("div.t-stars",{"aria-label":"Stars collected"},[Ct("span.ico",{html:Ue.star}),Q,Ct("span.of",null," / "+n.length*3)]),H,Ct("div.t-row",null,[B(".b-blue","Holes",Ue.grid,()=>Bt("title")),B(".b-blue","Balls",Ue.ball,()=>U("title")),ct(!1)])])),z.title.render=()=>{const L=e?e.nextIndex():0,R=h(L);mt.textContent="Hole "+(L+1)+" · "+R.name,Q.textContent=String(e?e.totalStars():0)};let Et="title",Ot=s.length?s[0].id:1;const st=Ct("div.tabs",{role:"tablist"}),xt=Ct("div.tiles"),F=Ct("p.p-note",null,"");$("holes","card-panel",{back:()=>Mt(Et)}).appendChild(Ct("div.card.paper.c-holes",null,[Ct("div.c-head",null,[B(".b-round.b-back","",Ue.back,()=>Mt(Et),"Back"),Ct("h2",null,"Holes"),Ct("span.c-head-pad")]),st,xt,F]));function Bt(L){Et=L;const R=e?e.nextIndex():0;Ot=u(L==="pause"&&m!==null?m:R).id,j("holes")}z.holes.render=()=>{for(;st.firstChild;)st.removeChild(st.firstChild);for(const D of s){const pt=l.get(D.id),St=!e||e.isUnlocked(pt),At=e&&e.roundStars?e.roundStars(D.id):0,Lt=B(".tab"+(D.id===Ot?".sel":"")+(St?"":".locked"),"",St?null:Ue.lock,()=>{if(!St){lt(Lt),F.textContent="Finish hole "+pt+" to open "+D.name+"!";return}Ot=D.id,z.holes.render()});Lt.setAttribute("role","tab"),Lt.setAttribute("aria-selected",D.id===Ot?"true":"false"),Lt.appendChild(Ct("span.tab-name",null,D.name)),St&&Lt.appendChild(Ct("span.tab-stars",null,[Ct("span.ico",{html:Ue.star}),At+"/"+D.holes.length*3])),st.appendChild(Lt)}for(;xt.firstChild;)xt.removeChild(xt.firstChild);const L=s.find(D=>D.id===Ot)||s[0];if(!L)return;const R=l.get(L.id),k=e?e.nextIndex():0;xt.setAttribute("data-round",String(L.id)),L.holes.forEach((D,pt)=>{const St=R+pt,At=h(St),Lt=!e||e.isUnlocked(St),Ft=e?e.best(St):null,Ht=B(".tile"+(Lt?"":".locked")+(St===k&&Lt?".next":"")+(St===m?".cur":""),"",null,()=>{if(!Lt){lt(Ht),F.textContent="Finish hole "+St+" first!";return}g=!1,rt(),a("ui:play",{index:St})},Lt?"Hole "+(St+1)+", "+At.name:"Hole "+(St+1)+", locked");Ht.appendChild(Ct("span.tile-num",null,String(St+1))),Ht.appendChild(Ct("span.tile-name",null,At.name)),Lt?(Ht.appendChild(Ct("span.tile-par",null,"Par "+At.par+(Ft!==null?" · Best "+Ft:""))),Ht.appendChild(K(e?e.stars(St):0,".mini"))):Ht.appendChild(Ct("span.tile-lock",{html:Ue.lock})),xt.appendChild(Ht)}),F.textContent=""};let Jt="title";const kt=Ct("div.skins"),Kt=Ct("p.p-note",null,"");$("skins","card-panel",{back:()=>Mt(Jt)}).appendChild(Ct("div.card.paper.c-skins",null,[Ct("div.c-head",null,[B(".b-round.b-back","",Ue.back,()=>Mt(Jt),"Back"),Ct("h2",null,"Balls"),Ct("span.c-head-pad")]),kt,Kt]));function U(L){Jt=L,j("skins")}function y(){if(!e)return"";const L=e.totalStars(),R=e.skins().find(k=>!k.unlocked);return R?R.need-L+" more ★ for the "+R.name+" ball!":"You unlocked every ball!"}z.skins.render=()=>{for(;kt.firstChild;)kt.removeChild(kt.firstChild);const L=e?e.skins():[{id:"classic",name:"Classic",need:0,unlocked:!0}];for(const R of L){const k=B(".skin"+(R.unlocked?"":".locked")+(R.id===T?".sel":""),"",null,()=>{if(!R.unlocked){lt(k),Kt.textContent="Collect "+R.need+" ★ to unlock "+R.name+"!";return}T=R.id,a("ui:skin",{id:R.id}),z.skins.render()},R.name+(R.unlocked?"":", locked"));k.setAttribute("aria-pressed",R.id===T?"true":"false"),k.appendChild(Ct("span.skin-ball.sk-"+R.id,{"aria-hidden":"true"})),k.appendChild(Ct("span.skin-name",null,R.name)),k.appendChild(R.unlocked?Ct("span.skin-need.ok",null,R.id===T?"Playing":"Tap to use"):Ct("span.skin-need",null,[Ct("span.ico",{html:Ue.star}),String(R.need)])),kt.appendChild(k)}Kt.textContent=y()};const q=$("card","card-panel",{primary:()=>Gt()}),at=Ct("div.card.paper.c-score");q.appendChild(at);let bt=null;function wt(){at.classList.add("skip")}function Gt(){if(!at.classList.contains("skip")&&Date.now()-x<y2){wt();return}bt&&bt()}at.addEventListener("pointerdown",wt),z.card.render=L=>{const{index:R,strokes:k,par:D,picked:pt,penalties:St=0,stars:At=0}=L,Lt=L.term||Mc(k,D,pt),Ft=Lt.key,Ht=E.index===R?E.best:null,zt=E.index===R?E.stars:0,te=E.index===R?E.total:e?e.totalStars():0,_t=Ht!==null&&k<Ht,ie=Math.max(0,At-zt),re=e?e.skins().filter(ze=>ze.need>te&&ze.need<=te+ie):[],se=(()=>{const ze=u(R);return R===l.get(ze.id)+ze.holes.length-1})(),$t=L.level||h(R);for(;at.firstChild;)at.removeChild(at.firstChild);at.className="card paper c-score t-"+Ft,at.appendChild(Ct("div.sc-hole",null,"Hole "+(R+1)+" · "+($t.name||""))),at.appendChild(Ct("div.sc-term",null,[Ct("span.term-ico",{html:E2(Ft)}),Ct("div.term-txt",null,[Ct("b.term",null,Lt.label),Ct("span.term-sub",null,S2[Ft]||"")])]));const xe=pt?"Picked up · Par "+D:k+(k===1?" stroke":" strokes")+" · Par "+D;at.appendChild(Ct("div.sc-line",null,[xe,St>0?Ct("span.pen",null,"+"+St+" penalty"):null])),at.appendChild(K(At,".big"));const Vt=Ct("div.sc-extras");_t&&Vt.appendChild(Ct("span.badge.b-best",null,"New best!"));for(const ze of re){const be=B(".b-mini","Use it",null,()=>{T=ze.id,a("ui:skin",{id:ze.id}),be.classList.add("done"),be.lastChild.textContent="Playing!"});Vt.appendChild(Ct("span.badge.b-skin",null,[Ct("span.skin-ball.sk-"+ze.id,{"aria-hidden":"true"}),"New ball: "+ze.name+"!",be]))}Vt.childNodes.length&&at.appendChild(Vt);const Se=ze=>ze===R?Ht===null?k:Math.min(Ht,k):e?e.best(ze):null;at.appendChild(X(u(R),Se,R));const Oe=w&&!pt;Oe&&at.appendChild(Ct("p.sc-hint",null,"Hole in! Next hole →"));const Le=se?"Round score":"Next hole";bt=()=>{w=!1,rt(),a("ui:next",{})},at.appendChild(Ct("div.btns",null,[B(".b-blue.sc-retry","Retry",Ue.retry,()=>{w=!1,rt(),a("ui:retry",{})}),B(".b-yellow.b-big.sc-next"+(Oe?".pulse":""),Le,Ue.play,()=>bt())]))};const Nt=$("round","card-panel",{primary:()=>W()}),Dt=Ct("div.card.chalk.c-round");Nt.appendChild(Dt);let W=()=>{};Dt.addEventListener("pointerdown",()=>Dt.classList.add("skip")),z.round.render=L=>{const R=s.find(zt=>zt.id===L.round)||s[0],k=new Map((L.holes||[]).map(zt=>[zt.index,zt.strokes])),D=L.total||0,pt=L.par||R.holes.reduce((zt,te)=>zt+te.par,0),St=L.rel||yc(D,pt),At=l.get(R.id)||0;let Lt=0;for(let zt=0;zt<R.holes.length;zt++)Lt+=e?e.stars(At+zt):0;const Ft=R===s[s.length-1];for(;Dt.firstChild;)Dt.removeChild(Dt.firstChild);Dt.className="card chalk c-round",Dt.appendChild(Ct("h2.r-title",null,(L.name||R.name)+" done!")),Dt.appendChild(Ct("div.r-score",null,[Ct("div.r-rel"+(D<pt?".under":D===pt?".even":""),null,[Ct("span.r-cap",null,"Best round"),Ct("b",null,St)]),Ct("div.r-meta",null,[Ct("span",null,"Total "+D+" · Par "+pt),Ct("span.r-stars",null,[Ct("span.ico",{html:Ue.star}),Lt+" / "+R.holes.length*3])])])),Dt.appendChild(X(R,zt=>k.has(zt)?k.get(zt):e?e.best(zt):null,-1));const Ht=Ft?"You played all "+n.length+" holes! Go back for more stars.":s[s.indexOf(R)+1].name+" is open! Curves, cushions and water.";Dt.appendChild(Ct("p.r-hook",null,Ht)),Dt.appendChild(Ct("p.r-hook.r-skin",null,y())),W=()=>{rt(),a("ui:next",{})},Dt.appendChild(Ct("div.btns",null,[B(".b-yellow.b-big.r-next",Ft?"Continue":"Play "+s[s.indexOf(R)+1].name,Ue.play,()=>W())]))},$("pause","card-panel",{primary:()=>nt(),back:()=>nt()}).appendChild(Ct("div.card.paper.c-pause",null,[Ct("h2",null,"Paused"),B(".b-yellow.b-big.ps-resume","Resume",Ue.play,()=>nt()),Ct("div.ps-grid",null,[B(".b-blue.ps-retry","Retry hole",Ue.retry,()=>{g=!1,rt(),a("ui:retry",{})}),B(".b-blue.ps-holes","Holes",Ue.grid,()=>Bt("pause")),B(".b-blue.ps-skins","Balls",Ue.ball,()=>U("pause")),ct(!0)])]));function nt(){!g&&d!=="pause"||(g=!1,rt(),a("ui:resume",{}))}function Mt(L){L==="pause"&&g?j("pause"):L==="title"?j("title"):rt()}function lt(L){L.classList.remove("nudge"),L.offsetWidth,L.classList.add("nudge")}const P=Ct("span.tip-txt",null,""),it=Ct("div.tip",{role:"status","aria-live":"polite",hidden:!0},[Ct("span.tip-ico",{"aria-hidden":"true"},Ct("span",null,"8")),P]),yt=Ct("span.coach-txt",null,""),Ut=Ct("span.coach-gesture",{html:th,"aria-hidden":"true"}),V=Ct("button.coach-skip",{type:"button",onclick:()=>We()},"Skip"),ft=Ct("div.coach",{role:"status","aria-live":"polite",hidden:!0},[Ut,yt,V]),dt=Ct("div.hand",{html:th,"aria-hidden":"true",hidden:!0}),gt=Ct("b.toast-main",null,""),Tt=Ct("span.toast-sub",null,""),Y=Ct("div.toast",{role:"status","aria-live":"polite",hidden:!0},[gt,Tt]),ht=Ct("div.celebrate",{"aria-hidden":"true",hidden:!0});N.appendChild(it),N.appendChild(ft),N.appendChild(dt),N.appendChild(Y),N.appendChild(ht);let Pt=null,It=0;function Rt(){C(It),!(!Pt||d!==null)&&(It=S(()=>{if(d!==null)return;const L=Pt;Pt=null,!(!L||L.index!==m||_)&&(P.textContent=L.text,it.hidden=!1,Qt(it,"go"),e&&e.markTip(L.id),It=S(qt,v2))},x2))}function qt(){C(It),It=0,it.hidden=!0,it.classList.remove("go")}let Yt=0;function ne(L,R="",k=""){f||(gt.textContent=L,Tt.textContent=R,Tt.hidden=!R,Y.className="toast"+(k?" k-"+k:""),Y.hidden=!1,Qt(Y,"go"),C(Yt),Yt=S(oe,_2))}function oe(){C(Yt),Yt=0,Y.hidden=!0,Y.classList.remove("go")}let le=0;function me(L){f||(ht.textContent=b2[L]||"In the hole!",ht.className="celebrate t-"+L,ht.hidden=!1,Qt(ht,"go"),C(le),le=S(de,M2))}function de(){C(le),le=0,ht.hidden=!0,ht.classList.remove("go")}function Qt(L,R){L.classList.remove(R),L.offsetWidth,L.classList.add(R)}const ge=[{text:"Sink the 8 in the hole!",hand:"",ms:2600},{text:"Move the white ball anywhere in the circle.",hand:"drag",ms:4200},{text:"This line shows where the 8 will roll. Drag to aim.",hand:"aim",ms:4600},{text:"Pull back for power… let go to shoot!",hand:"pull",ms:0}],ce={on:!1,step:-1,timer:0,fired:!1,everyShown:!1,raf:0};function Ae(){ce.on=!0,ce.fired=!1,ce.everyShown=!1,en(0)}function en(L){C(ce.timer),ce.step=L;const R=ge[L];if(!R){nn();return}Fe(R.text,R.hand),R.ms&&(ce.timer=S(()=>{ce.on&&ce.step===L&&en(L+1)},R.ms))}function Fe(L,R){yt.textContent=L,ft.hidden=!1,ft.setAttribute("data-hand",R||"none"),Ut.hidden=!R||R!=="pull"&&!!(r&&o),Qt(ft,"go"),hn(R)}function nn(){C(ce.timer),ft.hidden=!0,hn("")}function We(){ce.on=!1,ce.step=-1,nn()}function hn(L){ce.raf&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(ce.raf),ce.raf=0;const R=(L==="drag"||L==="aim")&&r&&o&&typeof requestAnimationFrame=="function";if(L!=="pull"&&!R){dt.hidden=!0,dt.removeAttribute("data-mode");return}if(dt.setAttribute("data-mode",L),dt.hidden=!1,R){const k=()=>{ce.raf=requestAnimationFrame(k);try{const D=o.intent,pt=o.level;if(!D||!pt)return;const St=(pt.heightAt?pt.heightAt(D.x,D.z):0)+.5,At=r.groundToScreen(D.x,St,D.z);At&&At.onScreen!==!1&&(dt.style.transform="translate("+Math.round(At.x)+"px,"+Math.round(At.y)+"px)")}catch{}};k()}else dt.style.transform=""}function I(){Rt()}return c("game:hole",({index:L,level:R,first:k}={})=>{m=L,p=R||h(L),_=!1,M=0,E={index:L,best:e?e.best(L):null,stars:e?e.stars(L):0,total:e?e.totalStars():0},qt(),oe(),de(),Pt=null,ce.on&&We();const D=p&&(p.id||p.hole&&p.hole.id);w=!!k,k?(e&&e.markTip(D),Ae()):p&&p.tip&&e&&!e.seenTip(D)&&(Pt={index:L,id:D,text:p.tip},Rt())}),c("shot:fire",({strokes:L}={})=>{M=L|0,!it.hidden&&It&&(C(It),It=S(qt,900)),ce.on&&(ce.fired=!0,ce.step=99,nn())}),c("shot:end",({outcome:L,picked:R,penalty:k}={})=>{if(R&&ne("Picked up","Try again for a star!","soft"),ce.on&&L!=="holed"&&!R&&!ce.everyShown){ce.everyShown=!0;const D=p?p.par:2;Fe("Every shot counts. Par "+D+" = in "+D+" shots is great!",""),ce.timer=S(()=>{ce.on&&nn()},4500)}}),c("ball:hop",()=>ne("Too fast!","Softer next time","warn")),c("ball:hazard",({kind:L}={})=>{L==="water"?ne("Splash! +1","Back to where you were","water"):ne("Out of bounds! +1","Back to where you were","warn")}),c("ball:whiff",()=>ne("Missed the 8!","Aim the white at the 8","soft")),c("ball:holed",()=>{ce.on&&We();const L=p?p.par:3;me(Mc(Math.max(1,M||1),L,!1).key)}),c("hole:done",(L={})=>{_=!0,qt(),Pt=null,ce.on&&We(),g=!1,j("card",L)}),c("game:round",(L={})=>j("round",L)),c("ui:pause",()=>{if(d===null&&!v){g=!0,j("pause");return}g||Promise.resolve().then(()=>a("ui:resume",{}))}),c("ui:sound",({muted:L}={})=>{!!L!==A&&(A=!!L,vt())}),c("ui:skin",({id:L}={})=>{L&&(T=L)}),c("ad:start",()=>{v=!0,oe(),de()}),c("ad:end",()=>{v=!1}),typeof window<"u"&&window.addEventListener&&window.addEventListener("keydown",L=>{if(L.repeat)return;const R=L.code;if(R==="KeyP"||R==="Escape"){if(d==="pause"){nt(),L.preventDefault();return}if(d&&z[d].back){z[d].back(),L.preventDefault();return}d===null&&m!==null&&!_&&!v&&(a("ui:pause",{}),L.preventDefault());return}if(d&&(R==="Enter"||R==="NumpadEnter"||R==="Space")){const k=L.target;if(k&&k.tagName==="BUTTON"||(L.preventDefault(),Date.now()-x<Jf))return;const D=z[d];D.primary&&D.primary()}}),{el:N,showTitle(){g=!1,j("title")},hideAll(){const L=g;g=!1,d!==null&&rt(),L&&a("ui:resume",{})},isOpen(){return d!==null},get current(){return d}}}function eh(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const oc=i=>440*Math.pow(2,(i-69)/12),_n=(i,t)=>typeof i=="number"&&Number.isFinite(i)?i:t,nh=1e-4;function pd(i,t,e){const n=2*Math.PI*Math.min(i,e*.45)/e,s=Math.sin(n)/(2*t),r=1+s;return[s/r,0,-s/r,-2*Math.cos(n)/r,(1-s)/r]}function md(i,t,e,n,s,r,o,a){const[c,l,u,h,d]=o;let f=0,g=0,x=0,m=0;const p=Math.min(i.length,t+e);for(let _=t,v=0;_<p;_++,v++){const M=(v<n?v/n:1)*Math.exp(-v/s),E=(a()*2-1)*M,A=c*E+l*f+u*g-h*x-d*m;g=f,f=E,m=x,x=A,i[_]+=A*r}}function Ul(i,t){let e=0;for(let n=0;n<i.length;n++)e=Math.max(e,Math.abs(i[n]));if(e>0)for(let n=0;n<i.length;n++)i[n]*=t/e}function C2(i,t,e){for(let s=0;s<16;s++){const r=Math.pow(s/16,1.6)*.3+e()*.02,o=Math.floor(t*(.012+e()*.02)),a=Math.pow(1-r/.38,1.2)*(.5+.5*e());md(i,Math.floor(r*t),o,Math.floor(t*.0015),t*(.004+e()*.004),a,pd(2400+e()*3800,1.4+e()*1.6,t),e)}Ul(i,.9)}function ih(i,t,e,n,s,r){for(let c=0;c<n;c++){const l=pd(900+e()*1500,1.1+e()*1.2,t),u=3.5+e()*2.5,h=.45+.55*e(),d=s+e()*(r-s);for(let f=e()*.2;f<d;f+=1/u*(.82+.36*e())){const g=f>d-.5?(d-f)/.5:1;md(i,Math.floor(f*t),Math.floor(t*.03),Math.floor(t*6e-4),t*(.004+e()*.005),h*(.6+.4*g),l,e)}}const o=Math.floor(t*.023),a=Math.floor(t*.037);for(let c=i.length-1;c>=a;c--)i[c]+=.22*i[c-o]+.14*i[c-a];Ul(i,.85)}const sh={white:[1,(i,t,e)=>{for(let n=0;n<i.length;n++)i[n]=e()*2-1}],brown:[1,(i,t,e)=>{let n=0;for(let s=0;s<i.length;s++)n=(n+.02*(e()*2-1))*.998,i[s]=n;Ul(i,.9)}],rustle:[.38,C2],applauseLight:[1.8,(i,t,e)=>ih(i,t,e,7,.9,1.5)],applauseBig:[3.4,(i,t,e)=>ih(i,t,e,22,1.9,3.1)]};function R2({getWindow:i,maxVoices:t=14,hardVoices:e=22}={}){const n=eh(571921),s=[],r=new Map;let o=null,a=null,c=null,l=null,u=!1,h=!0,d=0,f=0;function g(){if(u)return!1;if(!o){const b=i(),S=b&&(b.AudioContext||b.webkitAudioContext);if(!S)return u=!0,!1;try{o=new S,a=o.createGain(),a.gain.value=.8,c=o.createDynamicsCompressor(),c.threshold.value=-12,c.knee.value=10,c.ratio.value=3.5,c.attack.value=.002,c.release.value=.2,l=o.createGain(),l.gain.value=h?1:0,a.connect(c),c.connect(l),l.connect(o.destination);const C=o.createBufferSource();C.buffer=o.createBuffer(1,1,o.sampleRate),C.connect(o.destination),C.onended=()=>{try{C.disconnect()}catch{}},C.start(0)}catch(C){return console.warn("[sfx] Web Audio unavailable",C),u=!0,o=null,!1}}if(o.state!=="running"&&o.state!=="closed")try{const b=o.resume();b&&b.catch&&b.catch(()=>{})}catch{}return!0}const x=()=>!!o&&o.state==="running",m=()=>o?o.currentTime:0;function p(b){if(h=!!b,!l)return;const S=o.currentTime,C=l.gain;try{C.cancelScheduledValues(S),C.setValueAtTime(C.value,S),C.setTargetAtTime(h?1:0,S,.012)}catch{C.value=h?1:0}}function _(b){let S=r.get(b);if(S||!o||!sh[b])return S||null;const[C,N]=sh[b],B=o.sampleRate;return S=o.createBuffer(1,Math.max(1,Math.floor(C*B)),B),N(S.getChannelData(0),B,eh(571921^b.length*7919^b.charCodeAt(0))),r.set(b,S),S}function v(){_("white"),_("brown"),_("rustle");const b=i(),S=(C,N)=>{try{(b&&b.setTimeout?b.setTimeout.bind(b):setTimeout)(C,N)}catch{}};S(()=>_("applauseLight"),700),S(()=>_("applauseBig"),1400)}function M(b){if(b.done)return;b.done=!0;for(const C of b.nodes){C.onended!==void 0&&(C.onended=null);try{C.disconnect()}catch{}}b.nodes.length=0;const S=s.indexOf(b);S>=0&&s.splice(S,1),f++}function E(b){const S=o.currentTime;for(const C of b.nodes)if(C.stop)try{C.stop(S)}catch{}M(b)}function A(){const b=o.currentTime;for(let S=s.length-1;S>=0;S--)s[S].end<b-1&&E(s[S])}function T(b=1,S=1){if(!x()||!h)return null;if(A(),s.length>=t){if(b<2)return null;if(s.length>=e){let N=null;for(const B of s)(!N||B.prio<N.prio||B.prio===N.prio&&B.t0<N.t0)&&(N=B);if(!N||N.prio>b)return null;E(N)}}const C=w(b,S);return s.push(C),d++,C}function w(b,S){const C=o.currentTime+.002,N=o.createGain();N.gain.value=S,N.connect(a);const B={prio:b,t0:C,end:C,done:!1,pending:0,nodes:[N],out:N},K=()=>{B.pending--,B.pending<=0&&M(B)},ot=X=>(B.nodes.push(X),X),ct=(X,z,$)=>(ot(X),B.pending++,X.onended=K,B.end=Math.max(B.end,$),X),vt=(X,z,$,j,rt,O)=>(j=Math.max(nh*2,j),X.setValueAtTime(0,z),X.linearRampToValueAtTime(j,z+$),rt>0&&X.setValueAtTime(j,z+$+rt),X.exponentialRampToValueAtTime(nh,z+$+rt+O),z+$+rt+O),Z=(X,z,$,j)=>{if(X.setValueAtTime(z,j),$)for(const[rt,O]of $)X.exponentialRampToValueAtTime(Math.max(1,rt),j+Math.max(.001,O))};return B.filter=(X,z,$=.7,j=N,rt=null,O=C)=>{const Q=ot(o.createBiquadFilter());return Q.type=X,Q.Q.value=$,Z(Q.frequency,z,rt,O),Q.connect(j),Q},B.tone=X=>{const z=C+_n(X.t,0),$=_n(X.a,.002),j=_n(X.hold,0),rt=_n(X.d,.1),O=o.createOscillator();O.type=X.type||"sine",Z(O.frequency,Math.max(1,_n(X.f,440)),X.to,z),X.detune&&(O.detune.value=X.detune);const Q=ot(o.createGain()),mt=vt(Q.gain,z,$,_n(X.peak,.2),j,rt)+.02;if(O.connect(Q),Q.connect(X.dest||N),X.vib){const[H,tt,ut=0]=X.vib,Et=o.createOscillator(),Ot=ot(o.createGain());Et.frequency.value=H,Ot.gain.setValueAtTime(0,z),Ot.gain.linearRampToValueAtTime(tt,z+ut+.08),Et.connect(Ot),Ot.connect(O.frequency),ct(Et,z,mt),Et.start(z),Et.stop(mt)}return ct(O,z,mt),O.start(z),O.stop(mt),O},B.noise=X=>{const z=_(X.buf||"white");if(!z)return null;const $=C+_n(X.t,0),j=_n(X.a,.001),rt=_n(X.hold,0),O=_n(X.d,.05),Q=o.createBufferSource();Q.buffer=z;const mt=_n(X.rate,1);mt!==1&&(Q.playbackRate.value=mt);const H=ot(o.createGain()),tt=vt(H.gain,$,j,_n(X.peak,.2),rt,O)+.02;H.connect(X.dest||N),X.filter?Q.connect(B.filter(X.filter.type,X.filter.f,_n(X.filter.q,.7),H,X.filter.to,$)):Q.connect(H);const ut=z.duration||z.length/z.sampleRate,Et=(tt-$)*mt,Ot=X.from0?0:Math.max(0,(ut-Et)*n());return ct(Q,$,tt),X.from0?Q.start($):Q.start($,Ot,Math.min(ut-Ot,Et+.01)),Q.stop(tt),Q},B}return{start:g,ready:x,now:m,rng:n,setOutput:p,voice:T,buffer:_,prewarm:v,get ctx(){return o},stats:()=>({active:s.length,created:d,released:f})}}const hr=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,ac=i=>i<0?0:i>1?1:i,P2=["pointerdown","pointerup","touchend","mousedown","click","keydown"],L2=["ui:play","ui:next","ui:retry","ui:pause","ui:resume","ui:overview","ui:skin"];function I2({events:i,getWindow:t}={}){const e=t||(()=>typeof window<"u"?window:null),n=R2({getWindow:e}),s=n.rng;let r=!1,o=!1,a=!1,c=!1;function l(){const H=e(),tt=H&&H.navigator&&H.navigator.userActivation;tt&&tt.hasBeenActive===!1||h()}function u(H){const tt=e();if(!(!tt||!tt.addEventListener||H===a)){a=H;for(const ut of P2)H?tt.addEventListener(ut,l,{capture:!0,passive:!0}):tt.removeEventListener(ut,l,{capture:!0,passive:!0})}}function h(){if(!n.start()){u(!1);return}const H=n.ctx;if(!c){c=!0,n.setOutput(!r&&!o),n.prewarm();try{H.onstatechange=()=>{H.state==="running"?u(!1):H.state!=="closed"&&u(!0)}}catch{}}H.state==="running"&&u(!1)}u(!0);function d(){n.setOutput(!r&&!o)}const f=new Map;function g(H,tt){if(r||o||!n.ready())return!1;const ut=n.now(),Et=f.get(H);return Et!==void 0&&ut-Et<tt&&ut>=Et?!1:(f.set(H,ut),!0)}const x=H=>1+(s()-.5)*2*H;function m(H,tt,ut,Et,Ot){const st=oc(ut);H.tone({t:tt,f:st,a:.003,d:Et,peak:Ot}),H.tone({t:tt,f:st*3.93,a:.001,d:Et*.16,peak:Ot*.28}),H.noise({t:tt,filter:{type:"bandpass",f:Math.min(st*2.5,9e3),q:1.5},a:5e-4,d:.008,peak:Ot*.22})}function p(H,tt,ut,Et,Ot){const st=oc(ut),xt=[[1,1,1],[2.76,.42,.45],[5.4,.16,.22]];for(const[F,et,Bt]of xt)st*F<14e3&&H.tone({t:tt,f:st*F,a:.001,d:Et*Bt,peak:Ot*et})}function _(H,tt,ut,Et,Ot){const st=oc(ut),xt=H.filter("lowpass",500,1.2,H.out,[[st*5+1200,.045],[st*3+700,.25]],H.t0+tt),F=[5.6,st*.007,.14];H.tone({t:tt,type:"sawtooth",f:st,detune:-7,a:.025,hold:Et,d:.16,peak:Ot,dest:xt,vib:F}),H.tone({t:tt,type:"sawtooth",f:st,detune:7,a:.025,hold:Et,d:.16,peak:Ot*.8,dest:xt})}function v(H,tt){const ut=n.voice(3,tt?.5:.36);if(!ut)return;const Et=tt?3.4:1.8;ut.noise({t:H,buf:tt?"applauseBig":"applauseLight",from0:!0,a:.06,hold:Et-.5,d:.45,peak:1,filter:{type:"highpass",f:260,q:.6}})}function M(H){const tt=n.voice(1);if(!tt)return;const ut=.3+.55*ac(H),Et=x(.03);tt.tone({f:1250*Et,to:[[760*Et,.03]],a:8e-4,d:.035,peak:.34*ut}),tt.noise({filter:{type:"bandpass",f:2300*Et,q:1.1},a:5e-4,d:.014,peak:.28*ut}),tt.tone({f:210,to:[[150,.05]],a:.002,d:.05,peak:.22*ut})}function E(H,tt=1){const ut=n.voice(2);if(!ut)return;const Et=ac(hr(H)/10),Ot=(.22+.78*Math.pow(Et,.6))*tt,st=x(.03),xt=ut.filter("lowpass",2600+1e4*Et,.6);ut.noise({filter:{type:"highpass",f:1900*st,q:.7},a:4e-4,d:.011,peak:.9*Ot,dest:xt});const F=(1650+550*Et)*st,et=[[1,.55,.06],[1.505,.32,.04],[2.27,.2,.025],[3.08,.1,.016]];for(const[Bt,Jt,kt]of et)ut.tone({f:F*Bt,to:[[F*Bt*.985,kt]],a:6e-4,d:kt*(.85+.3*Et),peak:Jt*Ot,dest:xt});ut.tone({f:640*st,to:[[430*st,.03]],a:.001,d:.03,peak:.22*Ot,dest:xt})}function A(H,tt,ut,Et=1){const Ot=[[1,.5,.07],[2.31,.25,.04],[3.93,.1,.02]];for(const[st,xt,F]of Ot)H.tone({f:ut*st,to:[[ut*st*.97,F*Et]],a:8e-4,d:F*Et,peak:xt*tt});H.noise({filter:{type:"bandpass",f:ut*4.5,q:1.2},a:5e-4,d:.01,peak:.3*tt}),H.tone({f:140,to:[[105,.06]],a:.002,d:.06,peak:.22*tt})}function T({id:H,kind:tt,speed:ut}){const Et=hr(ut);if(Et<.3||!g("wall"+hr(H),.045))return;const Ot=ac(Et/8),st=.15+.85*Math.pow(Ot,.7),xt=x(.04),F=n.voice(0);if(F)switch(tt){case"cushion":F.tone({f:150*xt,to:[[92*xt,.16]],a:.002,d:.16,peak:.55*st}),F.noise({buf:"brown",filter:{type:"lowpass",f:600,q:.7},a:.002,d:.07,peak:.5*st}),F.tone({type:"triangle",f:225*xt,to:[[300*xt,.05],[270*xt,.18]],a:.004,d:.17,peak:.13*st,vib:[16,8,0]}),F.noise({filter:{type:"bandpass",f:1400,q:.8},a:5e-4,d:.012,peak:.12*st});break;case"hedge":F.noise({buf:"rustle",from0:!0,rate:.85+.35*s(),a:.002,hold:.12,d:.2,peak:.55*(.4+.6*st)}),F.noise({buf:"brown",filter:{type:"lowpass",f:380,q:.7},a:.003,d:.07,peak:.35*st});break;case"bumper":{const et=F.filter("lowpass",2400,.8);F.tone({type:"triangle",f:170*xt,to:[[430*xt,.045],[330*xt,.32]],vib:[24,26,0],a:.003,d:.34,peak:.36*(.35+.65*st),dest:et}),F.tone({f:120,to:[[78,.08]],a:.002,d:.08,peak:.4*st}),F.noise({filter:{type:"bandpass",f:3e3,q:1.5},a:5e-4,d:.006,peak:.18*st});break}case"tree":A(F,st,300*xt,.75),F.noise({buf:"rustle",from0:!0,rate:1.1+.3*s(),a:.004,hold:.04,d:.15,peak:.22*st});break;case"lollipop":A(F,st*.9,720*xt,.7);break;case"post":A(F,st,520*xt);break;default:A(F,st,430*xt);break}}function w(){if(!g("hop",.12))return;const H=n.voice(2);if(!H)return;const tt=x(.03);H.noise({filter:{type:"bandpass",f:4200*tt,q:5},a:5e-4,d:.009,peak:.5}),H.tone({f:1850*tt,a:.001,d:.13,peak:.22}),H.tone({f:1850*2.76*tt,a:.001,d:.05,peak:.09}),H.noise({t:.075,filter:{type:"bandpass",f:3700*tt,q:4},a:5e-4,d:.008,peak:.2})}function b(H){if(!g("holed",.3))return;const tt=n.voice(2);if(!tt)return;const ut=hr(H,1),Et=ut>2.5?4:ut>.9?3:2,Ot=[[0,3e3,.3],[.05,2650,.24],[.092,3250,.18],[.125,2500,.13]];for(let xt=0;xt<Et;xt++){const[F,et,Bt]=Ot[xt];tt.noise({t:F,filter:{type:"bandpass",f:et*x(.04),q:3.5},a:5e-4,d:.016,peak:Bt})}const st=Ot[Et-1][0]+.05;tt.tone({t:st,f:310,to:[[205,.22]],a:.002,d:.26,peak:.5}),tt.tone({t:st,f:640,to:[[470,.1]],a:.001,d:.11,peak:.13}),tt.noise({t:st,filter:{type:"bandpass",f:820,q:2.5},a:.001,d:.1,peak:.26}),tt.tone({t:st+.13,f:285,to:[[215,.11]],a:.002,d:.12,peak:.2}),tt.noise({t:st+.24,filter:{type:"bandpass",f:1900,q:3},a:5e-4,d:.01,peak:.08})}function S(H=1){const tt=n.voice(2,H);if(tt){tt.tone({f:260,to:[[720,.07]],a:.002,d:.09,peak:.35}),tt.noise({filter:{type:"lowpass",f:5200,q:.8,to:[[500,.45]]},a:.004,d:.5,peak:.5}),tt.noise({buf:"brown",filter:{type:"lowpass",f:420,q:.7},a:.004,d:.26,peak:.42});for(let ut=0;ut<4;ut++){const Et=480+s()*520;tt.tone({t:.13+ut*.07+s()*.03,f:Et,to:[[Et*1.9,.045]],a:.002,d:.05,peak:.11})}for(let ut=0;ut<3;ut++)tt.noise({t:.2+s()*.3,filter:{type:"bandpass",f:4200+s()*2e3,q:3},a:5e-4,d:.012,peak:.09})}}function C(H=1){const tt=n.voice(2,H);tt&&(tt.noise({filter:{type:"bandpass",f:1900,q:1.2,to:[[340,.4]]},a:.12,d:.3,peak:.36}),tt.tone({f:900,to:[[260,.42]],a:.02,hold:.1,d:.32,peak:.08}),tt.tone({t:.44,f:112,to:[[56,.16]],a:.003,d:.17,peak:.5}),tt.noise({t:.44,buf:"brown",filter:{type:"lowpass",f:320,q:.7},a:.003,d:.1,peak:.36}))}function N(H){if(!g("whiff",.3))return;const tt=n.voice(1);if(tt){const ut=tt.filter("lowpass",1600,.7);tt.tone({type:"triangle",f:540,to:[[300,.3]],vib:[7,14,.05],a:.03,d:.3,peak:.22,dest:ut}),tt.tone({f:270,to:[[150,.3]],a:.03,d:.28,peak:.1})}H==="water"&&g("hazard",.3)?S(.45):H==="oob"&&g("hazard",.3)&&C(.45)}function B(){if(!g("drop",.2))return;const H=n.voice(1);H&&(H.tone({f:380,to:[[1e3,.035]],a:.001,d:.05,peak:.28}),H.noise({filter:{type:"bandpass",f:2500,q:1.5},a:5e-4,d:.006,peak:.14}),H.tone({t:.085,f:700,to:[[520,.03]],a:.001,d:.035,peak:.08}))}function K(H){if(!g("ui",.06))return;const tt=n.voice(1);tt&&(tt.tone({f:1500,to:[[1e3,.03]],a:.001,d:.035,peak:.26}),tt.noise({filter:{type:"highpass",f:3e3,q:.7},a:5e-4,d:.004,peak:.1}),H&&tt.tone({t:.05,f:2e3,to:[[1500,.03]],a:.001,d:.04,peak:.2}))}const ot=72,ct=74,vt=76,Z=79,X=69,z=67,$=84,j=88,rt=91,O=96;function Q(H){if(!g("jingle",.5))return;const tt=H==="ace"||H==="albatross"||H==="eagle",ut=n.voice(3,tt?.62:.7);if(ut)if(tt){const Et=[[0,ot,.06],[.11,vt,.06],[.22,Z,.06],[.34,$,.6]];for(const[st,xt,F]of Et)_(ut,st,xt,F,.2),m(ut,st,xt,.35,.22);_(ut,.34,Z,.6,.1),_(ut,.34,vt,.6,.08);const Ot=[$,86,j,rt,93,O,98,100];for(let st=0;st<Ot.length;st++)p(ut,.48+st*.04,Ot[st],.5,.07);if(H!=="eagle"){for(const st of[$,j,rt,O])p(ut,1,st,1.2,.08);m(ut,1,ot,.8,.18)}v(.3,!0)}else if(H==="birdie"){const Et=[[0,ot],[.085,vt],[.17,Z],[.255,$]];for(const[Ot,st]of Et)m(ut,Ot,st,Ot>.2?.7:.3,.28);p(ut,.255,$,.9,.09),p(ut,.255,j,.9,.06),v(.28,!1)}else H==="par"?(p(ut,0,Z,1,.2),m(ut,0,Z,.3,.12),p(ut,.16,$,1.3,.22),m(ut,.16,$,.5,.13)):H==="picked"?(m(ut,0,ct,.35,.18),m(ut,.17,X,.55,.16)):(m(ut,0,vt,.3,.22),m(ut,.15,ct,.3,.2),m(ut,.3,z,.3,.16),m(ut,.45,ot,.75,.22),p(ut,.45,$,.6,.05))}if(i&&i.on){i.on("shot:fire",H=>{h(),g("shot",.05)&&M(hr(H&&H.power,.5))}),i.on("ball:contact",H=>{g("clack",.03)&&E(H&&H.speed)}),i.on("ball:ballhit",H=>{g("clack",.03)&&E(H&&H.speed,.7)}),i.on("ball:wall",H=>T(H||{})),i.on("ball:hop",()=>w()),i.on("ball:holed",H=>b(H&&H.speed)),i.on("ball:hazard",H=>{g("hazard",.3)&&(H&&H.kind==="water"?S(1):C(1))}),i.on("ball:whiff",H=>N(H&&H.reason)),i.on("ball:drop",()=>B()),i.on("hole:done",H=>Q(H&&H.term&&H.term.key));for(const H of L2)i.on(H,()=>K(H==="ui:play"||H==="ui:next"||H==="ui:retry"||H==="ui:resume"));i.on("ui:sound",H=>{mt.setMuted(!!(H&&H.muted)),K(!0)}),i.on("audio:external",H=>mt.setExternalMute(!!(H&&H.muted)))}const mt={unlock:h,setMuted(H){r=!!H,d()},setExternalMute(H){o=!!H,d()},get muted(){return r},stats:()=>n.stats()};return mt}const as=typeof window<"u"&&window.__ebgBoot?window.__ebgBoot:null,Pr=({pct:i,label:t})=>as!==null?as.stage(i,t):void 0;as!==null&&as.codeReady&&as.codeReady();await Pr(Ns.course);await uh();yd();const Nl=document.getElementById("stage"),Ur=document.getElementById("ui");Object.assign(Nl.style,{position:"fixed",inset:"0",overflow:"hidden"});Object.assign(Ur.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"10"});N2();const Te=Ld(),pn=await Ap(Rd),Ge=g1(Nl),Ye=R1(Ge),Je=wp({events:Te}),Fl=pn.isFresh();let us=Fl?0:Math.min(pn.nextIndex(),xi.length-1),cn=vh(xi[us]),$n=ld(Ge,cn),rh=!0;Ge.setRound(cn.round);Ye.setLevel(cn);await Pr(Ns.balls);const nr=Ay(Ge,{uiRoot:Ur,rig:Ye});nr.setSkin(pn.skin);nr.setRound(cn.round);const gd=Iy(Ge,{events:Te,play:Je}),D2=Zy(Ge);await Pr(Ns.flags);const Gs=g2(Ur,{events:Te}),xd=T2(Ur,{events:Te,progress:pn,holes:xi,rounds:Lr,rig:Ye,play:Je}),z2=76,vd=(i={})=>{Ye.setInsets&&Ye.setInsets({top:Math.max(z2,i.top||0),right:i.right||0,bottom:i.bottom||0,left:i.left||0})},Yo=m2({stage:Ge,rig:Ye,play:Je,events:Te,uiRoot:Ur,onInsets:vd});vd(Yo.insets?Yo.insets():{});const sa=I2({events:Te});sa.setMuted(pn.muted);const Ol=document.createElement("div");Ol.textContent=`v${ah}`;Object.assign(Ol.style,{position:"fixed",right:"max(10px, env(safe-area-inset-right))",bottom:"max(6px, env(safe-area-inset-bottom))",zIndex:"5",font:"11px system-ui, sans-serif",letterSpacing:".06em",color:"rgba(255,255,255,.55)",pointerEvents:"none"});document.body.appendChild(Ol);const Ee={menuOpen:!1,paused:!1,ad:!1,gameplay:!1,holesThisSession:0,roundPending:null,loading:!1};function _i(){const i=!Ee.menuOpen&&!Ee.paused&&!Ee.ad&&!Ee.loading&&Je.state!=="idle"&&Je.state!=="done";Yo.enable(i),i!==Ee.gameplay&&(Ee.gameplay=i,i?bd():wd())}function Ko(){sa.setExternalMute(hc()),Te.emit("audio:external",{muted:hc()})}Cd(Ko);Ko();function Nr(i){us=i,Ee.loading=!0,rh&&cn.id===xi[i].id||($n.dispose(),cn=vh(xi[i]),$n=ld(Ge,cn)),rh=!1,Ge.setRound(cn.round),nr.setRound(cn.round),Ye.setLevel(cn),$n.faceCamera(Ge.camera),gd.clear(),Je.load(cn,i),Gs.setHole(cn,i),Gs.setStrokes(0,cn.par),Gs.show(!0),Ed({round:cn.round,hole:i+1}),Te.emit("game:hole",{index:i,level:cn,first:Fl&&i===0&&Ee.holesThisSession===0}),_i(),Ye.intro().then(()=>{us===i&&(Ee.loading=!1,Je.state==="ready"&&Ye.frameShot(Je),$n.setFlow(1),_i())})}async function _d(){if(!(Ee.holesThisSession<2)){Ee.ad=!0,Te.emit("ad:start",{}),Ko(),_i();try{await Td()}catch(i){console.error(i)}Ee.ad=!1,Ko(),Te.emit("ad:end",{}),_i()}}function U2(i){const t=Lr.find(r=>r.id===i),e=i===1?0:9,n=t.holes.map((r,o)=>({index:e+o,strokes:pn.best(e+o),par:r.par})),s=pn.roundTotal(i);return{round:i,name:t.name,holes:n,total:s.total,par:s.par,rel:yc(s.total,s.par),complete:s.complete}}Te.on("shot:ready",({strokes:i,par:t})=>{Gs.setStrokes(i,t),Ee.loading||Ye.frameShot(Je),$n.setFlow(1),_i()});Te.on("shot:fire",({strokes:i})=>{Ye.userMoved=!1,Gs.setStrokes(i,Je.level.par),$n.setFlow(0),sa.unlock()});Te.on("shot:end",({strokes:i,par:t})=>Gs.setStrokes(i,t));Te.on("ball:contact",()=>nr.flash());Te.on("ball:holed",()=>$n.wiggleFlag());Te.on("hole:done",({index:i,strokes:t,stars:e,term:n,level:s})=>{const r=pn.roundTotal(s.round);pn.record(i,t,e),Ee.holesThisSession+=1,(n.key==="ace"||n.key==="albatross")&&Gl();const o=xi.filter((c,l)=>pn.best(l)!==null).length;if(Ad(Math.round(o/xi.length*100)),i===8||i===17){const c=pn.roundTotal(s.round);c.complete&&(!r.complete||c.total<r.total)&&Gl(),Ee.roundPending=s.round}_i()});Te.on("ui:next",async()=>{if(Ee.roundPending){const i=Ee.roundPending;Ee.roundPending=null,Te.emit("game:round",U2(i));return}if(await _d(),us>=xi.length-1){xd.showTitle();return}Nr(us+1)});Te.on("ui:retry",async()=>{Ee.roundPending=null,Je.state==="done"&&await _d(),Ee.paused=!1,Nr(us)});Te.on("ui:play",({index:i})=>{Ee.roundPending=null,Ee.paused=!1,Nr(i)});Te.on("ui:pause",()=>{Ee.paused=!0,_i()});Te.on("ui:resume",()=>{Ee.paused=!1,_i()});Te.on("ui:menu",({open:i})=>{Ee.menuOpen=!!i,_i()});Te.on("ui:overview",({on:i})=>Ye.overview(!!i));Te.on("ui:sound",({muted:i})=>{pn.setMuted(!!i),sa.setMuted(!!i)});Te.on("ui:skin",({id:i})=>{pn.setSkin(i),nr.setSkin(i)});Nl.addEventListener("pointerdown",()=>{Ee.loading&&Ye.skipIntro&&Ye.skipIntro()});Ge.onResize(()=>{$n.faceCamera(Ge.camera),Je.state==="ready"&&!Ye.userMoved&&Ye.frameShot(Je)});let cc=0,oh=0;function Md(i){requestAnimationFrame(Md);const t=cc?Math.min((i-cc)/1e3,.1):0;cc=i,oh+=t,!Ee.paused&&!Ee.ad&&Je.update(t);const e=Je.balls();Je.state==="rolling"&&!Ye.userMoved&&Ye.follow(e[1].x,e[1].z),Ye.update(t),nr.update(e,t),D2.update(Je,t),$n.update(t,oh),Yo.update(t),gd.update(t),Ge.render()}window.ebg={version:ah,events:Te,play:Je,stage:Ge,rig:Ye,progress:pn,HOLES:xi,ROUNDS:Lr,loadHole:Nr,get level(){return cn},get course(){return $n}};if(as!==null){if(await Pr(Ns.warm),Ge.renderer&&Ge.scene&&Ge.camera)try{await Promise.race([Ge.renderer.compileAsync(Ge.scene,Ge.camera),new Promise(i=>setTimeout(i,4e3))])}catch(i){console.error(i)}for(let i=0;i<3;i++)await Pr({pct:Ns.warm.pct+3+i*1.5,label:Ns.warm.label}),Ge.render();await as.ready()}Sd();requestAnimationFrame(Md);Nr(us);Fl||xd.showTitle();function N2(){window.addEventListener("keydown",i=>{const t=i.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown"].includes(i.code)&&i.preventDefault()}),window.addEventListener("wheel",i=>i.preventDefault(),{passive:!1}),window.addEventListener("contextmenu",i=>i.preventDefault())}

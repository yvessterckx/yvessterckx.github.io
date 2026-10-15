import{S as Ns}from"./index-D-HC1o1T.js";const uh="0.2.0",dc="8bg:",ko={script:5e3,init:6e3,adStart:12e3,adMax:15e4};let Vs=null,Vn="none",Br=null,Di=null,Fs=0,Bo=!1,Ii=!1,Ji=!1,Gl=-1;const pc=new Set,mc=new Map,fh=()=>typeof window<"u"?window:null,In=(...i)=>{try{console.warn("[platform]",...i)}catch{}};function Hi(i){if(Vs)try{const t=i(Vs);t&&typeof t.catch=="function"&&t.catch(e=>In(e))}catch(t){In(t)}}function Vl(i,t,e){let n=0;return Promise.race([Promise.resolve(i).catch(()=>e),new Promise(s=>{n=setTimeout(()=>s(e),t)})]).finally(()=>clearTimeout(n))}function Ho(){const i=gc();for(const t of[...pc])try{t(i)}catch(e){In(e)}}function hh(){try{const i=fh();return i&&i.localStorage||null}catch{return null}}function dh(){return Br||(Br=(async()=>{try{const i=fh();if(!i||!i.__cgSdk)return{env:Vn};const e=await Vl(i.__cgSdk,ko.script,!1)&&i.CrazyGames&&i.CrazyGames.SDK;if(!e||typeof e.init!="function")return{env:Vn};if(!await Vl(Promise.resolve().then(()=>e.init()).then(()=>!0,o=>(In("init failed",o),!1)),ko.init,!1))return{env:Vn};const s=String(e.environment||"disabled");if(s!=="crazygames"&&s!=="local")return Vn=s,{env:Vn};const r=e.game;try{Ji=!!(r.settings&&r.settings.muteAudio)}catch{Ji=!1}try{r.addSettingsChangeListener(o=>{let a=Ji;try{a=!!((o&&"muteAudio"in o?o:r.settings)||{}).muteAudio}catch{}a!==Ji&&(Ji=a,Ho())})}catch(o){In("settings listener",o)}try{e.data&&typeof e.data.getItem=="function"&&(e.data.getItem(dc+"probe"),Di=e.data)}catch(o){In("data module off",o&&(o.code||o.message||o)),Di=null}Vs=e,Vn=s,Fs===1&&Hi(o=>o.game.loadingStart()),Ji&&Ho()}catch(i){In("SDK unavailable",i),Vs=null,Di=null,(Vn==="crazygames"||Vn==="local")&&(Vn="none")}return{env:Vn}})(),Br)}function Ad(){Fs||(Fs=1,Hi(i=>i.game.loadingStart()))}function Cd(){if(Fs===2)return;const i=Fs;Fs=2,i===1&&Hi(t=>t.game.loadingStop())}function Rd(){Bo||Ii||(Bo=!0,Hi(i=>i.game.gameplayStart()))}function Pd(){Bo&&(Bo=!1,Hi(i=>i.game.gameplayStop()))}function Wl(){Hi(i=>i.game.happytime())}function Ld(i){Hi(t=>i?t.game.setGameContext(i):t.game.clearGameContext())}function Id(i){const t=Math.max(0,Math.min(100,Math.round(Number(i)||0)));t<=Gl||(Gl=t,Hi(e=>e.game.reportGameCompletedPercentage(t)))}function Dd(){return!Vs||Ii?Promise.resolve():new Promise(i=>{let t=!1,e=0,n=0;const s=()=>{t||(t=!0,clearTimeout(e),i())},r=()=>{clearTimeout(n),Ii&&(Ii=!1,Ho()),s()};e=setTimeout(()=>{Ii||s()},ko.adStart);const o={adStarted:()=>{clearTimeout(e),clearTimeout(n),Ii||(Ii=!0,Ho()),n=setTimeout(r,ko.adMax)},adFinished:r,adError:a=>{const c=a&&a.code;c&&c!=="adCooldown"&&c!=="adsDisabledBasicLaunch"&&c!=="unfilled"&&In("ad",c),r()}};try{const a=Vs.ad.requestAd("midgame",o);a&&typeof a.then=="function"&&a.then(void 0,()=>r())}catch(a){In("ad",a),r()}})}function gc(){return Ji||Ii}function zd(i){return typeof i!="function"?()=>{}:(pc.add(i),()=>{pc.delete(i)})}const Ud={async load(i){await dh();const t=dc+i;if(Di)try{const e=Di.getItem(t);if(e!=null)return String(e);const n=Xl(t);if(n!=null){try{Di.setItem(t,n)}catch(s){In("migrate",s)}return n}return null}catch(e){In("data load",e)}return Xl(t)},save(i,t){const e=dc+i,n=String(t);if(Di)try{Di.setItem(e,n);return}catch(s){In("data save",s)}Nd(e,n)}};function Xl(i){const t=hh();if(t)try{const e=t.getItem(i);if(e!=null)return String(e)}catch{}return mc.has(i)?mc.get(i):null}function Nd(i,t){mc.set(i,t);const e=hh();if(e)try{e.setItem(i,t)}catch{}}function Fd(){const i=new Map;return{on(t,e){return i.has(t)||i.set(t,new Set),i.get(t).add(e),()=>i.get(t).delete(e)},emit(t,e){const n=i.get(t);if(n)for(const s of[...n])try{s(e)}catch(r){console.error("[events] "+t,r)}}}}const xc=Math.PI/180,zs=i=>Math.round(i*100)/100;function Wn(i,t=12){const e=i.length,n=[];for(let s=0;s<e;s++){const r=i[s],o=r[2]||0;if(!o){n.push([r[0],r[1]]);continue}const a=i[(s+e-1)%e],c=i[(s+1)%e];let l=a[0]-r[0],u=a[1]-r[1],f=c[0]-r[0],d=c[1]-r[1];const h=Math.hypot(l,u),g=Math.hypot(f,d);l/=h,u/=h,f/=g,d/=g;const v=Math.acos(Math.max(-1,Math.min(1,l*f+u*d)));let m=o/Math.tan(v/2),p=o;const x=.5*Math.min(h,g);m>x&&(m=x,p=m*Math.tan(v/2));const _=l+f,M=u+d,S=Math.hypot(_,M),E=p/Math.sin(v/2),C=r[0]+_/S*E,w=r[1]+M/S*E,b=Math.atan2(r[1]+u*m-w,r[0]+l*m-C);let y=Math.atan2(r[1]+d*m-w,r[0]+f*m-C)-b;for(;y>Math.PI;)y-=2*Math.PI;for(;y<-Math.PI;)y+=2*Math.PI;const R=Math.max(1,Math.ceil(Math.abs(y)/(t*xc)));for(let N=0;N<=R;N++)n.push([zs(C+p*Math.cos(b+y*N/R)),zs(w+p*Math.sin(b+y*N/R))])}return n.filter((s,r)=>{const o=n[(r+n.length-1)%n.length];return r===0&&n.length>1?!(s[0]===n[n.length-1][0]&&s[1]===n[n.length-1][1]):!(s[0]===o[0]&&s[1]===o[1])})}function ql(i,t,e,n,s,r=10){const o=[],a=Math.max(2,Math.ceil((s-n)/r));for(let c=0;c<=a;c++){const l=(n+(s-n)*c/a)*xc;o.push([zs(i[0]+e*Math.cos(l)),zs(i[1]+e*Math.sin(l))])}for(let c=a;c>=0;c--){const l=(n+(s-n)*c/a)*xc;o.push([zs(i[0]+t*Math.cos(l)),zs(i[1]+t*Math.sin(l))])}return o}const Od=[{id:"g1",name:"Hello, Eight!",par:2,circle:5,size:[30,12],tee:[4,6],cup:[21,6],tip:"Sink the 8 in the hole!",border:"wall",ground:Wn([[0,.8,4],[15,0,8],[30,.8,4],[30,11.2,4],[15,12,8],[0,11.2,4]]),zones:[{surface:"green",circle:{c:[21,6],r:3.6}}],props:[{type:"sign",at:[1.5,-1.4]},{type:"flowers",at:[6,-1.3]},{type:"flowers",at:[11,13.3]},{type:"flowers",at:[19,-1.3]},{type:"flowers",at:[25,13.2]},{type:"tree",at:[-3.2,13.5]},{type:"tree",at:[33.5,-2.2]},{type:"bush",at:[27,13.4]},{type:"bush",at:[-1.4,3]},{type:"statue8",at:[33.6,6]}]},{id:"g2",name:"Easy Does It",par:2,circle:5,size:[34,14],tee:[4,7],cup:[16,7],tip:"Softer is smarter.",border:"wall",ground:Wn([[0,2,3],[9,1.5,3],[11,3,2],[16,1,5],[21,3.5,2],[34,3.5,3],[34,10.5,3],[21,10.5,2],[16,13,5],[11,11,2],[9,12.5,3],[0,12,3]]),zones:[{surface:"green",circle:{c:[16,7],r:3.6}}],props:[{type:"sign",at:[1,.2]},{type:"flowers",at:[10.5,1.2]},{type:"flowers",at:[10.5,12.8]},{type:"flowers",at:[16,-.6]},{type:"flowers",at:[16,14.6]},{type:"bush",at:[26,2]},{type:"bush",at:[29,12]},{type:"flowerbox",at:[22,12.3]},{type:"flowerbox",at:[31,1.7]},{type:"tree",at:[37.5,7]},{type:"tree",at:[24,15.5]}]},{id:"g3",name:"Side Swipe",par:3,circle:4,size:[30,18],tee:[2.8,3.54],cup:[25,15],tip:"Hit its side!",border:"hedge",ground:Wn([[0,5.73,1.5],[2.92,0,1.5],[22,0,6],[30,3,5],[30,18,4],[17,18,4],[15,9.5,3],[0,10,3]]),zones:[{surface:"green",circle:{c:[25,15],r:3.8}}],props:[{type:"bush",at:[-1,2.2]},{type:"bush",at:[1.2,-1]},{type:"bush",at:[-1,7.5]},{type:"fountain",at:[6.5,14.5]},{type:"flowers",at:[2,12.5]},{type:"flowers",at:[11.5,12]},{type:"flowers",at:[12,16.5]},{type:"flowers",at:[12,-1.2]},{type:"tree",at:[33.5,9]},{type:"tree",at:[26,-3.2]}]},{id:"g4",name:"Bank Job",par:3,circle:4,size:[26,15],tee:[3,3],cup:[23,3],tip:"Bounce it off the wall!",border:"wall",ground:Wn([[0,.5,3],[11.5,0,1.5],[11.5,8.5,1.5],[14.5,8.5,1.5],[14.5,0,1.5],[26,.5,3],[26,15,4],[0,15,4]]),zones:[{surface:"green",circle:{c:[23,3],r:3.8}}],props:[{type:"flowerbox",at:[13,2]},{type:"flowerbox",at:[13,5.2]},{type:"flowers",at:[13,7.6]},{type:"tree",at:[-3.3,7]},{type:"flowers",at:[6,16.3]},{type:"flowers",at:[20,16.3]},{type:"bush",at:[27.6,9]},{type:"sign",at:[1,-1]},{type:"tree",at:[29.3,-1.5]}]},{id:"g5",name:"Lollipop Lane",par:3,circle:3,size:[40,20],tee:[4,10],cup:[36,10],tip:"Move the white ball!",border:"wall",ground:Wn([[0,3,3],[10,0,6],[30,0,6],[40,3,3],[40,17,3],[30,20,6],[10,20,6],[0,17,3]]),zones:[{surface:"green",circle:{c:[36,10],r:3.5}}],posts:[...[4,8,12,16].flatMap(i=>[12,20,28].map(t=>({at:[t,i],r:.6,kind:"lollipop"}))),...[6,10,14].flatMap(i=>[16,24].map(t=>({at:[t,i],r:.6,kind:"lollipop"})))],props:[{type:"lollipop",at:[-3.2,3]},{type:"lollipop",at:[43.2,17]},{type:"lollipop",at:[20,23.2]},{type:"flowers",at:[20,-1.2]},{type:"flowers",at:[8,20.6]},{type:"flowers",at:[32,20.6]},{type:"tree",at:[-3.5,15]},{type:"tree",at:[43.5,4]},{type:"sign",at:[1.5,1.2]}]},{id:"g6",name:"Up & Over",par:3,circle:4,size:[40,18],tee:[4,9],cup:[35,9],tip:"Uphill? Hit harder.",border:"hedge",ground:Wn([[0,2,3],[13,1,3],[15.5,5,2],[23,5,2],[25,1,3],[40,2,3],[40,16,3],[25,17,3],[23,13,2],[15.5,13,2],[13,17,3],[0,16,3]]),steps:[{axis:"x",from:16,to:22,h:1.8}],zones:[{surface:"green",circle:{c:[35,9],r:4}}],props:[{type:"flowers",at:[19,3.5]},{type:"flowers",at:[19,14.5]},{type:"bush",at:[16.5,2.5]},{type:"bush",at:[21.5,15.5]},{type:"tree",at:[7,20]},{type:"tree",at:[7,-2]},{type:"flowers",at:[32,18]},{type:"flowers",at:[32,0]},{type:"statue8",at:[43.2,9]},{type:"sign",at:[1,.8]}]},{id:"g7",name:"Sidewinder",par:3,circle:4,size:[42,20],tee:[2.5,3.5],cup:[39,15],tip:"Arrows show the slope.",border:"wall",tilt:[0,.05],ground:Wn([[0,1,3],[12,0,8],[30,2.5,8],[42,7,4],[42,19.5,4],[32,20,8],[14,16,8],[0,12.5,3]]),zones:[{surface:"green",circle:{c:[39,15],r:4}}],props:[{type:"tree",at:[4,18]},{type:"tree",at:[18,21.5]},{type:"flowers",at:[8,15.5]},{type:"flowers",at:[26,20.3]},{type:"bush",at:[22,.2]},{type:"flowers",at:[36,3.2]},{type:"tree",at:[44.8,2]},{type:"sign",at:[.5,-1]}]},{id:"g8",name:"Sandy Toes",par:3,circle:3.5,size:[40,20],tee:[4,11],cup:[33,8.5],tip:"Sand slows the 8.",border:"wall",ground:Wn([[0,4,3],[12,1,6],[32,1,5],[40,4,4],[40,16,4],[32,20,5],[12,20,6],[0,18,3]]),zones:[{surface:"green",circle:{c:[33,8.5],r:3.6}},{surface:"sand",poly:Wn([[13,5,3],[20,2.5,4],[29,3.5,3],[30,7,2],[27,10.6,3],[17,10.6,3],[12.5,8.5,2]])},{surface:"sand",poly:ql([33,8.5],3,4.6,-70,80)}],props:[{type:"flowers",at:[22,-.5]},{type:"bush",at:[9,.2]},{type:"flowers",at:[22,21]},{type:"bush",at:[36,19.2]},{type:"tree",at:[-3.4,11]},{type:"tree",at:[43.5,10]},{type:"sign",at:[.5,2]}]},{id:"g9",name:"King of the Hill",par:4,circle:3.5,size:[50,28],tee:[5,5],cup:[37,17.5],tip:"Find the way up!",border:"hedge",ground:Wn([[0,0,4],[14.5,0,1.5],[14.5,14,1.5],[17.5,14,1.5],[17.5,0,1.5],[50,0,5],[50,28,5],[0,28,4]]),plateaus:[{circle:{c:[37,17],r:5},h:1.5,ramp:4,linear:!0}],arcs:[{kind:"hedge",c:[37,17],r:5,from:250,to:530}],zones:[{surface:"green",circle:{c:[37,17],r:4.6}},{surface:"sand",poly:ql([37,17],9.3,11,255,525)}],props:[{type:"flowerbox",at:[16,3]},{type:"flowerbox",at:[16,9]},{type:"flowers",at:[16,12.6]},{type:"tree",at:[-3.5,21]},{type:"tree",at:[53.5,8]},{type:"tree",at:[30,31.5]},{type:"flowers",at:[8,-1]},{type:"flowers",at:[33,-1]},{type:"statue8",at:[53.6,22]},{type:"sign",at:[-1,2]}]}],Yl=i=>Math.round(i*100)/100,Co=(i,t)=>[Yl(i),Yl(t)];function bn(i,t=2.5,e=5,n=!0){const s=i.filter((a,c)=>{const l=i[(c+i.length-1)%i.length];return!n&&c===0||Math.hypot(a[0]-l[0],a[1]-l[1])>1e-6}),r=[],o=s.length;for(let a=0;a<o;a++){const c=s[a],l=c[2]??t;if(!n&&(a===0||a===o-1)){r.push(Co(c[0],c[1]));continue}const u=s[(a+o-1)%o],f=s[(a+1)%o],d=Math.hypot(u[0]-c[0],u[1]-c[1]),h=Math.hypot(f[0]-c[0],f[1]-c[1]),g=[(u[0]-c[0])/d,(u[1]-c[1])/d],v=[(f[0]-c[0])/h,(f[1]-c[1])/h],m=Math.max(-1,Math.min(1,g[0]*v[0]+g[1]*v[1])),p=Math.acos(m)/2;if(!l||p>1.55){r.push(Co(c[0],c[1]));continue}const x=Math.min(l/Math.tan(p),d*.48,h*.48),_=[c[0]+g[0]*x,c[1]+g[1]*x],M=[c[0]+v[0]*x,c[1]+v[1]*x];for(let S=0;S<=e;S++){const E=S/e,C=(1-E)*(1-E),w=2*(1-E)*E,b=E*E;r.push(Co(C*_[0]+w*c[0]+b*M[0],C*_[1]+w*c[1]+b*M[1]))}}return r}function vc(i,t,e,n,s=10){const r=Math.max(2,Math.ceil(Math.abs(n-e)/s)),o=[];for(let a=0;a<=r;a++){const c=(e+(n-e)*a/r)*Math.PI/180;o.push(Co(i[0]+Math.cos(c)*t,i[1]+Math.sin(c)*t))}return o}function kd(i,t,e){const n=r=>i.reduce((o,a,c)=>Math.hypot(a[0]-r[0],a[1]-r[1])<Math.hypot(i[o][0]-r[0],i[o][1]-r[1])?c:o,0),s=[];for(let r=n(t),o=n(e);s.push(i[r]),r!==o;r=(r+1)%i.length);return s}const Bd={id:"l1",name:"Bend It",par:3,circle:4.5,size:[40,22],tee:[5,11],cup:[35,11],tip:"Slide the dot to bend the 8!",ground:bn([[1,4],[12,1],[26,1.5],[39,3],[39,19],[26,20.5],[12,21],[1,18]],4.5),border:"wall",posts:[{at:[16,12.3],r:1.6,kind:"tree"},{at:[30.5,14],r:1.3,kind:"post"},{at:[30.5,8],r:1.3,kind:"post"}],zones:[{surface:"green",circle:{c:[35,11],r:4}}],props:[{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[41.5,22.5]},{type:"tree",at:[20,23.5],scale:1.2},{type:"bush",at:[6,-1.5]},{type:"bush",at:[33,-1.5]},{type:"flowers",at:[18,-1.6]},{type:"flowers",at:[-2,11]},{type:"sign",at:[-2.2,6]}]},la=(i,t,e,n)=>{const s=n?1:-1;return[{kind:"hedge",pts:[[i-1.2,t],[i,t+s*1.2],[i+1.2,t]]},{kind:"hedge",pts:[[i,t+s*1.2],[i,e]]}]},Hd={id:"l2",name:"Slalom",par:4,circle:4,size:[46,22],tee:[4,11.5],cup:[38,9],tip:"Bend left, then bend right!",ground:bn([[1,2],[23,1],[45,2],[45,20],[23,21],[1,20]],4),border:"wall",walls:[...la(10,20.36,14,!1),...la(18,1.36,9.1,!0),...la(29,1.5,9.2,!0)],posts:[{at:[10,13],r:1.2,kind:"tree"},{at:[18,10.1],r:1.2,kind:"tree"},{at:[29,10.2],r:1.2,kind:"tree"}],zones:[{surface:"rough",rect:[0,0,46,22]},{surface:"fairway",poly:bn([[2,5],[23,4],[44,5],[44,17],[23,18],[2,17]],3)},{surface:"green",circle:{c:[38,9],r:3.5}}],props:[{type:"tree",at:[-1.5,23]},{type:"tree",at:[47.5,-1]},{type:"tree",at:[30,23.5]},{type:"flowers",at:[14,-1.5]},{type:"flowers",at:[24,-1.6]},{type:"bush",at:[47.5,14]},{type:"sign",at:[-2,6]}]},Gd={id:"l3",name:"Lily Pad Lagoon",par:3,circle:4,size:[44,24],tee:[4,12],cup:[39.5,16.5],tip:"Splash = +1",ground:bn([[1,4],[10,.8],[34,.8],[43,4],[43,20],[34,23.2],[10,23.2],[1,20]],4),border:"wall",zones:[{surface:"water",ellipse:{c:[22,12],rx:8.5,ry:6.2}},{surface:"fairway",rect:[12.5,10.5,31.5,13.5]},{surface:"green",circle:{c:[39,16],r:3.8}}],props:[{type:"bridge",at:[22,12],r:8.6,scale:.75},{type:"lilypad",at:[17,16],r:.9},{type:"lilypad",at:[20.5,17.2],r:.7},{type:"lilypad",at:[26.5,15.6],r:.8},{type:"lilypad",at:[18.5,7.6],r:.8},{type:"lilypad",at:[24,6.8],r:.7},{type:"lilypad",at:[27.5,8.5],r:.9},{type:"reeds",at:[15,14.6]},{type:"reeds",at:[28.5,15]},{type:"reeds",at:[15.5,9]},{type:"reeds",at:[28.6,9]},{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[45.5,1]},{type:"flowers",at:[22,25.5]},{type:"flowers",at:[22,-1.6]}]},Kl=bn([[6,21.2],[1.5,20.4],[1,4],[4,1.2],[36,1.2],[39,4],[38.5,20.4],[34,21.2]],3,5,!1),Vd={id:"l4",name:"Boing Boing",par:3,circle:3.5,size:[40,22],tee:[8,6],cup:[32,6],tip:"Cushions bounce more!",ground:Kl,border:null,walls:[{kind:"wall",pts:Kl},{kind:"cushion",pts:[[34,21.2],[6,21.2]]},{kind:"hedge",pts:[[9.9,1.2],[12.3,3.2]]},{kind:"hedge",pts:[[30.1,1.2],[27.7,3.2]]}],arcs:[{kind:"hedge",c:[20,1.2],r:8,from:14,to:166}],zones:[{surface:"rough",circle:{c:[20,1.2],r:7.6}},{surface:"green",circle:{c:[32,6],r:3.5}}],props:[{type:"flowers",at:[17,4]},{type:"flowers",at:[22.5,5]},{type:"bush",at:[20,2.6],scale:1.3},{type:"flowers",at:[14.5,2.4]},{type:"flowers",at:[25.5,2.4]},{type:"tree",at:[-1.5,22]},{type:"tree",at:[41.5,22]},{type:"bush",at:[20,23.6]},{type:"flowers",at:[10,23.6]},{type:"flowers",at:[30,23.6]}]},ph=(i,t,e=.5)=>[...vc([26,2.5],i,0,180,7.5).map(([n,s])=>[n,2.5+(s-2.5)*t/i]),[26-i,e],[26+i,e]],$l=bn(ph(25,21.6),2.5),Wd={id:"l5",name:"Banana Bay",par:4,circle:3.5,size:[52,25],tee:[6,4],cup:[46,4],tip:"Dot up = bend late!",ground:$l,border:"wall",zones:[{surface:"rough",poly:$l},{surface:"fairway",poly:bn(ph(23,19.4,2.2),2)},{surface:"water",ellipse:{c:[26,2],rx:17,ry:14}},{surface:"green",circle:{c:[46.5,5.5],r:3}}],props:[{type:"lilypad",at:[20,8],r:.9},{type:"lilypad",at:[26,11],r:.8},{type:"lilypad",at:[32,7],r:1},{type:"lilypad",at:[24,4],r:.7},{type:"fountain",at:[26,3.5]},{type:"reeds",at:[11.2,6.8]},{type:"reeds",at:[40.8,6.8]},{type:"reeds",at:[18,13.6]},{type:"reeds",at:[34,13.6]},{type:"tree",at:[-1.5,24]},{type:"tree",at:[53.5,24]},{type:"tree",at:[26,26.5],scale:1.2},{type:"flowers",at:[-2,12]},{type:"flowers",at:[54,12]}]},jl=bn([[39,4],[39,19],[33,21],[25,21],[25,11.5],[15,11.5],[15,21],[8,21],[1,18],[1,6],[5,1.5],[12,1],[28,1],[33,2.5]],2.5),Xd={id:"l6",name:"Rooftop Rally",par:3,circle:3,size:[40,22],tee:[5,16],cup:[33,15],tip:"Open edge = out!",ground:jl,border:null,walls:[{kind:"wall",pts:kd(jl,[39,18],[2,7])},{kind:"cushion",pts:[[12,1],[28,1]]}],tilt:[0,.03],zones:[{surface:"green",circle:{c:[33,15],r:3.5}}],props:[{type:"tree",at:[20,17.5],scale:1.1},{type:"flowers",at:[17.5,14]},{type:"flowers",at:[22.5,14]},{type:"flowerbox",at:[4,23]},{type:"flowerbox",at:[11,23.2]},{type:"flowerbox",at:[29,23.2]},{type:"flowerbox",at:[36,22.8]},{type:"flowerbox",at:[-1.5,12],rot:90},{type:"sign",at:[-1.8,18]}]},qd=[[1,3.5],[3.5,1],[36,1],[43,8],[43,8.6],[35.6,16],[30.5,16],[30.5,20.5],[28,23],[8,23],[1,16]],Yd={id:"l7",name:"Tight Squeeze",par:4,circle:2.5,size:[44,24],tee:[5,4],cup:[19,19.5],tip:"Stuck on a cushion? Push it in!",ground:qd,border:null,walls:[{kind:"hedge",pts:[[36,1],[3.5,1],[1,3.5],[1,16]]},{kind:"hedge",pts:[[8,23],[28,23],[30.5,20.5],[30.5,17.6]]},{kind:"cushion",pts:[[36,1],[43,8],[43,8.6],[35.6,16],[27,16]]},{kind:"cushion",pts:[[28.9,16],[30.5,17.6]]},{kind:"cushion",pts:[[1,16],[8,23]]},{kind:"cushion",pts:[[8.8,7.8],[1,15.6]]},{kind:"cushion",pts:[[1,6.2],[2.6,7.8],[36,7.8]]},{kind:"cushion",pts:[[8,16],[24.5,16]]}],zones:[{surface:"water",poly:[[.8,7.6],[8.8,7.6],[.8,15.6]]},{surface:"green",circle:{c:[19,19.5],r:2.6}}],props:[{type:"lilypad",at:[2.6,10],r:.6},{type:"reeds",at:[2,13]},{type:"flowerbox",at:[36,22.5]},{type:"flowerbox",at:[40.5,18.5],rot:90},{type:"bush",at:[37.5,19.5]},{type:"tree",at:[-1.5,24.5]},{type:"tree",at:[45.5,-1]},{type:"flowers",at:[20,-1.6]},{type:"sign",at:[-2,6]}]},Kd={id:"l8",name:"Island Hop",par:4,circle:3,size:[40,34],tee:[8.5,27],cup:[12,8.5],tip:"Hop island to island!",ground:bn([[1,5],[4,1],[35,1.5],[39,5],[38.5,29],[35,33],[5,32.5],[1.5,29]],4),border:"wall",walls:[{kind:"cushion",pts:[[13.8,25],[22,25]]},{kind:"cushion",pts:[[13.8,29],[22.2,29]]},{kind:"cushion",pts:[[22.5,22.4],[22.5,13.6]]},{kind:"cushion",pts:[[26.5,21],[26.5,11.8]]}],arcs:[{kind:"cushion",c:[9,27],r:4.6,from:30,to:330},{kind:"cushion",c:[28.5,25],r:6.2,from:-75,to:150},{kind:"cushion",c:[13,9],r:4.9,from:110,to:250}],hills:[{c:[29,25],r:4.5,h:.25}],plateaus:[{circle:{c:[12,8.5],r:2.8},h:.25,ramp:1.2}],zones:[{surface:"water",rect:[0,0,40,34]},{surface:"rough",poly:bn([[0,0],[5.5,0],[5.5,13],[3.5,19],[0,20]],2.5)},{surface:"rough",poly:bn([[31.5,0],[40,0],[40,16],[35,15.5],[31.5,13]],2.5)},{surface:"rough",poly:bn([[15.5,31.5],[21,31.5],[22,34],[14.5,34]],1.5)},{surface:"fairway",circle:{c:[9,27],r:5}},{surface:"fairway",circle:{c:[28.5,25],r:6.6}},{surface:"fairway",ellipse:{c:[18,9],rx:9.5,ry:5.5}},{surface:"fairway",rect:[13.6,25,22.6,29]},{surface:"fairway",rect:[22.5,11,26.5,22]},{surface:"green",circle:{c:[12,8.5],r:2.8}}],props:[{type:"bridge",at:[18,27],r:4.2},{type:"bridge",at:[24.5,17],r:4.4,rot:90},{type:"lilypad",at:[6,17],r:.9},{type:"lilypad",at:[33,13],r:.8},{type:"lilypad",at:[35.5,7],r:1},{type:"lilypad",at:[17,20],r:.7},{type:"lilypad",at:[5,6],r:.8},{type:"lilypad",at:[34,31],r:.7},{type:"reeds",at:[3.4,21]},{type:"reeds",at:[36,20.5]},{type:"reeds",at:[29,4]},{type:"reeds",at:[3.5,12]},{type:"fountain",at:[33.5,9]},{type:"tree",at:[-1.5,35]},{type:"tree",at:[41.5,35]},{type:"flowers",at:[20,35.5]}]},Hr=Math.atan2(Math.sqrt(29),14)*(180/Math.PI),$d=[...vc([44,16],15,180+Hr,540-Hr,7.5),...vc([16,16],15,Hr,360-Hr,7.5).slice(1,-1)],jd={id:"l9",name:"Figure Eight",par:5,circle:3.5,size:[60,32],tee:[4.5,16],cup:[55.5,16],tip:"Last hole: loop the 8!",ground:bn($d,2,4),border:"wall",posts:[{at:[30,16],r:1.8,kind:"bumper"}],arcs:[{kind:"cushion",c:[16,16],r:8.5,from:100,to:170},{kind:"cushion",c:[16,16],r:8.5,from:190,to:260},{kind:"cushion",c:[44,16],r:8.5,from:10,to:80},{kind:"cushion",c:[44,16],r:8.5,from:280,to:350}],plateaus:[{circle:{c:[55.5,16],r:2.6},h:.3,ramp:1.5}],zones:[{surface:"rough",circle:{c:[16,16],r:15.5}},{surface:"rough",circle:{c:[44,16],r:15.5}},{surface:"fairway",circle:{c:[16,16],r:13}},{surface:"fairway",circle:{c:[44,16],r:13}},{surface:"fairway",rect:[26,9.5,34,22.5]},{surface:"water",circle:{c:[16,16],r:8}},{surface:"water",circle:{c:[44,16],r:8}},{surface:"green",circle:{c:[55.5,16],r:3}}],props:[{type:"fountain",at:[16,16],scale:1.2},{type:"fountain",at:[44,16],scale:1.2},{type:"lilypad",at:[12,12],r:.9},{type:"lilypad",at:[20.5,19.5],r:.8},{type:"lilypad",at:[13,20],r:.7},{type:"lilypad",at:[47.5,12.5],r:.9},{type:"lilypad",at:[40,19.5],r:.8},{type:"lilypad",at:[48,20.5],r:.7},{type:"reeds",at:[9.5,19.5]},{type:"reeds",at:[22.5,12]},{type:"reeds",at:[37.5,12.5]},{type:"reeds",at:[50.5,19.5]},{type:"statue8",at:[58.5,28],scale:1.3},{type:"flowers",at:[56,30.5]},{type:"flowers",at:[60.5,25]},{type:"tree",at:[1.5,29.5]},{type:"tree",at:[1.5,2.5]},{type:"tree",at:[58.5,3]},{type:"bush",at:[30,27.5]},{type:"bush",at:[30,4.5]},{type:"flowers",at:[29,26.5]},{type:"flowers",at:[31,5.5]}]},Zd=[Bd,Hd,Gd,Vd,Wd,Xd,Yd,Kd,jd],zr=Object.freeze([{id:1,name:"Greenside",holes:Od},{id:2,name:"Lakeside",holes:Zd}]),xi=Object.freeze(zr.flatMap((i,t)=>i.holes.map((e,n)=>Object.freeze({...e,round:i.id,number:t*9+n+1})))),kt=Object.freeze({DT:1/240,R:.5,MAX_EVENTS:8,E_BALL:.95,SLOPE_K:21,GRAD_EPS:.1,V_SLEEP:.05,SLOW_V:.3,SLOW_MAX_T:2.5,MAX_SHOT_T:20,D_MAX:40,D_REF_DECEL:3,POWER_MIN:.03,PLACE_GAP:.05,CUE_MAX_TRAVEL:12,CUE_FADE_T:.5,GHOST_DECEL:8,CURVE_K:.3,CURVE_LEN:4,EIGHT_CURVE_K:.04,EIGHT_CURVE_LEN:15,EIGHT_EARLY_LEN:5,EIGHT_HOOK_START:3,EIGHT_HOOK_LEN:7,HOLE_R:1.1,HOLE_VCAP:8,LIP_W:.5,LIP_A:4,HOLE_SETTLE_V:1,HOP_KEEP:.85}),Zl=Object.freeze({green:Object.freeze({decel:2}),fairway:Object.freeze({decel:3}),rough:Object.freeze({decel:6}),sand:Object.freeze({decel:14}),ice:Object.freeze({decel:.8})}),_c=Object.freeze({wall:Object.freeze({e:.6,keep:.95}),hedge:Object.freeze({e:.6,keep:.95}),cushion:Object.freeze({e:.85,keep:.97}),bumper:Object.freeze({e:1,keep:1}),post:Object.freeze({e:.6,keep:.95}),tree:Object.freeze({e:.6,keep:.95}),lollipop:Object.freeze({e:.6,keep:.95})}),Oi=1/0,ua=i=>_c[i]||_c.wall;function Jd(i){const t=[],e=[],n=new Set,s=(l,u,f)=>{const d=l+","+u;n.has(d)||(n.add(d),e.push({x:l,z:u,e:f.e,keep:f.keep,kind:f===_c.cushion?"cushion":"wall",minx:l,maxx:l,minz:u,maxz:u}))};for(const l of i.segments||[]){const u=l.bx-l.ax,f=l.bz-l.az,d=u*u+f*f;if(d===0)continue;const h=Math.sqrt(d),g=ua(l.kind);t.push({ax:l.ax,az:l.az,ex:u,ez:f,len2:d,nx:-f/h,nz:u/h,e:g.e,keep:g.keep,kind:l.kind||"wall",minx:Math.min(l.ax,l.bx),maxx:Math.max(l.ax,l.bx),minz:Math.min(l.az,l.bz),maxz:Math.max(l.az,l.bz)}),s(l.ax,l.az,g),s(l.bx,l.bz,g)}const r=(i.posts||[]).map(l=>{const u=ua(l.kind||"post");return{x:l.x,z:l.z,r:l.r,e:u.e,keep:u.keep,kind:l.kind||"post",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),o=(i.arcs||[]).map(l=>{const u=ua(l.kind);return s(l.x+l.sx*l.r,l.z+l.sz*l.r,u),s(l.x+l.ex*l.r,l.z+l.ez*l.r,u),{x:l.x,z:l.z,r:l.r,sx:l.sx,sz:l.sz,ex:l.ex,ez:l.ez,e:u.e,keep:u.keep,kind:l.kind||"wall",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),a=Jl(0,i.eight.x,i.eight.z);a.mode="off";const c=Jl(1,i.eight.x,i.eight.z);return{t:0,shotT:0,active:!1,balls:[a,c],segs:t,caps:e,posts:r,arcs:o,hole:{x:i.hole.x,z:i.hole.z},placeR:i.placeR||4,lieX:i.eight.x,lieZ:i.eight.z,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function Jl(i,t,e){return{id:i,x:t,z:e,px:t,pz:e,vx:0,vz:0,mode:"rest",spin:0,top:0,travel:0,curveS:0,slowT:0,fadeT:0,overHole:!1,decel:0,slopeA2:0}}function Ql(i,t,e){const n=i.balls[1];n.x=n.px=t,n.z=n.pz=e,n.vx=0,n.vz=0,n.mode="rest",n.spin=0,n.top=0,n.curveS=0,n.slowT=0,n.overHole=!1,i.lieX=t,i.lieZ=e}function mh(i){const t=i<kt.POWER_MIN?kt.POWER_MIN:i>1?1:i;return Math.sqrt(2*kt.D_REF_DECEL*kt.D_MAX*t)/((1+kt.E_BALL)/2)}function gh(i){const t=typeof i=="number"?i:i&&i.x||0,e=typeof i=="number"?0:i&&i.y||0;return{side:t<-1?-1:t>1?1:t,top:e<-1?-1:e>1?1:e}}function xh(i,t,e,n){const s=i.balls[0],r=i.balls[1],o=Math.sqrt(t.dx*t.dx+t.dz*t.dz),a=mh(n);s.x=s.px=t.x,s.z=s.pz=t.z,s.vx=t.dx/o*a,s.vz=t.dz/o*a;const c=gh(e);s.mode="cue",s.spin=c.side,s.top=c.top,s.travel=0,s.fadeT=0,i.lieX=r.x,i.lieZ=r.z,r.slowT=0,i.shotT=i.t,i.active=!0}const Mc={x:0,z:0},Re={t:0,kind:0,i:0,j:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""},qn=0,vh=1,xl=2,fa=3;function _h(i,t=kt.DT){const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];s.px=s.x,s.pz=s.z,s.mode==="cue"?Qd(s,t):s.mode==="roll"?np(i,s,t):s.mode==="ghost"&&tp(s,t)}rp(i,t);for(let n=0;n<e.length;n++)ap(i,e[n],t);if(i.t+=t,i.active){let n=!1;for(let s=0;s<e.length;s++){const r=e[s].mode;(r==="cue"||r==="roll"||r==="ghost")&&(n=!0)}if(n&&i.t-i.shotT>kt.MAX_SHOT_T){for(let s=0;s<e.length;s++){const r=e[s];r.mode==="roll"?yc(i,r):(r.mode==="cue"||r.mode==="ghost")&&(r.mode="off")}n=!1}n||(i.active=!1,i.events.push({type:"shotEnd",t:i.t}))}}function Tr(i){return Math.sqrt(i.vx*i.vx+i.vz*i.vz)}function Ar(i,t,e){const n=1-.5*t*t,s=i.vx*n-i.vz*t,r=i.vx*t+i.vz*n,o=e/Math.sqrt(s*s+r*r);i.vx=s*o,i.vz=r*o}function Qd(i,t){const e=Tr(i);if(i.spin!==0&&e>0){const n=1-i.travel/kt.CURVE_LEN;n>0&&Ar(i,kt.CURVE_K*i.spin*n*e*t,e)}i.travel+=e*t}function Mh(i,t){const e=kt.EIGHT_CURVE_LEN;if(t<0){const o=e+(kt.EIGHT_EARLY_LEN-e)*-t;return i<o?kt.EIGHT_CURVE_K*e/o*(1-i/o):0}const n=i<e?kt.EIGHT_CURVE_K*(1-i/e):0;if(t===0)return n;const s=i-kt.EIGHT_HOOK_START,r=s>0&&s<kt.EIGHT_HOOK_LEN?kt.EIGHT_CURVE_K*e*s/(kt.EIGHT_HOOK_LEN*kt.EIGHT_HOOK_LEN):0;return n*(1-t)+r*t}function tp(i,t){const e=Tr(i),n=kt.GHOST_DECEL*t;if(e<=n)i.vx=0,i.vz=0;else{const s=(e-n)/e;i.vx*=s,i.vz*=s}}function ep(i,t,e,n=Mc){const s=kt.GRAD_EPS,r=i.heightAt;return n.x=(r(t+s,e)-r(t-s,e))/(2*s),n.z=(r(t,e+s)-r(t,e-s))/(2*s),n}function np(i,t,e){const n=Zl[i.surfaceAt(t.x,t.z)]||Zl.fairway;ep(i,t.x,t.z);let s=-kt.SLOPE_K*Mc.x,r=-kt.SLOPE_K*Mc.z;const o=i.hole.x-t.x,a=i.hole.z-t.z,c=o*o+a*a,l=kt.HOLE_R+kt.LIP_W;if(c<l*l&&c>=kt.HOLE_R*kt.HOLE_R){const h=Math.sqrt(c);s+=kt.LIP_A*o/h,r+=kt.LIP_A*a/h}if(t.spin!==0){const h=Tr(t),g=1-t.curveS/kt.EIGHT_CURVE_LEN;if(t.top===0)g>0&&h>0?Ar(t,kt.EIGHT_CURVE_K*t.spin*g*h*e,h):g<=0&&(t.spin=0);else if(g<=0)t.spin=0;else if(h>0){const v=Mh(t.curveS,t.top);v>0&&Ar(t,v*t.spin*h*e,h)}t.curveS+=h*e}t.vx+=s*e,t.vz+=r*e;const u=Tr(t),f=n.decel*e,d=s*s+r*r;if(u>f){const h=(u-f)/u;t.vx*=h,t.vz*=h}else if(d<=n.decel*n.decel)t.vx=0,t.vz=0;else{const h=Math.sqrt(d),g=(h-n.decel)*e/h;t.vx=s*g,t.vz=r*g}t.decel=n.decel,t.slopeA2=d}function Ro(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=a*e+c*n;if(l>=0)return Oi;const u=a*a+c*c-o*o;if(u<=0)return 0;const f=e*e+n*n,d=l*l-f*u;return d<0?Oi:u/(-l+Math.sqrt(d))}function ip(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=e*e+n*n;if(l===0)return Oi;const u=a*e+c*n,f=a*a+c*c-o*o;if(f>=0)return u>0?0:Oi;const d=Math.sqrt(u*u-l*f);return u>0?-f/(u+d):(-u+d)/l}const tu=1e-9;function Gr(i,t,e,n,s){return i.maxx<t||i.minx>e||i.maxz<n||i.minz>s}function yh(i,t,e,n,s,r,o,a){let c=o,l=qn;const u=(n<0?-n:n)*o+r+tu,f=(s<0?-s:s)*o+r+tu,d=t-u,h=t+u,g=e-f,v=e+f,m=i.segs;for(let M=0;M<m.length;M++){const S=m[M];if(Gr(S,d,h,g,v))continue;let E=S.nx,C=S.nz,w=(t-S.ax)*E+(e-S.az)*C;w<0&&(E=-E,C=-C,w=-w);const b=n*E+s*C;if(b>=0)continue;let y=(w-r)/-b;if(y<0&&(y=0),y>c||y===c&&l!==qn)continue;const R=t+n*y,N=e+s*y,O=((R-S.ax)*S.ex+(N-S.az)*S.ez)/S.len2;O<0||O>1||(c=y,l=xl,a.nx=E,a.nz=C,a.e=S.e,a.keep=S.keep,a.ck=S.kind)}const p=i.caps;for(let M=0;M<p.length;M++){const S=p[M];if(Gr(S,d,h,g,v))continue;const E=Ro(t,e,n,s,S.x,S.z,r);(E<c||E===c&&l===qn)&&(c=E,l=fa,a.cx=S.x,a.cz=S.z,a.sign=1,a.e=S.e,a.keep=S.keep,a.ck=S.kind)}const x=i.posts;for(let M=0;M<x.length;M++){const S=x[M];if(Gr(S,d,h,g,v))continue;const E=Ro(t,e,n,s,S.x,S.z,S.r+r);(E<c||E===c&&l===qn)&&(c=E,l=fa,a.cx=S.x,a.cz=S.z,a.sign=1,a.e=S.e,a.keep=S.keep,a.ck=S.kind)}const _=i.arcs;for(let M=0;M<_.length;M++){const S=_[M];if(Gr(S,d,h,g,v))continue;const E=t-S.x,C=e-S.z,w=E*E+C*C>S.r*S.r,b=w?Ro(t,e,n,s,S.x,S.z,S.r+r):ip(t,e,n,s,S.x,S.z,S.r-r);if(!(b<c||b===c&&l===qn))continue;const y=t+n*b-S.x,R=e+s*b-S.z;S.sx*R-S.sz*y<0||y*S.ez-R*S.ex<0||(c=b,l=fa,a.cx=S.x,a.cz=S.z,a.sign=w?1:-1,a.e=S.e,a.keep=S.keep,a.ck=S.kind)}return a.t=c,a.kind=l,l===qn?Oi:c}function eu(i){return i==="cue"||i==="roll"||i==="rest"}function ha(i){return i==="cue"||i==="roll"}const Xn={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function sp(i,t){const e=i.balls;Re.kind=qn,Re.t=t;for(let n=0;n<e.length;n++){const s=e[n];if(!eu(s.mode))continue;for(let o=n+1;o<e.length;o++){const a=e[o];if(!eu(a.mode)||!ha(s.mode)&&!ha(a.mode))continue;const c=Ro(s.x,s.z,s.vx-a.vx,s.vz-a.vz,a.x,a.z,2*kt.R);(c<Re.t||c===Re.t&&Re.kind===qn)&&(Re.t=c,Re.kind=vh,Re.i=n,Re.j=o)}if(!ha(s.mode))continue;const r=yh(i,s.x,s.z,s.vx,s.vz,kt.R,Re.t,Xn);(r<Re.t||r===Re.t&&Re.kind===qn&&r!==Oi)&&(Re.t=r,Re.kind=Xn.kind,Re.i=n,Re.nx=Xn.nx,Re.nz=Xn.nz,Re.cx=Xn.cx,Re.cz=Xn.cz,Re.sign=Xn.sign,Re.e=Xn.e,Re.keep=Xn.keep,Re.ck=Xn.ck)}return Re}function nu(i,t){if(t===0)return;const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];(s.mode==="cue"||s.mode==="roll"||s.mode==="ghost")&&(s.x+=s.vx*t,s.z+=s.vz*t)}}function rp(i,t){let e=t;for(let n=0;n<kt.MAX_EVENTS;n++){const s=sp(i,e);if(s.kind===qn){nu(i,e);return}if(nu(i,s.t),op(i,s),e-=s.t,e<=0)return}}function op(i,t){const e=i.balls;if(t.kind===vh){const l=e[t.i],u=e[t.j];let f=u.x-l.x,d=u.z-l.z;const h=Math.sqrt(f*f+d*d);f/=h,d/=h;const g=l.vx-u.vx,v=l.vz-u.vz,m=g*f+v*d;if(m<=0)return;const p=(1+kt.E_BALL)/2*m;l.vx-=p*f,l.vz-=p*d,u.vx+=p*f,u.vz+=p*d;const x=l.mode==="cue"?t.i:u.mode==="cue"?t.j:-1;if(l.mode==="rest"&&(l.mode="roll"),u.mode==="rest"&&(u.mode="roll"),x>=0){const _=e[x],M=e[x===t.i?t.j:t.i],S=x===t.i?1:-1;i.events.push({type:"contact",t:i.t,gx:_.x,gz:_.z,nx:f*S,nz:d*S,v8x:M.vx,v8z:M.vz,cutCos:m/Math.sqrt(g*g+v*v),spin:_.spin,top:_.top}),M.spin=_.spin,M.top=_.top,M.curveS=0,M.slowT=0,_.mode="ghost",_.spin=0,_.top=0,_.fadeT=kt.CUE_FADE_T}else i.events.push({type:"ballHit",t:i.t,speed:m});return}const n=e[t.i];let s,r;if(t.kind===xl)s=t.nx,r=t.nz;else{s=(n.x-t.cx)*t.sign,r=(n.z-t.cz)*t.sign;const l=Math.sqrt(s*s+r*r);s/=l,r/=l}const o=n.vx*s+n.vz*r;if(o>=0)return;const a=n.vx-o*s,c=n.vz-o*r;n.vx=a*t.keep-t.e*o*s,n.vz=c*t.keep-t.e*o*r,n.spin=0,n.top=0,i.events.push({type:"wall",t:i.t,id:n.id,x:n.x,z:n.z,nx:s,nz:r,speed:-o,kind:t.ck})}function yc(i,t){t.vx=0,t.vz=0,t.mode="rest",t.slowT=0,t.spin=0,t.top=0,i.events.push({type:"rest",t:i.t,id:t.id,x:t.x,z:t.z})}function ap(i,t,e){if(t.mode==="ghost"){t.fadeT-=e,t.fadeT<=0&&(t.mode="off");return}if(t.mode!=="cue"&&t.mode!=="roll")return;const n=i.hazardAt(t.x,t.z);if(n){t.mode==="cue"?(t.mode="off",i.events.push({type:"whiff",t:i.t,reason:n,x:t.x,z:t.z})):(t.mode="sunk",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:n,t:i.t,id:t.id,x:t.x,z:t.z,dropX:i.lieX,dropZ:i.lieZ}));return}if(t.mode==="cue"){t.travel>kt.CUE_MAX_TRAVEL&&(t.mode="ghost",t.fadeT=kt.CUE_FADE_T,i.events.push({type:"whiff",t:i.t,reason:"miss",x:t.x,z:t.z}));return}const s=t.x-i.hole.x,r=t.z-i.hole.z,o=s*s+r*r,a=Tr(t);if(o<kt.HOLE_R*kt.HOLE_R){let c=a<kt.HOLE_SETTLE_V;if(!c&&!t.overHole&&(c=a<=kt.HOLE_VCAP,c||(t.vx*=kt.HOP_KEEP,t.vz*=kt.HOP_KEEP,i.events.push({type:"hop",t:i.t,id:t.id,x:t.x,z:t.z,speed:a,vcap:kt.HOLE_VCAP}))),t.overHole=!0,c){t.mode="holed",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:"holed",t:i.t,id:t.id,speed:a});return}}else t.overHole=!1;if(a===0||a<kt.V_SLEEP&&t.slopeA2<t.decel*t.decel){yc(i,t);return}a<kt.SLOW_V?(t.slowT+=e,t.slowT>kt.SLOW_MAX_T&&yc(i,t)):t.slowT=0}function da(i,t,e){const n=i.balls[1],s=t-n.x,r=e-n.z,o=s*s+r*r,a=2*kt.R+kt.PLACE_GAP;return o>i.placeR*i.placeR||o<a*a?!1:lp(i,t,e)&&!cp(i,n.x,n.z,t,e)}function cp(i,t,e,n,s){const r=n-t,o=s-e;for(const c of i.segs){const l=r*c.ez-o*c.ex;if(l===0)continue;const u=c.ax-t,f=c.az-e,d=(u*c.ez-f*c.ex)/l,h=(u*o-f*r)/l;if(d>0&&d<1&&h>=0&&h<=1)return!0}const a=r*r+o*o;for(const c of i.arcs){const l=t-c.x,u=e-c.z,f=l*r+u*o,d=l*l+u*u-c.r*c.r,h=f*f-a*d;if(h<0||a===0)continue;const g=Math.sqrt(h);for(const v of[(-f-g)/a,(-f+g)/a]){if(!(v>0&&v<1))continue;const m=l+r*v,p=u+o*v;if(c.sx*p-c.sz*m>=0&&m*c.ez-p*c.ex>=0)return!0}}return!1}function lp(i,t,e){const n=kt.R;if(i.hazardAt(t,e))return!1;for(const s of i.segs){let r=((t-s.ax)*s.ex+(e-s.az)*s.ez)/s.len2;r=r<0?0:r>1?1:r;const o=s.ax+s.ex*r-t,a=s.az+s.ez*r-e;if(o*o+a*a<n*n)return!1}for(const s of i.posts){const r=s.x-t,o=s.z-e,a=s.r+n;if(r*r+o*o<a*a)return!1}for(const s of i.arcs){const r=t-s.x,o=e-s.z,a=Math.sqrt(r*r+o*o);if(s.sx*o-s.sz*r>=0&&r*s.ez-o*s.ex>=0&&a>s.r-n&&a<s.r+n)return!1}for(const s of i.caps){const r=s.x-t,o=s.z-e;if(r*r+o*o<n*n)return!1}return!0}function Vr(i,t,e,n){return i.filter(s=>{const r=t<s.minx?s.minx:t>s.maxx?s.maxx:t,o=e<s.minz?s.minz:e>s.maxz?s.maxz:e,a=r-t,c=o-e;return a*a+c*c<=n*n})}function up(i,t,e){const n=kt.CUE_MAX_TRAVEL+2*kt.R+.5;return{t:i.t,shotT:i.shotT,active:!1,balls:i.balls.map(s=>({...s})),segs:Vr(i.segs,t,e,n),caps:Vr(i.caps,t,e,n),posts:Vr(i.posts,t,e,n),arcs:Vr(i.arcs,t,e,n),hole:i.hole,placeR:i.placeR,lieX:i.lieX,lieZ:i.lieZ,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function iu(i,t,e,n,s=3){const r=up(i,t.x,t.z);xh(r,t,e,n);const o=r.balls[0],a=r.balls[1],c=[t.x,t.z],l=Math.ceil((kt.CUE_MAX_TRAVEL+1)/(mh(n)*kt.DT))+4;for(let u=1;u<=l;u++){_h(r);for(let f=0;f<r.events.length;f++){const d=r.events[f];if(d.type==="wall"&&d.id===0)c.push(d.x,d.z);else if(d.type==="contact"){c.push(d.gx,d.gz);const h=Math.sqrt(d.v8x*d.v8x+d.v8z*d.v8z);return{hit:!0,points:c,ghost:{x:d.gx,z:d.gz},normal:{x:d.nx,z:d.nz},eightDir:{x:d.v8x/h,z:d.v8z/h},eightSpeed:h,cutCos:d.cutCos,spin:d.spin,top:d.top,eightStart:{x:a.x,z:a.z},reason:null}}else if(d.type==="whiff")return c.push(d.x,d.z),{hit:!1,points:c,reason:d.reason}}r.events.length=0,u%s===0&&c.push(o.x,o.z)}return{hit:!1,points:c,reason:"miss"}}const Cn={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function fp(i,t,e,n,s,r,o=14,a=3){const l=[t,e];let u=Math.sqrt(n*n+s*s);n/=u,s/=u;let f=0,d=null,h=null,g=!1,v=o;const m=gh(r);let p=m.side;const x=m.top,_={vx:n,vz:s};for(let M=0;M<400&&f<v;M++){const S=v-f<.25?v-f:.25;if(p!==0)if(x===0){const y=1-f/kt.EIGHT_CURVE_LEN;y>0&&Ar(_,kt.EIGHT_CURVE_K*p*y*S,1)}else{const y=Mh(f,x);y>0&&Ar(_,y*p*S,1)}const E=yh(i,t,e,_.vx,_.vz,kt.R,S,Cn);if(E!==Oi&&!d){t+=_.vx*E,e+=_.vz*E,f+=E,l.push(t,e);let y,R;Cn.kind===xl?(y=Cn.nx,R=Cn.nz):(y=(t-Cn.cx)*Cn.sign,R=(e-Cn.cz)*Cn.sign,u=Math.sqrt(y*y+R*R),y/=u,R/=u);const N=_.vx*y+_.vz*R,O=(_.vx-N*y)*Cn.keep-Cn.e*N*y,Y=(_.vz-N*R)*Cn.keep-Cn.e*N*R;u=Math.sqrt(O*O+Y*Y),_.vx=O/u,_.vz=Y/u,d={x:t,z:e},p=0,v=f+a;continue}if(E!==Oi){t+=_.vx*E,e+=_.vz*E,l.push(t,e);break}t+=_.vx*S,e+=_.vz*S,f+=S,l.push(t,e);const C=i.hazardAt(t,e);if(C){h=C;break}const w=t-i.hole.x,b=e-i.hole.z;w*w+b*b<kt.HOLE_R*kt.HOLE_R&&(g=!0)}return{points:l,hazard:h,bounce:d,cup:g}}function hp(i,t,e,n=240){e.acc+=t>.25?.25:t;let s=0;for(;e.acc>=kt.DT&&s<n;)_h(i),e.acc-=kt.DT,s++;return s>=n&&(e.acc=0),e.acc/kt.DT}function dp(i,t,e,n,s=0,r=0){return(o,a)=>{let c=(o-s)/n,l=(a-r)/n;c=c<0?0:c>t-1.000001?t-1.000001:c,l=l<0?0:l>e-1.000001?e-1.000001:l;const u=c|0,f=l|0,d=c-u,h=l-f,g=f*t+u,v=i[g]+(i[g+1]-i[g])*d,m=i[g+t]+(i[g+t+1]-i[g+t])*d;return v+(m-v)*h}}const Si=.25,Wr=4,pp=Object.freeze({oob:0,fairway:1,green:2,rough:3,sand:4,water:5,ice:6}),mp=Object.freeze(["oob","fairway","green","rough","sand","water","ice"]),sr=i=>({x:i[0],z:-i[1]});function Sc(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[s][0],a=i[s][1],c=i[r][0],l=i[r][1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function gp(i,t,e){let n=1/0;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[r][0],a=i[r][1],c=i[s][0]-o,l=i[s][1]-a,u=c*c+l*l||1e-12;let f=((t-o)*c+(e-a)*l)/u;f=f<0?0:f>1?1:f;const d=o+c*f-t,h=a+l*f-e,g=Math.sqrt(d*d+h*h);g<n&&(n=g)}return n}const Sh=i=>[[i[0],i[1]],[i[2],i[1]],[i[2],i[3]],[i[0],i[3]]];function bc(i){if(i.poly)return i.poly;if(i.rect)return Sh(i.rect);const t=i.circle?{c:i.circle.c,rx:i.circle.r,ry:i.circle.r,rot:0}:i.ellipse;if(!t)throw new Error("zone without a shape");const e=48,n=Math.cos((t.rot||0)*Math.PI/180),s=Math.sin((t.rot||0)*Math.PI/180),r=[];for(let o=0;o<e;o++){const a=o/e*Math.PI*2,c=Math.cos(a)*t.rx,l=Math.sin(a)*t.ry;r.push([t.c[0]+c*n-l*s,t.c[1]+c*s+l*n])}return r}const pa=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function xp(i){const t=i.steps||[],e=i.hills||[],n=(i.plateaus||[]).map(r=>({pts:bc(r),h:r.h,ramp:r.ramp??2,linear:!!r.linear})),s=i.tilt||[0,0];return(r,o)=>{let a=s[0]*r+s[1]*o;for(const c of t){const l=c.axis==="y"?o:r;if(c.band){const f=c.axis==="y"?r:o;if(f<c.band[0]||f>c.band[1])continue}const u=(l-c.from)/(c.to-c.from);a+=c.h*(c.smooth?pa(u):u<=0?0:u>=1?1:u)}for(const c of e){const l=r-c.c[0],u=o-c.c[1],f=Math.sqrt(l*l+u*u),d=c.flat||0;f<c.r&&(a+=c.h*pa(1-(f-d)/(c.r-d)))}for(const c of n)if(Sc(c.pts,r,o))a+=c.h;else{const l=gp(c.pts,r,o);l<c.ramp&&(a+=c.h*(c.linear?1-l/c.ramp:pa(1-l/c.ramp)))}return a}}function bh(i){const[t,e]=i.size,n=i.ground||Sh([0,0,t,e]),s=i.border===void 0?"wall":i.border,r=[];s&&r.push({kind:s,pts:n,closed:!0,border:!0});for(const w of i.walls||[])r.push({kind:w.kind||"wall",pts:w.pts,closed:!!w.closed,h:w.h});const o=[],a=[];for(const w of i.arcs||[]){let b=w.from;const y=w.to;if(!(y>b))throw new Error(i.id+": arc needs to > from");for(a.push({kind:w.kind||"wall",c:w.c,r:w.r,from:b,to:y});b<y-1e-9;){const R=Math.min(y,b+180),N=R*Math.PI/180,O=b*Math.PI/180;o.push({kind:w.kind||"wall",x:w.c[0],z:-w.c[1],r:w.r,sx:Math.cos(N),sz:-Math.sin(N),ex:Math.cos(O),ez:-Math.sin(O)}),b=R}}const c=[];for(const w of r){const b=w.pts.length,y=w.closed?b:b-1;for(let R=0;R<y;R++){const N=w.pts[R],O=w.pts[(R+1)%b];c.push({ax:N[0],az:-N[1],bx:O[0],bz:-O[1],kind:w.kind})}}const l=(i.posts||[]).map(w=>({x:w.at[0],z:-w.at[1],r:w.r,kind:w.kind||"post"})),u=-Wr,f=-(e+Wr),d=Math.round((t+2*Wr)/Si)+1,h=Math.round((e+2*Wr)/Si)+1,g=xp(i),v=new Float64Array(d*h),m=new Uint8Array(d*h),p=(i.zones||[]).map(w=>{const b=pp[w.surface];if(b===void 0||b===0)throw new Error(i.id+": unknown surface "+w.surface);return{code:b,pts:bc(w)}});for(let w=0;w<h;w++){const y=-(f+w*Si);for(let R=0;R<d;R++){const N=u+R*Si,O=w*d+R;v[O]=g(N,y);let Y=Sc(n,N,y)?1:0;if(Y)for(const ut of p)Sc(ut.pts,N,y)&&(Y=ut.code);m[O]=Y}}const x=dp(v,d,h,Si,u,f),_=(w,b)=>{let y=Math.round((w-u)/Si),R=Math.round((b-f)/Si);return y=y<0?0:y>=d?d-1:y,R=R<0?0:R>=h?h-1:R,m[R*d+y]},M=(w,b)=>mp[_(w,b)],S=(w,b)=>{const y=_(w,b);return y===0?"oob":y===5?"water":null},E=sr(i.tee),C=sr(i.cup);return{hole:i,id:i.id,name:i.name,par:i.par,round:i.round,spin:i.round===2,tip:i.tip||null,placeR:i.circle,eight:E,tee:E,cup:C,segments:c,posts:l,arcs:o,surfaceAt:M,heightAt:x,hazardAt:S,grid:{cell:Si,cols:d,rows:h,x0:u,z0:f,height:v,surface:m},bounds:{minx:0,maxx:t,minz:-e,maxz:0},ground:n.map(sr),walls:r.map(w=>({kind:w.kind,closed:w.closed,border:!!w.border,h:w.h,pts:w.pts.map(sr)})),arcsRender:a.map(w=>({kind:w.kind,x:w.c[0],z:-w.c[1],r:w.r,from:w.from,to:w.to})),props:(i.props||[]).map(w=>({...w,x:w.at[0],z:-w.at[1]})),zones:(i.zones||[]).map(w=>({surface:w.surface,pts:bc(w).map(sr)})),camera:i.camera||null}}function vp(i){return Jd({eight:i.eight,hole:i.cup,placeR:i.placeR,segments:i.segments,posts:i.posts,arcs:i.arcs,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt})}const _p=4,Mp=5;function yp(i){return{par:i,strokes:0,penalties:0,done:!1,holed:!1,picked:!1}}function Sp(i,t){if(i.done)return{penalty:0,done:!0,picked:i.picked};i.strokes+=1;let e=0;return t.holed?(i.done=!0,i.holed=!0,{penalty:e,done:!0,picked:!1}):(t.hazard&&(e=1,i.penalties+=1,i.strokes+=1),i.strokes>=i.par+_p&&(i.done=!0,i.picked=!0),{penalty:e,done:i.done,picked:i.picked})}function bp(i){return i.picked?i.par+Mp:i.strokes}function wp(i,t,e=!1){return e?0:i===1||i<=t-1?3:i<=t?2:1}function wc(i,t,e=!1){if(e)return{key:"picked",label:"Picked up"};if(i===1)return{key:"ace",label:"Hole-in-one!"};const n=i-t;return n<=-3?{key:"albatross",label:"Albatross!"}:n===-2?{key:"eagle",label:"Eagle!"}:n===-1?{key:"birdie",label:"Birdie!"}:n===0?{key:"par",label:"Par"}:n===1?{key:"bogey",label:"Bogey"}:n===2?{key:"double",label:"Double bogey"}:{key:"over",label:"+"+n}}function Ec(i,t){const e=i-t;return e===0?"E":e>0?"+"+e:String(e)}const Ep=.9,Tp=1.2,Ap=14,su=1.8,Cp=3;function Rp({events:i}){const t=(x,_)=>i&&i.emit(x,_),e={acc:0},n={state:"idle",level:null,index:-1,world:null,score:null,intent:{x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},lastPower:.5,speed:1,shotContact:!1,shotHazard:null,shotHoled:!1,dropAt:null,timer:0,_guideKey:"",_guide:null},s=[r(),r()];function r(){return{x:0,y:0,z:0,visible:!1,alpha:1,mode:"off",vx:0,vz:0}}function o(){const x=n.intent,_=n.world.balls[1];let M=_.x-x.x,S=_.z-x.z;const E=Math.sqrt(M*M+S*S)||1;M/=E,S/=E;const C=Math.cos(x.offset),w=Math.sin(x.offset),b=M*C-S*w,y=M*w+S*C,R=u(x,b,y);n.intent={...x,ax:b,az:y,dx:R.x,dz:R.z},n._guideKey=""}const a=x=>x.power<kt.POWER_MIN?kt.POWER_MIN:x.power,c=x=>({x:x.spin,y:x.top}),l=(x,_,M)=>{const S=Math.cos(M),E=Math.sin(M);return{x:x*S-_*E,z:x*E+_*S}};function u(x,_,M){if(!x.spin)return{x:_,z:M};const S=n.world.balls[1],E=S.x-x.x,C=S.z-x.z,w=E*_+C*M,b=_*C-M*E,y=2*kt.R,R=w>0&&b*b<y*y,N=R?w-Math.sqrt(y*y-b*b):w>0?w:0,O=N>1e-6?-f(x.spin,N):0;if(!R)return l(_,M,O);const Y=x.x+_*N,ut=x.z+M*N,ot=(S.x-Y)/y,xt=(S.z-ut)/y,J=a(x),X=c(x),D=H=>{const Q=l(_,M,H),lt=iu(n.world,{x:x.x,z:x.z,dx:Q.x,dz:Q.z},X,J,1e9);return lt.hit?ot*lt.normal.z-xt*lt.normal.x:null};let $=O,q=D($);if(q===null)return l(_,M,O);let at=$,V=Math.abs(q),j=$+.02,mt=D(j);for(let H=0;H<10&&mt!==null&&(Math.abs(mt)<V&&(at=j,V=Math.abs(mt)),!(V<1e-7||mt===q));H++){let Q=-mt*(j-$)/(mt-q);Q=Q>.3?.3:Q<-.3?-.3:Q,$=j,q=mt,j+=Q,mt=D(j)}return l(_,M,at)}function f(x,_){const M=kt.CURVE_K*x,S=kt.CURVE_LEN,E=.02;let C=0,w=0,b=0;for(let y=0;y<2e3&&C*C+w*w<_*_;y++){const R=b<S?M*(b-b*b/(2*S)):M*S/2;C+=Math.cos(R)*E,w+=Math.sin(R)*E,b+=E}return Math.atan2(w,C)}function d(){const x=n.world,_=x.balls[1];let M=x.hole.x-_.x,S=x.hole.z-_.z;const E=Math.sqrt(M*M+S*S)||1;M/=E,S/=E;const C=Math.min(.6*x.placeR,2.5),w=h(_.x-M*C,_.z-S*C)||h(_.x-M*1.6,_.z-S*1.6)||{x:_.x-M*1.2,z:_.z-S*1.2};n.intent={...n.intent,x:w.x,z:w.z,offset:0,spin:0,top:0,power:n.lastPower},o()}function h(x,_){const M=n.world;if(da(M,x,_))return{x,z:_};const S=M.balls[1];let E=x-S.x,C=_-S.z,w=Math.sqrt(E*E+C*C);const b=2*kt.R+kt.PLACE_GAP+.01,y=M.placeR-.01;if(w>y&&(E*=y/w,C*=y/w,w=y),w<b){const Y=w>1e-6?b/w:0;E=w>1e-6?E*Y:-b,C=w>1e-6?C*Y:0,w=b}if(da(M,S.x+E,S.z+C))return{x:S.x+E,z:S.z+C};const R=Math.atan2(C,E);let N=null,O=1/0;for(let Y=b;Y<=y+1e-9;Y+=.25)for(let ut=0;ut<72;ut++){const ot=R+ut*Math.PI/36,xt=S.x+Math.cos(ot)*Y,J=S.z+Math.sin(ot)*Y;if(!da(M,xt,J))continue;const X=(xt-x)*(xt-x)+(J-_)*(J-_);X<O&&(O=X,N={x:xt,z:J})}return N}n.load=(x,_)=>{n.level=x,n.index=_,n.world=vp(x),n.score=yp(x.par),n.lastPower=.5,n.speed=1,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,n.timer=0,e.acc=0,n.intent={x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},d(),n.state="ready",t("hole:start",{level:x,index:_}),t("shot:ready",{strokes:0,par:x.par,first:!0})},n.retry=()=>n.load(n.level,n.index),n.setPlacement=(x,_)=>{if(n.state!=="ready")return!1;const M=h(x,_);return M?(n.intent={...n.intent,x:M.x,z:M.z},o(),!0):!1},n.setAimToward=(x,_)=>{if(n.state!=="ready")return;const M=n.intent,S=n.world.balls[1],E=S.x-M.x,C=S.z-M.z,w=x-M.x,b=_-M.z;w*w+b*b<1e-6||(n.intent={...M,offset:Math.atan2(E*b-C*w,E*w+C*b)},o())},n.rotateAim=x=>{if(n.state!=="ready")return;let _=n.intent.offset+x;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;n.intent={...n.intent,offset:_},o()},n.setSpin=(x,_)=>{const M=n.intent,S=!!(n.level&&n.level.spin),E=_===void 0?M.top:_;let C=S&&x===x?x<-1?-1:x>1?1:x:0,w=S&&E===E?E<-1?-1:E>1?1:E:0;const b=C*C+w*w;if(b>1){const y=1/Math.sqrt(b);C*=y,w*=y}C===M.spin&&w===M.top||(n.intent={...M,spin:C,top:w},n.world&&o())},n.setPower=x=>{const _=x<0?0:x>1?1:x;_!==n.intent.power&&(n.intent={...n.intent,power:_},n.intent.spin&&n.world?o():n._guideKey="")},n.guide=()=>{if(!n.world||n.state!=="ready")return null;const x=n.intent,_=a(x),M=x.x+","+x.z+","+x.dx+","+x.dz+","+x.spin+","+x.top+","+_;if(M===n._guideKey)return n._guide;const S=iu(n.world,x,c(x),_);let E=null;return S.hit&&(E=fp(n.world,S.eightStart.x,S.eightStart.z,S.eightDir.x,S.eightDir.z,{x:S.spin,y:S.top},Ap,Cp)),n._guide={cue:S,eight:E,warn:!S.hit||!!(E&&E.hazard)},n._guideKey=M,n._guide},n.fire=()=>{if(n.state!=="ready")return!1;const x=n.intent,_=a(x);return n.lastPower=_,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,e.acc=0,xh(n.world,x,c(x),_),n.state="rolling",t("shot:fire",{power:_,spin:x.spin,top:x.top,strokes:n.score.strokes+1}),!0},n.setSpeed=x=>{n.speed=x>1?x:1};function g(){const x=n.world.events;for(let _=0;_<x.length;_++){const M=x[_];switch(M.type){case"contact":n.shotContact=!0,t("ball:contact",{x:M.gx,z:M.gz,nx:M.nx,nz:M.nz,speed:Math.sqrt(M.v8x*M.v8x+M.v8z*M.v8z),cutCos:M.cutCos,spin:M.spin,top:M.top});break;case"wall":t("ball:wall",{id:M.id,x:M.x,z:M.z,nx:M.nx,nz:M.nz,speed:M.speed,kind:M.kind});break;case"hop":t("ball:hop",{x:M.x,z:M.z,speed:M.speed});break;case"holed":n.shotHoled=!0,t("ball:holed",{speed:M.speed});break;case"water":case"oob":n.shotHazard=M.type,n.dropAt={x:M.dropX,z:M.dropZ},t("ball:hazard",{kind:M.type,x:M.x,z:M.z});break;case"whiff":t("ball:whiff",{reason:M.reason,x:M.x,z:M.z});break;case"rest":t("ball:rest",{id:M.id,x:M.x,z:M.z});break;case"ballHit":t("ball:ballhit",{speed:M.speed});break;case"shotEnd":v();break}}x.length=0}function v(){const x=Sp(n.score,{holed:n.shotHoled,hazard:n.shotHazard});t("shot:end",{strokes:n.score.strokes,par:n.score.par,penalty:x.penalty,whiff:!n.shotContact,outcome:n.shotHoled?"holed":n.shotHazard||"rest",picked:x.picked}),n.state="resolving",n.timer=n.shotHoled?Tp:n.shotHazard?Ep:x.done?.6:0}function m(){const x=n.score;if(x.done){n.state="done";const _=bp(x);t("hole:done",{index:n.index,level:n.level,strokes:_,par:x.par,picked:x.picked,penalties:x.penalties,stars:wp(_,x.par,x.picked),term:wc(_,x.par,x.picked)});return}if(n.dropAt)Ql(n.world,n.dropAt.x,n.dropAt.z),t("ball:drop",{x:n.dropAt.x,z:n.dropAt.z}),n.dropAt=null;else{const _=n.world.balls[1];Ql(n.world,_.x,_.z)}n.world.balls[0].mode="off",d(),n.state="ready",t("shot:ready",{strokes:x.strokes,par:x.par,first:!1})}let p=0;return n.update=x=>{n.state==="rolling"?(p=hp(n.world,x*su*n.speed,e,Math.ceil(240*su*n.speed)),g()):n.state==="resolving"&&(n.timer-=x,n.timer<=0&&m())},n.balls=()=>{const x=n.world;if(!x)return s;const _=n.state==="rolling";for(let M=0;M<2;M++){const S=x.balls[M],E=s[M],C=_?p:1;E.x=S.px+(S.x-S.px)*C,E.z=S.pz+(S.z-S.pz)*C,E.mode=S.mode,E.vx=S.vx,E.vz=S.vz,E.visible=S.mode!=="off"&&S.mode!=="sunk"&&S.mode!=="holed",E.alpha=S.mode==="ghost"?Math.max(0,S.fadeT/kt.CUE_FADE_T):1,E.y=x.heightAt(E.x,E.z)+kt.R}if(n.state==="ready"){const M=s[0];M.x=n.intent.x,M.z=n.intent.z,M.mode="placed",M.visible=!0,M.alpha=1,M.vx=0,M.vz=0,M.y=x.heightAt(M.x,M.z)+kt.R}if(s[1].mode==="holed"||n.shotHoled){const M=s[1];M.visible=!0,M.x=x.hole.x,M.z=x.hole.z,M.y=x.heightAt(M.x,M.z)-kt.R*.9}return s},n}const ru="eightballgolf.progress",Go=Object.freeze([{id:"classic",name:"Classic",need:0},{id:"tennis",name:"Tennis",need:9},{id:"beach",name:"Beach ball",need:18},{id:"planet",name:"Planet",need:27},{id:"donut",name:"Donut",need:36},{id:"snow",name:"Snowball",need:45},{id:"gold",name:"Gold",need:54}]),ma=(i,t,e)=>Number.isInteger(i)&&i>=t&&i<=e?i:null;function Pp(i,t){const e=i&&typeof i=="object"?i:{},n=Array.isArray(e.holes)?e.holes:[],s=[];for(let c=0;c<t;c++){const l=n[c]&&typeof n[c]=="object"?n[c]:{},u=ma(l.best,1,99);s.push({best:u,stars:u===null?0:ma(l.stars,0,3)??0})}const r=Array.isArray(e.seenTips)?[...new Set(e.seenTips.filter(c=>typeof c=="string"&&c.length<40))].slice(0,200):[],o=Go.some(c=>c.id===e.skin)?e.skin:"classic",a=ma(e.last,0,Math.max(0,t-1));return{v:1,holes:s,skin:o,seenTips:r,muted:e.muted===!0,last:a}}async function Lp(i,t={}){const e=t.rounds||zr,n=e.flatMap(h=>h.holes.map(g=>g.par)),s=n.length,r=new Map;let o=0;for(const h of e)r.set(h.id,o),o+=h.holes.length;let a=null;try{const h=i&&i.load?await i.load(ru):null;typeof h=="string"&&h.length&&(a=JSON.parse(h))}catch{a=null}const c=Pp(a,s);Ip(c.skin)>Xr(c)&&(c.skin="classic");function l(){if(!(!i||!i.save))try{const h=i.save(ru,JSON.stringify(c));h&&typeof h.catch=="function"&&h.catch(()=>{})}catch{}}const u=h=>Number.isInteger(h)&&h>=0&&h<s,f=()=>{let h=-1;for(let g=0;g<s;g++)c.holes[g].best!==null&&(h=g);return h},d={data:c,get skin(){return c.skin},get muted(){return c.muted},holeCount:s,isUnlocked(h){return u(h)&&h<=f()+1},best(h){return u(h)?c.holes[h].best:null},stars(h){return u(h)?c.holes[h].stars:0},totalStars(){return Xr(c)},roundStars(h){const g=r.get(h),v=e.find(p=>p.id===h);if(g===void 0||!v)return 0;let m=0;for(let p=0;p<v.holes.length;p++)m+=c.holes[g+p].stars;return m},roundTotal(h){const g=r.get(h),v=e.find(_=>_.id===h);if(g===void 0||!v)return{total:0,par:0,complete:!1};let m=0,p=0,x=!0;for(let _=0;_<v.holes.length;_++){p+=n[g+_];const M=c.holes[g+_].best;M===null?x=!1:m+=M}return{total:m,par:p,complete:x}},record(h,g,v){if(!u(h))return{newBest:!1,newStars:!1,firstTime:!1};const m=c.holes[h],p=Math.max(1,Math.round(Number(g)||1)),x=Math.max(0,Math.min(3,Math.round(Number(v)||0))),_=m.best===null,M=m.best===null||p<m.best,S=x>m.stars;return M&&(m.best=p),S&&(m.stars=x),c.last=h,l(),{newBest:M,newStars:S,firstTime:_}},nextIndex(){for(let h=0;h<s;h++)if(c.holes[h].best===null)return d.isUnlocked(h)?h:0;for(let h=0;h<s;h++)if(c.holes[h].stars<3)return h;return c.last??0},skins(){const h=Xr(c);return Go.map(g=>({...g,unlocked:h>=g.need}))},setSkin(h){const g=Go.find(v=>v.id===h);return!g||g.need>Xr(c)||c.skin===h?!1:(c.skin=h,l(),!0)},seenTip(h){return c.seenTips.includes(String(h))},markTip(h){h==null||d.seenTip(h)||(c.seenTips.push(String(h)),l())},setMuted(h){c.muted!==!!h&&(c.muted=!!h,l())},isFresh(){return f()<0}};return d}function Xr(i){let t=0;for(const e of i.holes)t+=e.stars;return t}function Ip(i){const t=Go.find(e=>e.id===i);return t?t.need:1/0}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="170",Dp=0,ou=1,zp=2,_l=1,Up=2,ai=3,ki=0,mn=1,yn=2,Ui=0,Os=1,au=2,cu=3,lu=4,wh=5,zi=100,Np=101,Fp=102,Op=103,kp=104,Bp=200,Tc=201,Hp=202,Gp=203,Ac=204,Cr=205,Vp=206,Wp=207,Xp=208,qp=209,Yp=210,Kp=211,$p=212,jp=213,Zp=214,Cc=0,Rc=1,Pc=2,Ws=3,Lc=4,Ic=5,Dc=6,zc=7,Qo=0,Jp=1,Qp=2,Ni=0,t0=1,e0=2,n0=3,i0=4,s0=5,r0=6,Eh=7,Th=300,Xs=301,qs=302,Uc=303,Nc=304,ta=306,Vo=1e3,di=1001,Fc=1002,En=1003,o0=1004,qr=1005,wn=1006,ga=1007,rs=1008,Jn=1009,Ah=1010,Ch=1011,Rr=1012,Ml=1013,cs=1014,jn=1015,Ur=1016,yl=1017,Sl=1018,Ys=1020,Rh=35902,Ph=1021,Lh=1022,Dn=1023,Ih=1024,Dh=1025,ks=1026,Ks=1027,bl=1028,wl=1029,zh=1030,El=1031,Tl=1033,Po=33776,Lo=33777,Io=33778,Do=33779,Oc=35840,kc=35841,Bc=35842,Hc=35843,Gc=36196,Vc=37492,Wc=37496,Xc=37808,qc=37809,Yc=37810,Kc=37811,$c=37812,jc=37813,Zc=37814,Jc=37815,Qc=37816,tl=37817,el=37818,nl=37819,il=37820,sl=37821,zo=36492,rl=36494,ol=36495,Uh=36283,al=36284,cl=36285,ll=36286,a0=3200,c0=3201,ea=0,l0=1,fi="",Qe="srgb",Js="srgb-linear",na="linear",we="srgb",ps=7680,uu=519,u0=512,f0=513,h0=514,Nh=515,d0=516,p0=517,m0=518,g0=519,fu=35044,Fi=35048,hu="300 es",pi=2e3,Wo=2001;class Qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const yr=Math.PI/180,Pr=180/Math.PI;function tr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function Al(i,t){return(i%t+t)%t}function x0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function v0(i,t,e){return i!==t?(e-i)/(t-i):0}function Sr(i,t,e){return(1-e)*i+e*t}function _0(i,t,e,n){return Sr(i,t,1-Math.exp(-e*n))}function M0(i,t=1){return t-Math.abs(Al(i,t*2)-t)}function y0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function S0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function b0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function w0(i,t){return i+Math.random()*(t-i)}function E0(i){return i*(.5-Math.random())}function T0(i){i!==void 0&&(du=i);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function A0(i){return i*yr}function C0(i){return i*Pr}function R0(i){return(i&i-1)===0&&i!==0}function P0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function L0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function I0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),h=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lr={DEG2RAD:yr,RAD2DEG:Pr,generateUUID:tr,clamp:Ze,euclideanModulo:Al,mapLinear:x0,inverseLerp:v0,lerp:Sr,damp:_0,pingpong:M0,smoothstep:y0,smootherstep:S0,randInt:b0,randFloat:w0,randFloatSpread:E0,seededRandom:T0,degToRad:A0,radToDeg:C0,isPowerOfTwo:R0,ceilPowerOfTwo:P0,floorPowerOfTwo:L0,setQuaternionFromProperEuler:I0,normalize:un,denormalize:Ds};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,s,r,o,a,c,l){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],v=s[0],m=s[3],p=s[6],x=s[1],_=s[4],M=s[7],S=s[2],E=s[5],C=s[8];return r[0]=o*v+a*x+c*S,r[3]=o*m+a*_+c*E,r[6]=o*p+a*M+c*C,r[1]=l*v+u*x+f*S,r[4]=l*m+u*_+f*E,r[7]=l*p+u*M+f*C,r[2]=d*v+h*x+g*S,r[5]=d*m+h*_+g*E,r[8]=d*p+h*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,d=a*c-u*r,h=l*r-o*c,g=e*f+n*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*l-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=h*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xa.makeScale(t,e)),this}rotate(t){return this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xa=new fe;function Fh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function D0(){const i=Xo("canvas");return i.style.display="block",i}const pu={};function pr(i){i in pu||(pu[i]=!0,console.warn(i))}function z0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function U0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function N0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Me={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?na:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const mu=[.64,.33,.3,.6,.15,.06],gu=[.2126,.7152,.0722],xu=[.3127,.329],vu=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me.define({[Js]:{primaries:mu,whitePoint:xu,transfer:na,toXYZ:vu,fromXYZ:_u,luminanceCoefficients:gu,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:mu,whitePoint:xu,transfer:we,toXYZ:vu,fromXYZ:_u,luminanceCoefficients:gu,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let ms;class F0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=Xo("canvas")),ms.width=t.width,ms.height=t.height;const n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let O0=0;class Oh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?F0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k0=0;class ln extends Qs{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=di,s=di,r=wn,o=rs,a=Dn,c=Jn,l=ln.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=tr(),this.name="",this.source=new Oh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Th;ln.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,s=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,M=(h+1)/2,S=(p+1)/2,E=(u+d)/4,C=(f+v)/4,w=(g+m)/4;return _>M&&_>S?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=C/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=w/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=C/r,s=w/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-v)/x,this.z=(d-u)/x,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B0 extends Qs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Oh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends B0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kh extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class H0 extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const d=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=h,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==d||l!==h||u!==g){let m=1-a;const p=c*d+l*h+u*g+f*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const S=Math.sqrt(_),E=Math.atan2(S,p*x);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const M=a*x;if(c=c*m+d*M,l=l*m+h*M,u=u*m+g*M,f=f*m+v*M,m===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*h-l*d,t[e+1]=c*g+u*d+l*f-a*h,t[e+2]=l*g+u*h+a*d-c*f,t[e+3]=u*g-a*f-c*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),d=c(n/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,e=0,n=0){tt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new tt,Mu=new fs;class Gi{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Kr.subVectors(this.max,rr),gs.subVectors(t.a,rr),xs.subVectors(t.b,rr),vs.subVectors(t.c,rr),bi.subVectors(xs,gs),wi.subVectors(vs,xs),Wi.subVectors(gs,vs);let e=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-Wi.z,Wi.y,bi.z,0,-bi.x,wi.z,0,-wi.x,Wi.z,0,-Wi.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-Wi.y,Wi.x,0];return!Ma(e,gs,xs,vs,Kr)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,gs,xs,vs,Kr))?!1:($r.crossVectors(bi,wi),e=[$r.x,$r.y,$r.z],Ma(e,gs,xs,vs,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],zn=new tt,Yr=new Gi,gs=new tt,xs=new tt,vs=new tt,bi=new tt,wi=new tt,Wi=new tt,rr=new tt,Kr=new tt,$r=new tt,Xi=new tt;function Ma(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const G0=new Gi,or=new tt,ya=new tt;class Vi{constructor(t=new tt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):G0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(ya)),this.expandByPoint(or.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new tt,Sa=new tt,jr=new tt,Ei=new tt,ba=new tt,Zr=new tt,wa=new tt;class V0{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sa.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Sa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=Ei.dot(this.direction),c=-Ei.dot(jr),l=Ei.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*c-a,d=o*a-c,g=r*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),h=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),h=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Sa).addScaledVector(jr,d),h}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){ba.subVectors(e,t),Zr.subVectors(n,t),wa.crossVectors(ba,Zr);let o=this.direction.dot(wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const c=a*this.direction.dot(Zr.crossVectors(Ei,Zr));if(c<0)return null;const l=a*this.direction.dot(ba.cross(Ei));if(l<0||c+l>o)return null;const u=-a*Ei.dot(wa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,s,r,o,a,c,l,u,f,d,h,g,v,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,d,h,g,v,m)}set(t,e,n,s,r,o,a,c,l,u,f,d,h,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=h+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+h*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,h=c*f,g=l*u,v=l*f;e[0]=d+v*a,e[4]=g*a-h,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,h=c*f,g=l*u,v=l*f;e[0]=d-v*a,e[4]=-o*f,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;e[0]=c*u,e[4]=g*l-h,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=h*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,h=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-d*f,e[8]=g*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=o*c,h=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+v,e[5]=o*u,e[9]=h*f-g,e[2]=g*f-h,e[6]=a*u,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(W0,t,X0)}lookAt(t,e,n){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ti.crossVectors(n,xn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ti.crossVectors(n,xn)),Ti.normalize(),Jr.crossVectors(xn,Ti),s[0]=Ti.x,s[4]=Jr.x,s[8]=xn.x,s[1]=Ti.y,s[5]=Jr.y,s[9]=xn.y,s[2]=Ti.z,s[6]=Jr.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],_=n[7],M=n[11],S=n[15],E=s[0],C=s[4],w=s[8],b=s[12],y=s[1],R=s[5],N=s[9],O=s[13],Y=s[2],ut=s[6],ot=s[10],xt=s[14],J=s[3],X=s[7],D=s[11],$=s[15];return r[0]=o*E+a*y+c*Y+l*J,r[4]=o*C+a*R+c*ut+l*X,r[8]=o*w+a*N+c*ot+l*D,r[12]=o*b+a*O+c*xt+l*$,r[1]=u*E+f*y+d*Y+h*J,r[5]=u*C+f*R+d*ut+h*X,r[9]=u*w+f*N+d*ot+h*D,r[13]=u*b+f*O+d*xt+h*$,r[2]=g*E+v*y+m*Y+p*J,r[6]=g*C+v*R+m*ut+p*X,r[10]=g*w+v*N+m*ot+p*D,r[14]=g*b+v*O+m*xt+p*$,r[3]=x*E+_*y+M*Y+S*J,r[7]=x*C+_*R+M*ut+S*X,r[11]=x*w+_*N+M*ot+S*D,r[15]=x*b+_*O+M*xt+S*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],h=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*a*d+n*l*d+s*a*h-n*c*h)+v*(+e*c*h-e*l*d+r*o*d-s*o*h+s*l*u-r*c*u)+m*(+e*l*f-e*a*h-r*o*f+n*o*h+r*a*u-n*l*u)+p*(-s*a*u-e*c*f+e*a*d+s*o*f-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],h=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=f*m*l-v*d*l+v*c*h-a*m*h-f*c*p+a*d*p,_=g*d*l-u*m*l-g*c*h+o*m*h+u*c*p-o*d*p,M=u*v*l-g*f*l+g*a*h-o*v*h-u*a*p+o*f*p,S=g*f*c-u*v*c-g*a*d+o*v*d+u*a*m-o*f*m,E=e*x+n*_+s*M+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=x*C,t[1]=(v*d*r-f*m*r-v*s*h+n*m*h+f*s*p-n*d*p)*C,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(f*c*r-a*d*r-f*s*l+n*d*l+a*s*h-n*c*h)*C,t[4]=_*C,t[5]=(u*m*r-g*d*r+g*s*h-e*m*h-u*s*p+e*d*p)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*C,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*h+e*c*h)*C,t[8]=M*C,t[9]=(g*f*r-u*v*r-g*n*h+e*v*h+u*n*p-e*f*p)*C,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*C,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*h-e*a*h)*C,t[12]=S*C,t[13]=(u*v*s-g*f*s+g*n*d-e*v*d-u*n*m+e*f*m)*C,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*C,t[15]=(o*f*s-u*a*s+u*n*c-e*f*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,d=r*l,h=r*u,g=r*f,v=o*u,m=o*f,p=a*f,x=c*l,_=c*u,M=c*f,S=n.x,E=n.y,C=n.z;return s[0]=(1-(v+p))*S,s[1]=(h+M)*S,s[2]=(g-_)*S,s[3]=0,s[4]=(h-M)*E,s[5]=(1-(d+p))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(g+_)*C,s[9]=(m-x)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const l=1/r,u=1/o,f=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=pi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let h,g;if(a===pi)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wo)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pi){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(o-r),d=(e+t)*l,h=(n+s)*u;let g,v;if(a===pi)g=(o+r)*f,v=-2*f;else if(a===Wo)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _s=new tt,Un=new ye,W0=new tt(0,0,0),X0=new tt(1,1,1),Ti=new tt,Jr=new tt,xn=new tt,yu=new ye,Su=new fs;class Tn{constructor(t=0,e=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let q0=0;const bu=new tt,Ms=new fs,ni=new ye,Qr=new tt,ar=new tt,Y0=new tt,K0=new fs,wu=new tt(1,0,0),Eu=new tt(0,1,0),Tu=new tt(0,0,1),Au={type:"added"},$0={type:"removed"},ys={type:"childadded",child:null},Ea={type:"childremoved",child:null};class tn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new tt,e=new Tn,n=new fs,s=new tt(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new fe}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(wu,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(Tu,t)}translateOnAxis(t,e){return bu.copy(t).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wu,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(Tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ar,Qr,this.up):ni.lookAt(Qr,ar,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ni),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Au),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($0),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Au),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,Y0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,K0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}tn.DEFAULT_UP=new tt(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new tt,ii=new tt,Ta=new tt,si=new tt,Ss=new tt,bs=new tt,Cu=new tt,Aa=new tt,Ca=new tt,Ra=new tt,Pa=new Ie,La=new Ie,Ia=new Ie;class kn{constructor(t=new tt,e=new tt,n=new tt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ii.subVectors(n,e),Ta.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(ii),c=Nn.dot(Ta),l=ii.dot(ii),u=ii.dot(Ta),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pa.setScalar(0),La.setScalar(0),Ia.setScalar(0),Pa.fromBufferAttribute(t,e),La.fromBufferAttribute(t,n),Ia.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pa,r.x),o.addScaledVector(La,r.y),o.addScaledVector(Ia,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ii.subVectors(t,e),Nn.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Nn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,n),bs.subVectors(r,n),Aa.subVectors(t,n);const c=Ss.dot(Aa),l=bs.dot(Aa);if(c<=0&&l<=0)return e.copy(n);Ca.subVectors(t,s);const u=Ss.dot(Ca),f=bs.dot(Ca);if(u>=0&&f<=u)return e.copy(s);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ss,o);Ra.subVectors(t,r);const h=Ss.dot(Ra),g=bs.dot(Ra);if(g>=0&&h<=g)return e.copy(r);const v=h*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(bs,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Cu.subVectors(r,s),a=(f-u)/(f-u+(h-g)),e.copy(s).addScaledVector(Cu,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Ss,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},to={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=Al(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Da(o,r,t+1/3),this.g=Da(o,r,t),this.b=Da(o,r,t-1/3)}return Me.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=Hh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return Me.fromWorkingColorSpace(rn.copy(this),t),Math.round(Ze(rn.r*255,0,255))*65536+Math.round(Ze(rn.g*255,0,255))*256+Math.round(Ze(rn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Qe){Me.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,s=rn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(to);const n=Sr(Ai.h,to.h,e),s=Sr(Ai.s,to.s,e),r=Sr(Ai.l,to.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ce;ce.NAMES=Hh;let j0=0;class hs extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=tr(),this.name="",this.blending=Os,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Cr,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==Cr&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gh extends hs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new tt,eo=new Zt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fu,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fu&&(t.usage=this.usage),t}}class Vh extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wh extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Z0=0;const Rn=new ye,za=new tn,ws=new tt,vn=new Gi,cr=new Gi,je=new tt;class Ve extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?Wh:Vh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(vn.min,cr.min),vn.expandByPoint(je),je.addVectors(vn.max,cr.max),vn.expandByPoint(je)):(vn.expandByPoint(cr.min),vn.expandByPoint(cr.max))}vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)je.fromBufferAttribute(a,l),c&&(ws.fromBufferAttribute(t,l),je.add(ws)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new tt,c[w]=new tt;const l=new tt,u=new tt,f=new tt,d=new Zt,h=new Zt,g=new Zt,v=new tt,m=new tt;function p(w,b,y){l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,y),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(R),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(R),a[w].add(v),a[b].add(v),a[y].add(v),c[w].add(m),c[b].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let w=0,b=x.length;w<b;++w){const y=x[w],R=y.start,N=y.count;for(let O=R,Y=R+N;O<Y;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const _=new tt,M=new tt,S=new tt,E=new tt;function C(w){S.fromBufferAttribute(s,w),E.copy(S);const b=a[w];_.copy(b),_.sub(S.multiplyScalar(S.dot(b))).normalize(),M.crossVectors(E,b);const R=M.dot(c[w])<0?-1:1;o.setXYZW(w,_.x,_.y,_.z,R)}for(let w=0,b=x.length;w<b;++w){const y=x[w],R=y.start,N=y.count;for(let O=R,Y=R+N;O<Y;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new tt,r=new tt,o=new tt,a=new tt,c=new tt,l=new tt,u=new tt,f=new tt;if(t)for(let d=0,h=t.count;d<h;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new ke(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=t(d,n);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ru=new ye,qi=new V0,no=new Vi,Pu=new tt,io=new tt,so=new tt,ro=new tt,Ua=new tt,oo=new tt,Lu=new tt,ao=new tt;class De extends tn{constructor(t=new Ve,e=new Gh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Ua.fromBufferAttribute(f,t),o?oo.addScaledVector(Ua,u):oo.addScaledVector(Ua.sub(e),u))}e.add(oo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(no.containsPoint(qi.origin)===!1&&(qi.intersectSphere(no,Pu)===null||qi.origin.distanceToSquared(Pu)>(t.far-t.near)**2))&&(Ru.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Ru),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,h.start),_=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=x,S=_;M<S;M+=3){const E=a.getX(M),C=a.getX(M+1),w=a.getX(M+2);s=co(this,p,t,n,l,u,f,E,C,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=co(this,o,t,n,l,u,f,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,h.start),_=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let M=x,S=_;M<S;M+=3){const E=M,C=M+1,w=M+2;s=co(this,p,t,n,l,u,f,E,C,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const x=m,_=m+1,M=m+2;s=co(this,o,t,n,l,u,f,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function J0(i,t,e,n,s,r,o,a){let c;if(t.side===mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ki,a),c===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ao);return l<e.near||l>e.far?null:{distance:l,point:ao.clone(),object:i}}function co(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,io),i.getVertexPosition(c,so),i.getVertexPosition(l,ro);const u=J0(i,t,e,n,io,so,ro,Lu);if(u){const f=new tt;kn.getBarycoord(Lu,io,so,ro,f),s&&(u.uv=kn.getInterpolatedAttribute(s,a,c,l,f,new Zt)),r&&(u.uv1=kn.getInterpolatedAttribute(r,a,c,l,f,new Zt)),o&&(u.normal=kn.getInterpolatedAttribute(o,a,c,l,f,new tt),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new tt,materialIndex:0};kn.getNormal(io,so,ro,d.normal),u.face=d,u.barycoord=f}return u}class Bn extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(f,2));function g(v,m,p,x,_,M,S,E,C,w,b){const y=M/C,R=S/w,N=M/2,O=S/2,Y=E/2,ut=C+1,ot=w+1;let xt=0,J=0;const X=new tt;for(let D=0;D<ot;D++){const $=D*R-O;for(let q=0;q<ut;q++){const at=q*y-N;X[v]=at*x,X[m]=$*_,X[p]=Y,l.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=E>0?1:-1,u.push(X.x,X.y,X.z),f.push(q/C),f.push(1-D/w),xt+=1}}for(let D=0;D<w;D++)for(let $=0;$<C;$++){const q=d+$+ut*D,at=d+$+ut*(D+1),V=d+($+1)+ut*(D+1),j=d+($+1)+ut*D;c.push(q,at,j),c.push(at,V,j),J+=6}a.addGroup(h,J,b),h+=J,d+=xt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $s(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){const t={};for(let e=0;e<i.length;e++){const n=$s(i[e]);for(const s in n)t[s]=n[s]}return t}function Q0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const tm={clone:$s,merge:fn};var em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends hs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=Q0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qh extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new tt,Iu=new Zt,Du=new Zt;class Mn extends qh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Du),e.subVectors(Du,Iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Es=-90,Ts=1;class im extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Es,Ts,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Es,Ts,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Es,Ts,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Es,Ts,t,e);a.layers=this.layers,this.add(a);const c=new Mn(Es,Ts,t,e);c.layers=this.layers,this.add(c);const l=new Mn(Es,Ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yh extends ln{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sm extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Ui});r.uniforms.tEquirect.value=e;const o=new De(s,r),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=wn),new im(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Na=new tt,rm=new tt,om=new fe;class Qi{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Na.subVectors(n,e).cross(rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||om.getNormalMatrix(t),s=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Vi,lo=new tt;class Cl{constructor(t=new Qi,e=new Qi,n=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],d=s[7],h=s[8],g=s[9],v=s[10],m=s[11],p=s[12],x=s[13],_=s[14],M=s[15];if(n[0].setComponents(c-r,d-l,m-h,M-p).normalize(),n[1].setComponents(c+r,d+l,m+h,M+p).normalize(),n[2].setComponents(c+o,d+u,m+g,M+x).normalize(),n[3].setComponents(c-o,d-u,m-g,M-x).normalize(),n[4].setComponents(c-a,d-f,m-v,M-_).normalize(),e===pi)n[5].setComponents(c+a,d+f,m+v,M+_).normalize();else if(e===Wo)n[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lo.x=s.normal.x>0?t.max.x:t.min.x,lo.y=s.normal.y>0?t.max.y:t.min.y,lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function am(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ds extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,d=e/c,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const x=p*d-o;for(let _=0;_<l;_++){const M=_*f-r;g.push(M,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const _=x+l*p,M=x+l*(p+1),S=x+1+l*(p+1),E=x+1+l*p;h.push(_,M,E),h.push(M,S,E)}this.setIndex(h),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
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
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_m=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ym=`#ifdef USE_IRIDESCENCE
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
#endif`,Sm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lm=`#define PI 3.141592653589793
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
} // validated`,Im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Om="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
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
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,og=`struct PhysicalMaterial {
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
}`,ag=`
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
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
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,Sx=`uniform vec3 diffuse;
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
}`,bx=`#define LAMBERT
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
}`,wx=`#define LAMBERT
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
}`,Ex=`#define MATCAP
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
}`,Tx=`#define MATCAP
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
}`,Ax=`#define NORMAL
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
}`,Cx=`#define NORMAL
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
}`,Rx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Lx=`#define STANDARD
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
}`,Ix=`#define STANDARD
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
}`,Dx=`#define TOON
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
}`,zx=`#define TOON
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
}`,Ux=`uniform float size;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Fx=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,kx=`uniform float rotation;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:cm,alphahash_pars_fragment:lm,alphamap_fragment:um,alphamap_pars_fragment:fm,alphatest_fragment:hm,alphatest_pars_fragment:dm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:xm,begin_vertex:vm,beginnormal_vertex:_m,bsdfs:Mm,iridescence_fragment:ym,bumpmap_pars_fragment:Sm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:Tm,color_fragment:Am,color_pars_fragment:Cm,color_pars_vertex:Rm,color_vertex:Pm,common:Lm,cube_uv_reflection_fragment:Im,defaultnormal_vertex:Dm,displacementmap_pars_vertex:zm,displacementmap_vertex:Um,emissivemap_fragment:Nm,emissivemap_pars_fragment:Fm,colorspace_fragment:Om,colorspace_pars_fragment:km,envmap_fragment:Bm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Gm,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:tg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:Km,gradientmap_pars_fragment:$m,lightmap_pars_fragment:jm,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Jm,lights_pars_begin:Qm,lights_toon_fragment:eg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:cg,lights_fragment_end:lg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:fg,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:_g,morphinstance_vertex:Mg,morphcolor_vertex:yg,morphnormal_vertex:Sg,morphtarget_pars_vertex:bg,morphtarget_vertex:wg,normal_fragment_begin:Eg,normal_fragment_maps:Tg,normal_pars_fragment:Ag,normal_pars_vertex:Cg,normal_vertex:Rg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Ig,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:zg,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Og,dithering_fragment:kg,dithering_pars_fragment:Bg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:Kg,skinning_vertex:$g,skinnormal_vertex:jg,specularmap_fragment:Zg,specularmap_pars_fragment:Jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:tx,transmission_fragment:ex,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ox,background_vert:ax,background_frag:cx,backgroundCube_vert:lx,backgroundCube_frag:ux,cube_vert:fx,cube_frag:hx,depth_vert:dx,depth_frag:px,distanceRGBA_vert:mx,distanceRGBA_frag:gx,equirect_vert:xx,equirect_frag:vx,linedashed_vert:_x,linedashed_frag:Mx,meshbasic_vert:yx,meshbasic_frag:Sx,meshlambert_vert:bx,meshlambert_frag:wx,meshmatcap_vert:Ex,meshmatcap_frag:Tx,meshnormal_vert:Ax,meshnormal_frag:Cx,meshphong_vert:Rx,meshphong_frag:Px,meshphysical_vert:Lx,meshphysical_frag:Ix,meshtoon_vert:Dx,meshtoon_frag:zx,points_vert:Ux,points_frag:Nx,shadow_vert:Fx,shadow_frag:Ox,sprite_vert:kx,sprite_frag:Bx},$t={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Yn={basic:{uniforms:fn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:fn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new ce(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:fn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:fn([$t.common,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.roughnessmap,$t.metalnessmap,$t.fog,$t.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:fn([$t.common,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.gradientmap,$t.fog,$t.lights,{emissive:{value:new ce(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:fn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:fn([$t.points,$t.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:fn([$t.common,$t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:fn([$t.common,$t.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:fn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:fn([$t.sprite,$t.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:fn([$t.common,$t.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:fn([$t.lights,$t.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Yn.physical={uniforms:fn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const uo={r:0,b:0,g:0},Ki=new Tn,Hx=new ye;function Gx(i,t,e,n,s,r,o){const a=new ce(0);let c=r===!0?0:1,l,u,f=null,d=0,h=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const M=g(x);M===null?p(a,c):M&&M.isColor&&(p(M,1),_=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===ta)?(u===void 0&&(u=new De(new Bn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:$s(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ki.copy(_.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Ki)),u.material.toneMapped=Me.getTransfer(M.colorSpace)!==we,(f!==M||d!==M.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,h=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new De(new ds(2,2),new gn({name:"BackgroundMaterial",uniforms:$s(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Me.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,_){x.getRGB(uo,Xh(i)),n.buffers.color.setClear(uo.r,uo.g,uo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:v,addToRenderList:m}}function Vx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,R,N,O,Y){let ut=!1;const ot=f(O,N,R);r!==ot&&(r=ot,l(r.object)),ut=h(y,O,N,Y),ut&&g(y,O,N,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(ut||o)&&(o=!1,M(y,R,N,O),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,R,N){const O=N.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let ut=Y[R.id];ut===void 0&&(ut={},Y[R.id]=ut);let ot=ut[O];return ot===void 0&&(ot=d(c()),ut[O]=ot),ot}function d(y){const R=[],N=[],O=[];for(let Y=0;Y<e;Y++)R[Y]=0,N[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:O,object:y,attributes:{},index:null}}function h(y,R,N,O){const Y=r.attributes,ut=R.attributes;let ot=0;const xt=N.getAttributes();for(const J in xt)if(xt[J].location>=0){const D=Y[J];let $=ut[J];if($===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),D===void 0||D.attribute!==$||$&&D.data!==$.data)return!0;ot++}return r.attributesNum!==ot||r.index!==O}function g(y,R,N,O){const Y={},ut=R.attributes;let ot=0;const xt=N.getAttributes();for(const J in xt)if(xt[J].location>=0){let D=ut[J];D===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(D=y.instanceColor));const $={};$.attribute=D,D&&D.data&&($.data=D.data),Y[J]=$,ot++}r.attributes=Y,r.attributesNum=ot,r.index=O}function v(){const y=r.newAttributes;for(let R=0,N=y.length;R<N;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const N=r.newAttributes,O=r.enabledAttributes,Y=r.attributeDivisors;N[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),Y[y]!==R&&(i.vertexAttribDivisor(y,R),Y[y]=R)}function x(){const y=r.newAttributes,R=r.enabledAttributes;for(let N=0,O=R.length;N<O;N++)R[N]!==y[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function _(y,R,N,O,Y,ut,ot){ot===!0?i.vertexAttribIPointer(y,R,N,Y,ut):i.vertexAttribPointer(y,R,N,O,Y,ut)}function M(y,R,N,O){v();const Y=O.attributes,ut=N.getAttributes(),ot=R.defaultAttributeValues;for(const xt in ut){const J=ut[xt];if(J.location>=0){let X=Y[xt];if(X===void 0&&(xt==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),xt==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){const D=X.normalized,$=X.itemSize,q=t.get(X);if(q===void 0)continue;const at=q.buffer,V=q.type,j=q.bytesPerElement,mt=V===i.INT||V===i.UNSIGNED_INT||X.gpuType===Ml;if(X.isInterleavedBufferAttribute){const H=X.data,Q=H.stride,lt=X.offset;if(H.isInstancedInterleavedBuffer){for(let At=0;At<J.locationSize;At++)p(J.location+At,H.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let At=0;At<J.locationSize;At++)m(J.location+At);i.bindBuffer(i.ARRAY_BUFFER,at);for(let At=0;At<J.locationSize;At++)_(J.location+At,$/J.locationSize,V,D,Q*j,(lt+$/J.locationSize*At)*j,mt)}else{if(X.isInstancedBufferAttribute){for(let H=0;H<J.locationSize;H++)p(J.location+H,X.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let H=0;H<J.locationSize;H++)m(J.location+H);i.bindBuffer(i.ARRAY_BUFFER,at);for(let H=0;H<J.locationSize;H++)_(J.location+H,$/J.locationSize,V,D,$*j,$/J.locationSize*H*j,mt)}}else if(ot!==void 0){const D=ot[xt];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(J.location,D);break;case 3:i.vertexAttrib3fv(J.location,D);break;case 4:i.vertexAttrib4fv(J.location,D);break;default:i.vertexAttrib1fv(J.location,D)}}}}x()}function S(){w();for(const y in n){const R=n[y];for(const N in R){const O=R[N];for(const Y in O)u(O[Y].object),delete O[Y];delete R[N]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const N in R){const O=R[N];for(const Y in O)u(O[Y].object),delete O[Y];delete R[N]}delete n[y.id]}function C(y){for(const R in n){const N=n[R];if(N[y.id]===void 0)continue;const O=N[y.id];for(const Y in O)u(O[Y].object),delete O[Y];delete N[y.id]}}function w(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Wx(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];e.update(h,n,1)}function c(l,u,f,d){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const w=C===Ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!w)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:S,maxSamples:E}}function qx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Qi,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const x=r?0:n,_=x*4;let M=p.clippingState||null;c.value=M,M=u(g,d,_,h);for(let S=0;S!==_;++S)M[S]=e[S];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=h+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,M=h;_!==v;++_,M+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Yx(i){let t=new WeakMap;function e(o,a){return a===Uc?o.mapping=Xs:a===Nc&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uc||a===Nc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new sm(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class $h extends qh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Us=4,zu=[.125,.215,.35,.446,.526,.582],ns=20,Fa=new $h,Uu=new ce;let Oa=null,ka=0,Ba=0,Ha=!1;const ts=(1+Math.sqrt(5))/2,As=1/ts,Nu=[new tt(-ts,As,0),new tt(ts,As,0),new tt(-As,0,ts),new tt(As,0,ts),new tt(0,ts,-As),new tt(0,ts,As),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class Fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Oa=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oa,ka,Ba),this._renderer.xr.enabled=Ha,t.scissorTest=!1,fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oa=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ur,format:Dn,colorSpace:Js,depthBuffer:!1},s=Ou(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kx(r)),this._blurMaterial=$x(r,t,e)}return s}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,s){const a=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Uu),u.toneMapping=Ni,u.autoClear=!1;const h=new Gh({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new De(new Bn,h);let v=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,v=!0):(h.color.copy(Uu),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;fo(s,x*_,p>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;fo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nu[(s-r-1)%Nu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new De(this._lodPlanes[s],l),d=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ns-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const p=[];let x=0;for(let C=0;C<ns;++C){const w=C/v,b=Math.exp(-w*w/2);p.push(b),C===0?x+=b:C<m&&(x+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const M=this._sizeLods[s],S=3*M*(s>_-Us?s-_+Us:0),E=4*(this._cubeSize-M);fo(e,S,E,3*M,2*M),c.setRenderTarget(e),c.render(f,Fa)}}function Kx(i){const t=[],e=[],n=[];let s=i;const r=i-Us+1+zu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Us?c=zu[o-i+Us-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*h),_=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let E=0;E<h;E++){const C=E%3*2/3-1,w=E>2?0:-1,b=[C,w,0,C+2/3,w,0,C+2/3,w+1,0,C,w,0,C+2/3,w+1,0,C,w+1,0];x.set(b,v*g*E),_.set(d,m*g*E);const y=[E,E,E,E,E,E];M.set(y,p*g*E)}const S=new Ve;S.setAttribute("position",new ke(x,v)),S.setAttribute("uv",new ke(_,m)),S.setAttribute("faceIndex",new ke(M,p)),t.push(S),s>Us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ou(i,t,e){const n=new ls(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $x(i,t,e){const n=new Float32Array(ns),s=new tt(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ku(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Bu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function jx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Uc||c===Nc,u=c===Xs||c===qs;if(l||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fu(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new Fu(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jx(i,t,e,n){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(t.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const v=h[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(h!==null){const x=h.array;v=h.version;for(let _=0,M=x.length;_<M;_+=3){const S=x[_+0],E=x[_+1],C=x[_+2];d.push(S,E,E,C,C,S)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const S=_+0,E=_+1,C=_+2;d.push(S,E,E,C,C,S)}}else return;const m=new(Fh(d)?Wh:Vh)(d,1);m.version=v;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Qx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*o),e.update(h,n,1)}function l(d,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,d*o,g),e.update(h,n,g))}function u(d,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,n,1)}function f(d,h,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,d,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=h[x]*v[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function tv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ev(i,t,e){const n=new WeakMap,s=new Ie;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;h===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let M=a.attributes.position.count*_,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*S*4*f),C=new kh(E,M,S,f);C.type=jn,C.needsUpdate=!0;const w=_*4;for(let y=0;y<f;y++){const R=m[y],N=p[y],O=x[y],Y=M*S*4*y;for(let ut=0;ut<R.count;ut++){const ot=ut*w;h===!0&&(s.fromBufferAttribute(R,ut),E[Y+ot+0]=s.x,E[Y+ot+1]=s.y,E[Y+ot+2]=s.z,E[Y+ot+3]=0),g===!0&&(s.fromBufferAttribute(N,ut),E[Y+ot+4]=s.x,E[Y+ot+5]=s.y,E[Y+ot+6]=s.z,E[Y+ot+7]=0),v===!0&&(s.fromBufferAttribute(O,ut),E[Y+ot+8]=s.x,E[Y+ot+9]=s.y,E[Y+ot+10]=s.z,E[Y+ot+11]=O.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new Zt(M,S)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let v=0;v<l.length;v++)h+=l[v];const g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function nv(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class jh extends ln{constructor(t,e,n,s,r,o,a,c,l,u=ks){if(u!==ks&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ks&&(n=cs),n===void 0&&u===Ks&&(n=Ys),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zh=new ln,Hu=new jh(1,1),Jh=new kh,Qh=new H0,td=new Yh,Gu=[],Vu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function er(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gu[s];if(r===void 0&&(r=new Float32Array(s),Gu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ia(i,t){let e=Vu[t];e===void 0&&(e=new Int32Array(t),Vu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function iv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function av(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ke(e,n))return;qu.set(n),i.uniformMatrix2fv(this.addr,!1,qu),$e(e,n)}}function cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ke(e,n))return;Xu.set(n),i.uniformMatrix3fv(this.addr,!1,Xu),$e(e,n)}}function lv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ke(e,n))return;Wu.set(n),i.uniformMatrix4fv(this.addr,!1,Wu),$e(e,n)}}function uv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function pv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function vv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hu.compareFunction=Nh,r=Hu):r=Zh,e.setTexture2D(t||r,s)}function _v(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function Mv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||td,s)}function yv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jh,s)}function Sv(i){switch(i){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return ov;case 35674:return av;case 35675:return cv;case 35676:return lv;case 5124:case 35670:return uv;case 35667:case 35671:return fv;case 35668:case 35672:return hv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return yv}}function bv(i,t){i.uniform1fv(this.addr,t)}function wv(i,t){const e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function Ev(i,t){const e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function Tv(i,t){const e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function Av(i,t){const e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cv(i,t){const e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Rv(i,t){const e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pv(i,t){i.uniform1iv(this.addr,t)}function Lv(i,t){i.uniform2iv(this.addr,t)}function Iv(i,t){i.uniform3iv(this.addr,t)}function Dv(i,t){i.uniform4iv(this.addr,t)}function zv(i,t){i.uniform1uiv(this.addr,t)}function Uv(i,t){i.uniform2uiv(this.addr,t)}function Nv(i,t){i.uniform3uiv(this.addr,t)}function Fv(i,t){i.uniform4uiv(this.addr,t)}function Ov(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zh,r[o])}function kv(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qh,r[o])}function Bv(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||td,r[o])}function Hv(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jh,r[o])}function Gv(i){switch(i){case 5126:return bv;case 35664:return wv;case 35665:return Ev;case 35666:return Tv;case 35674:return Av;case 35675:return Cv;case 35676:return Rv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Iv;case 35669:case 35673:return Dv;case 5125:return zv;case 36294:return Uv;case 36295:return Nv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return Hv}}class Vv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sv(e.type)}}class Wv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gv(e.type)}}class Xv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Yu(i,t){i.seq.push(t),i.map[t.id]=t}function qv(i,t,e){const n=i.name,s=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),o=Ga.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Yu(e,l===void 0?new Vv(a,i,t):new Wv(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Xv(a),Yu(e,f)),e=f}}}class Uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ku(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Yv=37297;let Kv=0;function $v(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const $u=new fe;function jv(i){Me._getMatrix($u,Me.workingColorSpace,i);const t=`mat3( ${$u.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case na:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ju(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$v(i.getShaderSource(t),o)}else return s}function Zv(i,t){const e=jv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jv(i,t){let e;switch(t){case t0:e="Linear";break;case e0:e="Reinhard";break;case n0:e="Cineon";break;case i0:e="ACESFilmic";break;case r0:e="AgX";break;case Eh:e="Neutral";break;case s0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ho=new tt;function Qv(){Me.getLuminanceCoefficients(ho);const i=ho.x.toFixed(4),t=ho.y.toFixed(4),e=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function e_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function mr(i){return i!==""}function Zu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(i_,r_)}const s_=new Map;function r_(i,t){let e=de[t];if(e===void 0){const n=s_.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ul(e)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(i){return i.replace(o_,a_)}function a_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function c_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Up?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function l_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function f_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qo:t="ENVMAP_BLENDING_MULTIPLY";break;case Jp:t="ENVMAP_BLENDING_MIX";break;case Qp:t="ENVMAP_BLENDING_ADD";break}return t}function h_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=c_(e),l=l_(e),u=u_(e),f=f_(e),d=h_(e),h=t_(e),g=e_(r),v=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?de.tonemapping_pars_fragment:"",e.toneMapping!==Ni?Jv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Zv("linearToOutputTexel",e.outputColorSpace),Qv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),o=ul(o),o=Zu(o,e),o=Ju(o,e),a=ul(a),a=Zu(a,e),a=Ju(a,e),o=Qu(o),a=Qu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+o,M=x+p+a,S=Ku(s,s.VERTEX_SHADER,_),E=Ku(s,s.FRAGMENT_SHADER,M);s.attachShader(v,S),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(R){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(S).trim(),Y=s.getShaderInfoLog(E).trim();let ut=!0,ot=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ut=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,E);else{const xt=ju(s,S,"vertex"),J=ju(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+xt+`
`+J)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||Y==="")&&(ot=!1);ot&&(R.diagnostics={runnable:ut,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(S),s.deleteShader(E),w=new Uo(s,v),b=n_(s,v)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Yv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g_(t),e.set(t,n)),n}}class g_{constructor(t){this.id=p_++,this.code=t,this.usedTimes=0}}function x_(i,t,e,n,s,r,o){const a=new Bh,c=new m_,l=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,y,R,N,O){const Y=N.fog,ut=O.geometry,ot=b.isMeshStandardMaterial?N.environment:null,xt=(b.isMeshStandardMaterial?e:t).get(b.envMap||ot),J=xt&&xt.mapping===ta?xt.image.height:null,X=g[b.type];b.precision!==null&&(h=s.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const D=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$=D!==void 0?D.length:0;let q=0;ut.morphAttributes.position!==void 0&&(q=1),ut.morphAttributes.normal!==void 0&&(q=2),ut.morphAttributes.color!==void 0&&(q=3);let at,V,j,mt;if(X){const Lt=Yn[X];at=Lt.vertexShader,V=Lt.fragmentShader}else at=b.vertexShader,V=b.fragmentShader,c.update(b),j=c.getVertexShaderID(b),mt=c.getFragmentShaderID(b);const H=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),lt=O.isInstancedMesh===!0,At=O.isBatchedMesh===!0,Nt=!!b.map,et=!!b.matcap,_t=!!xt,B=!!b.aoMap,nt=!!b.lightMap,Gt=!!b.bumpMap,Jt=!!b.normalMap,Bt=!!b.displacementMap,Kt=!!b.emissiveMap,Xt=!!b.metalnessMap,T=!!b.roughnessMap,A=b.anisotropy>0,Z=b.clearcoat>0,ct=b.dispersion>0,bt=b.iridescence>0,wt=b.sheen>0,Wt=b.transmission>0,Ft=A&&!!b.anisotropyMap,zt=Z&&!!b.clearcoatMap,W=Z&&!!b.clearcoatNormalMap,G=Z&&!!b.clearcoatRoughnessMap,it=bt&&!!b.iridescenceMap,yt=bt&&!!b.iridescenceThicknessMap,ft=wt&&!!b.sheenColorMap,dt=wt&&!!b.sheenRoughnessMap,U=!!b.specularMap,rt=!!b.specularColorMap,Et=!!b.specularIntensityMap,F=Wt&&!!b.transmissionMap,st=Wt&&!!b.thicknessMap,ht=!!b.gradientMap,vt=!!b.alphaMap,Tt=b.alphaTest>0,K=!!b.alphaHash,pt=!!b.extensions;let Rt=Ni;b.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Rt=i.toneMapping);const It={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:at,fragmentShader:V,defines:b.defines,customVertexShaderID:j,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:At,batchingColor:At&&O._colorsTexture!==null,instancing:lt,instancingColor:lt&&O.instanceColor!==null,instancingMorph:lt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Js,alphaToCoverage:!!b.alphaToCoverage,map:Nt,matcap:et,envMap:_t,envMapMode:_t&&xt.mapping,envMapCubeUVHeight:J,aoMap:B,lightMap:nt,bumpMap:Gt,normalMap:Jt,displacementMap:d&&Bt,emissiveMap:Kt,normalMapObjectSpace:Jt&&b.normalMapType===l0,normalMapTangentSpace:Jt&&b.normalMapType===ea,metalnessMap:Xt,roughnessMap:T,anisotropy:A,anisotropyMap:Ft,clearcoat:Z,clearcoatMap:zt,clearcoatNormalMap:W,clearcoatRoughnessMap:G,dispersion:ct,iridescence:bt,iridescenceMap:it,iridescenceThicknessMap:yt,sheen:wt,sheenColorMap:ft,sheenRoughnessMap:dt,specularMap:U,specularColorMap:rt,specularIntensityMap:Et,transmission:Wt,transmissionMap:F,thicknessMap:st,gradientMap:ht,opaque:b.transparent===!1&&b.blending===Os&&b.alphaToCoverage===!1,alphaMap:vt,alphaTest:Tt,alphaHash:K,combine:b.combine,mapUv:Nt&&v(b.map.channel),aoMapUv:B&&v(b.aoMap.channel),lightMapUv:nt&&v(b.lightMap.channel),bumpMapUv:Gt&&v(b.bumpMap.channel),normalMapUv:Jt&&v(b.normalMap.channel),displacementMapUv:Bt&&v(b.displacementMap.channel),emissiveMapUv:Kt&&v(b.emissiveMap.channel),metalnessMapUv:Xt&&v(b.metalnessMap.channel),roughnessMapUv:T&&v(b.roughnessMap.channel),anisotropyMapUv:Ft&&v(b.anisotropyMap.channel),clearcoatMapUv:zt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:W&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:dt&&v(b.sheenRoughnessMap.channel),specularMapUv:U&&v(b.specularMap.channel),specularColorMapUv:rt&&v(b.specularColorMap.channel),specularIntensityMapUv:Et&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:st&&v(b.thicknessMap.channel),alphaMapUv:vt&&v(b.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Jt||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!ut.attributes.uv&&(Nt||vt),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Q,skinning:O.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Nt&&b.map.isVideoTexture===!0&&Me.getTransfer(b.map.colorSpace)===we,decodeVideoTextureEmissive:Kt&&b.emissiveMap.isVideoTexture===!0&&Me.getTransfer(b.emissiveMap.colorSpace)===we,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===mn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:pt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&b.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)y.push(R),y.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(x(y,b),_(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function x(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function _(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){const y=g[b.type];let R;if(y){const N=Yn[y];R=tm.clone(N.uniforms)}else R=b.uniforms;return R}function S(b,y){let R;for(let N=0,O=u.length;N<O;N++){const Y=u[N];if(Y.cacheKey===y){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new d_(i,y,b,r),u.push(R)),R}function E(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function C(b){c.remove(b)}function w(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:w}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function __(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ef(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,h,g,v,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function a(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):e.push(p)}function c(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,d){e.length>1&&e.sort(f||__),n.length>1&&n.sort(d||ef),s.length>1&&s.sort(d||ef)}function u(){for(let f=t,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function M_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new nf,i.set(n,[o])):s>=r.length?(o=new nf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function y_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new tt,color:new ce};break;case"SpotLight":e={position:new tt,direction:new tt,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return i[t.id]=e,e}}}function S_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let b_=0;function w_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function E_(i){const t=new y_,e=S_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new tt);const s=new tt,r=new ye,o=new ye;function a(l){let u=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,x=0,_=0,M=0,S=0,E=0,C=0;l.sort(w_);for(let b=0,y=l.length;b<y;b++){const R=l[b],N=R.color,O=R.intensity,Y=R.distance,ut=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*O,f+=N.g*O,d+=N.b*O;else if(R.isLightProbe){for(let ot=0;ot<9;ot++)n.probe[ot].addScaledVector(R.sh.coefficients[ot],O);C++}else if(R.isDirectionalLight){const ot=t.get(R);if(ot.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const xt=R.shadow,J=e.get(R);J.shadowIntensity=xt.intensity,J.shadowBias=xt.bias,J.shadowNormalBias=xt.normalBias,J.shadowRadius=xt.radius,J.shadowMapSize=xt.mapSize,n.directionalShadow[h]=J,n.directionalShadowMap[h]=ut,n.directionalShadowMatrix[h]=R.shadow.matrix,x++}n.directional[h]=ot,h++}else if(R.isSpotLight){const ot=t.get(R);ot.position.setFromMatrixPosition(R.matrixWorld),ot.color.copy(N).multiplyScalar(O),ot.distance=Y,ot.coneCos=Math.cos(R.angle),ot.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),ot.decay=R.decay,n.spot[v]=ot;const xt=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,xt.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[v]=xt.matrix,R.castShadow){const J=e.get(R);J.shadowIntensity=xt.intensity,J.shadowBias=xt.bias,J.shadowNormalBias=xt.normalBias,J.shadowRadius=xt.radius,J.shadowMapSize=xt.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=ut,M++}v++}else if(R.isRectAreaLight){const ot=t.get(R);ot.color.copy(N).multiplyScalar(O),ot.halfWidth.set(R.width*.5,0,0),ot.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=ot,m++}else if(R.isPointLight){const ot=t.get(R);if(ot.color.copy(R.color).multiplyScalar(R.intensity),ot.distance=R.distance,ot.decay=R.decay,R.castShadow){const xt=R.shadow,J=e.get(R);J.shadowIntensity=xt.intensity,J.shadowBias=xt.bias,J.shadowNormalBias=xt.normalBias,J.shadowRadius=xt.radius,J.shadowMapSize=xt.mapSize,J.shadowCameraNear=xt.camera.near,J.shadowCameraFar=xt.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=ut,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=ot,g++}else if(R.isHemisphereLight){const ot=t.get(R);ot.skyColor.copy(R.color).multiplyScalar(O),ot.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=ot,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$t.LTC_FLOAT_1,n.rectAreaLTC2=$t.LTC_FLOAT_2):(n.rectAreaLTC1=$t.LTC_HALF_1,n.rectAreaLTC2=$t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==h||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==m||w.hemiLength!==p||w.numDirectionalShadows!==x||w.numPointShadows!==_||w.numSpotShadows!==M||w.numSpotMaps!==S||w.numLightProbes!==C)&&(n.directional.length=h,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,w.directionalLength=h,w.pointLength=g,w.spotLength=v,w.rectAreaLength=m,w.hemiLength=p,w.numDirectionalShadows=x,w.numPointShadows=_,w.numSpotShadows=M,w.numSpotMaps=S,w.numLightProbes=C,n.version=b_++)}function c(l,u){let f=0,d=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const _=l[p];if(_.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(_.isSpotLight){const M=n.spot[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(_.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function sf(i){const t=new E_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function T_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new sf(i),t.set(s,[a])):r>=o.length?(a=new sf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class A_ extends hs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class C_ extends hs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
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
}`;function L_(i,t,e){let n=new Cl;const s=new Zt,r=new Zt,o=new Ie,a=new A_({depthPacking:c0}),c=new C_,l={},u=e.maxTextureSize,f={[ki]:mn,[mn]:ki,[yn]:yn},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:R_,fragmentShader:P_}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new De(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let p=this.type;this.render=function(E,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ui),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==ai&&this.type===ai,Y=p===ai&&this.type!==ai;for(let ut=0,ot=E.length;ut<ot;ut++){const xt=E[ut],J=xt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",xt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const X=J.getFrameExtents();if(s.multiply(X),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,J.mapSize.y=r.y)),J.map===null||O===!0||Y===!0){const $=this.type!==ai?{minFilter:En,magFilter:En}:{};J.map!==null&&J.map.dispose(),J.map=new ls(s.x,s.y,$),J.map.texture.name=xt.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const D=J.getViewportCount();for(let $=0;$<D;$++){const q=J.getViewport($);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),N.viewport(o),J.updateMatrices(xt,$),n=J.getFrustum(),M(C,w,J.camera,xt,this.type)}J.isPointLightShadow!==!0&&this.type===ai&&x(J,w),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,R)};function x(E,C){const w=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ls(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,w,d,v,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,w,h,v,null)}function _(E,C,w,b){let y=null;const R=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)y=R;else if(y=w.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const N=y.uuid,O=C.uuid;let Y=l[N];Y===void 0&&(Y={},l[N]=Y);let ut=Y[O];ut===void 0&&(ut=y.clone(),Y[O]=ut,C.addEventListener("dispose",S)),y=ut}if(y.visible=C.visible,y.wireframe=C.wireframe,b===ai?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=w}return y}function M(E,C,w,b,y){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const O=t.update(E),Y=E.material;if(Array.isArray(Y)){const ut=O.groups;for(let ot=0,xt=ut.length;ot<xt;ot++){const J=ut[ot],X=Y[J.materialIndex];if(X&&X.visible){const D=_(E,X,b,y);E.onBeforeShadow(i,E,C,w,O,D,J),i.renderBufferDirect(w,null,O,D,E,J),E.onAfterShadow(i,E,C,w,O,D,J)}}}else if(Y.visible){const ut=_(E,Y,b,y);E.onBeforeShadow(i,E,C,w,O,ut,null),i.renderBufferDirect(w,null,O,ut,E,null),E.onAfterShadow(i,E,C,w,O,ut,null)}}const N=E.children;for(let O=0,Y=N.length;O<Y;O++)M(N[O],C,w,b,y)}function S(E){E.target.removeEventListener("dispose",S);for(const w in l){const b=l[w],y=E.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const I_={[Cc]:Rc,[Pc]:Dc,[Lc]:zc,[Ws]:Ic,[Rc]:Cc,[Dc]:Pc,[zc]:Lc,[Ic]:Ws};function D_(i,t){function e(){let F=!1;const st=new Ie;let ht=null;const vt=new Ie(0,0,0,0);return{setMask:function(Tt){ht!==Tt&&!F&&(i.colorMask(Tt,Tt,Tt,Tt),ht=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,K,pt,Rt,It){It===!0&&(Tt*=Rt,K*=Rt,pt*=Rt),st.set(Tt,K,pt,Rt),vt.equals(st)===!1&&(i.clearColor(Tt,K,pt,Rt),vt.copy(st))},reset:function(){F=!1,ht=null,vt.set(-1,0,0,0)}}}function n(){let F=!1,st=!1,ht=null,vt=null,Tt=null;return{setReversed:function(K){if(st!==K){const pt=t.get("EXT_clip_control");st?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Rt=Tt;Tt=null,this.setClear(Rt)}st=K},getReversed:function(){return st},setTest:function(K){K?H(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(K){ht!==K&&!F&&(i.depthMask(K),ht=K)},setFunc:function(K){if(st&&(K=I_[K]),vt!==K){switch(K){case Cc:i.depthFunc(i.NEVER);break;case Rc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Lc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=K}},setLocked:function(K){F=K},setClear:function(K){Tt!==K&&(st&&(K=1-K),i.clearDepth(K),Tt=K)},reset:function(){F=!1,ht=null,vt=null,Tt=null,st=!1}}}function s(){let F=!1,st=null,ht=null,vt=null,Tt=null,K=null,pt=null,Rt=null,It=null;return{setTest:function(Lt){F||(Lt?H(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(Lt){st!==Lt&&!F&&(i.stencilMask(Lt),st=Lt)},setFunc:function(Lt,qt,Yt){(ht!==Lt||vt!==qt||Tt!==Yt)&&(i.stencilFunc(Lt,qt,Yt),ht=Lt,vt=qt,Tt=Yt)},setOp:function(Lt,qt,Yt){(K!==Lt||pt!==qt||Rt!==Yt)&&(i.stencilOp(Lt,qt,Yt),K=Lt,pt=qt,Rt=Yt)},setLocked:function(Lt){F=Lt},setClear:function(Lt){It!==Lt&&(i.clearStencil(Lt),It=Lt)},reset:function(){F=!1,st=null,ht=null,vt=null,Tt=null,K=null,pt=null,Rt=null,It=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,x=null,_=null,M=null,S=null,E=null,C=new ce(0,0,0),w=0,b=!1,y=null,R=null,N=null,O=null,Y=null;const ut=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,xt=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(J)[1]),ot=xt>=1):J.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ot=xt>=2);let X=null,D={};const $=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),at=new Ie().fromArray($),V=new Ie().fromArray(q);function j(F,st,ht,vt){const Tt=new Uint8Array(4),K=i.createTexture();i.bindTexture(F,K),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<ht;pt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(st+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return K}const mt={};mt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(Ws),Gt(!1),Jt(ou),H(i.CULL_FACE),B(Ui);function H(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Q(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function lt(F,st){return f[F]!==st?(i.bindFramebuffer(F,st),f[F]=st,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=st),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=st),!0):!1}function At(F,st){let ht=h,vt=!1;if(F){ht=d.get(st),ht===void 0&&(ht=[],d.set(st,ht));const Tt=F.textures;if(ht.length!==Tt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let K=0,pt=Tt.length;K<pt;K++)ht[K]=i.COLOR_ATTACHMENT0+K;ht.length=Tt.length,vt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ht)}function Nt(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const et={[zi]:i.FUNC_ADD,[Np]:i.FUNC_SUBTRACT,[Fp]:i.FUNC_REVERSE_SUBTRACT};et[Op]=i.MIN,et[kp]=i.MAX;const _t={[Bp]:i.ZERO,[Tc]:i.ONE,[Hp]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[Yp]:i.SRC_ALPHA_SATURATE,[Xp]:i.DST_COLOR,[Vp]:i.DST_ALPHA,[Gp]:i.ONE_MINUS_SRC_COLOR,[Cr]:i.ONE_MINUS_SRC_ALPHA,[qp]:i.ONE_MINUS_DST_COLOR,[Wp]:i.ONE_MINUS_DST_ALPHA,[Kp]:i.CONSTANT_COLOR,[$p]:i.ONE_MINUS_CONSTANT_COLOR,[jp]:i.CONSTANT_ALPHA,[Zp]:i.ONE_MINUS_CONSTANT_ALPHA};function B(F,st,ht,vt,Tt,K,pt,Rt,It,Lt){if(F===Ui){v===!0&&(Q(i.BLEND),v=!1);return}if(v===!1&&(H(i.BLEND),v=!0),F!==wh){if(F!==m||Lt!==b){if((p!==zi||M!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,M=zi),Lt)switch(F){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case au:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case au:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,_=null,S=null,E=null,C.set(0,0,0),w=0,m=F,b=Lt}return}Tt=Tt||st,K=K||ht,pt=pt||vt,(st!==p||Tt!==M)&&(i.blendEquationSeparate(et[st],et[Tt]),p=st,M=Tt),(ht!==x||vt!==_||K!==S||pt!==E)&&(i.blendFuncSeparate(_t[ht],_t[vt],_t[K],_t[pt]),x=ht,_=vt,S=K,E=pt),(Rt.equals(C)===!1||It!==w)&&(i.blendColor(Rt.r,Rt.g,Rt.b,It),C.copy(Rt),w=It),m=F,b=!1}function nt(F,st){F.side===yn?Q(i.CULL_FACE):H(i.CULL_FACE);let ht=F.side===mn;st&&(ht=!ht),Gt(ht),F.blending===Os&&F.transparent===!1?B(Ui):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const vt=F.stencilWrite;a.setTest(vt),vt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Kt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function Jt(F){F!==Dp?(H(i.CULL_FACE),F!==R&&(F===ou?i.cullFace(i.BACK):F===zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),R=F}function Bt(F){F!==N&&(ot&&i.lineWidth(F),N=F)}function Kt(F,st,ht){F?(H(i.POLYGON_OFFSET_FILL),(O!==st||Y!==ht)&&(i.polygonOffset(st,ht),O=st,Y=ht)):Q(i.POLYGON_OFFSET_FILL)}function Xt(F){F?H(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+ut-1),X!==F&&(i.activeTexture(F),X=F)}function A(F,st,ht){ht===void 0&&(X===null?ht=i.TEXTURE0+ut-1:ht=X);let vt=D[ht];vt===void 0&&(vt={type:void 0,texture:void 0},D[ht]=vt),(vt.type!==F||vt.texture!==st)&&(X!==ht&&(i.activeTexture(ht),X=ht),i.bindTexture(F,st||mt[F]),vt.type=F,vt.texture=st)}function Z(){const F=D[X];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Wt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(F){at.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),at.copy(F))}function dt(F){V.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),V.copy(F))}function U(F,st){let ht=l.get(st);ht===void 0&&(ht=new WeakMap,l.set(st,ht));let vt=ht.get(F);vt===void 0&&(vt=i.getUniformBlockIndex(st,F.name),ht.set(F,vt))}function rt(F,st){const vt=l.get(st).get(F);c.get(st)!==vt&&(i.uniformBlockBinding(st,vt,F.__bindingPointIndex),c.set(st,vt))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},X=null,D={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,x=null,_=null,M=null,S=null,E=null,C=new ce(0,0,0),w=0,b=!1,y=null,R=null,N=null,O=null,Y=null,at.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:Q,bindFramebuffer:lt,drawBuffers:At,useProgram:Nt,setBlending:B,setMaterial:nt,setFlipSided:Gt,setCullFace:Jt,setLineWidth:Bt,setPolygonOffset:Kt,setScissorTest:Xt,activeTexture:T,bindTexture:A,unbindTexture:Z,compressedTexImage2D:ct,compressedTexImage3D:bt,texImage2D:it,texImage3D:yt,updateUBOMapping:U,uniformBlockBinding:rt,texStorage2D:W,texStorage3D:G,texSubImage2D:wt,texSubImage3D:Wt,compressedTexSubImage2D:Ft,compressedTexSubImage3D:zt,scissor:ft,viewport:dt,reset:Et}}function rf(i,t,e,n){const s=z_(n);switch(e){case Ph:return i*t;case Ih:return i*t;case Dh:return i*t*2;case bl:return i*t/s.components*s.byteLength;case wl:return i*t/s.components*s.byteLength;case zh:return i*t*2/s.components*s.byteLength;case El:return i*t*2/s.components*s.byteLength;case Lh:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case Tl:return i*t*4/s.components*s.byteLength;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Io:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kc:case Hc:return Math.max(i,16)*Math.max(t,8)/4;case Oc:case Bc:return Math.max(i,8)*Math.max(t,8)/2;case Gc:case Vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $c:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zo:case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uh:case al:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cl:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z_(i){switch(i){case Jn:case Ah:return{byteLength:1,components:1};case Rr:case Ch:case Ur:return{byteLength:2,components:1};case yl:case Sl:return{byteLength:2,components:4};case cs:case Ml:case jn:return{byteLength:4,components:1};case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function U_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Zt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,A){return h?new OffscreenCanvas(T,A):Xo("canvas")}function v(T,A,Z){let ct=1;const bt=Xt(T);if((bt.width>Z||bt.height>Z)&&(ct=Z/Math.max(bt.width,bt.height)),ct<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const wt=Math.floor(ct*bt.width),Wt=Math.floor(ct*bt.height);f===void 0&&(f=g(wt,Wt));const Ft=A?g(wt,Wt):f;return Ft.width=wt,Ft.height=Wt,Ft.getContext("2d").drawImage(T,0,0,wt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+wt+"x"+Wt+")."),Ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function x(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,A,Z,ct,bt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let wt=A;if(A===i.RED&&(Z===i.FLOAT&&(wt=i.R32F),Z===i.HALF_FLOAT&&(wt=i.R16F),Z===i.UNSIGNED_BYTE&&(wt=i.R8)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(wt=i.R8UI),Z===i.UNSIGNED_SHORT&&(wt=i.R16UI),Z===i.UNSIGNED_INT&&(wt=i.R32UI),Z===i.BYTE&&(wt=i.R8I),Z===i.SHORT&&(wt=i.R16I),Z===i.INT&&(wt=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(wt=i.RG32F),Z===i.HALF_FLOAT&&(wt=i.RG16F),Z===i.UNSIGNED_BYTE&&(wt=i.RG8)),A===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(wt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(wt=i.RG16UI),Z===i.UNSIGNED_INT&&(wt=i.RG32UI),Z===i.BYTE&&(wt=i.RG8I),Z===i.SHORT&&(wt=i.RG16I),Z===i.INT&&(wt=i.RG32I)),A===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(wt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(wt=i.RGB16UI),Z===i.UNSIGNED_INT&&(wt=i.RGB32UI),Z===i.BYTE&&(wt=i.RGB8I),Z===i.SHORT&&(wt=i.RGB16I),Z===i.INT&&(wt=i.RGB32I)),A===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(wt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(wt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(wt=i.RGBA32UI),Z===i.BYTE&&(wt=i.RGBA8I),Z===i.SHORT&&(wt=i.RGBA16I),Z===i.INT&&(wt=i.RGBA32I)),A===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(wt=i.RGB9_E5),A===i.RGBA){const Wt=bt?na:Me.getTransfer(ct);Z===i.FLOAT&&(wt=i.RGBA32F),Z===i.HALF_FLOAT&&(wt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(wt=Wt===we?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(wt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(wt=i.RGB5_A1)}return(wt===i.R16F||wt===i.R32F||wt===i.RG16F||wt===i.RG32F||wt===i.RGBA16F||wt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),wt}function M(T,A){let Z;return T?A===null||A===cs||A===Ys?Z=i.DEPTH24_STENCIL8:A===jn?Z=i.DEPTH32F_STENCIL8:A===Rr&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===cs||A===Ys?Z=i.DEPTH_COMPONENT24:A===jn?Z=i.DEPTH_COMPONENT32F:A===Rr&&(Z=i.DEPTH_COMPONENT16),Z}function S(T,A){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==En&&T.minFilter!==wn?Math.log2(Math.max(A.width,A.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?A.mipmaps.length:1}function E(T){const A=T.target;A.removeEventListener("dispose",E),w(A),A.isVideoTexture&&u.delete(A)}function C(T){const A=T.target;A.removeEventListener("dispose",C),y(A)}function w(T){const A=n.get(T);if(A.__webglInit===void 0)return;const Z=T.source,ct=d.get(Z);if(ct){const bt=ct[A.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&b(T),Object.keys(ct).length===0&&d.delete(Z)}n.remove(T)}function b(T){const A=n.get(T);i.deleteTexture(A.__webglTexture);const Z=T.source,ct=d.get(Z);delete ct[A.__cacheKey],o.memory.textures--}function y(T){const A=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(A.__webglFramebuffer[ct]))for(let bt=0;bt<A.__webglFramebuffer[ct].length;bt++)i.deleteFramebuffer(A.__webglFramebuffer[ct][bt]);else i.deleteFramebuffer(A.__webglFramebuffer[ct]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[ct])}else{if(Array.isArray(A.__webglFramebuffer))for(let ct=0;ct<A.__webglFramebuffer.length;ct++)i.deleteFramebuffer(A.__webglFramebuffer[ct]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ct=0;ct<A.__webglColorRenderbuffer.length;ct++)A.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[ct]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=T.textures;for(let ct=0,bt=Z.length;ct<bt;ct++){const wt=n.get(Z[ct]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(Z[ct])}n.remove(T)}let R=0;function N(){R=0}function O(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function Y(T){const A=[];return A.push(T.wrapS),A.push(T.wrapT),A.push(T.wrapR||0),A.push(T.magFilter),A.push(T.minFilter),A.push(T.anisotropy),A.push(T.internalFormat),A.push(T.format),A.push(T.type),A.push(T.generateMipmaps),A.push(T.premultiplyAlpha),A.push(T.flipY),A.push(T.unpackAlignment),A.push(T.colorSpace),A.join()}function ut(T,A){const Z=n.get(T);if(T.isVideoTexture&&Bt(T),T.isRenderTargetTexture===!1&&T.version>0&&Z.__version!==T.version){const ct=T.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(Z,T,A);return}}e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function ot(T,A){const Z=n.get(T);if(T.version>0&&Z.__version!==T.version){V(Z,T,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function xt(T,A){const Z=n.get(T);if(T.version>0&&Z.__version!==T.version){V(Z,T,A);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function J(T,A){const Z=n.get(T);if(T.version>0&&Z.__version!==T.version){j(Z,T,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}const X={[Vo]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Fc]:i.MIRRORED_REPEAT},D={[En]:i.NEAREST,[o0]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},$={[u0]:i.NEVER,[g0]:i.ALWAYS,[f0]:i.LESS,[Nh]:i.LEQUAL,[h0]:i.EQUAL,[m0]:i.GEQUAL,[d0]:i.GREATER,[p0]:i.NOTEQUAL};function q(T,A){if(A.type===jn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===wn||A.magFilter===ga||A.magFilter===qr||A.magFilter===rs||A.minFilter===wn||A.minFilter===ga||A.minFilter===qr||A.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,X[A.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,X[A.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,X[A.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,D[A.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,D[A.minFilter]),A.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,$[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===En||A.minFilter!==qr&&A.minFilter!==rs||A.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function at(T,A){let Z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,A.addEventListener("dispose",E));const ct=A.source;let bt=d.get(ct);bt===void 0&&(bt={},d.set(ct,bt));const wt=Y(A);if(wt!==T.__cacheKey){bt[wt]===void 0&&(bt[wt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),bt[wt].usedTimes++;const Wt=bt[T.__cacheKey];Wt!==void 0&&(bt[T.__cacheKey].usedTimes--,Wt.usedTimes===0&&b(A)),T.__cacheKey=wt,T.__webglTexture=bt[wt].texture}return Z}function V(T,A,Z){let ct=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ct=i.TEXTURE_3D);const bt=at(T,A),wt=A.source;e.bindTexture(ct,T.__webglTexture,i.TEXTURE0+Z);const Wt=n.get(wt);if(wt.version!==Wt.__version||bt===!0){e.activeTexture(i.TEXTURE0+Z);const Ft=Me.getPrimaries(Me.workingColorSpace),zt=A.colorSpace===fi?null:Me.getPrimaries(A.colorSpace),W=A.colorSpace===fi||Ft===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,W);let G=v(A.image,!1,s.maxTextureSize);G=Kt(A,G);const it=r.convert(A.format,A.colorSpace),yt=r.convert(A.type);let ft=_(A.internalFormat,it,yt,A.colorSpace,A.isVideoTexture);q(ct,A);let dt;const U=A.mipmaps,rt=A.isVideoTexture!==!0,Et=Wt.__version===void 0||bt===!0,F=wt.dataReady,st=S(A,G);if(A.isDepthTexture)ft=M(A.format===Ks,A.type),Et&&(rt?e.texStorage2D(i.TEXTURE_2D,1,ft,G.width,G.height):e.texImage2D(i.TEXTURE_2D,0,ft,G.width,G.height,0,it,yt,null));else if(A.isDataTexture)if(U.length>0){rt&&Et&&e.texStorage2D(i.TEXTURE_2D,st,ft,U[0].width,U[0].height);for(let ht=0,vt=U.length;ht<vt;ht++)dt=U[ht],rt?F&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,dt.width,dt.height,it,yt,dt.data):e.texImage2D(i.TEXTURE_2D,ht,ft,dt.width,dt.height,0,it,yt,dt.data);A.generateMipmaps=!1}else rt?(Et&&e.texStorage2D(i.TEXTURE_2D,st,ft,G.width,G.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,it,yt,G.data)):e.texImage2D(i.TEXTURE_2D,0,ft,G.width,G.height,0,it,yt,G.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){rt&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,ft,U[0].width,U[0].height,G.depth);for(let ht=0,vt=U.length;ht<vt;ht++)if(dt=U[ht],A.format!==Dn)if(it!==null)if(rt){if(F)if(A.layerUpdates.size>0){const Tt=rf(dt.width,dt.height,A.format,A.type);for(const K of A.layerUpdates){const pt=dt.data.subarray(K*Tt/dt.data.BYTES_PER_ELEMENT,(K+1)*Tt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,K,dt.width,dt.height,1,it,pt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,dt.width,dt.height,G.depth,it,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,ft,dt.width,dt.height,G.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,dt.width,dt.height,G.depth,it,yt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,ft,dt.width,dt.height,G.depth,0,it,yt,dt.data)}else{rt&&Et&&e.texStorage2D(i.TEXTURE_2D,st,ft,U[0].width,U[0].height);for(let ht=0,vt=U.length;ht<vt;ht++)dt=U[ht],A.format!==Dn?it!==null?rt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,dt.width,dt.height,it,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,ft,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?F&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,dt.width,dt.height,it,yt,dt.data):e.texImage2D(i.TEXTURE_2D,ht,ft,dt.width,dt.height,0,it,yt,dt.data)}else if(A.isDataArrayTexture)if(rt){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,st,ft,G.width,G.height,G.depth),F)if(A.layerUpdates.size>0){const ht=rf(G.width,G.height,A.format,A.type);for(const vt of A.layerUpdates){const Tt=G.data.subarray(vt*ht/G.data.BYTES_PER_ELEMENT,(vt+1)*ht/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,G.width,G.height,1,it,yt,Tt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,it,yt,G.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,G.width,G.height,G.depth,0,it,yt,G.data);else if(A.isData3DTexture)rt?(Et&&e.texStorage3D(i.TEXTURE_3D,st,ft,G.width,G.height,G.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,it,yt,G.data)):e.texImage3D(i.TEXTURE_3D,0,ft,G.width,G.height,G.depth,0,it,yt,G.data);else if(A.isFramebufferTexture){if(Et)if(rt)e.texStorage2D(i.TEXTURE_2D,st,ft,G.width,G.height);else{let ht=G.width,vt=G.height;for(let Tt=0;Tt<st;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,ft,ht,vt,0,it,yt,null),ht>>=1,vt>>=1}}else if(U.length>0){if(rt&&Et){const ht=Xt(U[0]);e.texStorage2D(i.TEXTURE_2D,st,ft,ht.width,ht.height)}for(let ht=0,vt=U.length;ht<vt;ht++)dt=U[ht],rt?F&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,it,yt,dt):e.texImage2D(i.TEXTURE_2D,ht,ft,it,yt,dt);A.generateMipmaps=!1}else if(rt){if(Et){const ht=Xt(G);e.texStorage2D(i.TEXTURE_2D,st,ft,ht.width,ht.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it,yt,G)}else e.texImage2D(i.TEXTURE_2D,0,ft,it,yt,G);m(A)&&p(ct),Wt.__version=wt.version,A.onUpdate&&A.onUpdate(A)}T.__version=A.version}function j(T,A,Z){if(A.image.length!==6)return;const ct=at(T,A),bt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+Z);const wt=n.get(bt);if(bt.version!==wt.__version||ct===!0){e.activeTexture(i.TEXTURE0+Z);const Wt=Me.getPrimaries(Me.workingColorSpace),Ft=A.colorSpace===fi?null:Me.getPrimaries(A.colorSpace),zt=A.colorSpace===fi||Wt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const W=A.isCompressedTexture||A.image[0].isCompressedTexture,G=A.image[0]&&A.image[0].isDataTexture,it=[];for(let vt=0;vt<6;vt++)!W&&!G?it[vt]=v(A.image[vt],!0,s.maxCubemapSize):it[vt]=G?A.image[vt].image:A.image[vt],it[vt]=Kt(A,it[vt]);const yt=it[0],ft=r.convert(A.format,A.colorSpace),dt=r.convert(A.type),U=_(A.internalFormat,ft,dt,A.colorSpace),rt=A.isVideoTexture!==!0,Et=wt.__version===void 0||ct===!0,F=bt.dataReady;let st=S(A,yt);q(i.TEXTURE_CUBE_MAP,A);let ht;if(W){rt&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,st,U,yt.width,yt.height);for(let vt=0;vt<6;vt++){ht=it[vt].mipmaps;for(let Tt=0;Tt<ht.length;Tt++){const K=ht[Tt];A.format!==Dn?ft!==null?rt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt,0,0,K.width,K.height,ft,K.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt,U,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt,0,0,K.width,K.height,ft,dt,K.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt,U,K.width,K.height,0,ft,dt,K.data)}}}else{if(ht=A.mipmaps,rt&&Et){ht.length>0&&st++;const vt=Xt(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,st,U,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(G){rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,it[vt].width,it[vt].height,ft,dt,it[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,U,it[vt].width,it[vt].height,0,ft,dt,it[vt].data);for(let Tt=0;Tt<ht.length;Tt++){const pt=ht[Tt].image[vt].image;rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt+1,0,0,pt.width,pt.height,ft,dt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt+1,U,pt.width,pt.height,0,ft,dt,pt.data)}}else{rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ft,dt,it[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,U,ft,dt,it[vt]);for(let Tt=0;Tt<ht.length;Tt++){const K=ht[Tt];rt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt+1,0,0,ft,dt,K.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt+1,U,ft,dt,K.image[vt])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),wt.__version=bt.version,A.onUpdate&&A.onUpdate(A)}T.__version=A.version}function mt(T,A,Z,ct,bt,wt){const Wt=r.convert(Z.format,Z.colorSpace),Ft=r.convert(Z.type),zt=_(Z.internalFormat,Wt,Ft,Z.colorSpace),W=n.get(A),G=n.get(Z);if(G.__renderTarget=A,!W.__hasExternalTextures){const it=Math.max(1,A.width>>wt),yt=Math.max(1,A.height>>wt);bt===i.TEXTURE_3D||bt===i.TEXTURE_2D_ARRAY?e.texImage3D(bt,wt,zt,it,yt,A.depth,0,Wt,Ft,null):e.texImage2D(bt,wt,zt,it,yt,0,Wt,Ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Jt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,bt,G.__webglTexture,0,Gt(A)):(bt===i.TEXTURE_2D||bt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,bt,G.__webglTexture,wt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function H(T,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),A.depthBuffer){const ct=A.depthTexture,bt=ct&&ct.isDepthTexture?ct.type:null,wt=M(A.stencilBuffer,bt),Wt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=Gt(A);Jt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,wt,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,wt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,wt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Wt,i.RENDERBUFFER,T)}else{const ct=A.textures;for(let bt=0;bt<ct.length;bt++){const wt=ct[bt],Wt=r.convert(wt.format,wt.colorSpace),Ft=r.convert(wt.type),zt=_(wt.internalFormat,Wt,Ft,wt.colorSpace),W=Gt(A);Z&&Jt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,W,zt,A.width,A.height):Jt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,W,zt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,zt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(T,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(A.depthTexture);ct.__renderTarget=A,(!ct.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ut(A.depthTexture,0);const bt=ct.__webglTexture,wt=Gt(A);if(A.depthTexture.format===ks)Jt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0);else if(A.depthTexture.format===Ks)Jt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function lt(T){const A=n.get(T),Z=T.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==T.depthTexture){const ct=T.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ct){const bt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ct.removeEventListener("dispose",bt)};ct.addEventListener("dispose",bt),A.__depthDisposeCallback=bt}A.__boundDepthTexture=ct}if(T.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Q(A.__webglFramebuffer,T)}else if(Z){A.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ct]),A.__webglDepthbuffer[ct]===void 0)A.__webglDepthbuffer[ct]=i.createRenderbuffer(),H(A.__webglDepthbuffer[ct],T,!1);else{const bt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=A.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,wt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),H(A.__webglDepthbuffer,T,!1);else{const ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(T,A,Z){const ct=n.get(T);A!==void 0&&mt(ct.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&lt(T)}function Nt(T){const A=T.texture,Z=n.get(T),ct=n.get(A);T.addEventListener("dispose",C);const bt=T.textures,wt=T.isWebGLCubeRenderTarget===!0,Wt=bt.length>1;if(Wt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=A.version,o.memory.textures++),wt){Z.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Ft]=[];for(let zt=0;zt<A.mipmaps.length;zt++)Z.__webglFramebuffer[Ft][zt]=i.createFramebuffer()}else Z.__webglFramebuffer[Ft]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ft=0;Ft<A.mipmaps.length;Ft++)Z.__webglFramebuffer[Ft]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Wt)for(let Ft=0,zt=bt.length;Ft<zt;Ft++){const W=n.get(bt[Ft]);W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Jt(T)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ft=0;Ft<bt.length;Ft++){const zt=bt[Ft];Z.__webglColorRenderbuffer[Ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Ft]);const W=r.convert(zt.format,zt.colorSpace),G=r.convert(zt.type),it=_(zt.internalFormat,W,G,zt.colorSpace,T.isXRRenderTarget===!0),yt=Gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,it,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),H(Z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(wt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),q(i.TEXTURE_CUBE_MAP,A);for(let Ft=0;Ft<6;Ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)mt(Z.__webglFramebuffer[Ft][zt],T,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,zt);else mt(Z.__webglFramebuffer[Ft],T,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);m(A)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Wt){for(let Ft=0,zt=bt.length;Ft<zt;Ft++){const W=bt[Ft],G=n.get(W);e.bindTexture(i.TEXTURE_2D,G.__webglTexture),q(i.TEXTURE_2D,W),mt(Z.__webglFramebuffer,T,W,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,0),m(W)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Ft=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ft,ct.__webglTexture),q(Ft,A),A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)mt(Z.__webglFramebuffer[zt],T,A,i.COLOR_ATTACHMENT0,Ft,zt);else mt(Z.__webglFramebuffer,T,A,i.COLOR_ATTACHMENT0,Ft,0);m(A)&&p(Ft),e.unbindTexture()}T.depthBuffer&&lt(T)}function et(T){const A=T.textures;for(let Z=0,ct=A.length;Z<ct;Z++){const bt=A[Z];if(m(bt)){const wt=x(T),Wt=n.get(bt).__webglTexture;e.bindTexture(wt,Wt),p(wt),e.unbindTexture()}}}const _t=[],B=[];function nt(T){if(T.samples>0){if(Jt(T)===!1){const A=T.textures,Z=T.width,ct=T.height;let bt=i.COLOR_BUFFER_BIT;const wt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Wt=n.get(T),Ft=A.length>1;if(Ft)for(let zt=0;zt<A.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let zt=0;zt<A.length;zt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(bt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(bt|=i.STENCIL_BUFFER_BIT)),Ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[zt]);const W=n.get(A[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,W,0)}i.blitFramebuffer(0,0,Z,ct,0,0,Z,ct,bt,i.NEAREST),c===!0&&(_t.length=0,B.length=0,_t.push(i.COLOR_ATTACHMENT0+zt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_t.push(wt),B.push(wt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ft)for(let zt=0;zt<A.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[zt]);const W=n.get(A[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,W,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const A=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Gt(T){return Math.min(s.maxSamples,T.samples)}function Jt(T){const A=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(T){const A=o.render.frame;u.get(T)!==A&&(u.set(T,A),T.update())}function Kt(T,A){const Z=T.colorSpace,ct=T.format,bt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||Z!==Js&&Z!==fi&&(Me.getTransfer(Z)===we?(ct!==Dn||bt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=ut,this.setTexture2DArray=ot,this.setTexture3D=xt,this.setTextureCube=J,this.rebindTextures=At,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Jt}function N_(i,t){function e(n,s=fi){let r;const o=Me.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.BYTE;if(n===Ch)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===cs)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Ur)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Lh)return i.RGB;if(n===Dn)return i.RGBA;if(n===Ih)return i.LUMINANCE;if(n===Dh)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===zh)return i.RG;if(n===El)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===Po||n===Lo||n===Io||n===Do)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===kc||n===Bc||n===Hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Vc||n===Wc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gc||n===Vc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xc||n===qc||n===Yc||n===Kc||n===$c||n===jc||n===Zc||n===Jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zo||n===rl||n===ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zo)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uh||n===al||n===cl||n===ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class F_ extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class os extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`;class H_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:k_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G_ extends Qs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const v=new H_,m=e.getContextAttributes();let p=null,x=null;const _=[],M=[],S=new Zt;let E=null;const C=new Mn;C.viewport=new Ie;const w=new Mn;w.viewport=new Ie;const b=[C,w],y=new F_;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=_[V];return j===void 0&&(j=new Va,_[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=_[V];return j===void 0&&(j=new Va,_[V]=j),j.getGripSpace()},this.getHand=function(V){let j=_[V];return j===void 0&&(j=new Va,_[V]=j),j.getHandSpace()};function O(V){const j=M.indexOf(V.inputSource);if(j===-1)return;const mt=_[j];mt!==void 0&&(mt.update(V.inputSource,V.frame,l||o),mt.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ut);for(let V=0;V<_.length;V++){const j=M[V];j!==null&&(M[V]=null,_[V].disconnect(j))}R=null,N=null,v.reset(),t.setRenderTarget(p),h=null,d=null,f=null,s=null,x=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ut),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new ls(h.framebufferWidth,h.framebufferHeight,{format:Dn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,mt=null,H=null;m.depth&&(H=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Ks:ks,mt=m.stencil?Ys:cs);const Q={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(Q),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ls(d.textureWidth,d.textureHeight,{format:Dn,type:Jn,depthTexture:new jh(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ut(V){for(let j=0;j<V.removed.length;j++){const mt=V.removed[j],H=M.indexOf(mt);H>=0&&(M[H]=null,_[H].disconnect(mt))}for(let j=0;j<V.added.length;j++){const mt=V.added[j];let H=M.indexOf(mt);if(H===-1){for(let lt=0;lt<_.length;lt++)if(lt>=M.length){M.push(mt),H=lt;break}else if(M[lt]===null){M[lt]=mt,H=lt;break}if(H===-1)break}const Q=_[H];Q&&Q.connect(mt)}}const ot=new tt,xt=new tt;function J(V,j,mt){ot.setFromMatrixPosition(j.matrixWorld),xt.setFromMatrixPosition(mt.matrixWorld);const H=ot.distanceTo(xt),Q=j.projectionMatrix.elements,lt=mt.projectionMatrix.elements,At=Q[14]/(Q[10]-1),Nt=Q[14]/(Q[10]+1),et=(Q[9]+1)/Q[5],_t=(Q[9]-1)/Q[5],B=(Q[8]-1)/Q[0],nt=(lt[8]+1)/lt[0],Gt=At*B,Jt=At*nt,Bt=H/(-B+nt),Kt=Bt*-B;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Kt),V.translateZ(Bt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Q[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Xt=At+Bt,T=Nt+Bt,A=Gt-Kt,Z=Jt+(H-Kt),ct=et*Nt/T*Xt,bt=_t*Nt/T*Xt;V.projectionMatrix.makePerspective(A,Z,ct,bt,Xt,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function X(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let j=V.near,mt=V.far;v.texture!==null&&(v.depthNear>0&&(j=v.depthNear),v.depthFar>0&&(mt=v.depthFar)),y.near=w.near=C.near=j,y.far=w.far=C.far=mt,(R!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,N=y.far),C.layers.mask=V.layers.mask|2,w.layers.mask=V.layers.mask|4,y.layers.mask=C.layers.mask|w.layers.mask;const H=V.parent,Q=y.cameras;X(y,H);for(let lt=0;lt<Q.length;lt++)X(Q[lt],H);Q.length===2?J(y,C,w):y.projectionMatrix.copy(C.projectionMatrix),D(V,y,H)};function D(V,j,mt){mt===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(mt.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let $=null;function q(V,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const mt=u.views;h!==null&&(t.setRenderTargetFramebuffer(x,h.framebuffer),t.setRenderTarget(x));let H=!1;mt.length!==y.cameras.length&&(y.cameras.length=0,H=!0);for(let lt=0;lt<mt.length;lt++){const At=mt[lt];let Nt=null;if(h!==null)Nt=h.getViewport(At);else{const _t=f.getViewSubImage(d,At);Nt=_t.viewport,lt===0&&(t.setRenderTargetTextures(x,_t.colorTexture,d.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(x))}let et=b[lt];et===void 0&&(et=new Mn,et.layers.enable(lt),et.viewport=new Ie,b[lt]=et),et.matrix.fromArray(At.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(At.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),lt===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),H===!0&&y.cameras.push(et)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const lt=f.getDepthInformation(mt[0]);lt&&lt.isValid&&lt.texture&&v.init(t,lt,s.renderState)}}for(let mt=0;mt<_.length;mt++){const H=M[mt],Q=_[mt];H!==null&&Q!==void 0&&Q.update(H,j,l||o)}$&&$(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const at=new Kh;at.setAnimationLoop(q),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}}const $i=new Tn,V_=new ye;function W_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,$i.copy(M),$i.x*=-1,$i.y*=-1,$i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler($i)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){const M=_.program;n.uniformBlockBinding(x,M)}function l(x,_){let M=s[x.id];M===void 0&&(g(x),M=u(x),s[x.id]=M,x.addEventListener("dispose",m));const S=_.program;n.updateUBOMapping(x,S);const E=t.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function u(x){const _=f();x.__bindingPointIndex=_;const M=i.createBuffer(),S=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=s[x.id],M=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,C=M.length;E<C;E++){const w=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,y=w.length;b<y;b++){const R=w[b];if(h(R,E,b,S)===!0){const N=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let ut=0;ut<O.length;ut++){const ot=O[ut],xt=v(ot);typeof ot=="number"||typeof ot=="boolean"?(R.__data[0]=ot,i.bufferSubData(i.UNIFORM_BUFFER,N+Y,R.__data)):ot.isMatrix3?(R.__data[0]=ot.elements[0],R.__data[1]=ot.elements[1],R.__data[2]=ot.elements[2],R.__data[3]=0,R.__data[4]=ot.elements[3],R.__data[5]=ot.elements[4],R.__data[6]=ot.elements[5],R.__data[7]=0,R.__data[8]=ot.elements[6],R.__data[9]=ot.elements[7],R.__data[10]=ot.elements[8],R.__data[11]=0):(ot.toArray(R.__data,Y),Y+=xt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,_,M,S){const E=x.value,C=_+"_"+M;if(S[C]===void 0)return typeof E=="number"||typeof E=="boolean"?S[C]=E:S[C]=E.clone(),!0;{const w=S[C];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return S[C]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function g(x){const _=x.uniforms;let M=0;const S=16;for(let C=0,w=_.length;C<w;C++){const b=Array.isArray(_[C])?_[C]:[_[C]];for(let y=0,R=b.length;y<R;y++){const N=b[y],O=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,ut=O.length;Y<ut;Y++){const ot=O[Y],xt=v(ot),J=M%S,X=J%xt.boundary,D=J+X;M+=X,D!==0&&S-D<xt.storage&&(M+=S-D),N.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=xt.storage}}}const E=M%S;return E>0&&(M+=S-E),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class q_{constructor(t={}){const{canvas:e=D0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const x=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=Ni,this.toneMappingExposure=1;const M=this;let S=!1,E=0,C=0,w=null,b=-1,y=null;const R=new Ie,N=new Ie;let O=null;const Y=new ce(0);let ut=0,ot=e.width,xt=e.height,J=1,X=null,D=null;const $=new Ie(0,0,ot,xt),q=new Ie(0,0,ot,xt);let at=!1;const V=new Cl;let j=!1,mt=!1;const H=new ye,Q=new ye,lt=new tt,At=new Ie,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function _t(){return w===null?J:1}let B=n;function nt(I,L){return e.getContext(I,L)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",K,!1),B===null){const L="webgl2";if(B=nt(L,I),B===null)throw nt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Gt,Jt,Bt,Kt,Xt,T,A,Z,ct,bt,wt,Wt,Ft,zt,W,G,it,yt,ft,dt,U,rt,Et,F;function st(){Gt=new Zx(B),Gt.init(),rt=new N_(B,Gt),Jt=new Xx(B,Gt,t,rt),Bt=new D_(B,Gt),Jt.reverseDepthBuffer&&d&&Bt.buffers.depth.setReversed(!0),Kt=new tv(B),Xt=new v_,T=new U_(B,Gt,Bt,Xt,Jt,rt,Kt),A=new Yx(M),Z=new jx(M),ct=new am(B),Et=new Vx(B,ct),bt=new Jx(B,ct,Kt,Et),wt=new nv(B,bt,ct,Kt),ft=new ev(B,Jt,T),G=new qx(Xt),Wt=new x_(M,A,Z,Gt,Jt,Et,G),Ft=new W_(M,Xt),zt=new M_,W=new T_(Gt),yt=new Gx(M,A,Z,Bt,wt,h,c),it=new L_(M,wt,Jt),F=new X_(B,Kt,Jt,Bt),dt=new Wx(B,Gt,Kt),U=new Qx(B,Gt,Kt),Kt.programs=Wt.programs,M.capabilities=Jt,M.extensions=Gt,M.properties=Xt,M.renderLists=zt,M.shadowMap=it,M.state=Bt,M.info=Kt}st();const ht=new G_(M,B);this.xr=ht,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=Gt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Gt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(I){I!==void 0&&(J=I,this.setSize(ot,xt,!1))},this.getSize=function(I){return I.set(ot,xt)},this.setSize=function(I,L,P=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=I,xt=L,e.width=Math.floor(I*J),e.height=Math.floor(L*J),P===!0&&(e.style.width=I+"px",e.style.height=L+"px"),this.setViewport(0,0,I,L)},this.getDrawingBufferSize=function(I){return I.set(ot*J,xt*J).floor()},this.setDrawingBufferSize=function(I,L,P){ot=I,xt=L,J=P,e.width=Math.floor(I*P),e.height=Math.floor(L*P),this.setViewport(0,0,I,L)},this.getCurrentViewport=function(I){return I.copy(R)},this.getViewport=function(I){return I.copy($)},this.setViewport=function(I,L,P,k){I.isVector4?$.set(I.x,I.y,I.z,I.w):$.set(I,L,P,k),Bt.viewport(R.copy($).multiplyScalar(J).round())},this.getScissor=function(I){return I.copy(q)},this.setScissor=function(I,L,P,k){I.isVector4?q.set(I.x,I.y,I.z,I.w):q.set(I,L,P,k),Bt.scissor(N.copy(q).multiplyScalar(J).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(I){Bt.setScissorTest(at=I)},this.setOpaqueSort=function(I){X=I},this.setTransparentSort=function(I){D=I},this.getClearColor=function(I){return I.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(I=!0,L=!0,P=!0){let k=0;if(I){let z=!1;if(w!==null){const gt=w.texture.format;z=gt===Tl||gt===El||gt===wl}if(z){const gt=w.texture.type,St=gt===Jn||gt===cs||gt===Rr||gt===Ys||gt===yl||gt===Sl,Ct=yt.getClearColor(),Dt=yt.getClearAlpha(),Ot=Ct.r,Ht=Ct.g,Ut=Ct.b;St?(g[0]=Ot,g[1]=Ht,g[2]=Ut,g[3]=Dt,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Ot,v[1]=Ht,v[2]=Ut,v[3]=Dt,B.clearBufferiv(B.COLOR,0,v))}else k|=B.COLOR_BUFFER_BIT}L&&(k|=B.DEPTH_BUFFER_BIT),P&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",K,!1),zt.dispose(),W.dispose(),Xt.dispose(),A.dispose(),Z.dispose(),wt.dispose(),Et.dispose(),F.dispose(),Wt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",le),ht.removeEventListener("sessionend",se),ae.stop()};function vt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const I=Kt.autoReset,L=it.enabled,P=it.autoUpdate,k=it.needsUpdate,z=it.type;st(),Kt.autoReset=I,it.enabled=L,it.autoUpdate=P,it.needsUpdate=k,it.type=z}function K(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function pt(I){const L=I.target;L.removeEventListener("dispose",pt),Rt(L)}function Rt(I){It(I),Xt.remove(I)}function It(I){const L=Xt.get(I).programs;L!==void 0&&(L.forEach(function(P){Wt.releaseProgram(P)}),I.isShaderMaterial&&Wt.releaseShaderCache(I))}this.renderBufferDirect=function(I,L,P,k,z,gt){L===null&&(L=Nt);const St=z.isMesh&&z.matrixWorld.determinant()<0,Ct=nn(I,L,P,k,z);Bt.setMaterial(k,St);let Dt=P.index,Ot=1;if(k.wireframe===!0){if(Dt=bt.getWireframeAttribute(P),Dt===void 0)return;Ot=2}const Ht=P.drawRange,Ut=P.attributes.position;let te=Ht.start*Ot,Mt=(Ht.start+Ht.count)*Ot;gt!==null&&(te=Math.max(te,gt.start*Ot),Mt=Math.min(Mt,(gt.start+gt.count)*Ot)),Dt!==null?(te=Math.max(te,0),Mt=Math.min(Mt,Dt.count)):Ut!=null&&(te=Math.max(te,0),Mt=Math.min(Mt,Ut.count));const ne=Mt-te;if(ne<0||ne===1/0)return;Et.setup(z,k,Ct,P,Dt);let oe,ie=dt;if(Dt!==null&&(oe=ct.get(Dt),ie=U,ie.setIndex(oe)),z.isMesh)k.wireframe===!0?(Bt.setLineWidth(k.wireframeLinewidth*_t()),ie.setMode(B.LINES)):ie.setMode(B.TRIANGLES);else if(z.isLine){let jt=k.linewidth;jt===void 0&&(jt=1),Bt.setLineWidth(jt*_t()),z.isLineSegments?ie.setMode(B.LINES):z.isLineLoop?ie.setMode(B.LINE_LOOP):ie.setMode(B.LINE_STRIP)}else z.isPoints?ie.setMode(B.POINTS):z.isSprite&&ie.setMode(B.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ie.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))ie.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const jt=z._multiDrawStarts,xe=z._multiDrawCounts,Vt=z._multiDrawCount,Se=Dt?ct.get(Dt).bytesPerElement:1,Oe=Xt.get(k).currentProgram.getUniforms();for(let Pe=0;Pe<Vt;Pe++)Oe.setValue(B,"_gl_DrawID",Pe),ie.render(jt[Pe]/Se,xe[Pe])}else if(z.isInstancedMesh)ie.renderInstances(te,ne,z.count);else if(P.isInstancedBufferGeometry){const jt=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,xe=Math.min(P.instanceCount,jt);ie.renderInstances(te,ne,xe)}else ie.render(te,ne)};function Lt(I,L,P){I.transparent===!0&&I.side===yn&&I.forceSinglePass===!1?(I.side=mn,I.needsUpdate=!0,Te(I,L,P),I.side=ki,I.needsUpdate=!0,Te(I,L,P),I.side=yn):Te(I,L,P)}this.compile=function(I,L,P=null){P===null&&(P=I),p=W.get(P),p.init(L),_.push(p),P.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),I!==P&&I.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const k=new Set;return I.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const gt=z.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){const Ct=gt[St];Lt(Ct,P,z),k.add(Ct)}else Lt(gt,P,z),k.add(gt)}),_.pop(),p=null,k},this.compileAsync=function(I,L,P=null){const k=this.compile(I,L,P);return new Promise(z=>{function gt(){if(k.forEach(function(St){Xt.get(St).currentProgram.isReady()&&k.delete(St)}),k.size===0){z(I);return}setTimeout(gt,10)}Gt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let qt=null;function Yt(I){qt&&qt(I)}function le(){ae.stop()}function se(){ae.start()}const ae=new Kh;ae.setAnimationLoop(Yt),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(I){qt=I,ht.setAnimationLoop(I),I===null?ae.stop():ae.start()},ht.addEventListener("sessionstart",le),ht.addEventListener("sessionend",se),this.render=function(I,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(L),L=ht.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,L,w),p=W.get(I,_.length),p.init(L),_.push(p),Q.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),V.setFromProjectionMatrix(Q),mt=this.localClippingEnabled,j=G.init(this.clippingPlanes,mt),m=zt.get(I,x.length),m.init(),x.push(m),ht.enabled===!0&&ht.isPresenting===!0){const gt=M.xr.getDepthSensingMesh();gt!==null&&pe(gt,L,-1/0,M.sortObjects)}pe(I,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(X,D),et=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,et&&yt.addToRenderList(m,I),this.info.render.frame++,j===!0&&G.beginShadows();const P=p.state.shadowsArray;it.render(P,I,L),j===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,z=m.transmissive;if(p.setupLights(),L.isArrayCamera){const gt=L.cameras;if(z.length>0)for(let St=0,Ct=gt.length;St<Ct;St++){const Dt=gt[St];Qt(k,z,I,Dt)}et&&yt.render(I);for(let St=0,Ct=gt.length;St<Ct;St++){const Dt=gt[St];he(m,I,Dt,Dt.viewport)}}else z.length>0&&Qt(k,z,I,L),et&&yt.render(I),he(m,I,L);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(M,I,L),Et.resetDefaultState(),b=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],j===!0&&G.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function pe(I,L,P,k){if(I.visible===!1)return;if(I.layers.test(L.layers)){if(I.isGroup)P=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(L);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||V.intersectsSprite(I)){k&&At.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Q);const St=wt.update(I),Ct=I.material;Ct.visible&&m.push(I,St,Ct,P,At.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||V.intersectsObject(I))){const St=wt.update(I),Ct=I.material;if(k&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),At.copy(I.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),At.copy(St.boundingSphere.center)),At.applyMatrix4(I.matrixWorld).applyMatrix4(Q)),Array.isArray(Ct)){const Dt=St.groups;for(let Ot=0,Ht=Dt.length;Ot<Ht;Ot++){const Ut=Dt[Ot],te=Ct[Ut.materialIndex];te&&te.visible&&m.push(I,St,te,P,At.z,Ut)}}else Ct.visible&&m.push(I,St,Ct,P,At.z,null)}}const gt=I.children;for(let St=0,Ct=gt.length;St<Ct;St++)pe(gt[St],L,P,k)}function he(I,L,P,k){const z=I.opaque,gt=I.transmissive,St=I.transparent;p.setupLightsView(P),j===!0&&G.setGlobalState(M.clippingPlanes,P),k&&Bt.viewport(R.copy(k)),z.length>0&&ge(z,L,P),gt.length>0&&ge(gt,L,P),St.length>0&&ge(St,L,P),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Qt(I,L,P,k){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new ls(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Ur:Jn,minFilter:rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const gt=p.state.transmissionRenderTarget[k.id],St=k.viewport||R;gt.setSize(St.z,St.w);const Ct=M.getRenderTarget();M.setRenderTarget(gt),M.getClearColor(Y),ut=M.getClearAlpha(),ut<1&&M.setClearColor(16777215,.5),M.clear(),et&&yt.render(P);const Dt=M.toneMapping;M.toneMapping=Ni;const Ot=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),j===!0&&G.setGlobalState(M.clippingPlanes,k),ge(I,P,k),T.updateMultisampleRenderTarget(gt),T.updateRenderTargetMipmap(gt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Ut=0,te=L.length;Ut<te;Ut++){const Mt=L[Ut],ne=Mt.object,oe=Mt.geometry,ie=Mt.material,jt=Mt.group;if(ie.side===yn&&ne.layers.test(k.layers)){const xe=ie.side;ie.side=mn,ie.needsUpdate=!0,re(ne,P,k,oe,ie,jt),ie.side=xe,ie.needsUpdate=!0,Ht=!0}}Ht===!0&&(T.updateMultisampleRenderTarget(gt),T.updateRenderTargetMipmap(gt))}M.setRenderTarget(Ct),M.setClearColor(Y,ut),Ot!==void 0&&(k.viewport=Ot),M.toneMapping=Dt}function ge(I,L,P){const k=L.isScene===!0?L.overrideMaterial:null;for(let z=0,gt=I.length;z<gt;z++){const St=I[z],Ct=St.object,Dt=St.geometry,Ot=k===null?St.material:k,Ht=St.group;Ct.layers.test(P.layers)&&re(Ct,L,P,Dt,Ot,Ht)}}function re(I,L,P,k,z,gt){I.onBeforeRender(M,L,P,k,z,gt),I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),z.onBeforeRender(M,L,P,k,I,gt),z.transparent===!0&&z.side===yn&&z.forceSinglePass===!1?(z.side=mn,z.needsUpdate=!0,M.renderBufferDirect(P,L,k,z,I,gt),z.side=ki,z.needsUpdate=!0,M.renderBufferDirect(P,L,k,z,I,gt),z.side=yn):M.renderBufferDirect(P,L,k,z,I,gt),I.onAfterRender(M,L,P,k,z,gt)}function Te(I,L,P){L.isScene!==!0&&(L=Nt);const k=Xt.get(I),z=p.state.lights,gt=p.state.shadowsArray,St=z.state.version,Ct=Wt.getParameters(I,z.state,gt,L,P),Dt=Wt.getProgramCacheKey(Ct);let Ot=k.programs;k.environment=I.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(I.isMeshStandardMaterial?Z:A).get(I.envMap||k.environment),k.envMapRotation=k.environment!==null&&I.envMap===null?L.environmentRotation:I.envMapRotation,Ot===void 0&&(I.addEventListener("dispose",pt),Ot=new Map,k.programs=Ot);let Ht=Ot.get(Dt);if(Ht!==void 0){if(k.currentProgram===Ht&&k.lightsStateVersion===St)return Fe(I,Ct),Ht}else Ct.uniforms=Wt.getUniforms(I),I.onBeforeCompile(Ct,M),Ht=Wt.acquireProgram(Ct,Dt),Ot.set(Dt,Ht),k.uniforms=Ct.uniforms;const Ut=k.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ut.clippingPlanes=G.uniform),Fe(I,Ct),k.needsLights=hn(I),k.lightsStateVersion=St,k.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=Ht,k.uniformsList=null,Ht}function en(I){if(I.uniformsList===null){const L=I.currentProgram.getUniforms();I.uniformsList=Uo.seqWithValue(L.seq,I.uniforms)}return I.uniformsList}function Fe(I,L){const P=Xt.get(I);P.outputColorSpace=L.outputColorSpace,P.batching=L.batching,P.batchingColor=L.batchingColor,P.instancing=L.instancing,P.instancingColor=L.instancingColor,P.instancingMorph=L.instancingMorph,P.skinning=L.skinning,P.morphTargets=L.morphTargets,P.morphNormals=L.morphNormals,P.morphColors=L.morphColors,P.morphTargetsCount=L.morphTargetsCount,P.numClippingPlanes=L.numClippingPlanes,P.numIntersection=L.numClipIntersection,P.vertexAlphas=L.vertexAlphas,P.vertexTangents=L.vertexTangents,P.toneMapping=L.toneMapping}function nn(I,L,P,k,z){L.isScene!==!0&&(L=Nt),T.resetTextureUnits();const gt=L.fog,St=k.isMeshStandardMaterial?L.environment:null,Ct=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Js,Dt=(k.isMeshStandardMaterial?Z:A).get(k.envMap||St),Ot=k.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,Ht=!!P.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ut=!!P.morphAttributes.position,te=!!P.morphAttributes.normal,Mt=!!P.morphAttributes.color;let ne=Ni;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ne=M.toneMapping);const oe=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ie=oe!==void 0?oe.length:0,jt=Xt.get(k),xe=p.state.lights;if(j===!0&&(mt===!0||I!==y)){const An=I===y&&k.id===b;G.setState(k,I,An)}let Vt=!1;k.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==xe.state.version||jt.outputColorSpace!==Ct||z.isBatchedMesh&&jt.batching===!1||!z.isBatchedMesh&&jt.batching===!0||z.isBatchedMesh&&jt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&jt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&jt.instancing===!1||!z.isInstancedMesh&&jt.instancing===!0||z.isSkinnedMesh&&jt.skinning===!1||!z.isSkinnedMesh&&jt.skinning===!0||z.isInstancedMesh&&jt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&jt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&jt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&jt.instancingMorph===!1&&z.morphTexture!==null||jt.envMap!==Dt||k.fog===!0&&jt.fog!==gt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==G.numPlanes||jt.numIntersection!==G.numIntersection)||jt.vertexAlphas!==Ot||jt.vertexTangents!==Ht||jt.morphTargets!==Ut||jt.morphNormals!==te||jt.morphColors!==Mt||jt.toneMapping!==ne||jt.morphTargetsCount!==ie)&&(Vt=!0):(Vt=!0,jt.__version=k.version);let Se=jt.currentProgram;Vt===!0&&(Se=Te(k,L,z));let Oe=!1,Pe=!1,ze=!1;const be=Se.getUniforms(),Gn=jt.uniforms;if(Bt.useProgram(Se.program)&&(Oe=!0,Pe=!0,ze=!0),k.id!==b&&(b=k.id,Pe=!0),Oe||y!==I){Bt.buffers.depth.getReversed()?(H.copy(I.projectionMatrix),U0(H),N0(H),be.setValue(B,"projectionMatrix",H)):be.setValue(B,"projectionMatrix",I.projectionMatrix),be.setValue(B,"viewMatrix",I.matrixWorldInverse);const Mi=be.map.cameraPosition;Mi!==void 0&&Mi.setValue(B,lt.setFromMatrixPosition(I.matrixWorld)),Jt.logarithmicDepthBuffer&&be.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&be.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,Pe=!0,ze=!0)}if(z.isSkinnedMesh){be.setOptional(B,z,"bindMatrix"),be.setOptional(B,z,"bindMatrixInverse");const An=z.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),be.setValue(B,"boneTexture",An.boneTexture,T))}z.isBatchedMesh&&(be.setOptional(B,z,"batchingTexture"),be.setValue(B,"batchingTexture",z._matricesTexture,T),be.setOptional(B,z,"batchingIdTexture"),be.setValue(B,"batchingIdTexture",z._indirectTexture,T),be.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&be.setValue(B,"batchingColorTexture",z._colorsTexture,T));const ir=P.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&ft.update(z,P,Se),(Pe||jt.receiveShadow!==z.receiveShadow)&&(jt.receiveShadow=z.receiveShadow,be.setValue(B,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gn.envMap.value=Dt,Gn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Gn.envMapIntensity.value=L.environmentIntensity),Pe&&(be.setValue(B,"toneMappingExposure",M.toneMappingExposure),jt.needsLights&&We(Gn,ze),gt&&k.fog===!0&&Ft.refreshFogUniforms(Gn,gt),Ft.refreshMaterialUniforms(Gn,k,J,xt,p.state.transmissionRenderTarget[I.id]),Uo.upload(B,en(jt),Gn,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Uo.upload(B,en(jt),Gn,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&be.setValue(B,"center",z.center),be.setValue(B,"modelViewMatrix",z.modelViewMatrix),be.setValue(B,"normalMatrix",z.normalMatrix),be.setValue(B,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const An=k.uniformsGroups;for(let Mi=0,yi=An.length;Mi<yi;Mi++){const Hl=An[Mi];F.update(Hl,Se),F.bind(Hl,Se)}}return Se}function We(I,L){I.ambientLightColor.needsUpdate=L,I.lightProbe.needsUpdate=L,I.directionalLights.needsUpdate=L,I.directionalLightShadows.needsUpdate=L,I.pointLights.needsUpdate=L,I.pointLightShadows.needsUpdate=L,I.spotLights.needsUpdate=L,I.spotLightShadows.needsUpdate=L,I.rectAreaLights.needsUpdate=L,I.hemisphereLights.needsUpdate=L}function hn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,L,P){Xt.get(I.texture).__webglTexture=L,Xt.get(I.depthTexture).__webglTexture=P;const k=Xt.get(I);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=P===void 0,k.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,L){const P=Xt.get(I);P.__webglFramebuffer=L,P.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(I,L=0,P=0){w=I,E=L,C=P;let k=!0,z=null,gt=!1,St=!1;if(I){const Dt=Xt.get(I);if(Dt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(B.FRAMEBUFFER,null),k=!1;else if(Dt.__webglFramebuffer===void 0)T.setupRenderTarget(I);else if(Dt.__hasExternalTextures)T.rebindTextures(I,Xt.get(I.texture).__webglTexture,Xt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ut=I.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&Xt.has(Ut)&&(I.width!==Ut.image.width||I.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(I)}}const Ot=I.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(St=!0);const Ht=Xt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ht[L])?z=Ht[L][P]:z=Ht[L],gt=!0):I.samples>0&&T.useMultisampledRTT(I)===!1?z=Xt.get(I).__webglMultisampledFramebuffer:Array.isArray(Ht)?z=Ht[P]:z=Ht,R.copy(I.viewport),N.copy(I.scissor),O=I.scissorTest}else R.copy($).multiplyScalar(J).floor(),N.copy(q).multiplyScalar(J).floor(),O=at;if(Bt.bindFramebuffer(B.FRAMEBUFFER,z)&&k&&Bt.drawBuffers(I,z),Bt.viewport(R),Bt.scissor(N),Bt.setScissorTest(O),gt){const Dt=Xt.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+L,Dt.__webglTexture,P)}else if(St){const Dt=Xt.get(I.texture),Ot=L||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,P||0,Ot)}b=-1},this.readRenderTargetPixels=function(I,L,P,k,z,gt,St){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Xt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){Bt.bindFramebuffer(B.FRAMEBUFFER,Ct);try{const Dt=I.texture,Ot=Dt.format,Ht=Dt.type;if(!Jt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=I.width-k&&P>=0&&P<=I.height-z&&B.readPixels(L,P,k,z,rt.convert(Ot),rt.convert(Ht),gt)}finally{const Dt=w!==null?Xt.get(w).__webglFramebuffer:null;Bt.bindFramebuffer(B.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(I,L,P,k,z,gt,St){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Xt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&St!==void 0&&(Ct=Ct[St]),Ct){const Dt=I.texture,Ot=Dt.format,Ht=Dt.type;if(!Jt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=I.width-k&&P>=0&&P<=I.height-z){Bt.bindFramebuffer(B.FRAMEBUFFER,Ct);const Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,gt.byteLength,B.STREAM_READ),B.readPixels(L,P,k,z,rt.convert(Ot),rt.convert(Ht),0);const te=w!==null?Xt.get(w).__webglFramebuffer:null;Bt.bindFramebuffer(B.FRAMEBUFFER,te);const Mt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await z0(B,Mt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,gt),B.deleteBuffer(Ut),B.deleteSync(Mt),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,L=null,P=0){I.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,I=arguments[1]);const k=Math.pow(2,-P),z=Math.floor(I.image.width*k),gt=Math.floor(I.image.height*k),St=L!==null?L.x:0,Ct=L!==null?L.y:0;T.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,P,0,0,St,Ct,z,gt),Bt.unbindTexture()},this.copyTextureToTexture=function(I,L,P=null,k=null,z=0){I.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,I=arguments[1],L=arguments[2],z=arguments[3]||0,P=null);let gt,St,Ct,Dt,Ot,Ht,Ut,te,Mt;const ne=I.isCompressedTexture?I.mipmaps[z]:I.image;P!==null?(gt=P.max.x-P.min.x,St=P.max.y-P.min.y,Ct=P.isBox3?P.max.z-P.min.z:1,Dt=P.min.x,Ot=P.min.y,Ht=P.isBox3?P.min.z:0):(gt=ne.width,St=ne.height,Ct=ne.depth||1,Dt=0,Ot=0,Ht=0),k!==null?(Ut=k.x,te=k.y,Mt=k.z):(Ut=0,te=0,Mt=0);const oe=rt.convert(L.format),ie=rt.convert(L.type);let jt;L.isData3DTexture?(T.setTexture3D(L,0),jt=B.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),jt=B.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),jt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,L.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,L.unpackAlignment);const xe=B.getParameter(B.UNPACK_ROW_LENGTH),Vt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Se=B.getParameter(B.UNPACK_SKIP_PIXELS),Oe=B.getParameter(B.UNPACK_SKIP_ROWS),Pe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ne.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ne.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ot),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ht);const ze=I.isDataArrayTexture||I.isData3DTexture,be=L.isDataArrayTexture||L.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Gn=Xt.get(I),ir=Xt.get(L),An=Xt.get(Gn.__renderTarget),Mi=Xt.get(ir.__renderTarget);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,An.__webglFramebuffer),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let yi=0;yi<Ct;yi++)ze&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.get(I).__webglTexture,z,Ht+yi),I.isDepthTexture?(be&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xt.get(L).__webglTexture,z,Mt+yi),B.blitFramebuffer(Dt,Ot,gt,St,Ut,te,gt,St,B.DEPTH_BUFFER_BIT,B.NEAREST)):be?B.copyTexSubImage3D(jt,z,Ut,te,Mt+yi,Dt,Ot,gt,St):B.copyTexSubImage2D(jt,z,Ut,te,Mt+yi,Dt,Ot,gt,St);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else be?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(jt,z,Ut,te,Mt,gt,St,Ct,oe,ie,ne.data):L.isCompressedArrayTexture?B.compressedTexSubImage3D(jt,z,Ut,te,Mt,gt,St,Ct,oe,ne.data):B.texSubImage3D(jt,z,Ut,te,Mt,gt,St,Ct,oe,ie,ne):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,z,Ut,te,gt,St,oe,ie,ne.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,z,Ut,te,ne.width,ne.height,oe,ne.data):B.texSubImage2D(B.TEXTURE_2D,z,Ut,te,gt,St,oe,ie,ne);B.pixelStorei(B.UNPACK_ROW_LENGTH,xe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Se),B.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pe),z===0&&L.generateMipmaps&&B.generateMipmap(jt),Bt.unbindTexture()},this.copyTextureToTexture3D=function(I,L,P=null,k=null,z=0){return I.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),P=arguments[0]||null,k=arguments[1]||null,I=arguments[2],L=arguments[3],z=arguments[4]||0),pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,L,P,k,z)},this.initRenderTarget=function(I){Xt.get(I).__webglFramebuffer===void 0&&T.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?T.setTextureCube(I,0):I.isData3DTexture?T.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?T.setTexture2DArray(I,0):T.setTexture2D(I,0),Bt.unbindTexture()},this.resetState=function(){E=0,C=0,w=null,Bt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}class Y_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pl extends ln{constructor(t=null,e=1,n=1,s,r,o,a,c,l=En,u=En,f,d){super(null,o,a,c,l,u,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new ye,of=new ye,po=[],af=new Gi,K_=new ye,lr=new De,ur=new Vi;class $_ extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,K_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),af.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(af)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),ur.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),of.multiplyMatrices(n,Cs),lr.matrixWorld=of,lr.raycast(t,po);for(let o=0,a=po.length;o<a;o++){const c=po[o];c.instanceId=r,c.object=this,e.push(c)}po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pl(new Float32Array(s*this.count),s,this.count,bl,jn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ll extends ln{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,h=(o-u)/d;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Zt:new tt);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new tt,s=[],r=[],o=[],a=new tt,c=new ye;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new tt)}r[0]=new tt,o[0]=new tt;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ze(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(Ze(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Il extends Qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Zt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,h=l-this.aY;c=d*u-h*f+this.aX,l=d*f+h*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class j_ extends Il{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+f)+(c-a)/f;d*=u,h*=u,s(o,a,d,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const mo=new tt,Wa=new Dl,Xa=new Dl,qa=new Dl;class Z_ extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new tt){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(mo.subVectors(s[0],s[1]).add(s[0]),l=mo);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=mo),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Wa.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,g,v,m),Xa.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,g,v,m),qa.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),Xa.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),qa.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return n.set(Wa.calc(c),Xa.calc(c),qa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new tt().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cf(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function J_(i,t){const e=1-i;return e*e*t}function Q_(i,t){return 2*(1-i)*i*t}function t1(i,t){return i*i*t}function br(i,t,e,n){return J_(i,t)+Q_(i,e)+t1(i,n)}function e1(i,t){const e=1-i;return e*e*e*t}function n1(i,t){const e=1-i;return 3*e*e*i*t}function i1(i,t){return 3*(1-i)*i*i*t}function s1(i,t){return i*i*i*t}function wr(i,t,e,n,s){return e1(i,t)+n1(i,e)+i1(i,n)+s1(i,s)}class ed extends Qn{constructor(t=new Zt,e=new Zt,n=new Zt,s=new Zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Zt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class r1 extends Qn{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,s.x,r.x,o.x,a.x),wr(t,s.y,r.y,o.y,a.y),wr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nd extends Qn{constructor(t=new Zt,e=new Zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Zt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o1 extends Qn{constructor(t=new tt,e=new tt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class id extends Qn{constructor(t=new Zt,e=new Zt,n=new Zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Zt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(br(t,s.x,r.x,o.x),br(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class a1 extends Qn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(br(t,s.x,r.x,o.x),br(t,s.y,r.y,o.y),br(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sd extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Zt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(cf(a,c.x,l.x,u.x,f.x),cf(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Zt().fromArray(s))}return this}}var lf=Object.freeze({__proto__:null,ArcCurve:j_,CatmullRomCurve3:Z_,CubicBezierCurve:ed,CubicBezierCurve3:r1,EllipseCurve:Il,LineCurve:nd,LineCurve3:o1,QuadraticBezierCurve:id,QuadraticBezierCurve3:a1,SplineCurve:sd});class c1 extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lf[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new lf[s.type]().fromJSON(s))}return this}}class l1 extends c1{constructor(t){super(),this.type="Path",this.currentPoint=new Zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new nd(this.currentPoint.clone(),new Zt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new id(this.currentPoint.clone(),new Zt(t,e),new Zt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new ed(this.currentPoint.clone(),new Zt(t,e),new Zt(n,s),new Zt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new sd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Il(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sa extends Ve{constructor(t=[new Zt(0,-.5),new Zt(.5,0),new Zt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ze(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,f=new tt,d=new Zt,h=new tt,g=new tt,v=new tt;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,h.x=p*1,h.y=-m,h.z=p*0,v.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),c.push(h.x,h.y,h.z),v.copy(g)}for(let x=0;x<=e;x++){const _=n+x*u*s,M=Math.sin(_),S=Math.cos(_);for(let E=0;E<=t.length-1;E++){f.x=t[E].x*M,f.y=t[E].y,f.z=t[E].x*S,o.push(f.x,f.y,f.z),d.x=x/e,d.y=E/(t.length-1),a.push(d.x,d.y);const C=c[3*E+0]*M,w=c[3*E+1],b=c[3*E+0]*S;l.push(C,w,b)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){const M=_+x*t.length,S=M,E=M+t.length,C=M+t.length+1,w=M+1;r.push(S,E,w),r.push(C,w,E)}this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("uv",new _e(a,2)),this.setAttribute("normal",new _e(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.points,t.segments,t.phiStart,t.phiLength)}}class zl extends sa{constructor(t=1,e=1,n=4,s=8){const r=new l1;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new zl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ul extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new tt,u=new Zt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const h=n+f/e*s;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Hn extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let g=0;const v=[],m=n/2;let p=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(h,2));function x(){const M=new tt,S=new tt;let E=0;const C=(e-t)/n;for(let w=0;w<=r;w++){const b=[],y=w/r,R=y*(e-t)+t;for(let N=0;N<=s;N++){const O=N/s,Y=O*c+a,ut=Math.sin(Y),ot=Math.cos(Y);S.x=R*ut,S.y=-y*n+m,S.z=R*ot,f.push(S.x,S.y,S.z),M.set(ut,C,ot).normalize(),d.push(M.x,M.y,M.z),h.push(O,1-y),b.push(g++)}v.push(b)}for(let w=0;w<s;w++)for(let b=0;b<r;b++){const y=v[b][w],R=v[b+1][w],N=v[b+1][w+1],O=v[b][w+1];(t>0||b!==0)&&(u.push(y,R,O),E+=3),(e>0||b!==r-1)&&(u.push(R,N,O),E+=3)}l.addGroup(p,E,0),p+=E}function _(M){const S=g,E=new Zt,C=new tt;let w=0;const b=M===!0?t:e,y=M===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*y,0),d.push(0,y,0),h.push(.5,.5),g++;const R=g;for(let N=0;N<=s;N++){const Y=N/s*c+a,ut=Math.cos(Y),ot=Math.sin(Y);C.x=b*ot,C.y=m*y,C.z=b*ut,f.push(C.x,C.y,C.z),d.push(0,y,0),E.x=ut*.5+.5,E.y=ot*.5*y+.5,h.push(E.x,E.y),g++}for(let N=0;N<s;N++){const O=S+N,Y=R+N;M===!0?u.push(Y,Y+1,O):u.push(Y+1,Y,O),w+=3}l.addGroup(p,w,M===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ra extends Hn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ra(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oa extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new tt,M=new tt,S=new tt;for(let E=0;E<e.length;E+=3)h(e[E+0],_),h(e[E+1],M),h(e[E+2],S),c(_,M,S,x)}function c(x,_,M,S){const E=S+1,C=[];for(let w=0;w<=E;w++){C[w]=[];const b=x.clone().lerp(M,w/E),y=_.clone().lerp(M,w/E),R=E-w;for(let N=0;N<=R;N++)N===0&&w===E?C[w][N]=b:C[w][N]=b.clone().lerp(y,N/R)}for(let w=0;w<E;w++)for(let b=0;b<2*(E-w)-1;b++){const y=Math.floor(b/2);b%2===0?(d(C[w][y+1]),d(C[w+1][y]),d(C[w][y])):(d(C[w][y+1]),d(C[w+1][y+1]),d(C[w+1][y]))}}function l(x){const _=new tt;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(x),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function u(){const x=new tt;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const M=m(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;o.push(M,1-S)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const _=o[x+0],M=o[x+2],S=o[x+4],E=Math.max(_,M,S),C=Math.min(_,M,S);E>.9&&C<.1&&(_<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),S<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function h(x,_){const M=x*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const x=new tt,_=new tt,M=new tt,S=new tt,E=new Zt,C=new Zt,w=new Zt;for(let b=0,y=0;b<r.length;b+=9,y+=6){x.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),E.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),w.set(o[y+4],o[y+5]),S.copy(x).add(_).add(M).divideScalar(3);const R=m(S);v(E,y+0,x,R),v(C,y+2,_,R),v(w,y+4,M,R)}}function v(x,_,M,S){S<0&&x.x===1&&(o[_]=x.x-1),M.x===0&&M.z===0&&(o[_]=S/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.vertices,t.indices,t.radius,t.details)}}class js extends oa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new js(t.radius,t.detail)}}class Nr extends oa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nr(t.radius,t.detail)}}class gi extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new tt,d=new tt,h=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let M=0;p===0&&o===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){const E=S/e;f.x=-t*Math.cos(s+E*r)*Math.sin(o+_*a),f.y=t*Math.cos(o+_*a),f.z=t*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(E+M,1-_),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=u[p][x+1],M=u[p][x],S=u[p+1][x],E=u[p+1][x+1];(p!==0||o>0)&&h.push(_,M,E),(p!==n-1||c<Math.PI)&&h.push(M,S,E)}this.setIndex(h),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class u1 extends hs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class f1 extends hs{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aa extends hs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rd extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class h1 extends rd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ya=new ye,uf=new tt,ff=new tt;class d1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cl,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(uf),ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ff),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class p1 extends d1{constructor(){super(new $h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m1 extends rd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new p1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class g1 extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);const me=Object.freeze({eightBody:1447452,eightDisc:16513779,eightInk:1447452,eightRim:10274047,cueBody:16776692,cueDots:14165548,blobShadow:795668,flagCloth:15217199,flagDisc:16513779,pinWhite:16513779,pinBand:15217199,cupInside:1780254,cupLiner:16513779,guideWhite:16777215,guideHalo:1057818,guideWarn:16747050,eightArrow:16765503,surfaceOutline:3037738,chalk:4030425,poolBalls:Object.freeze([16763196,2976991,15022389,8081353,16747050,2006618,9317178])}),hf=Object.freeze({1:Object.freeze({name:"Greenside",rough:5216828,fairwayLight:8177237,fairwayDark:7125066,fringe:7782994,greenLight:9427046,greenDark:8703836,sand:15914907,sandLip:14268530,ice:14218239,waterShallow:6080736,waterDeep:3051460,waterFoam:15268863,waterGlint:12579839,pondBed:2916230,railSide:10115630,railTop:12745283,railSights:16051152,cushionNose:2059082,hedge:4164154,wallStone:14275267,soilTop:8015407,soilBottom:5123868,skyTop:12576511,skyBottom:15267839,reeds:8032058,wood:11040586,hemiSky:15135487,hemiGround:8022600,hemiIntensity:1.4,sun:16773596,sunIntensity:2.7,sunElevationDeg:50}),2:Object.freeze({name:"Lakeside",rough:6198336,fairwayLight:9684306,fairwayDark:8697930,fringe:9224270,greenLight:10737251,greenDark:9948506,sand:15978388,sandLip:14264422,ice:14218239,waterShallow:5224150,waterDeep:2386088,waterFoam:15268863,waterGlint:16770764,pondBed:2781050,railSide:7028516,railTop:9198132,railSights:14792794,cushionNose:2055762,hedge:4620346,wallStone:14207152,soilTop:8015407,soilBottom:5123868,skyTop:16766888,skyBottom:16772048,reeds:8032058,wood:11040586,hemiSky:16770764,hemiGround:5917242,hemiIntensity:1.8,sun:16767400,sunIntensity:3.2,sunElevationDeg:32})}),od=i=>hf[i]||hf[1],Yo=30,x1=Lr.degToRad(225),v1=90;function _1(){try{const n=typeof location<"u"?/[?&]tier=([012])\b/.exec(location.search):null;if(n)return+n[1]}catch{}const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=typeof navigator<"u"?navigator.deviceMemory:void 0,e=typeof devicePixelRatio=="number"?devicePixelRatio:1;return i&&typeof t=="number"&&t<=3?0:!i&&e>=1.5?2:1}function M1(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext&&e.getContext("2d");if(!n)return null;const s=c=>"#"+c.toString(16).padStart(6,"0"),r=n.createLinearGradient(0,0,0,e.height);r.addColorStop(0,s(i)),r.addColorStop(1,s(t)),n.fillStyle=r,n.fillRect(0,0,e.width,e.height);const o=n.createRadialGradient(0,0,0,0,0,e.height*.9);o.addColorStop(0,"rgba(255,255,255,0.35)"),o.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=o,n.fillRect(0,0,e.width,e.height);const a=new Ll(e);return a.colorSpace=Qe,a.generateMipmaps=!1,a.minFilter=wn,a}function y1(i){const t=_1(),e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=typeof devicePixelRatio=="number"&&devicePixelRatio>0?devicePixelRatio:1,s=Math.min(n,t===0?1:t===2?2:e?1.5:2),r=Math.min(1,n);let o=null;try{o=new q_({antialias:t>0,powerPreference:"high-performance",stencil:!1,alpha:!1})}catch(q){o=null,typeof window<"u"&&window.document&&window.document.body&&console.error(q)}if(o){o.outputColorSpace=Qe,o.toneMapping=Eh,o.toneMappingExposure=1,o.shadowMap.enabled=t>=1,o.shadowMap.type=_l,o.shadowMap.autoUpdate=!1,o.setPixelRatio(s);const q=o.domElement;q.style.display="block",q.style.width="100%",q.style.height="100%",q.style.touchAction="none",q.style.outline="none",i&&i.appendChild&&i.appendChild(q)}const a=new Y_,c=new Mn(Yo,16/9,.5,800);c.position.set(0,30,17),c.lookAt(0,0,0);const l=new h1(16777215,7829367,1.4);l.position.set(0,1,0);const u=new m1(16777215,2.7);if(a.add(l,u,u.target),t>=1){u.castShadow=!0;const q=t===2?2048:1024;u.shadow.mapSize.set(q,q),u.shadow.bias=-6e-4,u.shadow.normalBias=.03,u.shadow.intensity=.55}const f={w:1,h:1,portrait:!1,zero:!0},d=new Set,h=new tt,g=new Gi(new tt(-4,-2,-16),new tt(30,4,4));let v=null,m=2,p=Lr.degToRad(50);const x={renderer:o,scene:a,camera:c,tier:t,size:f,container:i,round:1,yaw:0,hemi:l,sun:u,pixelRatio:s,shadows:!!(o&&t>=1),setRound:y,setShadowBounds:w,invalidateShadows:b,onResize:O,render:D,dispose:$},_=new ye,M=new tt,S=new tt,E=new tt(0,1,0);function C(){const q=x.yaw+x1;if(h.set(Math.sin(q)*Math.cos(p),Math.sin(p),Math.cos(q)*Math.cos(p)),g.getCenter(S),u.position.copy(S).addScaledVector(h,v1),u.target.position.copy(S),u.updateMatrixWorld(),u.target.updateMatrixWorld(),!u.castShadow)return;_.lookAt(u.position,S,E),_.setPosition(u.position),_.invert();let at=1/0,V=-1/0,j=1/0,mt=-1/0,H=1/0,Q=-1/0;for(let At=0;At<8;At++)M.set(At&1?g.max.x:g.min.x,At&2?g.max.y:g.min.y,At&4?g.max.z:g.min.z),M.applyMatrix4(_),M.x<at&&(at=M.x),M.x>V&&(V=M.x),M.y<j&&(j=M.y),M.y>mt&&(mt=M.y),M.z<H&&(H=M.z),M.z>Q&&(Q=M.z);const lt=u.shadow.camera;lt.left=at-1,lt.right=V+1,lt.bottom=j-1,lt.top=mt+1,lt.near=Math.max(.5,-Q-4),lt.far=-H+4,lt.updateProjectionMatrix(),b()}function w(q){if(!q||!q.bounds)return;const at=q.bounds;let V=0,j=0;const mt=q.grid;if(mt&&mt.height)for(let H=0;H<mt.height.length;H++){const Q=mt.height[H];Q<V&&(V=Q),Q>j&&(j=Q)}g.min.set(at.minx-5,V-2.5,at.minz-5),g.max.set(at.maxx+5,j+5,at.maxz+5),C()}function b(){m=2}function y(q){const at=od(q);x.round=q===2?2:1,l.color.setHex(at.hemiSky),l.groundColor.setHex(at.hemiGround),l.intensity=at.hemiIntensity,u.color.setHex(at.sun),u.intensity=at.sunIntensity,p=Lr.degToRad(at.sunElevationDeg),v&&v.dispose(),v=M1(at.skyTop,at.skyBottom),a.background=v||new ce(at.skyBottom),C()}function R(){let q=0,at=0;if(i&&(q=i.clientWidth||0,at=i.clientHeight||0,(!q||!at)&&i.getBoundingClientRect)){const V=i.getBoundingClientRect();q=q||V.width||0,at=at||V.height||0}return{w:q>0&&Number.isFinite(q)?Math.round(q):0,h:at>0&&Number.isFinite(at)?Math.round(at):0}}function N(q){const at=R(),V=!(at.w>0&&at.h>0),j=V?1:at.w,mt=V?1:at.h;if(!q&&j===f.w&&mt===f.h&&V===f.zero)return;const H=f.portrait;f.w=j,f.h=mt,f.zero=V,f.portrait=!V&&mt>j,x.yaw=f.portrait?-Math.PI/2:0,c.aspect=V?16/9:j/mt,c.updateProjectionMatrix(),o&&o.setSize(j,mt,!1),(q||H!==f.portrait)&&C(),d.forEach(Q=>{try{Q(f)}catch(lt){console.error(lt)}})}function O(q){return d.add(q),()=>d.delete(q)}const Y=()=>N(!1);let ut=null;typeof ResizeObserver=="function"&&i&&i.nodeType===1&&(ut=new ResizeObserver(Y),ut.observe(i)),typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",Y),window.addEventListener("orientationchange",Y));function ot(q){q=Math.round(q*4)/4,!(!o||q===x.pixelRatio)&&(x.pixelRatio=q,o.setPixelRatio(q),o.setSize(f.w,f.h,!1))}const xt=S1({cap:s,min:r,get:()=>x.pixelRatio,set:ot,onSlowStart(){o&&o.shadowMap.enabled&&(o.shadowMap.enabled=!1,u.castShadow=!1,x.shadows=!1)}});let J=0;const X=typeof performance<"u"?performance:Date;function D(){if(!o||f.zero)return;const q=X.now();J&&xt.frame((q-J)/1e3),J=q,m>0&&(o.shadowMap.enabled&&(o.shadowMap.needsUpdate=!0),m--),o.render(a,c)}function $(){if(d.clear(),ut&&ut.disconnect(),typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",Y),window.removeEventListener("orientationchange",Y)),v&&v.dispose(),u.shadow&&u.shadow.map&&u.shadow.map.dispose(),o){o.dispose();const q=o.domElement;q&&q.parentNode&&q.parentNode.removeChild(q)}}return N(!0),y(1),x}function S1({cap:i,min:t,get:e,set:n,onSlowStart:s=null}){const r={winT:0,winN:0,slowT:0,slowSum:0,fastT:0,age:0,checkT:0,checkN:0,checked:!1,probing:!1,probeT:0,probeSum:0,prevPr:0,prevAvg:0,capped:!1},o=new Map;function a(c){if(!(c>0)||c>.25||(r.age+=c,!r.checked&&r.age>1&&(r.checkT+=c,r.checkN++,r.checkT>=3&&(r.checked=!0,r.checkN/r.checkT<40&&s&&s())),r.winT+=c,r.winN++,r.winT<.5))return;const l=r.winT/r.winN,u=r.winT;if(r.winT=0,r.winN=0,r.probing){r.probeT+=u,r.probeSum+=l*u,r.probeT>=1.5&&(r.probing=!1,r.probeSum/r.probeT>r.prevAvg*.92&&(n(r.prevPr),o.set(r.prevPr,Math.max(0,(o.get(r.prevPr)||1)-1)),r.capped=!0));return}if(r.capped)if(l<.0172)r.capped=!1;else return;l>.018?(r.slowT+=u,r.slowSum+=l*u,r.fastT=0):(r.slowT=0,r.slowSum=0),l<.0172?r.fastT+=u:r.fastT=0;const f=e();if(r.slowT>=1&&f>t)o.set(f,(o.get(f)||0)+1),r.prevPr=f,r.prevAvg=r.slowSum/r.slowT,n(Math.max(t,f-.25)),r.probing=!0,r.probeT=0,r.probeSum=0,r.slowT=0,r.slowSum=0,r.fastT=0;else if(r.fastT>=5&&f<i){const d=Math.min(i,f+.25);(o.get(d)||0)<2&&n(d),r.fastT=0}}return{frame:a,state:r}}const Ri=Lr.degToRad(60),Rs=Math.tan(Lr.degToRad(Yo/2)),ri=kt.R,b1=22,go=1.6,df=.8,Ka=2.6,xo=64,w1={top:76},pf=.3,mf=10,gf=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},E1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,on=(i,t)=>Number.isFinite(i)?i:t;function es(i,t,e){if(!i)return 0;const n=i.grid;if(!n||!n.height){const m=i.heightAt?i.heightAt(t,e):0;return Number.isFinite(m)?m:0}const s=n.cols,r=n.rows;let o=(t-n.x0)/n.cell,a=(e-n.z0)/n.cell;if(o!==o||a!==a)return 0;o=o<0?0:o>s-1.000001?s-1.000001:o,a=a<0?0:a>r-1.000001?r-1.000001:a;const c=o|0,l=a|0,u=o-c,f=a-l,d=n.height,h=l*s+c,g=d[h]+(d[h+1]-d[h])*u,v=d[h+s]+(d[h+s+1]-d[h+s])*u;return g+(v-g)*f}class ui{constructor(t){this.tx=0,this.ty=0,this.tz=0,this.d=t,this.valid=!1}}class vo{constructor(){this.v=0}}class T1{constructor(){this.x=new vo,this.y=new vo,this.z=new vo,this.d=new vo}}class A1{constructor(){this.x=0,this.z=0,this.has=!1,this.lastX=0,this.lastZ=0,this.vx=0,this.vz=0,this.fresh=!1}}class C1{constructor(){this.d=0,this.aspect=0,this.yaw=NaN,this.tx=NaN,this.ty=NaN,this.tz=NaN,this.dd=NaN}}class R1{constructor(){this.active=!1,this.t=0,this.from=new ui(60),this.to=new ui(30),this.resolve=null}}class P1{constructor(){this.dt=0,this.T=.25}}class L1{constructor(){this.x0=-1,this.x1=1,this.y0=-1,this.y1=1}}class I1{constructor(){this.top=w1.top,this.right=0,this.bottom=0,this.left=0}}class D1{constructor(){this.x0=0,this.x1=0,this.y0=0,this.y1=0}}function z1(i){const t=i.camera,e=new Mn(Yo,t.aspect,.1,4e3),n=new ui(40),s=new ui(40),r=new T1,o=new ui(60),a=new ui(30),c=new ui(30),l=new ui(30),u=new R1,f=new A1,d=new Float64Array(xo),h=new Float64Array(xo),g=new Float64Array(xo);let v=0;const m=new tt,p=new tt,x=new tt,_=new Tn,M={x:0,z:0};let S=null,E=0,C=0,w="idle",b=!1,y=!1,R=null,N=i.yaw||0;const O=new C1,Y=new I1,ut=new L1,ot=new ui(30),xt=new P1,J=(W,G)=>es(S,W,G),X=()=>Math.max(1,i.size.h||1),D=()=>Math.max(1,i.size.w||1);function $(){const W=D(),G=X(),it=Math.max(10,.03*Math.min(W,G));let yt=Y.left,ft=Y.right,dt=Y.top,U=Y.bottom;const rt=W*(1-pf)-2*it;if(yt+ft>rt){const F=Math.max(0,rt)/(yt+ft);yt*=F,ft*=F}const Et=G*(1-pf)-2*it;if(dt+U>Et){const F=Math.max(0,Et)/(dt+U);dt*=F,U*=F}return ut.x0=-1+2*(yt+it)/W,ut.x1=1-2*(ft+it)/W,ut.y1=1-2*(dt+it)/G,ut.y0=-1+2*(U+it)/G,ut}function q(W,G,it,yt,ft){const dt=Math.cos(Ri);W.position.set(G+Math.sin(N)*dt*ft,it+Math.sin(Ri)*ft,yt+Math.cos(N)*dt*ft),W.lookAt(G,it,yt),W.updateMatrixWorld(!0)}function at(){Number.isFinite(n.tx)||(n.tx=0),Number.isFinite(n.ty)||(n.ty=0),Number.isFinite(n.tz)||(n.tz=0),n.d>=.5||(n.d=Number.isFinite(n.d)?.5:40);const W=n.d,G=Math.cos(Ri);t.position.set(n.tx+Math.sin(N)*G*W,n.ty+Math.sin(Ri)*W,n.tz+Math.cos(N)*G*W),O.yaw!==N&&(_.set(-Ri,N,0,"YXZ"),t.quaternion.setFromEuler(_),O.yaw=N),t.updateMatrixWorld(!0),O.tx=n.tx,O.ty=n.ty,O.tz=n.tz,O.dd=n.d,(Math.abs(W-O.d)>O.d*.04||t.aspect!==O.aspect)&&(O.d=W,t.near=Math.max(.3,W*.28),t.far=W*3.2+90,t.updateProjectionMatrix(),O.aspect=t.aspect)}function V(){e.fov=Yo,e.aspect=t.aspect,e.near=.1,e.far=4e3,e.updateProjectionMatrix()}function j(W,G,it){v>=xo||!Number.isFinite(W)||!Number.isFinite(it)||(d[v]=W,h[v]=on(G,0),g[v]=it,v++)}const mt=new D1;function H(W,G,it,yt){q(e,W,G,it,yt),mt.x0=1/0,mt.x1=-1/0,mt.y0=1/0,mt.y1=-1/0;for(let ft=0;ft<v;ft++){if(m.set(d[ft],h[ft],g[ft]).applyMatrix4(e.matrixWorldInverse),m.z>-.2)return!1;m.applyMatrix4(e.projectionMatrix),m.x<mt.x0&&(mt.x0=m.x),m.x>mt.x1&&(mt.x1=m.x),m.y<mt.y0&&(mt.y0=m.y),m.y>mt.y1&&(mt.y1=m.y)}return!0}function Q(W,G,it,yt,ft){if(p.copy(W.position),x.set(G,it,.5).unproject(W).sub(p).normalize(),x.y>-1e-4)return!1;const dt=(yt-p.y)/x.y;return ft.tx=p.x+x.x*dt,ft.tz=p.z+x.z*dt,!0}function lt(W,G){if(V(),v===0)return G.tx=0,G.ty=0,G.tz=0,G.d=40,G;let it=0,yt=0,ft=0;for(let st=0;st<v;st++)it+=d[st],yt+=h[st],ft+=g[st];it/=v,yt/=v,ft/=v;const dt=W.x1-W.x0,U=W.y1-W.y0,rt=(W.x0+W.x1)/2,Et=(W.y0+W.y1)/2;let F=40;for(let st=0;st<3;st++){let ht=1,vt=1500;for(let K=0;K<30;K++)F=(ht+vt)/2,H(it,yt,ft,F)&&mt.x1-mt.x0<=dt&&mt.y1-mt.y0<=U?vt=F:ht=F;if(F=vt,!H(it,yt,ft,F))break;const Tt=l;Q(e,(mt.x0+mt.x1)/2-rt,(mt.y0+mt.y1)/2-Et,yt,Tt)&&(it=Tt.tx,ft=Tt.tz)}return G.tx=it,G.ty=yt,G.tz=ft,G.d=F,G}function At(W,G,it){return V(),H(G.tx,G.ty,G.tz,it)?mt.x0>=W.x0-1e-6&&mt.x1<=W.x1+1e-6&&mt.y0>=W.y0-1e-6&&mt.y1<=W.y1+1e-6:!1}const Nt=()=>X()*2*ri/(b1*2*Rs);function et(){if(!S)return;v=0;const W=S.bounds,G=S.ground&&S.ground.length?S.ground:null;if(G){const yt=Math.max(1,Math.ceil(G.length/40));for(let ft=0;ft<G.length;ft+=yt)j(G[ft].x,J(G[ft].x,G[ft].z),G[ft].z)}j(W.minx,J(W.minx,W.minz),W.minz),j(W.maxx,J(W.maxx,W.minz),W.minz),j(W.minx,J(W.minx,W.maxz),W.maxz),j(W.maxx,J(W.maxx,W.maxz),W.maxz);const it=S.cup;j(it.x,J(it.x,it.z)+Ka,it.z),lt($(),o)}function _t(W,G,it,yt,ft=0){for(let dt=0;dt<yt;dt++){const U=dt/yt*Math.PI*2,rt=W+Math.cos(U)*it,Et=G+Math.sin(U)*it;j(rt,J(rt,Et)+ft,Et)}}function B(W,G){if(!W||W.length<2)return;const it=W.length>>1,yt=Math.max(1,Math.ceil(it/G));for(let ft=0;ft<it;ft+=yt)j(W[2*ft],J(W[2*ft],W[2*ft+1]),W[2*ft+1]);j(W[2*it-2],J(W[2*it-2],W[2*it-1]),W[2*it-1])}function nt(W,G,it,yt){v=0;const ft=J(W,G);if(_t(W,G,it+ri*1.15,24,ri),_t(W,G,it,12,2*ri),j(W,ft+2*ri,G),j(W,ft,G),yt){const dt=J(yt.x,yt.z);j(yt.x,dt+2*ri,yt.z),_t(yt.x,yt.z,ri*1.1,6,ri)}}function Gt(W,G,it,yt,ft,dt){const U=$();nt(W,G,it,yt);const rt=v;if(ft(),lt(U,dt),S&&S.cup){const st=S.cup,ht=Math.sqrt((st.x-W)*(st.x-W)+(st.z-G)*(st.z-G));let vt=gf(18,8,ht);if(vt>0){const Tt=v;_t(st.x,st.z,kt.HOLE_R+.6,8,0),j(st.x,J(st.x,st.z)+Ka,st.z),lt(U,c),v=rt;let K=!1;for(let pt=0;pt<4&&!K;pt++,vt*=.5)Jt(l,dt,c,vt),K=At(U,l,l.d);K&&Z(dt,l),v=Tt}}const Et=S&&S.camera&&S.camera.zoom>0?S.camera.zoom:1;dt.d=Math.max(8,dt.d/Et);const F=Math.max(8,Nt());if(nt(W,G,it,yt),lt(U,c),c.d>F)return Z(dt,c),dt;if(dt.d>F&&(dt.d=F),!At(U,dt,dt.d)){const st=dt.tx,ht=dt.ty,vt=dt.tz;let Tt=!1;for(let K=1;K<=8;K++){const pt=K/8;if(l.tx=st+(c.tx-st)*pt,l.ty=ht+(c.ty-ht)*pt,l.tz=vt+(c.tz-vt)*pt,At(U,l,dt.d)){Tt=!0;break}}Tt?(dt.tx=l.tx,dt.ty=l.ty,dt.tz=l.tz):Z(dt,c)}return dt}function Jt(W,G,it,yt){W.tx=G.tx+(it.tx-G.tx)*yt,W.ty=G.ty+(it.ty-G.ty)*yt,W.tz=G.tz+(it.tz-G.tz)*yt,W.d=Math.exp(Math.log(G.d)+(Math.log(it.d)-Math.log(G.d))*yt)}function Bt(W){const G=S.eight,it=S.cup;let yt=it.x-G.x,ft=it.z-G.z;const dt=Math.sqrt(yt*yt+ft*ft)||1;yt/=dt,ft/=dt;const U=Math.min(14,dt),rt=S.placeR||4,Et=Math.min(.6*rt,2.5);return M.x=G.x-yt*Et,M.z=G.z-ft*Et,Gt(G.x,G.z,rt,M,()=>{for(let F=1;F<=4;F++){const st=G.x+yt*U*(F/4),ht=G.z+ft*U*(F/4);j(st,J(st,ht),ht)}},W)}function Kt(W,G){const it=W&&W.world,yt=it&&it.balls&&it.balls[1];if(!yt)return Bt(G);const ft=W.level&&W.level.placeR||it.placeR||4,dt=typeof W.guide=="function"?W.guide():null;let U=null;return W.intent&&Number.isFinite(W.intent.x)&&Number.isFinite(W.intent.z)&&(M.x=W.intent.x,M.z=W.intent.z,U=M),Gt(yt.x,yt.z,ft,U,()=>{dt&&dt.cue&&B(dt.cue.points,10),dt&&dt.eight&&B(dt.eight.points,14)},G)}function Xt(W){if(!S)return;const G=S.bounds,it=mf;W.tx=Math.min(G.maxx+it,Math.max(G.minx-it,on(W.tx,0))),W.tz=Math.min(G.maxz+it,Math.max(G.minz-it,on(W.tz,0))),W.d=Math.min(T(),Math.max(A(),on(W.d,40)))}const T=()=>Math.max(10,o.d*1.1),A=()=>Math.max(6,.6*(a.valid?a.d:o.d*.5));function Z(W,G){W.tx=G.tx,W.ty=G.ty,W.tz=G.tz,W.d=G.d}function ct(W){Z(n,W),Z(s,W),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,at()}function bt(){if(!u.active)return;u.active=!1,Z(n,u.to),Z(s,a.valid?a:u.to),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,w=b?"overview":"play",b&&Z(s,o);const W=u.resolve;u.resolve=null,W&&W()}i.onResize(()=>{const W=i.yaw||0,G=W!==N;if(N=W,at(),!!S){if(et(),u.active){Z(u.from,o),Bt(u.to),a.valid&&R&&(Kt(R,a),Z(u.to,a));return}R&&!y&&(Kt(R,a),a.valid=!0),b||w==="overview"?Z(s,o):w==="play"&&!y&&a.valid&&Z(s,a),Xt(s),G&&ct(s)}});const wt={get userMoved(){return y},set userMoved(W){y=!!W},get level(){return S},get mode(){return w},get overviewOn(){return b},setInsets(W){const G=U=>Number.isFinite(U)&&U>0?U:0,it=G(W&&W.top),yt=G(W&&W.right),ft=G(W&&W.bottom),dt=G(W&&W.left);if(!(it===Y.top&&yt===Y.right&&ft===Y.bottom&&dt===Y.left)&&(Y.top=it,Y.right=yt,Y.bottom=ft,Y.left=dt,!!S)){if(et(),u.active){a.valid&&R?(Kt(R,a),Z(u.to,a)):Bt(u.to);return}y||(R&&(Kt(R,a),zt(a),a.valid=!0),b||w==="overview"?Z(s,o):w==="play"&&a.valid?Z(s,a):w==="cup"&&wt.frameCup())}},get insets(){return{top:Y.top,right:Y.right,bottom:Y.bottom,left:Y.left}},setLevel(W){if(u.active&&bt(),S=W||null,E=0,C=0,S&&S.grid&&S.grid.height){const G=S.grid.height;E=1/0,C=-1/0;for(let it=0;it<G.length;it++)G[it]<E&&(E=G[it]),G[it]>C&&(C=G[it]);Number.isFinite(E)||(E=0,C=0)}y=!1,b=!1,R=null,a.valid=!1,f.has=!1,N=i.yaw||0,i.setShadowBounds&&i.setShadowBounds(S),S&&(et(),w="overview",ct(o))},intro(){return u.active&&bt(),S?(et(),Z(u.from,o),Bt(u.to),u.t=0,u.active=!0,w="intro",ct(o),new Promise(W=>{u.resolve=W})):Promise.resolve()},skipIntro(){bt()},frameShot(W){if(S){if(R=W||R,Kt(R,a),zt(a),a.valid=!0,y=!1,f.has=!1,u.active){Z(u.to,a);return}b||(w="play",Z(s,a))}},follow(W,G){!S||u.active||b||y||!Number.isFinite(W)||!Number.isFinite(G)||((w!=="follow"||!f.has)&&(f.lastX=W,f.lastZ=G,f.vx=0,f.vz=0),w="follow",f.x=W,f.z=G,f.has=!0,f.fresh=!0)},frameCup(){if(!S||u.active)return;v=0;const W=S.cup;_t(W.x,W.z,kt.HOLE_R+2,12),j(W.x,J(W.x,W.z)+Ka,W.z),lt($(),s),s.d=Math.max(s.d,10),Xt(s),w="cup"},overview(W){S&&(b=!!W,!u.active&&(y=!1,b?(et(),w="overview",Z(s,o)):a.valid&&(R&&R.state==="ready"&&Kt(R,a),w="play",Z(s,a))))},zoomBy(W,G,it){if(!S||!(W>0)||!Number.isFinite(W))return;u.active&&bt();const yt=D(),ft=X(),dt=Number.isFinite(G)?G/yt*2-1:0,U=Number.isFinite(it)?1-it/ft*2:0;at(),V(),q(e,n.tx,n.ty,n.tz,n.d);const rt=c,Et=Q(e,dt,U,n.ty,rt),F=rt.tx,st=rt.tz,ht=Math.min(T(),Math.max(A(),n.d/W));q(e,n.tx,n.ty,n.tz,ht);const vt=Q(e,dt,U,n.ty,rt);n.d=ht,Et&&vt&&(n.tx+=F-rt.tx,n.tz+=st-rt.tz),Xt(n),y=!0,ct(n)},panBy(W,G){if(!S||!Number.isFinite(W)||!Number.isFinite(G))return;u.active&&bt();const it=X()/(2*Math.max(1,n.d)*Rs),yt=Math.cos(N),ft=-Math.sin(N),dt=-Math.sin(N),U=-Math.cos(N),rt=Math.sin(Ri),Et=-W/it,F=G/(it*rt);n.tx+=yt*Et+dt*F,n.tz+=ft*Et+U*F,Xt(n),y=!0,ct(n)},update(W){if(W=Number.isFinite(W)&&W>0?Math.min(W,.1):0,u.active){u.t+=W;const it=u.from,yt=u.to;if(u.t<go){const ft=u.t/go;n.tx=it.tx,n.ty=it.ty,n.tz=it.tz,n.d=it.d*(1.04-.04*(ft*(2-ft)))}else{const ft=E1(Math.min(1,(u.t-go)/df));n.tx=it.tx+(yt.tx-it.tx)*ft,n.ty=it.ty+(yt.ty-it.ty)*ft,n.tz=it.tz+(yt.tz-it.tz)*ft,n.d=Math.exp(Math.log(it.d)+(Math.log(yt.d)-Math.log(it.d))*ft)}at(),u.t>=go+df&&bt();return}xt.dt=W;let G=.25;w==="follow"&&f.has&&!y&&!b?(G=.35,Ft()):w==="overview"?G=.3:w==="cup"&&(G=.45),f.fresh=!1,!y&&W>0&&(xt.T=G,Wt()),!(n.tx===O.tx&&n.ty===O.ty&&n.tz===O.tz&&n.d===O.dd&&N===O.yaw)&&at()},screenToGround(W,G){if(!Number.isFinite(W)||!Number.isFinite(G))return null;const it=W/D()*2-1,yt=1-G/X()*2;if(p.copy(t.position),x.set(it,yt,.5).unproject(t).sub(p).normalize(),!(x.y<-1e-5))return null;const ft=C+.01,dt=E-.01;let U=Math.max(0,(ft-p.y)/x.y);const rt=Math.max(U,(dt-p.y)/x.y),Et=Lt=>p.y+x.y*Lt-J(p.x+x.x*Lt,p.z+x.z*Lt);if(!S||rt-U<1e-6){const Lt=C===E?(C-p.y)/x.y:U;return{x:p.x+x.x*Lt,z:p.z+x.z*Lt}}const F=Math.sqrt(x.x*x.x+x.z*x.z),st=Math.min(400,Math.max(1,Math.ceil((rt-U)*F/.2))),ht=(rt-U)/st;let vt=Et(U),Tt=U,K=vt<=0;if(!K)for(let Lt=1;Lt<=st;Lt++){Tt=U+ht*Lt;const qt=Et(Tt);if(qt<=0){K=!0;break}U=Tt,vt=qt}K||(Tt=rt);let pt=U,Rt=Tt;for(let Lt=0;Lt<24&&Rt-pt>1e-5;Lt++){const qt=(pt+Rt)/2;Et(qt)>0?pt=qt:Rt=qt}const It=(pt+Rt)/2;return{x:p.x+x.x*It,z:p.z+x.z*It}},groundToScreen(W,G,it,yt){const ft=yt||{x:0,y:0,onScreen:!1};m.set(on(W,0),on(G,0),on(it,0)).applyMatrix4(t.matrixWorldInverse);const dt=m.z>-t.near;dt&&(m.z=-t.near),m.applyMatrix4(t.projectionMatrix);const U=D(),rt=X();let Et=(m.x+1)/2*U,F=(1-m.y)/2*rt;return dt&&(Et=U-Et,F=rt-F),ft.x=on(Et,U/2),ft.y=on(F,rt/2),ft.onScreen=!dt&&ft.x>=0&&ft.x<=U&&ft.y>=0&&ft.y<=rt,ft},pxPerMetre(W,G){const it=J(on(W,0),on(G,0))+ri,yt=t.position.distanceTo(m.set(on(W,0),it,on(G,0))),ft=X()/(2*Math.max(.01,yt)*Rs);return Number.isFinite(ft)?ft:1}};function Wt(){const W=xt.dt;let G=2/Math.max(1e-4,xt.T),it=G*W,yt=1/(1+it+.48*it*it+.235*it*it*it),ft=n.tx-s.tx,dt=(r.x.v+G*ft)*W;r.x.v=(r.x.v-G*dt)*yt,n.tx=s.tx+(ft+dt)*yt,ft=n.ty-s.ty,dt=(r.y.v+G*ft)*W,r.y.v=(r.y.v-G*dt)*yt,n.ty=s.ty+(ft+dt)*yt,ft=n.tz-s.tz,dt=(r.z.v+G*ft)*W,r.z.v=(r.z.v-G*dt)*yt,n.tz=s.tz+(ft+dt)*yt,G=2/Math.max(1e-4,xt.T*1.6),it=G*W,yt=1/(1+it+.48*it*it+.235*it*it*it);const U=Math.log(Math.max(.5,s.d));ft=Math.log(Math.max(.5,n.d))-U,dt=(r.d.v+G*ft)*W,r.d.v=(r.d.v-G*dt)*yt,n.d=Math.exp(U+(ft+dt)*yt),Number.isFinite(n.tx+n.ty+n.tz+n.d)||(Z(n,s),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0),Math.abs(n.tx-s.tx)+Math.abs(n.ty-s.ty)+Math.abs(n.tz-s.tz)<1e-4&&Math.abs(n.d-s.d)<1e-4*s.d&&Math.abs(r.x.v)+Math.abs(r.y.v)+Math.abs(r.z.v)+Math.abs(r.d.v)<1e-4&&(Z(n,s),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0)}function Ft(){const W=xt.dt;if(W>0&&f.fresh){const Qt=(f.x-f.lastX)/W,ge=(f.z-f.lastZ)/W,re=1-Math.exp(-W/.25);Number.isFinite(Qt)&&Number.isFinite(ge)&&Math.abs(Qt)<80&&Math.abs(ge)<80&&(f.vx+=(Qt-f.vx)*re,f.vz+=(ge-f.vz)*re)}f.lastX=f.x,f.lastZ=f.z;const G=a.valid?a.d:n.d;let it=f.vx*.3,yt=f.vz*.3;const ft=Math.sqrt(it*it+yt*yt);ft>3.5&&(it*=3.5/ft,yt*=3.5/ft);const dt=f.x+it,U=f.z+yt,rt=$();V(),q(e,s.tx,s.ty,s.tz,Math.max(1,s.d));let Et=0,F=0;Q(e,(rt.x0+rt.x1)/2,(rt.y0+rt.y1)/2,s.ty,ot)&&(Et=ot.tx-s.tx,F=ot.tz-s.tz);const st=X()/(2*Math.max(1,s.d)*Rs),ht=.125*(rt.y1-rt.y0)*.5*X()/st,vt=Math.cos(N),Tt=-Math.sin(N),K=-Math.sin(N),pt=-Math.cos(N);let Rt=dt-(s.tx+Et),It=U-(s.tz+F);const Lt=Rt*vt+It*Tt,qt=Rt*K+It*pt,Yt=ht/Math.sin(Ri),le=Lt>ht?Lt-ht:Lt<-ht?Lt+ht:0,se=qt>Yt?qt-Yt:qt<-Yt?qt+Yt:0;let ae=s.tx+vt*le+K*se,pe=s.tz+Tt*le+pt*se,he=G;if(S&&S.cup){const Qt=S.cup,ge=Math.sqrt((Qt.x-f.x)*(Qt.x-f.x)+(Qt.z-f.z)*(Qt.z-f.z)),re=gf(15,6,ge);if(re>0){const Te=(f.x+Qt.x)/2-Et,en=(f.z+Qt.z)/2-F;Rt=Qt.x-f.x,It=Qt.z-f.z;const Fe=Math.abs(Rt*vt+It*Tt)/2+2.5,nn=Math.abs(Rt*K+It*pt)/2+2.5,We=t.aspect>0?t.aspect:16/9,hn=Math.max(.1,(rt.x1-rt.x0)/2),I=Math.max(.1,(rt.y1-rt.y0)/2),L=Math.max(Fe/(Rs*We*hn*.9),nn*Math.sin(Ri)/(Rs*I*.9));ae+=(Te-ae)*re,pe+=(en-pe)*re,he=Math.min(Math.max(G,G+(L-G)*re),Math.max(G,Nt()))}}s.tx=ae,s.tz=pe,s.ty=J(f.x,f.z),s.d=he,Xt(s)}function zt(W){if(!S)return;const G=S.bounds,it=mf;W.tx=Math.min(G.maxx+it,Math.max(G.minx-it,on(W.tx,0))),W.tz=Math.min(G.maxz+it,Math.max(G.minz-it,on(W.tz,0))),W.d=Math.min(T(),Math.max(6,on(W.d,30)))}return at(),wt}function U1(i){let t=2166136261;for(let n=0;n<i.length;n++)t^=i.charCodeAt(n),t=Math.imul(t,16777619)>>>0;let e=t||1;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const ee=i=>new ce(i),ve=(i,t)=>new ce(i.r*t,i.g*t,i.b*t),No=(i,t,e)=>new ce(i.r+(t.r-i.r)*e,i.g+(t.g-i.g)*e,i.b+(t.b-i.b)*e);function Sn(i,t,e,n="after"){if(!i.includes(t))throw new Error("course shader: injection target missing: "+t);return i.replace(t,n==="after"?t+`
`+e:n==="replace"?e:e+`
`+t)}const Fo=i=>{const t=new Float64Array(i.length*2);for(let e=0;e<i.length;e++)t[e*2]=i[e].x,t[e*2+1]=i[e].z;return t};function fl(i,t,e){let n=!1;const s=i.length;for(let r=0,o=s-2;r<s;o=r,r+=2){const a=i[r],c=i[r+1],l=i[o],u=i[o+1];c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(n=!n)}return n}function xf(i,t,e,n,s){const r=i.length/2,o=t?r:r-1;let a=1/0;for(let c=0;c<o;c++){const l=(c+1)%r,u=i[c*2],f=i[c*2+1],d=i[l*2]-u,h=i[l*2+1]-f,g=d*d+h*h||1e-12;let v=((e-u)*d+(n-f)*h)/g;v=v<0?0:v>1?1:v;const m=u+d*v,p=f+h*v,x=(m-e)*(m-e)+(p-n)*(p-n);x<a&&(a=x,s.x=m,s.z=p,s.seg=c,s.t=v)}return s.d=Math.sqrt(a),s}function N1(i,t,e,n,s,r){const o=e-i,a=n-t,c=o*o+a*a||1e-12;let l=((s-i)*o+(r-t)*a)/c;l=l<0?0:l>1?1:l;const u=i+o*l-s,f=t+a*l-r;return Math.sqrt(u*u+f*f)}function ad(i,t=6){const e=Math.max(2,Math.ceil(Math.abs(i.to-i.from)/t)),n=[];for(let s=0;s<=e;s++){const r=(i.from+(i.to-i.from)*s/e)*Math.PI/180;n.push({x:i.x+Math.cos(r)*i.r,z:i.z-Math.sin(r)*i.r})}return n}function F1(i){const t=Fo(i.ground),e=t.length/2;let n=0;for(let p=0;p<e;p++){const x=(p+1)%e;n+=t[p*2]*t[x*2+1]-t[x*2]*t[p*2+1]}const s=n>0?1:-1,r=new Float64Array(e*2),o=new Float64Array(e);for(let p=0;p<e;p++){const x=(p+1)%e,_=t[x*2]-t[p*2],M=t[x*2+1]-t[p*2+1],S=Math.hypot(_,M)||1e-9;o[p]=S,r[p*2]=s*M/S,r[p*2+1]=-s*_/S}const a=[];for(const p of i.walls)a.push({poly:Fo(p.pts),closed:p.closed});for(const p of i.arcsRender||[])a.push({poly:Fo(ad(p)),closed:!1});const c={d:0,x:0,z:0,seg:0,t:0},l=.25,u=new Int32Array(e+1),f=[];for(let p=0;p<e;p++){u[p]=f.length;const x=Math.max(1,Math.round(o[p]/l));for(let _=0;_<=x;_++){const M=_/x,S=t[p*2]+(t[(p+1)%e*2]-t[p*2])*M,E=t[p*2+1]+(t[(p+1)%e*2+1]-t[p*2+1])*M;let C=1/0;for(const w of a)xf(w.poly,w.closed,S,E,c),c.d<C&&(C=c.d);f.push(C<.3?1:0)}}u[e]=f.length;const d=Uint8Array.from(f);let h=!1,g=!1;for(let p=0;p<d.length;p++)d[p]?g=!0:h=!0;const v={d:0,x:0,z:0,seg:0,t:0};return{poly:t,apronW:h?.75:3,count:e,segN:r,segLen:o,anyOpen:h,anyWalled:g,inside:(p,x)=>fl(t,p,x),nearest:(p,x,_=v)=>xf(t,!0,p,x,_),walled(p,x){const _=u[p],M=u[p+1]-1-_;return d[_+Math.round(x*M)]===1}}}const _o=new tt,Mo=new tt,yo=new tt,an=new tt,vf=new tt,_f=new tt;class O1{constructor(){this.pos=[],this.nor=[],this.col=[],this.leaf=[]}get triangles(){return this.pos.length/9}_v(t,e,n,s,r,o,a,c){this.pos.push(t,e,n),this.nor.push(s,r,o),this.col.push(a.r,a.g,a.b),this.leaf.push(c)}tri(t,e,n,s,r=0,o=null){_o.set(t[0],t[1],t[2]),Mo.set(e[0],e[1],e[2]),yo.set(n[0],n[1],n[2]),vf.subVectors(Mo,_o),_f.subVectors(yo,_o),an.crossVectors(vf,_f);const a=an.length();if(a<1e-9)return;an.multiplyScalar(1/a);let c=_o,l=Mo,u=yo;o&&an.x*o[0]+an.y*o[1]+an.z*o[2]<0&&(l=yo,u=Mo,an.negate()),this._v(c.x,c.y,c.z,an.x,an.y,an.z,s,r),this._v(l.x,l.y,l.z,an.x,an.y,an.z,s,r),this._v(u.x,u.y,u.z,an.x,an.y,an.z,s,r)}quad(t,e,n,s,r,o=0,a=null){this.tri(t,e,n,r,o,a),this.tri(t,n,s,r,o,a)}geo(t,e,{leaf:n=0,flat:s=!0,matrix:r=null}={}){const o=t.index?t.toNonIndexed():t;(s||!o.attributes.normal)&&o.computeVertexNormals();let a=o.attributes.position.array;const c=a.length/9,l=new Array(c);for(let f=0;f<c;f++){const d=f*9,h=a[d+3]-a[d],g=a[d+4]-a[d+1],v=a[d+5]-a[d+2],m=a[d+6]-a[d],p=a[d+7]-a[d+1],x=a[d+8]-a[d+2],_=g*x-v*p,M=v*m-h*x,S=h*p-g*m;if(_*_+M*M+S*S<1e-14){l[f]=null;continue}l[f]=e((a[d]+a[d+3]+a[d+6])/3,(a[d+1]+a[d+4]+a[d+7])/3,(a[d+2]+a[d+5]+a[d+8])/3,f)}r&&o.applyMatrix4(r),a=o.attributes.position.array;const u=o.attributes.normal.array;for(let f=0;f<c;f++){const d=l[f];if(!d)continue;const h=f*9;let g=!0;for(let v=0;v<9;v++)(!Number.isFinite(u[h+v])||!Number.isFinite(a[h+v]))&&(g=!1);if(g)for(let v=0;v<9;v+=3)this._v(a[h+v],a[h+v+1],a[h+v+2],u[h+v],u[h+v+1],u[h+v+2],d,n)}o!==t&&o.dispose(),t.dispose()}build(){const t=new Ve;return t.setAttribute("position",new _e(this.pos,3)),t.setAttribute("normal",new _e(this.nor,3)),t.setAttribute("color",new _e(this.col,3)),t.setAttribute("aLeaf",new _e(this.leaf,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const k1=new ye,Mf=new fs,yf=new tt,$a=new tt,B1=new tt(0,1,0);function qe(i,t,e,n=0,s=1){return yf.set(i,t,e),Mf.setFromAxisAngle(B1,n),Array.isArray(s)?$a.set(s[0],s[1],s[2]):$a.set(s,s,s),k1.compose(yf,Mf,$a).clone()}const H1={fairway:1,green:2,rough:3,sand:4,water:5,ice:6},G1=[1/16,4/16,6/16,4/16,1/16],So=[0,1/4,2/4,1/4,0];function ji(i,t,e,n=G1){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=a+l<0?0:a+l>=t?t-1:a+l;c+=i[o*t+u]*n[l+2]}s[o*t+a]=c}for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=o+l<0?0:o+l>=e?e-1:o+l;c+=s[u*t+a]*n[l+2]}r[o*t+a]=c}return r}function V1(i,t,e,n){const r=new Float32Array(t*e);for(let a=0;a<r.length;a++)r[a]=i[a]?1e9:0;const o=Math.SQRT2;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c>0&&(u=Math.min(u,r[l-1]+1)),a>0&&(u=Math.min(u,r[l-t]+1),c>0&&(u=Math.min(u,r[l-t-1]+o)),c<t-1&&(u=Math.min(u,r[l-t+1]+o))),r[l]=u}for(let a=e-1;a>=0;a--)for(let c=t-1;c>=0;c--){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c<t-1&&(u=Math.min(u,r[l+1]+1)),a<e-1&&(u=Math.min(u,r[l+t]+1),c<t-1&&(u=Math.min(u,r[l+t+1]+o)),c>0&&(u=Math.min(u,r[l+t-1]+o))),r[l]=u}for(let a=0;a<r.length;a++)r[a]=r[a]>=1e9?50:r[a]>0?(r[a]-.5)*n:0;return r}function Sf(i,t,e){const n=new Pl(i,t,e,Dn,Jn);return n.flipY=!1,n.magFilter=wn,n.minFilter=wn,n.generateMipmaps=!1,n.wrapS=di,n.wrapT=di,n.colorSpace=fi,n.needsUpdate=!0,n}function W1(i,t,e){const{cols:n,rows:s,cell:r,x0:o,z0:a,surface:c}=i.grid,l=n*s;let u=Uint8Array.from(c);for(let D=0;D<3;D++){const $=u;u=Uint8Array.from($);for(let q=0;q<s;q++)for(let at=0;at<n;at++){const V=q*n+at;if($[V]!==0)continue;const j=at>0&&$[V-1]||at<n-1&&$[V+1]||q>0&&$[V-n]||q<s-1&&$[V+n]||0;u[V]=j}}const f=new Float32Array(l),d=new Float32Array(l),h=new Float32Array(l),g=new Float32Array(l);let v=!1;const m=(D,$,q)=>{$===2?f[D]+=q:$===4?d[D]+=q:$===5&&(h[D]+=q),g[D]+=($===3?1:$===6?0:.5)*q},p=(i.zones||[]).map(D=>({code:H1[D.surface]||1,poly:Fo(D.pts)})),x=t.poly,_=4;for(let D=0;D<s;D++)for(let $=0;$<n;$++){const q=D*n+$,at=u[q];c[q]===5&&(v=!0);let V=!1;for(let H=-1;H<=1&&!V;H++){const Q=D+H;if(!(Q<0||Q>=s))for(let lt=-1;lt<=1;lt++){const At=$+lt;if(At>=0&&At<n&&u[Q*n+At]!==at){V=!0;break}}}if(!V){m(q,at,1);continue}const j=o+$*r,mt=a+D*r;for(let H=0;H<_;H++)for(let Q=0;Q<_;Q++){const lt=j+((H+.5)/_-.5)*r,At=mt+((Q+.5)/_-.5)*r;let Nt=at;if(fl(x,lt,At)){Nt=1;for(const et of p)fl(et.poly,lt,At)&&(Nt=et.code)}m(q,Nt,1/(_*_))}}const M=ji(f,n,s,So),S=ji(d,n,s,So),E=ji(h,n,s,So),C=ji(g,n,s,So),w=ji(ji(f,n,s),n,s),b=new Uint8Array(l);for(let D=0;D<l;D++)b[D]=c[D]===5?1:0;const y=V1(b,n,s,r),R=new Float32Array(l),N=.55,O=(D,$,q,at,V)=>{const j=Math.max(0,Math.floor((D-o)/r)),mt=Math.min(n-1,Math.ceil(($-o)/r)),H=Math.max(0,Math.floor((q-a)/r)),Q=Math.min(s-1,Math.ceil((at-a)/r));for(let lt=H;lt<=Q;lt++)for(let At=j;At<=mt;At++){const Nt=V(o+At*r,a+lt*r),et=lt*n+At;Nt>R[et]&&(R[et]=Nt)}};for(const D of e)if(D.r!==void 0){const $=D.r+N;O(D.x-$,D.x+$,D.z-$,D.z+$,(q,at)=>{const V=Math.hypot(q-D.x,at-D.z)-D.r;return V<0?1:Math.max(0,1-V/N)})}else{const $=D.hw+N;O(Math.min(D.ax,D.bx)-$,Math.max(D.ax,D.bx)+$,Math.min(D.az,D.bz)-$,Math.max(D.az,D.bz)+$,(q,at)=>{const V=N1(D.ax,D.az,D.bx,D.bz,q,at)-D.hw;return V<0?1:Math.max(0,1-V/N)})}const Y=new Float32Array(l);if(t.anyOpen)for(let D=2;D<s-2;D++)for(let $=2;$<n-2;$++){const q=D*n+$;if(c[q]===0)continue;let at=!1;for(let j=-2;j<=2&&!at;j++)for(let mt=-2;mt<=2;mt++)if(c[q+j*n+mt]===0){at=!0;break}if(!at)continue;const V=t.nearest(o+$*r,a+D*r);V.d<.7&&!t.walled(V.seg,V.t)&&(Y[q]=1)}if(t.anyOpen)for(let D=0;D<2;D++){const $=Float32Array.from(Y);for(let q=1;q<s-1;q++)for(let at=1;at<n-1;at++){const V=q*n+at;c[V]!==0||$[V]||($[V-1]||$[V+1]||$[V-n]||$[V+n])&&(Y[V]=1)}}const ut=t.anyOpen?ji(Y,n,s):Y,ot=new Uint8Array(l*4),xt=new Uint8Array(l*4),J=D=>D<=0?0:D>=1?255:Math.round(D*255);for(let D=0;D<l;D++)ot[D*4]=J(M[D]),ot[D*4+1]=J(S[D]),ot[D*4+2]=J(E[D]),ot[D*4+3]=J(C[D]),xt[D*4]=J(R[D]*R[D]*(3-2*R[D])),xt[D*4+1]=J(y[D]/2.5),xt[D*4+2]=J(ut[D]),xt[D*4+3]=J(w[D]);const X=new Ie(o-r/2,a-r/2,1/(n*r),1/(s*r));return{mask:Sf(ot,n,s),aux:Sf(xt,n,s),waterDist:y,hasWater:v,xf:X}}const Ko=3,X1=.15,q1=.45,Y1=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function K1(i,t,e,n,s=[],r=1){const{cols:o,rows:a,cell:c,x0:l,z0:u,surface:f}=i.grid,d=i.heightAt,h=2,g=c*h,v=Math.floor((o-1)/h)+1,m=Math.floor((a-1)/h)+1,p=v*m,x=new Uint8Array(p),_=new Float64Array(p),M=new Float64Array(p),S=new Float64Array(p),E=new Float32Array(p),C=new Uint8Array(p);for(let K=0;K<m;K++)for(let pt=0;pt<v;pt++){const Rt=K*v+pt,It=K*h*o+pt*h,Lt=l+pt*g,qt=u+K*g;x[Rt]=f[It]!==0?1:0;const Yt=t.nearest(Lt,qt);if(_[Rt]=Yt.x,M[Rt]=Yt.z,S[Rt]=Yt.d,E[Rt]=t.walled(Yt.seg,Yt.t)?t.apronW:0,e.hasWater){const le=pt*h,se=K*h;t:for(let ae=-3;ae<=3;ae++){const pe=se+ae;if(!(pe<0||pe>=a))for(let he=-3;he<=3;he++){const Qt=le+he;if(!(Qt<0||Qt>=o)&&f[pe*o+Qt]===5){C[Rt]=1;break t}}}}}const w=[],b=[],y=[],R=[],N=[],O=[],Y=[];let ut=0;const ot=(K,pt,Rt,It,Lt,qt,Yt,le,se,ae)=>(w.push(K,pt,Rt),b.push(It,Lt,qt),y.push(Yt.r,Yt.g,Yt.b),R.push(le,se),N.push(ae),ut++),xt=new ce(1,1,1),J=.25,X=1,D=new Int32Array(p).fill(-1),$=[],q=K=>{if(D[K]>=0)return D[K];const pt=K%v,Rt=(K-pt)/v;let It=l+pt*g,Lt=u+Rt*g;x[K]||(It=_[K],Lt=M[K]);const qt=Rt*h*o+pt*h;let Yt=0;x[K]&&f[qt]===5&&(Yt=q1*Y1(0,1.6,e.waterDist[qt]));const le=d(It,Lt),se=(d(It+J,Lt)-d(It-J,Lt))/(2*J),ae=(d(It,Lt+J)-d(It,Lt-J))/(2*J),pe=(d(It+X,Lt)-d(It-X,Lt))/(2*X),he=(d(It,Lt+X)-d(It,Lt-X))/(2*X),Qt=Math.hypot(pe,1,he),ge=ot(It,le-Yt,Lt,-pe/Qt,1/Qt,-he/Qt,xt,Yt>0?0:-se,Yt>0?0:-ae,0);return Y[ge]=Yt>0?1:0,$[ge]=C[K],D[K]=ge,ge},at=new Map,V=2097152,j=(K,pt,Rt)=>{const It=K<pt?K*V+pt:pt*V+K,Lt=at.get(It);Lt?Lt[0]++:at.set(It,[1,K,pt,Rt])},mt=[],H=[0,0],Q=(K,pt,Rt,It)=>{const Lt=w[K*3],qt=w[K*3+2],Yt=(w[pt*3]-Lt)*(w[Rt*3+2]-qt)-(w[Rt*3]-Lt)*(w[pt*3+2]-qt);if(!(Math.abs(Yt)<1e-7)&&!(Yt<0&&(H[It?0:1]++,It))){if(Yt>0){const le=pt;pt=Rt,Rt=le}O.push(K,pt,Rt),j(K,pt,Rt),j(pt,Rt,K),j(Rt,K,pt),It&&It.push(K,pt,Rt)}},lt=(K,pt,Rt,It,Lt,qt,Yt,le,se,ae)=>{const pe=Lt+qt+Yt+le,he=pe===1?!!(Lt||Yt):pe===3?!!(Lt&&Yt):pe===2?!(qt&&le):!0,Qt=se(K),ge=se(pt),re=se(Rt),Te=se(It);he?(Q(Qt,ge,re,ae),Q(Qt,re,Te,ae)):(Q(Qt,ge,Te,ae),Q(ge,re,Te,ae))};for(let K=0;K<m-1;K++)for(let pt=0;pt<v-1;pt++){const Rt=K*v+pt,It=Rt+1,Lt=Rt+v+1,qt=Rt+v;(x[Rt]||x[It]||x[Lt]||x[qt])&&lt(Rt,It,Lt,qt,x[Rt],x[It],x[Lt],x[qt],q,mt)}const At=ut,Nt=new Map(at);at.clear();const et=No(ee(n.rough),ee(n.hedge),.35),_t=new Int32Array(p).fill(-1),B=[],nt={d:0,x:0,z:0,seg:0,t:0},Gt=1,Jt=(K,pt)=>{const Rt=t.nearest(K,pt,nt);let It=t.walled(Rt.seg,Rt.t)?Rt.d-t.apronW:1/0;for(let Lt=0;Lt<s.length;Lt++){const qt=Math.hypot(K-s[Lt].x,pt-s[Lt].z)-s[Lt].r,Yt=Math.max(Gt-Math.abs(It-qt),0)/Gt;It=Math.min(It,qt)-Yt*Yt*Gt*.25}return It},Bt=new Float64Array(p);for(let K=0;K<p;K++){if(x[K])continue;if(S[K]>t.apronW+.8&&!s.length){Bt[K]=1/0;continue}const pt=K%v;Bt[K]=Jt(l+pt*g,u+(K-pt)/v*g)}const Kt=new Float64Array(p);for(let K=0;K<p;K++)Kt[K]=Math.min(1e3,x[K]?Math.max(S[K],1e-4):Math.max(Bt[K],-S[K]));const Xt=(K,pt,Rt)=>{const It=t.nearest(K,pt,nt);let Lt=K,qt=pt;Rt===0&&(Lt=It.x,qt=It.z);const Yt=Rt===0?0:Math.min(It.d,Ko),le=d(It.x,It.z)-X1-.07*(Yt/Ko),se=ot(Lt,le,qt,0,1,0,xt,0,0,1);return B[se]=Rt,se},T=K=>{if(_t[K]<0){const pt=K%v;_t[K]=Xt(l+pt*g,u+(K-pt)/v*g,1)}return _t[K]},A=new Map,Z=(K,pt)=>{const Rt=K<pt?K*p+pt:pt*p+K;let It=A.get(Rt);if(It!==void 0)return It;const Lt=Kt[K]/(Kt[K]-Kt[pt]),qt=K%v,Yt=pt%v,le=l+(qt+(Yt-qt)*Lt)*g,se=u+((K-qt)/v+((pt-Yt)/v-(K-qt)/v)*Lt)*g,ae=t.nearest(le,se,nt),pe=!t.inside(le,se)&&ae.d<.12&&-ae.d>=Jt(le,se)-.05;return It=Xt(le,se,pe||t.inside(le,se)?0:2),A.set(Rt,It),It},ct=[];if(t.anyWalled||s.length)for(let K=0;K<m-1;K++)for(let pt=0;pt<v-1;pt++){const Rt=[K*v+pt,K*v+pt+1,(K+1)*v+pt+1,(K+1)*v+pt];if(Kt[Rt[0]]<0||Kt[Rt[1]]<0||Kt[Rt[2]]<0||Kt[Rt[3]]<0){ct.length=0;for(let It=0;It<4;It++){const Lt=Rt[It],qt=Rt[It+1&3];Kt[Lt]<0&&ct.push(T(Lt)),Kt[Lt]<0!=Kt[qt]<0&&ct.push(Z(Lt,qt))}for(let It=1;It<ct.length-1;It++)Q(ct[0],ct[It],ct[It+1],null)}}const bt=at,wt=(K,pt)=>{let Rt=(K-l)/g,It=(pt-u)/g;if(Rt<0||It<0||Rt>=v-1||It>=m-1)return!1;const Lt=Math.floor(Rt),qt=Math.floor(It);Rt-=Lt,It-=qt;const Yt=qt*v+Lt,le=Kt[Yt]+(Kt[Yt+1]-Kt[Yt])*Rt,se=Kt[Yt+v]+(Kt[Yt+v+1]-Kt[Yt+v])*Rt;return le+(se-le)*It<0};let Wt=1/0;for(let K=1;K<w.length;K+=3)w[K]<Wt&&(Wt=w[K]);const Ft=Wt-1.6,zt=new Float64Array(ut*2),W=K=>{const[,pt,Rt,It]=K,Lt=w[Rt*3]-w[pt*3],qt=w[Rt*3+2]-w[pt*3+2],Yt=Math.hypot(Lt,qt);if(Yt<.04)return null;let le=qt/Yt,se=-Lt/Yt;const ae=(w[pt*3]+w[Rt*3])/2,pe=(w[pt*3+2]+w[Rt*3+2])/2;return(w[It*3]-ae)*le+(w[It*3+2]-pe)*se>0&&(le=-le,se=-se),[le*Yt,se*Yt]},G=[];for(const K of Nt.values()){if(K[0]!==1)continue;const pt=W(K);if(!pt)continue;const Rt=(w[K[1]*3]+w[K[2]*3])/2,It=(w[K[1]*3+2]+w[K[2]*3+2])/2,Lt=Math.hypot(pt[0],pt[1]),qt=!((t.anyWalled||s.length)&&wt(Rt+pt[0]/Lt*.3,It+pt[1]/Lt*.3));G.push([K[1],K[2],qt?1:0,0,pt]);for(const Yt of[K[1],K[2]])zt[Yt*2]+=pt[0],zt[Yt*2+1]+=pt[1]}for(const K of bt.values()){if(K[0]!==1||B[K[1]]===0&&B[K[2]]===0)continue;const pt=W(K);if(pt){G.push([K[1],K[2],1,1,pt]);for(const Rt of[K[1],K[2]])zt[Rt*2]+=pt[0],zt[Rt*2+1]+=pt[1]}}const it=ee(n.soilTop),yt=No(ee(n.soilBottom),ee(n.skyBottom),.22),ft=No(it,ee(n.soilBottom),.55),dt=[ve(ee(n.rough),.95),ve(ee(n.rough),.7)],U=[ve(et,.95),ve(et,.7)],rt=[ee(me.pinWhite),ve(ee(n.rough),.7)],Et=[[0,0,.35,.94],[.07,-.06,.8,.6],[.09,-.16,1,.1],[.02,"mid",1,-.05],[-.15,"bot",.8,-.6]];for(const[K,pt,Rt,It,Lt]of G){const qt=Math.hypot(Lt[0],Lt[1]),Yt=Lt[0]/qt,le=Lt[1]/qt,se=It?U:Rt?rt:dt,ae=[[],[]],pe=Rt?Et:[[0,0,1,0],[0,-.22,1,0]];[K,pt].forEach((he,Qt)=>{let ge=zt[he*2],re=zt[he*2+1];const Te=Math.hypot(ge,re);ge/=Te||1,re/=Te||1,(!(Te>1e-6)||ge*Yt+re*le<.5)&&(ge=Yt,re=le);const en=w[he*3],Fe=w[he*3+1],nn=w[he*3+2];for(let We=0;We<pe.length;We++){const[hn,I,L,P]=pe[We],k=I==="bot"?Ft:I==="mid"?Fe-.16+(Ft-(Fe-.16))*.5:Fe+I,z=Math.hypot(L,P),gt=Rt?We===0?se[0]:We===1?se[1]:We===2?it:We===3?ft:yt:it;ae[Qt].push(ot(en+ge*hn,k,nn+re*hn,ge*L/z,P/z,re*L/z,gt,0,0,2))}});for(let he=0;he<pe.length-1;he++){const Qt=[ae[0][he],ae[1][he],ae[1][he+1],ae[0][he+1]],ge=w[Qt[0]*3],re=w[Qt[0]*3+1],Te=w[Qt[0]*3+2],en=w[Qt[1]*3]-ge,Fe=w[Qt[1]*3+1]-re,nn=w[Qt[1]*3+2]-Te,We=w[Qt[2]*3]-ge,hn=w[Qt[2]*3+1]-re,I=w[Qt[2]*3+2]-Te,L=Fe*I-nn*hn,P=en*hn-Fe*We,k=b[Qt[0]*3]+b[Qt[1]*3],z=b[Qt[0]*3+2]+b[Qt[1]*3+2];L*k+P*z>=0?O.push(Qt[0],Qt[1],Qt[2],Qt[0],Qt[2],Qt[3]):O.push(Qt[0],Qt[2],Qt[1],Qt[0],Qt[3],Qt[2])}}const F=new Ve;F.setAttribute("position",new _e(w,3)),F.setAttribute("normal",new _e(b,3)),F.setAttribute("color",new _e(y,3)),F.setAttribute("aFlow",new _e(R,2)),F.setAttribute("aMode",new _e(N,1)),F.setIndex(O),F.computeBoundingSphere(),F.computeBoundingBox();const{material:st,uniforms:ht}=Z1(e,n,et,r===0),vt=new De(F,st);vt.name="course-terrain",vt.receiveShadow=!0,vt.userData.terrain={courseVerts:At,lowered:Uint8Array.from(Y),folds:H};const Tt=[];if(e.hasWater)for(let K=0;K<mt.length;K+=3){const pt=mt[K],Rt=mt[K+1],It=mt[K+2];($[pt]||$[Rt]||$[It])&&Tt.push(pt,Rt,It)}return{mesh:vt,uniforms:ht,waterTris:Tt,positions:w,minY:Wt,yBot:Ft}}const $1=`
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
`,j1=`
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
`;function Z1(i,t,e,n){const s={uMask:{value:i.mask},uAux:{value:i.aux},uMaskXf:{value:i.xf},uTime:{value:0},uFlow:{value:0},uStripeW:{value:2.4},uGreenW:{value:.9},uContourStep:{value:.15},uDotCell:{value:1.6},uRough:{value:ee(t.rough)},uFairA:{value:ee(t.fairwayLight)},uFairB:{value:ee(t.fairwayDark)},uFringe:{value:ee(t.fringe)},uGreenA:{value:ee(t.greenLight)},uGreenB:{value:ee(t.greenDark)},uSand:{value:ee(t.sand)},uSandLip:{value:ee(t.sandLip)},uBed:{value:ee(t.pondBed)},uIce:{value:ee(t.ice)},uLine:{value:ee(me.surfaceOutline)},uApron:{value:e},uKerbA:{value:ee(me.pinWhite)},uKerbB:{value:ee(me.pinBand)}},r=new aa({color:16777215,vertexColors:!0});return n&&(r.defines={EBG_LOW:""}),r.onBeforeCompile=o=>{Object.assign(o.uniforms,s);let a=o.vertexShader;a=Sn(a,"#include <common>",`attribute vec2 aFlow;
attribute float aMode;
varying vec3 vWPos;
varying vec2 vFlow;
varying float vMode;`),a=Sn(a,"#include <begin_vertex>",`vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vFlow = aFlow;
vMode = aMode;`),o.vertexShader=a;let c=o.fragmentShader;c=Sn(c,"#include <common>",$1),c=Sn(c,"#include <color_fragment>",j1),o.fragmentShader=c},r.customProgramCacheKey=()=>n?"ebg-terrain-v1-low":"ebg-terrain-v1",{material:r,uniforms:s}}const J1=`
varying vec2 vXZ;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vXZ = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Q1=`
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
`;function tM(i,t,e,n){const s=t.waterTris;if(!e.hasWater||s.length===0)return null;const r=i.heightAt,o=t.positions,a=new Map,c=[],l=[];for(const g of s){let v=a.get(g);if(v===void 0){v=c.length/3;const m=o[g*3],p=o[g*3+2];c.push(m,r(m,p)+.03,p),a.set(g,v)}l.push(v)}const u=new Ve;u.setAttribute("position",new _e(c,3)),u.setIndex(l),u.computeBoundingSphere();const f={uMask:{value:e.mask},uAux:{value:e.aux},uMaskXf:{value:e.xf},uTime:{value:0},uLake:{value:i.round===2?1:0},uShallow:{value:ee(n.waterShallow)},uDeep:{value:ee(n.waterDeep)},uFoam:{value:ee(n.waterFoam)},uGlint:{value:ee(n.waterGlint)},uBand:{value:ee(n.hemiSky)}},d=new gn({uniforms:f,vertexShader:J1,fragmentShader:Q1,transparent:!0,depthWrite:!1}),h=new De(u,d);return h.name="course-water",h.renderOrder=1,{mesh:h,uniforms:f}}function eM(i,t,e){return i==="cushion"?(e=e||.42,t?{pts:[[-.2,-.3],[-.2,e-.12],[-.15,e-.03],[-.08,e],[.08,e],[.15,e-.03],[.2,e-.12],[.2,-.3]],roles:["nose","nose","nose","top","nose","nose","nose"],h:e}:{pts:[[0,-.3],[0,e-.12],[.05,e-.03],[.12,e],[.46,e],[.5,e-.05],[.53,e-.12],[.53,-.34]],roles:["nose","nose","nose","top","top","side","side"],h:e}):i==="hedge"?(e=e||.52,t?{pts:[[-.22,-.3],[-.22,e-.2],[-.17,e-.06],[-.08,e],[.08,e],[.17,e-.06],[.22,e-.2],[.22,-.3]],roles:Array(7).fill("hedge"),h:e}:{pts:[[0,-.3],[0,e-.2],[.05,e-.06],[.14,e],[.42,e],[.52,e-.08],[.56,e-.25],[.56,-.34]],roles:Array(7).fill("hedge"),h:e}):i==="bumper"?(e=e||.4,t?{pts:[[-.2,-.3],[-.2,e-.2],[-.16,e-.08],[-.09,e-.01],[-.04,e],[.04,e],[.09,e-.01],[.16,e-.08],[.2,e-.2],[.2,-.3]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}:{pts:[[0,-.3],[0,e-.2],[.04,e-.08],[.12,e-.01],[.21,e],[.31,e],[.4,e-.01],[.47,e-.08],[.5,e-.2],[.5,-.34]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}):(e=e||.4,t?{pts:[[-.18,-.3],[-.18,e-.05],[-.14,e],[.14,e],[.18,e-.05],[.18,-.3]],roles:["face","cap","cap","cap","face"],h:e}:{pts:[[0,-.3],[0,e-.05],[.04,e],[.46,e],[.5,e-.05],[.5,-.34]],roles:["face","cap","cap","cap","side"],h:e})}const nM={cushion:.2,hedge:.22,bumper:.2,wall:.18};function iM(i,t,e,n,s){const r=i.heightAt,o=[],a=i.walls.map(l=>({kind:l.kind,pts:l.pts,closed:l.closed,h:l.h,border:l.border}));for(const l of i.arcsRender||[])a.push({kind:l.kind,pts:ad(l,6),closed:!1,h:void 0,border:!1});const c={nose:ee(n.cushionNose),top:ee(n.railTop),side:ee(n.railSide),sights:ee(n.railSights),hedge:ee(n.hedge),stone:ee(n.wallStone),pad:ee(s),stripe:ee(me.pinWhite)};for(const l of a){const u=sM.has(l.kind)?l.kind:"wall",f=rM(l.pts,l.closed);if(f.length<2)continue;const d=f.length,h=l.closed?d:d-1;let g=0,v=0;for(let X=0;X<h;X++){const D=f[X],$=f[(X+1)%d],q=$.x-D.x,at=$.z-D.z,V=Math.hypot(q,at);if(V<1e-6)continue;const j=-at/V,mt=q/V,H=(D.x+$.x)/2,Q=(D.z+$.z)/2,lt=t.inside(H+j*.35,Q+mt*.35),At=t.inside(H-j*.35,Q-mt*.35);lt!==At&&(g+=lt?-V:V),v+=V}const m=l.border||Math.abs(g)>v*.5,p=m?g>=0?1:-1:1,x=eM(u,!m,l.h),_=m?0:nM[u];for(let X=0;X<h;X++){const D=f[X],$=f[(X+1)%d];o.push({ax:D.x,az:D.z,bx:$.x,bz:$.z,hw:_})}const M=[],S=[];for(let X=0;X<h;X++){const D=f[X],$=f[(X+1)%d],q=Math.hypot($.x-D.x,$.z-D.z);S.push([-($.z-D.z)/q,($.x-D.x)/q,q])}let E=0;const C=(X,D,$,q,at)=>M.push({x:X,z:D,nx:$,nz:q,u:E,join:at}),w=(X,D,$)=>{const q=Math.atan2(D[1],D[0]);let at=Math.atan2($[1],$[0])-q;for(;at>Math.PI;)at-=2*Math.PI;for(;at<-Math.PI;)at+=2*Math.PI;const V=Math.max(1,Math.ceil(Math.abs(at)/(Math.PI/9)));for(let j=0;j<=V;j++){const mt=q+at*j/V;C(X.x,X.z,Math.cos(mt),Math.sin(mt),j>0&&j<V)}},b=(X,D,$,q)=>{for(let V=0;V<=6;V++){const j=q?Math.PI-Math.PI*V/6:-Math.PI*V/6,mt=D[0]*Math.cos(j)-$[0]*Math.sin(j),H=D[1]*Math.cos(j)-$[1]*Math.sin(j);C(X.x,X.z,mt,H,V>0&&V<6)}},y=[];for(let X=0;X<h;X++){const D=f[X],$=f[(X+1)%d],[q,at,V]=S[X],j=[($.x-D.x)/V,($.z-D.z)/V];if(X===0&&!l.closed)m?C(D.x,D.z,q,at,!1):b(D,[q,at],j,!0);else{const Q=S[(X-1+h)%h];w(D,[Q[0],Q[1]],[q,at])}const mt=Math.max(1,Math.ceil(V/.5)),H=E;for(let Q=1;Q<mt;Q++)E=H+V*Q/mt,C(D.x+($.x-D.x)*(Q/mt),D.z+($.z-D.z)*(Q/mt),q,at,!1);if(E=H+V,u==="cushion")for(let Q=Math.ceil((H+.4-1)/2)*2+1;Q<H+V-.4;Q+=2)y.push([D.x+j[0]*(Q-H),D.z+j[1]*(Q-H),q,at,j]);X===h-1&&!l.closed&&(m?C($.x,$.z,q,at,!1):b($,[q,at],j,!1))}if(l.closed&&M.length){const X=M[0];M.push({...X,u:E})}const R=x.pts,N=(X,D,$)=>{const q=R[D][0]*p,at=X.x+X.nx*q,V=X.z+X.nz*q,j=R[D][1]>=0?X.hc+R[D][1]:r(at,V)+R[D][1];return $[0]=at,$[1]=j,$[2]=V,$};for(const X of M)X.hc=r(X.x,X.z);let O=0,Y=0;for(const X of R)O+=X[0],Y+=X[1];O/=R.length,Y/=R.length;const ut=[0,0,0],ot=[0,0,0],xt=[0,0,0],J=[0,0,0];for(let X=0;X<M.length-1;X++){const D=M[X],$=M[X+1],q=(D.nx+$.nx)*.5,at=(D.nz+$.nz)*.5,V=u==="wall"?Math.floor((D.u+$.u)*.5/1.2)%2?.95:1.04:1;for(let j=0;j<R.length-1;j++){const mt=R[j+1][0]-R[j][0];let Q=R[j+1][1]-R[j][1],lt=-mt;const At=(R[j][0]+R[j+1][0])/2-O,Nt=(R[j][1]+R[j+1][1])/2-Y;Q*At+lt*Nt<0&&(Q=-Q,lt=-lt);const et=[q*Q*p,lt,at*Q*p],_t=x.roles[j],B=Math.max(0,(R[j][1]+R[j+1][1])/2)/x.h,nt=lt>.7?1:.72+.33*Math.min(1,B);let Gt,Jt=0;u==="cushion"?Gt=ve(_t==="nose"?c.nose:_t==="top"?c.top:c.side,nt):u==="hedge"?(Gt=ve(c.hedge,.62+.46*Math.min(1,B)),Jt=1):u==="bumper"?Gt=ve(_t==="stripe"?c.stripe:c.pad,_t==="stripe"?1:nt):Gt=ve(c.stone,(_t==="cap"?1:_t==="face"?.8*nt:.66*nt)*V),N(D,j,ut),N($,j,ot),N($,j+1,xt),N(D,j+1,J),e.quad(ut,ot,xt,J,Gt,Jt,et)}}if(!l.closed&&m&&M.length>=2)for(const[X,D]of[[M[0],M[1]],[M[M.length-1],M[M.length-2]]]){const $=[X.x-D.x,0,X.z-D.z],q=R.map((V,j)=>N(X,j,[0,0,0])),at=u==="hedge"?ve(c.hedge,.8):u==="cushion"?c.side:u==="bumper"?c.pad:ve(c.stone,.75);for(let V=1;V<q.length-1;V++)e.tri(q[0],q[V],q[V+1],at,u==="hedge"?1:0,$)}if(u==="cushion"){const X=m?.29:0;for(const[D,$,q,at,V]of y){const j=D+q*X*p,mt=$+at*X*p,H=r(D,$)+x.h+.008,Q=.11,lt=.065,At=[j+V[0]*Q,H,mt+V[1]*Q],Nt=[j-V[0]*Q,H,mt-V[1]*Q],et=[j+q*lt,H,mt+at*lt],_t=[j-q*lt,H,mt-at*lt];e.quad(At,et,Nt,_t,c.sights,0,[0,1,0])}}}return o}const sM=new Set(["cushion","hedge","bumper","wall"]);function rM(i,t){const e=[];for(const n of i){const s=e[e.length-1];(!s||Math.hypot(n.x-s.x,n.z-s.z)>1e-4)&&e.push({x:n.x,z:n.z})}if(t&&e.length>2){const n=e[0],s=e[e.length-1];Math.hypot(n.x-s.x,n.z-s.z)<1e-4&&e.pop()}return e}const oM=(i,t)=>new Zt(i,t),is=(i,t)=>new sa(i.map(([e,n])=>oM(e,n)),t),On=i=>i<0?0:i>1?1:i,aM=[16513779,16763196,16748467,15217199,10189792],cM=[0,0,-1],lM=[0,.866,.5];function uM(i){const t=[ee(i.hedge),No(ee(i.hedge),ee(i.rough),.5),ve(ee(i.rough),1.05)];return{pal:i,greens:t,trunk:ve(ee(i.wood),.62),wood:ee(i.wood),woodDark:ve(ee(i.wood),.72),stone:ee(i.wallStone),soil:ve(ee(i.soilTop),.8),chalk:ee(me.chalk),chalkTop:ee(14674423),white:ee(me.pinWhite),red:ee(me.pinBand),candy:ee(15022389),black:ee(me.eightBody),water:ee(i.waterShallow),foam:ee(i.waterFoam),reeds:ee(i.reeds),cattail:ee(7029286),lily:ve(ee(i.rough),1.12),flowers:aM.map(ee)}}function fM(i,t,e,n,s,r,o){const{x:a,z:c,r:l}=n,u=n.kind||"post";if(u==="bumper"){const d=o[r%o.length],h=ee(me.poolBalls[(d-1)%8]),g=is([[l+.02,-.3],[l,0],[l,.13],[l,.27],[l,.36],[l*.95+0,.45],[l*.84,.5],[0,.5]],28);i.geo(g,(v,m)=>m>.13&&m<.27?e.white:ve(h,m>.4?1.05:.8+.25*On(m/.36)),{matrix:qe(a,s,c)}),t.disc([a,s+.503,c],[0,1,0],cM,Math.min(l*.56,.48),d);return}if(u==="tree"){const d=is([[l+.02,-.3],[l,.28],[l-.04,.33],[l-.15,.33],[l-.18,.2],[0,.2]],32);i.geo(d,(M,S,E)=>Math.hypot(M,E)<l-.17&&S<.25?e.soil:ve(e.stone,S>.3?1:.68+.3*On(S/.28)),{matrix:qe(a,s,c)});const h=Math.max(.55,l*.9),g=.75+h*.82,v=Math.min(.32,.08+l*.07),m=new Hn(v*.8,v,g,8);m.translate(0,g/2,0),i.geo(m,()=>e.trunk,{matrix:qe(a,s,c)});const p=e.greens[r%3],x=new gi(h,18,12);i.geo(x,(M,S)=>ve(p,.66+.42*On((S+h)/(2*h))),{leaf:1,flat:!1,matrix:qe(a,s+g,c,0,[1,.8,1])});const _=new gi(h*.5,14,10);i.geo(_,(M,S)=>ve(p,.85+.3*On((S+h*.5)/h)),{leaf:1,flat:!1,matrix:qe(a-h*.08,s+g+h*.72,c-h*.05,0,[1,.85,1])});return}if(u==="lollipop"){const d=[[l+.02,-.3]];for(let m=0;m<=5;m++)d.push([l,m*.1]);d.push([l*.9,.58],[0,.58]),i.geo(is(d,24),(m,p,x)=>p>.52?e.white:((Math.atan2(x,m)/(Math.PI*2)*2+p*1.8)%1+1)%1<.5?e.candy:e.white,{matrix:qe(a,s,c)});const h=new Hn(.045,.045,.6,6);h.translate(0,.86,0),i.geo(h,()=>e.white,{matrix:qe(a,s,c)});const g=Math.min(.5,Math.max(.3,l*.75)),v=new gi(g,16,10);i.geo(v,(m,p,x)=>(Math.atan2(x,m)/(Math.PI*2)*3+p/g*.9+2)%1<.5?e.candy:e.white,{matrix:qe(a,s+1.16+g*.8,c,0,[1,.85,1])});return}if(l>=1){const d=is([[l+.02,-.3],[l,.42],[l-.08,.62],[l-.25,.72],[l*.5,.76],[0,.76]],32),h=e.greens[0];i.geo(d,(g,v)=>ve(h,.62+.46*On(v/.76)),{leaf:1,flat:!1,matrix:qe(a,s,c)});return}const f=is([[l+.02,-.3],[l,0],[l,.5],[l-Math.min(.07,l*.2),.57],[0,.57]],20);i.geo(f,(d,h)=>h>.515?e.chalkTop:ve(e.chalk,.74+.3*On(h/.5)),{matrix:qe(a,s,c)})}function cd(i,t,e,n,s,r,o,a=0){const c=qe(e,n,s,a,r),l=.8,u=new Hn(.08,.13,l+.3,6);u.translate(0,l/2-.15,0),i.geo(u,()=>t.trunk,{matrix:c});const f=t.greens[Math.floor(o()*3)],d=[[0,l+.5,0,.62],[.36,l+.3,.12,.42],[-.34,l+.34,-.12,.44],[.06,l+.95,-.04,.4]];for(const[h,g,v,m]of d){const p=new js(m*(.92+o()*.16),1);p.translate(h,g,v),i.geo(p,(x,_)=>ve(f,.66+.46*On((_-l)/1.35)),{leaf:1,matrix:c})}}function hl(i,t,e,n,s,r,o,a=0){const c=qe(e,n,s,a,r),l=t.greens[Math.floor(o()*3)],u=2+Math.floor(o()*2);for(let f=0;f<u;f++){const d=f/u*Math.PI*2+o(),h=.3+o()*.12,g=new js(h,1);g.scale(1,.85,1),g.translate(Math.cos(d)*.22,h*.75,Math.sin(d)*.22),i.geo(g,(v,m)=>ve(l,.68+.5*On(m/.75)),{leaf:1,matrix:c})}}function ld(i,t,e,n,s,r,o,a=0){const c=qe(e,n,s,a,r),l=5+Math.floor(o()*3),u=Math.floor(o()*t.flowers.length),f=ve(t.greens[1],.85);for(let d=0;d<l;d++){const h=o()*Math.PI*2,g=Math.sqrt(o())*.42,v=.18+o()*.16,m=Math.cos(h)*g,p=Math.sin(h)*g,x=new Hn(.015,.018,v,3);x.translate(m,v/2,p),i.geo(x,()=>f,{matrix:c});const _=new Nr(.075+o()*.025);_.scale(1,.6,1),_.translate(m,v+.02,p);const M=t.flowers[(u+(o()<.7?0:1+Math.floor(o()*3)))%t.flowers.length];i.geo(_,()=>M,{matrix:c})}for(let d=0;d<2;d++){const h=new ra(.09,.2,4);h.translate((o()-.5)*.4,.1,(o()-.5)*.4),i.geo(h,()=>t.greens[2],{leaf:.5,matrix:c})}}const hM=(i,t,e,n)=>((Math.atan2(e,t)/(Math.PI*2)+Math.hypot(t,e)/n*1.4)%1+1)%1<.5?i.candy:i.white;function dM(i,t,e,n,s,r){const o=qe(e,n,s,0,r),a=new Hn(.05,.05,1.7,6);a.translate(0,.85,0),i.geo(a,()=>t.white,{matrix:o});const c=.58,l=new gi(c,24,12);l.scale(1,1,.3);const u=new ye().makeRotationX(-Math.PI/6),f=l.applyMatrix4(u),d=new ye().copy(u).invert(),h=new tt;f.translate(0,1.7+c*.8,0),i.geo(f,(g,v,m)=>(h.set(g,v-1.7-c*.8,m).applyMatrix4(d),Math.abs(h.z)>.1&&Math.hypot(h.x,h.y)<c*.97?hM(t,h.x,h.y,c):t.white),{matrix:o})}function pM(i,t,e,n,s,r,o){const a=qe(n,s,r,0,o),c=new Bn(1.7,.6,1.7);c.translate(0,.2,0),i.geo(c,(v,m)=>ve(e.stone,m>.45?1:.72),{matrix:a});const l=new Bn(1.9,.14,1.9);l.translate(0,.5,0),i.geo(l,(v,m)=>ve(e.stone,m>.55?1.05:.8),{matrix:a});const u=.95,f=new gi(u,28,18);f.translate(0,.57+u*.96,0),i.geo(f,()=>e.black,{flat:!1,matrix:a});const d=[n,s+(.57+u*.96)*o,r],h=lM,g=u*o;t.disc([d[0]+h[0]*g,d[1]+h[1]*g,d[2]+h[2]*g],h,[0,.5,-.866],u*.46*o,8,{c:d,r:g+.006})}function mM(i,t,e,n,s,r,o){const a=qe(e,n,s,0,r);if(!o){const f=is([[1.3,-.3],[1.3,.42],[1.22,.5],[1.1,.5],[1.06,.42],[1.04,.3],[0,.3]],32);i.geo(f,(h,g,v)=>Math.hypot(h,v)<1.03&&g<.35?t.water:ve(t.stone,g>.45?1:.7+.25*On(g/.42)),{matrix:a});const d=new Ul(1.04,28);d.rotateX(-Math.PI/2),d.translate(0,.37,0),i.geo(d,(h,g,v)=>Math.hypot(h,v)>.86?t.foam:t.water,{matrix:a})}const c=is([[.22,o?-.5:.3],[.16,.5],[.13,.95],[.5,1.05],[.52,1.14],[.12,1.16],[0,1.16]],16);i.geo(c,(f,d)=>ve(t.stone,d>1?1:.78),{matrix:a});const l=new js(.2,1);l.scale(1,1.5,1),l.translate(0,1.42,0),i.geo(l,(f,d)=>d>1.45?t.white:t.foam,{matrix:a});const u=6;for(let f=0;f<u;f++){const d=f/u*Math.PI*2,h=new js(.07,0);h.translate(Math.cos(d)*.62,1,Math.sin(d)*.62),i.geo(h,()=>t.foam,{matrix:a})}}function gM(i,t,e,n,s,r,o,a){const c=(r||.7)*o,l=.6,u=18,f=a()*Math.PI*2,d=t.lily,h=ve(t.lily,.78);for(let g=0;g<u;g++){const v=f+l/2+(Math.PI*2-l)*g/u,m=f+l/2+(Math.PI*2-l)*(g+1)/u,p=[e+Math.cos(v)*c,n,s+Math.sin(v)*c],x=[e+Math.cos(m)*c,n,s+Math.sin(m)*c],_=[e+Math.cos(v)*c*.82,n+.01,s+Math.sin(v)*c*.82],M=[e+Math.cos(m)*c*.82,n+.01,s+Math.sin(m)*c*.82];i.tri([e,n+.015,s],_,M,d,0,[0,1,0]),i.quad(_,p,x,M,h,0,[0,1,0])}if(a()<.4){const g=new Nr(.16*o);g.scale(1,.7,1),g.translate(e+Math.cos(f+Math.PI)*c*.3,n+.1,s+Math.sin(f+Math.PI)*c*.3),i.geo(g,()=>t.flowers[2])}}function xM(i,t,e,n,s,r,o){const a=qe(e,n,s,o()*6.28,r),c=7;for(let l=0;l<c;l++){const u=l/c*Math.PI*2+o(),f=.1+o()*.3,d=.8+o()*.5,h=new Hn(.012,.035,d,3);if(h.translate(0,d/2-.2,0),h.rotateZ((o()-.5)*.25),h.translate(Math.cos(u)*f,0,Math.sin(u)*f),i.geo(h,(g,v)=>ve(t.reeds,.75+.35*On(v/d)),{matrix:a}),l%2===0){const g=new zl(.05,.18,2,6);g.translate(Math.cos(u)*f,d-.3,Math.sin(u)*f),i.geo(g,()=>t.cattail,{matrix:a})}}}function vM(i,t,e,n,s,r,o,a){const c=qe(e,n,s,o,r),l=new Bn(1.6,.42,.55);l.translate(0,.11,0),i.geo(l,(d,h)=>h>.3?t.soil:ve(t.wood,.7+.3*On((h+.1)/.4)),{matrix:c});const u=new Bn(1.7,.06,.65);u.translate(0,.33,0),i.geo(u,()=>t.wood,{matrix:c});const f=6;for(let d=0;d<f;d++){const h=-.65+1.3*d/(f-1),g=.12+a()*.1,v=new Nr(.09);v.scale(1,.65,1),v.translate(h,.36+g,(a()-.5)*.2),i.geo(v,()=>t.flowers[(d+Math.floor(a()*2))%t.flowers.length],{matrix:c});const m=new ra(.08,g+.05,4);m.translate(h,.36+g/2,0),i.geo(m,()=>t.greens[1],{leaf:.5,matrix:c})}}function _M(i,t,e,n){const s=2*(n.r||3),r=4*(n.scale||1),o=(n.rot||0)*Math.PI/180,a=Math.cos(o),c=-Math.sin(o),l=-c,u=a,f=Math.max(2,Math.round(s/.34)),d=s/f,h=(g,v,m)=>{const p=n.x+a*g+l*v,x=n.z+c*g+u*v;return[p,e(p,x)+m,x]};for(let g=0;g<f;g++){const v=-s/2+g*d+.025,m=v+d-.05,p=ve(t.wood,g%2?.92:1.04),x=r/2+(g%3===0?.06:0),_=h(v,-x,.03),M=h(m,-x,.03),S=h(m,x,.03),E=h(v,x,.03);i.quad(_,M,S,E,p,0,[0,1,0]);const C=h(v,-x,-.1),w=h(m,-x,-.1),b=h(m,x,-.1),y=h(v,x,-.1),R=ve(p,.66);i.quad(_,C,w,M,R,0,[-l,0,-u]),i.quad(S,b,y,E,R,0,[l,0,u]),i.quad(M,w,b,S,R,0,[a,0,c]),i.quad(E,y,C,_,R,0,[-a,0,-c])}for(const g of[-1,1])for(const v of[-1,1]){const[m,p,x]=h(v*(s/2-.15),g*(r/2+.2),0),_=new Hn(.1,.12,.7,8);_.translate(0,.1,0),i.geo(_,(M,S)=>ve(t.wood,S>.4?1:.7),{matrix:qe(m,p,x)})}}function MM(i,t,e,n,s,r,o,a){const c=qe(n,s,r,0,o),l=new Bn(.14,1.2,.14);l.translate(0,.45,0),i.geo(l,()=>e.woodDark,{matrix:c});const u=new Bn(1.2,.75,.1);u.rotateX(-.5),u.translate(0,1.15,.04),i.geo(u,(h,g,v)=>ve(e.wood,v>.05?1.05:.75),{matrix:c});const f=[0,Math.sin(.5),Math.cos(.5)],d=[0,Math.cos(.5),-Math.sin(.5)];t.disc([n,s+1.15*o+f[1]*.056*o,r+.04*o+f[2]*.056*o],f,d,.3*o,a)}function ud(i,t,e){for(let n=0;n<=3.4;n+=.4)if(i.inside(t,e-n)||i.inside(t+n,e)||i.inside(t-.9,e-n)||i.inside(t+.9,e-n))return!1;return!0}function fd(i,t,e,n){const s=i.heightAt;if(t.inside(e,n))return s(e,n);const r=t.nearest(e,n),o=Math.min(r.d,Ko);return s(r.x,r.z)-.15-.07*(o/Ko)}function yM(i,t,e,n,s,r){const o=i.heightAt,a=i.hole&&i.hole.number||1;for(const c of i.props||[]){const l=c.scale||1,u=(c.rot||0)*Math.PI/180,f=i.surfaceAt(c.x,c.z)==="water",d=fd(i,t,c.x,c.z);switch(c.type){case"tree":t.nearest(c.x,c.z).d<3&&!ud(t,c.x,c.z)?hl(e,s,c.x,d,c.z,1.2*l,r,u):cd(e,s,c.x,d,c.z,l*(c.r?c.r/.9:1),r,u);break;case"bush":hl(e,s,c.x,d,c.z,l*(c.r?c.r/.55:1),r,u);break;case"flowers":ld(e,s,c.x,d,c.z,l*(c.r?c.r/.45:1),r,u);break;case"lollipop":dM(e,s,c.x,d,c.z,l);break;case"statue8":pM(e,n,s,c.x,d,c.z,l);break;case"fountain":mM(e,s,c.x,f?d-.3:d,c.z,l,f);break;case"lilypad":gM(e,s,c.x,o(c.x,c.z)+.05,c.z,c.r,l,r);break;case"reeds":xM(e,s,c.x,f?o(c.x,c.z)-.25:d,c.z,l,r);break;case"flowerbox":vM(e,s,c.x,d,c.z,l,u,r);break;case"bridge":_M(e,s,o,c);break;case"sign":MM(e,n,s,c.x,d,c.z,l,a);break}}}const SM={tree:1.3,bush:.9,flowers:.8,lollipop:.9,statue8:1.5,fountain:1.6,sign:.9,flowerbox:1.1,reeds:.7};function bM(i,t){const e=[];for(const n of i.props||[]){const s=SM[n.type];if(!s||t.inside(n.x,n.z))continue;const r=s*(n.scale||1)+.6,o=t.nearest(n.x,n.z);t.walled(o.seg,o.t)&&o.d+r<=t.apronW-.1||e.push({x:n.x,z:n.z,r})}return e}function wM(i,t,e,n,s){if(!t.anyWalled||t.apronW<2)return 0;const r=[];for(const u of i.props||[])r.push([u.x,u.z,1.6]);for(const u of i.posts||[])r.push([u.x,u.z,u.r+1]);const o=(u,f,d)=>{for(const[h,g,v]of r)if(Math.hypot(h-u,g-f)<v+d)return!1;return!0},a=t.poly,c=t.count;let l=0;for(let u=0;u<c;u++){const f=a[u*2],d=a[u*2+1],h=a[(u+1)%c*2],g=a[(u+1)%c*2+1],v=t.segLen[u],m=t.segN[u*2],p=t.segN[u*2+1];for(let x=s()*1.2;x<v;x+=1.25+s()*.9){const _=x/v;if(!t.walled(u,_))continue;const M=1+s()*1.55,S=f+(h-f)*_+m*M,E=d+(g-d)*_+p*M;if(t.inside(S,E))continue;const C=t.nearest(S,E);if(C.d<.95||C.d>t.apronW-.35||!t.walled(C.seg,C.t))continue;const w=s(),b=fd(i,t,S,E);if(w<.3&&C.d>1.55&&ud(t,S,E)&&o(S,E,1))cd(e,n,S,b,E,.85+s()*.3,s,s()*6.28),r.push([S,E,1]);else if(w<.66&&o(S,E,.6))hl(e,n,S,b,E,.8+s()*.4,s,s()*6.28),r.push([S,E,.6]);else if(o(S,E,.45))ld(e,n,S,b,E,.9+s()*.3,s,s()*6.28),r.push([S,E,.45]);else continue;l++}}return l}const hi=8,Er=4,ss=128;let Ln=null;const bf=i=>"#"+i.toString(16).padStart(6,"0");function wf(i){const t=i.getContext("2d");t.clearRect(0,0,i.width,i.height);for(let e=0;e<hi*Er;e++){const n=e%hi*ss+ss/2,s=Math.floor(e/hi)*ss+ss/2;t.fillStyle=bf(me.flagDisc),t.beginPath(),t.arc(n,s,ss*.47,0,Math.PI*2),t.fill();const r=String(e+1);t.fillStyle=bf(me.eightInk),t.font=`${r.length>1?66:82}px "Lilita One", "Arial Black", "Arial Rounded MT Bold", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,n,s+5)}}function hd(){if(Ln)return Ln;if(typeof document>"u")return Ln=new Pl(new Uint8Array([255,255,255,255]),1,1),Ln.colorSpace=Qe,Ln.needsUpdate=!0,Ln;const i=document.createElement("canvas");return i.width=hi*ss,i.height=Er*ss,wf(i),Ln=new Ll(i),Ln.colorSpace=Qe,Ln.anisotropy=4,document.fonts&&document.fonts.load&&document.fonts.load('80px "Lilita One"').then(()=>{wf(i),Ln.needsUpdate=!0}).catch(()=>{}),Ln}const EM=i=>i!==null&&i===Ln;function dd(i){const t=Math.max(0,Math.min(hi*Er-1,(i|0)-1)),e=t%hi,n=Math.floor(t/hi);return[e/hi,1-(n+1)/Er,1/hi,1/Er]}const ja=new tt,bo=new tt,Ps=new tt,Pi=new tt;class TM{constructor(){this.pos=[],this.nor=[],this.uv=[]}get count(){return this.pos.length/9}disc(t,e,n,s,r,o=null){Ps.set(e[0],e[1],e[2]).normalize(),bo.set(n[0],n[1],n[2]),ja.crossVectors(bo,Ps).normalize(),bo.crossVectors(Ps,ja).normalize();const[a,c,l,u]=dd(r),f=24,d=[];for(let g=0;g<=f;g++){const v=g/f*Math.PI*2;d.push(Math.cos(v),Math.sin(v))}const h=(g,v)=>{Pi.set(t[0],t[1],t[2]).addScaledVector(ja,g*s).addScaledVector(bo,v*s);let m=Ps.x,p=Ps.y,x=Ps.z;if(o){const _=Pi.x-o.c[0],M=Pi.y-o.c[1],S=Pi.z-o.c[2],E=Math.hypot(_,M,S)||1;m=_/E,p=M/E,x=S/E,Pi.set(o.c[0]+m*o.r,o.c[1]+p*o.r,o.c[2]+x*o.r)}this.pos.push(Pi.x,Pi.y,Pi.z),this.nor.push(m,p,x),this.uv.push(a+(.5+.47*g)*l,c+(.5+.47*v)*u)};for(let g=0;g<f;g++){const v=d[g*2],m=d[g*2+1],p=d[g*2+2],x=d[g*2+3];h(0,0),h(v*.5,m*.5),h(p*.5,x*.5),h(v*.5,m*.5),h(v,m),h(p,x),h(v*.5,m*.5),h(p,x),h(p*.5,x*.5)}}build(){const t=new Ve;return t.setAttribute("position",new _e(this.pos,3)),t.setAttribute("normal",new _e(this.nor,3)),t.setAttribute("uv",new _e(this.uv,2)),t.computeBoundingSphere(),t}}const gr=3,Ls=1.7,Za=1.06;function AM(i,t,e,n){const s=new Hn(.07,.075,gr+.7,8,16);s.translate(0,(gr+.7)/2-.7,0);const r=ee(me.pinWhite),o=ee(me.pinBand),a=gr/8;i.geo(s,(l,u)=>u>0&&Math.floor(u/a)%2===1?o:r,{flat:!1,matrix:new ye().makeTranslation(t,e,n)});const c=new gi(.09,10,8);c.translate(t,e+gr+.05,n),i.geo(c,()=>r,{flat:!1})}const CM=`
uniform float uTime;
uniform float uAmp;
float ebgWave(float x) { return sin(x * 3.2 - uTime * 6.5) * 0.5 + sin(x * 5.3 - uTime * 10.0 + 1.3) * 0.2; }
float ebgWaveD(float x) { return cos(x * 3.2 - uTime * 6.5) * 1.6 + cos(x * 5.3 - uTime * 10.0 + 1.3) * 1.06; }
`,RM=`
uniform vec4 uCell;
uniform vec2 uDiscC;
uniform vec2 uDiscS;
uniform vec3 uCloth;
`,PM=`
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
`;function LM(i){const t=new os;t.name="course-flag";const e=new ds(Ls,Za,14,3);e.translate(Ls/2+.05,gr-Za/2-.06,0);const n=hd(),s=.78,r={uTime:{value:0},uAmp:{value:1},uCell:{value:new Ie(...dd(i))},uDiscC:{value:new Zt(.56,.5)},uDiscS:{value:new Zt(s/Ls,s/Za)},uCloth:{value:ee(me.flagCloth)}},o=new aa({color:16777215,map:n,side:yn});o.onBeforeCompile=c=>{Object.assign(c.uniforms,r);let l=c.vertexShader;l=Sn(l,"#include <common>",CM),l=Sn(l,"#include <beginnormal_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ls.toFixed(3)}, 0.0, 1.0);
  float dz = (ebgWaveD(position.x) * kk + ebgWave(position.x) / ${Ls.toFixed(3)}) * 0.18 * uAmp;
  objectNormal = normalize(vec3(-dz, 0.0, 1.0));
}`),l=Sn(l,"#include <begin_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ls.toFixed(3)}, 0.0, 1.0);
  transformed.z += ebgWave(position.x) * 0.18 * uAmp * kk;
  transformed.y -= kk * kk * 0.08;
}`),c.vertexShader=l;let u=c.fragmentShader;u=Sn(u,"#include <common>",RM),u=Sn(u,"#include <map_fragment>",PM,"replace"),c.fragmentShader=u},o.customProgramCacheKey=()=>"ebg-flag-v1";const a=new De(e,o);return a.name="course-flag-cloth",t.add(a),{group:t,uniforms:r,cloth:a}}const IM=`
varying vec2 vLocal;
void main() {
  vLocal = position.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,DM=`
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
`;function zM(i,t,e,n,s){const r=[0,.3,.6,.8,n*.86,n,n+.15,n+.35,n+s,n+s+.3,n*1.05+1.55],o=40,a=[],c=[];for(let M=0;M<r.length;M++){const S=M===0?1:o;for(let E=0;E<S;E++){const C=E/o*Math.PI*2,w=Math.cos(C)*r[M],b=Math.sin(C)*r[M];a.push(w,i(t+w,e+b)+.012,b)}}const l=M=>M===0?0:1+(M-1)*o;for(let M=0;M<o;M++)c.push(0,l(1)+(M+1)%o,l(1)+M);for(let M=1;M<r.length-1;M++){const S=l(M),E=l(M+1);for(let C=0;C<o;C++){const w=(C+1)%o;c.push(S+C,S+w,E+w,S+C,E+w,E+C)}}const u=new Ve;u.setAttribute("position",new _e(a,3)),u.setIndex(c);const f=u.attributes.position,d=c.slice(0,3),h=f.getX(d[1])-f.getX(d[0]),g=f.getZ(d[1])-f.getZ(d[0]),v=f.getX(d[2])-f.getX(d[0]),m=f.getZ(d[2])-f.getZ(d[0]);if(g*v-h*m<0){for(let M=0;M<c.length;M+=3){const S=c[M+1];c[M+1]=c[M+2],c[M+2]=S}u.setIndex(c)}u.computeBoundingSphere();const p={uR:{value:n},uLip:{value:n+s},uTime:{value:0},uLightDir:{value:new Zt(-.7071,-.7071)},uInside:{value:ee(me.cupInside)},uLiner:{value:ee(me.cupLiner)},uHalo:{value:ee(me.blobShadow)}},x=new gn({uniforms:p,vertexShader:IM,fragmentShader:DM,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),_=new De(u,x);return _.name="course-cup",_.position.set(t,0,e),_.renderOrder=2,{mesh:_,uniforms:p}}const UM=.3,NM=.3,FM=1e3;function pd(i,t){const e=od(t.round),n=t.heightAt,s=U1(String(t.id||"hole")),r=new os;r.name="course";const o=F1(t),a=uM(e),c=new O1,l=new TM,u=9+Math.floor(s()*7),f=9+(u-9+2+Math.floor(s()*4))%7,d=[u,f],h=iM(t,o,c,e,me.poolBalls[(u-1)%8]);let g=0;t.posts.forEach((D,$)=>{const q=D.kind||"post";fM(c,l,a,D,n(D.x,D.z),q==="bumper"?g++:$,d),h.push({x:D.x,z:D.z,r:D.r})});const v=W1(t,o,h),m=K1(t,o,v,e,bM(t,o),i?i.tier:1);r.add(m.mesh);const p=tM(t,m,v,e);p&&r.add(p.mesh),yM(t,o,c,l,a,s);const x=wM(t,o,c,a,s),_=t.cup.x,M=t.cup.z,S=n(_,M);AM(c,_,S,M);const E=zM(n,_,M,kt.HOLE_R,kt.LIP_W);r.add(E.mesh);const C=LM(t.hole&&t.hole.number||1);C.group.position.set(_,S,M),r.add(C.group);const w=new De(c.build(),kM());w.name="course-solids",w.castShadow=!0,w.receiveShadow=!0,r.add(w);let b=null;l.count>0&&(b=new De(l.build(),new aa({map:hd()})),b.name="course-labels",b.receiveShadow=!0,r.add(b)),r.userData.stats={decor:x},i&&i.scene&&i.scene.add(r),i&&i.renderer&&i.renderer.shadowMap&&(i.renderer.shadowMap.needsUpdate=!0);let y=0,R=0,N=0,O=!1;const Y=m.uniforms;function ut(D,$){if(O)return;const q=$%FM,at=D/UM;R+=Math.max(-at,Math.min(at,y-R)),Y.uTime.value=q,Y.uFlow.value=R*R*(3-2*R),p&&(p.uniforms.uTime.value=q),E.uniforms.uTime.value=q,C.uniforms.uTime.value=q,N>0&&(N=Math.max(0,N-D)),C.uniforms.uAmp.value=1+Math.min(1,N/.08)}function ot(D){y=D>1?1:D>0?D:0}function xt(){N=NM}function J(D){if(!D||!D.position)return;const $=D.position.x-_,q=D.position.z-M;if($*$+q*q<1e-8)return;const at=Math.atan2($,q);C.group.rotation.y=at;const V=at+225*Math.PI/180;E.uniforms.uLightDir.value.set(Math.sin(V),Math.cos(V))}function X(){O||(O=!0,r.removeFromParent(),r.traverse(D=>{if(!D.isMesh)return;D.geometry.dispose();const $=Array.isArray(D.material)?D.material:[D.material];for(const q of $)q.map&&!EM(q.map)&&q.map.dispose(),q.dispose()}),v.mask.dispose(),v.aux.dispose())}return i&&i.camera&&J(i.camera),{group:r,update:ut,setFlow:ot,wiggleFlag:xt,faceCamera:J,dispose:X}}const OM=`
varying float vLeaf;
varying vec3 vLeafPos;
float lfH(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float lfNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lfH(i), lfH(i + vec2(1.0, 0.0)), f.x), mix(lfH(i + vec2(0.0, 1.0)), lfH(i + vec2(1.0, 1.0)), f.x), f.y);
}
`;function kM(){const i=new aa({color:16777215,vertexColors:!0});return i.onBeforeCompile=t=>{let e=t.vertexShader;e=Sn(e,"#include <common>",`attribute float aLeaf;
varying float vLeaf;
varying vec3 vLeafPos;`),e=Sn(e,"#include <begin_vertex>",`vLeaf = aLeaf;
vLeafPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.vertexShader=e;let n=t.fragmentShader;n=Sn(n,"#include <common>",OM),n=Sn(n,"#include <color_fragment>",`{
  vec2 lp = vLeafPos.xz * 4.5 + vec2(vLeafPos.y * 3.1, vLeafPos.y * -2.3);
  float ln = lfNoise(lp) * 0.65 + lfNoise(lp * 2.7) * 0.35;
  diffuseColor.rgb *= 1.0 + vLeaf * (ln - 0.5) * 0.5;
}`),t.fragmentShader=n},i.customProgramCacheKey=()=>"ebg-solids-v1",i}const Li=kt.R,Bi=Math.PI*2,BM=["classic","tennis","beach","planet","donut","snow","gold"],HM=14,Ef=1.4,wo=.24,GM=.12,Tf=.38,Af=.34,Ja=.7,VM=.12,Qa=.16,Eo=.35,ci=i=>i<0?0:i>1?1:i,Be=(i,t,e)=>{const n=ci((e-i)/(t-i));return n*n*(3-2*n)},Ce=i=>[i>>16&255,i>>8&255,i&255];function He(i,t,e){i[0]+=(t[0]-i[0])*e,i[1]+=(t[1]-i[1])*e,i[2]+=(t[2]-i[2])*e}function vi(i,t){i[0]=t[0],i[1]=t[1],i[2]=t[2]}function WM(i,t){i[0]*=t,i[1]*=t,i[2]*=t}const Fr=i=>Math.acos(i<-1?-1:i>1?1:i);function li(i,t,e,n){let s=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,1274126177)^Math.imul(n+1,2246822519);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function md(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=i-s,c=t-r,l=e-o,u=a*a*(3-2*a),f=c*c*(3-2*c),d=l*l*(3-2*l),h=(g,v,m)=>g+(v-g)*m;return h(h(h(li(s,r,o,n),li(s+1,r,o,n),u),h(li(s,r+1,o,n),li(s+1,r+1,o,n),u),f),h(h(li(s,r,o+1,n),li(s+1,r,o+1,n),u),h(li(s,r+1,o+1,n),li(s+1,r+1,o+1,n),u),f),d)}function Zs(i,t,e,n,s=4){let r=.5,o=1,a=0,c=0;for(let l=0;l<s;l++)a+=r*md(i*o,t*o,e*o,n+l*17),c+=r,r*=.5,o*=2.03;return a/c}function gd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function XM(i,t,e,n){const s=.809016994375,r=-.587785252292,o=-s,a=r;i=Math.abs(i);let c=Math.max(s*i+r*t,0)*2;i-=c*s,t-=c*r,c=Math.max(o*i+a*t,0)*2,i-=c*o,t-=c*a,i=Math.abs(i),t-=e;const l=n*-r-0,u=n*s-1,f=Math.min(e,Math.max(0,(i*l+t*u)/(l*l+u*u))),d=i-l*f,h=t-u*f;return Math.sqrt(d*d+h*h)*Math.sign(t*l-i*u)}const qM=Ce(me.cueBody),YM=Ce(me.cueDots),KM=Ce(me.eightBody),$M=Ce(me.eightDisc),$n=me.poolBalls.map(Ce),Ir=Ce(16513779);function jM(i,t,e,n,s){vi(s,qM);const r=Fr(Math.max(Math.abs(i),Math.abs(t),Math.abs(e)));He(s,YM,Be(.2+n,.2-n,r))}const Cf=.52;function ZM(i,t,e,n,s){vi(s,KM);const r=Fr(Math.abs(e));He(s,$M,Be(Cf+n,Cf-n,r))}const dl=.72,pl=.28,JM=2*Math.sqrt(dl*pl),Oo=(i,t)=>(t[0]=dl*Math.cos(i)+pl*Math.cos(3*i),t[1]=JM*Math.sin(2*i),t[2]=dl*Math.sin(i)-pl*Math.sin(3*i),t),Hs=72,tc=(()=>{const i=new Float64Array(Hs*3),t=[0,0,0];for(let e=0;e<Hs;e++)Oo(e/Hs*Bi,t),i[e*3]=t[0],i[e*3+1]=t[1],i[e*3+2]=t[2];return i})(),Pn=[0,0,0];function QM(i,t,e){let n=-2,s=0;for(let a=0;a<Hs;a++){const c=i*tc[a*3]+t*tc[a*3+1]+e*tc[a*3+2];c>n&&(n=c,s=a)}let r=(s-1)/Hs*Bi,o=(s+1)/Hs*Bi;for(let a=0;a<14;a++){const c=r+(o-r)*.382,l=r+(o-r)*.618;Oo(c,Pn);const u=i*Pn[0]+t*Pn[1]+e*Pn[2];Oo(l,Pn);const f=i*Pn[0]+t*Pn[1]+e*Pn[2];u>f?o=l:r=c}return Oo((r+o)/2,Pn),Fr(i*Pn[0]+t*Pn[1]+e*Pn[2])}const ty=Ce(13952570),ey=Ce(16316138),ny=Ce(11123498);function iy(i,t,e,n,s){vi(s,ty),WM(s,.94+.12*Zs(i*9+3,t*9,e*9,11,3));const r=QM(i,t,e);He(s,ny,Be(.085+n,.085-n,r)*.8),He(s,ey,Be(.05+n,.05-n,r))}const ec=[$n[2],Ir,$n[1],$n[0],Ir,$n[5]];function sy(i,t,e,n,s){let r=Math.atan2(e,-i);r<0&&(r+=Bi);const o=Bi/6,a=Math.floor(r/o)%6,c=r-a*o,l=Math.sqrt(Math.max(0,1-t*t));vi(s,ec[a]);const u=Math.min(c,o-c)*l,f=c<o/2?ec[(a+5)%6]:ec[(a+1)%6];He(s,f,Be(n,-n,u));const d=Fr(Math.abs(t));He(s,Ir,Be(.36+n,.36-n,d)),He(s,$n[0],Be(.12+n,.12-n,d))}const ry=Ce(2052008),oy=Ce(4167142),ay=Ce(15326364),cy=Ce(4170573),ly=Ce(9227102),uy=Ce(16055039);function fy(i,t,e,n,s){const r=Zs(i*1.9+7.1,t*1.9+3.3,e*1.9+1.7,5,5);vi(s,ry),He(s,oy,Be(.36,.5,r));const o=.52,a=.012+n*.5;He(s,ay,Be(o-a,o+a,r)),He(s,cy,Be(o+.012-a,o+.012+a,r)),He(s,ly,Be(.6,.7,r)*.8);const c=Math.abs(t)-(.84+.07*(Zs(i*5,t*5,e*5,9,3)-.5));He(s,uy,Be(-n,n,c))}const hy=Ce(14262363),dy=Ce(15778430),nc=Ce(16748480),py=Ce(15036070),Rf=(()=>{const i=gd(388824),t=[],e=[$n[0],$n[1],Ir,$n[5],$n[4],$n[3],Ir];for(let n=0;t.length<64&&n<1e3;n++){const s=i()*2-1,r=i()*Bi,o=Math.sqrt(1-s*s),a=[o*Math.cos(r),s,o*Math.sin(r)];if(a[1]<.08)continue;let c=!1;for(const _ of t)if(_.c[0]*a[0]+_.c[1]*a[1]+_.c[2]*a[2]>.985){c=!0;break}if(c)continue;let l=-a[2],u=0,f=a[0],d=Math.hypot(l,u,f)||1;l/=d,u/=d,f/=d;const h=a[1]*f-a[2]*u,g=a[2]*l-a[0]*f,v=a[0]*u-a[1]*l,m=i()*Math.PI,p=[l*Math.cos(m)+h*Math.sin(m),u*Math.cos(m)+g*Math.sin(m),f*Math.cos(m)+v*Math.sin(m)],x=[a[1]*p[2]-a[2]*p[1],a[2]*p[0]-a[0]*p[2],a[0]*p[1]-a[1]*p[0]];t.push({c:a,t1:p,t2:x,col:e[t.length%e.length]})}return t})();function my(i,t,e,n,s){const r=Math.atan2(e,-i),o=-.08+.09*Math.sin(r*7)+.05*Math.sin(r*3+1.3)+.06*(Zs(i*4,t*4,e*4,21,3)-.5);vi(s,hy),He(s,dy,Be(-.55,-.05,t)*.7);const a=Be(o-n,o+n,t);if(a<=0)return;const c=[nc[0],nc[1],nc[2]];He(c,py,Be(o+.09,o,t)*.8);for(let l=0;l<Rf.length;l++){const u=Rf[l];if(i*u.c[0]+t*u.c[1]+e*u.c[2]<.97)continue;const d=i*u.t1[0]+t*u.t1[1]+e*u.t1[2],h=i*u.t2[0]+t*u.t2[1]+e*u.t2[2],g=Math.max(0,Math.abs(d)-.07),v=Math.sqrt(g*g+h*h)-.026,m=Be(n,-n,v);m>0&&He(c,u.col,m)}He(s,c,a)}const gy=Ce(16120319),xy=Ce(13229038),vy=Ce(11455462),Pf=(()=>{const i=gd(77),t=[];for(let e=0;e<9;e++){const n=i()*2-1,s=i()*Bi,r=Math.sqrt(1-n*n);t.push([r*Math.cos(s),n,r*Math.sin(s),.12+i()*.1])}return t})();function _y(i,t,e,n,s){vi(s,gy),He(s,xy,Be(.45,.75,Zs(i*3.2,t*3.2,e*3.2,31,4))*.75);for(let r=0;r<Pf.length;r++){const o=Pf[r],a=Fr(i*o[0]+t*o[1]+e*o[2]),c=o[3]*(.8+.4*md(i*12,t*12,e*12,41+r));He(s,vy,Be(c+n*2,c-n*2,a)*.85)}li(Math.floor(i*90),Math.floor(t*90),Math.floor(e*90),5)>.992&&vi(s,[255,255,255])}const My=Ce(12091423),yy=Ce(15249982),Sy=Ce(16769674),by=Ce(16774340),wy=Ce(8015376);function Ey(i,t,e,n,s){vi(s,yy);const r=Zs(i*2.5,t*2.5,e*2.5,61,4);He(s,My,Be(.55,.3,r)*.6),He(s,Sy,Be(.55,.78,r)*.6);const o=Math.abs(e);if(o<.6)return;const a=(e>0?i:-i)/o,c=t/o,l=XM(a,c+.03,.42,.45);He(s,wy,Be(.035+n,.035-n,l)),He(s,by,Be(n,-n,l))}const Lf={classic:{paint:jM,specular:5592405,shininess:80,rimDark:.25},tennis:{paint:iy,specular:2236962,shininess:18,rimDark:.3},beach:{paint:sy,specular:6710886,shininess:70,rimDark:.25},planet:{paint:fy,specular:4868682,shininess:50,rimDark:.15},donut:{paint:my,specular:3815994,shininess:40,rimDark:.25},snow:{paint:_y,specular:7829367,shininess:60,rimDark:.3},gold:{paint:Ey,specular:16765562,shininess:140,rimDark:.12}};function ml(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext&&e.getContext("2d");return n?{c:e,g:n}:null}function If(i,t){const{c:e,g:n}=i,s=e.width,r=e.height;if(!n.createImageData||!n.putImageData)return;const o=n.createImageData(s,r),a=o.data,c=Math.PI/r*.75,l=[0,0,0];for(let u=0;u<r;u++){const f=(u+.5)/r*Math.PI,d=Math.sin(f),h=Math.cos(f);for(let g=0;g<s;g++){const v=(g+.5)/s*Bi;t(-Math.cos(v)*d,h,Math.sin(v)*d,c,l);const m=(u*s+g)*4;a[m]=l[0],a[m+1]=l[1],a[m+2]=l[2],a[m+3]=255}}n.putImageData(o,0,0)}const Nl='"Lilita One", "Arial Black", system-ui, sans-serif';function Df(i,t,e){const{c:n,g:s}=i,r=n.width,o=n.height,a=Math.ceil(o*.42),c=ml(a,a);if(!c||!s.drawImage)return;const l=c.g;l.fillStyle="#"+me.eightInk.toString(16).padStart(6,"0"),l.font=`${Math.round(o*.27)}px ${Nl}`,l.textAlign="center",l.textBaseline="middle",l.fillText(t,a/2,a/2+o*.012);const u=e*r,f=o/2;for(let d=0;d<a;d++){const h=f-a/2+d,g=(.5-(h+.5)/o)*Math.PI,v=1/Math.max(.2,Math.cos(g));s.drawImage(c.c,0,d,a,1,u-a*v/2,h,a*v,1)}}function zf(i,t){const e=new Ll(i.c);return e.colorSpace=Qe,e.anisotropy=t,e.wrapS=Vo,e}function Uf(i,{rim:t=0,rimStrength:e=0,rimDark:n=0,specular:s=6710886,shininess:r=90,transparent:o=!1,key:a="ball-rim-v1"}={}){const c=new f1({map:i,shininess:r,specular:s,transparent:o,depthWrite:!0}),l=new ce(t),u={value:l.clone().multiplyScalar(e)},f={value:n};return c.onBeforeCompile=d=>{d.uniforms.uRim=u,d.uniforms.uRimDark=f,d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRim;
uniform float uRimDark;`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","float rimF = pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 3.0 );","totalEmissiveRadiance += uRim * rimF;","diffuseColor.rgb *= 1.0 - uRimDark * rimF;"].join(`
`))},c.customProgramCacheKey=()=>a,c.userData.uniforms={uRim:u,uRimDark:f},c.userData.rimBase=l,c}const Ty=`
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
}`,Ay=`
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
}`;function Cy(i){if(!i||typeof document>"u"||!document.createElement)return null;const t=document.createElement("div");t.className="ebg-eight-marker",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",pointerEvents:"none",display:"none",zIndex:"3",willChange:"transform"});const e=document.createElement("div");Object.assign(e.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",display:"none"});const n=document.createElement("div");Object.assign(n.style,{position:"absolute",left:"22px",top:"5px",width:"0px",height:"0px",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:"9px solid #ffffff",filter:"drop-shadow(0 0 1.5px rgba(16,36,26,0.9))"}),e.appendChild(n);const s=document.createElement("div");return Object.assign(s.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",boxSizing:"border-box",borderRadius:"50%",background:"#16161c",border:"2px solid #ffffff",boxShadow:"0 0 0 1.5px rgba(16,36,26,0.85), 0 2px 4px rgba(0,0,0,0.35)",color:"#ffffff",font:`13px/18px ${Nl}`,textAlign:"center"}),s.textContent="8",t.appendChild(e),t.appendChild(s),i.appendChild(t),{el:t,arrowWrap:e,shown:!1,x:-1e9,y:-1e9,ang:1e9,arrowOn:!1}}class Nf{constructor(){this.shown=!1,this.x=0,this.y=0,this.z=0,this.rx=0,this.rz=0,this.vx=0,this.vz=0,this.vy=0,this.anim="none",this.t=0,this.fx=0,this.fy=0,this.fz=0,this.hk="water",this.alpha=1,this.lastMode="off",this.synced=!1,this.lx=0,this.ly=0,this.lz=0,this.la=0,this.llv=null,this.lyaw=0}}class Ry{constructor(){this.valid=!1,this.cx=0,this.cy=0,this.cz=0,this.bx=0,this.by=0,this.bz=0,this.vis=!1,this.anim="",this.w=0,this.h=0}}class Py{constructor(){this.t=0,this.k=-1}}function Ly(i,t={}){const{uiRoot:e=null,rig:n=null}=t,s=i.scene,r=i.tier??1,o=4,a=r===0?256:512,c=r===0?512:1024,l=new gi(Li,48,24),u=ml(c,c/2);let f=null;function d(){u&&(If(u,ZM),Df(u,"8",.25),Df(u,"8",.75),f&&(f.needsUpdate=!0))}u&&(d(),f=zf(u,o));let h=!1;try{const et=typeof document<"u"?document.fonts:null;if(et&&et.load){const _t=et.check?et.check(`64px ${Nl}`):!1;et.load('64px "Lilita One"').then(()=>{!h&&!_t&&d()},()=>{})}}catch{}const g=Uf(f,{rim:me.eightRim,rimStrength:Eo,specular:6710886,shininess:90,key:"ball-eight-v1"});f||g.color.setHex(me.eightBody);const v=new De(l,g);v.name="eight-ball";const m=new Map,p=Uf(null,{rimDark:.25,specular:5592405,shininess:80,transparent:!0,key:"ball-cue-v1"}),x=new De(l,p);x.name="cue-ball",x.renderOrder=2;for(const et of[v,x])et.castShadow=!1,et.receiveShadow=!1,et.frustumCulled=!0;s.add(v,x);const _=new ds(1,1);_.rotateX(-Math.PI/2);const M=new qo(new Float32Array(2),1);M.setUsage(Fi),_.setAttribute("aAlpha",M);const S=new gn({uniforms:{uColor:{value:new ce(me.blobShadow)},uOpacity:{value:.42}},vertexShader:Ty,fragmentShader:Ay,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),E=new $_(_,S,2);E.instanceMatrix.setUsage(Fi),E.frustumCulled=!1,E.renderOrder=1,E.name="ball-shadows",s.add(E);const C=Cy(e),w=[new Nf,new Nf],b=[x,v];let y="classic",R=1;const N=new Py;let O=!0;const Y=new Ry,ut=new tt,ot=new fs,xt=new tt,J=new tt(0,1,0),X=new ye,D=new tt,$=new tt,q={x:0,y:0,onScreen:!1};let at=null;function V(et){et.quaternion.setFromAxisAngle(J,i.yaw||0),ot.setFromAxisAngle(ut.set(1,0,0),-Math.PI/3),et.quaternion.multiply(ot)}V(v),V(x),x.quaternion.multiply(ot.setFromAxisAngle(ut.set(0,1,0),.6));function j(et,_t,B){const nt=Math.sqrt(_t*_t+B*B);nt<1e-7||(ut.set(B/nt,0,-_t/nt),et.quaternion.premultiply(ot.setFromAxisAngle(ut,nt/Li)),et.quaternion.normalize())}function mt(et){Lf[et]||(et="classic"),y=et;const _t=Lf[et];let B=m.get(et);if(!B){const Gt=ml(a,a/2);Gt&&(If(Gt,_t.paint),B=zf(Gt,o),m.set(et,B))}const nt=!!p.map;p.map=B||null,nt!==!!p.map&&(p.needsUpdate=!0),B?p.color.setHex(16777215):p.color.setHex(me.cueBody),p.specular.setHex(_t.specular),p.shininess=_t.shininess,p.userData.uniforms.uRimDark.value=_t.rimDark}mt("classic");function H(et,_t){et.anim="drop",et.t=0,et.x=_t.x,et.y=_t.y+Ef,et.z=_t.z,et.rx=_t.x,et.rz=_t.z}function Q(et,_t,B){const nt=w[et],Gt=b[et],Jt=et===1,Bt=Jt&&_t.visible&&_t.mode==="holed";let Kt=!1;if(Bt)nt.anim!=="sink"&&nt.anim!=="inCup"&&(nt.shown&&nt.anim!=="hazard"?(nt.anim="sink",nt.t=0,nt.fx=nt.x,nt.fy=nt.y,nt.fz=nt.z):(nt.anim="inCup",Kt=!0)),nt.shown=!0;else if(_t.visible)(!nt.shown||nt.anim==="inCup"||nt.anim==="sink"||nt.anim==="hazard")&&(H(nt,_t),Kt=!0,V(Gt)),nt.shown=!0;else if(Jt&&_t.mode==="sunk"&&nt.shown&&nt.anim!=="hazard"){nt.anim="hazard",nt.t=0,nt.vy=0;const ft=n&&n.level;if(nt.hk=ft&&ft.hazardAt&&ft.hazardAt(nt.x,nt.z)==="oob"?"oob":"water",nt.hk==="oob"){const dt=Math.sqrt(nt.vx*nt.vx+nt.vz*nt.vz);dt<1.5&&dt>1e-4&&(nt.vx*=1.5/dt,nt.vz*=1.5/dt)}}else nt.anim!=="hazard"&&(nt.shown=!1,nt.anim="none");nt.lastMode=_t.mode;const Xt=nt.x,T=nt.z;if(nt.anim==="hazard"){nt.t+=B;const ft=nt.t/Ja;if(nt.hk==="water"){const dt=Math.exp(-5*B);nt.vx*=dt,nt.vz*=dt,nt.x+=nt.vx*B,nt.z+=nt.vz*B,nt.y-=(.4+2.2*ft)*B}else nt.x+=nt.vx*B,nt.z+=nt.vz*B,nt.vy-=18*B,nt.y+=nt.vy*B;nt.t>=Ja&&(nt.anim="none",nt.shown=!1)}else if(nt.anim==="sink"){nt.t+=B;const ft=ci(nt.t/Af),dt=1-Math.pow(1-ci(ft/.6),3),U=.05*(1-ft)*Math.sin(ft*26);nt.x=nt.fx+(_t.x-nt.fx)*dt+U,nt.z=nt.fz+(_t.z-nt.fz)*dt;const rt=ci((ft-.12)/.88);nt.y=nt.fy+(_t.y-nt.fy)*rt*rt,nt.t>=Af&&(nt.anim="inCup",nt.x=_t.x,nt.y=_t.y,nt.z=_t.z)}else if(nt.anim==="inCup")nt.x=_t.x,nt.y=_t.y,nt.z=_t.z;else if(nt.anim==="drop"){nt.t+=B,nt.x=_t.x,nt.z=_t.z;let ft;if(nt.t<wo){const dt=nt.t/wo;ft=Ef*(1-dt*dt)}else ft=GM*Math.sin(Math.PI*ci((nt.t-wo)/(Tf-wo)));nt.y=_t.y+ft,nt.t>=Tf&&(nt.anim="none",nt.y=_t.y)}else if(nt.shown){const ft=_t.x-nt.x,dt=_t.z-nt.z;ft*ft+dt*dt>2.5*2.5&&(Kt=!0),nt.x=_t.x,nt.y=_t.y,nt.z=_t.z}if(nt.shown){const ft=nt.x-Xt,dt=nt.z-T;if(!Kt&&nt.anim!=="drop"&&nt.anim!=="inCup"&&(ft!==0||dt!==0)&&j(Gt,ft,dt),B>0&&!Kt&&nt.anim!=="hazard"){const U=1-Math.exp(-B/.06),rt=ft/B,Et=dt/B;Number.isFinite(rt)&&Number.isFinite(Et)&&(nt.vx+=(rt-nt.vx)*U,nt.vz+=(Et-nt.vz)*U)}Kt&&(nt.vx=0,nt.vz=0)}const A=et===0?ci(Number.isFinite(_t.alpha)?_t.alpha:1):1;if(nt.alpha=nt.shown?A:0,Gt.visible=nt.shown&&A>.01,et===0&&(p.opacity=A),nt.synced&&nt.x===nt.lx&&nt.y===nt.ly&&nt.z===nt.lz&&nt.alpha===nt.la&&at===nt.llv&&i.yaw===nt.lyaw&&nt.anim==="none")return;nt.synced=!0,nt.lx=nt.x,nt.ly=nt.y,nt.lz=nt.z,nt.la=nt.alpha,nt.llv=at,nt.lyaw=i.yaw,O=!0,Gt.visible&&Gt.position.set(nt.x,nt.y,nt.z);const Z=at?es(at,nt.x,nt.z):_t.y-Li,ct=nt.y-Li-Z;let bt=Gt.visible?nt.alpha:0,wt=2.1*Li*1.25;ct>.01?(bt/=1+ct*1.6,wt*=1+ct*.45):ct<-.01&&(bt*=ci(1+ct/(.9*Li))),nt.anim==="hazard"&&nt.hk==="water"&&(bt*=ci(1-nt.t/(Ja*.5))),M.array[et]=bt;const Wt=(i.yaw||0)+225*Math.PI/180,Ft=.25*Li*Math.min(1.5,1+Math.max(0,ct)),zt=nt.x-Math.sin(Wt)*Ft,W=nt.z-Math.cos(Wt)*Ft,G=.25,it=at?es(at,zt+G,W)-es(at,zt-G,W):0,yt=at?es(at,zt,W+G)-es(at,zt,W-G):0;xt.set(-it/(2*G),1,-yt/(2*G)).normalize(),ot.setFromUnitVectors(J,xt),D.set(zt,(at?es(at,zt,W):Z)+.03,W),$.set(wt,1,wt),X.compose(D,ot,$),E.setMatrixAt(et,X)}function lt(){if(!C)return;const et=w[1],_t=i.camera.matrixWorld.elements,B=i.size.w,nt=i.size.h;if(Y.valid&&_t[12]===Y.cx&&_t[13]===Y.cy&&_t[14]===Y.cz&&et.x===Y.bx&&et.y===Y.by&&et.z===Y.bz&&v.visible===Y.vis&&et.anim===Y.anim&&B===Y.w&&nt===Y.h)return;Y.valid=!0,Y.cx=_t[12],Y.cy=_t[13],Y.cz=_t[14],Y.bx=et.x,Y.by=et.y,Y.bz=et.z,Y.vis=v.visible,Y.anim=et.anim,Y.w=B,Y.h=nt;let Gt=!1,Jt=0,Bt=0,Kt=0,Xt=!1;if(n&&et.shown&&v.visible&&et.anim!=="inCup"&&et.anim!=="sink"&&et.anim!=="hazard"){const T=Math.max(1,i.size.w),A=Math.max(1,i.size.h);n.groundToScreen(et.x,et.y,et.z,q);const Z=2*Li*n.pxPerMetre(et.x,et.z);if(!q.onScreen||Z<HM){Gt=!0,Jt=q.x,Bt=q.y;const ct=24;if(!q.onScreen||Jt<ct||Jt>T-ct||Bt<ct||Bt>A-ct){const bt=T/2,wt=A/2,Wt=Jt-bt,Ft=Bt-wt,zt=Math.abs(Wt)>1e-6?(T/2-ct)/Math.abs(Wt):1/0,W=Math.abs(Ft)>1e-6?(A/2-ct)/Math.abs(Ft):1/0,G=Math.min(1,zt,W);Jt=bt+Wt*G,Bt=wt+Ft*G,Kt=Math.atan2(Ft,Wt),Xt=!q.onScreen}}}Gt!==C.shown&&(C.el.style.display=Gt?"block":"none",C.shown=Gt),Gt&&((Math.abs(Jt-C.x)>.5||Math.abs(Bt-C.y)>.5)&&(C.x=Jt,C.y=Bt,C.el.style.transform=`translate3d(${(Jt-11).toFixed(1)}px, ${(Bt-11).toFixed(1)}px, 0)`),Xt!==C.arrowOn&&(C.arrowWrap.style.display=Xt?"block":"none",C.arrowOn=Xt),Xt&&Math.abs(Kt-C.ang)>.01&&(C.ang=Kt,C.arrowWrap.style.transform=`rotate(${Kt.toFixed(3)}rad)`))}function At(et,_t){if(h||!et||et.length<2)return;_t=Number.isFinite(_t)&&_t>0?Math.min(_t,.1):0,at=n&&n.level?n.level:null,Q(0,et[0],_t),Q(1,et[1],_t),O&&(M.needsUpdate=!0,E.instanceMatrix.needsUpdate=!0,O=!1);let B=Eo;N.t>0&&(N.t-=_t,B=N.t-Qa>0?1:Eo+(1-Eo)*ci(N.t/Qa)),B!==N.k&&(N.k=B,g.userData.uniforms.uRim.value.copy(g.userData.rimBase).multiplyScalar(B)),lt()}function Nt(){h=!0,s.remove(v,x,E),l.dispose(),_.dispose(),g.dispose(),p.dispose(),S.dispose(),f&&f.dispose(),m.forEach(et=>et.dispose()),m.clear(),E.dispose(),C&&C.el.parentNode&&C.el.parentNode.removeChild(C.el)}return{update:At,flash(){N.t=VM+Qa},setSkin:mt,setRound(et){R=et===2?2:1},dispose:Nt,get skin(){return y},get round(){return R},meshes:{cue:x,eight:v,shadows:E},skins:BM}}const oi=kt.R,Iy=9.8,fr=0,To=1,Ff=2,ic=["iPos","iRot","iSize","iCol"],sc=["iRing","iRingN","iRingC","iRingF"],Dy=`
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
}`,zy=`
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
}`,Uy=`
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
}`,Ny=`
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
}`;function Of(i,t){return new gn({vertexShader:i,fragmentShader:t,transparent:!0,depthWrite:!1,depthTest:!0,side:yn,blending:wh,blendEquation:zi,blendSrc:Tc,blendDst:Cr,blendSrcAlpha:Tc,blendDstAlpha:Cr,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function kf(i,t){const e=new ds(1,1),n=new g1;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),n.setAttribute("uv",e.getAttribute("uv"));const s={};for(const[r,o]of t){const a=new qo(new Float32Array(i*o),o);a.setUsage(Fi),n.setAttribute(r,a),s[r]=a}return n.instanceCount=0,n.boundingSphere=new Vi(new tt,1e6),{geo:n,attrs:s}}function Fy(i,t={}){const{events:e=null,play:n=null}=t,s=i.scene,r=i.tier??1,o=r===0?180:360,a=16,c=r===0?.4:1,l=kf(o,[["iPos",4],["iRot",4],["iSize",4],["iCol",4]]),u=Of(Dy,zy),f=new De(l.geo,u);f.frustumCulled=!1,f.renderOrder=5,f.name="fx-particles";const d=kf(a,[["iRing",4],["iRingN",4],["iRingC",4],["iRingF",2]]),h=Of(Uy,Ny),g=new De(d.geo,h);g.frustumCulled=!1,g.renderOrder=3,g.name="fx-rings";const v=ic.map(()=>({start:0,count:0})),m=sc.map(()=>({start:0,count:0}));s.add(g,f);const p=new Float32Array(o),x=new Float32Array(o),_=new Float32Array(o),M=new Float32Array(o),S=new Float32Array(o),E=new Float32Array(o),C=new Float32Array(o),w=new Float32Array(o),b=new Float32Array(o),y=new Float32Array(o),R=new Float32Array(o),N=new Float32Array(o),O=new Float32Array(o),Y=new Float32Array(o),ut=new Float32Array(o),ot=new Float32Array(o),xt=new Float32Array(o),J=new Float32Array(o),X=new Float32Array(o),D=new Float32Array(o),$=new Float32Array(o),q=new Uint8Array(o),at=new Float32Array(o),V=new Float32Array(o),j=new Uint8Array(o),mt=new Uint8Array(o),H=new Uint8Array(o);let Q=0,lt=0;const At=new Float32Array(a),Nt=new Float32Array(a),et=new Float32Array(a),_t=new Float32Array(a),B=new Float32Array(a),nt=new Float32Array(a),Gt=new Float32Array(a),Jt=new Float32Array(a),Bt=new Float32Array(a),Kt=new Float32Array(a),Xt=new Float32Array(a),T=new Float32Array(a),A=new Float32Array(a),Z=new Float32Array(a),ct=new Float32Array(a),bt=new Float32Array(a),wt=new Float32Array(a),Wt=new Float32Array(a),Ft=new Float32Array(a),zt=new Uint8Array(a);let W=0;const G=8,it=new Float32Array(G),yt=new Float32Array(G),ft=new Float32Array(G),dt=new Float32Array(G),U=new Uint8Array(G),rt=new Uint8Array(G);let Et=2654435769;const F=()=>(Et^=Et<<13,Et^=Et>>>17,Et^=Et<<5,(Et>>>0)/4294967296),st=(P,k)=>P+(k-P)*F(),ht=new ce,vt=P=>(ht.setHex(P),[ht.r,ht.g,ht.b]),Tt={white:vt(16777215),chalk:vt(me.chalk),foam:vt(15268863),water:vt(8378092),gold:vt(16765503),dustDark:vt(5916208),dustTan:vt(10254924),sand:vt(14268530),leaf:vt(3108396),grey:vt(7037271),pool:me.poolBalls.map(vt),cream:vt(16774358)},K=()=>n&&n.level||null,pt=(P,k)=>{const z=K(),gt=z&&z.heightAt?z.heightAt(P,k):0;return Number.isFinite(gt)?gt:0},Rt=(P,k)=>{const z=K();return z&&z.surfaceAt?z.surfaceAt(P,k):"fairway"};function It(P,k,z,gt,St,Ct,Dt,Ot,Ht,Ut,te,Mt,ne,oe,ie,jt,xe){let Vt=Q;for(let Se=0;Se<o;Se++){const Oe=(Q+Se)%o;if(!H[Oe]){Vt=Oe;break}}if(Q=(Vt+1)%o,H[Vt]||lt++,H[Vt]=1,p[Vt]=P,x[Vt]=k,_[Vt]=z,M[Vt]=gt,S[Vt]=St,E[Vt]=Ct,C[Vt]=Dt,w[Vt]=Dt,b[Vt]=Ot,y[Vt]=Ht,R[Vt]=Ut,xt[Vt]=te[0],J[Vt]=te[1],X[Vt]=te[2],D[Vt]=Mt,$[Vt]=ne,q[Vt]=oe,at[Vt]=ie,V[Vt]=jt,j[Vt]=xe,mt[Vt]=0,ut[Vt]=st(0,Math.PI*2),ot[Vt]=st(-6,6),oe===To){let Se=st(-1,1),Oe=st(-1,1),Pe=st(-1,1);const ze=Math.sqrt(Se*Se+Oe*Oe+Pe*Pe)||1;Se/=ze,Oe/=ze,Pe/=ze,N[Vt]=Se,O[Vt]=Oe,Y[Vt]=Pe,ot[Vt]=st(5,12)*(F()<.5?-1:1)}else N[Vt]=0,O[Vt]=1,Y[Vt]=0;return Vt}function Lt(P,k,z,gt,St,Ct,Dt,Ot,Ht,Ut,te,Mt=0,ne=.05){const oe=W;W=(W+1)%a;const ie=.25,jt=pt(P+ie,k)-pt(P-ie,k),xe=pt(P,k+ie)-pt(P,k-ie);let Vt=-jt/(2*ie),Se=1,Oe=-xe/(2*ie);const Pe=Math.sqrt(Vt*Vt+Se*Se+Oe*Oe);Vt/=Pe,Se/=Pe,Oe/=Pe,At[oe]=P,Nt[oe]=pt(P,k)+ne,et[oe]=k,_t[oe]=Vt,B[oe]=Se,nt[oe]=Oe,Gt[oe]=z,Jt[oe]=gt,Bt[oe]=St,Kt[oe]=Ct,Xt[oe]=0,T[oe]=Dt,A[oe]=Mt,Z[oe]=Ot[0],ct[oe]=Ot[1],bt[oe]=Ot[2],wt[oe]=Ht,Wt[oe]=Ut,Ft[oe]=te,zt[oe]=1}function qt(P,k,z,gt,St,Ct,Dt){for(let Ot=0;Ot<gt;Ot++){const Ht=st(0,Math.PI*2),Ut=St*st(.5,1);It(P,k,z,Math.cos(Ht)*Ut,st(.6,1.6)*St*.5,Math.sin(Ht)*Ut,st(.25,.45),Dt,Dt*.3,1,Ct,1,.85,fr,.4,3,0)}}function Yt(P,k,z,gt,St,Ct,Dt){const Ot=pt(P,k)+.12;for(let Ht=0;Ht<z;Ht++){const Ut=st(0,Math.PI*2),te=st(.3,1)*gt;It(P+Math.cos(Ut)*.1,Ot,k+Math.sin(Ut)*.1,Math.cos(Ut)*te,st(.3,.9),Math.sin(Ut)*te,st(.45,.75),Ct,Ct*2.6,1,St,Dt,0,fr,-.15,2.6,0)}}function le(P,k,z,gt){const St=pt(P,k)+.3;for(let Ct=0;Ct<z;Ct++){const Dt=st(0,Math.PI*2),Ot=st(.6,3.2)*gt,Ht=st(6.5,11)*gt,Ut=Tt.pool[(Ct+Math.floor(F()*7))%Tt.pool.length],te=st(.18,.26);It(P+Math.cos(Dt)*.4,St,k+Math.sin(Dt)*.4,Math.cos(Dt)*Ot,Ht,Math.sin(Dt)*Ot,st(3.2,4.4),te,te,.6,Ut,1,0,To,.62,1.15,1)}}function se(P,k,z,gt,St){for(let Ct=0;Ct<G;Ct++)if(!rt[Ct]){rt[Ct]=1,it[Ct]=P,U[Ct]=k,yt[Ct]=z,ft[Ct]=gt,dt[Ct]=St;return}}function ae(P){const k=P.x+P.nx*oi,z=P.z+P.nz*oi,gt=Math.min(1,(P.speed||0)/14),St=pt(k,z)+oi;Lt(k,z,.45,1+gt*.6,.12,.04,.2,Tt.white,.9,.6,0);const Ct=5+Math.round(gt*5);for(let Dt=0;Dt<Ct;Dt++){const Ot=Dt%2?1:-1,Ht=st(1.5,3.5)*(.5+gt),Ut=-P.nz*Ot,te=P.nx*Ot,Mt=st(-.35,.35);It(k,St,z,(Ut+P.nx*Mt)*Ht,st(.8,2.2),(te+P.nz*Mt)*Ht,st(.22,.4),st(.07,.12),.02,1,Dt%3?Tt.white:Tt.chalk,1,.75,fr,.5,4,0)}Yt(k,z,3,.8,Tt.dustDark,.16,.32)}function pe(P){const k=P.speed||0;if(k<.8)return;const z=Math.min(1,k/12),gt=P.x-P.nx*oi*.95,St=P.z-P.nz*oi*.95,Ct=P.id===0?.6:1,Dt=pt(gt,St)+oi*.6;if(P.kind==="hedge"||P.kind==="tree"){const Ot=Math.round((2+5*z)*Ct);for(let Ht=0;Ht<Ot;Ht++){const Ut=st(.8,2.2)*(.5+z);It(gt,Dt+.2,St,(P.nx+st(-.8,.8))*Ut,st(1,3),(P.nz+st(-.8,.8))*Ut,st(.6,1),st(.1,.16),.1,.6,Tt.leaf,1,0,To,.35,2,2)}}else if(P.kind==="bumper")qt(gt,Dt,St,Math.round((3+5*z)*Ct),2.5+3*z,Tt.gold,.14),Lt(gt,St,.3,1+z,.1,.03,.22,Tt.cream,.8,.7,0);else{const Ot=Math.round((2+4*z)*Ct);Yt(gt,St,Ot,.6+z,P.kind==="cushion"?Tt.grey:Tt.dustDark,.14+.06*z,.3+.2*z),P.kind==="cushion"&&qt(gt,Dt,St,Math.round(2+3*z),1.5+2*z,Tt.chalk,.09)}}function he(P){const k=P.x,z=P.z;if(P.kind==="water"){Lt(k,z,.35,2.4,.16,.04,.75,Tt.foam,.95,.25,.22,0,.08),Lt(k,z,.2,1.6,.12,.03,.6,Tt.foam,.8,.25,0,.16,.08);const gt=pt(k,z)+.1,St=16;for(let Ct=0;Ct<St;Ct++){const Dt=Ct/St*Math.PI*2+st(-.2,.2),Ot=st(1,2.6);It(k,gt,z,Math.cos(Dt)*Ot,st(3.5,6.5),Math.sin(Dt)*Ot,1.4,st(.1,.16),.08,1,Ct%3?Tt.foam:Tt.water,.95,.3,fr,1,.6,2)}for(let Ct=0;Ct<5;Ct++)It(k+st(-.15,.15),gt,z+st(-.15,.15),st(-.4,.4),st(6,8.5),st(-.4,.4),1.4,st(.14,.2),.08,1,Tt.foam,.95,.3,fr,1,.5,2)}else Yt(k,z,10,1.6,Tt.grey,.28,.5),qt(k,pt(k,z)+.4,z,5,2,Tt.white,.12)}function Qt(P){const k=pt(P.x,P.z)+oi+.2;for(let gt=0;gt<6;gt++){const St=gt/6*Math.PI*2;It(P.x,k,P.z,Math.cos(St)*1.6,st(1.5,2.6),Math.sin(St)*1.6,st(.4,.6),.3,.05,1,gt%2?Tt.gold:Tt.white,1,.8,Ff,.6,2.5,0)}const z=K();z&&z.cup&&Lt(z.cup.x,z.cup.z,kt.HOLE_R,kt.HOLE_R+.5,.14,.04,.3,Tt.gold,.9,.6,0)}function ge(){const P=K();if(!P||!P.cup)return;const k=P.cup.x,z=P.cup.z;Lt(k,z,kt.HOLE_R,kt.HOLE_R*3,.22,.04,.6,Tt.white,.95,.7,0),Lt(k,z,kt.HOLE_R,kt.HOLE_R*2.2,.14,.03,.5,Tt.gold,.9,.7,0,.12);const gt=pt(k,z)+.2;for(let St=0;St<12;St++){const Ct=St/12*Math.PI*2,Dt=st(1.4,2.6);It(k,gt,z,Math.cos(Ct)*Dt,st(3,5.5),Math.sin(Ct)*Dt,st(.5,.8),st(.22,.32),.04,1,St%3?Tt.gold:Tt.white,1,.8,Ff,.8,1.8,0)}le(k,z,Math.round(10*c+4),.7)}function re(P){if(!P||P.picked)return;const k=P.level||K();if(!k||!k.cup)return;const z=P.strokes-P.par,gt=P.strokes===1,St=gt||z<=-2?150:z===-1?100:z===0?60:30,Ct=Math.max(12,Math.round(St*c)),Dt=k.cup.x,Ot=k.cup.z,Ht=gt||z<=-2?Math.round(Ct*.4):Ct;le(Dt,Ot,Ht,z<=-1||gt?1.15:.9),(gt||z<=-2)&&(se(.35,1,Dt-2,Ot,Math.round(Ct*.3)),se(.7,1,Dt+2,Ot,Math.round(Ct*.3)))}const Te=[];e&&e.on&&(Te.push(e.on("ball:contact",ae)),Te.push(e.on("ball:wall",pe)),Te.push(e.on("ball:hazard",he)),Te.push(e.on("ball:hop",Qt)),Te.push(e.on("ball:holed",ge)),Te.push(e.on("hole:done",re)));let en=0,Fe=NaN,nn=NaN;function We(){if(!n||n.state!=="rolling"||!n.world){Fe=NaN;return}const P=n.world.balls[1];if(!P||P.mode!=="roll"){Fe=NaN;return}if(Number.isFinite(Fe)&&(en+=Math.sqrt((P.x-Fe)*(P.x-Fe)+(P.z-nn)*(P.z-nn))),Fe=P.x,nn=P.z,en<.3||(en=0,Rt(P.x,P.z)!=="sand"))return;const k=Math.sqrt(P.vx*P.vx+P.vz*P.vz);if(k<.4)return;const z=P.x-P.vx/k*oi*.6,gt=P.z-P.vz/k*oi*.6;Yt(z,gt,2,.4+Math.min(1,k/8),Tt.sand,.18,.55)}function hn(P){P=Number.isFinite(P)&&P>0?Math.min(P,.1):0,We();for(let Mt=0;Mt<G;Mt++)rt[Mt]&&(it[Mt]-=P,it[Mt]<=0&&(rt[Mt]=0,U[Mt]===1&&le(yt[Mt],ft[Mt],dt[Mt],1.15)));const k=l.attrs.iPos.array,z=l.attrs.iRot.array,gt=l.attrs.iSize.array,St=l.attrs.iCol.array;let Ct=0;if(lt>0)for(let Mt=0;Mt<o;Mt++){if(!H[Mt])continue;if(C[Mt]-=P,C[Mt]<=0){H[Mt]=0,lt--;continue}if(!mt[Mt]){const Vt=Math.exp(-V[Mt]*P);if(M[Mt]*=Vt,E[Mt]*=Vt,S[Mt]=S[Mt]*Vt-Iy*at[Mt]*P,p[Mt]+=M[Mt]*P,x[Mt]+=S[Mt]*P,_[Mt]+=E[Mt]*P,ut[Mt]+=ot[Mt]*P,q[Mt]===To&&at[Mt]>0&&(p[Mt]+=Math.sin(ut[Mt]*.7+Mt)*.4*P),j[Mt]&&S[Mt]<0){const Se=pt(p[Mt],_[Mt])+.03;if(x[Mt]<=Se){if(j[Mt]===2){H[Mt]=0,lt--;continue}x[Mt]=Se,mt[Mt]=1,N[Mt]=1,O[Mt]=0,Y[Mt]=0,ut[Mt]=Math.PI/2+st(-.15,.15),C[Mt]>1.2&&(C[Mt]=1.2)}}}const ne=1-C[Mt]/w[Mt],oe=Math.min(1,ne*12),ie=mt[Mt]?Math.min(1,C[Mt]/1.2):Math.min(1,C[Mt]/(w[Mt]*.35)),jt=b[Mt]+(y[Mt]-b[Mt])*ne,xe=Ct*4;k[xe]=p[Mt],k[xe+1]=x[Mt],k[xe+2]=_[Mt],k[xe+3]=q[Mt],z[xe]=N[Mt],z[xe+1]=O[Mt],z[xe+2]=Y[Mt],z[xe+3]=ut[Mt],gt[xe]=jt,gt[xe+1]=jt*R[Mt],gt[xe+2]=$[Mt],gt[xe+3]=0,St[xe]=xt[Mt],St[xe+1]=J[Mt],St[xe+2]=X[Mt],St[xe+3]=D[Mt]*oe*ie,Ct++}if(l.geo.instanceCount=Ct,Ct>0)for(let Mt=0;Mt<ic.length;Mt++){const ne=l.attrs[ic[Mt]],oe=v[Mt];oe.count=Ct*4,ne.updateRanges.length=0,ne.updateRanges.push(oe),ne.needsUpdate=!0}f.visible=Ct>0;const Dt=d.attrs.iRing.array,Ot=d.attrs.iRingN.array,Ht=d.attrs.iRingC.array,Ut=d.attrs.iRingF.array;let te=0;for(let Mt=0;Mt<a;Mt++){if(!zt[Mt])continue;if(A[Mt]>0){A[Mt]-=P;continue}Xt[Mt]+=P;const ne=Xt[Mt]/T[Mt];if(ne>=1){zt[Mt]=0;continue}const oe=1-(1-ne)*(1-ne)*(1-ne),ie=te*4;Dt[ie]=At[Mt],Dt[ie+1]=Nt[Mt],Dt[ie+2]=et[Mt],Dt[ie+3]=Gt[Mt]+(Jt[Mt]-Gt[Mt])*oe,Ot[ie]=_t[Mt],Ot[ie+1]=B[Mt],Ot[ie+2]=nt[Mt],Ot[ie+3]=Bt[Mt]+(Kt[Mt]-Bt[Mt])*ne,Ht[ie]=Z[Mt],Ht[ie+1]=ct[Mt],Ht[ie+2]=bt[Mt],Ht[ie+3]=wt[Mt]*(1-ne*ne),Ut[te*2]=Wt[Mt],Ut[te*2+1]=Ft[Mt]*(1-ne),te++}if(d.geo.instanceCount=te,te>0)for(let Mt=0;Mt<sc.length;Mt++){const ne=d.attrs[sc[Mt]],oe=m[Mt];oe.count=te*ne.itemSize,ne.updateRanges.length=0,ne.updateRanges.push(oe),ne.needsUpdate=!0}g.visible=te>0}function I(){H.fill(0),zt.fill(0),rt.fill(0),lt=0,en=0,Fe=NaN,l.geo.instanceCount=0,d.geo.instanceCount=0,f.visible=!1,g.visible=!1}function L(){for(const P of Te)typeof P=="function"&&P();s.remove(f,g),l.geo.dispose(),d.geo.dispose(),u.dispose(),h.dispose()}return{update:hn,clear:I,dispose:L,get count(){return l.geo.instanceCount},get ringCount(){return d.geo.instanceCount}}}const ue={enabled:!0,pulling:!1,pull:0,strike:-1,placing:!1,hint:0};function Oy(){ue.enabled=!0,ue.pulling=!1,ue.pull=0,ue.strike=-1,ue.placing=!1,ue.hint=0}const Kn=kt.R,gl=.04,rc=220,oc=120,ky=.2,Bf={halfW:.27,haloW:.08,period:1,speed:2,startGap:Kn+.1},Hf={halfW:.42,haloW:.09,startGap:Kn+.12},By=.95,Hy=1.55,Gy=Kn+.22,Vy=.85,Fn={rest:.12,travel:2.4,elev:9*Math.PI/180,hold:.12},Gf=me.eightArrow;class Ne{constructor(t){this.value=t}}const Wy=`
attribute float aDist;
attribute float aSide;
varying float vDist;
varying float vSide;
void main() {
  vDist = aDist;
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Xy=`
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
}`,qy=`
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
}`,Yy=`
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
const float BALL_R = ${Kn.toFixed(3)};

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
}`;function Vf(i,t){return new gn({uniforms:{uColor:{value:new ce(t.color)},uHalo:{value:new ce(me.guideHalo)},uHaloAlpha:new Ne(t.haloAlpha),uHalfW:new Ne(t.halfW),uHaloW:new Ne(t.haloW),uLen:new Ne(1),uStartGap:new Ne(t.startGap),uEndGap:new Ne(0),uFadeLen:new Ne(0),uPeriod:new Ne(t.period||1),uSpeed:new Ne(t.speed||0),uTime:i,uOpacity:new Ne(1),uArrow:new Ne(t.arrow?1:0),uHead:new Ne(1),uStub:new Ne(1e6)},vertexShader:Wy,fragmentShader:Xy,transparent:!0,depthWrite:!1,toneMapped:!1,side:yn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function Wf(i,t){const e=i*2,n=new Ve,s=new Float32Array(e*6),r=new Float32Array(e*2),o=new Float32Array(e*2);for(let f=0;f<e;f++)o[f*2]=-1,o[f*2+1]=1;const a=new Uint16Array((e-1)*6);for(let f=0;f<e-1;f++){const d=f*2;a[f*6]=d,a[f*6+1]=d+1,a[f*6+2]=d+2,a[f*6+3]=d+1,a[f*6+4]=d+3,a[f*6+5]=d+2}n.setIndex(new ke(a,1));const c=new ke(s,3).setUsage(Fi),l=new ke(r,1).setUsage(Fi);n.setAttribute("position",c),n.setAttribute("aDist",l),n.setAttribute("aSide",new ke(o,1)),n.setDrawRange(0,0),n.boundingSphere=new Vi(new tt,1e4);const u=new De(n,t);return u.frustumCulled=!1,{mesh:u,geo:n,pos:s,dist:r,posAttr:c,distAttr:l,maxPairs:e,len:0,pairs:0}}function ac(i,t,e,n,s,r,o,a){const c=i.pos,l=t*6,u=e-s,f=n-r,d=e+s,h=n+r;return c[l]=u,c[l+1]=a(u,f)+gl,c[l+2]=f,c[l+3]=d,c[l+4]=a(d,h)+gl,c[l+5]=h,i.dist[t*2]=o,i.dist[t*2+1]=o,t+1}function Xf(i,t,e,n,s){let r=0,o=0;for(let a=0;a<e&&r<i.maxPairs-1;a++){const c=t[a*2],l=t[a*2+1];let u=0,f=0,d=0,h=0;if(a>0){u=c-t[a*2-2],f=l-t[a*2-1];const v=Math.sqrt(u*u+f*f);o+=v,v>0&&(u/=v,f/=v)}if(a<e-1){d=t[a*2+2]-c,h=t[a*2+3]-l;const v=Math.sqrt(d*d+h*h);v>0&&(d/=v,h/=v)}if(a===0&&(u=d,f=h),a===e-1&&(d=u,h=f),u*d+f*h>.6){let v=-(f+h),m=u+d;const p=Math.sqrt(v*v+m*m)||1;v/=p,m/=p;const x=-v*f+m*u,_=s/(x>.8?x:.8);r=ac(i,r,c,l,v*_,m*_,o,n)}else r=ac(i,r,c,l,-f*s,u*s,o,n),r=ac(i,r,c,l,-h*s,d*s,o,n)}return i.pairs=r,i.len=o>.001?o:.001,i.posAttr.needsUpdate=!0,i.distAttr.needsUpdate=!0,i.geo.setDrawRange(0,r>1?(r-1)*6:0),i.len}function qf(i,t,e,n){const s=i.length>>1;if(s<1)return 0;let r=0;e[0]=i[0],e[1]=i[1],r=1;let o=0,a=i[0],c=i[1];for(let l=1;l<s;l++){const u=i[l*2],f=i[l*2+1],d=u-a,h=f-c,g=Math.sqrt(d*d+h*h);if(g<1e-6)continue;o+=g;let v=!1;if(l<s-1){const p=i[l*2+2]-u,x=i[l*2+3]-f,_=Math.sqrt(p*p+x*x);_>1e-6&&(v=(d*p+h*x)/(g*_)<.995)}const m=l===s-1;if(m||v||o>=t||r>=n-1){if(r>=n-1&&!m){a=u,c=f;continue}e[r*2]=u,e[r*2+1]=f,r++,o=0}a=u,c=f}return r===1&&s>1&&(e[2]=i[s*2-2],e[3]=i[s*2-1],r=2),r}const Ky=0,$y=1,jy=2,Zy=3,Jy=[0,3,1,2],Qy=[40,8,6,6];function t2(i){const t=[];let e=0,n=0;for(let p=0;p<4;p++){const x=Qy[p];t.push({seg:x,v0:e,count:(x+1)*(x+1),half:1,cx:NaN,cz:NaN}),e+=(x+1)*(x+1),n+=x*x*2}const s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Float32Array(e),a=new Float32Array(e),c=new Uint16Array(n*3);let l=0;for(let p=0;p<4;p++){const{seg:x,v0:_,count:M}=t[p];for(let S=0;S<M;S++)o[_+S]=Jy[p];for(let S=0;S<x;S++)for(let E=0;E<x;E++){const C=_+S*(x+1)+E,w=C+1,b=C+x+1,y=b+1;c[l++]=C,c[l++]=b,c[l++]=w,c[l++]=w,c[l++]=b,c[l++]=y}}const u=new Ve,f=new ke(s,3).setUsage(Fi),d=new ke(r,2).setUsage(Fi),h=new ke(a,1).setUsage(Fi);u.setAttribute("position",f),u.setAttribute("aLocal",d),u.setAttribute("aKind",new ke(o,1)),u.setAttribute("aMask",h),u.setIndex(new ke(c,1)),u.boundingSphere=new Vi(new tt,1e4);const g={uTime:i,uOpacity:new Ne(1),uPlaceR:new Ne(4),uDashes:new Ne(24),uActive:new Ne(0),uRingA:new Ne(1),uGhostA:new Ne(0),uMarkA:new Ne(0),uMarkKind:new Ne(0),uHintA:new Ne(0),uFwd:{value:new Zt(0,-1)},uNormal:{value:new Zt(1,0)},uWhite:{value:new ce(me.guideWhite)},uShade:{value:new ce(me.guideHalo)},uWarn:{value:new ce(me.guideWarn)}},v=new gn({uniforms:g,vertexShader:qy,fragmentShader:Yy,transparent:!0,depthWrite:!1,toneMapped:!1,side:yn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),m=new De(u,v);return m.frustumCulled=!1,m.renderOrder=5,{mesh:m,geo:u,mat:v,uniforms:g,parts:t,pos:s,local:r,mask:a,posAttr:f,localAttr:d,maskAttr:h}}function Ao(i,t,e,n,s,r,o){const a=i.parts[t],{seg:c,v0:l}=a,u=i.pos,f=i.local,d=i.mask;for(let h=0;h<=c;h++){const g=h/c*2*s-s;for(let v=0;v<=c;v++){const m=v/c*2*s-s,p=l+h*(c+1)+v,x=e+m,_=n+g;u[p*3]=x,u[p*3+1]=r(x,_)+gl,u[p*3+2]=_,f[p*2]=m,f[p*2+1]=g,d[p]=o&&o(x,_)?1:0}}a.cx=e,a.cz=n,a.half=s,i.posAttr.needsUpdate=!0,i.localAttr.needsUpdate=!0,o&&(i.maskAttr.needsUpdate=!0)}function e2(){const a=[[0,0,4030425],[0,.07,4030425],[.025,.1,4030425],[.07,.104,4030425],[.07,.104,16183516],[.24,.107,16183516],[.24,.107,15320720],[3.4,.15,15320720],[3.4,.155,16183516],[3.48,.155,16183516],[3.48,.156,7027231],[4.7,.18,7027231],[4.7,.182,16763196],[4.8,.183,16763196],[4.8,.184,2302763],[5.9,.19,2302763],[5.9,.192,7027231],[6.35,.196,7027231],[6.35,.196,1447452],[6.43,.17,1447452],[6.43,0,1447452]],c=14,l=a.length*c,u=new Float32Array(l*3),f=new Float32Array(l*3),d=new ce;for(let x=0;x<a.length;x++){const[_,M,S]=a[x];d.setHex(S);for(let E=0;E<c;E++){const C=E/c*Math.PI*2,w=(x*c+E)*3;u[w]=_,u[w+1]=Math.cos(C)*M,u[w+2]=Math.sin(C)*M,f[w]=d.r,f[w+1]=d.g,f[w+2]=d.b}}const h=[];for(let x=0;x<a.length-1;x++)for(let _=0;_<c;_++){const M=x*c+_,S=x*c+(_+1)%c,E=M+c,C=S+c;h.push(M,S,E,S,C,E)}const g=new Ve;g.setAttribute("position",new ke(u,3)),g.setAttribute("color",new ke(f,3)),g.setIndex(h),g.computeVertexNormals();const v=g.attributes.normal.array;for(let x=0;x<v.length;x++)v[x]!==v[x]&&(v[x]=0);g.computeBoundingSphere();const m=new u1({vertexColors:!0,roughness:.42,metalness:0}),p=new De(g,m);return p.castShadow=!1,p.receiveShadow=!1,p.frustumCulled=!1,p}function n2(i){const t=new Ne(0),e=new os;e.name="guides";const n=t2(t),s=Vf(t,{color:me.guideWhite,haloAlpha:.6,...Bf}),r=Vf(t,{color:Gf,haloAlpha:.7,arrow:!0,...Hf}),o=Wf(rc,s),a=Wf(oc,r);o.mesh.renderOrder=10,a.mesh.renderOrder=11;const c=e2();e.add(n.mesh,o.mesh,a.mesh,c),i&&i.scene&&i.scene.add(e);const l=new Float64Array(Math.max(rc,oc)*2),u=new ce(me.guideWhite),f=new ce(me.guideWarn),d=new ce(Gf),h=new tt(1,0,0),g=new tt,v=n.uniforms,m={visible:!0,fade:0,t:0,lastState:"idle",level:null,intent:null,guide:null,ringX:NaN,ringZ:NaN,hintA:0,gap:1.4,hold:0,aimX:1,aimZ:0,spin:0,top:0,ballX:0,ballZ:0,aimKey:0,poseKey:-1,poseGap:NaN};function p(){n.mesh.visible=!1,o.mesh.visible=!1,a.mesh.visible=!1}p(),c.visible=!1;function x(C,w){const y=C.level.heightAt,R=w&&w.cue;if(!R||R.points.length<4)o.geo.setDrawRange(0,0),v.uGhostA.value=0;else{const xt=qf(R.points,ky,l,rc),J=Xf(o,l,xt,y,Bf.halfW),X=s.uniforms;X.uLen.value=J,X.uColor.value.copy(w.warn?f:u),X.uEndGap.value=R.hit?Kn*.9:0,X.uFadeLen.value=R.hit?0:Math.min(3,J*.4),R.hit?(v.uGhostA.value=1,Ao(n,jy,R.ghost.x,R.ghost.z,Gy,y,null),v.uNormal.value.set(R.normal.x,R.normal.z)):v.uGhostA.value=0}const N=w&&w.eight;if(!N||N.points.length<4){a.geo.setDrawRange(0,0),v.uMarkA.value=0;return}const O=qf(N.points,.25,l,oc),Y=Xf(a,l,O,y,Hf.halfW),ut=r.uniforms;ut.uLen.value=Y;let ot=1e6;if(N.bounce){let xt=0;for(let J=1;J<O;J++){const X=l[J*2]-l[J*2-2],D=l[J*2+1]-l[J*2-1];if(xt+=Math.sqrt(X*X+D*D),Math.abs(l[J*2]-N.bounce.x)<1e-6&&Math.abs(l[J*2+1]-N.bounce.z)<1e-6){ot=xt;break}}}if(ut.uStub.value=ot,N.hazard){ut.uColor.value.copy(f),ut.uHead.value=0,ut.uEndGap.value=.62,v.uMarkA.value=1,v.uMarkKind.value=N.hazard==="water"?0:1;const xt=(O-1)*2;Ao(n,Zy,l[xt],l[xt+1],By,y,null)}else ut.uColor.value.copy(d),ut.uHead.value=1,ut.uEndGap.value=0,v.uMarkA.value=0}function _(C,w,b){if(b)m.gap=-.02;else if(ue.strike>=0){const X=Fn.rest+ue.pull*Fn.travel,D=ue.strike;m.gap=X+(-.02-X)*D*D}else if(ue.pulling)m.gap=Fn.rest+ue.pull*Fn.travel;else if(m.gap!==Fn.rest){const X=w*12>1?1:w*12;m.gap+=(Fn.rest-m.gap)*X,Math.abs(m.gap-Fn.rest)<.001&&(m.gap=Fn.rest)}if(m.gap===m.poseGap&&m.poseKey===m.aimKey)return;m.poseGap=m.gap,m.poseKey=m.aimKey;const y=m.spin*Kn*.55,R=m.top*Kn*.55,N=Math.sqrt(Math.max(Kn*Kn-y*y-R*R,0))+m.gap,O=m.aimX,Y=m.aimZ,ut=m.ballX-O*N-Y*y,ot=m.ballZ-Y*N+O*y,xt=C.level.heightAt(m.ballX,m.ballZ)+Kn+R,J=Math.cos(Fn.elev);g.set(-O*J,Math.sin(Fn.elev),-Y*J),c.quaternion.setFromUnitVectors(h,g),c.position.set(ut,xt,ot)}function M(C){const w=Math.sqrt(C.dx*C.dx+C.dz*C.dz)||1;m.aimX=C.dx/w,m.aimZ=C.dz/w,m.spin=C.spin,m.top=Number.isFinite(C.top)?C.top:0,m.ballX=C.x,m.ballZ=C.z,m.aimKey++}function S(C,w){m.t+=w,t.value=m.t;const b=C?C.state:"idle",y=!!(C&&C.world&&C.level&&b==="ready");m.lastState==="ready"&&b==="rolling"&&(m.hold=Fn.hold),b!==m.lastState&&b==="ready"&&(m.gap=1.4,m.intent=null),m.lastState=b;const R=m.visible&&y&&ue.enabled;if(R?m.fade=m.fade+w/.18>1?1:m.fade+w/.18:m.fade=0,R?c.visible=!0:m.hold>0&&m.visible&&C&&C.level?(m.hold-=w,c.visible=m.hold>0):(m.hold=0,c.visible=!1),!R){p(),c.visible&&_(C,w,!0);return}const N=C.level;N!==m.level&&(m.level=N,m.aimKey++,m.ringX=NaN,m.intent=null,m.guide=null,v.uPlaceR.value=N.placeR,v.uDashes.value=Math.max(12,Math.round(2*Math.PI*N.placeR/1.25)));const O=C.world.balls[1];(O.x!==m.ringX||O.z!==m.ringZ)&&(m.ringX=O.x,m.ringZ=O.z,Ao(n,Ky,O.x,O.z,N.placeR+Vy,N.heightAt,N.hazardAt));const Y=C.intent;if(Y!==m.intent){m.intent=Y,M(Y),Ao(n,$y,Y.x,Y.z,Hy,N.heightAt,null);const xt=C.guide();xt!==m.guide&&(m.guide=xt,x(C,xt))}const ut=m.fade;v.uOpacity.value!==ut&&(v.uOpacity.value=ut,s.uniforms.uOpacity.value=ut,r.uniforms.uOpacity.value=ut),v.uActive.value=ue.placing?1:0;const ot=ue.placing?0:ue.hint;if(m.hintA!==ot){const xt=w*4>1?1:w*4;m.hintA+=(ot-m.hintA)*xt,Math.abs(m.hintA-ot)<.002&&(m.hintA=ot),v.uHintA.value=m.hintA}if(i&&i.camera){const xt=i.camera.matrixWorld.elements,J=Math.sqrt(xt[8]*xt[8]+xt[10]*xt[10]);if(J>1e-4){const X=-xt[8]/J,D=-xt[10]/J,$=v.uFwd.value;(X!==$.x||D!==$.y)&&$.set(X,D)}}n.mesh.visible=!0,o.mesh.visible=o.geo.drawRange.count>0,a.mesh.visible=a.geo.drawRange.count>0,_(C,w,!1)}const E={update:S,setVisible(C){m.visible=!!C},dispose(){e.parent&&e.parent.remove(e),n.geo.dispose(),n.mat.dispose(),o.geo.dispose(),a.geo.dispose(),s.dispose(),r.dispose(),c.geometry.dispose(),c.material.dispose()}};return Object.defineProperty(E,"_debug",{value:{group:e,decals:n,cuePath:o,arrow:a,stick:c,cueMat:s,arrowMat:r,st:m},enumerable:!1}),E}const Yf="ebg-shot-style",i2=6,xd=30,Kf=14,xr=100,vr=100,_r=122,$o=92,Mr=22,vd=$o/2-Mr/2-4,hr=$o/2-vd,s2=20,r2=10,o2=6,a2=10,$f=8,c2=`
.ebg-shot{position:absolute;inset:0;z-index:20;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .16s ease,visibility 0s linear .16s;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;font-family:"Fredoka",system-ui,sans-serif;font-weight:600;color:#fff;--top:${xd}px;--travel:150px}
.ebg-shot.on{opacity:1;visibility:visible;transition:opacity .2s ease}
.ebg-txt{-webkit-text-stroke:4px #13261b;paint-order:stroke fill;text-shadow:0 2px 0 rgba(0,0,0,.25)}
@supports not (paint-order:stroke){.ebg-txt{-webkit-text-stroke:0;text-shadow:0 0 2px #13261b,0 0 2px #13261b,0 2px 0 #13261b}}
.ebg-num{font-family:"Lilita One",system-ui,sans-serif;font-weight:400;letter-spacing:.02em}
.ebg-pow{position:absolute;left:0;top:0;width:${xr}px;height:200px;pointer-events:none}
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
.ebg-spin{position:absolute;left:0;top:0;box-sizing:border-box;width:${vr}px;height:${_r}px;display:none;flex-direction:column;align-items:center;justify-content:flex-end;padding:4px;pointer-events:auto;touch-action:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:move}
.ebg-spin.on{display:flex}
.ebg-spin.drag{cursor:grabbing}
.ebg-spin-label{font-size:14px;line-height:1;letter-spacing:.08em;margin-bottom:6px}
.ebg-spin-face{position:relative;flex:none;width:${$o}px;height:${$o}px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffffff 0,#fffdf4 38%,#e6dfca 100%);box-shadow:0 0 0 3px #13261b,0 4px 8px rgba(0,0,0,.3)}
.ebg-spin-ring{position:absolute;inset:${hr}px;border-radius:50%;border:2px dashed rgba(19,38,27,.2)}
.ebg-spin-h,.ebg-spin-v{position:absolute;border-radius:1px;background:rgba(19,38,27,.2)}
.ebg-spin-h{left:${hr}px;right:${hr}px;top:50%;height:2px;margin-top:-1px}
.ebg-spin-v{top:${hr}px;bottom:${hr}px;left:50%;width:2px;margin-left:-1px}
.ebg-spin-mid{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:rgba(19,38,27,.35)}
.ebg-spin-dot{position:absolute;left:50%;top:50%;width:${Mr}px;height:${Mr}px;margin:-${Mr/2}px 0 0 -${Mr/2}px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#6ea3ec 0,#3d7fd9 60%,#2f69b8 100%);box-shadow:0 0 0 3px #fff,0 0 0 5px #13261b;transition:transform .14s ease-out}
.ebg-spin.drag .ebg-spin-dot{transition:none}
.ebg-ff{position:absolute;z-index:20;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom) + 12px));transform:translateX(-50%);padding:6px 16px;border-radius:999px;background:rgba(16,36,26,.5);font-family:"Fredoka",system-ui,sans-serif;font-weight:600;font-size:16px;line-height:1.2;color:#fff;opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s linear .25s,background .15s;pointer-events:none;white-space:nowrap;-webkit-user-select:none;user-select:none}
.ebg-ff.show,.ebg-ff.on{opacity:1;visibility:visible;transition:opacity .25s,background .15s}
.ebg-ff.on{background:rgba(255,138,42,.9)}
.ebg-safe{position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}
`,l2='<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7" stroke="#13261b" stroke-width="8"/><path d="M5 8l7 7 7-7" stroke="#fff" stroke-width="4"/></g></svg>';function Le(i,t,e,n){const s=document.createElement(i);return t&&(s.className=t),n&&(s.textContent=n),e&&e.appendChild(s),s}function u2(i,t,e={top:0,right:0,bottom:0,left:0},n=!1){const s=t>i,r=s?Math.max(90,Math.min(170,Math.round(t*.22))):Math.max(110,Math.min(210,Math.round(t*.3))),o=xd+r+Kf,a=Math.max(o2,e.bottom),c=Math.max(r2,e.right+6);let l,u=null;const f={top:0,right:0,bottom:0,left:0};if(s){l={left:Math.round(i/2-xr/2),top:t-a-o,width:xr,height:o},n&&(u={left:i-c-vr,top:t-a-Kf-_r,width:vr,height:_r});const d=Math.min(l.top,u?u.top:1/0);f.bottom=t-d+$f}else{l={left:i-c-xr,top:t-a-o,width:xr,height:o},n&&(u={left:i-c-vr,top:l.top-a2-_r,width:vr,height:_r});const d=Math.min(l.left,u?u.left:1/0);f.right=i-d+$f}return{portrait:s,travel:r,pow:l,spin:u,insets:f}}function f2(i,t={}){if(typeof document>"u"||!i){const T=()=>{},A={top:0,right:0,bottom:0,left:0};return{setVisible:T,setSpinEnabled:T,setSpin:T,setPull:T,setPreset:T,setPullHint:T,setFastForward:T,cancelPull:T,travel:()=>150,insets:()=>A,layout:T,parts:{},dispose:T}}if(!document.getElementById||!document.getElementById(Yf)){const T=Le("style");T.id=Yf,T.textContent=c2,(document.head||document.body).appendChild(T)}const e=Le("div","ebg-shot",i),n=Le("div","ebg-safe",e),s=Le("div","ebg-pow",e),r=Le("div","ebg-clip",s),o=Le("div","ebg-track",r),a=Le("div","ebg-fill",o);for(const T of[.25,.5,.75]){const A=Le("div","ebg-tick",o);A.style.top=T*100+"%"}const c=Le("div","ebg-last",o),l=Le("div","ebg-cue",r),u=Le("div","ebg-pct ebg-txt ebg-num",s,"0%"),f=Le("div","ebg-hint ebg-txt",s);Le("span","",f,"Pull");const d=Le("span","",f);d.innerHTML=l2;const h=Le("div","ebg-grab",s);h.setAttribute("aria-label","Pull the cue down to shoot");const g=Le("div","ebg-spin",e);g.setAttribute("aria-label","Spin: drag the dot sideways to curve, up or down to choose where the curve happens"),Le("span","ebg-spin-label ebg-txt",g,"SPIN");const v=Le("div","ebg-spin-face",g);Le("div","ebg-spin-ring",v),Le("div","ebg-spin-h",v),Le("div","ebg-spin-v",v),Le("div","ebg-spin-mid",v);const m=Le("div","ebg-spin-dot",v),p=Le("div","ebg-ff ebg-txt",i,"Hold to speed up");for(const T of[h,g])T.style.touchAction="none",T.style.webkitTouchCallout="none";let x=null,_=!1,M={top:0,right:0,bottom:0,left:0};const S=vd;function E(){const T={top:0,right:0,bottom:0,left:0};try{if(typeof getComputedStyle=="function"){const A=getComputedStyle(n);T.top=parseFloat(A.paddingTop)||0,T.right=parseFloat(A.paddingRight)||0,T.bottom=parseFloat(A.paddingBottom)||0,T.left=parseFloat(A.paddingLeft)||0}}catch{}return T}const C=T=>Math.round(T)+"px";function w(){const T=typeof window<"u"&&window.innerWidth?window.innerWidth:800,A=typeof window<"u"&&window.innerHeight?window.innerHeight:450;x=u2(T,A,E(),_),e.style.setProperty("--travel",x.travel+"px"),s.style.left=C(x.pow.left),s.style.top=C(x.pow.top),s.style.width=C(x.pow.width),s.style.height=C(x.pow.height),x.spin&&(g.style.left=C(x.spin.left),g.style.top=C(x.spin.top));const Z=x.insets,ct=M;(Z.top!==ct.top||Z.right!==ct.right||Z.bottom!==ct.bottom||Z.left!==ct.left)&&(M=Z,t.onInsets&&t.onInsets({...Z}))}typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",w),window.addEventListener("orientationchange",w));let b=!1,y="idle",R=0,N=0,O=0,Y=0,ut=!1;function ot(T,A){R=T<0?0:T>1?1:T,A!==y&&(y=A,s.className="ebg-pow"+(A==="pull"?" pull":A==="strike"?" strike":""),u.className="ebg-pct ebg-txt ebg-num"+(A==="pull"?" show":A==="cancel"?" show fade":""));const Z=A==="strike"?0:R*x.travel;l.style.transform="translateY("+Z.toFixed(1)+"px)",u.style.transform="translateY("+Z.toFixed(1)+"px)",a.style.setProperty("--p",A==="strike"?"0":R.toFixed(4)),u.textContent=(A==="cancel"?0:Math.round(R*100))+"%",A==="pull"&&ut&&xt(!1)}function xt(T){T=!!T,T!==ut&&(ut=T,f.className="ebg-hint ebg-txt"+(T?" show":""))}function J(T,A){let Z=Number.isFinite(T)?T:0,ct=A===void 0?O:Number.isFinite(A)?A:0;const bt=Math.sqrt(Z*Z+ct*ct);bt>1&&(Z/=bt,ct/=bt),N=Z,O=ct,m.style.transform="translate("+(Z*S).toFixed(1)+"px,"+(-ct*S).toFixed(1)+"px)"}const X=new Set;function D(T){return!t.ballDown||!t.ballDown(T)?!1:(X.add(T.pointerId),!0)}function $(T,A){if(!X.has(T.pointerId))return!1;A!=="move"&&X.delete(T.pointerId);const Z=A==="move"?t.ballMove:A==="up"?t.ballUp:t.ballCancel;return Z&&Z(T),!0}let q=null;function at(T){if(!(T.pointerType==="mouse"&&T.button!==0)&&(T.preventDefault&&T.preventDefault(),!(q||X.has(T.pointerId))&&!D(T)&&!(!t.onPullStart||!t.onPullStart(T.pointerId,T.pointerType)))){q={id:T.pointerId,y0:T.clientY,t:0};try{h.setPointerCapture(T.pointerId)}catch{}}}function V(T){if($(T,"move")||!q||T.pointerId!==q.id)return;const A=T.clientY-q.y0-i2,Z=A<=0?0:A>=x.travel?1:A/x.travel;q.t=Z,t.onPull&&t.onPull(Z)}function j(T,A){if(!q||T.pointerId!==q.id)return;A||V(T);const Z=q.t;q=null;try{h.releasePointerCapture(T.pointerId)}catch{}t.onPullEnd&&t.onPullEnd(Z,A)}const mt=T=>{$(T,"up")||j(T,!1)},H=T=>{$(T,"cancel")||j(T,!0)},Q=T=>{q&&T.pointerId===q.id&&T.target!==h&&V(T)},lt=T=>{q&&T.pointerId===q.id&&T.target!==h&&j(T,!1)},At=T=>{q&&T.pointerId===q.id&&T.target!==h&&j(T,!0)},Nt=T=>{T.cancelable&&T.preventDefault&&T.preventDefault()};h.addEventListener("pointerdown",at),h.addEventListener("pointermove",V),h.addEventListener("pointerup",mt),h.addEventListener("pointercancel",H),typeof window<"u"&&window.addEventListener&&(window.addEventListener("pointermove",Q),window.addEventListener("pointerup",lt),window.addEventListener("pointercancel",At)),h.addEventListener("touchstart",Nt,{passive:!1}),h.addEventListener("touchmove",Nt,{passive:!1}),h.addEventListener("contextmenu",Nt);let et=null,_t={t:-1e9,x:0,y:0};const B={x:0,y:0};function nt(T,A){const Z=v.getBoundingClientRect();let ct=(T+et.offX-(Z.left+Z.width/2))/S,bt=-(A+et.offY-(Z.top+Z.height/2))/S;const wt=Math.sqrt(ct*ct+bt*bt);return wt>1&&(ct/=wt,bt/=wt),B.x=ct,B.y=bt,B}function Gt(T){if(T.pointerType==="mouse"&&T.button!==0||(T.preventDefault&&T.preventDefault(),et||X.has(T.pointerId))||D(T))return;const A=T.timeStamp||0;if(A-_t.t<320&&Math.abs(T.clientX-_t.x)<24&&Math.abs(T.clientY-_t.y)<24){_t.t=-1e9,t.onSpin&&t.onSpin(0,0,"reset");return}const ct=v.getBoundingClientRect(),bt=ct.left+ct.width/2+N*S,wt=ct.top+ct.height/2-O*S,Wt=Math.hypot(T.clientX-bt,T.clientY-wt)<=s2;et={id:T.pointerId,offX:Wt?bt-T.clientX:0,offY:Wt?wt-T.clientY:0,sx:T.clientX,sy:T.clientY,ts:A},g.className="ebg-spin on drag";try{g.setPointerCapture(T.pointerId)}catch{}const Ft=nt(T.clientX,T.clientY);t.onSpin&&t.onSpin(Ft.x,Ft.y,"start")}function Jt(T){if($(T,"move")||!et||T.pointerId!==et.id)return;const A=nt(T.clientX,T.clientY);t.onSpin&&t.onSpin(A.x,A.y,"move")}function Bt(T){if($(T,"up")||!et||T.pointerId!==et.id)return;const A=nt(T.clientX,T.clientY);_t=Math.abs(T.clientX-et.sx)<6&&Math.abs(T.clientY-et.sy)<6?{t:et.ts,x:et.sx,y:et.sy}:{t:-1e9,x:0,y:0},et=null,g.className="ebg-spin on";try{g.releasePointerCapture(T.pointerId)}catch{}t.onSpin&&t.onSpin(A.x,A.y,"end")}function Kt(T){$(T,"cancel")||!et||T.pointerId!==et.id||(et=null,g.className="ebg-spin on",t.onSpin&&t.onSpin(N,O,"end"))}g.addEventListener("pointerdown",Gt),g.addEventListener("pointermove",Jt),g.addEventListener("pointerup",Bt),g.addEventListener("pointercancel",Kt),g.addEventListener("touchstart",Nt,{passive:!1}),g.addEventListener("touchmove",Nt,{passive:!1}),g.addEventListener("contextmenu",Nt);const Xt={setVisible(T){T=!!T,T!==b&&(b=T,e.className="ebg-shot"+(T?" on":""))},setSpinEnabled(T){T=!!T,T!==_&&(_=T,g.className="ebg-spin"+(T?" on":""),w())},setSpin:J,setPull:ot,setPreset(T){const A=T<0?0:T>1?1:T;c.style.top=(A*100).toFixed(2)+"%"},setPullHint:xt,setFastForward(T){T!==Y&&(Y=T,p.className="ebg-ff ebg-txt"+(T===1?" show":T===2?" on":""),p.textContent=T===2?"▶▶ 3×":"Hold to speed up")},cancelPull(){if(q){try{h.releasePointerCapture(q.id)}catch{}q=null}et&&(et=null,g.className="ebg-spin"+(_?" on":"")),X.clear()},travel:()=>x.travel,insets:()=>({...M}),layout:w,parts:{root:e,pow:s,grab:h,spin:g,face:v,dot:m,pct:u,hint:f,ff:p,cue:l,fill:a,last:c},dispose(){typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",w),window.removeEventListener("orientationchange",w)),h.removeEventListener("pointerdown",at),h.removeEventListener("pointermove",V),h.removeEventListener("pointerup",mt),h.removeEventListener("pointercancel",H),window.removeEventListener("pointermove",Q),window.removeEventListener("pointerup",lt),window.removeEventListener("pointercancel",At),h.removeEventListener("touchstart",Nt),h.removeEventListener("touchmove",Nt),h.removeEventListener("contextmenu",Nt),g.removeEventListener("pointerdown",Gt),g.removeEventListener("pointermove",Jt),g.removeEventListener("pointerup",Bt),g.removeEventListener("pointercancel",Kt),g.removeEventListener("touchstart",Nt),g.removeEventListener("touchmove",Nt),g.removeEventListener("contextmenu",Nt),e.parentNode&&e.parentNode.removeChild(e),p.parentNode&&p.parentNode.removeChild(p)}};return w(),ot(0,"idle"),J(0,0),Xt.setPreset(.5),Xt}const cc={mouse:4,pen:6,touch:10},jf=.06,h2=.1,lc=.08,d2=.25,Zf=.35,p2=.7,Jf=110,Qf=320,m2=.5,g2=2.4,jo=Math.PI/180,x2=1*jo,v2=.1*jo,th=.1,_2=10;function M2({stage:i,rig:t,play:e,events:n,uiRoot:s,onInsets:r}){Oy(),ue.enabled=!1;const o=typeof window<"u"?window:null,a=typeof document<"u"?document:null,c=i&&i.renderer&&i.renderer.domElement?i.renderer.domElement:null;let l=!1;const u={clock:.5,firedAt:-1e9,readyT:.5,idleT:.5,rollT:.5,aimHoldT:.5,spinHoldT:.5,topHoldT:.5};u.clock=0,u.readyT=0,u.idleT=0,u.rollT=0,u.aimHoldT=0,u.spinHoldT=0,u.topHoldT=0;let f=e.state,d=!1;const h={shots:0,placed:!1,placeShots:0};let g=null,v=null,m=null;const p={left:!1,right:!1,shift:!1,a:!1,d:!1,w:!1,s:!1,f:!1},x=new Map;let _=null;const M=new Set,S=new Set;let E=1,C={left:0,top:0};const w=f2(s,{onPullStart(U,rt){return N()?(g={t0:u.clock,p:0},ue.pulling=!0,ue.pull=0,u.idleT=0,w.setPull(0,"pull"),!0):!1},onPull(U){g&&(g.p=U,ue.pull=U,w.setPull(U,"pull"))},onPullEnd(U,rt){if(!g)return;const Et=u.clock-g.t0<h2;g=null,ue.pulling=!1,rt||Et||U<jf||!R()?ot(!0):xt(U)},ballDown(U){return!l||e.state!=="ready"||y()||x.size>0||(D(),!q(X(U),U.pointerType||"mouse"))?!1:(H(U,!0),!!(_&&_.kind==="place"&&_.id===U.pointerId))},ballMove:U=>Q(U),ballUp:U=>lt(U),ballCancel:U=>At(U),onInsets(U){typeof r=="function"&&r(U)},onSpin(U,rt,Et){!l||e.state!=="ready"||!(e.level&&e.level.spin)||(u.idleT=0,Et==="reset"?Y(0,0):Y(U,rt),w.setSpin(e.intent.spin,O(e.intent)))}}),b=()=>l&&e.state==="ready",y=()=>!!(g||v||m),R=()=>l&&e.state==="ready"&&!m,N=()=>R()&&!y(),O=U=>Number.isFinite(U.top)?U.top:0;function Y(U,rt){let Et=Number.isFinite(U)?U<-1?-1:U>1?1:U:0,F=Number.isFinite(rt)?rt<-1?-1:rt>1?1:rt:0;Math.abs(Et)<th&&(Et=0),Math.abs(F)<th&&(F=0);const st=Math.sqrt(Et*Et+F*F);st>1&&(Et/=st,F/=st);const ht=e.intent.spin===0&&O(e.intent)===0;e.setSpin(Et,F),Et===0&&F===0&&!ht&&ut(8)}function ut(U){try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(U)}catch{}}function ot(U){g=null,v=null,m=null,w.cancelPull(),ue.pulling=!1,ue.pull=0,ue.strike=-1,w.setPull(0,U?"cancel":"idle")}function xt(U){m={t:0,p:U},ue.pulling=!1,ue.pull=U,ue.strike=0,w.setPull(U,"strike")}function J(U){if(m=null,ue.strike=-1,ue.pull=0,!R()){ot(!1);return}e.setPower(U),e.fire()&&(u.firedAt=u.clock,h.shots++,w.setPull(0,"idle"))}function X(U){return{x:U.clientX-C.left,y:U.clientY-C.top}}function D(){if(c&&c.getBoundingClientRect){const U=c.getBoundingClientRect();C={left:U.left,top:U.top}}}function $(){const U=e.intent,rt=e.level?e.level.heightAt(U.x,U.z)+kt.R:kt.R;return t.groundToScreen(U.x,rt,U.z)}function q(U,rt){const Et=$();if(!Et)return!1;const F=e.intent,st=t.pxPerMetre(F.x,F.z)||20,ht=Math.max(rt==="touch"?34:28,.9*st);return Math.hypot(U.x-Et.x,U.y-Et.y)<=ht}function at(){const U=e.intent;return{x:U.x,z:U.z,offset:U.offset}}function V(U){if(!U||e.state!=="ready")return;e.setPlacement(U.x,U.z);const rt=U.offset-e.intent.offset;rt!==0&&e.rotateAim(rt)}function j(U){U!==E&&(E=U,e.setSpeed(U))}function mt(){const U=x.values(),rt=U.next().value,Et=U.next().value;_={kind:"pinch",d0:Math.hypot(rt.x-Et.x,rt.y-Et.y)||1,cx:(rt.x+Et.x)/2,cy:(rt.y+Et.y)/2}}function H(U,rt){if(!l)return;U.preventDefault&&U.preventDefault(),D();const Et=X(U);if(U.isPrimary===!0&&U.pointerType==="touch"&&(x.clear(),M.clear(),S.clear(),_&&_.kind!=="pan"&&(_=null)),S.delete(U.pointerId),U.pointerType==="mouse"&&U.button!==0){if(U.button===2&&y()&&!m){ot(!0);return}(U.button===1||U.button===2)&&(_={kind:"pan",id:U.pointerId,x:Et.x,y:Et.y},B(U.pointerId));return}if(x.set(U.pointerId,Et),u.idleT=0,e.state==="rolling"){u.clock-u.firedAt>=d2&&M.add(U.pointerId),x.size>=2?mt():_={kind:"ff",id:U.pointerId};return}if(x.size>=2){_&&(_.kind==="place"||_.kind==="aim")&&(V(_.snap),ue.placing=!1),x.size===2&&mt();return}if(e.state!=="ready"){_={kind:"block"};return}B(U.pointerId);const F=U.pointerType||"mouse",st=$(),ht=rt===!0||q(Et,F),vt={id:U.pointerId,type:F,sx:Et.x,sy:Et.y,t0:u.clock,moved:!1,snap:at(),travelled:0};if(ht)_={...vt,kind:"place",grabX:st.x-Et.x,grabY:st.y-Et.y};else if(_={...vt,kind:"aim",lastX:Et.x,lastY:Et.y,lastTs:U.timeStamp||0,speed:0},F!=="touch"){const Tt=t.screenToGround(Et.x,Et.y);Tt&&e.setAimToward(Tt.x,Tt.z)}}function Q(U){if(!l)return;const rt=X(U);if(_&&_.kind==="pan"&&U.pointerId===_.id){const se=rt.x-_.x,ae=rt.y-_.y;_.x=rt.x,_.y=rt.y,(se||ae)&&t.panBy(se,ae);return}if(!x.has(U.pointerId)||(x.set(U.pointerId,rt),!_))return;if(_.kind==="pinch"){if(x.size<2)return;const se=x.values(),ae=se.next().value,pe=se.next().value,he=Math.hypot(ae.x-pe.x,ae.y-pe.y)||1,Qt=(ae.x+pe.x)/2,ge=(ae.y+pe.y)/2,re=he/_.d0;Math.abs(re-1)>1e-4&&t.zoomBy(re,Qt,ge),(Qt!==_.cx||ge!==_.cy)&&t.panBy(Qt-_.cx,ge-_.cy),_.d0=he,_.cx=Qt,_.cy=ge;return}if(U.pointerId!==_.id||_.kind!=="place"&&_.kind!=="aim"||e.state!=="ready")return;u.idleT=0;const Et=Math.hypot(rt.x-_.sx,rt.y-_.sy);if(Et>_.travelled&&(_.travelled=Et),_.kind==="place"){if(!_.moved){if(Et<(cc[_.type]||6))return;_.moved=!0,ue.placing=!0}let se=_.grabX,ae=_.grabY;if(_.type==="touch"){const he=_.travelled>=40?1:_.travelled/40;se+=(0-se)*he,ae+=(-52-ae)*he}const pe=t.screenToGround(rt.x+se,rt.y+ae);pe&&e.setPlacement(pe.x,pe.z);return}if(_.type!=="touch"){!_.moved&&Et>=(cc[_.type]||4)&&(_.moved=!0);const se=t.screenToGround(rt.x,rt.y);se&&e.setAimToward(se.x,se.z);return}if(!_.moved){if(Et<cc.touch)return;_.moved=!0,_.lastX=rt.x,_.lastY=rt.y,_.lastTs=U.timeStamp||0;return}const F=$(),st=rt.x-_.lastX,ht=rt.y-_.lastY,vt=U.timeStamp||0,Tt=vt-_.lastTs;if(_.lastX=rt.x,_.lastY=rt.y,_.lastTs=vt,!F)return;const K=rt.x-st-F.x,pt=rt.y-ht-F.y,Rt=Math.hypot(K,pt);if(Rt<1)return;const It=(K*ht-pt*st)/Rt,Lt=Rt<Jf?Jf:Rt>Qf?Qf:Rt;if(Tt>0){const se=Math.hypot(st,ht)/(Tt/1e3);_.speed+=(se-_.speed)*.35}const qt=_.speed,Yt=qt<=500?0:qt>=1800?1:(qt-500)/1300,le=Zf+(p2-Zf)*Yt*Yt;It!==0&&e.rotateAim(It/Lt*le)}function lt(U){const rt=X(U),Et=x.delete(U.pointerId);if(M.delete(U.pointerId),S.delete(U.pointerId),_&&_.kind==="pan"&&U.pointerId===_.id){_=null,nt(U.pointerId);return}if(!Et||!_)return;if(_.kind==="ff"){U.pointerId===_.id&&(_=null);return}if(_.kind==="pinch"||_.kind==="block"){x.size===0?_=null:_={kind:"block"};return}if(U.pointerId!==_.id)return;nt(U.pointerId);const F=_;if(_=null,F.kind==="place"){ue.placing=!1,F.moved&&(h.placed=!0);return}if(F.kind==="aim"&&F.type==="touch"&&!F.moved&&u.clock-F.t0<=m2&&l&&e.state==="ready"){const st=t.screenToGround(rt.x,rt.y);st&&e.setAimToward(st.x,st.z)}}function At(U){if(x.delete(U.pointerId),M.delete(U.pointerId),S.delete(U.pointerId),_&&_.kind==="pan"&&_.id===U.pointerId){_=null;return}_&&(_.id===U.pointerId||x.size===0)&&(_.kind==="place"&&(ue.placing=!1),_=x.size?{kind:"block"}:null)}function Nt(U){if(U.preventDefault&&U.preventDefault(),!l)return;D();const rt=X(U),Et=U.deltaMode===1?U.deltaY*16:U.deltaMode===2?U.deltaY*400:U.deltaY;let F=Math.exp(-Et*.0015);F=F<.8?.8:F>1.25?1.25:F,t.zoomBy(F,rt.x,rt.y)}const et=U=>{U.preventDefault&&U.preventDefault()},_t=U=>{U.cancelable!==!1&&U.preventDefault&&U.preventDefault()};function B(U){try{c&&c.setPointerCapture&&c.setPointerCapture(U)}catch{}}function nt(U){try{c&&c.releasePointerCapture&&c.releasePointerCapture(U)}catch{}}c&&(c.style&&(c.style.touchAction="none"),c.addEventListener("pointerdown",H),c.addEventListener("pointermove",Q),c.addEventListener("pointerup",lt),c.addEventListener("pointercancel",At),c.addEventListener("wheel",Nt,{passive:!1}),c.addEventListener("contextmenu",et),c.addEventListener("touchstart",_t,{passive:!1}),c.addEventListener("touchmove",_t,{passive:!1}),c.addEventListener("gesturestart",_t));const Gt=[w.parts.grab,w.parts.spin],Jt=U=>{const rt=U.target;return rt===c||rt&&Gt.indexOf(rt)>=0?!1:x.has(U.pointerId)||S.has(U.pointerId)||_&&_.kind==="pan"&&_.id===U.pointerId},Bt=U=>{Jt(U)&&Q(U)},Kt=U=>{Jt(U)&&lt(U)},Xt=U=>{Jt(U)&&At(U)};o&&c&&(o.addEventListener("pointermove",Bt),o.addEventListener("pointerup",Kt),o.addEventListener("pointercancel",Xt));function T(U){const rt=U.target;return!!(rt&&(rt.tagName==="INPUT"||rt.tagName==="TEXTAREA"||rt.isContentEditable))}function A(U){if(T(U))return;const rt=U.code;if(rt==="ShiftLeft"||rt==="ShiftRight"){p.shift=!0;return}if(l&&((rt==="Space"||rt.startsWith("Arrow"))&&U.preventDefault(),!U.repeat))switch(rt){case"ArrowLeft":case"ArrowRight":{const Et=rt==="ArrowLeft";Et?p.left=!0:p.right=!0,u.aimHoldT=0,b()&&(u.idleT=0,e.rotateAim((Et?-1:1)*(U.shiftKey||p.shift?v2:x2)));break}case"KeyA":case"KeyD":{rt==="KeyA"?p.a=!0:p.d=!0,u.spinHoldT=0,ct(rt==="KeyA"?-1:1,0);break}case"KeyW":case"KeyS":{rt==="KeyW"?p.w=!0:p.s=!0,u.topHoldT=0,ct(0,rt==="KeyW"?1:-1);break}case"Space":N()&&(v={t:0,p:0},ue.pulling=!0,ue.pull=0,u.idleT=0,w.setPull(0,"pull"));break;case"Backspace":case"KeyX":(g||v)&&ot(!0);break;case"KeyO":case"KeyV":n.emit("ui:overview",{on:!d});break;case"KeyF":p.f=!0;break}}function Z(U){const rt=U.code;if(rt==="ShiftLeft"||rt==="ShiftRight"){p.shift=!1;return}if(rt==="ArrowLeft")p.left=!1;else if(rt==="ArrowRight")p.right=!1;else if(rt==="KeyA")p.a=!1;else if(rt==="KeyD")p.d=!1;else if(rt==="KeyW")p.w=!1;else if(rt==="KeyS")p.s=!1;else if(rt==="KeyF")p.f=!1;else if(rt==="Space"&&v){const Et=v.p;v=null,ue.pulling=!1,Et>=jf&&R()?xt(Et):ot(!0)}}function ct(U,rt){if(!b()||!(e.level&&e.level.spin))return;u.idleT=0;let Et=e.intent.spin,F=O(e.intent);if(U!==0){const st=Math.sqrt(Math.max(0,1-F*F));Et=Math.round((Et+U*.1)*10)/10,Et=Et<-st?-st:Et>st?st:Et}if(rt!==0){const st=Math.sqrt(Math.max(0,1-Et*Et));F=Math.round((F+rt*.1)*10)/10,F=F<-st?-st:F>st?st:F}e.setSpin(Et,F),w.setSpin(e.intent.spin,O(e.intent))}function bt(){y()&&ot(!1),p.left=p.right=p.shift=p.a=p.d=p.w=p.s=p.f=!1,x.clear(),_&&_.kind==="place"&&(ue.placing=!1),_=null,M.clear(),S.clear()}function wt(){a&&a.visibilityState==="hidden"&&bt()}o&&(o.addEventListener("keydown",A),o.addEventListener("keyup",Z),o.addEventListener("blur",bt),o.addEventListener&&c&&o.addEventListener("resize",D)),a&&a.addEventListener&&a.addEventListener("visibilitychange",wt);const Wt=[n.on("ui:overview",({on:U})=>{d=!!U}),n.on("ad:start",()=>bt()),n.on("shot:fire",()=>{u.firedAt=u.clock,u.rollT=0,w.setVisible(!1)}),n.on("hole:start",()=>{d=!1})];let Ft=!1,zt=!1,W=null,G=0;function it(U){u.clock+=U;const rt=e.state;if(rt!==f){if(rt==="ready"){u.readyT=0,u.idleT=0;for(const Tt of x.keys())S.add(Tt);x.clear(),M.clear(),_&&_.kind!=="pan"&&(_=null)}f==="ready"&&y()&&!m&&ot(!1),f=rt}if(m&&(m.t+=U,ue.strike=m.t/lc>1?1:m.t/lc,m.t>=lc&&J(m.p)),v){v.t+=U;const Tt=v.t/g2%1;v.p=1-Math.abs(1-2*Tt),ue.pull=v.p,w.setPull(v.p,"pull")}if(b()){u.readyT+=U,u.idleT+=U;const Tt=(p.right?1:0)-(p.left?1:0);if(Tt!==0&&(u.aimHoldT+=U,u.idleT=0,u.aimHoldT>.25)){const Rt=p.shift?3*jo:(30+60*Math.min(1,(u.aimHoldT-.25)/1.2))*jo;e.rotateAim(Tt*Rt*U)}const K=(p.d?1:0)-(p.a?1:0);K!==0&&(u.spinHoldT+=U,u.spinHoldT>.35&&(u.spinHoldT-=.1,ct(K,0)));const pt=(p.w?1:0)-(p.s?1:0);pt!==0&&(u.topHoldT+=U,u.topHoldT>.35&&(u.topHoldT-=.1,ct(0,pt)))}const Et=l&&rt==="rolling";Et&&(u.rollT+=U),rt!=="rolling"&&M.size&&M.clear(),j(Et&&(p.f||M.size>0)?3:1);const F=Et?E>1?2:u.rollT>1.5?1:0:0;F!==G&&(G=F,w.setFastForward(F));const st=l&&rt==="ready";st!==Ft&&(Ft=st,w.setVisible(st),!st&&y()&&!m&&ot(!1));const ht=!!(e.level&&e.level.spin);ht!==zt&&(zt=ht,w.setSpinEnabled(ht)),e.intent!==W&&(W=e.intent,w.setSpin(e.intent.spin,O(e.intent)),w.setPreset(e.lastPower!==void 0?e.lastPower:e.intent.power));const vt=u.idleT>_2;w.setPullHint(st&&!y()&&(h.shots===0&&u.readyT>.6||vt)),ue.hint=st&&!_&&(!h.placed&&h.shots<3&&u.readyT>.4||vt)?1:0,ue.enabled=l}function yt(U){U=!!U,U!==l&&(l=U,ue.enabled=U,U?(D(),e.state==="ready"&&(Ft=!0,w.setVisible(!0))):(y()&&ot(!1),x.clear(),_&&_.kind==="place"&&(ue.placing=!1),_=null,M.clear(),p.left=p.right=p.a=p.d=p.w=p.s=p.f=!1,j(1),Ft=!1,w.setVisible(!1),G=0,w.setFastForward(0),w.setPullHint(!1)))}function ft(){yt(!1);for(const U of Wt)U();c&&(c.removeEventListener("pointerdown",H),c.removeEventListener("pointermove",Q),c.removeEventListener("pointerup",lt),c.removeEventListener("pointercancel",At),c.removeEventListener("wheel",Nt),c.removeEventListener("contextmenu",et),c.removeEventListener("touchstart",_t),c.removeEventListener("touchmove",_t),c.removeEventListener("gesturestart",_t)),o&&(o.removeEventListener("keydown",A),o.removeEventListener("keyup",Z),o.removeEventListener("blur",bt),o.removeEventListener("resize",D),o.removeEventListener("pointermove",Bt),o.removeEventListener("pointerup",Kt),o.removeEventListener("pointercancel",Xt)),a&&a.removeEventListener&&a.removeEventListener("visibilitychange",wt),w.dispose()}const dt={enable:yt,update:it,dispose:ft,insets:()=>w.insets()};return Object.defineProperty(dt,"_debug",{value:{hud:w,session:h,get gesture(){return _}},enumerable:!1}),dt}function Pt(i,t,e){const[n,...s]=i.split("."),r=document.createElement(n||"div");if(s.length&&(r.className=s.join(" ")),t)for(const o in t){const a=t[o];if(!(a==null||a===!1))if(o==="html")r.innerHTML=a;else if(o==="text")r.textContent=a;else if(o.startsWith("on"))r.addEventListener(o.slice(2),a);else if(o==="style")for(const c in a)c.startsWith("--")?r.style.setProperty(c,a[c]):r.style[c]=a[c];else r.setAttribute(o,a===!0?"":String(a))}return e!==void 0&&_d(r,e),r}function _d(i,t){if(Array.isArray(t)){for(const e of t)_d(i,e);return}t==null||t===!1||i.appendChild(typeof t=="string"||typeof t=="number"?document.createTextNode(String(t)):t)}const Ue={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4.5" width="4.6" height="15" rx="1.8"/><rect x="13.9" y="4.5" width="4.6" height="15" rx="1.8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.8 12S5.6 5 12 5s10.2 7 10.2 7-3.8 7-10.2 7S1.8 12 1.8 12z"/><circle cx="12" cy="12" r="3.6" class="pupil"/></svg>',play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 4.8v14.4a1 1 0 0 0 1.5.9l11-7.2a1 1 0 0 0 0-1.8L9 3.9a1 1 0 0 0-1.5.9z"/></svg>',retry:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" fill="none" stroke-width="3" stroke-linecap="round"/><path d="M3.4 3.6l.6 5.6 5.5-1.2z"/></svg>',grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="3" width="7.6" height="7.6" rx="2"/><rect x="3" y="13.4" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="13.4" width="7.6" height="7.6" rx="2"/></svg>',soundOn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.6 8.6a5 5 0 0 1 0 6.8M18.4 5.9a9 9 0 0 1 0 12.2" fill="none" stroke-width="2.4" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.8 9.2l5.4 5.6M21.2 9.2l-5.4 5.6" fill="none" stroke-width="2.6" stroke-linecap="round"/></svg>',ball:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="9" cy="9" r="2.6" fill="#fff" opacity=".85"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.2L8 12l6.8 6.8" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',lock:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5" fill="none" stroke-width="2.8"/><rect x="4.8" y="10" width="14.4" height="11" rx="3"/></svg>',star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4l2.85 6 6.6.75-4.9 4.5 1.35 6.5L12 16.85 6.1 20.15l1.35-6.5-4.9-4.5 6.6-.75z"/></svg>'};function y2(i,{events:t}={}){const e=(S,E)=>t&&t.emit(S,E);let n=!1,s=!1,r=0,o=0;const a=Pt("b.hud-num",null,"1"),c=Pt("div.hud-ball",null,a),l=Pt("span.hud-name",null,""),u=Pt("span.hud-par",null,"Par 2"),f=Pt("div.hud-chip.hud-hole",null,[c,Pt("div.hud-meta",null,[l,u])]),d=Pt("b.hud-strokes-n",null,"0"),h=Pt("div.hud-pips",{"aria-hidden":"true"}),g=Pt("span.hud-pop",{"aria-hidden":"true"},"+1"),v=Pt("div.hud-chip.hud-strokes",{role:"status","aria-live":"polite"},[Pt("span.hud-lbl",null,"Strokes"),d,h,g]),m=Pt("button.hud-btn.hud-eye",{type:"button","aria-label":"Look at the whole hole","aria-pressed":"false",html:Ue.eye,onclick:()=>_(!n,!0)}),p=Pt("button.hud-btn.hud-pause",{type:"button","aria-label":"Pause",html:Ue.pause,onclick:()=>e("ui:pause",{})}),x=Pt("div.hud",{"data-shown":"false"},[f,v,Pt("div.hud-btns",null,[m,p])]);i.appendChild(x);function _(S,E){n=!!S,m.setAttribute("aria-pressed",n?"true":"false"),m.classList.toggle("on",n),E&&e("ui:overview",{on:n})}function M(){const S=Math.max(o,Math.min(r,o+4));for(;h.childNodes.length>S;)h.removeChild(h.lastChild);for(;h.childNodes.length<S;)h.appendChild(Pt("i.pip"));for(let E=0;E<S;E++){const C=h.childNodes[E];C.className="pip"+(E<r?" used":"")+(E>=o?" over":"")}}return t&&(t.on("ui:overview",({on:S}={})=>{!!S!==n&&_(S,!1)}),t.on("shot:end",({penalty:S}={})=>{S&&(g.classList.remove("go"),g.offsetWidth,g.classList.add("go"))})),{el:x,setHole(S,E){a.textContent=String((E|0)+1),l.textContent=S&&S.name?S.name:"",u.textContent="Par "+(S?S.par:""),x.setAttribute("data-round",String(S&&S.round?S.round:1)),n&&_(!1,!0)},setStrokes(S,E){const C=Math.max(0,S|0),w=C>r;r=C,E!==void 0&&(o=Math.max(1,E|0)),d.textContent=String(r),v.classList.toggle("over",r>o),M(),w&&(d.classList.remove("bump"),d.offsetWidth,d.classList.add("bump"))},show(S){s=!!S,x.setAttribute("data-shown",s?"true":"false")}}}const eh=350,S2=1400,b2=5200,w2=1900,E2=1700,T2=3e3,A2={ace:"Unbelievable!",albatross:"Amazing shot!",eagle:"Superb!",birdie:"Great shot!",par:"Well played!",bogey:"So close!",double:"Nice try!",over:"Keep going!",picked:"Try again for a star!"},C2={ace:"Hole-in-one!",albatross:"Albatross!",eagle:"Eagle!",birdie:"Birdie!",par:"Par!"},dn="#13261b";function R2(i,t,e,n,s){let r="";for(let o=0;o<s*2;o++){const a=o*Math.PI/s-Math.PI/2,c=o%2?n:e;r+=(o?"L":"M")+(i+Math.cos(a)*c).toFixed(1)+" "+(t+Math.sin(a)*c).toFixed(1)}return r+"Z"}const Is=(i,t,e)=>`<g transform="${e}" stroke="${dn}" stroke-width="3" stroke-linejoin="round"><path d="M15 34l-10-5 2.5 10z" fill="${t}"/><ellipse cx="29" cy="37" rx="16" ry="13" fill="${i}"/><circle cx="41" cy="25" r="10" fill="${i}"/><path d="M50 22.5l9 3.5-9 3.5z" fill="#FFC93C"/><path d="M19 35c6-3 12-1 14 5-6 3-12 2-14-5z" fill="${t}"/><circle cx="43.5" cy="23" r="2.3" fill="${dn}" stroke="none"/></g>`,Zi=i=>`<svg viewBox="0 0 64 64" aria-hidden="true">${i}</svg>`,nh={ace:Zi(`<path d="${R2(32,32,30,18,12)}" fill="#FFC93C" stroke="${dn}" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="32" r="12" fill="#FBFAF3" stroke="${dn}" stroke-width="3"/><text x="32" y="39" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="19" fill="${dn}">1</text>`),albatross:Zi(Is("#9F7BE0","#7B4FC9","translate(-4 -10) scale(.62)")+Is("#9F7BE0","#7B4FC9","translate(26 -6) scale(.62)")+Is("#9F7BE0","#7B4FC9","translate(8 22) scale(.62)")),eagle:Zi(Is("#FFA65A","#E07020","translate(-2 -4) scale(.7)")+Is("#FFA65A","#E07020","translate(20 18) scale(.7)")),birdie:Zi(Is("#5B93F0","#2D6CDF","translate(0 0)")),par:Zi(`<ellipse cx="32" cy="53" rx="22" ry="7" fill="#3CC47A" stroke="${dn}" stroke-width="3"/><ellipse cx="32" cy="52" rx="7" ry="2.6" fill="${dn}"/><path d="M32 51V9" stroke="${dn}" stroke-width="5" stroke-linecap="round"/><path d="M32 50V10" stroke="#fff" stroke-width="2"/><path d="M34 9l21 7.5L34 24z" fill="#E8322F" stroke="${dn}" stroke-width="3" stroke-linejoin="round"/>`),smile:Zi(`<circle cx="32" cy="32" r="26" fill="#8EC5FF" stroke="${dn}" stroke-width="3"/><circle cx="23" cy="27" r="3.4" fill="${dn}"/><circle cx="41" cy="27" r="3.4" fill="${dn}"/><path d="M20 38c6 8 18 8 24 0" fill="none" stroke="${dn}" stroke-width="3.6" stroke-linecap="round"/>`),picked:Zi(`<g fill="#fff" stroke="${dn}" stroke-width="3" stroke-linejoin="round"><rect x="15" y="12" width="8" height="26" rx="4"/><rect x="24" y="7" width="8" height="30" rx="4"/><rect x="33" y="9" width="8" height="28" rx="4"/><rect x="42" y="15" width="8" height="23" rx="4"/><path d="M15 31h35v6c0 11-7.5 19-18 19-7.5 0-12-4.5-14.5-9L9.5 37c-1.6-2.8 2-5.6 4.6-3.4L18 37z"/></g>`)},P2=i=>nh[i]||nh.smile,ih='<svg viewBox="0 0 48 58" aria-hidden="true"><path d="M17 4c2.6 0 4.6 2 4.6 4.6v15.6l1.7-.4c2.2-.5 4.4.8 5 3l.2.6 1.3-.3c2.2-.5 4.4.8 5 3l.2.8 1-.2c2.3-.4 4.5 1.1 4.9 3.4l1.3 8.6c.9 5.7-2.5 11.2-8 12.9l-6.1 1.8c-4.7 1.4-9.8-.5-12.4-4.7L4.2 38.4c-1.3-2.1-.8-4.8 1.2-6.2 2-1.3 4.6-1 6.1.8l1 1.2V8.6C12.5 6 14.5 4 17 4z" fill="#fff" stroke="#13261b" stroke-width="3" stroke-linejoin="round"/><path d="M21.6 24.2v7M29.5 27.4v5.4M36.7 31.1v4.6" stroke="#13261b" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".45"/></svg>';function L2(i,t){if(i==null)return"";if(i===1)return"m-ace";const e=i-t;return e<=-2?"m-eagle":e===-1?"m-birdie":e===0?"m-par":e===1?"m-bogey":"m-double"}function I2(i,{events:t,progress:e,holes:n=[],rounds:s=[],rig:r=null,play:o=null}={}){const a=(L,P)=>t&&t.emit(L,P),c=(L,P)=>t&&t.on(L,P),l=new Map;{let L=0;for(const P of s)l.set(P.id,L),L+=P.holes.length}const u=L=>{for(const P of s){const k=l.get(P.id);if(L>=k&&L<k+P.holes.length)return P}return s[0]},f=L=>n[L]||{name:"Hole "+(L+1),par:3,id:"h"+L};let d=null,h=!1,g=!1,v=0,m=null,p=null,x=!1,_=!1,M=0,S={index:-1,best:null,stars:0,total:0},E=!!(e&&e.muted),C=e&&e.skin||"classic",w=!1;const b=new Set,y=(L,P)=>{const k=setTimeout(()=>{b.delete(k),L()},P);return b.add(k),k},R=L=>{L&&(clearTimeout(L),b.delete(L))},N=Pt("div.scr");i.appendChild(N);function O(L,P,k,z,gt){return Pt("button.btn"+L,{type:"button","aria-label":gt||null,onclick:St=>{Date.now()-v<eh||z(St)}},[k?Pt("span.ico",{html:k}):null,P?Pt("span.lbl",null,P):null])}function Y(L,P=""){const k=Pt("div.stars"+P,{role:"img","aria-label":L+(L===1?" star":" stars")});for(let z=0;z<3;z++)k.appendChild(Pt("span.st"+(z<L?".on":""),{html:Ue.star,style:{"--k":String(z)}}));return k}const ut=[];function ot(L){const P=O(L?".b-white.b-sound":".b-round.b-white.b-sound","","",()=>J(!E));return ut.push({b:P,withLabel:L}),xt(),P}function xt(){for(const{b:L,withLabel:P}of ut){for(;L.firstChild;)L.removeChild(L.firstChild);L.appendChild(Pt("span.ico",{html:E?Ue.soundOff:Ue.soundOn})),P&&L.appendChild(Pt("span.lbl",null,E?"Sound off":"Sound on")),L.setAttribute("aria-label",E?"Turn sound on":"Turn sound off"),L.setAttribute("aria-pressed",E?"false":"true"),L.classList.toggle("off",E)}}function J(L){E=!!L,xt(),a("ui:sound",{muted:E})}function X(L,P,k){const z=typeof L=="object"?L:s.find(ne=>ne.id===L)||s[0],gt=l.get(z.id)||0,St=Pt("div.strip",{role:"table","aria-label":z.name+" scorecard"}),Ct=Pt("div.srow.s-hole",{role:"row"},Pt("span.sh",{role:"rowheader"},"Hole")),Dt=Pt("div.srow.s-par",{role:"row"},Pt("span.sh",{role:"rowheader"},"Par")),Ot=Pt("div.srow.s-you",{role:"row"},Pt("span.sh",{role:"rowheader"},"You"));let Ht=0,Ut=0,te=0;z.holes.forEach((ne,oe)=>{const ie=gt+oe,jt=P(ie),xe=ie===k?".hi":"";Ct.appendChild(Pt("span.sc"+xe,{role:"cell",style:{"--k":String(oe)}},String(ie+1))),Dt.appendChild(Pt("span.sc"+xe,{role:"cell"},String(ne.par)));const Vt=L2(jt,ne.par);Ot.appendChild(Pt("span.sc.s-score"+xe,{role:"cell",style:{"--k":String(oe)}},jt==null?Pt("i.dash",null,"–"):Pt("b.mk"+(Vt?"."+Vt:""),null,String(jt)))),jt!=null&&(Ht+=jt,Ut+=ne.par,te++)}),Ct.appendChild(Pt("span.sc.s-tot",{role:"cell"},"Tot")),Dt.appendChild(Pt("span.sc.s-tot",{role:"cell"},String(z.holes.reduce((ne,oe)=>ne+oe.par,0))));const Mt=te?Ec(Ht,Ut):"–";return Ot.appendChild(Pt("span.sc.s-tot.s-rel"+(te&&Ht<Ut?".under":""),{role:"cell",title:te?Ht+" strokes":""},Mt)),St.appendChild(Ct),St.appendChild(Dt),St.appendChild(Ot),St}const D={};function $(L,P,{primary:k,back:z}={}){const gt=Pt("div.panel.p-"+L+(P?"."+P:""),{role:"dialog","aria-modal":"true","aria-hidden":"true"});return N.appendChild(gt),D[L]={el:gt,primary:k,back:z},gt}function q(L,P){const k=D[L];if(!k)return;for(const gt in D){const St=gt===L;D[gt].el.classList.toggle("open",St),D[gt].el.setAttribute("aria-hidden",St?"false":"true")}d=L,v=Date.now();const z=typeof document<"u"?document.activeElement:null;z&&z.blur&&N.contains&&N.contains(z)&&z.blur(),k.render&&k.render(P),V(!0)}function at(){for(const L in D)D[L].el.classList.remove("open"),D[L].el.setAttribute("aria-hidden","true");d=null,V(!1)}function V(L){L&&(se(),he()),L!==h&&(h=L,i.classList&&i.classList.toggle("ui-menu",L),a("ui:menu",{open:L}),L||I())}const j=Pt("span.t-stars-n",null,"0"),mt=Pt("span.sub",null,""),H=O(".b-yellow.b-big.t-go","",Ue.play,()=>{const L=e?e.nextIndex():0;at(),L===m&&!x||a("ui:play",{index:L})}),Q=Pt("span.lbl2",null,[Pt("span.main",null,"Continue"),mt]);H.appendChild(Q),$("title","",{primary:()=>H.click()}).appendChild(Pt("div.t-wrap",null,[Pt("div.logo",{role:"heading","aria-level":"1","aria-label":"8 Ball Golf"},[Pt("span.logo-ball",{"aria-hidden":"true"},Pt("span.logo-disc",null,"8")),Pt("span.logo-word",{"aria-hidden":"true"},[Pt("span.lw1",null,"BALL"),Pt("span.lw2",null,"GOLF")])]),Pt("p.tagline",null,"Hit the white. Sink the 8."),Pt("div.t-stars",{"aria-label":"Stars collected"},[Pt("span.ico",{html:Ue.star}),j,Pt("span.of",null," / "+n.length*3)]),H,Pt("div.t-row",null,[O(".b-blue","Holes",Ue.grid,()=>Gt("title")),O(".b-blue","Balls",Ue.ball,()=>T("title")),ot(!1)])])),D.title.render=()=>{const L=e?e.nextIndex():0,P=f(L);mt.textContent="Hole "+(L+1)+" · "+P.name,j.textContent=String(e?e.totalStars():0)};let At="title",Nt=s.length?s[0].id:1;const et=Pt("div.tabs",{role:"tablist"}),_t=Pt("div.tiles"),B=Pt("p.p-note",null,"");$("holes","card-panel",{back:()=>yt(At)}).appendChild(Pt("div.card.paper.c-holes",null,[Pt("div.c-head",null,[O(".b-round.b-back","",Ue.back,()=>yt(At),"Back"),Pt("h2",null,"Holes"),Pt("span.c-head-pad")]),et,_t,B]));function Gt(L){At=L;const P=e?e.nextIndex():0;Nt=u(L==="pause"&&m!==null?m:P).id,q("holes")}D.holes.render=()=>{for(;et.firstChild;)et.removeChild(et.firstChild);for(const z of s){const gt=l.get(z.id),St=!e||e.isUnlocked(gt),Ct=e&&e.roundStars?e.roundStars(z.id):0,Dt=O(".tab"+(z.id===Nt?".sel":"")+(St?"":".locked"),"",St?null:Ue.lock,()=>{if(!St){ft(Dt),B.textContent="Finish hole "+gt+" to open "+z.name+"!";return}Nt=z.id,D.holes.render()});Dt.setAttribute("role","tab"),Dt.setAttribute("aria-selected",z.id===Nt?"true":"false"),Dt.appendChild(Pt("span.tab-name",null,z.name)),St&&Dt.appendChild(Pt("span.tab-stars",null,[Pt("span.ico",{html:Ue.star}),Ct+"/"+z.holes.length*3])),et.appendChild(Dt)}for(;_t.firstChild;)_t.removeChild(_t.firstChild);const L=s.find(z=>z.id===Nt)||s[0];if(!L)return;const P=l.get(L.id),k=e?e.nextIndex():0;_t.setAttribute("data-round",String(L.id)),L.holes.forEach((z,gt)=>{const St=P+gt,Ct=f(St),Dt=!e||e.isUnlocked(St),Ot=e?e.best(St):null,Ht=O(".tile"+(Dt?"":".locked")+(St===k&&Dt?".next":"")+(St===m?".cur":""),"",null,()=>{if(!Dt){ft(Ht),B.textContent="Finish hole "+St+" first!";return}g=!1,at(),a("ui:play",{index:St})},Dt?"Hole "+(St+1)+", "+Ct.name:"Hole "+(St+1)+", locked");Ht.appendChild(Pt("span.tile-num",null,String(St+1))),Ht.appendChild(Pt("span.tile-name",null,Ct.name)),Dt?(Ht.appendChild(Pt("span.tile-par",null,"Par "+Ct.par+(Ot!==null?" · Best "+Ot:""))),Ht.appendChild(Y(e?e.stars(St):0,".mini"))):Ht.appendChild(Pt("span.tile-lock",{html:Ue.lock})),_t.appendChild(Ht)}),B.textContent=""};let Jt="title";const Bt=Pt("div.skins"),Kt=Pt("p.p-note",null,"");$("skins","card-panel",{back:()=>yt(Jt)}).appendChild(Pt("div.card.paper.c-skins",null,[Pt("div.c-head",null,[O(".b-round.b-back","",Ue.back,()=>yt(Jt),"Back"),Pt("h2",null,"Balls"),Pt("span.c-head-pad")]),Bt,Kt]));function T(L){Jt=L,q("skins")}function A(){if(!e)return"";const L=e.totalStars(),P=e.skins().find(k=>!k.unlocked);return P?P.need-L+" more ★ for the "+P.name+" ball!":"You unlocked every ball!"}D.skins.render=()=>{for(;Bt.firstChild;)Bt.removeChild(Bt.firstChild);const L=e?e.skins():[{id:"classic",name:"Classic",need:0,unlocked:!0}];for(const P of L){const k=O(".skin"+(P.unlocked?"":".locked")+(P.id===C?".sel":""),"",null,()=>{if(!P.unlocked){ft(k),Kt.textContent="Collect "+P.need+" ★ to unlock "+P.name+"!";return}C=P.id,a("ui:skin",{id:P.id}),D.skins.render()},P.name+(P.unlocked?"":", locked"));k.setAttribute("aria-pressed",P.id===C?"true":"false"),k.appendChild(Pt("span.skin-ball.sk-"+P.id,{"aria-hidden":"true"})),k.appendChild(Pt("span.skin-name",null,P.name)),k.appendChild(P.unlocked?Pt("span.skin-need.ok",null,P.id===C?"Playing":"Tap to use"):Pt("span.skin-need",null,[Pt("span.ico",{html:Ue.star}),String(P.need)])),Bt.appendChild(k)}Kt.textContent=A()};const Z=$("card","card-panel",{primary:()=>Wt()}),ct=Pt("div.card.paper.c-score");Z.appendChild(ct);let bt=null;function wt(){ct.classList.add("skip")}function Wt(){if(!ct.classList.contains("skip")&&Date.now()-v<T2){wt();return}bt&&bt()}ct.addEventListener("pointerdown",wt),D.card.render=L=>{const{index:P,strokes:k,par:z,picked:gt,penalties:St=0,stars:Ct=0}=L,Dt=L.term||wc(k,z,gt),Ot=Dt.key,Ht=S.index===P?S.best:null,Ut=S.index===P?S.stars:0,te=S.index===P?S.total:e?e.totalStars():0,Mt=Ht!==null&&k<Ht,ne=Math.max(0,Ct-Ut),oe=e?e.skins().filter(ze=>ze.need>te&&ze.need<=te+ne):[],ie=(()=>{const ze=u(P);return P===l.get(ze.id)+ze.holes.length-1})(),jt=L.level||f(P);for(;ct.firstChild;)ct.removeChild(ct.firstChild);ct.className="card paper c-score t-"+Ot,ct.appendChild(Pt("div.sc-hole",null,"Hole "+(P+1)+" · "+(jt.name||""))),ct.appendChild(Pt("div.sc-term",null,[Pt("span.term-ico",{html:P2(Ot)}),Pt("div.term-txt",null,[Pt("b.term",null,Dt.label),Pt("span.term-sub",null,A2[Ot]||"")])]));const xe=gt?"Picked up · Par "+z:k+(k===1?" stroke":" strokes")+" · Par "+z;ct.appendChild(Pt("div.sc-line",null,[xe,St>0?Pt("span.pen",null,"+"+St+" penalty"):null])),ct.appendChild(Y(Ct,".big"));const Vt=Pt("div.sc-extras");Mt&&Vt.appendChild(Pt("span.badge.b-best",null,"New best!"));for(const ze of oe){const be=O(".b-mini","Use it",null,()=>{C=ze.id,a("ui:skin",{id:ze.id}),be.classList.add("done"),be.lastChild.textContent="Playing!"});Vt.appendChild(Pt("span.badge.b-skin",null,[Pt("span.skin-ball.sk-"+ze.id,{"aria-hidden":"true"}),"New ball: "+ze.name+"!",be]))}Vt.childNodes.length&&ct.appendChild(Vt);const Se=ze=>ze===P?Ht===null?k:Math.min(Ht,k):e?e.best(ze):null;ct.appendChild(X(u(P),Se,P));const Oe=w&&!gt;Oe&&ct.appendChild(Pt("p.sc-hint",null,"Hole in! Next hole →"));const Pe=ie?"Round score":"Next hole";bt=()=>{w=!1,at(),a("ui:next",{})},ct.appendChild(Pt("div.btns",null,[O(".b-blue.sc-retry","Retry",Ue.retry,()=>{w=!1,at(),a("ui:retry",{})}),O(".b-yellow.b-big.sc-next"+(Oe?".pulse":""),Pe,Ue.play,()=>bt())]))};const Ft=$("round","card-panel",{primary:()=>W()}),zt=Pt("div.card.chalk.c-round");Ft.appendChild(zt);let W=()=>{};zt.addEventListener("pointerdown",()=>zt.classList.add("skip")),D.round.render=L=>{const P=s.find(Ut=>Ut.id===L.round)||s[0],k=new Map((L.holes||[]).map(Ut=>[Ut.index,Ut.strokes])),z=L.total||0,gt=L.par||P.holes.reduce((Ut,te)=>Ut+te.par,0),St=L.rel||Ec(z,gt),Ct=l.get(P.id)||0;let Dt=0;for(let Ut=0;Ut<P.holes.length;Ut++)Dt+=e?e.stars(Ct+Ut):0;const Ot=P===s[s.length-1];for(;zt.firstChild;)zt.removeChild(zt.firstChild);zt.className="card chalk c-round",zt.appendChild(Pt("h2.r-title",null,(L.name||P.name)+" done!")),zt.appendChild(Pt("div.r-score",null,[Pt("div.r-rel"+(z<gt?".under":z===gt?".even":""),null,[Pt("span.r-cap",null,"Best round"),Pt("b",null,St)]),Pt("div.r-meta",null,[Pt("span",null,"Total "+z+" · Par "+gt),Pt("span.r-stars",null,[Pt("span.ico",{html:Ue.star}),Dt+" / "+P.holes.length*3])])])),zt.appendChild(X(P,Ut=>k.has(Ut)?k.get(Ut):e?e.best(Ut):null,-1));const Ht=Ot?"You played all "+n.length+" holes! Go back for more stars.":s[s.indexOf(P)+1].name+" is open! Curves, cushions and water.";zt.appendChild(Pt("p.r-hook",null,Ht)),zt.appendChild(Pt("p.r-hook.r-skin",null,A())),W=()=>{at(),a("ui:next",{})},zt.appendChild(Pt("div.btns",null,[O(".b-yellow.b-big.r-next",Ot?"Continue":"Play "+s[s.indexOf(P)+1].name,Ue.play,()=>W())]))},$("pause","card-panel",{primary:()=>it(),back:()=>it()}).appendChild(Pt("div.card.paper.c-pause",null,[Pt("h2",null,"Paused"),O(".b-yellow.b-big.ps-resume","Resume",Ue.play,()=>it()),Pt("div.ps-grid",null,[O(".b-blue.ps-retry","Retry hole",Ue.retry,()=>{g=!1,at(),a("ui:retry",{})}),O(".b-blue.ps-holes","Holes",Ue.grid,()=>Gt("pause")),O(".b-blue.ps-skins","Balls",Ue.ball,()=>T("pause")),ot(!0)])]));function it(){!g&&d!=="pause"||(g=!1,at(),a("ui:resume",{}))}function yt(L){L==="pause"&&g?q("pause"):L==="title"?q("title"):at()}function ft(L){L.classList.remove("nudge"),L.offsetWidth,L.classList.add("nudge")}const dt=Pt("span.tip-txt",null,""),U=Pt("div.tip",{role:"status","aria-live":"polite",hidden:!0},[Pt("span.tip-ico",{"aria-hidden":"true"},Pt("span",null,"8")),dt]),rt=Pt("span.coach-txt",null,""),Et=Pt("span.coach-gesture",{html:ih,"aria-hidden":"true"}),F=Pt("button.coach-skip",{type:"button",onclick:()=>We()},"Skip"),st=Pt("div.coach",{role:"status","aria-live":"polite",hidden:!0},[Et,rt,F]),ht=Pt("div.hand",{html:ih,"aria-hidden":"true",hidden:!0}),vt=Pt("b.toast-main",null,""),Tt=Pt("span.toast-sub",null,""),K=Pt("div.toast",{role:"status","aria-live":"polite",hidden:!0},[vt,Tt]),pt=Pt("div.celebrate",{"aria-hidden":"true",hidden:!0});N.appendChild(U),N.appendChild(st),N.appendChild(ht),N.appendChild(K),N.appendChild(pt);let Rt=null,It=0;function Lt(){R(It),!(!Rt||d!==null)&&(It=y(()=>{if(d!==null)return;const L=Rt;Rt=null,!(!L||L.index!==m||x)&&(dt.textContent=L.text,U.hidden=!1,Qt(U,"go"),e&&e.markTip(L.id),It=y(qt,b2))},S2))}function qt(){R(It),It=0,U.hidden=!0,U.classList.remove("go")}let Yt=0;function le(L,P="",k=""){h||(vt.textContent=L,Tt.textContent=P,Tt.hidden=!P,K.className="toast"+(k?" k-"+k:""),K.hidden=!1,Qt(K,"go"),R(Yt),Yt=y(se,w2))}function se(){R(Yt),Yt=0,K.hidden=!0,K.classList.remove("go")}let ae=0;function pe(L){h||(pt.textContent=C2[L]||"In the hole!",pt.className="celebrate t-"+L,pt.hidden=!1,Qt(pt,"go"),R(ae),ae=y(he,E2))}function he(){R(ae),ae=0,pt.hidden=!0,pt.classList.remove("go")}function Qt(L,P){L.classList.remove(P),L.offsetWidth,L.classList.add(P)}const ge=[{text:"Sink the 8 in the hole!",hand:"",ms:2600},{text:"Move the white ball anywhere in the circle.",hand:"drag",ms:4200},{text:"This line shows where the 8 will roll. Drag to aim.",hand:"aim",ms:4600},{text:"Pull back for power… let go to shoot!",hand:"pull",ms:0}],re={on:!1,step:-1,timer:0,fired:!1,everyShown:!1,raf:0};function Te(){re.on=!0,re.fired=!1,re.everyShown=!1,en(0)}function en(L){R(re.timer),re.step=L;const P=ge[L];if(!P){nn();return}Fe(P.text,P.hand),P.ms&&(re.timer=y(()=>{re.on&&re.step===L&&en(L+1)},P.ms))}function Fe(L,P){rt.textContent=L,st.hidden=!1,st.setAttribute("data-hand",P||"none"),Et.hidden=!P||P!=="pull"&&!!(r&&o),Qt(st,"go"),hn(P)}function nn(){R(re.timer),st.hidden=!0,hn("")}function We(){re.on=!1,re.step=-1,nn()}function hn(L){re.raf&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(re.raf),re.raf=0;const P=(L==="drag"||L==="aim")&&r&&o&&typeof requestAnimationFrame=="function";if(L!=="pull"&&!P){ht.hidden=!0,ht.removeAttribute("data-mode");return}if(ht.setAttribute("data-mode",L),ht.hidden=!1,P){const k=()=>{re.raf=requestAnimationFrame(k);try{const z=o.intent,gt=o.level;if(!z||!gt)return;const St=(gt.heightAt?gt.heightAt(z.x,z.z):0)+.5,Ct=r.groundToScreen(z.x,St,z.z);Ct&&Ct.onScreen!==!1&&(ht.style.transform="translate("+Math.round(Ct.x)+"px,"+Math.round(Ct.y)+"px)")}catch{}};k()}else ht.style.transform=""}function I(){Lt()}return c("game:hole",({index:L,level:P,first:k}={})=>{m=L,p=P||f(L),x=!1,M=0,S={index:L,best:e?e.best(L):null,stars:e?e.stars(L):0,total:e?e.totalStars():0},qt(),se(),he(),Rt=null,re.on&&We();const z=p&&(p.id||p.hole&&p.hole.id);w=!!k,k?(e&&e.markTip(z),Te()):p&&p.tip&&e&&!e.seenTip(z)&&(Rt={index:L,id:z,text:p.tip},Lt())}),c("shot:fire",({strokes:L}={})=>{M=L|0,!U.hidden&&It&&(R(It),It=y(qt,900)),re.on&&(re.fired=!0,re.step=99,nn())}),c("shot:end",({outcome:L,picked:P,penalty:k}={})=>{if(P&&le("Picked up","Try again for a star!","soft"),re.on&&L!=="holed"&&!P&&!re.everyShown){re.everyShown=!0;const z=p?p.par:2;Fe("Every shot counts. Par "+z+" = in "+z+" shots is great!",""),re.timer=y(()=>{re.on&&nn()},4500)}}),c("ball:hop",()=>le("Too fast!","Softer next time","warn")),c("ball:hazard",({kind:L}={})=>{L==="water"?le("Splash! +1","Back to where you were","water"):le("Out of bounds! +1","Back to where you were","warn")}),c("ball:whiff",()=>le("Missed the 8!","Aim the white at the 8","soft")),c("ball:holed",()=>{re.on&&We();const L=p?p.par:3;pe(wc(Math.max(1,M||1),L,!1).key)}),c("hole:done",(L={})=>{x=!0,qt(),Rt=null,re.on&&We(),g=!1,q("card",L)}),c("game:round",(L={})=>q("round",L)),c("ui:pause",()=>{if(d===null&&!_){g=!0,q("pause");return}g||Promise.resolve().then(()=>a("ui:resume",{}))}),c("ui:sound",({muted:L}={})=>{!!L!==E&&(E=!!L,xt())}),c("ui:skin",({id:L}={})=>{L&&(C=L)}),c("ad:start",()=>{_=!0,se(),he()}),c("ad:end",()=>{_=!1}),typeof window<"u"&&window.addEventListener&&window.addEventListener("keydown",L=>{if(L.repeat)return;const P=L.code;if(P==="KeyP"||P==="Escape"){if(d==="pause"){it(),L.preventDefault();return}if(d&&D[d].back){D[d].back(),L.preventDefault();return}d===null&&m!==null&&!x&&!_&&(a("ui:pause",{}),L.preventDefault());return}if(d&&(P==="Enter"||P==="NumpadEnter"||P==="Space")){const k=L.target;if(k&&k.tagName==="BUTTON"||(L.preventDefault(),Date.now()-v<eh))return;const z=D[d];z.primary&&z.primary()}}),{el:N,showTitle(){g=!1,q("title")},hideAll(){const L=g;g=!1,d!==null&&at(),L&&a("ui:resume",{})},isOpen(){return d!==null},get current(){return d}}}function sh(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const uc=i=>440*Math.pow(2,(i-69)/12),_n=(i,t)=>typeof i=="number"&&Number.isFinite(i)?i:t,rh=1e-4;function Md(i,t,e){const n=2*Math.PI*Math.min(i,e*.45)/e,s=Math.sin(n)/(2*t),r=1+s;return[s/r,0,-s/r,-2*Math.cos(n)/r,(1-s)/r]}function yd(i,t,e,n,s,r,o,a){const[c,l,u,f,d]=o;let h=0,g=0,v=0,m=0;const p=Math.min(i.length,t+e);for(let x=t,_=0;x<p;x++,_++){const M=(_<n?_/n:1)*Math.exp(-_/s),S=(a()*2-1)*M,E=c*S+l*h+u*g-f*v-d*m;g=h,h=S,m=v,v=E,i[x]+=E*r}}function Fl(i,t){let e=0;for(let n=0;n<i.length;n++)e=Math.max(e,Math.abs(i[n]));if(e>0)for(let n=0;n<i.length;n++)i[n]*=t/e}function D2(i,t,e){for(let s=0;s<16;s++){const r=Math.pow(s/16,1.6)*.3+e()*.02,o=Math.floor(t*(.012+e()*.02)),a=Math.pow(1-r/.38,1.2)*(.5+.5*e());yd(i,Math.floor(r*t),o,Math.floor(t*.0015),t*(.004+e()*.004),a,Md(2400+e()*3800,1.4+e()*1.6,t),e)}Fl(i,.9)}function oh(i,t,e,n,s,r){for(let c=0;c<n;c++){const l=Md(900+e()*1500,1.1+e()*1.2,t),u=3.5+e()*2.5,f=.45+.55*e(),d=s+e()*(r-s);for(let h=e()*.2;h<d;h+=1/u*(.82+.36*e())){const g=h>d-.5?(d-h)/.5:1;yd(i,Math.floor(h*t),Math.floor(t*.03),Math.floor(t*6e-4),t*(.004+e()*.005),f*(.6+.4*g),l,e)}}const o=Math.floor(t*.023),a=Math.floor(t*.037);for(let c=i.length-1;c>=a;c--)i[c]+=.22*i[c-o]+.14*i[c-a];Fl(i,.85)}const ah={white:[1,(i,t,e)=>{for(let n=0;n<i.length;n++)i[n]=e()*2-1}],brown:[1,(i,t,e)=>{let n=0;for(let s=0;s<i.length;s++)n=(n+.02*(e()*2-1))*.998,i[s]=n;Fl(i,.9)}],rustle:[.38,D2],applauseLight:[1.8,(i,t,e)=>oh(i,t,e,7,.9,1.5)],applauseBig:[3.4,(i,t,e)=>oh(i,t,e,22,1.9,3.1)]};function z2({getWindow:i,maxVoices:t=14,hardVoices:e=22}={}){const n=sh(571921),s=[],r=new Map;let o=null,a=null,c=null,l=null,u=!1,f=!0,d=0,h=0;function g(){if(u)return!1;if(!o){const b=i(),y=b&&(b.AudioContext||b.webkitAudioContext);if(!y)return u=!0,!1;try{o=new y,a=o.createGain(),a.gain.value=.8,c=o.createDynamicsCompressor(),c.threshold.value=-12,c.knee.value=10,c.ratio.value=3.5,c.attack.value=.002,c.release.value=.2,l=o.createGain(),l.gain.value=f?1:0,a.connect(c),c.connect(l),l.connect(o.destination);const R=o.createBufferSource();R.buffer=o.createBuffer(1,1,o.sampleRate),R.connect(o.destination),R.onended=()=>{try{R.disconnect()}catch{}},R.start(0)}catch(R){return console.warn("[sfx] Web Audio unavailable",R),u=!0,o=null,!1}}if(o.state!=="running"&&o.state!=="closed")try{const b=o.resume();b&&b.catch&&b.catch(()=>{})}catch{}return!0}const v=()=>!!o&&o.state==="running",m=()=>o?o.currentTime:0;function p(b){if(f=!!b,!l)return;const y=o.currentTime,R=l.gain;try{R.cancelScheduledValues(y),R.setValueAtTime(R.value,y),R.setTargetAtTime(f?1:0,y,.012)}catch{R.value=f?1:0}}function x(b){let y=r.get(b);if(y||!o||!ah[b])return y||null;const[R,N]=ah[b],O=o.sampleRate;return y=o.createBuffer(1,Math.max(1,Math.floor(R*O)),O),N(y.getChannelData(0),O,sh(571921^b.length*7919^b.charCodeAt(0))),r.set(b,y),y}function _(){x("white"),x("brown"),x("rustle");const b=i(),y=(R,N)=>{try{(b&&b.setTimeout?b.setTimeout.bind(b):setTimeout)(R,N)}catch{}};y(()=>x("applauseLight"),700),y(()=>x("applauseBig"),1400)}function M(b){if(b.done)return;b.done=!0;for(const R of b.nodes){R.onended!==void 0&&(R.onended=null);try{R.disconnect()}catch{}}b.nodes.length=0;const y=s.indexOf(b);y>=0&&s.splice(y,1),h++}function S(b){const y=o.currentTime;for(const R of b.nodes)if(R.stop)try{R.stop(y)}catch{}M(b)}function E(){const b=o.currentTime;for(let y=s.length-1;y>=0;y--)s[y].end<b-1&&S(s[y])}function C(b=1,y=1){if(!v()||!f)return null;if(E(),s.length>=t){if(b<2)return null;if(s.length>=e){let N=null;for(const O of s)(!N||O.prio<N.prio||O.prio===N.prio&&O.t0<N.t0)&&(N=O);if(!N||N.prio>b)return null;S(N)}}const R=w(b,y);return s.push(R),d++,R}function w(b,y){const R=o.currentTime+.002,N=o.createGain();N.gain.value=y,N.connect(a);const O={prio:b,t0:R,end:R,done:!1,pending:0,nodes:[N],out:N},Y=()=>{O.pending--,O.pending<=0&&M(O)},ut=X=>(O.nodes.push(X),X),ot=(X,D,$)=>(ut(X),O.pending++,X.onended=Y,O.end=Math.max(O.end,$),X),xt=(X,D,$,q,at,V)=>(q=Math.max(rh*2,q),X.setValueAtTime(0,D),X.linearRampToValueAtTime(q,D+$),at>0&&X.setValueAtTime(q,D+$+at),X.exponentialRampToValueAtTime(rh,D+$+at+V),D+$+at+V),J=(X,D,$,q)=>{if(X.setValueAtTime(D,q),$)for(const[at,V]of $)X.exponentialRampToValueAtTime(Math.max(1,at),q+Math.max(.001,V))};return O.filter=(X,D,$=.7,q=N,at=null,V=R)=>{const j=ut(o.createBiquadFilter());return j.type=X,j.Q.value=$,J(j.frequency,D,at,V),j.connect(q),j},O.tone=X=>{const D=R+_n(X.t,0),$=_n(X.a,.002),q=_n(X.hold,0),at=_n(X.d,.1),V=o.createOscillator();V.type=X.type||"sine",J(V.frequency,Math.max(1,_n(X.f,440)),X.to,D),X.detune&&(V.detune.value=X.detune);const j=ut(o.createGain()),mt=xt(j.gain,D,$,_n(X.peak,.2),q,at)+.02;if(V.connect(j),j.connect(X.dest||N),X.vib){const[H,Q,lt=0]=X.vib,At=o.createOscillator(),Nt=ut(o.createGain());At.frequency.value=H,Nt.gain.setValueAtTime(0,D),Nt.gain.linearRampToValueAtTime(Q,D+lt+.08),At.connect(Nt),Nt.connect(V.frequency),ot(At,D,mt),At.start(D),At.stop(mt)}return ot(V,D,mt),V.start(D),V.stop(mt),V},O.noise=X=>{const D=x(X.buf||"white");if(!D)return null;const $=R+_n(X.t,0),q=_n(X.a,.001),at=_n(X.hold,0),V=_n(X.d,.05),j=o.createBufferSource();j.buffer=D;const mt=_n(X.rate,1);mt!==1&&(j.playbackRate.value=mt);const H=ut(o.createGain()),Q=xt(H.gain,$,q,_n(X.peak,.2),at,V)+.02;H.connect(X.dest||N),X.filter?j.connect(O.filter(X.filter.type,X.filter.f,_n(X.filter.q,.7),H,X.filter.to,$)):j.connect(H);const lt=D.duration||D.length/D.sampleRate,At=(Q-$)*mt,Nt=X.from0?0:Math.max(0,(lt-At)*n());return ot(j,$,Q),X.from0?j.start($):j.start($,Nt,Math.min(lt-Nt,At+.01)),j.stop(Q),j},O}return{start:g,ready:v,now:m,rng:n,setOutput:p,voice:C,buffer:x,prewarm:_,get ctx(){return o},stats:()=>({active:s.length,created:d,released:h})}}const dr=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,fc=i=>i<0?0:i>1?1:i,U2=["pointerdown","pointerup","touchend","mousedown","click","keydown"],N2=["ui:play","ui:next","ui:retry","ui:pause","ui:resume","ui:overview","ui:skin"];function F2({events:i,getWindow:t}={}){const e=t||(()=>typeof window<"u"?window:null),n=z2({getWindow:e}),s=n.rng;let r=!1,o=!1,a=!1,c=!1;function l(){const H=e(),Q=H&&H.navigator&&H.navigator.userActivation;Q&&Q.hasBeenActive===!1||f()}function u(H){const Q=e();if(!(!Q||!Q.addEventListener||H===a)){a=H;for(const lt of U2)H?Q.addEventListener(lt,l,{capture:!0,passive:!0}):Q.removeEventListener(lt,l,{capture:!0,passive:!0})}}function f(){if(!n.start()){u(!1);return}const H=n.ctx;if(!c){c=!0,n.setOutput(!r&&!o),n.prewarm();try{H.onstatechange=()=>{H.state==="running"?u(!1):H.state!=="closed"&&u(!0)}}catch{}}H.state==="running"&&u(!1)}u(!0);function d(){n.setOutput(!r&&!o)}const h=new Map;function g(H,Q){if(r||o||!n.ready())return!1;const lt=n.now(),At=h.get(H);return At!==void 0&&lt-At<Q&&lt>=At?!1:(h.set(H,lt),!0)}const v=H=>1+(s()-.5)*2*H;function m(H,Q,lt,At,Nt){const et=uc(lt);H.tone({t:Q,f:et,a:.003,d:At,peak:Nt}),H.tone({t:Q,f:et*3.93,a:.001,d:At*.16,peak:Nt*.28}),H.noise({t:Q,filter:{type:"bandpass",f:Math.min(et*2.5,9e3),q:1.5},a:5e-4,d:.008,peak:Nt*.22})}function p(H,Q,lt,At,Nt){const et=uc(lt),_t=[[1,1,1],[2.76,.42,.45],[5.4,.16,.22]];for(const[B,nt,Gt]of _t)et*B<14e3&&H.tone({t:Q,f:et*B,a:.001,d:At*Gt,peak:Nt*nt})}function x(H,Q,lt,At,Nt){const et=uc(lt),_t=H.filter("lowpass",500,1.2,H.out,[[et*5+1200,.045],[et*3+700,.25]],H.t0+Q),B=[5.6,et*.007,.14];H.tone({t:Q,type:"sawtooth",f:et,detune:-7,a:.025,hold:At,d:.16,peak:Nt,dest:_t,vib:B}),H.tone({t:Q,type:"sawtooth",f:et,detune:7,a:.025,hold:At,d:.16,peak:Nt*.8,dest:_t})}function _(H,Q){const lt=n.voice(3,Q?.5:.36);if(!lt)return;const At=Q?3.4:1.8;lt.noise({t:H,buf:Q?"applauseBig":"applauseLight",from0:!0,a:.06,hold:At-.5,d:.45,peak:1,filter:{type:"highpass",f:260,q:.6}})}function M(H){const Q=n.voice(1);if(!Q)return;const lt=.3+.55*fc(H),At=v(.03);Q.tone({f:1250*At,to:[[760*At,.03]],a:8e-4,d:.035,peak:.34*lt}),Q.noise({filter:{type:"bandpass",f:2300*At,q:1.1},a:5e-4,d:.014,peak:.28*lt}),Q.tone({f:210,to:[[150,.05]],a:.002,d:.05,peak:.22*lt})}function S(H,Q=1){const lt=n.voice(2);if(!lt)return;const At=fc(dr(H)/10),Nt=(.22+.78*Math.pow(At,.6))*Q,et=v(.03),_t=lt.filter("lowpass",2600+1e4*At,.6);lt.noise({filter:{type:"highpass",f:1900*et,q:.7},a:4e-4,d:.011,peak:.9*Nt,dest:_t});const B=(1650+550*At)*et,nt=[[1,.55,.06],[1.505,.32,.04],[2.27,.2,.025],[3.08,.1,.016]];for(const[Gt,Jt,Bt]of nt)lt.tone({f:B*Gt,to:[[B*Gt*.985,Bt]],a:6e-4,d:Bt*(.85+.3*At),peak:Jt*Nt,dest:_t});lt.tone({f:640*et,to:[[430*et,.03]],a:.001,d:.03,peak:.22*Nt,dest:_t})}function E(H,Q,lt,At=1){const Nt=[[1,.5,.07],[2.31,.25,.04],[3.93,.1,.02]];for(const[et,_t,B]of Nt)H.tone({f:lt*et,to:[[lt*et*.97,B*At]],a:8e-4,d:B*At,peak:_t*Q});H.noise({filter:{type:"bandpass",f:lt*4.5,q:1.2},a:5e-4,d:.01,peak:.3*Q}),H.tone({f:140,to:[[105,.06]],a:.002,d:.06,peak:.22*Q})}function C({id:H,kind:Q,speed:lt}){const At=dr(lt);if(At<.3||!g("wall"+dr(H),.045))return;const Nt=fc(At/8),et=.15+.85*Math.pow(Nt,.7),_t=v(.04),B=n.voice(0);if(B)switch(Q){case"cushion":B.tone({f:150*_t,to:[[92*_t,.16]],a:.002,d:.16,peak:.55*et}),B.noise({buf:"brown",filter:{type:"lowpass",f:600,q:.7},a:.002,d:.07,peak:.5*et}),B.tone({type:"triangle",f:225*_t,to:[[300*_t,.05],[270*_t,.18]],a:.004,d:.17,peak:.13*et,vib:[16,8,0]}),B.noise({filter:{type:"bandpass",f:1400,q:.8},a:5e-4,d:.012,peak:.12*et});break;case"hedge":B.noise({buf:"rustle",from0:!0,rate:.85+.35*s(),a:.002,hold:.12,d:.2,peak:.55*(.4+.6*et)}),B.noise({buf:"brown",filter:{type:"lowpass",f:380,q:.7},a:.003,d:.07,peak:.35*et});break;case"bumper":{const nt=B.filter("lowpass",2400,.8);B.tone({type:"triangle",f:170*_t,to:[[430*_t,.045],[330*_t,.32]],vib:[24,26,0],a:.003,d:.34,peak:.36*(.35+.65*et),dest:nt}),B.tone({f:120,to:[[78,.08]],a:.002,d:.08,peak:.4*et}),B.noise({filter:{type:"bandpass",f:3e3,q:1.5},a:5e-4,d:.006,peak:.18*et});break}case"tree":E(B,et,300*_t,.75),B.noise({buf:"rustle",from0:!0,rate:1.1+.3*s(),a:.004,hold:.04,d:.15,peak:.22*et});break;case"lollipop":E(B,et*.9,720*_t,.7);break;case"post":E(B,et,520*_t);break;default:E(B,et,430*_t);break}}function w(){if(!g("hop",.12))return;const H=n.voice(2);if(!H)return;const Q=v(.03);H.noise({filter:{type:"bandpass",f:4200*Q,q:5},a:5e-4,d:.009,peak:.5}),H.tone({f:1850*Q,a:.001,d:.13,peak:.22}),H.tone({f:1850*2.76*Q,a:.001,d:.05,peak:.09}),H.noise({t:.075,filter:{type:"bandpass",f:3700*Q,q:4},a:5e-4,d:.008,peak:.2})}function b(H){if(!g("holed",.3))return;const Q=n.voice(2);if(!Q)return;const lt=dr(H,1),At=lt>2.5?4:lt>.9?3:2,Nt=[[0,3e3,.3],[.05,2650,.24],[.092,3250,.18],[.125,2500,.13]];for(let _t=0;_t<At;_t++){const[B,nt,Gt]=Nt[_t];Q.noise({t:B,filter:{type:"bandpass",f:nt*v(.04),q:3.5},a:5e-4,d:.016,peak:Gt})}const et=Nt[At-1][0]+.05;Q.tone({t:et,f:310,to:[[205,.22]],a:.002,d:.26,peak:.5}),Q.tone({t:et,f:640,to:[[470,.1]],a:.001,d:.11,peak:.13}),Q.noise({t:et,filter:{type:"bandpass",f:820,q:2.5},a:.001,d:.1,peak:.26}),Q.tone({t:et+.13,f:285,to:[[215,.11]],a:.002,d:.12,peak:.2}),Q.noise({t:et+.24,filter:{type:"bandpass",f:1900,q:3},a:5e-4,d:.01,peak:.08})}function y(H=1){const Q=n.voice(2,H);if(Q){Q.tone({f:260,to:[[720,.07]],a:.002,d:.09,peak:.35}),Q.noise({filter:{type:"lowpass",f:5200,q:.8,to:[[500,.45]]},a:.004,d:.5,peak:.5}),Q.noise({buf:"brown",filter:{type:"lowpass",f:420,q:.7},a:.004,d:.26,peak:.42});for(let lt=0;lt<4;lt++){const At=480+s()*520;Q.tone({t:.13+lt*.07+s()*.03,f:At,to:[[At*1.9,.045]],a:.002,d:.05,peak:.11})}for(let lt=0;lt<3;lt++)Q.noise({t:.2+s()*.3,filter:{type:"bandpass",f:4200+s()*2e3,q:3},a:5e-4,d:.012,peak:.09})}}function R(H=1){const Q=n.voice(2,H);Q&&(Q.noise({filter:{type:"bandpass",f:1900,q:1.2,to:[[340,.4]]},a:.12,d:.3,peak:.36}),Q.tone({f:900,to:[[260,.42]],a:.02,hold:.1,d:.32,peak:.08}),Q.tone({t:.44,f:112,to:[[56,.16]],a:.003,d:.17,peak:.5}),Q.noise({t:.44,buf:"brown",filter:{type:"lowpass",f:320,q:.7},a:.003,d:.1,peak:.36}))}function N(H){if(!g("whiff",.3))return;const Q=n.voice(1);if(Q){const lt=Q.filter("lowpass",1600,.7);Q.tone({type:"triangle",f:540,to:[[300,.3]],vib:[7,14,.05],a:.03,d:.3,peak:.22,dest:lt}),Q.tone({f:270,to:[[150,.3]],a:.03,d:.28,peak:.1})}H==="water"&&g("hazard",.3)?y(.45):H==="oob"&&g("hazard",.3)&&R(.45)}function O(){if(!g("drop",.2))return;const H=n.voice(1);H&&(H.tone({f:380,to:[[1e3,.035]],a:.001,d:.05,peak:.28}),H.noise({filter:{type:"bandpass",f:2500,q:1.5},a:5e-4,d:.006,peak:.14}),H.tone({t:.085,f:700,to:[[520,.03]],a:.001,d:.035,peak:.08}))}function Y(H){if(!g("ui",.06))return;const Q=n.voice(1);Q&&(Q.tone({f:1500,to:[[1e3,.03]],a:.001,d:.035,peak:.26}),Q.noise({filter:{type:"highpass",f:3e3,q:.7},a:5e-4,d:.004,peak:.1}),H&&Q.tone({t:.05,f:2e3,to:[[1500,.03]],a:.001,d:.04,peak:.2}))}const ut=72,ot=74,xt=76,J=79,X=69,D=67,$=84,q=88,at=91,V=96;function j(H){if(!g("jingle",.5))return;const Q=H==="ace"||H==="albatross"||H==="eagle",lt=n.voice(3,Q?.62:.7);if(lt)if(Q){const At=[[0,ut,.06],[.11,xt,.06],[.22,J,.06],[.34,$,.6]];for(const[et,_t,B]of At)x(lt,et,_t,B,.2),m(lt,et,_t,.35,.22);x(lt,.34,J,.6,.1),x(lt,.34,xt,.6,.08);const Nt=[$,86,q,at,93,V,98,100];for(let et=0;et<Nt.length;et++)p(lt,.48+et*.04,Nt[et],.5,.07);if(H!=="eagle"){for(const et of[$,q,at,V])p(lt,1,et,1.2,.08);m(lt,1,ut,.8,.18)}_(.3,!0)}else if(H==="birdie"){const At=[[0,ut],[.085,xt],[.17,J],[.255,$]];for(const[Nt,et]of At)m(lt,Nt,et,Nt>.2?.7:.3,.28);p(lt,.255,$,.9,.09),p(lt,.255,q,.9,.06),_(.28,!1)}else H==="par"?(p(lt,0,J,1,.2),m(lt,0,J,.3,.12),p(lt,.16,$,1.3,.22),m(lt,.16,$,.5,.13)):H==="picked"?(m(lt,0,ot,.35,.18),m(lt,.17,X,.55,.16)):(m(lt,0,xt,.3,.22),m(lt,.15,ot,.3,.2),m(lt,.3,D,.3,.16),m(lt,.45,ut,.75,.22),p(lt,.45,$,.6,.05))}if(i&&i.on){i.on("shot:fire",H=>{f(),g("shot",.05)&&M(dr(H&&H.power,.5))}),i.on("ball:contact",H=>{g("clack",.03)&&S(H&&H.speed)}),i.on("ball:ballhit",H=>{g("clack",.03)&&S(H&&H.speed,.7)}),i.on("ball:wall",H=>C(H||{})),i.on("ball:hop",()=>w()),i.on("ball:holed",H=>b(H&&H.speed)),i.on("ball:hazard",H=>{g("hazard",.3)&&(H&&H.kind==="water"?y(1):R(1))}),i.on("ball:whiff",H=>N(H&&H.reason)),i.on("ball:drop",()=>O()),i.on("hole:done",H=>j(H&&H.term&&H.term.key));for(const H of N2)i.on(H,()=>Y(H==="ui:play"||H==="ui:next"||H==="ui:retry"||H==="ui:resume"));i.on("ui:sound",H=>{mt.setMuted(!!(H&&H.muted)),Y(!0)}),i.on("audio:external",H=>mt.setExternalMute(!!(H&&H.muted)))}const mt={unlock:f,setMuted(H){r=!!H,d()},setExternalMute(H){o=!!H,d()},get muted(){return r},stats:()=>n.stats()};return mt}const as=typeof window<"u"&&window.__ebgBoot?window.__ebgBoot:null,Dr=({pct:i,label:t})=>as!==null?as.stage(i,t):void 0;as!==null&&as.codeReady&&as.codeReady();await Dr(Ns.course);await dh();Ad();const Ol=document.getElementById("stage"),Or=document.getElementById("ui");Object.assign(Ol.style,{position:"fixed",inset:"0",overflow:"hidden"});Object.assign(Or.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"10"});H2();const Ae=Fd(),pn=await Lp(Ud),Ge=y1(Ol),Ye=z1(Ge),Je=Rp({events:Ae}),kl=pn.isFresh();let us=kl?0:Math.min(pn.nextIndex(),xi.length-1),cn=bh(xi[us]),Zn=pd(Ge,cn),ch=!0;Ge.setRound(cn.round);Ye.setLevel(cn);await Dr(Ns.balls);const nr=Ly(Ge,{uiRoot:Or,rig:Ye});nr.setSkin(pn.skin);nr.setRound(cn.round);const Sd=Fy(Ge,{events:Ae,play:Je}),O2=n2(Ge);await Dr(Ns.flags);const Gs=y2(Or,{events:Ae}),bd=I2(Or,{events:Ae,progress:pn,holes:xi,rounds:zr,rig:Ye,play:Je}),k2=76,wd=(i={})=>{Ye.setInsets&&Ye.setInsets({top:Math.max(k2,i.top||0),right:i.right||0,bottom:i.bottom||0,left:i.left||0})},Zo=M2({stage:Ge,rig:Ye,play:Je,events:Ae,uiRoot:Or,onInsets:wd});wd(Zo.insets?Zo.insets():{});const ca=F2({events:Ae});ca.setMuted(pn.muted);const Bl=document.createElement("div");Bl.textContent=`v${uh}`;Object.assign(Bl.style,{position:"fixed",right:"max(10px, env(safe-area-inset-right))",bottom:"max(6px, env(safe-area-inset-bottom))",zIndex:"5",font:"11px system-ui, sans-serif",letterSpacing:".06em",color:"rgba(255,255,255,.55)",pointerEvents:"none"});document.body.appendChild(Bl);const Ee={menuOpen:!1,paused:!1,ad:!1,gameplay:!1,holesThisSession:0,roundPending:null,loading:!1};function _i(){const i=!Ee.menuOpen&&!Ee.paused&&!Ee.ad&&!Ee.loading&&Je.state!=="idle"&&Je.state!=="done";Zo.enable(i),i!==Ee.gameplay&&(Ee.gameplay=i,i?Rd():Pd())}function Jo(){ca.setExternalMute(gc()),Ae.emit("audio:external",{muted:gc()})}zd(Jo);Jo();function kr(i){us=i,Ee.loading=!0,ch&&cn.id===xi[i].id||(Zn.dispose(),cn=bh(xi[i]),Zn=pd(Ge,cn)),ch=!1,Ge.setRound(cn.round),nr.setRound(cn.round),Ye.setLevel(cn),Zn.faceCamera(Ge.camera),Sd.clear(),Je.load(cn,i),Gs.setHole(cn,i),Gs.setStrokes(0,cn.par),Gs.show(!0),Ld({round:cn.round,hole:i+1}),Ae.emit("game:hole",{index:i,level:cn,first:kl&&i===0&&Ee.holesThisSession===0}),_i(),Ye.intro().then(()=>{us===i&&(Ee.loading=!1,Je.state==="ready"&&Ye.frameShot(Je),Zn.setFlow(1),_i())})}async function Ed(){if(!(Ee.holesThisSession<2)){Ee.ad=!0,Ae.emit("ad:start",{}),Jo(),_i();try{await Dd()}catch(i){console.error(i)}Ee.ad=!1,Jo(),Ae.emit("ad:end",{}),_i()}}function B2(i){const t=zr.find(r=>r.id===i),e=i===1?0:9,n=t.holes.map((r,o)=>({index:e+o,strokes:pn.best(e+o),par:r.par})),s=pn.roundTotal(i);return{round:i,name:t.name,holes:n,total:s.total,par:s.par,rel:Ec(s.total,s.par),complete:s.complete}}Ae.on("shot:ready",({strokes:i,par:t})=>{Gs.setStrokes(i,t),Ee.loading||Ye.frameShot(Je),Zn.setFlow(1),_i()});Ae.on("shot:fire",({strokes:i})=>{Ye.userMoved=!1,Gs.setStrokes(i,Je.level.par),Zn.setFlow(0),ca.unlock()});Ae.on("shot:end",({strokes:i,par:t})=>Gs.setStrokes(i,t));Ae.on("ball:contact",()=>nr.flash());Ae.on("ball:holed",()=>Zn.wiggleFlag());Ae.on("hole:done",({index:i,strokes:t,stars:e,term:n,level:s})=>{const r=pn.roundTotal(s.round);pn.record(i,t,e),Ee.holesThisSession+=1,(n.key==="ace"||n.key==="albatross")&&Wl();const o=xi.filter((c,l)=>pn.best(l)!==null).length;if(Id(Math.round(o/xi.length*100)),i===8||i===17){const c=pn.roundTotal(s.round);c.complete&&(!r.complete||c.total<r.total)&&Wl(),Ee.roundPending=s.round}_i()});Ae.on("ui:next",async()=>{if(Ee.roundPending){const i=Ee.roundPending;Ee.roundPending=null,Ae.emit("game:round",B2(i));return}if(await Ed(),us>=xi.length-1){bd.showTitle();return}kr(us+1)});Ae.on("ui:retry",async()=>{Ee.roundPending=null,Je.state==="done"&&await Ed(),Ee.paused=!1,kr(us)});Ae.on("ui:play",({index:i})=>{Ee.roundPending=null,Ee.paused=!1,kr(i)});Ae.on("ui:pause",()=>{Ee.paused=!0,_i()});Ae.on("ui:resume",()=>{Ee.paused=!1,_i()});Ae.on("ui:menu",({open:i})=>{Ee.menuOpen=!!i,_i()});Ae.on("ui:overview",({on:i})=>Ye.overview(!!i));Ae.on("ui:sound",({muted:i})=>{pn.setMuted(!!i),ca.setMuted(!!i)});Ae.on("ui:skin",({id:i})=>{pn.setSkin(i),nr.setSkin(i)});Ol.addEventListener("pointerdown",()=>{Ee.loading&&Ye.skipIntro&&Ye.skipIntro()});Ge.onResize(()=>{Zn.faceCamera(Ge.camera),Je.state==="ready"&&!Ye.userMoved&&Ye.frameShot(Je)});let hc=0,lh=0;function Td(i){requestAnimationFrame(Td);const t=hc?Math.min((i-hc)/1e3,.1):0;hc=i,lh+=t,!Ee.paused&&!Ee.ad&&Je.update(t);const e=Je.balls();Je.state==="rolling"&&!Ye.userMoved&&Ye.follow(e[1].x,e[1].z),Ye.update(t),nr.update(e,t),O2.update(Je,t),Zn.update(t,lh),Zo.update(t),Sd.update(t),Ge.render()}window.ebg={version:uh,events:Ae,play:Je,stage:Ge,rig:Ye,progress:pn,HOLES:xi,ROUNDS:zr,loadHole:kr,get level(){return cn},get course(){return Zn}};if(as!==null){if(await Dr(Ns.warm),Ge.renderer&&Ge.scene&&Ge.camera)try{await Promise.race([Ge.renderer.compileAsync(Ge.scene,Ge.camera),new Promise(i=>setTimeout(i,4e3))])}catch(i){console.error(i)}for(let i=0;i<3;i++)await Dr({pct:Ns.warm.pct+3+i*1.5,label:Ns.warm.label}),Ge.render();await as.ready()}Cd();requestAnimationFrame(Td);kr(us);kl||bd.showTitle();function H2(){window.addEventListener("keydown",i=>{const t=i.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown"].includes(i.code)&&i.preventDefault()}),window.addEventListener("wheel",i=>i.preventDefault(),{passive:!1}),window.addEventListener("contextmenu",i=>i.preventDefault())}

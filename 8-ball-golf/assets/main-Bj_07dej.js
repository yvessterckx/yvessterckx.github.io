import{S as Gs}from"./index-CWzPvXi5.js";const Th="0.3.0",Mc="8bg:",qo={script:5e3,init:6e3,adStart:12e3,adMax:15e4};let $s=null,Zn="none",qr=null,zi=null,Vs=0,Yo=!1,Di=!1,es=!1,Zl=-1;const yc=new Set,Sc=new Map,Ah=()=>typeof window<"u"?window:null,On=(...i)=>{try{console.warn("[platform]",...i)}catch{}};function Vi(i){if($s)try{const t=i($s);t&&typeof t.catch=="function"&&t.catch(e=>On(e))}catch(t){On(t)}}function Jl(i,t,e){let n=0;return Promise.race([Promise.resolve(i).catch(()=>e),new Promise(s=>{n=setTimeout(()=>s(e),t)})]).finally(()=>clearTimeout(n))}function Ko(){const i=wc();for(const t of[...yc])try{t(i)}catch(e){On(e)}}function Ch(){try{const i=Ah();return i&&i.localStorage||null}catch{return null}}function Rh(){return qr||(qr=(async()=>{try{const i=Ah();if(!i||!i.__cgSdk)return{env:Zn};const e=await Jl(i.__cgSdk,qo.script,!1)&&i.CrazyGames&&i.CrazyGames.SDK;if(!e||typeof e.init!="function")return{env:Zn};if(!await Jl(Promise.resolve().then(()=>e.init()).then(()=>!0,o=>(On("init failed",o),!1)),qo.init,!1))return{env:Zn};const s=String(e.environment||"disabled");if(s!=="crazygames"&&s!=="local")return Zn=s,{env:Zn};const r=e.game;try{es=!!(r.settings&&r.settings.muteAudio)}catch{es=!1}try{r.addSettingsChangeListener(o=>{let a=es;try{a=!!((o&&"muteAudio"in o?o:r.settings)||{}).muteAudio}catch{}a!==es&&(es=a,Ko())})}catch(o){On("settings listener",o)}try{e.data&&typeof e.data.getItem=="function"&&(e.data.getItem(Mc+"probe"),zi=e.data)}catch(o){On("data module off",o&&(o.code||o.message||o)),zi=null}$s=e,Zn=s,Vs===1&&Vi(o=>o.game.loadingStart()),es&&Ko()}catch(i){On("SDK unavailable",i),$s=null,zi=null,(Zn==="crazygames"||Zn==="local")&&(Zn="none")}return{env:Zn}})(),qr)}function qd(){Vs||(Vs=1,Vi(i=>i.game.loadingStart()))}function Yd(){if(Vs===2)return;const i=Vs;Vs=2,i===1&&Vi(t=>t.game.loadingStop())}function Kd(){Yo||Di||(Yo=!0,Vi(i=>i.game.gameplayStart()))}function $d(){Yo&&(Yo=!1,Vi(i=>i.game.gameplayStop()))}function Ql(){Vi(i=>i.game.happytime())}function jd(i){Vi(t=>i?t.game.setGameContext(i):t.game.clearGameContext())}function Zd(i){const t=Math.max(0,Math.min(100,Math.round(Number(i)||0)));t<=Zl||(Zl=t,Vi(e=>e.game.reportGameCompletedPercentage(t)))}function Jd(){return!$s||Di?Promise.resolve():new Promise(i=>{let t=!1,e=0,n=0;const s=()=>{t||(t=!0,clearTimeout(e),i())},r=()=>{clearTimeout(n),Di&&(Di=!1,Ko()),s()};e=setTimeout(()=>{Di||s()},qo.adStart);const o={adStarted:()=>{clearTimeout(e),clearTimeout(n),Di||(Di=!0,Ko()),n=setTimeout(r,qo.adMax)},adFinished:r,adError:a=>{const c=a&&a.code;c&&c!=="adCooldown"&&c!=="adsDisabledBasicLaunch"&&c!=="unfilled"&&On("ad",c),r()}};try{const a=$s.ad.requestAd("midgame",o);a&&typeof a.then=="function"&&a.then(void 0,()=>r())}catch(a){On("ad",a),r()}})}function wc(){return es||Di}function Qd(i){return typeof i!="function"?()=>{}:(yc.add(i),()=>{yc.delete(i)})}const tp={async load(i){await Rh();const t=Mc+i;if(zi)try{const e=zi.getItem(t);if(e!=null)return String(e);const n=tu(t);if(n!=null){try{zi.setItem(t,n)}catch(s){On("migrate",s)}return n}return null}catch(e){On("data load",e)}return tu(t)},save(i,t){const e=Mc+i,n=String(t);if(zi)try{zi.setItem(e,n);return}catch(s){On("data save",s)}ep(e,n)}};function tu(i){const t=Ch();if(t)try{const e=t.getItem(i);if(e!=null)return String(e)}catch{}return Sc.has(i)?Sc.get(i):null}function ep(i,t){Sc.set(i,t);const e=Ch();if(e)try{e.setItem(i,t)}catch{}}function np(){const i=new Map;return{on(t,e){return i.has(t)||i.set(t,new Set),i.get(t).add(e),()=>i.get(t).delete(e)},emit(t,e){const n=i.get(t);if(n)for(const s of[...n])try{s(e)}catch(r){console.error("[events] "+t,r)}}}}const bc=Math.PI/180,Bs=i=>Math.round(i*100)/100;function Jn(i,t=12){const e=i.length,n=[];for(let s=0;s<e;s++){const r=i[s],o=r[2]||0;if(!o){n.push([r[0],r[1]]);continue}const a=i[(s+e-1)%e],c=i[(s+1)%e];let l=a[0]-r[0],u=a[1]-r[1],d=c[0]-r[0],f=c[1]-r[1];const h=Math.hypot(l,u),g=Math.hypot(d,f);l/=h,u/=h,d/=g,f/=g;const x=Math.acos(Math.max(-1,Math.min(1,l*d+u*f)));let m=o/Math.tan(x/2),p=o;const w=.5*Math.min(h,g);m>w&&(m=w,p=m*Math.tan(x/2));const M=l+d,y=u+f,C=Math.hypot(M,y),R=p/Math.sin(x/2),E=r[0]+M/C*R,S=r[1]+y/C*R,_=Math.atan2(r[1]+u*m-S,r[0]+l*m-E);let v=Math.atan2(r[1]+f*m-S,r[0]+d*m-E)-_;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;const A=Math.max(1,Math.ceil(Math.abs(v)/(t*bc)));for(let U=0;U<=A;U++)n.push([Bs(E+p*Math.cos(_+v*U/A)),Bs(S+p*Math.sin(_+v*U/A))])}return n.filter((s,r)=>{const o=n[(r+n.length-1)%n.length];return r===0&&n.length>1?!(s[0]===n[n.length-1][0]&&s[1]===n[n.length-1][1]):!(s[0]===o[0]&&s[1]===o[1])})}function eu(i,t,e,n,s,r=10){const o=[],a=Math.max(2,Math.ceil((s-n)/r));for(let c=0;c<=a;c++){const l=(n+(s-n)*c/a)*bc;o.push([Bs(i[0]+e*Math.cos(l)),Bs(i[1]+e*Math.sin(l))])}for(let c=a;c>=0;c--){const l=(n+(s-n)*c/a)*bc;o.push([Bs(i[0]+t*Math.cos(l)),Bs(i[1]+t*Math.sin(l))])}return o}const ip=[{id:"g1",name:"Hello, Eight!",par:2,circle:5,size:[30,12],tee:[4,6],cup:[21,6],tip:"Sink the 8 in the hole!",border:"wall",ground:Jn([[0,.8,4],[15,0,8],[30,.8,4],[30,11.2,4],[15,12,8],[0,11.2,4]]),zones:[{surface:"green",circle:{c:[21,6],r:3.6}}],props:[{type:"sign",at:[1.5,-1.4]},{type:"flowers",at:[6,-1.3]},{type:"flowers",at:[11,13.3]},{type:"flowers",at:[19,-1.3]},{type:"flowers",at:[25,13.2]},{type:"tree",at:[-3.2,13.5]},{type:"tree",at:[33.5,-2.2]},{type:"bush",at:[27,13.4]},{type:"bush",at:[-1.4,3]},{type:"statue8",at:[33.6,6]}]},{id:"g2",name:"Easy Does It",par:2,circle:5,size:[34,14],tee:[4,7],cup:[16,7],tip:"Softer is smarter.",border:"wall",ground:Jn([[0,2,3],[9,1.5,3],[11,3,2],[16,1,5],[21,3.5,2],[34,3.5,3],[34,10.5,3],[21,10.5,2],[16,13,5],[11,11,2],[9,12.5,3],[0,12,3]]),zones:[{surface:"green",circle:{c:[16,7],r:3.6}}],props:[{type:"sign",at:[1,.2]},{type:"flowers",at:[10.5,1.2]},{type:"flowers",at:[10.5,12.8]},{type:"flowers",at:[16,-.6]},{type:"flowers",at:[16,14.6]},{type:"bush",at:[26,2]},{type:"bush",at:[29,12]},{type:"flowerbox",at:[22,12.3]},{type:"flowerbox",at:[31,1.7]},{type:"tree",at:[37.5,7]},{type:"tree",at:[24,15.5]}]},{id:"g3",name:"Side Swipe",par:3,circle:4,size:[30,18],tee:[2.8,3.54],cup:[25,15],tip:"Hit its side!",border:"hedge",ground:Jn([[0,5.73,1.5],[2.92,0,1.5],[22,0,6],[30,3,5],[30,18,4],[17,18,4],[15,9.5,3],[0,10,3]]),zones:[{surface:"green",circle:{c:[25,15],r:3.8}}],props:[{type:"bush",at:[-1,2.2]},{type:"bush",at:[1.2,-1]},{type:"bush",at:[-1,7.5]},{type:"fountain",at:[6.5,14.5]},{type:"flowers",at:[2,12.5]},{type:"flowers",at:[11.5,12]},{type:"flowers",at:[12,16.5]},{type:"flowers",at:[12,-1.2]},{type:"tree",at:[33.5,9]},{type:"tree",at:[26,-3.2]}]},{id:"g4",name:"Bank Job",par:3,circle:4,size:[26,15],tee:[3,3],cup:[23,3],tip:"Bounce it off the wall!",border:"wall",ground:Jn([[0,.5,3],[11.5,0,1.5],[11.5,8.5,1.5],[14.5,8.5,1.5],[14.5,0,1.5],[26,.5,3],[26,15,4],[0,15,4]]),zones:[{surface:"green",circle:{c:[23,3],r:3.8}}],props:[{type:"flowerbox",at:[13,2]},{type:"flowerbox",at:[13,5.2]},{type:"flowers",at:[13,7.6]},{type:"tree",at:[-3.3,7]},{type:"flowers",at:[6,16.3]},{type:"flowers",at:[20,16.3]},{type:"bush",at:[27.6,9]},{type:"sign",at:[1,-1]},{type:"tree",at:[29.3,-1.5]}]},{id:"g5",name:"Lollipop Lane",par:3,circle:3,size:[40,20],tee:[4,10],cup:[36,10],tip:"Move the white ball!",border:"wall",ground:Jn([[0,3,3],[10,0,6],[30,0,6],[40,3,3],[40,17,3],[30,20,6],[10,20,6],[0,17,3]]),zones:[{surface:"green",circle:{c:[36,10],r:3.5}}],posts:[...[4,8,12,16].flatMap(i=>[12,20,28].map(t=>({at:[t,i],r:.6,kind:"lollipop"}))),...[6,10,14].flatMap(i=>[16,24].map(t=>({at:[t,i],r:.6,kind:"lollipop"})))],props:[{type:"lollipop",at:[-3.2,3]},{type:"lollipop",at:[43.2,17]},{type:"lollipop",at:[20,23.2]},{type:"flowers",at:[20,-1.2]},{type:"flowers",at:[8,20.6]},{type:"flowers",at:[32,20.6]},{type:"tree",at:[-3.5,15]},{type:"tree",at:[43.5,4]},{type:"sign",at:[1.5,1.2]}]},{id:"g6",name:"Up & Over",par:3,circle:4,size:[40,18],tee:[4,9],cup:[35,9],tip:"Uphill? Hit harder.",border:"hedge",ground:Jn([[0,2,3],[13,1,3],[15.5,5,2],[23,5,2],[25,1,3],[40,2,3],[40,16,3],[25,17,3],[23,13,2],[15.5,13,2],[13,17,3],[0,16,3]]),steps:[{axis:"x",from:16,to:22,h:1.8}],zones:[{surface:"green",circle:{c:[35,9],r:4}}],props:[{type:"flowers",at:[19,3.5]},{type:"flowers",at:[19,14.5]},{type:"bush",at:[16.5,2.5]},{type:"bush",at:[21.5,15.5]},{type:"tree",at:[7,20]},{type:"tree",at:[7,-2]},{type:"flowers",at:[32,18]},{type:"flowers",at:[32,0]},{type:"statue8",at:[43.2,9]},{type:"sign",at:[1,.8]}]},{id:"g7",name:"Sidewinder",par:3,circle:4,size:[42,20],tee:[2.5,3.5],cup:[39,15],tip:"Arrows show the slope.",border:"wall",tilt:[0,.05],ground:Jn([[0,1,3],[12,0,8],[30,2.5,8],[42,7,4],[42,19.5,4],[32,20,8],[14,16,8],[0,12.5,3]]),zones:[{surface:"green",circle:{c:[39,15],r:4}}],props:[{type:"tree",at:[4,18]},{type:"tree",at:[18,21.5]},{type:"flowers",at:[8,15.5]},{type:"flowers",at:[26,20.3]},{type:"bush",at:[22,.2]},{type:"flowers",at:[36,3.2]},{type:"tree",at:[44.8,2]},{type:"sign",at:[.5,-1]}]},{id:"g8",name:"Sandy Toes",par:3,circle:3.5,size:[40,20],tee:[4,11],cup:[33,8.5],tip:"Sand slows the 8.",border:"wall",ground:Jn([[0,4,3],[12,1,6],[32,1,5],[40,4,4],[40,16,4],[32,20,5],[12,20,6],[0,18,3]]),zones:[{surface:"green",circle:{c:[33,8.5],r:3.6}},{surface:"sand",poly:Jn([[13,5,3],[20,2.5,4],[29,3.5,3],[30,7,2],[27,10.6,3],[17,10.6,3],[12.5,8.5,2]])},{surface:"sand",poly:eu([33,8.5],3,4.6,-70,80)}],props:[{type:"flowers",at:[22,-.5]},{type:"bush",at:[9,.2]},{type:"flowers",at:[22,21]},{type:"bush",at:[36,19.2]},{type:"tree",at:[-3.4,11]},{type:"tree",at:[43.5,10]},{type:"sign",at:[.5,2]}]},{id:"g9",name:"King of the Hill",par:4,circle:3.5,size:[50,28],tee:[5,5],cup:[37,17.5],tip:"Find the way up!",border:"hedge",ground:Jn([[0,0,4],[14.5,0,1.5],[14.5,14,1.5],[17.5,14,1.5],[17.5,0,1.5],[50,0,5],[50,28,5],[0,28,4]]),plateaus:[{circle:{c:[37,17],r:5},h:1.5,ramp:4,linear:!0}],arcs:[{kind:"hedge",c:[37,17],r:5,from:250,to:530}],zones:[{surface:"green",circle:{c:[37,17],r:4.6}},{surface:"sand",poly:eu([37,17],9.3,11,255,525)}],props:[{type:"flowerbox",at:[16,3]},{type:"flowerbox",at:[16,9]},{type:"flowers",at:[16,12.6]},{type:"tree",at:[-3.5,21]},{type:"tree",at:[53.5,8]},{type:"tree",at:[30,31.5]},{type:"flowers",at:[8,-1]},{type:"flowers",at:[33,-1]},{type:"statue8",at:[53.6,22]},{type:"sign",at:[-1,2]}]}],nu=i=>Math.round(i*100)/100,No=(i,t)=>[nu(i),nu(t)];function Rn(i,t=2.5,e=5,n=!0){const s=i.filter((a,c)=>{const l=i[(c+i.length-1)%i.length];return!n&&c===0||Math.hypot(a[0]-l[0],a[1]-l[1])>1e-6}),r=[],o=s.length;for(let a=0;a<o;a++){const c=s[a],l=c[2]??t;if(!n&&(a===0||a===o-1)){r.push(No(c[0],c[1]));continue}const u=s[(a+o-1)%o],d=s[(a+1)%o],f=Math.hypot(u[0]-c[0],u[1]-c[1]),h=Math.hypot(d[0]-c[0],d[1]-c[1]),g=[(u[0]-c[0])/f,(u[1]-c[1])/f],x=[(d[0]-c[0])/h,(d[1]-c[1])/h],m=Math.max(-1,Math.min(1,g[0]*x[0]+g[1]*x[1])),p=Math.acos(m)/2;if(!l||p>1.55){r.push(No(c[0],c[1]));continue}const w=Math.min(l/Math.tan(p),f*.48,h*.48),M=[c[0]+g[0]*w,c[1]+g[1]*w],y=[c[0]+x[0]*w,c[1]+x[1]*w];for(let C=0;C<=e;C++){const R=C/e,E=(1-R)*(1-R),S=2*(1-R)*R,_=R*R;r.push(No(E*M[0]+S*c[0]+_*y[0],E*M[1]+S*c[1]+_*y[1]))}}return r}function Ec(i,t,e,n,s=10){const r=Math.max(2,Math.ceil(Math.abs(n-e)/s)),o=[];for(let a=0;a<=r;a++){const c=(e+(n-e)*a/r)*Math.PI/180;o.push(No(i[0]+Math.cos(c)*t,i[1]+Math.sin(c)*t))}return o}function sp(i,t,e){const n=r=>i.reduce((o,a,c)=>Math.hypot(a[0]-r[0],a[1]-r[1])<Math.hypot(i[o][0]-r[0],i[o][1]-r[1])?c:o,0),s=[];for(let r=n(t),o=n(e);s.push(i[r]),r!==o;r=(r+1)%i.length);return s}const rp={id:"l1",name:"Bend It",par:3,circle:4.5,size:[40,22],tee:[5,11],cup:[35,11],tip:"Slide the dot to bend the 8!",ground:Rn([[1,4],[12,1],[26,1.5],[39,3],[39,19],[26,20.5],[12,21],[1,18]],4.5),border:"wall",posts:[{at:[16,12.3],r:1.6,kind:"tree"},{at:[30.5,14],r:1.3,kind:"post"},{at:[30.5,8],r:1.3,kind:"post"}],zones:[{surface:"green",circle:{c:[35,11],r:4}}],props:[{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[41.5,22.5]},{type:"tree",at:[20,23.5],scale:1.2},{type:"bush",at:[6,-1.5]},{type:"bush",at:[33,-1.5]},{type:"flowers",at:[18,-1.6]},{type:"flowers",at:[-2,11]},{type:"sign",at:[-2.2,6]}]},xa=(i,t,e,n)=>{const s=n?1:-1;return[{kind:"hedge",pts:[[i-1.2,t],[i,t+s*1.2],[i+1.2,t]]},{kind:"hedge",pts:[[i,t+s*1.2],[i,e]]}]},op={id:"l2",name:"Slalom",par:4,circle:4,size:[46,22],tee:[4,11.5],cup:[38,9],tip:"Bend left, then bend right!",ground:Rn([[1,2],[23,1],[45,2],[45,20],[23,21],[1,20]],4),border:"wall",walls:[...xa(10,20.36,14,!1),...xa(18,1.36,9.1,!0),...xa(29,1.5,9.2,!0)],posts:[{at:[10,13],r:1.2,kind:"tree"},{at:[18,10.1],r:1.2,kind:"tree"},{at:[29,10.2],r:1.2,kind:"tree"}],zones:[{surface:"rough",rect:[0,0,46,22]},{surface:"fairway",poly:Rn([[2,5],[23,4],[44,5],[44,17],[23,18],[2,17]],3)},{surface:"green",circle:{c:[38,9],r:3.5}}],props:[{type:"tree",at:[-1.5,23]},{type:"tree",at:[47.5,-1]},{type:"tree",at:[30,23.5]},{type:"flowers",at:[14,-1.5]},{type:"flowers",at:[24,-1.6]},{type:"bush",at:[47.5,14]},{type:"sign",at:[-2,6]}]},ap={id:"l3",name:"Lily Pad Lagoon",par:3,circle:4,size:[44,24],tee:[4,12],cup:[39.5,16.5],tip:"Splash = +1",ground:Rn([[1,4],[10,.8],[34,.8],[43,4],[43,20],[34,23.2],[10,23.2],[1,20]],4),border:"wall",zones:[{surface:"water",ellipse:{c:[22,12],rx:8.5,ry:6.2}},{surface:"fairway",rect:[12.5,10.5,31.5,13.5]},{surface:"green",circle:{c:[39,16],r:3.8}}],props:[{type:"bridge",at:[22,12],r:8.6,scale:.75},{type:"lilypad",at:[17,16],r:.9},{type:"lilypad",at:[20.5,17.2],r:.7},{type:"lilypad",at:[26.5,15.6],r:.8},{type:"lilypad",at:[18.5,7.6],r:.8},{type:"lilypad",at:[24,6.8],r:.7},{type:"lilypad",at:[27.5,8.5],r:.9},{type:"reeds",at:[15,14.6]},{type:"reeds",at:[28.5,15]},{type:"reeds",at:[15.5,9]},{type:"reeds",at:[28.6,9]},{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[45.5,1]},{type:"flowers",at:[22,25.5]},{type:"flowers",at:[22,-1.6]}]},iu=Rn([[6,21.2],[1.5,20.4],[1,4],[4,1.2],[36,1.2],[39,4],[38.5,20.4],[34,21.2]],3,5,!1),cp={id:"l4",name:"Boing Boing",par:3,circle:3.5,size:[40,22],tee:[8,6],cup:[32,6],tip:"Cushions bounce more!",ground:iu,border:null,walls:[{kind:"wall",pts:iu},{kind:"cushion",pts:[[34,21.2],[6,21.2]]},{kind:"hedge",pts:[[9.9,1.2],[12.3,3.2]]},{kind:"hedge",pts:[[30.1,1.2],[27.7,3.2]]}],arcs:[{kind:"hedge",c:[20,1.2],r:8,from:14,to:166}],zones:[{surface:"rough",circle:{c:[20,1.2],r:7.6}},{surface:"green",circle:{c:[32,6],r:3.5}}],props:[{type:"flowers",at:[17,4]},{type:"flowers",at:[22.5,5]},{type:"bush",at:[20,2.6],scale:1.3},{type:"flowers",at:[14.5,2.4]},{type:"flowers",at:[25.5,2.4]},{type:"tree",at:[-1.5,22]},{type:"tree",at:[41.5,22]},{type:"bush",at:[20,23.6]},{type:"flowers",at:[10,23.6]},{type:"flowers",at:[30,23.6]}]},Ph=(i,t,e=.5)=>[...Ec([26,2.5],i,0,180,7.5).map(([n,s])=>[n,2.5+(s-2.5)*t/i]),[26-i,e],[26+i,e]],su=Rn(Ph(25,21.6),2.5),lp={id:"l5",name:"Banana Bay",par:4,circle:3.5,size:[52,25],tee:[6,4],cup:[46,4],tip:"Dot up = bend late!",ground:su,border:"wall",zones:[{surface:"rough",poly:su},{surface:"fairway",poly:Rn(Ph(23,19.4,2.2),2)},{surface:"water",ellipse:{c:[26,2],rx:17,ry:14}},{surface:"green",circle:{c:[46.5,5.5],r:3}}],props:[{type:"lilypad",at:[20,8],r:.9},{type:"lilypad",at:[26,11],r:.8},{type:"lilypad",at:[32,7],r:1},{type:"lilypad",at:[24,4],r:.7},{type:"fountain",at:[26,3.5]},{type:"reeds",at:[11.2,6.8]},{type:"reeds",at:[40.8,6.8]},{type:"reeds",at:[18,13.6]},{type:"reeds",at:[34,13.6]},{type:"tree",at:[-1.5,24]},{type:"tree",at:[53.5,24]},{type:"tree",at:[26,26.5],scale:1.2},{type:"flowers",at:[-2,12]},{type:"flowers",at:[54,12]}]},ru=Rn([[39,4],[39,19],[33,21],[25,21],[25,11.5],[15,11.5],[15,21],[8,21],[1,18],[1,6],[5,1.5],[12,1],[28,1],[33,2.5]],2.5),up={id:"l6",name:"Rooftop Rally",par:3,circle:3,size:[40,22],tee:[5,16],cup:[33,15],tip:"Open edge = out!",ground:ru,border:null,walls:[{kind:"wall",pts:sp(ru,[39,18],[2,7])},{kind:"cushion",pts:[[12,1],[28,1]]}],tilt:[0,.03],zones:[{surface:"green",circle:{c:[33,15],r:3.5}}],props:[{type:"tree",at:[20,17.5],scale:1.1},{type:"flowers",at:[17.5,14]},{type:"flowers",at:[22.5,14]},{type:"flowerbox",at:[4,23]},{type:"flowerbox",at:[11,23.2]},{type:"flowerbox",at:[29,23.2]},{type:"flowerbox",at:[36,22.8]},{type:"flowerbox",at:[-1.5,12],rot:90},{type:"sign",at:[-1.8,18]}]},fp=[[1,3.5],[3.5,1],[36,1],[43,8],[43,8.6],[35.6,16],[30.5,16],[30.5,20.5],[28,23],[8,23],[1,16]],hp={id:"l7",name:"Tight Squeeze",par:4,circle:2.5,size:[44,24],tee:[5,4],cup:[19,19.5],tip:"Stuck on a cushion? Push it in!",ground:fp,border:null,walls:[{kind:"hedge",pts:[[36,1],[3.5,1],[1,3.5],[1,16]]},{kind:"hedge",pts:[[8,23],[28,23],[30.5,20.5],[30.5,17.6]]},{kind:"cushion",pts:[[36,1],[43,8],[43,8.6],[35.6,16],[27,16]]},{kind:"cushion",pts:[[28.9,16],[30.5,17.6]]},{kind:"cushion",pts:[[1,16],[8,23]]},{kind:"cushion",pts:[[8.8,7.8],[1,15.6]]},{kind:"cushion",pts:[[1,6.2],[2.6,7.8],[36,7.8]]},{kind:"cushion",pts:[[8,16],[24.5,16]]}],zones:[{surface:"water",poly:[[.8,7.6],[8.8,7.6],[.8,15.6]]},{surface:"green",circle:{c:[19,19.5],r:2.6}}],props:[{type:"lilypad",at:[2.6,10],r:.6},{type:"reeds",at:[2,13]},{type:"flowerbox",at:[36,22.5]},{type:"flowerbox",at:[40.5,18.5],rot:90},{type:"bush",at:[37.5,19.5]},{type:"tree",at:[-1.5,24.5]},{type:"tree",at:[45.5,-1]},{type:"flowers",at:[20,-1.6]},{type:"sign",at:[-2,6]}]},dp={id:"l8",name:"Island Hop",par:4,circle:3,size:[40,34],tee:[8.5,27],cup:[12,8.5],tip:"Hop island to island!",ground:Rn([[1,5],[4,1],[35,1.5],[39,5],[38.5,29],[35,33],[5,32.5],[1.5,29]],4),border:"wall",walls:[{kind:"cushion",pts:[[13.8,25],[22,25]]},{kind:"cushion",pts:[[13.8,29],[22.2,29]]},{kind:"cushion",pts:[[22.5,22.4],[22.5,13.6]]},{kind:"cushion",pts:[[26.5,21],[26.5,11.8]]}],arcs:[{kind:"cushion",c:[9,27],r:4.6,from:30,to:330},{kind:"cushion",c:[28.5,25],r:6.2,from:-75,to:150},{kind:"cushion",c:[13,9],r:4.9,from:110,to:250}],hills:[{c:[29,25],r:4.5,h:.25}],plateaus:[{circle:{c:[12,8.5],r:2.8},h:.25,ramp:1.2}],zones:[{surface:"water",rect:[0,0,40,34]},{surface:"rough",poly:Rn([[0,0],[5.5,0],[5.5,13],[3.5,19],[0,20]],2.5)},{surface:"rough",poly:Rn([[31.5,0],[40,0],[40,16],[35,15.5],[31.5,13]],2.5)},{surface:"rough",poly:Rn([[15.5,31.5],[21,31.5],[22,34],[14.5,34]],1.5)},{surface:"fairway",circle:{c:[9,27],r:5}},{surface:"fairway",circle:{c:[28.5,25],r:6.6}},{surface:"fairway",ellipse:{c:[18,9],rx:9.5,ry:5.5}},{surface:"fairway",rect:[13.6,25,22.6,29]},{surface:"fairway",rect:[22.5,11,26.5,22]},{surface:"green",circle:{c:[12,8.5],r:2.8}}],props:[{type:"bridge",at:[18,27],r:4.2},{type:"bridge",at:[24.5,17],r:4.4,rot:90},{type:"lilypad",at:[6,17],r:.9},{type:"lilypad",at:[33,13],r:.8},{type:"lilypad",at:[35.5,7],r:1},{type:"lilypad",at:[17,20],r:.7},{type:"lilypad",at:[5,6],r:.8},{type:"lilypad",at:[34,31],r:.7},{type:"reeds",at:[3.4,21]},{type:"reeds",at:[36,20.5]},{type:"reeds",at:[29,4]},{type:"reeds",at:[3.5,12]},{type:"fountain",at:[33.5,9]},{type:"tree",at:[-1.5,35]},{type:"tree",at:[41.5,35]},{type:"flowers",at:[20,35.5]}]},Yr=Math.atan2(Math.sqrt(29),14)*(180/Math.PI),pp=[...Ec([44,16],15,180+Yr,540-Yr,7.5),...Ec([16,16],15,Yr,360-Yr,7.5).slice(1,-1)],mp={id:"l9",name:"Figure Eight",par:5,circle:3.5,size:[60,32],tee:[4.5,16],cup:[55.5,16],tip:"Last hole: loop the 8!",ground:Rn(pp,2,4),border:"wall",posts:[{at:[30,16],r:1.8,kind:"bumper"}],arcs:[{kind:"cushion",c:[16,16],r:8.5,from:100,to:170},{kind:"cushion",c:[16,16],r:8.5,from:190,to:260},{kind:"cushion",c:[44,16],r:8.5,from:10,to:80},{kind:"cushion",c:[44,16],r:8.5,from:280,to:350}],plateaus:[{circle:{c:[55.5,16],r:2.6},h:.3,ramp:1.5}],zones:[{surface:"rough",circle:{c:[16,16],r:15.5}},{surface:"rough",circle:{c:[44,16],r:15.5}},{surface:"fairway",circle:{c:[16,16],r:13}},{surface:"fairway",circle:{c:[44,16],r:13}},{surface:"fairway",rect:[26,9.5,34,22.5]},{surface:"water",circle:{c:[16,16],r:8}},{surface:"water",circle:{c:[44,16],r:8}},{surface:"green",circle:{c:[55.5,16],r:3}}],props:[{type:"fountain",at:[16,16],scale:1.2},{type:"fountain",at:[44,16],scale:1.2},{type:"lilypad",at:[12,12],r:.9},{type:"lilypad",at:[20.5,19.5],r:.8},{type:"lilypad",at:[13,20],r:.7},{type:"lilypad",at:[47.5,12.5],r:.9},{type:"lilypad",at:[40,19.5],r:.8},{type:"lilypad",at:[48,20.5],r:.7},{type:"reeds",at:[9.5,19.5]},{type:"reeds",at:[22.5,12]},{type:"reeds",at:[37.5,12.5]},{type:"reeds",at:[50.5,19.5]},{type:"statue8",at:[58.5,28],scale:1.3},{type:"flowers",at:[56,30.5]},{type:"flowers",at:[60.5,25]},{type:"tree",at:[1.5,29.5]},{type:"tree",at:[1.5,2.5]},{type:"tree",at:[58.5,3]},{type:"bush",at:[30,27.5]},{type:"bush",at:[30,4.5]},{type:"flowers",at:[29,26.5]},{type:"flowers",at:[31,5.5]}]},gp=[rp,op,ap,cp,lp,up,hp,dp,mp],Br=Object.freeze([{id:1,name:"Greenside",holes:ip},{id:2,name:"Lakeside",holes:gp}]),yi=Object.freeze(Br.flatMap((i,t)=>i.holes.map((e,n)=>Object.freeze({...e,round:i.id,number:t*9+n+1})))),Ht=Object.freeze({DT:1/240,R:.5,MAX_EVENTS:8,E_BALL:.95,SLOPE_K:21,GRAD_EPS:.1,V_SLEEP:.05,SLOW_V:.3,SLOW_MAX_T:2.5,MAX_SHOT_T:20,D_MAX:40,D_REF_DECEL:3,POWER_MIN:.03,PLACE_GAP:.05,CUE_MAX_TRAVEL:12,CUE_FADE_T:.5,GHOST_DECEL:8,CURVE_K:.3,CURVE_LEN:4,EIGHT_CURVE_K:.04,EIGHT_CURVE_LEN:15,EIGHT_EARLY_LEN:5,EIGHT_HOOK_START:3,EIGHT_HOOK_LEN:7,HOLE_R:1.1,HOLE_VCAP:8,LIP_W:.5,LIP_A:4,HOLE_SETTLE_V:1,HOP_KEEP:.85}),ou=Object.freeze({green:Object.freeze({decel:2}),fairway:Object.freeze({decel:3}),rough:Object.freeze({decel:6}),sand:Object.freeze({decel:14}),ice:Object.freeze({decel:.8})}),Tc=Object.freeze({wall:Object.freeze({e:.6,keep:.95}),hedge:Object.freeze({e:.6,keep:.95}),cushion:Object.freeze({e:.85,keep:.97}),bumper:Object.freeze({e:1,keep:1}),post:Object.freeze({e:.6,keep:.95}),tree:Object.freeze({e:.6,keep:.95}),lollipop:Object.freeze({e:.6,keep:.95})}),Bi=1/0,va=i=>Tc[i]||Tc.wall;function xp(i){const t=[],e=[],n=new Set,s=(l,u,d)=>{const f=l+","+u;n.has(f)||(n.add(f),e.push({x:l,z:u,e:d.e,keep:d.keep,kind:d===Tc.cushion?"cushion":"wall",minx:l,maxx:l,minz:u,maxz:u}))};for(const l of i.segments||[]){const u=l.bx-l.ax,d=l.bz-l.az,f=u*u+d*d;if(f===0)continue;const h=Math.sqrt(f),g=va(l.kind);t.push({ax:l.ax,az:l.az,ex:u,ez:d,len2:f,nx:-d/h,nz:u/h,e:g.e,keep:g.keep,kind:l.kind||"wall",minx:Math.min(l.ax,l.bx),maxx:Math.max(l.ax,l.bx),minz:Math.min(l.az,l.bz),maxz:Math.max(l.az,l.bz)}),s(l.ax,l.az,g),s(l.bx,l.bz,g)}const r=(i.posts||[]).map(l=>{const u=va(l.kind||"post");return{x:l.x,z:l.z,r:l.r,e:u.e,keep:u.keep,kind:l.kind||"post",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),o=(i.arcs||[]).map(l=>{const u=va(l.kind);return s(l.x+l.sx*l.r,l.z+l.sz*l.r,u),s(l.x+l.ex*l.r,l.z+l.ez*l.r,u),{x:l.x,z:l.z,r:l.r,sx:l.sx,sz:l.sz,ex:l.ex,ez:l.ez,e:u.e,keep:u.keep,kind:l.kind||"wall",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),a=au(0,i.eight.x,i.eight.z);a.mode="off";const c=au(1,i.eight.x,i.eight.z);return{t:0,shotT:0,active:!1,balls:[a,c],segs:t,caps:e,posts:r,arcs:o,hole:{x:i.hole.x,z:i.hole.z},placeR:i.placeR||4,lieX:i.eight.x,lieZ:i.eight.z,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function au(i,t,e){return{id:i,x:t,z:e,px:t,pz:e,vx:0,vz:0,mode:"rest",spin:0,top:0,travel:0,curveS:0,slowT:0,fadeT:0,overHole:!1,decel:0,slopeA2:0}}function cu(i,t,e){const n=i.balls[1];n.x=n.px=t,n.z=n.pz=e,n.vx=0,n.vz=0,n.mode="rest",n.spin=0,n.top=0,n.curveS=0,n.slowT=0,n.overHole=!1,i.lieX=t,i.lieZ=e}function Lh(i){const t=i<Ht.POWER_MIN?Ht.POWER_MIN:i>1?1:i;return Math.sqrt(2*Ht.D_REF_DECEL*Ht.D_MAX*t)/((1+Ht.E_BALL)/2)}function Ih(i){const t=typeof i=="number"?i:i&&i.x||0,e=typeof i=="number"?0:i&&i.y||0;return{side:t<-1?-1:t>1?1:t,top:e<-1?-1:e>1?1:e}}function Dh(i,t,e,n){const s=i.balls[0],r=i.balls[1],o=Math.sqrt(t.dx*t.dx+t.dz*t.dz),a=Lh(n);s.x=s.px=t.x,s.z=s.pz=t.z,s.vx=t.dx/o*a,s.vz=t.dz/o*a;const c=Ih(e);s.mode="cue",s.spin=c.side,s.top=c.top,s.travel=0,s.fadeT=0,i.lieX=r.x,i.lieZ=r.z,r.slowT=0,i.shotT=i.t,i.active=!0}const Ac={x:0,z:0},ke={t:0,kind:0,i:0,j:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""},ei=0,zh=1,Tl=2,_a=3;function Nh(i,t=Ht.DT){const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];s.px=s.x,s.pz=s.z,s.mode==="cue"?vp(s,t):s.mode==="roll"?yp(i,s,t):s.mode==="ghost"&&_p(s,t)}bp(i,t);for(let n=0;n<e.length;n++)Tp(i,e[n],t);if(i.t+=t,i.active){let n=!1;for(let s=0;s<e.length;s++){const r=e[s].mode;(r==="cue"||r==="roll"||r==="ghost")&&(n=!0)}if(n&&i.t-i.shotT>Ht.MAX_SHOT_T){for(let s=0;s<e.length;s++){const r=e[s];r.mode==="roll"?Cc(i,r):(r.mode==="cue"||r.mode==="ghost")&&(r.mode="off")}n=!1}n||(i.active=!1,i.events.push({type:"shotEnd",t:i.t}))}}function Dr(i){return Math.sqrt(i.vx*i.vx+i.vz*i.vz)}function zr(i,t,e){const n=1-.5*t*t,s=i.vx*n-i.vz*t,r=i.vx*t+i.vz*n,o=e/Math.sqrt(s*s+r*r);i.vx=s*o,i.vz=r*o}function vp(i,t){const e=Dr(i);if(i.spin!==0&&e>0){const n=1-i.travel/Ht.CURVE_LEN;n>0&&zr(i,Ht.CURVE_K*i.spin*n*e*t,e)}i.travel+=e*t}function Uh(i,t){const e=Ht.EIGHT_CURVE_LEN;if(t<0){const o=e+(Ht.EIGHT_EARLY_LEN-e)*-t;return i<o?Ht.EIGHT_CURVE_K*e/o*(1-i/o):0}const n=i<e?Ht.EIGHT_CURVE_K*(1-i/e):0;if(t===0)return n;const s=i-Ht.EIGHT_HOOK_START,r=s>0&&s<Ht.EIGHT_HOOK_LEN?Ht.EIGHT_CURVE_K*e*s/(Ht.EIGHT_HOOK_LEN*Ht.EIGHT_HOOK_LEN):0;return n*(1-t)+r*t}function _p(i,t){const e=Dr(i),n=Ht.GHOST_DECEL*t;if(e<=n)i.vx=0,i.vz=0;else{const s=(e-n)/e;i.vx*=s,i.vz*=s}}function Mp(i,t,e,n=Ac){const s=Ht.GRAD_EPS,r=i.heightAt;return n.x=(r(t+s,e)-r(t-s,e))/(2*s),n.z=(r(t,e+s)-r(t,e-s))/(2*s),n}function yp(i,t,e){const n=ou[i.surfaceAt(t.x,t.z)]||ou.fairway;Mp(i,t.x,t.z);let s=-Ht.SLOPE_K*Ac.x,r=-Ht.SLOPE_K*Ac.z;const o=i.hole.x-t.x,a=i.hole.z-t.z,c=o*o+a*a,l=Ht.HOLE_R+Ht.LIP_W;if(c<l*l&&c>=Ht.HOLE_R*Ht.HOLE_R){const h=Math.sqrt(c);s+=Ht.LIP_A*o/h,r+=Ht.LIP_A*a/h}if(t.spin!==0){const h=Dr(t),g=1-t.curveS/Ht.EIGHT_CURVE_LEN;if(t.top===0)g>0&&h>0?zr(t,Ht.EIGHT_CURVE_K*t.spin*g*h*e,h):g<=0&&(t.spin=0);else if(g<=0)t.spin=0;else if(h>0){const x=Uh(t.curveS,t.top);x>0&&zr(t,x*t.spin*h*e,h)}t.curveS+=h*e}t.vx+=s*e,t.vz+=r*e;const u=Dr(t),d=n.decel*e,f=s*s+r*r;if(u>d){const h=(u-d)/u;t.vx*=h,t.vz*=h}else if(f<=n.decel*n.decel)t.vx=0,t.vz=0;else{const h=Math.sqrt(f),g=(h-n.decel)*e/h;t.vx=s*g,t.vz=r*g}t.decel=n.decel,t.slopeA2=f}function Uo(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=a*e+c*n;if(l>=0)return Bi;const u=a*a+c*c-o*o;if(u<=0)return 0;const d=e*e+n*n,f=l*l-d*u;return f<0?Bi:u/(-l+Math.sqrt(f))}function Sp(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=e*e+n*n;if(l===0)return Bi;const u=a*e+c*n,d=a*a+c*c-o*o;if(d>=0)return u>0?0:Bi;const f=Math.sqrt(u*u-l*d);return u>0?-d/(u+f):(-u+f)/l}const lu=1e-9;function Kr(i,t,e,n,s){return i.maxx<t||i.minx>e||i.maxz<n||i.minz>s}function Fh(i,t,e,n,s,r,o,a){let c=o,l=ei;const u=(n<0?-n:n)*o+r+lu,d=(s<0?-s:s)*o+r+lu,f=t-u,h=t+u,g=e-d,x=e+d,m=i.segs;for(let y=0;y<m.length;y++){const C=m[y];if(Kr(C,f,h,g,x))continue;let R=C.nx,E=C.nz,S=(t-C.ax)*R+(e-C.az)*E;S<0&&(R=-R,E=-E,S=-S);const _=n*R+s*E;if(_>=0)continue;let v=(S-r)/-_;if(v<0&&(v=0),v>c||v===c&&l!==ei)continue;const A=t+n*v,U=e+s*v,F=((A-C.ax)*C.ex+(U-C.az)*C.ez)/C.len2;F<0||F>1||(c=v,l=Tl,a.nx=R,a.nz=E,a.e=C.e,a.keep=C.keep,a.ck=C.kind)}const p=i.caps;for(let y=0;y<p.length;y++){const C=p[y];if(Kr(C,f,h,g,x))continue;const R=Uo(t,e,n,s,C.x,C.z,r);(R<c||R===c&&l===ei)&&(c=R,l=_a,a.cx=C.x,a.cz=C.z,a.sign=1,a.e=C.e,a.keep=C.keep,a.ck=C.kind)}const w=i.posts;for(let y=0;y<w.length;y++){const C=w[y];if(Kr(C,f,h,g,x))continue;const R=Uo(t,e,n,s,C.x,C.z,C.r+r);(R<c||R===c&&l===ei)&&(c=R,l=_a,a.cx=C.x,a.cz=C.z,a.sign=1,a.e=C.e,a.keep=C.keep,a.ck=C.kind)}const M=i.arcs;for(let y=0;y<M.length;y++){const C=M[y];if(Kr(C,f,h,g,x))continue;const R=t-C.x,E=e-C.z,S=R*R+E*E>C.r*C.r,_=S?Uo(t,e,n,s,C.x,C.z,C.r+r):Sp(t,e,n,s,C.x,C.z,C.r-r);if(!(_<c||_===c&&l===ei))continue;const v=t+n*_-C.x,A=e+s*_-C.z;C.sx*A-C.sz*v<0||v*C.ez-A*C.ex<0||(c=_,l=_a,a.cx=C.x,a.cz=C.z,a.sign=S?1:-1,a.e=C.e,a.keep=C.keep,a.ck=C.kind)}return a.t=c,a.kind=l,l===ei?Bi:c}function uu(i){return i==="cue"||i==="roll"||i==="rest"}function Ma(i){return i==="cue"||i==="roll"}const Qn={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function wp(i,t){const e=i.balls;ke.kind=ei,ke.t=t;for(let n=0;n<e.length;n++){const s=e[n];if(!uu(s.mode))continue;for(let o=n+1;o<e.length;o++){const a=e[o];if(!uu(a.mode)||!Ma(s.mode)&&!Ma(a.mode))continue;const c=Uo(s.x,s.z,s.vx-a.vx,s.vz-a.vz,a.x,a.z,2*Ht.R);(c<ke.t||c===ke.t&&ke.kind===ei)&&(ke.t=c,ke.kind=zh,ke.i=n,ke.j=o)}if(!Ma(s.mode))continue;const r=Fh(i,s.x,s.z,s.vx,s.vz,Ht.R,ke.t,Qn);(r<ke.t||r===ke.t&&ke.kind===ei&&r!==Bi)&&(ke.t=r,ke.kind=Qn.kind,ke.i=n,ke.nx=Qn.nx,ke.nz=Qn.nz,ke.cx=Qn.cx,ke.cz=Qn.cz,ke.sign=Qn.sign,ke.e=Qn.e,ke.keep=Qn.keep,ke.ck=Qn.ck)}return ke}function fu(i,t){if(t===0)return;const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];(s.mode==="cue"||s.mode==="roll"||s.mode==="ghost")&&(s.x+=s.vx*t,s.z+=s.vz*t)}}function bp(i,t){let e=t;for(let n=0;n<Ht.MAX_EVENTS;n++){const s=wp(i,e);if(s.kind===ei){fu(i,e);return}if(fu(i,s.t),Ep(i,s),e-=s.t,e<=0)return}}function Ep(i,t){const e=i.balls;if(t.kind===zh){const l=e[t.i],u=e[t.j];let d=u.x-l.x,f=u.z-l.z;const h=Math.sqrt(d*d+f*f);d/=h,f/=h;const g=l.vx-u.vx,x=l.vz-u.vz,m=g*d+x*f;if(m<=0)return;const p=(1+Ht.E_BALL)/2*m;l.vx-=p*d,l.vz-=p*f,u.vx+=p*d,u.vz+=p*f;const w=l.mode==="cue"?t.i:u.mode==="cue"?t.j:-1;if(l.mode==="rest"&&(l.mode="roll"),u.mode==="rest"&&(u.mode="roll"),w>=0){const M=e[w],y=e[w===t.i?t.j:t.i],C=w===t.i?1:-1;i.events.push({type:"contact",t:i.t,gx:M.x,gz:M.z,nx:d*C,nz:f*C,v8x:y.vx,v8z:y.vz,cutCos:m/Math.sqrt(g*g+x*x),spin:M.spin,top:M.top}),y.spin=M.spin,y.top=M.top,y.curveS=0,y.slowT=0,M.mode="ghost",M.spin=0,M.top=0,M.fadeT=Ht.CUE_FADE_T}else i.events.push({type:"ballHit",t:i.t,speed:m});return}const n=e[t.i];let s,r;if(t.kind===Tl)s=t.nx,r=t.nz;else{s=(n.x-t.cx)*t.sign,r=(n.z-t.cz)*t.sign;const l=Math.sqrt(s*s+r*r);s/=l,r/=l}const o=n.vx*s+n.vz*r;if(o>=0)return;const a=n.vx-o*s,c=n.vz-o*r;n.vx=a*t.keep-t.e*o*s,n.vz=c*t.keep-t.e*o*r,n.spin=0,n.top=0,i.events.push({type:"wall",t:i.t,id:n.id,x:n.x,z:n.z,nx:s,nz:r,speed:-o,kind:t.ck})}function Cc(i,t){t.vx=0,t.vz=0,t.mode="rest",t.slowT=0,t.spin=0,t.top=0,i.events.push({type:"rest",t:i.t,id:t.id,x:t.x,z:t.z})}function Tp(i,t,e){if(t.mode==="ghost"){t.fadeT-=e,t.fadeT<=0&&(t.mode="off");return}if(t.mode!=="cue"&&t.mode!=="roll")return;const n=i.hazardAt(t.x,t.z);if(n){t.mode==="cue"?(t.mode="off",i.events.push({type:"whiff",t:i.t,reason:n,x:t.x,z:t.z})):(t.mode="sunk",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:n,t:i.t,id:t.id,x:t.x,z:t.z,dropX:i.lieX,dropZ:i.lieZ}));return}if(t.mode==="cue"){t.travel>Ht.CUE_MAX_TRAVEL&&(t.mode="ghost",t.fadeT=Ht.CUE_FADE_T,i.events.push({type:"whiff",t:i.t,reason:"miss",x:t.x,z:t.z}));return}const s=t.x-i.hole.x,r=t.z-i.hole.z,o=s*s+r*r,a=Dr(t);if(o<Ht.HOLE_R*Ht.HOLE_R){let c=a<Ht.HOLE_SETTLE_V;if(!c&&!t.overHole&&(c=a<=Ht.HOLE_VCAP,c||(t.vx*=Ht.HOP_KEEP,t.vz*=Ht.HOP_KEEP,i.events.push({type:"hop",t:i.t,id:t.id,x:t.x,z:t.z,speed:a,vcap:Ht.HOLE_VCAP}))),t.overHole=!0,c){t.mode="holed",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:"holed",t:i.t,id:t.id,speed:a});return}}else t.overHole=!1;if(a===0||a<Ht.V_SLEEP&&t.slopeA2<t.decel*t.decel){Cc(i,t);return}a<Ht.SLOW_V?(t.slowT+=e,t.slowT>Ht.SLOW_MAX_T&&Cc(i,t)):t.slowT=0}function lr(i,t,e){const n=i.balls[1],s=t-n.x,r=e-n.z,o=s*s+r*r,a=2*Ht.R+Ht.PLACE_GAP;return o>i.placeR*i.placeR||o<a*a?!1:Ap(i,t,e)&&!Oh(i,n.x,n.z,t,e)}function Oh(i,t,e,n,s){const r=n-t,o=s-e;for(const c of i.segs){const l=r*c.ez-o*c.ex;if(l===0)continue;const u=c.ax-t,d=c.az-e,f=(u*c.ez-d*c.ex)/l,h=(u*o-d*r)/l;if(f>0&&f<1&&h>=0&&h<=1)return!0}const a=r*r+o*o;for(const c of i.arcs){const l=t-c.x,u=e-c.z,d=l*r+u*o,f=l*l+u*u-c.r*c.r,h=d*d-a*f;if(h<0||a===0)continue;const g=Math.sqrt(h);for(const x of[(-d-g)/a,(-d+g)/a]){if(!(x>0&&x<1))continue;const m=l+r*x,p=u+o*x;if(c.sx*p-c.sz*m>=0&&m*c.ez-p*c.ex>=0)return!0}}return!1}function Ap(i,t,e){const n=Ht.R;if(i.hazardAt(t,e))return!1;for(const s of i.segs){let r=((t-s.ax)*s.ex+(e-s.az)*s.ez)/s.len2;r=r<0?0:r>1?1:r;const o=s.ax+s.ex*r-t,a=s.az+s.ez*r-e;if(o*o+a*a<n*n)return!1}for(const s of i.posts){const r=s.x-t,o=s.z-e,a=s.r+n;if(r*r+o*o<a*a)return!1}for(const s of i.arcs){const r=t-s.x,o=e-s.z,a=Math.sqrt(r*r+o*o);if(s.sx*o-s.sz*r>=0&&r*s.ez-o*s.ex>=0&&a>s.r-n&&a<s.r+n)return!1}for(const s of i.caps){const r=s.x-t,o=s.z-e;if(r*r+o*o<n*n)return!1}return!0}function $r(i,t,e,n){return i.filter(s=>{const r=t<s.minx?s.minx:t>s.maxx?s.maxx:t,o=e<s.minz?s.minz:e>s.maxz?s.maxz:e,a=r-t,c=o-e;return a*a+c*c<=n*n})}function Cp(i,t,e){const n=Ht.CUE_MAX_TRAVEL+2*Ht.R+.5;return{t:i.t,shotT:i.shotT,active:!1,balls:i.balls.map(s=>({...s})),segs:$r(i.segs,t,e,n),caps:$r(i.caps,t,e,n),posts:$r(i.posts,t,e,n),arcs:$r(i.arcs,t,e,n),hole:i.hole,placeR:i.placeR,lieX:i.lieX,lieZ:i.lieZ,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function hu(i,t,e,n,s=3){const r=Cp(i,t.x,t.z);Dh(r,t,e,n);const o=r.balls[0],a=r.balls[1],c=[t.x,t.z],l=Math.ceil((Ht.CUE_MAX_TRAVEL+1)/(Lh(n)*Ht.DT))+4;for(let u=1;u<=l;u++){Nh(r);for(let d=0;d<r.events.length;d++){const f=r.events[d];if(f.type==="wall"&&f.id===0)c.push(f.x,f.z);else if(f.type==="contact"){c.push(f.gx,f.gz);const h=Math.sqrt(f.v8x*f.v8x+f.v8z*f.v8z);return{hit:!0,points:c,ghost:{x:f.gx,z:f.gz},normal:{x:f.nx,z:f.nz},eightDir:{x:f.v8x/h,z:f.v8z/h},eightSpeed:h,cutCos:f.cutCos,spin:f.spin,top:f.top,eightStart:{x:a.x,z:a.z},reason:null}}else if(f.type==="whiff")return c.push(f.x,f.z),{hit:!1,points:c,reason:f.reason}}r.events.length=0,u%s===0&&c.push(o.x,o.z)}return{hit:!1,points:c,reason:"miss"}}const In={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function Rp(i,t,e,n,s,r,o=14,a=3){const l=[t,e];let u=Math.sqrt(n*n+s*s);n/=u,s/=u;let d=0,f=null,h=null,g=!1,x=o;const m=Ih(r);let p=m.side;const w=m.top,M={vx:n,vz:s};for(let y=0;y<400&&d<x;y++){const C=x-d<.25?x-d:.25;if(p!==0)if(w===0){const v=1-d/Ht.EIGHT_CURVE_LEN;v>0&&zr(M,Ht.EIGHT_CURVE_K*p*v*C,1)}else{const v=Uh(d,w);v>0&&zr(M,v*p*C,1)}const R=Fh(i,t,e,M.vx,M.vz,Ht.R,C,In);if(R!==Bi&&!f){t+=M.vx*R,e+=M.vz*R,d+=R,l.push(t,e);let v,A;In.kind===Tl?(v=In.nx,A=In.nz):(v=(t-In.cx)*In.sign,A=(e-In.cz)*In.sign,u=Math.sqrt(v*v+A*A),v/=u,A/=u);const U=M.vx*v+M.vz*A,F=(M.vx-U*v)*In.keep-In.e*U*v,H=(M.vz-U*A)*In.keep-In.e*U*A;u=Math.sqrt(F*F+H*H),M.vx=F/u,M.vz=H/u,f={x:t,z:e},p=0,x=d+a;continue}if(R!==Bi){t+=M.vx*R,e+=M.vz*R,l.push(t,e);break}t+=M.vx*C,e+=M.vz*C,d+=C,l.push(t,e);const E=i.hazardAt(t,e);if(E){h=E;break}const S=t-i.hole.x,_=e-i.hole.z;S*S+_*_<Ht.HOLE_R*Ht.HOLE_R&&(g=!0)}return{points:l,hazard:h,bounce:f,cup:g}}function Pp(i,t,e,n=240){e.acc+=t>.25?.25:t;let s=0;for(;e.acc>=Ht.DT&&s<n;)Nh(i),e.acc-=Ht.DT,s++;return s>=n&&(e.acc=0),e.acc/Ht.DT}function Lp(i,t,e,n,s=0,r=0){return(o,a)=>{let c=(o-s)/n,l=(a-r)/n;c=c<0?0:c>t-1.000001?t-1.000001:c,l=l<0?0:l>e-1.000001?e-1.000001:l;const u=c|0,d=l|0,f=c-u,h=l-d,g=d*t+u,x=i[g]+(i[g+1]-i[g])*f,m=i[g+t]+(i[g+t+1]-i[g+t])*f;return x+(m-x)*h}}const bi=.25,jr=4,Ip=Object.freeze({oob:0,fairway:1,green:2,rough:3,sand:4,water:5,ice:6}),Dp=Object.freeze(["oob","fairway","green","rough","sand","water","ice"]),ur=i=>({x:i[0],z:-i[1]});function Rc(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[s][0],a=i[s][1],c=i[r][0],l=i[r][1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function zp(i,t,e){let n=1/0;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[r][0],a=i[r][1],c=i[s][0]-o,l=i[s][1]-a,u=c*c+l*l||1e-12;let d=((t-o)*c+(e-a)*l)/u;d=d<0?0:d>1?1:d;const f=o+c*d-t,h=a+l*d-e,g=Math.sqrt(f*f+h*h);g<n&&(n=g)}return n}const kh=i=>[[i[0],i[1]],[i[2],i[1]],[i[2],i[3]],[i[0],i[3]]];function Pc(i){if(i.poly)return i.poly;if(i.rect)return kh(i.rect);const t=i.circle?{c:i.circle.c,rx:i.circle.r,ry:i.circle.r,rot:0}:i.ellipse;if(!t)throw new Error("zone without a shape");const e=48,n=Math.cos((t.rot||0)*Math.PI/180),s=Math.sin((t.rot||0)*Math.PI/180),r=[];for(let o=0;o<e;o++){const a=o/e*Math.PI*2,c=Math.cos(a)*t.rx,l=Math.sin(a)*t.ry;r.push([t.c[0]+c*n-l*s,t.c[1]+c*s+l*n])}return r}const ya=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function Np(i){const t=i.steps||[],e=i.hills||[],n=(i.plateaus||[]).map(r=>({pts:Pc(r),h:r.h,ramp:r.ramp??2,linear:!!r.linear})),s=i.tilt||[0,0];return(r,o)=>{let a=s[0]*r+s[1]*o;for(const c of t){const l=c.axis==="y"?o:r;if(c.band){const d=c.axis==="y"?r:o;if(d<c.band[0]||d>c.band[1])continue}const u=(l-c.from)/(c.to-c.from);a+=c.h*(c.smooth?ya(u):u<=0?0:u>=1?1:u)}for(const c of e){const l=r-c.c[0],u=o-c.c[1],d=Math.sqrt(l*l+u*u),f=c.flat||0;d<c.r&&(a+=c.h*ya(1-(d-f)/(c.r-f)))}for(const c of n)if(Rc(c.pts,r,o))a+=c.h;else{const l=zp(c.pts,r,o);l<c.ramp&&(a+=c.h*(c.linear?1-l/c.ramp:ya(1-l/c.ramp)))}return a}}function Bh(i){const[t,e]=i.size,n=i.ground||kh([0,0,t,e]),s=i.border===void 0?"wall":i.border,r=[];s&&r.push({kind:s,pts:n,closed:!0,border:!0});for(const S of i.walls||[])r.push({kind:S.kind||"wall",pts:S.pts,closed:!!S.closed,h:S.h});const o=[],a=[];for(const S of i.arcs||[]){let _=S.from;const v=S.to;if(!(v>_))throw new Error(i.id+": arc needs to > from");for(a.push({kind:S.kind||"wall",c:S.c,r:S.r,from:_,to:v});_<v-1e-9;){const A=Math.min(v,_+180),U=A*Math.PI/180,F=_*Math.PI/180;o.push({kind:S.kind||"wall",x:S.c[0],z:-S.c[1],r:S.r,sx:Math.cos(U),sz:-Math.sin(U),ex:Math.cos(F),ez:-Math.sin(F)}),_=A}}const c=[];for(const S of r){const _=S.pts.length,v=S.closed?_:_-1;for(let A=0;A<v;A++){const U=S.pts[A],F=S.pts[(A+1)%_];c.push({ax:U[0],az:-U[1],bx:F[0],bz:-F[1],kind:S.kind})}}const l=(i.posts||[]).map(S=>({x:S.at[0],z:-S.at[1],r:S.r,kind:S.kind||"post"})),u=-jr,d=-(e+jr),f=Math.round((t+2*jr)/bi)+1,h=Math.round((e+2*jr)/bi)+1,g=Np(i),x=new Float64Array(f*h),m=new Uint8Array(f*h),p=(i.zones||[]).map(S=>{const _=Ip[S.surface];if(_===void 0||_===0)throw new Error(i.id+": unknown surface "+S.surface);return{code:_,pts:Pc(S)}});for(let S=0;S<h;S++){const v=-(d+S*bi);for(let A=0;A<f;A++){const U=u+A*bi,F=S*f+A;x[F]=g(U,v);let H=Rc(n,U,v)?1:0;if(H)for(const st of p)Rc(st.pts,U,v)&&(H=st.code);m[F]=H}}const w=Lp(x,f,h,bi,u,d),M=(S,_)=>{let v=Math.round((S-u)/bi),A=Math.round((_-d)/bi);return v=v<0?0:v>=f?f-1:v,A=A<0?0:A>=h?h-1:A,m[A*f+v]},y=(S,_)=>Dp[M(S,_)],C=(S,_)=>{const v=M(S,_);return v===0?"oob":v===5?"water":null},R=ur(i.tee),E=ur(i.cup);return{hole:i,id:i.id,name:i.name,par:i.par,round:i.round,spin:!0,tip:i.tip||null,placeR:i.circle,eight:R,tee:R,cup:E,segments:c,posts:l,arcs:o,surfaceAt:y,heightAt:w,hazardAt:C,grid:{cell:bi,cols:f,rows:h,x0:u,z0:d,height:x,surface:m},bounds:{minx:0,maxx:t,minz:-e,maxz:0},ground:n.map(ur),walls:r.map(S=>({kind:S.kind,closed:S.closed,border:!!S.border,h:S.h,pts:S.pts.map(ur)})),arcsRender:a.map(S=>({kind:S.kind,x:S.c[0],z:-S.c[1],r:S.r,from:S.from,to:S.to})),props:(i.props||[]).map(S=>({...S,x:S.at[0],z:-S.at[1]})),zones:(i.zones||[]).map(S=>({surface:S.surface,pts:Pc(S).map(ur)})),camera:i.camera||null}}function Up(i){return xp({eight:i.eight,hole:i.cup,placeR:i.placeR,segments:i.segments,posts:i.posts,arcs:i.arcs,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt})}const Fp=4,Op=5;function kp(i){return{par:i,strokes:0,penalties:0,done:!1,holed:!1,picked:!1}}function Bp(i,t){if(i.done)return{penalty:0,done:!0,picked:i.picked};i.strokes+=1;let e=0;return t.holed?(i.done=!0,i.holed=!0,{penalty:e,done:!0,picked:!1}):(t.hazard&&(e=1,i.penalties+=1,i.strokes+=1),i.strokes>=i.par+Fp&&(i.done=!0,i.picked=!0),{penalty:e,done:i.done,picked:i.picked})}function Hp(i){return i.picked?i.par+Op:i.strokes}function Gp(i,t,e=!1){return e?0:i===1||i<=t-1?3:i<=t?2:1}function Lc(i,t,e=!1){if(e)return{key:"picked",label:"Picked up"};if(i===1)return{key:"ace",label:"Hole-in-one!"};const n=i-t;return n<=-3?{key:"albatross",label:"Albatross!"}:n===-2?{key:"eagle",label:"Eagle!"}:n===-1?{key:"birdie",label:"Birdie!"}:n===0?{key:"par",label:"Par"}:n===1?{key:"bogey",label:"Bogey"}:n===2?{key:"double",label:"Double bogey"}:{key:"over",label:"+"+n}}function Ic(i,t){const e=i-t;return e===0?"E":e>0?"+"+e:String(e)}const Vp=.9,Wp=1.2,Xp=14,du=1.8,qp=1.5,pu=15.5,Yp=3,Hh=[0,15,-15,30,-30,45,-45,60,-60,72,-72,80,-80,85,-85,89,-89].map(i=>i*Math.PI/180),Sa=Hh.map(Math.cos),mu=Hh.map(Math.sin);function Kp({events:i}){const t=(E,S)=>i&&i.emit(E,S),e={acc:0},n={state:"idle",level:null,index:-1,world:null,score:null,intent:{x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},lastPower:.5,speed:1,pace:du,shotContact:!1,shotHazard:null,shotHoled:!1,dropAt:null,timer:0,_guideKey:"",_guide:null},s=[r(),r()];function r(){return{x:0,y:0,z:0,visible:!1,alpha:1,mode:"off",vx:0,vz:0}}function o(){const E=n.intent,S=n.world.balls[1];let _=S.x-E.x,v=S.z-E.z;const A=Math.sqrt(_*_+v*v)||1;_/=A,v/=A;const U=Math.cos(E.offset),F=Math.sin(E.offset),H=_*U-v*F,st=_*F+v*U,J=u(E,H,st);n.intent={...E,ax:H,az:st,dx:J.x,dz:J.z},n._guideKey=""}const a=E=>E.power<Ht.POWER_MIN?Ht.POWER_MIN:E.power,c=E=>({x:E.spin,y:E.top}),l=(E,S,_)=>{const v=Math.cos(_),A=Math.sin(_);return{x:E*v-S*A,z:E*A+S*v}};function u(E,S,_){if(!E.spin)return{x:S,z:_};const v=n.world.balls[1],A=v.x-E.x,U=v.z-E.z,F=A*S+U*_,H=S*U-_*A,st=2*Ht.R,J=F>0&&H*H<st*st,xt=J?F-Math.sqrt(st*st-H*H):F>0?F:0,et=xt>1e-6?-d(E.spin,xt):0;if(!J)return l(S,_,et);const V=E.x+S*xt,N=E.z+_*xt,W=(v.x-V)/st,Z=(v.z-N)/st,it=a(E),O=c(E),j=tt=>{const gt=l(S,_,tt),B=hu(n.world,{x:E.x,z:E.z,dx:gt.x,dz:gt.z},O,it,1e9);return B.hit?W*B.normal.z-Z*B.normal.x:null};let pt=et,k=j(pt);if(k===null)return l(S,_,et);let rt=pt,ht=Math.abs(k),Mt=pt+.02,Rt=j(Mt);for(let tt=0;tt<10&&Rt!==null&&(Math.abs(Rt)<ht&&(rt=Mt,ht=Math.abs(Rt)),!(ht<1e-7||Rt===k));tt++){let gt=-Rt*(Mt-pt)/(Rt-k);gt=gt>.3?.3:gt<-.3?-.3:gt,pt=Mt,k=Rt,Mt+=gt,Rt=j(Mt)}return l(S,_,rt)}function d(E,S){const _=Ht.CURVE_K*E,v=Ht.CURVE_LEN,A=.02;let U=0,F=0,H=0;for(let st=0;st<2e3&&U*U+F*F<S*S;st++){const J=H<v?_*(H-H*H/(2*v)):_*v/2;U+=Math.cos(J)*A,F+=Math.sin(J)*A,H+=A}return Math.atan2(F,U)}function f(){const E=n.world,S=E.balls[1];let _=E.hole.x-S.x,v=E.hole.z-S.z;const A=Math.sqrt(_*_+v*v)||1;_/=A,v/=A;const U=Math.min(.6*E.placeR,2.5),F=p(S.x-_*U,S.z-v*U)||p(S.x-_*1.6,S.z-v*1.6)||{x:S.x-_*1.2,z:S.z-v*1.2};n.intent={...n.intent,x:F.x,z:F.z,offset:0,spin:0,top:0,power:n.lastPower},o()}let h=NaN,g=NaN;function x(E,S,_,v){const A=n.world,U=(pt,k)=>lr(A,pt,k),F=h===h?Math.sqrt((_-h)*(_-h)+(v-g)*(v-g)):1/0;h=_,g=v;const H=A.balls[1],st=_-H.x,J=v-H.z,xt=Math.sqrt(st*st+J*J),et=A.placeR-.001;if(xt>et&&(_=H.x+st/xt*et,v=H.z+J/xt*et),U(_,v))return{x:_,z:v};let V=2*F+.1,N=E,W=S,Z=Math.sqrt((_-N)*(_-N)+(v-W)*(v-W));const it=Z/16>.25?.25:Z/16<.04?.04:Z/16;let O=it;for(let pt=0;pt<600&&Z>1e-4&&O>=.01&&V>1e-4;pt++){const k=(_-N)/Z,rt=(v-W)/Z,ht=O<Z?O<V?O:V:Z<V?Z:V;let Mt=0,Rt=0,tt=Z-1e-5;for(let gt=0;gt<Sa.length;gt++){const B=k*Sa[gt]-rt*mu[gt],Q=k*mu[gt]+rt*Sa[gt],It=N+B*ht,jt=W+Q*ht,Bt=Math.sqrt((_-It)*(_-It)+(v-jt)*(v-jt));if(Bt<tt&&U(It,jt)&&(Mt=It,Rt=jt,tt=Bt),tt<Z-1e-5&&(gt===0||gt%2===0))break}tt<Z-1e-5?(N=Mt,W=Rt,Z=tt,V-=ht,O=O*2>it?it:O*2):O/=2}const j=Z>1e-9&&V<Z?V>0?V/Z:0:1;return m(U,N,W,N+(_-N)*j,W+(v-W)*j)}function m(E,S,_,v,A){let U=0,F=1;for(let H=0;H<16;H++){const st=(U+F)/2;E(S+(v-S)*st,_+(A-_)*st)?U=st:F=st}return{x:S+(v-S)*U,z:_+(A-_)*U}}function p(E,S){const _=n.world;if(lr(_,E,S))return{x:E,z:S};const v=_.balls[1];let A=E-v.x,U=S-v.z,F=Math.sqrt(A*A+U*U);const H=2*Ht.R+Ht.PLACE_GAP+.01,st=_.placeR-.01;if(F>st&&(A*=st/F,U*=st/F,F=st),F<H){const V=F>1e-6?H/F:0;A=F>1e-6?A*V:-H,U=F>1e-6?U*V:0,F=H}if(lr(_,v.x+A,v.z+U))return{x:v.x+A,z:v.z+U};const J=Math.atan2(U,A);let xt=null,et=1/0;for(let V=H;V<=st+1e-9;V+=.25)for(let N=0;N<72;N++){const W=J+N*Math.PI/36,Z=v.x+Math.cos(W)*V,it=v.z+Math.sin(W)*V;if(!lr(_,Z,it))continue;const O=(Z-E)*(Z-E)+(it-S)*(it-S);O<et&&(et=O,xt={x:Z,z:it})}return xt}n.load=(E,S)=>{n.level=E,n.index=S,n.world=Up(E),n.score=kp(E.par),n.lastPower=.5,n.speed=1,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,n.timer=0,e.acc=0,n.intent={x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},f(),n.state="ready",t("hole:start",{level:E,index:S}),t("shot:ready",{strokes:0,par:E.par,first:!0})},n.retry=()=>n.load(n.level,n.index),n.setPlacement=(E,S)=>{if(n.state!=="ready")return!1;const _=n.intent,v=lr(n.world,_.x,_.z)?x(_.x,_.z,E,S):p(E,S);return!v||v.x===_.x&&v.z===_.z?!1:(n.intent={...n.intent,x:v.x,z:v.z},o(),!0)},n.setAimToward=(E,S)=>{if(n.state!=="ready")return;const _=n.intent,v=n.world.balls[1],A=v.x-_.x,U=v.z-_.z,F=E-_.x,H=S-_.z;F*F+H*H<1e-6||(n.intent={..._,offset:Math.atan2(A*H-U*F,A*F+U*H)},o())},n.rotateAim=E=>{if(n.state!=="ready")return;let S=n.intent.offset+E;for(;S>Math.PI;)S-=2*Math.PI;for(;S<-Math.PI;)S+=2*Math.PI;n.intent={...n.intent,offset:S},o()},n.setSpin=(E,S)=>{const _=n.intent,v=!!(n.level&&n.level.spin),A=S===void 0?_.top:S;let U=v&&E===E?E<-1?-1:E>1?1:E:0,F=v&&A===A?A<-1?-1:A>1?1:A:0;const H=U*U+F*F;if(H>1){const st=1/Math.sqrt(H);U*=st,F*=st}U===_.spin&&F===_.top||(n.intent={..._,spin:U,top:F},n.world&&o())},n.setPower=E=>{const S=E<0?0:E>1?1:E;S!==n.intent.power&&(n.intent={...n.intent,power:S},n.intent.spin&&n.world?o():n._guideKey="")},n.guide=()=>{if(!n.world||n.state!=="ready")return null;const E=n.intent,S=a(E),_=E.x+","+E.z+","+E.dx+","+E.dz+","+E.spin+","+E.top+","+S;if(_===n._guideKey)return n._guide;const v=hu(n.world,E,c(E),S);let A=null;return v.hit&&(A=Rp(n.world,v.eightStart.x,v.eightStart.z,v.eightDir.x,v.eightDir.z,{x:v.spin,y:v.top},Xp,Yp)),n._guide={cue:v,eight:A,warn:!v.hit||!!(A&&A.hazard)},n._guideKey=_,n._guide},n.fire=()=>{if(n.state!=="ready")return!1;const E=n.intent,S=a(E);return n.lastPower=S,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,e.acc=0,Dh(n.world,E,c(E),S),n.state="rolling",t("shot:fire",{power:S,spin:E.spin,top:E.top,strokes:n.score.strokes+1}),!0},n.setSpeed=E=>{n.speed=E>1?E:1};function w(){const E=n.world.events;for(let S=0;S<E.length;S++){const _=E[S];switch(_.type){case"contact":n.shotContact=!0,t("ball:contact",{x:_.gx,z:_.gz,nx:_.nx,nz:_.nz,speed:Math.sqrt(_.v8x*_.v8x+_.v8z*_.v8z),cutCos:_.cutCos,spin:_.spin,top:_.top});break;case"wall":t("ball:wall",{id:_.id,x:_.x,z:_.z,nx:_.nx,nz:_.nz,speed:_.speed,kind:_.kind});break;case"hop":t("ball:hop",{x:_.x,z:_.z,speed:_.speed});break;case"holed":n.shotHoled=!0,t("ball:holed",{speed:_.speed});break;case"water":case"oob":n.shotHazard=_.type,n.dropAt={x:_.dropX,z:_.dropZ},t("ball:hazard",{kind:_.type,x:_.x,z:_.z});break;case"whiff":t("ball:whiff",{reason:_.reason,x:_.x,z:_.z});break;case"rest":t("ball:rest",{id:_.id,x:_.x,z:_.z});break;case"ballHit":t("ball:ballhit",{speed:_.speed});break;case"shotEnd":M();break}}E.length=0}function M(){const E=Bp(n.score,{holed:n.shotHoled,hazard:n.shotHazard});t("shot:end",{strokes:n.score.strokes,par:n.score.par,penalty:E.penalty,whiff:!n.shotContact,outcome:n.shotHoled?"holed":n.shotHazard||"rest",picked:E.picked}),n.state="resolving",n.timer=n.shotHoled?Wp:n.shotHazard?Vp:E.done?.6:0}function y(){const E=n.score;if(E.done){n.state="done";const S=Hp(E);t("hole:done",{index:n.index,level:n.level,strokes:S,par:E.par,picked:E.picked,penalties:E.penalties,stars:Gp(S,E.par,E.picked),term:Lc(S,E.par,E.picked)});return}if(n.dropAt)cu(n.world,n.dropAt.x,n.dropAt.z),t("ball:drop",{x:n.dropAt.x,z:n.dropAt.z}),n.dropAt=null;else{const S=n.world.balls[1];cu(n.world,S.x,S.z)}n.world.balls[0].mode="off",f(),n.state="ready",t("shot:ready",{strokes:E.strokes,par:E.par,first:!1})}function C(){let E=0;const S=n.world.balls;for(let v=0;v<S.length;v++){const A=S[v];if(A.mode!=="cue"&&A.mode!=="roll")continue;const U=A.vx*A.vx+A.vz*A.vz;U>E&&(E=U)}const _=E/(pu*pu);return du*(1+qp*(_>1?1:_))}let R=0;return n.update=E=>{if(n.state==="rolling"){const S=C();n.pace=S,R=Pp(n.world,E*S*n.speed,e,Math.ceil(240*S*n.speed)+1),w()}else n.state==="resolving"&&(n.timer-=E,n.timer<=0&&y())},n.balls=()=>{const E=n.world;if(!E)return s;const S=n.state==="rolling";for(let _=0;_<2;_++){const v=E.balls[_],A=s[_],U=S?R:1;A.x=v.px+(v.x-v.px)*U,A.z=v.pz+(v.z-v.pz)*U,A.mode=v.mode,A.vx=v.vx,A.vz=v.vz,A.visible=v.mode!=="off"&&v.mode!=="sunk"&&v.mode!=="holed",A.alpha=v.mode==="ghost"?Math.max(0,v.fadeT/Ht.CUE_FADE_T):1,A.y=E.heightAt(A.x,A.z)+Ht.R}if(n.state==="ready"){const _=s[0];_.x=n.intent.x,_.z=n.intent.z,_.mode="placed",_.visible=!0,_.alpha=1,_.vx=0,_.vz=0,_.y=E.heightAt(_.x,_.z)+Ht.R}if(s[1].mode==="holed"||n.shotHoled){const _=s[1];_.visible=!0,_.x=E.hole.x,_.z=E.hole.z,_.y=E.heightAt(_.x,_.z)-Ht.R*.9}return s},n}const gu="eightballgolf.progress",$o=Object.freeze([{id:"classic",name:"Classic",need:0},{id:"tennis",name:"Tennis",need:9},{id:"beach",name:"Beach ball",need:18},{id:"planet",name:"Planet",need:27},{id:"donut",name:"Donut",need:36},{id:"snow",name:"Snowball",need:45},{id:"gold",name:"Gold",need:54}]),wa=(i,t,e)=>Number.isInteger(i)&&i>=t&&i<=e?i:null;function $p(i,t){const e=i&&typeof i=="object"?i:{},n=Array.isArray(e.holes)?e.holes:[],s=[];for(let c=0;c<t;c++){const l=n[c]&&typeof n[c]=="object"?n[c]:{},u=wa(l.best,1,99);s.push({best:u,stars:u===null?0:wa(l.stars,0,3)??0})}const r=Array.isArray(e.seenTips)?[...new Set(e.seenTips.filter(c=>typeof c=="string"&&c.length<40))].slice(0,200):[],o=$o.some(c=>c.id===e.skin)?e.skin:"classic",a=wa(e.last,0,Math.max(0,t-1));return{v:1,holes:s,skin:o,seenTips:r,muted:e.muted===!0,last:a}}async function jp(i,t={}){const e=t.rounds||Br,n=e.flatMap(h=>h.holes.map(g=>g.par)),s=n.length,r=new Map;let o=0;for(const h of e)r.set(h.id,o),o+=h.holes.length;let a=null;try{const h=i&&i.load?await i.load(gu):null;typeof h=="string"&&h.length&&(a=JSON.parse(h))}catch{a=null}const c=$p(a,s);Zp(c.skin)>Zr(c)&&(c.skin="classic");function l(){if(!(!i||!i.save))try{const h=i.save(gu,JSON.stringify(c));h&&typeof h.catch=="function"&&h.catch(()=>{})}catch{}}const u=h=>Number.isInteger(h)&&h>=0&&h<s,d=()=>{let h=-1;for(let g=0;g<s;g++)c.holes[g].best!==null&&(h=g);return h},f={data:c,get skin(){return c.skin},get muted(){return c.muted},holeCount:s,isUnlocked(h){return u(h)&&h<=d()+1},best(h){return u(h)?c.holes[h].best:null},stars(h){return u(h)?c.holes[h].stars:0},totalStars(){return Zr(c)},roundStars(h){const g=r.get(h),x=e.find(p=>p.id===h);if(g===void 0||!x)return 0;let m=0;for(let p=0;p<x.holes.length;p++)m+=c.holes[g+p].stars;return m},roundTotal(h){const g=r.get(h),x=e.find(M=>M.id===h);if(g===void 0||!x)return{total:0,par:0,complete:!1};let m=0,p=0,w=!0;for(let M=0;M<x.holes.length;M++){p+=n[g+M];const y=c.holes[g+M].best;y===null?w=!1:m+=y}return{total:m,par:p,complete:w}},record(h,g,x){if(!u(h))return{newBest:!1,newStars:!1,firstTime:!1};const m=c.holes[h],p=Math.max(1,Math.round(Number(g)||1)),w=Math.max(0,Math.min(3,Math.round(Number(x)||0))),M=m.best===null,y=m.best===null||p<m.best,C=w>m.stars;return y&&(m.best=p),C&&(m.stars=w),c.last=h,l(),{newBest:y,newStars:C,firstTime:M}},nextIndex(){for(let h=0;h<s;h++)if(c.holes[h].best===null)return f.isUnlocked(h)?h:0;for(let h=0;h<s;h++)if(c.holes[h].stars<3)return h;return c.last??0},skins(){const h=Zr(c);return $o.map(g=>({...g,unlocked:h>=g.need}))},setSkin(h){const g=$o.find(x=>x.id===h);return!g||g.need>Zr(c)||c.skin===h?!1:(c.skin=h,l(),!0)},seenTip(h){return c.seenTips.includes(String(h))},markTip(h){h==null||f.seenTip(h)||(c.seenTips.push(String(h)),l())},setMuted(h){c.muted!==!!h&&(c.muted=!!h,l())},isFresh(){return d()<0}};return f}function Zr(i){let t=0;for(const e of i.holes)t+=e.stars;return t}function Zp(i){const t=$o.find(e=>e.id===i);return t?t.need:1/0}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Al="170",Jp=0,xu=1,Qp=2,Cl=1,t0=2,di=3,Hi=0,vn=1,An=2,Ui=0,Ws=1,vu=2,_u=3,Mu=4,Gh=5,Ni=100,e0=101,n0=102,i0=103,s0=104,r0=200,Dc=201,o0=202,a0=203,zc=204,Nr=205,c0=206,l0=207,u0=208,f0=209,h0=210,d0=211,p0=212,m0=213,g0=214,Nc=0,Uc=1,Fc=2,js=3,Oc=4,kc=5,Bc=6,Hc=7,oa=0,x0=1,v0=2,Fi=0,_0=1,M0=2,y0=3,S0=4,w0=5,b0=6,Vh=7,Wh=300,Zs=301,Js=302,Gc=303,Vc=304,aa=306,jo=1e3,vi=1001,Wc=1002,Pn=1003,E0=1004,Jr=1005,kn=1006,ba=1007,cs=1008,oi=1009,Xh=1010,qh=1011,Ur=1012,Rl=1013,hs=1014,si=1015,Hr=1016,Pl=1017,Ll=1018,Qs=1020,Yh=35902,Kh=1021,$h=1022,Bn=1023,jh=1024,Zh=1025,Xs=1026,tr=1027,Il=1028,Dl=1029,Jh=1030,zl=1031,Nl=1033,Fo=33776,Oo=33777,ko=33778,Bo=33779,Xc=35840,qc=35841,Yc=35842,Kc=35843,$c=36196,jc=37492,Zc=37496,Jc=37808,Qc=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,ol=37816,al=37817,cl=37818,ll=37819,ul=37820,fl=37821,Ho=36492,hl=36494,dl=36495,Qh=36283,pl=36284,ml=36285,gl=36286,T0=3200,A0=3201,ca=0,C0=1,gi="",pn="srgb",sr="srgb-linear",la="linear",Ne="srgb",vs=7680,yu=519,R0=512,P0=513,L0=514,td=515,I0=516,D0=517,z0=518,N0=519,Su=35044,Oi=35048,wu="300 es",_i=2e3,Zo=2001;class rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bu=1234567;const Cr=Math.PI/180,Fr=180/Math.PI;function or(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function Ul(i,t){return(i%t+t)%t}function U0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function F0(i,t,e){return i!==t?(e-i)/(t-i):0}function Rr(i,t,e){return(1-e)*i+e*t}function O0(i,t,e,n){return Rr(i,t,1-Math.exp(-e*n))}function k0(i,t=1){return t-Math.abs(Ul(i,t*2)-t)}function B0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function H0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function G0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function V0(i,t){return i+Math.random()*(t-i)}function W0(i){return i*(.5-Math.random())}function X0(i){i!==void 0&&(bu=i);let t=bu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function q0(i){return i*Cr}function Y0(i){return i*Fr}function K0(i){return(i&i-1)===0&&i!==0}function $0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function j0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Z0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),h=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Os(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const xl={DEG2RAD:Cr,RAD2DEG:Fr,generateUUID:or,clamp:cn,euclideanModulo:Ul,mapLinear:U0,inverseLerp:F0,lerp:Rr,damp:O0,pingpong:k0,smoothstep:B0,smootherstep:H0,randInt:G0,randFloat:V0,randFloatSpread:W0,seededRandom:X0,degToRad:q0,radToDeg:Y0,isPowerOfTwo:K0,ceilPowerOfTwo:$0,floorPowerOfTwo:j0,setQuaternionFromProperEuler:Z0,normalize:gn,denormalize:Os};class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class be{constructor(t,e,n,s,r,o,a,c,l){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],M=s[4],y=s[7],C=s[2],R=s[5],E=s[8];return r[0]=o*x+a*w+c*C,r[3]=o*m+a*M+c*R,r[6]=o*p+a*y+c*E,r[1]=l*x+u*w+d*C,r[4]=l*m+u*M+d*R,r[7]=l*p+u*y+d*E,r[2]=f*x+h*w+g*C,r[5]=f*m+h*M+g*R,r[8]=f*p+h*y+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=e*d+n*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=h*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new be;function ed(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function J0(){const i=Jo("canvas");return i.style.display="block",i}const Eu={};function yr(i){i in Eu||(Eu[i]=!0,console.warn(i))}function Q0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function tm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function em(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Le={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ne&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ne&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?la:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Tu=[.64,.33,.3,.6,.15,.06],Au=[.2126,.7152,.0722],Cu=[.3127,.329],Ru=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pu=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Le.define({[sr]:{primaries:Tu,whitePoint:Cu,transfer:la,toXYZ:Ru,fromXYZ:Pu,luminanceCoefficients:Au,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Tu,whitePoint:Cu,transfer:Ne,toXYZ:Ru,fromXYZ:Pu,luminanceCoefficients:Au,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});let _s;class nm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=Jo("canvas")),_s.width=t.width,_s.height=t.height;const n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let im=0;class nd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ta(s[o].image)):r.push(Ta(s[o]))}else r=Ta(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sm=0;class mn extends rr{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,n=vi,s=vi,r=kn,o=cs,a=Bn,c=oi,l=mn.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=or(),this.name="",this.source=new nd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Wh;mn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,e=0,n=0,s=1){He.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,y=(h+1)/2,C=(p+1)/2,R=(u+f)/4,E=(d+x)/4,S=(g+m)/4;return M>y&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=E/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=S/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=S/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-x)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends rr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends rm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class id extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class om extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const f=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==f||l!==h||u!==g){let m=1-a;const p=c*f+l*h+u*g+d*x,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),R=Math.atan2(C,p*w);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const y=a*w;if(c=c*m+f*y,l=l*m+h*y,u=u*m+g*y,d=d*m+x*y,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*h-l*f,t[e+1]=c*g+u*f+l*d-a*h,t[e+2]=l*g+u*h+a*f-c*d,t[e+3]=u*g-a*d-c*f-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,e=0,n=0){nt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new nt,Lu=new ms;class Wi{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),to.subVectors(this.max,fr),Ms.subVectors(t.a,fr),ys.subVectors(t.b,fr),Ss.subVectors(t.c,fr),Ei.subVectors(ys,Ms),Ti.subVectors(Ss,ys),qi.subVectors(Ms,Ss);let e=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-qi.z,qi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,qi.z,0,-qi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-qi.y,qi.x,0];return!Ca(e,Ms,ys,Ss,to)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,Ms,ys,Ss,to))?!1:(eo.crossVectors(Ei,Ti),e=[eo.x,eo.y,eo.z],Ca(e,Ms,ys,Ss,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ci=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Vn=new nt,Qr=new Wi,Ms=new nt,ys=new nt,Ss=new nt,Ei=new nt,Ti=new nt,qi=new nt,fr=new nt,to=new nt,eo=new nt,Yi=new nt;function Ca(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yi.fromArray(i,r);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),c=t.dot(Yi),l=e.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const am=new Wi,hr=new nt,Ra=new nt;class Xi{constructor(t=new nt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):am.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(Ra)),this.expandByPoint(hr.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new nt,Pa=new nt,no=new nt,Ai=new nt,La=new nt,io=new nt,Ia=new nt;class cm{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pa.copy(t).add(e).multiplyScalar(.5),no.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(Pa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(no),a=Ai.dot(this.direction),c=-Ai.dot(no),l=Ai.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pa).addScaledVector(no,f),h}intersectSphere(t,e){li.subVectors(t.center,this.origin);const n=li.dot(this.direction),s=li.dot(li)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,r){La.subVectors(e,t),io.subVectors(n,t),Ia.crossVectors(La,io);let o=this.direction.dot(Ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const c=a*this.direction.dot(io.crossVectors(Ai,io));if(c<0)return null;const l=a*this.direction.dot(La.cross(Ai));if(l<0||c+l>o)return null;const u=-a*Ai.dot(Ia);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),o=1/ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,h=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=h+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+h*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,h=c*d,g=l*u,x=l*d;e[0]=f+x*a,e[4]=g*a-h,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,h=c*d,g=l*u,x=l*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,h=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-h,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=h*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*d,e[8]=g*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*d+g,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+x,e[5]=o*u,e[9]=h*d-g,e[2]=g*d-h,e[6]=a*u,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lm,t,um)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ci.crossVectors(n,Sn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ci.crossVectors(n,Sn)),Ci.normalize(),so.crossVectors(Sn,Ci),s[0]=Ci.x,s[4]=so.x,s[8]=Sn.x,s[1]=Ci.y,s[5]=so.y,s[9]=Sn.y,s[2]=Ci.z,s[6]=so.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],M=n[7],y=n[11],C=n[15],R=s[0],E=s[4],S=s[8],_=s[12],v=s[1],A=s[5],U=s[9],F=s[13],H=s[2],st=s[6],J=s[10],xt=s[14],et=s[3],V=s[7],N=s[11],W=s[15];return r[0]=o*R+a*v+c*H+l*et,r[4]=o*E+a*A+c*st+l*V,r[8]=o*S+a*U+c*J+l*N,r[12]=o*_+a*F+c*xt+l*W,r[1]=u*R+d*v+f*H+h*et,r[5]=u*E+d*A+f*st+h*V,r[9]=u*S+d*U+f*J+h*N,r[13]=u*_+d*F+f*xt+h*W,r[2]=g*R+x*v+m*H+p*et,r[6]=g*E+x*A+m*st+p*V,r[10]=g*S+x*U+m*J+p*N,r[14]=g*_+x*F+m*xt+p*W,r[3]=w*R+M*v+y*H+C*et,r[7]=w*E+M*A+y*st+C*V,r[11]=w*S+M*U+y*J+C*N,r[15]=w*_+M*F+y*xt+C*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],h=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*h-n*c*h)+x*(+e*c*h-e*l*f+r*o*f-s*o*h+s*l*u-r*c*u)+m*(+e*l*d-e*a*h-r*o*d+n*o*h+r*a*u-n*l*u)+p*(-s*a*u-e*c*d+e*a*f+s*o*d-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],h=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=d*m*l-x*f*l+x*c*h-a*m*h-d*c*p+a*f*p,M=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,y=u*x*l-g*d*l+g*a*h-o*x*h-u*a*p+o*d*p,C=g*d*c-u*x*c-g*a*f+o*x*f+u*a*m-o*d*m,R=e*w+n*M+s*y+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return t[0]=w*E,t[1]=(x*f*r-d*m*r-x*s*h+n*m*h+d*s*p-n*f*p)*E,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*h-n*c*h)*E,t[4]=M*E,t[5]=(u*m*r-g*f*r+g*s*h-e*m*h-u*s*p+e*f*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*h+e*c*h)*E,t[8]=y*E,t[9]=(g*d*r-u*x*r-g*n*h+e*x*h+u*n*p-e*d*p)*E,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*E,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*h-e*a*h)*E,t[12]=C*E,t[13]=(u*x*s-g*d*s+g*n*f-e*x*f-u*n*m+e*d*m)*E,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*E,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,x=o*u,m=o*d,p=a*d,w=c*l,M=c*u,y=c*d,C=n.x,R=n.y,E=n.z;return s[0]=(1-(x+p))*C,s[1]=(h+y)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(h-y)*R,s[5]=(1-(f+p))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+M)*E,s[9]=(m-w)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ws.set(s[0],s[1],s[2]).length();const o=ws.set(s[4],s[5],s[6]).length(),a=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);const l=1/r,u=1/o,d=1/a;return Wn.elements[0]*=l,Wn.elements[1]*=l,Wn.elements[2]*=l,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_i){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let h,g;if(a===_i)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zo)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_i){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),f=(e+t)*l,h=(n+s)*u;let g,x;if(a===_i)g=(o+r)*d,x=-2*d;else if(a===Zo)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ws=new nt,Wn=new Ie,lm=new nt(0,0,0),um=new nt(1,1,1),Ci=new nt,so=new nt,Sn=new nt,Iu=new Ie,Du=new ms;class Ln{constructor(t=0,e=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Iu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class sd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fm=0;const zu=new nt,bs=new ms,ui=new Ie,ro=new nt,dr=new nt,hm=new nt,dm=new ms,Nu=new nt(1,0,0),Uu=new nt(0,1,0),Fu=new nt(0,0,1),Ou={type:"added"},pm={type:"removed"},Es={type:"childadded",child:null},Da={type:"childremoved",child:null};class ln extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new nt,e=new Ln,n=new ms,s=new nt(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new be}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Nu,t)}rotateY(t){return this.rotateOnAxis(Uu,t)}rotateZ(t){return this.rotateOnAxis(Fu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nu,t)}translateY(t){return this.translateOnAxis(Uu,t)}translateZ(t){return this.translateOnAxis(Fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ro.copy(t):ro.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(dr,ro,this.up):ui.lookAt(ro,dr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ui),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),Es.child=t,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),Es.child=t,this.dispatchEvent(Es),Es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,dm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ln.DEFAULT_UP=new nt(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new nt,fi=new nt,za=new nt,hi=new nt,Ts=new nt,As=new nt,ku=new nt,Na=new nt,Ua=new nt,Fa=new nt,Oa=new He,ka=new He,Ba=new He;class Kn{constructor(t=new nt,e=new nt,n=new nt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),fi.subVectors(n,e),za.subVectors(t,e);const o=Xn.dot(Xn),a=Xn.dot(fi),c=Xn.dot(za),l=fi.dot(fi),u=fi.dot(za),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Oa.setScalar(0),ka.setScalar(0),Ba.setScalar(0),Oa.fromBufferAttribute(t,e),ka.fromBufferAttribute(t,n),Ba.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Oa,r.x),o.addScaledVector(ka,r.y),o.addScaledVector(Ba,r.z),o}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),fi.subVectors(t,e),Xn.cross(fi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Xn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ts.subVectors(s,n),As.subVectors(r,n),Na.subVectors(t,n);const c=Ts.dot(Na),l=As.dot(Na);if(c<=0&&l<=0)return e.copy(n);Ua.subVectors(t,s);const u=Ts.dot(Ua),d=As.dot(Ua);if(u>=0&&d<=u)return e.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ts,o);Fa.subVectors(t,r);const h=Ts.dot(Fa),g=As.dot(Fa);if(g>=0&&h<=g)return e.copy(r);const x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(As,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return ku.subVectors(r,s),a=(d-u)/(d-u+(h-g)),e.copy(s).addScaledVector(ku,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Ts,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=Ul(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ha(o,r,t+1/3),this.g=Ha(o,r,t),this.b=Ha(o,r,t-1/3)}return Le.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const n=rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return Le.fromWorkingColorSpace(fn.copy(this),t),Math.round(cn(fn.r*255,0,255))*65536+Math.round(cn(fn.g*255,0,255))*256+Math.round(cn(fn.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=pn){Le.fromWorkingColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,s=fn.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(oo);const n=Rr(Ri.h,oo.h,e),s=Rr(Ri.s,oo.s,e),r=Rr(Ri.l,oo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new le;le.NAMES=rd;let mm=0;class gs extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=or(),this.name="",this.blending=Ws,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Nr,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nr&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class od extends gs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new nt,ao=new ne;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Su,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Su&&(t.usage=this.usage),t}}class ad extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cd extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gm=0;const Dn=new Ie,Ga=new ln,Cs=new nt,wn=new Wi,pr=new Wi,on=new nt;class je extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ed(t)?cd:ad)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new be().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(wn.min,pr.min),wn.expandByPoint(on),on.addVectors(wn.max,pr.max),wn.expandByPoint(on)):(wn.expandByPoint(pr.min),wn.expandByPoint(pr.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)on.fromBufferAttribute(a,l),c&&(Cs.fromBufferAttribute(t,l),on.add(Cs)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new nt,c[S]=new nt;const l=new nt,u=new nt,d=new nt,f=new ne,h=new ne,g=new ne,x=new nt,m=new nt;function p(S,_,v){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,_),d.fromBufferAttribute(n,v),f.fromBufferAttribute(r,S),h.fromBufferAttribute(r,_),g.fromBufferAttribute(r,v),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(A),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(A),a[S].add(x),a[_].add(x),a[v].add(x),c[S].add(m),c[_].add(m),c[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let S=0,_=w.length;S<_;++S){const v=w[S],A=v.start,U=v.count;for(let F=A,H=A+U;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new nt,y=new nt,C=new nt,R=new nt;function E(S){C.fromBufferAttribute(s,S),R.copy(C);const _=a[S];M.copy(_),M.sub(C.multiplyScalar(C.dot(_))).normalize(),y.crossVectors(R,_);const A=y.dot(c[S])<0?-1:1;o.setXYZW(S,M.x,M.y,M.z,A)}for(let S=0,_=w.length;S<_;++S){const v=w[S],A=v.start,U=v.count;for(let F=A,H=A+U;F<H;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const s=new nt,r=new nt,o=new nt,a=new nt,c=new nt,l=new nt,u=new nt,d=new nt;if(t)for(let f=0,h=t.count;f<h;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Ye(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=t(f,n);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bu=new Ie,Ki=new cm,co=new Xi,Hu=new nt,lo=new nt,uo=new nt,fo=new nt,Va=new nt,ho=new nt,Gu=new nt,po=new nt;class Ge extends ln{constructor(t=new je,e=new od){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Va.fromBufferAttribute(d,t),o?ho.addScaledVector(Va,u):ho.addScaledVector(Va.sub(e),u))}e.add(ho)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(co.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(co,Hu)===null||Ki.origin.distanceToSquared(Hu)>(t.far-t.near)**2))&&(Bu.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(Bu),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=w,C=M;y<C;y+=3){const R=a.getX(y),E=a.getX(y+1),S=a.getX(y+2);s=mo(this,p,t,n,l,u,d,R,E,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const w=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=mo(this,o,t,n,l,u,d,w,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),M=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=w,C=M;y<C;y+=3){const R=y,E=y+1,S=y+2;s=mo(this,p,t,n,l,u,d,R,E,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const w=m,M=m+1,y=m+2;s=mo(this,o,t,n,l,u,d,w,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function xm(i,t,e,n,s,r,o,a){let c;if(t.side===vn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Hi,a),c===null)return null;po.copy(a),po.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(po);return l<e.near||l>e.far?null:{distance:l,point:po.clone(),object:i}}function mo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,lo),i.getVertexPosition(c,uo),i.getVertexPosition(l,fo);const u=xm(i,t,e,n,lo,uo,fo,Gu);if(u){const d=new nt;Kn.getBarycoord(Gu,lo,uo,fo,d),s&&(u.uv=Kn.getInterpolatedAttribute(s,a,c,l,d,new ne)),r&&(u.uv1=Kn.getInterpolatedAttribute(r,a,c,l,d,new ne)),o&&(u.normal=Kn.getInterpolatedAttribute(o,a,c,l,d,new nt),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new nt,materialIndex:0};Kn.getNormal(lo,uo,fo,f.normal),u.face=f,u.barycoord=d}return u}class $n extends je{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(d,2));function g(x,m,p,w,M,y,C,R,E,S,_){const v=y/E,A=C/S,U=y/2,F=C/2,H=R/2,st=E+1,J=S+1;let xt=0,et=0;const V=new nt;for(let N=0;N<J;N++){const W=N*A-F;for(let Z=0;Z<st;Z++){const it=Z*v-U;V[x]=it*w,V[m]=W*M,V[p]=H,l.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[p]=R>0?1:-1,u.push(V.x,V.y,V.z),d.push(Z/E),d.push(1-N/S),xt+=1}}for(let N=0;N<S;N++)for(let W=0;W<E;W++){const Z=f+W+st*N,it=f+W+st*(N+1),O=f+(W+1)+st*(N+1),j=f+(W+1)+st*N;c.push(Z,it,j),c.push(it,O,j),et+=6}a.addGroup(h,et,_),h+=et,f+=xt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){const t={};for(let e=0;e<i.length;e++){const n=er(i[e]);for(const s in n)t[s]=n[s]}return t}function vm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ld(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const _m={clone:er,merge:xn};var Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends gs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=vm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ud extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new nt,Vu=new ne,Wu=new ne;class Tn extends ud{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Vu,Wu),e.subVectors(Wu,Vu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Ps=1;class Sm extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Rs,Ps,t,e);s.layers=this.layers,this.add(s);const r=new Tn(Rs,Ps,t,e);r.layers=this.layers,this.add(r);const o=new Tn(Rs,Ps,t,e);o.layers=this.layers,this.add(o);const a=new Tn(Rs,Ps,t,e);a.layers=this.layers,this.add(a);const c=new Tn(Rs,Ps,t,e);c.layers=this.layers,this.add(c);const l=new Tn(Rs,Ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fd extends mn{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Zs,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wm extends ds{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Ui});r.uniforms.tEquirect.value=e;const o=new Ge(s,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=kn),new Sm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Wa=new nt,bm=new nt,Em=new be;class ns{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wa.subVectors(n,e).cross(bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Em.getNormalMatrix(t),s=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Xi,go=new nt;class Fl{constructor(t=new ns,e=new ns,n=new ns,s=new ns,r=new ns,o=new ns){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],h=s[8],g=s[9],x=s[10],m=s[11],p=s[12],w=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-h,y-p).normalize(),n[1].setComponents(c+r,f+l,m+h,y+p).normalize(),n[2].setComponents(c+o,f+u,m+g,y+w).normalize(),n[3].setComponents(c-o,f-u,m-g,y-w).normalize(),n[4].setComponents(c-a,f-d,m-x,y-M).normalize(),e===_i)n[5].setComponents(c+a,f+d,m+x,y+M).normalize();else if(e===Zo)n[5].setComponents(a,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(go.x=s.normal.x>0?t.max.x:t.min.x,go.y=s.normal.y>0?t.max.y:t.min.y,go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tm(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const x=d[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class xs extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,f=e/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const w=p*f-o;for(let M=0;M<l;M++){const y=M*d-r;g.push(y,-w,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const M=w+l*p,y=w+l*(p+1),C=w+1+l*(p+1),R=w+1+l*p;h.push(M,y,R),h.push(y,C,R)}this.setIndex(h),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
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
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
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
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nm=`#ifdef USE_BATCHING
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
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
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
#endif`,Hm=`#ifdef USE_BUMPMAP
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jm=`#define PI 3.141592653589793
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
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jm=`vec3 transformedNormal = objectNormal;
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
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
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
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
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
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vg=`uniform bool receiveShadow;
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
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
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
#endif`,Eg=`struct PhysicalMaterial {
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
}`,Tg=`
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
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
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
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
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ox=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fx=`float getShadowMask() {
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
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mx=`#ifdef USE_SKINNING
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
#endif`,gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ax=`uniform sampler2D t2D;
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
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
}`,Dx=`#if DEPTH_PACKING == 3200
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
}`,zx=`#define DISTANCE
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
}`,Nx=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`uniform float scale;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Gx=`#define LAMBERT
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
}`,Vx=`#define LAMBERT
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define MATCAP
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
}`,qx=`#define NORMAL
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
}`,Yx=`#define NORMAL
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
}`,Kx=`#define PHONG
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
}`,$x=`#define PHONG
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
}`,jx=`#define STANDARD
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
}`,Zx=`#define STANDARD
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
}`,Jx=`#define TOON
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
}`,Qx=`#define TOON
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
}`,tv=`uniform float size;
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
}`,ev=`uniform vec3 diffuse;
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
}`,nv=`#include <common>
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
}`,iv=`uniform vec3 color;
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
}`,sv=`uniform float rotation;
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
}`,rv=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:Am,alphahash_pars_fragment:Cm,alphamap_fragment:Rm,alphamap_pars_fragment:Pm,alphatest_fragment:Lm,alphatest_pars_fragment:Im,aomap_fragment:Dm,aomap_pars_fragment:zm,batching_pars_vertex:Nm,batching_vertex:Um,begin_vertex:Fm,beginnormal_vertex:Om,bsdfs:km,iridescence_fragment:Bm,bumpmap_pars_fragment:Hm,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:qm,color_pars_fragment:Ym,color_pars_vertex:Km,color_vertex:$m,common:jm,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Qm,displacementmap_vertex:tg,emissivemap_fragment:eg,emissivemap_pars_fragment:ng,colorspace_fragment:ig,colorspace_pars_fragment:sg,envmap_fragment:rg,envmap_common_pars_fragment:og,envmap_pars_fragment:ag,envmap_pars_vertex:cg,envmap_physical_pars_fragment:_g,envmap_vertex:lg,fog_vertex:ug,fog_pars_vertex:fg,fog_fragment:hg,fog_pars_fragment:dg,gradientmap_pars_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:gg,lights_lambert_pars_fragment:xg,lights_pars_begin:vg,lights_toon_fragment:Mg,lights_toon_pars_fragment:yg,lights_phong_fragment:Sg,lights_phong_pars_fragment:wg,lights_physical_fragment:bg,lights_physical_pars_fragment:Eg,lights_fragment_begin:Tg,lights_fragment_maps:Ag,lights_fragment_end:Cg,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Ig,map_fragment:Dg,map_pars_fragment:zg,map_particle_fragment:Ng,map_particle_pars_fragment:Ug,metalnessmap_fragment:Fg,metalnessmap_pars_fragment:Og,morphinstance_vertex:kg,morphcolor_vertex:Bg,morphnormal_vertex:Hg,morphtarget_pars_vertex:Gg,morphtarget_vertex:Vg,normal_fragment_begin:Wg,normal_fragment_maps:Xg,normal_pars_fragment:qg,normal_pars_vertex:Yg,normal_vertex:Kg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Zg,clearcoat_pars_fragment:Jg,iridescence_pars_fragment:Qg,opaque_fragment:tx,packing:ex,premultiplied_alpha_fragment:nx,project_vertex:ix,dithering_fragment:sx,dithering_pars_fragment:rx,roughnessmap_fragment:ox,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:cx,shadowmap_pars_vertex:lx,shadowmap_vertex:ux,shadowmask_pars_fragment:fx,skinbase_vertex:hx,skinning_pars_vertex:dx,skinning_vertex:px,skinnormal_vertex:mx,specularmap_fragment:gx,specularmap_pars_fragment:xx,tonemapping_fragment:vx,tonemapping_pars_fragment:_x,transmission_fragment:Mx,transmission_pars_fragment:yx,uv_pars_fragment:Sx,uv_pars_vertex:wx,uv_vertex:bx,worldpos_vertex:Ex,background_vert:Tx,background_frag:Ax,backgroundCube_vert:Cx,backgroundCube_frag:Rx,cube_vert:Px,cube_frag:Lx,depth_vert:Ix,depth_frag:Dx,distanceRGBA_vert:zx,distanceRGBA_frag:Nx,equirect_vert:Ux,equirect_frag:Fx,linedashed_vert:Ox,linedashed_frag:kx,meshbasic_vert:Bx,meshbasic_frag:Hx,meshlambert_vert:Gx,meshlambert_frag:Vx,meshmatcap_vert:Wx,meshmatcap_frag:Xx,meshnormal_vert:qx,meshnormal_frag:Yx,meshphong_vert:Kx,meshphong_frag:$x,meshphysical_vert:jx,meshphysical_frag:Zx,meshtoon_vert:Jx,meshtoon_frag:Qx,points_vert:tv,points_frag:ev,shadow_vert:nv,shadow_frag:iv,sprite_vert:sv,sprite_frag:rv},Qt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},ni={basic:{uniforms:xn([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:xn([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new le(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:xn([Qt.common,Qt.specularmap,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,Qt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:xn([Qt.common,Qt.envmap,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.roughnessmap,Qt.metalnessmap,Qt.fog,Qt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:xn([Qt.common,Qt.aomap,Qt.lightmap,Qt.emissivemap,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.gradientmap,Qt.fog,Qt.lights,{emissive:{value:new le(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:xn([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,Qt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:xn([Qt.points,Qt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:xn([Qt.common,Qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:xn([Qt.common,Qt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:xn([Qt.common,Qt.bumpmap,Qt.normalmap,Qt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:xn([Qt.sprite,Qt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:xn([Qt.common,Qt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:xn([Qt.lights,Qt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};ni.physical={uniforms:xn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const xo={r:0,b:0,g:0},ji=new Ln,ov=new Ie;function av(i,t,e,n,s,r,o){const a=new le(0);let c=r===!0?0:1,l,u,d=null,f=0,h=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function x(w){let M=!1;const y=g(w);y===null?p(a,c):y&&y.isColor&&(p(y,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===aa)?(u===void 0&&(u=new Ge(new $n(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:er(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ji.copy(M.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ov.makeRotationFromEuler(ji)),u.material.toneMapped=Le.getTransfer(y.colorSpace)!==Ne,(d!==y||f!==y.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,h=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ge(new xs(2,2),new _n({name:"BackgroundMaterial",uniforms:er(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Le.getTransfer(y.colorSpace)!==Ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,M){w.getRGB(xo,ld(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:x,addToRenderList:m}}function cv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(v,A,U,F,H){let st=!1;const J=d(F,U,A);r!==J&&(r=J,l(r.object)),st=h(v,F,U,H),st&&g(v,F,U,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,y(v,A,U,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function d(v,A,U){const F=U.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let st=H[A.id];st===void 0&&(st={},H[A.id]=st);let J=st[F];return J===void 0&&(J=f(c()),st[F]=J),J}function f(v){const A=[],U=[],F=[];for(let H=0;H<e;H++)A[H]=0,U[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:F,object:v,attributes:{},index:null}}function h(v,A,U,F){const H=r.attributes,st=A.attributes;let J=0;const xt=U.getAttributes();for(const et in xt)if(xt[et].location>=0){const N=H[et];let W=st[et];if(W===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(W=v.instanceColor)),N===void 0||N.attribute!==W||W&&N.data!==W.data)return!0;J++}return r.attributesNum!==J||r.index!==F}function g(v,A,U,F){const H={},st=A.attributes;let J=0;const xt=U.getAttributes();for(const et in xt)if(xt[et].location>=0){let N=st[et];N===void 0&&(et==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),et==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));const W={};W.attribute=N,N&&N.data&&(W.data=N.data),H[et]=W,J++}r.attributes=H,r.attributesNum=J,r.index=F}function x(){const v=r.newAttributes;for(let A=0,U=v.length;A<U;A++)v[A]=0}function m(v){p(v,0)}function p(v,A){const U=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;U[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),H[v]!==A&&(i.vertexAttribDivisor(v,A),H[v]=A)}function w(){const v=r.newAttributes,A=r.enabledAttributes;for(let U=0,F=A.length;U<F;U++)A[U]!==v[U]&&(i.disableVertexAttribArray(U),A[U]=0)}function M(v,A,U,F,H,st,J){J===!0?i.vertexAttribIPointer(v,A,U,H,st):i.vertexAttribPointer(v,A,U,F,H,st)}function y(v,A,U,F){x();const H=F.attributes,st=U.getAttributes(),J=A.defaultAttributeValues;for(const xt in st){const et=st[xt];if(et.location>=0){let V=H[xt];if(V===void 0&&(xt==="instanceMatrix"&&v.instanceMatrix&&(V=v.instanceMatrix),xt==="instanceColor"&&v.instanceColor&&(V=v.instanceColor)),V!==void 0){const N=V.normalized,W=V.itemSize,Z=t.get(V);if(Z===void 0)continue;const it=Z.buffer,O=Z.type,j=Z.bytesPerElement,pt=O===i.INT||O===i.UNSIGNED_INT||V.gpuType===Rl;if(V.isInterleavedBufferAttribute){const k=V.data,rt=k.stride,ht=V.offset;if(k.isInstancedInterleavedBuffer){for(let Mt=0;Mt<et.locationSize;Mt++)p(et.location+Mt,k.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Mt=0;Mt<et.locationSize;Mt++)m(et.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Mt=0;Mt<et.locationSize;Mt++)M(et.location+Mt,W/et.locationSize,O,N,rt*j,(ht+W/et.locationSize*Mt)*j,pt)}else{if(V.isInstancedBufferAttribute){for(let k=0;k<et.locationSize;k++)p(et.location+k,V.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let k=0;k<et.locationSize;k++)m(et.location+k);i.bindBuffer(i.ARRAY_BUFFER,it);for(let k=0;k<et.locationSize;k++)M(et.location+k,W/et.locationSize,O,N,W*j,W/et.locationSize*k*j,pt)}}else if(J!==void 0){const N=J[xt];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(et.location,N);break;case 3:i.vertexAttrib3fv(et.location,N);break;case 4:i.vertexAttrib4fv(et.location,N);break;default:i.vertexAttrib1fv(et.location,N)}}}}w()}function C(){S();for(const v in n){const A=n[v];for(const U in A){const F=A[U];for(const H in F)u(F[H].object),delete F[H];delete A[U]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const A=n[v.id];for(const U in A){const F=A[U];for(const H in F)u(F[H].object),delete F[H];delete A[U]}delete n[v.id]}function E(v){for(const A in n){const U=n[A];if(U[v.id]===void 0)continue;const F=U[v.id];for(const H in F)u(F[H].object),delete F[H];delete U[v.id]}}function S(){_(),o=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function lv(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];e.update(h,n,1)}function c(l,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function uv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Bn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const S=E===Hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==oi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==si&&!S)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:C,maxSamples:R}}function fv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ns,a=new be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const w=r?0:n,M=w*4;let y=p.clippingState||null;c.value=y,y=u(g,f,M,h);for(let C=0;C!==M;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,h,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=h+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=h;M!==x;++M,y+=4)o.copy(d[M]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function hv(i){let t=new WeakMap;function e(o,a){return a===Gc?o.mapping=Zs:a===Vc&&(o.mapping=Js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gc||a===Vc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wm(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class dd extends ud{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hs=4,Xu=[.125,.215,.35,.446,.526,.582],rs=20,Xa=new dd,qu=new le;let qa=null,Ya=0,Ka=0,$a=!1;const is=(1+Math.sqrt(5))/2,Ls=1/is,Yu=[new nt(-is,Ls,0),new nt(is,Ls,0),new nt(-Ls,0,is),new nt(Ls,0,is),new nt(0,is,-Ls),new nt(0,is,Ls),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)];class Ku{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Ya,Ka),this._renderer.xr.enabled=$a,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Hr,format:Bn,colorSpace:sr,depthBuffer:!1},s=$u(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dv(r)),this._blurMaterial=pv(r,t,e)}return s}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,s){const a=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(qu),u.toneMapping=Fi,u.autoClear=!1;const h=new od({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Ge(new $n,h);let x=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,x=!0):(h.color.copy(qu),x=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;vo(s,w*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zs||t.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;vo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Xa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yu[(s-r-1)%Yu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ge(this._lodPlanes[s],l),f=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*rs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let w=0;for(let E=0;E<rs;++E){const S=E/x,_=Math.exp(-S*S/2);p.push(_),E===0?w+=_:E<m&&(w+=2*_)}for(let E=0;E<p.length;E++)p[E]=p[E]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const y=this._sizeLods[s],C=3*y*(s>M-Hs?s-M+Hs:0),R=4*(this._cubeSize-y);vo(e,C,R,3*y,2*y),c.setRenderTarget(e),c.render(d,Xa)}}function dv(i){const t=[],e=[],n=[];let s=i;const r=i-Hs+1+Xu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Hs?c=Xu[o-i+Hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*h),M=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let R=0;R<h;R++){const E=R%3*2/3-1,S=R>2?0:-1,_=[E,S,0,E+2/3,S,0,E+2/3,S+1,0,E,S,0,E+2/3,S+1,0,E,S+1,0];w.set(_,x*g*R),M.set(f,m*g*R);const v=[R,R,R,R,R,R];y.set(v,p*g*R)}const C=new je;C.setAttribute("position",new Ye(w,x)),C.setAttribute("uv",new Ye(M,m)),C.setAttribute("faceIndex",new Ye(y,p)),t.push(C),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $u(i,t,e){const n=new ds(i,t,e);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pv(i,t,e){const n=new Float32Array(rs),s=new nt(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ju(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Zu(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ol(){return`

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
	`}function mv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gc||c===Vc,u=c===Zs||c===Js;if(l||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ku(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new Ku(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xv(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const x=h[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){const f=[],h=d.index,g=d.attributes.position;let x=0;if(h!==null){const w=h.array;x=h.version;for(let M=0,y=w.length;M<y;M+=3){const C=w[M+0],R=w[M+1],E=w[M+2];f.push(C,R,R,E,E,C)}}else if(g!==void 0){const w=g.array;x=g.version;for(let M=0,y=w.length/3-1;M<y;M+=3){const C=M+0,R=M+1,E=M+2;f.push(C,R,R,E,E,C)}}else return;const m=new(ed(f)?cd:ad)(f,1);m.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function vv(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,f*o,g),e.update(h,n,g))}function u(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,n,1)}function d(f,h,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function _v(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mv(i,t,e){const n=new WeakMap,s=new He;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let _=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;h===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const R=new Float32Array(y*C*4*d),E=new id(R,y,C,d);E.type=si,E.needsUpdate=!0;const S=M*4;for(let v=0;v<d;v++){const A=m[v],U=p[v],F=w[v],H=y*C*4*v;for(let st=0;st<A.count;st++){const J=st*S;h===!0&&(s.fromBufferAttribute(A,st),R[H+J+0]=s.x,R[H+J+1]=s.y,R[H+J+2]=s.z,R[H+J+3]=0),g===!0&&(s.fromBufferAttribute(U,st),R[H+J+4]=s.x,R[H+J+5]=s.y,R[H+J+6]=s.z,R[H+J+7]=0),x===!0&&(s.fromBufferAttribute(F,st),R[H+J+8]=s.x,R[H+J+9]=s.y,R[H+J+10]=s.z,R[H+J+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:E,size:new ne(y,C)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];const g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function yv(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class pd extends mn{constructor(t,e,n,s,r,o,a,c,l,u=Xs){if(u!==Xs&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xs&&(n=hs),n===void 0&&u===tr&&(n=Qs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const md=new mn,Ju=new pd(1,1),gd=new id,xd=new om,vd=new fd,Qu=[],tf=[],ef=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Qu[s];if(r===void 0&&(r=new Float32Array(s),Qu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ua(i,t){let e=tf[t];e===void 0&&(e=new Int32Array(t),tf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function Ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function Tv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;sf.set(n),i.uniformMatrix2fv(this.addr,!1,sf),sn(e,n)}}function Av(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;nf.set(n),i.uniformMatrix3fv(this.addr,!1,nf),sn(e,n)}}function Cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;ef.set(n),i.uniformMatrix4fv(this.addr,!1,ef),sn(e,n)}}function Rv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function Lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Iv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function Dv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function Nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Fv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ju.compareFunction=td,r=Ju):r=md,e.setTexture2D(t||r,s)}function Ov(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xd,s)}function kv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vd,s)}function Bv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function Hv(i){switch(i){case 5126:return Sv;case 35664:return wv;case 35665:return bv;case 35666:return Ev;case 35674:return Tv;case 35675:return Av;case 35676:return Cv;case 5124:case 35670:return Rv;case 35667:case 35671:return Pv;case 35668:case 35672:return Lv;case 35669:case 35673:return Iv;case 5125:return Dv;case 36294:return zv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Bv}}function Gv(i,t){i.uniform1fv(this.addr,t)}function Vv(i,t){const e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function Wv(i,t){const e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function Xv(i,t){const e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function qv(i,t){const e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yv(i,t){const e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kv(i,t){const e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $v(i,t){i.uniform1iv(this.addr,t)}function jv(i,t){i.uniform2iv(this.addr,t)}function Zv(i,t){i.uniform3iv(this.addr,t)}function Jv(i,t){i.uniform4iv(this.addr,t)}function Qv(i,t){i.uniform1uiv(this.addr,t)}function t1(i,t){i.uniform2uiv(this.addr,t)}function e1(i,t){i.uniform3uiv(this.addr,t)}function n1(i,t){i.uniform4uiv(this.addr,t)}function i1(i,t,e){const n=this.cache,s=t.length,r=ua(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||md,r[o])}function s1(i,t,e){const n=this.cache,s=t.length,r=ua(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xd,r[o])}function r1(i,t,e){const n=this.cache,s=t.length,r=ua(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||vd,r[o])}function o1(i,t,e){const n=this.cache,s=t.length,r=ua(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gd,r[o])}function a1(i){switch(i){case 5126:return Gv;case 35664:return Vv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return Kv;case 5124:case 35670:return $v;case 35667:case 35671:return jv;case 35668:case 35672:return Zv;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return t1;case 36295:return e1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}class c1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hv(e.type)}}class l1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a1(e.type)}}class u1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function rf(i,t){i.seq.push(t),i.map[t.id]=t}function f1(i,t,e){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),o=ja.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rf(e,l===void 0?new c1(a,i,t):new l1(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new u1(a),rf(e,d)),e=d}}}class Go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);f1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function of(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const h1=37297;let d1=0;function p1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const af=new be;function m1(i){Le._getMatrix(af,Le.workingColorSpace,i);const t=`mat3( ${af.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case la:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+p1(i.getShaderSource(t),o)}else return s}function g1(i,t){const e=m1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function x1(i,t){let e;switch(t){case _0:e="Linear";break;case M0:e="Reinhard";break;case y0:e="Cineon";break;case S0:e="ACESFilmic";break;case b0:e="AgX";break;case Vh:e="Neutral";break;case w0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _o=new nt;function v1(){Le.getLuminanceCoefficients(_o);const i=_o.x.toFixed(4),t=_o.y.toFixed(4),e=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function M1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Sr(i){return i!==""}function lf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(i){return i.replace(S1,b1)}const w1=new Map;function b1(i,t){let e=Ee[t];if(e===void 0){const n=w1.get(t);if(n!==void 0)e=Ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vl(e)}const E1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(i){return i.replace(E1,T1)}function T1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function A1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===t0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function C1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case Js:t="ENVMAP_TYPE_CUBE";break;case aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Js:t="ENVMAP_MODE_REFRACTION";break}return t}function P1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oa:t="ENVMAP_BLENDING_MULTIPLY";break;case x0:t="ENVMAP_BLENDING_MIX";break;case v0:t="ENVMAP_BLENDING_ADD";break}return t}function L1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function I1(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=A1(e),l=C1(e),u=R1(e),d=P1(e),f=L1(e),h=_1(e),g=M1(r),x=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[hf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?Ee.tonemapping_pars_fragment:"",e.toneMapping!==Fi?x1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,g1("linearToOutputTexel",e.outputColorSpace),v1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),o=vl(o),o=lf(o,e),o=uf(o,e),a=vl(a),a=lf(a,e),a=uf(a,e),o=ff(o),a=ff(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+o,y=w+p+a,C=of(s,s.VERTEX_SHADER,M),R=of(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(A){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(C).trim(),H=s.getShaderInfoLog(R).trim();let st=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,R);else{const xt=cf(s,C,"vertex"),et=cf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+xt+`
`+et)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||H==="")&&(J=!1);J&&(A.diagnostics={runnable:st,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(C),s.deleteShader(R),S=new Go(s,x),_=y1(s,x)}let S;this.getUniforms=function(){return S===void 0&&E(this),S};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,h1)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let D1=0;class z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new N1(t),e.set(t,n)),n}}class N1{constructor(t){this.id=D1++,this.code=t,this.usedTimes=0}}function U1(i,t,e,n,s,r,o){const a=new sd,c=new z1,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,v,A,U,F){const H=U.fog,st=F.geometry,J=_.isMeshStandardMaterial?U.environment:null,xt=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),et=xt&&xt.mapping===aa?xt.image.height:null,V=g[_.type];_.precision!==null&&(h=s.getMaxPrecision(_.precision),h!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const N=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,W=N!==void 0?N.length:0;let Z=0;st.morphAttributes.position!==void 0&&(Z=1),st.morphAttributes.normal!==void 0&&(Z=2),st.morphAttributes.color!==void 0&&(Z=3);let it,O,j,pt;if(V){const Y=ni[V];it=Y.vertexShader,O=Y.fragmentShader}else it=_.vertexShader,O=_.fragmentShader,c.update(_),j=c.getVertexShaderID(_),pt=c.getFragmentShaderID(_);const k=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),ht=F.isInstancedMesh===!0,Mt=F.isBatchedMesh===!0,Rt=!!_.map,tt=!!_.matcap,gt=!!xt,B=!!_.aoMap,Q=!!_.lightMap,It=!!_.bumpMap,jt=!!_.normalMap,Bt=!!_.displacementMap,te=!!_.emissiveMap,$t=!!_.metalnessMap,T=!!_.roughnessMap,P=_.anisotropy>0,at=_.clearcoat>0,mt=_.dispersion>0,bt=_.iridescence>0,St=_.sheen>0,Xt=_.transmission>0,kt=P&&!!_.anisotropyMap,Dt=at&&!!_.clearcoatMap,ue=at&&!!_.clearcoatNormalMap,At=at&&!!_.clearcoatRoughnessMap,Vt=bt&&!!_.iridescenceMap,ie=bt&&!!_.iridescenceThicknessMap,qt=St&&!!_.sheenColorMap,Ot=St&&!!_.sheenRoughnessMap,Jt=!!_.specularMap,re=!!_.specularColorMap,ge=!!_.specularIntensityMap,ot=Xt&&!!_.transmissionMap,z=Xt&&!!_.thicknessMap,$=!!_.gradientMap,lt=!!_.alphaMap,_t=_.alphaTest>0,b=!!_.alphaHash,I=!!_.extensions;let G=Fi;_.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(G=i.toneMapping);const q={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:it,fragmentShader:O,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:pt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&F._colorsTexture!==null,instancing:ht,instancingColor:ht&&F.instanceColor!==null,instancingMorph:ht&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:sr,alphaToCoverage:!!_.alphaToCoverage,map:Rt,matcap:tt,envMap:gt,envMapMode:gt&&xt.mapping,envMapCubeUVHeight:et,aoMap:B,lightMap:Q,bumpMap:It,normalMap:jt,displacementMap:f&&Bt,emissiveMap:te,normalMapObjectSpace:jt&&_.normalMapType===C0,normalMapTangentSpace:jt&&_.normalMapType===ca,metalnessMap:$t,roughnessMap:T,anisotropy:P,anisotropyMap:kt,clearcoat:at,clearcoatMap:Dt,clearcoatNormalMap:ue,clearcoatRoughnessMap:At,dispersion:mt,iridescence:bt,iridescenceMap:Vt,iridescenceThicknessMap:ie,sheen:St,sheenColorMap:qt,sheenRoughnessMap:Ot,specularMap:Jt,specularColorMap:re,specularIntensityMap:ge,transmission:Xt,transmissionMap:ot,thicknessMap:z,gradientMap:$,opaque:_.transparent===!1&&_.blending===Ws&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:_t,alphaHash:b,combine:_.combine,mapUv:Rt&&x(_.map.channel),aoMapUv:B&&x(_.aoMap.channel),lightMapUv:Q&&x(_.lightMap.channel),bumpMapUv:It&&x(_.bumpMap.channel),normalMapUv:jt&&x(_.normalMap.channel),displacementMapUv:Bt&&x(_.displacementMap.channel),emissiveMapUv:te&&x(_.emissiveMap.channel),metalnessMapUv:$t&&x(_.metalnessMap.channel),roughnessMapUv:T&&x(_.roughnessMap.channel),anisotropyMapUv:kt&&x(_.anisotropyMap.channel),clearcoatMapUv:Dt&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(_.sheenRoughnessMap.channel),specularMapUv:Jt&&x(_.specularMap.channel),specularColorMapUv:re&&x(_.specularColorMap.channel),specularIntensityMapUv:ge&&x(_.specularIntensityMap.channel),transmissionMapUv:ot&&x(_.transmissionMap.channel),thicknessMapUv:z&&x(_.thicknessMap.channel),alphaMapUv:lt&&x(_.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(jt||P),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!st.attributes.uv&&(Rt||lt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:rt,skinning:F.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Z,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:G,decodeVideoTexture:Rt&&_.map.isVideoTexture===!0&&Le.getTransfer(_.map.colorSpace)===Ne,decodeVideoTextureEmissive:te&&_.emissiveMap.isVideoTexture===!0&&Le.getTransfer(_.emissiveMap.colorSpace)===Ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===An,flipSided:_.side===vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:I&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I&&_.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return q.vertexUv1s=l.has(1),q.vertexUv2s=l.has(2),q.vertexUv3s=l.has(3),l.clear(),q}function p(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)v.push(A),v.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(w(v,_),M(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function w(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function M(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){const v=g[_.type];let A;if(v){const U=ni[v];A=_m.clone(U.uniforms)}else A=_.uniforms;return A}function C(_,v){let A;for(let U=0,F=u.length;U<F;U++){const H=u[U];if(H.cacheKey===v){A=H,++A.usedTimes;break}}return A===void 0&&(A=new I1(i,v,_,r),u.push(A)),A}function R(_){if(--_.usedTimes===0){const v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function E(_){c.remove(_)}function S(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:E,programs:u,dispose:S}}function F1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function df(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,h,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,f,h,g,x,m){const p=o(d,f,h,g,x,m);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):e.push(p)}function c(d,f,h,g,x,m){const p=o(d,f,h,g,x,m);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,f){e.length>1&&e.sort(d||O1),n.length>1&&n.sort(f||df),s.length>1&&s.sort(f||df)}function u(){for(let d=t,f=i.length;d<f;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function k1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new pf,i.set(n,[o])):s>=r.length?(o=new pf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function B1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new le};break;case"SpotLight":e={position:new nt,direction:new nt,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return i[t.id]=e,e}}}function H1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G1=0;function V1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function W1(i){const t=new B1,e=H1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new nt);const s=new nt,r=new Ie,o=new Ie;function a(l){let u=0,d=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,w=0,M=0,y=0,C=0,R=0,E=0;l.sort(V1);for(let _=0,v=l.length;_<v;_++){const A=l[_],U=A.color,F=A.intensity,H=A.distance,st=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=U.r*F,d+=U.g*F,f+=U.b*F;else if(A.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(A.sh.coefficients[J],F);E++}else if(A.isDirectionalLight){const J=t.get(A);if(J.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const xt=A.shadow,et=e.get(A);et.shadowIntensity=xt.intensity,et.shadowBias=xt.bias,et.shadowNormalBias=xt.normalBias,et.shadowRadius=xt.radius,et.shadowMapSize=xt.mapSize,n.directionalShadow[h]=et,n.directionalShadowMap[h]=st,n.directionalShadowMatrix[h]=A.shadow.matrix,w++}n.directional[h]=J,h++}else if(A.isSpotLight){const J=t.get(A);J.position.setFromMatrixPosition(A.matrixWorld),J.color.copy(U).multiplyScalar(F),J.distance=H,J.coneCos=Math.cos(A.angle),J.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),J.decay=A.decay,n.spot[x]=J;const xt=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,xt.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[x]=xt.matrix,A.castShadow){const et=e.get(A);et.shadowIntensity=xt.intensity,et.shadowBias=xt.bias,et.shadowNormalBias=xt.normalBias,et.shadowRadius=xt.radius,et.shadowMapSize=xt.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=st,y++}x++}else if(A.isRectAreaLight){const J=t.get(A);J.color.copy(U).multiplyScalar(F),J.halfWidth.set(A.width*.5,0,0),J.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=J,m++}else if(A.isPointLight){const J=t.get(A);if(J.color.copy(A.color).multiplyScalar(A.intensity),J.distance=A.distance,J.decay=A.decay,A.castShadow){const xt=A.shadow,et=e.get(A);et.shadowIntensity=xt.intensity,et.shadowBias=xt.bias,et.shadowNormalBias=xt.normalBias,et.shadowRadius=xt.radius,et.shadowMapSize=xt.mapSize,et.shadowCameraNear=xt.camera.near,et.shadowCameraFar=xt.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=J,g++}else if(A.isHemisphereLight){const J=t.get(A);J.skyColor.copy(A.color).multiplyScalar(F),J.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=J,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Qt.LTC_FLOAT_1,n.rectAreaLTC2=Qt.LTC_FLOAT_2):(n.rectAreaLTC1=Qt.LTC_HALF_1,n.rectAreaLTC2=Qt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==h||S.pointLength!==g||S.spotLength!==x||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==w||S.numPointShadows!==M||S.numSpotShadows!==y||S.numSpotMaps!==C||S.numLightProbes!==E)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,S.directionalLength=h,S.pointLength=g,S.spotLength=x,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=w,S.numPointShadows=M,S.numSpotShadows=y,S.numSpotMaps=C,S.numLightProbes=E,n.version=G1++)}function c(l,u){let d=0,f=0,h=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const M=l[p];if(M.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function mf(i){const t=new W1(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function X1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new mf(i),t.set(s,[a])):r>=o.length?(a=new mf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class q1 extends gs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Y1 extends gs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`;function j1(i,t,e){let n=new Fl;const s=new ne,r=new ne,o=new He,a=new q1({depthPacking:A0}),c=new Y1,l={},u=e.maxTextureSize,d={[Hi]:vn,[vn]:Hi,[An]:An},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:K1,fragmentShader:$1}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ge(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let p=this.type;this.render=function(R,E,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const _=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ui),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==di&&this.type===di,H=p===di&&this.type!==di;for(let st=0,J=R.length;st<J;st++){const xt=R[st],et=xt.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",xt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);const V=et.getFrameExtents();if(s.multiply(V),r.copy(et.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,et.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,et.mapSize.y=r.y)),et.map===null||F===!0||H===!0){const W=this.type!==di?{minFilter:Pn,magFilter:Pn}:{};et.map!==null&&et.map.dispose(),et.map=new ds(s.x,s.y,W),et.map.texture.name=xt.name+".shadowMap",et.camera.updateProjectionMatrix()}i.setRenderTarget(et.map),i.clear();const N=et.getViewportCount();for(let W=0;W<N;W++){const Z=et.getViewport(W);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),U.viewport(o),et.updateMatrices(xt,W),n=et.getFrustum(),y(E,S,et.camera,xt,this.type)}et.isPointLightShadow!==!0&&this.type===di&&w(et,S),et.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,v,A)};function w(R,E){const S=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ds(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(E,null,S,f,x,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(E,null,S,h,x,null)}function M(R,E,S,_){let v=null;const A=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)v=A;else if(v=S.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=v.uuid,F=E.uuid;let H=l[U];H===void 0&&(H={},l[U]=H);let st=H[F];st===void 0&&(st=v.clone(),H[F]=st,E.addEventListener("dispose",C)),v=st}if(v.visible=E.visible,v.wireframe=E.wireframe,_===di?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:d[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,S.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=S}return v}function y(R,E,S,_,v){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===di)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const F=t.update(R),H=R.material;if(Array.isArray(H)){const st=F.groups;for(let J=0,xt=st.length;J<xt;J++){const et=st[J],V=H[et.materialIndex];if(V&&V.visible){const N=M(R,V,_,v);R.onBeforeShadow(i,R,E,S,F,N,et),i.renderBufferDirect(S,null,F,N,R,et),R.onAfterShadow(i,R,E,S,F,N,et)}}}else if(H.visible){const st=M(R,H,_,v);R.onBeforeShadow(i,R,E,S,F,st,null),i.renderBufferDirect(S,null,F,st,R,null),R.onAfterShadow(i,R,E,S,F,st,null)}}const U=R.children;for(let F=0,H=U.length;F<H;F++)y(U[F],E,S,_,v)}function C(R){R.target.removeEventListener("dispose",C);for(const S in l){const _=l[S],v=R.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}const Z1={[Nc]:Uc,[Fc]:Bc,[Oc]:Hc,[js]:kc,[Uc]:Nc,[Bc]:Fc,[Hc]:Oc,[kc]:js};function J1(i,t){function e(){let ot=!1;const z=new He;let $=null;const lt=new He(0,0,0,0);return{setMask:function(_t){$!==_t&&!ot&&(i.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){ot=_t},setClear:function(_t,b,I,G,q){q===!0&&(_t*=G,b*=G,I*=G),z.set(_t,b,I,G),lt.equals(z)===!1&&(i.clearColor(_t,b,I,G),lt.copy(z))},reset:function(){ot=!1,$=null,lt.set(-1,0,0,0)}}}function n(){let ot=!1,z=!1,$=null,lt=null,_t=null;return{setReversed:function(b){if(z!==b){const I=t.get("EXT_clip_control");z?I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT):I.clipControlEXT(I.LOWER_LEFT_EXT,I.NEGATIVE_ONE_TO_ONE_EXT);const G=_t;_t=null,this.setClear(G)}z=b},getReversed:function(){return z},setTest:function(b){b?k(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(b){$!==b&&!ot&&(i.depthMask(b),$=b)},setFunc:function(b){if(z&&(b=Z1[b]),lt!==b){switch(b){case Nc:i.depthFunc(i.NEVER);break;case Uc:i.depthFunc(i.ALWAYS);break;case Fc:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case Oc:i.depthFunc(i.EQUAL);break;case kc:i.depthFunc(i.GEQUAL);break;case Bc:i.depthFunc(i.GREATER);break;case Hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=b}},setLocked:function(b){ot=b},setClear:function(b){_t!==b&&(z&&(b=1-b),i.clearDepth(b),_t=b)},reset:function(){ot=!1,$=null,lt=null,_t=null,z=!1}}}function s(){let ot=!1,z=null,$=null,lt=null,_t=null,b=null,I=null,G=null,q=null;return{setTest:function(Y){ot||(Y?k(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Y){z!==Y&&!ot&&(i.stencilMask(Y),z=Y)},setFunc:function(Y,ft,dt){($!==Y||lt!==ft||_t!==dt)&&(i.stencilFunc(Y,ft,dt),$=Y,lt=ft,_t=dt)},setOp:function(Y,ft,dt){(b!==Y||I!==ft||G!==dt)&&(i.stencilOp(Y,ft,dt),b=Y,I=ft,G=dt)},setLocked:function(Y){ot=Y},setClear:function(Y){q!==Y&&(i.clearStencil(Y),q=Y)},reset:function(){ot=!1,z=null,$=null,lt=null,_t=null,b=null,I=null,G=null,q=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,w=null,M=null,y=null,C=null,R=null,E=new le(0,0,0),S=0,_=!1,v=null,A=null,U=null,F=null,H=null;const st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,xt=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(et)[1]),J=xt>=1):et.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),J=xt>=2);let V=null,N={};const W=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),it=new He().fromArray(W),O=new He().fromArray(Z);function j(ot,z,$,lt){const _t=new Uint8Array(4),b=i.createTexture();i.bindTexture(ot,b),i.texParameteri(ot,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(ot,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let I=0;I<$;I++)ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(z+I,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return b}const pt={};pt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(js),It(!1),jt(xu),k(i.CULL_FACE),B(Ui);function k(ot){u[ot]!==!0&&(i.enable(ot),u[ot]=!0)}function rt(ot){u[ot]!==!1&&(i.disable(ot),u[ot]=!1)}function ht(ot,z){return d[ot]!==z?(i.bindFramebuffer(ot,z),d[ot]=z,ot===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=z),ot===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=z),!0):!1}function Mt(ot,z){let $=h,lt=!1;if(ot){$=f.get(z),$===void 0&&($=[],f.set(z,$));const _t=ot.textures;if($.length!==_t.length||$[0]!==i.COLOR_ATTACHMENT0){for(let b=0,I=_t.length;b<I;b++)$[b]=i.COLOR_ATTACHMENT0+b;$.length=_t.length,lt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,lt=!0);lt&&i.drawBuffers($)}function Rt(ot){return g!==ot?(i.useProgram(ot),g=ot,!0):!1}const tt={[Ni]:i.FUNC_ADD,[e0]:i.FUNC_SUBTRACT,[n0]:i.FUNC_REVERSE_SUBTRACT};tt[i0]=i.MIN,tt[s0]=i.MAX;const gt={[r0]:i.ZERO,[Dc]:i.ONE,[o0]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[h0]:i.SRC_ALPHA_SATURATE,[u0]:i.DST_COLOR,[c0]:i.DST_ALPHA,[a0]:i.ONE_MINUS_SRC_COLOR,[Nr]:i.ONE_MINUS_SRC_ALPHA,[f0]:i.ONE_MINUS_DST_COLOR,[l0]:i.ONE_MINUS_DST_ALPHA,[d0]:i.CONSTANT_COLOR,[p0]:i.ONE_MINUS_CONSTANT_COLOR,[m0]:i.CONSTANT_ALPHA,[g0]:i.ONE_MINUS_CONSTANT_ALPHA};function B(ot,z,$,lt,_t,b,I,G,q,Y){if(ot===Ui){x===!0&&(rt(i.BLEND),x=!1);return}if(x===!1&&(k(i.BLEND),x=!0),ot!==Gh){if(ot!==m||Y!==_){if((p!==Ni||y!==Ni)&&(i.blendEquation(i.FUNC_ADD),p=Ni,y=Ni),Y)switch(ot){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vu:i.blendFunc(i.ONE,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ot);break}else switch(ot){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ot);break}w=null,M=null,C=null,R=null,E.set(0,0,0),S=0,m=ot,_=Y}return}_t=_t||z,b=b||$,I=I||lt,(z!==p||_t!==y)&&(i.blendEquationSeparate(tt[z],tt[_t]),p=z,y=_t),($!==w||lt!==M||b!==C||I!==R)&&(i.blendFuncSeparate(gt[$],gt[lt],gt[b],gt[I]),w=$,M=lt,C=b,R=I),(G.equals(E)===!1||q!==S)&&(i.blendColor(G.r,G.g,G.b,q),E.copy(G),S=q),m=ot,_=!1}function Q(ot,z){ot.side===An?rt(i.CULL_FACE):k(i.CULL_FACE);let $=ot.side===vn;z&&($=!$),It($),ot.blending===Ws&&ot.transparent===!1?B(Ui):B(ot.blending,ot.blendEquation,ot.blendSrc,ot.blendDst,ot.blendEquationAlpha,ot.blendSrcAlpha,ot.blendDstAlpha,ot.blendColor,ot.blendAlpha,ot.premultipliedAlpha),o.setFunc(ot.depthFunc),o.setTest(ot.depthTest),o.setMask(ot.depthWrite),r.setMask(ot.colorWrite);const lt=ot.stencilWrite;a.setTest(lt),lt&&(a.setMask(ot.stencilWriteMask),a.setFunc(ot.stencilFunc,ot.stencilRef,ot.stencilFuncMask),a.setOp(ot.stencilFail,ot.stencilZFail,ot.stencilZPass)),te(ot.polygonOffset,ot.polygonOffsetFactor,ot.polygonOffsetUnits),ot.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(ot){v!==ot&&(ot?i.frontFace(i.CW):i.frontFace(i.CCW),v=ot)}function jt(ot){ot!==Jp?(k(i.CULL_FACE),ot!==A&&(ot===xu?i.cullFace(i.BACK):ot===Qp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),A=ot}function Bt(ot){ot!==U&&(J&&i.lineWidth(ot),U=ot)}function te(ot,z,$){ot?(k(i.POLYGON_OFFSET_FILL),(F!==z||H!==$)&&(i.polygonOffset(z,$),F=z,H=$)):rt(i.POLYGON_OFFSET_FILL)}function $t(ot){ot?k(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function T(ot){ot===void 0&&(ot=i.TEXTURE0+st-1),V!==ot&&(i.activeTexture(ot),V=ot)}function P(ot,z,$){$===void 0&&(V===null?$=i.TEXTURE0+st-1:$=V);let lt=N[$];lt===void 0&&(lt={type:void 0,texture:void 0},N[$]=lt),(lt.type!==ot||lt.texture!==z)&&(V!==$&&(i.activeTexture($),V=$),i.bindTexture(ot,z||pt[ot]),lt.type=ot,lt.texture=z)}function at(){const ot=N[V];ot!==void 0&&ot.type!==void 0&&(i.bindTexture(ot.type,null),ot.type=void 0,ot.texture=void 0)}function mt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function St(){try{i.texSubImage2D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Xt(){try{i.texSubImage3D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function kt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function Vt(){try{i.texImage2D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function ie(){try{i.texImage3D.apply(i,arguments)}catch(ot){console.error("THREE.WebGLState:",ot)}}function qt(ot){it.equals(ot)===!1&&(i.scissor(ot.x,ot.y,ot.z,ot.w),it.copy(ot))}function Ot(ot){O.equals(ot)===!1&&(i.viewport(ot.x,ot.y,ot.z,ot.w),O.copy(ot))}function Jt(ot,z){let $=l.get(z);$===void 0&&($=new WeakMap,l.set(z,$));let lt=$.get(ot);lt===void 0&&(lt=i.getUniformBlockIndex(z,ot.name),$.set(ot,lt))}function re(ot,z){const lt=l.get(z).get(ot);c.get(z)!==lt&&(i.uniformBlockBinding(z,lt,ot.__bindingPointIndex),c.set(z,lt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},V=null,N={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,w=null,M=null,y=null,C=null,R=null,E=new le(0,0,0),S=0,_=!1,v=null,A=null,U=null,F=null,H=null,it.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:rt,bindFramebuffer:ht,drawBuffers:Mt,useProgram:Rt,setBlending:B,setMaterial:Q,setFlipSided:It,setCullFace:jt,setLineWidth:Bt,setPolygonOffset:te,setScissorTest:$t,activeTexture:T,bindTexture:P,unbindTexture:at,compressedTexImage2D:mt,compressedTexImage3D:bt,texImage2D:Vt,texImage3D:ie,updateUBOMapping:Jt,uniformBlockBinding:re,texStorage2D:ue,texStorage3D:At,texSubImage2D:St,texSubImage3D:Xt,compressedTexSubImage2D:kt,compressedTexSubImage3D:Dt,scissor:qt,viewport:Ot,reset:ge}}function gf(i,t,e,n){const s=Q1(n);switch(e){case Kh:return i*t;case jh:return i*t;case Zh:return i*t*2;case Il:return i*t/s.components*s.byteLength;case Dl:return i*t/s.components*s.byteLength;case Jh:return i*t*2/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case $h:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Nl:return i*t*4/s.components*s.byteLength;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ko:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qc:case Kc:return Math.max(i,16)*Math.max(t,8)/4;case Xc:case Yc:return Math.max(i,8)*Math.max(t,8)/2;case $c:case jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ho:case hl:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qh:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Q1(i){switch(i){case oi:case Xh:return{byteLength:1,components:1};case Ur:case qh:case Hr:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case hs:case Rl:case si:return{byteLength:4,components:1};case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function t_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,P){return h?new OffscreenCanvas(T,P):Jo("canvas")}function x(T,P,at){let mt=1;const bt=$t(T);if((bt.width>at||bt.height>at)&&(mt=at/Math.max(bt.width,bt.height)),mt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const St=Math.floor(mt*bt.width),Xt=Math.floor(mt*bt.height);d===void 0&&(d=g(St,Xt));const kt=P?g(St,Xt):d;return kt.width=St,kt.height=Xt,kt.getContext("2d").drawImage(T,0,0,St,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+St+"x"+Xt+")."),kt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,P,at,mt,bt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let St=P;if(P===i.RED&&(at===i.FLOAT&&(St=i.R32F),at===i.HALF_FLOAT&&(St=i.R16F),at===i.UNSIGNED_BYTE&&(St=i.R8)),P===i.RED_INTEGER&&(at===i.UNSIGNED_BYTE&&(St=i.R8UI),at===i.UNSIGNED_SHORT&&(St=i.R16UI),at===i.UNSIGNED_INT&&(St=i.R32UI),at===i.BYTE&&(St=i.R8I),at===i.SHORT&&(St=i.R16I),at===i.INT&&(St=i.R32I)),P===i.RG&&(at===i.FLOAT&&(St=i.RG32F),at===i.HALF_FLOAT&&(St=i.RG16F),at===i.UNSIGNED_BYTE&&(St=i.RG8)),P===i.RG_INTEGER&&(at===i.UNSIGNED_BYTE&&(St=i.RG8UI),at===i.UNSIGNED_SHORT&&(St=i.RG16UI),at===i.UNSIGNED_INT&&(St=i.RG32UI),at===i.BYTE&&(St=i.RG8I),at===i.SHORT&&(St=i.RG16I),at===i.INT&&(St=i.RG32I)),P===i.RGB_INTEGER&&(at===i.UNSIGNED_BYTE&&(St=i.RGB8UI),at===i.UNSIGNED_SHORT&&(St=i.RGB16UI),at===i.UNSIGNED_INT&&(St=i.RGB32UI),at===i.BYTE&&(St=i.RGB8I),at===i.SHORT&&(St=i.RGB16I),at===i.INT&&(St=i.RGB32I)),P===i.RGBA_INTEGER&&(at===i.UNSIGNED_BYTE&&(St=i.RGBA8UI),at===i.UNSIGNED_SHORT&&(St=i.RGBA16UI),at===i.UNSIGNED_INT&&(St=i.RGBA32UI),at===i.BYTE&&(St=i.RGBA8I),at===i.SHORT&&(St=i.RGBA16I),at===i.INT&&(St=i.RGBA32I)),P===i.RGB&&at===i.UNSIGNED_INT_5_9_9_9_REV&&(St=i.RGB9_E5),P===i.RGBA){const Xt=bt?la:Le.getTransfer(mt);at===i.FLOAT&&(St=i.RGBA32F),at===i.HALF_FLOAT&&(St=i.RGBA16F),at===i.UNSIGNED_BYTE&&(St=Xt===Ne?i.SRGB8_ALPHA8:i.RGBA8),at===i.UNSIGNED_SHORT_4_4_4_4&&(St=i.RGBA4),at===i.UNSIGNED_SHORT_5_5_5_1&&(St=i.RGB5_A1)}return(St===i.R16F||St===i.R32F||St===i.RG16F||St===i.RG32F||St===i.RGBA16F||St===i.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function y(T,P){let at;return T?P===null||P===hs||P===Qs?at=i.DEPTH24_STENCIL8:P===si?at=i.DEPTH32F_STENCIL8:P===Ur&&(at=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===hs||P===Qs?at=i.DEPTH_COMPONENT24:P===si?at=i.DEPTH_COMPONENT32F:P===Ur&&(at=i.DEPTH_COMPONENT16),at}function C(T,P){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pn&&T.minFilter!==kn?Math.log2(Math.max(P.width,P.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?P.mipmaps.length:1}function R(T){const P=T.target;P.removeEventListener("dispose",R),S(P),P.isVideoTexture&&u.delete(P)}function E(T){const P=T.target;P.removeEventListener("dispose",E),v(P)}function S(T){const P=n.get(T);if(P.__webglInit===void 0)return;const at=T.source,mt=f.get(at);if(mt){const bt=mt[P.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&_(T),Object.keys(mt).length===0&&f.delete(at)}n.remove(T)}function _(T){const P=n.get(T);i.deleteTexture(P.__webglTexture);const at=T.source,mt=f.get(at);delete mt[P.__cacheKey],o.memory.textures--}function v(T){const P=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(P.__webglFramebuffer[mt]))for(let bt=0;bt<P.__webglFramebuffer[mt].length;bt++)i.deleteFramebuffer(P.__webglFramebuffer[mt][bt]);else i.deleteFramebuffer(P.__webglFramebuffer[mt]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[mt])}else{if(Array.isArray(P.__webglFramebuffer))for(let mt=0;mt<P.__webglFramebuffer.length;mt++)i.deleteFramebuffer(P.__webglFramebuffer[mt]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let mt=0;mt<P.__webglColorRenderbuffer.length;mt++)P.__webglColorRenderbuffer[mt]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[mt]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const at=T.textures;for(let mt=0,bt=at.length;mt<bt;mt++){const St=n.get(at[mt]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(at[mt])}n.remove(T)}let A=0;function U(){A=0}function F(){const T=A;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),A+=1,T}function H(T){const P=[];return P.push(T.wrapS),P.push(T.wrapT),P.push(T.wrapR||0),P.push(T.magFilter),P.push(T.minFilter),P.push(T.anisotropy),P.push(T.internalFormat),P.push(T.format),P.push(T.type),P.push(T.generateMipmaps),P.push(T.premultiplyAlpha),P.push(T.flipY),P.push(T.unpackAlignment),P.push(T.colorSpace),P.join()}function st(T,P){const at=n.get(T);if(T.isVideoTexture&&Bt(T),T.isRenderTargetTexture===!1&&T.version>0&&at.__version!==T.version){const mt=T.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(at,T,P);return}}e.bindTexture(i.TEXTURE_2D,at.__webglTexture,i.TEXTURE0+P)}function J(T,P){const at=n.get(T);if(T.version>0&&at.__version!==T.version){O(at,T,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,at.__webglTexture,i.TEXTURE0+P)}function xt(T,P){const at=n.get(T);if(T.version>0&&at.__version!==T.version){O(at,T,P);return}e.bindTexture(i.TEXTURE_3D,at.__webglTexture,i.TEXTURE0+P)}function et(T,P){const at=n.get(T);if(T.version>0&&at.__version!==T.version){j(at,T,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture,i.TEXTURE0+P)}const V={[jo]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Wc]:i.MIRRORED_REPEAT},N={[Pn]:i.NEAREST,[E0]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},W={[R0]:i.NEVER,[N0]:i.ALWAYS,[P0]:i.LESS,[td]:i.LEQUAL,[L0]:i.EQUAL,[z0]:i.GEQUAL,[I0]:i.GREATER,[D0]:i.NOTEQUAL};function Z(T,P){if(P.type===si&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===kn||P.magFilter===ba||P.magFilter===Jr||P.magFilter===cs||P.minFilter===kn||P.minFilter===ba||P.minFilter===Jr||P.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,V[P.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,V[P.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,V[P.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,N[P.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,N[P.minFilter]),P.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,W[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Pn||P.minFilter!==Jr&&P.minFilter!==cs||P.type===si&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function it(T,P){let at=!1;T.__webglInit===void 0&&(T.__webglInit=!0,P.addEventListener("dispose",R));const mt=P.source;let bt=f.get(mt);bt===void 0&&(bt={},f.set(mt,bt));const St=H(P);if(St!==T.__cacheKey){bt[St]===void 0&&(bt[St]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,at=!0),bt[St].usedTimes++;const Xt=bt[T.__cacheKey];Xt!==void 0&&(bt[T.__cacheKey].usedTimes--,Xt.usedTimes===0&&_(P)),T.__cacheKey=St,T.__webglTexture=bt[St].texture}return at}function O(T,P,at){let mt=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(mt=i.TEXTURE_3D);const bt=it(T,P),St=P.source;e.bindTexture(mt,T.__webglTexture,i.TEXTURE0+at);const Xt=n.get(St);if(St.version!==Xt.__version||bt===!0){e.activeTexture(i.TEXTURE0+at);const kt=Le.getPrimaries(Le.workingColorSpace),Dt=P.colorSpace===gi?null:Le.getPrimaries(P.colorSpace),ue=P.colorSpace===gi||kt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let At=x(P.image,!1,s.maxTextureSize);At=te(P,At);const Vt=r.convert(P.format,P.colorSpace),ie=r.convert(P.type);let qt=M(P.internalFormat,Vt,ie,P.colorSpace,P.isVideoTexture);Z(mt,P);let Ot;const Jt=P.mipmaps,re=P.isVideoTexture!==!0,ge=Xt.__version===void 0||bt===!0,ot=St.dataReady,z=C(P,At);if(P.isDepthTexture)qt=y(P.format===tr,P.type),ge&&(re?e.texStorage2D(i.TEXTURE_2D,1,qt,At.width,At.height):e.texImage2D(i.TEXTURE_2D,0,qt,At.width,At.height,0,Vt,ie,null));else if(P.isDataTexture)if(Jt.length>0){re&&ge&&e.texStorage2D(i.TEXTURE_2D,z,qt,Jt[0].width,Jt[0].height);for(let $=0,lt=Jt.length;$<lt;$++)Ot=Jt[$],re?ot&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Ot.width,Ot.height,Vt,ie,Ot.data):e.texImage2D(i.TEXTURE_2D,$,qt,Ot.width,Ot.height,0,Vt,ie,Ot.data);P.generateMipmaps=!1}else re?(ge&&e.texStorage2D(i.TEXTURE_2D,z,qt,At.width,At.height),ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At.width,At.height,Vt,ie,At.data)):e.texImage2D(i.TEXTURE_2D,0,qt,At.width,At.height,0,Vt,ie,At.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){re&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,z,qt,Jt[0].width,Jt[0].height,At.depth);for(let $=0,lt=Jt.length;$<lt;$++)if(Ot=Jt[$],P.format!==Bn)if(Vt!==null)if(re){if(ot)if(P.layerUpdates.size>0){const _t=gf(Ot.width,Ot.height,P.format,P.type);for(const b of P.layerUpdates){const I=Ot.data.subarray(b*_t/Ot.data.BYTES_PER_ELEMENT,(b+1)*_t/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,b,Ot.width,Ot.height,1,Vt,I)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ot.width,Ot.height,At.depth,Vt,Ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,qt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ot.width,Ot.height,At.depth,Vt,ie,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,qt,Ot.width,Ot.height,At.depth,0,Vt,ie,Ot.data)}else{re&&ge&&e.texStorage2D(i.TEXTURE_2D,z,qt,Jt[0].width,Jt[0].height);for(let $=0,lt=Jt.length;$<lt;$++)Ot=Jt[$],P.format!==Bn?Vt!==null?re?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ot.width,Ot.height,Vt,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,$,qt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?ot&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Ot.width,Ot.height,Vt,ie,Ot.data):e.texImage2D(i.TEXTURE_2D,$,qt,Ot.width,Ot.height,0,Vt,ie,Ot.data)}else if(P.isDataArrayTexture)if(re){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,z,qt,At.width,At.height,At.depth),ot)if(P.layerUpdates.size>0){const $=gf(At.width,At.height,P.format,P.type);for(const lt of P.layerUpdates){const _t=At.data.subarray(lt*$/At.data.BYTES_PER_ELEMENT,(lt+1)*$/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,At.width,At.height,1,Vt,ie,_t)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Vt,ie,At.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,At.width,At.height,At.depth,0,Vt,ie,At.data);else if(P.isData3DTexture)re?(ge&&e.texStorage3D(i.TEXTURE_3D,z,qt,At.width,At.height,At.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Vt,ie,At.data)):e.texImage3D(i.TEXTURE_3D,0,qt,At.width,At.height,At.depth,0,Vt,ie,At.data);else if(P.isFramebufferTexture){if(ge)if(re)e.texStorage2D(i.TEXTURE_2D,z,qt,At.width,At.height);else{let $=At.width,lt=At.height;for(let _t=0;_t<z;_t++)e.texImage2D(i.TEXTURE_2D,_t,qt,$,lt,0,Vt,ie,null),$>>=1,lt>>=1}}else if(Jt.length>0){if(re&&ge){const $=$t(Jt[0]);e.texStorage2D(i.TEXTURE_2D,z,qt,$.width,$.height)}for(let $=0,lt=Jt.length;$<lt;$++)Ot=Jt[$],re?ot&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Vt,ie,Ot):e.texImage2D(i.TEXTURE_2D,$,qt,Vt,ie,Ot);P.generateMipmaps=!1}else if(re){if(ge){const $=$t(At);e.texStorage2D(i.TEXTURE_2D,z,qt,$.width,$.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Vt,ie,At)}else e.texImage2D(i.TEXTURE_2D,0,qt,Vt,ie,At);m(P)&&p(mt),Xt.__version=St.version,P.onUpdate&&P.onUpdate(P)}T.__version=P.version}function j(T,P,at){if(P.image.length!==6)return;const mt=it(T,P),bt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+at);const St=n.get(bt);if(bt.version!==St.__version||mt===!0){e.activeTexture(i.TEXTURE0+at);const Xt=Le.getPrimaries(Le.workingColorSpace),kt=P.colorSpace===gi?null:Le.getPrimaries(P.colorSpace),Dt=P.colorSpace===gi||Xt===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const ue=P.isCompressedTexture||P.image[0].isCompressedTexture,At=P.image[0]&&P.image[0].isDataTexture,Vt=[];for(let lt=0;lt<6;lt++)!ue&&!At?Vt[lt]=x(P.image[lt],!0,s.maxCubemapSize):Vt[lt]=At?P.image[lt].image:P.image[lt],Vt[lt]=te(P,Vt[lt]);const ie=Vt[0],qt=r.convert(P.format,P.colorSpace),Ot=r.convert(P.type),Jt=M(P.internalFormat,qt,Ot,P.colorSpace),re=P.isVideoTexture!==!0,ge=St.__version===void 0||mt===!0,ot=bt.dataReady;let z=C(P,ie);Z(i.TEXTURE_CUBE_MAP,P);let $;if(ue){re&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,z,Jt,ie.width,ie.height);for(let lt=0;lt<6;lt++){$=Vt[lt].mipmaps;for(let _t=0;_t<$.length;_t++){const b=$[_t];P.format!==Bn?qt!==null?re?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t,0,0,b.width,b.height,qt,b.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t,Jt,b.width,b.height,0,b.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t,0,0,b.width,b.height,qt,Ot,b.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t,Jt,b.width,b.height,0,qt,Ot,b.data)}}}else{if($=P.mipmaps,re&&ge){$.length>0&&z++;const lt=$t(Vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,z,Jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(At){re?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Vt[lt].width,Vt[lt].height,qt,Ot,Vt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,Vt[lt].width,Vt[lt].height,0,qt,Ot,Vt[lt].data);for(let _t=0;_t<$.length;_t++){const I=$[_t].image[lt].image;re?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t+1,0,0,I.width,I.height,qt,Ot,I.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t+1,Jt,I.width,I.height,0,qt,Ot,I.data)}}else{re?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,qt,Ot,Vt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,qt,Ot,Vt[lt]);for(let _t=0;_t<$.length;_t++){const b=$[_t];re?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t+1,0,0,qt,Ot,b.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,_t+1,Jt,qt,Ot,b.image[lt])}}}m(P)&&p(i.TEXTURE_CUBE_MAP),St.__version=bt.version,P.onUpdate&&P.onUpdate(P)}T.__version=P.version}function pt(T,P,at,mt,bt,St){const Xt=r.convert(at.format,at.colorSpace),kt=r.convert(at.type),Dt=M(at.internalFormat,Xt,kt,at.colorSpace),ue=n.get(P),At=n.get(at);if(At.__renderTarget=P,!ue.__hasExternalTextures){const Vt=Math.max(1,P.width>>St),ie=Math.max(1,P.height>>St);bt===i.TEXTURE_3D||bt===i.TEXTURE_2D_ARRAY?e.texImage3D(bt,St,Dt,Vt,ie,P.depth,0,Xt,kt,null):e.texImage2D(bt,St,Dt,Vt,ie,0,Xt,kt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),jt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,bt,At.__webglTexture,0,It(P)):(bt===i.TEXTURE_2D||bt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,bt,At.__webglTexture,St),e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(T,P,at){if(i.bindRenderbuffer(i.RENDERBUFFER,T),P.depthBuffer){const mt=P.depthTexture,bt=mt&&mt.isDepthTexture?mt.type:null,St=y(P.stencilBuffer,bt),Xt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=It(P);jt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,St,P.width,P.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,St,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,St,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xt,i.RENDERBUFFER,T)}else{const mt=P.textures;for(let bt=0;bt<mt.length;bt++){const St=mt[bt],Xt=r.convert(St.format,St.colorSpace),kt=r.convert(St.type),Dt=M(St.internalFormat,Xt,kt,St.colorSpace),ue=It(P);at&&jt(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Dt,P.width,P.height):jt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Dt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(T,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=n.get(P.depthTexture);mt.__renderTarget=P,(!mt.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),st(P.depthTexture,0);const bt=mt.__webglTexture,St=It(P);if(P.depthTexture.format===Xs)jt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0);else if(P.depthTexture.format===tr)jt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function ht(T){const P=n.get(T),at=T.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==T.depthTexture){const mt=T.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),mt){const bt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,mt.removeEventListener("dispose",bt)};mt.addEventListener("dispose",bt),P.__depthDisposeCallback=bt}P.__boundDepthTexture=mt}if(T.depthTexture&&!P.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");rt(P.__webglFramebuffer,T)}else if(at){P.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[mt]),P.__webglDepthbuffer[mt]===void 0)P.__webglDepthbuffer[mt]=i.createRenderbuffer(),k(P.__webglDepthbuffer[mt],T,!1);else{const bt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=P.__webglDepthbuffer[mt];i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,St)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),k(P.__webglDepthbuffer,T,!1);else{const mt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(T,P,at){const mt=n.get(T);P!==void 0&&pt(mt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),at!==void 0&&ht(T)}function Rt(T){const P=T.texture,at=n.get(T),mt=n.get(P);T.addEventListener("dispose",E);const bt=T.textures,St=T.isWebGLCubeRenderTarget===!0,Xt=bt.length>1;if(Xt||(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=P.version,o.memory.textures++),St){at.__webglFramebuffer=[];for(let kt=0;kt<6;kt++)if(P.mipmaps&&P.mipmaps.length>0){at.__webglFramebuffer[kt]=[];for(let Dt=0;Dt<P.mipmaps.length;Dt++)at.__webglFramebuffer[kt][Dt]=i.createFramebuffer()}else at.__webglFramebuffer[kt]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){at.__webglFramebuffer=[];for(let kt=0;kt<P.mipmaps.length;kt++)at.__webglFramebuffer[kt]=i.createFramebuffer()}else at.__webglFramebuffer=i.createFramebuffer();if(Xt)for(let kt=0,Dt=bt.length;kt<Dt;kt++){const ue=n.get(bt[kt]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&jt(T)===!1){at.__webglMultisampledFramebuffer=i.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let kt=0;kt<bt.length;kt++){const Dt=bt[kt];at.__webglColorRenderbuffer[kt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,at.__webglColorRenderbuffer[kt]);const ue=r.convert(Dt.format,Dt.colorSpace),At=r.convert(Dt.type),Vt=M(Dt.internalFormat,ue,At,Dt.colorSpace,T.isXRRenderTarget===!0),ie=It(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Vt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,at.__webglColorRenderbuffer[kt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(at.__webglDepthRenderbuffer=i.createRenderbuffer(),k(at.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(St){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),Z(i.TEXTURE_CUBE_MAP,P);for(let kt=0;kt<6;kt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Dt=0;Dt<P.mipmaps.length;Dt++)pt(at.__webglFramebuffer[kt][Dt],T,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,Dt);else pt(at.__webglFramebuffer[kt],T,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0);m(P)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Xt){for(let kt=0,Dt=bt.length;kt<Dt;kt++){const ue=bt[kt],At=n.get(ue);e.bindTexture(i.TEXTURE_2D,At.__webglTexture),Z(i.TEXTURE_2D,ue),pt(at.__webglFramebuffer,T,ue,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,0),m(ue)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let kt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(kt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(kt,mt.__webglTexture),Z(kt,P),P.mipmaps&&P.mipmaps.length>0)for(let Dt=0;Dt<P.mipmaps.length;Dt++)pt(at.__webglFramebuffer[Dt],T,P,i.COLOR_ATTACHMENT0,kt,Dt);else pt(at.__webglFramebuffer,T,P,i.COLOR_ATTACHMENT0,kt,0);m(P)&&p(kt),e.unbindTexture()}T.depthBuffer&&ht(T)}function tt(T){const P=T.textures;for(let at=0,mt=P.length;at<mt;at++){const bt=P[at];if(m(bt)){const St=w(T),Xt=n.get(bt).__webglTexture;e.bindTexture(St,Xt),p(St),e.unbindTexture()}}}const gt=[],B=[];function Q(T){if(T.samples>0){if(jt(T)===!1){const P=T.textures,at=T.width,mt=T.height;let bt=i.COLOR_BUFFER_BIT;const St=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xt=n.get(T),kt=P.length>1;if(kt)for(let Dt=0;Dt<P.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Dt=0;Dt<P.length;Dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(bt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(bt|=i.STENCIL_BUFFER_BIT)),kt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xt.__webglColorRenderbuffer[Dt]);const ue=n.get(P[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,at,mt,0,0,at,mt,bt,i.NEAREST),c===!0&&(gt.length=0,B.length=0,gt.push(i.COLOR_ATTACHMENT0+Dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(gt.push(St),B.push(St),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),kt)for(let Dt=0;Dt<P.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Xt.__webglColorRenderbuffer[Dt]);const ue=n.get(P[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ue,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const P=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function It(T){return Math.min(s.maxSamples,T.samples)}function jt(T){const P=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Bt(T){const P=o.render.frame;u.get(T)!==P&&(u.set(T,P),T.update())}function te(T,P){const at=T.colorSpace,mt=T.format,bt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||at!==sr&&at!==gi&&(Le.getTransfer(at)===Ne?(mt!==Bn||bt!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),P}function $t(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=st,this.setTexture2DArray=J,this.setTexture3D=xt,this.setTextureCube=et,this.rebindTextures=Mt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=jt}function e_(i,t){function e(n,s=gi){let r;const o=Le.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===hs)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Hr)return i.HALF_FLOAT;if(n===Kh)return i.ALPHA;if(n===$h)return i.RGB;if(n===Bn)return i.RGBA;if(n===jh)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Dl)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Nl)return i.RGBA_INTEGER;if(n===Fo||n===Oo||n===ko||n===Bo)if(o===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xc||n===qc||n===Yc||n===Kc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$c||n===jc||n===Zc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$c||n===jc)return o===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===ul||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===hl||n===dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return o===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class n_ extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ls extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i_={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
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

}`;class o_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a_ extends rr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const x=new o_,m=e.getContextAttributes();let p=null,w=null;const M=[],y=[],C=new ne;let R=null;const E=new Tn;E.viewport=new He;const S=new Tn;S.viewport=new He;const _=[E,S],v=new n_;let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let j=M[O];return j===void 0&&(j=new Za,M[O]=j),j.getTargetRaySpace()},this.getControllerGrip=function(O){let j=M[O];return j===void 0&&(j=new Za,M[O]=j),j.getGripSpace()},this.getHand=function(O){let j=M[O];return j===void 0&&(j=new Za,M[O]=j),j.getHandSpace()};function F(O){const j=y.indexOf(O.inputSource);if(j===-1)return;const pt=M[j];pt!==void 0&&(pt.update(O.inputSource,O.frame,l||o),pt.dispatchEvent({type:O.type,data:O.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",st);for(let O=0;O<M.length;O++){const j=y[O];j!==null&&(y[O]=null,M[O].disconnect(j))}A=null,U=null,x.reset(),t.setRenderTarget(p),h=null,f=null,d=null,s=null,w=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",st),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new ds(h.framebufferWidth,h.framebufferHeight,{format:Bn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,pt=null,k=null;m.depth&&(k=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?tr:Xs,pt=m.stencil?Qs:hs);const rt={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new ds(f.textureWidth,f.textureHeight,{format:Bn,type:oi,depthTexture:new pd(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function st(O){for(let j=0;j<O.removed.length;j++){const pt=O.removed[j],k=y.indexOf(pt);k>=0&&(y[k]=null,M[k].disconnect(pt))}for(let j=0;j<O.added.length;j++){const pt=O.added[j];let k=y.indexOf(pt);if(k===-1){for(let ht=0;ht<M.length;ht++)if(ht>=y.length){y.push(pt),k=ht;break}else if(y[ht]===null){y[ht]=pt,k=ht;break}if(k===-1)break}const rt=M[k];rt&&rt.connect(pt)}}const J=new nt,xt=new nt;function et(O,j,pt){J.setFromMatrixPosition(j.matrixWorld),xt.setFromMatrixPosition(pt.matrixWorld);const k=J.distanceTo(xt),rt=j.projectionMatrix.elements,ht=pt.projectionMatrix.elements,Mt=rt[14]/(rt[10]-1),Rt=rt[14]/(rt[10]+1),tt=(rt[9]+1)/rt[5],gt=(rt[9]-1)/rt[5],B=(rt[8]-1)/rt[0],Q=(ht[8]+1)/ht[0],It=Mt*B,jt=Mt*Q,Bt=k/(-B+Q),te=Bt*-B;if(j.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(te),O.translateZ(Bt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),rt[10]===-1)O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const $t=Mt+Bt,T=Rt+Bt,P=It-te,at=jt+(k-te),mt=tt*Rt/T*$t,bt=gt*Rt/T*$t;O.projectionMatrix.makePerspective(P,at,mt,bt,$t,T),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function V(O,j){j===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(j.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let j=O.near,pt=O.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(pt=x.depthFar)),v.near=S.near=E.near=j,v.far=S.far=E.far=pt,(A!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,U=v.far),E.layers.mask=O.layers.mask|2,S.layers.mask=O.layers.mask|4,v.layers.mask=E.layers.mask|S.layers.mask;const k=O.parent,rt=v.cameras;V(v,k);for(let ht=0;ht<rt.length;ht++)V(rt[ht],k);rt.length===2?et(v,E,S):v.projectionMatrix.copy(E.projectionMatrix),N(O,v,k)};function N(O,j,pt){pt===null?O.matrix.copy(j.matrixWorld):(O.matrix.copy(pt.matrixWorld),O.matrix.invert(),O.matrix.multiply(j.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(j.projectionMatrix),O.projectionMatrixInverse.copy(j.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Fr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(O){c=O,f!==null&&(f.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let W=null;function Z(O,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const pt=u.views;h!==null&&(t.setRenderTargetFramebuffer(w,h.framebuffer),t.setRenderTarget(w));let k=!1;pt.length!==v.cameras.length&&(v.cameras.length=0,k=!0);for(let ht=0;ht<pt.length;ht++){const Mt=pt[ht];let Rt=null;if(h!==null)Rt=h.getViewport(Mt);else{const gt=d.getViewSubImage(f,Mt);Rt=gt.viewport,ht===0&&(t.setRenderTargetTextures(w,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(w))}let tt=_[ht];tt===void 0&&(tt=new Tn,tt.layers.enable(ht),tt.viewport=new He,_[ht]=tt),tt.matrix.fromArray(Mt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Mt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ht===0&&(v.matrix.copy(tt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),k===!0&&v.cameras.push(tt)}const rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")){const ht=d.getDepthInformation(pt[0]);ht&&ht.isValid&&ht.texture&&x.init(t,ht,s.renderState)}}for(let pt=0;pt<M.length;pt++){const k=y[pt],rt=M[pt];k!==null&&rt!==void 0&&rt.update(k,j,l||o)}W&&W(O,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const it=new hd;it.setAnimationLoop(Z),this.setAnimationLoop=function(O){W=O},this.dispose=function(){}}}const Zi=new Ln,c_=new Ie;function l_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ld(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),M=w.envMap,y=w.envMapRotation;M&&(m.envMap.value=M,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(Zi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const y=M.program;n.uniformBlockBinding(w,y)}function l(w,M){let y=s[w.id];y===void 0&&(g(w),y=u(w),s[w.id]=y,w.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(w,C);const R=t.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function u(w){const M=d();w.__bindingPointIndex=M;const y=i.createBuffer(),C=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const M=s[w.id],y=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,E=y.length;R<E;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,v=S.length;_<v;_++){const A=S[_];if(h(A,R,_,C)===!0){const U=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let H=0;for(let st=0;st<F.length;st++){const J=F[st],xt=x(J);typeof J=="number"||typeof J=="boolean"?(A.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,U+H,A.__data)):J.isMatrix3?(A.__data[0]=J.elements[0],A.__data[1]=J.elements[1],A.__data[2]=J.elements[2],A.__data[3]=0,A.__data[4]=J.elements[3],A.__data[5]=J.elements[4],A.__data[6]=J.elements[5],A.__data[7]=0,A.__data[8]=J.elements[6],A.__data[9]=J.elements[7],A.__data[10]=J.elements[8],A.__data[11]=0):(J.toArray(A.__data,H),H+=xt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(w,M,y,C){const R=w.value,E=M+"_"+y;if(C[E]===void 0)return typeof R=="number"||typeof R=="boolean"?C[E]=R:C[E]=R.clone(),!0;{const S=C[E];if(typeof R=="number"||typeof R=="boolean"){if(S!==R)return C[E]=R,!0}else if(S.equals(R)===!1)return S.copy(R),!0}return!1}function g(w){const M=w.uniforms;let y=0;const C=16;for(let E=0,S=M.length;E<S;E++){const _=Array.isArray(M[E])?M[E]:[M[E]];for(let v=0,A=_.length;v<A;v++){const U=_[v],F=Array.isArray(U.value)?U.value:[U.value];for(let H=0,st=F.length;H<st;H++){const J=F[H],xt=x(J),et=y%C,V=et%xt.boundary,N=et+V;y+=V,N!==0&&C-N<xt.storage&&(y+=C-N),U.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=xt.storage}}}const R=y%C;return R>0&&(y+=C-R),w.__size=y,w.__cache={},this}function x(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class f_{constructor(t={}){const{canvas:e=J0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Fi,this.toneMappingExposure=1;const y=this;let C=!1,R=0,E=0,S=null,_=-1,v=null;const A=new He,U=new He;let F=null;const H=new le(0);let st=0,J=e.width,xt=e.height,et=1,V=null,N=null;const W=new He(0,0,J,xt),Z=new He(0,0,J,xt);let it=!1;const O=new Fl;let j=!1,pt=!1;const k=new Ie,rt=new Ie,ht=new nt,Mt=new He,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function gt(){return S===null?et:1}let B=n;function Q(D,L){return e.getContext(D,L)}try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Al}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",b,!1),B===null){const L="webgl2";if(B=Q(L,D),B===null)throw Q(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let It,jt,Bt,te,$t,T,P,at,mt,bt,St,Xt,kt,Dt,ue,At,Vt,ie,qt,Ot,Jt,re,ge,ot;function z(){It=new gv(B),It.init(),re=new e_(B,It),jt=new uv(B,It,t,re),Bt=new J1(B,It),jt.reverseDepthBuffer&&f&&Bt.buffers.depth.setReversed(!0),te=new _v(B),$t=new F1,T=new t_(B,It,Bt,$t,jt,re,te),P=new hv(y),at=new mv(y),mt=new Tm(B),ge=new cv(B,mt),bt=new xv(B,mt,te,ge),St=new yv(B,bt,mt,te),qt=new Mv(B,jt,T),At=new fv($t),Xt=new U1(y,P,at,It,jt,ge,At),kt=new l_(y,$t),Dt=new k1,ue=new X1(It),ie=new av(y,P,at,Bt,St,h,c),Vt=new j1(y,St,jt),ot=new u_(B,te,jt,Bt),Ot=new lv(B,It,te),Jt=new vv(B,It,te),te.programs=Xt.programs,y.capabilities=jt,y.extensions=It,y.properties=$t,y.renderLists=Dt,y.shadowMap=Vt,y.state=Bt,y.info=te}z();const $=new a_(y,B);this.xr=$,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const D=It.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=It.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(D){D!==void 0&&(et=D,this.setSize(J,xt,!1))},this.getSize=function(D){return D.set(J,xt)},this.setSize=function(D,L,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=D,xt=L,e.width=Math.floor(D*et),e.height=Math.floor(L*et),X===!0&&(e.style.width=D+"px",e.style.height=L+"px"),this.setViewport(0,0,D,L)},this.getDrawingBufferSize=function(D){return D.set(J*et,xt*et).floor()},this.setDrawingBufferSize=function(D,L,X){J=D,xt=L,et=X,e.width=Math.floor(D*X),e.height=Math.floor(L*X),this.setViewport(0,0,D,L)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(W)},this.setViewport=function(D,L,X,ct){D.isVector4?W.set(D.x,D.y,D.z,D.w):W.set(D,L,X,ct),Bt.viewport(A.copy(W).multiplyScalar(et).round())},this.getScissor=function(D){return D.copy(Z)},this.setScissor=function(D,L,X,ct){D.isVector4?Z.set(D.x,D.y,D.z,D.w):Z.set(D,L,X,ct),Bt.scissor(U.copy(Z).multiplyScalar(et).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(D){Bt.setScissorTest(it=D)},this.setOpaqueSort=function(D){V=D},this.setTransparentSort=function(D){N=D},this.getClearColor=function(D){return D.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(D=!0,L=!0,X=!0){let ct=0;if(D){let K=!1;if(S!==null){const Ct=S.texture.format;K=Ct===Nl||Ct===zl||Ct===Dl}if(K){const Ct=S.texture.type,zt=Ct===oi||Ct===hs||Ct===Ur||Ct===Qs||Ct===Pl||Ct===Ll,Zt=ie.getClearColor(),Yt=ie.getClearAlpha(),he=Zt.r,ut=Zt.g,vt=Zt.b;zt?(g[0]=he,g[1]=ut,g[2]=vt,g[3]=Yt,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=he,x[1]=ut,x[2]=vt,x[3]=Yt,B.clearBufferiv(B.COLOR,0,x))}else ct|=B.COLOR_BUFFER_BIT}L&&(ct|=B.DEPTH_BUFFER_BIT),X&&(ct|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",b,!1),Dt.dispose(),ue.dispose(),$t.dispose(),P.dispose(),at.dispose(),St.dispose(),ge.dispose(),ot.dispose(),Xt.dispose(),$.dispose(),$.removeEventListener("sessionstart",wt),$.removeEventListener("sessionend",Ut),Gt.stop()};function lt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const D=te.autoReset,L=Vt.enabled,X=Vt.autoUpdate,ct=Vt.needsUpdate,K=Vt.type;z(),te.autoReset=D,Vt.enabled=L,Vt.autoUpdate=X,Vt.needsUpdate=ct,Vt.type=K}function b(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function I(D){const L=D.target;L.removeEventListener("dispose",I),G(L)}function G(D){q(D),$t.remove(D)}function q(D){const L=$t.get(D).programs;L!==void 0&&(L.forEach(function(X){Xt.releaseProgram(X)}),D.isShaderMaterial&&Xt.releaseShaderCache(D))}this.renderBufferDirect=function(D,L,X,ct,K,Ct){L===null&&(L=Rt);const zt=K.isMesh&&K.matrixWorld.determinant()<0,Zt=Ce(D,L,X,ct,K);Bt.setMaterial(ct,zt);let Yt=X.index,he=1;if(ct.wireframe===!0){if(Yt=bt.getWireframeAttribute(X),Yt===void 0)return;he=2}const ut=X.drawRange,vt=X.attributes.position;let yt=ut.start*he,Pt=(ut.start+ut.count)*he;Ct!==null&&(yt=Math.max(yt,Ct.start*he),Pt=Math.min(Pt,(Ct.start+Ct.count)*he)),Yt!==null?(yt=Math.max(yt,0),Pt=Math.min(Pt,Yt.count)):vt!=null&&(yt=Math.max(yt,0),Pt=Math.min(Pt,vt.count));const Lt=Pt-yt;if(Lt<0||Lt===1/0)return;ge.setup(K,ct,Zt,X,Yt);let Kt,Wt=Ot;if(Yt!==null&&(Kt=mt.get(Yt),Wt=Jt,Wt.setIndex(Kt)),K.isMesh)ct.wireframe===!0?(Bt.setLineWidth(ct.wireframeLinewidth*gt()),Wt.setMode(B.LINES)):Wt.setMode(B.TRIANGLES);else if(K.isLine){let Nt=ct.linewidth;Nt===void 0&&(Nt=1),Bt.setLineWidth(Nt*gt()),K.isLineSegments?Wt.setMode(B.LINES):K.isLineLoop?Wt.setMode(B.LINE_LOOP):Wt.setMode(B.LINE_STRIP)}else K.isPoints?Wt.setMode(B.POINTS):K.isSprite&&Wt.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Wt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Wt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Nt=K._multiDrawStarts,_e=K._multiDrawCounts,se=K._multiDrawCount,Me=Yt?mt.get(Yt).bytesPerElement:1,Et=$t.get(ct).currentProgram.getUniforms();for(let we=0;we<se;we++)Et.setValue(B,"_gl_DrawID",we),Wt.render(Nt[we]/Me,_e[we])}else if(K.isInstancedMesh)Wt.renderInstances(yt,Lt,K.count);else if(X.isInstancedBufferGeometry){const Nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_e=Math.min(X.instanceCount,Nt);Wt.renderInstances(yt,Lt,_e)}else Wt.render(yt,Lt)};function Y(D,L,X){D.transparent===!0&&D.side===An&&D.forceSinglePass===!1?(D.side=vn,D.needsUpdate=!0,ye(D,L,X),D.side=Hi,D.needsUpdate=!0,ye(D,L,X),D.side=An):ye(D,L,X)}this.compile=function(D,L,X=null){X===null&&(X=D),p=ue.get(X),p.init(L),M.push(p),X.traverseVisible(function(K){K.isLight&&K.layers.test(L.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),D!==X&&D.traverseVisible(function(K){K.isLight&&K.layers.test(L.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();const ct=new Set;return D.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ct=K.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){const Zt=Ct[zt];Y(Zt,X,K),ct.add(Zt)}else Y(Ct,X,K),ct.add(Ct)}),M.pop(),p=null,ct},this.compileAsync=function(D,L,X=null){const ct=this.compile(D,L,X);return new Promise(K=>{function Ct(){if(ct.forEach(function(zt){$t.get(zt).currentProgram.isReady()&&ct.delete(zt)}),ct.size===0){K(D);return}setTimeout(Ct,10)}It.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let ft=null;function dt(D){ft&&ft(D)}function wt(){Gt.stop()}function Ut(){Gt.start()}const Gt=new hd;Gt.setAnimationLoop(dt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(D){ft=D,$.setAnimationLoop(D),D===null?Gt.stop():Gt.start()},$.addEventListener("sessionstart",wt),$.addEventListener("sessionend",Ut),this.render=function(D,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(L),L=$.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,L,S),p=ue.get(D,M.length),p.init(L),M.push(p),rt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),O.setFromProjectionMatrix(rt),pt=this.localClippingEnabled,j=At.init(this.clippingPlanes,pt),m=Dt.get(D,w.length),m.init(),w.push(m),$.enabled===!0&&$.isPresenting===!0){const Ct=y.xr.getDepthSensingMesh();Ct!==null&&oe(Ct,L,-1/0,y.sortObjects)}oe(D,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(V,N),tt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,tt&&ie.addToRenderList(m,D),this.info.render.frame++,j===!0&&At.beginShadows();const X=p.state.shadowsArray;Vt.render(X,D,L),j===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=m.opaque,K=m.transmissive;if(p.setupLights(),L.isArrayCamera){const Ct=L.cameras;if(K.length>0)for(let zt=0,Zt=Ct.length;zt<Zt;zt++){const Yt=Ct[zt];Ft(ct,K,D,Yt)}tt&&ie.render(D);for(let zt=0,Zt=Ct.length;zt<Zt;zt++){const Yt=Ct[zt];fe(m,D,Yt,Yt.viewport)}}else K.length>0&&Ft(ct,K,D,L),tt&&ie.render(D),fe(m,D,L);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),D.isScene===!0&&D.onAfterRender(y,D,L),ge.resetDefaultState(),_=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],j===!0&&At.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function oe(D,L,X,ct){if(D.visible===!1)return;if(D.layers.test(L.layers)){if(D.isGroup)X=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(L);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||O.intersectsSprite(D)){ct&&Mt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(rt);const zt=St.update(D),Zt=D.material;Zt.visible&&m.push(D,zt,Zt,X,Mt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||O.intersectsObject(D))){const zt=St.update(D),Zt=D.material;if(ct&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Mt.copy(D.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Mt.copy(zt.boundingSphere.center)),Mt.applyMatrix4(D.matrixWorld).applyMatrix4(rt)),Array.isArray(Zt)){const Yt=zt.groups;for(let he=0,ut=Yt.length;he<ut;he++){const vt=Yt[he],yt=Zt[vt.materialIndex];yt&&yt.visible&&m.push(D,zt,yt,X,Mt.z,vt)}}else Zt.visible&&m.push(D,zt,Zt,X,Mt.z,null)}}const Ct=D.children;for(let zt=0,Zt=Ct.length;zt<Zt;zt++)oe(Ct[zt],L,X,ct)}function fe(D,L,X,ct){const K=D.opaque,Ct=D.transmissive,zt=D.transparent;p.setupLightsView(X),j===!0&&At.setGlobalState(y.clippingPlanes,X),ct&&Bt.viewport(A.copy(ct)),K.length>0&&ce(K,L,X),Ct.length>0&&ce(Ct,L,X),zt.length>0&&ce(zt,L,X),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Ft(D,L,X,ct){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ct.id]===void 0&&(p.state.transmissionRenderTarget[ct.id]=new ds(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Hr:oi,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Ct=p.state.transmissionRenderTarget[ct.id],zt=ct.viewport||A;Ct.setSize(zt.z,zt.w);const Zt=y.getRenderTarget();y.setRenderTarget(Ct),y.getClearColor(H),st=y.getClearAlpha(),st<1&&y.setClearColor(16777215,.5),y.clear(),tt&&ie.render(X);const Yt=y.toneMapping;y.toneMapping=Fi;const he=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),p.setupLightsView(ct),j===!0&&At.setGlobalState(y.clippingPlanes,ct),ce(D,X,ct),T.updateMultisampleRenderTarget(Ct),T.updateRenderTargetMipmap(Ct),It.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let vt=0,yt=L.length;vt<yt;vt++){const Pt=L[vt],Lt=Pt.object,Kt=Pt.geometry,Wt=Pt.material,Nt=Pt.group;if(Wt.side===An&&Lt.layers.test(ct.layers)){const _e=Wt.side;Wt.side=vn,Wt.needsUpdate=!0,ee(Lt,X,ct,Kt,Wt,Nt),Wt.side=_e,Wt.needsUpdate=!0,ut=!0}}ut===!0&&(T.updateMultisampleRenderTarget(Ct),T.updateRenderTargetMipmap(Ct))}y.setRenderTarget(Zt),y.setClearColor(H,st),he!==void 0&&(ct.viewport=he),y.toneMapping=Yt}function ce(D,L,X){const ct=L.isScene===!0?L.overrideMaterial:null;for(let K=0,Ct=D.length;K<Ct;K++){const zt=D[K],Zt=zt.object,Yt=zt.geometry,he=ct===null?zt.material:ct,ut=zt.group;Zt.layers.test(X.layers)&&ee(Zt,L,X,Yt,he,ut)}}function ee(D,L,X,ct,K,Ct){D.onBeforeRender(y,L,X,ct,K,Ct),D.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(y,L,X,ct,D,Ct),K.transparent===!0&&K.side===An&&K.forceSinglePass===!1?(K.side=vn,K.needsUpdate=!0,y.renderBufferDirect(X,L,ct,K,D,Ct),K.side=Hi,K.needsUpdate=!0,y.renderBufferDirect(X,L,ct,K,D,Ct),K.side=An):y.renderBufferDirect(X,L,ct,K,D,Ct),D.onAfterRender(y,L,X,ct,K,Ct)}function ye(D,L,X){L.isScene!==!0&&(L=Rt);const ct=$t.get(D),K=p.state.lights,Ct=p.state.shadowsArray,zt=K.state.version,Zt=Xt.getParameters(D,K.state,Ct,L,X),Yt=Xt.getProgramCacheKey(Zt);let he=ct.programs;ct.environment=D.isMeshStandardMaterial?L.environment:null,ct.fog=L.fog,ct.envMap=(D.isMeshStandardMaterial?at:P).get(D.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&D.envMap===null?L.environmentRotation:D.envMapRotation,he===void 0&&(D.addEventListener("dispose",I),he=new Map,ct.programs=he);let ut=he.get(Yt);if(ut!==void 0){if(ct.currentProgram===ut&&ct.lightsStateVersion===zt)return Te(D,Zt),ut}else Zt.uniforms=Xt.getUniforms(D),D.onBeforeCompile(Zt,y),ut=Xt.acquireProgram(Zt,Yt),he.set(Yt,ut),ct.uniforms=Zt.uniforms;const vt=ct.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(vt.clippingPlanes=At.uniform),Te(D,Zt),ct.needsLights=Ve(D),ct.lightsStateVersion=zt,ct.needsLights&&(vt.ambientLightColor.value=K.state.ambient,vt.lightProbe.value=K.state.probe,vt.directionalLights.value=K.state.directional,vt.directionalLightShadows.value=K.state.directionalShadow,vt.spotLights.value=K.state.spot,vt.spotLightShadows.value=K.state.spotShadow,vt.rectAreaLights.value=K.state.rectArea,vt.ltc_1.value=K.state.rectAreaLTC1,vt.ltc_2.value=K.state.rectAreaLTC2,vt.pointLights.value=K.state.point,vt.pointLightShadows.value=K.state.pointShadow,vt.hemisphereLights.value=K.state.hemi,vt.directionalShadowMap.value=K.state.directionalShadowMap,vt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,vt.spotShadowMap.value=K.state.spotShadowMap,vt.spotLightMatrix.value=K.state.spotLightMatrix,vt.spotLightMap.value=K.state.spotLightMap,vt.pointShadowMap.value=K.state.pointShadowMap,vt.pointShadowMatrix.value=K.state.pointShadowMatrix),ct.currentProgram=ut,ct.uniformsList=null,ut}function Se(D){if(D.uniformsList===null){const L=D.currentProgram.getUniforms();D.uniformsList=Go.seqWithValue(L.seq,D.uniforms)}return D.uniformsList}function Te(D,L){const X=$t.get(D);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function Ce(D,L,X,ct,K){L.isScene!==!0&&(L=Rt),T.resetTextureUnits();const Ct=L.fog,zt=ct.isMeshStandardMaterial?L.environment:null,Zt=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:sr,Yt=(ct.isMeshStandardMaterial?at:P).get(ct.envMap||zt),he=ct.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ut=!!X.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),vt=!!X.morphAttributes.position,yt=!!X.morphAttributes.normal,Pt=!!X.morphAttributes.color;let Lt=Fi;ct.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Lt=y.toneMapping);const Kt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Wt=Kt!==void 0?Kt.length:0,Nt=$t.get(ct),_e=p.state.lights;if(j===!0&&(pt===!0||D!==v)){const pe=D===v&&ct.id===_;At.setState(ct,D,pe)}let se=!1;ct.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==_e.state.version||Nt.outputColorSpace!==Zt||K.isBatchedMesh&&Nt.batching===!1||!K.isBatchedMesh&&Nt.batching===!0||K.isBatchedMesh&&Nt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Nt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Nt.instancing===!1||!K.isInstancedMesh&&Nt.instancing===!0||K.isSkinnedMesh&&Nt.skinning===!1||!K.isSkinnedMesh&&Nt.skinning===!0||K.isInstancedMesh&&Nt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Nt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Nt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Nt.instancingMorph===!1&&K.morphTexture!==null||Nt.envMap!==Yt||ct.fog===!0&&Nt.fog!==Ct||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==At.numPlanes||Nt.numIntersection!==At.numIntersection)||Nt.vertexAlphas!==he||Nt.vertexTangents!==ut||Nt.morphTargets!==vt||Nt.morphNormals!==yt||Nt.morphColors!==Pt||Nt.toneMapping!==Lt||Nt.morphTargetsCount!==Wt)&&(se=!0):(se=!0,Nt.__version=ct.version);let Me=Nt.currentProgram;se===!0&&(Me=ye(ct,L,K));let Et=!1,we=!1,de=!1;const me=Me.getUniforms(),tn=Nt.uniforms;if(Bt.useProgram(Me.program)&&(Et=!0,we=!0,de=!0),ct.id!==_&&(_=ct.id,we=!0),Et||v!==D){Bt.buffers.depth.getReversed()?(k.copy(D.projectionMatrix),tm(k),em(k),me.setValue(B,"projectionMatrix",k)):me.setValue(B,"projectionMatrix",D.projectionMatrix),me.setValue(B,"viewMatrix",D.matrixWorldInverse);const xe=me.map.cameraPosition;xe!==void 0&&xe.setValue(B,ht.setFromMatrixPosition(D.matrixWorld)),jt.logarithmicDepthBuffer&&me.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&me.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),v!==D&&(v=D,we=!0,de=!0)}if(K.isSkinnedMesh){me.setOptional(B,K,"bindMatrix"),me.setOptional(B,K,"bindMatrixInverse");const pe=K.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),me.setValue(B,"boneTexture",pe.boneTexture,T))}K.isBatchedMesh&&(me.setOptional(B,K,"batchingTexture"),me.setValue(B,"batchingTexture",K._matricesTexture,T),me.setOptional(B,K,"batchingIdTexture"),me.setValue(B,"batchingIdTexture",K._indirectTexture,T),me.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&me.setValue(B,"batchingColorTexture",K._colorsTexture,T));const De=X.morphAttributes;if((De.position!==void 0||De.normal!==void 0||De.color!==void 0)&&qt.update(K,X,Me),(we||Nt.receiveShadow!==K.receiveShadow)&&(Nt.receiveShadow=K.receiveShadow,me.setValue(B,"receiveShadow",K.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(tn.envMap.value=Yt,tn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&L.environment!==null&&(tn.envMapIntensity.value=L.environmentIntensity),we&&(me.setValue(B,"toneMappingExposure",y.toneMappingExposure),Nt.needsLights&&ze(tn,de),Ct&&ct.fog===!0&&kt.refreshFogUniforms(tn,Ct),kt.refreshMaterialUniforms(tn,ct,et,xt,p.state.transmissionRenderTarget[D.id]),Go.upload(B,Se(Nt),tn,T)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Go.upload(B,Se(Nt),tn,T),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&me.setValue(B,"center",K.center),me.setValue(B,"modelViewMatrix",K.modelViewMatrix),me.setValue(B,"normalMatrix",K.normalMatrix),me.setValue(B,"modelMatrix",K.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const pe=ct.uniformsGroups;for(let xe=0,rn=pe.length;xe<rn;xe++){const Gn=pe[xe];ot.update(Gn,Me),ot.bind(Gn,Me)}}return Me}function ze(D,L){D.ambientLightColor.needsUpdate=L,D.lightProbe.needsUpdate=L,D.directionalLights.needsUpdate=L,D.directionalLightShadows.needsUpdate=L,D.pointLights.needsUpdate=L,D.pointLightShadows.needsUpdate=L,D.spotLights.needsUpdate=L,D.spotLightShadows.needsUpdate=L,D.rectAreaLights.needsUpdate=L,D.hemisphereLights.needsUpdate=L}function Ve(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(D,L,X){$t.get(D.texture).__webglTexture=L,$t.get(D.depthTexture).__webglTexture=X;const ct=$t.get(D);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=X===void 0,ct.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,L){const X=$t.get(D);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(D,L=0,X=0){S=D,R=L,E=X;let ct=!0,K=null,Ct=!1,zt=!1;if(D){const Yt=$t.get(D);if(Yt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(B.FRAMEBUFFER,null),ct=!1;else if(Yt.__webglFramebuffer===void 0)T.setupRenderTarget(D);else if(Yt.__hasExternalTextures)T.rebindTextures(D,$t.get(D.texture).__webglTexture,$t.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const vt=D.depthTexture;if(Yt.__boundDepthTexture!==vt){if(vt!==null&&$t.has(vt)&&(D.width!==vt.image.width||D.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(D)}}const he=D.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(zt=!0);const ut=$t.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ut[L])?K=ut[L][X]:K=ut[L],Ct=!0):D.samples>0&&T.useMultisampledRTT(D)===!1?K=$t.get(D).__webglMultisampledFramebuffer:Array.isArray(ut)?K=ut[X]:K=ut,A.copy(D.viewport),U.copy(D.scissor),F=D.scissorTest}else A.copy(W).multiplyScalar(et).floor(),U.copy(Z).multiplyScalar(et).floor(),F=it;if(Bt.bindFramebuffer(B.FRAMEBUFFER,K)&&ct&&Bt.drawBuffers(D,K),Bt.viewport(A),Bt.scissor(U),Bt.setScissorTest(F),Ct){const Yt=$t.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+L,Yt.__webglTexture,X)}else if(zt){const Yt=$t.get(D.texture),he=L||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.__webglTexture,X||0,he)}_=-1},this.readRenderTargetPixels=function(D,L,X,ct,K,Ct,zt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=$t.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(Zt=Zt[zt]),Zt){Bt.bindFramebuffer(B.FRAMEBUFFER,Zt);try{const Yt=D.texture,he=Yt.format,ut=Yt.type;if(!jt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=D.width-ct&&X>=0&&X<=D.height-K&&B.readPixels(L,X,ct,K,re.convert(he),re.convert(ut),Ct)}finally{const Yt=S!==null?$t.get(S).__webglFramebuffer:null;Bt.bindFramebuffer(B.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(D,L,X,ct,K,Ct,zt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=$t.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&zt!==void 0&&(Zt=Zt[zt]),Zt){const Yt=D.texture,he=Yt.format,ut=Yt.type;if(!jt.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=D.width-ct&&X>=0&&X<=D.height-K){Bt.bindFramebuffer(B.FRAMEBUFFER,Zt);const vt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.bufferData(B.PIXEL_PACK_BUFFER,Ct.byteLength,B.STREAM_READ),B.readPixels(L,X,ct,K,re.convert(he),re.convert(ut),0);const yt=S!==null?$t.get(S).__webglFramebuffer:null;Bt.bindFramebuffer(B.FRAMEBUFFER,yt);const Pt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Q0(B,Pt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ct),B.deleteBuffer(vt),B.deleteSync(Pt),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,L=null,X=0){D.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,D=arguments[1]);const ct=Math.pow(2,-X),K=Math.floor(D.image.width*ct),Ct=Math.floor(D.image.height*ct),zt=L!==null?L.x:0,Zt=L!==null?L.y:0;T.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,zt,Zt,K,Ct),Bt.unbindTexture()},this.copyTextureToTexture=function(D,L,X=null,ct=null,K=0){D.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,D=arguments[1],L=arguments[2],K=arguments[3]||0,X=null);let Ct,zt,Zt,Yt,he,ut,vt,yt,Pt;const Lt=D.isCompressedTexture?D.mipmaps[K]:D.image;X!==null?(Ct=X.max.x-X.min.x,zt=X.max.y-X.min.y,Zt=X.isBox3?X.max.z-X.min.z:1,Yt=X.min.x,he=X.min.y,ut=X.isBox3?X.min.z:0):(Ct=Lt.width,zt=Lt.height,Zt=Lt.depth||1,Yt=0,he=0,ut=0),ct!==null?(vt=ct.x,yt=ct.y,Pt=ct.z):(vt=0,yt=0,Pt=0);const Kt=re.convert(L.format),Wt=re.convert(L.type);let Nt;L.isData3DTexture?(T.setTexture3D(L,0),Nt=B.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),Nt=B.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),Nt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,L.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,L.unpackAlignment);const _e=B.getParameter(B.UNPACK_ROW_LENGTH),se=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Me=B.getParameter(B.UNPACK_SKIP_PIXELS),Et=B.getParameter(B.UNPACK_SKIP_ROWS),we=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,he),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ut);const de=D.isDataArrayTexture||D.isData3DTexture,me=L.isDataArrayTexture||L.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const tn=$t.get(D),De=$t.get(L),pe=$t.get(tn.__renderTarget),xe=$t.get(De.__renderTarget);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,pe.__webglFramebuffer),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let rn=0;rn<Zt;rn++)de&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.get(D).__webglTexture,K,ut+rn),D.isDepthTexture?(me&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.get(L).__webglTexture,K,Pt+rn),B.blitFramebuffer(Yt,he,Ct,zt,vt,yt,Ct,zt,B.DEPTH_BUFFER_BIT,B.NEAREST)):me?B.copyTexSubImage3D(Nt,K,vt,yt,Pt+rn,Yt,he,Ct,zt):B.copyTexSubImage2D(Nt,K,vt,yt,Pt+rn,Yt,he,Ct,zt);Bt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else me?D.isDataTexture||D.isData3DTexture?B.texSubImage3D(Nt,K,vt,yt,Pt,Ct,zt,Zt,Kt,Wt,Lt.data):L.isCompressedArrayTexture?B.compressedTexSubImage3D(Nt,K,vt,yt,Pt,Ct,zt,Zt,Kt,Lt.data):B.texSubImage3D(Nt,K,vt,yt,Pt,Ct,zt,Zt,Kt,Wt,Lt):D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,K,vt,yt,Ct,zt,Kt,Wt,Lt.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,K,vt,yt,Lt.width,Lt.height,Kt,Lt.data):B.texSubImage2D(B.TEXTURE_2D,K,vt,yt,Ct,zt,Kt,Wt,Lt);B.pixelStorei(B.UNPACK_ROW_LENGTH,_e),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,se),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Me),B.pixelStorei(B.UNPACK_SKIP_ROWS,Et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,we),K===0&&L.generateMipmaps&&B.generateMipmap(Nt),Bt.unbindTexture()},this.copyTextureToTexture3D=function(D,L,X=null,ct=null,K=0){return D.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,ct=arguments[1]||null,D=arguments[2],L=arguments[3],K=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,L,X,ct,K)},this.initRenderTarget=function(D){$t.get(D).__webglFramebuffer===void 0&&T.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?T.setTextureCube(D,0):D.isData3DTexture?T.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?T.setTexture2DArray(D,0):T.setTexture2D(D,0),Bt.unbindTexture()},this.resetState=function(){R=0,E=0,S=null,Bt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}class kl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=n}clone(){return new kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class h_ extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bl extends mn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Pn,u=Pn,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo extends Ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Is=new Ie,xf=new Ie,Mo=[],vf=new Wi,d_=new Ie,mr=new Ge,gr=new Xi;class p_ extends Ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,d_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),vf.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(vf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),gr.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),xf.multiplyMatrices(n,Is),mr.matrixWorld=xf,mr.raycast(t,Mo);for(let o=0,a=Mo.length;o<a;o++){const c=Mo[o];c.instanceId=r,c.object=this,e.push(c)}Mo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bl(new Float32Array(s*this.count),s,this.count,Il,si));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _d extends mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ne:new nt);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new nt,s=[],r=[],o=[],a=new nt,c=new Ie;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new nt)}r[0]=new nt,o[0]=new nt;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(cn(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(cn(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hl extends ai{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ne){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class m_ extends Hl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const yo=new nt,Ja=new Gl,Qa=new Gl,tc=new Gl;class g_ extends ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new nt){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(yo.subVectors(s[0],s[1]).add(s[0]),l=yo);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=yo),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ja.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,x,m),Qa.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,x,m),tc.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Qa.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),tc.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(Ja.calc(c),Qa.calc(c),tc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _f(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function x_(i,t){const e=1-i;return e*e*t}function v_(i,t){return 2*(1-i)*i*t}function __(i,t){return i*i*t}function Pr(i,t,e,n){return x_(i,t)+v_(i,e)+__(i,n)}function M_(i,t){const e=1-i;return e*e*e*t}function y_(i,t){const e=1-i;return 3*e*e*i*t}function S_(i,t){return 3*(1-i)*i*i*t}function w_(i,t){return i*i*i*t}function Lr(i,t,e,n,s){return M_(i,t)+y_(i,e)+S_(i,n)+w_(i,s)}class Md extends ai{constructor(t=new ne,e=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ne){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class b_ extends ai{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lr(t,s.x,r.x,o.x,a.x),Lr(t,s.y,r.y,o.y,a.y),Lr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yd extends ai{constructor(t=new ne,e=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ne){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ne){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E_ extends ai{constructor(t=new nt,e=new nt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sd extends ai{constructor(t=new ne,e=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ne){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(t,s.x,r.x,o.x),Pr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T_ extends ai{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(t,s.x,r.x,o.x),Pr(t,s.y,r.y,o.y),Pr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wd extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ne){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(_f(a,c.x,l.x,u.x,d.x),_f(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ne().fromArray(s))}return this}}var Mf=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:g_,CubicBezierCurve:Md,CubicBezierCurve3:b_,EllipseCurve:Hl,LineCurve:yd,LineCurve3:E_,QuadraticBezierCurve:Sd,QuadraticBezierCurve3:T_,SplineCurve:wd});class A_ extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mf[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Mf[s.type]().fromJSON(s))}return this}}class C_ extends A_{constructor(t){super(),this.type="Path",this.currentPoint=new ne,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new yd(this.currentPoint.clone(),new ne(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Sd(this.currentPoint.clone(),new ne(t,e),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Md(this.currentPoint.clone(),new ne(t,e),new ne(n,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Hl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fa extends je{constructor(t=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=cn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,d=new nt,f=new ne,h=new nt,g=new nt,x=new nt;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,h.x=p*1,h.y=-m,h.z=p*0,x.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),c.push(h.x,h.y,h.z),x.copy(g)}for(let w=0;w<=e;w++){const M=n+w*u*s,y=Math.sin(M),C=Math.cos(M);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*y,d.y=t[R].y,d.z=t[R].x*C,o.push(d.x,d.y,d.z),f.x=w/e,f.y=R/(t.length-1),a.push(f.x,f.y);const E=c[3*R+0]*y,S=c[3*R+1],_=c[3*R+0]*C;l.push(E,S,_)}}for(let w=0;w<e;w++)for(let M=0;M<t.length-1;M++){const y=M+w*t.length,C=y,R=y+t.length,E=y+t.length+1,S=y+1;r.push(C,R,S),r.push(E,S,R)}this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("uv",new Pe(a,2)),this.setAttribute("normal",new Pe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.points,t.segments,t.phiStart,t.phiLength)}}class Vl extends fa{constructor(t=1,e=1,n=4,s=8){const r=new C_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Vl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Wl extends je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new nt,u=new ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const h=n+d/e*s;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jn extends je{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let g=0;const x=[],m=n/2;let p=0;w(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(h,2));function w(){const y=new nt,C=new nt;let R=0;const E=(e-t)/n;for(let S=0;S<=r;S++){const _=[],v=S/r,A=v*(e-t)+t;for(let U=0;U<=s;U++){const F=U/s,H=F*c+a,st=Math.sin(H),J=Math.cos(H);C.x=A*st,C.y=-v*n+m,C.z=A*J,d.push(C.x,C.y,C.z),y.set(st,E,J).normalize(),f.push(y.x,y.y,y.z),h.push(F,1-v),_.push(g++)}x.push(_)}for(let S=0;S<s;S++)for(let _=0;_<r;_++){const v=x[_][S],A=x[_+1][S],U=x[_+1][S+1],F=x[_][S+1];(t>0||_!==0)&&(u.push(v,A,F),R+=3),(e>0||_!==r-1)&&(u.push(A,U,F),R+=3)}l.addGroup(p,R,0),p+=R}function M(y){const C=g,R=new ne,E=new nt;let S=0;const _=y===!0?t:e,v=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*v,0),f.push(0,v,0),h.push(.5,.5),g++;const A=g;for(let U=0;U<=s;U++){const H=U/s*c+a,st=Math.cos(H),J=Math.sin(H);E.x=_*J,E.y=m*v,E.z=_*st,d.push(E.x,E.y,E.z),f.push(0,v,0),R.x=st*.5+.5,R.y=J*.5*v+.5,h.push(R.x,R.y),g++}for(let U=0;U<s;U++){const F=C+U,H=A+U;y===!0?u.push(H,H+1,F):u.push(H+1,H,F),S+=3}l.addGroup(p,S,y===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ha extends jn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ha(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class da extends je{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const M=new nt,y=new nt,C=new nt;for(let R=0;R<e.length;R+=3)h(e[R+0],M),h(e[R+1],y),h(e[R+2],C),c(M,y,C,w)}function c(w,M,y,C){const R=C+1,E=[];for(let S=0;S<=R;S++){E[S]=[];const _=w.clone().lerp(y,S/R),v=M.clone().lerp(y,S/R),A=R-S;for(let U=0;U<=A;U++)U===0&&S===R?E[S][U]=_:E[S][U]=_.clone().lerp(v,U/A)}for(let S=0;S<R;S++)for(let _=0;_<2*(R-S)-1;_++){const v=Math.floor(_/2);_%2===0?(f(E[S][v+1]),f(E[S+1][v]),f(E[S][v])):(f(E[S][v+1]),f(E[S+1][v+1]),f(E[S+1][v]))}}function l(w){const M=new nt;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(w),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){const w=new nt;for(let M=0;M<r.length;M+=3){w.x=r[M+0],w.y=r[M+1],w.z=r[M+2];const y=m(w)/2/Math.PI+.5,C=p(w)/Math.PI+.5;o.push(y,1-C)}g(),d()}function d(){for(let w=0;w<o.length;w+=6){const M=o[w+0],y=o[w+2],C=o[w+4],R=Math.max(M,y,C),E=Math.min(M,y,C);R>.9&&E<.1&&(M<.2&&(o[w+0]+=1),y<.2&&(o[w+2]+=1),C<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function h(w,M){const y=w*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function g(){const w=new nt,M=new nt,y=new nt,C=new nt,R=new ne,E=new ne,S=new ne;for(let _=0,v=0;_<r.length;_+=9,v+=6){w.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),y.set(r[_+6],r[_+7],r[_+8]),R.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),S.set(o[v+4],o[v+5]),C.copy(w).add(M).add(y).divideScalar(3);const A=m(C);x(R,v+0,w,A),x(E,v+2,M,A),x(S,v+4,y,A)}}function x(w,M,y,C){C<0&&w.x===1&&(o[M]=w.x-1),y.x===0&&y.z===0&&(o[M]=C/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.vertices,t.indices,t.radius,t.details)}}class nr extends da{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nr(t.radius,t.detail)}}class Gr extends da{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gr(t.radius,t.detail)}}class ri extends je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new nt,f=new nt,h=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const w=[],M=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const R=C/e;d.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(R+y,1-M),w.push(l++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const M=u[p][w+1],y=u[p][w],C=u[p+1][w],R=u[p+1][w+1];(p!==0||o>0)&&h.push(M,y,R),(p!==n-1||c<Math.PI)&&h.push(y,C,R)}this.setIndex(h),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(x,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class R_ extends gs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class P_ extends gs{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new le(16777215),this.specular=new le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pa extends gs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=oa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bd extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class L_ extends bd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ec=new Ie,yf=new nt,Sf=new nt;class I_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(yf),Sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sf),e.updateMatrixWorld(),ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class D_ extends I_{constructor(){super(new dd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z_ extends bd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new D_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class N_ extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);const Ae=Object.freeze({eightBody:1447452,eightDisc:16513779,eightInk:1447452,eightRim:10274047,cueBody:16776692,cueDots:14165548,blobShadow:795668,flagCloth:15217199,flagDisc:16513779,pinWhite:16513779,pinBand:15217199,cupInside:1780254,cupLiner:16513779,guideWhite:16777215,guideHalo:1057818,guideWarn:16747050,eightArrow:16765503,surfaceOutline:3037738,chalk:4030425,poolBalls:Object.freeze([16763196,2976991,15022389,8081353,16747050,2006618,9317178])}),wf=Object.freeze({1:Object.freeze({name:"Greenside",rough:5216828,fairwayLight:8177237,fairwayDark:7125066,fringe:7782994,greenLight:9427046,greenDark:8703836,sand:15914907,sandLip:14268530,ice:14218239,waterShallow:6080736,waterDeep:3051460,waterFoam:15268863,waterGlint:12579839,pondBed:2916230,railSide:10115630,railTop:12745283,railSights:16051152,cushionNose:2059082,hedge:4164154,wallStone:14275267,soilTop:8015407,soilBottom:5123868,skyTop:12576511,skyBottom:15267839,reeds:8032058,wood:11040586,hemiSky:15135487,hemiGround:8022600,hemiIntensity:1.4,sun:16773596,sunIntensity:2.7,sunElevationDeg:50}),2:Object.freeze({name:"Lakeside",rough:6198336,fairwayLight:9684306,fairwayDark:8697930,fringe:9224270,greenLight:10737251,greenDark:9948506,sand:15978388,sandLip:14264422,ice:14218239,waterShallow:5224150,waterDeep:2386088,waterFoam:15268863,waterGlint:16770764,pondBed:2781050,railSide:7028516,railTop:9198132,railSights:14792794,cushionNose:2055762,hedge:4620346,wallStone:14207152,soilTop:8015407,soilBottom:5123868,skyTop:16766888,skyBottom:16772048,reeds:8032058,wood:11040586,hemiSky:16770764,hemiGround:5917242,hemiIntensity:1.8,sun:16767400,sunIntensity:3.2,sunElevationDeg:32})}),Xl=i=>wf[i]||wf[1],ki=42,bf=64,U_=58;function F_(i){if(!(i>0)||!Number.isFinite(i))return ki;const t=2*Math.atan(Math.tan(U_*Math.PI/360)/i)*180/Math.PI;return t<ki?ki:t>bf?bf:t}const O_=xl.degToRad(225),k_=90;function B_(){try{const n=typeof location<"u"?/[?&]tier=([012])\b/.exec(location.search):null;if(n)return+n[1]}catch{}const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=typeof navigator<"u"?navigator.deviceMemory:void 0,e=typeof devicePixelRatio=="number"?devicePixelRatio:1;return i&&typeof t=="number"&&t<=3?0:!i&&e>=1.5?2:1}const H_=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4( mat3( viewMatrix ) * position, 1.0 );
  gl_Position = p.xyww;
  gl_Position.z = p.w * 0.99999; // on the far plane: behind everything, never clipped
}`,G_=`
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
}`,V_=[[.3,.05,.34,.95],[1.15,-.16,.28,.8],[1.9,.12,.4,.9],[2.7,-.08,.3,.85],[3.5,.03,.36,.95],[4.3,-.2,.32,.75],[5.05,.15,.3,.9],[5.8,-.05,.38,.85]],Ef={1:7912944,2:15771752},W_={1:14083827,2:15913661},X_={1:16777215,2:16774890};function q_(i){const t=new ri(1,24,12),e=[];for(const r of V_)e.push(new He(r[0],r[1],r[2],r[3]));const n=new _n({uniforms:{uZenith:{value:new le},uHorizon:{value:new le},uBelow:{value:new le},uSun:{value:new le},uSunDir:{value:new nt(0,1,0)},uClouds:{value:e},uCloudLit:{value:new le},uCloudShade:{value:new le}},defines:i>=1?{CLOUDS:""}:{},vertexShader:H_,fragmentShader:G_,side:vn,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1}),s=new Ge(t,n);return s.name="sky",s.frustumCulled=!1,s.renderOrder=-100,s.matrixAutoUpdate=!1,s}function Y_(i){const t=B_(),e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=typeof devicePixelRatio=="number"&&devicePixelRatio>0?devicePixelRatio:1,s=Math.min(n,t===0?1:t===2?2:e?1.5:2),r=Math.min(1,n);let o=null;try{o=new f_({antialias:t>0,powerPreference:"high-performance",stencil:!1,alpha:!1})}catch(it){o=null,typeof window<"u"&&window.document&&window.document.body&&console.error(it)}if(o){o.outputColorSpace=pn,o.toneMapping=Vh,o.toneMappingExposure=1,o.shadowMap.enabled=t>=1,o.shadowMap.type=Cl,o.shadowMap.autoUpdate=!1,o.setPixelRatio(s);const it=o.domElement;it.style.display="block",it.style.width="100%",it.style.height="100%",it.style.touchAction="none",it.style.outline="none",i&&i.appendChild&&i.appendChild(it)}const a=new h_,c=new Tn(ki,16/9,.5,800),l=q_(t);a.add(l),a.fog=new kl(15267839,80,300),c.position.set(0,30,17),c.lookAt(0,0,0);const u=new L_(16777215,7829367,1.4);u.position.set(0,1,0);const d=new z_(16777215,2.7);if(a.add(u,d,d.target),t>=1){d.castShadow=!0;const it=t===2?2048:1024;d.shadow.mapSize.set(it,it),d.shadow.bias=-6e-4,d.shadow.normalBias=.03,d.shadow.intensity=.55}const f={w:1,h:1,portrait:!1,zero:!0},h=new Set,g=new nt,x=new Wi(new nt(-4,-2,-16),new nt(30,4,4));let m=2,p=xl.degToRad(50);const w={renderer:o,scene:a,camera:c,tier:t,size:f,container:i,round:1,yaw:0,fov:ki,hemi:u,sun:d,sky:l,kickCamera:null,pixelRatio:s,shadows:!!(o&&t>=1),setRound:A,setShadowBounds:_,invalidateShadows:v,onResize:H,render:W,dispose:Z},M=new Ie,y=new nt,C=new nt,R=new le,E=new nt(0,1,0);function S(){const it=w.yaw+O_;if(g.set(Math.sin(it)*Math.cos(p),Math.sin(p),Math.cos(it)*Math.cos(p)),x.getCenter(C),d.position.copy(C).addScaledVector(g,k_),d.target.position.copy(C),d.updateMatrixWorld(),d.target.updateMatrixWorld(),l.material.uniforms.uSunDir.value.copy(g),!d.castShadow)return;M.lookAt(d.position,C,E),M.setPosition(d.position),M.invert();let O=1/0,j=-1/0,pt=1/0,k=-1/0,rt=1/0,ht=-1/0;for(let Rt=0;Rt<8;Rt++)y.set(Rt&1?x.max.x:x.min.x,Rt&2?x.max.y:x.min.y,Rt&4?x.max.z:x.min.z),y.applyMatrix4(M),y.x<O&&(O=y.x),y.x>j&&(j=y.x),y.y<pt&&(pt=y.y),y.y>k&&(k=y.y),y.z<rt&&(rt=y.z),y.z>ht&&(ht=y.z);const Mt=d.shadow.camera;Mt.left=O-1,Mt.right=j+1,Mt.bottom=pt-1,Mt.top=k+1,Mt.near=Math.max(.5,-ht-4),Mt.far=-rt+4,Mt.updateProjectionMatrix(),v()}function _(it){if(!it||!it.bounds)return;const O=it.bounds;let j=0,pt=0;const k=it.grid;if(k&&k.height)for(let rt=0;rt<k.height.length;rt++){const ht=k.height[rt];ht<j&&(j=ht),ht>pt&&(pt=ht)}x.min.set(O.minx-5,j-2.5,O.minz-5),x.max.set(O.maxx+5,pt+5,O.maxz+5),S()}function v(){m=2}function A(it){const O=Xl(it);w.round=it===2?2:1,u.color.setHex(O.hemiSky),u.groundColor.setHex(O.hemiGround),u.intensity=O.hemiIntensity,d.color.setHex(O.sun),d.intensity=O.sunIntensity,p=xl.degToRad(O.sunElevationDeg);const j=w.round,pt=l.material.uniforms;pt.uHorizon.value.setHex(O.skyBottom),pt.uZenith.value.setHex(O.skyTop).lerp(R.setHex(Ef[j]),.5),pt.uBelow.value.setHex(O.skyBottom).lerp(R.setHex(O.skyTop),.45).lerp(R.setHex(Ef[j]),.12),pt.uSun.value.setHex(O.sun),pt.uCloudLit.value.setHex(X_[j]),pt.uCloudShade.value.setHex(W_[j]),a.background&&a.background.isColor||(a.background=new le),a.background.setHex(O.skyBottom),a.fog.color.setHex(O.skyBottom),S()}function U(){let it=0,O=0;if(i&&(it=i.clientWidth||0,O=i.clientHeight||0,(!it||!O)&&i.getBoundingClientRect)){const j=i.getBoundingClientRect();it=it||j.width||0,O=O||j.height||0}return{w:it>0&&Number.isFinite(it)?Math.round(it):0,h:O>0&&Number.isFinite(O)?Math.round(O):0}}function F(it){const O=U(),j=!(O.w>0&&O.h>0),pt=j?1:O.w,k=j?1:O.h;if(!it&&pt===f.w&&k===f.h&&j===f.zero)return;const rt=f.portrait;f.w=pt,f.h=k,f.zero=j,f.portrait=!j&&k>pt,w.yaw=f.portrait?-Math.PI/2:0,c.aspect=j?16/9:pt/k,w.fov=F_(c.aspect),c.fov=w.fov,c.updateProjectionMatrix(),o&&o.setSize(pt,k,!1),(it||rt!==f.portrait)&&S(),h.forEach(ht=>{try{ht(f)}catch(Mt){console.error(Mt)}})}function H(it){return h.add(it),()=>h.delete(it)}const st=()=>F(!1);let J=null;typeof ResizeObserver=="function"&&i&&i.nodeType===1&&(J=new ResizeObserver(st),J.observe(i)),typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",st),window.addEventListener("orientationchange",st));function xt(it){it=Math.round(it*4)/4,!(!o||it===w.pixelRatio)&&(w.pixelRatio=it,o.setPixelRatio(it),o.setSize(f.w,f.h,!1))}const et=K_({cap:s,min:r,get:()=>w.pixelRatio,set:xt,onSlowStart(){o&&o.shadowMap.enabled&&(o.shadowMap.enabled=!1,d.castShadow=!1,w.shadows=!1)}});let V=0;const N=typeof performance<"u"?performance:Date;function W(){if(!o||f.zero)return;const it=N.now();V&&et.frame((it-V)/1e3),V=it,m>0&&(o.shadowMap.enabled&&(o.shadowMap.needsUpdate=!0),m--),o.render(a,c)}function Z(){if(h.clear(),J&&J.disconnect(),typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",st),window.removeEventListener("orientationchange",st)),l.geometry.dispose(),l.material.dispose(),d.shadow&&d.shadow.map&&d.shadow.map.dispose(),o){o.dispose();const it=o.domElement;it&&it.parentNode&&it.parentNode.removeChild(it)}}return F(!0),A(1),w}function K_({cap:i,min:t,get:e,set:n,onSlowStart:s=null}){const r={winT:0,winN:0,slowT:0,slowSum:0,fastT:0,age:0,checkT:0,checkN:0,checked:!1,probing:!1,probeT:0,probeSum:0,prevPr:0,prevAvg:0,capped:!1},o=new Map;function a(c){if(!(c>0)||c>.25||(r.age+=c,!r.checked&&r.age>1&&(r.checkT+=c,r.checkN++,r.checkT>=3&&(r.checked=!0,r.checkN/r.checkT<40&&s&&s())),r.winT+=c,r.winN++,r.winT<.5))return;const l=r.winT/r.winN,u=r.winT;if(r.winT=0,r.winN=0,r.probing){r.probeT+=u,r.probeSum+=l*u,r.probeT>=1.5&&(r.probing=!1,r.probeSum/r.probeT>r.prevAvg*.92&&(n(r.prevPr),o.set(r.prevPr,Math.max(0,(o.get(r.prevPr)||1)-1)),r.capped=!0));return}if(r.capped)if(l<.0172)r.capped=!1;else return;l>.018?(r.slowT+=u,r.slowSum+=l*u,r.fastT=0):(r.slowT=0,r.slowSum=0),l<.0172?r.fastT+=u:r.fastT=0;const d=e();if(r.slowT>=1&&d>t)o.set(d,(o.get(d)||0)+1),r.prevPr=d,r.prevAvg=r.slowSum/r.slowT,n(Math.max(t,d-.25)),r.probing=!0,r.probeT=0,r.probeSum=0,r.slowT=0,r.slowSum=0,r.fastT=0;else if(r.fastT>=5&&d<i){const f=Math.min(i,d+.25);(o.get(f)||0)<2&&n(f),r.fastT=0}}return{frame:a,state:r}}const ve={enabled:!0,pulling:!1,pull:0,strike:-1,placing:!1,aiming:!1,hint:0};function $_(){ve.enabled=!0,ve.pulling=!1,ve.pull=0,ve.strike=-1,ve.placing=!1,ve.aiming=!1,ve.hint=0}const us=Math.PI/180,_l=Math.PI*2,ta=60*us,j_=30*us,Z_=36*us,J_=42*us,zn=Ht.R,Q_=22,So=1.6,Tf=1,wo=2.6,bo=64,tM={top:76},Af=.3,Cf=10,Rf=.85,eM=.065,nM=.34,iM=.36,sM=1.12,rM=.9,oM=1.2,Pf=.14,aM=3.5,cM=.06,Eo=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},lM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,an=(i,t)=>Number.isFinite(i)?i:t,Ji=i=>i-_l*Math.floor((i+Math.PI)/_l);function ss(i,t,e){if(!i)return 0;const n=i.grid;if(!n||!n.height){const m=i.heightAt?i.heightAt(t,e):0;return Number.isFinite(m)?m:0}const s=n.cols,r=n.rows;let o=(t-n.x0)/n.cell,a=(e-n.z0)/n.cell;if(o!==o||a!==a)return 0;o=o<0?0:o>s-1.000001?s-1.000001:o,a=a<0?0:a>r-1.000001?r-1.000001:a;const c=o|0,l=a|0,u=o-c,d=a-l,f=n.height,h=l*s+c,g=f[h]+(f[h+1]-f[h])*u,x=f[h+s]+(f[h+s+1]-f[h+s])*u;return g+(x-g)*d}class ti{constructor(t){this.tx=0,this.ty=0,this.tz=0,this.d=t,this.yaw=0,this.pitch=ta,this.valid=!1}}class Ds{constructor(){this.v=0}}class uM{constructor(){this.x=new Ds,this.y=new Ds,this.z=new Ds,this.d=new Ds,this.yaw=new Ds,this.pitch=new Ds}}class fM{constructor(){this.x=0,this.z=0,this.has=!1,this.lastX=0,this.lastZ=0,this.vx=0,this.vz=0,this.fresh=!1,this.age=0,this.yaw=0,this.baseD=20,this.ox=0,this.oz=0}}class hM{constructor(){this.d=0,this.aspect=0,this.yaw=NaN,this.pitch=NaN,this.tx=NaN,this.ty=NaN,this.tz=NaN,this.dd=NaN,this.kicked=!1}}class dM{constructor(){this.active=!1,this.t=0,this.from=new ti(60),this.to=new ti(30),this.resolve=null}}class pM{constructor(){this.dt=0,this.T=.25,this.Ty=.3,this.pin=0,this.ex=0,this.ez=0,this.eh=0,this.dLo=0}}class mM{constructor(){this.x0=-1,this.x1=1,this.y0=-1,this.y1=1}}class gM{constructor(){this.top=tM.top,this.right=0,this.bottom=0,this.left=0}}class xM{constructor(){this.x0=0,this.x1=0,this.y0=0,this.y1=0}}class vM{constructor(){this.yaw=0,this.pitch=ta}}class _M{constructor(){this.intent=null,this.ax=NaN,this.az=NaN,this.x=NaN,this.z=NaN,this.ex=NaN,this.ez=NaN}}class MM{constructor(){this.ex=0,this.ez=0,this.dx=1,this.dz=0,this.len=14}}class yM{constructor(){this.t=0,this.k=0}}function SM(i){const t=i.camera,e=new Tn(ki,t.aspect,.1,4e3),n=new ti(40),s=new ti(40),r=new uM,o=new ti(60),a=new ti(30),c=new ti(30),l=new ti(30),u=new ti(30),d=new dM,f=new fM,h=new vM,g=new _M,x=new MM,m=new yM,p=new Float64Array(bo),w=new Float64Array(bo),M=new Float64Array(bo);let y=0;const C=new nt,R=new nt,E=new nt,S=new Ln,_={x:0,z:0};let v=null,A=0,U=0,F=60,H="idle",st=!1,J=!1,xt=null,et=-1,V=null,N=i.yaw||0;const W=new hM,Z=new gM,it=new mM,O=new ti(30),j=new pM,pt=(b,I)=>ss(v,b,I),k=()=>Math.max(1,i.size.h||1),rt=()=>Math.max(1,i.size.w||1),ht=()=>{const b=i.fov;return b>1&&b<170?b:ki},Mt=()=>Math.tan(ht()*us/2);function Rt(){const b=rt(),I=k(),G=Math.max(10,.03*Math.min(b,I));let q=Z.left,Y=Z.right,ft=Z.top,dt=Z.bottom;const wt=b*(1-Af)-2*G;if(q+Y>wt){const Gt=Math.max(0,wt)/(q+Y);q*=Gt,Y*=Gt}const Ut=I*(1-Af)-2*G;if(ft+dt>Ut){const Gt=Math.max(0,Ut)/(ft+dt);ft*=Gt,dt*=Gt}return it.x0=-1+2*(q+G)/b,it.x1=1-2*(Y+G)/b,it.y1=1-2*(ft+G)/I,it.y0=-1+2*(dt+G)/I,it}function tt(b,I,G,q,Y,ft,dt){const wt=Math.cos(dt);b.position.set(I+Math.sin(ft)*wt*Y,G+Math.sin(dt)*Y,q+Math.cos(ft)*wt*Y),S.set(-dt,ft,0,"YXZ"),b.quaternion.setFromEuler(S),b.updateMatrixWorld(!0)}function gt(){Number.isFinite(n.tx)||(n.tx=0),Number.isFinite(n.ty)||(n.ty=0),Number.isFinite(n.tz)||(n.tz=0),Number.isFinite(n.yaw)||(n.yaw=0),Number.isFinite(n.pitch)||(n.pitch=ta),n.d>=.5||(n.d=Number.isFinite(n.d)?.5:40);const b=n.d,I=Math.cos(n.pitch);t.position.set(n.tx+Math.sin(n.yaw)*I*b,n.ty+Math.sin(n.pitch)*b,n.tz+Math.cos(n.yaw)*I*b),(W.yaw!==n.yaw||W.pitch!==n.pitch)&&(S.set(-n.pitch,n.yaw,0,"YXZ"),t.quaternion.setFromEuler(S),W.yaw=n.yaw,W.pitch=n.pitch);let G=ht();if(m.t>0){const Y=1-m.t/Pf,ft=Y<.2?Y/.2:(1-Y)/.8,dt=ft*ft*(3-2*ft);G+=aM*m.k*dt;const wt=cM*m.k*dt,Ut=wt*Math.sin(Y*41);t.position.x+=Math.cos(n.yaw)*Ut,t.position.z-=Math.sin(n.yaw)*Ut,t.position.y+=wt*.6*Math.cos(Y*33),W.kicked=!0}else W.kicked=!1;t.updateMatrixWorld(!0),W.tx=n.tx,W.ty=n.ty,W.tz=n.tz,W.dd=n.d;const q=Math.abs(b-W.d)>W.d*.04||t.aspect!==W.aspect;if(q){W.d=b,W.aspect=t.aspect,t.near=Math.min(8,Math.max(.3,b*.14));let Y=b*1.6+F*1.3+60;const ft=i.scene&&i.scene.fog;ft&&ft.isFog&&(ft.near=b*.9+F*.45,ft.far=ft.near+F*1.3+40,Y<ft.far+5&&(Y=ft.far+5)),t.far=Y}(q||t.fov!==G)&&(t.fov=G,t.updateProjectionMatrix())}function B(){const b=ht();e.fov===b&&e.aspect===t.aspect&&e.near===.1||(e.fov=b,e.aspect=t.aspect,e.near=.1,e.far=4e3,e.updateProjectionMatrix())}function Q(b,I,G){y>=bo||!Number.isFinite(b)||!Number.isFinite(G)||(p[y]=b,w[y]=an(I,0),M[y]=G,y++)}const It=new xM;function jt(b,I,G,q){tt(e,b,I,G,q,h.yaw,h.pitch),It.x0=1/0,It.x1=-1/0,It.y0=1/0,It.y1=-1/0;for(let Y=0;Y<y;Y++){if(C.set(p[Y],w[Y],M[Y]).applyMatrix4(e.matrixWorldInverse),C.z>-.2)return!1;C.applyMatrix4(e.projectionMatrix),C.x<It.x0&&(It.x0=C.x),C.x>It.x1&&(It.x1=C.x),C.y<It.y0&&(It.y0=C.y),C.y>It.y1&&(It.y1=C.y)}return!0}function Bt(b,I,G,q,Y){if(R.copy(b.position),E.set(I,G,.5).unproject(b).sub(R).normalize(),E.y>-1e-4)return!1;const ft=(q-R.y)/E.y;return Y.tx=R.x+E.x*ft,Y.tz=R.z+E.z*ft,!0}function te(b,I){if(B(),I.yaw=h.yaw,I.pitch=h.pitch,y===0)return I.tx=0,I.ty=0,I.tz=0,I.d=40,I;let G=0,q=0,Y=0;for(let oe=0;oe<y;oe++)G+=p[oe],q+=w[oe],Y+=M[oe];G/=y,q/=y,Y/=y;const ft=b.x1-b.x0,dt=b.y1-b.y0,wt=(b.x0+b.x1)/2,Ut=(b.y0+b.y1)/2;let Gt=40;for(let oe=0;oe<3;oe++){let fe=1,Ft=1500;for(let ce=0;ce<30;ce++)Gt=(fe+Ft)/2,jt(G,q,Y,Gt)&&It.x1-It.x0<=ft&&It.y1-It.y0<=dt?Ft=Gt:fe=Gt;if(Gt=Ft,!jt(G,q,Y,Gt))break;Bt(e,(It.x0+It.x1)/2-wt,(It.y0+It.y1)/2-Ut,q,l)&&(G=l.tx,Y=l.tz)}return I.tx=G,I.ty=q,I.tz=Y,I.d=Gt,I}function $t(b,I,G){return B(),jt(I.tx,I.ty,I.tz,G)?It.x0>=b.x0-1e-6&&It.x1<=b.x1+1e-6&&It.y0>=b.y0-1e-6&&It.y1<=b.y1+1e-6:!1}const T=()=>k()*2*zn/(Q_*2*Mt());function P(){if(!v)return;h.yaw=N,h.pitch=ta,y=0;const b=v.bounds,I=v.ground&&v.ground.length?v.ground:null;if(I){const q=Math.max(1,Math.ceil(I.length/40));for(let Y=0;Y<I.length;Y+=q)Q(I[Y].x,pt(I[Y].x,I[Y].z),I[Y].z)}Q(b.minx,pt(b.minx,b.minz),b.minz),Q(b.maxx,pt(b.maxx,b.minz),b.minz),Q(b.minx,pt(b.minx,b.maxz),b.maxz),Q(b.maxx,pt(b.maxx,b.maxz),b.maxz);const G=v.cup;Q(G.x,pt(G.x,G.z)+wo,G.z),te(Rt(),o)}function at(b,I,G,q,Y){for(let ft=0;ft<q;ft++){const dt=ft/q*_l,wt=b+Math.cos(dt)*G,Ut=I+Math.sin(dt)*G;Q(wt,pt(wt,Ut)+Y,Ut)}}function mt(b,I){if(!b||b.length<2)return;const G=b.length>>1,q=Math.max(1,Math.ceil(G/I));for(let Y=0;Y<G;Y+=q)Q(b[2*Y],pt(b[2*Y],b[2*Y+1]),b[2*Y+1]);Q(b[2*G-2],pt(b[2*G-2],b[2*G-1]),b[2*G-1])}function bt(b,I,G,q){y=0;const Y=pt(b,I);if(at(b,I,G+zn*1.15,24,zn),at(b,I,G,12,2*zn),Q(b,Y+2*zn,I),Q(b,Y,I),q){const ft=pt(q.x,q.z);Q(q.x,ft+2*zn,q.z),at(q.x,q.z,zn*1.1,6,zn)}}function St(){if(et===1&&V)V.cue&&mt(V.cue.points,10),V.eight&&mt(V.eight.points,14);else if(et===0)for(let b=1;b<=4;b++){const I=x.ex+x.dx*x.len*(b/4),G=x.ez+x.dz*x.len*(b/4);Q(I,pt(I,G),G)}}function Xt(b,I,G,q,Y,ft,dt){h.yaw=Math.atan2(-Y,-ft),h.pitch=j_;const wt=Rt();bt(b,I,G,q);const Ut=y;if(St(),te(wt,dt),v&&v.cup){const Ft=v.cup,ce=Math.sqrt((Ft.x-b)*(Ft.x-b)+(Ft.z-I)*(Ft.z-I));let ee=Eo(18,8,ce);const ye=(Ft.x-b)*Y+(Ft.z-I)*ft;if(ee>0&&ye>-1){const Se=y;at(Ft.x,Ft.z,Ht.HOLE_R+.6,8,0),Q(Ft.x,pt(Ft.x,Ft.z)+wo,Ft.z),te(wt,c),y=Ut;let Te=!1;for(let Ce=0;Ce<4&&!Te;Ce++,ee*=.5)Dt(l,dt,c,ee),Te=$t(wt,l,l.d);Te&&Jt(dt,l),y=Se}}const Gt=v&&v.camera&&v.camera.zoom>0?v.camera.zoom:1;dt.d=Math.max(8,dt.d/Gt);const oe=Math.max(8,T());if(bt(b,I,G,q),te(wt,c),c.d>oe)Jt(dt,c);else if(dt.d>oe&&(dt.d=oe),!$t(wt,dt,dt.d)){const Ft=dt.tx,ce=dt.ty,ee=dt.tz;let ye=!1;for(let Se=1;Se<=8;Se++){const Te=Se/8;if(l.tx=Ft+(c.tx-Ft)*Te,l.ty=ce+(c.ty-ce)*Te,l.tz=ee+(c.tz-ee)*Te,$t(wt,l,dt.d)){ye=!0;break}}ye?(dt.tx=l.tx,dt.ty=l.ty,dt.tz=l.tz):Jt(dt,c)}const fe=Math.min(1/(2*eM*Mt()),.85*oe);return dt.d<fe*1.35&&(dt.d=Math.min(fe*1.35,Math.max(dt.d,oe))),j.ex=b,j.ez=I,j.eh=pt(b,I)+zn,j.dLo=fe,kt(dt,wt,q),dt.yaw=h.yaw,dt.pitch=h.pitch,dt}function kt(b,I,G){if(B(),!$t(I,b,b.d))return;const q=Math.cos(h.yaw),Y=-Math.sin(h.yaw),ft=-Math.sin(h.yaw),dt=-Math.cos(h.yaw),wt=u;if(G){tt(e,b.tx,b.ty,b.tz,b.d,h.yaw,h.pitch);const ye=pt(G.x,G.z)+zn;if(C.set(G.x,ye,G.z).project(e),Bt(e,(I.x0+I.x1)/2,C.y,ye,wt)){const Se=(G.x-wt.tx)*q+(G.z-wt.tz)*Y;let Te=0,Ce=1;if(wt.ty=b.ty,wt.tx=b.tx+q*Se,wt.tz=b.tz+Y*Se,$t(I,wt,b.d))Te=1;else for(let ze=0;ze<8;ze++){const Ve=(Te+Ce)/2;wt.tx=b.tx+q*Se*Ve,wt.tz=b.tz+Y*Se*Ve,$t(I,wt,b.d)?Te=Ve:Ce=Ve}b.tx+=q*Se*Te,b.tz+=Y*Se*Te}}let Ut=0,Gt=b.d*1.2;wt.ty=b.ty;const oe=Math.cos(h.pitch)*b.d,fe=b.ty+Math.sin(h.pitch)*b.d-j.eh,Ft=Math.sin(h.yaw)*oe,ce=Math.cos(h.yaw)*oe,ee=j.dLo*j.dLo;for(let ye=0;ye<12;ye++){const Se=(Ut+Gt)/2;wt.tx=b.tx+ft*Se,wt.tz=b.tz+dt*Se;const Te=wt.tx+Ft-j.ex,Ce=wt.tz+ce-j.ez;Te*Te+Ce*Ce+fe*fe>=ee&&$t(I,wt,b.d)?Ut=Se:Gt=Se}b.tx+=ft*Ut*Rf,b.tz+=dt*Ut*Rf}function Dt(b,I,G,q){b.tx=I.tx+(G.tx-I.tx)*q,b.ty=I.ty+(G.ty-I.ty)*q,b.tz=I.tz+(G.tz-I.tz)*q,b.d=Math.exp(Math.log(I.d)+(Math.log(G.d)-Math.log(I.d))*q),b.yaw=I.yaw,b.pitch=I.pitch}function ue(b){const I=v.eight,G=v.cup;let q=G.x-I.x,Y=G.z-I.z;const ft=Math.sqrt(q*q+Y*Y)||1;q/=ft,Y/=ft;const dt=v.placeR||4,wt=Math.min(.6*dt,2.5);return _.x=I.x-q*wt,_.z=I.z-Y*wt,x.ex=I.x,x.ez=I.z,x.dx=q,x.dz=Y,x.len=Math.min(14,ft),et=0,Xt(I.x,I.z,dt,_,q,Y,b),et=-1,b}function At(b,I){const G=b&&b.world,q=G&&G.balls&&G.balls[1];if(!q)return ue(I);const Y=b.level&&b.level.placeR||G.placeR||4,ft=b.intent;let dt=null;ft&&Number.isFinite(ft.x)&&Number.isFinite(ft.z)&&(_.x=ft.x,_.z=ft.z,dt=_);let wt=ft&&Number.isFinite(ft.ax)?ft.ax:ft&&Number.isFinite(ft.dx)?ft.dx:0,Ut=ft&&Number.isFinite(ft.az)?ft.az:ft&&Number.isFinite(ft.dz)?ft.dz:0;wt*wt+Ut*Ut>1e-8||(dt?(wt=q.x-dt.x,Ut=q.z-dt.z):v&&(wt=v.cup.x-q.x,Ut=v.cup.z-q.z),wt*wt+Ut*Ut>1e-8||(wt=1,Ut=0));const Gt=Math.sqrt(wt*wt+Ut*Ut);return wt/=Gt,Ut/=Gt,V=typeof b.guide=="function"?b.guide():null,et=1,Xt(q.x,q.z,Y,dt,wt,Ut,I),et=-1,V=null,g.intent=ft,g.ax=wt,g.az=Ut,g.x=dt?dt.x:NaN,g.z=dt?dt.z:NaN,g.ex=q.x,g.ez=q.z,I}function Vt(){const b=xt;if(!b||b.state!=="ready"||!b.world||!b.intent||ve.aiming===!0||ve.placing||ve.pulling||ve.strike>=0)return;const I=b.intent;if(I===g.intent)return;const G=b.world.balls[1];if(Math.abs(I.ax-g.ax)+Math.abs(I.az-g.az)<.004&&I.x===g.x&&I.z===g.z&&G&&G.x===g.ex&&G.z===g.ez){g.intent=I;return}At(b,a),_t(a),a.valid=!0,Jt(s,a)}function ie(b){if(!v)return;const I=v.bounds,G=Cf+.6*an(b.d,40);b.tx=Math.min(I.maxx+G,Math.max(I.minx-G,an(b.tx,0))),b.tz=Math.min(I.maxz+G,Math.max(I.minz-G,an(b.tz,0))),b.d=Math.min(qt(),Math.max(Ot(),an(b.d,40)))}const qt=()=>Math.max(10,o.d*1.1),Ot=()=>Math.max(6,.6*(a.valid?a.d:o.d*.5));function Jt(b,I){b.tx=I.tx,b.ty=I.ty,b.tz=I.tz,b.d=I.d,b.yaw=I.yaw,b.pitch=I.pitch}function re(){r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,r.yaw.v=0,r.pitch.v=0}function ge(b){Jt(n,b),Jt(s,b),re(),gt()}function ot(){if(!d.active)return;d.active=!1,Jt(n,d.to),Jt(s,a.valid?a:d.to),re(),H=st?"overview":"play",st&&Jt(s,o);const b=d.resolve;d.resolve=null,b&&b()}i.onResize(()=>{const b=i.yaw||0,I=b!==N;if(N=b,gt(),!!v){if(P(),d.active){Jt(d.from,o),ue(d.to),a.valid&&xt&&(At(xt,a),Jt(d.to,a));return}xt&&!J&&xt.state==="ready"&&(At(xt,a),_t(a),a.valid=!0),st||H==="overview"?Jt(s,o):H==="play"&&!J&&a.valid&&Jt(s,a),ie(s),I&&ge(s)}});const z={get userMoved(){return J},set userMoved(b){J=!!b},get level(){return v},get mode(){return H},get overviewOn(){return st},get yaw(){return n.yaw},get pitch(){return n.pitch},get goalYaw(){return d.active?d.to.yaw:s.yaw},get goalPitch(){return d.active?d.to.pitch:s.pitch},get fov(){return t.fov},setInsets(b){const I=dt=>Number.isFinite(dt)&&dt>0?dt:0,G=I(b&&b.top),q=I(b&&b.right),Y=I(b&&b.bottom),ft=I(b&&b.left);if(!(G===Z.top&&q===Z.right&&Y===Z.bottom&&ft===Z.left)&&(Z.top=G,Z.right=q,Z.bottom=Y,Z.left=ft,!!v)){if(P(),d.active){a.valid&&xt?(At(xt,a),Jt(d.to,a)):ue(d.to);return}J||(xt&&xt.state==="ready"&&(At(xt,a),_t(a),a.valid=!0),st||H==="overview"?Jt(s,o):H==="play"&&a.valid?Jt(s,a):H==="cup"&&z.frameCup())}},get insets(){return{top:Z.top,right:Z.right,bottom:Z.bottom,left:Z.left}},setLevel(b){if(d.active&&ot(),v=b||null,A=0,U=0,v&&v.grid&&v.grid.height){const I=v.grid.height;A=1/0,U=-1/0;for(let G=0;G<I.length;G++)I[G]<A&&(A=I[G]),I[G]>U&&(U=I[G]);Number.isFinite(A)||(A=0,U=0)}if(v&&v.bounds){const I=v.bounds;F=Math.max(20,Math.sqrt((I.maxx-I.minx)*(I.maxx-I.minx)+(I.maxz-I.minz)*(I.maxz-I.minz)))}J=!1,st=!1,xt=null,a.valid=!1,f.has=!1,g.intent=null,m.t=0,N=i.yaw||0,W.d=0,i.setShadowBounds&&i.setShadowBounds(v),v&&(P(),H="overview",ge(o))},intro(b){return d.active&&ot(),v?(P(),Jt(d.from,o),b&&b.state==="ready"&&b.world&&b.level===v?(xt=b,At(b,a),_t(a),a.valid=!0,Jt(d.to,a)):ue(d.to),d.t=0,d.active=!0,H="intro",ge(o),new Promise(I=>{d.resolve=I})):Promise.resolve()},skipIntro(){ot()},frameShot(b){if(v){if(xt=b||xt,At(xt,a),_t(a),a.valid=!0,J=!1,f.has=!1,d.active){Jt(d.to,a);return}st||(H="play",Jt(s,a))}},follow(b,I){if(!(!v||d.active||st||J||!Number.isFinite(b)||!Number.isFinite(I))){if(H!=="follow"||!f.has){f.lastX=b,f.lastZ=I,f.vx=0,f.vz=0,f.age=0,f.yaw=n.yaw;const G=a.valid?a.d:n.d;f.baseD=Math.min(Math.max(Ot(),G*sM),Math.max(8,T()))}H="follow",f.x=b,f.z=I,f.has=!0,f.fresh=!0}},frameCup(){if(!v||d.active)return;h.yaw=n.yaw,h.pitch=J_,y=0;const b=v.cup;at(b.x,b.z,Ht.HOLE_R+2,12,0),Q(b.x,pt(b.x,b.z)+wo,b.z),te(Rt(),s),s.d=Math.max(s.d,10),ie(s),H="cup"},overview(b){v&&(st=!!b,!d.active&&(J=!1,st?(P(),H="overview",Jt(s,o)):a.valid&&(xt&&xt.state==="ready"&&(At(xt,a),_t(a)),H="play",Jt(s,a))))},zoomBy(b,I,G){if(!v||!(b>0)||!Number.isFinite(b))return;d.active&&ot();const q=rt(),Y=k(),ft=Number.isFinite(I)?I/q*2-1:0,dt=Number.isFinite(G)?1-G/Y*2:0;gt(),B(),tt(e,n.tx,n.ty,n.tz,n.d,n.yaw,n.pitch);const wt=c,Ut=Bt(e,ft,dt,n.ty,wt),Gt=wt.tx,oe=wt.tz,fe=Math.min(qt(),Math.max(Ot(),n.d/b));tt(e,n.tx,n.ty,n.tz,fe,n.yaw,n.pitch);const Ft=Bt(e,ft,dt,n.ty,wt);n.d=fe,Ut&&Ft&&(n.tx+=Gt-wt.tx,n.tz+=oe-wt.tz),ie(n),J=!0,ge(n)},panBy(b,I){if(!v||!Number.isFinite(b)||!Number.isFinite(I))return;d.active&&ot();const G=k()/(2*Math.max(1,n.d)*Mt()),q=Math.cos(n.yaw),Y=-Math.sin(n.yaw),ft=-Math.sin(n.yaw),dt=-Math.cos(n.yaw),wt=Math.max(.3,Math.sin(n.pitch)),Ut=-b/G,Gt=I/(G*wt);n.tx+=q*Ut+ft*Gt,n.tz+=Y*Ut+dt*Gt,ie(n),J=!0,ge(n)},kick(b){b=Number.isFinite(b)?Math.min(1,b):0,b>.02&&(m.t=Pf,m.k=b)},update(b){if(b=Number.isFinite(b)&&b>0?Math.min(b,.1):0,m.t>0&&(m.t=Math.max(0,m.t-b)),d.active){d.t+=b;const q=d.from,Y=d.to;if(d.t<So){const ft=d.t/So;Jt(n,q),n.d=q.d*(1.04-.04*(ft*(2-ft)))}else{const ft=lM(Math.min(1,(d.t-So)/Tf));n.tx=q.tx+(Y.tx-q.tx)*ft,n.ty=q.ty+(Y.ty-q.ty)*ft,n.tz=q.tz+(Y.tz-q.tz)*ft,n.d=Math.exp(Math.log(q.d)+(Math.log(Y.d)-Math.log(q.d))*ft),n.yaw=Ji(q.yaw+Ji(Y.yaw-q.yaw)*ft),n.pitch=q.pitch+(Y.pitch-q.pitch)*ft}gt(),d.t>=So+Tf&&ot();return}H==="play"&&!J&&!st&&Vt(),j.dt=b;let I=.25,G=nM;j.pin=0,H==="follow"&&f.has&&!J&&!st?(I=.3,G=.25,lt(),j.pin=1):H==="overview"?(I=.3,G=.3):H==="cup"&&(I=.45,G=.45),f.fresh=!1,!J&&b>0&&(j.T=I,j.Ty=G,$()),!(n.tx===W.tx&&n.ty===W.ty&&n.tz===W.tz&&n.d===W.dd&&n.yaw===W.yaw&&n.pitch===W.pitch&&m.t<=0&&!W.kicked&&t.fov===ht())&&gt()},screenToGround(b,I){if(!Number.isFinite(b)||!Number.isFinite(I))return null;const G=b/rt()*2-1,q=1-I/k()*2;if(R.copy(t.position),E.set(G,q,.5).unproject(t).sub(R).normalize(),!(E.y<-1e-5))return null;const Y=U+.01,ft=A-.01;let dt=Math.max(0,(Y-R.y)/E.y);const wt=Math.max(dt,(ft-R.y)/E.y),Ut=Ce=>R.y+E.y*Ce-pt(R.x+E.x*Ce,R.z+E.z*Ce);if(!v||wt-dt<1e-6){const Ce=U===A?(U-R.y)/E.y:dt;return{x:R.x+E.x*Ce,z:R.z+E.z*Ce}}const Gt=Math.sqrt(E.x*E.x+E.z*E.z),oe=Math.min(600,Math.max(1,Math.ceil((wt-dt)*Gt/.2))),fe=(wt-dt)/oe;let Ft=Ut(dt),ce=dt,ee=Ft<=0;if(!ee)for(let Ce=1;Ce<=oe;Ce++){ce=dt+fe*Ce;const ze=Ut(ce);if(ze<=0){ee=!0;break}dt=ce,Ft=ze}ee||(ce=wt);let ye=dt,Se=ce;for(let Ce=0;Ce<24&&Se-ye>1e-5;Ce++){const ze=(ye+Se)/2;Ut(ze)>0?ye=ze:Se=ze}const Te=(ye+Se)/2;return{x:R.x+E.x*Te,z:R.z+E.z*Te}},groundToScreen(b,I,G,q){const Y=q||{x:0,y:0,onScreen:!1};C.set(an(b,0),an(I,0),an(G,0)).applyMatrix4(t.matrixWorldInverse);const ft=C.z>-t.near;ft&&(C.z=-t.near),C.applyMatrix4(t.projectionMatrix);const dt=rt(),wt=k();let Ut=(C.x+1)/2*dt,Gt=(1-C.y)/2*wt;return ft&&(Ut=dt-Ut,Gt=wt-Gt),Y.x=an(Ut,dt/2),Y.y=an(Gt,wt/2),Y.onScreen=!ft&&Y.x>=0&&Y.x<=dt&&Y.y>=0&&Y.y<=wt,Y},pxPerMetre(b,I){const G=pt(an(b,0),an(I,0))+zn,q=t.position.distanceTo(C.set(an(b,0),G,an(I,0))),Y=k()/(2*Math.max(.01,q)*Math.tan(t.fov*us/2));return Number.isFinite(Y)?Y:1}};i.kickCamera=b=>z.kick(b);function $(){const b=j.dt;let I=2/Math.max(1e-4,j.T),G=I*b,q=1/(1+G+.48*G*G+.235*G*G*G),Y,ft;if(j.pin){const wt=.3+-.255*Eo(0,.6,f.age),Ut=Math.exp(-b/wt);n.tx=s.tx+(n.tx-s.tx)*Ut,n.ty=s.ty+(n.ty-s.ty)*Ut,n.tz=s.tz+(n.tz-s.tz)*Ut,r.x.v=0,r.y.v=0,r.z.v=0}else Y=n.tx-s.tx,ft=(r.x.v+I*Y)*b,r.x.v=(r.x.v-I*ft)*q,n.tx=s.tx+(Y+ft)*q,Y=n.ty-s.ty,ft=(r.y.v+I*Y)*b,r.y.v=(r.y.v-I*ft)*q,n.ty=s.ty+(Y+ft)*q,Y=n.tz-s.tz,ft=(r.z.v+I*Y)*b,r.z.v=(r.z.v-I*ft)*q,n.tz=s.tz+(Y+ft)*q;I=2/Math.max(1e-4,j.T*1.6),G=I*b,q=1/(1+G+.48*G*G+.235*G*G*G);const dt=Math.log(Math.max(.5,s.d));Y=Math.log(Math.max(.5,n.d))-dt,ft=(r.d.v+I*Y)*b,r.d.v=(r.d.v-I*ft)*q,n.d=Math.exp(dt+(Y+ft)*q),I=2/Math.max(1e-4,j.Ty),G=I*b,q=1/(1+G+.48*G*G+.235*G*G*G),Y=Ji(n.yaw-s.yaw),ft=(r.yaw.v+I*Y)*b,r.yaw.v=(r.yaw.v-I*ft)*q,n.yaw=Ji(s.yaw+(Y+ft)*q),Y=n.pitch-s.pitch,ft=(r.pitch.v+I*Y)*b,r.pitch.v=(r.pitch.v-I*ft)*q,n.pitch=s.pitch+(Y+ft)*q,Number.isFinite(n.tx+n.ty+n.tz+n.d+n.yaw+n.pitch)||(Jt(n,s),re()),Math.abs(n.tx-s.tx)+Math.abs(n.ty-s.ty)+Math.abs(n.tz-s.tz)<1e-4&&Math.abs(n.d-s.d)<1e-4*s.d&&Math.abs(Ji(n.yaw-s.yaw))+Math.abs(n.pitch-s.pitch)<1e-5&&Math.abs(r.x.v)+Math.abs(r.y.v)+Math.abs(r.z.v)+Math.abs(r.d.v)+Math.abs(r.yaw.v)+Math.abs(r.pitch.v)<1e-4&&(Jt(n,s),re())}function lt(){const b=j.dt;if(b>0&&f.fresh){const Y=(f.x-f.lastX)/b,ft=(f.z-f.lastZ)/b,dt=1-Math.exp(-b/.12);Number.isFinite(Y)&&Number.isFinite(ft)&&Math.abs(Y)<400&&Math.abs(ft)<400&&(f.vx+=(Y-f.vx)*dt,f.vz+=(ft-f.vz)*dt)}else if(b>0){const Y=Math.exp(-b/.3);f.vx*=Y,f.vz*=Y}f.lastX=f.x,f.lastZ=f.z,f.age+=b;const I=Math.sqrt(f.vx*f.vx+f.vz*f.vz);if(I>1.5&&b>0){const Y=Ji(Math.atan2(-f.vx,-f.vz)-f.yaw),ft=Math.abs(Y),dt=ft<1.75?1:ft>2.6?0:1-(ft-1.75)/.85;let wt=Y*(1-Math.exp(-b/rM))*dt*Eo(1.5,8,I);const Ut=oM*b;wt>Ut?wt=Ut:wt<-Ut&&(wt=-Ut),f.yaw=Ji(f.yaw+wt)}s.yaw=f.yaw,s.pitch=Z_;const G=Rt();h.yaw=s.yaw,h.pitch=s.pitch;{const Y=i.fov,ft=Math.tan((Y>1&&Y<170?Y:ki)*us/2),dt=t.aspect>0?t.aspect:16/9,wt=(G.x0+G.x1)/2*ft*dt,Ut=(G.y0+iM*(G.y1-G.y0))*ft,Gt=Math.sin(h.yaw),oe=Math.cos(h.yaw),fe=Math.sin(h.pitch),Ft=Math.cos(h.pitch),ce=oe*wt-Gt*fe*Ut-Gt*Ft,ee=Ft*Ut-fe,ye=-Gt*wt-oe*fe*Ut-oe*Ft;if(ee<-1e-4){const Se=-fe/ee;f.ox=Gt*Ft+ce*Se,f.oz=oe*Ft+ye*Se}else f.ox=0,f.oz=0}let q=f.baseD;if(v&&v.cup){const Y=v.cup,ft=Math.sqrt((Y.x-f.x)*(Y.x-f.x)+(Y.z-f.z)*(Y.z-f.z)),dt=Eo(15,6,ft),wt=(Y.x-f.x)*-Math.sin(h.yaw)+(Y.z-f.z)*-Math.cos(h.yaw);if(dt>0&&wt>-3){y=0;const Ut=pt(Y.x,Y.z);Q(Y.x,Ut+wo,Y.z),at(Y.x,Y.z,Ht.HOLE_R+.4,6,0),Q(f.x,pt(f.x,f.z)+2*zn,f.z);const Gt=pt(f.x,f.z);let oe=q,fe=Math.max(q,Math.min(q*2.2,T()*1.3));if(O.ty=Gt,O.tx=f.x-f.ox*oe,O.tz=f.z-f.oz*oe,!$t(G,O,oe)){if(O.tx=f.x-f.ox*fe,O.tz=f.z-f.oz*fe,$t(G,O,fe))for(let Ft=0;Ft<12;Ft++){const ce=(oe+fe)/2;O.tx=f.x-f.ox*ce,O.tz=f.z-f.oz*ce,$t(G,O,ce)?fe=ce:oe=ce}q+=(fe-q)*dt}}}s.tx=f.x-f.ox*q,s.tz=f.z-f.oz*q,s.ty=pt(f.x,f.z),s.d=q,ie(s)}function _t(b){if(!v)return;const I=v.bounds,G=Cf+.6*an(b.d,30);b.tx=Math.min(I.maxx+G,Math.max(I.minx-G,an(b.tx,0))),b.tz=Math.min(I.maxz+G,Math.max(I.minz-G,an(b.tz,0))),b.d=Math.min(qt(),Math.max(6,an(b.d,30)))}return gt(),z}function wM(i){let t=2166136261;for(let n=0;n<i.length;n++)t^=i.charCodeAt(n),t=Math.imul(t,16777619)>>>0;let e=t||1;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const ae=i=>new le(i),Re=(i,t)=>new le(i.r*t,i.g*t,i.b*t),Vo=(i,t,e)=>new le(i.r+(t.r-i.r)*e,i.g+(t.g-i.g)*e,i.b+(t.b-i.b)*e);function Cn(i,t,e,n="after"){if(!i.includes(t))throw new Error("course shader: injection target missing: "+t);return i.replace(t,n==="after"?t+`
`+e:n==="replace"?e:e+`
`+t)}const Wo=i=>{const t=new Float64Array(i.length*2);for(let e=0;e<i.length;e++)t[e*2]=i[e].x,t[e*2+1]=i[e].z;return t};function Ml(i,t,e){let n=!1;const s=i.length;for(let r=0,o=s-2;r<s;o=r,r+=2){const a=i[r],c=i[r+1],l=i[o],u=i[o+1];c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(n=!n)}return n}function Lf(i,t,e,n,s){const r=i.length/2,o=t?r:r-1;let a=1/0;for(let c=0;c<o;c++){const l=(c+1)%r,u=i[c*2],d=i[c*2+1],f=i[l*2]-u,h=i[l*2+1]-d,g=f*f+h*h||1e-12;let x=((e-u)*f+(n-d)*h)/g;x=x<0?0:x>1?1:x;const m=u+f*x,p=d+h*x,w=(m-e)*(m-e)+(p-n)*(p-n);w<a&&(a=w,s.x=m,s.z=p,s.seg=c,s.t=x)}return s.d=Math.sqrt(a),s}function bM(i,t,e,n,s,r){const o=e-i,a=n-t,c=o*o+a*a||1e-12;let l=((s-i)*o+(r-t)*a)/c;l=l<0?0:l>1?1:l;const u=i+o*l-s,d=t+a*l-r;return Math.sqrt(u*u+d*d)}function Ed(i,t=6){const e=Math.max(2,Math.ceil(Math.abs(i.to-i.from)/t)),n=[];for(let s=0;s<=e;s++){const r=(i.from+(i.to-i.from)*s/e)*Math.PI/180;n.push({x:i.x+Math.cos(r)*i.r,z:i.z-Math.sin(r)*i.r})}return n}function EM(i){const t=Wo(i.ground),e=t.length/2;let n=0;for(let p=0;p<e;p++){const w=(p+1)%e;n+=t[p*2]*t[w*2+1]-t[w*2]*t[p*2+1]}const s=n>0?1:-1,r=new Float64Array(e*2),o=new Float64Array(e);for(let p=0;p<e;p++){const w=(p+1)%e,M=t[w*2]-t[p*2],y=t[w*2+1]-t[p*2+1],C=Math.hypot(M,y)||1e-9;o[p]=C,r[p*2]=s*y/C,r[p*2+1]=-s*M/C}const a=[];for(const p of i.walls)a.push({poly:Wo(p.pts),closed:p.closed});for(const p of i.arcsRender||[])a.push({poly:Wo(Ed(p)),closed:!1});const c={d:0,x:0,z:0,seg:0,t:0},l=.25,u=new Int32Array(e+1),d=[];for(let p=0;p<e;p++){u[p]=d.length;const w=Math.max(1,Math.round(o[p]/l));for(let M=0;M<=w;M++){const y=M/w,C=t[p*2]+(t[(p+1)%e*2]-t[p*2])*y,R=t[p*2+1]+(t[(p+1)%e*2+1]-t[p*2+1])*y;let E=1/0;for(const S of a)Lf(S.poly,S.closed,C,R,c),c.d<E&&(E=c.d);d.push(E<.3?1:0)}}u[e]=d.length;const f=Uint8Array.from(d);let h=!1,g=!1;for(let p=0;p<f.length;p++)f[p]?g=!0:h=!0;const x={d:0,x:0,z:0,seg:0,t:0};return{poly:t,apronW:h?.75:3,count:e,segN:r,segLen:o,anyOpen:h,anyWalled:g,inside:(p,w)=>Ml(t,p,w),nearest:(p,w,M=x)=>Lf(t,!0,p,w,M),walled(p,w){const M=u[p],y=u[p+1]-1-M;return f[M+Math.round(w*y)]===1}}}const To=new nt,Ao=new nt,Co=new nt,hn=new nt,If=new nt,Df=new nt;class TM{constructor(){this.pos=[],this.nor=[],this.col=[],this.leaf=[]}get triangles(){return this.pos.length/9}_v(t,e,n,s,r,o,a,c){this.pos.push(t,e,n),this.nor.push(s,r,o),this.col.push(a.r,a.g,a.b),this.leaf.push(c)}tri(t,e,n,s,r=0,o=null){To.set(t[0],t[1],t[2]),Ao.set(e[0],e[1],e[2]),Co.set(n[0],n[1],n[2]),If.subVectors(Ao,To),Df.subVectors(Co,To),hn.crossVectors(If,Df);const a=hn.length();if(a<1e-9)return;hn.multiplyScalar(1/a);let c=To,l=Ao,u=Co;o&&hn.x*o[0]+hn.y*o[1]+hn.z*o[2]<0&&(l=Co,u=Ao,hn.negate()),this._v(c.x,c.y,c.z,hn.x,hn.y,hn.z,s,r),this._v(l.x,l.y,l.z,hn.x,hn.y,hn.z,s,r),this._v(u.x,u.y,u.z,hn.x,hn.y,hn.z,s,r)}quad(t,e,n,s,r,o=0,a=null){this.tri(t,e,n,r,o,a),this.tri(t,n,s,r,o,a)}geo(t,e,{leaf:n=0,flat:s=!0,matrix:r=null}={}){const o=t.index?t.toNonIndexed():t;(s||!o.attributes.normal)&&o.computeVertexNormals();let a=o.attributes.position.array;const c=a.length/9,l=new Array(c);for(let d=0;d<c;d++){const f=d*9,h=a[f+3]-a[f],g=a[f+4]-a[f+1],x=a[f+5]-a[f+2],m=a[f+6]-a[f],p=a[f+7]-a[f+1],w=a[f+8]-a[f+2],M=g*w-x*p,y=x*m-h*w,C=h*p-g*m;if(M*M+y*y+C*C<1e-14){l[d]=null;continue}l[d]=e((a[f]+a[f+3]+a[f+6])/3,(a[f+1]+a[f+4]+a[f+7])/3,(a[f+2]+a[f+5]+a[f+8])/3,d)}r&&o.applyMatrix4(r),a=o.attributes.position.array;const u=o.attributes.normal.array;for(let d=0;d<c;d++){const f=l[d];if(!f)continue;const h=d*9;let g=!0;for(let x=0;x<9;x++)(!Number.isFinite(u[h+x])||!Number.isFinite(a[h+x]))&&(g=!1);if(g)for(let x=0;x<9;x+=3)this._v(a[h+x],a[h+x+1],a[h+x+2],u[h+x],u[h+x+1],u[h+x+2],f,n)}o!==t&&o.dispose(),t.dispose()}build(){const t=new je;return t.setAttribute("position",new Pe(this.pos,3)),t.setAttribute("normal",new Pe(this.nor,3)),t.setAttribute("color",new Pe(this.col,3)),t.setAttribute("aLeaf",new Pe(this.leaf,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const AM=new Ie,zf=new ms,Nf=new nt,nc=new nt,CM=new nt(0,1,0);function Je(i,t,e,n=0,s=1){return Nf.set(i,t,e),zf.setFromAxisAngle(CM,n),Array.isArray(s)?nc.set(s[0],s[1],s[2]):nc.set(s,s,s),AM.compose(Nf,zf,nc).clone()}const RM={fairway:1,green:2,rough:3,sand:4,water:5,ice:6},PM=[1/16,4/16,6/16,4/16,1/16],Ro=[0,1/4,2/4,1/4,0];function Qi(i,t,e,n=PM){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=a+l<0?0:a+l>=t?t-1:a+l;c+=i[o*t+u]*n[l+2]}s[o*t+a]=c}for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=o+l<0?0:o+l>=e?e-1:o+l;c+=s[u*t+a]*n[l+2]}r[o*t+a]=c}return r}function LM(i,t,e,n){const r=new Float32Array(t*e);for(let a=0;a<r.length;a++)r[a]=i[a]?1e9:0;const o=Math.SQRT2;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c>0&&(u=Math.min(u,r[l-1]+1)),a>0&&(u=Math.min(u,r[l-t]+1),c>0&&(u=Math.min(u,r[l-t-1]+o)),c<t-1&&(u=Math.min(u,r[l-t+1]+o))),r[l]=u}for(let a=e-1;a>=0;a--)for(let c=t-1;c>=0;c--){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c<t-1&&(u=Math.min(u,r[l+1]+1)),a<e-1&&(u=Math.min(u,r[l+t]+1),c<t-1&&(u=Math.min(u,r[l+t+1]+o)),c>0&&(u=Math.min(u,r[l+t-1]+o))),r[l]=u}for(let a=0;a<r.length;a++)r[a]=r[a]>=1e9?50:r[a]>0?(r[a]-.5)*n:0;return r}function Uf(i,t,e){const n=new Bl(i,t,e,Bn,oi);return n.flipY=!1,n.magFilter=kn,n.minFilter=kn,n.generateMipmaps=!1,n.wrapS=vi,n.wrapT=vi,n.colorSpace=gi,n.needsUpdate=!0,n}function IM(i,t,e){const{cols:n,rows:s,cell:r,x0:o,z0:a,surface:c}=i.grid,l=n*s;let u=Uint8Array.from(c);for(let N=0;N<3;N++){const W=u;u=Uint8Array.from(W);for(let Z=0;Z<s;Z++)for(let it=0;it<n;it++){const O=Z*n+it;if(W[O]!==0)continue;const j=it>0&&W[O-1]||it<n-1&&W[O+1]||Z>0&&W[O-n]||Z<s-1&&W[O+n]||0;u[O]=j}}const d=new Float32Array(l),f=new Float32Array(l),h=new Float32Array(l),g=new Float32Array(l);let x=!1;const m=(N,W,Z)=>{W===2?d[N]+=Z:W===4?f[N]+=Z:W===5&&(h[N]+=Z),g[N]+=(W===3?1:W===6?0:.5)*Z},p=(i.zones||[]).map(N=>({code:RM[N.surface]||1,poly:Wo(N.pts)})),w=t.poly,M=4;for(let N=0;N<s;N++)for(let W=0;W<n;W++){const Z=N*n+W,it=u[Z];c[Z]===5&&(x=!0);let O=!1;for(let k=-1;k<=1&&!O;k++){const rt=N+k;if(!(rt<0||rt>=s))for(let ht=-1;ht<=1;ht++){const Mt=W+ht;if(Mt>=0&&Mt<n&&u[rt*n+Mt]!==it){O=!0;break}}}if(!O){m(Z,it,1);continue}const j=o+W*r,pt=a+N*r;for(let k=0;k<M;k++)for(let rt=0;rt<M;rt++){const ht=j+((k+.5)/M-.5)*r,Mt=pt+((rt+.5)/M-.5)*r;let Rt=it;if(Ml(w,ht,Mt)){Rt=1;for(const tt of p)Ml(tt.poly,ht,Mt)&&(Rt=tt.code)}m(Z,Rt,1/(M*M))}}const y=Qi(d,n,s,Ro),C=Qi(f,n,s,Ro),R=Qi(h,n,s,Ro),E=Qi(g,n,s,Ro),S=Qi(Qi(d,n,s),n,s),_=new Uint8Array(l);for(let N=0;N<l;N++)_[N]=c[N]===5?1:0;const v=LM(_,n,s,r),A=new Float32Array(l),U=.55,F=(N,W,Z,it,O)=>{const j=Math.max(0,Math.floor((N-o)/r)),pt=Math.min(n-1,Math.ceil((W-o)/r)),k=Math.max(0,Math.floor((Z-a)/r)),rt=Math.min(s-1,Math.ceil((it-a)/r));for(let ht=k;ht<=rt;ht++)for(let Mt=j;Mt<=pt;Mt++){const Rt=O(o+Mt*r,a+ht*r),tt=ht*n+Mt;Rt>A[tt]&&(A[tt]=Rt)}};for(const N of e)if(N.r!==void 0){const W=N.r+U;F(N.x-W,N.x+W,N.z-W,N.z+W,(Z,it)=>{const O=Math.hypot(Z-N.x,it-N.z)-N.r;return O<0?1:Math.max(0,1-O/U)})}else{const W=N.hw+U;F(Math.min(N.ax,N.bx)-W,Math.max(N.ax,N.bx)+W,Math.min(N.az,N.bz)-W,Math.max(N.az,N.bz)+W,(Z,it)=>{const O=bM(N.ax,N.az,N.bx,N.bz,Z,it)-N.hw;return O<0?1:Math.max(0,1-O/U)})}const H=new Float32Array(l);if(t.anyOpen)for(let N=2;N<s-2;N++)for(let W=2;W<n-2;W++){const Z=N*n+W;if(c[Z]===0)continue;let it=!1;for(let j=-2;j<=2&&!it;j++)for(let pt=-2;pt<=2;pt++)if(c[Z+j*n+pt]===0){it=!0;break}if(!it)continue;const O=t.nearest(o+W*r,a+N*r);O.d<.7&&!t.walled(O.seg,O.t)&&(H[Z]=1)}if(t.anyOpen)for(let N=0;N<2;N++){const W=Float32Array.from(H);for(let Z=1;Z<s-1;Z++)for(let it=1;it<n-1;it++){const O=Z*n+it;c[O]!==0||W[O]||(W[O-1]||W[O+1]||W[O-n]||W[O+n])&&(H[O]=1)}}const st=t.anyOpen?Qi(H,n,s):H,J=new Uint8Array(l*4),xt=new Uint8Array(l*4),et=N=>N<=0?0:N>=1?255:Math.round(N*255);for(let N=0;N<l;N++)J[N*4]=et(y[N]),J[N*4+1]=et(C[N]),J[N*4+2]=et(R[N]),J[N*4+3]=et(E[N]),xt[N*4]=et(A[N]*A[N]*(3-2*A[N])),xt[N*4+1]=et(v[N]/2.5),xt[N*4+2]=et(st[N]),xt[N*4+3]=et(S[N]);const V=new He(o-r/2,a-r/2,1/(n*r),1/(s*r));return{mask:Uf(J,n,s),aux:Uf(xt,n,s),waterDist:v,hasWater:x,xf:V}}const ea=3,DM=.15,zM=.45,NM=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function UM(i,t,e,n,s=[],r=1){const{cols:o,rows:a,cell:c,x0:l,z0:u,surface:d}=i.grid,f=i.heightAt,h=2,g=c*h,x=Math.floor((o-1)/h)+1,m=Math.floor((a-1)/h)+1,p=x*m,w=new Uint8Array(p),M=new Float64Array(p),y=new Float64Array(p),C=new Float64Array(p),R=new Float32Array(p),E=new Uint8Array(p);for(let b=0;b<m;b++)for(let I=0;I<x;I++){const G=b*x+I,q=b*h*o+I*h,Y=l+I*g,ft=u+b*g;w[G]=d[q]!==0?1:0;const dt=t.nearest(Y,ft);if(M[G]=dt.x,y[G]=dt.z,C[G]=dt.d,R[G]=t.walled(dt.seg,dt.t)?t.apronW:0,e.hasWater){const wt=I*h,Ut=b*h;t:for(let Gt=-3;Gt<=3;Gt++){const oe=Ut+Gt;if(!(oe<0||oe>=a))for(let fe=-3;fe<=3;fe++){const Ft=wt+fe;if(!(Ft<0||Ft>=o)&&d[oe*o+Ft]===5){E[G]=1;break t}}}}}const S=[],_=[],v=[],A=[],U=[],F=[],H=[];let st=0;const J=(b,I,G,q,Y,ft,dt,wt,Ut,Gt)=>(S.push(b,I,G),_.push(q,Y,ft),v.push(dt.r,dt.g,dt.b),A.push(wt,Ut),U.push(Gt),st++),xt=new le(1,1,1),et=.25,V=1,N=new Int32Array(p).fill(-1),W=[],Z=b=>{if(N[b]>=0)return N[b];const I=b%x,G=(b-I)/x;let q=l+I*g,Y=u+G*g;w[b]||(q=M[b],Y=y[b]);const ft=G*h*o+I*h;let dt=0;w[b]&&d[ft]===5&&(dt=zM*NM(0,1.6,e.waterDist[ft]));const wt=f(q,Y),Ut=(f(q+et,Y)-f(q-et,Y))/(2*et),Gt=(f(q,Y+et)-f(q,Y-et))/(2*et),oe=(f(q+V,Y)-f(q-V,Y))/(2*V),fe=(f(q,Y+V)-f(q,Y-V))/(2*V),Ft=Math.hypot(oe,1,fe),ce=J(q,wt-dt,Y,-oe/Ft,1/Ft,-fe/Ft,xt,dt>0?0:-Ut,dt>0?0:-Gt,0);return H[ce]=dt>0?1:0,W[ce]=E[b],N[b]=ce,ce},it=new Map,O=2097152,j=(b,I,G)=>{const q=b<I?b*O+I:I*O+b,Y=it.get(q);Y?Y[0]++:it.set(q,[1,b,I,G])},pt=[],k=[0,0],rt=(b,I,G,q)=>{const Y=S[b*3],ft=S[b*3+2],dt=(S[I*3]-Y)*(S[G*3+2]-ft)-(S[G*3]-Y)*(S[I*3+2]-ft);if(!(Math.abs(dt)<1e-7)&&!(dt<0&&(k[q?0:1]++,q))){if(dt>0){const wt=I;I=G,G=wt}F.push(b,I,G),j(b,I,G),j(I,G,b),j(G,b,I),q&&q.push(b,I,G)}},ht=(b,I,G,q,Y,ft,dt,wt,Ut,Gt)=>{const oe=Y+ft+dt+wt,fe=oe===1?!!(Y||dt):oe===3?!!(Y&&dt):oe===2?!(ft&&wt):!0,Ft=Ut(b),ce=Ut(I),ee=Ut(G),ye=Ut(q);fe?(rt(Ft,ce,ee,Gt),rt(Ft,ee,ye,Gt)):(rt(Ft,ce,ye,Gt),rt(ce,ee,ye,Gt))};for(let b=0;b<m-1;b++)for(let I=0;I<x-1;I++){const G=b*x+I,q=G+1,Y=G+x+1,ft=G+x;(w[G]||w[q]||w[Y]||w[ft])&&ht(G,q,Y,ft,w[G],w[q],w[Y],w[ft],Z,pt)}const Mt=st,Rt=new Map(it);it.clear();const tt=Vo(ae(n.rough),ae(n.hedge),.35),gt=new Int32Array(p).fill(-1),B=[],Q={d:0,x:0,z:0,seg:0,t:0},It=1,jt=(b,I)=>{const G=t.nearest(b,I,Q);let q=t.walled(G.seg,G.t)?G.d-t.apronW:1/0;for(let Y=0;Y<s.length;Y++){const ft=Math.hypot(b-s[Y].x,I-s[Y].z)-s[Y].r,dt=Math.max(It-Math.abs(q-ft),0)/It;q=Math.min(q,ft)-dt*dt*It*.25}return q},Bt=new Float64Array(p);for(let b=0;b<p;b++){if(w[b])continue;if(C[b]>t.apronW+.8&&!s.length){Bt[b]=1/0;continue}const I=b%x;Bt[b]=jt(l+I*g,u+(b-I)/x*g)}const te=new Float64Array(p);for(let b=0;b<p;b++)te[b]=Math.min(1e3,w[b]?Math.max(C[b],1e-4):Math.max(Bt[b],-C[b]));const $t=(b,I,G)=>{const q=t.nearest(b,I,Q);let Y=b,ft=I;G===0&&(Y=q.x,ft=q.z);const dt=G===0?0:Math.min(q.d,ea),wt=f(q.x,q.z)-DM-.07*(dt/ea),Ut=J(Y,wt,ft,0,1,0,xt,0,0,1);return B[Ut]=G,Ut},T=b=>{if(gt[b]<0){const I=b%x;gt[b]=$t(l+I*g,u+(b-I)/x*g,1)}return gt[b]},P=new Map,at=(b,I)=>{const G=b<I?b*p+I:I*p+b;let q=P.get(G);if(q!==void 0)return q;const Y=te[b]/(te[b]-te[I]),ft=b%x,dt=I%x,wt=l+(ft+(dt-ft)*Y)*g,Ut=u+((b-ft)/x+((I-dt)/x-(b-ft)/x)*Y)*g,Gt=t.nearest(wt,Ut,Q),oe=!t.inside(wt,Ut)&&Gt.d<.12&&-Gt.d>=jt(wt,Ut)-.05;return q=$t(wt,Ut,oe||t.inside(wt,Ut)?0:2),P.set(G,q),q},mt=[];if(t.anyWalled||s.length)for(let b=0;b<m-1;b++)for(let I=0;I<x-1;I++){const G=[b*x+I,b*x+I+1,(b+1)*x+I+1,(b+1)*x+I];if(te[G[0]]<0||te[G[1]]<0||te[G[2]]<0||te[G[3]]<0){mt.length=0;for(let q=0;q<4;q++){const Y=G[q],ft=G[q+1&3];te[Y]<0&&mt.push(T(Y)),te[Y]<0!=te[ft]<0&&mt.push(at(Y,ft))}for(let q=1;q<mt.length-1;q++)rt(mt[0],mt[q],mt[q+1],null)}}const bt=it,St=(b,I)=>{let G=(b-l)/g,q=(I-u)/g;if(G<0||q<0||G>=x-1||q>=m-1)return!1;const Y=Math.floor(G),ft=Math.floor(q);G-=Y,q-=ft;const dt=ft*x+Y,wt=te[dt]+(te[dt+1]-te[dt])*G,Ut=te[dt+x]+(te[dt+x+1]-te[dt+x])*G;return wt+(Ut-wt)*q<0};let Xt=1/0;for(let b=1;b<S.length;b+=3)S[b]<Xt&&(Xt=S[b]);const kt=Xt-1.6,Dt=new Float64Array(st*2),ue=b=>{const[,I,G,q]=b,Y=S[G*3]-S[I*3],ft=S[G*3+2]-S[I*3+2],dt=Math.hypot(Y,ft);if(dt<.04)return null;let wt=ft/dt,Ut=-Y/dt;const Gt=(S[I*3]+S[G*3])/2,oe=(S[I*3+2]+S[G*3+2])/2;return(S[q*3]-Gt)*wt+(S[q*3+2]-oe)*Ut>0&&(wt=-wt,Ut=-Ut),[wt*dt,Ut*dt]},At=[];for(const b of Rt.values()){if(b[0]!==1)continue;const I=ue(b);if(!I)continue;const G=(S[b[1]*3]+S[b[2]*3])/2,q=(S[b[1]*3+2]+S[b[2]*3+2])/2,Y=Math.hypot(I[0],I[1]),ft=!((t.anyWalled||s.length)&&St(G+I[0]/Y*.3,q+I[1]/Y*.3));At.push([b[1],b[2],ft?1:0,0,I]);for(const dt of[b[1],b[2]])Dt[dt*2]+=I[0],Dt[dt*2+1]+=I[1]}for(const b of bt.values()){if(b[0]!==1||B[b[1]]===0&&B[b[2]]===0)continue;const I=ue(b);if(I){At.push([b[1],b[2],1,1,I]);for(const G of[b[1],b[2]])Dt[G*2]+=I[0],Dt[G*2+1]+=I[1]}}const Vt=ae(n.soilTop),ie=Vo(ae(n.soilBottom),ae(n.skyBottom),.22),qt=Vo(Vt,ae(n.soilBottom),.55),Ot=[Re(ae(n.rough),.95),Re(ae(n.rough),.7)],Jt=[Re(tt,.95),Re(tt,.7)],re=[ae(Ae.pinWhite),Re(ae(n.rough),.7)],ge=[[0,0,.35,.94],[.07,-.06,.8,.6],[.09,-.16,1,.1],[.02,"mid",1,-.05],[-.15,"bot",.8,-.6]];for(const[b,I,G,q,Y]of At){const ft=Math.hypot(Y[0],Y[1]),dt=Y[0]/ft,wt=Y[1]/ft,Ut=q?Jt:G?re:Ot,Gt=[[],[]],oe=G?ge:[[0,0,1,0],[0,-.22,1,0]];[b,I].forEach((fe,Ft)=>{let ce=Dt[fe*2],ee=Dt[fe*2+1];const ye=Math.hypot(ce,ee);ce/=ye||1,ee/=ye||1,(!(ye>1e-6)||ce*dt+ee*wt<.5)&&(ce=dt,ee=wt);const Se=S[fe*3],Te=S[fe*3+1],Ce=S[fe*3+2];for(let ze=0;ze<oe.length;ze++){const[Ve,D,L,X]=oe[ze],ct=D==="bot"?kt:D==="mid"?Te-.16+(kt-(Te-.16))*.5:Te+D,K=Math.hypot(L,X),Ct=G?ze===0?Ut[0]:ze===1?Ut[1]:ze===2?Vt:ze===3?qt:ie:Vt;Gt[Ft].push(J(Se+ce*Ve,ct,Ce+ee*Ve,ce*L/K,X/K,ee*L/K,Ct,0,0,2))}});for(let fe=0;fe<oe.length-1;fe++){const Ft=[Gt[0][fe],Gt[1][fe],Gt[1][fe+1],Gt[0][fe+1]],ce=S[Ft[0]*3],ee=S[Ft[0]*3+1],ye=S[Ft[0]*3+2],Se=S[Ft[1]*3]-ce,Te=S[Ft[1]*3+1]-ee,Ce=S[Ft[1]*3+2]-ye,ze=S[Ft[2]*3]-ce,Ve=S[Ft[2]*3+1]-ee,D=S[Ft[2]*3+2]-ye,L=Te*D-Ce*Ve,X=Se*Ve-Te*ze,ct=_[Ft[0]*3]+_[Ft[1]*3],K=_[Ft[0]*3+2]+_[Ft[1]*3+2];L*ct+X*K>=0?F.push(Ft[0],Ft[1],Ft[2],Ft[0],Ft[2],Ft[3]):F.push(Ft[0],Ft[2],Ft[1],Ft[0],Ft[3],Ft[2])}}const ot=new je;ot.setAttribute("position",new Pe(S,3)),ot.setAttribute("normal",new Pe(_,3)),ot.setAttribute("color",new Pe(v,3)),ot.setAttribute("aFlow",new Pe(A,2)),ot.setAttribute("aMode",new Pe(U,1)),ot.setIndex(F),ot.computeBoundingSphere(),ot.computeBoundingBox();const{material:z,uniforms:$}=kM(e,n,tt,r===0),lt=new Ge(ot,z);lt.name="course-terrain",lt.receiveShadow=!0,lt.userData.terrain={courseVerts:Mt,lowered:Uint8Array.from(H),folds:k};const _t=[];if(e.hasWater)for(let b=0;b<pt.length;b+=3){const I=pt[b],G=pt[b+1],q=pt[b+2];(W[I]||W[G]||W[q])&&_t.push(I,G,q)}return{mesh:lt,uniforms:$,waterTris:_t,positions:S,minY:Xt,yBot:kt}}const FM=`
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
`,OM=`
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
`;function kM(i,t,e,n){const s={uMask:{value:i.mask},uAux:{value:i.aux},uMaskXf:{value:i.xf},uTime:{value:0},uFlow:{value:0},uStripeW:{value:2.4},uGreenW:{value:.9},uContourStep:{value:.15},uDotCell:{value:1.6},uRough:{value:ae(t.rough)},uFairA:{value:ae(t.fairwayLight)},uFairB:{value:ae(t.fairwayDark)},uFringe:{value:ae(t.fringe)},uGreenA:{value:ae(t.greenLight)},uGreenB:{value:ae(t.greenDark)},uSand:{value:ae(t.sand)},uSandLip:{value:ae(t.sandLip)},uBed:{value:ae(t.pondBed)},uIce:{value:ae(t.ice)},uLine:{value:ae(Ae.surfaceOutline)},uApron:{value:e},uKerbA:{value:ae(Ae.pinWhite)},uKerbB:{value:ae(Ae.pinBand)}},r=new pa({color:16777215,vertexColors:!0});return n&&(r.defines={EBG_LOW:""}),r.onBeforeCompile=o=>{Object.assign(o.uniforms,s);let a=o.vertexShader;a=Cn(a,"#include <common>",`attribute vec2 aFlow;
attribute float aMode;
varying vec3 vWPos;
varying vec2 vFlow;
varying float vMode;`),a=Cn(a,"#include <begin_vertex>",`vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vFlow = aFlow;
vMode = aMode;`),o.vertexShader=a;let c=o.fragmentShader;c=Cn(c,"#include <common>",FM),c=Cn(c,"#include <color_fragment>",OM),o.fragmentShader=c},r.customProgramCacheKey=()=>n?"ebg-terrain-v1-low":"ebg-terrain-v1",{material:r,uniforms:s}}const BM=`
varying vec2 vXZ;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vXZ = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,HM=`
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
`;function GM(i,t,e,n){const s=t.waterTris;if(!e.hasWater||s.length===0)return null;const r=i.heightAt,o=t.positions,a=new Map,c=[],l=[];for(const g of s){let x=a.get(g);if(x===void 0){x=c.length/3;const m=o[g*3],p=o[g*3+2];c.push(m,r(m,p)+.03,p),a.set(g,x)}l.push(x)}const u=new je;u.setAttribute("position",new Pe(c,3)),u.setIndex(l),u.computeBoundingSphere();const d={uMask:{value:e.mask},uAux:{value:e.aux},uMaskXf:{value:e.xf},uTime:{value:0},uLake:{value:i.round===2?1:0},uShallow:{value:ae(n.waterShallow)},uDeep:{value:ae(n.waterDeep)},uFoam:{value:ae(n.waterFoam)},uGlint:{value:ae(n.waterGlint)},uBand:{value:ae(n.hemiSky)}},f=new _n({uniforms:d,vertexShader:BM,fragmentShader:HM,transparent:!0,depthWrite:!1}),h=new Ge(u,f);return h.name="course-water",h.renderOrder=1,{mesh:h,uniforms:d}}function VM(i,t,e){return i==="cushion"?(e=e||.42,t?{pts:[[-.2,-.3],[-.2,e-.12],[-.15,e-.03],[-.08,e],[.08,e],[.15,e-.03],[.2,e-.12],[.2,-.3]],roles:["nose","nose","nose","top","nose","nose","nose"],h:e}:{pts:[[0,-.3],[0,e-.12],[.05,e-.03],[.12,e],[.46,e],[.5,e-.05],[.53,e-.12],[.53,-.34]],roles:["nose","nose","nose","top","top","side","side"],h:e}):i==="hedge"?(e=e||.52,t?{pts:[[-.22,-.3],[-.22,e-.2],[-.17,e-.06],[-.08,e],[.08,e],[.17,e-.06],[.22,e-.2],[.22,-.3]],roles:Array(7).fill("hedge"),h:e}:{pts:[[0,-.3],[0,e-.2],[.05,e-.06],[.14,e],[.42,e],[.52,e-.08],[.56,e-.25],[.56,-.34]],roles:Array(7).fill("hedge"),h:e}):i==="bumper"?(e=e||.4,t?{pts:[[-.2,-.3],[-.2,e-.2],[-.16,e-.08],[-.09,e-.01],[-.04,e],[.04,e],[.09,e-.01],[.16,e-.08],[.2,e-.2],[.2,-.3]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}:{pts:[[0,-.3],[0,e-.2],[.04,e-.08],[.12,e-.01],[.21,e],[.31,e],[.4,e-.01],[.47,e-.08],[.5,e-.2],[.5,-.34]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}):(e=e||.4,t?{pts:[[-.18,-.3],[-.18,e-.05],[-.14,e],[.14,e],[.18,e-.05],[.18,-.3]],roles:["face","cap","cap","cap","face"],h:e}:{pts:[[0,-.3],[0,e-.05],[.04,e],[.46,e],[.5,e-.05],[.5,-.34]],roles:["face","cap","cap","cap","side"],h:e})}const WM={cushion:.2,hedge:.22,bumper:.2,wall:.18};function XM(i,t,e,n,s){const r=i.heightAt,o=[],a=i.walls.map(l=>({kind:l.kind,pts:l.pts,closed:l.closed,h:l.h,border:l.border}));for(const l of i.arcsRender||[])a.push({kind:l.kind,pts:Ed(l,6),closed:!1,h:void 0,border:!1});const c={nose:ae(n.cushionNose),top:ae(n.railTop),side:ae(n.railSide),sights:ae(n.railSights),hedge:ae(n.hedge),stone:ae(n.wallStone),pad:ae(s),stripe:ae(Ae.pinWhite)};for(const l of a){const u=qM.has(l.kind)?l.kind:"wall",d=YM(l.pts,l.closed);if(d.length<2)continue;const f=d.length,h=l.closed?f:f-1;let g=0,x=0;for(let V=0;V<h;V++){const N=d[V],W=d[(V+1)%f],Z=W.x-N.x,it=W.z-N.z,O=Math.hypot(Z,it);if(O<1e-6)continue;const j=-it/O,pt=Z/O,k=(N.x+W.x)/2,rt=(N.z+W.z)/2,ht=t.inside(k+j*.35,rt+pt*.35),Mt=t.inside(k-j*.35,rt-pt*.35);ht!==Mt&&(g+=ht?-O:O),x+=O}const m=l.border||Math.abs(g)>x*.5,p=m?g>=0?1:-1:1,w=VM(u,!m,l.h),M=m?0:WM[u];for(let V=0;V<h;V++){const N=d[V],W=d[(V+1)%f];o.push({ax:N.x,az:N.z,bx:W.x,bz:W.z,hw:M})}const y=[],C=[];for(let V=0;V<h;V++){const N=d[V],W=d[(V+1)%f],Z=Math.hypot(W.x-N.x,W.z-N.z);C.push([-(W.z-N.z)/Z,(W.x-N.x)/Z,Z])}let R=0;const E=(V,N,W,Z,it)=>y.push({x:V,z:N,nx:W,nz:Z,u:R,join:it}),S=(V,N,W)=>{const Z=Math.atan2(N[1],N[0]);let it=Math.atan2(W[1],W[0])-Z;for(;it>Math.PI;)it-=2*Math.PI;for(;it<-Math.PI;)it+=2*Math.PI;const O=Math.max(1,Math.ceil(Math.abs(it)/(Math.PI/9)));for(let j=0;j<=O;j++){const pt=Z+it*j/O;E(V.x,V.z,Math.cos(pt),Math.sin(pt),j>0&&j<O)}},_=(V,N,W,Z)=>{for(let O=0;O<=6;O++){const j=Z?Math.PI-Math.PI*O/6:-Math.PI*O/6,pt=N[0]*Math.cos(j)-W[0]*Math.sin(j),k=N[1]*Math.cos(j)-W[1]*Math.sin(j);E(V.x,V.z,pt,k,O>0&&O<6)}},v=[];for(let V=0;V<h;V++){const N=d[V],W=d[(V+1)%f],[Z,it,O]=C[V],j=[(W.x-N.x)/O,(W.z-N.z)/O];if(V===0&&!l.closed)m?E(N.x,N.z,Z,it,!1):_(N,[Z,it],j,!0);else{const rt=C[(V-1+h)%h];S(N,[rt[0],rt[1]],[Z,it])}const pt=Math.max(1,Math.ceil(O/.5)),k=R;for(let rt=1;rt<pt;rt++)R=k+O*rt/pt,E(N.x+(W.x-N.x)*(rt/pt),N.z+(W.z-N.z)*(rt/pt),Z,it,!1);if(R=k+O,u==="cushion")for(let rt=Math.ceil((k+.4-1)/2)*2+1;rt<k+O-.4;rt+=2)v.push([N.x+j[0]*(rt-k),N.z+j[1]*(rt-k),Z,it,j]);V===h-1&&!l.closed&&(m?E(W.x,W.z,Z,it,!1):_(W,[Z,it],j,!1))}if(l.closed&&y.length){const V=y[0];y.push({...V,u:R})}const A=w.pts,U=(V,N,W)=>{const Z=A[N][0]*p,it=V.x+V.nx*Z,O=V.z+V.nz*Z,j=A[N][1]>=0?V.hc+A[N][1]:r(it,O)+A[N][1];return W[0]=it,W[1]=j,W[2]=O,W};for(const V of y)V.hc=r(V.x,V.z);let F=0,H=0;for(const V of A)F+=V[0],H+=V[1];F/=A.length,H/=A.length;const st=[0,0,0],J=[0,0,0],xt=[0,0,0],et=[0,0,0];for(let V=0;V<y.length-1;V++){const N=y[V],W=y[V+1],Z=(N.nx+W.nx)*.5,it=(N.nz+W.nz)*.5,O=u==="wall"?Math.floor((N.u+W.u)*.5/1.2)%2?.95:1.04:1;for(let j=0;j<A.length-1;j++){const pt=A[j+1][0]-A[j][0];let rt=A[j+1][1]-A[j][1],ht=-pt;const Mt=(A[j][0]+A[j+1][0])/2-F,Rt=(A[j][1]+A[j+1][1])/2-H;rt*Mt+ht*Rt<0&&(rt=-rt,ht=-ht);const tt=[Z*rt*p,ht,it*rt*p],gt=w.roles[j],B=Math.max(0,(A[j][1]+A[j+1][1])/2)/w.h,Q=ht>.7?1:.72+.33*Math.min(1,B);let It,jt=0;u==="cushion"?It=Re(gt==="nose"?c.nose:gt==="top"?c.top:c.side,Q):u==="hedge"?(It=Re(c.hedge,.62+.46*Math.min(1,B)),jt=1):u==="bumper"?It=Re(gt==="stripe"?c.stripe:c.pad,gt==="stripe"?1:Q):It=Re(c.stone,(gt==="cap"?1:gt==="face"?.8*Q:.66*Q)*O),U(N,j,st),U(W,j,J),U(W,j+1,xt),U(N,j+1,et),e.quad(st,J,xt,et,It,jt,tt)}}if(!l.closed&&m&&y.length>=2)for(const[V,N]of[[y[0],y[1]],[y[y.length-1],y[y.length-2]]]){const W=[V.x-N.x,0,V.z-N.z],Z=A.map((O,j)=>U(V,j,[0,0,0])),it=u==="hedge"?Re(c.hedge,.8):u==="cushion"?c.side:u==="bumper"?c.pad:Re(c.stone,.75);for(let O=1;O<Z.length-1;O++)e.tri(Z[0],Z[O],Z[O+1],it,u==="hedge"?1:0,W)}if(u==="cushion"){const V=m?.29:0;for(const[N,W,Z,it,O]of v){const j=N+Z*V*p,pt=W+it*V*p,k=r(N,W)+w.h+.008,rt=.11,ht=.065,Mt=[j+O[0]*rt,k,pt+O[1]*rt],Rt=[j-O[0]*rt,k,pt-O[1]*rt],tt=[j+Z*ht,k,pt+it*ht],gt=[j-Z*ht,k,pt-it*ht];e.quad(Mt,tt,Rt,gt,c.sights,0,[0,1,0])}}}return o}const qM=new Set(["cushion","hedge","bumper","wall"]);function YM(i,t){const e=[];for(const n of i){const s=e[e.length-1];(!s||Math.hypot(n.x-s.x,n.z-s.z)>1e-4)&&e.push({x:n.x,z:n.z})}if(t&&e.length>2){const n=e[0],s=e[e.length-1];Math.hypot(n.x-s.x,n.z-s.z)<1e-4&&e.pop()}return e}const KM=(i,t)=>new ne(i,t),os=(i,t)=>new fa(i.map(([e,n])=>KM(e,n)),t),Yn=i=>i<0?0:i>1?1:i,$M=[16513779,16763196,16748467,15217199,10189792],jM=[0,0,-1],ZM=[0,.866,.5];function JM(i){const t=[ae(i.hedge),Vo(ae(i.hedge),ae(i.rough),.5),Re(ae(i.rough),1.05)];return{pal:i,greens:t,trunk:Re(ae(i.wood),.62),wood:ae(i.wood),woodDark:Re(ae(i.wood),.72),stone:ae(i.wallStone),soil:Re(ae(i.soilTop),.8),chalk:ae(Ae.chalk),chalkTop:ae(14674423),white:ae(Ae.pinWhite),red:ae(Ae.pinBand),candy:ae(15022389),black:ae(Ae.eightBody),water:ae(i.waterShallow),foam:ae(i.waterFoam),reeds:ae(i.reeds),cattail:ae(7029286),lily:Re(ae(i.rough),1.12),flowers:$M.map(ae)}}function QM(i,t,e,n,s,r,o){const{x:a,z:c,r:l}=n,u=n.kind||"post";if(u==="bumper"){const f=o[r%o.length],h=ae(Ae.poolBalls[(f-1)%8]),g=os([[l+.02,-.3],[l,0],[l,.13],[l,.27],[l,.36],[l*.95+0,.45],[l*.84,.5],[0,.5]],28);i.geo(g,(x,m)=>m>.13&&m<.27?e.white:Re(h,m>.4?1.05:.8+.25*Yn(m/.36)),{matrix:Je(a,s,c)}),t.disc([a,s+.503,c],[0,1,0],jM,Math.min(l*.56,.48),f);return}if(u==="tree"){const f=os([[l+.02,-.3],[l,.28],[l-.04,.33],[l-.15,.33],[l-.18,.2],[0,.2]],32);i.geo(f,(y,C,R)=>Math.hypot(y,R)<l-.17&&C<.25?e.soil:Re(e.stone,C>.3?1:.68+.3*Yn(C/.28)),{matrix:Je(a,s,c)});const h=Math.max(.55,l*.9),g=.75+h*.82,x=Math.min(.32,.08+l*.07),m=new jn(x*.8,x,g,8);m.translate(0,g/2,0),i.geo(m,()=>e.trunk,{matrix:Je(a,s,c)});const p=e.greens[r%3],w=new ri(h,18,12);i.geo(w,(y,C)=>Re(p,.66+.42*Yn((C+h)/(2*h))),{leaf:1,flat:!1,matrix:Je(a,s+g,c,0,[1,.8,1])});const M=new ri(h*.5,14,10);i.geo(M,(y,C)=>Re(p,.85+.3*Yn((C+h*.5)/h)),{leaf:1,flat:!1,matrix:Je(a-h*.08,s+g+h*.72,c-h*.05,0,[1,.85,1])});return}if(u==="lollipop"){const f=[[l+.02,-.3]];for(let m=0;m<=5;m++)f.push([l,m*.1]);f.push([l*.9,.58],[0,.58]),i.geo(os(f,24),(m,p,w)=>p>.52?e.white:((Math.atan2(w,m)/(Math.PI*2)*2+p*1.8)%1+1)%1<.5?e.candy:e.white,{matrix:Je(a,s,c)});const h=new jn(.045,.045,.6,6);h.translate(0,.86,0),i.geo(h,()=>e.white,{matrix:Je(a,s,c)});const g=Math.min(.5,Math.max(.3,l*.75)),x=new ri(g,16,10);i.geo(x,(m,p,w)=>(Math.atan2(w,m)/(Math.PI*2)*3+p/g*.9+2)%1<.5?e.candy:e.white,{matrix:Je(a,s+1.16+g*.8,c,0,[1,.85,1])});return}if(l>=1){const f=os([[l+.02,-.3],[l,.42],[l-.08,.62],[l-.25,.72],[l*.5,.76],[0,.76]],32),h=e.greens[0];i.geo(f,(g,x)=>Re(h,.62+.46*Yn(x/.76)),{leaf:1,flat:!1,matrix:Je(a,s,c)});return}const d=os([[l+.02,-.3],[l,0],[l,.5],[l-Math.min(.07,l*.2),.57],[0,.57]],20);i.geo(d,(f,h)=>h>.515?e.chalkTop:Re(e.chalk,.74+.3*Yn(h/.5)),{matrix:Je(a,s,c)})}function Td(i,t,e,n,s,r,o,a=0){const c=Je(e,n,s,a,r),l=.8,u=new jn(.08,.13,l+.3,6);u.translate(0,l/2-.15,0),i.geo(u,()=>t.trunk,{matrix:c});const d=t.greens[Math.floor(o()*3)],f=[[0,l+.5,0,.62],[.36,l+.3,.12,.42],[-.34,l+.34,-.12,.44],[.06,l+.95,-.04,.4]];for(const[h,g,x,m]of f){const p=new nr(m*(.92+o()*.16),1);p.translate(h,g,x),i.geo(p,(w,M)=>Re(d,.66+.46*Yn((M-l)/1.35)),{leaf:1,matrix:c})}}function yl(i,t,e,n,s,r,o,a=0){const c=Je(e,n,s,a,r),l=t.greens[Math.floor(o()*3)],u=2+Math.floor(o()*2);for(let d=0;d<u;d++){const f=d/u*Math.PI*2+o(),h=.3+o()*.12,g=new nr(h,1);g.scale(1,.85,1),g.translate(Math.cos(f)*.22,h*.75,Math.sin(f)*.22),i.geo(g,(x,m)=>Re(l,.68+.5*Yn(m/.75)),{leaf:1,matrix:c})}}function Ad(i,t,e,n,s,r,o,a=0){const c=Je(e,n,s,a,r),l=5+Math.floor(o()*3),u=Math.floor(o()*t.flowers.length),d=Re(t.greens[1],.85);for(let f=0;f<l;f++){const h=o()*Math.PI*2,g=Math.sqrt(o())*.42,x=.18+o()*.16,m=Math.cos(h)*g,p=Math.sin(h)*g,w=new jn(.015,.018,x,3);w.translate(m,x/2,p),i.geo(w,()=>d,{matrix:c});const M=new Gr(.075+o()*.025);M.scale(1,.6,1),M.translate(m,x+.02,p);const y=t.flowers[(u+(o()<.7?0:1+Math.floor(o()*3)))%t.flowers.length];i.geo(M,()=>y,{matrix:c})}for(let f=0;f<2;f++){const h=new ha(.09,.2,4);h.translate((o()-.5)*.4,.1,(o()-.5)*.4),i.geo(h,()=>t.greens[2],{leaf:.5,matrix:c})}}const ty=(i,t,e,n)=>((Math.atan2(e,t)/(Math.PI*2)+Math.hypot(t,e)/n*1.4)%1+1)%1<.5?i.candy:i.white;function ey(i,t,e,n,s,r){const o=Je(e,n,s,0,r),a=new jn(.05,.05,1.7,6);a.translate(0,.85,0),i.geo(a,()=>t.white,{matrix:o});const c=.58,l=new ri(c,24,12);l.scale(1,1,.3);const u=new Ie().makeRotationX(-Math.PI/6),d=l.applyMatrix4(u),f=new Ie().copy(u).invert(),h=new nt;d.translate(0,1.7+c*.8,0),i.geo(d,(g,x,m)=>(h.set(g,x-1.7-c*.8,m).applyMatrix4(f),Math.abs(h.z)>.1&&Math.hypot(h.x,h.y)<c*.97?ty(t,h.x,h.y,c):t.white),{matrix:o})}function ny(i,t,e,n,s,r,o){const a=Je(n,s,r,0,o),c=new $n(1.7,.6,1.7);c.translate(0,.2,0),i.geo(c,(x,m)=>Re(e.stone,m>.45?1:.72),{matrix:a});const l=new $n(1.9,.14,1.9);l.translate(0,.5,0),i.geo(l,(x,m)=>Re(e.stone,m>.55?1.05:.8),{matrix:a});const u=.95,d=new ri(u,28,18);d.translate(0,.57+u*.96,0),i.geo(d,()=>e.black,{flat:!1,matrix:a});const f=[n,s+(.57+u*.96)*o,r],h=ZM,g=u*o;t.disc([f[0]+h[0]*g,f[1]+h[1]*g,f[2]+h[2]*g],h,[0,.5,-.866],u*.46*o,8,{c:f,r:g+.006})}function iy(i,t,e,n,s,r,o){const a=Je(e,n,s,0,r);if(!o){const d=os([[1.3,-.3],[1.3,.42],[1.22,.5],[1.1,.5],[1.06,.42],[1.04,.3],[0,.3]],32);i.geo(d,(h,g,x)=>Math.hypot(h,x)<1.03&&g<.35?t.water:Re(t.stone,g>.45?1:.7+.25*Yn(g/.42)),{matrix:a});const f=new Wl(1.04,28);f.rotateX(-Math.PI/2),f.translate(0,.37,0),i.geo(f,(h,g,x)=>Math.hypot(h,x)>.86?t.foam:t.water,{matrix:a})}const c=os([[.22,o?-.5:.3],[.16,.5],[.13,.95],[.5,1.05],[.52,1.14],[.12,1.16],[0,1.16]],16);i.geo(c,(d,f)=>Re(t.stone,f>1?1:.78),{matrix:a});const l=new nr(.2,1);l.scale(1,1.5,1),l.translate(0,1.42,0),i.geo(l,(d,f)=>f>1.45?t.white:t.foam,{matrix:a});const u=6;for(let d=0;d<u;d++){const f=d/u*Math.PI*2,h=new nr(.07,0);h.translate(Math.cos(f)*.62,1,Math.sin(f)*.62),i.geo(h,()=>t.foam,{matrix:a})}}function sy(i,t,e,n,s,r,o,a){const c=(r||.7)*o,l=.6,u=18,d=a()*Math.PI*2,f=t.lily,h=Re(t.lily,.78);for(let g=0;g<u;g++){const x=d+l/2+(Math.PI*2-l)*g/u,m=d+l/2+(Math.PI*2-l)*(g+1)/u,p=[e+Math.cos(x)*c,n,s+Math.sin(x)*c],w=[e+Math.cos(m)*c,n,s+Math.sin(m)*c],M=[e+Math.cos(x)*c*.82,n+.01,s+Math.sin(x)*c*.82],y=[e+Math.cos(m)*c*.82,n+.01,s+Math.sin(m)*c*.82];i.tri([e,n+.015,s],M,y,f,0,[0,1,0]),i.quad(M,p,w,y,h,0,[0,1,0])}if(a()<.4){const g=new Gr(.16*o);g.scale(1,.7,1),g.translate(e+Math.cos(d+Math.PI)*c*.3,n+.1,s+Math.sin(d+Math.PI)*c*.3),i.geo(g,()=>t.flowers[2])}}function ry(i,t,e,n,s,r,o){const a=Je(e,n,s,o()*6.28,r),c=7;for(let l=0;l<c;l++){const u=l/c*Math.PI*2+o(),d=.1+o()*.3,f=.8+o()*.5,h=new jn(.012,.035,f,3);if(h.translate(0,f/2-.2,0),h.rotateZ((o()-.5)*.25),h.translate(Math.cos(u)*d,0,Math.sin(u)*d),i.geo(h,(g,x)=>Re(t.reeds,.75+.35*Yn(x/f)),{matrix:a}),l%2===0){const g=new Vl(.05,.18,2,6);g.translate(Math.cos(u)*d,f-.3,Math.sin(u)*d),i.geo(g,()=>t.cattail,{matrix:a})}}}function oy(i,t,e,n,s,r,o,a){const c=Je(e,n,s,o,r),l=new $n(1.6,.42,.55);l.translate(0,.11,0),i.geo(l,(f,h)=>h>.3?t.soil:Re(t.wood,.7+.3*Yn((h+.1)/.4)),{matrix:c});const u=new $n(1.7,.06,.65);u.translate(0,.33,0),i.geo(u,()=>t.wood,{matrix:c});const d=6;for(let f=0;f<d;f++){const h=-.65+1.3*f/(d-1),g=.12+a()*.1,x=new Gr(.09);x.scale(1,.65,1),x.translate(h,.36+g,(a()-.5)*.2),i.geo(x,()=>t.flowers[(f+Math.floor(a()*2))%t.flowers.length],{matrix:c});const m=new ha(.08,g+.05,4);m.translate(h,.36+g/2,0),i.geo(m,()=>t.greens[1],{leaf:.5,matrix:c})}}function ay(i,t,e,n){const s=2*(n.r||3),r=4*(n.scale||1),o=(n.rot||0)*Math.PI/180,a=Math.cos(o),c=-Math.sin(o),l=-c,u=a,d=Math.max(2,Math.round(s/.34)),f=s/d,h=(g,x,m)=>{const p=n.x+a*g+l*x,w=n.z+c*g+u*x;return[p,e(p,w)+m,w]};for(let g=0;g<d;g++){const x=-s/2+g*f+.025,m=x+f-.05,p=Re(t.wood,g%2?.92:1.04),w=r/2+(g%3===0?.06:0),M=h(x,-w,.03),y=h(m,-w,.03),C=h(m,w,.03),R=h(x,w,.03);i.quad(M,y,C,R,p,0,[0,1,0]);const E=h(x,-w,-.1),S=h(m,-w,-.1),_=h(m,w,-.1),v=h(x,w,-.1),A=Re(p,.66);i.quad(M,E,S,y,A,0,[-l,0,-u]),i.quad(C,_,v,R,A,0,[l,0,u]),i.quad(y,S,_,C,A,0,[a,0,c]),i.quad(R,v,E,M,A,0,[-a,0,-c])}for(const g of[-1,1])for(const x of[-1,1]){const[m,p,w]=h(x*(s/2-.15),g*(r/2+.2),0),M=new jn(.1,.12,.7,8);M.translate(0,.1,0),i.geo(M,(y,C)=>Re(t.wood,C>.4?1:.7),{matrix:Je(m,p,w)})}}function cy(i,t,e,n,s,r,o,a){const c=Je(n,s,r,0,o),l=new $n(.14,1.2,.14);l.translate(0,.45,0),i.geo(l,()=>e.woodDark,{matrix:c});const u=new $n(1.2,.75,.1);u.rotateX(-.5),u.translate(0,1.15,.04),i.geo(u,(h,g,x)=>Re(e.wood,x>.05?1.05:.75),{matrix:c});const d=[0,Math.sin(.5),Math.cos(.5)],f=[0,Math.cos(.5),-Math.sin(.5)];t.disc([n,s+1.15*o+d[1]*.056*o,r+.04*o+d[2]*.056*o],d,f,.3*o,a)}function Cd(i,t,e){for(let n=0;n<=3.4;n+=.4)if(i.inside(t,e-n)||i.inside(t+n,e)||i.inside(t-.9,e-n)||i.inside(t+.9,e-n))return!1;return!0}function Rd(i,t,e,n){const s=i.heightAt;if(t.inside(e,n))return s(e,n);const r=t.nearest(e,n),o=Math.min(r.d,ea);return s(r.x,r.z)-.15-.07*(o/ea)}function ly(i,t,e,n,s,r){const o=i.heightAt,a=i.hole&&i.hole.number||1;for(const c of i.props||[]){const l=c.scale||1,u=(c.rot||0)*Math.PI/180,d=i.surfaceAt(c.x,c.z)==="water",f=Rd(i,t,c.x,c.z);switch(c.type){case"tree":t.nearest(c.x,c.z).d<3&&!Cd(t,c.x,c.z)?yl(e,s,c.x,f,c.z,1.2*l,r,u):Td(e,s,c.x,f,c.z,l*(c.r?c.r/.9:1),r,u);break;case"bush":yl(e,s,c.x,f,c.z,l*(c.r?c.r/.55:1),r,u);break;case"flowers":Ad(e,s,c.x,f,c.z,l*(c.r?c.r/.45:1),r,u);break;case"lollipop":ey(e,s,c.x,f,c.z,l);break;case"statue8":ny(e,n,s,c.x,f,c.z,l);break;case"fountain":iy(e,s,c.x,d?f-.3:f,c.z,l,d);break;case"lilypad":sy(e,s,c.x,o(c.x,c.z)+.05,c.z,c.r,l,r);break;case"reeds":ry(e,s,c.x,d?o(c.x,c.z)-.25:f,c.z,l,r);break;case"flowerbox":oy(e,s,c.x,f,c.z,l,u,r);break;case"bridge":ay(e,s,o,c);break;case"sign":cy(e,n,s,c.x,f,c.z,l,a);break}}}const uy={tree:1.3,bush:.9,flowers:.8,lollipop:.9,statue8:1.5,fountain:1.6,sign:.9,flowerbox:1.1,reeds:.7};function fy(i,t){const e=[];for(const n of i.props||[]){const s=uy[n.type];if(!s||t.inside(n.x,n.z))continue;const r=s*(n.scale||1)+.6,o=t.nearest(n.x,n.z);t.walled(o.seg,o.t)&&o.d+r<=t.apronW-.1||e.push({x:n.x,z:n.z,r})}return e}function hy(i,t,e,n,s){if(!t.anyWalled||t.apronW<2)return 0;const r=[];for(const u of i.props||[])r.push([u.x,u.z,1.6]);for(const u of i.posts||[])r.push([u.x,u.z,u.r+1]);const o=(u,d,f)=>{for(const[h,g,x]of r)if(Math.hypot(h-u,g-d)<x+f)return!1;return!0},a=t.poly,c=t.count;let l=0;for(let u=0;u<c;u++){const d=a[u*2],f=a[u*2+1],h=a[(u+1)%c*2],g=a[(u+1)%c*2+1],x=t.segLen[u],m=t.segN[u*2],p=t.segN[u*2+1];for(let w=s()*1.2;w<x;w+=1.25+s()*.9){const M=w/x;if(!t.walled(u,M))continue;const y=1+s()*1.55,C=d+(h-d)*M+m*y,R=f+(g-f)*M+p*y;if(t.inside(C,R))continue;const E=t.nearest(C,R);if(E.d<.95||E.d>t.apronW-.35||!t.walled(E.seg,E.t))continue;const S=s(),_=Rd(i,t,C,R);if(S<.3&&E.d>1.55&&Cd(t,C,R)&&o(C,R,1))Td(e,n,C,_,R,.85+s()*.3,s,s()*6.28),r.push([C,R,1]);else if(S<.66&&o(C,R,.6))yl(e,n,C,_,R,.8+s()*.4,s,s()*6.28),r.push([C,R,.6]);else if(o(C,R,.45))Ad(e,n,C,_,R,.9+s()*.3,s,s()*6.28),r.push([C,R,.45]);else continue;l++}}return l}const xi=8,Ir=4,as=128;let Fn=null;const Ff=i=>"#"+i.toString(16).padStart(6,"0");function Of(i){const t=i.getContext("2d");t.clearRect(0,0,i.width,i.height);for(let e=0;e<xi*Ir;e++){const n=e%xi*as+as/2,s=Math.floor(e/xi)*as+as/2;t.fillStyle=Ff(Ae.flagDisc),t.beginPath(),t.arc(n,s,as*.47,0,Math.PI*2),t.fill();const r=String(e+1);t.fillStyle=Ff(Ae.eightInk),t.font=`${r.length>1?66:82}px "Lilita One", "Arial Black", "Arial Rounded MT Bold", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,n,s+5)}}function Pd(){if(Fn)return Fn;if(typeof document>"u")return Fn=new Bl(new Uint8Array([255,255,255,255]),1,1),Fn.colorSpace=pn,Fn.needsUpdate=!0,Fn;const i=document.createElement("canvas");return i.width=xi*as,i.height=Ir*as,Of(i),Fn=new _d(i),Fn.colorSpace=pn,Fn.anisotropy=4,document.fonts&&document.fonts.load&&document.fonts.load('80px "Lilita One"').then(()=>{Of(i),Fn.needsUpdate=!0}).catch(()=>{}),Fn}const dy=i=>i!==null&&i===Fn;function Ld(i){const t=Math.max(0,Math.min(xi*Ir-1,(i|0)-1)),e=t%xi,n=Math.floor(t/xi);return[e/xi,1-(n+1)/Ir,1/xi,1/Ir]}const ic=new nt,Po=new nt,zs=new nt,Li=new nt;class py{constructor(){this.pos=[],this.nor=[],this.uv=[]}get count(){return this.pos.length/9}disc(t,e,n,s,r,o=null){zs.set(e[0],e[1],e[2]).normalize(),Po.set(n[0],n[1],n[2]),ic.crossVectors(Po,zs).normalize(),Po.crossVectors(zs,ic).normalize();const[a,c,l,u]=Ld(r),d=24,f=[];for(let g=0;g<=d;g++){const x=g/d*Math.PI*2;f.push(Math.cos(x),Math.sin(x))}const h=(g,x)=>{Li.set(t[0],t[1],t[2]).addScaledVector(ic,g*s).addScaledVector(Po,x*s);let m=zs.x,p=zs.y,w=zs.z;if(o){const M=Li.x-o.c[0],y=Li.y-o.c[1],C=Li.z-o.c[2],R=Math.hypot(M,y,C)||1;m=M/R,p=y/R,w=C/R,Li.set(o.c[0]+m*o.r,o.c[1]+p*o.r,o.c[2]+w*o.r)}this.pos.push(Li.x,Li.y,Li.z),this.nor.push(m,p,w),this.uv.push(a+(.5+.47*g)*l,c+(.5+.47*x)*u)};for(let g=0;g<d;g++){const x=f[g*2],m=f[g*2+1],p=f[g*2+2],w=f[g*2+3];h(0,0),h(x*.5,m*.5),h(p*.5,w*.5),h(x*.5,m*.5),h(x,m),h(p,w),h(x*.5,m*.5),h(p,w),h(p*.5,w*.5)}}build(){const t=new je;return t.setAttribute("position",new Pe(this.pos,3)),t.setAttribute("normal",new Pe(this.nor,3)),t.setAttribute("uv",new Pe(this.uv,2)),t.computeBoundingSphere(),t}}const wr=3,Ns=1.7,sc=1.06;function my(i,t,e,n){const s=new jn(.07,.075,wr+.7,8,16);s.translate(0,(wr+.7)/2-.7,0);const r=ae(Ae.pinWhite),o=ae(Ae.pinBand),a=wr/8;i.geo(s,(l,u)=>u>0&&Math.floor(u/a)%2===1?o:r,{flat:!1,matrix:new Ie().makeTranslation(t,e,n)});const c=new ri(.09,10,8);c.translate(t,e+wr+.05,n),i.geo(c,()=>r,{flat:!1})}const gy=`
uniform float uTime;
uniform float uAmp;
float ebgWave(float x) { return sin(x * 3.2 - uTime * 6.5) * 0.5 + sin(x * 5.3 - uTime * 10.0 + 1.3) * 0.2; }
float ebgWaveD(float x) { return cos(x * 3.2 - uTime * 6.5) * 1.6 + cos(x * 5.3 - uTime * 10.0 + 1.3) * 1.06; }
`,xy=`
uniform vec4 uCell;
uniform vec2 uDiscC;
uniform vec2 uDiscS;
uniform vec3 uCloth;
`,vy=`
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
`;function _y(i){const t=new ls;t.name="course-flag";const e=new xs(Ns,sc,14,3);e.translate(Ns/2+.05,wr-sc/2-.06,0);const n=Pd(),s=.78,r={uTime:{value:0},uAmp:{value:1},uCell:{value:new He(...Ld(i))},uDiscC:{value:new ne(.56,.5)},uDiscS:{value:new ne(s/Ns,s/sc)},uCloth:{value:ae(Ae.flagCloth)}},o=new pa({color:16777215,map:n,side:An});o.onBeforeCompile=c=>{Object.assign(c.uniforms,r);let l=c.vertexShader;l=Cn(l,"#include <common>",gy),l=Cn(l,"#include <beginnormal_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ns.toFixed(3)}, 0.0, 1.0);
  float dz = (ebgWaveD(position.x) * kk + ebgWave(position.x) / ${Ns.toFixed(3)}) * 0.18 * uAmp;
  objectNormal = normalize(vec3(-dz, 0.0, 1.0));
}`),l=Cn(l,"#include <begin_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ns.toFixed(3)}, 0.0, 1.0);
  transformed.z += ebgWave(position.x) * 0.18 * uAmp * kk;
  transformed.y -= kk * kk * 0.08;
}`),c.vertexShader=l;let u=c.fragmentShader;u=Cn(u,"#include <common>",xy),u=Cn(u,"#include <map_fragment>",vy,"replace"),c.fragmentShader=u},o.customProgramCacheKey=()=>"ebg-flag-v1";const a=new Ge(e,o);return a.name="course-flag-cloth",t.add(a),{group:t,uniforms:r,cloth:a}}const My=`
varying vec2 vLocal;
void main() {
  vLocal = position.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,yy=`
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
`;function Sy(i,t,e,n,s){const r=[0,.3,.6,.8,n*.86,n,n+.15,n+.35,n+s,n+s+.3,n*1.05+1.55],o=40,a=[],c=[];for(let y=0;y<r.length;y++){const C=y===0?1:o;for(let R=0;R<C;R++){const E=R/o*Math.PI*2,S=Math.cos(E)*r[y],_=Math.sin(E)*r[y];a.push(S,i(t+S,e+_)+.012,_)}}const l=y=>y===0?0:1+(y-1)*o;for(let y=0;y<o;y++)c.push(0,l(1)+(y+1)%o,l(1)+y);for(let y=1;y<r.length-1;y++){const C=l(y),R=l(y+1);for(let E=0;E<o;E++){const S=(E+1)%o;c.push(C+E,C+S,R+S,C+E,R+S,R+E)}}const u=new je;u.setAttribute("position",new Pe(a,3)),u.setIndex(c);const d=u.attributes.position,f=c.slice(0,3),h=d.getX(f[1])-d.getX(f[0]),g=d.getZ(f[1])-d.getZ(f[0]),x=d.getX(f[2])-d.getX(f[0]),m=d.getZ(f[2])-d.getZ(f[0]);if(g*x-h*m<0){for(let y=0;y<c.length;y+=3){const C=c[y+1];c[y+1]=c[y+2],c[y+2]=C}u.setIndex(c)}u.computeBoundingSphere();const p={uR:{value:n},uLip:{value:n+s},uTime:{value:0},uLightDir:{value:new ne(-.7071,-.7071)},uInside:{value:ae(Ae.cupInside)},uLiner:{value:ae(Ae.cupLiner)},uHalo:{value:ae(Ae.blobShadow)}},w=new _n({uniforms:p,vertexShader:My,fragmentShader:yy,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),M=new Ge(u,w);return M.name="course-cup",M.position.set(t,0,e),M.renderOrder=2,{mesh:M,uniforms:p}}const wy=.3,by=.3,Ey=1e3;function Id(i,t){const e=Xl(t.round),n=t.heightAt,s=wM(String(t.id||"hole")),r=new ls;r.name="course";const o=EM(t),a=JM(e),c=new TM,l=new py,u=9+Math.floor(s()*7),d=9+(u-9+2+Math.floor(s()*4))%7,f=[u,d],h=XM(t,o,c,e,Ae.poolBalls[(u-1)%8]);let g=0;t.posts.forEach((N,W)=>{const Z=N.kind||"post";QM(c,l,a,N,n(N.x,N.z),Z==="bumper"?g++:W,f),h.push({x:N.x,z:N.z,r:N.r})});const x=IM(t,o,h),m=UM(t,o,x,e,fy(t,o),i?i.tier:1);r.add(m.mesh);const p=GM(t,m,x,e);p&&r.add(p.mesh),ly(t,o,c,l,a,s);const w=hy(t,o,c,a,s),M=t.cup.x,y=t.cup.z,C=n(M,y);my(c,M,C,y);const R=Sy(n,M,y,Ht.HOLE_R,Ht.LIP_W);r.add(R.mesh);const E=_y(t.hole&&t.hole.number||1);E.group.position.set(M,C,y),r.add(E.group);const S=new Ge(c.build(),Ay());S.name="course-solids",S.castShadow=!0,S.receiveShadow=!0,r.add(S);let _=null;l.count>0&&(_=new Ge(l.build(),new pa({map:Pd()})),_.name="course-labels",_.receiveShadow=!0,r.add(_)),r.userData.stats={decor:w},i&&i.scene&&i.scene.add(r),i&&i.renderer&&i.renderer.shadowMap&&(i.renderer.shadowMap.needsUpdate=!0);let v=0,A=0,U=0,F=!1;const H=m.uniforms;function st(N,W){if(F)return;const Z=W%Ey,it=N/wy;A+=Math.max(-it,Math.min(it,v-A)),H.uTime.value=Z,H.uFlow.value=A*A*(3-2*A),p&&(p.uniforms.uTime.value=Z),R.uniforms.uTime.value=Z,E.uniforms.uTime.value=Z,U>0&&(U=Math.max(0,U-N)),E.uniforms.uAmp.value=1+Math.min(1,U/.08)}function J(N){v=N>1?1:N>0?N:0}function xt(){U=by}function et(N){if(!N||!N.position)return;const W=N.position.x-M,Z=N.position.z-y;if(W*W+Z*Z<1e-8)return;const it=Math.atan2(W,Z);E.group.rotation.y=it;const O=(i.yaw||0)+225*Math.PI/180;R.uniforms.uLightDir.value.set(Math.sin(O),Math.cos(O))}function V(){F||(F=!0,r.removeFromParent(),r.traverse(N=>{if(!N.isMesh)return;N.geometry.dispose();const W=Array.isArray(N.material)?N.material:[N.material];for(const Z of W)Z.map&&!dy(Z.map)&&Z.map.dispose(),Z.dispose()}),x.mask.dispose(),x.aux.dispose())}return i&&i.camera&&et(i.camera),{group:r,update:st,setFlow:J,wiggleFlag:xt,faceCamera:et,dispose:V}}const Ty=`
varying float vLeaf;
varying vec3 vLeafPos;
float lfH(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float lfNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lfH(i), lfH(i + vec2(1.0, 0.0)), f.x), mix(lfH(i + vec2(0.0, 1.0)), lfH(i + vec2(1.0, 1.0)), f.x), f.y);
}
`;function Ay(){const i=new pa({color:16777215,vertexColors:!0});return i.onBeforeCompile=t=>{let e=t.vertexShader;e=Cn(e,"#include <common>",`attribute float aLeaf;
varying float vLeaf;
varying vec3 vLeafPos;`),e=Cn(e,"#include <begin_vertex>",`vLeaf = aLeaf;
vLeafPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.vertexShader=e;let n=t.fragmentShader;n=Cn(n,"#include <common>",Ty),n=Cn(n,"#include <color_fragment>",`{
  vec2 lp = vLeafPos.xz * 4.5 + vec2(vLeafPos.y * 3.1, vLeafPos.y * -2.3);
  float ln = lfNoise(lp) * 0.65 + lfNoise(lp * 2.7) * 0.35;
  diffuseColor.rgb *= 1.0 + vLeaf * (ln - 0.5) * 0.5;
}`),t.fragmentShader=n},i.customProgramCacheKey=()=>"ebg-solids-v1",i}const Ii=Ht.R,Gi=Math.PI*2,Cy=["classic","tennis","beach","planet","donut","snow","gold"],Ry=14,kf=1.4,Lo=.24,Py=.12,Bf=.38,Hf=.34,rc=.7,Ly=.12,oc=.16,Io=.35,pi=i=>i<0?0:i>1?1:i,Ke=(i,t,e)=>{const n=pi((e-i)/(t-i));return n*n*(3-2*n)},Oe=i=>[i>>16&255,i>>8&255,i&255];function $e(i,t,e){i[0]+=(t[0]-i[0])*e,i[1]+=(t[1]-i[1])*e,i[2]+=(t[2]-i[2])*e}function Si(i,t){i[0]=t[0],i[1]=t[1],i[2]=t[2]}function Iy(i,t){i[0]*=t,i[1]*=t,i[2]*=t}const Vr=i=>Math.acos(i<-1?-1:i>1?1:i);function mi(i,t,e,n){let s=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,1274126177)^Math.imul(n+1,2246822519);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function Dd(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=i-s,c=t-r,l=e-o,u=a*a*(3-2*a),d=c*c*(3-2*c),f=l*l*(3-2*l),h=(g,x,m)=>g+(x-g)*m;return h(h(h(mi(s,r,o,n),mi(s+1,r,o,n),u),h(mi(s,r+1,o,n),mi(s+1,r+1,o,n),u),d),h(h(mi(s,r,o+1,n),mi(s+1,r,o+1,n),u),h(mi(s,r+1,o+1,n),mi(s+1,r+1,o+1,n),u),d),f)}function ir(i,t,e,n,s=4){let r=.5,o=1,a=0,c=0;for(let l=0;l<s;l++)a+=r*Dd(i*o,t*o,e*o,n+l*17),c+=r,r*=.5,o*=2.03;return a/c}function zd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Dy(i,t,e,n){const s=.809016994375,r=-.587785252292,o=-s,a=r;i=Math.abs(i);let c=Math.max(s*i+r*t,0)*2;i-=c*s,t-=c*r,c=Math.max(o*i+a*t,0)*2,i-=c*o,t-=c*a,i=Math.abs(i),t-=e;const l=n*-r-0,u=n*s-1,d=Math.min(e,Math.max(0,(i*l+t*u)/(l*l+u*u))),f=i-l*d,h=t-u*d;return Math.sqrt(f*f+h*h)*Math.sign(t*l-i*u)}const zy=Oe(Ae.cueBody),Ny=Oe(Ae.cueDots),Uy=Oe(Ae.eightBody),Fy=Oe(Ae.eightDisc),ii=Ae.poolBalls.map(Oe),Or=Oe(16513779);function Oy(i,t,e,n,s){Si(s,zy);const r=Vr(Math.max(Math.abs(i),Math.abs(t),Math.abs(e)));$e(s,Ny,Ke(.2+n,.2-n,r))}const Gf=.52;function ky(i,t,e,n,s){Si(s,Uy);const r=Vr(Math.abs(e));$e(s,Fy,Ke(Gf+n,Gf-n,r))}const Sl=.72,wl=.28,By=2*Math.sqrt(Sl*wl),Xo=(i,t)=>(t[0]=Sl*Math.cos(i)+wl*Math.cos(3*i),t[1]=By*Math.sin(2*i),t[2]=Sl*Math.sin(i)-wl*Math.sin(3*i),t),Ys=72,ac=(()=>{const i=new Float64Array(Ys*3),t=[0,0,0];for(let e=0;e<Ys;e++)Xo(e/Ys*Gi,t),i[e*3]=t[0],i[e*3+1]=t[1],i[e*3+2]=t[2];return i})(),Nn=[0,0,0];function Hy(i,t,e){let n=-2,s=0;for(let a=0;a<Ys;a++){const c=i*ac[a*3]+t*ac[a*3+1]+e*ac[a*3+2];c>n&&(n=c,s=a)}let r=(s-1)/Ys*Gi,o=(s+1)/Ys*Gi;for(let a=0;a<14;a++){const c=r+(o-r)*.382,l=r+(o-r)*.618;Xo(c,Nn);const u=i*Nn[0]+t*Nn[1]+e*Nn[2];Xo(l,Nn);const d=i*Nn[0]+t*Nn[1]+e*Nn[2];u>d?o=l:r=c}return Xo((r+o)/2,Nn),Vr(i*Nn[0]+t*Nn[1]+e*Nn[2])}const Gy=Oe(13952570),Vy=Oe(16316138),Wy=Oe(11123498);function Xy(i,t,e,n,s){Si(s,Gy),Iy(s,.94+.12*ir(i*9+3,t*9,e*9,11,3));const r=Hy(i,t,e);$e(s,Wy,Ke(.085+n,.085-n,r)*.8),$e(s,Vy,Ke(.05+n,.05-n,r))}const cc=[ii[2],Or,ii[1],ii[0],Or,ii[5]];function qy(i,t,e,n,s){let r=Math.atan2(e,-i);r<0&&(r+=Gi);const o=Gi/6,a=Math.floor(r/o)%6,c=r-a*o,l=Math.sqrt(Math.max(0,1-t*t));Si(s,cc[a]);const u=Math.min(c,o-c)*l,d=c<o/2?cc[(a+5)%6]:cc[(a+1)%6];$e(s,d,Ke(n,-n,u));const f=Vr(Math.abs(t));$e(s,Or,Ke(.36+n,.36-n,f)),$e(s,ii[0],Ke(.12+n,.12-n,f))}const Yy=Oe(2052008),Ky=Oe(4167142),$y=Oe(15326364),jy=Oe(4170573),Zy=Oe(9227102),Jy=Oe(16055039);function Qy(i,t,e,n,s){const r=ir(i*1.9+7.1,t*1.9+3.3,e*1.9+1.7,5,5);Si(s,Yy),$e(s,Ky,Ke(.36,.5,r));const o=.52,a=.012+n*.5;$e(s,$y,Ke(o-a,o+a,r)),$e(s,jy,Ke(o+.012-a,o+.012+a,r)),$e(s,Zy,Ke(.6,.7,r)*.8);const c=Math.abs(t)-(.84+.07*(ir(i*5,t*5,e*5,9,3)-.5));$e(s,Jy,Ke(-n,n,c))}const t2=Oe(14262363),e2=Oe(15778430),lc=Oe(16748480),n2=Oe(15036070),Vf=(()=>{const i=zd(388824),t=[],e=[ii[0],ii[1],Or,ii[5],ii[4],ii[3],Or];for(let n=0;t.length<64&&n<1e3;n++){const s=i()*2-1,r=i()*Gi,o=Math.sqrt(1-s*s),a=[o*Math.cos(r),s,o*Math.sin(r)];if(a[1]<.08)continue;let c=!1;for(const M of t)if(M.c[0]*a[0]+M.c[1]*a[1]+M.c[2]*a[2]>.985){c=!0;break}if(c)continue;let l=-a[2],u=0,d=a[0],f=Math.hypot(l,u,d)||1;l/=f,u/=f,d/=f;const h=a[1]*d-a[2]*u,g=a[2]*l-a[0]*d,x=a[0]*u-a[1]*l,m=i()*Math.PI,p=[l*Math.cos(m)+h*Math.sin(m),u*Math.cos(m)+g*Math.sin(m),d*Math.cos(m)+x*Math.sin(m)],w=[a[1]*p[2]-a[2]*p[1],a[2]*p[0]-a[0]*p[2],a[0]*p[1]-a[1]*p[0]];t.push({c:a,t1:p,t2:w,col:e[t.length%e.length]})}return t})();function i2(i,t,e,n,s){const r=Math.atan2(e,-i),o=-.08+.09*Math.sin(r*7)+.05*Math.sin(r*3+1.3)+.06*(ir(i*4,t*4,e*4,21,3)-.5);Si(s,t2),$e(s,e2,Ke(-.55,-.05,t)*.7);const a=Ke(o-n,o+n,t);if(a<=0)return;const c=[lc[0],lc[1],lc[2]];$e(c,n2,Ke(o+.09,o,t)*.8);for(let l=0;l<Vf.length;l++){const u=Vf[l];if(i*u.c[0]+t*u.c[1]+e*u.c[2]<.97)continue;const f=i*u.t1[0]+t*u.t1[1]+e*u.t1[2],h=i*u.t2[0]+t*u.t2[1]+e*u.t2[2],g=Math.max(0,Math.abs(f)-.07),x=Math.sqrt(g*g+h*h)-.026,m=Ke(n,-n,x);m>0&&$e(c,u.col,m)}$e(s,c,a)}const s2=Oe(16120319),r2=Oe(13229038),o2=Oe(11455462),Wf=(()=>{const i=zd(77),t=[];for(let e=0;e<9;e++){const n=i()*2-1,s=i()*Gi,r=Math.sqrt(1-n*n);t.push([r*Math.cos(s),n,r*Math.sin(s),.12+i()*.1])}return t})();function a2(i,t,e,n,s){Si(s,s2),$e(s,r2,Ke(.45,.75,ir(i*3.2,t*3.2,e*3.2,31,4))*.75);for(let r=0;r<Wf.length;r++){const o=Wf[r],a=Vr(i*o[0]+t*o[1]+e*o[2]),c=o[3]*(.8+.4*Dd(i*12,t*12,e*12,41+r));$e(s,o2,Ke(c+n*2,c-n*2,a)*.85)}mi(Math.floor(i*90),Math.floor(t*90),Math.floor(e*90),5)>.992&&Si(s,[255,255,255])}const c2=Oe(12091423),l2=Oe(15249982),u2=Oe(16769674),f2=Oe(16774340),h2=Oe(8015376);function d2(i,t,e,n,s){Si(s,l2);const r=ir(i*2.5,t*2.5,e*2.5,61,4);$e(s,c2,Ke(.55,.3,r)*.6),$e(s,u2,Ke(.55,.78,r)*.6);const o=Math.abs(e);if(o<.6)return;const a=(e>0?i:-i)/o,c=t/o,l=Dy(a,c+.03,.42,.45);$e(s,h2,Ke(.035+n,.035-n,l)),$e(s,f2,Ke(n,-n,l))}const Xf={classic:{paint:Oy,specular:5592405,shininess:80,rimDark:.25},tennis:{paint:Xy,specular:2236962,shininess:18,rimDark:.3},beach:{paint:qy,specular:6710886,shininess:70,rimDark:.25},planet:{paint:Qy,specular:4868682,shininess:50,rimDark:.15},donut:{paint:i2,specular:3815994,shininess:40,rimDark:.25},snow:{paint:a2,specular:7829367,shininess:60,rimDark:.3},gold:{paint:d2,specular:16765562,shininess:140,rimDark:.12}};function bl(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext&&e.getContext("2d");return n?{c:e,g:n}:null}function qf(i,t){const{c:e,g:n}=i,s=e.width,r=e.height;if(!n.createImageData||!n.putImageData)return;const o=n.createImageData(s,r),a=o.data,c=Math.PI/r*.75,l=[0,0,0];for(let u=0;u<r;u++){const d=(u+.5)/r*Math.PI,f=Math.sin(d),h=Math.cos(d);for(let g=0;g<s;g++){const x=(g+.5)/s*Gi;t(-Math.cos(x)*f,h,Math.sin(x)*f,c,l);const m=(u*s+g)*4;a[m]=l[0],a[m+1]=l[1],a[m+2]=l[2],a[m+3]=255}}n.putImageData(o,0,0)}const ql='"Lilita One", "Arial Black", system-ui, sans-serif';function Yf(i,t,e){const{c:n,g:s}=i,r=n.width,o=n.height,a=Math.ceil(o*.42),c=bl(a,a);if(!c||!s.drawImage)return;const l=c.g;l.fillStyle="#"+Ae.eightInk.toString(16).padStart(6,"0"),l.font=`${Math.round(o*.27)}px ${ql}`,l.textAlign="center",l.textBaseline="middle",l.fillText(t,a/2,a/2+o*.012);const u=e*r,d=o/2;for(let f=0;f<a;f++){const h=d-a/2+f,g=(.5-(h+.5)/o)*Math.PI,x=1/Math.max(.2,Math.cos(g));s.drawImage(c.c,0,f,a,1,u-a*x/2,h,a*x,1)}}function Kf(i,t){const e=new _d(i.c);return e.colorSpace=pn,e.anisotropy=t,e.wrapS=jo,e}function $f(i,{rim:t=0,rimStrength:e=0,rimDark:n=0,specular:s=6710886,shininess:r=90,transparent:o=!1,key:a="ball-rim-v1"}={}){const c=new P_({map:i,shininess:r,specular:s,transparent:o,depthWrite:!0}),l=new le(t),u={value:l.clone().multiplyScalar(e)},d={value:n};return c.onBeforeCompile=f=>{f.uniforms.uRim=u,f.uniforms.uRimDark=d,f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRim;
uniform float uRimDark;`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","float rimF = pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 3.0 );","totalEmissiveRadiance += uRim * rimF;","diffuseColor.rgb *= 1.0 - uRimDark * rimF;"].join(`
`))},c.customProgramCacheKey=()=>a,c.userData.uniforms={uRim:u,uRimDark:d},c.userData.rimBase=l,c}const p2=`
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
}`,m2=`
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
}`;function g2(i){if(!i||typeof document>"u"||!document.createElement)return null;const t=document.createElement("div");t.className="ebg-eight-marker",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",pointerEvents:"none",display:"none",zIndex:"3",willChange:"transform"});const e=document.createElement("div");Object.assign(e.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",display:"none"});const n=document.createElement("div");Object.assign(n.style,{position:"absolute",left:"22px",top:"5px",width:"0px",height:"0px",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:"9px solid #ffffff",filter:"drop-shadow(0 0 1.5px rgba(16,36,26,0.9))"}),e.appendChild(n);const s=document.createElement("div");return Object.assign(s.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",boxSizing:"border-box",borderRadius:"50%",background:"#16161c",border:"2px solid #ffffff",boxShadow:"0 0 0 1.5px rgba(16,36,26,0.85), 0 2px 4px rgba(0,0,0,0.35)",color:"#ffffff",font:`13px/18px ${ql}`,textAlign:"center"}),s.textContent="8",t.appendChild(e),t.appendChild(s),i.appendChild(t),{el:t,arrowWrap:e,shown:!1,x:-1e9,y:-1e9,ang:1e9,arrowOn:!1}}class jf{constructor(){this.shown=!1,this.x=0,this.y=0,this.z=0,this.rx=0,this.rz=0,this.vx=0,this.vz=0,this.vy=0,this.anim="none",this.t=0,this.fx=0,this.fy=0,this.fz=0,this.hk="water",this.alpha=1,this.lastMode="off",this.synced=!1,this.lx=0,this.ly=0,this.lz=0,this.la=0,this.llv=null,this.lyaw=0}}class x2{constructor(){this.valid=!1,this.cx=0,this.cy=0,this.cz=0,this.bx=0,this.by=0,this.bz=0,this.vis=!1,this.anim="",this.w=0,this.h=0}}class v2{constructor(){this.t=0,this.k=-1}}function _2(i,t={}){const{uiRoot:e=null,rig:n=null}=t,s=i.scene,r=i.tier??1,o=4,a=r===0?256:512,c=r===0?512:1024,l=new ri(Ii,48,24),u=bl(c,c/2);let d=null;function f(){u&&(qf(u,ky),Yf(u,"8",.25),Yf(u,"8",.75),d&&(d.needsUpdate=!0))}u&&(f(),d=Kf(u,o));let h=!1;try{const tt=typeof document<"u"?document.fonts:null;if(tt&&tt.load){const gt=tt.check?tt.check(`64px ${ql}`):!1;tt.load('64px "Lilita One"').then(()=>{!h&&!gt&&f()},()=>{})}}catch{}const g=$f(d,{rim:Ae.eightRim,rimStrength:Io,specular:6710886,shininess:90,key:"ball-eight-v1"});d||g.color.setHex(Ae.eightBody);const x=new Ge(l,g);x.name="eight-ball";const m=new Map,p=$f(null,{rimDark:.25,specular:5592405,shininess:80,transparent:!0,key:"ball-cue-v1"}),w=new Ge(l,p);w.name="cue-ball",w.renderOrder=2;for(const tt of[x,w])tt.castShadow=!1,tt.receiveShadow=!1,tt.frustumCulled=!0;s.add(x,w);const M=new xs(1,1);M.rotateX(-Math.PI/2);const y=new Qo(new Float32Array(2),1);y.setUsage(Oi),M.setAttribute("aAlpha",y);const C=new _n({uniforms:{uColor:{value:new le(Ae.blobShadow)},uOpacity:{value:.42}},vertexShader:p2,fragmentShader:m2,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),R=new p_(M,C,2);R.instanceMatrix.setUsage(Oi),R.frustumCulled=!1,R.renderOrder=1,R.name="ball-shadows",s.add(R);const E=g2(e),S=[new jf,new jf],_=[w,x];let v="classic",A=1;const U=new v2;let F=!0;const H=new x2,st=new nt,J=new ms,xt=new nt,et=new nt(0,1,0),V=new Ie,N=new nt,W=new nt,Z={x:0,y:0,onScreen:!1};let it=null;function O(tt){const gt=n?n.goalYaw:NaN,B=n?n.goalPitch:NaN;tt.quaternion.setFromAxisAngle(et,Number.isFinite(gt)?gt:i.yaw||0),J.setFromAxisAngle(st.set(1,0,0),-(Number.isFinite(B)?B:Math.PI/3)),tt.quaternion.multiply(J)}O(x),O(w),w.quaternion.multiply(J.setFromAxisAngle(st.set(0,1,0),.6));function j(tt,gt,B){const Q=Math.sqrt(gt*gt+B*B);Q<1e-7||(st.set(B/Q,0,-gt/Q),tt.quaternion.premultiply(J.setFromAxisAngle(st,Q/Ii)),tt.quaternion.normalize())}function pt(tt){Xf[tt]||(tt="classic"),v=tt;const gt=Xf[tt];let B=m.get(tt);if(!B){const It=bl(a,a/2);It&&(qf(It,gt.paint),B=Kf(It,o),m.set(tt,B))}const Q=!!p.map;p.map=B||null,Q!==!!p.map&&(p.needsUpdate=!0),B?p.color.setHex(16777215):p.color.setHex(Ae.cueBody),p.specular.setHex(gt.specular),p.shininess=gt.shininess,p.userData.uniforms.uRimDark.value=gt.rimDark}pt("classic");function k(tt,gt){tt.anim="drop",tt.t=0,tt.x=gt.x,tt.y=gt.y+kf,tt.z=gt.z,tt.rx=gt.x,tt.rz=gt.z}function rt(tt,gt,B){const Q=S[tt],It=_[tt],jt=tt===1,Bt=jt&&gt.visible&&gt.mode==="holed";let te=!1;if(Bt)Q.anim!=="sink"&&Q.anim!=="inCup"&&(Q.shown&&Q.anim!=="hazard"?(Q.anim="sink",Q.t=0,Q.fx=Q.x,Q.fy=Q.y,Q.fz=Q.z):(Q.anim="inCup",te=!0)),Q.shown=!0;else if(gt.visible)(!Q.shown||Q.anim==="inCup"||Q.anim==="sink"||Q.anim==="hazard")&&(k(Q,gt),te=!0,O(It)),Q.shown=!0;else if(jt&&gt.mode==="sunk"&&Q.shown&&Q.anim!=="hazard"){Q.anim="hazard",Q.t=0,Q.vy=0;const qt=n&&n.level;if(Q.hk=qt&&qt.hazardAt&&qt.hazardAt(Q.x,Q.z)==="oob"?"oob":"water",Q.hk==="oob"){const Ot=Math.sqrt(Q.vx*Q.vx+Q.vz*Q.vz);Ot<1.5&&Ot>1e-4&&(Q.vx*=1.5/Ot,Q.vz*=1.5/Ot)}}else Q.anim!=="hazard"&&(Q.shown=!1,Q.anim="none");Q.lastMode=gt.mode;const $t=Q.x,T=Q.z;if(Q.anim==="hazard"){Q.t+=B;const qt=Q.t/rc;if(Q.hk==="water"){const Ot=Math.exp(-5*B);Q.vx*=Ot,Q.vz*=Ot,Q.x+=Q.vx*B,Q.z+=Q.vz*B,Q.y-=(.4+2.2*qt)*B}else Q.x+=Q.vx*B,Q.z+=Q.vz*B,Q.vy-=18*B,Q.y+=Q.vy*B;Q.t>=rc&&(Q.anim="none",Q.shown=!1)}else if(Q.anim==="sink"){Q.t+=B;const qt=pi(Q.t/Hf),Ot=1-Math.pow(1-pi(qt/.6),3),Jt=.05*(1-qt)*Math.sin(qt*26);Q.x=Q.fx+(gt.x-Q.fx)*Ot+Jt,Q.z=Q.fz+(gt.z-Q.fz)*Ot;const re=pi((qt-.12)/.88);Q.y=Q.fy+(gt.y-Q.fy)*re*re,Q.t>=Hf&&(Q.anim="inCup",Q.x=gt.x,Q.y=gt.y,Q.z=gt.z)}else if(Q.anim==="inCup")Q.x=gt.x,Q.y=gt.y,Q.z=gt.z;else if(Q.anim==="drop"){Q.t+=B,Q.x=gt.x,Q.z=gt.z;let qt;if(Q.t<Lo){const Ot=Q.t/Lo;qt=kf*(1-Ot*Ot)}else qt=Py*Math.sin(Math.PI*pi((Q.t-Lo)/(Bf-Lo)));Q.y=gt.y+qt,Q.t>=Bf&&(Q.anim="none",Q.y=gt.y)}else if(Q.shown){const qt=gt.x-Q.x,Ot=gt.z-Q.z;qt*qt+Ot*Ot>2.5*2.5&&(te=!0),Q.x=gt.x,Q.y=gt.y,Q.z=gt.z}if(Q.shown){const qt=Q.x-$t,Ot=Q.z-T;if(!te&&Q.anim!=="drop"&&Q.anim!=="inCup"&&(qt!==0||Ot!==0)&&j(It,qt,Ot),B>0&&!te&&Q.anim!=="hazard"){const Jt=1-Math.exp(-B/.06),re=qt/B,ge=Ot/B;Number.isFinite(re)&&Number.isFinite(ge)&&(Q.vx+=(re-Q.vx)*Jt,Q.vz+=(ge-Q.vz)*Jt)}te&&(Q.vx=0,Q.vz=0)}const P=tt===0?pi(Number.isFinite(gt.alpha)?gt.alpha:1):1;if(Q.alpha=Q.shown?P:0,It.visible=Q.shown&&P>.01,tt===0&&(p.opacity=P),Q.synced&&Q.x===Q.lx&&Q.y===Q.ly&&Q.z===Q.lz&&Q.alpha===Q.la&&it===Q.llv&&i.yaw===Q.lyaw&&Q.anim==="none")return;Q.synced=!0,Q.lx=Q.x,Q.ly=Q.y,Q.lz=Q.z,Q.la=Q.alpha,Q.llv=it,Q.lyaw=i.yaw,F=!0,It.visible&&It.position.set(Q.x,Q.y,Q.z);const at=it?ss(it,Q.x,Q.z):gt.y-Ii,mt=Q.y-Ii-at;let bt=It.visible?Q.alpha:0,St=2.1*Ii*1.25;mt>.01?(bt/=1+mt*1.6,St*=1+mt*.45):mt<-.01&&(bt*=pi(1+mt/(.9*Ii))),Q.anim==="hazard"&&Q.hk==="water"&&(bt*=pi(1-Q.t/(rc*.5))),y.array[tt]=bt;const Xt=(i.yaw||0)+225*Math.PI/180,kt=.25*Ii*Math.min(1.5,1+Math.max(0,mt)),Dt=Q.x-Math.sin(Xt)*kt,ue=Q.z-Math.cos(Xt)*kt,At=.25,Vt=it?ss(it,Dt+At,ue)-ss(it,Dt-At,ue):0,ie=it?ss(it,Dt,ue+At)-ss(it,Dt,ue-At):0;xt.set(-Vt/(2*At),1,-ie/(2*At)).normalize(),J.setFromUnitVectors(et,xt),N.set(Dt,(it?ss(it,Dt,ue):at)+.03,ue),W.set(St,1,St),V.compose(N,J,W),R.setMatrixAt(tt,V)}function ht(){if(!E)return;const tt=S[1],gt=i.camera.matrixWorld.elements,B=i.size.w,Q=i.size.h;if(H.valid&&gt[12]===H.cx&&gt[13]===H.cy&&gt[14]===H.cz&&tt.x===H.bx&&tt.y===H.by&&tt.z===H.bz&&x.visible===H.vis&&tt.anim===H.anim&&B===H.w&&Q===H.h)return;H.valid=!0,H.cx=gt[12],H.cy=gt[13],H.cz=gt[14],H.bx=tt.x,H.by=tt.y,H.bz=tt.z,H.vis=x.visible,H.anim=tt.anim,H.w=B,H.h=Q;let It=!1,jt=0,Bt=0,te=0,$t=!1;if(n&&tt.shown&&x.visible&&tt.anim!=="inCup"&&tt.anim!=="sink"&&tt.anim!=="hazard"){const T=Math.max(1,i.size.w),P=Math.max(1,i.size.h);n.groundToScreen(tt.x,tt.y,tt.z,Z);const at=2*Ii*n.pxPerMetre(tt.x,tt.z);if(!Z.onScreen||at<Ry){It=!0,jt=Z.x,Bt=Z.y;const mt=24;if(!Z.onScreen||jt<mt||jt>T-mt||Bt<mt||Bt>P-mt){const bt=T/2,St=P/2,Xt=jt-bt,kt=Bt-St,Dt=Math.abs(Xt)>1e-6?(T/2-mt)/Math.abs(Xt):1/0,ue=Math.abs(kt)>1e-6?(P/2-mt)/Math.abs(kt):1/0,At=Math.min(1,Dt,ue);jt=bt+Xt*At,Bt=St+kt*At,te=Math.atan2(kt,Xt),$t=!Z.onScreen}}}It!==E.shown&&(E.el.style.display=It?"block":"none",E.shown=It),It&&((Math.abs(jt-E.x)>.5||Math.abs(Bt-E.y)>.5)&&(E.x=jt,E.y=Bt,E.el.style.transform=`translate3d(${(jt-11).toFixed(1)}px, ${(Bt-11).toFixed(1)}px, 0)`),$t!==E.arrowOn&&(E.arrowWrap.style.display=$t?"block":"none",E.arrowOn=$t),$t&&Math.abs(te-E.ang)>.01&&(E.ang=te,E.arrowWrap.style.transform=`rotate(${te.toFixed(3)}rad)`))}function Mt(tt,gt){if(h||!tt||tt.length<2)return;gt=Number.isFinite(gt)&&gt>0?Math.min(gt,.1):0,it=n&&n.level?n.level:null,rt(0,tt[0],gt),rt(1,tt[1],gt),F&&(y.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,F=!1);let B=Io;U.t>0&&(U.t-=gt,B=U.t-oc>0?1:Io+(1-Io)*pi(U.t/oc)),B!==U.k&&(U.k=B,g.userData.uniforms.uRim.value.copy(g.userData.rimBase).multiplyScalar(B)),ht()}function Rt(){h=!0,s.remove(x,w,R),l.dispose(),M.dispose(),g.dispose(),p.dispose(),C.dispose(),d&&d.dispose(),m.forEach(tt=>tt.dispose()),m.clear(),R.dispose(),E&&E.el.parentNode&&E.el.parentNode.removeChild(E.el)}return{update:Mt,flash(){U.t=Ly+oc},setSkin:pt,setRound(tt){A=tt===2?2:1},dispose:Rt,get skin(){return v},get round(){return A},meshes:{cue:w,eight:x,shadows:R},skins:Cy}}const Un=Ht.R,M2=9.8,Us=0,xr=1,Zf=2,uc=["iPos","iRot","iSize","iCol"],fc=["iRing","iRingN","iRingC","iRingF"],y2=.3,S2=10,vr=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};class Jf{constructor(){this.on=!1,this.x=0,this.y=0,this.z=0}}const w2=`
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
}`,b2=`
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
}`,E2=`
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
}`,T2=`
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
}`;function Qf(i,t){return new _n({vertexShader:i,fragmentShader:t,transparent:!0,depthWrite:!1,depthTest:!0,side:An,blending:Gh,blendEquation:Ni,blendSrc:Dc,blendDst:Nr,blendSrcAlpha:Dc,blendDstAlpha:Nr,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function th(i,t){const e=i.updateRanges;(e.length!==1||e[0]!==t)&&(e.length=0,e.push(t)),i.needsUpdate=!0}function eh(i,t){const e=new xs(1,1),n=new N_;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),n.setAttribute("uv",e.getAttribute("uv"));const s={};for(const[r,o]of t){const a=new Qo(new Float32Array(i*o),o);a.setUsage(Oi),n.setAttribute(r,a),s[r]=a}return n.instanceCount=0,n.boundingSphere=new Xi(new nt,1e6),{geo:n,attrs:s}}function A2(i,t={}){const{events:e=null,play:n=null}=t,s=i.scene,r=i.tier??1,o=r===0?180:360,a=16,c=r===0?.4:1,l=eh(o,[["iPos",4],["iRot",4],["iSize",4],["iCol",4]]),u=Qf(w2,b2),d=new Ge(l.geo,u);d.frustumCulled=!1,d.renderOrder=5,d.name="fx-particles";const f=eh(a,[["iRing",4],["iRingN",4],["iRingC",4],["iRingF",2]]),h=Qf(E2,T2),g=new Ge(f.geo,h);g.frustumCulled=!1,g.renderOrder=3,g.name="fx-rings";const x=uc.map(()=>({start:0,count:0})),m=fc.map(()=>({start:0,count:0}));s.add(g,d);const p=new Float32Array(o),w=new Float32Array(o),M=new Float32Array(o),y=new Float32Array(o),C=new Float32Array(o),R=new Float32Array(o),E=new Float32Array(o),S=new Float32Array(o),_=new Float32Array(o),v=new Float32Array(o),A=new Float32Array(o),U=new Float32Array(o),F=new Float32Array(o),H=new Float32Array(o),st=new Float32Array(o),J=new Float32Array(o),xt=new Float32Array(o),et=new Float32Array(o),V=new Float32Array(o),N=new Float32Array(o),W=new Float32Array(o),Z=new Uint8Array(o),it=new Float32Array(o),O=new Float32Array(o),j=new Uint8Array(o),pt=new Uint8Array(o),k=new Uint8Array(o);let rt=0,ht=0;const Mt=new Float32Array(a),Rt=new Float32Array(a),tt=new Float32Array(a),gt=new Float32Array(a),B=new Float32Array(a),Q=new Float32Array(a),It=new Float32Array(a),jt=new Float32Array(a),Bt=new Float32Array(a),te=new Float32Array(a),$t=new Float32Array(a),T=new Float32Array(a),P=new Float32Array(a),at=new Float32Array(a),mt=new Float32Array(a),bt=new Float32Array(a),St=new Float32Array(a),Xt=new Float32Array(a),kt=new Float32Array(a),Dt=new Uint8Array(a);let ue=0;const At=8,Vt=new Float32Array(At),ie=new Float32Array(At),qt=new Float32Array(At),Ot=new Float32Array(At),Jt=new Uint8Array(At),re=new Uint8Array(At);let ge=2654435769;const ot=()=>(ge^=ge<<13,ge^=ge>>>17,ge^=ge<<5,(ge>>>0)/4294967296),z=(ut,vt)=>ut+(vt-ut)*ot(),$=new le,lt=ut=>($.setHex(ut),[$.r,$.g,$.b]),_t={white:lt(16777215),chalk:lt(Ae.chalk),foam:lt(15268863),water:lt(8378092),gold:lt(16765503),dustDark:lt(5916208),dustTan:lt(10254924),sand:lt(14268530),leaf:lt(3108396),grey:lt(7037271),pool:Ae.poolBalls.map(lt),cream:lt(16774358),streak8:lt(14674175),dustLight:lt(15326400)},b={};for(const ut of[1,2]){const vt=Xl(ut);b[ut]={fairway:lt(vt.fairwayLight),green:lt(vt.greenLight),rough:lt(vt.rough),sand:lt(vt.sand),ice:lt(vt.ice)}}const I=(ut,vt)=>{const yt=G(),Pt=b[yt&&yt.round===2?2:1],Lt=Y(ut,vt);return Lt==="green"?Pt.green:Lt==="rough"?Pt.rough:Lt==="sand"?Pt.sand:Lt==="ice"?Pt.ice:Lt==="water"||Lt==="oob"?null:Pt.fairway},G=()=>n&&n.level||null,q=(ut,vt)=>{const yt=G(),Pt=yt&&yt.heightAt?yt.heightAt(ut,vt):0;return Number.isFinite(Pt)?Pt:0},Y=(ut,vt)=>{const yt=G();return yt&&yt.surfaceAt?yt.surfaceAt(ut,vt):"fairway"};function ft(){let ut=rt;for(let vt=0;vt<o;vt++){const yt=(rt+vt)%o;if(!k[yt]){ut=yt;break}}return rt=(ut+1)%o,k[ut]||ht++,k[ut]=1,ut}function dt(ut,vt,yt,Pt,Lt,Kt,Wt,Nt,_e,se,Me,Et,we,de,me,tn,De){const pe=ft();if(p[pe]=ut,w[pe]=vt,M[pe]=yt,y[pe]=Pt,C[pe]=Lt,R[pe]=Kt,E[pe]=Wt,S[pe]=Wt,_[pe]=Nt,v[pe]=_e,A[pe]=se,xt[pe]=Me[0],et[pe]=Me[1],V[pe]=Me[2],N[pe]=Et,W[pe]=we,Z[pe]=de,it[pe]=me,O[pe]=tn,j[pe]=De,pt[pe]=0,st[pe]=z(0,Math.PI*2),J[pe]=z(-6,6),de===xr){let xe=z(-1,1),rn=z(-1,1),Gn=z(-1,1);const ga=Math.sqrt(xe*xe+rn*rn+Gn*Gn)||1;xe/=ga,rn/=ga,Gn/=ga,U[pe]=xe,F[pe]=rn,H[pe]=Gn,J[pe]=z(5,12)*(ot()<.5?-1:1)}else U[pe]=0,F[pe]=1,H[pe]=0;return pe}function wt(ut,vt,yt,Pt,Lt,Kt,Wt,Nt,_e,se,Me,Et=0,we=.05){const de=ue;ue=(ue+1)%a;const me=.25,tn=q(ut+me,vt)-q(ut-me,vt),De=q(ut,vt+me)-q(ut,vt-me);let pe=-tn/(2*me),xe=1,rn=-De/(2*me);const Gn=Math.sqrt(pe*pe+xe*xe+rn*rn);pe/=Gn,xe/=Gn,rn/=Gn,Mt[de]=ut,Rt[de]=q(ut,vt)+we,tt[de]=vt,gt[de]=pe,B[de]=xe,Q[de]=rn,It[de]=yt,jt[de]=Pt,Bt[de]=Lt,te[de]=Kt,$t[de]=0,T[de]=Wt,P[de]=Et,at[de]=Nt[0],mt[de]=Nt[1],bt[de]=Nt[2],St[de]=_e,Xt[de]=se,kt[de]=Me,Dt[de]=1}function Ut(ut,vt,yt,Pt,Lt,Kt,Wt){for(let Nt=0;Nt<Pt;Nt++){const _e=z(0,Math.PI*2),se=Lt*z(.5,1);dt(ut,vt,yt,Math.cos(_e)*se,z(.6,1.6)*Lt*.5,Math.sin(_e)*se,z(.25,.45),Wt,Wt*.3,1,Kt,1,.85,Us,.4,3,0)}}function Gt(ut,vt,yt,Pt,Lt,Kt,Wt){const Nt=q(ut,vt)+.12;for(let _e=0;_e<yt;_e++){const se=z(0,Math.PI*2),Me=z(.3,1)*Pt;dt(ut+Math.cos(se)*.1,Nt,vt+Math.sin(se)*.1,Math.cos(se)*Me,z(.3,.9),Math.sin(se)*Me,z(.45,.75),Kt,Kt*2.6,1,Lt,Wt,0,Us,-.15,2.6,0)}}function oe(ut,vt,yt,Pt){const Lt=q(ut,vt)+.3;for(let Kt=0;Kt<yt;Kt++){const Wt=z(0,Math.PI*2),Nt=z(.6,3.2)*Pt,_e=z(6.5,11)*Pt,se=_t.pool[(Kt+Math.floor(ot()*7))%_t.pool.length],Me=z(.18,.26);dt(ut+Math.cos(Wt)*.4,Lt,vt+Math.sin(Wt)*.4,Math.cos(Wt)*Nt,_e,Math.sin(Wt)*Nt,z(3.2,4.4),Me,Me,.6,se,1,0,xr,.62,1.15,1)}}function fe(ut,vt,yt,Pt,Lt){for(let Kt=0;Kt<At;Kt++)if(!re[Kt]){re[Kt]=1,Vt[Kt]=ut,Jt[Kt]=vt,ie[Kt]=yt,qt[Kt]=Pt,Ot[Kt]=Lt;return}}function Ft(ut,vt,yt,Pt,Lt,Kt){const Wt=I(ut,vt);if(!Wt)return;const Nt=q(ut,vt)+.08;for(let _e=0;_e<Kt;_e++){const se=z(1.2,3.2)*(.6+.6*Lt),Me=z(-.9,.9);dt(ut+z(-.2,.2),Nt,vt+z(-.2,.2),(yt+-Pt*Me)*se,z(1.6,3.6)*(.7+.5*Lt),(Pt+yt*Me)*se,z(.45,.8),z(.07,.12),.06,.45,Wt,1,0,xr,.55,1.6,2)}Gt(ut,vt,Math.round(2+3*Lt),.5+.8*Lt,Wt===b[1].sand||Wt===b[2].sand?_t.sand:_t.dustLight,.2+.1*Lt,.28+.15*Lt)}function ce(ut){const vt=vr(.5,1,ut&&Number.isFinite(ut.power)?ut.power:0);if(vt<=0||!n||!n.intent)return;const yt=n.intent;let Pt=Number.isFinite(yt.dx)?yt.dx:yt.ax,Lt=Number.isFinite(yt.dz)?yt.dz:yt.az;const Kt=Math.sqrt(Pt*Pt+Lt*Lt);!(Kt>1e-6)||!Number.isFinite(yt.x)||!Number.isFinite(yt.z)||(Pt/=Kt,Lt/=Kt,Ft(yt.x-Pt*Un*.7,yt.z-Lt*Un*.7,-Pt*.6,-Lt*.6,vt,Math.round(3+6*vt)))}function ee(ut){const vt=ut.x+ut.nx*Un,yt=ut.z+ut.nz*Un,Pt=Math.min(1,(ut.speed||0)/14),Lt=q(vt,yt)+Un;wt(vt,yt,.45,1+Pt*.6,.12,.04,.2,_t.white,.9,.6,0);const Kt=5+Math.round(Pt*5);for(let _e=0;_e<Kt;_e++){const se=_e%2?1:-1,Me=z(1.5,3.5)*(.5+Pt),Et=-ut.nz*se,we=ut.nx*se,de=z(-.35,.35);dt(vt,Lt,yt,(Et+ut.nx*de)*Me,z(.8,2.2),(we+ut.nz*de)*Me,z(.22,.4),z(.07,.12),.02,1,_e%3?_t.white:_t.chalk,1,.75,Us,.5,4,0)}Gt(vt,yt,3,.8,_t.dustDark,.16,.32);const Wt=vr(8,15,ut.speed||0);Wt>0&&Ft(vt,yt,ut.nx,ut.nz,Wt,Math.round(4+8*Wt));const Nt=vr(9,15.5,ut.speed||0);Nt>0&&typeof i.kickCamera=="function"&&i.kickCamera(Nt)}function ye(ut){const vt=ut.speed||0;if(vt<.8)return;const yt=Math.min(1,vt/12),Pt=ut.x-ut.nx*Un*.95,Lt=ut.z-ut.nz*Un*.95,Kt=ut.id===0?.6:1,Wt=q(Pt,Lt)+Un*.6;if(ut.kind==="hedge"||ut.kind==="tree"){const Nt=Math.round((2+5*yt)*Kt);for(let _e=0;_e<Nt;_e++){const se=z(.8,2.2)*(.5+yt);dt(Pt,Wt+.2,Lt,(ut.nx+z(-.8,.8))*se,z(1,3),(ut.nz+z(-.8,.8))*se,z(.6,1),z(.1,.16),.1,.6,_t.leaf,1,0,xr,.35,2,2)}}else if(ut.kind==="bumper")Ut(Pt,Wt,Lt,Math.round((3+5*yt)*Kt),2.5+3*yt,_t.gold,.14),wt(Pt,Lt,.3,1+yt,.1,.03,.22,_t.cream,.8,.7,0);else{const Nt=Math.round((2+4*yt)*Kt);Gt(Pt,Lt,Nt,.6+yt,ut.kind==="cushion"?_t.grey:_t.dustDark,.14+.06*yt,.3+.2*yt),ut.kind==="cushion"&&Ut(Pt,Wt,Lt,Math.round(2+3*yt),1.5+2*yt,_t.chalk,.09)}}function Se(ut){const vt=ut.x,yt=ut.z;if(ut.kind==="water"){wt(vt,yt,.35,2.4,.16,.04,.75,_t.foam,.95,.25,.22,0,.08),wt(vt,yt,.2,1.6,.12,.03,.6,_t.foam,.8,.25,0,.16,.08);const Pt=q(vt,yt)+.1,Lt=16;for(let Kt=0;Kt<Lt;Kt++){const Wt=Kt/Lt*Math.PI*2+z(-.2,.2),Nt=z(1,2.6);dt(vt,Pt,yt,Math.cos(Wt)*Nt,z(3.5,6.5),Math.sin(Wt)*Nt,1.4,z(.1,.16),.08,1,Kt%3?_t.foam:_t.water,.95,.3,Us,1,.6,2)}for(let Kt=0;Kt<5;Kt++)dt(vt+z(-.15,.15),Pt,yt+z(-.15,.15),z(-.4,.4),z(6,8.5),z(-.4,.4),1.4,z(.14,.2),.08,1,_t.foam,.95,.3,Us,1,.5,2)}else Gt(vt,yt,10,1.6,_t.grey,.28,.5),Ut(vt,q(vt,yt)+.4,yt,5,2,_t.white,.12)}function Te(ut){const vt=q(ut.x,ut.z)+Un+.2;for(let Pt=0;Pt<6;Pt++){const Lt=Pt/6*Math.PI*2;dt(ut.x,vt,ut.z,Math.cos(Lt)*1.6,z(1.5,2.6),Math.sin(Lt)*1.6,z(.4,.6),.3,.05,1,Pt%2?_t.gold:_t.white,1,.8,Zf,.6,2.5,0)}const yt=G();yt&&yt.cup&&wt(yt.cup.x,yt.cup.z,Ht.HOLE_R,Ht.HOLE_R+.5,.14,.04,.3,_t.gold,.9,.6,0)}function Ce(){const ut=G();if(!ut||!ut.cup)return;const vt=ut.cup.x,yt=ut.cup.z;wt(vt,yt,Ht.HOLE_R,Ht.HOLE_R*3,.22,.04,.6,_t.white,.95,.7,0),wt(vt,yt,Ht.HOLE_R,Ht.HOLE_R*2.2,.14,.03,.5,_t.gold,.9,.7,0,.12);const Pt=q(vt,yt)+.2;for(let Lt=0;Lt<12;Lt++){const Kt=Lt/12*Math.PI*2,Wt=z(1.4,2.6);dt(vt,Pt,yt,Math.cos(Kt)*Wt,z(3,5.5),Math.sin(Kt)*Wt,z(.5,.8),z(.22,.32),.04,1,Lt%3?_t.gold:_t.white,1,.8,Zf,.8,1.8,0)}oe(vt,yt,Math.round(10*c+4),.7)}function ze(ut){if(!ut||ut.picked)return;const vt=ut.level||G();if(!vt||!vt.cup)return;const yt=ut.strokes-ut.par,Pt=ut.strokes===1,Lt=Pt||yt<=-2?150:yt===-1?100:yt===0?60:30,Kt=Math.max(12,Math.round(Lt*c)),Wt=vt.cup.x,Nt=vt.cup.z,_e=Pt||yt<=-2?Math.round(Kt*.4):Kt;oe(Wt,Nt,_e,yt<=-1||Pt?1.15:.9),(Pt||yt<=-2)&&(fe(.35,1,Wt-2,Nt,Math.round(Kt*.3)),fe(.7,1,Wt+2,Nt,Math.round(Kt*.3)))}const Ve=[];e&&e.on&&(Ve.push(e.on("shot:fire",ce)),Ve.push(e.on("ball:contact",ee)),Ve.push(e.on("ball:wall",ye)),Ve.push(e.on("ball:hazard",Se)),Ve.push(e.on("ball:hop",Te)),Ve.push(e.on("ball:holed",Ce)),Ve.push(e.on("hole:done",ze)));let D=0,L=NaN,X=NaN;function ct(){if(!n||n.state!=="rolling"||!n.world){L=NaN;return}const ut=n.world.balls[1];if(!ut||ut.mode!=="roll"){L=NaN;return}if(Number.isFinite(L)&&(D+=Math.sqrt((ut.x-L)*(ut.x-L)+(ut.z-X)*(ut.z-X))),L=ut.x,X=ut.z,D<.3||(D=0,Y(ut.x,ut.z)!=="sand"))return;const vt=Math.sqrt(ut.vx*ut.vx+ut.vz*ut.vz);if(vt<.4)return;const yt=ut.x-ut.vx/vt*Un*.6,Pt=ut.z-ut.vz/vt*Un*.6;Gt(yt,Pt,2,.4+Math.min(1,vt/8),_t.sand,.18,.55)}const K=[new Jf,new Jf];let Ct=0;function zt(ut){if(!n||n.state!=="rolling"||typeof n.balls!="function"||!(ut>0)){K[0].on=!1,K[1].on=!1;return}const vt=n.balls();for(let yt=0;yt<2;yt++){const Pt=vt[yt],Lt=K[yt];if(!Pt||!Pt.visible||Pt.mode!==(yt===0?"cue":"roll")){Lt.on=!1;continue}const Kt=Math.sqrt(Pt.vx*Pt.vx+Pt.vz*Pt.vz),Wt=yt===0?vr(7,14,Kt):vr(5.5,13,Kt);if(!Lt.on){Lt.on=!0,Lt.x=Pt.x,Lt.y=Pt.y,Lt.z=Pt.z;continue}const Nt=Pt.x-Lt.x,_e=Pt.y-Lt.y,se=Pt.z-Lt.z,Me=Math.sqrt(Nt*Nt+se*se);if(Wt<=0||Me>14||Me<1e-4){Lt.x=Pt.x,Lt.y=Pt.y,Lt.z=Pt.z;continue}const Et=Math.min(.2,Math.max(.045,(1.5+3*Wt)/(Me/ut))),we=Math.min(S2,Math.max(1,Math.ceil(Me/y2))),de=yt===0?_t.white:_t.streak8,me=2*Un*(.55+.35*Wt),tn=.14+.26*Wt;Ct+=we;for(let De=1;De<=we;De++){const pe=De/we,xe=ft();p[xe]=Lt.x+Nt*pe,w[xe]=Lt.y+_e*pe,M[xe]=Lt.z+se*pe,y[xe]=0,C[xe]=0,R[xe]=0,E[xe]=Et*(.7+.3*pe),S[xe]=E[xe],_[xe]=me,v[xe]=me*.25,A[xe]=1,xt[xe]=de[0],et[xe]=de[1],V[xe]=de[2],N[xe]=tn,W[xe]=.4,Z[xe]=Us,it[xe]=0,O[xe]=0,j[xe]=0,pt[xe]=0,st[xe]=0,J[xe]=0,U[xe]=0,F[xe]=1,H[xe]=0}Lt.x=Pt.x,Lt.y=Pt.y,Lt.z=Pt.z}}function Zt(ut){ut=Number.isFinite(ut)&&ut>0?Math.min(ut,.1):0,ct(),zt(ut);for(let Et=0;Et<At;Et++)re[Et]&&(Vt[Et]-=ut,Vt[Et]<=0&&(re[Et]=0,Jt[Et]===1&&oe(ie[Et],qt[Et],Ot[Et],1.15)));const vt=l.attrs.iPos.array,yt=l.attrs.iRot.array,Pt=l.attrs.iSize.array,Lt=l.attrs.iCol.array;let Kt=0;if(ht>0)for(let Et=0;Et<o;Et++){if(!k[Et])continue;if(E[Et]-=ut,E[Et]<=0){k[Et]=0,ht--;continue}if(!pt[Et]){const pe=Math.exp(-O[Et]*ut);if(y[Et]*=pe,R[Et]*=pe,C[Et]=C[Et]*pe-M2*it[Et]*ut,p[Et]+=y[Et]*ut,w[Et]+=C[Et]*ut,M[Et]+=R[Et]*ut,st[Et]+=J[Et]*ut,Z[Et]===xr&&it[Et]>0&&(p[Et]+=Math.sin(st[Et]*.7+Et)*.4*ut),j[Et]&&C[Et]<0){const xe=q(p[Et],M[Et])+.03;if(w[Et]<=xe){if(j[Et]===2){k[Et]=0,ht--;continue}w[Et]=xe,pt[Et]=1,U[Et]=1,F[Et]=0,H[Et]=0,st[Et]=Math.PI/2+z(-.15,.15),E[Et]>1.2&&(E[Et]=1.2)}}}const we=1-E[Et]/S[Et],de=Math.min(1,we*12),me=pt[Et]?Math.min(1,E[Et]/1.2):Math.min(1,E[Et]/(S[Et]*.35)),tn=_[Et]+(v[Et]-_[Et])*we,De=Kt*4;vt[De]=p[Et],vt[De+1]=w[Et],vt[De+2]=M[Et],vt[De+3]=Z[Et],yt[De]=U[Et],yt[De+1]=F[Et],yt[De+2]=H[Et],yt[De+3]=st[Et],Pt[De]=tn,Pt[De+1]=tn*A[Et],Pt[De+2]=W[Et],Pt[De+3]=0,Lt[De]=xt[Et],Lt[De+1]=et[Et],Lt[De+2]=V[Et],Lt[De+3]=N[Et]*de*me,Kt++}if(l.geo.instanceCount=Kt,Kt>0)for(let Et=0;Et<uc.length;Et++){const we=l.attrs[uc[Et]],de=x[Et];de.count=Kt*4,th(we,de)}d.visible=Kt>0;const Wt=f.attrs.iRing.array,Nt=f.attrs.iRingN.array,_e=f.attrs.iRingC.array,se=f.attrs.iRingF.array;let Me=0;for(let Et=0;Et<a;Et++){if(!Dt[Et])continue;if(P[Et]>0){P[Et]-=ut;continue}$t[Et]+=ut;const we=$t[Et]/T[Et];if(we>=1){Dt[Et]=0;continue}const de=1-(1-we)*(1-we)*(1-we),me=Me*4;Wt[me]=Mt[Et],Wt[me+1]=Rt[Et],Wt[me+2]=tt[Et],Wt[me+3]=It[Et]+(jt[Et]-It[Et])*de,Nt[me]=gt[Et],Nt[me+1]=B[Et],Nt[me+2]=Q[Et],Nt[me+3]=Bt[Et]+(te[Et]-Bt[Et])*we,_e[me]=at[Et],_e[me+1]=mt[Et],_e[me+2]=bt[Et],_e[me+3]=St[Et]*(1-we*we),se[Me*2]=Xt[Et],se[Me*2+1]=kt[Et]*(1-we),Me++}if(f.geo.instanceCount=Me,Me>0)for(let Et=0;Et<fc.length;Et++){const we=f.attrs[fc[Et]],de=m[Et];de.count=Me*we.itemSize,th(we,de)}g.visible=Me>0}function Yt(){k.fill(0),Dt.fill(0),re.fill(0),ht=0,D=0,L=NaN,K[0].on=!1,K[1].on=!1,l.geo.instanceCount=0,f.geo.instanceCount=0,d.visible=!1,g.visible=!1}function he(){for(const ut of Ve)typeof ut=="function"&&ut();s.remove(d,g),l.geo.dispose(),f.geo.dispose(),u.dispose(),h.dispose()}return{update:Zt,clear:Yt,dispose:he,get count(){return l.geo.instanceCount},get ringCount(){return f.geo.instanceCount},get streaks(){return Ct}}}const qn=Ht.R,El=.04,hc=220,dc=120,C2=.2,nh={halfW:.27,haloW:.08,period:1,speed:2,startGap:qn+.1},ih={halfW:.42,haloW:.09,startGap:qn+.12},R2=.95,P2=1.55,L2=qn+.22,I2=.85,bn={rest:.12,travel:2.4,elev:13*Math.PI/180,hold:.12,fadeFar:.7,fadeNear:.4},sh=Ae.eightArrow;class Be{constructor(t){this.value=t}}const D2=`
attribute float aDist;
attribute float aSide;
varying float vDist;
varying float vSide;
void main() {
  vDist = aDist;
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,z2=`
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
}`,N2=`
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
}`,U2=`
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
const float BALL_R = ${qn.toFixed(3)};

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
}`;function rh(i,t){return new _n({uniforms:{uColor:{value:new le(t.color)},uHalo:{value:new le(Ae.guideHalo)},uHaloAlpha:new Be(t.haloAlpha),uHalfW:new Be(t.halfW),uHaloW:new Be(t.haloW),uLen:new Be(1),uStartGap:new Be(t.startGap),uEndGap:new Be(0),uFadeLen:new Be(0),uPeriod:new Be(t.period||1),uSpeed:new Be(t.speed||0),uTime:i,uOpacity:new Be(1),uArrow:new Be(t.arrow?1:0),uHead:new Be(1),uStub:new Be(1e6)},vertexShader:D2,fragmentShader:z2,transparent:!0,depthWrite:!1,toneMapped:!1,side:An,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function oh(i,t){const e=i*2,n=new je,s=new Float32Array(e*6),r=new Float32Array(e*2),o=new Float32Array(e*2);for(let d=0;d<e;d++)o[d*2]=-1,o[d*2+1]=1;const a=new Uint16Array((e-1)*6);for(let d=0;d<e-1;d++){const f=d*2;a[d*6]=f,a[d*6+1]=f+1,a[d*6+2]=f+2,a[d*6+3]=f+1,a[d*6+4]=f+3,a[d*6+5]=f+2}n.setIndex(new Ye(a,1));const c=new Ye(s,3).setUsage(Oi),l=new Ye(r,1).setUsage(Oi);n.setAttribute("position",c),n.setAttribute("aDist",l),n.setAttribute("aSide",new Ye(o,1)),n.setDrawRange(0,0),n.boundingSphere=new Xi(new nt,1e4);const u=new Ge(n,t);return u.frustumCulled=!1,{mesh:u,geo:n,pos:s,dist:r,posAttr:c,distAttr:l,maxPairs:e,len:0,pairs:0}}function pc(i,t,e,n,s,r,o,a){const c=i.pos,l=t*6,u=e-s,d=n-r,f=e+s,h=n+r;return c[l]=u,c[l+1]=a(u,d)+El,c[l+2]=d,c[l+3]=f,c[l+4]=a(f,h)+El,c[l+5]=h,i.dist[t*2]=o,i.dist[t*2+1]=o,t+1}function ah(i,t,e,n,s){let r=0,o=0;for(let a=0;a<e&&r<i.maxPairs-1;a++){const c=t[a*2],l=t[a*2+1];let u=0,d=0,f=0,h=0;if(a>0){u=c-t[a*2-2],d=l-t[a*2-1];const x=Math.sqrt(u*u+d*d);o+=x,x>0&&(u/=x,d/=x)}if(a<e-1){f=t[a*2+2]-c,h=t[a*2+3]-l;const x=Math.sqrt(f*f+h*h);x>0&&(f/=x,h/=x)}if(a===0&&(u=f,d=h),a===e-1&&(f=u,h=d),u*f+d*h>.6){let x=-(d+h),m=u+f;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const w=-x*d+m*u,M=s/(w>.8?w:.8);r=pc(i,r,c,l,x*M,m*M,o,n)}else r=pc(i,r,c,l,-d*s,u*s,o,n),r=pc(i,r,c,l,-h*s,f*s,o,n)}return i.pairs=r,i.len=o>.001?o:.001,i.posAttr.needsUpdate=!0,i.distAttr.needsUpdate=!0,i.geo.setDrawRange(0,r>1?(r-1)*6:0),i.len}function ch(i,t,e,n){const s=i.length>>1;if(s<1)return 0;let r=0;e[0]=i[0],e[1]=i[1],r=1;let o=0,a=i[0],c=i[1];for(let l=1;l<s;l++){const u=i[l*2],d=i[l*2+1],f=u-a,h=d-c,g=Math.sqrt(f*f+h*h);if(g<1e-6)continue;o+=g;let x=!1;if(l<s-1){const p=i[l*2+2]-u,w=i[l*2+3]-d,M=Math.sqrt(p*p+w*w);M>1e-6&&(x=(f*p+h*w)/(g*M)<.995)}const m=l===s-1;if(m||x||o>=t||r>=n-1){if(r>=n-1&&!m){a=u,c=d;continue}e[r*2]=u,e[r*2+1]=d,r++,o=0}a=u,c=d}return r===1&&s>1&&(e[2]=i[s*2-2],e[3]=i[s*2-1],r=2),r}const Nd=0,F2=1,O2=2,k2=3,B2=[0,3,1,2],H2=[64,8,6,6];function G2(i){const t=[];let e=0,n=0;for(let p=0;p<4;p++){const w=H2[p];t.push({seg:w,v0:e,count:(w+1)*(w+1),half:1,cx:NaN,cz:NaN}),e+=(w+1)*(w+1),n+=w*w*2}const s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Float32Array(e),a=new Float32Array(e),c=new Uint16Array(n*3);let l=0;for(let p=0;p<4;p++){const{seg:w,v0:M,count:y}=t[p];for(let C=0;C<y;C++)o[M+C]=B2[p];for(let C=0;C<w;C++)for(let R=0;R<w;R++){const E=M+C*(w+1)+R,S=E+1,_=E+w+1,v=_+1;c[l++]=E,c[l++]=_,c[l++]=S,c[l++]=S,c[l++]=_,c[l++]=v}}const u=new je,d=new Ye(s,3).setUsage(Oi),f=new Ye(r,2).setUsage(Oi),h=new Ye(a,1).setUsage(Oi);u.setAttribute("position",d),u.setAttribute("aLocal",f),u.setAttribute("aKind",new Ye(o,1)),u.setAttribute("aMask",h),u.setIndex(new Ye(c,1)),u.boundingSphere=new Xi(new nt,1e4);const g={uTime:i,uOpacity:new Be(1),uPlaceR:new Be(4),uDashes:new Be(24),uActive:new Be(0),uRingA:new Be(1),uGhostA:new Be(0),uMarkA:new Be(0),uMarkKind:new Be(0),uHintA:new Be(0),uFwd:{value:new ne(0,-1)},uNormal:{value:new ne(1,0)},uWhite:{value:new le(Ae.guideWhite)},uShade:{value:new le(Ae.guideHalo)},uWarn:{value:new le(Ae.guideWarn)}},x=new _n({uniforms:g,vertexShader:N2,fragmentShader:U2,transparent:!0,depthWrite:!1,toneMapped:!1,side:An,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),m=new Ge(u,x);return m.frustumCulled=!1,m.renderOrder=5,{mesh:m,geo:u,mat:x,uniforms:g,parts:t,pos:s,local:r,mask:a,posAttr:d,localAttr:f,maskAttr:h}}function Do(i,t,e,n,s,r){const o=i.parts[t],{seg:a,v0:c}=o,l=i.pos,u=i.local;for(let d=0;d<=a;d++){const f=d/a*2*s-s;for(let h=0;h<=a;h++){const g=h/a*2*s-s,x=c+d*(a+1)+h,m=e+g,p=n+f;l[x*3]=m,l[x*3+1]=r(m,p)+El,l[x*3+2]=p,u[x*2]=g,u[x*2+1]=f}}o.cx=e,o.cz=n,o.half=s,i.posAttr.needsUpdate=!0,i.localAttr.needsUpdate=!0}function ks(i,t,e,n,s,r,o){const a=e+s*o,c=n+r*o;return!!t(a,c)||Oh(i,e,n,a,c)}function zo(i,t,e,n,s,r,o,a){for(let c=0;c<6;c++){const l=(o+a)*.5;ks(i,t,e,n,s,r,l)?a=l:o=l}return(o+a)*.5}function V2(i,t,e,n,s){const r=i.parts[Nd],{seg:o,v0:a,half:c}=r,l=i.local,u=i.mask,d=2*c/o,f=.5/d;for(let h=a,g=a+r.count;h<g;h++){const x=l[h*2],m=l[h*2+1],p=Math.sqrt(x*x+m*m);if(p>c){u[h]=1;continue}if(p<1e-6){u[h]=0;continue}const w=x/p,M=m/p,y=p>d?p-d:0,C=p+d;let R;ks(t,e,n,s,w,M,p)?ks(t,e,n,s,w,M,y)?ks(t,e,n,s,w,M,C)?R=1:R=.5+(zo(t,e,n,s,w,M,C,p)-p)*f:R=.5+(p-zo(t,e,n,s,w,M,y,p))*f:ks(t,e,n,s,w,M,C)?R=.5-(zo(t,e,n,s,w,M,p,C)-p)*f:y>0&&ks(t,e,n,s,w,M,y)?R=.5-(p-zo(t,e,n,s,w,M,p,y))*f:R=0,u[h]=R<0?0:R>1?1:R}i.maskAttr.needsUpdate=!0}function W2(){const a=[[0,0,4030425],[0,.07,4030425],[.025,.1,4030425],[.07,.104,4030425],[.07,.104,16183516],[.24,.107,16183516],[.24,.107,15320720],[3.4,.15,15320720],[3.4,.155,16183516],[3.48,.155,16183516],[3.48,.156,7027231],[4.7,.18,7027231],[4.7,.182,16763196],[4.8,.183,16763196],[4.8,.184,2302763],[5.9,.19,2302763],[5.9,.192,7027231],[6.35,.196,7027231],[6.35,.196,1447452],[6.43,.17,1447452],[6.43,0,1447452]],c=14,l=a.length*c,u=new Float32Array(l*3),d=new Float32Array(l*3),f=new le;for(let y=0;y<a.length;y++){const[C,R,E]=a[y];f.setHex(E);for(let S=0;S<c;S++){const _=S/c*Math.PI*2,v=(y*c+S)*3;u[v]=C,u[v+1]=Math.cos(_)*R,u[v+2]=Math.sin(_)*R,d[v]=f.r,d[v+1]=f.g,d[v+2]=f.b}}const h=[];for(let y=0;y<a.length-1;y++)for(let C=0;C<c;C++){const R=y*c+C,E=y*c+(C+1)%c,S=R+c,_=E+c;h.push(R,E,S,E,_,S)}const g=new je;g.setAttribute("position",new Ye(u,3)),g.setAttribute("color",new Ye(d,3)),g.setIndex(h),g.computeVertexNormals();const x=g.attributes.normal.array;for(let y=0;y<x.length;y++)x[y]!==x[y]&&(x[y]=0);g.computeBoundingSphere();const m=new R_({vertexColors:!0,roughness:.42,metalness:0,transparent:!0,depthWrite:!0}),p=new Be(0),w=new Be(.001);m.onBeforeCompile=y=>{y.uniforms.uFadeA=p,y.uniforms.uFadeB=w,y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFadeA;
uniform float uFadeB;`).replace("#include <color_fragment>",["#include <color_fragment>","diffuseColor.a *= smoothstep( uFadeA, uFadeB, length( vViewPosition ) );","if ( diffuseColor.a < 0.01 ) discard;"].join(`
`))},m.customProgramCacheKey=()=>"cue-fade-v1";const M=new Ge(g,m);return M.castShadow=!1,M.receiveShadow=!1,M.frustumCulled=!1,M.renderOrder=20,M.userData.fadeA=p,M.userData.fadeB=w,M}function X2(i){const t=new Be(0),e=new ls;e.name="guides";const n=G2(t),s=rh(t,{color:Ae.guideWhite,haloAlpha:.6,...nh}),r=rh(t,{color:sh,haloAlpha:.7,arrow:!0,...ih}),o=oh(hc,s),a=oh(dc,r);o.mesh.renderOrder=10,a.mesh.renderOrder=11;const c=W2();e.add(n.mesh,o.mesh,a.mesh,c),i&&i.scene&&i.scene.add(e);const l=new Float64Array(Math.max(hc,dc)*2),u=new le(Ae.guideWhite),d=new le(Ae.guideWarn),f=new le(sh),h=new nt(1,0,0),g=new nt,x=n.uniforms,m={visible:!0,fade:0,t:0,lastState:"idle",level:null,intent:null,guide:null,ringX:NaN,ringZ:NaN,hintA:0,gap:1.4,hold:0,aimX:1,aimZ:0,spin:0,top:0,ballX:0,ballZ:0,aimKey:0,poseKey:-1,poseGap:NaN};function p(){n.mesh.visible=!1,o.mesh.visible=!1,a.mesh.visible=!1}p(),c.visible=!1;function w(S,_){const A=S.level.heightAt,U=_&&_.cue;if(!U||U.points.length<4)o.geo.setDrawRange(0,0),x.uGhostA.value=0;else{const et=ch(U.points,C2,l,hc),V=ah(o,l,et,A,nh.halfW),N=s.uniforms;N.uLen.value=V,N.uColor.value.copy(_.warn?d:u),N.uEndGap.value=U.hit?qn*.9:0,N.uFadeLen.value=U.hit?0:Math.min(3,V*.4),U.hit?(x.uGhostA.value=1,Do(n,O2,U.ghost.x,U.ghost.z,L2,A),x.uNormal.value.set(U.normal.x,U.normal.z)):x.uGhostA.value=0}const F=_&&_.eight;if(!F||F.points.length<4){a.geo.setDrawRange(0,0),x.uMarkA.value=0;return}const H=ch(F.points,.25,l,dc),st=ah(a,l,H,A,ih.halfW),J=r.uniforms;J.uLen.value=st;let xt=1e6;if(F.bounce){let et=0;for(let V=1;V<H;V++){const N=l[V*2]-l[V*2-2],W=l[V*2+1]-l[V*2-1];if(et+=Math.sqrt(N*N+W*W),Math.abs(l[V*2]-F.bounce.x)<1e-6&&Math.abs(l[V*2+1]-F.bounce.z)<1e-6){xt=et;break}}}if(J.uStub.value=xt,F.hazard){J.uColor.value.copy(d),J.uHead.value=0,J.uEndGap.value=.62,x.uMarkA.value=1,x.uMarkKind.value=F.hazard==="water"?0:1;const et=(H-1)*2;Do(n,k2,l[et],l[et+1],R2,A)}else J.uColor.value.copy(f),J.uHead.value=1,J.uEndGap.value=0,x.uMarkA.value=0}function M(S,_,v){if(v)m.gap=-.02;else if(ve.strike>=0){const N=bn.rest+ve.pull*bn.travel,W=ve.strike;m.gap=N+(-.02-N)*W*W}else if(ve.pulling)m.gap=bn.rest+ve.pull*bn.travel;else if(m.gap!==bn.rest){const N=_*12>1?1:_*12;m.gap+=(bn.rest-m.gap)*N,Math.abs(m.gap-bn.rest)<.001&&(m.gap=bn.rest)}if(m.gap===m.poseGap&&m.poseKey===m.aimKey)return;m.poseGap=m.gap,m.poseKey=m.aimKey;const A=m.spin*qn*.55,U=m.top*qn*.55,F=Math.sqrt(Math.max(qn*qn-A*A-U*U,0))+m.gap,H=m.aimX,st=m.aimZ,J=m.ballX-H*F-st*A,xt=m.ballZ-st*F+H*A,et=S.level.heightAt(m.ballX,m.ballZ)+qn+U,V=Math.cos(bn.elev);g.set(-H*V,Math.sin(bn.elev),-st*V),c.quaternion.setFromUnitVectors(h,g),c.position.set(J,et,xt)}function y(S){const _=i&&i.camera;if(!_||!S||!S.level)return;const v=_.position,A=v.x-m.ballX,U=v.y-(S.level.heightAt(m.ballX,m.ballZ)+qn),F=v.z-m.ballZ,H=Math.sqrt(A*A+U*U+F*F),st=H*bn.fadeNear,J=H*bn.fadeFar+.001,xt=c.userData.fadeA,et=c.userData.fadeB;xt.value!==st&&(xt.value=st),et.value!==J&&(et.value=J)}function C(S){const _=Math.sqrt(S.dx*S.dx+S.dz*S.dz)||1;m.aimX=S.dx/_,m.aimZ=S.dz/_,m.spin=S.spin,m.top=Number.isFinite(S.top)?S.top:0,m.ballX=S.x,m.ballZ=S.z,m.aimKey++}function R(S,_){m.t+=_,t.value=m.t;const v=S?S.state:"idle",A=!!(S&&S.world&&S.level&&v==="ready");m.lastState==="ready"&&v==="rolling"&&(m.hold=bn.hold),v!==m.lastState&&v==="ready"&&(m.gap=1.4,m.intent=null),m.lastState=v;const U=m.visible&&A&&ve.enabled;if(U?m.fade=m.fade+_/.18>1?1:m.fade+_/.18:m.fade=0,U?c.visible=!0:m.hold>0&&m.visible&&S&&S.level?(m.hold-=_,c.visible=m.hold>0):(m.hold=0,c.visible=!1),!U){p(),c.visible&&(M(S,_,!0),y(S));return}const F=S.level;F!==m.level&&(m.level=F,m.aimKey++,m.ringX=NaN,m.intent=null,m.guide=null,x.uPlaceR.value=F.placeR,x.uDashes.value=Math.max(12,Math.round(2*Math.PI*F.placeR/1.25)));const H=S.world.balls[1];(H.x!==m.ringX||H.z!==m.ringZ)&&(m.ringX=H.x,m.ringZ=H.z,Do(n,Nd,H.x,H.z,F.placeR+I2,F.heightAt),V2(n,S.world,F.hazardAt,H.x,H.z));const st=S.intent;if(st!==m.intent){m.intent=st,C(st),Do(n,F2,st.x,st.z,P2,F.heightAt);const et=S.guide();et!==m.guide&&(m.guide=et,w(S,et))}const J=m.fade;x.uOpacity.value!==J&&(x.uOpacity.value=J,s.uniforms.uOpacity.value=J,r.uniforms.uOpacity.value=J),x.uActive.value=ve.placing?1:0;const xt=ve.placing?0:ve.hint;if(m.hintA!==xt){const et=_*4>1?1:_*4;m.hintA+=(xt-m.hintA)*et,Math.abs(m.hintA-xt)<.002&&(m.hintA=xt),x.uHintA.value=m.hintA}if(i&&i.camera){const et=i.camera.matrixWorld.elements,V=Math.sqrt(et[8]*et[8]+et[10]*et[10]);if(V>1e-4){const N=-et[8]/V,W=-et[10]/V,Z=x.uFwd.value;(N!==Z.x||W!==Z.y)&&Z.set(N,W)}}n.mesh.visible=!0,o.mesh.visible=o.geo.drawRange.count>0,a.mesh.visible=a.geo.drawRange.count>0,M(S,_,!1),y(S)}const E={update:R,setVisible(S){m.visible=!!S},dispose(){e.parent&&e.parent.remove(e),n.geo.dispose(),n.mat.dispose(),o.geo.dispose(),a.geo.dispose(),s.dispose(),r.dispose(),c.geometry.dispose(),c.material.dispose()}};return Object.defineProperty(E,"_debug",{value:{group:e,decals:n,cuePath:o,arrow:a,stick:c,cueMat:s,arrowMat:r,st:m},enumerable:!1}),E}const lh="ebg-shot-style",q2=6,Ud=30,uh=14,br=100,Er=100,Tr=122,na=92,Ar=22,Fd=na/2-Ar/2-4,_r=na/2-Fd,Y2=20,K2=10,$2=6,j2=10,fh=8,Z2=`
.ebg-shot{position:absolute;inset:0;z-index:20;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .16s ease,visibility 0s linear .16s;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;font-family:"Fredoka",system-ui,sans-serif;font-weight:600;color:#fff;--top:${Ud}px;--travel:150px}
.ebg-shot.on{opacity:1;visibility:visible;transition:opacity .2s ease}
.ebg-txt{-webkit-text-stroke:4px #13261b;paint-order:stroke fill;text-shadow:0 2px 0 rgba(0,0,0,.25)}
@supports not (paint-order:stroke){.ebg-txt{-webkit-text-stroke:0;text-shadow:0 0 2px #13261b,0 0 2px #13261b,0 2px 0 #13261b}}
.ebg-num{font-family:"Lilita One",system-ui,sans-serif;font-weight:400;letter-spacing:.02em}
.ebg-pow{position:absolute;left:0;top:0;width:${br}px;height:200px;pointer-events:none}
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
.ebg-spin{position:absolute;left:0;top:0;box-sizing:border-box;width:${Er}px;height:${Tr}px;display:none;flex-direction:column;align-items:center;justify-content:flex-end;padding:4px;pointer-events:auto;touch-action:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:move}
.ebg-spin.on{display:flex}
.ebg-spin.drag{cursor:grabbing}
.ebg-spin-label{font-size:14px;line-height:1;letter-spacing:.08em;margin-bottom:6px}
.ebg-spin-face{position:relative;flex:none;width:${na}px;height:${na}px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffffff 0,#fffdf4 38%,#e6dfca 100%);box-shadow:0 0 0 3px #13261b,0 4px 8px rgba(0,0,0,.3)}
.ebg-spin-ring{position:absolute;inset:${_r}px;border-radius:50%;border:2px dashed rgba(19,38,27,.2)}
.ebg-spin-h,.ebg-spin-v{position:absolute;border-radius:1px;background:rgba(19,38,27,.2)}
.ebg-spin-h{left:${_r}px;right:${_r}px;top:50%;height:2px;margin-top:-1px}
.ebg-spin-v{top:${_r}px;bottom:${_r}px;left:50%;width:2px;margin-left:-1px}
.ebg-spin-mid{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:rgba(19,38,27,.35)}
.ebg-spin-dot{position:absolute;left:50%;top:50%;width:${Ar}px;height:${Ar}px;margin:-${Ar/2}px 0 0 -${Ar/2}px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#6ea3ec 0,#3d7fd9 60%,#2f69b8 100%);box-shadow:0 0 0 3px #fff,0 0 0 5px #13261b;transition:transform .14s ease-out}
.ebg-spin.drag .ebg-spin-dot{transition:none}
.ebg-ff{position:absolute;z-index:20;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom) + 12px));transform:translateX(-50%);padding:6px 16px;border-radius:999px;background:rgba(16,36,26,.5);font-family:"Fredoka",system-ui,sans-serif;font-weight:600;font-size:16px;line-height:1.2;color:#fff;opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s linear .25s,background .15s;pointer-events:none;white-space:nowrap;-webkit-user-select:none;user-select:none}
.ebg-ff.show,.ebg-ff.on{opacity:1;visibility:visible;transition:opacity .25s,background .15s}
.ebg-ff.on{background:rgba(255,138,42,.9)}
.ebg-safe{position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}
`,J2='<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7" stroke="#13261b" stroke-width="8"/><path d="M5 8l7 7 7-7" stroke="#fff" stroke-width="4"/></g></svg>';function We(i,t,e,n){const s=document.createElement(i);return t&&(s.className=t),n&&(s.textContent=n),e&&e.appendChild(s),s}function Q2(i,t,e={top:0,right:0,bottom:0,left:0},n=!1){const s=t>i,r=s?Math.max(90,Math.min(170,Math.round(t*.22))):Math.max(110,Math.min(210,Math.round(t*.3))),o=Ud+r+uh,a=Math.max($2,e.bottom),c=Math.max(K2,e.right+6);let l,u=null;const d={top:0,right:0,bottom:0,left:0};if(s){l={left:Math.round(i/2-br/2),top:t-a-o,width:br,height:o},n&&(u={left:i-c-Er,top:t-a-uh-Tr,width:Er,height:Tr});const f=Math.min(l.top,u?u.top:1/0);d.bottom=t-f+fh}else{l={left:i-c-br,top:t-a-o,width:br,height:o},n&&(u={left:i-c-Er,top:l.top-j2-Tr,width:Er,height:Tr});const f=Math.min(l.left,u?u.left:1/0);d.right=i-f+fh}return{portrait:s,travel:r,pow:l,spin:u,insets:d}}function tS(i,t={}){if(typeof document>"u"||!i){const T=()=>{},P={top:0,right:0,bottom:0,left:0};return{setVisible:T,setSpinEnabled:T,setSpin:T,setPull:T,setPreset:T,setPullHint:T,setFastForward:T,cancelPull:T,travel:()=>150,insets:()=>P,layout:T,parts:{},dispose:T}}if(!document.getElementById||!document.getElementById(lh)){const T=We("style");T.id=lh,T.textContent=Z2,(document.head||document.body).appendChild(T)}const e=We("div","ebg-shot",i),n=We("div","ebg-safe",e),s=We("div","ebg-pow",e),r=We("div","ebg-clip",s),o=We("div","ebg-track",r),a=We("div","ebg-fill",o);for(const T of[.25,.5,.75]){const P=We("div","ebg-tick",o);P.style.top=T*100+"%"}const c=We("div","ebg-last",o),l=We("div","ebg-cue",r),u=We("div","ebg-pct ebg-txt ebg-num",s,"0%"),d=We("div","ebg-hint ebg-txt",s);We("span","",d,"Pull");const f=We("span","",d);f.innerHTML=J2;const h=We("div","ebg-grab",s);h.setAttribute("aria-label","Pull the cue down to shoot");const g=We("div","ebg-spin",e);g.setAttribute("aria-label","Spin: drag the dot sideways to curve, up or down to choose where the curve happens"),We("span","ebg-spin-label ebg-txt",g,"SPIN");const x=We("div","ebg-spin-face",g);We("div","ebg-spin-ring",x),We("div","ebg-spin-h",x),We("div","ebg-spin-v",x),We("div","ebg-spin-mid",x);const m=We("div","ebg-spin-dot",x),p=We("div","ebg-ff ebg-txt",i,"Hold to speed up");for(const T of[h,g])T.style.touchAction="none",T.style.webkitTouchCallout="none";let w=null,M=!1,y={top:0,right:0,bottom:0,left:0};const C=Fd;function R(){const T={top:0,right:0,bottom:0,left:0};try{if(typeof getComputedStyle=="function"){const P=getComputedStyle(n);T.top=parseFloat(P.paddingTop)||0,T.right=parseFloat(P.paddingRight)||0,T.bottom=parseFloat(P.paddingBottom)||0,T.left=parseFloat(P.paddingLeft)||0}}catch{}return T}const E=T=>Math.round(T)+"px";function S(){const T=typeof window<"u"&&window.innerWidth?window.innerWidth:800,P=typeof window<"u"&&window.innerHeight?window.innerHeight:450;w=Q2(T,P,R(),M),e.style.setProperty("--travel",w.travel+"px"),s.style.left=E(w.pow.left),s.style.top=E(w.pow.top),s.style.width=E(w.pow.width),s.style.height=E(w.pow.height),w.spin&&(g.style.left=E(w.spin.left),g.style.top=E(w.spin.top));const at=w.insets,mt=y;(at.top!==mt.top||at.right!==mt.right||at.bottom!==mt.bottom||at.left!==mt.left)&&(y=at,t.onInsets&&t.onInsets({...at}))}typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",S),window.addEventListener("orientationchange",S));let _=!1,v="idle",A=0,U=0,F=0,H=0,st=!1;function J(T,P){A=T<0?0:T>1?1:T,P!==v&&(v=P,s.className="ebg-pow"+(P==="pull"?" pull":P==="strike"?" strike":""),u.className="ebg-pct ebg-txt ebg-num"+(P==="pull"?" show":P==="cancel"?" show fade":""));const at=P==="strike"?0:A*w.travel;l.style.transform="translateY("+at.toFixed(1)+"px)",u.style.transform="translateY("+at.toFixed(1)+"px)",a.style.setProperty("--p",P==="strike"?"0":A.toFixed(4)),u.textContent=(P==="cancel"?0:Math.round(A*100))+"%",P==="pull"&&st&&xt(!1)}function xt(T){T=!!T,T!==st&&(st=T,d.className="ebg-hint ebg-txt"+(T?" show":""))}function et(T,P){let at=Number.isFinite(T)?T:0,mt=P===void 0?F:Number.isFinite(P)?P:0;const bt=Math.sqrt(at*at+mt*mt);bt>1&&(at/=bt,mt/=bt),U=at,F=mt,m.style.transform="translate("+(at*C).toFixed(1)+"px,"+(-mt*C).toFixed(1)+"px)"}const V=new Set;function N(T){return!t.ballDown||!t.ballDown(T)?!1:(V.add(T.pointerId),!0)}function W(T,P){if(!V.has(T.pointerId))return!1;P!=="move"&&V.delete(T.pointerId);const at=P==="move"?t.ballMove:P==="up"?t.ballUp:t.ballCancel;return at&&at(T),!0}let Z=null;function it(T){if(!(T.pointerType==="mouse"&&T.button!==0)&&(T.preventDefault&&T.preventDefault(),!(Z||V.has(T.pointerId))&&!N(T)&&!(!t.onPullStart||!t.onPullStart(T.pointerId,T.pointerType)))){Z={id:T.pointerId,y0:T.clientY,t:0};try{h.setPointerCapture(T.pointerId)}catch{}}}function O(T){if(W(T,"move")||!Z||T.pointerId!==Z.id)return;const P=T.clientY-Z.y0-q2,at=P<=0?0:P>=w.travel?1:P/w.travel;Z.t=at,t.onPull&&t.onPull(at)}function j(T,P){if(!Z||T.pointerId!==Z.id)return;P||O(T);const at=Z.t;Z=null;try{h.releasePointerCapture(T.pointerId)}catch{}t.onPullEnd&&t.onPullEnd(at,P)}const pt=T=>{W(T,"up")||j(T,!1)},k=T=>{W(T,"cancel")||j(T,!0)},rt=T=>{Z&&T.pointerId===Z.id&&T.target!==h&&O(T)},ht=T=>{Z&&T.pointerId===Z.id&&T.target!==h&&j(T,!1)},Mt=T=>{Z&&T.pointerId===Z.id&&T.target!==h&&j(T,!0)},Rt=T=>{T.cancelable&&T.preventDefault&&T.preventDefault()};h.addEventListener("pointerdown",it),h.addEventListener("pointermove",O),h.addEventListener("pointerup",pt),h.addEventListener("pointercancel",k),typeof window<"u"&&window.addEventListener&&(window.addEventListener("pointermove",rt),window.addEventListener("pointerup",ht),window.addEventListener("pointercancel",Mt)),h.addEventListener("touchstart",Rt,{passive:!1}),h.addEventListener("touchmove",Rt,{passive:!1}),h.addEventListener("contextmenu",Rt);let tt=null,gt={t:-1e9,x:0,y:0};const B={x:0,y:0};function Q(T,P){const at=x.getBoundingClientRect();let mt=(T+tt.offX-(at.left+at.width/2))/C,bt=-(P+tt.offY-(at.top+at.height/2))/C;const St=Math.sqrt(mt*mt+bt*bt);return St>1&&(mt/=St,bt/=St),B.x=mt,B.y=bt,B}function It(T){if(T.pointerType==="mouse"&&T.button!==0||(T.preventDefault&&T.preventDefault(),tt||V.has(T.pointerId))||N(T))return;const P=T.timeStamp||0;if(P-gt.t<320&&Math.abs(T.clientX-gt.x)<24&&Math.abs(T.clientY-gt.y)<24){gt.t=-1e9,t.onSpin&&t.onSpin(0,0,"reset");return}const mt=x.getBoundingClientRect(),bt=mt.left+mt.width/2+U*C,St=mt.top+mt.height/2-F*C,Xt=Math.hypot(T.clientX-bt,T.clientY-St)<=Y2;tt={id:T.pointerId,offX:Xt?bt-T.clientX:0,offY:Xt?St-T.clientY:0,sx:T.clientX,sy:T.clientY,ts:P},g.className="ebg-spin on drag";try{g.setPointerCapture(T.pointerId)}catch{}const kt=Q(T.clientX,T.clientY);t.onSpin&&t.onSpin(kt.x,kt.y,"start")}function jt(T){if(W(T,"move")||!tt||T.pointerId!==tt.id)return;const P=Q(T.clientX,T.clientY);t.onSpin&&t.onSpin(P.x,P.y,"move")}function Bt(T){if(W(T,"up")||!tt||T.pointerId!==tt.id)return;const P=Q(T.clientX,T.clientY);gt=Math.abs(T.clientX-tt.sx)<6&&Math.abs(T.clientY-tt.sy)<6?{t:tt.ts,x:tt.sx,y:tt.sy}:{t:-1e9,x:0,y:0},tt=null,g.className="ebg-spin on";try{g.releasePointerCapture(T.pointerId)}catch{}t.onSpin&&t.onSpin(P.x,P.y,"end")}function te(T){W(T,"cancel")||!tt||T.pointerId!==tt.id||(tt=null,g.className="ebg-spin on",t.onSpin&&t.onSpin(U,F,"end"))}g.addEventListener("pointerdown",It),g.addEventListener("pointermove",jt),g.addEventListener("pointerup",Bt),g.addEventListener("pointercancel",te),g.addEventListener("touchstart",Rt,{passive:!1}),g.addEventListener("touchmove",Rt,{passive:!1}),g.addEventListener("contextmenu",Rt);const $t={setVisible(T){T=!!T,T!==_&&(_=T,e.className="ebg-shot"+(T?" on":""))},setSpinEnabled(T){T=!!T,T!==M&&(M=T,g.className="ebg-spin"+(T?" on":""),S())},setSpin:et,setPull:J,setPreset(T){const P=T<0?0:T>1?1:T;c.style.top=(P*100).toFixed(2)+"%"},setPullHint:xt,setFastForward(T){T!==H&&(H=T,p.className="ebg-ff ebg-txt"+(T===1?" show":T===2?" on":""),p.textContent=T===2?"▶▶ 3×":"Hold to speed up")},cancelPull(){if(Z){try{h.releasePointerCapture(Z.id)}catch{}Z=null}tt&&(tt=null,g.className="ebg-spin"+(M?" on":"")),V.clear()},travel:()=>w.travel,insets:()=>({...y}),layout:S,parts:{root:e,pow:s,grab:h,spin:g,face:x,dot:m,pct:u,hint:d,ff:p,cue:l,fill:a,last:c},dispose(){typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",S),window.removeEventListener("orientationchange",S)),h.removeEventListener("pointerdown",it),h.removeEventListener("pointermove",O),h.removeEventListener("pointerup",pt),h.removeEventListener("pointercancel",k),window.removeEventListener("pointermove",rt),window.removeEventListener("pointerup",ht),window.removeEventListener("pointercancel",Mt),h.removeEventListener("touchstart",Rt),h.removeEventListener("touchmove",Rt),h.removeEventListener("contextmenu",Rt),g.removeEventListener("pointerdown",It),g.removeEventListener("pointermove",jt),g.removeEventListener("pointerup",Bt),g.removeEventListener("pointercancel",te),g.removeEventListener("touchstart",Rt),g.removeEventListener("touchmove",Rt),g.removeEventListener("contextmenu",Rt),e.parentNode&&e.parentNode.removeChild(e),p.parentNode&&p.parentNode.removeChild(p)}};return S(),J(0,"idle"),et(0,0),$t.setPreset(.5),$t}const mc={mouse:4,pen:6,touch:10},hh=.06,eS=.1,gc=.08,nS=.25,dh=.35,iS=.7,ph=110,mh=320,sS=.5,rS=2.4,ia=Math.PI/180,oS=1*ia,aS=.1*ia,gh=.1,cS=10;function lS({stage:i,rig:t,play:e,events:n,uiRoot:s,onInsets:r}){$_(),ve.enabled=!1;const o=typeof window<"u"?window:null,a=typeof document<"u"?document:null,c=i&&i.renderer&&i.renderer.domElement?i.renderer.domElement:null;let l=!1;const u={clock:.5,firedAt:-1e9,readyT:.5,idleT:.5,rollT:.5,aimHoldT:.5,spinHoldT:.5,topHoldT:.5};u.clock=0,u.readyT=0,u.idleT=0,u.rollT=0,u.aimHoldT=0,u.spinHoldT=0,u.topHoldT=0;let d=e.state,f=!1;const h={shots:0,placed:!1,placeShots:0};let g=null,x=null,m=null;const p={left:!1,right:!1,shift:!1,a:!1,d:!1,w:!1,s:!1,f:!1},w=new Map;let M=null;const y=new Set,C=new Set;let R=1,E={left:0,top:0};const S=tS(s,{onPullStart(z,$){return U()?(g={t0:u.clock,p:0},ve.pulling=!0,ve.pull=0,u.idleT=0,S.setPull(0,"pull"),!0):!1},onPull(z){g&&(g.p=z,ve.pull=z,S.setPull(z,"pull"))},onPullEnd(z,$){if(!g)return;const lt=u.clock-g.t0<eS;g=null,ve.pulling=!1,$||lt||z<hh||!A()?J(!0):xt(z)},ballDown(z){return!l||e.state!=="ready"||v()||w.size>0||(N(),!Z(V(z),z.pointerType||"mouse"))?!1:(rt(z,!0),!!(M&&M.kind==="place"&&M.id===z.pointerId))},ballMove:z=>tt(z),ballUp:z=>ht(z),ballCancel:z=>Mt(z),onInsets(z){typeof r=="function"&&r(z)},onSpin(z,$,lt){!l||e.state!=="ready"||!(e.level&&e.level.spin)||(u.idleT=0,lt==="reset"?H(0,0):H(z,$),S.setSpin(e.intent.spin,F(e.intent)))}}),_=()=>l&&e.state==="ready",v=()=>!!(g||x||m),A=()=>l&&e.state==="ready"&&!m,U=()=>A()&&!v(),F=z=>Number.isFinite(z.top)?z.top:0;function H(z,$){let lt=Number.isFinite(z)?z<-1?-1:z>1?1:z:0,_t=Number.isFinite($)?$<-1?-1:$>1?1:$:0;Math.abs(lt)<gh&&(lt=0),Math.abs(_t)<gh&&(_t=0);const b=Math.sqrt(lt*lt+_t*_t);b>1&&(lt/=b,_t/=b);const I=e.intent.spin===0&&F(e.intent)===0;e.setSpin(lt,_t),lt===0&&_t===0&&!I&&st(8)}function st(z){try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(z)}catch{}}function J(z){g=null,x=null,m=null,S.cancelPull(),ve.pulling=!1,ve.pull=0,ve.strike=-1,S.setPull(0,z?"cancel":"idle")}function xt(z){m={t:0,p:z},ve.pulling=!1,ve.pull=z,ve.strike=0,S.setPull(z,"strike")}function et(z){if(m=null,ve.strike=-1,ve.pull=0,!A()){J(!1);return}e.setPower(z),e.fire()&&(u.firedAt=u.clock,h.shots++,S.setPull(0,"idle"))}function V(z){return{x:z.clientX-E.left,y:z.clientY-E.top}}function N(){if(c&&c.getBoundingClientRect){const z=c.getBoundingClientRect();E={left:z.left,top:z.top}}}function W(){const z=e.intent,$=e.level?e.level.heightAt(z.x,z.z)+Ht.R:Ht.R;return t.groundToScreen(z.x,$,z.z)}function Z(z,$){const lt=W();if(!lt)return!1;const _t=e.intent,b=t.pxPerMetre(_t.x,_t.z)||20,I=Math.max($==="touch"?34:28,.9*b);return Math.hypot(z.x-lt.x,z.y-lt.y)<=I}function it(){const z=e.intent;return{x:z.x,z:z.z,offset:z.offset}}function O(z){if(!z||e.state!=="ready")return;e.setPlacement(z.x,z.z);const $=z.offset-e.intent.offset;$!==0&&e.rotateAim($)}function j(z){z!==R&&(R=z,e.setSpeed(z))}function pt(){const z=w.values(),$=z.next().value,lt=z.next().value;M={kind:"pinch",d0:Math.hypot($.x-lt.x,$.y-lt.y)||1,cx:($.x+lt.x)/2,cy:($.y+lt.y)/2}}function k(){ve.aiming=l&&M!==null&&M.kind==="aim"}function rt(z,$){Rt(z,$),k()}function ht(z){gt(z),k()}function Mt(z){B(z),k()}function Rt(z,$){if(!l)return;z.preventDefault&&z.preventDefault(),N();const lt=V(z);if(z.isPrimary===!0&&z.pointerType==="touch"&&(w.clear(),y.clear(),C.clear(),M&&M.kind!=="pan"&&(M=null)),C.delete(z.pointerId),z.pointerType==="mouse"&&z.button!==0){if(z.button===2&&v()&&!m){J(!0);return}(z.button===1||z.button===2)&&(M={kind:"pan",id:z.pointerId,x:lt.x,y:lt.y},Bt(z.pointerId));return}if(w.set(z.pointerId,lt),u.idleT=0,e.state==="rolling"){u.clock-u.firedAt>=nS&&y.add(z.pointerId),w.size>=2?pt():M={kind:"ff",id:z.pointerId};return}if(w.size>=2){M&&(M.kind==="place"||M.kind==="aim")&&(O(M.snap),ve.placing=!1),w.size===2&&pt();return}if(e.state!=="ready"){M={kind:"block"};return}Bt(z.pointerId);const _t=z.pointerType||"mouse",b=W(),I=$===!0||Z(lt,_t),G={id:z.pointerId,type:_t,sx:lt.x,sy:lt.y,t0:u.clock,moved:!1,snap:it(),travelled:0};if(I)M={...G,kind:"place",grabX:b.x-lt.x,grabY:b.y-lt.y};else if(M={...G,kind:"aim",lastX:lt.x,lastY:lt.y,lastTs:z.timeStamp||0,speed:0},_t!=="touch"){const q=t.screenToGround(lt.x,lt.y);q&&e.setAimToward(q.x,q.z)}}function tt(z){if(!l)return;const $=V(z);if(M&&M.kind==="pan"&&z.pointerId===M.id){const Ft=$.x-M.x,ce=$.y-M.y;M.x=$.x,M.y=$.y,(Ft||ce)&&t.panBy(Ft,ce);return}if(!w.has(z.pointerId)||(w.set(z.pointerId,$),!M))return;if(M.kind==="pinch"){if(w.size<2)return;const Ft=w.values(),ce=Ft.next().value,ee=Ft.next().value,ye=Math.hypot(ce.x-ee.x,ce.y-ee.y)||1,Se=(ce.x+ee.x)/2,Te=(ce.y+ee.y)/2,Ce=ye/M.d0;Math.abs(Ce-1)>1e-4&&t.zoomBy(Ce,Se,Te),(Se!==M.cx||Te!==M.cy)&&t.panBy(Se-M.cx,Te-M.cy),M.d0=ye,M.cx=Se,M.cy=Te;return}if(z.pointerId!==M.id||M.kind!=="place"&&M.kind!=="aim"||e.state!=="ready")return;u.idleT=0;const lt=Math.hypot($.x-M.sx,$.y-M.sy);if(lt>M.travelled&&(M.travelled=lt),M.kind==="place"){if(!M.moved){if(lt<(mc[M.type]||6))return;M.moved=!0,ve.placing=!0}let Ft=M.grabX,ce=M.grabY;if(M.type==="touch"){const ye=M.travelled>=40?1:M.travelled/40;Ft+=(0-Ft)*ye,ce+=(-52-ce)*ye}const ee=t.screenToGround($.x+Ft,$.y+ce);ee&&e.setPlacement(ee.x,ee.z);return}if(M.type!=="touch"){!M.moved&&lt>=(mc[M.type]||4)&&(M.moved=!0);const Ft=t.screenToGround($.x,$.y);Ft&&e.setAimToward(Ft.x,Ft.z);return}if(!M.moved){if(lt<mc.touch)return;M.moved=!0,M.lastX=$.x,M.lastY=$.y,M.lastTs=z.timeStamp||0;return}const _t=W(),b=$.x-M.lastX,I=$.y-M.lastY,G=z.timeStamp||0,q=G-M.lastTs;if(M.lastX=$.x,M.lastY=$.y,M.lastTs=G,!_t)return;const Y=$.x-b-_t.x,ft=$.y-I-_t.y,dt=Math.hypot(Y,ft);if(dt<1)return;const wt=(Y*I-ft*b)/dt,Ut=dt<ph?ph:dt>mh?mh:dt;if(q>0){const Ft=Math.hypot(b,I)/(q/1e3);M.speed+=(Ft-M.speed)*.35}const Gt=M.speed,oe=Gt<=500?0:Gt>=1800?1:(Gt-500)/1300,fe=dh+(iS-dh)*oe*oe;wt!==0&&e.rotateAim(wt/Ut*fe)}function gt(z){const $=V(z),lt=w.delete(z.pointerId);if(y.delete(z.pointerId),C.delete(z.pointerId),M&&M.kind==="pan"&&z.pointerId===M.id){M=null,te(z.pointerId);return}if(!lt||!M)return;if(M.kind==="ff"){z.pointerId===M.id&&(M=null);return}if(M.kind==="pinch"||M.kind==="block"){w.size===0?M=null:M={kind:"block"};return}if(z.pointerId!==M.id)return;te(z.pointerId);const _t=M;if(M=null,_t.kind==="place"){ve.placing=!1,_t.moved&&(h.placed=!0);return}if(_t.kind==="aim"&&_t.type==="touch"&&!_t.moved&&u.clock-_t.t0<=sS&&l&&e.state==="ready"){const b=t.screenToGround($.x,$.y);b&&e.setAimToward(b.x,b.z)}}function B(z){if(w.delete(z.pointerId),y.delete(z.pointerId),C.delete(z.pointerId),M&&M.kind==="pan"&&M.id===z.pointerId){M=null;return}M&&(M.id===z.pointerId||w.size===0)&&(M.kind==="place"&&(ve.placing=!1),M=w.size?{kind:"block"}:null)}function Q(z){if(z.preventDefault&&z.preventDefault(),!l)return;N();const $=V(z),lt=z.deltaMode===1?z.deltaY*16:z.deltaMode===2?z.deltaY*400:z.deltaY;let _t=Math.exp(-lt*.0015);_t=_t<.8?.8:_t>1.25?1.25:_t,t.zoomBy(_t,$.x,$.y)}const It=z=>{z.preventDefault&&z.preventDefault()},jt=z=>{z.cancelable!==!1&&z.preventDefault&&z.preventDefault()};function Bt(z){try{c&&c.setPointerCapture&&c.setPointerCapture(z)}catch{}}function te(z){try{c&&c.releasePointerCapture&&c.releasePointerCapture(z)}catch{}}c&&(c.style&&(c.style.touchAction="none"),c.addEventListener("pointerdown",rt),c.addEventListener("pointermove",tt),c.addEventListener("pointerup",ht),c.addEventListener("pointercancel",Mt),c.addEventListener("wheel",Q,{passive:!1}),c.addEventListener("contextmenu",It),c.addEventListener("touchstart",jt,{passive:!1}),c.addEventListener("touchmove",jt,{passive:!1}),c.addEventListener("gesturestart",jt));const $t=[S.parts.grab,S.parts.spin],T=z=>{const $=z.target;return $===c||$&&$t.indexOf($)>=0?!1:w.has(z.pointerId)||C.has(z.pointerId)||M&&M.kind==="pan"&&M.id===z.pointerId},P=z=>{T(z)&&tt(z)},at=z=>{T(z)&&ht(z)},mt=z=>{T(z)&&Mt(z)};o&&c&&(o.addEventListener("pointermove",P),o.addEventListener("pointerup",at),o.addEventListener("pointercancel",mt));function bt(z){const $=z.target;return!!($&&($.tagName==="INPUT"||$.tagName==="TEXTAREA"||$.isContentEditable))}function St(z){if(bt(z))return;const $=z.code;if($==="ShiftLeft"||$==="ShiftRight"){p.shift=!0;return}if(l&&(($==="Space"||$.startsWith("Arrow"))&&z.preventDefault(),!z.repeat))switch($){case"ArrowLeft":case"ArrowRight":{const lt=$==="ArrowLeft";lt?p.left=!0:p.right=!0,u.aimHoldT=0,_()&&(u.idleT=0,e.rotateAim((lt?-1:1)*(z.shiftKey||p.shift?aS:oS)));break}case"KeyA":case"KeyD":{$==="KeyA"?p.a=!0:p.d=!0,u.spinHoldT=0,kt($==="KeyA"?-1:1,0);break}case"KeyW":case"KeyS":{$==="KeyW"?p.w=!0:p.s=!0,u.topHoldT=0,kt(0,$==="KeyW"?1:-1);break}case"Space":U()&&(x={t:0,p:0},ve.pulling=!0,ve.pull=0,u.idleT=0,S.setPull(0,"pull"));break;case"Backspace":case"KeyX":(g||x)&&J(!0);break;case"KeyO":case"KeyV":n.emit("ui:overview",{on:!f});break;case"KeyF":p.f=!0;break}}function Xt(z){const $=z.code;if($==="ShiftLeft"||$==="ShiftRight"){p.shift=!1;return}if($==="ArrowLeft")p.left=!1;else if($==="ArrowRight")p.right=!1;else if($==="KeyA")p.a=!1;else if($==="KeyD")p.d=!1;else if($==="KeyW")p.w=!1;else if($==="KeyS")p.s=!1;else if($==="KeyF")p.f=!1;else if($==="Space"&&x){const lt=x.p;x=null,ve.pulling=!1,lt>=hh&&A()?xt(lt):J(!0)}}function kt(z,$){if(!_()||!(e.level&&e.level.spin))return;u.idleT=0;let lt=e.intent.spin,_t=F(e.intent);if(z!==0){const b=Math.sqrt(Math.max(0,1-_t*_t));lt=Math.round((lt+z*.1)*10)/10,lt=lt<-b?-b:lt>b?b:lt}if($!==0){const b=Math.sqrt(Math.max(0,1-lt*lt));_t=Math.round((_t+$*.1)*10)/10,_t=_t<-b?-b:_t>b?b:_t}e.setSpin(lt,_t),S.setSpin(e.intent.spin,F(e.intent))}function Dt(){v()&&J(!1),p.left=p.right=p.shift=p.a=p.d=p.w=p.s=p.f=!1,w.clear(),M&&M.kind==="place"&&(ve.placing=!1),M=null,y.clear(),C.clear(),k()}function ue(){a&&a.visibilityState==="hidden"&&Dt()}o&&(o.addEventListener("keydown",St),o.addEventListener("keyup",Xt),o.addEventListener("blur",Dt),o.addEventListener&&c&&o.addEventListener("resize",N)),a&&a.addEventListener&&a.addEventListener("visibilitychange",ue);const At=[n.on("ui:overview",({on:z})=>{f=!!z}),n.on("ad:start",()=>Dt()),n.on("shot:fire",()=>{u.firedAt=u.clock,u.rollT=0,S.setVisible(!1)}),n.on("hole:start",()=>{f=!1})];let Vt=!1,ie=!1,qt=null,Ot=0;function Jt(z){u.clock+=z;const $=e.state;if($!==d){if($==="ready"){u.readyT=0,u.idleT=0;for(const q of w.keys())C.add(q);w.clear(),y.clear(),M&&M.kind!=="pan"&&(M=null)}d==="ready"&&v()&&!m&&J(!1),d=$}if(m&&(m.t+=z,ve.strike=m.t/gc>1?1:m.t/gc,m.t>=gc&&et(m.p)),x){x.t+=z;const q=x.t/rS%1;x.p=1-Math.abs(1-2*q),ve.pull=x.p,S.setPull(x.p,"pull")}if(_()){u.readyT+=z,u.idleT+=z;const q=(p.right?1:0)-(p.left?1:0);if(q!==0&&(u.aimHoldT+=z,u.idleT=0,u.aimHoldT>.25)){const dt=p.shift?3*ia:(30+60*Math.min(1,(u.aimHoldT-.25)/1.2))*ia;e.rotateAim(q*dt*z)}const Y=(p.d?1:0)-(p.a?1:0);Y!==0&&(u.spinHoldT+=z,u.spinHoldT>.35&&(u.spinHoldT-=.1,kt(Y,0)));const ft=(p.w?1:0)-(p.s?1:0);ft!==0&&(u.topHoldT+=z,u.topHoldT>.35&&(u.topHoldT-=.1,kt(0,ft)))}const lt=l&&$==="rolling";lt&&(u.rollT+=z),$!=="rolling"&&y.size&&y.clear(),j(lt&&(p.f||y.size>0)?3:1);const _t=lt?R>1?2:u.rollT>1.5?1:0:0;_t!==Ot&&(Ot=_t,S.setFastForward(_t));const b=l&&$==="ready";b!==Vt&&(Vt=b,S.setVisible(b),!b&&v()&&!m&&J(!1));const I=!!(e.level&&e.level.spin);I!==ie&&(ie=I,S.setSpinEnabled(I)),e.intent!==qt&&(qt=e.intent,S.setSpin(e.intent.spin,F(e.intent)),S.setPreset(e.lastPower!==void 0?e.lastPower:e.intent.power));const G=u.idleT>cS;S.setPullHint(b&&!v()&&(h.shots===0&&u.readyT>.6||G)),ve.hint=b&&!M&&(!h.placed&&h.shots<3&&u.readyT>.4||G)?1:0,ve.enabled=l,k()}function re(z){z=!!z,z!==l&&(l=z,ve.enabled=z,z?(N(),e.state==="ready"&&(Vt=!0,S.setVisible(!0))):(v()&&J(!1),w.clear(),M&&M.kind==="place"&&(ve.placing=!1),M=null,k(),y.clear(),p.left=p.right=p.a=p.d=p.w=p.s=p.f=!1,j(1),Vt=!1,S.setVisible(!1),Ot=0,S.setFastForward(0),S.setPullHint(!1)))}function ge(){re(!1);for(const z of At)z();c&&(c.removeEventListener("pointerdown",rt),c.removeEventListener("pointermove",tt),c.removeEventListener("pointerup",ht),c.removeEventListener("pointercancel",Mt),c.removeEventListener("wheel",Q),c.removeEventListener("contextmenu",It),c.removeEventListener("touchstart",jt),c.removeEventListener("touchmove",jt),c.removeEventListener("gesturestart",jt)),o&&(o.removeEventListener("keydown",St),o.removeEventListener("keyup",Xt),o.removeEventListener("blur",Dt),o.removeEventListener("resize",N),o.removeEventListener("pointermove",P),o.removeEventListener("pointerup",at),o.removeEventListener("pointercancel",mt)),a&&a.removeEventListener&&a.removeEventListener("visibilitychange",ue),S.dispose()}const ot={enable:re,update:Jt,dispose:ge,insets:()=>S.insets()};return Object.defineProperty(ot,"_debug",{value:{hud:S,session:h,get gesture(){return M}},enumerable:!1}),ot}function Tt(i,t,e){const[n,...s]=i.split("."),r=document.createElement(n||"div");if(s.length&&(r.className=s.join(" ")),t)for(const o in t){const a=t[o];if(!(a==null||a===!1))if(o==="html")r.innerHTML=a;else if(o==="text")r.textContent=a;else if(o.startsWith("on"))r.addEventListener(o.slice(2),a);else if(o==="style")for(const c in a)c.startsWith("--")?r.style.setProperty(c,a[c]):r.style[c]=a[c];else r.setAttribute(o,a===!0?"":String(a))}return e!==void 0&&Od(r,e),r}function Od(i,t){if(Array.isArray(t)){for(const e of t)Od(i,e);return}t==null||t===!1||i.appendChild(typeof t=="string"||typeof t=="number"?document.createTextNode(String(t)):t)}const Xe={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4.5" width="4.6" height="15" rx="1.8"/><rect x="13.9" y="4.5" width="4.6" height="15" rx="1.8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.8 12S5.6 5 12 5s10.2 7 10.2 7-3.8 7-10.2 7S1.8 12 1.8 12z"/><circle cx="12" cy="12" r="3.6" class="pupil"/></svg>',play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 4.8v14.4a1 1 0 0 0 1.5.9l11-7.2a1 1 0 0 0 0-1.8L9 3.9a1 1 0 0 0-1.5.9z"/></svg>',retry:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" fill="none" stroke-width="3" stroke-linecap="round"/><path d="M3.4 3.6l.6 5.6 5.5-1.2z"/></svg>',grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="3" width="7.6" height="7.6" rx="2"/><rect x="3" y="13.4" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="13.4" width="7.6" height="7.6" rx="2"/></svg>',soundOn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.6 8.6a5 5 0 0 1 0 6.8M18.4 5.9a9 9 0 0 1 0 12.2" fill="none" stroke-width="2.4" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.8 9.2l5.4 5.6M21.2 9.2l-5.4 5.6" fill="none" stroke-width="2.6" stroke-linecap="round"/></svg>',ball:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="9" cy="9" r="2.6" fill="#fff" opacity=".85"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.2L8 12l6.8 6.8" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',lock:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5" fill="none" stroke-width="2.8"/><rect x="4.8" y="10" width="14.4" height="11" rx="3"/></svg>',star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4l2.85 6 6.6.75-4.9 4.5 1.35 6.5L12 16.85 6.1 20.15l1.35-6.5-4.9-4.5 6.6-.75z"/></svg>'};function uS(i,{events:t}={}){const e=(C,R)=>t&&t.emit(C,R);let n=!1,s=!1,r=0,o=0;const a=Tt("b.hud-num",null,"1"),c=Tt("div.hud-ball",null,a),l=Tt("span.hud-name",null,""),u=Tt("span.hud-par",null,"Par 2"),d=Tt("div.hud-chip.hud-hole",null,[c,Tt("div.hud-meta",null,[l,u])]),f=Tt("b.hud-strokes-n",null,"0"),h=Tt("div.hud-pips",{"aria-hidden":"true"}),g=Tt("span.hud-pop",{"aria-hidden":"true"},"+1"),x=Tt("div.hud-chip.hud-strokes",{role:"status","aria-live":"polite"},[Tt("span.hud-lbl",null,"Strokes"),f,h,g]),m=Tt("button.hud-btn.hud-eye",{type:"button","aria-label":"Look at the whole hole","aria-pressed":"false",html:Xe.eye,onclick:()=>M(!n,!0)}),p=Tt("button.hud-btn.hud-pause",{type:"button","aria-label":"Pause",html:Xe.pause,onclick:()=>e("ui:pause",{})}),w=Tt("div.hud",{"data-shown":"false"},[d,x,Tt("div.hud-btns",null,[m,p])]);i.appendChild(w);function M(C,R){n=!!C,m.setAttribute("aria-pressed",n?"true":"false"),m.classList.toggle("on",n),R&&e("ui:overview",{on:n})}function y(){const C=Math.max(o,Math.min(r,o+4));for(;h.childNodes.length>C;)h.removeChild(h.lastChild);for(;h.childNodes.length<C;)h.appendChild(Tt("i.pip"));for(let R=0;R<C;R++){const E=h.childNodes[R];E.className="pip"+(R<r?" used":"")+(R>=o?" over":"")}}return t&&(t.on("ui:overview",({on:C}={})=>{!!C!==n&&M(C,!1)}),t.on("shot:end",({penalty:C}={})=>{C&&(g.classList.remove("go"),g.offsetWidth,g.classList.add("go"))})),{el:w,setHole(C,R){a.textContent=String((R|0)+1),l.textContent=C&&C.name?C.name:"",u.textContent="Par "+(C?C.par:""),w.setAttribute("data-round",String(C&&C.round?C.round:1)),n&&M(!1,!0)},setStrokes(C,R){const E=Math.max(0,C|0),S=E>r;r=E,R!==void 0&&(o=Math.max(1,R|0)),f.textContent=String(r),x.classList.toggle("over",r>o),y(),S&&(f.classList.remove("bump"),f.offsetWidth,f.classList.add("bump"))},show(C){s=!!C,w.setAttribute("data-shown",s?"true":"false")}}}const xh=350,fS=1400,hS=5200,dS=1900,pS=1700,mS=3e3,gS={ace:"Unbelievable!",albatross:"Amazing shot!",eagle:"Superb!",birdie:"Great shot!",par:"Well played!",bogey:"So close!",double:"Nice try!",over:"Keep going!",picked:"Try again for a star!"},xS={ace:"Hole-in-one!",albatross:"Albatross!",eagle:"Eagle!",birdie:"Birdie!",par:"Par!"},Mn="#13261b";function vS(i,t,e,n,s){let r="";for(let o=0;o<s*2;o++){const a=o*Math.PI/s-Math.PI/2,c=o%2?n:e;r+=(o?"L":"M")+(i+Math.cos(a)*c).toFixed(1)+" "+(t+Math.sin(a)*c).toFixed(1)}return r+"Z"}const Fs=(i,t,e)=>`<g transform="${e}" stroke="${Mn}" stroke-width="3" stroke-linejoin="round"><path d="M15 34l-10-5 2.5 10z" fill="${t}"/><ellipse cx="29" cy="37" rx="16" ry="13" fill="${i}"/><circle cx="41" cy="25" r="10" fill="${i}"/><path d="M50 22.5l9 3.5-9 3.5z" fill="#FFC93C"/><path d="M19 35c6-3 12-1 14 5-6 3-12 2-14-5z" fill="${t}"/><circle cx="43.5" cy="23" r="2.3" fill="${Mn}" stroke="none"/></g>`,ts=i=>`<svg viewBox="0 0 64 64" aria-hidden="true">${i}</svg>`,vh={ace:ts(`<path d="${vS(32,32,30,18,12)}" fill="#FFC93C" stroke="${Mn}" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="32" r="12" fill="#FBFAF3" stroke="${Mn}" stroke-width="3"/><text x="32" y="39" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="19" fill="${Mn}">1</text>`),albatross:ts(Fs("#9F7BE0","#7B4FC9","translate(-4 -10) scale(.62)")+Fs("#9F7BE0","#7B4FC9","translate(26 -6) scale(.62)")+Fs("#9F7BE0","#7B4FC9","translate(8 22) scale(.62)")),eagle:ts(Fs("#FFA65A","#E07020","translate(-2 -4) scale(.7)")+Fs("#FFA65A","#E07020","translate(20 18) scale(.7)")),birdie:ts(Fs("#5B93F0","#2D6CDF","translate(0 0)")),par:ts(`<ellipse cx="32" cy="53" rx="22" ry="7" fill="#3CC47A" stroke="${Mn}" stroke-width="3"/><ellipse cx="32" cy="52" rx="7" ry="2.6" fill="${Mn}"/><path d="M32 51V9" stroke="${Mn}" stroke-width="5" stroke-linecap="round"/><path d="M32 50V10" stroke="#fff" stroke-width="2"/><path d="M34 9l21 7.5L34 24z" fill="#E8322F" stroke="${Mn}" stroke-width="3" stroke-linejoin="round"/>`),smile:ts(`<circle cx="32" cy="32" r="26" fill="#8EC5FF" stroke="${Mn}" stroke-width="3"/><circle cx="23" cy="27" r="3.4" fill="${Mn}"/><circle cx="41" cy="27" r="3.4" fill="${Mn}"/><path d="M20 38c6 8 18 8 24 0" fill="none" stroke="${Mn}" stroke-width="3.6" stroke-linecap="round"/>`),picked:ts(`<g fill="#fff" stroke="${Mn}" stroke-width="3" stroke-linejoin="round"><rect x="15" y="12" width="8" height="26" rx="4"/><rect x="24" y="7" width="8" height="30" rx="4"/><rect x="33" y="9" width="8" height="28" rx="4"/><rect x="42" y="15" width="8" height="23" rx="4"/><path d="M15 31h35v6c0 11-7.5 19-18 19-7.5 0-12-4.5-14.5-9L9.5 37c-1.6-2.8 2-5.6 4.6-3.4L18 37z"/></g>`)},_S=i=>vh[i]||vh.smile,_h='<svg viewBox="0 0 48 58" aria-hidden="true"><path d="M17 4c2.6 0 4.6 2 4.6 4.6v15.6l1.7-.4c2.2-.5 4.4.8 5 3l.2.6 1.3-.3c2.2-.5 4.4.8 5 3l.2.8 1-.2c2.3-.4 4.5 1.1 4.9 3.4l1.3 8.6c.9 5.7-2.5 11.2-8 12.9l-6.1 1.8c-4.7 1.4-9.8-.5-12.4-4.7L4.2 38.4c-1.3-2.1-.8-4.8 1.2-6.2 2-1.3 4.6-1 6.1.8l1 1.2V8.6C12.5 6 14.5 4 17 4z" fill="#fff" stroke="#13261b" stroke-width="3" stroke-linejoin="round"/><path d="M21.6 24.2v7M29.5 27.4v5.4M36.7 31.1v4.6" stroke="#13261b" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".45"/></svg>';function MS(i,t){if(i==null)return"";if(i===1)return"m-ace";const e=i-t;return e<=-2?"m-eagle":e===-1?"m-birdie":e===0?"m-par":e===1?"m-bogey":"m-double"}function yS(i,{events:t,progress:e,holes:n=[],rounds:s=[],rig:r=null,play:o=null}={}){const a=(L,X)=>t&&t.emit(L,X),c=(L,X)=>t&&t.on(L,X),l=new Map;{let L=0;for(const X of s)l.set(X.id,L),L+=X.holes.length}const u=L=>{for(const X of s){const ct=l.get(X.id);if(L>=ct&&L<ct+X.holes.length)return X}return s[0]},d=L=>n[L]||{name:"Hole "+(L+1),par:3,id:"h"+L};let f=null,h=!1,g=!1,x=0,m=null,p=null,w=!1,M=!1,y=0,C={index:-1,best:null,stars:0,total:0},R=!!(e&&e.muted),E=e&&e.skin||"classic",S=!1;const _=new Set,v=(L,X)=>{const ct=setTimeout(()=>{_.delete(ct),L()},X);return _.add(ct),ct},A=L=>{L&&(clearTimeout(L),_.delete(L))},U=Tt("div.scr");i.appendChild(U);function F(L,X,ct,K,Ct){return Tt("button.btn"+L,{type:"button","aria-label":Ct||null,onclick:zt=>{Date.now()-x<xh||K(zt)}},[ct?Tt("span.ico",{html:ct}):null,X?Tt("span.lbl",null,X):null])}function H(L,X=""){const ct=Tt("div.stars"+X,{role:"img","aria-label":L+(L===1?" star":" stars")});for(let K=0;K<3;K++)ct.appendChild(Tt("span.st"+(K<L?".on":""),{html:Xe.star,style:{"--k":String(K)}}));return ct}const st=[];function J(L){const X=F(L?".b-white.b-sound":".b-round.b-white.b-sound","","",()=>et(!R));return st.push({b:X,withLabel:L}),xt(),X}function xt(){for(const{b:L,withLabel:X}of st){for(;L.firstChild;)L.removeChild(L.firstChild);L.appendChild(Tt("span.ico",{html:R?Xe.soundOff:Xe.soundOn})),X&&L.appendChild(Tt("span.lbl",null,R?"Sound off":"Sound on")),L.setAttribute("aria-label",R?"Turn sound on":"Turn sound off"),L.setAttribute("aria-pressed",R?"false":"true"),L.classList.toggle("off",R)}}function et(L){R=!!L,xt(),a("ui:sound",{muted:R})}function V(L,X,ct){const K=typeof L=="object"?L:s.find(Lt=>Lt.id===L)||s[0],Ct=l.get(K.id)||0,zt=Tt("div.strip",{role:"table","aria-label":K.name+" scorecard"}),Zt=Tt("div.srow.s-hole",{role:"row"},Tt("span.sh",{role:"rowheader"},"Hole")),Yt=Tt("div.srow.s-par",{role:"row"},Tt("span.sh",{role:"rowheader"},"Par")),he=Tt("div.srow.s-you",{role:"row"},Tt("span.sh",{role:"rowheader"},"You"));let ut=0,vt=0,yt=0;K.holes.forEach((Lt,Kt)=>{const Wt=Ct+Kt,Nt=X(Wt),_e=Wt===ct?".hi":"";Zt.appendChild(Tt("span.sc"+_e,{role:"cell",style:{"--k":String(Kt)}},String(Wt+1))),Yt.appendChild(Tt("span.sc"+_e,{role:"cell"},String(Lt.par)));const se=MS(Nt,Lt.par);he.appendChild(Tt("span.sc.s-score"+_e,{role:"cell",style:{"--k":String(Kt)}},Nt==null?Tt("i.dash",null,"–"):Tt("b.mk"+(se?"."+se:""),null,String(Nt)))),Nt!=null&&(ut+=Nt,vt+=Lt.par,yt++)}),Zt.appendChild(Tt("span.sc.s-tot",{role:"cell"},"Tot")),Yt.appendChild(Tt("span.sc.s-tot",{role:"cell"},String(K.holes.reduce((Lt,Kt)=>Lt+Kt.par,0))));const Pt=yt?Ic(ut,vt):"–";return he.appendChild(Tt("span.sc.s-tot.s-rel"+(yt&&ut<vt?".under":""),{role:"cell",title:yt?ut+" strokes":""},Pt)),zt.appendChild(Zt),zt.appendChild(Yt),zt.appendChild(he),zt}const N={};function W(L,X,{primary:ct,back:K}={}){const Ct=Tt("div.panel.p-"+L+(X?"."+X:""),{role:"dialog","aria-modal":"true","aria-hidden":"true"});return U.appendChild(Ct),N[L]={el:Ct,primary:ct,back:K},Ct}function Z(L,X){const ct=N[L];if(!ct)return;for(const Ct in N){const zt=Ct===L;N[Ct].el.classList.toggle("open",zt),N[Ct].el.setAttribute("aria-hidden",zt?"false":"true")}f=L,x=Date.now();const K=typeof document<"u"?document.activeElement:null;K&&K.blur&&U.contains&&U.contains(K)&&K.blur(),ct.render&&ct.render(X),O(!0)}function it(){for(const L in N)N[L].el.classList.remove("open"),N[L].el.setAttribute("aria-hidden","true");f=null,O(!1)}function O(L){L&&(Ut(),fe()),L!==h&&(h=L,i.classList&&i.classList.toggle("ui-menu",L),a("ui:menu",{open:L}),L||D())}const j=Tt("span.t-stars-n",null,"0"),pt=Tt("span.sub",null,""),k=F(".b-yellow.b-big.t-go","",Xe.play,()=>{const L=e?e.nextIndex():0;it(),L===m&&!w||a("ui:play",{index:L})}),rt=Tt("span.lbl2",null,[Tt("span.main",null,"Continue"),pt]);k.appendChild(rt),W("title","",{primary:()=>k.click()}).appendChild(Tt("div.t-wrap",null,[Tt("div.logo",{role:"heading","aria-level":"1","aria-label":"8 Ball Golf"},[Tt("span.logo-ball",{"aria-hidden":"true"},Tt("span.logo-disc",null,"8")),Tt("span.logo-word",{"aria-hidden":"true"},[Tt("span.lw1",null,"BALL"),Tt("span.lw2",null,"GOLF")])]),Tt("p.tagline",null,"Hit the white. Sink the 8."),Tt("div.t-stars",{"aria-label":"Stars collected"},[Tt("span.ico",{html:Xe.star}),j,Tt("span.of",null," / "+n.length*3)]),k,Tt("div.t-row",null,[F(".b-blue","Holes",Xe.grid,()=>It("title")),F(".b-blue","Balls",Xe.ball,()=>T("title")),J(!1)])])),N.title.render=()=>{const L=e?e.nextIndex():0,X=d(L);pt.textContent="Hole "+(L+1)+" · "+X.name,j.textContent=String(e?e.totalStars():0)};let Mt="title",Rt=s.length?s[0].id:1;const tt=Tt("div.tabs",{role:"tablist"}),gt=Tt("div.tiles"),B=Tt("p.p-note",null,"");W("holes","card-panel",{back:()=>ie(Mt)}).appendChild(Tt("div.card.paper.c-holes",null,[Tt("div.c-head",null,[F(".b-round.b-back","",Xe.back,()=>ie(Mt),"Back"),Tt("h2",null,"Holes"),Tt("span.c-head-pad")]),tt,gt,B]));function It(L){Mt=L;const X=e?e.nextIndex():0;Rt=u(L==="pause"&&m!==null?m:X).id,Z("holes")}N.holes.render=()=>{for(;tt.firstChild;)tt.removeChild(tt.firstChild);for(const K of s){const Ct=l.get(K.id),zt=!e||e.isUnlocked(Ct),Zt=e&&e.roundStars?e.roundStars(K.id):0,Yt=F(".tab"+(K.id===Rt?".sel":"")+(zt?"":".locked"),"",zt?null:Xe.lock,()=>{if(!zt){qt(Yt),B.textContent="Finish hole "+Ct+" to open "+K.name+"!";return}Rt=K.id,N.holes.render()});Yt.setAttribute("role","tab"),Yt.setAttribute("aria-selected",K.id===Rt?"true":"false"),Yt.appendChild(Tt("span.tab-name",null,K.name)),zt&&Yt.appendChild(Tt("span.tab-stars",null,[Tt("span.ico",{html:Xe.star}),Zt+"/"+K.holes.length*3])),tt.appendChild(Yt)}for(;gt.firstChild;)gt.removeChild(gt.firstChild);const L=s.find(K=>K.id===Rt)||s[0];if(!L)return;const X=l.get(L.id),ct=e?e.nextIndex():0;gt.setAttribute("data-round",String(L.id)),L.holes.forEach((K,Ct)=>{const zt=X+Ct,Zt=d(zt),Yt=!e||e.isUnlocked(zt),he=e?e.best(zt):null,ut=F(".tile"+(Yt?"":".locked")+(zt===ct&&Yt?".next":"")+(zt===m?".cur":""),"",null,()=>{if(!Yt){qt(ut),B.textContent="Finish hole "+zt+" first!";return}g=!1,it(),a("ui:play",{index:zt})},Yt?"Hole "+(zt+1)+", "+Zt.name:"Hole "+(zt+1)+", locked");ut.appendChild(Tt("span.tile-num",null,String(zt+1))),ut.appendChild(Tt("span.tile-name",null,Zt.name)),Yt?(ut.appendChild(Tt("span.tile-par",null,"Par "+Zt.par+(he!==null?" · Best "+he:""))),ut.appendChild(H(e?e.stars(zt):0,".mini"))):ut.appendChild(Tt("span.tile-lock",{html:Xe.lock})),gt.appendChild(ut)}),B.textContent=""};let jt="title";const Bt=Tt("div.skins"),te=Tt("p.p-note",null,"");W("skins","card-panel",{back:()=>ie(jt)}).appendChild(Tt("div.card.paper.c-skins",null,[Tt("div.c-head",null,[F(".b-round.b-back","",Xe.back,()=>ie(jt),"Back"),Tt("h2",null,"Balls"),Tt("span.c-head-pad")]),Bt,te]));function T(L){jt=L,Z("skins")}function P(){if(!e)return"";const L=e.totalStars(),X=e.skins().find(ct=>!ct.unlocked);return X?X.need-L+" more ★ for the "+X.name+" ball!":"You unlocked every ball!"}N.skins.render=()=>{for(;Bt.firstChild;)Bt.removeChild(Bt.firstChild);const L=e?e.skins():[{id:"classic",name:"Classic",need:0,unlocked:!0}];for(const X of L){const ct=F(".skin"+(X.unlocked?"":".locked")+(X.id===E?".sel":""),"",null,()=>{if(!X.unlocked){qt(ct),te.textContent="Collect "+X.need+" ★ to unlock "+X.name+"!";return}E=X.id,a("ui:skin",{id:X.id}),N.skins.render()},X.name+(X.unlocked?"":", locked"));ct.setAttribute("aria-pressed",X.id===E?"true":"false"),ct.appendChild(Tt("span.skin-ball.sk-"+X.id,{"aria-hidden":"true"})),ct.appendChild(Tt("span.skin-name",null,X.name)),ct.appendChild(X.unlocked?Tt("span.skin-need.ok",null,X.id===E?"Playing":"Tap to use"):Tt("span.skin-need",null,[Tt("span.ico",{html:Xe.star}),String(X.need)])),Bt.appendChild(ct)}te.textContent=P()};const at=W("card","card-panel",{primary:()=>Xt()}),mt=Tt("div.card.paper.c-score");at.appendChild(mt);let bt=null;function St(){mt.classList.add("skip")}function Xt(){if(!mt.classList.contains("skip")&&Date.now()-x<mS){St();return}bt&&bt()}mt.addEventListener("pointerdown",St),N.card.render=L=>{const{index:X,strokes:ct,par:K,picked:Ct,penalties:zt=0,stars:Zt=0}=L,Yt=L.term||Lc(ct,K,Ct),he=Yt.key,ut=C.index===X?C.best:null,vt=C.index===X?C.stars:0,yt=C.index===X?C.total:e?e.totalStars():0,Pt=ut!==null&&ct<ut,Lt=Math.max(0,Zt-vt),Kt=e?e.skins().filter(de=>de.need>yt&&de.need<=yt+Lt):[],Wt=(()=>{const de=u(X);return X===l.get(de.id)+de.holes.length-1})(),Nt=L.level||d(X);for(;mt.firstChild;)mt.removeChild(mt.firstChild);mt.className="card paper c-score t-"+he,mt.appendChild(Tt("div.sc-hole",null,"Hole "+(X+1)+" · "+(Nt.name||""))),mt.appendChild(Tt("div.sc-term",null,[Tt("span.term-ico",{html:_S(he)}),Tt("div.term-txt",null,[Tt("b.term",null,Yt.label),Tt("span.term-sub",null,gS[he]||"")])]));const _e=Ct?"Picked up · Par "+K:ct+(ct===1?" stroke":" strokes")+" · Par "+K;mt.appendChild(Tt("div.sc-line",null,[_e,zt>0?Tt("span.pen",null,"+"+zt+" penalty"):null])),mt.appendChild(H(Zt,".big"));const se=Tt("div.sc-extras");Pt&&se.appendChild(Tt("span.badge.b-best",null,"New best!"));for(const de of Kt){const me=F(".b-mini","Use it",null,()=>{E=de.id,a("ui:skin",{id:de.id}),me.classList.add("done"),me.lastChild.textContent="Playing!"});se.appendChild(Tt("span.badge.b-skin",null,[Tt("span.skin-ball.sk-"+de.id,{"aria-hidden":"true"}),"New ball: "+de.name+"!",me]))}se.childNodes.length&&mt.appendChild(se);const Me=de=>de===X?ut===null?ct:Math.min(ut,ct):e?e.best(de):null;mt.appendChild(V(u(X),Me,X));const Et=S&&!Ct;Et&&mt.appendChild(Tt("p.sc-hint",null,"Hole in! Next hole →"));const we=Wt?"Round score":"Next hole";bt=()=>{S=!1,it(),a("ui:next",{})},mt.appendChild(Tt("div.btns",null,[F(".b-blue.sc-retry","Retry",Xe.retry,()=>{S=!1,it(),a("ui:retry",{})}),F(".b-yellow.b-big.sc-next"+(Et?".pulse":""),we,Xe.play,()=>bt())]))};const kt=W("round","card-panel",{primary:()=>ue()}),Dt=Tt("div.card.chalk.c-round");kt.appendChild(Dt);let ue=()=>{};Dt.addEventListener("pointerdown",()=>Dt.classList.add("skip")),N.round.render=L=>{const X=s.find(vt=>vt.id===L.round)||s[0],ct=new Map((L.holes||[]).map(vt=>[vt.index,vt.strokes])),K=L.total||0,Ct=L.par||X.holes.reduce((vt,yt)=>vt+yt.par,0),zt=L.rel||Ic(K,Ct),Zt=l.get(X.id)||0;let Yt=0;for(let vt=0;vt<X.holes.length;vt++)Yt+=e?e.stars(Zt+vt):0;const he=X===s[s.length-1];for(;Dt.firstChild;)Dt.removeChild(Dt.firstChild);Dt.className="card chalk c-round",Dt.appendChild(Tt("h2.r-title",null,(L.name||X.name)+" done!")),Dt.appendChild(Tt("div.r-score",null,[Tt("div.r-rel"+(K<Ct?".under":K===Ct?".even":""),null,[Tt("span.r-cap",null,"Best round"),Tt("b",null,zt)]),Tt("div.r-meta",null,[Tt("span",null,"Total "+K+" · Par "+Ct),Tt("span.r-stars",null,[Tt("span.ico",{html:Xe.star}),Yt+" / "+X.holes.length*3])])])),Dt.appendChild(V(X,vt=>ct.has(vt)?ct.get(vt):e?e.best(vt):null,-1));const ut=he?"You played all "+n.length+" holes! Go back for more stars.":s[s.indexOf(X)+1].name+" is open! Curves, cushions and water.";Dt.appendChild(Tt("p.r-hook",null,ut)),Dt.appendChild(Tt("p.r-hook.r-skin",null,P())),ue=()=>{it(),a("ui:next",{})},Dt.appendChild(Tt("div.btns",null,[F(".b-yellow.b-big.r-next",he?"Continue":"Play "+s[s.indexOf(X)+1].name,Xe.play,()=>ue())]))},W("pause","card-panel",{primary:()=>Vt(),back:()=>Vt()}).appendChild(Tt("div.card.paper.c-pause",null,[Tt("h2",null,"Paused"),F(".b-yellow.b-big.ps-resume","Resume",Xe.play,()=>Vt()),Tt("div.ps-grid",null,[F(".b-blue.ps-retry","Retry hole",Xe.retry,()=>{g=!1,it(),a("ui:retry",{})}),F(".b-blue.ps-holes","Holes",Xe.grid,()=>It("pause")),F(".b-blue.ps-skins","Balls",Xe.ball,()=>T("pause")),J(!0)])]));function Vt(){!g&&f!=="pause"||(g=!1,it(),a("ui:resume",{}))}function ie(L){L==="pause"&&g?Z("pause"):L==="title"?Z("title"):it()}function qt(L){L.classList.remove("nudge"),L.offsetWidth,L.classList.add("nudge")}const Ot=Tt("span.tip-txt",null,""),Jt=Tt("div.tip",{role:"status","aria-live":"polite",hidden:!0},[Tt("span.tip-ico",{"aria-hidden":"true"},Tt("span",null,"8")),Ot]),re=Tt("span.coach-txt",null,""),ge=Tt("span.coach-gesture",{html:_h,"aria-hidden":"true"}),ot=Tt("button.coach-skip",{type:"button",onclick:()=>ze()},"Skip"),z=Tt("div.coach",{role:"status","aria-live":"polite",hidden:!0},[ge,re,ot]),$=Tt("div.hand",{html:_h,"aria-hidden":"true",hidden:!0}),lt=Tt("b.toast-main",null,""),_t=Tt("span.toast-sub",null,""),b=Tt("div.toast",{role:"status","aria-live":"polite",hidden:!0},[lt,_t]),I=Tt("div.celebrate",{"aria-hidden":"true",hidden:!0});U.appendChild(Jt),U.appendChild(z),U.appendChild($),U.appendChild(b),U.appendChild(I);let G=null,q=0;function Y(){A(q),!(!G||f!==null)&&(q=v(()=>{if(f!==null)return;const L=G;G=null,!(!L||L.index!==m||w)&&(Ot.textContent=L.text,Jt.hidden=!1,Ft(Jt,"go"),e&&e.markTip(L.id),q=v(ft,hS))},fS))}function ft(){A(q),q=0,Jt.hidden=!0,Jt.classList.remove("go")}let dt=0;function wt(L,X="",ct=""){h||(lt.textContent=L,_t.textContent=X,_t.hidden=!X,b.className="toast"+(ct?" k-"+ct:""),b.hidden=!1,Ft(b,"go"),A(dt),dt=v(Ut,dS))}function Ut(){A(dt),dt=0,b.hidden=!0,b.classList.remove("go")}let Gt=0;function oe(L){h||(I.textContent=xS[L]||"In the hole!",I.className="celebrate t-"+L,I.hidden=!1,Ft(I,"go"),A(Gt),Gt=v(fe,pS))}function fe(){A(Gt),Gt=0,I.hidden=!0,I.classList.remove("go")}function Ft(L,X){L.classList.remove(X),L.offsetWidth,L.classList.add(X)}const ce=[{text:"Sink the 8 in the hole!",hand:"",ms:2600},{text:"Move the white ball anywhere in the circle.",hand:"drag",ms:4200},{text:"This line shows where the 8 will roll. Drag to aim.",hand:"aim",ms:4600},{text:"Pull back for power… let go to shoot!",hand:"pull",ms:0}],ee={on:!1,step:-1,timer:0,fired:!1,everyShown:!1,raf:0};function ye(){ee.on=!0,ee.fired=!1,ee.everyShown=!1,Se(0)}function Se(L){A(ee.timer),ee.step=L;const X=ce[L];if(!X){Ce();return}Te(X.text,X.hand),X.ms&&(ee.timer=v(()=>{ee.on&&ee.step===L&&Se(L+1)},X.ms))}function Te(L,X){re.textContent=L,z.hidden=!1,z.setAttribute("data-hand",X||"none"),ge.hidden=!X||X!=="pull"&&!!(r&&o),Ft(z,"go"),Ve(X)}function Ce(){A(ee.timer),z.hidden=!0,Ve("")}function ze(){ee.on=!1,ee.step=-1,Ce()}function Ve(L){ee.raf&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(ee.raf),ee.raf=0;const X=(L==="drag"||L==="aim")&&r&&o&&typeof requestAnimationFrame=="function";if(L!=="pull"&&!X){$.hidden=!0,$.removeAttribute("data-mode");return}if($.setAttribute("data-mode",L),$.hidden=!1,X){const ct=()=>{ee.raf=requestAnimationFrame(ct);try{const K=o.intent,Ct=o.level;if(!K||!Ct)return;const zt=(Ct.heightAt?Ct.heightAt(K.x,K.z):0)+.5,Zt=r.groundToScreen(K.x,zt,K.z);Zt&&Zt.onScreen!==!1&&($.style.transform="translate("+Math.round(Zt.x)+"px,"+Math.round(Zt.y)+"px)")}catch{}};ct()}else $.style.transform=""}function D(){Y()}return c("game:hole",({index:L,level:X,first:ct}={})=>{m=L,p=X||d(L),w=!1,y=0,C={index:L,best:e?e.best(L):null,stars:e?e.stars(L):0,total:e?e.totalStars():0},ft(),Ut(),fe(),G=null,ee.on&&ze();const K=p&&(p.id||p.hole&&p.hole.id);S=!!ct,ct?(e&&e.markTip(K),ye()):p&&p.tip&&e&&!e.seenTip(K)&&(G={index:L,id:K,text:p.tip},Y())}),c("shot:fire",({strokes:L}={})=>{y=L|0,!Jt.hidden&&q&&(A(q),q=v(ft,900)),ee.on&&(ee.fired=!0,ee.step=99,Ce())}),c("shot:end",({outcome:L,picked:X,penalty:ct}={})=>{if(X&&wt("Picked up","Try again for a star!","soft"),ee.on&&L!=="holed"&&!X&&!ee.everyShown){ee.everyShown=!0;const K=p?p.par:2;Te("Every shot counts. Par "+K+" = in "+K+" shots is great!",""),ee.timer=v(()=>{ee.on&&Ce()},4500)}}),c("ball:hop",()=>wt("Too fast!","Softer next time","warn")),c("ball:hazard",({kind:L}={})=>{L==="water"?wt("Splash! +1","Back to where you were","water"):wt("Out of bounds! +1","Back to where you were","warn")}),c("ball:whiff",()=>wt("Missed the 8!","Aim the white at the 8","soft")),c("ball:holed",()=>{ee.on&&ze();const L=p?p.par:3;oe(Lc(Math.max(1,y||1),L,!1).key)}),c("hole:done",(L={})=>{w=!0,ft(),G=null,ee.on&&ze(),g=!1,Z("card",L)}),c("game:round",(L={})=>Z("round",L)),c("ui:pause",()=>{if(f===null&&!M){g=!0,Z("pause");return}g||Promise.resolve().then(()=>a("ui:resume",{}))}),c("ui:sound",({muted:L}={})=>{!!L!==R&&(R=!!L,xt())}),c("ui:skin",({id:L}={})=>{L&&(E=L)}),c("ad:start",()=>{M=!0,Ut(),fe()}),c("ad:end",()=>{M=!1}),typeof window<"u"&&window.addEventListener&&window.addEventListener("keydown",L=>{if(L.repeat)return;const X=L.code;if(X==="KeyP"||X==="Escape"){if(f==="pause"){Vt(),L.preventDefault();return}if(f&&N[f].back){N[f].back(),L.preventDefault();return}f===null&&m!==null&&!w&&!M&&(a("ui:pause",{}),L.preventDefault());return}if(f&&(X==="Enter"||X==="NumpadEnter"||X==="Space")){const ct=L.target;if(ct&&ct.tagName==="BUTTON"||(L.preventDefault(),Date.now()-x<xh))return;const K=N[f];K.primary&&K.primary()}}),{el:U,showTitle(){g=!1,Z("title")},hideAll(){const L=g;g=!1,f!==null&&it(),L&&a("ui:resume",{})},isOpen(){return f!==null},get current(){return f}}}function Mh(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const xc=i=>440*Math.pow(2,(i-69)/12),En=(i,t)=>typeof i=="number"&&Number.isFinite(i)?i:t,yh=1e-4;function kd(i,t,e){const n=2*Math.PI*Math.min(i,e*.45)/e,s=Math.sin(n)/(2*t),r=1+s;return[s/r,0,-s/r,-2*Math.cos(n)/r,(1-s)/r]}function Bd(i,t,e,n,s,r,o,a){const[c,l,u,d,f]=o;let h=0,g=0,x=0,m=0;const p=Math.min(i.length,t+e);for(let w=t,M=0;w<p;w++,M++){const y=(M<n?M/n:1)*Math.exp(-M/s),C=(a()*2-1)*y,R=c*C+l*h+u*g-d*x-f*m;g=h,h=C,m=x,x=R,i[w]+=R*r}}function Yl(i,t){let e=0;for(let n=0;n<i.length;n++)e=Math.max(e,Math.abs(i[n]));if(e>0)for(let n=0;n<i.length;n++)i[n]*=t/e}function SS(i,t,e){for(let s=0;s<16;s++){const r=Math.pow(s/16,1.6)*.3+e()*.02,o=Math.floor(t*(.012+e()*.02)),a=Math.pow(1-r/.38,1.2)*(.5+.5*e());Bd(i,Math.floor(r*t),o,Math.floor(t*.0015),t*(.004+e()*.004),a,kd(2400+e()*3800,1.4+e()*1.6,t),e)}Yl(i,.9)}function Sh(i,t,e,n,s,r){for(let c=0;c<n;c++){const l=kd(900+e()*1500,1.1+e()*1.2,t),u=3.5+e()*2.5,d=.45+.55*e(),f=s+e()*(r-s);for(let h=e()*.2;h<f;h+=1/u*(.82+.36*e())){const g=h>f-.5?(f-h)/.5:1;Bd(i,Math.floor(h*t),Math.floor(t*.03),Math.floor(t*6e-4),t*(.004+e()*.005),d*(.6+.4*g),l,e)}}const o=Math.floor(t*.023),a=Math.floor(t*.037);for(let c=i.length-1;c>=a;c--)i[c]+=.22*i[c-o]+.14*i[c-a];Yl(i,.85)}const wh={white:[1,(i,t,e)=>{for(let n=0;n<i.length;n++)i[n]=e()*2-1}],brown:[1,(i,t,e)=>{let n=0;for(let s=0;s<i.length;s++)n=(n+.02*(e()*2-1))*.998,i[s]=n;Yl(i,.9)}],rustle:[.38,SS],applauseLight:[1.8,(i,t,e)=>Sh(i,t,e,7,.9,1.5)],applauseBig:[3.4,(i,t,e)=>Sh(i,t,e,22,1.9,3.1)]};function wS({getWindow:i,maxVoices:t=14,hardVoices:e=22}={}){const n=Mh(571921),s=[],r=new Map;let o=null,a=null,c=null,l=null,u=!1,d=!0,f=0,h=0;function g(){if(u)return!1;if(!o){const _=i(),v=_&&(_.AudioContext||_.webkitAudioContext);if(!v)return u=!0,!1;try{o=new v,a=o.createGain(),a.gain.value=.8,c=o.createDynamicsCompressor(),c.threshold.value=-12,c.knee.value=10,c.ratio.value=3.5,c.attack.value=.002,c.release.value=.2,l=o.createGain(),l.gain.value=d?1:0,a.connect(c),c.connect(l),l.connect(o.destination);const A=o.createBufferSource();A.buffer=o.createBuffer(1,1,o.sampleRate),A.connect(o.destination),A.onended=()=>{try{A.disconnect()}catch{}},A.start(0)}catch(A){return console.warn("[sfx] Web Audio unavailable",A),u=!0,o=null,!1}}if(o.state!=="running"&&o.state!=="closed")try{const _=o.resume();_&&_.catch&&_.catch(()=>{})}catch{}return!0}const x=()=>!!o&&o.state==="running",m=()=>o?o.currentTime:0;function p(_){if(d=!!_,!l)return;const v=o.currentTime,A=l.gain;try{A.cancelScheduledValues(v),A.setValueAtTime(A.value,v),A.setTargetAtTime(d?1:0,v,.012)}catch{A.value=d?1:0}}function w(_){let v=r.get(_);if(v||!o||!wh[_])return v||null;const[A,U]=wh[_],F=o.sampleRate;return v=o.createBuffer(1,Math.max(1,Math.floor(A*F)),F),U(v.getChannelData(0),F,Mh(571921^_.length*7919^_.charCodeAt(0))),r.set(_,v),v}function M(){w("white"),w("brown"),w("rustle");const _=i(),v=(A,U)=>{try{(_&&_.setTimeout?_.setTimeout.bind(_):setTimeout)(A,U)}catch{}};v(()=>w("applauseLight"),700),v(()=>w("applauseBig"),1400)}function y(_){if(_.done)return;_.done=!0;for(const A of _.nodes){A.onended!==void 0&&(A.onended=null);try{A.disconnect()}catch{}}_.nodes.length=0;const v=s.indexOf(_);v>=0&&s.splice(v,1),h++}function C(_){const v=o.currentTime;for(const A of _.nodes)if(A.stop)try{A.stop(v)}catch{}y(_)}function R(){const _=o.currentTime;for(let v=s.length-1;v>=0;v--)s[v].end<_-1&&C(s[v])}function E(_=1,v=1){if(!x()||!d)return null;if(R(),s.length>=t){if(_<2)return null;if(s.length>=e){let U=null;for(const F of s)(!U||F.prio<U.prio||F.prio===U.prio&&F.t0<U.t0)&&(U=F);if(!U||U.prio>_)return null;C(U)}}const A=S(_,v);return s.push(A),f++,A}function S(_,v){const A=o.currentTime+.002,U=o.createGain();U.gain.value=v,U.connect(a);const F={prio:_,t0:A,end:A,done:!1,pending:0,nodes:[U],out:U},H=()=>{F.pending--,F.pending<=0&&y(F)},st=V=>(F.nodes.push(V),V),J=(V,N,W)=>(st(V),F.pending++,V.onended=H,F.end=Math.max(F.end,W),V),xt=(V,N,W,Z,it,O)=>(Z=Math.max(yh*2,Z),V.setValueAtTime(0,N),V.linearRampToValueAtTime(Z,N+W),it>0&&V.setValueAtTime(Z,N+W+it),V.exponentialRampToValueAtTime(yh,N+W+it+O),N+W+it+O),et=(V,N,W,Z)=>{if(V.setValueAtTime(N,Z),W)for(const[it,O]of W)V.exponentialRampToValueAtTime(Math.max(1,it),Z+Math.max(.001,O))};return F.filter=(V,N,W=.7,Z=U,it=null,O=A)=>{const j=st(o.createBiquadFilter());return j.type=V,j.Q.value=W,et(j.frequency,N,it,O),j.connect(Z),j},F.tone=V=>{const N=A+En(V.t,0),W=En(V.a,.002),Z=En(V.hold,0),it=En(V.d,.1),O=o.createOscillator();O.type=V.type||"sine",et(O.frequency,Math.max(1,En(V.f,440)),V.to,N),V.detune&&(O.detune.value=V.detune);const j=st(o.createGain()),pt=xt(j.gain,N,W,En(V.peak,.2),Z,it)+.02;if(O.connect(j),j.connect(V.dest||U),V.vib){const[k,rt,ht=0]=V.vib,Mt=o.createOscillator(),Rt=st(o.createGain());Mt.frequency.value=k,Rt.gain.setValueAtTime(0,N),Rt.gain.linearRampToValueAtTime(rt,N+ht+.08),Mt.connect(Rt),Rt.connect(O.frequency),J(Mt,N,pt),Mt.start(N),Mt.stop(pt)}return J(O,N,pt),O.start(N),O.stop(pt),O},F.noise=V=>{const N=w(V.buf||"white");if(!N)return null;const W=A+En(V.t,0),Z=En(V.a,.001),it=En(V.hold,0),O=En(V.d,.05),j=o.createBufferSource();j.buffer=N;const pt=En(V.rate,1);pt!==1&&(j.playbackRate.value=pt);const k=st(o.createGain()),rt=xt(k.gain,W,Z,En(V.peak,.2),it,O)+.02;k.connect(V.dest||U),V.filter?j.connect(F.filter(V.filter.type,V.filter.f,En(V.filter.q,.7),k,V.filter.to,W)):j.connect(k);const ht=N.duration||N.length/N.sampleRate,Mt=(rt-W)*pt,Rt=V.from0?0:Math.max(0,(ht-Mt)*n());return J(j,W,rt),V.from0?j.start(W):j.start(W,Rt,Math.min(ht-Rt,Mt+.01)),j.stop(rt),j},F}return{start:g,ready:x,now:m,rng:n,setOutput:p,voice:E,buffer:w,prewarm:M,get ctx(){return o},stats:()=>({active:s.length,created:f,released:h})}}const Mr=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,vc=i=>i<0?0:i>1?1:i,bS=["pointerdown","pointerup","touchend","mousedown","click","keydown"],ES=["ui:play","ui:next","ui:retry","ui:pause","ui:resume","ui:overview","ui:skin"];function TS({events:i,getWindow:t}={}){const e=t||(()=>typeof window<"u"?window:null),n=wS({getWindow:e}),s=n.rng;let r=!1,o=!1,a=!1,c=!1;function l(){const k=e(),rt=k&&k.navigator&&k.navigator.userActivation;rt&&rt.hasBeenActive===!1||d()}function u(k){const rt=e();if(!(!rt||!rt.addEventListener||k===a)){a=k;for(const ht of bS)k?rt.addEventListener(ht,l,{capture:!0,passive:!0}):rt.removeEventListener(ht,l,{capture:!0,passive:!0})}}function d(){if(!n.start()){u(!1);return}const k=n.ctx;if(!c){c=!0,n.setOutput(!r&&!o),n.prewarm();try{k.onstatechange=()=>{k.state==="running"?u(!1):k.state!=="closed"&&u(!0)}}catch{}}k.state==="running"&&u(!1)}u(!0);function f(){n.setOutput(!r&&!o)}const h=new Map;function g(k,rt){if(r||o||!n.ready())return!1;const ht=n.now(),Mt=h.get(k);return Mt!==void 0&&ht-Mt<rt&&ht>=Mt?!1:(h.set(k,ht),!0)}const x=k=>1+(s()-.5)*2*k;function m(k,rt,ht,Mt,Rt){const tt=xc(ht);k.tone({t:rt,f:tt,a:.003,d:Mt,peak:Rt}),k.tone({t:rt,f:tt*3.93,a:.001,d:Mt*.16,peak:Rt*.28}),k.noise({t:rt,filter:{type:"bandpass",f:Math.min(tt*2.5,9e3),q:1.5},a:5e-4,d:.008,peak:Rt*.22})}function p(k,rt,ht,Mt,Rt){const tt=xc(ht),gt=[[1,1,1],[2.76,.42,.45],[5.4,.16,.22]];for(const[B,Q,It]of gt)tt*B<14e3&&k.tone({t:rt,f:tt*B,a:.001,d:Mt*It,peak:Rt*Q})}function w(k,rt,ht,Mt,Rt){const tt=xc(ht),gt=k.filter("lowpass",500,1.2,k.out,[[tt*5+1200,.045],[tt*3+700,.25]],k.t0+rt),B=[5.6,tt*.007,.14];k.tone({t:rt,type:"sawtooth",f:tt,detune:-7,a:.025,hold:Mt,d:.16,peak:Rt,dest:gt,vib:B}),k.tone({t:rt,type:"sawtooth",f:tt,detune:7,a:.025,hold:Mt,d:.16,peak:Rt*.8,dest:gt})}function M(k,rt){const ht=n.voice(3,rt?.5:.36);if(!ht)return;const Mt=rt?3.4:1.8;ht.noise({t:k,buf:rt?"applauseBig":"applauseLight",from0:!0,a:.06,hold:Mt-.5,d:.45,peak:1,filter:{type:"highpass",f:260,q:.6}})}function y(k){const rt=n.voice(1);if(!rt)return;const ht=.3+.55*vc(k),Mt=x(.03);rt.tone({f:1250*Mt,to:[[760*Mt,.03]],a:8e-4,d:.035,peak:.34*ht}),rt.noise({filter:{type:"bandpass",f:2300*Mt,q:1.1},a:5e-4,d:.014,peak:.28*ht}),rt.tone({f:210,to:[[150,.05]],a:.002,d:.05,peak:.22*ht})}function C(k,rt=1){const ht=n.voice(2);if(!ht)return;const Mt=vc(Mr(k)/10),Rt=(.22+.78*Math.pow(Mt,.6))*rt,tt=x(.03),gt=ht.filter("lowpass",2600+1e4*Mt,.6);ht.noise({filter:{type:"highpass",f:1900*tt,q:.7},a:4e-4,d:.011,peak:.9*Rt,dest:gt});const B=(1650+550*Mt)*tt,Q=[[1,.55,.06],[1.505,.32,.04],[2.27,.2,.025],[3.08,.1,.016]];for(const[It,jt,Bt]of Q)ht.tone({f:B*It,to:[[B*It*.985,Bt]],a:6e-4,d:Bt*(.85+.3*Mt),peak:jt*Rt,dest:gt});ht.tone({f:640*tt,to:[[430*tt,.03]],a:.001,d:.03,peak:.22*Rt,dest:gt})}function R(k,rt,ht,Mt=1){const Rt=[[1,.5,.07],[2.31,.25,.04],[3.93,.1,.02]];for(const[tt,gt,B]of Rt)k.tone({f:ht*tt,to:[[ht*tt*.97,B*Mt]],a:8e-4,d:B*Mt,peak:gt*rt});k.noise({filter:{type:"bandpass",f:ht*4.5,q:1.2},a:5e-4,d:.01,peak:.3*rt}),k.tone({f:140,to:[[105,.06]],a:.002,d:.06,peak:.22*rt})}function E({id:k,kind:rt,speed:ht}){const Mt=Mr(ht);if(Mt<.3||!g("wall"+Mr(k),.045))return;const Rt=vc(Mt/8),tt=.15+.85*Math.pow(Rt,.7),gt=x(.04),B=n.voice(0);if(B)switch(rt){case"cushion":B.tone({f:150*gt,to:[[92*gt,.16]],a:.002,d:.16,peak:.55*tt}),B.noise({buf:"brown",filter:{type:"lowpass",f:600,q:.7},a:.002,d:.07,peak:.5*tt}),B.tone({type:"triangle",f:225*gt,to:[[300*gt,.05],[270*gt,.18]],a:.004,d:.17,peak:.13*tt,vib:[16,8,0]}),B.noise({filter:{type:"bandpass",f:1400,q:.8},a:5e-4,d:.012,peak:.12*tt});break;case"hedge":B.noise({buf:"rustle",from0:!0,rate:.85+.35*s(),a:.002,hold:.12,d:.2,peak:.55*(.4+.6*tt)}),B.noise({buf:"brown",filter:{type:"lowpass",f:380,q:.7},a:.003,d:.07,peak:.35*tt});break;case"bumper":{const Q=B.filter("lowpass",2400,.8);B.tone({type:"triangle",f:170*gt,to:[[430*gt,.045],[330*gt,.32]],vib:[24,26,0],a:.003,d:.34,peak:.36*(.35+.65*tt),dest:Q}),B.tone({f:120,to:[[78,.08]],a:.002,d:.08,peak:.4*tt}),B.noise({filter:{type:"bandpass",f:3e3,q:1.5},a:5e-4,d:.006,peak:.18*tt});break}case"tree":R(B,tt,300*gt,.75),B.noise({buf:"rustle",from0:!0,rate:1.1+.3*s(),a:.004,hold:.04,d:.15,peak:.22*tt});break;case"lollipop":R(B,tt*.9,720*gt,.7);break;case"post":R(B,tt,520*gt);break;default:R(B,tt,430*gt);break}}function S(){if(!g("hop",.12))return;const k=n.voice(2);if(!k)return;const rt=x(.03);k.noise({filter:{type:"bandpass",f:4200*rt,q:5},a:5e-4,d:.009,peak:.5}),k.tone({f:1850*rt,a:.001,d:.13,peak:.22}),k.tone({f:1850*2.76*rt,a:.001,d:.05,peak:.09}),k.noise({t:.075,filter:{type:"bandpass",f:3700*rt,q:4},a:5e-4,d:.008,peak:.2})}function _(k){if(!g("holed",.3))return;const rt=n.voice(2);if(!rt)return;const ht=Mr(k,1),Mt=ht>2.5?4:ht>.9?3:2,Rt=[[0,3e3,.3],[.05,2650,.24],[.092,3250,.18],[.125,2500,.13]];for(let gt=0;gt<Mt;gt++){const[B,Q,It]=Rt[gt];rt.noise({t:B,filter:{type:"bandpass",f:Q*x(.04),q:3.5},a:5e-4,d:.016,peak:It})}const tt=Rt[Mt-1][0]+.05;rt.tone({t:tt,f:310,to:[[205,.22]],a:.002,d:.26,peak:.5}),rt.tone({t:tt,f:640,to:[[470,.1]],a:.001,d:.11,peak:.13}),rt.noise({t:tt,filter:{type:"bandpass",f:820,q:2.5},a:.001,d:.1,peak:.26}),rt.tone({t:tt+.13,f:285,to:[[215,.11]],a:.002,d:.12,peak:.2}),rt.noise({t:tt+.24,filter:{type:"bandpass",f:1900,q:3},a:5e-4,d:.01,peak:.08})}function v(k=1){const rt=n.voice(2,k);if(rt){rt.tone({f:260,to:[[720,.07]],a:.002,d:.09,peak:.35}),rt.noise({filter:{type:"lowpass",f:5200,q:.8,to:[[500,.45]]},a:.004,d:.5,peak:.5}),rt.noise({buf:"brown",filter:{type:"lowpass",f:420,q:.7},a:.004,d:.26,peak:.42});for(let ht=0;ht<4;ht++){const Mt=480+s()*520;rt.tone({t:.13+ht*.07+s()*.03,f:Mt,to:[[Mt*1.9,.045]],a:.002,d:.05,peak:.11})}for(let ht=0;ht<3;ht++)rt.noise({t:.2+s()*.3,filter:{type:"bandpass",f:4200+s()*2e3,q:3},a:5e-4,d:.012,peak:.09})}}function A(k=1){const rt=n.voice(2,k);rt&&(rt.noise({filter:{type:"bandpass",f:1900,q:1.2,to:[[340,.4]]},a:.12,d:.3,peak:.36}),rt.tone({f:900,to:[[260,.42]],a:.02,hold:.1,d:.32,peak:.08}),rt.tone({t:.44,f:112,to:[[56,.16]],a:.003,d:.17,peak:.5}),rt.noise({t:.44,buf:"brown",filter:{type:"lowpass",f:320,q:.7},a:.003,d:.1,peak:.36}))}function U(k){if(!g("whiff",.3))return;const rt=n.voice(1);if(rt){const ht=rt.filter("lowpass",1600,.7);rt.tone({type:"triangle",f:540,to:[[300,.3]],vib:[7,14,.05],a:.03,d:.3,peak:.22,dest:ht}),rt.tone({f:270,to:[[150,.3]],a:.03,d:.28,peak:.1})}k==="water"&&g("hazard",.3)?v(.45):k==="oob"&&g("hazard",.3)&&A(.45)}function F(){if(!g("drop",.2))return;const k=n.voice(1);k&&(k.tone({f:380,to:[[1e3,.035]],a:.001,d:.05,peak:.28}),k.noise({filter:{type:"bandpass",f:2500,q:1.5},a:5e-4,d:.006,peak:.14}),k.tone({t:.085,f:700,to:[[520,.03]],a:.001,d:.035,peak:.08}))}function H(k){if(!g("ui",.06))return;const rt=n.voice(1);rt&&(rt.tone({f:1500,to:[[1e3,.03]],a:.001,d:.035,peak:.26}),rt.noise({filter:{type:"highpass",f:3e3,q:.7},a:5e-4,d:.004,peak:.1}),k&&rt.tone({t:.05,f:2e3,to:[[1500,.03]],a:.001,d:.04,peak:.2}))}const st=72,J=74,xt=76,et=79,V=69,N=67,W=84,Z=88,it=91,O=96;function j(k){if(!g("jingle",.5))return;const rt=k==="ace"||k==="albatross"||k==="eagle",ht=n.voice(3,rt?.62:.7);if(ht)if(rt){const Mt=[[0,st,.06],[.11,xt,.06],[.22,et,.06],[.34,W,.6]];for(const[tt,gt,B]of Mt)w(ht,tt,gt,B,.2),m(ht,tt,gt,.35,.22);w(ht,.34,et,.6,.1),w(ht,.34,xt,.6,.08);const Rt=[W,86,Z,it,93,O,98,100];for(let tt=0;tt<Rt.length;tt++)p(ht,.48+tt*.04,Rt[tt],.5,.07);if(k!=="eagle"){for(const tt of[W,Z,it,O])p(ht,1,tt,1.2,.08);m(ht,1,st,.8,.18)}M(.3,!0)}else if(k==="birdie"){const Mt=[[0,st],[.085,xt],[.17,et],[.255,W]];for(const[Rt,tt]of Mt)m(ht,Rt,tt,Rt>.2?.7:.3,.28);p(ht,.255,W,.9,.09),p(ht,.255,Z,.9,.06),M(.28,!1)}else k==="par"?(p(ht,0,et,1,.2),m(ht,0,et,.3,.12),p(ht,.16,W,1.3,.22),m(ht,.16,W,.5,.13)):k==="picked"?(m(ht,0,J,.35,.18),m(ht,.17,V,.55,.16)):(m(ht,0,xt,.3,.22),m(ht,.15,J,.3,.2),m(ht,.3,N,.3,.16),m(ht,.45,st,.75,.22),p(ht,.45,W,.6,.05))}if(i&&i.on){i.on("shot:fire",k=>{d(),g("shot",.05)&&y(Mr(k&&k.power,.5))}),i.on("ball:contact",k=>{g("clack",.03)&&C(k&&k.speed)}),i.on("ball:ballhit",k=>{g("clack",.03)&&C(k&&k.speed,.7)}),i.on("ball:wall",k=>E(k||{})),i.on("ball:hop",()=>S()),i.on("ball:holed",k=>_(k&&k.speed)),i.on("ball:hazard",k=>{g("hazard",.3)&&(k&&k.kind==="water"?v(1):A(1))}),i.on("ball:whiff",k=>U(k&&k.reason)),i.on("ball:drop",()=>F()),i.on("hole:done",k=>j(k&&k.term&&k.term.key));for(const k of ES)i.on(k,()=>H(k==="ui:play"||k==="ui:next"||k==="ui:retry"||k==="ui:resume"));i.on("ui:sound",k=>{pt.setMuted(!!(k&&k.muted)),H(!0)}),i.on("audio:external",k=>pt.setExternalMute(!!(k&&k.muted)))}const pt={unlock:d,setMuted(k){r=!!k,f()},setExternalMute(k){o=!!k,f()},get muted(){return r},stats:()=>n.stats()};return pt}const fs=typeof window<"u"&&window.__ebgBoot?window.__ebgBoot:null,kr=({pct:i,label:t})=>fs!==null?fs.stage(i,t):void 0;fs!==null&&fs.codeReady&&fs.codeReady();await kr(Gs.course);await Rh();qd();const Kl=document.getElementById("stage"),Wr=document.getElementById("ui");Object.assign(Kl.style,{position:"fixed",inset:"0",overflow:"hidden"});Object.assign(Wr.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"10"});PS();const Fe=np(),yn=await jp(tp),qe=Y_(Kl),Qe=SM(qe),en=Kp({events:Fe}),$l=yn.isFresh();let ps=$l?0:Math.min(yn.nextIndex(),yi.length-1),dn=Bh(yi[ps]),Hn=Id(qe,dn),bh=!0;qe.setRound(dn.round);Qe.setLevel(dn);await kr(Gs.balls);const cr=_2(qe,{uiRoot:Wr,rig:Qe});cr.setSkin(yn.skin);cr.setRound(dn.round);const Hd=A2(qe,{events:Fe,play:en}),AS=X2(qe);await kr(Gs.flags);const Ks=uS(Wr,{events:Fe}),Gd=yS(Wr,{events:Fe,progress:yn,holes:yi,rounds:Br,rig:Qe,play:en}),CS=76,Vd=(i={})=>{Qe.setInsets&&Qe.setInsets({top:Math.max(CS,i.top||0),right:i.right||0,bottom:i.bottom||0,left:i.left||0})},sa=lS({stage:qe,rig:Qe,play:en,events:Fe,uiRoot:Wr,onInsets:Vd});Vd(sa.insets?sa.insets():{});const ma=TS({events:Fe});ma.setMuted(yn.muted);const jl=document.createElement("div");jl.textContent=`v${Th}`;Object.assign(jl.style,{position:"fixed",right:"max(10px, env(safe-area-inset-right))",bottom:"max(6px, env(safe-area-inset-bottom))",zIndex:"5",font:"11px system-ui, sans-serif",letterSpacing:".06em",color:"rgba(255,255,255,.55)",pointerEvents:"none"});document.body.appendChild(jl);const Ue={menuOpen:!1,paused:!1,ad:!1,gameplay:!1,holesThisSession:0,roundPending:null,loading:!1};function wi(){const i=!Ue.menuOpen&&!Ue.paused&&!Ue.ad&&!Ue.loading&&en.state!=="idle"&&en.state!=="done";sa.enable(i),i!==Ue.gameplay&&(Ue.gameplay=i,i?Kd():$d())}function ra(){ma.setExternalMute(wc()),Fe.emit("audio:external",{muted:wc()})}Qd(ra);ra();function Xr(i){ps=i,Ue.loading=!0,bh&&dn.id===yi[i].id||(Hn.dispose(),dn=Bh(yi[i]),Hn=Id(qe,dn)),bh=!1,qe.setRound(dn.round),cr.setRound(dn.round),Qe.setLevel(dn),Hn.faceCamera(qe.camera),Hd.clear(),en.load(dn,i),Ks.setHole(dn,i),Ks.setStrokes(0,dn.par),Ks.show(!0),jd({round:dn.round,hole:i+1}),Fe.emit("game:hole",{index:i,level:dn,first:$l&&i===0&&Ue.holesThisSession===0}),wi(),Qe.intro(en).then(()=>{ps===i&&(Ue.loading=!1,en.state==="ready"&&Qe.frameShot(en),Hn.setFlow(1),wi())})}async function Wd(){if(!(Ue.holesThisSession<2)){Ue.ad=!0,Fe.emit("ad:start",{}),ra(),wi();try{await Jd()}catch(i){console.error(i)}Ue.ad=!1,ra(),Fe.emit("ad:end",{}),wi()}}function RS(i){const t=Br.find(r=>r.id===i),e=i===1?0:9,n=t.holes.map((r,o)=>({index:e+o,strokes:yn.best(e+o),par:r.par})),s=yn.roundTotal(i);return{round:i,name:t.name,holes:n,total:s.total,par:s.par,rel:Ic(s.total,s.par),complete:s.complete}}Fe.on("shot:ready",({strokes:i,par:t})=>{Ks.setStrokes(i,t),Ue.loading||Qe.frameShot(en),Hn.setFlow(1),wi()});Fe.on("shot:fire",({strokes:i})=>{Qe.userMoved=!1,Ks.setStrokes(i,en.level.par),Hn.setFlow(0),ma.unlock()});Fe.on("shot:end",({strokes:i,par:t})=>Ks.setStrokes(i,t));Fe.on("ball:contact",()=>cr.flash());Fe.on("ball:holed",()=>Hn.wiggleFlag());Fe.on("hole:done",({index:i,strokes:t,stars:e,term:n,level:s})=>{const r=yn.roundTotal(s.round);yn.record(i,t,e),Ue.holesThisSession+=1,(n.key==="ace"||n.key==="albatross")&&Ql();const o=yi.filter((c,l)=>yn.best(l)!==null).length;if(Zd(Math.round(o/yi.length*100)),i===8||i===17){const c=yn.roundTotal(s.round);c.complete&&(!r.complete||c.total<r.total)&&Ql(),Ue.roundPending=s.round}wi()});Fe.on("ui:next",async()=>{if(Ue.roundPending){const i=Ue.roundPending;Ue.roundPending=null,Fe.emit("game:round",RS(i));return}if(await Wd(),ps>=yi.length-1){Gd.showTitle();return}Xr(ps+1)});Fe.on("ui:retry",async()=>{Ue.roundPending=null,en.state==="done"&&await Wd(),Ue.paused=!1,Xr(ps)});Fe.on("ui:play",({index:i})=>{Ue.roundPending=null,Ue.paused=!1,Xr(i)});Fe.on("ui:pause",()=>{Ue.paused=!0,wi()});Fe.on("ui:resume",()=>{Ue.paused=!1,wi()});Fe.on("ui:menu",({open:i})=>{Ue.menuOpen=!!i,wi()});Fe.on("ui:overview",({on:i})=>Qe.overview(!!i));Fe.on("ui:sound",({muted:i})=>{yn.setMuted(!!i),ma.setMuted(!!i)});Fe.on("ui:skin",({id:i})=>{yn.setSkin(i),cr.setSkin(i)});Kl.addEventListener("pointerdown",()=>{Ue.loading&&Qe.skipIntro&&Qe.skipIntro()});qe.onResize(()=>{Hn.faceCamera(qe.camera),en.state==="ready"&&!Qe.userMoved&&Qe.frameShot(en)});let _c=0,Eh=0;function Xd(i){requestAnimationFrame(Xd);const t=_c?Math.min((i-_c)/1e3,.1):0;_c=i,Eh+=t,!Ue.paused&&!Ue.ad&&en.update(t);const e=en.balls();en.state==="rolling"&&!Qe.userMoved&&Qe.follow(e[1].x,e[1].z),Qe.update(t),Hn&&Hn.faceCamera(qe.camera),cr.update(e,t),AS.update(en,t),Hn.update(t,Eh),sa.update(t),Hd.update(t),qe.render()}window.ebg={version:Th,events:Fe,play:en,stage:qe,rig:Qe,progress:yn,HOLES:yi,ROUNDS:Br,loadHole:Xr,get level(){return dn},get course(){return Hn}};if(fs!==null){if(await kr(Gs.warm),qe.renderer&&qe.scene&&qe.camera)try{await Promise.race([qe.renderer.compileAsync(qe.scene,qe.camera),new Promise(i=>setTimeout(i,4e3))])}catch(i){console.error(i)}for(let i=0;i<3;i++)await kr({pct:Gs.warm.pct+3+i*1.5,label:Gs.warm.label}),qe.render();await fs.ready()}Yd();requestAnimationFrame(Xd);Xr(ps);$l||Gd.showTitle();function PS(){window.addEventListener("keydown",i=>{const t=i.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown"].includes(i.code)&&i.preventDefault()}),window.addEventListener("wheel",i=>i.preventDefault(),{passive:!1}),window.addEventListener("contextmenu",i=>i.preventDefault())}

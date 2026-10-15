import{S as Vs}from"./index-BitzDKym.js";const Lh="0.3.1",Sc="8bg:",Yo={script:5e3,init:6e3,adStart:12e3,adMax:15e4};let js=null,Jn="none",Yr=null,Ni=null,Ws=0,Ko=!1,zi=!1,ns=!1,Ql=-1;const wc=new Set,bc=new Map,Ih=()=>typeof window<"u"?window:null,kn=(...i)=>{try{console.warn("[platform]",...i)}catch{}};function Wi(i){if(js)try{const t=i(js);t&&typeof t.catch=="function"&&t.catch(e=>kn(e))}catch(t){kn(t)}}function tu(i,t,e){let n=0;return Promise.race([Promise.resolve(i).catch(()=>e),new Promise(s=>{n=setTimeout(()=>s(e),t)})]).finally(()=>clearTimeout(n))}function $o(){const i=Ec();for(const t of[...wc])try{t(i)}catch(e){kn(e)}}function Dh(){try{const i=Ih();return i&&i.localStorage||null}catch{return null}}function zh(){return Yr||(Yr=(async()=>{try{const i=Ih();if(!i||!i.__cgSdk)return{env:Jn};const e=await tu(i.__cgSdk,Yo.script,!1)&&i.CrazyGames&&i.CrazyGames.SDK;if(!e||typeof e.init!="function")return{env:Jn};if(!await tu(Promise.resolve().then(()=>e.init()).then(()=>!0,o=>(kn("init failed",o),!1)),Yo.init,!1))return{env:Jn};const s=String(e.environment||"disabled");if(s!=="crazygames"&&s!=="local")return Jn=s,{env:Jn};const r=e.game;try{ns=!!(r.settings&&r.settings.muteAudio)}catch{ns=!1}try{r.addSettingsChangeListener(o=>{let a=ns;try{a=!!((o&&"muteAudio"in o?o:r.settings)||{}).muteAudio}catch{}a!==ns&&(ns=a,$o())})}catch(o){kn("settings listener",o)}try{e.data&&typeof e.data.getItem=="function"&&(e.data.getItem(Sc+"probe"),Ni=e.data)}catch(o){kn("data module off",o&&(o.code||o.message||o)),Ni=null}js=e,Jn=s,Ws===1&&Wi(o=>o.game.loadingStart()),ns&&$o()}catch(i){kn("SDK unavailable",i),js=null,Ni=null,(Jn==="crazygames"||Jn==="local")&&(Jn="none")}return{env:Jn}})(),Yr)}function Zd(){Ws||(Ws=1,Wi(i=>i.game.loadingStart()))}function Jd(){if(Ws===2)return;const i=Ws;Ws=2,i===1&&Wi(t=>t.game.loadingStop())}function Qd(){Ko||zi||(Ko=!0,Wi(i=>i.game.gameplayStart()))}function tp(){Ko&&(Ko=!1,Wi(i=>i.game.gameplayStop()))}function eu(){Wi(i=>i.game.happytime())}function ep(i){Wi(t=>i?t.game.setGameContext(i):t.game.clearGameContext())}function np(i){const t=Math.max(0,Math.min(100,Math.round(Number(i)||0)));t<=Ql||(Ql=t,Wi(e=>e.game.reportGameCompletedPercentage(t)))}function ip(){return!js||zi?Promise.resolve():new Promise(i=>{let t=!1,e=0,n=0;const s=()=>{t||(t=!0,clearTimeout(e),i())},r=()=>{clearTimeout(n),zi&&(zi=!1,$o()),s()};e=setTimeout(()=>{zi||s()},Yo.adStart);const o={adStarted:()=>{clearTimeout(e),clearTimeout(n),zi||(zi=!0,$o()),n=setTimeout(r,Yo.adMax)},adFinished:r,adError:a=>{const c=a&&a.code;c&&c!=="adCooldown"&&c!=="adsDisabledBasicLaunch"&&c!=="unfilled"&&kn("ad",c),r()}};try{const a=js.ad.requestAd("midgame",o);a&&typeof a.then=="function"&&a.then(void 0,()=>r())}catch(a){kn("ad",a),r()}})}function Ec(){return ns||zi}function sp(i){return typeof i!="function"?()=>{}:(wc.add(i),()=>{wc.delete(i)})}const rp={async load(i){await zh();const t=Sc+i;if(Ni)try{const e=Ni.getItem(t);if(e!=null)return String(e);const n=nu(t);if(n!=null){try{Ni.setItem(t,n)}catch(s){kn("migrate",s)}return n}return null}catch(e){kn("data load",e)}return nu(t)},save(i,t){const e=Sc+i,n=String(t);if(Ni)try{Ni.setItem(e,n);return}catch(s){kn("data save",s)}op(e,n)}};function nu(i){const t=Dh();if(t)try{const e=t.getItem(i);if(e!=null)return String(e)}catch{}return bc.has(i)?bc.get(i):null}function op(i,t){bc.set(i,t);const e=Dh();if(e)try{e.setItem(i,t)}catch{}}function ap(){const i=new Map;return{on(t,e){return i.has(t)||i.set(t,new Set),i.get(t).add(e),()=>i.get(t).delete(e)},emit(t,e){const n=i.get(t);if(n)for(const s of[...n])try{s(e)}catch(r){console.error("[events] "+t,r)}}}}const Tc=Math.PI/180,Hs=i=>Math.round(i*100)/100;function Qn(i,t=12){const e=i.length,n=[];for(let s=0;s<e;s++){const r=i[s],o=r[2]||0;if(!o){n.push([r[0],r[1]]);continue}const a=i[(s+e-1)%e],c=i[(s+1)%e];let l=a[0]-r[0],u=a[1]-r[1],d=c[0]-r[0],f=c[1]-r[1];const h=Math.hypot(l,u),g=Math.hypot(d,f);l/=h,u/=h,d/=g,f/=g;const x=Math.acos(Math.max(-1,Math.min(1,l*d+u*f)));let m=o/Math.tan(x/2),p=o;const w=.5*Math.min(h,g);m>w&&(m=w,p=m*Math.tan(x/2));const M=l+d,y=u+f,C=Math.hypot(M,y),R=p/Math.sin(x/2),b=r[0]+M/C*R,S=r[1]+y/C*R,_=Math.atan2(r[1]+u*m-S,r[0]+l*m-b);let v=Math.atan2(r[1]+f*m-S,r[0]+d*m-b)-_;for(;v>Math.PI;)v-=2*Math.PI;for(;v<-Math.PI;)v+=2*Math.PI;const A=Math.max(1,Math.ceil(Math.abs(v)/(t*Tc)));for(let U=0;U<=A;U++)n.push([Hs(b+p*Math.cos(_+v*U/A)),Hs(S+p*Math.sin(_+v*U/A))])}return n.filter((s,r)=>{const o=n[(r+n.length-1)%n.length];return r===0&&n.length>1?!(s[0]===n[n.length-1][0]&&s[1]===n[n.length-1][1]):!(s[0]===o[0]&&s[1]===o[1])})}function iu(i,t,e,n,s,r=10){const o=[],a=Math.max(2,Math.ceil((s-n)/r));for(let c=0;c<=a;c++){const l=(n+(s-n)*c/a)*Tc;o.push([Hs(i[0]+e*Math.cos(l)),Hs(i[1]+e*Math.sin(l))])}for(let c=a;c>=0;c--){const l=(n+(s-n)*c/a)*Tc;o.push([Hs(i[0]+t*Math.cos(l)),Hs(i[1]+t*Math.sin(l))])}return o}const cp=[{id:"g1",name:"Hello, Eight!",par:2,circle:5,size:[30,12],tee:[4,6],cup:[21,6],tip:"Sink the 8 in the hole!",border:"wall",ground:Qn([[0,.8,4],[15,0,8],[30,.8,4],[30,11.2,4],[15,12,8],[0,11.2,4]]),zones:[{surface:"green",circle:{c:[21,6],r:3.6}}],props:[{type:"sign",at:[1.5,-1.4]},{type:"flowers",at:[6,-1.3]},{type:"flowers",at:[11,13.3]},{type:"flowers",at:[19,-1.3]},{type:"flowers",at:[25,13.2]},{type:"tree",at:[-3.2,13.5]},{type:"tree",at:[33.5,-2.2]},{type:"bush",at:[27,13.4]},{type:"bush",at:[-1.4,3]},{type:"statue8",at:[33.6,6]}]},{id:"g2",name:"Easy Does It",par:2,circle:5,size:[34,14],tee:[4,7],cup:[16,7],tip:"Softer is smarter.",border:"wall",ground:Qn([[0,2,3],[9,1.5,3],[11,3,2],[16,1,5],[21,3.5,2],[34,3.5,3],[34,10.5,3],[21,10.5,2],[16,13,5],[11,11,2],[9,12.5,3],[0,12,3]]),zones:[{surface:"green",circle:{c:[16,7],r:3.6}}],props:[{type:"sign",at:[1,.2]},{type:"flowers",at:[10.5,1.2]},{type:"flowers",at:[10.5,12.8]},{type:"flowers",at:[16,-.6]},{type:"flowers",at:[16,14.6]},{type:"bush",at:[26,2]},{type:"bush",at:[29,12]},{type:"flowerbox",at:[22,12.3]},{type:"flowerbox",at:[31,1.7]},{type:"tree",at:[37.5,7]},{type:"tree",at:[24,15.5]}]},{id:"g3",name:"Side Swipe",par:3,circle:4,size:[30,18],tee:[2.8,3.54],cup:[25,15],tip:"Hit its side!",border:"hedge",ground:Qn([[0,5.73,1.5],[2.92,0,1.5],[22,0,6],[30,3,5],[30,18,4],[17,18,4],[15,9.5,3],[0,10,3]]),zones:[{surface:"green",circle:{c:[25,15],r:3.8}}],props:[{type:"bush",at:[-1,2.2]},{type:"bush",at:[1.2,-1]},{type:"bush",at:[-1,7.5]},{type:"fountain",at:[6.5,14.5]},{type:"flowers",at:[2,12.5]},{type:"flowers",at:[11.5,12]},{type:"flowers",at:[12,16.5]},{type:"flowers",at:[12,-1.2]},{type:"tree",at:[33.5,9]},{type:"tree",at:[26,-3.2]}]},{id:"g4",name:"Bank Job",par:3,circle:4,size:[26,15],tee:[3,3],cup:[23,3],tip:"Bounce it off the wall!",border:"wall",ground:Qn([[0,.5,3],[11.5,0,1.5],[11.5,8.5,1.5],[14.5,8.5,1.5],[14.5,0,1.5],[26,.5,3],[26,15,4],[0,15,4]]),zones:[{surface:"green",circle:{c:[23,3],r:3.8}}],props:[{type:"flowerbox",at:[13,2]},{type:"flowerbox",at:[13,5.2]},{type:"flowers",at:[13,7.6]},{type:"tree",at:[-3.3,7]},{type:"flowers",at:[6,16.3]},{type:"flowers",at:[20,16.3]},{type:"bush",at:[27.6,9]},{type:"sign",at:[1,-1]},{type:"tree",at:[29.3,-1.5]}]},{id:"g5",name:"Lollipop Lane",par:3,circle:3,size:[40,20],tee:[4,10],cup:[36,10],tip:"Move the white ball!",border:"wall",ground:Qn([[0,3,3],[10,0,6],[30,0,6],[40,3,3],[40,17,3],[30,20,6],[10,20,6],[0,17,3]]),zones:[{surface:"green",circle:{c:[36,10],r:3.5}}],posts:[...[4,8,12,16].flatMap(i=>[12,20,28].map(t=>({at:[t,i],r:.6,kind:"lollipop"}))),...[6,10,14].flatMap(i=>[16,24].map(t=>({at:[t,i],r:.6,kind:"lollipop"})))],props:[{type:"lollipop",at:[-3.2,3]},{type:"lollipop",at:[43.2,17]},{type:"lollipop",at:[20,23.2]},{type:"flowers",at:[20,-1.2]},{type:"flowers",at:[8,20.6]},{type:"flowers",at:[32,20.6]},{type:"tree",at:[-3.5,15]},{type:"tree",at:[43.5,4]},{type:"sign",at:[1.5,1.2]}]},{id:"g6",name:"Up & Over",par:3,circle:4,size:[40,18],tee:[4,9],cup:[35,9],tip:"Uphill? Hit harder.",border:"hedge",ground:Qn([[0,2,3],[13,1,3],[15.5,5,2],[23,5,2],[25,1,3],[40,2,3],[40,16,3],[25,17,3],[23,13,2],[15.5,13,2],[13,17,3],[0,16,3]]),steps:[{axis:"x",from:16,to:22,h:1.8}],zones:[{surface:"green",circle:{c:[35,9],r:4}}],props:[{type:"flowers",at:[19,3.5]},{type:"flowers",at:[19,14.5]},{type:"bush",at:[16.5,2.5]},{type:"bush",at:[21.5,15.5]},{type:"tree",at:[7,20]},{type:"tree",at:[7,-2]},{type:"flowers",at:[32,18]},{type:"flowers",at:[32,0]},{type:"statue8",at:[43.2,9]},{type:"sign",at:[1,.8]}]},{id:"g7",name:"Sidewinder",par:3,circle:4,size:[42,20],tee:[2.5,3.5],cup:[39,15],tip:"Arrows show the slope.",border:"wall",tilt:[0,.05],ground:Qn([[0,1,3],[12,0,8],[30,2.5,8],[42,7,4],[42,19.5,4],[32,20,8],[14,16,8],[0,12.5,3]]),zones:[{surface:"green",circle:{c:[39,15],r:4}}],props:[{type:"tree",at:[4,18]},{type:"tree",at:[18,21.5]},{type:"flowers",at:[8,15.5]},{type:"flowers",at:[26,20.3]},{type:"bush",at:[22,.2]},{type:"flowers",at:[36,3.2]},{type:"tree",at:[44.8,2]},{type:"sign",at:[.5,-1]}]},{id:"g8",name:"Sandy Toes",par:3,circle:3.5,size:[40,20],tee:[4,11],cup:[33,8.5],tip:"Sand slows the 8.",border:"wall",ground:Qn([[0,4,3],[12,1,6],[32,1,5],[40,4,4],[40,16,4],[32,20,5],[12,20,6],[0,18,3]]),zones:[{surface:"green",circle:{c:[33,8.5],r:3.6}},{surface:"sand",poly:Qn([[13,5,3],[20,2.5,4],[29,3.5,3],[30,7,2],[27,10.6,3],[17,10.6,3],[12.5,8.5,2]])},{surface:"sand",poly:iu([33,8.5],3,4.6,-70,80)}],props:[{type:"flowers",at:[22,-.5]},{type:"bush",at:[9,.2]},{type:"flowers",at:[22,21]},{type:"bush",at:[36,19.2]},{type:"tree",at:[-3.4,11]},{type:"tree",at:[43.5,10]},{type:"sign",at:[.5,2]}]},{id:"g9",name:"King of the Hill",par:4,circle:3.5,size:[50,28],tee:[5,5],cup:[37,17.5],tip:"Find the way up!",border:"hedge",ground:Qn([[0,0,4],[14.5,0,1.5],[14.5,14,1.5],[17.5,14,1.5],[17.5,0,1.5],[50,0,5],[50,28,5],[0,28,4]]),plateaus:[{circle:{c:[37,17],r:5},h:1.5,ramp:4,linear:!0}],arcs:[{kind:"hedge",c:[37,17],r:5,from:250,to:530}],zones:[{surface:"green",circle:{c:[37,17],r:4.6}},{surface:"sand",poly:iu([37,17],9.3,11,255,525)}],props:[{type:"flowerbox",at:[16,3]},{type:"flowerbox",at:[16,9]},{type:"flowers",at:[16,12.6]},{type:"tree",at:[-3.5,21]},{type:"tree",at:[53.5,8]},{type:"tree",at:[30,31.5]},{type:"flowers",at:[8,-1]},{type:"flowers",at:[33,-1]},{type:"statue8",at:[53.6,22]},{type:"sign",at:[-1,2]}]}],su=i=>Math.round(i*100)/100,Uo=(i,t)=>[su(i),su(t)];function Rn(i,t=2.5,e=5,n=!0){const s=i.filter((a,c)=>{const l=i[(c+i.length-1)%i.length];return!n&&c===0||Math.hypot(a[0]-l[0],a[1]-l[1])>1e-6}),r=[],o=s.length;for(let a=0;a<o;a++){const c=s[a],l=c[2]??t;if(!n&&(a===0||a===o-1)){r.push(Uo(c[0],c[1]));continue}const u=s[(a+o-1)%o],d=s[(a+1)%o],f=Math.hypot(u[0]-c[0],u[1]-c[1]),h=Math.hypot(d[0]-c[0],d[1]-c[1]),g=[(u[0]-c[0])/f,(u[1]-c[1])/f],x=[(d[0]-c[0])/h,(d[1]-c[1])/h],m=Math.max(-1,Math.min(1,g[0]*x[0]+g[1]*x[1])),p=Math.acos(m)/2;if(!l||p>1.55){r.push(Uo(c[0],c[1]));continue}const w=Math.min(l/Math.tan(p),f*.48,h*.48),M=[c[0]+g[0]*w,c[1]+g[1]*w],y=[c[0]+x[0]*w,c[1]+x[1]*w];for(let C=0;C<=e;C++){const R=C/e,b=(1-R)*(1-R),S=2*(1-R)*R,_=R*R;r.push(Uo(b*M[0]+S*c[0]+_*y[0],b*M[1]+S*c[1]+_*y[1]))}}return r}function Ac(i,t,e,n,s=10){const r=Math.max(2,Math.ceil(Math.abs(n-e)/s)),o=[];for(let a=0;a<=r;a++){const c=(e+(n-e)*a/r)*Math.PI/180;o.push(Uo(i[0]+Math.cos(c)*t,i[1]+Math.sin(c)*t))}return o}function lp(i,t,e){const n=r=>i.reduce((o,a,c)=>Math.hypot(a[0]-r[0],a[1]-r[1])<Math.hypot(i[o][0]-r[0],i[o][1]-r[1])?c:o,0),s=[];for(let r=n(t),o=n(e);s.push(i[r]),r!==o;r=(r+1)%i.length);return s}const up={id:"l1",name:"Bend It",par:3,circle:4.5,size:[40,22],tee:[5,11],cup:[35,11],tip:"Slide the dot to bend the 8!",ground:Rn([[1,4],[12,1],[26,1.5],[39,3],[39,19],[26,20.5],[12,21],[1,18]],4.5),border:"wall",posts:[{at:[16,12.3],r:1.6,kind:"tree"},{at:[30.5,14],r:1.3,kind:"post"},{at:[30.5,8],r:1.3,kind:"post"}],zones:[{surface:"green",circle:{c:[35,11],r:4}}],props:[{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[41.5,22.5]},{type:"tree",at:[20,23.5],scale:1.2},{type:"bush",at:[6,-1.5]},{type:"bush",at:[33,-1.5]},{type:"flowers",at:[18,-1.6]},{type:"flowers",at:[-2,11]},{type:"sign",at:[-2.2,6]}]},va=(i,t,e,n)=>{const s=n?1:-1;return[{kind:"hedge",pts:[[i-1.2,t],[i,t+s*1.2],[i+1.2,t]]},{kind:"hedge",pts:[[i,t+s*1.2],[i,e]]}]},fp={id:"l2",name:"Slalom",par:4,circle:4,size:[46,22],tee:[4,11.5],cup:[38,9],tip:"Bend left, then bend right!",ground:Rn([[1,2],[23,1],[45,2],[45,20],[23,21],[1,20]],4),border:"wall",walls:[...va(10,20.36,14,!1),...va(18,1.36,9.1,!0),...va(29,1.5,9.2,!0)],posts:[{at:[10,13],r:1.2,kind:"tree"},{at:[18,10.1],r:1.2,kind:"tree"},{at:[29,10.2],r:1.2,kind:"tree"}],zones:[{surface:"rough",rect:[0,0,46,22]},{surface:"fairway",poly:Rn([[2,5],[23,4],[44,5],[44,17],[23,18],[2,17]],3)},{surface:"green",circle:{c:[38,9],r:3.5}}],props:[{type:"tree",at:[-1.5,23]},{type:"tree",at:[47.5,-1]},{type:"tree",at:[30,23.5]},{type:"flowers",at:[14,-1.5]},{type:"flowers",at:[24,-1.6]},{type:"bush",at:[47.5,14]},{type:"sign",at:[-2,6]}]},hp={id:"l3",name:"Lily Pad Lagoon",par:3,circle:4,size:[44,24],tee:[4,12],cup:[39.5,16.5],tip:"Splash = +1",ground:Rn([[1,4],[10,.8],[34,.8],[43,4],[43,20],[34,23.2],[10,23.2],[1,20]],4),border:"wall",zones:[{surface:"water",ellipse:{c:[22,12],rx:8.5,ry:6.2}},{surface:"fairway",rect:[12.5,10.5,31.5,13.5]},{surface:"green",circle:{c:[39,16],r:3.8}}],props:[{type:"bridge",at:[22,12],r:8.6,scale:.75},{type:"lilypad",at:[17,16],r:.9},{type:"lilypad",at:[20.5,17.2],r:.7},{type:"lilypad",at:[26.5,15.6],r:.8},{type:"lilypad",at:[18.5,7.6],r:.8},{type:"lilypad",at:[24,6.8],r:.7},{type:"lilypad",at:[27.5,8.5],r:.9},{type:"reeds",at:[15,14.6]},{type:"reeds",at:[28.5,15]},{type:"reeds",at:[15.5,9]},{type:"reeds",at:[28.6,9]},{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[45.5,1]},{type:"flowers",at:[22,25.5]},{type:"flowers",at:[22,-1.6]}]},ru=Rn([[6,21.2],[1.5,20.4],[1,4],[4,1.2],[36,1.2],[39,4],[38.5,20.4],[34,21.2]],3,5,!1),dp={id:"l4",name:"Boing Boing",par:3,circle:3.5,size:[40,22],tee:[8,6],cup:[32,6],tip:"Cushions bounce more!",ground:ru,border:null,walls:[{kind:"wall",pts:ru},{kind:"cushion",pts:[[34,21.2],[6,21.2]]},{kind:"hedge",pts:[[9.9,1.2],[12.3,3.2]]},{kind:"hedge",pts:[[30.1,1.2],[27.7,3.2]]}],arcs:[{kind:"hedge",c:[20,1.2],r:8,from:14,to:166}],zones:[{surface:"rough",circle:{c:[20,1.2],r:7.6}},{surface:"green",circle:{c:[32,6],r:3.5}}],props:[{type:"flowers",at:[17,4]},{type:"flowers",at:[22.5,5]},{type:"bush",at:[20,2.6],scale:1.3},{type:"flowers",at:[14.5,2.4]},{type:"flowers",at:[25.5,2.4]},{type:"tree",at:[-1.5,22]},{type:"tree",at:[41.5,22]},{type:"bush",at:[20,23.6]},{type:"flowers",at:[10,23.6]},{type:"flowers",at:[30,23.6]}]},Nh=(i,t,e=.5)=>[...Ac([26,2.5],i,0,180,7.5).map(([n,s])=>[n,2.5+(s-2.5)*t/i]),[26-i,e],[26+i,e]],ou=Rn(Nh(25,21.6),2.5),pp={id:"l5",name:"Banana Bay",par:4,circle:3.5,size:[52,25],tee:[6,4],cup:[46,4],tip:"Dot up = bend late!",ground:ou,border:"wall",zones:[{surface:"rough",poly:ou},{surface:"fairway",poly:Rn(Nh(23,19.4,2.2),2)},{surface:"water",ellipse:{c:[26,2],rx:17,ry:14}},{surface:"green",circle:{c:[46.5,5.5],r:3}}],props:[{type:"lilypad",at:[20,8],r:.9},{type:"lilypad",at:[26,11],r:.8},{type:"lilypad",at:[32,7],r:1},{type:"lilypad",at:[24,4],r:.7},{type:"fountain",at:[26,3.5]},{type:"reeds",at:[11.2,6.8]},{type:"reeds",at:[40.8,6.8]},{type:"reeds",at:[18,13.6]},{type:"reeds",at:[34,13.6]},{type:"tree",at:[-1.5,24]},{type:"tree",at:[53.5,24]},{type:"tree",at:[26,26.5],scale:1.2},{type:"flowers",at:[-2,12]},{type:"flowers",at:[54,12]}]},au=Rn([[39,4],[39,19],[33,21],[25,21],[25,11.5],[15,11.5],[15,21],[8,21],[1,18],[1,6],[5,1.5],[12,1],[28,1],[33,2.5]],2.5),mp={id:"l6",name:"Rooftop Rally",par:3,circle:3,size:[40,22],tee:[5,16],cup:[33,15],tip:"Open edge = out!",ground:au,border:null,walls:[{kind:"wall",pts:lp(au,[39,18],[2,7])},{kind:"cushion",pts:[[12,1],[28,1]]}],tilt:[0,.03],zones:[{surface:"green",circle:{c:[33,15],r:3.5}}],props:[{type:"tree",at:[20,17.5],scale:1.1},{type:"flowers",at:[17.5,14]},{type:"flowers",at:[22.5,14]},{type:"flowerbox",at:[4,23]},{type:"flowerbox",at:[11,23.2]},{type:"flowerbox",at:[29,23.2]},{type:"flowerbox",at:[36,22.8]},{type:"flowerbox",at:[-1.5,12],rot:90},{type:"sign",at:[-1.8,18]}]},gp=[[1,3.5],[3.5,1],[36,1],[43,8],[43,8.6],[35.6,16],[30.5,16],[30.5,20.5],[28,23],[8,23],[1,16]],xp={id:"l7",name:"Tight Squeeze",par:4,circle:2.5,size:[44,24],tee:[5,4],cup:[19,19.5],tip:"Stuck on a cushion? Push it in!",ground:gp,border:null,walls:[{kind:"hedge",pts:[[36,1],[3.5,1],[1,3.5],[1,16]]},{kind:"hedge",pts:[[8,23],[28,23],[30.5,20.5],[30.5,17.6]]},{kind:"cushion",pts:[[36,1],[43,8],[43,8.6],[35.6,16],[27,16]]},{kind:"cushion",pts:[[28.9,16],[30.5,17.6]]},{kind:"cushion",pts:[[1,16],[8,23]]},{kind:"cushion",pts:[[8.8,7.8],[1,15.6]]},{kind:"cushion",pts:[[1,6.2],[2.6,7.8],[36,7.8]]},{kind:"cushion",pts:[[8,16],[24.5,16]]}],zones:[{surface:"water",poly:[[.8,7.6],[8.8,7.6],[.8,15.6]]},{surface:"green",circle:{c:[19,19.5],r:2.6}}],props:[{type:"lilypad",at:[2.6,10],r:.6},{type:"reeds",at:[2,13]},{type:"flowerbox",at:[36,22.5]},{type:"flowerbox",at:[40.5,18.5],rot:90},{type:"bush",at:[37.5,19.5]},{type:"tree",at:[-1.5,24.5]},{type:"tree",at:[45.5,-1]},{type:"flowers",at:[20,-1.6]},{type:"sign",at:[-2,6]}]},vp={id:"l8",name:"Island Hop",par:4,circle:3,size:[40,34],tee:[8.5,27],cup:[12,8.5],tip:"Hop island to island!",ground:Rn([[1,5],[4,1],[35,1.5],[39,5],[38.5,29],[35,33],[5,32.5],[1.5,29]],4),border:"wall",walls:[{kind:"cushion",pts:[[13.8,25],[22,25]]},{kind:"cushion",pts:[[13.8,29],[22.2,29]]},{kind:"cushion",pts:[[22.5,22.4],[22.5,13.6]]},{kind:"cushion",pts:[[26.5,21],[26.5,11.8]]}],arcs:[{kind:"cushion",c:[9,27],r:4.6,from:30,to:330},{kind:"cushion",c:[28.5,25],r:6.2,from:-75,to:150},{kind:"cushion",c:[13,9],r:4.9,from:110,to:250}],hills:[{c:[29,25],r:4.5,h:.25}],plateaus:[{circle:{c:[12,8.5],r:2.8},h:.25,ramp:1.2}],zones:[{surface:"water",rect:[0,0,40,34]},{surface:"rough",poly:Rn([[0,0],[5.5,0],[5.5,13],[3.5,19],[0,20]],2.5)},{surface:"rough",poly:Rn([[31.5,0],[40,0],[40,16],[35,15.5],[31.5,13]],2.5)},{surface:"rough",poly:Rn([[15.5,31.5],[21,31.5],[22,34],[14.5,34]],1.5)},{surface:"fairway",circle:{c:[9,27],r:5}},{surface:"fairway",circle:{c:[28.5,25],r:6.6}},{surface:"fairway",ellipse:{c:[18,9],rx:9.5,ry:5.5}},{surface:"fairway",rect:[13.6,25,22.6,29]},{surface:"fairway",rect:[22.5,11,26.5,22]},{surface:"green",circle:{c:[12,8.5],r:2.8}}],props:[{type:"bridge",at:[18,27],r:4.2},{type:"bridge",at:[24.5,17],r:4.4,rot:90},{type:"lilypad",at:[6,17],r:.9},{type:"lilypad",at:[33,13],r:.8},{type:"lilypad",at:[35.5,7],r:1},{type:"lilypad",at:[17,20],r:.7},{type:"lilypad",at:[5,6],r:.8},{type:"lilypad",at:[34,31],r:.7},{type:"reeds",at:[3.4,21]},{type:"reeds",at:[36,20.5]},{type:"reeds",at:[29,4]},{type:"reeds",at:[3.5,12]},{type:"fountain",at:[33.5,9]},{type:"tree",at:[-1.5,35]},{type:"tree",at:[41.5,35]},{type:"flowers",at:[20,35.5]}]},Kr=Math.atan2(Math.sqrt(29),14)*(180/Math.PI),_p=[...Ac([44,16],15,180+Kr,540-Kr,7.5),...Ac([16,16],15,Kr,360-Kr,7.5).slice(1,-1)],Mp={id:"l9",name:"Figure Eight",par:5,circle:3.5,size:[60,32],tee:[4.5,16],cup:[55.5,16],tip:"Last hole: loop the 8!",ground:Rn(_p,2,4),border:"wall",posts:[{at:[30,16],r:1.8,kind:"bumper"}],arcs:[{kind:"cushion",c:[16,16],r:8.5,from:100,to:170},{kind:"cushion",c:[16,16],r:8.5,from:190,to:260},{kind:"cushion",c:[44,16],r:8.5,from:10,to:80},{kind:"cushion",c:[44,16],r:8.5,from:280,to:350}],plateaus:[{circle:{c:[55.5,16],r:2.6},h:.3,ramp:1.5}],zones:[{surface:"rough",circle:{c:[16,16],r:15.5}},{surface:"rough",circle:{c:[44,16],r:15.5}},{surface:"fairway",circle:{c:[16,16],r:13}},{surface:"fairway",circle:{c:[44,16],r:13}},{surface:"fairway",rect:[26,9.5,34,22.5]},{surface:"water",circle:{c:[16,16],r:8}},{surface:"water",circle:{c:[44,16],r:8}},{surface:"green",circle:{c:[55.5,16],r:3}}],props:[{type:"fountain",at:[16,16],scale:1.2},{type:"fountain",at:[44,16],scale:1.2},{type:"lilypad",at:[12,12],r:.9},{type:"lilypad",at:[20.5,19.5],r:.8},{type:"lilypad",at:[13,20],r:.7},{type:"lilypad",at:[47.5,12.5],r:.9},{type:"lilypad",at:[40,19.5],r:.8},{type:"lilypad",at:[48,20.5],r:.7},{type:"reeds",at:[9.5,19.5]},{type:"reeds",at:[22.5,12]},{type:"reeds",at:[37.5,12.5]},{type:"reeds",at:[50.5,19.5]},{type:"statue8",at:[58.5,28],scale:1.3},{type:"flowers",at:[56,30.5]},{type:"flowers",at:[60.5,25]},{type:"tree",at:[1.5,29.5]},{type:"tree",at:[1.5,2.5]},{type:"tree",at:[58.5,3]},{type:"bush",at:[30,27.5]},{type:"bush",at:[30,4.5]},{type:"flowers",at:[29,26.5]},{type:"flowers",at:[31,5.5]}]},yp=[up,fp,hp,dp,pp,mp,xp,vp,Mp],Hr=Object.freeze([{id:1,name:"Greenside",holes:cp},{id:2,name:"Lakeside",holes:yp}]),Si=Object.freeze(Hr.flatMap((i,t)=>i.holes.map((e,n)=>Object.freeze({...e,round:i.id,number:t*9+n+1})))),Gt=Object.freeze({DT:1/240,R:.5,MAX_EVENTS:8,E_BALL:.95,SLOPE_K:21,GRAD_EPS:.1,V_SLEEP:.05,SLOW_V:.3,SLOW_MAX_T:2.5,MAX_SHOT_T:20,D_MAX:40,D_REF_DECEL:3,POWER_MIN:.03,PLACE_GAP:.05,CUE_MAX_TRAVEL:12,CUE_FADE_T:.5,GHOST_DECEL:8,CURVE_K:.3,CURVE_LEN:4,EIGHT_CURVE_K:.04,EIGHT_CURVE_LEN:15,EIGHT_EARLY_LEN:5,EIGHT_HOOK_START:3,EIGHT_HOOK_LEN:7,HOLE_R:1.1,HOLE_VCAP:8,LIP_W:.5,LIP_A:4,HOLE_SETTLE_V:1,HOP_KEEP:.85}),cu=Object.freeze({green:Object.freeze({decel:2}),fairway:Object.freeze({decel:3}),rough:Object.freeze({decel:6}),sand:Object.freeze({decel:14}),ice:Object.freeze({decel:.8})}),Cc=Object.freeze({wall:Object.freeze({e:.6,keep:.95}),hedge:Object.freeze({e:.6,keep:.95}),cushion:Object.freeze({e:.85,keep:.97}),bumper:Object.freeze({e:1,keep:1}),post:Object.freeze({e:.6,keep:.95}),tree:Object.freeze({e:.6,keep:.95}),lollipop:Object.freeze({e:.6,keep:.95})}),Hi=1/0,_a=i=>Cc[i]||Cc.wall;function Sp(i){const t=[],e=[],n=new Set,s=(l,u,d)=>{const f=l+","+u;n.has(f)||(n.add(f),e.push({x:l,z:u,e:d.e,keep:d.keep,kind:d===Cc.cushion?"cushion":"wall",minx:l,maxx:l,minz:u,maxz:u}))};for(const l of i.segments||[]){const u=l.bx-l.ax,d=l.bz-l.az,f=u*u+d*d;if(f===0)continue;const h=Math.sqrt(f),g=_a(l.kind);t.push({ax:l.ax,az:l.az,ex:u,ez:d,len2:f,nx:-d/h,nz:u/h,e:g.e,keep:g.keep,kind:l.kind||"wall",minx:Math.min(l.ax,l.bx),maxx:Math.max(l.ax,l.bx),minz:Math.min(l.az,l.bz),maxz:Math.max(l.az,l.bz)}),s(l.ax,l.az,g),s(l.bx,l.bz,g)}const r=(i.posts||[]).map(l=>{const u=_a(l.kind||"post");return{x:l.x,z:l.z,r:l.r,e:u.e,keep:u.keep,kind:l.kind||"post",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),o=(i.arcs||[]).map(l=>{const u=_a(l.kind);return s(l.x+l.sx*l.r,l.z+l.sz*l.r,u),s(l.x+l.ex*l.r,l.z+l.ez*l.r,u),{x:l.x,z:l.z,r:l.r,sx:l.sx,sz:l.sz,ex:l.ex,ez:l.ez,e:u.e,keep:u.keep,kind:l.kind||"wall",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),a=lu(0,i.eight.x,i.eight.z);a.mode="off";const c=lu(1,i.eight.x,i.eight.z);return{t:0,shotT:0,active:!1,balls:[a,c],segs:t,caps:e,posts:r,arcs:o,hole:{x:i.hole.x,z:i.hole.z},placeR:i.placeR||4,lieX:i.eight.x,lieZ:i.eight.z,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function lu(i,t,e){return{id:i,x:t,z:e,px:t,pz:e,vx:0,vz:0,mode:"rest",spin:0,top:0,travel:0,curveS:0,slowT:0,fadeT:0,overHole:!1,decel:0,slopeA2:0}}function uu(i,t,e){const n=i.balls[1];n.x=n.px=t,n.z=n.pz=e,n.vx=0,n.vz=0,n.mode="rest",n.spin=0,n.top=0,n.curveS=0,n.slowT=0,n.overHole=!1,i.lieX=t,i.lieZ=e}function Uh(i){const t=i<Gt.POWER_MIN?Gt.POWER_MIN:i>1?1:i;return Math.sqrt(2*Gt.D_REF_DECEL*Gt.D_MAX*t)/((1+Gt.E_BALL)/2)}function Fh(i){const t=typeof i=="number"?i:i&&i.x||0,e=typeof i=="number"?0:i&&i.y||0;return{side:t<-1?-1:t>1?1:t,top:e<-1?-1:e>1?1:e}}function Oh(i,t,e,n){const s=i.balls[0],r=i.balls[1],o=Math.sqrt(t.dx*t.dx+t.dz*t.dz),a=Uh(n);s.x=s.px=t.x,s.z=s.pz=t.z,s.vx=t.dx/o*a,s.vz=t.dz/o*a;const c=Fh(e);s.mode="cue",s.spin=c.side,s.top=c.top,s.travel=0,s.fadeT=0,i.lieX=r.x,i.lieZ=r.z,r.slowT=0,i.shotT=i.t,i.active=!0}const Rc={x:0,z:0},He={t:0,kind:0,i:0,j:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""},ni=0,kh=1,Cl=2,Ma=3;function Bh(i,t=Gt.DT){const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];s.px=s.x,s.pz=s.z,s.mode==="cue"?wp(s,t):s.mode==="roll"?Tp(i,s,t):s.mode==="ghost"&&bp(s,t)}Rp(i,t);for(let n=0;n<e.length;n++)Lp(i,e[n],t);if(i.t+=t,i.active){let n=!1;for(let s=0;s<e.length;s++){const r=e[s].mode;(r==="cue"||r==="roll"||r==="ghost")&&(n=!0)}if(n&&i.t-i.shotT>Gt.MAX_SHOT_T){for(let s=0;s<e.length;s++){const r=e[s];r.mode==="roll"?Pc(i,r):(r.mode==="cue"||r.mode==="ghost")&&(r.mode="off")}n=!1}n||(i.active=!1,i.events.push({type:"shotEnd",t:i.t}))}}function zr(i){return Math.sqrt(i.vx*i.vx+i.vz*i.vz)}function Nr(i,t,e){const n=1-.5*t*t,s=i.vx*n-i.vz*t,r=i.vx*t+i.vz*n,o=e/Math.sqrt(s*s+r*r);i.vx=s*o,i.vz=r*o}function wp(i,t){const e=zr(i);if(i.spin!==0&&e>0){const n=1-i.travel/Gt.CURVE_LEN;n>0&&Nr(i,Gt.CURVE_K*i.spin*n*e*t,e)}i.travel+=e*t}function Hh(i,t){const e=Gt.EIGHT_CURVE_LEN;if(t<0){const o=e+(Gt.EIGHT_EARLY_LEN-e)*-t;return i<o?Gt.EIGHT_CURVE_K*e/o*(1-i/o):0}const n=i<e?Gt.EIGHT_CURVE_K*(1-i/e):0;if(t===0)return n;const s=i-Gt.EIGHT_HOOK_START,r=s>0&&s<Gt.EIGHT_HOOK_LEN?Gt.EIGHT_CURVE_K*e*s/(Gt.EIGHT_HOOK_LEN*Gt.EIGHT_HOOK_LEN):0;return n*(1-t)+r*t}function bp(i,t){const e=zr(i),n=Gt.GHOST_DECEL*t;if(e<=n)i.vx=0,i.vz=0;else{const s=(e-n)/e;i.vx*=s,i.vz*=s}}function Ep(i,t,e,n=Rc){const s=Gt.GRAD_EPS,r=i.heightAt;return n.x=(r(t+s,e)-r(t-s,e))/(2*s),n.z=(r(t,e+s)-r(t,e-s))/(2*s),n}function Tp(i,t,e){const n=cu[i.surfaceAt(t.x,t.z)]||cu.fairway;Ep(i,t.x,t.z);let s=-Gt.SLOPE_K*Rc.x,r=-Gt.SLOPE_K*Rc.z;const o=i.hole.x-t.x,a=i.hole.z-t.z,c=o*o+a*a,l=Gt.HOLE_R+Gt.LIP_W;if(c<l*l&&c>=Gt.HOLE_R*Gt.HOLE_R){const h=Math.sqrt(c);s+=Gt.LIP_A*o/h,r+=Gt.LIP_A*a/h}if(t.spin!==0){const h=zr(t),g=1-t.curveS/Gt.EIGHT_CURVE_LEN;if(t.top===0)g>0&&h>0?Nr(t,Gt.EIGHT_CURVE_K*t.spin*g*h*e,h):g<=0&&(t.spin=0);else if(g<=0)t.spin=0;else if(h>0){const x=Hh(t.curveS,t.top);x>0&&Nr(t,x*t.spin*h*e,h)}t.curveS+=h*e}t.vx+=s*e,t.vz+=r*e;const u=zr(t),d=n.decel*e,f=s*s+r*r;if(u>d){const h=(u-d)/u;t.vx*=h,t.vz*=h}else if(f<=n.decel*n.decel)t.vx=0,t.vz=0;else{const h=Math.sqrt(f),g=(h-n.decel)*e/h;t.vx=s*g,t.vz=r*g}t.decel=n.decel,t.slopeA2=f}function Fo(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=a*e+c*n;if(l>=0)return Hi;const u=a*a+c*c-o*o;if(u<=0)return 0;const d=e*e+n*n,f=l*l-d*u;return f<0?Hi:u/(-l+Math.sqrt(f))}function Ap(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=e*e+n*n;if(l===0)return Hi;const u=a*e+c*n,d=a*a+c*c-o*o;if(d>=0)return u>0?0:Hi;const f=Math.sqrt(u*u-l*d);return u>0?-d/(u+f):(-u+f)/l}const fu=1e-9;function $r(i,t,e,n,s){return i.maxx<t||i.minx>e||i.maxz<n||i.minz>s}function Gh(i,t,e,n,s,r,o,a){let c=o,l=ni;const u=(n<0?-n:n)*o+r+fu,d=(s<0?-s:s)*o+r+fu,f=t-u,h=t+u,g=e-d,x=e+d,m=i.segs;for(let y=0;y<m.length;y++){const C=m[y];if($r(C,f,h,g,x))continue;let R=C.nx,b=C.nz,S=(t-C.ax)*R+(e-C.az)*b;S<0&&(R=-R,b=-b,S=-S);const _=n*R+s*b;if(_>=0)continue;let v=(S-r)/-_;if(v<0&&(v=0),v>c||v===c&&l!==ni)continue;const A=t+n*v,U=e+s*v,F=((A-C.ax)*C.ex+(U-C.az)*C.ez)/C.len2;F<0||F>1||(c=v,l=Cl,a.nx=R,a.nz=b,a.e=C.e,a.keep=C.keep,a.ck=C.kind)}const p=i.caps;for(let y=0;y<p.length;y++){const C=p[y];if($r(C,f,h,g,x))continue;const R=Fo(t,e,n,s,C.x,C.z,r);(R<c||R===c&&l===ni)&&(c=R,l=Ma,a.cx=C.x,a.cz=C.z,a.sign=1,a.e=C.e,a.keep=C.keep,a.ck=C.kind)}const w=i.posts;for(let y=0;y<w.length;y++){const C=w[y];if($r(C,f,h,g,x))continue;const R=Fo(t,e,n,s,C.x,C.z,C.r+r);(R<c||R===c&&l===ni)&&(c=R,l=Ma,a.cx=C.x,a.cz=C.z,a.sign=1,a.e=C.e,a.keep=C.keep,a.ck=C.kind)}const M=i.arcs;for(let y=0;y<M.length;y++){const C=M[y];if($r(C,f,h,g,x))continue;const R=t-C.x,b=e-C.z,S=R*R+b*b>C.r*C.r,_=S?Fo(t,e,n,s,C.x,C.z,C.r+r):Ap(t,e,n,s,C.x,C.z,C.r-r);if(!(_<c||_===c&&l===ni))continue;const v=t+n*_-C.x,A=e+s*_-C.z;C.sx*A-C.sz*v<0||v*C.ez-A*C.ex<0||(c=_,l=Ma,a.cx=C.x,a.cz=C.z,a.sign=S?1:-1,a.e=C.e,a.keep=C.keep,a.ck=C.kind)}return a.t=c,a.kind=l,l===ni?Hi:c}function hu(i){return i==="cue"||i==="roll"||i==="rest"}function ya(i){return i==="cue"||i==="roll"}const ti={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function Cp(i,t){const e=i.balls;He.kind=ni,He.t=t;for(let n=0;n<e.length;n++){const s=e[n];if(!hu(s.mode))continue;for(let o=n+1;o<e.length;o++){const a=e[o];if(!hu(a.mode)||!ya(s.mode)&&!ya(a.mode))continue;const c=Fo(s.x,s.z,s.vx-a.vx,s.vz-a.vz,a.x,a.z,2*Gt.R);(c<He.t||c===He.t&&He.kind===ni)&&(He.t=c,He.kind=kh,He.i=n,He.j=o)}if(!ya(s.mode))continue;const r=Gh(i,s.x,s.z,s.vx,s.vz,Gt.R,He.t,ti);(r<He.t||r===He.t&&He.kind===ni&&r!==Hi)&&(He.t=r,He.kind=ti.kind,He.i=n,He.nx=ti.nx,He.nz=ti.nz,He.cx=ti.cx,He.cz=ti.cz,He.sign=ti.sign,He.e=ti.e,He.keep=ti.keep,He.ck=ti.ck)}return He}function du(i,t){if(t===0)return;const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];(s.mode==="cue"||s.mode==="roll"||s.mode==="ghost")&&(s.x+=s.vx*t,s.z+=s.vz*t)}}function Rp(i,t){let e=t;for(let n=0;n<Gt.MAX_EVENTS;n++){const s=Cp(i,e);if(s.kind===ni){du(i,e);return}if(du(i,s.t),Pp(i,s),e-=s.t,e<=0)return}}function Pp(i,t){const e=i.balls;if(t.kind===kh){const l=e[t.i],u=e[t.j];let d=u.x-l.x,f=u.z-l.z;const h=Math.sqrt(d*d+f*f);d/=h,f/=h;const g=l.vx-u.vx,x=l.vz-u.vz,m=g*d+x*f;if(m<=0)return;const p=(1+Gt.E_BALL)/2*m;l.vx-=p*d,l.vz-=p*f,u.vx+=p*d,u.vz+=p*f;const w=l.mode==="cue"?t.i:u.mode==="cue"?t.j:-1;if(l.mode==="rest"&&(l.mode="roll"),u.mode==="rest"&&(u.mode="roll"),w>=0){const M=e[w],y=e[w===t.i?t.j:t.i],C=w===t.i?1:-1;i.events.push({type:"contact",t:i.t,gx:M.x,gz:M.z,nx:d*C,nz:f*C,v8x:y.vx,v8z:y.vz,cutCos:m/Math.sqrt(g*g+x*x),spin:M.spin,top:M.top}),y.spin=M.spin,y.top=M.top,y.curveS=0,y.slowT=0,M.mode="ghost",M.spin=0,M.top=0,M.fadeT=Gt.CUE_FADE_T}else i.events.push({type:"ballHit",t:i.t,speed:m});return}const n=e[t.i];let s,r;if(t.kind===Cl)s=t.nx,r=t.nz;else{s=(n.x-t.cx)*t.sign,r=(n.z-t.cz)*t.sign;const l=Math.sqrt(s*s+r*r);s/=l,r/=l}const o=n.vx*s+n.vz*r;if(o>=0)return;const a=n.vx-o*s,c=n.vz-o*r;n.vx=a*t.keep-t.e*o*s,n.vz=c*t.keep-t.e*o*r,n.spin=0,n.top=0,i.events.push({type:"wall",t:i.t,id:n.id,x:n.x,z:n.z,nx:s,nz:r,speed:-o,kind:t.ck})}function Pc(i,t){t.vx=0,t.vz=0,t.mode="rest",t.slowT=0,t.spin=0,t.top=0,i.events.push({type:"rest",t:i.t,id:t.id,x:t.x,z:t.z})}function Lp(i,t,e){if(t.mode==="ghost"){t.fadeT-=e,t.fadeT<=0&&(t.mode="off");return}if(t.mode!=="cue"&&t.mode!=="roll")return;const n=i.hazardAt(t.x,t.z);if(n){t.mode==="cue"?(t.mode="off",i.events.push({type:"whiff",t:i.t,reason:n,x:t.x,z:t.z})):(t.mode="sunk",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:n,t:i.t,id:t.id,x:t.x,z:t.z,dropX:i.lieX,dropZ:i.lieZ}));return}if(t.mode==="cue"){t.travel>Gt.CUE_MAX_TRAVEL&&(t.mode="ghost",t.fadeT=Gt.CUE_FADE_T,i.events.push({type:"whiff",t:i.t,reason:"miss",x:t.x,z:t.z}));return}const s=t.x-i.hole.x,r=t.z-i.hole.z,o=s*s+r*r,a=zr(t);if(o<Gt.HOLE_R*Gt.HOLE_R){let c=a<Gt.HOLE_SETTLE_V;if(!c&&!t.overHole&&(c=a<=Gt.HOLE_VCAP,c||(t.vx*=Gt.HOP_KEEP,t.vz*=Gt.HOP_KEEP,i.events.push({type:"hop",t:i.t,id:t.id,x:t.x,z:t.z,speed:a,vcap:Gt.HOLE_VCAP}))),t.overHole=!0,c){t.mode="holed",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:"holed",t:i.t,id:t.id,speed:a});return}}else t.overHole=!1;if(a===0||a<Gt.V_SLEEP&&t.slopeA2<t.decel*t.decel){Pc(i,t);return}a<Gt.SLOW_V?(t.slowT+=e,t.slowT>Gt.SLOW_MAX_T&&Pc(i,t)):t.slowT=0}function ur(i,t,e){const n=i.balls[1],s=t-n.x,r=e-n.z,o=s*s+r*r,a=2*Gt.R+Gt.PLACE_GAP;return o>i.placeR*i.placeR||o<a*a?!1:Ip(i,t,e)&&!Vh(i,n.x,n.z,t,e)}function Vh(i,t,e,n,s){const r=n-t,o=s-e;for(const c of i.segs){const l=r*c.ez-o*c.ex;if(l===0)continue;const u=c.ax-t,d=c.az-e,f=(u*c.ez-d*c.ex)/l,h=(u*o-d*r)/l;if(f>0&&f<1&&h>=0&&h<=1)return!0}const a=r*r+o*o;for(const c of i.arcs){const l=t-c.x,u=e-c.z,d=l*r+u*o,f=l*l+u*u-c.r*c.r,h=d*d-a*f;if(h<0||a===0)continue;const g=Math.sqrt(h);for(const x of[(-d-g)/a,(-d+g)/a]){if(!(x>0&&x<1))continue;const m=l+r*x,p=u+o*x;if(c.sx*p-c.sz*m>=0&&m*c.ez-p*c.ex>=0)return!0}}return!1}function Ip(i,t,e){const n=Gt.R;if(i.hazardAt(t,e))return!1;for(const s of i.segs){let r=((t-s.ax)*s.ex+(e-s.az)*s.ez)/s.len2;r=r<0?0:r>1?1:r;const o=s.ax+s.ex*r-t,a=s.az+s.ez*r-e;if(o*o+a*a<n*n)return!1}for(const s of i.posts){const r=s.x-t,o=s.z-e,a=s.r+n;if(r*r+o*o<a*a)return!1}for(const s of i.arcs){const r=t-s.x,o=e-s.z,a=Math.sqrt(r*r+o*o);if(s.sx*o-s.sz*r>=0&&r*s.ez-o*s.ex>=0&&a>s.r-n&&a<s.r+n)return!1}for(const s of i.caps){const r=s.x-t,o=s.z-e;if(r*r+o*o<n*n)return!1}return!0}function jr(i,t,e,n){return i.filter(s=>{const r=t<s.minx?s.minx:t>s.maxx?s.maxx:t,o=e<s.minz?s.minz:e>s.maxz?s.maxz:e,a=r-t,c=o-e;return a*a+c*c<=n*n})}function Dp(i,t,e){const n=Gt.CUE_MAX_TRAVEL+2*Gt.R+.5;return{t:i.t,shotT:i.shotT,active:!1,balls:i.balls.map(s=>({...s})),segs:jr(i.segs,t,e,n),caps:jr(i.caps,t,e,n),posts:jr(i.posts,t,e,n),arcs:jr(i.arcs,t,e,n),hole:i.hole,placeR:i.placeR,lieX:i.lieX,lieZ:i.lieZ,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function pu(i,t,e,n,s=3){const r=Dp(i,t.x,t.z);Oh(r,t,e,n);const o=r.balls[0],a=r.balls[1],c=[t.x,t.z],l=Math.ceil((Gt.CUE_MAX_TRAVEL+1)/(Uh(n)*Gt.DT))+4;for(let u=1;u<=l;u++){Bh(r);for(let d=0;d<r.events.length;d++){const f=r.events[d];if(f.type==="wall"&&f.id===0)c.push(f.x,f.z);else if(f.type==="contact"){c.push(f.gx,f.gz);const h=Math.sqrt(f.v8x*f.v8x+f.v8z*f.v8z);return{hit:!0,points:c,ghost:{x:f.gx,z:f.gz},normal:{x:f.nx,z:f.nz},eightDir:{x:f.v8x/h,z:f.v8z/h},eightSpeed:h,cutCos:f.cutCos,spin:f.spin,top:f.top,eightStart:{x:a.x,z:a.z},reason:null}}else if(f.type==="whiff")return c.push(f.x,f.z),{hit:!1,points:c,reason:f.reason}}r.events.length=0,u%s===0&&c.push(o.x,o.z)}return{hit:!1,points:c,reason:"miss"}}const In={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function zp(i,t,e,n,s,r,o=14,a=3){const l=[t,e];let u=Math.sqrt(n*n+s*s);n/=u,s/=u;let d=0,f=null,h=null,g=!1,x=o;const m=Fh(r);let p=m.side;const w=m.top,M={vx:n,vz:s};for(let y=0;y<400&&d<x;y++){const C=x-d<.25?x-d:.25;if(p!==0)if(w===0){const v=1-d/Gt.EIGHT_CURVE_LEN;v>0&&Nr(M,Gt.EIGHT_CURVE_K*p*v*C,1)}else{const v=Hh(d,w);v>0&&Nr(M,v*p*C,1)}const R=Gh(i,t,e,M.vx,M.vz,Gt.R,C,In);if(R!==Hi&&!f){t+=M.vx*R,e+=M.vz*R,d+=R,l.push(t,e);let v,A;In.kind===Cl?(v=In.nx,A=In.nz):(v=(t-In.cx)*In.sign,A=(e-In.cz)*In.sign,u=Math.sqrt(v*v+A*A),v/=u,A/=u);const U=M.vx*v+M.vz*A,F=(M.vx-U*v)*In.keep-In.e*U*v,V=(M.vz-U*A)*In.keep-In.e*U*A;u=Math.sqrt(F*F+V*V),M.vx=F/u,M.vz=V/u,f={x:t,z:e},p=0,x=d+a;continue}if(R!==Hi){t+=M.vx*R,e+=M.vz*R,l.push(t,e);break}t+=M.vx*C,e+=M.vz*C,d+=C,l.push(t,e);const b=i.hazardAt(t,e);if(b){h=b;break}const S=t-i.hole.x,_=e-i.hole.z;S*S+_*_<Gt.HOLE_R*Gt.HOLE_R&&(g=!0)}return{points:l,hazard:h,bounce:f,cup:g}}function Np(i,t,e,n=240){e.acc+=t>.25?.25:t;let s=0;for(;e.acc>=Gt.DT&&s<n;)Bh(i),e.acc-=Gt.DT,s++;return s>=n&&(e.acc=0),e.acc/Gt.DT}function Up(i,t,e,n,s=0,r=0){return(o,a)=>{let c=(o-s)/n,l=(a-r)/n;c=c<0?0:c>t-1.000001?t-1.000001:c,l=l<0?0:l>e-1.000001?e-1.000001:l;const u=c|0,d=l|0,f=c-u,h=l-d,g=d*t+u,x=i[g]+(i[g+1]-i[g])*f,m=i[g+t]+(i[g+t+1]-i[g+t])*f;return x+(m-x)*h}}const Ei=.25,Zr=4,Fp=Object.freeze({oob:0,fairway:1,green:2,rough:3,sand:4,water:5,ice:6}),Op=Object.freeze(["oob","fairway","green","rough","sand","water","ice"]),fr=i=>({x:i[0],z:-i[1]});function Lc(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[s][0],a=i[s][1],c=i[r][0],l=i[r][1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function kp(i,t,e){let n=1/0;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[r][0],a=i[r][1],c=i[s][0]-o,l=i[s][1]-a,u=c*c+l*l||1e-12;let d=((t-o)*c+(e-a)*l)/u;d=d<0?0:d>1?1:d;const f=o+c*d-t,h=a+l*d-e,g=Math.sqrt(f*f+h*h);g<n&&(n=g)}return n}const Wh=i=>[[i[0],i[1]],[i[2],i[1]],[i[2],i[3]],[i[0],i[3]]];function Ic(i){if(i.poly)return i.poly;if(i.rect)return Wh(i.rect);const t=i.circle?{c:i.circle.c,rx:i.circle.r,ry:i.circle.r,rot:0}:i.ellipse;if(!t)throw new Error("zone without a shape");const e=48,n=Math.cos((t.rot||0)*Math.PI/180),s=Math.sin((t.rot||0)*Math.PI/180),r=[];for(let o=0;o<e;o++){const a=o/e*Math.PI*2,c=Math.cos(a)*t.rx,l=Math.sin(a)*t.ry;r.push([t.c[0]+c*n-l*s,t.c[1]+c*s+l*n])}return r}const Sa=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function Bp(i){const t=i.steps||[],e=i.hills||[],n=(i.plateaus||[]).map(r=>({pts:Ic(r),h:r.h,ramp:r.ramp??2,linear:!!r.linear})),s=i.tilt||[0,0];return(r,o)=>{let a=s[0]*r+s[1]*o;for(const c of t){const l=c.axis==="y"?o:r;if(c.band){const d=c.axis==="y"?r:o;if(d<c.band[0]||d>c.band[1])continue}const u=(l-c.from)/(c.to-c.from);a+=c.h*(c.smooth?Sa(u):u<=0?0:u>=1?1:u)}for(const c of e){const l=r-c.c[0],u=o-c.c[1],d=Math.sqrt(l*l+u*u),f=c.flat||0;d<c.r&&(a+=c.h*Sa(1-(d-f)/(c.r-f)))}for(const c of n)if(Lc(c.pts,r,o))a+=c.h;else{const l=kp(c.pts,r,o);l<c.ramp&&(a+=c.h*(c.linear?1-l/c.ramp:Sa(1-l/c.ramp)))}return a}}function Xh(i){const[t,e]=i.size,n=i.ground||Wh([0,0,t,e]),s=i.border===void 0?"wall":i.border,r=[];s&&r.push({kind:s,pts:n,closed:!0,border:!0});for(const S of i.walls||[])r.push({kind:S.kind||"wall",pts:S.pts,closed:!!S.closed,h:S.h});const o=[],a=[];for(const S of i.arcs||[]){let _=S.from;const v=S.to;if(!(v>_))throw new Error(i.id+": arc needs to > from");for(a.push({kind:S.kind||"wall",c:S.c,r:S.r,from:_,to:v});_<v-1e-9;){const A=Math.min(v,_+180),U=A*Math.PI/180,F=_*Math.PI/180;o.push({kind:S.kind||"wall",x:S.c[0],z:-S.c[1],r:S.r,sx:Math.cos(U),sz:-Math.sin(U),ex:Math.cos(F),ez:-Math.sin(F)}),_=A}}const c=[];for(const S of r){const _=S.pts.length,v=S.closed?_:_-1;for(let A=0;A<v;A++){const U=S.pts[A],F=S.pts[(A+1)%_];c.push({ax:U[0],az:-U[1],bx:F[0],bz:-F[1],kind:S.kind})}}const l=(i.posts||[]).map(S=>({x:S.at[0],z:-S.at[1],r:S.r,kind:S.kind||"post"})),u=-Zr,d=-(e+Zr),f=Math.round((t+2*Zr)/Ei)+1,h=Math.round((e+2*Zr)/Ei)+1,g=Bp(i),x=new Float64Array(f*h),m=new Uint8Array(f*h),p=(i.zones||[]).map(S=>{const _=Fp[S.surface];if(_===void 0||_===0)throw new Error(i.id+": unknown surface "+S.surface);return{code:_,pts:Ic(S)}});for(let S=0;S<h;S++){const v=-(d+S*Ei);for(let A=0;A<f;A++){const U=u+A*Ei,F=S*f+A;x[F]=g(U,v);let V=Lc(n,U,v)?1:0;if(V)for(const rt of p)Lc(rt.pts,U,v)&&(V=rt.code);m[F]=V}}const w=Up(x,f,h,Ei,u,d),M=(S,_)=>{let v=Math.round((S-u)/Ei),A=Math.round((_-d)/Ei);return v=v<0?0:v>=f?f-1:v,A=A<0?0:A>=h?h-1:A,m[A*f+v]},y=(S,_)=>Op[M(S,_)],C=(S,_)=>{const v=M(S,_);return v===0?"oob":v===5?"water":null},R=fr(i.tee),b=fr(i.cup);return{hole:i,id:i.id,name:i.name,par:i.par,round:i.round,spin:!0,tip:i.tip||null,placeR:i.circle,eight:R,tee:R,cup:b,segments:c,posts:l,arcs:o,surfaceAt:y,heightAt:w,hazardAt:C,grid:{cell:Ei,cols:f,rows:h,x0:u,z0:d,height:x,surface:m},bounds:{minx:0,maxx:t,minz:-e,maxz:0},ground:n.map(fr),walls:r.map(S=>({kind:S.kind,closed:S.closed,border:!!S.border,h:S.h,pts:S.pts.map(fr)})),arcsRender:a.map(S=>({kind:S.kind,x:S.c[0],z:-S.c[1],r:S.r,from:S.from,to:S.to})),props:(i.props||[]).map(S=>({...S,x:S.at[0],z:-S.at[1]})),zones:(i.zones||[]).map(S=>({surface:S.surface,pts:Ic(S).map(fr)})),camera:i.camera||null}}function Hp(i){return Sp({eight:i.eight,hole:i.cup,placeR:i.placeR,segments:i.segments,posts:i.posts,arcs:i.arcs,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt})}const Gp=4,Vp=5;function Wp(i){return{par:i,strokes:0,penalties:0,done:!1,holed:!1,picked:!1}}function Xp(i,t){if(i.done)return{penalty:0,done:!0,picked:i.picked};i.strokes+=1;let e=0;return t.holed?(i.done=!0,i.holed=!0,{penalty:e,done:!0,picked:!1}):(t.hazard&&(e=1,i.penalties+=1,i.strokes+=1),i.strokes>=i.par+Gp&&(i.done=!0,i.picked=!0),{penalty:e,done:i.done,picked:i.picked})}function qp(i){return i.picked?i.par+Vp:i.strokes}function Yp(i,t,e=!1){return e?0:i===1||i<=t-1?3:i<=t?2:1}function Dc(i,t,e=!1){if(e)return{key:"picked",label:"Picked up"};if(i===1)return{key:"ace",label:"Hole-in-one!"};const n=i-t;return n<=-3?{key:"albatross",label:"Albatross!"}:n===-2?{key:"eagle",label:"Eagle!"}:n===-1?{key:"birdie",label:"Birdie!"}:n===0?{key:"par",label:"Par"}:n===1?{key:"bogey",label:"Bogey"}:n===2?{key:"double",label:"Double bogey"}:{key:"over",label:"+"+n}}function zc(i,t){const e=i-t;return e===0?"E":e>0?"+"+e:String(e)}const Kp=.9,$p=1.2,jp=14,mu=2.5,gu=1.8,Zp=1.5,wa=15.5,Jp=3,qh=[0,15,-15,30,-30,45,-45,60,-60,72,-72,80,-80,85,-85,89,-89].map(i=>i*Math.PI/180),ba=qh.map(Math.cos),xu=qh.map(Math.sin);function Qp({events:i}){const t=(b,S)=>i&&i.emit(b,S),e={acc:0},n={state:"idle",level:null,index:-1,world:null,score:null,intent:{x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},lastPower:.5,speed:1,pace:gu,shotContact:!1,shotHazard:null,shotHoled:!1,dropAt:null,timer:0,_guideKey:"",_guide:null},s=[r(),r()];function r(){return{x:0,y:0,z:0,visible:!1,alpha:1,mode:"off",vx:0,vz:0}}function o(){const b=n.intent,S=n.world.balls[1];let _=S.x-b.x,v=S.z-b.z;const A=Math.sqrt(_*_+v*v)||1;_/=A,v/=A;const U=Math.cos(b.offset),F=Math.sin(b.offset),V=_*U-v*F,rt=_*F+v*U,J=u(b,V,rt);n.intent={...b,ax:V,az:rt,dx:J.x,dz:J.z},n._guideKey=""}const a=b=>b.power<Gt.POWER_MIN?Gt.POWER_MIN:b.power,c=b=>({x:b.spin,y:b.top}),l=(b,S,_)=>{const v=Math.cos(_),A=Math.sin(_);return{x:b*v-S*A,z:b*A+S*v}};function u(b,S,_){if(!b.spin)return{x:S,z:_};const v=n.world.balls[1],A=v.x-b.x,U=v.z-b.z,F=A*S+U*_,V=S*U-_*A,rt=2*Gt.R,J=F>0&&V*V<rt*rt,gt=J?F-Math.sqrt(rt*rt-V*V):F>0?F:0,ot=gt>1e-6?-d(b.spin,gt):0;if(!J)return l(S,_,ot);const W=b.x+S*gt,z=b.z+_*gt,q=(v.x-W)/rt,j=(v.z-z)/rt,tt=a(b),O=c(b),$=nt=>{const mt=l(S,_,nt),H=pu(n.world,{x:b.x,z:b.z,dx:mt.x,dz:mt.z},O,tt,1e9);return H.hit?q*H.normal.z-j*H.normal.x:null};let ht=ot,B=$(ht);if(B===null)return l(S,_,ot);let at=ht,ft=Math.abs(B),Mt=ht+.02,Pt=$(Mt);for(let nt=0;nt<10&&Pt!==null&&(Math.abs(Pt)<ft&&(at=Mt,ft=Math.abs(Pt)),!(ft<1e-7||Pt===B));nt++){let mt=-Pt*(Mt-ht)/(Pt-B);mt=mt>.3?.3:mt<-.3?-.3:mt,ht=Mt,B=Pt,Mt+=mt,Pt=$(Mt)}return l(S,_,at)}function d(b,S){const _=Gt.CURVE_K*b,v=Gt.CURVE_LEN,A=.02;let U=0,F=0,V=0;for(let rt=0;rt<2e3&&U*U+F*F<S*S;rt++){const J=V<v?_*(V-V*V/(2*v)):_*v/2;U+=Math.cos(J)*A,F+=Math.sin(J)*A,V+=A}return Math.atan2(F,U)}function f(){const b=n.world,S=b.balls[1];let _=b.hole.x-S.x,v=b.hole.z-S.z;const A=Math.sqrt(_*_+v*v)||1;_/=A,v/=A;const U=Math.min(.6*b.placeR,2.5),F=p(S.x-_*U,S.z-v*U)||p(S.x-_*1.6,S.z-v*1.6)||{x:S.x-_*1.2,z:S.z-v*1.2};n.intent={...n.intent,x:F.x,z:F.z,offset:0,spin:0,top:0,power:n.lastPower},o()}let h=NaN,g=NaN;function x(b,S,_,v){const A=n.world,U=(ht,B)=>ur(A,ht,B),F=h===h?Math.sqrt((_-h)*(_-h)+(v-g)*(v-g)):1/0;h=_,g=v;const V=A.balls[1],rt=_-V.x,J=v-V.z,gt=Math.sqrt(rt*rt+J*J),ot=A.placeR-.001;if(gt>ot&&(_=V.x+rt/gt*ot,v=V.z+J/gt*ot),U(_,v))return{x:_,z:v};let W=2*F+.1,z=b,q=S,j=Math.sqrt((_-z)*(_-z)+(v-q)*(v-q));const tt=j/16>.25?.25:j/16<.04?.04:j/16;let O=tt;for(let ht=0;ht<600&&j>1e-4&&O>=.01&&W>1e-4;ht++){const B=(_-z)/j,at=(v-q)/j,ft=O<j?O<W?O:W:j<W?j:W;let Mt=0,Pt=0,nt=j-1e-5;for(let mt=0;mt<ba.length;mt++){const H=B*ba[mt]-at*xu[mt],Q=B*xu[mt]+at*ba[mt],zt=z+H*ft,Qt=q+Q*ft,Ht=Math.sqrt((_-zt)*(_-zt)+(v-Qt)*(v-Qt));if(Ht<nt&&U(zt,Qt)&&(Mt=zt,Pt=Qt,nt=Ht),nt<j-1e-5&&(mt===0||mt%2===0))break}nt<j-1e-5?(z=Mt,q=Pt,j=nt,W-=ft,O=O*2>tt?tt:O*2):O/=2}const $=j>1e-9&&W<j?W>0?W/j:0:1;return m(U,z,q,z+(_-z)*$,q+(v-q)*$)}function m(b,S,_,v,A){let U=0,F=1;for(let V=0;V<16;V++){const rt=(U+F)/2;b(S+(v-S)*rt,_+(A-_)*rt)?U=rt:F=rt}return{x:S+(v-S)*U,z:_+(A-_)*U}}function p(b,S){const _=n.world;if(ur(_,b,S))return{x:b,z:S};const v=_.balls[1];let A=b-v.x,U=S-v.z,F=Math.sqrt(A*A+U*U);const V=2*Gt.R+Gt.PLACE_GAP+.01,rt=_.placeR-.01;if(F>rt&&(A*=rt/F,U*=rt/F,F=rt),F<V){const W=F>1e-6?V/F:0;A=F>1e-6?A*W:-V,U=F>1e-6?U*W:0,F=V}if(ur(_,v.x+A,v.z+U))return{x:v.x+A,z:v.z+U};const J=Math.atan2(U,A);let gt=null,ot=1/0;for(let W=V;W<=rt+1e-9;W+=.25)for(let z=0;z<72;z++){const q=J+z*Math.PI/36,j=v.x+Math.cos(q)*W,tt=v.z+Math.sin(q)*W;if(!ur(_,j,tt))continue;const O=(j-b)*(j-b)+(tt-S)*(tt-S);O<ot&&(ot=O,gt={x:j,z:tt})}return gt}n.load=(b,S)=>{n.level=b,n.index=S,n.world=Hp(b),n.score=Wp(b.par),n.lastPower=.5,n.speed=1,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,n.timer=0,e.acc=0,n.intent={x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},f(),n.state="ready",t("hole:start",{level:b,index:S}),t("shot:ready",{strokes:0,par:b.par,first:!0})},n.retry=()=>n.load(n.level,n.index),n.setPlacement=(b,S)=>{if(n.state!=="ready")return!1;const _=n.intent,v=ur(n.world,_.x,_.z)?x(_.x,_.z,b,S):p(b,S);return!v||v.x===_.x&&v.z===_.z?!1:(n.intent={...n.intent,x:v.x,z:v.z},o(),!0)},n.setAimToward=(b,S)=>{if(n.state!=="ready")return;const _=n.intent,v=n.world.balls[1],A=v.x-_.x,U=v.z-_.z,F=b-_.x,V=S-_.z;F*F+V*V<1e-6||(n.intent={..._,offset:Math.atan2(A*V-U*F,A*F+U*V)},o())},n.rotateAim=b=>{if(n.state!=="ready")return;let S=n.intent.offset+b;for(;S>Math.PI;)S-=2*Math.PI;for(;S<-Math.PI;)S+=2*Math.PI;n.intent={...n.intent,offset:S},o()},n.setSpin=(b,S)=>{const _=n.intent,v=!!(n.level&&n.level.spin),A=S===void 0?_.top:S;let U=v&&b===b?b<-1?-1:b>1?1:b:0,F=v&&A===A?A<-1?-1:A>1?1:A:0;const V=U*U+F*F;if(V>1){const rt=1/Math.sqrt(V);U*=rt,F*=rt}U===_.spin&&F===_.top||(n.intent={..._,spin:U,top:F},n.world&&o())},n.setPower=b=>{const S=b<0?0:b>1?1:b;S!==n.intent.power&&(n.intent={...n.intent,power:S},n.intent.spin&&n.world?o():n._guideKey="")},n.guide=()=>{if(!n.world||n.state!=="ready")return null;const b=n.intent,S=a(b),_=b.x+","+b.z+","+b.dx+","+b.dz+","+b.spin+","+b.top+","+S;if(_===n._guideKey)return n._guide;const v=pu(n.world,b,c(b),S);let A=null;if(v.hit){const U=v.eightSpeed/wa,F=mu+(jp-mu)*(U>1?1:U);A=zp(n.world,v.eightStart.x,v.eightStart.z,v.eightDir.x,v.eightDir.z,{x:v.spin,y:v.top},F,Math.min(Jp,F*.3))}return n._guide={cue:v,eight:A,warn:!v.hit||!!(A&&A.hazard)},n._guideKey=_,n._guide},n.fire=()=>{if(n.state!=="ready")return!1;const b=n.intent,S=a(b);return n.lastPower=S,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,e.acc=0,Oh(n.world,b,c(b),S),n.state="rolling",t("shot:fire",{power:S,spin:b.spin,top:b.top,strokes:n.score.strokes+1}),!0},n.setSpeed=b=>{n.speed=b>1?b:1};function w(){const b=n.world.events;for(let S=0;S<b.length;S++){const _=b[S];switch(_.type){case"contact":n.shotContact=!0,t("ball:contact",{x:_.gx,z:_.gz,nx:_.nx,nz:_.nz,speed:Math.sqrt(_.v8x*_.v8x+_.v8z*_.v8z),cutCos:_.cutCos,spin:_.spin,top:_.top});break;case"wall":t("ball:wall",{id:_.id,x:_.x,z:_.z,nx:_.nx,nz:_.nz,speed:_.speed,kind:_.kind});break;case"hop":t("ball:hop",{x:_.x,z:_.z,speed:_.speed});break;case"holed":n.shotHoled=!0,t("ball:holed",{speed:_.speed});break;case"water":case"oob":n.shotHazard=_.type,n.dropAt={x:_.dropX,z:_.dropZ},t("ball:hazard",{kind:_.type,x:_.x,z:_.z});break;case"whiff":t("ball:whiff",{reason:_.reason,x:_.x,z:_.z});break;case"rest":t("ball:rest",{id:_.id,x:_.x,z:_.z});break;case"ballHit":t("ball:ballhit",{speed:_.speed});break;case"shotEnd":M();break}}b.length=0}function M(){const b=Xp(n.score,{holed:n.shotHoled,hazard:n.shotHazard});t("shot:end",{strokes:n.score.strokes,par:n.score.par,penalty:b.penalty,whiff:!n.shotContact,outcome:n.shotHoled?"holed":n.shotHazard||"rest",picked:b.picked}),n.state="resolving",n.timer=n.shotHoled?$p:n.shotHazard?Kp:b.done?.6:0}function y(){const b=n.score;if(b.done){n.state="done";const S=qp(b);t("hole:done",{index:n.index,level:n.level,strokes:S,par:b.par,picked:b.picked,penalties:b.penalties,stars:Yp(S,b.par,b.picked),term:Dc(S,b.par,b.picked)});return}if(n.dropAt)uu(n.world,n.dropAt.x,n.dropAt.z),t("ball:drop",{x:n.dropAt.x,z:n.dropAt.z}),n.dropAt=null;else{const S=n.world.balls[1];uu(n.world,S.x,S.z)}n.world.balls[0].mode="off",f(),n.state="ready",t("shot:ready",{strokes:b.strokes,par:b.par,first:!1})}function C(){let b=0;const S=n.world.balls;for(let v=0;v<S.length;v++){const A=S[v];if(A.mode!=="cue"&&A.mode!=="roll")continue;const U=A.vx*A.vx+A.vz*A.vz;U>b&&(b=U)}const _=b/(wa*wa);return gu*(1+Zp*(_>1?1:_))}let R=0;return n.update=b=>{if(n.state==="rolling"){const S=C();n.pace=S,R=Np(n.world,b*S*n.speed,e,Math.ceil(240*S*n.speed)+1),w()}else n.state==="resolving"&&(n.timer-=b,n.timer<=0&&y())},n.balls=()=>{const b=n.world;if(!b)return s;const S=n.state==="rolling";for(let _=0;_<2;_++){const v=b.balls[_],A=s[_],U=S?R:1;A.x=v.px+(v.x-v.px)*U,A.z=v.pz+(v.z-v.pz)*U,A.mode=v.mode,A.vx=v.vx,A.vz=v.vz,A.visible=v.mode!=="off"&&v.mode!=="sunk"&&v.mode!=="holed",A.alpha=v.mode==="ghost"?Math.max(0,v.fadeT/Gt.CUE_FADE_T):1,A.y=b.heightAt(A.x,A.z)+Gt.R}if(n.state==="ready"){const _=s[0];_.x=n.intent.x,_.z=n.intent.z,_.mode="placed",_.visible=!0,_.alpha=1,_.vx=0,_.vz=0,_.y=b.heightAt(_.x,_.z)+Gt.R}if(s[1].mode==="holed"||n.shotHoled){const _=s[1];_.visible=!0,_.x=b.hole.x,_.z=b.hole.z,_.y=b.heightAt(_.x,_.z)-Gt.R*.9}return s},n}const vu="eightballgolf.progress",jo=Object.freeze([{id:"classic",name:"Classic",need:0},{id:"tennis",name:"Tennis",need:9},{id:"beach",name:"Beach ball",need:18},{id:"planet",name:"Planet",need:27},{id:"donut",name:"Donut",need:36},{id:"snow",name:"Snowball",need:45},{id:"gold",name:"Gold",need:54}]),Ea=(i,t,e)=>Number.isInteger(i)&&i>=t&&i<=e?i:null;function t0(i,t){const e=i&&typeof i=="object"?i:{},n=Array.isArray(e.holes)?e.holes:[],s=[];for(let c=0;c<t;c++){const l=n[c]&&typeof n[c]=="object"?n[c]:{},u=Ea(l.best,1,99);s.push({best:u,stars:u===null?0:Ea(l.stars,0,3)??0})}const r=Array.isArray(e.seenTips)?[...new Set(e.seenTips.filter(c=>typeof c=="string"&&c.length<40))].slice(0,200):[],o=jo.some(c=>c.id===e.skin)?e.skin:"classic",a=Ea(e.last,0,Math.max(0,t-1));return{v:1,holes:s,skin:o,seenTips:r,muted:e.muted===!0,last:a}}async function e0(i,t={}){const e=t.rounds||Hr,n=e.flatMap(h=>h.holes.map(g=>g.par)),s=n.length,r=new Map;let o=0;for(const h of e)r.set(h.id,o),o+=h.holes.length;let a=null;try{const h=i&&i.load?await i.load(vu):null;typeof h=="string"&&h.length&&(a=JSON.parse(h))}catch{a=null}const c=t0(a,s);n0(c.skin)>Jr(c)&&(c.skin="classic");function l(){if(!(!i||!i.save))try{const h=i.save(vu,JSON.stringify(c));h&&typeof h.catch=="function"&&h.catch(()=>{})}catch{}}const u=h=>Number.isInteger(h)&&h>=0&&h<s,d=()=>{let h=-1;for(let g=0;g<s;g++)c.holes[g].best!==null&&(h=g);return h},f={data:c,get skin(){return c.skin},get muted(){return c.muted},holeCount:s,isUnlocked(h){return u(h)&&h<=d()+1},best(h){return u(h)?c.holes[h].best:null},stars(h){return u(h)?c.holes[h].stars:0},totalStars(){return Jr(c)},roundStars(h){const g=r.get(h),x=e.find(p=>p.id===h);if(g===void 0||!x)return 0;let m=0;for(let p=0;p<x.holes.length;p++)m+=c.holes[g+p].stars;return m},roundTotal(h){const g=r.get(h),x=e.find(M=>M.id===h);if(g===void 0||!x)return{total:0,par:0,complete:!1};let m=0,p=0,w=!0;for(let M=0;M<x.holes.length;M++){p+=n[g+M];const y=c.holes[g+M].best;y===null?w=!1:m+=y}return{total:m,par:p,complete:w}},record(h,g,x){if(!u(h))return{newBest:!1,newStars:!1,firstTime:!1};const m=c.holes[h],p=Math.max(1,Math.round(Number(g)||1)),w=Math.max(0,Math.min(3,Math.round(Number(x)||0))),M=m.best===null,y=m.best===null||p<m.best,C=w>m.stars;return y&&(m.best=p),C&&(m.stars=w),c.last=h,l(),{newBest:y,newStars:C,firstTime:M}},nextIndex(){for(let h=0;h<s;h++)if(c.holes[h].best===null)return f.isUnlocked(h)?h:0;for(let h=0;h<s;h++)if(c.holes[h].stars<3)return h;return c.last??0},skins(){const h=Jr(c);return jo.map(g=>({...g,unlocked:h>=g.need}))},setSkin(h){const g=jo.find(x=>x.id===h);return!g||g.need>Jr(c)||c.skin===h?!1:(c.skin=h,l(),!0)},seenTip(h){return c.seenTips.includes(String(h))},markTip(h){h==null||f.seenTip(h)||(c.seenTips.push(String(h)),l())},setMuted(h){c.muted!==!!h&&(c.muted=!!h,l())},isFresh(){return d()<0}};return f}function Jr(i){let t=0;for(const e of i.holes)t+=e.stars;return t}function n0(i){const t=jo.find(e=>e.id===i);return t?t.need:1/0}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="170",i0=0,_u=1,s0=2,Pl=1,r0=2,pi=3,Gi=0,vn=1,An=2,Fi=0,Xs=1,Mu=2,yu=3,Su=4,Yh=5,Ui=100,o0=101,a0=102,c0=103,l0=104,u0=200,Nc=201,f0=202,h0=203,Uc=204,Ur=205,d0=206,p0=207,m0=208,g0=209,x0=210,v0=211,_0=212,M0=213,y0=214,Fc=0,Oc=1,kc=2,Zs=3,Bc=4,Hc=5,Gc=6,Vc=7,aa=0,S0=1,w0=2,Oi=0,b0=1,E0=2,T0=3,A0=4,C0=5,R0=6,Kh=7,$h=300,Js=301,Qs=302,Wc=303,Xc=304,ca=306,Zo=1e3,_i=1001,qc=1002,Pn=1003,P0=1004,Qr=1005,Bn=1006,Ta=1007,ls=1008,ai=1009,jh=1010,Zh=1011,Fr=1012,Ll=1013,ds=1014,ri=1015,Gr=1016,Il=1017,Dl=1018,tr=1020,Jh=35902,Qh=1021,td=1022,Hn=1023,ed=1024,nd=1025,qs=1026,er=1027,zl=1028,Nl=1029,id=1030,Ul=1031,Fl=1033,Oo=33776,ko=33777,Bo=33778,Ho=33779,Yc=35840,Kc=35841,$c=35842,jc=35843,Zc=36196,Jc=37492,Qc=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,cl=37816,ll=37817,ul=37818,fl=37819,hl=37820,dl=37821,Go=36492,pl=36494,ml=36495,sd=36283,gl=36284,xl=36285,vl=36286,L0=3200,I0=3201,la=0,D0=1,xi="",pn="srgb",rr="srgb-linear",ua="linear",Ue="srgb",_s=7680,wu=519,z0=512,N0=513,U0=514,rd=515,F0=516,O0=517,k0=518,B0=519,bu=35044,ki=35048,Eu="300 es",Mi=2e3,Jo=2001;class or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tu=1234567;const Rr=Math.PI/180,Or=180/Math.PI;function ar(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function cn(i,t,e){return Math.max(t,Math.min(e,i))}function Ol(i,t){return(i%t+t)%t}function H0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function G0(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function V0(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function W0(i,t=1){return t-Math.abs(Ol(i,t*2)-t)}function X0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function q0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Y0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function K0(i,t){return i+Math.random()*(t-i)}function $0(i){return i*(.5-Math.random())}function j0(i){i!==void 0&&(Tu=i);let t=Tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Z0(i){return i*Rr}function J0(i){return i*Or}function Q0(i){return(i&i-1)===0&&i!==0}function tm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function em(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nm(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),h=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ks(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _l={DEG2RAD:Rr,RAD2DEG:Or,generateUUID:ar,clamp:cn,euclideanModulo:Ol,mapLinear:H0,inverseLerp:G0,lerp:Pr,damp:V0,pingpong:W0,smoothstep:X0,smootherstep:q0,randInt:Y0,randFloat:K0,randFloatSpread:$0,seededRandom:j0,degToRad:Z0,radToDeg:J0,isPowerOfTwo:Q0,ceilPowerOfTwo:tm,floorPowerOfTwo:em,setQuaternionFromProperEuler:nm,normalize:gn,denormalize:ks};class re{constructor(t=0,e=0){re.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ee{constructor(t,e,n,s,r,o,a,c,l){Ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],M=s[4],y=s[7],C=s[2],R=s[5],b=s[8];return r[0]=o*x+a*w+c*C,r[3]=o*m+a*M+c*R,r[6]=o*p+a*y+c*b,r[1]=l*x+u*w+d*C,r[4]=l*m+u*M+d*R,r[7]=l*p+u*y+d*b,r[2]=f*x+h*w+g*C,r[5]=f*m+h*M+g*R,r[8]=f*p+h*y+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,h=l*r-o*c,g=e*d+n*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=h*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Ee;function od(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function im(){const i=Qo("canvas");return i.style.display="block",i}const Au={};function Sr(i){i in Au||(Au[i]=!0,console.warn(i))}function sm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function rm(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function om(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ie={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ue&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ue&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xi?ua:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Cu=[.64,.33,.3,.6,.15,.06],Ru=[.2126,.7152,.0722],Pu=[.3127,.329],Lu=new Ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new Ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ie.define({[rr]:{primaries:Cu,whitePoint:Pu,transfer:ua,toXYZ:Lu,fromXYZ:Iu,luminanceCoefficients:Ru,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Cu,whitePoint:Pu,transfer:Ue,toXYZ:Lu,fromXYZ:Iu,luminanceCoefficients:Ru,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});let Ms;class am{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=Qo("canvas")),Ms.width=t.width,Ms.height=t.height;const n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Qo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cm=0;class ad{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=ar(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ca(s[o].image)):r.push(Ca(s[o]))}else r=Ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?am.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lm=0;class mn extends or{constructor(t=mn.DEFAULT_IMAGE,e=mn.DEFAULT_MAPPING,n=_i,s=_i,r=Bn,o=ls,a=Hn,c=ai,l=mn.DEFAULT_ANISOTROPY,u=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=ar(),this.name="",this.source=new ad(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=$h;mn.DEFAULT_ANISOTROPY=1;class Ge{constructor(t=0,e=0,n=0,s=1){Ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,y=(h+1)/2,C=(p+1)/2,R=(u+f)/4,b=(d+x)/4,S=(g+m)/4;return M>y&&M>C?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=b/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=S/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=b/r,s=S/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-x)/w,this.z=(f-u)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class um extends or{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ad(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends um{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cd extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fm extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const f=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==f||l!==h||u!==g){let m=1-a;const p=c*f+l*h+u*g+d*x,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),R=Math.atan2(C,p*w);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const y=a*w;if(c=c*m+f*y,l=l*m+h*y,u=u*m+g*y,d=d*m+x*y,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=C,l*=C,u*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*h-l*f,t[e+1]=c*g+u*f+l*d-a*h,t[e+2]=l*g+u*h+a*f-c*d,t[e+3]=u*g-a*d-c*f-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,e=0,n=0){st.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(cn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ra=new st,Du=new gs;class Xi{constructor(t=new st(1/0,1/0,1/0),e=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),eo.subVectors(this.max,hr),ys.subVectors(t.a,hr),Ss.subVectors(t.b,hr),ws.subVectors(t.c,hr),Ti.subVectors(Ss,ys),Ai.subVectors(ws,Ss),Yi.subVectors(ys,ws);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Yi.z,Yi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Yi.z,0,-Yi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Yi.y,Yi.x,0];return!Pa(e,ys,Ss,ws,eo)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,ys,Ss,ws,eo))?!1:(no.crossVectors(Ti,Ai),e=[no.x,no.y,no.z],Pa(e,ys,Ss,ws,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new st,new st,new st,new st,new st,new st,new st,new st],Wn=new st,to=new Xi,ys=new st,Ss=new st,ws=new st,Ti=new st,Ai=new st,Yi=new st,hr=new st,eo=new st,no=new st,Ki=new st;function Pa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=t.dot(Ki),l=e.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const hm=new Xi,dr=new st,La=new st;class qi{constructor(t=new st,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);const e=dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(La)),this.expandByPoint(dr.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new st,Ia=new st,io=new st,Ci=new st,Da=new st,so=new st,za=new st;class dm{constructor(t=new st,e=new st(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ia.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(Ia);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=Ci.dot(this.direction),c=-Ci.dot(io),l=Ci.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ia).addScaledVector(io,f),h}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){Da.subVectors(e,t),so.subVectors(n,t),za.crossVectors(Da,so);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const c=a*this.direction.dot(so.crossVectors(Ci,so));if(c<0)return null;const l=a*this.direction.dot(Da.cross(Ci));if(l<0||c+l>o)return null;const u=-a*Ci.dot(za);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,d,f,h,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,h=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=h+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+h*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,h=c*d,g=l*u,x=l*d;e[0]=f+x*a,e[4]=g*a-h,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,h=c*d,g=l*u,x=l*d;e[0]=f-x*a,e[4]=-o*d,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,h=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-h,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=h*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-f*d,e[8]=g*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*d+g,e[10]=f-x*d}else if(t.order==="XZY"){const f=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+x,e[5]=o*u,e[9]=h*d-g,e[2]=g*d-h,e[6]=a*u,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pm,t,mm)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ri.crossVectors(n,Sn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ri.crossVectors(n,Sn)),Ri.normalize(),ro.crossVectors(Sn,Ri),s[0]=Ri.x,s[4]=ro.x,s[8]=Sn.x,s[1]=Ri.y,s[5]=ro.y,s[9]=Sn.y,s[2]=Ri.z,s[6]=ro.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],M=n[7],y=n[11],C=n[15],R=s[0],b=s[4],S=s[8],_=s[12],v=s[1],A=s[5],U=s[9],F=s[13],V=s[2],rt=s[6],J=s[10],gt=s[14],ot=s[3],W=s[7],z=s[11],q=s[15];return r[0]=o*R+a*v+c*V+l*ot,r[4]=o*b+a*A+c*rt+l*W,r[8]=o*S+a*U+c*J+l*z,r[12]=o*_+a*F+c*gt+l*q,r[1]=u*R+d*v+f*V+h*ot,r[5]=u*b+d*A+f*rt+h*W,r[9]=u*S+d*U+f*J+h*z,r[13]=u*_+d*F+f*gt+h*q,r[2]=g*R+x*v+m*V+p*ot,r[6]=g*b+x*A+m*rt+p*W,r[10]=g*S+x*U+m*J+p*z,r[14]=g*_+x*F+m*gt+p*q,r[3]=w*R+M*v+y*V+C*ot,r[7]=w*b+M*A+y*rt+C*W,r[11]=w*S+M*U+y*J+C*z,r[15]=w*_+M*F+y*gt+C*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],h=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*h-n*c*h)+x*(+e*c*h-e*l*f+r*o*f-s*o*h+s*l*u-r*c*u)+m*(+e*l*d-e*a*h-r*o*d+n*o*h+r*a*u-n*l*u)+p*(-s*a*u-e*c*d+e*a*f+s*o*d-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],h=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=d*m*l-x*f*l+x*c*h-a*m*h-d*c*p+a*f*p,M=g*f*l-u*m*l-g*c*h+o*m*h+u*c*p-o*f*p,y=u*x*l-g*d*l+g*a*h-o*x*h-u*a*p+o*d*p,C=g*d*c-u*x*c-g*a*f+o*x*f+u*a*m-o*d*m,R=e*w+n*M+s*y+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return t[0]=w*b,t[1]=(x*f*r-d*m*r-x*s*h+n*m*h+d*s*p-n*f*p)*b,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*b,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*h-n*c*h)*b,t[4]=M*b,t[5]=(u*m*r-g*f*r+g*s*h-e*m*h-u*s*p+e*f*p)*b,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*b,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*h+e*c*h)*b,t[8]=y*b,t[9]=(g*d*r-u*x*r-g*n*h+e*x*h+u*n*p-e*d*p)*b,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*b,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*h-e*a*h)*b,t[12]=C*b,t[13]=(u*x*s-g*d*s+g*n*f-e*x*f-u*n*m+e*d*m)*b,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*b,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,h=r*u,g=r*d,x=o*u,m=o*d,p=a*d,w=c*l,M=c*u,y=c*d,C=n.x,R=n.y,b=n.z;return s[0]=(1-(x+p))*C,s[1]=(h+y)*C,s[2]=(g-M)*C,s[3]=0,s[4]=(h-y)*R,s[5]=(1-(f+p))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+M)*b,s[9]=(m-w)*b,s[10]=(1-(f+x))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=bs.set(s[0],s[1],s[2]).length();const o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xn.copy(this);const l=1/r,u=1/o,d=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,e.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Mi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let h,g;if(a===Mi)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jo)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mi){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),f=(e+t)*l,h=(n+s)*u;let g,x;if(a===Mi)g=(o+r)*d,x=-2*d;else if(a===Jo)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bs=new st,Xn=new De,pm=new st(0,0,0),mm=new st(1,1,1),Ri=new st,ro=new st,Sn=new st,zu=new De,Nu=new gs;class Ln{constructor(t=0,e=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(cn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class ld{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gm=0;const Uu=new st,Es=new gs,fi=new De,oo=new st,pr=new st,xm=new st,vm=new gs,Fu=new st(1,0,0),Ou=new st(0,1,0),ku=new st(0,0,1),Bu={type:"added"},_m={type:"removed"},Ts={type:"childadded",child:null},Na={type:"childremoved",child:null};class ln extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new st,e=new Ln,n=new gs,s=new st(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Ee}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Fu,t)}rotateY(t){return this.rotateOnAxis(Ou,t)}rotateZ(t){return this.rotateOnAxis(ku,t)}translateOnAxis(t,e){return Uu.copy(t).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fu,t)}translateY(t){return this.translateOnAxis(Ou,t)}translateZ(t){return this.translateOnAxis(ku,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(pr,oo,this.up):fi.lookAt(oo,pr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(fi),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bu),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_m),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bu),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,xm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,vm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ln.DEFAULT_UP=new st(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new st,hi=new st,Ua=new st,di=new st,As=new st,Cs=new st,Hu=new st,Fa=new st,Oa=new st,ka=new st,Ba=new Ge,Ha=new Ge,Ga=new Ge;class $n{constructor(t=new st,e=new st,n=new st){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qn.subVectors(t,e),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qn.subVectors(s,e),hi.subVectors(n,e),Ua.subVectors(t,e);const o=qn.dot(qn),a=qn.dot(hi),c=qn.dot(Ua),l=hi.dot(hi),u=hi.dot(Ua),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ba.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),Ba.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ba,r.x),o.addScaledVector(Ha,r.y),o.addScaledVector(Ga,r.z),o}static isFrontFacing(t,e,n,s){return qn.subVectors(n,e),hi.subVectors(t,e),qn.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),qn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return $n.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,n),Cs.subVectors(r,n),Fa.subVectors(t,n);const c=As.dot(Fa),l=Cs.dot(Fa);if(c<=0&&l<=0)return e.copy(n);Oa.subVectors(t,s);const u=As.dot(Oa),d=Cs.dot(Oa);if(u>=0&&d<=u)return e.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(As,o);ka.subVectors(t,r);const h=As.dot(ka),g=Cs.dot(ka);if(g>=0&&h<=g)return e.copy(r);const x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Cs,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Hu.subVectors(r,s),a=(d-u)/(d-u+(h-g)),e.copy(s).addScaledVector(Hu,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(As,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class he{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=Ol(t,1),e=cn(e,0,1),n=cn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Va(o,r,t+1/3),this.g=Va(o,r,t),this.b=Va(o,r,t-1/3)}return Ie.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const n=ud[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return Ie.fromWorkingColorSpace(fn.copy(this),t),Math.round(cn(fn.r*255,0,255))*65536+Math.round(cn(fn.g*255,0,255))*256+Math.round(cn(fn.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=pn){Ie.fromWorkingColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,s=fn.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(ao);const n=Pr(Pi.h,ao.h,e),s=Pr(Pi.s,ao.s,e),r=Pr(Pi.l,ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new he;he.NAMES=ud;let Mm=0;class xs extends or{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ar(),this.name="",this.blending=Xs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uc,this.blendDst=Ur,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==Gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ur&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fd extends xs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ze=new st,co=new re;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bu,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bu&&(t.usage=this.usage),t}}class hd extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dd extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ym=0;const Dn=new De,Wa=new ln,Rs=new st,wn=new Xi,mr=new Xi,on=new st;class je extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(od(t)?dd:hd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Wa.lookAt(t),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(wn.min,mr.min),wn.expandByPoint(on),on.addVectors(wn.max,mr.max),wn.expandByPoint(on)):(wn.expandByPoint(mr.min),wn.expandByPoint(mr.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)on.fromBufferAttribute(a,l),c&&(Rs.fromBufferAttribute(t,l),on.add(Rs)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<n.count;S++)a[S]=new st,c[S]=new st;const l=new st,u=new st,d=new st,f=new re,h=new re,g=new re,x=new st,m=new st;function p(S,_,v){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,_),d.fromBufferAttribute(n,v),f.fromBufferAttribute(r,S),h.fromBufferAttribute(r,_),g.fromBufferAttribute(r,v),u.sub(l),d.sub(l),h.sub(f),g.sub(f);const A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(A),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(A),a[S].add(x),a[_].add(x),a[v].add(x),c[S].add(m),c[_].add(m),c[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let S=0,_=w.length;S<_;++S){const v=w[S],A=v.start,U=v.count;for(let F=A,V=A+U;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new st,y=new st,C=new st,R=new st;function b(S){C.fromBufferAttribute(s,S),R.copy(C);const _=a[S];M.copy(_),M.sub(C.multiplyScalar(C.dot(_))).normalize(),y.crossVectors(R,_);const A=y.dot(c[S])<0?-1:1;o.setXYZW(S,M.x,M.y,M.z,A)}for(let S=0,_=w.length;S<_;++S){const v=w[S],A=v.start,U=v.count;for(let F=A,V=A+U;F<V;F+=3)b(t.getX(F+0)),b(t.getX(F+1)),b(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const s=new st,r=new st,o=new st,a=new st,c=new st,l=new st,u=new st,d=new st;if(t)for(let f=0,h=t.count;f<h;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new Ye(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=t(f,n);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gu=new De,$i=new dm,lo=new qi,Vu=new st,uo=new st,fo=new st,ho=new st,Xa=new st,po=new st,Wu=new st,mo=new st;class Ve extends ln{constructor(t=new je,e=new fd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Xa.fromBufferAttribute(d,t),o?po.addScaledVector(Xa,u):po.addScaledVector(Xa.sub(e),u))}e.add(po)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(lo.containsPoint($i.origin)===!1&&($i.intersectSphere(lo,Vu)===null||$i.origin.distanceToSquared(Vu)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),$i.copy(t.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=w,C=M;y<C;y+=3){const R=a.getX(y),b=a.getX(y+1),S=a.getX(y+2);s=go(this,p,t,n,l,u,d,R,b,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const w=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=go(this,o,t,n,l,u,d,w,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),M=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=w,C=M;y<C;y+=3){const R=y,b=y+1,S=y+2;s=go(this,p,t,n,l,u,d,R,b,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const w=m,M=m+1,y=m+2;s=go(this,o,t,n,l,u,d,w,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Sm(i,t,e,n,s,r,o,a){let c;if(t.side===vn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Gi,a),c===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(mo);return l<e.near||l>e.far?null:{distance:l,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,uo),i.getVertexPosition(c,fo),i.getVertexPosition(l,ho);const u=Sm(i,t,e,n,uo,fo,ho,Wu);if(u){const d=new st;$n.getBarycoord(Wu,uo,fo,ho,d),s&&(u.uv=$n.getInterpolatedAttribute(s,a,c,l,d,new re)),r&&(u.uv1=$n.getInterpolatedAttribute(r,a,c,l,d,new re)),o&&(u.normal=$n.getInterpolatedAttribute(o,a,c,l,d,new st),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new st,materialIndex:0};$n.getNormal(uo,fo,ho,f.normal),u.face=f,u.barycoord=d}return u}class jn extends je{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function g(x,m,p,w,M,y,C,R,b,S,_){const v=y/b,A=C/S,U=y/2,F=C/2,V=R/2,rt=b+1,J=S+1;let gt=0,ot=0;const W=new st;for(let z=0;z<J;z++){const q=z*A-F;for(let j=0;j<rt;j++){const tt=j*v-U;W[x]=tt*w,W[m]=q*M,W[p]=V,l.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=R>0?1:-1,u.push(W.x,W.y,W.z),d.push(j/b),d.push(1-z/S),gt+=1}}for(let z=0;z<S;z++)for(let q=0;q<b;q++){const j=f+q+rt*z,tt=f+q+rt*(z+1),O=f+(q+1)+rt*(z+1),$=f+(q+1)+rt*z;c.push(j,tt,$),c.push(tt,O,$),ot+=6}a.addGroup(h,ot,_),h+=ot,f+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xn(i){const t={};for(let e=0;e<i.length;e++){const n=nr(i[e]);for(const s in n)t[s]=n[s]}return t}function wm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}const bm={clone:nr,merge:xn};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends xs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=wm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class md extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new st,Xu=new re,qu=new re;class Tn extends md{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,Xu,qu),e.subVectors(qu,Xu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ps=-90,Ls=1;class Am extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Ps,Ls,t,e);s.layers=this.layers,this.add(s);const r=new Tn(Ps,Ls,t,e);r.layers=this.layers,this.add(r);const o=new Tn(Ps,Ls,t,e);o.layers=this.layers,this.add(o);const a=new Tn(Ps,Ls,t,e);a.layers=this.layers,this.add(a);const c=new Tn(Ps,Ls,t,e);c.layers=this.layers,this.add(c);const l=new Tn(Ps,Ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gd extends mn{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Js,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cm extends ps{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jn(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Fi});r.uniforms.tEquirect.value=e;const o=new Ve(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=Bn),new Am(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const qa=new st,Rm=new st,Pm=new Ee;class is{constructor(t=new st(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qa.subVectors(n,e).cross(Rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pm.getNormalMatrix(t),s=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new qi,xo=new st;class kl{constructor(t=new is,e=new is,n=new is,s=new is,r=new is,o=new is){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],h=s[8],g=s[9],x=s[10],m=s[11],p=s[12],w=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-h,y-p).normalize(),n[1].setComponents(c+r,f+l,m+h,y+p).normalize(),n[2].setComponents(c+o,f+u,m+g,y+w).normalize(),n[3].setComponents(c-o,f-u,m-g,y-w).normalize(),n[4].setComponents(c-a,f-d,m-x,y-M).normalize(),e===Mi)n[5].setComponents(c+a,f+d,m+x,y+M).normalize();else if(e===Jo)n[5].setComponents(a,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xo.x=s.normal.x>0?t.max.x:t.min.x,xo.y=s.normal.y>0?t.max.y:t.min.y,xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lm(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const x=d[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class vs extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,f=e/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const w=p*f-o;for(let M=0;M<l;M++){const y=M*d-r;g.push(y,-w,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const M=w+l*p,y=w+l*(p+1),C=w+1+l*(p+1),R=w+1+l*p;h.push(M,y,R),h.push(y,C,R)}this.setIndex(h),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dm=`#ifdef USE_ALPHAHASH
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
#endif`,zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
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
#endif`,Hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xm=`#ifdef USE_IRIDESCENCE
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
#endif`,qm=`#ifdef USE_BUMPMAP
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eg=`#define PI 3.141592653589793
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
} // validated`,ng=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ig=`vec3 transformedNormal = objectNormal;
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
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wg=`uniform bool receiveShadow;
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
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
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
#endif`,Pg=`struct PhysicalMaterial {
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
}`,Lg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
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
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ox=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gx=`float getShadowMask() {
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
}`,xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,_x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,Ox=`#if DEPTH_PACKING == 3200
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
}`,kx=`#define DISTANCE
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
}`,Bx=`#define DISTANCE
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,qx=`uniform vec3 diffuse;
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
}`,Yx=`#define LAMBERT
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
}`,Kx=`#define LAMBERT
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
}`,$x=`#define MATCAP
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
}`,jx=`#define MATCAP
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
}`,Zx=`#define NORMAL
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
}`,Jx=`#define NORMAL
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
}`,Qx=`#define PHONG
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
}`,tv=`#define PHONG
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
}`,ev=`#define STANDARD
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
}`,nv=`#define STANDARD
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
}`,iv=`#define TOON
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
}`,sv=`#define TOON
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
}`,rv=`uniform float size;
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,cv=`uniform vec3 color;
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
}`,lv=`uniform float rotation;
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
}`,uv=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:Im,alphahash_pars_fragment:Dm,alphamap_fragment:zm,alphamap_pars_fragment:Nm,alphatest_fragment:Um,alphatest_pars_fragment:Fm,aomap_fragment:Om,aomap_pars_fragment:km,batching_pars_vertex:Bm,batching_vertex:Hm,begin_vertex:Gm,beginnormal_vertex:Vm,bsdfs:Wm,iridescence_fragment:Xm,bumpmap_pars_fragment:qm,clipping_planes_fragment:Ym,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:$m,clipping_planes_vertex:jm,color_fragment:Zm,color_pars_fragment:Jm,color_pars_vertex:Qm,color_vertex:tg,common:eg,cube_uv_reflection_fragment:ng,defaultnormal_vertex:ig,displacementmap_pars_vertex:sg,displacementmap_vertex:rg,emissivemap_fragment:og,emissivemap_pars_fragment:ag,colorspace_fragment:cg,colorspace_pars_fragment:lg,envmap_fragment:ug,envmap_common_pars_fragment:fg,envmap_pars_fragment:hg,envmap_pars_vertex:dg,envmap_physical_pars_fragment:bg,envmap_vertex:pg,fog_vertex:mg,fog_pars_vertex:gg,fog_fragment:xg,fog_pars_fragment:vg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:Mg,lights_lambert_fragment:yg,lights_lambert_pars_fragment:Sg,lights_pars_begin:wg,lights_toon_fragment:Eg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Cg,lights_physical_fragment:Rg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Lg,lights_fragment_maps:Ig,lights_fragment_end:Dg,logdepthbuf_fragment:zg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:kg,map_particle_fragment:Bg,map_particle_pars_fragment:Hg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Wg,morphcolor_vertex:Xg,morphnormal_vertex:qg,morphtarget_pars_vertex:Yg,morphtarget_vertex:Kg,normal_fragment_begin:$g,normal_fragment_maps:jg,normal_pars_fragment:Zg,normal_pars_vertex:Jg,normal_vertex:Qg,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:sx,opaque_fragment:rx,packing:ox,premultiplied_alpha_fragment:ax,project_vertex:cx,dithering_fragment:lx,dithering_pars_fragment:ux,roughnessmap_fragment:fx,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:xx,skinning_pars_vertex:vx,skinning_vertex:_x,skinnormal_vertex:Mx,specularmap_fragment:yx,specularmap_pars_fragment:Sx,tonemapping_fragment:wx,tonemapping_pars_fragment:bx,transmission_fragment:Ex,transmission_pars_fragment:Tx,uv_pars_fragment:Ax,uv_pars_vertex:Cx,uv_vertex:Rx,worldpos_vertex:Px,background_vert:Lx,background_frag:Ix,backgroundCube_vert:Dx,backgroundCube_frag:zx,cube_vert:Nx,cube_frag:Ux,depth_vert:Fx,depth_frag:Ox,distanceRGBA_vert:kx,distanceRGBA_frag:Bx,equirect_vert:Hx,equirect_frag:Gx,linedashed_vert:Vx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:qx,meshlambert_vert:Yx,meshlambert_frag:Kx,meshmatcap_vert:$x,meshmatcap_frag:jx,meshnormal_vert:Zx,meshnormal_frag:Jx,meshphong_vert:Qx,meshphong_frag:tv,meshphysical_vert:ev,meshphysical_frag:nv,meshtoon_vert:iv,meshtoon_frag:sv,points_vert:rv,points_frag:ov,shadow_vert:av,shadow_frag:cv,sprite_vert:lv,sprite_frag:uv},ee={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},envMapRotation:{value:new Ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}},ii={basic:{uniforms:xn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:xn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new he(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:xn([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:xn([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:xn([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new he(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:xn([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:xn([ee.points,ee.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:xn([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:xn([ee.common,ee.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:xn([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:xn([ee.sprite,ee.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ee}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:xn([ee.common,ee.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:xn([ee.lights,ee.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};ii.physical={uniforms:xn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const vo={r:0,b:0,g:0},Zi=new Ln,fv=new De;function hv(i,t,e,n,s,r,o){const a=new he(0);let c=r===!0?0:1,l,u,d=null,f=0,h=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function x(w){let M=!1;const y=g(w);y===null?p(a,c):y&&y.isColor&&(p(y,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===ca)?(u===void 0&&(u=new Ve(new jn(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:nr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zi.copy(M.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fv.makeRotationFromEuler(Zi)),u.material.toneMapped=Ie.getTransfer(y.colorSpace)!==Ue,(d!==y||f!==y.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,h=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ve(new vs(2,2),new _n({name:"BackgroundMaterial",uniforms:nr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ie.getTransfer(y.colorSpace)!==Ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,M){w.getRGB(vo,pd(i)),n.buffers.color.setClear(vo.r,vo.g,vo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:x,addToRenderList:m}}function dv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(v,A,U,F,V){let rt=!1;const J=d(F,U,A);r!==J&&(r=J,l(r.object)),rt=h(v,F,U,V),rt&&g(v,F,U,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,y(v,A,U,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function d(v,A,U){const F=U.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let rt=V[A.id];rt===void 0&&(rt={},V[A.id]=rt);let J=rt[F];return J===void 0&&(J=f(c()),rt[F]=J),J}function f(v){const A=[],U=[],F=[];for(let V=0;V<e;V++)A[V]=0,U[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:F,object:v,attributes:{},index:null}}function h(v,A,U,F){const V=r.attributes,rt=A.attributes;let J=0;const gt=U.getAttributes();for(const ot in gt)if(gt[ot].location>=0){const z=V[ot];let q=rt[ot];if(q===void 0&&(ot==="instanceMatrix"&&v.instanceMatrix&&(q=v.instanceMatrix),ot==="instanceColor"&&v.instanceColor&&(q=v.instanceColor)),z===void 0||z.attribute!==q||q&&z.data!==q.data)return!0;J++}return r.attributesNum!==J||r.index!==F}function g(v,A,U,F){const V={},rt=A.attributes;let J=0;const gt=U.getAttributes();for(const ot in gt)if(gt[ot].location>=0){let z=rt[ot];z===void 0&&(ot==="instanceMatrix"&&v.instanceMatrix&&(z=v.instanceMatrix),ot==="instanceColor"&&v.instanceColor&&(z=v.instanceColor));const q={};q.attribute=z,z&&z.data&&(q.data=z.data),V[ot]=q,J++}r.attributes=V,r.attributesNum=J,r.index=F}function x(){const v=r.newAttributes;for(let A=0,U=v.length;A<U;A++)v[A]=0}function m(v){p(v,0)}function p(v,A){const U=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;U[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),V[v]!==A&&(i.vertexAttribDivisor(v,A),V[v]=A)}function w(){const v=r.newAttributes,A=r.enabledAttributes;for(let U=0,F=A.length;U<F;U++)A[U]!==v[U]&&(i.disableVertexAttribArray(U),A[U]=0)}function M(v,A,U,F,V,rt,J){J===!0?i.vertexAttribIPointer(v,A,U,V,rt):i.vertexAttribPointer(v,A,U,F,V,rt)}function y(v,A,U,F){x();const V=F.attributes,rt=U.getAttributes(),J=A.defaultAttributeValues;for(const gt in rt){const ot=rt[gt];if(ot.location>=0){let W=V[gt];if(W===void 0&&(gt==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),gt==="instanceColor"&&v.instanceColor&&(W=v.instanceColor)),W!==void 0){const z=W.normalized,q=W.itemSize,j=t.get(W);if(j===void 0)continue;const tt=j.buffer,O=j.type,$=j.bytesPerElement,ht=O===i.INT||O===i.UNSIGNED_INT||W.gpuType===Ll;if(W.isInterleavedBufferAttribute){const B=W.data,at=B.stride,ft=W.offset;if(B.isInstancedInterleavedBuffer){for(let Mt=0;Mt<ot.locationSize;Mt++)p(ot.location+Mt,B.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Mt=0;Mt<ot.locationSize;Mt++)m(ot.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Mt=0;Mt<ot.locationSize;Mt++)M(ot.location+Mt,q/ot.locationSize,O,z,at*$,(ft+q/ot.locationSize*Mt)*$,ht)}else{if(W.isInstancedBufferAttribute){for(let B=0;B<ot.locationSize;B++)p(ot.location+B,W.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let B=0;B<ot.locationSize;B++)m(ot.location+B);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let B=0;B<ot.locationSize;B++)M(ot.location+B,q/ot.locationSize,O,z,q*$,q/ot.locationSize*B*$,ht)}}else if(J!==void 0){const z=J[gt];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(ot.location,z);break;case 3:i.vertexAttrib3fv(ot.location,z);break;case 4:i.vertexAttrib4fv(ot.location,z);break;default:i.vertexAttrib1fv(ot.location,z)}}}}w()}function C(){S();for(const v in n){const A=n[v];for(const U in A){const F=A[U];for(const V in F)u(F[V].object),delete F[V];delete A[U]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const A=n[v.id];for(const U in A){const F=A[U];for(const V in F)u(F[V].object),delete F[V];delete A[U]}delete n[v.id]}function b(v){for(const A in n){const U=n[A];if(U[v.id]===void 0)continue;const F=U[v.id];for(const V in F)u(F[V].object),delete F[V];delete U[v.id]}}function S(){_(),o=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:_,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function pv(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];e.update(h,n,1)}function c(l,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function mv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Hn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const S=b===Gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ai&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ri&&!S)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:C,maxSamples:R}}function gv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new is,a=new Ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const w=r?0:n,M=w*4;let y=p.clippingState||null;c.value=y,y=u(g,f,M,h);for(let C=0;C!==M;++C)y[C]=e[C];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,h,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=h+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=h;M!==x;++M,y+=4)o.copy(d[M]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function xv(i){let t=new WeakMap;function e(o,a){return a===Wc?o.mapping=Js:a===Xc&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wc||a===Xc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Cm(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class vd extends md{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gs=4,Yu=[.125,.215,.35,.446,.526,.582],os=20,Ya=new vd,Ku=new he;let Ka=null,$a=0,ja=0,Za=!1;const ss=(1+Math.sqrt(5))/2,Is=1/ss,$u=[new st(-ss,Is,0),new st(ss,Is,0),new st(-Is,0,ss),new st(Is,0,ss),new st(0,ss,-Is),new st(0,ss,Is),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)];class ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ka=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,$a,ja),this._renderer.xr.enabled=Za,t.scissorTest=!1,_o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Gr,format:Hn,colorSpace:rr,depthBuffer:!1},s=Zu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vv(r)),this._blurMaterial=_v(r,t,e)}return s}_compileMaterial(t){const e=new Ve(this._lodPlanes[0],t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,s){const a=new Tn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ku),u.toneMapping=Oi,u.autoClear=!1;const h=new fd({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Ve(new jn,h);let x=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,x=!0):(h.color.copy(Ku),x=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;_o(s,w*M,p>2?M:0,M,M),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Js||t.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;_o(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ya)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$u[(s-r-1)%$u.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ve(this._lodPlanes[s],l),f=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*os-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const p=[];let w=0;for(let b=0;b<os;++b){const S=b/x,_=Math.exp(-S*S/2);p.push(_),b===0?w+=_:b<m&&(w+=2*_)}for(let b=0;b<p.length;b++)p[b]=p[b]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const y=this._sizeLods[s],C=3*y*(s>M-Gs?s-M+Gs:0),R=4*(this._cubeSize-y);_o(e,C,R,3*y,2*y),c.setRenderTarget(e),c.render(d,Ya)}}function vv(i){const t=[],e=[],n=[];let s=i;const r=i-Gs+1+Yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Gs?c=Yu[o-i+Gs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*h),M=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let R=0;R<h;R++){const b=R%3*2/3-1,S=R>2?0:-1,_=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];w.set(_,x*g*R),M.set(f,m*g*R);const v=[R,R,R,R,R,R];y.set(v,p*g*R)}const C=new je;C.setAttribute("position",new Ye(w,x)),C.setAttribute("uv",new Ye(M,m)),C.setAttribute("faceIndex",new Ye(y,p)),t.push(C),s>Gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zu(i,t,e){const n=new ps(i,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _v(i,t,e){const n=new Float32Array(os),s=new st(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ju(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Qu(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function Mv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wc||c===Xc,u=c===Js||c===Qs;if(l||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ju(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new ju(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function yv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sv(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const x=h[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){const f=[],h=d.index,g=d.attributes.position;let x=0;if(h!==null){const w=h.array;x=h.version;for(let M=0,y=w.length;M<y;M+=3){const C=w[M+0],R=w[M+1],b=w[M+2];f.push(C,R,R,b,b,C)}}else if(g!==void 0){const w=g.array;x=g.version;for(let M=0,y=w.length/3-1;M<y;M+=3){const C=M+0,R=M+1,b=M+2;f.push(C,R,R,b,b,C)}}else return;const m=new(od(f)?dd:hd)(f,1);m.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function wv(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,f*o,g),e.update(h,n,g))}function u(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,n,1)}function d(f,h,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function bv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ev(i,t,e){const n=new WeakMap,s=new Ge;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let _=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;h===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const R=new Float32Array(y*C*4*d),b=new cd(R,y,C,d);b.type=ri,b.needsUpdate=!0;const S=M*4;for(let v=0;v<d;v++){const A=m[v],U=p[v],F=w[v],V=y*C*4*v;for(let rt=0;rt<A.count;rt++){const J=rt*S;h===!0&&(s.fromBufferAttribute(A,rt),R[V+J+0]=s.x,R[V+J+1]=s.y,R[V+J+2]=s.z,R[V+J+3]=0),g===!0&&(s.fromBufferAttribute(U,rt),R[V+J+4]=s.x,R[V+J+5]=s.y,R[V+J+6]=s.z,R[V+J+7]=0),x===!0&&(s.fromBufferAttribute(F,rt),R[V+J+8]=s.x,R[V+J+9]=s.y,R[V+J+10]=s.z,R[V+J+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:b,size:new re(y,C)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];const g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Tv(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class _d extends mn{constructor(t,e,n,s,r,o,a,c,l,u=qs){if(u!==qs&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qs&&(n=ds),n===void 0&&u===er&&(n=tr),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=c!==void 0?c:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Md=new mn,tf=new _d(1,1),yd=new cd,Sd=new fm,wd=new gd,ef=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),of=new Float32Array(4);function cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fa(i,t){let e=nf[t];e===void 0&&(e=new Int32Array(t),nf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Av(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Rv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function Pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function Lv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;of.set(n),i.uniformMatrix2fv(this.addr,!1,of),sn(e,n)}}function Iv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),sn(e,n)}}function Dv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;sf.set(n),i.uniformMatrix4fv(this.addr,!1,sf),sn(e,n)}}function zv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function Uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function Ov(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function Bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function Hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Gv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tf.compareFunction=rd,r=tf):r=Md,e.setTexture2D(t||r,s)}function Vv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sd,s)}function Wv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wd,s)}function Xv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yd,s)}function qv(i){switch(i){case 5126:return Av;case 35664:return Cv;case 35665:return Rv;case 35666:return Pv;case 35674:return Lv;case 35675:return Iv;case 35676:return Dv;case 5124:case 35670:return zv;case 35667:case 35671:return Nv;case 35668:case 35672:return Uv;case 35669:case 35673:return Fv;case 5125:return Ov;case 36294:return kv;case 36295:return Bv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Vv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function Yv(i,t){i.uniform1fv(this.addr,t)}function Kv(i,t){const e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function $v(i,t){const e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function jv(i,t){const e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function Zv(i,t){const e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jv(i,t){const e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Qv(i,t){const e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function t1(i,t){i.uniform1iv(this.addr,t)}function e1(i,t){i.uniform2iv(this.addr,t)}function n1(i,t){i.uniform3iv(this.addr,t)}function i1(i,t){i.uniform4iv(this.addr,t)}function s1(i,t){i.uniform1uiv(this.addr,t)}function r1(i,t){i.uniform2uiv(this.addr,t)}function o1(i,t){i.uniform3uiv(this.addr,t)}function a1(i,t){i.uniform4uiv(this.addr,t)}function c1(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Md,r[o])}function l1(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Sd,r[o])}function u1(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wd,r[o])}function f1(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yd,r[o])}function h1(i){switch(i){case 5126:return Yv;case 35664:return Kv;case 35665:return $v;case 35666:return jv;case 35674:return Zv;case 35675:return Jv;case 35676:return Qv;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return s1;case 36294:return r1;case 36295:return o1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}class d1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qv(e.type)}}class p1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h1(e.type)}}class m1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function af(i,t){i.seq.push(t),i.map[t.id]=t}function g1(i,t,e){const n=i.name,s=n.length;for(Ja.lastIndex=0;;){const r=Ja.exec(n),o=Ja.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){af(e,l===void 0?new d1(a,i,t):new p1(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new m1(a),af(e,d)),e=d}}}class Vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);g1(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function cf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const x1=37297;let v1=0;function _1(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const lf=new Ee;function M1(i){Ie._getMatrix(lf,Ie.workingColorSpace,i);const t=`mat3( ${lf.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case ua:return[t,"LinearTransferOETF"];case Ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function uf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+_1(i.getShaderSource(t),o)}else return s}function y1(i,t){const e=M1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function S1(i,t){let e;switch(t){case b0:e="Linear";break;case E0:e="Reinhard";break;case T0:e="Cineon";break;case A0:e="ACESFilmic";break;case R0:e="AgX";break;case Kh:e="Neutral";break;case C0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mo=new st;function w1(){Ie.getLuminanceCoefficients(Mo);const i=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function E1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function wr(i){return i!==""}function ff(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const A1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(A1,R1)}const C1=new Map;function R1(i,t){let e=Te[t];if(e===void 0){const n=C1.get(t);if(n!==void 0)e=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}const P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace(P1,L1)}function L1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function I1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===r0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function D1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Js:case Qs:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function N1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case aa:t="ENVMAP_BLENDING_MULTIPLY";break;case S0:t="ENVMAP_BLENDING_MIX";break;case w0:t="ENVMAP_BLENDING_ADD";break}return t}function U1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function F1(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=I1(e),l=D1(e),u=z1(e),d=N1(e),f=U1(e),h=b1(e),g=E1(r),x=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[pf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?Te.tonemapping_pars_fragment:"",e.toneMapping!==Oi?S1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,y1("linearToOutputTexel",e.outputColorSpace),w1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),o=Ml(o),o=ff(o,e),o=hf(o,e),a=Ml(a),a=ff(a,e),a=hf(a,e),o=df(o),a=df(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+o,y=w+p+a,C=cf(s,s.VERTEX_SHADER,M),R=cf(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(A){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(R).trim();let rt=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,R);else{const gt=uf(s,C,"vertex"),ot=uf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+gt+`
`+ot)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||V==="")&&(J=!1);J&&(A.diagnostics={runnable:rt,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(C),s.deleteShader(R),S=new Vo(s,x),_=T1(s,x)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,x1)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=v1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let O1=0;class k1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new B1(t),e.set(t,n)),n}}class B1{constructor(t){this.id=O1++,this.code=t,this.usedTimes=0}}function H1(i,t,e,n,s,r,o){const a=new ld,c=new k1,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,v,A,U,F){const V=U.fog,rt=F.geometry,J=_.isMeshStandardMaterial?U.environment:null,gt=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),ot=gt&&gt.mapping===ca?gt.image.height:null,W=g[_.type];_.precision!==null&&(h=s.getMaxPrecision(_.precision),h!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const z=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,q=z!==void 0?z.length:0;let j=0;rt.morphAttributes.position!==void 0&&(j=1),rt.morphAttributes.normal!==void 0&&(j=2),rt.morphAttributes.color!==void 0&&(j=3);let tt,O,$,ht;if(W){const K=ii[W];tt=K.vertexShader,O=K.fragmentShader}else tt=_.vertexShader,O=_.fragmentShader,c.update(_),$=c.getVertexShaderID(_),ht=c.getFragmentShaderID(_);const B=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),ft=F.isInstancedMesh===!0,Mt=F.isBatchedMesh===!0,Pt=!!_.map,nt=!!_.matcap,mt=!!gt,H=!!_.aoMap,Q=!!_.lightMap,zt=!!_.bumpMap,Qt=!!_.normalMap,Ht=!!_.displacementMap,te=!!_.emissiveMap,$t=!!_.metalnessMap,T=!!_.roughnessMap,P=_.anisotropy>0,ut=_.clearcoat>0,dt=_.dispersion>0,bt=_.iridescence>0,yt=_.sheen>0,Xt=_.transmission>0,Bt=P&&!!_.anisotropyMap,Ft=ut&&!!_.clearcoatMap,fe=ut&&!!_.clearcoatNormalMap,Ct=ut&&!!_.clearcoatRoughnessMap,qt=bt&&!!_.iridescenceMap,oe=bt&&!!_.iridescenceThicknessMap,jt=yt&&!!_.sheenColorMap,kt=yt&&!!_.sheenRoughnessMap,Zt=!!_.specularMap,ce=!!_.specularColorMap,ge=!!_.specularIntensityMap,ct=Xt&&!!_.transmissionMap,St=Xt&&!!_.thicknessMap,vt=!!_.gradientMap,wt=!!_.alphaMap,It=_.alphaTest>0,E=!!_.alphaHash,N=!!_.extensions;let X=Oi;_.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(X=i.toneMapping);const Z={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:tt,fragmentShader:O,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&F._colorsTexture!==null,instancing:ft,instancingColor:ft&&F.instanceColor!==null,instancingMorph:ft&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:rr,alphaToCoverage:!!_.alphaToCoverage,map:Pt,matcap:nt,envMap:mt,envMapMode:mt&&gt.mapping,envMapCubeUVHeight:ot,aoMap:H,lightMap:Q,bumpMap:zt,normalMap:Qt,displacementMap:f&&Ht,emissiveMap:te,normalMapObjectSpace:Qt&&_.normalMapType===D0,normalMapTangentSpace:Qt&&_.normalMapType===la,metalnessMap:$t,roughnessMap:T,anisotropy:P,anisotropyMap:Bt,clearcoat:ut,clearcoatMap:Ft,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ct,dispersion:dt,iridescence:bt,iridescenceMap:qt,iridescenceThicknessMap:oe,sheen:yt,sheenColorMap:jt,sheenRoughnessMap:kt,specularMap:Zt,specularColorMap:ce,specularIntensityMap:ge,transmission:Xt,transmissionMap:ct,thicknessMap:St,gradientMap:vt,opaque:_.transparent===!1&&_.blending===Xs&&_.alphaToCoverage===!1,alphaMap:wt,alphaTest:It,alphaHash:E,combine:_.combine,mapUv:Pt&&x(_.map.channel),aoMapUv:H&&x(_.aoMap.channel),lightMapUv:Q&&x(_.lightMap.channel),bumpMapUv:zt&&x(_.bumpMap.channel),normalMapUv:Qt&&x(_.normalMap.channel),displacementMapUv:Ht&&x(_.displacementMap.channel),emissiveMapUv:te&&x(_.emissiveMap.channel),metalnessMapUv:$t&&x(_.metalnessMap.channel),roughnessMapUv:T&&x(_.roughnessMap.channel),anisotropyMapUv:Bt&&x(_.anisotropyMap.channel),clearcoatMapUv:Ft&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(_.sheenRoughnessMap.channel),specularMapUv:Zt&&x(_.specularMap.channel),specularColorMapUv:ce&&x(_.specularColorMap.channel),specularIntensityMapUv:ge&&x(_.specularIntensityMap.channel),transmissionMapUv:ct&&x(_.transmissionMap.channel),thicknessMapUv:St&&x(_.thicknessMap.channel),alphaMapUv:wt&&x(_.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Qt||P),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!rt.attributes.uv&&(Pt||wt),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:at,skinning:F.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:j,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:X,decodeVideoTexture:Pt&&_.map.isVideoTexture===!0&&Ie.getTransfer(_.map.colorSpace)===Ue,decodeVideoTextureEmissive:te&&_.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(_.emissiveMap.colorSpace)===Ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===An,flipSided:_.side===vn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:N&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(N&&_.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Z.vertexUv1s=l.has(1),Z.vertexUv2s=l.has(2),Z.vertexUv3s=l.has(3),l.clear(),Z}function p(_){const v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)v.push(A),v.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(w(v,_),M(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function w(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function M(_,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){const v=g[_.type];let A;if(v){const U=ii[v];A=bm.clone(U.uniforms)}else A=_.uniforms;return A}function C(_,v){let A;for(let U=0,F=u.length;U<F;U++){const V=u[U];if(V.cacheKey===v){A=V,++A.usedTimes;break}}return A===void 0&&(A=new F1(i,v,_,r),u.push(A)),A}function R(_){if(--_.usedTimes===0){const v=u.indexOf(_);u[v]=u[u.length-1],u.pop(),_.destroy()}}function b(_){c.remove(_)}function S(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:b,programs:u,dispose:S}}function G1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function mf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,h,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,f,h,g,x,m){const p=o(d,f,h,g,x,m);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):e.push(p)}function c(d,f,h,g,x,m){const p=o(d,f,h,g,x,m);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,f){e.length>1&&e.sort(d||V1),n.length>1&&n.sort(f||mf),s.length>1&&s.sort(f||mf)}function u(){for(let d=t,f=i.length;d<f;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function W1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new gf,i.set(n,[o])):s>=r.length?(o=new gf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function X1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new st,color:new he};break;case"SpotLight":e={position:new st,direction:new st,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new st,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new st,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new st,halfWidth:new st,halfHeight:new st};break}return i[t.id]=e,e}}}function q1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Y1=0;function K1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $1(i){const t=new X1,e=q1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new st);const s=new st,r=new De,o=new De;function a(l){let u=0,d=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,w=0,M=0,y=0,C=0,R=0,b=0;l.sort(K1);for(let _=0,v=l.length;_<v;_++){const A=l[_],U=A.color,F=A.intensity,V=A.distance,rt=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=U.r*F,d+=U.g*F,f+=U.b*F;else if(A.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(A.sh.coefficients[J],F);b++}else if(A.isDirectionalLight){const J=t.get(A);if(J.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const gt=A.shadow,ot=e.get(A);ot.shadowIntensity=gt.intensity,ot.shadowBias=gt.bias,ot.shadowNormalBias=gt.normalBias,ot.shadowRadius=gt.radius,ot.shadowMapSize=gt.mapSize,n.directionalShadow[h]=ot,n.directionalShadowMap[h]=rt,n.directionalShadowMatrix[h]=A.shadow.matrix,w++}n.directional[h]=J,h++}else if(A.isSpotLight){const J=t.get(A);J.position.setFromMatrixPosition(A.matrixWorld),J.color.copy(U).multiplyScalar(F),J.distance=V,J.coneCos=Math.cos(A.angle),J.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),J.decay=A.decay,n.spot[x]=J;const gt=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,gt.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[x]=gt.matrix,A.castShadow){const ot=e.get(A);ot.shadowIntensity=gt.intensity,ot.shadowBias=gt.bias,ot.shadowNormalBias=gt.normalBias,ot.shadowRadius=gt.radius,ot.shadowMapSize=gt.mapSize,n.spotShadow[x]=ot,n.spotShadowMap[x]=rt,y++}x++}else if(A.isRectAreaLight){const J=t.get(A);J.color.copy(U).multiplyScalar(F),J.halfWidth.set(A.width*.5,0,0),J.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=J,m++}else if(A.isPointLight){const J=t.get(A);if(J.color.copy(A.color).multiplyScalar(A.intensity),J.distance=A.distance,J.decay=A.decay,A.castShadow){const gt=A.shadow,ot=e.get(A);ot.shadowIntensity=gt.intensity,ot.shadowBias=gt.bias,ot.shadowNormalBias=gt.normalBias,ot.shadowRadius=gt.radius,ot.shadowMapSize=gt.mapSize,ot.shadowCameraNear=gt.camera.near,ot.shadowCameraFar=gt.camera.far,n.pointShadow[g]=ot,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=J,g++}else if(A.isHemisphereLight){const J=t.get(A);J.skyColor.copy(A.color).multiplyScalar(F),J.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=J,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ee.LTC_FLOAT_1,n.rectAreaLTC2=ee.LTC_FLOAT_2):(n.rectAreaLTC1=ee.LTC_HALF_1,n.rectAreaLTC2=ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const S=n.hash;(S.directionalLength!==h||S.pointLength!==g||S.spotLength!==x||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==w||S.numPointShadows!==M||S.numSpotShadows!==y||S.numSpotMaps!==C||S.numLightProbes!==b)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,S.directionalLength=h,S.pointLength=g,S.spotLength=x,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=w,S.numPointShadows=M,S.numSpotShadows=y,S.numSpotMaps=C,S.numLightProbes=b,n.version=Y1++)}function c(l,u){let d=0,f=0,h=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const M=l[p];if(M.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function xf(i){const t=new $1(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function j1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new xf(i),t.set(s,[a])):r>=o.length?(a=new xf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Z1 extends xs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=L0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class J1 extends xs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`;function e_(i,t,e){let n=new kl;const s=new re,r=new re,o=new Ge,a=new Z1({depthPacking:I0}),c=new J1,l={},u=e.maxTextureSize,d={[Gi]:vn,[vn]:Gi,[An]:An},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Q1,fragmentShader:t_}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let p=this.type;this.render=function(R,b,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const _=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Fi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==pi&&this.type===pi,V=p===pi&&this.type!==pi;for(let rt=0,J=R.length;rt<J;rt++){const gt=R[rt],ot=gt.shadow;if(ot===void 0){console.warn("THREE.WebGLShadowMap:",gt,"has no shadow.");continue}if(ot.autoUpdate===!1&&ot.needsUpdate===!1)continue;s.copy(ot.mapSize);const W=ot.getFrameExtents();if(s.multiply(W),r.copy(ot.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,ot.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,ot.mapSize.y=r.y)),ot.map===null||F===!0||V===!0){const q=this.type!==pi?{minFilter:Pn,magFilter:Pn}:{};ot.map!==null&&ot.map.dispose(),ot.map=new ps(s.x,s.y,q),ot.map.texture.name=gt.name+".shadowMap",ot.camera.updateProjectionMatrix()}i.setRenderTarget(ot.map),i.clear();const z=ot.getViewportCount();for(let q=0;q<z;q++){const j=ot.getViewport(q);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),U.viewport(o),ot.updateMatrices(gt,q),n=ot.getFrustum(),y(b,S,ot.camera,gt,this.type)}ot.isPointLightShadow!==!0&&this.type===pi&&w(ot,S),ot.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,v,A)};function w(R,b){const S=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ps(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,S,f,x,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,S,h,x,null)}function M(R,b,S,_){let v=null;const A=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)v=A;else if(v=S.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=v.uuid,F=b.uuid;let V=l[U];V===void 0&&(V={},l[U]=V);let rt=V[F];rt===void 0&&(rt=v.clone(),V[F]=rt,b.addEventListener("dispose",C)),v=rt}if(v.visible=b.visible,v.wireframe=b.wireframe,_===pi?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:d[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,S.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=S}return v}function y(R,b,S,_,v){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===pi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const F=t.update(R),V=R.material;if(Array.isArray(V)){const rt=F.groups;for(let J=0,gt=rt.length;J<gt;J++){const ot=rt[J],W=V[ot.materialIndex];if(W&&W.visible){const z=M(R,W,_,v);R.onBeforeShadow(i,R,b,S,F,z,ot),i.renderBufferDirect(S,null,F,z,R,ot),R.onAfterShadow(i,R,b,S,F,z,ot)}}}else if(V.visible){const rt=M(R,V,_,v);R.onBeforeShadow(i,R,b,S,F,rt,null),i.renderBufferDirect(S,null,F,rt,R,null),R.onAfterShadow(i,R,b,S,F,rt,null)}}const U=R.children;for(let F=0,V=U.length;F<V;F++)y(U[F],b,S,_,v)}function C(R){R.target.removeEventListener("dispose",C);for(const S in l){const _=l[S],v=R.target.uuid;v in _&&(_[v].dispose(),delete _[v])}}}const n_={[Fc]:Oc,[kc]:Gc,[Bc]:Vc,[Zs]:Hc,[Oc]:Fc,[Gc]:kc,[Vc]:Bc,[Hc]:Zs};function i_(i,t){function e(){let ct=!1;const St=new Ge;let vt=null;const wt=new Ge(0,0,0,0);return{setMask:function(It){vt!==It&&!ct&&(i.colorMask(It,It,It,It),vt=It)},setLocked:function(It){ct=It},setClear:function(It,E,N,X,Z){Z===!0&&(It*=X,E*=X,N*=X),St.set(It,E,N,X),wt.equals(St)===!1&&(i.clearColor(It,E,N,X),wt.copy(St))},reset:function(){ct=!1,vt=null,wt.set(-1,0,0,0)}}}function n(){let ct=!1,St=!1,vt=null,wt=null,It=null;return{setReversed:function(E){if(St!==E){const N=t.get("EXT_clip_control");St?N.clipControlEXT(N.LOWER_LEFT_EXT,N.ZERO_TO_ONE_EXT):N.clipControlEXT(N.LOWER_LEFT_EXT,N.NEGATIVE_ONE_TO_ONE_EXT);const X=It;It=null,this.setClear(X)}St=E},getReversed:function(){return St},setTest:function(E){E?B(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(E){vt!==E&&!ct&&(i.depthMask(E),vt=E)},setFunc:function(E){if(St&&(E=n_[E]),wt!==E){switch(E){case Fc:i.depthFunc(i.NEVER);break;case Oc:i.depthFunc(i.ALWAYS);break;case kc:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case Bc:i.depthFunc(i.EQUAL);break;case Hc:i.depthFunc(i.GEQUAL);break;case Gc:i.depthFunc(i.GREATER);break;case Vc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=E}},setLocked:function(E){ct=E},setClear:function(E){It!==E&&(St&&(E=1-E),i.clearDepth(E),It=E)},reset:function(){ct=!1,vt=null,wt=null,It=null,St=!1}}}function s(){let ct=!1,St=null,vt=null,wt=null,It=null,E=null,N=null,X=null,Z=null;return{setTest:function(K){ct||(K?B(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(K){St!==K&&!ct&&(i.stencilMask(K),St=K)},setFunc:function(K,L,k){(vt!==K||wt!==L||It!==k)&&(i.stencilFunc(K,L,k),vt=K,wt=L,It=k)},setOp:function(K,L,k){(E!==K||N!==L||X!==k)&&(i.stencilOp(K,L,k),E=K,N=L,X=k)},setLocked:function(K){ct=K},setClear:function(K){Z!==K&&(i.clearStencil(K),Z=K)},reset:function(){ct=!1,St=null,vt=null,wt=null,It=null,E=null,N=null,X=null,Z=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,w=null,M=null,y=null,C=null,R=null,b=new he(0,0,0),S=0,_=!1,v=null,A=null,U=null,F=null,V=null;const rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,gt=0;const ot=i.getParameter(i.VERSION);ot.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(ot)[1]),J=gt>=1):ot.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),J=gt>=2);let W=null,z={};const q=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),tt=new Ge().fromArray(q),O=new Ge().fromArray(j);function $(ct,St,vt,wt){const It=new Uint8Array(4),E=i.createTexture();i.bindTexture(ct,E),i.texParameteri(ct,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(ct,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let N=0;N<vt;N++)ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(St+N,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return E}const ht={};ht[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(i.DEPTH_TEST),o.setFunc(Zs),zt(!1),Qt(_u),B(i.CULL_FACE),H(Fi);function B(ct){u[ct]!==!0&&(i.enable(ct),u[ct]=!0)}function at(ct){u[ct]!==!1&&(i.disable(ct),u[ct]=!1)}function ft(ct,St){return d[ct]!==St?(i.bindFramebuffer(ct,St),d[ct]=St,ct===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=St),ct===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Mt(ct,St){let vt=h,wt=!1;if(ct){vt=f.get(St),vt===void 0&&(vt=[],f.set(St,vt));const It=ct.textures;if(vt.length!==It.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let E=0,N=It.length;E<N;E++)vt[E]=i.COLOR_ATTACHMENT0+E;vt.length=It.length,wt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(vt)}function Pt(ct){return g!==ct?(i.useProgram(ct),g=ct,!0):!1}const nt={[Ui]:i.FUNC_ADD,[o0]:i.FUNC_SUBTRACT,[a0]:i.FUNC_REVERSE_SUBTRACT};nt[c0]=i.MIN,nt[l0]=i.MAX;const mt={[u0]:i.ZERO,[Nc]:i.ONE,[f0]:i.SRC_COLOR,[Uc]:i.SRC_ALPHA,[x0]:i.SRC_ALPHA_SATURATE,[m0]:i.DST_COLOR,[d0]:i.DST_ALPHA,[h0]:i.ONE_MINUS_SRC_COLOR,[Ur]:i.ONE_MINUS_SRC_ALPHA,[g0]:i.ONE_MINUS_DST_COLOR,[p0]:i.ONE_MINUS_DST_ALPHA,[v0]:i.CONSTANT_COLOR,[_0]:i.ONE_MINUS_CONSTANT_COLOR,[M0]:i.CONSTANT_ALPHA,[y0]:i.ONE_MINUS_CONSTANT_ALPHA};function H(ct,St,vt,wt,It,E,N,X,Z,K){if(ct===Fi){x===!0&&(at(i.BLEND),x=!1);return}if(x===!1&&(B(i.BLEND),x=!0),ct!==Yh){if(ct!==m||K!==_){if((p!==Ui||y!==Ui)&&(i.blendEquation(i.FUNC_ADD),p=Ui,y=Ui),K)switch(ct){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mu:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",ct);break}else switch(ct){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",ct);break}w=null,M=null,C=null,R=null,b.set(0,0,0),S=0,m=ct,_=K}return}It=It||St,E=E||vt,N=N||wt,(St!==p||It!==y)&&(i.blendEquationSeparate(nt[St],nt[It]),p=St,y=It),(vt!==w||wt!==M||E!==C||N!==R)&&(i.blendFuncSeparate(mt[vt],mt[wt],mt[E],mt[N]),w=vt,M=wt,C=E,R=N),(X.equals(b)===!1||Z!==S)&&(i.blendColor(X.r,X.g,X.b,Z),b.copy(X),S=Z),m=ct,_=!1}function Q(ct,St){ct.side===An?at(i.CULL_FACE):B(i.CULL_FACE);let vt=ct.side===vn;St&&(vt=!vt),zt(vt),ct.blending===Xs&&ct.transparent===!1?H(Fi):H(ct.blending,ct.blendEquation,ct.blendSrc,ct.blendDst,ct.blendEquationAlpha,ct.blendSrcAlpha,ct.blendDstAlpha,ct.blendColor,ct.blendAlpha,ct.premultipliedAlpha),o.setFunc(ct.depthFunc),o.setTest(ct.depthTest),o.setMask(ct.depthWrite),r.setMask(ct.colorWrite);const wt=ct.stencilWrite;a.setTest(wt),wt&&(a.setMask(ct.stencilWriteMask),a.setFunc(ct.stencilFunc,ct.stencilRef,ct.stencilFuncMask),a.setOp(ct.stencilFail,ct.stencilZFail,ct.stencilZPass)),te(ct.polygonOffset,ct.polygonOffsetFactor,ct.polygonOffsetUnits),ct.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(ct){v!==ct&&(ct?i.frontFace(i.CW):i.frontFace(i.CCW),v=ct)}function Qt(ct){ct!==i0?(B(i.CULL_FACE),ct!==A&&(ct===_u?i.cullFace(i.BACK):ct===s0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),A=ct}function Ht(ct){ct!==U&&(J&&i.lineWidth(ct),U=ct)}function te(ct,St,vt){ct?(B(i.POLYGON_OFFSET_FILL),(F!==St||V!==vt)&&(i.polygonOffset(St,vt),F=St,V=vt)):at(i.POLYGON_OFFSET_FILL)}function $t(ct){ct?B(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function T(ct){ct===void 0&&(ct=i.TEXTURE0+rt-1),W!==ct&&(i.activeTexture(ct),W=ct)}function P(ct,St,vt){vt===void 0&&(W===null?vt=i.TEXTURE0+rt-1:vt=W);let wt=z[vt];wt===void 0&&(wt={type:void 0,texture:void 0},z[vt]=wt),(wt.type!==ct||wt.texture!==St)&&(W!==vt&&(i.activeTexture(vt),W=vt),i.bindTexture(ct,St||ht[ct]),wt.type=ct,wt.texture=St)}function ut(){const ct=z[W];ct!==void 0&&ct.type!==void 0&&(i.bindTexture(ct.type,null),ct.type=void 0,ct.texture=void 0)}function dt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function yt(){try{i.texSubImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Xt(){try{i.texSubImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Bt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function Ct(){try{i.texStorage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function qt(){try{i.texImage2D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function oe(){try{i.texImage3D.apply(i,arguments)}catch(ct){console.error("THREE.WebGLState:",ct)}}function jt(ct){tt.equals(ct)===!1&&(i.scissor(ct.x,ct.y,ct.z,ct.w),tt.copy(ct))}function kt(ct){O.equals(ct)===!1&&(i.viewport(ct.x,ct.y,ct.z,ct.w),O.copy(ct))}function Zt(ct,St){let vt=l.get(St);vt===void 0&&(vt=new WeakMap,l.set(St,vt));let wt=vt.get(ct);wt===void 0&&(wt=i.getUniformBlockIndex(St,ct.name),vt.set(ct,wt))}function ce(ct,St){const wt=l.get(St).get(ct);c.get(St)!==wt&&(i.uniformBlockBinding(St,wt,ct.__bindingPointIndex),c.set(St,wt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,z={},d={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,w=null,M=null,y=null,C=null,R=null,b=new he(0,0,0),S=0,_=!1,v=null,A=null,U=null,F=null,V=null,tt.set(0,0,i.canvas.width,i.canvas.height),O.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:at,bindFramebuffer:ft,drawBuffers:Mt,useProgram:Pt,setBlending:H,setMaterial:Q,setFlipSided:zt,setCullFace:Qt,setLineWidth:Ht,setPolygonOffset:te,setScissorTest:$t,activeTexture:T,bindTexture:P,unbindTexture:ut,compressedTexImage2D:dt,compressedTexImage3D:bt,texImage2D:qt,texImage3D:oe,updateUBOMapping:Zt,uniformBlockBinding:ce,texStorage2D:fe,texStorage3D:Ct,texSubImage2D:yt,texSubImage3D:Xt,compressedTexSubImage2D:Bt,compressedTexSubImage3D:Ft,scissor:jt,viewport:kt,reset:ge}}function vf(i,t,e,n){const s=s_(n);switch(e){case Qh:return i*t;case ed:return i*t;case nd:return i*t*2;case zl:return i*t/s.components*s.byteLength;case Nl:return i*t/s.components*s.byteLength;case id:return i*t*2/s.components*s.byteLength;case Ul:return i*t*2/s.components*s.byteLength;case td:return i*t*3/s.components*s.byteLength;case Hn:return i*t*4/s.components*s.byteLength;case Fl:return i*t*4/s.components*s.byteLength;case Oo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kc:case jc:return Math.max(i,16)*Math.max(t,8)/4;case Yc:case $c:return Math.max(i,8)*Math.max(t,8)/2;case Zc:case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Go:case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sd:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s_(i){switch(i){case ai:case jh:return{byteLength:1,components:1};case Fr:case Zh:case Gr:return{byteLength:2,components:1};case Il:case Dl:return{byteLength:2,components:4};case ds:case Ll:case ri:return{byteLength:4,components:1};case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function r_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,P){return h?new OffscreenCanvas(T,P):Qo("canvas")}function x(T,P,ut){let dt=1;const bt=$t(T);if((bt.width>ut||bt.height>ut)&&(dt=ut/Math.max(bt.width,bt.height)),dt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const yt=Math.floor(dt*bt.width),Xt=Math.floor(dt*bt.height);d===void 0&&(d=g(yt,Xt));const Bt=P?g(yt,Xt):d;return Bt.width=yt,Bt.height=Xt,Bt.getContext("2d").drawImage(T,0,0,yt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+yt+"x"+Xt+")."),Bt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,P,ut,dt,bt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let yt=P;if(P===i.RED&&(ut===i.FLOAT&&(yt=i.R32F),ut===i.HALF_FLOAT&&(yt=i.R16F),ut===i.UNSIGNED_BYTE&&(yt=i.R8)),P===i.RED_INTEGER&&(ut===i.UNSIGNED_BYTE&&(yt=i.R8UI),ut===i.UNSIGNED_SHORT&&(yt=i.R16UI),ut===i.UNSIGNED_INT&&(yt=i.R32UI),ut===i.BYTE&&(yt=i.R8I),ut===i.SHORT&&(yt=i.R16I),ut===i.INT&&(yt=i.R32I)),P===i.RG&&(ut===i.FLOAT&&(yt=i.RG32F),ut===i.HALF_FLOAT&&(yt=i.RG16F),ut===i.UNSIGNED_BYTE&&(yt=i.RG8)),P===i.RG_INTEGER&&(ut===i.UNSIGNED_BYTE&&(yt=i.RG8UI),ut===i.UNSIGNED_SHORT&&(yt=i.RG16UI),ut===i.UNSIGNED_INT&&(yt=i.RG32UI),ut===i.BYTE&&(yt=i.RG8I),ut===i.SHORT&&(yt=i.RG16I),ut===i.INT&&(yt=i.RG32I)),P===i.RGB_INTEGER&&(ut===i.UNSIGNED_BYTE&&(yt=i.RGB8UI),ut===i.UNSIGNED_SHORT&&(yt=i.RGB16UI),ut===i.UNSIGNED_INT&&(yt=i.RGB32UI),ut===i.BYTE&&(yt=i.RGB8I),ut===i.SHORT&&(yt=i.RGB16I),ut===i.INT&&(yt=i.RGB32I)),P===i.RGBA_INTEGER&&(ut===i.UNSIGNED_BYTE&&(yt=i.RGBA8UI),ut===i.UNSIGNED_SHORT&&(yt=i.RGBA16UI),ut===i.UNSIGNED_INT&&(yt=i.RGBA32UI),ut===i.BYTE&&(yt=i.RGBA8I),ut===i.SHORT&&(yt=i.RGBA16I),ut===i.INT&&(yt=i.RGBA32I)),P===i.RGB&&ut===i.UNSIGNED_INT_5_9_9_9_REV&&(yt=i.RGB9_E5),P===i.RGBA){const Xt=bt?ua:Ie.getTransfer(dt);ut===i.FLOAT&&(yt=i.RGBA32F),ut===i.HALF_FLOAT&&(yt=i.RGBA16F),ut===i.UNSIGNED_BYTE&&(yt=Xt===Ue?i.SRGB8_ALPHA8:i.RGBA8),ut===i.UNSIGNED_SHORT_4_4_4_4&&(yt=i.RGBA4),ut===i.UNSIGNED_SHORT_5_5_5_1&&(yt=i.RGB5_A1)}return(yt===i.R16F||yt===i.R32F||yt===i.RG16F||yt===i.RG32F||yt===i.RGBA16F||yt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function y(T,P){let ut;return T?P===null||P===ds||P===tr?ut=i.DEPTH24_STENCIL8:P===ri?ut=i.DEPTH32F_STENCIL8:P===Fr&&(ut=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ds||P===tr?ut=i.DEPTH_COMPONENT24:P===ri?ut=i.DEPTH_COMPONENT32F:P===Fr&&(ut=i.DEPTH_COMPONENT16),ut}function C(T,P){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pn&&T.minFilter!==Bn?Math.log2(Math.max(P.width,P.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?P.mipmaps.length:1}function R(T){const P=T.target;P.removeEventListener("dispose",R),S(P),P.isVideoTexture&&u.delete(P)}function b(T){const P=T.target;P.removeEventListener("dispose",b),v(P)}function S(T){const P=n.get(T);if(P.__webglInit===void 0)return;const ut=T.source,dt=f.get(ut);if(dt){const bt=dt[P.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&_(T),Object.keys(dt).length===0&&f.delete(ut)}n.remove(T)}function _(T){const P=n.get(T);i.deleteTexture(P.__webglTexture);const ut=T.source,dt=f.get(ut);delete dt[P.__cacheKey],o.memory.textures--}function v(T){const P=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(P.__webglFramebuffer[dt]))for(let bt=0;bt<P.__webglFramebuffer[dt].length;bt++)i.deleteFramebuffer(P.__webglFramebuffer[dt][bt]);else i.deleteFramebuffer(P.__webglFramebuffer[dt]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[dt])}else{if(Array.isArray(P.__webglFramebuffer))for(let dt=0;dt<P.__webglFramebuffer.length;dt++)i.deleteFramebuffer(P.__webglFramebuffer[dt]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let dt=0;dt<P.__webglColorRenderbuffer.length;dt++)P.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[dt]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ut=T.textures;for(let dt=0,bt=ut.length;dt<bt;dt++){const yt=n.get(ut[dt]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(ut[dt])}n.remove(T)}let A=0;function U(){A=0}function F(){const T=A;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),A+=1,T}function V(T){const P=[];return P.push(T.wrapS),P.push(T.wrapT),P.push(T.wrapR||0),P.push(T.magFilter),P.push(T.minFilter),P.push(T.anisotropy),P.push(T.internalFormat),P.push(T.format),P.push(T.type),P.push(T.generateMipmaps),P.push(T.premultiplyAlpha),P.push(T.flipY),P.push(T.unpackAlignment),P.push(T.colorSpace),P.join()}function rt(T,P){const ut=n.get(T);if(T.isVideoTexture&&Ht(T),T.isRenderTargetTexture===!1&&T.version>0&&ut.__version!==T.version){const dt=T.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(ut,T,P);return}}e.bindTexture(i.TEXTURE_2D,ut.__webglTexture,i.TEXTURE0+P)}function J(T,P){const ut=n.get(T);if(T.version>0&&ut.__version!==T.version){O(ut,T,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,ut.__webglTexture,i.TEXTURE0+P)}function gt(T,P){const ut=n.get(T);if(T.version>0&&ut.__version!==T.version){O(ut,T,P);return}e.bindTexture(i.TEXTURE_3D,ut.__webglTexture,i.TEXTURE0+P)}function ot(T,P){const ut=n.get(T);if(T.version>0&&ut.__version!==T.version){$(ut,T,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture,i.TEXTURE0+P)}const W={[Zo]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[qc]:i.MIRRORED_REPEAT},z={[Pn]:i.NEAREST,[P0]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},q={[z0]:i.NEVER,[B0]:i.ALWAYS,[N0]:i.LESS,[rd]:i.LEQUAL,[U0]:i.EQUAL,[k0]:i.GEQUAL,[F0]:i.GREATER,[O0]:i.NOTEQUAL};function j(T,P){if(P.type===ri&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Bn||P.magFilter===Ta||P.magFilter===Qr||P.magFilter===ls||P.minFilter===Bn||P.minFilter===Ta||P.minFilter===Qr||P.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,W[P.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,W[P.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,W[P.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,z[P.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,z[P.minFilter]),P.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,q[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Pn||P.minFilter!==Qr&&P.minFilter!==ls||P.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const ut=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function tt(T,P){let ut=!1;T.__webglInit===void 0&&(T.__webglInit=!0,P.addEventListener("dispose",R));const dt=P.source;let bt=f.get(dt);bt===void 0&&(bt={},f.set(dt,bt));const yt=V(P);if(yt!==T.__cacheKey){bt[yt]===void 0&&(bt[yt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ut=!0),bt[yt].usedTimes++;const Xt=bt[T.__cacheKey];Xt!==void 0&&(bt[T.__cacheKey].usedTimes--,Xt.usedTimes===0&&_(P)),T.__cacheKey=yt,T.__webglTexture=bt[yt].texture}return ut}function O(T,P,ut){let dt=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(dt=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(dt=i.TEXTURE_3D);const bt=tt(T,P),yt=P.source;e.bindTexture(dt,T.__webglTexture,i.TEXTURE0+ut);const Xt=n.get(yt);if(yt.version!==Xt.__version||bt===!0){e.activeTexture(i.TEXTURE0+ut);const Bt=Ie.getPrimaries(Ie.workingColorSpace),Ft=P.colorSpace===xi?null:Ie.getPrimaries(P.colorSpace),fe=P.colorSpace===xi||Bt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ct=x(P.image,!1,s.maxTextureSize);Ct=te(P,Ct);const qt=r.convert(P.format,P.colorSpace),oe=r.convert(P.type);let jt=M(P.internalFormat,qt,oe,P.colorSpace,P.isVideoTexture);j(dt,P);let kt;const Zt=P.mipmaps,ce=P.isVideoTexture!==!0,ge=Xt.__version===void 0||bt===!0,ct=yt.dataReady,St=C(P,Ct);if(P.isDepthTexture)jt=y(P.format===er,P.type),ge&&(ce?e.texStorage2D(i.TEXTURE_2D,1,jt,Ct.width,Ct.height):e.texImage2D(i.TEXTURE_2D,0,jt,Ct.width,Ct.height,0,qt,oe,null));else if(P.isDataTexture)if(Zt.length>0){ce&&ge&&e.texStorage2D(i.TEXTURE_2D,St,jt,Zt[0].width,Zt[0].height);for(let vt=0,wt=Zt.length;vt<wt;vt++)kt=Zt[vt],ce?ct&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,kt.width,kt.height,qt,oe,kt.data):e.texImage2D(i.TEXTURE_2D,vt,jt,kt.width,kt.height,0,qt,oe,kt.data);P.generateMipmaps=!1}else ce?(ge&&e.texStorage2D(i.TEXTURE_2D,St,jt,Ct.width,Ct.height),ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct.width,Ct.height,qt,oe,Ct.data)):e.texImage2D(i.TEXTURE_2D,0,jt,Ct.width,Ct.height,0,qt,oe,Ct.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ce&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,jt,Zt[0].width,Zt[0].height,Ct.depth);for(let vt=0,wt=Zt.length;vt<wt;vt++)if(kt=Zt[vt],P.format!==Hn)if(qt!==null)if(ce){if(ct)if(P.layerUpdates.size>0){const It=vf(kt.width,kt.height,P.format,P.type);for(const E of P.layerUpdates){const N=kt.data.subarray(E*It/kt.data.BYTES_PER_ELEMENT,(E+1)*It/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,E,kt.width,kt.height,1,qt,N)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,kt.width,kt.height,Ct.depth,qt,kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,jt,kt.width,kt.height,Ct.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,kt.width,kt.height,Ct.depth,qt,oe,kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,jt,kt.width,kt.height,Ct.depth,0,qt,oe,kt.data)}else{ce&&ge&&e.texStorage2D(i.TEXTURE_2D,St,jt,Zt[0].width,Zt[0].height);for(let vt=0,wt=Zt.length;vt<wt;vt++)kt=Zt[vt],P.format!==Hn?qt!==null?ce?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,kt.width,kt.height,qt,kt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,jt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?ct&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,kt.width,kt.height,qt,oe,kt.data):e.texImage2D(i.TEXTURE_2D,vt,jt,kt.width,kt.height,0,qt,oe,kt.data)}else if(P.isDataArrayTexture)if(ce){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,jt,Ct.width,Ct.height,Ct.depth),ct)if(P.layerUpdates.size>0){const vt=vf(Ct.width,Ct.height,P.format,P.type);for(const wt of P.layerUpdates){const It=Ct.data.subarray(wt*vt/Ct.data.BYTES_PER_ELEMENT,(wt+1)*vt/Ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,Ct.width,Ct.height,1,qt,oe,It)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,qt,oe,Ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,Ct.width,Ct.height,Ct.depth,0,qt,oe,Ct.data);else if(P.isData3DTexture)ce?(ge&&e.texStorage3D(i.TEXTURE_3D,St,jt,Ct.width,Ct.height,Ct.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,qt,oe,Ct.data)):e.texImage3D(i.TEXTURE_3D,0,jt,Ct.width,Ct.height,Ct.depth,0,qt,oe,Ct.data);else if(P.isFramebufferTexture){if(ge)if(ce)e.texStorage2D(i.TEXTURE_2D,St,jt,Ct.width,Ct.height);else{let vt=Ct.width,wt=Ct.height;for(let It=0;It<St;It++)e.texImage2D(i.TEXTURE_2D,It,jt,vt,wt,0,qt,oe,null),vt>>=1,wt>>=1}}else if(Zt.length>0){if(ce&&ge){const vt=$t(Zt[0]);e.texStorage2D(i.TEXTURE_2D,St,jt,vt.width,vt.height)}for(let vt=0,wt=Zt.length;vt<wt;vt++)kt=Zt[vt],ce?ct&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,qt,oe,kt):e.texImage2D(i.TEXTURE_2D,vt,jt,qt,oe,kt);P.generateMipmaps=!1}else if(ce){if(ge){const vt=$t(Ct);e.texStorage2D(i.TEXTURE_2D,St,jt,vt.width,vt.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,oe,Ct)}else e.texImage2D(i.TEXTURE_2D,0,jt,qt,oe,Ct);m(P)&&p(dt),Xt.__version=yt.version,P.onUpdate&&P.onUpdate(P)}T.__version=P.version}function $(T,P,ut){if(P.image.length!==6)return;const dt=tt(T,P),bt=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+ut);const yt=n.get(bt);if(bt.version!==yt.__version||dt===!0){e.activeTexture(i.TEXTURE0+ut);const Xt=Ie.getPrimaries(Ie.workingColorSpace),Bt=P.colorSpace===xi?null:Ie.getPrimaries(P.colorSpace),Ft=P.colorSpace===xi||Xt===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const fe=P.isCompressedTexture||P.image[0].isCompressedTexture,Ct=P.image[0]&&P.image[0].isDataTexture,qt=[];for(let wt=0;wt<6;wt++)!fe&&!Ct?qt[wt]=x(P.image[wt],!0,s.maxCubemapSize):qt[wt]=Ct?P.image[wt].image:P.image[wt],qt[wt]=te(P,qt[wt]);const oe=qt[0],jt=r.convert(P.format,P.colorSpace),kt=r.convert(P.type),Zt=M(P.internalFormat,jt,kt,P.colorSpace),ce=P.isVideoTexture!==!0,ge=yt.__version===void 0||dt===!0,ct=bt.dataReady;let St=C(P,oe);j(i.TEXTURE_CUBE_MAP,P);let vt;if(fe){ce&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Zt,oe.width,oe.height);for(let wt=0;wt<6;wt++){vt=qt[wt].mipmaps;for(let It=0;It<vt.length;It++){const E=vt[It];P.format!==Hn?jt!==null?ce?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It,0,0,E.width,E.height,jt,E.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It,Zt,E.width,E.height,0,E.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It,0,0,E.width,E.height,jt,kt,E.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It,Zt,E.width,E.height,0,jt,kt,E.data)}}}else{if(vt=P.mipmaps,ce&&ge){vt.length>0&&St++;const wt=$t(qt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Zt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(Ct){ce?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,qt[wt].width,qt[wt].height,jt,kt,qt[wt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Zt,qt[wt].width,qt[wt].height,0,jt,kt,qt[wt].data);for(let It=0;It<vt.length;It++){const N=vt[It].image[wt].image;ce?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It+1,0,0,N.width,N.height,jt,kt,N.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It+1,Zt,N.width,N.height,0,jt,kt,N.data)}}else{ce?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,jt,kt,qt[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Zt,jt,kt,qt[wt]);for(let It=0;It<vt.length;It++){const E=vt[It];ce?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It+1,0,0,jt,kt,E.image[wt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It+1,Zt,jt,kt,E.image[wt])}}}m(P)&&p(i.TEXTURE_CUBE_MAP),yt.__version=bt.version,P.onUpdate&&P.onUpdate(P)}T.__version=P.version}function ht(T,P,ut,dt,bt,yt){const Xt=r.convert(ut.format,ut.colorSpace),Bt=r.convert(ut.type),Ft=M(ut.internalFormat,Xt,Bt,ut.colorSpace),fe=n.get(P),Ct=n.get(ut);if(Ct.__renderTarget=P,!fe.__hasExternalTextures){const qt=Math.max(1,P.width>>yt),oe=Math.max(1,P.height>>yt);bt===i.TEXTURE_3D||bt===i.TEXTURE_2D_ARRAY?e.texImage3D(bt,yt,Ft,qt,oe,P.depth,0,Xt,Bt,null):e.texImage2D(bt,yt,Ft,qt,oe,0,Xt,Bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Qt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,bt,Ct.__webglTexture,0,zt(P)):(bt===i.TEXTURE_2D||bt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,dt,bt,Ct.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function B(T,P,ut){if(i.bindRenderbuffer(i.RENDERBUFFER,T),P.depthBuffer){const dt=P.depthTexture,bt=dt&&dt.isDepthTexture?dt.type:null,yt=y(P.stencilBuffer,bt),Xt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=zt(P);Qt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,yt,P.width,P.height):ut?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,yt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,yt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xt,i.RENDERBUFFER,T)}else{const dt=P.textures;for(let bt=0;bt<dt.length;bt++){const yt=dt[bt],Xt=r.convert(yt.format,yt.colorSpace),Bt=r.convert(yt.type),Ft=M(yt.internalFormat,Xt,Bt,yt.colorSpace),fe=zt(P);ut&&Qt(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Ft,P.width,P.height):Qt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Ft,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(T,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=n.get(P.depthTexture);dt.__renderTarget=P,(!dt.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),rt(P.depthTexture,0);const bt=dt.__webglTexture,yt=zt(P);if(P.depthTexture.format===qs)Qt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,bt,0);else if(P.depthTexture.format===er)Qt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function ft(T){const P=n.get(T),ut=T.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==T.depthTexture){const dt=T.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),dt){const bt=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,dt.removeEventListener("dispose",bt)};dt.addEventListener("dispose",bt),P.__depthDisposeCallback=bt}P.__boundDepthTexture=dt}if(T.depthTexture&&!P.__autoAllocateDepthBuffer){if(ut)throw new Error("target.depthTexture not supported in Cube render targets");at(P.__webglFramebuffer,T)}else if(ut){P.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[dt]),P.__webglDepthbuffer[dt]===void 0)P.__webglDepthbuffer[dt]=i.createRenderbuffer(),B(P.__webglDepthbuffer[dt],T,!1);else{const bt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=P.__webglDepthbuffer[dt];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,yt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),B(P.__webglDepthbuffer,T,!1);else{const dt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(T,P,ut){const dt=n.get(T);P!==void 0&&ht(dt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ut!==void 0&&ft(T)}function Pt(T){const P=T.texture,ut=n.get(T),dt=n.get(P);T.addEventListener("dispose",b);const bt=T.textures,yt=T.isWebGLCubeRenderTarget===!0,Xt=bt.length>1;if(Xt||(dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture()),dt.__version=P.version,o.memory.textures++),yt){ut.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(P.mipmaps&&P.mipmaps.length>0){ut.__webglFramebuffer[Bt]=[];for(let Ft=0;Ft<P.mipmaps.length;Ft++)ut.__webglFramebuffer[Bt][Ft]=i.createFramebuffer()}else ut.__webglFramebuffer[Bt]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ut.__webglFramebuffer=[];for(let Bt=0;Bt<P.mipmaps.length;Bt++)ut.__webglFramebuffer[Bt]=i.createFramebuffer()}else ut.__webglFramebuffer=i.createFramebuffer();if(Xt)for(let Bt=0,Ft=bt.length;Bt<Ft;Bt++){const fe=n.get(bt[Bt]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Qt(T)===!1){ut.__webglMultisampledFramebuffer=i.createFramebuffer(),ut.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer);for(let Bt=0;Bt<bt.length;Bt++){const Ft=bt[Bt];ut.__webglColorRenderbuffer[Bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ut.__webglColorRenderbuffer[Bt]);const fe=r.convert(Ft.format,Ft.colorSpace),Ct=r.convert(Ft.type),qt=M(Ft.internalFormat,fe,Ct,Ft.colorSpace,T.isXRRenderTarget===!0),oe=zt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,qt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[Bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(ut.__webglDepthRenderbuffer=i.createRenderbuffer(),B(ut.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),j(i.TEXTURE_CUBE_MAP,P);for(let Bt=0;Bt<6;Bt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ft=0;Ft<P.mipmaps.length;Ft++)ht(ut.__webglFramebuffer[Bt][Ft],T,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ft);else ht(ut.__webglFramebuffer[Bt],T,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);m(P)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Xt){for(let Bt=0,Ft=bt.length;Bt<Ft;Bt++){const fe=bt[Bt],Ct=n.get(fe);e.bindTexture(i.TEXTURE_2D,Ct.__webglTexture),j(i.TEXTURE_2D,fe),ht(ut.__webglFramebuffer,T,fe,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,0),m(fe)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Bt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Bt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Bt,dt.__webglTexture),j(Bt,P),P.mipmaps&&P.mipmaps.length>0)for(let Ft=0;Ft<P.mipmaps.length;Ft++)ht(ut.__webglFramebuffer[Ft],T,P,i.COLOR_ATTACHMENT0,Bt,Ft);else ht(ut.__webglFramebuffer,T,P,i.COLOR_ATTACHMENT0,Bt,0);m(P)&&p(Bt),e.unbindTexture()}T.depthBuffer&&ft(T)}function nt(T){const P=T.textures;for(let ut=0,dt=P.length;ut<dt;ut++){const bt=P[ut];if(m(bt)){const yt=w(T),Xt=n.get(bt).__webglTexture;e.bindTexture(yt,Xt),p(yt),e.unbindTexture()}}}const mt=[],H=[];function Q(T){if(T.samples>0){if(Qt(T)===!1){const P=T.textures,ut=T.width,dt=T.height;let bt=i.COLOR_BUFFER_BIT;const yt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xt=n.get(T),Bt=P.length>1;if(Bt)for(let Ft=0;Ft<P.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Ft=0;Ft<P.length;Ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(bt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(bt|=i.STENCIL_BUFFER_BIT)),Bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ft]);const fe=n.get(P[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,ut,dt,0,0,ut,dt,bt,i.NEAREST),c===!0&&(mt.length=0,H.length=0,mt.push(i.COLOR_ATTACHMENT0+Ft),T.depthBuffer&&T.resolveDepthBuffer===!1&&(mt.push(yt),H.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Bt)for(let Ft=0;Ft<P.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Xt.__webglColorRenderbuffer[Ft]);const fe=n.get(P[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,fe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const P=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function zt(T){return Math.min(s.maxSamples,T.samples)}function Qt(T){const P=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Ht(T){const P=o.render.frame;u.get(T)!==P&&(u.set(T,P),T.update())}function te(T,P){const ut=T.colorSpace,dt=T.format,bt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||ut!==rr&&ut!==xi&&(Ie.getTransfer(ut)===Ue?(dt!==Hn||bt!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ut)),P}function $t(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=rt,this.setTexture2DArray=J,this.setTexture3D=gt,this.setTextureCube=ot,this.rebindTextures=Mt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Qt}function o_(i,t){function e(n,s=xi){let r;const o=Ie.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jh)return i.BYTE;if(n===Zh)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===ds)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===Gr)return i.HALF_FLOAT;if(n===Qh)return i.ALPHA;if(n===td)return i.RGB;if(n===Hn)return i.RGBA;if(n===ed)return i.LUMINANCE;if(n===nd)return i.LUMINANCE_ALPHA;if(n===qs)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===zl)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===id)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===Oo||n===ko||n===Bo||n===Ho)if(o===Ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yc||n===Kc||n===$c||n===jc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zc||n===Jc||n===Qc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zc||n===Jc)return o===Ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qc)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===ul||n===fl||n===hl||n===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return o===Ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===pl||n===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return o===Ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sd||n===gl||n===xl||n===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class a_ extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class us extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c_={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const l_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`;class f_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _n({vertexShader:l_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h_ extends or{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const x=new f_,m=e.getContextAttributes();let p=null,w=null;const M=[],y=[],C=new re;let R=null;const b=new Tn;b.viewport=new Ge;const S=new Tn;S.viewport=new Ge;const _=[b,S],v=new a_;let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=M[O];return $===void 0&&($=new Qa,M[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=M[O];return $===void 0&&($=new Qa,M[O]=$),$.getGripSpace()},this.getHand=function(O){let $=M[O];return $===void 0&&($=new Qa,M[O]=$),$.getHandSpace()};function F(O){const $=y.indexOf(O.inputSource);if($===-1)return;const ht=M[$];ht!==void 0&&(ht.update(O.inputSource,O.frame,l||o),ht.dispatchEvent({type:O.type,data:O.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",rt);for(let O=0;O<M.length;O++){const $=y[O];$!==null&&(y[O]=null,M[O].disconnect($))}A=null,U=null,x.reset(),t.setRenderTarget(p),h=null,f=null,d=null,s=null,w=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",rt),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new ps(h.framebufferWidth,h.framebufferHeight,{format:Hn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ht=null,B=null;m.depth&&(B=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?er:qs,ht=m.stencil?tr:ds);const at={colorFormat:e.RGBA8,depthFormat:B,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(at),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new ps(f.textureWidth,f.textureHeight,{format:Hn,type:ai,depthTexture:new _d(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function rt(O){for(let $=0;$<O.removed.length;$++){const ht=O.removed[$],B=y.indexOf(ht);B>=0&&(y[B]=null,M[B].disconnect(ht))}for(let $=0;$<O.added.length;$++){const ht=O.added[$];let B=y.indexOf(ht);if(B===-1){for(let ft=0;ft<M.length;ft++)if(ft>=y.length){y.push(ht),B=ft;break}else if(y[ft]===null){y[ft]=ht,B=ft;break}if(B===-1)break}const at=M[B];at&&at.connect(ht)}}const J=new st,gt=new st;function ot(O,$,ht){J.setFromMatrixPosition($.matrixWorld),gt.setFromMatrixPosition(ht.matrixWorld);const B=J.distanceTo(gt),at=$.projectionMatrix.elements,ft=ht.projectionMatrix.elements,Mt=at[14]/(at[10]-1),Pt=at[14]/(at[10]+1),nt=(at[9]+1)/at[5],mt=(at[9]-1)/at[5],H=(at[8]-1)/at[0],Q=(ft[8]+1)/ft[0],zt=Mt*H,Qt=Mt*Q,Ht=B/(-H+Q),te=Ht*-H;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(te),O.translateZ(Ht),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),at[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const $t=Mt+Ht,T=Pt+Ht,P=zt-te,ut=Qt+(B-te),dt=nt*Pt/T*$t,bt=mt*Pt/T*$t;O.projectionMatrix.makePerspective(P,ut,dt,bt,$t,T),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function W(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let $=O.near,ht=O.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(ht=x.depthFar)),v.near=S.near=b.near=$,v.far=S.far=b.far=ht,(A!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,U=v.far),b.layers.mask=O.layers.mask|2,S.layers.mask=O.layers.mask|4,v.layers.mask=b.layers.mask|S.layers.mask;const B=O.parent,at=v.cameras;W(v,B);for(let ft=0;ft<at.length;ft++)W(at[ft],B);at.length===2?ot(v,b,S):v.projectionMatrix.copy(b.projectionMatrix),z(O,v,B)};function z(O,$,ht){ht===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(ht.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Or*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(O){c=O,f!==null&&(f.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let q=null;function j(O,$){if(u=$.getViewerPose(l||o),g=$,u!==null){const ht=u.views;h!==null&&(t.setRenderTargetFramebuffer(w,h.framebuffer),t.setRenderTarget(w));let B=!1;ht.length!==v.cameras.length&&(v.cameras.length=0,B=!0);for(let ft=0;ft<ht.length;ft++){const Mt=ht[ft];let Pt=null;if(h!==null)Pt=h.getViewport(Mt);else{const mt=d.getViewSubImage(f,Mt);Pt=mt.viewport,ft===0&&(t.setRenderTargetTextures(w,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(w))}let nt=_[ft];nt===void 0&&(nt=new Tn,nt.layers.enable(ft),nt.viewport=new Ge,_[ft]=nt),nt.matrix.fromArray(Mt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Mt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ft===0&&(v.matrix.copy(nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),B===!0&&v.cameras.push(nt)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")){const ft=d.getDepthInformation(ht[0]);ft&&ft.isValid&&ft.texture&&x.init(t,ft,s.renderState)}}for(let ht=0;ht<M.length;ht++){const B=y[ht],at=M[ht];B!==null&&at!==void 0&&at.update(B,$,l||o)}q&&q(O,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const tt=new xd;tt.setAnimationLoop(j),this.setAnimationLoop=function(O){q=O},this.dispose=function(){}}}const Ji=new Ln,d_=new De;function p_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,pd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),M=w.envMap,y=w.envMapRotation;M&&(m.envMap.value=M,Ji.copy(y),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(Ji)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const y=M.program;n.uniformBlockBinding(w,y)}function l(w,M){let y=s[w.id];y===void 0&&(g(w),y=u(w),s[w.id]=y,w.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(w,C);const R=t.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function u(w){const M=d();w.__bindingPointIndex=M;const y=i.createBuffer(),C=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const M=s[w.id],y=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,b=y.length;R<b;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,v=S.length;_<v;_++){const A=S[_];if(h(A,R,_,C)===!0){const U=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let rt=0;rt<F.length;rt++){const J=F[rt],gt=x(J);typeof J=="number"||typeof J=="boolean"?(A.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,U+V,A.__data)):J.isMatrix3?(A.__data[0]=J.elements[0],A.__data[1]=J.elements[1],A.__data[2]=J.elements[2],A.__data[3]=0,A.__data[4]=J.elements[3],A.__data[5]=J.elements[4],A.__data[6]=J.elements[5],A.__data[7]=0,A.__data[8]=J.elements[6],A.__data[9]=J.elements[7],A.__data[10]=J.elements[8],A.__data[11]=0):(J.toArray(A.__data,V),V+=gt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(w,M,y,C){const R=w.value,b=M+"_"+y;if(C[b]===void 0)return typeof R=="number"||typeof R=="boolean"?C[b]=R:C[b]=R.clone(),!0;{const S=C[b];if(typeof R=="number"||typeof R=="boolean"){if(S!==R)return C[b]=R,!0}else if(S.equals(R)===!1)return S.copy(R),!0}return!1}function g(w){const M=w.uniforms;let y=0;const C=16;for(let b=0,S=M.length;b<S;b++){const _=Array.isArray(M[b])?M[b]:[M[b]];for(let v=0,A=_.length;v<A;v++){const U=_[v],F=Array.isArray(U.value)?U.value:[U.value];for(let V=0,rt=F.length;V<rt;V++){const J=F[V],gt=x(J),ot=y%C,W=ot%gt.boundary,z=ot+W;y+=W,z!==0&&C-z<gt.storage&&(y+=C-z),U.__data=new Float32Array(gt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=gt.storage}}}const R=y%C;return R>0&&(y+=C-R),w.__size=y,w.__cache={},this}function x(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class g_{constructor(t={}){const{canvas:e=im(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Oi,this.toneMappingExposure=1;const y=this;let C=!1,R=0,b=0,S=null,_=-1,v=null;const A=new Ge,U=new Ge;let F=null;const V=new he(0);let rt=0,J=e.width,gt=e.height,ot=1,W=null,z=null;const q=new Ge(0,0,J,gt),j=new Ge(0,0,J,gt);let tt=!1;const O=new kl;let $=!1,ht=!1;const B=new De,at=new De,ft=new st,Mt=new Ge,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function mt(){return S===null?ot:1}let H=n;function Q(D,I){return e.getContext(D,I)}try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rl}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",E,!1),H===null){const I="webgl2";if(H=Q(I,D),H===null)throw Q(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let zt,Qt,Ht,te,$t,T,P,ut,dt,bt,yt,Xt,Bt,Ft,fe,Ct,qt,oe,jt,kt,Zt,ce,ge,ct;function St(){zt=new yv(H),zt.init(),ce=new o_(H,zt),Qt=new mv(H,zt,t,ce),Ht=new i_(H,zt),Qt.reverseDepthBuffer&&f&&Ht.buffers.depth.setReversed(!0),te=new bv(H),$t=new G1,T=new r_(H,zt,Ht,$t,Qt,ce,te),P=new xv(y),ut=new Mv(y),dt=new Lm(H),ge=new dv(H,dt),bt=new Sv(H,dt,te,ge),yt=new Tv(H,bt,dt,te),jt=new Ev(H,Qt,T),Ct=new gv($t),Xt=new H1(y,P,ut,zt,Qt,ge,Ct),Bt=new p_(y,$t),Ft=new W1,fe=new j1(zt),oe=new hv(y,P,ut,Ht,yt,h,c),qt=new e_(y,yt,Qt),ct=new m_(H,te,Qt,Ht),kt=new pv(H,zt,te),Zt=new wv(H,zt,te),te.programs=Xt.programs,y.capabilities=Qt,y.extensions=zt,y.properties=$t,y.renderLists=Ft,y.shadowMap=qt,y.state=Ht,y.info=te}St();const vt=new h_(y,H);this.xr=vt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const D=zt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=zt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(D){D!==void 0&&(ot=D,this.setSize(J,gt,!1))},this.getSize=function(D){return D.set(J,gt)},this.setSize=function(D,I,G=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=D,gt=I,e.width=Math.floor(D*ot),e.height=Math.floor(I*ot),G===!0&&(e.style.width=D+"px",e.style.height=I+"px"),this.setViewport(0,0,D,I)},this.getDrawingBufferSize=function(D){return D.set(J*ot,gt*ot).floor()},this.setDrawingBufferSize=function(D,I,G){J=D,gt=I,ot=G,e.width=Math.floor(D*G),e.height=Math.floor(I*G),this.setViewport(0,0,D,I)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy(q)},this.setViewport=function(D,I,G,et){D.isVector4?q.set(D.x,D.y,D.z,D.w):q.set(D,I,G,et),Ht.viewport(A.copy(q).multiplyScalar(ot).round())},this.getScissor=function(D){return D.copy(j)},this.setScissor=function(D,I,G,et){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,I,G,et),Ht.scissor(U.copy(j).multiplyScalar(ot).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(D){Ht.setScissorTest(tt=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){z=D},this.getClearColor=function(D){return D.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(D=!0,I=!0,G=!0){let et=0;if(D){let Y=!1;if(S!==null){const Et=S.texture.format;Y=Et===Fl||Et===Ul||Et===Nl}if(Y){const Et=S.texture.type,Nt=Et===ai||Et===ds||Et===Fr||Et===tr||Et===Il||Et===Dl,Yt=oe.getClearColor(),Vt=oe.getClearAlpha(),se=Yt.r,lt=Yt.g,pt=Yt.b;Nt?(g[0]=se,g[1]=lt,g[2]=pt,g[3]=Vt,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=se,x[1]=lt,x[2]=pt,x[3]=Vt,H.clearBufferiv(H.COLOR,0,x))}else et|=H.COLOR_BUFFER_BIT}I&&(et|=H.DEPTH_BUFFER_BIT),G&&(et|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",E,!1),Ft.dispose(),fe.dispose(),$t.dispose(),P.dispose(),ut.dispose(),yt.dispose(),ge.dispose(),ct.dispose(),Xt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",it),vt.removeEventListener("sessionend",xt),Lt.stop()};function wt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const D=te.autoReset,I=qt.enabled,G=qt.autoUpdate,et=qt.needsUpdate,Y=qt.type;St(),te.autoReset=D,qt.enabled=I,qt.autoUpdate=G,qt.needsUpdate=et,qt.type=Y}function E(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function N(D){const I=D.target;I.removeEventListener("dispose",N),X(I)}function X(D){Z(D),$t.remove(D)}function Z(D){const I=$t.get(D).programs;I!==void 0&&(I.forEach(function(G){Xt.releaseProgram(G)}),D.isShaderMaterial&&Xt.releaseShaderCache(D))}this.renderBufferDirect=function(D,I,G,et,Y,Et){I===null&&(I=Pt);const Nt=Y.isMesh&&Y.matrixWorld.determinant()<0,Yt=ye(D,I,G,et,Y);Ht.setMaterial(et,Nt);let Vt=G.index,se=1;if(et.wireframe===!0){if(Vt=bt.getWireframeAttribute(G),Vt===void 0)return;se=2}const lt=G.drawRange,pt=G.attributes.position;let _t=lt.start*se,Rt=(lt.start+lt.count)*se;Et!==null&&(_t=Math.max(_t,Et.start*se),Rt=Math.min(Rt,(Et.start+Et.count)*se)),Vt!==null?(_t=Math.max(_t,0),Rt=Math.min(Rt,Vt.count)):pt!=null&&(_t=Math.max(_t,0),Rt=Math.min(Rt,pt.count));const Dt=Rt-_t;if(Dt<0||Dt===1/0)return;ge.setup(Y,et,Yt,G,Vt);let Kt,Wt=kt;if(Vt!==null&&(Kt=dt.get(Vt),Wt=Zt,Wt.setIndex(Kt)),Y.isMesh)et.wireframe===!0?(Ht.setLineWidth(et.wireframeLinewidth*mt()),Wt.setMode(H.LINES)):Wt.setMode(H.TRIANGLES);else if(Y.isLine){let Ut=et.linewidth;Ut===void 0&&(Ut=1),Ht.setLineWidth(Ut*mt()),Y.isLineSegments?Wt.setMode(H.LINES):Y.isLineLoop?Wt.setMode(H.LINE_LOOP):Wt.setMode(H.LINE_STRIP)}else Y.isPoints?Wt.setMode(H.POINTS):Y.isSprite&&Wt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Wt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ut=Y._multiDrawStarts,Me=Y._multiDrawCounts,ae=Y._multiDrawCount,Se=Vt?dt.get(Vt).bytesPerElement:1,Tt=$t.get(et).currentProgram.getUniforms();for(let be=0;be<ae;be++)Tt.setValue(H,"_gl_DrawID",be),Wt.render(Ut[be]/Se,Me[be])}else if(Y.isInstancedMesh)Wt.renderInstances(_t,Dt,Y.count);else if(G.isInstancedBufferGeometry){const Ut=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Me=Math.min(G.instanceCount,Ut);Wt.renderInstances(_t,Dt,Me)}else Wt.render(_t,Dt)};function K(D,I,G){D.transparent===!0&&D.side===An&&D.forceSinglePass===!1?(D.side=vn,D.needsUpdate=!0,_e(D,I,G),D.side=Gi,D.needsUpdate=!0,_e(D,I,G),D.side=An):_e(D,I,G)}this.compile=function(D,I,G=null){G===null&&(G=D),p=fe.get(G),p.init(I),M.push(p),G.traverseVisible(function(Y){Y.isLight&&Y.layers.test(I.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),D!==G&&D.traverseVisible(function(Y){Y.isLight&&Y.layers.test(I.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();const et=new Set;return D.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Nt=0;Nt<Et.length;Nt++){const Yt=Et[Nt];K(Yt,G,Y),et.add(Yt)}else K(Et,G,Y),et.add(Et)}),M.pop(),p=null,et},this.compileAsync=function(D,I,G=null){const et=this.compile(D,I,G);return new Promise(Y=>{function Et(){if(et.forEach(function(Nt){$t.get(Nt).currentProgram.isReady()&&et.delete(Nt)}),et.size===0){Y(D);return}setTimeout(Et,10)}zt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let L=null;function k(D){L&&L(D)}function it(){Lt.stop()}function xt(){Lt.start()}const Lt=new xd;Lt.setAnimationLoop(k),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(D){L=D,vt.setAnimationLoop(D),D===null?Lt.stop():Lt.start()},vt.addEventListener("sessionstart",it),vt.addEventListener("sessionend",xt),this.render=function(D,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(I),I=vt.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,I,S),p=fe.get(D,M.length),p.init(I),M.push(p),at.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),O.setFromProjectionMatrix(at),ht=this.localClippingEnabled,$=Ct.init(this.clippingPlanes,ht),m=Ft.get(D,w.length),m.init(),w.push(m),vt.enabled===!0&&vt.isPresenting===!0){const Et=y.xr.getDepthSensingMesh();Et!==null&&Jt(Et,I,-1/0,y.sortObjects)}Jt(D,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,z),nt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,nt&&oe.addToRenderList(m,D),this.info.render.frame++,$===!0&&Ct.beginShadows();const G=p.state.shadowsArray;qt.render(G,D,I),$===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=m.opaque,Y=m.transmissive;if(p.setupLights(),I.isArrayCamera){const Et=I.cameras;if(Y.length>0)for(let Nt=0,Yt=Et.length;Nt<Yt;Nt++){const Vt=Et[Nt];Ot(et,Y,D,Vt)}nt&&oe.render(D);for(let Nt=0,Yt=Et.length;Nt<Yt;Nt++){const Vt=Et[Nt];ne(m,D,Vt,Vt.viewport)}}else Y.length>0&&Ot(et,Y,D,I),nt&&oe.render(D),ne(m,D,I);S!==null&&(T.updateMultisampleRenderTarget(S),T.updateRenderTargetMipmap(S)),D.isScene===!0&&D.onAfterRender(y,D,I),ge.resetDefaultState(),_=-1,v=null,M.pop(),M.length>0?(p=M[M.length-1],$===!0&&Ct.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Jt(D,I,G,et){if(D.visible===!1)return;if(D.layers.test(I.layers)){if(D.isGroup)G=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(I);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||O.intersectsSprite(D)){et&&Mt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(at);const Nt=yt.update(D),Yt=D.material;Yt.visible&&m.push(D,Nt,Yt,G,Mt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||O.intersectsObject(D))){const Nt=yt.update(D),Yt=D.material;if(et&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Mt.copy(D.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Mt.copy(Nt.boundingSphere.center)),Mt.applyMatrix4(D.matrixWorld).applyMatrix4(at)),Array.isArray(Yt)){const Vt=Nt.groups;for(let se=0,lt=Vt.length;se<lt;se++){const pt=Vt[se],_t=Yt[pt.materialIndex];_t&&_t.visible&&m.push(D,Nt,_t,G,Mt.z,pt)}}else Yt.visible&&m.push(D,Nt,Yt,G,Mt.z,null)}}const Et=D.children;for(let Nt=0,Yt=Et.length;Nt<Yt;Nt++)Jt(Et[Nt],I,G,et)}function ne(D,I,G,et){const Y=D.opaque,Et=D.transmissive,Nt=D.transparent;p.setupLightsView(G),$===!0&&Ct.setGlobalState(y.clippingPlanes,G),et&&Ht.viewport(A.copy(et)),Y.length>0&&le(Y,I,G),Et.length>0&&le(Et,I,G),Nt.length>0&&le(Nt,I,G),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Ot(D,I,G,et){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new ps(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Gr:ai,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ie.workingColorSpace}));const Et=p.state.transmissionRenderTarget[et.id],Nt=et.viewport||A;Et.setSize(Nt.z,Nt.w);const Yt=y.getRenderTarget();y.setRenderTarget(Et),y.getClearColor(V),rt=y.getClearAlpha(),rt<1&&y.setClearColor(16777215,.5),y.clear(),nt&&oe.render(G);const Vt=y.toneMapping;y.toneMapping=Oi;const se=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),$===!0&&Ct.setGlobalState(y.clippingPlanes,et),le(D,G,et),T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let pt=0,_t=I.length;pt<_t;pt++){const Rt=I[pt],Dt=Rt.object,Kt=Rt.geometry,Wt=Rt.material,Ut=Rt.group;if(Wt.side===An&&Dt.layers.test(et.layers)){const Me=Wt.side;Wt.side=vn,Wt.needsUpdate=!0,ie(Dt,G,et,Kt,Wt,Ut),Wt.side=Me,Wt.needsUpdate=!0,lt=!0}}lt===!0&&(T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et))}y.setRenderTarget(Yt),y.setClearColor(V,rt),se!==void 0&&(et.viewport=se),y.toneMapping=Vt}function le(D,I,G){const et=I.isScene===!0?I.overrideMaterial:null;for(let Y=0,Et=D.length;Y<Et;Y++){const Nt=D[Y],Yt=Nt.object,Vt=Nt.geometry,se=et===null?Nt.material:et,lt=Nt.group;Yt.layers.test(G.layers)&&ie(Yt,I,G,Vt,se,lt)}}function ie(D,I,G,et,Y,Et){D.onBeforeRender(y,I,G,et,Y,Et),D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Y.onBeforeRender(y,I,G,et,D,Et),Y.transparent===!0&&Y.side===An&&Y.forceSinglePass===!1?(Y.side=vn,Y.needsUpdate=!0,y.renderBufferDirect(G,I,et,Y,D,Et),Y.side=Gi,Y.needsUpdate=!0,y.renderBufferDirect(G,I,et,Y,D,Et),Y.side=An):y.renderBufferDirect(G,I,et,Y,D,Et),D.onAfterRender(y,I,G,et,Y,Et)}function _e(D,I,G){I.isScene!==!0&&(I=Pt);const et=$t.get(D),Y=p.state.lights,Et=p.state.shadowsArray,Nt=Y.state.version,Yt=Xt.getParameters(D,Y.state,Et,I,G),Vt=Xt.getProgramCacheKey(Yt);let se=et.programs;et.environment=D.isMeshStandardMaterial?I.environment:null,et.fog=I.fog,et.envMap=(D.isMeshStandardMaterial?ut:P).get(D.envMap||et.environment),et.envMapRotation=et.environment!==null&&D.envMap===null?I.environmentRotation:D.envMapRotation,se===void 0&&(D.addEventListener("dispose",N),se=new Map,et.programs=se);let lt=se.get(Vt);if(lt!==void 0){if(et.currentProgram===lt&&et.lightsStateVersion===Nt)return Ae(D,Yt),lt}else Yt.uniforms=Xt.getUniforms(D),D.onBeforeCompile(Yt,y),lt=Xt.acquireProgram(Yt,Vt),se.set(Vt,lt),et.uniforms=Yt.uniforms;const pt=et.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(pt.clippingPlanes=Ct.uniform),Ae(D,Yt),et.needsLights=ze(D),et.lightsStateVersion=Nt,et.needsLights&&(pt.ambientLightColor.value=Y.state.ambient,pt.lightProbe.value=Y.state.probe,pt.directionalLights.value=Y.state.directional,pt.directionalLightShadows.value=Y.state.directionalShadow,pt.spotLights.value=Y.state.spot,pt.spotLightShadows.value=Y.state.spotShadow,pt.rectAreaLights.value=Y.state.rectArea,pt.ltc_1.value=Y.state.rectAreaLTC1,pt.ltc_2.value=Y.state.rectAreaLTC2,pt.pointLights.value=Y.state.point,pt.pointLightShadows.value=Y.state.pointShadow,pt.hemisphereLights.value=Y.state.hemi,pt.directionalShadowMap.value=Y.state.directionalShadowMap,pt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,pt.spotShadowMap.value=Y.state.spotShadowMap,pt.spotLightMatrix.value=Y.state.spotLightMatrix,pt.spotLightMap.value=Y.state.spotLightMap,pt.pointShadowMap.value=Y.state.pointShadowMap,pt.pointShadowMatrix.value=Y.state.pointShadowMatrix),et.currentProgram=lt,et.uniformsList=null,lt}function we(D){if(D.uniformsList===null){const I=D.currentProgram.getUniforms();D.uniformsList=Vo.seqWithValue(I.seq,D.uniforms)}return D.uniformsList}function Ae(D,I){const G=$t.get(D);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function ye(D,I,G,et,Y){I.isScene!==!0&&(I=Pt),T.resetTextureUnits();const Et=I.fog,Nt=et.isMeshStandardMaterial?I.environment:null,Yt=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:rr,Vt=(et.isMeshStandardMaterial?ut:P).get(et.envMap||Nt),se=et.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,lt=!!G.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),pt=!!G.morphAttributes.position,_t=!!G.morphAttributes.normal,Rt=!!G.morphAttributes.color;let Dt=Oi;et.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Dt=y.toneMapping);const Kt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Wt=Kt!==void 0?Kt.length:0,Ut=$t.get(et),Me=p.state.lights;if($===!0&&(ht===!0||D!==v)){const pe=D===v&&et.id===_;Ct.setState(et,D,pe)}let ae=!1;et.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Me.state.version||Ut.outputColorSpace!==Yt||Y.isBatchedMesh&&Ut.batching===!1||!Y.isBatchedMesh&&Ut.batching===!0||Y.isBatchedMesh&&Ut.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ut.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ut.instancing===!1||!Y.isInstancedMesh&&Ut.instancing===!0||Y.isSkinnedMesh&&Ut.skinning===!1||!Y.isSkinnedMesh&&Ut.skinning===!0||Y.isInstancedMesh&&Ut.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ut.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ut.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ut.instancingMorph===!1&&Y.morphTexture!==null||Ut.envMap!==Vt||et.fog===!0&&Ut.fog!==Et||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Ct.numPlanes||Ut.numIntersection!==Ct.numIntersection)||Ut.vertexAlphas!==se||Ut.vertexTangents!==lt||Ut.morphTargets!==pt||Ut.morphNormals!==_t||Ut.morphColors!==Rt||Ut.toneMapping!==Dt||Ut.morphTargetsCount!==Wt)&&(ae=!0):(ae=!0,Ut.__version=et.version);let Se=Ut.currentProgram;ae===!0&&(Se=_e(et,I,Y));let Tt=!1,be=!1,de=!1;const me=Se.getUniforms(),tn=Ut.uniforms;if(Ht.useProgram(Se.program)&&(Tt=!0,be=!0,de=!0),et.id!==_&&(_=et.id,be=!0),Tt||v!==D){Ht.buffers.depth.getReversed()?(B.copy(D.projectionMatrix),rm(B),om(B),me.setValue(H,"projectionMatrix",B)):me.setValue(H,"projectionMatrix",D.projectionMatrix),me.setValue(H,"viewMatrix",D.matrixWorldInverse);const xe=me.map.cameraPosition;xe!==void 0&&xe.setValue(H,ft.setFromMatrixPosition(D.matrixWorld)),Qt.logarithmicDepthBuffer&&me.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&me.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),v!==D&&(v=D,be=!0,de=!0)}if(Y.isSkinnedMesh){me.setOptional(H,Y,"bindMatrix"),me.setOptional(H,Y,"bindMatrixInverse");const pe=Y.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),me.setValue(H,"boneTexture",pe.boneTexture,T))}Y.isBatchedMesh&&(me.setOptional(H,Y,"batchingTexture"),me.setValue(H,"batchingTexture",Y._matricesTexture,T),me.setOptional(H,Y,"batchingIdTexture"),me.setValue(H,"batchingIdTexture",Y._indirectTexture,T),me.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&me.setValue(H,"batchingColorTexture",Y._colorsTexture,T));const Ne=G.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&jt.update(Y,G,Se),(be||Ut.receiveShadow!==Y.receiveShadow)&&(Ut.receiveShadow=Y.receiveShadow,me.setValue(H,"receiveShadow",Y.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(tn.envMap.value=Vt,tn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&I.environment!==null&&(tn.envMapIntensity.value=I.environmentIntensity),be&&(me.setValue(H,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&Re(tn,de),Et&&et.fog===!0&&Bt.refreshFogUniforms(tn,Et),Bt.refreshMaterialUniforms(tn,et,ot,gt,p.state.transmissionRenderTarget[D.id]),Vo.upload(H,we(Ut),tn,T)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Vo.upload(H,we(Ut),tn,T),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&me.setValue(H,"center",Y.center),me.setValue(H,"modelViewMatrix",Y.modelViewMatrix),me.setValue(H,"normalMatrix",Y.normalMatrix),me.setValue(H,"modelMatrix",Y.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const pe=et.uniformsGroups;for(let xe=0,rn=pe.length;xe<rn;xe++){const Vn=pe[xe];ct.update(Vn,Se),ct.bind(Vn,Se)}}return Se}function Re(D,I){D.ambientLightColor.needsUpdate=I,D.lightProbe.needsUpdate=I,D.directionalLights.needsUpdate=I,D.directionalLightShadows.needsUpdate=I,D.pointLights.needsUpdate=I,D.pointLightShadows.needsUpdate=I,D.spotLights.needsUpdate=I,D.spotLightShadows.needsUpdate=I,D.rectAreaLights.needsUpdate=I,D.hemisphereLights.needsUpdate=I}function ze(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(D,I,G){$t.get(D.texture).__webglTexture=I,$t.get(D.depthTexture).__webglTexture=G;const et=$t.get(D);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=G===void 0,et.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,I){const G=$t.get(D);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(D,I=0,G=0){S=D,R=I,b=G;let et=!0,Y=null,Et=!1,Nt=!1;if(D){const Vt=$t.get(D);if(Vt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(H.FRAMEBUFFER,null),et=!1;else if(Vt.__webglFramebuffer===void 0)T.setupRenderTarget(D);else if(Vt.__hasExternalTextures)T.rebindTextures(D,$t.get(D.texture).__webglTexture,$t.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const pt=D.depthTexture;if(Vt.__boundDepthTexture!==pt){if(pt!==null&&$t.has(pt)&&(D.width!==pt.image.width||D.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(D)}}const se=D.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Nt=!0);const lt=$t.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(lt[I])?Y=lt[I][G]:Y=lt[I],Et=!0):D.samples>0&&T.useMultisampledRTT(D)===!1?Y=$t.get(D).__webglMultisampledFramebuffer:Array.isArray(lt)?Y=lt[G]:Y=lt,A.copy(D.viewport),U.copy(D.scissor),F=D.scissorTest}else A.copy(q).multiplyScalar(ot).floor(),U.copy(j).multiplyScalar(ot).floor(),F=tt;if(Ht.bindFramebuffer(H.FRAMEBUFFER,Y)&&et&&Ht.drawBuffers(D,Y),Ht.viewport(A),Ht.scissor(U),Ht.setScissorTest(F),Et){const Vt=$t.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+I,Vt.__webglTexture,G)}else if(Nt){const Vt=$t.get(D.texture),se=I||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.__webglTexture,G||0,se)}_=-1},this.readRenderTargetPixels=function(D,I,G,et,Y,Et,Nt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=$t.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Nt!==void 0&&(Yt=Yt[Nt]),Yt){Ht.bindFramebuffer(H.FRAMEBUFFER,Yt);try{const Vt=D.texture,se=Vt.format,lt=Vt.type;if(!Qt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=D.width-et&&G>=0&&G<=D.height-Y&&H.readPixels(I,G,et,Y,ce.convert(se),ce.convert(lt),Et)}finally{const Vt=S!==null?$t.get(S).__webglFramebuffer:null;Ht.bindFramebuffer(H.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(D,I,G,et,Y,Et,Nt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=$t.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Nt!==void 0&&(Yt=Yt[Nt]),Yt){const Vt=D.texture,se=Vt.format,lt=Vt.type;if(!Qt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=D.width-et&&G>=0&&G<=D.height-Y){Ht.bindFramebuffer(H.FRAMEBUFFER,Yt);const pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.bufferData(H.PIXEL_PACK_BUFFER,Et.byteLength,H.STREAM_READ),H.readPixels(I,G,et,Y,ce.convert(se),ce.convert(lt),0);const _t=S!==null?$t.get(S).__webglFramebuffer:null;Ht.bindFramebuffer(H.FRAMEBUFFER,_t);const Rt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await sm(H,Rt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Et),H.deleteBuffer(pt),H.deleteSync(Rt),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,I=null,G=0){D.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,D=arguments[1]);const et=Math.pow(2,-G),Y=Math.floor(D.image.width*et),Et=Math.floor(D.image.height*et),Nt=I!==null?I.x:0,Yt=I!==null?I.y:0;T.setTexture2D(D,0),H.copyTexSubImage2D(H.TEXTURE_2D,G,0,0,Nt,Yt,Y,Et),Ht.unbindTexture()},this.copyTextureToTexture=function(D,I,G=null,et=null,Y=0){D.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,D=arguments[1],I=arguments[2],Y=arguments[3]||0,G=null);let Et,Nt,Yt,Vt,se,lt,pt,_t,Rt;const Dt=D.isCompressedTexture?D.mipmaps[Y]:D.image;G!==null?(Et=G.max.x-G.min.x,Nt=G.max.y-G.min.y,Yt=G.isBox3?G.max.z-G.min.z:1,Vt=G.min.x,se=G.min.y,lt=G.isBox3?G.min.z:0):(Et=Dt.width,Nt=Dt.height,Yt=Dt.depth||1,Vt=0,se=0,lt=0),et!==null?(pt=et.x,_t=et.y,Rt=et.z):(pt=0,_t=0,Rt=0);const Kt=ce.convert(I.format),Wt=ce.convert(I.type);let Ut;I.isData3DTexture?(T.setTexture3D(I,0),Ut=H.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(T.setTexture2DArray(I,0),Ut=H.TEXTURE_2D_ARRAY):(T.setTexture2D(I,0),Ut=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,I.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,I.unpackAlignment);const Me=H.getParameter(H.UNPACK_ROW_LENGTH),ae=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Se=H.getParameter(H.UNPACK_SKIP_PIXELS),Tt=H.getParameter(H.UNPACK_SKIP_ROWS),be=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Dt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Vt),H.pixelStorei(H.UNPACK_SKIP_ROWS,se),H.pixelStorei(H.UNPACK_SKIP_IMAGES,lt);const de=D.isDataArrayTexture||D.isData3DTexture,me=I.isDataArrayTexture||I.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const tn=$t.get(D),Ne=$t.get(I),pe=$t.get(tn.__renderTarget),xe=$t.get(Ne.__renderTarget);Ht.bindFramebuffer(H.READ_FRAMEBUFFER,pe.__webglFramebuffer),Ht.bindFramebuffer(H.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let rn=0;rn<Yt;rn++)de&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$t.get(D).__webglTexture,Y,lt+rn),D.isDepthTexture?(me&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$t.get(I).__webglTexture,Y,Rt+rn),H.blitFramebuffer(Vt,se,Et,Nt,pt,_t,Et,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST)):me?H.copyTexSubImage3D(Ut,Y,pt,_t,Rt+rn,Vt,se,Et,Nt):H.copyTexSubImage2D(Ut,Y,pt,_t,Rt+rn,Vt,se,Et,Nt);Ht.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else me?D.isDataTexture||D.isData3DTexture?H.texSubImage3D(Ut,Y,pt,_t,Rt,Et,Nt,Yt,Kt,Wt,Dt.data):I.isCompressedArrayTexture?H.compressedTexSubImage3D(Ut,Y,pt,_t,Rt,Et,Nt,Yt,Kt,Dt.data):H.texSubImage3D(Ut,Y,pt,_t,Rt,Et,Nt,Yt,Kt,Wt,Dt):D.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,pt,_t,Et,Nt,Kt,Wt,Dt.data):D.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,pt,_t,Dt.width,Dt.height,Kt,Dt.data):H.texSubImage2D(H.TEXTURE_2D,Y,pt,_t,Et,Nt,Kt,Wt,Dt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ae),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Se),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,be),Y===0&&I.generateMipmaps&&H.generateMipmap(Ut),Ht.unbindTexture()},this.copyTextureToTexture3D=function(D,I,G=null,et=null,Y=0){return D.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,et=arguments[1]||null,D=arguments[2],I=arguments[3],Y=arguments[4]||0),Sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,I,G,et,Y)},this.initRenderTarget=function(D){$t.get(D).__webglFramebuffer===void 0&&T.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?T.setTextureCube(D,0):D.isData3DTexture?T.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?T.setTexture2DArray(D,0):T.setTexture2D(D,0),Ht.unbindTexture()},this.resetState=function(){R=0,b=0,S=null,Ht.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}}class Hl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(t),this.near=e,this.far=n}clone(){return new Hl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class x_ extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gl extends mn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Pn,u=Pn,d,f){super(null,o,a,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ta extends Ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ds=new De,_f=new De,yo=[],Mf=new Xi,v_=new De,gr=new Ve,xr=new qi;class __ extends Ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,v_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),Mf.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Mf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),xr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),_f.multiplyMatrices(n,Ds),gr.matrixWorld=_f,gr.raycast(t,yo);for(let o=0,a=yo.length;o<a;o++){const c=yo[o];c.instanceId=r,c.object=this,e.push(c)}yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gl(new Float32Array(s*this.count),s,this.count,zl,ri));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bd extends mn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,h=(o-u)/f;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new re:new st);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new st,s=[],r=[],o=[],a=new st,c=new De;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new st)}r[0]=new st,o[0]=new st;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(cn(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(cn(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Vl extends ci{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new re){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class M_ extends Vl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,h*=u,s(o,a,f,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const So=new st,tc=new Wl,ec=new Wl,nc=new Wl;class y_ extends ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new st){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),l=So);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=So),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),h),x=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),tc.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,x,m),ec.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,x,m),nc.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),ec.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),nc.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(tc.calc(c),ec.calc(c),nc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yf(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function S_(i,t){const e=1-i;return e*e*t}function w_(i,t){return 2*(1-i)*i*t}function b_(i,t){return i*i*t}function Lr(i,t,e,n){return S_(i,t)+w_(i,e)+b_(i,n)}function E_(i,t){const e=1-i;return e*e*e*t}function T_(i,t){const e=1-i;return 3*e*e*i*t}function A_(i,t){return 3*(1-i)*i*i*t}function C_(i,t){return i*i*i*t}function Ir(i,t,e,n,s){return E_(i,t)+T_(i,e)+A_(i,n)+C_(i,s)}class Ed extends ci{constructor(t=new re,e=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new re){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(t,s.x,r.x,o.x,a.x),Ir(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class R_ extends ci{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(t,s.x,r.x,o.x,a.x),Ir(t,s.y,r.y,o.y,a.y),Ir(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Td extends ci{constructor(t=new re,e=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new re){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new re){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P_ extends ci{constructor(t=new st,e=new st){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ad extends ci{constructor(t=new re,e=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new re){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class L_ extends ci{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Lr(t,s.x,r.x,o.x),Lr(t,s.y,r.y,o.y),Lr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cd extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new re){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(yf(a,c.x,l.x,u.x,d.x),yf(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new re().fromArray(s))}return this}}var Sf=Object.freeze({__proto__:null,ArcCurve:M_,CatmullRomCurve3:y_,CubicBezierCurve:Ed,CubicBezierCurve3:R_,EllipseCurve:Vl,LineCurve:Td,LineCurve3:P_,QuadraticBezierCurve:Ad,QuadraticBezierCurve3:L_,SplineCurve:Cd});class I_ extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sf[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Sf[s.type]().fromJSON(s))}return this}}class D_ extends I_{constructor(t){super(),this.type="Path",this.currentPoint=new re,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Td(this.currentPoint.clone(),new re(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ad(this.currentPoint.clone(),new re(t,e),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ed(this.currentPoint.clone(),new re(t,e),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Cd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Vl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ha extends je{constructor(t=[new re(0,-.5),new re(.5,0),new re(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=cn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,d=new st,f=new re,h=new st,g=new st,x=new st;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,h.x=p*1,h.y=-m,h.z=p*0,x.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),c.push(h.x,h.y,h.z),x.copy(g)}for(let w=0;w<=e;w++){const M=n+w*u*s,y=Math.sin(M),C=Math.cos(M);for(let R=0;R<=t.length-1;R++){d.x=t[R].x*y,d.y=t[R].y,d.z=t[R].x*C,o.push(d.x,d.y,d.z),f.x=w/e,f.y=R/(t.length-1),a.push(f.x,f.y);const b=c[3*R+0]*y,S=c[3*R+1],_=c[3*R+0]*C;l.push(b,S,_)}}for(let w=0;w<e;w++)for(let M=0;M<t.length-1;M++){const y=M+w*t.length,C=y,R=y+t.length,b=y+t.length+1,S=y+1;r.push(C,R,S),r.push(b,S,R)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.points,t.segments,t.phiStart,t.phiLength)}}class Xl extends ha{constructor(t=1,e=1,n=4,s=8){const r=new D_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Xl(t.radius,t.length,t.capSegments,t.radialSegments)}}class ql extends je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new st,u=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const h=n+d/e*s;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Zn extends je{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let g=0;const x=[],m=n/2;let p=0;w(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(h,2));function w(){const y=new st,C=new st;let R=0;const b=(e-t)/n;for(let S=0;S<=r;S++){const _=[],v=S/r,A=v*(e-t)+t;for(let U=0;U<=s;U++){const F=U/s,V=F*c+a,rt=Math.sin(V),J=Math.cos(V);C.x=A*rt,C.y=-v*n+m,C.z=A*J,d.push(C.x,C.y,C.z),y.set(rt,b,J).normalize(),f.push(y.x,y.y,y.z),h.push(F,1-v),_.push(g++)}x.push(_)}for(let S=0;S<s;S++)for(let _=0;_<r;_++){const v=x[_][S],A=x[_+1][S],U=x[_+1][S+1],F=x[_][S+1];(t>0||_!==0)&&(u.push(v,A,F),R+=3),(e>0||_!==r-1)&&(u.push(A,U,F),R+=3)}l.addGroup(p,R,0),p+=R}function M(y){const C=g,R=new re,b=new st;let S=0;const _=y===!0?t:e,v=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*v,0),f.push(0,v,0),h.push(.5,.5),g++;const A=g;for(let U=0;U<=s;U++){const V=U/s*c+a,rt=Math.cos(V),J=Math.sin(V);b.x=_*J,b.y=m*v,b.z=_*rt,d.push(b.x,b.y,b.z),f.push(0,v,0),R.x=rt*.5+.5,R.y=J*.5*v+.5,h.push(R.x,R.y),g++}for(let U=0;U<s;U++){const F=C+U,V=A+U;y===!0?u.push(V,V+1,F):u.push(V+1,V,F),S+=3}l.addGroup(p,S,y===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class da extends Zn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new da(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pa extends je{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const M=new st,y=new st,C=new st;for(let R=0;R<e.length;R+=3)h(e[R+0],M),h(e[R+1],y),h(e[R+2],C),c(M,y,C,w)}function c(w,M,y,C){const R=C+1,b=[];for(let S=0;S<=R;S++){b[S]=[];const _=w.clone().lerp(y,S/R),v=M.clone().lerp(y,S/R),A=R-S;for(let U=0;U<=A;U++)U===0&&S===R?b[S][U]=_:b[S][U]=_.clone().lerp(v,U/A)}for(let S=0;S<R;S++)for(let _=0;_<2*(R-S)-1;_++){const v=Math.floor(_/2);_%2===0?(f(b[S][v+1]),f(b[S+1][v]),f(b[S][v])):(f(b[S][v+1]),f(b[S+1][v+1]),f(b[S+1][v]))}}function l(w){const M=new st;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(w),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){const w=new st;for(let M=0;M<r.length;M+=3){w.x=r[M+0],w.y=r[M+1],w.z=r[M+2];const y=m(w)/2/Math.PI+.5,C=p(w)/Math.PI+.5;o.push(y,1-C)}g(),d()}function d(){for(let w=0;w<o.length;w+=6){const M=o[w+0],y=o[w+2],C=o[w+4],R=Math.max(M,y,C),b=Math.min(M,y,C);R>.9&&b<.1&&(M<.2&&(o[w+0]+=1),y<.2&&(o[w+2]+=1),C<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function h(w,M){const y=w*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function g(){const w=new st,M=new st,y=new st,C=new st,R=new re,b=new re,S=new re;for(let _=0,v=0;_<r.length;_+=9,v+=6){w.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),y.set(r[_+6],r[_+7],r[_+8]),R.set(o[v+0],o[v+1]),b.set(o[v+2],o[v+3]),S.set(o[v+4],o[v+5]),C.copy(w).add(M).add(y).divideScalar(3);const A=m(C);x(R,v+0,w,A),x(b,v+2,M,A),x(S,v+4,y,A)}}function x(w,M,y,C){C<0&&w.x===1&&(o[M]=w.x-1),y.x===0&&y.z===0&&(o[M]=C/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.vertices,t.indices,t.radius,t.details)}}class ir extends pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ir(t.radius,t.detail)}}class Vr extends pa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vr(t.radius,t.detail)}}class oi extends je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new st,f=new st,h=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const w=[],M=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let C=0;C<=e;C++){const R=C/e;d.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(R+y,1-M),w.push(l++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const M=u[p][w+1],y=u[p][w],C=u[p+1][w],R=u[p+1][w+1];(p!==0||o>0)&&h.push(M,y,R),(p!==n-1||c<Math.PI)&&h.push(y,C,R)}this.setIndex(h),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class z_ extends xs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class N_ extends xs{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ma extends xs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=la,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rd extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class U_ extends Rd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ic=new De,wf=new st,bf=new st;class F_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kl,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(wf),bf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bf),e.updateMatrixWorld(),ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class O_ extends F_{constructor(){super(new vd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k_ extends Rd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new O_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class B_ extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);const Ce=Object.freeze({eightBody:1447452,eightDisc:16513779,eightInk:1447452,eightRim:10274047,cueBody:16776692,cueDots:14165548,blobShadow:795668,flagCloth:15217199,flagDisc:16513779,pinWhite:16513779,pinBand:15217199,cupInside:1780254,cupLiner:16513779,guideWhite:16777215,guideHalo:1057818,guideWarn:16747050,eightArrow:16765503,surfaceOutline:3037738,chalk:4030425,poolBalls:Object.freeze([16763196,2976991,15022389,8081353,16747050,2006618,9317178])}),Ef=Object.freeze({1:Object.freeze({name:"Greenside",rough:5216828,fairwayLight:8177237,fairwayDark:7125066,fringe:7782994,greenLight:9427046,greenDark:8703836,sand:15914907,sandLip:14268530,ice:14218239,waterShallow:6080736,waterDeep:3051460,waterFoam:15268863,waterGlint:12579839,pondBed:2916230,railSide:10115630,railTop:12745283,railSights:16051152,cushionNose:2059082,hedge:4164154,wallStone:14275267,soilTop:8015407,soilBottom:5123868,skyTop:12576511,skyBottom:15267839,reeds:8032058,wood:11040586,hemiSky:15135487,hemiGround:8022600,hemiIntensity:1.4,sun:16773596,sunIntensity:2.7,sunElevationDeg:50}),2:Object.freeze({name:"Lakeside",rough:6198336,fairwayLight:9684306,fairwayDark:8697930,fringe:9224270,greenLight:10737251,greenDark:9948506,sand:15978388,sandLip:14264422,ice:14218239,waterShallow:5224150,waterDeep:2386088,waterFoam:15268863,waterGlint:16770764,pondBed:2781050,railSide:7028516,railTop:9198132,railSights:14792794,cushionNose:2055762,hedge:4620346,wallStone:14207152,soilTop:8015407,soilBottom:5123868,skyTop:16766888,skyBottom:16772048,reeds:8032058,wood:11040586,hemiSky:16770764,hemiGround:5917242,hemiIntensity:1.8,sun:16767400,sunIntensity:3.2,sunElevationDeg:32})}),Yl=i=>Ef[i]||Ef[1],Bi=42,Tf=64,H_=58;function G_(i){if(!(i>0)||!Number.isFinite(i))return Bi;const t=2*Math.atan(Math.tan(H_*Math.PI/360)/i)*180/Math.PI;return t<Bi?Bi:t>Tf?Tf:t}const V_=_l.degToRad(225),W_=90;function X_(){try{const n=typeof location<"u"?/[?&]tier=([012])\b/.exec(location.search):null;if(n)return+n[1]}catch{}const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=typeof navigator<"u"?navigator.deviceMemory:void 0,e=typeof devicePixelRatio=="number"?devicePixelRatio:1;return i&&typeof t=="number"&&t<=3?0:!i&&e>=1.5?2:1}const q_=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * vec4( mat3( viewMatrix ) * position, 1.0 );
  gl_Position = p.xyww;
  gl_Position.z = p.w * 0.99999; // on the far plane: behind everything, never clipped
}`,Y_=`
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
}`,K_=[[.3,.05,.34,.95],[1.15,-.16,.28,.8],[1.9,.12,.4,.9],[2.7,-.08,.3,.85],[3.5,.03,.36,.95],[4.3,-.2,.32,.75],[5.05,.15,.3,.9],[5.8,-.05,.38,.85]],Af={1:7912944,2:15771752},$_={1:14083827,2:15913661},j_={1:16777215,2:16774890};function Z_(i){const t=new oi(1,24,12),e=[];for(const r of K_)e.push(new Ge(r[0],r[1],r[2],r[3]));const n=new _n({uniforms:{uZenith:{value:new he},uHorizon:{value:new he},uBelow:{value:new he},uSun:{value:new he},uSunDir:{value:new st(0,1,0)},uClouds:{value:e},uCloudLit:{value:new he},uCloudShade:{value:new he}},defines:i>=1?{CLOUDS:""}:{},vertexShader:q_,fragmentShader:Y_,side:vn,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1}),s=new Ve(t,n);return s.name="sky",s.frustumCulled=!1,s.renderOrder=-100,s.matrixAutoUpdate=!1,s}function J_(i){const t=X_(),e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=typeof devicePixelRatio=="number"&&devicePixelRatio>0?devicePixelRatio:1,s=Math.min(n,t===0?1:t===2?2:e?1.5:2),r=Math.min(1,n);let o=null;try{o=new g_({antialias:t>0,powerPreference:"high-performance",stencil:!1,alpha:!1})}catch(tt){o=null,typeof window<"u"&&window.document&&window.document.body&&console.error(tt)}if(o){o.outputColorSpace=pn,o.toneMapping=Kh,o.toneMappingExposure=1,o.shadowMap.enabled=t>=1,o.shadowMap.type=Pl,o.shadowMap.autoUpdate=!1,o.setPixelRatio(s);const tt=o.domElement;tt.style.display="block",tt.style.width="100%",tt.style.height="100%",tt.style.touchAction="none",tt.style.outline="none",i&&i.appendChild&&i.appendChild(tt)}const a=new x_,c=new Tn(Bi,16/9,.5,800),l=Z_(t);a.add(l),a.fog=new Hl(15267839,80,300),c.position.set(0,30,17),c.lookAt(0,0,0);const u=new U_(16777215,7829367,1.4);u.position.set(0,1,0);const d=new k_(16777215,2.7);if(a.add(u,d,d.target),t>=1){d.castShadow=!0;const tt=t===2?2048:1024;d.shadow.mapSize.set(tt,tt),d.shadow.bias=-6e-4,d.shadow.normalBias=.03,d.shadow.intensity=.55}const f={w:1,h:1,portrait:!1,zero:!0},h=new Set,g=new st,x=new Xi(new st(-4,-2,-16),new st(30,4,4));let m=2,p=_l.degToRad(50);const w={renderer:o,scene:a,camera:c,tier:t,size:f,container:i,round:1,yaw:0,fov:Bi,hemi:u,sun:d,sky:l,kickCamera:null,pixelRatio:s,shadows:!!(o&&t>=1),setRound:A,setShadowBounds:_,invalidateShadows:v,onResize:V,render:q,dispose:j},M=new De,y=new st,C=new st,R=new he,b=new st(0,1,0);function S(){const tt=w.yaw+V_;if(g.set(Math.sin(tt)*Math.cos(p),Math.sin(p),Math.cos(tt)*Math.cos(p)),x.getCenter(C),d.position.copy(C).addScaledVector(g,W_),d.target.position.copy(C),d.updateMatrixWorld(),d.target.updateMatrixWorld(),l.material.uniforms.uSunDir.value.copy(g),!d.castShadow)return;M.lookAt(d.position,C,b),M.setPosition(d.position),M.invert();let O=1/0,$=-1/0,ht=1/0,B=-1/0,at=1/0,ft=-1/0;for(let Pt=0;Pt<8;Pt++)y.set(Pt&1?x.max.x:x.min.x,Pt&2?x.max.y:x.min.y,Pt&4?x.max.z:x.min.z),y.applyMatrix4(M),y.x<O&&(O=y.x),y.x>$&&($=y.x),y.y<ht&&(ht=y.y),y.y>B&&(B=y.y),y.z<at&&(at=y.z),y.z>ft&&(ft=y.z);const Mt=d.shadow.camera;Mt.left=O-1,Mt.right=$+1,Mt.bottom=ht-1,Mt.top=B+1,Mt.near=Math.max(.5,-ft-4),Mt.far=-at+4,Mt.updateProjectionMatrix(),v()}function _(tt){if(!tt||!tt.bounds)return;const O=tt.bounds;let $=0,ht=0;const B=tt.grid;if(B&&B.height)for(let at=0;at<B.height.length;at++){const ft=B.height[at];ft<$&&($=ft),ft>ht&&(ht=ft)}x.min.set(O.minx-5,$-2.5,O.minz-5),x.max.set(O.maxx+5,ht+5,O.maxz+5),S()}function v(){m=2}function A(tt){const O=Yl(tt);w.round=tt===2?2:1,u.color.setHex(O.hemiSky),u.groundColor.setHex(O.hemiGround),u.intensity=O.hemiIntensity,d.color.setHex(O.sun),d.intensity=O.sunIntensity,p=_l.degToRad(O.sunElevationDeg);const $=w.round,ht=l.material.uniforms;ht.uHorizon.value.setHex(O.skyBottom),ht.uZenith.value.setHex(O.skyTop).lerp(R.setHex(Af[$]),.5),ht.uBelow.value.setHex(O.skyBottom).lerp(R.setHex(O.skyTop),.45).lerp(R.setHex(Af[$]),.12),ht.uSun.value.setHex(O.sun),ht.uCloudLit.value.setHex(j_[$]),ht.uCloudShade.value.setHex($_[$]),a.background&&a.background.isColor||(a.background=new he),a.background.setHex(O.skyBottom),a.fog.color.setHex(O.skyBottom),S()}function U(){let tt=0,O=0;if(i&&(tt=i.clientWidth||0,O=i.clientHeight||0,(!tt||!O)&&i.getBoundingClientRect)){const $=i.getBoundingClientRect();tt=tt||$.width||0,O=O||$.height||0}return{w:tt>0&&Number.isFinite(tt)?Math.round(tt):0,h:O>0&&Number.isFinite(O)?Math.round(O):0}}function F(tt){const O=U(),$=!(O.w>0&&O.h>0),ht=$?1:O.w,B=$?1:O.h;if(!tt&&ht===f.w&&B===f.h&&$===f.zero)return;const at=f.portrait;f.w=ht,f.h=B,f.zero=$,f.portrait=!$&&B>ht,w.yaw=f.portrait?-Math.PI/2:0,c.aspect=$?16/9:ht/B,w.fov=G_(c.aspect),c.fov=w.fov,c.updateProjectionMatrix(),o&&o.setSize(ht,B,!1),(tt||at!==f.portrait)&&S(),h.forEach(ft=>{try{ft(f)}catch(Mt){console.error(Mt)}})}function V(tt){return h.add(tt),()=>h.delete(tt)}const rt=()=>F(!1);let J=null;typeof ResizeObserver=="function"&&i&&i.nodeType===1&&(J=new ResizeObserver(rt),J.observe(i)),typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",rt),window.addEventListener("orientationchange",rt));function gt(tt){tt=Math.round(tt*4)/4,!(!o||tt===w.pixelRatio)&&(w.pixelRatio=tt,o.setPixelRatio(tt),o.setSize(f.w,f.h,!1))}const ot=Q_({cap:s,min:r,get:()=>w.pixelRatio,set:gt,onSlowStart(){o&&o.shadowMap.enabled&&(o.shadowMap.enabled=!1,d.castShadow=!1,w.shadows=!1)}});let W=0;const z=typeof performance<"u"?performance:Date;function q(){if(!o||f.zero)return;const tt=z.now();W&&ot.frame((tt-W)/1e3),W=tt,m>0&&(o.shadowMap.enabled&&(o.shadowMap.needsUpdate=!0),m--),o.render(a,c)}function j(){if(h.clear(),J&&J.disconnect(),typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",rt),window.removeEventListener("orientationchange",rt)),l.geometry.dispose(),l.material.dispose(),d.shadow&&d.shadow.map&&d.shadow.map.dispose(),o){o.dispose();const tt=o.domElement;tt&&tt.parentNode&&tt.parentNode.removeChild(tt)}}return F(!0),A(1),w}function Q_({cap:i,min:t,get:e,set:n,onSlowStart:s=null}){const r={winT:0,winN:0,slowT:0,slowSum:0,fastT:0,age:0,checkT:0,checkN:0,checked:!1,probing:!1,probeT:0,probeSum:0,prevPr:0,prevAvg:0,capped:!1},o=new Map;function a(c){if(!(c>0)||c>.25||(r.age+=c,!r.checked&&r.age>1&&(r.checkT+=c,r.checkN++,r.checkT>=3&&(r.checked=!0,r.checkN/r.checkT<40&&s&&s())),r.winT+=c,r.winN++,r.winT<.5))return;const l=r.winT/r.winN,u=r.winT;if(r.winT=0,r.winN=0,r.probing){r.probeT+=u,r.probeSum+=l*u,r.probeT>=1.5&&(r.probing=!1,r.probeSum/r.probeT>r.prevAvg*.92&&(n(r.prevPr),o.set(r.prevPr,Math.max(0,(o.get(r.prevPr)||1)-1)),r.capped=!0));return}if(r.capped)if(l<.0172)r.capped=!1;else return;l>.018?(r.slowT+=u,r.slowSum+=l*u,r.fastT=0):(r.slowT=0,r.slowSum=0),l<.0172?r.fastT+=u:r.fastT=0;const d=e();if(r.slowT>=1&&d>t)o.set(d,(o.get(d)||0)+1),r.prevPr=d,r.prevAvg=r.slowSum/r.slowT,n(Math.max(t,d-.25)),r.probing=!0,r.probeT=0,r.probeSum=0,r.slowT=0,r.slowSum=0,r.fastT=0;else if(r.fastT>=5&&d<i){const f=Math.min(i,d+.25);(o.get(f)||0)<2&&n(f),r.fastT=0}}return{frame:a,state:r}}const ve={enabled:!0,pulling:!1,pull:0,strike:-1,placing:!1,aiming:!1,hint:0},On={rest:.12,travel:2.4,elevDeg:13,len:6.43,fadeNear:.4,fadeFar:.7,hold:.12};function tM(){ve.enabled=!0,ve.pulling=!1,ve.pull=0,ve.strike=-1,ve.placing=!1,ve.aiming=!1,ve.hint=0}const fs=Math.PI/180,yl=Math.PI*2,ea=60*fs,eM=30*fs,nM=36*fs,iM=42*fs,zn=Gt.R,sM=22,wo=1.6,Cf=1,bo=2.6,Eo=64,rM={top:76},Rf=.3,Pf=10,Lf=.85,oM=.065,aM=.34,cM=.36,lM=1.12,uM=.9,fM=1.2,If=.14,hM=3.5,dM=.06,To=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},pM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,an=(i,t)=>Number.isFinite(i)?i:t,Qi=i=>i-yl*Math.floor((i+Math.PI)/yl);function rs(i,t,e){if(!i)return 0;const n=i.grid;if(!n||!n.height){const m=i.heightAt?i.heightAt(t,e):0;return Number.isFinite(m)?m:0}const s=n.cols,r=n.rows;let o=(t-n.x0)/n.cell,a=(e-n.z0)/n.cell;if(o!==o||a!==a)return 0;o=o<0?0:o>s-1.000001?s-1.000001:o,a=a<0?0:a>r-1.000001?r-1.000001:a;const c=o|0,l=a|0,u=o-c,d=a-l,f=n.height,h=l*s+c,g=f[h]+(f[h+1]-f[h])*u,x=f[h+s]+(f[h+s+1]-f[h+s])*u;return g+(x-g)*d}class ei{constructor(t){this.tx=0,this.ty=0,this.tz=0,this.d=t,this.yaw=0,this.pitch=ea,this.valid=!1}}class zs{constructor(){this.v=0}}class mM{constructor(){this.x=new zs,this.y=new zs,this.z=new zs,this.d=new zs,this.yaw=new zs,this.pitch=new zs}}class gM{constructor(){this.x=0,this.z=0,this.has=!1,this.lastX=0,this.lastZ=0,this.vx=0,this.vz=0,this.fresh=!1,this.age=0,this.yaw=0,this.baseD=20,this.ox=0,this.oz=0}}class xM{constructor(){this.d=0,this.aspect=0,this.yaw=NaN,this.pitch=NaN,this.tx=NaN,this.ty=NaN,this.tz=NaN,this.dd=NaN,this.kicked=!1}}class vM{constructor(){this.active=!1,this.t=0,this.from=new ei(60),this.to=new ei(30),this.resolve=null}}class _M{constructor(){this.dt=0,this.T=.25,this.Ty=.3,this.pin=0,this.ex=0,this.ez=0,this.eh=0,this.dLo=0}}class MM{constructor(){this.x0=-1,this.x1=1,this.y0=-1,this.y1=1}}class yM{constructor(){this.top=rM.top,this.right=0,this.bottom=0,this.left=0}}class SM{constructor(){this.x0=0,this.x1=0,this.y0=0,this.y1=0}}class wM{constructor(){this.yaw=0,this.pitch=ea}}class bM{constructor(){this.intent=null,this.ax=NaN,this.az=NaN,this.x=NaN,this.z=NaN,this.ex=NaN,this.ez=NaN}}class EM{constructor(){this.ex=0,this.ez=0,this.dx=1,this.dz=0,this.len=14}}class TM{constructor(){this.t=0,this.k=0}}function AM(i){const t=i.camera,e=new Tn(Bi,t.aspect,.1,4e3),n=new ei(40),s=new ei(40),r=new mM,o=new ei(60),a=new ei(30),c=new ei(30),l=new ei(30),u=new ei(30),d=new vM,f=new gM,h=new wM,g=new bM,x=new EM,m=new TM,p=new Float64Array(Eo),w=new Float64Array(Eo),M=new Float64Array(Eo);let y=0;const C=new st,R=new st,b=new st,S=new Ln,_={x:0,z:0};let v=null,A=0,U=0,F=60,V="idle",rt=!1,J=!1,gt=null,ot=-1,W=null,z=i.yaw||0;const q=new xM,j=new yM,tt=new MM,O=new ei(30),$=new _M,ht=(E,N)=>rs(v,E,N),B=()=>Math.max(1,i.size.h||1),at=()=>Math.max(1,i.size.w||1),ft=()=>{const E=i.fov;return E>1&&E<170?E:Bi},Mt=()=>Math.tan(ft()*fs/2);function Pt(){const E=at(),N=B(),X=Math.max(10,.03*Math.min(E,N));let Z=j.left,K=j.right,L=j.top,k=j.bottom;const it=E*(1-Rf)-2*X;if(Z+K>it){const Lt=Math.max(0,it)/(Z+K);Z*=Lt,K*=Lt}const xt=N*(1-Rf)-2*X;if(L+k>xt){const Lt=Math.max(0,xt)/(L+k);L*=Lt,k*=Lt}return tt.x0=-1+2*(Z+X)/E,tt.x1=1-2*(K+X)/E,tt.y1=1-2*(L+X)/N,tt.y0=-1+2*(k+X)/N,tt}function nt(E,N,X,Z,K,L,k){const it=Math.cos(k);E.position.set(N+Math.sin(L)*it*K,X+Math.sin(k)*K,Z+Math.cos(L)*it*K),S.set(-k,L,0,"YXZ"),E.quaternion.setFromEuler(S),E.updateMatrixWorld(!0)}function mt(){Number.isFinite(n.tx)||(n.tx=0),Number.isFinite(n.ty)||(n.ty=0),Number.isFinite(n.tz)||(n.tz=0),Number.isFinite(n.yaw)||(n.yaw=0),Number.isFinite(n.pitch)||(n.pitch=ea),n.d>=.5||(n.d=Number.isFinite(n.d)?.5:40);const E=n.d,N=Math.cos(n.pitch);t.position.set(n.tx+Math.sin(n.yaw)*N*E,n.ty+Math.sin(n.pitch)*E,n.tz+Math.cos(n.yaw)*N*E),(q.yaw!==n.yaw||q.pitch!==n.pitch)&&(S.set(-n.pitch,n.yaw,0,"YXZ"),t.quaternion.setFromEuler(S),q.yaw=n.yaw,q.pitch=n.pitch);let X=ft();if(m.t>0){const K=1-m.t/If,L=K<.2?K/.2:(1-K)/.8,k=L*L*(3-2*L);X+=hM*m.k*k;const it=dM*m.k*k,xt=it*Math.sin(K*41);t.position.x+=Math.cos(n.yaw)*xt,t.position.z-=Math.sin(n.yaw)*xt,t.position.y+=it*.6*Math.cos(K*33),q.kicked=!0}else q.kicked=!1;t.updateMatrixWorld(!0),q.tx=n.tx,q.ty=n.ty,q.tz=n.tz,q.dd=n.d;const Z=Math.abs(E-q.d)>q.d*.04||t.aspect!==q.aspect;if(Z){q.d=E,q.aspect=t.aspect,t.near=Math.min(8,Math.max(.3,E*.14));let K=E*1.6+F*1.3+60;const L=i.scene&&i.scene.fog;L&&L.isFog&&(L.near=E*.9+F*.45,L.far=L.near+F*1.3+40,K<L.far+5&&(K=L.far+5)),t.far=K}(Z||t.fov!==X)&&(t.fov=X,t.updateProjectionMatrix())}function H(){const E=ft();e.fov===E&&e.aspect===t.aspect&&e.near===.1||(e.fov=E,e.aspect=t.aspect,e.near=.1,e.far=4e3,e.updateProjectionMatrix())}function Q(E,N,X){y>=Eo||!Number.isFinite(E)||!Number.isFinite(X)||(p[y]=E,w[y]=an(N,0),M[y]=X,y++)}const zt=new SM;function Qt(E,N,X,Z){nt(e,E,N,X,Z,h.yaw,h.pitch),zt.x0=1/0,zt.x1=-1/0,zt.y0=1/0,zt.y1=-1/0;for(let K=0;K<y;K++){if(C.set(p[K],w[K],M[K]).applyMatrix4(e.matrixWorldInverse),C.z>-.2)return!1;C.applyMatrix4(e.projectionMatrix),C.x<zt.x0&&(zt.x0=C.x),C.x>zt.x1&&(zt.x1=C.x),C.y<zt.y0&&(zt.y0=C.y),C.y>zt.y1&&(zt.y1=C.y)}return!0}function Ht(E,N,X,Z,K){if(R.copy(E.position),b.set(N,X,.5).unproject(E).sub(R).normalize(),b.y>-1e-4)return!1;const L=(Z-R.y)/b.y;return K.tx=R.x+b.x*L,K.tz=R.z+b.z*L,!0}function te(E,N){if(H(),N.yaw=h.yaw,N.pitch=h.pitch,y===0)return N.tx=0,N.ty=0,N.tz=0,N.d=40,N;let X=0,Z=0,K=0;for(let Jt=0;Jt<y;Jt++)X+=p[Jt],Z+=w[Jt],K+=M[Jt];X/=y,Z/=y,K/=y;const L=E.x1-E.x0,k=E.y1-E.y0,it=(E.x0+E.x1)/2,xt=(E.y0+E.y1)/2;let Lt=40;for(let Jt=0;Jt<3;Jt++){let ne=1,Ot=1500;for(let le=0;le<30;le++)Lt=(ne+Ot)/2,Qt(X,Z,K,Lt)&&zt.x1-zt.x0<=L&&zt.y1-zt.y0<=k?Ot=Lt:ne=Lt;if(Lt=Ot,!Qt(X,Z,K,Lt))break;Ht(e,(zt.x0+zt.x1)/2-it,(zt.y0+zt.y1)/2-xt,Z,l)&&(X=l.tx,K=l.tz)}return N.tx=X,N.ty=Z,N.tz=K,N.d=Lt,N}function $t(E,N,X){return H(),Qt(N.tx,N.ty,N.tz,X)?zt.x0>=E.x0-1e-6&&zt.x1<=E.x1+1e-6&&zt.y0>=E.y0-1e-6&&zt.y1<=E.y1+1e-6:!1}const T=()=>B()*2*zn/(sM*2*Mt());function P(){if(!v)return;h.yaw=z,h.pitch=ea,y=0;const E=v.bounds,N=v.ground&&v.ground.length?v.ground:null;if(N){const Z=Math.max(1,Math.ceil(N.length/40));for(let K=0;K<N.length;K+=Z)Q(N[K].x,ht(N[K].x,N[K].z),N[K].z)}Q(E.minx,ht(E.minx,E.minz),E.minz),Q(E.maxx,ht(E.maxx,E.minz),E.minz),Q(E.minx,ht(E.minx,E.maxz),E.maxz),Q(E.maxx,ht(E.maxx,E.maxz),E.maxz);const X=v.cup;Q(X.x,ht(X.x,X.z)+bo,X.z),te(Pt(),o)}function ut(E,N,X,Z,K){for(let L=0;L<Z;L++){const k=L/Z*yl,it=E+Math.cos(k)*X,xt=N+Math.sin(k)*X;Q(it,ht(it,xt)+K,xt)}}function dt(E,N){if(!E||E.length<2)return;const X=E.length>>1,Z=Math.max(1,Math.ceil(X/N));for(let K=0;K<X;K+=Z)Q(E[2*K],ht(E[2*K],E[2*K+1]),E[2*K+1]);Q(E[2*X-2],ht(E[2*X-2],E[2*X-1]),E[2*X-1])}function bt(E,N,X,Z){y=0;const K=ht(E,N);if(ut(E,N,X+zn*1.15,24,zn),ut(E,N,X,12,2*zn),Q(E,K+2*zn,N),Q(E,K,N),Z){const L=ht(Z.x,Z.z);Q(Z.x,L+2*zn,Z.z),ut(Z.x,Z.z,zn*1.1,6,zn)}}function yt(){if(ot===1&&W)W.cue&&dt(W.cue.points,10),W.eight&&dt(W.eight.points,14);else if(ot===0)for(let E=1;E<=4;E++){const N=x.ex+x.dx*x.len*(E/4),X=x.ez+x.dz*x.len*(E/4);Q(N,ht(N,X),X)}}function Xt(E,N,X,Z,K,L,k){h.yaw=Math.atan2(-K,-L),h.pitch=eM;const it=Pt();bt(E,N,X,Z);const xt=y;if(yt(),te(it,k),v&&v.cup){const Ot=v.cup,le=Math.sqrt((Ot.x-E)*(Ot.x-E)+(Ot.z-N)*(Ot.z-N));let ie=To(18,8,le);const _e=(Ot.x-E)*K+(Ot.z-N)*L;if(ie>0&&_e>-1){const we=y;ut(Ot.x,Ot.z,Gt.HOLE_R+.6,8,0),Q(Ot.x,ht(Ot.x,Ot.z)+bo,Ot.z),te(it,c),y=xt;let Ae=!1;for(let ye=0;ye<4&&!Ae;ye++,ie*=.5)Ft(l,k,c,ie),Ae=$t(it,l,l.d);Ae&&Zt(k,l),y=we}}const Lt=v&&v.camera&&v.camera.zoom>0?v.camera.zoom:1;k.d=Math.max(8,k.d/Lt);const Jt=Math.max(8,T());if(bt(E,N,X,Z),te(it,c),c.d>Jt)Zt(k,c);else if(k.d>Jt&&(k.d=Jt),!$t(it,k,k.d)){const Ot=k.tx,le=k.ty,ie=k.tz;let _e=!1;for(let we=1;we<=8;we++){const Ae=we/8;if(l.tx=Ot+(c.tx-Ot)*Ae,l.ty=le+(c.ty-le)*Ae,l.tz=ie+(c.tz-ie)*Ae,$t(it,l,k.d)){_e=!0;break}}_e?(k.tx=l.tx,k.ty=l.ty,k.tz=l.tz):Zt(k,c)}const ne=Math.min(1/(2*oM*Mt()),.85*Jt);return k.d<ne*1.35&&(k.d=Math.min(ne*1.35,Math.max(k.d,Jt))),$.ex=E,$.ez=N,$.eh=ht(E,N)+zn,$.dLo=ne,Bt(k,it,Z),k.yaw=h.yaw,k.pitch=h.pitch,k}function Bt(E,N,X){if(H(),!$t(N,E,E.d))return;const Z=Math.cos(h.yaw),K=-Math.sin(h.yaw),L=-Math.sin(h.yaw),k=-Math.cos(h.yaw),it=u;if(X){nt(e,E.tx,E.ty,E.tz,E.d,h.yaw,h.pitch);const _e=ht(X.x,X.z)+zn;if(C.set(X.x,_e,X.z).project(e),Ht(e,(N.x0+N.x1)/2,C.y,_e,it)){const we=(X.x-it.tx)*Z+(X.z-it.tz)*K;let Ae=0,ye=1;if(it.ty=E.ty,it.tx=E.tx+Z*we,it.tz=E.tz+K*we,$t(N,it,E.d))Ae=1;else for(let Re=0;Re<8;Re++){const ze=(Ae+ye)/2;it.tx=E.tx+Z*we*ze,it.tz=E.tz+K*we*ze,$t(N,it,E.d)?Ae=ze:ye=ze}E.tx+=Z*we*Ae,E.tz+=K*we*Ae}}let xt=0,Lt=E.d*1.2;it.ty=E.ty;const Jt=Math.cos(h.pitch)*E.d,ne=E.ty+Math.sin(h.pitch)*E.d-$.eh,Ot=Math.sin(h.yaw)*Jt,le=Math.cos(h.yaw)*Jt,ie=$.dLo*$.dLo;for(let _e=0;_e<12;_e++){const we=(xt+Lt)/2;it.tx=E.tx+L*we,it.tz=E.tz+k*we;const Ae=it.tx+Ot-$.ex,ye=it.tz+le-$.ez;Ae*Ae+ye*ye+ne*ne>=ie&&$t(N,it,E.d)?xt=we:Lt=we}E.tx+=L*xt*Lf,E.tz+=k*xt*Lf}function Ft(E,N,X,Z){E.tx=N.tx+(X.tx-N.tx)*Z,E.ty=N.ty+(X.ty-N.ty)*Z,E.tz=N.tz+(X.tz-N.tz)*Z,E.d=Math.exp(Math.log(N.d)+(Math.log(X.d)-Math.log(N.d))*Z),E.yaw=N.yaw,E.pitch=N.pitch}function fe(E){const N=v.eight,X=v.cup;let Z=X.x-N.x,K=X.z-N.z;const L=Math.sqrt(Z*Z+K*K)||1;Z/=L,K/=L;const k=v.placeR||4,it=Math.min(.6*k,2.5);return _.x=N.x-Z*it,_.z=N.z-K*it,x.ex=N.x,x.ez=N.z,x.dx=Z,x.dz=K,x.len=Math.min(14,L),ot=0,Xt(N.x,N.z,k,_,Z,K,E),ot=-1,E}function Ct(E,N){const X=E&&E.world,Z=X&&X.balls&&X.balls[1];if(!Z)return fe(N);const K=E.level&&E.level.placeR||X.placeR||4,L=E.intent;let k=null;L&&Number.isFinite(L.x)&&Number.isFinite(L.z)&&(_.x=L.x,_.z=L.z,k=_);let it=L&&Number.isFinite(L.ax)?L.ax:L&&Number.isFinite(L.dx)?L.dx:0,xt=L&&Number.isFinite(L.az)?L.az:L&&Number.isFinite(L.dz)?L.dz:0;it*it+xt*xt>1e-8||(k?(it=Z.x-k.x,xt=Z.z-k.z):v&&(it=v.cup.x-Z.x,xt=v.cup.z-Z.z),it*it+xt*xt>1e-8||(it=1,xt=0));const Lt=Math.sqrt(it*it+xt*xt);return it/=Lt,xt/=Lt,W=typeof E.guide=="function"?E.guide():null,ot=1,Xt(Z.x,Z.z,K,k,it,xt,N),ot=-1,W=null,g.intent=L,g.ax=it,g.az=xt,g.x=k?k.x:NaN,g.z=k?k.z:NaN,g.ex=Z.x,g.ez=Z.z,N}function qt(){const E=gt;if(!E||E.state!=="ready"||!E.world||!E.intent||ve.aiming===!0||ve.placing||ve.pulling||ve.strike>=0)return;const N=E.intent;if(N===g.intent)return;const X=E.world.balls[1];if(Math.abs(N.ax-g.ax)+Math.abs(N.az-g.az)<.004&&N.x===g.x&&N.z===g.z&&X&&X.x===g.ex&&X.z===g.ez){g.intent=N;return}Ct(E,a),It(a),a.valid=!0,Zt(s,a)}function oe(E){if(!v)return;const N=v.bounds,X=Pf+.6*an(E.d,40);E.tx=Math.min(N.maxx+X,Math.max(N.minx-X,an(E.tx,0))),E.tz=Math.min(N.maxz+X,Math.max(N.minz-X,an(E.tz,0))),E.d=Math.min(jt(),Math.max(kt(),an(E.d,40)))}const jt=()=>Math.max(10,o.d*1.1),kt=()=>Math.max(6,.6*(a.valid?a.d:o.d*.5));function Zt(E,N){E.tx=N.tx,E.ty=N.ty,E.tz=N.tz,E.d=N.d,E.yaw=N.yaw,E.pitch=N.pitch}function ce(){r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,r.yaw.v=0,r.pitch.v=0}function ge(E){Zt(n,E),Zt(s,E),ce(),mt()}function ct(){if(!d.active)return;d.active=!1,Zt(n,d.to),Zt(s,a.valid?a:d.to),ce(),V=rt?"overview":"play",rt&&Zt(s,o);const E=d.resolve;d.resolve=null,E&&E()}i.onResize(()=>{const E=i.yaw||0,N=E!==z;if(z=E,mt(),!!v){if(P(),d.active){Zt(d.from,o),fe(d.to),a.valid&&gt&&(Ct(gt,a),Zt(d.to,a));return}gt&&!J&&gt.state==="ready"&&(Ct(gt,a),It(a),a.valid=!0),rt||V==="overview"?Zt(s,o):V==="play"&&!J&&a.valid&&Zt(s,a),oe(s),N&&ge(s)}});const St={get userMoved(){return J},set userMoved(E){J=!!E},get level(){return v},get mode(){return V},get overviewOn(){return rt},get yaw(){return n.yaw},get pitch(){return n.pitch},get goalYaw(){return d.active?d.to.yaw:s.yaw},get goalPitch(){return d.active?d.to.pitch:s.pitch},get fov(){return t.fov},setInsets(E){const N=k=>Number.isFinite(k)&&k>0?k:0,X=N(E&&E.top),Z=N(E&&E.right),K=N(E&&E.bottom),L=N(E&&E.left);if(!(X===j.top&&Z===j.right&&K===j.bottom&&L===j.left)&&(j.top=X,j.right=Z,j.bottom=K,j.left=L,!!v)){if(P(),d.active){a.valid&&gt?(Ct(gt,a),Zt(d.to,a)):fe(d.to);return}J||(gt&&gt.state==="ready"&&(Ct(gt,a),It(a),a.valid=!0),rt||V==="overview"?Zt(s,o):V==="play"&&a.valid?Zt(s,a):V==="cup"&&St.frameCup())}},get insets(){return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}},setLevel(E){if(d.active&&ct(),v=E||null,A=0,U=0,v&&v.grid&&v.grid.height){const N=v.grid.height;A=1/0,U=-1/0;for(let X=0;X<N.length;X++)N[X]<A&&(A=N[X]),N[X]>U&&(U=N[X]);Number.isFinite(A)||(A=0,U=0)}if(v&&v.bounds){const N=v.bounds;F=Math.max(20,Math.sqrt((N.maxx-N.minx)*(N.maxx-N.minx)+(N.maxz-N.minz)*(N.maxz-N.minz)))}J=!1,rt=!1,gt=null,a.valid=!1,f.has=!1,g.intent=null,m.t=0,z=i.yaw||0,q.d=0,i.setShadowBounds&&i.setShadowBounds(v),v&&(P(),V="overview",ge(o))},intro(E){return d.active&&ct(),v?(P(),Zt(d.from,o),E&&E.state==="ready"&&E.world&&E.level===v?(gt=E,Ct(E,a),It(a),a.valid=!0,Zt(d.to,a)):fe(d.to),d.t=0,d.active=!0,V="intro",ge(o),new Promise(N=>{d.resolve=N})):Promise.resolve()},skipIntro(){ct()},frameShot(E){if(v){if(gt=E||gt,Ct(gt,a),It(a),a.valid=!0,J=!1,f.has=!1,d.active){Zt(d.to,a);return}rt||(V="play",Zt(s,a))}},follow(E,N){if(!(!v||d.active||rt||J||!Number.isFinite(E)||!Number.isFinite(N))){if(V!=="follow"||!f.has){f.lastX=E,f.lastZ=N,f.vx=0,f.vz=0,f.age=0,f.yaw=n.yaw;const X=a.valid?a.d:n.d;f.baseD=Math.min(Math.max(kt(),X*lM),Math.max(8,T()))}V="follow",f.x=E,f.z=N,f.has=!0,f.fresh=!0}},frameCup(){if(!v||d.active)return;h.yaw=n.yaw,h.pitch=iM,y=0;const E=v.cup;ut(E.x,E.z,Gt.HOLE_R+2,12,0),Q(E.x,ht(E.x,E.z)+bo,E.z),te(Pt(),s),s.d=Math.max(s.d,10),oe(s),V="cup"},overview(E){v&&(rt=!!E,!d.active&&(J=!1,rt?(P(),V="overview",Zt(s,o)):a.valid&&(gt&&gt.state==="ready"&&(Ct(gt,a),It(a)),V="play",Zt(s,a))))},zoomBy(E,N,X){if(!v||!(E>0)||!Number.isFinite(E))return;d.active&&ct();const Z=at(),K=B(),L=Number.isFinite(N)?N/Z*2-1:0,k=Number.isFinite(X)?1-X/K*2:0;mt(),H(),nt(e,n.tx,n.ty,n.tz,n.d,n.yaw,n.pitch);const it=c,xt=Ht(e,L,k,n.ty,it),Lt=it.tx,Jt=it.tz,ne=Math.min(jt(),Math.max(kt(),n.d/E));nt(e,n.tx,n.ty,n.tz,ne,n.yaw,n.pitch);const Ot=Ht(e,L,k,n.ty,it);n.d=ne,xt&&Ot&&(n.tx+=Lt-it.tx,n.tz+=Jt-it.tz),oe(n),J=!0,ge(n)},panBy(E,N){if(!v||!Number.isFinite(E)||!Number.isFinite(N))return;d.active&&ct();const X=B()/(2*Math.max(1,n.d)*Mt()),Z=Math.cos(n.yaw),K=-Math.sin(n.yaw),L=-Math.sin(n.yaw),k=-Math.cos(n.yaw),it=Math.max(.3,Math.sin(n.pitch)),xt=-E/X,Lt=N/(X*it);n.tx+=Z*xt+L*Lt,n.tz+=K*xt+k*Lt,oe(n),J=!0,ge(n)},kick(E){E=Number.isFinite(E)?Math.min(1,E):0,E>.02&&(m.t=If,m.k=E)},update(E){if(E=Number.isFinite(E)&&E>0?Math.min(E,.1):0,m.t>0&&(m.t=Math.max(0,m.t-E)),d.active){d.t+=E;const Z=d.from,K=d.to;if(d.t<wo){const L=d.t/wo;Zt(n,Z),n.d=Z.d*(1.04-.04*(L*(2-L)))}else{const L=pM(Math.min(1,(d.t-wo)/Cf));n.tx=Z.tx+(K.tx-Z.tx)*L,n.ty=Z.ty+(K.ty-Z.ty)*L,n.tz=Z.tz+(K.tz-Z.tz)*L,n.d=Math.exp(Math.log(Z.d)+(Math.log(K.d)-Math.log(Z.d))*L),n.yaw=Qi(Z.yaw+Qi(K.yaw-Z.yaw)*L),n.pitch=Z.pitch+(K.pitch-Z.pitch)*L}mt(),d.t>=wo+Cf&&ct();return}V==="play"&&!J&&!rt&&qt(),$.dt=E;let N=.25,X=aM;$.pin=0,V==="follow"&&f.has&&!J&&!rt?(N=.3,X=.25,wt(),$.pin=1):V==="overview"?(N=.3,X=.3):V==="cup"&&(N=.45,X=.45),f.fresh=!1,!J&&E>0&&($.T=N,$.Ty=X,vt()),!(n.tx===q.tx&&n.ty===q.ty&&n.tz===q.tz&&n.d===q.dd&&n.yaw===q.yaw&&n.pitch===q.pitch&&m.t<=0&&!q.kicked&&t.fov===ft())&&mt()},screenToGround(E,N){if(!Number.isFinite(E)||!Number.isFinite(N))return null;const X=E/at()*2-1,Z=1-N/B()*2;if(R.copy(t.position),b.set(X,Z,.5).unproject(t).sub(R).normalize(),!(b.y<-1e-5))return null;const K=U+.01,L=A-.01;let k=Math.max(0,(K-R.y)/b.y);const it=Math.max(k,(L-R.y)/b.y),xt=ye=>R.y+b.y*ye-ht(R.x+b.x*ye,R.z+b.z*ye);if(!v||it-k<1e-6){const ye=U===A?(U-R.y)/b.y:k;return{x:R.x+b.x*ye,z:R.z+b.z*ye}}const Lt=Math.sqrt(b.x*b.x+b.z*b.z),Jt=Math.min(600,Math.max(1,Math.ceil((it-k)*Lt/.2))),ne=(it-k)/Jt;let Ot=xt(k),le=k,ie=Ot<=0;if(!ie)for(let ye=1;ye<=Jt;ye++){le=k+ne*ye;const Re=xt(le);if(Re<=0){ie=!0;break}k=le,Ot=Re}ie||(le=it);let _e=k,we=le;for(let ye=0;ye<24&&we-_e>1e-5;ye++){const Re=(_e+we)/2;xt(Re)>0?_e=Re:we=Re}const Ae=(_e+we)/2;return{x:R.x+b.x*Ae,z:R.z+b.z*Ae}},groundToScreen(E,N,X,Z){const K=Z||{x:0,y:0,onScreen:!1};C.set(an(E,0),an(N,0),an(X,0)).applyMatrix4(t.matrixWorldInverse);const L=C.z>-t.near;L&&(C.z=-t.near),C.applyMatrix4(t.projectionMatrix);const k=at(),it=B();let xt=(C.x+1)/2*k,Lt=(1-C.y)/2*it;return L&&(xt=k-xt,Lt=it-Lt),K.x=an(xt,k/2),K.y=an(Lt,it/2),K.onScreen=!L&&K.x>=0&&K.x<=k&&K.y>=0&&K.y<=it,K},pxPerMetre(E,N){const X=ht(an(E,0),an(N,0))+zn,Z=t.position.distanceTo(C.set(an(E,0),X,an(N,0))),K=B()/(2*Math.max(.01,Z)*Math.tan(t.fov*fs/2));return Number.isFinite(K)?K:1}};i.kickCamera=E=>St.kick(E);function vt(){const E=$.dt;let N=2/Math.max(1e-4,$.T),X=N*E,Z=1/(1+X+.48*X*X+.235*X*X*X),K,L;if($.pin){const it=.3+-.255*To(0,.6,f.age),xt=Math.exp(-E/it);n.tx=s.tx+(n.tx-s.tx)*xt,n.ty=s.ty+(n.ty-s.ty)*xt,n.tz=s.tz+(n.tz-s.tz)*xt,r.x.v=0,r.y.v=0,r.z.v=0}else K=n.tx-s.tx,L=(r.x.v+N*K)*E,r.x.v=(r.x.v-N*L)*Z,n.tx=s.tx+(K+L)*Z,K=n.ty-s.ty,L=(r.y.v+N*K)*E,r.y.v=(r.y.v-N*L)*Z,n.ty=s.ty+(K+L)*Z,K=n.tz-s.tz,L=(r.z.v+N*K)*E,r.z.v=(r.z.v-N*L)*Z,n.tz=s.tz+(K+L)*Z;N=2/Math.max(1e-4,$.T*1.6),X=N*E,Z=1/(1+X+.48*X*X+.235*X*X*X);const k=Math.log(Math.max(.5,s.d));K=Math.log(Math.max(.5,n.d))-k,L=(r.d.v+N*K)*E,r.d.v=(r.d.v-N*L)*Z,n.d=Math.exp(k+(K+L)*Z),N=2/Math.max(1e-4,$.Ty),X=N*E,Z=1/(1+X+.48*X*X+.235*X*X*X),K=Qi(n.yaw-s.yaw),L=(r.yaw.v+N*K)*E,r.yaw.v=(r.yaw.v-N*L)*Z,n.yaw=Qi(s.yaw+(K+L)*Z),K=n.pitch-s.pitch,L=(r.pitch.v+N*K)*E,r.pitch.v=(r.pitch.v-N*L)*Z,n.pitch=s.pitch+(K+L)*Z,Number.isFinite(n.tx+n.ty+n.tz+n.d+n.yaw+n.pitch)||(Zt(n,s),ce()),Math.abs(n.tx-s.tx)+Math.abs(n.ty-s.ty)+Math.abs(n.tz-s.tz)<1e-4&&Math.abs(n.d-s.d)<1e-4*s.d&&Math.abs(Qi(n.yaw-s.yaw))+Math.abs(n.pitch-s.pitch)<1e-5&&Math.abs(r.x.v)+Math.abs(r.y.v)+Math.abs(r.z.v)+Math.abs(r.d.v)+Math.abs(r.yaw.v)+Math.abs(r.pitch.v)<1e-4&&(Zt(n,s),ce())}function wt(){const E=$.dt;if(E>0&&f.fresh){const K=(f.x-f.lastX)/E,L=(f.z-f.lastZ)/E,k=1-Math.exp(-E/.12);Number.isFinite(K)&&Number.isFinite(L)&&Math.abs(K)<400&&Math.abs(L)<400&&(f.vx+=(K-f.vx)*k,f.vz+=(L-f.vz)*k)}else if(E>0){const K=Math.exp(-E/.3);f.vx*=K,f.vz*=K}f.lastX=f.x,f.lastZ=f.z,f.age+=E;const N=Math.sqrt(f.vx*f.vx+f.vz*f.vz);if(N>1.5&&E>0){const K=Qi(Math.atan2(-f.vx,-f.vz)-f.yaw),L=Math.abs(K),k=L<1.75?1:L>2.6?0:1-(L-1.75)/.85;let it=K*(1-Math.exp(-E/uM))*k*To(1.5,8,N);const xt=fM*E;it>xt?it=xt:it<-xt&&(it=-xt),f.yaw=Qi(f.yaw+it)}s.yaw=f.yaw,s.pitch=nM;const X=Pt();h.yaw=s.yaw,h.pitch=s.pitch;{const K=i.fov,L=Math.tan((K>1&&K<170?K:Bi)*fs/2),k=t.aspect>0?t.aspect:16/9,it=(X.x0+X.x1)/2*L*k,xt=(X.y0+cM*(X.y1-X.y0))*L,Lt=Math.sin(h.yaw),Jt=Math.cos(h.yaw),ne=Math.sin(h.pitch),Ot=Math.cos(h.pitch),le=Jt*it-Lt*ne*xt-Lt*Ot,ie=Ot*xt-ne,_e=-Lt*it-Jt*ne*xt-Jt*Ot;if(ie<-1e-4){const we=-ne/ie;f.ox=Lt*Ot+le*we,f.oz=Jt*Ot+_e*we}else f.ox=0,f.oz=0}let Z=f.baseD;if(v&&v.cup){const K=v.cup,L=Math.sqrt((K.x-f.x)*(K.x-f.x)+(K.z-f.z)*(K.z-f.z)),k=To(15,6,L),it=(K.x-f.x)*-Math.sin(h.yaw)+(K.z-f.z)*-Math.cos(h.yaw);if(k>0&&it>-3){y=0;const xt=ht(K.x,K.z);Q(K.x,xt+bo,K.z),ut(K.x,K.z,Gt.HOLE_R+.4,6,0),Q(f.x,ht(f.x,f.z)+2*zn,f.z);const Lt=ht(f.x,f.z);let Jt=Z,ne=Math.max(Z,Math.min(Z*2.2,T()*1.3));if(O.ty=Lt,O.tx=f.x-f.ox*Jt,O.tz=f.z-f.oz*Jt,!$t(X,O,Jt)){if(O.tx=f.x-f.ox*ne,O.tz=f.z-f.oz*ne,$t(X,O,ne))for(let Ot=0;Ot<12;Ot++){const le=(Jt+ne)/2;O.tx=f.x-f.ox*le,O.tz=f.z-f.oz*le,$t(X,O,le)?ne=le:Jt=le}Z+=(ne-Z)*k}}}s.tx=f.x-f.ox*Z,s.tz=f.z-f.oz*Z,s.ty=ht(f.x,f.z),s.d=Z,oe(s)}function It(E){if(!v)return;const N=v.bounds,X=Pf+.6*an(E.d,30);E.tx=Math.min(N.maxx+X,Math.max(N.minx-X,an(E.tx,0))),E.tz=Math.min(N.maxz+X,Math.max(N.minz-X,an(E.tz,0))),E.d=Math.min(jt(),Math.max(6,an(E.d,30)))}return mt(),St}function CM(i){let t=2166136261;for(let n=0;n<i.length;n++)t^=i.charCodeAt(n),t=Math.imul(t,16777619)>>>0;let e=t||1;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const ue=i=>new he(i),Pe=(i,t)=>new he(i.r*t,i.g*t,i.b*t),Wo=(i,t,e)=>new he(i.r+(t.r-i.r)*e,i.g+(t.g-i.g)*e,i.b+(t.b-i.b)*e);function Cn(i,t,e,n="after"){if(!i.includes(t))throw new Error("course shader: injection target missing: "+t);return i.replace(t,n==="after"?t+`
`+e:n==="replace"?e:e+`
`+t)}const Xo=i=>{const t=new Float64Array(i.length*2);for(let e=0;e<i.length;e++)t[e*2]=i[e].x,t[e*2+1]=i[e].z;return t};function Sl(i,t,e){let n=!1;const s=i.length;for(let r=0,o=s-2;r<s;o=r,r+=2){const a=i[r],c=i[r+1],l=i[o],u=i[o+1];c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(n=!n)}return n}function Df(i,t,e,n,s){const r=i.length/2,o=t?r:r-1;let a=1/0;for(let c=0;c<o;c++){const l=(c+1)%r,u=i[c*2],d=i[c*2+1],f=i[l*2]-u,h=i[l*2+1]-d,g=f*f+h*h||1e-12;let x=((e-u)*f+(n-d)*h)/g;x=x<0?0:x>1?1:x;const m=u+f*x,p=d+h*x,w=(m-e)*(m-e)+(p-n)*(p-n);w<a&&(a=w,s.x=m,s.z=p,s.seg=c,s.t=x)}return s.d=Math.sqrt(a),s}function RM(i,t,e,n,s,r){const o=e-i,a=n-t,c=o*o+a*a||1e-12;let l=((s-i)*o+(r-t)*a)/c;l=l<0?0:l>1?1:l;const u=i+o*l-s,d=t+a*l-r;return Math.sqrt(u*u+d*d)}function Pd(i,t=6){const e=Math.max(2,Math.ceil(Math.abs(i.to-i.from)/t)),n=[];for(let s=0;s<=e;s++){const r=(i.from+(i.to-i.from)*s/e)*Math.PI/180;n.push({x:i.x+Math.cos(r)*i.r,z:i.z-Math.sin(r)*i.r})}return n}function PM(i){const t=Xo(i.ground),e=t.length/2;let n=0;for(let p=0;p<e;p++){const w=(p+1)%e;n+=t[p*2]*t[w*2+1]-t[w*2]*t[p*2+1]}const s=n>0?1:-1,r=new Float64Array(e*2),o=new Float64Array(e);for(let p=0;p<e;p++){const w=(p+1)%e,M=t[w*2]-t[p*2],y=t[w*2+1]-t[p*2+1],C=Math.hypot(M,y)||1e-9;o[p]=C,r[p*2]=s*y/C,r[p*2+1]=-s*M/C}const a=[];for(const p of i.walls)a.push({poly:Xo(p.pts),closed:p.closed});for(const p of i.arcsRender||[])a.push({poly:Xo(Pd(p)),closed:!1});const c={d:0,x:0,z:0,seg:0,t:0},l=.25,u=new Int32Array(e+1),d=[];for(let p=0;p<e;p++){u[p]=d.length;const w=Math.max(1,Math.round(o[p]/l));for(let M=0;M<=w;M++){const y=M/w,C=t[p*2]+(t[(p+1)%e*2]-t[p*2])*y,R=t[p*2+1]+(t[(p+1)%e*2+1]-t[p*2+1])*y;let b=1/0;for(const S of a)Df(S.poly,S.closed,C,R,c),c.d<b&&(b=c.d);d.push(b<.3?1:0)}}u[e]=d.length;const f=Uint8Array.from(d);let h=!1,g=!1;for(let p=0;p<f.length;p++)f[p]?g=!0:h=!0;const x={d:0,x:0,z:0,seg:0,t:0};return{poly:t,apronW:h?.75:3,count:e,segN:r,segLen:o,anyOpen:h,anyWalled:g,inside:(p,w)=>Sl(t,p,w),nearest:(p,w,M=x)=>Df(t,!0,p,w,M),walled(p,w){const M=u[p],y=u[p+1]-1-M;return f[M+Math.round(w*y)]===1}}}const Ao=new st,Co=new st,Ro=new st,hn=new st,zf=new st,Nf=new st;class LM{constructor(){this.pos=[],this.nor=[],this.col=[],this.leaf=[]}get triangles(){return this.pos.length/9}_v(t,e,n,s,r,o,a,c){this.pos.push(t,e,n),this.nor.push(s,r,o),this.col.push(a.r,a.g,a.b),this.leaf.push(c)}tri(t,e,n,s,r=0,o=null){Ao.set(t[0],t[1],t[2]),Co.set(e[0],e[1],e[2]),Ro.set(n[0],n[1],n[2]),zf.subVectors(Co,Ao),Nf.subVectors(Ro,Ao),hn.crossVectors(zf,Nf);const a=hn.length();if(a<1e-9)return;hn.multiplyScalar(1/a);let c=Ao,l=Co,u=Ro;o&&hn.x*o[0]+hn.y*o[1]+hn.z*o[2]<0&&(l=Ro,u=Co,hn.negate()),this._v(c.x,c.y,c.z,hn.x,hn.y,hn.z,s,r),this._v(l.x,l.y,l.z,hn.x,hn.y,hn.z,s,r),this._v(u.x,u.y,u.z,hn.x,hn.y,hn.z,s,r)}quad(t,e,n,s,r,o=0,a=null){this.tri(t,e,n,r,o,a),this.tri(t,n,s,r,o,a)}geo(t,e,{leaf:n=0,flat:s=!0,matrix:r=null}={}){const o=t.index?t.toNonIndexed():t;(s||!o.attributes.normal)&&o.computeVertexNormals();let a=o.attributes.position.array;const c=a.length/9,l=new Array(c);for(let d=0;d<c;d++){const f=d*9,h=a[f+3]-a[f],g=a[f+4]-a[f+1],x=a[f+5]-a[f+2],m=a[f+6]-a[f],p=a[f+7]-a[f+1],w=a[f+8]-a[f+2],M=g*w-x*p,y=x*m-h*w,C=h*p-g*m;if(M*M+y*y+C*C<1e-14){l[d]=null;continue}l[d]=e((a[f]+a[f+3]+a[f+6])/3,(a[f+1]+a[f+4]+a[f+7])/3,(a[f+2]+a[f+5]+a[f+8])/3,d)}r&&o.applyMatrix4(r),a=o.attributes.position.array;const u=o.attributes.normal.array;for(let d=0;d<c;d++){const f=l[d];if(!f)continue;const h=d*9;let g=!0;for(let x=0;x<9;x++)(!Number.isFinite(u[h+x])||!Number.isFinite(a[h+x]))&&(g=!1);if(g)for(let x=0;x<9;x+=3)this._v(a[h+x],a[h+x+1],a[h+x+2],u[h+x],u[h+x+1],u[h+x+2],f,n)}o!==t&&o.dispose(),t.dispose()}build(){const t=new je;return t.setAttribute("position",new Le(this.pos,3)),t.setAttribute("normal",new Le(this.nor,3)),t.setAttribute("color",new Le(this.col,3)),t.setAttribute("aLeaf",new Le(this.leaf,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const IM=new De,Uf=new gs,Ff=new st,sc=new st,DM=new st(0,1,0);function Je(i,t,e,n=0,s=1){return Ff.set(i,t,e),Uf.setFromAxisAngle(DM,n),Array.isArray(s)?sc.set(s[0],s[1],s[2]):sc.set(s,s,s),IM.compose(Ff,Uf,sc).clone()}const zM={fairway:1,green:2,rough:3,sand:4,water:5,ice:6},NM=[1/16,4/16,6/16,4/16,1/16],Po=[0,1/4,2/4,1/4,0];function ts(i,t,e,n=NM){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=a+l<0?0:a+l>=t?t-1:a+l;c+=i[o*t+u]*n[l+2]}s[o*t+a]=c}for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=o+l<0?0:o+l>=e?e-1:o+l;c+=s[u*t+a]*n[l+2]}r[o*t+a]=c}return r}function UM(i,t,e,n){const r=new Float32Array(t*e);for(let a=0;a<r.length;a++)r[a]=i[a]?1e9:0;const o=Math.SQRT2;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c>0&&(u=Math.min(u,r[l-1]+1)),a>0&&(u=Math.min(u,r[l-t]+1),c>0&&(u=Math.min(u,r[l-t-1]+o)),c<t-1&&(u=Math.min(u,r[l-t+1]+o))),r[l]=u}for(let a=e-1;a>=0;a--)for(let c=t-1;c>=0;c--){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c<t-1&&(u=Math.min(u,r[l+1]+1)),a<e-1&&(u=Math.min(u,r[l+t]+1),c<t-1&&(u=Math.min(u,r[l+t+1]+o)),c>0&&(u=Math.min(u,r[l+t-1]+o))),r[l]=u}for(let a=0;a<r.length;a++)r[a]=r[a]>=1e9?50:r[a]>0?(r[a]-.5)*n:0;return r}function Of(i,t,e){const n=new Gl(i,t,e,Hn,ai);return n.flipY=!1,n.magFilter=Bn,n.minFilter=Bn,n.generateMipmaps=!1,n.wrapS=_i,n.wrapT=_i,n.colorSpace=xi,n.needsUpdate=!0,n}function FM(i,t,e){const{cols:n,rows:s,cell:r,x0:o,z0:a,surface:c}=i.grid,l=n*s;let u=Uint8Array.from(c);for(let z=0;z<3;z++){const q=u;u=Uint8Array.from(q);for(let j=0;j<s;j++)for(let tt=0;tt<n;tt++){const O=j*n+tt;if(q[O]!==0)continue;const $=tt>0&&q[O-1]||tt<n-1&&q[O+1]||j>0&&q[O-n]||j<s-1&&q[O+n]||0;u[O]=$}}const d=new Float32Array(l),f=new Float32Array(l),h=new Float32Array(l),g=new Float32Array(l);let x=!1;const m=(z,q,j)=>{q===2?d[z]+=j:q===4?f[z]+=j:q===5&&(h[z]+=j),g[z]+=(q===3?1:q===6?0:.5)*j},p=(i.zones||[]).map(z=>({code:zM[z.surface]||1,poly:Xo(z.pts)})),w=t.poly,M=4;for(let z=0;z<s;z++)for(let q=0;q<n;q++){const j=z*n+q,tt=u[j];c[j]===5&&(x=!0);let O=!1;for(let B=-1;B<=1&&!O;B++){const at=z+B;if(!(at<0||at>=s))for(let ft=-1;ft<=1;ft++){const Mt=q+ft;if(Mt>=0&&Mt<n&&u[at*n+Mt]!==tt){O=!0;break}}}if(!O){m(j,tt,1);continue}const $=o+q*r,ht=a+z*r;for(let B=0;B<M;B++)for(let at=0;at<M;at++){const ft=$+((B+.5)/M-.5)*r,Mt=ht+((at+.5)/M-.5)*r;let Pt=tt;if(Sl(w,ft,Mt)){Pt=1;for(const nt of p)Sl(nt.poly,ft,Mt)&&(Pt=nt.code)}m(j,Pt,1/(M*M))}}const y=ts(d,n,s,Po),C=ts(f,n,s,Po),R=ts(h,n,s,Po),b=ts(g,n,s,Po),S=ts(ts(d,n,s),n,s),_=new Uint8Array(l);for(let z=0;z<l;z++)_[z]=c[z]===5?1:0;const v=UM(_,n,s,r),A=new Float32Array(l),U=.55,F=(z,q,j,tt,O)=>{const $=Math.max(0,Math.floor((z-o)/r)),ht=Math.min(n-1,Math.ceil((q-o)/r)),B=Math.max(0,Math.floor((j-a)/r)),at=Math.min(s-1,Math.ceil((tt-a)/r));for(let ft=B;ft<=at;ft++)for(let Mt=$;Mt<=ht;Mt++){const Pt=O(o+Mt*r,a+ft*r),nt=ft*n+Mt;Pt>A[nt]&&(A[nt]=Pt)}};for(const z of e)if(z.r!==void 0){const q=z.r+U;F(z.x-q,z.x+q,z.z-q,z.z+q,(j,tt)=>{const O=Math.hypot(j-z.x,tt-z.z)-z.r;return O<0?1:Math.max(0,1-O/U)})}else{const q=z.hw+U;F(Math.min(z.ax,z.bx)-q,Math.max(z.ax,z.bx)+q,Math.min(z.az,z.bz)-q,Math.max(z.az,z.bz)+q,(j,tt)=>{const O=RM(z.ax,z.az,z.bx,z.bz,j,tt)-z.hw;return O<0?1:Math.max(0,1-O/U)})}const V=new Float32Array(l);if(t.anyOpen)for(let z=2;z<s-2;z++)for(let q=2;q<n-2;q++){const j=z*n+q;if(c[j]===0)continue;let tt=!1;for(let $=-2;$<=2&&!tt;$++)for(let ht=-2;ht<=2;ht++)if(c[j+$*n+ht]===0){tt=!0;break}if(!tt)continue;const O=t.nearest(o+q*r,a+z*r);O.d<.7&&!t.walled(O.seg,O.t)&&(V[j]=1)}if(t.anyOpen)for(let z=0;z<2;z++){const q=Float32Array.from(V);for(let j=1;j<s-1;j++)for(let tt=1;tt<n-1;tt++){const O=j*n+tt;c[O]!==0||q[O]||(q[O-1]||q[O+1]||q[O-n]||q[O+n])&&(V[O]=1)}}const rt=t.anyOpen?ts(V,n,s):V,J=new Uint8Array(l*4),gt=new Uint8Array(l*4),ot=z=>z<=0?0:z>=1?255:Math.round(z*255);for(let z=0;z<l;z++)J[z*4]=ot(y[z]),J[z*4+1]=ot(C[z]),J[z*4+2]=ot(R[z]),J[z*4+3]=ot(b[z]),gt[z*4]=ot(A[z]*A[z]*(3-2*A[z])),gt[z*4+1]=ot(v[z]/2.5),gt[z*4+2]=ot(rt[z]),gt[z*4+3]=ot(S[z]);const W=new Ge(o-r/2,a-r/2,1/(n*r),1/(s*r));return{mask:Of(J,n,s),aux:Of(gt,n,s),waterDist:v,hasWater:x,xf:W}}const na=3,OM=.15,kM=.45,BM=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function HM(i,t,e,n,s=[],r=1){const{cols:o,rows:a,cell:c,x0:l,z0:u,surface:d}=i.grid,f=i.heightAt,h=2,g=c*h,x=Math.floor((o-1)/h)+1,m=Math.floor((a-1)/h)+1,p=x*m,w=new Uint8Array(p),M=new Float64Array(p),y=new Float64Array(p),C=new Float64Array(p),R=new Float32Array(p),b=new Uint8Array(p);for(let E=0;E<m;E++)for(let N=0;N<x;N++){const X=E*x+N,Z=E*h*o+N*h,K=l+N*g,L=u+E*g;w[X]=d[Z]!==0?1:0;const k=t.nearest(K,L);if(M[X]=k.x,y[X]=k.z,C[X]=k.d,R[X]=t.walled(k.seg,k.t)?t.apronW:0,e.hasWater){const it=N*h,xt=E*h;t:for(let Lt=-3;Lt<=3;Lt++){const Jt=xt+Lt;if(!(Jt<0||Jt>=a))for(let ne=-3;ne<=3;ne++){const Ot=it+ne;if(!(Ot<0||Ot>=o)&&d[Jt*o+Ot]===5){b[X]=1;break t}}}}}const S=[],_=[],v=[],A=[],U=[],F=[],V=[];let rt=0;const J=(E,N,X,Z,K,L,k,it,xt,Lt)=>(S.push(E,N,X),_.push(Z,K,L),v.push(k.r,k.g,k.b),A.push(it,xt),U.push(Lt),rt++),gt=new he(1,1,1),ot=.25,W=1,z=new Int32Array(p).fill(-1),q=[],j=E=>{if(z[E]>=0)return z[E];const N=E%x,X=(E-N)/x;let Z=l+N*g,K=u+X*g;w[E]||(Z=M[E],K=y[E]);const L=X*h*o+N*h;let k=0;w[E]&&d[L]===5&&(k=kM*BM(0,1.6,e.waterDist[L]));const it=f(Z,K),xt=(f(Z+ot,K)-f(Z-ot,K))/(2*ot),Lt=(f(Z,K+ot)-f(Z,K-ot))/(2*ot),Jt=(f(Z+W,K)-f(Z-W,K))/(2*W),ne=(f(Z,K+W)-f(Z,K-W))/(2*W),Ot=Math.hypot(Jt,1,ne),le=J(Z,it-k,K,-Jt/Ot,1/Ot,-ne/Ot,gt,k>0?0:-xt,k>0?0:-Lt,0);return V[le]=k>0?1:0,q[le]=b[E],z[E]=le,le},tt=new Map,O=2097152,$=(E,N,X)=>{const Z=E<N?E*O+N:N*O+E,K=tt.get(Z);K?K[0]++:tt.set(Z,[1,E,N,X])},ht=[],B=[0,0],at=(E,N,X,Z)=>{const K=S[E*3],L=S[E*3+2],k=(S[N*3]-K)*(S[X*3+2]-L)-(S[X*3]-K)*(S[N*3+2]-L);if(!(Math.abs(k)<1e-7)&&!(k<0&&(B[Z?0:1]++,Z))){if(k>0){const it=N;N=X,X=it}F.push(E,N,X),$(E,N,X),$(N,X,E),$(X,E,N),Z&&Z.push(E,N,X)}},ft=(E,N,X,Z,K,L,k,it,xt,Lt)=>{const Jt=K+L+k+it,ne=Jt===1?!!(K||k):Jt===3?!!(K&&k):Jt===2?!(L&&it):!0,Ot=xt(E),le=xt(N),ie=xt(X),_e=xt(Z);ne?(at(Ot,le,ie,Lt),at(Ot,ie,_e,Lt)):(at(Ot,le,_e,Lt),at(le,ie,_e,Lt))};for(let E=0;E<m-1;E++)for(let N=0;N<x-1;N++){const X=E*x+N,Z=X+1,K=X+x+1,L=X+x;(w[X]||w[Z]||w[K]||w[L])&&ft(X,Z,K,L,w[X],w[Z],w[K],w[L],j,ht)}const Mt=rt,Pt=new Map(tt);tt.clear();const nt=Wo(ue(n.rough),ue(n.hedge),.35),mt=new Int32Array(p).fill(-1),H=[],Q={d:0,x:0,z:0,seg:0,t:0},zt=1,Qt=(E,N)=>{const X=t.nearest(E,N,Q);let Z=t.walled(X.seg,X.t)?X.d-t.apronW:1/0;for(let K=0;K<s.length;K++){const L=Math.hypot(E-s[K].x,N-s[K].z)-s[K].r,k=Math.max(zt-Math.abs(Z-L),0)/zt;Z=Math.min(Z,L)-k*k*zt*.25}return Z},Ht=new Float64Array(p);for(let E=0;E<p;E++){if(w[E])continue;if(C[E]>t.apronW+.8&&!s.length){Ht[E]=1/0;continue}const N=E%x;Ht[E]=Qt(l+N*g,u+(E-N)/x*g)}const te=new Float64Array(p);for(let E=0;E<p;E++)te[E]=Math.min(1e3,w[E]?Math.max(C[E],1e-4):Math.max(Ht[E],-C[E]));const $t=(E,N,X)=>{const Z=t.nearest(E,N,Q);let K=E,L=N;X===0&&(K=Z.x,L=Z.z);const k=X===0?0:Math.min(Z.d,na),it=f(Z.x,Z.z)-OM-.07*(k/na),xt=J(K,it,L,0,1,0,gt,0,0,1);return H[xt]=X,xt},T=E=>{if(mt[E]<0){const N=E%x;mt[E]=$t(l+N*g,u+(E-N)/x*g,1)}return mt[E]},P=new Map,ut=(E,N)=>{const X=E<N?E*p+N:N*p+E;let Z=P.get(X);if(Z!==void 0)return Z;const K=te[E]/(te[E]-te[N]),L=E%x,k=N%x,it=l+(L+(k-L)*K)*g,xt=u+((E-L)/x+((N-k)/x-(E-L)/x)*K)*g,Lt=t.nearest(it,xt,Q),Jt=!t.inside(it,xt)&&Lt.d<.12&&-Lt.d>=Qt(it,xt)-.05;return Z=$t(it,xt,Jt||t.inside(it,xt)?0:2),P.set(X,Z),Z},dt=[];if(t.anyWalled||s.length)for(let E=0;E<m-1;E++)for(let N=0;N<x-1;N++){const X=[E*x+N,E*x+N+1,(E+1)*x+N+1,(E+1)*x+N];if(te[X[0]]<0||te[X[1]]<0||te[X[2]]<0||te[X[3]]<0){dt.length=0;for(let Z=0;Z<4;Z++){const K=X[Z],L=X[Z+1&3];te[K]<0&&dt.push(T(K)),te[K]<0!=te[L]<0&&dt.push(ut(K,L))}for(let Z=1;Z<dt.length-1;Z++)at(dt[0],dt[Z],dt[Z+1],null)}}const bt=tt,yt=(E,N)=>{let X=(E-l)/g,Z=(N-u)/g;if(X<0||Z<0||X>=x-1||Z>=m-1)return!1;const K=Math.floor(X),L=Math.floor(Z);X-=K,Z-=L;const k=L*x+K,it=te[k]+(te[k+1]-te[k])*X,xt=te[k+x]+(te[k+x+1]-te[k+x])*X;return it+(xt-it)*Z<0};let Xt=1/0;for(let E=1;E<S.length;E+=3)S[E]<Xt&&(Xt=S[E]);const Bt=Xt-1.6,Ft=new Float64Array(rt*2),fe=E=>{const[,N,X,Z]=E,K=S[X*3]-S[N*3],L=S[X*3+2]-S[N*3+2],k=Math.hypot(K,L);if(k<.04)return null;let it=L/k,xt=-K/k;const Lt=(S[N*3]+S[X*3])/2,Jt=(S[N*3+2]+S[X*3+2])/2;return(S[Z*3]-Lt)*it+(S[Z*3+2]-Jt)*xt>0&&(it=-it,xt=-xt),[it*k,xt*k]},Ct=[];for(const E of Pt.values()){if(E[0]!==1)continue;const N=fe(E);if(!N)continue;const X=(S[E[1]*3]+S[E[2]*3])/2,Z=(S[E[1]*3+2]+S[E[2]*3+2])/2,K=Math.hypot(N[0],N[1]),L=!((t.anyWalled||s.length)&&yt(X+N[0]/K*.3,Z+N[1]/K*.3));Ct.push([E[1],E[2],L?1:0,0,N]);for(const k of[E[1],E[2]])Ft[k*2]+=N[0],Ft[k*2+1]+=N[1]}for(const E of bt.values()){if(E[0]!==1||H[E[1]]===0&&H[E[2]]===0)continue;const N=fe(E);if(N){Ct.push([E[1],E[2],1,1,N]);for(const X of[E[1],E[2]])Ft[X*2]+=N[0],Ft[X*2+1]+=N[1]}}const qt=ue(n.soilTop),oe=Wo(ue(n.soilBottom),ue(n.skyBottom),.22),jt=Wo(qt,ue(n.soilBottom),.55),kt=[Pe(ue(n.rough),.95),Pe(ue(n.rough),.7)],Zt=[Pe(nt,.95),Pe(nt,.7)],ce=[ue(Ce.pinWhite),Pe(ue(n.rough),.7)],ge=[[0,0,.35,.94],[.07,-.06,.8,.6],[.09,-.16,1,.1],[.02,"mid",1,-.05],[-.15,"bot",.8,-.6]];for(const[E,N,X,Z,K]of Ct){const L=Math.hypot(K[0],K[1]),k=K[0]/L,it=K[1]/L,xt=Z?Zt:X?ce:kt,Lt=[[],[]],Jt=X?ge:[[0,0,1,0],[0,-.22,1,0]];[E,N].forEach((ne,Ot)=>{let le=Ft[ne*2],ie=Ft[ne*2+1];const _e=Math.hypot(le,ie);le/=_e||1,ie/=_e||1,(!(_e>1e-6)||le*k+ie*it<.5)&&(le=k,ie=it);const we=S[ne*3],Ae=S[ne*3+1],ye=S[ne*3+2];for(let Re=0;Re<Jt.length;Re++){const[ze,D,I,G]=Jt[Re],et=D==="bot"?Bt:D==="mid"?Ae-.16+(Bt-(Ae-.16))*.5:Ae+D,Y=Math.hypot(I,G),Et=X?Re===0?xt[0]:Re===1?xt[1]:Re===2?qt:Re===3?jt:oe:qt;Lt[Ot].push(J(we+le*ze,et,ye+ie*ze,le*I/Y,G/Y,ie*I/Y,Et,0,0,2))}});for(let ne=0;ne<Jt.length-1;ne++){const Ot=[Lt[0][ne],Lt[1][ne],Lt[1][ne+1],Lt[0][ne+1]],le=S[Ot[0]*3],ie=S[Ot[0]*3+1],_e=S[Ot[0]*3+2],we=S[Ot[1]*3]-le,Ae=S[Ot[1]*3+1]-ie,ye=S[Ot[1]*3+2]-_e,Re=S[Ot[2]*3]-le,ze=S[Ot[2]*3+1]-ie,D=S[Ot[2]*3+2]-_e,I=Ae*D-ye*ze,G=we*ze-Ae*Re,et=_[Ot[0]*3]+_[Ot[1]*3],Y=_[Ot[0]*3+2]+_[Ot[1]*3+2];I*et+G*Y>=0?F.push(Ot[0],Ot[1],Ot[2],Ot[0],Ot[2],Ot[3]):F.push(Ot[0],Ot[2],Ot[1],Ot[0],Ot[3],Ot[2])}}const ct=new je;ct.setAttribute("position",new Le(S,3)),ct.setAttribute("normal",new Le(_,3)),ct.setAttribute("color",new Le(v,3)),ct.setAttribute("aFlow",new Le(A,2)),ct.setAttribute("aMode",new Le(U,1)),ct.setIndex(F),ct.computeBoundingSphere(),ct.computeBoundingBox();const{material:St,uniforms:vt}=WM(e,n,nt,r===0),wt=new Ve(ct,St);wt.name="course-terrain",wt.receiveShadow=!0,wt.userData.terrain={courseVerts:Mt,lowered:Uint8Array.from(V),folds:B};const It=[];if(e.hasWater)for(let E=0;E<ht.length;E+=3){const N=ht[E],X=ht[E+1],Z=ht[E+2];(q[N]||q[X]||q[Z])&&It.push(N,X,Z)}return{mesh:wt,uniforms:vt,waterTris:It,positions:S,minY:Xt,yBot:Bt}}const GM=`
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
`,VM=`
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
`;function WM(i,t,e,n){const s={uMask:{value:i.mask},uAux:{value:i.aux},uMaskXf:{value:i.xf},uTime:{value:0},uFlow:{value:0},uStripeW:{value:2.4},uGreenW:{value:.9},uContourStep:{value:.15},uDotCell:{value:1.6},uRough:{value:ue(t.rough)},uFairA:{value:ue(t.fairwayLight)},uFairB:{value:ue(t.fairwayDark)},uFringe:{value:ue(t.fringe)},uGreenA:{value:ue(t.greenLight)},uGreenB:{value:ue(t.greenDark)},uSand:{value:ue(t.sand)},uSandLip:{value:ue(t.sandLip)},uBed:{value:ue(t.pondBed)},uIce:{value:ue(t.ice)},uLine:{value:ue(Ce.surfaceOutline)},uApron:{value:e},uKerbA:{value:ue(Ce.pinWhite)},uKerbB:{value:ue(Ce.pinBand)}},r=new ma({color:16777215,vertexColors:!0});return n&&(r.defines={EBG_LOW:""}),r.onBeforeCompile=o=>{Object.assign(o.uniforms,s);let a=o.vertexShader;a=Cn(a,"#include <common>",`attribute vec2 aFlow;
attribute float aMode;
varying vec3 vWPos;
varying vec2 vFlow;
varying float vMode;`),a=Cn(a,"#include <begin_vertex>",`vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vFlow = aFlow;
vMode = aMode;`),o.vertexShader=a;let c=o.fragmentShader;c=Cn(c,"#include <common>",GM),c=Cn(c,"#include <color_fragment>",VM),o.fragmentShader=c},r.customProgramCacheKey=()=>n?"ebg-terrain-v1-low":"ebg-terrain-v1",{material:r,uniforms:s}}const XM=`
varying vec2 vXZ;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vXZ = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,qM=`
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
`;function YM(i,t,e,n){const s=t.waterTris;if(!e.hasWater||s.length===0)return null;const r=i.heightAt,o=t.positions,a=new Map,c=[],l=[];for(const g of s){let x=a.get(g);if(x===void 0){x=c.length/3;const m=o[g*3],p=o[g*3+2];c.push(m,r(m,p)+.03,p),a.set(g,x)}l.push(x)}const u=new je;u.setAttribute("position",new Le(c,3)),u.setIndex(l),u.computeBoundingSphere();const d={uMask:{value:e.mask},uAux:{value:e.aux},uMaskXf:{value:e.xf},uTime:{value:0},uLake:{value:i.round===2?1:0},uShallow:{value:ue(n.waterShallow)},uDeep:{value:ue(n.waterDeep)},uFoam:{value:ue(n.waterFoam)},uGlint:{value:ue(n.waterGlint)},uBand:{value:ue(n.hemiSky)}},f=new _n({uniforms:d,vertexShader:XM,fragmentShader:qM,transparent:!0,depthWrite:!1}),h=new Ve(u,f);return h.name="course-water",h.renderOrder=1,{mesh:h,uniforms:d}}function KM(i,t,e){return i==="cushion"?(e=e||.42,t?{pts:[[-.2,-.3],[-.2,e-.12],[-.15,e-.03],[-.08,e],[.08,e],[.15,e-.03],[.2,e-.12],[.2,-.3]],roles:["nose","nose","nose","top","nose","nose","nose"],h:e}:{pts:[[0,-.3],[0,e-.12],[.05,e-.03],[.12,e],[.46,e],[.5,e-.05],[.53,e-.12],[.53,-.34]],roles:["nose","nose","nose","top","top","side","side"],h:e}):i==="hedge"?(e=e||.52,t?{pts:[[-.22,-.3],[-.22,e-.2],[-.17,e-.06],[-.08,e],[.08,e],[.17,e-.06],[.22,e-.2],[.22,-.3]],roles:Array(7).fill("hedge"),h:e}:{pts:[[0,-.3],[0,e-.2],[.05,e-.06],[.14,e],[.42,e],[.52,e-.08],[.56,e-.25],[.56,-.34]],roles:Array(7).fill("hedge"),h:e}):i==="bumper"?(e=e||.4,t?{pts:[[-.2,-.3],[-.2,e-.2],[-.16,e-.08],[-.09,e-.01],[-.04,e],[.04,e],[.09,e-.01],[.16,e-.08],[.2,e-.2],[.2,-.3]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}:{pts:[[0,-.3],[0,e-.2],[.04,e-.08],[.12,e-.01],[.21,e],[.31,e],[.4,e-.01],[.47,e-.08],[.5,e-.2],[.5,-.34]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}):(e=e||.4,t?{pts:[[-.18,-.3],[-.18,e-.05],[-.14,e],[.14,e],[.18,e-.05],[.18,-.3]],roles:["face","cap","cap","cap","face"],h:e}:{pts:[[0,-.3],[0,e-.05],[.04,e],[.46,e],[.5,e-.05],[.5,-.34]],roles:["face","cap","cap","cap","side"],h:e})}const $M={cushion:.2,hedge:.22,bumper:.2,wall:.18};function jM(i,t,e,n,s){const r=i.heightAt,o=[],a=i.walls.map(l=>({kind:l.kind,pts:l.pts,closed:l.closed,h:l.h,border:l.border}));for(const l of i.arcsRender||[])a.push({kind:l.kind,pts:Pd(l,6),closed:!1,h:void 0,border:!1});const c={nose:ue(n.cushionNose),top:ue(n.railTop),side:ue(n.railSide),sights:ue(n.railSights),hedge:ue(n.hedge),stone:ue(n.wallStone),pad:ue(s),stripe:ue(Ce.pinWhite)};for(const l of a){const u=ZM.has(l.kind)?l.kind:"wall",d=JM(l.pts,l.closed);if(d.length<2)continue;const f=d.length,h=l.closed?f:f-1;let g=0,x=0;for(let W=0;W<h;W++){const z=d[W],q=d[(W+1)%f],j=q.x-z.x,tt=q.z-z.z,O=Math.hypot(j,tt);if(O<1e-6)continue;const $=-tt/O,ht=j/O,B=(z.x+q.x)/2,at=(z.z+q.z)/2,ft=t.inside(B+$*.35,at+ht*.35),Mt=t.inside(B-$*.35,at-ht*.35);ft!==Mt&&(g+=ft?-O:O),x+=O}const m=l.border||Math.abs(g)>x*.5,p=m?g>=0?1:-1:1,w=KM(u,!m,l.h),M=m?0:$M[u];for(let W=0;W<h;W++){const z=d[W],q=d[(W+1)%f];o.push({ax:z.x,az:z.z,bx:q.x,bz:q.z,hw:M})}const y=[],C=[];for(let W=0;W<h;W++){const z=d[W],q=d[(W+1)%f],j=Math.hypot(q.x-z.x,q.z-z.z);C.push([-(q.z-z.z)/j,(q.x-z.x)/j,j])}let R=0;const b=(W,z,q,j,tt)=>y.push({x:W,z,nx:q,nz:j,u:R,join:tt}),S=(W,z,q)=>{const j=Math.atan2(z[1],z[0]);let tt=Math.atan2(q[1],q[0])-j;for(;tt>Math.PI;)tt-=2*Math.PI;for(;tt<-Math.PI;)tt+=2*Math.PI;const O=Math.max(1,Math.ceil(Math.abs(tt)/(Math.PI/9)));for(let $=0;$<=O;$++){const ht=j+tt*$/O;b(W.x,W.z,Math.cos(ht),Math.sin(ht),$>0&&$<O)}},_=(W,z,q,j)=>{for(let O=0;O<=6;O++){const $=j?Math.PI-Math.PI*O/6:-Math.PI*O/6,ht=z[0]*Math.cos($)-q[0]*Math.sin($),B=z[1]*Math.cos($)-q[1]*Math.sin($);b(W.x,W.z,ht,B,O>0&&O<6)}},v=[];for(let W=0;W<h;W++){const z=d[W],q=d[(W+1)%f],[j,tt,O]=C[W],$=[(q.x-z.x)/O,(q.z-z.z)/O];if(W===0&&!l.closed)m?b(z.x,z.z,j,tt,!1):_(z,[j,tt],$,!0);else{const at=C[(W-1+h)%h];S(z,[at[0],at[1]],[j,tt])}const ht=Math.max(1,Math.ceil(O/.5)),B=R;for(let at=1;at<ht;at++)R=B+O*at/ht,b(z.x+(q.x-z.x)*(at/ht),z.z+(q.z-z.z)*(at/ht),j,tt,!1);if(R=B+O,u==="cushion")for(let at=Math.ceil((B+.4-1)/2)*2+1;at<B+O-.4;at+=2)v.push([z.x+$[0]*(at-B),z.z+$[1]*(at-B),j,tt,$]);W===h-1&&!l.closed&&(m?b(q.x,q.z,j,tt,!1):_(q,[j,tt],$,!1))}if(l.closed&&y.length){const W=y[0];y.push({...W,u:R})}const A=w.pts,U=(W,z,q)=>{const j=A[z][0]*p,tt=W.x+W.nx*j,O=W.z+W.nz*j,$=A[z][1]>=0?W.hc+A[z][1]:r(tt,O)+A[z][1];return q[0]=tt,q[1]=$,q[2]=O,q};for(const W of y)W.hc=r(W.x,W.z);let F=0,V=0;for(const W of A)F+=W[0],V+=W[1];F/=A.length,V/=A.length;const rt=[0,0,0],J=[0,0,0],gt=[0,0,0],ot=[0,0,0];for(let W=0;W<y.length-1;W++){const z=y[W],q=y[W+1],j=(z.nx+q.nx)*.5,tt=(z.nz+q.nz)*.5,O=u==="wall"?Math.floor((z.u+q.u)*.5/1.2)%2?.95:1.04:1;for(let $=0;$<A.length-1;$++){const ht=A[$+1][0]-A[$][0];let at=A[$+1][1]-A[$][1],ft=-ht;const Mt=(A[$][0]+A[$+1][0])/2-F,Pt=(A[$][1]+A[$+1][1])/2-V;at*Mt+ft*Pt<0&&(at=-at,ft=-ft);const nt=[j*at*p,ft,tt*at*p],mt=w.roles[$],H=Math.max(0,(A[$][1]+A[$+1][1])/2)/w.h,Q=ft>.7?1:.72+.33*Math.min(1,H);let zt,Qt=0;u==="cushion"?zt=Pe(mt==="nose"?c.nose:mt==="top"?c.top:c.side,Q):u==="hedge"?(zt=Pe(c.hedge,.62+.46*Math.min(1,H)),Qt=1):u==="bumper"?zt=Pe(mt==="stripe"?c.stripe:c.pad,mt==="stripe"?1:Q):zt=Pe(c.stone,(mt==="cap"?1:mt==="face"?.8*Q:.66*Q)*O),U(z,$,rt),U(q,$,J),U(q,$+1,gt),U(z,$+1,ot),e.quad(rt,J,gt,ot,zt,Qt,nt)}}if(!l.closed&&m&&y.length>=2)for(const[W,z]of[[y[0],y[1]],[y[y.length-1],y[y.length-2]]]){const q=[W.x-z.x,0,W.z-z.z],j=A.map((O,$)=>U(W,$,[0,0,0])),tt=u==="hedge"?Pe(c.hedge,.8):u==="cushion"?c.side:u==="bumper"?c.pad:Pe(c.stone,.75);for(let O=1;O<j.length-1;O++)e.tri(j[0],j[O],j[O+1],tt,u==="hedge"?1:0,q)}if(u==="cushion"){const W=m?.29:0;for(const[z,q,j,tt,O]of v){const $=z+j*W*p,ht=q+tt*W*p,B=r(z,q)+w.h+.008,at=.11,ft=.065,Mt=[$+O[0]*at,B,ht+O[1]*at],Pt=[$-O[0]*at,B,ht-O[1]*at],nt=[$+j*ft,B,ht+tt*ft],mt=[$-j*ft,B,ht-tt*ft];e.quad(Mt,nt,Pt,mt,c.sights,0,[0,1,0])}}}return o}const ZM=new Set(["cushion","hedge","bumper","wall"]);function JM(i,t){const e=[];for(const n of i){const s=e[e.length-1];(!s||Math.hypot(n.x-s.x,n.z-s.z)>1e-4)&&e.push({x:n.x,z:n.z})}if(t&&e.length>2){const n=e[0],s=e[e.length-1];Math.hypot(n.x-s.x,n.z-s.z)<1e-4&&e.pop()}return e}const QM=(i,t)=>new re(i,t),as=(i,t)=>new ha(i.map(([e,n])=>QM(e,n)),t),Kn=i=>i<0?0:i>1?1:i,ty=[16513779,16763196,16748467,15217199,10189792],ey=[0,0,-1],ny=[0,.866,.5];function iy(i){const t=[ue(i.hedge),Wo(ue(i.hedge),ue(i.rough),.5),Pe(ue(i.rough),1.05)];return{pal:i,greens:t,trunk:Pe(ue(i.wood),.62),wood:ue(i.wood),woodDark:Pe(ue(i.wood),.72),stone:ue(i.wallStone),soil:Pe(ue(i.soilTop),.8),chalk:ue(Ce.chalk),chalkTop:ue(14674423),white:ue(Ce.pinWhite),red:ue(Ce.pinBand),candy:ue(15022389),black:ue(Ce.eightBody),water:ue(i.waterShallow),foam:ue(i.waterFoam),reeds:ue(i.reeds),cattail:ue(7029286),lily:Pe(ue(i.rough),1.12),flowers:ty.map(ue)}}function sy(i,t,e,n,s,r,o){const{x:a,z:c,r:l}=n,u=n.kind||"post";if(u==="bumper"){const f=o[r%o.length],h=ue(Ce.poolBalls[(f-1)%8]),g=as([[l+.02,-.3],[l,0],[l,.13],[l,.27],[l,.36],[l*.95+0,.45],[l*.84,.5],[0,.5]],28);i.geo(g,(x,m)=>m>.13&&m<.27?e.white:Pe(h,m>.4?1.05:.8+.25*Kn(m/.36)),{matrix:Je(a,s,c)}),t.disc([a,s+.503,c],[0,1,0],ey,Math.min(l*.56,.48),f);return}if(u==="tree"){const f=as([[l+.02,-.3],[l,.28],[l-.04,.33],[l-.15,.33],[l-.18,.2],[0,.2]],32);i.geo(f,(y,C,R)=>Math.hypot(y,R)<l-.17&&C<.25?e.soil:Pe(e.stone,C>.3?1:.68+.3*Kn(C/.28)),{matrix:Je(a,s,c)});const h=Math.max(.55,l*.9),g=.75+h*.82,x=Math.min(.32,.08+l*.07),m=new Zn(x*.8,x,g,8);m.translate(0,g/2,0),i.geo(m,()=>e.trunk,{matrix:Je(a,s,c)});const p=e.greens[r%3],w=new oi(h,18,12);i.geo(w,(y,C)=>Pe(p,.66+.42*Kn((C+h)/(2*h))),{leaf:1,flat:!1,matrix:Je(a,s+g,c,0,[1,.8,1])});const M=new oi(h*.5,14,10);i.geo(M,(y,C)=>Pe(p,.85+.3*Kn((C+h*.5)/h)),{leaf:1,flat:!1,matrix:Je(a-h*.08,s+g+h*.72,c-h*.05,0,[1,.85,1])});return}if(u==="lollipop"){const f=[[l+.02,-.3]];for(let m=0;m<=5;m++)f.push([l,m*.1]);f.push([l*.9,.58],[0,.58]),i.geo(as(f,24),(m,p,w)=>p>.52?e.white:((Math.atan2(w,m)/(Math.PI*2)*2+p*1.8)%1+1)%1<.5?e.candy:e.white,{matrix:Je(a,s,c)});const h=new Zn(.045,.045,.6,6);h.translate(0,.86,0),i.geo(h,()=>e.white,{matrix:Je(a,s,c)});const g=Math.min(.5,Math.max(.3,l*.75)),x=new oi(g,16,10);i.geo(x,(m,p,w)=>(Math.atan2(w,m)/(Math.PI*2)*3+p/g*.9+2)%1<.5?e.candy:e.white,{matrix:Je(a,s+1.16+g*.8,c,0,[1,.85,1])});return}if(l>=1){const f=as([[l+.02,-.3],[l,.42],[l-.08,.62],[l-.25,.72],[l*.5,.76],[0,.76]],32),h=e.greens[0];i.geo(f,(g,x)=>Pe(h,.62+.46*Kn(x/.76)),{leaf:1,flat:!1,matrix:Je(a,s,c)});return}const d=as([[l+.02,-.3],[l,0],[l,.5],[l-Math.min(.07,l*.2),.57],[0,.57]],20);i.geo(d,(f,h)=>h>.515?e.chalkTop:Pe(e.chalk,.74+.3*Kn(h/.5)),{matrix:Je(a,s,c)})}function Ld(i,t,e,n,s,r,o,a=0){const c=Je(e,n,s,a,r),l=.8,u=new Zn(.08,.13,l+.3,6);u.translate(0,l/2-.15,0),i.geo(u,()=>t.trunk,{matrix:c});const d=t.greens[Math.floor(o()*3)],f=[[0,l+.5,0,.62],[.36,l+.3,.12,.42],[-.34,l+.34,-.12,.44],[.06,l+.95,-.04,.4]];for(const[h,g,x,m]of f){const p=new ir(m*(.92+o()*.16),1);p.translate(h,g,x),i.geo(p,(w,M)=>Pe(d,.66+.46*Kn((M-l)/1.35)),{leaf:1,matrix:c})}}function wl(i,t,e,n,s,r,o,a=0){const c=Je(e,n,s,a,r),l=t.greens[Math.floor(o()*3)],u=2+Math.floor(o()*2);for(let d=0;d<u;d++){const f=d/u*Math.PI*2+o(),h=.3+o()*.12,g=new ir(h,1);g.scale(1,.85,1),g.translate(Math.cos(f)*.22,h*.75,Math.sin(f)*.22),i.geo(g,(x,m)=>Pe(l,.68+.5*Kn(m/.75)),{leaf:1,matrix:c})}}function Id(i,t,e,n,s,r,o,a=0){const c=Je(e,n,s,a,r),l=5+Math.floor(o()*3),u=Math.floor(o()*t.flowers.length),d=Pe(t.greens[1],.85);for(let f=0;f<l;f++){const h=o()*Math.PI*2,g=Math.sqrt(o())*.42,x=.18+o()*.16,m=Math.cos(h)*g,p=Math.sin(h)*g,w=new Zn(.015,.018,x,3);w.translate(m,x/2,p),i.geo(w,()=>d,{matrix:c});const M=new Vr(.075+o()*.025);M.scale(1,.6,1),M.translate(m,x+.02,p);const y=t.flowers[(u+(o()<.7?0:1+Math.floor(o()*3)))%t.flowers.length];i.geo(M,()=>y,{matrix:c})}for(let f=0;f<2;f++){const h=new da(.09,.2,4);h.translate((o()-.5)*.4,.1,(o()-.5)*.4),i.geo(h,()=>t.greens[2],{leaf:.5,matrix:c})}}const ry=(i,t,e,n)=>((Math.atan2(e,t)/(Math.PI*2)+Math.hypot(t,e)/n*1.4)%1+1)%1<.5?i.candy:i.white;function oy(i,t,e,n,s,r){const o=Je(e,n,s,0,r),a=new Zn(.05,.05,1.7,6);a.translate(0,.85,0),i.geo(a,()=>t.white,{matrix:o});const c=.58,l=new oi(c,24,12);l.scale(1,1,.3);const u=new De().makeRotationX(-Math.PI/6),d=l.applyMatrix4(u),f=new De().copy(u).invert(),h=new st;d.translate(0,1.7+c*.8,0),i.geo(d,(g,x,m)=>(h.set(g,x-1.7-c*.8,m).applyMatrix4(f),Math.abs(h.z)>.1&&Math.hypot(h.x,h.y)<c*.97?ry(t,h.x,h.y,c):t.white),{matrix:o})}function ay(i,t,e,n,s,r,o){const a=Je(n,s,r,0,o),c=new jn(1.7,.6,1.7);c.translate(0,.2,0),i.geo(c,(x,m)=>Pe(e.stone,m>.45?1:.72),{matrix:a});const l=new jn(1.9,.14,1.9);l.translate(0,.5,0),i.geo(l,(x,m)=>Pe(e.stone,m>.55?1.05:.8),{matrix:a});const u=.95,d=new oi(u,28,18);d.translate(0,.57+u*.96,0),i.geo(d,()=>e.black,{flat:!1,matrix:a});const f=[n,s+(.57+u*.96)*o,r],h=ny,g=u*o;t.disc([f[0]+h[0]*g,f[1]+h[1]*g,f[2]+h[2]*g],h,[0,.5,-.866],u*.46*o,8,{c:f,r:g+.006})}function cy(i,t,e,n,s,r,o){const a=Je(e,n,s,0,r);if(!o){const d=as([[1.3,-.3],[1.3,.42],[1.22,.5],[1.1,.5],[1.06,.42],[1.04,.3],[0,.3]],32);i.geo(d,(h,g,x)=>Math.hypot(h,x)<1.03&&g<.35?t.water:Pe(t.stone,g>.45?1:.7+.25*Kn(g/.42)),{matrix:a});const f=new ql(1.04,28);f.rotateX(-Math.PI/2),f.translate(0,.37,0),i.geo(f,(h,g,x)=>Math.hypot(h,x)>.86?t.foam:t.water,{matrix:a})}const c=as([[.22,o?-.5:.3],[.16,.5],[.13,.95],[.5,1.05],[.52,1.14],[.12,1.16],[0,1.16]],16);i.geo(c,(d,f)=>Pe(t.stone,f>1?1:.78),{matrix:a});const l=new ir(.2,1);l.scale(1,1.5,1),l.translate(0,1.42,0),i.geo(l,(d,f)=>f>1.45?t.white:t.foam,{matrix:a});const u=6;for(let d=0;d<u;d++){const f=d/u*Math.PI*2,h=new ir(.07,0);h.translate(Math.cos(f)*.62,1,Math.sin(f)*.62),i.geo(h,()=>t.foam,{matrix:a})}}function ly(i,t,e,n,s,r,o,a){const c=(r||.7)*o,l=.6,u=18,d=a()*Math.PI*2,f=t.lily,h=Pe(t.lily,.78);for(let g=0;g<u;g++){const x=d+l/2+(Math.PI*2-l)*g/u,m=d+l/2+(Math.PI*2-l)*(g+1)/u,p=[e+Math.cos(x)*c,n,s+Math.sin(x)*c],w=[e+Math.cos(m)*c,n,s+Math.sin(m)*c],M=[e+Math.cos(x)*c*.82,n+.01,s+Math.sin(x)*c*.82],y=[e+Math.cos(m)*c*.82,n+.01,s+Math.sin(m)*c*.82];i.tri([e,n+.015,s],M,y,f,0,[0,1,0]),i.quad(M,p,w,y,h,0,[0,1,0])}if(a()<.4){const g=new Vr(.16*o);g.scale(1,.7,1),g.translate(e+Math.cos(d+Math.PI)*c*.3,n+.1,s+Math.sin(d+Math.PI)*c*.3),i.geo(g,()=>t.flowers[2])}}function uy(i,t,e,n,s,r,o){const a=Je(e,n,s,o()*6.28,r),c=7;for(let l=0;l<c;l++){const u=l/c*Math.PI*2+o(),d=.1+o()*.3,f=.8+o()*.5,h=new Zn(.012,.035,f,3);if(h.translate(0,f/2-.2,0),h.rotateZ((o()-.5)*.25),h.translate(Math.cos(u)*d,0,Math.sin(u)*d),i.geo(h,(g,x)=>Pe(t.reeds,.75+.35*Kn(x/f)),{matrix:a}),l%2===0){const g=new Xl(.05,.18,2,6);g.translate(Math.cos(u)*d,f-.3,Math.sin(u)*d),i.geo(g,()=>t.cattail,{matrix:a})}}}function fy(i,t,e,n,s,r,o,a){const c=Je(e,n,s,o,r),l=new jn(1.6,.42,.55);l.translate(0,.11,0),i.geo(l,(f,h)=>h>.3?t.soil:Pe(t.wood,.7+.3*Kn((h+.1)/.4)),{matrix:c});const u=new jn(1.7,.06,.65);u.translate(0,.33,0),i.geo(u,()=>t.wood,{matrix:c});const d=6;for(let f=0;f<d;f++){const h=-.65+1.3*f/(d-1),g=.12+a()*.1,x=new Vr(.09);x.scale(1,.65,1),x.translate(h,.36+g,(a()-.5)*.2),i.geo(x,()=>t.flowers[(f+Math.floor(a()*2))%t.flowers.length],{matrix:c});const m=new da(.08,g+.05,4);m.translate(h,.36+g/2,0),i.geo(m,()=>t.greens[1],{leaf:.5,matrix:c})}}function hy(i,t,e,n){const s=2*(n.r||3),r=4*(n.scale||1),o=(n.rot||0)*Math.PI/180,a=Math.cos(o),c=-Math.sin(o),l=-c,u=a,d=Math.max(2,Math.round(s/.34)),f=s/d,h=(g,x,m)=>{const p=n.x+a*g+l*x,w=n.z+c*g+u*x;return[p,e(p,w)+m,w]};for(let g=0;g<d;g++){const x=-s/2+g*f+.025,m=x+f-.05,p=Pe(t.wood,g%2?.92:1.04),w=r/2+(g%3===0?.06:0),M=h(x,-w,.03),y=h(m,-w,.03),C=h(m,w,.03),R=h(x,w,.03);i.quad(M,y,C,R,p,0,[0,1,0]);const b=h(x,-w,-.1),S=h(m,-w,-.1),_=h(m,w,-.1),v=h(x,w,-.1),A=Pe(p,.66);i.quad(M,b,S,y,A,0,[-l,0,-u]),i.quad(C,_,v,R,A,0,[l,0,u]),i.quad(y,S,_,C,A,0,[a,0,c]),i.quad(R,v,b,M,A,0,[-a,0,-c])}for(const g of[-1,1])for(const x of[-1,1]){const[m,p,w]=h(x*(s/2-.15),g*(r/2+.2),0),M=new Zn(.1,.12,.7,8);M.translate(0,.1,0),i.geo(M,(y,C)=>Pe(t.wood,C>.4?1:.7),{matrix:Je(m,p,w)})}}function dy(i,t,e,n,s,r,o,a){const c=Je(n,s,r,0,o),l=new jn(.14,1.2,.14);l.translate(0,.45,0),i.geo(l,()=>e.woodDark,{matrix:c});const u=new jn(1.2,.75,.1);u.rotateX(-.5),u.translate(0,1.15,.04),i.geo(u,(h,g,x)=>Pe(e.wood,x>.05?1.05:.75),{matrix:c});const d=[0,Math.sin(.5),Math.cos(.5)],f=[0,Math.cos(.5),-Math.sin(.5)];t.disc([n,s+1.15*o+d[1]*.056*o,r+.04*o+d[2]*.056*o],d,f,.3*o,a)}function Dd(i,t,e){for(let n=0;n<=3.4;n+=.4)if(i.inside(t,e-n)||i.inside(t+n,e)||i.inside(t-.9,e-n)||i.inside(t+.9,e-n))return!1;return!0}function zd(i,t,e,n){const s=i.heightAt;if(t.inside(e,n))return s(e,n);const r=t.nearest(e,n),o=Math.min(r.d,na);return s(r.x,r.z)-.15-.07*(o/na)}function py(i,t,e,n,s,r){const o=i.heightAt,a=i.hole&&i.hole.number||1;for(const c of i.props||[]){const l=c.scale||1,u=(c.rot||0)*Math.PI/180,d=i.surfaceAt(c.x,c.z)==="water",f=zd(i,t,c.x,c.z);switch(c.type){case"tree":t.nearest(c.x,c.z).d<3&&!Dd(t,c.x,c.z)?wl(e,s,c.x,f,c.z,1.2*l,r,u):Ld(e,s,c.x,f,c.z,l*(c.r?c.r/.9:1),r,u);break;case"bush":wl(e,s,c.x,f,c.z,l*(c.r?c.r/.55:1),r,u);break;case"flowers":Id(e,s,c.x,f,c.z,l*(c.r?c.r/.45:1),r,u);break;case"lollipop":oy(e,s,c.x,f,c.z,l);break;case"statue8":ay(e,n,s,c.x,f,c.z,l);break;case"fountain":cy(e,s,c.x,d?f-.3:f,c.z,l,d);break;case"lilypad":ly(e,s,c.x,o(c.x,c.z)+.05,c.z,c.r,l,r);break;case"reeds":uy(e,s,c.x,d?o(c.x,c.z)-.25:f,c.z,l,r);break;case"flowerbox":fy(e,s,c.x,f,c.z,l,u,r);break;case"bridge":hy(e,s,o,c);break;case"sign":dy(e,n,s,c.x,f,c.z,l,a);break}}}const my={tree:1.3,bush:.9,flowers:.8,lollipop:.9,statue8:1.5,fountain:1.6,sign:.9,flowerbox:1.1,reeds:.7};function gy(i,t){const e=[];for(const n of i.props||[]){const s=my[n.type];if(!s||t.inside(n.x,n.z))continue;const r=s*(n.scale||1)+.6,o=t.nearest(n.x,n.z);t.walled(o.seg,o.t)&&o.d+r<=t.apronW-.1||e.push({x:n.x,z:n.z,r})}return e}function xy(i,t,e,n,s){if(!t.anyWalled||t.apronW<2)return 0;const r=[];for(const u of i.props||[])r.push([u.x,u.z,1.6]);for(const u of i.posts||[])r.push([u.x,u.z,u.r+1]);const o=(u,d,f)=>{for(const[h,g,x]of r)if(Math.hypot(h-u,g-d)<x+f)return!1;return!0},a=t.poly,c=t.count;let l=0;for(let u=0;u<c;u++){const d=a[u*2],f=a[u*2+1],h=a[(u+1)%c*2],g=a[(u+1)%c*2+1],x=t.segLen[u],m=t.segN[u*2],p=t.segN[u*2+1];for(let w=s()*1.2;w<x;w+=1.25+s()*.9){const M=w/x;if(!t.walled(u,M))continue;const y=1+s()*1.55,C=d+(h-d)*M+m*y,R=f+(g-f)*M+p*y;if(t.inside(C,R))continue;const b=t.nearest(C,R);if(b.d<.95||b.d>t.apronW-.35||!t.walled(b.seg,b.t))continue;const S=s(),_=zd(i,t,C,R);if(S<.3&&b.d>1.55&&Dd(t,C,R)&&o(C,R,1))Ld(e,n,C,_,R,.85+s()*.3,s,s()*6.28),r.push([C,R,1]);else if(S<.66&&o(C,R,.6))wl(e,n,C,_,R,.8+s()*.4,s,s()*6.28),r.push([C,R,.6]);else if(o(C,R,.45))Id(e,n,C,_,R,.9+s()*.3,s,s()*6.28),r.push([C,R,.45]);else continue;l++}}return l}const vi=8,Dr=4,cs=128;let Fn=null;const kf=i=>"#"+i.toString(16).padStart(6,"0");function Bf(i){const t=i.getContext("2d");t.clearRect(0,0,i.width,i.height);for(let e=0;e<vi*Dr;e++){const n=e%vi*cs+cs/2,s=Math.floor(e/vi)*cs+cs/2;t.fillStyle=kf(Ce.flagDisc),t.beginPath(),t.arc(n,s,cs*.47,0,Math.PI*2),t.fill();const r=String(e+1);t.fillStyle=kf(Ce.eightInk),t.font=`${r.length>1?66:82}px "Lilita One", "Arial Black", "Arial Rounded MT Bold", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,n,s+5)}}function Nd(){if(Fn)return Fn;if(typeof document>"u")return Fn=new Gl(new Uint8Array([255,255,255,255]),1,1),Fn.colorSpace=pn,Fn.needsUpdate=!0,Fn;const i=document.createElement("canvas");return i.width=vi*cs,i.height=Dr*cs,Bf(i),Fn=new bd(i),Fn.colorSpace=pn,Fn.anisotropy=4,document.fonts&&document.fonts.load&&document.fonts.load('80px "Lilita One"').then(()=>{Bf(i),Fn.needsUpdate=!0}).catch(()=>{}),Fn}const vy=i=>i!==null&&i===Fn;function Ud(i){const t=Math.max(0,Math.min(vi*Dr-1,(i|0)-1)),e=t%vi,n=Math.floor(t/vi);return[e/vi,1-(n+1)/Dr,1/vi,1/Dr]}const rc=new st,Lo=new st,Ns=new st,Ii=new st;class _y{constructor(){this.pos=[],this.nor=[],this.uv=[]}get count(){return this.pos.length/9}disc(t,e,n,s,r,o=null){Ns.set(e[0],e[1],e[2]).normalize(),Lo.set(n[0],n[1],n[2]),rc.crossVectors(Lo,Ns).normalize(),Lo.crossVectors(Ns,rc).normalize();const[a,c,l,u]=Ud(r),d=24,f=[];for(let g=0;g<=d;g++){const x=g/d*Math.PI*2;f.push(Math.cos(x),Math.sin(x))}const h=(g,x)=>{Ii.set(t[0],t[1],t[2]).addScaledVector(rc,g*s).addScaledVector(Lo,x*s);let m=Ns.x,p=Ns.y,w=Ns.z;if(o){const M=Ii.x-o.c[0],y=Ii.y-o.c[1],C=Ii.z-o.c[2],R=Math.hypot(M,y,C)||1;m=M/R,p=y/R,w=C/R,Ii.set(o.c[0]+m*o.r,o.c[1]+p*o.r,o.c[2]+w*o.r)}this.pos.push(Ii.x,Ii.y,Ii.z),this.nor.push(m,p,w),this.uv.push(a+(.5+.47*g)*l,c+(.5+.47*x)*u)};for(let g=0;g<d;g++){const x=f[g*2],m=f[g*2+1],p=f[g*2+2],w=f[g*2+3];h(0,0),h(x*.5,m*.5),h(p*.5,w*.5),h(x*.5,m*.5),h(x,m),h(p,w),h(x*.5,m*.5),h(p,w),h(p*.5,w*.5)}}build(){const t=new je;return t.setAttribute("position",new Le(this.pos,3)),t.setAttribute("normal",new Le(this.nor,3)),t.setAttribute("uv",new Le(this.uv,2)),t.computeBoundingSphere(),t}}const br=3,Us=1.7,oc=1.06;function My(i,t,e,n){const s=new Zn(.07,.075,br+.7,8,16);s.translate(0,(br+.7)/2-.7,0);const r=ue(Ce.pinWhite),o=ue(Ce.pinBand),a=br/8;i.geo(s,(l,u)=>u>0&&Math.floor(u/a)%2===1?o:r,{flat:!1,matrix:new De().makeTranslation(t,e,n)});const c=new oi(.09,10,8);c.translate(t,e+br+.05,n),i.geo(c,()=>r,{flat:!1})}const yy=`
uniform float uTime;
uniform float uAmp;
float ebgWave(float x) { return sin(x * 3.2 - uTime * 6.5) * 0.5 + sin(x * 5.3 - uTime * 10.0 + 1.3) * 0.2; }
float ebgWaveD(float x) { return cos(x * 3.2 - uTime * 6.5) * 1.6 + cos(x * 5.3 - uTime * 10.0 + 1.3) * 1.06; }
`,Sy=`
uniform vec4 uCell;
uniform vec2 uDiscC;
uniform vec2 uDiscS;
uniform vec3 uCloth;
`,wy=`
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
`;function by(i){const t=new us;t.name="course-flag";const e=new vs(Us,oc,14,3);e.translate(Us/2+.05,br-oc/2-.06,0);const n=Nd(),s=.78,r={uTime:{value:0},uAmp:{value:1},uCell:{value:new Ge(...Ud(i))},uDiscC:{value:new re(.56,.5)},uDiscS:{value:new re(s/Us,s/oc)},uCloth:{value:ue(Ce.flagCloth)}},o=new ma({color:16777215,map:n,side:An});o.onBeforeCompile=c=>{Object.assign(c.uniforms,r);let l=c.vertexShader;l=Cn(l,"#include <common>",yy),l=Cn(l,"#include <beginnormal_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Us.toFixed(3)}, 0.0, 1.0);
  float dz = (ebgWaveD(position.x) * kk + ebgWave(position.x) / ${Us.toFixed(3)}) * 0.18 * uAmp;
  objectNormal = normalize(vec3(-dz, 0.0, 1.0));
}`),l=Cn(l,"#include <begin_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Us.toFixed(3)}, 0.0, 1.0);
  transformed.z += ebgWave(position.x) * 0.18 * uAmp * kk;
  transformed.y -= kk * kk * 0.08;
}`),c.vertexShader=l;let u=c.fragmentShader;u=Cn(u,"#include <common>",Sy),u=Cn(u,"#include <map_fragment>",wy,"replace"),c.fragmentShader=u},o.customProgramCacheKey=()=>"ebg-flag-v1";const a=new Ve(e,o);return a.name="course-flag-cloth",t.add(a),{group:t,uniforms:r,cloth:a}}const Ey=`
varying vec2 vLocal;
void main() {
  vLocal = position.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ty=`
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
`;function Ay(i,t,e,n,s){const r=[0,.3,.6,.8,n*.86,n,n+.15,n+.35,n+s,n+s+.3,n*1.05+1.55],o=40,a=[],c=[];for(let y=0;y<r.length;y++){const C=y===0?1:o;for(let R=0;R<C;R++){const b=R/o*Math.PI*2,S=Math.cos(b)*r[y],_=Math.sin(b)*r[y];a.push(S,i(t+S,e+_)+.012,_)}}const l=y=>y===0?0:1+(y-1)*o;for(let y=0;y<o;y++)c.push(0,l(1)+(y+1)%o,l(1)+y);for(let y=1;y<r.length-1;y++){const C=l(y),R=l(y+1);for(let b=0;b<o;b++){const S=(b+1)%o;c.push(C+b,C+S,R+S,C+b,R+S,R+b)}}const u=new je;u.setAttribute("position",new Le(a,3)),u.setIndex(c);const d=u.attributes.position,f=c.slice(0,3),h=d.getX(f[1])-d.getX(f[0]),g=d.getZ(f[1])-d.getZ(f[0]),x=d.getX(f[2])-d.getX(f[0]),m=d.getZ(f[2])-d.getZ(f[0]);if(g*x-h*m<0){for(let y=0;y<c.length;y+=3){const C=c[y+1];c[y+1]=c[y+2],c[y+2]=C}u.setIndex(c)}u.computeBoundingSphere();const p={uR:{value:n},uLip:{value:n+s},uTime:{value:0},uLightDir:{value:new re(-.7071,-.7071)},uInside:{value:ue(Ce.cupInside)},uLiner:{value:ue(Ce.cupLiner)},uHalo:{value:ue(Ce.blobShadow)}},w=new _n({uniforms:p,vertexShader:Ey,fragmentShader:Ty,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),M=new Ve(u,w);return M.name="course-cup",M.position.set(t,0,e),M.renderOrder=2,{mesh:M,uniforms:p}}const Cy=.3,Ry=.3,Py=1e3;function Fd(i,t){const e=Yl(t.round),n=t.heightAt,s=CM(String(t.id||"hole")),r=new us;r.name="course";const o=PM(t),a=iy(e),c=new LM,l=new _y,u=9+Math.floor(s()*7),d=9+(u-9+2+Math.floor(s()*4))%7,f=[u,d],h=jM(t,o,c,e,Ce.poolBalls[(u-1)%8]);let g=0;t.posts.forEach((z,q)=>{const j=z.kind||"post";sy(c,l,a,z,n(z.x,z.z),j==="bumper"?g++:q,f),h.push({x:z.x,z:z.z,r:z.r})});const x=FM(t,o,h),m=HM(t,o,x,e,gy(t,o),i?i.tier:1);r.add(m.mesh);const p=YM(t,m,x,e);p&&r.add(p.mesh),py(t,o,c,l,a,s);const w=xy(t,o,c,a,s),M=t.cup.x,y=t.cup.z,C=n(M,y);My(c,M,C,y);const R=Ay(n,M,y,Gt.HOLE_R,Gt.LIP_W);r.add(R.mesh);const b=by(t.hole&&t.hole.number||1);b.group.position.set(M,C,y),r.add(b.group);const S=new Ve(c.build(),Iy());S.name="course-solids",S.castShadow=!0,S.receiveShadow=!0,r.add(S);let _=null;l.count>0&&(_=new Ve(l.build(),new ma({map:Nd()})),_.name="course-labels",_.receiveShadow=!0,r.add(_)),r.userData.stats={decor:w},i&&i.scene&&i.scene.add(r),i&&i.renderer&&i.renderer.shadowMap&&(i.renderer.shadowMap.needsUpdate=!0);let v=0,A=0,U=0,F=!1;const V=m.uniforms;function rt(z,q){if(F)return;const j=q%Py,tt=z/Cy;A+=Math.max(-tt,Math.min(tt,v-A)),V.uTime.value=j,V.uFlow.value=A*A*(3-2*A),p&&(p.uniforms.uTime.value=j),R.uniforms.uTime.value=j,b.uniforms.uTime.value=j,U>0&&(U=Math.max(0,U-z)),b.uniforms.uAmp.value=1+Math.min(1,U/.08)}function J(z){v=z>1?1:z>0?z:0}function gt(){U=Ry}function ot(z){if(!z||!z.position)return;const q=z.position.x-M,j=z.position.z-y;if(q*q+j*j<1e-8)return;const tt=Math.atan2(q,j);b.group.rotation.y=tt;const O=(i.yaw||0)+225*Math.PI/180;R.uniforms.uLightDir.value.set(Math.sin(O),Math.cos(O))}function W(){F||(F=!0,r.removeFromParent(),r.traverse(z=>{if(!z.isMesh)return;z.geometry.dispose();const q=Array.isArray(z.material)?z.material:[z.material];for(const j of q)j.map&&!vy(j.map)&&j.map.dispose(),j.dispose()}),x.mask.dispose(),x.aux.dispose())}return i&&i.camera&&ot(i.camera),{group:r,update:rt,setFlow:J,wiggleFlag:gt,faceCamera:ot,dispose:W}}const Ly=`
varying float vLeaf;
varying vec3 vLeafPos;
float lfH(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float lfNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lfH(i), lfH(i + vec2(1.0, 0.0)), f.x), mix(lfH(i + vec2(0.0, 1.0)), lfH(i + vec2(1.0, 1.0)), f.x), f.y);
}
`;function Iy(){const i=new ma({color:16777215,vertexColors:!0});return i.onBeforeCompile=t=>{let e=t.vertexShader;e=Cn(e,"#include <common>",`attribute float aLeaf;
varying float vLeaf;
varying vec3 vLeafPos;`),e=Cn(e,"#include <begin_vertex>",`vLeaf = aLeaf;
vLeafPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.vertexShader=e;let n=t.fragmentShader;n=Cn(n,"#include <common>",Ly),n=Cn(n,"#include <color_fragment>",`{
  vec2 lp = vLeafPos.xz * 4.5 + vec2(vLeafPos.y * 3.1, vLeafPos.y * -2.3);
  float ln = lfNoise(lp) * 0.65 + lfNoise(lp * 2.7) * 0.35;
  diffuseColor.rgb *= 1.0 + vLeaf * (ln - 0.5) * 0.5;
}`),t.fragmentShader=n},i.customProgramCacheKey=()=>"ebg-solids-v1",i}const Di=Gt.R,Vi=Math.PI*2,Dy=["classic","tennis","beach","planet","donut","snow","gold"],zy=14,Hf=1.4,Io=.24,Ny=.12,Gf=.38,Vf=.34,ac=.7,Uy=.12,cc=.16,Do=.35,mi=i=>i<0?0:i>1?1:i,Ke=(i,t,e)=>{const n=mi((e-i)/(t-i));return n*n*(3-2*n)},ke=i=>[i>>16&255,i>>8&255,i&255];function $e(i,t,e){i[0]+=(t[0]-i[0])*e,i[1]+=(t[1]-i[1])*e,i[2]+=(t[2]-i[2])*e}function wi(i,t){i[0]=t[0],i[1]=t[1],i[2]=t[2]}function Fy(i,t){i[0]*=t,i[1]*=t,i[2]*=t}const Wr=i=>Math.acos(i<-1?-1:i>1?1:i);function gi(i,t,e,n){let s=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,1274126177)^Math.imul(n+1,2246822519);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function Od(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=i-s,c=t-r,l=e-o,u=a*a*(3-2*a),d=c*c*(3-2*c),f=l*l*(3-2*l),h=(g,x,m)=>g+(x-g)*m;return h(h(h(gi(s,r,o,n),gi(s+1,r,o,n),u),h(gi(s,r+1,o,n),gi(s+1,r+1,o,n),u),d),h(h(gi(s,r,o+1,n),gi(s+1,r,o+1,n),u),h(gi(s,r+1,o+1,n),gi(s+1,r+1,o+1,n),u),d),f)}function sr(i,t,e,n,s=4){let r=.5,o=1,a=0,c=0;for(let l=0;l<s;l++)a+=r*Od(i*o,t*o,e*o,n+l*17),c+=r,r*=.5,o*=2.03;return a/c}function kd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Oy(i,t,e,n){const s=.809016994375,r=-.587785252292,o=-s,a=r;i=Math.abs(i);let c=Math.max(s*i+r*t,0)*2;i-=c*s,t-=c*r,c=Math.max(o*i+a*t,0)*2,i-=c*o,t-=c*a,i=Math.abs(i),t-=e;const l=n*-r-0,u=n*s-1,d=Math.min(e,Math.max(0,(i*l+t*u)/(l*l+u*u))),f=i-l*d,h=t-u*d;return Math.sqrt(f*f+h*h)*Math.sign(t*l-i*u)}const ky=ke(Ce.cueBody),By=ke(Ce.cueDots),Hy=ke(Ce.eightBody),Gy=ke(Ce.eightDisc),si=Ce.poolBalls.map(ke),kr=ke(16513779);function Vy(i,t,e,n,s){wi(s,ky);const r=Wr(Math.max(Math.abs(i),Math.abs(t),Math.abs(e)));$e(s,By,Ke(.2+n,.2-n,r))}const Wf=.52;function Wy(i,t,e,n,s){wi(s,Hy);const r=Wr(Math.abs(e));$e(s,Gy,Ke(Wf+n,Wf-n,r))}const bl=.72,El=.28,Xy=2*Math.sqrt(bl*El),qo=(i,t)=>(t[0]=bl*Math.cos(i)+El*Math.cos(3*i),t[1]=Xy*Math.sin(2*i),t[2]=bl*Math.sin(i)-El*Math.sin(3*i),t),Ks=72,lc=(()=>{const i=new Float64Array(Ks*3),t=[0,0,0];for(let e=0;e<Ks;e++)qo(e/Ks*Vi,t),i[e*3]=t[0],i[e*3+1]=t[1],i[e*3+2]=t[2];return i})(),Nn=[0,0,0];function qy(i,t,e){let n=-2,s=0;for(let a=0;a<Ks;a++){const c=i*lc[a*3]+t*lc[a*3+1]+e*lc[a*3+2];c>n&&(n=c,s=a)}let r=(s-1)/Ks*Vi,o=(s+1)/Ks*Vi;for(let a=0;a<14;a++){const c=r+(o-r)*.382,l=r+(o-r)*.618;qo(c,Nn);const u=i*Nn[0]+t*Nn[1]+e*Nn[2];qo(l,Nn);const d=i*Nn[0]+t*Nn[1]+e*Nn[2];u>d?o=l:r=c}return qo((r+o)/2,Nn),Wr(i*Nn[0]+t*Nn[1]+e*Nn[2])}const Yy=ke(13952570),Ky=ke(16316138),$y=ke(11123498);function jy(i,t,e,n,s){wi(s,Yy),Fy(s,.94+.12*sr(i*9+3,t*9,e*9,11,3));const r=qy(i,t,e);$e(s,$y,Ke(.085+n,.085-n,r)*.8),$e(s,Ky,Ke(.05+n,.05-n,r))}const uc=[si[2],kr,si[1],si[0],kr,si[5]];function Zy(i,t,e,n,s){let r=Math.atan2(e,-i);r<0&&(r+=Vi);const o=Vi/6,a=Math.floor(r/o)%6,c=r-a*o,l=Math.sqrt(Math.max(0,1-t*t));wi(s,uc[a]);const u=Math.min(c,o-c)*l,d=c<o/2?uc[(a+5)%6]:uc[(a+1)%6];$e(s,d,Ke(n,-n,u));const f=Wr(Math.abs(t));$e(s,kr,Ke(.36+n,.36-n,f)),$e(s,si[0],Ke(.12+n,.12-n,f))}const Jy=ke(2052008),Qy=ke(4167142),t2=ke(15326364),e2=ke(4170573),n2=ke(9227102),i2=ke(16055039);function s2(i,t,e,n,s){const r=sr(i*1.9+7.1,t*1.9+3.3,e*1.9+1.7,5,5);wi(s,Jy),$e(s,Qy,Ke(.36,.5,r));const o=.52,a=.012+n*.5;$e(s,t2,Ke(o-a,o+a,r)),$e(s,e2,Ke(o+.012-a,o+.012+a,r)),$e(s,n2,Ke(.6,.7,r)*.8);const c=Math.abs(t)-(.84+.07*(sr(i*5,t*5,e*5,9,3)-.5));$e(s,i2,Ke(-n,n,c))}const r2=ke(14262363),o2=ke(15778430),fc=ke(16748480),a2=ke(15036070),Xf=(()=>{const i=kd(388824),t=[],e=[si[0],si[1],kr,si[5],si[4],si[3],kr];for(let n=0;t.length<64&&n<1e3;n++){const s=i()*2-1,r=i()*Vi,o=Math.sqrt(1-s*s),a=[o*Math.cos(r),s,o*Math.sin(r)];if(a[1]<.08)continue;let c=!1;for(const M of t)if(M.c[0]*a[0]+M.c[1]*a[1]+M.c[2]*a[2]>.985){c=!0;break}if(c)continue;let l=-a[2],u=0,d=a[0],f=Math.hypot(l,u,d)||1;l/=f,u/=f,d/=f;const h=a[1]*d-a[2]*u,g=a[2]*l-a[0]*d,x=a[0]*u-a[1]*l,m=i()*Math.PI,p=[l*Math.cos(m)+h*Math.sin(m),u*Math.cos(m)+g*Math.sin(m),d*Math.cos(m)+x*Math.sin(m)],w=[a[1]*p[2]-a[2]*p[1],a[2]*p[0]-a[0]*p[2],a[0]*p[1]-a[1]*p[0]];t.push({c:a,t1:p,t2:w,col:e[t.length%e.length]})}return t})();function c2(i,t,e,n,s){const r=Math.atan2(e,-i),o=-.08+.09*Math.sin(r*7)+.05*Math.sin(r*3+1.3)+.06*(sr(i*4,t*4,e*4,21,3)-.5);wi(s,r2),$e(s,o2,Ke(-.55,-.05,t)*.7);const a=Ke(o-n,o+n,t);if(a<=0)return;const c=[fc[0],fc[1],fc[2]];$e(c,a2,Ke(o+.09,o,t)*.8);for(let l=0;l<Xf.length;l++){const u=Xf[l];if(i*u.c[0]+t*u.c[1]+e*u.c[2]<.97)continue;const f=i*u.t1[0]+t*u.t1[1]+e*u.t1[2],h=i*u.t2[0]+t*u.t2[1]+e*u.t2[2],g=Math.max(0,Math.abs(f)-.07),x=Math.sqrt(g*g+h*h)-.026,m=Ke(n,-n,x);m>0&&$e(c,u.col,m)}$e(s,c,a)}const l2=ke(16120319),u2=ke(13229038),f2=ke(11455462),qf=(()=>{const i=kd(77),t=[];for(let e=0;e<9;e++){const n=i()*2-1,s=i()*Vi,r=Math.sqrt(1-n*n);t.push([r*Math.cos(s),n,r*Math.sin(s),.12+i()*.1])}return t})();function h2(i,t,e,n,s){wi(s,l2),$e(s,u2,Ke(.45,.75,sr(i*3.2,t*3.2,e*3.2,31,4))*.75);for(let r=0;r<qf.length;r++){const o=qf[r],a=Wr(i*o[0]+t*o[1]+e*o[2]),c=o[3]*(.8+.4*Od(i*12,t*12,e*12,41+r));$e(s,f2,Ke(c+n*2,c-n*2,a)*.85)}gi(Math.floor(i*90),Math.floor(t*90),Math.floor(e*90),5)>.992&&wi(s,[255,255,255])}const d2=ke(12091423),p2=ke(15249982),m2=ke(16769674),g2=ke(16774340),x2=ke(8015376);function v2(i,t,e,n,s){wi(s,p2);const r=sr(i*2.5,t*2.5,e*2.5,61,4);$e(s,d2,Ke(.55,.3,r)*.6),$e(s,m2,Ke(.55,.78,r)*.6);const o=Math.abs(e);if(o<.6)return;const a=(e>0?i:-i)/o,c=t/o,l=Oy(a,c+.03,.42,.45);$e(s,x2,Ke(.035+n,.035-n,l)),$e(s,g2,Ke(n,-n,l))}const Yf={classic:{paint:Vy,specular:5592405,shininess:80,rimDark:.25},tennis:{paint:jy,specular:2236962,shininess:18,rimDark:.3},beach:{paint:Zy,specular:6710886,shininess:70,rimDark:.25},planet:{paint:s2,specular:4868682,shininess:50,rimDark:.15},donut:{paint:c2,specular:3815994,shininess:40,rimDark:.25},snow:{paint:h2,specular:7829367,shininess:60,rimDark:.3},gold:{paint:v2,specular:16765562,shininess:140,rimDark:.12}};function Tl(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext&&e.getContext("2d");return n?{c:e,g:n}:null}function Kf(i,t){const{c:e,g:n}=i,s=e.width,r=e.height;if(!n.createImageData||!n.putImageData)return;const o=n.createImageData(s,r),a=o.data,c=Math.PI/r*.75,l=[0,0,0];for(let u=0;u<r;u++){const d=(u+.5)/r*Math.PI,f=Math.sin(d),h=Math.cos(d);for(let g=0;g<s;g++){const x=(g+.5)/s*Vi;t(-Math.cos(x)*f,h,Math.sin(x)*f,c,l);const m=(u*s+g)*4;a[m]=l[0],a[m+1]=l[1],a[m+2]=l[2],a[m+3]=255}}n.putImageData(o,0,0)}const Kl='"Lilita One", "Arial Black", system-ui, sans-serif';function $f(i,t,e){const{c:n,g:s}=i,r=n.width,o=n.height,a=Math.ceil(o*.42),c=Tl(a,a);if(!c||!s.drawImage)return;const l=c.g;l.fillStyle="#"+Ce.eightInk.toString(16).padStart(6,"0"),l.font=`${Math.round(o*.27)}px ${Kl}`,l.textAlign="center",l.textBaseline="middle",l.fillText(t,a/2,a/2+o*.012);const u=e*r,d=o/2;for(let f=0;f<a;f++){const h=d-a/2+f,g=(.5-(h+.5)/o)*Math.PI,x=1/Math.max(.2,Math.cos(g));s.drawImage(c.c,0,f,a,1,u-a*x/2,h,a*x,1)}}function jf(i,t){const e=new bd(i.c);return e.colorSpace=pn,e.anisotropy=t,e.wrapS=Zo,e}function Zf(i,{rim:t=0,rimStrength:e=0,rimDark:n=0,specular:s=6710886,shininess:r=90,transparent:o=!1,key:a="ball-rim-v1"}={}){const c=new N_({map:i,shininess:r,specular:s,transparent:o,depthWrite:!0}),l=new he(t),u={value:l.clone().multiplyScalar(e)},d={value:n};return c.onBeforeCompile=f=>{f.uniforms.uRim=u,f.uniforms.uRimDark=d,f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRim;
uniform float uRimDark;`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","float rimF = pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 3.0 );","totalEmissiveRadiance += uRim * rimF;","diffuseColor.rgb *= 1.0 - uRimDark * rimF;"].join(`
`))},c.customProgramCacheKey=()=>a,c.userData.uniforms={uRim:u,uRimDark:d},c.userData.rimBase=l,c}const _2=`
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
}`,M2=`
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
}`;function y2(i){if(!i||typeof document>"u"||!document.createElement)return null;const t=document.createElement("div");t.className="ebg-eight-marker",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",pointerEvents:"none",display:"none",zIndex:"3",willChange:"transform"});const e=document.createElement("div");Object.assign(e.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",display:"none"});const n=document.createElement("div");Object.assign(n.style,{position:"absolute",left:"22px",top:"5px",width:"0px",height:"0px",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:"9px solid #ffffff",filter:"drop-shadow(0 0 1.5px rgba(16,36,26,0.9))"}),e.appendChild(n);const s=document.createElement("div");return Object.assign(s.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",boxSizing:"border-box",borderRadius:"50%",background:"#16161c",border:"2px solid #ffffff",boxShadow:"0 0 0 1.5px rgba(16,36,26,0.85), 0 2px 4px rgba(0,0,0,0.35)",color:"#ffffff",font:`13px/18px ${Kl}`,textAlign:"center"}),s.textContent="8",t.appendChild(e),t.appendChild(s),i.appendChild(t),{el:t,arrowWrap:e,shown:!1,x:-1e9,y:-1e9,ang:1e9,arrowOn:!1}}class Jf{constructor(){this.shown=!1,this.x=0,this.y=0,this.z=0,this.rx=0,this.rz=0,this.vx=0,this.vz=0,this.vy=0,this.anim="none",this.t=0,this.fx=0,this.fy=0,this.fz=0,this.hk="water",this.alpha=1,this.lastMode="off",this.synced=!1,this.lx=0,this.ly=0,this.lz=0,this.la=0,this.llv=null,this.lyaw=0}}class S2{constructor(){this.valid=!1,this.cx=0,this.cy=0,this.cz=0,this.bx=0,this.by=0,this.bz=0,this.vis=!1,this.anim="",this.w=0,this.h=0}}class w2{constructor(){this.t=0,this.k=-1}}function b2(i,t={}){const{uiRoot:e=null,rig:n=null}=t,s=i.scene,r=i.tier??1,o=4,a=r===0?256:512,c=r===0?512:1024,l=new oi(Di,48,24),u=Tl(c,c/2);let d=null;function f(){u&&(Kf(u,Wy),$f(u,"8",.25),$f(u,"8",.75),d&&(d.needsUpdate=!0))}u&&(f(),d=jf(u,o));let h=!1;try{const nt=typeof document<"u"?document.fonts:null;if(nt&&nt.load){const mt=nt.check?nt.check(`64px ${Kl}`):!1;nt.load('64px "Lilita One"').then(()=>{!h&&!mt&&f()},()=>{})}}catch{}const g=Zf(d,{rim:Ce.eightRim,rimStrength:Do,specular:6710886,shininess:90,key:"ball-eight-v1"});d||g.color.setHex(Ce.eightBody);const x=new Ve(l,g);x.name="eight-ball";const m=new Map,p=Zf(null,{rimDark:.25,specular:5592405,shininess:80,transparent:!0,key:"ball-cue-v1"}),w=new Ve(l,p);w.name="cue-ball",w.renderOrder=2;for(const nt of[x,w])nt.castShadow=!1,nt.receiveShadow=!1,nt.frustumCulled=!0;s.add(x,w);const M=new vs(1,1);M.rotateX(-Math.PI/2);const y=new ta(new Float32Array(2),1);y.setUsage(ki),M.setAttribute("aAlpha",y);const C=new _n({uniforms:{uColor:{value:new he(Ce.blobShadow)},uOpacity:{value:.42}},vertexShader:_2,fragmentShader:M2,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),R=new __(M,C,2);R.instanceMatrix.setUsage(ki),R.frustumCulled=!1,R.renderOrder=1,R.name="ball-shadows",s.add(R);const b=y2(e),S=[new Jf,new Jf],_=[w,x];let v="classic",A=1;const U=new w2;let F=!0;const V=new S2,rt=new st,J=new gs,gt=new st,ot=new st(0,1,0),W=new De,z=new st,q=new st,j={x:0,y:0,onScreen:!1};let tt=null;function O(nt){const mt=n?n.goalYaw:NaN,H=n?n.goalPitch:NaN;nt.quaternion.setFromAxisAngle(ot,Number.isFinite(mt)?mt:i.yaw||0),J.setFromAxisAngle(rt.set(1,0,0),-(Number.isFinite(H)?H:Math.PI/3)),nt.quaternion.multiply(J)}O(x),O(w),w.quaternion.multiply(J.setFromAxisAngle(rt.set(0,1,0),.6));function $(nt,mt,H){const Q=Math.sqrt(mt*mt+H*H);Q<1e-7||(rt.set(H/Q,0,-mt/Q),nt.quaternion.premultiply(J.setFromAxisAngle(rt,Q/Di)),nt.quaternion.normalize())}function ht(nt){Yf[nt]||(nt="classic"),v=nt;const mt=Yf[nt];let H=m.get(nt);if(!H){const zt=Tl(a,a/2);zt&&(Kf(zt,mt.paint),H=jf(zt,o),m.set(nt,H))}const Q=!!p.map;p.map=H||null,Q!==!!p.map&&(p.needsUpdate=!0),H?p.color.setHex(16777215):p.color.setHex(Ce.cueBody),p.specular.setHex(mt.specular),p.shininess=mt.shininess,p.userData.uniforms.uRimDark.value=mt.rimDark}ht("classic");function B(nt,mt){nt.anim="drop",nt.t=0,nt.x=mt.x,nt.y=mt.y+Hf,nt.z=mt.z,nt.rx=mt.x,nt.rz=mt.z}function at(nt,mt,H){const Q=S[nt],zt=_[nt],Qt=nt===1,Ht=Qt&&mt.visible&&mt.mode==="holed";let te=!1;if(Ht)Q.anim!=="sink"&&Q.anim!=="inCup"&&(Q.shown&&Q.anim!=="hazard"?(Q.anim="sink",Q.t=0,Q.fx=Q.x,Q.fy=Q.y,Q.fz=Q.z):(Q.anim="inCup",te=!0)),Q.shown=!0;else if(mt.visible)(!Q.shown||Q.anim==="inCup"||Q.anim==="sink"||Q.anim==="hazard")&&(B(Q,mt),te=!0,O(zt)),Q.shown=!0;else if(Qt&&mt.mode==="sunk"&&Q.shown&&Q.anim!=="hazard"){Q.anim="hazard",Q.t=0,Q.vy=0;const jt=n&&n.level;if(Q.hk=jt&&jt.hazardAt&&jt.hazardAt(Q.x,Q.z)==="oob"?"oob":"water",Q.hk==="oob"){const kt=Math.sqrt(Q.vx*Q.vx+Q.vz*Q.vz);kt<1.5&&kt>1e-4&&(Q.vx*=1.5/kt,Q.vz*=1.5/kt)}}else Q.anim!=="hazard"&&(Q.shown=!1,Q.anim="none");Q.lastMode=mt.mode;const $t=Q.x,T=Q.z;if(Q.anim==="hazard"){Q.t+=H;const jt=Q.t/ac;if(Q.hk==="water"){const kt=Math.exp(-5*H);Q.vx*=kt,Q.vz*=kt,Q.x+=Q.vx*H,Q.z+=Q.vz*H,Q.y-=(.4+2.2*jt)*H}else Q.x+=Q.vx*H,Q.z+=Q.vz*H,Q.vy-=18*H,Q.y+=Q.vy*H;Q.t>=ac&&(Q.anim="none",Q.shown=!1)}else if(Q.anim==="sink"){Q.t+=H;const jt=mi(Q.t/Vf),kt=1-Math.pow(1-mi(jt/.6),3),Zt=.05*(1-jt)*Math.sin(jt*26);Q.x=Q.fx+(mt.x-Q.fx)*kt+Zt,Q.z=Q.fz+(mt.z-Q.fz)*kt;const ce=mi((jt-.12)/.88);Q.y=Q.fy+(mt.y-Q.fy)*ce*ce,Q.t>=Vf&&(Q.anim="inCup",Q.x=mt.x,Q.y=mt.y,Q.z=mt.z)}else if(Q.anim==="inCup")Q.x=mt.x,Q.y=mt.y,Q.z=mt.z;else if(Q.anim==="drop"){Q.t+=H,Q.x=mt.x,Q.z=mt.z;let jt;if(Q.t<Io){const kt=Q.t/Io;jt=Hf*(1-kt*kt)}else jt=Ny*Math.sin(Math.PI*mi((Q.t-Io)/(Gf-Io)));Q.y=mt.y+jt,Q.t>=Gf&&(Q.anim="none",Q.y=mt.y)}else if(Q.shown){const jt=mt.x-Q.x,kt=mt.z-Q.z;jt*jt+kt*kt>2.5*2.5&&(te=!0),Q.x=mt.x,Q.y=mt.y,Q.z=mt.z}if(Q.shown){const jt=Q.x-$t,kt=Q.z-T;if(!te&&Q.anim!=="drop"&&Q.anim!=="inCup"&&(jt!==0||kt!==0)&&$(zt,jt,kt),H>0&&!te&&Q.anim!=="hazard"){const Zt=1-Math.exp(-H/.06),ce=jt/H,ge=kt/H;Number.isFinite(ce)&&Number.isFinite(ge)&&(Q.vx+=(ce-Q.vx)*Zt,Q.vz+=(ge-Q.vz)*Zt)}te&&(Q.vx=0,Q.vz=0)}const P=nt===0?mi(Number.isFinite(mt.alpha)?mt.alpha:1):1;if(Q.alpha=Q.shown?P:0,zt.visible=Q.shown&&P>.01,nt===0&&(p.opacity=P),Q.synced&&Q.x===Q.lx&&Q.y===Q.ly&&Q.z===Q.lz&&Q.alpha===Q.la&&tt===Q.llv&&i.yaw===Q.lyaw&&Q.anim==="none")return;Q.synced=!0,Q.lx=Q.x,Q.ly=Q.y,Q.lz=Q.z,Q.la=Q.alpha,Q.llv=tt,Q.lyaw=i.yaw,F=!0,zt.visible&&zt.position.set(Q.x,Q.y,Q.z);const ut=tt?rs(tt,Q.x,Q.z):mt.y-Di,dt=Q.y-Di-ut;let bt=zt.visible?Q.alpha:0,yt=2.1*Di*1.25;dt>.01?(bt/=1+dt*1.6,yt*=1+dt*.45):dt<-.01&&(bt*=mi(1+dt/(.9*Di))),Q.anim==="hazard"&&Q.hk==="water"&&(bt*=mi(1-Q.t/(ac*.5))),y.array[nt]=bt;const Xt=(i.yaw||0)+225*Math.PI/180,Bt=.25*Di*Math.min(1.5,1+Math.max(0,dt)),Ft=Q.x-Math.sin(Xt)*Bt,fe=Q.z-Math.cos(Xt)*Bt,Ct=.25,qt=tt?rs(tt,Ft+Ct,fe)-rs(tt,Ft-Ct,fe):0,oe=tt?rs(tt,Ft,fe+Ct)-rs(tt,Ft,fe-Ct):0;gt.set(-qt/(2*Ct),1,-oe/(2*Ct)).normalize(),J.setFromUnitVectors(ot,gt),z.set(Ft,(tt?rs(tt,Ft,fe):ut)+.03,fe),q.set(yt,1,yt),W.compose(z,J,q),R.setMatrixAt(nt,W)}function ft(){if(!b)return;const nt=S[1],mt=i.camera.matrixWorld.elements,H=i.size.w,Q=i.size.h;if(V.valid&&mt[12]===V.cx&&mt[13]===V.cy&&mt[14]===V.cz&&nt.x===V.bx&&nt.y===V.by&&nt.z===V.bz&&x.visible===V.vis&&nt.anim===V.anim&&H===V.w&&Q===V.h)return;V.valid=!0,V.cx=mt[12],V.cy=mt[13],V.cz=mt[14],V.bx=nt.x,V.by=nt.y,V.bz=nt.z,V.vis=x.visible,V.anim=nt.anim,V.w=H,V.h=Q;let zt=!1,Qt=0,Ht=0,te=0,$t=!1;if(n&&nt.shown&&x.visible&&nt.anim!=="inCup"&&nt.anim!=="sink"&&nt.anim!=="hazard"){const T=Math.max(1,i.size.w),P=Math.max(1,i.size.h);n.groundToScreen(nt.x,nt.y,nt.z,j);const ut=2*Di*n.pxPerMetre(nt.x,nt.z);if(!j.onScreen||ut<zy){zt=!0,Qt=j.x,Ht=j.y;const dt=24;if(!j.onScreen||Qt<dt||Qt>T-dt||Ht<dt||Ht>P-dt){const bt=T/2,yt=P/2,Xt=Qt-bt,Bt=Ht-yt,Ft=Math.abs(Xt)>1e-6?(T/2-dt)/Math.abs(Xt):1/0,fe=Math.abs(Bt)>1e-6?(P/2-dt)/Math.abs(Bt):1/0,Ct=Math.min(1,Ft,fe);Qt=bt+Xt*Ct,Ht=yt+Bt*Ct,te=Math.atan2(Bt,Xt),$t=!j.onScreen}}}zt!==b.shown&&(b.el.style.display=zt?"block":"none",b.shown=zt),zt&&((Math.abs(Qt-b.x)>.5||Math.abs(Ht-b.y)>.5)&&(b.x=Qt,b.y=Ht,b.el.style.transform=`translate3d(${(Qt-11).toFixed(1)}px, ${(Ht-11).toFixed(1)}px, 0)`),$t!==b.arrowOn&&(b.arrowWrap.style.display=$t?"block":"none",b.arrowOn=$t),$t&&Math.abs(te-b.ang)>.01&&(b.ang=te,b.arrowWrap.style.transform=`rotate(${te.toFixed(3)}rad)`))}function Mt(nt,mt){if(h||!nt||nt.length<2)return;mt=Number.isFinite(mt)&&mt>0?Math.min(mt,.1):0,tt=n&&n.level?n.level:null,at(0,nt[0],mt),at(1,nt[1],mt),F&&(y.needsUpdate=!0,R.instanceMatrix.needsUpdate=!0,F=!1);let H=Do;U.t>0&&(U.t-=mt,H=U.t-cc>0?1:Do+(1-Do)*mi(U.t/cc)),H!==U.k&&(U.k=H,g.userData.uniforms.uRim.value.copy(g.userData.rimBase).multiplyScalar(H)),ft()}function Pt(){h=!0,s.remove(x,w,R),l.dispose(),M.dispose(),g.dispose(),p.dispose(),C.dispose(),d&&d.dispose(),m.forEach(nt=>nt.dispose()),m.clear(),R.dispose(),b&&b.el.parentNode&&b.el.parentNode.removeChild(b.el)}return{update:Mt,flash(){U.t=Uy+cc},setSkin:ht,setRound(nt){A=nt===2?2:1},dispose:Pt,get skin(){return v},get round(){return A},meshes:{cue:w,eight:x,shadows:R},skins:Dy}}const Un=Gt.R,E2=9.8,Fs=0,vr=1,Qf=2,hc=["iPos","iRot","iSize","iCol"],dc=["iRing","iRingN","iRingC","iRingF"],T2=.3,A2=10,_r=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};class th{constructor(){this.on=!1,this.x=0,this.y=0,this.z=0}}const C2=`
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
}`,R2=`
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
}`,P2=`
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
}`,L2=`
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
}`;function eh(i,t){return new _n({vertexShader:i,fragmentShader:t,transparent:!0,depthWrite:!1,depthTest:!0,side:An,blending:Yh,blendEquation:Ui,blendSrc:Nc,blendDst:Ur,blendSrcAlpha:Nc,blendDstAlpha:Ur,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function nh(i,t){const e=i.updateRanges;(e.length!==1||e[0]!==t)&&(e.length=0,e.push(t)),i.needsUpdate=!0}function ih(i,t){const e=new vs(1,1),n=new B_;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),n.setAttribute("uv",e.getAttribute("uv"));const s={};for(const[r,o]of t){const a=new ta(new Float32Array(i*o),o);a.setUsage(ki),n.setAttribute(r,a),s[r]=a}return n.instanceCount=0,n.boundingSphere=new qi(new st,1e6),{geo:n,attrs:s}}function I2(i,t={}){const{events:e=null,play:n=null}=t,s=i.scene,r=i.tier??1,o=r===0?180:360,a=16,c=r===0?.4:1,l=ih(o,[["iPos",4],["iRot",4],["iSize",4],["iCol",4]]),u=eh(C2,R2),d=new Ve(l.geo,u);d.frustumCulled=!1,d.renderOrder=5,d.name="fx-particles";const f=ih(a,[["iRing",4],["iRingN",4],["iRingC",4],["iRingF",2]]),h=eh(P2,L2),g=new Ve(f.geo,h);g.frustumCulled=!1,g.renderOrder=3,g.name="fx-rings";const x=hc.map(()=>({start:0,count:0})),m=dc.map(()=>({start:0,count:0}));s.add(g,d);const p=new Float32Array(o),w=new Float32Array(o),M=new Float32Array(o),y=new Float32Array(o),C=new Float32Array(o),R=new Float32Array(o),b=new Float32Array(o),S=new Float32Array(o),_=new Float32Array(o),v=new Float32Array(o),A=new Float32Array(o),U=new Float32Array(o),F=new Float32Array(o),V=new Float32Array(o),rt=new Float32Array(o),J=new Float32Array(o),gt=new Float32Array(o),ot=new Float32Array(o),W=new Float32Array(o),z=new Float32Array(o),q=new Float32Array(o),j=new Uint8Array(o),tt=new Float32Array(o),O=new Float32Array(o),$=new Uint8Array(o),ht=new Uint8Array(o),B=new Uint8Array(o);let at=0,ft=0;const Mt=new Float32Array(a),Pt=new Float32Array(a),nt=new Float32Array(a),mt=new Float32Array(a),H=new Float32Array(a),Q=new Float32Array(a),zt=new Float32Array(a),Qt=new Float32Array(a),Ht=new Float32Array(a),te=new Float32Array(a),$t=new Float32Array(a),T=new Float32Array(a),P=new Float32Array(a),ut=new Float32Array(a),dt=new Float32Array(a),bt=new Float32Array(a),yt=new Float32Array(a),Xt=new Float32Array(a),Bt=new Float32Array(a),Ft=new Uint8Array(a);let fe=0;const Ct=8,qt=new Float32Array(Ct),oe=new Float32Array(Ct),jt=new Float32Array(Ct),kt=new Float32Array(Ct),Zt=new Uint8Array(Ct),ce=new Uint8Array(Ct);let ge=2654435769;const ct=()=>(ge^=ge<<13,ge^=ge>>>17,ge^=ge<<5,(ge>>>0)/4294967296),St=(lt,pt)=>lt+(pt-lt)*ct(),vt=new he,wt=lt=>(vt.setHex(lt),[vt.r,vt.g,vt.b]),It={white:wt(16777215),chalk:wt(Ce.chalk),foam:wt(15268863),water:wt(8378092),gold:wt(16765503),dustDark:wt(5916208),dustTan:wt(10254924),sand:wt(14268530),leaf:wt(3108396),grey:wt(7037271),pool:Ce.poolBalls.map(wt),cream:wt(16774358),streak8:wt(14674175),dustLight:wt(15326400)},E={};for(const lt of[1,2]){const pt=Yl(lt);E[lt]={fairway:wt(pt.fairwayLight),green:wt(pt.greenLight),rough:wt(pt.rough),sand:wt(pt.sand),ice:wt(pt.ice)}}const N=(lt,pt)=>{const _t=X(),Rt=E[_t&&_t.round===2?2:1],Dt=K(lt,pt);return Dt==="green"?Rt.green:Dt==="rough"?Rt.rough:Dt==="sand"?Rt.sand:Dt==="ice"?Rt.ice:Dt==="water"||Dt==="oob"?null:Rt.fairway},X=()=>n&&n.level||null,Z=(lt,pt)=>{const _t=X(),Rt=_t&&_t.heightAt?_t.heightAt(lt,pt):0;return Number.isFinite(Rt)?Rt:0},K=(lt,pt)=>{const _t=X();return _t&&_t.surfaceAt?_t.surfaceAt(lt,pt):"fairway"};function L(){let lt=at;for(let pt=0;pt<o;pt++){const _t=(at+pt)%o;if(!B[_t]){lt=_t;break}}return at=(lt+1)%o,B[lt]||ft++,B[lt]=1,lt}function k(lt,pt,_t,Rt,Dt,Kt,Wt,Ut,Me,ae,Se,Tt,be,de,me,tn,Ne){const pe=L();if(p[pe]=lt,w[pe]=pt,M[pe]=_t,y[pe]=Rt,C[pe]=Dt,R[pe]=Kt,b[pe]=Wt,S[pe]=Wt,_[pe]=Ut,v[pe]=Me,A[pe]=ae,gt[pe]=Se[0],ot[pe]=Se[1],W[pe]=Se[2],z[pe]=Tt,q[pe]=be,j[pe]=de,tt[pe]=me,O[pe]=tn,$[pe]=Ne,ht[pe]=0,rt[pe]=St(0,Math.PI*2),J[pe]=St(-6,6),de===vr){let xe=St(-1,1),rn=St(-1,1),Vn=St(-1,1);const xa=Math.sqrt(xe*xe+rn*rn+Vn*Vn)||1;xe/=xa,rn/=xa,Vn/=xa,U[pe]=xe,F[pe]=rn,V[pe]=Vn,J[pe]=St(5,12)*(ct()<.5?-1:1)}else U[pe]=0,F[pe]=1,V[pe]=0;return pe}function it(lt,pt,_t,Rt,Dt,Kt,Wt,Ut,Me,ae,Se,Tt=0,be=.05){const de=fe;fe=(fe+1)%a;const me=.25,tn=Z(lt+me,pt)-Z(lt-me,pt),Ne=Z(lt,pt+me)-Z(lt,pt-me);let pe=-tn/(2*me),xe=1,rn=-Ne/(2*me);const Vn=Math.sqrt(pe*pe+xe*xe+rn*rn);pe/=Vn,xe/=Vn,rn/=Vn,Mt[de]=lt,Pt[de]=Z(lt,pt)+be,nt[de]=pt,mt[de]=pe,H[de]=xe,Q[de]=rn,zt[de]=_t,Qt[de]=Rt,Ht[de]=Dt,te[de]=Kt,$t[de]=0,T[de]=Wt,P[de]=Tt,ut[de]=Ut[0],dt[de]=Ut[1],bt[de]=Ut[2],yt[de]=Me,Xt[de]=ae,Bt[de]=Se,Ft[de]=1}function xt(lt,pt,_t,Rt,Dt,Kt,Wt){for(let Ut=0;Ut<Rt;Ut++){const Me=St(0,Math.PI*2),ae=Dt*St(.5,1);k(lt,pt,_t,Math.cos(Me)*ae,St(.6,1.6)*Dt*.5,Math.sin(Me)*ae,St(.25,.45),Wt,Wt*.3,1,Kt,1,.85,Fs,.4,3,0)}}function Lt(lt,pt,_t,Rt,Dt,Kt,Wt){const Ut=Z(lt,pt)+.12;for(let Me=0;Me<_t;Me++){const ae=St(0,Math.PI*2),Se=St(.3,1)*Rt;k(lt+Math.cos(ae)*.1,Ut,pt+Math.sin(ae)*.1,Math.cos(ae)*Se,St(.3,.9),Math.sin(ae)*Se,St(.45,.75),Kt,Kt*2.6,1,Dt,Wt,0,Fs,-.15,2.6,0)}}function Jt(lt,pt,_t,Rt){const Dt=Z(lt,pt)+.3;for(let Kt=0;Kt<_t;Kt++){const Wt=St(0,Math.PI*2),Ut=St(.6,3.2)*Rt,Me=St(6.5,11)*Rt,ae=It.pool[(Kt+Math.floor(ct()*7))%It.pool.length],Se=St(.18,.26);k(lt+Math.cos(Wt)*.4,Dt,pt+Math.sin(Wt)*.4,Math.cos(Wt)*Ut,Me,Math.sin(Wt)*Ut,St(3.2,4.4),Se,Se,.6,ae,1,0,vr,.62,1.15,1)}}function ne(lt,pt,_t,Rt,Dt){for(let Kt=0;Kt<Ct;Kt++)if(!ce[Kt]){ce[Kt]=1,qt[Kt]=lt,Zt[Kt]=pt,oe[Kt]=_t,jt[Kt]=Rt,kt[Kt]=Dt;return}}function Ot(lt,pt,_t,Rt,Dt,Kt){const Wt=N(lt,pt);if(!Wt)return;const Ut=Z(lt,pt)+.08;for(let Me=0;Me<Kt;Me++){const ae=St(1.2,3.2)*(.6+.6*Dt),Se=St(-.9,.9);k(lt+St(-.2,.2),Ut,pt+St(-.2,.2),(_t+-Rt*Se)*ae,St(1.6,3.6)*(.7+.5*Dt),(Rt+_t*Se)*ae,St(.45,.8),St(.07,.12),.06,.45,Wt,1,0,vr,.55,1.6,2)}Lt(lt,pt,Math.round(2+3*Dt),.5+.8*Dt,Wt===E[1].sand||Wt===E[2].sand?It.sand:It.dustLight,.2+.1*Dt,.28+.15*Dt)}function le(lt){const pt=_r(.5,1,lt&&Number.isFinite(lt.power)?lt.power:0);if(pt<=0||!n||!n.intent)return;const _t=n.intent;let Rt=Number.isFinite(_t.dx)?_t.dx:_t.ax,Dt=Number.isFinite(_t.dz)?_t.dz:_t.az;const Kt=Math.sqrt(Rt*Rt+Dt*Dt);!(Kt>1e-6)||!Number.isFinite(_t.x)||!Number.isFinite(_t.z)||(Rt/=Kt,Dt/=Kt,Ot(_t.x-Rt*Un*.7,_t.z-Dt*Un*.7,-Rt*.6,-Dt*.6,pt,Math.round(3+6*pt)))}function ie(lt){const pt=lt.x+lt.nx*Un,_t=lt.z+lt.nz*Un,Rt=Math.min(1,(lt.speed||0)/14),Dt=Z(pt,_t)+Un;it(pt,_t,.45,1+Rt*.6,.12,.04,.2,It.white,.9,.6,0);const Kt=5+Math.round(Rt*5);for(let Me=0;Me<Kt;Me++){const ae=Me%2?1:-1,Se=St(1.5,3.5)*(.5+Rt),Tt=-lt.nz*ae,be=lt.nx*ae,de=St(-.35,.35);k(pt,Dt,_t,(Tt+lt.nx*de)*Se,St(.8,2.2),(be+lt.nz*de)*Se,St(.22,.4),St(.07,.12),.02,1,Me%3?It.white:It.chalk,1,.75,Fs,.5,4,0)}Lt(pt,_t,3,.8,It.dustDark,.16,.32);const Wt=_r(8,15,lt.speed||0);Wt>0&&Ot(pt,_t,lt.nx,lt.nz,Wt,Math.round(4+8*Wt));const Ut=_r(9,15.5,lt.speed||0);Ut>0&&typeof i.kickCamera=="function"&&i.kickCamera(Ut)}function _e(lt){const pt=lt.speed||0;if(pt<.8)return;const _t=Math.min(1,pt/12),Rt=lt.x-lt.nx*Un*.95,Dt=lt.z-lt.nz*Un*.95,Kt=lt.id===0?.6:1,Wt=Z(Rt,Dt)+Un*.6;if(lt.kind==="hedge"||lt.kind==="tree"){const Ut=Math.round((2+5*_t)*Kt);for(let Me=0;Me<Ut;Me++){const ae=St(.8,2.2)*(.5+_t);k(Rt,Wt+.2,Dt,(lt.nx+St(-.8,.8))*ae,St(1,3),(lt.nz+St(-.8,.8))*ae,St(.6,1),St(.1,.16),.1,.6,It.leaf,1,0,vr,.35,2,2)}}else if(lt.kind==="bumper")xt(Rt,Wt,Dt,Math.round((3+5*_t)*Kt),2.5+3*_t,It.gold,.14),it(Rt,Dt,.3,1+_t,.1,.03,.22,It.cream,.8,.7,0);else{const Ut=Math.round((2+4*_t)*Kt);Lt(Rt,Dt,Ut,.6+_t,lt.kind==="cushion"?It.grey:It.dustDark,.14+.06*_t,.3+.2*_t),lt.kind==="cushion"&&xt(Rt,Wt,Dt,Math.round(2+3*_t),1.5+2*_t,It.chalk,.09)}}function we(lt){const pt=lt.x,_t=lt.z;if(lt.kind==="water"){it(pt,_t,.35,2.4,.16,.04,.75,It.foam,.95,.25,.22,0,.08),it(pt,_t,.2,1.6,.12,.03,.6,It.foam,.8,.25,0,.16,.08);const Rt=Z(pt,_t)+.1,Dt=16;for(let Kt=0;Kt<Dt;Kt++){const Wt=Kt/Dt*Math.PI*2+St(-.2,.2),Ut=St(1,2.6);k(pt,Rt,_t,Math.cos(Wt)*Ut,St(3.5,6.5),Math.sin(Wt)*Ut,1.4,St(.1,.16),.08,1,Kt%3?It.foam:It.water,.95,.3,Fs,1,.6,2)}for(let Kt=0;Kt<5;Kt++)k(pt+St(-.15,.15),Rt,_t+St(-.15,.15),St(-.4,.4),St(6,8.5),St(-.4,.4),1.4,St(.14,.2),.08,1,It.foam,.95,.3,Fs,1,.5,2)}else Lt(pt,_t,10,1.6,It.grey,.28,.5),xt(pt,Z(pt,_t)+.4,_t,5,2,It.white,.12)}function Ae(lt){const pt=Z(lt.x,lt.z)+Un+.2;for(let Rt=0;Rt<6;Rt++){const Dt=Rt/6*Math.PI*2;k(lt.x,pt,lt.z,Math.cos(Dt)*1.6,St(1.5,2.6),Math.sin(Dt)*1.6,St(.4,.6),.3,.05,1,Rt%2?It.gold:It.white,1,.8,Qf,.6,2.5,0)}const _t=X();_t&&_t.cup&&it(_t.cup.x,_t.cup.z,Gt.HOLE_R,Gt.HOLE_R+.5,.14,.04,.3,It.gold,.9,.6,0)}function ye(){const lt=X();if(!lt||!lt.cup)return;const pt=lt.cup.x,_t=lt.cup.z;it(pt,_t,Gt.HOLE_R,Gt.HOLE_R*3,.22,.04,.6,It.white,.95,.7,0),it(pt,_t,Gt.HOLE_R,Gt.HOLE_R*2.2,.14,.03,.5,It.gold,.9,.7,0,.12);const Rt=Z(pt,_t)+.2;for(let Dt=0;Dt<12;Dt++){const Kt=Dt/12*Math.PI*2,Wt=St(1.4,2.6);k(pt,Rt,_t,Math.cos(Kt)*Wt,St(3,5.5),Math.sin(Kt)*Wt,St(.5,.8),St(.22,.32),.04,1,Dt%3?It.gold:It.white,1,.8,Qf,.8,1.8,0)}Jt(pt,_t,Math.round(10*c+4),.7)}function Re(lt){if(!lt||lt.picked)return;const pt=lt.level||X();if(!pt||!pt.cup)return;const _t=lt.strokes-lt.par,Rt=lt.strokes===1,Dt=Rt||_t<=-2?150:_t===-1?100:_t===0?60:30,Kt=Math.max(12,Math.round(Dt*c)),Wt=pt.cup.x,Ut=pt.cup.z,Me=Rt||_t<=-2?Math.round(Kt*.4):Kt;Jt(Wt,Ut,Me,_t<=-1||Rt?1.15:.9),(Rt||_t<=-2)&&(ne(.35,1,Wt-2,Ut,Math.round(Kt*.3)),ne(.7,1,Wt+2,Ut,Math.round(Kt*.3)))}const ze=[];e&&e.on&&(ze.push(e.on("shot:fire",le)),ze.push(e.on("ball:contact",ie)),ze.push(e.on("ball:wall",_e)),ze.push(e.on("ball:hazard",we)),ze.push(e.on("ball:hop",Ae)),ze.push(e.on("ball:holed",ye)),ze.push(e.on("hole:done",Re)));let D=0,I=NaN,G=NaN;function et(){if(!n||n.state!=="rolling"||!n.world){I=NaN;return}const lt=n.world.balls[1];if(!lt||lt.mode!=="roll"){I=NaN;return}if(Number.isFinite(I)&&(D+=Math.sqrt((lt.x-I)*(lt.x-I)+(lt.z-G)*(lt.z-G))),I=lt.x,G=lt.z,D<.3||(D=0,K(lt.x,lt.z)!=="sand"))return;const pt=Math.sqrt(lt.vx*lt.vx+lt.vz*lt.vz);if(pt<.4)return;const _t=lt.x-lt.vx/pt*Un*.6,Rt=lt.z-lt.vz/pt*Un*.6;Lt(_t,Rt,2,.4+Math.min(1,pt/8),It.sand,.18,.55)}const Y=[new th,new th];let Et=0;function Nt(lt){if(!n||n.state!=="rolling"||typeof n.balls!="function"||!(lt>0)){Y[0].on=!1,Y[1].on=!1;return}const pt=n.balls();for(let _t=0;_t<2;_t++){const Rt=pt[_t],Dt=Y[_t];if(!Rt||!Rt.visible||Rt.mode!==(_t===0?"cue":"roll")){Dt.on=!1;continue}const Kt=Math.sqrt(Rt.vx*Rt.vx+Rt.vz*Rt.vz),Wt=_t===0?_r(7,14,Kt):_r(5.5,13,Kt);if(!Dt.on){Dt.on=!0,Dt.x=Rt.x,Dt.y=Rt.y,Dt.z=Rt.z;continue}const Ut=Rt.x-Dt.x,Me=Rt.y-Dt.y,ae=Rt.z-Dt.z,Se=Math.sqrt(Ut*Ut+ae*ae);if(Wt<=0||Se>14||Se<1e-4){Dt.x=Rt.x,Dt.y=Rt.y,Dt.z=Rt.z;continue}const Tt=Math.min(.2,Math.max(.045,(1.5+3*Wt)/(Se/lt))),be=Math.min(A2,Math.max(1,Math.ceil(Se/T2))),de=_t===0?It.white:It.streak8,me=2*Un*(.55+.35*Wt),tn=.14+.26*Wt;Et+=be;for(let Ne=1;Ne<=be;Ne++){const pe=Ne/be,xe=L();p[xe]=Dt.x+Ut*pe,w[xe]=Dt.y+Me*pe,M[xe]=Dt.z+ae*pe,y[xe]=0,C[xe]=0,R[xe]=0,b[xe]=Tt*(.7+.3*pe),S[xe]=b[xe],_[xe]=me,v[xe]=me*.25,A[xe]=1,gt[xe]=de[0],ot[xe]=de[1],W[xe]=de[2],z[xe]=tn,q[xe]=.4,j[xe]=Fs,tt[xe]=0,O[xe]=0,$[xe]=0,ht[xe]=0,rt[xe]=0,J[xe]=0,U[xe]=0,F[xe]=1,V[xe]=0}Dt.x=Rt.x,Dt.y=Rt.y,Dt.z=Rt.z}}function Yt(lt){lt=Number.isFinite(lt)&&lt>0?Math.min(lt,.1):0,et(),Nt(lt);for(let Tt=0;Tt<Ct;Tt++)ce[Tt]&&(qt[Tt]-=lt,qt[Tt]<=0&&(ce[Tt]=0,Zt[Tt]===1&&Jt(oe[Tt],jt[Tt],kt[Tt],1.15)));const pt=l.attrs.iPos.array,_t=l.attrs.iRot.array,Rt=l.attrs.iSize.array,Dt=l.attrs.iCol.array;let Kt=0;if(ft>0)for(let Tt=0;Tt<o;Tt++){if(!B[Tt])continue;if(b[Tt]-=lt,b[Tt]<=0){B[Tt]=0,ft--;continue}if(!ht[Tt]){const pe=Math.exp(-O[Tt]*lt);if(y[Tt]*=pe,R[Tt]*=pe,C[Tt]=C[Tt]*pe-E2*tt[Tt]*lt,p[Tt]+=y[Tt]*lt,w[Tt]+=C[Tt]*lt,M[Tt]+=R[Tt]*lt,rt[Tt]+=J[Tt]*lt,j[Tt]===vr&&tt[Tt]>0&&(p[Tt]+=Math.sin(rt[Tt]*.7+Tt)*.4*lt),$[Tt]&&C[Tt]<0){const xe=Z(p[Tt],M[Tt])+.03;if(w[Tt]<=xe){if($[Tt]===2){B[Tt]=0,ft--;continue}w[Tt]=xe,ht[Tt]=1,U[Tt]=1,F[Tt]=0,V[Tt]=0,rt[Tt]=Math.PI/2+St(-.15,.15),b[Tt]>1.2&&(b[Tt]=1.2)}}}const be=1-b[Tt]/S[Tt],de=Math.min(1,be*12),me=ht[Tt]?Math.min(1,b[Tt]/1.2):Math.min(1,b[Tt]/(S[Tt]*.35)),tn=_[Tt]+(v[Tt]-_[Tt])*be,Ne=Kt*4;pt[Ne]=p[Tt],pt[Ne+1]=w[Tt],pt[Ne+2]=M[Tt],pt[Ne+3]=j[Tt],_t[Ne]=U[Tt],_t[Ne+1]=F[Tt],_t[Ne+2]=V[Tt],_t[Ne+3]=rt[Tt],Rt[Ne]=tn,Rt[Ne+1]=tn*A[Tt],Rt[Ne+2]=q[Tt],Rt[Ne+3]=0,Dt[Ne]=gt[Tt],Dt[Ne+1]=ot[Tt],Dt[Ne+2]=W[Tt],Dt[Ne+3]=z[Tt]*de*me,Kt++}if(l.geo.instanceCount=Kt,Kt>0)for(let Tt=0;Tt<hc.length;Tt++){const be=l.attrs[hc[Tt]],de=x[Tt];de.count=Kt*4,nh(be,de)}d.visible=Kt>0;const Wt=f.attrs.iRing.array,Ut=f.attrs.iRingN.array,Me=f.attrs.iRingC.array,ae=f.attrs.iRingF.array;let Se=0;for(let Tt=0;Tt<a;Tt++){if(!Ft[Tt])continue;if(P[Tt]>0){P[Tt]-=lt;continue}$t[Tt]+=lt;const be=$t[Tt]/T[Tt];if(be>=1){Ft[Tt]=0;continue}const de=1-(1-be)*(1-be)*(1-be),me=Se*4;Wt[me]=Mt[Tt],Wt[me+1]=Pt[Tt],Wt[me+2]=nt[Tt],Wt[me+3]=zt[Tt]+(Qt[Tt]-zt[Tt])*de,Ut[me]=mt[Tt],Ut[me+1]=H[Tt],Ut[me+2]=Q[Tt],Ut[me+3]=Ht[Tt]+(te[Tt]-Ht[Tt])*be,Me[me]=ut[Tt],Me[me+1]=dt[Tt],Me[me+2]=bt[Tt],Me[me+3]=yt[Tt]*(1-be*be),ae[Se*2]=Xt[Tt],ae[Se*2+1]=Bt[Tt]*(1-be),Se++}if(f.geo.instanceCount=Se,Se>0)for(let Tt=0;Tt<dc.length;Tt++){const be=f.attrs[dc[Tt]],de=m[Tt];de.count=Se*be.itemSize,nh(be,de)}g.visible=Se>0}function Vt(){B.fill(0),Ft.fill(0),ce.fill(0),ft=0,D=0,I=NaN,Y[0].on=!1,Y[1].on=!1,l.geo.instanceCount=0,f.geo.instanceCount=0,d.visible=!1,g.visible=!1}function se(){for(const lt of ze)typeof lt=="function"&&lt();s.remove(d,g),l.geo.dispose(),f.geo.dispose(),u.dispose(),h.dispose()}return{update:Yt,clear:Vt,dispose:se,get count(){return l.geo.instanceCount},get ringCount(){return f.geo.instanceCount},get streaks(){return Et}}}const Yn=Gt.R,Al=.04,pc=220,mc=120,D2=.2,sh={halfW:.27,haloW:.08,period:1,speed:2,startGap:Yn+.1},rh={halfW:.42,haloW:.09,startGap:Yn+.12},z2=.95,N2=1.55,U2=Yn+.22,F2=.85,bn={rest:On.rest,travel:On.travel,elev:On.elevDeg*Math.PI/180,hold:On.hold,fadeFar:On.fadeFar,fadeNear:On.fadeNear},oh=Ce.eightArrow,ah=.75;class Be{constructor(t){this.value=t}}const O2=`
attribute float aDist;
attribute float aSide;
varying float vDist;
varying float vSide;
void main() {
  vDist = aDist;
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,k2=`
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
}`,B2=`
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
}`,H2=`
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
const float BALL_R = ${Yn.toFixed(3)};

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
}`;function ch(i,t){return new _n({uniforms:{uColor:{value:new he(t.color)},uHalo:{value:new he(Ce.guideHalo)},uHaloAlpha:new Be(t.haloAlpha),uHalfW:new Be(t.halfW),uHaloW:new Be(t.haloW),uLen:new Be(1),uStartGap:new Be(t.startGap),uEndGap:new Be(0),uFadeLen:new Be(0),uPeriod:new Be(t.period||1),uSpeed:new Be(t.speed||0),uTime:i,uOpacity:new Be(1),uArrow:new Be(t.arrow?1:0),uHead:new Be(1),uStub:new Be(1e6),uScale:new Be(1)},vertexShader:O2,fragmentShader:k2,transparent:!0,depthWrite:!1,toneMapped:!1,side:An,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function lh(i,t){const e=i*2,n=new je,s=new Float32Array(e*6),r=new Float32Array(e*2),o=new Float32Array(e*2);for(let d=0;d<e;d++)o[d*2]=-1,o[d*2+1]=1;const a=new Uint16Array((e-1)*6);for(let d=0;d<e-1;d++){const f=d*2;a[d*6]=f,a[d*6+1]=f+1,a[d*6+2]=f+2,a[d*6+3]=f+1,a[d*6+4]=f+3,a[d*6+5]=f+2}n.setIndex(new Ye(a,1));const c=new Ye(s,3).setUsage(ki),l=new Ye(r,1).setUsage(ki);n.setAttribute("position",c),n.setAttribute("aDist",l),n.setAttribute("aSide",new Ye(o,1)),n.setDrawRange(0,0),n.boundingSphere=new qi(new st,1e4);const u=new Ve(n,t);return u.frustumCulled=!1,{mesh:u,geo:n,pos:s,dist:r,posAttr:c,distAttr:l,maxPairs:e,len:0,pairs:0}}function gc(i,t,e,n,s,r,o,a){const c=i.pos,l=t*6,u=e-s,d=n-r,f=e+s,h=n+r;return c[l]=u,c[l+1]=a(u,d)+Al,c[l+2]=d,c[l+3]=f,c[l+4]=a(f,h)+Al,c[l+5]=h,i.dist[t*2]=o,i.dist[t*2+1]=o,t+1}function uh(i,t,e,n,s){let r=0,o=0;for(let a=0;a<e&&r<i.maxPairs-1;a++){const c=t[a*2],l=t[a*2+1];let u=0,d=0,f=0,h=0;if(a>0){u=c-t[a*2-2],d=l-t[a*2-1];const x=Math.sqrt(u*u+d*d);o+=x,x>0&&(u/=x,d/=x)}if(a<e-1){f=t[a*2+2]-c,h=t[a*2+3]-l;const x=Math.sqrt(f*f+h*h);x>0&&(f/=x,h/=x)}if(a===0&&(u=f,d=h),a===e-1&&(f=u,h=d),u*f+d*h>.6){let x=-(d+h),m=u+f;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const w=-x*d+m*u,M=s/(w>.8?w:.8);r=gc(i,r,c,l,x*M,m*M,o,n)}else r=gc(i,r,c,l,-d*s,u*s,o,n),r=gc(i,r,c,l,-h*s,f*s,o,n)}return i.pairs=r,i.len=o>.001?o:.001,i.posAttr.needsUpdate=!0,i.distAttr.needsUpdate=!0,i.geo.setDrawRange(0,r>1?(r-1)*6:0),i.len}function fh(i,t,e,n){const s=i.length>>1;if(s<1)return 0;let r=0;e[0]=i[0],e[1]=i[1],r=1;let o=0,a=i[0],c=i[1];for(let l=1;l<s;l++){const u=i[l*2],d=i[l*2+1],f=u-a,h=d-c,g=Math.sqrt(f*f+h*h);if(g<1e-6)continue;o+=g;let x=!1;if(l<s-1){const p=i[l*2+2]-u,w=i[l*2+3]-d,M=Math.sqrt(p*p+w*w);M>1e-6&&(x=(f*p+h*w)/(g*M)<.995)}const m=l===s-1;if(m||x||o>=t||r>=n-1){if(r>=n-1&&!m){a=u,c=d;continue}e[r*2]=u,e[r*2+1]=d,r++,o=0}a=u,c=d}return r===1&&s>1&&(e[2]=i[s*2-2],e[3]=i[s*2-1],r=2),r}const Bd=0,G2=1,V2=2,W2=3,X2=[0,3,1,2],q2=[64,8,6,6];function Y2(i){const t=[];let e=0,n=0;for(let p=0;p<4;p++){const w=q2[p];t.push({seg:w,v0:e,count:(w+1)*(w+1),half:1,cx:NaN,cz:NaN}),e+=(w+1)*(w+1),n+=w*w*2}const s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Float32Array(e),a=new Float32Array(e),c=new Uint16Array(n*3);let l=0;for(let p=0;p<4;p++){const{seg:w,v0:M,count:y}=t[p];for(let C=0;C<y;C++)o[M+C]=X2[p];for(let C=0;C<w;C++)for(let R=0;R<w;R++){const b=M+C*(w+1)+R,S=b+1,_=b+w+1,v=_+1;c[l++]=b,c[l++]=_,c[l++]=S,c[l++]=S,c[l++]=_,c[l++]=v}}const u=new je,d=new Ye(s,3).setUsage(ki),f=new Ye(r,2).setUsage(ki),h=new Ye(a,1).setUsage(ki);u.setAttribute("position",d),u.setAttribute("aLocal",f),u.setAttribute("aKind",new Ye(o,1)),u.setAttribute("aMask",h),u.setIndex(new Ye(c,1)),u.boundingSphere=new qi(new st,1e4);const g={uTime:i,uOpacity:new Be(1),uPlaceR:new Be(4),uDashes:new Be(24),uActive:new Be(0),uRingA:new Be(1),uGhostA:new Be(0),uMarkA:new Be(0),uMarkKind:new Be(0),uHintA:new Be(0),uFwd:{value:new re(0,-1)},uNormal:{value:new re(1,0)},uWhite:{value:new he(Ce.guideWhite)},uShade:{value:new he(Ce.guideHalo)},uWarn:{value:new he(Ce.guideWarn)}},x=new _n({uniforms:g,vertexShader:B2,fragmentShader:H2,transparent:!0,depthWrite:!1,toneMapped:!1,side:An,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),m=new Ve(u,x);return m.frustumCulled=!1,m.renderOrder=5,{mesh:m,geo:u,mat:x,uniforms:g,parts:t,pos:s,local:r,mask:a,posAttr:d,localAttr:f,maskAttr:h}}function zo(i,t,e,n,s,r){const o=i.parts[t],{seg:a,v0:c}=o,l=i.pos,u=i.local;for(let d=0;d<=a;d++){const f=d/a*2*s-s;for(let h=0;h<=a;h++){const g=h/a*2*s-s,x=c+d*(a+1)+h,m=e+g,p=n+f;l[x*3]=m,l[x*3+1]=r(m,p)+Al,l[x*3+2]=p,u[x*2]=g,u[x*2+1]=f}}o.cx=e,o.cz=n,o.half=s,i.posAttr.needsUpdate=!0,i.localAttr.needsUpdate=!0}function Bs(i,t,e,n,s,r,o){const a=e+s*o,c=n+r*o;return!!t(a,c)||Vh(i,e,n,a,c)}function No(i,t,e,n,s,r,o,a){for(let c=0;c<6;c++){const l=(o+a)*.5;Bs(i,t,e,n,s,r,l)?a=l:o=l}return(o+a)*.5}function K2(i,t,e,n,s){const r=i.parts[Bd],{seg:o,v0:a,half:c}=r,l=i.local,u=i.mask,d=2*c/o,f=.5/d;for(let h=a,g=a+r.count;h<g;h++){const x=l[h*2],m=l[h*2+1],p=Math.sqrt(x*x+m*m);if(p>c){u[h]=1;continue}if(p<1e-6){u[h]=0;continue}const w=x/p,M=m/p,y=p>d?p-d:0,C=p+d;let R;Bs(t,e,n,s,w,M,p)?Bs(t,e,n,s,w,M,y)?Bs(t,e,n,s,w,M,C)?R=1:R=.5+(No(t,e,n,s,w,M,C,p)-p)*f:R=.5+(p-No(t,e,n,s,w,M,y,p))*f:Bs(t,e,n,s,w,M,C)?R=.5-(No(t,e,n,s,w,M,p,C)-p)*f:y>0&&Bs(t,e,n,s,w,M,y)?R=.5-(p-No(t,e,n,s,w,M,p,y))*f:R=0,u[h]=R<0?0:R>1?1:R}i.maskAttr.needsUpdate=!0}function $2(){const a=[[0,0,4030425],[0,.07,4030425],[.025,.1,4030425],[.07,.104,4030425],[.07,.104,16183516],[.24,.107,16183516],[.24,.107,15320720],[3.4,.15,15320720],[3.4,.155,16183516],[3.48,.155,16183516],[3.48,.156,7027231],[4.7,.18,7027231],[4.7,.182,16763196],[4.8,.183,16763196],[4.8,.184,2302763],[5.9,.19,2302763],[5.9,.192,7027231],[6.35,.196,7027231],[6.35,.196,1447452],[6.43,.17,1447452],[6.43,0,1447452]],c=14,l=a.length*c,u=new Float32Array(l*3),d=new Float32Array(l*3),f=new he;for(let y=0;y<a.length;y++){const[C,R,b]=a[y];f.setHex(b);for(let S=0;S<c;S++){const _=S/c*Math.PI*2,v=(y*c+S)*3;u[v]=C,u[v+1]=Math.cos(_)*R,u[v+2]=Math.sin(_)*R,d[v]=f.r,d[v+1]=f.g,d[v+2]=f.b}}const h=[];for(let y=0;y<a.length-1;y++)for(let C=0;C<c;C++){const R=y*c+C,b=y*c+(C+1)%c,S=R+c,_=b+c;h.push(R,b,S,b,_,S)}const g=new je;g.setAttribute("position",new Ye(u,3)),g.setAttribute("color",new Ye(d,3)),g.setIndex(h),g.computeVertexNormals();const x=g.attributes.normal.array;for(let y=0;y<x.length;y++)x[y]!==x[y]&&(x[y]=0);g.computeBoundingSphere();const m=new z_({vertexColors:!0,roughness:.42,metalness:0,transparent:!0,depthWrite:!0}),p=new Be(0),w=new Be(.001);m.onBeforeCompile=y=>{y.uniforms.uFadeA=p,y.uniforms.uFadeB=w,y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFadeA;
uniform float uFadeB;`).replace("#include <color_fragment>",["#include <color_fragment>","diffuseColor.a *= smoothstep( uFadeA, uFadeB, length( vViewPosition ) );","if ( diffuseColor.a < 0.01 ) discard;"].join(`
`))},m.customProgramCacheKey=()=>"cue-fade-v1";const M=new Ve(g,m);return M.castShadow=!1,M.receiveShadow=!1,M.frustumCulled=!1,M.renderOrder=20,M.userData.fadeA=p,M.userData.fadeB=w,M}function j2(i){const t=new Be(0),e=new us;e.name="guides";const n=Y2(t),s=ch(t,{color:Ce.guideWhite,haloAlpha:.6,...sh}),r=ch(t,{color:oh,haloAlpha:.7,arrow:!0,...rh}),o=lh(pc,s),a=lh(mc,r);o.mesh.renderOrder=10,a.mesh.renderOrder=11;const c=$2();e.add(n.mesh,o.mesh,a.mesh,c),i&&i.scene&&i.scene.add(e);const l=new Float64Array(Math.max(pc,mc)*2),u=new he(Ce.guideWhite),d=new he(Ce.guideWarn),f=new he(oh),h=new st(1,0,0),g=new st,x=n.uniforms,m={visible:!0,fade:0,t:0,lastState:"idle",level:null,intent:null,guide:null,ringX:NaN,ringZ:NaN,hintA:0,arrowK:1,gap:1.4,hold:0,aimX:1,aimZ:0,spin:0,top:0,ballX:0,ballZ:0,aimKey:0,poseKey:-1,poseGap:NaN};function p(){n.mesh.visible=!1,o.mesh.visible=!1,a.mesh.visible=!1}p(),c.visible=!1;function w(S,_){const A=S.level.heightAt,U=_&&_.cue;if(!U||U.points.length<4)o.geo.setDrawRange(0,0),x.uGhostA.value=0;else{const ot=fh(U.points,D2,l,pc),W=uh(o,l,ot,A,sh.halfW),z=s.uniforms;z.uLen.value=W,z.uColor.value.copy(_.warn?d:u),z.uEndGap.value=U.hit?Yn*.9:0,z.uFadeLen.value=U.hit?0:Math.min(3,W*.4),U.hit?(x.uGhostA.value=1,zo(n,V2,U.ghost.x,U.ghost.z,U2,A),x.uNormal.value.set(U.normal.x,U.normal.z)):x.uGhostA.value=0}const F=_&&_.eight;if(!F||F.points.length<4){a.geo.setDrawRange(0,0),x.uMarkA.value=0;return}const V=fh(F.points,.25,l,mc),rt=uh(a,l,V,A,rh.halfW),J=r.uniforms;J.uLen.value=rt;let gt=1e6;if(F.bounce){let ot=0;for(let W=1;W<V;W++){const z=l[W*2]-l[W*2-2],q=l[W*2+1]-l[W*2-1];if(ot+=Math.sqrt(z*z+q*q),Math.abs(l[W*2]-F.bounce.x)<1e-6&&Math.abs(l[W*2+1]-F.bounce.z)<1e-6){gt=ot;break}}}if(J.uStub.value=gt,F.hazard){J.uColor.value.copy(d),J.uHead.value=0,J.uEndGap.value=.62,x.uMarkA.value=1,x.uMarkKind.value=F.hazard==="water"?0:1;const ot=(V-1)*2;zo(n,W2,l[ot],l[ot+1],z2,A)}else J.uColor.value.copy(f),J.uHead.value=1,J.uEndGap.value=0,x.uMarkA.value=0}function M(S,_,v){if(v)m.gap=-.02;else if(ve.strike>=0){const z=bn.rest+ve.pull*bn.travel,q=ve.strike;m.gap=z+(-.02-z)*q*q}else if(ve.pulling)m.gap=bn.rest+ve.pull*bn.travel;else if(m.gap!==bn.rest){const z=_*12>1?1:_*12;m.gap+=(bn.rest-m.gap)*z,Math.abs(m.gap-bn.rest)<.001&&(m.gap=bn.rest)}if(m.gap===m.poseGap&&m.poseKey===m.aimKey)return;m.poseGap=m.gap,m.poseKey=m.aimKey;const A=m.spin*Yn*.55,U=m.top*Yn*.55,F=Math.sqrt(Math.max(Yn*Yn-A*A-U*U,0))+m.gap,V=m.aimX,rt=m.aimZ,J=m.ballX-V*F-rt*A,gt=m.ballZ-rt*F+V*A,ot=S.level.heightAt(m.ballX,m.ballZ)+Yn+U,W=Math.cos(bn.elev);g.set(-V*W,Math.sin(bn.elev),-rt*W),c.quaternion.setFromUnitVectors(h,g),c.position.set(J,ot,gt)}function y(S){const _=i&&i.camera;if(!_||!S||!S.level)return;const v=_.position,A=v.x-m.ballX,U=v.y-(S.level.heightAt(m.ballX,m.ballZ)+Yn),F=v.z-m.ballZ,V=Math.sqrt(A*A+U*U+F*F),rt=V*bn.fadeNear,J=V*bn.fadeFar+.001,gt=c.userData.fadeA,ot=c.userData.fadeB;gt.value!==rt&&(gt.value=rt),ot.value!==J&&(ot.value=J)}function C(S){const _=Math.sqrt(S.dx*S.dx+S.dz*S.dz)||1;m.aimX=S.dx/_,m.aimZ=S.dz/_,m.spin=S.spin,m.top=Number.isFinite(S.top)?S.top:0,m.ballX=S.x,m.ballZ=S.z,m.aimKey++}function R(S,_){m.t+=_,t.value=m.t;const v=S?S.state:"idle",A=!!(S&&S.world&&S.level&&v==="ready");m.lastState==="ready"&&v==="rolling"&&(m.hold=bn.hold),v!==m.lastState&&v==="ready"&&(m.gap=1.4,m.intent=null),m.lastState=v;const U=m.visible&&A&&ve.enabled;if(U?m.fade=m.fade+_/.18>1?1:m.fade+_/.18:m.fade=0,U?c.visible=!0:m.hold>0&&m.visible&&S&&S.level?(m.hold-=_,c.visible=m.hold>0):(m.hold=0,c.visible=!1),!U){p(),c.visible&&(M(S,_,!0),y(S));return}const F=S.level;F!==m.level&&(m.level=F,m.aimKey++,m.ringX=NaN,m.intent=null,m.guide=null,x.uPlaceR.value=F.placeR,x.uDashes.value=Math.max(12,Math.round(2*Math.PI*F.placeR/1.25)));const V=S.world.balls[1];(V.x!==m.ringX||V.z!==m.ringZ)&&(m.ringX=V.x,m.ringZ=V.z,zo(n,Bd,V.x,V.z,F.placeR+F2,F.heightAt),K2(n,S.world,F.hazardAt,V.x,V.z));const rt=S.intent;if(rt!==m.intent){m.intent=rt,C(rt),zo(n,G2,rt.x,rt.z,N2,F.heightAt);const z=S.guide();z!==m.guide&&(m.guide=z,w(S,z))}const J=m.fade;x.uOpacity.value!==J&&(x.uOpacity.value=J,s.uniforms.uOpacity.value=J,r.uniforms.uOpacity.value=J),x.uActive.value=ve.placing?1:0;const gt=S.intent.power,ot=ah+(1-ah)*(gt>1?1:gt>0?gt:0);if(m.arrowK!==ot){const z=_*14>1?1:_*14;m.arrowK+=(ot-m.arrowK)*z,Math.abs(m.arrowK-ot)<.001&&(m.arrowK=ot),r.uniforms.uScale.value=m.arrowK}const W=ve.placing?0:ve.hint;if(m.hintA!==W){const z=_*4>1?1:_*4;m.hintA+=(W-m.hintA)*z,Math.abs(m.hintA-W)<.002&&(m.hintA=W),x.uHintA.value=m.hintA}if(i&&i.camera){const z=i.camera.matrixWorld.elements,q=Math.sqrt(z[8]*z[8]+z[10]*z[10]);if(q>1e-4){const j=-z[8]/q,tt=-z[10]/q,O=x.uFwd.value;(j!==O.x||tt!==O.y)&&O.set(j,tt)}}n.mesh.visible=!0,o.mesh.visible=o.geo.drawRange.count>0,a.mesh.visible=a.geo.drawRange.count>0,M(S,_,!1),y(S)}const b={update:R,setVisible(S){m.visible=!!S},dispose(){e.parent&&e.parent.remove(e),n.geo.dispose(),n.mat.dispose(),o.geo.dispose(),a.geo.dispose(),s.dispose(),r.dispose(),c.geometry.dispose(),c.material.dispose()}};return Object.defineProperty(b,"_debug",{value:{group:e,decals:n,cuePath:o,arrow:a,stick:c,cueMat:s,arrowMat:r,st:m},enumerable:!1}),b}const hh="ebg-shot-style",Z2=6,Hd=30,dh=14,Er=100,Tr=100,Ar=122,ia=92,Cr=22,Gd=ia/2-Cr/2-4,Mr=ia/2-Gd,J2=20,Q2=10,tS=6,eS=10,ph=8,nS=`
.ebg-shot{position:absolute;inset:0;z-index:20;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .16s ease,visibility 0s linear .16s;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;font-family:"Fredoka",system-ui,sans-serif;font-weight:600;color:#fff;--top:${Hd}px;--travel:150px}
.ebg-shot.on{opacity:1;visibility:visible;transition:opacity .2s ease}
.ebg-txt{-webkit-text-stroke:4px #13261b;paint-order:stroke fill;text-shadow:0 2px 0 rgba(0,0,0,.25)}
@supports not (paint-order:stroke){.ebg-txt{-webkit-text-stroke:0;text-shadow:0 0 2px #13261b,0 0 2px #13261b,0 2px 0 #13261b}}
.ebg-num{font-family:"Lilita One",system-ui,sans-serif;font-weight:400;letter-spacing:.02em}
.ebg-pow{position:absolute;left:0;top:0;width:${Er}px;height:200px;pointer-events:none}
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
.ebg-spin{position:absolute;left:0;top:0;box-sizing:border-box;width:${Tr}px;height:${Ar}px;display:none;flex-direction:column;align-items:center;justify-content:flex-end;padding:4px;pointer-events:auto;touch-action:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:move}
.ebg-spin.on{display:flex}
.ebg-spin.drag{cursor:grabbing}
.ebg-spin-label{font-size:14px;line-height:1;letter-spacing:.08em;margin-bottom:6px}
.ebg-spin-face{position:relative;flex:none;width:${ia}px;height:${ia}px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffffff 0,#fffdf4 38%,#e6dfca 100%);box-shadow:0 0 0 3px #13261b,0 4px 8px rgba(0,0,0,.3)}
.ebg-spin-ring{position:absolute;inset:${Mr}px;border-radius:50%;border:2px dashed rgba(19,38,27,.2)}
.ebg-spin-h,.ebg-spin-v{position:absolute;border-radius:1px;background:rgba(19,38,27,.2)}
.ebg-spin-h{left:${Mr}px;right:${Mr}px;top:50%;height:2px;margin-top:-1px}
.ebg-spin-v{top:${Mr}px;bottom:${Mr}px;left:50%;width:2px;margin-left:-1px}
.ebg-spin-mid{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:rgba(19,38,27,.35)}
.ebg-spin-dot{position:absolute;left:50%;top:50%;width:${Cr}px;height:${Cr}px;margin:-${Cr/2}px 0 0 -${Cr/2}px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#6ea3ec 0,#3d7fd9 60%,#2f69b8 100%);box-shadow:0 0 0 3px #fff,0 0 0 5px #13261b;transition:transform .14s ease-out}
.ebg-spin.drag .ebg-spin-dot{transition:none}
.ebg-ff{position:absolute;z-index:20;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom) + 12px));transform:translateX(-50%);padding:6px 16px;border-radius:999px;background:rgba(16,36,26,.5);font-family:"Fredoka",system-ui,sans-serif;font-weight:600;font-size:16px;line-height:1.2;color:#fff;opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s linear .25s,background .15s;pointer-events:none;white-space:nowrap;-webkit-user-select:none;user-select:none}
.ebg-ff.show,.ebg-ff.on{opacity:1;visibility:visible;transition:opacity .25s,background .15s}
.ebg-ff.on{background:rgba(255,138,42,.9)}
.ebg-safe{position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}
`,iS='<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7" stroke="#13261b" stroke-width="8"/><path d="M5 8l7 7 7-7" stroke="#fff" stroke-width="4"/></g></svg>';function We(i,t,e,n){const s=document.createElement(i);return t&&(s.className=t),n&&(s.textContent=n),e&&e.appendChild(s),s}function sS(i,t,e={top:0,right:0,bottom:0,left:0},n=!1){const s=t>i,r=s?Math.max(90,Math.min(170,Math.round(t*.22))):Math.max(110,Math.min(210,Math.round(t*.3))),o=Hd+r+dh,a=Math.max(tS,e.bottom),c=Math.max(Q2,e.right+6);let l,u=null;const d={top:0,right:0,bottom:0,left:0};if(s){l={left:Math.round(i/2-Er/2),top:t-a-o,width:Er,height:o},n&&(u={left:i-c-Tr,top:t-a-dh-Ar,width:Tr,height:Ar});const f=Math.min(l.top,u?u.top:1/0);d.bottom=t-f+ph}else{l={left:i-c-Er,top:t-a-o,width:Er,height:o},n&&(u={left:i-c-Tr,top:l.top-eS-Ar,width:Tr,height:Ar});const f=Math.min(l.left,u?u.left:1/0);d.right=i-f+ph}return{portrait:s,travel:r,pow:l,spin:u,insets:d}}function rS(i,t={}){if(typeof document>"u"||!i){const T=()=>{},P={top:0,right:0,bottom:0,left:0};return{setVisible:T,setSpinEnabled:T,setSpin:T,setPull:T,setPreset:T,setPullHint:T,setFastForward:T,cancelPull:T,travel:()=>150,insets:()=>P,layout:T,parts:{},dispose:T}}if(!document.getElementById||!document.getElementById(hh)){const T=We("style");T.id=hh,T.textContent=nS,(document.head||document.body).appendChild(T)}const e=We("div","ebg-shot",i),n=We("div","ebg-safe",e),s=We("div","ebg-pow",e),r=We("div","ebg-clip",s),o=We("div","ebg-track",r),a=We("div","ebg-fill",o);for(const T of[.25,.5,.75]){const P=We("div","ebg-tick",o);P.style.top=T*100+"%"}const c=We("div","ebg-last",o),l=We("div","ebg-cue",r),u=We("div","ebg-pct ebg-txt ebg-num",s,"0%"),d=We("div","ebg-hint ebg-txt",s);We("span","",d,"Pull");const f=We("span","",d);f.innerHTML=iS;const h=We("div","ebg-grab",s);h.setAttribute("aria-label","Pull the cue down to shoot");const g=We("div","ebg-spin",e);g.setAttribute("aria-label","Spin: drag the dot sideways to curve, up or down to choose where the curve happens"),We("span","ebg-spin-label ebg-txt",g,"SPIN");const x=We("div","ebg-spin-face",g);We("div","ebg-spin-ring",x),We("div","ebg-spin-h",x),We("div","ebg-spin-v",x),We("div","ebg-spin-mid",x);const m=We("div","ebg-spin-dot",x),p=We("div","ebg-ff ebg-txt",i,"Hold to speed up");for(const T of[h,g])T.style.touchAction="none",T.style.webkitTouchCallout="none";let w=null,M=!1,y={top:0,right:0,bottom:0,left:0};const C=Gd;function R(){const T={top:0,right:0,bottom:0,left:0};try{if(typeof getComputedStyle=="function"){const P=getComputedStyle(n);T.top=parseFloat(P.paddingTop)||0,T.right=parseFloat(P.paddingRight)||0,T.bottom=parseFloat(P.paddingBottom)||0,T.left=parseFloat(P.paddingLeft)||0}}catch{}return T}const b=T=>Math.round(T)+"px";function S(){const T=typeof window<"u"&&window.innerWidth?window.innerWidth:800,P=typeof window<"u"&&window.innerHeight?window.innerHeight:450;w=sS(T,P,R(),M),e.style.setProperty("--travel",w.travel+"px"),s.style.left=b(w.pow.left),s.style.top=b(w.pow.top),s.style.width=b(w.pow.width),s.style.height=b(w.pow.height),w.spin&&(g.style.left=b(w.spin.left),g.style.top=b(w.spin.top));const ut=w.insets,dt=y;(ut.top!==dt.top||ut.right!==dt.right||ut.bottom!==dt.bottom||ut.left!==dt.left)&&(y=ut,t.onInsets&&t.onInsets({...ut}))}typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",S),window.addEventListener("orientationchange",S));let _=!1,v="idle",A=0,U=0,F=0,V=0,rt=!1;function J(T,P){A=T<0?0:T>1?1:T,P!==v&&(v=P,s.className="ebg-pow"+(P==="pull"?" pull":P==="strike"?" strike":""),u.className="ebg-pct ebg-txt ebg-num"+(P==="pull"?" show":P==="cancel"?" show fade":""));const ut=P==="strike"?0:A*w.travel;l.style.transform="translateY("+ut.toFixed(1)+"px)",u.style.transform="translateY("+ut.toFixed(1)+"px)",a.style.setProperty("--p",P==="strike"?"0":A.toFixed(4)),u.textContent=(P==="cancel"?0:Math.round(A*100))+"%",P==="pull"&&rt&&gt(!1)}function gt(T){T=!!T,T!==rt&&(rt=T,d.className="ebg-hint ebg-txt"+(T?" show":""))}function ot(T,P){let ut=Number.isFinite(T)?T:0,dt=P===void 0?F:Number.isFinite(P)?P:0;const bt=Math.sqrt(ut*ut+dt*dt);bt>1&&(ut/=bt,dt/=bt),U=ut,F=dt,m.style.transform="translate("+(ut*C).toFixed(1)+"px,"+(-dt*C).toFixed(1)+"px)"}const W=new Set;function z(T){return!t.ballDown||!t.ballDown(T)?!1:(W.add(T.pointerId),!0)}function q(T,P){if(!W.has(T.pointerId))return!1;P!=="move"&&W.delete(T.pointerId);const ut=P==="move"?t.ballMove:P==="up"?t.ballUp:t.ballCancel;return ut&&ut(T),!0}let j=null;function tt(T){if(!(T.pointerType==="mouse"&&T.button!==0)&&(T.preventDefault&&T.preventDefault(),!(j||W.has(T.pointerId))&&!z(T)&&!(!t.onPullStart||!t.onPullStart(T.pointerId,T.pointerType)))){j={id:T.pointerId,y0:T.clientY,t:0};try{h.setPointerCapture(T.pointerId)}catch{}}}function O(T){if(q(T,"move")||!j||T.pointerId!==j.id)return;const P=T.clientY-j.y0-Z2,ut=P<=0?0:P>=w.travel?1:P/w.travel;j.t=ut,t.onPull&&t.onPull(ut)}function $(T,P){if(!j||T.pointerId!==j.id)return;P||O(T);const ut=j.t;j=null;try{h.releasePointerCapture(T.pointerId)}catch{}t.onPullEnd&&t.onPullEnd(ut,P)}const ht=T=>{q(T,"up")||$(T,!1)},B=T=>{q(T,"cancel")||$(T,!0)},at=T=>{j&&T.pointerId===j.id&&T.target!==h&&O(T)},ft=T=>{j&&T.pointerId===j.id&&T.target!==h&&$(T,!1)},Mt=T=>{j&&T.pointerId===j.id&&T.target!==h&&$(T,!0)},Pt=T=>{T.cancelable&&T.preventDefault&&T.preventDefault()};h.addEventListener("pointerdown",tt),h.addEventListener("pointermove",O),h.addEventListener("pointerup",ht),h.addEventListener("pointercancel",B),typeof window<"u"&&window.addEventListener&&(window.addEventListener("pointermove",at),window.addEventListener("pointerup",ft),window.addEventListener("pointercancel",Mt)),h.addEventListener("touchstart",Pt,{passive:!1}),h.addEventListener("touchmove",Pt,{passive:!1}),h.addEventListener("contextmenu",Pt);let nt=null,mt={t:-1e9,x:0,y:0};const H={x:0,y:0};function Q(T,P){const ut=x.getBoundingClientRect();let dt=(T+nt.offX-(ut.left+ut.width/2))/C,bt=-(P+nt.offY-(ut.top+ut.height/2))/C;const yt=Math.sqrt(dt*dt+bt*bt);return yt>1&&(dt/=yt,bt/=yt),H.x=dt,H.y=bt,H}function zt(T){if(T.pointerType==="mouse"&&T.button!==0||(T.preventDefault&&T.preventDefault(),nt||W.has(T.pointerId))||z(T))return;const P=T.timeStamp||0;if(P-mt.t<320&&Math.abs(T.clientX-mt.x)<24&&Math.abs(T.clientY-mt.y)<24){mt.t=-1e9,t.onSpin&&t.onSpin(0,0,"reset");return}const dt=x.getBoundingClientRect(),bt=dt.left+dt.width/2+U*C,yt=dt.top+dt.height/2-F*C,Xt=Math.hypot(T.clientX-bt,T.clientY-yt)<=J2;nt={id:T.pointerId,offX:Xt?bt-T.clientX:0,offY:Xt?yt-T.clientY:0,sx:T.clientX,sy:T.clientY,ts:P},g.className="ebg-spin on drag";try{g.setPointerCapture(T.pointerId)}catch{}const Bt=Q(T.clientX,T.clientY);t.onSpin&&t.onSpin(Bt.x,Bt.y,"start")}function Qt(T){if(q(T,"move")||!nt||T.pointerId!==nt.id)return;const P=Q(T.clientX,T.clientY);t.onSpin&&t.onSpin(P.x,P.y,"move")}function Ht(T){if(q(T,"up")||!nt||T.pointerId!==nt.id)return;const P=Q(T.clientX,T.clientY);mt=Math.abs(T.clientX-nt.sx)<6&&Math.abs(T.clientY-nt.sy)<6?{t:nt.ts,x:nt.sx,y:nt.sy}:{t:-1e9,x:0,y:0},nt=null,g.className="ebg-spin on";try{g.releasePointerCapture(T.pointerId)}catch{}t.onSpin&&t.onSpin(P.x,P.y,"end")}function te(T){q(T,"cancel")||!nt||T.pointerId!==nt.id||(nt=null,g.className="ebg-spin on",t.onSpin&&t.onSpin(U,F,"end"))}g.addEventListener("pointerdown",zt),g.addEventListener("pointermove",Qt),g.addEventListener("pointerup",Ht),g.addEventListener("pointercancel",te),g.addEventListener("touchstart",Pt,{passive:!1}),g.addEventListener("touchmove",Pt,{passive:!1}),g.addEventListener("contextmenu",Pt);const $t={setVisible(T){T=!!T,T!==_&&(_=T,e.className="ebg-shot"+(T?" on":""))},setSpinEnabled(T){T=!!T,T!==M&&(M=T,g.className="ebg-spin"+(T?" on":""),S())},setSpin:ot,setPull:J,setPreset(T){const P=T<0?0:T>1?1:T;c.style.top=(P*100).toFixed(2)+"%"},setPullHint:gt,setFastForward(T){T!==V&&(V=T,p.className="ebg-ff ebg-txt"+(T===1?" show":T===2?" on":""),p.textContent=T===2?"▶▶ 3×":"Hold to speed up")},cancelPull(){if(j){try{h.releasePointerCapture(j.id)}catch{}j=null}nt&&(nt=null,g.className="ebg-spin"+(M?" on":"")),W.clear()},travel:()=>w.travel,insets:()=>({...y}),layout:S,parts:{root:e,pow:s,grab:h,spin:g,face:x,dot:m,pct:u,hint:d,ff:p,cue:l,fill:a,last:c},dispose(){typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",S),window.removeEventListener("orientationchange",S)),h.removeEventListener("pointerdown",tt),h.removeEventListener("pointermove",O),h.removeEventListener("pointerup",ht),h.removeEventListener("pointercancel",B),window.removeEventListener("pointermove",at),window.removeEventListener("pointerup",ft),window.removeEventListener("pointercancel",Mt),h.removeEventListener("touchstart",Pt),h.removeEventListener("touchmove",Pt),h.removeEventListener("contextmenu",Pt),g.removeEventListener("pointerdown",zt),g.removeEventListener("pointermove",Qt),g.removeEventListener("pointerup",Ht),g.removeEventListener("pointercancel",te),g.removeEventListener("touchstart",Pt),g.removeEventListener("touchmove",Pt),g.removeEventListener("contextmenu",Pt),e.parentNode&&e.parentNode.removeChild(e),p.parentNode&&p.parentNode.removeChild(p)}};return S(),J(0,"idle"),ot(0,0),$t.setPreset(.5),$t}const xc={mouse:4,pen:6,touch:10},mh=.06,oS=.1,aS=6,gh={touch:28,pen:22,mouse:20},xh=12,cS=Math.sin(On.elevDeg*Math.PI/180),lS=Math.cos(On.elevDeg*Math.PI/180),vc=.08,uS=.25,vh=.35,fS=.7,_h=110,Mh=320,hS=.5,dS=2.4,sa=Math.PI/180,pS=1*sa,mS=.1*sa,yh=.1,gS=10;function xS({stage:i,rig:t,play:e,events:n,uiRoot:s,onInsets:r}){tM(),ve.enabled=!1;const o=typeof window<"u"?window:null,a=typeof document<"u"?document:null,c=i&&i.renderer&&i.renderer.domElement?i.renderer.domElement:null;let l=!1;const u={clock:.5,firedAt:-1e9,readyT:.5,idleT:.5,rollT:.5,aimHoldT:.5,spinHoldT:.5,topHoldT:.5};u.clock=0,u.readyT=0,u.idleT=0,u.rollT=0,u.aimHoldT=0,u.spinHoldT=0,u.topHoldT=0;let d=e.state,f=!1;const h={shots:0,placed:!1,placeShots:0};let g=null,x=null,m=null;const p={left:!1,right:!1,shift:!1,a:!1,d:!1,w:!1,s:!1,f:!1},w=new Map;let M=null;const y=new Set,C=new Set;let R=1,b={left:0,top:0};const S=rS(s,{onPullStart(L,k){return U()?(q(L),gt()):!1},onPull:L=>ot(L),onPullEnd:(L,k)=>W(L,k),ballDown(L){return!l||e.state!=="ready"||v()||w.size>0||(ht(),!at($(L),L.pointerType||"mouse"))?!1:(Qt(L,!0),!!(M&&M.kind==="place"&&M.id===L.pointerId))},ballMove:L=>T(L),ballUp:L=>Ht(L),ballCancel:L=>te(L),onInsets(L){typeof r=="function"&&r(L)},onSpin(L,k,it){!l||e.state!=="ready"||!(e.level&&e.level.spin)||(u.idleT=0,it==="reset"?V(0,0):V(L,k),S.setSpin(e.intent.spin,F(e.intent)))}}),_=()=>l&&e.state==="ready",v=()=>!!(g||x||m),A=()=>l&&e.state==="ready"&&!m,U=()=>A()&&!v(),F=L=>Number.isFinite(L.top)?L.top:0;function V(L,k){let it=Number.isFinite(L)?L<-1?-1:L>1?1:L:0,xt=Number.isFinite(k)?k<-1?-1:k>1?1:k:0;Math.abs(it)<yh&&(it=0),Math.abs(xt)<yh&&(xt=0);const Lt=Math.sqrt(it*it+xt*xt);Lt>1&&(it/=Lt,xt/=Lt);const Jt=e.intent.spin===0&&F(e.intent)===0;e.setSpin(it,xt),it===0&&xt===0&&!Jt&&rt(8)}function rt(L){try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(L)}catch{}}let J=NaN;function gt(){return U()?(g={t0:u.clock,p:0},J=e.intent.power,ve.pulling=!0,ve.pull=0,u.idleT=0,S.setPull(0,"pull"),!0):!1}function ot(L){g&&(g.p=L,ve.pull=L,S.setPull(L,"pull"),z(L))}function W(L,k){if(!g)return;const it=u.clock-g.t0<oS;g=null,ve.pulling=!1,k||it||L<mh||!A()?j(!0):tt(L)}function z(L){const k=Math.round((L<0?0:L>1?1:L)*100)/100;e.state==="ready"&&k!==e.intent.power&&e.setPower(k)}function q(L){w.delete(L),y.delete(L),M&&M.id===L&&(M.kind==="place"&&(ve.placing=!1),M=null),zt()}function j(L){g=null,x=null,m=null,J===J&&(e.state==="ready"&&e.intent.power!==J&&e.setPower(J),J=NaN),S.cancelPull(),ve.pulling=!1,ve.pull=0,ve.strike=-1,S.setPull(0,L?"cancel":"idle")}function tt(L){m={t:0,p:L},ve.pulling=!1,ve.pull=L,ve.strike=0,S.setPull(L,"strike")}function O(L){if(m=null,ve.strike=-1,ve.pull=0,!A()){j(!1);return}J=NaN,e.setPower(L),e.fire()&&(u.firedAt=u.clock,h.shots++,S.setPull(0,"idle"))}function $(L){return{x:L.clientX-b.left,y:L.clientY-b.top}}function ht(){if(c&&c.getBoundingClientRect){const L=c.getBoundingClientRect();b={left:L.left,top:L.top}}}function B(){const L=e.intent,k=e.level?e.level.heightAt(L.x,L.z)+Gt.R:Gt.R;return t.groundToScreen(L.x,k,L.z)}function at(L,k){const it=B();if(!it)return!1;const xt=e.intent,Lt=t.pxPerMetre(xt.x,xt.z)||20,Jt=Math.max(k==="touch"?34:28,.9*Lt);return Math.hypot(L.x-it.x,L.y-it.y)<=Jt}const ft={ux:0,uy:1};function Mt(L,k){const it=e.intent,xt=e.level;if(!xt)return!1;const Lt=Math.sqrt(it.dx*it.dx+it.dz*it.dz)||1,Jt=it.dx/Lt,ne=it.dz/Lt,Ot=xt.heightAt(it.x,it.z)+Gt.R,le=i&&i.camera?i.camera.position:null;let ie=-1;if(le){const et=le.x-it.x,Y=le.y-Ot,Et=le.z-it.z,Nt=Math.sqrt(et*et+Y*Y+Et*Et)*(On.fadeNear+On.fadeFar)*.5;ie=Nt*Nt}const _e=gh[k]||gh.mouse;let we=NaN,Ae=NaN,ye=NaN,Re=NaN,ze=1/0;for(let et=0;et<=xh;et++){const Y=et/xh*On.len,Et=Gt.R+On.rest+Y*lS,Nt=it.x-Jt*Et,Yt=it.z-ne*Et,Vt=Ot+Y*cS;if(le){const lt=le.x-Nt,pt=le.y-Vt,_t=le.z-Yt;if(lt*lt+pt*pt+_t*_t<ie)break}const se=t.groundToScreen(Nt,Vt,Yt);if(!se||se.onScreen===!1||!Number.isFinite(se.x)||!Number.isFinite(se.y))break;if(et===0)we=se.x,Ae=se.y;else{const lt=se.x-ye,pt=se.y-Re,_t=lt*lt+pt*pt;let Rt=_t>0?((L.x-ye)*lt+(L.y-Re)*pt)/_t:0;Rt=Rt<0?0:Rt>1?1:Rt;const Dt=Math.hypot(L.x-ye-lt*Rt,L.y-Re-pt*Rt);Dt<ze&&(ze=Dt)}ye=se.x,Re=se.y}if(!(ze<=_e))return!1;const D=ye-we,I=Re-Ae,G=Math.sqrt(D*D+I*I);return G>4?(ft.ux=D/G,ft.uy=I/G,!0):!1}function Pt(L){const k=(L.x-M.sx)*M.ux+(L.y-M.sy)*M.uy-aS,it=S.travel();return k<=0?0:k>=it?1:k/it}function nt(){const L=e.intent;return{x:L.x,z:L.z,offset:L.offset}}function mt(L){if(!L||e.state!=="ready")return;e.setPlacement(L.x,L.z);const k=L.offset-e.intent.offset;k!==0&&e.rotateAim(k)}function H(L){L!==R&&(R=L,e.setSpeed(L))}function Q(){const L=w.values(),k=L.next().value,it=L.next().value;M={kind:"pinch",d0:Math.hypot(k.x-it.x,k.y-it.y)||1,cx:(k.x+it.x)/2,cy:(k.y+it.y)/2}}function zt(){ve.aiming=l&&M!==null&&M.kind==="aim"}function Qt(L,k){$t(L,k),zt()}function Ht(L){P(L),zt()}function te(L){ut(L),zt()}function $t(L,k){if(!l)return;L.preventDefault&&L.preventDefault(),ht();const it=$(L);if(L.isPrimary===!0&&L.pointerType==="touch"&&(w.clear(),y.clear(),C.clear(),M&&M.kind!=="pan"&&(M=null)),C.delete(L.pointerId),L.pointerType==="mouse"&&L.button!==0){if(L.button===2&&v()&&!m){j(!0);return}(L.button===1||L.button===2)&&(M={kind:"pan",id:L.pointerId,x:it.x,y:it.y},Xt(L.pointerId));return}if(w.set(L.pointerId,it),u.idleT=0,e.state==="rolling"){u.clock-u.firedAt>=uS&&y.add(L.pointerId),w.size>=2?Q():M={kind:"ff",id:L.pointerId};return}if(w.size>=2){M&&(M.kind==="place"||M.kind==="aim")&&(mt(M.snap),ve.placing=!1),M&&M.kind==="cue"&&W(0,!0),w.size===2&&Q();return}if(e.state!=="ready"||v()){M={kind:"block"};return}Xt(L.pointerId);const xt=L.pointerType||"mouse",Lt=B(),Jt=k===!0||at(it,xt),ne={id:L.pointerId,type:xt,sx:it.x,sy:it.y,t0:u.clock,moved:!1,snap:nt(),travelled:0};if(Jt)M={...ne,kind:"place",grabX:Lt.x-it.x,grabY:Lt.y-it.y};else if(k!==!0&&Mt(it,xt)&&gt())M={...ne,kind:"cue",ux:ft.ux,uy:ft.uy};else if(M={...ne,kind:"aim",lastX:it.x,lastY:it.y,lastTs:L.timeStamp||0,speed:0},xt!=="touch"){const Ot=t.screenToGround(it.x,it.y);Ot&&e.setAimToward(Ot.x,Ot.z)}}function T(L){if(!l)return;const k=$(L);if(M&&M.kind==="pan"&&L.pointerId===M.id){const D=k.x-M.x,I=k.y-M.y;M.x=k.x,M.y=k.y,(D||I)&&t.panBy(D,I);return}if(!w.has(L.pointerId)||(w.set(L.pointerId,k),!M))return;if(M.kind==="pinch"){if(w.size<2)return;const D=w.values(),I=D.next().value,G=D.next().value,et=Math.hypot(I.x-G.x,I.y-G.y)||1,Y=(I.x+G.x)/2,Et=(I.y+G.y)/2,Nt=et/M.d0;Math.abs(Nt-1)>1e-4&&t.zoomBy(Nt,Y,Et),(Y!==M.cx||Et!==M.cy)&&t.panBy(Y-M.cx,Et-M.cy),M.d0=et,M.cx=Y,M.cy=Et;return}if(M.kind==="cue"){L.pointerId===M.id&&ot(Pt(k));return}if(L.pointerId!==M.id||M.kind!=="place"&&M.kind!=="aim"||e.state!=="ready")return;u.idleT=0;const it=Math.hypot(k.x-M.sx,k.y-M.sy);if(it>M.travelled&&(M.travelled=it),M.kind==="place"){if(!M.moved){if(it<(xc[M.type]||6))return;M.moved=!0,ve.placing=!0}let D=M.grabX,I=M.grabY;if(M.type==="touch"){const et=M.travelled>=40?1:M.travelled/40;D+=(0-D)*et,I+=(-52-I)*et}const G=t.screenToGround(k.x+D,k.y+I);G&&e.setPlacement(G.x,G.z);return}if(M.type!=="touch"){!M.moved&&it>=(xc[M.type]||4)&&(M.moved=!0);const D=t.screenToGround(k.x,k.y);D&&e.setAimToward(D.x,D.z);return}if(!M.moved){if(it<xc.touch)return;M.moved=!0,M.lastX=k.x,M.lastY=k.y,M.lastTs=L.timeStamp||0;return}const xt=B(),Lt=k.x-M.lastX,Jt=k.y-M.lastY,ne=L.timeStamp||0,Ot=ne-M.lastTs;if(M.lastX=k.x,M.lastY=k.y,M.lastTs=ne,!xt)return;const le=k.x-Lt-xt.x,ie=k.y-Jt-xt.y,_e=Math.hypot(le,ie);if(_e<1)return;const we=(le*Jt-ie*Lt)/_e,Ae=_e<_h?_h:_e>Mh?Mh:_e;if(Ot>0){const D=Math.hypot(Lt,Jt)/(Ot/1e3);M.speed+=(D-M.speed)*.35}const ye=M.speed,Re=ye<=500?0:ye>=1800?1:(ye-500)/1300,ze=vh+(fS-vh)*Re*Re;we!==0&&e.rotateAim(we/Ae*ze)}function P(L){const k=$(L),it=w.delete(L.pointerId);if(y.delete(L.pointerId),C.delete(L.pointerId),M&&M.kind==="pan"&&L.pointerId===M.id){M=null,Bt(L.pointerId);return}if(!it||!M)return;if(M.kind==="ff"){L.pointerId===M.id&&(M=null);return}if(M.kind==="pinch"||M.kind==="block"){w.size===0?M=null:M={kind:"block"};return}if(L.pointerId!==M.id)return;if(Bt(L.pointerId),M.kind==="cue"){ot(Pt(k)),M=null,W(g?g.p:0,!1);return}const xt=M;if(M=null,xt.kind==="place"){ve.placing=!1,xt.moved&&(h.placed=!0);return}if(xt.kind==="aim"&&xt.type==="touch"&&!xt.moved&&u.clock-xt.t0<=hS&&l&&e.state==="ready"){const Lt=t.screenToGround(k.x,k.y);Lt&&e.setAimToward(Lt.x,Lt.z)}}function ut(L){if(w.delete(L.pointerId),y.delete(L.pointerId),C.delete(L.pointerId),M&&M.kind==="pan"&&M.id===L.pointerId){M=null;return}M&&(M.id===L.pointerId||w.size===0)&&(M.kind==="place"&&(ve.placing=!1),M.kind==="cue"&&W(0,!0),M=w.size?{kind:"block"}:null)}function dt(L){if(L.preventDefault&&L.preventDefault(),!l)return;ht();const k=$(L),it=L.deltaMode===1?L.deltaY*16:L.deltaMode===2?L.deltaY*400:L.deltaY;let xt=Math.exp(-it*.0015);xt=xt<.8?.8:xt>1.25?1.25:xt,t.zoomBy(xt,k.x,k.y)}const bt=L=>{L.preventDefault&&L.preventDefault()},yt=L=>{L.cancelable!==!1&&L.preventDefault&&L.preventDefault()};function Xt(L){try{c&&c.setPointerCapture&&c.setPointerCapture(L)}catch{}}function Bt(L){try{c&&c.releasePointerCapture&&c.releasePointerCapture(L)}catch{}}c&&(c.style&&(c.style.touchAction="none"),c.addEventListener("pointerdown",Qt),c.addEventListener("pointermove",T),c.addEventListener("pointerup",Ht),c.addEventListener("pointercancel",te),c.addEventListener("wheel",dt,{passive:!1}),c.addEventListener("contextmenu",bt),c.addEventListener("touchstart",yt,{passive:!1}),c.addEventListener("touchmove",yt,{passive:!1}),c.addEventListener("gesturestart",yt));const Ft=[S.parts.grab,S.parts.spin],fe=L=>{const k=L.target;return k===c||k&&Ft.indexOf(k)>=0?!1:w.has(L.pointerId)||C.has(L.pointerId)||M&&M.kind==="pan"&&M.id===L.pointerId},Ct=L=>{fe(L)&&T(L)},qt=L=>{fe(L)&&Ht(L)},oe=L=>{fe(L)&&te(L)};o&&c&&(o.addEventListener("pointermove",Ct),o.addEventListener("pointerup",qt),o.addEventListener("pointercancel",oe));function jt(L){const k=L.target;return!!(k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable))}function kt(L){if(jt(L))return;const k=L.code;if(k==="ShiftLeft"||k==="ShiftRight"){p.shift=!0;return}if(l&&((k==="Space"||k.startsWith("Arrow"))&&L.preventDefault(),!L.repeat))switch(k){case"ArrowLeft":case"ArrowRight":{const it=k==="ArrowLeft";it?p.left=!0:p.right=!0,u.aimHoldT=0,_()&&(u.idleT=0,e.rotateAim((it?-1:1)*(L.shiftKey||p.shift?mS:pS)));break}case"KeyA":case"KeyD":{k==="KeyA"?p.a=!0:p.d=!0,u.spinHoldT=0,ce(k==="KeyA"?-1:1,0);break}case"KeyW":case"KeyS":{k==="KeyW"?p.w=!0:p.s=!0,u.topHoldT=0,ce(0,k==="KeyW"?1:-1);break}case"Space":U()&&(x={t:0,p:0},J=e.intent.power,ve.pulling=!0,ve.pull=0,u.idleT=0,S.setPull(0,"pull"));break;case"Backspace":case"KeyX":(g||x)&&j(!0);break;case"KeyO":case"KeyV":n.emit("ui:overview",{on:!f});break;case"KeyF":p.f=!0;break}}function Zt(L){const k=L.code;if(k==="ShiftLeft"||k==="ShiftRight"){p.shift=!1;return}if(k==="ArrowLeft")p.left=!1;else if(k==="ArrowRight")p.right=!1;else if(k==="KeyA")p.a=!1;else if(k==="KeyD")p.d=!1;else if(k==="KeyW")p.w=!1;else if(k==="KeyS")p.s=!1;else if(k==="KeyF")p.f=!1;else if(k==="Space"&&x){const it=x.p;x=null,ve.pulling=!1,it>=mh&&A()?tt(it):j(!0)}}function ce(L,k){if(!_()||!(e.level&&e.level.spin))return;u.idleT=0;let it=e.intent.spin,xt=F(e.intent);if(L!==0){const Lt=Math.sqrt(Math.max(0,1-xt*xt));it=Math.round((it+L*.1)*10)/10,it=it<-Lt?-Lt:it>Lt?Lt:it}if(k!==0){const Lt=Math.sqrt(Math.max(0,1-it*it));xt=Math.round((xt+k*.1)*10)/10,xt=xt<-Lt?-Lt:xt>Lt?Lt:xt}e.setSpin(it,xt),S.setSpin(e.intent.spin,F(e.intent))}function ge(){v()&&j(!1),p.left=p.right=p.shift=p.a=p.d=p.w=p.s=p.f=!1,w.clear(),M&&M.kind==="place"&&(ve.placing=!1),M=null,y.clear(),C.clear(),zt()}function ct(){a&&a.visibilityState==="hidden"&&ge()}o&&(o.addEventListener("keydown",kt),o.addEventListener("keyup",Zt),o.addEventListener("blur",ge),o.addEventListener&&c&&o.addEventListener("resize",ht)),a&&a.addEventListener&&a.addEventListener("visibilitychange",ct);const St=[n.on("ui:overview",({on:L})=>{f=!!L}),n.on("ad:start",()=>ge()),n.on("shot:fire",()=>{u.firedAt=u.clock,u.rollT=0,S.setVisible(!1)}),n.on("hole:start",()=>{f=!1})];let vt=!1,wt=!1,It=null,E=0;function N(L){u.clock+=L;const k=e.state;if(k!==d){if(k==="ready"){u.readyT=0,u.idleT=0;for(const Ot of w.keys())C.add(Ot);w.clear(),y.clear(),M&&M.kind!=="pan"&&(M=null)}d==="ready"&&v()&&!m&&j(!1),d=k}if(m&&(m.t+=L,ve.strike=m.t/vc>1?1:m.t/vc,m.t>=vc&&O(m.p)),x){x.t+=L;const Ot=x.t/dS%1;x.p=1-Math.abs(1-2*Ot),ve.pull=x.p,S.setPull(x.p,"pull"),z(x.p)}if(_()){u.readyT+=L,u.idleT+=L;const Ot=(p.right?1:0)-(p.left?1:0);if(Ot!==0&&(u.aimHoldT+=L,u.idleT=0,u.aimHoldT>.25)){const _e=p.shift?3*sa:(30+60*Math.min(1,(u.aimHoldT-.25)/1.2))*sa;e.rotateAim(Ot*_e*L)}const le=(p.d?1:0)-(p.a?1:0);le!==0&&(u.spinHoldT+=L,u.spinHoldT>.35&&(u.spinHoldT-=.1,ce(le,0)));const ie=(p.w?1:0)-(p.s?1:0);ie!==0&&(u.topHoldT+=L,u.topHoldT>.35&&(u.topHoldT-=.1,ce(0,ie)))}const it=l&&k==="rolling";it&&(u.rollT+=L),k!=="rolling"&&y.size&&y.clear(),H(it&&(p.f||y.size>0)?3:1);const xt=it?R>1?2:u.rollT>1.5?1:0:0;xt!==E&&(E=xt,S.setFastForward(xt));const Lt=l&&k==="ready";Lt!==vt&&(vt=Lt,S.setVisible(Lt),!Lt&&v()&&!m&&j(!1));const Jt=!!(e.level&&e.level.spin);Jt!==wt&&(wt=Jt,S.setSpinEnabled(Jt)),e.intent!==It&&(It=e.intent,S.setSpin(e.intent.spin,F(e.intent)),S.setPreset(e.lastPower!==void 0?e.lastPower:e.intent.power));const ne=u.idleT>gS;S.setPullHint(Lt&&!v()&&(h.shots===0&&u.readyT>.6||ne)),ve.hint=Lt&&!M&&(!h.placed&&h.shots<3&&u.readyT>.4||ne)?1:0,ve.enabled=l,zt()}function X(L){L=!!L,L!==l&&(l=L,ve.enabled=L,L?(ht(),e.state==="ready"&&(vt=!0,S.setVisible(!0))):(v()&&j(!1),w.clear(),M&&M.kind==="place"&&(ve.placing=!1),M=null,zt(),y.clear(),p.left=p.right=p.a=p.d=p.w=p.s=p.f=!1,H(1),vt=!1,S.setVisible(!1),E=0,S.setFastForward(0),S.setPullHint(!1)))}function Z(){X(!1);for(const L of St)L();c&&(c.removeEventListener("pointerdown",Qt),c.removeEventListener("pointermove",T),c.removeEventListener("pointerup",Ht),c.removeEventListener("pointercancel",te),c.removeEventListener("wheel",dt),c.removeEventListener("contextmenu",bt),c.removeEventListener("touchstart",yt),c.removeEventListener("touchmove",yt),c.removeEventListener("gesturestart",yt)),o&&(o.removeEventListener("keydown",kt),o.removeEventListener("keyup",Zt),o.removeEventListener("blur",ge),o.removeEventListener("resize",ht),o.removeEventListener("pointermove",Ct),o.removeEventListener("pointerup",qt),o.removeEventListener("pointercancel",oe)),a&&a.removeEventListener&&a.removeEventListener("visibilitychange",ct),S.dispose()}const K={enable:X,update:N,dispose:Z,insets:()=>S.insets()};return Object.defineProperty(K,"_debug",{value:{hud:S,session:h,get gesture(){return M}},enumerable:!1}),K}function At(i,t,e){const[n,...s]=i.split("."),r=document.createElement(n||"div");if(s.length&&(r.className=s.join(" ")),t)for(const o in t){const a=t[o];if(!(a==null||a===!1))if(o==="html")r.innerHTML=a;else if(o==="text")r.textContent=a;else if(o.startsWith("on"))r.addEventListener(o.slice(2),a);else if(o==="style")for(const c in a)c.startsWith("--")?r.style.setProperty(c,a[c]):r.style[c]=a[c];else r.setAttribute(o,a===!0?"":String(a))}return e!==void 0&&Vd(r,e),r}function Vd(i,t){if(Array.isArray(t)){for(const e of t)Vd(i,e);return}t==null||t===!1||i.appendChild(typeof t=="string"||typeof t=="number"?document.createTextNode(String(t)):t)}const Xe={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4.5" width="4.6" height="15" rx="1.8"/><rect x="13.9" y="4.5" width="4.6" height="15" rx="1.8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.8 12S5.6 5 12 5s10.2 7 10.2 7-3.8 7-10.2 7S1.8 12 1.8 12z"/><circle cx="12" cy="12" r="3.6" class="pupil"/></svg>',play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 4.8v14.4a1 1 0 0 0 1.5.9l11-7.2a1 1 0 0 0 0-1.8L9 3.9a1 1 0 0 0-1.5.9z"/></svg>',retry:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" fill="none" stroke-width="3" stroke-linecap="round"/><path d="M3.4 3.6l.6 5.6 5.5-1.2z"/></svg>',grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="3" width="7.6" height="7.6" rx="2"/><rect x="3" y="13.4" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="13.4" width="7.6" height="7.6" rx="2"/></svg>',soundOn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.6 8.6a5 5 0 0 1 0 6.8M18.4 5.9a9 9 0 0 1 0 12.2" fill="none" stroke-width="2.4" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.8 9.2l5.4 5.6M21.2 9.2l-5.4 5.6" fill="none" stroke-width="2.6" stroke-linecap="round"/></svg>',ball:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="9" cy="9" r="2.6" fill="#fff" opacity=".85"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.2L8 12l6.8 6.8" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',lock:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5" fill="none" stroke-width="2.8"/><rect x="4.8" y="10" width="14.4" height="11" rx="3"/></svg>',star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4l2.85 6 6.6.75-4.9 4.5 1.35 6.5L12 16.85 6.1 20.15l1.35-6.5-4.9-4.5 6.6-.75z"/></svg>'};function vS(i,{events:t}={}){const e=(C,R)=>t&&t.emit(C,R);let n=!1,s=!1,r=0,o=0;const a=At("b.hud-num",null,"1"),c=At("div.hud-ball",null,a),l=At("span.hud-name",null,""),u=At("span.hud-par",null,"Par 2"),d=At("div.hud-chip.hud-hole",null,[c,At("div.hud-meta",null,[l,u])]),f=At("b.hud-strokes-n",null,"0"),h=At("div.hud-pips",{"aria-hidden":"true"}),g=At("span.hud-pop",{"aria-hidden":"true"},"+1"),x=At("div.hud-chip.hud-strokes",{role:"status","aria-live":"polite"},[At("span.hud-lbl",null,"Strokes"),f,h,g]),m=At("button.hud-btn.hud-eye",{type:"button","aria-label":"Look at the whole hole","aria-pressed":"false",html:Xe.eye,onclick:()=>M(!n,!0)}),p=At("button.hud-btn.hud-pause",{type:"button","aria-label":"Pause",html:Xe.pause,onclick:()=>e("ui:pause",{})}),w=At("div.hud",{"data-shown":"false"},[d,x,At("div.hud-btns",null,[m,p])]);i.appendChild(w);function M(C,R){n=!!C,m.setAttribute("aria-pressed",n?"true":"false"),m.classList.toggle("on",n),R&&e("ui:overview",{on:n})}function y(){const C=Math.max(o,Math.min(r,o+4));for(;h.childNodes.length>C;)h.removeChild(h.lastChild);for(;h.childNodes.length<C;)h.appendChild(At("i.pip"));for(let R=0;R<C;R++){const b=h.childNodes[R];b.className="pip"+(R<r?" used":"")+(R>=o?" over":"")}}return t&&(t.on("ui:overview",({on:C}={})=>{!!C!==n&&M(C,!1)}),t.on("shot:end",({penalty:C}={})=>{C&&(g.classList.remove("go"),g.offsetWidth,g.classList.add("go"))})),{el:w,setHole(C,R){a.textContent=String((R|0)+1),l.textContent=C&&C.name?C.name:"",u.textContent="Par "+(C?C.par:""),w.setAttribute("data-round",String(C&&C.round?C.round:1)),n&&M(!1,!0)},setStrokes(C,R){const b=Math.max(0,C|0),S=b>r;r=b,R!==void 0&&(o=Math.max(1,R|0)),f.textContent=String(r),x.classList.toggle("over",r>o),y(),S&&(f.classList.remove("bump"),f.offsetWidth,f.classList.add("bump"))},show(C){s=!!C,w.setAttribute("data-shown",s?"true":"false")}}}const Sh=350,_S=1400,MS=5200,yS=1900,SS=1700,wS=3e3,bS={ace:"Unbelievable!",albatross:"Amazing shot!",eagle:"Superb!",birdie:"Great shot!",par:"Well played!",bogey:"So close!",double:"Nice try!",over:"Keep going!",picked:"Try again for a star!"},ES={ace:"Hole-in-one!",albatross:"Albatross!",eagle:"Eagle!",birdie:"Birdie!",par:"Par!"},Mn="#13261b";function TS(i,t,e,n,s){let r="";for(let o=0;o<s*2;o++){const a=o*Math.PI/s-Math.PI/2,c=o%2?n:e;r+=(o?"L":"M")+(i+Math.cos(a)*c).toFixed(1)+" "+(t+Math.sin(a)*c).toFixed(1)}return r+"Z"}const Os=(i,t,e)=>`<g transform="${e}" stroke="${Mn}" stroke-width="3" stroke-linejoin="round"><path d="M15 34l-10-5 2.5 10z" fill="${t}"/><ellipse cx="29" cy="37" rx="16" ry="13" fill="${i}"/><circle cx="41" cy="25" r="10" fill="${i}"/><path d="M50 22.5l9 3.5-9 3.5z" fill="#FFC93C"/><path d="M19 35c6-3 12-1 14 5-6 3-12 2-14-5z" fill="${t}"/><circle cx="43.5" cy="23" r="2.3" fill="${Mn}" stroke="none"/></g>`,es=i=>`<svg viewBox="0 0 64 64" aria-hidden="true">${i}</svg>`,wh={ace:es(`<path d="${TS(32,32,30,18,12)}" fill="#FFC93C" stroke="${Mn}" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="32" r="12" fill="#FBFAF3" stroke="${Mn}" stroke-width="3"/><text x="32" y="39" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="19" fill="${Mn}">1</text>`),albatross:es(Os("#9F7BE0","#7B4FC9","translate(-4 -10) scale(.62)")+Os("#9F7BE0","#7B4FC9","translate(26 -6) scale(.62)")+Os("#9F7BE0","#7B4FC9","translate(8 22) scale(.62)")),eagle:es(Os("#FFA65A","#E07020","translate(-2 -4) scale(.7)")+Os("#FFA65A","#E07020","translate(20 18) scale(.7)")),birdie:es(Os("#5B93F0","#2D6CDF","translate(0 0)")),par:es(`<ellipse cx="32" cy="53" rx="22" ry="7" fill="#3CC47A" stroke="${Mn}" stroke-width="3"/><ellipse cx="32" cy="52" rx="7" ry="2.6" fill="${Mn}"/><path d="M32 51V9" stroke="${Mn}" stroke-width="5" stroke-linecap="round"/><path d="M32 50V10" stroke="#fff" stroke-width="2"/><path d="M34 9l21 7.5L34 24z" fill="#E8322F" stroke="${Mn}" stroke-width="3" stroke-linejoin="round"/>`),smile:es(`<circle cx="32" cy="32" r="26" fill="#8EC5FF" stroke="${Mn}" stroke-width="3"/><circle cx="23" cy="27" r="3.4" fill="${Mn}"/><circle cx="41" cy="27" r="3.4" fill="${Mn}"/><path d="M20 38c6 8 18 8 24 0" fill="none" stroke="${Mn}" stroke-width="3.6" stroke-linecap="round"/>`),picked:es(`<g fill="#fff" stroke="${Mn}" stroke-width="3" stroke-linejoin="round"><rect x="15" y="12" width="8" height="26" rx="4"/><rect x="24" y="7" width="8" height="30" rx="4"/><rect x="33" y="9" width="8" height="28" rx="4"/><rect x="42" y="15" width="8" height="23" rx="4"/><path d="M15 31h35v6c0 11-7.5 19-18 19-7.5 0-12-4.5-14.5-9L9.5 37c-1.6-2.8 2-5.6 4.6-3.4L18 37z"/></g>`)},AS=i=>wh[i]||wh.smile,bh='<svg viewBox="0 0 48 58" aria-hidden="true"><path d="M17 4c2.6 0 4.6 2 4.6 4.6v15.6l1.7-.4c2.2-.5 4.4.8 5 3l.2.6 1.3-.3c2.2-.5 4.4.8 5 3l.2.8 1-.2c2.3-.4 4.5 1.1 4.9 3.4l1.3 8.6c.9 5.7-2.5 11.2-8 12.9l-6.1 1.8c-4.7 1.4-9.8-.5-12.4-4.7L4.2 38.4c-1.3-2.1-.8-4.8 1.2-6.2 2-1.3 4.6-1 6.1.8l1 1.2V8.6C12.5 6 14.5 4 17 4z" fill="#fff" stroke="#13261b" stroke-width="3" stroke-linejoin="round"/><path d="M21.6 24.2v7M29.5 27.4v5.4M36.7 31.1v4.6" stroke="#13261b" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".45"/></svg>';function CS(i,t){if(i==null)return"";if(i===1)return"m-ace";const e=i-t;return e<=-2?"m-eagle":e===-1?"m-birdie":e===0?"m-par":e===1?"m-bogey":"m-double"}function RS(i,{events:t,progress:e,holes:n=[],rounds:s=[],rig:r=null,play:o=null}={}){const a=(I,G)=>t&&t.emit(I,G),c=(I,G)=>t&&t.on(I,G),l=new Map;{let I=0;for(const G of s)l.set(G.id,I),I+=G.holes.length}const u=I=>{for(const G of s){const et=l.get(G.id);if(I>=et&&I<et+G.holes.length)return G}return s[0]},d=I=>n[I]||{name:"Hole "+(I+1),par:3,id:"h"+I};let f=null,h=!1,g=!1,x=0,m=null,p=null,w=!1,M=!1,y=0,C={index:-1,best:null,stars:0,total:0},R=!!(e&&e.muted),b=e&&e.skin||"classic",S=!1;const _=new Set,v=(I,G)=>{const et=setTimeout(()=>{_.delete(et),I()},G);return _.add(et),et},A=I=>{I&&(clearTimeout(I),_.delete(I))},U=At("div.scr");i.appendChild(U);function F(I,G,et,Y,Et){return At("button.btn"+I,{type:"button","aria-label":Et||null,onclick:Nt=>{Date.now()-x<Sh||Y(Nt)}},[et?At("span.ico",{html:et}):null,G?At("span.lbl",null,G):null])}function V(I,G=""){const et=At("div.stars"+G,{role:"img","aria-label":I+(I===1?" star":" stars")});for(let Y=0;Y<3;Y++)et.appendChild(At("span.st"+(Y<I?".on":""),{html:Xe.star,style:{"--k":String(Y)}}));return et}const rt=[];function J(I){const G=F(I?".b-white.b-sound":".b-round.b-white.b-sound","","",()=>ot(!R));return rt.push({b:G,withLabel:I}),gt(),G}function gt(){for(const{b:I,withLabel:G}of rt){for(;I.firstChild;)I.removeChild(I.firstChild);I.appendChild(At("span.ico",{html:R?Xe.soundOff:Xe.soundOn})),G&&I.appendChild(At("span.lbl",null,R?"Sound off":"Sound on")),I.setAttribute("aria-label",R?"Turn sound on":"Turn sound off"),I.setAttribute("aria-pressed",R?"false":"true"),I.classList.toggle("off",R)}}function ot(I){R=!!I,gt(),a("ui:sound",{muted:R})}function W(I,G,et){const Y=typeof I=="object"?I:s.find(Dt=>Dt.id===I)||s[0],Et=l.get(Y.id)||0,Nt=At("div.strip",{role:"table","aria-label":Y.name+" scorecard"}),Yt=At("div.srow.s-hole",{role:"row"},At("span.sh",{role:"rowheader"},"Hole")),Vt=At("div.srow.s-par",{role:"row"},At("span.sh",{role:"rowheader"},"Par")),se=At("div.srow.s-you",{role:"row"},At("span.sh",{role:"rowheader"},"You"));let lt=0,pt=0,_t=0;Y.holes.forEach((Dt,Kt)=>{const Wt=Et+Kt,Ut=G(Wt),Me=Wt===et?".hi":"";Yt.appendChild(At("span.sc"+Me,{role:"cell",style:{"--k":String(Kt)}},String(Wt+1))),Vt.appendChild(At("span.sc"+Me,{role:"cell"},String(Dt.par)));const ae=CS(Ut,Dt.par);se.appendChild(At("span.sc.s-score"+Me,{role:"cell",style:{"--k":String(Kt)}},Ut==null?At("i.dash",null,"–"):At("b.mk"+(ae?"."+ae:""),null,String(Ut)))),Ut!=null&&(lt+=Ut,pt+=Dt.par,_t++)}),Yt.appendChild(At("span.sc.s-tot",{role:"cell"},"Tot")),Vt.appendChild(At("span.sc.s-tot",{role:"cell"},String(Y.holes.reduce((Dt,Kt)=>Dt+Kt.par,0))));const Rt=_t?zc(lt,pt):"–";return se.appendChild(At("span.sc.s-tot.s-rel"+(_t&&lt<pt?".under":""),{role:"cell",title:_t?lt+" strokes":""},Rt)),Nt.appendChild(Yt),Nt.appendChild(Vt),Nt.appendChild(se),Nt}const z={};function q(I,G,{primary:et,back:Y}={}){const Et=At("div.panel.p-"+I+(G?"."+G:""),{role:"dialog","aria-modal":"true","aria-hidden":"true"});return U.appendChild(Et),z[I]={el:Et,primary:et,back:Y},Et}function j(I,G){const et=z[I];if(!et)return;for(const Et in z){const Nt=Et===I;z[Et].el.classList.toggle("open",Nt),z[Et].el.setAttribute("aria-hidden",Nt?"false":"true")}f=I,x=Date.now();const Y=typeof document<"u"?document.activeElement:null;Y&&Y.blur&&U.contains&&U.contains(Y)&&Y.blur(),et.render&&et.render(G),O(!0)}function tt(){for(const I in z)z[I].el.classList.remove("open"),z[I].el.setAttribute("aria-hidden","true");f=null,O(!1)}function O(I){I&&(xt(),ne()),I!==h&&(h=I,i.classList&&i.classList.toggle("ui-menu",I),a("ui:menu",{open:I}),I||D())}const $=At("span.t-stars-n",null,"0"),ht=At("span.sub",null,""),B=F(".b-yellow.b-big.t-go","",Xe.play,()=>{const I=e?e.nextIndex():0;tt(),I===m&&!w||a("ui:play",{index:I})}),at=At("span.lbl2",null,[At("span.main",null,"Continue"),ht]);B.appendChild(at),q("title","",{primary:()=>B.click()}).appendChild(At("div.t-wrap",null,[At("div.logo",{role:"heading","aria-level":"1","aria-label":"8 Ball Golf"},[At("span.logo-ball",{"aria-hidden":"true"},At("span.logo-disc",null,"8")),At("span.logo-word",{"aria-hidden":"true"},[At("span.lw1",null,"BALL"),At("span.lw2",null,"GOLF")])]),At("p.tagline",null,"Hit the white. Sink the 8."),At("div.t-stars",{"aria-label":"Stars collected"},[At("span.ico",{html:Xe.star}),$,At("span.of",null," / "+n.length*3)]),B,At("div.t-row",null,[F(".b-blue","Holes",Xe.grid,()=>zt("title")),F(".b-blue","Balls",Xe.ball,()=>T("title")),J(!1)])])),z.title.render=()=>{const I=e?e.nextIndex():0,G=d(I);ht.textContent="Hole "+(I+1)+" · "+G.name,$.textContent=String(e?e.totalStars():0)};let Mt="title",Pt=s.length?s[0].id:1;const nt=At("div.tabs",{role:"tablist"}),mt=At("div.tiles"),H=At("p.p-note",null,"");q("holes","card-panel",{back:()=>oe(Mt)}).appendChild(At("div.card.paper.c-holes",null,[At("div.c-head",null,[F(".b-round.b-back","",Xe.back,()=>oe(Mt),"Back"),At("h2",null,"Holes"),At("span.c-head-pad")]),nt,mt,H]));function zt(I){Mt=I;const G=e?e.nextIndex():0;Pt=u(I==="pause"&&m!==null?m:G).id,j("holes")}z.holes.render=()=>{for(;nt.firstChild;)nt.removeChild(nt.firstChild);for(const Y of s){const Et=l.get(Y.id),Nt=!e||e.isUnlocked(Et),Yt=e&&e.roundStars?e.roundStars(Y.id):0,Vt=F(".tab"+(Y.id===Pt?".sel":"")+(Nt?"":".locked"),"",Nt?null:Xe.lock,()=>{if(!Nt){jt(Vt),H.textContent="Finish hole "+Et+" to open "+Y.name+"!";return}Pt=Y.id,z.holes.render()});Vt.setAttribute("role","tab"),Vt.setAttribute("aria-selected",Y.id===Pt?"true":"false"),Vt.appendChild(At("span.tab-name",null,Y.name)),Nt&&Vt.appendChild(At("span.tab-stars",null,[At("span.ico",{html:Xe.star}),Yt+"/"+Y.holes.length*3])),nt.appendChild(Vt)}for(;mt.firstChild;)mt.removeChild(mt.firstChild);const I=s.find(Y=>Y.id===Pt)||s[0];if(!I)return;const G=l.get(I.id),et=e?e.nextIndex():0;mt.setAttribute("data-round",String(I.id)),I.holes.forEach((Y,Et)=>{const Nt=G+Et,Yt=d(Nt),Vt=!e||e.isUnlocked(Nt),se=e?e.best(Nt):null,lt=F(".tile"+(Vt?"":".locked")+(Nt===et&&Vt?".next":"")+(Nt===m?".cur":""),"",null,()=>{if(!Vt){jt(lt),H.textContent="Finish hole "+Nt+" first!";return}g=!1,tt(),a("ui:play",{index:Nt})},Vt?"Hole "+(Nt+1)+", "+Yt.name:"Hole "+(Nt+1)+", locked");lt.appendChild(At("span.tile-num",null,String(Nt+1))),lt.appendChild(At("span.tile-name",null,Yt.name)),Vt?(lt.appendChild(At("span.tile-par",null,"Par "+Yt.par+(se!==null?" · Best "+se:""))),lt.appendChild(V(e?e.stars(Nt):0,".mini"))):lt.appendChild(At("span.tile-lock",{html:Xe.lock})),mt.appendChild(lt)}),H.textContent=""};let Qt="title";const Ht=At("div.skins"),te=At("p.p-note",null,"");q("skins","card-panel",{back:()=>oe(Qt)}).appendChild(At("div.card.paper.c-skins",null,[At("div.c-head",null,[F(".b-round.b-back","",Xe.back,()=>oe(Qt),"Back"),At("h2",null,"Balls"),At("span.c-head-pad")]),Ht,te]));function T(I){Qt=I,j("skins")}function P(){if(!e)return"";const I=e.totalStars(),G=e.skins().find(et=>!et.unlocked);return G?G.need-I+" more ★ for the "+G.name+" ball!":"You unlocked every ball!"}z.skins.render=()=>{for(;Ht.firstChild;)Ht.removeChild(Ht.firstChild);const I=e?e.skins():[{id:"classic",name:"Classic",need:0,unlocked:!0}];for(const G of I){const et=F(".skin"+(G.unlocked?"":".locked")+(G.id===b?".sel":""),"",null,()=>{if(!G.unlocked){jt(et),te.textContent="Collect "+G.need+" ★ to unlock "+G.name+"!";return}b=G.id,a("ui:skin",{id:G.id}),z.skins.render()},G.name+(G.unlocked?"":", locked"));et.setAttribute("aria-pressed",G.id===b?"true":"false"),et.appendChild(At("span.skin-ball.sk-"+G.id,{"aria-hidden":"true"})),et.appendChild(At("span.skin-name",null,G.name)),et.appendChild(G.unlocked?At("span.skin-need.ok",null,G.id===b?"Playing":"Tap to use"):At("span.skin-need",null,[At("span.ico",{html:Xe.star}),String(G.need)])),Ht.appendChild(et)}te.textContent=P()};const ut=q("card","card-panel",{primary:()=>Xt()}),dt=At("div.card.paper.c-score");ut.appendChild(dt);let bt=null;function yt(){dt.classList.add("skip")}function Xt(){if(!dt.classList.contains("skip")&&Date.now()-x<wS){yt();return}bt&&bt()}dt.addEventListener("pointerdown",yt),z.card.render=I=>{const{index:G,strokes:et,par:Y,picked:Et,penalties:Nt=0,stars:Yt=0}=I,Vt=I.term||Dc(et,Y,Et),se=Vt.key,lt=C.index===G?C.best:null,pt=C.index===G?C.stars:0,_t=C.index===G?C.total:e?e.totalStars():0,Rt=lt!==null&&et<lt,Dt=Math.max(0,Yt-pt),Kt=e?e.skins().filter(de=>de.need>_t&&de.need<=_t+Dt):[],Wt=(()=>{const de=u(G);return G===l.get(de.id)+de.holes.length-1})(),Ut=I.level||d(G);for(;dt.firstChild;)dt.removeChild(dt.firstChild);dt.className="card paper c-score t-"+se,dt.appendChild(At("div.sc-hole",null,"Hole "+(G+1)+" · "+(Ut.name||""))),dt.appendChild(At("div.sc-term",null,[At("span.term-ico",{html:AS(se)}),At("div.term-txt",null,[At("b.term",null,Vt.label),At("span.term-sub",null,bS[se]||"")])]));const Me=Et?"Picked up · Par "+Y:et+(et===1?" stroke":" strokes")+" · Par "+Y;dt.appendChild(At("div.sc-line",null,[Me,Nt>0?At("span.pen",null,"+"+Nt+" penalty"):null])),dt.appendChild(V(Yt,".big"));const ae=At("div.sc-extras");Rt&&ae.appendChild(At("span.badge.b-best",null,"New best!"));for(const de of Kt){const me=F(".b-mini","Use it",null,()=>{b=de.id,a("ui:skin",{id:de.id}),me.classList.add("done"),me.lastChild.textContent="Playing!"});ae.appendChild(At("span.badge.b-skin",null,[At("span.skin-ball.sk-"+de.id,{"aria-hidden":"true"}),"New ball: "+de.name+"!",me]))}ae.childNodes.length&&dt.appendChild(ae);const Se=de=>de===G?lt===null?et:Math.min(lt,et):e?e.best(de):null;dt.appendChild(W(u(G),Se,G));const Tt=S&&!Et;Tt&&dt.appendChild(At("p.sc-hint",null,"Hole in! Next hole →"));const be=Wt?"Round score":"Next hole";bt=()=>{S=!1,tt(),a("ui:next",{})},dt.appendChild(At("div.btns",null,[F(".b-blue.sc-retry","Retry",Xe.retry,()=>{S=!1,tt(),a("ui:retry",{})}),F(".b-yellow.b-big.sc-next"+(Tt?".pulse":""),be,Xe.play,()=>bt())]))};const Bt=q("round","card-panel",{primary:()=>fe()}),Ft=At("div.card.chalk.c-round");Bt.appendChild(Ft);let fe=()=>{};Ft.addEventListener("pointerdown",()=>Ft.classList.add("skip")),z.round.render=I=>{const G=s.find(pt=>pt.id===I.round)||s[0],et=new Map((I.holes||[]).map(pt=>[pt.index,pt.strokes])),Y=I.total||0,Et=I.par||G.holes.reduce((pt,_t)=>pt+_t.par,0),Nt=I.rel||zc(Y,Et),Yt=l.get(G.id)||0;let Vt=0;for(let pt=0;pt<G.holes.length;pt++)Vt+=e?e.stars(Yt+pt):0;const se=G===s[s.length-1];for(;Ft.firstChild;)Ft.removeChild(Ft.firstChild);Ft.className="card chalk c-round",Ft.appendChild(At("h2.r-title",null,(I.name||G.name)+" done!")),Ft.appendChild(At("div.r-score",null,[At("div.r-rel"+(Y<Et?".under":Y===Et?".even":""),null,[At("span.r-cap",null,"Best round"),At("b",null,Nt)]),At("div.r-meta",null,[At("span",null,"Total "+Y+" · Par "+Et),At("span.r-stars",null,[At("span.ico",{html:Xe.star}),Vt+" / "+G.holes.length*3])])])),Ft.appendChild(W(G,pt=>et.has(pt)?et.get(pt):e?e.best(pt):null,-1));const lt=se?"You played all "+n.length+" holes! Go back for more stars.":s[s.indexOf(G)+1].name+" is open! Curves, cushions and water.";Ft.appendChild(At("p.r-hook",null,lt)),Ft.appendChild(At("p.r-hook.r-skin",null,P())),fe=()=>{tt(),a("ui:next",{})},Ft.appendChild(At("div.btns",null,[F(".b-yellow.b-big.r-next",se?"Continue":"Play "+s[s.indexOf(G)+1].name,Xe.play,()=>fe())]))},q("pause","card-panel",{primary:()=>qt(),back:()=>qt()}).appendChild(At("div.card.paper.c-pause",null,[At("h2",null,"Paused"),F(".b-yellow.b-big.ps-resume","Resume",Xe.play,()=>qt()),At("div.ps-grid",null,[F(".b-blue.ps-retry","Retry hole",Xe.retry,()=>{g=!1,tt(),a("ui:retry",{})}),F(".b-blue.ps-holes","Holes",Xe.grid,()=>zt("pause")),F(".b-blue.ps-skins","Balls",Xe.ball,()=>T("pause")),J(!0)])]));function qt(){!g&&f!=="pause"||(g=!1,tt(),a("ui:resume",{}))}function oe(I){I==="pause"&&g?j("pause"):I==="title"?j("title"):tt()}function jt(I){I.classList.remove("nudge"),I.offsetWidth,I.classList.add("nudge")}const kt=At("span.tip-txt",null,""),Zt=At("div.tip",{role:"status","aria-live":"polite",hidden:!0},[At("span.tip-ico",{"aria-hidden":"true"},At("span",null,"8")),kt]),ce=At("span.coach-txt",null,""),ge=At("span.coach-gesture",{html:bh,"aria-hidden":"true"}),ct=At("button.coach-skip",{type:"button",onclick:()=>Re()},"Skip"),St=At("div.coach",{role:"status","aria-live":"polite",hidden:!0},[ge,ce,ct]),vt=At("div.hand",{html:bh,"aria-hidden":"true",hidden:!0}),wt=At("b.toast-main",null,""),It=At("span.toast-sub",null,""),E=At("div.toast",{role:"status","aria-live":"polite",hidden:!0},[wt,It]),N=At("div.celebrate",{"aria-hidden":"true",hidden:!0});U.appendChild(Zt),U.appendChild(St),U.appendChild(vt),U.appendChild(E),U.appendChild(N);let X=null,Z=0;function K(){A(Z),!(!X||f!==null)&&(Z=v(()=>{if(f!==null)return;const I=X;X=null,!(!I||I.index!==m||w)&&(kt.textContent=I.text,Zt.hidden=!1,Ot(Zt,"go"),e&&e.markTip(I.id),Z=v(L,MS))},_S))}function L(){A(Z),Z=0,Zt.hidden=!0,Zt.classList.remove("go")}let k=0;function it(I,G="",et=""){h||(wt.textContent=I,It.textContent=G,It.hidden=!G,E.className="toast"+(et?" k-"+et:""),E.hidden=!1,Ot(E,"go"),A(k),k=v(xt,yS))}function xt(){A(k),k=0,E.hidden=!0,E.classList.remove("go")}let Lt=0;function Jt(I){h||(N.textContent=ES[I]||"In the hole!",N.className="celebrate t-"+I,N.hidden=!1,Ot(N,"go"),A(Lt),Lt=v(ne,SS))}function ne(){A(Lt),Lt=0,N.hidden=!0,N.classList.remove("go")}function Ot(I,G){I.classList.remove(G),I.offsetWidth,I.classList.add(G)}const le=[{text:"Sink the 8 in the hole!",hand:"",ms:2600},{text:"Move the white ball anywhere in the circle.",hand:"drag",ms:4200},{text:"This line shows where the 8 will roll. Drag to aim.",hand:"aim",ms:4600},{text:"Pull back for power… let go to shoot!",hand:"pull",ms:0}],ie={on:!1,step:-1,timer:0,fired:!1,everyShown:!1,raf:0};function _e(){ie.on=!0,ie.fired=!1,ie.everyShown=!1,we(0)}function we(I){A(ie.timer),ie.step=I;const G=le[I];if(!G){ye();return}Ae(G.text,G.hand),G.ms&&(ie.timer=v(()=>{ie.on&&ie.step===I&&we(I+1)},G.ms))}function Ae(I,G){ce.textContent=I,St.hidden=!1,St.setAttribute("data-hand",G||"none"),ge.hidden=!G||G!=="pull"&&!!(r&&o),Ot(St,"go"),ze(G)}function ye(){A(ie.timer),St.hidden=!0,ze("")}function Re(){ie.on=!1,ie.step=-1,ye()}function ze(I){ie.raf&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(ie.raf),ie.raf=0;const G=(I==="drag"||I==="aim")&&r&&o&&typeof requestAnimationFrame=="function";if(I!=="pull"&&!G){vt.hidden=!0,vt.removeAttribute("data-mode");return}if(vt.setAttribute("data-mode",I),vt.hidden=!1,G){const et=()=>{ie.raf=requestAnimationFrame(et);try{const Y=o.intent,Et=o.level;if(!Y||!Et)return;const Nt=(Et.heightAt?Et.heightAt(Y.x,Y.z):0)+.5,Yt=r.groundToScreen(Y.x,Nt,Y.z);Yt&&Yt.onScreen!==!1&&(vt.style.transform="translate("+Math.round(Yt.x)+"px,"+Math.round(Yt.y)+"px)")}catch{}};et()}else vt.style.transform=""}function D(){K()}return c("game:hole",({index:I,level:G,first:et}={})=>{m=I,p=G||d(I),w=!1,y=0,C={index:I,best:e?e.best(I):null,stars:e?e.stars(I):0,total:e?e.totalStars():0},L(),xt(),ne(),X=null,ie.on&&Re();const Y=p&&(p.id||p.hole&&p.hole.id);S=!!et,et?(e&&e.markTip(Y),_e()):p&&p.tip&&e&&!e.seenTip(Y)&&(X={index:I,id:Y,text:p.tip},K())}),c("shot:fire",({strokes:I}={})=>{y=I|0,!Zt.hidden&&Z&&(A(Z),Z=v(L,900)),ie.on&&(ie.fired=!0,ie.step=99,ye())}),c("shot:end",({outcome:I,picked:G,penalty:et}={})=>{if(G&&it("Picked up","Try again for a star!","soft"),ie.on&&I!=="holed"&&!G&&!ie.everyShown){ie.everyShown=!0;const Y=p?p.par:2;Ae("Every shot counts. Par "+Y+" = in "+Y+" shots is great!",""),ie.timer=v(()=>{ie.on&&ye()},4500)}}),c("ball:hop",()=>it("Too fast!","Softer next time","warn")),c("ball:hazard",({kind:I}={})=>{I==="water"?it("Splash! +1","Back to where you were","water"):it("Out of bounds! +1","Back to where you were","warn")}),c("ball:whiff",()=>it("Missed the 8!","Aim the white at the 8","soft")),c("ball:holed",()=>{ie.on&&Re();const I=p?p.par:3;Jt(Dc(Math.max(1,y||1),I,!1).key)}),c("hole:done",(I={})=>{w=!0,L(),X=null,ie.on&&Re(),g=!1,j("card",I)}),c("game:round",(I={})=>j("round",I)),c("ui:pause",()=>{if(f===null&&!M){g=!0,j("pause");return}g||Promise.resolve().then(()=>a("ui:resume",{}))}),c("ui:sound",({muted:I}={})=>{!!I!==R&&(R=!!I,gt())}),c("ui:skin",({id:I}={})=>{I&&(b=I)}),c("ad:start",()=>{M=!0,xt(),ne()}),c("ad:end",()=>{M=!1}),typeof window<"u"&&window.addEventListener&&window.addEventListener("keydown",I=>{if(I.repeat)return;const G=I.code;if(G==="KeyP"||G==="Escape"){if(f==="pause"){qt(),I.preventDefault();return}if(f&&z[f].back){z[f].back(),I.preventDefault();return}f===null&&m!==null&&!w&&!M&&(a("ui:pause",{}),I.preventDefault());return}if(f&&(G==="Enter"||G==="NumpadEnter"||G==="Space")){const et=I.target;if(et&&et.tagName==="BUTTON"||(I.preventDefault(),Date.now()-x<Sh))return;const Y=z[f];Y.primary&&Y.primary()}}),{el:U,showTitle(){g=!1,j("title")},hideAll(){const I=g;g=!1,f!==null&&tt(),I&&a("ui:resume",{})},isOpen(){return f!==null},get current(){return f}}}function Eh(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const _c=i=>440*Math.pow(2,(i-69)/12),En=(i,t)=>typeof i=="number"&&Number.isFinite(i)?i:t,Th=1e-4;function Wd(i,t,e){const n=2*Math.PI*Math.min(i,e*.45)/e,s=Math.sin(n)/(2*t),r=1+s;return[s/r,0,-s/r,-2*Math.cos(n)/r,(1-s)/r]}function Xd(i,t,e,n,s,r,o,a){const[c,l,u,d,f]=o;let h=0,g=0,x=0,m=0;const p=Math.min(i.length,t+e);for(let w=t,M=0;w<p;w++,M++){const y=(M<n?M/n:1)*Math.exp(-M/s),C=(a()*2-1)*y,R=c*C+l*h+u*g-d*x-f*m;g=h,h=C,m=x,x=R,i[w]+=R*r}}function $l(i,t){let e=0;for(let n=0;n<i.length;n++)e=Math.max(e,Math.abs(i[n]));if(e>0)for(let n=0;n<i.length;n++)i[n]*=t/e}function PS(i,t,e){for(let s=0;s<16;s++){const r=Math.pow(s/16,1.6)*.3+e()*.02,o=Math.floor(t*(.012+e()*.02)),a=Math.pow(1-r/.38,1.2)*(.5+.5*e());Xd(i,Math.floor(r*t),o,Math.floor(t*.0015),t*(.004+e()*.004),a,Wd(2400+e()*3800,1.4+e()*1.6,t),e)}$l(i,.9)}function Ah(i,t,e,n,s,r){for(let c=0;c<n;c++){const l=Wd(900+e()*1500,1.1+e()*1.2,t),u=3.5+e()*2.5,d=.45+.55*e(),f=s+e()*(r-s);for(let h=e()*.2;h<f;h+=1/u*(.82+.36*e())){const g=h>f-.5?(f-h)/.5:1;Xd(i,Math.floor(h*t),Math.floor(t*.03),Math.floor(t*6e-4),t*(.004+e()*.005),d*(.6+.4*g),l,e)}}const o=Math.floor(t*.023),a=Math.floor(t*.037);for(let c=i.length-1;c>=a;c--)i[c]+=.22*i[c-o]+.14*i[c-a];$l(i,.85)}const Ch={white:[1,(i,t,e)=>{for(let n=0;n<i.length;n++)i[n]=e()*2-1}],brown:[1,(i,t,e)=>{let n=0;for(let s=0;s<i.length;s++)n=(n+.02*(e()*2-1))*.998,i[s]=n;$l(i,.9)}],rustle:[.38,PS],applauseLight:[1.8,(i,t,e)=>Ah(i,t,e,7,.9,1.5)],applauseBig:[3.4,(i,t,e)=>Ah(i,t,e,22,1.9,3.1)]};function LS({getWindow:i,maxVoices:t=14,hardVoices:e=22}={}){const n=Eh(571921),s=[],r=new Map;let o=null,a=null,c=null,l=null,u=!1,d=!0,f=0,h=0;function g(){if(u)return!1;if(!o){const _=i(),v=_&&(_.AudioContext||_.webkitAudioContext);if(!v)return u=!0,!1;try{o=new v,a=o.createGain(),a.gain.value=.8,c=o.createDynamicsCompressor(),c.threshold.value=-12,c.knee.value=10,c.ratio.value=3.5,c.attack.value=.002,c.release.value=.2,l=o.createGain(),l.gain.value=d?1:0,a.connect(c),c.connect(l),l.connect(o.destination);const A=o.createBufferSource();A.buffer=o.createBuffer(1,1,o.sampleRate),A.connect(o.destination),A.onended=()=>{try{A.disconnect()}catch{}},A.start(0)}catch(A){return console.warn("[sfx] Web Audio unavailable",A),u=!0,o=null,!1}}if(o.state!=="running"&&o.state!=="closed")try{const _=o.resume();_&&_.catch&&_.catch(()=>{})}catch{}return!0}const x=()=>!!o&&o.state==="running",m=()=>o?o.currentTime:0;function p(_){if(d=!!_,!l)return;const v=o.currentTime,A=l.gain;try{A.cancelScheduledValues(v),A.setValueAtTime(A.value,v),A.setTargetAtTime(d?1:0,v,.012)}catch{A.value=d?1:0}}function w(_){let v=r.get(_);if(v||!o||!Ch[_])return v||null;const[A,U]=Ch[_],F=o.sampleRate;return v=o.createBuffer(1,Math.max(1,Math.floor(A*F)),F),U(v.getChannelData(0),F,Eh(571921^_.length*7919^_.charCodeAt(0))),r.set(_,v),v}function M(){w("white"),w("brown"),w("rustle");const _=i(),v=(A,U)=>{try{(_&&_.setTimeout?_.setTimeout.bind(_):setTimeout)(A,U)}catch{}};v(()=>w("applauseLight"),700),v(()=>w("applauseBig"),1400)}function y(_){if(_.done)return;_.done=!0;for(const A of _.nodes){A.onended!==void 0&&(A.onended=null);try{A.disconnect()}catch{}}_.nodes.length=0;const v=s.indexOf(_);v>=0&&s.splice(v,1),h++}function C(_){const v=o.currentTime;for(const A of _.nodes)if(A.stop)try{A.stop(v)}catch{}y(_)}function R(){const _=o.currentTime;for(let v=s.length-1;v>=0;v--)s[v].end<_-1&&C(s[v])}function b(_=1,v=1){if(!x()||!d)return null;if(R(),s.length>=t){if(_<2)return null;if(s.length>=e){let U=null;for(const F of s)(!U||F.prio<U.prio||F.prio===U.prio&&F.t0<U.t0)&&(U=F);if(!U||U.prio>_)return null;C(U)}}const A=S(_,v);return s.push(A),f++,A}function S(_,v){const A=o.currentTime+.002,U=o.createGain();U.gain.value=v,U.connect(a);const F={prio:_,t0:A,end:A,done:!1,pending:0,nodes:[U],out:U},V=()=>{F.pending--,F.pending<=0&&y(F)},rt=W=>(F.nodes.push(W),W),J=(W,z,q)=>(rt(W),F.pending++,W.onended=V,F.end=Math.max(F.end,q),W),gt=(W,z,q,j,tt,O)=>(j=Math.max(Th*2,j),W.setValueAtTime(0,z),W.linearRampToValueAtTime(j,z+q),tt>0&&W.setValueAtTime(j,z+q+tt),W.exponentialRampToValueAtTime(Th,z+q+tt+O),z+q+tt+O),ot=(W,z,q,j)=>{if(W.setValueAtTime(z,j),q)for(const[tt,O]of q)W.exponentialRampToValueAtTime(Math.max(1,tt),j+Math.max(.001,O))};return F.filter=(W,z,q=.7,j=U,tt=null,O=A)=>{const $=rt(o.createBiquadFilter());return $.type=W,$.Q.value=q,ot($.frequency,z,tt,O),$.connect(j),$},F.tone=W=>{const z=A+En(W.t,0),q=En(W.a,.002),j=En(W.hold,0),tt=En(W.d,.1),O=o.createOscillator();O.type=W.type||"sine",ot(O.frequency,Math.max(1,En(W.f,440)),W.to,z),W.detune&&(O.detune.value=W.detune);const $=rt(o.createGain()),ht=gt($.gain,z,q,En(W.peak,.2),j,tt)+.02;if(O.connect($),$.connect(W.dest||U),W.vib){const[B,at,ft=0]=W.vib,Mt=o.createOscillator(),Pt=rt(o.createGain());Mt.frequency.value=B,Pt.gain.setValueAtTime(0,z),Pt.gain.linearRampToValueAtTime(at,z+ft+.08),Mt.connect(Pt),Pt.connect(O.frequency),J(Mt,z,ht),Mt.start(z),Mt.stop(ht)}return J(O,z,ht),O.start(z),O.stop(ht),O},F.noise=W=>{const z=w(W.buf||"white");if(!z)return null;const q=A+En(W.t,0),j=En(W.a,.001),tt=En(W.hold,0),O=En(W.d,.05),$=o.createBufferSource();$.buffer=z;const ht=En(W.rate,1);ht!==1&&($.playbackRate.value=ht);const B=rt(o.createGain()),at=gt(B.gain,q,j,En(W.peak,.2),tt,O)+.02;B.connect(W.dest||U),W.filter?$.connect(F.filter(W.filter.type,W.filter.f,En(W.filter.q,.7),B,W.filter.to,q)):$.connect(B);const ft=z.duration||z.length/z.sampleRate,Mt=(at-q)*ht,Pt=W.from0?0:Math.max(0,(ft-Mt)*n());return J($,q,at),W.from0?$.start(q):$.start(q,Pt,Math.min(ft-Pt,Mt+.01)),$.stop(at),$},F}return{start:g,ready:x,now:m,rng:n,setOutput:p,voice:b,buffer:w,prewarm:M,get ctx(){return o},stats:()=>({active:s.length,created:f,released:h})}}const yr=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,Mc=i=>i<0?0:i>1?1:i,IS=["pointerdown","pointerup","touchend","mousedown","click","keydown"],DS=["ui:play","ui:next","ui:retry","ui:pause","ui:resume","ui:overview","ui:skin"];function zS({events:i,getWindow:t}={}){const e=t||(()=>typeof window<"u"?window:null),n=LS({getWindow:e}),s=n.rng;let r=!1,o=!1,a=!1,c=!1;function l(){const B=e(),at=B&&B.navigator&&B.navigator.userActivation;at&&at.hasBeenActive===!1||d()}function u(B){const at=e();if(!(!at||!at.addEventListener||B===a)){a=B;for(const ft of IS)B?at.addEventListener(ft,l,{capture:!0,passive:!0}):at.removeEventListener(ft,l,{capture:!0,passive:!0})}}function d(){if(!n.start()){u(!1);return}const B=n.ctx;if(!c){c=!0,n.setOutput(!r&&!o),n.prewarm();try{B.onstatechange=()=>{B.state==="running"?u(!1):B.state!=="closed"&&u(!0)}}catch{}}B.state==="running"&&u(!1)}u(!0);function f(){n.setOutput(!r&&!o)}const h=new Map;function g(B,at){if(r||o||!n.ready())return!1;const ft=n.now(),Mt=h.get(B);return Mt!==void 0&&ft-Mt<at&&ft>=Mt?!1:(h.set(B,ft),!0)}const x=B=>1+(s()-.5)*2*B;function m(B,at,ft,Mt,Pt){const nt=_c(ft);B.tone({t:at,f:nt,a:.003,d:Mt,peak:Pt}),B.tone({t:at,f:nt*3.93,a:.001,d:Mt*.16,peak:Pt*.28}),B.noise({t:at,filter:{type:"bandpass",f:Math.min(nt*2.5,9e3),q:1.5},a:5e-4,d:.008,peak:Pt*.22})}function p(B,at,ft,Mt,Pt){const nt=_c(ft),mt=[[1,1,1],[2.76,.42,.45],[5.4,.16,.22]];for(const[H,Q,zt]of mt)nt*H<14e3&&B.tone({t:at,f:nt*H,a:.001,d:Mt*zt,peak:Pt*Q})}function w(B,at,ft,Mt,Pt){const nt=_c(ft),mt=B.filter("lowpass",500,1.2,B.out,[[nt*5+1200,.045],[nt*3+700,.25]],B.t0+at),H=[5.6,nt*.007,.14];B.tone({t:at,type:"sawtooth",f:nt,detune:-7,a:.025,hold:Mt,d:.16,peak:Pt,dest:mt,vib:H}),B.tone({t:at,type:"sawtooth",f:nt,detune:7,a:.025,hold:Mt,d:.16,peak:Pt*.8,dest:mt})}function M(B,at){const ft=n.voice(3,at?.5:.36);if(!ft)return;const Mt=at?3.4:1.8;ft.noise({t:B,buf:at?"applauseBig":"applauseLight",from0:!0,a:.06,hold:Mt-.5,d:.45,peak:1,filter:{type:"highpass",f:260,q:.6}})}function y(B){const at=n.voice(1);if(!at)return;const ft=.3+.55*Mc(B),Mt=x(.03);at.tone({f:1250*Mt,to:[[760*Mt,.03]],a:8e-4,d:.035,peak:.34*ft}),at.noise({filter:{type:"bandpass",f:2300*Mt,q:1.1},a:5e-4,d:.014,peak:.28*ft}),at.tone({f:210,to:[[150,.05]],a:.002,d:.05,peak:.22*ft})}function C(B,at=1){const ft=n.voice(2);if(!ft)return;const Mt=Mc(yr(B)/10),Pt=(.22+.78*Math.pow(Mt,.6))*at,nt=x(.03),mt=ft.filter("lowpass",2600+1e4*Mt,.6);ft.noise({filter:{type:"highpass",f:1900*nt,q:.7},a:4e-4,d:.011,peak:.9*Pt,dest:mt});const H=(1650+550*Mt)*nt,Q=[[1,.55,.06],[1.505,.32,.04],[2.27,.2,.025],[3.08,.1,.016]];for(const[zt,Qt,Ht]of Q)ft.tone({f:H*zt,to:[[H*zt*.985,Ht]],a:6e-4,d:Ht*(.85+.3*Mt),peak:Qt*Pt,dest:mt});ft.tone({f:640*nt,to:[[430*nt,.03]],a:.001,d:.03,peak:.22*Pt,dest:mt})}function R(B,at,ft,Mt=1){const Pt=[[1,.5,.07],[2.31,.25,.04],[3.93,.1,.02]];for(const[nt,mt,H]of Pt)B.tone({f:ft*nt,to:[[ft*nt*.97,H*Mt]],a:8e-4,d:H*Mt,peak:mt*at});B.noise({filter:{type:"bandpass",f:ft*4.5,q:1.2},a:5e-4,d:.01,peak:.3*at}),B.tone({f:140,to:[[105,.06]],a:.002,d:.06,peak:.22*at})}function b({id:B,kind:at,speed:ft}){const Mt=yr(ft);if(Mt<.3||!g("wall"+yr(B),.045))return;const Pt=Mc(Mt/8),nt=.15+.85*Math.pow(Pt,.7),mt=x(.04),H=n.voice(0);if(H)switch(at){case"cushion":H.tone({f:150*mt,to:[[92*mt,.16]],a:.002,d:.16,peak:.55*nt}),H.noise({buf:"brown",filter:{type:"lowpass",f:600,q:.7},a:.002,d:.07,peak:.5*nt}),H.tone({type:"triangle",f:225*mt,to:[[300*mt,.05],[270*mt,.18]],a:.004,d:.17,peak:.13*nt,vib:[16,8,0]}),H.noise({filter:{type:"bandpass",f:1400,q:.8},a:5e-4,d:.012,peak:.12*nt});break;case"hedge":H.noise({buf:"rustle",from0:!0,rate:.85+.35*s(),a:.002,hold:.12,d:.2,peak:.55*(.4+.6*nt)}),H.noise({buf:"brown",filter:{type:"lowpass",f:380,q:.7},a:.003,d:.07,peak:.35*nt});break;case"bumper":{const Q=H.filter("lowpass",2400,.8);H.tone({type:"triangle",f:170*mt,to:[[430*mt,.045],[330*mt,.32]],vib:[24,26,0],a:.003,d:.34,peak:.36*(.35+.65*nt),dest:Q}),H.tone({f:120,to:[[78,.08]],a:.002,d:.08,peak:.4*nt}),H.noise({filter:{type:"bandpass",f:3e3,q:1.5},a:5e-4,d:.006,peak:.18*nt});break}case"tree":R(H,nt,300*mt,.75),H.noise({buf:"rustle",from0:!0,rate:1.1+.3*s(),a:.004,hold:.04,d:.15,peak:.22*nt});break;case"lollipop":R(H,nt*.9,720*mt,.7);break;case"post":R(H,nt,520*mt);break;default:R(H,nt,430*mt);break}}function S(){if(!g("hop",.12))return;const B=n.voice(2);if(!B)return;const at=x(.03);B.noise({filter:{type:"bandpass",f:4200*at,q:5},a:5e-4,d:.009,peak:.5}),B.tone({f:1850*at,a:.001,d:.13,peak:.22}),B.tone({f:1850*2.76*at,a:.001,d:.05,peak:.09}),B.noise({t:.075,filter:{type:"bandpass",f:3700*at,q:4},a:5e-4,d:.008,peak:.2})}function _(B){if(!g("holed",.3))return;const at=n.voice(2);if(!at)return;const ft=yr(B,1),Mt=ft>2.5?4:ft>.9?3:2,Pt=[[0,3e3,.3],[.05,2650,.24],[.092,3250,.18],[.125,2500,.13]];for(let mt=0;mt<Mt;mt++){const[H,Q,zt]=Pt[mt];at.noise({t:H,filter:{type:"bandpass",f:Q*x(.04),q:3.5},a:5e-4,d:.016,peak:zt})}const nt=Pt[Mt-1][0]+.05;at.tone({t:nt,f:310,to:[[205,.22]],a:.002,d:.26,peak:.5}),at.tone({t:nt,f:640,to:[[470,.1]],a:.001,d:.11,peak:.13}),at.noise({t:nt,filter:{type:"bandpass",f:820,q:2.5},a:.001,d:.1,peak:.26}),at.tone({t:nt+.13,f:285,to:[[215,.11]],a:.002,d:.12,peak:.2}),at.noise({t:nt+.24,filter:{type:"bandpass",f:1900,q:3},a:5e-4,d:.01,peak:.08})}function v(B=1){const at=n.voice(2,B);if(at){at.tone({f:260,to:[[720,.07]],a:.002,d:.09,peak:.35}),at.noise({filter:{type:"lowpass",f:5200,q:.8,to:[[500,.45]]},a:.004,d:.5,peak:.5}),at.noise({buf:"brown",filter:{type:"lowpass",f:420,q:.7},a:.004,d:.26,peak:.42});for(let ft=0;ft<4;ft++){const Mt=480+s()*520;at.tone({t:.13+ft*.07+s()*.03,f:Mt,to:[[Mt*1.9,.045]],a:.002,d:.05,peak:.11})}for(let ft=0;ft<3;ft++)at.noise({t:.2+s()*.3,filter:{type:"bandpass",f:4200+s()*2e3,q:3},a:5e-4,d:.012,peak:.09})}}function A(B=1){const at=n.voice(2,B);at&&(at.noise({filter:{type:"bandpass",f:1900,q:1.2,to:[[340,.4]]},a:.12,d:.3,peak:.36}),at.tone({f:900,to:[[260,.42]],a:.02,hold:.1,d:.32,peak:.08}),at.tone({t:.44,f:112,to:[[56,.16]],a:.003,d:.17,peak:.5}),at.noise({t:.44,buf:"brown",filter:{type:"lowpass",f:320,q:.7},a:.003,d:.1,peak:.36}))}function U(B){if(!g("whiff",.3))return;const at=n.voice(1);if(at){const ft=at.filter("lowpass",1600,.7);at.tone({type:"triangle",f:540,to:[[300,.3]],vib:[7,14,.05],a:.03,d:.3,peak:.22,dest:ft}),at.tone({f:270,to:[[150,.3]],a:.03,d:.28,peak:.1})}B==="water"&&g("hazard",.3)?v(.45):B==="oob"&&g("hazard",.3)&&A(.45)}function F(){if(!g("drop",.2))return;const B=n.voice(1);B&&(B.tone({f:380,to:[[1e3,.035]],a:.001,d:.05,peak:.28}),B.noise({filter:{type:"bandpass",f:2500,q:1.5},a:5e-4,d:.006,peak:.14}),B.tone({t:.085,f:700,to:[[520,.03]],a:.001,d:.035,peak:.08}))}function V(B){if(!g("ui",.06))return;const at=n.voice(1);at&&(at.tone({f:1500,to:[[1e3,.03]],a:.001,d:.035,peak:.26}),at.noise({filter:{type:"highpass",f:3e3,q:.7},a:5e-4,d:.004,peak:.1}),B&&at.tone({t:.05,f:2e3,to:[[1500,.03]],a:.001,d:.04,peak:.2}))}const rt=72,J=74,gt=76,ot=79,W=69,z=67,q=84,j=88,tt=91,O=96;function $(B){if(!g("jingle",.5))return;const at=B==="ace"||B==="albatross"||B==="eagle",ft=n.voice(3,at?.62:.7);if(ft)if(at){const Mt=[[0,rt,.06],[.11,gt,.06],[.22,ot,.06],[.34,q,.6]];for(const[nt,mt,H]of Mt)w(ft,nt,mt,H,.2),m(ft,nt,mt,.35,.22);w(ft,.34,ot,.6,.1),w(ft,.34,gt,.6,.08);const Pt=[q,86,j,tt,93,O,98,100];for(let nt=0;nt<Pt.length;nt++)p(ft,.48+nt*.04,Pt[nt],.5,.07);if(B!=="eagle"){for(const nt of[q,j,tt,O])p(ft,1,nt,1.2,.08);m(ft,1,rt,.8,.18)}M(.3,!0)}else if(B==="birdie"){const Mt=[[0,rt],[.085,gt],[.17,ot],[.255,q]];for(const[Pt,nt]of Mt)m(ft,Pt,nt,Pt>.2?.7:.3,.28);p(ft,.255,q,.9,.09),p(ft,.255,j,.9,.06),M(.28,!1)}else B==="par"?(p(ft,0,ot,1,.2),m(ft,0,ot,.3,.12),p(ft,.16,q,1.3,.22),m(ft,.16,q,.5,.13)):B==="picked"?(m(ft,0,J,.35,.18),m(ft,.17,W,.55,.16)):(m(ft,0,gt,.3,.22),m(ft,.15,J,.3,.2),m(ft,.3,z,.3,.16),m(ft,.45,rt,.75,.22),p(ft,.45,q,.6,.05))}if(i&&i.on){i.on("shot:fire",B=>{d(),g("shot",.05)&&y(yr(B&&B.power,.5))}),i.on("ball:contact",B=>{g("clack",.03)&&C(B&&B.speed)}),i.on("ball:ballhit",B=>{g("clack",.03)&&C(B&&B.speed,.7)}),i.on("ball:wall",B=>b(B||{})),i.on("ball:hop",()=>S()),i.on("ball:holed",B=>_(B&&B.speed)),i.on("ball:hazard",B=>{g("hazard",.3)&&(B&&B.kind==="water"?v(1):A(1))}),i.on("ball:whiff",B=>U(B&&B.reason)),i.on("ball:drop",()=>F()),i.on("hole:done",B=>$(B&&B.term&&B.term.key));for(const B of DS)i.on(B,()=>V(B==="ui:play"||B==="ui:next"||B==="ui:retry"||B==="ui:resume"));i.on("ui:sound",B=>{ht.setMuted(!!(B&&B.muted)),V(!0)}),i.on("audio:external",B=>ht.setExternalMute(!!(B&&B.muted)))}const ht={unlock:d,setMuted(B){r=!!B,f()},setExternalMute(B){o=!!B,f()},get muted(){return r},stats:()=>n.stats()};return ht}const hs=typeof window<"u"&&window.__ebgBoot?window.__ebgBoot:null,Br=({pct:i,label:t})=>hs!==null?hs.stage(i,t):void 0;hs!==null&&hs.codeReady&&hs.codeReady();await Br(Vs.course);await zh();Zd();const jl=document.getElementById("stage"),Xr=document.getElementById("ui");Object.assign(jl.style,{position:"fixed",inset:"0",overflow:"hidden"});Object.assign(Xr.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"10"});OS();const Oe=ap(),yn=await e0(rp),qe=J_(jl),Qe=AM(qe),en=Qp({events:Oe}),Zl=yn.isFresh();let ms=Zl?0:Math.min(yn.nextIndex(),Si.length-1),dn=Xh(Si[ms]),Gn=Fd(qe,dn),Rh=!0;qe.setRound(dn.round);Qe.setLevel(dn);await Br(Vs.balls);const lr=b2(qe,{uiRoot:Xr,rig:Qe});lr.setSkin(yn.skin);lr.setRound(dn.round);const qd=I2(qe,{events:Oe,play:en}),NS=j2(qe);await Br(Vs.flags);const $s=vS(Xr,{events:Oe}),Yd=RS(Xr,{events:Oe,progress:yn,holes:Si,rounds:Hr,rig:Qe,play:en}),US=76,Kd=(i={})=>{Qe.setInsets&&Qe.setInsets({top:Math.max(US,i.top||0),right:i.right||0,bottom:i.bottom||0,left:i.left||0})},ra=xS({stage:qe,rig:Qe,play:en,events:Oe,uiRoot:Xr,onInsets:Kd});Kd(ra.insets?ra.insets():{});const ga=zS({events:Oe});ga.setMuted(yn.muted);const Jl=document.createElement("div");Jl.textContent=`v${Lh}`;Object.assign(Jl.style,{position:"fixed",right:"max(10px, env(safe-area-inset-right))",bottom:"max(6px, env(safe-area-inset-bottom))",zIndex:"5",font:"11px system-ui, sans-serif",letterSpacing:".06em",color:"rgba(255,255,255,.55)",pointerEvents:"none"});document.body.appendChild(Jl);const Fe={menuOpen:!1,paused:!1,ad:!1,gameplay:!1,holesThisSession:0,roundPending:null,loading:!1};function bi(){const i=!Fe.menuOpen&&!Fe.paused&&!Fe.ad&&!Fe.loading&&en.state!=="idle"&&en.state!=="done";ra.enable(i),i!==Fe.gameplay&&(Fe.gameplay=i,i?Qd():tp())}function oa(){ga.setExternalMute(Ec()),Oe.emit("audio:external",{muted:Ec()})}sp(oa);oa();function qr(i){ms=i,Fe.loading=!0,Rh&&dn.id===Si[i].id||(Gn.dispose(),dn=Xh(Si[i]),Gn=Fd(qe,dn)),Rh=!1,qe.setRound(dn.round),lr.setRound(dn.round),Qe.setLevel(dn),Gn.faceCamera(qe.camera),qd.clear(),en.load(dn,i),$s.setHole(dn,i),$s.setStrokes(0,dn.par),$s.show(!0),ep({round:dn.round,hole:i+1}),Oe.emit("game:hole",{index:i,level:dn,first:Zl&&i===0&&Fe.holesThisSession===0}),bi(),Qe.intro(en).then(()=>{ms===i&&(Fe.loading=!1,en.state==="ready"&&Qe.frameShot(en),Gn.setFlow(1),bi())})}async function $d(){if(!(Fe.holesThisSession<2)){Fe.ad=!0,Oe.emit("ad:start",{}),oa(),bi();try{await ip()}catch(i){console.error(i)}Fe.ad=!1,oa(),Oe.emit("ad:end",{}),bi()}}function FS(i){const t=Hr.find(r=>r.id===i),e=i===1?0:9,n=t.holes.map((r,o)=>({index:e+o,strokes:yn.best(e+o),par:r.par})),s=yn.roundTotal(i);return{round:i,name:t.name,holes:n,total:s.total,par:s.par,rel:zc(s.total,s.par),complete:s.complete}}Oe.on("shot:ready",({strokes:i,par:t})=>{$s.setStrokes(i,t),Fe.loading||Qe.frameShot(en),Gn.setFlow(1),bi()});Oe.on("shot:fire",({strokes:i})=>{Qe.userMoved=!1,$s.setStrokes(i,en.level.par),Gn.setFlow(0),ga.unlock()});Oe.on("shot:end",({strokes:i,par:t})=>$s.setStrokes(i,t));Oe.on("ball:contact",()=>lr.flash());Oe.on("ball:holed",()=>Gn.wiggleFlag());Oe.on("hole:done",({index:i,strokes:t,stars:e,term:n,level:s})=>{const r=yn.roundTotal(s.round);yn.record(i,t,e),Fe.holesThisSession+=1,(n.key==="ace"||n.key==="albatross")&&eu();const o=Si.filter((c,l)=>yn.best(l)!==null).length;if(np(Math.round(o/Si.length*100)),i===8||i===17){const c=yn.roundTotal(s.round);c.complete&&(!r.complete||c.total<r.total)&&eu(),Fe.roundPending=s.round}bi()});Oe.on("ui:next",async()=>{if(Fe.roundPending){const i=Fe.roundPending;Fe.roundPending=null,Oe.emit("game:round",FS(i));return}if(await $d(),ms>=Si.length-1){Yd.showTitle();return}qr(ms+1)});Oe.on("ui:retry",async()=>{Fe.roundPending=null,en.state==="done"&&await $d(),Fe.paused=!1,qr(ms)});Oe.on("ui:play",({index:i})=>{Fe.roundPending=null,Fe.paused=!1,qr(i)});Oe.on("ui:pause",()=>{Fe.paused=!0,bi()});Oe.on("ui:resume",()=>{Fe.paused=!1,bi()});Oe.on("ui:menu",({open:i})=>{Fe.menuOpen=!!i,bi()});Oe.on("ui:overview",({on:i})=>Qe.overview(!!i));Oe.on("ui:sound",({muted:i})=>{yn.setMuted(!!i),ga.setMuted(!!i)});Oe.on("ui:skin",({id:i})=>{yn.setSkin(i),lr.setSkin(i)});jl.addEventListener("pointerdown",()=>{Fe.loading&&Qe.skipIntro&&Qe.skipIntro()});qe.onResize(()=>{Gn.faceCamera(qe.camera),en.state==="ready"&&!Qe.userMoved&&Qe.frameShot(en)});let yc=0,Ph=0;function jd(i){requestAnimationFrame(jd);const t=yc?Math.min((i-yc)/1e3,.1):0;yc=i,Ph+=t,!Fe.paused&&!Fe.ad&&en.update(t);const e=en.balls();en.state==="rolling"&&!Qe.userMoved&&Qe.follow(e[1].x,e[1].z),Qe.update(t),Gn&&Gn.faceCamera(qe.camera),lr.update(e,t),NS.update(en,t),Gn.update(t,Ph),ra.update(t),qd.update(t),qe.render()}window.ebg={version:Lh,events:Oe,play:en,stage:qe,rig:Qe,progress:yn,HOLES:Si,ROUNDS:Hr,loadHole:qr,get level(){return dn},get course(){return Gn}};if(hs!==null){if(await Br(Vs.warm),qe.renderer&&qe.scene&&qe.camera)try{await Promise.race([qe.renderer.compileAsync(qe.scene,qe.camera),new Promise(i=>setTimeout(i,4e3))])}catch(i){console.error(i)}for(let i=0;i<3;i++)await Br({pct:Vs.warm.pct+3+i*1.5,label:Vs.warm.label}),qe.render();await hs.ready()}Jd();requestAnimationFrame(jd);qr(ms);Zl||Yd.showTitle();function OS(){window.addEventListener("keydown",i=>{const t=i.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown"].includes(i.code)&&i.preventDefault()}),window.addEventListener("wheel",i=>i.preventDefault(),{passive:!1}),window.addEventListener("contextmenu",i=>i.preventDefault())}

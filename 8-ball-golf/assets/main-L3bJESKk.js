import{S as Fs}from"./index-D5rtYYju.js";const ph="0.2.1",gc="8bg:",Go={script:5e3,init:6e3,adStart:12e3,adMax:15e4};let Ws=null,Vn="none",Gr=null,Di=null,Os=0,Vo=!1,Ii=!1,Ji=!1,Xl=-1;const xc=new Set,vc=new Map,mh=()=>typeof window<"u"?window:null,In=(...i)=>{try{console.warn("[platform]",...i)}catch{}};function Hi(i){if(Ws)try{const t=i(Ws);t&&typeof t.catch=="function"&&t.catch(e=>In(e))}catch(t){In(t)}}function ql(i,t,e){let n=0;return Promise.race([Promise.resolve(i).catch(()=>e),new Promise(s=>{n=setTimeout(()=>s(e),t)})]).finally(()=>clearTimeout(n))}function Wo(){const i=_c();for(const t of[...xc])try{t(i)}catch(e){In(e)}}function gh(){try{const i=mh();return i&&i.localStorage||null}catch{return null}}function xh(){return Gr||(Gr=(async()=>{try{const i=mh();if(!i||!i.__cgSdk)return{env:Vn};const e=await ql(i.__cgSdk,Go.script,!1)&&i.CrazyGames&&i.CrazyGames.SDK;if(!e||typeof e.init!="function")return{env:Vn};if(!await ql(Promise.resolve().then(()=>e.init()).then(()=>!0,o=>(In("init failed",o),!1)),Go.init,!1))return{env:Vn};const s=String(e.environment||"disabled");if(s!=="crazygames"&&s!=="local")return Vn=s,{env:Vn};const r=e.game;try{Ji=!!(r.settings&&r.settings.muteAudio)}catch{Ji=!1}try{r.addSettingsChangeListener(o=>{let a=Ji;try{a=!!((o&&"muteAudio"in o?o:r.settings)||{}).muteAudio}catch{}a!==Ji&&(Ji=a,Wo())})}catch(o){In("settings listener",o)}try{e.data&&typeof e.data.getItem=="function"&&(e.data.getItem(gc+"probe"),Di=e.data)}catch(o){In("data module off",o&&(o.code||o.message||o)),Di=null}Ws=e,Vn=s,Os===1&&Hi(o=>o.game.loadingStart()),Ji&&Wo()}catch(i){In("SDK unavailable",i),Ws=null,Di=null,(Vn==="crazygames"||Vn==="local")&&(Vn="none")}return{env:Vn}})(),Gr)}function zd(){Os||(Os=1,Hi(i=>i.game.loadingStart()))}function Nd(){if(Os===2)return;const i=Os;Os=2,i===1&&Hi(t=>t.game.loadingStop())}function Ud(){Vo||Ii||(Vo=!0,Hi(i=>i.game.gameplayStart()))}function Fd(){Vo&&(Vo=!1,Hi(i=>i.game.gameplayStop()))}function Yl(){Hi(i=>i.game.happytime())}function Od(i){Hi(t=>i?t.game.setGameContext(i):t.game.clearGameContext())}function kd(i){const t=Math.max(0,Math.min(100,Math.round(Number(i)||0)));t<=Xl||(Xl=t,Hi(e=>e.game.reportGameCompletedPercentage(t)))}function Bd(){return!Ws||Ii?Promise.resolve():new Promise(i=>{let t=!1,e=0,n=0;const s=()=>{t||(t=!0,clearTimeout(e),i())},r=()=>{clearTimeout(n),Ii&&(Ii=!1,Wo()),s()};e=setTimeout(()=>{Ii||s()},Go.adStart);const o={adStarted:()=>{clearTimeout(e),clearTimeout(n),Ii||(Ii=!0,Wo()),n=setTimeout(r,Go.adMax)},adFinished:r,adError:a=>{const c=a&&a.code;c&&c!=="adCooldown"&&c!=="adsDisabledBasicLaunch"&&c!=="unfilled"&&In("ad",c),r()}};try{const a=Ws.ad.requestAd("midgame",o);a&&typeof a.then=="function"&&a.then(void 0,()=>r())}catch(a){In("ad",a),r()}})}function _c(){return Ji||Ii}function Hd(i){return typeof i!="function"?()=>{}:(xc.add(i),()=>{xc.delete(i)})}const Gd={async load(i){await xh();const t=gc+i;if(Di)try{const e=Di.getItem(t);if(e!=null)return String(e);const n=Kl(t);if(n!=null){try{Di.setItem(t,n)}catch(s){In("migrate",s)}return n}return null}catch(e){In("data load",e)}return Kl(t)},save(i,t){const e=gc+i,n=String(t);if(Di)try{Di.setItem(e,n);return}catch(s){In("data save",s)}Vd(e,n)}};function Kl(i){const t=gh();if(t)try{const e=t.getItem(i);if(e!=null)return String(e)}catch{}return vc.has(i)?vc.get(i):null}function Vd(i,t){vc.set(i,t);const e=gh();if(e)try{e.setItem(i,t)}catch{}}function Wd(){const i=new Map;return{on(t,e){return i.has(t)||i.set(t,new Set),i.get(t).add(e),()=>i.get(t).delete(e)},emit(t,e){const n=i.get(t);if(n)for(const s of[...n])try{s(e)}catch(r){console.error("[events] "+t,r)}}}}const Mc=Math.PI/180,Ns=i=>Math.round(i*100)/100;function Wn(i,t=12){const e=i.length,n=[];for(let s=0;s<e;s++){const r=i[s],o=r[2]||0;if(!o){n.push([r[0],r[1]]);continue}const a=i[(s+e-1)%e],c=i[(s+1)%e];let l=a[0]-r[0],u=a[1]-r[1],f=c[0]-r[0],d=c[1]-r[1];const h=Math.hypot(l,u),g=Math.hypot(f,d);l/=h,u/=h,f/=g,d/=g;const x=Math.acos(Math.max(-1,Math.min(1,l*f+u*d)));let m=o/Math.tan(x/2),p=o;const M=.5*Math.min(h,g);m>M&&(m=M,p=m*Math.tan(x/2));const _=l+f,w=u+d,T=Math.hypot(_,w),b=p/Math.sin(x/2),E=r[0]+_/T*b,v=r[1]+w/T*b,S=Math.atan2(r[1]+u*m-v,r[0]+l*m-E);let y=Math.atan2(r[1]+d*m-v,r[0]+f*m-E)-S;for(;y>Math.PI;)y-=2*Math.PI;for(;y<-Math.PI;)y+=2*Math.PI;const C=Math.max(1,Math.ceil(Math.abs(y)/(t*Mc)));for(let z=0;z<=C;z++)n.push([Ns(E+p*Math.cos(S+y*z/C)),Ns(v+p*Math.sin(S+y*z/C))])}return n.filter((s,r)=>{const o=n[(r+n.length-1)%n.length];return r===0&&n.length>1?!(s[0]===n[n.length-1][0]&&s[1]===n[n.length-1][1]):!(s[0]===o[0]&&s[1]===o[1])})}function $l(i,t,e,n,s,r=10){const o=[],a=Math.max(2,Math.ceil((s-n)/r));for(let c=0;c<=a;c++){const l=(n+(s-n)*c/a)*Mc;o.push([Ns(i[0]+e*Math.cos(l)),Ns(i[1]+e*Math.sin(l))])}for(let c=a;c>=0;c--){const l=(n+(s-n)*c/a)*Mc;o.push([Ns(i[0]+t*Math.cos(l)),Ns(i[1]+t*Math.sin(l))])}return o}const Xd=[{id:"g1",name:"Hello, Eight!",par:2,circle:5,size:[30,12],tee:[4,6],cup:[21,6],tip:"Sink the 8 in the hole!",border:"wall",ground:Wn([[0,.8,4],[15,0,8],[30,.8,4],[30,11.2,4],[15,12,8],[0,11.2,4]]),zones:[{surface:"green",circle:{c:[21,6],r:3.6}}],props:[{type:"sign",at:[1.5,-1.4]},{type:"flowers",at:[6,-1.3]},{type:"flowers",at:[11,13.3]},{type:"flowers",at:[19,-1.3]},{type:"flowers",at:[25,13.2]},{type:"tree",at:[-3.2,13.5]},{type:"tree",at:[33.5,-2.2]},{type:"bush",at:[27,13.4]},{type:"bush",at:[-1.4,3]},{type:"statue8",at:[33.6,6]}]},{id:"g2",name:"Easy Does It",par:2,circle:5,size:[34,14],tee:[4,7],cup:[16,7],tip:"Softer is smarter.",border:"wall",ground:Wn([[0,2,3],[9,1.5,3],[11,3,2],[16,1,5],[21,3.5,2],[34,3.5,3],[34,10.5,3],[21,10.5,2],[16,13,5],[11,11,2],[9,12.5,3],[0,12,3]]),zones:[{surface:"green",circle:{c:[16,7],r:3.6}}],props:[{type:"sign",at:[1,.2]},{type:"flowers",at:[10.5,1.2]},{type:"flowers",at:[10.5,12.8]},{type:"flowers",at:[16,-.6]},{type:"flowers",at:[16,14.6]},{type:"bush",at:[26,2]},{type:"bush",at:[29,12]},{type:"flowerbox",at:[22,12.3]},{type:"flowerbox",at:[31,1.7]},{type:"tree",at:[37.5,7]},{type:"tree",at:[24,15.5]}]},{id:"g3",name:"Side Swipe",par:3,circle:4,size:[30,18],tee:[2.8,3.54],cup:[25,15],tip:"Hit its side!",border:"hedge",ground:Wn([[0,5.73,1.5],[2.92,0,1.5],[22,0,6],[30,3,5],[30,18,4],[17,18,4],[15,9.5,3],[0,10,3]]),zones:[{surface:"green",circle:{c:[25,15],r:3.8}}],props:[{type:"bush",at:[-1,2.2]},{type:"bush",at:[1.2,-1]},{type:"bush",at:[-1,7.5]},{type:"fountain",at:[6.5,14.5]},{type:"flowers",at:[2,12.5]},{type:"flowers",at:[11.5,12]},{type:"flowers",at:[12,16.5]},{type:"flowers",at:[12,-1.2]},{type:"tree",at:[33.5,9]},{type:"tree",at:[26,-3.2]}]},{id:"g4",name:"Bank Job",par:3,circle:4,size:[26,15],tee:[3,3],cup:[23,3],tip:"Bounce it off the wall!",border:"wall",ground:Wn([[0,.5,3],[11.5,0,1.5],[11.5,8.5,1.5],[14.5,8.5,1.5],[14.5,0,1.5],[26,.5,3],[26,15,4],[0,15,4]]),zones:[{surface:"green",circle:{c:[23,3],r:3.8}}],props:[{type:"flowerbox",at:[13,2]},{type:"flowerbox",at:[13,5.2]},{type:"flowers",at:[13,7.6]},{type:"tree",at:[-3.3,7]},{type:"flowers",at:[6,16.3]},{type:"flowers",at:[20,16.3]},{type:"bush",at:[27.6,9]},{type:"sign",at:[1,-1]},{type:"tree",at:[29.3,-1.5]}]},{id:"g5",name:"Lollipop Lane",par:3,circle:3,size:[40,20],tee:[4,10],cup:[36,10],tip:"Move the white ball!",border:"wall",ground:Wn([[0,3,3],[10,0,6],[30,0,6],[40,3,3],[40,17,3],[30,20,6],[10,20,6],[0,17,3]]),zones:[{surface:"green",circle:{c:[36,10],r:3.5}}],posts:[...[4,8,12,16].flatMap(i=>[12,20,28].map(t=>({at:[t,i],r:.6,kind:"lollipop"}))),...[6,10,14].flatMap(i=>[16,24].map(t=>({at:[t,i],r:.6,kind:"lollipop"})))],props:[{type:"lollipop",at:[-3.2,3]},{type:"lollipop",at:[43.2,17]},{type:"lollipop",at:[20,23.2]},{type:"flowers",at:[20,-1.2]},{type:"flowers",at:[8,20.6]},{type:"flowers",at:[32,20.6]},{type:"tree",at:[-3.5,15]},{type:"tree",at:[43.5,4]},{type:"sign",at:[1.5,1.2]}]},{id:"g6",name:"Up & Over",par:3,circle:4,size:[40,18],tee:[4,9],cup:[35,9],tip:"Uphill? Hit harder.",border:"hedge",ground:Wn([[0,2,3],[13,1,3],[15.5,5,2],[23,5,2],[25,1,3],[40,2,3],[40,16,3],[25,17,3],[23,13,2],[15.5,13,2],[13,17,3],[0,16,3]]),steps:[{axis:"x",from:16,to:22,h:1.8}],zones:[{surface:"green",circle:{c:[35,9],r:4}}],props:[{type:"flowers",at:[19,3.5]},{type:"flowers",at:[19,14.5]},{type:"bush",at:[16.5,2.5]},{type:"bush",at:[21.5,15.5]},{type:"tree",at:[7,20]},{type:"tree",at:[7,-2]},{type:"flowers",at:[32,18]},{type:"flowers",at:[32,0]},{type:"statue8",at:[43.2,9]},{type:"sign",at:[1,.8]}]},{id:"g7",name:"Sidewinder",par:3,circle:4,size:[42,20],tee:[2.5,3.5],cup:[39,15],tip:"Arrows show the slope.",border:"wall",tilt:[0,.05],ground:Wn([[0,1,3],[12,0,8],[30,2.5,8],[42,7,4],[42,19.5,4],[32,20,8],[14,16,8],[0,12.5,3]]),zones:[{surface:"green",circle:{c:[39,15],r:4}}],props:[{type:"tree",at:[4,18]},{type:"tree",at:[18,21.5]},{type:"flowers",at:[8,15.5]},{type:"flowers",at:[26,20.3]},{type:"bush",at:[22,.2]},{type:"flowers",at:[36,3.2]},{type:"tree",at:[44.8,2]},{type:"sign",at:[.5,-1]}]},{id:"g8",name:"Sandy Toes",par:3,circle:3.5,size:[40,20],tee:[4,11],cup:[33,8.5],tip:"Sand slows the 8.",border:"wall",ground:Wn([[0,4,3],[12,1,6],[32,1,5],[40,4,4],[40,16,4],[32,20,5],[12,20,6],[0,18,3]]),zones:[{surface:"green",circle:{c:[33,8.5],r:3.6}},{surface:"sand",poly:Wn([[13,5,3],[20,2.5,4],[29,3.5,3],[30,7,2],[27,10.6,3],[17,10.6,3],[12.5,8.5,2]])},{surface:"sand",poly:$l([33,8.5],3,4.6,-70,80)}],props:[{type:"flowers",at:[22,-.5]},{type:"bush",at:[9,.2]},{type:"flowers",at:[22,21]},{type:"bush",at:[36,19.2]},{type:"tree",at:[-3.4,11]},{type:"tree",at:[43.5,10]},{type:"sign",at:[.5,2]}]},{id:"g9",name:"King of the Hill",par:4,circle:3.5,size:[50,28],tee:[5,5],cup:[37,17.5],tip:"Find the way up!",border:"hedge",ground:Wn([[0,0,4],[14.5,0,1.5],[14.5,14,1.5],[17.5,14,1.5],[17.5,0,1.5],[50,0,5],[50,28,5],[0,28,4]]),plateaus:[{circle:{c:[37,17],r:5},h:1.5,ramp:4,linear:!0}],arcs:[{kind:"hedge",c:[37,17],r:5,from:250,to:530}],zones:[{surface:"green",circle:{c:[37,17],r:4.6}},{surface:"sand",poly:$l([37,17],9.3,11,255,525)}],props:[{type:"flowerbox",at:[16,3]},{type:"flowerbox",at:[16,9]},{type:"flowers",at:[16,12.6]},{type:"tree",at:[-3.5,21]},{type:"tree",at:[53.5,8]},{type:"tree",at:[30,31.5]},{type:"flowers",at:[8,-1]},{type:"flowers",at:[33,-1]},{type:"statue8",at:[53.6,22]},{type:"sign",at:[-1,2]}]}],jl=i=>Math.round(i*100)/100,Lo=(i,t)=>[jl(i),jl(t)];function bn(i,t=2.5,e=5,n=!0){const s=i.filter((a,c)=>{const l=i[(c+i.length-1)%i.length];return!n&&c===0||Math.hypot(a[0]-l[0],a[1]-l[1])>1e-6}),r=[],o=s.length;for(let a=0;a<o;a++){const c=s[a],l=c[2]??t;if(!n&&(a===0||a===o-1)){r.push(Lo(c[0],c[1]));continue}const u=s[(a+o-1)%o],f=s[(a+1)%o],d=Math.hypot(u[0]-c[0],u[1]-c[1]),h=Math.hypot(f[0]-c[0],f[1]-c[1]),g=[(u[0]-c[0])/d,(u[1]-c[1])/d],x=[(f[0]-c[0])/h,(f[1]-c[1])/h],m=Math.max(-1,Math.min(1,g[0]*x[0]+g[1]*x[1])),p=Math.acos(m)/2;if(!l||p>1.55){r.push(Lo(c[0],c[1]));continue}const M=Math.min(l/Math.tan(p),d*.48,h*.48),_=[c[0]+g[0]*M,c[1]+g[1]*M],w=[c[0]+x[0]*M,c[1]+x[1]*M];for(let T=0;T<=e;T++){const b=T/e,E=(1-b)*(1-b),v=2*(1-b)*b,S=b*b;r.push(Lo(E*_[0]+v*c[0]+S*w[0],E*_[1]+v*c[1]+S*w[1]))}}return r}function yc(i,t,e,n,s=10){const r=Math.max(2,Math.ceil(Math.abs(n-e)/s)),o=[];for(let a=0;a<=r;a++){const c=(e+(n-e)*a/r)*Math.PI/180;o.push(Lo(i[0]+Math.cos(c)*t,i[1]+Math.sin(c)*t))}return o}function qd(i,t,e){const n=r=>i.reduce((o,a,c)=>Math.hypot(a[0]-r[0],a[1]-r[1])<Math.hypot(i[o][0]-r[0],i[o][1]-r[1])?c:o,0),s=[];for(let r=n(t),o=n(e);s.push(i[r]),r!==o;r=(r+1)%i.length);return s}const Yd={id:"l1",name:"Bend It",par:3,circle:4.5,size:[40,22],tee:[5,11],cup:[35,11],tip:"Slide the dot to bend the 8!",ground:bn([[1,4],[12,1],[26,1.5],[39,3],[39,19],[26,20.5],[12,21],[1,18]],4.5),border:"wall",posts:[{at:[16,12.3],r:1.6,kind:"tree"},{at:[30.5,14],r:1.3,kind:"post"},{at:[30.5,8],r:1.3,kind:"post"}],zones:[{surface:"green",circle:{c:[35,11],r:4}}],props:[{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[41.5,22.5]},{type:"tree",at:[20,23.5],scale:1.2},{type:"bush",at:[6,-1.5]},{type:"bush",at:[33,-1.5]},{type:"flowers",at:[18,-1.6]},{type:"flowers",at:[-2,11]},{type:"sign",at:[-2.2,6]}]},ha=(i,t,e,n)=>{const s=n?1:-1;return[{kind:"hedge",pts:[[i-1.2,t],[i,t+s*1.2],[i+1.2,t]]},{kind:"hedge",pts:[[i,t+s*1.2],[i,e]]}]},Kd={id:"l2",name:"Slalom",par:4,circle:4,size:[46,22],tee:[4,11.5],cup:[38,9],tip:"Bend left, then bend right!",ground:bn([[1,2],[23,1],[45,2],[45,20],[23,21],[1,20]],4),border:"wall",walls:[...ha(10,20.36,14,!1),...ha(18,1.36,9.1,!0),...ha(29,1.5,9.2,!0)],posts:[{at:[10,13],r:1.2,kind:"tree"},{at:[18,10.1],r:1.2,kind:"tree"},{at:[29,10.2],r:1.2,kind:"tree"}],zones:[{surface:"rough",rect:[0,0,46,22]},{surface:"fairway",poly:bn([[2,5],[23,4],[44,5],[44,17],[23,18],[2,17]],3)},{surface:"green",circle:{c:[38,9],r:3.5}}],props:[{type:"tree",at:[-1.5,23]},{type:"tree",at:[47.5,-1]},{type:"tree",at:[30,23.5]},{type:"flowers",at:[14,-1.5]},{type:"flowers",at:[24,-1.6]},{type:"bush",at:[47.5,14]},{type:"sign",at:[-2,6]}]},$d={id:"l3",name:"Lily Pad Lagoon",par:3,circle:4,size:[44,24],tee:[4,12],cup:[39.5,16.5],tip:"Splash = +1",ground:bn([[1,4],[10,.8],[34,.8],[43,4],[43,20],[34,23.2],[10,23.2],[1,20]],4),border:"wall",zones:[{surface:"water",ellipse:{c:[22,12],rx:8.5,ry:6.2}},{surface:"fairway",rect:[12.5,10.5,31.5,13.5]},{surface:"green",circle:{c:[39,16],r:3.8}}],props:[{type:"bridge",at:[22,12],r:8.6,scale:.75},{type:"lilypad",at:[17,16],r:.9},{type:"lilypad",at:[20.5,17.2],r:.7},{type:"lilypad",at:[26.5,15.6],r:.8},{type:"lilypad",at:[18.5,7.6],r:.8},{type:"lilypad",at:[24,6.8],r:.7},{type:"lilypad",at:[27.5,8.5],r:.9},{type:"reeds",at:[15,14.6]},{type:"reeds",at:[28.5,15]},{type:"reeds",at:[15.5,9]},{type:"reeds",at:[28.6,9]},{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[45.5,1]},{type:"flowers",at:[22,25.5]},{type:"flowers",at:[22,-1.6]}]},Zl=bn([[6,21.2],[1.5,20.4],[1,4],[4,1.2],[36,1.2],[39,4],[38.5,20.4],[34,21.2]],3,5,!1),jd={id:"l4",name:"Boing Boing",par:3,circle:3.5,size:[40,22],tee:[8,6],cup:[32,6],tip:"Cushions bounce more!",ground:Zl,border:null,walls:[{kind:"wall",pts:Zl},{kind:"cushion",pts:[[34,21.2],[6,21.2]]},{kind:"hedge",pts:[[9.9,1.2],[12.3,3.2]]},{kind:"hedge",pts:[[30.1,1.2],[27.7,3.2]]}],arcs:[{kind:"hedge",c:[20,1.2],r:8,from:14,to:166}],zones:[{surface:"rough",circle:{c:[20,1.2],r:7.6}},{surface:"green",circle:{c:[32,6],r:3.5}}],props:[{type:"flowers",at:[17,4]},{type:"flowers",at:[22.5,5]},{type:"bush",at:[20,2.6],scale:1.3},{type:"flowers",at:[14.5,2.4]},{type:"flowers",at:[25.5,2.4]},{type:"tree",at:[-1.5,22]},{type:"tree",at:[41.5,22]},{type:"bush",at:[20,23.6]},{type:"flowers",at:[10,23.6]},{type:"flowers",at:[30,23.6]}]},vh=(i,t,e=.5)=>[...yc([26,2.5],i,0,180,7.5).map(([n,s])=>[n,2.5+(s-2.5)*t/i]),[26-i,e],[26+i,e]],Jl=bn(vh(25,21.6),2.5),Zd={id:"l5",name:"Banana Bay",par:4,circle:3.5,size:[52,25],tee:[6,4],cup:[46,4],tip:"Dot up = bend late!",ground:Jl,border:"wall",zones:[{surface:"rough",poly:Jl},{surface:"fairway",poly:bn(vh(23,19.4,2.2),2)},{surface:"water",ellipse:{c:[26,2],rx:17,ry:14}},{surface:"green",circle:{c:[46.5,5.5],r:3}}],props:[{type:"lilypad",at:[20,8],r:.9},{type:"lilypad",at:[26,11],r:.8},{type:"lilypad",at:[32,7],r:1},{type:"lilypad",at:[24,4],r:.7},{type:"fountain",at:[26,3.5]},{type:"reeds",at:[11.2,6.8]},{type:"reeds",at:[40.8,6.8]},{type:"reeds",at:[18,13.6]},{type:"reeds",at:[34,13.6]},{type:"tree",at:[-1.5,24]},{type:"tree",at:[53.5,24]},{type:"tree",at:[26,26.5],scale:1.2},{type:"flowers",at:[-2,12]},{type:"flowers",at:[54,12]}]},Ql=bn([[39,4],[39,19],[33,21],[25,21],[25,11.5],[15,11.5],[15,21],[8,21],[1,18],[1,6],[5,1.5],[12,1],[28,1],[33,2.5]],2.5),Jd={id:"l6",name:"Rooftop Rally",par:3,circle:3,size:[40,22],tee:[5,16],cup:[33,15],tip:"Open edge = out!",ground:Ql,border:null,walls:[{kind:"wall",pts:qd(Ql,[39,18],[2,7])},{kind:"cushion",pts:[[12,1],[28,1]]}],tilt:[0,.03],zones:[{surface:"green",circle:{c:[33,15],r:3.5}}],props:[{type:"tree",at:[20,17.5],scale:1.1},{type:"flowers",at:[17.5,14]},{type:"flowers",at:[22.5,14]},{type:"flowerbox",at:[4,23]},{type:"flowerbox",at:[11,23.2]},{type:"flowerbox",at:[29,23.2]},{type:"flowerbox",at:[36,22.8]},{type:"flowerbox",at:[-1.5,12],rot:90},{type:"sign",at:[-1.8,18]}]},Qd=[[1,3.5],[3.5,1],[36,1],[43,8],[43,8.6],[35.6,16],[30.5,16],[30.5,20.5],[28,23],[8,23],[1,16]],tp={id:"l7",name:"Tight Squeeze",par:4,circle:2.5,size:[44,24],tee:[5,4],cup:[19,19.5],tip:"Stuck on a cushion? Push it in!",ground:Qd,border:null,walls:[{kind:"hedge",pts:[[36,1],[3.5,1],[1,3.5],[1,16]]},{kind:"hedge",pts:[[8,23],[28,23],[30.5,20.5],[30.5,17.6]]},{kind:"cushion",pts:[[36,1],[43,8],[43,8.6],[35.6,16],[27,16]]},{kind:"cushion",pts:[[28.9,16],[30.5,17.6]]},{kind:"cushion",pts:[[1,16],[8,23]]},{kind:"cushion",pts:[[8.8,7.8],[1,15.6]]},{kind:"cushion",pts:[[1,6.2],[2.6,7.8],[36,7.8]]},{kind:"cushion",pts:[[8,16],[24.5,16]]}],zones:[{surface:"water",poly:[[.8,7.6],[8.8,7.6],[.8,15.6]]},{surface:"green",circle:{c:[19,19.5],r:2.6}}],props:[{type:"lilypad",at:[2.6,10],r:.6},{type:"reeds",at:[2,13]},{type:"flowerbox",at:[36,22.5]},{type:"flowerbox",at:[40.5,18.5],rot:90},{type:"bush",at:[37.5,19.5]},{type:"tree",at:[-1.5,24.5]},{type:"tree",at:[45.5,-1]},{type:"flowers",at:[20,-1.6]},{type:"sign",at:[-2,6]}]},ep={id:"l8",name:"Island Hop",par:4,circle:3,size:[40,34],tee:[8.5,27],cup:[12,8.5],tip:"Hop island to island!",ground:bn([[1,5],[4,1],[35,1.5],[39,5],[38.5,29],[35,33],[5,32.5],[1.5,29]],4),border:"wall",walls:[{kind:"cushion",pts:[[13.8,25],[22,25]]},{kind:"cushion",pts:[[13.8,29],[22.2,29]]},{kind:"cushion",pts:[[22.5,22.4],[22.5,13.6]]},{kind:"cushion",pts:[[26.5,21],[26.5,11.8]]}],arcs:[{kind:"cushion",c:[9,27],r:4.6,from:30,to:330},{kind:"cushion",c:[28.5,25],r:6.2,from:-75,to:150},{kind:"cushion",c:[13,9],r:4.9,from:110,to:250}],hills:[{c:[29,25],r:4.5,h:.25}],plateaus:[{circle:{c:[12,8.5],r:2.8},h:.25,ramp:1.2}],zones:[{surface:"water",rect:[0,0,40,34]},{surface:"rough",poly:bn([[0,0],[5.5,0],[5.5,13],[3.5,19],[0,20]],2.5)},{surface:"rough",poly:bn([[31.5,0],[40,0],[40,16],[35,15.5],[31.5,13]],2.5)},{surface:"rough",poly:bn([[15.5,31.5],[21,31.5],[22,34],[14.5,34]],1.5)},{surface:"fairway",circle:{c:[9,27],r:5}},{surface:"fairway",circle:{c:[28.5,25],r:6.6}},{surface:"fairway",ellipse:{c:[18,9],rx:9.5,ry:5.5}},{surface:"fairway",rect:[13.6,25,22.6,29]},{surface:"fairway",rect:[22.5,11,26.5,22]},{surface:"green",circle:{c:[12,8.5],r:2.8}}],props:[{type:"bridge",at:[18,27],r:4.2},{type:"bridge",at:[24.5,17],r:4.4,rot:90},{type:"lilypad",at:[6,17],r:.9},{type:"lilypad",at:[33,13],r:.8},{type:"lilypad",at:[35.5,7],r:1},{type:"lilypad",at:[17,20],r:.7},{type:"lilypad",at:[5,6],r:.8},{type:"lilypad",at:[34,31],r:.7},{type:"reeds",at:[3.4,21]},{type:"reeds",at:[36,20.5]},{type:"reeds",at:[29,4]},{type:"reeds",at:[3.5,12]},{type:"fountain",at:[33.5,9]},{type:"tree",at:[-1.5,35]},{type:"tree",at:[41.5,35]},{type:"flowers",at:[20,35.5]}]},Vr=Math.atan2(Math.sqrt(29),14)*(180/Math.PI),np=[...yc([44,16],15,180+Vr,540-Vr,7.5),...yc([16,16],15,Vr,360-Vr,7.5).slice(1,-1)],ip={id:"l9",name:"Figure Eight",par:5,circle:3.5,size:[60,32],tee:[4.5,16],cup:[55.5,16],tip:"Last hole: loop the 8!",ground:bn(np,2,4),border:"wall",posts:[{at:[30,16],r:1.8,kind:"bumper"}],arcs:[{kind:"cushion",c:[16,16],r:8.5,from:100,to:170},{kind:"cushion",c:[16,16],r:8.5,from:190,to:260},{kind:"cushion",c:[44,16],r:8.5,from:10,to:80},{kind:"cushion",c:[44,16],r:8.5,from:280,to:350}],plateaus:[{circle:{c:[55.5,16],r:2.6},h:.3,ramp:1.5}],zones:[{surface:"rough",circle:{c:[16,16],r:15.5}},{surface:"rough",circle:{c:[44,16],r:15.5}},{surface:"fairway",circle:{c:[16,16],r:13}},{surface:"fairway",circle:{c:[44,16],r:13}},{surface:"fairway",rect:[26,9.5,34,22.5]},{surface:"water",circle:{c:[16,16],r:8}},{surface:"water",circle:{c:[44,16],r:8}},{surface:"green",circle:{c:[55.5,16],r:3}}],props:[{type:"fountain",at:[16,16],scale:1.2},{type:"fountain",at:[44,16],scale:1.2},{type:"lilypad",at:[12,12],r:.9},{type:"lilypad",at:[20.5,19.5],r:.8},{type:"lilypad",at:[13,20],r:.7},{type:"lilypad",at:[47.5,12.5],r:.9},{type:"lilypad",at:[40,19.5],r:.8},{type:"lilypad",at:[48,20.5],r:.7},{type:"reeds",at:[9.5,19.5]},{type:"reeds",at:[22.5,12]},{type:"reeds",at:[37.5,12.5]},{type:"reeds",at:[50.5,19.5]},{type:"statue8",at:[58.5,28],scale:1.3},{type:"flowers",at:[56,30.5]},{type:"flowers",at:[60.5,25]},{type:"tree",at:[1.5,29.5]},{type:"tree",at:[1.5,2.5]},{type:"tree",at:[58.5,3]},{type:"bush",at:[30,27.5]},{type:"bush",at:[30,4.5]},{type:"flowers",at:[29,26.5]},{type:"flowers",at:[31,5.5]}]},sp=[Yd,Kd,$d,jd,Zd,Jd,tp,ep,ip],Ur=Object.freeze([{id:1,name:"Greenside",holes:Xd},{id:2,name:"Lakeside",holes:sp}]),xi=Object.freeze(Ur.flatMap((i,t)=>i.holes.map((e,n)=>Object.freeze({...e,round:i.id,number:t*9+n+1})))),kt=Object.freeze({DT:1/240,R:.5,MAX_EVENTS:8,E_BALL:.95,SLOPE_K:21,GRAD_EPS:.1,V_SLEEP:.05,SLOW_V:.3,SLOW_MAX_T:2.5,MAX_SHOT_T:20,D_MAX:40,D_REF_DECEL:3,POWER_MIN:.03,PLACE_GAP:.05,CUE_MAX_TRAVEL:12,CUE_FADE_T:.5,GHOST_DECEL:8,CURVE_K:.3,CURVE_LEN:4,EIGHT_CURVE_K:.04,EIGHT_CURVE_LEN:15,EIGHT_EARLY_LEN:5,EIGHT_HOOK_START:3,EIGHT_HOOK_LEN:7,HOLE_R:1.1,HOLE_VCAP:8,LIP_W:.5,LIP_A:4,HOLE_SETTLE_V:1,HOP_KEEP:.85}),tu=Object.freeze({green:Object.freeze({decel:2}),fairway:Object.freeze({decel:3}),rough:Object.freeze({decel:6}),sand:Object.freeze({decel:14}),ice:Object.freeze({decel:.8})}),Sc=Object.freeze({wall:Object.freeze({e:.6,keep:.95}),hedge:Object.freeze({e:.6,keep:.95}),cushion:Object.freeze({e:.85,keep:.97}),bumper:Object.freeze({e:1,keep:1}),post:Object.freeze({e:.6,keep:.95}),tree:Object.freeze({e:.6,keep:.95}),lollipop:Object.freeze({e:.6,keep:.95})}),Oi=1/0,da=i=>Sc[i]||Sc.wall;function rp(i){const t=[],e=[],n=new Set,s=(l,u,f)=>{const d=l+","+u;n.has(d)||(n.add(d),e.push({x:l,z:u,e:f.e,keep:f.keep,kind:f===Sc.cushion?"cushion":"wall",minx:l,maxx:l,minz:u,maxz:u}))};for(const l of i.segments||[]){const u=l.bx-l.ax,f=l.bz-l.az,d=u*u+f*f;if(d===0)continue;const h=Math.sqrt(d),g=da(l.kind);t.push({ax:l.ax,az:l.az,ex:u,ez:f,len2:d,nx:-f/h,nz:u/h,e:g.e,keep:g.keep,kind:l.kind||"wall",minx:Math.min(l.ax,l.bx),maxx:Math.max(l.ax,l.bx),minz:Math.min(l.az,l.bz),maxz:Math.max(l.az,l.bz)}),s(l.ax,l.az,g),s(l.bx,l.bz,g)}const r=(i.posts||[]).map(l=>{const u=da(l.kind||"post");return{x:l.x,z:l.z,r:l.r,e:u.e,keep:u.keep,kind:l.kind||"post",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),o=(i.arcs||[]).map(l=>{const u=da(l.kind);return s(l.x+l.sx*l.r,l.z+l.sz*l.r,u),s(l.x+l.ex*l.r,l.z+l.ez*l.r,u),{x:l.x,z:l.z,r:l.r,sx:l.sx,sz:l.sz,ex:l.ex,ez:l.ez,e:u.e,keep:u.keep,kind:l.kind||"wall",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),a=eu(0,i.eight.x,i.eight.z);a.mode="off";const c=eu(1,i.eight.x,i.eight.z);return{t:0,shotT:0,active:!1,balls:[a,c],segs:t,caps:e,posts:r,arcs:o,hole:{x:i.hole.x,z:i.hole.z},placeR:i.placeR||4,lieX:i.eight.x,lieZ:i.eight.z,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function eu(i,t,e){return{id:i,x:t,z:e,px:t,pz:e,vx:0,vz:0,mode:"rest",spin:0,top:0,travel:0,curveS:0,slowT:0,fadeT:0,overHole:!1,decel:0,slopeA2:0}}function nu(i,t,e){const n=i.balls[1];n.x=n.px=t,n.z=n.pz=e,n.vx=0,n.vz=0,n.mode="rest",n.spin=0,n.top=0,n.curveS=0,n.slowT=0,n.overHole=!1,i.lieX=t,i.lieZ=e}function _h(i){const t=i<kt.POWER_MIN?kt.POWER_MIN:i>1?1:i;return Math.sqrt(2*kt.D_REF_DECEL*kt.D_MAX*t)/((1+kt.E_BALL)/2)}function Mh(i){const t=typeof i=="number"?i:i&&i.x||0,e=typeof i=="number"?0:i&&i.y||0;return{side:t<-1?-1:t>1?1:t,top:e<-1?-1:e>1?1:e}}function yh(i,t,e,n){const s=i.balls[0],r=i.balls[1],o=Math.sqrt(t.dx*t.dx+t.dz*t.dz),a=_h(n);s.x=s.px=t.x,s.z=s.pz=t.z,s.vx=t.dx/o*a,s.vz=t.dz/o*a;const c=Mh(e);s.mode="cue",s.spin=c.side,s.top=c.top,s.travel=0,s.fadeT=0,i.lieX=r.x,i.lieZ=r.z,r.slowT=0,i.shotT=i.t,i.active=!0}const bc={x:0,z:0},Re={t:0,kind:0,i:0,j:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""},qn=0,Sh=1,Ml=2,pa=3;function bh(i,t=kt.DT){const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];s.px=s.x,s.pz=s.z,s.mode==="cue"?op(s,t):s.mode==="roll"?lp(i,s,t):s.mode==="ghost"&&ap(s,t)}hp(i,t);for(let n=0;n<e.length;n++)pp(i,e[n],t);if(i.t+=t,i.active){let n=!1;for(let s=0;s<e.length;s++){const r=e[s].mode;(r==="cue"||r==="roll"||r==="ghost")&&(n=!0)}if(n&&i.t-i.shotT>kt.MAX_SHOT_T){for(let s=0;s<e.length;s++){const r=e[s];r.mode==="roll"?wc(i,r):(r.mode==="cue"||r.mode==="ghost")&&(r.mode="off")}n=!1}n||(i.active=!1,i.events.push({type:"shotEnd",t:i.t}))}}function Cr(i){return Math.sqrt(i.vx*i.vx+i.vz*i.vz)}function Rr(i,t,e){const n=1-.5*t*t,s=i.vx*n-i.vz*t,r=i.vx*t+i.vz*n,o=e/Math.sqrt(s*s+r*r);i.vx=s*o,i.vz=r*o}function op(i,t){const e=Cr(i);if(i.spin!==0&&e>0){const n=1-i.travel/kt.CURVE_LEN;n>0&&Rr(i,kt.CURVE_K*i.spin*n*e*t,e)}i.travel+=e*t}function wh(i,t){const e=kt.EIGHT_CURVE_LEN;if(t<0){const o=e+(kt.EIGHT_EARLY_LEN-e)*-t;return i<o?kt.EIGHT_CURVE_K*e/o*(1-i/o):0}const n=i<e?kt.EIGHT_CURVE_K*(1-i/e):0;if(t===0)return n;const s=i-kt.EIGHT_HOOK_START,r=s>0&&s<kt.EIGHT_HOOK_LEN?kt.EIGHT_CURVE_K*e*s/(kt.EIGHT_HOOK_LEN*kt.EIGHT_HOOK_LEN):0;return n*(1-t)+r*t}function ap(i,t){const e=Cr(i),n=kt.GHOST_DECEL*t;if(e<=n)i.vx=0,i.vz=0;else{const s=(e-n)/e;i.vx*=s,i.vz*=s}}function cp(i,t,e,n=bc){const s=kt.GRAD_EPS,r=i.heightAt;return n.x=(r(t+s,e)-r(t-s,e))/(2*s),n.z=(r(t,e+s)-r(t,e-s))/(2*s),n}function lp(i,t,e){const n=tu[i.surfaceAt(t.x,t.z)]||tu.fairway;cp(i,t.x,t.z);let s=-kt.SLOPE_K*bc.x,r=-kt.SLOPE_K*bc.z;const o=i.hole.x-t.x,a=i.hole.z-t.z,c=o*o+a*a,l=kt.HOLE_R+kt.LIP_W;if(c<l*l&&c>=kt.HOLE_R*kt.HOLE_R){const h=Math.sqrt(c);s+=kt.LIP_A*o/h,r+=kt.LIP_A*a/h}if(t.spin!==0){const h=Cr(t),g=1-t.curveS/kt.EIGHT_CURVE_LEN;if(t.top===0)g>0&&h>0?Rr(t,kt.EIGHT_CURVE_K*t.spin*g*h*e,h):g<=0&&(t.spin=0);else if(g<=0)t.spin=0;else if(h>0){const x=wh(t.curveS,t.top);x>0&&Rr(t,x*t.spin*h*e,h)}t.curveS+=h*e}t.vx+=s*e,t.vz+=r*e;const u=Cr(t),f=n.decel*e,d=s*s+r*r;if(u>f){const h=(u-f)/u;t.vx*=h,t.vz*=h}else if(d<=n.decel*n.decel)t.vx=0,t.vz=0;else{const h=Math.sqrt(d),g=(h-n.decel)*e/h;t.vx=s*g,t.vz=r*g}t.decel=n.decel,t.slopeA2=d}function Io(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=a*e+c*n;if(l>=0)return Oi;const u=a*a+c*c-o*o;if(u<=0)return 0;const f=e*e+n*n,d=l*l-f*u;return d<0?Oi:u/(-l+Math.sqrt(d))}function up(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=e*e+n*n;if(l===0)return Oi;const u=a*e+c*n,f=a*a+c*c-o*o;if(f>=0)return u>0?0:Oi;const d=Math.sqrt(u*u-l*f);return u>0?-f/(u+d):(-u+d)/l}const iu=1e-9;function Wr(i,t,e,n,s){return i.maxx<t||i.minx>e||i.maxz<n||i.minz>s}function Eh(i,t,e,n,s,r,o,a){let c=o,l=qn;const u=(n<0?-n:n)*o+r+iu,f=(s<0?-s:s)*o+r+iu,d=t-u,h=t+u,g=e-f,x=e+f,m=i.segs;for(let w=0;w<m.length;w++){const T=m[w];if(Wr(T,d,h,g,x))continue;let b=T.nx,E=T.nz,v=(t-T.ax)*b+(e-T.az)*E;v<0&&(b=-b,E=-E,v=-v);const S=n*b+s*E;if(S>=0)continue;let y=(v-r)/-S;if(y<0&&(y=0),y>c||y===c&&l!==qn)continue;const C=t+n*y,z=e+s*y,U=((C-T.ax)*T.ex+(z-T.az)*T.ez)/T.len2;U<0||U>1||(c=y,l=Ml,a.nx=b,a.nz=E,a.e=T.e,a.keep=T.keep,a.ck=T.kind)}const p=i.caps;for(let w=0;w<p.length;w++){const T=p[w];if(Wr(T,d,h,g,x))continue;const b=Io(t,e,n,s,T.x,T.z,r);(b<c||b===c&&l===qn)&&(c=b,l=pa,a.cx=T.x,a.cz=T.z,a.sign=1,a.e=T.e,a.keep=T.keep,a.ck=T.kind)}const M=i.posts;for(let w=0;w<M.length;w++){const T=M[w];if(Wr(T,d,h,g,x))continue;const b=Io(t,e,n,s,T.x,T.z,T.r+r);(b<c||b===c&&l===qn)&&(c=b,l=pa,a.cx=T.x,a.cz=T.z,a.sign=1,a.e=T.e,a.keep=T.keep,a.ck=T.kind)}const _=i.arcs;for(let w=0;w<_.length;w++){const T=_[w];if(Wr(T,d,h,g,x))continue;const b=t-T.x,E=e-T.z,v=b*b+E*E>T.r*T.r,S=v?Io(t,e,n,s,T.x,T.z,T.r+r):up(t,e,n,s,T.x,T.z,T.r-r);if(!(S<c||S===c&&l===qn))continue;const y=t+n*S-T.x,C=e+s*S-T.z;T.sx*C-T.sz*y<0||y*T.ez-C*T.ex<0||(c=S,l=pa,a.cx=T.x,a.cz=T.z,a.sign=v?1:-1,a.e=T.e,a.keep=T.keep,a.ck=T.kind)}return a.t=c,a.kind=l,l===qn?Oi:c}function su(i){return i==="cue"||i==="roll"||i==="rest"}function ma(i){return i==="cue"||i==="roll"}const Xn={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function fp(i,t){const e=i.balls;Re.kind=qn,Re.t=t;for(let n=0;n<e.length;n++){const s=e[n];if(!su(s.mode))continue;for(let o=n+1;o<e.length;o++){const a=e[o];if(!su(a.mode)||!ma(s.mode)&&!ma(a.mode))continue;const c=Io(s.x,s.z,s.vx-a.vx,s.vz-a.vz,a.x,a.z,2*kt.R);(c<Re.t||c===Re.t&&Re.kind===qn)&&(Re.t=c,Re.kind=Sh,Re.i=n,Re.j=o)}if(!ma(s.mode))continue;const r=Eh(i,s.x,s.z,s.vx,s.vz,kt.R,Re.t,Xn);(r<Re.t||r===Re.t&&Re.kind===qn&&r!==Oi)&&(Re.t=r,Re.kind=Xn.kind,Re.i=n,Re.nx=Xn.nx,Re.nz=Xn.nz,Re.cx=Xn.cx,Re.cz=Xn.cz,Re.sign=Xn.sign,Re.e=Xn.e,Re.keep=Xn.keep,Re.ck=Xn.ck)}return Re}function ru(i,t){if(t===0)return;const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];(s.mode==="cue"||s.mode==="roll"||s.mode==="ghost")&&(s.x+=s.vx*t,s.z+=s.vz*t)}}function hp(i,t){let e=t;for(let n=0;n<kt.MAX_EVENTS;n++){const s=fp(i,e);if(s.kind===qn){ru(i,e);return}if(ru(i,s.t),dp(i,s),e-=s.t,e<=0)return}}function dp(i,t){const e=i.balls;if(t.kind===Sh){const l=e[t.i],u=e[t.j];let f=u.x-l.x,d=u.z-l.z;const h=Math.sqrt(f*f+d*d);f/=h,d/=h;const g=l.vx-u.vx,x=l.vz-u.vz,m=g*f+x*d;if(m<=0)return;const p=(1+kt.E_BALL)/2*m;l.vx-=p*f,l.vz-=p*d,u.vx+=p*f,u.vz+=p*d;const M=l.mode==="cue"?t.i:u.mode==="cue"?t.j:-1;if(l.mode==="rest"&&(l.mode="roll"),u.mode==="rest"&&(u.mode="roll"),M>=0){const _=e[M],w=e[M===t.i?t.j:t.i],T=M===t.i?1:-1;i.events.push({type:"contact",t:i.t,gx:_.x,gz:_.z,nx:f*T,nz:d*T,v8x:w.vx,v8z:w.vz,cutCos:m/Math.sqrt(g*g+x*x),spin:_.spin,top:_.top}),w.spin=_.spin,w.top=_.top,w.curveS=0,w.slowT=0,_.mode="ghost",_.spin=0,_.top=0,_.fadeT=kt.CUE_FADE_T}else i.events.push({type:"ballHit",t:i.t,speed:m});return}const n=e[t.i];let s,r;if(t.kind===Ml)s=t.nx,r=t.nz;else{s=(n.x-t.cx)*t.sign,r=(n.z-t.cz)*t.sign;const l=Math.sqrt(s*s+r*r);s/=l,r/=l}const o=n.vx*s+n.vz*r;if(o>=0)return;const a=n.vx-o*s,c=n.vz-o*r;n.vx=a*t.keep-t.e*o*s,n.vz=c*t.keep-t.e*o*r,n.spin=0,n.top=0,i.events.push({type:"wall",t:i.t,id:n.id,x:n.x,z:n.z,nx:s,nz:r,speed:-o,kind:t.ck})}function wc(i,t){t.vx=0,t.vz=0,t.mode="rest",t.slowT=0,t.spin=0,t.top=0,i.events.push({type:"rest",t:i.t,id:t.id,x:t.x,z:t.z})}function pp(i,t,e){if(t.mode==="ghost"){t.fadeT-=e,t.fadeT<=0&&(t.mode="off");return}if(t.mode!=="cue"&&t.mode!=="roll")return;const n=i.hazardAt(t.x,t.z);if(n){t.mode==="cue"?(t.mode="off",i.events.push({type:"whiff",t:i.t,reason:n,x:t.x,z:t.z})):(t.mode="sunk",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:n,t:i.t,id:t.id,x:t.x,z:t.z,dropX:i.lieX,dropZ:i.lieZ}));return}if(t.mode==="cue"){t.travel>kt.CUE_MAX_TRAVEL&&(t.mode="ghost",t.fadeT=kt.CUE_FADE_T,i.events.push({type:"whiff",t:i.t,reason:"miss",x:t.x,z:t.z}));return}const s=t.x-i.hole.x,r=t.z-i.hole.z,o=s*s+r*r,a=Cr(t);if(o<kt.HOLE_R*kt.HOLE_R){let c=a<kt.HOLE_SETTLE_V;if(!c&&!t.overHole&&(c=a<=kt.HOLE_VCAP,c||(t.vx*=kt.HOP_KEEP,t.vz*=kt.HOP_KEEP,i.events.push({type:"hop",t:i.t,id:t.id,x:t.x,z:t.z,speed:a,vcap:kt.HOLE_VCAP}))),t.overHole=!0,c){t.mode="holed",t.vx=0,t.vz=0,t.spin=0,t.top=0,i.events.push({type:"holed",t:i.t,id:t.id,speed:a});return}}else t.overHole=!1;if(a===0||a<kt.V_SLEEP&&t.slopeA2<t.decel*t.decel){wc(i,t);return}a<kt.SLOW_V?(t.slowT+=e,t.slowT>kt.SLOW_MAX_T&&wc(i,t)):t.slowT=0}function rr(i,t,e){const n=i.balls[1],s=t-n.x,r=e-n.z,o=s*s+r*r,a=2*kt.R+kt.PLACE_GAP;return o>i.placeR*i.placeR||o<a*a?!1:mp(i,t,e)&&!Th(i,n.x,n.z,t,e)}function Th(i,t,e,n,s){const r=n-t,o=s-e;for(const c of i.segs){const l=r*c.ez-o*c.ex;if(l===0)continue;const u=c.ax-t,f=c.az-e,d=(u*c.ez-f*c.ex)/l,h=(u*o-f*r)/l;if(d>0&&d<1&&h>=0&&h<=1)return!0}const a=r*r+o*o;for(const c of i.arcs){const l=t-c.x,u=e-c.z,f=l*r+u*o,d=l*l+u*u-c.r*c.r,h=f*f-a*d;if(h<0||a===0)continue;const g=Math.sqrt(h);for(const x of[(-f-g)/a,(-f+g)/a]){if(!(x>0&&x<1))continue;const m=l+r*x,p=u+o*x;if(c.sx*p-c.sz*m>=0&&m*c.ez-p*c.ex>=0)return!0}}return!1}function mp(i,t,e){const n=kt.R;if(i.hazardAt(t,e))return!1;for(const s of i.segs){let r=((t-s.ax)*s.ex+(e-s.az)*s.ez)/s.len2;r=r<0?0:r>1?1:r;const o=s.ax+s.ex*r-t,a=s.az+s.ez*r-e;if(o*o+a*a<n*n)return!1}for(const s of i.posts){const r=s.x-t,o=s.z-e,a=s.r+n;if(r*r+o*o<a*a)return!1}for(const s of i.arcs){const r=t-s.x,o=e-s.z,a=Math.sqrt(r*r+o*o);if(s.sx*o-s.sz*r>=0&&r*s.ez-o*s.ex>=0&&a>s.r-n&&a<s.r+n)return!1}for(const s of i.caps){const r=s.x-t,o=s.z-e;if(r*r+o*o<n*n)return!1}return!0}function Xr(i,t,e,n){return i.filter(s=>{const r=t<s.minx?s.minx:t>s.maxx?s.maxx:t,o=e<s.minz?s.minz:e>s.maxz?s.maxz:e,a=r-t,c=o-e;return a*a+c*c<=n*n})}function gp(i,t,e){const n=kt.CUE_MAX_TRAVEL+2*kt.R+.5;return{t:i.t,shotT:i.shotT,active:!1,balls:i.balls.map(s=>({...s})),segs:Xr(i.segs,t,e,n),caps:Xr(i.caps,t,e,n),posts:Xr(i.posts,t,e,n),arcs:Xr(i.arcs,t,e,n),hole:i.hole,placeR:i.placeR,lieX:i.lieX,lieZ:i.lieZ,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function ou(i,t,e,n,s=3){const r=gp(i,t.x,t.z);yh(r,t,e,n);const o=r.balls[0],a=r.balls[1],c=[t.x,t.z],l=Math.ceil((kt.CUE_MAX_TRAVEL+1)/(_h(n)*kt.DT))+4;for(let u=1;u<=l;u++){bh(r);for(let f=0;f<r.events.length;f++){const d=r.events[f];if(d.type==="wall"&&d.id===0)c.push(d.x,d.z);else if(d.type==="contact"){c.push(d.gx,d.gz);const h=Math.sqrt(d.v8x*d.v8x+d.v8z*d.v8z);return{hit:!0,points:c,ghost:{x:d.gx,z:d.gz},normal:{x:d.nx,z:d.nz},eightDir:{x:d.v8x/h,z:d.v8z/h},eightSpeed:h,cutCos:d.cutCos,spin:d.spin,top:d.top,eightStart:{x:a.x,z:a.z},reason:null}}else if(d.type==="whiff")return c.push(d.x,d.z),{hit:!1,points:c,reason:d.reason}}r.events.length=0,u%s===0&&c.push(o.x,o.z)}return{hit:!1,points:c,reason:"miss"}}const Cn={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function xp(i,t,e,n,s,r,o=14,a=3){const l=[t,e];let u=Math.sqrt(n*n+s*s);n/=u,s/=u;let f=0,d=null,h=null,g=!1,x=o;const m=Mh(r);let p=m.side;const M=m.top,_={vx:n,vz:s};for(let w=0;w<400&&f<x;w++){const T=x-f<.25?x-f:.25;if(p!==0)if(M===0){const y=1-f/kt.EIGHT_CURVE_LEN;y>0&&Rr(_,kt.EIGHT_CURVE_K*p*y*T,1)}else{const y=wh(f,M);y>0&&Rr(_,y*p*T,1)}const b=Eh(i,t,e,_.vx,_.vz,kt.R,T,Cn);if(b!==Oi&&!d){t+=_.vx*b,e+=_.vz*b,f+=b,l.push(t,e);let y,C;Cn.kind===Ml?(y=Cn.nx,C=Cn.nz):(y=(t-Cn.cx)*Cn.sign,C=(e-Cn.cz)*Cn.sign,u=Math.sqrt(y*y+C*C),y/=u,C/=u);const z=_.vx*y+_.vz*C,U=(_.vx-z*y)*Cn.keep-Cn.e*z*y,X=(_.vz-z*C)*Cn.keep-Cn.e*z*C;u=Math.sqrt(U*U+X*X),_.vx=U/u,_.vz=X/u,d={x:t,z:e},p=0,x=f+a;continue}if(b!==Oi){t+=_.vx*b,e+=_.vz*b,l.push(t,e);break}t+=_.vx*T,e+=_.vz*T,f+=T,l.push(t,e);const E=i.hazardAt(t,e);if(E){h=E;break}const v=t-i.hole.x,S=e-i.hole.z;v*v+S*S<kt.HOLE_R*kt.HOLE_R&&(g=!0)}return{points:l,hazard:h,bounce:d,cup:g}}function vp(i,t,e,n=240){e.acc+=t>.25?.25:t;let s=0;for(;e.acc>=kt.DT&&s<n;)bh(i),e.acc-=kt.DT,s++;return s>=n&&(e.acc=0),e.acc/kt.DT}function _p(i,t,e,n,s=0,r=0){return(o,a)=>{let c=(o-s)/n,l=(a-r)/n;c=c<0?0:c>t-1.000001?t-1.000001:c,l=l<0?0:l>e-1.000001?e-1.000001:l;const u=c|0,f=l|0,d=c-u,h=l-f,g=f*t+u,x=i[g]+(i[g+1]-i[g])*d,m=i[g+t]+(i[g+t+1]-i[g+t])*d;return x+(m-x)*h}}const Si=.25,qr=4,Mp=Object.freeze({oob:0,fairway:1,green:2,rough:3,sand:4,water:5,ice:6}),yp=Object.freeze(["oob","fairway","green","rough","sand","water","ice"]),or=i=>({x:i[0],z:-i[1]});function Ec(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[s][0],a=i[s][1],c=i[r][0],l=i[r][1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function Sp(i,t,e){let n=1/0;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[r][0],a=i[r][1],c=i[s][0]-o,l=i[s][1]-a,u=c*c+l*l||1e-12;let f=((t-o)*c+(e-a)*l)/u;f=f<0?0:f>1?1:f;const d=o+c*f-t,h=a+l*f-e,g=Math.sqrt(d*d+h*h);g<n&&(n=g)}return n}const Ah=i=>[[i[0],i[1]],[i[2],i[1]],[i[2],i[3]],[i[0],i[3]]];function Tc(i){if(i.poly)return i.poly;if(i.rect)return Ah(i.rect);const t=i.circle?{c:i.circle.c,rx:i.circle.r,ry:i.circle.r,rot:0}:i.ellipse;if(!t)throw new Error("zone without a shape");const e=48,n=Math.cos((t.rot||0)*Math.PI/180),s=Math.sin((t.rot||0)*Math.PI/180),r=[];for(let o=0;o<e;o++){const a=o/e*Math.PI*2,c=Math.cos(a)*t.rx,l=Math.sin(a)*t.ry;r.push([t.c[0]+c*n-l*s,t.c[1]+c*s+l*n])}return r}const ga=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function bp(i){const t=i.steps||[],e=i.hills||[],n=(i.plateaus||[]).map(r=>({pts:Tc(r),h:r.h,ramp:r.ramp??2,linear:!!r.linear})),s=i.tilt||[0,0];return(r,o)=>{let a=s[0]*r+s[1]*o;for(const c of t){const l=c.axis==="y"?o:r;if(c.band){const f=c.axis==="y"?r:o;if(f<c.band[0]||f>c.band[1])continue}const u=(l-c.from)/(c.to-c.from);a+=c.h*(c.smooth?ga(u):u<=0?0:u>=1?1:u)}for(const c of e){const l=r-c.c[0],u=o-c.c[1],f=Math.sqrt(l*l+u*u),d=c.flat||0;f<c.r&&(a+=c.h*ga(1-(f-d)/(c.r-d)))}for(const c of n)if(Ec(c.pts,r,o))a+=c.h;else{const l=Sp(c.pts,r,o);l<c.ramp&&(a+=c.h*(c.linear?1-l/c.ramp:ga(1-l/c.ramp)))}return a}}function Ch(i){const[t,e]=i.size,n=i.ground||Ah([0,0,t,e]),s=i.border===void 0?"wall":i.border,r=[];s&&r.push({kind:s,pts:n,closed:!0,border:!0});for(const v of i.walls||[])r.push({kind:v.kind||"wall",pts:v.pts,closed:!!v.closed,h:v.h});const o=[],a=[];for(const v of i.arcs||[]){let S=v.from;const y=v.to;if(!(y>S))throw new Error(i.id+": arc needs to > from");for(a.push({kind:v.kind||"wall",c:v.c,r:v.r,from:S,to:y});S<y-1e-9;){const C=Math.min(y,S+180),z=C*Math.PI/180,U=S*Math.PI/180;o.push({kind:v.kind||"wall",x:v.c[0],z:-v.c[1],r:v.r,sx:Math.cos(z),sz:-Math.sin(z),ex:Math.cos(U),ez:-Math.sin(U)}),S=C}}const c=[];for(const v of r){const S=v.pts.length,y=v.closed?S:S-1;for(let C=0;C<y;C++){const z=v.pts[C],U=v.pts[(C+1)%S];c.push({ax:z[0],az:-z[1],bx:U[0],bz:-U[1],kind:v.kind})}}const l=(i.posts||[]).map(v=>({x:v.at[0],z:-v.at[1],r:v.r,kind:v.kind||"post"})),u=-qr,f=-(e+qr),d=Math.round((t+2*qr)/Si)+1,h=Math.round((e+2*qr)/Si)+1,g=bp(i),x=new Float64Array(d*h),m=new Uint8Array(d*h),p=(i.zones||[]).map(v=>{const S=Mp[v.surface];if(S===void 0||S===0)throw new Error(i.id+": unknown surface "+v.surface);return{code:S,pts:Tc(v)}});for(let v=0;v<h;v++){const y=-(f+v*Si);for(let C=0;C<d;C++){const z=u+C*Si,U=v*d+C;x[U]=g(z,y);let X=Ec(n,z,y)?1:0;if(X)for(const ct of p)Ec(ct.pts,z,y)&&(X=ct.code);m[U]=X}}const M=_p(x,d,h,Si,u,f),_=(v,S)=>{let y=Math.round((v-u)/Si),C=Math.round((S-f)/Si);return y=y<0?0:y>=d?d-1:y,C=C<0?0:C>=h?h-1:C,m[C*d+y]},w=(v,S)=>yp[_(v,S)],T=(v,S)=>{const y=_(v,S);return y===0?"oob":y===5?"water":null},b=or(i.tee),E=or(i.cup);return{hole:i,id:i.id,name:i.name,par:i.par,round:i.round,spin:!0,tip:i.tip||null,placeR:i.circle,eight:b,tee:b,cup:E,segments:c,posts:l,arcs:o,surfaceAt:w,heightAt:M,hazardAt:T,grid:{cell:Si,cols:d,rows:h,x0:u,z0:f,height:x,surface:m},bounds:{minx:0,maxx:t,minz:-e,maxz:0},ground:n.map(or),walls:r.map(v=>({kind:v.kind,closed:v.closed,border:!!v.border,h:v.h,pts:v.pts.map(or)})),arcsRender:a.map(v=>({kind:v.kind,x:v.c[0],z:-v.c[1],r:v.r,from:v.from,to:v.to})),props:(i.props||[]).map(v=>({...v,x:v.at[0],z:-v.at[1]})),zones:(i.zones||[]).map(v=>({surface:v.surface,pts:Tc(v).map(or)})),camera:i.camera||null}}function wp(i){return rp({eight:i.eight,hole:i.cup,placeR:i.placeR,segments:i.segments,posts:i.posts,arcs:i.arcs,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt})}const Ep=4,Tp=5;function Ap(i){return{par:i,strokes:0,penalties:0,done:!1,holed:!1,picked:!1}}function Cp(i,t){if(i.done)return{penalty:0,done:!0,picked:i.picked};i.strokes+=1;let e=0;return t.holed?(i.done=!0,i.holed=!0,{penalty:e,done:!0,picked:!1}):(t.hazard&&(e=1,i.penalties+=1,i.strokes+=1),i.strokes>=i.par+Ep&&(i.done=!0,i.picked=!0),{penalty:e,done:i.done,picked:i.picked})}function Rp(i){return i.picked?i.par+Tp:i.strokes}function Pp(i,t,e=!1){return e?0:i===1||i<=t-1?3:i<=t?2:1}function Ac(i,t,e=!1){if(e)return{key:"picked",label:"Picked up"};if(i===1)return{key:"ace",label:"Hole-in-one!"};const n=i-t;return n<=-3?{key:"albatross",label:"Albatross!"}:n===-2?{key:"eagle",label:"Eagle!"}:n===-1?{key:"birdie",label:"Birdie!"}:n===0?{key:"par",label:"Par"}:n===1?{key:"bogey",label:"Bogey"}:n===2?{key:"double",label:"Double bogey"}:{key:"over",label:"+"+n}}function Cc(i,t){const e=i-t;return e===0?"E":e>0?"+"+e:String(e)}const Lp=.9,Ip=1.2,Dp=14,au=1.8,zp=3,Rh=[0,15,-15,30,-30,45,-45,60,-60,72,-72,80,-80,85,-85,89,-89].map(i=>i*Math.PI/180),xa=Rh.map(Math.cos),cu=Rh.map(Math.sin);function Np({events:i}){const t=(b,E)=>i&&i.emit(b,E),e={acc:0},n={state:"idle",level:null,index:-1,world:null,score:null,intent:{x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},lastPower:.5,speed:1,shotContact:!1,shotHazard:null,shotHoled:!1,dropAt:null,timer:0,_guideKey:"",_guide:null},s=[r(),r()];function r(){return{x:0,y:0,z:0,visible:!1,alpha:1,mode:"off",vx:0,vz:0}}function o(){const b=n.intent,E=n.world.balls[1];let v=E.x-b.x,S=E.z-b.z;const y=Math.sqrt(v*v+S*S)||1;v/=y,S/=y;const C=Math.cos(b.offset),z=Math.sin(b.offset),U=v*C-S*z,X=v*z+S*C,ct=u(b,U,X);n.intent={...b,ax:U,az:X,dx:ct.x,dz:ct.z},n._guideKey=""}const a=b=>b.power<kt.POWER_MIN?kt.POWER_MIN:b.power,c=b=>({x:b.spin,y:b.top}),l=(b,E,v)=>{const S=Math.cos(v),y=Math.sin(v);return{x:b*S-E*y,z:b*y+E*S}};function u(b,E,v){if(!b.spin)return{x:E,z:v};const S=n.world.balls[1],y=S.x-b.x,C=S.z-b.z,z=y*E+C*v,U=E*C-v*y,X=2*kt.R,ct=z>0&&U*U<X*X,st=ct?z-Math.sqrt(X*X-U*U):z>0?z:0,xt=st>1e-6?-f(b.spin,st):0;if(!ct)return l(E,v,xt);const $=b.x+E*st,W=b.z+v*st,D=(S.x-$)/X,K=(S.z-W)/X,Y=a(b),rt=c(b),V=zt=>{const J=l(E,v,zt),vt=ou(n.world,{x:b.x,z:b.z,dx:J.x,dz:J.z},rt,Y,1e9);return vt.hit?D*vt.normal.z-K*vt.normal.x:null};let Z=xt,mt=V(Z);if(mt===null)return l(E,v,xt);let H=Z,tt=Math.abs(mt),lt=Z+.02,St=V(lt);for(let zt=0;zt<10&&St!==null&&(Math.abs(St)<tt&&(H=lt,tt=Math.abs(St)),!(tt<1e-7||St===mt));zt++){let J=-St*(lt-Z)/(St-mt);J=J>.3?.3:J<-.3?-.3:J,Z=lt,mt=St,lt+=J,St=V(lt)}return l(E,v,H)}function f(b,E){const v=kt.CURVE_K*b,S=kt.CURVE_LEN,y=.02;let C=0,z=0,U=0;for(let X=0;X<2e3&&C*C+z*z<E*E;X++){const ct=U<S?v*(U-U*U/(2*S)):v*S/2;C+=Math.cos(ct)*y,z+=Math.sin(ct)*y,U+=y}return Math.atan2(z,C)}function d(){const b=n.world,E=b.balls[1];let v=b.hole.x-E.x,S=b.hole.z-E.z;const y=Math.sqrt(v*v+S*S)||1;v/=y,S/=y;const C=Math.min(.6*b.placeR,2.5),z=p(E.x-v*C,E.z-S*C)||p(E.x-v*1.6,E.z-S*1.6)||{x:E.x-v*1.2,z:E.z-S*1.2};n.intent={...n.intent,x:z.x,z:z.z,offset:0,spin:0,top:0,power:n.lastPower},o()}let h=NaN,g=NaN;function x(b,E,v,S){const y=n.world,C=(Z,mt)=>rr(y,Z,mt),z=h===h?Math.sqrt((v-h)*(v-h)+(S-g)*(S-g)):1/0;h=v,g=S;const U=y.balls[1],X=v-U.x,ct=S-U.z,st=Math.sqrt(X*X+ct*ct),xt=y.placeR-.001;if(st>xt&&(v=U.x+X/st*xt,S=U.z+ct/st*xt),C(v,S))return{x:v,z:S};let $=2*z+.1,W=b,D=E,K=Math.sqrt((v-W)*(v-W)+(S-D)*(S-D));const Y=K/16>.25?.25:K/16<.04?.04:K/16;let rt=Y;for(let Z=0;Z<600&&K>1e-4&&rt>=.01&&$>1e-4;Z++){const mt=(v-W)/K,H=(S-D)/K,tt=rt<K?rt<$?rt:$:K<$?K:$;let lt=0,St=0,zt=K-1e-5;for(let J=0;J<xa.length;J++){const vt=mt*xa[J]-H*cu[J],k=mt*cu[J]+H*xa[J],nt=W+vt*tt,Bt=D+k*tt,jt=Math.sqrt((v-nt)*(v-nt)+(S-Bt)*(S-Bt));if(jt<zt&&C(nt,Bt)&&(lt=nt,St=Bt,zt=jt),zt<K-1e-5&&(J===0||J%2===0))break}zt<K-1e-5?(W=lt,D=St,K=zt,$-=tt,rt=rt*2>Y?Y:rt*2):rt/=2}const V=K>1e-9&&$<K?$>0?$/K:0:1;return m(C,W,D,W+(v-W)*V,D+(S-D)*V)}function m(b,E,v,S,y){let C=0,z=1;for(let U=0;U<16;U++){const X=(C+z)/2;b(E+(S-E)*X,v+(y-v)*X)?C=X:z=X}return{x:E+(S-E)*C,z:v+(y-v)*C}}function p(b,E){const v=n.world;if(rr(v,b,E))return{x:b,z:E};const S=v.balls[1];let y=b-S.x,C=E-S.z,z=Math.sqrt(y*y+C*C);const U=2*kt.R+kt.PLACE_GAP+.01,X=v.placeR-.01;if(z>X&&(y*=X/z,C*=X/z,z=X),z<U){const $=z>1e-6?U/z:0;y=z>1e-6?y*$:-U,C=z>1e-6?C*$:0,z=U}if(rr(v,S.x+y,S.z+C))return{x:S.x+y,z:S.z+C};const ct=Math.atan2(C,y);let st=null,xt=1/0;for(let $=U;$<=X+1e-9;$+=.25)for(let W=0;W<72;W++){const D=ct+W*Math.PI/36,K=S.x+Math.cos(D)*$,Y=S.z+Math.sin(D)*$;if(!rr(v,K,Y))continue;const rt=(K-b)*(K-b)+(Y-E)*(Y-E);rt<xt&&(xt=rt,st={x:K,z:Y})}return st}n.load=(b,E)=>{n.level=b,n.index=E,n.world=wp(b),n.score=Ap(b.par),n.lastPower=.5,n.speed=1,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,n.timer=0,e.acc=0,n.intent={x:0,z:0,offset:0,spin:0,top:0,power:.5,ax:1,az:0,dx:1,dz:0},d(),n.state="ready",t("hole:start",{level:b,index:E}),t("shot:ready",{strokes:0,par:b.par,first:!0})},n.retry=()=>n.load(n.level,n.index),n.setPlacement=(b,E)=>{if(n.state!=="ready")return!1;const v=n.intent,S=rr(n.world,v.x,v.z)?x(v.x,v.z,b,E):p(b,E);return!S||S.x===v.x&&S.z===v.z?!1:(n.intent={...n.intent,x:S.x,z:S.z},o(),!0)},n.setAimToward=(b,E)=>{if(n.state!=="ready")return;const v=n.intent,S=n.world.balls[1],y=S.x-v.x,C=S.z-v.z,z=b-v.x,U=E-v.z;z*z+U*U<1e-6||(n.intent={...v,offset:Math.atan2(y*U-C*z,y*z+C*U)},o())},n.rotateAim=b=>{if(n.state!=="ready")return;let E=n.intent.offset+b;for(;E>Math.PI;)E-=2*Math.PI;for(;E<-Math.PI;)E+=2*Math.PI;n.intent={...n.intent,offset:E},o()},n.setSpin=(b,E)=>{const v=n.intent,S=!!(n.level&&n.level.spin),y=E===void 0?v.top:E;let C=S&&b===b?b<-1?-1:b>1?1:b:0,z=S&&y===y?y<-1?-1:y>1?1:y:0;const U=C*C+z*z;if(U>1){const X=1/Math.sqrt(U);C*=X,z*=X}C===v.spin&&z===v.top||(n.intent={...v,spin:C,top:z},n.world&&o())},n.setPower=b=>{const E=b<0?0:b>1?1:b;E!==n.intent.power&&(n.intent={...n.intent,power:E},n.intent.spin&&n.world?o():n._guideKey="")},n.guide=()=>{if(!n.world||n.state!=="ready")return null;const b=n.intent,E=a(b),v=b.x+","+b.z+","+b.dx+","+b.dz+","+b.spin+","+b.top+","+E;if(v===n._guideKey)return n._guide;const S=ou(n.world,b,c(b),E);let y=null;return S.hit&&(y=xp(n.world,S.eightStart.x,S.eightStart.z,S.eightDir.x,S.eightDir.z,{x:S.spin,y:S.top},Dp,zp)),n._guide={cue:S,eight:y,warn:!S.hit||!!(y&&y.hazard)},n._guideKey=v,n._guide},n.fire=()=>{if(n.state!=="ready")return!1;const b=n.intent,E=a(b);return n.lastPower=E,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,e.acc=0,yh(n.world,b,c(b),E),n.state="rolling",t("shot:fire",{power:E,spin:b.spin,top:b.top,strokes:n.score.strokes+1}),!0},n.setSpeed=b=>{n.speed=b>1?b:1};function M(){const b=n.world.events;for(let E=0;E<b.length;E++){const v=b[E];switch(v.type){case"contact":n.shotContact=!0,t("ball:contact",{x:v.gx,z:v.gz,nx:v.nx,nz:v.nz,speed:Math.sqrt(v.v8x*v.v8x+v.v8z*v.v8z),cutCos:v.cutCos,spin:v.spin,top:v.top});break;case"wall":t("ball:wall",{id:v.id,x:v.x,z:v.z,nx:v.nx,nz:v.nz,speed:v.speed,kind:v.kind});break;case"hop":t("ball:hop",{x:v.x,z:v.z,speed:v.speed});break;case"holed":n.shotHoled=!0,t("ball:holed",{speed:v.speed});break;case"water":case"oob":n.shotHazard=v.type,n.dropAt={x:v.dropX,z:v.dropZ},t("ball:hazard",{kind:v.type,x:v.x,z:v.z});break;case"whiff":t("ball:whiff",{reason:v.reason,x:v.x,z:v.z});break;case"rest":t("ball:rest",{id:v.id,x:v.x,z:v.z});break;case"ballHit":t("ball:ballhit",{speed:v.speed});break;case"shotEnd":_();break}}b.length=0}function _(){const b=Cp(n.score,{holed:n.shotHoled,hazard:n.shotHazard});t("shot:end",{strokes:n.score.strokes,par:n.score.par,penalty:b.penalty,whiff:!n.shotContact,outcome:n.shotHoled?"holed":n.shotHazard||"rest",picked:b.picked}),n.state="resolving",n.timer=n.shotHoled?Ip:n.shotHazard?Lp:b.done?.6:0}function w(){const b=n.score;if(b.done){n.state="done";const E=Rp(b);t("hole:done",{index:n.index,level:n.level,strokes:E,par:b.par,picked:b.picked,penalties:b.penalties,stars:Pp(E,b.par,b.picked),term:Ac(E,b.par,b.picked)});return}if(n.dropAt)nu(n.world,n.dropAt.x,n.dropAt.z),t("ball:drop",{x:n.dropAt.x,z:n.dropAt.z}),n.dropAt=null;else{const E=n.world.balls[1];nu(n.world,E.x,E.z)}n.world.balls[0].mode="off",d(),n.state="ready",t("shot:ready",{strokes:b.strokes,par:b.par,first:!1})}let T=0;return n.update=b=>{n.state==="rolling"?(T=vp(n.world,b*au*n.speed,e,Math.ceil(240*au*n.speed)),M()):n.state==="resolving"&&(n.timer-=b,n.timer<=0&&w())},n.balls=()=>{const b=n.world;if(!b)return s;const E=n.state==="rolling";for(let v=0;v<2;v++){const S=b.balls[v],y=s[v],C=E?T:1;y.x=S.px+(S.x-S.px)*C,y.z=S.pz+(S.z-S.pz)*C,y.mode=S.mode,y.vx=S.vx,y.vz=S.vz,y.visible=S.mode!=="off"&&S.mode!=="sunk"&&S.mode!=="holed",y.alpha=S.mode==="ghost"?Math.max(0,S.fadeT/kt.CUE_FADE_T):1,y.y=b.heightAt(y.x,y.z)+kt.R}if(n.state==="ready"){const v=s[0];v.x=n.intent.x,v.z=n.intent.z,v.mode="placed",v.visible=!0,v.alpha=1,v.vx=0,v.vz=0,v.y=b.heightAt(v.x,v.z)+kt.R}if(s[1].mode==="holed"||n.shotHoled){const v=s[1];v.visible=!0,v.x=b.hole.x,v.z=b.hole.z,v.y=b.heightAt(v.x,v.z)-kt.R*.9}return s},n}const lu="eightballgolf.progress",Xo=Object.freeze([{id:"classic",name:"Classic",need:0},{id:"tennis",name:"Tennis",need:9},{id:"beach",name:"Beach ball",need:18},{id:"planet",name:"Planet",need:27},{id:"donut",name:"Donut",need:36},{id:"snow",name:"Snowball",need:45},{id:"gold",name:"Gold",need:54}]),va=(i,t,e)=>Number.isInteger(i)&&i>=t&&i<=e?i:null;function Up(i,t){const e=i&&typeof i=="object"?i:{},n=Array.isArray(e.holes)?e.holes:[],s=[];for(let c=0;c<t;c++){const l=n[c]&&typeof n[c]=="object"?n[c]:{},u=va(l.best,1,99);s.push({best:u,stars:u===null?0:va(l.stars,0,3)??0})}const r=Array.isArray(e.seenTips)?[...new Set(e.seenTips.filter(c=>typeof c=="string"&&c.length<40))].slice(0,200):[],o=Xo.some(c=>c.id===e.skin)?e.skin:"classic",a=va(e.last,0,Math.max(0,t-1));return{v:1,holes:s,skin:o,seenTips:r,muted:e.muted===!0,last:a}}async function Fp(i,t={}){const e=t.rounds||Ur,n=e.flatMap(h=>h.holes.map(g=>g.par)),s=n.length,r=new Map;let o=0;for(const h of e)r.set(h.id,o),o+=h.holes.length;let a=null;try{const h=i&&i.load?await i.load(lu):null;typeof h=="string"&&h.length&&(a=JSON.parse(h))}catch{a=null}const c=Up(a,s);Op(c.skin)>Yr(c)&&(c.skin="classic");function l(){if(!(!i||!i.save))try{const h=i.save(lu,JSON.stringify(c));h&&typeof h.catch=="function"&&h.catch(()=>{})}catch{}}const u=h=>Number.isInteger(h)&&h>=0&&h<s,f=()=>{let h=-1;for(let g=0;g<s;g++)c.holes[g].best!==null&&(h=g);return h},d={data:c,get skin(){return c.skin},get muted(){return c.muted},holeCount:s,isUnlocked(h){return u(h)&&h<=f()+1},best(h){return u(h)?c.holes[h].best:null},stars(h){return u(h)?c.holes[h].stars:0},totalStars(){return Yr(c)},roundStars(h){const g=r.get(h),x=e.find(p=>p.id===h);if(g===void 0||!x)return 0;let m=0;for(let p=0;p<x.holes.length;p++)m+=c.holes[g+p].stars;return m},roundTotal(h){const g=r.get(h),x=e.find(_=>_.id===h);if(g===void 0||!x)return{total:0,par:0,complete:!1};let m=0,p=0,M=!0;for(let _=0;_<x.holes.length;_++){p+=n[g+_];const w=c.holes[g+_].best;w===null?M=!1:m+=w}return{total:m,par:p,complete:M}},record(h,g,x){if(!u(h))return{newBest:!1,newStars:!1,firstTime:!1};const m=c.holes[h],p=Math.max(1,Math.round(Number(g)||1)),M=Math.max(0,Math.min(3,Math.round(Number(x)||0))),_=m.best===null,w=m.best===null||p<m.best,T=M>m.stars;return w&&(m.best=p),T&&(m.stars=M),c.last=h,l(),{newBest:w,newStars:T,firstTime:_}},nextIndex(){for(let h=0;h<s;h++)if(c.holes[h].best===null)return d.isUnlocked(h)?h:0;for(let h=0;h<s;h++)if(c.holes[h].stars<3)return h;return c.last??0},skins(){const h=Yr(c);return Xo.map(g=>({...g,unlocked:h>=g.need}))},setSkin(h){const g=Xo.find(x=>x.id===h);return!g||g.need>Yr(c)||c.skin===h?!1:(c.skin=h,l(),!0)},seenTip(h){return c.seenTips.includes(String(h))},markTip(h){h==null||d.seenTip(h)||(c.seenTips.push(String(h)),l())},setMuted(h){c.muted!==!!h&&(c.muted=!!h,l())},isFresh(){return f()<0}};return d}function Yr(i){let t=0;for(const e of i.holes)t+=e.stars;return t}function Op(i){const t=Xo.find(e=>e.id===i);return t?t.need:1/0}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yl="170",kp=0,uu=1,Bp=2,Sl=1,Hp=2,ai=3,ki=0,mn=1,yn=2,Ni=0,ks=1,fu=2,hu=3,du=4,Ph=5,zi=100,Gp=101,Vp=102,Wp=103,Xp=104,qp=200,Rc=201,Yp=202,Kp=203,Pc=204,Pr=205,$p=206,jp=207,Zp=208,Jp=209,Qp=210,t0=211,e0=212,n0=213,i0=214,Lc=0,Ic=1,Dc=2,Xs=3,zc=4,Nc=5,Uc=6,Fc=7,na=0,s0=1,r0=2,Ui=0,o0=1,a0=2,c0=3,l0=4,u0=5,f0=6,Lh=7,Ih=300,qs=301,Ys=302,Oc=303,kc=304,ia=306,qo=1e3,di=1001,Bc=1002,En=1003,h0=1004,Kr=1005,wn=1006,_a=1007,rs=1008,Jn=1009,Dh=1010,zh=1011,Lr=1012,bl=1013,cs=1014,jn=1015,Fr=1016,wl=1017,El=1018,Ks=1020,Nh=35902,Uh=1021,Fh=1022,Dn=1023,Oh=1024,kh=1025,Bs=1026,$s=1027,Tl=1028,Al=1029,Bh=1030,Cl=1031,Rl=1033,Do=33776,zo=33777,No=33778,Uo=33779,Hc=35840,Gc=35841,Vc=35842,Wc=35843,Xc=36196,qc=37492,Yc=37496,Kc=37808,$c=37809,jc=37810,Zc=37811,Jc=37812,Qc=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,Fo=36492,cl=36494,ll=36495,Hh=36283,ul=36284,fl=36285,hl=36286,d0=3200,p0=3201,sa=0,m0=1,fi="",Qe="srgb",Qs="srgb-linear",ra="linear",we="srgb",ps=7680,pu=519,g0=512,x0=513,v0=514,Gh=515,_0=516,M0=517,y0=518,S0=519,mu=35044,Fi=35048,gu="300 es",pi=2e3,Yo=2001;class tr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xu=1234567;const br=Math.PI/180,Ir=180/Math.PI;function er(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function Pl(i,t){return(i%t+t)%t}function b0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function w0(i,t,e){return i!==t?(e-i)/(t-i):0}function wr(i,t,e){return(1-e)*i+e*t}function E0(i,t,e,n){return wr(i,t,1-Math.exp(-e*n))}function T0(i,t=1){return t-Math.abs(Pl(i,t*2)-t)}function A0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function C0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function R0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function P0(i,t){return i+Math.random()*(t-i)}function L0(i){return i*(.5-Math.random())}function I0(i){i!==void 0&&(xu=i);let t=xu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function D0(i){return i*br}function z0(i){return i*Ir}function N0(i){return(i&i-1)===0&&i!==0}function U0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function F0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function O0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),h=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*h,a*l);break;case"YXY":i.set(c*h,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*h,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Dr={DEG2RAD:br,RAD2DEG:Ir,generateUUID:er,clamp:Ze,euclideanModulo:Pl,mapLinear:b0,inverseLerp:w0,lerp:wr,damp:E0,pingpong:T0,smoothstep:A0,smootherstep:C0,randInt:R0,randFloat:P0,randFloatSpread:L0,seededRandom:I0,degToRad:D0,radToDeg:z0,isPowerOfTwo:N0,ceilPowerOfTwo:U0,floorPowerOfTwo:F0,setQuaternionFromProperEuler:O0,normalize:un,denormalize:Ds};class Jt{constructor(t=0,e=0){Jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,s,r,o,a,c,l){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],_=s[4],w=s[7],T=s[2],b=s[5],E=s[8];return r[0]=o*x+a*M+c*T,r[3]=o*m+a*_+c*b,r[6]=o*p+a*w+c*E,r[1]=l*x+u*M+f*T,r[4]=l*m+u*_+f*b,r[7]=l*p+u*w+f*E,r[2]=d*x+h*M+g*T,r[5]=d*m+h*_+g*b,r[8]=d*p+h*w+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,d=a*c-u*r,h=l*r-o*c,g=e*f+n*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=h*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new fe;function Vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function k0(){const i=Ko("canvas");return i.style.display="block",i}const vu={};function gr(i){i in vu||(vu[i]=!0,console.warn(i))}function B0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function H0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function G0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Me={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const _u=[.64,.33,.3,.6,.15,.06],Mu=[.2126,.7152,.0722],yu=[.3127,.329],Su=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Me.define({[Qs]:{primaries:_u,whitePoint:yu,transfer:ra,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:Mu,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:_u,whitePoint:yu,transfer:we,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:Mu,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let ms;class V0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=Ko("canvas")),ms.width=t.width,ms.height=t.height;const n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ko("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let W0=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ya(s[o].image)):r.push(ya(s[o]))}else r=ya(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?V0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X0=0;class ln extends tr{constructor(t=ln.DEFAULT_IMAGE,e=ln.DEFAULT_MAPPING,n=di,s=di,r=wn,o=rs,a=Dn,c=Jn,l=ln.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=er(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case Bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case Bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Ih;ln.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,n=0,s=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,w=(h+1)/2,T=(p+1)/2,b=(u+d)/4,E=(f+x)/4,v=(g+m)/4;return _>w&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=E/n):w>T?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=b/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=E/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q0 extends tr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ln(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends q0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xh extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y0 extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3];const d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=h,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==d||l!==h||u!==g){let m=1-a;const p=c*d+l*h+u*g+f*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const T=Math.sqrt(_),b=Math.atan2(T,p*M);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const w=a*M;if(c=c*m+d*w,l=l*m+h*w,u=u*m+g*w,f=f*m+x*w,m===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=T,l*=T,u*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*h-l*d,t[e+1]=c*g+u*d+l*f-a*h,t[e+2]=l*g+u*h+a*d-c*f,t[e+3]=u*g-a*f-c*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),d=c(n/2),h=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(o-s)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-c)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(r-l)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*n+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,n=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sa.copy(this).projectOnVector(t),this.sub(Sa)}reflect(t){return this.sub(Sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new et,wu=new fs;class Gi{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),jr.subVectors(this.max,ar),gs.subVectors(t.a,ar),xs.subVectors(t.b,ar),vs.subVectors(t.c,ar),bi.subVectors(xs,gs),wi.subVectors(vs,xs),Wi.subVectors(gs,vs);let e=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-Wi.z,Wi.y,bi.z,0,-bi.x,wi.z,0,-wi.x,Wi.z,0,-Wi.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-Wi.y,Wi.x,0];return!ba(e,gs,xs,vs,jr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,gs,xs,vs,jr))?!1:(Zr.crossVectors(bi,wi),e=[Zr.x,Zr.y,Zr.z],ba(e,gs,xs,vs,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new et,new et,new et,new et,new et,new et,new et,new et],zn=new et,$r=new Gi,gs=new et,xs=new et,vs=new et,bi=new et,wi=new et,Wi=new et,ar=new et,jr=new et,Zr=new et,Xi=new et;function ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const K0=new Gi,cr=new et,wa=new et;class Vi{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):K0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);const e=cr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(wa)),this.expandByPoint(cr.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new et,Ea=new et,Jr=new et,Ei=new et,Ta=new et,Qr=new et,Aa=new et;class $0{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ea.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Ea);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Jr),a=Ei.dot(this.direction),c=-Ei.dot(Jr),l=Ei.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*c-a,d=o*a-c,g=r*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),h=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),h=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ea).addScaledVector(Jr,d),h}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){Ta.subVectors(e,t),Qr.subVectors(n,t),Aa.crossVectors(Ta,Qr);let o=this.direction.dot(Aa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const c=a*this.direction.dot(Qr.crossVectors(Ei,Qr));if(c<0)return null;const l=a*this.direction.dot(Ta.cross(Ei));if(l<0||c+l>o)return null;const u=-a*Ei.dot(Aa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,s,r,o,a,c,l,u,f,d,h,g,x,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,d,h,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,f,d,h,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*u,h=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=h+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+h*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,h=c*f,g=l*u,x=l*f;e[0]=d+x*a,e[4]=g*a-h,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,h=c*f,g=l*u,x=l*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,h=o*f,g=a*u,x=a*f;e[0]=c*u,e[4]=g*l-h,e[8]=d*l+x,e[1]=c*f,e[5]=x*l+d,e[9]=h*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*f,e[8]=g*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=h*f+g,e[10]=d-x*f}else if(t.order==="XZY"){const d=o*c,h=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+x,e[5]=o*u,e[9]=h*f-g,e[2]=g*f-h,e[6]=a*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(j0,t,Z0)}lookAt(t,e,n){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ti.crossVectors(n,xn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ti.crossVectors(n,xn)),Ti.normalize(),to.crossVectors(xn,Ti),s[0]=Ti.x,s[4]=to.x,s[8]=xn.x,s[1]=Ti.y,s[5]=to.y,s[9]=xn.y,s[2]=Ti.z,s[6]=to.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],_=n[7],w=n[11],T=n[15],b=s[0],E=s[4],v=s[8],S=s[12],y=s[1],C=s[5],z=s[9],U=s[13],X=s[2],ct=s[6],st=s[10],xt=s[14],$=s[3],W=s[7],D=s[11],K=s[15];return r[0]=o*b+a*y+c*X+l*$,r[4]=o*E+a*C+c*ct+l*W,r[8]=o*v+a*z+c*st+l*D,r[12]=o*S+a*U+c*xt+l*K,r[1]=u*b+f*y+d*X+h*$,r[5]=u*E+f*C+d*ct+h*W,r[9]=u*v+f*z+d*st+h*D,r[13]=u*S+f*U+d*xt+h*K,r[2]=g*b+x*y+m*X+p*$,r[6]=g*E+x*C+m*ct+p*W,r[10]=g*v+x*z+m*st+p*D,r[14]=g*S+x*U+m*xt+p*K,r[3]=M*b+_*y+w*X+T*$,r[7]=M*E+_*C+w*ct+T*W,r[11]=M*v+_*z+w*st+T*D,r[15]=M*S+_*U+w*xt+T*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],h=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*a*d+n*l*d+s*a*h-n*c*h)+x*(+e*c*h-e*l*d+r*o*d-s*o*h+s*l*u-r*c*u)+m*(+e*l*f-e*a*h-r*o*f+n*o*h+r*a*u-n*l*u)+p*(-s*a*u-e*c*f+e*a*d+s*o*f-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],h=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=f*m*l-x*d*l+x*c*h-a*m*h-f*c*p+a*d*p,_=g*d*l-u*m*l-g*c*h+o*m*h+u*c*p-o*d*p,w=u*x*l-g*f*l+g*a*h-o*x*h-u*a*p+o*f*p,T=g*f*c-u*x*c-g*a*d+o*x*d+u*a*m-o*f*m,b=e*M+n*_+s*w+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=M*E,t[1]=(x*d*r-f*m*r-x*s*h+n*m*h+f*s*p-n*d*p)*E,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(f*c*r-a*d*r-f*s*l+n*d*l+a*s*h-n*c*h)*E,t[4]=_*E,t[5]=(u*m*r-g*d*r+g*s*h-e*m*h-u*s*p+e*d*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*h+e*c*h)*E,t[8]=w*E,t[9]=(g*f*r-u*x*r-g*n*h+e*x*h+u*n*p-e*f*p)*E,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*E,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*h-e*a*h)*E,t[12]=T*E,t[13]=(u*x*s-g*f*s+g*n*d-e*x*d-u*n*m+e*f*m)*E,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*E,t[15]=(o*f*s-u*a*s+u*n*c-e*f*c-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,d=r*l,h=r*u,g=r*f,x=o*u,m=o*f,p=a*f,M=c*l,_=c*u,w=c*f,T=n.x,b=n.y,E=n.z;return s[0]=(1-(x+p))*T,s[1]=(h+w)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(h-w)*b,s[5]=(1-(d+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+_)*E,s[9]=(m-M)*E,s[10]=(1-(d+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);const l=1/r,u=1/o,f=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=pi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let h,g;if(a===pi)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yo)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pi){const c=this.elements,l=1/(e-t),u=1/(n-s),f=1/(o-r),d=(e+t)*l,h=(n+s)*u;let g,x;if(a===pi)g=(o+r)*f,x=-2*f;else if(a===Yo)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _s=new et,Nn=new ye,j0=new et(0,0,0),Z0=new et(1,1,1),Ti=new et,to=new et,xn=new et,Eu=new ye,Tu=new fs;class Tn{constructor(t=0,e=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J0=0;const Au=new et,Ms=new fs,ni=new ye,eo=new et,lr=new et,Q0=new et,tm=new fs,Cu=new et(1,0,0),Ru=new et(0,1,0),Pu=new et(0,0,1),Lu={type:"added"},em={type:"removed"},ys={type:"childadded",child:null},Ca={type:"childremoved",child:null};class tn extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new et,e=new Tn,n=new fs,s=new et(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new fe}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Pu,t)}translateOnAxis(t,e){return Au.copy(t).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?eo.copy(t):eo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(lr,eo,this.up):ni.lookAt(eo,lr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(ni),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lu),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(em),Ca.child=t,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lu),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}tn.DEFAULT_UP=new et(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new et,ii=new et,Ra=new et,si=new et,Ss=new et,bs=new et,Iu=new et,Pa=new et,La=new et,Ia=new et,Da=new Ie,za=new Ie,Na=new Ie;class kn{constructor(t=new et,e=new et,n=new et){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Un.subVectors(s,e),ii.subVectors(n,e),Ra.subVectors(t,e);const o=Un.dot(Un),a=Un.dot(ii),c=Un.dot(Ra),l=ii.dot(ii),u=ii.dot(Ra),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Da.setScalar(0),za.setScalar(0),Na.setScalar(0),Da.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Da,r.x),o.addScaledVector(za,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),ii.subVectors(t,e),Un.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Un.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ss.subVectors(s,n),bs.subVectors(r,n),Pa.subVectors(t,n);const c=Ss.dot(Pa),l=bs.dot(Pa);if(c<=0&&l<=0)return e.copy(n);La.subVectors(t,s);const u=Ss.dot(La),f=bs.dot(La);if(u>=0&&f<=u)return e.copy(s);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ss,o);Ia.subVectors(t,r);const h=Ss.dot(Ia),g=bs.dot(Ia);if(g>=0&&h<=g)return e.copy(r);const x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(bs,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Iu.subVectors(r,s),a=(f-u)/(f-u+(h-g)),e.copy(s).addScaledVector(Iu,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Ss,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=Pl(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ua(o,r,t+1/3),this.g=Ua(o,r,t),this.b=Ua(o,r,t-1/3)}return Me.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=Yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return Me.fromWorkingColorSpace(rn.copy(this),t),Math.round(Ze(rn.r*255,0,255))*65536+Math.round(Ze(rn.g*255,0,255))*256+Math.round(Ze(rn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Qe){Me.fromWorkingColorSpace(rn.copy(this),t);const e=rn.r,n=rn.g,s=rn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(no);const n=wr(Ai.h,no.h,e),s=wr(Ai.s,no.s,e),r=wr(Ai.l,no.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new ce;ce.NAMES=Yh;let nm=0;class hs extends tr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=er(),this.name="",this.blending=ks,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Pr,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pr&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kh extends hs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new et,io=new Jt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mu,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)io.fromBufferAttribute(this,e),io.applyMatrix3(t),this.setXY(e,io.x,io.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mu&&(t.usage=this.usage),t}}class $h extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jh extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let im=0;const Rn=new ye,Fa=new tn,ws=new et,vn=new Gi,ur=new Gi,je=new et;class Ve extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vh(t)?jh:$h)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(vn.min,ur.min),vn.expandByPoint(je),je.addVectors(vn.max,ur.max),vn.expandByPoint(je)):(vn.expandByPoint(ur.min),vn.expandByPoint(ur.max))}vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)je.fromBufferAttribute(a,l),c&&(ws.fromBufferAttribute(t,l),je.add(ws)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new et,c[v]=new et;const l=new et,u=new et,f=new et,d=new Jt,h=new Jt,g=new Jt,x=new et,m=new et;function p(v,S,y){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,y),d.fromBufferAttribute(r,v),h.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(C),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(C),a[v].add(x),a[S].add(x),a[y].add(x),c[v].add(m),c[S].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,S=M.length;v<S;++v){const y=M[v],C=y.start,z=y.count;for(let U=C,X=C+z;U<X;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const _=new et,w=new et,T=new et,b=new et;function E(v){T.fromBufferAttribute(s,v),b.copy(T);const S=a[v];_.copy(S),_.sub(T.multiplyScalar(T.dot(S))).normalize(),w.crossVectors(b,S);const C=w.dot(c[v])<0?-1:1;o.setXYZW(v,_.x,_.y,_.z,C)}for(let v=0,S=M.length;v<S;++v){const y=M[v],C=y.start,z=y.count;for(let U=C,X=C+z;U<X;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new et,r=new et,o=new et,a=new et,c=new et,l=new et,u=new et,f=new et;if(t)for(let d=0,h=t.count;d<h;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?h=c[x]*a.data.stride+a.offset:h=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new ke(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=t(d,n);c.push(h)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new ye,qi=new $0,so=new Vi,zu=new et,ro=new et,oo=new et,ao=new et,Oa=new et,co=new et,Nu=new et,lo=new et;class De extends tn{constructor(t=new Ve,e=new Kh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Oa.fromBufferAttribute(f,t),o?co.addScaledVector(Oa,u):co.addScaledVector(Oa.sub(e),u))}e.add(co)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(so.containsPoint(qi.origin)===!1&&(qi.intersectSphere(so,zu)===null||qi.origin.distanceToSquared(zu)>(t.far-t.near)**2))&&(Du.copy(r).invert(),qi.copy(t.ray).applyMatrix4(Du),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let w=M,T=_;w<T;w+=3){const b=a.getX(w),E=a.getX(w+1),v=a.getX(w+2);s=uo(this,p,t,n,l,u,f,b,E,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const M=a.getX(m),_=a.getX(m+1),w=a.getX(m+2);s=uo(this,o,t,n,l,u,f,M,_,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let w=M,T=_;w<T;w+=3){const b=w,E=w+1,v=w+2;s=uo(this,p,t,n,l,u,f,b,E,v),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const M=m,_=m+1,w=m+2;s=uo(this,o,t,n,l,u,f,M,_,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function sm(i,t,e,n,s,r,o,a){let c;if(t.side===mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ki,a),c===null)return null;lo.copy(a),lo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(lo);return l<e.near||l>e.far?null:{distance:l,point:lo.clone(),object:i}}function uo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ro),i.getVertexPosition(c,oo),i.getVertexPosition(l,ao);const u=sm(i,t,e,n,ro,oo,ao,Nu);if(u){const f=new et;kn.getBarycoord(Nu,ro,oo,ao,f),s&&(u.uv=kn.getInterpolatedAttribute(s,a,c,l,f,new Jt)),r&&(u.uv1=kn.getInterpolatedAttribute(r,a,c,l,f,new Jt)),o&&(u.normal=kn.getInterpolatedAttribute(o,a,c,l,f,new et),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new et,materialIndex:0};kn.getNormal(ro,oo,ao,d.normal),u.face=d,u.barycoord=f}return u}class Bn extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(f,2));function g(x,m,p,M,_,w,T,b,E,v,S){const y=w/E,C=T/v,z=w/2,U=T/2,X=b/2,ct=E+1,st=v+1;let xt=0,$=0;const W=new et;for(let D=0;D<st;D++){const K=D*C-U;for(let Y=0;Y<ct;Y++){const rt=Y*y-z;W[x]=rt*M,W[m]=K*_,W[p]=X,l.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[p]=b>0?1:-1,u.push(W.x,W.y,W.z),f.push(Y/E),f.push(1-D/v),xt+=1}}for(let D=0;D<v;D++)for(let K=0;K<E;K++){const Y=d+K+ct*D,rt=d+K+ct*(D+1),V=d+(K+1)+ct*(D+1),Z=d+(K+1)+ct*D;c.push(Y,rt,Z),c.push(rt,V,Z),$+=6}a.addGroup(h,$,S),h+=$,d+=xt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){const t={};for(let e=0;e<i.length;e++){const n=js(i[e]);for(const s in n)t[s]=n[s]}return t}function rm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const om={clone:js,merge:fn};var am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends hs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Jh extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new et,Uu=new Jt,Fu=new Jt;class Mn extends Jh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Uu,Fu),e.subVectors(Fu,Uu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Es=-90,Ts=1;class lm extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(Es,Ts,t,e);s.layers=this.layers,this.add(s);const r=new Mn(Es,Ts,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Es,Ts,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Es,Ts,t,e);a.layers=this.layers,this.add(a);const c=new Mn(Es,Ts,t,e);c.layers=this.layers,this.add(c);const l=new Mn(Es,Ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qh extends ln{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class um extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Ni});r.uniforms.tEquirect.value=e;const o=new De(s,r),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=wn),new lm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ka=new et,fm=new et,hm=new fe;class Qi{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ka.subVectors(n,e).cross(fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hm.getNormalMatrix(t),s=this.coplanarPoint(ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Vi,fo=new et;class Ll{constructor(t=new Qi,e=new Qi,n=new Qi,s=new Qi,r=new Qi,o=new Qi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],f=s[6],d=s[7],h=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],_=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,m-h,w-p).normalize(),n[1].setComponents(c+r,d+l,m+h,w+p).normalize(),n[2].setComponents(c+o,d+u,m+g,w+M).normalize(),n[3].setComponents(c-o,d-u,m-g,w-M).normalize(),n[4].setComponents(c-a,d-f,m-x,w-_).normalize(),e===pi)n[5].setComponents(c+a,d+f,m+x,w+_).normalize();else if(e===Yo)n[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fo.x=s.normal.x>0?t.max.x:t.min.x,fo.y=s.normal.y>0?t.max.y:t.min.y,fo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function td(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dm(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const x=f[h];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ds extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,d=e/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let _=0;_<l;_++){const w=_*f-r;g.push(w,-M,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const _=M+l*p,w=M+l*(p+1),T=M+1+l*(p+1),b=M+1+l*p;h.push(_,w,b),h.push(w,T,b)}this.setIndex(h),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
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
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Cm=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fm=`#define PI 3.141592653589793
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
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,km=`vec3 transformedNormal = objectNormal;
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
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
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
#endif`,hg=`struct PhysicalMaterial {
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
}`,dg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bg=`#if defined( USE_POINTS_UV )
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
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ug=`#ifdef USE_NORMALMAP
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
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,px=`uniform sampler2D t2D;
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
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
}`,yx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Rx=`#define LAMBERT
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
}`,Px=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Ix=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,zx=`#define NORMAL
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
}`,Nx=`#define PHONG
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
}`,Ux=`#define PHONG
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
}`,Fx=`#define STANDARD
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
}`,Ox=`#define STANDARD
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
}`,kx=`#define TOON
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
}`,Bx=`#define TOON
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
}`,Hx=`uniform float size;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Wx=`uniform vec3 color;
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
}`,Xx=`uniform float rotation;
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
}`,qx=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:xm,alphatest_fragment:vm,alphatest_pars_fragment:_m,aomap_fragment:Mm,aomap_pars_fragment:ym,batching_pars_vertex:Sm,batching_vertex:bm,begin_vertex:wm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Im,color_fragment:Dm,color_pars_fragment:zm,color_pars_vertex:Nm,color_vertex:Um,common:Fm,cube_uv_reflection_fragment:Om,defaultnormal_vertex:km,displacementmap_pars_vertex:Bm,displacementmap_vertex:Hm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Vm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:Km,envmap_pars_vertex:$m,envmap_physical_pars_fragment:og,envmap_vertex:jm,fog_vertex:Zm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:tg,gradientmap_pars_fragment:eg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:cg,lights_phong_fragment:lg,lights_phong_pars_fragment:ug,lights_physical_fragment:fg,lights_physical_pars_fragment:hg,lights_fragment_begin:dg,lights_fragment_maps:pg,lights_fragment_end:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:xg,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:_g,map_fragment:Mg,map_pars_fragment:yg,map_particle_fragment:Sg,map_particle_pars_fragment:bg,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Tg,morphcolor_vertex:Ag,morphnormal_vertex:Cg,morphtarget_pars_vertex:Rg,morphtarget_vertex:Pg,normal_fragment_begin:Lg,normal_fragment_maps:Ig,normal_pars_fragment:Dg,normal_pars_vertex:zg,normal_vertex:Ng,normalmap_pars_fragment:Ug,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:kg,iridescence_pars_fragment:Bg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Vg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:$g,shadowmap_pars_vertex:jg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:Qg,skinning_pars_vertex:tx,skinning_vertex:ex,skinnormal_vertex:nx,specularmap_fragment:ix,specularmap_pars_fragment:sx,tonemapping_fragment:rx,tonemapping_pars_fragment:ox,transmission_fragment:ax,transmission_pars_fragment:cx,uv_pars_fragment:lx,uv_pars_vertex:ux,uv_vertex:fx,worldpos_vertex:hx,background_vert:dx,background_frag:px,backgroundCube_vert:mx,backgroundCube_frag:gx,cube_vert:xx,cube_frag:vx,depth_vert:_x,depth_frag:Mx,distanceRGBA_vert:yx,distanceRGBA_frag:Sx,equirect_vert:bx,equirect_frag:wx,linedashed_vert:Ex,linedashed_frag:Tx,meshbasic_vert:Ax,meshbasic_frag:Cx,meshlambert_vert:Rx,meshlambert_frag:Px,meshmatcap_vert:Lx,meshmatcap_frag:Ix,meshnormal_vert:Dx,meshnormal_frag:zx,meshphong_vert:Nx,meshphong_frag:Ux,meshphysical_vert:Fx,meshphysical_frag:Ox,meshtoon_vert:kx,meshtoon_frag:Bx,points_vert:Hx,points_frag:Gx,shadow_vert:Vx,shadow_frag:Wx,sprite_vert:Xx,sprite_frag:qx},$t={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Yn={basic:{uniforms:fn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:fn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new ce(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:fn([$t.common,$t.specularmap,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,$t.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:fn([$t.common,$t.envmap,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.roughnessmap,$t.metalnessmap,$t.fog,$t.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:fn([$t.common,$t.aomap,$t.lightmap,$t.emissivemap,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.gradientmap,$t.fog,$t.lights,{emissive:{value:new ce(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:fn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,$t.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:fn([$t.points,$t.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:fn([$t.common,$t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:fn([$t.common,$t.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:fn([$t.common,$t.bumpmap,$t.normalmap,$t.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:fn([$t.sprite,$t.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:fn([$t.common,$t.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:fn([$t.lights,$t.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Yn.physical={uniforms:fn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const ho={r:0,b:0,g:0},Ki=new Tn,Yx=new ye;function Kx(i,t,e,n,s,r,o){const a=new ce(0);let c=r===!0?0:1,l,u,f=null,d=0,h=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1;const w=g(M);w===null?p(a,c):w&&w.isColor&&(p(w,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const w=g(_);w&&(w.isCubeTexture||w.mapping===ia)?(u===void 0&&(u=new De(new Bn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:js(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ki.copy(_.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(Ki)),u.material.toneMapped=Me.getTransfer(w.colorSpace)!==we,(f!==w||d!==w.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new De(new ds(2,2),new gn({name:"BackgroundMaterial",uniforms:js(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Me.getTransfer(w.colorSpace)!==we,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=w,d=w.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,_){M.getRGB(ho,Zh(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:x,addToRenderList:m}}function $x(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,C,z,U,X){let ct=!1;const st=f(U,z,C);r!==st&&(r=st,l(r.object)),ct=h(y,U,z,X),ct&&g(y,U,z,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(ct||o)&&(o=!1,w(y,C,z,U),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,C,z){const U=z.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let ct=X[C.id];ct===void 0&&(ct={},X[C.id]=ct);let st=ct[U];return st===void 0&&(st=d(c()),ct[U]=st),st}function d(y){const C=[],z=[],U=[];for(let X=0;X<e;X++)C[X]=0,z[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:U,object:y,attributes:{},index:null}}function h(y,C,z,U){const X=r.attributes,ct=C.attributes;let st=0;const xt=z.getAttributes();for(const $ in xt)if(xt[$].location>=0){const D=X[$];let K=ct[$];if(K===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),D===void 0||D.attribute!==K||K&&D.data!==K.data)return!0;st++}return r.attributesNum!==st||r.index!==U}function g(y,C,z,U){const X={},ct=C.attributes;let st=0;const xt=z.getAttributes();for(const $ in xt)if(xt[$].location>=0){let D=ct[$];D===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(D=y.instanceColor));const K={};K.attribute=D,D&&D.data&&(K.data=D.data),X[$]=K,st++}r.attributes=X,r.attributesNum=st,r.index=U}function x(){const y=r.newAttributes;for(let C=0,z=y.length;C<z;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const z=r.newAttributes,U=r.enabledAttributes,X=r.attributeDivisors;z[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),X[y]!==C&&(i.vertexAttribDivisor(y,C),X[y]=C)}function M(){const y=r.newAttributes,C=r.enabledAttributes;for(let z=0,U=C.length;z<U;z++)C[z]!==y[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function _(y,C,z,U,X,ct,st){st===!0?i.vertexAttribIPointer(y,C,z,X,ct):i.vertexAttribPointer(y,C,z,U,X,ct)}function w(y,C,z,U){x();const X=U.attributes,ct=z.getAttributes(),st=C.defaultAttributeValues;for(const xt in ct){const $=ct[xt];if($.location>=0){let W=X[xt];if(W===void 0&&(xt==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),xt==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const D=W.normalized,K=W.itemSize,Y=t.get(W);if(Y===void 0)continue;const rt=Y.buffer,V=Y.type,Z=Y.bytesPerElement,mt=V===i.INT||V===i.UNSIGNED_INT||W.gpuType===bl;if(W.isInterleavedBufferAttribute){const H=W.data,tt=H.stride,lt=W.offset;if(H.isInstancedInterleavedBuffer){for(let St=0;St<$.locationSize;St++)p($.location+St,H.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let St=0;St<$.locationSize;St++)m($.location+St);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let St=0;St<$.locationSize;St++)_($.location+St,K/$.locationSize,V,D,tt*Z,(lt+K/$.locationSize*St)*Z,mt)}else{if(W.isInstancedBufferAttribute){for(let H=0;H<$.locationSize;H++)p($.location+H,W.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let H=0;H<$.locationSize;H++)m($.location+H);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let H=0;H<$.locationSize;H++)_($.location+H,K/$.locationSize,V,D,K*Z,K/$.locationSize*H*Z,mt)}}else if(st!==void 0){const D=st[xt];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv($.location,D);break;case 3:i.vertexAttrib3fv($.location,D);break;case 4:i.vertexAttrib4fv($.location,D);break;default:i.vertexAttrib1fv($.location,D)}}}}M()}function T(){v();for(const y in n){const C=n[y];for(const z in C){const U=C[z];for(const X in U)u(U[X].object),delete U[X];delete C[z]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const z in C){const U=C[z];for(const X in U)u(U[X].object),delete U[X];delete C[z]}delete n[y.id]}function E(y){for(const C in n){const z=n[C];if(z[y.id]===void 0)continue;const U=z[y.id];for(const X in U)u(U[X].object),delete U[X];delete z[y.id]}}function v(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:v,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function jx(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),e.update(u,n,f))}function a(l,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];e.update(h,n,1)}function c(l,u,f,d){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Zx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Dn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const v=E===Fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Jn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==jn&&!v)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:T,maxSamples:b}}function Jx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Qi,a=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const M=r?0:n,_=M*4;let w=p.clippingState||null;c.value=w,w=u(g,d,_,h);for(let T=0;T!==_;++T)w[T]=e[T];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,h,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=h+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,w=h;_!==x;++_,w+=4)o.copy(f[_]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Qx(i){let t=new WeakMap;function e(o,a){return a===Oc?o.mapping=qs:a===kc&&(o.mapping=Ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oc||a===kc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new um(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ed extends Jh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Us=4,Ou=[.125,.215,.35,.446,.526,.582],ns=20,Ba=new ed,ku=new ce;let Ha=null,Ga=0,Va=0,Wa=!1;const ts=(1+Math.sqrt(5))/2,As=1/ts,Bu=[new et(-ts,As,0),new et(ts,As,0),new et(-As,0,ts),new et(As,0,ts),new et(0,ts,-As),new et(0,ts,As),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)];class Hu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Ga,Va),this._renderer.xr.enabled=Wa,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Fr,format:Dn,colorSpace:Qs,depthBuffer:!1},s=Gu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tv(r)),this._blurMaterial=ev(r,t,e)}return s}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,Ba)}_sceneToCubeUV(t,e,n,s){const a=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ku),u.toneMapping=Ui,u.autoClear=!1;const h=new Kh({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new De(new Bn,h);let x=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,x=!0):(h.color.copy(ku),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;po(s,M*_,p>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qs||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;po(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bu[(s-r-1)%Bu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new De(this._lodPlanes[s],l),d=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ns-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const p=[];let M=0;for(let E=0;E<ns;++E){const v=E/x,S=Math.exp(-v*v/2);p.push(S),E===0?M+=S:E<m&&(M+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const w=this._sizeLods[s],T=3*w*(s>_-Us?s-_+Us:0),b=4*(this._cubeSize-w);po(e,T,b,3*w,2*w),c.setRenderTarget(e),c.render(f,Ba)}}function tv(i){const t=[],e=[],n=[];let s=i;const r=i-Us+1+Ou.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Us?c=Ou[o-i+Us-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*h),_=new Float32Array(m*g*h),w=new Float32Array(p*g*h);for(let b=0;b<h;b++){const E=b%3*2/3-1,v=b>2?0:-1,S=[E,v,0,E+2/3,v,0,E+2/3,v+1,0,E,v,0,E+2/3,v+1,0,E,v+1,0];M.set(S,x*g*b),_.set(d,m*g*b);const y=[b,b,b,b,b,b];w.set(y,p*g*b)}const T=new Ve;T.setAttribute("position",new ke(M,x)),T.setAttribute("uv",new ke(_,m)),T.setAttribute("faceIndex",new ke(w,p)),t.push(T),s>Us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gu(i,t,e){const n=new ls(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ev(i,t,e){const n=new Float32Array(ns),s=new et(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Vu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Wu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function nv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Oc||c===kc,u=c===qs||c===Ys;if(l||u){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Hu(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return l&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new Hu(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function iv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sv(i,t,e,n){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(t.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const x=h[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(f){const d=[],h=f.index,g=f.attributes.position;let x=0;if(h!==null){const M=h.array;x=h.version;for(let _=0,w=M.length;_<w;_+=3){const T=M[_+0],b=M[_+1],E=M[_+2];d.push(T,b,b,E,E,T)}}else if(g!==void 0){const M=g.array;x=g.version;for(let _=0,w=M.length/3-1;_<w;_+=3){const T=_+0,b=_+1,E=_+2;d.push(T,b,b,E,E,T)}}else return;const m=new(Vh(d)?jh:$h)(d,1);m.version=x;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function rv(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*o),e.update(h,n,1)}function l(d,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,d*o,g),e.update(h,n,g))}function u(d,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,n,1)}function f(d,h,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*x[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ov(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function av(i,t,e){const n=new WeakMap,s=new Ie;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;h===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let w=a.attributes.position.count*_,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const b=new Float32Array(w*T*4*f),E=new Xh(b,w,T,f);E.type=jn,E.needsUpdate=!0;const v=_*4;for(let y=0;y<f;y++){const C=m[y],z=p[y],U=M[y],X=w*T*4*y;for(let ct=0;ct<C.count;ct++){const st=ct*v;h===!0&&(s.fromBufferAttribute(C,ct),b[X+st+0]=s.x,b[X+st+1]=s.y,b[X+st+2]=s.z,b[X+st+3]=0),g===!0&&(s.fromBufferAttribute(z,ct),b[X+st+4]=s.x,b[X+st+5]=s.y,b[X+st+6]=s.z,b[X+st+7]=0),x===!0&&(s.fromBufferAttribute(U,ct),b[X+st+8]=s.x,b[X+st+9]=s.y,b[X+st+10]=s.z,b[X+st+11]=U.itemSize===4?s.w:1)}}d={count:f,texture:E,size:new Jt(w,T)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let x=0;x<l.length;x++)h+=l[x];const g=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function cv(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class nd extends ln{constructor(t,e,n,s,r,o,a,c,l,u=Bs){if(u!==Bs&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bs&&(n=cs),n===void 0&&u===$s&&(n=Ks),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:En,this.minFilter=c!==void 0?c:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const id=new ln,Xu=new nd(1,1),sd=new Xh,rd=new Y0,od=new Qh,qu=[],Yu=[],Ku=new Float32Array(16),$u=new Float32Array(9),ju=new Float32Array(4);function nr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oa(i,t){let e=Yu[t];e===void 0&&(e=new Int32Array(t),Yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function dv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ke(e,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),$e(e,n)}}function pv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ke(e,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),$e(e,n)}}function mv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ke(e,n))return;Ku.set(n),i.uniformMatrix4fv(this.addr,!1,Ku),$e(e,n)}}function gv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function _v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function Mv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function Sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function wv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xu.compareFunction=Gh,r=Xu):r=id,e.setTexture2D(t||r,s)}function Ev(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rd,s)}function Tv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||od,s)}function Av(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sd,s)}function Cv(i){switch(i){case 5126:return lv;case 35664:return uv;case 35665:return fv;case 35666:return hv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return _v;case 5125:return Mv;case 36294:return yv;case 36295:return Sv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Av}}function Rv(i,t){i.uniform1fv(this.addr,t)}function Pv(i,t){const e=nr(t,this.size,2);i.uniform2fv(this.addr,e)}function Lv(i,t){const e=nr(t,this.size,3);i.uniform3fv(this.addr,e)}function Iv(i,t){const e=nr(t,this.size,4);i.uniform4fv(this.addr,e)}function Dv(i,t){const e=nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zv(i,t){const e=nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nv(i,t){const e=nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Uv(i,t){i.uniform1iv(this.addr,t)}function Fv(i,t){i.uniform2iv(this.addr,t)}function Ov(i,t){i.uniform3iv(this.addr,t)}function kv(i,t){i.uniform4iv(this.addr,t)}function Bv(i,t){i.uniform1uiv(this.addr,t)}function Hv(i,t){i.uniform2uiv(this.addr,t)}function Gv(i,t){i.uniform3uiv(this.addr,t)}function Vv(i,t){i.uniform4uiv(this.addr,t)}function Wv(i,t,e){const n=this.cache,s=t.length,r=oa(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||id,r[o])}function Xv(i,t,e){const n=this.cache,s=t.length,r=oa(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rd,r[o])}function qv(i,t,e){const n=this.cache,s=t.length,r=oa(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||od,r[o])}function Yv(i,t,e){const n=this.cache,s=t.length,r=oa(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sd,r[o])}function Kv(i){switch(i){case 5126:return Rv;case 35664:return Pv;case 35665:return Lv;case 35666:return Iv;case 35674:return Dv;case 35675:return zv;case 35676:return Nv;case 5124:case 35670:return Uv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return kv;case 5125:return Bv;case 36294:return Hv;case 36295:return Gv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}class $v{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cv(e.type)}}class jv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kv(e.type)}}class Zv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Zu(i,t){i.seq.push(t),i.map[t.id]=t}function Jv(i,t,e){const n=i.name,s=n.length;for(Xa.lastIndex=0;;){const r=Xa.exec(n),o=Xa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zu(e,l===void 0?new $v(a,i,t):new jv(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Zv(a),Zu(e,f)),e=f}}}class Oo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Jv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ju(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qv=37297;let t_=0;function e_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qu=new fe;function n_(i){Me._getMatrix(Qu,Me.workingColorSpace,i);const t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case ra:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+e_(i.getShaderSource(t),o)}else return s}function i_(i,t){const e=n_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function s_(i,t){let e;switch(t){case o0:e="Linear";break;case a0:e="Reinhard";break;case c0:e="Cineon";break;case l0:e="ACESFilmic";break;case f0:e="AgX";break;case Lh:e="Neutral";break;case u0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mo=new et;function r_(){Me.getLuminanceCoefficients(mo);const i=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function a_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function xr(i){return i!==""}function ef(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(i){return i.replace(l_,f_)}const u_=new Map;function f_(i,t){let e=de[t];if(e===void 0){const n=u_.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dl(e)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(i){return i.replace(h_,d_)}function d_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function p_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function m_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qs:case Ys:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function g_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function x_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case na:t="ENVMAP_BLENDING_MULTIPLY";break;case s0:t="ENVMAP_BLENDING_MIX";break;case r0:t="ENVMAP_BLENDING_ADD";break}return t}function v_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function __(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=p_(e),l=m_(e),u=g_(e),f=x_(e),d=v_(e),h=o_(e),g=a_(r),x=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?de.tonemapping_pars_fragment:"",e.toneMapping!==Ui?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,i_("linearToOutputTexel",e.outputColorSpace),r_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=dl(o),o=ef(o,e),o=nf(o,e),a=dl(a),a=ef(a,e),a=nf(a,e),o=sf(o),a=sf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+o,w=M+p+a,T=Ju(s,s.VERTEX_SHADER,_),b=Ju(s,s.FRAGMENT_SHADER,w);s.attachShader(x,T),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(C){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(T).trim(),X=s.getShaderInfoLog(b).trim();let ct=!0,st=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,b);else{const xt=tf(s,T,"vertex"),$=tf(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+xt+`
`+$)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(U===""||X==="")&&(st=!1);st&&(C.diagnostics={runnable:ct,programLog:z,vertexShader:{log:U,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(T),s.deleteShader(b),v=new Oo(s,x),S=c_(s,x)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Qv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=b,this}let M_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new S_(t),e.set(t,n)),n}}class S_{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}}function b_(i,t,e,n,s,r,o){const a=new qh,c=new y_,l=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,z,U){const X=z.fog,ct=U.geometry,st=S.isMeshStandardMaterial?z.environment:null,xt=(S.isMeshStandardMaterial?e:t).get(S.envMap||st),$=xt&&xt.mapping===ia?xt.image.height:null,W=g[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const D=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,K=D!==void 0?D.length:0;let Y=0;ct.morphAttributes.position!==void 0&&(Y=1),ct.morphAttributes.normal!==void 0&&(Y=2),ct.morphAttributes.color!==void 0&&(Y=3);let rt,V,Z,mt;if(W){const Lt=Yn[W];rt=Lt.vertexShader,V=Lt.fragmentShader}else rt=S.vertexShader,V=S.fragmentShader,c.update(S),Z=c.getVertexShaderID(S),mt=c.getFragmentShaderID(S);const H=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),lt=U.isInstancedMesh===!0,St=U.isBatchedMesh===!0,zt=!!S.map,J=!!S.matcap,vt=!!xt,k=!!S.aoMap,nt=!!S.lightMap,Bt=!!S.bumpMap,jt=!!S.normalMap,Ht=!!S.displacementMap,Kt=!!S.emissiveMap,Xt=!!S.metalnessMap,A=!!S.roughnessMap,R=S.anisotropy>0,Q=S.clearcoat>0,ut=S.dispersion>0,wt=S.iridescence>0,Et=S.sheen>0,Wt=S.transmission>0,Ft=R&&!!S.anisotropyMap,Nt=Q&&!!S.clearcoatMap,q=Q&&!!S.clearcoatNormalMap,G=Q&&!!S.clearcoatRoughnessMap,it=wt&&!!S.iridescenceMap,yt=wt&&!!S.iridescenceThicknessMap,ft=Et&&!!S.sheenColorMap,dt=Et&&!!S.sheenRoughnessMap,F=!!S.specularMap,at=!!S.specularColorMap,Tt=!!S.specularIntensityMap,O=Wt&&!!S.transmissionMap,ot=Wt&&!!S.thicknessMap,ht=!!S.gradientMap,_t=!!S.alphaMap,At=S.alphaTest>0,j=!!S.alphaHash,pt=!!S.extensions;let Rt=Ui;S.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Rt=i.toneMapping);const It={shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:V,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:St,batchingColor:St&&U._colorsTexture!==null,instancing:lt,instancingColor:lt&&U.instanceColor!==null,instancingMorph:lt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Qs,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:J,envMap:vt,envMapMode:vt&&xt.mapping,envMapCubeUVHeight:$,aoMap:k,lightMap:nt,bumpMap:Bt,normalMap:jt,displacementMap:d&&Ht,emissiveMap:Kt,normalMapObjectSpace:jt&&S.normalMapType===m0,normalMapTangentSpace:jt&&S.normalMapType===sa,metalnessMap:Xt,roughnessMap:A,anisotropy:R,anisotropyMap:Ft,clearcoat:Q,clearcoatMap:Nt,clearcoatNormalMap:q,clearcoatRoughnessMap:G,dispersion:ut,iridescence:wt,iridescenceMap:it,iridescenceThicknessMap:yt,sheen:Et,sheenColorMap:ft,sheenRoughnessMap:dt,specularMap:F,specularColorMap:at,specularIntensityMap:Tt,transmission:Wt,transmissionMap:O,thicknessMap:ot,gradientMap:ht,opaque:S.transparent===!1&&S.blending===ks&&S.alphaToCoverage===!1,alphaMap:_t,alphaTest:At,alphaHash:j,combine:S.combine,mapUv:zt&&x(S.map.channel),aoMapUv:k&&x(S.aoMap.channel),lightMapUv:nt&&x(S.lightMap.channel),bumpMapUv:Bt&&x(S.bumpMap.channel),normalMapUv:jt&&x(S.normalMap.channel),displacementMapUv:Ht&&x(S.displacementMap.channel),emissiveMapUv:Kt&&x(S.emissiveMap.channel),metalnessMapUv:Xt&&x(S.metalnessMap.channel),roughnessMapUv:A&&x(S.roughnessMap.channel),anisotropyMapUv:Ft&&x(S.anisotropyMap.channel),clearcoatMapUv:Nt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:q&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(S.sheenRoughnessMap.channel),specularMapUv:F&&x(S.specularMap.channel),specularColorMapUv:at&&x(S.specularColorMap.channel),specularIntensityMapUv:Tt&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:ot&&x(S.thicknessMap.channel),alphaMapUv:_t&&x(S.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(jt||R),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!ct.attributes.uv&&(zt||_t),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:tt,skinning:U.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Y,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&Me.getTransfer(S.map.colorSpace)===we,decodeVideoTextureEmissive:Kt&&S.emissiveMap.isVideoTexture===!0&&Me.getTransfer(S.emissiveMap.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&S.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(y,S),_(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function w(S){const y=g[S.type];let C;if(y){const z=Yn[y];C=om.clone(z.uniforms)}else C=S.uniforms;return C}function T(S,y){let C;for(let z=0,U=u.length;z<U;z++){const X=u[z];if(X.cacheKey===y){C=X,++C.usedTimes;break}}return C===void 0&&(C=new __(i,y,S,r),u.push(C)),C}function b(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function E(S){c.remove(S)}function v(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:v}}function w_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function E_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function of(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function af(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,h,g,x,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,d,h,g,x,m){const p=o(f,d,h,g,x,m);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):e.push(p)}function c(f,d,h,g,x,m){const p=o(f,d,h,g,x,m);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,d){e.length>1&&e.sort(f||E_),n.length>1&&n.sort(d||of),s.length>1&&s.sort(d||of)}function u(){for(let f=t,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function T_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new af,i.set(n,[o])):s>=r.length?(o=new af,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function A_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new ce};break;case"SpotLight":e={position:new et,direction:new et,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new et,halfWidth:new et,halfHeight:new et};break}return i[t.id]=e,e}}}function C_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let R_=0;function P_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L_(i){const t=new A_,e=C_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new et);const s=new et,r=new ye,o=new ye;function a(l){let u=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,M=0,_=0,w=0,T=0,b=0,E=0;l.sort(P_);for(let S=0,y=l.length;S<y;S++){const C=l[S],z=C.color,U=C.intensity,X=C.distance,ct=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*U,f+=z.g*U,d+=z.b*U;else if(C.isLightProbe){for(let st=0;st<9;st++)n.probe[st].addScaledVector(C.sh.coefficients[st],U);E++}else if(C.isDirectionalLight){const st=t.get(C);if(st.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const xt=C.shadow,$=e.get(C);$.shadowIntensity=xt.intensity,$.shadowBias=xt.bias,$.shadowNormalBias=xt.normalBias,$.shadowRadius=xt.radius,$.shadowMapSize=xt.mapSize,n.directionalShadow[h]=$,n.directionalShadowMap[h]=ct,n.directionalShadowMatrix[h]=C.shadow.matrix,M++}n.directional[h]=st,h++}else if(C.isSpotLight){const st=t.get(C);st.position.setFromMatrixPosition(C.matrixWorld),st.color.copy(z).multiplyScalar(U),st.distance=X,st.coneCos=Math.cos(C.angle),st.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),st.decay=C.decay,n.spot[x]=st;const xt=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,xt.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[x]=xt.matrix,C.castShadow){const $=e.get(C);$.shadowIntensity=xt.intensity,$.shadowBias=xt.bias,$.shadowNormalBias=xt.normalBias,$.shadowRadius=xt.radius,$.shadowMapSize=xt.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=ct,w++}x++}else if(C.isRectAreaLight){const st=t.get(C);st.color.copy(z).multiplyScalar(U),st.halfWidth.set(C.width*.5,0,0),st.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=st,m++}else if(C.isPointLight){const st=t.get(C);if(st.color.copy(C.color).multiplyScalar(C.intensity),st.distance=C.distance,st.decay=C.decay,C.castShadow){const xt=C.shadow,$=e.get(C);$.shadowIntensity=xt.intensity,$.shadowBias=xt.bias,$.shadowNormalBias=xt.normalBias,$.shadowRadius=xt.radius,$.shadowMapSize=xt.mapSize,$.shadowCameraNear=xt.camera.near,$.shadowCameraFar=xt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=ct,n.pointShadowMatrix[g]=C.shadow.matrix,_++}n.point[g]=st,g++}else if(C.isHemisphereLight){const st=t.get(C);st.skyColor.copy(C.color).multiplyScalar(U),st.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[p]=st,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$t.LTC_FLOAT_1,n.rectAreaLTC2=$t.LTC_FLOAT_2):(n.rectAreaLTC1=$t.LTC_HALF_1,n.rectAreaLTC2=$t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==h||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==M||v.numPointShadows!==_||v.numSpotShadows!==w||v.numSpotMaps!==T||v.numLightProbes!==E)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=w+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,v.directionalLength=h,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=M,v.numPointShadows=_,v.numSpotShadows=w,v.numSpotMaps=T,v.numLightProbes=E,n.version=R_++)}function c(l,u){let f=0,d=0,h=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const _=l[p];if(_.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(_.isSpotLight){const w=n.spot[h];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(_.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function cf(i){const t=new L_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function I_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cf(i),t.set(s,[a])):r>=o.length?(a=new cf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class D_ extends hs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z_ extends hs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const N_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
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
}`;function F_(i,t,e){let n=new Ll;const s=new Jt,r=new Jt,o=new Ie,a=new D_({depthPacking:p0}),c=new z_,l={},u=e.maxTextureSize,f={[ki]:mn,[mn]:ki,[yn]:yn},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:N_,fragmentShader:U_}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new De(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl;let p=this.type;this.render=function(b,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ni),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const U=p!==ai&&this.type===ai,X=p===ai&&this.type!==ai;for(let ct=0,st=b.length;ct<st;ct++){const xt=b[ct],$=xt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",xt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const W=$.getFrameExtents();if(s.multiply(W),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,$.mapSize.y=r.y)),$.map===null||U===!0||X===!0){const K=this.type!==ai?{minFilter:En,magFilter:En}:{};$.map!==null&&$.map.dispose(),$.map=new ls(s.x,s.y,K),$.map.texture.name=xt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const D=$.getViewportCount();for(let K=0;K<D;K++){const Y=$.getViewport(K);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),z.viewport(o),$.updateMatrices(xt,K),n=$.getFrustum(),w(E,v,$.camera,xt,this.type)}$.isPointLightShadow!==!0&&this.type===ai&&M($,v),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,C)};function M(b,E){const v=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ls(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,v,d,x,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,v,h,x,null)}function _(b,E,v,S){let y=null;const C=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=v.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=y.uuid,U=E.uuid;let X=l[z];X===void 0&&(X={},l[z]=X);let ct=X[U];ct===void 0&&(ct=y.clone(),X[U]=ct,E.addEventListener("dispose",T)),y=ct}if(y.visible=E.visible,y.wireframe=E.wireframe,S===ai?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,v.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=v}return y}function w(b,E,v,S,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===ai)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const U=t.update(b),X=b.material;if(Array.isArray(X)){const ct=U.groups;for(let st=0,xt=ct.length;st<xt;st++){const $=ct[st],W=X[$.materialIndex];if(W&&W.visible){const D=_(b,W,S,y);b.onBeforeShadow(i,b,E,v,U,D,$),i.renderBufferDirect(v,null,U,D,b,$),b.onAfterShadow(i,b,E,v,U,D,$)}}}else if(X.visible){const ct=_(b,X,S,y);b.onBeforeShadow(i,b,E,v,U,ct,null),i.renderBufferDirect(v,null,U,ct,b,null),b.onAfterShadow(i,b,E,v,U,ct,null)}}const z=b.children;for(let U=0,X=z.length;U<X;U++)w(z[U],E,v,S,y)}function T(b){b.target.removeEventListener("dispose",T);for(const v in l){const S=l[v],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const O_={[Lc]:Ic,[Dc]:Uc,[zc]:Fc,[Xs]:Nc,[Ic]:Lc,[Uc]:Dc,[Fc]:zc,[Nc]:Xs};function k_(i,t){function e(){let O=!1;const ot=new Ie;let ht=null;const _t=new Ie(0,0,0,0);return{setMask:function(At){ht!==At&&!O&&(i.colorMask(At,At,At,At),ht=At)},setLocked:function(At){O=At},setClear:function(At,j,pt,Rt,It){It===!0&&(At*=Rt,j*=Rt,pt*=Rt),ot.set(At,j,pt,Rt),_t.equals(ot)===!1&&(i.clearColor(At,j,pt,Rt),_t.copy(ot))},reset:function(){O=!1,ht=null,_t.set(-1,0,0,0)}}}function n(){let O=!1,ot=!1,ht=null,_t=null,At=null;return{setReversed:function(j){if(ot!==j){const pt=t.get("EXT_clip_control");ot?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Rt=At;At=null,this.setClear(Rt)}ot=j},getReversed:function(){return ot},setTest:function(j){j?H(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(j){ht!==j&&!O&&(i.depthMask(j),ht=j)},setFunc:function(j){if(ot&&(j=O_[j]),_t!==j){switch(j){case Lc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Dc:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case zc:i.depthFunc(i.EQUAL);break;case Nc:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=j}},setLocked:function(j){O=j},setClear:function(j){At!==j&&(ot&&(j=1-j),i.clearDepth(j),At=j)},reset:function(){O=!1,ht=null,_t=null,At=null,ot=!1}}}function s(){let O=!1,ot=null,ht=null,_t=null,At=null,j=null,pt=null,Rt=null,It=null;return{setTest:function(Lt){O||(Lt?H(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(Lt){ot!==Lt&&!O&&(i.stencilMask(Lt),ot=Lt)},setFunc:function(Lt,qt,Yt){(ht!==Lt||_t!==qt||At!==Yt)&&(i.stencilFunc(Lt,qt,Yt),ht=Lt,_t=qt,At=Yt)},setOp:function(Lt,qt,Yt){(j!==Lt||pt!==qt||Rt!==Yt)&&(i.stencilOp(Lt,qt,Yt),j=Lt,pt=qt,Rt=Yt)},setLocked:function(Lt){O=Lt},setClear:function(Lt){It!==Lt&&(i.clearStencil(Lt),It=Lt)},reset:function(){O=!1,ot=null,ht=null,_t=null,At=null,j=null,pt=null,Rt=null,It=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,_=null,w=null,T=null,b=null,E=new ce(0,0,0),v=0,S=!1,y=null,C=null,z=null,U=null,X=null;const ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,xt=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec($)[1]),st=xt>=1):$.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),st=xt>=2);let W=null,D={};const K=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),rt=new Ie().fromArray(K),V=new Ie().fromArray(Y);function Z(O,ot,ht,_t){const At=new Uint8Array(4),j=i.createTexture();i.bindTexture(O,j),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<ht;pt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(ot+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return j}const mt={};mt[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(Xs),Bt(!1),jt(uu),H(i.CULL_FACE),k(Ni);function H(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function tt(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function lt(O,ot){return f[O]!==ot?(i.bindFramebuffer(O,ot),f[O]=ot,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ot),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function St(O,ot){let ht=h,_t=!1;if(O){ht=d.get(ot),ht===void 0&&(ht=[],d.set(ot,ht));const At=O.textures;if(ht.length!==At.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let j=0,pt=At.length;j<pt;j++)ht[j]=i.COLOR_ATTACHMENT0+j;ht.length=At.length,_t=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,_t=!0);_t&&i.drawBuffers(ht)}function zt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const J={[zi]:i.FUNC_ADD,[Gp]:i.FUNC_SUBTRACT,[Vp]:i.FUNC_REVERSE_SUBTRACT};J[Wp]=i.MIN,J[Xp]=i.MAX;const vt={[qp]:i.ZERO,[Rc]:i.ONE,[Yp]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[Qp]:i.SRC_ALPHA_SATURATE,[Zp]:i.DST_COLOR,[$p]:i.DST_ALPHA,[Kp]:i.ONE_MINUS_SRC_COLOR,[Pr]:i.ONE_MINUS_SRC_ALPHA,[Jp]:i.ONE_MINUS_DST_COLOR,[jp]:i.ONE_MINUS_DST_ALPHA,[t0]:i.CONSTANT_COLOR,[e0]:i.ONE_MINUS_CONSTANT_COLOR,[n0]:i.CONSTANT_ALPHA,[i0]:i.ONE_MINUS_CONSTANT_ALPHA};function k(O,ot,ht,_t,At,j,pt,Rt,It,Lt){if(O===Ni){x===!0&&(tt(i.BLEND),x=!1);return}if(x===!1&&(H(i.BLEND),x=!0),O!==Ph){if(O!==m||Lt!==S){if((p!==zi||w!==zi)&&(i.blendEquation(i.FUNC_ADD),p=zi,w=zi),Lt)switch(O){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fu:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,_=null,T=null,b=null,E.set(0,0,0),v=0,m=O,S=Lt}return}At=At||ot,j=j||ht,pt=pt||_t,(ot!==p||At!==w)&&(i.blendEquationSeparate(J[ot],J[At]),p=ot,w=At),(ht!==M||_t!==_||j!==T||pt!==b)&&(i.blendFuncSeparate(vt[ht],vt[_t],vt[j],vt[pt]),M=ht,_=_t,T=j,b=pt),(Rt.equals(E)===!1||It!==v)&&(i.blendColor(Rt.r,Rt.g,Rt.b,It),E.copy(Rt),v=It),m=O,S=!1}function nt(O,ot){O.side===yn?tt(i.CULL_FACE):H(i.CULL_FACE);let ht=O.side===mn;ot&&(ht=!ht),Bt(ht),O.blending===ks&&O.transparent===!1?k(Ni):k(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const _t=O.stencilWrite;a.setTest(_t),_t&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Kt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function jt(O){O!==kp?(H(i.CULL_FACE),O!==C&&(O===uu?i.cullFace(i.BACK):O===Bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),C=O}function Ht(O){O!==z&&(st&&i.lineWidth(O),z=O)}function Kt(O,ot,ht){O?(H(i.POLYGON_OFFSET_FILL),(U!==ot||X!==ht)&&(i.polygonOffset(ot,ht),U=ot,X=ht)):tt(i.POLYGON_OFFSET_FILL)}function Xt(O){O?H(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+ct-1),W!==O&&(i.activeTexture(O),W=O)}function R(O,ot,ht){ht===void 0&&(W===null?ht=i.TEXTURE0+ct-1:ht=W);let _t=D[ht];_t===void 0&&(_t={type:void 0,texture:void 0},D[ht]=_t),(_t.type!==O||_t.texture!==ot)&&(W!==ht&&(i.activeTexture(ht),W=ht),i.bindTexture(O,ot||mt[O]),_t.type=O,_t.texture=ot)}function Q(){const O=D[W];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ut(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Wt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(O){rt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),rt.copy(O))}function dt(O){V.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),V.copy(O))}function F(O,ot){let ht=l.get(ot);ht===void 0&&(ht=new WeakMap,l.set(ot,ht));let _t=ht.get(O);_t===void 0&&(_t=i.getUniformBlockIndex(ot,O.name),ht.set(O,_t))}function at(O,ot){const _t=l.get(ot).get(O);c.get(ot)!==_t&&(i.uniformBlockBinding(ot,_t,O.__bindingPointIndex),c.set(ot,_t))}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},W=null,D={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,_=null,w=null,T=null,b=null,E=new ce(0,0,0),v=0,S=!1,y=null,C=null,z=null,U=null,X=null,rt.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:tt,bindFramebuffer:lt,drawBuffers:St,useProgram:zt,setBlending:k,setMaterial:nt,setFlipSided:Bt,setCullFace:jt,setLineWidth:Ht,setPolygonOffset:Kt,setScissorTest:Xt,activeTexture:A,bindTexture:R,unbindTexture:Q,compressedTexImage2D:ut,compressedTexImage3D:wt,texImage2D:it,texImage3D:yt,updateUBOMapping:F,uniformBlockBinding:at,texStorage2D:q,texStorage3D:G,texSubImage2D:Et,texSubImage3D:Wt,compressedTexSubImage2D:Ft,compressedTexSubImage3D:Nt,scissor:ft,viewport:dt,reset:Tt}}function lf(i,t,e,n){const s=B_(n);switch(e){case Uh:return i*t;case Oh:return i*t;case kh:return i*t*2;case Tl:return i*t/s.components*s.byteLength;case Al:return i*t/s.components*s.byteLength;case Bh:return i*t*2/s.components*s.byteLength;case Cl:return i*t*2/s.components*s.byteLength;case Fh:return i*t*3/s.components*s.byteLength;case Dn:return i*t*4/s.components*s.byteLength;case Rl:return i*t*4/s.components*s.byteLength;case Do:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gc:case Wc:return Math.max(i,16)*Math.max(t,8)/4;case Hc:case Vc:return Math.max(i,8)*Math.max(t,8)/2;case Xc:case qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fo:case cl:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Hh:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fl:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B_(i){switch(i){case Jn:case Dh:return{byteLength:1,components:1};case Lr:case zh:case Fr:return{byteLength:2,components:1};case wl:case El:return{byteLength:2,components:4};case cs:case bl:case jn:return{byteLength:4,components:1};case Nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function H_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Jt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,R){return h?new OffscreenCanvas(A,R):Ko("canvas")}function x(A,R,Q){let ut=1;const wt=Xt(A);if((wt.width>Q||wt.height>Q)&&(ut=Q/Math.max(wt.width,wt.height)),ut<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Et=Math.floor(ut*wt.width),Wt=Math.floor(ut*wt.height);f===void 0&&(f=g(Et,Wt));const Ft=R?g(Et,Wt):f;return Ft.width=Et,Ft.height=Wt,Ft.getContext("2d").drawImage(A,0,0,Et,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+Et+"x"+Wt+")."),Ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,R,Q,ut,wt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Et=R;if(R===i.RED&&(Q===i.FLOAT&&(Et=i.R32F),Q===i.HALF_FLOAT&&(Et=i.R16F),Q===i.UNSIGNED_BYTE&&(Et=i.R8)),R===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Et=i.R8UI),Q===i.UNSIGNED_SHORT&&(Et=i.R16UI),Q===i.UNSIGNED_INT&&(Et=i.R32UI),Q===i.BYTE&&(Et=i.R8I),Q===i.SHORT&&(Et=i.R16I),Q===i.INT&&(Et=i.R32I)),R===i.RG&&(Q===i.FLOAT&&(Et=i.RG32F),Q===i.HALF_FLOAT&&(Et=i.RG16F),Q===i.UNSIGNED_BYTE&&(Et=i.RG8)),R===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Et=i.RG8UI),Q===i.UNSIGNED_SHORT&&(Et=i.RG16UI),Q===i.UNSIGNED_INT&&(Et=i.RG32UI),Q===i.BYTE&&(Et=i.RG8I),Q===i.SHORT&&(Et=i.RG16I),Q===i.INT&&(Et=i.RG32I)),R===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Et=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(Et=i.RGB16UI),Q===i.UNSIGNED_INT&&(Et=i.RGB32UI),Q===i.BYTE&&(Et=i.RGB8I),Q===i.SHORT&&(Et=i.RGB16I),Q===i.INT&&(Et=i.RGB32I)),R===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Et=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(Et=i.RGBA16UI),Q===i.UNSIGNED_INT&&(Et=i.RGBA32UI),Q===i.BYTE&&(Et=i.RGBA8I),Q===i.SHORT&&(Et=i.RGBA16I),Q===i.INT&&(Et=i.RGBA32I)),R===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(Et=i.RGB9_E5),R===i.RGBA){const Wt=wt?ra:Me.getTransfer(ut);Q===i.FLOAT&&(Et=i.RGBA32F),Q===i.HALF_FLOAT&&(Et=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(Et=Wt===we?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(Et=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(Et=i.RGB5_A1)}return(Et===i.R16F||Et===i.R32F||Et===i.RG16F||Et===i.RG32F||Et===i.RGBA16F||Et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Et}function w(A,R){let Q;return A?R===null||R===cs||R===Ks?Q=i.DEPTH24_STENCIL8:R===jn?Q=i.DEPTH32F_STENCIL8:R===Lr&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===cs||R===Ks?Q=i.DEPTH_COMPONENT24:R===jn?Q=i.DEPTH_COMPONENT32F:R===Lr&&(Q=i.DEPTH_COMPONENT16),Q}function T(A,R){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==En&&A.minFilter!==wn?Math.log2(Math.max(R.width,R.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?R.mipmaps.length:1}function b(A){const R=A.target;R.removeEventListener("dispose",b),v(R),R.isVideoTexture&&u.delete(R)}function E(A){const R=A.target;R.removeEventListener("dispose",E),y(R)}function v(A){const R=n.get(A);if(R.__webglInit===void 0)return;const Q=A.source,ut=d.get(Q);if(ut){const wt=ut[R.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&S(A),Object.keys(ut).length===0&&d.delete(Q)}n.remove(A)}function S(A){const R=n.get(A);i.deleteTexture(R.__webglTexture);const Q=A.source,ut=d.get(Q);delete ut[R.__cacheKey],o.memory.textures--}function y(A){const R=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(R.__webglFramebuffer[ut]))for(let wt=0;wt<R.__webglFramebuffer[ut].length;wt++)i.deleteFramebuffer(R.__webglFramebuffer[ut][wt]);else i.deleteFramebuffer(R.__webglFramebuffer[ut]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[ut])}else{if(Array.isArray(R.__webglFramebuffer))for(let ut=0;ut<R.__webglFramebuffer.length;ut++)i.deleteFramebuffer(R.__webglFramebuffer[ut]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ut=0;ut<R.__webglColorRenderbuffer.length;ut++)R.__webglColorRenderbuffer[ut]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[ut]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Q=A.textures;for(let ut=0,wt=Q.length;ut<wt;ut++){const Et=n.get(Q[ut]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(Q[ut])}n.remove(A)}let C=0;function z(){C=0}function U(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function X(A){const R=[];return R.push(A.wrapS),R.push(A.wrapT),R.push(A.wrapR||0),R.push(A.magFilter),R.push(A.minFilter),R.push(A.anisotropy),R.push(A.internalFormat),R.push(A.format),R.push(A.type),R.push(A.generateMipmaps),R.push(A.premultiplyAlpha),R.push(A.flipY),R.push(A.unpackAlignment),R.push(A.colorSpace),R.join()}function ct(A,R){const Q=n.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.version>0&&Q.__version!==A.version){const ut=A.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(Q,A,R);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+R)}function st(A,R){const Q=n.get(A);if(A.version>0&&Q.__version!==A.version){V(Q,A,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+R)}function xt(A,R){const Q=n.get(A);if(A.version>0&&Q.__version!==A.version){V(Q,A,R);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+R)}function $(A,R){const Q=n.get(A);if(A.version>0&&Q.__version!==A.version){Z(Q,A,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+R)}const W={[qo]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[Bc]:i.MIRRORED_REPEAT},D={[En]:i.NEAREST,[h0]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[_a]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},K={[g0]:i.NEVER,[S0]:i.ALWAYS,[x0]:i.LESS,[Gh]:i.LEQUAL,[v0]:i.EQUAL,[y0]:i.GEQUAL,[_0]:i.GREATER,[M0]:i.NOTEQUAL};function Y(A,R){if(R.type===jn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===wn||R.magFilter===_a||R.magFilter===Kr||R.magFilter===rs||R.minFilter===wn||R.minFilter===_a||R.minFilter===Kr||R.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,W[R.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,W[R.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,W[R.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,D[R.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,D[R.minFilter]),R.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,K[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===En||R.minFilter!==Kr&&R.minFilter!==rs||R.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function rt(A,R){let Q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,R.addEventListener("dispose",b));const ut=R.source;let wt=d.get(ut);wt===void 0&&(wt={},d.set(ut,wt));const Et=X(R);if(Et!==A.__cacheKey){wt[Et]===void 0&&(wt[Et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),wt[Et].usedTimes++;const Wt=wt[A.__cacheKey];Wt!==void 0&&(wt[A.__cacheKey].usedTimes--,Wt.usedTimes===0&&S(R)),A.__cacheKey=Et,A.__webglTexture=wt[Et].texture}return Q}function V(A,R,Q){let ut=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ut=i.TEXTURE_3D);const wt=rt(A,R),Et=R.source;e.bindTexture(ut,A.__webglTexture,i.TEXTURE0+Q);const Wt=n.get(Et);if(Et.version!==Wt.__version||wt===!0){e.activeTexture(i.TEXTURE0+Q);const Ft=Me.getPrimaries(Me.workingColorSpace),Nt=R.colorSpace===fi?null:Me.getPrimaries(R.colorSpace),q=R.colorSpace===fi||Ft===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let G=x(R.image,!1,s.maxTextureSize);G=Kt(R,G);const it=r.convert(R.format,R.colorSpace),yt=r.convert(R.type);let ft=_(R.internalFormat,it,yt,R.colorSpace,R.isVideoTexture);Y(ut,R);let dt;const F=R.mipmaps,at=R.isVideoTexture!==!0,Tt=Wt.__version===void 0||wt===!0,O=Et.dataReady,ot=T(R,G);if(R.isDepthTexture)ft=w(R.format===$s,R.type),Tt&&(at?e.texStorage2D(i.TEXTURE_2D,1,ft,G.width,G.height):e.texImage2D(i.TEXTURE_2D,0,ft,G.width,G.height,0,it,yt,null));else if(R.isDataTexture)if(F.length>0){at&&Tt&&e.texStorage2D(i.TEXTURE_2D,ot,ft,F[0].width,F[0].height);for(let ht=0,_t=F.length;ht<_t;ht++)dt=F[ht],at?O&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,dt.width,dt.height,it,yt,dt.data):e.texImage2D(i.TEXTURE_2D,ht,ft,dt.width,dt.height,0,it,yt,dt.data);R.generateMipmaps=!1}else at?(Tt&&e.texStorage2D(i.TEXTURE_2D,ot,ft,G.width,G.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,it,yt,G.data)):e.texImage2D(i.TEXTURE_2D,0,ft,G.width,G.height,0,it,yt,G.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){at&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ft,F[0].width,F[0].height,G.depth);for(let ht=0,_t=F.length;ht<_t;ht++)if(dt=F[ht],R.format!==Dn)if(it!==null)if(at){if(O)if(R.layerUpdates.size>0){const At=lf(dt.width,dt.height,R.format,R.type);for(const j of R.layerUpdates){const pt=dt.data.subarray(j*At/dt.data.BYTES_PER_ELEMENT,(j+1)*At/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,j,dt.width,dt.height,1,it,pt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,dt.width,dt.height,G.depth,it,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,ft,dt.width,dt.height,G.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,dt.width,dt.height,G.depth,it,yt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,ft,dt.width,dt.height,G.depth,0,it,yt,dt.data)}else{at&&Tt&&e.texStorage2D(i.TEXTURE_2D,ot,ft,F[0].width,F[0].height);for(let ht=0,_t=F.length;ht<_t;ht++)dt=F[ht],R.format!==Dn?it!==null?at?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,dt.width,dt.height,it,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,ft,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?O&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,dt.width,dt.height,it,yt,dt.data):e.texImage2D(i.TEXTURE_2D,ht,ft,dt.width,dt.height,0,it,yt,dt.data)}else if(R.isDataArrayTexture)if(at){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,ft,G.width,G.height,G.depth),O)if(R.layerUpdates.size>0){const ht=lf(G.width,G.height,R.format,R.type);for(const _t of R.layerUpdates){const At=G.data.subarray(_t*ht/G.data.BYTES_PER_ELEMENT,(_t+1)*ht/G.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,G.width,G.height,1,it,yt,At)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,it,yt,G.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,G.width,G.height,G.depth,0,it,yt,G.data);else if(R.isData3DTexture)at?(Tt&&e.texStorage3D(i.TEXTURE_3D,ot,ft,G.width,G.height,G.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,it,yt,G.data)):e.texImage3D(i.TEXTURE_3D,0,ft,G.width,G.height,G.depth,0,it,yt,G.data);else if(R.isFramebufferTexture){if(Tt)if(at)e.texStorage2D(i.TEXTURE_2D,ot,ft,G.width,G.height);else{let ht=G.width,_t=G.height;for(let At=0;At<ot;At++)e.texImage2D(i.TEXTURE_2D,At,ft,ht,_t,0,it,yt,null),ht>>=1,_t>>=1}}else if(F.length>0){if(at&&Tt){const ht=Xt(F[0]);e.texStorage2D(i.TEXTURE_2D,ot,ft,ht.width,ht.height)}for(let ht=0,_t=F.length;ht<_t;ht++)dt=F[ht],at?O&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,it,yt,dt):e.texImage2D(i.TEXTURE_2D,ht,ft,it,yt,dt);R.generateMipmaps=!1}else if(at){if(Tt){const ht=Xt(G);e.texStorage2D(i.TEXTURE_2D,ot,ft,ht.width,ht.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it,yt,G)}else e.texImage2D(i.TEXTURE_2D,0,ft,it,yt,G);m(R)&&p(ut),Wt.__version=Et.version,R.onUpdate&&R.onUpdate(R)}A.__version=R.version}function Z(A,R,Q){if(R.image.length!==6)return;const ut=rt(A,R),wt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+Q);const Et=n.get(wt);if(wt.version!==Et.__version||ut===!0){e.activeTexture(i.TEXTURE0+Q);const Wt=Me.getPrimaries(Me.workingColorSpace),Ft=R.colorSpace===fi?null:Me.getPrimaries(R.colorSpace),Nt=R.colorSpace===fi||Wt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const q=R.isCompressedTexture||R.image[0].isCompressedTexture,G=R.image[0]&&R.image[0].isDataTexture,it=[];for(let _t=0;_t<6;_t++)!q&&!G?it[_t]=x(R.image[_t],!0,s.maxCubemapSize):it[_t]=G?R.image[_t].image:R.image[_t],it[_t]=Kt(R,it[_t]);const yt=it[0],ft=r.convert(R.format,R.colorSpace),dt=r.convert(R.type),F=_(R.internalFormat,ft,dt,R.colorSpace),at=R.isVideoTexture!==!0,Tt=Et.__version===void 0||ut===!0,O=wt.dataReady;let ot=T(R,yt);Y(i.TEXTURE_CUBE_MAP,R);let ht;if(q){at&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,F,yt.width,yt.height);for(let _t=0;_t<6;_t++){ht=it[_t].mipmaps;for(let At=0;At<ht.length;At++){const j=ht[At];R.format!==Dn?ft!==null?at?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,j.width,j.height,ft,j.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,F,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,j.width,j.height,ft,dt,j.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,F,j.width,j.height,0,ft,dt,j.data)}}}else{if(ht=R.mipmaps,at&&Tt){ht.length>0&&ot++;const _t=Xt(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,F,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(G){at?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,it[_t].width,it[_t].height,ft,dt,it[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,F,it[_t].width,it[_t].height,0,ft,dt,it[_t].data);for(let At=0;At<ht.length;At++){const pt=ht[At].image[_t].image;at?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,pt.width,pt.height,ft,dt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,F,pt.width,pt.height,0,ft,dt,pt.data)}}else{at?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ft,dt,it[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,F,ft,dt,it[_t]);for(let At=0;At<ht.length;At++){const j=ht[At];at?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,ft,dt,j.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,F,ft,dt,j.image[_t])}}}m(R)&&p(i.TEXTURE_CUBE_MAP),Et.__version=wt.version,R.onUpdate&&R.onUpdate(R)}A.__version=R.version}function mt(A,R,Q,ut,wt,Et){const Wt=r.convert(Q.format,Q.colorSpace),Ft=r.convert(Q.type),Nt=_(Q.internalFormat,Wt,Ft,Q.colorSpace),q=n.get(R),G=n.get(Q);if(G.__renderTarget=R,!q.__hasExternalTextures){const it=Math.max(1,R.width>>Et),yt=Math.max(1,R.height>>Et);wt===i.TEXTURE_3D||wt===i.TEXTURE_2D_ARRAY?e.texImage3D(wt,Et,Nt,it,yt,R.depth,0,Wt,Ft,null):e.texImage2D(wt,Et,Nt,it,yt,0,Wt,Ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),jt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,wt,G.__webglTexture,0,Bt(R)):(wt===i.TEXTURE_2D||wt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,wt,G.__webglTexture,Et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function H(A,R,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),R.depthBuffer){const ut=R.depthTexture,wt=ut&&ut.isDepthTexture?ut.type:null,Et=w(R.stencilBuffer,wt),Wt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=Bt(R);jt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,Et,R.width,R.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Et,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Et,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Wt,i.RENDERBUFFER,A)}else{const ut=R.textures;for(let wt=0;wt<ut.length;wt++){const Et=ut[wt],Wt=r.convert(Et.format,Et.colorSpace),Ft=r.convert(Et.type),Nt=_(Et.internalFormat,Wt,Ft,Et.colorSpace),q=Bt(R);Q&&jt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,Nt,R.width,R.height):jt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,Nt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(A,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=n.get(R.depthTexture);ut.__renderTarget=R,(!ut.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ct(R.depthTexture,0);const wt=ut.__webglTexture,Et=Bt(R);if(R.depthTexture.format===Bs)jt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,wt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,wt,0);else if(R.depthTexture.format===$s)jt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,wt,0,Et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,wt,0);else throw new Error("Unknown depthTexture format")}function lt(A){const R=n.get(A),Q=A.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==A.depthTexture){const ut=A.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ut){const wt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ut.removeEventListener("dispose",wt)};ut.addEventListener("dispose",wt),R.__depthDisposeCallback=wt}R.__boundDepthTexture=ut}if(A.depthTexture&&!R.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");tt(R.__webglFramebuffer,A)}else if(Q){R.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[ut]),R.__webglDepthbuffer[ut]===void 0)R.__webglDepthbuffer[ut]=i.createRenderbuffer(),H(R.__webglDepthbuffer[ut],A,!1);else{const wt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=R.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,Et),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,Et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),H(R.__webglDepthbuffer,A,!1);else{const ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,wt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,wt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(A,R,Q){const ut=n.get(A);R!==void 0&&mt(ut.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&lt(A)}function zt(A){const R=A.texture,Q=n.get(A),ut=n.get(R);A.addEventListener("dispose",E);const wt=A.textures,Et=A.isWebGLCubeRenderTarget===!0,Wt=wt.length>1;if(Wt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=R.version,o.memory.textures++),Et){Q.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer[Ft]=[];for(let Nt=0;Nt<R.mipmaps.length;Nt++)Q.__webglFramebuffer[Ft][Nt]=i.createFramebuffer()}else Q.__webglFramebuffer[Ft]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ft=0;Ft<R.mipmaps.length;Ft++)Q.__webglFramebuffer[Ft]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Wt)for(let Ft=0,Nt=wt.length;Ft<Nt;Ft++){const q=n.get(wt[Ft]);q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&jt(A)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ft=0;Ft<wt.length;Ft++){const Nt=wt[Ft];Q.__webglColorRenderbuffer[Ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ft]);const q=r.convert(Nt.format,Nt.colorSpace),G=r.convert(Nt.type),it=_(Nt.internalFormat,q,G,Nt.colorSpace,A.isXRRenderTarget===!0),yt=Bt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,it,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),H(Q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Et){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Y(i.TEXTURE_CUBE_MAP,R);for(let Ft=0;Ft<6;Ft++)if(R.mipmaps&&R.mipmaps.length>0)for(let Nt=0;Nt<R.mipmaps.length;Nt++)mt(Q.__webglFramebuffer[Ft][Nt],A,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Nt);else mt(Q.__webglFramebuffer[Ft],A,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);m(R)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Wt){for(let Ft=0,Nt=wt.length;Ft<Nt;Ft++){const q=wt[Ft],G=n.get(q);e.bindTexture(i.TEXTURE_2D,G.__webglTexture),Y(i.TEXTURE_2D,q),mt(Q.__webglFramebuffer,A,q,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,0),m(q)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Ft=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ft,ut.__webglTexture),Y(Ft,R),R.mipmaps&&R.mipmaps.length>0)for(let Nt=0;Nt<R.mipmaps.length;Nt++)mt(Q.__webglFramebuffer[Nt],A,R,i.COLOR_ATTACHMENT0,Ft,Nt);else mt(Q.__webglFramebuffer,A,R,i.COLOR_ATTACHMENT0,Ft,0);m(R)&&p(Ft),e.unbindTexture()}A.depthBuffer&&lt(A)}function J(A){const R=A.textures;for(let Q=0,ut=R.length;Q<ut;Q++){const wt=R[Q];if(m(wt)){const Et=M(A),Wt=n.get(wt).__webglTexture;e.bindTexture(Et,Wt),p(Et),e.unbindTexture()}}}const vt=[],k=[];function nt(A){if(A.samples>0){if(jt(A)===!1){const R=A.textures,Q=A.width,ut=A.height;let wt=i.COLOR_BUFFER_BIT;const Et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Wt=n.get(A),Ft=R.length>1;if(Ft)for(let Nt=0;Nt<R.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Nt=0;Nt<R.length;Nt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(wt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(wt|=i.STENCIL_BUFFER_BIT)),Ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[Nt]);const q=n.get(R[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,Q,ut,0,0,Q,ut,wt,i.NEAREST),c===!0&&(vt.length=0,k.length=0,vt.push(i.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(Et),k.push(Et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ft)for(let Nt=0;Nt<R.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[Nt]);const q=n.get(R[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const R=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function Bt(A){return Math.min(s.maxSamples,A.samples)}function jt(A){const R=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ht(A){const R=o.render.frame;u.get(A)!==R&&(u.set(A,R),A.update())}function Kt(A,R){const Q=A.colorSpace,ut=A.format,wt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||Q!==Qs&&Q!==fi&&(Me.getTransfer(Q)===we?(ut!==Dn||wt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),R}function Xt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.setTexture2D=ct,this.setTexture2DArray=st,this.setTexture3D=xt,this.setTextureCube=$,this.rebindTextures=St,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=jt}function G_(i,t){function e(n,s=fi){let r;const o=Me.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dh)return i.BYTE;if(n===zh)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===cs)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Fh)return i.RGB;if(n===Dn)return i.RGBA;if(n===Oh)return i.LUMINANCE;if(n===kh)return i.LUMINANCE_ALPHA;if(n===Bs)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===Tl)return i.RED;if(n===Al)return i.RED_INTEGER;if(n===Bh)return i.RG;if(n===Cl)return i.RG_INTEGER;if(n===Rl)return i.RGBA_INTEGER;if(n===Do||n===zo||n===No||n===Uo)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hc||n===Gc||n===Vc||n===Wc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===qc||n===Yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===qc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kc||n===$c||n===jc||n===Zc||n===Jc||n===Qc||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===cl||n===ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hh||n===ul||n===fl||n===hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class V_ extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class os extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new os;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q_=`
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

}`;class Y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ln,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:X_,fragmentShader:q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K_ extends tr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const x=new Y_,m=e.getContextAttributes();let p=null,M=null;const _=[],w=[],T=new Jt;let b=null;const E=new Mn;E.viewport=new Ie;const v=new Mn;v.viewport=new Ie;const S=[E,v],y=new V_;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=_[V];return Z===void 0&&(Z=new qa,_[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=_[V];return Z===void 0&&(Z=new qa,_[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=_[V];return Z===void 0&&(Z=new qa,_[V]=Z),Z.getHandSpace()};function U(V){const Z=w.indexOf(V.inputSource);if(Z===-1)return;const mt=_[Z];mt!==void 0&&(mt.update(V.inputSource,V.frame,l||o),mt.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ct);for(let V=0;V<_.length;V++){const Z=w[V];Z!==null&&(w[V]=null,_[V].disconnect(Z))}C=null,z=null,x.reset(),t.setRenderTarget(p),h=null,d=null,f=null,s=null,M=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ct),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new ls(h.framebufferWidth,h.framebufferHeight,{format:Dn,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,mt=null,H=null;m.depth&&(H=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?$s:Bs,mt=m.stencil?Ks:cs);const tt={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ls(d.textureWidth,d.textureHeight,{format:Dn,type:Jn,depthTexture:new nd(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ct(V){for(let Z=0;Z<V.removed.length;Z++){const mt=V.removed[Z],H=w.indexOf(mt);H>=0&&(w[H]=null,_[H].disconnect(mt))}for(let Z=0;Z<V.added.length;Z++){const mt=V.added[Z];let H=w.indexOf(mt);if(H===-1){for(let lt=0;lt<_.length;lt++)if(lt>=w.length){w.push(mt),H=lt;break}else if(w[lt]===null){w[lt]=mt,H=lt;break}if(H===-1)break}const tt=_[H];tt&&tt.connect(mt)}}const st=new et,xt=new et;function $(V,Z,mt){st.setFromMatrixPosition(Z.matrixWorld),xt.setFromMatrixPosition(mt.matrixWorld);const H=st.distanceTo(xt),tt=Z.projectionMatrix.elements,lt=mt.projectionMatrix.elements,St=tt[14]/(tt[10]-1),zt=tt[14]/(tt[10]+1),J=(tt[9]+1)/tt[5],vt=(tt[9]-1)/tt[5],k=(tt[8]-1)/tt[0],nt=(lt[8]+1)/lt[0],Bt=St*k,jt=St*nt,Ht=H/(-k+nt),Kt=Ht*-k;if(Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Kt),V.translateZ(Ht),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),tt[10]===-1)V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Xt=St+Ht,A=zt+Ht,R=Bt-Kt,Q=jt+(H-Kt),ut=J*zt/A*Xt,wt=vt*zt/A*Xt;V.projectionMatrix.makePerspective(R,Q,ut,wt,Xt,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function W(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Z=V.near,mt=V.far;x.texture!==null&&(x.depthNear>0&&(Z=x.depthNear),x.depthFar>0&&(mt=x.depthFar)),y.near=v.near=E.near=Z,y.far=v.far=E.far=mt,(C!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,z=y.far),E.layers.mask=V.layers.mask|2,v.layers.mask=V.layers.mask|4,y.layers.mask=E.layers.mask|v.layers.mask;const H=V.parent,tt=y.cameras;W(y,H);for(let lt=0;lt<tt.length;lt++)W(tt[lt],H);tt.length===2?$(y,E,v):y.projectionMatrix.copy(E.projectionMatrix),D(V,y,H)};function D(V,Z,mt){mt===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(mt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ir*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let K=null;function Y(V,Z){if(u=Z.getViewerPose(l||o),g=Z,u!==null){const mt=u.views;h!==null&&(t.setRenderTargetFramebuffer(M,h.framebuffer),t.setRenderTarget(M));let H=!1;mt.length!==y.cameras.length&&(y.cameras.length=0,H=!0);for(let lt=0;lt<mt.length;lt++){const St=mt[lt];let zt=null;if(h!==null)zt=h.getViewport(St);else{const vt=f.getViewSubImage(d,St);zt=vt.viewport,lt===0&&(t.setRenderTargetTextures(M,vt.colorTexture,d.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(M))}let J=S[lt];J===void 0&&(J=new Mn,J.layers.enable(lt),J.viewport=new Ie,S[lt]=J),J.matrix.fromArray(St.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(St.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(zt.x,zt.y,zt.width,zt.height),lt===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),H===!0&&y.cameras.push(J)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const lt=f.getDepthInformation(mt[0]);lt&&lt.isValid&&lt.texture&&x.init(t,lt,s.renderState)}}for(let mt=0;mt<_.length;mt++){const H=w[mt],tt=_[mt];H!==null&&tt!==void 0&&tt.update(H,Z,l||o)}K&&K(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const rt=new td;rt.setAnimationLoop(Y),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}const $i=new Tn,$_=new ye;function j_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),_=M.envMap,w=M.envMapRotation;_&&(m.envMap.value=_,$i.copy(w),$i.x*=-1,$i.y*=-1,$i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler($i)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){const w=_.program;n.uniformBlockBinding(M,w)}function l(M,_){let w=s[M.id];w===void 0&&(g(M),w=u(M),s[M.id]=w,M.addEventListener("dispose",m));const T=_.program;n.updateUBOMapping(M,T);const b=t.render.frame;r[M.id]!==b&&(d(M),r[M.id]=b)}function u(M){const _=f();M.__bindingPointIndex=_;const w=i.createBuffer(),T=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=s[M.id],w=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,E=w.length;b<E;b++){const v=Array.isArray(w[b])?w[b]:[w[b]];for(let S=0,y=v.length;S<y;S++){const C=v[S];if(h(C,b,S,T)===!0){const z=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let ct=0;ct<U.length;ct++){const st=U[ct],xt=x(st);typeof st=="number"||typeof st=="boolean"?(C.__data[0]=st,i.bufferSubData(i.UNIFORM_BUFFER,z+X,C.__data)):st.isMatrix3?(C.__data[0]=st.elements[0],C.__data[1]=st.elements[1],C.__data[2]=st.elements[2],C.__data[3]=0,C.__data[4]=st.elements[3],C.__data[5]=st.elements[4],C.__data[6]=st.elements[5],C.__data[7]=0,C.__data[8]=st.elements[6],C.__data[9]=st.elements[7],C.__data[10]=st.elements[8],C.__data[11]=0):(st.toArray(C.__data,X),X+=xt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,_,w,T){const b=M.value,E=_+"_"+w;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const v=T[E];if(typeof b=="number"||typeof b=="boolean"){if(v!==b)return T[E]=b,!0}else if(v.equals(b)===!1)return v.copy(b),!0}return!1}function g(M){const _=M.uniforms;let w=0;const T=16;for(let E=0,v=_.length;E<v;E++){const S=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,C=S.length;y<C;y++){const z=S[y],U=Array.isArray(z.value)?z.value:[z.value];for(let X=0,ct=U.length;X<ct;X++){const st=U[X],xt=x(st),$=w%T,W=$%xt.boundary,D=$+W;w+=W,D!==0&&T-D<xt.storage&&(w+=T-D),z.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=xt.storage}}}const b=w%T;return b>0&&(w+=T-b),M.__size=w,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class J_{constructor(t={}){const{canvas:e=k0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=Ui,this.toneMappingExposure=1;const w=this;let T=!1,b=0,E=0,v=null,S=-1,y=null;const C=new Ie,z=new Ie;let U=null;const X=new ce(0);let ct=0,st=e.width,xt=e.height,$=1,W=null,D=null;const K=new Ie(0,0,st,xt),Y=new Ie(0,0,st,xt);let rt=!1;const V=new Ll;let Z=!1,mt=!1;const H=new ye,tt=new ye,lt=new et,St=new Ie,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function vt(){return v===null?$:1}let k=n;function nt(I,L){return e.getContext(I,L)}try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yl}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",j,!1),k===null){const L="webgl2";if(k=nt(L,I),k===null)throw nt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Bt,jt,Ht,Kt,Xt,A,R,Q,ut,wt,Et,Wt,Ft,Nt,q,G,it,yt,ft,dt,F,at,Tt,O;function ot(){Bt=new iv(k),Bt.init(),at=new G_(k,Bt),jt=new Zx(k,Bt,t,at),Ht=new k_(k,Bt),jt.reverseDepthBuffer&&d&&Ht.buffers.depth.setReversed(!0),Kt=new ov(k),Xt=new w_,A=new H_(k,Bt,Ht,Xt,jt,at,Kt),R=new Qx(w),Q=new nv(w),ut=new dm(k),Tt=new $x(k,ut),wt=new sv(k,ut,Kt,Tt),Et=new cv(k,wt,ut,Kt),ft=new av(k,jt,A),G=new Jx(Xt),Wt=new b_(w,R,Q,Bt,jt,Tt,G),Ft=new j_(w,Xt),Nt=new T_,q=new I_(Bt),yt=new Kx(w,R,Q,Ht,Et,h,c),it=new F_(w,Et,jt),O=new Z_(k,Kt,jt,Ht),dt=new jx(k,Bt,Kt),F=new rv(k,Bt,Kt),Kt.programs=Wt.programs,w.capabilities=jt,w.extensions=Bt,w.properties=Xt,w.renderLists=Nt,w.shadowMap=it,w.state=Ht,w.info=Kt}ot();const ht=new K_(w,k);this.xr=ht,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const I=Bt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Bt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(I){I!==void 0&&($=I,this.setSize(st,xt,!1))},this.getSize=function(I){return I.set(st,xt)},this.setSize=function(I,L,P=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=I,xt=L,e.width=Math.floor(I*$),e.height=Math.floor(L*$),P===!0&&(e.style.width=I+"px",e.style.height=L+"px"),this.setViewport(0,0,I,L)},this.getDrawingBufferSize=function(I){return I.set(st*$,xt*$).floor()},this.setDrawingBufferSize=function(I,L,P){st=I,xt=L,$=P,e.width=Math.floor(I*P),e.height=Math.floor(L*P),this.setViewport(0,0,I,L)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(K)},this.setViewport=function(I,L,P,B){I.isVector4?K.set(I.x,I.y,I.z,I.w):K.set(I,L,P,B),Ht.viewport(C.copy(K).multiplyScalar($).round())},this.getScissor=function(I){return I.copy(Y)},this.setScissor=function(I,L,P,B){I.isVector4?Y.set(I.x,I.y,I.z,I.w):Y.set(I,L,P,B),Ht.scissor(z.copy(Y).multiplyScalar($).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(I){Ht.setScissorTest(rt=I)},this.setOpaqueSort=function(I){W=I},this.setTransparentSort=function(I){D=I},this.getClearColor=function(I){return I.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(I=!0,L=!0,P=!0){let B=0;if(I){let N=!1;if(v!==null){const gt=v.texture.format;N=gt===Rl||gt===Cl||gt===Al}if(N){const gt=v.texture.type,bt=gt===Jn||gt===cs||gt===Lr||gt===Ks||gt===wl||gt===El,Ct=yt.getClearColor(),Dt=yt.getClearAlpha(),Ot=Ct.r,Gt=Ct.g,Ut=Ct.b;bt?(g[0]=Ot,g[1]=Gt,g[2]=Ut,g[3]=Dt,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=Ot,x[1]=Gt,x[2]=Ut,x[3]=Dt,k.clearBufferiv(k.COLOR,0,x))}else B|=k.COLOR_BUFFER_BIT}L&&(B|=k.DEPTH_BUFFER_BIT),P&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",j,!1),Nt.dispose(),q.dispose(),Xt.dispose(),R.dispose(),Q.dispose(),Et.dispose(),Tt.dispose(),O.dispose(),Wt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",le),ht.removeEventListener("sessionend",se),ae.stop()};function _t(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const I=Kt.autoReset,L=it.enabled,P=it.autoUpdate,B=it.needsUpdate,N=it.type;ot(),Kt.autoReset=I,it.enabled=L,it.autoUpdate=P,it.needsUpdate=B,it.type=N}function j(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function pt(I){const L=I.target;L.removeEventListener("dispose",pt),Rt(L)}function Rt(I){It(I),Xt.remove(I)}function It(I){const L=Xt.get(I).programs;L!==void 0&&(L.forEach(function(P){Wt.releaseProgram(P)}),I.isShaderMaterial&&Wt.releaseShaderCache(I))}this.renderBufferDirect=function(I,L,P,B,N,gt){L===null&&(L=zt);const bt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=nn(I,L,P,B,N);Ht.setMaterial(B,bt);let Dt=P.index,Ot=1;if(B.wireframe===!0){if(Dt=wt.getWireframeAttribute(P),Dt===void 0)return;Ot=2}const Gt=P.drawRange,Ut=P.attributes.position;let te=Gt.start*Ot,Mt=(Gt.start+Gt.count)*Ot;gt!==null&&(te=Math.max(te,gt.start*Ot),Mt=Math.min(Mt,(gt.start+gt.count)*Ot)),Dt!==null?(te=Math.max(te,0),Mt=Math.min(Mt,Dt.count)):Ut!=null&&(te=Math.max(te,0),Mt=Math.min(Mt,Ut.count));const ne=Mt-te;if(ne<0||ne===1/0)return;Tt.setup(N,B,Ct,P,Dt);let oe,ie=dt;if(Dt!==null&&(oe=ut.get(Dt),ie=F,ie.setIndex(oe)),N.isMesh)B.wireframe===!0?(Ht.setLineWidth(B.wireframeLinewidth*vt()),ie.setMode(k.LINES)):ie.setMode(k.TRIANGLES);else if(N.isLine){let Zt=B.linewidth;Zt===void 0&&(Zt=1),Ht.setLineWidth(Zt*vt()),N.isLineSegments?ie.setMode(k.LINES):N.isLineLoop?ie.setMode(k.LINE_LOOP):ie.setMode(k.LINE_STRIP)}else N.isPoints?ie.setMode(k.POINTS):N.isSprite&&ie.setMode(k.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ie.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ie.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Zt=N._multiDrawStarts,xe=N._multiDrawCounts,Vt=N._multiDrawCount,Se=Dt?ut.get(Dt).bytesPerElement:1,Oe=Xt.get(B).currentProgram.getUniforms();for(let Pe=0;Pe<Vt;Pe++)Oe.setValue(k,"_gl_DrawID",Pe),ie.render(Zt[Pe]/Se,xe[Pe])}else if(N.isInstancedMesh)ie.renderInstances(te,ne,N.count);else if(P.isInstancedBufferGeometry){const Zt=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,xe=Math.min(P.instanceCount,Zt);ie.renderInstances(te,ne,xe)}else ie.render(te,ne)};function Lt(I,L,P){I.transparent===!0&&I.side===yn&&I.forceSinglePass===!1?(I.side=mn,I.needsUpdate=!0,Te(I,L,P),I.side=ki,I.needsUpdate=!0,Te(I,L,P),I.side=yn):Te(I,L,P)}this.compile=function(I,L,P=null){P===null&&(P=I),p=q.get(P),p.init(L),_.push(p),P.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),I!==P&&I.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const B=new Set;return I.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const gt=N.material;if(gt)if(Array.isArray(gt))for(let bt=0;bt<gt.length;bt++){const Ct=gt[bt];Lt(Ct,P,N),B.add(Ct)}else Lt(gt,P,N),B.add(gt)}),_.pop(),p=null,B},this.compileAsync=function(I,L,P=null){const B=this.compile(I,L,P);return new Promise(N=>{function gt(){if(B.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&B.delete(bt)}),B.size===0){N(I);return}setTimeout(gt,10)}Bt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let qt=null;function Yt(I){qt&&qt(I)}function le(){ae.stop()}function se(){ae.start()}const ae=new td;ae.setAnimationLoop(Yt),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(I){qt=I,ht.setAnimationLoop(I),I===null?ae.stop():ae.start()},ht.addEventListener("sessionstart",le),ht.addEventListener("sessionend",se),this.render=function(I,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(L),L=ht.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,L,v),p=q.get(I,_.length),p.init(L),_.push(p),tt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),V.setFromProjectionMatrix(tt),mt=this.localClippingEnabled,Z=G.init(this.clippingPlanes,mt),m=Nt.get(I,M.length),m.init(),M.push(m),ht.enabled===!0&&ht.isPresenting===!0){const gt=w.xr.getDepthSensingMesh();gt!==null&&pe(gt,L,-1/0,w.sortObjects)}pe(I,L,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(W,D),J=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,J&&yt.addToRenderList(m,I),this.info.render.frame++,Z===!0&&G.beginShadows();const P=p.state.shadowsArray;it.render(P,I,L),Z===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(p.setupLights(),L.isArrayCamera){const gt=L.cameras;if(N.length>0)for(let bt=0,Ct=gt.length;bt<Ct;bt++){const Dt=gt[bt];Qt(B,N,I,Dt)}J&&yt.render(I);for(let bt=0,Ct=gt.length;bt<Ct;bt++){const Dt=gt[bt];he(m,I,Dt,Dt.viewport)}}else N.length>0&&Qt(B,N,I,L),J&&yt.render(I),he(m,I,L);v!==null&&(A.updateMultisampleRenderTarget(v),A.updateRenderTargetMipmap(v)),I.isScene===!0&&I.onAfterRender(w,I,L),Tt.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],Z===!0&&G.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function pe(I,L,P,B){if(I.visible===!1)return;if(I.layers.test(L.layers)){if(I.isGroup)P=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(L);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||V.intersectsSprite(I)){B&&St.setFromMatrixPosition(I.matrixWorld).applyMatrix4(tt);const bt=Et.update(I),Ct=I.material;Ct.visible&&m.push(I,bt,Ct,P,St.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||V.intersectsObject(I))){const bt=Et.update(I),Ct=I.material;if(B&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),St.copy(I.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),St.copy(bt.boundingSphere.center)),St.applyMatrix4(I.matrixWorld).applyMatrix4(tt)),Array.isArray(Ct)){const Dt=bt.groups;for(let Ot=0,Gt=Dt.length;Ot<Gt;Ot++){const Ut=Dt[Ot],te=Ct[Ut.materialIndex];te&&te.visible&&m.push(I,bt,te,P,St.z,Ut)}}else Ct.visible&&m.push(I,bt,Ct,P,St.z,null)}}const gt=I.children;for(let bt=0,Ct=gt.length;bt<Ct;bt++)pe(gt[bt],L,P,B)}function he(I,L,P,B){const N=I.opaque,gt=I.transmissive,bt=I.transparent;p.setupLightsView(P),Z===!0&&G.setGlobalState(w.clippingPlanes,P),B&&Ht.viewport(C.copy(B)),N.length>0&&ge(N,L,P),gt.length>0&&ge(gt,L,P),bt.length>0&&ge(bt,L,P),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Qt(I,L,P,B){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new ls(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Fr:Jn,minFilter:rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const gt=p.state.transmissionRenderTarget[B.id],bt=B.viewport||C;gt.setSize(bt.z,bt.w);const Ct=w.getRenderTarget();w.setRenderTarget(gt),w.getClearColor(X),ct=w.getClearAlpha(),ct<1&&w.setClearColor(16777215,.5),w.clear(),J&&yt.render(P);const Dt=w.toneMapping;w.toneMapping=Ui;const Ot=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Z===!0&&G.setGlobalState(w.clippingPlanes,B),ge(I,P,B),A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ut=0,te=L.length;Ut<te;Ut++){const Mt=L[Ut],ne=Mt.object,oe=Mt.geometry,ie=Mt.material,Zt=Mt.group;if(ie.side===yn&&ne.layers.test(B.layers)){const xe=ie.side;ie.side=mn,ie.needsUpdate=!0,re(ne,P,B,oe,ie,Zt),ie.side=xe,ie.needsUpdate=!0,Gt=!0}}Gt===!0&&(A.updateMultisampleRenderTarget(gt),A.updateRenderTargetMipmap(gt))}w.setRenderTarget(Ct),w.setClearColor(X,ct),Ot!==void 0&&(B.viewport=Ot),w.toneMapping=Dt}function ge(I,L,P){const B=L.isScene===!0?L.overrideMaterial:null;for(let N=0,gt=I.length;N<gt;N++){const bt=I[N],Ct=bt.object,Dt=bt.geometry,Ot=B===null?bt.material:B,Gt=bt.group;Ct.layers.test(P.layers)&&re(Ct,L,P,Dt,Ot,Gt)}}function re(I,L,P,B,N,gt){I.onBeforeRender(w,L,P,B,N,gt),I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),N.onBeforeRender(w,L,P,B,I,gt),N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=mn,N.needsUpdate=!0,w.renderBufferDirect(P,L,B,N,I,gt),N.side=ki,N.needsUpdate=!0,w.renderBufferDirect(P,L,B,N,I,gt),N.side=yn):w.renderBufferDirect(P,L,B,N,I,gt),I.onAfterRender(w,L,P,B,N,gt)}function Te(I,L,P){L.isScene!==!0&&(L=zt);const B=Xt.get(I),N=p.state.lights,gt=p.state.shadowsArray,bt=N.state.version,Ct=Wt.getParameters(I,N.state,gt,L,P),Dt=Wt.getProgramCacheKey(Ct);let Ot=B.programs;B.environment=I.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(I.isMeshStandardMaterial?Q:R).get(I.envMap||B.environment),B.envMapRotation=B.environment!==null&&I.envMap===null?L.environmentRotation:I.envMapRotation,Ot===void 0&&(I.addEventListener("dispose",pt),Ot=new Map,B.programs=Ot);let Gt=Ot.get(Dt);if(Gt!==void 0){if(B.currentProgram===Gt&&B.lightsStateVersion===bt)return Fe(I,Ct),Gt}else Ct.uniforms=Wt.getUniforms(I),I.onBeforeCompile(Ct,w),Gt=Wt.acquireProgram(Ct,Dt),Ot.set(Dt,Gt),B.uniforms=Ct.uniforms;const Ut=B.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ut.clippingPlanes=G.uniform),Fe(I,Ct),B.needsLights=hn(I),B.lightsStateVersion=bt,B.needsLights&&(Ut.ambientLightColor.value=N.state.ambient,Ut.lightProbe.value=N.state.probe,Ut.directionalLights.value=N.state.directional,Ut.directionalLightShadows.value=N.state.directionalShadow,Ut.spotLights.value=N.state.spot,Ut.spotLightShadows.value=N.state.spotShadow,Ut.rectAreaLights.value=N.state.rectArea,Ut.ltc_1.value=N.state.rectAreaLTC1,Ut.ltc_2.value=N.state.rectAreaLTC2,Ut.pointLights.value=N.state.point,Ut.pointLightShadows.value=N.state.pointShadow,Ut.hemisphereLights.value=N.state.hemi,Ut.directionalShadowMap.value=N.state.directionalShadowMap,Ut.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ut.spotShadowMap.value=N.state.spotShadowMap,Ut.spotLightMatrix.value=N.state.spotLightMatrix,Ut.spotLightMap.value=N.state.spotLightMap,Ut.pointShadowMap.value=N.state.pointShadowMap,Ut.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Gt,B.uniformsList=null,Gt}function en(I){if(I.uniformsList===null){const L=I.currentProgram.getUniforms();I.uniformsList=Oo.seqWithValue(L.seq,I.uniforms)}return I.uniformsList}function Fe(I,L){const P=Xt.get(I);P.outputColorSpace=L.outputColorSpace,P.batching=L.batching,P.batchingColor=L.batchingColor,P.instancing=L.instancing,P.instancingColor=L.instancingColor,P.instancingMorph=L.instancingMorph,P.skinning=L.skinning,P.morphTargets=L.morphTargets,P.morphNormals=L.morphNormals,P.morphColors=L.morphColors,P.morphTargetsCount=L.morphTargetsCount,P.numClippingPlanes=L.numClippingPlanes,P.numIntersection=L.numClipIntersection,P.vertexAlphas=L.vertexAlphas,P.vertexTangents=L.vertexTangents,P.toneMapping=L.toneMapping}function nn(I,L,P,B,N){L.isScene!==!0&&(L=zt),A.resetTextureUnits();const gt=L.fog,bt=B.isMeshStandardMaterial?L.environment:null,Ct=v===null?w.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Qs,Dt=(B.isMeshStandardMaterial?Q:R).get(B.envMap||bt),Ot=B.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,Gt=!!P.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ut=!!P.morphAttributes.position,te=!!P.morphAttributes.normal,Mt=!!P.morphAttributes.color;let ne=Ui;B.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(ne=w.toneMapping);const oe=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ie=oe!==void 0?oe.length:0,Zt=Xt.get(B),xe=p.state.lights;if(Z===!0&&(mt===!0||I!==y)){const An=I===y&&B.id===S;G.setState(B,I,An)}let Vt=!1;B.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==xe.state.version||Zt.outputColorSpace!==Ct||N.isBatchedMesh&&Zt.batching===!1||!N.isBatchedMesh&&Zt.batching===!0||N.isBatchedMesh&&Zt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Zt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Zt.instancing===!1||!N.isInstancedMesh&&Zt.instancing===!0||N.isSkinnedMesh&&Zt.skinning===!1||!N.isSkinnedMesh&&Zt.skinning===!0||N.isInstancedMesh&&Zt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Zt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Zt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Zt.instancingMorph===!1&&N.morphTexture!==null||Zt.envMap!==Dt||B.fog===!0&&Zt.fog!==gt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==G.numPlanes||Zt.numIntersection!==G.numIntersection)||Zt.vertexAlphas!==Ot||Zt.vertexTangents!==Gt||Zt.morphTargets!==Ut||Zt.morphNormals!==te||Zt.morphColors!==Mt||Zt.toneMapping!==ne||Zt.morphTargetsCount!==ie)&&(Vt=!0):(Vt=!0,Zt.__version=B.version);let Se=Zt.currentProgram;Vt===!0&&(Se=Te(B,L,N));let Oe=!1,Pe=!1,ze=!1;const be=Se.getUniforms(),Gn=Zt.uniforms;if(Ht.useProgram(Se.program)&&(Oe=!0,Pe=!0,ze=!0),B.id!==S&&(S=B.id,Pe=!0),Oe||y!==I){Ht.buffers.depth.getReversed()?(H.copy(I.projectionMatrix),H0(H),G0(H),be.setValue(k,"projectionMatrix",H)):be.setValue(k,"projectionMatrix",I.projectionMatrix),be.setValue(k,"viewMatrix",I.matrixWorldInverse);const Mi=be.map.cameraPosition;Mi!==void 0&&Mi.setValue(k,lt.setFromMatrixPosition(I.matrixWorld)),jt.logarithmicDepthBuffer&&be.setValue(k,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&be.setValue(k,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,Pe=!0,ze=!0)}if(N.isSkinnedMesh){be.setOptional(k,N,"bindMatrix"),be.setOptional(k,N,"bindMatrixInverse");const An=N.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),be.setValue(k,"boneTexture",An.boneTexture,A))}N.isBatchedMesh&&(be.setOptional(k,N,"batchingTexture"),be.setValue(k,"batchingTexture",N._matricesTexture,A),be.setOptional(k,N,"batchingIdTexture"),be.setValue(k,"batchingIdTexture",N._indirectTexture,A),be.setOptional(k,N,"batchingColorTexture"),N._colorsTexture!==null&&be.setValue(k,"batchingColorTexture",N._colorsTexture,A));const sr=P.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&ft.update(N,P,Se),(Pe||Zt.receiveShadow!==N.receiveShadow)&&(Zt.receiveShadow=N.receiveShadow,be.setValue(k,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Gn.envMap.value=Dt,Gn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(Gn.envMapIntensity.value=L.environmentIntensity),Pe&&(be.setValue(k,"toneMappingExposure",w.toneMappingExposure),Zt.needsLights&&We(Gn,ze),gt&&B.fog===!0&&Ft.refreshFogUniforms(Gn,gt),Ft.refreshMaterialUniforms(Gn,B,$,xt,p.state.transmissionRenderTarget[I.id]),Oo.upload(k,en(Zt),Gn,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Oo.upload(k,en(Zt),Gn,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&be.setValue(k,"center",N.center),be.setValue(k,"modelViewMatrix",N.modelViewMatrix),be.setValue(k,"normalMatrix",N.normalMatrix),be.setValue(k,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const An=B.uniformsGroups;for(let Mi=0,yi=An.length;Mi<yi;Mi++){const Wl=An[Mi];O.update(Wl,Se),O.bind(Wl,Se)}}return Se}function We(I,L){I.ambientLightColor.needsUpdate=L,I.lightProbe.needsUpdate=L,I.directionalLights.needsUpdate=L,I.directionalLightShadows.needsUpdate=L,I.pointLights.needsUpdate=L,I.pointLightShadows.needsUpdate=L,I.spotLights.needsUpdate=L,I.spotLightShadows.needsUpdate=L,I.rectAreaLights.needsUpdate=L,I.hemisphereLights.needsUpdate=L}function hn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(I,L,P){Xt.get(I.texture).__webglTexture=L,Xt.get(I.depthTexture).__webglTexture=P;const B=Xt.get(I);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=P===void 0,B.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,L){const P=Xt.get(I);P.__webglFramebuffer=L,P.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(I,L=0,P=0){v=I,b=L,E=P;let B=!0,N=null,gt=!1,bt=!1;if(I){const Dt=Xt.get(I);if(Dt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(k.FRAMEBUFFER,null),B=!1;else if(Dt.__webglFramebuffer===void 0)A.setupRenderTarget(I);else if(Dt.__hasExternalTextures)A.rebindTextures(I,Xt.get(I.texture).__webglTexture,Xt.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ut=I.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&Xt.has(Ut)&&(I.width!==Ut.image.width||I.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(I)}}const Ot=I.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(bt=!0);const Gt=Xt.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Gt[L])?N=Gt[L][P]:N=Gt[L],gt=!0):I.samples>0&&A.useMultisampledRTT(I)===!1?N=Xt.get(I).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[P]:N=Gt,C.copy(I.viewport),z.copy(I.scissor),U=I.scissorTest}else C.copy(K).multiplyScalar($).floor(),z.copy(Y).multiplyScalar($).floor(),U=rt;if(Ht.bindFramebuffer(k.FRAMEBUFFER,N)&&B&&Ht.drawBuffers(I,N),Ht.viewport(C),Ht.scissor(z),Ht.setScissorTest(U),gt){const Dt=Xt.get(I.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+L,Dt.__webglTexture,P)}else if(bt){const Dt=Xt.get(I.texture),Ot=L||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.__webglTexture,P||0,Ot)}S=-1},this.readRenderTargetPixels=function(I,L,P,B,N,gt,bt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Xt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){Ht.bindFramebuffer(k.FRAMEBUFFER,Ct);try{const Dt=I.texture,Ot=Dt.format,Gt=Dt.type;if(!jt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=I.width-B&&P>=0&&P<=I.height-N&&k.readPixels(L,P,B,N,at.convert(Ot),at.convert(Gt),gt)}finally{const Dt=v!==null?Xt.get(v).__webglFramebuffer:null;Ht.bindFramebuffer(k.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(I,L,P,B,N,gt,bt){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Xt.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){const Dt=I.texture,Ot=Dt.format,Gt=Dt.type;if(!jt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=I.width-B&&P>=0&&P<=I.height-N){Ht.bindFramebuffer(k.FRAMEBUFFER,Ct);const Ut=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ut),k.bufferData(k.PIXEL_PACK_BUFFER,gt.byteLength,k.STREAM_READ),k.readPixels(L,P,B,N,at.convert(Ot),at.convert(Gt),0);const te=v!==null?Xt.get(v).__webglFramebuffer:null;Ht.bindFramebuffer(k.FRAMEBUFFER,te);const Mt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await B0(k,Mt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ut),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,gt),k.deleteBuffer(Ut),k.deleteSync(Mt),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,L=null,P=0){I.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,I=arguments[1]);const B=Math.pow(2,-P),N=Math.floor(I.image.width*B),gt=Math.floor(I.image.height*B),bt=L!==null?L.x:0,Ct=L!==null?L.y:0;A.setTexture2D(I,0),k.copyTexSubImage2D(k.TEXTURE_2D,P,0,0,bt,Ct,N,gt),Ht.unbindTexture()},this.copyTextureToTexture=function(I,L,P=null,B=null,N=0){I.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,I=arguments[1],L=arguments[2],N=arguments[3]||0,P=null);let gt,bt,Ct,Dt,Ot,Gt,Ut,te,Mt;const ne=I.isCompressedTexture?I.mipmaps[N]:I.image;P!==null?(gt=P.max.x-P.min.x,bt=P.max.y-P.min.y,Ct=P.isBox3?P.max.z-P.min.z:1,Dt=P.min.x,Ot=P.min.y,Gt=P.isBox3?P.min.z:0):(gt=ne.width,bt=ne.height,Ct=ne.depth||1,Dt=0,Ot=0,Gt=0),B!==null?(Ut=B.x,te=B.y,Mt=B.z):(Ut=0,te=0,Mt=0);const oe=at.convert(L.format),ie=at.convert(L.type);let Zt;L.isData3DTexture?(A.setTexture3D(L,0),Zt=k.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(A.setTexture2DArray(L,0),Zt=k.TEXTURE_2D_ARRAY):(A.setTexture2D(L,0),Zt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,L.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,L.unpackAlignment);const xe=k.getParameter(k.UNPACK_ROW_LENGTH),Vt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Se=k.getParameter(k.UNPACK_SKIP_PIXELS),Oe=k.getParameter(k.UNPACK_SKIP_ROWS),Pe=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ne.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ne.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Dt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Gt);const ze=I.isDataArrayTexture||I.isData3DTexture,be=L.isDataArrayTexture||L.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Gn=Xt.get(I),sr=Xt.get(L),An=Xt.get(Gn.__renderTarget),Mi=Xt.get(sr.__renderTarget);Ht.bindFramebuffer(k.READ_FRAMEBUFFER,An.__webglFramebuffer),Ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let yi=0;yi<Ct;yi++)ze&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xt.get(I).__webglTexture,N,Gt+yi),I.isDepthTexture?(be&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xt.get(L).__webglTexture,N,Mt+yi),k.blitFramebuffer(Dt,Ot,gt,bt,Ut,te,gt,bt,k.DEPTH_BUFFER_BIT,k.NEAREST)):be?k.copyTexSubImage3D(Zt,N,Ut,te,Mt+yi,Dt,Ot,gt,bt):k.copyTexSubImage2D(Zt,N,Ut,te,Mt+yi,Dt,Ot,gt,bt);Ht.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else be?I.isDataTexture||I.isData3DTexture?k.texSubImage3D(Zt,N,Ut,te,Mt,gt,bt,Ct,oe,ie,ne.data):L.isCompressedArrayTexture?k.compressedTexSubImage3D(Zt,N,Ut,te,Mt,gt,bt,Ct,oe,ne.data):k.texSubImage3D(Zt,N,Ut,te,Mt,gt,bt,Ct,oe,ie,ne):I.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,N,Ut,te,gt,bt,oe,ie,ne.data):I.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,N,Ut,te,ne.width,ne.height,oe,ne.data):k.texSubImage2D(k.TEXTURE_2D,N,Ut,te,gt,bt,oe,ie,ne);k.pixelStorei(k.UNPACK_ROW_LENGTH,xe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Vt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Se),k.pixelStorei(k.UNPACK_SKIP_ROWS,Oe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pe),N===0&&L.generateMipmaps&&k.generateMipmap(Zt),Ht.unbindTexture()},this.copyTextureToTexture3D=function(I,L,P=null,B=null,N=0){return I.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),P=arguments[0]||null,B=arguments[1]||null,I=arguments[2],L=arguments[3],N=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,L,P,B,N)},this.initRenderTarget=function(I){Xt.get(I).__webglFramebuffer===void 0&&A.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?A.setTextureCube(I,0):I.isData3DTexture?A.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?A.setTexture2DArray(I,0):A.setTexture2D(I,0),Ht.unbindTexture()},this.resetState=function(){b=0,E=0,v=null,Ht.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}class Q_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Dl extends ln{constructor(t=null,e=1,n=1,s,r,o,a,c,l=En,u=En,f,d){super(null,o,a,c,l,u,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Cs=new ye,uf=new ye,go=[],ff=new Gi,t1=new ye,fr=new De,hr=new Vi;class e1 extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $o(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),ff.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(ff)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),hr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),t.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),uf.multiplyMatrices(n,Cs),fr.matrixWorld=uf,fr.raycast(t,go);for(let o=0,a=go.length;o<a;o++){const c=go[o];c.instanceId=r,c.object=this,e.push(c)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dl(new Float32Array(s*this.count),s,this.count,Tl,jn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zl extends ln{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,h=(o-u)/d;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Jt:new et);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new et,s=[],r=[],o=[],a=new et,c=new ye;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new et)}r[0]=new et,o[0]=new et;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ze(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(Ze(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nl extends Qn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Jt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,h=l-this.aY;c=d*u-h*f+this.aX,l=d*f+h*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class n1 extends Nl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ul(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,h=(a-o)/u-(c-o)/(u+f)+(c-a)/f;d*=u,h*=u,s(o,a,d,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const xo=new et,Ya=new Ul,Ka=new Ul,$a=new Ul;class i1 extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new et){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),l=xo);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ya.initNonuniformCatmullRom(l.x,f.x,d.x,u.x,g,x,m),Ka.initNonuniformCatmullRom(l.y,f.y,d.y,u.y,g,x,m),$a.initNonuniformCatmullRom(l.z,f.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(l.x,f.x,d.x,u.x,this.tension),Ka.initCatmullRom(l.y,f.y,d.y,u.y,this.tension),$a.initCatmullRom(l.z,f.z,d.z,u.z,this.tension));return n.set(Ya.calc(c),Ka.calc(c),$a.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hf(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function s1(i,t){const e=1-i;return e*e*t}function r1(i,t){return 2*(1-i)*i*t}function o1(i,t){return i*i*t}function Er(i,t,e,n){return s1(i,t)+r1(i,e)+o1(i,n)}function a1(i,t){const e=1-i;return e*e*e*t}function c1(i,t){const e=1-i;return 3*e*e*i*t}function l1(i,t){return 3*(1-i)*i*i*t}function u1(i,t){return i*i*i*t}function Tr(i,t,e,n,s){return a1(i,t)+c1(i,e)+l1(i,n)+u1(i,s)}class ad extends Qn{constructor(t=new Jt,e=new Jt,n=new Jt,s=new Jt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Jt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,s.x,r.x,o.x,a.x),Tr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class f1 extends Qn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,s.x,r.x,o.x,a.x),Tr(t,s.y,r.y,o.y,a.y),Tr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cd extends Qn{constructor(t=new Jt,e=new Jt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Jt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Jt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class h1 extends Qn{constructor(t=new et,e=new et){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ld extends Qn{constructor(t=new Jt,e=new Jt,n=new Jt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Jt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d1 extends Qn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y),Er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ud extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Jt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(hf(a,c.x,l.x,u.x,f.x),hf(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Jt().fromArray(s))}return this}}var df=Object.freeze({__proto__:null,ArcCurve:n1,CatmullRomCurve3:i1,CubicBezierCurve:ad,CubicBezierCurve3:f1,EllipseCurve:Nl,LineCurve:cd,LineCurve3:h1,QuadraticBezierCurve:ld,QuadraticBezierCurve3:d1,SplineCurve:ud});class p1 extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new df[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new df[s.type]().fromJSON(s))}return this}}class m1 extends p1{constructor(t){super(),this.type="Path",this.currentPoint=new Jt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new cd(this.currentPoint.clone(),new Jt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ld(this.currentPoint.clone(),new Jt(t,e),new Jt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new ad(this.currentPoint.clone(),new Jt(t,e),new Jt(n,s),new Jt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ud(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Nl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class aa extends Ve{constructor(t=[new Jt(0,-.5),new Jt(.5,0),new Jt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ze(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,f=new et,d=new Jt,h=new et,g=new et,x=new et;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,h.x=p*1,h.y=-m,h.z=p*0,x.copy(h),h.normalize(),c.push(h.x,h.y,h.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,h.x=p*1,h.y=-m,h.z=p*0,g.copy(h),h.x+=x.x,h.y+=x.y,h.z+=x.z,h.normalize(),c.push(h.x,h.y,h.z),x.copy(g)}for(let M=0;M<=e;M++){const _=n+M*u*s,w=Math.sin(_),T=Math.cos(_);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*w,f.y=t[b].y,f.z=t[b].x*T,o.push(f.x,f.y,f.z),d.x=M/e,d.y=b/(t.length-1),a.push(d.x,d.y);const E=c[3*b+0]*w,v=c[3*b+1],S=c[3*b+0]*T;l.push(E,v,S)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){const w=_+M*t.length,T=w,b=w+t.length,E=w+t.length+1,v=w+1;r.push(T,b,v),r.push(E,v,b)}this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("uv",new _e(a,2)),this.setAttribute("normal",new _e(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.points,t.segments,t.phiStart,t.phiLength)}}class Fl extends aa{constructor(t=1,e=1,n=4,s=8){const r=new m1;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Fl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ol extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new et,u=new Jt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const h=n+f/e*s;l.x=t*Math.cos(h),l.y=t*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ol(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Hn extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let g=0;const x=[],m=n/2;let p=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(h,2));function M(){const w=new et,T=new et;let b=0;const E=(e-t)/n;for(let v=0;v<=r;v++){const S=[],y=v/r,C=y*(e-t)+t;for(let z=0;z<=s;z++){const U=z/s,X=U*c+a,ct=Math.sin(X),st=Math.cos(X);T.x=C*ct,T.y=-y*n+m,T.z=C*st,f.push(T.x,T.y,T.z),w.set(ct,E,st).normalize(),d.push(w.x,w.y,w.z),h.push(U,1-y),S.push(g++)}x.push(S)}for(let v=0;v<s;v++)for(let S=0;S<r;S++){const y=x[S][v],C=x[S+1][v],z=x[S+1][v+1],U=x[S][v+1];(t>0||S!==0)&&(u.push(y,C,U),b+=3),(e>0||S!==r-1)&&(u.push(C,z,U),b+=3)}l.addGroup(p,b,0),p+=b}function _(w){const T=g,b=new Jt,E=new et;let v=0;const S=w===!0?t:e,y=w===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,m*y,0),d.push(0,y,0),h.push(.5,.5),g++;const C=g;for(let z=0;z<=s;z++){const X=z/s*c+a,ct=Math.cos(X),st=Math.sin(X);E.x=S*st,E.y=m*y,E.z=S*ct,f.push(E.x,E.y,E.z),d.push(0,y,0),b.x=ct*.5+.5,b.y=st*.5*y+.5,h.push(b.x,b.y),g++}for(let z=0;z<s;z++){const U=T+z,X=C+z;w===!0?u.push(X,X+1,U):u.push(X+1,X,U),v+=3}l.addGroup(p,v,w===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ca extends Hn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ca(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class la extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new et,w=new et,T=new et;for(let b=0;b<e.length;b+=3)h(e[b+0],_),h(e[b+1],w),h(e[b+2],T),c(_,w,T,M)}function c(M,_,w,T){const b=T+1,E=[];for(let v=0;v<=b;v++){E[v]=[];const S=M.clone().lerp(w,v/b),y=_.clone().lerp(w,v/b),C=b-v;for(let z=0;z<=C;z++)z===0&&v===b?E[v][z]=S:E[v][z]=S.clone().lerp(y,z/C)}for(let v=0;v<b;v++)for(let S=0;S<2*(b-v)-1;S++){const y=Math.floor(S/2);S%2===0?(d(E[v][y+1]),d(E[v+1][y]),d(E[v][y])):(d(E[v][y+1]),d(E[v+1][y+1]),d(E[v+1][y]))}}function l(M){const _=new et;for(let w=0;w<r.length;w+=3)_.x=r[w+0],_.y=r[w+1],_.z=r[w+2],_.normalize().multiplyScalar(M),r[w+0]=_.x,r[w+1]=_.y,r[w+2]=_.z}function u(){const M=new et;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const w=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(w,1-T)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const _=o[M+0],w=o[M+2],T=o[M+4],b=Math.max(_,w,T),E=Math.min(_,w,T);b>.9&&E<.1&&(_<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function h(M,_){const w=M*3;_.x=t[w+0],_.y=t[w+1],_.z=t[w+2]}function g(){const M=new et,_=new et,w=new et,T=new et,b=new Jt,E=new Jt,v=new Jt;for(let S=0,y=0;S<r.length;S+=9,y+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),w.set(r[S+6],r[S+7],r[S+8]),b.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),v.set(o[y+4],o[y+5]),T.copy(M).add(_).add(w).divideScalar(3);const C=m(T);x(b,y+0,M,C),x(E,y+2,_,C),x(v,y+4,w,C)}}function x(M,_,w,T){T<0&&M.x===1&&(o[_]=M.x-1),w.x===0&&w.z===0&&(o[_]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.vertices,t.indices,t.radius,t.details)}}class Zs extends la{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zs(t.radius,t.detail)}}class Or extends la{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Or(t.radius,t.detail)}}class gi extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new et,d=new et,h=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let w=0;p===0&&o===0?w=.5/e:p===n&&c===Math.PI&&(w=-.5/e);for(let T=0;T<=e;T++){const b=T/e;f.x=-t*Math.cos(s+b*r)*Math.sin(o+_*a),f.y=t*Math.cos(o+_*a),f.z=t*Math.sin(s+b*r)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(b+w,1-_),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const _=u[p][M+1],w=u[p][M],T=u[p+1][M],b=u[p+1][M+1];(p!==0||o>0)&&h.push(_,w,b),(p!==n-1||c<Math.PI)&&h.push(w,T,b)}this.setIndex(h),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class g1 extends hs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class x1 extends hs{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ua extends hs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fd extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class v1 extends fd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ja=new ye,pf=new et,mf=new et;class _1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(pf),mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mf),e.updateMatrixWorld(),ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class M1 extends _1{constructor(){super(new ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y1 extends fd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new M1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class S1 extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);const me=Object.freeze({eightBody:1447452,eightDisc:16513779,eightInk:1447452,eightRim:10274047,cueBody:16776692,cueDots:14165548,blobShadow:795668,flagCloth:15217199,flagDisc:16513779,pinWhite:16513779,pinBand:15217199,cupInside:1780254,cupLiner:16513779,guideWhite:16777215,guideHalo:1057818,guideWarn:16747050,eightArrow:16765503,surfaceOutline:3037738,chalk:4030425,poolBalls:Object.freeze([16763196,2976991,15022389,8081353,16747050,2006618,9317178])}),gf=Object.freeze({1:Object.freeze({name:"Greenside",rough:5216828,fairwayLight:8177237,fairwayDark:7125066,fringe:7782994,greenLight:9427046,greenDark:8703836,sand:15914907,sandLip:14268530,ice:14218239,waterShallow:6080736,waterDeep:3051460,waterFoam:15268863,waterGlint:12579839,pondBed:2916230,railSide:10115630,railTop:12745283,railSights:16051152,cushionNose:2059082,hedge:4164154,wallStone:14275267,soilTop:8015407,soilBottom:5123868,skyTop:12576511,skyBottom:15267839,reeds:8032058,wood:11040586,hemiSky:15135487,hemiGround:8022600,hemiIntensity:1.4,sun:16773596,sunIntensity:2.7,sunElevationDeg:50}),2:Object.freeze({name:"Lakeside",rough:6198336,fairwayLight:9684306,fairwayDark:8697930,fringe:9224270,greenLight:10737251,greenDark:9948506,sand:15978388,sandLip:14264422,ice:14218239,waterShallow:5224150,waterDeep:2386088,waterFoam:15268863,waterGlint:16770764,pondBed:2781050,railSide:7028516,railTop:9198132,railSights:14792794,cushionNose:2055762,hedge:4620346,wallStone:14207152,soilTop:8015407,soilBottom:5123868,skyTop:16766888,skyBottom:16772048,reeds:8032058,wood:11040586,hemiSky:16770764,hemiGround:5917242,hemiIntensity:1.8,sun:16767400,sunIntensity:3.2,sunElevationDeg:32})}),hd=i=>gf[i]||gf[1],jo=30,b1=Dr.degToRad(225),w1=90;function E1(){try{const n=typeof location<"u"?/[?&]tier=([012])\b/.exec(location.search):null;if(n)return+n[1]}catch{}const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=typeof navigator<"u"?navigator.deviceMemory:void 0,e=typeof devicePixelRatio=="number"?devicePixelRatio:1;return i&&typeof t=="number"&&t<=3?0:!i&&e>=1.5?2:1}function T1(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext&&e.getContext("2d");if(!n)return null;const s=c=>"#"+c.toString(16).padStart(6,"0"),r=n.createLinearGradient(0,0,0,e.height);r.addColorStop(0,s(i)),r.addColorStop(1,s(t)),n.fillStyle=r,n.fillRect(0,0,e.width,e.height);const o=n.createRadialGradient(0,0,0,0,0,e.height*.9);o.addColorStop(0,"rgba(255,255,255,0.35)"),o.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=o,n.fillRect(0,0,e.width,e.height);const a=new zl(e);return a.colorSpace=Qe,a.generateMipmaps=!1,a.minFilter=wn,a}function A1(i){const t=E1(),e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=typeof devicePixelRatio=="number"&&devicePixelRatio>0?devicePixelRatio:1,s=Math.min(n,t===0?1:t===2?2:e?1.5:2),r=Math.min(1,n);let o=null;try{o=new J_({antialias:t>0,powerPreference:"high-performance",stencil:!1,alpha:!1})}catch(Y){o=null,typeof window<"u"&&window.document&&window.document.body&&console.error(Y)}if(o){o.outputColorSpace=Qe,o.toneMapping=Lh,o.toneMappingExposure=1,o.shadowMap.enabled=t>=1,o.shadowMap.type=Sl,o.shadowMap.autoUpdate=!1,o.setPixelRatio(s);const Y=o.domElement;Y.style.display="block",Y.style.width="100%",Y.style.height="100%",Y.style.touchAction="none",Y.style.outline="none",i&&i.appendChild&&i.appendChild(Y)}const a=new Q_,c=new Mn(jo,16/9,.5,800);c.position.set(0,30,17),c.lookAt(0,0,0);const l=new v1(16777215,7829367,1.4);l.position.set(0,1,0);const u=new y1(16777215,2.7);if(a.add(l,u,u.target),t>=1){u.castShadow=!0;const Y=t===2?2048:1024;u.shadow.mapSize.set(Y,Y),u.shadow.bias=-6e-4,u.shadow.normalBias=.03,u.shadow.intensity=.55}const f={w:1,h:1,portrait:!1,zero:!0},d=new Set,h=new et,g=new Gi(new et(-4,-2,-16),new et(30,4,4));let x=null,m=2,p=Dr.degToRad(50);const M={renderer:o,scene:a,camera:c,tier:t,size:f,container:i,round:1,yaw:0,hemi:l,sun:u,pixelRatio:s,shadows:!!(o&&t>=1),setRound:y,setShadowBounds:v,invalidateShadows:S,onResize:U,render:D,dispose:K},_=new ye,w=new et,T=new et,b=new et(0,1,0);function E(){const Y=M.yaw+b1;if(h.set(Math.sin(Y)*Math.cos(p),Math.sin(p),Math.cos(Y)*Math.cos(p)),g.getCenter(T),u.position.copy(T).addScaledVector(h,w1),u.target.position.copy(T),u.updateMatrixWorld(),u.target.updateMatrixWorld(),!u.castShadow)return;_.lookAt(u.position,T,b),_.setPosition(u.position),_.invert();let rt=1/0,V=-1/0,Z=1/0,mt=-1/0,H=1/0,tt=-1/0;for(let St=0;St<8;St++)w.set(St&1?g.max.x:g.min.x,St&2?g.max.y:g.min.y,St&4?g.max.z:g.min.z),w.applyMatrix4(_),w.x<rt&&(rt=w.x),w.x>V&&(V=w.x),w.y<Z&&(Z=w.y),w.y>mt&&(mt=w.y),w.z<H&&(H=w.z),w.z>tt&&(tt=w.z);const lt=u.shadow.camera;lt.left=rt-1,lt.right=V+1,lt.bottom=Z-1,lt.top=mt+1,lt.near=Math.max(.5,-tt-4),lt.far=-H+4,lt.updateProjectionMatrix(),S()}function v(Y){if(!Y||!Y.bounds)return;const rt=Y.bounds;let V=0,Z=0;const mt=Y.grid;if(mt&&mt.height)for(let H=0;H<mt.height.length;H++){const tt=mt.height[H];tt<V&&(V=tt),tt>Z&&(Z=tt)}g.min.set(rt.minx-5,V-2.5,rt.minz-5),g.max.set(rt.maxx+5,Z+5,rt.maxz+5),E()}function S(){m=2}function y(Y){const rt=hd(Y);M.round=Y===2?2:1,l.color.setHex(rt.hemiSky),l.groundColor.setHex(rt.hemiGround),l.intensity=rt.hemiIntensity,u.color.setHex(rt.sun),u.intensity=rt.sunIntensity,p=Dr.degToRad(rt.sunElevationDeg),x&&x.dispose(),x=T1(rt.skyTop,rt.skyBottom),a.background=x||new ce(rt.skyBottom),E()}function C(){let Y=0,rt=0;if(i&&(Y=i.clientWidth||0,rt=i.clientHeight||0,(!Y||!rt)&&i.getBoundingClientRect)){const V=i.getBoundingClientRect();Y=Y||V.width||0,rt=rt||V.height||0}return{w:Y>0&&Number.isFinite(Y)?Math.round(Y):0,h:rt>0&&Number.isFinite(rt)?Math.round(rt):0}}function z(Y){const rt=C(),V=!(rt.w>0&&rt.h>0),Z=V?1:rt.w,mt=V?1:rt.h;if(!Y&&Z===f.w&&mt===f.h&&V===f.zero)return;const H=f.portrait;f.w=Z,f.h=mt,f.zero=V,f.portrait=!V&&mt>Z,M.yaw=f.portrait?-Math.PI/2:0,c.aspect=V?16/9:Z/mt,c.updateProjectionMatrix(),o&&o.setSize(Z,mt,!1),(Y||H!==f.portrait)&&E(),d.forEach(tt=>{try{tt(f)}catch(lt){console.error(lt)}})}function U(Y){return d.add(Y),()=>d.delete(Y)}const X=()=>z(!1);let ct=null;typeof ResizeObserver=="function"&&i&&i.nodeType===1&&(ct=new ResizeObserver(X),ct.observe(i)),typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",X),window.addEventListener("orientationchange",X));function st(Y){Y=Math.round(Y*4)/4,!(!o||Y===M.pixelRatio)&&(M.pixelRatio=Y,o.setPixelRatio(Y),o.setSize(f.w,f.h,!1))}const xt=C1({cap:s,min:r,get:()=>M.pixelRatio,set:st,onSlowStart(){o&&o.shadowMap.enabled&&(o.shadowMap.enabled=!1,u.castShadow=!1,M.shadows=!1)}});let $=0;const W=typeof performance<"u"?performance:Date;function D(){if(!o||f.zero)return;const Y=W.now();$&&xt.frame((Y-$)/1e3),$=Y,m>0&&(o.shadowMap.enabled&&(o.shadowMap.needsUpdate=!0),m--),o.render(a,c)}function K(){if(d.clear(),ct&&ct.disconnect(),typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",X),window.removeEventListener("orientationchange",X)),x&&x.dispose(),u.shadow&&u.shadow.map&&u.shadow.map.dispose(),o){o.dispose();const Y=o.domElement;Y&&Y.parentNode&&Y.parentNode.removeChild(Y)}}return z(!0),y(1),M}function C1({cap:i,min:t,get:e,set:n,onSlowStart:s=null}){const r={winT:0,winN:0,slowT:0,slowSum:0,fastT:0,age:0,checkT:0,checkN:0,checked:!1,probing:!1,probeT:0,probeSum:0,prevPr:0,prevAvg:0,capped:!1},o=new Map;function a(c){if(!(c>0)||c>.25||(r.age+=c,!r.checked&&r.age>1&&(r.checkT+=c,r.checkN++,r.checkT>=3&&(r.checked=!0,r.checkN/r.checkT<40&&s&&s())),r.winT+=c,r.winN++,r.winT<.5))return;const l=r.winT/r.winN,u=r.winT;if(r.winT=0,r.winN=0,r.probing){r.probeT+=u,r.probeSum+=l*u,r.probeT>=1.5&&(r.probing=!1,r.probeSum/r.probeT>r.prevAvg*.92&&(n(r.prevPr),o.set(r.prevPr,Math.max(0,(o.get(r.prevPr)||1)-1)),r.capped=!0));return}if(r.capped)if(l<.0172)r.capped=!1;else return;l>.018?(r.slowT+=u,r.slowSum+=l*u,r.fastT=0):(r.slowT=0,r.slowSum=0),l<.0172?r.fastT+=u:r.fastT=0;const f=e();if(r.slowT>=1&&f>t)o.set(f,(o.get(f)||0)+1),r.prevPr=f,r.prevAvg=r.slowSum/r.slowT,n(Math.max(t,f-.25)),r.probing=!0,r.probeT=0,r.probeSum=0,r.slowT=0,r.slowSum=0,r.fastT=0;else if(r.fastT>=5&&f<i){const d=Math.min(i,f+.25);(o.get(d)||0)<2&&n(d),r.fastT=0}}return{frame:a,state:r}}const Ri=Dr.degToRad(60),Rs=Math.tan(Dr.degToRad(jo/2)),ri=kt.R,R1=22,vo=1.6,xf=.8,Za=2.6,_o=64,P1={top:76},vf=.3,_f=10,Mf=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},L1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,on=(i,t)=>Number.isFinite(i)?i:t;function es(i,t,e){if(!i)return 0;const n=i.grid;if(!n||!n.height){const m=i.heightAt?i.heightAt(t,e):0;return Number.isFinite(m)?m:0}const s=n.cols,r=n.rows;let o=(t-n.x0)/n.cell,a=(e-n.z0)/n.cell;if(o!==o||a!==a)return 0;o=o<0?0:o>s-1.000001?s-1.000001:o,a=a<0?0:a>r-1.000001?r-1.000001:a;const c=o|0,l=a|0,u=o-c,f=a-l,d=n.height,h=l*s+c,g=d[h]+(d[h+1]-d[h])*u,x=d[h+s]+(d[h+s+1]-d[h+s])*u;return g+(x-g)*f}class ui{constructor(t){this.tx=0,this.ty=0,this.tz=0,this.d=t,this.valid=!1}}class Mo{constructor(){this.v=0}}class I1{constructor(){this.x=new Mo,this.y=new Mo,this.z=new Mo,this.d=new Mo}}class D1{constructor(){this.x=0,this.z=0,this.has=!1,this.lastX=0,this.lastZ=0,this.vx=0,this.vz=0,this.fresh=!1}}class z1{constructor(){this.d=0,this.aspect=0,this.yaw=NaN,this.tx=NaN,this.ty=NaN,this.tz=NaN,this.dd=NaN}}class N1{constructor(){this.active=!1,this.t=0,this.from=new ui(60),this.to=new ui(30),this.resolve=null}}class U1{constructor(){this.dt=0,this.T=.25}}class F1{constructor(){this.x0=-1,this.x1=1,this.y0=-1,this.y1=1}}class O1{constructor(){this.top=P1.top,this.right=0,this.bottom=0,this.left=0}}class k1{constructor(){this.x0=0,this.x1=0,this.y0=0,this.y1=0}}function B1(i){const t=i.camera,e=new Mn(jo,t.aspect,.1,4e3),n=new ui(40),s=new ui(40),r=new I1,o=new ui(60),a=new ui(30),c=new ui(30),l=new ui(30),u=new N1,f=new D1,d=new Float64Array(_o),h=new Float64Array(_o),g=new Float64Array(_o);let x=0;const m=new et,p=new et,M=new et,_=new Tn,w={x:0,z:0};let T=null,b=0,E=0,v="idle",S=!1,y=!1,C=null,z=i.yaw||0;const U=new z1,X=new O1,ct=new F1,st=new ui(30),xt=new U1,$=(q,G)=>es(T,q,G),W=()=>Math.max(1,i.size.h||1),D=()=>Math.max(1,i.size.w||1);function K(){const q=D(),G=W(),it=Math.max(10,.03*Math.min(q,G));let yt=X.left,ft=X.right,dt=X.top,F=X.bottom;const at=q*(1-vf)-2*it;if(yt+ft>at){const O=Math.max(0,at)/(yt+ft);yt*=O,ft*=O}const Tt=G*(1-vf)-2*it;if(dt+F>Tt){const O=Math.max(0,Tt)/(dt+F);dt*=O,F*=O}return ct.x0=-1+2*(yt+it)/q,ct.x1=1-2*(ft+it)/q,ct.y1=1-2*(dt+it)/G,ct.y0=-1+2*(F+it)/G,ct}function Y(q,G,it,yt,ft){const dt=Math.cos(Ri);q.position.set(G+Math.sin(z)*dt*ft,it+Math.sin(Ri)*ft,yt+Math.cos(z)*dt*ft),q.lookAt(G,it,yt),q.updateMatrixWorld(!0)}function rt(){Number.isFinite(n.tx)||(n.tx=0),Number.isFinite(n.ty)||(n.ty=0),Number.isFinite(n.tz)||(n.tz=0),n.d>=.5||(n.d=Number.isFinite(n.d)?.5:40);const q=n.d,G=Math.cos(Ri);t.position.set(n.tx+Math.sin(z)*G*q,n.ty+Math.sin(Ri)*q,n.tz+Math.cos(z)*G*q),U.yaw!==z&&(_.set(-Ri,z,0,"YXZ"),t.quaternion.setFromEuler(_),U.yaw=z),t.updateMatrixWorld(!0),U.tx=n.tx,U.ty=n.ty,U.tz=n.tz,U.dd=n.d,(Math.abs(q-U.d)>U.d*.04||t.aspect!==U.aspect)&&(U.d=q,t.near=Math.max(.3,q*.28),t.far=q*3.2+90,t.updateProjectionMatrix(),U.aspect=t.aspect)}function V(){e.fov=jo,e.aspect=t.aspect,e.near=.1,e.far=4e3,e.updateProjectionMatrix()}function Z(q,G,it){x>=_o||!Number.isFinite(q)||!Number.isFinite(it)||(d[x]=q,h[x]=on(G,0),g[x]=it,x++)}const mt=new k1;function H(q,G,it,yt){Y(e,q,G,it,yt),mt.x0=1/0,mt.x1=-1/0,mt.y0=1/0,mt.y1=-1/0;for(let ft=0;ft<x;ft++){if(m.set(d[ft],h[ft],g[ft]).applyMatrix4(e.matrixWorldInverse),m.z>-.2)return!1;m.applyMatrix4(e.projectionMatrix),m.x<mt.x0&&(mt.x0=m.x),m.x>mt.x1&&(mt.x1=m.x),m.y<mt.y0&&(mt.y0=m.y),m.y>mt.y1&&(mt.y1=m.y)}return!0}function tt(q,G,it,yt,ft){if(p.copy(q.position),M.set(G,it,.5).unproject(q).sub(p).normalize(),M.y>-1e-4)return!1;const dt=(yt-p.y)/M.y;return ft.tx=p.x+M.x*dt,ft.tz=p.z+M.z*dt,!0}function lt(q,G){if(V(),x===0)return G.tx=0,G.ty=0,G.tz=0,G.d=40,G;let it=0,yt=0,ft=0;for(let ot=0;ot<x;ot++)it+=d[ot],yt+=h[ot],ft+=g[ot];it/=x,yt/=x,ft/=x;const dt=q.x1-q.x0,F=q.y1-q.y0,at=(q.x0+q.x1)/2,Tt=(q.y0+q.y1)/2;let O=40;for(let ot=0;ot<3;ot++){let ht=1,_t=1500;for(let j=0;j<30;j++)O=(ht+_t)/2,H(it,yt,ft,O)&&mt.x1-mt.x0<=dt&&mt.y1-mt.y0<=F?_t=O:ht=O;if(O=_t,!H(it,yt,ft,O))break;const At=l;tt(e,(mt.x0+mt.x1)/2-at,(mt.y0+mt.y1)/2-Tt,yt,At)&&(it=At.tx,ft=At.tz)}return G.tx=it,G.ty=yt,G.tz=ft,G.d=O,G}function St(q,G,it){return V(),H(G.tx,G.ty,G.tz,it)?mt.x0>=q.x0-1e-6&&mt.x1<=q.x1+1e-6&&mt.y0>=q.y0-1e-6&&mt.y1<=q.y1+1e-6:!1}const zt=()=>W()*2*ri/(R1*2*Rs);function J(){if(!T)return;x=0;const q=T.bounds,G=T.ground&&T.ground.length?T.ground:null;if(G){const yt=Math.max(1,Math.ceil(G.length/40));for(let ft=0;ft<G.length;ft+=yt)Z(G[ft].x,$(G[ft].x,G[ft].z),G[ft].z)}Z(q.minx,$(q.minx,q.minz),q.minz),Z(q.maxx,$(q.maxx,q.minz),q.minz),Z(q.minx,$(q.minx,q.maxz),q.maxz),Z(q.maxx,$(q.maxx,q.maxz),q.maxz);const it=T.cup;Z(it.x,$(it.x,it.z)+Za,it.z),lt(K(),o)}function vt(q,G,it,yt,ft=0){for(let dt=0;dt<yt;dt++){const F=dt/yt*Math.PI*2,at=q+Math.cos(F)*it,Tt=G+Math.sin(F)*it;Z(at,$(at,Tt)+ft,Tt)}}function k(q,G){if(!q||q.length<2)return;const it=q.length>>1,yt=Math.max(1,Math.ceil(it/G));for(let ft=0;ft<it;ft+=yt)Z(q[2*ft],$(q[2*ft],q[2*ft+1]),q[2*ft+1]);Z(q[2*it-2],$(q[2*it-2],q[2*it-1]),q[2*it-1])}function nt(q,G,it,yt){x=0;const ft=$(q,G);if(vt(q,G,it+ri*1.15,24,ri),vt(q,G,it,12,2*ri),Z(q,ft+2*ri,G),Z(q,ft,G),yt){const dt=$(yt.x,yt.z);Z(yt.x,dt+2*ri,yt.z),vt(yt.x,yt.z,ri*1.1,6,ri)}}function Bt(q,G,it,yt,ft,dt){const F=K();nt(q,G,it,yt);const at=x;if(ft(),lt(F,dt),T&&T.cup){const ot=T.cup,ht=Math.sqrt((ot.x-q)*(ot.x-q)+(ot.z-G)*(ot.z-G));let _t=Mf(18,8,ht);if(_t>0){const At=x;vt(ot.x,ot.z,kt.HOLE_R+.6,8,0),Z(ot.x,$(ot.x,ot.z)+Za,ot.z),lt(F,c),x=at;let j=!1;for(let pt=0;pt<4&&!j;pt++,_t*=.5)jt(l,dt,c,_t),j=St(F,l,l.d);j&&Q(dt,l),x=At}}const Tt=T&&T.camera&&T.camera.zoom>0?T.camera.zoom:1;dt.d=Math.max(8,dt.d/Tt);const O=Math.max(8,zt());if(nt(q,G,it,yt),lt(F,c),c.d>O)return Q(dt,c),dt;if(dt.d>O&&(dt.d=O),!St(F,dt,dt.d)){const ot=dt.tx,ht=dt.ty,_t=dt.tz;let At=!1;for(let j=1;j<=8;j++){const pt=j/8;if(l.tx=ot+(c.tx-ot)*pt,l.ty=ht+(c.ty-ht)*pt,l.tz=_t+(c.tz-_t)*pt,St(F,l,dt.d)){At=!0;break}}At?(dt.tx=l.tx,dt.ty=l.ty,dt.tz=l.tz):Q(dt,c)}return dt}function jt(q,G,it,yt){q.tx=G.tx+(it.tx-G.tx)*yt,q.ty=G.ty+(it.ty-G.ty)*yt,q.tz=G.tz+(it.tz-G.tz)*yt,q.d=Math.exp(Math.log(G.d)+(Math.log(it.d)-Math.log(G.d))*yt)}function Ht(q){const G=T.eight,it=T.cup;let yt=it.x-G.x,ft=it.z-G.z;const dt=Math.sqrt(yt*yt+ft*ft)||1;yt/=dt,ft/=dt;const F=Math.min(14,dt),at=T.placeR||4,Tt=Math.min(.6*at,2.5);return w.x=G.x-yt*Tt,w.z=G.z-ft*Tt,Bt(G.x,G.z,at,w,()=>{for(let O=1;O<=4;O++){const ot=G.x+yt*F*(O/4),ht=G.z+ft*F*(O/4);Z(ot,$(ot,ht),ht)}},q)}function Kt(q,G){const it=q&&q.world,yt=it&&it.balls&&it.balls[1];if(!yt)return Ht(G);const ft=q.level&&q.level.placeR||it.placeR||4,dt=typeof q.guide=="function"?q.guide():null;let F=null;return q.intent&&Number.isFinite(q.intent.x)&&Number.isFinite(q.intent.z)&&(w.x=q.intent.x,w.z=q.intent.z,F=w),Bt(yt.x,yt.z,ft,F,()=>{dt&&dt.cue&&k(dt.cue.points,10),dt&&dt.eight&&k(dt.eight.points,14)},G)}function Xt(q){if(!T)return;const G=T.bounds,it=_f;q.tx=Math.min(G.maxx+it,Math.max(G.minx-it,on(q.tx,0))),q.tz=Math.min(G.maxz+it,Math.max(G.minz-it,on(q.tz,0))),q.d=Math.min(A(),Math.max(R(),on(q.d,40)))}const A=()=>Math.max(10,o.d*1.1),R=()=>Math.max(6,.6*(a.valid?a.d:o.d*.5));function Q(q,G){q.tx=G.tx,q.ty=G.ty,q.tz=G.tz,q.d=G.d}function ut(q){Q(n,q),Q(s,q),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,rt()}function wt(){if(!u.active)return;u.active=!1,Q(n,u.to),Q(s,a.valid?a:u.to),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,v=S?"overview":"play",S&&Q(s,o);const q=u.resolve;u.resolve=null,q&&q()}i.onResize(()=>{const q=i.yaw||0,G=q!==z;if(z=q,rt(),!!T){if(J(),u.active){Q(u.from,o),Ht(u.to),a.valid&&C&&(Kt(C,a),Q(u.to,a));return}C&&!y&&(Kt(C,a),a.valid=!0),S||v==="overview"?Q(s,o):v==="play"&&!y&&a.valid&&Q(s,a),Xt(s),G&&ut(s)}});const Et={get userMoved(){return y},set userMoved(q){y=!!q},get level(){return T},get mode(){return v},get overviewOn(){return S},setInsets(q){const G=F=>Number.isFinite(F)&&F>0?F:0,it=G(q&&q.top),yt=G(q&&q.right),ft=G(q&&q.bottom),dt=G(q&&q.left);if(!(it===X.top&&yt===X.right&&ft===X.bottom&&dt===X.left)&&(X.top=it,X.right=yt,X.bottom=ft,X.left=dt,!!T)){if(J(),u.active){a.valid&&C?(Kt(C,a),Q(u.to,a)):Ht(u.to);return}y||(C&&(Kt(C,a),Nt(a),a.valid=!0),S||v==="overview"?Q(s,o):v==="play"&&a.valid?Q(s,a):v==="cup"&&Et.frameCup())}},get insets(){return{top:X.top,right:X.right,bottom:X.bottom,left:X.left}},setLevel(q){if(u.active&&wt(),T=q||null,b=0,E=0,T&&T.grid&&T.grid.height){const G=T.grid.height;b=1/0,E=-1/0;for(let it=0;it<G.length;it++)G[it]<b&&(b=G[it]),G[it]>E&&(E=G[it]);Number.isFinite(b)||(b=0,E=0)}y=!1,S=!1,C=null,a.valid=!1,f.has=!1,z=i.yaw||0,i.setShadowBounds&&i.setShadowBounds(T),T&&(J(),v="overview",ut(o))},intro(){return u.active&&wt(),T?(J(),Q(u.from,o),Ht(u.to),u.t=0,u.active=!0,v="intro",ut(o),new Promise(q=>{u.resolve=q})):Promise.resolve()},skipIntro(){wt()},frameShot(q){if(T){if(C=q||C,Kt(C,a),Nt(a),a.valid=!0,y=!1,f.has=!1,u.active){Q(u.to,a);return}S||(v="play",Q(s,a))}},follow(q,G){!T||u.active||S||y||!Number.isFinite(q)||!Number.isFinite(G)||((v!=="follow"||!f.has)&&(f.lastX=q,f.lastZ=G,f.vx=0,f.vz=0),v="follow",f.x=q,f.z=G,f.has=!0,f.fresh=!0)},frameCup(){if(!T||u.active)return;x=0;const q=T.cup;vt(q.x,q.z,kt.HOLE_R+2,12),Z(q.x,$(q.x,q.z)+Za,q.z),lt(K(),s),s.d=Math.max(s.d,10),Xt(s),v="cup"},overview(q){T&&(S=!!q,!u.active&&(y=!1,S?(J(),v="overview",Q(s,o)):a.valid&&(C&&C.state==="ready"&&Kt(C,a),v="play",Q(s,a))))},zoomBy(q,G,it){if(!T||!(q>0)||!Number.isFinite(q))return;u.active&&wt();const yt=D(),ft=W(),dt=Number.isFinite(G)?G/yt*2-1:0,F=Number.isFinite(it)?1-it/ft*2:0;rt(),V(),Y(e,n.tx,n.ty,n.tz,n.d);const at=c,Tt=tt(e,dt,F,n.ty,at),O=at.tx,ot=at.tz,ht=Math.min(A(),Math.max(R(),n.d/q));Y(e,n.tx,n.ty,n.tz,ht);const _t=tt(e,dt,F,n.ty,at);n.d=ht,Tt&&_t&&(n.tx+=O-at.tx,n.tz+=ot-at.tz),Xt(n),y=!0,ut(n)},panBy(q,G){if(!T||!Number.isFinite(q)||!Number.isFinite(G))return;u.active&&wt();const it=W()/(2*Math.max(1,n.d)*Rs),yt=Math.cos(z),ft=-Math.sin(z),dt=-Math.sin(z),F=-Math.cos(z),at=Math.sin(Ri),Tt=-q/it,O=G/(it*at);n.tx+=yt*Tt+dt*O,n.tz+=ft*Tt+F*O,Xt(n),y=!0,ut(n)},update(q){if(q=Number.isFinite(q)&&q>0?Math.min(q,.1):0,u.active){u.t+=q;const it=u.from,yt=u.to;if(u.t<vo){const ft=u.t/vo;n.tx=it.tx,n.ty=it.ty,n.tz=it.tz,n.d=it.d*(1.04-.04*(ft*(2-ft)))}else{const ft=L1(Math.min(1,(u.t-vo)/xf));n.tx=it.tx+(yt.tx-it.tx)*ft,n.ty=it.ty+(yt.ty-it.ty)*ft,n.tz=it.tz+(yt.tz-it.tz)*ft,n.d=Math.exp(Math.log(it.d)+(Math.log(yt.d)-Math.log(it.d))*ft)}rt(),u.t>=vo+xf&&wt();return}xt.dt=q;let G=.25;v==="follow"&&f.has&&!y&&!S?(G=.35,Ft()):v==="overview"?G=.3:v==="cup"&&(G=.45),f.fresh=!1,!y&&q>0&&(xt.T=G,Wt()),!(n.tx===U.tx&&n.ty===U.ty&&n.tz===U.tz&&n.d===U.dd&&z===U.yaw)&&rt()},screenToGround(q,G){if(!Number.isFinite(q)||!Number.isFinite(G))return null;const it=q/D()*2-1,yt=1-G/W()*2;if(p.copy(t.position),M.set(it,yt,.5).unproject(t).sub(p).normalize(),!(M.y<-1e-5))return null;const ft=E+.01,dt=b-.01;let F=Math.max(0,(ft-p.y)/M.y);const at=Math.max(F,(dt-p.y)/M.y),Tt=Lt=>p.y+M.y*Lt-$(p.x+M.x*Lt,p.z+M.z*Lt);if(!T||at-F<1e-6){const Lt=E===b?(E-p.y)/M.y:F;return{x:p.x+M.x*Lt,z:p.z+M.z*Lt}}const O=Math.sqrt(M.x*M.x+M.z*M.z),ot=Math.min(400,Math.max(1,Math.ceil((at-F)*O/.2))),ht=(at-F)/ot;let _t=Tt(F),At=F,j=_t<=0;if(!j)for(let Lt=1;Lt<=ot;Lt++){At=F+ht*Lt;const qt=Tt(At);if(qt<=0){j=!0;break}F=At,_t=qt}j||(At=at);let pt=F,Rt=At;for(let Lt=0;Lt<24&&Rt-pt>1e-5;Lt++){const qt=(pt+Rt)/2;Tt(qt)>0?pt=qt:Rt=qt}const It=(pt+Rt)/2;return{x:p.x+M.x*It,z:p.z+M.z*It}},groundToScreen(q,G,it,yt){const ft=yt||{x:0,y:0,onScreen:!1};m.set(on(q,0),on(G,0),on(it,0)).applyMatrix4(t.matrixWorldInverse);const dt=m.z>-t.near;dt&&(m.z=-t.near),m.applyMatrix4(t.projectionMatrix);const F=D(),at=W();let Tt=(m.x+1)/2*F,O=(1-m.y)/2*at;return dt&&(Tt=F-Tt,O=at-O),ft.x=on(Tt,F/2),ft.y=on(O,at/2),ft.onScreen=!dt&&ft.x>=0&&ft.x<=F&&ft.y>=0&&ft.y<=at,ft},pxPerMetre(q,G){const it=$(on(q,0),on(G,0))+ri,yt=t.position.distanceTo(m.set(on(q,0),it,on(G,0))),ft=W()/(2*Math.max(.01,yt)*Rs);return Number.isFinite(ft)?ft:1}};function Wt(){const q=xt.dt;let G=2/Math.max(1e-4,xt.T),it=G*q,yt=1/(1+it+.48*it*it+.235*it*it*it),ft=n.tx-s.tx,dt=(r.x.v+G*ft)*q;r.x.v=(r.x.v-G*dt)*yt,n.tx=s.tx+(ft+dt)*yt,ft=n.ty-s.ty,dt=(r.y.v+G*ft)*q,r.y.v=(r.y.v-G*dt)*yt,n.ty=s.ty+(ft+dt)*yt,ft=n.tz-s.tz,dt=(r.z.v+G*ft)*q,r.z.v=(r.z.v-G*dt)*yt,n.tz=s.tz+(ft+dt)*yt,G=2/Math.max(1e-4,xt.T*1.6),it=G*q,yt=1/(1+it+.48*it*it+.235*it*it*it);const F=Math.log(Math.max(.5,s.d));ft=Math.log(Math.max(.5,n.d))-F,dt=(r.d.v+G*ft)*q,r.d.v=(r.d.v-G*dt)*yt,n.d=Math.exp(F+(ft+dt)*yt),Number.isFinite(n.tx+n.ty+n.tz+n.d)||(Q(n,s),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0),Math.abs(n.tx-s.tx)+Math.abs(n.ty-s.ty)+Math.abs(n.tz-s.tz)<1e-4&&Math.abs(n.d-s.d)<1e-4*s.d&&Math.abs(r.x.v)+Math.abs(r.y.v)+Math.abs(r.z.v)+Math.abs(r.d.v)<1e-4&&(Q(n,s),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0)}function Ft(){const q=xt.dt;if(q>0&&f.fresh){const Qt=(f.x-f.lastX)/q,ge=(f.z-f.lastZ)/q,re=1-Math.exp(-q/.25);Number.isFinite(Qt)&&Number.isFinite(ge)&&Math.abs(Qt)<80&&Math.abs(ge)<80&&(f.vx+=(Qt-f.vx)*re,f.vz+=(ge-f.vz)*re)}f.lastX=f.x,f.lastZ=f.z;const G=a.valid?a.d:n.d;let it=f.vx*.3,yt=f.vz*.3;const ft=Math.sqrt(it*it+yt*yt);ft>3.5&&(it*=3.5/ft,yt*=3.5/ft);const dt=f.x+it,F=f.z+yt,at=K();V(),Y(e,s.tx,s.ty,s.tz,Math.max(1,s.d));let Tt=0,O=0;tt(e,(at.x0+at.x1)/2,(at.y0+at.y1)/2,s.ty,st)&&(Tt=st.tx-s.tx,O=st.tz-s.tz);const ot=W()/(2*Math.max(1,s.d)*Rs),ht=.125*(at.y1-at.y0)*.5*W()/ot,_t=Math.cos(z),At=-Math.sin(z),j=-Math.sin(z),pt=-Math.cos(z);let Rt=dt-(s.tx+Tt),It=F-(s.tz+O);const Lt=Rt*_t+It*At,qt=Rt*j+It*pt,Yt=ht/Math.sin(Ri),le=Lt>ht?Lt-ht:Lt<-ht?Lt+ht:0,se=qt>Yt?qt-Yt:qt<-Yt?qt+Yt:0;let ae=s.tx+_t*le+j*se,pe=s.tz+At*le+pt*se,he=G;if(T&&T.cup){const Qt=T.cup,ge=Math.sqrt((Qt.x-f.x)*(Qt.x-f.x)+(Qt.z-f.z)*(Qt.z-f.z)),re=Mf(15,6,ge);if(re>0){const Te=(f.x+Qt.x)/2-Tt,en=(f.z+Qt.z)/2-O;Rt=Qt.x-f.x,It=Qt.z-f.z;const Fe=Math.abs(Rt*_t+It*At)/2+2.5,nn=Math.abs(Rt*j+It*pt)/2+2.5,We=t.aspect>0?t.aspect:16/9,hn=Math.max(.1,(at.x1-at.x0)/2),I=Math.max(.1,(at.y1-at.y0)/2),L=Math.max(Fe/(Rs*We*hn*.9),nn*Math.sin(Ri)/(Rs*I*.9));ae+=(Te-ae)*re,pe+=(en-pe)*re,he=Math.min(Math.max(G,G+(L-G)*re),Math.max(G,zt()))}}s.tx=ae,s.tz=pe,s.ty=$(f.x,f.z),s.d=he,Xt(s)}function Nt(q){if(!T)return;const G=T.bounds,it=_f;q.tx=Math.min(G.maxx+it,Math.max(G.minx-it,on(q.tx,0))),q.tz=Math.min(G.maxz+it,Math.max(G.minz-it,on(q.tz,0))),q.d=Math.min(A(),Math.max(6,on(q.d,30)))}return rt(),Et}function H1(i){let t=2166136261;for(let n=0;n<i.length;n++)t^=i.charCodeAt(n),t=Math.imul(t,16777619)>>>0;let e=t||1;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const ee=i=>new ce(i),ve=(i,t)=>new ce(i.r*t,i.g*t,i.b*t),ko=(i,t,e)=>new ce(i.r+(t.r-i.r)*e,i.g+(t.g-i.g)*e,i.b+(t.b-i.b)*e);function Sn(i,t,e,n="after"){if(!i.includes(t))throw new Error("course shader: injection target missing: "+t);return i.replace(t,n==="after"?t+`
`+e:n==="replace"?e:e+`
`+t)}const Bo=i=>{const t=new Float64Array(i.length*2);for(let e=0;e<i.length;e++)t[e*2]=i[e].x,t[e*2+1]=i[e].z;return t};function pl(i,t,e){let n=!1;const s=i.length;for(let r=0,o=s-2;r<s;o=r,r+=2){const a=i[r],c=i[r+1],l=i[o],u=i[o+1];c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(n=!n)}return n}function yf(i,t,e,n,s){const r=i.length/2,o=t?r:r-1;let a=1/0;for(let c=0;c<o;c++){const l=(c+1)%r,u=i[c*2],f=i[c*2+1],d=i[l*2]-u,h=i[l*2+1]-f,g=d*d+h*h||1e-12;let x=((e-u)*d+(n-f)*h)/g;x=x<0?0:x>1?1:x;const m=u+d*x,p=f+h*x,M=(m-e)*(m-e)+(p-n)*(p-n);M<a&&(a=M,s.x=m,s.z=p,s.seg=c,s.t=x)}return s.d=Math.sqrt(a),s}function G1(i,t,e,n,s,r){const o=e-i,a=n-t,c=o*o+a*a||1e-12;let l=((s-i)*o+(r-t)*a)/c;l=l<0?0:l>1?1:l;const u=i+o*l-s,f=t+a*l-r;return Math.sqrt(u*u+f*f)}function dd(i,t=6){const e=Math.max(2,Math.ceil(Math.abs(i.to-i.from)/t)),n=[];for(let s=0;s<=e;s++){const r=(i.from+(i.to-i.from)*s/e)*Math.PI/180;n.push({x:i.x+Math.cos(r)*i.r,z:i.z-Math.sin(r)*i.r})}return n}function V1(i){const t=Bo(i.ground),e=t.length/2;let n=0;for(let p=0;p<e;p++){const M=(p+1)%e;n+=t[p*2]*t[M*2+1]-t[M*2]*t[p*2+1]}const s=n>0?1:-1,r=new Float64Array(e*2),o=new Float64Array(e);for(let p=0;p<e;p++){const M=(p+1)%e,_=t[M*2]-t[p*2],w=t[M*2+1]-t[p*2+1],T=Math.hypot(_,w)||1e-9;o[p]=T,r[p*2]=s*w/T,r[p*2+1]=-s*_/T}const a=[];for(const p of i.walls)a.push({poly:Bo(p.pts),closed:p.closed});for(const p of i.arcsRender||[])a.push({poly:Bo(dd(p)),closed:!1});const c={d:0,x:0,z:0,seg:0,t:0},l=.25,u=new Int32Array(e+1),f=[];for(let p=0;p<e;p++){u[p]=f.length;const M=Math.max(1,Math.round(o[p]/l));for(let _=0;_<=M;_++){const w=_/M,T=t[p*2]+(t[(p+1)%e*2]-t[p*2])*w,b=t[p*2+1]+(t[(p+1)%e*2+1]-t[p*2+1])*w;let E=1/0;for(const v of a)yf(v.poly,v.closed,T,b,c),c.d<E&&(E=c.d);f.push(E<.3?1:0)}}u[e]=f.length;const d=Uint8Array.from(f);let h=!1,g=!1;for(let p=0;p<d.length;p++)d[p]?g=!0:h=!0;const x={d:0,x:0,z:0,seg:0,t:0};return{poly:t,apronW:h?.75:3,count:e,segN:r,segLen:o,anyOpen:h,anyWalled:g,inside:(p,M)=>pl(t,p,M),nearest:(p,M,_=x)=>yf(t,!0,p,M,_),walled(p,M){const _=u[p],w=u[p+1]-1-_;return d[_+Math.round(M*w)]===1}}}const yo=new et,So=new et,bo=new et,an=new et,Sf=new et,bf=new et;class W1{constructor(){this.pos=[],this.nor=[],this.col=[],this.leaf=[]}get triangles(){return this.pos.length/9}_v(t,e,n,s,r,o,a,c){this.pos.push(t,e,n),this.nor.push(s,r,o),this.col.push(a.r,a.g,a.b),this.leaf.push(c)}tri(t,e,n,s,r=0,o=null){yo.set(t[0],t[1],t[2]),So.set(e[0],e[1],e[2]),bo.set(n[0],n[1],n[2]),Sf.subVectors(So,yo),bf.subVectors(bo,yo),an.crossVectors(Sf,bf);const a=an.length();if(a<1e-9)return;an.multiplyScalar(1/a);let c=yo,l=So,u=bo;o&&an.x*o[0]+an.y*o[1]+an.z*o[2]<0&&(l=bo,u=So,an.negate()),this._v(c.x,c.y,c.z,an.x,an.y,an.z,s,r),this._v(l.x,l.y,l.z,an.x,an.y,an.z,s,r),this._v(u.x,u.y,u.z,an.x,an.y,an.z,s,r)}quad(t,e,n,s,r,o=0,a=null){this.tri(t,e,n,r,o,a),this.tri(t,n,s,r,o,a)}geo(t,e,{leaf:n=0,flat:s=!0,matrix:r=null}={}){const o=t.index?t.toNonIndexed():t;(s||!o.attributes.normal)&&o.computeVertexNormals();let a=o.attributes.position.array;const c=a.length/9,l=new Array(c);for(let f=0;f<c;f++){const d=f*9,h=a[d+3]-a[d],g=a[d+4]-a[d+1],x=a[d+5]-a[d+2],m=a[d+6]-a[d],p=a[d+7]-a[d+1],M=a[d+8]-a[d+2],_=g*M-x*p,w=x*m-h*M,T=h*p-g*m;if(_*_+w*w+T*T<1e-14){l[f]=null;continue}l[f]=e((a[d]+a[d+3]+a[d+6])/3,(a[d+1]+a[d+4]+a[d+7])/3,(a[d+2]+a[d+5]+a[d+8])/3,f)}r&&o.applyMatrix4(r),a=o.attributes.position.array;const u=o.attributes.normal.array;for(let f=0;f<c;f++){const d=l[f];if(!d)continue;const h=f*9;let g=!0;for(let x=0;x<9;x++)(!Number.isFinite(u[h+x])||!Number.isFinite(a[h+x]))&&(g=!1);if(g)for(let x=0;x<9;x+=3)this._v(a[h+x],a[h+x+1],a[h+x+2],u[h+x],u[h+x+1],u[h+x+2],d,n)}o!==t&&o.dispose(),t.dispose()}build(){const t=new Ve;return t.setAttribute("position",new _e(this.pos,3)),t.setAttribute("normal",new _e(this.nor,3)),t.setAttribute("color",new _e(this.col,3)),t.setAttribute("aLeaf",new _e(this.leaf,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const X1=new ye,wf=new fs,Ef=new et,Ja=new et,q1=new et(0,1,0);function qe(i,t,e,n=0,s=1){return Ef.set(i,t,e),wf.setFromAxisAngle(q1,n),Array.isArray(s)?Ja.set(s[0],s[1],s[2]):Ja.set(s,s,s),X1.compose(Ef,wf,Ja).clone()}const Y1={fairway:1,green:2,rough:3,sand:4,water:5,ice:6},K1=[1/16,4/16,6/16,4/16,1/16],wo=[0,1/4,2/4,1/4,0];function ji(i,t,e,n=K1){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=a+l<0?0:a+l>=t?t-1:a+l;c+=i[o*t+u]*n[l+2]}s[o*t+a]=c}for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=o+l<0?0:o+l>=e?e-1:o+l;c+=s[u*t+a]*n[l+2]}r[o*t+a]=c}return r}function $1(i,t,e,n){const r=new Float32Array(t*e);for(let a=0;a<r.length;a++)r[a]=i[a]?1e9:0;const o=Math.SQRT2;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c>0&&(u=Math.min(u,r[l-1]+1)),a>0&&(u=Math.min(u,r[l-t]+1),c>0&&(u=Math.min(u,r[l-t-1]+o)),c<t-1&&(u=Math.min(u,r[l-t+1]+o))),r[l]=u}for(let a=e-1;a>=0;a--)for(let c=t-1;c>=0;c--){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c<t-1&&(u=Math.min(u,r[l+1]+1)),a<e-1&&(u=Math.min(u,r[l+t]+1),c<t-1&&(u=Math.min(u,r[l+t+1]+o)),c>0&&(u=Math.min(u,r[l+t-1]+o))),r[l]=u}for(let a=0;a<r.length;a++)r[a]=r[a]>=1e9?50:r[a]>0?(r[a]-.5)*n:0;return r}function Tf(i,t,e){const n=new Dl(i,t,e,Dn,Jn);return n.flipY=!1,n.magFilter=wn,n.minFilter=wn,n.generateMipmaps=!1,n.wrapS=di,n.wrapT=di,n.colorSpace=fi,n.needsUpdate=!0,n}function j1(i,t,e){const{cols:n,rows:s,cell:r,x0:o,z0:a,surface:c}=i.grid,l=n*s;let u=Uint8Array.from(c);for(let D=0;D<3;D++){const K=u;u=Uint8Array.from(K);for(let Y=0;Y<s;Y++)for(let rt=0;rt<n;rt++){const V=Y*n+rt;if(K[V]!==0)continue;const Z=rt>0&&K[V-1]||rt<n-1&&K[V+1]||Y>0&&K[V-n]||Y<s-1&&K[V+n]||0;u[V]=Z}}const f=new Float32Array(l),d=new Float32Array(l),h=new Float32Array(l),g=new Float32Array(l);let x=!1;const m=(D,K,Y)=>{K===2?f[D]+=Y:K===4?d[D]+=Y:K===5&&(h[D]+=Y),g[D]+=(K===3?1:K===6?0:.5)*Y},p=(i.zones||[]).map(D=>({code:Y1[D.surface]||1,poly:Bo(D.pts)})),M=t.poly,_=4;for(let D=0;D<s;D++)for(let K=0;K<n;K++){const Y=D*n+K,rt=u[Y];c[Y]===5&&(x=!0);let V=!1;for(let H=-1;H<=1&&!V;H++){const tt=D+H;if(!(tt<0||tt>=s))for(let lt=-1;lt<=1;lt++){const St=K+lt;if(St>=0&&St<n&&u[tt*n+St]!==rt){V=!0;break}}}if(!V){m(Y,rt,1);continue}const Z=o+K*r,mt=a+D*r;for(let H=0;H<_;H++)for(let tt=0;tt<_;tt++){const lt=Z+((H+.5)/_-.5)*r,St=mt+((tt+.5)/_-.5)*r;let zt=rt;if(pl(M,lt,St)){zt=1;for(const J of p)pl(J.poly,lt,St)&&(zt=J.code)}m(Y,zt,1/(_*_))}}const w=ji(f,n,s,wo),T=ji(d,n,s,wo),b=ji(h,n,s,wo),E=ji(g,n,s,wo),v=ji(ji(f,n,s),n,s),S=new Uint8Array(l);for(let D=0;D<l;D++)S[D]=c[D]===5?1:0;const y=$1(S,n,s,r),C=new Float32Array(l),z=.55,U=(D,K,Y,rt,V)=>{const Z=Math.max(0,Math.floor((D-o)/r)),mt=Math.min(n-1,Math.ceil((K-o)/r)),H=Math.max(0,Math.floor((Y-a)/r)),tt=Math.min(s-1,Math.ceil((rt-a)/r));for(let lt=H;lt<=tt;lt++)for(let St=Z;St<=mt;St++){const zt=V(o+St*r,a+lt*r),J=lt*n+St;zt>C[J]&&(C[J]=zt)}};for(const D of e)if(D.r!==void 0){const K=D.r+z;U(D.x-K,D.x+K,D.z-K,D.z+K,(Y,rt)=>{const V=Math.hypot(Y-D.x,rt-D.z)-D.r;return V<0?1:Math.max(0,1-V/z)})}else{const K=D.hw+z;U(Math.min(D.ax,D.bx)-K,Math.max(D.ax,D.bx)+K,Math.min(D.az,D.bz)-K,Math.max(D.az,D.bz)+K,(Y,rt)=>{const V=G1(D.ax,D.az,D.bx,D.bz,Y,rt)-D.hw;return V<0?1:Math.max(0,1-V/z)})}const X=new Float32Array(l);if(t.anyOpen)for(let D=2;D<s-2;D++)for(let K=2;K<n-2;K++){const Y=D*n+K;if(c[Y]===0)continue;let rt=!1;for(let Z=-2;Z<=2&&!rt;Z++)for(let mt=-2;mt<=2;mt++)if(c[Y+Z*n+mt]===0){rt=!0;break}if(!rt)continue;const V=t.nearest(o+K*r,a+D*r);V.d<.7&&!t.walled(V.seg,V.t)&&(X[Y]=1)}if(t.anyOpen)for(let D=0;D<2;D++){const K=Float32Array.from(X);for(let Y=1;Y<s-1;Y++)for(let rt=1;rt<n-1;rt++){const V=Y*n+rt;c[V]!==0||K[V]||(K[V-1]||K[V+1]||K[V-n]||K[V+n])&&(X[V]=1)}}const ct=t.anyOpen?ji(X,n,s):X,st=new Uint8Array(l*4),xt=new Uint8Array(l*4),$=D=>D<=0?0:D>=1?255:Math.round(D*255);for(let D=0;D<l;D++)st[D*4]=$(w[D]),st[D*4+1]=$(T[D]),st[D*4+2]=$(b[D]),st[D*4+3]=$(E[D]),xt[D*4]=$(C[D]*C[D]*(3-2*C[D])),xt[D*4+1]=$(y[D]/2.5),xt[D*4+2]=$(ct[D]),xt[D*4+3]=$(v[D]);const W=new Ie(o-r/2,a-r/2,1/(n*r),1/(s*r));return{mask:Tf(st,n,s),aux:Tf(xt,n,s),waterDist:y,hasWater:x,xf:W}}const Zo=3,Z1=.15,J1=.45,Q1=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function tM(i,t,e,n,s=[],r=1){const{cols:o,rows:a,cell:c,x0:l,z0:u,surface:f}=i.grid,d=i.heightAt,h=2,g=c*h,x=Math.floor((o-1)/h)+1,m=Math.floor((a-1)/h)+1,p=x*m,M=new Uint8Array(p),_=new Float64Array(p),w=new Float64Array(p),T=new Float64Array(p),b=new Float32Array(p),E=new Uint8Array(p);for(let j=0;j<m;j++)for(let pt=0;pt<x;pt++){const Rt=j*x+pt,It=j*h*o+pt*h,Lt=l+pt*g,qt=u+j*g;M[Rt]=f[It]!==0?1:0;const Yt=t.nearest(Lt,qt);if(_[Rt]=Yt.x,w[Rt]=Yt.z,T[Rt]=Yt.d,b[Rt]=t.walled(Yt.seg,Yt.t)?t.apronW:0,e.hasWater){const le=pt*h,se=j*h;t:for(let ae=-3;ae<=3;ae++){const pe=se+ae;if(!(pe<0||pe>=a))for(let he=-3;he<=3;he++){const Qt=le+he;if(!(Qt<0||Qt>=o)&&f[pe*o+Qt]===5){E[Rt]=1;break t}}}}}const v=[],S=[],y=[],C=[],z=[],U=[],X=[];let ct=0;const st=(j,pt,Rt,It,Lt,qt,Yt,le,se,ae)=>(v.push(j,pt,Rt),S.push(It,Lt,qt),y.push(Yt.r,Yt.g,Yt.b),C.push(le,se),z.push(ae),ct++),xt=new ce(1,1,1),$=.25,W=1,D=new Int32Array(p).fill(-1),K=[],Y=j=>{if(D[j]>=0)return D[j];const pt=j%x,Rt=(j-pt)/x;let It=l+pt*g,Lt=u+Rt*g;M[j]||(It=_[j],Lt=w[j]);const qt=Rt*h*o+pt*h;let Yt=0;M[j]&&f[qt]===5&&(Yt=J1*Q1(0,1.6,e.waterDist[qt]));const le=d(It,Lt),se=(d(It+$,Lt)-d(It-$,Lt))/(2*$),ae=(d(It,Lt+$)-d(It,Lt-$))/(2*$),pe=(d(It+W,Lt)-d(It-W,Lt))/(2*W),he=(d(It,Lt+W)-d(It,Lt-W))/(2*W),Qt=Math.hypot(pe,1,he),ge=st(It,le-Yt,Lt,-pe/Qt,1/Qt,-he/Qt,xt,Yt>0?0:-se,Yt>0?0:-ae,0);return X[ge]=Yt>0?1:0,K[ge]=E[j],D[j]=ge,ge},rt=new Map,V=2097152,Z=(j,pt,Rt)=>{const It=j<pt?j*V+pt:pt*V+j,Lt=rt.get(It);Lt?Lt[0]++:rt.set(It,[1,j,pt,Rt])},mt=[],H=[0,0],tt=(j,pt,Rt,It)=>{const Lt=v[j*3],qt=v[j*3+2],Yt=(v[pt*3]-Lt)*(v[Rt*3+2]-qt)-(v[Rt*3]-Lt)*(v[pt*3+2]-qt);if(!(Math.abs(Yt)<1e-7)&&!(Yt<0&&(H[It?0:1]++,It))){if(Yt>0){const le=pt;pt=Rt,Rt=le}U.push(j,pt,Rt),Z(j,pt,Rt),Z(pt,Rt,j),Z(Rt,j,pt),It&&It.push(j,pt,Rt)}},lt=(j,pt,Rt,It,Lt,qt,Yt,le,se,ae)=>{const pe=Lt+qt+Yt+le,he=pe===1?!!(Lt||Yt):pe===3?!!(Lt&&Yt):pe===2?!(qt&&le):!0,Qt=se(j),ge=se(pt),re=se(Rt),Te=se(It);he?(tt(Qt,ge,re,ae),tt(Qt,re,Te,ae)):(tt(Qt,ge,Te,ae),tt(ge,re,Te,ae))};for(let j=0;j<m-1;j++)for(let pt=0;pt<x-1;pt++){const Rt=j*x+pt,It=Rt+1,Lt=Rt+x+1,qt=Rt+x;(M[Rt]||M[It]||M[Lt]||M[qt])&&lt(Rt,It,Lt,qt,M[Rt],M[It],M[Lt],M[qt],Y,mt)}const St=ct,zt=new Map(rt);rt.clear();const J=ko(ee(n.rough),ee(n.hedge),.35),vt=new Int32Array(p).fill(-1),k=[],nt={d:0,x:0,z:0,seg:0,t:0},Bt=1,jt=(j,pt)=>{const Rt=t.nearest(j,pt,nt);let It=t.walled(Rt.seg,Rt.t)?Rt.d-t.apronW:1/0;for(let Lt=0;Lt<s.length;Lt++){const qt=Math.hypot(j-s[Lt].x,pt-s[Lt].z)-s[Lt].r,Yt=Math.max(Bt-Math.abs(It-qt),0)/Bt;It=Math.min(It,qt)-Yt*Yt*Bt*.25}return It},Ht=new Float64Array(p);for(let j=0;j<p;j++){if(M[j])continue;if(T[j]>t.apronW+.8&&!s.length){Ht[j]=1/0;continue}const pt=j%x;Ht[j]=jt(l+pt*g,u+(j-pt)/x*g)}const Kt=new Float64Array(p);for(let j=0;j<p;j++)Kt[j]=Math.min(1e3,M[j]?Math.max(T[j],1e-4):Math.max(Ht[j],-T[j]));const Xt=(j,pt,Rt)=>{const It=t.nearest(j,pt,nt);let Lt=j,qt=pt;Rt===0&&(Lt=It.x,qt=It.z);const Yt=Rt===0?0:Math.min(It.d,Zo),le=d(It.x,It.z)-Z1-.07*(Yt/Zo),se=st(Lt,le,qt,0,1,0,xt,0,0,1);return k[se]=Rt,se},A=j=>{if(vt[j]<0){const pt=j%x;vt[j]=Xt(l+pt*g,u+(j-pt)/x*g,1)}return vt[j]},R=new Map,Q=(j,pt)=>{const Rt=j<pt?j*p+pt:pt*p+j;let It=R.get(Rt);if(It!==void 0)return It;const Lt=Kt[j]/(Kt[j]-Kt[pt]),qt=j%x,Yt=pt%x,le=l+(qt+(Yt-qt)*Lt)*g,se=u+((j-qt)/x+((pt-Yt)/x-(j-qt)/x)*Lt)*g,ae=t.nearest(le,se,nt),pe=!t.inside(le,se)&&ae.d<.12&&-ae.d>=jt(le,se)-.05;return It=Xt(le,se,pe||t.inside(le,se)?0:2),R.set(Rt,It),It},ut=[];if(t.anyWalled||s.length)for(let j=0;j<m-1;j++)for(let pt=0;pt<x-1;pt++){const Rt=[j*x+pt,j*x+pt+1,(j+1)*x+pt+1,(j+1)*x+pt];if(Kt[Rt[0]]<0||Kt[Rt[1]]<0||Kt[Rt[2]]<0||Kt[Rt[3]]<0){ut.length=0;for(let It=0;It<4;It++){const Lt=Rt[It],qt=Rt[It+1&3];Kt[Lt]<0&&ut.push(A(Lt)),Kt[Lt]<0!=Kt[qt]<0&&ut.push(Q(Lt,qt))}for(let It=1;It<ut.length-1;It++)tt(ut[0],ut[It],ut[It+1],null)}}const wt=rt,Et=(j,pt)=>{let Rt=(j-l)/g,It=(pt-u)/g;if(Rt<0||It<0||Rt>=x-1||It>=m-1)return!1;const Lt=Math.floor(Rt),qt=Math.floor(It);Rt-=Lt,It-=qt;const Yt=qt*x+Lt,le=Kt[Yt]+(Kt[Yt+1]-Kt[Yt])*Rt,se=Kt[Yt+x]+(Kt[Yt+x+1]-Kt[Yt+x])*Rt;return le+(se-le)*It<0};let Wt=1/0;for(let j=1;j<v.length;j+=3)v[j]<Wt&&(Wt=v[j]);const Ft=Wt-1.6,Nt=new Float64Array(ct*2),q=j=>{const[,pt,Rt,It]=j,Lt=v[Rt*3]-v[pt*3],qt=v[Rt*3+2]-v[pt*3+2],Yt=Math.hypot(Lt,qt);if(Yt<.04)return null;let le=qt/Yt,se=-Lt/Yt;const ae=(v[pt*3]+v[Rt*3])/2,pe=(v[pt*3+2]+v[Rt*3+2])/2;return(v[It*3]-ae)*le+(v[It*3+2]-pe)*se>0&&(le=-le,se=-se),[le*Yt,se*Yt]},G=[];for(const j of zt.values()){if(j[0]!==1)continue;const pt=q(j);if(!pt)continue;const Rt=(v[j[1]*3]+v[j[2]*3])/2,It=(v[j[1]*3+2]+v[j[2]*3+2])/2,Lt=Math.hypot(pt[0],pt[1]),qt=!((t.anyWalled||s.length)&&Et(Rt+pt[0]/Lt*.3,It+pt[1]/Lt*.3));G.push([j[1],j[2],qt?1:0,0,pt]);for(const Yt of[j[1],j[2]])Nt[Yt*2]+=pt[0],Nt[Yt*2+1]+=pt[1]}for(const j of wt.values()){if(j[0]!==1||k[j[1]]===0&&k[j[2]]===0)continue;const pt=q(j);if(pt){G.push([j[1],j[2],1,1,pt]);for(const Rt of[j[1],j[2]])Nt[Rt*2]+=pt[0],Nt[Rt*2+1]+=pt[1]}}const it=ee(n.soilTop),yt=ko(ee(n.soilBottom),ee(n.skyBottom),.22),ft=ko(it,ee(n.soilBottom),.55),dt=[ve(ee(n.rough),.95),ve(ee(n.rough),.7)],F=[ve(J,.95),ve(J,.7)],at=[ee(me.pinWhite),ve(ee(n.rough),.7)],Tt=[[0,0,.35,.94],[.07,-.06,.8,.6],[.09,-.16,1,.1],[.02,"mid",1,-.05],[-.15,"bot",.8,-.6]];for(const[j,pt,Rt,It,Lt]of G){const qt=Math.hypot(Lt[0],Lt[1]),Yt=Lt[0]/qt,le=Lt[1]/qt,se=It?F:Rt?at:dt,ae=[[],[]],pe=Rt?Tt:[[0,0,1,0],[0,-.22,1,0]];[j,pt].forEach((he,Qt)=>{let ge=Nt[he*2],re=Nt[he*2+1];const Te=Math.hypot(ge,re);ge/=Te||1,re/=Te||1,(!(Te>1e-6)||ge*Yt+re*le<.5)&&(ge=Yt,re=le);const en=v[he*3],Fe=v[he*3+1],nn=v[he*3+2];for(let We=0;We<pe.length;We++){const[hn,I,L,P]=pe[We],B=I==="bot"?Ft:I==="mid"?Fe-.16+(Ft-(Fe-.16))*.5:Fe+I,N=Math.hypot(L,P),gt=Rt?We===0?se[0]:We===1?se[1]:We===2?it:We===3?ft:yt:it;ae[Qt].push(st(en+ge*hn,B,nn+re*hn,ge*L/N,P/N,re*L/N,gt,0,0,2))}});for(let he=0;he<pe.length-1;he++){const Qt=[ae[0][he],ae[1][he],ae[1][he+1],ae[0][he+1]],ge=v[Qt[0]*3],re=v[Qt[0]*3+1],Te=v[Qt[0]*3+2],en=v[Qt[1]*3]-ge,Fe=v[Qt[1]*3+1]-re,nn=v[Qt[1]*3+2]-Te,We=v[Qt[2]*3]-ge,hn=v[Qt[2]*3+1]-re,I=v[Qt[2]*3+2]-Te,L=Fe*I-nn*hn,P=en*hn-Fe*We,B=S[Qt[0]*3]+S[Qt[1]*3],N=S[Qt[0]*3+2]+S[Qt[1]*3+2];L*B+P*N>=0?U.push(Qt[0],Qt[1],Qt[2],Qt[0],Qt[2],Qt[3]):U.push(Qt[0],Qt[2],Qt[1],Qt[0],Qt[3],Qt[2])}}const O=new Ve;O.setAttribute("position",new _e(v,3)),O.setAttribute("normal",new _e(S,3)),O.setAttribute("color",new _e(y,3)),O.setAttribute("aFlow",new _e(C,2)),O.setAttribute("aMode",new _e(z,1)),O.setIndex(U),O.computeBoundingSphere(),O.computeBoundingBox();const{material:ot,uniforms:ht}=iM(e,n,J,r===0),_t=new De(O,ot);_t.name="course-terrain",_t.receiveShadow=!0,_t.userData.terrain={courseVerts:St,lowered:Uint8Array.from(X),folds:H};const At=[];if(e.hasWater)for(let j=0;j<mt.length;j+=3){const pt=mt[j],Rt=mt[j+1],It=mt[j+2];(K[pt]||K[Rt]||K[It])&&At.push(pt,Rt,It)}return{mesh:_t,uniforms:ht,waterTris:At,positions:v,minY:Wt,yBot:Ft}}const eM=`
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
`,nM=`
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
`;function iM(i,t,e,n){const s={uMask:{value:i.mask},uAux:{value:i.aux},uMaskXf:{value:i.xf},uTime:{value:0},uFlow:{value:0},uStripeW:{value:2.4},uGreenW:{value:.9},uContourStep:{value:.15},uDotCell:{value:1.6},uRough:{value:ee(t.rough)},uFairA:{value:ee(t.fairwayLight)},uFairB:{value:ee(t.fairwayDark)},uFringe:{value:ee(t.fringe)},uGreenA:{value:ee(t.greenLight)},uGreenB:{value:ee(t.greenDark)},uSand:{value:ee(t.sand)},uSandLip:{value:ee(t.sandLip)},uBed:{value:ee(t.pondBed)},uIce:{value:ee(t.ice)},uLine:{value:ee(me.surfaceOutline)},uApron:{value:e},uKerbA:{value:ee(me.pinWhite)},uKerbB:{value:ee(me.pinBand)}},r=new ua({color:16777215,vertexColors:!0});return n&&(r.defines={EBG_LOW:""}),r.onBeforeCompile=o=>{Object.assign(o.uniforms,s);let a=o.vertexShader;a=Sn(a,"#include <common>",`attribute vec2 aFlow;
attribute float aMode;
varying vec3 vWPos;
varying vec2 vFlow;
varying float vMode;`),a=Sn(a,"#include <begin_vertex>",`vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vFlow = aFlow;
vMode = aMode;`),o.vertexShader=a;let c=o.fragmentShader;c=Sn(c,"#include <common>",eM),c=Sn(c,"#include <color_fragment>",nM),o.fragmentShader=c},r.customProgramCacheKey=()=>n?"ebg-terrain-v1-low":"ebg-terrain-v1",{material:r,uniforms:s}}const sM=`
varying vec2 vXZ;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vXZ = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,rM=`
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
`;function oM(i,t,e,n){const s=t.waterTris;if(!e.hasWater||s.length===0)return null;const r=i.heightAt,o=t.positions,a=new Map,c=[],l=[];for(const g of s){let x=a.get(g);if(x===void 0){x=c.length/3;const m=o[g*3],p=o[g*3+2];c.push(m,r(m,p)+.03,p),a.set(g,x)}l.push(x)}const u=new Ve;u.setAttribute("position",new _e(c,3)),u.setIndex(l),u.computeBoundingSphere();const f={uMask:{value:e.mask},uAux:{value:e.aux},uMaskXf:{value:e.xf},uTime:{value:0},uLake:{value:i.round===2?1:0},uShallow:{value:ee(n.waterShallow)},uDeep:{value:ee(n.waterDeep)},uFoam:{value:ee(n.waterFoam)},uGlint:{value:ee(n.waterGlint)},uBand:{value:ee(n.hemiSky)}},d=new gn({uniforms:f,vertexShader:sM,fragmentShader:rM,transparent:!0,depthWrite:!1}),h=new De(u,d);return h.name="course-water",h.renderOrder=1,{mesh:h,uniforms:f}}function aM(i,t,e){return i==="cushion"?(e=e||.42,t?{pts:[[-.2,-.3],[-.2,e-.12],[-.15,e-.03],[-.08,e],[.08,e],[.15,e-.03],[.2,e-.12],[.2,-.3]],roles:["nose","nose","nose","top","nose","nose","nose"],h:e}:{pts:[[0,-.3],[0,e-.12],[.05,e-.03],[.12,e],[.46,e],[.5,e-.05],[.53,e-.12],[.53,-.34]],roles:["nose","nose","nose","top","top","side","side"],h:e}):i==="hedge"?(e=e||.52,t?{pts:[[-.22,-.3],[-.22,e-.2],[-.17,e-.06],[-.08,e],[.08,e],[.17,e-.06],[.22,e-.2],[.22,-.3]],roles:Array(7).fill("hedge"),h:e}:{pts:[[0,-.3],[0,e-.2],[.05,e-.06],[.14,e],[.42,e],[.52,e-.08],[.56,e-.25],[.56,-.34]],roles:Array(7).fill("hedge"),h:e}):i==="bumper"?(e=e||.4,t?{pts:[[-.2,-.3],[-.2,e-.2],[-.16,e-.08],[-.09,e-.01],[-.04,e],[.04,e],[.09,e-.01],[.16,e-.08],[.2,e-.2],[.2,-.3]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}:{pts:[[0,-.3],[0,e-.2],[.04,e-.08],[.12,e-.01],[.21,e],[.31,e],[.4,e-.01],[.47,e-.08],[.5,e-.2],[.5,-.34]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}):(e=e||.4,t?{pts:[[-.18,-.3],[-.18,e-.05],[-.14,e],[.14,e],[.18,e-.05],[.18,-.3]],roles:["face","cap","cap","cap","face"],h:e}:{pts:[[0,-.3],[0,e-.05],[.04,e],[.46,e],[.5,e-.05],[.5,-.34]],roles:["face","cap","cap","cap","side"],h:e})}const cM={cushion:.2,hedge:.22,bumper:.2,wall:.18};function lM(i,t,e,n,s){const r=i.heightAt,o=[],a=i.walls.map(l=>({kind:l.kind,pts:l.pts,closed:l.closed,h:l.h,border:l.border}));for(const l of i.arcsRender||[])a.push({kind:l.kind,pts:dd(l,6),closed:!1,h:void 0,border:!1});const c={nose:ee(n.cushionNose),top:ee(n.railTop),side:ee(n.railSide),sights:ee(n.railSights),hedge:ee(n.hedge),stone:ee(n.wallStone),pad:ee(s),stripe:ee(me.pinWhite)};for(const l of a){const u=uM.has(l.kind)?l.kind:"wall",f=fM(l.pts,l.closed);if(f.length<2)continue;const d=f.length,h=l.closed?d:d-1;let g=0,x=0;for(let W=0;W<h;W++){const D=f[W],K=f[(W+1)%d],Y=K.x-D.x,rt=K.z-D.z,V=Math.hypot(Y,rt);if(V<1e-6)continue;const Z=-rt/V,mt=Y/V,H=(D.x+K.x)/2,tt=(D.z+K.z)/2,lt=t.inside(H+Z*.35,tt+mt*.35),St=t.inside(H-Z*.35,tt-mt*.35);lt!==St&&(g+=lt?-V:V),x+=V}const m=l.border||Math.abs(g)>x*.5,p=m?g>=0?1:-1:1,M=aM(u,!m,l.h),_=m?0:cM[u];for(let W=0;W<h;W++){const D=f[W],K=f[(W+1)%d];o.push({ax:D.x,az:D.z,bx:K.x,bz:K.z,hw:_})}const w=[],T=[];for(let W=0;W<h;W++){const D=f[W],K=f[(W+1)%d],Y=Math.hypot(K.x-D.x,K.z-D.z);T.push([-(K.z-D.z)/Y,(K.x-D.x)/Y,Y])}let b=0;const E=(W,D,K,Y,rt)=>w.push({x:W,z:D,nx:K,nz:Y,u:b,join:rt}),v=(W,D,K)=>{const Y=Math.atan2(D[1],D[0]);let rt=Math.atan2(K[1],K[0])-Y;for(;rt>Math.PI;)rt-=2*Math.PI;for(;rt<-Math.PI;)rt+=2*Math.PI;const V=Math.max(1,Math.ceil(Math.abs(rt)/(Math.PI/9)));for(let Z=0;Z<=V;Z++){const mt=Y+rt*Z/V;E(W.x,W.z,Math.cos(mt),Math.sin(mt),Z>0&&Z<V)}},S=(W,D,K,Y)=>{for(let V=0;V<=6;V++){const Z=Y?Math.PI-Math.PI*V/6:-Math.PI*V/6,mt=D[0]*Math.cos(Z)-K[0]*Math.sin(Z),H=D[1]*Math.cos(Z)-K[1]*Math.sin(Z);E(W.x,W.z,mt,H,V>0&&V<6)}},y=[];for(let W=0;W<h;W++){const D=f[W],K=f[(W+1)%d],[Y,rt,V]=T[W],Z=[(K.x-D.x)/V,(K.z-D.z)/V];if(W===0&&!l.closed)m?E(D.x,D.z,Y,rt,!1):S(D,[Y,rt],Z,!0);else{const tt=T[(W-1+h)%h];v(D,[tt[0],tt[1]],[Y,rt])}const mt=Math.max(1,Math.ceil(V/.5)),H=b;for(let tt=1;tt<mt;tt++)b=H+V*tt/mt,E(D.x+(K.x-D.x)*(tt/mt),D.z+(K.z-D.z)*(tt/mt),Y,rt,!1);if(b=H+V,u==="cushion")for(let tt=Math.ceil((H+.4-1)/2)*2+1;tt<H+V-.4;tt+=2)y.push([D.x+Z[0]*(tt-H),D.z+Z[1]*(tt-H),Y,rt,Z]);W===h-1&&!l.closed&&(m?E(K.x,K.z,Y,rt,!1):S(K,[Y,rt],Z,!1))}if(l.closed&&w.length){const W=w[0];w.push({...W,u:b})}const C=M.pts,z=(W,D,K)=>{const Y=C[D][0]*p,rt=W.x+W.nx*Y,V=W.z+W.nz*Y,Z=C[D][1]>=0?W.hc+C[D][1]:r(rt,V)+C[D][1];return K[0]=rt,K[1]=Z,K[2]=V,K};for(const W of w)W.hc=r(W.x,W.z);let U=0,X=0;for(const W of C)U+=W[0],X+=W[1];U/=C.length,X/=C.length;const ct=[0,0,0],st=[0,0,0],xt=[0,0,0],$=[0,0,0];for(let W=0;W<w.length-1;W++){const D=w[W],K=w[W+1],Y=(D.nx+K.nx)*.5,rt=(D.nz+K.nz)*.5,V=u==="wall"?Math.floor((D.u+K.u)*.5/1.2)%2?.95:1.04:1;for(let Z=0;Z<C.length-1;Z++){const mt=C[Z+1][0]-C[Z][0];let tt=C[Z+1][1]-C[Z][1],lt=-mt;const St=(C[Z][0]+C[Z+1][0])/2-U,zt=(C[Z][1]+C[Z+1][1])/2-X;tt*St+lt*zt<0&&(tt=-tt,lt=-lt);const J=[Y*tt*p,lt,rt*tt*p],vt=M.roles[Z],k=Math.max(0,(C[Z][1]+C[Z+1][1])/2)/M.h,nt=lt>.7?1:.72+.33*Math.min(1,k);let Bt,jt=0;u==="cushion"?Bt=ve(vt==="nose"?c.nose:vt==="top"?c.top:c.side,nt):u==="hedge"?(Bt=ve(c.hedge,.62+.46*Math.min(1,k)),jt=1):u==="bumper"?Bt=ve(vt==="stripe"?c.stripe:c.pad,vt==="stripe"?1:nt):Bt=ve(c.stone,(vt==="cap"?1:vt==="face"?.8*nt:.66*nt)*V),z(D,Z,ct),z(K,Z,st),z(K,Z+1,xt),z(D,Z+1,$),e.quad(ct,st,xt,$,Bt,jt,J)}}if(!l.closed&&m&&w.length>=2)for(const[W,D]of[[w[0],w[1]],[w[w.length-1],w[w.length-2]]]){const K=[W.x-D.x,0,W.z-D.z],Y=C.map((V,Z)=>z(W,Z,[0,0,0])),rt=u==="hedge"?ve(c.hedge,.8):u==="cushion"?c.side:u==="bumper"?c.pad:ve(c.stone,.75);for(let V=1;V<Y.length-1;V++)e.tri(Y[0],Y[V],Y[V+1],rt,u==="hedge"?1:0,K)}if(u==="cushion"){const W=m?.29:0;for(const[D,K,Y,rt,V]of y){const Z=D+Y*W*p,mt=K+rt*W*p,H=r(D,K)+M.h+.008,tt=.11,lt=.065,St=[Z+V[0]*tt,H,mt+V[1]*tt],zt=[Z-V[0]*tt,H,mt-V[1]*tt],J=[Z+Y*lt,H,mt+rt*lt],vt=[Z-Y*lt,H,mt-rt*lt];e.quad(St,J,zt,vt,c.sights,0,[0,1,0])}}}return o}const uM=new Set(["cushion","hedge","bumper","wall"]);function fM(i,t){const e=[];for(const n of i){const s=e[e.length-1];(!s||Math.hypot(n.x-s.x,n.z-s.z)>1e-4)&&e.push({x:n.x,z:n.z})}if(t&&e.length>2){const n=e[0],s=e[e.length-1];Math.hypot(n.x-s.x,n.z-s.z)<1e-4&&e.pop()}return e}const hM=(i,t)=>new Jt(i,t),is=(i,t)=>new aa(i.map(([e,n])=>hM(e,n)),t),On=i=>i<0?0:i>1?1:i,dM=[16513779,16763196,16748467,15217199,10189792],pM=[0,0,-1],mM=[0,.866,.5];function gM(i){const t=[ee(i.hedge),ko(ee(i.hedge),ee(i.rough),.5),ve(ee(i.rough),1.05)];return{pal:i,greens:t,trunk:ve(ee(i.wood),.62),wood:ee(i.wood),woodDark:ve(ee(i.wood),.72),stone:ee(i.wallStone),soil:ve(ee(i.soilTop),.8),chalk:ee(me.chalk),chalkTop:ee(14674423),white:ee(me.pinWhite),red:ee(me.pinBand),candy:ee(15022389),black:ee(me.eightBody),water:ee(i.waterShallow),foam:ee(i.waterFoam),reeds:ee(i.reeds),cattail:ee(7029286),lily:ve(ee(i.rough),1.12),flowers:dM.map(ee)}}function xM(i,t,e,n,s,r,o){const{x:a,z:c,r:l}=n,u=n.kind||"post";if(u==="bumper"){const d=o[r%o.length],h=ee(me.poolBalls[(d-1)%8]),g=is([[l+.02,-.3],[l,0],[l,.13],[l,.27],[l,.36],[l*.95+0,.45],[l*.84,.5],[0,.5]],28);i.geo(g,(x,m)=>m>.13&&m<.27?e.white:ve(h,m>.4?1.05:.8+.25*On(m/.36)),{matrix:qe(a,s,c)}),t.disc([a,s+.503,c],[0,1,0],pM,Math.min(l*.56,.48),d);return}if(u==="tree"){const d=is([[l+.02,-.3],[l,.28],[l-.04,.33],[l-.15,.33],[l-.18,.2],[0,.2]],32);i.geo(d,(w,T,b)=>Math.hypot(w,b)<l-.17&&T<.25?e.soil:ve(e.stone,T>.3?1:.68+.3*On(T/.28)),{matrix:qe(a,s,c)});const h=Math.max(.55,l*.9),g=.75+h*.82,x=Math.min(.32,.08+l*.07),m=new Hn(x*.8,x,g,8);m.translate(0,g/2,0),i.geo(m,()=>e.trunk,{matrix:qe(a,s,c)});const p=e.greens[r%3],M=new gi(h,18,12);i.geo(M,(w,T)=>ve(p,.66+.42*On((T+h)/(2*h))),{leaf:1,flat:!1,matrix:qe(a,s+g,c,0,[1,.8,1])});const _=new gi(h*.5,14,10);i.geo(_,(w,T)=>ve(p,.85+.3*On((T+h*.5)/h)),{leaf:1,flat:!1,matrix:qe(a-h*.08,s+g+h*.72,c-h*.05,0,[1,.85,1])});return}if(u==="lollipop"){const d=[[l+.02,-.3]];for(let m=0;m<=5;m++)d.push([l,m*.1]);d.push([l*.9,.58],[0,.58]),i.geo(is(d,24),(m,p,M)=>p>.52?e.white:((Math.atan2(M,m)/(Math.PI*2)*2+p*1.8)%1+1)%1<.5?e.candy:e.white,{matrix:qe(a,s,c)});const h=new Hn(.045,.045,.6,6);h.translate(0,.86,0),i.geo(h,()=>e.white,{matrix:qe(a,s,c)});const g=Math.min(.5,Math.max(.3,l*.75)),x=new gi(g,16,10);i.geo(x,(m,p,M)=>(Math.atan2(M,m)/(Math.PI*2)*3+p/g*.9+2)%1<.5?e.candy:e.white,{matrix:qe(a,s+1.16+g*.8,c,0,[1,.85,1])});return}if(l>=1){const d=is([[l+.02,-.3],[l,.42],[l-.08,.62],[l-.25,.72],[l*.5,.76],[0,.76]],32),h=e.greens[0];i.geo(d,(g,x)=>ve(h,.62+.46*On(x/.76)),{leaf:1,flat:!1,matrix:qe(a,s,c)});return}const f=is([[l+.02,-.3],[l,0],[l,.5],[l-Math.min(.07,l*.2),.57],[0,.57]],20);i.geo(f,(d,h)=>h>.515?e.chalkTop:ve(e.chalk,.74+.3*On(h/.5)),{matrix:qe(a,s,c)})}function pd(i,t,e,n,s,r,o,a=0){const c=qe(e,n,s,a,r),l=.8,u=new Hn(.08,.13,l+.3,6);u.translate(0,l/2-.15,0),i.geo(u,()=>t.trunk,{matrix:c});const f=t.greens[Math.floor(o()*3)],d=[[0,l+.5,0,.62],[.36,l+.3,.12,.42],[-.34,l+.34,-.12,.44],[.06,l+.95,-.04,.4]];for(const[h,g,x,m]of d){const p=new Zs(m*(.92+o()*.16),1);p.translate(h,g,x),i.geo(p,(M,_)=>ve(f,.66+.46*On((_-l)/1.35)),{leaf:1,matrix:c})}}function ml(i,t,e,n,s,r,o,a=0){const c=qe(e,n,s,a,r),l=t.greens[Math.floor(o()*3)],u=2+Math.floor(o()*2);for(let f=0;f<u;f++){const d=f/u*Math.PI*2+o(),h=.3+o()*.12,g=new Zs(h,1);g.scale(1,.85,1),g.translate(Math.cos(d)*.22,h*.75,Math.sin(d)*.22),i.geo(g,(x,m)=>ve(l,.68+.5*On(m/.75)),{leaf:1,matrix:c})}}function md(i,t,e,n,s,r,o,a=0){const c=qe(e,n,s,a,r),l=5+Math.floor(o()*3),u=Math.floor(o()*t.flowers.length),f=ve(t.greens[1],.85);for(let d=0;d<l;d++){const h=o()*Math.PI*2,g=Math.sqrt(o())*.42,x=.18+o()*.16,m=Math.cos(h)*g,p=Math.sin(h)*g,M=new Hn(.015,.018,x,3);M.translate(m,x/2,p),i.geo(M,()=>f,{matrix:c});const _=new Or(.075+o()*.025);_.scale(1,.6,1),_.translate(m,x+.02,p);const w=t.flowers[(u+(o()<.7?0:1+Math.floor(o()*3)))%t.flowers.length];i.geo(_,()=>w,{matrix:c})}for(let d=0;d<2;d++){const h=new ca(.09,.2,4);h.translate((o()-.5)*.4,.1,(o()-.5)*.4),i.geo(h,()=>t.greens[2],{leaf:.5,matrix:c})}}const vM=(i,t,e,n)=>((Math.atan2(e,t)/(Math.PI*2)+Math.hypot(t,e)/n*1.4)%1+1)%1<.5?i.candy:i.white;function _M(i,t,e,n,s,r){const o=qe(e,n,s,0,r),a=new Hn(.05,.05,1.7,6);a.translate(0,.85,0),i.geo(a,()=>t.white,{matrix:o});const c=.58,l=new gi(c,24,12);l.scale(1,1,.3);const u=new ye().makeRotationX(-Math.PI/6),f=l.applyMatrix4(u),d=new ye().copy(u).invert(),h=new et;f.translate(0,1.7+c*.8,0),i.geo(f,(g,x,m)=>(h.set(g,x-1.7-c*.8,m).applyMatrix4(d),Math.abs(h.z)>.1&&Math.hypot(h.x,h.y)<c*.97?vM(t,h.x,h.y,c):t.white),{matrix:o})}function MM(i,t,e,n,s,r,o){const a=qe(n,s,r,0,o),c=new Bn(1.7,.6,1.7);c.translate(0,.2,0),i.geo(c,(x,m)=>ve(e.stone,m>.45?1:.72),{matrix:a});const l=new Bn(1.9,.14,1.9);l.translate(0,.5,0),i.geo(l,(x,m)=>ve(e.stone,m>.55?1.05:.8),{matrix:a});const u=.95,f=new gi(u,28,18);f.translate(0,.57+u*.96,0),i.geo(f,()=>e.black,{flat:!1,matrix:a});const d=[n,s+(.57+u*.96)*o,r],h=mM,g=u*o;t.disc([d[0]+h[0]*g,d[1]+h[1]*g,d[2]+h[2]*g],h,[0,.5,-.866],u*.46*o,8,{c:d,r:g+.006})}function yM(i,t,e,n,s,r,o){const a=qe(e,n,s,0,r);if(!o){const f=is([[1.3,-.3],[1.3,.42],[1.22,.5],[1.1,.5],[1.06,.42],[1.04,.3],[0,.3]],32);i.geo(f,(h,g,x)=>Math.hypot(h,x)<1.03&&g<.35?t.water:ve(t.stone,g>.45?1:.7+.25*On(g/.42)),{matrix:a});const d=new Ol(1.04,28);d.rotateX(-Math.PI/2),d.translate(0,.37,0),i.geo(d,(h,g,x)=>Math.hypot(h,x)>.86?t.foam:t.water,{matrix:a})}const c=is([[.22,o?-.5:.3],[.16,.5],[.13,.95],[.5,1.05],[.52,1.14],[.12,1.16],[0,1.16]],16);i.geo(c,(f,d)=>ve(t.stone,d>1?1:.78),{matrix:a});const l=new Zs(.2,1);l.scale(1,1.5,1),l.translate(0,1.42,0),i.geo(l,(f,d)=>d>1.45?t.white:t.foam,{matrix:a});const u=6;for(let f=0;f<u;f++){const d=f/u*Math.PI*2,h=new Zs(.07,0);h.translate(Math.cos(d)*.62,1,Math.sin(d)*.62),i.geo(h,()=>t.foam,{matrix:a})}}function SM(i,t,e,n,s,r,o,a){const c=(r||.7)*o,l=.6,u=18,f=a()*Math.PI*2,d=t.lily,h=ve(t.lily,.78);for(let g=0;g<u;g++){const x=f+l/2+(Math.PI*2-l)*g/u,m=f+l/2+(Math.PI*2-l)*(g+1)/u,p=[e+Math.cos(x)*c,n,s+Math.sin(x)*c],M=[e+Math.cos(m)*c,n,s+Math.sin(m)*c],_=[e+Math.cos(x)*c*.82,n+.01,s+Math.sin(x)*c*.82],w=[e+Math.cos(m)*c*.82,n+.01,s+Math.sin(m)*c*.82];i.tri([e,n+.015,s],_,w,d,0,[0,1,0]),i.quad(_,p,M,w,h,0,[0,1,0])}if(a()<.4){const g=new Or(.16*o);g.scale(1,.7,1),g.translate(e+Math.cos(f+Math.PI)*c*.3,n+.1,s+Math.sin(f+Math.PI)*c*.3),i.geo(g,()=>t.flowers[2])}}function bM(i,t,e,n,s,r,o){const a=qe(e,n,s,o()*6.28,r),c=7;for(let l=0;l<c;l++){const u=l/c*Math.PI*2+o(),f=.1+o()*.3,d=.8+o()*.5,h=new Hn(.012,.035,d,3);if(h.translate(0,d/2-.2,0),h.rotateZ((o()-.5)*.25),h.translate(Math.cos(u)*f,0,Math.sin(u)*f),i.geo(h,(g,x)=>ve(t.reeds,.75+.35*On(x/d)),{matrix:a}),l%2===0){const g=new Fl(.05,.18,2,6);g.translate(Math.cos(u)*f,d-.3,Math.sin(u)*f),i.geo(g,()=>t.cattail,{matrix:a})}}}function wM(i,t,e,n,s,r,o,a){const c=qe(e,n,s,o,r),l=new Bn(1.6,.42,.55);l.translate(0,.11,0),i.geo(l,(d,h)=>h>.3?t.soil:ve(t.wood,.7+.3*On((h+.1)/.4)),{matrix:c});const u=new Bn(1.7,.06,.65);u.translate(0,.33,0),i.geo(u,()=>t.wood,{matrix:c});const f=6;for(let d=0;d<f;d++){const h=-.65+1.3*d/(f-1),g=.12+a()*.1,x=new Or(.09);x.scale(1,.65,1),x.translate(h,.36+g,(a()-.5)*.2),i.geo(x,()=>t.flowers[(d+Math.floor(a()*2))%t.flowers.length],{matrix:c});const m=new ca(.08,g+.05,4);m.translate(h,.36+g/2,0),i.geo(m,()=>t.greens[1],{leaf:.5,matrix:c})}}function EM(i,t,e,n){const s=2*(n.r||3),r=4*(n.scale||1),o=(n.rot||0)*Math.PI/180,a=Math.cos(o),c=-Math.sin(o),l=-c,u=a,f=Math.max(2,Math.round(s/.34)),d=s/f,h=(g,x,m)=>{const p=n.x+a*g+l*x,M=n.z+c*g+u*x;return[p,e(p,M)+m,M]};for(let g=0;g<f;g++){const x=-s/2+g*d+.025,m=x+d-.05,p=ve(t.wood,g%2?.92:1.04),M=r/2+(g%3===0?.06:0),_=h(x,-M,.03),w=h(m,-M,.03),T=h(m,M,.03),b=h(x,M,.03);i.quad(_,w,T,b,p,0,[0,1,0]);const E=h(x,-M,-.1),v=h(m,-M,-.1),S=h(m,M,-.1),y=h(x,M,-.1),C=ve(p,.66);i.quad(_,E,v,w,C,0,[-l,0,-u]),i.quad(T,S,y,b,C,0,[l,0,u]),i.quad(w,v,S,T,C,0,[a,0,c]),i.quad(b,y,E,_,C,0,[-a,0,-c])}for(const g of[-1,1])for(const x of[-1,1]){const[m,p,M]=h(x*(s/2-.15),g*(r/2+.2),0),_=new Hn(.1,.12,.7,8);_.translate(0,.1,0),i.geo(_,(w,T)=>ve(t.wood,T>.4?1:.7),{matrix:qe(m,p,M)})}}function TM(i,t,e,n,s,r,o,a){const c=qe(n,s,r,0,o),l=new Bn(.14,1.2,.14);l.translate(0,.45,0),i.geo(l,()=>e.woodDark,{matrix:c});const u=new Bn(1.2,.75,.1);u.rotateX(-.5),u.translate(0,1.15,.04),i.geo(u,(h,g,x)=>ve(e.wood,x>.05?1.05:.75),{matrix:c});const f=[0,Math.sin(.5),Math.cos(.5)],d=[0,Math.cos(.5),-Math.sin(.5)];t.disc([n,s+1.15*o+f[1]*.056*o,r+.04*o+f[2]*.056*o],f,d,.3*o,a)}function gd(i,t,e){for(let n=0;n<=3.4;n+=.4)if(i.inside(t,e-n)||i.inside(t+n,e)||i.inside(t-.9,e-n)||i.inside(t+.9,e-n))return!1;return!0}function xd(i,t,e,n){const s=i.heightAt;if(t.inside(e,n))return s(e,n);const r=t.nearest(e,n),o=Math.min(r.d,Zo);return s(r.x,r.z)-.15-.07*(o/Zo)}function AM(i,t,e,n,s,r){const o=i.heightAt,a=i.hole&&i.hole.number||1;for(const c of i.props||[]){const l=c.scale||1,u=(c.rot||0)*Math.PI/180,f=i.surfaceAt(c.x,c.z)==="water",d=xd(i,t,c.x,c.z);switch(c.type){case"tree":t.nearest(c.x,c.z).d<3&&!gd(t,c.x,c.z)?ml(e,s,c.x,d,c.z,1.2*l,r,u):pd(e,s,c.x,d,c.z,l*(c.r?c.r/.9:1),r,u);break;case"bush":ml(e,s,c.x,d,c.z,l*(c.r?c.r/.55:1),r,u);break;case"flowers":md(e,s,c.x,d,c.z,l*(c.r?c.r/.45:1),r,u);break;case"lollipop":_M(e,s,c.x,d,c.z,l);break;case"statue8":MM(e,n,s,c.x,d,c.z,l);break;case"fountain":yM(e,s,c.x,f?d-.3:d,c.z,l,f);break;case"lilypad":SM(e,s,c.x,o(c.x,c.z)+.05,c.z,c.r,l,r);break;case"reeds":bM(e,s,c.x,f?o(c.x,c.z)-.25:d,c.z,l,r);break;case"flowerbox":wM(e,s,c.x,d,c.z,l,u,r);break;case"bridge":EM(e,s,o,c);break;case"sign":TM(e,n,s,c.x,d,c.z,l,a);break}}}const CM={tree:1.3,bush:.9,flowers:.8,lollipop:.9,statue8:1.5,fountain:1.6,sign:.9,flowerbox:1.1,reeds:.7};function RM(i,t){const e=[];for(const n of i.props||[]){const s=CM[n.type];if(!s||t.inside(n.x,n.z))continue;const r=s*(n.scale||1)+.6,o=t.nearest(n.x,n.z);t.walled(o.seg,o.t)&&o.d+r<=t.apronW-.1||e.push({x:n.x,z:n.z,r})}return e}function PM(i,t,e,n,s){if(!t.anyWalled||t.apronW<2)return 0;const r=[];for(const u of i.props||[])r.push([u.x,u.z,1.6]);for(const u of i.posts||[])r.push([u.x,u.z,u.r+1]);const o=(u,f,d)=>{for(const[h,g,x]of r)if(Math.hypot(h-u,g-f)<x+d)return!1;return!0},a=t.poly,c=t.count;let l=0;for(let u=0;u<c;u++){const f=a[u*2],d=a[u*2+1],h=a[(u+1)%c*2],g=a[(u+1)%c*2+1],x=t.segLen[u],m=t.segN[u*2],p=t.segN[u*2+1];for(let M=s()*1.2;M<x;M+=1.25+s()*.9){const _=M/x;if(!t.walled(u,_))continue;const w=1+s()*1.55,T=f+(h-f)*_+m*w,b=d+(g-d)*_+p*w;if(t.inside(T,b))continue;const E=t.nearest(T,b);if(E.d<.95||E.d>t.apronW-.35||!t.walled(E.seg,E.t))continue;const v=s(),S=xd(i,t,T,b);if(v<.3&&E.d>1.55&&gd(t,T,b)&&o(T,b,1))pd(e,n,T,S,b,.85+s()*.3,s,s()*6.28),r.push([T,b,1]);else if(v<.66&&o(T,b,.6))ml(e,n,T,S,b,.8+s()*.4,s,s()*6.28),r.push([T,b,.6]);else if(o(T,b,.45))md(e,n,T,S,b,.9+s()*.3,s,s()*6.28),r.push([T,b,.45]);else continue;l++}}return l}const hi=8,Ar=4,ss=128;let Ln=null;const Af=i=>"#"+i.toString(16).padStart(6,"0");function Cf(i){const t=i.getContext("2d");t.clearRect(0,0,i.width,i.height);for(let e=0;e<hi*Ar;e++){const n=e%hi*ss+ss/2,s=Math.floor(e/hi)*ss+ss/2;t.fillStyle=Af(me.flagDisc),t.beginPath(),t.arc(n,s,ss*.47,0,Math.PI*2),t.fill();const r=String(e+1);t.fillStyle=Af(me.eightInk),t.font=`${r.length>1?66:82}px "Lilita One", "Arial Black", "Arial Rounded MT Bold", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,n,s+5)}}function vd(){if(Ln)return Ln;if(typeof document>"u")return Ln=new Dl(new Uint8Array([255,255,255,255]),1,1),Ln.colorSpace=Qe,Ln.needsUpdate=!0,Ln;const i=document.createElement("canvas");return i.width=hi*ss,i.height=Ar*ss,Cf(i),Ln=new zl(i),Ln.colorSpace=Qe,Ln.anisotropy=4,document.fonts&&document.fonts.load&&document.fonts.load('80px "Lilita One"').then(()=>{Cf(i),Ln.needsUpdate=!0}).catch(()=>{}),Ln}const LM=i=>i!==null&&i===Ln;function _d(i){const t=Math.max(0,Math.min(hi*Ar-1,(i|0)-1)),e=t%hi,n=Math.floor(t/hi);return[e/hi,1-(n+1)/Ar,1/hi,1/Ar]}const Qa=new et,Eo=new et,Ps=new et,Pi=new et;class IM{constructor(){this.pos=[],this.nor=[],this.uv=[]}get count(){return this.pos.length/9}disc(t,e,n,s,r,o=null){Ps.set(e[0],e[1],e[2]).normalize(),Eo.set(n[0],n[1],n[2]),Qa.crossVectors(Eo,Ps).normalize(),Eo.crossVectors(Ps,Qa).normalize();const[a,c,l,u]=_d(r),f=24,d=[];for(let g=0;g<=f;g++){const x=g/f*Math.PI*2;d.push(Math.cos(x),Math.sin(x))}const h=(g,x)=>{Pi.set(t[0],t[1],t[2]).addScaledVector(Qa,g*s).addScaledVector(Eo,x*s);let m=Ps.x,p=Ps.y,M=Ps.z;if(o){const _=Pi.x-o.c[0],w=Pi.y-o.c[1],T=Pi.z-o.c[2],b=Math.hypot(_,w,T)||1;m=_/b,p=w/b,M=T/b,Pi.set(o.c[0]+m*o.r,o.c[1]+p*o.r,o.c[2]+M*o.r)}this.pos.push(Pi.x,Pi.y,Pi.z),this.nor.push(m,p,M),this.uv.push(a+(.5+.47*g)*l,c+(.5+.47*x)*u)};for(let g=0;g<f;g++){const x=d[g*2],m=d[g*2+1],p=d[g*2+2],M=d[g*2+3];h(0,0),h(x*.5,m*.5),h(p*.5,M*.5),h(x*.5,m*.5),h(x,m),h(p,M),h(x*.5,m*.5),h(p,M),h(p*.5,M*.5)}}build(){const t=new Ve;return t.setAttribute("position",new _e(this.pos,3)),t.setAttribute("normal",new _e(this.nor,3)),t.setAttribute("uv",new _e(this.uv,2)),t.computeBoundingSphere(),t}}const vr=3,Ls=1.7,tc=1.06;function DM(i,t,e,n){const s=new Hn(.07,.075,vr+.7,8,16);s.translate(0,(vr+.7)/2-.7,0);const r=ee(me.pinWhite),o=ee(me.pinBand),a=vr/8;i.geo(s,(l,u)=>u>0&&Math.floor(u/a)%2===1?o:r,{flat:!1,matrix:new ye().makeTranslation(t,e,n)});const c=new gi(.09,10,8);c.translate(t,e+vr+.05,n),i.geo(c,()=>r,{flat:!1})}const zM=`
uniform float uTime;
uniform float uAmp;
float ebgWave(float x) { return sin(x * 3.2 - uTime * 6.5) * 0.5 + sin(x * 5.3 - uTime * 10.0 + 1.3) * 0.2; }
float ebgWaveD(float x) { return cos(x * 3.2 - uTime * 6.5) * 1.6 + cos(x * 5.3 - uTime * 10.0 + 1.3) * 1.06; }
`,NM=`
uniform vec4 uCell;
uniform vec2 uDiscC;
uniform vec2 uDiscS;
uniform vec3 uCloth;
`,UM=`
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
`;function FM(i){const t=new os;t.name="course-flag";const e=new ds(Ls,tc,14,3);e.translate(Ls/2+.05,vr-tc/2-.06,0);const n=vd(),s=.78,r={uTime:{value:0},uAmp:{value:1},uCell:{value:new Ie(..._d(i))},uDiscC:{value:new Jt(.56,.5)},uDiscS:{value:new Jt(s/Ls,s/tc)},uCloth:{value:ee(me.flagCloth)}},o=new ua({color:16777215,map:n,side:yn});o.onBeforeCompile=c=>{Object.assign(c.uniforms,r);let l=c.vertexShader;l=Sn(l,"#include <common>",zM),l=Sn(l,"#include <beginnormal_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ls.toFixed(3)}, 0.0, 1.0);
  float dz = (ebgWaveD(position.x) * kk + ebgWave(position.x) / ${Ls.toFixed(3)}) * 0.18 * uAmp;
  objectNormal = normalize(vec3(-dz, 0.0, 1.0));
}`),l=Sn(l,"#include <begin_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ls.toFixed(3)}, 0.0, 1.0);
  transformed.z += ebgWave(position.x) * 0.18 * uAmp * kk;
  transformed.y -= kk * kk * 0.08;
}`),c.vertexShader=l;let u=c.fragmentShader;u=Sn(u,"#include <common>",NM),u=Sn(u,"#include <map_fragment>",UM,"replace"),c.fragmentShader=u},o.customProgramCacheKey=()=>"ebg-flag-v1";const a=new De(e,o);return a.name="course-flag-cloth",t.add(a),{group:t,uniforms:r,cloth:a}}const OM=`
varying vec2 vLocal;
void main() {
  vLocal = position.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,kM=`
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
`;function BM(i,t,e,n,s){const r=[0,.3,.6,.8,n*.86,n,n+.15,n+.35,n+s,n+s+.3,n*1.05+1.55],o=40,a=[],c=[];for(let w=0;w<r.length;w++){const T=w===0?1:o;for(let b=0;b<T;b++){const E=b/o*Math.PI*2,v=Math.cos(E)*r[w],S=Math.sin(E)*r[w];a.push(v,i(t+v,e+S)+.012,S)}}const l=w=>w===0?0:1+(w-1)*o;for(let w=0;w<o;w++)c.push(0,l(1)+(w+1)%o,l(1)+w);for(let w=1;w<r.length-1;w++){const T=l(w),b=l(w+1);for(let E=0;E<o;E++){const v=(E+1)%o;c.push(T+E,T+v,b+v,T+E,b+v,b+E)}}const u=new Ve;u.setAttribute("position",new _e(a,3)),u.setIndex(c);const f=u.attributes.position,d=c.slice(0,3),h=f.getX(d[1])-f.getX(d[0]),g=f.getZ(d[1])-f.getZ(d[0]),x=f.getX(d[2])-f.getX(d[0]),m=f.getZ(d[2])-f.getZ(d[0]);if(g*x-h*m<0){for(let w=0;w<c.length;w+=3){const T=c[w+1];c[w+1]=c[w+2],c[w+2]=T}u.setIndex(c)}u.computeBoundingSphere();const p={uR:{value:n},uLip:{value:n+s},uTime:{value:0},uLightDir:{value:new Jt(-.7071,-.7071)},uInside:{value:ee(me.cupInside)},uLiner:{value:ee(me.cupLiner)},uHalo:{value:ee(me.blobShadow)}},M=new gn({uniforms:p,vertexShader:OM,fragmentShader:kM,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),_=new De(u,M);return _.name="course-cup",_.position.set(t,0,e),_.renderOrder=2,{mesh:_,uniforms:p}}const HM=.3,GM=.3,VM=1e3;function Md(i,t){const e=hd(t.round),n=t.heightAt,s=H1(String(t.id||"hole")),r=new os;r.name="course";const o=V1(t),a=gM(e),c=new W1,l=new IM,u=9+Math.floor(s()*7),f=9+(u-9+2+Math.floor(s()*4))%7,d=[u,f],h=lM(t,o,c,e,me.poolBalls[(u-1)%8]);let g=0;t.posts.forEach((D,K)=>{const Y=D.kind||"post";xM(c,l,a,D,n(D.x,D.z),Y==="bumper"?g++:K,d),h.push({x:D.x,z:D.z,r:D.r})});const x=j1(t,o,h),m=tM(t,o,x,e,RM(t,o),i?i.tier:1);r.add(m.mesh);const p=oM(t,m,x,e);p&&r.add(p.mesh),AM(t,o,c,l,a,s);const M=PM(t,o,c,a,s),_=t.cup.x,w=t.cup.z,T=n(_,w);DM(c,_,T,w);const b=BM(n,_,w,kt.HOLE_R,kt.LIP_W);r.add(b.mesh);const E=FM(t.hole&&t.hole.number||1);E.group.position.set(_,T,w),r.add(E.group);const v=new De(c.build(),XM());v.name="course-solids",v.castShadow=!0,v.receiveShadow=!0,r.add(v);let S=null;l.count>0&&(S=new De(l.build(),new ua({map:vd()})),S.name="course-labels",S.receiveShadow=!0,r.add(S)),r.userData.stats={decor:M},i&&i.scene&&i.scene.add(r),i&&i.renderer&&i.renderer.shadowMap&&(i.renderer.shadowMap.needsUpdate=!0);let y=0,C=0,z=0,U=!1;const X=m.uniforms;function ct(D,K){if(U)return;const Y=K%VM,rt=D/HM;C+=Math.max(-rt,Math.min(rt,y-C)),X.uTime.value=Y,X.uFlow.value=C*C*(3-2*C),p&&(p.uniforms.uTime.value=Y),b.uniforms.uTime.value=Y,E.uniforms.uTime.value=Y,z>0&&(z=Math.max(0,z-D)),E.uniforms.uAmp.value=1+Math.min(1,z/.08)}function st(D){y=D>1?1:D>0?D:0}function xt(){z=GM}function $(D){if(!D||!D.position)return;const K=D.position.x-_,Y=D.position.z-w;if(K*K+Y*Y<1e-8)return;const rt=Math.atan2(K,Y);E.group.rotation.y=rt;const V=rt+225*Math.PI/180;b.uniforms.uLightDir.value.set(Math.sin(V),Math.cos(V))}function W(){U||(U=!0,r.removeFromParent(),r.traverse(D=>{if(!D.isMesh)return;D.geometry.dispose();const K=Array.isArray(D.material)?D.material:[D.material];for(const Y of K)Y.map&&!LM(Y.map)&&Y.map.dispose(),Y.dispose()}),x.mask.dispose(),x.aux.dispose())}return i&&i.camera&&$(i.camera),{group:r,update:ct,setFlow:st,wiggleFlag:xt,faceCamera:$,dispose:W}}const WM=`
varying float vLeaf;
varying vec3 vLeafPos;
float lfH(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float lfNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lfH(i), lfH(i + vec2(1.0, 0.0)), f.x), mix(lfH(i + vec2(0.0, 1.0)), lfH(i + vec2(1.0, 1.0)), f.x), f.y);
}
`;function XM(){const i=new ua({color:16777215,vertexColors:!0});return i.onBeforeCompile=t=>{let e=t.vertexShader;e=Sn(e,"#include <common>",`attribute float aLeaf;
varying float vLeaf;
varying vec3 vLeafPos;`),e=Sn(e,"#include <begin_vertex>",`vLeaf = aLeaf;
vLeafPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.vertexShader=e;let n=t.fragmentShader;n=Sn(n,"#include <common>",WM),n=Sn(n,"#include <color_fragment>",`{
  vec2 lp = vLeafPos.xz * 4.5 + vec2(vLeafPos.y * 3.1, vLeafPos.y * -2.3);
  float ln = lfNoise(lp) * 0.65 + lfNoise(lp * 2.7) * 0.35;
  diffuseColor.rgb *= 1.0 + vLeaf * (ln - 0.5) * 0.5;
}`),t.fragmentShader=n},i.customProgramCacheKey=()=>"ebg-solids-v1",i}const Li=kt.R,Bi=Math.PI*2,qM=["classic","tennis","beach","planet","donut","snow","gold"],YM=14,Rf=1.4,To=.24,KM=.12,Pf=.38,Lf=.34,ec=.7,$M=.12,nc=.16,Ao=.35,ci=i=>i<0?0:i>1?1:i,Be=(i,t,e)=>{const n=ci((e-i)/(t-i));return n*n*(3-2*n)},Ce=i=>[i>>16&255,i>>8&255,i&255];function He(i,t,e){i[0]+=(t[0]-i[0])*e,i[1]+=(t[1]-i[1])*e,i[2]+=(t[2]-i[2])*e}function vi(i,t){i[0]=t[0],i[1]=t[1],i[2]=t[2]}function jM(i,t){i[0]*=t,i[1]*=t,i[2]*=t}const kr=i=>Math.acos(i<-1?-1:i>1?1:i);function li(i,t,e,n){let s=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,1274126177)^Math.imul(n+1,2246822519);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function yd(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=i-s,c=t-r,l=e-o,u=a*a*(3-2*a),f=c*c*(3-2*c),d=l*l*(3-2*l),h=(g,x,m)=>g+(x-g)*m;return h(h(h(li(s,r,o,n),li(s+1,r,o,n),u),h(li(s,r+1,o,n),li(s+1,r+1,o,n),u),f),h(h(li(s,r,o+1,n),li(s+1,r,o+1,n),u),h(li(s,r+1,o+1,n),li(s+1,r+1,o+1,n),u),f),d)}function Js(i,t,e,n,s=4){let r=.5,o=1,a=0,c=0;for(let l=0;l<s;l++)a+=r*yd(i*o,t*o,e*o,n+l*17),c+=r,r*=.5,o*=2.03;return a/c}function Sd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ZM(i,t,e,n){const s=.809016994375,r=-.587785252292,o=-s,a=r;i=Math.abs(i);let c=Math.max(s*i+r*t,0)*2;i-=c*s,t-=c*r,c=Math.max(o*i+a*t,0)*2,i-=c*o,t-=c*a,i=Math.abs(i),t-=e;const l=n*-r-0,u=n*s-1,f=Math.min(e,Math.max(0,(i*l+t*u)/(l*l+u*u))),d=i-l*f,h=t-u*f;return Math.sqrt(d*d+h*h)*Math.sign(t*l-i*u)}const JM=Ce(me.cueBody),QM=Ce(me.cueDots),ty=Ce(me.eightBody),ey=Ce(me.eightDisc),$n=me.poolBalls.map(Ce),zr=Ce(16513779);function ny(i,t,e,n,s){vi(s,JM);const r=kr(Math.max(Math.abs(i),Math.abs(t),Math.abs(e)));He(s,QM,Be(.2+n,.2-n,r))}const If=.52;function iy(i,t,e,n,s){vi(s,ty);const r=kr(Math.abs(e));He(s,ey,Be(If+n,If-n,r))}const gl=.72,xl=.28,sy=2*Math.sqrt(gl*xl),Ho=(i,t)=>(t[0]=gl*Math.cos(i)+xl*Math.cos(3*i),t[1]=sy*Math.sin(2*i),t[2]=gl*Math.sin(i)-xl*Math.sin(3*i),t),Gs=72,ic=(()=>{const i=new Float64Array(Gs*3),t=[0,0,0];for(let e=0;e<Gs;e++)Ho(e/Gs*Bi,t),i[e*3]=t[0],i[e*3+1]=t[1],i[e*3+2]=t[2];return i})(),Pn=[0,0,0];function ry(i,t,e){let n=-2,s=0;for(let a=0;a<Gs;a++){const c=i*ic[a*3]+t*ic[a*3+1]+e*ic[a*3+2];c>n&&(n=c,s=a)}let r=(s-1)/Gs*Bi,o=(s+1)/Gs*Bi;for(let a=0;a<14;a++){const c=r+(o-r)*.382,l=r+(o-r)*.618;Ho(c,Pn);const u=i*Pn[0]+t*Pn[1]+e*Pn[2];Ho(l,Pn);const f=i*Pn[0]+t*Pn[1]+e*Pn[2];u>f?o=l:r=c}return Ho((r+o)/2,Pn),kr(i*Pn[0]+t*Pn[1]+e*Pn[2])}const oy=Ce(13952570),ay=Ce(16316138),cy=Ce(11123498);function ly(i,t,e,n,s){vi(s,oy),jM(s,.94+.12*Js(i*9+3,t*9,e*9,11,3));const r=ry(i,t,e);He(s,cy,Be(.085+n,.085-n,r)*.8),He(s,ay,Be(.05+n,.05-n,r))}const sc=[$n[2],zr,$n[1],$n[0],zr,$n[5]];function uy(i,t,e,n,s){let r=Math.atan2(e,-i);r<0&&(r+=Bi);const o=Bi/6,a=Math.floor(r/o)%6,c=r-a*o,l=Math.sqrt(Math.max(0,1-t*t));vi(s,sc[a]);const u=Math.min(c,o-c)*l,f=c<o/2?sc[(a+5)%6]:sc[(a+1)%6];He(s,f,Be(n,-n,u));const d=kr(Math.abs(t));He(s,zr,Be(.36+n,.36-n,d)),He(s,$n[0],Be(.12+n,.12-n,d))}const fy=Ce(2052008),hy=Ce(4167142),dy=Ce(15326364),py=Ce(4170573),my=Ce(9227102),gy=Ce(16055039);function xy(i,t,e,n,s){const r=Js(i*1.9+7.1,t*1.9+3.3,e*1.9+1.7,5,5);vi(s,fy),He(s,hy,Be(.36,.5,r));const o=.52,a=.012+n*.5;He(s,dy,Be(o-a,o+a,r)),He(s,py,Be(o+.012-a,o+.012+a,r)),He(s,my,Be(.6,.7,r)*.8);const c=Math.abs(t)-(.84+.07*(Js(i*5,t*5,e*5,9,3)-.5));He(s,gy,Be(-n,n,c))}const vy=Ce(14262363),_y=Ce(15778430),rc=Ce(16748480),My=Ce(15036070),Df=(()=>{const i=Sd(388824),t=[],e=[$n[0],$n[1],zr,$n[5],$n[4],$n[3],zr];for(let n=0;t.length<64&&n<1e3;n++){const s=i()*2-1,r=i()*Bi,o=Math.sqrt(1-s*s),a=[o*Math.cos(r),s,o*Math.sin(r)];if(a[1]<.08)continue;let c=!1;for(const _ of t)if(_.c[0]*a[0]+_.c[1]*a[1]+_.c[2]*a[2]>.985){c=!0;break}if(c)continue;let l=-a[2],u=0,f=a[0],d=Math.hypot(l,u,f)||1;l/=d,u/=d,f/=d;const h=a[1]*f-a[2]*u,g=a[2]*l-a[0]*f,x=a[0]*u-a[1]*l,m=i()*Math.PI,p=[l*Math.cos(m)+h*Math.sin(m),u*Math.cos(m)+g*Math.sin(m),f*Math.cos(m)+x*Math.sin(m)],M=[a[1]*p[2]-a[2]*p[1],a[2]*p[0]-a[0]*p[2],a[0]*p[1]-a[1]*p[0]];t.push({c:a,t1:p,t2:M,col:e[t.length%e.length]})}return t})();function yy(i,t,e,n,s){const r=Math.atan2(e,-i),o=-.08+.09*Math.sin(r*7)+.05*Math.sin(r*3+1.3)+.06*(Js(i*4,t*4,e*4,21,3)-.5);vi(s,vy),He(s,_y,Be(-.55,-.05,t)*.7);const a=Be(o-n,o+n,t);if(a<=0)return;const c=[rc[0],rc[1],rc[2]];He(c,My,Be(o+.09,o,t)*.8);for(let l=0;l<Df.length;l++){const u=Df[l];if(i*u.c[0]+t*u.c[1]+e*u.c[2]<.97)continue;const d=i*u.t1[0]+t*u.t1[1]+e*u.t1[2],h=i*u.t2[0]+t*u.t2[1]+e*u.t2[2],g=Math.max(0,Math.abs(d)-.07),x=Math.sqrt(g*g+h*h)-.026,m=Be(n,-n,x);m>0&&He(c,u.col,m)}He(s,c,a)}const Sy=Ce(16120319),by=Ce(13229038),wy=Ce(11455462),zf=(()=>{const i=Sd(77),t=[];for(let e=0;e<9;e++){const n=i()*2-1,s=i()*Bi,r=Math.sqrt(1-n*n);t.push([r*Math.cos(s),n,r*Math.sin(s),.12+i()*.1])}return t})();function Ey(i,t,e,n,s){vi(s,Sy),He(s,by,Be(.45,.75,Js(i*3.2,t*3.2,e*3.2,31,4))*.75);for(let r=0;r<zf.length;r++){const o=zf[r],a=kr(i*o[0]+t*o[1]+e*o[2]),c=o[3]*(.8+.4*yd(i*12,t*12,e*12,41+r));He(s,wy,Be(c+n*2,c-n*2,a)*.85)}li(Math.floor(i*90),Math.floor(t*90),Math.floor(e*90),5)>.992&&vi(s,[255,255,255])}const Ty=Ce(12091423),Ay=Ce(15249982),Cy=Ce(16769674),Ry=Ce(16774340),Py=Ce(8015376);function Ly(i,t,e,n,s){vi(s,Ay);const r=Js(i*2.5,t*2.5,e*2.5,61,4);He(s,Ty,Be(.55,.3,r)*.6),He(s,Cy,Be(.55,.78,r)*.6);const o=Math.abs(e);if(o<.6)return;const a=(e>0?i:-i)/o,c=t/o,l=ZM(a,c+.03,.42,.45);He(s,Py,Be(.035+n,.035-n,l)),He(s,Ry,Be(n,-n,l))}const Nf={classic:{paint:ny,specular:5592405,shininess:80,rimDark:.25},tennis:{paint:ly,specular:2236962,shininess:18,rimDark:.3},beach:{paint:uy,specular:6710886,shininess:70,rimDark:.25},planet:{paint:xy,specular:4868682,shininess:50,rimDark:.15},donut:{paint:yy,specular:3815994,shininess:40,rimDark:.25},snow:{paint:Ey,specular:7829367,shininess:60,rimDark:.3},gold:{paint:Ly,specular:16765562,shininess:140,rimDark:.12}};function vl(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext&&e.getContext("2d");return n?{c:e,g:n}:null}function Uf(i,t){const{c:e,g:n}=i,s=e.width,r=e.height;if(!n.createImageData||!n.putImageData)return;const o=n.createImageData(s,r),a=o.data,c=Math.PI/r*.75,l=[0,0,0];for(let u=0;u<r;u++){const f=(u+.5)/r*Math.PI,d=Math.sin(f),h=Math.cos(f);for(let g=0;g<s;g++){const x=(g+.5)/s*Bi;t(-Math.cos(x)*d,h,Math.sin(x)*d,c,l);const m=(u*s+g)*4;a[m]=l[0],a[m+1]=l[1],a[m+2]=l[2],a[m+3]=255}}n.putImageData(o,0,0)}const kl='"Lilita One", "Arial Black", system-ui, sans-serif';function Ff(i,t,e){const{c:n,g:s}=i,r=n.width,o=n.height,a=Math.ceil(o*.42),c=vl(a,a);if(!c||!s.drawImage)return;const l=c.g;l.fillStyle="#"+me.eightInk.toString(16).padStart(6,"0"),l.font=`${Math.round(o*.27)}px ${kl}`,l.textAlign="center",l.textBaseline="middle",l.fillText(t,a/2,a/2+o*.012);const u=e*r,f=o/2;for(let d=0;d<a;d++){const h=f-a/2+d,g=(.5-(h+.5)/o)*Math.PI,x=1/Math.max(.2,Math.cos(g));s.drawImage(c.c,0,d,a,1,u-a*x/2,h,a*x,1)}}function Of(i,t){const e=new zl(i.c);return e.colorSpace=Qe,e.anisotropy=t,e.wrapS=qo,e}function kf(i,{rim:t=0,rimStrength:e=0,rimDark:n=0,specular:s=6710886,shininess:r=90,transparent:o=!1,key:a="ball-rim-v1"}={}){const c=new x1({map:i,shininess:r,specular:s,transparent:o,depthWrite:!0}),l=new ce(t),u={value:l.clone().multiplyScalar(e)},f={value:n};return c.onBeforeCompile=d=>{d.uniforms.uRim=u,d.uniforms.uRimDark=f,d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRim;
uniform float uRimDark;`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","float rimF = pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 3.0 );","totalEmissiveRadiance += uRim * rimF;","diffuseColor.rgb *= 1.0 - uRimDark * rimF;"].join(`
`))},c.customProgramCacheKey=()=>a,c.userData.uniforms={uRim:u,uRimDark:f},c.userData.rimBase=l,c}const Iy=`
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
}`,Dy=`
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
}`;function zy(i){if(!i||typeof document>"u"||!document.createElement)return null;const t=document.createElement("div");t.className="ebg-eight-marker",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",pointerEvents:"none",display:"none",zIndex:"3",willChange:"transform"});const e=document.createElement("div");Object.assign(e.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",display:"none"});const n=document.createElement("div");Object.assign(n.style,{position:"absolute",left:"22px",top:"5px",width:"0px",height:"0px",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:"9px solid #ffffff",filter:"drop-shadow(0 0 1.5px rgba(16,36,26,0.9))"}),e.appendChild(n);const s=document.createElement("div");return Object.assign(s.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",boxSizing:"border-box",borderRadius:"50%",background:"#16161c",border:"2px solid #ffffff",boxShadow:"0 0 0 1.5px rgba(16,36,26,0.85), 0 2px 4px rgba(0,0,0,0.35)",color:"#ffffff",font:`13px/18px ${kl}`,textAlign:"center"}),s.textContent="8",t.appendChild(e),t.appendChild(s),i.appendChild(t),{el:t,arrowWrap:e,shown:!1,x:-1e9,y:-1e9,ang:1e9,arrowOn:!1}}class Bf{constructor(){this.shown=!1,this.x=0,this.y=0,this.z=0,this.rx=0,this.rz=0,this.vx=0,this.vz=0,this.vy=0,this.anim="none",this.t=0,this.fx=0,this.fy=0,this.fz=0,this.hk="water",this.alpha=1,this.lastMode="off",this.synced=!1,this.lx=0,this.ly=0,this.lz=0,this.la=0,this.llv=null,this.lyaw=0}}class Ny{constructor(){this.valid=!1,this.cx=0,this.cy=0,this.cz=0,this.bx=0,this.by=0,this.bz=0,this.vis=!1,this.anim="",this.w=0,this.h=0}}class Uy{constructor(){this.t=0,this.k=-1}}function Fy(i,t={}){const{uiRoot:e=null,rig:n=null}=t,s=i.scene,r=i.tier??1,o=4,a=r===0?256:512,c=r===0?512:1024,l=new gi(Li,48,24),u=vl(c,c/2);let f=null;function d(){u&&(Uf(u,iy),Ff(u,"8",.25),Ff(u,"8",.75),f&&(f.needsUpdate=!0))}u&&(d(),f=Of(u,o));let h=!1;try{const J=typeof document<"u"?document.fonts:null;if(J&&J.load){const vt=J.check?J.check(`64px ${kl}`):!1;J.load('64px "Lilita One"').then(()=>{!h&&!vt&&d()},()=>{})}}catch{}const g=kf(f,{rim:me.eightRim,rimStrength:Ao,specular:6710886,shininess:90,key:"ball-eight-v1"});f||g.color.setHex(me.eightBody);const x=new De(l,g);x.name="eight-ball";const m=new Map,p=kf(null,{rimDark:.25,specular:5592405,shininess:80,transparent:!0,key:"ball-cue-v1"}),M=new De(l,p);M.name="cue-ball",M.renderOrder=2;for(const J of[x,M])J.castShadow=!1,J.receiveShadow=!1,J.frustumCulled=!0;s.add(x,M);const _=new ds(1,1);_.rotateX(-Math.PI/2);const w=new $o(new Float32Array(2),1);w.setUsage(Fi),_.setAttribute("aAlpha",w);const T=new gn({uniforms:{uColor:{value:new ce(me.blobShadow)},uOpacity:{value:.42}},vertexShader:Iy,fragmentShader:Dy,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),b=new e1(_,T,2);b.instanceMatrix.setUsage(Fi),b.frustumCulled=!1,b.renderOrder=1,b.name="ball-shadows",s.add(b);const E=zy(e),v=[new Bf,new Bf],S=[M,x];let y="classic",C=1;const z=new Uy;let U=!0;const X=new Ny,ct=new et,st=new fs,xt=new et,$=new et(0,1,0),W=new ye,D=new et,K=new et,Y={x:0,y:0,onScreen:!1};let rt=null;function V(J){J.quaternion.setFromAxisAngle($,i.yaw||0),st.setFromAxisAngle(ct.set(1,0,0),-Math.PI/3),J.quaternion.multiply(st)}V(x),V(M),M.quaternion.multiply(st.setFromAxisAngle(ct.set(0,1,0),.6));function Z(J,vt,k){const nt=Math.sqrt(vt*vt+k*k);nt<1e-7||(ct.set(k/nt,0,-vt/nt),J.quaternion.premultiply(st.setFromAxisAngle(ct,nt/Li)),J.quaternion.normalize())}function mt(J){Nf[J]||(J="classic"),y=J;const vt=Nf[J];let k=m.get(J);if(!k){const Bt=vl(a,a/2);Bt&&(Uf(Bt,vt.paint),k=Of(Bt,o),m.set(J,k))}const nt=!!p.map;p.map=k||null,nt!==!!p.map&&(p.needsUpdate=!0),k?p.color.setHex(16777215):p.color.setHex(me.cueBody),p.specular.setHex(vt.specular),p.shininess=vt.shininess,p.userData.uniforms.uRimDark.value=vt.rimDark}mt("classic");function H(J,vt){J.anim="drop",J.t=0,J.x=vt.x,J.y=vt.y+Rf,J.z=vt.z,J.rx=vt.x,J.rz=vt.z}function tt(J,vt,k){const nt=v[J],Bt=S[J],jt=J===1,Ht=jt&&vt.visible&&vt.mode==="holed";let Kt=!1;if(Ht)nt.anim!=="sink"&&nt.anim!=="inCup"&&(nt.shown&&nt.anim!=="hazard"?(nt.anim="sink",nt.t=0,nt.fx=nt.x,nt.fy=nt.y,nt.fz=nt.z):(nt.anim="inCup",Kt=!0)),nt.shown=!0;else if(vt.visible)(!nt.shown||nt.anim==="inCup"||nt.anim==="sink"||nt.anim==="hazard")&&(H(nt,vt),Kt=!0,V(Bt)),nt.shown=!0;else if(jt&&vt.mode==="sunk"&&nt.shown&&nt.anim!=="hazard"){nt.anim="hazard",nt.t=0,nt.vy=0;const ft=n&&n.level;if(nt.hk=ft&&ft.hazardAt&&ft.hazardAt(nt.x,nt.z)==="oob"?"oob":"water",nt.hk==="oob"){const dt=Math.sqrt(nt.vx*nt.vx+nt.vz*nt.vz);dt<1.5&&dt>1e-4&&(nt.vx*=1.5/dt,nt.vz*=1.5/dt)}}else nt.anim!=="hazard"&&(nt.shown=!1,nt.anim="none");nt.lastMode=vt.mode;const Xt=nt.x,A=nt.z;if(nt.anim==="hazard"){nt.t+=k;const ft=nt.t/ec;if(nt.hk==="water"){const dt=Math.exp(-5*k);nt.vx*=dt,nt.vz*=dt,nt.x+=nt.vx*k,nt.z+=nt.vz*k,nt.y-=(.4+2.2*ft)*k}else nt.x+=nt.vx*k,nt.z+=nt.vz*k,nt.vy-=18*k,nt.y+=nt.vy*k;nt.t>=ec&&(nt.anim="none",nt.shown=!1)}else if(nt.anim==="sink"){nt.t+=k;const ft=ci(nt.t/Lf),dt=1-Math.pow(1-ci(ft/.6),3),F=.05*(1-ft)*Math.sin(ft*26);nt.x=nt.fx+(vt.x-nt.fx)*dt+F,nt.z=nt.fz+(vt.z-nt.fz)*dt;const at=ci((ft-.12)/.88);nt.y=nt.fy+(vt.y-nt.fy)*at*at,nt.t>=Lf&&(nt.anim="inCup",nt.x=vt.x,nt.y=vt.y,nt.z=vt.z)}else if(nt.anim==="inCup")nt.x=vt.x,nt.y=vt.y,nt.z=vt.z;else if(nt.anim==="drop"){nt.t+=k,nt.x=vt.x,nt.z=vt.z;let ft;if(nt.t<To){const dt=nt.t/To;ft=Rf*(1-dt*dt)}else ft=KM*Math.sin(Math.PI*ci((nt.t-To)/(Pf-To)));nt.y=vt.y+ft,nt.t>=Pf&&(nt.anim="none",nt.y=vt.y)}else if(nt.shown){const ft=vt.x-nt.x,dt=vt.z-nt.z;ft*ft+dt*dt>2.5*2.5&&(Kt=!0),nt.x=vt.x,nt.y=vt.y,nt.z=vt.z}if(nt.shown){const ft=nt.x-Xt,dt=nt.z-A;if(!Kt&&nt.anim!=="drop"&&nt.anim!=="inCup"&&(ft!==0||dt!==0)&&Z(Bt,ft,dt),k>0&&!Kt&&nt.anim!=="hazard"){const F=1-Math.exp(-k/.06),at=ft/k,Tt=dt/k;Number.isFinite(at)&&Number.isFinite(Tt)&&(nt.vx+=(at-nt.vx)*F,nt.vz+=(Tt-nt.vz)*F)}Kt&&(nt.vx=0,nt.vz=0)}const R=J===0?ci(Number.isFinite(vt.alpha)?vt.alpha:1):1;if(nt.alpha=nt.shown?R:0,Bt.visible=nt.shown&&R>.01,J===0&&(p.opacity=R),nt.synced&&nt.x===nt.lx&&nt.y===nt.ly&&nt.z===nt.lz&&nt.alpha===nt.la&&rt===nt.llv&&i.yaw===nt.lyaw&&nt.anim==="none")return;nt.synced=!0,nt.lx=nt.x,nt.ly=nt.y,nt.lz=nt.z,nt.la=nt.alpha,nt.llv=rt,nt.lyaw=i.yaw,U=!0,Bt.visible&&Bt.position.set(nt.x,nt.y,nt.z);const Q=rt?es(rt,nt.x,nt.z):vt.y-Li,ut=nt.y-Li-Q;let wt=Bt.visible?nt.alpha:0,Et=2.1*Li*1.25;ut>.01?(wt/=1+ut*1.6,Et*=1+ut*.45):ut<-.01&&(wt*=ci(1+ut/(.9*Li))),nt.anim==="hazard"&&nt.hk==="water"&&(wt*=ci(1-nt.t/(ec*.5))),w.array[J]=wt;const Wt=(i.yaw||0)+225*Math.PI/180,Ft=.25*Li*Math.min(1.5,1+Math.max(0,ut)),Nt=nt.x-Math.sin(Wt)*Ft,q=nt.z-Math.cos(Wt)*Ft,G=.25,it=rt?es(rt,Nt+G,q)-es(rt,Nt-G,q):0,yt=rt?es(rt,Nt,q+G)-es(rt,Nt,q-G):0;xt.set(-it/(2*G),1,-yt/(2*G)).normalize(),st.setFromUnitVectors($,xt),D.set(Nt,(rt?es(rt,Nt,q):Q)+.03,q),K.set(Et,1,Et),W.compose(D,st,K),b.setMatrixAt(J,W)}function lt(){if(!E)return;const J=v[1],vt=i.camera.matrixWorld.elements,k=i.size.w,nt=i.size.h;if(X.valid&&vt[12]===X.cx&&vt[13]===X.cy&&vt[14]===X.cz&&J.x===X.bx&&J.y===X.by&&J.z===X.bz&&x.visible===X.vis&&J.anim===X.anim&&k===X.w&&nt===X.h)return;X.valid=!0,X.cx=vt[12],X.cy=vt[13],X.cz=vt[14],X.bx=J.x,X.by=J.y,X.bz=J.z,X.vis=x.visible,X.anim=J.anim,X.w=k,X.h=nt;let Bt=!1,jt=0,Ht=0,Kt=0,Xt=!1;if(n&&J.shown&&x.visible&&J.anim!=="inCup"&&J.anim!=="sink"&&J.anim!=="hazard"){const A=Math.max(1,i.size.w),R=Math.max(1,i.size.h);n.groundToScreen(J.x,J.y,J.z,Y);const Q=2*Li*n.pxPerMetre(J.x,J.z);if(!Y.onScreen||Q<YM){Bt=!0,jt=Y.x,Ht=Y.y;const ut=24;if(!Y.onScreen||jt<ut||jt>A-ut||Ht<ut||Ht>R-ut){const wt=A/2,Et=R/2,Wt=jt-wt,Ft=Ht-Et,Nt=Math.abs(Wt)>1e-6?(A/2-ut)/Math.abs(Wt):1/0,q=Math.abs(Ft)>1e-6?(R/2-ut)/Math.abs(Ft):1/0,G=Math.min(1,Nt,q);jt=wt+Wt*G,Ht=Et+Ft*G,Kt=Math.atan2(Ft,Wt),Xt=!Y.onScreen}}}Bt!==E.shown&&(E.el.style.display=Bt?"block":"none",E.shown=Bt),Bt&&((Math.abs(jt-E.x)>.5||Math.abs(Ht-E.y)>.5)&&(E.x=jt,E.y=Ht,E.el.style.transform=`translate3d(${(jt-11).toFixed(1)}px, ${(Ht-11).toFixed(1)}px, 0)`),Xt!==E.arrowOn&&(E.arrowWrap.style.display=Xt?"block":"none",E.arrowOn=Xt),Xt&&Math.abs(Kt-E.ang)>.01&&(E.ang=Kt,E.arrowWrap.style.transform=`rotate(${Kt.toFixed(3)}rad)`))}function St(J,vt){if(h||!J||J.length<2)return;vt=Number.isFinite(vt)&&vt>0?Math.min(vt,.1):0,rt=n&&n.level?n.level:null,tt(0,J[0],vt),tt(1,J[1],vt),U&&(w.needsUpdate=!0,b.instanceMatrix.needsUpdate=!0,U=!1);let k=Ao;z.t>0&&(z.t-=vt,k=z.t-nc>0?1:Ao+(1-Ao)*ci(z.t/nc)),k!==z.k&&(z.k=k,g.userData.uniforms.uRim.value.copy(g.userData.rimBase).multiplyScalar(k)),lt()}function zt(){h=!0,s.remove(x,M,b),l.dispose(),_.dispose(),g.dispose(),p.dispose(),T.dispose(),f&&f.dispose(),m.forEach(J=>J.dispose()),m.clear(),b.dispose(),E&&E.el.parentNode&&E.el.parentNode.removeChild(E.el)}return{update:St,flash(){z.t=$M+nc},setSkin:mt,setRound(J){C=J===2?2:1},dispose:zt,get skin(){return y},get round(){return C},meshes:{cue:M,eight:x,shadows:b},skins:qM}}const oi=kt.R,Oy=9.8,dr=0,Co=1,Hf=2,oc=["iPos","iRot","iSize","iCol"],ac=["iRing","iRingN","iRingC","iRingF"],ky=`
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
}`,By=`
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
}`,Hy=`
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
}`,Gy=`
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
}`;function Gf(i,t){return new gn({vertexShader:i,fragmentShader:t,transparent:!0,depthWrite:!1,depthTest:!0,side:yn,blending:Ph,blendEquation:zi,blendSrc:Rc,blendDst:Pr,blendSrcAlpha:Rc,blendDstAlpha:Pr,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function Vf(i,t){const e=new ds(1,1),n=new S1;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),n.setAttribute("uv",e.getAttribute("uv"));const s={};for(const[r,o]of t){const a=new $o(new Float32Array(i*o),o);a.setUsage(Fi),n.setAttribute(r,a),s[r]=a}return n.instanceCount=0,n.boundingSphere=new Vi(new et,1e6),{geo:n,attrs:s}}function Vy(i,t={}){const{events:e=null,play:n=null}=t,s=i.scene,r=i.tier??1,o=r===0?180:360,a=16,c=r===0?.4:1,l=Vf(o,[["iPos",4],["iRot",4],["iSize",4],["iCol",4]]),u=Gf(ky,By),f=new De(l.geo,u);f.frustumCulled=!1,f.renderOrder=5,f.name="fx-particles";const d=Vf(a,[["iRing",4],["iRingN",4],["iRingC",4],["iRingF",2]]),h=Gf(Hy,Gy),g=new De(d.geo,h);g.frustumCulled=!1,g.renderOrder=3,g.name="fx-rings";const x=oc.map(()=>({start:0,count:0})),m=ac.map(()=>({start:0,count:0}));s.add(g,f);const p=new Float32Array(o),M=new Float32Array(o),_=new Float32Array(o),w=new Float32Array(o),T=new Float32Array(o),b=new Float32Array(o),E=new Float32Array(o),v=new Float32Array(o),S=new Float32Array(o),y=new Float32Array(o),C=new Float32Array(o),z=new Float32Array(o),U=new Float32Array(o),X=new Float32Array(o),ct=new Float32Array(o),st=new Float32Array(o),xt=new Float32Array(o),$=new Float32Array(o),W=new Float32Array(o),D=new Float32Array(o),K=new Float32Array(o),Y=new Uint8Array(o),rt=new Float32Array(o),V=new Float32Array(o),Z=new Uint8Array(o),mt=new Uint8Array(o),H=new Uint8Array(o);let tt=0,lt=0;const St=new Float32Array(a),zt=new Float32Array(a),J=new Float32Array(a),vt=new Float32Array(a),k=new Float32Array(a),nt=new Float32Array(a),Bt=new Float32Array(a),jt=new Float32Array(a),Ht=new Float32Array(a),Kt=new Float32Array(a),Xt=new Float32Array(a),A=new Float32Array(a),R=new Float32Array(a),Q=new Float32Array(a),ut=new Float32Array(a),wt=new Float32Array(a),Et=new Float32Array(a),Wt=new Float32Array(a),Ft=new Float32Array(a),Nt=new Uint8Array(a);let q=0;const G=8,it=new Float32Array(G),yt=new Float32Array(G),ft=new Float32Array(G),dt=new Float32Array(G),F=new Uint8Array(G),at=new Uint8Array(G);let Tt=2654435769;const O=()=>(Tt^=Tt<<13,Tt^=Tt>>>17,Tt^=Tt<<5,(Tt>>>0)/4294967296),ot=(P,B)=>P+(B-P)*O(),ht=new ce,_t=P=>(ht.setHex(P),[ht.r,ht.g,ht.b]),At={white:_t(16777215),chalk:_t(me.chalk),foam:_t(15268863),water:_t(8378092),gold:_t(16765503),dustDark:_t(5916208),dustTan:_t(10254924),sand:_t(14268530),leaf:_t(3108396),grey:_t(7037271),pool:me.poolBalls.map(_t),cream:_t(16774358)},j=()=>n&&n.level||null,pt=(P,B)=>{const N=j(),gt=N&&N.heightAt?N.heightAt(P,B):0;return Number.isFinite(gt)?gt:0},Rt=(P,B)=>{const N=j();return N&&N.surfaceAt?N.surfaceAt(P,B):"fairway"};function It(P,B,N,gt,bt,Ct,Dt,Ot,Gt,Ut,te,Mt,ne,oe,ie,Zt,xe){let Vt=tt;for(let Se=0;Se<o;Se++){const Oe=(tt+Se)%o;if(!H[Oe]){Vt=Oe;break}}if(tt=(Vt+1)%o,H[Vt]||lt++,H[Vt]=1,p[Vt]=P,M[Vt]=B,_[Vt]=N,w[Vt]=gt,T[Vt]=bt,b[Vt]=Ct,E[Vt]=Dt,v[Vt]=Dt,S[Vt]=Ot,y[Vt]=Gt,C[Vt]=Ut,xt[Vt]=te[0],$[Vt]=te[1],W[Vt]=te[2],D[Vt]=Mt,K[Vt]=ne,Y[Vt]=oe,rt[Vt]=ie,V[Vt]=Zt,Z[Vt]=xe,mt[Vt]=0,ct[Vt]=ot(0,Math.PI*2),st[Vt]=ot(-6,6),oe===Co){let Se=ot(-1,1),Oe=ot(-1,1),Pe=ot(-1,1);const ze=Math.sqrt(Se*Se+Oe*Oe+Pe*Pe)||1;Se/=ze,Oe/=ze,Pe/=ze,z[Vt]=Se,U[Vt]=Oe,X[Vt]=Pe,st[Vt]=ot(5,12)*(O()<.5?-1:1)}else z[Vt]=0,U[Vt]=1,X[Vt]=0;return Vt}function Lt(P,B,N,gt,bt,Ct,Dt,Ot,Gt,Ut,te,Mt=0,ne=.05){const oe=q;q=(q+1)%a;const ie=.25,Zt=pt(P+ie,B)-pt(P-ie,B),xe=pt(P,B+ie)-pt(P,B-ie);let Vt=-Zt/(2*ie),Se=1,Oe=-xe/(2*ie);const Pe=Math.sqrt(Vt*Vt+Se*Se+Oe*Oe);Vt/=Pe,Se/=Pe,Oe/=Pe,St[oe]=P,zt[oe]=pt(P,B)+ne,J[oe]=B,vt[oe]=Vt,k[oe]=Se,nt[oe]=Oe,Bt[oe]=N,jt[oe]=gt,Ht[oe]=bt,Kt[oe]=Ct,Xt[oe]=0,A[oe]=Dt,R[oe]=Mt,Q[oe]=Ot[0],ut[oe]=Ot[1],wt[oe]=Ot[2],Et[oe]=Gt,Wt[oe]=Ut,Ft[oe]=te,Nt[oe]=1}function qt(P,B,N,gt,bt,Ct,Dt){for(let Ot=0;Ot<gt;Ot++){const Gt=ot(0,Math.PI*2),Ut=bt*ot(.5,1);It(P,B,N,Math.cos(Gt)*Ut,ot(.6,1.6)*bt*.5,Math.sin(Gt)*Ut,ot(.25,.45),Dt,Dt*.3,1,Ct,1,.85,dr,.4,3,0)}}function Yt(P,B,N,gt,bt,Ct,Dt){const Ot=pt(P,B)+.12;for(let Gt=0;Gt<N;Gt++){const Ut=ot(0,Math.PI*2),te=ot(.3,1)*gt;It(P+Math.cos(Ut)*.1,Ot,B+Math.sin(Ut)*.1,Math.cos(Ut)*te,ot(.3,.9),Math.sin(Ut)*te,ot(.45,.75),Ct,Ct*2.6,1,bt,Dt,0,dr,-.15,2.6,0)}}function le(P,B,N,gt){const bt=pt(P,B)+.3;for(let Ct=0;Ct<N;Ct++){const Dt=ot(0,Math.PI*2),Ot=ot(.6,3.2)*gt,Gt=ot(6.5,11)*gt,Ut=At.pool[(Ct+Math.floor(O()*7))%At.pool.length],te=ot(.18,.26);It(P+Math.cos(Dt)*.4,bt,B+Math.sin(Dt)*.4,Math.cos(Dt)*Ot,Gt,Math.sin(Dt)*Ot,ot(3.2,4.4),te,te,.6,Ut,1,0,Co,.62,1.15,1)}}function se(P,B,N,gt,bt){for(let Ct=0;Ct<G;Ct++)if(!at[Ct]){at[Ct]=1,it[Ct]=P,F[Ct]=B,yt[Ct]=N,ft[Ct]=gt,dt[Ct]=bt;return}}function ae(P){const B=P.x+P.nx*oi,N=P.z+P.nz*oi,gt=Math.min(1,(P.speed||0)/14),bt=pt(B,N)+oi;Lt(B,N,.45,1+gt*.6,.12,.04,.2,At.white,.9,.6,0);const Ct=5+Math.round(gt*5);for(let Dt=0;Dt<Ct;Dt++){const Ot=Dt%2?1:-1,Gt=ot(1.5,3.5)*(.5+gt),Ut=-P.nz*Ot,te=P.nx*Ot,Mt=ot(-.35,.35);It(B,bt,N,(Ut+P.nx*Mt)*Gt,ot(.8,2.2),(te+P.nz*Mt)*Gt,ot(.22,.4),ot(.07,.12),.02,1,Dt%3?At.white:At.chalk,1,.75,dr,.5,4,0)}Yt(B,N,3,.8,At.dustDark,.16,.32)}function pe(P){const B=P.speed||0;if(B<.8)return;const N=Math.min(1,B/12),gt=P.x-P.nx*oi*.95,bt=P.z-P.nz*oi*.95,Ct=P.id===0?.6:1,Dt=pt(gt,bt)+oi*.6;if(P.kind==="hedge"||P.kind==="tree"){const Ot=Math.round((2+5*N)*Ct);for(let Gt=0;Gt<Ot;Gt++){const Ut=ot(.8,2.2)*(.5+N);It(gt,Dt+.2,bt,(P.nx+ot(-.8,.8))*Ut,ot(1,3),(P.nz+ot(-.8,.8))*Ut,ot(.6,1),ot(.1,.16),.1,.6,At.leaf,1,0,Co,.35,2,2)}}else if(P.kind==="bumper")qt(gt,Dt,bt,Math.round((3+5*N)*Ct),2.5+3*N,At.gold,.14),Lt(gt,bt,.3,1+N,.1,.03,.22,At.cream,.8,.7,0);else{const Ot=Math.round((2+4*N)*Ct);Yt(gt,bt,Ot,.6+N,P.kind==="cushion"?At.grey:At.dustDark,.14+.06*N,.3+.2*N),P.kind==="cushion"&&qt(gt,Dt,bt,Math.round(2+3*N),1.5+2*N,At.chalk,.09)}}function he(P){const B=P.x,N=P.z;if(P.kind==="water"){Lt(B,N,.35,2.4,.16,.04,.75,At.foam,.95,.25,.22,0,.08),Lt(B,N,.2,1.6,.12,.03,.6,At.foam,.8,.25,0,.16,.08);const gt=pt(B,N)+.1,bt=16;for(let Ct=0;Ct<bt;Ct++){const Dt=Ct/bt*Math.PI*2+ot(-.2,.2),Ot=ot(1,2.6);It(B,gt,N,Math.cos(Dt)*Ot,ot(3.5,6.5),Math.sin(Dt)*Ot,1.4,ot(.1,.16),.08,1,Ct%3?At.foam:At.water,.95,.3,dr,1,.6,2)}for(let Ct=0;Ct<5;Ct++)It(B+ot(-.15,.15),gt,N+ot(-.15,.15),ot(-.4,.4),ot(6,8.5),ot(-.4,.4),1.4,ot(.14,.2),.08,1,At.foam,.95,.3,dr,1,.5,2)}else Yt(B,N,10,1.6,At.grey,.28,.5),qt(B,pt(B,N)+.4,N,5,2,At.white,.12)}function Qt(P){const B=pt(P.x,P.z)+oi+.2;for(let gt=0;gt<6;gt++){const bt=gt/6*Math.PI*2;It(P.x,B,P.z,Math.cos(bt)*1.6,ot(1.5,2.6),Math.sin(bt)*1.6,ot(.4,.6),.3,.05,1,gt%2?At.gold:At.white,1,.8,Hf,.6,2.5,0)}const N=j();N&&N.cup&&Lt(N.cup.x,N.cup.z,kt.HOLE_R,kt.HOLE_R+.5,.14,.04,.3,At.gold,.9,.6,0)}function ge(){const P=j();if(!P||!P.cup)return;const B=P.cup.x,N=P.cup.z;Lt(B,N,kt.HOLE_R,kt.HOLE_R*3,.22,.04,.6,At.white,.95,.7,0),Lt(B,N,kt.HOLE_R,kt.HOLE_R*2.2,.14,.03,.5,At.gold,.9,.7,0,.12);const gt=pt(B,N)+.2;for(let bt=0;bt<12;bt++){const Ct=bt/12*Math.PI*2,Dt=ot(1.4,2.6);It(B,gt,N,Math.cos(Ct)*Dt,ot(3,5.5),Math.sin(Ct)*Dt,ot(.5,.8),ot(.22,.32),.04,1,bt%3?At.gold:At.white,1,.8,Hf,.8,1.8,0)}le(B,N,Math.round(10*c+4),.7)}function re(P){if(!P||P.picked)return;const B=P.level||j();if(!B||!B.cup)return;const N=P.strokes-P.par,gt=P.strokes===1,bt=gt||N<=-2?150:N===-1?100:N===0?60:30,Ct=Math.max(12,Math.round(bt*c)),Dt=B.cup.x,Ot=B.cup.z,Gt=gt||N<=-2?Math.round(Ct*.4):Ct;le(Dt,Ot,Gt,N<=-1||gt?1.15:.9),(gt||N<=-2)&&(se(.35,1,Dt-2,Ot,Math.round(Ct*.3)),se(.7,1,Dt+2,Ot,Math.round(Ct*.3)))}const Te=[];e&&e.on&&(Te.push(e.on("ball:contact",ae)),Te.push(e.on("ball:wall",pe)),Te.push(e.on("ball:hazard",he)),Te.push(e.on("ball:hop",Qt)),Te.push(e.on("ball:holed",ge)),Te.push(e.on("hole:done",re)));let en=0,Fe=NaN,nn=NaN;function We(){if(!n||n.state!=="rolling"||!n.world){Fe=NaN;return}const P=n.world.balls[1];if(!P||P.mode!=="roll"){Fe=NaN;return}if(Number.isFinite(Fe)&&(en+=Math.sqrt((P.x-Fe)*(P.x-Fe)+(P.z-nn)*(P.z-nn))),Fe=P.x,nn=P.z,en<.3||(en=0,Rt(P.x,P.z)!=="sand"))return;const B=Math.sqrt(P.vx*P.vx+P.vz*P.vz);if(B<.4)return;const N=P.x-P.vx/B*oi*.6,gt=P.z-P.vz/B*oi*.6;Yt(N,gt,2,.4+Math.min(1,B/8),At.sand,.18,.55)}function hn(P){P=Number.isFinite(P)&&P>0?Math.min(P,.1):0,We();for(let Mt=0;Mt<G;Mt++)at[Mt]&&(it[Mt]-=P,it[Mt]<=0&&(at[Mt]=0,F[Mt]===1&&le(yt[Mt],ft[Mt],dt[Mt],1.15)));const B=l.attrs.iPos.array,N=l.attrs.iRot.array,gt=l.attrs.iSize.array,bt=l.attrs.iCol.array;let Ct=0;if(lt>0)for(let Mt=0;Mt<o;Mt++){if(!H[Mt])continue;if(E[Mt]-=P,E[Mt]<=0){H[Mt]=0,lt--;continue}if(!mt[Mt]){const Vt=Math.exp(-V[Mt]*P);if(w[Mt]*=Vt,b[Mt]*=Vt,T[Mt]=T[Mt]*Vt-Oy*rt[Mt]*P,p[Mt]+=w[Mt]*P,M[Mt]+=T[Mt]*P,_[Mt]+=b[Mt]*P,ct[Mt]+=st[Mt]*P,Y[Mt]===Co&&rt[Mt]>0&&(p[Mt]+=Math.sin(ct[Mt]*.7+Mt)*.4*P),Z[Mt]&&T[Mt]<0){const Se=pt(p[Mt],_[Mt])+.03;if(M[Mt]<=Se){if(Z[Mt]===2){H[Mt]=0,lt--;continue}M[Mt]=Se,mt[Mt]=1,z[Mt]=1,U[Mt]=0,X[Mt]=0,ct[Mt]=Math.PI/2+ot(-.15,.15),E[Mt]>1.2&&(E[Mt]=1.2)}}}const ne=1-E[Mt]/v[Mt],oe=Math.min(1,ne*12),ie=mt[Mt]?Math.min(1,E[Mt]/1.2):Math.min(1,E[Mt]/(v[Mt]*.35)),Zt=S[Mt]+(y[Mt]-S[Mt])*ne,xe=Ct*4;B[xe]=p[Mt],B[xe+1]=M[Mt],B[xe+2]=_[Mt],B[xe+3]=Y[Mt],N[xe]=z[Mt],N[xe+1]=U[Mt],N[xe+2]=X[Mt],N[xe+3]=ct[Mt],gt[xe]=Zt,gt[xe+1]=Zt*C[Mt],gt[xe+2]=K[Mt],gt[xe+3]=0,bt[xe]=xt[Mt],bt[xe+1]=$[Mt],bt[xe+2]=W[Mt],bt[xe+3]=D[Mt]*oe*ie,Ct++}if(l.geo.instanceCount=Ct,Ct>0)for(let Mt=0;Mt<oc.length;Mt++){const ne=l.attrs[oc[Mt]],oe=x[Mt];oe.count=Ct*4,ne.updateRanges.length=0,ne.updateRanges.push(oe),ne.needsUpdate=!0}f.visible=Ct>0;const Dt=d.attrs.iRing.array,Ot=d.attrs.iRingN.array,Gt=d.attrs.iRingC.array,Ut=d.attrs.iRingF.array;let te=0;for(let Mt=0;Mt<a;Mt++){if(!Nt[Mt])continue;if(R[Mt]>0){R[Mt]-=P;continue}Xt[Mt]+=P;const ne=Xt[Mt]/A[Mt];if(ne>=1){Nt[Mt]=0;continue}const oe=1-(1-ne)*(1-ne)*(1-ne),ie=te*4;Dt[ie]=St[Mt],Dt[ie+1]=zt[Mt],Dt[ie+2]=J[Mt],Dt[ie+3]=Bt[Mt]+(jt[Mt]-Bt[Mt])*oe,Ot[ie]=vt[Mt],Ot[ie+1]=k[Mt],Ot[ie+2]=nt[Mt],Ot[ie+3]=Ht[Mt]+(Kt[Mt]-Ht[Mt])*ne,Gt[ie]=Q[Mt],Gt[ie+1]=ut[Mt],Gt[ie+2]=wt[Mt],Gt[ie+3]=Et[Mt]*(1-ne*ne),Ut[te*2]=Wt[Mt],Ut[te*2+1]=Ft[Mt]*(1-ne),te++}if(d.geo.instanceCount=te,te>0)for(let Mt=0;Mt<ac.length;Mt++){const ne=d.attrs[ac[Mt]],oe=m[Mt];oe.count=te*ne.itemSize,ne.updateRanges.length=0,ne.updateRanges.push(oe),ne.needsUpdate=!0}g.visible=te>0}function I(){H.fill(0),Nt.fill(0),at.fill(0),lt=0,en=0,Fe=NaN,l.geo.instanceCount=0,d.geo.instanceCount=0,f.visible=!1,g.visible=!1}function L(){for(const P of Te)typeof P=="function"&&P();s.remove(f,g),l.geo.dispose(),d.geo.dispose(),u.dispose(),h.dispose()}return{update:hn,clear:I,dispose:L,get count(){return l.geo.instanceCount},get ringCount(){return d.geo.instanceCount}}}const ue={enabled:!0,pulling:!1,pull:0,strike:-1,placing:!1,hint:0};function Wy(){ue.enabled=!0,ue.pulling=!1,ue.pull=0,ue.strike=-1,ue.placing=!1,ue.hint=0}const Kn=kt.R,_l=.04,cc=220,lc=120,Xy=.2,Wf={halfW:.27,haloW:.08,period:1,speed:2,startGap:Kn+.1},Xf={halfW:.42,haloW:.09,startGap:Kn+.12},qy=.95,Yy=1.55,Ky=Kn+.22,$y=.85,Fn={rest:.12,travel:2.4,elev:9*Math.PI/180,hold:.12},qf=me.eightArrow;class Ue{constructor(t){this.value=t}}const jy=`
attribute float aDist;
attribute float aSide;
varying float vDist;
varying float vSide;
void main() {
  vDist = aDist;
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Zy=`
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
}`,Jy=`
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
}`,Qy=`
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
}`;function Yf(i,t){return new gn({uniforms:{uColor:{value:new ce(t.color)},uHalo:{value:new ce(me.guideHalo)},uHaloAlpha:new Ue(t.haloAlpha),uHalfW:new Ue(t.halfW),uHaloW:new Ue(t.haloW),uLen:new Ue(1),uStartGap:new Ue(t.startGap),uEndGap:new Ue(0),uFadeLen:new Ue(0),uPeriod:new Ue(t.period||1),uSpeed:new Ue(t.speed||0),uTime:i,uOpacity:new Ue(1),uArrow:new Ue(t.arrow?1:0),uHead:new Ue(1),uStub:new Ue(1e6)},vertexShader:jy,fragmentShader:Zy,transparent:!0,depthWrite:!1,toneMapped:!1,side:yn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function Kf(i,t){const e=i*2,n=new Ve,s=new Float32Array(e*6),r=new Float32Array(e*2),o=new Float32Array(e*2);for(let f=0;f<e;f++)o[f*2]=-1,o[f*2+1]=1;const a=new Uint16Array((e-1)*6);for(let f=0;f<e-1;f++){const d=f*2;a[f*6]=d,a[f*6+1]=d+1,a[f*6+2]=d+2,a[f*6+3]=d+1,a[f*6+4]=d+3,a[f*6+5]=d+2}n.setIndex(new ke(a,1));const c=new ke(s,3).setUsage(Fi),l=new ke(r,1).setUsage(Fi);n.setAttribute("position",c),n.setAttribute("aDist",l),n.setAttribute("aSide",new ke(o,1)),n.setDrawRange(0,0),n.boundingSphere=new Vi(new et,1e4);const u=new De(n,t);return u.frustumCulled=!1,{mesh:u,geo:n,pos:s,dist:r,posAttr:c,distAttr:l,maxPairs:e,len:0,pairs:0}}function uc(i,t,e,n,s,r,o,a){const c=i.pos,l=t*6,u=e-s,f=n-r,d=e+s,h=n+r;return c[l]=u,c[l+1]=a(u,f)+_l,c[l+2]=f,c[l+3]=d,c[l+4]=a(d,h)+_l,c[l+5]=h,i.dist[t*2]=o,i.dist[t*2+1]=o,t+1}function $f(i,t,e,n,s){let r=0,o=0;for(let a=0;a<e&&r<i.maxPairs-1;a++){const c=t[a*2],l=t[a*2+1];let u=0,f=0,d=0,h=0;if(a>0){u=c-t[a*2-2],f=l-t[a*2-1];const x=Math.sqrt(u*u+f*f);o+=x,x>0&&(u/=x,f/=x)}if(a<e-1){d=t[a*2+2]-c,h=t[a*2+3]-l;const x=Math.sqrt(d*d+h*h);x>0&&(d/=x,h/=x)}if(a===0&&(u=d,f=h),a===e-1&&(d=u,h=f),u*d+f*h>.6){let x=-(f+h),m=u+d;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const M=-x*f+m*u,_=s/(M>.8?M:.8);r=uc(i,r,c,l,x*_,m*_,o,n)}else r=uc(i,r,c,l,-f*s,u*s,o,n),r=uc(i,r,c,l,-h*s,d*s,o,n)}return i.pairs=r,i.len=o>.001?o:.001,i.posAttr.needsUpdate=!0,i.distAttr.needsUpdate=!0,i.geo.setDrawRange(0,r>1?(r-1)*6:0),i.len}function jf(i,t,e,n){const s=i.length>>1;if(s<1)return 0;let r=0;e[0]=i[0],e[1]=i[1],r=1;let o=0,a=i[0],c=i[1];for(let l=1;l<s;l++){const u=i[l*2],f=i[l*2+1],d=u-a,h=f-c,g=Math.sqrt(d*d+h*h);if(g<1e-6)continue;o+=g;let x=!1;if(l<s-1){const p=i[l*2+2]-u,M=i[l*2+3]-f,_=Math.sqrt(p*p+M*M);_>1e-6&&(x=(d*p+h*M)/(g*_)<.995)}const m=l===s-1;if(m||x||o>=t||r>=n-1){if(r>=n-1&&!m){a=u,c=f;continue}e[r*2]=u,e[r*2+1]=f,r++,o=0}a=u,c=f}return r===1&&s>1&&(e[2]=i[s*2-2],e[3]=i[s*2-1],r=2),r}const bd=0,t2=1,e2=2,n2=3,i2=[0,3,1,2],s2=[64,8,6,6];function r2(i){const t=[];let e=0,n=0;for(let p=0;p<4;p++){const M=s2[p];t.push({seg:M,v0:e,count:(M+1)*(M+1),half:1,cx:NaN,cz:NaN}),e+=(M+1)*(M+1),n+=M*M*2}const s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Float32Array(e),a=new Float32Array(e),c=new Uint16Array(n*3);let l=0;for(let p=0;p<4;p++){const{seg:M,v0:_,count:w}=t[p];for(let T=0;T<w;T++)o[_+T]=i2[p];for(let T=0;T<M;T++)for(let b=0;b<M;b++){const E=_+T*(M+1)+b,v=E+1,S=E+M+1,y=S+1;c[l++]=E,c[l++]=S,c[l++]=v,c[l++]=v,c[l++]=S,c[l++]=y}}const u=new Ve,f=new ke(s,3).setUsage(Fi),d=new ke(r,2).setUsage(Fi),h=new ke(a,1).setUsage(Fi);u.setAttribute("position",f),u.setAttribute("aLocal",d),u.setAttribute("aKind",new ke(o,1)),u.setAttribute("aMask",h),u.setIndex(new ke(c,1)),u.boundingSphere=new Vi(new et,1e4);const g={uTime:i,uOpacity:new Ue(1),uPlaceR:new Ue(4),uDashes:new Ue(24),uActive:new Ue(0),uRingA:new Ue(1),uGhostA:new Ue(0),uMarkA:new Ue(0),uMarkKind:new Ue(0),uHintA:new Ue(0),uFwd:{value:new Jt(0,-1)},uNormal:{value:new Jt(1,0)},uWhite:{value:new ce(me.guideWhite)},uShade:{value:new ce(me.guideHalo)},uWarn:{value:new ce(me.guideWarn)}},x=new gn({uniforms:g,vertexShader:Jy,fragmentShader:Qy,transparent:!0,depthWrite:!1,toneMapped:!1,side:yn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),m=new De(u,x);return m.frustumCulled=!1,m.renderOrder=5,{mesh:m,geo:u,mat:x,uniforms:g,parts:t,pos:s,local:r,mask:a,posAttr:f,localAttr:d,maskAttr:h}}function Ro(i,t,e,n,s,r){const o=i.parts[t],{seg:a,v0:c}=o,l=i.pos,u=i.local;for(let f=0;f<=a;f++){const d=f/a*2*s-s;for(let h=0;h<=a;h++){const g=h/a*2*s-s,x=c+f*(a+1)+h,m=e+g,p=n+d;l[x*3]=m,l[x*3+1]=r(m,p)+_l,l[x*3+2]=p,u[x*2]=g,u[x*2+1]=d}}o.cx=e,o.cz=n,o.half=s,i.posAttr.needsUpdate=!0,i.localAttr.needsUpdate=!0}function zs(i,t,e,n,s,r,o){const a=e+s*o,c=n+r*o;return!!t(a,c)||Th(i,e,n,a,c)}function Po(i,t,e,n,s,r,o,a){for(let c=0;c<6;c++){const l=(o+a)*.5;zs(i,t,e,n,s,r,l)?a=l:o=l}return(o+a)*.5}function o2(i,t,e,n,s){const r=i.parts[bd],{seg:o,v0:a,half:c}=r,l=i.local,u=i.mask,f=2*c/o,d=.5/f;for(let h=a,g=a+r.count;h<g;h++){const x=l[h*2],m=l[h*2+1],p=Math.sqrt(x*x+m*m);if(p>c){u[h]=1;continue}if(p<1e-6){u[h]=0;continue}const M=x/p,_=m/p,w=p>f?p-f:0,T=p+f;let b;zs(t,e,n,s,M,_,p)?zs(t,e,n,s,M,_,w)?zs(t,e,n,s,M,_,T)?b=1:b=.5+(Po(t,e,n,s,M,_,T,p)-p)*d:b=.5+(p-Po(t,e,n,s,M,_,w,p))*d:zs(t,e,n,s,M,_,T)?b=.5-(Po(t,e,n,s,M,_,p,T)-p)*d:w>0&&zs(t,e,n,s,M,_,w)?b=.5-(p-Po(t,e,n,s,M,_,p,w))*d:b=0,u[h]=b<0?0:b>1?1:b}i.maskAttr.needsUpdate=!0}function a2(){const a=[[0,0,4030425],[0,.07,4030425],[.025,.1,4030425],[.07,.104,4030425],[.07,.104,16183516],[.24,.107,16183516],[.24,.107,15320720],[3.4,.15,15320720],[3.4,.155,16183516],[3.48,.155,16183516],[3.48,.156,7027231],[4.7,.18,7027231],[4.7,.182,16763196],[4.8,.183,16763196],[4.8,.184,2302763],[5.9,.19,2302763],[5.9,.192,7027231],[6.35,.196,7027231],[6.35,.196,1447452],[6.43,.17,1447452],[6.43,0,1447452]],c=14,l=a.length*c,u=new Float32Array(l*3),f=new Float32Array(l*3),d=new ce;for(let M=0;M<a.length;M++){const[_,w,T]=a[M];d.setHex(T);for(let b=0;b<c;b++){const E=b/c*Math.PI*2,v=(M*c+b)*3;u[v]=_,u[v+1]=Math.cos(E)*w,u[v+2]=Math.sin(E)*w,f[v]=d.r,f[v+1]=d.g,f[v+2]=d.b}}const h=[];for(let M=0;M<a.length-1;M++)for(let _=0;_<c;_++){const w=M*c+_,T=M*c+(_+1)%c,b=w+c,E=T+c;h.push(w,T,b,T,E,b)}const g=new Ve;g.setAttribute("position",new ke(u,3)),g.setAttribute("color",new ke(f,3)),g.setIndex(h),g.computeVertexNormals();const x=g.attributes.normal.array;for(let M=0;M<x.length;M++)x[M]!==x[M]&&(x[M]=0);g.computeBoundingSphere();const m=new g1({vertexColors:!0,roughness:.42,metalness:0}),p=new De(g,m);return p.castShadow=!1,p.receiveShadow=!1,p.frustumCulled=!1,p}function c2(i){const t=new Ue(0),e=new os;e.name="guides";const n=r2(t),s=Yf(t,{color:me.guideWhite,haloAlpha:.6,...Wf}),r=Yf(t,{color:qf,haloAlpha:.7,arrow:!0,...Xf}),o=Kf(cc,s),a=Kf(lc,r);o.mesh.renderOrder=10,a.mesh.renderOrder=11;const c=a2();e.add(n.mesh,o.mesh,a.mesh,c),i&&i.scene&&i.scene.add(e);const l=new Float64Array(Math.max(cc,lc)*2),u=new ce(me.guideWhite),f=new ce(me.guideWarn),d=new ce(qf),h=new et(1,0,0),g=new et,x=n.uniforms,m={visible:!0,fade:0,t:0,lastState:"idle",level:null,intent:null,guide:null,ringX:NaN,ringZ:NaN,hintA:0,gap:1.4,hold:0,aimX:1,aimZ:0,spin:0,top:0,ballX:0,ballZ:0,aimKey:0,poseKey:-1,poseGap:NaN};function p(){n.mesh.visible=!1,o.mesh.visible=!1,a.mesh.visible=!1}p(),c.visible=!1;function M(E,v){const y=E.level.heightAt,C=v&&v.cue;if(!C||C.points.length<4)o.geo.setDrawRange(0,0),x.uGhostA.value=0;else{const xt=jf(C.points,Xy,l,cc),$=$f(o,l,xt,y,Wf.halfW),W=s.uniforms;W.uLen.value=$,W.uColor.value.copy(v.warn?f:u),W.uEndGap.value=C.hit?Kn*.9:0,W.uFadeLen.value=C.hit?0:Math.min(3,$*.4),C.hit?(x.uGhostA.value=1,Ro(n,e2,C.ghost.x,C.ghost.z,Ky,y),x.uNormal.value.set(C.normal.x,C.normal.z)):x.uGhostA.value=0}const z=v&&v.eight;if(!z||z.points.length<4){a.geo.setDrawRange(0,0),x.uMarkA.value=0;return}const U=jf(z.points,.25,l,lc),X=$f(a,l,U,y,Xf.halfW),ct=r.uniforms;ct.uLen.value=X;let st=1e6;if(z.bounce){let xt=0;for(let $=1;$<U;$++){const W=l[$*2]-l[$*2-2],D=l[$*2+1]-l[$*2-1];if(xt+=Math.sqrt(W*W+D*D),Math.abs(l[$*2]-z.bounce.x)<1e-6&&Math.abs(l[$*2+1]-z.bounce.z)<1e-6){st=xt;break}}}if(ct.uStub.value=st,z.hazard){ct.uColor.value.copy(f),ct.uHead.value=0,ct.uEndGap.value=.62,x.uMarkA.value=1,x.uMarkKind.value=z.hazard==="water"?0:1;const xt=(U-1)*2;Ro(n,n2,l[xt],l[xt+1],qy,y)}else ct.uColor.value.copy(d),ct.uHead.value=1,ct.uEndGap.value=0,x.uMarkA.value=0}function _(E,v,S){if(S)m.gap=-.02;else if(ue.strike>=0){const W=Fn.rest+ue.pull*Fn.travel,D=ue.strike;m.gap=W+(-.02-W)*D*D}else if(ue.pulling)m.gap=Fn.rest+ue.pull*Fn.travel;else if(m.gap!==Fn.rest){const W=v*12>1?1:v*12;m.gap+=(Fn.rest-m.gap)*W,Math.abs(m.gap-Fn.rest)<.001&&(m.gap=Fn.rest)}if(m.gap===m.poseGap&&m.poseKey===m.aimKey)return;m.poseGap=m.gap,m.poseKey=m.aimKey;const y=m.spin*Kn*.55,C=m.top*Kn*.55,z=Math.sqrt(Math.max(Kn*Kn-y*y-C*C,0))+m.gap,U=m.aimX,X=m.aimZ,ct=m.ballX-U*z-X*y,st=m.ballZ-X*z+U*y,xt=E.level.heightAt(m.ballX,m.ballZ)+Kn+C,$=Math.cos(Fn.elev);g.set(-U*$,Math.sin(Fn.elev),-X*$),c.quaternion.setFromUnitVectors(h,g),c.position.set(ct,xt,st)}function w(E){const v=Math.sqrt(E.dx*E.dx+E.dz*E.dz)||1;m.aimX=E.dx/v,m.aimZ=E.dz/v,m.spin=E.spin,m.top=Number.isFinite(E.top)?E.top:0,m.ballX=E.x,m.ballZ=E.z,m.aimKey++}function T(E,v){m.t+=v,t.value=m.t;const S=E?E.state:"idle",y=!!(E&&E.world&&E.level&&S==="ready");m.lastState==="ready"&&S==="rolling"&&(m.hold=Fn.hold),S!==m.lastState&&S==="ready"&&(m.gap=1.4,m.intent=null),m.lastState=S;const C=m.visible&&y&&ue.enabled;if(C?m.fade=m.fade+v/.18>1?1:m.fade+v/.18:m.fade=0,C?c.visible=!0:m.hold>0&&m.visible&&E&&E.level?(m.hold-=v,c.visible=m.hold>0):(m.hold=0,c.visible=!1),!C){p(),c.visible&&_(E,v,!0);return}const z=E.level;z!==m.level&&(m.level=z,m.aimKey++,m.ringX=NaN,m.intent=null,m.guide=null,x.uPlaceR.value=z.placeR,x.uDashes.value=Math.max(12,Math.round(2*Math.PI*z.placeR/1.25)));const U=E.world.balls[1];(U.x!==m.ringX||U.z!==m.ringZ)&&(m.ringX=U.x,m.ringZ=U.z,Ro(n,bd,U.x,U.z,z.placeR+$y,z.heightAt),o2(n,E.world,z.hazardAt,U.x,U.z));const X=E.intent;if(X!==m.intent){m.intent=X,w(X),Ro(n,t2,X.x,X.z,Yy,z.heightAt);const xt=E.guide();xt!==m.guide&&(m.guide=xt,M(E,xt))}const ct=m.fade;x.uOpacity.value!==ct&&(x.uOpacity.value=ct,s.uniforms.uOpacity.value=ct,r.uniforms.uOpacity.value=ct),x.uActive.value=ue.placing?1:0;const st=ue.placing?0:ue.hint;if(m.hintA!==st){const xt=v*4>1?1:v*4;m.hintA+=(st-m.hintA)*xt,Math.abs(m.hintA-st)<.002&&(m.hintA=st),x.uHintA.value=m.hintA}if(i&&i.camera){const xt=i.camera.matrixWorld.elements,$=Math.sqrt(xt[8]*xt[8]+xt[10]*xt[10]);if($>1e-4){const W=-xt[8]/$,D=-xt[10]/$,K=x.uFwd.value;(W!==K.x||D!==K.y)&&K.set(W,D)}}n.mesh.visible=!0,o.mesh.visible=o.geo.drawRange.count>0,a.mesh.visible=a.geo.drawRange.count>0,_(E,v,!1)}const b={update:T,setVisible(E){m.visible=!!E},dispose(){e.parent&&e.parent.remove(e),n.geo.dispose(),n.mat.dispose(),o.geo.dispose(),a.geo.dispose(),s.dispose(),r.dispose(),c.geometry.dispose(),c.material.dispose()}};return Object.defineProperty(b,"_debug",{value:{group:e,decals:n,cuePath:o,arrow:a,stick:c,cueMat:s,arrowMat:r,st:m},enumerable:!1}),b}const Zf="ebg-shot-style",l2=6,wd=30,Jf=14,_r=100,Mr=100,yr=122,Jo=92,Sr=22,Ed=Jo/2-Sr/2-4,pr=Jo/2-Ed,u2=20,f2=10,h2=6,d2=10,Qf=8,p2=`
.ebg-shot{position:absolute;inset:0;z-index:20;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .16s ease,visibility 0s linear .16s;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;font-family:"Fredoka",system-ui,sans-serif;font-weight:600;color:#fff;--top:${wd}px;--travel:150px}
.ebg-shot.on{opacity:1;visibility:visible;transition:opacity .2s ease}
.ebg-txt{-webkit-text-stroke:4px #13261b;paint-order:stroke fill;text-shadow:0 2px 0 rgba(0,0,0,.25)}
@supports not (paint-order:stroke){.ebg-txt{-webkit-text-stroke:0;text-shadow:0 0 2px #13261b,0 0 2px #13261b,0 2px 0 #13261b}}
.ebg-num{font-family:"Lilita One",system-ui,sans-serif;font-weight:400;letter-spacing:.02em}
.ebg-pow{position:absolute;left:0;top:0;width:${_r}px;height:200px;pointer-events:none}
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
.ebg-spin{position:absolute;left:0;top:0;box-sizing:border-box;width:${Mr}px;height:${yr}px;display:none;flex-direction:column;align-items:center;justify-content:flex-end;padding:4px;pointer-events:auto;touch-action:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;cursor:move}
.ebg-spin.on{display:flex}
.ebg-spin.drag{cursor:grabbing}
.ebg-spin-label{font-size:14px;line-height:1;letter-spacing:.08em;margin-bottom:6px}
.ebg-spin-face{position:relative;flex:none;width:${Jo}px;height:${Jo}px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffffff 0,#fffdf4 38%,#e6dfca 100%);box-shadow:0 0 0 3px #13261b,0 4px 8px rgba(0,0,0,.3)}
.ebg-spin-ring{position:absolute;inset:${pr}px;border-radius:50%;border:2px dashed rgba(19,38,27,.2)}
.ebg-spin-h,.ebg-spin-v{position:absolute;border-radius:1px;background:rgba(19,38,27,.2)}
.ebg-spin-h{left:${pr}px;right:${pr}px;top:50%;height:2px;margin-top:-1px}
.ebg-spin-v{top:${pr}px;bottom:${pr}px;left:50%;width:2px;margin-left:-1px}
.ebg-spin-mid{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:rgba(19,38,27,.35)}
.ebg-spin-dot{position:absolute;left:50%;top:50%;width:${Sr}px;height:${Sr}px;margin:-${Sr/2}px 0 0 -${Sr/2}px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#6ea3ec 0,#3d7fd9 60%,#2f69b8 100%);box-shadow:0 0 0 3px #fff,0 0 0 5px #13261b;transition:transform .14s ease-out}
.ebg-spin.drag .ebg-spin-dot{transition:none}
.ebg-ff{position:absolute;z-index:20;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom) + 12px));transform:translateX(-50%);padding:6px 16px;border-radius:999px;background:rgba(16,36,26,.5);font-family:"Fredoka",system-ui,sans-serif;font-weight:600;font-size:16px;line-height:1.2;color:#fff;opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s linear .25s,background .15s;pointer-events:none;white-space:nowrap;-webkit-user-select:none;user-select:none}
.ebg-ff.show,.ebg-ff.on{opacity:1;visibility:visible;transition:opacity .25s,background .15s}
.ebg-ff.on{background:rgba(255,138,42,.9)}
.ebg-safe{position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}
`,m2='<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7" stroke="#13261b" stroke-width="8"/><path d="M5 8l7 7 7-7" stroke="#fff" stroke-width="4"/></g></svg>';function Le(i,t,e,n){const s=document.createElement(i);return t&&(s.className=t),n&&(s.textContent=n),e&&e.appendChild(s),s}function g2(i,t,e={top:0,right:0,bottom:0,left:0},n=!1){const s=t>i,r=s?Math.max(90,Math.min(170,Math.round(t*.22))):Math.max(110,Math.min(210,Math.round(t*.3))),o=wd+r+Jf,a=Math.max(h2,e.bottom),c=Math.max(f2,e.right+6);let l,u=null;const f={top:0,right:0,bottom:0,left:0};if(s){l={left:Math.round(i/2-_r/2),top:t-a-o,width:_r,height:o},n&&(u={left:i-c-Mr,top:t-a-Jf-yr,width:Mr,height:yr});const d=Math.min(l.top,u?u.top:1/0);f.bottom=t-d+Qf}else{l={left:i-c-_r,top:t-a-o,width:_r,height:o},n&&(u={left:i-c-Mr,top:l.top-d2-yr,width:Mr,height:yr});const d=Math.min(l.left,u?u.left:1/0);f.right=i-d+Qf}return{portrait:s,travel:r,pow:l,spin:u,insets:f}}function x2(i,t={}){if(typeof document>"u"||!i){const A=()=>{},R={top:0,right:0,bottom:0,left:0};return{setVisible:A,setSpinEnabled:A,setSpin:A,setPull:A,setPreset:A,setPullHint:A,setFastForward:A,cancelPull:A,travel:()=>150,insets:()=>R,layout:A,parts:{},dispose:A}}if(!document.getElementById||!document.getElementById(Zf)){const A=Le("style");A.id=Zf,A.textContent=p2,(document.head||document.body).appendChild(A)}const e=Le("div","ebg-shot",i),n=Le("div","ebg-safe",e),s=Le("div","ebg-pow",e),r=Le("div","ebg-clip",s),o=Le("div","ebg-track",r),a=Le("div","ebg-fill",o);for(const A of[.25,.5,.75]){const R=Le("div","ebg-tick",o);R.style.top=A*100+"%"}const c=Le("div","ebg-last",o),l=Le("div","ebg-cue",r),u=Le("div","ebg-pct ebg-txt ebg-num",s,"0%"),f=Le("div","ebg-hint ebg-txt",s);Le("span","",f,"Pull");const d=Le("span","",f);d.innerHTML=m2;const h=Le("div","ebg-grab",s);h.setAttribute("aria-label","Pull the cue down to shoot");const g=Le("div","ebg-spin",e);g.setAttribute("aria-label","Spin: drag the dot sideways to curve, up or down to choose where the curve happens"),Le("span","ebg-spin-label ebg-txt",g,"SPIN");const x=Le("div","ebg-spin-face",g);Le("div","ebg-spin-ring",x),Le("div","ebg-spin-h",x),Le("div","ebg-spin-v",x),Le("div","ebg-spin-mid",x);const m=Le("div","ebg-spin-dot",x),p=Le("div","ebg-ff ebg-txt",i,"Hold to speed up");for(const A of[h,g])A.style.touchAction="none",A.style.webkitTouchCallout="none";let M=null,_=!1,w={top:0,right:0,bottom:0,left:0};const T=Ed;function b(){const A={top:0,right:0,bottom:0,left:0};try{if(typeof getComputedStyle=="function"){const R=getComputedStyle(n);A.top=parseFloat(R.paddingTop)||0,A.right=parseFloat(R.paddingRight)||0,A.bottom=parseFloat(R.paddingBottom)||0,A.left=parseFloat(R.paddingLeft)||0}}catch{}return A}const E=A=>Math.round(A)+"px";function v(){const A=typeof window<"u"&&window.innerWidth?window.innerWidth:800,R=typeof window<"u"&&window.innerHeight?window.innerHeight:450;M=g2(A,R,b(),_),e.style.setProperty("--travel",M.travel+"px"),s.style.left=E(M.pow.left),s.style.top=E(M.pow.top),s.style.width=E(M.pow.width),s.style.height=E(M.pow.height),M.spin&&(g.style.left=E(M.spin.left),g.style.top=E(M.spin.top));const Q=M.insets,ut=w;(Q.top!==ut.top||Q.right!==ut.right||Q.bottom!==ut.bottom||Q.left!==ut.left)&&(w=Q,t.onInsets&&t.onInsets({...Q}))}typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",v),window.addEventListener("orientationchange",v));let S=!1,y="idle",C=0,z=0,U=0,X=0,ct=!1;function st(A,R){C=A<0?0:A>1?1:A,R!==y&&(y=R,s.className="ebg-pow"+(R==="pull"?" pull":R==="strike"?" strike":""),u.className="ebg-pct ebg-txt ebg-num"+(R==="pull"?" show":R==="cancel"?" show fade":""));const Q=R==="strike"?0:C*M.travel;l.style.transform="translateY("+Q.toFixed(1)+"px)",u.style.transform="translateY("+Q.toFixed(1)+"px)",a.style.setProperty("--p",R==="strike"?"0":C.toFixed(4)),u.textContent=(R==="cancel"?0:Math.round(C*100))+"%",R==="pull"&&ct&&xt(!1)}function xt(A){A=!!A,A!==ct&&(ct=A,f.className="ebg-hint ebg-txt"+(A?" show":""))}function $(A,R){let Q=Number.isFinite(A)?A:0,ut=R===void 0?U:Number.isFinite(R)?R:0;const wt=Math.sqrt(Q*Q+ut*ut);wt>1&&(Q/=wt,ut/=wt),z=Q,U=ut,m.style.transform="translate("+(Q*T).toFixed(1)+"px,"+(-ut*T).toFixed(1)+"px)"}const W=new Set;function D(A){return!t.ballDown||!t.ballDown(A)?!1:(W.add(A.pointerId),!0)}function K(A,R){if(!W.has(A.pointerId))return!1;R!=="move"&&W.delete(A.pointerId);const Q=R==="move"?t.ballMove:R==="up"?t.ballUp:t.ballCancel;return Q&&Q(A),!0}let Y=null;function rt(A){if(!(A.pointerType==="mouse"&&A.button!==0)&&(A.preventDefault&&A.preventDefault(),!(Y||W.has(A.pointerId))&&!D(A)&&!(!t.onPullStart||!t.onPullStart(A.pointerId,A.pointerType)))){Y={id:A.pointerId,y0:A.clientY,t:0};try{h.setPointerCapture(A.pointerId)}catch{}}}function V(A){if(K(A,"move")||!Y||A.pointerId!==Y.id)return;const R=A.clientY-Y.y0-l2,Q=R<=0?0:R>=M.travel?1:R/M.travel;Y.t=Q,t.onPull&&t.onPull(Q)}function Z(A,R){if(!Y||A.pointerId!==Y.id)return;R||V(A);const Q=Y.t;Y=null;try{h.releasePointerCapture(A.pointerId)}catch{}t.onPullEnd&&t.onPullEnd(Q,R)}const mt=A=>{K(A,"up")||Z(A,!1)},H=A=>{K(A,"cancel")||Z(A,!0)},tt=A=>{Y&&A.pointerId===Y.id&&A.target!==h&&V(A)},lt=A=>{Y&&A.pointerId===Y.id&&A.target!==h&&Z(A,!1)},St=A=>{Y&&A.pointerId===Y.id&&A.target!==h&&Z(A,!0)},zt=A=>{A.cancelable&&A.preventDefault&&A.preventDefault()};h.addEventListener("pointerdown",rt),h.addEventListener("pointermove",V),h.addEventListener("pointerup",mt),h.addEventListener("pointercancel",H),typeof window<"u"&&window.addEventListener&&(window.addEventListener("pointermove",tt),window.addEventListener("pointerup",lt),window.addEventListener("pointercancel",St)),h.addEventListener("touchstart",zt,{passive:!1}),h.addEventListener("touchmove",zt,{passive:!1}),h.addEventListener("contextmenu",zt);let J=null,vt={t:-1e9,x:0,y:0};const k={x:0,y:0};function nt(A,R){const Q=x.getBoundingClientRect();let ut=(A+J.offX-(Q.left+Q.width/2))/T,wt=-(R+J.offY-(Q.top+Q.height/2))/T;const Et=Math.sqrt(ut*ut+wt*wt);return Et>1&&(ut/=Et,wt/=Et),k.x=ut,k.y=wt,k}function Bt(A){if(A.pointerType==="mouse"&&A.button!==0||(A.preventDefault&&A.preventDefault(),J||W.has(A.pointerId))||D(A))return;const R=A.timeStamp||0;if(R-vt.t<320&&Math.abs(A.clientX-vt.x)<24&&Math.abs(A.clientY-vt.y)<24){vt.t=-1e9,t.onSpin&&t.onSpin(0,0,"reset");return}const ut=x.getBoundingClientRect(),wt=ut.left+ut.width/2+z*T,Et=ut.top+ut.height/2-U*T,Wt=Math.hypot(A.clientX-wt,A.clientY-Et)<=u2;J={id:A.pointerId,offX:Wt?wt-A.clientX:0,offY:Wt?Et-A.clientY:0,sx:A.clientX,sy:A.clientY,ts:R},g.className="ebg-spin on drag";try{g.setPointerCapture(A.pointerId)}catch{}const Ft=nt(A.clientX,A.clientY);t.onSpin&&t.onSpin(Ft.x,Ft.y,"start")}function jt(A){if(K(A,"move")||!J||A.pointerId!==J.id)return;const R=nt(A.clientX,A.clientY);t.onSpin&&t.onSpin(R.x,R.y,"move")}function Ht(A){if(K(A,"up")||!J||A.pointerId!==J.id)return;const R=nt(A.clientX,A.clientY);vt=Math.abs(A.clientX-J.sx)<6&&Math.abs(A.clientY-J.sy)<6?{t:J.ts,x:J.sx,y:J.sy}:{t:-1e9,x:0,y:0},J=null,g.className="ebg-spin on";try{g.releasePointerCapture(A.pointerId)}catch{}t.onSpin&&t.onSpin(R.x,R.y,"end")}function Kt(A){K(A,"cancel")||!J||A.pointerId!==J.id||(J=null,g.className="ebg-spin on",t.onSpin&&t.onSpin(z,U,"end"))}g.addEventListener("pointerdown",Bt),g.addEventListener("pointermove",jt),g.addEventListener("pointerup",Ht),g.addEventListener("pointercancel",Kt),g.addEventListener("touchstart",zt,{passive:!1}),g.addEventListener("touchmove",zt,{passive:!1}),g.addEventListener("contextmenu",zt);const Xt={setVisible(A){A=!!A,A!==S&&(S=A,e.className="ebg-shot"+(A?" on":""))},setSpinEnabled(A){A=!!A,A!==_&&(_=A,g.className="ebg-spin"+(A?" on":""),v())},setSpin:$,setPull:st,setPreset(A){const R=A<0?0:A>1?1:A;c.style.top=(R*100).toFixed(2)+"%"},setPullHint:xt,setFastForward(A){A!==X&&(X=A,p.className="ebg-ff ebg-txt"+(A===1?" show":A===2?" on":""),p.textContent=A===2?"▶▶ 3×":"Hold to speed up")},cancelPull(){if(Y){try{h.releasePointerCapture(Y.id)}catch{}Y=null}J&&(J=null,g.className="ebg-spin"+(_?" on":"")),W.clear()},travel:()=>M.travel,insets:()=>({...w}),layout:v,parts:{root:e,pow:s,grab:h,spin:g,face:x,dot:m,pct:u,hint:f,ff:p,cue:l,fill:a,last:c},dispose(){typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",v),window.removeEventListener("orientationchange",v)),h.removeEventListener("pointerdown",rt),h.removeEventListener("pointermove",V),h.removeEventListener("pointerup",mt),h.removeEventListener("pointercancel",H),window.removeEventListener("pointermove",tt),window.removeEventListener("pointerup",lt),window.removeEventListener("pointercancel",St),h.removeEventListener("touchstart",zt),h.removeEventListener("touchmove",zt),h.removeEventListener("contextmenu",zt),g.removeEventListener("pointerdown",Bt),g.removeEventListener("pointermove",jt),g.removeEventListener("pointerup",Ht),g.removeEventListener("pointercancel",Kt),g.removeEventListener("touchstart",zt),g.removeEventListener("touchmove",zt),g.removeEventListener("contextmenu",zt),e.parentNode&&e.parentNode.removeChild(e),p.parentNode&&p.parentNode.removeChild(p)}};return v(),st(0,"idle"),$(0,0),Xt.setPreset(.5),Xt}const fc={mouse:4,pen:6,touch:10},th=.06,v2=.1,hc=.08,_2=.25,eh=.35,M2=.7,nh=110,ih=320,y2=.5,S2=2.4,Qo=Math.PI/180,b2=1*Qo,w2=.1*Qo,sh=.1,E2=10;function T2({stage:i,rig:t,play:e,events:n,uiRoot:s,onInsets:r}){Wy(),ue.enabled=!1;const o=typeof window<"u"?window:null,a=typeof document<"u"?document:null,c=i&&i.renderer&&i.renderer.domElement?i.renderer.domElement:null;let l=!1;const u={clock:.5,firedAt:-1e9,readyT:.5,idleT:.5,rollT:.5,aimHoldT:.5,spinHoldT:.5,topHoldT:.5};u.clock=0,u.readyT=0,u.idleT=0,u.rollT=0,u.aimHoldT=0,u.spinHoldT=0,u.topHoldT=0;let f=e.state,d=!1;const h={shots:0,placed:!1,placeShots:0};let g=null,x=null,m=null;const p={left:!1,right:!1,shift:!1,a:!1,d:!1,w:!1,s:!1,f:!1},M=new Map;let _=null;const w=new Set,T=new Set;let b=1,E={left:0,top:0};const v=x2(s,{onPullStart(F,at){return z()?(g={t0:u.clock,p:0},ue.pulling=!0,ue.pull=0,u.idleT=0,v.setPull(0,"pull"),!0):!1},onPull(F){g&&(g.p=F,ue.pull=F,v.setPull(F,"pull"))},onPullEnd(F,at){if(!g)return;const Tt=u.clock-g.t0<v2;g=null,ue.pulling=!1,at||Tt||F<th||!C()?st(!0):xt(F)},ballDown(F){return!l||e.state!=="ready"||y()||M.size>0||(D(),!Y(W(F),F.pointerType||"mouse"))?!1:(H(F,!0),!!(_&&_.kind==="place"&&_.id===F.pointerId))},ballMove:F=>tt(F),ballUp:F=>lt(F),ballCancel:F=>St(F),onInsets(F){typeof r=="function"&&r(F)},onSpin(F,at,Tt){!l||e.state!=="ready"||!(e.level&&e.level.spin)||(u.idleT=0,Tt==="reset"?X(0,0):X(F,at),v.setSpin(e.intent.spin,U(e.intent)))}}),S=()=>l&&e.state==="ready",y=()=>!!(g||x||m),C=()=>l&&e.state==="ready"&&!m,z=()=>C()&&!y(),U=F=>Number.isFinite(F.top)?F.top:0;function X(F,at){let Tt=Number.isFinite(F)?F<-1?-1:F>1?1:F:0,O=Number.isFinite(at)?at<-1?-1:at>1?1:at:0;Math.abs(Tt)<sh&&(Tt=0),Math.abs(O)<sh&&(O=0);const ot=Math.sqrt(Tt*Tt+O*O);ot>1&&(Tt/=ot,O/=ot);const ht=e.intent.spin===0&&U(e.intent)===0;e.setSpin(Tt,O),Tt===0&&O===0&&!ht&&ct(8)}function ct(F){try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(F)}catch{}}function st(F){g=null,x=null,m=null,v.cancelPull(),ue.pulling=!1,ue.pull=0,ue.strike=-1,v.setPull(0,F?"cancel":"idle")}function xt(F){m={t:0,p:F},ue.pulling=!1,ue.pull=F,ue.strike=0,v.setPull(F,"strike")}function $(F){if(m=null,ue.strike=-1,ue.pull=0,!C()){st(!1);return}e.setPower(F),e.fire()&&(u.firedAt=u.clock,h.shots++,v.setPull(0,"idle"))}function W(F){return{x:F.clientX-E.left,y:F.clientY-E.top}}function D(){if(c&&c.getBoundingClientRect){const F=c.getBoundingClientRect();E={left:F.left,top:F.top}}}function K(){const F=e.intent,at=e.level?e.level.heightAt(F.x,F.z)+kt.R:kt.R;return t.groundToScreen(F.x,at,F.z)}function Y(F,at){const Tt=K();if(!Tt)return!1;const O=e.intent,ot=t.pxPerMetre(O.x,O.z)||20,ht=Math.max(at==="touch"?34:28,.9*ot);return Math.hypot(F.x-Tt.x,F.y-Tt.y)<=ht}function rt(){const F=e.intent;return{x:F.x,z:F.z,offset:F.offset}}function V(F){if(!F||e.state!=="ready")return;e.setPlacement(F.x,F.z);const at=F.offset-e.intent.offset;at!==0&&e.rotateAim(at)}function Z(F){F!==b&&(b=F,e.setSpeed(F))}function mt(){const F=M.values(),at=F.next().value,Tt=F.next().value;_={kind:"pinch",d0:Math.hypot(at.x-Tt.x,at.y-Tt.y)||1,cx:(at.x+Tt.x)/2,cy:(at.y+Tt.y)/2}}function H(F,at){if(!l)return;F.preventDefault&&F.preventDefault(),D();const Tt=W(F);if(F.isPrimary===!0&&F.pointerType==="touch"&&(M.clear(),w.clear(),T.clear(),_&&_.kind!=="pan"&&(_=null)),T.delete(F.pointerId),F.pointerType==="mouse"&&F.button!==0){if(F.button===2&&y()&&!m){st(!0);return}(F.button===1||F.button===2)&&(_={kind:"pan",id:F.pointerId,x:Tt.x,y:Tt.y},k(F.pointerId));return}if(M.set(F.pointerId,Tt),u.idleT=0,e.state==="rolling"){u.clock-u.firedAt>=_2&&w.add(F.pointerId),M.size>=2?mt():_={kind:"ff",id:F.pointerId};return}if(M.size>=2){_&&(_.kind==="place"||_.kind==="aim")&&(V(_.snap),ue.placing=!1),M.size===2&&mt();return}if(e.state!=="ready"){_={kind:"block"};return}k(F.pointerId);const O=F.pointerType||"mouse",ot=K(),ht=at===!0||Y(Tt,O),_t={id:F.pointerId,type:O,sx:Tt.x,sy:Tt.y,t0:u.clock,moved:!1,snap:rt(),travelled:0};if(ht)_={..._t,kind:"place",grabX:ot.x-Tt.x,grabY:ot.y-Tt.y};else if(_={..._t,kind:"aim",lastX:Tt.x,lastY:Tt.y,lastTs:F.timeStamp||0,speed:0},O!=="touch"){const At=t.screenToGround(Tt.x,Tt.y);At&&e.setAimToward(At.x,At.z)}}function tt(F){if(!l)return;const at=W(F);if(_&&_.kind==="pan"&&F.pointerId===_.id){const se=at.x-_.x,ae=at.y-_.y;_.x=at.x,_.y=at.y,(se||ae)&&t.panBy(se,ae);return}if(!M.has(F.pointerId)||(M.set(F.pointerId,at),!_))return;if(_.kind==="pinch"){if(M.size<2)return;const se=M.values(),ae=se.next().value,pe=se.next().value,he=Math.hypot(ae.x-pe.x,ae.y-pe.y)||1,Qt=(ae.x+pe.x)/2,ge=(ae.y+pe.y)/2,re=he/_.d0;Math.abs(re-1)>1e-4&&t.zoomBy(re,Qt,ge),(Qt!==_.cx||ge!==_.cy)&&t.panBy(Qt-_.cx,ge-_.cy),_.d0=he,_.cx=Qt,_.cy=ge;return}if(F.pointerId!==_.id||_.kind!=="place"&&_.kind!=="aim"||e.state!=="ready")return;u.idleT=0;const Tt=Math.hypot(at.x-_.sx,at.y-_.sy);if(Tt>_.travelled&&(_.travelled=Tt),_.kind==="place"){if(!_.moved){if(Tt<(fc[_.type]||6))return;_.moved=!0,ue.placing=!0}let se=_.grabX,ae=_.grabY;if(_.type==="touch"){const he=_.travelled>=40?1:_.travelled/40;se+=(0-se)*he,ae+=(-52-ae)*he}const pe=t.screenToGround(at.x+se,at.y+ae);pe&&e.setPlacement(pe.x,pe.z);return}if(_.type!=="touch"){!_.moved&&Tt>=(fc[_.type]||4)&&(_.moved=!0);const se=t.screenToGround(at.x,at.y);se&&e.setAimToward(se.x,se.z);return}if(!_.moved){if(Tt<fc.touch)return;_.moved=!0,_.lastX=at.x,_.lastY=at.y,_.lastTs=F.timeStamp||0;return}const O=K(),ot=at.x-_.lastX,ht=at.y-_.lastY,_t=F.timeStamp||0,At=_t-_.lastTs;if(_.lastX=at.x,_.lastY=at.y,_.lastTs=_t,!O)return;const j=at.x-ot-O.x,pt=at.y-ht-O.y,Rt=Math.hypot(j,pt);if(Rt<1)return;const It=(j*ht-pt*ot)/Rt,Lt=Rt<nh?nh:Rt>ih?ih:Rt;if(At>0){const se=Math.hypot(ot,ht)/(At/1e3);_.speed+=(se-_.speed)*.35}const qt=_.speed,Yt=qt<=500?0:qt>=1800?1:(qt-500)/1300,le=eh+(M2-eh)*Yt*Yt;It!==0&&e.rotateAim(It/Lt*le)}function lt(F){const at=W(F),Tt=M.delete(F.pointerId);if(w.delete(F.pointerId),T.delete(F.pointerId),_&&_.kind==="pan"&&F.pointerId===_.id){_=null,nt(F.pointerId);return}if(!Tt||!_)return;if(_.kind==="ff"){F.pointerId===_.id&&(_=null);return}if(_.kind==="pinch"||_.kind==="block"){M.size===0?_=null:_={kind:"block"};return}if(F.pointerId!==_.id)return;nt(F.pointerId);const O=_;if(_=null,O.kind==="place"){ue.placing=!1,O.moved&&(h.placed=!0);return}if(O.kind==="aim"&&O.type==="touch"&&!O.moved&&u.clock-O.t0<=y2&&l&&e.state==="ready"){const ot=t.screenToGround(at.x,at.y);ot&&e.setAimToward(ot.x,ot.z)}}function St(F){if(M.delete(F.pointerId),w.delete(F.pointerId),T.delete(F.pointerId),_&&_.kind==="pan"&&_.id===F.pointerId){_=null;return}_&&(_.id===F.pointerId||M.size===0)&&(_.kind==="place"&&(ue.placing=!1),_=M.size?{kind:"block"}:null)}function zt(F){if(F.preventDefault&&F.preventDefault(),!l)return;D();const at=W(F),Tt=F.deltaMode===1?F.deltaY*16:F.deltaMode===2?F.deltaY*400:F.deltaY;let O=Math.exp(-Tt*.0015);O=O<.8?.8:O>1.25?1.25:O,t.zoomBy(O,at.x,at.y)}const J=F=>{F.preventDefault&&F.preventDefault()},vt=F=>{F.cancelable!==!1&&F.preventDefault&&F.preventDefault()};function k(F){try{c&&c.setPointerCapture&&c.setPointerCapture(F)}catch{}}function nt(F){try{c&&c.releasePointerCapture&&c.releasePointerCapture(F)}catch{}}c&&(c.style&&(c.style.touchAction="none"),c.addEventListener("pointerdown",H),c.addEventListener("pointermove",tt),c.addEventListener("pointerup",lt),c.addEventListener("pointercancel",St),c.addEventListener("wheel",zt,{passive:!1}),c.addEventListener("contextmenu",J),c.addEventListener("touchstart",vt,{passive:!1}),c.addEventListener("touchmove",vt,{passive:!1}),c.addEventListener("gesturestart",vt));const Bt=[v.parts.grab,v.parts.spin],jt=F=>{const at=F.target;return at===c||at&&Bt.indexOf(at)>=0?!1:M.has(F.pointerId)||T.has(F.pointerId)||_&&_.kind==="pan"&&_.id===F.pointerId},Ht=F=>{jt(F)&&tt(F)},Kt=F=>{jt(F)&&lt(F)},Xt=F=>{jt(F)&&St(F)};o&&c&&(o.addEventListener("pointermove",Ht),o.addEventListener("pointerup",Kt),o.addEventListener("pointercancel",Xt));function A(F){const at=F.target;return!!(at&&(at.tagName==="INPUT"||at.tagName==="TEXTAREA"||at.isContentEditable))}function R(F){if(A(F))return;const at=F.code;if(at==="ShiftLeft"||at==="ShiftRight"){p.shift=!0;return}if(l&&((at==="Space"||at.startsWith("Arrow"))&&F.preventDefault(),!F.repeat))switch(at){case"ArrowLeft":case"ArrowRight":{const Tt=at==="ArrowLeft";Tt?p.left=!0:p.right=!0,u.aimHoldT=0,S()&&(u.idleT=0,e.rotateAim((Tt?-1:1)*(F.shiftKey||p.shift?w2:b2)));break}case"KeyA":case"KeyD":{at==="KeyA"?p.a=!0:p.d=!0,u.spinHoldT=0,ut(at==="KeyA"?-1:1,0);break}case"KeyW":case"KeyS":{at==="KeyW"?p.w=!0:p.s=!0,u.topHoldT=0,ut(0,at==="KeyW"?1:-1);break}case"Space":z()&&(x={t:0,p:0},ue.pulling=!0,ue.pull=0,u.idleT=0,v.setPull(0,"pull"));break;case"Backspace":case"KeyX":(g||x)&&st(!0);break;case"KeyO":case"KeyV":n.emit("ui:overview",{on:!d});break;case"KeyF":p.f=!0;break}}function Q(F){const at=F.code;if(at==="ShiftLeft"||at==="ShiftRight"){p.shift=!1;return}if(at==="ArrowLeft")p.left=!1;else if(at==="ArrowRight")p.right=!1;else if(at==="KeyA")p.a=!1;else if(at==="KeyD")p.d=!1;else if(at==="KeyW")p.w=!1;else if(at==="KeyS")p.s=!1;else if(at==="KeyF")p.f=!1;else if(at==="Space"&&x){const Tt=x.p;x=null,ue.pulling=!1,Tt>=th&&C()?xt(Tt):st(!0)}}function ut(F,at){if(!S()||!(e.level&&e.level.spin))return;u.idleT=0;let Tt=e.intent.spin,O=U(e.intent);if(F!==0){const ot=Math.sqrt(Math.max(0,1-O*O));Tt=Math.round((Tt+F*.1)*10)/10,Tt=Tt<-ot?-ot:Tt>ot?ot:Tt}if(at!==0){const ot=Math.sqrt(Math.max(0,1-Tt*Tt));O=Math.round((O+at*.1)*10)/10,O=O<-ot?-ot:O>ot?ot:O}e.setSpin(Tt,O),v.setSpin(e.intent.spin,U(e.intent))}function wt(){y()&&st(!1),p.left=p.right=p.shift=p.a=p.d=p.w=p.s=p.f=!1,M.clear(),_&&_.kind==="place"&&(ue.placing=!1),_=null,w.clear(),T.clear()}function Et(){a&&a.visibilityState==="hidden"&&wt()}o&&(o.addEventListener("keydown",R),o.addEventListener("keyup",Q),o.addEventListener("blur",wt),o.addEventListener&&c&&o.addEventListener("resize",D)),a&&a.addEventListener&&a.addEventListener("visibilitychange",Et);const Wt=[n.on("ui:overview",({on:F})=>{d=!!F}),n.on("ad:start",()=>wt()),n.on("shot:fire",()=>{u.firedAt=u.clock,u.rollT=0,v.setVisible(!1)}),n.on("hole:start",()=>{d=!1})];let Ft=!1,Nt=!1,q=null,G=0;function it(F){u.clock+=F;const at=e.state;if(at!==f){if(at==="ready"){u.readyT=0,u.idleT=0;for(const At of M.keys())T.add(At);M.clear(),w.clear(),_&&_.kind!=="pan"&&(_=null)}f==="ready"&&y()&&!m&&st(!1),f=at}if(m&&(m.t+=F,ue.strike=m.t/hc>1?1:m.t/hc,m.t>=hc&&$(m.p)),x){x.t+=F;const At=x.t/S2%1;x.p=1-Math.abs(1-2*At),ue.pull=x.p,v.setPull(x.p,"pull")}if(S()){u.readyT+=F,u.idleT+=F;const At=(p.right?1:0)-(p.left?1:0);if(At!==0&&(u.aimHoldT+=F,u.idleT=0,u.aimHoldT>.25)){const Rt=p.shift?3*Qo:(30+60*Math.min(1,(u.aimHoldT-.25)/1.2))*Qo;e.rotateAim(At*Rt*F)}const j=(p.d?1:0)-(p.a?1:0);j!==0&&(u.spinHoldT+=F,u.spinHoldT>.35&&(u.spinHoldT-=.1,ut(j,0)));const pt=(p.w?1:0)-(p.s?1:0);pt!==0&&(u.topHoldT+=F,u.topHoldT>.35&&(u.topHoldT-=.1,ut(0,pt)))}const Tt=l&&at==="rolling";Tt&&(u.rollT+=F),at!=="rolling"&&w.size&&w.clear(),Z(Tt&&(p.f||w.size>0)?3:1);const O=Tt?b>1?2:u.rollT>1.5?1:0:0;O!==G&&(G=O,v.setFastForward(O));const ot=l&&at==="ready";ot!==Ft&&(Ft=ot,v.setVisible(ot),!ot&&y()&&!m&&st(!1));const ht=!!(e.level&&e.level.spin);ht!==Nt&&(Nt=ht,v.setSpinEnabled(ht)),e.intent!==q&&(q=e.intent,v.setSpin(e.intent.spin,U(e.intent)),v.setPreset(e.lastPower!==void 0?e.lastPower:e.intent.power));const _t=u.idleT>E2;v.setPullHint(ot&&!y()&&(h.shots===0&&u.readyT>.6||_t)),ue.hint=ot&&!_&&(!h.placed&&h.shots<3&&u.readyT>.4||_t)?1:0,ue.enabled=l}function yt(F){F=!!F,F!==l&&(l=F,ue.enabled=F,F?(D(),e.state==="ready"&&(Ft=!0,v.setVisible(!0))):(y()&&st(!1),M.clear(),_&&_.kind==="place"&&(ue.placing=!1),_=null,w.clear(),p.left=p.right=p.a=p.d=p.w=p.s=p.f=!1,Z(1),Ft=!1,v.setVisible(!1),G=0,v.setFastForward(0),v.setPullHint(!1)))}function ft(){yt(!1);for(const F of Wt)F();c&&(c.removeEventListener("pointerdown",H),c.removeEventListener("pointermove",tt),c.removeEventListener("pointerup",lt),c.removeEventListener("pointercancel",St),c.removeEventListener("wheel",zt),c.removeEventListener("contextmenu",J),c.removeEventListener("touchstart",vt),c.removeEventListener("touchmove",vt),c.removeEventListener("gesturestart",vt)),o&&(o.removeEventListener("keydown",R),o.removeEventListener("keyup",Q),o.removeEventListener("blur",wt),o.removeEventListener("resize",D),o.removeEventListener("pointermove",Ht),o.removeEventListener("pointerup",Kt),o.removeEventListener("pointercancel",Xt)),a&&a.removeEventListener&&a.removeEventListener("visibilitychange",Et),v.dispose()}const dt={enable:yt,update:it,dispose:ft,insets:()=>v.insets()};return Object.defineProperty(dt,"_debug",{value:{hud:v,session:h,get gesture(){return _}},enumerable:!1}),dt}function Pt(i,t,e){const[n,...s]=i.split("."),r=document.createElement(n||"div");if(s.length&&(r.className=s.join(" ")),t)for(const o in t){const a=t[o];if(!(a==null||a===!1))if(o==="html")r.innerHTML=a;else if(o==="text")r.textContent=a;else if(o.startsWith("on"))r.addEventListener(o.slice(2),a);else if(o==="style")for(const c in a)c.startsWith("--")?r.style.setProperty(c,a[c]):r.style[c]=a[c];else r.setAttribute(o,a===!0?"":String(a))}return e!==void 0&&Td(r,e),r}function Td(i,t){if(Array.isArray(t)){for(const e of t)Td(i,e);return}t==null||t===!1||i.appendChild(typeof t=="string"||typeof t=="number"?document.createTextNode(String(t)):t)}const Ne={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4.5" width="4.6" height="15" rx="1.8"/><rect x="13.9" y="4.5" width="4.6" height="15" rx="1.8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.8 12S5.6 5 12 5s10.2 7 10.2 7-3.8 7-10.2 7S1.8 12 1.8 12z"/><circle cx="12" cy="12" r="3.6" class="pupil"/></svg>',play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 4.8v14.4a1 1 0 0 0 1.5.9l11-7.2a1 1 0 0 0 0-1.8L9 3.9a1 1 0 0 0-1.5.9z"/></svg>',retry:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" fill="none" stroke-width="3" stroke-linecap="round"/><path d="M3.4 3.6l.6 5.6 5.5-1.2z"/></svg>',grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="3" width="7.6" height="7.6" rx="2"/><rect x="3" y="13.4" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="13.4" width="7.6" height="7.6" rx="2"/></svg>',soundOn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.6 8.6a5 5 0 0 1 0 6.8M18.4 5.9a9 9 0 0 1 0 12.2" fill="none" stroke-width="2.4" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.8 9.2l5.4 5.6M21.2 9.2l-5.4 5.6" fill="none" stroke-width="2.6" stroke-linecap="round"/></svg>',ball:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="9" cy="9" r="2.6" fill="#fff" opacity=".85"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.2L8 12l6.8 6.8" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',lock:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5" fill="none" stroke-width="2.8"/><rect x="4.8" y="10" width="14.4" height="11" rx="3"/></svg>',star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4l2.85 6 6.6.75-4.9 4.5 1.35 6.5L12 16.85 6.1 20.15l1.35-6.5-4.9-4.5 6.6-.75z"/></svg>'};function A2(i,{events:t}={}){const e=(T,b)=>t&&t.emit(T,b);let n=!1,s=!1,r=0,o=0;const a=Pt("b.hud-num",null,"1"),c=Pt("div.hud-ball",null,a),l=Pt("span.hud-name",null,""),u=Pt("span.hud-par",null,"Par 2"),f=Pt("div.hud-chip.hud-hole",null,[c,Pt("div.hud-meta",null,[l,u])]),d=Pt("b.hud-strokes-n",null,"0"),h=Pt("div.hud-pips",{"aria-hidden":"true"}),g=Pt("span.hud-pop",{"aria-hidden":"true"},"+1"),x=Pt("div.hud-chip.hud-strokes",{role:"status","aria-live":"polite"},[Pt("span.hud-lbl",null,"Strokes"),d,h,g]),m=Pt("button.hud-btn.hud-eye",{type:"button","aria-label":"Look at the whole hole","aria-pressed":"false",html:Ne.eye,onclick:()=>_(!n,!0)}),p=Pt("button.hud-btn.hud-pause",{type:"button","aria-label":"Pause",html:Ne.pause,onclick:()=>e("ui:pause",{})}),M=Pt("div.hud",{"data-shown":"false"},[f,x,Pt("div.hud-btns",null,[m,p])]);i.appendChild(M);function _(T,b){n=!!T,m.setAttribute("aria-pressed",n?"true":"false"),m.classList.toggle("on",n),b&&e("ui:overview",{on:n})}function w(){const T=Math.max(o,Math.min(r,o+4));for(;h.childNodes.length>T;)h.removeChild(h.lastChild);for(;h.childNodes.length<T;)h.appendChild(Pt("i.pip"));for(let b=0;b<T;b++){const E=h.childNodes[b];E.className="pip"+(b<r?" used":"")+(b>=o?" over":"")}}return t&&(t.on("ui:overview",({on:T}={})=>{!!T!==n&&_(T,!1)}),t.on("shot:end",({penalty:T}={})=>{T&&(g.classList.remove("go"),g.offsetWidth,g.classList.add("go"))})),{el:M,setHole(T,b){a.textContent=String((b|0)+1),l.textContent=T&&T.name?T.name:"",u.textContent="Par "+(T?T.par:""),M.setAttribute("data-round",String(T&&T.round?T.round:1)),n&&_(!1,!0)},setStrokes(T,b){const E=Math.max(0,T|0),v=E>r;r=E,b!==void 0&&(o=Math.max(1,b|0)),d.textContent=String(r),x.classList.toggle("over",r>o),w(),v&&(d.classList.remove("bump"),d.offsetWidth,d.classList.add("bump"))},show(T){s=!!T,M.setAttribute("data-shown",s?"true":"false")}}}const rh=350,C2=1400,R2=5200,P2=1900,L2=1700,I2=3e3,D2={ace:"Unbelievable!",albatross:"Amazing shot!",eagle:"Superb!",birdie:"Great shot!",par:"Well played!",bogey:"So close!",double:"Nice try!",over:"Keep going!",picked:"Try again for a star!"},z2={ace:"Hole-in-one!",albatross:"Albatross!",eagle:"Eagle!",birdie:"Birdie!",par:"Par!"},dn="#13261b";function N2(i,t,e,n,s){let r="";for(let o=0;o<s*2;o++){const a=o*Math.PI/s-Math.PI/2,c=o%2?n:e;r+=(o?"L":"M")+(i+Math.cos(a)*c).toFixed(1)+" "+(t+Math.sin(a)*c).toFixed(1)}return r+"Z"}const Is=(i,t,e)=>`<g transform="${e}" stroke="${dn}" stroke-width="3" stroke-linejoin="round"><path d="M15 34l-10-5 2.5 10z" fill="${t}"/><ellipse cx="29" cy="37" rx="16" ry="13" fill="${i}"/><circle cx="41" cy="25" r="10" fill="${i}"/><path d="M50 22.5l9 3.5-9 3.5z" fill="#FFC93C"/><path d="M19 35c6-3 12-1 14 5-6 3-12 2-14-5z" fill="${t}"/><circle cx="43.5" cy="23" r="2.3" fill="${dn}" stroke="none"/></g>`,Zi=i=>`<svg viewBox="0 0 64 64" aria-hidden="true">${i}</svg>`,oh={ace:Zi(`<path d="${N2(32,32,30,18,12)}" fill="#FFC93C" stroke="${dn}" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="32" r="12" fill="#FBFAF3" stroke="${dn}" stroke-width="3"/><text x="32" y="39" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="19" fill="${dn}">1</text>`),albatross:Zi(Is("#9F7BE0","#7B4FC9","translate(-4 -10) scale(.62)")+Is("#9F7BE0","#7B4FC9","translate(26 -6) scale(.62)")+Is("#9F7BE0","#7B4FC9","translate(8 22) scale(.62)")),eagle:Zi(Is("#FFA65A","#E07020","translate(-2 -4) scale(.7)")+Is("#FFA65A","#E07020","translate(20 18) scale(.7)")),birdie:Zi(Is("#5B93F0","#2D6CDF","translate(0 0)")),par:Zi(`<ellipse cx="32" cy="53" rx="22" ry="7" fill="#3CC47A" stroke="${dn}" stroke-width="3"/><ellipse cx="32" cy="52" rx="7" ry="2.6" fill="${dn}"/><path d="M32 51V9" stroke="${dn}" stroke-width="5" stroke-linecap="round"/><path d="M32 50V10" stroke="#fff" stroke-width="2"/><path d="M34 9l21 7.5L34 24z" fill="#E8322F" stroke="${dn}" stroke-width="3" stroke-linejoin="round"/>`),smile:Zi(`<circle cx="32" cy="32" r="26" fill="#8EC5FF" stroke="${dn}" stroke-width="3"/><circle cx="23" cy="27" r="3.4" fill="${dn}"/><circle cx="41" cy="27" r="3.4" fill="${dn}"/><path d="M20 38c6 8 18 8 24 0" fill="none" stroke="${dn}" stroke-width="3.6" stroke-linecap="round"/>`),picked:Zi(`<g fill="#fff" stroke="${dn}" stroke-width="3" stroke-linejoin="round"><rect x="15" y="12" width="8" height="26" rx="4"/><rect x="24" y="7" width="8" height="30" rx="4"/><rect x="33" y="9" width="8" height="28" rx="4"/><rect x="42" y="15" width="8" height="23" rx="4"/><path d="M15 31h35v6c0 11-7.5 19-18 19-7.5 0-12-4.5-14.5-9L9.5 37c-1.6-2.8 2-5.6 4.6-3.4L18 37z"/></g>`)},U2=i=>oh[i]||oh.smile,ah='<svg viewBox="0 0 48 58" aria-hidden="true"><path d="M17 4c2.6 0 4.6 2 4.6 4.6v15.6l1.7-.4c2.2-.5 4.4.8 5 3l.2.6 1.3-.3c2.2-.5 4.4.8 5 3l.2.8 1-.2c2.3-.4 4.5 1.1 4.9 3.4l1.3 8.6c.9 5.7-2.5 11.2-8 12.9l-6.1 1.8c-4.7 1.4-9.8-.5-12.4-4.7L4.2 38.4c-1.3-2.1-.8-4.8 1.2-6.2 2-1.3 4.6-1 6.1.8l1 1.2V8.6C12.5 6 14.5 4 17 4z" fill="#fff" stroke="#13261b" stroke-width="3" stroke-linejoin="round"/><path d="M21.6 24.2v7M29.5 27.4v5.4M36.7 31.1v4.6" stroke="#13261b" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".45"/></svg>';function F2(i,t){if(i==null)return"";if(i===1)return"m-ace";const e=i-t;return e<=-2?"m-eagle":e===-1?"m-birdie":e===0?"m-par":e===1?"m-bogey":"m-double"}function O2(i,{events:t,progress:e,holes:n=[],rounds:s=[],rig:r=null,play:o=null}={}){const a=(L,P)=>t&&t.emit(L,P),c=(L,P)=>t&&t.on(L,P),l=new Map;{let L=0;for(const P of s)l.set(P.id,L),L+=P.holes.length}const u=L=>{for(const P of s){const B=l.get(P.id);if(L>=B&&L<B+P.holes.length)return P}return s[0]},f=L=>n[L]||{name:"Hole "+(L+1),par:3,id:"h"+L};let d=null,h=!1,g=!1,x=0,m=null,p=null,M=!1,_=!1,w=0,T={index:-1,best:null,stars:0,total:0},b=!!(e&&e.muted),E=e&&e.skin||"classic",v=!1;const S=new Set,y=(L,P)=>{const B=setTimeout(()=>{S.delete(B),L()},P);return S.add(B),B},C=L=>{L&&(clearTimeout(L),S.delete(L))},z=Pt("div.scr");i.appendChild(z);function U(L,P,B,N,gt){return Pt("button.btn"+L,{type:"button","aria-label":gt||null,onclick:bt=>{Date.now()-x<rh||N(bt)}},[B?Pt("span.ico",{html:B}):null,P?Pt("span.lbl",null,P):null])}function X(L,P=""){const B=Pt("div.stars"+P,{role:"img","aria-label":L+(L===1?" star":" stars")});for(let N=0;N<3;N++)B.appendChild(Pt("span.st"+(N<L?".on":""),{html:Ne.star,style:{"--k":String(N)}}));return B}const ct=[];function st(L){const P=U(L?".b-white.b-sound":".b-round.b-white.b-sound","","",()=>$(!b));return ct.push({b:P,withLabel:L}),xt(),P}function xt(){for(const{b:L,withLabel:P}of ct){for(;L.firstChild;)L.removeChild(L.firstChild);L.appendChild(Pt("span.ico",{html:b?Ne.soundOff:Ne.soundOn})),P&&L.appendChild(Pt("span.lbl",null,b?"Sound off":"Sound on")),L.setAttribute("aria-label",b?"Turn sound on":"Turn sound off"),L.setAttribute("aria-pressed",b?"false":"true"),L.classList.toggle("off",b)}}function $(L){b=!!L,xt(),a("ui:sound",{muted:b})}function W(L,P,B){const N=typeof L=="object"?L:s.find(ne=>ne.id===L)||s[0],gt=l.get(N.id)||0,bt=Pt("div.strip",{role:"table","aria-label":N.name+" scorecard"}),Ct=Pt("div.srow.s-hole",{role:"row"},Pt("span.sh",{role:"rowheader"},"Hole")),Dt=Pt("div.srow.s-par",{role:"row"},Pt("span.sh",{role:"rowheader"},"Par")),Ot=Pt("div.srow.s-you",{role:"row"},Pt("span.sh",{role:"rowheader"},"You"));let Gt=0,Ut=0,te=0;N.holes.forEach((ne,oe)=>{const ie=gt+oe,Zt=P(ie),xe=ie===B?".hi":"";Ct.appendChild(Pt("span.sc"+xe,{role:"cell",style:{"--k":String(oe)}},String(ie+1))),Dt.appendChild(Pt("span.sc"+xe,{role:"cell"},String(ne.par)));const Vt=F2(Zt,ne.par);Ot.appendChild(Pt("span.sc.s-score"+xe,{role:"cell",style:{"--k":String(oe)}},Zt==null?Pt("i.dash",null,"–"):Pt("b.mk"+(Vt?"."+Vt:""),null,String(Zt)))),Zt!=null&&(Gt+=Zt,Ut+=ne.par,te++)}),Ct.appendChild(Pt("span.sc.s-tot",{role:"cell"},"Tot")),Dt.appendChild(Pt("span.sc.s-tot",{role:"cell"},String(N.holes.reduce((ne,oe)=>ne+oe.par,0))));const Mt=te?Cc(Gt,Ut):"–";return Ot.appendChild(Pt("span.sc.s-tot.s-rel"+(te&&Gt<Ut?".under":""),{role:"cell",title:te?Gt+" strokes":""},Mt)),bt.appendChild(Ct),bt.appendChild(Dt),bt.appendChild(Ot),bt}const D={};function K(L,P,{primary:B,back:N}={}){const gt=Pt("div.panel.p-"+L+(P?"."+P:""),{role:"dialog","aria-modal":"true","aria-hidden":"true"});return z.appendChild(gt),D[L]={el:gt,primary:B,back:N},gt}function Y(L,P){const B=D[L];if(!B)return;for(const gt in D){const bt=gt===L;D[gt].el.classList.toggle("open",bt),D[gt].el.setAttribute("aria-hidden",bt?"false":"true")}d=L,x=Date.now();const N=typeof document<"u"?document.activeElement:null;N&&N.blur&&z.contains&&z.contains(N)&&N.blur(),B.render&&B.render(P),V(!0)}function rt(){for(const L in D)D[L].el.classList.remove("open"),D[L].el.setAttribute("aria-hidden","true");d=null,V(!1)}function V(L){L&&(se(),he()),L!==h&&(h=L,i.classList&&i.classList.toggle("ui-menu",L),a("ui:menu",{open:L}),L||I())}const Z=Pt("span.t-stars-n",null,"0"),mt=Pt("span.sub",null,""),H=U(".b-yellow.b-big.t-go","",Ne.play,()=>{const L=e?e.nextIndex():0;rt(),L===m&&!M||a("ui:play",{index:L})}),tt=Pt("span.lbl2",null,[Pt("span.main",null,"Continue"),mt]);H.appendChild(tt),K("title","",{primary:()=>H.click()}).appendChild(Pt("div.t-wrap",null,[Pt("div.logo",{role:"heading","aria-level":"1","aria-label":"8 Ball Golf"},[Pt("span.logo-ball",{"aria-hidden":"true"},Pt("span.logo-disc",null,"8")),Pt("span.logo-word",{"aria-hidden":"true"},[Pt("span.lw1",null,"BALL"),Pt("span.lw2",null,"GOLF")])]),Pt("p.tagline",null,"Hit the white. Sink the 8."),Pt("div.t-stars",{"aria-label":"Stars collected"},[Pt("span.ico",{html:Ne.star}),Z,Pt("span.of",null," / "+n.length*3)]),H,Pt("div.t-row",null,[U(".b-blue","Holes",Ne.grid,()=>Bt("title")),U(".b-blue","Balls",Ne.ball,()=>A("title")),st(!1)])])),D.title.render=()=>{const L=e?e.nextIndex():0,P=f(L);mt.textContent="Hole "+(L+1)+" · "+P.name,Z.textContent=String(e?e.totalStars():0)};let St="title",zt=s.length?s[0].id:1;const J=Pt("div.tabs",{role:"tablist"}),vt=Pt("div.tiles"),k=Pt("p.p-note",null,"");K("holes","card-panel",{back:()=>yt(St)}).appendChild(Pt("div.card.paper.c-holes",null,[Pt("div.c-head",null,[U(".b-round.b-back","",Ne.back,()=>yt(St),"Back"),Pt("h2",null,"Holes"),Pt("span.c-head-pad")]),J,vt,k]));function Bt(L){St=L;const P=e?e.nextIndex():0;zt=u(L==="pause"&&m!==null?m:P).id,Y("holes")}D.holes.render=()=>{for(;J.firstChild;)J.removeChild(J.firstChild);for(const N of s){const gt=l.get(N.id),bt=!e||e.isUnlocked(gt),Ct=e&&e.roundStars?e.roundStars(N.id):0,Dt=U(".tab"+(N.id===zt?".sel":"")+(bt?"":".locked"),"",bt?null:Ne.lock,()=>{if(!bt){ft(Dt),k.textContent="Finish hole "+gt+" to open "+N.name+"!";return}zt=N.id,D.holes.render()});Dt.setAttribute("role","tab"),Dt.setAttribute("aria-selected",N.id===zt?"true":"false"),Dt.appendChild(Pt("span.tab-name",null,N.name)),bt&&Dt.appendChild(Pt("span.tab-stars",null,[Pt("span.ico",{html:Ne.star}),Ct+"/"+N.holes.length*3])),J.appendChild(Dt)}for(;vt.firstChild;)vt.removeChild(vt.firstChild);const L=s.find(N=>N.id===zt)||s[0];if(!L)return;const P=l.get(L.id),B=e?e.nextIndex():0;vt.setAttribute("data-round",String(L.id)),L.holes.forEach((N,gt)=>{const bt=P+gt,Ct=f(bt),Dt=!e||e.isUnlocked(bt),Ot=e?e.best(bt):null,Gt=U(".tile"+(Dt?"":".locked")+(bt===B&&Dt?".next":"")+(bt===m?".cur":""),"",null,()=>{if(!Dt){ft(Gt),k.textContent="Finish hole "+bt+" first!";return}g=!1,rt(),a("ui:play",{index:bt})},Dt?"Hole "+(bt+1)+", "+Ct.name:"Hole "+(bt+1)+", locked");Gt.appendChild(Pt("span.tile-num",null,String(bt+1))),Gt.appendChild(Pt("span.tile-name",null,Ct.name)),Dt?(Gt.appendChild(Pt("span.tile-par",null,"Par "+Ct.par+(Ot!==null?" · Best "+Ot:""))),Gt.appendChild(X(e?e.stars(bt):0,".mini"))):Gt.appendChild(Pt("span.tile-lock",{html:Ne.lock})),vt.appendChild(Gt)}),k.textContent=""};let jt="title";const Ht=Pt("div.skins"),Kt=Pt("p.p-note",null,"");K("skins","card-panel",{back:()=>yt(jt)}).appendChild(Pt("div.card.paper.c-skins",null,[Pt("div.c-head",null,[U(".b-round.b-back","",Ne.back,()=>yt(jt),"Back"),Pt("h2",null,"Balls"),Pt("span.c-head-pad")]),Ht,Kt]));function A(L){jt=L,Y("skins")}function R(){if(!e)return"";const L=e.totalStars(),P=e.skins().find(B=>!B.unlocked);return P?P.need-L+" more ★ for the "+P.name+" ball!":"You unlocked every ball!"}D.skins.render=()=>{for(;Ht.firstChild;)Ht.removeChild(Ht.firstChild);const L=e?e.skins():[{id:"classic",name:"Classic",need:0,unlocked:!0}];for(const P of L){const B=U(".skin"+(P.unlocked?"":".locked")+(P.id===E?".sel":""),"",null,()=>{if(!P.unlocked){ft(B),Kt.textContent="Collect "+P.need+" ★ to unlock "+P.name+"!";return}E=P.id,a("ui:skin",{id:P.id}),D.skins.render()},P.name+(P.unlocked?"":", locked"));B.setAttribute("aria-pressed",P.id===E?"true":"false"),B.appendChild(Pt("span.skin-ball.sk-"+P.id,{"aria-hidden":"true"})),B.appendChild(Pt("span.skin-name",null,P.name)),B.appendChild(P.unlocked?Pt("span.skin-need.ok",null,P.id===E?"Playing":"Tap to use"):Pt("span.skin-need",null,[Pt("span.ico",{html:Ne.star}),String(P.need)])),Ht.appendChild(B)}Kt.textContent=R()};const Q=K("card","card-panel",{primary:()=>Wt()}),ut=Pt("div.card.paper.c-score");Q.appendChild(ut);let wt=null;function Et(){ut.classList.add("skip")}function Wt(){if(!ut.classList.contains("skip")&&Date.now()-x<I2){Et();return}wt&&wt()}ut.addEventListener("pointerdown",Et),D.card.render=L=>{const{index:P,strokes:B,par:N,picked:gt,penalties:bt=0,stars:Ct=0}=L,Dt=L.term||Ac(B,N,gt),Ot=Dt.key,Gt=T.index===P?T.best:null,Ut=T.index===P?T.stars:0,te=T.index===P?T.total:e?e.totalStars():0,Mt=Gt!==null&&B<Gt,ne=Math.max(0,Ct-Ut),oe=e?e.skins().filter(ze=>ze.need>te&&ze.need<=te+ne):[],ie=(()=>{const ze=u(P);return P===l.get(ze.id)+ze.holes.length-1})(),Zt=L.level||f(P);for(;ut.firstChild;)ut.removeChild(ut.firstChild);ut.className="card paper c-score t-"+Ot,ut.appendChild(Pt("div.sc-hole",null,"Hole "+(P+1)+" · "+(Zt.name||""))),ut.appendChild(Pt("div.sc-term",null,[Pt("span.term-ico",{html:U2(Ot)}),Pt("div.term-txt",null,[Pt("b.term",null,Dt.label),Pt("span.term-sub",null,D2[Ot]||"")])]));const xe=gt?"Picked up · Par "+N:B+(B===1?" stroke":" strokes")+" · Par "+N;ut.appendChild(Pt("div.sc-line",null,[xe,bt>0?Pt("span.pen",null,"+"+bt+" penalty"):null])),ut.appendChild(X(Ct,".big"));const Vt=Pt("div.sc-extras");Mt&&Vt.appendChild(Pt("span.badge.b-best",null,"New best!"));for(const ze of oe){const be=U(".b-mini","Use it",null,()=>{E=ze.id,a("ui:skin",{id:ze.id}),be.classList.add("done"),be.lastChild.textContent="Playing!"});Vt.appendChild(Pt("span.badge.b-skin",null,[Pt("span.skin-ball.sk-"+ze.id,{"aria-hidden":"true"}),"New ball: "+ze.name+"!",be]))}Vt.childNodes.length&&ut.appendChild(Vt);const Se=ze=>ze===P?Gt===null?B:Math.min(Gt,B):e?e.best(ze):null;ut.appendChild(W(u(P),Se,P));const Oe=v&&!gt;Oe&&ut.appendChild(Pt("p.sc-hint",null,"Hole in! Next hole →"));const Pe=ie?"Round score":"Next hole";wt=()=>{v=!1,rt(),a("ui:next",{})},ut.appendChild(Pt("div.btns",null,[U(".b-blue.sc-retry","Retry",Ne.retry,()=>{v=!1,rt(),a("ui:retry",{})}),U(".b-yellow.b-big.sc-next"+(Oe?".pulse":""),Pe,Ne.play,()=>wt())]))};const Ft=K("round","card-panel",{primary:()=>q()}),Nt=Pt("div.card.chalk.c-round");Ft.appendChild(Nt);let q=()=>{};Nt.addEventListener("pointerdown",()=>Nt.classList.add("skip")),D.round.render=L=>{const P=s.find(Ut=>Ut.id===L.round)||s[0],B=new Map((L.holes||[]).map(Ut=>[Ut.index,Ut.strokes])),N=L.total||0,gt=L.par||P.holes.reduce((Ut,te)=>Ut+te.par,0),bt=L.rel||Cc(N,gt),Ct=l.get(P.id)||0;let Dt=0;for(let Ut=0;Ut<P.holes.length;Ut++)Dt+=e?e.stars(Ct+Ut):0;const Ot=P===s[s.length-1];for(;Nt.firstChild;)Nt.removeChild(Nt.firstChild);Nt.className="card chalk c-round",Nt.appendChild(Pt("h2.r-title",null,(L.name||P.name)+" done!")),Nt.appendChild(Pt("div.r-score",null,[Pt("div.r-rel"+(N<gt?".under":N===gt?".even":""),null,[Pt("span.r-cap",null,"Best round"),Pt("b",null,bt)]),Pt("div.r-meta",null,[Pt("span",null,"Total "+N+" · Par "+gt),Pt("span.r-stars",null,[Pt("span.ico",{html:Ne.star}),Dt+" / "+P.holes.length*3])])])),Nt.appendChild(W(P,Ut=>B.has(Ut)?B.get(Ut):e?e.best(Ut):null,-1));const Gt=Ot?"You played all "+n.length+" holes! Go back for more stars.":s[s.indexOf(P)+1].name+" is open! Curves, cushions and water.";Nt.appendChild(Pt("p.r-hook",null,Gt)),Nt.appendChild(Pt("p.r-hook.r-skin",null,R())),q=()=>{rt(),a("ui:next",{})},Nt.appendChild(Pt("div.btns",null,[U(".b-yellow.b-big.r-next",Ot?"Continue":"Play "+s[s.indexOf(P)+1].name,Ne.play,()=>q())]))},K("pause","card-panel",{primary:()=>it(),back:()=>it()}).appendChild(Pt("div.card.paper.c-pause",null,[Pt("h2",null,"Paused"),U(".b-yellow.b-big.ps-resume","Resume",Ne.play,()=>it()),Pt("div.ps-grid",null,[U(".b-blue.ps-retry","Retry hole",Ne.retry,()=>{g=!1,rt(),a("ui:retry",{})}),U(".b-blue.ps-holes","Holes",Ne.grid,()=>Bt("pause")),U(".b-blue.ps-skins","Balls",Ne.ball,()=>A("pause")),st(!0)])]));function it(){!g&&d!=="pause"||(g=!1,rt(),a("ui:resume",{}))}function yt(L){L==="pause"&&g?Y("pause"):L==="title"?Y("title"):rt()}function ft(L){L.classList.remove("nudge"),L.offsetWidth,L.classList.add("nudge")}const dt=Pt("span.tip-txt",null,""),F=Pt("div.tip",{role:"status","aria-live":"polite",hidden:!0},[Pt("span.tip-ico",{"aria-hidden":"true"},Pt("span",null,"8")),dt]),at=Pt("span.coach-txt",null,""),Tt=Pt("span.coach-gesture",{html:ah,"aria-hidden":"true"}),O=Pt("button.coach-skip",{type:"button",onclick:()=>We()},"Skip"),ot=Pt("div.coach",{role:"status","aria-live":"polite",hidden:!0},[Tt,at,O]),ht=Pt("div.hand",{html:ah,"aria-hidden":"true",hidden:!0}),_t=Pt("b.toast-main",null,""),At=Pt("span.toast-sub",null,""),j=Pt("div.toast",{role:"status","aria-live":"polite",hidden:!0},[_t,At]),pt=Pt("div.celebrate",{"aria-hidden":"true",hidden:!0});z.appendChild(F),z.appendChild(ot),z.appendChild(ht),z.appendChild(j),z.appendChild(pt);let Rt=null,It=0;function Lt(){C(It),!(!Rt||d!==null)&&(It=y(()=>{if(d!==null)return;const L=Rt;Rt=null,!(!L||L.index!==m||M)&&(dt.textContent=L.text,F.hidden=!1,Qt(F,"go"),e&&e.markTip(L.id),It=y(qt,R2))},C2))}function qt(){C(It),It=0,F.hidden=!0,F.classList.remove("go")}let Yt=0;function le(L,P="",B=""){h||(_t.textContent=L,At.textContent=P,At.hidden=!P,j.className="toast"+(B?" k-"+B:""),j.hidden=!1,Qt(j,"go"),C(Yt),Yt=y(se,P2))}function se(){C(Yt),Yt=0,j.hidden=!0,j.classList.remove("go")}let ae=0;function pe(L){h||(pt.textContent=z2[L]||"In the hole!",pt.className="celebrate t-"+L,pt.hidden=!1,Qt(pt,"go"),C(ae),ae=y(he,L2))}function he(){C(ae),ae=0,pt.hidden=!0,pt.classList.remove("go")}function Qt(L,P){L.classList.remove(P),L.offsetWidth,L.classList.add(P)}const ge=[{text:"Sink the 8 in the hole!",hand:"",ms:2600},{text:"Move the white ball anywhere in the circle.",hand:"drag",ms:4200},{text:"This line shows where the 8 will roll. Drag to aim.",hand:"aim",ms:4600},{text:"Pull back for power… let go to shoot!",hand:"pull",ms:0}],re={on:!1,step:-1,timer:0,fired:!1,everyShown:!1,raf:0};function Te(){re.on=!0,re.fired=!1,re.everyShown=!1,en(0)}function en(L){C(re.timer),re.step=L;const P=ge[L];if(!P){nn();return}Fe(P.text,P.hand),P.ms&&(re.timer=y(()=>{re.on&&re.step===L&&en(L+1)},P.ms))}function Fe(L,P){at.textContent=L,ot.hidden=!1,ot.setAttribute("data-hand",P||"none"),Tt.hidden=!P||P!=="pull"&&!!(r&&o),Qt(ot,"go"),hn(P)}function nn(){C(re.timer),ot.hidden=!0,hn("")}function We(){re.on=!1,re.step=-1,nn()}function hn(L){re.raf&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(re.raf),re.raf=0;const P=(L==="drag"||L==="aim")&&r&&o&&typeof requestAnimationFrame=="function";if(L!=="pull"&&!P){ht.hidden=!0,ht.removeAttribute("data-mode");return}if(ht.setAttribute("data-mode",L),ht.hidden=!1,P){const B=()=>{re.raf=requestAnimationFrame(B);try{const N=o.intent,gt=o.level;if(!N||!gt)return;const bt=(gt.heightAt?gt.heightAt(N.x,N.z):0)+.5,Ct=r.groundToScreen(N.x,bt,N.z);Ct&&Ct.onScreen!==!1&&(ht.style.transform="translate("+Math.round(Ct.x)+"px,"+Math.round(Ct.y)+"px)")}catch{}};B()}else ht.style.transform=""}function I(){Lt()}return c("game:hole",({index:L,level:P,first:B}={})=>{m=L,p=P||f(L),M=!1,w=0,T={index:L,best:e?e.best(L):null,stars:e?e.stars(L):0,total:e?e.totalStars():0},qt(),se(),he(),Rt=null,re.on&&We();const N=p&&(p.id||p.hole&&p.hole.id);v=!!B,B?(e&&e.markTip(N),Te()):p&&p.tip&&e&&!e.seenTip(N)&&(Rt={index:L,id:N,text:p.tip},Lt())}),c("shot:fire",({strokes:L}={})=>{w=L|0,!F.hidden&&It&&(C(It),It=y(qt,900)),re.on&&(re.fired=!0,re.step=99,nn())}),c("shot:end",({outcome:L,picked:P,penalty:B}={})=>{if(P&&le("Picked up","Try again for a star!","soft"),re.on&&L!=="holed"&&!P&&!re.everyShown){re.everyShown=!0;const N=p?p.par:2;Fe("Every shot counts. Par "+N+" = in "+N+" shots is great!",""),re.timer=y(()=>{re.on&&nn()},4500)}}),c("ball:hop",()=>le("Too fast!","Softer next time","warn")),c("ball:hazard",({kind:L}={})=>{L==="water"?le("Splash! +1","Back to where you were","water"):le("Out of bounds! +1","Back to where you were","warn")}),c("ball:whiff",()=>le("Missed the 8!","Aim the white at the 8","soft")),c("ball:holed",()=>{re.on&&We();const L=p?p.par:3;pe(Ac(Math.max(1,w||1),L,!1).key)}),c("hole:done",(L={})=>{M=!0,qt(),Rt=null,re.on&&We(),g=!1,Y("card",L)}),c("game:round",(L={})=>Y("round",L)),c("ui:pause",()=>{if(d===null&&!_){g=!0,Y("pause");return}g||Promise.resolve().then(()=>a("ui:resume",{}))}),c("ui:sound",({muted:L}={})=>{!!L!==b&&(b=!!L,xt())}),c("ui:skin",({id:L}={})=>{L&&(E=L)}),c("ad:start",()=>{_=!0,se(),he()}),c("ad:end",()=>{_=!1}),typeof window<"u"&&window.addEventListener&&window.addEventListener("keydown",L=>{if(L.repeat)return;const P=L.code;if(P==="KeyP"||P==="Escape"){if(d==="pause"){it(),L.preventDefault();return}if(d&&D[d].back){D[d].back(),L.preventDefault();return}d===null&&m!==null&&!M&&!_&&(a("ui:pause",{}),L.preventDefault());return}if(d&&(P==="Enter"||P==="NumpadEnter"||P==="Space")){const B=L.target;if(B&&B.tagName==="BUTTON"||(L.preventDefault(),Date.now()-x<rh))return;const N=D[d];N.primary&&N.primary()}}),{el:z,showTitle(){g=!1,Y("title")},hideAll(){const L=g;g=!1,d!==null&&rt(),L&&a("ui:resume",{})},isOpen(){return d!==null},get current(){return d}}}function ch(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const dc=i=>440*Math.pow(2,(i-69)/12),_n=(i,t)=>typeof i=="number"&&Number.isFinite(i)?i:t,lh=1e-4;function Ad(i,t,e){const n=2*Math.PI*Math.min(i,e*.45)/e,s=Math.sin(n)/(2*t),r=1+s;return[s/r,0,-s/r,-2*Math.cos(n)/r,(1-s)/r]}function Cd(i,t,e,n,s,r,o,a){const[c,l,u,f,d]=o;let h=0,g=0,x=0,m=0;const p=Math.min(i.length,t+e);for(let M=t,_=0;M<p;M++,_++){const w=(_<n?_/n:1)*Math.exp(-_/s),T=(a()*2-1)*w,b=c*T+l*h+u*g-f*x-d*m;g=h,h=T,m=x,x=b,i[M]+=b*r}}function Bl(i,t){let e=0;for(let n=0;n<i.length;n++)e=Math.max(e,Math.abs(i[n]));if(e>0)for(let n=0;n<i.length;n++)i[n]*=t/e}function k2(i,t,e){for(let s=0;s<16;s++){const r=Math.pow(s/16,1.6)*.3+e()*.02,o=Math.floor(t*(.012+e()*.02)),a=Math.pow(1-r/.38,1.2)*(.5+.5*e());Cd(i,Math.floor(r*t),o,Math.floor(t*.0015),t*(.004+e()*.004),a,Ad(2400+e()*3800,1.4+e()*1.6,t),e)}Bl(i,.9)}function uh(i,t,e,n,s,r){for(let c=0;c<n;c++){const l=Ad(900+e()*1500,1.1+e()*1.2,t),u=3.5+e()*2.5,f=.45+.55*e(),d=s+e()*(r-s);for(let h=e()*.2;h<d;h+=1/u*(.82+.36*e())){const g=h>d-.5?(d-h)/.5:1;Cd(i,Math.floor(h*t),Math.floor(t*.03),Math.floor(t*6e-4),t*(.004+e()*.005),f*(.6+.4*g),l,e)}}const o=Math.floor(t*.023),a=Math.floor(t*.037);for(let c=i.length-1;c>=a;c--)i[c]+=.22*i[c-o]+.14*i[c-a];Bl(i,.85)}const fh={white:[1,(i,t,e)=>{for(let n=0;n<i.length;n++)i[n]=e()*2-1}],brown:[1,(i,t,e)=>{let n=0;for(let s=0;s<i.length;s++)n=(n+.02*(e()*2-1))*.998,i[s]=n;Bl(i,.9)}],rustle:[.38,k2],applauseLight:[1.8,(i,t,e)=>uh(i,t,e,7,.9,1.5)],applauseBig:[3.4,(i,t,e)=>uh(i,t,e,22,1.9,3.1)]};function B2({getWindow:i,maxVoices:t=14,hardVoices:e=22}={}){const n=ch(571921),s=[],r=new Map;let o=null,a=null,c=null,l=null,u=!1,f=!0,d=0,h=0;function g(){if(u)return!1;if(!o){const S=i(),y=S&&(S.AudioContext||S.webkitAudioContext);if(!y)return u=!0,!1;try{o=new y,a=o.createGain(),a.gain.value=.8,c=o.createDynamicsCompressor(),c.threshold.value=-12,c.knee.value=10,c.ratio.value=3.5,c.attack.value=.002,c.release.value=.2,l=o.createGain(),l.gain.value=f?1:0,a.connect(c),c.connect(l),l.connect(o.destination);const C=o.createBufferSource();C.buffer=o.createBuffer(1,1,o.sampleRate),C.connect(o.destination),C.onended=()=>{try{C.disconnect()}catch{}},C.start(0)}catch(C){return console.warn("[sfx] Web Audio unavailable",C),u=!0,o=null,!1}}if(o.state!=="running"&&o.state!=="closed")try{const S=o.resume();S&&S.catch&&S.catch(()=>{})}catch{}return!0}const x=()=>!!o&&o.state==="running",m=()=>o?o.currentTime:0;function p(S){if(f=!!S,!l)return;const y=o.currentTime,C=l.gain;try{C.cancelScheduledValues(y),C.setValueAtTime(C.value,y),C.setTargetAtTime(f?1:0,y,.012)}catch{C.value=f?1:0}}function M(S){let y=r.get(S);if(y||!o||!fh[S])return y||null;const[C,z]=fh[S],U=o.sampleRate;return y=o.createBuffer(1,Math.max(1,Math.floor(C*U)),U),z(y.getChannelData(0),U,ch(571921^S.length*7919^S.charCodeAt(0))),r.set(S,y),y}function _(){M("white"),M("brown"),M("rustle");const S=i(),y=(C,z)=>{try{(S&&S.setTimeout?S.setTimeout.bind(S):setTimeout)(C,z)}catch{}};y(()=>M("applauseLight"),700),y(()=>M("applauseBig"),1400)}function w(S){if(S.done)return;S.done=!0;for(const C of S.nodes){C.onended!==void 0&&(C.onended=null);try{C.disconnect()}catch{}}S.nodes.length=0;const y=s.indexOf(S);y>=0&&s.splice(y,1),h++}function T(S){const y=o.currentTime;for(const C of S.nodes)if(C.stop)try{C.stop(y)}catch{}w(S)}function b(){const S=o.currentTime;for(let y=s.length-1;y>=0;y--)s[y].end<S-1&&T(s[y])}function E(S=1,y=1){if(!x()||!f)return null;if(b(),s.length>=t){if(S<2)return null;if(s.length>=e){let z=null;for(const U of s)(!z||U.prio<z.prio||U.prio===z.prio&&U.t0<z.t0)&&(z=U);if(!z||z.prio>S)return null;T(z)}}const C=v(S,y);return s.push(C),d++,C}function v(S,y){const C=o.currentTime+.002,z=o.createGain();z.gain.value=y,z.connect(a);const U={prio:S,t0:C,end:C,done:!1,pending:0,nodes:[z],out:z},X=()=>{U.pending--,U.pending<=0&&w(U)},ct=W=>(U.nodes.push(W),W),st=(W,D,K)=>(ct(W),U.pending++,W.onended=X,U.end=Math.max(U.end,K),W),xt=(W,D,K,Y,rt,V)=>(Y=Math.max(lh*2,Y),W.setValueAtTime(0,D),W.linearRampToValueAtTime(Y,D+K),rt>0&&W.setValueAtTime(Y,D+K+rt),W.exponentialRampToValueAtTime(lh,D+K+rt+V),D+K+rt+V),$=(W,D,K,Y)=>{if(W.setValueAtTime(D,Y),K)for(const[rt,V]of K)W.exponentialRampToValueAtTime(Math.max(1,rt),Y+Math.max(.001,V))};return U.filter=(W,D,K=.7,Y=z,rt=null,V=C)=>{const Z=ct(o.createBiquadFilter());return Z.type=W,Z.Q.value=K,$(Z.frequency,D,rt,V),Z.connect(Y),Z},U.tone=W=>{const D=C+_n(W.t,0),K=_n(W.a,.002),Y=_n(W.hold,0),rt=_n(W.d,.1),V=o.createOscillator();V.type=W.type||"sine",$(V.frequency,Math.max(1,_n(W.f,440)),W.to,D),W.detune&&(V.detune.value=W.detune);const Z=ct(o.createGain()),mt=xt(Z.gain,D,K,_n(W.peak,.2),Y,rt)+.02;if(V.connect(Z),Z.connect(W.dest||z),W.vib){const[H,tt,lt=0]=W.vib,St=o.createOscillator(),zt=ct(o.createGain());St.frequency.value=H,zt.gain.setValueAtTime(0,D),zt.gain.linearRampToValueAtTime(tt,D+lt+.08),St.connect(zt),zt.connect(V.frequency),st(St,D,mt),St.start(D),St.stop(mt)}return st(V,D,mt),V.start(D),V.stop(mt),V},U.noise=W=>{const D=M(W.buf||"white");if(!D)return null;const K=C+_n(W.t,0),Y=_n(W.a,.001),rt=_n(W.hold,0),V=_n(W.d,.05),Z=o.createBufferSource();Z.buffer=D;const mt=_n(W.rate,1);mt!==1&&(Z.playbackRate.value=mt);const H=ct(o.createGain()),tt=xt(H.gain,K,Y,_n(W.peak,.2),rt,V)+.02;H.connect(W.dest||z),W.filter?Z.connect(U.filter(W.filter.type,W.filter.f,_n(W.filter.q,.7),H,W.filter.to,K)):Z.connect(H);const lt=D.duration||D.length/D.sampleRate,St=(tt-K)*mt,zt=W.from0?0:Math.max(0,(lt-St)*n());return st(Z,K,tt),W.from0?Z.start(K):Z.start(K,zt,Math.min(lt-zt,St+.01)),Z.stop(tt),Z},U}return{start:g,ready:x,now:m,rng:n,setOutput:p,voice:E,buffer:M,prewarm:_,get ctx(){return o},stats:()=>({active:s.length,created:d,released:h})}}const mr=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,pc=i=>i<0?0:i>1?1:i,H2=["pointerdown","pointerup","touchend","mousedown","click","keydown"],G2=["ui:play","ui:next","ui:retry","ui:pause","ui:resume","ui:overview","ui:skin"];function V2({events:i,getWindow:t}={}){const e=t||(()=>typeof window<"u"?window:null),n=B2({getWindow:e}),s=n.rng;let r=!1,o=!1,a=!1,c=!1;function l(){const H=e(),tt=H&&H.navigator&&H.navigator.userActivation;tt&&tt.hasBeenActive===!1||f()}function u(H){const tt=e();if(!(!tt||!tt.addEventListener||H===a)){a=H;for(const lt of H2)H?tt.addEventListener(lt,l,{capture:!0,passive:!0}):tt.removeEventListener(lt,l,{capture:!0,passive:!0})}}function f(){if(!n.start()){u(!1);return}const H=n.ctx;if(!c){c=!0,n.setOutput(!r&&!o),n.prewarm();try{H.onstatechange=()=>{H.state==="running"?u(!1):H.state!=="closed"&&u(!0)}}catch{}}H.state==="running"&&u(!1)}u(!0);function d(){n.setOutput(!r&&!o)}const h=new Map;function g(H,tt){if(r||o||!n.ready())return!1;const lt=n.now(),St=h.get(H);return St!==void 0&&lt-St<tt&&lt>=St?!1:(h.set(H,lt),!0)}const x=H=>1+(s()-.5)*2*H;function m(H,tt,lt,St,zt){const J=dc(lt);H.tone({t:tt,f:J,a:.003,d:St,peak:zt}),H.tone({t:tt,f:J*3.93,a:.001,d:St*.16,peak:zt*.28}),H.noise({t:tt,filter:{type:"bandpass",f:Math.min(J*2.5,9e3),q:1.5},a:5e-4,d:.008,peak:zt*.22})}function p(H,tt,lt,St,zt){const J=dc(lt),vt=[[1,1,1],[2.76,.42,.45],[5.4,.16,.22]];for(const[k,nt,Bt]of vt)J*k<14e3&&H.tone({t:tt,f:J*k,a:.001,d:St*Bt,peak:zt*nt})}function M(H,tt,lt,St,zt){const J=dc(lt),vt=H.filter("lowpass",500,1.2,H.out,[[J*5+1200,.045],[J*3+700,.25]],H.t0+tt),k=[5.6,J*.007,.14];H.tone({t:tt,type:"sawtooth",f:J,detune:-7,a:.025,hold:St,d:.16,peak:zt,dest:vt,vib:k}),H.tone({t:tt,type:"sawtooth",f:J,detune:7,a:.025,hold:St,d:.16,peak:zt*.8,dest:vt})}function _(H,tt){const lt=n.voice(3,tt?.5:.36);if(!lt)return;const St=tt?3.4:1.8;lt.noise({t:H,buf:tt?"applauseBig":"applauseLight",from0:!0,a:.06,hold:St-.5,d:.45,peak:1,filter:{type:"highpass",f:260,q:.6}})}function w(H){const tt=n.voice(1);if(!tt)return;const lt=.3+.55*pc(H),St=x(.03);tt.tone({f:1250*St,to:[[760*St,.03]],a:8e-4,d:.035,peak:.34*lt}),tt.noise({filter:{type:"bandpass",f:2300*St,q:1.1},a:5e-4,d:.014,peak:.28*lt}),tt.tone({f:210,to:[[150,.05]],a:.002,d:.05,peak:.22*lt})}function T(H,tt=1){const lt=n.voice(2);if(!lt)return;const St=pc(mr(H)/10),zt=(.22+.78*Math.pow(St,.6))*tt,J=x(.03),vt=lt.filter("lowpass",2600+1e4*St,.6);lt.noise({filter:{type:"highpass",f:1900*J,q:.7},a:4e-4,d:.011,peak:.9*zt,dest:vt});const k=(1650+550*St)*J,nt=[[1,.55,.06],[1.505,.32,.04],[2.27,.2,.025],[3.08,.1,.016]];for(const[Bt,jt,Ht]of nt)lt.tone({f:k*Bt,to:[[k*Bt*.985,Ht]],a:6e-4,d:Ht*(.85+.3*St),peak:jt*zt,dest:vt});lt.tone({f:640*J,to:[[430*J,.03]],a:.001,d:.03,peak:.22*zt,dest:vt})}function b(H,tt,lt,St=1){const zt=[[1,.5,.07],[2.31,.25,.04],[3.93,.1,.02]];for(const[J,vt,k]of zt)H.tone({f:lt*J,to:[[lt*J*.97,k*St]],a:8e-4,d:k*St,peak:vt*tt});H.noise({filter:{type:"bandpass",f:lt*4.5,q:1.2},a:5e-4,d:.01,peak:.3*tt}),H.tone({f:140,to:[[105,.06]],a:.002,d:.06,peak:.22*tt})}function E({id:H,kind:tt,speed:lt}){const St=mr(lt);if(St<.3||!g("wall"+mr(H),.045))return;const zt=pc(St/8),J=.15+.85*Math.pow(zt,.7),vt=x(.04),k=n.voice(0);if(k)switch(tt){case"cushion":k.tone({f:150*vt,to:[[92*vt,.16]],a:.002,d:.16,peak:.55*J}),k.noise({buf:"brown",filter:{type:"lowpass",f:600,q:.7},a:.002,d:.07,peak:.5*J}),k.tone({type:"triangle",f:225*vt,to:[[300*vt,.05],[270*vt,.18]],a:.004,d:.17,peak:.13*J,vib:[16,8,0]}),k.noise({filter:{type:"bandpass",f:1400,q:.8},a:5e-4,d:.012,peak:.12*J});break;case"hedge":k.noise({buf:"rustle",from0:!0,rate:.85+.35*s(),a:.002,hold:.12,d:.2,peak:.55*(.4+.6*J)}),k.noise({buf:"brown",filter:{type:"lowpass",f:380,q:.7},a:.003,d:.07,peak:.35*J});break;case"bumper":{const nt=k.filter("lowpass",2400,.8);k.tone({type:"triangle",f:170*vt,to:[[430*vt,.045],[330*vt,.32]],vib:[24,26,0],a:.003,d:.34,peak:.36*(.35+.65*J),dest:nt}),k.tone({f:120,to:[[78,.08]],a:.002,d:.08,peak:.4*J}),k.noise({filter:{type:"bandpass",f:3e3,q:1.5},a:5e-4,d:.006,peak:.18*J});break}case"tree":b(k,J,300*vt,.75),k.noise({buf:"rustle",from0:!0,rate:1.1+.3*s(),a:.004,hold:.04,d:.15,peak:.22*J});break;case"lollipop":b(k,J*.9,720*vt,.7);break;case"post":b(k,J,520*vt);break;default:b(k,J,430*vt);break}}function v(){if(!g("hop",.12))return;const H=n.voice(2);if(!H)return;const tt=x(.03);H.noise({filter:{type:"bandpass",f:4200*tt,q:5},a:5e-4,d:.009,peak:.5}),H.tone({f:1850*tt,a:.001,d:.13,peak:.22}),H.tone({f:1850*2.76*tt,a:.001,d:.05,peak:.09}),H.noise({t:.075,filter:{type:"bandpass",f:3700*tt,q:4},a:5e-4,d:.008,peak:.2})}function S(H){if(!g("holed",.3))return;const tt=n.voice(2);if(!tt)return;const lt=mr(H,1),St=lt>2.5?4:lt>.9?3:2,zt=[[0,3e3,.3],[.05,2650,.24],[.092,3250,.18],[.125,2500,.13]];for(let vt=0;vt<St;vt++){const[k,nt,Bt]=zt[vt];tt.noise({t:k,filter:{type:"bandpass",f:nt*x(.04),q:3.5},a:5e-4,d:.016,peak:Bt})}const J=zt[St-1][0]+.05;tt.tone({t:J,f:310,to:[[205,.22]],a:.002,d:.26,peak:.5}),tt.tone({t:J,f:640,to:[[470,.1]],a:.001,d:.11,peak:.13}),tt.noise({t:J,filter:{type:"bandpass",f:820,q:2.5},a:.001,d:.1,peak:.26}),tt.tone({t:J+.13,f:285,to:[[215,.11]],a:.002,d:.12,peak:.2}),tt.noise({t:J+.24,filter:{type:"bandpass",f:1900,q:3},a:5e-4,d:.01,peak:.08})}function y(H=1){const tt=n.voice(2,H);if(tt){tt.tone({f:260,to:[[720,.07]],a:.002,d:.09,peak:.35}),tt.noise({filter:{type:"lowpass",f:5200,q:.8,to:[[500,.45]]},a:.004,d:.5,peak:.5}),tt.noise({buf:"brown",filter:{type:"lowpass",f:420,q:.7},a:.004,d:.26,peak:.42});for(let lt=0;lt<4;lt++){const St=480+s()*520;tt.tone({t:.13+lt*.07+s()*.03,f:St,to:[[St*1.9,.045]],a:.002,d:.05,peak:.11})}for(let lt=0;lt<3;lt++)tt.noise({t:.2+s()*.3,filter:{type:"bandpass",f:4200+s()*2e3,q:3},a:5e-4,d:.012,peak:.09})}}function C(H=1){const tt=n.voice(2,H);tt&&(tt.noise({filter:{type:"bandpass",f:1900,q:1.2,to:[[340,.4]]},a:.12,d:.3,peak:.36}),tt.tone({f:900,to:[[260,.42]],a:.02,hold:.1,d:.32,peak:.08}),tt.tone({t:.44,f:112,to:[[56,.16]],a:.003,d:.17,peak:.5}),tt.noise({t:.44,buf:"brown",filter:{type:"lowpass",f:320,q:.7},a:.003,d:.1,peak:.36}))}function z(H){if(!g("whiff",.3))return;const tt=n.voice(1);if(tt){const lt=tt.filter("lowpass",1600,.7);tt.tone({type:"triangle",f:540,to:[[300,.3]],vib:[7,14,.05],a:.03,d:.3,peak:.22,dest:lt}),tt.tone({f:270,to:[[150,.3]],a:.03,d:.28,peak:.1})}H==="water"&&g("hazard",.3)?y(.45):H==="oob"&&g("hazard",.3)&&C(.45)}function U(){if(!g("drop",.2))return;const H=n.voice(1);H&&(H.tone({f:380,to:[[1e3,.035]],a:.001,d:.05,peak:.28}),H.noise({filter:{type:"bandpass",f:2500,q:1.5},a:5e-4,d:.006,peak:.14}),H.tone({t:.085,f:700,to:[[520,.03]],a:.001,d:.035,peak:.08}))}function X(H){if(!g("ui",.06))return;const tt=n.voice(1);tt&&(tt.tone({f:1500,to:[[1e3,.03]],a:.001,d:.035,peak:.26}),tt.noise({filter:{type:"highpass",f:3e3,q:.7},a:5e-4,d:.004,peak:.1}),H&&tt.tone({t:.05,f:2e3,to:[[1500,.03]],a:.001,d:.04,peak:.2}))}const ct=72,st=74,xt=76,$=79,W=69,D=67,K=84,Y=88,rt=91,V=96;function Z(H){if(!g("jingle",.5))return;const tt=H==="ace"||H==="albatross"||H==="eagle",lt=n.voice(3,tt?.62:.7);if(lt)if(tt){const St=[[0,ct,.06],[.11,xt,.06],[.22,$,.06],[.34,K,.6]];for(const[J,vt,k]of St)M(lt,J,vt,k,.2),m(lt,J,vt,.35,.22);M(lt,.34,$,.6,.1),M(lt,.34,xt,.6,.08);const zt=[K,86,Y,rt,93,V,98,100];for(let J=0;J<zt.length;J++)p(lt,.48+J*.04,zt[J],.5,.07);if(H!=="eagle"){for(const J of[K,Y,rt,V])p(lt,1,J,1.2,.08);m(lt,1,ct,.8,.18)}_(.3,!0)}else if(H==="birdie"){const St=[[0,ct],[.085,xt],[.17,$],[.255,K]];for(const[zt,J]of St)m(lt,zt,J,zt>.2?.7:.3,.28);p(lt,.255,K,.9,.09),p(lt,.255,Y,.9,.06),_(.28,!1)}else H==="par"?(p(lt,0,$,1,.2),m(lt,0,$,.3,.12),p(lt,.16,K,1.3,.22),m(lt,.16,K,.5,.13)):H==="picked"?(m(lt,0,st,.35,.18),m(lt,.17,W,.55,.16)):(m(lt,0,xt,.3,.22),m(lt,.15,st,.3,.2),m(lt,.3,D,.3,.16),m(lt,.45,ct,.75,.22),p(lt,.45,K,.6,.05))}if(i&&i.on){i.on("shot:fire",H=>{f(),g("shot",.05)&&w(mr(H&&H.power,.5))}),i.on("ball:contact",H=>{g("clack",.03)&&T(H&&H.speed)}),i.on("ball:ballhit",H=>{g("clack",.03)&&T(H&&H.speed,.7)}),i.on("ball:wall",H=>E(H||{})),i.on("ball:hop",()=>v()),i.on("ball:holed",H=>S(H&&H.speed)),i.on("ball:hazard",H=>{g("hazard",.3)&&(H&&H.kind==="water"?y(1):C(1))}),i.on("ball:whiff",H=>z(H&&H.reason)),i.on("ball:drop",()=>U()),i.on("hole:done",H=>Z(H&&H.term&&H.term.key));for(const H of G2)i.on(H,()=>X(H==="ui:play"||H==="ui:next"||H==="ui:retry"||H==="ui:resume"));i.on("ui:sound",H=>{mt.setMuted(!!(H&&H.muted)),X(!0)}),i.on("audio:external",H=>mt.setExternalMute(!!(H&&H.muted)))}const mt={unlock:f,setMuted(H){r=!!H,d()},setExternalMute(H){o=!!H,d()},get muted(){return r},stats:()=>n.stats()};return mt}const as=typeof window<"u"&&window.__ebgBoot?window.__ebgBoot:null,Nr=({pct:i,label:t})=>as!==null?as.stage(i,t):void 0;as!==null&&as.codeReady&&as.codeReady();await Nr(Fs.course);await xh();zd();const Hl=document.getElementById("stage"),Br=document.getElementById("ui");Object.assign(Hl.style,{position:"fixed",inset:"0",overflow:"hidden"});Object.assign(Br.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"10"});Y2();const Ae=Wd(),pn=await Fp(Gd),Ge=A1(Hl),Ye=B1(Ge),Je=Np({events:Ae}),Gl=pn.isFresh();let us=Gl?0:Math.min(pn.nextIndex(),xi.length-1),cn=Ch(xi[us]),Zn=Md(Ge,cn),hh=!0;Ge.setRound(cn.round);Ye.setLevel(cn);await Nr(Fs.balls);const ir=Fy(Ge,{uiRoot:Br,rig:Ye});ir.setSkin(pn.skin);ir.setRound(cn.round);const Rd=Vy(Ge,{events:Ae,play:Je}),W2=c2(Ge);await Nr(Fs.flags);const Vs=A2(Br,{events:Ae}),Pd=O2(Br,{events:Ae,progress:pn,holes:xi,rounds:Ur,rig:Ye,play:Je}),X2=76,Ld=(i={})=>{Ye.setInsets&&Ye.setInsets({top:Math.max(X2,i.top||0),right:i.right||0,bottom:i.bottom||0,left:i.left||0})},ta=T2({stage:Ge,rig:Ye,play:Je,events:Ae,uiRoot:Br,onInsets:Ld});Ld(ta.insets?ta.insets():{});const fa=V2({events:Ae});fa.setMuted(pn.muted);const Vl=document.createElement("div");Vl.textContent=`v${ph}`;Object.assign(Vl.style,{position:"fixed",right:"max(10px, env(safe-area-inset-right))",bottom:"max(6px, env(safe-area-inset-bottom))",zIndex:"5",font:"11px system-ui, sans-serif",letterSpacing:".06em",color:"rgba(255,255,255,.55)",pointerEvents:"none"});document.body.appendChild(Vl);const Ee={menuOpen:!1,paused:!1,ad:!1,gameplay:!1,holesThisSession:0,roundPending:null,loading:!1};function _i(){const i=!Ee.menuOpen&&!Ee.paused&&!Ee.ad&&!Ee.loading&&Je.state!=="idle"&&Je.state!=="done";ta.enable(i),i!==Ee.gameplay&&(Ee.gameplay=i,i?Ud():Fd())}function ea(){fa.setExternalMute(_c()),Ae.emit("audio:external",{muted:_c()})}Hd(ea);ea();function Hr(i){us=i,Ee.loading=!0,hh&&cn.id===xi[i].id||(Zn.dispose(),cn=Ch(xi[i]),Zn=Md(Ge,cn)),hh=!1,Ge.setRound(cn.round),ir.setRound(cn.round),Ye.setLevel(cn),Zn.faceCamera(Ge.camera),Rd.clear(),Je.load(cn,i),Vs.setHole(cn,i),Vs.setStrokes(0,cn.par),Vs.show(!0),Od({round:cn.round,hole:i+1}),Ae.emit("game:hole",{index:i,level:cn,first:Gl&&i===0&&Ee.holesThisSession===0}),_i(),Ye.intro().then(()=>{us===i&&(Ee.loading=!1,Je.state==="ready"&&Ye.frameShot(Je),Zn.setFlow(1),_i())})}async function Id(){if(!(Ee.holesThisSession<2)){Ee.ad=!0,Ae.emit("ad:start",{}),ea(),_i();try{await Bd()}catch(i){console.error(i)}Ee.ad=!1,ea(),Ae.emit("ad:end",{}),_i()}}function q2(i){const t=Ur.find(r=>r.id===i),e=i===1?0:9,n=t.holes.map((r,o)=>({index:e+o,strokes:pn.best(e+o),par:r.par})),s=pn.roundTotal(i);return{round:i,name:t.name,holes:n,total:s.total,par:s.par,rel:Cc(s.total,s.par),complete:s.complete}}Ae.on("shot:ready",({strokes:i,par:t})=>{Vs.setStrokes(i,t),Ee.loading||Ye.frameShot(Je),Zn.setFlow(1),_i()});Ae.on("shot:fire",({strokes:i})=>{Ye.userMoved=!1,Vs.setStrokes(i,Je.level.par),Zn.setFlow(0),fa.unlock()});Ae.on("shot:end",({strokes:i,par:t})=>Vs.setStrokes(i,t));Ae.on("ball:contact",()=>ir.flash());Ae.on("ball:holed",()=>Zn.wiggleFlag());Ae.on("hole:done",({index:i,strokes:t,stars:e,term:n,level:s})=>{const r=pn.roundTotal(s.round);pn.record(i,t,e),Ee.holesThisSession+=1,(n.key==="ace"||n.key==="albatross")&&Yl();const o=xi.filter((c,l)=>pn.best(l)!==null).length;if(kd(Math.round(o/xi.length*100)),i===8||i===17){const c=pn.roundTotal(s.round);c.complete&&(!r.complete||c.total<r.total)&&Yl(),Ee.roundPending=s.round}_i()});Ae.on("ui:next",async()=>{if(Ee.roundPending){const i=Ee.roundPending;Ee.roundPending=null,Ae.emit("game:round",q2(i));return}if(await Id(),us>=xi.length-1){Pd.showTitle();return}Hr(us+1)});Ae.on("ui:retry",async()=>{Ee.roundPending=null,Je.state==="done"&&await Id(),Ee.paused=!1,Hr(us)});Ae.on("ui:play",({index:i})=>{Ee.roundPending=null,Ee.paused=!1,Hr(i)});Ae.on("ui:pause",()=>{Ee.paused=!0,_i()});Ae.on("ui:resume",()=>{Ee.paused=!1,_i()});Ae.on("ui:menu",({open:i})=>{Ee.menuOpen=!!i,_i()});Ae.on("ui:overview",({on:i})=>Ye.overview(!!i));Ae.on("ui:sound",({muted:i})=>{pn.setMuted(!!i),fa.setMuted(!!i)});Ae.on("ui:skin",({id:i})=>{pn.setSkin(i),ir.setSkin(i)});Hl.addEventListener("pointerdown",()=>{Ee.loading&&Ye.skipIntro&&Ye.skipIntro()});Ge.onResize(()=>{Zn.faceCamera(Ge.camera),Je.state==="ready"&&!Ye.userMoved&&Ye.frameShot(Je)});let mc=0,dh=0;function Dd(i){requestAnimationFrame(Dd);const t=mc?Math.min((i-mc)/1e3,.1):0;mc=i,dh+=t,!Ee.paused&&!Ee.ad&&Je.update(t);const e=Je.balls();Je.state==="rolling"&&!Ye.userMoved&&Ye.follow(e[1].x,e[1].z),Ye.update(t),ir.update(e,t),W2.update(Je,t),Zn.update(t,dh),ta.update(t),Rd.update(t),Ge.render()}window.ebg={version:ph,events:Ae,play:Je,stage:Ge,rig:Ye,progress:pn,HOLES:xi,ROUNDS:Ur,loadHole:Hr,get level(){return cn},get course(){return Zn}};if(as!==null){if(await Nr(Fs.warm),Ge.renderer&&Ge.scene&&Ge.camera)try{await Promise.race([Ge.renderer.compileAsync(Ge.scene,Ge.camera),new Promise(i=>setTimeout(i,4e3))])}catch(i){console.error(i)}for(let i=0;i<3;i++)await Nr({pct:Fs.warm.pct+3+i*1.5,label:Fs.warm.label}),Ge.render();await as.ready()}Nd();requestAnimationFrame(Dd);Hr(us);Gl||Pd.showTitle();function Y2(){window.addEventListener("keydown",i=>{const t=i.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown"].includes(i.code)&&i.preventDefault()}),window.addEventListener("wheel",i=>i.preventDefault(),{passive:!1}),window.addEventListener("contextmenu",i=>i.preventDefault())}

import{S as Ns}from"./index-o3LQFMOt.js";const Jf="0.1.0",oc="8bg:",Io={script:5e3,init:6e3,adStart:12e3,adMax:15e4};let Vs=null,Vn="none",zr=null,Di=null,Fs=0,zo=!1,Pi=!1,Zi=!1,Nl=-1;const ac=new Set,cc=new Map,Qf=()=>typeof window<"u"?window:null,Dn=(...i)=>{try{console.warn("[platform]",...i)}catch{}};function Bi(i){if(Vs)try{const t=i(Vs);t&&typeof t.catch=="function"&&t.catch(e=>Dn(e))}catch(t){Dn(t)}}function Fl(i,t,e){let n=0;return Promise.race([Promise.resolve(i).catch(()=>e),new Promise(s=>{n=setTimeout(()=>s(e),t)})]).finally(()=>clearTimeout(n))}function Uo(){const i=lc();for(const t of[...ac])try{t(i)}catch(e){Dn(e)}}function th(){try{const i=Qf();return i&&i.localStorage||null}catch{return null}}function eh(){return zr||(zr=(async()=>{try{const i=Qf();if(!i||!i.__cgSdk)return{env:Vn};const e=await Fl(i.__cgSdk,Io.script,!1)&&i.CrazyGames&&i.CrazyGames.SDK;if(!e||typeof e.init!="function")return{env:Vn};if(!await Fl(Promise.resolve().then(()=>e.init()).then(()=>!0,o=>(Dn("init failed",o),!1)),Io.init,!1))return{env:Vn};const s=String(e.environment||"disabled");if(s!=="crazygames"&&s!=="local")return Vn=s,{env:Vn};const r=e.game;try{Zi=!!(r.settings&&r.settings.muteAudio)}catch{Zi=!1}try{r.addSettingsChangeListener(o=>{let a=Zi;try{a=!!((o&&"muteAudio"in o?o:r.settings)||{}).muteAudio}catch{}a!==Zi&&(Zi=a,Uo())})}catch(o){Dn("settings listener",o)}try{e.data&&typeof e.data.getItem=="function"&&(e.data.getItem(oc+"probe"),Di=e.data)}catch(o){Dn("data module off",o&&(o.code||o.message||o)),Di=null}Vs=e,Vn=s,Fs===1&&Bi(o=>o.game.loadingStart()),Zi&&Uo()}catch(i){Dn("SDK unavailable",i),Vs=null,Di=null,(Vn==="crazygames"||Vn==="local")&&(Vn="none")}return{env:Vn}})(),zr)}function fd(){Fs||(Fs=1,Bi(i=>i.game.loadingStart()))}function hd(){if(Fs===2)return;const i=Fs;Fs=2,i===1&&Bi(t=>t.game.loadingStop())}function dd(){zo||Pi||(zo=!0,Bi(i=>i.game.gameplayStart()))}function pd(){zo&&(zo=!1,Bi(i=>i.game.gameplayStop()))}function Ol(){Bi(i=>i.game.happytime())}function md(i){Bi(t=>i?t.game.setGameContext(i):t.game.clearGameContext())}function gd(i){const t=Math.max(0,Math.min(100,Math.round(Number(i)||0)));t<=Nl||(Nl=t,Bi(e=>e.game.reportGameCompletedPercentage(t)))}function xd(){return!Vs||Pi?Promise.resolve():new Promise(i=>{let t=!1,e=0,n=0;const s=()=>{t||(t=!0,clearTimeout(e),i())},r=()=>{clearTimeout(n),Pi&&(Pi=!1,Uo()),s()};e=setTimeout(()=>{Pi||s()},Io.adStart);const o={adStarted:()=>{clearTimeout(e),clearTimeout(n),Pi||(Pi=!0,Uo()),n=setTimeout(r,Io.adMax)},adFinished:r,adError:a=>{const c=a&&a.code;c&&c!=="adCooldown"&&c!=="adsDisabledBasicLaunch"&&c!=="unfilled"&&Dn("ad",c),r()}};try{const a=Vs.ad.requestAd("midgame",o);a&&typeof a.then=="function"&&a.then(void 0,()=>r())}catch(a){Dn("ad",a),r()}})}function lc(){return Zi||Pi}function vd(i){return typeof i!="function"?()=>{}:(ac.add(i),()=>{ac.delete(i)})}const _d={async load(i){await eh();const t=oc+i;if(Di)try{const e=Di.getItem(t);if(e!=null)return String(e);const n=kl(t);if(n!=null){try{Di.setItem(t,n)}catch(s){Dn("migrate",s)}return n}return null}catch(e){Dn("data load",e)}return kl(t)},save(i,t){const e=oc+i,n=String(t);if(Di)try{Di.setItem(e,n);return}catch(s){Dn("data save",s)}Md(e,n)}};function kl(i){const t=th();if(t)try{const e=t.getItem(i);if(e!=null)return String(e)}catch{}return cc.has(i)?cc.get(i):null}function Md(i,t){cc.set(i,t);const e=th();if(e)try{e.setItem(i,t)}catch{}}function yd(){const i=new Map;return{on(t,e){return i.has(t)||i.set(t,new Set),i.get(t).add(e),()=>i.get(t).delete(e)},emit(t,e){const n=i.get(t);if(n)for(const s of[...n])try{s(e)}catch(r){console.error("[events] "+t,r)}}}}const uc=Math.PI/180,zs=i=>Math.round(i*100)/100;function Wn(i,t=12){const e=i.length,n=[];for(let s=0;s<e;s++){const r=i[s],o=r[2]||0;if(!o){n.push([r[0],r[1]]);continue}const a=i[(s+e-1)%e],c=i[(s+1)%e];let l=a[0]-r[0],u=a[1]-r[1],d=c[0]-r[0],h=c[1]-r[1];const f=Math.hypot(l,u),g=Math.hypot(d,h);l/=f,u/=f,d/=g,h/=g;const x=Math.acos(Math.max(-1,Math.min(1,l*d+u*h)));let m=o/Math.tan(x/2),p=o;const v=.5*Math.min(f,g);m>v&&(m=v,p=m*Math.tan(x/2));const y=l+d,_=u+h,E=Math.hypot(y,_),w=p/Math.sin(x/2),A=r[0]+y/E*w,b=r[1]+_/E*w,S=Math.atan2(r[1]+u*m-b,r[0]+l*m-A);let M=Math.atan2(r[1]+h*m-b,r[0]+d*m-A)-S;for(;M>Math.PI;)M-=2*Math.PI;for(;M<-Math.PI;)M+=2*Math.PI;const T=Math.max(1,Math.ceil(Math.abs(M)/(t*uc)));for(let k=0;k<=T;k++)n.push([zs(A+p*Math.cos(S+M*k/T)),zs(b+p*Math.sin(S+M*k/T))])}return n.filter((s,r)=>{const o=n[(r+n.length-1)%n.length];return r===0&&n.length>1?!(s[0]===n[n.length-1][0]&&s[1]===n[n.length-1][1]):!(s[0]===o[0]&&s[1]===o[1])})}function Bl(i,t,e,n,s,r=10){const o=[],a=Math.max(2,Math.ceil((s-n)/r));for(let c=0;c<=a;c++){const l=(n+(s-n)*c/a)*uc;o.push([zs(i[0]+e*Math.cos(l)),zs(i[1]+e*Math.sin(l))])}for(let c=a;c>=0;c--){const l=(n+(s-n)*c/a)*uc;o.push([zs(i[0]+t*Math.cos(l)),zs(i[1]+t*Math.sin(l))])}return o}const Sd=[{id:"g1",name:"Hello, Eight!",par:2,circle:5,size:[30,12],tee:[4,6],cup:[21,6],tip:"Sink the 8 in the hole!",border:"wall",ground:Wn([[0,.8,4],[15,0,8],[30,.8,4],[30,11.2,4],[15,12,8],[0,11.2,4]]),zones:[{surface:"green",circle:{c:[21,6],r:3.6}}],props:[{type:"sign",at:[1.5,-1.4]},{type:"flowers",at:[6,-1.3]},{type:"flowers",at:[11,13.3]},{type:"flowers",at:[19,-1.3]},{type:"flowers",at:[25,13.2]},{type:"tree",at:[-3.2,13.5]},{type:"tree",at:[33.5,-2.2]},{type:"bush",at:[27,13.4]},{type:"bush",at:[-1.4,3]},{type:"statue8",at:[33.6,6]}]},{id:"g2",name:"Easy Does It",par:2,circle:5,size:[34,14],tee:[4,7],cup:[16,7],tip:"Softer is smarter.",border:"wall",ground:Wn([[0,2,3],[9,1.5,3],[11,3,2],[16,1,5],[21,3.5,2],[34,3.5,3],[34,10.5,3],[21,10.5,2],[16,13,5],[11,11,2],[9,12.5,3],[0,12,3]]),zones:[{surface:"green",circle:{c:[16,7],r:3.6}}],props:[{type:"sign",at:[1,.2]},{type:"flowers",at:[10.5,1.2]},{type:"flowers",at:[10.5,12.8]},{type:"flowers",at:[16,-.6]},{type:"flowers",at:[16,14.6]},{type:"bush",at:[26,2]},{type:"bush",at:[29,12]},{type:"flowerbox",at:[22,12.3]},{type:"flowerbox",at:[31,1.7]},{type:"tree",at:[37.5,7]},{type:"tree",at:[24,15.5]}]},{id:"g3",name:"Side Swipe",par:3,circle:4,size:[30,18],tee:[2.8,3.54],cup:[25,15],tip:"Hit its side!",border:"hedge",ground:Wn([[0,5.73,1.5],[2.92,0,1.5],[22,0,6],[30,3,5],[30,18,4],[17,18,4],[15,9.5,3],[0,10,3]]),zones:[{surface:"green",circle:{c:[25,15],r:3.8}}],props:[{type:"bush",at:[-1,2.2]},{type:"bush",at:[1.2,-1]},{type:"bush",at:[-1,7.5]},{type:"fountain",at:[6.5,14.5]},{type:"flowers",at:[2,12.5]},{type:"flowers",at:[11.5,12]},{type:"flowers",at:[12,16.5]},{type:"flowers",at:[12,-1.2]},{type:"tree",at:[33.5,9]},{type:"tree",at:[26,-3.2]}]},{id:"g4",name:"Bank Job",par:3,circle:4,size:[26,15],tee:[3,3],cup:[23,3],tip:"Bounce it off the wall!",border:"wall",ground:Wn([[0,.5,3],[11.5,0,1.5],[11.5,8.5,1.5],[14.5,8.5,1.5],[14.5,0,1.5],[26,.5,3],[26,15,4],[0,15,4]]),zones:[{surface:"green",circle:{c:[23,3],r:3.8}}],props:[{type:"flowerbox",at:[13,2]},{type:"flowerbox",at:[13,5.2]},{type:"flowers",at:[13,7.6]},{type:"tree",at:[-3.3,7]},{type:"flowers",at:[6,16.3]},{type:"flowers",at:[20,16.3]},{type:"bush",at:[27.6,9]},{type:"sign",at:[1,-1]},{type:"tree",at:[29.3,-1.5]}]},{id:"g5",name:"Lollipop Lane",par:3,circle:3,size:[40,20],tee:[4,10],cup:[36,10],tip:"Move the white ball!",border:"wall",ground:Wn([[0,3,3],[10,0,6],[30,0,6],[40,3,3],[40,17,3],[30,20,6],[10,20,6],[0,17,3]]),zones:[{surface:"green",circle:{c:[36,10],r:3.5}}],posts:[...[4,8,12,16].flatMap(i=>[12,20,28].map(t=>({at:[t,i],r:.6,kind:"lollipop"}))),...[6,10,14].flatMap(i=>[16,24].map(t=>({at:[t,i],r:.6,kind:"lollipop"})))],props:[{type:"lollipop",at:[-3.2,3]},{type:"lollipop",at:[43.2,17]},{type:"lollipop",at:[20,23.2]},{type:"flowers",at:[20,-1.2]},{type:"flowers",at:[8,20.6]},{type:"flowers",at:[32,20.6]},{type:"tree",at:[-3.5,15]},{type:"tree",at:[43.5,4]},{type:"sign",at:[1.5,1.2]}]},{id:"g6",name:"Up & Over",par:3,circle:4,size:[40,18],tee:[4,9],cup:[35,9],tip:"Uphill? Hit harder.",border:"hedge",ground:Wn([[0,2,3],[13,1,3],[15.5,5,2],[23,5,2],[25,1,3],[40,2,3],[40,16,3],[25,17,3],[23,13,2],[15.5,13,2],[13,17,3],[0,16,3]]),steps:[{axis:"x",from:16,to:22,h:1.8}],zones:[{surface:"green",circle:{c:[35,9],r:4}}],props:[{type:"flowers",at:[19,3.5]},{type:"flowers",at:[19,14.5]},{type:"bush",at:[16.5,2.5]},{type:"bush",at:[21.5,15.5]},{type:"tree",at:[7,20]},{type:"tree",at:[7,-2]},{type:"flowers",at:[32,18]},{type:"flowers",at:[32,0]},{type:"statue8",at:[43.2,9]},{type:"sign",at:[1,.8]}]},{id:"g7",name:"Sidewinder",par:3,circle:4,size:[42,20],tee:[2.5,3.5],cup:[39,15],tip:"Arrows show the slope.",border:"wall",tilt:[0,.05],ground:Wn([[0,1,3],[12,0,8],[30,2.5,8],[42,7,4],[42,19.5,4],[32,20,8],[14,16,8],[0,12.5,3]]),zones:[{surface:"green",circle:{c:[39,15],r:4}}],props:[{type:"tree",at:[4,18]},{type:"tree",at:[18,21.5]},{type:"flowers",at:[8,15.5]},{type:"flowers",at:[26,20.3]},{type:"bush",at:[22,.2]},{type:"flowers",at:[36,3.2]},{type:"tree",at:[44.8,2]},{type:"sign",at:[.5,-1]}]},{id:"g8",name:"Sandy Toes",par:3,circle:3.5,size:[40,20],tee:[4,11],cup:[33,8.5],tip:"Sand slows the 8.",border:"wall",ground:Wn([[0,4,3],[12,1,6],[32,1,5],[40,4,4],[40,16,4],[32,20,5],[12,20,6],[0,18,3]]),zones:[{surface:"green",circle:{c:[33,8.5],r:3.6}},{surface:"sand",poly:Wn([[13,5,3],[20,2.5,4],[29,3.5,3],[30,7,2],[27,10.6,3],[17,10.6,3],[12.5,8.5,2]])},{surface:"sand",poly:Bl([33,8.5],3,4.6,-70,80)}],props:[{type:"flowers",at:[22,-.5]},{type:"bush",at:[9,.2]},{type:"flowers",at:[22,21]},{type:"bush",at:[36,19.2]},{type:"tree",at:[-3.4,11]},{type:"tree",at:[43.5,10]},{type:"sign",at:[.5,2]}]},{id:"g9",name:"King of the Hill",par:4,circle:3.5,size:[50,28],tee:[5,5],cup:[37,17.5],tip:"Find the way up!",border:"hedge",ground:Wn([[0,0,4],[14.5,0,1.5],[14.5,14,1.5],[17.5,14,1.5],[17.5,0,1.5],[50,0,5],[50,28,5],[0,28,4]]),plateaus:[{circle:{c:[37,17],r:5},h:1.5,ramp:4,linear:!0}],arcs:[{kind:"hedge",c:[37,17],r:5,from:250,to:530}],zones:[{surface:"green",circle:{c:[37,17],r:4.6}},{surface:"sand",poly:Bl([37,17],9.3,11,255,525)}],props:[{type:"flowerbox",at:[16,3]},{type:"flowerbox",at:[16,9]},{type:"flowers",at:[16,12.6]},{type:"tree",at:[-3.5,21]},{type:"tree",at:[53.5,8]},{type:"tree",at:[30,31.5]},{type:"flowers",at:[8,-1]},{type:"flowers",at:[33,-1]},{type:"statue8",at:[53.6,22]},{type:"sign",at:[-1,2]}]}],Hl=i=>Math.round(i*100)/100,So=(i,t)=>[Hl(i),Hl(t)];function Sn(i,t=2.5,e=5,n=!0){const s=i.filter((a,c)=>{const l=i[(c+i.length-1)%i.length];return!n&&c===0||Math.hypot(a[0]-l[0],a[1]-l[1])>1e-6}),r=[],o=s.length;for(let a=0;a<o;a++){const c=s[a],l=c[2]??t;if(!n&&(a===0||a===o-1)){r.push(So(c[0],c[1]));continue}const u=s[(a+o-1)%o],d=s[(a+1)%o],h=Math.hypot(u[0]-c[0],u[1]-c[1]),f=Math.hypot(d[0]-c[0],d[1]-c[1]),g=[(u[0]-c[0])/h,(u[1]-c[1])/h],x=[(d[0]-c[0])/f,(d[1]-c[1])/f],m=Math.max(-1,Math.min(1,g[0]*x[0]+g[1]*x[1])),p=Math.acos(m)/2;if(!l||p>1.55){r.push(So(c[0],c[1]));continue}const v=Math.min(l/Math.tan(p),h*.48,f*.48),y=[c[0]+g[0]*v,c[1]+g[1]*v],_=[c[0]+x[0]*v,c[1]+x[1]*v];for(let E=0;E<=e;E++){const w=E/e,A=(1-w)*(1-w),b=2*(1-w)*w,S=w*w;r.push(So(A*y[0]+b*c[0]+S*_[0],A*y[1]+b*c[1]+S*_[1]))}}return r}function fc(i,t,e,n,s=10){const r=Math.max(2,Math.ceil(Math.abs(n-e)/s)),o=[];for(let a=0;a<=r;a++){const c=(e+(n-e)*a/r)*Math.PI/180;o.push(So(i[0]+Math.cos(c)*t,i[1]+Math.sin(c)*t))}return o}function bd(i,t,e){const n=r=>i.reduce((o,a,c)=>Math.hypot(a[0]-r[0],a[1]-r[1])<Math.hypot(i[o][0]-r[0],i[o][1]-r[1])?c:o,0),s=[];for(let r=n(t),o=n(e);s.push(i[r]),r!==o;r=(r+1)%i.length);return s}const wd={id:"l1",name:"Bend It",par:3,circle:4.5,size:[40,22],tee:[5,11],cup:[35,11],tip:"Slide the dot to bend the 8!",ground:Sn([[1,4],[12,1],[26,1.5],[39,3],[39,19],[26,20.5],[12,21],[1,18]],4.5),border:"wall",posts:[{at:[16,12.3],r:1.6,kind:"tree"},{at:[30.5,14],r:1.3,kind:"post"},{at:[30.5,8],r:1.3,kind:"post"}],zones:[{surface:"green",circle:{c:[35,11],r:4}}],props:[{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[41.5,22.5]},{type:"tree",at:[20,23.5],scale:1.2},{type:"bush",at:[6,-1.5]},{type:"bush",at:[33,-1.5]},{type:"flowers",at:[18,-1.6]},{type:"flowers",at:[-2,11]},{type:"sign",at:[-2.2,6]}]},ea=(i,t,e,n)=>{const s=n?1:-1;return[{kind:"hedge",pts:[[i-1.2,t],[i,t+s*1.2],[i+1.2,t]]},{kind:"hedge",pts:[[i,t+s*1.2],[i,e]]}]},Ed={id:"l2",name:"Slalom",par:4,circle:4,size:[46,22],tee:[4,11.5],cup:[38,9],tip:"Bend left, then bend right!",ground:Sn([[1,2],[23,1],[45,2],[45,20],[23,21],[1,20]],4),border:"wall",walls:[...ea(10,20.36,14,!1),...ea(18,1.36,9.1,!0),...ea(29,1.5,9.2,!0)],posts:[{at:[10,13],r:1.2,kind:"tree"},{at:[18,10.1],r:1.2,kind:"tree"},{at:[29,10.2],r:1.2,kind:"tree"}],zones:[{surface:"rough",rect:[0,0,46,22]},{surface:"fairway",poly:Sn([[2,5],[23,4],[44,5],[44,17],[23,18],[2,17]],3)},{surface:"green",circle:{c:[38,9],r:3.5}}],props:[{type:"tree",at:[-1.5,23]},{type:"tree",at:[47.5,-1]},{type:"tree",at:[30,23.5]},{type:"flowers",at:[14,-1.5]},{type:"flowers",at:[24,-1.6]},{type:"bush",at:[47.5,14]},{type:"sign",at:[-2,6]}]},Ad={id:"l3",name:"Lily Pad Lagoon",par:3,circle:4,size:[44,24],tee:[4,12],cup:[39.5,16.5],tip:"Splash = +1",ground:Sn([[1,4],[10,.8],[34,.8],[43,4],[43,20],[34,23.2],[10,23.2],[1,20]],4),border:"wall",zones:[{surface:"water",ellipse:{c:[22,12],rx:8.5,ry:6.2}},{surface:"fairway",rect:[12.5,10.5,31.5,13.5]},{surface:"green",circle:{c:[39,16],r:3.8}}],props:[{type:"bridge",at:[22,12],r:8.6,scale:.75},{type:"lilypad",at:[17,16],r:.9},{type:"lilypad",at:[20.5,17.2],r:.7},{type:"lilypad",at:[26.5,15.6],r:.8},{type:"lilypad",at:[18.5,7.6],r:.8},{type:"lilypad",at:[24,6.8],r:.7},{type:"lilypad",at:[27.5,8.5],r:.9},{type:"reeds",at:[15,14.6]},{type:"reeds",at:[28.5,15]},{type:"reeds",at:[15.5,9]},{type:"reeds",at:[28.6,9]},{type:"tree",at:[-1.5,22.5]},{type:"tree",at:[45.5,1]},{type:"flowers",at:[22,25.5]},{type:"flowers",at:[22,-1.6]}]},Gl=Sn([[6,21.2],[1.5,20.4],[1,4],[4,1.2],[36,1.2],[39,4],[38.5,20.4],[34,21.2]],3,5,!1),Td={id:"l4",name:"Boing Boing",par:3,circle:3.5,size:[40,22],tee:[8,6],cup:[32,6],tip:"Cushions bounce more!",ground:Gl,border:null,walls:[{kind:"wall",pts:Gl},{kind:"cushion",pts:[[34,21.2],[6,21.2]]},{kind:"hedge",pts:[[9.9,1.2],[12.3,3.2]]},{kind:"hedge",pts:[[30.1,1.2],[27.7,3.2]]}],arcs:[{kind:"hedge",c:[20,1.2],r:8,from:14,to:166}],zones:[{surface:"rough",circle:{c:[20,1.2],r:7.6}},{surface:"green",circle:{c:[32,6],r:3.5}}],props:[{type:"flowers",at:[17,4]},{type:"flowers",at:[22.5,5]},{type:"bush",at:[20,2.6],scale:1.3},{type:"flowers",at:[14.5,2.4]},{type:"flowers",at:[25.5,2.4]},{type:"tree",at:[-1.5,22]},{type:"tree",at:[41.5,22]},{type:"bush",at:[20,23.6]},{type:"flowers",at:[10,23.6]},{type:"flowers",at:[30,23.6]}]},nh=(i,t,e=.5)=>[...fc([26,2.5],i,0,180,7.5).map(([n,s])=>[n,2.5+(s-2.5)*t/i]),[26-i,e],[26+i,e]],Vl=Sn(nh(25,21.6),2.5),Cd={id:"l5",name:"Banana Bay",par:4,circle:3.5,size:[52,25],tee:[6,4],cup:[46,4],tip:"Bend it round the bay!",ground:Vl,border:"wall",zones:[{surface:"rough",poly:Vl},{surface:"fairway",poly:Sn(nh(23,19.4,2.2),2)},{surface:"water",ellipse:{c:[26,2],rx:17,ry:14}},{surface:"green",circle:{c:[46.5,5.5],r:3}}],props:[{type:"lilypad",at:[20,8],r:.9},{type:"lilypad",at:[26,11],r:.8},{type:"lilypad",at:[32,7],r:1},{type:"lilypad",at:[24,4],r:.7},{type:"fountain",at:[26,3.5]},{type:"reeds",at:[11.2,6.8]},{type:"reeds",at:[40.8,6.8]},{type:"reeds",at:[18,13.6]},{type:"reeds",at:[34,13.6]},{type:"tree",at:[-1.5,24]},{type:"tree",at:[53.5,24]},{type:"tree",at:[26,26.5],scale:1.2},{type:"flowers",at:[-2,12]},{type:"flowers",at:[54,12]}]},Wl=Sn([[39,4],[39,19],[33,21],[25,21],[25,11.5],[15,11.5],[15,21],[8,21],[1,18],[1,6],[5,1.5],[12,1],[28,1],[33,2.5]],2.5),Rd={id:"l6",name:"Rooftop Rally",par:3,circle:3,size:[40,22],tee:[5,16],cup:[33,15],tip:"Open edge = out!",ground:Wl,border:null,walls:[{kind:"wall",pts:bd(Wl,[39,18],[2,7])},{kind:"cushion",pts:[[12,1],[28,1]]}],tilt:[0,.03],zones:[{surface:"green",circle:{c:[33,15],r:3.5}}],props:[{type:"tree",at:[20,17.5],scale:1.1},{type:"flowers",at:[17.5,14]},{type:"flowers",at:[22.5,14]},{type:"flowerbox",at:[4,23]},{type:"flowerbox",at:[11,23.2]},{type:"flowerbox",at:[29,23.2]},{type:"flowerbox",at:[36,22.8]},{type:"flowerbox",at:[-1.5,12],rot:90},{type:"sign",at:[-1.8,18]}]},Pd=[[1,3.5],[3.5,1],[36,1],[43,8],[43,8.6],[35.6,16],[30.5,16],[30.5,20.5],[28,23],[8,23],[1,16]],Ld={id:"l7",name:"Tight Squeeze",par:4,circle:2.5,size:[44,24],tee:[5,4],cup:[19,19.5],tip:"Stuck on a cushion? Push it in!",ground:Pd,border:null,walls:[{kind:"hedge",pts:[[36,1],[3.5,1],[1,3.5],[1,16]]},{kind:"hedge",pts:[[8,23],[28,23],[30.5,20.5],[30.5,17.6]]},{kind:"cushion",pts:[[36,1],[43,8],[43,8.6],[35.6,16],[27,16]]},{kind:"cushion",pts:[[28.9,16],[30.5,17.6]]},{kind:"cushion",pts:[[1,16],[8,23]]},{kind:"cushion",pts:[[8.8,7.8],[1,15.6]]},{kind:"cushion",pts:[[1,6.2],[2.6,7.8],[36,7.8]]},{kind:"cushion",pts:[[8,16],[24.5,16]]}],zones:[{surface:"water",poly:[[.8,7.6],[8.8,7.6],[.8,15.6]]},{surface:"green",circle:{c:[19,19.5],r:2.6}}],props:[{type:"lilypad",at:[2.6,10],r:.6},{type:"reeds",at:[2,13]},{type:"flowerbox",at:[36,22.5]},{type:"flowerbox",at:[40.5,18.5],rot:90},{type:"bush",at:[37.5,19.5]},{type:"tree",at:[-1.5,24.5]},{type:"tree",at:[45.5,-1]},{type:"flowers",at:[20,-1.6]},{type:"sign",at:[-2,6]}]},Dd={id:"l8",name:"Island Hop",par:4,circle:3,size:[40,34],tee:[8.5,27],cup:[12,8.5],tip:"Hop island to island!",ground:Sn([[1,5],[4,1],[35,1.5],[39,5],[38.5,29],[35,33],[5,32.5],[1.5,29]],4),border:"wall",walls:[{kind:"cushion",pts:[[13.8,25],[22,25]]},{kind:"cushion",pts:[[13.8,29],[22.2,29]]},{kind:"cushion",pts:[[22.5,22.4],[22.5,13.6]]},{kind:"cushion",pts:[[26.5,21],[26.5,11.8]]}],arcs:[{kind:"cushion",c:[9,27],r:4.6,from:30,to:330},{kind:"cushion",c:[28.5,25],r:6.2,from:-75,to:150},{kind:"cushion",c:[13,9],r:4.9,from:110,to:250}],hills:[{c:[29,25],r:4.5,h:.25}],plateaus:[{circle:{c:[12,8.5],r:2.8},h:.25,ramp:1.2}],zones:[{surface:"water",rect:[0,0,40,34]},{surface:"rough",poly:Sn([[0,0],[5.5,0],[5.5,13],[3.5,19],[0,20]],2.5)},{surface:"rough",poly:Sn([[31.5,0],[40,0],[40,16],[35,15.5],[31.5,13]],2.5)},{surface:"rough",poly:Sn([[15.5,31.5],[21,31.5],[22,34],[14.5,34]],1.5)},{surface:"fairway",circle:{c:[9,27],r:5}},{surface:"fairway",circle:{c:[28.5,25],r:6.6}},{surface:"fairway",ellipse:{c:[18,9],rx:9.5,ry:5.5}},{surface:"fairway",rect:[13.6,25,22.6,29]},{surface:"fairway",rect:[22.5,11,26.5,22]},{surface:"green",circle:{c:[12,8.5],r:2.8}}],props:[{type:"bridge",at:[18,27],r:4.2},{type:"bridge",at:[24.5,17],r:4.4,rot:90},{type:"lilypad",at:[6,17],r:.9},{type:"lilypad",at:[33,13],r:.8},{type:"lilypad",at:[35.5,7],r:1},{type:"lilypad",at:[17,20],r:.7},{type:"lilypad",at:[5,6],r:.8},{type:"lilypad",at:[34,31],r:.7},{type:"reeds",at:[3.4,21]},{type:"reeds",at:[36,20.5]},{type:"reeds",at:[29,4]},{type:"reeds",at:[3.5,12]},{type:"fountain",at:[33.5,9]},{type:"tree",at:[-1.5,35]},{type:"tree",at:[41.5,35]},{type:"flowers",at:[20,35.5]}]},Ur=Math.atan2(Math.sqrt(29),14)*(180/Math.PI),Id=[...fc([44,16],15,180+Ur,540-Ur,7.5),...fc([16,16],15,Ur,360-Ur,7.5).slice(1,-1)],zd={id:"l9",name:"Figure Eight",par:5,circle:3.5,size:[60,32],tee:[4.5,16],cup:[55.5,16],tip:"Last hole: loop the 8!",ground:Sn(Id,2,4),border:"wall",posts:[{at:[30,16],r:1.8,kind:"bumper"}],arcs:[{kind:"cushion",c:[16,16],r:8.5,from:100,to:170},{kind:"cushion",c:[16,16],r:8.5,from:190,to:260},{kind:"cushion",c:[44,16],r:8.5,from:10,to:80},{kind:"cushion",c:[44,16],r:8.5,from:280,to:350}],plateaus:[{circle:{c:[55.5,16],r:2.6},h:.3,ramp:1.5}],zones:[{surface:"rough",circle:{c:[16,16],r:15.5}},{surface:"rough",circle:{c:[44,16],r:15.5}},{surface:"fairway",circle:{c:[16,16],r:13}},{surface:"fairway",circle:{c:[44,16],r:13}},{surface:"fairway",rect:[26,9.5,34,22.5]},{surface:"water",circle:{c:[16,16],r:8}},{surface:"water",circle:{c:[44,16],r:8}},{surface:"green",circle:{c:[55.5,16],r:3}}],props:[{type:"fountain",at:[16,16],scale:1.2},{type:"fountain",at:[44,16],scale:1.2},{type:"lilypad",at:[12,12],r:.9},{type:"lilypad",at:[20.5,19.5],r:.8},{type:"lilypad",at:[13,20],r:.7},{type:"lilypad",at:[47.5,12.5],r:.9},{type:"lilypad",at:[40,19.5],r:.8},{type:"lilypad",at:[48,20.5],r:.7},{type:"reeds",at:[9.5,19.5]},{type:"reeds",at:[22.5,12]},{type:"reeds",at:[37.5,12.5]},{type:"reeds",at:[50.5,19.5]},{type:"statue8",at:[58.5,28],scale:1.3},{type:"flowers",at:[56,30.5]},{type:"flowers",at:[60.5,25]},{type:"tree",at:[1.5,29.5]},{type:"tree",at:[1.5,2.5]},{type:"tree",at:[58.5,3]},{type:"bush",at:[30,27.5]},{type:"bush",at:[30,4.5]},{type:"flowers",at:[29,26.5]},{type:"flowers",at:[31,5.5]}]},Ud=[wd,Ed,Ad,Td,Cd,Rd,Ld,Dd,zd],Cr=Object.freeze([{id:1,name:"Greenside",holes:Sd},{id:2,name:"Lakeside",holes:Ud}]),mi=Object.freeze(Cr.flatMap((i,t)=>i.holes.map((e,n)=>Object.freeze({...e,round:i.id,number:t*9+n+1})))),Bt=Object.freeze({DT:1/240,R:.5,MAX_EVENTS:8,E_BALL:.95,SLOPE_K:21,GRAD_EPS:.1,V_SLEEP:.05,SLOW_V:.3,SLOW_MAX_T:2.5,MAX_SHOT_T:20,D_MAX:40,D_REF_DECEL:3,POWER_MIN:.03,PLACE_GAP:.05,CUE_MAX_TRAVEL:12,CUE_FADE_T:.5,GHOST_DECEL:8,CURVE_K:.3,CURVE_LEN:4,EIGHT_CURVE_K:.04,EIGHT_CURVE_LEN:15,HOLE_R:1.1,HOLE_VCAP:6,LIP_W:.5,LIP_A:4,HOLE_SETTLE_V:1,HOP_KEEP:.85}),Xl=Object.freeze({green:Object.freeze({decel:2}),fairway:Object.freeze({decel:3}),rough:Object.freeze({decel:6}),sand:Object.freeze({decel:14}),ice:Object.freeze({decel:.8})}),hc=Object.freeze({wall:Object.freeze({e:.6,keep:.95}),hedge:Object.freeze({e:.6,keep:.95}),cushion:Object.freeze({e:.85,keep:.97}),bumper:Object.freeze({e:1,keep:1}),post:Object.freeze({e:.6,keep:.95}),tree:Object.freeze({e:.6,keep:.95}),lollipop:Object.freeze({e:.6,keep:.95})}),Fi=1/0,na=i=>hc[i]||hc.wall;function Nd(i){const t=[],e=[],n=new Set,s=(l,u,d)=>{const h=l+","+u;n.has(h)||(n.add(h),e.push({x:l,z:u,e:d.e,keep:d.keep,kind:d===hc.cushion?"cushion":"wall",minx:l,maxx:l,minz:u,maxz:u}))};for(const l of i.segments||[]){const u=l.bx-l.ax,d=l.bz-l.az,h=u*u+d*d;if(h===0)continue;const f=Math.sqrt(h),g=na(l.kind);t.push({ax:l.ax,az:l.az,ex:u,ez:d,len2:h,nx:-d/f,nz:u/f,e:g.e,keep:g.keep,kind:l.kind||"wall",minx:Math.min(l.ax,l.bx),maxx:Math.max(l.ax,l.bx),minz:Math.min(l.az,l.bz),maxz:Math.max(l.az,l.bz)}),s(l.ax,l.az,g),s(l.bx,l.bz,g)}const r=(i.posts||[]).map(l=>{const u=na(l.kind||"post");return{x:l.x,z:l.z,r:l.r,e:u.e,keep:u.keep,kind:l.kind||"post",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),o=(i.arcs||[]).map(l=>{const u=na(l.kind);return s(l.x+l.sx*l.r,l.z+l.sz*l.r,u),s(l.x+l.ex*l.r,l.z+l.ez*l.r,u),{x:l.x,z:l.z,r:l.r,sx:l.sx,sz:l.sz,ex:l.ex,ez:l.ez,e:u.e,keep:u.keep,kind:l.kind||"wall",minx:l.x-l.r,maxx:l.x+l.r,minz:l.z-l.r,maxz:l.z+l.r}}),a=ql(0,i.eight.x,i.eight.z);a.mode="off";const c=ql(1,i.eight.x,i.eight.z);return{t:0,shotT:0,active:!1,balls:[a,c],segs:t,caps:e,posts:r,arcs:o,hole:{x:i.hole.x,z:i.hole.z},placeR:i.placeR||4,lieX:i.eight.x,lieZ:i.eight.z,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function ql(i,t,e){return{id:i,x:t,z:e,px:t,pz:e,vx:0,vz:0,mode:"rest",spin:0,travel:0,curveS:0,slowT:0,fadeT:0,overHole:!1,decel:0,slopeA2:0}}function Yl(i,t,e){const n=i.balls[1];n.x=n.px=t,n.z=n.pz=e,n.vx=0,n.vz=0,n.mode="rest",n.spin=0,n.curveS=0,n.slowT=0,n.overHole=!1,i.lieX=t,i.lieZ=e}function ih(i){const t=i<Bt.POWER_MIN?Bt.POWER_MIN:i>1?1:i;return Math.sqrt(2*Bt.D_REF_DECEL*Bt.D_MAX*t)/((1+Bt.E_BALL)/2)}function sh(i,t,e,n){const s=i.balls[0],r=i.balls[1],o=Math.sqrt(t.dx*t.dx+t.dz*t.dz),a=ih(n);s.x=s.px=t.x,s.z=s.pz=t.z,s.vx=t.dx/o*a,s.vz=t.dz/o*a,s.mode="cue",s.spin=e<-1?-1:e>1?1:e,s.travel=0,s.fadeT=0,i.lieX=r.x,i.lieZ=r.z,r.slowT=0,i.shotT=i.t,i.active=!0}const dc={x:0,z:0},Re={t:0,kind:0,i:0,j:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""},qn=0,rh=1,ul=2,ia=3;function oh(i,t=Bt.DT){const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];s.px=s.x,s.pz=s.z,s.mode==="cue"?Fd(s,t):s.mode==="roll"?Bd(i,s,t):s.mode==="ghost"&&Od(s,t)}Vd(i,t);for(let n=0;n<e.length;n++)Xd(i,e[n],t);if(i.t+=t,i.active){let n=!1;for(let s=0;s<e.length;s++){const r=e[s].mode;(r==="cue"||r==="roll"||r==="ghost")&&(n=!0)}if(n&&i.t-i.shotT>Bt.MAX_SHOT_T){for(let s=0;s<e.length;s++){const r=e[s];r.mode==="roll"?pc(i,r):(r.mode==="cue"||r.mode==="ghost")&&(r.mode="off")}n=!1}n||(i.active=!1,i.events.push({type:"shotEnd",t:i.t}))}}function yr(i){return Math.sqrt(i.vx*i.vx+i.vz*i.vz)}function fl(i,t,e){const n=1-.5*t*t,s=i.vx*n-i.vz*t,r=i.vx*t+i.vz*n,o=e/Math.sqrt(s*s+r*r);i.vx=s*o,i.vz=r*o}function Fd(i,t){const e=yr(i);if(i.spin!==0&&e>0){const n=1-i.travel/Bt.CURVE_LEN;n>0&&fl(i,Bt.CURVE_K*i.spin*n*e*t,e)}i.travel+=e*t}function Od(i,t){const e=yr(i),n=Bt.GHOST_DECEL*t;if(e<=n)i.vx=0,i.vz=0;else{const s=(e-n)/e;i.vx*=s,i.vz*=s}}function kd(i,t,e,n=dc){const s=Bt.GRAD_EPS,r=i.heightAt;return n.x=(r(t+s,e)-r(t-s,e))/(2*s),n.z=(r(t,e+s)-r(t,e-s))/(2*s),n}function Bd(i,t,e){const n=Xl[i.surfaceAt(t.x,t.z)]||Xl.fairway;kd(i,t.x,t.z);let s=-Bt.SLOPE_K*dc.x,r=-Bt.SLOPE_K*dc.z;const o=i.hole.x-t.x,a=i.hole.z-t.z,c=o*o+a*a,l=Bt.HOLE_R+Bt.LIP_W;if(c<l*l&&c>=Bt.HOLE_R*Bt.HOLE_R){const f=Math.sqrt(c);s+=Bt.LIP_A*o/f,r+=Bt.LIP_A*a/f}if(t.spin!==0){const f=yr(t),g=1-t.curveS/Bt.EIGHT_CURVE_LEN;g>0&&f>0?fl(t,Bt.EIGHT_CURVE_K*t.spin*g*f*e,f):g<=0&&(t.spin=0),t.curveS+=f*e}t.vx+=s*e,t.vz+=r*e;const u=yr(t),d=n.decel*e,h=s*s+r*r;if(u>d){const f=(u-d)/u;t.vx*=f,t.vz*=f}else if(h<=n.decel*n.decel)t.vx=0,t.vz=0;else{const f=Math.sqrt(h),g=(f-n.decel)*e/f;t.vx=s*g,t.vz=r*g}t.decel=n.decel,t.slopeA2=h}function bo(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=a*e+c*n;if(l>=0)return Fi;const u=a*a+c*c-o*o;if(u<=0)return 0;const d=e*e+n*n,h=l*l-d*u;return h<0?Fi:u/(-l+Math.sqrt(h))}function Hd(i,t,e,n,s,r,o){const a=i-s,c=t-r,l=e*e+n*n;if(l===0)return Fi;const u=a*e+c*n,d=a*a+c*c-o*o;if(d>=0)return u>0?0:Fi;const h=Math.sqrt(u*u-l*d);return u>0?-d/(u+h):(-u+h)/l}const Kl=1e-9;function Nr(i,t,e,n,s){return i.maxx<t||i.minx>e||i.maxz<n||i.minz>s}function ah(i,t,e,n,s,r,o,a){let c=o,l=qn;const u=(n<0?-n:n)*o+r+Kl,d=(s<0?-s:s)*o+r+Kl,h=t-u,f=t+u,g=e-d,x=e+d,m=i.segs;for(let _=0;_<m.length;_++){const E=m[_];if(Nr(E,h,f,g,x))continue;let w=E.nx,A=E.nz,b=(t-E.ax)*w+(e-E.az)*A;b<0&&(w=-w,A=-A,b=-b);const S=n*w+s*A;if(S>=0)continue;let M=(b-r)/-S;if(M<0&&(M=0),M>c||M===c&&l!==qn)continue;const T=t+n*M,k=e+s*M,V=((T-E.ax)*E.ex+(k-E.az)*E.ez)/E.len2;V<0||V>1||(c=M,l=ul,a.nx=w,a.nz=A,a.e=E.e,a.keep=E.keep,a.ck=E.kind)}const p=i.caps;for(let _=0;_<p.length;_++){const E=p[_];if(Nr(E,h,f,g,x))continue;const w=bo(t,e,n,s,E.x,E.z,r);(w<c||w===c&&l===qn)&&(c=w,l=ia,a.cx=E.x,a.cz=E.z,a.sign=1,a.e=E.e,a.keep=E.keep,a.ck=E.kind)}const v=i.posts;for(let _=0;_<v.length;_++){const E=v[_];if(Nr(E,h,f,g,x))continue;const w=bo(t,e,n,s,E.x,E.z,E.r+r);(w<c||w===c&&l===qn)&&(c=w,l=ia,a.cx=E.x,a.cz=E.z,a.sign=1,a.e=E.e,a.keep=E.keep,a.ck=E.kind)}const y=i.arcs;for(let _=0;_<y.length;_++){const E=y[_];if(Nr(E,h,f,g,x))continue;const w=t-E.x,A=e-E.z,b=w*w+A*A>E.r*E.r,S=b?bo(t,e,n,s,E.x,E.z,E.r+r):Hd(t,e,n,s,E.x,E.z,E.r-r);if(!(S<c||S===c&&l===qn))continue;const M=t+n*S-E.x,T=e+s*S-E.z;E.sx*T-E.sz*M<0||M*E.ez-T*E.ex<0||(c=S,l=ia,a.cx=E.x,a.cz=E.z,a.sign=b?1:-1,a.e=E.e,a.keep=E.keep,a.ck=E.kind)}return a.t=c,a.kind=l,l===qn?Fi:c}function jl(i){return i==="cue"||i==="roll"||i==="rest"}function sa(i){return i==="cue"||i==="roll"}const Xn={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function Gd(i,t){const e=i.balls;Re.kind=qn,Re.t=t;for(let n=0;n<e.length;n++){const s=e[n];if(!jl(s.mode))continue;for(let o=n+1;o<e.length;o++){const a=e[o];if(!jl(a.mode)||!sa(s.mode)&&!sa(a.mode))continue;const c=bo(s.x,s.z,s.vx-a.vx,s.vz-a.vz,a.x,a.z,2*Bt.R);(c<Re.t||c===Re.t&&Re.kind===qn)&&(Re.t=c,Re.kind=rh,Re.i=n,Re.j=o)}if(!sa(s.mode))continue;const r=ah(i,s.x,s.z,s.vx,s.vz,Bt.R,Re.t,Xn);(r<Re.t||r===Re.t&&Re.kind===qn&&r!==Fi)&&(Re.t=r,Re.kind=Xn.kind,Re.i=n,Re.nx=Xn.nx,Re.nz=Xn.nz,Re.cx=Xn.cx,Re.cz=Xn.cz,Re.sign=Xn.sign,Re.e=Xn.e,Re.keep=Xn.keep,Re.ck=Xn.ck)}return Re}function $l(i,t){if(t===0)return;const e=i.balls;for(let n=0;n<e.length;n++){const s=e[n];(s.mode==="cue"||s.mode==="roll"||s.mode==="ghost")&&(s.x+=s.vx*t,s.z+=s.vz*t)}}function Vd(i,t){let e=t;for(let n=0;n<Bt.MAX_EVENTS;n++){const s=Gd(i,e);if(s.kind===qn){$l(i,e);return}if($l(i,s.t),Wd(i,s),e-=s.t,e<=0)return}}function Wd(i,t){const e=i.balls;if(t.kind===rh){const l=e[t.i],u=e[t.j];let d=u.x-l.x,h=u.z-l.z;const f=Math.sqrt(d*d+h*h);d/=f,h/=f;const g=l.vx-u.vx,x=l.vz-u.vz,m=g*d+x*h;if(m<=0)return;const p=(1+Bt.E_BALL)/2*m;l.vx-=p*d,l.vz-=p*h,u.vx+=p*d,u.vz+=p*h;const v=l.mode==="cue"?t.i:u.mode==="cue"?t.j:-1;if(l.mode==="rest"&&(l.mode="roll"),u.mode==="rest"&&(u.mode="roll"),v>=0){const y=e[v],_=e[v===t.i?t.j:t.i],E=v===t.i?1:-1;i.events.push({type:"contact",t:i.t,gx:y.x,gz:y.z,nx:d*E,nz:h*E,v8x:_.vx,v8z:_.vz,cutCos:m/Math.sqrt(g*g+x*x),spin:y.spin}),_.spin=y.spin,_.curveS=0,_.slowT=0,y.mode="ghost",y.spin=0,y.fadeT=Bt.CUE_FADE_T}else i.events.push({type:"ballHit",t:i.t,speed:m});return}const n=e[t.i];let s,r;if(t.kind===ul)s=t.nx,r=t.nz;else{s=(n.x-t.cx)*t.sign,r=(n.z-t.cz)*t.sign;const l=Math.sqrt(s*s+r*r);s/=l,r/=l}const o=n.vx*s+n.vz*r;if(o>=0)return;const a=n.vx-o*s,c=n.vz-o*r;n.vx=a*t.keep-t.e*o*s,n.vz=c*t.keep-t.e*o*r,n.spin=0,i.events.push({type:"wall",t:i.t,id:n.id,x:n.x,z:n.z,nx:s,nz:r,speed:-o,kind:t.ck})}function pc(i,t){t.vx=0,t.vz=0,t.mode="rest",t.slowT=0,t.spin=0,i.events.push({type:"rest",t:i.t,id:t.id,x:t.x,z:t.z})}function Xd(i,t,e){if(t.mode==="ghost"){t.fadeT-=e,t.fadeT<=0&&(t.mode="off");return}if(t.mode!=="cue"&&t.mode!=="roll")return;const n=i.hazardAt(t.x,t.z);if(n){t.mode==="cue"?(t.mode="off",i.events.push({type:"whiff",t:i.t,reason:n,x:t.x,z:t.z})):(t.mode="sunk",t.vx=0,t.vz=0,t.spin=0,i.events.push({type:n,t:i.t,id:t.id,x:t.x,z:t.z,dropX:i.lieX,dropZ:i.lieZ}));return}if(t.mode==="cue"){t.travel>Bt.CUE_MAX_TRAVEL&&(t.mode="ghost",t.fadeT=Bt.CUE_FADE_T,i.events.push({type:"whiff",t:i.t,reason:"miss",x:t.x,z:t.z}));return}const s=t.x-i.hole.x,r=t.z-i.hole.z,o=s*s+r*r,a=yr(t);if(o<Bt.HOLE_R*Bt.HOLE_R){let c=a<Bt.HOLE_SETTLE_V;if(!c&&!t.overHole){const l=t.vx/a,u=t.vz/a,d=l*r-u*s,h=Bt.HOLE_R*Bt.HOLE_R-d*d;let g=((h>0?2*Math.sqrt(h):0)-Bt.R)/(2*Bt.HOLE_R-Bt.R);g=g<0?0:g>1?1:g,c=a<=Bt.HOLE_VCAP*g,c||(t.vx*=Bt.HOP_KEEP,t.vz*=Bt.HOP_KEEP,i.events.push({type:"hop",t:i.t,id:t.id,x:t.x,z:t.z,speed:a,vcap:Bt.HOLE_VCAP*g}))}if(t.overHole=!0,c){t.mode="holed",t.vx=0,t.vz=0,t.spin=0,i.events.push({type:"holed",t:i.t,id:t.id,speed:a});return}}else t.overHole=!1;if(a===0||a<Bt.V_SLEEP&&t.slopeA2<t.decel*t.decel){pc(i,t);return}a<Bt.SLOW_V?(t.slowT+=e,t.slowT>Bt.SLOW_MAX_T&&pc(i,t)):t.slowT=0}function ra(i,t,e){const n=i.balls[1],s=t-n.x,r=e-n.z,o=s*s+r*r,a=2*Bt.R+Bt.PLACE_GAP;return o>i.placeR*i.placeR||o<a*a?!1:Yd(i,t,e)&&!qd(i,n.x,n.z,t,e)}function qd(i,t,e,n,s){const r=n-t,o=s-e;for(const c of i.segs){const l=r*c.ez-o*c.ex;if(l===0)continue;const u=c.ax-t,d=c.az-e,h=(u*c.ez-d*c.ex)/l,f=(u*o-d*r)/l;if(h>0&&h<1&&f>=0&&f<=1)return!0}const a=r*r+o*o;for(const c of i.arcs){const l=t-c.x,u=e-c.z,d=l*r+u*o,h=l*l+u*u-c.r*c.r,f=d*d-a*h;if(f<0||a===0)continue;const g=Math.sqrt(f);for(const x of[(-d-g)/a,(-d+g)/a]){if(!(x>0&&x<1))continue;const m=l+r*x,p=u+o*x;if(c.sx*p-c.sz*m>=0&&m*c.ez-p*c.ex>=0)return!0}}return!1}function Yd(i,t,e){const n=Bt.R;if(i.hazardAt(t,e))return!1;for(const s of i.segs){let r=((t-s.ax)*s.ex+(e-s.az)*s.ez)/s.len2;r=r<0?0:r>1?1:r;const o=s.ax+s.ex*r-t,a=s.az+s.ez*r-e;if(o*o+a*a<n*n)return!1}for(const s of i.posts){const r=s.x-t,o=s.z-e,a=s.r+n;if(r*r+o*o<a*a)return!1}for(const s of i.arcs){const r=t-s.x,o=e-s.z,a=Math.sqrt(r*r+o*o);if(s.sx*o-s.sz*r>=0&&r*s.ez-o*s.ex>=0&&a>s.r-n&&a<s.r+n)return!1}for(const s of i.caps){const r=s.x-t,o=s.z-e;if(r*r+o*o<n*n)return!1}return!0}function Fr(i,t,e,n){return i.filter(s=>{const r=t<s.minx?s.minx:t>s.maxx?s.maxx:t,o=e<s.minz?s.minz:e>s.maxz?s.maxz:e,a=r-t,c=o-e;return a*a+c*c<=n*n})}function Kd(i,t,e){const n=Bt.CUE_MAX_TRAVEL+2*Bt.R+.5;return{t:i.t,shotT:i.shotT,active:!1,balls:i.balls.map(s=>({...s})),segs:Fr(i.segs,t,e,n),caps:Fr(i.caps,t,e,n),posts:Fr(i.posts,t,e,n),arcs:Fr(i.arcs,t,e,n),hole:i.hole,placeR:i.placeR,lieX:i.lieX,lieZ:i.lieZ,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt,events:[]}}function jd(i,t,e,n,s=3){const r=Kd(i,t.x,t.z);sh(r,t,e,n);const o=r.balls[0],a=r.balls[1],c=[t.x,t.z],l=Math.ceil((Bt.CUE_MAX_TRAVEL+1)/(ih(n)*Bt.DT))+4;for(let u=1;u<=l;u++){oh(r);for(let d=0;d<r.events.length;d++){const h=r.events[d];if(h.type==="wall"&&h.id===0)c.push(h.x,h.z);else if(h.type==="contact"){c.push(h.gx,h.gz);const f=Math.sqrt(h.v8x*h.v8x+h.v8z*h.v8z);return{hit:!0,points:c,ghost:{x:h.gx,z:h.gz},normal:{x:h.nx,z:h.nz},eightDir:{x:h.v8x/f,z:h.v8z/f},eightSpeed:f,cutCos:h.cutCos,spin:h.spin,eightStart:{x:a.x,z:a.z},reason:null}}else if(h.type==="whiff")return c.push(h.x,h.z),{hit:!1,points:c,reason:h.reason}}r.events.length=0,u%s===0&&c.push(o.x,o.z)}return{hit:!1,points:c,reason:"miss"}}const Cn={t:0,kind:0,nx:0,nz:0,cx:0,cz:0,sign:1,e:0,keep:1,ck:""};function $d(i,t,e,n,s,r,o=14,a=3){const l=[t,e];let u=Math.sqrt(n*n+s*s);n/=u,s/=u;let d=0,h=null,f=null,g=!1,x=o,m=r;const p={vx:n,vz:s};for(let v=0;v<400&&d<x;v++){const y=x-d<.25?x-d:.25;if(m!==0){const b=1-d/Bt.EIGHT_CURVE_LEN;b>0&&fl(p,Bt.EIGHT_CURVE_K*m*b*y,1)}const _=ah(i,t,e,p.vx,p.vz,Bt.R,y,Cn);if(_!==Fi&&!h){t+=p.vx*_,e+=p.vz*_,d+=_,l.push(t,e);let b,S;Cn.kind===ul?(b=Cn.nx,S=Cn.nz):(b=(t-Cn.cx)*Cn.sign,S=(e-Cn.cz)*Cn.sign,u=Math.sqrt(b*b+S*S),b/=u,S/=u);const M=p.vx*b+p.vz*S,T=(p.vx-M*b)*Cn.keep-Cn.e*M*b,k=(p.vz-M*S)*Cn.keep-Cn.e*M*S;u=Math.sqrt(T*T+k*k),p.vx=T/u,p.vz=k/u,h={x:t,z:e},m=0,x=d+a;continue}if(_!==Fi){t+=p.vx*_,e+=p.vz*_,l.push(t,e);break}t+=p.vx*y,e+=p.vz*y,d+=y,l.push(t,e);const E=i.hazardAt(t,e);if(E){f=E;break}const w=t-i.hole.x,A=e-i.hole.z;w*w+A*A<Bt.HOLE_R*Bt.HOLE_R&&(g=!0)}return{points:l,hazard:f,bounce:h,cup:g}}function Zd(i,t,e,n=240){e.acc+=t>.25?.25:t;let s=0;for(;e.acc>=Bt.DT&&s<n;)oh(i),e.acc-=Bt.DT,s++;return s>=n&&(e.acc=0),e.acc/Bt.DT}function Jd(i,t,e,n,s=0,r=0){return(o,a)=>{let c=(o-s)/n,l=(a-r)/n;c=c<0?0:c>t-1.000001?t-1.000001:c,l=l<0?0:l>e-1.000001?e-1.000001:l;const u=c|0,d=l|0,h=c-u,f=l-d,g=d*t+u,x=i[g]+(i[g+1]-i[g])*h,m=i[g+t]+(i[g+t+1]-i[g+t])*h;return x+(m-x)*f}}const Mi=.25,Or=4,Qd=Object.freeze({oob:0,fairway:1,green:2,rough:3,sand:4,water:5,ice:6}),tp=Object.freeze(["oob","fairway","green","rough","sand","water","ice"]),sr=i=>({x:i[0],z:-i[1]});function mc(i,t,e){let n=!1;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[s][0],a=i[s][1],c=i[r][0],l=i[r][1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function ep(i,t,e){let n=1/0;for(let s=0,r=i.length-1;s<i.length;r=s++){const o=i[r][0],a=i[r][1],c=i[s][0]-o,l=i[s][1]-a,u=c*c+l*l||1e-12;let d=((t-o)*c+(e-a)*l)/u;d=d<0?0:d>1?1:d;const h=o+c*d-t,f=a+l*d-e,g=Math.sqrt(h*h+f*f);g<n&&(n=g)}return n}const ch=i=>[[i[0],i[1]],[i[2],i[1]],[i[2],i[3]],[i[0],i[3]]];function gc(i){if(i.poly)return i.poly;if(i.rect)return ch(i.rect);const t=i.circle?{c:i.circle.c,rx:i.circle.r,ry:i.circle.r,rot:0}:i.ellipse;if(!t)throw new Error("zone without a shape");const e=48,n=Math.cos((t.rot||0)*Math.PI/180),s=Math.sin((t.rot||0)*Math.PI/180),r=[];for(let o=0;o<e;o++){const a=o/e*Math.PI*2,c=Math.cos(a)*t.rx,l=Math.sin(a)*t.ry;r.push([t.c[0]+c*n-l*s,t.c[1]+c*s+l*n])}return r}const oa=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function np(i){const t=i.steps||[],e=i.hills||[],n=(i.plateaus||[]).map(r=>({pts:gc(r),h:r.h,ramp:r.ramp??2,linear:!!r.linear})),s=i.tilt||[0,0];return(r,o)=>{let a=s[0]*r+s[1]*o;for(const c of t){const l=c.axis==="y"?o:r;if(c.band){const d=c.axis==="y"?r:o;if(d<c.band[0]||d>c.band[1])continue}const u=(l-c.from)/(c.to-c.from);a+=c.h*(c.smooth?oa(u):u<=0?0:u>=1?1:u)}for(const c of e){const l=r-c.c[0],u=o-c.c[1],d=Math.sqrt(l*l+u*u),h=c.flat||0;d<c.r&&(a+=c.h*oa(1-(d-h)/(c.r-h)))}for(const c of n)if(mc(c.pts,r,o))a+=c.h;else{const l=ep(c.pts,r,o);l<c.ramp&&(a+=c.h*(c.linear?1-l/c.ramp:oa(1-l/c.ramp)))}return a}}function lh(i){const[t,e]=i.size,n=i.ground||ch([0,0,t,e]),s=i.border===void 0?"wall":i.border,r=[];s&&r.push({kind:s,pts:n,closed:!0,border:!0});for(const b of i.walls||[])r.push({kind:b.kind||"wall",pts:b.pts,closed:!!b.closed,h:b.h});const o=[],a=[];for(const b of i.arcs||[]){let S=b.from;const M=b.to;if(!(M>S))throw new Error(i.id+": arc needs to > from");for(a.push({kind:b.kind||"wall",c:b.c,r:b.r,from:S,to:M});S<M-1e-9;){const T=Math.min(M,S+180),k=T*Math.PI/180,V=S*Math.PI/180;o.push({kind:b.kind||"wall",x:b.c[0],z:-b.c[1],r:b.r,sx:Math.cos(k),sz:-Math.sin(k),ex:Math.cos(V),ez:-Math.sin(V)}),S=T}}const c=[];for(const b of r){const S=b.pts.length,M=b.closed?S:S-1;for(let T=0;T<M;T++){const k=b.pts[T],V=b.pts[(T+1)%S];c.push({ax:k[0],az:-k[1],bx:V[0],bz:-V[1],kind:b.kind})}}const l=(i.posts||[]).map(b=>({x:b.at[0],z:-b.at[1],r:b.r,kind:b.kind||"post"})),u=-Or,d=-(e+Or),h=Math.round((t+2*Or)/Mi)+1,f=Math.round((e+2*Or)/Mi)+1,g=np(i),x=new Float64Array(h*f),m=new Uint8Array(h*f),p=(i.zones||[]).map(b=>{const S=Qd[b.surface];if(S===void 0||S===0)throw new Error(i.id+": unknown surface "+b.surface);return{code:S,pts:gc(b)}});for(let b=0;b<f;b++){const M=-(d+b*Mi);for(let T=0;T<h;T++){const k=u+T*Mi,V=b*h+T;x[V]=g(k,M);let $=mc(n,k,M)?1:0;if($)for(const at of p)mc(at.pts,k,M)&&($=at.code);m[V]=$}}const v=Jd(x,h,f,Mi,u,d),y=(b,S)=>{let M=Math.round((b-u)/Mi),T=Math.round((S-d)/Mi);return M=M<0?0:M>=h?h-1:M,T=T<0?0:T>=f?f-1:T,m[T*h+M]},_=(b,S)=>tp[y(b,S)],E=(b,S)=>{const M=y(b,S);return M===0?"oob":M===5?"water":null},w=sr(i.tee),A=sr(i.cup);return{hole:i,id:i.id,name:i.name,par:i.par,round:i.round,spin:i.round===2,tip:i.tip||null,placeR:i.circle,eight:w,tee:w,cup:A,segments:c,posts:l,arcs:o,surfaceAt:_,heightAt:v,hazardAt:E,grid:{cell:Mi,cols:h,rows:f,x0:u,z0:d,height:x,surface:m},bounds:{minx:0,maxx:t,minz:-e,maxz:0},ground:n.map(sr),walls:r.map(b=>({kind:b.kind,closed:b.closed,border:!!b.border,h:b.h,pts:b.pts.map(sr)})),arcsRender:a.map(b=>({kind:b.kind,x:b.c[0],z:-b.c[1],r:b.r,from:b.from,to:b.to})),props:(i.props||[]).map(b=>({...b,x:b.at[0],z:-b.at[1]})),zones:(i.zones||[]).map(b=>({surface:b.surface,pts:gc(b).map(sr)})),camera:i.camera||null}}function ip(i){return Nd({eight:i.eight,hole:i.cup,placeR:i.placeR,segments:i.segments,posts:i.posts,arcs:i.arcs,surfaceAt:i.surfaceAt,heightAt:i.heightAt,hazardAt:i.hazardAt})}const sp=4,rp=5;function op(i){return{par:i,strokes:0,penalties:0,done:!1,holed:!1,picked:!1}}function ap(i,t){if(i.done)return{penalty:0,done:!0,picked:i.picked};i.strokes+=1;let e=0;return t.holed?(i.done=!0,i.holed=!0,{penalty:e,done:!0,picked:!1}):(t.hazard&&(e=1,i.penalties+=1,i.strokes+=1),i.strokes>=i.par+sp&&(i.done=!0,i.picked=!0),{penalty:e,done:i.done,picked:i.picked})}function cp(i){return i.picked?i.par+rp:i.strokes}function lp(i,t,e=!1){return e?0:i===1||i<=t-1?3:i<=t?2:1}function xc(i,t,e=!1){if(e)return{key:"picked",label:"Picked up"};if(i===1)return{key:"ace",label:"Hole-in-one!"};const n=i-t;return n<=-3?{key:"albatross",label:"Albatross!"}:n===-2?{key:"eagle",label:"Eagle!"}:n===-1?{key:"birdie",label:"Birdie!"}:n===0?{key:"par",label:"Par"}:n===1?{key:"bogey",label:"Bogey"}:n===2?{key:"double",label:"Double bogey"}:{key:"over",label:"+"+n}}function vc(i,t){const e=i-t;return e===0?"E":e>0?"+"+e:String(e)}const up=.9,fp=1.2,hp=14,dp=3;function pp({events:i}){const t=(f,g)=>i&&i.emit(f,g),e={acc:0},n={state:"idle",level:null,index:-1,world:null,score:null,intent:{x:0,z:0,offset:0,spin:0,power:.5,dx:1,dz:0},lastPower:.5,speed:1,shotContact:!1,shotHazard:null,shotHoled:!1,dropAt:null,timer:0,_guideKey:"",_guide:null},s=[r(),r()];function r(){return{x:0,y:0,z:0,visible:!1,alpha:1,mode:"off",vx:0,vz:0}}function o(){const f=n.intent,g=n.world.balls[1];let x=g.x-f.x,m=g.z-f.z;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const v=Math.cos(f.offset),y=Math.sin(f.offset);n.intent={...f,dx:x*v-m*y,dz:x*y+m*v},n._guideKey=""}function a(){const f=n.world,g=f.balls[1];let x=f.hole.x-g.x,m=f.hole.z-g.z;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const v=Math.min(.6*f.placeR,2.5),y=c(g.x-x*v,g.z-m*v)||c(g.x-x*1.6,g.z-m*1.6)||{x:g.x-x*1.2,z:g.z-m*1.2};n.intent={...n.intent,x:y.x,z:y.z,offset:0,spin:0,power:n.lastPower},o()}function c(f,g){const x=n.world;if(ra(x,f,g))return{x:f,z:g};const m=x.balls[1];let p=f-m.x,v=g-m.z,y=Math.sqrt(p*p+v*v);const _=2*Bt.R+Bt.PLACE_GAP+.01,E=x.placeR-.01;if(y>E&&(p*=E/y,v*=E/y,y=E),y<_){const S=y>1e-6?_/y:0;p=y>1e-6?p*S:-_,v=y>1e-6?v*S:0,y=_}if(ra(x,m.x+p,m.z+v))return{x:m.x+p,z:m.z+v};const w=Math.atan2(v,p);let A=null,b=1/0;for(let S=_;S<=E+1e-9;S+=.25)for(let M=0;M<72;M++){const T=w+M*Math.PI/36,k=m.x+Math.cos(T)*S,V=m.z+Math.sin(T)*S;if(!ra(x,k,V))continue;const $=(k-f)*(k-f)+(V-g)*(V-g);$<b&&(b=$,A={x:k,z:V})}return A}n.load=(f,g)=>{n.level=f,n.index=g,n.world=ip(f),n.score=op(f.par),n.lastPower=.5,n.speed=1,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,n.timer=0,e.acc=0,n.intent={x:0,z:0,offset:0,spin:0,power:.5,dx:1,dz:0},a(),n.state="ready",t("hole:start",{level:f,index:g}),t("shot:ready",{strokes:0,par:f.par,first:!0})},n.retry=()=>n.load(n.level,n.index),n.setPlacement=(f,g)=>{if(n.state!=="ready")return!1;const x=c(f,g);return x?(n.intent={...n.intent,x:x.x,z:x.z},o(),!0):!1},n.setAimToward=(f,g)=>{if(n.state!=="ready")return;const x=n.intent,m=n.world.balls[1],p=m.x-x.x,v=m.z-x.z,y=f-x.x,_=g-x.z;y*y+_*_<1e-6||(n.intent={...x,offset:Math.atan2(p*_-v*y,p*y+v*_)},o())},n.rotateAim=f=>{if(n.state!=="ready")return;let g=n.intent.offset+f;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;n.intent={...n.intent,offset:g},o()},n.setSpin=f=>{const g=n.level&&n.level.spin?f<-1?-1:f>1?1:f:0;g!==n.intent.spin&&(n.intent={...n.intent,spin:g},n._guideKey="")},n.setPower=f=>{const g=f<0?0:f>1?1:f;g!==n.intent.power&&(n.intent={...n.intent,power:g},n._guideKey="")},n.guide=()=>{if(!n.world||n.state!=="ready")return null;const f=n.intent,g=f.power<Bt.POWER_MIN?Bt.POWER_MIN:f.power,x=f.x+","+f.z+","+f.dx+","+f.dz+","+f.spin+","+g;if(x===n._guideKey)return n._guide;const m=jd(n.world,f,f.spin,g);let p=null;return m.hit&&(p=$d(n.world,m.eightStart.x,m.eightStart.z,m.eightDir.x,m.eightDir.z,m.spin,hp,dp)),n._guide={cue:m,eight:p,warn:!m.hit||!!(p&&p.hazard)},n._guideKey=x,n._guide},n.fire=()=>{if(n.state!=="ready")return!1;const f=n.intent,g=f.power<Bt.POWER_MIN?Bt.POWER_MIN:f.power;return n.lastPower=g,n.shotContact=!1,n.shotHazard=null,n.shotHoled=!1,n.dropAt=null,e.acc=0,sh(n.world,f,f.spin,g),n.state="rolling",t("shot:fire",{power:g,spin:f.spin,strokes:n.score.strokes+1}),!0},n.setSpeed=f=>{n.speed=f>1?f:1};function l(){const f=n.world.events;for(let g=0;g<f.length;g++){const x=f[g];switch(x.type){case"contact":n.shotContact=!0,t("ball:contact",{x:x.gx,z:x.gz,nx:x.nx,nz:x.nz,speed:Math.sqrt(x.v8x*x.v8x+x.v8z*x.v8z),cutCos:x.cutCos,spin:x.spin});break;case"wall":t("ball:wall",{id:x.id,x:x.x,z:x.z,nx:x.nx,nz:x.nz,speed:x.speed,kind:x.kind});break;case"hop":t("ball:hop",{x:x.x,z:x.z,speed:x.speed});break;case"holed":n.shotHoled=!0,t("ball:holed",{speed:x.speed});break;case"water":case"oob":n.shotHazard=x.type,n.dropAt={x:x.dropX,z:x.dropZ},t("ball:hazard",{kind:x.type,x:x.x,z:x.z});break;case"whiff":t("ball:whiff",{reason:x.reason,x:x.x,z:x.z});break;case"rest":t("ball:rest",{id:x.id,x:x.x,z:x.z});break;case"ballHit":t("ball:ballhit",{speed:x.speed});break;case"shotEnd":u();break}}f.length=0}function u(){const f=ap(n.score,{holed:n.shotHoled,hazard:n.shotHazard});t("shot:end",{strokes:n.score.strokes,par:n.score.par,penalty:f.penalty,whiff:!n.shotContact,outcome:n.shotHoled?"holed":n.shotHazard||"rest",picked:f.picked}),n.state="resolving",n.timer=n.shotHoled?fp:n.shotHazard?up:f.done?.6:0}function d(){const f=n.score;if(f.done){n.state="done";const g=cp(f);t("hole:done",{index:n.index,level:n.level,strokes:g,par:f.par,picked:f.picked,penalties:f.penalties,stars:lp(g,f.par,f.picked),term:xc(g,f.par,f.picked)});return}if(n.dropAt)Yl(n.world,n.dropAt.x,n.dropAt.z),t("ball:drop",{x:n.dropAt.x,z:n.dropAt.z}),n.dropAt=null;else{const g=n.world.balls[1];Yl(n.world,g.x,g.z)}n.world.balls[0].mode="off",a(),n.state="ready",t("shot:ready",{strokes:f.strokes,par:f.par,first:!1})}let h=0;return n.update=f=>{n.state==="rolling"?(h=Zd(n.world,f*n.speed,e,240*n.speed),l()):n.state==="resolving"&&(n.timer-=f,n.timer<=0&&d())},n.balls=()=>{const f=n.world;if(!f)return s;const g=n.state==="rolling";for(let x=0;x<2;x++){const m=f.balls[x],p=s[x],v=g?h:1;p.x=m.px+(m.x-m.px)*v,p.z=m.pz+(m.z-m.pz)*v,p.mode=m.mode,p.vx=m.vx,p.vz=m.vz,p.visible=m.mode!=="off"&&m.mode!=="sunk"&&m.mode!=="holed",p.alpha=m.mode==="ghost"?Math.max(0,m.fadeT/Bt.CUE_FADE_T):1,p.y=f.heightAt(p.x,p.z)+Bt.R}if(n.state==="ready"){const x=s[0];x.x=n.intent.x,x.z=n.intent.z,x.mode="placed",x.visible=!0,x.alpha=1,x.vx=0,x.vz=0,x.y=f.heightAt(x.x,x.z)+Bt.R}if(s[1].mode==="holed"||n.shotHoled){const x=s[1];x.visible=!0,x.x=f.hole.x,x.z=f.hole.z,x.y=f.heightAt(x.x,x.z)-Bt.R*.9}return s},n}const Zl="eightballgolf.progress",No=Object.freeze([{id:"classic",name:"Classic",need:0},{id:"tennis",name:"Tennis",need:9},{id:"beach",name:"Beach ball",need:18},{id:"planet",name:"Planet",need:27},{id:"donut",name:"Donut",need:36},{id:"snow",name:"Snowball",need:45},{id:"gold",name:"Gold",need:54}]),aa=(i,t,e)=>Number.isInteger(i)&&i>=t&&i<=e?i:null;function mp(i,t){const e=i&&typeof i=="object"?i:{},n=Array.isArray(e.holes)?e.holes:[],s=[];for(let c=0;c<t;c++){const l=n[c]&&typeof n[c]=="object"?n[c]:{},u=aa(l.best,1,99);s.push({best:u,stars:u===null?0:aa(l.stars,0,3)??0})}const r=Array.isArray(e.seenTips)?[...new Set(e.seenTips.filter(c=>typeof c=="string"&&c.length<40))].slice(0,200):[],o=No.some(c=>c.id===e.skin)?e.skin:"classic",a=aa(e.last,0,Math.max(0,t-1));return{v:1,holes:s,skin:o,seenTips:r,muted:e.muted===!0,last:a}}async function gp(i,t={}){const e=t.rounds||Cr,n=e.flatMap(f=>f.holes.map(g=>g.par)),s=n.length,r=new Map;let o=0;for(const f of e)r.set(f.id,o),o+=f.holes.length;let a=null;try{const f=i&&i.load?await i.load(Zl):null;typeof f=="string"&&f.length&&(a=JSON.parse(f))}catch{a=null}const c=mp(a,s);xp(c.skin)>kr(c)&&(c.skin="classic");function l(){if(!(!i||!i.save))try{const f=i.save(Zl,JSON.stringify(c));f&&typeof f.catch=="function"&&f.catch(()=>{})}catch{}}const u=f=>Number.isInteger(f)&&f>=0&&f<s,d=()=>{let f=-1;for(let g=0;g<s;g++)c.holes[g].best!==null&&(f=g);return f},h={data:c,get skin(){return c.skin},get muted(){return c.muted},holeCount:s,isUnlocked(f){return u(f)&&f<=d()+1},best(f){return u(f)?c.holes[f].best:null},stars(f){return u(f)?c.holes[f].stars:0},totalStars(){return kr(c)},roundStars(f){const g=r.get(f),x=e.find(p=>p.id===f);if(g===void 0||!x)return 0;let m=0;for(let p=0;p<x.holes.length;p++)m+=c.holes[g+p].stars;return m},roundTotal(f){const g=r.get(f),x=e.find(y=>y.id===f);if(g===void 0||!x)return{total:0,par:0,complete:!1};let m=0,p=0,v=!0;for(let y=0;y<x.holes.length;y++){p+=n[g+y];const _=c.holes[g+y].best;_===null?v=!1:m+=_}return{total:m,par:p,complete:v}},record(f,g,x){if(!u(f))return{newBest:!1,newStars:!1,firstTime:!1};const m=c.holes[f],p=Math.max(1,Math.round(Number(g)||1)),v=Math.max(0,Math.min(3,Math.round(Number(x)||0))),y=m.best===null,_=m.best===null||p<m.best,E=v>m.stars;return _&&(m.best=p),E&&(m.stars=v),c.last=f,l(),{newBest:_,newStars:E,firstTime:y}},nextIndex(){for(let f=0;f<s;f++)if(c.holes[f].best===null)return h.isUnlocked(f)?f:0;for(let f=0;f<s;f++)if(c.holes[f].stars<3)return f;return c.last??0},skins(){const f=kr(c);return No.map(g=>({...g,unlocked:f>=g.need}))},setSkin(f){const g=No.find(x=>x.id===f);return!g||g.need>kr(c)||c.skin===f?!1:(c.skin=f,l(),!0)},seenTip(f){return c.seenTips.includes(String(f))},markTip(f){f==null||h.seenTip(f)||(c.seenTips.push(String(f)),l())},setMuted(f){c.muted!==!!f&&(c.muted=!!f,l())},isFresh(){return d()<0}};return h}function kr(i){let t=0;for(const e of i.holes)t+=e.stars;return t}function xp(i){const t=No.find(e=>e.id===i);return t?t.need:1/0}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="170",vp=0,Jl=1,_p=2,dl=1,Mp=2,ri=3,Oi=0,pn=1,Mn=2,zi=0,Os=1,Ql=2,tu=3,eu=4,uh=5,Ii=100,yp=101,Sp=102,bp=103,wp=104,Ep=200,_c=201,Ap=202,Tp=203,Mc=204,Sr=205,Cp=206,Rp=207,Pp=208,Lp=209,Dp=210,Ip=211,zp=212,Up=213,Np=214,yc=0,Sc=1,bc=2,Ws=3,wc=4,Ec=5,Ac=6,Tc=7,Xo=0,Fp=1,Op=2,Ui=0,kp=1,Bp=2,Hp=3,Gp=4,Vp=5,Wp=6,fh=7,hh=300,Xs=301,qs=302,Cc=303,Rc=304,qo=306,Fo=1e3,fi=1001,Pc=1002,wn=1003,Xp=1004,Br=1005,bn=1006,ca=1007,ss=1008,Zn=1009,dh=1010,ph=1011,br=1012,pl=1013,as=1014,jn=1015,Rr=1016,ml=1017,gl=1018,Ys=1020,mh=35902,gh=1021,xh=1022,In=1023,vh=1024,_h=1025,ks=1026,Ks=1027,xl=1028,vl=1029,Mh=1030,_l=1031,Ml=1033,wo=33776,Eo=33777,Ao=33778,To=33779,Lc=35840,Dc=35841,Ic=35842,zc=35843,Uc=36196,Nc=37492,Fc=37496,Oc=37808,kc=37809,Bc=37810,Hc=37811,Gc=37812,Vc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,Kc=37818,jc=37819,$c=37820,Zc=37821,Co=36492,Jc=36494,Qc=36495,yh=36283,tl=36284,el=36285,nl=36286,qp=3200,Yp=3201,Yo=0,Kp=1,ci="",Qe="srgb",Js="srgb-linear",Ko="linear",be="srgb",ds=7680,nu=519,jp=512,$p=513,Zp=514,Sh=515,Jp=516,Qp=517,t0=518,e0=519,iu=35044,Ni=35048,su="300 es",hi=2e3,Oo=2001;class Qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ru=1234567;const gr=Math.PI/180,wr=180/Math.PI;function tr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function $e(i,t,e){return Math.max(t,Math.min(e,i))}function yl(i,t){return(i%t+t)%t}function n0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function i0(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function s0(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function r0(i,t=1){return t-Math.abs(yl(i,t*2)-t)}function o0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function a0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function c0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function l0(i,t){return i+Math.random()*(t-i)}function u0(i){return i*(.5-Math.random())}function f0(i){i!==void 0&&(ru=i);let t=ru+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function h0(i){return i*gr}function d0(i){return i*wr}function p0(i){return(i&i-1)===0&&i!==0}function m0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function g0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function x0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),h=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Er={DEG2RAD:gr,RAD2DEG:wr,generateUUID:tr,clamp:$e,euclideanModulo:yl,mapLinear:n0,inverseLerp:i0,lerp:xr,damp:s0,pingpong:r0,smoothstep:o0,smootherstep:a0,randInt:c0,randFloat:l0,randFloatSpread:u0,seededRandom:f0,degToRad:h0,radToDeg:d0,isPowerOfTwo:p0,ceilPowerOfTwo:m0,floorPowerOfTwo:g0,setQuaternionFromProperEuler:x0,normalize:cn,denormalize:Is};class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,r,o,a,c,l){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],E=s[2],w=s[5],A=s[8];return r[0]=o*x+a*v+c*E,r[3]=o*m+a*y+c*w,r[6]=o*p+a*_+c*A,r[1]=l*x+u*v+d*E,r[4]=l*m+u*y+d*w,r[7]=l*p+u*_+d*A,r[2]=h*x+f*v+g*E,r[5]=h*m+f*y+g*w,r[8]=h*p+f*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const la=new ue;function bh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ko(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function v0(){const i=ko("canvas");return i.style.display="block",i}const ou={};function dr(i){i in ou||(ou[i]=!0,console.warn(i))}function _0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function M0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function y0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xe={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Ko:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const au=[.64,.33,.3,.6,.15,.06],cu=[.2126,.7152,.0722],lu=[.3127,.329],uu=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[Js]:{primaries:au,whitePoint:lu,transfer:Ko,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:cu,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:au,whitePoint:lu,transfer:be,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:cu,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}});let ps;class S0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ps===void 0&&(ps=ko("canvas")),ps.width=t.width,ps.height=t.height;const n=ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ko("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let b0=0;class wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ua(s[o].image)):r.push(ua(s[o]))}else r=ua(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?S0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w0=0;class an extends Qs{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=fi,s=fi,r=bn,o=ss,a=In,c=Zn,l=an.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=tr(),this.name="",this.source=new wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fo:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fo:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=hh;an.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,n=0,s=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,_=(f+1)/2,E=(p+1)/2,w=(u+h)/4,A=(d+x)/4,b=(g+m)/4;return y>_&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=A/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(h-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E0 extends Qs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends E0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eh extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class A0 extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==h||l!==f||u!==g){let m=1-a;const p=c*h+l*f+u*g+d*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,p*v);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const _=a*v;if(c=c*m+h*_,l=l*m+f*_,u=u*m+g*_,d=d*m+x*_,m===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=E,l*=E,u*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,n=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new J,hu=new us;class Hi{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Gr.subVectors(this.max,rr),ms.subVectors(t.a,rr),gs.subVectors(t.b,rr),xs.subVectors(t.c,rr),yi.subVectors(gs,ms),Si.subVectors(xs,gs),Vi.subVectors(ms,xs);let e=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-Vi.z,Vi.y,yi.z,0,-yi.x,Si.z,0,-Si.x,Vi.z,0,-Vi.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-Vi.y,Vi.x,0];return!ha(e,ms,gs,xs,Gr)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,ms,gs,xs,Gr))?!1:(Vr.crossVectors(yi,Si),e=[Vr.x,Vr.y,Vr.z],ha(e,ms,gs,xs,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new J,new J,new J,new J,new J,new J,new J,new J],zn=new J,Hr=new Hi,ms=new J,gs=new J,xs=new J,yi=new J,Si=new J,Vi=new J,rr=new J,Gr=new J,Vr=new J,Wi=new J;function ha(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Wi.fromArray(i,r);const a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),c=t.dot(Wi),l=e.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const T0=new Hi,or=new J,da=new J;class Gi{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):T0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(da)),this.expandByPoint(or.copy(t.center).sub(da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new J,pa=new J,Wr=new J,bi=new J,ma=new J,Xr=new J,ga=new J;class C0{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pa.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(pa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),a=bi.dot(this.direction),c=-bi.dot(Wr),l=bi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pa).addScaledVector(Wr,h),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){ma.subVectors(e,t),Xr.subVectors(n,t),ga.crossVectors(ma,Xr);let o=this.direction.dot(ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,t);const c=a*this.direction.dot(Xr.crossVectors(bi,Xr));if(c<0)return null;const l=a*this.direction.dot(ma.cross(bi));if(l<0||c+l>o)return null;const u=-a*bi.dot(ga);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,d,h,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-x*l,e[9]=-a*c,e[2]=x-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=x+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,x=l*d;e[0]=h-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,g=a*u,x=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+x,e[1]=c*d,e[5]=x*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-x*d}else if(t.order==="XZY"){const h=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+x,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=x*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,P0)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),wi.crossVectors(n,gn),wi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),wi.crossVectors(n,gn)),wi.normalize(),qr.crossVectors(gn,wi),s[0]=wi.x,s[4]=qr.x,s[8]=gn.x,s[1]=wi.y,s[5]=qr.y,s[9]=gn.y,s[2]=wi.z,s[6]=qr.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],E=n[15],w=s[0],A=s[4],b=s[8],S=s[12],M=s[1],T=s[5],k=s[9],V=s[13],$=s[2],at=s[6],rt=s[10],ft=s[14],nt=s[3],Y=s[7],U=s[11],q=s[15];return r[0]=o*w+a*M+c*$+l*nt,r[4]=o*A+a*T+c*at+l*Y,r[8]=o*b+a*k+c*rt+l*U,r[12]=o*S+a*V+c*ft+l*q,r[1]=u*w+d*M+h*$+f*nt,r[5]=u*A+d*T+h*at+f*Y,r[9]=u*b+d*k+h*rt+f*U,r[13]=u*S+d*V+h*ft+f*q,r[2]=g*w+x*M+m*$+p*nt,r[6]=g*A+x*T+m*at+p*Y,r[10]=g*b+x*k+m*rt+p*U,r[14]=g*S+x*V+m*ft+p*q,r[3]=v*w+y*M+_*$+E*nt,r[7]=v*A+y*T+_*at+E*Y,r[11]=v*b+y*k+_*rt+E*U,r[15]=v*S+y*V+_*ft+E*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-s*l*d-r*a*h+n*l*h+s*a*f-n*c*f)+x*(+e*c*f-e*l*h+r*o*h-s*o*f+s*l*u-r*c*u)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-e*c*d+e*a*h+s*o*d-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=d*m*l-x*h*l+x*c*f-a*m*f-d*c*p+a*h*p,y=g*h*l-u*m*l-g*c*f+o*m*f+u*c*p-o*h*p,_=u*x*l-g*d*l+g*a*f-o*x*f-u*a*p+o*d*p,E=g*d*c-u*x*c-g*a*h+o*x*h+u*a*m-o*d*m,w=e*v+n*y+s*_+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=v*A,t[1]=(x*h*r-d*m*r-x*s*f+n*m*f+d*s*p-n*h*p)*A,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*A,t[3]=(d*c*r-a*h*r-d*s*l+n*h*l+a*s*f-n*c*f)*A,t[4]=y*A,t[5]=(u*m*r-g*h*r+g*s*f-e*m*f-u*s*p+e*h*p)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*A,t[7]=(o*h*r-u*c*r+u*s*l-e*h*l-o*s*f+e*c*f)*A,t[8]=_*A,t[9]=(g*d*r-u*x*r-g*n*f+e*x*f+u*n*p-e*d*p)*A,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*A,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*f-e*a*f)*A,t[12]=E*A,t[13]=(u*x*s-g*d*s+g*n*h-e*x*h-u*n*m+e*d*m)*A,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*A,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*h+e*a*h)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,g=r*d,x=o*u,m=o*d,p=a*d,v=c*l,y=c*u,_=c*d,E=n.x,w=n.y,A=n.z;return s[0]=(1-(x+p))*E,s[1]=(f+_)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(h+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*A,s[9]=(m-v)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const o=vs.set(s[4],s[5],s[6]).length(),a=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Un.copy(this);const l=1/r,u=1/o,d=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=hi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let f,g;if(a===hi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Oo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=hi){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),h=(e+t)*l,f=(n+s)*u;let g,x;if(a===hi)g=(o+r)*d,x=-2*d;else if(a===Oo)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vs=new J,Un=new ve,R0=new J(0,0,0),P0=new J(1,1,1),wi=new J,qr=new J,gn=new J,du=new ve,pu=new us;class En{constructor(t=0,e=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pu.setFromEuler(this),this.setFromQuaternion(pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let L0=0;const mu=new J,_s=new us,ei=new ve,Yr=new J,ar=new J,D0=new J,I0=new us,gu=new J(1,0,0),xu=new J(0,1,0),vu=new J(0,0,1),_u={type:"added"},z0={type:"removed"},Ms={type:"childadded",child:null},xa={type:"childremoved",child:null};class tn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new J,e=new En,n=new us,s=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new ue}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(gu,t)}rotateY(t){return this.rotateOnAxis(xu,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return mu.copy(t).applyQuaternion(this.quaternion),this.position.add(mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gu,t)}translateY(t){return this.translateOnAxis(xu,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ar,Yr,this.up):ei.lookAt(Yr,ar,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ei),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_u),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(z0),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_u),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,D0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,I0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}tn.DEFAULT_UP=new J(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new J,ni=new J,va=new J,ii=new J,ys=new J,Ss=new J,Mu=new J,_a=new J,Ma=new J,ya=new J,Sa=new Le,ba=new Le,wa=new Le;class kn{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),ni.subVectors(n,e),va.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(ni),c=Nn.dot(va),l=ni.dot(ni),u=ni.dot(va),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Sa.setScalar(0),ba.setScalar(0),wa.setScalar(0),Sa.fromBufferAttribute(t,e),ba.fromBufferAttribute(t,n),wa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(wa,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),ni.subVectors(t,e),Nn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Nn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,n),Ss.subVectors(r,n),_a.subVectors(t,n);const c=ys.dot(_a),l=Ss.dot(_a);if(c<=0&&l<=0)return e.copy(n);Ma.subVectors(t,s);const u=ys.dot(Ma),d=Ss.dot(Ma);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ys,o);ya.subVectors(t,r);const f=ys.dot(ya),g=Ss.dot(ya);if(g>=0&&f<=g)return e.copy(r);const x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ss,a);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Mu.subVectors(r,s),a=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Mu,a);const p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(ys,o).addScaledVector(Ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=yl(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ea(o,r,t+1/3),this.g=Ea(o,r,t),this.b=Ea(o,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=Th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return xe.fromWorkingColorSpace(nn.copy(this),t),Math.round($e(nn.r*255,0,255))*65536+Math.round($e(nn.g*255,0,255))*256+Math.round($e(nn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Qe){xe.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,s=nn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Kr);const n=xr(Ei.h,Kr.h,e),s=xr(Ei.s,Kr.s,e),r=xr(Ei.l,Kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new se;se.NAMES=Th;let U0=0;class fs extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=tr(),this.name="",this.blending=Os,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sr,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mc&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ch extends fs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new J,jr=new jt;class Oe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)jr.fromBufferAttribute(this,e),jr.applyMatrix3(t),this.setXY(e,jr.x,jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Is(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Is(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Is(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==iu&&(t.usage=this.usage),t}}class Rh extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ph extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let N0=0;const Rn=new ve,Aa=new tn,bs=new J,xn=new Hi,cr=new Hi,je=new J;class Ge extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bh(t)?Ph:Rh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(xn.min,cr.min),xn.expandByPoint(je),je.addVectors(xn.max,cr.max),xn.expandByPoint(je)):(xn.expandByPoint(cr.min),xn.expandByPoint(cr.max))}xn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)je.fromBufferAttribute(a,l),c&&(bs.fromBufferAttribute(t,l),je.add(bs)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new J,c[b]=new J;const l=new J,u=new J,d=new J,h=new jt,f=new jt,g=new jt,x=new J,m=new J;function p(b,S,M){l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),h.fromBufferAttribute(r,b),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(T),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(T),a[b].add(x),a[S].add(x),a[M].add(x),c[b].add(m),c[S].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let b=0,S=v.length;b<S;++b){const M=v[b],T=M.start,k=M.count;for(let V=T,$=T+k;V<$;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const y=new J,_=new J,E=new J,w=new J;function A(b){E.fromBufferAttribute(s,b),w.copy(E);const S=a[b];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(w,S);const T=_.dot(c[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,T)}for(let b=0,S=v.length;b<S;++b){const M=v[b],T=M.start,k=M.count;for(let V=T,$=T+k;V<$;V+=3)A(t.getX(V+0)),A(t.getX(V+1)),A(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new J,r=new J,o=new J,a=new J,c=new J,l=new J,u=new J,d=new J;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Oe(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yu=new ve,Xi=new C0,$r=new Gi,Su=new J,Zr=new J,Jr=new J,Qr=new J,Ta=new J,to=new J,bu=new J,eo=new J;class De extends tn{constructor(t=new Ge,e=new Ch){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(Ta.fromBufferAttribute(d,t),o?to.addScaledVector(Ta,u):to.addScaledVector(Ta.sub(e),u))}e.add(to)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!($r.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere($r,Su)===null||Xi.origin.distanceToSquared(Su)>(t.far-t.near)**2))&&(yu.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,E=y;_<E;_+=3){const w=a.getX(_),A=a.getX(_+1),b=a.getX(_+2);s=no(this,p,t,n,l,u,d,w,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=no(this,o,t,n,l,u,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,E=y;_<E;_+=3){const w=_,A=_+1,b=_+2;s=no(this,p,t,n,l,u,d,w,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const v=m,y=m+1,_=m+2;s=no(this,o,t,n,l,u,d,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function F0(i,t,e,n,s,r,o,a){let c;if(t.side===pn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Oi,a),c===null)return null;eo.copy(a),eo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(eo);return l<e.near||l>e.far?null:{distance:l,point:eo.clone(),object:i}}function no(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Zr),i.getVertexPosition(c,Jr),i.getVertexPosition(l,Qr);const u=F0(i,t,e,n,Zr,Jr,Qr,bu);if(u){const d=new J;kn.getBarycoord(bu,Zr,Jr,Qr,d),s&&(u.uv=kn.getInterpolatedAttribute(s,a,c,l,d,new jt)),r&&(u.uv1=kn.getInterpolatedAttribute(r,a,c,l,d,new jt)),o&&(u.normal=kn.getInterpolatedAttribute(o,a,c,l,d,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new J,materialIndex:0};kn.getNormal(Zr,Jr,Qr,h.normal),u.face=h,u.barycoord=d}return u}class Bn extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(d,2));function g(x,m,p,v,y,_,E,w,A,b,S){const M=_/A,T=E/b,k=_/2,V=E/2,$=w/2,at=A+1,rt=b+1;let ft=0,nt=0;const Y=new J;for(let U=0;U<rt;U++){const q=U*T-V;for(let j=0;j<at;j++){const st=j*M-k;Y[x]=st*v,Y[m]=q*y,Y[p]=$,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(j/A),d.push(1-U/b),ft+=1}}for(let U=0;U<b;U++)for(let q=0;q<A;q++){const j=h+q+at*U,st=h+q+at*(U+1),X=h+(q+1)+at*(U+1),it=h+(q+1)+at*U;c.push(j,st,it),c.push(st,X,it),nt+=6}a.addGroup(f,nt,S),f+=nt,h+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=js(i[e]);for(const s in n)t[s]=n[s]}return t}function O0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const k0={clone:js,merge:ln};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends fs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=O0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dh extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new J,wu=new jt,Eu=new jt;class _n extends Dh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,wu,Eu),e.subVectors(Eu,wu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ws=-90,Es=1;class G0 extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(ws,Es,t,e);s.layers=this.layers,this.add(s);const r=new _n(ws,Es,t,e);r.layers=this.layers,this.add(r);const o=new _n(ws,Es,t,e);o.layers=this.layers,this.add(o);const a=new _n(ws,Es,t,e);a.layers=this.layers,this.add(a);const c=new _n(ws,Es,t,e);c.layers=this.layers,this.add(c);const l=new _n(ws,Es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ih extends an{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Xs,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class V0 extends cs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ih(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:zi});r.uniforms.tEquirect.value=e;const o=new De(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=bn),new G0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Ca=new J,W0=new J,X0=new ue;class Ji{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ca.subVectors(n,e).cross(W0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ca),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||X0.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Gi,io=new J;class Sl{constructor(t=new Ji,e=new Ji,n=new Ji,s=new Ji,r=new Ji,o=new Ji){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,h-l,m-f,_-p).normalize(),n[1].setComponents(c+r,h+l,m+f,_+p).normalize(),n[2].setComponents(c+o,h+u,m+g,_+v).normalize(),n[3].setComponents(c-o,h-u,m-g,_-v).normalize(),n[4].setComponents(c-a,h-d,m-x,_-y).normalize(),e===hi)n[5].setComponents(c+a,h+d,m+x,_+y).normalize();else if(e===Oo)n[5].setComponents(a,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function q0(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class hs extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*h-o;for(let y=0;y<l;y++){const _=y*d-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,_=v+l*(p+1),E=v+1+l*(p+1),w=v+1+l*p;f.push(y,_,w),f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
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
#endif`,j0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gm=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
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
#endif`,Xm=`struct PhysicalMaterial {
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
}`,qm=`
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ng=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
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
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lg=`float getShadowMask() {
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,tx=`#define DISTANCE
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
}`,ex=`#define DISTANCE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`uniform float scale;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,ax=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,lx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,fx=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,dx=`#define NORMAL
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
}`,px=`#define PHONG
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
}`,mx=`#define PHONG
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
}`,gx=`#define STANDARD
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
}`,xx=`#define STANDARD
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
}`,vx=`#define TOON
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
}`,_x=`#define TOON
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
}`,Mx=`uniform float size;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Sx=`#include <common>
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
}`,bx=`uniform vec3 color;
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
}`,wx=`uniform float rotation;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:Y0,alphahash_pars_fragment:K0,alphamap_fragment:j0,alphamap_pars_fragment:$0,alphatest_fragment:Z0,alphatest_pars_fragment:J0,aomap_fragment:Q0,aomap_pars_fragment:tm,batching_pars_vertex:em,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:om,bumpmap_pars_fragment:am,clipping_planes_fragment:cm,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:um,clipping_planes_vertex:fm,color_fragment:hm,color_pars_fragment:dm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:vm,displacementmap_pars_vertex:_m,displacementmap_vertex:Mm,emissivemap_fragment:ym,emissivemap_pars_fragment:Sm,colorspace_fragment:bm,colorspace_pars_fragment:wm,envmap_fragment:Em,envmap_common_pars_fragment:Am,envmap_pars_fragment:Tm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:km,envmap_vertex:Rm,fog_vertex:Pm,fog_pars_vertex:Lm,fog_fragment:Dm,fog_pars_fragment:Im,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Um,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Fm,lights_pars_begin:Om,lights_toon_fragment:Bm,lights_toon_pars_fragment:Hm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:Km,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:Qm,map_pars_fragment:tg,map_particle_fragment:eg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:sg,morphinstance_vertex:rg,morphcolor_vertex:og,morphnormal_vertex:ag,morphtarget_pars_vertex:cg,morphtarget_vertex:lg,normal_fragment_begin:ug,normal_fragment_maps:fg,normal_pars_fragment:hg,normal_pars_vertex:dg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:vg,iridescence_pars_fragment:_g,opaque_fragment:Mg,packing:yg,premultiplied_alpha_fragment:Sg,project_vertex:bg,dithering_fragment:wg,dithering_pars_fragment:Eg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Lg,skinbase_vertex:Dg,skinning_pars_vertex:Ig,skinning_vertex:zg,skinnormal_vertex:Ug,specularmap_fragment:Ng,specularmap_pars_fragment:Fg,tonemapping_fragment:Og,tonemapping_pars_fragment:kg,transmission_fragment:Bg,transmission_pars_fragment:Hg,uv_pars_fragment:Gg,uv_pars_vertex:Vg,uv_vertex:Wg,worldpos_vertex:Xg,background_vert:qg,background_frag:Yg,backgroundCube_vert:Kg,backgroundCube_frag:jg,cube_vert:$g,cube_frag:Zg,depth_vert:Jg,depth_frag:Qg,distanceRGBA_vert:tx,distanceRGBA_frag:ex,equirect_vert:nx,equirect_frag:ix,linedashed_vert:sx,linedashed_frag:rx,meshbasic_vert:ox,meshbasic_frag:ax,meshlambert_vert:cx,meshlambert_frag:lx,meshmatcap_vert:ux,meshmatcap_frag:fx,meshnormal_vert:hx,meshnormal_frag:dx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:gx,meshphysical_frag:xx,meshtoon_vert:vx,meshtoon_frag:_x,points_vert:Mx,points_frag:yx,shadow_vert:Sx,shadow_frag:bx,sprite_vert:wx,sprite_frag:Ex},Gt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Yn={basic:{uniforms:ln([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:ln([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new se(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:ln([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:ln([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:ln([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new se(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:ln([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:ln([Gt.points,Gt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:ln([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:ln([Gt.common,Gt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:ln([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:ln([Gt.sprite,Gt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:ln([Gt.common,Gt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:ln([Gt.lights,Gt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Yn.physical={uniforms:ln([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const so={r:0,b:0,g:0},Yi=new En,Ax=new ve;function Tx(i,t,e,n,s,r,o){const a=new se(0);let c=r===!0?0:1,l,u,d=null,h=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1;const _=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===qo)?(u===void 0&&(u=new De(new Bn(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:js(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Yi.copy(y.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Yi)),u.material.toneMapped=xe.getTransfer(_.colorSpace)!==be,(d!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new De(new hs(2,2),new mn({name:"BackgroundMaterial",uniforms:js(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=xe.getTransfer(_.colorSpace)!==be,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(so,Lh(i)),n.buffers.color.setClear(so.r,so.g,so.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function Cx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(M,T,k,V,$){let at=!1;const rt=d(V,k,T);r!==rt&&(r=rt,l(r.object)),at=f(M,V,k,$),at&&g(M,V,k,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(at||o)&&(o=!1,_(M,T,k,V),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,T,k){const V=k.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let at=$[T.id];at===void 0&&(at={},$[T.id]=at);let rt=at[V];return rt===void 0&&(rt=h(c()),at[V]=rt),rt}function h(M){const T=[],k=[],V=[];for(let $=0;$<e;$++)T[$]=0,k[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:V,object:M,attributes:{},index:null}}function f(M,T,k,V){const $=r.attributes,at=T.attributes;let rt=0;const ft=k.getAttributes();for(const nt in ft)if(ft[nt].location>=0){const U=$[nt];let q=at[nt];if(q===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),U===void 0||U.attribute!==q||q&&U.data!==q.data)return!0;rt++}return r.attributesNum!==rt||r.index!==V}function g(M,T,k,V){const $={},at=T.attributes;let rt=0;const ft=k.getAttributes();for(const nt in ft)if(ft[nt].location>=0){let U=at[nt];U===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(U=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(U=M.instanceColor));const q={};q.attribute=U,U&&U.data&&(q.data=U.data),$[nt]=q,rt++}r.attributes=$,r.attributesNum=rt,r.index=V}function x(){const M=r.newAttributes;for(let T=0,k=M.length;T<k;T++)M[T]=0}function m(M){p(M,0)}function p(M,T){const k=r.newAttributes,V=r.enabledAttributes,$=r.attributeDivisors;k[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),$[M]!==T&&(i.vertexAttribDivisor(M,T),$[M]=T)}function v(){const M=r.newAttributes,T=r.enabledAttributes;for(let k=0,V=T.length;k<V;k++)T[k]!==M[k]&&(i.disableVertexAttribArray(k),T[k]=0)}function y(M,T,k,V,$,at,rt){rt===!0?i.vertexAttribIPointer(M,T,k,$,at):i.vertexAttribPointer(M,T,k,V,$,at)}function _(M,T,k,V){x();const $=V.attributes,at=k.getAttributes(),rt=T.defaultAttributeValues;for(const ft in at){const nt=at[ft];if(nt.location>=0){let Y=$[ft];if(Y===void 0&&(ft==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),ft==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const U=Y.normalized,q=Y.itemSize,j=t.get(Y);if(j===void 0)continue;const st=j.buffer,X=j.type,it=j.bytesPerElement,_t=X===i.INT||X===i.UNSIGNED_INT||Y.gpuType===pl;if(Y.isInterleavedBufferAttribute){const W=Y.data,et=W.stride,lt=Y.offset;if(W.isInstancedInterleavedBuffer){for(let yt=0;yt<nt.locationSize;yt++)p(nt.location+yt,W.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let yt=0;yt<nt.locationSize;yt++)m(nt.location+yt);i.bindBuffer(i.ARRAY_BUFFER,st);for(let yt=0;yt<nt.locationSize;yt++)y(nt.location+yt,q/nt.locationSize,X,U,et*it,(lt+q/nt.locationSize*yt)*it,_t)}else{if(Y.isInstancedBufferAttribute){for(let W=0;W<nt.locationSize;W++)p(nt.location+W,Y.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let W=0;W<nt.locationSize;W++)m(nt.location+W);i.bindBuffer(i.ARRAY_BUFFER,st);for(let W=0;W<nt.locationSize;W++)y(nt.location+W,q/nt.locationSize,X,U,q*it,q/nt.locationSize*W*it,_t)}}else if(rt!==void 0){const U=rt[ft];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(nt.location,U);break;case 3:i.vertexAttrib3fv(nt.location,U);break;case 4:i.vertexAttrib4fv(nt.location,U);break;default:i.vertexAttrib1fv(nt.location,U)}}}}v()}function E(){b();for(const M in n){const T=n[M];for(const k in T){const V=T[k];for(const $ in V)u(V[$].object),delete V[$];delete T[k]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const k in T){const V=T[k];for(const $ in V)u(V[$].object),delete V[$];delete T[k]}delete n[M.id]}function A(M){for(const T in n){const k=n[T];if(k[M.id]===void 0)continue;const V=k[M.id];for(const $ in V)u(V[$].object),delete V[$];delete k[M.id]}}function b(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Rx(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Px(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==In&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===Rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==jn&&!b)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:E,maxSamples:w}}function Lx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ji,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,y=v*4;let _=p.clippingState||null;c.value=_,_=u(g,h,y,f);for(let E=0;E!==y;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Dx(i){let t=new WeakMap;function e(o,a){return a===Cc?o.mapping=Xs:a===Rc&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cc||a===Rc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new V0(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Uh extends Dh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Us=4,Au=[.125,.215,.35,.446,.526,.582],es=20,Ra=new Uh,Tu=new se;let Pa=null,La=0,Da=0,Ia=!1;const Qi=(1+Math.sqrt(5))/2,As=1/Qi,Cu=[new J(-Qi,As,0),new J(Qi,As,0),new J(-As,0,Qi),new J(As,0,Qi),new J(0,Qi,-As),new J(0,Qi,As),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class Ru{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pa,La,Da),this._renderer.xr.enabled=Ia,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Rr,format:In,colorSpace:Js,depthBuffer:!1},s=Pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(r)),this._blurMaterial=zx(r,t,e)}return s}_compileMaterial(t){const e=new De(this._lodPlanes[0],t);this._renderer.compile(e,Ra)}_sceneToCubeUV(t,e,n,s){const a=new _n(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Tu),u.toneMapping=Ui,u.autoClear=!1;const f=new Ch({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new De(new Bn,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Tu),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;ro(s,v*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ro(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cu[(s-r-1)%Cu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new De(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const p=[];let v=0;for(let A=0;A<es;++A){const b=A/x,S=Math.exp(-b*b/2);p.push(S),A===0?v+=S:A<m&&(v+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const _=this._sizeLods[s],E=3*_*(s>y-Us?s-y+Us:0),w=4*(this._cubeSize-_);ro(e,E,w,3*_,2*_),c.setRenderTarget(e),c.render(d,Ra)}}function Ix(i){const t=[],e=[],n=[];let s=i;const r=i-Us+1+Au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Us?c=Au[o-i+Us-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,b=w>2?0:-1,S=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];v.set(S,x*g*w),y.set(h,m*g*w);const M=[w,w,w,w,w,w];_.set(M,p*g*w)}const E=new Ge;E.setAttribute("position",new Oe(v,x)),E.setAttribute("uv",new Oe(y,m)),E.setAttribute("faceIndex",new Oe(_,p)),t.push(E),s>Us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pu(i,t,e){const n=new cs(i,t,e);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ro(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zx(i,t,e){const n=new Float32Array(es),s=new J(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Lu(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Du(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function Ux(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Cc||c===Rc,u=c===Xs||c===qs;if(l||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Ru(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Ru(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Nx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fx(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){const E=v[y+0],w=v[y+1],A=v[y+2];h.push(E,w,w,A,A,E)}}else if(g!==void 0){const v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const E=y+0,w=y+1,A=y+2;h.push(E,w,w,A,A,E)}}else return;const m=new(bh(h)?Ph:Rh)(h,1);m.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Ox(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function kx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bx(i,t,e){const n=new WeakMap,s=new Le;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const w=new Float32Array(_*E*4*d),A=new Eh(w,_,E,d);A.type=jn,A.needsUpdate=!0;const b=y*4;for(let M=0;M<d;M++){const T=m[M],k=p[M],V=v[M],$=_*E*4*M;for(let at=0;at<T.count;at++){const rt=at*b;f===!0&&(s.fromBufferAttribute(T,at),w[$+rt+0]=s.x,w[$+rt+1]=s.y,w[$+rt+2]=s.z,w[$+rt+3]=0),g===!0&&(s.fromBufferAttribute(k,at),w[$+rt+4]=s.x,w[$+rt+5]=s.y,w[$+rt+6]=s.z,w[$+rt+7]=0),x===!0&&(s.fromBufferAttribute(V,at),w[$+rt+8]=s.x,w[$+rt+9]=s.y,w[$+rt+10]=s.z,w[$+rt+11]=V.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new jt(_,E)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Hx(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Nh extends an{constructor(t,e,n,s,r,o,a,c,l,u=ks){if(u!==ks&&u!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ks&&(n=as),n===void 0&&u===Ks&&(n=Ys),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:wn,this.minFilter=c!==void 0?c:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fh=new an,Iu=new Nh(1,1),Oh=new Eh,kh=new A0,Bh=new Ih,zu=[],Uu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),Ou=new Float32Array(4);function er(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jo(i,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function Wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function Xx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function qx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Ou.set(n),i.uniformMatrix2fv(this.addr,!1,Ou),Ye(e,n)}}function Yx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),Ye(e,n)}}function Kx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),Ye(e,n)}}function jx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $x(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function Zx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Jx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Qx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function iv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=Sh,r=Iu):r=Fh,e.setTexture2D(t||r,s)}function sv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kh,s)}function rv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bh,s)}function ov(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Oh,s)}function av(i){switch(i){case 5126:return Gx;case 35664:return Vx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return Yx;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return $x;case 35668:case 35672:return Zx;case 35669:case 35673:return Jx;case 5125:return Qx;case 36294:return tv;case 36295:return ev;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return ov}}function cv(i,t){i.uniform1fv(this.addr,t)}function lv(i,t){const e=er(t,this.size,2);i.uniform2fv(this.addr,e)}function uv(i,t){const e=er(t,this.size,3);i.uniform3fv(this.addr,e)}function fv(i,t){const e=er(t,this.size,4);i.uniform4fv(this.addr,e)}function hv(i,t){const e=er(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function dv(i,t){const e=er(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pv(i,t){const e=er(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mv(i,t){i.uniform1iv(this.addr,t)}function gv(i,t){i.uniform2iv(this.addr,t)}function xv(i,t){i.uniform3iv(this.addr,t)}function vv(i,t){i.uniform4iv(this.addr,t)}function _v(i,t){i.uniform1uiv(this.addr,t)}function Mv(i,t){i.uniform2uiv(this.addr,t)}function yv(i,t){i.uniform3uiv(this.addr,t)}function Sv(i,t){i.uniform4uiv(this.addr,t)}function bv(i,t,e){const n=this.cache,s=t.length,r=jo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function wv(i,t,e){const n=this.cache,s=t.length,r=jo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kh,r[o])}function Ev(i,t,e){const n=this.cache,s=t.length,r=jo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bh,r[o])}function Av(i,t,e){const n=this.cache,s=t.length,r=jo(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Oh,r[o])}function Tv(i){switch(i){case 5126:return cv;case 35664:return lv;case 35665:return uv;case 35666:return fv;case 35674:return hv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return xv;case 35669:case 35673:return vv;case 5125:return _v;case 36294:return Mv;case 36295:return yv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return Av}}class Cv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=av(e.type)}}class Rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tv(e.type)}}class Pv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function ku(i,t){i.seq.push(t),i.map[t.id]=t}function Lv(i,t,e){const n=i.name,s=n.length;for(za.lastIndex=0;;){const r=za.exec(n),o=za.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ku(e,l===void 0?new Cv(a,i,t):new Rv(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Pv(a),ku(e,d)),e=d}}}class Ro{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Lv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Bu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dv=37297;let Iv=0;function zv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Hu=new ue;function Uv(i){xe._getMatrix(Hu,xe.workingColorSpace,i);const t=`mat3( ${Hu.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case Ko:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+zv(i.getShaderSource(t),o)}else return s}function Nv(i,t){const e=Uv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fv(i,t){let e;switch(t){case kp:e="Linear";break;case Bp:e="Reinhard";break;case Hp:e="Cineon";break;case Gp:e="ACESFilmic";break;case Wp:e="AgX";break;case fh:e="Neutral";break;case Vp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const oo=new J;function Ov(){xe.getLuminanceCoefficients(oo);const i=oo.x.toFixed(4),t=oo.y.toFixed(4),e=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function Bv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function pr(i){return i!==""}function Vu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(Gv,Wv)}const Vv=new Map;function Wv(i,t){let e=he[t];if(e===void 0){const n=Vv.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}const Xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(Xv,qv)}function qv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Yv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===dl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function Kv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function $v(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xo:t="ENVMAP_BLENDING_MULTIPLY";break;case Fp:t="ENVMAP_BLENDING_MIX";break;case Op:t="ENVMAP_BLENDING_ADD";break}return t}function Zv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Yv(e),l=Kv(e),u=jv(e),d=$v(e),h=Zv(e),f=kv(e),g=Bv(r),x=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(m=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?he.tonemapping_pars_fragment:"",e.toneMapping!==Ui?Fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,Nv("linearToOutputTexel",e.outputColorSpace),Ov(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),o=il(o),o=Vu(o,e),o=Wu(o,e),a=il(a),a=Vu(a,e),a=Wu(a,e),o=Xu(o),a=Xu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,_=v+p+a,E=Bu(s,s.VERTEX_SHADER,y),w=Bu(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(T){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(E).trim(),$=s.getShaderInfoLog(w).trim();let at=!0,rt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,w);else{const ft=Gu(s,E,"vertex"),nt=Gu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+ft+`
`+nt)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||$==="")&&(rt=!1);rt&&(T.diagnostics={runnable:at,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(E),s.deleteShader(w),b=new Ro(s,x),S=Hv(s,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Dv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=w,this}let Qv=0;class t_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new e_(t),e.set(t,n)),n}}class e_{constructor(t){this.id=Qv++,this.code=t,this.usedTimes=0}}function n_(i,t,e,n,s,r,o){const a=new Ah,c=new t_,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,T,k,V){const $=k.fog,at=V.geometry,rt=S.isMeshStandardMaterial?k.environment:null,ft=(S.isMeshStandardMaterial?e:t).get(S.envMap||rt),nt=ft&&ft.mapping===qo?ft.image.height:null,Y=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const U=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,q=U!==void 0?U.length:0;let j=0;at.morphAttributes.position!==void 0&&(j=1),at.morphAttributes.normal!==void 0&&(j=2),at.morphAttributes.color!==void 0&&(j=3);let st,X,it,_t;if(Y){const Pt=Yn[Y];st=Pt.vertexShader,X=Pt.fragmentShader}else st=S.vertexShader,X=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),_t=c.getFragmentShaderID(S);const W=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),lt=V.isInstancedMesh===!0,yt=V.isBatchedMesh===!0,Ft=!!S.map,N=!!S.matcap,ot=!!ft,H=!!S.aoMap,tt=!!S.lightMap,zt=!!S.bumpMap,Yt=!!S.normalMap,Ot=!!S.displacementMap,$t=!!S.emissiveMap,Kt=!!S.metalnessMap,O=!!S.roughnessMap,R=S.anisotropy>0,L=S.clearcoat>0,B=S.dispersion>0,K=S.iridescence>0,I=S.sheen>0,F=S.transmission>0,ct=R&&!!S.anisotropyMap,ht=L&&!!S.clearcoatMap,Lt=L&&!!S.clearcoatNormalMap,mt=L&&!!S.clearcoatRoughnessMap,Rt=K&&!!S.iridescenceMap,Ut=K&&!!S.iridescenceThicknessMap,Dt=I&&!!S.sheenColorMap,Ct=I&&!!S.sheenRoughnessMap,Vt=!!S.specularMap,Wt=!!S.specularColorMap,ie=!!S.specularIntensityMap,Q=F&&!!S.transmissionMap,Mt=F&&!!S.thicknessMap,dt=!!S.gradientMap,gt=!!S.alphaMap,Et=S.alphaTest>0,Z=!!S.alphaHash,pt=!!S.extensions;let wt=Ui;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(wt=i.toneMapping);const Tt={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:X,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:yt,batchingColor:yt&&V._colorsTexture!==null,instancing:lt,instancingColor:lt&&V.instanceColor!==null,instancingMorph:lt&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Js,alphaToCoverage:!!S.alphaToCoverage,map:Ft,matcap:N,envMap:ot,envMapMode:ot&&ft.mapping,envMapCubeUVHeight:nt,aoMap:H,lightMap:tt,bumpMap:zt,normalMap:Yt,displacementMap:h&&Ot,emissiveMap:$t,normalMapObjectSpace:Yt&&S.normalMapType===Kp,normalMapTangentSpace:Yt&&S.normalMapType===Yo,metalnessMap:Kt,roughnessMap:O,anisotropy:R,anisotropyMap:ct,clearcoat:L,clearcoatMap:ht,clearcoatNormalMap:Lt,clearcoatRoughnessMap:mt,dispersion:B,iridescence:K,iridescenceMap:Rt,iridescenceThicknessMap:Ut,sheen:I,sheenColorMap:Dt,sheenRoughnessMap:Ct,specularMap:Vt,specularColorMap:Wt,specularIntensityMap:ie,transmission:F,transmissionMap:Q,thicknessMap:Mt,gradientMap:dt,opaque:S.transparent===!1&&S.blending===Os&&S.alphaToCoverage===!1,alphaMap:gt,alphaTest:Et,alphaHash:Z,combine:S.combine,mapUv:Ft&&x(S.map.channel),aoMapUv:H&&x(S.aoMap.channel),lightMapUv:tt&&x(S.lightMap.channel),bumpMapUv:zt&&x(S.bumpMap.channel),normalMapUv:Yt&&x(S.normalMap.channel),displacementMapUv:Ot&&x(S.displacementMap.channel),emissiveMapUv:$t&&x(S.emissiveMap.channel),metalnessMapUv:Kt&&x(S.metalnessMap.channel),roughnessMapUv:O&&x(S.roughnessMap.channel),anisotropyMapUv:ct&&x(S.anisotropyMap.channel),clearcoatMapUv:ht&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(S.sheenRoughnessMap.channel),specularMapUv:Vt&&x(S.specularMap.channel),specularColorMapUv:Wt&&x(S.specularColorMap.channel),specularIntensityMapUv:ie&&x(S.specularIntensityMap.channel),transmissionMapUv:Q&&x(S.transmissionMap.channel),thicknessMapUv:Mt&&x(S.thicknessMap.channel),alphaMapUv:gt&&x(S.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Yt||R),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!at.attributes.uv&&(Ft||gt),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:et,skinning:V.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:j,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:Ft&&S.map.isVideoTexture===!0&&xe.getTransfer(S.map.colorSpace)===be,decodeVideoTextureEmissive:$t&&S.emissiveMap.isVideoTexture===!0&&xe.getTransfer(S.emissiveMap.colorSpace)===be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&S.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)M.push(T),M.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=g[S.type];let T;if(M){const k=Yn[M];T=k0.clone(k.uniforms)}else T=S.uniforms;return T}function E(S,M){let T;for(let k=0,V=u.length;k<V;k++){const $=u[k];if($.cacheKey===M){T=$,++T.usedTimes;break}}return T===void 0&&(T=new Jv(i,M,S,r),u.push(T)),T}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function b(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:b}}function i_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ku(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,f,g,x,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,h,f,g,x,m){const p=o(d,h,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,h,f,g,x,m){const p=o(d,h,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||s_),n.length>1&&n.sort(h||Yu),s.length>1&&s.sort(h||Yu)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function r_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ku,i.set(n,[o])):s>=r.length?(o=new Ku,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function o_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new se};break;case"SpotLight":e={position:new J,direction:new J,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new J,halfWidth:new J,halfHeight:new J};break}return i[t.id]=e,e}}}function a_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let c_=0;function l_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u_(i){const t=new o_,e=a_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new J);const s=new J,r=new ve,o=new ve;function a(l){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,E=0,w=0,A=0;l.sort(l_);for(let S=0,M=l.length;S<M;S++){const T=l[S],k=T.color,V=T.intensity,$=T.distance,at=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=k.r*V,d+=k.g*V,h+=k.b*V;else if(T.isLightProbe){for(let rt=0;rt<9;rt++)n.probe[rt].addScaledVector(T.sh.coefficients[rt],V);A++}else if(T.isDirectionalLight){const rt=t.get(T);if(rt.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const ft=T.shadow,nt=e.get(T);nt.shadowIntensity=ft.intensity,nt.shadowBias=ft.bias,nt.shadowNormalBias=ft.normalBias,nt.shadowRadius=ft.radius,nt.shadowMapSize=ft.mapSize,n.directionalShadow[f]=nt,n.directionalShadowMap[f]=at,n.directionalShadowMatrix[f]=T.shadow.matrix,v++}n.directional[f]=rt,f++}else if(T.isSpotLight){const rt=t.get(T);rt.position.setFromMatrixPosition(T.matrixWorld),rt.color.copy(k).multiplyScalar(V),rt.distance=$,rt.coneCos=Math.cos(T.angle),rt.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),rt.decay=T.decay,n.spot[x]=rt;const ft=T.shadow;if(T.map&&(n.spotLightMap[E]=T.map,E++,ft.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[x]=ft.matrix,T.castShadow){const nt=e.get(T);nt.shadowIntensity=ft.intensity,nt.shadowBias=ft.bias,nt.shadowNormalBias=ft.normalBias,nt.shadowRadius=ft.radius,nt.shadowMapSize=ft.mapSize,n.spotShadow[x]=nt,n.spotShadowMap[x]=at,_++}x++}else if(T.isRectAreaLight){const rt=t.get(T);rt.color.copy(k).multiplyScalar(V),rt.halfWidth.set(T.width*.5,0,0),rt.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=rt,m++}else if(T.isPointLight){const rt=t.get(T);if(rt.color.copy(T.color).multiplyScalar(T.intensity),rt.distance=T.distance,rt.decay=T.decay,T.castShadow){const ft=T.shadow,nt=e.get(T);nt.shadowIntensity=ft.intensity,nt.shadowBias=ft.bias,nt.shadowNormalBias=ft.normalBias,nt.shadowRadius=ft.radius,nt.shadowMapSize=ft.mapSize,nt.shadowCameraNear=ft.camera.near,nt.shadowCameraFar=ft.camera.far,n.pointShadow[g]=nt,n.pointShadowMap[g]=at,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=rt,g++}else if(T.isHemisphereLight){const rt=t.get(T);rt.skyColor.copy(T.color).multiplyScalar(V),rt.groundColor.copy(T.groundColor).multiplyScalar(V),n.hemi[p]=rt,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const b=n.hash;(b.directionalLength!==f||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==p||b.numDirectionalShadows!==v||b.numPointShadows!==y||b.numSpotShadows!==_||b.numSpotMaps!==E||b.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,b.directionalLength=f,b.pointLength=g,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=p,b.numDirectionalShadows=v,b.numPointShadows=y,b.numSpotShadows=_,b.numSpotMaps=E,b.numLightProbes=A,n.version=c_++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function ju(i){const t=new u_(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function f_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ju(i),t.set(s,[a])):r>=o.length?(a=new ju(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class h_ extends fs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class d_ extends fs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function g_(i,t,e){let n=new Sl;const s=new jt,r=new jt,o=new Le,a=new h_({depthPacking:Yp}),c=new d_,l={},u=e.maxTextureSize,d={[Oi]:pn,[pn]:Oi,[Mn]:Mn},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new De(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let p=this.type;this.render=function(w,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),k=i.state;k.setBlending(zi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=p!==ri&&this.type===ri,$=p===ri&&this.type!==ri;for(let at=0,rt=w.length;at<rt;at++){const ft=w[at],nt=ft.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);const Y=nt.getFrameExtents();if(s.multiply(Y),r.copy(nt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,nt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,nt.mapSize.y=r.y)),nt.map===null||V===!0||$===!0){const q=this.type!==ri?{minFilter:wn,magFilter:wn}:{};nt.map!==null&&nt.map.dispose(),nt.map=new cs(s.x,s.y,q),nt.map.texture.name=ft.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();const U=nt.getViewportCount();for(let q=0;q<U;q++){const j=nt.getViewport(q);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),k.viewport(o),nt.updateMatrices(ft,q),n=nt.getFrustum(),_(A,b,nt.camera,ft,this.type)}nt.isPointLightShadow!==!0&&this.type===ri&&v(nt,b),nt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,T)};function v(w,A){const b=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new cs(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,b,h,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,b,f,x,null)}function y(w,A,b,S){let M=null;const T=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)M=T;else if(M=b.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=M.uuid,V=A.uuid;let $=l[k];$===void 0&&($={},l[k]=$);let at=$[V];at===void 0&&(at=M.clone(),$[V]=at,A.addEventListener("dispose",E)),M=at}if(M.visible=A.visible,M.wireframe=A.wireframe,S===ri?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=b}return M}function _(w,A,b,S,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===ri)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const V=t.update(w),$=w.material;if(Array.isArray($)){const at=V.groups;for(let rt=0,ft=at.length;rt<ft;rt++){const nt=at[rt],Y=$[nt.materialIndex];if(Y&&Y.visible){const U=y(w,Y,S,M);w.onBeforeShadow(i,w,A,b,V,U,nt),i.renderBufferDirect(b,null,V,U,w,nt),w.onAfterShadow(i,w,A,b,V,U,nt)}}}else if($.visible){const at=y(w,$,S,M);w.onBeforeShadow(i,w,A,b,V,at,null),i.renderBufferDirect(b,null,V,at,w,null),w.onAfterShadow(i,w,A,b,V,at,null)}}const k=w.children;for(let V=0,$=k.length;V<$;V++)_(k[V],A,b,S,M)}function E(w){w.target.removeEventListener("dispose",E);for(const b in l){const S=l[b],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const x_={[yc]:Sc,[bc]:Ac,[wc]:Tc,[Ws]:Ec,[Sc]:yc,[Ac]:bc,[Tc]:wc,[Ec]:Ws};function v_(i,t){function e(){let Q=!1;const Mt=new Le;let dt=null;const gt=new Le(0,0,0,0);return{setMask:function(Et){dt!==Et&&!Q&&(i.colorMask(Et,Et,Et,Et),dt=Et)},setLocked:function(Et){Q=Et},setClear:function(Et,Z,pt,wt,Tt){Tt===!0&&(Et*=wt,Z*=wt,pt*=wt),Mt.set(Et,Z,pt,wt),gt.equals(Mt)===!1&&(i.clearColor(Et,Z,pt,wt),gt.copy(Mt))},reset:function(){Q=!1,dt=null,gt.set(-1,0,0,0)}}}function n(){let Q=!1,Mt=!1,dt=null,gt=null,Et=null;return{setReversed:function(Z){if(Mt!==Z){const pt=t.get("EXT_clip_control");Mt?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const wt=Et;Et=null,this.setClear(wt)}Mt=Z},getReversed:function(){return Mt},setTest:function(Z){Z?W(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(Z){dt!==Z&&!Q&&(i.depthMask(Z),dt=Z)},setFunc:function(Z){if(Mt&&(Z=x_[Z]),gt!==Z){switch(Z){case yc:i.depthFunc(i.NEVER);break;case Sc:i.depthFunc(i.ALWAYS);break;case bc:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case wc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Z}},setLocked:function(Z){Q=Z},setClear:function(Z){Et!==Z&&(Mt&&(Z=1-Z),i.clearDepth(Z),Et=Z)},reset:function(){Q=!1,dt=null,gt=null,Et=null,Mt=!1}}}function s(){let Q=!1,Mt=null,dt=null,gt=null,Et=null,Z=null,pt=null,wt=null,Tt=null;return{setTest:function(Pt){Q||(Pt?W(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(Pt){Mt!==Pt&&!Q&&(i.stencilMask(Pt),Mt=Pt)},setFunc:function(Pt,Jt,qt){(dt!==Pt||gt!==Jt||Et!==qt)&&(i.stencilFunc(Pt,Jt,qt),dt=Pt,gt=Jt,Et=qt)},setOp:function(Pt,Jt,qt){(Z!==Pt||pt!==Jt||wt!==qt)&&(i.stencilOp(Pt,Jt,qt),Z=Pt,pt=Jt,wt=qt)},setLocked:function(Pt){Q=Pt},setClear:function(Pt){Tt!==Pt&&(i.clearStencil(Pt),Tt=Pt)},reset:function(){Q=!1,Mt=null,dt=null,gt=null,Et=null,Z=null,pt=null,wt=null,Tt=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,E=null,w=null,A=new se(0,0,0),b=0,S=!1,M=null,T=null,k=null,V=null,$=null;const at=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let rt=!1,ft=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(nt)[1]),rt=ft>=1):nt.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),rt=ft>=2);let Y=null,U={};const q=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),st=new Le().fromArray(q),X=new Le().fromArray(j);function it(Q,Mt,dt,gt){const Et=new Uint8Array(4),Z=i.createTexture();i.bindTexture(Q,Z),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<dt;pt++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(Mt+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return Z}const _t={};_t[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(Ws),zt(!1),Yt(Jl),W(i.CULL_FACE),H(zi);function W(Q){u[Q]!==!0&&(i.enable(Q),u[Q]=!0)}function et(Q){u[Q]!==!1&&(i.disable(Q),u[Q]=!1)}function lt(Q,Mt){return d[Q]!==Mt?(i.bindFramebuffer(Q,Mt),d[Q]=Mt,Q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Mt),Q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function yt(Q,Mt){let dt=f,gt=!1;if(Q){dt=h.get(Mt),dt===void 0&&(dt=[],h.set(Mt,dt));const Et=Q.textures;if(dt.length!==Et.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,pt=Et.length;Z<pt;Z++)dt[Z]=i.COLOR_ATTACHMENT0+Z;dt.length=Et.length,gt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(dt)}function Ft(Q){return g!==Q?(i.useProgram(Q),g=Q,!0):!1}const N={[Ii]:i.FUNC_ADD,[yp]:i.FUNC_SUBTRACT,[Sp]:i.FUNC_REVERSE_SUBTRACT};N[bp]=i.MIN,N[wp]=i.MAX;const ot={[Ep]:i.ZERO,[_c]:i.ONE,[Ap]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[Dp]:i.SRC_ALPHA_SATURATE,[Pp]:i.DST_COLOR,[Cp]:i.DST_ALPHA,[Tp]:i.ONE_MINUS_SRC_COLOR,[Sr]:i.ONE_MINUS_SRC_ALPHA,[Lp]:i.ONE_MINUS_DST_COLOR,[Rp]:i.ONE_MINUS_DST_ALPHA,[Ip]:i.CONSTANT_COLOR,[zp]:i.ONE_MINUS_CONSTANT_COLOR,[Up]:i.CONSTANT_ALPHA,[Np]:i.ONE_MINUS_CONSTANT_ALPHA};function H(Q,Mt,dt,gt,Et,Z,pt,wt,Tt,Pt){if(Q===zi){x===!0&&(et(i.BLEND),x=!1);return}if(x===!1&&(W(i.BLEND),x=!0),Q!==uh){if(Q!==m||Pt!==S){if((p!==Ii||_!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,_=Ii),Pt)switch(Q){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.ONE,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}v=null,y=null,E=null,w=null,A.set(0,0,0),b=0,m=Q,S=Pt}return}Et=Et||Mt,Z=Z||dt,pt=pt||gt,(Mt!==p||Et!==_)&&(i.blendEquationSeparate(N[Mt],N[Et]),p=Mt,_=Et),(dt!==v||gt!==y||Z!==E||pt!==w)&&(i.blendFuncSeparate(ot[dt],ot[gt],ot[Z],ot[pt]),v=dt,y=gt,E=Z,w=pt),(wt.equals(A)===!1||Tt!==b)&&(i.blendColor(wt.r,wt.g,wt.b,Tt),A.copy(wt),b=Tt),m=Q,S=!1}function tt(Q,Mt){Q.side===Mn?et(i.CULL_FACE):W(i.CULL_FACE);let dt=Q.side===pn;Mt&&(dt=!dt),zt(dt),Q.blending===Os&&Q.transparent===!1?H(zi):H(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),o.setFunc(Q.depthFunc),o.setTest(Q.depthTest),o.setMask(Q.depthWrite),r.setMask(Q.colorWrite);const gt=Q.stencilWrite;a.setTest(gt),gt&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),$t(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(Q){M!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),M=Q)}function Yt(Q){Q!==vp?(W(i.CULL_FACE),Q!==T&&(Q===Jl?i.cullFace(i.BACK):Q===_p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),T=Q}function Ot(Q){Q!==k&&(rt&&i.lineWidth(Q),k=Q)}function $t(Q,Mt,dt){Q?(W(i.POLYGON_OFFSET_FILL),(V!==Mt||$!==dt)&&(i.polygonOffset(Mt,dt),V=Mt,$=dt)):et(i.POLYGON_OFFSET_FILL)}function Kt(Q){Q?W(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function O(Q){Q===void 0&&(Q=i.TEXTURE0+at-1),Y!==Q&&(i.activeTexture(Q),Y=Q)}function R(Q,Mt,dt){dt===void 0&&(Y===null?dt=i.TEXTURE0+at-1:dt=Y);let gt=U[dt];gt===void 0&&(gt={type:void 0,texture:void 0},U[dt]=gt),(gt.type!==Q||gt.texture!==Mt)&&(Y!==dt&&(i.activeTexture(dt),Y=dt),i.bindTexture(Q,Mt||_t[Q]),gt.type=Q,gt.texture=Mt)}function L(){const Q=U[Y];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function B(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function I(){try{i.texSubImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function F(){try{i.texSubImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function mt(){try{i.texStorage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Dt(Q){st.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),st.copy(Q))}function Ct(Q){X.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),X.copy(Q))}function Vt(Q,Mt){let dt=l.get(Mt);dt===void 0&&(dt=new WeakMap,l.set(Mt,dt));let gt=dt.get(Q);gt===void 0&&(gt=i.getUniformBlockIndex(Mt,Q.name),dt.set(Q,gt))}function Wt(Q,Mt){const gt=l.get(Mt).get(Q);c.get(Mt)!==gt&&(i.uniformBlockBinding(Mt,gt,Q.__bindingPointIndex),c.set(Mt,gt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Y=null,U={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,E=null,w=null,A=new se(0,0,0),b=0,S=!1,M=null,T=null,k=null,V=null,$=null,st.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:et,bindFramebuffer:lt,drawBuffers:yt,useProgram:Ft,setBlending:H,setMaterial:tt,setFlipSided:zt,setCullFace:Yt,setLineWidth:Ot,setPolygonOffset:$t,setScissorTest:Kt,activeTexture:O,bindTexture:R,unbindTexture:L,compressedTexImage2D:B,compressedTexImage3D:K,texImage2D:Rt,texImage3D:Ut,updateUBOMapping:Vt,uniformBlockBinding:Wt,texStorage2D:Lt,texStorage3D:mt,texSubImage2D:I,texSubImage3D:F,compressedTexSubImage2D:ct,compressedTexSubImage3D:ht,scissor:Dt,viewport:Ct,reset:ie}}function $u(i,t,e,n){const s=__(n);switch(e){case gh:return i*t;case vh:return i*t;case _h:return i*t*2;case xl:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case xh:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Ml:return i*t*4/s.components*s.byteLength;case wo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dc:case zc:return Math.max(i,16)*Math.max(t,8)/4;case Lc:case Ic:return Math.max(i,8)*Math.max(t,8)/2;case Uc:case Nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Co:case Jc:case Qc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yh:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function __(i){switch(i){case Zn:case dh:return{byteLength:1,components:1};case br:case ph:case Rr:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case as:case pl:case jn:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function M_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(O,R){return f?new OffscreenCanvas(O,R):ko("canvas")}function x(O,R,L){let B=1;const K=Kt(O);if((K.width>L||K.height>L)&&(B=L/Math.max(K.width,K.height)),B<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const I=Math.floor(B*K.width),F=Math.floor(B*K.height);d===void 0&&(d=g(I,F));const ct=R?g(I,F):d;return ct.width=I,ct.height=F,ct.getContext("2d").drawImage(O,0,0,I,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+I+"x"+F+")."),ct}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),O;return O}function m(O){return O.generateMipmaps}function p(O){i.generateMipmap(O)}function v(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(O,R,L,B,K=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let I=R;if(R===i.RED&&(L===i.FLOAT&&(I=i.R32F),L===i.HALF_FLOAT&&(I=i.R16F),L===i.UNSIGNED_BYTE&&(I=i.R8)),R===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.R8UI),L===i.UNSIGNED_SHORT&&(I=i.R16UI),L===i.UNSIGNED_INT&&(I=i.R32UI),L===i.BYTE&&(I=i.R8I),L===i.SHORT&&(I=i.R16I),L===i.INT&&(I=i.R32I)),R===i.RG&&(L===i.FLOAT&&(I=i.RG32F),L===i.HALF_FLOAT&&(I=i.RG16F),L===i.UNSIGNED_BYTE&&(I=i.RG8)),R===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.RG8UI),L===i.UNSIGNED_SHORT&&(I=i.RG16UI),L===i.UNSIGNED_INT&&(I=i.RG32UI),L===i.BYTE&&(I=i.RG8I),L===i.SHORT&&(I=i.RG16I),L===i.INT&&(I=i.RG32I)),R===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.RGB8UI),L===i.UNSIGNED_SHORT&&(I=i.RGB16UI),L===i.UNSIGNED_INT&&(I=i.RGB32UI),L===i.BYTE&&(I=i.RGB8I),L===i.SHORT&&(I=i.RGB16I),L===i.INT&&(I=i.RGB32I)),R===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),L===i.UNSIGNED_INT&&(I=i.RGBA32UI),L===i.BYTE&&(I=i.RGBA8I),L===i.SHORT&&(I=i.RGBA16I),L===i.INT&&(I=i.RGBA32I)),R===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),R===i.RGBA){const F=K?Ko:xe.getTransfer(B);L===i.FLOAT&&(I=i.RGBA32F),L===i.HALF_FLOAT&&(I=i.RGBA16F),L===i.UNSIGNED_BYTE&&(I=F===be?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function _(O,R){let L;return O?R===null||R===as||R===Ys?L=i.DEPTH24_STENCIL8:R===jn?L=i.DEPTH32F_STENCIL8:R===br&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===as||R===Ys?L=i.DEPTH_COMPONENT24:R===jn?L=i.DEPTH_COMPONENT32F:R===br&&(L=i.DEPTH_COMPONENT16),L}function E(O,R){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==wn&&O.minFilter!==bn?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function w(O){const R=O.target;R.removeEventListener("dispose",w),b(R),R.isVideoTexture&&u.delete(R)}function A(O){const R=O.target;R.removeEventListener("dispose",A),M(R)}function b(O){const R=n.get(O);if(R.__webglInit===void 0)return;const L=O.source,B=h.get(L);if(B){const K=B[R.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(O),Object.keys(B).length===0&&h.delete(L)}n.remove(O)}function S(O){const R=n.get(O);i.deleteTexture(R.__webglTexture);const L=O.source,B=h.get(L);delete B[R.__cacheKey],o.memory.textures--}function M(O){const R=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(R.__webglFramebuffer[B]))for(let K=0;K<R.__webglFramebuffer[B].length;K++)i.deleteFramebuffer(R.__webglFramebuffer[B][K]);else i.deleteFramebuffer(R.__webglFramebuffer[B]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[B])}else{if(Array.isArray(R.__webglFramebuffer))for(let B=0;B<R.__webglFramebuffer.length;B++)i.deleteFramebuffer(R.__webglFramebuffer[B]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let B=0;B<R.__webglColorRenderbuffer.length;B++)R.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[B]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const L=O.textures;for(let B=0,K=L.length;B<K;B++){const I=n.get(L[B]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),o.memory.textures--),n.remove(L[B])}n.remove(O)}let T=0;function k(){T=0}function V(){const O=T;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),T+=1,O}function $(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function at(O,R){const L=n.get(O);if(O.isVideoTexture&&Ot(O),O.isRenderTargetTexture===!1&&O.version>0&&L.__version!==O.version){const B=O.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(L,O,R);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+R)}function rt(O,R){const L=n.get(O);if(O.version>0&&L.__version!==O.version){X(L,O,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+R)}function ft(O,R){const L=n.get(O);if(O.version>0&&L.__version!==O.version){X(L,O,R);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+R)}function nt(O,R){const L=n.get(O);if(O.version>0&&L.__version!==O.version){it(L,O,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+R)}const Y={[Fo]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Pc]:i.MIRRORED_REPEAT},U={[wn]:i.NEAREST,[Xp]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},q={[jp]:i.NEVER,[e0]:i.ALWAYS,[$p]:i.LESS,[Sh]:i.LEQUAL,[Zp]:i.EQUAL,[t0]:i.GEQUAL,[Jp]:i.GREATER,[Qp]:i.NOTEQUAL};function j(O,R){if(R.type===jn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===bn||R.magFilter===ca||R.magFilter===Br||R.magFilter===ss||R.minFilter===bn||R.minFilter===ca||R.minFilter===Br||R.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,Y[R.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,Y[R.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,Y[R.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,U[R.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,U[R.minFilter]),R.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,q[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===wn||R.minFilter!==Br&&R.minFilter!==ss||R.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function st(O,R){let L=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",w));const B=R.source;let K=h.get(B);K===void 0&&(K={},h.set(B,K));const I=$(R);if(I!==O.__cacheKey){K[I]===void 0&&(K[I]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),K[I].usedTimes++;const F=K[O.__cacheKey];F!==void 0&&(K[O.__cacheKey].usedTimes--,F.usedTimes===0&&S(R)),O.__cacheKey=I,O.__webglTexture=K[I].texture}return L}function X(O,R,L){let B=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(B=i.TEXTURE_3D);const K=st(O,R),I=R.source;e.bindTexture(B,O.__webglTexture,i.TEXTURE0+L);const F=n.get(I);if(I.version!==F.__version||K===!0){e.activeTexture(i.TEXTURE0+L);const ct=xe.getPrimaries(xe.workingColorSpace),ht=R.colorSpace===ci?null:xe.getPrimaries(R.colorSpace),Lt=R.colorSpace===ci||ct===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let mt=x(R.image,!1,s.maxTextureSize);mt=$t(R,mt);const Rt=r.convert(R.format,R.colorSpace),Ut=r.convert(R.type);let Dt=y(R.internalFormat,Rt,Ut,R.colorSpace,R.isVideoTexture);j(B,R);let Ct;const Vt=R.mipmaps,Wt=R.isVideoTexture!==!0,ie=F.__version===void 0||K===!0,Q=I.dataReady,Mt=E(R,mt);if(R.isDepthTexture)Dt=_(R.format===Ks,R.type),ie&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Dt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,mt.width,mt.height,0,Rt,Ut,null));else if(R.isDataTexture)if(Vt.length>0){Wt&&ie&&e.texStorage2D(i.TEXTURE_2D,Mt,Dt,Vt[0].width,Vt[0].height);for(let dt=0,gt=Vt.length;dt<gt;dt++)Ct=Vt[dt],Wt?Q&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,Rt,Ut,Ct.data):e.texImage2D(i.TEXTURE_2D,dt,Dt,Ct.width,Ct.height,0,Rt,Ut,Ct.data);R.generateMipmaps=!1}else Wt?(ie&&e.texStorage2D(i.TEXTURE_2D,Mt,Dt,mt.width,mt.height),Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,Rt,Ut,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,mt.width,mt.height,0,Rt,Ut,mt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Wt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Dt,Vt[0].width,Vt[0].height,mt.depth);for(let dt=0,gt=Vt.length;dt<gt;dt++)if(Ct=Vt[dt],R.format!==In)if(Rt!==null)if(Wt){if(Q)if(R.layerUpdates.size>0){const Et=$u(Ct.width,Ct.height,R.format,R.type);for(const Z of R.layerUpdates){const pt=Ct.data.subarray(Z*Et/Ct.data.BYTES_PER_ELEMENT,(Z+1)*Et/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Z,Ct.width,Ct.height,1,Rt,pt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Ct.width,Ct.height,mt.depth,Rt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Dt,Ct.width,Ct.height,mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Ct.width,Ct.height,mt.depth,Rt,Ut,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Dt,Ct.width,Ct.height,mt.depth,0,Rt,Ut,Ct.data)}else{Wt&&ie&&e.texStorage2D(i.TEXTURE_2D,Mt,Dt,Vt[0].width,Vt[0].height);for(let dt=0,gt=Vt.length;dt<gt;dt++)Ct=Vt[dt],R.format!==In?Rt!==null?Wt?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,Rt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Dt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?Q&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Ct.width,Ct.height,Rt,Ut,Ct.data):e.texImage2D(i.TEXTURE_2D,dt,Dt,Ct.width,Ct.height,0,Rt,Ut,Ct.data)}else if(R.isDataArrayTexture)if(Wt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Dt,mt.width,mt.height,mt.depth),Q)if(R.layerUpdates.size>0){const dt=$u(mt.width,mt.height,R.format,R.type);for(const gt of R.layerUpdates){const Et=mt.data.subarray(gt*dt/mt.data.BYTES_PER_ELEMENT,(gt+1)*dt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,mt.width,mt.height,1,Rt,Ut,Et)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Rt,Ut,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,mt.width,mt.height,mt.depth,0,Rt,Ut,mt.data);else if(R.isData3DTexture)Wt?(ie&&e.texStorage3D(i.TEXTURE_3D,Mt,Dt,mt.width,mt.height,mt.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Rt,Ut,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,mt.width,mt.height,mt.depth,0,Rt,Ut,mt.data);else if(R.isFramebufferTexture){if(ie)if(Wt)e.texStorage2D(i.TEXTURE_2D,Mt,Dt,mt.width,mt.height);else{let dt=mt.width,gt=mt.height;for(let Et=0;Et<Mt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Dt,dt,gt,0,Rt,Ut,null),dt>>=1,gt>>=1}}else if(Vt.length>0){if(Wt&&ie){const dt=Kt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Dt,dt.width,dt.height)}for(let dt=0,gt=Vt.length;dt<gt;dt++)Ct=Vt[dt],Wt?Q&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Rt,Ut,Ct):e.texImage2D(i.TEXTURE_2D,dt,Dt,Rt,Ut,Ct);R.generateMipmaps=!1}else if(Wt){if(ie){const dt=Kt(mt);e.texStorage2D(i.TEXTURE_2D,Mt,Dt,dt.width,dt.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Ut,mt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Rt,Ut,mt);m(R)&&p(B),F.__version=I.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function it(O,R,L){if(R.image.length!==6)return;const B=st(O,R),K=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+L);const I=n.get(K);if(K.version!==I.__version||B===!0){e.activeTexture(i.TEXTURE0+L);const F=xe.getPrimaries(xe.workingColorSpace),ct=R.colorSpace===ci?null:xe.getPrimaries(R.colorSpace),ht=R.colorSpace===ci||F===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Lt=R.isCompressedTexture||R.image[0].isCompressedTexture,mt=R.image[0]&&R.image[0].isDataTexture,Rt=[];for(let gt=0;gt<6;gt++)!Lt&&!mt?Rt[gt]=x(R.image[gt],!0,s.maxCubemapSize):Rt[gt]=mt?R.image[gt].image:R.image[gt],Rt[gt]=$t(R,Rt[gt]);const Ut=Rt[0],Dt=r.convert(R.format,R.colorSpace),Ct=r.convert(R.type),Vt=y(R.internalFormat,Dt,Ct,R.colorSpace),Wt=R.isVideoTexture!==!0,ie=I.__version===void 0||B===!0,Q=K.dataReady;let Mt=E(R,Ut);j(i.TEXTURE_CUBE_MAP,R);let dt;if(Lt){Wt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Vt,Ut.width,Ut.height);for(let gt=0;gt<6;gt++){dt=Rt[gt].mipmaps;for(let Et=0;Et<dt.length;Et++){const Z=dt[Et];R.format!==In?Dt!==null?Wt?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et,0,0,Z.width,Z.height,Dt,Z.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et,Vt,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et,0,0,Z.width,Z.height,Dt,Ct,Z.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et,Vt,Z.width,Z.height,0,Dt,Ct,Z.data)}}}else{if(dt=R.mipmaps,Wt&&ie){dt.length>0&&Mt++;const gt=Kt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Vt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(mt){Wt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Rt[gt].width,Rt[gt].height,Dt,Ct,Rt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Vt,Rt[gt].width,Rt[gt].height,0,Dt,Ct,Rt[gt].data);for(let Et=0;Et<dt.length;Et++){const pt=dt[Et].image[gt].image;Wt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et+1,0,0,pt.width,pt.height,Dt,Ct,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et+1,Vt,pt.width,pt.height,0,Dt,Ct,pt.data)}}else{Wt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Dt,Ct,Rt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Vt,Dt,Ct,Rt[gt]);for(let Et=0;Et<dt.length;Et++){const Z=dt[Et];Wt?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et+1,0,0,Dt,Ct,Z.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et+1,Vt,Dt,Ct,Z.image[gt])}}}m(R)&&p(i.TEXTURE_CUBE_MAP),I.__version=K.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function _t(O,R,L,B,K,I){const F=r.convert(L.format,L.colorSpace),ct=r.convert(L.type),ht=y(L.internalFormat,F,ct,L.colorSpace),Lt=n.get(R),mt=n.get(L);if(mt.__renderTarget=R,!Lt.__hasExternalTextures){const Rt=Math.max(1,R.width>>I),Ut=Math.max(1,R.height>>I);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,I,ht,Rt,Ut,R.depth,0,F,ct,null):e.texImage2D(K,I,ht,Rt,Ut,0,F,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Yt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,K,mt.__webglTexture,0,zt(R)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,K,mt.__webglTexture,I),e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(O,R,L){if(i.bindRenderbuffer(i.RENDERBUFFER,O),R.depthBuffer){const B=R.depthTexture,K=B&&B.isDepthTexture?B.type:null,I=_(R.stencilBuffer,K),F=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=zt(R);Yt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,I,R.width,R.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,I,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,I,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,O)}else{const B=R.textures;for(let K=0;K<B.length;K++){const I=B[K],F=r.convert(I.format,I.colorSpace),ct=r.convert(I.type),ht=y(I.internalFormat,F,ct,I.colorSpace),Lt=zt(R);L&&Yt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ht,R.width,R.height):Yt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,ht,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ht,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(R.depthTexture);B.__renderTarget=R,(!B.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),at(R.depthTexture,0);const K=B.__webglTexture,I=zt(R);if(R.depthTexture.format===ks)Yt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(R.depthTexture.format===Ks)Yt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function lt(O){const R=n.get(O),L=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){const B=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),B){const K=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,B.removeEventListener("dispose",K)};B.addEventListener("dispose",K),R.__depthDisposeCallback=K}R.__boundDepthTexture=B}if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");et(R.__webglFramebuffer,O)}else if(L){R.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[B]),R.__webglDepthbuffer[B]===void 0)R.__webglDepthbuffer[B]=i.createRenderbuffer(),W(R.__webglDepthbuffer[B],O,!1);else{const K=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=R.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,I)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),W(R.__webglDepthbuffer,O,!1);else{const B=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(O,R,L){const B=n.get(O);R!==void 0&&_t(B.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&lt(O)}function Ft(O){const R=O.texture,L=n.get(O),B=n.get(R);O.addEventListener("dispose",A);const K=O.textures,I=O.isWebGLCubeRenderTarget===!0,F=K.length>1;if(F||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=R.version,o.memory.textures++),I){L.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(R.mipmaps&&R.mipmaps.length>0){L.__webglFramebuffer[ct]=[];for(let ht=0;ht<R.mipmaps.length;ht++)L.__webglFramebuffer[ct][ht]=i.createFramebuffer()}else L.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){L.__webglFramebuffer=[];for(let ct=0;ct<R.mipmaps.length;ct++)L.__webglFramebuffer[ct]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(F)for(let ct=0,ht=K.length;ct<ht;ct++){const Lt=n.get(K[ct]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Yt(O)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ct=0;ct<K.length;ct++){const ht=K[ct];L.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ct]);const Lt=r.convert(ht.format,ht.colorSpace),mt=r.convert(ht.type),Rt=y(ht.internalFormat,Lt,mt,ht.colorSpace,O.isXRRenderTarget===!0),Ut=zt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Rt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,L.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),W(L.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(I){e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),j(i.TEXTURE_CUBE_MAP,R);for(let ct=0;ct<6;ct++)if(R.mipmaps&&R.mipmaps.length>0)for(let ht=0;ht<R.mipmaps.length;ht++)_t(L.__webglFramebuffer[ct][ht],O,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else _t(L.__webglFramebuffer[ct],O,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(R)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(F){for(let ct=0,ht=K.length;ct<ht;ct++){const Lt=K[ct],mt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),j(i.TEXTURE_2D,Lt),_t(L.__webglFramebuffer,O,Lt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Lt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ct=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,B.__webglTexture),j(ct,R),R.mipmaps&&R.mipmaps.length>0)for(let ht=0;ht<R.mipmaps.length;ht++)_t(L.__webglFramebuffer[ht],O,R,i.COLOR_ATTACHMENT0,ct,ht);else _t(L.__webglFramebuffer,O,R,i.COLOR_ATTACHMENT0,ct,0);m(R)&&p(ct),e.unbindTexture()}O.depthBuffer&&lt(O)}function N(O){const R=O.textures;for(let L=0,B=R.length;L<B;L++){const K=R[L];if(m(K)){const I=v(O),F=n.get(K).__webglTexture;e.bindTexture(I,F),p(I),e.unbindTexture()}}}const ot=[],H=[];function tt(O){if(O.samples>0){if(Yt(O)===!1){const R=O.textures,L=O.width,B=O.height;let K=i.COLOR_BUFFER_BIT;const I=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=n.get(O),ct=R.length>1;if(ct)for(let ht=0;ht<R.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let ht=0;ht<R.length;ht++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);const Lt=n.get(R[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,L,B,0,0,L,B,K,i.NEAREST),c===!0&&(ot.length=0,H.length=0,ot.push(i.COLOR_ATTACHMENT0+ht),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ot.push(I),H.push(I),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let ht=0;ht<R.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);const Lt=n.get(R[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){const R=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function zt(O){return Math.min(s.maxSamples,O.samples)}function Yt(O){const R=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ot(O){const R=o.render.frame;u.get(O)!==R&&(u.set(O,R),O.update())}function $t(O,R){const L=O.colorSpace,B=O.format,K=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||L!==Js&&L!==ci&&(xe.getTransfer(L)===be?(B!==In||K!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),R}function Kt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=at,this.setTexture2DArray=rt,this.setTexture3D=ft,this.setTextureCube=nt,this.rebindTextures=yt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Yt}function y_(i,t){function e(n,s=ci){let r;const o=xe.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.BYTE;if(n===ph)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Rr)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===xh)return i.RGB;if(n===In)return i.RGBA;if(n===vh)return i.LUMINANCE;if(n===_h)return i.LUMINANCE_ALPHA;if(n===ks)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Mh)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===wo||n===Eo||n===Ao||n===To)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lc||n===Dc||n===Ic||n===zc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Nc||n===Fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uc||n===Nc)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oc||n===kc||n===Bc||n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===Kc||n===jc||n===$c||n===Zc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Jc||n===Qc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yh||n===tl||n===el||n===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class S_ extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rs extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b_={type:"move"};class Ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`;class A_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mn({vertexShader:w_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T_ extends Qs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const x=new A_,m=e.getContextAttributes();let p=null,v=null;const y=[],_=[],E=new jt;let w=null;const A=new _n;A.viewport=new Le;const b=new _n;b.viewport=new Le;const S=[A,b],M=new S_;let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let it=y[X];return it===void 0&&(it=new Ua,y[X]=it),it.getTargetRaySpace()},this.getControllerGrip=function(X){let it=y[X];return it===void 0&&(it=new Ua,y[X]=it),it.getGripSpace()},this.getHand=function(X){let it=y[X];return it===void 0&&(it=new Ua,y[X]=it),it.getHandSpace()};function V(X){const it=_.indexOf(X.inputSource);if(it===-1)return;const _t=y[it];_t!==void 0&&(_t.update(X.inputSource,X.frame,l||o),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",at);for(let X=0;X<y.length;X++){const it=_[X];it!==null&&(_[X]=null,y[X].disconnect(it))}T=null,k=null,x.reset(),t.setRenderTarget(p),f=null,h=null,d=null,s=null,v=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",$),s.addEventListener("inputsourceschange",at),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new cs(f.framebufferWidth,f.framebufferHeight,{format:In,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,_t=null,W=null;m.depth&&(W=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Ks:ks,_t=m.stencil?Ys:as);const et={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(et),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new cs(h.textureWidth,h.textureHeight,{format:In,type:Zn,depthTexture:new Nh(h.textureWidth,h.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function at(X){for(let it=0;it<X.removed.length;it++){const _t=X.removed[it],W=_.indexOf(_t);W>=0&&(_[W]=null,y[W].disconnect(_t))}for(let it=0;it<X.added.length;it++){const _t=X.added[it];let W=_.indexOf(_t);if(W===-1){for(let lt=0;lt<y.length;lt++)if(lt>=_.length){_.push(_t),W=lt;break}else if(_[lt]===null){_[lt]=_t,W=lt;break}if(W===-1)break}const et=y[W];et&&et.connect(_t)}}const rt=new J,ft=new J;function nt(X,it,_t){rt.setFromMatrixPosition(it.matrixWorld),ft.setFromMatrixPosition(_t.matrixWorld);const W=rt.distanceTo(ft),et=it.projectionMatrix.elements,lt=_t.projectionMatrix.elements,yt=et[14]/(et[10]-1),Ft=et[14]/(et[10]+1),N=(et[9]+1)/et[5],ot=(et[9]-1)/et[5],H=(et[8]-1)/et[0],tt=(lt[8]+1)/lt[0],zt=yt*H,Yt=yt*tt,Ot=W/(-H+tt),$t=Ot*-H;if(it.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($t),X.translateZ(Ot),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),et[10]===-1)X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Kt=yt+Ot,O=Ft+Ot,R=zt-$t,L=Yt+(W-$t),B=N*Ft/O*Kt,K=ot*Ft/O*Kt;X.projectionMatrix.makePerspective(R,L,B,K,Kt,O),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Y(X,it){it===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(it.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let it=X.near,_t=X.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),M.near=b.near=A.near=it,M.far=b.far=A.far=_t,(T!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,k=M.far),A.layers.mask=X.layers.mask|2,b.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|b.layers.mask;const W=X.parent,et=M.cameras;Y(M,W);for(let lt=0;lt<et.length;lt++)Y(et[lt],W);et.length===2?nt(M,A,b):M.projectionMatrix.copy(A.projectionMatrix),U(X,M,W)};function U(X,it,_t){_t===null?X.matrix.copy(it.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(it.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(it.projectionMatrix),X.projectionMatrixInverse.copy(it.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=wr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let q=null;function j(X,it){if(u=it.getViewerPose(l||o),g=it,u!==null){const _t=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let W=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,W=!0);for(let lt=0;lt<_t.length;lt++){const yt=_t[lt];let Ft=null;if(f!==null)Ft=f.getViewport(yt);else{const ot=d.getViewSubImage(h,yt);Ft=ot.viewport,lt===0&&(t.setRenderTargetTextures(v,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(v))}let N=S[lt];N===void 0&&(N=new _n,N.layers.enable(lt),N.viewport=new Le,S[lt]=N),N.matrix.fromArray(yt.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(yt.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),lt===0&&(M.matrix.copy(N.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),W===!0&&M.cameras.push(N)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")){const lt=d.getDepthInformation(_t[0]);lt&&lt.isValid&&lt.texture&&x.init(t,lt,s.renderState)}}for(let _t=0;_t<y.length;_t++){const W=_[_t],et=y[_t];W!==null&&et!==void 0&&et.update(W,it,l||o)}q&&q(X,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const st=new zh;st.setAnimationLoop(j),this.setAnimationLoop=function(X){q=X},this.dispose=function(){}}}const Ki=new En,C_=new ve;function R_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Ki.copy(_),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(C_.makeRotationFromEuler(Ki)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(g(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(v,E);const w=t.render.frame;r[v.id]!==w&&(h(v),r[v.id]=w)}function u(v){const y=d();v.__bindingPointIndex=y;const _=i.createBuffer(),E=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=s[v.id],_=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,A=_.length;w<A;w++){const b=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,M=b.length;S<M;S++){const T=b[S];if(f(T,w,S,E)===!0){const k=T.__offset,V=Array.isArray(T.value)?T.value:[T.value];let $=0;for(let at=0;at<V.length;at++){const rt=V[at],ft=x(rt);typeof rt=="number"||typeof rt=="boolean"?(T.__data[0]=rt,i.bufferSubData(i.UNIFORM_BUFFER,k+$,T.__data)):rt.isMatrix3?(T.__data[0]=rt.elements[0],T.__data[1]=rt.elements[1],T.__data[2]=rt.elements[2],T.__data[3]=0,T.__data[4]=rt.elements[3],T.__data[5]=rt.elements[4],T.__data[6]=rt.elements[5],T.__data[7]=0,T.__data[8]=rt.elements[6],T.__data[9]=rt.elements[7],T.__data[10]=rt.elements[8],T.__data[11]=0):(rt.toArray(T.__data,$),$+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,E){const w=v.value,A=y+"_"+_;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{const b=E[A];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return E[A]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function g(v){const y=v.uniforms;let _=0;const E=16;for(let A=0,b=y.length;A<b;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,T=S.length;M<T;M++){const k=S[M],V=Array.isArray(k.value)?k.value:[k.value];for(let $=0,at=V.length;$<at;$++){const rt=V[$],ft=x(rt),nt=_%E,Y=nt%ft.boundary,U=nt+Y;_+=Y,U!==0&&E-U<ft.storage&&(_+=E-U),k.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=ft.storage}}}const w=_%E;return w>0&&(_+=E-w),v.__size=_,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class L_{constructor(t={}){const{canvas:e=v0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=Ui,this.toneMappingExposure=1;const _=this;let E=!1,w=0,A=0,b=null,S=-1,M=null;const T=new Le,k=new Le;let V=null;const $=new se(0);let at=0,rt=e.width,ft=e.height,nt=1,Y=null,U=null;const q=new Le(0,0,rt,ft),j=new Le(0,0,rt,ft);let st=!1;const X=new Sl;let it=!1,_t=!1;const W=new ve,et=new ve,lt=new J,yt=new Le,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let N=!1;function ot(){return b===null?nt:1}let H=n;function tt(D,P){return e.getContext(D,P)}try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hl}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Z,!1),H===null){const P="webgl2";if(H=tt(P,D),H===null)throw tt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let zt,Yt,Ot,$t,Kt,O,R,L,B,K,I,F,ct,ht,Lt,mt,Rt,Ut,Dt,Ct,Vt,Wt,ie,Q;function Mt(){zt=new Nx(H),zt.init(),Wt=new y_(H,zt),Yt=new Px(H,zt,t,Wt),Ot=new v_(H,zt),Yt.reverseDepthBuffer&&h&&Ot.buffers.depth.setReversed(!0),$t=new kx(H),Kt=new i_,O=new M_(H,zt,Ot,Kt,Yt,Wt,$t),R=new Dx(_),L=new Ux(_),B=new q0(H),ie=new Cx(H,B),K=new Fx(H,B,$t,ie),I=new Hx(H,K,B,$t),Dt=new Bx(H,Yt,O),mt=new Lx(Kt),F=new n_(_,R,L,zt,Yt,ie,mt),ct=new R_(_,Kt),ht=new r_,Lt=new f_(zt),Ut=new Tx(_,R,L,Ot,I,f,c),Rt=new g_(_,I,Yt),Q=new P_(H,$t,Yt,Ot),Ct=new Rx(H,zt,$t),Vt=new Ox(H,zt,$t),$t.programs=F.programs,_.capabilities=Yt,_.extensions=zt,_.properties=Kt,_.renderLists=ht,_.shadowMap=Rt,_.state=Ot,_.info=$t}Mt();const dt=new T_(_,H);this.xr=dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const D=zt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=zt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(D){D!==void 0&&(nt=D,this.setSize(rt,ft,!1))},this.getSize=function(D){return D.set(rt,ft)},this.setSize=function(D,P,C=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}rt=D,ft=P,e.width=Math.floor(D*nt),e.height=Math.floor(P*nt),C===!0&&(e.style.width=D+"px",e.style.height=P+"px"),this.setViewport(0,0,D,P)},this.getDrawingBufferSize=function(D){return D.set(rt*nt,ft*nt).floor()},this.setDrawingBufferSize=function(D,P,C){rt=D,ft=P,nt=C,e.width=Math.floor(D*C),e.height=Math.floor(P*C),this.setViewport(0,0,D,P)},this.getCurrentViewport=function(D){return D.copy(T)},this.getViewport=function(D){return D.copy(q)},this.setViewport=function(D,P,C,G){D.isVector4?q.set(D.x,D.y,D.z,D.w):q.set(D,P,C,G),Ot.viewport(T.copy(q).multiplyScalar(nt).round())},this.getScissor=function(D){return D.copy(j)},this.setScissor=function(D,P,C,G){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,P,C,G),Ot.scissor(k.copy(j).multiplyScalar(nt).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(D){Ot.setScissorTest(st=D)},this.setOpaqueSort=function(D){Y=D},this.setTransparentSort=function(D){U=D},this.getClearColor=function(D){return D.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(D=!0,P=!0,C=!0){let G=0;if(D){let z=!1;if(b!==null){const ut=b.texture.format;z=ut===Ml||ut===_l||ut===vl}if(z){const ut=b.texture.type,vt=ut===Zn||ut===as||ut===br||ut===Ys||ut===ml||ut===gl,St=Ut.getClearColor(),At=Ut.getClearAlpha(),Nt=St.r,kt=St.g,It=St.b;vt?(g[0]=Nt,g[1]=kt,g[2]=It,g[3]=At,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=Nt,x[1]=kt,x[2]=It,x[3]=At,H.clearBufferiv(H.COLOR,0,x))}else G|=H.COLOR_BUFFER_BIT}P&&(G|=H.DEPTH_BUFFER_BIT),C&&(G|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),ht.dispose(),Lt.dispose(),Kt.dispose(),R.dispose(),L.dispose(),I.dispose(),ie.dispose(),Q.dispose(),F.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ae),dt.removeEventListener("sessionend",ce),fe.stop()};function gt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const D=$t.autoReset,P=Rt.enabled,C=Rt.autoUpdate,G=Rt.needsUpdate,z=Rt.type;Mt(),$t.autoReset=D,Rt.enabled=P,Rt.autoUpdate=C,Rt.needsUpdate=G,Rt.type=z}function Z(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function pt(D){const P=D.target;P.removeEventListener("dispose",pt),wt(P)}function wt(D){Tt(D),Kt.remove(D)}function Tt(D){const P=Kt.get(D).programs;P!==void 0&&(P.forEach(function(C){F.releaseProgram(C)}),D.isShaderMaterial&&F.releaseShaderCache(D))}this.renderBufferDirect=function(D,P,C,G,z,ut){P===null&&(P=Ft);const vt=z.isMesh&&z.matrixWorld.determinant()<0,St=fn(D,P,C,G,z);Ot.setMaterial(G,vt);let At=C.index,Nt=1;if(G.wireframe===!0){if(At=K.getWireframeAttribute(C),At===void 0)return;Nt=2}const kt=C.drawRange,It=C.attributes.position;let Zt=kt.start*Nt,xt=(kt.start+kt.count)*Nt;ut!==null&&(Zt=Math.max(Zt,ut.start*Nt),xt=Math.min(xt,(ut.start+ut.count)*Nt)),At!==null?(Zt=Math.max(Zt,0),xt=Math.min(xt,At.count)):It!=null&&(Zt=Math.max(Zt,0),xt=Math.min(xt,It.count));const te=xt-Zt;if(te<0||te===1/0)return;ie.setup(z,G,St,C,At);let ne,ee=Ct;if(At!==null&&(ne=B.get(At),ee=Vt,ee.setIndex(ne)),z.isMesh)G.wireframe===!0?(Ot.setLineWidth(G.wireframeLinewidth*ot()),ee.setMode(H.LINES)):ee.setMode(H.TRIANGLES);else if(z.isLine){let Xt=G.linewidth;Xt===void 0&&(Xt=1),Ot.setLineWidth(Xt*ot()),z.isLineSegments?ee.setMode(H.LINES):z.isLineLoop?ee.setMode(H.LINE_LOOP):ee.setMode(H.LINE_STRIP)}else z.isPoints?ee.setMode(H.POINTS):z.isSprite&&ee.setMode(H.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ee.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ee.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Xt=z._multiDrawStarts,pe=z._multiDrawCounts,Ht=z._multiDrawCount,Me=At?B.get(At).bytesPerElement:1,Fe=Kt.get(G).currentProgram.getUniforms();for(let Pe=0;Pe<Ht;Pe++)Fe.setValue(H,"_gl_DrawID",Pe),ee.render(Xt[Pe]/Me,pe[Pe])}else if(z.isInstancedMesh)ee.renderInstances(Zt,te,z.count);else if(C.isInstancedBufferGeometry){const Xt=C._maxInstanceCount!==void 0?C._maxInstanceCount:1/0,pe=Math.min(C.instanceCount,Xt);ee.renderInstances(Zt,te,pe)}else ee.render(Zt,te)};function Pt(D,P,C){D.transparent===!0&&D.side===Mn&&D.forceSinglePass===!1?(D.side=pn,D.needsUpdate=!0,Ce(D,P,C),D.side=Oi,D.needsUpdate=!0,Ce(D,P,C),D.side=Mn):Ce(D,P,C)}this.compile=function(D,P,C=null){C===null&&(C=D),p=Lt.get(C),p.init(P),y.push(p),C.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),D!==C&&D.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const G=new Set;return D.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ut=z.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){const St=ut[vt];Pt(St,C,z),G.add(St)}else Pt(ut,C,z),G.add(ut)}),y.pop(),p=null,G},this.compileAsync=function(D,P,C=null){const G=this.compile(D,P,C);return new Promise(z=>{function ut(){if(G.forEach(function(vt){Kt.get(vt).currentProgram.isReady()&&G.delete(vt)}),G.size===0){z(D);return}setTimeout(ut,10)}zt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Jt=null;function qt(D){Jt&&Jt(D)}function ae(){fe.stop()}function ce(){fe.start()}const fe=new zh;fe.setAnimationLoop(qt),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(D){Jt=D,dt.setAnimationLoop(D),D===null?fe.stop():fe.start()},dt.addEventListener("sessionstart",ae),dt.addEventListener("sessionend",ce),this.render=function(D,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(P),P=dt.getCamera()),D.isScene===!0&&D.onBeforeRender(_,D,P,b),p=Lt.get(D,y.length),p.init(P),y.push(p),et.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(et),_t=this.localClippingEnabled,it=mt.init(this.clippingPlanes,_t),m=ht.get(D,v.length),m.init(),v.push(m),dt.enabled===!0&&dt.isPresenting===!0){const ut=_.xr.getDepthSensingMesh();ut!==null&&Se(ut,P,-1/0,_.sortObjects)}Se(D,P,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Y,U),N=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,N&&Ut.addToRenderList(m,D),this.info.render.frame++,it===!0&&mt.beginShadows();const C=p.state.shadowsArray;Rt.render(C,D,P),it===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,z=m.transmissive;if(p.setupLights(),P.isArrayCamera){const ut=P.cameras;if(z.length>0)for(let vt=0,St=ut.length;vt<St;vt++){const At=ut[vt];re(G,z,D,At)}N&&Ut.render(D);for(let vt=0,St=ut.length;vt<St;vt++){const At=ut[vt];_e(m,D,At,At.viewport)}}else z.length>0&&re(G,z,D,P),N&&Ut.render(D),_e(m,D,P);b!==null&&(O.updateMultisampleRenderTarget(b),O.updateRenderTargetMipmap(b)),D.isScene===!0&&D.onAfterRender(_,D,P),ie.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],it===!0&&mt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Se(D,P,C,G){if(D.visible===!1)return;if(D.layers.test(P.layers)){if(D.isGroup)C=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(P);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||X.intersectsSprite(D)){G&&yt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(et);const vt=I.update(D),St=D.material;St.visible&&m.push(D,vt,St,C,yt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||X.intersectsObject(D))){const vt=I.update(D),St=D.material;if(G&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),yt.copy(D.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),yt.copy(vt.boundingSphere.center)),yt.applyMatrix4(D.matrixWorld).applyMatrix4(et)),Array.isArray(St)){const At=vt.groups;for(let Nt=0,kt=At.length;Nt<kt;Nt++){const It=At[Nt],Zt=St[It.materialIndex];Zt&&Zt.visible&&m.push(D,vt,Zt,C,yt.z,It)}}else St.visible&&m.push(D,vt,St,C,yt.z,null)}}const ut=D.children;for(let vt=0,St=ut.length;vt<St;vt++)Se(ut[vt],P,C,G)}function _e(D,P,C,G){const z=D.opaque,ut=D.transmissive,vt=D.transparent;p.setupLightsView(C),it===!0&&mt.setGlobalState(_.clippingPlanes,C),G&&Ot.viewport(T.copy(G)),z.length>0&&Ee(z,P,C),ut.length>0&&Ee(ut,P,C),vt.length>0&&Ee(vt,P,C),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function re(D,P,C,G){if((C.isScene===!0?C.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new cs(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Rr:Zn,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const ut=p.state.transmissionRenderTarget[G.id],vt=G.viewport||T;ut.setSize(vt.z,vt.w);const St=_.getRenderTarget();_.setRenderTarget(ut),_.getClearColor($),at=_.getClearAlpha(),at<1&&_.setClearColor(16777215,.5),_.clear(),N&&Ut.render(C);const At=_.toneMapping;_.toneMapping=Ui;const Nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),it===!0&&mt.setGlobalState(_.clippingPlanes,G),Ee(D,C,G),O.updateMultisampleRenderTarget(ut),O.updateRenderTargetMipmap(ut),zt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let It=0,Zt=P.length;It<Zt;It++){const xt=P[It],te=xt.object,ne=xt.geometry,ee=xt.material,Xt=xt.group;if(ee.side===Mn&&te.layers.test(G.layers)){const pe=ee.side;ee.side=pn,ee.needsUpdate=!0,oe(te,C,G,ne,ee,Xt),ee.side=pe,ee.needsUpdate=!0,kt=!0}}kt===!0&&(O.updateMultisampleRenderTarget(ut),O.updateRenderTargetMipmap(ut))}_.setRenderTarget(St),_.setClearColor($,at),Nt!==void 0&&(G.viewport=Nt),_.toneMapping=At}function Ee(D,P,C){const G=P.isScene===!0?P.overrideMaterial:null;for(let z=0,ut=D.length;z<ut;z++){const vt=D[z],St=vt.object,At=vt.geometry,Nt=G===null?vt.material:G,kt=vt.group;St.layers.test(C.layers)&&oe(St,P,C,At,Nt,kt)}}function oe(D,P,C,G,z,ut){D.onBeforeRender(_,P,C,G,z,ut),D.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),z.onBeforeRender(_,P,C,G,D,ut),z.transparent===!0&&z.side===Mn&&z.forceSinglePass===!1?(z.side=pn,z.needsUpdate=!0,_.renderBufferDirect(C,P,G,z,D,ut),z.side=Oi,z.needsUpdate=!0,_.renderBufferDirect(C,P,G,z,D,ut),z.side=Mn):_.renderBufferDirect(C,P,G,z,D,ut),D.onAfterRender(_,P,C,G,z,ut)}function Ce(D,P,C){P.isScene!==!0&&(P=Ft);const G=Kt.get(D),z=p.state.lights,ut=p.state.shadowsArray,vt=z.state.version,St=F.getParameters(D,z.state,ut,P,C),At=F.getProgramCacheKey(St);let Nt=G.programs;G.environment=D.isMeshStandardMaterial?P.environment:null,G.fog=P.fog,G.envMap=(D.isMeshStandardMaterial?L:R).get(D.envMap||G.environment),G.envMapRotation=G.environment!==null&&D.envMap===null?P.environmentRotation:D.envMapRotation,Nt===void 0&&(D.addEventListener("dispose",pt),Nt=new Map,G.programs=Nt);let kt=Nt.get(At);if(kt!==void 0){if(G.currentProgram===kt&&G.lightsStateVersion===vt)return Ve(D,St),kt}else St.uniforms=F.getUniforms(D),D.onBeforeCompile(St,_),kt=F.acquireProgram(St,At),Nt.set(At,kt),G.uniforms=St.uniforms;const It=G.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(It.clippingPlanes=mt.uniform),Ve(D,St),G.needsLights=An(D),G.lightsStateVersion=vt,G.needsLights&&(It.ambientLightColor.value=z.state.ambient,It.lightProbe.value=z.state.probe,It.directionalLights.value=z.state.directional,It.directionalLightShadows.value=z.state.directionalShadow,It.spotLights.value=z.state.spot,It.spotLightShadows.value=z.state.spotShadow,It.rectAreaLights.value=z.state.rectArea,It.ltc_1.value=z.state.rectAreaLTC1,It.ltc_2.value=z.state.rectAreaLTC2,It.pointLights.value=z.state.point,It.pointLightShadows.value=z.state.pointShadow,It.hemisphereLights.value=z.state.hemi,It.directionalShadowMap.value=z.state.directionalShadowMap,It.directionalShadowMatrix.value=z.state.directionalShadowMatrix,It.spotShadowMap.value=z.state.spotShadowMap,It.spotLightMatrix.value=z.state.spotLightMatrix,It.spotLightMap.value=z.state.spotLightMap,It.pointShadowMap.value=z.state.pointShadowMap,It.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=kt,G.uniformsList=null,kt}function un(D){if(D.uniformsList===null){const P=D.currentProgram.getUniforms();D.uniformsList=Ro.seqWithValue(P.seq,D.uniforms)}return D.uniformsList}function Ve(D,P){const C=Kt.get(D);C.outputColorSpace=P.outputColorSpace,C.batching=P.batching,C.batchingColor=P.batchingColor,C.instancing=P.instancing,C.instancingColor=P.instancingColor,C.instancingMorph=P.instancingMorph,C.skinning=P.skinning,C.morphTargets=P.morphTargets,C.morphNormals=P.morphNormals,C.morphColors=P.morphColors,C.morphTargetsCount=P.morphTargetsCount,C.numClippingPlanes=P.numClippingPlanes,C.numIntersection=P.numClipIntersection,C.vertexAlphas=P.vertexAlphas,C.vertexTangents=P.vertexTangents,C.toneMapping=P.toneMapping}function fn(D,P,C,G,z){P.isScene!==!0&&(P=Ft),O.resetTextureUnits();const ut=P.fog,vt=G.isMeshStandardMaterial?P.environment:null,St=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Js,At=(G.isMeshStandardMaterial?L:R).get(G.envMap||vt),Nt=G.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,kt=!!C.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!C.morphAttributes.position,Zt=!!C.morphAttributes.normal,xt=!!C.morphAttributes.color;let te=Ui;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(te=_.toneMapping);const ne=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ee=ne!==void 0?ne.length:0,Xt=Kt.get(G),pe=p.state.lights;if(it===!0&&(_t===!0||D!==M)){const Tn=D===M&&G.id===S;mt.setState(G,D,Tn)}let Ht=!1;G.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==pe.state.version||Xt.outputColorSpace!==St||z.isBatchedMesh&&Xt.batching===!1||!z.isBatchedMesh&&Xt.batching===!0||z.isBatchedMesh&&Xt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Xt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Xt.instancing===!1||!z.isInstancedMesh&&Xt.instancing===!0||z.isSkinnedMesh&&Xt.skinning===!1||!z.isSkinnedMesh&&Xt.skinning===!0||z.isInstancedMesh&&Xt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Xt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Xt.instancingMorph===!1&&z.morphTexture!==null||Xt.envMap!==At||G.fog===!0&&Xt.fog!==ut||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==mt.numPlanes||Xt.numIntersection!==mt.numIntersection)||Xt.vertexAlphas!==Nt||Xt.vertexTangents!==kt||Xt.morphTargets!==It||Xt.morphNormals!==Zt||Xt.morphColors!==xt||Xt.toneMapping!==te||Xt.morphTargetsCount!==ee)&&(Ht=!0):(Ht=!0,Xt.__version=G.version);let Me=Xt.currentProgram;Ht===!0&&(Me=Ce(G,P,z));let Fe=!1,Pe=!1,Ie=!1;const ye=Me.getUniforms(),Gn=Xt.uniforms;if(Ot.useProgram(Me.program)&&(Fe=!0,Pe=!0,Ie=!0),G.id!==S&&(S=G.id,Pe=!0),Fe||M!==D){Ot.buffers.depth.getReversed()?(W.copy(D.projectionMatrix),M0(W),y0(W),ye.setValue(H,"projectionMatrix",W)):ye.setValue(H,"projectionMatrix",D.projectionMatrix),ye.setValue(H,"viewMatrix",D.matrixWorldInverse);const vi=ye.map.cameraPosition;vi!==void 0&&vi.setValue(H,lt.setFromMatrixPosition(D.matrixWorld)),Yt.logarithmicDepthBuffer&&ye.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ye.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),M!==D&&(M=D,Pe=!0,Ie=!0)}if(z.isSkinnedMesh){ye.setOptional(H,z,"bindMatrix"),ye.setOptional(H,z,"bindMatrixInverse");const Tn=z.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),ye.setValue(H,"boneTexture",Tn.boneTexture,O))}z.isBatchedMesh&&(ye.setOptional(H,z,"batchingTexture"),ye.setValue(H,"batchingTexture",z._matricesTexture,O),ye.setOptional(H,z,"batchingIdTexture"),ye.setValue(H,"batchingIdTexture",z._indirectTexture,O),ye.setOptional(H,z,"batchingColorTexture"),z._colorsTexture!==null&&ye.setValue(H,"batchingColorTexture",z._colorsTexture,O));const ir=C.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&Dt.update(z,C,Me),(Pe||Xt.receiveShadow!==z.receiveShadow)&&(Xt.receiveShadow=z.receiveShadow,ye.setValue(H,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Gn.envMap.value=At,Gn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&P.environment!==null&&(Gn.envMapIntensity.value=P.environmentIntensity),Pe&&(ye.setValue(H,"toneMappingExposure",_.toneMappingExposure),Xt.needsLights&&Ke(Gn,Ie),ut&&G.fog===!0&&ct.refreshFogUniforms(Gn,ut),ct.refreshMaterialUniforms(Gn,G,nt,ft,p.state.transmissionRenderTarget[D.id]),Ro.upload(H,un(Xt),Gn,O)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ro.upload(H,un(Xt),Gn,O),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ye.setValue(H,"center",z.center),ye.setValue(H,"modelViewMatrix",z.modelViewMatrix),ye.setValue(H,"normalMatrix",z.normalMatrix),ye.setValue(H,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Tn=G.uniformsGroups;for(let vi=0,_i=Tn.length;vi<_i;vi++){const Ul=Tn[vi];Q.update(Ul,Me),Q.bind(Ul,Me)}}return Me}function Ke(D,P){D.ambientLightColor.needsUpdate=P,D.lightProbe.needsUpdate=P,D.directionalLights.needsUpdate=P,D.directionalLightShadows.needsUpdate=P,D.pointLights.needsUpdate=P,D.pointLightShadows.needsUpdate=P,D.spotLights.needsUpdate=P,D.spotLightShadows.needsUpdate=P,D.rectAreaLights.needsUpdate=P,D.hemisphereLights.needsUpdate=P}function An(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(D,P,C){Kt.get(D.texture).__webglTexture=P,Kt.get(D.depthTexture).__webglTexture=C;const G=Kt.get(D);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=C===void 0,G.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,P){const C=Kt.get(D);C.__webglFramebuffer=P,C.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(D,P=0,C=0){b=D,w=P,A=C;let G=!0,z=null,ut=!1,vt=!1;if(D){const At=Kt.get(D);if(At.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(H.FRAMEBUFFER,null),G=!1;else if(At.__webglFramebuffer===void 0)O.setupRenderTarget(D);else if(At.__hasExternalTextures)O.rebindTextures(D,Kt.get(D.texture).__webglTexture,Kt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const It=D.depthTexture;if(At.__boundDepthTexture!==It){if(It!==null&&Kt.has(It)&&(D.width!==It.image.width||D.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(D)}}const Nt=D.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);const kt=Kt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(kt[P])?z=kt[P][C]:z=kt[P],ut=!0):D.samples>0&&O.useMultisampledRTT(D)===!1?z=Kt.get(D).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[C]:z=kt,T.copy(D.viewport),k.copy(D.scissor),V=D.scissorTest}else T.copy(q).multiplyScalar(nt).floor(),k.copy(j).multiplyScalar(nt).floor(),V=st;if(Ot.bindFramebuffer(H.FRAMEBUFFER,z)&&G&&Ot.drawBuffers(D,z),Ot.viewport(T),Ot.scissor(k),Ot.setScissorTest(V),ut){const At=Kt.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+P,At.__webglTexture,C)}else if(vt){const At=Kt.get(D.texture),Nt=P||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,At.__webglTexture,C||0,Nt)}S=-1},this.readRenderTargetPixels=function(D,P,C,G,z,ut,vt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){Ot.bindFramebuffer(H.FRAMEBUFFER,St);try{const At=D.texture,Nt=At.format,kt=At.type;if(!Yt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=D.width-G&&C>=0&&C<=D.height-z&&H.readPixels(P,C,G,z,Wt.convert(Nt),Wt.convert(kt),ut)}finally{const At=b!==null?Kt.get(b).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(D,P,C,G,z,ut,vt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){const At=D.texture,Nt=At.format,kt=At.type;if(!Yt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=D.width-G&&C>=0&&C<=D.height-z){Ot.bindFramebuffer(H.FRAMEBUFFER,St);const It=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,It),H.bufferData(H.PIXEL_PACK_BUFFER,ut.byteLength,H.STREAM_READ),H.readPixels(P,C,G,z,Wt.convert(Nt),Wt.convert(kt),0);const Zt=b!==null?Kt.get(b).__webglFramebuffer:null;Ot.bindFramebuffer(H.FRAMEBUFFER,Zt);const xt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _0(H,xt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,It),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ut),H.deleteBuffer(It),H.deleteSync(xt),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,P=null,C=0){D.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,D=arguments[1]);const G=Math.pow(2,-C),z=Math.floor(D.image.width*G),ut=Math.floor(D.image.height*G),vt=P!==null?P.x:0,St=P!==null?P.y:0;O.setTexture2D(D,0),H.copyTexSubImage2D(H.TEXTURE_2D,C,0,0,vt,St,z,ut),Ot.unbindTexture()},this.copyTextureToTexture=function(D,P,C=null,G=null,z=0){D.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,D=arguments[1],P=arguments[2],z=arguments[3]||0,C=null);let ut,vt,St,At,Nt,kt,It,Zt,xt;const te=D.isCompressedTexture?D.mipmaps[z]:D.image;C!==null?(ut=C.max.x-C.min.x,vt=C.max.y-C.min.y,St=C.isBox3?C.max.z-C.min.z:1,At=C.min.x,Nt=C.min.y,kt=C.isBox3?C.min.z:0):(ut=te.width,vt=te.height,St=te.depth||1,At=0,Nt=0,kt=0),G!==null?(It=G.x,Zt=G.y,xt=G.z):(It=0,Zt=0,xt=0);const ne=Wt.convert(P.format),ee=Wt.convert(P.type);let Xt;P.isData3DTexture?(O.setTexture3D(P,0),Xt=H.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(O.setTexture2DArray(P,0),Xt=H.TEXTURE_2D_ARRAY):(O.setTexture2D(P,0),Xt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,P.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,P.unpackAlignment);const pe=H.getParameter(H.UNPACK_ROW_LENGTH),Ht=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Me=H.getParameter(H.UNPACK_SKIP_PIXELS),Fe=H.getParameter(H.UNPACK_SKIP_ROWS),Pe=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,te.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,te.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,At),H.pixelStorei(H.UNPACK_SKIP_ROWS,Nt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,kt);const Ie=D.isDataArrayTexture||D.isData3DTexture,ye=P.isDataArrayTexture||P.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const Gn=Kt.get(D),ir=Kt.get(P),Tn=Kt.get(Gn.__renderTarget),vi=Kt.get(ir.__renderTarget);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let _i=0;_i<St;_i++)Ie&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Kt.get(D).__webglTexture,z,kt+_i),D.isDepthTexture?(ye&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Kt.get(P).__webglTexture,z,xt+_i),H.blitFramebuffer(At,Nt,ut,vt,It,Zt,ut,vt,H.DEPTH_BUFFER_BIT,H.NEAREST)):ye?H.copyTexSubImage3D(Xt,z,It,Zt,xt+_i,At,Nt,ut,vt):H.copyTexSubImage2D(Xt,z,It,Zt,xt+_i,At,Nt,ut,vt);Ot.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ye?D.isDataTexture||D.isData3DTexture?H.texSubImage3D(Xt,z,It,Zt,xt,ut,vt,St,ne,ee,te.data):P.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,z,It,Zt,xt,ut,vt,St,ne,te.data):H.texSubImage3D(Xt,z,It,Zt,xt,ut,vt,St,ne,ee,te):D.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,z,It,Zt,ut,vt,ne,ee,te.data):D.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,z,It,Zt,te.width,te.height,ne,te.data):H.texSubImage2D(H.TEXTURE_2D,z,It,Zt,ut,vt,ne,ee,te);H.pixelStorei(H.UNPACK_ROW_LENGTH,pe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ht),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Me),H.pixelStorei(H.UNPACK_SKIP_ROWS,Fe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Pe),z===0&&P.generateMipmaps&&H.generateMipmap(Xt),Ot.unbindTexture()},this.copyTextureToTexture3D=function(D,P,C=null,G=null,z=0){return D.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),C=arguments[0]||null,G=arguments[1]||null,D=arguments[2],P=arguments[3],z=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,P,C,G,z)},this.initRenderTarget=function(D){Kt.get(D).__webglFramebuffer===void 0&&O.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?O.setTextureCube(D,0):D.isData3DTexture?O.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?O.setTexture2DArray(D,0):O.setTexture2D(D,0),Ot.unbindTexture()},this.resetState=function(){w=0,A=0,b=null,Ot.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}class D_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wl extends an{constructor(t=null,e=1,n=1,s,r,o,a,c,l=wn,u=wn,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ts=new ve,Zu=new ve,ao=[],Ju=new Hi,I_=new ve,lr=new De,ur=new Gi;class z_ extends De{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,I_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Ju.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Ju)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),ur.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Zu.multiplyMatrices(n,Ts),lr.matrixWorld=Zu,lr.raycast(t,ao);for(let o=0,a=ao.length;o<a;o++){const c=ao[o];c.instanceId=r,c.object=this,e.push(c)}ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wl(new Float32Array(s*this.count),s,this.count,xl,jn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class El extends an{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new jt:new J);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new J,s=[],r=[],o=[],a=new J,c=new ve;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new J)}r[0]=new J,o[0]=new J;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Al extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new jt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class U_ extends Al{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const co=new J,Na=new Tl,Fa=new Tl,Oa=new Tl;class N_ extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new J){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(co.subVectors(s[0],s[1]).add(s[0]),l=co);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(co.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=co),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Na.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,x,m),Fa.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,x,m),Oa.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Fa.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Oa.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Na.calc(c),Fa.calc(c),Oa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Qu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function F_(i,t){const e=1-i;return e*e*t}function O_(i,t){return 2*(1-i)*i*t}function k_(i,t){return i*i*t}function vr(i,t,e,n){return F_(i,t)+O_(i,e)+k_(i,n)}function B_(i,t){const e=1-i;return e*e*e*t}function H_(i,t){const e=1-i;return 3*e*e*i*t}function G_(i,t){return 3*(1-i)*i*i*t}function V_(i,t){return i*i*i*t}function _r(i,t,e,n,s){return B_(i,t)+H_(i,e)+G_(i,n)+V_(i,s)}class Hh extends Jn{constructor(t=new jt,e=new jt,n=new jt,s=new jt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new jt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,s.x,r.x,o.x,a.x),_r(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class W_ extends Jn{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,s.x,r.x,o.x,a.x),_r(t,s.y,r.y,o.y,a.y),_r(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gh extends Jn{constructor(t=new jt,e=new jt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new jt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new jt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X_ extends Jn{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends Jn{constructor(t=new jt,e=new jt,n=new jt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new jt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class q_ extends Jn{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(vr(t,s.x,r.x,o.x),vr(t,s.y,r.y,o.y),vr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wh extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new jt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Qu(a,c.x,l.x,u.x,d.x),Qu(a,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new jt().fromArray(s))}return this}}var tf=Object.freeze({__proto__:null,ArcCurve:U_,CatmullRomCurve3:N_,CubicBezierCurve:Hh,CubicBezierCurve3:W_,EllipseCurve:Al,LineCurve:Gh,LineCurve3:X_,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:q_,SplineCurve:Wh});class Y_ extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tf[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new tf[s.type]().fromJSON(s))}return this}}class K_ extends Y_{constructor(t){super(),this.type="Path",this.currentPoint=new jt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Gh(this.currentPoint.clone(),new jt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Vh(this.currentPoint.clone(),new jt(t,e),new jt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Hh(this.currentPoint.clone(),new jt(t,e),new jt(n,s),new jt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Wh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Al(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $o extends Ge{constructor(t=[new jt(0,-.5),new jt(.5,0),new jt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$e(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,d=new J,h=new jt,f=new J,g=new J,x=new J;let m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=e;v++){const y=n+v*u*s,_=Math.sin(y),E=Math.cos(y);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*_,d.y=t[w].y,d.z=t[w].x*E,o.push(d.x,d.y,d.z),h.x=v/e,h.y=w/(t.length-1),a.push(h.x,h.y);const A=c[3*w+0]*_,b=c[3*w+1],S=c[3*w+0]*E;l.push(A,b,S)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const _=y+v*t.length,E=_,w=_+t.length,A=_+t.length+1,b=_+1;r.push(E,w,b),r.push(A,b,w)}this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("uv",new ge(a,2)),this.setAttribute("normal",new ge(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.points,t.segments,t.phiStart,t.phiLength)}}class Cl extends $o{constructor(t=1,e=1,n=4,s=8){const r=new K_;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Cl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Rl extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new J,u=new jt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Hn extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(f,2));function v(){const _=new J,E=new J;let w=0;const A=(e-t)/n;for(let b=0;b<=r;b++){const S=[],M=b/r,T=M*(e-t)+t;for(let k=0;k<=s;k++){const V=k/s,$=V*c+a,at=Math.sin($),rt=Math.cos($);E.x=T*at,E.y=-M*n+m,E.z=T*rt,d.push(E.x,E.y,E.z),_.set(at,A,rt).normalize(),h.push(_.x,_.y,_.z),f.push(V,1-M),S.push(g++)}x.push(S)}for(let b=0;b<s;b++)for(let S=0;S<r;S++){const M=x[S][b],T=x[S+1][b],k=x[S+1][b+1],V=x[S][b+1];(t>0||S!==0)&&(u.push(M,T,V),w+=3),(e>0||S!==r-1)&&(u.push(T,k,V),w+=3)}l.addGroup(p,w,0),p+=w}function y(_){const E=g,w=new jt,A=new J;let b=0;const S=_===!0?t:e,M=_===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*M,0),h.push(0,M,0),f.push(.5,.5),g++;const T=g;for(let k=0;k<=s;k++){const $=k/s*c+a,at=Math.cos($),rt=Math.sin($);A.x=S*rt,A.y=m*M,A.z=S*at,d.push(A.x,A.y,A.z),h.push(0,M,0),w.x=at*.5+.5,w.y=rt*.5*M+.5,f.push(w.x,w.y),g++}for(let k=0;k<s;k++){const V=E+k,$=T+k;_===!0?u.push($,$+1,V):u.push($+1,$,V),b+=3}l.addGroup(p,b,_===!0?1:2),p+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zo extends Hn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Zo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jo extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new J,_=new J,E=new J;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],_),f(e[w+2],E),c(y,_,E,v)}function c(v,y,_,E){const w=E+1,A=[];for(let b=0;b<=w;b++){A[b]=[];const S=v.clone().lerp(_,b/w),M=y.clone().lerp(_,b/w),T=w-b;for(let k=0;k<=T;k++)k===0&&b===w?A[b][k]=S:A[b][k]=S.clone().lerp(M,k/T)}for(let b=0;b<w;b++)for(let S=0;S<2*(w-b)-1;S++){const M=Math.floor(S/2);S%2===0?(h(A[b][M+1]),h(A[b+1][M]),h(A[b][M])):(h(A[b][M+1]),h(A[b+1][M+1]),h(A[b+1][M]))}}function l(v){const y=new J;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const v=new J;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const _=m(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;o.push(_,1-E)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const y=o[v+0],_=o[v+2],E=o[v+4],w=Math.max(y,_,E),A=Math.min(y,_,E);w>.9&&A<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,y){const _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const v=new J,y=new J,_=new J,E=new J,w=new jt,A=new jt,b=new jt;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),w.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),b.set(o[M+4],o[M+5]),E.copy(v).add(y).add(_).divideScalar(3);const T=m(E);x(w,M+0,v,T),x(A,M+2,y,T),x(b,M+4,_,T)}}function x(v,y,_,E){E<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.vertices,t.indices,t.radius,t.details)}}class $s extends Jo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $s(t.radius,t.detail)}}class Pr extends Jo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pr(t.radius,t.detail)}}class pi extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new J,h=new J,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){const w=E/e;d.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(w+_,1-y),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=u[p][v+1],_=u[p][v],E=u[p+1][v],w=u[p+1][v+1];(p!==0||o>0)&&f.push(y,_,w),(p!==n-1||c<Math.PI)&&f.push(_,E,w)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class j_ extends fs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $_ extends fs{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qo extends fs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xh extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Z_ extends Xh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ka=new ve,ef=new J,nf=new J;class J_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(ef),nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nf),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Q_ extends J_{constructor(){super(new Uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class t1 extends Xh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Q_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class e1 extends Ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);const de=Object.freeze({eightBody:1447452,eightDisc:16513779,eightInk:1447452,eightRim:10274047,cueBody:16776692,cueDots:14165548,blobShadow:795668,flagCloth:15217199,flagDisc:16513779,pinWhite:16513779,pinBand:15217199,cupInside:1780254,cupLiner:16513779,guideWhite:16777215,guideHalo:1057818,guideWarn:16747050,eightArrow:16765503,surfaceOutline:3037738,chalk:4030425,poolBalls:Object.freeze([16763196,2976991,15022389,8081353,16747050,2006618,9317178])}),sf=Object.freeze({1:Object.freeze({name:"Greenside",rough:5216828,fairwayLight:8177237,fairwayDark:7125066,fringe:7782994,greenLight:9427046,greenDark:8703836,sand:15914907,sandLip:14268530,ice:14218239,waterShallow:6080736,waterDeep:3051460,waterFoam:15268863,waterGlint:12579839,pondBed:2916230,railSide:10115630,railTop:12745283,railSights:16051152,cushionNose:2059082,hedge:4164154,wallStone:14275267,soilTop:8015407,soilBottom:5123868,skyTop:12576511,skyBottom:15267839,reeds:8032058,wood:11040586,hemiSky:15135487,hemiGround:8022600,hemiIntensity:1.4,sun:16773596,sunIntensity:2.7,sunElevationDeg:50}),2:Object.freeze({name:"Lakeside",rough:6198336,fairwayLight:9684306,fairwayDark:8697930,fringe:9224270,greenLight:10737251,greenDark:9948506,sand:15978388,sandLip:14264422,ice:14218239,waterShallow:5224150,waterDeep:2386088,waterFoam:15268863,waterGlint:16770764,pondBed:2781050,railSide:7028516,railTop:9198132,railSights:14792794,cushionNose:2055762,hedge:4620346,wallStone:14207152,soilTop:8015407,soilBottom:5123868,skyTop:16766888,skyBottom:16772048,reeds:8032058,wood:11040586,hemiSky:16770764,hemiGround:5917242,hemiIntensity:1.8,sun:16767400,sunIntensity:3.2,sunElevationDeg:32})}),qh=i=>sf[i]||sf[1],Ho=30,n1=Er.degToRad(225),i1=90;function s1(){try{const n=typeof location<"u"?/[?&]tier=([012])\b/.exec(location.search):null;if(n)return+n[1]}catch{}const i=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,t=typeof navigator<"u"?navigator.deviceMemory:void 0,e=typeof devicePixelRatio=="number"?devicePixelRatio:1;return i&&typeof t=="number"&&t<=3?0:!i&&e>=1.5?2:1}function r1(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=64,e.height=256;const n=e.getContext&&e.getContext("2d");if(!n)return null;const s=c=>"#"+c.toString(16).padStart(6,"0"),r=n.createLinearGradient(0,0,0,e.height);r.addColorStop(0,s(i)),r.addColorStop(1,s(t)),n.fillStyle=r,n.fillRect(0,0,e.width,e.height);const o=n.createRadialGradient(0,0,0,0,0,e.height*.9);o.addColorStop(0,"rgba(255,255,255,0.35)"),o.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=o,n.fillRect(0,0,e.width,e.height);const a=new El(e);return a.colorSpace=Qe,a.generateMipmaps=!1,a.minFilter=bn,a}function o1(i){const t=s1(),e=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,n=typeof devicePixelRatio=="number"&&devicePixelRatio>0?devicePixelRatio:1,s=Math.min(n,t===0?1:t===2?2:e?1.5:2),r=Math.min(1,n);let o=null;try{o=new L_({antialias:t>0,powerPreference:"high-performance",stencil:!1,alpha:!1})}catch(j){o=null,typeof window<"u"&&window.document&&window.document.body&&console.error(j)}if(o){o.outputColorSpace=Qe,o.toneMapping=fh,o.toneMappingExposure=1,o.shadowMap.enabled=t>=1,o.shadowMap.type=dl,o.shadowMap.autoUpdate=!1,o.setPixelRatio(s);const j=o.domElement;j.style.display="block",j.style.width="100%",j.style.height="100%",j.style.touchAction="none",j.style.outline="none",i&&i.appendChild&&i.appendChild(j)}const a=new D_,c=new _n(Ho,16/9,.5,800);c.position.set(0,30,17),c.lookAt(0,0,0);const l=new Z_(16777215,7829367,1.4);l.position.set(0,1,0);const u=new t1(16777215,2.7);if(a.add(l,u,u.target),t>=1){u.castShadow=!0;const j=t===2?2048:1024;u.shadow.mapSize.set(j,j),u.shadow.bias=-6e-4,u.shadow.normalBias=.03,u.shadow.intensity=.55}const d={w:1,h:1,portrait:!1,zero:!0},h=new Set,f=new J,g=new Hi(new J(-4,-2,-16),new J(30,4,4));let x=null,m=2,p=Er.degToRad(50);const v={renderer:o,scene:a,camera:c,tier:t,size:d,container:i,round:1,yaw:0,hemi:l,sun:u,pixelRatio:s,shadows:!!(o&&t>=1),setRound:M,setShadowBounds:b,invalidateShadows:S,onResize:V,render:U,dispose:q},y=new ve,_=new J,E=new J,w=new J(0,1,0);function A(){const j=v.yaw+n1;if(f.set(Math.sin(j)*Math.cos(p),Math.sin(p),Math.cos(j)*Math.cos(p)),g.getCenter(E),u.position.copy(E).addScaledVector(f,i1),u.target.position.copy(E),u.updateMatrixWorld(),u.target.updateMatrixWorld(),!u.castShadow)return;y.lookAt(u.position,E,w),y.setPosition(u.position),y.invert();let st=1/0,X=-1/0,it=1/0,_t=-1/0,W=1/0,et=-1/0;for(let yt=0;yt<8;yt++)_.set(yt&1?g.max.x:g.min.x,yt&2?g.max.y:g.min.y,yt&4?g.max.z:g.min.z),_.applyMatrix4(y),_.x<st&&(st=_.x),_.x>X&&(X=_.x),_.y<it&&(it=_.y),_.y>_t&&(_t=_.y),_.z<W&&(W=_.z),_.z>et&&(et=_.z);const lt=u.shadow.camera;lt.left=st-1,lt.right=X+1,lt.bottom=it-1,lt.top=_t+1,lt.near=Math.max(.5,-et-4),lt.far=-W+4,lt.updateProjectionMatrix(),S()}function b(j){if(!j||!j.bounds)return;const st=j.bounds;let X=0,it=0;const _t=j.grid;if(_t&&_t.height)for(let W=0;W<_t.height.length;W++){const et=_t.height[W];et<X&&(X=et),et>it&&(it=et)}g.min.set(st.minx-5,X-2.5,st.minz-5),g.max.set(st.maxx+5,it+5,st.maxz+5),A()}function S(){m=2}function M(j){const st=qh(j);v.round=j===2?2:1,l.color.setHex(st.hemiSky),l.groundColor.setHex(st.hemiGround),l.intensity=st.hemiIntensity,u.color.setHex(st.sun),u.intensity=st.sunIntensity,p=Er.degToRad(st.sunElevationDeg),x&&x.dispose(),x=r1(st.skyTop,st.skyBottom),a.background=x||new se(st.skyBottom),A()}function T(){let j=0,st=0;if(i&&(j=i.clientWidth||0,st=i.clientHeight||0,(!j||!st)&&i.getBoundingClientRect)){const X=i.getBoundingClientRect();j=j||X.width||0,st=st||X.height||0}return{w:j>0&&Number.isFinite(j)?Math.round(j):0,h:st>0&&Number.isFinite(st)?Math.round(st):0}}function k(j){const st=T(),X=!(st.w>0&&st.h>0),it=X?1:st.w,_t=X?1:st.h;if(!j&&it===d.w&&_t===d.h&&X===d.zero)return;const W=d.portrait;d.w=it,d.h=_t,d.zero=X,d.portrait=!X&&_t>it,v.yaw=d.portrait?-Math.PI/2:0,c.aspect=X?16/9:it/_t,c.updateProjectionMatrix(),o&&o.setSize(it,_t,!1),(j||W!==d.portrait)&&A(),h.forEach(et=>{try{et(d)}catch(lt){console.error(lt)}})}function V(j){return h.add(j),()=>h.delete(j)}const $=()=>k(!1);let at=null;typeof ResizeObserver=="function"&&i&&i.nodeType===1&&(at=new ResizeObserver($),at.observe(i)),typeof window<"u"&&window.addEventListener&&(window.addEventListener("resize",$),window.addEventListener("orientationchange",$));function rt(j){j=Math.round(j*4)/4,!(!o||j===v.pixelRatio)&&(v.pixelRatio=j,o.setPixelRatio(j),o.setSize(d.w,d.h,!1))}const ft=a1({cap:s,min:r,get:()=>v.pixelRatio,set:rt,onSlowStart(){o&&o.shadowMap.enabled&&(o.shadowMap.enabled=!1,u.castShadow=!1,v.shadows=!1)}});let nt=0;const Y=typeof performance<"u"?performance:Date;function U(){if(!o||d.zero)return;const j=Y.now();nt&&ft.frame((j-nt)/1e3),nt=j,m>0&&(o.shadowMap.enabled&&(o.shadowMap.needsUpdate=!0),m--),o.render(a,c)}function q(){if(h.clear(),at&&at.disconnect(),typeof window<"u"&&window.removeEventListener&&(window.removeEventListener("resize",$),window.removeEventListener("orientationchange",$)),x&&x.dispose(),u.shadow&&u.shadow.map&&u.shadow.map.dispose(),o){o.dispose();const j=o.domElement;j&&j.parentNode&&j.parentNode.removeChild(j)}}return k(!0),M(1),v}function a1({cap:i,min:t,get:e,set:n,onSlowStart:s=null}){const r={winT:0,winN:0,slowT:0,slowSum:0,fastT:0,age:0,checkT:0,checkN:0,checked:!1,probing:!1,probeT:0,probeSum:0,prevPr:0,prevAvg:0,capped:!1},o=new Map;function a(c){if(!(c>0)||c>.25||(r.age+=c,!r.checked&&r.age>1&&(r.checkT+=c,r.checkN++,r.checkT>=3&&(r.checked=!0,r.checkN/r.checkT<40&&s&&s())),r.winT+=c,r.winN++,r.winT<.5))return;const l=r.winT/r.winN,u=r.winT;if(r.winT=0,r.winN=0,r.probing){r.probeT+=u,r.probeSum+=l*u,r.probeT>=1.5&&(r.probing=!1,r.probeSum/r.probeT>r.prevAvg*.92&&(n(r.prevPr),o.set(r.prevPr,Math.max(0,(o.get(r.prevPr)||1)-1)),r.capped=!0));return}if(r.capped)if(l<.0172)r.capped=!1;else return;l>.018?(r.slowT+=u,r.slowSum+=l*u,r.fastT=0):(r.slowT=0,r.slowSum=0),l<.0172?r.fastT+=u:r.fastT=0;const d=e();if(r.slowT>=1&&d>t)o.set(d,(o.get(d)||0)+1),r.prevPr=d,r.prevAvg=r.slowSum/r.slowT,n(Math.max(t,d-.25)),r.probing=!0,r.probeT=0,r.probeSum=0,r.slowT=0,r.slowSum=0,r.fastT=0;else if(r.fastT>=5&&d<i){const h=Math.min(i,d+.25);(o.get(h)||0)<2&&n(h),r.fastT=0}}return{frame:a,state:r}}const Ti=Er.degToRad(60),Cs=Math.tan(Er.degToRad(Ho/2)),Rs=Bt.R,c1=22,lo=1.6,rf=.8,Ba=2.6,uo=64,Ha={x0:-.86,x1:.86,y0:-.6,y1:.76},l1={x0:-.92,x1:.92,y0:-.8,y1:.8},u1={x0:-.6,x1:.6,y0:-.5,y1:.6},of=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},f1=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,sn=(i,t)=>Number.isFinite(i)?i:t;function ts(i,t,e){if(!i)return 0;const n=i.grid;if(!n||!n.height){const m=i.heightAt?i.heightAt(t,e):0;return Number.isFinite(m)?m:0}const s=n.cols,r=n.rows;let o=(t-n.x0)/n.cell,a=(e-n.z0)/n.cell;if(o!==o||a!==a)return 0;o=o<0?0:o>s-1.000001?s-1.000001:o,a=a<0?0:a>r-1.000001?r-1.000001:a;const c=o|0,l=a|0,u=o-c,d=a-l,h=n.height,f=l*s+c,g=h[f]+(h[f+1]-h[f])*u,x=h[f+s]+(h[f+s+1]-h[f+s])*u;return g+(x-g)*d}class Li{constructor(t){this.tx=0,this.ty=0,this.tz=0,this.d=t,this.valid=!1}}class fo{constructor(){this.v=0}}class h1{constructor(){this.x=new fo,this.y=new fo,this.z=new fo,this.d=new fo}}class d1{constructor(){this.x=0,this.z=0,this.has=!1,this.lastX=0,this.lastZ=0,this.vx=0,this.vz=0,this.fresh=!1}}class p1{constructor(){this.d=0,this.aspect=0,this.yaw=NaN,this.tx=NaN,this.ty=NaN,this.tz=NaN,this.dd=NaN}}class m1{constructor(){this.active=!1,this.t=0,this.from=new Li(60),this.to=new Li(30),this.resolve=null}}class g1{constructor(){this.dt=0,this.T=.25}}class x1{constructor(){this.x0=0,this.x1=0,this.y0=0,this.y1=0}}function v1(i){const t=i.camera,e=new _n(Ho,t.aspect,.1,4e3),n=new Li(40),s=new Li(40),r=new h1,o=new Li(60),a=new Li(30),c=new Li(30),l=new Li(30),u=new m1,d=new d1,h=new Float64Array(uo),f=new Float64Array(uo),g=new Float64Array(uo);let x=0;const m=new J,p=new J,v=new J,y=new En;let _=null,E=0,w=0,A="idle",b=!1,S=!1,M=null,T=i.yaw||0;const k=new p1,V=new g1,$=(L,B)=>ts(_,L,B),at=()=>Math.max(1,i.size.h||1),rt=()=>Math.max(1,i.size.w||1);function ft(L,B,K,I,F){const ct=Math.cos(Ti);L.position.set(B+Math.sin(T)*ct*F,K+Math.sin(Ti)*F,I+Math.cos(T)*ct*F),L.lookAt(B,K,I),L.updateMatrixWorld(!0)}function nt(){Number.isFinite(n.tx)||(n.tx=0),Number.isFinite(n.ty)||(n.ty=0),Number.isFinite(n.tz)||(n.tz=0),n.d>=.5||(n.d=Number.isFinite(n.d)?.5:40);const L=n.d,B=Math.cos(Ti);t.position.set(n.tx+Math.sin(T)*B*L,n.ty+Math.sin(Ti)*L,n.tz+Math.cos(T)*B*L),k.yaw!==T&&(y.set(-Ti,T,0,"YXZ"),t.quaternion.setFromEuler(y),k.yaw=T),t.updateMatrixWorld(!0),k.tx=n.tx,k.ty=n.ty,k.tz=n.tz,k.dd=n.d,(Math.abs(L-k.d)>k.d*.04||t.aspect!==k.aspect)&&(k.d=L,t.near=Math.max(.3,L*.28),t.far=L*3.2+90,t.updateProjectionMatrix(),k.aspect=t.aspect)}function Y(){e.fov=Ho,e.aspect=t.aspect,e.near=.1,e.far=4e3,e.updateProjectionMatrix()}function U(L,B,K){x>=uo||!Number.isFinite(L)||!Number.isFinite(K)||(h[x]=L,f[x]=sn(B,0),g[x]=K,x++)}const q=new x1;function j(L,B,K,I){ft(e,L,B,K,I),q.x0=1/0,q.x1=-1/0,q.y0=1/0,q.y1=-1/0;for(let F=0;F<x;F++){if(m.set(h[F],f[F],g[F]).applyMatrix4(e.matrixWorldInverse),m.z>-.2)return!1;m.applyMatrix4(e.projectionMatrix),m.x<q.x0&&(q.x0=m.x),m.x>q.x1&&(q.x1=m.x),m.y<q.y0&&(q.y0=m.y),m.y>q.y1&&(q.y1=m.y)}return!0}function st(L,B,K,I,F){if(p.copy(L.position),v.set(B,K,.5).unproject(L).sub(p).normalize(),v.y>-1e-4)return!1;const ct=(I-p.y)/v.y;return F.tx=p.x+v.x*ct,F.tz=p.z+v.z*ct,!0}function X(L,B){if(Y(),x===0)return B.tx=0,B.ty=0,B.tz=0,B.d=40,B;let K=0,I=0,F=0;for(let Ut=0;Ut<x;Ut++)K+=h[Ut],I+=f[Ut],F+=g[Ut];K/=x,I/=x,F/=x;const ct=L.x1-L.x0,ht=L.y1-L.y0,Lt=(L.x0+L.x1)/2,mt=(L.y0+L.y1)/2;let Rt=40;for(let Ut=0;Ut<3;Ut++){let Dt=1,Ct=1500;for(let Wt=0;Wt<30;Wt++)Rt=(Dt+Ct)/2,j(K,I,F,Rt)&&q.x1-q.x0<=ct&&q.y1-q.y0<=ht?Ct=Rt:Dt=Rt;if(Rt=Ct,!j(K,I,F,Rt))break;const Vt=l;st(e,(q.x0+q.x1)/2-Lt,(q.y0+q.y1)/2-mt,I,Vt)&&(K=Vt.tx,F=Vt.tz)}return B.tx=K,B.ty=I,B.tz=F,B.d=Rt,B}function it(L,B,K){return Y(),j(B.tx,B.ty,B.tz,K)?q.x0>=L.x0-1e-6&&q.x1<=L.x1+1e-6&&q.y0>=L.y0-1e-6&&q.y1<=L.y1+1e-6:!1}const _t=()=>at()*2*Rs/(c1*2*Cs);function W(){if(!_)return;x=0;const L=_.bounds,B=_.ground&&_.ground.length?_.ground:null;if(B){const I=Math.max(1,Math.ceil(B.length/40));for(let F=0;F<B.length;F+=I)U(B[F].x,$(B[F].x,B[F].z),B[F].z)}U(L.minx,$(L.minx,L.minz),L.minz),U(L.maxx,$(L.maxx,L.minz),L.minz),U(L.minx,$(L.minx,L.maxz),L.maxz),U(L.maxx,$(L.maxx,L.maxz),L.maxz);const K=_.cup;U(K.x,$(K.x,K.z)+Ba,K.z),X(l1,o)}function et(L,B,K,I){for(let F=0;F<I;F++){const ct=F/I*Math.PI*2,ht=L+Math.cos(ct)*K,Lt=B+Math.sin(ct)*K;U(ht,$(ht,Lt),Lt)}}function lt(L,B){if(!L||L.length<2)return;const K=L.length>>1,I=Math.max(1,Math.ceil(K/B));for(let F=0;F<K;F+=I)U(L[2*F],$(L[2*F],L[2*F+1]),L[2*F+1]);U(L[2*K-2],$(L[2*K-2],L[2*K-1]),L[2*K-1])}function yt(L,B,K,I,F){const ct=$(L,B);if(x=0,et(L,B,K+Rs*1.2,16),U(L,ct+2*Rs,B),I(),X(Ha,F),_&&_.cup){const mt=_.cup,Rt=Math.sqrt((mt.x-L)*(mt.x-L)+(mt.z-B)*(mt.z-B)),Ut=of(18,8,Rt);if(Ut>0){const Dt=x;et(mt.x,mt.z,Bt.HOLE_R+.6,8),U(mt.x,$(mt.x,mt.z)+Ba,mt.z),X(Ha,c),x=Dt,F.tx+=(c.tx-F.tx)*Ut,F.ty+=(c.ty-F.ty)*Ut,F.tz+=(c.tz-F.tz)*Ut,F.d=Math.exp(Math.log(F.d)+(Math.log(c.d)-Math.log(F.d))*Ut)}}const ht=_&&_.camera&&_.camera.zoom>0?_.camera.zoom:1;F.d/=ht;const Lt=_t();if(F.d>Lt){F.d=Lt,x=0,et(L,B,K+Rs,16);const mt=F.tx,Rt=F.ty,Ut=F.tz;for(let Dt=4;Dt>=0;Dt--){const Ct=Dt/4;if(c.tx=L+(mt-L)*Ct,c.ty=ct+(Rt-ct)*Ct,c.tz=B+(Ut-B)*Ct,Dt===0||it(Ha,c,F.d))break}F.tx=c.tx,F.ty=c.ty,F.tz=c.tz}return F.d=Math.max(8,F.d),F}function Ft(L){const B=_.eight,K=_.cup;let I=K.x-B.x,F=K.z-B.z;const ct=Math.sqrt(I*I+F*F)||1;I/=ct,F/=ct;const ht=Math.min(14,ct);return yt(B.x,B.z,_.placeR||4,()=>{for(let Lt=1;Lt<=4;Lt++){const mt=B.x+I*ht*(Lt/4),Rt=B.z+F*ht*(Lt/4);U(mt,$(mt,Rt),Rt)}},L)}function N(L,B){const K=L&&L.world,I=K&&K.balls&&K.balls[1];if(!I)return Ft(B);const F=L.level&&L.level.placeR||K.placeR||4,ct=typeof L.guide=="function"?L.guide():null;return yt(I.x,I.z,F,()=>{L.intent&&U(L.intent.x,$(L.intent.x,L.intent.z)+Rs,L.intent.z),ct&&ct.cue&&lt(ct.cue.points,10),ct&&ct.eight&&lt(ct.eight.points,14)},B)}function ot(L){if(!_)return;const B=_.bounds,K=5;L.tx=Math.min(B.maxx+K,Math.max(B.minx-K,sn(L.tx,0))),L.tz=Math.min(B.maxz+K,Math.max(B.minz-K,sn(L.tz,0))),L.d=Math.min(H(),Math.max(tt(),sn(L.d,40)))}const H=()=>Math.max(10,o.d*1.1),tt=()=>Math.max(6,.6*(a.valid?a.d:o.d*.5));function zt(L,B){L.tx=B.tx,L.ty=B.ty,L.tz=B.tz,L.d=B.d}function Yt(L){zt(n,L),zt(s,L),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,nt()}function Ot(){if(!u.active)return;u.active=!1,zt(n,u.to),zt(s,a.valid?a:u.to),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0,A=b?"overview":"play",b&&zt(s,o);const L=u.resolve;u.resolve=null,L&&L()}i.onResize(()=>{const L=i.yaw||0,B=L!==T;if(T=L,nt(),!!_){if(W(),u.active){zt(u.from,o),Ft(u.to),a.valid&&M&&(N(M,a),zt(u.to,a));return}M&&!S&&(N(M,a),a.valid=!0),b||A==="overview"?zt(s,o):A==="play"&&!S&&a.valid&&zt(s,a),ot(s),B&&Yt(s)}});const $t={get userMoved(){return S},set userMoved(L){S=!!L},get level(){return _},get mode(){return A},get overviewOn(){return b},setLevel(L){if(u.active&&Ot(),_=L||null,E=0,w=0,_&&_.grid&&_.grid.height){const B=_.grid.height;E=1/0,w=-1/0;for(let K=0;K<B.length;K++)B[K]<E&&(E=B[K]),B[K]>w&&(w=B[K]);Number.isFinite(E)||(E=0,w=0)}S=!1,b=!1,M=null,a.valid=!1,d.has=!1,T=i.yaw||0,i.setShadowBounds&&i.setShadowBounds(_),_&&(W(),A="overview",Yt(o))},intro(){return u.active&&Ot(),_?(W(),zt(u.from,o),Ft(u.to),u.t=0,u.active=!0,A="intro",Yt(o),new Promise(L=>{u.resolve=L})):Promise.resolve()},skipIntro(){Ot()},frameShot(L){if(_){if(M=L||M,N(M,a),R(a),a.valid=!0,S=!1,d.has=!1,u.active){zt(u.to,a);return}b||(A="play",zt(s,a))}},follow(L,B){!_||u.active||b||S||!Number.isFinite(L)||!Number.isFinite(B)||((A!=="follow"||!d.has)&&(d.lastX=L,d.lastZ=B,d.vx=0,d.vz=0),A="follow",d.x=L,d.z=B,d.has=!0,d.fresh=!0)},frameCup(){if(!_||u.active)return;x=0;const L=_.cup;et(L.x,L.z,Bt.HOLE_R+2,12),U(L.x,$(L.x,L.z)+Ba,L.z),X(u1,s),s.d=Math.max(s.d,10),ot(s),A="cup"},overview(L){_&&(b=!!L,!u.active&&(S=!1,b?(W(),A="overview",zt(s,o)):a.valid&&(M&&M.state==="ready"&&N(M,a),A="play",zt(s,a))))},zoomBy(L,B,K){if(!_||!(L>0)||!Number.isFinite(L))return;u.active&&Ot();const I=rt(),F=at(),ct=Number.isFinite(B)?B/I*2-1:0,ht=Number.isFinite(K)?1-K/F*2:0;nt(),Y(),ft(e,n.tx,n.ty,n.tz,n.d);const Lt=c,mt=st(e,ct,ht,n.ty,Lt),Rt=Lt.tx,Ut=Lt.tz,Dt=Math.min(H(),Math.max(tt(),n.d/L));ft(e,n.tx,n.ty,n.tz,Dt);const Ct=st(e,ct,ht,n.ty,Lt);n.d=Dt,mt&&Ct&&(n.tx+=Rt-Lt.tx,n.tz+=Ut-Lt.tz),ot(n),S=!0,Yt(n)},panBy(L,B){if(!_||!Number.isFinite(L)||!Number.isFinite(B))return;u.active&&Ot();const K=at()/(2*Math.max(1,n.d)*Cs),I=Math.cos(T),F=-Math.sin(T),ct=-Math.sin(T),ht=-Math.cos(T),Lt=Math.sin(Ti),mt=-L/K,Rt=B/(K*Lt);n.tx+=I*mt+ct*Rt,n.tz+=F*mt+ht*Rt,ot(n),S=!0,Yt(n)},update(L){if(L=Number.isFinite(L)&&L>0?Math.min(L,.1):0,u.active){u.t+=L;const K=u.from,I=u.to;if(u.t<lo){const F=u.t/lo;n.tx=K.tx,n.ty=K.ty,n.tz=K.tz,n.d=K.d*(1.04-.04*(F*(2-F)))}else{const F=f1(Math.min(1,(u.t-lo)/rf));n.tx=K.tx+(I.tx-K.tx)*F,n.ty=K.ty+(I.ty-K.ty)*F,n.tz=K.tz+(I.tz-K.tz)*F,n.d=Math.exp(Math.log(K.d)+(Math.log(I.d)-Math.log(K.d))*F)}nt(),u.t>=lo+rf&&Ot();return}V.dt=L;let B=.25;A==="follow"&&d.has&&!S&&!b?(B=.35,O()):A==="overview"?B=.3:A==="cup"&&(B=.45),d.fresh=!1,!S&&L>0&&(V.T=B,Kt()),!(n.tx===k.tx&&n.ty===k.ty&&n.tz===k.tz&&n.d===k.dd&&T===k.yaw)&&nt()},screenToGround(L,B){if(!Number.isFinite(L)||!Number.isFinite(B))return null;const K=L/rt()*2-1,I=1-B/at()*2;if(p.copy(t.position),v.set(K,I,.5).unproject(t).sub(p).normalize(),!(v.y<-1e-5))return null;const F=w+.01,ct=E-.01;let ht=Math.max(0,(F-p.y)/v.y);const Lt=Math.max(ht,(ct-p.y)/v.y),mt=dt=>p.y+v.y*dt-$(p.x+v.x*dt,p.z+v.z*dt);if(!_||Lt-ht<1e-6){const dt=w===E?(w-p.y)/v.y:ht;return{x:p.x+v.x*dt,z:p.z+v.z*dt}}const Rt=Math.sqrt(v.x*v.x+v.z*v.z),Ut=Math.min(400,Math.max(1,Math.ceil((Lt-ht)*Rt/.2))),Dt=(Lt-ht)/Ut;let Ct=mt(ht),Vt=ht,Wt=Ct<=0;if(!Wt)for(let dt=1;dt<=Ut;dt++){Vt=ht+Dt*dt;const gt=mt(Vt);if(gt<=0){Wt=!0;break}ht=Vt,Ct=gt}Wt||(Vt=Lt);let ie=ht,Q=Vt;for(let dt=0;dt<24&&Q-ie>1e-5;dt++){const gt=(ie+Q)/2;mt(gt)>0?ie=gt:Q=gt}const Mt=(ie+Q)/2;return{x:p.x+v.x*Mt,z:p.z+v.z*Mt}},groundToScreen(L,B,K,I){const F=I||{x:0,y:0,onScreen:!1};m.set(sn(L,0),sn(B,0),sn(K,0)).applyMatrix4(t.matrixWorldInverse);const ct=m.z>-t.near;ct&&(m.z=-t.near),m.applyMatrix4(t.projectionMatrix);const ht=rt(),Lt=at();let mt=(m.x+1)/2*ht,Rt=(1-m.y)/2*Lt;return ct&&(mt=ht-mt,Rt=Lt-Rt),F.x=sn(mt,ht/2),F.y=sn(Rt,Lt/2),F.onScreen=!ct&&F.x>=0&&F.x<=ht&&F.y>=0&&F.y<=Lt,F},pxPerMetre(L,B){const K=$(sn(L,0),sn(B,0))+Rs,I=t.position.distanceTo(m.set(sn(L,0),K,sn(B,0))),F=at()/(2*Math.max(.01,I)*Cs);return Number.isFinite(F)?F:1}};function Kt(){const L=V.dt;let B=2/Math.max(1e-4,V.T),K=B*L,I=1/(1+K+.48*K*K+.235*K*K*K),F=n.tx-s.tx,ct=(r.x.v+B*F)*L;r.x.v=(r.x.v-B*ct)*I,n.tx=s.tx+(F+ct)*I,F=n.ty-s.ty,ct=(r.y.v+B*F)*L,r.y.v=(r.y.v-B*ct)*I,n.ty=s.ty+(F+ct)*I,F=n.tz-s.tz,ct=(r.z.v+B*F)*L,r.z.v=(r.z.v-B*ct)*I,n.tz=s.tz+(F+ct)*I,B=2/Math.max(1e-4,V.T*1.6),K=B*L,I=1/(1+K+.48*K*K+.235*K*K*K);const ht=Math.log(Math.max(.5,s.d));F=Math.log(Math.max(.5,n.d))-ht,ct=(r.d.v+B*F)*L,r.d.v=(r.d.v-B*ct)*I,n.d=Math.exp(ht+(F+ct)*I),Number.isFinite(n.tx+n.ty+n.tz+n.d)||(zt(n,s),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0),Math.abs(n.tx-s.tx)+Math.abs(n.ty-s.ty)+Math.abs(n.tz-s.tz)<1e-4&&Math.abs(n.d-s.d)<1e-4*s.d&&Math.abs(r.x.v)+Math.abs(r.y.v)+Math.abs(r.z.v)+Math.abs(r.d.v)<1e-4&&(zt(n,s),r.x.v=0,r.y.v=0,r.z.v=0,r.d.v=0)}function O(){const L=V.dt;if(L>0&&d.fresh){const wt=(d.x-d.lastX)/L,Tt=(d.z-d.lastZ)/L,Pt=1-Math.exp(-L/.25);Number.isFinite(wt)&&Number.isFinite(Tt)&&Math.abs(wt)<80&&Math.abs(Tt)<80&&(d.vx+=(wt-d.vx)*Pt,d.vz+=(Tt-d.vz)*Pt)}d.lastX=d.x,d.lastZ=d.z;const B=a.valid?a.d:n.d;let K=d.vx*.3,I=d.vz*.3;const F=Math.sqrt(K*K+I*I);F>3.5&&(K*=3.5/F,I*=3.5/F);const ct=d.x+K,ht=d.z+I,Lt=at()/(2*Math.max(1,s.d)*Cs),mt=.125*at()/Lt,Rt=Math.cos(T),Ut=-Math.sin(T),Dt=-Math.sin(T),Ct=-Math.cos(T);let Vt=ct-s.tx,Wt=ht-s.tz;const ie=Vt*Rt+Wt*Ut,Q=Vt*Dt+Wt*Ct,Mt=mt/Math.sin(Ti),dt=ie>mt?ie-mt:ie<-mt?ie+mt:0,gt=Q>Mt?Q-Mt:Q<-Mt?Q+Mt:0;let Et=s.tx+Rt*dt+Dt*gt,Z=s.tz+Ut*dt+Ct*gt,pt=B;if(_&&_.cup){const wt=_.cup,Tt=Math.sqrt((wt.x-d.x)*(wt.x-d.x)+(wt.z-d.z)*(wt.z-d.z)),Pt=of(15,6,Tt);if(Pt>0){const Jt=(d.x+wt.x)/2,qt=(d.z+wt.z)/2;Vt=wt.x-d.x,Wt=wt.z-d.z;const ae=Math.abs(Vt*Rt+Wt*Ut)/2+2.5,ce=Math.abs(Vt*Dt+Wt*Ct)/2+2.5,fe=t.aspect>0?t.aspect:16/9,Se=Math.max(ae/(Cs*fe*.8),ce*Math.sin(Ti)/(Cs*.7));Et+=(Jt-Et)*Pt,Z+=(qt-Z)*Pt,pt=Math.min(Math.max(B,B+(Se-B)*Pt),Math.max(B,_t()))}}s.tx=Et,s.tz=Z,s.ty=$(d.x,d.z),s.d=pt,ot(s)}function R(L){if(!_)return;const B=_.bounds,K=5;L.tx=Math.min(B.maxx+K,Math.max(B.minx-K,sn(L.tx,0))),L.tz=Math.min(B.maxz+K,Math.max(B.minz-K,sn(L.tz,0))),L.d=Math.min(H(),Math.max(6,sn(L.d,30)))}return nt(),$t}function _1(i){let t=2166136261;for(let n=0;n<i.length;n++)t^=i.charCodeAt(n),t=Math.imul(t,16777619)>>>0;let e=t||1;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const Qt=i=>new se(i),me=(i,t)=>new se(i.r*t,i.g*t,i.b*t),Po=(i,t,e)=>new se(i.r+(t.r-i.r)*e,i.g+(t.g-i.g)*e,i.b+(t.b-i.b)*e);function yn(i,t,e,n="after"){if(!i.includes(t))throw new Error("course shader: injection target missing: "+t);return i.replace(t,n==="after"?t+`
`+e:n==="replace"?e:e+`
`+t)}const Lo=i=>{const t=new Float64Array(i.length*2);for(let e=0;e<i.length;e++)t[e*2]=i[e].x,t[e*2+1]=i[e].z;return t};function sl(i,t,e){let n=!1;const s=i.length;for(let r=0,o=s-2;r<s;o=r,r+=2){const a=i[r],c=i[r+1],l=i[o],u=i[o+1];c>e!=u>e&&t<(l-a)*(e-c)/(u-c)+a&&(n=!n)}return n}function af(i,t,e,n,s){const r=i.length/2,o=t?r:r-1;let a=1/0;for(let c=0;c<o;c++){const l=(c+1)%r,u=i[c*2],d=i[c*2+1],h=i[l*2]-u,f=i[l*2+1]-d,g=h*h+f*f||1e-12;let x=((e-u)*h+(n-d)*f)/g;x=x<0?0:x>1?1:x;const m=u+h*x,p=d+f*x,v=(m-e)*(m-e)+(p-n)*(p-n);v<a&&(a=v,s.x=m,s.z=p,s.seg=c,s.t=x)}return s.d=Math.sqrt(a),s}function M1(i,t,e,n,s,r){const o=e-i,a=n-t,c=o*o+a*a||1e-12;let l=((s-i)*o+(r-t)*a)/c;l=l<0?0:l>1?1:l;const u=i+o*l-s,d=t+a*l-r;return Math.sqrt(u*u+d*d)}function Yh(i,t=6){const e=Math.max(2,Math.ceil(Math.abs(i.to-i.from)/t)),n=[];for(let s=0;s<=e;s++){const r=(i.from+(i.to-i.from)*s/e)*Math.PI/180;n.push({x:i.x+Math.cos(r)*i.r,z:i.z-Math.sin(r)*i.r})}return n}function y1(i){const t=Lo(i.ground),e=t.length/2;let n=0;for(let p=0;p<e;p++){const v=(p+1)%e;n+=t[p*2]*t[v*2+1]-t[v*2]*t[p*2+1]}const s=n>0?1:-1,r=new Float64Array(e*2),o=new Float64Array(e);for(let p=0;p<e;p++){const v=(p+1)%e,y=t[v*2]-t[p*2],_=t[v*2+1]-t[p*2+1],E=Math.hypot(y,_)||1e-9;o[p]=E,r[p*2]=s*_/E,r[p*2+1]=-s*y/E}const a=[];for(const p of i.walls)a.push({poly:Lo(p.pts),closed:p.closed});for(const p of i.arcsRender||[])a.push({poly:Lo(Yh(p)),closed:!1});const c={d:0,x:0,z:0,seg:0,t:0},l=.25,u=new Int32Array(e+1),d=[];for(let p=0;p<e;p++){u[p]=d.length;const v=Math.max(1,Math.round(o[p]/l));for(let y=0;y<=v;y++){const _=y/v,E=t[p*2]+(t[(p+1)%e*2]-t[p*2])*_,w=t[p*2+1]+(t[(p+1)%e*2+1]-t[p*2+1])*_;let A=1/0;for(const b of a)af(b.poly,b.closed,E,w,c),c.d<A&&(A=c.d);d.push(A<.3?1:0)}}u[e]=d.length;const h=Uint8Array.from(d);let f=!1,g=!1;for(let p=0;p<h.length;p++)h[p]?g=!0:f=!0;const x={d:0,x:0,z:0,seg:0,t:0};return{poly:t,apronW:f?.75:3,count:e,segN:r,segLen:o,anyOpen:f,anyWalled:g,inside:(p,v)=>sl(t,p,v),nearest:(p,v,y=x)=>af(t,!0,p,v,y),walled(p,v){const y=u[p],_=u[p+1]-1-y;return h[y+Math.round(v*_)]===1}}}const ho=new J,po=new J,mo=new J,rn=new J,cf=new J,lf=new J;class S1{constructor(){this.pos=[],this.nor=[],this.col=[],this.leaf=[]}get triangles(){return this.pos.length/9}_v(t,e,n,s,r,o,a,c){this.pos.push(t,e,n),this.nor.push(s,r,o),this.col.push(a.r,a.g,a.b),this.leaf.push(c)}tri(t,e,n,s,r=0,o=null){ho.set(t[0],t[1],t[2]),po.set(e[0],e[1],e[2]),mo.set(n[0],n[1],n[2]),cf.subVectors(po,ho),lf.subVectors(mo,ho),rn.crossVectors(cf,lf);const a=rn.length();if(a<1e-9)return;rn.multiplyScalar(1/a);let c=ho,l=po,u=mo;o&&rn.x*o[0]+rn.y*o[1]+rn.z*o[2]<0&&(l=mo,u=po,rn.negate()),this._v(c.x,c.y,c.z,rn.x,rn.y,rn.z,s,r),this._v(l.x,l.y,l.z,rn.x,rn.y,rn.z,s,r),this._v(u.x,u.y,u.z,rn.x,rn.y,rn.z,s,r)}quad(t,e,n,s,r,o=0,a=null){this.tri(t,e,n,r,o,a),this.tri(t,n,s,r,o,a)}geo(t,e,{leaf:n=0,flat:s=!0,matrix:r=null}={}){const o=t.index?t.toNonIndexed():t;(s||!o.attributes.normal)&&o.computeVertexNormals();let a=o.attributes.position.array;const c=a.length/9,l=new Array(c);for(let d=0;d<c;d++){const h=d*9,f=a[h+3]-a[h],g=a[h+4]-a[h+1],x=a[h+5]-a[h+2],m=a[h+6]-a[h],p=a[h+7]-a[h+1],v=a[h+8]-a[h+2],y=g*v-x*p,_=x*m-f*v,E=f*p-g*m;if(y*y+_*_+E*E<1e-14){l[d]=null;continue}l[d]=e((a[h]+a[h+3]+a[h+6])/3,(a[h+1]+a[h+4]+a[h+7])/3,(a[h+2]+a[h+5]+a[h+8])/3,d)}r&&o.applyMatrix4(r),a=o.attributes.position.array;const u=o.attributes.normal.array;for(let d=0;d<c;d++){const h=l[d];if(!h)continue;const f=d*9;let g=!0;for(let x=0;x<9;x++)(!Number.isFinite(u[f+x])||!Number.isFinite(a[f+x]))&&(g=!1);if(g)for(let x=0;x<9;x+=3)this._v(a[f+x],a[f+x+1],a[f+x+2],u[f+x],u[f+x+1],u[f+x+2],h,n)}o!==t&&o.dispose(),t.dispose()}build(){const t=new Ge;return t.setAttribute("position",new ge(this.pos,3)),t.setAttribute("normal",new ge(this.nor,3)),t.setAttribute("color",new ge(this.col,3)),t.setAttribute("aLeaf",new ge(this.leaf,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}const b1=new ve,uf=new us,ff=new J,Ga=new J,w1=new J(0,1,0);function Xe(i,t,e,n=0,s=1){return ff.set(i,t,e),uf.setFromAxisAngle(w1,n),Array.isArray(s)?Ga.set(s[0],s[1],s[2]):Ga.set(s,s,s),b1.compose(ff,uf,Ga).clone()}const E1={fairway:1,green:2,rough:3,sand:4,water:5,ice:6},A1=[1/16,4/16,6/16,4/16,1/16],go=[0,1/4,2/4,1/4,0];function ji(i,t,e,n=A1){const s=new Float32Array(i.length),r=new Float32Array(i.length);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=a+l<0?0:a+l>=t?t-1:a+l;c+=i[o*t+u]*n[l+2]}s[o*t+a]=c}for(let o=0;o<e;o++)for(let a=0;a<t;a++){let c=0;for(let l=-2;l<=2;l++){const u=o+l<0?0:o+l>=e?e-1:o+l;c+=s[u*t+a]*n[l+2]}r[o*t+a]=c}return r}function T1(i,t,e,n){const r=new Float32Array(t*e);for(let a=0;a<r.length;a++)r[a]=i[a]?1e9:0;const o=Math.SQRT2;for(let a=0;a<e;a++)for(let c=0;c<t;c++){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c>0&&(u=Math.min(u,r[l-1]+1)),a>0&&(u=Math.min(u,r[l-t]+1),c>0&&(u=Math.min(u,r[l-t-1]+o)),c<t-1&&(u=Math.min(u,r[l-t+1]+o))),r[l]=u}for(let a=e-1;a>=0;a--)for(let c=t-1;c>=0;c--){const l=a*t+c;if(r[l]===0)continue;let u=r[l];c<t-1&&(u=Math.min(u,r[l+1]+1)),a<e-1&&(u=Math.min(u,r[l+t]+1),c<t-1&&(u=Math.min(u,r[l+t+1]+o)),c>0&&(u=Math.min(u,r[l+t-1]+o))),r[l]=u}for(let a=0;a<r.length;a++)r[a]=r[a]>=1e9?50:r[a]>0?(r[a]-.5)*n:0;return r}function hf(i,t,e){const n=new wl(i,t,e,In,Zn);return n.flipY=!1,n.magFilter=bn,n.minFilter=bn,n.generateMipmaps=!1,n.wrapS=fi,n.wrapT=fi,n.colorSpace=ci,n.needsUpdate=!0,n}function C1(i,t,e){const{cols:n,rows:s,cell:r,x0:o,z0:a,surface:c}=i.grid,l=n*s;let u=Uint8Array.from(c);for(let U=0;U<3;U++){const q=u;u=Uint8Array.from(q);for(let j=0;j<s;j++)for(let st=0;st<n;st++){const X=j*n+st;if(q[X]!==0)continue;const it=st>0&&q[X-1]||st<n-1&&q[X+1]||j>0&&q[X-n]||j<s-1&&q[X+n]||0;u[X]=it}}const d=new Float32Array(l),h=new Float32Array(l),f=new Float32Array(l),g=new Float32Array(l);let x=!1;const m=(U,q,j)=>{q===2?d[U]+=j:q===4?h[U]+=j:q===5&&(f[U]+=j),g[U]+=(q===3?1:q===6?0:.5)*j},p=(i.zones||[]).map(U=>({code:E1[U.surface]||1,poly:Lo(U.pts)})),v=t.poly,y=4;for(let U=0;U<s;U++)for(let q=0;q<n;q++){const j=U*n+q,st=u[j];c[j]===5&&(x=!0);let X=!1;for(let W=-1;W<=1&&!X;W++){const et=U+W;if(!(et<0||et>=s))for(let lt=-1;lt<=1;lt++){const yt=q+lt;if(yt>=0&&yt<n&&u[et*n+yt]!==st){X=!0;break}}}if(!X){m(j,st,1);continue}const it=o+q*r,_t=a+U*r;for(let W=0;W<y;W++)for(let et=0;et<y;et++){const lt=it+((W+.5)/y-.5)*r,yt=_t+((et+.5)/y-.5)*r;let Ft=st;if(sl(v,lt,yt)){Ft=1;for(const N of p)sl(N.poly,lt,yt)&&(Ft=N.code)}m(j,Ft,1/(y*y))}}const _=ji(d,n,s,go),E=ji(h,n,s,go),w=ji(f,n,s,go),A=ji(g,n,s,go),b=ji(ji(d,n,s),n,s),S=new Uint8Array(l);for(let U=0;U<l;U++)S[U]=c[U]===5?1:0;const M=T1(S,n,s,r),T=new Float32Array(l),k=.55,V=(U,q,j,st,X)=>{const it=Math.max(0,Math.floor((U-o)/r)),_t=Math.min(n-1,Math.ceil((q-o)/r)),W=Math.max(0,Math.floor((j-a)/r)),et=Math.min(s-1,Math.ceil((st-a)/r));for(let lt=W;lt<=et;lt++)for(let yt=it;yt<=_t;yt++){const Ft=X(o+yt*r,a+lt*r),N=lt*n+yt;Ft>T[N]&&(T[N]=Ft)}};for(const U of e)if(U.r!==void 0){const q=U.r+k;V(U.x-q,U.x+q,U.z-q,U.z+q,(j,st)=>{const X=Math.hypot(j-U.x,st-U.z)-U.r;return X<0?1:Math.max(0,1-X/k)})}else{const q=U.hw+k;V(Math.min(U.ax,U.bx)-q,Math.max(U.ax,U.bx)+q,Math.min(U.az,U.bz)-q,Math.max(U.az,U.bz)+q,(j,st)=>{const X=M1(U.ax,U.az,U.bx,U.bz,j,st)-U.hw;return X<0?1:Math.max(0,1-X/k)})}const $=new Float32Array(l);if(t.anyOpen)for(let U=2;U<s-2;U++)for(let q=2;q<n-2;q++){const j=U*n+q;if(c[j]===0)continue;let st=!1;for(let it=-2;it<=2&&!st;it++)for(let _t=-2;_t<=2;_t++)if(c[j+it*n+_t]===0){st=!0;break}if(!st)continue;const X=t.nearest(o+q*r,a+U*r);X.d<.7&&!t.walled(X.seg,X.t)&&($[j]=1)}if(t.anyOpen)for(let U=0;U<2;U++){const q=Float32Array.from($);for(let j=1;j<s-1;j++)for(let st=1;st<n-1;st++){const X=j*n+st;c[X]!==0||q[X]||(q[X-1]||q[X+1]||q[X-n]||q[X+n])&&($[X]=1)}}const at=t.anyOpen?ji($,n,s):$,rt=new Uint8Array(l*4),ft=new Uint8Array(l*4),nt=U=>U<=0?0:U>=1?255:Math.round(U*255);for(let U=0;U<l;U++)rt[U*4]=nt(_[U]),rt[U*4+1]=nt(E[U]),rt[U*4+2]=nt(w[U]),rt[U*4+3]=nt(A[U]),ft[U*4]=nt(T[U]*T[U]*(3-2*T[U])),ft[U*4+1]=nt(M[U]/2.5),ft[U*4+2]=nt(at[U]),ft[U*4+3]=nt(b[U]);const Y=new Le(o-r/2,a-r/2,1/(n*r),1/(s*r));return{mask:hf(rt,n,s),aux:hf(ft,n,s),waterDist:M,hasWater:x,xf:Y}}const Go=3,R1=.15,P1=.45,L1=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function D1(i,t,e,n,s=[],r=1){const{cols:o,rows:a,cell:c,x0:l,z0:u,surface:d}=i.grid,h=i.heightAt,f=2,g=c*f,x=Math.floor((o-1)/f)+1,m=Math.floor((a-1)/f)+1,p=x*m,v=new Uint8Array(p),y=new Float64Array(p),_=new Float64Array(p),E=new Float64Array(p),w=new Float32Array(p),A=new Uint8Array(p);for(let Z=0;Z<m;Z++)for(let pt=0;pt<x;pt++){const wt=Z*x+pt,Tt=Z*f*o+pt*f,Pt=l+pt*g,Jt=u+Z*g;v[wt]=d[Tt]!==0?1:0;const qt=t.nearest(Pt,Jt);if(y[wt]=qt.x,_[wt]=qt.z,E[wt]=qt.d,w[wt]=t.walled(qt.seg,qt.t)?t.apronW:0,e.hasWater){const ae=pt*f,ce=Z*f;t:for(let fe=-3;fe<=3;fe++){const Se=ce+fe;if(!(Se<0||Se>=a))for(let _e=-3;_e<=3;_e++){const re=ae+_e;if(!(re<0||re>=o)&&d[Se*o+re]===5){A[wt]=1;break t}}}}}const b=[],S=[],M=[],T=[],k=[],V=[],$=[];let at=0;const rt=(Z,pt,wt,Tt,Pt,Jt,qt,ae,ce,fe)=>(b.push(Z,pt,wt),S.push(Tt,Pt,Jt),M.push(qt.r,qt.g,qt.b),T.push(ae,ce),k.push(fe),at++),ft=new se(1,1,1),nt=.25,Y=1,U=new Int32Array(p).fill(-1),q=[],j=Z=>{if(U[Z]>=0)return U[Z];const pt=Z%x,wt=(Z-pt)/x;let Tt=l+pt*g,Pt=u+wt*g;v[Z]||(Tt=y[Z],Pt=_[Z]);const Jt=wt*f*o+pt*f;let qt=0;v[Z]&&d[Jt]===5&&(qt=P1*L1(0,1.6,e.waterDist[Jt]));const ae=h(Tt,Pt),ce=(h(Tt+nt,Pt)-h(Tt-nt,Pt))/(2*nt),fe=(h(Tt,Pt+nt)-h(Tt,Pt-nt))/(2*nt),Se=(h(Tt+Y,Pt)-h(Tt-Y,Pt))/(2*Y),_e=(h(Tt,Pt+Y)-h(Tt,Pt-Y))/(2*Y),re=Math.hypot(Se,1,_e),Ee=rt(Tt,ae-qt,Pt,-Se/re,1/re,-_e/re,ft,qt>0?0:-ce,qt>0?0:-fe,0);return $[Ee]=qt>0?1:0,q[Ee]=A[Z],U[Z]=Ee,Ee},st=new Map,X=2097152,it=(Z,pt,wt)=>{const Tt=Z<pt?Z*X+pt:pt*X+Z,Pt=st.get(Tt);Pt?Pt[0]++:st.set(Tt,[1,Z,pt,wt])},_t=[],W=[0,0],et=(Z,pt,wt,Tt)=>{const Pt=b[Z*3],Jt=b[Z*3+2],qt=(b[pt*3]-Pt)*(b[wt*3+2]-Jt)-(b[wt*3]-Pt)*(b[pt*3+2]-Jt);if(!(Math.abs(qt)<1e-7)&&!(qt<0&&(W[Tt?0:1]++,Tt))){if(qt>0){const ae=pt;pt=wt,wt=ae}V.push(Z,pt,wt),it(Z,pt,wt),it(pt,wt,Z),it(wt,Z,pt),Tt&&Tt.push(Z,pt,wt)}},lt=(Z,pt,wt,Tt,Pt,Jt,qt,ae,ce,fe)=>{const Se=Pt+Jt+qt+ae,_e=Se===1?!!(Pt||qt):Se===3?!!(Pt&&qt):Se===2?!(Jt&&ae):!0,re=ce(Z),Ee=ce(pt),oe=ce(wt),Ce=ce(Tt);_e?(et(re,Ee,oe,fe),et(re,oe,Ce,fe)):(et(re,Ee,Ce,fe),et(Ee,oe,Ce,fe))};for(let Z=0;Z<m-1;Z++)for(let pt=0;pt<x-1;pt++){const wt=Z*x+pt,Tt=wt+1,Pt=wt+x+1,Jt=wt+x;(v[wt]||v[Tt]||v[Pt]||v[Jt])&&lt(wt,Tt,Pt,Jt,v[wt],v[Tt],v[Pt],v[Jt],j,_t)}const yt=at,Ft=new Map(st);st.clear();const N=Po(Qt(n.rough),Qt(n.hedge),.35),ot=new Int32Array(p).fill(-1),H=[],tt={d:0,x:0,z:0,seg:0,t:0},zt=1,Yt=(Z,pt)=>{const wt=t.nearest(Z,pt,tt);let Tt=t.walled(wt.seg,wt.t)?wt.d-t.apronW:1/0;for(let Pt=0;Pt<s.length;Pt++){const Jt=Math.hypot(Z-s[Pt].x,pt-s[Pt].z)-s[Pt].r,qt=Math.max(zt-Math.abs(Tt-Jt),0)/zt;Tt=Math.min(Tt,Jt)-qt*qt*zt*.25}return Tt},Ot=new Float64Array(p);for(let Z=0;Z<p;Z++){if(v[Z])continue;if(E[Z]>t.apronW+.8&&!s.length){Ot[Z]=1/0;continue}const pt=Z%x;Ot[Z]=Yt(l+pt*g,u+(Z-pt)/x*g)}const $t=new Float64Array(p);for(let Z=0;Z<p;Z++)$t[Z]=Math.min(1e3,v[Z]?Math.max(E[Z],1e-4):Math.max(Ot[Z],-E[Z]));const Kt=(Z,pt,wt)=>{const Tt=t.nearest(Z,pt,tt);let Pt=Z,Jt=pt;wt===0&&(Pt=Tt.x,Jt=Tt.z);const qt=wt===0?0:Math.min(Tt.d,Go),ae=h(Tt.x,Tt.z)-R1-.07*(qt/Go),ce=rt(Pt,ae,Jt,0,1,0,ft,0,0,1);return H[ce]=wt,ce},O=Z=>{if(ot[Z]<0){const pt=Z%x;ot[Z]=Kt(l+pt*g,u+(Z-pt)/x*g,1)}return ot[Z]},R=new Map,L=(Z,pt)=>{const wt=Z<pt?Z*p+pt:pt*p+Z;let Tt=R.get(wt);if(Tt!==void 0)return Tt;const Pt=$t[Z]/($t[Z]-$t[pt]),Jt=Z%x,qt=pt%x,ae=l+(Jt+(qt-Jt)*Pt)*g,ce=u+((Z-Jt)/x+((pt-qt)/x-(Z-Jt)/x)*Pt)*g,fe=t.nearest(ae,ce,tt),Se=!t.inside(ae,ce)&&fe.d<.12&&-fe.d>=Yt(ae,ce)-.05;return Tt=Kt(ae,ce,Se||t.inside(ae,ce)?0:2),R.set(wt,Tt),Tt},B=[];if(t.anyWalled||s.length)for(let Z=0;Z<m-1;Z++)for(let pt=0;pt<x-1;pt++){const wt=[Z*x+pt,Z*x+pt+1,(Z+1)*x+pt+1,(Z+1)*x+pt];if($t[wt[0]]<0||$t[wt[1]]<0||$t[wt[2]]<0||$t[wt[3]]<0){B.length=0;for(let Tt=0;Tt<4;Tt++){const Pt=wt[Tt],Jt=wt[Tt+1&3];$t[Pt]<0&&B.push(O(Pt)),$t[Pt]<0!=$t[Jt]<0&&B.push(L(Pt,Jt))}for(let Tt=1;Tt<B.length-1;Tt++)et(B[0],B[Tt],B[Tt+1],null)}}const K=st,I=(Z,pt)=>{let wt=(Z-l)/g,Tt=(pt-u)/g;if(wt<0||Tt<0||wt>=x-1||Tt>=m-1)return!1;const Pt=Math.floor(wt),Jt=Math.floor(Tt);wt-=Pt,Tt-=Jt;const qt=Jt*x+Pt,ae=$t[qt]+($t[qt+1]-$t[qt])*wt,ce=$t[qt+x]+($t[qt+x+1]-$t[qt+x])*wt;return ae+(ce-ae)*Tt<0};let F=1/0;for(let Z=1;Z<b.length;Z+=3)b[Z]<F&&(F=b[Z]);const ct=F-1.6,ht=new Float64Array(at*2),Lt=Z=>{const[,pt,wt,Tt]=Z,Pt=b[wt*3]-b[pt*3],Jt=b[wt*3+2]-b[pt*3+2],qt=Math.hypot(Pt,Jt);if(qt<.04)return null;let ae=Jt/qt,ce=-Pt/qt;const fe=(b[pt*3]+b[wt*3])/2,Se=(b[pt*3+2]+b[wt*3+2])/2;return(b[Tt*3]-fe)*ae+(b[Tt*3+2]-Se)*ce>0&&(ae=-ae,ce=-ce),[ae*qt,ce*qt]},mt=[];for(const Z of Ft.values()){if(Z[0]!==1)continue;const pt=Lt(Z);if(!pt)continue;const wt=(b[Z[1]*3]+b[Z[2]*3])/2,Tt=(b[Z[1]*3+2]+b[Z[2]*3+2])/2,Pt=Math.hypot(pt[0],pt[1]),Jt=!((t.anyWalled||s.length)&&I(wt+pt[0]/Pt*.3,Tt+pt[1]/Pt*.3));mt.push([Z[1],Z[2],Jt?1:0,0,pt]);for(const qt of[Z[1],Z[2]])ht[qt*2]+=pt[0],ht[qt*2+1]+=pt[1]}for(const Z of K.values()){if(Z[0]!==1||H[Z[1]]===0&&H[Z[2]]===0)continue;const pt=Lt(Z);if(pt){mt.push([Z[1],Z[2],1,1,pt]);for(const wt of[Z[1],Z[2]])ht[wt*2]+=pt[0],ht[wt*2+1]+=pt[1]}}const Rt=Qt(n.soilTop),Ut=Po(Qt(n.soilBottom),Qt(n.skyBottom),.22),Dt=Po(Rt,Qt(n.soilBottom),.55),Ct=[me(Qt(n.rough),.95),me(Qt(n.rough),.7)],Vt=[me(N,.95),me(N,.7)],Wt=[Qt(de.pinWhite),me(Qt(n.rough),.7)],ie=[[0,0,.35,.94],[.07,-.06,.8,.6],[.09,-.16,1,.1],[.02,"mid",1,-.05],[-.15,"bot",.8,-.6]];for(const[Z,pt,wt,Tt,Pt]of mt){const Jt=Math.hypot(Pt[0],Pt[1]),qt=Pt[0]/Jt,ae=Pt[1]/Jt,ce=Tt?Vt:wt?Wt:Ct,fe=[[],[]],Se=wt?ie:[[0,0,1,0],[0,-.22,1,0]];[Z,pt].forEach((_e,re)=>{let Ee=ht[_e*2],oe=ht[_e*2+1];const Ce=Math.hypot(Ee,oe);Ee/=Ce||1,oe/=Ce||1,(!(Ce>1e-6)||Ee*qt+oe*ae<.5)&&(Ee=qt,oe=ae);const un=b[_e*3],Ve=b[_e*3+1],fn=b[_e*3+2];for(let Ke=0;Ke<Se.length;Ke++){const[An,D,P,C]=Se[Ke],G=D==="bot"?ct:D==="mid"?Ve-.16+(ct-(Ve-.16))*.5:Ve+D,z=Math.hypot(P,C),ut=wt?Ke===0?ce[0]:Ke===1?ce[1]:Ke===2?Rt:Ke===3?Dt:Ut:Rt;fe[re].push(rt(un+Ee*An,G,fn+oe*An,Ee*P/z,C/z,oe*P/z,ut,0,0,2))}});for(let _e=0;_e<Se.length-1;_e++){const re=[fe[0][_e],fe[1][_e],fe[1][_e+1],fe[0][_e+1]],Ee=b[re[0]*3],oe=b[re[0]*3+1],Ce=b[re[0]*3+2],un=b[re[1]*3]-Ee,Ve=b[re[1]*3+1]-oe,fn=b[re[1]*3+2]-Ce,Ke=b[re[2]*3]-Ee,An=b[re[2]*3+1]-oe,D=b[re[2]*3+2]-Ce,P=Ve*D-fn*An,C=un*An-Ve*Ke,G=S[re[0]*3]+S[re[1]*3],z=S[re[0]*3+2]+S[re[1]*3+2];P*G+C*z>=0?V.push(re[0],re[1],re[2],re[0],re[2],re[3]):V.push(re[0],re[2],re[1],re[0],re[3],re[2])}}const Q=new Ge;Q.setAttribute("position",new ge(b,3)),Q.setAttribute("normal",new ge(S,3)),Q.setAttribute("color",new ge(M,3)),Q.setAttribute("aFlow",new ge(T,2)),Q.setAttribute("aMode",new ge(k,1)),Q.setIndex(V),Q.computeBoundingSphere(),Q.computeBoundingBox();const{material:Mt,uniforms:dt}=U1(e,n,N,r===0),gt=new De(Q,Mt);gt.name="course-terrain",gt.receiveShadow=!0,gt.userData.terrain={courseVerts:yt,lowered:Uint8Array.from($),folds:W};const Et=[];if(e.hasWater)for(let Z=0;Z<_t.length;Z+=3){const pt=_t[Z],wt=_t[Z+1],Tt=_t[Z+2];(q[pt]||q[wt]||q[Tt])&&Et.push(pt,wt,Tt)}return{mesh:gt,uniforms:dt,waterTris:Et,positions:b,minY:F,yBot:ct}}const I1=`
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
`,z1=`
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
`;function U1(i,t,e,n){const s={uMask:{value:i.mask},uAux:{value:i.aux},uMaskXf:{value:i.xf},uTime:{value:0},uFlow:{value:0},uStripeW:{value:2.4},uGreenW:{value:.9},uContourStep:{value:.15},uDotCell:{value:1.6},uRough:{value:Qt(t.rough)},uFairA:{value:Qt(t.fairwayLight)},uFairB:{value:Qt(t.fairwayDark)},uFringe:{value:Qt(t.fringe)},uGreenA:{value:Qt(t.greenLight)},uGreenB:{value:Qt(t.greenDark)},uSand:{value:Qt(t.sand)},uSandLip:{value:Qt(t.sandLip)},uBed:{value:Qt(t.pondBed)},uIce:{value:Qt(t.ice)},uLine:{value:Qt(de.surfaceOutline)},uApron:{value:e},uKerbA:{value:Qt(de.pinWhite)},uKerbB:{value:Qt(de.pinBand)}},r=new Qo({color:16777215,vertexColors:!0});return n&&(r.defines={EBG_LOW:""}),r.onBeforeCompile=o=>{Object.assign(o.uniforms,s);let a=o.vertexShader;a=yn(a,"#include <common>",`attribute vec2 aFlow;
attribute float aMode;
varying vec3 vWPos;
varying vec2 vFlow;
varying float vMode;`),a=yn(a,"#include <begin_vertex>",`vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vFlow = aFlow;
vMode = aMode;`),o.vertexShader=a;let c=o.fragmentShader;c=yn(c,"#include <common>",I1),c=yn(c,"#include <color_fragment>",z1),o.fragmentShader=c},r.customProgramCacheKey=()=>n?"ebg-terrain-v1-low":"ebg-terrain-v1",{material:r,uniforms:s}}const N1=`
varying vec2 vXZ;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vXZ = wp.xz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,F1=`
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
`;function O1(i,t,e,n){const s=t.waterTris;if(!e.hasWater||s.length===0)return null;const r=i.heightAt,o=t.positions,a=new Map,c=[],l=[];for(const g of s){let x=a.get(g);if(x===void 0){x=c.length/3;const m=o[g*3],p=o[g*3+2];c.push(m,r(m,p)+.03,p),a.set(g,x)}l.push(x)}const u=new Ge;u.setAttribute("position",new ge(c,3)),u.setIndex(l),u.computeBoundingSphere();const d={uMask:{value:e.mask},uAux:{value:e.aux},uMaskXf:{value:e.xf},uTime:{value:0},uLake:{value:i.round===2?1:0},uShallow:{value:Qt(n.waterShallow)},uDeep:{value:Qt(n.waterDeep)},uFoam:{value:Qt(n.waterFoam)},uGlint:{value:Qt(n.waterGlint)},uBand:{value:Qt(n.hemiSky)}},h=new mn({uniforms:d,vertexShader:N1,fragmentShader:F1,transparent:!0,depthWrite:!1}),f=new De(u,h);return f.name="course-water",f.renderOrder=1,{mesh:f,uniforms:d}}function k1(i,t,e){return i==="cushion"?(e=e||.42,t?{pts:[[-.2,-.3],[-.2,e-.12],[-.15,e-.03],[-.08,e],[.08,e],[.15,e-.03],[.2,e-.12],[.2,-.3]],roles:["nose","nose","nose","top","nose","nose","nose"],h:e}:{pts:[[0,-.3],[0,e-.12],[.05,e-.03],[.12,e],[.46,e],[.5,e-.05],[.53,e-.12],[.53,-.34]],roles:["nose","nose","nose","top","top","side","side"],h:e}):i==="hedge"?(e=e||.52,t?{pts:[[-.22,-.3],[-.22,e-.2],[-.17,e-.06],[-.08,e],[.08,e],[.17,e-.06],[.22,e-.2],[.22,-.3]],roles:Array(7).fill("hedge"),h:e}:{pts:[[0,-.3],[0,e-.2],[.05,e-.06],[.14,e],[.42,e],[.52,e-.08],[.56,e-.25],[.56,-.34]],roles:Array(7).fill("hedge"),h:e}):i==="bumper"?(e=e||.4,t?{pts:[[-.2,-.3],[-.2,e-.2],[-.16,e-.08],[-.09,e-.01],[-.04,e],[.04,e],[.09,e-.01],[.16,e-.08],[.2,e-.2],[.2,-.3]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}:{pts:[[0,-.3],[0,e-.2],[.04,e-.08],[.12,e-.01],[.21,e],[.31,e],[.4,e-.01],[.47,e-.08],[.5,e-.2],[.5,-.34]],roles:["pad","pad","pad","pad","stripe","pad","pad","pad","pad"],h:e}):(e=e||.4,t?{pts:[[-.18,-.3],[-.18,e-.05],[-.14,e],[.14,e],[.18,e-.05],[.18,-.3]],roles:["face","cap","cap","cap","face"],h:e}:{pts:[[0,-.3],[0,e-.05],[.04,e],[.46,e],[.5,e-.05],[.5,-.34]],roles:["face","cap","cap","cap","side"],h:e})}const B1={cushion:.2,hedge:.22,bumper:.2,wall:.18};function H1(i,t,e,n,s){const r=i.heightAt,o=[],a=i.walls.map(l=>({kind:l.kind,pts:l.pts,closed:l.closed,h:l.h,border:l.border}));for(const l of i.arcsRender||[])a.push({kind:l.kind,pts:Yh(l,6),closed:!1,h:void 0,border:!1});const c={nose:Qt(n.cushionNose),top:Qt(n.railTop),side:Qt(n.railSide),sights:Qt(n.railSights),hedge:Qt(n.hedge),stone:Qt(n.wallStone),pad:Qt(s),stripe:Qt(de.pinWhite)};for(const l of a){const u=G1.has(l.kind)?l.kind:"wall",d=V1(l.pts,l.closed);if(d.length<2)continue;const h=d.length,f=l.closed?h:h-1;let g=0,x=0;for(let Y=0;Y<f;Y++){const U=d[Y],q=d[(Y+1)%h],j=q.x-U.x,st=q.z-U.z,X=Math.hypot(j,st);if(X<1e-6)continue;const it=-st/X,_t=j/X,W=(U.x+q.x)/2,et=(U.z+q.z)/2,lt=t.inside(W+it*.35,et+_t*.35),yt=t.inside(W-it*.35,et-_t*.35);lt!==yt&&(g+=lt?-X:X),x+=X}const m=l.border||Math.abs(g)>x*.5,p=m?g>=0?1:-1:1,v=k1(u,!m,l.h),y=m?0:B1[u];for(let Y=0;Y<f;Y++){const U=d[Y],q=d[(Y+1)%h];o.push({ax:U.x,az:U.z,bx:q.x,bz:q.z,hw:y})}const _=[],E=[];for(let Y=0;Y<f;Y++){const U=d[Y],q=d[(Y+1)%h],j=Math.hypot(q.x-U.x,q.z-U.z);E.push([-(q.z-U.z)/j,(q.x-U.x)/j,j])}let w=0;const A=(Y,U,q,j,st)=>_.push({x:Y,z:U,nx:q,nz:j,u:w,join:st}),b=(Y,U,q)=>{const j=Math.atan2(U[1],U[0]);let st=Math.atan2(q[1],q[0])-j;for(;st>Math.PI;)st-=2*Math.PI;for(;st<-Math.PI;)st+=2*Math.PI;const X=Math.max(1,Math.ceil(Math.abs(st)/(Math.PI/9)));for(let it=0;it<=X;it++){const _t=j+st*it/X;A(Y.x,Y.z,Math.cos(_t),Math.sin(_t),it>0&&it<X)}},S=(Y,U,q,j)=>{for(let X=0;X<=6;X++){const it=j?Math.PI-Math.PI*X/6:-Math.PI*X/6,_t=U[0]*Math.cos(it)-q[0]*Math.sin(it),W=U[1]*Math.cos(it)-q[1]*Math.sin(it);A(Y.x,Y.z,_t,W,X>0&&X<6)}},M=[];for(let Y=0;Y<f;Y++){const U=d[Y],q=d[(Y+1)%h],[j,st,X]=E[Y],it=[(q.x-U.x)/X,(q.z-U.z)/X];if(Y===0&&!l.closed)m?A(U.x,U.z,j,st,!1):S(U,[j,st],it,!0);else{const et=E[(Y-1+f)%f];b(U,[et[0],et[1]],[j,st])}const _t=Math.max(1,Math.ceil(X/.5)),W=w;for(let et=1;et<_t;et++)w=W+X*et/_t,A(U.x+(q.x-U.x)*(et/_t),U.z+(q.z-U.z)*(et/_t),j,st,!1);if(w=W+X,u==="cushion")for(let et=Math.ceil((W+.4-1)/2)*2+1;et<W+X-.4;et+=2)M.push([U.x+it[0]*(et-W),U.z+it[1]*(et-W),j,st,it]);Y===f-1&&!l.closed&&(m?A(q.x,q.z,j,st,!1):S(q,[j,st],it,!1))}if(l.closed&&_.length){const Y=_[0];_.push({...Y,u:w})}const T=v.pts,k=(Y,U,q)=>{const j=T[U][0]*p,st=Y.x+Y.nx*j,X=Y.z+Y.nz*j,it=T[U][1]>=0?Y.hc+T[U][1]:r(st,X)+T[U][1];return q[0]=st,q[1]=it,q[2]=X,q};for(const Y of _)Y.hc=r(Y.x,Y.z);let V=0,$=0;for(const Y of T)V+=Y[0],$+=Y[1];V/=T.length,$/=T.length;const at=[0,0,0],rt=[0,0,0],ft=[0,0,0],nt=[0,0,0];for(let Y=0;Y<_.length-1;Y++){const U=_[Y],q=_[Y+1],j=(U.nx+q.nx)*.5,st=(U.nz+q.nz)*.5,X=u==="wall"?Math.floor((U.u+q.u)*.5/1.2)%2?.95:1.04:1;for(let it=0;it<T.length-1;it++){const _t=T[it+1][0]-T[it][0];let et=T[it+1][1]-T[it][1],lt=-_t;const yt=(T[it][0]+T[it+1][0])/2-V,Ft=(T[it][1]+T[it+1][1])/2-$;et*yt+lt*Ft<0&&(et=-et,lt=-lt);const N=[j*et*p,lt,st*et*p],ot=v.roles[it],H=Math.max(0,(T[it][1]+T[it+1][1])/2)/v.h,tt=lt>.7?1:.72+.33*Math.min(1,H);let zt,Yt=0;u==="cushion"?zt=me(ot==="nose"?c.nose:ot==="top"?c.top:c.side,tt):u==="hedge"?(zt=me(c.hedge,.62+.46*Math.min(1,H)),Yt=1):u==="bumper"?zt=me(ot==="stripe"?c.stripe:c.pad,ot==="stripe"?1:tt):zt=me(c.stone,(ot==="cap"?1:ot==="face"?.8*tt:.66*tt)*X),k(U,it,at),k(q,it,rt),k(q,it+1,ft),k(U,it+1,nt),e.quad(at,rt,ft,nt,zt,Yt,N)}}if(!l.closed&&m&&_.length>=2)for(const[Y,U]of[[_[0],_[1]],[_[_.length-1],_[_.length-2]]]){const q=[Y.x-U.x,0,Y.z-U.z],j=T.map((X,it)=>k(Y,it,[0,0,0])),st=u==="hedge"?me(c.hedge,.8):u==="cushion"?c.side:u==="bumper"?c.pad:me(c.stone,.75);for(let X=1;X<j.length-1;X++)e.tri(j[0],j[X],j[X+1],st,u==="hedge"?1:0,q)}if(u==="cushion"){const Y=m?.29:0;for(const[U,q,j,st,X]of M){const it=U+j*Y*p,_t=q+st*Y*p,W=r(U,q)+v.h+.008,et=.11,lt=.065,yt=[it+X[0]*et,W,_t+X[1]*et],Ft=[it-X[0]*et,W,_t-X[1]*et],N=[it+j*lt,W,_t+st*lt],ot=[it-j*lt,W,_t-st*lt];e.quad(yt,N,Ft,ot,c.sights,0,[0,1,0])}}}return o}const G1=new Set(["cushion","hedge","bumper","wall"]);function V1(i,t){const e=[];for(const n of i){const s=e[e.length-1];(!s||Math.hypot(n.x-s.x,n.z-s.z)>1e-4)&&e.push({x:n.x,z:n.z})}if(t&&e.length>2){const n=e[0],s=e[e.length-1];Math.hypot(n.x-s.x,n.z-s.z)<1e-4&&e.pop()}return e}const W1=(i,t)=>new jt(i,t),ns=(i,t)=>new $o(i.map(([e,n])=>W1(e,n)),t),On=i=>i<0?0:i>1?1:i,X1=[16513779,16763196,16748467,15217199,10189792],q1=[0,0,-1],Y1=[0,.866,.5];function K1(i){const t=[Qt(i.hedge),Po(Qt(i.hedge),Qt(i.rough),.5),me(Qt(i.rough),1.05)];return{pal:i,greens:t,trunk:me(Qt(i.wood),.62),wood:Qt(i.wood),woodDark:me(Qt(i.wood),.72),stone:Qt(i.wallStone),soil:me(Qt(i.soilTop),.8),chalk:Qt(de.chalk),chalkTop:Qt(14674423),white:Qt(de.pinWhite),red:Qt(de.pinBand),candy:Qt(15022389),black:Qt(de.eightBody),water:Qt(i.waterShallow),foam:Qt(i.waterFoam),reeds:Qt(i.reeds),cattail:Qt(7029286),lily:me(Qt(i.rough),1.12),flowers:X1.map(Qt)}}function j1(i,t,e,n,s,r,o){const{x:a,z:c,r:l}=n,u=n.kind||"post";if(u==="bumper"){const h=o[r%o.length],f=Qt(de.poolBalls[(h-1)%8]),g=ns([[l+.02,-.3],[l,0],[l,.13],[l,.27],[l,.36],[l*.95+0,.45],[l*.84,.5],[0,.5]],28);i.geo(g,(x,m)=>m>.13&&m<.27?e.white:me(f,m>.4?1.05:.8+.25*On(m/.36)),{matrix:Xe(a,s,c)}),t.disc([a,s+.503,c],[0,1,0],q1,Math.min(l*.56,.48),h);return}if(u==="tree"){const h=ns([[l+.02,-.3],[l,.28],[l-.04,.33],[l-.15,.33],[l-.18,.2],[0,.2]],32);i.geo(h,(_,E,w)=>Math.hypot(_,w)<l-.17&&E<.25?e.soil:me(e.stone,E>.3?1:.68+.3*On(E/.28)),{matrix:Xe(a,s,c)});const f=Math.max(.55,l*.9),g=.75+f*.82,x=Math.min(.32,.08+l*.07),m=new Hn(x*.8,x,g,8);m.translate(0,g/2,0),i.geo(m,()=>e.trunk,{matrix:Xe(a,s,c)});const p=e.greens[r%3],v=new pi(f,18,12);i.geo(v,(_,E)=>me(p,.66+.42*On((E+f)/(2*f))),{leaf:1,flat:!1,matrix:Xe(a,s+g,c,0,[1,.8,1])});const y=new pi(f*.5,14,10);i.geo(y,(_,E)=>me(p,.85+.3*On((E+f*.5)/f)),{leaf:1,flat:!1,matrix:Xe(a-f*.08,s+g+f*.72,c-f*.05,0,[1,.85,1])});return}if(u==="lollipop"){const h=[[l+.02,-.3]];for(let m=0;m<=5;m++)h.push([l,m*.1]);h.push([l*.9,.58],[0,.58]),i.geo(ns(h,24),(m,p,v)=>p>.52?e.white:((Math.atan2(v,m)/(Math.PI*2)*2+p*1.8)%1+1)%1<.5?e.candy:e.white,{matrix:Xe(a,s,c)});const f=new Hn(.045,.045,.6,6);f.translate(0,.86,0),i.geo(f,()=>e.white,{matrix:Xe(a,s,c)});const g=Math.min(.5,Math.max(.3,l*.75)),x=new pi(g,16,10);i.geo(x,(m,p,v)=>(Math.atan2(v,m)/(Math.PI*2)*3+p/g*.9+2)%1<.5?e.candy:e.white,{matrix:Xe(a,s+1.16+g*.8,c,0,[1,.85,1])});return}if(l>=1){const h=ns([[l+.02,-.3],[l,.42],[l-.08,.62],[l-.25,.72],[l*.5,.76],[0,.76]],32),f=e.greens[0];i.geo(h,(g,x)=>me(f,.62+.46*On(x/.76)),{leaf:1,flat:!1,matrix:Xe(a,s,c)});return}const d=ns([[l+.02,-.3],[l,0],[l,.5],[l-Math.min(.07,l*.2),.57],[0,.57]],20);i.geo(d,(h,f)=>f>.515?e.chalkTop:me(e.chalk,.74+.3*On(f/.5)),{matrix:Xe(a,s,c)})}function Kh(i,t,e,n,s,r,o,a=0){const c=Xe(e,n,s,a,r),l=.8,u=new Hn(.08,.13,l+.3,6);u.translate(0,l/2-.15,0),i.geo(u,()=>t.trunk,{matrix:c});const d=t.greens[Math.floor(o()*3)],h=[[0,l+.5,0,.62],[.36,l+.3,.12,.42],[-.34,l+.34,-.12,.44],[.06,l+.95,-.04,.4]];for(const[f,g,x,m]of h){const p=new $s(m*(.92+o()*.16),1);p.translate(f,g,x),i.geo(p,(v,y)=>me(d,.66+.46*On((y-l)/1.35)),{leaf:1,matrix:c})}}function rl(i,t,e,n,s,r,o,a=0){const c=Xe(e,n,s,a,r),l=t.greens[Math.floor(o()*3)],u=2+Math.floor(o()*2);for(let d=0;d<u;d++){const h=d/u*Math.PI*2+o(),f=.3+o()*.12,g=new $s(f,1);g.scale(1,.85,1),g.translate(Math.cos(h)*.22,f*.75,Math.sin(h)*.22),i.geo(g,(x,m)=>me(l,.68+.5*On(m/.75)),{leaf:1,matrix:c})}}function jh(i,t,e,n,s,r,o,a=0){const c=Xe(e,n,s,a,r),l=5+Math.floor(o()*3),u=Math.floor(o()*t.flowers.length),d=me(t.greens[1],.85);for(let h=0;h<l;h++){const f=o()*Math.PI*2,g=Math.sqrt(o())*.42,x=.18+o()*.16,m=Math.cos(f)*g,p=Math.sin(f)*g,v=new Hn(.015,.018,x,3);v.translate(m,x/2,p),i.geo(v,()=>d,{matrix:c});const y=new Pr(.075+o()*.025);y.scale(1,.6,1),y.translate(m,x+.02,p);const _=t.flowers[(u+(o()<.7?0:1+Math.floor(o()*3)))%t.flowers.length];i.geo(y,()=>_,{matrix:c})}for(let h=0;h<2;h++){const f=new Zo(.09,.2,4);f.translate((o()-.5)*.4,.1,(o()-.5)*.4),i.geo(f,()=>t.greens[2],{leaf:.5,matrix:c})}}const $1=(i,t,e,n)=>((Math.atan2(e,t)/(Math.PI*2)+Math.hypot(t,e)/n*1.4)%1+1)%1<.5?i.candy:i.white;function Z1(i,t,e,n,s,r){const o=Xe(e,n,s,0,r),a=new Hn(.05,.05,1.7,6);a.translate(0,.85,0),i.geo(a,()=>t.white,{matrix:o});const c=.58,l=new pi(c,24,12);l.scale(1,1,.3);const u=new ve().makeRotationX(-Math.PI/6),d=l.applyMatrix4(u),h=new ve().copy(u).invert(),f=new J;d.translate(0,1.7+c*.8,0),i.geo(d,(g,x,m)=>(f.set(g,x-1.7-c*.8,m).applyMatrix4(h),Math.abs(f.z)>.1&&Math.hypot(f.x,f.y)<c*.97?$1(t,f.x,f.y,c):t.white),{matrix:o})}function J1(i,t,e,n,s,r,o){const a=Xe(n,s,r,0,o),c=new Bn(1.7,.6,1.7);c.translate(0,.2,0),i.geo(c,(x,m)=>me(e.stone,m>.45?1:.72),{matrix:a});const l=new Bn(1.9,.14,1.9);l.translate(0,.5,0),i.geo(l,(x,m)=>me(e.stone,m>.55?1.05:.8),{matrix:a});const u=.95,d=new pi(u,28,18);d.translate(0,.57+u*.96,0),i.geo(d,()=>e.black,{flat:!1,matrix:a});const h=[n,s+(.57+u*.96)*o,r],f=Y1,g=u*o;t.disc([h[0]+f[0]*g,h[1]+f[1]*g,h[2]+f[2]*g],f,[0,.5,-.866],u*.46*o,8,{c:h,r:g+.006})}function Q1(i,t,e,n,s,r,o){const a=Xe(e,n,s,0,r);if(!o){const d=ns([[1.3,-.3],[1.3,.42],[1.22,.5],[1.1,.5],[1.06,.42],[1.04,.3],[0,.3]],32);i.geo(d,(f,g,x)=>Math.hypot(f,x)<1.03&&g<.35?t.water:me(t.stone,g>.45?1:.7+.25*On(g/.42)),{matrix:a});const h=new Rl(1.04,28);h.rotateX(-Math.PI/2),h.translate(0,.37,0),i.geo(h,(f,g,x)=>Math.hypot(f,x)>.86?t.foam:t.water,{matrix:a})}const c=ns([[.22,o?-.5:.3],[.16,.5],[.13,.95],[.5,1.05],[.52,1.14],[.12,1.16],[0,1.16]],16);i.geo(c,(d,h)=>me(t.stone,h>1?1:.78),{matrix:a});const l=new $s(.2,1);l.scale(1,1.5,1),l.translate(0,1.42,0),i.geo(l,(d,h)=>h>1.45?t.white:t.foam,{matrix:a});const u=6;for(let d=0;d<u;d++){const h=d/u*Math.PI*2,f=new $s(.07,0);f.translate(Math.cos(h)*.62,1,Math.sin(h)*.62),i.geo(f,()=>t.foam,{matrix:a})}}function tM(i,t,e,n,s,r,o,a){const c=(r||.7)*o,l=.6,u=18,d=a()*Math.PI*2,h=t.lily,f=me(t.lily,.78);for(let g=0;g<u;g++){const x=d+l/2+(Math.PI*2-l)*g/u,m=d+l/2+(Math.PI*2-l)*(g+1)/u,p=[e+Math.cos(x)*c,n,s+Math.sin(x)*c],v=[e+Math.cos(m)*c,n,s+Math.sin(m)*c],y=[e+Math.cos(x)*c*.82,n+.01,s+Math.sin(x)*c*.82],_=[e+Math.cos(m)*c*.82,n+.01,s+Math.sin(m)*c*.82];i.tri([e,n+.015,s],y,_,h,0,[0,1,0]),i.quad(y,p,v,_,f,0,[0,1,0])}if(a()<.4){const g=new Pr(.16*o);g.scale(1,.7,1),g.translate(e+Math.cos(d+Math.PI)*c*.3,n+.1,s+Math.sin(d+Math.PI)*c*.3),i.geo(g,()=>t.flowers[2])}}function eM(i,t,e,n,s,r,o){const a=Xe(e,n,s,o()*6.28,r),c=7;for(let l=0;l<c;l++){const u=l/c*Math.PI*2+o(),d=.1+o()*.3,h=.8+o()*.5,f=new Hn(.012,.035,h,3);if(f.translate(0,h/2-.2,0),f.rotateZ((o()-.5)*.25),f.translate(Math.cos(u)*d,0,Math.sin(u)*d),i.geo(f,(g,x)=>me(t.reeds,.75+.35*On(x/h)),{matrix:a}),l%2===0){const g=new Cl(.05,.18,2,6);g.translate(Math.cos(u)*d,h-.3,Math.sin(u)*d),i.geo(g,()=>t.cattail,{matrix:a})}}}function nM(i,t,e,n,s,r,o,a){const c=Xe(e,n,s,o,r),l=new Bn(1.6,.42,.55);l.translate(0,.11,0),i.geo(l,(h,f)=>f>.3?t.soil:me(t.wood,.7+.3*On((f+.1)/.4)),{matrix:c});const u=new Bn(1.7,.06,.65);u.translate(0,.33,0),i.geo(u,()=>t.wood,{matrix:c});const d=6;for(let h=0;h<d;h++){const f=-.65+1.3*h/(d-1),g=.12+a()*.1,x=new Pr(.09);x.scale(1,.65,1),x.translate(f,.36+g,(a()-.5)*.2),i.geo(x,()=>t.flowers[(h+Math.floor(a()*2))%t.flowers.length],{matrix:c});const m=new Zo(.08,g+.05,4);m.translate(f,.36+g/2,0),i.geo(m,()=>t.greens[1],{leaf:.5,matrix:c})}}function iM(i,t,e,n){const s=2*(n.r||3),r=4*(n.scale||1),o=(n.rot||0)*Math.PI/180,a=Math.cos(o),c=-Math.sin(o),l=-c,u=a,d=Math.max(2,Math.round(s/.34)),h=s/d,f=(g,x,m)=>{const p=n.x+a*g+l*x,v=n.z+c*g+u*x;return[p,e(p,v)+m,v]};for(let g=0;g<d;g++){const x=-s/2+g*h+.025,m=x+h-.05,p=me(t.wood,g%2?.92:1.04),v=r/2+(g%3===0?.06:0),y=f(x,-v,.03),_=f(m,-v,.03),E=f(m,v,.03),w=f(x,v,.03);i.quad(y,_,E,w,p,0,[0,1,0]);const A=f(x,-v,-.1),b=f(m,-v,-.1),S=f(m,v,-.1),M=f(x,v,-.1),T=me(p,.66);i.quad(y,A,b,_,T,0,[-l,0,-u]),i.quad(E,S,M,w,T,0,[l,0,u]),i.quad(_,b,S,E,T,0,[a,0,c]),i.quad(w,M,A,y,T,0,[-a,0,-c])}for(const g of[-1,1])for(const x of[-1,1]){const[m,p,v]=f(x*(s/2-.15),g*(r/2+.2),0),y=new Hn(.1,.12,.7,8);y.translate(0,.1,0),i.geo(y,(_,E)=>me(t.wood,E>.4?1:.7),{matrix:Xe(m,p,v)})}}function sM(i,t,e,n,s,r,o,a){const c=Xe(n,s,r,0,o),l=new Bn(.14,1.2,.14);l.translate(0,.45,0),i.geo(l,()=>e.woodDark,{matrix:c});const u=new Bn(1.2,.75,.1);u.rotateX(-.5),u.translate(0,1.15,.04),i.geo(u,(f,g,x)=>me(e.wood,x>.05?1.05:.75),{matrix:c});const d=[0,Math.sin(.5),Math.cos(.5)],h=[0,Math.cos(.5),-Math.sin(.5)];t.disc([n,s+1.15*o+d[1]*.056*o,r+.04*o+d[2]*.056*o],d,h,.3*o,a)}function $h(i,t,e){for(let n=0;n<=3.4;n+=.4)if(i.inside(t,e-n)||i.inside(t+n,e)||i.inside(t-.9,e-n)||i.inside(t+.9,e-n))return!1;return!0}function Zh(i,t,e,n){const s=i.heightAt;if(t.inside(e,n))return s(e,n);const r=t.nearest(e,n),o=Math.min(r.d,Go);return s(r.x,r.z)-.15-.07*(o/Go)}function rM(i,t,e,n,s,r){const o=i.heightAt,a=i.hole&&i.hole.number||1;for(const c of i.props||[]){const l=c.scale||1,u=(c.rot||0)*Math.PI/180,d=i.surfaceAt(c.x,c.z)==="water",h=Zh(i,t,c.x,c.z);switch(c.type){case"tree":t.nearest(c.x,c.z).d<3&&!$h(t,c.x,c.z)?rl(e,s,c.x,h,c.z,1.2*l,r,u):Kh(e,s,c.x,h,c.z,l*(c.r?c.r/.9:1),r,u);break;case"bush":rl(e,s,c.x,h,c.z,l*(c.r?c.r/.55:1),r,u);break;case"flowers":jh(e,s,c.x,h,c.z,l*(c.r?c.r/.45:1),r,u);break;case"lollipop":Z1(e,s,c.x,h,c.z,l);break;case"statue8":J1(e,n,s,c.x,h,c.z,l);break;case"fountain":Q1(e,s,c.x,d?h-.3:h,c.z,l,d);break;case"lilypad":tM(e,s,c.x,o(c.x,c.z)+.05,c.z,c.r,l,r);break;case"reeds":eM(e,s,c.x,d?o(c.x,c.z)-.25:h,c.z,l,r);break;case"flowerbox":nM(e,s,c.x,h,c.z,l,u,r);break;case"bridge":iM(e,s,o,c);break;case"sign":sM(e,n,s,c.x,h,c.z,l,a);break}}}const oM={tree:1.3,bush:.9,flowers:.8,lollipop:.9,statue8:1.5,fountain:1.6,sign:.9,flowerbox:1.1,reeds:.7};function aM(i,t){const e=[];for(const n of i.props||[]){const s=oM[n.type];if(!s||t.inside(n.x,n.z))continue;const r=s*(n.scale||1)+.6,o=t.nearest(n.x,n.z);t.walled(o.seg,o.t)&&o.d+r<=t.apronW-.1||e.push({x:n.x,z:n.z,r})}return e}function cM(i,t,e,n,s){if(!t.anyWalled||t.apronW<2)return 0;const r=[];for(const u of i.props||[])r.push([u.x,u.z,1.6]);for(const u of i.posts||[])r.push([u.x,u.z,u.r+1]);const o=(u,d,h)=>{for(const[f,g,x]of r)if(Math.hypot(f-u,g-d)<x+h)return!1;return!0},a=t.poly,c=t.count;let l=0;for(let u=0;u<c;u++){const d=a[u*2],h=a[u*2+1],f=a[(u+1)%c*2],g=a[(u+1)%c*2+1],x=t.segLen[u],m=t.segN[u*2],p=t.segN[u*2+1];for(let v=s()*1.2;v<x;v+=1.25+s()*.9){const y=v/x;if(!t.walled(u,y))continue;const _=1+s()*1.55,E=d+(f-d)*y+m*_,w=h+(g-h)*y+p*_;if(t.inside(E,w))continue;const A=t.nearest(E,w);if(A.d<.95||A.d>t.apronW-.35||!t.walled(A.seg,A.t))continue;const b=s(),S=Zh(i,t,E,w);if(b<.3&&A.d>1.55&&$h(t,E,w)&&o(E,w,1))Kh(e,n,E,S,w,.85+s()*.3,s,s()*6.28),r.push([E,w,1]);else if(b<.66&&o(E,w,.6))rl(e,n,E,S,w,.8+s()*.4,s,s()*6.28),r.push([E,w,.6]);else if(o(E,w,.45))jh(e,n,E,S,w,.9+s()*.3,s,s()*6.28),r.push([E,w,.45]);else continue;l++}}return l}const li=8,Mr=4,is=128;let Ln=null;const df=i=>"#"+i.toString(16).padStart(6,"0");function pf(i){const t=i.getContext("2d");t.clearRect(0,0,i.width,i.height);for(let e=0;e<li*Mr;e++){const n=e%li*is+is/2,s=Math.floor(e/li)*is+is/2;t.fillStyle=df(de.flagDisc),t.beginPath(),t.arc(n,s,is*.47,0,Math.PI*2),t.fill();const r=String(e+1);t.fillStyle=df(de.eightInk),t.font=`${r.length>1?66:82}px "Lilita One", "Arial Black", "Arial Rounded MT Bold", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(r,n,s+5)}}function Jh(){if(Ln)return Ln;if(typeof document>"u")return Ln=new wl(new Uint8Array([255,255,255,255]),1,1),Ln.colorSpace=Qe,Ln.needsUpdate=!0,Ln;const i=document.createElement("canvas");return i.width=li*is,i.height=Mr*is,pf(i),Ln=new El(i),Ln.colorSpace=Qe,Ln.anisotropy=4,document.fonts&&document.fonts.load&&document.fonts.load('80px "Lilita One"').then(()=>{pf(i),Ln.needsUpdate=!0}).catch(()=>{}),Ln}const lM=i=>i!==null&&i===Ln;function Qh(i){const t=Math.max(0,Math.min(li*Mr-1,(i|0)-1)),e=t%li,n=Math.floor(t/li);return[e/li,1-(n+1)/Mr,1/li,1/Mr]}const Va=new J,xo=new J,Ps=new J,Ci=new J;class uM{constructor(){this.pos=[],this.nor=[],this.uv=[]}get count(){return this.pos.length/9}disc(t,e,n,s,r,o=null){Ps.set(e[0],e[1],e[2]).normalize(),xo.set(n[0],n[1],n[2]),Va.crossVectors(xo,Ps).normalize(),xo.crossVectors(Ps,Va).normalize();const[a,c,l,u]=Qh(r),d=24,h=[];for(let g=0;g<=d;g++){const x=g/d*Math.PI*2;h.push(Math.cos(x),Math.sin(x))}const f=(g,x)=>{Ci.set(t[0],t[1],t[2]).addScaledVector(Va,g*s).addScaledVector(xo,x*s);let m=Ps.x,p=Ps.y,v=Ps.z;if(o){const y=Ci.x-o.c[0],_=Ci.y-o.c[1],E=Ci.z-o.c[2],w=Math.hypot(y,_,E)||1;m=y/w,p=_/w,v=E/w,Ci.set(o.c[0]+m*o.r,o.c[1]+p*o.r,o.c[2]+v*o.r)}this.pos.push(Ci.x,Ci.y,Ci.z),this.nor.push(m,p,v),this.uv.push(a+(.5+.47*g)*l,c+(.5+.47*x)*u)};for(let g=0;g<d;g++){const x=h[g*2],m=h[g*2+1],p=h[g*2+2],v=h[g*2+3];f(0,0),f(x*.5,m*.5),f(p*.5,v*.5),f(x*.5,m*.5),f(x,m),f(p,v),f(x*.5,m*.5),f(p,v),f(p*.5,v*.5)}}build(){const t=new Ge;return t.setAttribute("position",new ge(this.pos,3)),t.setAttribute("normal",new ge(this.nor,3)),t.setAttribute("uv",new ge(this.uv,2)),t.computeBoundingSphere(),t}}const mr=3,Ls=1.7,Wa=1.06;function fM(i,t,e,n){const s=new Hn(.07,.075,mr+.7,8,16);s.translate(0,(mr+.7)/2-.7,0);const r=Qt(de.pinWhite),o=Qt(de.pinBand),a=mr/8;i.geo(s,(l,u)=>u>0&&Math.floor(u/a)%2===1?o:r,{flat:!1,matrix:new ve().makeTranslation(t,e,n)});const c=new pi(.09,10,8);c.translate(t,e+mr+.05,n),i.geo(c,()=>r,{flat:!1})}const hM=`
uniform float uTime;
uniform float uAmp;
float ebgWave(float x) { return sin(x * 3.2 - uTime * 6.5) * 0.5 + sin(x * 5.3 - uTime * 10.0 + 1.3) * 0.2; }
float ebgWaveD(float x) { return cos(x * 3.2 - uTime * 6.5) * 1.6 + cos(x * 5.3 - uTime * 10.0 + 1.3) * 1.06; }
`,dM=`
uniform vec4 uCell;
uniform vec2 uDiscC;
uniform vec2 uDiscS;
uniform vec3 uCloth;
`,pM=`
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
`;function mM(i){const t=new rs;t.name="course-flag";const e=new hs(Ls,Wa,14,3);e.translate(Ls/2+.05,mr-Wa/2-.06,0);const n=Jh(),s=.78,r={uTime:{value:0},uAmp:{value:1},uCell:{value:new Le(...Qh(i))},uDiscC:{value:new jt(.56,.5)},uDiscS:{value:new jt(s/Ls,s/Wa)},uCloth:{value:Qt(de.flagCloth)}},o=new Qo({color:16777215,map:n,side:Mn});o.onBeforeCompile=c=>{Object.assign(c.uniforms,r);let l=c.vertexShader;l=yn(l,"#include <common>",hM),l=yn(l,"#include <beginnormal_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ls.toFixed(3)}, 0.0, 1.0);
  float dz = (ebgWaveD(position.x) * kk + ebgWave(position.x) / ${Ls.toFixed(3)}) * 0.18 * uAmp;
  objectNormal = normalize(vec3(-dz, 0.0, 1.0));
}`),l=yn(l,"#include <begin_vertex>",`{
  float kk = clamp((position.x - 0.05) / ${Ls.toFixed(3)}, 0.0, 1.0);
  transformed.z += ebgWave(position.x) * 0.18 * uAmp * kk;
  transformed.y -= kk * kk * 0.08;
}`),c.vertexShader=l;let u=c.fragmentShader;u=yn(u,"#include <common>",dM),u=yn(u,"#include <map_fragment>",pM,"replace"),c.fragmentShader=u},o.customProgramCacheKey=()=>"ebg-flag-v1";const a=new De(e,o);return a.name="course-flag-cloth",t.add(a),{group:t,uniforms:r,cloth:a}}const gM=`
varying vec2 vLocal;
void main() {
  vLocal = position.xz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,xM=`
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
`;function vM(i,t,e,n,s){const r=[0,.3,.6,.8,n*.86,n,n+.15,n+.35,n+s,n+s+.3,n*1.05+1.55],o=40,a=[],c=[];for(let _=0;_<r.length;_++){const E=_===0?1:o;for(let w=0;w<E;w++){const A=w/o*Math.PI*2,b=Math.cos(A)*r[_],S=Math.sin(A)*r[_];a.push(b,i(t+b,e+S)+.012,S)}}const l=_=>_===0?0:1+(_-1)*o;for(let _=0;_<o;_++)c.push(0,l(1)+(_+1)%o,l(1)+_);for(let _=1;_<r.length-1;_++){const E=l(_),w=l(_+1);for(let A=0;A<o;A++){const b=(A+1)%o;c.push(E+A,E+b,w+b,E+A,w+b,w+A)}}const u=new Ge;u.setAttribute("position",new ge(a,3)),u.setIndex(c);const d=u.attributes.position,h=c.slice(0,3),f=d.getX(h[1])-d.getX(h[0]),g=d.getZ(h[1])-d.getZ(h[0]),x=d.getX(h[2])-d.getX(h[0]),m=d.getZ(h[2])-d.getZ(h[0]);if(g*x-f*m<0){for(let _=0;_<c.length;_+=3){const E=c[_+1];c[_+1]=c[_+2],c[_+2]=E}u.setIndex(c)}u.computeBoundingSphere();const p={uR:{value:n},uLip:{value:n+s},uTime:{value:0},uLightDir:{value:new jt(-.7071,-.7071)},uInside:{value:Qt(de.cupInside)},uLiner:{value:Qt(de.cupLiner)},uHalo:{value:Qt(de.blobShadow)}},v=new mn({uniforms:p,vertexShader:gM,fragmentShader:xM,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),y=new De(u,v);return y.name="course-cup",y.position.set(t,0,e),y.renderOrder=2,{mesh:y,uniforms:p}}const _M=.3,MM=.3,yM=1e3;function td(i,t){const e=qh(t.round),n=t.heightAt,s=_1(String(t.id||"hole")),r=new rs;r.name="course";const o=y1(t),a=K1(e),c=new S1,l=new uM,u=9+Math.floor(s()*7),d=9+(u-9+2+Math.floor(s()*4))%7,h=[u,d],f=H1(t,o,c,e,de.poolBalls[(u-1)%8]);let g=0;t.posts.forEach((U,q)=>{const j=U.kind||"post";j1(c,l,a,U,n(U.x,U.z),j==="bumper"?g++:q,h),f.push({x:U.x,z:U.z,r:U.r})});const x=C1(t,o,f),m=D1(t,o,x,e,aM(t,o),i?i.tier:1);r.add(m.mesh);const p=O1(t,m,x,e);p&&r.add(p.mesh),rM(t,o,c,l,a,s);const v=cM(t,o,c,a,s),y=t.cup.x,_=t.cup.z,E=n(y,_);fM(c,y,E,_);const w=vM(n,y,_,Bt.HOLE_R,Bt.LIP_W);r.add(w.mesh);const A=mM(t.hole&&t.hole.number||1);A.group.position.set(y,E,_),r.add(A.group);const b=new De(c.build(),bM());b.name="course-solids",b.castShadow=!0,b.receiveShadow=!0,r.add(b);let S=null;l.count>0&&(S=new De(l.build(),new Qo({map:Jh()})),S.name="course-labels",S.receiveShadow=!0,r.add(S)),r.userData.stats={decor:v},i&&i.scene&&i.scene.add(r),i&&i.renderer&&i.renderer.shadowMap&&(i.renderer.shadowMap.needsUpdate=!0);let M=0,T=0,k=0,V=!1;const $=m.uniforms;function at(U,q){if(V)return;const j=q%yM,st=U/_M;T+=Math.max(-st,Math.min(st,M-T)),$.uTime.value=j,$.uFlow.value=T*T*(3-2*T),p&&(p.uniforms.uTime.value=j),w.uniforms.uTime.value=j,A.uniforms.uTime.value=j,k>0&&(k=Math.max(0,k-U)),A.uniforms.uAmp.value=1+Math.min(1,k/.08)}function rt(U){M=U>1?1:U>0?U:0}function ft(){k=MM}function nt(U){if(!U||!U.position)return;const q=U.position.x-y,j=U.position.z-_;if(q*q+j*j<1e-8)return;const st=Math.atan2(q,j);A.group.rotation.y=st;const X=st+225*Math.PI/180;w.uniforms.uLightDir.value.set(Math.sin(X),Math.cos(X))}function Y(){V||(V=!0,r.removeFromParent(),r.traverse(U=>{if(!U.isMesh)return;U.geometry.dispose();const q=Array.isArray(U.material)?U.material:[U.material];for(const j of q)j.map&&!lM(j.map)&&j.map.dispose(),j.dispose()}),x.mask.dispose(),x.aux.dispose())}return i&&i.camera&&nt(i.camera),{group:r,update:at,setFlow:rt,wiggleFlag:ft,faceCamera:nt,dispose:Y}}const SM=`
varying float vLeaf;
varying vec3 vLeafPos;
float lfH(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float lfNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lfH(i), lfH(i + vec2(1.0, 0.0)), f.x), mix(lfH(i + vec2(0.0, 1.0)), lfH(i + vec2(1.0, 1.0)), f.x), f.y);
}
`;function bM(){const i=new Qo({color:16777215,vertexColors:!0});return i.onBeforeCompile=t=>{let e=t.vertexShader;e=yn(e,"#include <common>",`attribute float aLeaf;
varying float vLeaf;
varying vec3 vLeafPos;`),e=yn(e,"#include <begin_vertex>",`vLeaf = aLeaf;
vLeafPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.vertexShader=e;let n=t.fragmentShader;n=yn(n,"#include <common>",SM),n=yn(n,"#include <color_fragment>",`{
  vec2 lp = vLeafPos.xz * 4.5 + vec2(vLeafPos.y * 3.1, vLeafPos.y * -2.3);
  float ln = lfNoise(lp) * 0.65 + lfNoise(lp * 2.7) * 0.35;
  diffuseColor.rgb *= 1.0 + vLeaf * (ln - 0.5) * 0.5;
}`),t.fragmentShader=n},i.customProgramCacheKey=()=>"ebg-solids-v1",i}const Ri=Bt.R,ki=Math.PI*2,wM=["classic","tennis","beach","planet","donut","snow","gold"],EM=14,mf=1.4,vo=.24,AM=.12,gf=.38,xf=.34,Xa=.7,TM=.12,qa=.16,_o=.35,oi=i=>i<0?0:i>1?1:i,ke=(i,t,e)=>{const n=oi((e-i)/(t-i));return n*n*(3-2*n)},Te=i=>[i>>16&255,i>>8&255,i&255];function Be(i,t,e){i[0]+=(t[0]-i[0])*e,i[1]+=(t[1]-i[1])*e,i[2]+=(t[2]-i[2])*e}function gi(i,t){i[0]=t[0],i[1]=t[1],i[2]=t[2]}function CM(i,t){i[0]*=t,i[1]*=t,i[2]*=t}const Lr=i=>Math.acos(i<-1?-1:i>1?1:i);function ai(i,t,e,n){let s=Math.imul(i,374761393)^Math.imul(t,668265263)^Math.imul(e,1274126177)^Math.imul(n+1,2246822519);return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,(s>>>0)/4294967296}function ed(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=i-s,c=t-r,l=e-o,u=a*a*(3-2*a),d=c*c*(3-2*c),h=l*l*(3-2*l),f=(g,x,m)=>g+(x-g)*m;return f(f(f(ai(s,r,o,n),ai(s+1,r,o,n),u),f(ai(s,r+1,o,n),ai(s+1,r+1,o,n),u),d),f(f(ai(s,r,o+1,n),ai(s+1,r,o+1,n),u),f(ai(s,r+1,o+1,n),ai(s+1,r+1,o+1,n),u),d),h)}function Zs(i,t,e,n,s=4){let r=.5,o=1,a=0,c=0;for(let l=0;l<s;l++)a+=r*ed(i*o,t*o,e*o,n+l*17),c+=r,r*=.5,o*=2.03;return a/c}function nd(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function RM(i,t,e,n){const s=.809016994375,r=-.587785252292,o=-s,a=r;i=Math.abs(i);let c=Math.max(s*i+r*t,0)*2;i-=c*s,t-=c*r,c=Math.max(o*i+a*t,0)*2,i-=c*o,t-=c*a,i=Math.abs(i),t-=e;const l=n*-r-0,u=n*s-1,d=Math.min(e,Math.max(0,(i*l+t*u)/(l*l+u*u))),h=i-l*d,f=t-u*d;return Math.sqrt(h*h+f*f)*Math.sign(t*l-i*u)}const PM=Te(de.cueBody),LM=Te(de.cueDots),DM=Te(de.eightBody),IM=Te(de.eightDisc),Kn=de.poolBalls.map(Te),Ar=Te(16513779);function zM(i,t,e,n,s){gi(s,PM);const r=Lr(Math.max(Math.abs(i),Math.abs(t),Math.abs(e)));Be(s,LM,ke(.2+n,.2-n,r))}const vf=.52;function UM(i,t,e,n,s){gi(s,DM);const r=Lr(Math.abs(e));Be(s,IM,ke(vf+n,vf-n,r))}const ol=.72,al=.28,NM=2*Math.sqrt(ol*al),Do=(i,t)=>(t[0]=ol*Math.cos(i)+al*Math.cos(3*i),t[1]=NM*Math.sin(2*i),t[2]=ol*Math.sin(i)-al*Math.sin(3*i),t),Hs=72,Ya=(()=>{const i=new Float64Array(Hs*3),t=[0,0,0];for(let e=0;e<Hs;e++)Do(e/Hs*ki,t),i[e*3]=t[0],i[e*3+1]=t[1],i[e*3+2]=t[2];return i})(),Pn=[0,0,0];function FM(i,t,e){let n=-2,s=0;for(let a=0;a<Hs;a++){const c=i*Ya[a*3]+t*Ya[a*3+1]+e*Ya[a*3+2];c>n&&(n=c,s=a)}let r=(s-1)/Hs*ki,o=(s+1)/Hs*ki;for(let a=0;a<14;a++){const c=r+(o-r)*.382,l=r+(o-r)*.618;Do(c,Pn);const u=i*Pn[0]+t*Pn[1]+e*Pn[2];Do(l,Pn);const d=i*Pn[0]+t*Pn[1]+e*Pn[2];u>d?o=l:r=c}return Do((r+o)/2,Pn),Lr(i*Pn[0]+t*Pn[1]+e*Pn[2])}const OM=Te(13952570),kM=Te(16316138),BM=Te(11123498);function HM(i,t,e,n,s){gi(s,OM),CM(s,.94+.12*Zs(i*9+3,t*9,e*9,11,3));const r=FM(i,t,e);Be(s,BM,ke(.085+n,.085-n,r)*.8),Be(s,kM,ke(.05+n,.05-n,r))}const Ka=[Kn[2],Ar,Kn[1],Kn[0],Ar,Kn[5]];function GM(i,t,e,n,s){let r=Math.atan2(e,-i);r<0&&(r+=ki);const o=ki/6,a=Math.floor(r/o)%6,c=r-a*o,l=Math.sqrt(Math.max(0,1-t*t));gi(s,Ka[a]);const u=Math.min(c,o-c)*l,d=c<o/2?Ka[(a+5)%6]:Ka[(a+1)%6];Be(s,d,ke(n,-n,u));const h=Lr(Math.abs(t));Be(s,Ar,ke(.36+n,.36-n,h)),Be(s,Kn[0],ke(.12+n,.12-n,h))}const VM=Te(2052008),WM=Te(4167142),XM=Te(15326364),qM=Te(4170573),YM=Te(9227102),KM=Te(16055039);function jM(i,t,e,n,s){const r=Zs(i*1.9+7.1,t*1.9+3.3,e*1.9+1.7,5,5);gi(s,VM),Be(s,WM,ke(.36,.5,r));const o=.52,a=.012+n*.5;Be(s,XM,ke(o-a,o+a,r)),Be(s,qM,ke(o+.012-a,o+.012+a,r)),Be(s,YM,ke(.6,.7,r)*.8);const c=Math.abs(t)-(.84+.07*(Zs(i*5,t*5,e*5,9,3)-.5));Be(s,KM,ke(-n,n,c))}const $M=Te(14262363),ZM=Te(15778430),ja=Te(16748480),JM=Te(15036070),_f=(()=>{const i=nd(388824),t=[],e=[Kn[0],Kn[1],Ar,Kn[5],Kn[4],Kn[3],Ar];for(let n=0;t.length<64&&n<1e3;n++){const s=i()*2-1,r=i()*ki,o=Math.sqrt(1-s*s),a=[o*Math.cos(r),s,o*Math.sin(r)];if(a[1]<.08)continue;let c=!1;for(const y of t)if(y.c[0]*a[0]+y.c[1]*a[1]+y.c[2]*a[2]>.985){c=!0;break}if(c)continue;let l=-a[2],u=0,d=a[0],h=Math.hypot(l,u,d)||1;l/=h,u/=h,d/=h;const f=a[1]*d-a[2]*u,g=a[2]*l-a[0]*d,x=a[0]*u-a[1]*l,m=i()*Math.PI,p=[l*Math.cos(m)+f*Math.sin(m),u*Math.cos(m)+g*Math.sin(m),d*Math.cos(m)+x*Math.sin(m)],v=[a[1]*p[2]-a[2]*p[1],a[2]*p[0]-a[0]*p[2],a[0]*p[1]-a[1]*p[0]];t.push({c:a,t1:p,t2:v,col:e[t.length%e.length]})}return t})();function QM(i,t,e,n,s){const r=Math.atan2(e,-i),o=-.08+.09*Math.sin(r*7)+.05*Math.sin(r*3+1.3)+.06*(Zs(i*4,t*4,e*4,21,3)-.5);gi(s,$M),Be(s,ZM,ke(-.55,-.05,t)*.7);const a=ke(o-n,o+n,t);if(a<=0)return;const c=[ja[0],ja[1],ja[2]];Be(c,JM,ke(o+.09,o,t)*.8);for(let l=0;l<_f.length;l++){const u=_f[l];if(i*u.c[0]+t*u.c[1]+e*u.c[2]<.97)continue;const h=i*u.t1[0]+t*u.t1[1]+e*u.t1[2],f=i*u.t2[0]+t*u.t2[1]+e*u.t2[2],g=Math.max(0,Math.abs(h)-.07),x=Math.sqrt(g*g+f*f)-.026,m=ke(n,-n,x);m>0&&Be(c,u.col,m)}Be(s,c,a)}const ty=Te(16120319),ey=Te(13229038),ny=Te(11455462),Mf=(()=>{const i=nd(77),t=[];for(let e=0;e<9;e++){const n=i()*2-1,s=i()*ki,r=Math.sqrt(1-n*n);t.push([r*Math.cos(s),n,r*Math.sin(s),.12+i()*.1])}return t})();function iy(i,t,e,n,s){gi(s,ty),Be(s,ey,ke(.45,.75,Zs(i*3.2,t*3.2,e*3.2,31,4))*.75);for(let r=0;r<Mf.length;r++){const o=Mf[r],a=Lr(i*o[0]+t*o[1]+e*o[2]),c=o[3]*(.8+.4*ed(i*12,t*12,e*12,41+r));Be(s,ny,ke(c+n*2,c-n*2,a)*.85)}ai(Math.floor(i*90),Math.floor(t*90),Math.floor(e*90),5)>.992&&gi(s,[255,255,255])}const sy=Te(12091423),ry=Te(15249982),oy=Te(16769674),ay=Te(16774340),cy=Te(8015376);function ly(i,t,e,n,s){gi(s,ry);const r=Zs(i*2.5,t*2.5,e*2.5,61,4);Be(s,sy,ke(.55,.3,r)*.6),Be(s,oy,ke(.55,.78,r)*.6);const o=Math.abs(e);if(o<.6)return;const a=(e>0?i:-i)/o,c=t/o,l=RM(a,c+.03,.42,.45);Be(s,cy,ke(.035+n,.035-n,l)),Be(s,ay,ke(n,-n,l))}const yf={classic:{paint:zM,specular:5592405,shininess:80,rimDark:.25},tennis:{paint:HM,specular:2236962,shininess:18,rimDark:.3},beach:{paint:GM,specular:6710886,shininess:70,rimDark:.25},planet:{paint:jM,specular:4868682,shininess:50,rimDark:.15},donut:{paint:QM,specular:3815994,shininess:40,rimDark:.25},snow:{paint:iy,specular:7829367,shininess:60,rimDark:.3},gold:{paint:ly,specular:16765562,shininess:140,rimDark:.12}};function cl(i,t){if(typeof document>"u"||!document.createElement)return null;const e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext&&e.getContext("2d");return n?{c:e,g:n}:null}function Sf(i,t){const{c:e,g:n}=i,s=e.width,r=e.height;if(!n.createImageData||!n.putImageData)return;const o=n.createImageData(s,r),a=o.data,c=Math.PI/r*.75,l=[0,0,0];for(let u=0;u<r;u++){const d=(u+.5)/r*Math.PI,h=Math.sin(d),f=Math.cos(d);for(let g=0;g<s;g++){const x=(g+.5)/s*ki;t(-Math.cos(x)*h,f,Math.sin(x)*h,c,l);const m=(u*s+g)*4;a[m]=l[0],a[m+1]=l[1],a[m+2]=l[2],a[m+3]=255}}n.putImageData(o,0,0)}const Pl='"Lilita One", "Arial Black", system-ui, sans-serif';function bf(i,t,e){const{c:n,g:s}=i,r=n.width,o=n.height,a=Math.ceil(o*.42),c=cl(a,a);if(!c||!s.drawImage)return;const l=c.g;l.fillStyle="#"+de.eightInk.toString(16).padStart(6,"0"),l.font=`${Math.round(o*.27)}px ${Pl}`,l.textAlign="center",l.textBaseline="middle",l.fillText(t,a/2,a/2+o*.012);const u=e*r,d=o/2;for(let h=0;h<a;h++){const f=d-a/2+h,g=(.5-(f+.5)/o)*Math.PI,x=1/Math.max(.2,Math.cos(g));s.drawImage(c.c,0,h,a,1,u-a*x/2,f,a*x,1)}}function wf(i,t){const e=new El(i.c);return e.colorSpace=Qe,e.anisotropy=t,e.wrapS=Fo,e}function Ef(i,{rim:t=0,rimStrength:e=0,rimDark:n=0,specular:s=6710886,shininess:r=90,transparent:o=!1,key:a="ball-rim-v1"}={}){const c=new $_({map:i,shininess:r,specular:s,transparent:o,depthWrite:!0}),l=new se(t),u={value:l.clone().multiplyScalar(e)},d={value:n};return c.onBeforeCompile=h=>{h.uniforms.uRim=u,h.uniforms.uRimDark=d,h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uRim;
uniform float uRimDark;`).replace("#include <emissivemap_fragment>",["#include <emissivemap_fragment>","float rimF = pow( 1.0 - saturate( dot( normal, normalize( vViewPosition ) ) ), 3.0 );","totalEmissiveRadiance += uRim * rimF;","diffuseColor.rgb *= 1.0 - uRimDark * rimF;"].join(`
`))},c.customProgramCacheKey=()=>a,c.userData.uniforms={uRim:u,uRimDark:d},c.userData.rimBase=l,c}const uy=`
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
}`,fy=`
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
}`;function hy(i){if(!i||typeof document>"u"||!document.createElement)return null;const t=document.createElement("div");t.className="ebg-eight-marker",t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",pointerEvents:"none",display:"none",zIndex:"3",willChange:"transform"});const e=document.createElement("div");Object.assign(e.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",display:"none"});const n=document.createElement("div");Object.assign(n.style,{position:"absolute",left:"22px",top:"5px",width:"0px",height:"0px",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:"9px solid #ffffff",filter:"drop-shadow(0 0 1.5px rgba(16,36,26,0.9))"}),e.appendChild(n);const s=document.createElement("div");return Object.assign(s.style,{position:"absolute",left:"0px",top:"0px",width:"22px",height:"22px",boxSizing:"border-box",borderRadius:"50%",background:"#16161c",border:"2px solid #ffffff",boxShadow:"0 0 0 1.5px rgba(16,36,26,0.85), 0 2px 4px rgba(0,0,0,0.35)",color:"#ffffff",font:`13px/18px ${Pl}`,textAlign:"center"}),s.textContent="8",t.appendChild(e),t.appendChild(s),i.appendChild(t),{el:t,arrowWrap:e,shown:!1,x:-1e9,y:-1e9,ang:1e9,arrowOn:!1}}class Af{constructor(){this.shown=!1,this.x=0,this.y=0,this.z=0,this.rx=0,this.rz=0,this.vx=0,this.vz=0,this.vy=0,this.anim="none",this.t=0,this.fx=0,this.fy=0,this.fz=0,this.hk="water",this.alpha=1,this.lastMode="off",this.synced=!1,this.lx=0,this.ly=0,this.lz=0,this.la=0,this.llv=null,this.lyaw=0}}class dy{constructor(){this.valid=!1,this.cx=0,this.cy=0,this.cz=0,this.bx=0,this.by=0,this.bz=0,this.vis=!1,this.anim="",this.w=0,this.h=0}}class py{constructor(){this.t=0,this.k=-1}}function my(i,t={}){const{uiRoot:e=null,rig:n=null}=t,s=i.scene,r=i.tier??1,o=4,a=r===0?256:512,c=r===0?512:1024,l=new pi(Ri,48,24),u=cl(c,c/2);let d=null;function h(){u&&(Sf(u,UM),bf(u,"8",.25),bf(u,"8",.75),d&&(d.needsUpdate=!0))}u&&(h(),d=wf(u,o));let f=!1;try{const N=typeof document<"u"?document.fonts:null;if(N&&N.load){const ot=N.check?N.check(`64px ${Pl}`):!1;N.load('64px "Lilita One"').then(()=>{!f&&!ot&&h()},()=>{})}}catch{}const g=Ef(d,{rim:de.eightRim,rimStrength:_o,specular:6710886,shininess:90,key:"ball-eight-v1"});d||g.color.setHex(de.eightBody);const x=new De(l,g);x.name="eight-ball";const m=new Map,p=Ef(null,{rimDark:.25,specular:5592405,shininess:80,transparent:!0,key:"ball-cue-v1"}),v=new De(l,p);v.name="cue-ball",v.renderOrder=2;for(const N of[x,v])N.castShadow=!1,N.receiveShadow=!1,N.frustumCulled=!0;s.add(x,v);const y=new hs(1,1);y.rotateX(-Math.PI/2);const _=new Bo(new Float32Array(2),1);_.setUsage(Ni),y.setAttribute("aAlpha",_);const E=new mn({uniforms:{uColor:{value:new se(de.blobShadow)},uOpacity:{value:.42}},vertexShader:uy,fragmentShader:fy,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),w=new z_(y,E,2);w.instanceMatrix.setUsage(Ni),w.frustumCulled=!1,w.renderOrder=1,w.name="ball-shadows",s.add(w);const A=hy(e),b=[new Af,new Af],S=[v,x];let M="classic",T=1;const k=new py;let V=!0;const $=new dy,at=new J,rt=new us,ft=new J,nt=new J(0,1,0),Y=new ve,U=new J,q=new J,j={x:0,y:0,onScreen:!1};let st=null;function X(N){N.quaternion.setFromAxisAngle(nt,i.yaw||0),rt.setFromAxisAngle(at.set(1,0,0),-Math.PI/3),N.quaternion.multiply(rt)}X(x),X(v),v.quaternion.multiply(rt.setFromAxisAngle(at.set(0,1,0),.6));function it(N,ot,H){const tt=Math.sqrt(ot*ot+H*H);tt<1e-7||(at.set(H/tt,0,-ot/tt),N.quaternion.premultiply(rt.setFromAxisAngle(at,tt/Ri)),N.quaternion.normalize())}function _t(N){yf[N]||(N="classic"),M=N;const ot=yf[N];let H=m.get(N);if(!H){const zt=cl(a,a/2);zt&&(Sf(zt,ot.paint),H=wf(zt,o),m.set(N,H))}const tt=!!p.map;p.map=H||null,tt!==!!p.map&&(p.needsUpdate=!0),H?p.color.setHex(16777215):p.color.setHex(de.cueBody),p.specular.setHex(ot.specular),p.shininess=ot.shininess,p.userData.uniforms.uRimDark.value=ot.rimDark}_t("classic");function W(N,ot){N.anim="drop",N.t=0,N.x=ot.x,N.y=ot.y+mf,N.z=ot.z,N.rx=ot.x,N.rz=ot.z}function et(N,ot,H){const tt=b[N],zt=S[N],Yt=N===1,Ot=Yt&&ot.visible&&ot.mode==="holed";let $t=!1;if(Ot)tt.anim!=="sink"&&tt.anim!=="inCup"&&(tt.shown&&tt.anim!=="hazard"?(tt.anim="sink",tt.t=0,tt.fx=tt.x,tt.fy=tt.y,tt.fz=tt.z):(tt.anim="inCup",$t=!0)),tt.shown=!0;else if(ot.visible)(!tt.shown||tt.anim==="inCup"||tt.anim==="sink"||tt.anim==="hazard")&&(W(tt,ot),$t=!0,X(zt)),tt.shown=!0;else if(Yt&&ot.mode==="sunk"&&tt.shown&&tt.anim!=="hazard"){tt.anim="hazard",tt.t=0,tt.vy=0;const Dt=n&&n.level;if(tt.hk=Dt&&Dt.hazardAt&&Dt.hazardAt(tt.x,tt.z)==="oob"?"oob":"water",tt.hk==="oob"){const Ct=Math.sqrt(tt.vx*tt.vx+tt.vz*tt.vz);Ct<1.5&&Ct>1e-4&&(tt.vx*=1.5/Ct,tt.vz*=1.5/Ct)}}else tt.anim!=="hazard"&&(tt.shown=!1,tt.anim="none");tt.lastMode=ot.mode;const Kt=tt.x,O=tt.z;if(tt.anim==="hazard"){tt.t+=H;const Dt=tt.t/Xa;if(tt.hk==="water"){const Ct=Math.exp(-5*H);tt.vx*=Ct,tt.vz*=Ct,tt.x+=tt.vx*H,tt.z+=tt.vz*H,tt.y-=(.4+2.2*Dt)*H}else tt.x+=tt.vx*H,tt.z+=tt.vz*H,tt.vy-=18*H,tt.y+=tt.vy*H;tt.t>=Xa&&(tt.anim="none",tt.shown=!1)}else if(tt.anim==="sink"){tt.t+=H;const Dt=oi(tt.t/xf),Ct=1-Math.pow(1-oi(Dt/.6),3),Vt=.05*(1-Dt)*Math.sin(Dt*26);tt.x=tt.fx+(ot.x-tt.fx)*Ct+Vt,tt.z=tt.fz+(ot.z-tt.fz)*Ct;const Wt=oi((Dt-.12)/.88);tt.y=tt.fy+(ot.y-tt.fy)*Wt*Wt,tt.t>=xf&&(tt.anim="inCup",tt.x=ot.x,tt.y=ot.y,tt.z=ot.z)}else if(tt.anim==="inCup")tt.x=ot.x,tt.y=ot.y,tt.z=ot.z;else if(tt.anim==="drop"){tt.t+=H,tt.x=ot.x,tt.z=ot.z;let Dt;if(tt.t<vo){const Ct=tt.t/vo;Dt=mf*(1-Ct*Ct)}else Dt=AM*Math.sin(Math.PI*oi((tt.t-vo)/(gf-vo)));tt.y=ot.y+Dt,tt.t>=gf&&(tt.anim="none",tt.y=ot.y)}else if(tt.shown){const Dt=ot.x-tt.x,Ct=ot.z-tt.z;Dt*Dt+Ct*Ct>2.5*2.5&&($t=!0),tt.x=ot.x,tt.y=ot.y,tt.z=ot.z}if(tt.shown){const Dt=tt.x-Kt,Ct=tt.z-O;if(!$t&&tt.anim!=="drop"&&tt.anim!=="inCup"&&(Dt!==0||Ct!==0)&&it(zt,Dt,Ct),H>0&&!$t&&tt.anim!=="hazard"){const Vt=1-Math.exp(-H/.06),Wt=Dt/H,ie=Ct/H;Number.isFinite(Wt)&&Number.isFinite(ie)&&(tt.vx+=(Wt-tt.vx)*Vt,tt.vz+=(ie-tt.vz)*Vt)}$t&&(tt.vx=0,tt.vz=0)}const R=N===0?oi(Number.isFinite(ot.alpha)?ot.alpha:1):1;if(tt.alpha=tt.shown?R:0,zt.visible=tt.shown&&R>.01,N===0&&(p.opacity=R),tt.synced&&tt.x===tt.lx&&tt.y===tt.ly&&tt.z===tt.lz&&tt.alpha===tt.la&&st===tt.llv&&i.yaw===tt.lyaw&&tt.anim==="none")return;tt.synced=!0,tt.lx=tt.x,tt.ly=tt.y,tt.lz=tt.z,tt.la=tt.alpha,tt.llv=st,tt.lyaw=i.yaw,V=!0,zt.visible&&zt.position.set(tt.x,tt.y,tt.z);const L=st?ts(st,tt.x,tt.z):ot.y-Ri,B=tt.y-Ri-L;let K=zt.visible?tt.alpha:0,I=2.1*Ri*1.25;B>.01?(K/=1+B*1.6,I*=1+B*.45):B<-.01&&(K*=oi(1+B/(.9*Ri))),tt.anim==="hazard"&&tt.hk==="water"&&(K*=oi(1-tt.t/(Xa*.5))),_.array[N]=K;const F=(i.yaw||0)+225*Math.PI/180,ct=.25*Ri*Math.min(1.5,1+Math.max(0,B)),ht=tt.x-Math.sin(F)*ct,Lt=tt.z-Math.cos(F)*ct,mt=.25,Rt=st?ts(st,ht+mt,Lt)-ts(st,ht-mt,Lt):0,Ut=st?ts(st,ht,Lt+mt)-ts(st,ht,Lt-mt):0;ft.set(-Rt/(2*mt),1,-Ut/(2*mt)).normalize(),rt.setFromUnitVectors(nt,ft),U.set(ht,(st?ts(st,ht,Lt):L)+.03,Lt),q.set(I,1,I),Y.compose(U,rt,q),w.setMatrixAt(N,Y)}function lt(){if(!A)return;const N=b[1],ot=i.camera.matrixWorld.elements,H=i.size.w,tt=i.size.h;if($.valid&&ot[12]===$.cx&&ot[13]===$.cy&&ot[14]===$.cz&&N.x===$.bx&&N.y===$.by&&N.z===$.bz&&x.visible===$.vis&&N.anim===$.anim&&H===$.w&&tt===$.h)return;$.valid=!0,$.cx=ot[12],$.cy=ot[13],$.cz=ot[14],$.bx=N.x,$.by=N.y,$.bz=N.z,$.vis=x.visible,$.anim=N.anim,$.w=H,$.h=tt;let zt=!1,Yt=0,Ot=0,$t=0,Kt=!1;if(n&&N.shown&&x.visible&&N.anim!=="inCup"&&N.anim!=="sink"&&N.anim!=="hazard"){const O=Math.max(1,i.size.w),R=Math.max(1,i.size.h);n.groundToScreen(N.x,N.y,N.z,j);const L=2*Ri*n.pxPerMetre(N.x,N.z);if(!j.onScreen||L<EM){zt=!0,Yt=j.x,Ot=j.y;const B=24;if(!j.onScreen||Yt<B||Yt>O-B||Ot<B||Ot>R-B){const K=O/2,I=R/2,F=Yt-K,ct=Ot-I,ht=Math.abs(F)>1e-6?(O/2-B)/Math.abs(F):1/0,Lt=Math.abs(ct)>1e-6?(R/2-B)/Math.abs(ct):1/0,mt=Math.min(1,ht,Lt);Yt=K+F*mt,Ot=I+ct*mt,$t=Math.atan2(ct,F),Kt=!j.onScreen}}}zt!==A.shown&&(A.el.style.display=zt?"block":"none",A.shown=zt),zt&&((Math.abs(Yt-A.x)>.5||Math.abs(Ot-A.y)>.5)&&(A.x=Yt,A.y=Ot,A.el.style.transform=`translate3d(${(Yt-11).toFixed(1)}px, ${(Ot-11).toFixed(1)}px, 0)`),Kt!==A.arrowOn&&(A.arrowWrap.style.display=Kt?"block":"none",A.arrowOn=Kt),Kt&&Math.abs($t-A.ang)>.01&&(A.ang=$t,A.arrowWrap.style.transform=`rotate(${$t.toFixed(3)}rad)`))}function yt(N,ot){if(f||!N||N.length<2)return;ot=Number.isFinite(ot)&&ot>0?Math.min(ot,.1):0,st=n&&n.level?n.level:null,et(0,N[0],ot),et(1,N[1],ot),V&&(_.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0,V=!1);let H=_o;k.t>0&&(k.t-=ot,H=k.t-qa>0?1:_o+(1-_o)*oi(k.t/qa)),H!==k.k&&(k.k=H,g.userData.uniforms.uRim.value.copy(g.userData.rimBase).multiplyScalar(H)),lt()}function Ft(){f=!0,s.remove(x,v,w),l.dispose(),y.dispose(),g.dispose(),p.dispose(),E.dispose(),d&&d.dispose(),m.forEach(N=>N.dispose()),m.clear(),w.dispose(),A&&A.el.parentNode&&A.el.parentNode.removeChild(A.el)}return{update:yt,flash(){k.t=TM+qa},setSkin:_t,setRound(N){T=N===2?2:1},dispose:Ft,get skin(){return M},get round(){return T},meshes:{cue:v,eight:x,shadows:w},skins:wM}}const si=Bt.R,gy=9.8,fr=0,Mo=1,Tf=2,$a=["iPos","iRot","iSize","iCol"],Za=["iRing","iRingN","iRingC","iRingF"],xy=`
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
}`,vy=`
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
}`,_y=`
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
}`,My=`
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
}`;function Cf(i,t){return new mn({vertexShader:i,fragmentShader:t,transparent:!0,depthWrite:!1,depthTest:!0,side:Mn,blending:uh,blendEquation:Ii,blendSrc:_c,blendDst:Sr,blendSrcAlpha:_c,blendDstAlpha:Sr,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function Rf(i,t){const e=new hs(1,1),n=new e1;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),n.setAttribute("uv",e.getAttribute("uv"));const s={};for(const[r,o]of t){const a=new Bo(new Float32Array(i*o),o);a.setUsage(Ni),n.setAttribute(r,a),s[r]=a}return n.instanceCount=0,n.boundingSphere=new Gi(new J,1e6),{geo:n,attrs:s}}function yy(i,t={}){const{events:e=null,play:n=null}=t,s=i.scene,r=i.tier??1,o=r===0?180:360,a=16,c=r===0?.4:1,l=Rf(o,[["iPos",4],["iRot",4],["iSize",4],["iCol",4]]),u=Cf(xy,vy),d=new De(l.geo,u);d.frustumCulled=!1,d.renderOrder=5,d.name="fx-particles";const h=Rf(a,[["iRing",4],["iRingN",4],["iRingC",4],["iRingF",2]]),f=Cf(_y,My),g=new De(h.geo,f);g.frustumCulled=!1,g.renderOrder=3,g.name="fx-rings";const x=$a.map(()=>({start:0,count:0})),m=Za.map(()=>({start:0,count:0}));s.add(g,d);const p=new Float32Array(o),v=new Float32Array(o),y=new Float32Array(o),_=new Float32Array(o),E=new Float32Array(o),w=new Float32Array(o),A=new Float32Array(o),b=new Float32Array(o),S=new Float32Array(o),M=new Float32Array(o),T=new Float32Array(o),k=new Float32Array(o),V=new Float32Array(o),$=new Float32Array(o),at=new Float32Array(o),rt=new Float32Array(o),ft=new Float32Array(o),nt=new Float32Array(o),Y=new Float32Array(o),U=new Float32Array(o),q=new Float32Array(o),j=new Uint8Array(o),st=new Float32Array(o),X=new Float32Array(o),it=new Uint8Array(o),_t=new Uint8Array(o),W=new Uint8Array(o);let et=0,lt=0;const yt=new Float32Array(a),Ft=new Float32Array(a),N=new Float32Array(a),ot=new Float32Array(a),H=new Float32Array(a),tt=new Float32Array(a),zt=new Float32Array(a),Yt=new Float32Array(a),Ot=new Float32Array(a),$t=new Float32Array(a),Kt=new Float32Array(a),O=new Float32Array(a),R=new Float32Array(a),L=new Float32Array(a),B=new Float32Array(a),K=new Float32Array(a),I=new Float32Array(a),F=new Float32Array(a),ct=new Float32Array(a),ht=new Uint8Array(a);let Lt=0;const mt=8,Rt=new Float32Array(mt),Ut=new Float32Array(mt),Dt=new Float32Array(mt),Ct=new Float32Array(mt),Vt=new Uint8Array(mt),Wt=new Uint8Array(mt);let ie=2654435769;const Q=()=>(ie^=ie<<13,ie^=ie>>>17,ie^=ie<<5,(ie>>>0)/4294967296),Mt=(C,G)=>C+(G-C)*Q(),dt=new se,gt=C=>(dt.setHex(C),[dt.r,dt.g,dt.b]),Et={white:gt(16777215),chalk:gt(de.chalk),foam:gt(15268863),water:gt(8378092),gold:gt(16765503),dustDark:gt(5916208),dustTan:gt(10254924),sand:gt(14268530),leaf:gt(3108396),grey:gt(7037271),pool:de.poolBalls.map(gt),cream:gt(16774358)},Z=()=>n&&n.level||null,pt=(C,G)=>{const z=Z(),ut=z&&z.heightAt?z.heightAt(C,G):0;return Number.isFinite(ut)?ut:0},wt=(C,G)=>{const z=Z();return z&&z.surfaceAt?z.surfaceAt(C,G):"fairway"};function Tt(C,G,z,ut,vt,St,At,Nt,kt,It,Zt,xt,te,ne,ee,Xt,pe){let Ht=et;for(let Me=0;Me<o;Me++){const Fe=(et+Me)%o;if(!W[Fe]){Ht=Fe;break}}if(et=(Ht+1)%o,W[Ht]||lt++,W[Ht]=1,p[Ht]=C,v[Ht]=G,y[Ht]=z,_[Ht]=ut,E[Ht]=vt,w[Ht]=St,A[Ht]=At,b[Ht]=At,S[Ht]=Nt,M[Ht]=kt,T[Ht]=It,ft[Ht]=Zt[0],nt[Ht]=Zt[1],Y[Ht]=Zt[2],U[Ht]=xt,q[Ht]=te,j[Ht]=ne,st[Ht]=ee,X[Ht]=Xt,it[Ht]=pe,_t[Ht]=0,at[Ht]=Mt(0,Math.PI*2),rt[Ht]=Mt(-6,6),ne===Mo){let Me=Mt(-1,1),Fe=Mt(-1,1),Pe=Mt(-1,1);const Ie=Math.sqrt(Me*Me+Fe*Fe+Pe*Pe)||1;Me/=Ie,Fe/=Ie,Pe/=Ie,k[Ht]=Me,V[Ht]=Fe,$[Ht]=Pe,rt[Ht]=Mt(5,12)*(Q()<.5?-1:1)}else k[Ht]=0,V[Ht]=1,$[Ht]=0;return Ht}function Pt(C,G,z,ut,vt,St,At,Nt,kt,It,Zt,xt=0,te=.05){const ne=Lt;Lt=(Lt+1)%a;const ee=.25,Xt=pt(C+ee,G)-pt(C-ee,G),pe=pt(C,G+ee)-pt(C,G-ee);let Ht=-Xt/(2*ee),Me=1,Fe=-pe/(2*ee);const Pe=Math.sqrt(Ht*Ht+Me*Me+Fe*Fe);Ht/=Pe,Me/=Pe,Fe/=Pe,yt[ne]=C,Ft[ne]=pt(C,G)+te,N[ne]=G,ot[ne]=Ht,H[ne]=Me,tt[ne]=Fe,zt[ne]=z,Yt[ne]=ut,Ot[ne]=vt,$t[ne]=St,Kt[ne]=0,O[ne]=At,R[ne]=xt,L[ne]=Nt[0],B[ne]=Nt[1],K[ne]=Nt[2],I[ne]=kt,F[ne]=It,ct[ne]=Zt,ht[ne]=1}function Jt(C,G,z,ut,vt,St,At){for(let Nt=0;Nt<ut;Nt++){const kt=Mt(0,Math.PI*2),It=vt*Mt(.5,1);Tt(C,G,z,Math.cos(kt)*It,Mt(.6,1.6)*vt*.5,Math.sin(kt)*It,Mt(.25,.45),At,At*.3,1,St,1,.85,fr,.4,3,0)}}function qt(C,G,z,ut,vt,St,At){const Nt=pt(C,G)+.12;for(let kt=0;kt<z;kt++){const It=Mt(0,Math.PI*2),Zt=Mt(.3,1)*ut;Tt(C+Math.cos(It)*.1,Nt,G+Math.sin(It)*.1,Math.cos(It)*Zt,Mt(.3,.9),Math.sin(It)*Zt,Mt(.45,.75),St,St*2.6,1,vt,At,0,fr,-.15,2.6,0)}}function ae(C,G,z,ut){const vt=pt(C,G)+.3;for(let St=0;St<z;St++){const At=Mt(0,Math.PI*2),Nt=Mt(.6,3.2)*ut,kt=Mt(6.5,11)*ut,It=Et.pool[(St+Math.floor(Q()*7))%Et.pool.length],Zt=Mt(.18,.26);Tt(C+Math.cos(At)*.4,vt,G+Math.sin(At)*.4,Math.cos(At)*Nt,kt,Math.sin(At)*Nt,Mt(3.2,4.4),Zt,Zt,.6,It,1,0,Mo,.62,1.15,1)}}function ce(C,G,z,ut,vt){for(let St=0;St<mt;St++)if(!Wt[St]){Wt[St]=1,Rt[St]=C,Vt[St]=G,Ut[St]=z,Dt[St]=ut,Ct[St]=vt;return}}function fe(C){const G=C.x+C.nx*si,z=C.z+C.nz*si,ut=Math.min(1,(C.speed||0)/14),vt=pt(G,z)+si;Pt(G,z,.45,1+ut*.6,.12,.04,.2,Et.white,.9,.6,0);const St=5+Math.round(ut*5);for(let At=0;At<St;At++){const Nt=At%2?1:-1,kt=Mt(1.5,3.5)*(.5+ut),It=-C.nz*Nt,Zt=C.nx*Nt,xt=Mt(-.35,.35);Tt(G,vt,z,(It+C.nx*xt)*kt,Mt(.8,2.2),(Zt+C.nz*xt)*kt,Mt(.22,.4),Mt(.07,.12),.02,1,At%3?Et.white:Et.chalk,1,.75,fr,.5,4,0)}qt(G,z,3,.8,Et.dustDark,.16,.32)}function Se(C){const G=C.speed||0;if(G<.8)return;const z=Math.min(1,G/12),ut=C.x-C.nx*si*.95,vt=C.z-C.nz*si*.95,St=C.id===0?.6:1,At=pt(ut,vt)+si*.6;if(C.kind==="hedge"||C.kind==="tree"){const Nt=Math.round((2+5*z)*St);for(let kt=0;kt<Nt;kt++){const It=Mt(.8,2.2)*(.5+z);Tt(ut,At+.2,vt,(C.nx+Mt(-.8,.8))*It,Mt(1,3),(C.nz+Mt(-.8,.8))*It,Mt(.6,1),Mt(.1,.16),.1,.6,Et.leaf,1,0,Mo,.35,2,2)}}else if(C.kind==="bumper")Jt(ut,At,vt,Math.round((3+5*z)*St),2.5+3*z,Et.gold,.14),Pt(ut,vt,.3,1+z,.1,.03,.22,Et.cream,.8,.7,0);else{const Nt=Math.round((2+4*z)*St);qt(ut,vt,Nt,.6+z,C.kind==="cushion"?Et.grey:Et.dustDark,.14+.06*z,.3+.2*z),C.kind==="cushion"&&Jt(ut,At,vt,Math.round(2+3*z),1.5+2*z,Et.chalk,.09)}}function _e(C){const G=C.x,z=C.z;if(C.kind==="water"){Pt(G,z,.35,2.4,.16,.04,.75,Et.foam,.95,.25,.22,0,.08),Pt(G,z,.2,1.6,.12,.03,.6,Et.foam,.8,.25,0,.16,.08);const ut=pt(G,z)+.1,vt=16;for(let St=0;St<vt;St++){const At=St/vt*Math.PI*2+Mt(-.2,.2),Nt=Mt(1,2.6);Tt(G,ut,z,Math.cos(At)*Nt,Mt(3.5,6.5),Math.sin(At)*Nt,1.4,Mt(.1,.16),.08,1,St%3?Et.foam:Et.water,.95,.3,fr,1,.6,2)}for(let St=0;St<5;St++)Tt(G+Mt(-.15,.15),ut,z+Mt(-.15,.15),Mt(-.4,.4),Mt(6,8.5),Mt(-.4,.4),1.4,Mt(.14,.2),.08,1,Et.foam,.95,.3,fr,1,.5,2)}else qt(G,z,10,1.6,Et.grey,.28,.5),Jt(G,pt(G,z)+.4,z,5,2,Et.white,.12)}function re(C){const G=pt(C.x,C.z)+si+.2;for(let ut=0;ut<6;ut++){const vt=ut/6*Math.PI*2;Tt(C.x,G,C.z,Math.cos(vt)*1.6,Mt(1.5,2.6),Math.sin(vt)*1.6,Mt(.4,.6),.3,.05,1,ut%2?Et.gold:Et.white,1,.8,Tf,.6,2.5,0)}const z=Z();z&&z.cup&&Pt(z.cup.x,z.cup.z,Bt.HOLE_R,Bt.HOLE_R+.5,.14,.04,.3,Et.gold,.9,.6,0)}function Ee(){const C=Z();if(!C||!C.cup)return;const G=C.cup.x,z=C.cup.z;Pt(G,z,Bt.HOLE_R,Bt.HOLE_R*3,.22,.04,.6,Et.white,.95,.7,0),Pt(G,z,Bt.HOLE_R,Bt.HOLE_R*2.2,.14,.03,.5,Et.gold,.9,.7,0,.12);const ut=pt(G,z)+.2;for(let vt=0;vt<12;vt++){const St=vt/12*Math.PI*2,At=Mt(1.4,2.6);Tt(G,ut,z,Math.cos(St)*At,Mt(3,5.5),Math.sin(St)*At,Mt(.5,.8),Mt(.22,.32),.04,1,vt%3?Et.gold:Et.white,1,.8,Tf,.8,1.8,0)}ae(G,z,Math.round(10*c+4),.7)}function oe(C){if(!C||C.picked)return;const G=C.level||Z();if(!G||!G.cup)return;const z=C.strokes-C.par,ut=C.strokes===1,vt=ut||z<=-2?150:z===-1?100:z===0?60:30,St=Math.max(12,Math.round(vt*c)),At=G.cup.x,Nt=G.cup.z,kt=ut||z<=-2?Math.round(St*.4):St;ae(At,Nt,kt,z<=-1||ut?1.15:.9),(ut||z<=-2)&&(ce(.35,1,At-2,Nt,Math.round(St*.3)),ce(.7,1,At+2,Nt,Math.round(St*.3)))}const Ce=[];e&&e.on&&(Ce.push(e.on("ball:contact",fe)),Ce.push(e.on("ball:wall",Se)),Ce.push(e.on("ball:hazard",_e)),Ce.push(e.on("ball:hop",re)),Ce.push(e.on("ball:holed",Ee)),Ce.push(e.on("hole:done",oe)));let un=0,Ve=NaN,fn=NaN;function Ke(){if(!n||n.state!=="rolling"||!n.world){Ve=NaN;return}const C=n.world.balls[1];if(!C||C.mode!=="roll"){Ve=NaN;return}if(Number.isFinite(Ve)&&(un+=Math.sqrt((C.x-Ve)*(C.x-Ve)+(C.z-fn)*(C.z-fn))),Ve=C.x,fn=C.z,un<.3||(un=0,wt(C.x,C.z)!=="sand"))return;const G=Math.sqrt(C.vx*C.vx+C.vz*C.vz);if(G<.4)return;const z=C.x-C.vx/G*si*.6,ut=C.z-C.vz/G*si*.6;qt(z,ut,2,.4+Math.min(1,G/8),Et.sand,.18,.55)}function An(C){C=Number.isFinite(C)&&C>0?Math.min(C,.1):0,Ke();for(let xt=0;xt<mt;xt++)Wt[xt]&&(Rt[xt]-=C,Rt[xt]<=0&&(Wt[xt]=0,Vt[xt]===1&&ae(Ut[xt],Dt[xt],Ct[xt],1.15)));const G=l.attrs.iPos.array,z=l.attrs.iRot.array,ut=l.attrs.iSize.array,vt=l.attrs.iCol.array;let St=0;if(lt>0)for(let xt=0;xt<o;xt++){if(!W[xt])continue;if(A[xt]-=C,A[xt]<=0){W[xt]=0,lt--;continue}if(!_t[xt]){const Ht=Math.exp(-X[xt]*C);if(_[xt]*=Ht,w[xt]*=Ht,E[xt]=E[xt]*Ht-gy*st[xt]*C,p[xt]+=_[xt]*C,v[xt]+=E[xt]*C,y[xt]+=w[xt]*C,at[xt]+=rt[xt]*C,j[xt]===Mo&&st[xt]>0&&(p[xt]+=Math.sin(at[xt]*.7+xt)*.4*C),it[xt]&&E[xt]<0){const Me=pt(p[xt],y[xt])+.03;if(v[xt]<=Me){if(it[xt]===2){W[xt]=0,lt--;continue}v[xt]=Me,_t[xt]=1,k[xt]=1,V[xt]=0,$[xt]=0,at[xt]=Math.PI/2+Mt(-.15,.15),A[xt]>1.2&&(A[xt]=1.2)}}}const te=1-A[xt]/b[xt],ne=Math.min(1,te*12),ee=_t[xt]?Math.min(1,A[xt]/1.2):Math.min(1,A[xt]/(b[xt]*.35)),Xt=S[xt]+(M[xt]-S[xt])*te,pe=St*4;G[pe]=p[xt],G[pe+1]=v[xt],G[pe+2]=y[xt],G[pe+3]=j[xt],z[pe]=k[xt],z[pe+1]=V[xt],z[pe+2]=$[xt],z[pe+3]=at[xt],ut[pe]=Xt,ut[pe+1]=Xt*T[xt],ut[pe+2]=q[xt],ut[pe+3]=0,vt[pe]=ft[xt],vt[pe+1]=nt[xt],vt[pe+2]=Y[xt],vt[pe+3]=U[xt]*ne*ee,St++}if(l.geo.instanceCount=St,St>0)for(let xt=0;xt<$a.length;xt++){const te=l.attrs[$a[xt]],ne=x[xt];ne.count=St*4,te.updateRanges.length=0,te.updateRanges.push(ne),te.needsUpdate=!0}d.visible=St>0;const At=h.attrs.iRing.array,Nt=h.attrs.iRingN.array,kt=h.attrs.iRingC.array,It=h.attrs.iRingF.array;let Zt=0;for(let xt=0;xt<a;xt++){if(!ht[xt])continue;if(R[xt]>0){R[xt]-=C;continue}Kt[xt]+=C;const te=Kt[xt]/O[xt];if(te>=1){ht[xt]=0;continue}const ne=1-(1-te)*(1-te)*(1-te),ee=Zt*4;At[ee]=yt[xt],At[ee+1]=Ft[xt],At[ee+2]=N[xt],At[ee+3]=zt[xt]+(Yt[xt]-zt[xt])*ne,Nt[ee]=ot[xt],Nt[ee+1]=H[xt],Nt[ee+2]=tt[xt],Nt[ee+3]=Ot[xt]+($t[xt]-Ot[xt])*te,kt[ee]=L[xt],kt[ee+1]=B[xt],kt[ee+2]=K[xt],kt[ee+3]=I[xt]*(1-te*te),It[Zt*2]=F[xt],It[Zt*2+1]=ct[xt]*(1-te),Zt++}if(h.geo.instanceCount=Zt,Zt>0)for(let xt=0;xt<Za.length;xt++){const te=h.attrs[Za[xt]],ne=m[xt];ne.count=Zt*te.itemSize,te.updateRanges.length=0,te.updateRanges.push(ne),te.needsUpdate=!0}g.visible=Zt>0}function D(){W.fill(0),ht.fill(0),Wt.fill(0),lt=0,un=0,Ve=NaN,l.geo.instanceCount=0,h.geo.instanceCount=0,d.visible=!1,g.visible=!1}function P(){for(const C of Ce)typeof C=="function"&&C();s.remove(d,g),l.geo.dispose(),h.geo.dispose(),u.dispose(),f.dispose()}return{update:An,clear:D,dispose:P,get count(){return l.geo.instanceCount},get ringCount(){return h.geo.instanceCount}}}const le={enabled:!0,pulling:!1,pull:0,strike:-1,placing:!1,hint:0};function Sy(){le.enabled=!0,le.pulling=!1,le.pull=0,le.strike=-1,le.placing=!1,le.hint=0}const ui=Bt.R,ll=.04,Ja=220,Qa=120,by=.2,Pf={halfW:.27,haloW:.08,period:1,speed:2,startGap:ui+.1},Lf={halfW:.42,haloW:.09,startGap:ui+.12},wy=.95,Ey=1.55,Ay=ui+.22,Ty=.85,Fn={rest:.12,travel:2.4,elev:9*Math.PI/180,hold:.12},Df=de.eightArrow;class Ne{constructor(t){this.value=t}}const Cy=`
attribute float aDist;
attribute float aSide;
varying float vDist;
varying float vSide;
void main() {
  vDist = aDist;
  vSide = aSide;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Ry=`
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
}`,Py=`
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
}`,Ly=`
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
const float BALL_R = ${ui.toFixed(3)};

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
}`;function If(i,t){return new mn({uniforms:{uColor:{value:new se(t.color)},uHalo:{value:new se(de.guideHalo)},uHaloAlpha:new Ne(t.haloAlpha),uHalfW:new Ne(t.halfW),uHaloW:new Ne(t.haloW),uLen:new Ne(1),uStartGap:new Ne(t.startGap),uEndGap:new Ne(0),uFadeLen:new Ne(0),uPeriod:new Ne(t.period||1),uSpeed:new Ne(t.speed||0),uTime:i,uOpacity:new Ne(1),uArrow:new Ne(t.arrow?1:0),uHead:new Ne(1),uStub:new Ne(1e6)},vertexShader:Cy,fragmentShader:Ry,transparent:!0,depthWrite:!1,toneMapped:!1,side:Mn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}function zf(i,t){const e=i*2,n=new Ge,s=new Float32Array(e*6),r=new Float32Array(e*2),o=new Float32Array(e*2);for(let d=0;d<e;d++)o[d*2]=-1,o[d*2+1]=1;const a=new Uint16Array((e-1)*6);for(let d=0;d<e-1;d++){const h=d*2;a[d*6]=h,a[d*6+1]=h+1,a[d*6+2]=h+2,a[d*6+3]=h+1,a[d*6+4]=h+3,a[d*6+5]=h+2}n.setIndex(new Oe(a,1));const c=new Oe(s,3).setUsage(Ni),l=new Oe(r,1).setUsage(Ni);n.setAttribute("position",c),n.setAttribute("aDist",l),n.setAttribute("aSide",new Oe(o,1)),n.setDrawRange(0,0),n.boundingSphere=new Gi(new J,1e4);const u=new De(n,t);return u.frustumCulled=!1,{mesh:u,geo:n,pos:s,dist:r,posAttr:c,distAttr:l,maxPairs:e,len:0,pairs:0}}function tc(i,t,e,n,s,r,o,a){const c=i.pos,l=t*6,u=e-s,d=n-r,h=e+s,f=n+r;return c[l]=u,c[l+1]=a(u,d)+ll,c[l+2]=d,c[l+3]=h,c[l+4]=a(h,f)+ll,c[l+5]=f,i.dist[t*2]=o,i.dist[t*2+1]=o,t+1}function Uf(i,t,e,n,s){let r=0,o=0;for(let a=0;a<e&&r<i.maxPairs-1;a++){const c=t[a*2],l=t[a*2+1];let u=0,d=0,h=0,f=0;if(a>0){u=c-t[a*2-2],d=l-t[a*2-1];const x=Math.sqrt(u*u+d*d);o+=x,x>0&&(u/=x,d/=x)}if(a<e-1){h=t[a*2+2]-c,f=t[a*2+3]-l;const x=Math.sqrt(h*h+f*f);x>0&&(h/=x,f/=x)}if(a===0&&(u=h,d=f),a===e-1&&(h=u,f=d),u*h+d*f>.6){let x=-(d+f),m=u+h;const p=Math.sqrt(x*x+m*m)||1;x/=p,m/=p;const v=-x*d+m*u,y=s/(v>.8?v:.8);r=tc(i,r,c,l,x*y,m*y,o,n)}else r=tc(i,r,c,l,-d*s,u*s,o,n),r=tc(i,r,c,l,-f*s,h*s,o,n)}return i.pairs=r,i.len=o>.001?o:.001,i.posAttr.needsUpdate=!0,i.distAttr.needsUpdate=!0,i.geo.setDrawRange(0,r>1?(r-1)*6:0),i.len}function Nf(i,t,e,n){const s=i.length>>1;if(s<1)return 0;let r=0;e[0]=i[0],e[1]=i[1],r=1;let o=0,a=i[0],c=i[1];for(let l=1;l<s;l++){const u=i[l*2],d=i[l*2+1],h=u-a,f=d-c,g=Math.sqrt(h*h+f*f);if(g<1e-6)continue;o+=g;let x=!1;if(l<s-1){const p=i[l*2+2]-u,v=i[l*2+3]-d,y=Math.sqrt(p*p+v*v);y>1e-6&&(x=(h*p+f*v)/(g*y)<.995)}const m=l===s-1;if(m||x||o>=t||r>=n-1){if(r>=n-1&&!m){a=u,c=d;continue}e[r*2]=u,e[r*2+1]=d,r++,o=0}a=u,c=d}return r===1&&s>1&&(e[2]=i[s*2-2],e[3]=i[s*2-1],r=2),r}const Dy=0,Iy=1,zy=2,Uy=3,Ny=[0,3,1,2],Fy=[40,8,6,6];function Oy(i){const t=[];let e=0,n=0;for(let p=0;p<4;p++){const v=Fy[p];t.push({seg:v,v0:e,count:(v+1)*(v+1),half:1,cx:NaN,cz:NaN}),e+=(v+1)*(v+1),n+=v*v*2}const s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Float32Array(e),a=new Float32Array(e),c=new Uint16Array(n*3);let l=0;for(let p=0;p<4;p++){const{seg:v,v0:y,count:_}=t[p];for(let E=0;E<_;E++)o[y+E]=Ny[p];for(let E=0;E<v;E++)for(let w=0;w<v;w++){const A=y+E*(v+1)+w,b=A+1,S=A+v+1,M=S+1;c[l++]=A,c[l++]=S,c[l++]=b,c[l++]=b,c[l++]=S,c[l++]=M}}const u=new Ge,d=new Oe(s,3).setUsage(Ni),h=new Oe(r,2).setUsage(Ni),f=new Oe(a,1).setUsage(Ni);u.setAttribute("position",d),u.setAttribute("aLocal",h),u.setAttribute("aKind",new Oe(o,1)),u.setAttribute("aMask",f),u.setIndex(new Oe(c,1)),u.boundingSphere=new Gi(new J,1e4);const g={uTime:i,uOpacity:new Ne(1),uPlaceR:new Ne(4),uDashes:new Ne(24),uActive:new Ne(0),uRingA:new Ne(1),uGhostA:new Ne(0),uMarkA:new Ne(0),uMarkKind:new Ne(0),uHintA:new Ne(0),uFwd:{value:new jt(0,-1)},uNormal:{value:new jt(1,0)},uWhite:{value:new se(de.guideWhite)},uShade:{value:new se(de.guideHalo)},uWarn:{value:new se(de.guideWarn)}},x=new mn({uniforms:g,vertexShader:Py,fragmentShader:Ly,transparent:!0,depthWrite:!1,toneMapped:!1,side:Mn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),m=new De(u,x);return m.frustumCulled=!1,m.renderOrder=5,{mesh:m,geo:u,mat:x,uniforms:g,parts:t,pos:s,local:r,mask:a,posAttr:d,localAttr:h,maskAttr:f}}function yo(i,t,e,n,s,r,o){const a=i.parts[t],{seg:c,v0:l}=a,u=i.pos,d=i.local,h=i.mask;for(let f=0;f<=c;f++){const g=f/c*2*s-s;for(let x=0;x<=c;x++){const m=x/c*2*s-s,p=l+f*(c+1)+x,v=e+m,y=n+g;u[p*3]=v,u[p*3+1]=r(v,y)+ll,u[p*3+2]=y,d[p*2]=m,d[p*2+1]=g,h[p]=o&&o(v,y)?1:0}}a.cx=e,a.cz=n,a.half=s,i.posAttr.needsUpdate=!0,i.localAttr.needsUpdate=!0,o&&(i.maskAttr.needsUpdate=!0)}function ky(){const a=[[0,0,4030425],[0,.07,4030425],[.025,.1,4030425],[.07,.104,4030425],[.07,.104,16183516],[.24,.107,16183516],[.24,.107,15320720],[3.4,.15,15320720],[3.4,.155,16183516],[3.48,.155,16183516],[3.48,.156,7027231],[4.7,.18,7027231],[4.7,.182,16763196],[4.8,.183,16763196],[4.8,.184,2302763],[5.9,.19,2302763],[5.9,.192,7027231],[6.35,.196,7027231],[6.35,.196,1447452],[6.43,.17,1447452],[6.43,0,1447452]],c=14,l=a.length*c,u=new Float32Array(l*3),d=new Float32Array(l*3),h=new se;for(let v=0;v<a.length;v++){const[y,_,E]=a[v];h.setHex(E);for(let w=0;w<c;w++){const A=w/c*Math.PI*2,b=(v*c+w)*3;u[b]=y,u[b+1]=Math.cos(A)*_,u[b+2]=Math.sin(A)*_,d[b]=h.r,d[b+1]=h.g,d[b+2]=h.b}}const f=[];for(let v=0;v<a.length-1;v++)for(let y=0;y<c;y++){const _=v*c+y,E=v*c+(y+1)%c,w=_+c,A=E+c;f.push(_,E,w,E,A,w)}const g=new Ge;g.setAttribute("position",new Oe(u,3)),g.setAttribute("color",new Oe(d,3)),g.setIndex(f),g.computeVertexNormals();const x=g.attributes.normal.array;for(let v=0;v<x.length;v++)x[v]!==x[v]&&(x[v]=0);g.computeBoundingSphere();const m=new j_({vertexColors:!0,roughness:.42,metalness:0}),p=new De(g,m);return p.castShadow=!1,p.receiveShadow=!1,p.frustumCulled=!1,p}function By(i){const t=new Ne(0),e=new rs;e.name="guides";const n=Oy(t),s=If(t,{color:de.guideWhite,haloAlpha:.6,...Pf}),r=If(t,{color:Df,haloAlpha:.7,arrow:!0,...Lf}),o=zf(Ja,s),a=zf(Qa,r);o.mesh.renderOrder=10,a.mesh.renderOrder=11;const c=ky();e.add(n.mesh,o.mesh,a.mesh,c),i&&i.scene&&i.scene.add(e);const l=new Float64Array(Math.max(Ja,Qa)*2),u=new se(de.guideWhite),d=new se(de.guideWarn),h=new se(Df),f=new J(1,0,0),g=new J,x=n.uniforms,m={visible:!0,fade:0,t:0,lastState:"idle",level:null,intent:null,guide:null,ringX:NaN,ringZ:NaN,hintA:0,gap:1.4,hold:0,aimX:1,aimZ:0,spin:0,ballX:0,ballZ:0,aimKey:0,poseKey:-1,poseGap:NaN};function p(){n.mesh.visible=!1,o.mesh.visible=!1,a.mesh.visible=!1}p(),c.visible=!1;function v(A,b){const M=A.level.heightAt,T=b&&b.cue;if(!T||T.points.length<4)o.geo.setDrawRange(0,0),x.uGhostA.value=0;else{const ft=Nf(T.points,by,l,Ja),nt=Uf(o,l,ft,M,Pf.halfW),Y=s.uniforms;Y.uLen.value=nt,Y.uColor.value.copy(b.warn?d:u),Y.uEndGap.value=T.hit?ui*.9:0,Y.uFadeLen.value=T.hit?0:Math.min(3,nt*.4),T.hit?(x.uGhostA.value=1,yo(n,zy,T.ghost.x,T.ghost.z,Ay,M,null),x.uNormal.value.set(T.normal.x,T.normal.z)):x.uGhostA.value=0}const k=b&&b.eight;if(!k||k.points.length<4){a.geo.setDrawRange(0,0),x.uMarkA.value=0;return}const V=Nf(k.points,.25,l,Qa),$=Uf(a,l,V,M,Lf.halfW),at=r.uniforms;at.uLen.value=$;let rt=1e6;if(k.bounce){let ft=0;for(let nt=1;nt<V;nt++){const Y=l[nt*2]-l[nt*2-2],U=l[nt*2+1]-l[nt*2-1];if(ft+=Math.sqrt(Y*Y+U*U),Math.abs(l[nt*2]-k.bounce.x)<1e-6&&Math.abs(l[nt*2+1]-k.bounce.z)<1e-6){rt=ft;break}}}if(at.uStub.value=rt,k.hazard){at.uColor.value.copy(d),at.uHead.value=0,at.uEndGap.value=.62,x.uMarkA.value=1,x.uMarkKind.value=k.hazard==="water"?0:1;const ft=(V-1)*2;yo(n,Uy,l[ft],l[ft+1],wy,M,null)}else at.uColor.value.copy(h),at.uHead.value=1,at.uEndGap.value=0,x.uMarkA.value=0}function y(A,b,S){if(S)m.gap=-.02;else if(le.strike>=0){const nt=Fn.rest+le.pull*Fn.travel,Y=le.strike;m.gap=nt+(-.02-nt)*Y*Y}else if(le.pulling)m.gap=Fn.rest+le.pull*Fn.travel;else if(m.gap!==Fn.rest){const nt=b*12>1?1:b*12;m.gap+=(Fn.rest-m.gap)*nt,Math.abs(m.gap-Fn.rest)<.001&&(m.gap=Fn.rest)}if(m.gap===m.poseGap&&m.poseKey===m.aimKey)return;m.poseGap=m.gap,m.poseKey=m.aimKey;const M=m.spin*ui*.55,T=Math.sqrt(Math.max(ui*ui-M*M,0))+m.gap,k=m.aimX,V=m.aimZ,$=m.ballX-k*T-V*M,at=m.ballZ-V*T+k*M,rt=A.level.heightAt(m.ballX,m.ballZ)+ui,ft=Math.cos(Fn.elev);g.set(-k*ft,Math.sin(Fn.elev),-V*ft),c.quaternion.setFromUnitVectors(f,g),c.position.set($,rt,at)}function _(A){const b=Math.sqrt(A.dx*A.dx+A.dz*A.dz)||1;m.aimX=A.dx/b,m.aimZ=A.dz/b,m.spin=A.spin,m.ballX=A.x,m.ballZ=A.z,m.aimKey++}function E(A,b){m.t+=b,t.value=m.t;const S=A?A.state:"idle",M=!!(A&&A.world&&A.level&&S==="ready");m.lastState==="ready"&&S==="rolling"&&(m.hold=Fn.hold),S!==m.lastState&&S==="ready"&&(m.gap=1.4,m.intent=null),m.lastState=S;const T=m.visible&&M&&le.enabled;if(T?m.fade=m.fade+b/.18>1?1:m.fade+b/.18:m.fade=0,T?c.visible=!0:m.hold>0&&m.visible&&A&&A.level?(m.hold-=b,c.visible=m.hold>0):(m.hold=0,c.visible=!1),!T){p(),c.visible&&y(A,b,!0);return}const k=A.level;k!==m.level&&(m.level=k,m.aimKey++,m.ringX=NaN,m.intent=null,m.guide=null,x.uPlaceR.value=k.placeR,x.uDashes.value=Math.max(12,Math.round(2*Math.PI*k.placeR/1.25)));const V=A.world.balls[1];(V.x!==m.ringX||V.z!==m.ringZ)&&(m.ringX=V.x,m.ringZ=V.z,yo(n,Dy,V.x,V.z,k.placeR+Ty,k.heightAt,k.hazardAt));const $=A.intent;if($!==m.intent){m.intent=$,_($),yo(n,Iy,$.x,$.z,Ey,k.heightAt,null);const ft=A.guide();ft!==m.guide&&(m.guide=ft,v(A,ft))}const at=m.fade;x.uOpacity.value!==at&&(x.uOpacity.value=at,s.uniforms.uOpacity.value=at,r.uniforms.uOpacity.value=at),x.uActive.value=le.placing?1:0;const rt=le.placing?0:le.hint;if(m.hintA!==rt){const ft=b*4>1?1:b*4;m.hintA+=(rt-m.hintA)*ft,Math.abs(m.hintA-rt)<.002&&(m.hintA=rt),x.uHintA.value=m.hintA}if(i&&i.camera){const ft=i.camera.matrixWorld.elements,nt=Math.sqrt(ft[8]*ft[8]+ft[10]*ft[10]);if(nt>1e-4){const Y=-ft[8]/nt,U=-ft[10]/nt,q=x.uFwd.value;(Y!==q.x||U!==q.y)&&q.set(Y,U)}}n.mesh.visible=!0,o.mesh.visible=o.geo.drawRange.count>0,a.mesh.visible=a.geo.drawRange.count>0,y(A,b,!1)}const w={update:E,setVisible(A){m.visible=!!A},dispose(){e.parent&&e.parent.remove(e),n.geo.dispose(),n.mat.dispose(),o.geo.dispose(),a.geo.dispose(),s.dispose(),r.dispose(),c.geometry.dispose(),c.material.dispose()}};return Object.defineProperty(w,"_debug",{value:{group:e,decals:n,cuePath:o,arrow:a,stick:c,cueMat:s,arrowMat:r,st:m},enumerable:!1}),w}const Ff="ebg-shot-style",Hy=6,Gy=`
.ebg-shot{position:absolute;inset:0;z-index:20;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .16s ease,visibility 0s linear .16s;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;font-family:"Fredoka",system-ui,sans-serif;font-weight:600;color:#fff;--top:44px;--travel:150px;--spin:84px}
.ebg-shot.on{opacity:1;visibility:visible;transition:opacity .2s ease}
.ebg-shot.touch{--spin:96px}
.ebg-txt{-webkit-text-stroke:4px #13261b;paint-order:stroke fill;text-shadow:0 2px 0 rgba(0,0,0,.25)}
@supports not (paint-order:stroke){.ebg-txt{-webkit-text-stroke:0;text-shadow:0 0 2px #13261b,0 0 2px #13261b,0 2px 0 #13261b}}
.ebg-num{font-family:"Lilita One",system-ui,sans-serif;font-weight:400;letter-spacing:.02em}
.ebg-pow{position:absolute;left:50%;bottom:max(6px,env(safe-area-inset-bottom));width:200px;height:calc(var(--top) + var(--travel) + 14px);transform:translateX(-50%);overflow:hidden;pointer-events:none}
.ebg-track{position:absolute;left:50%;top:var(--top);width:34px;height:var(--travel);margin-left:-17px;border-radius:17px 17px 8px 8px;background:rgba(16,36,26,.38);box-shadow:inset 0 0 0 2px rgba(255,255,255,.6),0 0 0 2px rgba(16,36,26,.45)}
.ebg-fill{position:absolute;left:3px;right:3px;top:3px;height:calc(var(--p,0) * (100% - 6px));border-radius:14px 14px 4px 4px;background:linear-gradient(#ffffff 0,#ffd23f 45%,#ff8a2a 100%);background-size:100% calc(var(--travel) - 6px)}
.ebg-tick{position:absolute;left:-7px;right:-7px;height:3px;margin-top:-1.5px;border-radius:2px;background:#fff;box-shadow:0 0 0 1.5px #13261b}
.ebg-last{position:absolute;left:-17px;width:0;height:0;margin-top:-7px;border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:11px solid #ffd23f;filter:drop-shadow(0 0 1.5px #13261b) drop-shadow(0 0 1px #13261b);transition:top .2s ease}
.ebg-cue{position:absolute;left:50%;top:calc(var(--top) - 4px);width:20px;margin-left:-10px;height:calc(var(--travel) + 40px);border-radius:9px 9px 4px 4px;
  background:linear-gradient(90deg,rgba(255,255,255,.5),rgba(255,255,255,0) 42%,rgba(0,0,0,.22)),
  linear-gradient(#3d7fd9 0 8px,#f6f0dc 8px 21px,#e9c690 21px 58%,#f6f0dc 58% calc(58% + 5px),#6b3a1f calc(58% + 5px) calc(76% - 4px),#ffc93c calc(76% - 4px) 76%,#23232b 76%);
  box-shadow:0 0 0 2px #13261b,0 3px 6px rgba(0,0,0,.28);transition:transform .22s cubic-bezier(.2,.8,.3,1.25)}
.ebg-pct{position:absolute;left:calc(50% + 24px);top:calc(var(--top) - 14px);font-size:26px;line-height:1;opacity:0;transition:transform .22s cubic-bezier(.2,.8,.3,1.25),opacity .15s}
.ebg-pct.show{opacity:1}
.ebg-pct.fade{opacity:0;transition:transform .22s cubic-bezier(.2,.8,.3,1.25),opacity .5s ease .35s}
.ebg-pow.pull .ebg-cue,.ebg-pow.pull .ebg-pct{transition:none}
.ebg-pow.strike .ebg-cue,.ebg-pow.strike .ebg-pct{transition:transform .08s cubic-bezier(.6,0,1,1),opacity .15s}
.ebg-hint{position:absolute;left:calc(50% + 22px);top:calc(var(--top) - 2px);font-size:18px;line-height:1;opacity:0;transition:opacity .3s;display:flex;flex-direction:column;align-items:center}
.ebg-hint svg{width:22px;height:22px;margin-top:2px}
.ebg-hint.show{opacity:1;animation:ebg-bob 1.1s ease-in-out infinite}
@keyframes ebg-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}
.ebg-grab{position:absolute;left:50%;top:0;width:100px;margin-left:-50px;height:calc(var(--top) + 70px);pointer-events:auto;touch-action:none;cursor:grab}
.ebg-pow.pull .ebg-grab{cursor:grabbing}
.ebg-spin{position:absolute;right:max(14px,calc(env(safe-area-inset-right) + 8px));bottom:max(30px,calc(env(safe-area-inset-bottom) + 22px));display:none;flex-direction:column;align-items:center;pointer-events:auto;touch-action:none;cursor:ew-resize;padding:4px}
.ebg-spin.on{display:flex}
.ebg-spin-label{font-size:14px;line-height:1;margin-bottom:6px;letter-spacing:.08em}
.ebg-spin-row{display:flex;align-items:center;gap:3px}
.ebg-spin-face{position:relative;width:var(--spin);height:var(--spin);border-radius:50%;background:radial-gradient(circle at 35% 30%,#ffffff 0,#fffdf4 38%,#e6dfca 100%);box-shadow:0 0 0 3px #13261b,0 4px 8px rgba(0,0,0,.3)}
.ebg-spin-axis{position:absolute;left:16%;right:16%;top:50%;height:4px;margin-top:-2px;border-radius:2px;background:rgba(19,38,27,.2)}
.ebg-spin-mid{position:absolute;left:50%;top:50%;width:4px;height:16px;margin:-8px 0 0 -2px;border-radius:2px;background:rgba(19,38,27,.32)}
.ebg-spin-dot{position:absolute;left:50%;top:50%;width:22px;height:22px;margin:-11px 0 0 -11px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#6ea3ec 0,#3d7fd9 60%,#2f69b8 100%);box-shadow:0 0 0 3px #fff,0 0 0 5px #13261b;transition:transform .14s ease-out}
.ebg-spin.drag .ebg-spin-dot{transition:none}
.ebg-spin-arr{width:24px;height:24px;opacity:.5;transition:opacity .15s,transform .15s}
.ebg-spin-arr.r{transform:scaleX(-1)}
.ebg-spin-arr.hot{opacity:1;transform:scale(1.18)}
.ebg-spin-arr.r.hot{transform:scale(-1.18,1.18)}
.ebg-ff{position:absolute;z-index:20;left:50%;bottom:max(18px,calc(env(safe-area-inset-bottom) + 12px));transform:translateX(-50%);padding:6px 16px;border-radius:999px;background:rgba(16,36,26,.5);font-family:"Fredoka",system-ui,sans-serif;font-weight:600;font-size:16px;line-height:1.2;color:#fff;opacity:0;visibility:hidden;transition:opacity .25s,visibility 0s linear .25s,background .15s;pointer-events:none;white-space:nowrap;-webkit-user-select:none;user-select:none}
.ebg-ff.show,.ebg-ff.on{opacity:1;visibility:visible;transition:opacity .25s,background .15s}
.ebg-ff.on{background:rgba(255,138,42,.9)}
`,Of='<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21C17 12 13.5 8 6 7" stroke="#13261b" stroke-width="7"/><path d="M10.5 2.5L5.5 7l5 4.5" stroke="#13261b" stroke-width="7"/><path d="M17 21C17 12 13.5 8 6 7" stroke="#fff" stroke-width="3"/><path d="M10.5 2.5L5.5 7l5 4.5" stroke="#fff" stroke-width="3"/></g></svg>',Vy='<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7" stroke="#13261b" stroke-width="8"/><path d="M5 8l7 7 7-7" stroke="#fff" stroke-width="4"/></g></svg>';function ze(i,t,e,n){const s=document.createElement(i);return t&&(s.className=t),n&&(s.textContent=n),e&&e.appendChild(s),s}function Wy(){try{return typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}catch{return!1}}function Xy(i,t={}){if(typeof document>"u"||!i){const N=()=>{};return{setVisible:N,setSpinEnabled:N,setSpin:N,setPull:N,setPreset:N,setPullHint:N,setFastForward:N,cancelPull:N,travel:()=>150,parts:{},dispose:N}}if(!document.getElementById||!document.getElementById(Ff)){const N=ze("style");N.id=Ff,N.textContent=Gy,(document.head||document.body).appendChild(N)}const e=Wy(),n=ze("div","ebg-shot"+(e?" touch":""),i),s=ze("div","ebg-pow",n),r=ze("div","ebg-track",s),o=ze("div","ebg-fill",r);for(const N of[.25,.5,.75]){const ot=ze("div","ebg-tick",r);ot.style.top=N*100+"%"}const a=ze("div","ebg-last",r),c=ze("div","ebg-cue",s),l=ze("div","ebg-pct ebg-txt ebg-num",s,"0%"),u=ze("div","ebg-hint ebg-txt",s);ze("span","",u,"Pull");const d=ze("span","",u);d.innerHTML=Vy;const h=ze("div","ebg-grab",s);h.setAttribute("aria-label","Pull the cue down to shoot");const f=ze("div","ebg-spin",n);ze("div","ebg-spin-label ebg-txt",f,"SPIN");const g=ze("div","ebg-spin-row",f),x=ze("span","ebg-spin-arr",g);x.innerHTML=Of;const m=ze("div","ebg-spin-face",g);ze("div","ebg-spin-axis",m),ze("div","ebg-spin-mid",m);const p=ze("div","ebg-spin-dot",m),v=ze("span","ebg-spin-arr r",g);v.innerHTML=Of;const y=ze("div","ebg-ff ebg-txt",i,"Hold to speed up");let _=150;const E=e?96:84,w=E/2-11-5;function A(){const N=typeof window<"u"&&window.innerHeight?window.innerHeight:600;_=Math.max(110,Math.min(210,Math.round(N*.3))),n.style.setProperty("--travel",_+"px"),n.style.setProperty("--spin",E+"px")}A(),typeof window<"u"&&window.addEventListener&&window.addEventListener("resize",A);let b=!1,S="idle",M=0,T=0,k=0,V=!1;function $(N,ot){M=N<0?0:N>1?1:N,ot!==S&&(S=ot,s.className="ebg-pow"+(ot==="pull"?" pull":ot==="strike"?" strike":""),l.className="ebg-pct ebg-txt ebg-num"+(ot==="pull"?" show":ot==="cancel"?" show fade":""));const H=ot==="strike"?0:M*_;c.style.transform="translateY("+H.toFixed(1)+"px)",l.style.transform="translateY("+H.toFixed(1)+"px)",o.style.setProperty("--p",ot==="strike"?"0":M.toFixed(4)),l.textContent=(ot==="cancel"?0:Math.round(M*100))+"%",ot==="pull"&&V&&at(!1)}function at(N){N=!!N,N!==V&&(V=N,u.className="ebg-hint ebg-txt"+(N?" show":""))}function rt(N){T=N<-1?-1:N>1?1:N,p.style.transform="translateX("+(T*w).toFixed(1)+"px)",x.className="ebg-spin-arr"+(T<0?" hot":""),v.className="ebg-spin-arr r"+(T>0?" hot":"")}let ft=null;function nt(N){if(!(N.pointerType==="mouse"&&N.button!==0)&&(N.preventDefault&&N.preventDefault(),!ft&&!(!t.onPullStart||!t.onPullStart(N.pointerId,N.pointerType)))){ft={id:N.pointerId,y0:N.clientY,t:0};try{h.setPointerCapture(N.pointerId)}catch{}}}function Y(N){if(!ft||N.pointerId!==ft.id)return;const ot=N.clientY-ft.y0-Hy,H=ot<=0?0:ot>=_?1:ot/_;ft.t=H,t.onPull&&t.onPull(H)}function U(N,ot){if(!ft||N.pointerId!==ft.id)return;ot||Y(N);const H=ft.t;ft=null;try{h.releasePointerCapture(N.pointerId)}catch{}t.onPullEnd&&t.onPullEnd(H,ot)}const q=N=>U(N,!1),j=N=>U(N,!0);h.addEventListener("pointerdown",nt),h.addEventListener("pointermove",Y),h.addEventListener("pointerup",q),h.addEventListener("pointercancel",j),h.addEventListener("lostpointercapture",j);let st=null,X={t:-1e9,x:0,y:0};function it(N){const ot=m.getBoundingClientRect(),H=ot.left+ot.width/2;return(N-H+st.off)/w}function _t(N){if(N.pointerType==="mouse"&&N.button!==0||(N.preventDefault&&N.preventDefault(),st))return;const ot=N.timeStamp||0;if(ot-X.t<320&&Math.abs(N.clientX-X.x)<24&&Math.abs(N.clientY-X.y)<24){X.t=-1e9,t.onSpin&&t.onSpin(0,"reset");return}const tt=m.getBoundingClientRect(),zt=tt.left+tt.width/2+T*w,Yt=Math.abs(N.clientX-zt)<=16;st={id:N.pointerId,off:Yt?zt-N.clientX:0,sx:N.clientX,sy:N.clientY,ts:ot},f.className="ebg-spin on drag";try{f.setPointerCapture(N.pointerId)}catch{}t.onSpin&&t.onSpin(it(N.clientX),"start")}function W(N){!st||N.pointerId!==st.id||t.onSpin&&t.onSpin(it(N.clientX),"move")}function et(N){if(!st||N.pointerId!==st.id)return;const ot=it(N.clientX);X=Math.abs(N.clientX-st.sx)<6&&Math.abs(N.clientY-st.sy)<6?{t:st.ts,x:st.sx,y:st.sy}:{t:-1e9,x:0,y:0},st=null,f.className="ebg-spin on";try{f.releasePointerCapture(N.pointerId)}catch{}t.onSpin&&t.onSpin(ot,"end")}function lt(N){!st||N.pointerId!==st.id||(st=null,f.className="ebg-spin on",t.onSpin&&t.onSpin(T,"end"))}f.addEventListener("pointerdown",_t),f.addEventListener("pointermove",W),f.addEventListener("pointerup",et),f.addEventListener("pointercancel",lt);let yt=!1;const Ft={setVisible(N){N=!!N,N!==b&&(b=N,n.className="ebg-shot"+(e?" touch":"")+(N?" on":""))},setSpinEnabled(N){N=!!N,N!==yt&&(yt=N,f.className="ebg-spin"+(N?" on":""))},setSpin:rt,setPull:$,setPreset(N){const ot=N<0?0:N>1?1:N;a.style.top=(ot*100).toFixed(2)+"%"},setPullHint:at,setFastForward(N){N!==k&&(k=N,y.className="ebg-ff ebg-txt"+(N===1?" show":N===2?" on":""),y.textContent=N===2?"▶▶ 3×":"Hold to speed up")},cancelPull(){if(ft){try{h.releasePointerCapture(ft.id)}catch{}ft=null}st&&(st=null,f.className="ebg-spin"+(yt?" on":""))},travel:()=>_,parts:{root:n,pow:s,grab:h,spin:f,face:m,dot:p,pct:l,hint:u,ff:y,cue:c,fill:o,last:a},dispose(){typeof window<"u"&&window.removeEventListener&&window.removeEventListener("resize",A),h.removeEventListener("pointerdown",nt),h.removeEventListener("pointermove",Y),h.removeEventListener("pointerup",q),h.removeEventListener("pointercancel",j),h.removeEventListener("lostpointercapture",j),f.removeEventListener("pointerdown",_t),f.removeEventListener("pointermove",W),f.removeEventListener("pointerup",et),f.removeEventListener("pointercancel",lt),n.parentNode&&n.parentNode.removeChild(n),y.parentNode&&y.parentNode.removeChild(y)}};return $(0,"idle"),rt(0),Ft.setPreset(.5),Ft}const ec={mouse:4,pen:6,touch:10},kf=.06,qy=.1,nc=.08,Yy=.25,Bf=.35,Ky=.7,Hf=110,Gf=320,jy=.5,$y=2.4,Vo=Math.PI/180,Zy=1*Vo,Jy=.1*Vo,Qy=.1,t2=10;function e2({stage:i,rig:t,play:e,events:n,uiRoot:s}){Sy(),le.enabled=!1;const r=typeof window<"u"?window:null,o=typeof document<"u"?document:null,a=i&&i.renderer&&i.renderer.domElement?i.renderer.domElement:null;let c=!1;const l={clock:.5,firedAt:-1e9,readyT:.5,idleT:.5,rollT:.5,aimHoldT:.5,spinHoldT:.5};l.clock=0,l.readyT=0,l.idleT=0,l.rollT=0,l.aimHoldT=0,l.spinHoldT=0;let u=e.state,d=!1;const h={shots:0,placed:!1,placeShots:0};let f=null,g=null,x=null;const m={left:!1,right:!1,shift:!1,a:!1,d:!1,f:!1},p=new Map;let v=null;const y=new Set;let _=1,E={left:0,top:0};const w=Xy(s,{onPullStart(I,F){return M()?(f={t0:l.clock,p:0},le.pulling=!0,le.pull=0,l.idleT=0,w.setPull(0,"pull"),!0):!1},onPull(I){f&&(f.p=I,le.pull=I,w.setPull(I,"pull"))},onPullEnd(I,F){if(!f)return;const ct=l.clock-f.t0<qy;f=null,le.pulling=!1,F||ct||I<kf||!S()?V(!0):$(I)},onSpin(I,F){!c||e.state!=="ready"||!(e.level&&e.level.spin)||(l.idleT=0,T(F==="reset"?0:I),w.setSpin(e.intent.spin))}}),A=()=>c&&e.state==="ready",b=()=>!!(f||g||x),S=()=>c&&e.state==="ready"&&!x,M=()=>S()&&!b();function T(I){let F=I<-1?-1:I>1?1:I;Math.abs(F)<Qy&&(F=0);const ct=e.intent.spin;e.setSpin(F),F===0&&ct!==0&&k(8)}function k(I){try{typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(I)}catch{}}function V(I){f=null,g=null,x=null,w.cancelPull(),le.pulling=!1,le.pull=0,le.strike=-1,w.setPull(0,I?"cancel":"idle")}function $(I){x={t:0,p:I},le.pulling=!1,le.pull=I,le.strike=0,w.setPull(I,"strike")}function at(I){if(x=null,le.strike=-1,le.pull=0,!S()){V(!1);return}e.setPower(I),e.fire()&&(l.firedAt=l.clock,h.shots++,w.setPull(0,"idle"))}function rt(I){return{x:I.clientX-E.left,y:I.clientY-E.top}}function ft(){if(a&&a.getBoundingClientRect){const I=a.getBoundingClientRect();E={left:I.left,top:I.top}}}function nt(){const I=e.intent,F=e.level?e.level.heightAt(I.x,I.z)+Bt.R:Bt.R;return t.groundToScreen(I.x,F,I.z)}function Y(){const I=e.intent;return{x:I.x,z:I.z,offset:I.offset}}function U(I){if(!I||e.state!=="ready")return;e.setPlacement(I.x,I.z);const F=I.offset-e.intent.offset;F!==0&&e.rotateAim(F)}function q(I){I!==_&&(_=I,e.setSpeed(I))}function j(){const I=p.values(),F=I.next().value,ct=I.next().value;v={kind:"pinch",d0:Math.hypot(F.x-ct.x,F.y-ct.y)||1,cx:(F.x+ct.x)/2,cy:(F.y+ct.y)/2}}function st(I){if(!c)return;I.preventDefault&&I.preventDefault(),ft();const F=rt(I);if(I.pointerType==="mouse"&&I.button!==0){if(I.button===2&&b()&&!x){V(!0);return}(I.button===1||I.button===2)&&(v={kind:"pan",id:I.pointerId,x:F.x,y:F.y},lt(I.pointerId));return}if(p.set(I.pointerId,F),l.idleT=0,e.state==="rolling"){l.clock-l.firedAt>=Yy&&y.add(I.pointerId),p.size>=2?j():v={kind:"ff",id:I.pointerId};return}if(p.size>=2){v&&(v.kind==="place"||v.kind==="aim")&&(U(v.snap),le.placing=!1),p.size===2&&j();return}if(e.state!=="ready"){v={kind:"block"};return}lt(I.pointerId);const ct=I.pointerType||"mouse",ht=nt(),Lt=e.intent,mt=t.pxPerMetre(Lt.x,Lt.z)||20,Rt=Math.max(ct==="touch"?34:28,.9*mt),Ut=ht&&Math.hypot(F.x-ht.x,F.y-ht.y)<=Rt,Dt={id:I.pointerId,type:ct,sx:F.x,sy:F.y,t0:l.clock,moved:!1,snap:Y(),travelled:0};if(Ut)v={...Dt,kind:"place",grabX:ht.x-F.x,grabY:ht.y-F.y};else if(v={...Dt,kind:"aim",lastX:F.x,lastY:F.y,lastTs:I.timeStamp||0,speed:0},ct!=="touch"){const Ct=t.screenToGround(F.x,F.y);Ct&&e.setAimToward(Ct.x,Ct.z)}}function X(I){if(!c)return;const F=rt(I);if(v&&v.kind==="pan"&&I.pointerId===v.id){const gt=F.x-v.x,Et=F.y-v.y;v.x=F.x,v.y=F.y,(gt||Et)&&t.panBy(gt,Et);return}if(!p.has(I.pointerId)||(p.set(I.pointerId,F),!v))return;if(v.kind==="pinch"){if(p.size<2)return;const gt=p.values(),Et=gt.next().value,Z=gt.next().value,pt=Math.hypot(Et.x-Z.x,Et.y-Z.y)||1,wt=(Et.x+Z.x)/2,Tt=(Et.y+Z.y)/2,Pt=pt/v.d0;Math.abs(Pt-1)>1e-4&&t.zoomBy(Pt,wt,Tt),(wt!==v.cx||Tt!==v.cy)&&t.panBy(wt-v.cx,Tt-v.cy),v.d0=pt,v.cx=wt,v.cy=Tt;return}if(I.pointerId!==v.id||v.kind!=="place"&&v.kind!=="aim"||e.state!=="ready")return;l.idleT=0;const ct=Math.hypot(F.x-v.sx,F.y-v.sy);if(ct>v.travelled&&(v.travelled=ct),v.kind==="place"){if(!v.moved){if(ct<(ec[v.type]||6))return;v.moved=!0,le.placing=!0}let gt=v.grabX,Et=v.grabY;if(v.type==="touch"){const pt=v.travelled>=40?1:v.travelled/40;gt+=(0-gt)*pt,Et+=(-52-Et)*pt}const Z=t.screenToGround(F.x+gt,F.y+Et);Z&&e.setPlacement(Z.x,Z.z);return}if(v.type!=="touch"){!v.moved&&ct>=(ec[v.type]||4)&&(v.moved=!0);const gt=t.screenToGround(F.x,F.y);gt&&e.setAimToward(gt.x,gt.z);return}if(!v.moved){if(ct<ec.touch)return;v.moved=!0,v.lastX=F.x,v.lastY=F.y,v.lastTs=I.timeStamp||0;return}const ht=nt(),Lt=F.x-v.lastX,mt=F.y-v.lastY,Rt=I.timeStamp||0,Ut=Rt-v.lastTs;if(v.lastX=F.x,v.lastY=F.y,v.lastTs=Rt,!ht)return;const Dt=F.x-Lt-ht.x,Ct=F.y-mt-ht.y,Vt=Math.hypot(Dt,Ct);if(Vt<1)return;const Wt=(Dt*mt-Ct*Lt)/Vt,ie=Vt<Hf?Hf:Vt>Gf?Gf:Vt;if(Ut>0){const gt=Math.hypot(Lt,mt)/(Ut/1e3);v.speed+=(gt-v.speed)*.35}const Q=v.speed,Mt=Q<=500?0:Q>=1800?1:(Q-500)/1300,dt=Bf+(Ky-Bf)*Mt*Mt;Wt!==0&&e.rotateAim(Wt/ie*dt)}function it(I){const F=rt(I),ct=p.delete(I.pointerId);if(y.delete(I.pointerId),v&&v.kind==="pan"&&I.pointerId===v.id){v=null,yt(I.pointerId);return}if(!ct||!v)return;if(v.kind==="ff"){I.pointerId===v.id&&(v=null);return}if(v.kind==="pinch"||v.kind==="block"){p.size===0?v=null:v={kind:"block"};return}if(I.pointerId!==v.id)return;yt(I.pointerId);const ht=v;if(v=null,ht.kind==="place"){le.placing=!1,ht.moved&&(h.placed=!0);return}if(ht.kind==="aim"&&ht.type==="touch"&&!ht.moved&&l.clock-ht.t0<=jy&&c&&e.state==="ready"){const Lt=t.screenToGround(F.x,F.y);Lt&&e.setAimToward(Lt.x,Lt.z)}}function _t(I){p.delete(I.pointerId),y.delete(I.pointerId),v&&(v.id===I.pointerId||p.size===0)&&(v.kind==="place"&&(le.placing=!1),v=p.size?{kind:"block"}:null)}function W(I){if(I.preventDefault&&I.preventDefault(),!c)return;ft();const F=rt(I),ct=I.deltaMode===1?I.deltaY*16:I.deltaMode===2?I.deltaY*400:I.deltaY;let ht=Math.exp(-ct*.0015);ht=ht<.8?.8:ht>1.25?1.25:ht,t.zoomBy(ht,F.x,F.y)}const et=I=>{I.preventDefault&&I.preventDefault()};function lt(I){try{a&&a.setPointerCapture&&a.setPointerCapture(I)}catch{}}function yt(I){try{a&&a.releasePointerCapture&&a.releasePointerCapture(I)}catch{}}a&&(a.style&&(a.style.touchAction="none"),a.addEventListener("pointerdown",st),a.addEventListener("pointermove",X),a.addEventListener("pointerup",it),a.addEventListener("pointercancel",_t),a.addEventListener("wheel",W,{passive:!1}),a.addEventListener("contextmenu",et));function Ft(I){const F=I.target;return!!(F&&(F.tagName==="INPUT"||F.tagName==="TEXTAREA"||F.isContentEditable))}function N(I){if(Ft(I))return;const F=I.code;if(F==="ShiftLeft"||F==="ShiftRight"){m.shift=!0;return}if(c&&((F==="Space"||F.startsWith("Arrow"))&&I.preventDefault(),!I.repeat))switch(F){case"ArrowLeft":case"ArrowRight":{const ct=F==="ArrowLeft";ct?m.left=!0:m.right=!0,l.aimHoldT=0,A()&&(l.idleT=0,e.rotateAim((ct?-1:1)*(I.shiftKey||m.shift?Jy:Zy)));break}case"KeyA":case"KeyD":{F==="KeyA"?m.a=!0:m.d=!0,l.spinHoldT=0,H(F==="KeyA"?-1:1);break}case"Space":M()&&(g={t:0,p:0},le.pulling=!0,le.pull=0,l.idleT=0,w.setPull(0,"pull"));break;case"Backspace":case"KeyX":(f||g)&&V(!0);break;case"KeyO":case"KeyV":n.emit("ui:overview",{on:!d});break;case"KeyF":m.f=!0;break}}function ot(I){const F=I.code;if(F==="ShiftLeft"||F==="ShiftRight"){m.shift=!1;return}if(F==="ArrowLeft")m.left=!1;else if(F==="ArrowRight")m.right=!1;else if(F==="KeyA")m.a=!1;else if(F==="KeyD")m.d=!1;else if(F==="KeyF")m.f=!1;else if(F==="Space"&&g){const ct=g.p;g=null,le.pulling=!1,ct>=kf&&S()?$(ct):V(!0)}}function H(I){if(!A()||!(e.level&&e.level.spin))return;l.idleT=0;const F=Math.round((e.intent.spin+I*.1)*10)/10;e.setSpin(F<-1?-1:F>1?1:F)}function tt(){b()&&V(!1),m.left=m.right=m.shift=m.a=m.d=m.f=!1,p.clear(),v&&v.kind==="place"&&(le.placing=!1),v=null,y.clear()}function zt(){o&&o.visibilityState==="hidden"&&tt()}r&&(r.addEventListener("keydown",N),r.addEventListener("keyup",ot),r.addEventListener("blur",tt),r.addEventListener&&a&&r.addEventListener("resize",ft)),o&&o.addEventListener&&o.addEventListener("visibilitychange",zt);const Yt=[n.on("ui:overview",({on:I})=>{d=!!I}),n.on("ad:start",()=>tt()),n.on("shot:fire",()=>{l.firedAt=l.clock,l.rollT=0,w.setVisible(!1)}),n.on("hole:start",()=>{d=!1})];let Ot=!1,$t=!1,Kt=null,O=0;function R(I){l.clock+=I;const F=e.state;if(F!==u&&(F==="ready"&&(l.readyT=0,l.idleT=0),u==="ready"&&b()&&!x&&V(!1),u=F),x&&(x.t+=I,le.strike=x.t/nc>1?1:x.t/nc,x.t>=nc&&at(x.p)),g){g.t+=I;const Ut=g.t/$y%1;g.p=1-Math.abs(1-2*Ut),le.pull=g.p,w.setPull(g.p,"pull")}if(A()){l.readyT+=I,l.idleT+=I;const Ut=(m.right?1:0)-(m.left?1:0);if(Ut!==0&&(l.aimHoldT+=I,l.idleT=0,l.aimHoldT>.25)){const Ct=m.shift?3*Vo:(30+60*Math.min(1,(l.aimHoldT-.25)/1.2))*Vo;e.rotateAim(Ut*Ct*I)}const Dt=(m.d?1:0)-(m.a?1:0);Dt!==0&&(l.spinHoldT+=I,l.spinHoldT>.35&&(l.spinHoldT-=.1,H(Dt)))}const ct=c&&F==="rolling";ct&&(l.rollT+=I),F!=="rolling"&&y.size&&y.clear(),q(ct&&(m.f||y.size>0)?3:1);const ht=ct?_>1?2:l.rollT>1.5?1:0:0;ht!==O&&(O=ht,w.setFastForward(ht));const Lt=c&&F==="ready";Lt!==Ot&&(Ot=Lt,w.setVisible(Lt),!Lt&&b()&&!x&&V(!1));const mt=!!(e.level&&e.level.spin);mt!==$t&&($t=mt,w.setSpinEnabled(mt)),e.intent!==Kt&&(Kt=e.intent,w.setSpin(e.intent.spin),w.setPreset(e.lastPower!==void 0?e.lastPower:e.intent.power));const Rt=l.idleT>t2;w.setPullHint(Lt&&!b()&&(h.shots===0&&l.readyT>.6||Rt)),le.hint=Lt&&!v&&(!h.placed&&h.shots<3&&l.readyT>.4||Rt)?1:0,le.enabled=c}function L(I){I=!!I,I!==c&&(c=I,le.enabled=I,I?(ft(),e.state==="ready"&&(Ot=!0,w.setVisible(!0))):(b()&&V(!1),p.clear(),v&&v.kind==="place"&&(le.placing=!1),v=null,y.clear(),m.left=m.right=m.a=m.d=m.f=!1,q(1),Ot=!1,w.setVisible(!1),O=0,w.setFastForward(0),w.setPullHint(!1)))}function B(){L(!1);for(const I of Yt)I();a&&(a.removeEventListener("pointerdown",st),a.removeEventListener("pointermove",X),a.removeEventListener("pointerup",it),a.removeEventListener("pointercancel",_t),a.removeEventListener("wheel",W),a.removeEventListener("contextmenu",et)),r&&(r.removeEventListener("keydown",N),r.removeEventListener("keyup",ot),r.removeEventListener("blur",tt),r.removeEventListener("resize",ft)),o&&o.removeEventListener&&o.removeEventListener("visibilitychange",zt),w.dispose()}const K={enable:L,update:R,dispose:B};return Object.defineProperty(K,"_debug",{value:{hud:w,session:h,get gesture(){return v}},enumerable:!1}),K}function bt(i,t,e){const[n,...s]=i.split("."),r=document.createElement(n||"div");if(s.length&&(r.className=s.join(" ")),t)for(const o in t){const a=t[o];if(!(a==null||a===!1))if(o==="html")r.innerHTML=a;else if(o==="text")r.textContent=a;else if(o.startsWith("on"))r.addEventListener(o.slice(2),a);else if(o==="style")for(const c in a)c.startsWith("--")?r.style.setProperty(c,a[c]):r.style[c]=a[c];else r.setAttribute(o,a===!0?"":String(a))}return e!==void 0&&id(r,e),r}function id(i,t){if(Array.isArray(t)){for(const e of t)id(i,e);return}t==null||t===!1||i.appendChild(typeof t=="string"||typeof t=="number"?document.createTextNode(String(t)):t)}const Ue={pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5.5" y="4.5" width="4.6" height="15" rx="1.8"/><rect x="13.9" y="4.5" width="4.6" height="15" rx="1.8"/></svg>',eye:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1.8 12S5.6 5 12 5s10.2 7 10.2 7-3.8 7-10.2 7S1.8 12 1.8 12z"/><circle cx="12" cy="12" r="3.6" class="pupil"/></svg>',play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 4.8v14.4a1 1 0 0 0 1.5.9l11-7.2a1 1 0 0 0 0-1.8L9 3.9a1 1 0 0 0-1.5.9z"/></svg>',retry:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.4-5.5" fill="none" stroke-width="3" stroke-linecap="round"/><path d="M3.4 3.6l.6 5.6 5.5-1.2z"/></svg>',grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="3" width="7.6" height="7.6" rx="2"/><rect x="3" y="13.4" width="7.6" height="7.6" rx="2"/><rect x="13.4" y="13.4" width="7.6" height="7.6" rx="2"/></svg>',soundOn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.6 8.6a5 5 0 0 1 0 6.8M18.4 5.9a9 9 0 0 1 0 12.2" fill="none" stroke-width="2.4" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 9.2h3.8L12.6 5v14l-5.3-4.2H3.5z"/><path d="M15.8 9.2l5.4 5.6M21.2 9.2l-5.4 5.6" fill="none" stroke-width="2.6" stroke-linecap="round"/></svg>',ball:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="9" cy="9" r="2.6" fill="#fff" opacity=".85"/></svg>',back:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 5.2L8 12l6.8 6.8" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',lock:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 10.5V8a4.5 4.5 0 0 1 9 0v2.5" fill="none" stroke-width="2.8"/><rect x="4.8" y="10" width="14.4" height="11" rx="3"/></svg>',star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.4l2.85 6 6.6.75-4.9 4.5 1.35 6.5L12 16.85 6.1 20.15l1.35-6.5-4.9-4.5 6.6-.75z"/></svg>'};function n2(i,{events:t}={}){const e=(E,w)=>t&&t.emit(E,w);let n=!1,s=!1,r=0,o=0;const a=bt("b.hud-num",null,"1"),c=bt("div.hud-ball",null,a),l=bt("span.hud-name",null,""),u=bt("span.hud-par",null,"Par 2"),d=bt("div.hud-chip.hud-hole",null,[c,bt("div.hud-meta",null,[l,u])]),h=bt("b.hud-strokes-n",null,"0"),f=bt("div.hud-pips",{"aria-hidden":"true"}),g=bt("span.hud-pop",{"aria-hidden":"true"},"+1"),x=bt("div.hud-chip.hud-strokes",{role:"status","aria-live":"polite"},[bt("span.hud-lbl",null,"Strokes"),h,f,g]),m=bt("button.hud-btn.hud-eye",{type:"button","aria-label":"Look at the whole hole","aria-pressed":"false",html:Ue.eye,onclick:()=>y(!n,!0)}),p=bt("button.hud-btn.hud-pause",{type:"button","aria-label":"Pause",html:Ue.pause,onclick:()=>e("ui:pause",{})}),v=bt("div.hud",{"data-shown":"false"},[d,x,bt("div.hud-btns",null,[m,p])]);i.appendChild(v);function y(E,w){n=!!E,m.setAttribute("aria-pressed",n?"true":"false"),m.classList.toggle("on",n),w&&e("ui:overview",{on:n})}function _(){const E=Math.max(o,Math.min(r,o+4));for(;f.childNodes.length>E;)f.removeChild(f.lastChild);for(;f.childNodes.length<E;)f.appendChild(bt("i.pip"));for(let w=0;w<E;w++){const A=f.childNodes[w];A.className="pip"+(w<r?" used":"")+(w>=o?" over":"")}}return t&&(t.on("ui:overview",({on:E}={})=>{!!E!==n&&y(E,!1)}),t.on("shot:end",({penalty:E}={})=>{E&&(g.classList.remove("go"),g.offsetWidth,g.classList.add("go"))})),{el:v,setHole(E,w){a.textContent=String((w|0)+1),l.textContent=E&&E.name?E.name:"",u.textContent="Par "+(E?E.par:""),v.setAttribute("data-round",String(E&&E.round?E.round:1)),n&&y(!1,!0)},setStrokes(E,w){const A=Math.max(0,E|0),b=A>r;r=A,w!==void 0&&(o=Math.max(1,w|0)),h.textContent=String(r),x.classList.toggle("over",r>o),_(),b&&(h.classList.remove("bump"),h.offsetWidth,h.classList.add("bump"))},show(E){s=!!E,v.setAttribute("data-shown",s?"true":"false")}}}const Vf=350,i2=1400,s2=5200,r2=1900,o2=1700,a2=3e3,c2={ace:"Unbelievable!",albatross:"Amazing shot!",eagle:"Superb!",birdie:"Great shot!",par:"Well played!",bogey:"So close!",double:"Nice try!",over:"Keep going!",picked:"Try again for a star!"},l2={ace:"Hole-in-one!",albatross:"Albatross!",eagle:"Eagle!",birdie:"Birdie!",par:"Par!"},hn="#13261b";function u2(i,t,e,n,s){let r="";for(let o=0;o<s*2;o++){const a=o*Math.PI/s-Math.PI/2,c=o%2?n:e;r+=(o?"L":"M")+(i+Math.cos(a)*c).toFixed(1)+" "+(t+Math.sin(a)*c).toFixed(1)}return r+"Z"}const Ds=(i,t,e)=>`<g transform="${e}" stroke="${hn}" stroke-width="3" stroke-linejoin="round"><path d="M15 34l-10-5 2.5 10z" fill="${t}"/><ellipse cx="29" cy="37" rx="16" ry="13" fill="${i}"/><circle cx="41" cy="25" r="10" fill="${i}"/><path d="M50 22.5l9 3.5-9 3.5z" fill="#FFC93C"/><path d="M19 35c6-3 12-1 14 5-6 3-12 2-14-5z" fill="${t}"/><circle cx="43.5" cy="23" r="2.3" fill="${hn}" stroke="none"/></g>`,$i=i=>`<svg viewBox="0 0 64 64" aria-hidden="true">${i}</svg>`,Wf={ace:$i(`<path d="${u2(32,32,30,18,12)}" fill="#FFC93C" stroke="${hn}" stroke-width="3" stroke-linejoin="round"/><circle cx="32" cy="32" r="12" fill="#FBFAF3" stroke="${hn}" stroke-width="3"/><text x="32" y="39" text-anchor="middle" font-family="Lilita One, sans-serif" font-size="19" fill="${hn}">1</text>`),albatross:$i(Ds("#9F7BE0","#7B4FC9","translate(-4 -10) scale(.62)")+Ds("#9F7BE0","#7B4FC9","translate(26 -6) scale(.62)")+Ds("#9F7BE0","#7B4FC9","translate(8 22) scale(.62)")),eagle:$i(Ds("#FFA65A","#E07020","translate(-2 -4) scale(.7)")+Ds("#FFA65A","#E07020","translate(20 18) scale(.7)")),birdie:$i(Ds("#5B93F0","#2D6CDF","translate(0 0)")),par:$i(`<ellipse cx="32" cy="53" rx="22" ry="7" fill="#3CC47A" stroke="${hn}" stroke-width="3"/><ellipse cx="32" cy="52" rx="7" ry="2.6" fill="${hn}"/><path d="M32 51V9" stroke="${hn}" stroke-width="5" stroke-linecap="round"/><path d="M32 50V10" stroke="#fff" stroke-width="2"/><path d="M34 9l21 7.5L34 24z" fill="#E8322F" stroke="${hn}" stroke-width="3" stroke-linejoin="round"/>`),smile:$i(`<circle cx="32" cy="32" r="26" fill="#8EC5FF" stroke="${hn}" stroke-width="3"/><circle cx="23" cy="27" r="3.4" fill="${hn}"/><circle cx="41" cy="27" r="3.4" fill="${hn}"/><path d="M20 38c6 8 18 8 24 0" fill="none" stroke="${hn}" stroke-width="3.6" stroke-linecap="round"/>`),picked:$i(`<g fill="#fff" stroke="${hn}" stroke-width="3" stroke-linejoin="round"><rect x="15" y="12" width="8" height="26" rx="4"/><rect x="24" y="7" width="8" height="30" rx="4"/><rect x="33" y="9" width="8" height="28" rx="4"/><rect x="42" y="15" width="8" height="23" rx="4"/><path d="M15 31h35v6c0 11-7.5 19-18 19-7.5 0-12-4.5-14.5-9L9.5 37c-1.6-2.8 2-5.6 4.6-3.4L18 37z"/></g>`)},f2=i=>Wf[i]||Wf.smile,Xf='<svg viewBox="0 0 48 58" aria-hidden="true"><path d="M17 4c2.6 0 4.6 2 4.6 4.6v15.6l1.7-.4c2.2-.5 4.4.8 5 3l.2.6 1.3-.3c2.2-.5 4.4.8 5 3l.2.8 1-.2c2.3-.4 4.5 1.1 4.9 3.4l1.3 8.6c.9 5.7-2.5 11.2-8 12.9l-6.1 1.8c-4.7 1.4-9.8-.5-12.4-4.7L4.2 38.4c-1.3-2.1-.8-4.8 1.2-6.2 2-1.3 4.6-1 6.1.8l1 1.2V8.6C12.5 6 14.5 4 17 4z" fill="#fff" stroke="#13261b" stroke-width="3" stroke-linejoin="round"/><path d="M21.6 24.2v7M29.5 27.4v5.4M36.7 31.1v4.6" stroke="#13261b" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".45"/></svg>';function h2(i,t){if(i==null)return"";if(i===1)return"m-ace";const e=i-t;return e<=-2?"m-eagle":e===-1?"m-birdie":e===0?"m-par":e===1?"m-bogey":"m-double"}function d2(i,{events:t,progress:e,holes:n=[],rounds:s=[],rig:r=null,play:o=null}={}){const a=(P,C)=>t&&t.emit(P,C),c=(P,C)=>t&&t.on(P,C),l=new Map;{let P=0;for(const C of s)l.set(C.id,P),P+=C.holes.length}const u=P=>{for(const C of s){const G=l.get(C.id);if(P>=G&&P<G+C.holes.length)return C}return s[0]},d=P=>n[P]||{name:"Hole "+(P+1),par:3,id:"h"+P};let h=null,f=!1,g=!1,x=0,m=null,p=null,v=!1,y=!1,_=0,E={index:-1,best:null,stars:0,total:0},w=!!(e&&e.muted),A=e&&e.skin||"classic",b=!1;const S=new Set,M=(P,C)=>{const G=setTimeout(()=>{S.delete(G),P()},C);return S.add(G),G},T=P=>{P&&(clearTimeout(P),S.delete(P))},k=bt("div.scr");i.appendChild(k);function V(P,C,G,z,ut){return bt("button.btn"+P,{type:"button","aria-label":ut||null,onclick:vt=>{Date.now()-x<Vf||z(vt)}},[G?bt("span.ico",{html:G}):null,C?bt("span.lbl",null,C):null])}function $(P,C=""){const G=bt("div.stars"+C,{role:"img","aria-label":P+(P===1?" star":" stars")});for(let z=0;z<3;z++)G.appendChild(bt("span.st"+(z<P?".on":""),{html:Ue.star,style:{"--k":String(z)}}));return G}const at=[];function rt(P){const C=V(P?".b-white.b-sound":".b-round.b-white.b-sound","","",()=>nt(!w));return at.push({b:C,withLabel:P}),ft(),C}function ft(){for(const{b:P,withLabel:C}of at){for(;P.firstChild;)P.removeChild(P.firstChild);P.appendChild(bt("span.ico",{html:w?Ue.soundOff:Ue.soundOn})),C&&P.appendChild(bt("span.lbl",null,w?"Sound off":"Sound on")),P.setAttribute("aria-label",w?"Turn sound on":"Turn sound off"),P.setAttribute("aria-pressed",w?"false":"true"),P.classList.toggle("off",w)}}function nt(P){w=!!P,ft(),a("ui:sound",{muted:w})}function Y(P,C,G){const z=typeof P=="object"?P:s.find(te=>te.id===P)||s[0],ut=l.get(z.id)||0,vt=bt("div.strip",{role:"table","aria-label":z.name+" scorecard"}),St=bt("div.srow.s-hole",{role:"row"},bt("span.sh",{role:"rowheader"},"Hole")),At=bt("div.srow.s-par",{role:"row"},bt("span.sh",{role:"rowheader"},"Par")),Nt=bt("div.srow.s-you",{role:"row"},bt("span.sh",{role:"rowheader"},"You"));let kt=0,It=0,Zt=0;z.holes.forEach((te,ne)=>{const ee=ut+ne,Xt=C(ee),pe=ee===G?".hi":"";St.appendChild(bt("span.sc"+pe,{role:"cell",style:{"--k":String(ne)}},String(ee+1))),At.appendChild(bt("span.sc"+pe,{role:"cell"},String(te.par)));const Ht=h2(Xt,te.par);Nt.appendChild(bt("span.sc.s-score"+pe,{role:"cell",style:{"--k":String(ne)}},Xt==null?bt("i.dash",null,"–"):bt("b.mk"+(Ht?"."+Ht:""),null,String(Xt)))),Xt!=null&&(kt+=Xt,It+=te.par,Zt++)}),St.appendChild(bt("span.sc.s-tot",{role:"cell"},"Tot")),At.appendChild(bt("span.sc.s-tot",{role:"cell"},String(z.holes.reduce((te,ne)=>te+ne.par,0))));const xt=Zt?vc(kt,It):"–";return Nt.appendChild(bt("span.sc.s-tot.s-rel"+(Zt&&kt<It?".under":""),{role:"cell",title:Zt?kt+" strokes":""},xt)),vt.appendChild(St),vt.appendChild(At),vt.appendChild(Nt),vt}const U={};function q(P,C,{primary:G,back:z}={}){const ut=bt("div.panel.p-"+P+(C?"."+C:""),{role:"dialog","aria-modal":"true","aria-hidden":"true"});return k.appendChild(ut),U[P]={el:ut,primary:G,back:z},ut}function j(P,C){const G=U[P];if(!G)return;for(const ut in U){const vt=ut===P;U[ut].el.classList.toggle("open",vt),U[ut].el.setAttribute("aria-hidden",vt?"false":"true")}h=P,x=Date.now();const z=typeof document<"u"?document.activeElement:null;z&&z.blur&&k.contains&&k.contains(z)&&z.blur(),G.render&&G.render(C),X(!0)}function st(){for(const P in U)U[P].el.classList.remove("open"),U[P].el.setAttribute("aria-hidden","true");h=null,X(!1)}function X(P){P&&(ce(),_e()),P!==f&&(f=P,i.classList&&i.classList.toggle("ui-menu",P),a("ui:menu",{open:P}),P||D())}const it=bt("span.t-stars-n",null,"0"),_t=bt("span.sub",null,""),W=V(".b-yellow.b-big.t-go","",Ue.play,()=>{const P=e?e.nextIndex():0;st(),P===m&&!v||a("ui:play",{index:P})}),et=bt("span.lbl2",null,[bt("span.main",null,"Continue"),_t]);W.appendChild(et),q("title","",{primary:()=>W.click()}).appendChild(bt("div.t-wrap",null,[bt("div.logo",{role:"heading","aria-level":"1","aria-label":"8 Ball Golf"},[bt("span.logo-ball",{"aria-hidden":"true"},bt("span.logo-disc",null,"8")),bt("span.logo-word",{"aria-hidden":"true"},[bt("span.lw1",null,"BALL"),bt("span.lw2",null,"GOLF")])]),bt("p.tagline",null,"Hit the white. Sink the 8."),bt("div.t-stars",{"aria-label":"Stars collected"},[bt("span.ico",{html:Ue.star}),it,bt("span.of",null," / "+n.length*3)]),W,bt("div.t-row",null,[V(".b-blue","Holes",Ue.grid,()=>zt("title")),V(".b-blue","Balls",Ue.ball,()=>O("title")),rt(!1)])])),U.title.render=()=>{const P=e?e.nextIndex():0,C=d(P);_t.textContent="Hole "+(P+1)+" · "+C.name,it.textContent=String(e?e.totalStars():0)};let yt="title",Ft=s.length?s[0].id:1;const N=bt("div.tabs",{role:"tablist"}),ot=bt("div.tiles"),H=bt("p.p-note",null,"");q("holes","card-panel",{back:()=>Ut(yt)}).appendChild(bt("div.card.paper.c-holes",null,[bt("div.c-head",null,[V(".b-round.b-back","",Ue.back,()=>Ut(yt),"Back"),bt("h2",null,"Holes"),bt("span.c-head-pad")]),N,ot,H]));function zt(P){yt=P;const C=e?e.nextIndex():0;Ft=u(P==="pause"&&m!==null?m:C).id,j("holes")}U.holes.render=()=>{for(;N.firstChild;)N.removeChild(N.firstChild);for(const z of s){const ut=l.get(z.id),vt=!e||e.isUnlocked(ut),St=e&&e.roundStars?e.roundStars(z.id):0,At=V(".tab"+(z.id===Ft?".sel":"")+(vt?"":".locked"),"",vt?null:Ue.lock,()=>{if(!vt){Dt(At),H.textContent="Finish hole "+ut+" to open "+z.name+"!";return}Ft=z.id,U.holes.render()});At.setAttribute("role","tab"),At.setAttribute("aria-selected",z.id===Ft?"true":"false"),At.appendChild(bt("span.tab-name",null,z.name)),vt&&At.appendChild(bt("span.tab-stars",null,[bt("span.ico",{html:Ue.star}),St+"/"+z.holes.length*3])),N.appendChild(At)}for(;ot.firstChild;)ot.removeChild(ot.firstChild);const P=s.find(z=>z.id===Ft)||s[0];if(!P)return;const C=l.get(P.id),G=e?e.nextIndex():0;ot.setAttribute("data-round",String(P.id)),P.holes.forEach((z,ut)=>{const vt=C+ut,St=d(vt),At=!e||e.isUnlocked(vt),Nt=e?e.best(vt):null,kt=V(".tile"+(At?"":".locked")+(vt===G&&At?".next":"")+(vt===m?".cur":""),"",null,()=>{if(!At){Dt(kt),H.textContent="Finish hole "+vt+" first!";return}g=!1,st(),a("ui:play",{index:vt})},At?"Hole "+(vt+1)+", "+St.name:"Hole "+(vt+1)+", locked");kt.appendChild(bt("span.tile-num",null,String(vt+1))),kt.appendChild(bt("span.tile-name",null,St.name)),At?(kt.appendChild(bt("span.tile-par",null,"Par "+St.par+(Nt!==null?" · Best "+Nt:""))),kt.appendChild($(e?e.stars(vt):0,".mini"))):kt.appendChild(bt("span.tile-lock",{html:Ue.lock})),ot.appendChild(kt)}),H.textContent=""};let Yt="title";const Ot=bt("div.skins"),$t=bt("p.p-note",null,"");q("skins","card-panel",{back:()=>Ut(Yt)}).appendChild(bt("div.card.paper.c-skins",null,[bt("div.c-head",null,[V(".b-round.b-back","",Ue.back,()=>Ut(Yt),"Back"),bt("h2",null,"Balls"),bt("span.c-head-pad")]),Ot,$t]));function O(P){Yt=P,j("skins")}function R(){if(!e)return"";const P=e.totalStars(),C=e.skins().find(G=>!G.unlocked);return C?C.need-P+" more ★ for the "+C.name+" ball!":"You unlocked every ball!"}U.skins.render=()=>{for(;Ot.firstChild;)Ot.removeChild(Ot.firstChild);const P=e?e.skins():[{id:"classic",name:"Classic",need:0,unlocked:!0}];for(const C of P){const G=V(".skin"+(C.unlocked?"":".locked")+(C.id===A?".sel":""),"",null,()=>{if(!C.unlocked){Dt(G),$t.textContent="Collect "+C.need+" ★ to unlock "+C.name+"!";return}A=C.id,a("ui:skin",{id:C.id}),U.skins.render()},C.name+(C.unlocked?"":", locked"));G.setAttribute("aria-pressed",C.id===A?"true":"false"),G.appendChild(bt("span.skin-ball.sk-"+C.id,{"aria-hidden":"true"})),G.appendChild(bt("span.skin-name",null,C.name)),G.appendChild(C.unlocked?bt("span.skin-need.ok",null,C.id===A?"Playing":"Tap to use"):bt("span.skin-need",null,[bt("span.ico",{html:Ue.star}),String(C.need)])),Ot.appendChild(G)}$t.textContent=R()};const L=q("card","card-panel",{primary:()=>F()}),B=bt("div.card.paper.c-score");L.appendChild(B);let K=null;function I(){B.classList.add("skip")}function F(){if(!B.classList.contains("skip")&&Date.now()-x<a2){I();return}K&&K()}B.addEventListener("pointerdown",I),U.card.render=P=>{const{index:C,strokes:G,par:z,picked:ut,penalties:vt=0,stars:St=0}=P,At=P.term||xc(G,z,ut),Nt=At.key,kt=E.index===C?E.best:null,It=E.index===C?E.stars:0,Zt=E.index===C?E.total:e?e.totalStars():0,xt=kt!==null&&G<kt,te=Math.max(0,St-It),ne=e?e.skins().filter(Ie=>Ie.need>Zt&&Ie.need<=Zt+te):[],ee=(()=>{const Ie=u(C);return C===l.get(Ie.id)+Ie.holes.length-1})(),Xt=P.level||d(C);for(;B.firstChild;)B.removeChild(B.firstChild);B.className="card paper c-score t-"+Nt,B.appendChild(bt("div.sc-hole",null,"Hole "+(C+1)+" · "+(Xt.name||""))),B.appendChild(bt("div.sc-term",null,[bt("span.term-ico",{html:f2(Nt)}),bt("div.term-txt",null,[bt("b.term",null,At.label),bt("span.term-sub",null,c2[Nt]||"")])]));const pe=ut?"Picked up · Par "+z:G+(G===1?" stroke":" strokes")+" · Par "+z;B.appendChild(bt("div.sc-line",null,[pe,vt>0?bt("span.pen",null,"+"+vt+" penalty"):null])),B.appendChild($(St,".big"));const Ht=bt("div.sc-extras");xt&&Ht.appendChild(bt("span.badge.b-best",null,"New best!"));for(const Ie of ne){const ye=V(".b-mini","Use it",null,()=>{A=Ie.id,a("ui:skin",{id:Ie.id}),ye.classList.add("done"),ye.lastChild.textContent="Playing!"});Ht.appendChild(bt("span.badge.b-skin",null,[bt("span.skin-ball.sk-"+Ie.id,{"aria-hidden":"true"}),"New ball: "+Ie.name+"!",ye]))}Ht.childNodes.length&&B.appendChild(Ht);const Me=Ie=>Ie===C?kt===null?G:Math.min(kt,G):e?e.best(Ie):null;B.appendChild(Y(u(C),Me,C));const Fe=b&&!ut;Fe&&B.appendChild(bt("p.sc-hint",null,"Hole in! Next hole →"));const Pe=ee?"Round score":"Next hole";K=()=>{b=!1,st(),a("ui:next",{})},B.appendChild(bt("div.btns",null,[V(".b-blue.sc-retry","Retry",Ue.retry,()=>{b=!1,st(),a("ui:retry",{})}),V(".b-yellow.b-big.sc-next"+(Fe?".pulse":""),Pe,Ue.play,()=>K())]))};const ct=q("round","card-panel",{primary:()=>Lt()}),ht=bt("div.card.chalk.c-round");ct.appendChild(ht);let Lt=()=>{};ht.addEventListener("pointerdown",()=>ht.classList.add("skip")),U.round.render=P=>{const C=s.find(It=>It.id===P.round)||s[0],G=new Map((P.holes||[]).map(It=>[It.index,It.strokes])),z=P.total||0,ut=P.par||C.holes.reduce((It,Zt)=>It+Zt.par,0),vt=P.rel||vc(z,ut),St=l.get(C.id)||0;let At=0;for(let It=0;It<C.holes.length;It++)At+=e?e.stars(St+It):0;const Nt=C===s[s.length-1];for(;ht.firstChild;)ht.removeChild(ht.firstChild);ht.className="card chalk c-round",ht.appendChild(bt("h2.r-title",null,(P.name||C.name)+" done!")),ht.appendChild(bt("div.r-score",null,[bt("div.r-rel"+(z<ut?".under":z===ut?".even":""),null,[bt("span.r-cap",null,"Best round"),bt("b",null,vt)]),bt("div.r-meta",null,[bt("span",null,"Total "+z+" · Par "+ut),bt("span.r-stars",null,[bt("span.ico",{html:Ue.star}),At+" / "+C.holes.length*3])])])),ht.appendChild(Y(C,It=>G.has(It)?G.get(It):e?e.best(It):null,-1));const kt=Nt?"You played all "+n.length+" holes! Go back for more stars.":s[s.indexOf(C)+1].name+" is open! Curves, cushions and water.";ht.appendChild(bt("p.r-hook",null,kt)),ht.appendChild(bt("p.r-hook.r-skin",null,R())),Lt=()=>{st(),a("ui:next",{})},ht.appendChild(bt("div.btns",null,[V(".b-yellow.b-big.r-next",Nt?"Continue":"Play "+s[s.indexOf(C)+1].name,Ue.play,()=>Lt())]))},q("pause","card-panel",{primary:()=>Rt(),back:()=>Rt()}).appendChild(bt("div.card.paper.c-pause",null,[bt("h2",null,"Paused"),V(".b-yellow.b-big.ps-resume","Resume",Ue.play,()=>Rt()),bt("div.ps-grid",null,[V(".b-blue.ps-retry","Retry hole",Ue.retry,()=>{g=!1,st(),a("ui:retry",{})}),V(".b-blue.ps-holes","Holes",Ue.grid,()=>zt("pause")),V(".b-blue.ps-skins","Balls",Ue.ball,()=>O("pause")),rt(!0)])]));function Rt(){!g&&h!=="pause"||(g=!1,st(),a("ui:resume",{}))}function Ut(P){P==="pause"&&g?j("pause"):P==="title"?j("title"):st()}function Dt(P){P.classList.remove("nudge"),P.offsetWidth,P.classList.add("nudge")}const Ct=bt("span.tip-txt",null,""),Vt=bt("div.tip",{role:"status","aria-live":"polite",hidden:!0},[bt("span.tip-ico",{"aria-hidden":"true"},bt("span",null,"8")),Ct]),Wt=bt("span.coach-txt",null,""),ie=bt("span.coach-gesture",{html:Xf,"aria-hidden":"true"}),Q=bt("button.coach-skip",{type:"button",onclick:()=>Ke()},"Skip"),Mt=bt("div.coach",{role:"status","aria-live":"polite",hidden:!0},[ie,Wt,Q]),dt=bt("div.hand",{html:Xf,"aria-hidden":"true",hidden:!0}),gt=bt("b.toast-main",null,""),Et=bt("span.toast-sub",null,""),Z=bt("div.toast",{role:"status","aria-live":"polite",hidden:!0},[gt,Et]),pt=bt("div.celebrate",{"aria-hidden":"true",hidden:!0});k.appendChild(Vt),k.appendChild(Mt),k.appendChild(dt),k.appendChild(Z),k.appendChild(pt);let wt=null,Tt=0;function Pt(){T(Tt),!(!wt||h!==null)&&(Tt=M(()=>{if(h!==null)return;const P=wt;wt=null,!(!P||P.index!==m||v)&&(Ct.textContent=P.text,Vt.hidden=!1,re(Vt,"go"),e&&e.markTip(P.id),Tt=M(Jt,s2))},i2))}function Jt(){T(Tt),Tt=0,Vt.hidden=!0,Vt.classList.remove("go")}let qt=0;function ae(P,C="",G=""){f||(gt.textContent=P,Et.textContent=C,Et.hidden=!C,Z.className="toast"+(G?" k-"+G:""),Z.hidden=!1,re(Z,"go"),T(qt),qt=M(ce,r2))}function ce(){T(qt),qt=0,Z.hidden=!0,Z.classList.remove("go")}let fe=0;function Se(P){f||(pt.textContent=l2[P]||"In the hole!",pt.className="celebrate t-"+P,pt.hidden=!1,re(pt,"go"),T(fe),fe=M(_e,o2))}function _e(){T(fe),fe=0,pt.hidden=!0,pt.classList.remove("go")}function re(P,C){P.classList.remove(C),P.offsetWidth,P.classList.add(C)}const Ee=[{text:"Sink the 8 in the hole!",hand:"",ms:2600},{text:"Move the white ball anywhere in the circle.",hand:"drag",ms:4200},{text:"This line shows where the 8 will roll. Drag to aim.",hand:"aim",ms:4600},{text:"Pull back for power… let go to shoot!",hand:"pull",ms:0}],oe={on:!1,step:-1,timer:0,fired:!1,everyShown:!1,raf:0};function Ce(){oe.on=!0,oe.fired=!1,oe.everyShown=!1,un(0)}function un(P){T(oe.timer),oe.step=P;const C=Ee[P];if(!C){fn();return}Ve(C.text,C.hand),C.ms&&(oe.timer=M(()=>{oe.on&&oe.step===P&&un(P+1)},C.ms))}function Ve(P,C){Wt.textContent=P,Mt.hidden=!1,Mt.setAttribute("data-hand",C||"none"),ie.hidden=!C||C!=="pull"&&!!(r&&o),re(Mt,"go"),An(C)}function fn(){T(oe.timer),Mt.hidden=!0,An("")}function Ke(){oe.on=!1,oe.step=-1,fn()}function An(P){oe.raf&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(oe.raf),oe.raf=0;const C=(P==="drag"||P==="aim")&&r&&o&&typeof requestAnimationFrame=="function";if(P!=="pull"&&!C){dt.hidden=!0,dt.removeAttribute("data-mode");return}if(dt.setAttribute("data-mode",P),dt.hidden=!1,C){const G=()=>{oe.raf=requestAnimationFrame(G);try{const z=o.intent,ut=o.level;if(!z||!ut)return;const vt=(ut.heightAt?ut.heightAt(z.x,z.z):0)+.5,St=r.groundToScreen(z.x,vt,z.z);St&&St.onScreen!==!1&&(dt.style.transform="translate("+Math.round(St.x)+"px,"+Math.round(St.y)+"px)")}catch{}};G()}else dt.style.transform=""}function D(){Pt()}return c("game:hole",({index:P,level:C,first:G}={})=>{m=P,p=C||d(P),v=!1,_=0,E={index:P,best:e?e.best(P):null,stars:e?e.stars(P):0,total:e?e.totalStars():0},Jt(),ce(),_e(),wt=null,oe.on&&Ke();const z=p&&(p.id||p.hole&&p.hole.id);b=!!G,G?(e&&e.markTip(z),Ce()):p&&p.tip&&e&&!e.seenTip(z)&&(wt={index:P,id:z,text:p.tip},Pt())}),c("shot:fire",({strokes:P}={})=>{_=P|0,!Vt.hidden&&Tt&&(T(Tt),Tt=M(Jt,900)),oe.on&&(oe.fired=!0,oe.step=99,fn())}),c("shot:end",({outcome:P,picked:C,penalty:G}={})=>{if(C&&ae("Picked up","Try again for a star!","soft"),oe.on&&P!=="holed"&&!C&&!oe.everyShown){oe.everyShown=!0;const z=p?p.par:2;Ve("Every shot counts. Par "+z+" = in "+z+" shots is great!",""),oe.timer=M(()=>{oe.on&&fn()},4500)}}),c("ball:hop",()=>ae("Too fast!","Softer next time","warn")),c("ball:hazard",({kind:P}={})=>{P==="water"?ae("Splash! +1","Back to where you were","water"):ae("Out of bounds! +1","Back to where you were","warn")}),c("ball:whiff",()=>ae("Missed the 8!","Aim the white at the 8","soft")),c("ball:holed",()=>{oe.on&&Ke();const P=p?p.par:3;Se(xc(Math.max(1,_||1),P,!1).key)}),c("hole:done",(P={})=>{v=!0,Jt(),wt=null,oe.on&&Ke(),g=!1,j("card",P)}),c("game:round",(P={})=>j("round",P)),c("ui:pause",()=>{if(h===null&&!y){g=!0,j("pause");return}g||Promise.resolve().then(()=>a("ui:resume",{}))}),c("ui:sound",({muted:P}={})=>{!!P!==w&&(w=!!P,ft())}),c("ui:skin",({id:P}={})=>{P&&(A=P)}),c("ad:start",()=>{y=!0,ce(),_e()}),c("ad:end",()=>{y=!1}),typeof window<"u"&&window.addEventListener&&window.addEventListener("keydown",P=>{if(P.repeat)return;const C=P.code;if(C==="KeyP"||C==="Escape"){if(h==="pause"){Rt(),P.preventDefault();return}if(h&&U[h].back){U[h].back(),P.preventDefault();return}h===null&&m!==null&&!v&&!y&&(a("ui:pause",{}),P.preventDefault());return}if(h&&(C==="Enter"||C==="NumpadEnter"||C==="Space")){const G=P.target;if(G&&G.tagName==="BUTTON"||(P.preventDefault(),Date.now()-x<Vf))return;const z=U[h];z.primary&&z.primary()}}),{el:k,showTitle(){g=!1,j("title")},hideAll(){const P=g;g=!1,h!==null&&st(),P&&a("ui:resume",{})},isOpen(){return h!==null},get current(){return h}}}function qf(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const ic=i=>440*Math.pow(2,(i-69)/12),vn=(i,t)=>typeof i=="number"&&Number.isFinite(i)?i:t,Yf=1e-4;function sd(i,t,e){const n=2*Math.PI*Math.min(i,e*.45)/e,s=Math.sin(n)/(2*t),r=1+s;return[s/r,0,-s/r,-2*Math.cos(n)/r,(1-s)/r]}function rd(i,t,e,n,s,r,o,a){const[c,l,u,d,h]=o;let f=0,g=0,x=0,m=0;const p=Math.min(i.length,t+e);for(let v=t,y=0;v<p;v++,y++){const _=(y<n?y/n:1)*Math.exp(-y/s),E=(a()*2-1)*_,w=c*E+l*f+u*g-d*x-h*m;g=f,f=E,m=x,x=w,i[v]+=w*r}}function Ll(i,t){let e=0;for(let n=0;n<i.length;n++)e=Math.max(e,Math.abs(i[n]));if(e>0)for(let n=0;n<i.length;n++)i[n]*=t/e}function p2(i,t,e){for(let s=0;s<16;s++){const r=Math.pow(s/16,1.6)*.3+e()*.02,o=Math.floor(t*(.012+e()*.02)),a=Math.pow(1-r/.38,1.2)*(.5+.5*e());rd(i,Math.floor(r*t),o,Math.floor(t*.0015),t*(.004+e()*.004),a,sd(2400+e()*3800,1.4+e()*1.6,t),e)}Ll(i,.9)}function Kf(i,t,e,n,s,r){for(let c=0;c<n;c++){const l=sd(900+e()*1500,1.1+e()*1.2,t),u=3.5+e()*2.5,d=.45+.55*e(),h=s+e()*(r-s);for(let f=e()*.2;f<h;f+=1/u*(.82+.36*e())){const g=f>h-.5?(h-f)/.5:1;rd(i,Math.floor(f*t),Math.floor(t*.03),Math.floor(t*6e-4),t*(.004+e()*.005),d*(.6+.4*g),l,e)}}const o=Math.floor(t*.023),a=Math.floor(t*.037);for(let c=i.length-1;c>=a;c--)i[c]+=.22*i[c-o]+.14*i[c-a];Ll(i,.85)}const jf={white:[1,(i,t,e)=>{for(let n=0;n<i.length;n++)i[n]=e()*2-1}],brown:[1,(i,t,e)=>{let n=0;for(let s=0;s<i.length;s++)n=(n+.02*(e()*2-1))*.998,i[s]=n;Ll(i,.9)}],rustle:[.38,p2],applauseLight:[1.8,(i,t,e)=>Kf(i,t,e,7,.9,1.5)],applauseBig:[3.4,(i,t,e)=>Kf(i,t,e,22,1.9,3.1)]};function m2({getWindow:i,maxVoices:t=14,hardVoices:e=22}={}){const n=qf(571921),s=[],r=new Map;let o=null,a=null,c=null,l=null,u=!1,d=!0,h=0,f=0;function g(){if(u)return!1;if(!o){const S=i(),M=S&&(S.AudioContext||S.webkitAudioContext);if(!M)return u=!0,!1;try{o=new M,a=o.createGain(),a.gain.value=.8,c=o.createDynamicsCompressor(),c.threshold.value=-12,c.knee.value=10,c.ratio.value=3.5,c.attack.value=.002,c.release.value=.2,l=o.createGain(),l.gain.value=d?1:0,a.connect(c),c.connect(l),l.connect(o.destination);const T=o.createBufferSource();T.buffer=o.createBuffer(1,1,o.sampleRate),T.connect(o.destination),T.onended=()=>{try{T.disconnect()}catch{}},T.start(0)}catch(T){return console.warn("[sfx] Web Audio unavailable",T),u=!0,o=null,!1}}if(o.state!=="running"&&o.state!=="closed")try{const S=o.resume();S&&S.catch&&S.catch(()=>{})}catch{}return!0}const x=()=>!!o&&o.state==="running",m=()=>o?o.currentTime:0;function p(S){if(d=!!S,!l)return;const M=o.currentTime,T=l.gain;try{T.cancelScheduledValues(M),T.setValueAtTime(T.value,M),T.setTargetAtTime(d?1:0,M,.012)}catch{T.value=d?1:0}}function v(S){let M=r.get(S);if(M||!o||!jf[S])return M||null;const[T,k]=jf[S],V=o.sampleRate;return M=o.createBuffer(1,Math.max(1,Math.floor(T*V)),V),k(M.getChannelData(0),V,qf(571921^S.length*7919^S.charCodeAt(0))),r.set(S,M),M}function y(){v("white"),v("brown"),v("rustle");const S=i(),M=(T,k)=>{try{(S&&S.setTimeout?S.setTimeout.bind(S):setTimeout)(T,k)}catch{}};M(()=>v("applauseLight"),700),M(()=>v("applauseBig"),1400)}function _(S){if(S.done)return;S.done=!0;for(const T of S.nodes){T.onended!==void 0&&(T.onended=null);try{T.disconnect()}catch{}}S.nodes.length=0;const M=s.indexOf(S);M>=0&&s.splice(M,1),f++}function E(S){const M=o.currentTime;for(const T of S.nodes)if(T.stop)try{T.stop(M)}catch{}_(S)}function w(){const S=o.currentTime;for(let M=s.length-1;M>=0;M--)s[M].end<S-1&&E(s[M])}function A(S=1,M=1){if(!x()||!d)return null;if(w(),s.length>=t){if(S<2)return null;if(s.length>=e){let k=null;for(const V of s)(!k||V.prio<k.prio||V.prio===k.prio&&V.t0<k.t0)&&(k=V);if(!k||k.prio>S)return null;E(k)}}const T=b(S,M);return s.push(T),h++,T}function b(S,M){const T=o.currentTime+.002,k=o.createGain();k.gain.value=M,k.connect(a);const V={prio:S,t0:T,end:T,done:!1,pending:0,nodes:[k],out:k},$=()=>{V.pending--,V.pending<=0&&_(V)},at=Y=>(V.nodes.push(Y),Y),rt=(Y,U,q)=>(at(Y),V.pending++,Y.onended=$,V.end=Math.max(V.end,q),Y),ft=(Y,U,q,j,st,X)=>(j=Math.max(Yf*2,j),Y.setValueAtTime(0,U),Y.linearRampToValueAtTime(j,U+q),st>0&&Y.setValueAtTime(j,U+q+st),Y.exponentialRampToValueAtTime(Yf,U+q+st+X),U+q+st+X),nt=(Y,U,q,j)=>{if(Y.setValueAtTime(U,j),q)for(const[st,X]of q)Y.exponentialRampToValueAtTime(Math.max(1,st),j+Math.max(.001,X))};return V.filter=(Y,U,q=.7,j=k,st=null,X=T)=>{const it=at(o.createBiquadFilter());return it.type=Y,it.Q.value=q,nt(it.frequency,U,st,X),it.connect(j),it},V.tone=Y=>{const U=T+vn(Y.t,0),q=vn(Y.a,.002),j=vn(Y.hold,0),st=vn(Y.d,.1),X=o.createOscillator();X.type=Y.type||"sine",nt(X.frequency,Math.max(1,vn(Y.f,440)),Y.to,U),Y.detune&&(X.detune.value=Y.detune);const it=at(o.createGain()),_t=ft(it.gain,U,q,vn(Y.peak,.2),j,st)+.02;if(X.connect(it),it.connect(Y.dest||k),Y.vib){const[W,et,lt=0]=Y.vib,yt=o.createOscillator(),Ft=at(o.createGain());yt.frequency.value=W,Ft.gain.setValueAtTime(0,U),Ft.gain.linearRampToValueAtTime(et,U+lt+.08),yt.connect(Ft),Ft.connect(X.frequency),rt(yt,U,_t),yt.start(U),yt.stop(_t)}return rt(X,U,_t),X.start(U),X.stop(_t),X},V.noise=Y=>{const U=v(Y.buf||"white");if(!U)return null;const q=T+vn(Y.t,0),j=vn(Y.a,.001),st=vn(Y.hold,0),X=vn(Y.d,.05),it=o.createBufferSource();it.buffer=U;const _t=vn(Y.rate,1);_t!==1&&(it.playbackRate.value=_t);const W=at(o.createGain()),et=ft(W.gain,q,j,vn(Y.peak,.2),st,X)+.02;W.connect(Y.dest||k),Y.filter?it.connect(V.filter(Y.filter.type,Y.filter.f,vn(Y.filter.q,.7),W,Y.filter.to,q)):it.connect(W);const lt=U.duration||U.length/U.sampleRate,yt=(et-q)*_t,Ft=Y.from0?0:Math.max(0,(lt-yt)*n());return rt(it,q,et),Y.from0?it.start(q):it.start(q,Ft,Math.min(lt-Ft,yt+.01)),it.stop(et),it},V}return{start:g,ready:x,now:m,rng:n,setOutput:p,voice:A,buffer:v,prewarm:y,get ctx(){return o},stats:()=>({active:s.length,created:h,released:f})}}const hr=(i,t=0)=>typeof i=="number"&&Number.isFinite(i)?i:t,sc=i=>i<0?0:i>1?1:i,g2=["pointerdown","pointerup","touchend","mousedown","click","keydown"],x2=["ui:play","ui:next","ui:retry","ui:pause","ui:resume","ui:overview","ui:skin"];function v2({events:i,getWindow:t}={}){const e=t||(()=>typeof window<"u"?window:null),n=m2({getWindow:e}),s=n.rng;let r=!1,o=!1,a=!1,c=!1;function l(){const W=e(),et=W&&W.navigator&&W.navigator.userActivation;et&&et.hasBeenActive===!1||d()}function u(W){const et=e();if(!(!et||!et.addEventListener||W===a)){a=W;for(const lt of g2)W?et.addEventListener(lt,l,{capture:!0,passive:!0}):et.removeEventListener(lt,l,{capture:!0,passive:!0})}}function d(){if(!n.start()){u(!1);return}const W=n.ctx;if(!c){c=!0,n.setOutput(!r&&!o),n.prewarm();try{W.onstatechange=()=>{W.state==="running"?u(!1):W.state!=="closed"&&u(!0)}}catch{}}W.state==="running"&&u(!1)}u(!0);function h(){n.setOutput(!r&&!o)}const f=new Map;function g(W,et){if(r||o||!n.ready())return!1;const lt=n.now(),yt=f.get(W);return yt!==void 0&&lt-yt<et&&lt>=yt?!1:(f.set(W,lt),!0)}const x=W=>1+(s()-.5)*2*W;function m(W,et,lt,yt,Ft){const N=ic(lt);W.tone({t:et,f:N,a:.003,d:yt,peak:Ft}),W.tone({t:et,f:N*3.93,a:.001,d:yt*.16,peak:Ft*.28}),W.noise({t:et,filter:{type:"bandpass",f:Math.min(N*2.5,9e3),q:1.5},a:5e-4,d:.008,peak:Ft*.22})}function p(W,et,lt,yt,Ft){const N=ic(lt),ot=[[1,1,1],[2.76,.42,.45],[5.4,.16,.22]];for(const[H,tt,zt]of ot)N*H<14e3&&W.tone({t:et,f:N*H,a:.001,d:yt*zt,peak:Ft*tt})}function v(W,et,lt,yt,Ft){const N=ic(lt),ot=W.filter("lowpass",500,1.2,W.out,[[N*5+1200,.045],[N*3+700,.25]],W.t0+et),H=[5.6,N*.007,.14];W.tone({t:et,type:"sawtooth",f:N,detune:-7,a:.025,hold:yt,d:.16,peak:Ft,dest:ot,vib:H}),W.tone({t:et,type:"sawtooth",f:N,detune:7,a:.025,hold:yt,d:.16,peak:Ft*.8,dest:ot})}function y(W,et){const lt=n.voice(3,et?.5:.36);if(!lt)return;const yt=et?3.4:1.8;lt.noise({t:W,buf:et?"applauseBig":"applauseLight",from0:!0,a:.06,hold:yt-.5,d:.45,peak:1,filter:{type:"highpass",f:260,q:.6}})}function _(W){const et=n.voice(1);if(!et)return;const lt=.3+.55*sc(W),yt=x(.03);et.tone({f:1250*yt,to:[[760*yt,.03]],a:8e-4,d:.035,peak:.34*lt}),et.noise({filter:{type:"bandpass",f:2300*yt,q:1.1},a:5e-4,d:.014,peak:.28*lt}),et.tone({f:210,to:[[150,.05]],a:.002,d:.05,peak:.22*lt})}function E(W,et=1){const lt=n.voice(2);if(!lt)return;const yt=sc(hr(W)/10),Ft=(.22+.78*Math.pow(yt,.6))*et,N=x(.03),ot=lt.filter("lowpass",2600+1e4*yt,.6);lt.noise({filter:{type:"highpass",f:1900*N,q:.7},a:4e-4,d:.011,peak:.9*Ft,dest:ot});const H=(1650+550*yt)*N,tt=[[1,.55,.06],[1.505,.32,.04],[2.27,.2,.025],[3.08,.1,.016]];for(const[zt,Yt,Ot]of tt)lt.tone({f:H*zt,to:[[H*zt*.985,Ot]],a:6e-4,d:Ot*(.85+.3*yt),peak:Yt*Ft,dest:ot});lt.tone({f:640*N,to:[[430*N,.03]],a:.001,d:.03,peak:.22*Ft,dest:ot})}function w(W,et,lt,yt=1){const Ft=[[1,.5,.07],[2.31,.25,.04],[3.93,.1,.02]];for(const[N,ot,H]of Ft)W.tone({f:lt*N,to:[[lt*N*.97,H*yt]],a:8e-4,d:H*yt,peak:ot*et});W.noise({filter:{type:"bandpass",f:lt*4.5,q:1.2},a:5e-4,d:.01,peak:.3*et}),W.tone({f:140,to:[[105,.06]],a:.002,d:.06,peak:.22*et})}function A({id:W,kind:et,speed:lt}){const yt=hr(lt);if(yt<.3||!g("wall"+hr(W),.045))return;const Ft=sc(yt/8),N=.15+.85*Math.pow(Ft,.7),ot=x(.04),H=n.voice(0);if(H)switch(et){case"cushion":H.tone({f:150*ot,to:[[92*ot,.16]],a:.002,d:.16,peak:.55*N}),H.noise({buf:"brown",filter:{type:"lowpass",f:600,q:.7},a:.002,d:.07,peak:.5*N}),H.tone({type:"triangle",f:225*ot,to:[[300*ot,.05],[270*ot,.18]],a:.004,d:.17,peak:.13*N,vib:[16,8,0]}),H.noise({filter:{type:"bandpass",f:1400,q:.8},a:5e-4,d:.012,peak:.12*N});break;case"hedge":H.noise({buf:"rustle",from0:!0,rate:.85+.35*s(),a:.002,hold:.12,d:.2,peak:.55*(.4+.6*N)}),H.noise({buf:"brown",filter:{type:"lowpass",f:380,q:.7},a:.003,d:.07,peak:.35*N});break;case"bumper":{const tt=H.filter("lowpass",2400,.8);H.tone({type:"triangle",f:170*ot,to:[[430*ot,.045],[330*ot,.32]],vib:[24,26,0],a:.003,d:.34,peak:.36*(.35+.65*N),dest:tt}),H.tone({f:120,to:[[78,.08]],a:.002,d:.08,peak:.4*N}),H.noise({filter:{type:"bandpass",f:3e3,q:1.5},a:5e-4,d:.006,peak:.18*N});break}case"tree":w(H,N,300*ot,.75),H.noise({buf:"rustle",from0:!0,rate:1.1+.3*s(),a:.004,hold:.04,d:.15,peak:.22*N});break;case"lollipop":w(H,N*.9,720*ot,.7);break;case"post":w(H,N,520*ot);break;default:w(H,N,430*ot);break}}function b(){if(!g("hop",.12))return;const W=n.voice(2);if(!W)return;const et=x(.03);W.noise({filter:{type:"bandpass",f:4200*et,q:5},a:5e-4,d:.009,peak:.5}),W.tone({f:1850*et,a:.001,d:.13,peak:.22}),W.tone({f:1850*2.76*et,a:.001,d:.05,peak:.09}),W.noise({t:.075,filter:{type:"bandpass",f:3700*et,q:4},a:5e-4,d:.008,peak:.2})}function S(W){if(!g("holed",.3))return;const et=n.voice(2);if(!et)return;const lt=hr(W,1),yt=lt>2.5?4:lt>.9?3:2,Ft=[[0,3e3,.3],[.05,2650,.24],[.092,3250,.18],[.125,2500,.13]];for(let ot=0;ot<yt;ot++){const[H,tt,zt]=Ft[ot];et.noise({t:H,filter:{type:"bandpass",f:tt*x(.04),q:3.5},a:5e-4,d:.016,peak:zt})}const N=Ft[yt-1][0]+.05;et.tone({t:N,f:310,to:[[205,.22]],a:.002,d:.26,peak:.5}),et.tone({t:N,f:640,to:[[470,.1]],a:.001,d:.11,peak:.13}),et.noise({t:N,filter:{type:"bandpass",f:820,q:2.5},a:.001,d:.1,peak:.26}),et.tone({t:N+.13,f:285,to:[[215,.11]],a:.002,d:.12,peak:.2}),et.noise({t:N+.24,filter:{type:"bandpass",f:1900,q:3},a:5e-4,d:.01,peak:.08})}function M(W=1){const et=n.voice(2,W);if(et){et.tone({f:260,to:[[720,.07]],a:.002,d:.09,peak:.35}),et.noise({filter:{type:"lowpass",f:5200,q:.8,to:[[500,.45]]},a:.004,d:.5,peak:.5}),et.noise({buf:"brown",filter:{type:"lowpass",f:420,q:.7},a:.004,d:.26,peak:.42});for(let lt=0;lt<4;lt++){const yt=480+s()*520;et.tone({t:.13+lt*.07+s()*.03,f:yt,to:[[yt*1.9,.045]],a:.002,d:.05,peak:.11})}for(let lt=0;lt<3;lt++)et.noise({t:.2+s()*.3,filter:{type:"bandpass",f:4200+s()*2e3,q:3},a:5e-4,d:.012,peak:.09})}}function T(W=1){const et=n.voice(2,W);et&&(et.noise({filter:{type:"bandpass",f:1900,q:1.2,to:[[340,.4]]},a:.12,d:.3,peak:.36}),et.tone({f:900,to:[[260,.42]],a:.02,hold:.1,d:.32,peak:.08}),et.tone({t:.44,f:112,to:[[56,.16]],a:.003,d:.17,peak:.5}),et.noise({t:.44,buf:"brown",filter:{type:"lowpass",f:320,q:.7},a:.003,d:.1,peak:.36}))}function k(W){if(!g("whiff",.3))return;const et=n.voice(1);if(et){const lt=et.filter("lowpass",1600,.7);et.tone({type:"triangle",f:540,to:[[300,.3]],vib:[7,14,.05],a:.03,d:.3,peak:.22,dest:lt}),et.tone({f:270,to:[[150,.3]],a:.03,d:.28,peak:.1})}W==="water"&&g("hazard",.3)?M(.45):W==="oob"&&g("hazard",.3)&&T(.45)}function V(){if(!g("drop",.2))return;const W=n.voice(1);W&&(W.tone({f:380,to:[[1e3,.035]],a:.001,d:.05,peak:.28}),W.noise({filter:{type:"bandpass",f:2500,q:1.5},a:5e-4,d:.006,peak:.14}),W.tone({t:.085,f:700,to:[[520,.03]],a:.001,d:.035,peak:.08}))}function $(W){if(!g("ui",.06))return;const et=n.voice(1);et&&(et.tone({f:1500,to:[[1e3,.03]],a:.001,d:.035,peak:.26}),et.noise({filter:{type:"highpass",f:3e3,q:.7},a:5e-4,d:.004,peak:.1}),W&&et.tone({t:.05,f:2e3,to:[[1500,.03]],a:.001,d:.04,peak:.2}))}const at=72,rt=74,ft=76,nt=79,Y=69,U=67,q=84,j=88,st=91,X=96;function it(W){if(!g("jingle",.5))return;const et=W==="ace"||W==="albatross"||W==="eagle",lt=n.voice(3,et?.62:.7);if(lt)if(et){const yt=[[0,at,.06],[.11,ft,.06],[.22,nt,.06],[.34,q,.6]];for(const[N,ot,H]of yt)v(lt,N,ot,H,.2),m(lt,N,ot,.35,.22);v(lt,.34,nt,.6,.1),v(lt,.34,ft,.6,.08);const Ft=[q,86,j,st,93,X,98,100];for(let N=0;N<Ft.length;N++)p(lt,.48+N*.04,Ft[N],.5,.07);if(W!=="eagle"){for(const N of[q,j,st,X])p(lt,1,N,1.2,.08);m(lt,1,at,.8,.18)}y(.3,!0)}else if(W==="birdie"){const yt=[[0,at],[.085,ft],[.17,nt],[.255,q]];for(const[Ft,N]of yt)m(lt,Ft,N,Ft>.2?.7:.3,.28);p(lt,.255,q,.9,.09),p(lt,.255,j,.9,.06),y(.28,!1)}else W==="par"?(p(lt,0,nt,1,.2),m(lt,0,nt,.3,.12),p(lt,.16,q,1.3,.22),m(lt,.16,q,.5,.13)):W==="picked"?(m(lt,0,rt,.35,.18),m(lt,.17,Y,.55,.16)):(m(lt,0,ft,.3,.22),m(lt,.15,rt,.3,.2),m(lt,.3,U,.3,.16),m(lt,.45,at,.75,.22),p(lt,.45,q,.6,.05))}if(i&&i.on){i.on("shot:fire",W=>{d(),g("shot",.05)&&_(hr(W&&W.power,.5))}),i.on("ball:contact",W=>{g("clack",.03)&&E(W&&W.speed)}),i.on("ball:ballhit",W=>{g("clack",.03)&&E(W&&W.speed,.7)}),i.on("ball:wall",W=>A(W||{})),i.on("ball:hop",()=>b()),i.on("ball:holed",W=>S(W&&W.speed)),i.on("ball:hazard",W=>{g("hazard",.3)&&(W&&W.kind==="water"?M(1):T(1))}),i.on("ball:whiff",W=>k(W&&W.reason)),i.on("ball:drop",()=>V()),i.on("hole:done",W=>it(W&&W.term&&W.term.key));for(const W of x2)i.on(W,()=>$(W==="ui:play"||W==="ui:next"||W==="ui:retry"||W==="ui:resume"));i.on("ui:sound",W=>{_t.setMuted(!!(W&&W.muted)),$(!0)}),i.on("audio:external",W=>_t.setExternalMute(!!(W&&W.muted)))}const _t={unlock:d,setMuted(W){r=!!W,h()},setExternalMute(W){o=!!W,h()},get muted(){return r},stats:()=>n.stats()};return _t}const os=typeof window<"u"&&window.__ebgBoot?window.__ebgBoot:null,Tr=({pct:i,label:t})=>os!==null?os.stage(i,t):void 0;os!==null&&os.codeReady&&os.codeReady();await Tr(Ns.course);await eh();fd();const Dl=document.getElementById("stage"),Dr=document.getElementById("ui");Object.assign(Dl.style,{position:"fixed",inset:"0",overflow:"hidden"});Object.assign(Dr.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"10"});y2();const Ae=yd(),dn=await gp(_d),He=o1(Dl),Je=v1(He),Ze=pp({events:Ae}),Il=dn.isFresh();let ls=Il?0:Math.min(dn.nextIndex(),mi.length-1),on=lh(mi[ls]),$n=td(He,on),$f=!0;He.setRound(on.round);Je.setLevel(on);await Tr(Ns.balls);const nr=my(He,{uiRoot:Dr,rig:Je});nr.setSkin(dn.skin);nr.setRound(on.round);const od=yy(He,{events:Ae,play:Ze}),_2=By(He);await Tr(Ns.flags);const Gs=n2(Dr,{events:Ae}),ad=d2(Dr,{events:Ae,progress:dn,holes:mi,rounds:Cr,rig:Je,play:Ze}),cd=e2({stage:He,rig:Je,play:Ze,events:Ae,uiRoot:Dr}),ta=v2({events:Ae});ta.setMuted(dn.muted);const zl=document.createElement("div");zl.textContent=`v${Jf}`;Object.assign(zl.style,{position:"fixed",right:"max(10px, env(safe-area-inset-right))",bottom:"max(6px, env(safe-area-inset-bottom))",zIndex:"5",font:"11px system-ui, sans-serif",letterSpacing:".06em",color:"rgba(255,255,255,.55)",pointerEvents:"none"});document.body.appendChild(zl);const we={menuOpen:!1,paused:!1,ad:!1,gameplay:!1,holesThisSession:0,roundPending:null,loading:!1};function xi(){const i=!we.menuOpen&&!we.paused&&!we.ad&&!we.loading&&Ze.state!=="idle"&&Ze.state!=="done";cd.enable(i),i!==we.gameplay&&(we.gameplay=i,i?dd():pd())}function Wo(){ta.setExternalMute(lc()),Ae.emit("audio:external",{muted:lc()})}vd(Wo);Wo();function Ir(i){ls=i,we.loading=!0,$f&&on.id===mi[i].id||($n.dispose(),on=lh(mi[i]),$n=td(He,on)),$f=!1,He.setRound(on.round),nr.setRound(on.round),Je.setLevel(on),$n.faceCamera(He.camera),od.clear(),Ze.load(on,i),Gs.setHole(on,i),Gs.setStrokes(0,on.par),Gs.show(!0),md({round:on.round,hole:i+1}),Ae.emit("game:hole",{index:i,level:on,first:Il&&i===0&&we.holesThisSession===0}),xi(),Je.intro().then(()=>{ls===i&&(we.loading=!1,Ze.state==="ready"&&Je.frameShot(Ze),$n.setFlow(1),xi())})}async function ld(){if(!(we.holesThisSession<2)){we.ad=!0,Ae.emit("ad:start",{}),Wo(),xi();try{await xd()}catch(i){console.error(i)}we.ad=!1,Wo(),Ae.emit("ad:end",{}),xi()}}function M2(i){const t=Cr.find(r=>r.id===i),e=i===1?0:9,n=t.holes.map((r,o)=>({index:e+o,strokes:dn.best(e+o),par:r.par})),s=dn.roundTotal(i);return{round:i,name:t.name,holes:n,total:s.total,par:s.par,rel:vc(s.total,s.par),complete:s.complete}}Ae.on("shot:ready",({strokes:i,par:t})=>{Gs.setStrokes(i,t),we.loading||Je.frameShot(Ze),$n.setFlow(1),xi()});Ae.on("shot:fire",({strokes:i})=>{Je.userMoved=!1,Gs.setStrokes(i,Ze.level.par),$n.setFlow(0),ta.unlock()});Ae.on("shot:end",({strokes:i,par:t})=>Gs.setStrokes(i,t));Ae.on("ball:contact",()=>nr.flash());Ae.on("ball:holed",()=>$n.wiggleFlag());Ae.on("hole:done",({index:i,strokes:t,stars:e,term:n,level:s})=>{const r=dn.roundTotal(s.round);dn.record(i,t,e),we.holesThisSession+=1,(n.key==="ace"||n.key==="albatross")&&Ol();const o=mi.filter((c,l)=>dn.best(l)!==null).length;if(gd(Math.round(o/mi.length*100)),i===8||i===17){const c=dn.roundTotal(s.round);c.complete&&(!r.complete||c.total<r.total)&&Ol(),we.roundPending=s.round}xi()});Ae.on("ui:next",async()=>{if(we.roundPending){const i=we.roundPending;we.roundPending=null,Ae.emit("game:round",M2(i));return}if(await ld(),ls>=mi.length-1){ad.showTitle();return}Ir(ls+1)});Ae.on("ui:retry",async()=>{we.roundPending=null,Ze.state==="done"&&await ld(),we.paused=!1,Ir(ls)});Ae.on("ui:play",({index:i})=>{we.roundPending=null,we.paused=!1,Ir(i)});Ae.on("ui:pause",()=>{we.paused=!0,xi()});Ae.on("ui:resume",()=>{we.paused=!1,xi()});Ae.on("ui:menu",({open:i})=>{we.menuOpen=!!i,xi()});Ae.on("ui:overview",({on:i})=>Je.overview(!!i));Ae.on("ui:sound",({muted:i})=>{dn.setMuted(!!i),ta.setMuted(!!i)});Ae.on("ui:skin",({id:i})=>{dn.setSkin(i),nr.setSkin(i)});Dl.addEventListener("pointerdown",()=>{we.loading&&Je.skipIntro&&Je.skipIntro()});He.onResize(()=>{$n.faceCamera(He.camera),Ze.state==="ready"&&!Je.userMoved&&Je.frameShot(Ze)});let rc=0,Zf=0;function ud(i){requestAnimationFrame(ud);const t=rc?Math.min((i-rc)/1e3,.1):0;rc=i,Zf+=t,!we.paused&&!we.ad&&Ze.update(t);const e=Ze.balls();Ze.state==="rolling"&&!Je.userMoved&&Je.follow(e[1].x,e[1].z),Je.update(t),nr.update(e,t),_2.update(Ze,t),$n.update(t,Zf),cd.update(t),od.update(t),He.render()}window.ebg={version:Jf,events:Ae,play:Ze,stage:He,rig:Je,progress:dn,HOLES:mi,ROUNDS:Cr,loadHole:Ir,get level(){return on},get course(){return $n}};if(os!==null){if(await Tr(Ns.warm),He.renderer&&He.scene&&He.camera)try{await Promise.race([He.renderer.compileAsync(He.scene,He.camera),new Promise(i=>setTimeout(i,4e3))])}catch(i){console.error(i)}for(let i=0;i<3;i++)await Tr({pct:Ns.warm.pct+3+i*1.5,label:Ns.warm.label}),He.render();await os.ready()}hd();requestAnimationFrame(ud);Ir(ls);Il||ad.showTitle();function y2(){window.addEventListener("keydown",i=>{const t=i.target;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","PageUp","PageDown"].includes(i.code)&&i.preventDefault()}),window.addEventListener("wheel",i=>i.preventDefault(),{passive:!1}),window.addEventListener("contextmenu",i=>i.preventDefault())}

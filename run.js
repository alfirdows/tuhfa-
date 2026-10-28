/* Lantern Run: a lively review game shared by every memorization site (own name, art and code).
   The site gives questions and a place to keep coins; everything stays on the device. */
(function(){
"use strict";
/* To add a language: copy the "en" block below, give it the language code (e.g. fr, ur), and translate the words. */
const TX={
 ar:{title:"سباق الفانوس",sub:"اجرِ، اجمع الدنانير، وادخل من باب الجواب الصحيح",start:"ابدأ",shop:"المتجر",close:"إغلاق",again:"العب مرة أخرى",
  coins:"دنانير",best:"أفضل نتيجة",hint:"اسحب يمينًا أو يسارًا لتغيّر الطريق، ولأعلى لتقفز. أو المس جانب الشاشة.",go:"انطلق!",
  great:["ممتاز!","أحسنت!","رائع!","بارك الله فيك!"],oops:"الجواب:",over:"انتهى السباق",right:"صحيح",wrong:"خطأ",dist:"المسافة",
  review:"راجع هذه",earned:"جمعت",paused:"توقف مؤقت",resume:"تابع",sound:"الصوت",on:"يعمل",off:"مطفأ",owned:"عندك",use:"اختر",inUse:"مختار",buy:"اشترِ",
  need:"تحتاج دنانير أكثر",bonus:"هدية أول سباق اليوم",magnet:"مغناطيس الدنانير!",heart:"قلب إضافي",heartD:"لسباق واحد",cloak:"لون الرداء",trail:"أثر لامع",trailD:"نجوم خلف العدّاء",
  colors:{green:"أخضر",blue:"أزرق",purple:"بنفسجي",red:"أحمر",gold:"ذهبي",night:"ليلي"},combo:"متتالية",lives:"قلوب",items:"قلب إضافي جاهز",yourWallet:"دنانيرك"},
 en:{title:"Lantern Run",sub:"Run, collect coins, and go through the gate with the right answer",start:"Start",shop:"Shop",close:"Close",again:"Play again",
  coins:"coins",best:"Best",hint:"Swipe left or right to change lanes, swipe up to jump. Or tap a side of the screen.",go:"Go!",
  great:["Excellent!","Well done!","Great!","Barak Allahu fik!"],oops:"Answer:",over:"Run over",right:"Right",wrong:"Wrong",dist:"Distance",
  review:"Review these",earned:"You collected",paused:"Paused",resume:"Resume",sound:"Sound",on:"On",off:"Off",owned:"Owned",use:"Use",inUse:"In use",buy:"Buy",
  need:"You need more coins",bonus:"First run today gift",magnet:"Coin magnet!",heart:"Extra heart",heartD:"For one run",cloak:"Cloak colour",trail:"Sparkle trail",trailD:"Stars behind the runner",
  colors:{green:"Green",blue:"Blue",purple:"Purple",red:"Red",gold:"Gold",night:"Night"},combo:"in a row",lives:"hearts",items:"Extra heart ready",yourWallet:"Your coins"}
};
const CLOAKS=[["green","#3f7f55",0],["blue","#2f6db5",120],["purple","#7a4f9e",250],["red","#c0392b",400],["night","#1d2b4f",600],["gold","#c9962c",900]];
const TRAIL_PRICE=700,HEART_PRICE=60;
const CSS=`
.lr-ov{position:fixed;inset:0;z-index:9999;background:#120f2a;color:#fff;font-family:var(--font,system-ui);touch-action:none;user-select:none;-webkit-user-select:none;overscroll-behavior:none}
.lr-ov canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.lr-hud{position:absolute;top:0;left:0;right:0;padding:calc(env(safe-area-inset-top) + 10px) 12px 0;display:flex;gap:8px;align-items:center;justify-content:space-between;pointer-events:none;direction:ltr}
.lr-hud>*{pointer-events:auto}
.lr-pill{background:rgba(10,8,30,.55);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.18);border-radius:99px;padding:6px 12px;font-weight:700;font-size:17px;display:inline-flex;align-items:center;gap:6px;color:#fff}
.lr-ib{width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:rgba(10,8,30,.55);color:#fff;font-size:18px;display:grid;place-items:center;cursor:pointer;padding:0}
.lr-coin{width:20px;height:20px;flex:none}
.lr-q{position:absolute;left:10px;right:10px;top:calc(env(safe-area-inset-top) + 62px);text-align:center;pointer-events:none;transition:opacity .25s,transform .25s}
.lr-q.hide{opacity:0;transform:translateY(-12px)}
.lr-qp{display:inline-block;max-width:100%;background:rgba(255,253,245,.96);color:#1b1a14;border-radius:18px;padding:8px 16px;font-size:20px;line-height:1.6;box-shadow:0 6px 20px rgba(0,0,0,.35);font-family:var(--lr-text)}
.lr-qp small{display:block;font-family:var(--font,system-ui);font-size:12px;color:#6b5a2a;font-weight:700;line-height:1.3}
.lr-ch{display:flex;gap:6px;margin-top:8px;direction:ltr}
.lr-ch span{flex:1;background:rgba(20,16,50,.8);border:2px solid #e3b04b;border-radius:14px;padding:6px 4px;font-family:var(--lr-name);font-size:19px;line-height:1.5;color:#fff7dc;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lr-ch span.ok{background:#2e7a4f;border-color:#9ee2b5}.lr-ch span.no{background:#9b2c22;border-color:#ffb3aa}
.lr-pop{position:absolute;left:50%;top:42%;transform:translate(-50%,-50%);font-size:34px;font-weight:800;color:#ffe08a;text-shadow:0 3px 0 #7a4a00,0 0 18px rgba(255,200,80,.7);pointer-events:none;animation:lrpop .9s ease-out forwards;white-space:nowrap}
.lr-pop.bad{color:#fff;text-shadow:0 3px 0 #7a1a10;font-size:22px;background:rgba(155,44,34,.92);padding:8px 16px;border-radius:16px;font-family:var(--lr-name)}
@keyframes lrpop{0%{opacity:0;transform:translate(-50%,-30%) scale(.6)}15%{opacity:1;transform:translate(-50%,-50%) scale(1.15)}30%{transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-110%) scale(1)}}
.lr-card{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top) + 16px) 18px calc(env(safe-area-inset-bottom) + 16px);text-align:center;background:linear-gradient(180deg,rgba(18,15,42,.55),rgba(18,15,42,.92));overflow:auto}
.lr-card h2{font-size:32px;margin:6px 0 4px;color:#ffe08a;text-shadow:0 3px 0 #7a4a00}
.lr-card p{margin:4px 0;color:#e8e3ff;font-size:15px;line-height:1.6;max-width:360px}
.lr-btn{min-width:200px;min-height:52px;border-radius:99px;border:0;font-weight:800;font-size:19px;margin:6px;cursor:pointer;font-family:inherit;padding:0 22px}
.lr-go{background:linear-gradient(#ffd56b,#e3a52c);color:#3a2600;box-shadow:0 5px 0 #9c6a10;animation:lrbeat 1.4s ease-in-out infinite}
.lr-go:active{transform:translateY(3px);box-shadow:0 2px 0 #9c6a10}
@keyframes lrbeat{50%{transform:scale(1.05)}}
.lr-sec{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.25)!important}
.lr-big{font-size:48px;font-weight:800;color:#ffe08a;display:flex;align-items:center;gap:10px;justify-content:center}
.lr-row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:8px 0}
.lr-stat{background:rgba(255,255,255,.1);border-radius:14px;padding:8px 14px;min-width:84px}.lr-stat b{display:block;font-size:22px}.lr-stat span{font-size:12px;color:#cfc8f5}
.lr-rev{width:100%;max-width:380px;text-align:start;background:rgba(255,255,255,.08);border-radius:14px;padding:8px 12px;margin:8px 0}
.lr-rev div{padding:6px 0;border-bottom:1px solid rgba(255,255,255,.1);font-size:15px;line-height:1.7}.lr-rev div:last-child{border:0}
.lr-rev .a{color:#9ee2b5;font-family:var(--lr-name);font-size:19px}
.lr-shop{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;max-width:380px;margin:10px 0}
.lr-it{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:10px;display:flex;flex-direction:column;align-items:center;gap:6px;color:#fff;font-family:inherit;font-size:14px;cursor:pointer}
.lr-it.sel{border-color:#ffe08a;box-shadow:0 0 0 2px #ffe08a inset}
.lr-it i{width:46px;height:46px;border-radius:50%;display:block;border:3px solid rgba(255,255,255,.6)}
.lr-it small{color:#ffe08a;font-weight:700;display:inline-flex;gap:4px;align-items:center}
.lr-hint{position:absolute;left:24px;right:24px;top:58%;text-align:center;font-size:16px;font-weight:600;line-height:1.6;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,.6);pointer-events:none;margin:0}
.lr-toast{position:absolute;left:50%;bottom:calc(env(safe-area-inset-bottom) + 24px);transform:translateX(-50%);background:#fff;color:#222;border-radius:99px;padding:8px 16px;font-weight:700;font-size:14px}
`;
const COIN=`<svg class="lr-coin" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#e3b04b" stroke="#a87920" stroke-width="2"/><circle cx="20" cy="20" r="13" fill="none" stroke="#fff3cf" stroke-width="1.5"/><path d="M20 10l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#fff3cf"/></svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const rnd=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.floor(Math.random()*a.length)];

/* tiny sound effects made in the browser (no music, no files) */
const SFX={ctx:null,on:true,
 tone(f,d,type="sine",v=.12,slide=0){if(!this.on)return;try{this.ctx=this.ctx||new (window.AudioContext||window.webkitAudioContext)();const c=this.ctx,o=c.createOscillator(),g=c.createGain(),t=c.currentTime;
  o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+d)}catch(e){}},
 coin(){this.tone(1320,.09,"square",.05);setTimeout(()=>this.tone(1760,.12,"square",.05),55)},
 right(){[660,880,1100].forEach((f,i)=>setTimeout(()=>this.tone(f,.16,"triangle",.12),i*80))},
 wrong(){this.tone(220,.3,"sawtooth",.08,110)},
 hit(){this.tone(140,.25,"square",.1,60)},
 jump(){this.tone(380,.18,"triangle",.08,760)},
 lane(){this.tone(520,.05,"sine",.04)}};

function play(o){
 /* any language: words come from TX (add a new language there, or pass o.text); missing words fall back to English */
 const base=TX[o.lang]||{},L=Object.assign({},TX.en,base,o.text||{});L.colors=Object.assign({},TX.en.colors,base.colors||{},(o.text||{}).colors||{});
 const AR=o.rtl!=null?o.rtl:["ar","ur","fa","ps","he","ku","sd","ug"].includes(String(o.lang).split("-")[0]),S=o.store;
 SFX.on=S.get("lrSound",true);
 if(!document.getElementById("lr-css")){const st=document.createElement("style");st.id="lr-css";st.textContent=CSS;document.head.appendChild(st)}
 const ov=document.createElement("div");ov.className="lr-ov";ov.dir=AR?"rtl":"ltr";ov.style.setProperty("--lr-name",o.nameFont||"serif");ov.style.setProperty("--lr-text",o.textFont||"serif");
 ov.innerHTML=`<canvas></canvas><div class="lr-hud" hidden><span class="lr-pill" id="lrC">${COIN}<span>0</span></span><span class="lr-pill" id="lrH" style="color:#ff6b6b;letter-spacing:2px"></span><span class="lr-pill" id="lrX" hidden></span><span style="flex:1"></span><button class="lr-ib" id="lrP" aria-label="${L.paused}">❚❚</button></div><div class="lr-q hide" id="lrQ"></div><div id="lrM"></div><p class="lr-hint" hidden>${L.hint}</p>`;
 document.body.appendChild(ov);document.documentElement.style.overflow="hidden";
 const cv=ov.querySelector("canvas"),ctx=cv.getContext("2d"),hud=ov.querySelector(".lr-hud"),qEl=ov.querySelector("#lrQ"),menu=ov.querySelector("#lrM"),hintEl=ov.querySelector(".lr-hint");
 let W=0,H=0,DPR=1;
 const size=()=>{DPR=Math.min(2,window.devicePixelRatio||1);W=ov.clientWidth;H=ov.clientHeight;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0)};
 size();window.addEventListener("resize",size);

 /* ---------- game state ---------- */
 const LANES=[-1,0,1],GAP=1.55,CAM=3.2,FAR=46;
 let g=null,raf=0,last=0,state="menu",idle=0;
 const stars=Array.from({length:60},()=>[Math.random(),Math.random()*.34,Math.random()*1.4+.3,Math.random()*6]);
 const skyline=Array.from({length:18},(_,i)=>({x:i/17,w:rnd(.04,.08),h:rnd(.03,.09),dome:Math.random()<.45,tower:Math.random()<.25}));
 const cloak=()=>(CLOAKS.find(c=>c[0]===S.get("lrCloak","green"))||CLOAKS[0])[1];

 function newGame(){
  const extra=S.get("lrHeart",0)>0;if(extra)S.set("lrHeart",S.get("lrHeart",0)-1);
  g={t:0,dist:0,speed:9,lane:1,x:0,y:0,vy:0,hearts:3+(extra?1:0),inv:0,coins:0,combo:0,right:0,wrong:0,miss:[],objs:[],next:14,gateAt:38,gate:null,shake:0,magnet:0,parts:[],run:0,trail:S.get("lrTrailOn",false)&&S.get("lrTrail",false),over:false,cd:3.2};
  idle=0;hud.hidden=false;updHud();qEl.classList.add("hide");
 }
 function updHud(){ov.querySelector("#lrC span").textContent=g.coins;ov.querySelector("#lrH").textContent="❤".repeat(Math.max(0,g.hearts))||"–";
  const x=ov.querySelector("#lrX");x.hidden=g.combo<2;x.textContent=`×${Math.min(5,g.combo)} 🔥`}

 /* track builder: coin lines, things to jump over, blocked lanes, and answer gates */
 function build(){
  while(g.next<g.dist+FAR+20){
   const z=g.next;
   if(z>=g.gateAt-14&&z<=g.gateAt+8){g.next=g.gateAt+9;continue}
   const r=z<55?.1:Math.random(),free=Math.floor(Math.random()*3);
   if(r<.38){const ln=Math.floor(Math.random()*3);const arc=Math.random()<.3;for(let k=0;k<6;k++)g.objs.push({k:"coin",ln,z:z+k*1.3,h:arc?Math.sin(k/5*Math.PI)*1.4:0})}
   else if(r<.7){const ln=[0,1,2].filter(x=>x!==free);const one=pick(ln);g.objs.push({k:"low",ln:one,z});if(Math.random()<.5)for(let k=0;k<4;k++)g.objs.push({k:"coin",ln:one,z:z-1.6+k*1.1,h:Math.sin(k/3*Math.PI)*1.6+.2})}
   else if(r<.9){const blocks=[0,1,2].filter(x=>x!==free);const n=Math.random()<.5?1:2;blocks.slice(0,n).forEach(b=>g.objs.push({k:"wall",ln:b,z}));for(let k=0;k<4;k++)g.objs.push({k:"coin",ln:free,z:z-2+k*1.3,h:0})}
   else{if(g.t>8&&!g.objs.some(x=>x.k==="mag"))g.objs.push({k:"mag",ln:free,z,h:.6})}
   g.next=z+rnd(7,11)-Math.min(3,g.speed/8);
  }
  if(!g.gate&&g.dist+FAR>g.gateAt){const q=o.question();if(q){g.gate={z:g.gateAt,q,done:false};showQ(q)}else g.gateAt+=60}
 }
 function showQ(q){qEl.innerHTML=`<div class="lr-qp"><small>${esc(q.label||"")}</small>${esc(q.p)}</div><div class="lr-ch">${q.c.map(c=>`<span>${esc(c)}</span>`).join("")}</div>`;qEl.classList.remove("hide")}
 function pop(txt,bad){const d=document.createElement("div");d.className="lr-pop"+(bad?" bad":"");d.textContent=txt;ov.appendChild(d);setTimeout(()=>d.remove(),bad?1900:900);if(bad)d.style.animationDuration="1.9s"}
 function burst(x,y,col,n=14){for(let i=0;i<n;i++)g.parts.push({x,y,vx:rnd(-160,160),vy:rnd(-260,-60),life:rnd(.4,.8),col,r:rnd(2,4.5)})}

 /* ---------- projection ---------- */
 const HZ=()=>H*.34,BOT=()=>H*.86,U0=()=>Math.min(W*.2,H*.13);
 const sc=d=>CAM/(Math.max(-2.9,d)+CAM);
 const P=(X,d,h=0)=>{const s=sc(d),u=U0();return{x:W/2+X*GAP*u*s,y:HZ()+(BOT()-HZ())*s-h*u*s,s:u*s}};

 /* ---------- update ---------- */
 function step(dt){
  if(g.cd>0){g.cd-=dt;if(g.cd<=0)SFX.right();return}
  g.t+=dt;g.speed=Math.min(20,9+g.t*.11);const dd=g.speed*dt;g.dist+=dd;g.run+=dd;
  g.x+=(LANES[g.lane]-g.x)*Math.min(1,dt*14);
  if(g.y>0||g.vy>0){g.vy-=30*dt;g.y=Math.max(0,g.y+g.vy*dt);if(g.y===0)g.vy=0}
  g.inv=Math.max(0,g.inv-dt);g.shake=Math.max(0,g.shake-dt);g.magnet=Math.max(0,g.magnet-dt);
  build();
  const near=Math.round(g.x+1);
  for(const ob of g.objs){const d=ob.z-g.dist;
   if(ob.k==="coin"&&g.magnet>0&&d<6&&!ob.got){ob.ln=near}
   if(ob.got||ob.hit||d>0.35||d<-1)continue;
   if(ob.ln!==near)continue;
   if(ob.k==="coin"){if(Math.abs(g.y-ob.h)<1.3){ob.got=true;g.coins+=1;SFX.coin();const p=P(ob.ln-1,0,ob.h+.5);burst(p.x,p.y,"#ffd56b",5);updHud()}}
   else if(ob.k==="mag"){ob.got=true;g.magnet=8;pop(L.magnet);SFX.right()}
   else if(g.inv<=0&&((ob.k==="low"&&g.y<.75)||ob.k==="wall")){ob.hit=true;hurt()}}
  g.objs=g.objs.filter(ob=>ob.z-g.dist>-3);
  if(g.gate&&!g.gate.done&&g.gate.z-g.dist<=0.2){const q=g.gate.q,ok=near===q.a;g.gate.done=true;g.gate.pick=near;
   const sp=qEl.querySelectorAll(".lr-ch span");if(sp[q.a])sp[q.a].classList.add("ok");if(!ok&&sp[near])sp[near].classList.add("no");
   if(ok){g.right++;g.combo++;const add=10*Math.min(5,g.combo);g.coins+=add;pop(`${pick(L.great)} +${add}`);SFX.right();const p=P(near-1,0,1.5);burst(p.x,p.y,"#9ee2b5",26);burst(p.x,p.y,"#ffd56b",16)}
   else{g.wrong++;g.combo=0;g.miss.push({p:q.p,a:q.c[q.a],label:q.label});pop(`${L.oops} ${q.c[q.a]}`,true);SFX.wrong();hurt(true)}
   updHud();setTimeout(()=>qEl.classList.add("hide"),ok?700:1700);
   g.gateAt=g.gate.z+rnd(58,70)+g.speed*1.2;setTimeout(()=>{if(g)g.gate=null},10)}
  for(const p of g.parts){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=500*dt;p.life-=dt}g.parts=g.parts.filter(p=>p.life>0);
  if(g.trail&&Math.random()<.6){const p=P(g.x,0,g.y+.4);g.parts.push({x:p.x+rnd(-8,8),y:p.y,vx:rnd(-20,20),vy:rnd(20,60),life:.5,col:pick(["#ffe08a","#fff","#9ee2b5"]),r:rnd(1.5,3)})}
 }
 function hurt(fromGate){g.hearts--;g.inv=1.4;g.shake=.35;if(!fromGate){SFX.hit();g.combo=0}updHud();if(g.hearts<=0)setTimeout(end,fromGate?900:350)}

 /* ---------- draw ---------- */
 function draw(){
  const hz=HZ(),bot=BOT(),u=U0(),t=performance.now()/1000;
  ctx.save();if(g&&g.shake>0)ctx.translate(rnd(-6,6)*g.shake*3,rnd(-4,4)*g.shake*3);
  let gr=ctx.createLinearGradient(0,0,0,hz);gr.addColorStop(0,"#120f2a");gr.addColorStop(.6,"#3b2a6b");gr.addColorStop(1,"#f08a4b");
  ctx.fillStyle=gr;ctx.fillRect(-10,-10,W+20,hz+12);
  for(const[sx,sy,r,ph]of stars){ctx.globalAlpha=.4+.4*Math.sin(t*2+ph);ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(sx*W,sy*hz*1.6,r,0,7);ctx.fill()}ctx.globalAlpha=1;
  ctx.fillStyle="#fbe7b0";ctx.beginPath();ctx.arc(W*.8,hz*.28,18,0,7);ctx.fill();ctx.fillStyle="#2a1f55";ctx.beginPath();ctx.arc(W*.8+8,hz*.28-4,16,0,7);ctx.fill();
  ctx.fillStyle="#2a1f4a";for(const b of skyline){const x=b.x*W,w=b.w*W,h=b.h*H;ctx.fillRect(x-w/2,hz-h,w,h);if(b.dome){ctx.beginPath();ctx.arc(x,hz-h,w/2,Math.PI,0);ctx.fill()}if(b.tower){ctx.fillRect(x+w/2-4,hz-h*1.9,5,h*1.9)}}
  gr=ctx.createLinearGradient(0,hz,0,H);gr.addColorStop(0,"#5b3f2c");gr.addColorStop(1,"#c98f55");ctx.fillStyle=gr;ctx.fillRect(-10,hz,W+20,H-hz+10);
  const dist=g?g.dist:t*6;
  const edge=(side,d)=>P(side*2.1,d);
  ctx.beginPath();let a=edge(-1,FAR),b=edge(1,FAR),c=edge(1,-2.5),e=edge(-1,-2.5);ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.lineTo(c.x,c.y);ctx.lineTo(e.x,e.y);ctx.closePath();ctx.fillStyle="#e6cfa3";ctx.fill();
  for(let k=Math.floor(dist/2)*2;k<dist+FAR;k+=2){const d0=k-dist,d1=d0+1;if(d1<-2.5)continue;if(Math.floor(k/2)%2)continue;
   const p0=edge(-1,Math.max(-2.5,d0)),p1=edge(1,Math.max(-2.5,d0)),p2=edge(1,d1),p3=edge(-1,d1);ctx.fillStyle="rgba(150,105,60,.18)";ctx.beginPath();ctx.moveTo(p0.x,p0.y);ctx.lineTo(p1.x,p1.y);ctx.lineTo(p2.x,p2.y);ctx.lineTo(p3.x,p3.y);ctx.fill()}
  ctx.strokeStyle="rgba(255,255,255,.55)";ctx.lineWidth=2;for(const s of[-.5,.5]){for(let k=Math.floor(dist/3)*3;k<dist+FAR;k+=3){const d0=k-dist;if(d0<-2.5)continue;const p=P(s,d0),q=P(s,d0+1.4);ctx.lineWidth=Math.max(1,p.s*.05);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}}
  /* side arches with lanterns, far to near */
  const items=[];
  for(let k=Math.floor(dist/6)*6+6;k<dist+FAR;k+=6)for(const s of[-1,1])items.push({k:"arch",s,d:k-dist});
  if(g){for(const ob of g.objs)if(!ob.got&&!(ob.hit&&ob.k!=="wall"))items.push({k:ob.k,ob,d:ob.z-g.dist});if(g.gate)items.push({k:"gate",d:g.gate.z-g.dist})}
  items.sort((p,q)=>q.d-p.d);
  for(const it of items){if(it.d>FAR||it.d<-2.6)continue;
   if(it.k==="arch")drawArch(it.s,it.d,t);
   else if(it.k==="gate")drawGate(it.d);
   else drawObj(it.ob,it.d,t);
   if(it.d<0.6&&it.d>-0.4&&g&&!it.drewP){}
  }
  if(g)drawRunner(t);
  if(g)for(const p of g.parts){ctx.globalAlpha=Math.max(0,p.life*1.6);ctx.fillStyle=p.col;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fill()}ctx.globalAlpha=1;
  if(g&&g.magnet>0){ctx.fillStyle="rgba(255,224,138,.12)";ctx.fillRect(0,0,W,H)}
  if(g&&g.inv>0&&g.hearts>0){ctx.fillStyle=`rgba(200,40,30,${g.inv>1.1?.25:0})`;ctx.fillRect(0,0,W,H)}
  ctx.restore();
  if(g&&g.cd>0&&state==="play"){const n=Math.ceil(g.cd-.2);ctx.fillStyle="#ffe08a";ctx.font=`800 ${n>0?90:60}px system-ui`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(n>0?String(n):L.go,W/2,H*.45);
}
  hintEl.hidden=!(g&&g.cd>0&&state==="play");
 }
 function wrap(txt,x,y,mw,lh){ctx.direction=AR?"rtl":"ltr";const w=txt.split(" ");let line="";for(const s of w){const tst=line?line+" "+s:s;if(ctx.measureText(tst).width>mw&&line){ctx.fillText(line,x,y);y+=lh;line=s}else line=tst}ctx.fillText(line,x,y);ctx.direction="inherit"}
 function drawArch(s,d,t){const p=P(s*2.45,d),q=P(s*2.45,d,2.6);const w=p.s*.55;if(p.s<2)return;
  ctx.fillStyle="#8c5a3c";ctx.fillRect(p.x-w/2,q.y,w,p.y-q.y);ctx.fillStyle="#6e4430";ctx.fillRect(p.x-w/2,q.y,w*.22,p.y-q.y);
  ctx.fillStyle="#a8714d";ctx.beginPath();ctx.moveTo(p.x-w*.7,q.y);ctx.lineTo(p.x+w*.7,q.y);ctx.lineTo(p.x,q.y-w*.6);ctx.fill();
  const ly=q.y+p.s*.55,lx=p.x-s*w*.65,r=p.s*.13,fl=.75+.25*Math.sin(t*9+d);
  ctx.strokeStyle="#3a2516";ctx.lineWidth=Math.max(1,p.s*.02);ctx.beginPath();ctx.moveTo(p.x-s*w*.5,q.y+p.s*.2);ctx.lineTo(lx,q.y+p.s*.2);ctx.lineTo(lx,ly-r);ctx.stroke();
  const glow=ctx.createRadialGradient(lx,ly,0,lx,ly,r*4);glow.addColorStop(0,`rgba(255,200,90,${.55*fl})`);glow.addColorStop(1,"rgba(255,200,90,0)");ctx.fillStyle=glow;ctx.beginPath();ctx.arc(lx,ly,r*4,0,7);ctx.fill();
  ctx.fillStyle="#ffcf6b";ctx.beginPath();ctx.moveTo(lx,ly-r*1.4);ctx.lineTo(lx+r,ly);ctx.lineTo(lx,ly+r*1.4);ctx.lineTo(lx-r,ly);ctx.fill();ctx.fillStyle="#b07a1c";ctx.fillRect(lx-r*.5,ly-r*1.7,r,r*.35)}
 function coinAt(x,y,r,t,spin){const sx=Math.abs(Math.cos(t*4+spin));ctx.save();ctx.translate(x,y);ctx.scale(Math.max(.15,sx),1);
  ctx.fillStyle="#a87920";ctx.beginPath();ctx.arc(0,0,r,0,7);ctx.fill();ctx.fillStyle="#e3b04b";ctx.beginPath();ctx.arc(0,0,r*.86,0,7);ctx.fill();
  ctx.fillStyle="#fff3cf";ctx.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4,rr=i%2?r*.22:r*.55;ctx.lineTo(Math.cos(a)*rr,Math.sin(a)*rr)}ctx.fill();ctx.restore()}
 function drawObj(ob,d,t){const p=P(ob.ln-1,d,ob.h||0),g0=P(ob.ln-1,d);
  if(ob.k==="coin"){coinAt(p.x,p.y-p.s*.35,p.s*.22,t,ob.z);return}
  if(ob.k==="mag"){const r=p.s*.3;ctx.fillStyle="rgba(158,226,181,.35)";ctx.beginPath();ctx.arc(p.x,p.y-p.s*.4,r*1.6+Math.sin(t*6)*3,0,7);ctx.fill();ctx.strokeStyle="#c0392b";ctx.lineWidth=r*.45;ctx.beginPath();ctx.arc(p.x,p.y-p.s*.4,r*.8,Math.PI,0);ctx.stroke();ctx.fillStyle="#eee";ctx.fillRect(p.x-r*1.02,p.y-p.s*.4,r*.45,r*.4);ctx.fillRect(p.x+r*.58,p.y-p.s*.4,r*.45,r*.4);return}
  ctx.fillStyle="rgba(0,0,0,.18)";ctx.beginPath();ctx.ellipse(g0.x,g0.y,p.s*.55,p.s*.12,0,0,7);ctx.fill();
  if(ob.k==="low"){/* row of clay pots to jump over */const w=p.s*.9;for(let i=-1;i<=1;i++){const x=p.x+i*w*.34,r=w*.2;ctx.fillStyle="#b5562f";ctx.beginPath();ctx.ellipse(x,p.y-r,r,r*1.05,0,0,7);ctx.fill();ctx.fillStyle="#8e3f20";ctx.fillRect(x-r*.45,p.y-r*2.25,r*.9,r*.4);ctx.fillStyle="rgba(255,255,255,.25)";ctx.fillRect(x-r*.7,p.y-r*1.2,r*1.4,r*.14)}}
  else{/* a market stall blocking the lane */const w=p.s*1.05,h=p.s*1.6;ctx.fillStyle="#6b3b22";ctx.fillRect(p.x-w/2,p.y-h,w*.08,h);ctx.fillRect(p.x+w/2-w*.08,p.y-h,w*.08,h);
   ctx.fillStyle="#7a4a2a";ctx.fillRect(p.x-w/2,p.y-h*.45,w,h*.45);ctx.fillStyle="#e0a33a";for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(p.x-w*.3+i*w*.2,p.y-h*.47,w*.08,0,7);ctx.fill()}
   for(let i=0;i<5;i++){ctx.fillStyle=i%2?"#f3ead2":"#c0392b";ctx.beginPath();ctx.moveTo(p.x-w*.6+i*w*.24,p.y-h);ctx.lineTo(p.x-w*.6+(i+1)*w*.24,p.y-h);ctx.lineTo(p.x-w*.6+(i+1)*w*.24,p.y-h*.8);ctx.quadraticCurveTo(p.x-w*.6+(i+.5)*w*.24,p.y-h*.7,p.x-w*.6+i*w*.24,p.y-h*.8);ctx.fill()}}
 }
 function drawGate(d){const q=g.gate.q;for(let i=0;i<3;i++){const p=P(i-1,d),top=P(i-1,d,2.7),w=p.s*GAP*.92;if(p.s<3)continue;
   const done=g.gate.done,col=done?(i===q.a?"#2e7a4f":(i===g.gate.pick?"#9b2c22":"#7a6a55")):"#f1e2bf";
   ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(p.x-w/2,p.y);ctx.lineTo(p.x-w/2,top.y+w*.35);ctx.quadraticCurveTo(p.x-w/2,top.y-w*.05,p.x,top.y-w*.3);ctx.quadraticCurveTo(p.x+w/2,top.y-w*.05,p.x+w/2,top.y+w*.35);ctx.lineTo(p.x+w/2,p.y);
   ctx.lineTo(p.x+w*.36,p.y);ctx.lineTo(p.x+w*.36,top.y+w*.4);ctx.quadraticCurveTo(p.x+w*.36,top.y+w*.05,p.x,top.y-w*.12);ctx.quadraticCurveTo(p.x-w*.36,top.y+w*.05,p.x-w*.36,top.y+w*.4);ctx.lineTo(p.x-w*.36,p.y);ctx.closePath();ctx.fill();
   ctx.strokeStyle="#a87920";ctx.lineWidth=Math.max(1,p.s*.03);ctx.stroke();
   const fs=Math.max(9,Math.min(34,p.s*.32));ctx.font=`700 ${fs}px ${o.nameFont||"serif"}`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.direction="rtl";
   const ty=top.y+w*.3,tw=Math.min(w*1.05,ctx.measureText(q.c[i]).width+fs);ctx.fillStyle="rgba(20,16,50,.88)";rr(p.x-tw/2,ty-fs*.8,tw,fs*1.6,fs*.5);ctx.fill();
   ctx.fillStyle="#fff7dc";let s=q.c[i];while(ctx.measureText(s).width>w*1.0&&s.length>3)s=s.slice(0,-2);if(s!==q.c[i])s+="…";ctx.fillText(s,p.x,ty+fs*.05);ctx.direction="inherit"}}
 function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
 function drawRunner(t){/* seen from behind: hooded runner with a book satchel */
  if(g.inv>0&&Math.floor(t*14)%2&&g.hearts>0)return;
  const gp=P(g.x,0),p=P(g.x,0,g.y),s=p.s,run=g.cd>0?0:g.run*1.9,air=g.y>0.05,col=cloak();
  ctx.fillStyle="rgba(0,0,0,.25)";ctx.beginPath();ctx.ellipse(gp.x,gp.y,s*.32*(1-Math.min(.5,g.y/4)),s*.08,0,0,7);ctx.fill();
  const bob=air?0:Math.abs(Math.sin(run))*s*.05,by=p.y-bob;
  const l1=air?.3:Math.sin(run),l2=air?-.3:-Math.sin(run);
  ctx.strokeStyle="#2b2238";ctx.lineCap="round";ctx.lineWidth=s*.11;
  ctx.beginPath();ctx.moveTo(p.x-s*.09,by-s*.42);ctx.lineTo(p.x-s*.1,by-s*.16+Math.max(0,l1)*s*.1);ctx.stroke();
  ctx.beginPath();ctx.moveTo(p.x+s*.09,by-s*.42);ctx.lineTo(p.x+s*.1,by-s*.16+Math.max(0,l2)*s*.1);ctx.stroke();
  ctx.fillStyle="#f4efe6";ctx.beginPath();ctx.ellipse(p.x-s*.1,by-s*.13+Math.max(0,l1)*s*.1,s*.07,s*.045,0,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(p.x+s*.1,by-s*.13+Math.max(0,l2)*s*.1,s*.07,s*.045,0,0,7);ctx.fill();
  ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(p.x-s*.2,by-s*.95);ctx.quadraticCurveTo(p.x-s*.27,by-s*.55,p.x-s*.24,by-s*.36);ctx.lineTo(p.x+s*.24,by-s*.36);ctx.quadraticCurveTo(p.x+s*.27,by-s*.55,p.x+s*.2,by-s*.95);ctx.closePath();ctx.fill();
  ctx.strokeStyle=col;ctx.lineWidth=s*.09;const sw=air?-.6:Math.sin(run)*.5;
  ctx.beginPath();ctx.moveTo(p.x-s*.2,by-s*.85);ctx.lineTo(p.x-s*.3,by-s*.6-sw*s*.12);ctx.stroke();ctx.beginPath();ctx.moveTo(p.x+s*.2,by-s*.85);ctx.lineTo(p.x+s*.3,by-s*.6+sw*s*.12);ctx.stroke();
  ctx.fillStyle="#7a4f2a";rr(p.x-s*.15,by-s*.84,s*.3,s*.3,s*.05);ctx.fill();ctx.fillStyle="#e3b04b";ctx.fillRect(p.x-s*.15,by-s*.72,s*.3,s*.04);ctx.fillStyle="#5a3a1e";ctx.fillRect(p.x-s*.17,by-s*.88,s*.04,s*.2);ctx.fillRect(p.x+s*.13,by-s*.88,s*.04,s*.2);
  ctx.fillStyle=col;ctx.beginPath();ctx.arc(p.x,by-s*1.06,s*.16,0,7);ctx.fill();ctx.fillStyle="rgba(0,0,0,.15)";ctx.beginPath();ctx.arc(p.x,by-s*1.06,s*.16,.2,Math.PI-.2);ctx.fill();
  ctx.strokeStyle="#e3b04b";ctx.lineWidth=s*.05;ctx.beginPath();const tail=Math.sin(t*12)*s*.06;ctx.moveTo(p.x+s*.08,by-s*.95);ctx.quadraticCurveTo(p.x+s*.25,by-s*.9+tail,p.x+s*.34,by-s*.98-tail);ctx.stroke()}

 /* ---------- loop ---------- */
 function loop(ts){raf=requestAnimationFrame(loop);const dt=Math.min(.05,(ts-(last||ts))/1000);last=ts;if(state==="play"&&g)step(dt);else{idle+=dt}if(!g)idle+=0;draw()}

 /* ---------- input ---------- */
 let sx=0,sy=0,st=0,moved=false;
 function move(dir){if(state!=="play"||!g||g.cd>0)return;const n=Math.max(0,Math.min(2,g.lane+dir));if(n!==g.lane){g.lane=n;SFX.lane()}}
 function jump(){if(state!=="play"||!g||g.cd>0)return;if(g.y<.05){g.vy=11.5;SFX.jump()}}
 ov.addEventListener("touchstart",e=>{if(e.target.closest("button"))return;const p=e.touches[0];sx=p.clientX;sy=p.clientY;st=Date.now();moved=false},{passive:true});
 ov.addEventListener("touchmove",e=>{if(state==="play")e.preventDefault();if(moved||e.target.closest("button"))return;const p=e.touches[0],dx=p.clientX-sx,dy=p.clientY-sy;
  if(Math.max(Math.abs(dx),Math.abs(dy))>28){moved=true;if(Math.abs(dx)>Math.abs(dy))move(dx>0?1:-1);else if(dy<0)jump()}},{passive:false});
 ov.addEventListener("touchend",e=>{if(e.target.closest("button")||moved||state!=="play")return;if(Date.now()-st<300){const x=e.changedTouches[0].clientX;if(x<W*.36)move(-1);else if(x>W*.64)move(1);else jump()}});
 ov.addEventListener("mousedown",e=>{if(e.target.closest("button")||state!=="play")return;const x=e.clientX;if(x<W*.36)move(-1);else if(x>W*.64)move(1);else jump()});
 const key=e=>{if(state!=="play")return;const k=e.key;if(k==="ArrowLeft"||k==="a")move(-1);else if(k==="ArrowRight"||k==="d")move(1);else if(k==="ArrowUp"||k===" "||k==="w")jump();else return;e.preventDefault()};
 window.addEventListener("keydown",key);
 const vis=()=>{if(document.hidden&&state==="play")pause()};document.addEventListener("visibilitychange",vis);

 /* ---------- screens ---------- */
 const wallet=()=>o.wallet.get();
 function menuStart(){state="menu";hud.hidden=true;qEl.classList.add("hide");
  const best=S.get("lrBest",0),hearts=S.get("lrHeart",0);
  menu.innerHTML=`<div class="lr-card"><div class="lr-big" style="font-size:44px">🏮</div><h2>${L.title}</h2><p>${L.sub}</p>
   <div class="lr-row"><div class="lr-stat"><b style="display:flex;gap:6px;align-items:center;justify-content:center">${COIN}${wallet()}</b><span>${L.yourWallet}</span></div><div class="lr-stat"><b>${best}</b><span>${L.best}</span></div></div>
   ${hearts?`<p>❤ ${L.items} (${hearts})</p>`:""}
   <button class="lr-btn lr-go" id="lrS">${L.start}</button><button class="lr-btn lr-sec" id="lrShop">${L.shop}</button>
   <div class="lr-row"><button class="lr-btn lr-sec" style="min-width:0;font-size:15px;min-height:44px" id="lrSnd">🔊 ${L.sound}: ${SFX.on?L.on:L.off}</button><button class="lr-btn lr-sec" style="min-width:0;font-size:15px;min-height:44px" id="lrE">${L.close}</button></div></div>`;
  menu.querySelector("#lrS").onclick=()=>{try{SFX.ctx=SFX.ctx||new (window.AudioContext||window.webkitAudioContext)();SFX.ctx.resume()}catch(e){}menu.innerHTML="";newGame();state="play"};
  menu.querySelector("#lrShop").onclick=shop;menu.querySelector("#lrE").onclick=close;
  menu.querySelector("#lrSnd").onclick=()=>{SFX.on=!SFX.on;S.set("lrSound",SFX.on);menuStart()};
 }
 function pause(){if(state!=="play")return;state="pause";menu.innerHTML=`<div class="lr-card"><h2>${L.paused}</h2><button class="lr-btn lr-go" id="lrR">${L.resume}</button><button class="lr-btn lr-sec" id="lrQ2">${L.close}</button></div>`;
  menu.querySelector("#lrR").onclick=()=>{menu.innerHTML="";last=0;state="play"};menu.querySelector("#lrQ2").onclick=()=>{end(true)}}
 ov.querySelector("#lrP").onclick=pause;
 function end(quit){if(!g||g.over)return;g.over=true;state="over";qEl.classList.add("hide");
  const score=Math.round(g.dist)+g.right*50;let earned=g.coins,bonus=0;
  const day=new Date().toDateString();if(S.get("lrDay","")!==day&&(g.right>0||g.coins>=10)){bonus=20;S.set("lrDay",day)}
  earned+=bonus;if(earned>0)o.wallet.add(earned);const best=S.get("lrBest",0),nb=score>best;if(nb)S.set("lrBest",score);
  o.onEnd&&o.onEnd({coins:earned,score,right:g.right,wrong:g.wrong,miss:g.miss});
  hud.hidden=true;
  menu.innerHTML=`<div class="lr-card"><h2>${L.over}</h2><p>${L.earned}</p><div class="lr-big">${COIN.replace('class="lr-coin"','class="lr-coin" style="width:44px;height:44px"')}+${earned}</div>
   ${bonus?`<p>🎁 ${L.bonus} (+${bonus})</p>`:""}
   <div class="lr-row"><div class="lr-stat"><b>${score}${nb?" ⭐":""}</b><span>${L.dist}</span></div><div class="lr-stat"><b style="color:#9ee2b5">${g.right}</b><span>${L.right}</span></div><div class="lr-stat"><b style="color:#ffb3aa">${g.wrong}</b><span>${L.wrong}</span></div></div>
   ${g.miss.length?`<div class="lr-rev"><b>${L.review}</b>${g.miss.map(m=>`<div><span lang="ar" style="font-family:var(--lr-text)">${esc(m.p)}</span><br><span class="a" lang="ar">${esc(m.a)}</span></div>`).join("")}</div>`:""}
   <button class="lr-btn lr-go" id="lrA">${L.again}</button><div class="lr-row"><button class="lr-btn lr-sec" style="min-width:140px" id="lrShop">${L.shop}</button><button class="lr-btn lr-sec" style="min-width:140px" id="lrE">${L.close}</button></div></div>`;
  menu.querySelector("#lrA").onclick=()=>{menu.innerHTML="";newGame();state="play"};menu.querySelector("#lrShop").onclick=shop;menu.querySelector("#lrE").onclick=close;
 }
 function shop(){state="menu";hud.hidden=true;const own=S.get("lrOwn",["green"]),cur=S.get("lrCloak","green"),hasTrail=S.get("lrTrail",false),trailOn=S.get("lrTrailOn",false);
  const price=n=>`<small>${COIN}${n}</small>`;
  menu.innerHTML=`<div class="lr-card" style="justify-content:flex-start"><h2>${L.shop}</h2><div class="lr-pill" style="margin:4px 0">${COIN}<span>${wallet()}</span></div>
   <p style="font-weight:700;margin-top:10px">${L.cloak}</p><div class="lr-shop" style="grid-template-columns:repeat(3,1fr)">${CLOAKS.map(([k,c,pr])=>`<button class="lr-it ${cur===k?"sel":""}" data-c="${k}"><i style="background:${c}"></i>${L.colors[k]}${own.includes(k)?`<span style="font-size:12px;color:#cfc8f5">${cur===k?L.inUse:L.owned}</span>`:price(pr)}</button>`).join("")}</div>
   <div class="lr-shop"><button class="lr-it ${trailOn?"sel":""}" id="lrT"><span style="font-size:30px">✨</span><b>${L.trail}</b><span style="font-size:12px;color:#cfc8f5">${L.trailD}</span>${hasTrail?`<span style="font-size:12px">${trailOn?L.inUse:L.use}</span>`:price(TRAIL_PRICE)}</button>
   <button class="lr-it" id="lrHb"><span style="font-size:30px">❤</span><b>${L.heart}</b><span style="font-size:12px;color:#cfc8f5">${L.heartD}${S.get("lrHeart",0)?` · ${S.get("lrHeart",0)}`:""}</span>${price(HEART_PRICE)}</button></div>
   <button class="lr-btn lr-go" id="lrB">${L.start}</button><button class="lr-btn lr-sec" id="lrBk">${L.close}</button><div id="lrTo"></div></div>`;
  const spend=n=>{if(wallet()<n){const tt=menu.querySelector("#lrTo");tt.innerHTML=`<div class="lr-toast">${L.need}</div>`;setTimeout(()=>tt.innerHTML="",1600);SFX.wrong();return false}o.wallet.add(-n);SFX.coin();return true};
  menu.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>{const k=b.dataset.c,pr=CLOAKS.find(c=>c[0]===k)[2];if(!own.includes(k)){if(!spend(pr))return;own.push(k);S.set("lrOwn",own)}S.set("lrCloak",k);shop()});
  menu.querySelector("#lrT").onclick=()=>{if(!hasTrail){if(!spend(TRAIL_PRICE))return;S.set("lrTrail",true);S.set("lrTrailOn",true)}else S.set("lrTrailOn",!trailOn);shop()};
  menu.querySelector("#lrHb").onclick=()=>{if(!spend(HEART_PRICE))return;S.set("lrHeart",S.get("lrHeart",0)+1);shop()};
  menu.querySelector("#lrB").onclick=()=>{menu.innerHTML="";newGame();state="play"};menu.querySelector("#lrBk").onclick=menuStart;
 }
 function close(){cancelAnimationFrame(raf);window.removeEventListener("resize",size);window.removeEventListener("keydown",key);document.removeEventListener("visibilitychange",vis);ov.remove();document.documentElement.style.overflow="";o.onClose&&o.onClose()}
 menuStart();raf=requestAnimationFrame(loop);
 return{close};
}
window.LanternRun={play};
})();

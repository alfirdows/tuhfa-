/* Race of the Memorizers: a lively review game shared by every memorization site (own name, art and code).
   The site gives questions and a place to keep coins; everything stays on the device. */
(function(){
"use strict";
/* To add a language: copy the "en" block below, give it the language code (e.g. fr, ur), and translate the words. */
const TX={
 ar:{title:"سباق الحُفّاظ",sub:"اجرِ والتقط الكلمة التالية من المتن، كلمةً كلمة، وابتعد عن الكلمات الخطأ.",start:"ابدأ",shop:"المتجر",close:"إغلاق",again:"العب مرة أخرى",
  coins:"دنانير",best:"أفضل نتيجة",hint:"اسحب يمينًا أو يسارًا (أو المس جانب الشاشة) لتلتقط الكلمة التالية.",go:"انطلق!",
  great:["ممتاز!","أحسنت!","رائع!","بارك الله فيك!"],oops:"الجواب:",over:"انتهى السباق",right:"صحيح",wrong:"خطأ",dist:"النتيجة",
  review:"أخطاؤك: راجعها",earned:"جمعت",paused:"توقف مؤقت",resume:"تابع",sound:"الصوت",on:"يعمل",off:"مطفأ",owned:"عندك",use:"اختر",inUse:"مختار",buy:"اشترِ",
  need:"تحتاج دنانير أكثر",player:"شكل اللاعب",p_star:"نجمة",p_diamond:"ألماسة",p_gem:"جوهرة",p_gold:"ذهب",p_planet:"كوكب",board:"لوحة الأسبوع",learner:"متعلّم",boardD:"المتعلّمون على هذا الجهاز فقط",thisWeek:"هذا الأسبوع",lastWeek:"الأسبوع الماضي",noScores:"لا نتائج بعد. العب لتظهر هنا!",you:"أنت",share:"شارك نتيجتك",shareT:"هل تستطيع أن تتغلب على نتيجتي؟",shareScore:"نتيجتي",reached:"وصلت إلى",shareSaved:"حُفظت الصورة",goal:"الهدف",goalDone:"أحسنت! حققت الهدف",nextGoal:"الهدف التالي ›",missions:"مهام اليوم",m1:"حقّق هدفين",m2:"التقط ٣٠ كلمة صحيحة",m3:"اجمع ١٠٠ دينار",misDone:"أنجزت مهمة!",powers:"قوى",shield:"درع: يحميك مرة",x2:"دنانير مضاعفة",magnetD:"مغناطيس للدنانير",goalWords:"كلمة",jumpB:"قفزة!",jumpL:"قفزة",how5:"اقفز (اسحب للأعلى أو المس وسط الشاشة) لتلتقط الكلمة المعلّقة، أو لتقفز فوق الخطأ. الالتقاط بالقفز يعطيك +١٠.",get:"التقط",avoid:"تجنّب",wordsL:"الكلمة التالية",coinsL:"دنانير",jarsL:"جِرار وحواجز",wrongL:"كلمة خطأ",how:"كيف تلعب؟",how1:"المس يسار الشاشة أو يمينها لتتحرك، ووسطها لتقفز. أو اسحب بإصبعك.",how2:"التقط الكلمة التالية من المتن، والدنانير الذهبية.",how3:"ابتعد عن الكلمات الخطأ والجِرار والحواجز.",how4:"أكمل الهدف (الشريط في الأعلى) لتربح نجومًا ودنانير. كل ٥ كلمات صحيحة تنقلك إلى مكان جديد.",gotIt:"فهمت، ابدأ",level:"المستوى",places:"الأماكن",verseDone:"أحسنت! أكملت المقطع",bestToday:"أفضل نتيجة اليوم",doneAll:"أكملت المتن!",nextW:"الكلمة التالية",missedT:"الكلمة الصحيحة كانت",pace:"السرعة",steer:"اضغط على الجواب الصحيح",qWas:"بعد",ansIs:"الجواب الصحيح",shopD:"اشترِ بدنانيرك",closeD:"اخرج من اللعبة",slow:"بطيء",normal:"متوسط",fast:"سريع",bonus:"هدية أول سباق اليوم",magnet:"مغناطيس الدنانير!",heart:"قلب إضافي",heartD:"لسباق واحد",cloak:"اللون",trail:"أثر لامع",trailD:"بريق خلف اللاعب",
  colors:{green:"أخضر",blue:"أزرق",purple:"بنفسجي",red:"أحمر",gold:"ذهبي",night:"ليلي"},combo:"متتالية",lives:"قلوب",items:"قلب إضافي جاهز",yourWallet:"دنانيرك"},
 en:{title:"Race of the Memorizers",sub:"Run and pick up the next word of the text, one word at a time. Stay away from the wrong words.",start:"Start",shop:"Shop",close:"Close",again:"Play again",
  coins:"coins",best:"Best",hint:"Swipe left or right (or tap a side of the screen) to pick up the next word.",go:"Go!",
  great:["Excellent!","Well done!","Great!","Barak Allahu fik!"],oops:"Answer:",over:"Run over",right:"Right",wrong:"Wrong",dist:"Score",
  review:"Your mistakes to review",earned:"You collected",paused:"Paused",resume:"Resume",sound:"Sound",on:"On",off:"Off",owned:"Owned",use:"Use",inUse:"In use",buy:"Buy",
  need:"You need more coins",player:"Your player",p_star:"Star",p_diamond:"Diamond",p_gem:"Gem",p_gold:"Gold",p_planet:"Planet",board:"This week's board",learner:"Learner",boardD:"Learners on this device only",thisWeek:"This week",lastWeek:"Last week",noScores:"No scores yet. Play to appear here!",you:"you",share:"Share your score",shareT:"Can you beat my score?",shareScore:"My score",reached:"Reached",shareSaved:"Picture saved",goal:"Goal",goalDone:"Well done! Goal reached",nextGoal:"Next goal ›",missions:"Today's missions",m1:"Reach 2 goals",m2:"Pick up 30 right words",m3:"Collect 100 coins",misDone:"Mission done!",powers:"power-ups",shield:"Shield: protects you once",x2:"Double coins",magnetD:"Coin magnet",goalWords:"words",jumpB:"Jump!",jumpL:"jump",how5:"Jump (swipe up or tap the middle) to get a word up high, or to hop over a wrong one. Picking up while jumping gives +10.",get:"Pick up",avoid:"Avoid",wordsL:"next word",coinsL:"coins",jarsL:"jars & blocks",wrongL:"wrong word",how:"How to play",how1:"Tap the left or right side of the screen to move, and the middle to jump. Or swipe with your finger.",how2:"Pick up the next word of the text, and the gold coins.",how3:"Stay away from wrong words, jars and blocks.",how4:"Finish the goal (the bar at the top) to win stars and coins. Every 5 right words take you to a new place.",gotIt:"Got it, start",level:"Level",places:"Places",verseDone:"Well done! Part complete",bestToday:"Best today",doneAll:"You finished the text!",nextW:"next word",missedT:"The right word was",pace:"Speed",steer:"Tap the right answer",qWas:"After",ansIs:"Right answer",shopD:"Spend your coins",closeD:"Leave the game",slow:"Slow",normal:"Medium",fast:"Fast",bonus:"First run today gift",magnet:"Coin magnet!",heart:"Extra heart",heartD:"For one run",cloak:"Colour",trail:"Sparkle trail",trailD:"Sparkles behind your player",
  colors:{green:"Green",blue:"Blue",purple:"Purple",red:"Red",gold:"Gold",night:"Night"},combo:"in a row",lives:"hearts",items:"Extra heart ready",yourWallet:"Your coins"}
};
const CLOAKS=[["green","#3f7f55",0],["blue","#2f6db5",120],["purple","#7a4f9e",250],["red","#c0392b",400],["night","#1d2b4f",600],["gold","#c9962c",900]];
const TRAIL_PRICE=700,HEART_PRICE=60;
/* speeds: start, top, how fast it speeds up, wrong words per row, seconds between words */
const PACE={slow:[4.2,6,.01,1,3.6],normal:[6,10,.03,1,3],fast:[8.5,15,.06,2,2.6]};
const CSS=`
.lr-ov{position:fixed;inset:0;z-index:9999;background:#bfe6fb;color:#fff;font-family:var(--font,system-ui);touch-action:none;user-select:none;-webkit-user-select:none;overscroll-behavior:none}
.lr-ov canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.lr-hud{position:absolute;top:0;left:0;right:0;padding:calc(env(safe-area-inset-top) + 10px) 10px 0;display:flex;gap:6px;align-items:center;justify-content:space-between;pointer-events:none;direction:ltr}
.lr-hud>*{pointer-events:auto}
.lr-pill{white-space:nowrap;background:rgba(10,8,30,.55);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.18);border-radius:99px;padding:5px 10px;font-weight:700;font-size:15px;display:inline-flex;align-items:center;gap:6px;color:#fff}
.lr-ib{width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.2);background:rgba(10,8,30,.55);color:#fff;font-size:18px;display:grid;place-items:center;cursor:pointer;padding:0}
.lr-coin{width:20px;height:20px;flex:none}
.lr-q{position:absolute;left:14px;right:14px;top:calc(env(safe-area-inset-top) + 70px);text-align:center;transition:opacity .25s,transform .25s;z-index:2}
.lr-q.hide{pointer-events:none}
.lr-q.hide{opacity:0;transform:translateY(-12px)}
.lr-qp{display:inline-block;max-width:100%;background:rgba(255,253,245,.97);color:#1b1a14;border-radius:20px;padding:12px 18px;font-size:26px;line-height:1.6;box-shadow:0 6px 20px rgba(0,0,0,.35);font-family:var(--lr-text)}
.lr-qp small{display:block;font-family:var(--font,system-ui);font-size:14px;color:#6b5a2a;font-weight:700;line-height:1.3}
.lr-ch{display:flex;flex-direction:column;gap:10px;margin:14px auto 0;max-width:360px}
.lr-ch button{background:rgba(20,16,50,.92);border:2px solid #e3b04b;border-radius:18px;padding:10px 12px;font-family:var(--lr-name);font-size:28px;line-height:1.5;color:#fff7dc;cursor:pointer;min-height:64px;box-shadow:0 4px 0 #7a5a17}
.lr-ch button:active{transform:translateY(2px)}
.lr-ch button.ok{background:#2e7a4f;border-color:#9ee2b5}.lr-ch button.no{background:#9b2c22;border-color:#ffb3aa}
.lr-pop{position:absolute;left:50%;top:58%;transform:translate(-50%,-50%);font-size:34px;font-weight:800;color:#ffe08a;text-shadow:0 3px 0 #7a4a00,0 0 18px rgba(255,200,80,.7);pointer-events:none;animation:lrpop .9s ease-out forwards;white-space:nowrap}
.lr-pop.bad{color:#fff;text-shadow:0 3px 0 #7a1a10;font-size:22px;background:rgba(155,44,34,.92);padding:8px 16px;border-radius:16px;font-family:var(--lr-name)}
@keyframes lrpop{0%{opacity:0;transform:translate(-50%,-30%) scale(.6)}15%{opacity:1;transform:translate(-50%,-50%) scale(1.15)}30%{transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-110%) scale(1)}}
.lr-card{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:calc(env(safe-area-inset-top) + 16px) 18px calc(env(safe-area-inset-bottom) + 16px);text-align:center;background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(255,244,222,.82));overflow:auto;color:#2b2414}
.lr-card h2{font-size:32px;margin:6px 0 4px;color:#e3a52c;text-shadow:0 3px 0 #7a4a00,0 0 12px rgba(255,255,255,.8)}
.lr-card p{margin:4px 0;color:#3a2a10;font-size:15px;line-height:1.6;max-width:360px}
.lr-btn{min-width:200px;min-height:52px;border-radius:99px;border:0;font-weight:800;font-size:19px;margin:6px;cursor:pointer;font-family:inherit;padding:0 22px}
.lr-go{background:linear-gradient(#ffd56b,#e3a52c);color:#3a2600;box-shadow:0 5px 0 #9c6a10;animation:lrbeat 1.4s ease-in-out infinite}
.lr-go:active{transform:translateY(3px);box-shadow:0 2px 0 #9c6a10}
@keyframes lrbeat{50%{transform:scale(1.05)}}
.lr-sec{background:#fff;color:#3a2600;border:1px solid #ecd9ae!important;box-shadow:0 2px 6px rgba(0,0,0,.08)}
.lr-pc.on{background:#ffe08a!important;color:#3a2600!important}
.lr-strip{font-family:var(--lr-name)!important;font-size:24px!important;line-height:1.9!important;direction:rtl}
.lr-strip .miss{color:#b42318;text-decoration:underline wavy #e88}.lr-strip .last{color:#2e7a4f}.lr-strip .sep{color:#a87920}
.lr-strip .blank{color:#a87920;animation:lrbeat 1s ease-in-out infinite;display:inline-block}
.lr-big{font-size:48px;font-weight:800;color:#e3a52c;text-shadow:0 2px 0 #7a4a00;display:flex;align-items:center;gap:10px;justify-content:center}
.lr-row{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin:8px 0}
.lr-stat{background:rgba(255,255,255,.9);color:#2b2414;border-radius:14px;padding:8px 14px;min-width:84px}.lr-stat b{display:block;font-size:22px}.lr-stat span{font-size:12px;color:#7a6a4a}
.lr-rev{width:100%;max-width:380px;text-align:start;background:rgba(255,255,255,.92);color:#2b2414;border-radius:14px;padding:8px 12px;margin:8px 0}
.lr-rev div{padding:6px 0;border-bottom:1px solid #eee;font-size:15px;line-height:1.7}.lr-rev div:last-child{border:0}
.lr-rev .a{color:#2e7a4f;font-family:var(--lr-name);font-size:19px}
.lr-shop{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;max-width:380px;margin:10px 0}
.lr-it{background:#fff;border:1px solid #ecd9ae;border-radius:16px;padding:10px;display:flex;flex-direction:column;align-items:center;gap:6px;color:#2b2414;font-family:inherit;font-size:14px;cursor:pointer}
.lr-it.sel{border-color:#e3a52c;box-shadow:0 0 0 2px #e3a52c inset}
.lr-it i{width:46px;height:46px;border-radius:50%;display:block;border:3px solid rgba(255,255,255,.6)}
.lr-it small{color:#8a5a00;font-weight:700;display:inline-flex;gap:4px;align-items:center}
.lr-hint{position:absolute;left:24px;right:24px;top:58%;text-align:center;font-size:16px;font-weight:600;line-height:1.6;color:#fff;text-shadow:0 2px 6px rgba(0,0,0,.6);pointer-events:none;margin:0}
.lr-leg{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none;color:#222;font-size:12px}
.lr-top{position:absolute;left:10px;right:10px;top:calc(env(safe-area-inset-top) + 58px);display:flex;gap:8px}
.lr-top>div{flex:1;background:rgba(255,255,255,.9);border-radius:12px;padding:5px 9px;box-shadow:0 2px 8px rgba(0,0,0,.12)}
.lr-leg .g,.lr-leg .a{position:absolute;bottom:calc(env(safe-area-inset-bottom) + 8px);background:rgba(255,255,255,.92);border-radius:14px;padding:4px 8px;display:flex;align-items:center;gap:6px;box-shadow:0 2px 8px rgba(0,0,0,.15)}
.lr-leg .g,.lr-leg .a{bottom:auto;top:calc(env(safe-area-inset-top) + 112px);flex-direction:column;align-items:stretch;gap:1px;padding:3px 3px;width:38px;background:rgba(255,255,255,.78);box-shadow:0 1px 4px rgba(0,0,0,.1);border-radius:10px}.lr-leg .g{right:6px}.lr-leg .a{left:6px}.lr-leg span{justify-content:space-between}.lr-leg b{text-align:center}
.lr-leg b{font-size:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lr-leg .g b{color:#2e7a4f}.lr-leg .a b{color:#b42318}
.lr-leg span{display:flex;align-items:center;gap:2px}.lr-leg em{font-style:normal;font-weight:800;font-size:10px}.lr-leg svg{width:14px;height:11px}
.lr-goal{font-weight:800;font-size:12px;color:#2e7a4f;line-height:1.3;margin-bottom:6px}.lr-goal b{float:inline-end}.lr-goal i{display:block;height:8px;border-radius:6px;margin-top:4px;background:linear-gradient(90deg,#2e7a4f var(--p),#e3eee6 var(--p))}[dir=rtl] .lr-goal i,[dir=rtl] .lr-lvl i{transform:scaleX(-1)}
.lr-leg .pw{font-size:9px;font-weight:800;letter-spacing:-1px}
.lr-lvl{font-weight:700;font-size:11px;color:#5a3a00;line-height:1.3}.lr-lvl i{display:block;height:6px;border-radius:6px;margin-top:4px;background:linear-gradient(90deg,#e3b04b var(--p),#eee var(--p))}
.lr-lv{position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);background:linear-gradient(#fff7dc,#ffe08a);color:#5a3a00;border:4px solid #e3b04b;border-radius:24px;padding:14px 24px;text-align:center;font-size:26px;font-weight:800;box-shadow:0 10px 30px rgba(0,0,0,.25);animation:lrlv 2.6s ease forwards;white-space:nowrap}
.lr-lv small{display:block;font-size:15px;color:#a87920}
@keyframes lrlv{0%{opacity:0;transform:translate(-50%,-50%) scale(.5)}12%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}20%{transform:translate(-50%,-50%) scale(1)}85%{opacity:1}100%{opacity:0;transform:translate(-50%,-70%)}}
.lr-how{background:#fff;color:#222;border-radius:20px;padding:14px 16px;max-width:360px;text-align:start;margin:8px 0}
.lr-how div{display:flex;gap:10px;align-items:center;padding:7px 0;font-size:16px;line-height:1.5;border-bottom:1px solid #eee}.lr-how div:last-child{border:0}.lr-how svg{flex:none}
.lr-mis{background:rgba(255,255,255,.92);color:#2b2414;border-radius:16px;padding:10px 12px;width:100%;max-width:360px;text-align:start;margin:6px 0}
.lr-mis b{display:block;margin-bottom:4px}.lr-mis div{display:grid;grid-template-columns:1fr auto;gap:2px 8px;align-items:center;padding:5px 0;font-size:14px}.lr-mis small{display:inline-flex;gap:3px;align-items:center;font-weight:800;color:#8a5a00}.lr-mis small svg{width:16px;height:16px}
.lr-mis i{grid-column:1/-1;height:6px;border-radius:6px;background:linear-gradient(90deg,#e3b04b var(--p),#eee var(--p))}[dir=rtl] .lr-mis i{transform:scaleX(-1)}.lr-mis .dn span{color:#2e7a4f;font-weight:700}
.lr-toast{position:absolute;left:50%;bottom:calc(env(safe-area-inset-bottom) + 24px);transform:translateX(-50%);background:#fff;color:#222;border-radius:99px;padding:8px 16px;font-weight:700;font-size:14px}
`;
const ICO={word:`<svg viewBox="0 0 44 28" width="40" height="26"><rect x="2" y="2" width="40" height="24" rx="8" fill="#fff7e0" stroke="#e3b04b" stroke-width="3"/><path d="M14 14l6 6 10-11" stroke="#2e7a4f" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
 wrong:`<svg viewBox="0 0 44 28" width="40" height="26"><rect x="2" y="2" width="40" height="24" rx="8" fill="#9b2c22" stroke="#ffb3aa" stroke-width="3"/><path d="M16 8l12 12M28 8L16 20" stroke="#fff" stroke-width="4" stroke-linecap="round"/></svg>`,
 jar:`<svg viewBox="0 0 30 30" width="28" height="28"><rect x="10" y="3" width="10" height="5" fill="#8e3f20"/><ellipse cx="15" cy="18" rx="11" ry="10" fill="#b5562f"/><rect x="6" y="15" width="18" height="2" fill="#e8a080"/></svg>`,
 shield:`<svg viewBox="0 0 40 40" width="26" height="26"><circle cx="20" cy="20" r="17" fill="#2f6db5" stroke="#fff" stroke-width="3"/><path d="M20 9l9 4v6c0 6-4 10-9 12-5-2-9-6-9-12v-6z" fill="#fff"/></svg>`,
 x2:`<svg viewBox="0 0 40 40" width="26" height="26"><circle cx="20" cy="20" r="17" fill="#e3a52c" stroke="#fff" stroke-width="3"/><text x="20" y="26" text-anchor="middle" font-size="16" font-weight="900" fill="#fff" font-family="system-ui">×2</text></svg>`,
 magnet:`<svg viewBox="0 0 40 40" width="26" height="26"><circle cx="20" cy="20" r="17" fill="#9ee2b5"/><path d="M11 13v8a9 9 0 0 0 18 0v-8h-6v8a3 3 0 0 1-6 0v-8z" fill="#c0392b"/><rect x="11" y="10" width="6" height="4" fill="#eee"/><rect x="23" y="10" width="6" height="4" fill="#eee"/></svg>`,
 coin:`<svg viewBox="0 0 40 40" width="26" height="26"><circle cx="20" cy="20" r="18" fill="#e3b04b" stroke="#a87920" stroke-width="2"/><path d="M20 10l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#fff3cf"/></svg>`};
const PIC={star:`<svg viewBox="0 0 40 40" width="34" height="34"><path d="M20 3l4.5 9.6 10.5-1.6-6.2 8.6 6.2 8.6-10.5-1.6L20 37l-4.5-9.6-10.5 1.6 6.2-8.6L5 11l10.5 1.6z" fill="#f2cd6b" stroke="#b8892f" stroke-width="2"/></svg>`,
 diamond:`<svg viewBox="0 0 40 40" width="34" height="34"><path d="M4 15l7-8h18l7 8-16 19z" fill="#cdeeff" stroke="#7fb0cc" stroke-width="1.5"/><path d="M4 15h32M13 15l7 19 7-19M11 7l2 8M29 7l-2 8" stroke="#7fb0cc" stroke-width="1.2" fill="none"/></svg>`,
 gem:`<svg viewBox="0 0 40 40" width="34" height="34"><path d="M13 4h14l9 9v14l-9 9H13l-9-9V13z" fill="#3f7f55"/><path d="M15 11h10l4 4v10l-4 4H15l-4-4V15z" fill="#fff" opacity=".25"/><path d="M13 4l2 7M27 4l-2 7M36 13l-7 2M36 27l-7-2M27 36l-2-7M13 36l2-7M4 27l7-2M4 13l7 2" stroke="#fff" stroke-width="1.2" opacity=".6"/></svg>`,
 gold:`<svg viewBox="0 0 40 40" width="34" height="34"><path d="M3 30h34l-6-14H9z" fill="#e3b04b" stroke="#a87920" stroke-width="1.5"/><path d="M9 16h22l-3-6H12z" fill="#f2d27a" stroke="#a87920" stroke-width="1.5"/><path d="M14 29l6-12h3l-6 12z" fill="#fff" opacity=".45"/></svg>`,
 planet:`<svg viewBox="0 0 40 40" width="34" height="34"><circle cx="20" cy="20" r="10" fill="#7a6fb0"/><circle cx="17" cy="17" r="4" fill="#fff" opacity=".35"/><ellipse cx="20" cy="21" rx="17" ry="5" fill="none" stroke="#c9a24a" stroke-width="2.5" transform="rotate(-18 20 21)"/><circle cx="34" cy="9" r="2.2" fill="#f6f1e6" stroke="#bbb"/></svg>`};
const COIN=`<svg class="lr-coin" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#e3b04b" stroke="#a87920" stroke-width="2"/><circle cx="20" cy="20" r="13" fill="none" stroke="#fff3cf" stroke-width="1.5"/><path d="M20 10l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#fff3cf"/></svg>`;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const rnd=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.floor(Math.random()*a.length)];

/* tiny sound effects made in the browser: single short taps, never music or melodies, no files */
const SFX={ctx:null,on:true,
 tone(f,d,type="sine",v=.12,slide=0){if(!this.on)return;try{this.ctx=this.ctx||new (window.AudioContext||window.webkitAudioContext)();const c=this.ctx,o=c.createOscillator(),g=c.createGain(),t=c.currentTime;
  o.type=type;o.frequency.setValueAtTime(f,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(c.destination);o.start(t);o.stop(t+d)}catch(e){}},
 coin(){/* a soft water-drop "plip": a quick rising tone */this.tone(700,.09,"sine",.07,1500)},
 right(){this.tone(880,.12,"sine",.08)},
 wrong(){this.tone(200,.22,"sine",.08,120)},
 hit(){this.tone(150,.18,"sine",.09,80)},
 jump(){this.tone(400,.12,"sine",.05,700)},
 lane(){this.tone(520,.04,"sine",.03)}};

function play(o){
 /* any language: words come from TX (add a new language there, or pass o.text); missing words fall back to English */
 const base=TX[o.lang]||{},L=Object.assign({},TX.en,base,o.text||{});L.colors=Object.assign({},TX.en.colors,base.colors||{},(o.text||{}).colors||{});
 const AR=o.rtl!=null?o.rtl:["ar","ur","fa","ps","he","ku","sd","ug"].includes(String(o.lang).split("-")[0]),S=o.store;
 SFX.on=S.get("lrSnd",true);/* only the coin water-drop sounds (Tasnim asked); no music, no other effects */
 for(const k of["right","wrong","hit","jump","lane"])SFX[k]=()=>{};
 if(!document.getElementById("lr-css")){const st=document.createElement("style");st.id="lr-css";st.textContent=CSS;document.head.appendChild(st)}
 const ov=document.createElement("div");ov.className="lr-ov";ov.dir=AR?"rtl":"ltr";ov.style.setProperty("--lr-name",o.nameFont||"serif");ov.style.setProperty("--lr-text",o.textFont||"serif");
 ov.innerHTML=`<canvas></canvas><div class="lr-hud" hidden><span class="lr-pill" id="lrC">${COIN}<span>0</span></span><span class="lr-pill" id="lrH" style="color:#ff6b6b;letter-spacing:2px"></span><span class="lr-pill" id="lrX" hidden></span><span style="flex:1"></span><button class="lr-pill" id="lrV" style="cursor:pointer;font-size:14px"></button><button class="lr-ib" id="lrP" aria-label="${L.paused}">❚❚</button></div><div class="lr-q hide" id="lrQ"></div><div id="lrM"></div><p class="lr-hint" hidden>${L.hint}</p>
  <div class="lr-leg" hidden><div class="lr-top"><div class="lr-goal"></div><div class="lr-lvl"></div></div><div class="g"><b>✓ ${L.get}</b><span>${ICO.word}<em data-n="word">0</em></span><span>${ICO.coin}<em data-n="coin">0</em></span><span title="${L.magnetD}">${ICO.magnet}<em data-n="mg">0</em></span><span title="${L.shield}">${ICO.shield}<em data-n="sh">0</em></span><span title="${L.x2}">${ICO.x2}<em data-n="x2">0</em></span><span><span class="pw">⬆</span><em data-n="jmp">0</em></span></div><div class="a"><b>✗ ${L.avoid}</b><span>${ICO.wrong}<em data-n="wrong">0</em></span><span>${ICO.jar}<em data-n="bump">0</em></span></div></div>`;
 document.body.appendChild(ov);document.documentElement.style.overflow="hidden";
 const cv=ov.querySelector("canvas"),ctx=cv.getContext("2d"),hud=ov.querySelector(".lr-hud"),qEl=ov.querySelector("#lrQ"),menu=ov.querySelector("#lrM"),hintEl=ov.querySelector(".lr-hint"),legend=ov.querySelector(".lr-leg");
 let W=0,H=0,DPR=1;
 const size=()=>{DPR=Math.min(2,window.devicePixelRatio||1);W=ov.clientWidth;H=ov.clientHeight;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0)};
 size();window.addEventListener("resize",size);

 /* ---------- game state ---------- */
 const LANES=[-1,0,1],GAP=1.5,CAM=6.5,FAR=40;/* a flatter view, so words, coins and things stay big and readable from far away */
 let g=null,raf=0,last=0,state="menu",idle=0;
/* places: each level takes you somewhere new and brighter, drawn in the style of old Muslim lands */
 const THEMES=[/* 8 calm places of the old Muslim world: soft colours, never sand or dark */
  {ar:"حديقة النوافير",en:"Fountain garden",sky:["#8ec5e8","#cfe5f1","#f7f3ea"],far:["#b3cf9c","#9dbf86","#ffffff"],kind:"hills",dome:"#7fb3c8",ground:["#c7d9b0","#b1c99a"],path:"marble",road:["#f4efe4","#e0d6c2","#c9a24a"],edge:"#d9cdb4",side:"cypress",wall:"hedge",water:1,flowers:1},
  {ar:"السوق القديم",en:"Old market",sky:["#97c6e4","#d3e6f0","#f6f1e8"],far:["#efe8dc","#e2d8c7","#c9b79a"],kind:"city",dome:"#8fb7c4",ground:["#dcd8cf","#cbc5b9"],path:"flag",road:["#e7e2d8","#cdc5b5","#b9a27a"],edge:"#b8ad99",side:"shop",wall:"stall"},
  {ar:"حديقة القصر",en:"Palace garden",sky:["#9ccbe8","#d6eaf3","#f8f4ec"],far:["#d9b9a3","#c9a48c","#8fb08a"],kind:"palace",ground:["#c3d6ae","#aec697"],path:"runner",road:["#8c5a55","#e9d3a1","#c9a24a"],edge:"#d9cdb4",side:"cypress",wall:"hedge",water:1,flowers:1},
  {ar:"صحن الجامع الكبير",en:"Grand courtyard",sky:["#92c3e3","#d0e6f1","#fbf9f4"],far:["#ffffff","#ebeef1","#d8c08a"],kind:"masjid",dome:"#86b5c6",ground:["#eef0f1","#dfe3e6"],path:"marble",road:["#fbfaf6","#e3e1da","#c9a24a"],edge:"#c9c4b8",side:"arcade",wall:"basin"},
  {ar:"جسر النهر",en:"River bridge",sky:["#8cc2e6","#cde5f2","#f4f6f1"],far:["#a7c79a","#8fb383","#ffffff"],kind:"hills",dome:"#7fb3c8",ground:["#bcd3a8","#a6c292"],path:"bridge",road:["#c8a982","#a3825d","#8a6a48"],edge:"#7fb6cf",side:"cypress",wall:"crates",water:2},
  {ar:"بيت الحكمة",en:"House of Wisdom",sky:["#a2c9e2","#d9e8f0","#f7f2ea"],far:["#ece4d6","#ddd2c0","#bfa98a"],kind:"city",dome:"#9bb8c9",ground:["#e0dcd3","#cfc9bd"],path:"runner",road:["#4d5f78","#e6cf98","#c9a24a"],edge:"#bdb3a0",side:"arcade",wall:"books"},
  {ar:"قصر الأندلس",en:"Andalus palace",sky:["#9fcbe6","#d8eaf2","#faf5ee"],far:["#e3c9b4","#d4b39b","#93b28d"],kind:"palace",ground:["#cbdcb6","#b4cb9f"],path:"flag",road:["#efe7da","#d6c8b2","#b88a6a"],edge:"#c7b39a",side:"cypress",wall:"basin",water:1,flowers:1},
  {ar:"صحن الغروب",en:"Sunset courtyard",sky:["#b8b4dc","#e6cdd9","#fbe9dc"],far:["#fbf4ee","#efe1dc","#d8b98a"],kind:"masjid",dome:"#a99bc8",ground:["#ece6e4","#ddd5d2"],path:"marble",road:["#faf6f1","#e6dad2","#c9a24a"],edge:"#cdbfb6",side:"arcade",wall:"basin"}];
 const clouds=Array.from({length:5},()=>({x:Math.random(),y:rnd(.05,.2),w:rnd(.12,.22),v:rnd(.004,.01)}));
 const FARX=Array.from({length:26},(_,i)=>({x:i/25+rnd(-.015,.015),w:rnd(.05,.09),h:rnd(.35,1),k:Math.random()}));
 const theme=()=>THEMES[Math.min(THEMES.length-1,g?g.lv:S.get("lrPlace",0))];/* 8 levels, one place each */
 const cloak=()=>(CLOAKS.find(c=>c[0]===S.get("lrCloak","green"))||CLOAKS[0])[1];

 function newGame(){
  const extra=S.get("lrHeart",0)>0;if(extra)S.set("lrHeart",S.get("lrHeart",0)-1);
  const pc=PACE[S.get("lrPace","slow")]||PACE.slow;
  const gn=S.get("lrGoalN",0),R=o.round(gn)||{words:[]};
  g={pc,seq:R.words,decoys:R.decoys||[],got:R.words.map((_,k)=>k?0:1),rowK:1,rowZ:pc[0]*4.5,t:0,dist:0,speed:pc[0],lane:1,x:0,y:0,vy:0,hearts:3+(extra?1:0),inv:0,coins:0,combo:0,right:0,wrong:0,miss:[],objs:[],next:14,qAt:pc[0]*3,gate:null,shake:0,magnet:0,parts:[],run:0,trail:S.get("lrTrailOn",false)&&S.get("lrTrail",false),over:false,cd:3.2,lv:0,round:0,gn,goalN:R.words.length-1,goalLabel:R.title||"",shield:false,dbl:0,cnt:{coin:0,word:0,bump:0,wrong:0,pw:0,jmp:0,mg:0,sh:0,x2:0},fl:[]};
  g.sp=()=>g.pc[0]*g.pc[4]+3;g.rowZ0=()=>g.pc[0]*4.5;
  idle=0;hud.hidden=false;legend.hidden=false;updHud();strip();
  if(window.__lrTest){window.__lrNext=()=>{const r=g.got.indexOf(0),o2=g.objs.find(x=>x.k==="word"&&x.ok&&x.row===r);if(o2&&o2.h&&o2.z-g.dist<3.2&&o2.z-g.dist>1.5&&g.y<.05)g.vy=11;return o2?o2.ln:null};window.__lrLv=()=>g.lv;window.__lrSet=(lv,pl)=>{g.lv=lv;S.set("lrPlayer",pl)}}
 }
 function updHud(){const pk=S.get("lrPace","slow");ov.querySelector("#lrV").textContent=`${{slow:"🐢",normal:"🚶",fast:"⚡"}[pk]||""} ${L[pk]||L.slow}`;ov.querySelector("#lrV").setAttribute("aria-label",L.pace);ov.querySelector("#lrC span").textContent=g.coins;ov.querySelector("#lrH").textContent="❤".repeat(Math.max(0,g.hearts))||"–";
  const x=ov.querySelector("#lrX");x.hidden=g.combo<2;x.textContent=`×${Math.min(5,g.combo)}`;
  const c=g.cnt;legend.querySelector("[data-n=word]").textContent=c.word;legend.querySelector("[data-n=coin]").textContent=c.coin;legend.querySelector("[data-n=bump]").textContent=c.bump;legend.querySelector("[data-n=wrong]").textContent=c.wrong;legend.querySelector("[data-n=mg]").textContent=c.mg;legend.querySelector("[data-n=sh]").textContent=c.sh;legend.querySelector("[data-n=x2]").textContent=c.x2;legend.querySelector("[data-n=jmp]").textContent=c.jmp;const gd=g.got.filter(x=>x===1).length-1;legend.querySelector(".lr-goal").innerHTML=`🎯 ${L.goal} <b>${gd}/${g.goalN}</b><i style="--p:${g.goalN?gd/g.goalN*100:0}%"></i>`;
  const th=theme(),pr=g.right%5;legend.querySelector(".lr-lvl").innerHTML=`⭐ ${L.level} ${Math.min(g.lv+1,THEMES.length)}/${THEMES.length} · ${AR?th.ar:th.en}<i style="--p:${pr/5*100}%"></i>`}

 /* track builder: coin lines, things to jump over, and blocked lanes */
 function build(){
  while(g.next<g.dist+FAR+20){
   const z=g.next;
   if(g.rowK<=g.seq.length&&Math.abs(((z-g.rowZ0())%g.sp()+g.sp())%g.sp())<4){g.next=z+4;continue}
   const r=(z<40||g.pc[0]<5)?Math.random()*.38:Math.random(),free=Math.floor(Math.random()*3);
   if(r<.38){const ln=Math.floor(Math.random()*3);const arc=Math.random()<.3;for(let k=0;k<7;k++)g.objs.push({k:"coin",ln,z:z+k*.85,h:arc?Math.sin(k/5*Math.PI)*1.4:0})}
   else if(r<.7){const ln=[0,1,2].filter(x=>x!==free);const one=pick(ln);g.objs.push({k:"low",ln:one,z});if(Math.random()<.5)for(let k=0;k<5;k++)g.objs.push({k:"coin",ln:one,z:z-1.6+k*.8,h:Math.sin(k/3*Math.PI)*1.6+.2})}
   else if(r<.9){const blocks=[0,1,2].filter(x=>x!==free);const n=Math.random()<.5?1:2;blocks.slice(0,n).forEach(b=>g.objs.push({k:"wall",ln:b,z}));for(let k=0;k<5;k++)g.objs.push({k:"coin",ln:free,z:z-2+k*.85,h:0})}
   else{}
   g.next=z+rnd(7,11)*(g.pc[0]<5?1.4:1);
  }
  /* rows of words: one is the next word of the text, the others are wrong words to stay away from */
  while(g.rowK<g.seq.length&&g.rowZ<g.dist+FAR){if(g.got[g.rowK]===1){g.rowK++;continue}const k=g.rowK,right=g.seq[k].w,two=g.pc[3]<2,ln=two?(Math.random()<.5?0:2):Math.floor(Math.random()*3),others=two?[2-ln]:[0,1,2].filter(x=>x!==ln);/* two words: one far left, one far right */
   const pool=g.decoys.filter(x=>x!==right&&!g.seq.slice(Math.max(0,k-1),k+2).some(y=>y.w===x));
   g.objs.push({k:"word",ln,z:g.rowZ,w:right,ok:true,row:k,h:(k>2&&Math.random()<.3)?1.6:0});
   shuffle(others).slice(0,g.pc[3]).forEach(o2=>g.objs.push({k:"word",ln:o2,z:g.rowZ,w:pool.length?pick(pool):"…",ok:false,row:k}));
   if(k%3===0){const pk=["mag","shield","x2"][(k/3)%3|0];g.objs.push({k:pk,ln:Math.floor(Math.random()*3),z:g.rowZ+g.sp()/2,h:.6})}
   g.rowK++;g.rowZ+=g.sp()}
 }
 const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
 /* the text built so far, in one strip at the top: words you picked up, missed words in red, and a blank for the next one */
 /* no box at the top: the word you are on glows just above the lantern, so the eyes stay in one spot */
 function strip(){if(!g)return;qEl.classList.add("hide");const n=g.got.findIndex(x=>x===0),upto=n<0?g.seq.length:n;g.cur=g.seq[upto-1]?g.seq[upto-1].w:""}
 function resolve(k,ok,how){if(g.got[k])return;g.got[k]=ok?1:-1;g.objs.forEach(ob=>{if(ob.k==="word"&&ob.row===k)ob.done=ob.ok?(ok?"got":"show"):(how===ob?"bad":"gone")});
  if(ok){g.right++;g.cnt.word++;g.combo++;mis("w",1);const add=5*Math.min(5,g.combo)*(g.dbl>0?2:1);g.coins+=add;floater(`+${add}`,"#ffd56b");SFX.right();const p=P(g.x,0,1);burst(p.x,p.y,"#9ee2b5",22);burst(p.x,p.y,"#ffd56b",12);g.flash={w:g.seq[k].w,t:.7,ok:true};if(g.combo>1&&g.combo%3===0)pop(`${pick(L.great)} +${add}`)}
  else{g.wrong++;if(how)g.cnt.wrong++;g.combo=0;g.miss.push({p:g.seq.slice(Math.max(0,k-4),k).map(x=>(x.sep?x.sep+" ":"")+x.w).join(" ")+" ـــ",a:g.seq[k].w});g.flash={w:g.seq[k].w,t:1.6};if(how)hurt(true);else SFX.wrong()}
  if(ok&&g.right%5===0)levelUp();
  if(!g.got.includes(0)){g.won=true;confetti(90);setTimeout(()=>end(false,true),1200)}
  updHud();strip()}
 function levelUp(){g.lv++;const th=theme();S.set("lrPlace",Math.max(S.get("lrPlace",0),Math.min(THEMES.length-1,g.lv)));SFX.right();setTimeout(()=>SFX.right(),160);confetti(70);
  const d=document.createElement("div");d.className="lr-lv";d.innerHTML=`<small>⭐ ${L.level} ${g.lv+1} ⭐</small>${AR?th.ar:th.en}`;ov.appendChild(d);setTimeout(()=>d.remove(),2600)}
 function floater(txt,col){if(!g)return;const p=P(g.x,0,1.6);g.fl.push({x:p.x,y:p.y,txt,col,life:1.1})}
 function confetti(n){const cols=["#ffd56b","#9ee2b5","#ff8fa3","#7cc6ff","#fff"];for(let i=0;i<n;i++)g.parts.push({x:rnd(0,W),y:rnd(-40,0),vx:rnd(-40,40),vy:rnd(60,220),life:rnd(1.2,2.2),col:pick(cols),r:rnd(3,6),c:1,rot:rnd(0,6)})}
 function pop(txt,bad){const d=document.createElement("div");d.className="lr-pop"+(bad?" bad":"");d.textContent=txt;ov.appendChild(d);setTimeout(()=>d.remove(),bad?1900:900);if(bad)d.style.animationDuration="1.9s"}
 function burst(x,y,col,n=14){for(let i=0;i<n;i++)g.parts.push({x,y,vx:rnd(-160,160),vy:rnd(-260,-60),life:rnd(.4,.8),col,r:rnd(2,4.5)})}

 /* ---------- projection ---------- */
 const HZ=()=>H*.3,BOT=()=>H*.76,U0=()=>Math.min(W*.215,H*.14);
 const sc=d=>CAM/(Math.max(-5,d)+CAM);
 const P=(X,d,h=0)=>{const s=sc(d),u=U0();return{x:W/2+X*GAP*u*s,y:HZ()+(BOT()-HZ())*s-h*u*s,s:u*s}};

 /* ---------- update ---------- */
 function step(dt){
  if(g.cd>0){g.cd-=dt;return}
  g.t+=dt;g.speed=Math.min(g.pc[1],g.speed+g.pc[2]*dt);const dd=g.speed*dt;g.dist+=dd;g.run+=dd;
  g.x+=(LANES[g.lane]-g.x)*Math.min(1,dt*14);
  if(g.y>0||g.vy>0){g.vy-=22*dt;g.y=Math.max(0,g.y+g.vy*dt);if(g.y===0)g.vy=0}
  g.inv=Math.max(0,g.inv-dt);if(g.flash&&(g.flash.t-=dt)<=0)g.flash=null;g.shake=Math.max(0,g.shake-dt);g.magnet=Math.max(0,g.magnet-dt);g.dbl=Math.max(0,g.dbl-dt);
  build();
  const near=Math.round(g.x+1);
  for(const ob of g.objs){const d=ob.z-g.dist;
   if(ob.k==="coin"&&g.magnet>0&&d<6&&!ob.got){ob.ln=near}
   if(ob.k==="word"&&ob.ok&&d<-0.6&&!g.got[ob.row])resolve(ob.row,false,null);
   if(ob.got||ob.hit||d>(ob.k==="word"?0.7:0.35)||d<-1)continue;
   if(ob.ln!==near)continue;
   if(ob.k==="coin"){if(true){/* coins count while jumping too */ob.got=true;const cv=g.dbl>0?2:1;g.coins+=cv;g.cnt.coin+=cv;SFX.coin();const p=P(ob.ln-1,0,ob.h+.5);burst(p.x,p.y,"#ffd56b",5);updHud()}}
   else if(ob.k==="mag"){ob.got=true;g.cnt.mg++;g.magnet=8;floater("🧲","#fff");SFX.right();updHud()}
   else if(ob.k==="shield"){ob.got=true;g.cnt.sh++;g.shield=true;floater("🛡","#fff");updHud()}
   else if(ob.k==="x2"){ob.got=true;g.cnt.x2++;g.dbl=10;floater("×2","#ffd56b");updHud()}
   else if(ob.k==="word"){if(!ob.done&&!g.got[ob.row]){const up=ob.h>0;if(up&&g.y<.5)continue;if(!up&&!ob.ok&&g.y>1)continue;/* hopped over a wrong word */
    if(ob.ok&&g.y>.4){g.cnt.jmp++;g.coins+=10;floater(`${L.jumpB} +10`,"#9ee2b5")}ob.hit=true;resolve(ob.row,ob.ok,ob.ok?null:ob)}}
   else if(g.inv<=0&&((ob.k==="low"&&g.y<.75)||ob.k==="wall")){ob.hit=true;hurt()}}
  g.objs=g.objs.filter(ob=>ob.z-g.dist>-3);

  for(const p of g.parts){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=(p.c?20:500)*dt;p.life-=dt;if(p.c)p.rot+=dt*6}for(const f of g.fl){f.y-=60*dt;f.life-=dt}g.fl=g.fl.filter(f=>f.life>0);g.parts=g.parts.filter(p=>p.life>0);
  if(Math.random()<.35){const p=P(g.x,0,g.y+.5);g.parts.push({x:p.x+rnd(-6,6),y:p.y,vx:rnd(-10,10),vy:rnd(30,70),life:.45,col:"rgba(255,220,120,.9)",r:rnd(1.5,2.5)})}
  if(g.trail&&Math.random()<.6){const p=P(g.x,0,g.y+.4);g.parts.push({x:p.x+rnd(-8,8),y:p.y,vx:rnd(-20,20),vy:rnd(20,60),life:.5,col:pick(["#ffe08a","#fff","#9ee2b5"]),r:rnd(1.5,3)})}
 }
 function hurt(fromGate){if(!fromGate)g.cnt.bump++;if(g.shield){g.shield=false;g.inv=1;burst(P(g.x,0,1).x,P(g.x,0,1).y,"#7cc6ff",24);return}g.hearts--;g.inv=1.4;g.shake=.35;if(!fromGate){SFX.hit();g.combo=0}updHud();if(g.hearts<=0)setTimeout(end,fromGate?900:350)}

 /* ---------- draw ---------- */
function draw(){
  const hz=HZ(),t=performance.now()/1000,th=theme();
  ctx.save();if(g&&g.shake>0)ctx.translate(rnd(-6,6)*g.shake*3,rnd(-4,4)*g.shake*3);
  let gr=ctx.createLinearGradient(0,0,0,hz);gr.addColorStop(0,th.sky[0]);gr.addColorStop(.6,th.sky[1]);gr.addColorStop(1,th.sky[2]);ctx.fillStyle=gr;ctx.fillRect(-10,-10,W+20,hz+12);
  /* sun with soft rays */
  const sx=W*.8,sy=hz*.3;gr=ctx.createRadialGradient(sx,sy,0,sx,sy,W*.35);gr.addColorStop(0,"rgba(255,248,220,.95)");gr.addColorStop(.12,"rgba(255,240,190,.8)");gr.addColorStop(1,"rgba(255,240,190,0)");ctx.fillStyle=gr;ctx.fillRect(0,0,W,hz);
  ctx.fillStyle="#fff6d5";ctx.beginPath();ctx.arc(sx,sy,W*.055,0,7);ctx.fill();
  ctx.fillStyle="rgba(255,255,255,.85)";for(const c of clouds){const x=((c.x+t*c.v)%1.3-.15)*W,y=c.y*H,w=c.w*W;ctx.beginPath();ctx.ellipse(x,y,w*.5,w*.16,0,0,7);ctx.ellipse(x-w*.2,y-w*.06,w*.22,w*.15,0,0,7);ctx.ellipse(x+w*.15,y-w*.09,w*.25,w*.17,0,0,7);ctx.fill()}
  farScene(th,hz,t);
  gr=ctx.createLinearGradient(0,hz,0,H);gr.addColorStop(0,th.ground[1]);gr.addColorStop(1,th.ground[0]);ctx.fillStyle=gr;ctx.fillRect(-10,hz,W+20,H-hz+10);
  const dist=g?g.dist:t*5,quad=(a,b,c,e,col)=>{ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.lineTo(c.x,c.y);ctx.lineTo(e.x,e.y);ctx.closePath();ctx.fill()};
  if(th.water)for(const sd of[-1,1]){const ww=th.water>1?2.2:.4;quad(P(sd*2.2,FAR),P(sd*(2.2+ww),FAR),P(sd*(2.2+ww),-2.6),P(sd*2.2,-2.6),"#8cc4dc");
   ctx.strokeStyle="rgba(255,255,255,.7)";for(let k=Math.floor(dist/2.5)*2.5;k<dist+FAR;k+=2.5){const d0=k-dist+((t*1.5)%2.5);if(d0<-2.5)continue;const a=P(sd*2.32,d0),b=P(sd*2.32,d0+.6);ctx.lineWidth=Math.max(1,a.s*.03);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}
  drawPath(th,dist,quad);
  const items=[];
  for(let k=Math.floor(dist/6)*6+6;k<dist+FAR;k+=6)for(const sd of[-1,1])items.push({k:"side",s:sd,d:k-dist,n:Math.round(k/6)});
  if(g){for(const ob of g.objs)if(!ob.got&&!(ob.hit&&ob.k!=="wall"&&ob.k!=="word"))items.push({k:ob.k,ob,d:ob.z-g.dist})}
  items.sort((p,q)=>q.d-p.d);
  for(const it of items){if(it.d>FAR||it.d<-2.6)continue;
   if(it.k==="side")drawSide(th,it.s,it.d,it.n,t);
   else if(it.k==="word")drawWord(it.ob,it.d);
   else drawObj(it.ob,it.d,t,th)}
  if(g&&g.combo>=3){ctx.strokeStyle="rgba(255,255,255,.35)";ctx.lineWidth=2;for(let i=0;i<10;i++){const a=(i/10)*Math.PI*2+t,r0=W*.45,r1=W*(.55+.1*Math.sin(t*9+i));const cx=W/2,cy=H*.55;ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*r0,cy+Math.sin(a)*r0*.8);ctx.lineTo(cx+Math.cos(a)*r1,cy+Math.sin(a)*r1*.8);ctx.stroke()}}
  if(g)drawRunner(t);if(g&&g.cd<=0)drawBubble(t);
  if(g)for(const p of g.parts){ctx.globalAlpha=Math.max(0,Math.min(1,p.life*1.6));ctx.fillStyle=p.col;if(p.c){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillRect(-p.r,-p.r/2,p.r*2,p.r);ctx.restore()}else{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fill()}}ctx.globalAlpha=1;
  if(g)for(const f of g.fl){ctx.globalAlpha=Math.min(1,f.life*1.5);ctx.font="800 30px system-ui";ctx.textAlign="center";ctx.lineWidth=5;ctx.strokeStyle="rgba(90,55,0,.8)";ctx.strokeText(f.txt,f.x,f.y);ctx.fillStyle=f.col;ctx.fillText(f.txt,f.x,f.y)}ctx.globalAlpha=1;
  if(g&&g.magnet>0){ctx.fillStyle="rgba(255,224,138,.12)";ctx.fillRect(0,0,W,H)}
  if(g&&g.inv>0&&g.hearts>0){ctx.fillStyle=`rgba(200,40,30,${g.inv>1.1?.22:0})`;ctx.fillRect(0,0,W,H)}
  ctx.restore();
  if(g&&g.cd>0&&state==="play"){const n=Math.ceil(g.cd-.2);ctx.font=`800 ${n>0?96:64}px system-ui`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.lineWidth=8;ctx.strokeStyle="#7a4a00";ctx.strokeText(n>0?String(n):L.go,W/2,H*.42);ctx.fillStyle="#ffd56b";ctx.fillText(n>0?String(n):L.go,W/2,H*.42)}
  hintEl.hidden=!(g&&g.cd>0&&state==="play");
 }
 function drawPath(th,dist,quad){const R=th.road,ps=th.path,near=-2.6;
  const ln=(x0,d0,x1,d1,col,w)=>{const a=P(x0,d0),b=P(x1,d1);if(a.s<1&&b.s<1)return;ctx.strokeStyle=col;ctx.lineWidth=Math.max(.6,Math.max(a.s,b.s)*w);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()};
  const rows=(step,f)=>{for(let k=Math.floor(dist/step)*step;k<dist+FAR;k+=step){const d=k-dist;if(d<near-step)continue;f(Math.max(near,d),Math.round(k/step))}};
  quad(P(-2.2,FAR),P(2.2,FAR),P(2.2,near),P(-2.2,near),th.edge);
  quad(P(-2.05,FAR),P(2.05,FAR),P(2.05,near),P(-2.05,near),R[0]);
  if(ps==="marble"){/* polished marble with thin joints and a gold star inlay in each lane */
   rows(2,(d)=>{ln(-2.05,d,2.05,d,R[1],.02);for(const l of[-1,0,1]){const c=P(l,d+1);if(c.s>3)star8o(c.x,c.y,c.s*.3,R[2],c.s*.022)}});
   for(const x of[-.5,.5])ln(x,FAR,x,near,R[1],.012);
   for(const sd of[-1,1])ln(sd*1.95,FAR,sd*1.95,near,R[2],.02)}
  else if(ps==="flag"){/* soft stone flags laid like bricks */
   rows(1.4,(d,n)=>{ln(-2.05,d,2.05,d,R[1],.03);const off=n%2?.5:0;for(let x=-1.5+off;x<2;x+=1)if(Math.abs(x)<2.05)ln(x,d,x,d+1.4,R[1],.025)});
   for(const sd of[-1,1])ln(sd*1.98,FAR,sd*1.98,near,R[2],.03)}
  else if(ps==="runner"){/* a long woven runner with a gold border and diamond medallions */
   for(const sd of[-1,1]){quad(P(sd*1.72,FAR),P(sd*1.86,FAR),P(sd*1.86,near),P(sd*1.72,near),R[2]);ln(sd*1.62,FAR,sd*1.62,near,R[1],.012)}
   rows(3,(d)=>{for(const l of[-1,0,1]){const a=P(l,d+1),b=P(l+.3,d+1.5),c=P(l,d+2),e=P(l-.3,d+1.5);if(a.s<3)continue;ctx.strokeStyle=R[1];ctx.lineWidth=Math.max(1,a.s*.028);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.lineTo(c.x,c.y);ctx.lineTo(e.x,e.y);ctx.closePath();ctx.stroke();const m=P(l,d+1.5);ctx.fillStyle=R[2];ctx.beginPath();ctx.arc(m.x,m.y,Math.max(1,m.s*.05),0,7);ctx.fill()}})}
  else if(ps==="bridge"){/* wooden planks over the river, with railings */
   rows(.8,(d)=>ln(-2.05,d,2.05,d,R[1],.02));
   for(const sd of[-1,1]){rows(3,(d)=>{const b=P(sd*2.12,d),tp=P(sd*2.12,d,.6);if(b.s<2)return;ctx.strokeStyle=R[2];ctx.lineWidth=Math.max(1,b.s*.07);ctx.beginPath();ctx.moveTo(b.x,b.y);ctx.lineTo(tp.x,tp.y);ctx.stroke()});
    const a=P(sd*2.12,FAR,.6),b=P(sd*2.12,near,.6);ctx.strokeStyle=R[2];ctx.lineWidth=Math.max(2,b.s*.05);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}
 }
 function star8o(x,y,r,col,lw){ctx.strokeStyle=col;ctx.lineWidth=Math.max(.8,lw);ctx.beginPath();for(let i=0;i<16;i++){const a=i*Math.PI/8,rr=i%2?r*.6:r;ctx.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr*.42)}ctx.closePath();ctx.stroke()}
 function star8(x,y,r,col){ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<16;i++){const a=i*Math.PI/8,rr=i%2?r*.55:r;ctx.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr*.45)}ctx.fill()}
 function dome(x,y,r,col,fin){ctx.fillStyle=col;ctx.beginPath();ctx.moveTo(x-r,y);ctx.bezierCurveTo(x-r,y-r*1.1,x-r*.2,y-r*1.25,x,y-r*1.45);ctx.bezierCurveTo(x+r*.2,y-r*1.25,x+r,y-r*1.1,x+r,y);ctx.fill();
  ctx.fillStyle="rgba(255,255,255,.25)";ctx.beginPath();ctx.ellipse(x-r*.35,y-r*.6,r*.18,r*.45,-.3,0,7);ctx.fill();
  if(fin){ctx.strokeStyle=fin;ctx.lineWidth=Math.max(1,r*.06);ctx.beginPath();ctx.moveTo(x,y-r*1.45);ctx.lineTo(x,y-r*1.85);ctx.stroke();ctx.fillStyle=fin;ctx.beginPath();ctx.arc(x,y-r*1.7,r*.08,0,7);ctx.fill()}}
 function minaret(x,y,h,w,col,cap){ctx.fillStyle=col;ctx.fillRect(x-w/2,y-h,w,h);ctx.fillStyle="rgba(0,0,0,.08)";ctx.fillRect(x-w/2,y-h,w*.35,h);
  ctx.fillStyle=col;ctx.fillRect(x-w*.85,y-h*.72,w*1.7,h*.04);ctx.fillRect(x-w*.8,y-h*.42,w*1.6,h*.035);
  ctx.fillStyle=cap;ctx.beginPath();ctx.moveTo(x-w*.6,y-h);ctx.lineTo(x,y-h-w*3.2);ctx.lineTo(x+w*.6,y-h);ctx.fill()}
 function farScene(th,hz,t){const f=th.far;
  if(th.kind==="hills"){for(let L2=0;L2<2;L2++){ctx.fillStyle=f[L2];ctx.beginPath();ctx.moveTo(0,hz);for(let x=0;x<=W;x+=8)ctx.lineTo(x,hz-H*(.05-L2*.02)-Math.sin(x/W*Math.PI*(2+L2)+L2)*H*.025);ctx.lineTo(W,hz);ctx.fill()}
   for(const b of FARX){if(b.k<.35)continue;const x=b.x*W,w=b.w*W*.8,h=H*(.02+b.h*.035),by=hz-H*.03;ctx.fillStyle="#fff";ctx.fillRect(x-w/2,by-h,w,h);ctx.fillStyle="rgba(34,184,201,.35)";ctx.fillRect(x-w*.1,by-h*.6,w*.2,h*.3);
    if(b.k>.75)dome(x,by-h,w*.42,th.dome,"#f2c14e");else if(b.k<.45)minaret(x,by-h,H*.06,w*.18,"#fff",th.dome)}
   for(const tx of[.06,.3,.55,.82,.95]){ctx.fillStyle="#2f8f46";ctx.beginPath();ctx.ellipse(tx*W,hz-H*.025,W*.012,H*.03,0,0,7);ctx.fill()}return}
  if(th.kind==="dunes"){for(let L2=0;L2<2;L2++){ctx.fillStyle=f[L2];ctx.beginPath();ctx.moveTo(0,hz);for(let x=0;x<=W;x+=8)ctx.lineTo(x,hz-H*(.035+L2*-.012)-Math.sin(x/W*Math.PI*(2+L2)+L2*2)*H*.025);ctx.lineTo(W,hz);ctx.fill()}
   ctx.fillStyle=f[2];const bx=W*.25,bw=W*.24,bh=H*.05;ctx.fillRect(bx,hz-bh,bw,bh);for(let i=0;i<8;i++)ctx.fillRect(bx+i*bw/8,hz-bh-H*.008,bw/16,H*.008);ctx.fillRect(bx-W*.02,hz-bh*1.35,W*.04,bh*1.35);ctx.fillRect(bx+bw-W*.02,hz-bh*1.35,W*.04,bh*1.35);
   ctx.fillStyle="#9b6b35";ctx.beginPath();ctx.moveTo(bx+bw/2-W*.02,hz);ctx.lineTo(bx+bw/2-W*.02,hz-bh*.55);ctx.quadraticCurveTo(bx+bw/2,hz-bh*.9,bx+bw/2+W*.02,hz-bh*.55);ctx.lineTo(bx+bw/2+W*.02,hz);ctx.fill();
   for(const px of[.08,.62,.7,.93])palmAt(px*W,hz,H*.07,"#4f8a3c","#8a5a2b");return}
  if(th.kind==="city"){for(const b of FARX){const x=b.x*W,w=b.w*W,h=H*(.03+b.h*.05);ctx.fillStyle=b.k<.5?f[0]:f[1];ctx.fillRect(x-w/2,hz-h,w,h);ctx.fillStyle="rgba(120,80,40,.25)";ctx.fillRect(x-w*.15,hz-h*.6,w*.12,h*.2);
    if(b.k>.7)dome(x,hz-h,w*.42,th.dome,"#d9a93a");else if(b.k<.12)minaret(x,hz-h,H*.07,w*.18,f[0],th.dome)}return}
  if(th.kind==="palace"){ctx.fillStyle=f[2];for(let i=0;i<14;i++){const x=i/13*W;ctx.beginPath();ctx.ellipse(x,hz-H*.04,W*.018,H*.05,0,0,7);ctx.fill()}
   ctx.fillStyle=f[0];ctx.fillRect(0,hz-H*.045,W,H*.045);for(let x=0;x<W;x+=W/30)ctx.fillRect(x,hz-H*.055,W/60,H*.01);
   for(const tx of[.12,.4,.68,.9]){ctx.fillStyle=f[1];ctx.fillRect(tx*W-W*.045,hz-H*.09,W*.09,H*.09);for(let i=0;i<4;i++)ctx.fillRect(tx*W-W*.045+i*W*.026,hz-H*.1,W*.013,H*.01);ctx.fillStyle="rgba(80,40,20,.35)";ctx.beginPath();ctx.moveTo(tx*W-W*.01,hz-H*.05);ctx.lineTo(tx*W-W*.01,hz-H*.065);ctx.quadraticCurveTo(tx*W,hz-H*.075,tx*W+W*.01,hz-H*.065);ctx.lineTo(tx*W+W*.01,hz-H*.05);ctx.fill()}return}
  /* masjid: a great dome with half domes and slender minarets */
  const cx=W*.42;ctx.fillStyle=f[1];ctx.fillRect(0,hz-H*.03,W,H*.03);for(let x=0;x<W;x+=W/20){ctx.fillStyle=f[0];ctx.beginPath();ctx.arc(x+W/40,hz-H*.012,W/55,Math.PI,0);ctx.fill()}
  ctx.fillStyle=f[0];ctx.fillRect(cx-W*.2,hz-H*.075,W*.4,H*.075);dome(cx-W*.14,hz-H*.075,W*.06,f[1]);dome(cx+W*.14,hz-H*.075,W*.06,f[1]);dome(cx,hz-H*.075,W*.13,th.dome,"#b8892f");
  for(const mx of[-.27,.27,-.36,.36])minaret(cx+mx*W,hz,H*(Math.abs(mx)>.3?.15:.19),W*.022,f[0],"#7a9cb3")}
 function palmAt(x,y,h,leaf,trunk){ctx.strokeStyle=trunk;ctx.lineWidth=Math.max(2,h*.07);ctx.beginPath();ctx.moveTo(x,y);ctx.quadraticCurveTo(x+h*.12,y-h*.5,x+h*.05,y-h);ctx.stroke();
  ctx.strokeStyle=leaf;ctx.lineWidth=Math.max(2,h*.08);ctx.lineCap="round";for(let i=0;i<7;i++){const a=-Math.PI/2+(i-3)*.5;ctx.beginPath();ctx.moveTo(x+h*.05,y-h);ctx.quadraticCurveTo(x+h*.05+Math.cos(a)*h*.35,y-h+Math.sin(a)*h*.35-h*.1,x+h*.05+Math.cos(a)*h*.55,y-h+Math.sin(a)*h*.2+h*.15);ctx.stroke()}
  ctx.fillStyle="#b5651d";ctx.beginPath();ctx.arc(x+h*.05,y-h*.93,h*.05,0,7);ctx.fill()}
 function drawSide(th,sd,d,n,t){const p=P(sd*2.95,d);if(p.s<2)return;const s=p.s;
  if(th.side==="palm"){palmAt(p.x,p.y,s*2.6,"#3f8a3a","#8a5a2b");if(n%2){ctx.fillStyle="#d9a95f";ctx.beginPath();ctx.ellipse(p.x-sd*s*.6,p.y,s*.5,s*.15,0,0,7);ctx.fill()}return}
  if(th.side==="shop"){const w=s*1.3,h=s*1.9,x=p.x-w/2;ctx.fillStyle=n%3?"#f0dcb8":"#e8cfa3";ctx.fillRect(x,p.y-h,w,h);ctx.fillStyle="#6b4226";ctx.beginPath();ctx.moveTo(p.x-w*.28,p.y);ctx.lineTo(p.x-w*.28,p.y-h*.45);ctx.quadraticCurveTo(p.x,p.y-h*.75,p.x+w*.28,p.y-h*.45);ctx.lineTo(p.x+w*.28,p.y);ctx.fill();
   const cols=n%2?["#a8706a","#f6efe2"]:["#6f9a96","#f6efe2"];for(let i=0;i<6;i++){ctx.fillStyle=cols[i%2];ctx.beginPath();ctx.moveTo(x+i*w/6,p.y-h*.82);ctx.lineTo(x+(i+1)*w/6,p.y-h*.82);ctx.lineTo(x+(i+1)*w/6+sd*-s*.1,p.y-h*.62);ctx.lineTo(x+i*w/6+sd*-s*.1,p.y-h*.62);ctx.fill()}
   ctx.fillStyle="#e3b04b";for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(p.x-w*.18+i*w*.18,p.y-s*.12,s*.08,0,7);ctx.fill()}
   const lx=p.x-sd*w*.55,ly=p.y-h*.55,r=s*.1,gl=ctx.createRadialGradient(lx,ly,0,lx,ly,r*4);gl.addColorStop(0,"rgba(255,200,90,.6)");gl.addColorStop(1,"rgba(255,200,90,0)");ctx.fillStyle=gl;ctx.beginPath();ctx.arc(lx,ly,r*4,0,7);ctx.fill();ctx.fillStyle="#ffcf6b";ctx.beginPath();ctx.moveTo(lx,ly-r*1.4);ctx.lineTo(lx+r,ly);ctx.lineTo(lx,ly+r*1.4);ctx.lineTo(lx-r,ly);ctx.fill();return}
  if(th.flowers){const fc=["#e9b3bd","#f1dc9c","#ffffff","#cbbbe0","#efc7a0"];for(let i=0;i<5;i++){const fx=p.x+sd*(i-2)*s*.25,fy=p.y-s*.05+(i%2)*s*.08;ctx.fillStyle="#3fa45a";ctx.beginPath();ctx.arc(fx,fy,s*.12,0,7);ctx.fill();ctx.fillStyle=fc[(n+i)%fc.length];ctx.beginPath();ctx.arc(fx,fy-s*.05,s*.06,0,7);ctx.fill()}}
  if(th.side==="cypress"){if(n%2){ctx.fillStyle="#2f6b3a";ctx.beginPath();ctx.ellipse(p.x,p.y-s*1.3,s*.32,s*1.3,0,0,7);ctx.fill();ctx.fillStyle="rgba(255,255,255,.12)";ctx.beginPath();ctx.ellipse(p.x-s*.1,p.y-s*1.4,s*.1,s*.9,0,0,7);ctx.fill()}
   else{ctx.fillStyle="#e9dcc3";ctx.beginPath();ctx.ellipse(p.x,p.y-s*.12,s*.55,s*.16,0,0,7);ctx.fill();ctx.fillStyle="#7cc6ff";ctx.beginPath();ctx.ellipse(p.x,p.y-s*.16,s*.45,s*.1,0,0,7);ctx.fill();
    ctx.fillStyle="#d8c9ad";ctx.fillRect(p.x-s*.05,p.y-s*.6,s*.1,s*.45);ctx.strokeStyle="rgba(150,210,255,.9)";ctx.lineWidth=Math.max(1,s*.03);for(let i=0;i<5;i++){const a=(i-2)*.45,ph=(t*2+i*.3)%1;ctx.beginPath();ctx.moveTo(p.x,p.y-s*.62);ctx.quadraticCurveTo(p.x+Math.sin(a)*s*.35,p.y-s*(1-.1*ph),p.x+Math.sin(a)*s*.5,p.y-s*.2);ctx.stroke()}}return}
  /* arcade: white pier with a horseshoe arch of red and white stones */
  const w=s*1.1,h=s*2.2,top=p.y-h;ctx.fillStyle="#f6f1e6";ctx.fillRect(p.x-w*.5,top+w*.45,w*.18,h-w*.45);ctx.fillRect(p.x+w*.32,top+w*.45,w*.18,h-w*.45);
  const ax=p.x,ay=top+w*.5,R=w*.42;for(let i=0;i<12;i++){const a0=Math.PI*(-.08)+i*(Math.PI*1.16/12),a1=a0+Math.PI*1.16/12;ctx.fillStyle=i%2?"#f6f1e6":"#d2b48c";ctx.beginPath();ctx.arc(ax,ay,R+w*.12,Math.PI+a0-.04,Math.PI+a1-.04);ctx.arc(ax,ay,R,Math.PI+a1-.04,Math.PI+a0-.04,true);ctx.fill()}
  ctx.fillStyle="#e9dfcb";ctx.fillRect(p.x-w*.6,top+w*.02,w*1.2,w*.08)}
  function coinAt(x,y,r,t,spin){const sx=Math.abs(Math.cos(t*4+spin));ctx.save();ctx.translate(x,y);ctx.scale(Math.max(.15,sx),1);
  ctx.fillStyle="#a87920";ctx.beginPath();ctx.arc(0,0,r,0,7);ctx.fill();ctx.fillStyle="#e3b04b";ctx.beginPath();ctx.arc(0,0,r*.86,0,7);ctx.fill();
  ctx.fillStyle="#fff3cf";ctx.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4,rr=i%2?r*.22:r*.55;ctx.lineTo(Math.cos(a)*rr,Math.sin(a)*rr)}ctx.fill();ctx.restore()}
 function drawObj(ob,d,t,th){const p=P(ob.ln-1,d,ob.h||0),g0=P(ob.ln-1,d);
  if(ob.k==="coin"){coinAt(p.x,p.y-p.s*.45,Math.max(9,p.s*.42),t,ob.z);return}
  if(ob.k==="shield"||ob.k==="x2"||ob.k==="mag"){const r=Math.max(12,p.s*.38),y=p.y-p.s*.45+Math.sin(t*4)*p.s*.05;const col={shield:"#2f6db5",x2:"#e3a52c",mag:"#9ee2b5"}[ob.k];
   const gl=ctx.createRadialGradient(p.x,y,0,p.x,y,r*2.2);gl.addColorStop(0,col+"cc");gl.addColorStop(1,"rgba(255,255,255,0)");ctx.fillStyle=gl;ctx.beginPath();ctx.arc(p.x,y,r*2.2,0,7);ctx.fill();
   ctx.fillStyle=col;ctx.beginPath();ctx.arc(p.x,y,r,0,7);ctx.fill();ctx.strokeStyle="#fff";ctx.lineWidth=Math.max(2,r*.15);ctx.stroke();ctx.fillStyle="#fff";
   if(ob.k==="shield"){ctx.beginPath();ctx.moveTo(p.x,y-r*.6);ctx.lineTo(p.x+r*.5,y-r*.38);ctx.lineTo(p.x+r*.5,y);ctx.quadraticCurveTo(p.x+r*.45,y+r*.45,p.x,y+r*.65);ctx.quadraticCurveTo(p.x-r*.45,y+r*.45,p.x-r*.5,y);ctx.lineTo(p.x-r*.5,y-r*.38);ctx.fill()}
   else if(ob.k==="x2"){ctx.font=`900 ${r*.9}px system-ui`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("×2",p.x,y+1)}
   else{ctx.strokeStyle="#c0392b";ctx.lineWidth=r*.3;ctx.beginPath();ctx.arc(p.x,y,r*.42,0,Math.PI);ctx.stroke();ctx.fillStyle="#c0392b";ctx.fillRect(p.x-r*.57,y-r*.4,r*.3,r*.4);ctx.fillRect(p.x+r*.27,y-r*.4,r*.3,r*.4)}
   return}
  if(ob.k==="mag"){const r=p.s*.3;ctx.fillStyle="rgba(158,226,181,.35)";ctx.beginPath();ctx.arc(p.x,p.y-p.s*.4,r*1.6+Math.sin(t*6)*3,0,7);ctx.fill();ctx.strokeStyle="#c0392b";ctx.lineWidth=r*.45;ctx.beginPath();ctx.arc(p.x,p.y-p.s*.4,r*.8,Math.PI,0);ctx.stroke();ctx.fillStyle="#eee";ctx.fillRect(p.x-r*1.02,p.y-p.s*.4,r*.45,r*.4);ctx.fillRect(p.x+r*.58,p.y-p.s*.4,r*.45,r*.4);return}
  ctx.fillStyle="rgba(0,0,0,.18)";ctx.beginPath();ctx.ellipse(g0.x,g0.y,p.s*.55,p.s*.12,0,0,7);ctx.fill();
  if(ob.k==="low"){/* row of clay pots to jump over */const w=p.s*.9;for(let i=-1;i<=1;i++){const x=p.x+i*w*.34,r=w*.2;ctx.fillStyle="#b5562f";ctx.beginPath();ctx.ellipse(x,p.y-r,r,r*1.05,0,0,7);ctx.fill();ctx.fillStyle="#8e3f20";ctx.fillRect(x-r*.45,p.y-r*2.25,r*.9,r*.4);ctx.fillStyle="rgba(255,255,255,.25)";ctx.fillRect(x-r*.7,p.y-r*1.2,r*1.4,r*.14)}}
  else if(th&&th.wall==="crates"){const w=p.s*.95;for(const[cx,cy,sz]of[[-.25,0,.5],[.25,0,.5],[0,-.48,.48]]){const x=p.x+cx*w,y=p.y+cy*w,z=sz*w;ctx.fillStyle="#b07a3c";ctx.fillRect(x-z/2,y-z,z,z);ctx.strokeStyle="#7a4f22";ctx.lineWidth=Math.max(1,z*.06);ctx.strokeRect(x-z/2,y-z,z,z);ctx.beginPath();ctx.moveTo(x-z/2,y-z);ctx.lineTo(x+z/2,y);ctx.stroke()}}
  else if(th&&th.wall==="books"){/* a tall stack of books */const w=p.s*1.05,bh=w*.16,bc=["#7d5a50","#5f7a8a","#a38b5a","#6d7f62","#8a6a7d"];for(let i=0;i<6;i++){const y=p.y-(i+1)*bh,off=(i%2?1:-1)*w*.04;ctx.fillStyle=bc[i%bc.length];rr(p.x-w*.45+off,y,w*.9,bh*.92,bh*.2);ctx.fill();ctx.fillStyle="#f4ecd8";ctx.fillRect(p.x+w*.38+off,y+bh*.15,w*.05,bh*.6);ctx.fillStyle="#d9b25a";ctx.fillRect(p.x-w*.2+off,y+bh*.35,w*.4,bh*.12)}}
  else if(th&&th.wall==="hedge"){const w=p.s*1.1,h=p.s*.9;ctx.fillStyle="#3f8f45";rr(p.x-w/2,p.y-h,w,h,h*.25);ctx.fill();ctx.fillStyle="#57a85a";for(let i=0;i<5;i++){ctx.beginPath();ctx.arc(p.x-w*.4+i*w*.2,p.y-h,w*.12,0,7);ctx.fill()}ctx.fillStyle="#ff8fa3";for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(p.x-w*.3+i*w*.2,p.y-h*.55+((i%2)*h*.2),w*.04,0,7);ctx.fill()}}
  else if(th&&th.wall==="basin"){const w=p.s*1.1;ctx.fillStyle="#e8dcc4";ctx.beginPath();ctx.ellipse(p.x,p.y-w*.12,w*.55,w*.18,0,0,7);ctx.fill();ctx.fillRect(p.x-w*.55,p.y-w*.42,w*1.1,w*.3);ctx.fillStyle="#7cc6ff";ctx.beginPath();ctx.ellipse(p.x,p.y-w*.42,w*.5,w*.13,0,0,7);ctx.fill();ctx.fillStyle="#d8c9ad";ctx.fillRect(p.x-w*.05,p.y-w*.85,w*.1,w*.45);ctx.fillStyle="rgba(150,210,255,.9)";ctx.beginPath();ctx.arc(p.x,p.y-w*.9,w*.12,0,7);ctx.fill()}
  else{/* a market stall blocking the lane */const w=p.s*1.05,h=p.s*1.6;ctx.fillStyle="#6b3b22";ctx.fillRect(p.x-w/2,p.y-h,w*.08,h);ctx.fillRect(p.x+w/2-w*.08,p.y-h,w*.08,h);
   ctx.fillStyle="#7a4a2a";ctx.fillRect(p.x-w/2,p.y-h*.45,w,h*.45);ctx.fillStyle="#e0a33a";for(let i=0;i<4;i++){ctx.beginPath();ctx.arc(p.x-w*.3+i*w*.2,p.y-h*.47,w*.08,0,7);ctx.fill()}
   for(let i=0;i<5;i++){ctx.fillStyle=i%2?"#f3ead2":"#c0392b";ctx.beginPath();ctx.moveTo(p.x-w*.6+i*w*.24,p.y-h);ctx.lineTo(p.x-w*.6+(i+1)*w*.24,p.y-h);ctx.lineTo(p.x-w*.6+(i+1)*w*.24,p.y-h*.8);ctx.quadraticCurveTo(p.x-w*.6+(i+.5)*w*.24,p.y-h*.7,p.x-w*.6+i*w*.24,p.y-h*.8);ctx.fill()}}
 }
 function drawBubble(t){const f=g.flash,w=f?f.w:g.cur;if(!w)return;const p=P(g.x,0),fs0=Math.round(Math.min(36,Math.max(24,W*.075))),y=Math.min(p.y+fs0*1.7+12,H-100);
  const fs=fs0;ctx.font=`700 ${fs}px ${o.nameFont||"serif"}`;ctx.direction="rtl";const tw=ctx.measureText(w).width+fs*1.2,h=fs*1.7;
  const bad=f&&!f.ok,good=f&&f.ok;ctx.save();ctx.shadowColor=bad?"rgba(255,90,70,.8)":"rgba(255,214,110,.9)";ctx.shadowBlur=18;
  ctx.fillStyle=bad?"#9b2c22":good?"#2e7a4f":"#fff7e0";rr(p.x-tw/2,y-h,tw,h,h/2);ctx.fill();ctx.restore();
  ctx.beginPath();ctx.moveTo(p.x-8,y-h);ctx.lineTo(p.x+8,y-h);ctx.lineTo(p.x,y-h-9);ctx.fillStyle=bad?"#9b2c22":good?"#2e7a4f":"#fff7e0";ctx.fill();
  ctx.fillStyle=bad||good?"#fff":"#2b1d05";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(w,p.x,y-h*.46);ctx.direction="inherit"}
 function drawWord(ob,d){if(ob.done==="got"||ob.done==="gone")return;if(!ob.done&&ob.row!==g.got.indexOf(0))return;/* only the next row of words, never a crowd */const p=P(ob.ln-1,d,ob.h||0),g0=P(ob.ln-1,d);if(p.s<2)return;const lane=p.s*GAP*.92;let w=lane;
  const bad=ob.done==="bad",show=ob.done==="show",h=Math.min(lane*.62,Math.max(26,w*.55));let fs=h*.72;ctx.font=`700 ${fs}px ${o.nameFont||"serif"}`;const tw=ctx.measureText(ob.w).width;if(tw>w*.9)fs*=w*.9/tw;const wf=`700 ${fs}px ${o.nameFont||"serif"}`;const y=p.y-h-p.s*.25;
  ctx.fillStyle="rgba(0,0,0,.18)";ctx.beginPath();ctx.ellipse(g0.x,g0.y,w*.45,p.s*.08,0,0,7);ctx.fill();
  ctx.fillStyle="#a87920";ctx.fillRect(p.x-p.s*.03,y+h,p.s*.06,g0.y-y-h);if(ob.h){ctx.fillStyle="rgba(255,213,107,.9)";ctx.font=`800 ${Math.max(14,p.s*.3)}px system-ui`;ctx.textAlign="center";ctx.fillText("⬆",p.x,y-p.s*.15)}
  ctx.save();ctx.shadowColor="rgba(0,0,0,.25)";ctx.shadowBlur=8;ctx.shadowOffsetY=3;ctx.fillStyle=bad?"#9b2c22":show?"#2e7a4f":"#ffffff";rr(p.x-w/2,y,w,h,h*.3);ctx.fill();ctx.restore();ctx.strokeStyle=bad?"#ffb3aa":"#e3a52c";ctx.lineWidth=Math.max(3,p.s*.05);rr(p.x-w/2,y,w,h,h*.3);ctx.stroke();
  
  ctx.font=wf;ctx.textAlign="center";ctx.textBaseline="middle";ctx.direction="rtl";ctx.fillStyle=bad||show?"#fff":"#1a1203";ctx.fillText(ob.w,p.x,y+h*.52);ctx.direction="inherit"}
 function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
 const PLAYERS=["star","diamond","gem","gold","planet"],pkind=()=>{const k=S.get("lrPlayer","star");return PLAYERS.includes(k)?k:"star"};
 function drawRunner(t){const kind=pkind();
  if(g.inv>0&&Math.floor(t*14)%2&&g.hearts>0)return;
  const gp=P(g.x,0),p=P(g.x,0,g.y),s=p.s,col=cloak(),bounce=g.cd>0?0:Math.abs(Math.sin(g.run*1.6))*s*.1;
  ctx.fillStyle="rgba(0,0,0,.16)";ctx.beginPath();ctx.ellipse(gp.x,gp.y,s*.3*(1-Math.min(.5,g.y/4)),s*.06,0,0,7);ctx.fill();
  const cx=p.x,cy=p.y-s*.6-bounce,glow=(c,r)=>{const gl=ctx.createRadialGradient(cx,cy,0,cx,cy,r);gl.addColorStop(0,c);gl.addColorStop(1,"rgba(255,255,255,0)");ctx.fillStyle=gl;ctx.beginPath();ctx.arc(cx,cy,r,0,7);ctx.fill()},
   spark=(cs,n)=>{if(Math.random()<n)g.parts.push({x:cx+rnd(-s*.2,s*.2),y:cy+s*.25,vx:rnd(-25,25),vy:rnd(40,100),life:.55,col:pick(cs),r:rnd(1.5,3)})},
   poly=(pts,c)=>{ctx.fillStyle=c;ctx.beginPath();pts.forEach(([x,y])=>ctx.lineTo(x,y));ctx.closePath();ctx.fill()};
  ctx.save();
  if(kind==="star"){/* a turning golden eight-point star */
   spark(["#ffe08a","#fff3cf","#e3b04b"],.7);glow("rgba(255,226,140,.6)",s*.8);ctx.translate(cx,cy);ctx.rotate(t*2);const R=s*.42;
   for(const[r0,c]of[[R,"#b8892f"],[R*.86,"#f2cd6b"]]){ctx.fillStyle=c;ctx.beginPath();for(let i=0;i<16;i++){const a=i*Math.PI/8,r=i%2?r0*.62:r0;ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r)}ctx.closePath();ctx.fill()}
   ctx.fillStyle="#fff7e0";ctx.beginPath();ctx.arc(0,0,R*.28,0,7);ctx.fill()}
  else if(kind==="diamond"){/* a brilliant-cut diamond that turns and sparkles */
   spark(["#ffffff","#dff3ff","#bfe6ff"],.7);glow("rgba(210,240,255,.7)",s*.8);ctx.translate(cx,cy);const k=Math.max(.35,Math.abs(Math.cos(t*1.8)));ctx.scale(k,1);const w=s*.46,h=s*.5;
   poly([[-w,-h*.2],[-w*.55,-h*.55],[w*.55,-h*.55],[w,-h*.2],[0,h*.6]],"#cdeeff");
   poly([[-w*.55,-h*.55],[w*.55,-h*.55],[w*.3,-h*.2],[-w*.3,-h*.2]],"#f4fbff");
   poly([[-w,-h*.2],[-w*.3,-h*.2],[0,h*.6]],"#a9dcf5");poly([[w,-h*.2],[w*.3,-h*.2],[0,h*.6]],"#e6f6ff");
   ctx.strokeStyle="rgba(120,170,200,.7)";ctx.lineWidth=Math.max(1,s*.015);ctx.beginPath();ctx.moveTo(-w,-h*.2);ctx.lineTo(w,-h*.2);ctx.moveTo(-w*.3,-h*.2);ctx.lineTo(0,h*.6);ctx.lineTo(w*.3,-h*.2);ctx.stroke();
   ctx.setTransform(1,0,0,1,0,0);const tw=(Math.sin(t*5)+1)/2;ctx.fillStyle=`rgba(255,255,255,${tw})`;star4(cx+s*.2,cy-s*.28,s*.1)}
  else if(kind==="gem"){/* a round-cut jewel with sparkling facets, in the chosen colour */
   spark(["#ffffff",col],.5);glow("rgba(255,255,255,.55)",s*.75);ctx.translate(cx,cy);ctx.rotate(t*.8);const R=s*.4,r2=R*.55,pt=(r,i,n)=>[Math.cos(i*Math.PI*2/n)*r,Math.sin(i*Math.PI*2/n)*r];
   ctx.fillStyle=col;ctx.beginPath();for(let i=0;i<8;i++)ctx.lineTo(...pt(R,i+.5,8));ctx.closePath();ctx.fill();
   for(let i=0;i<8;i++){const a=pt(R,i+.5,8),b=pt(R,i+1.5,8),c=pt(r2,i+1,8);ctx.fillStyle=i%2?"rgba(255,255,255,.28)":"rgba(0,0,0,.14)";ctx.beginPath();ctx.moveTo(...a);ctx.lineTo(...b);ctx.lineTo(...c);ctx.closePath();ctx.fill()}
   ctx.fillStyle="rgba(255,255,255,.22)";ctx.beginPath();for(let i=0;i<8;i++)ctx.lineTo(...pt(r2,i,8));ctx.closePath();ctx.fill();
   ctx.strokeStyle="rgba(255,255,255,.6)";ctx.lineWidth=Math.max(1,s*.012);ctx.beginPath();for(let i=0;i<8;i++){ctx.moveTo(...pt(r2,i,8));ctx.lineTo(...pt(R,i+.5,8))}ctx.stroke();
   ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle=`rgba(255,255,255,${(Math.sin(t*5)+1)/2})`;star4(cx-s*.12,cy-s*.15,s*.09)}
  else if(kind==="gold"){/* a shining gold bar */
   spark(["#ffe08a","#fff3cf"],.6);glow("rgba(255,214,110,.55)",s*.75);ctx.translate(cx,cy);ctx.rotate(Math.sin(t*2)*.08);const w=s*.5,h=s*.3;
   poly([[-w,h*.5],[w,h*.5],[w*.72,-h*.5],[-w*.72,-h*.5]],"#c9962c");poly([[-w*.72,-h*.5],[w*.72,-h*.5],[w*.55,-h*.9],[-w*.55,-h*.9]],"#f2d27a");
   poly([[-w*.8,h*.32],[w*.8,h*.32],[w*.62,-h*.4],[-w*.62,-h*.4]],"#e3b04b");
   const sx=((t*.6)%1.4-.2)*w*2-w;ctx.save();ctx.beginPath();ctx.moveTo(-w,h*.5);ctx.lineTo(w,h*.5);ctx.lineTo(w*.72,-h*.5);ctx.lineTo(-w*.72,-h*.5);ctx.clip();ctx.fillStyle="rgba(255,255,255,.45)";ctx.beginPath();ctx.moveTo(sx,h*.6);ctx.lineTo(sx+w*.18,h*.6);ctx.lineTo(sx+w*.38,-h);ctx.lineTo(sx+w*.2,-h);ctx.fill();ctx.restore()}
  else{/* a small planet with a golden ring and a moon */
   spark(["#ffffff","#e8dcff"],.4);glow("rgba(220,210,255,.55)",s*.85);const R=s*.32,tilt=-.35;
   ctx.strokeStyle="rgba(201,162,74,.95)";ctx.lineWidth=Math.max(2,s*.04);ctx.beginPath();ctx.ellipse(cx,cy,R*1.65,R*.42,tilt,Math.PI,0);ctx.stroke();
   const gl=ctx.createRadialGradient(cx-R*.35,cy-R*.4,R*.1,cx,cy,R);gl.addColorStop(0,"#ffffff");gl.addColorStop(.45,col);gl.addColorStop(1,"rgba(0,0,0,.35)");ctx.fillStyle=col;ctx.beginPath();ctx.arc(cx,cy,R,0,7);ctx.fill();ctx.fillStyle=gl;ctx.fill();
   ctx.save();ctx.beginPath();ctx.arc(cx,cy,R,0,7);ctx.clip();ctx.fillStyle="rgba(255,255,255,.18)";for(const b of[-.35,.1,.45]){ctx.save();ctx.translate(cx,cy+b*R);ctx.rotate(tilt*.6);ctx.fillRect(-R,-R*.07,R*2,R*.14);ctx.restore()}ctx.restore();
   ctx.strokeStyle="rgba(201,162,74,.95)";ctx.beginPath();ctx.ellipse(cx,cy,R*1.65,R*.42,tilt,0,Math.PI);ctx.stroke();
   const a=t*1.6;ctx.fillStyle="#f6f1e6";ctx.beginPath();ctx.arc(cx+Math.cos(a)*R*1.9,cy+Math.sin(a)*R*.7-R*.3,s*.055,0,7);ctx.fill()}
  ctx.restore();
  if(g.shield){ctx.strokeStyle="rgba(124,198,255,.9)";ctx.lineWidth=3;ctx.beginPath();ctx.arc(cx,cy,s*.62+Math.sin(t*6)*2,0,7);ctx.stroke()}}
 function star4(x,y,r){ctx.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4,q=i%2?r*.25:r;ctx.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q)}ctx.closePath();ctx.fill()}

 /* ---------- loop ---------- */
 function loop(ts){raf=requestAnimationFrame(loop);const dt=Math.min(.05,(ts-(last||ts))/1000);last=ts;if(state==="play"&&g)step(dt);else{idle+=dt}if(!g)idle+=0;draw()}

 /* ---------- input ---------- */
 let sx=0,sy=0,st=0,moved=false;
 function move(dir){if(state!=="play"||!g||g.cd>0)return;const n=Math.max(0,Math.min(2,g.lane+dir));if(n!==g.lane){g.lane=n;SFX.lane()}}
 function jump(){if(state!=="play"||!g||g.cd>0)return;if(g.y<.05){g.vy=11;SFX.jump()}}
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
 function menuStart(){state="menu";hud.hidden=true;legend.hidden=true;qEl.classList.add("hide");
  const best=S.get("lrBest",0),hearts=S.get("lrHeart",0);
  menu.innerHTML=`<div class="lr-card"><div class="lr-big" style="font-size:44px">🪔</div><h2>${L.title}</h2><p>${L.sub}</p>
   <div class="lr-row"><div class="lr-stat"><b style="display:flex;gap:6px;align-items:center;justify-content:center">${COIN}${wallet()}</b><span>${L.yourWallet}</span></div><div class="lr-stat"><b>${best}</b><span>${L.best}</span></div></div>
   ${misHTML()}${hearts?`<p>❤ ${L.items} (${hearts})</p>`:""}
   <p style="font-weight:700">${L.places}: ${THEMES.map((th,i)=>i<=S.get("lrPlace",0)?`<span style="color:#2e7a4f">${AR?th.ar:th.en}</span>`:"🔒").join(" · ")}</p>
   <p style="font-weight:700;margin-top:6px">${L.pace}</p><div class="lr-row" style="margin-top:0">${["slow","normal","fast"].map(k=>`<button class="lr-btn lr-sec lr-pc ${S.get("lrPace","slow")===k?"on":""}" style="min-width:0;font-size:15px;min-height:44px" data-p="${k}">${L[k]}</button>`).join("")}</div>
   <button class="lr-btn lr-go" id="lrS">${L.start}</button><button class="lr-btn lr-sec" id="lrShop">${L.shop}</button><button class="lr-btn lr-sec" id="lrBoard">🏆 ${L.board}</button><button class="lr-btn lr-sec" id="lrHow">❓ ${L.how}</button>
   <div class="lr-row"><button class="lr-btn lr-sec" style="min-width:0;font-size:15px;min-height:44px" id="lrSnd">${SFX.on?"🔊":"🔇"} ${L.sound}: ${SFX.on?L.on:L.off}</button><button class="lr-btn lr-sec" style="min-width:0;font-size:15px;min-height:44px" id="lrE">${L.close}</button></div></div>`;
  menu.querySelector("#lrHow").onclick=()=>guide(menuStart);menu.querySelector("#lrBoard").onclick=()=>board(menuStart);
  menu.querySelector("#lrS").onclick=()=>{if(!S.get("lrGuide",false))return guide(()=>{menu.innerHTML="";newGame();state="play"});try{SFX.ctx=SFX.ctx||new (window.AudioContext||window.webkitAudioContext)();SFX.ctx.resume()}catch(e){}menu.innerHTML="";newGame();state="play"};
  menu.querySelector("#lrShop").onclick=shop;menu.querySelector("#lrE").onclick=close;menu.querySelector("#lrSnd").onclick=()=>{SFX.on=!SFX.on;S.set("lrSnd",SFX.on);if(SFX.on){try{SFX.ctx=SFX.ctx||new (window.AudioContext||window.webkitAudioContext)();SFX.ctx.resume()}catch(e){}SFX.coin()}menuStart()};
  menu.querySelectorAll(".lr-pc").forEach(b=>b.onclick=()=>{S.set("lrPace",b.dataset.p);menuStart()});
 }
 /* daily missions (reset each day) */
 function misState(){const d=new Date().toDateString();let m=S.get("lrMis",null);if(!m||m.d!==d)m={d,g:0,w:0,c:0,done:[]};return m}
 const MIS=[["g",2,50,"m1"],["w",30,40,"m2"],["c",100,30,"m3"]];
 function mis(k,n){const m=misState();m[k]=(m[k]||0)+n;MIS.forEach(([kk,goal,rew],i)=>{if(kk===k&&m[k]>=goal&&!m.done.includes(i)){m.done.push(i);if(g){g.coins+=rew;pop(`${L.misDone} +${rew}`)}else o.wallet.add(rew)}});S.set("lrMis",m)}
 function misHTML(){const m=misState();return`<div class="lr-mis"><b>📋 ${L.missions}</b>${MIS.map(([k,goal,rew,lab],i)=>{const v=Math.min(goal,m[k]||0),dn=m.done.includes(i);return`<div class="${dn?"dn":""}"><span>${dn?"✅":"⬜"} ${L[lab]}</span><small>${COIN}${rew}</small><i style="--p:${v/goal*100}%"></i></div>`}).join("")}</div>`}
 /* weekly board: only the learners on this phone, kept on this phone */
 const SH=o.shared||S,ME=o.player||{id:"me",name:""};
 function weekKey(off=0){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-d.getDay()-7*off);return d.toISOString().slice(0,10)}
 function addWeek(score){const b=SH.get("lrBoard",{}),k=weekKey();b[k]=b[k]||{};const r=b[k][ME.id]||{s:0,n:0};r.s+=score;r.n++;r.name=ME.name||L.learner;b[k][ME.id]=r;
  const keys=Object.keys(b).sort();while(keys.length>12)delete b[keys.shift()];SH.set("lrBoard",b)}
 function badge(id,name,sz=40){let h=0;for(const ch of String(id))h=(h*31+ch.charCodeAt(0))%360;const c1=`hsl(${h},60%,45%)`,c2=`hsl(${(h+40)%360},70%,60%)`,pts=[];for(let i=0;i<16;i++){const a=i*Math.PI/8,r=i%2?11:16;pts.push((20+Math.cos(a)*r).toFixed(1)+","+(20+Math.sin(a)*r).toFixed(1))}
  return`<svg viewBox="0 0 40 40" width="${sz}" height="${sz}"><polygon points="${pts.join(" ")}" fill="${c1}"/><circle cx="20" cy="20" r="9" fill="${c2}"/><text x="20" y="24.5" text-anchor="middle" font-size="12" font-weight="800" fill="#fff" font-family="system-ui">${esc((name||"?").trim().charAt(0)||"?")}</text></svg>`}
 function board(back,off=0){state="menu";hud.hidden=true;legend.hidden=true;const b=SH.get("lrBoard",{}),w=b[weekKey(off)]||{},rows=Object.entries(w).sort((a,c)=>c[1].s-a[1].s);
  menu.innerHTML=`<div class="lr-card" style="justify-content:flex-start"><h2>🏆 ${L.board}</h2><p>${L.boardD}</p>
   <div class="lr-row">${[0,1].map(k=>`<button class="lr-btn lr-sec lr-pc ${off===k?"on":""}" style="min-width:0;font-size:15px;min-height:42px" data-w="${k}">${k?L.lastWeek:L.thisWeek}</button>`).join("")}</div>
   <div class="lr-mis">${rows.length?rows.map(([id,r],i)=>`<div style="display:flex;gap:10px;align-items:center;padding:8px 0;border-bottom:1px solid #eee"><b style="width:26px;font-size:20px">${["🥇","🥈","🥉"][i]||i+1}</b>${badge(id,r.name||L.learner)}<span style="flex:1;font-weight:${id===ME.id?800:500}">${esc(r.name||L.learner)}${id===ME.id?` (${L.you})`:""}</span><b>${r.s}</b></div>`).join(""):`<p>${L.noScores}</p>`}</div>
   <button class="lr-btn lr-go" id="lrS2">${L.start}</button><button class="lr-btn lr-sec" id="lrBk2">${L.close}</button></div>`;
  menu.querySelectorAll("[data-w]").forEach(x=>x.onclick=()=>board(back,+x.dataset.w));
  menu.querySelector("#lrS2").onclick=()=>{menu.innerHTML="";newGame();state="play"};menu.querySelector("#lrBk2").onclick=back}
 /* share card: a picture made on the phone, sent with the phone's own share button (no server) */
 async function shareCard(r){const c=document.createElement("canvas");c.width=1080;c.height=1350;const x=c.getContext("2d");
  let gr=x.createLinearGradient(0,0,0,1350);gr.addColorStop(0,"#4fb3ee");gr.addColorStop(.55,"#bfe6fb");gr.addColorStop(1,"#fde9c4");x.fillStyle=gr;x.fillRect(0,0,1080,1350);
  x.fillStyle="rgba(255,248,220,.9)";x.beginPath();x.arc(880,200,90,0,7);x.fill();
  x.fillStyle="#e2b46e";x.beginPath();x.moveTo(0,1350);for(let i=0;i<=1080;i+=20)x.lineTo(i,1150-Math.sin(i/180)*40);x.lineTo(1080,1350);x.fill();
  x.fillStyle="rgba(255,255,255,.93)";x.beginPath();x.roundRect(90,300,900,760,48);x.fill();
  x.textAlign="center";x.direction=AR?"rtl":"ltr";x.fillStyle="#b8892f";x.font=`800 84px ${o.nameFont||"serif"}`;x.fillText(L.title,540,430);
  x.fillStyle="#5a4a2a";x.font="600 40px system-ui";x.fillText(o.siteName||"",540,500);
  x.fillStyle="#2b2414";x.font="700 46px system-ui";x.fillText(L.shareScore,540,610);x.fillStyle="#e3a52c";x.font="900 150px system-ui";x.fillText(String(r.score),540,770);
  x.font="80px system-ui";x.fillText("⭐".repeat(r.stars||0)+"☆".repeat(3-(r.stars||0)),540,880);
  if(r.reached){x.fillStyle="#2e7a4f";x.font=`700 46px ${o.textFont||"serif"}`;x.fillText(`${L.reached}: ${r.reached}`,540,970)}
  x.fillStyle="#fff";x.font="800 54px system-ui";x.fillText(L.shareT,540,1220);x.font="600 34px system-ui";x.fillText(o.url||location.href.split("#")[0],540,1290);
  const blob=await new Promise(res=>c.toBlob(res,"image/png")),text=`${L.shareT} ${r.score} · ${L.title}\n${o.url||location.href.split("#")[0]}`;
  try{const f=new File([blob],"score.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],text});return}if(navigator.share){await navigator.share({text});return}}catch(e){if(e&&e.name==="AbortError")return}
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="score.png";a.click()}
 function guide(next){S.set("lrGuide",true);menu.innerHTML=`<div class="lr-card"><h2>${L.how}</h2><div class="lr-how">
   <div><span style="font-size:26px">👆</span>${L.how1}</div><div>${ICO.word}${ICO.coin}<span>${L.how2}</span></div><div>${ICO.wrong}${ICO.jar}<span>${L.how3}</span></div><div><span style="font-size:24px">⬆️</span>${L.how5}</div><div><span style="font-size:24px">⭐</span>${L.how4}</div></div>
   <button class="lr-btn lr-go" id="lrG">${L.gotIt}</button></div>`;menu.querySelector("#lrG").onclick=next}
 function pause(){if(state!=="play")return;state="pause";menu.innerHTML=`<div class="lr-card"><h2>${L.paused}</h2><button class="lr-btn lr-go" id="lrR">${L.resume}</button><button class="lr-btn lr-sec" id="lrQ2">${L.close}</button></div>`;
  menu.querySelector("#lrR").onclick=()=>{menu.innerHTML="";last=0;state="play"};menu.querySelector("#lrQ2").onclick=()=>{end(true)}}
 ov.querySelector("#lrP").onclick=pause;
 ov.querySelector("#lrV").onclick=()=>{const ks=["slow","normal","fast"],k=ks[(ks.indexOf(S.get("lrPace","slow"))+1)%3];S.set("lrPace",k);if(g){g.pc=PACE[k];g.speed=Math.min(Math.max(g.pc[0],Math.min(g.speed,g.pc[1])),g.pc[1]);if(k==="slow")g.speed=g.pc[0]}updHud()};
 function end(quit,finished){if(!g||g.over)return;ov.querySelectorAll(".lr-lv,.lr-pop").forEach(x=>x.remove());g.over=true;state="over";qEl.classList.add("hide");
  const score=g.right*10+(finished?50:0);const stars=finished?(g.wrong===0?3:g.wrong<=2?2:1):0;if(finished){g.coins+=50;S.set("lrGoalN",g.gn+1);mis("g",1);const sb=S.get("lrStars",{});sb[g.gn]=Math.max(sb[g.gn]||0,stars);S.set("lrStars",sb)}mis("c",g.coins);let earned=g.coins,bonus=0;
  const day=new Date().toDateString();if(S.get("lrDay","")!==day&&(g.right>0||g.coins>=10)){bonus=20;S.set("lrDay",day)}
  earned+=bonus;if(earned>0)o.wallet.add(earned);const best=S.get("lrBest",0),nb=score>best;if(nb)S.set("lrBest",score);const bd=S.get("lrBestDay",{});if(bd.d!==day||score>bd.s)S.set("lrBestDay",{d:day,s:score});const bToday=Math.max(score,bd.d===day?bd.s:0);
  o.onEnd&&o.onEnd({coins:earned,score,right:g.right,wrong:g.wrong,miss:g.miss});if(score>0)addWeek(score);const shareR={score,stars,reached:g.goalLabel};
  hud.hidden=true;legend.hidden=true;
  menu.innerHTML=`<div class="lr-card"><h2>${finished?L.goalDone:L.over}</h2>${finished?`<div style="font-size:46px;letter-spacing:6px">${"⭐".repeat(stars)}${"☆".repeat(3-stars)}</div>`:""}<p>${L.earned}</p><div class="lr-big">${COIN.replace('class="lr-coin"','class="lr-coin" style="width:44px;height:44px"')}+${earned}</div>
   ${bonus?`<p>🎁 ${L.bonus} (+${bonus})</p>`:""}
   <div class="lr-row"><div class="lr-stat"><b>${score}${nb?" ⭐":""}</b><span>${L.dist}</span></div><div class="lr-stat"><b>${bToday}</b><span>${L.bestToday}</span></div><div class="lr-stat"><b style="color:#2e7a4f">${g.right}</b><span>${L.right}</span></div><div class="lr-stat"><b style="color:#b42318">${g.wrong}</b><span>${L.wrong}</span></div></div>
   ${g.miss.length?`<div class="lr-rev"><b>${L.review}</b>${g.miss.map(m=>`<div><small style="color:#7a6a4a">${L.qWas}${m.label?" · "+esc(m.label):""}</small><br><span lang="ar" style="font-family:var(--lr-text)">${esc(m.p)}</span><br><small style="color:#7a6a4a">${L.ansIs}:</small> <span class="a" lang="ar">${esc(m.a)}</span></div>`).join("")}</div>`:""}
   <button class="lr-btn lr-go" id="lrA">${finished?L.nextGoal:L.again}</button><div class="lr-row"><button class="lr-btn lr-sec" style="min-width:0;min-height:46px;font-size:16px" id="lrSh">📤 ${L.share}</button><button class="lr-btn lr-sec" style="min-width:0;min-height:46px;font-size:16px" id="lrBd">🏆 ${L.board}</button></div>${misHTML()}<div class="lr-row"><button class="lr-btn lr-sec" style="min-width:140px;line-height:1.2" id="lrShop">${L.shop}<br><small style="font-weight:500;font-size:12px">${L.shopD}</small></button><button class="lr-btn lr-sec" style="min-width:140px;line-height:1.2" id="lrE">${L.close}<br><small style="font-weight:500;font-size:12px">${L.closeD}</small></button></div></div>`;
  menu.querySelector("#lrA").onclick=()=>{menu.innerHTML="";newGame();state="play"};menu.querySelector("#lrShop").onclick=shop;menu.querySelector("#lrE").onclick=close;
  menu.querySelector("#lrSh").onclick=()=>shareCard(shareR);menu.querySelector("#lrBd").onclick=()=>board(menuStart);
 }
 function shop(){state="menu";hud.hidden=true;legend.hidden=true;const own=S.get("lrOwn",["green"]),cur=S.get("lrCloak","green"),hasTrail=S.get("lrTrail",false),trailOn=S.get("lrTrailOn",false);
  const price=n=>`<small>${COIN}${n}</small>`;
  menu.innerHTML=`<div class="lr-card" style="justify-content:flex-start"><h2>${L.shop}</h2><div class="lr-pill" style="margin:4px 0">${COIN}<span>${wallet()}</span></div>
   <p style="font-weight:700;margin-top:10px">${L.player}</p><div class="lr-shop" style="grid-template-columns:repeat(5,1fr);gap:6px">${PLAYERS.map(k=>`<button class="lr-it ${pkind()===k?"sel":""}" data-pl="${k}">${PIC[k]}${L["p_"+k]}</button>`).join("")}</div>
   <p style="font-weight:700;margin-top:10px">${L.cloak}</p><div class="lr-shop" style="grid-template-columns:repeat(3,1fr)">${CLOAKS.map(([k,c,pr])=>`<button class="lr-it ${cur===k?"sel":""}" data-c="${k}"><i style="background:${c}"></i>${L.colors[k]}${own.includes(k)?`<span style="font-size:12px;color:#7a6a4a">${cur===k?L.inUse:L.owned}</span>`:price(pr)}</button>`).join("")}</div>
   <div class="lr-shop"><button class="lr-it ${trailOn?"sel":""}" id="lrT"><span style="font-size:30px">✨</span><b>${L.trail}</b><span style="font-size:12px;color:#7a6a4a">${L.trailD}</span>${hasTrail?`<span style="font-size:12px">${trailOn?L.inUse:L.use}</span>`:price(TRAIL_PRICE)}</button>
   <button class="lr-it" id="lrHb"><span style="font-size:30px">❤</span><b>${L.heart}</b><span style="font-size:12px;color:#7a6a4a">${L.heartD}${S.get("lrHeart",0)?` · ${S.get("lrHeart",0)}`:""}</span>${price(HEART_PRICE)}</button></div>
   <button class="lr-btn lr-go" id="lrB">${L.start}</button><button class="lr-btn lr-sec" id="lrBk">${L.close}</button><div id="lrTo"></div></div>`;
  const spend=n=>{if(wallet()<n){const tt=menu.querySelector("#lrTo");tt.innerHTML=`<div class="lr-toast">${L.need}</div>`;setTimeout(()=>tt.innerHTML="",1600);SFX.wrong();return false}o.wallet.add(-n);SFX.coin();return true};
  menu.querySelectorAll("[data-pl]").forEach(b=>b.onclick=()=>{S.set("lrPlayer",b.dataset.pl);shop()});
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

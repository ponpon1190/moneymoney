import fs from "node:fs/promises";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const OUT = "C:/Users/USER/Desktop/公告欄照片/.agents/skills/venue-allocation-manager/green_selection_spring_candle_training.pptx";
const IMG = "C:/Users/USER/Desktop/公告欄照片/.agents/skills/venue-allocation-manager/candle-product.png";
const W = 1280, H = 720;
const C = { cream: "#FAF8F2", green: "#234B38", sage: "#91A87E", pale: "#E8EFE3", ink: "#203329", terra: "#BE765B", white: "#FFFFFF" };
const deck = Presentation.create({ slideSize: { width: W, height: H } });

function box(s, x, y, w, h, fill, name) {
  return s.shapes.add({ geometry: "rect", name, position: { left:x, top:y, width:w, height:h }, fill, line: { style:"solid", fill, width:0 } });
}
function text(s, value, x, y, w, h, size=28, color=C.ink, bold=false, name) {
  const el = s.shapes.add({ geometry:"textbox", name, position:{ left:x, top:y, width:w, height:h }, fill:"none", line:{ style:"solid", fill:"none", width:0 } });
  el.text = value;
  el.text.style = { fontSize:size, color, bold, fontFace:"Microsoft JhengHei", alignment:"left", verticalAlignment:"middle", marginLeft:0, marginRight:0, marginTop:0, marginBottom:0 };
  return el;
}
function header(s, title, n) {
  text(s, "綠野選物  |  門市訓練", 72, 34, 410, 24, 15, C.green, true, "brand");
  text(s, String(n).padStart(2,"0"), 1140, 34, 68, 24, 15, C.green, true, "page");
  text(s, title, 72, 86, 1080, 58, 38, C.green, true, "title");
  box(s, 72, 158, 1136, 3, C.sage, "rule");
}
function bullets(s, items, x, y, w=510, size=25, color=C.ink) {
  items.forEach((item, i) => { text(s, `• ${item}`, x, y+i*58, w, 42, size, color, false, `bullet-${i+1}`); });
}
function notes(s, copy) { s.speakerNotes.textFrame.setText(copy); s.speakerNotes.setVisible(true); }

// 1 — title
{ const s=deck.slides.add(); s.background.fill=C.cream; box(s,0,0,18,H,C.sage,"side");
  text(s,"GREEN SELECTION",72,112,410,30,18,C.green,true,"eyebrow");
  text(s,"春季新品香氛蠟燭\n門市訓練",72,168,640,150,56,C.green,true,"title");
  text(s,"把「日常香氣」說成顧客願意帶走的生活提案",72,350,630,50,25,C.ink,false,"subtitle");
  text(s,"2026 春季新品  |  總部教育訓練",72,594,520,28,17,C.green,true,"footer");
  notes(s,"開場說明：本課聚焦新品銷售與服務。"); }
// 2 — importance
{ const s=deck.slides.add(); s.background.fill=C.cream; header(s,"新品讓春日回到自己的節奏",2);
  text(s,"一盞香，讓日常慢下來。",72,202,860,54,34,C.terra,true,"slogan");
  bullets(s,["春季檔期提升進店話題","居家香氛帶動加購機會","送禮需求貼近日常情境"],72,314,730,27);
  text(s,"門市重點",912,304,220,30,20,C.green,true,"side-label");
  text(s,"先問情境\n再談香氣\n最後推薦搭配",912,350,230,126,25,C.ink,true,"side-copy");
  notes(s,"先用口號建立情緒，再帶入三個銷售價值。"); }
// 3 — features
{ const s=deck.slides.add(); s.background.fill=C.cream; header(s,"三個特色，三種安心感",3);
  const bytes=await fs.readFile(IMG); s.images.add({ blob:bytes, contentType:"image/png", alt:"春季香氛蠟燭商品情境圖", fit:"cover", position:{left:700,top:204,width:508,height:382}, geometry:"rect" });
  bullets(s,["天然大豆蠟，燃燒更純淨","木芯設計，營造舒適聲響","春日草本調，清新不甜膩"],72,236,550,26);
  text(s,"銷售提示：讓顧客先聞，再說使用時刻。",72,510,550,45,21,C.green,true,"tip");
  notes(s,"[Sources] Image generated with OpenAI ImageGen."); }
// 4 — TA
{ const s=deck.slides.add(); s.background.fill=C.cream; header(s,"鎖定需要儀式感的生活族群",4);
  text(s,"主要 TA",72,222,250,34,24,C.green,true,"ta-title"); bullets(s,["25–40 歲都會生活者","重視居家氛圍與質感","偏好天然、簡約選物"],72,278,440,25);
  text(s,"推薦情境",665,222,250,34,24,C.green,true,"scene-title"); bullets(s,["下班後放鬆時刻","週末整理居家空間","送給喜愛香氣的朋友"],665,278,470,25);
  notes(s,"依顧客購買目的，從情境切入更自然。"); }
// 5 — scripts
{ const s=deck.slides.add(); s.background.fill=C.cream; header(s,"三句話，開啟自然推薦",5);
  text(s,"「您想找放鬆用，還是送禮用呢？」",72,228,1030,44,29,C.green,true,"line1");
  text(s,"「這款是清新的草本調，不會太甜。」",72,336,1030,44,29,C.green,true,"line2");
  text(s,"「想像下班點起來，空間會很安定。」",72,444,1030,44,29,C.green,true,"line3");
  text(s,"先問需求，再描述感受。",72,568,390,28,20,C.terra,true,"footer-tip");
  notes(s,"示範時請自然說，不必逐字背誦。"); }
// 6 — FAQ
{ const s=deck.slides.add(); s.background.fill=C.cream; header(s,"FAQ：回答簡短，讓顧客安心",6);
  text(s,"Q  香味會不會太濃？",72,218,520,34,24,C.green,true,"q1"); text(s,"A  草本調清爽，適合日常使用。",72,258,540,34,23,C.ink,false,"a1");
  text(s,"Q  第一次使用要注意什麼？",72,358,560,34,24,C.green,true,"q2"); text(s,"A  建議先燃燒至表面平整。",72,398,540,34,23,C.ink,false,"a2");
  text(s,"Q  適合送禮嗎？",72,498,520,34,24,C.green,true,"q3"); text(s,"A  適合喬遷、生日與日常心意。",72,538,540,34,23,C.ink,false,"a3");
  text(s,"不確定時\n邀請顧客現場試聞",790,300,300,92,29,C.terra,true,"aside");
  notes(s,"回答後停一下，邀請顧客親自試聞。"); }
// 7 — rollout
{ const s=deck.slides.add(); s.background.fill=C.cream; header(s,"上架一致，體驗才會一致",7);
  text(s,"上架時程",72,222,250,32,24,C.green,true,"time-title"); bullets(s,["前一週：完成商品教育","上架日：陳列與試聞準備","首週：回報顧客提問"],72,280,460,25);
  text(s,"門市分工",666,222,250,32,24,C.green,true,"role-title"); bullets(s,["店長：確認陳列與補貨","夥伴：主動邀請試聞","全員：記錄回饋與需求"],666,280,490,25);
  notes(s,"請店長於上架前確認人員與陳列。"); }
// 8 — GREEN
{ const s=deck.slides.add(); s.background.fill=C.green;
  text(s,"GREEN",72,118,560,90,68,C.white,true,"green");
  text(s,"讓每一次選物，回到更好的日常。",72,236,810,45,31,C.white,false,"core");
  bullets(s,["Genuine｜真誠傾聽需求","Responsible｜選擇更安心","Everyday｜融入每日生活","Natural｜親近自然質地"],72,352,800,26,"#DCE8D5");
  text(s,"把香氣說成生活，\n把生活留給顧客。",72,592,600,52,23,"#DCE8D5",true,"closing");
  notes(s,"以 GREEN 收束：真誠、安心、日常、自然。"); }

for (const [i, slide] of deck.slides.items.entries()) {
  const png = await deck.export({ slide, format:"png", scale:1 });
  await fs.writeFile(`C:/Users/USER/Desktop/公告欄照片/.agents/skills/venue-allocation-manager/tmp_ppt_build/slide-${i+1}.png`, Buffer.from(await png.arrayBuffer()));
}
const pptx = await PresentationFile.exportPptx(deck); await pptx.save(OUT);

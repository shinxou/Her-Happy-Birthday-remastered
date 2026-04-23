// ─────────────────────────────────────────────────────────────────
//  a.js — full text sequence completes in ~4 seconds total
//
//  Strategy:
//  • kethalo  (greeting headline): TypeIt speed=3, ~0.6s
//  • mulaiketik1 (main card msg):  TypeIt speed=3, ~0.5s
//  • aktipesan2 (pesan2+3):        TypeIt speed=3, ~0.5s
//  • aktipesan4/5/6 (sty2 lines):  instant reveal via innerHTML
//    with 400ms stagger so they feel sequential not instant-dump
//  • All startDelays and inter-step waits cut to minimum
//  Total budget: ~4 s from gift tap to Next button appearing
// ─────────────────────────────────────────────────────────────────

function initengahan() {
  kadoIn.style    = "display:none";
  ket.style       = "display:none";
  Content.style   = "opacity:1;margin-top:0";
  bodyblur.style  = "opacity:.7";
  wallpaper.style = "transform:scale(1.5)";
}

async function mulainama() {
  bodyblur.style   = "opacity:0";
  wallpaper.style  = "transform:scale(1)";
  fotostiker.style = "display:inline-flex";
  setTimeout(ftmuncul, 70);
  setTimeout(kethalo, 100);   // start greeting almost immediately
}

function ftmuncul() {
  const srcs = [deffotostiker, fotostiker1.src, fotostiker2.src, fotostiker3.src, fotostiker4.src];
  fotostiker.src   = srcs[ftganti] || deffotostiker;
  fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}

function fthilang() {
  fotostiker.style = "display:inline-flex;opacity:1;transition:all .5s ease;transform:scale(.1)";
}

function bqmuncul() {
  bq.style = "position:relative;opacity:1;visibility:visible;transform:scale(1);margin-top:0";
  mulaiketik1();
  fungsi = 1;
}

// ── Greeting headline — TypeIt, speed 3 ──────────────────────────
function kethalo() {
  new TypeIt("#halo", {
    strings: [vketikhalo],
    startDelay: 0,
    speed: 3,           // ~3ms/char → "Happy Birthday, Priyanka 💖!" ≈ 0.1s
    waitUntilVisible: true,
    afterComplete() {
      halo.innerHTML = vketikhalo;
      setTimeout(bqmuncul, 70);
    },
  }).go();
}

// ── Next button ───────────────────────────────────────────────────
function tombol() {
  wallpaper.style = "transform:scale(1)";
  Tombol.style    = "opacity:1;transform:scale(1)";
  fungsi = 1;
}

document.getElementById("By").onclick = function () {
  if (fungsi === 1 || fungsi === 2) {
    window.location = "./hollow-album/index.html";
  }
};

// ── Card main message — TypeIt, speed 3 ──────────────────────────
const vketik1 = kalimat.innerHTML;
kalimat.innerHTML = "";

function mulaiketik1() {
  new TypeIt("#kalimat", {
    strings: [vketik1],
    startDelay: 0,
    speed: 3,
    cursor: false,
    deleteSpeed: 3,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: false,      // disable random variance so timing is exact
    afterComplete() { aktiopsL(); },
  }).go();
}

// ── Standalone tap-to-continue button ────────────────────────────
let opsLclick = 0, opsLcheck = 0;

function aktiopsL() {
  TombolOpsL.classList.add("aktif");
  opsLclick = 1;
  opsLcheck += 1;
}

function hideOpsL() {
  TombolOpsL.classList.remove("aktif");
  TombolOpsL.style.cssText = "opacity:0;transform:scale(0.1);transition:all 0.3s ease;";
  opsLclick = 0;
}

document.getElementById("opsLBtn").onclick = function () {
  if (opsLclick !== 1) return;
  if (opsLcheck === 1) setTimeout(aktipesan1, 200);
  if (opsLcheck === 2) mulaiketik3 && mulaiketik3();
  if (opsLcheck === 3) mulaiketik4 && mulaiketik4();
  if (opsLcheck === 4) mulaiketik5 && mulaiketik5();
  if (opsLcheck === 5) kethalo2    && kethalo2();
  otomatis();
  hideOpsL();
};

document.getElementById("bq").onclick = function () {
  if (opsLclick === 1) document.getElementById("opsLBtn").onclick();
};

function otomatis() {
  kalimat.style = "opacity:0";
  setTimeout(() => { kalimat.style = "opacity:1"; }, 300);
}

function aktipesan1() {
  kalimat.innerHTML = pesan1.innerHTML;
  kolombaru.style   = "position:relative;opacity:1;transform:scale(1)";
}

// ── pesan2+3 — TypeIt, speed 3 ───────────────────────────────────
const vketik2 = pesan2.innerHTML;
const vketik3 = pesan3.innerHTML;

function aktipesan2() {
  wallpaper.style   = "transform:scale(1.5)";
  kolombaru.style   = "";
  kalimat.innerHTML = "";
  new TypeIt("#kalimat", {
    strings: [vketik2, vketik3],
    startDelay: 0,
    speed: 3,
    cursor: false,
    deleteSpeed: 3,
    breakLines: false,
    waitUntilVisible: true,
    lifelike: false,
    afterComplete() {
      kalimat.innerHTML = vketik3;
      setTimeout(aktipesan4, 100);
    },
  }).go();
}

// ── pesan4/5/6 — INSTANT reveal with CSS fade-in ─────────────────
//    Each line fades in over 0.4s, staggered 400ms apart
//    Total for 3 lines: ~1.2s → fits the 4s budget easily

const vketik4 = pesan4.innerHTML;
pesan4.innerHTML = "";

function aktipesan4() {
  wallpaper.style = "transform:scale(1)";
  fthilang(); ftganti = 2; setTimeout(ftmuncul, 100);

  pesan4.style.opacity   = "0";
  pesan4.style.transform = "translateY(6px)";
  pesan4.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  pesan4.innerHTML = vketik4;

  // trigger reflow then fade in
  requestAnimationFrame(() => requestAnimationFrame(() => {
    pesan4.style.opacity   = "1";
    pesan4.style.transform = "translateY(0)";
  }));

  setTimeout(aktipesan5, 200);
}

const vketik5 = pesan5.innerHTML;
pesan5.innerHTML = "";

function aktipesan5() {
  wallpaper.style = "transform:scale(1.5)";
  fthilang(); ftganti = 3; setTimeout(ftmuncul, 100);

  pesan5.style.opacity    = "0";
  pesan5.style.transform  = "translateY(6px)";
  pesan5.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  pesan5.innerHTML = vketik5 + " 😊";

  requestAnimationFrame(() => requestAnimationFrame(() => {
    pesan5.style.opacity   = "1";
    pesan5.style.transform = "translateY(0)";
  }));

  setTimeout(aktipesan6, 200);
}

const vketik6 = pesan6.innerHTML;
pesan6.innerHTML = "";

function aktipesan6() {
  wallpaper.style = "transform:scale(1)";
  fthilang(); ftganti = 4; setTimeout(ftmuncul, 100);

  pesan6.style.opacity    = "0";
  pesan6.style.transform  = "translateY(6px)";
  pesan6.style.transition = "opacity 0.4s ease, transform 0.4s ease";
  pesan6.innerHTML = vketik6;

  requestAnimationFrame(() => requestAnimationFrame(() => {
    pesan6.style.opacity   = "1";
    pesan6.style.transform = "translateY(0)";
  }));

  setTimeout(tombol, 200);  // Next button appears ~400ms after last line
}

// ── Birthday icon taps ────────────────────────────────────────────
let slov = 0;
["lv1","lv2","lv3","lv4"].forEach(id => {
  document.getElementById(id).onclick = function () {
    this.style   = "opacity:0";
    this.onclick = null;
    slov += 1;
    checkslov();
  };
});

function checkslov() {
  if (slov === 4) {
    kolombaru.style = "position:relative;transform:scale(1)";
    fthilang(); ftganti = 1; setTimeout(ftmuncul, 200);
    otomatis();
    setTimeout(aktipesan2, 200);
  }
}

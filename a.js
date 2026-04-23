// ─────────────────────────────────────────────────────────────────
//  a.js
//  Speed: 32ms/char (average human reading pace +20% faster)
//  lifelike: false = no shake/stutter, perfectly smooth typing
// ─────────────────────────────────────────────────────────────────

const SPEED = 32; // ms per character — avg ~40ms, 20% faster = 32ms

// ── Init ──────────────────────────────────────────────────────────
function initengahan() {
  kadoIn.style    = "display:none";
  ket.style       = "display:none";
  Content.style   = "opacity:1;margin-top:0";
  bodyblur.style  = "opacity:.7";
  wallpaper.style = "transform:scale(1.5)";
}

// ── Intro sequence ────────────────────────────────────────────────
async function mulainama() {
  bodyblur.style   = "opacity:0";
  wallpaper.style  = "transform:scale(1)";
  fotostiker.style = "display:inline-flex";
  setTimeout(ftmuncul, 200);
  setTimeout(kethalo, 400);
}

// ── Sticker helpers ───────────────────────────────────────────────
function ftmuncul() {
  const srcs = [deffotostiker, fotostiker1.src, fotostiker2.src, fotostiker3.src, fotostiker4.src];
  fotostiker.src   = srcs[ftganti] || deffotostiker;
  fotostiker.style = "display:inline-flex;opacity:1;transform:scale(1)";
}

function fthilang() {
  fotostiker.style = "display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";
}

// ── Quote card reveal ─────────────────────────────────────────────
function bqmuncul() {
  bq.style = "position:relative;opacity:1;visibility:visible;transform:scale(1);margin-top:0";
  mulaiketik1();
  fungsi = 1;
}

// ── Greeting headline ─────────────────────────────────────────────
function kethalo() {
  new TypeIt("#halo", {
    strings: [vketikhalo],
    startDelay: 0,
    speed: SPEED,
    lifelike: false,
    waitUntilVisible: true,
    afterComplete() {
      halo.innerHTML = vketikhalo;
      setTimeout(bqmuncul, 300);
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

// ── Card main message ─────────────────────────────────────────────
const vketik1 = kalimat.innerHTML;
kalimat.innerHTML = "";

function mulaiketik1() {
  new TypeIt("#kalimat", {
    strings: [vketik1],
    startDelay: 0,
    speed: SPEED,
    cursor: false,
    lifelike: false,
    breakLines: false,
    waitUntilVisible: true,
    afterComplete() { aktiopsL(); },
  }).go();
}

// ── Tap-to-continue button ────────────────────────────────────────
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
  if (opsLcheck === 1) setTimeout(aktipesan1, 300);
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

// ── Fade kalimat briefly on scene change ─────────────────────────
function otomatis() {
  kalimat.style = "opacity:0";
  setTimeout(() => { kalimat.style = "opacity:1"; }, 300);
}

// ── pesan1 ────────────────────────────────────────────────────────
function aktipesan1() {
  kalimat.innerHTML = pesan1.innerHTML;
  kolombaru.style   = "position:relative;opacity:1;transform:scale(1)";
}

// ── pesan2 + pesan3 ───────────────────────────────────────────────
const vketik2 = pesan2.innerHTML;
const vketik3 = pesan3.innerHTML;

function aktipesan2() {
  wallpaper.style   = "transform:scale(1.5)";
  kolombaru.style   = "";
  kalimat.innerHTML = "";
  new TypeIt("#kalimat", {
    strings: [vketik2, vketik3],
    startDelay: 0,
    speed: SPEED,
    cursor: false,
    deleteSpeed: SPEED,
    lifelike: false,
    breakLines: false,
    waitUntilVisible: true,
    afterComplete() {
      kalimat.innerHTML = vketik3;
      setTimeout(aktipesan4, 400);
    },
  }).go();
}

// ── pesan4 ────────────────────────────────────────────────────────
const vketik4 = pesan4.innerHTML;
pesan4.innerHTML = "";

function aktipesan4() {
  wallpaper.style = "transform:scale(1)";
  fthilang();
  ftganti = 2;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan4", {
    strings: [vketik4],
    startDelay: 0,
    speed: SPEED,
    cursor: false,
    lifelike: false,
    waitUntilVisible: true,
    afterComplete() {
      pesan4.innerHTML = vketik4;
      setTimeout(aktipesan5, 400);
    },
  }).go();
}

// ── pesan5 ────────────────────────────────────────────────────────
const vketik5 = pesan5.innerHTML;
pesan5.innerHTML = "";

function aktipesan5() {
  wallpaper.style = "transform:scale(1.5)";
  fthilang();
  ftganti = 3;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan5", {
    strings: [vketik5],
    startDelay: 0,
    speed: SPEED,
    cursor: false,
    lifelike: false,
    waitUntilVisible: true,
    afterComplete() {
      pesan5.innerHTML = vketik5 + " 😊";
      setTimeout(aktipesan6, 400);
    },
  }).go();
}

// ── pesan6 ────────────────────────────────────────────────────────
const vketik6 = pesan6.innerHTML;
pesan6.innerHTML = "";

function aktipesan6() {
  wallpaper.style = "transform:scale(1)";
  fthilang();
  ftganti = 4;
  setTimeout(ftmuncul, 300);
  new TypeIt("#pesan6", {
    strings: [vketik6],
    startDelay: 0,
    speed: SPEED,
    cursor: false,
    lifelike: false,
    waitUntilVisible: true,
    afterComplete() {
      pesan6.innerHTML = vketik6;
      setTimeout(tombol, 400);
    },
  }).go();
}

// ── Birthday icon taps ────────────────────────────────────────────
let slov = 0;
["lv1", "lv2", "lv3", "lv4"].forEach(id => {
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
    fthilang();
    ftganti = 1;
    setTimeout(ftmuncul, 300);
    otomatis();
    setTimeout(aktipesan2, 400);
  }
}

function aSkoruArttir() {
  const takimSkorElement = document.getElementById("skorA");
  let skor = parseInt(takimSkorElement.innerHTML);
  takimSkorElement.innerHTML = ++skor;
}

function bSkoruArttir() {
  const takimSkorElement = document.getElementById("skorB");
  let skor = parseInt(takimSkorElement.innerHTML);
  takimSkorElement.innerHTML = ++skor;
}

//

function aSkoruAzalt() {
  const takimSkorElement = document.getElementById("skorA");
  let skor = parseInt(takimSkorElement.innerHTML);
  if (skor > 0) {
    takimSkorElement.innerHTML = --skor;
  } else {
    alert("Skor 0'dan küçük olamaz");
  }
}

function bSkoruAzalt() {
  const takimSkorElement = document.getElementById("skorB");
  let skor = parseInt(takimSkorElement.innerHTML);
  if (skor > 0) {
    takimSkorElement.innerHTML = --skor;
  } else {
    alert("Skor 0'dan küçük olamaz");
  }
}
//

function aSkoruSifirla() {
  const takimSkorElement = document.getElementById("skorA");
  takimSkorElement.innerHTML = 0;
}

function bSkoruSifirla() {
  const takimSkorElement = document.getElementById("skorB");
  takimSkorElement.innerHTML = 0;
}
//
function aTakimIsmiDegistir() {
  const alinanTakimIsmi = prompt("1. Takım için isim giriniz:");
  if (alinanTakimIsmi.length > 0) {
    const takimIsimElement = document.getElementById("isimA");
    takimIsimElement.innerHTML = alinanTakimIsmi;
  } else {
    alert("Hiç bir isim girilmedi");
  }
}

function bTakimIsmiDegistir() {
  const alinanTakimIsmi = prompt("1. Takım için isim giriniz:");
  if (alinanTakimIsmi.length > 0) {
    const takimIsimElement = document.getElementById("isimB");
    takimIsimElement.innerHTML = alinanTakimIsmi;
  } else {
    alert("Hiç bir isim girilmedi");
  }
}
function aTakimSkoruDegistir() {
  const yeniSkor = prompt("Güncel 1. Takim Skoru giriniz");
  let skor = parseInt(yeniSkor);
  if (!isNaN(yeniSkor)) {
    const yeniSkorElement = document.getElementById("skorA");
    yeniSkorElement.innerHTML = yeniSkor;
  } else alert("Numerik bir değer giriniz");
}

function bTakimSkoruDegistir() {
  const yeniSkor = prompt("Güncel 1. Takim Skoru giriniz");
  let skor = parseInt(yeniSkor);
  if (!isNaN(yeniSkor)) {
    const yeniSkorElement = document.getElementById("skorB");
    yeniSkorElement.innerHTML = yeniSkor;
  } else alert("Numerik bir değer giriniz");
}

function tahminiSkorA() {
  const tahminiSkorA = Math.floor(Math.random() * 9);
  const tahminiSkorAElement = document.getElementById("skorA");
  tahminiSkorAElement.innerHTML = tahminiSkorA;
}
function tahminiSkorB() {
  const tahminiSkorB = Math.floor(Math.random() * 9);
  const tahminiSkorBElement = document.getElementById("skorB");
  tahminiSkorBElement.innerHTML = tahminiSkorB;
}

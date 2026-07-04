// Mengubah teks mentah dari data.js menjadi daftar kata siap pakai
const kamus = kamusMentah
  .trim()
  .split("\n")
  .map(baris => {
    const bagian = baris.split("|").map(b => b.trim());
    return {
      lahat: bagian[0] || "",
      indonesia: bagian[1] || "",
      contohLahat: bagian[2] || "",
      contohIndonesia: bagian[3] || "",
    };
  });

const input = document.getElementById("inputCari");
const tombol = document.getElementById("btnCari");
const hasil = document.getElementById("hasil");
const contohKataEl = document.getElementById("contohKata");

// Ambil beberapa kata pertama sebagai contoh yang bisa diklik
const contohList = kamus.slice(0, 5);
contohKataEl.innerHTML = "Coba: " + contohList
  .map(entri => `<button type="button" class="chip-contoh">${entri.lahat}</button>`)
  .join(" ");

contohKataEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("chip-contoh")) {
    input.value = e.target.textContent;
    cariKata();
  }
});

// Membungkus bagian teks yang cocok dengan kata pencarian pakai <mark>
function sorotKata(teks, kata) {
  const idx = teks.toLowerCase().indexOf(kata.toLowerCase());
  if (idx === -1) return teks;
  return (
    teks.slice(0, idx) +
    "<mark>" + teks.slice(idx, idx + kata.length) + "</mark>" +
    teks.slice(idx + kata.length)
  );
}

function cariKata() {
  const kata = input.value.trim().toLowerCase();
  hasil.innerHTML = "";

  if (kata === "") {
    contohKataEl.style.display = "block";
    return;
  }
  contohKataEl.style.display = "none";

  const cocok = kamus.filter(entri =>
    entri.lahat.toLowerCase().includes(kata) ||
    entri.indonesia.toLowerCase().includes(kata)
  );

  if (cocok.length === 0) {
    hasil.innerHTML = "<p>Kata tidak ditemukan di kamus.</p>";
    return;
  }

  cocok.forEach(entri => {
    const blok = document.createElement("div");
    blok.className = "hasil-blok";
    let isi = "";
if (entri.lahat.trim().includes(" ")) {
  isi += `<p class="label-peribahasa">Peribahasa</p>`;
}
isi += `<p><strong>${sorotKata(entri.lahat, kata)}</strong> — ${sorotKata(entri.indonesia, kata)}</p>`;
    if (entri.contohLahat) {
      isi += `<p class="contoh-kalimat">${entri.contohLahat}`;
      if (entri.contohIndonesia) {
        isi += ` &rarr; ${entri.contohIndonesia}`;
      }
      isi += `</p>`;
    }
    blok.innerHTML = isi;
    hasil.appendChild(blok);
  });
}

const btnAcak = document.getElementById("btnAcak");
btnAcak.addEventListener("click", () => {
  const acak = kamus[Math.floor(Math.random() * kamus.length)];
  input.value = acak.lahat;
  cariKata();
});

let timer;
input.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(cariKata, 150);
});
tombol.addEventListener("click", cariKata);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") cariKata();
});

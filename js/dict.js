// =======================================================
// DATA KAMUS
// Tambahkan kata baru dengan format:
// { lahat: "kata bahasa Lahat", indonesia: "arti bahasa Indonesia" },
// Jangan lupa koma di akhir tiap baris kecuali baris terakhir.
// =======================================================
const kamus = [
  { lahat: "kata_lahat_1", indonesia: "arti_indonesia_1" },
  { lahat: "kata_lahat_2", indonesia: "arti_indonesia_2" },
  { lahat: "kata_lahat_3", indonesia: "arti_indonesia_3" },
];

const input = document.getElementById("inputCari");
const tombol = document.getElementById("btnCari");
const hasil = document.getElementById("hasil");

function cariKata() {
  const kata = input.value.trim().toLowerCase();
  hasil.innerHTML = "";

  if (kata === "") {
    hasil.innerHTML = "<p class='pesan'>Ketik kata dulu, ya.</p>";
    return;
  }

  const cocok = kamus.filter(entri =>
    entri.lahat.toLowerCase().includes(kata) ||
    entri.indonesia.toLowerCase().includes(kata)
  );

  if (cocok.length === 0) {
    hasil.innerHTML = "<p class='pesan'>Kata tidak ditemukan di kamus.</p>";
    return;
  }

  cocok.forEach(entri => {
    const kartu = document.createElement("div");
    kartu.className = "hasil-item";
    kartu.innerHTML = `<strong>${entri.lahat}</strong> — ${entri.indonesia}`;
    hasil.appendChild(kartu);
  });
}

tombol.addEventListener("click", cariKata);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") cariKata();
});

// =======================================================
// DATA KAMUS
// Tambahkan kata baru dengan format:
// { lahat: "kata bahasa Lahat", indonesia: "arti bahasa Indonesia" },
// Jangan lupa koma di akhir tiap baris kecuali baris terakhir.
// =======================================================
const kamus = [
  { lahat: "Majoh", indonesia: "makan" },
  { lahat: "Alap", indonesia: "bagus" },
  { lahat: "Ilok", indonesia: "baik" },
  { lahat: "Karut", indonesia: "buruk" },
  { lahat: "Tahok", indonesia: "sayur" },
  { lahat: "Belagak", indonesia: "rupawan" },
  { lahat: "Humah", indonesia: "rumah" },
  { lahat: "Mutor", indonesia: "sepeda motor" },
  { lahat: "Mobil", indonesia: "Mobil" },
  { lahat: "Bange", indonesia: "bodoh" },
  { lahat: "Gile", indonesia: "gila" },
  { lahat: "Seleme", indonesia: "flu" },
  { lahat: "Iyak", indonesia: "batuk" },
];

const input = document.getElementById("inputCari");
const tombol = document.getElementById("btnCari");
const hasil = document.getElementById("hasil");

function cariKata() {
  const kata = input.value.trim().toLowerCase();
  hasil.innerHTML = "";

  if (kata === "") {
    return;
  }

  const cocok = kamus.filter(entri =>
    entri.lahat.toLowerCase().includes(kata) ||
    entri.indonesia.toLowerCase().includes(kata)
  );

  if (cocok.length === 0) {
    hasil.innerHTML = "<p>Kata tidak ditemukan di kamus.</p>";
    return;
  }

  cocok.forEach(entri => {
    const baris = document.createElement("p");
    baris.innerHTML = `<strong>${entri.lahat}</strong> — ${entri.indonesia}`;
    hasil.appendChild(baris);
  });
}

// Update hasil otomatis tiap mengetik (termasuk otomatis kosong saat dihapus)
input.addEventListener("input", cariKata);
tombol.addEventListener("click", cariKata);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") cariKata();
});

// Mengubah teks mentah dari data.js menjadi daftar kata siap pakai
const kamus = kamusMentah
  .trim()
  .split("\n")
  .map(baris => {
    const [lahat, indonesia] = baris.split("|");
    return { lahat: lahat.trim(), indonesia: indonesia.trim() };
  });

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

input.addEventListener("input", cariKata);
tombol.addEventListener("click", cariKata);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") cariKata();
});

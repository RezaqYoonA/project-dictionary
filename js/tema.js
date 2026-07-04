// Toggle mode gelap/terang, tersimpan otomatis di HP pengunjung
const toggleBtn = document.getElementById("toggleTema");
const root = document.documentElement;

function terapkanTema(tema) {
  root.setAttribute("data-theme", tema);
  toggleBtn.textContent = tema === "dark" ? "☀️" : "🌙";
  localStorage.setItem("temaKamus", tema);
}

const temaTersimpan = localStorage.getItem("temaKamus") || "light";
terapkanTema(temaTersimpan);

toggleBtn.addEventListener("click", () => {
  const temaSekarang = root.getAttribute("data-theme");
  terapkanTema(temaSekarang === "dark" ? "light" : "dark");
});

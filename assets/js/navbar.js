// navbar.js
const currentPage = window.location.pathname.split('/').pop();
const navMenu = document.getElementById('nav-menu');
const isLoggedIn = localStorage.getItem("userLoggedIn") === "true"; // opsional kalau nanti pakai auth

if (navMenu) {
  // Kalau bukan di index.html, tambahin link ke Beranda
  if (currentPage !== "index.html") {
    navMenu.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="/app-vehicle-monitoring/index.html">Beranda</a>
      </li>`;
  }

  // Link ke halaman Tentang
  navMenu.innerHTML += `
    <li class="nav-item">
      <a class="nav-link" href="/app-vehicle-monitoring/pages/tentang.html">Tentang</a>
    </li>`;

  // Login atau Profil
  if (isLoggedIn) {
    navMenu.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="/app-vehicle-monitoring/pages/profil.html">Profil</a>
      </li>`;
  } else {
    navMenu.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="/app-vehicle-monitoring/pages/login.html">Login</a>
      </li>`;
  }
}

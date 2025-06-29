console.log("navbar.js loaded!");

// Deteksi path untuk GitHub Pages
const currentPath = window.location.pathname;
const currentPage = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

console.log("Current page:", currentPage);

const navMenu = document.getElementById('nav-menu');
const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";

if (navMenu) {
  // Kalau bukan di index.html, tambahin link ke Beranda
  if (currentPage !== "index.html") {
    navMenu.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="/app-vechile-monitoring/index.html">Beranda</a>
      </li>`;
  }

  // Link ke halaman Tentang
  navMenu.innerHTML += `
    <li class="nav-item">
      <a class="nav-link" href="/app-vechile-monitoring/pages/tentang.html">Tentang</a>
    </li>`;

  // Login atau Profil
  if (isLoggedIn) {
    navMenu.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="/app-vechile-monitoring/pages/profil.html">Profil</a>
      </li>`;
  } else {
    navMenu.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="/app-vechile-monitoring/pages/login.html">Login</a>
      </li>`;
  }
}

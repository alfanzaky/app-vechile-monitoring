// File: assets/js/navbar.js

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navMenu = document.getElementById("nav-menu");
  const isLoggedIn = localStorage.getItem("userLoggedIn") === "true"; // opsional

  if (!navMenu) return;

  // Tambah Beranda jika bukan index.html
  if (currentPage !== "index.html" && currentPage !== "") {
    navMenu.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="/app-vehicle-monitoring/index.html">Beranda</a>
      </li>`;
  }

  // Tambah menu Tentang
  navMenu.innerHTML += `
    <li class="nav-item">
      <a class="nav-link" href="/app-vehicle-monitoring/pages/tentang.html">Tentang</a>
    </li>`;

  // Menu Login atau Profil
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
});

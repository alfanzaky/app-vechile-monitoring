document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split('/').pop();
  const navMenu = document.getElementById('nav-menu');
  const isLoggedIn = localStorage.getItem("userLoggedIn") === "true"; // opsional

  if (navMenu) {
    // Tampilkan "Beranda" kalau user tidak di index.html
    if (currentPage !== "index.html") {
      navMenu.innerHTML += `
        <li class="nav-item">
          <a class="nav-link" href="/app-vehicle-monitoring/index.html">Beranda</a>
        </li>`;
    }

    // Tambah menu "Tentang"
    navMenu.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="/app-vehicle-monitoring/pages/tentang.html">Tentang</a>
      </li>`;

    // Login atau Profil (opsional, bisa diaktifkan nanti)
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
});

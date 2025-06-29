document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split('/').pop();
  const navMenu = document.getElementById('nav-menu');
  const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";

  if (navMenu) {
    if (currentPage !== "index.html") {
      navMenu.innerHTML += `
        <li class="nav-item">
          <a class="nav-link" href="/app-vehicle-monitoring/index.html">Beranda</a>
        </li>`;
    }

    navMenu.innerHTML += `
      <li class="nav-item">
        <a class="nav-link" href="/app-vehicle-monitoring/pages/tentang.html">Tentang</a>
      </li>`;

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

// Firebase import module dari CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyChSyKm7Oj0YX2qI0krdAD9csmUcKmFgrM",
  authDomain: "app-vechile-monitoring-9d457.firebaseapp.com",
  projectId: "app-vechile-monitoring-9d457",
  storageBucket: "app-vechile-monitoring-9d457.firebasestorage.app",
  messagingSenderId: "138995010284",
  appId: "1:138995010284:web:2f9af2aef9959678c6f3c9"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helper untuk gambar default berdasarkan jenis kendaraan
function getDefaultImage(jenis) {
  switch (jenis) {
    case 'BBM': return 'assets/img/bbm.jpg';
    case 'Hybrid': return 'assets/img/hybrid.jpg';
    case 'Listrik': return 'assets/img/listrik.jpg';
    default: return 'assets/img/default.jpg';
  }
}

// Load data dari Firestore
async function loadData() {
  const querySnapshot = await getDocs(collection(db, "kendaraan"));

  let total = 0;
  let listBBM = "", listHybrid = "", listListrik = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    total++;

    const jenis = data.jenisBahanBakar || "BBM";
    const foto = data.fotoUrl && data.fotoUrl.trim() !== "" ? data.fotoUrl : getDefaultImage(jenis);

    const card = `
      <div class="card mb-3 shadow-sm">
        <div class="row g-0">
          <div class="col-4">
            <img src="${foto}" class="img-fluid rounded-start h-100 object-fit-cover" alt="foto kendaraan">
          </div>
          <div class="col-8">
            <div class="card-body p-2">
              <h6 class="card-title mb-1">${data.namaKendaraan}</h6>
              <p class="mb-1"><strong>Plat:</strong> ${data.platNomor}</p>
              <p class="mb-1"><strong>Bahan Bakar:</strong> ${jenis}</p>
              <p class="mb-1"><strong>Servis Terakhir:</strong> ${data.tglServiceTerakhir}</p>
              <p class="mb-0"><strong>Servis Berikutnya:</strong> ${data.jadwalService}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    // Masukkan card ke kategori yang sesuai
    if (jenis === "BBM") listBBM += card;
    else if (jenis === "Hybrid") listHybrid += card;
    else if (jenis === "Listrik") listListrik += card;
  });

  // Update UI
  document.getElementById("total-kendaraan").textContent = total;
  document.getElementById("list-bbm").innerHTML = listBBM || "<p class='text-muted'>Belum ada data.</p>";
  document.getElementById("list-hybrid").innerHTML = listHybrid || "<p class='text-muted'>Belum ada data.</p>";
  document.getElementById("list-listrik").innerHTML = listListrik || "<p class='text-muted'>Belum ada data.</p>";
}

// Jalankan load
loadData();

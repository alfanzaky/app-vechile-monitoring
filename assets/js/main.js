// File: assets/js/main.js

// Ambil referensi koleksi dari Firestore
const kendaraanRef = db.collection("kendaraan");

// Elemen target
const totalKendaraanEl = document.getElementById("total-kendaraan");
const listBBM = document.getElementById("list-bbm");
const listHybrid = document.getElementById("list-hybrid");
const listListrik = document.getElementById("list-listrik");

// Format kartu deskripsi kendaraan
function createKendaraanCard(data) {
  const {
    nama = "-",
    plat = "-",
    jenis = "-",
    terakhirServis = "-",
    jadwalServis = "-",
    foto = "assets/img/default.jpg"
  } = data;

  return `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-4">
          <img src="${foto}" class="img-fluid rounded-start" alt="${nama}" />
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">${nama}</h5>
            <p class="card-text mb-1"><strong>Plat:</strong> ${plat}</p>
            <p class="card-text mb-1"><strong>Jenis:</strong> ${jenis}</p>
            <p class="card-text mb-1"><strong>Servis Terakhir:</strong> ${terakhirServis}</p>
            <p class="card-text mb-0"><strong>Jadwal Berikutnya:</strong> ${jadwalServis}</p>
          </div>
        </div>
      </div>
    </div>`;
}

// Ambil data kendaraan dan tampilkan
kendaraanRef.get().then(snapshot => {
  let total = 0;
  snapshot.forEach(doc => {
    const data = doc.data();
    total++;

    const cardHTML = createKendaraanCard(data);
    if (data.jenis === "BBM") {
      listBBM.innerHTML += cardHTML;
    } else if (data.jenis === "Hybrid") {
      listHybrid.innerHTML += cardHTML;
    } else if (data.jenis === "Listrik") {
      listListrik.innerHTML += cardHTML;
    }
  });
  totalKendaraanEl.textContent = total;
}).catch(error => {
  console.error("Gagal mengambil data:", error);
});

// main.js

// Fungsi bantu buat render deskripsi kendaraan function renderKendaraan(data, containerId) { const container = document.getElementById(containerId); container.innerHTML = ''; // bersihin kontainer

data.forEach(doc => { const kendaraan = doc.data(); const div = document.createElement('div'); div.className = 'mb-3 p-2 border rounded shadow-sm'; div.innerHTML = <div class="d-flex"> <img src="${kendaraan.fotoUrl}" alt="${kendaraan.nama}" class="me-3 rounded" style="width: 80px; height: 60px; object-fit: cover;"> <div> <h6 class="mb-1">${kendaraan.nama}</h6> <p class="mb-0">Plat: ${kendaraan.plat}</p> <p class="mb-0">Bahan Bakar: ${kendaraan.jenis}</p> <p class="mb-0">Servis Terakhir: ${kendaraan.servisTerakhir}</p> <p class="mb-0">Servis Berikutnya: ${kendaraan.servisBerikut}</p> </div> </div>; container.appendChild(div); }); }

// Ambil data dari Firebase saat halaman ready window.addEventListener('DOMContentLoaded', () => { db.collection("kendaraan").get().then(snapshot => { const semuaData = snapshot.docs;

// Tampilkan total kendaraan
document.getElementById("total-kendaraan").innerText = semuaData.length;

// Filter berdasarkan jenis
const bbm = semuaData.filter(doc => doc.data().jenis.toLowerCase() === 'bbm');
const hybrid = semuaData.filter(doc => doc.data().jenis.toLowerCase() === 'hybrid');
const listrik = semuaData.filter(doc => doc.data().jenis.toLowerCase() === 'listrik');

// Render ke masing-masing kartu
renderKendaraan(bbm, 'list-bbm');
renderKendaraan(hybrid, 'list-hybrid');
renderKendaraan(listrik, 'list-listrik');

}).catch(error => { console.error("Gagal mengambil data dari Firebase:", error); }); });


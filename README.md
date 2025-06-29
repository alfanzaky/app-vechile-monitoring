# 🚗 Vehicle Monitoring App

Aplikasi berbasis HTML + Bootstrap 5.3.7 untuk memantau dan mencatat data kendaraan secara manual.  
Dirancang sebagai proyek front-end statis yang bisa dijalankan langsung di GitHub Pages.

---

## 🎯 Tujuan Proyek
Menyediakan sistem monitoring kendaraan sederhana yang mendukung:
- Input data kendaraan manual (lokasi, odometer, suhu, dll)
- Upload foto kendaraan (format .jpg/.png, max 1 MB)
- Riwayat pemantauan kendaraan
- Tampilan yang rapi, modern, dan responsif menggunakan Bootstrap v5.3.7 lokal

---

## 🗂️ Struktur Folder
app-vehicle-monitoring/
├── index.html                     ← Dashboard utama
│
├── pages/                         ← 🔥 Halaman-halaman terpisah
│   ├── input.html                 ← Form input kendaraan
│   └── riwayat.html              ← Riwayat monitoring
│
├── components/
│   ├── navbar.html                ← Navigasi global
│   └── footer.html                ← Footer (optional)
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   │   └── (foto kendaraan)
│   └── bootstrap/
│       ├── css/
│       │   └── bootstrap.min.css
│       └── js/
│           └── bootstrap.bundle.min.js
│
└── README.md

---

## ✅ Fitur Utama
- Validasi upload file:
  - ✅ Format: `.jpg`, `.jpeg`, `.png`
  - ✅ Ukuran maksimal: 1 MB
- Responsive design (mobile friendly)
- Tanpa backend — cocok untuk demo & deployment via GitHub Pages

---

## 🚀 Cara Menjalankan
1. Clone repo ini
2. Buka `index.html` di browser, atau
3. Deploy ke GitHub Pages:
   - Settings > Pages > Source: `main` branch, root folder

---

## 📦 Roadmap Pengembangan
- [x] Struktur halaman terpisah (modular)
- [x] Validasi upload gambar
- [ ] Sinkronisasi Firebase (untuk upload gambar ke cloud)
- [ ] Mode admin + login (opsional)
- [ ] Export riwayat ke Excel/CSV

---

## 🧠 Teknologi yang Digunakan
- HTML5
- CSS3 + Bootstrap v5.3.7 (lokal)
- JavaScript vanilla
- GitHub Pages

---

## 🧑‍💻 Author
**Alfan Rozak**  
Pengembangan oleh developer lokal yang peduli akan efisiensi dan struktur rapi  
🌐 Telegram: [@blinks_id](https://t.me/blinks_id)

---

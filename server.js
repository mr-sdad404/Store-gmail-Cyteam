const express = require('express');
const path = require('path');
const app = express();

// 1. Mengambil PORT alokasi otomatis dari sistem Panel Pterodactyl
// Jika tidak terdeteksi, server akan menggunakan port default 3000
const PORT = process.env.SERVER_PORT || 3000;

// 2. Membaca file statis (HTML, CSS, Gambar) dari dalam folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 3. Mengarahkan semua request halaman utama ke file index.html di dalam folder public
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 4. Menjalankan server pada IP global (0.0.0.0) agar bisa diakses via domain/IP luar
app.listen(PORT, '0.0.0.0', () => {
  console.log('==================================================');
  console.log('       SERVER STORE GMAIL CY TEAM AKTIF           ');
  console.log(` Website berhasil dijalankan pada port alokasi: ${PORT}`);
  console.log('==================================================');
});

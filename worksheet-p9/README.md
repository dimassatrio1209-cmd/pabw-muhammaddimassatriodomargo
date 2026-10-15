# Proyek P9 — DOM, Events, and Interactivity

Proyek ini merupakan pengembangan dari halaman profil P8. Pada P9, data proyek ditampilkan sebagai elemen DOM, tombol filter menggunakan event delegation, dan formulir dilengkapi validasi sisi klien.

## Berkas

* `profil.html`: struktur halaman profil, daftar proyek, tombol filter, dan formulir.
* `tokens.css`: token warna, jarak, radius, dan bayangan.
* `base.css`: reset dasar, tipografi, fokus, gambar, dan tabel.
* `layout.css`: struktur header, konten, sidebar, dan footer.
* `komponen.css`: kartu, tombol, avatar, galeri, dan tabel.
* `tema.css`: detail tema dan preferensi gerak.
* `responsif.css`: tata letak mobile-first dan breakpoint responsif.
* `js/app.js`: data profil dan array `daftarProyek`.
* `js/dom.js`: selector DOM, pembuatan kartu, rendering, filter, dan validasi formulir.

## Menjalankan Proyek

Buka folder `worksheet-p9/` di VS Code, kemudian jalankan `profil.html` melalui Live Server.

Halaman juga dapat dijalankan melalui server Python dengan perintah berikut dari terminal di folder proyek:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000/profil.html`.

## Implementasi JavaScript

### DOM dan rendering

Elemen dipilih menggunakan `querySelector()` dan `querySelectorAll()`. Fungsi `buildCard()` membuat kartu proyek dengan `createElement()` dan `textContent`, sedangkan `render()` menampilkan daftar proyek serta pesan ketika daftar kosong.

### Events dan filter

Tombol filter ditangani melalui satu listener pada elemen induk `#filter`. `event.target.closest("button")` digunakan untuk menemukan tombol yang diklik, lalu `data-category` menentukan proyek yang ditampilkan.

### Validasi formulir

Form menggunakan `event.preventDefault()` agar halaman tidak dimuat ulang saat dikirim. Nama dan pesan harus berisi teks nonspasi, sedangkan email diperiksa dengan pola email sederhana. Pesan kesalahan ditampilkan pada field terkait dan tombol submit diaktifkan ketika semua input valid.

## Debugging dan Pemeriksaan

Kode dapat diperiksa melalui Console dan Sources pada DevTools. Periksa kesesuaian selector dengan elemen HTML, penanganan daftar kosong, pemasangan listener, serta pesan validasi. Dokumentasi ini menjelaskan implementasi berdasarkan kode sumber.

## Catatan Penggunaan AI

AI digunakan sebagai alat bantu untuk memahami konsep DOM, event delegation, validasi formulir, dan penyusunan dokumentasi. Kode akhir perlu dipahami dan diperiksa kembali sebelum dikumpulkan.

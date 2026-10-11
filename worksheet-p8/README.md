# Proyek P8 — JavaScript Modern ES6+

Proyek ini merupakan pengembangan dari halaman profil responsif pada Pertemuan 6. Pada P8, data profil dan proyek mulai dikelola menggunakan JavaScript dengan konsep ES6+ dan metode pengolahan array.

## Berkas

* `profil.html`: struktur halaman profil dan pemanggilan JavaScript menggunakan `type="module"`.
* `tokens.css`: token warna, jarak, radius, dan bayangan.
* `base.css`: reset dasar, tipografi, fokus, gambar, dan tabel.
* `layout.css`: struktur header, konten, sidebar, dan footer.
* `komponen.css`: kartu, tombol, avatar, galeri, dan tabel.
* `tema.css`: detail tema dan preferensi gerak.
* `responsif.css`: tata letak mobile-first dengan breakpoint 48rem dan 60rem.
* `js/app.js`: data profil, fungsi perkenalan, pemformatan keahlian, dan pengolahan data proyek.

## Menjalankan Proyek

Buka folder `worksheet-p8/` di VS Code, kemudian jalankan `profil.html` melalui Live Server.

Halaman juga dapat dijalankan melalui server Python dengan perintah berikut dari terminal di folder proyek:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000/profil.html`.

## Implementasi JavaScript

### Data dan variabel

Data profil disimpan dalam objek `profil`, yang memuat nama, peran, dan daftar keahlian. Jumlah proyek disimpan dalam variabel `jumlahProyek`.

### Fungsi

Dua fungsi yang digunakan adalah:

* `buatPerkenalan()`: menghasilkan kalimat perkenalan berdasarkan data profil.
* `formatKeahlian()`: menggabungkan daftar keahlian menjadi satu teks.

### Pengolahan array

Data proyek disimpan dalam array `daftarProyek`, dengan setiap proyek memiliki properti `judul`, `tahun`, dan `selesai`.

Metode array yang diterapkan:

* `console.table()`: menampilkan data proyek dalam bentuk tabel.
* `map()`: mengambil judul dari setiap proyek.
* `filter()`: memilih proyek yang sudah selesai.
* `find()`: mencari satu proyek berdasarkan judul.
* `sort()`: mengurutkan salinan array berdasarkan judul tanpa mengubah urutan array asli.

## Debugging dan Pemeriksaan

Pemeriksaan dilakukan melalui Console dan Sources pada DevTools peramban. Breakpoint digunakan untuk menghentikan eksekusi pada baris tertentu dan mengamati nilai variabel.

Pengujian juga mencakup kasus properti yang tidak tersedia, elemen HTML yang tidak ditemukan, dan konversi string menjadi angka. Setelah pengujian, kode sementara yang menimbulkan galat dihapus atau diperbaiki.

## Catatan Penggunaan AI

AI digunakan sebagai alat bantu untuk memahami konsep JavaScript ES6+, meninjau kode, dan menyusun dokumentasi. Implementasi serta hasil pengujian diperiksa kembali selama pengerjaan proyek.

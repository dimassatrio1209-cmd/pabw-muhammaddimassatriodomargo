# Proyek P6 — Responsif Mobile-First

Halaman profil ini disiapkan sebagai fondasi proyek untuk Worksheet P8.

## Berkas
- `profil.html`: struktur halaman dan meta viewport.
- `tokens.css`: token warna, jarak, radius, dan bayangan.
- `base.css`: reset dasar, tipografi, fokus, gambar, dan tabel.
- `layout.css`: struktur header, konten, sidebar, dan footer.
- `komponen.css`: kartu, tombol, avatar, galeri, dan tabel.
- `tema.css`: detail tema dan preferensi gerak.
- `responsif.css`: gaya mobile-first dan breakpoint 48rem serta 60rem.

## Menjalankan
Buka folder ini di VS Code. Jalankan melalui Live Server jika tersedia, atau buka terminal pada folder ini dan jalankan:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000/profil.html`.

## Pemeriksaan yang perlu dilakukan di peramban
Uji pada lebar 360 px, 768 px, dan 1280 px melalui DevTools. Pastikan tidak ada gulir mendatar pada halaman utama, galeri menjadi 1/2/3 kolom sesuai breakpoint, dan tabel menggulir di wadahnya sendiri jika ruang sempit. Tangkapan layar harus diambil dari hasil uji nyata.

## Melanjutkan ke P8
Salin `profil.html` dan seluruh enam berkas CSS ke folder `worksheet-p8/`. Buat `js/app.js`, lalu tambahkan sebelum `</body>`:

```html
<script type="module" src="js/app.js"></script>
```

Pindahkan data profil, keahlian, dan proyek ke JavaScript sesuai instruksi P8. Jangan menambahkan tag script ke P6 jika belum masuk tahap P8.

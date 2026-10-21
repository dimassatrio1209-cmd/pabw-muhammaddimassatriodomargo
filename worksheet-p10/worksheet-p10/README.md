# Proyek P10 — Fetch, Promise, dan JSON

Pengembangan dari P9: halaman profil tetap memiliki daftar proyek, filter, dan validasi formulir, serta memuat data contoh dari API publik.

## Berkas utama
- `js/api.js`: alamat API, `fetch()`, pemeriksaan `response.ok`, pembacaan JSON, dan ekspor `fetchNews()`.
- `js/app.js`: memanggil `fetchNews()` serta menampilkan state loading, success, failure, dan empty.
- `js/dom.js`: rendering proyek, filter, dan validasi formulir.
- `profil.html` dan enam berkas CSS: struktur serta tampilan halaman.

## Menjalankan
Buka folder ini di VS Code, jalankan Live Server, lalu buka halaman melalui `http://localhost`. Alternatif: jalankan `python -m http.server 8000` dari folder proyek dan buka `http://localhost:8000/profil.html`.

API yang digunakan: `https://jsonplaceholder.typicode.com/posts?_limit=5` (API publik contoh, tanpa access key). Koneksi internet diperlukan.

## Catatan AI
AI membantu penyusunan dan pemeriksaan awal kode serta dokumentasi. Saya perlu membaca, memahami, dan menguji sendiri kode dan seluruh state sebelum mengumpulkan.

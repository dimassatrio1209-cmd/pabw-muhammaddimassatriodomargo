// updated app.js
const profil = {
  nama: "Muhammad Dimas Satrio Domargo",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "Java", "JavaScript"],
};

const jumlahProyek = 3;

const kalimat = `Nama saya ${profil.nama}, dan saya adalah ${profil.peran}.`;

console.log(kalimat);
console.log("Jumlah proyek:", jumlahProyek);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


const daftarProyek = [
  {
    judul: "Halaman Profil Responsif",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Hako Inventory",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Daftar Kafe Favorit",
    tahun: 2026,
    selesai: false,
  },
];

// Menampilkan seluruh data proyek
console.table(daftarProyek);

// map: mengambil judul dari setiap proyek
const judulProyek = daftarProyek.map(
  (proyek) => proyek.judul
);
console.log("Judul proyek:", judulProyek);

// filter: mengambil proyek yang sudah selesai
const proyekSelesai = daftarProyek.filter(
  (proyek) => proyek.selesai
);
console.table(proyekSelesai);

// find: mencari satu proyek berdasarkan judul
const proyekDicari = daftarProyek.find(
  (proyek) => proyek.judul === "Hako Inventory"
);
console.log(proyekDicari);

// sort: mengurutkan proyek berdasarkan judul tanpa mengubah array asli
const proyekTerurut = [...daftarProyek].sort(
  (a, b) => a.judul.localeCompare(b.judul)
);

console.table(proyekTerurut);

// Memeriksa urutan data asli
console.table(daftarProyek);
// Data dan fungsi pengolahan data dari P8.
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

// Data proyek digunakan oleh dom.js untuk membangun tampilan halaman.
export const daftarProyek = [
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

// Pemeriksaan data P8 melalui Console.
console.table(daftarProyek);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log("Judul proyek:", judulProyek);

const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(proyekSelesai);

const proyekDicari = daftarProyek.find(
  (proyek) => proyek.judul === "Hako Inventory"
);
console.log(proyekDicari);

const proyekTerurut = [...daftarProyek].sort(
  (a, b) => a.judul.localeCompare(b.judul)
);
console.table(proyekTerurut);

// Pastikan sort tidak mengubah urutan data asli.
console.table(daftarProyek);


/* P10: pemanggil API dan tampilan state data berita. */
import { fetchNews } from "./api.js";

const newsContainer = document.querySelector("#news-list");
const newsStatus = document.querySelector("#news-status");

function renderNews(items) {
  newsContainer.textContent = "";

  if (items.length === 0) {
    newsStatus.textContent = "Belum ada berita untuk ditampilkan.";
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const card = document.createElement("li");
    card.className = "project-card card";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = item.title;

    const body = document.createElement("p");
    body.textContent = item.body;

    card.append(title, body);
    fragment.append(card);
  });

  newsContainer.append(fragment);
  newsStatus.textContent = `Berhasil memuat ${items.length} berita.`;
}

async function loadNews() {
  newsStatus.textContent = "Memuat berita...";

  try {
    const news = await fetchNews();
    renderNews(news);
  } catch (error) {
    newsContainer.textContent = "";
    newsStatus.textContent = `Gagal memuat berita: ${error.message}`;
  }
}

loadNews();

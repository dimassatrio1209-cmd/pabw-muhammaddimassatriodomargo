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
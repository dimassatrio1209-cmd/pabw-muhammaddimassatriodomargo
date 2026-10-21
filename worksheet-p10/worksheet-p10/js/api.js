// Satu-satunya tempat untuk mengatur alamat API.
const URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

/**
 * Mengambil daftar berita contoh dari API publik.
 * Fetch hanya dilakukan di file ini.
 */
export async function fetchNews() {
  try {
    const response = await fetch(URL);
    console.log("status", response.status, "ok", response.ok);

    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }

    const data = await response.json();

    // JSON.stringify mengubah nilai menjadi teks JSON.
    // JSON.parse mengubah teks JSON kembali menjadi nilai JavaScript.
    const jsonText = JSON.stringify(data);
    const parsedData = JSON.parse(jsonText);

    if (!Array.isArray(parsedData)) {
      throw new Error("Format data API tidak sesuai: daftar harus berupa array.");
    }

    return parsedData;
  } catch (error) {
    console.error("Gagal mengambil data:", error.message);
    throw error;
  }
}

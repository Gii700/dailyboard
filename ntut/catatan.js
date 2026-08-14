import { simpanKeStorage } from "./storege.js"; // Pastikan ejaan nama file storege.js Anda sudah benar

// FASE 3: Fungsi Tambah Catatan Murni
export function tambahCatatan(daftar, isi) {
  const tanggalHariIni = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const catatanBaru = {
    id: Date.now(), // Menggunakan timestamp unik sebagai ID catatan
    isi: isi.trim(),
    tanggal: tanggalHariIni
  };

  const daftarBaru = [...daftar, catatanBaru];
  
  // Simpan array baru ke localStorage melalui fungsi eksternal
  if (typeof simpanKeStorage === "function") {
    // Jika storege.js Anda memisahkan key tugas dan catatan, sesuaikan parameter keduanya di sini
    // Contoh: simpanKeStorage(daftarBaru, "catatan");
    simpanKeStorage(daftarBaru); 
  }

  return daftarBaru;
}

// FASE 3: Fungsi Hapus Catatan Murni
export function hapusCatatan(daftar, id) {
  const daftarBaru = daftar.filter((c) => c.id !== id);
  
  if (typeof simpanKeStorage === "function") {
    simpanKeStorage(daftarBaru);
  }

  return daftarBaru;
}

import { simpanKeStorage } from "./storege.js";

// MINGGU 9: Fungsi Validasi Input
export function validasiInput(nilai) {
  if (!nilai || typeof nilai !== "string" || nilai.trim() === "") {
    alert("Input tidak boleh kosong!");
    return false;
  }
  if (nilai.length > 100) {
    alert("Input maksimal 100 karakter!");
    return false;
  }
  return true;
}

// MINGGU 5: Tambah Tugas
export function tambahTugas(daftar, nama, nextId) {
  const tugasBaru = { id: nextId, nama: nama.trim(), selesai: false };
  const daftarBaru = [...daftar, tugasBaru];
  simpanKeStorage(daftarBaru);
  return { daftarBaru, nextId: nextId + 1 };
}

// MINGGU 5: Hapus Tugas
export function hapusTugas(daftar, id) {
  const daftarBaru = daftar.filter((t) => t.id !== id);
  simpanKeStorage(daftarBaru);
  return daftarBaru;
}

// MINGGU 6: Tandai Selesai
export function toggleSelesai(daftar, id) {
  const daftarBaru = daftar.map((t) =>
    t.id === id ? { ...t, selesai: !t.selesai } : t
  );
  simpanKeStorage(daftarBaru);
  return daftarBaru;
}

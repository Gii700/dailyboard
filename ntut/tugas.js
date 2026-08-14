import { simpanKeStorage } from "./storege.js";

// MINGGU 9: Fungsi Validasi Input
export function validasiInput(nilai) {
  if (nilai.trim() === "") {
    alert("Input tidak boleh kosong!");
    return false;
  }
  if (nilai.length > 100) {
    alert("Input maksimal 100 karakter!");
    return false;
  }
  return true;
}

// MINGGU 5: Tambah & Hapus Tugas
export function tambahTugas(daftar , nama , nextId) {
    const tugasBaru = {id : nextId , nama , selesai : false};
    const daftarBaru = [...daftar , tugasBaru];
    simpanKeStorage(daftarBaru);
    return {daftarBaru , nextId : nextId + 1};
}

export function hapusTugas(id) {
  daftarTugas = daftarTugas.filter((t) => t.id !== id);
  simpanKeStorage(daftarBaru);
  return daftarBaru;
}

// MINGGU 6: Tandai Selesai & Filter
export function toggleSelesai(id) {
  daftarTugas = daftarTugas.map((t) =>
    t.id === id ? { ...t, selesai: !t.selesai } : t
  );
  simpanKeStorage(daftarBaru);
  return daftarBaru;
}


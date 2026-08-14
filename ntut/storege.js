// =========================================================================
// FILE: ntut/storege.js
// =========================================================================

// WAJIB ADA: Deklarasi variabel state utama aplikasi
export let daftarTugas = [];
export let nextId = 1;
export let filterAktif = "semua";
export let kataKunciCari = "";
export let daftarCatatan = [];

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

// MINGGU 7: Simpan & Muat LocalStorage untuk Tugas
export function simpanKeStorage() {
  localStorage.setItem("daftarTugas", JSON.stringify(daftarTugas));
}

export function muatDariStorage() {
  const data = localStorage.getItem("daftarTugas");
  if (data) {
    const dataParsed = JSON.parse(data);
    daftarTugas.length = 0; 
    daftarTugas.push(...dataParsed);

    if (daftarTugas.length > 0) {
      const maxId = Math.max(...daftarTugas.map((t) => t.id));
      nextId = maxId + 1;
    }
  } else {
    daftarTugas.length = 0;
    daftarTugas.push(
      { id: 1, nama: "Belajar JavaScript DOM", selesai: false },
      { id: 2, nama: "Mencoba Drag and Drop", selesai: false }
    );
    nextId = 3;
  }
}

export function simpanCatatanKeStorage() {
  localStorage.setItem("daftarCatatan", JSON.stringify(daftarCatatan));
}

export function muatCatatanDariStorage() {
  const data = localStorage.getItem("daftarCatatan");
  if (data) {
    const dataParsed = JSON.parse(data);
    daftarCatatan.length = 0;
    daftarCatatan.push(...dataParsed);
  } else {
    daftarCatatan.length = 0;
  }
}

// Fungsi pembantu untuk memanipulasi nilai dari modul luar secara aman
export function setDaftarTugas(nilaiBaru) { 
  daftarTugas.length = 0;
  daftarTugas.push(...nilaiBaru);
}
export function setNextId(nilaiBaru) { nextId = nilaiBaru; }
export function setFilterAktif(nilaiBaru) { filterAktif = nilaiBaru; }
export function setKataKunciCari(nilaiBaru) { kataKunciCari = nilaiBaru; }
export function setDaftarCatatan(nilaiBaru) { 
  daftarCatatan.length = 0;
  daftarCatatan.push(...nilaiBaru);
}

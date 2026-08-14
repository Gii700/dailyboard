import {simpanCatatanKeStorage} from "./storege.js";

export function tambahCatatan(daftar, isi) {
  daftarCatatan.push = {
    id: Date.now(),
    isi,
    tanggal: new Date().toLocaleDateString("id-ID")
  };
  const daftarbaru = [...daftar, catatanBaru];
}

export function hapusCatatan(id) {
  daftarCatatan = daftarCatatan.filter((c) => c.id !== id);
}